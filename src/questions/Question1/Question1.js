import React from 'react';
import data from './data.json';
import CardComponent from './CardComponent';
import q1_image from './images/q1.png';

class Question1 extends React.Component {

    render() {
        console.log(data);
        return (
            <div>
                <h2>Question 1</h2>
                <div>
                    <p>Please create a component that looks the same as the image below (ignore font-family)</p>
                    <p>Note: </p>
                    <ul>
                        <li>You can find the starter code in folder <code>src/questions/Question1</code></li>
                        <li>Please do not modify<code>src/questions/Question1/data.json</code></li>
                        <li>You are not allowed to create any other files in this question</li>
                        <li>You must pass data into <code>CardComponent</code> as a prop</li>
                    </ul>
                    <img src={q1_image} alt="q1" style={{width: "auto"}}/>
                </div>
                <CardComponent />
            </div>
        )
    }
}

export default Question1