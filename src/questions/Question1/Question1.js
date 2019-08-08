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
                    <p>Please recreate the image below as a component (ignore font-family)</p>
                    <p>Note: </p>
                    <ul>
                        <li>You can find the starter code in folder <code>src/questions/Question1</code></li>
                        <li>Do not modify <code>src/questions/Question1/data.json</code></li>
                        <li>No additional files may be created to complete this question</li>
                        <li>Data must be passed into <code>CardComponent</code> as a prop</li>
                    </ul>
                    <img src={q1_image} alt="q1" style={{width: "auto"}}/>
                </div>
                <CardComponent />
            </div>
        )
    }
}

export default Question1