
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider'; -- delete -- unused
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import $ from "jquery";
import typer from 'typer-js';
import "typer-js/typer.css";

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


function SideDrawer() {
  const classes = useStyles();
  
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
            {['landing', 'about me', 'projects', 'resume/hire me'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
            <div id="root"></div>
          <div className={classes.toolbar} />
          
        </main>
      </div>
    );
  }

export default class Overview extends React.Component {

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

  componentDidMount() {
    this.runTyper();
  }

  render() {
    return (
      <SideDrawer/>
    )
  }
}