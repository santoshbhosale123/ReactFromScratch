
import React from "react";
import ReactDOM  from "react-dom/client";

const jsxHeading = (
    <h1 className="head" tabIndex="5">
        namaste react using jsx
    </h1>
);

const Title = () =>(
    <h1 className="title">
        namaste React Title view
    </h1>

);
const el = (<span>hello Subelement</span>);
const title1 = (
    <h2 className="head">
        {el} <br></br>
        hello this is element</h2>
) ;



const HeadingComponent  = () =>(
    <div className="contaner">
        <Title></Title>
         <h1 className="heading">Namaste component</h1>;
       {console.log('hello')}
       {10+20}
       {title1}  
    </div> 
   
);
    

   
        //   const parent = React.createElement(
        //     "div",{id:"parent"},
        //     [React.createElement("div",{id:"child"},[
        //         React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")
        //     ]
        //     ),React.createElement("div",{id:"child2"},[
        //         React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")
        //     ]
        //     )]
        //     );
        //   console.log(parent)
        // //const heading = React.createElement("h1",{id:"heading",zyz:"abc"},"Hello santosh");
        // const root1 = ReactDOM.createRoot(document.getElementById("root"));
        // root1.render(parent)

   const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(jsxHeading)
   root.render(<HeadingComponent />)
        