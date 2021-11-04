import React from 'react';


// Import of an asset usin alias in Webpack
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

export default Home;