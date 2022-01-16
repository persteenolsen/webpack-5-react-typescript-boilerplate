import React from "react";
import ReactDOM from "react-dom";

// TEST
// Remove the HTML tags and the statement will not pass TypeScript types checking 
// Use the valid HTML tags and the statement will pass TypeScript types checking  

import { FC } from 'react'
const Hello: FC = () => <div style={{color: "green"}}>Hello World :-) <b> - React with TypeScript</b> served at the {new Date().toLocaleDateString()}</div>

// Import of an asset using alias in Webpack
import TSLogo from 'images/typescript.png';


class DemoTSReact extends React.Component { 
   render() {
      return (
         <div>
           
		   <Hello />
		   <br />
			
		   <h2>React with TypeScript</h2>
		   
		   <br />
            
           <img width="128px" src={TSLogo} alt="TS Logo" /> 
		 	
           <br /><br />
			
           <h5>This React component is using TypeScript</h5>

         </div>
      );
   }
}

export { DemoTSReact };