import React from 'react';
import "./Calculator.css";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_a: null,
            current_b: null,
            current_op: ""
        }
    }

    numPressed(num) {
        if (this.current_a == null) {
            this.current_a = num;
        } else {
            this.current_b = num;
        }
    }

    opPressed(ops) {
        this.current_op = ops;
    }

    clear() {
        this.current_a = null;
        this.current_b = null;
        this.current_op = null;
    }

    getValue() {

    }

    setValue() {
        
    }

    render() {
        <div className="calc_component">
            <table>
                <tr>
                <td><button type="button" name="button" id="1" onclick={this.numPressed(1)}>1</button></td>
                <td><button type="button" name="button" id="2" onclick={this.numPressed(2)}>2</button></td>
                <td><button type="button" name="button" id="3" onclick={this.numPressed(3)}>3</button></td>
                <td><button type="button" name="button" id="C" onclick={this.clear()}>C</button></td>
                <td><button type="button" name="button"></button></td>
                </tr>
                <tr>
                <td><button type="button" name="button" id="4" onclick={this.numPressed(4)}>4</button></td>
                <td><button type="button" name="button" id="5" onclick={this.numPressed(5)}>5</button></td>
                <td><button type="button" name="button" id="6" onclick={this.numPressed(6)}>6</button></td>
                <td><button type="button" name="button" id="add" onclick={this.opPressed('add')}>+</button></td>
                <td><button type="button" name="button" id="sub" onclick={this.opPressed('sub')}>-</button></td>
                </tr>
                <tr>
                <td><button type="button" name="button" id="7" onclick={this.numPressed(7)}>7</button></td>
                <td><button type="button" name="button" id="8" onclick={this.numPressed(8)}>8</button></td>
                <td><button type="button" name="button" id="9" onclick={this.numPressed(9)}>9</button></td>
                <td><button type="button" name="button" id="mul" onclick={this.opPressed('mul')}>*</button></td>
                <td><button type="button" name="button" id="div" onclick={this.opPressed('div')}>/</button></td>
                </tr>
                <tr>
                <td><button type="button" name="button" id="0" onclick={this.numPressed(0)}>0</button></td>
                <td><button type="button" name="button">.</button></td>
                <td><button type="button" name="button"></button></td>
                <td><button type="button" name="button"></button></td>
                <td><button type="button" name="button" id="enter" >=</button></td>
                </tr>
            </table>
        </div>
    }
}