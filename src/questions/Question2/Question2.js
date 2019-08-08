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
                    <p>Please modify the component below to have the same behaviour as the component in the gif</p>
                    <p>Note:</p>
                    <ul>
                        <li>Please find the starter code in folder <code>src/questions/Question2</code></li>
                        <li>Calculated value must be correct based on current <code>clicks</code> after an <button>Add one</button> click</li>
                        <li><button>reset</button> should set the <code>clicks x 2</code> value to 0, but not affect number of clicks</li>
                        <li>Clicking <button>Add one</button> after clicking <button>reset</button> should update both values</li>
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