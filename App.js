
import React from "react";
import ReactDOM  from "react-dom/client";
          const parent = React.createElement(
            "div",{id:"parent"},
            [React.createElement("div",{id:"child"},[
                React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")
            ]
            ),React.createElement("div",{id:"child2"},[
                React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")
            ]
            )]
            );
          console.log(parent)
        //const heading = React.createElement("h1",{id:"heading",zyz:"abc"},"Hello santosh");
        const root1 = ReactDOM.createRoot(document.getElementById("root"));
        root1.render(parent)

        
        