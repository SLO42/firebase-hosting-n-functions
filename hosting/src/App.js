import React from 'react';
import $ from "jquery";
import typer from 'typer-js';

// variable list for different strings to be typed, can add a color field later
const TEXTOBJ = [
    {str: "This site is hosted on Google's Firebase and made with <span style={{color:'red'}} >React!</span>"},
    {str: "Hello and welcome to my website!"},
    {str: "Feel free to tell your friends about me :)"},
    {str: "I am currently looking for a job, send me a message if you can help."},
];

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            typer: 0
        };
    }
    
    componentDidMount() {
        this.runTyper();
    }

    runTyper = async () => {
        const len = TEXTOBJ.length;
        let i = 0;

        const custom_typer = (i, len) => {
            const elem = "#typer";
            if (i === len) i = 0;
            typer(elem, 50)
            .cursor({block: false, blink: 'hard', color: 'red'})
            .line(TEXTOBJ[i].str)
            .pause(1000)
            .back(TEXTOBJ[i].str.length)
            .end(true, () => {
                $(".white-space").remove();
                custom_typer(++i, len);
            });
        }
        custom_typer(i, len);
    }

    render() {
        return (
            <div id="fullpage">
            <div className="section aboutme" data-anchor="aboutme">
                <div className="opaque-bg animated fadeInDown">
                    <br/>
                    <br/>
                    <h1 style={{color: "grey"}}>SAMUEL<span style={{color: "#FF6363"}}>\</span>OLIVEIRA</h1>
                    <p id={'typer'}></p>
                </div>
                <i id="moveDown" className="fa fa-chevron-down fa-3x bounce"></i>
            </div>
            </div>
        )
    }
}

export default App;