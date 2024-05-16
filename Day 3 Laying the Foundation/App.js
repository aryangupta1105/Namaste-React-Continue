import React from "react";
import ReactDOM from "react-dom";

const jsxHeading = <h1 className="jsxHeading">This is jsx Heading</h1>
const heading = React.createElement("h1" , {id:"heading"} , ["This is React Day 3 Laying the foundation❤️" , jsxHeading]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// Jsx are html like syntax

// React components:
const Title = () => (
    <h1 className="title">Title component using React</h1>
)
// Component Composition: using nested components..
const HeadingComponent = () => (
    <div id="container">
        <Title></Title>
        <Title/>
        {Title()}
        {/* These are 3 ways to call a component or use it */}
        <h1 className="heading">Namaste React Functional Component
        </h1>
    </div>
    );
root.render(<HeadingComponent/>);