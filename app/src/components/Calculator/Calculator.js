import React, {Component} from "react";
import calculatorImg from './calculator.png';

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            header: 'Calculator',
            display: '0',
            operator: '',
            temp: 0,
            resetDisplay: false,
          }
    }

    updateHeader(val){
        this.setState({
            header: val,
        })
    }

    calculate(){
        if(!this.state.operator){
            return
        }

        let result = 0;
        switch(this.state.operator){
            case "+": 
                result = this.state.temp + parseInt(this.state.display,10);
                break;
            case "-": 
                result = this.state.temp - parseInt(this.state.display,10);
                break;
            case "/": 
                result = this.state.temp / parseInt(this.state.display,10);
                break;
            case "*": 
                result = this.state.temp * parseInt(this.state.display,10);
                break;
            default:
                break;
        }
        console.log(result);
        this.setState({
            display: result
        })
    }

    setDisplay(num) {
        var display = ( this.state.display === '0' ) ? num : this.state.display + num;
        this.setState({ display: this.state.display.length < 13 ? display : this.state.display})
      }

      setOperator(operator) {
        if ( !this.state.operator ) {
          this.setState({ operator: operator, temp: parseInt(this.state.display, 10), display: '0' });
        console.log(this.state)
        }
      }

      clearDisplay(){
          this.setState({
              display:'0',
              temp: 0,
              operator:'',
              reset:true
          })
      }



    render() {
        return (
            <div id="calculator-container">
              <input id="header-input" onChange = {e => this.updateHeader(e.target.value)}/>
              <h1 id="header"> {this.state.header} </h1>
              <img className="remove-highlight" src={calculatorImg} alt="calculator" />
              <div id="calculator-mask" className="remove-highlight">
                <div className="output">
                  <span className="total">{this.state.display}</span>
                </div>
          
                <div className="btn clear" onClick = {() => this.clearDisplay()}></div>
          
                <div className="btn zero" onClick = {e => this.setDisplay('0')}></div>
                <div className="btn one" onClick = {e => this.setDisplay('1')}></div>
                <div className="btn two" onClick = {e => this.setDisplay('2')}></div>
                <div className="btn three" onClick = {e => this.setDisplay('3')}></div>
                <div className="btn four" onClick = {e => this.setDisplay('4')}></div>
                <div className="btn five" onClick = {e => this.setDisplay('5')}></div>
                <div className="btn six" onClick = {e => this.setDisplay('6')}></div>
                <div className="btn seven" onClick = {e => this.setDisplay('7')}></div>
                <div className="btn eight" onClick = {e => this.setDisplay('8')}></div>
                <div className="btn nine" onClick = {e => this.setDisplay('9')}></div>
          
                <div className="btn equal" onClick = {() => this.calculate()}></div>
                <div className="btn multiply" onClick = {e => this.setOperator('*')}></div>
                <div className="btn divide" onClick = {e => this.setOperator('/')}></div>
                <div className="btn subtract" onClick = {e => this.setOperator('-')}></div>
                <div className="btn add" onClick = {e => this.setOperator('+')}></div>
              </div>
            </div>
          )
    }
}

export default Calculator;