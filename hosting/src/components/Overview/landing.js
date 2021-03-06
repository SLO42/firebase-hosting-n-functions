import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import { typography } from '@material-ui/system';

// import ReactFullpage from '@fullpage/react-fullpage';
// variable list for different strings to be typed, can add a color field later

const useStyles = makeStyles({
    test: {
        position: "absolute",
        top: "100px",
        minHeight: "120px",
        minWidth: "500px",
        border: "2px solid grey",
        borderRadius: "12px",
    }
})

const LandingGreeting = () => {
    const classes = useStyles();

    return (
        <Box className={classes.test} >
            <Container>
                <div >
                <div className="section aboutme" data-anchor="aboutme">
                    <div className="opaque-bg animated fadeInDown">
                        <h1 style={{color: "grey"}}>SAM<span style={{color: "#FF6363"}}>\</span>OLIVEIRA</h1>
                        <Typography variant="h8">
                            This is a full stack site. Have fun!
                            <br />
                            Feel free to create an account and access the rest of the site.
                            Please use a valid Email as Firebase has a rough time with slightly odd domains.
                            <br />
                            Logging in and creating an account gives you access to creating posts on the public feed.
                            Please keep it respectful. 
                            
                        </Typography>
                    </div>
                    <i id="moveDown" className="fa fa-chevron-down fa-3x bounce"></i>
                </div>
                </div>
            </Container>
        </Box>
    )
}

class Landing extends React.Component {

    render() {
        return (
            <LandingGreeting />
        )
    }
}

export default Landing;