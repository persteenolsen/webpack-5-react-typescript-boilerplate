import React from 'react';

// Note: For now the content of this file is just for .jsx but could be TS like in the About Component!!

// Note: To import .png files by TS I creacted a index.d.ts files in the 
// scr directory with type declaration: "declare module '*.png';"
import reactLogo from 'images/react.png';

// Import of an asset usin alias in Webpack
import TSLogo from 'images/typescript.png';

class Home extends React.Component { 
   render() {
      return (
         <div>
           
		   <h2>Welcome</h2>
		   
		   <br />
            
           <img width="150px" src={reactLogo} alt="React Logo" /><b>+ </b>
		   <img width="128px" src={TSLogo} alt="TS Logo" /> 
		   
		   {/*Test*/}
		   {/* <span className="test">Hey dude</span> */}
		   
           <h4>Webpack 5 configured from scratch to serve React with TypeScript</h4>

         </div>
      );
   }
}

export { Home };