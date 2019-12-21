import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import { typography } from '@material-ui/system';

// import ReactFullpage from '@fullpage/react-fullpage';
// variable list for differenct strings to be typed, can add a color field later

const winwidth = window.innerWidth;

const scalled = winwidth - 250;

const useStyles = makeStyles({
    test: {
        position: "absolute",
        top: "100px",
        wordBreak: "break-word",
        minHeight: "420px",
        maxWidth: scalled,
        border: "2px solid grey",
        borderRadius: "12px",
    }
})

const AboutMe = () => {
    const classes = useStyles();

    return (
        <Box className={classes.test} >
            <Container>
                <div >
                <div className="section aboutme" data-anchor="aboutme">
                    <div className="opaque-bg animated fadeInDown">
                        <h1 style={{color: "grey"}}>ABOUT<span style={{color: "#FF6363"}}>ME</span></h1>
                        <Typography variant="h6">
                            Welcome to the "about me"! Here we will go over who I am and what I do.
                            <br />
                            A Creative Javascript/node.js Developer living near the San Fransico Bay area. I enjoy fluid design and Javascript. 
                            Working with critical or complex problems are puzzles I trive to complete. 
                            I am an aspiring full stack developer, hence this personal/porfolio site.
                            <br />
                            <br />
                            I started studying and creating web applications around February-April of 2019. My favorite language to use is Javascript with React and Node,
                            though PHP and ruby are fun too. Just not my favorite.

                            At the age of 15 I was introduced to <a rel="noopener noreferrer" href={'https://scratch.mit.edu/'} target="_blank" >Scratch</a> as an introduction to programming.
                            Later within the same year moving onto Java.
                        </Typography>
                    </div>
                    <i id="moveDown" className="fa fa-chevron-down fa-3x bounce"></i>
                </div>
                </div>
            </Container>
        </Box>
    )
}

class AboutMePage extends React.Component {

    render() {
        return (
            <AboutMe />
        )
    }
}

export default AboutMePage;