import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'; 
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DeckIcon from '@material-ui/icons/Deck';
import CameraIcon from '@material-ui/icons/Camera';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

import Collapse from '@material-ui/core/Collapse';

import $ from "jquery";
import typer from 'typer-js';
import "typer-js/typer.css";

import Landing from './landing.js';
import AboutMe from './aboutme.js';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const TEXTOBJ = [
  {str: "This site is hosted on Google's Firebase and made with <span style={{color:'red'}} >React!</span>"},
  {str: "Hello and welcome to my website!"},
  {str: "Feel free to tell your friends about me :)"},
  {str: "I am currently looking for a job, send me a message if you can help."},
];

const PROJECTS = [
  "Camagru", "Matcha"
]


export default class Overview extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      page: 0,
      showchild: false,
    }
  }

  setPage = (page) => this.setState({page});

  runTyper = async () => {
    const len = TEXTOBJ.length;
    let i = 0;

    const custom_typer = (i, len) => {
        const elem = "#writer";
        if (i === len) i = 0;
        typer(elem, 50)
        .cursor({block: false, blink: 'hard', color: 'red'})
        .line(TEXTOBJ[i].str)
        .pause(1000)
        .back(TEXTOBJ[i].str.length)
        .end(true, () => {
            custom_typer(++i, len);
        });
        $(".white-space").remove();
    }

    custom_typer(i, len);
}


  PageController = () => {
    const {page} = this.state;

    if ( page === 0)
      return <Landing />
    else if ( page === 1)
      return <AboutMe />
  }

  componentDidMount() {
    this.runTyper();
    // this.setState({page:0});
  }

  handleCollapse() {
    this.setState({showchild:!this.state.showchild});
    return false;
  }

  SideDrawer = () =>  {
    const classes = useStyles();
    // console.log(setPage);



    const contentArray = [
      <ListItemIcon>
        <CameraIcon /> 
      </ListItemIcon> , 
      <ListItemIcon>
        <FavoriteBorderIcon /> 
      </ListItemIcon> , 
      <ListItemIcon>
        <DeckIcon />
      </ListItemIcon>
    ];

    return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
              SamOliveira.dev
              </Typography>
              <Typography id={'writer'} style={{position: "absolute",left: "220px"}} variant="h6" noWrap>
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <List>
              {['landing', 'about me', 'projects', 'resume/hire me'].map((text, index) => {
                return (
                text === 'projects' ? (
                <div key="collpaseDiv">
                  <ListItem button onClick={() => this.handleCollapse()} key={text} selected={this.state.showchild}>
                    <ListItemIcon> 
                      <AccountTreeIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem> 
                    <Collapse timeout="auto" unmountOnExit in={this.state.showchild} >
                    {PROJECTS.map((project, index) => {
                      return (
                        <List key={project + index} id="projectList" >
                            <ListItem button key={project} onClick={ () => this.setPage(index + 2)} >
                              {contentArray[index]}
                              <ListItemText primary={project} />
                            </ListItem>
                          </List>
                      )
                    })}
                    <Divider />
                    </Collapse>
                </div>)
                  :
                  <ListItem button key={text} onClick={ () => this.setPage(index)}>
                    <ListItemIcon>{ index === 0 ? <DeckIcon /> : index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                );
              } )}
            </List>
          </Drawer>
          <main className={classes.content}>
              {this.PageController()}
            <div className={classes.toolbar} />
            
          </main>
        </div>
      );
    }

  render() {
    return (
      <this.SideDrawer />
    )
  }
}