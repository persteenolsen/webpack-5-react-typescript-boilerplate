import React from 'react';


// Import of an asset usin alias in Webpack
//import reactLogo from 'images/react.png';


// Import of an asset usin alias in Webpack
import TSLogo from 'images/typescript.png';


class DemoTSReact extends React.Component { 
   render() {
      return (
         <div>
           
		   <h2>React with TypeScript</h2>
		   
		   <br />
            
           <img width="128px" src={TSLogo} alt="TS Logo" /> 
		 		   
           <h4>This React component is using TypeScript</h4>

         </div>
      );
   }
}

export default DemoTSReact;