import React from 'react';
import FailedComponent from "./FailedComponent";
import example from "./example.gif";
import "./Question2.scss";

class Question2 extends React.Component {
    renderExample = () => {
        return (
          <div className="q2-example ">
            <div className="label"> Expected outcome:</div>
            <img src={example} alt="example" />
          </div>
        );
    };

    render() {
        return (
            <div>
                <h2>Question 2</h2>
                <div>
                    <p>Please fix the component below OR provide a different implementation so that it works perfectly</p>
                    <p>Note: </p>
                    <ul>
                        <li>You can find the starter code in folder <code>src/questions/Question2</code></li>
                        <li>Calculations should be up to date with <code>clicks</code></li>
                        <li><button>reset</button> should ONLY reset the calculated value: <code>clicks x 2</code></li>
                        <li>if you click <button>Add one</button> after <button>reset</button>, should show the updated calculations</li>
                        <li>Please provide comments on the modifications you make and explain why it fails</li>
                    </ul>
                    <FailedComponent/>

                    <br />
                    {this.renderExample()}
                </div>
            </div>
        )
    }
}

export default Question2