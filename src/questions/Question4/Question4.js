import React from 'react';
import PhotoSection from "./sections/PhotoSection";
import ProductsSection from "./sections/ProductsSection";

const Question4 = props => {
  return (
    <div>
      <h2>Question 4</h2>
      <div>
          <p>Please make the following component friendly to different view ports (mobile, tablets...), shrink your browser and you will see. </p>
          <p>Note: </p>
          <ul>
              <li>You can find the starter code in folder <code>src/questions/Question4</code></li>
              <li>It's totally up to you, you can modify the existing stylesheet or delete and create your own stylesheet from scratch </li>
              <li>You can rename, add className, or add anything to the component, use your imagination </li>
              <li>You can even recode the whole thing if you wish!</li>
              <li>As we mentioned at the very top, you are welcome to install any library that would help.</li>
          </ul>

          <div className="q4-responsive">
            <PhotoSection />
            <ProductsSection />
          </div>
      </div>
    </div>
  );
};

export default Question4;