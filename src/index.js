import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

const LEFT = 'left';
const RIGHT = 'right';
const POWER = 'power';
const BANK = 'bank';

function PowerTrigger(props){
    return (
        <button className = {'trigger ' + props.side + '-trigger'} 
                onClick = {() => props.onClick()}></button> 
    )
}

function BankTrigger(props){
    return (
        <button className = {'trigger ' + props.side + '-trigger'} 
                onClick = {() => props.onClick()}></button> 
    )
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            powerSide: LEFT,
            bankSide: LEFT,
        }
    }

    handlePowerClick(){
        this.setState({powerSide: this.state.powerSide === LEFT ? RIGHT : LEFT});
    }

    handleBankClick(){
           this.setState({bankSide: this.state.bankSide === LEFT ? RIGHT : LEFT});
    }
  
    render(){
        const pads = bankOne.map((item) => <button className = 'drum-pad free' key = {item.keyCode}>{item.keyTrigger}</button>);  
        return(
            <div id = 'drum-machine' className = 'drum-machine'>
                <div id = 'display' className = 'display-block'>
                    {pads}
                </div>
                <div className = 'managing-block'>
                    <div className = 'trigger-block'>
                        <label htmlFor = 'power'>Power:</label>
                        <PowerTrigger id = "power" name = "power" side = {this.state.powerSide}  onClick = {() => this.handlePowerClick()}/>
                    </div>
                    <input type="range" min="1" max="100" class = "slider" defaultValue="50" />
                    <div className = 'trigger-block'>
                        <label htmlFor = 'bank'>Bank:</label>
                        <BankTrigger id = "bank" name = "bank" side = {this.state.bankSide}  onClick = {() => this.handleBankClick()}/>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


