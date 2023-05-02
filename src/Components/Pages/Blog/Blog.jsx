import React from "react";

const Blog = () => {
  return (
    <div className="px-8 py-6 text-justify">
      {/* question 1 */}
      <div className="mt-4 mb-8">
        <h2 className="font-bold text-2xl mb-2">
          Q1. What's the difference between uncontrolled and controlled
          components?
        </h2>
        <p className="font-semibold">
          Ans: In React, controlled components refer to components that have
          their state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </p>
      </div>
      {/* question 2 */}
      <div className="mt-4 mb-8">
        <h2 className="font-bold text-2xl mb-2">
          Q2. How to validate React props using PropTypes?
        </h2>
        <p className="font-semibold">
          Ans: any : The prop can be of any data type. <br />
          boolean : The prop should be a Boolean. <br />
          number : The prop should be a number. <br />
          string : The prop should be a string. <br />
          func : The prop should be a function. <br />
          array : The prop should be an array. <br />
          object : The prop should be an object.
        </p>
      </div>
      {/* question 3 */}
      <div className="mt-4 mb-8">
        <h2 className="font-bold text-2xl mb-2">
          Q3. What's the difference between nodejs and express js?
        </h2>
        <p className="font-semibold">
          Ans: js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
        </p>
      </div>
      {/* question 4 */}
      <div className="mt-4 mb-8">
        <h2 className="font-bold text-2xl mb-2">
          Q4. What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className="font-semibold">
          Ans: Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
        </p>
      </div>
    </div>
  );
};

export default Blog;
