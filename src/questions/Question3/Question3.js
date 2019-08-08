import React from 'react';
import Dropdown from "./Classic/Dropdown";
import MyDropdown from "./Hooks/MyDropdown";

class Question3 extends React.Component {

    render() {
        return (
            <div>
                <h2>Question 3</h2>
                <div>
                    <p>Please re-create the following component with {" "}
                        <strong> 
                            <a href={`https://reactjs.org/docs/hooks-intro.html`} target="_blank" rel="noopener noreferrer">React Hooks</a>{" "}
                        </strong> and <strong>SASS</strong>
                    </p>
                    <p>Note: </p>
                    <ul>
                        <li>You can find the starter code in folder <code>src/questions/Question3</code></li>
                        <li>DO NOT modify the code in folder <code>src/questions/Question3/Classic</code></li>
                        <li>Please put your code in folder <code>src/questions/Question3/Hooks</code></li>
                        <li>Please make sure they look exactly the same</li>
                        <li>You can either reuse the given css and turn it into scss or code your own stylesheet</li>
                    </ul>
                </div>
                <p>Example component:</p>
                <Dropdown/>
                <p>Your component goes here:</p>
                <MyDropdown/>
            </div>
        )
    }
}

export default Question3