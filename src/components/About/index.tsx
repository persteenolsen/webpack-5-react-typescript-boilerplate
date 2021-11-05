import React from "react";
import ReactDOM from "react-dom";

// TEST
// Remove the HTML tags and the statement will not pass TypeScript types checking 
// Use the valid HTML tags and the statement will pass TypeScript types checking  

import { FC } from 'react'
const Hello: FC = () => <p><div style={{color: "green"}}>Hello World :-) <b> - React with TypeScript</b> served at the {new Date().toLocaleDateString()}</div></p>


//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById("root")
//);




class About extends React.Component { 
   render() {
      return (
	  
	     
         <div>
              
			  <Hello />
			  
		       <h2>Description</h2><br />
  
                - This single page application was made in React, TypeScript with a Webpack 5 configuration
                <br/> <br/>
				
                <b>Last Updated</b>  <br />
                - 05-11-2021 <br /> <br />
                
				
                <b>Main functionality</b> <br />
                				                 
			    - Showing the power of Webpack <br />
				- Using TypeScript with React in .tsx files <br />
				- Using React with JS in .jsx files <br />
                - Showing routing in React <br />
				- Custom 404 Error page. Click on the link Secret in the menu for e demo<br />
				- Serving static assets like images, styles and fonts <br />
				- Support for the IE 11 Browser when using React Hook Form<br />
				- GET, POST, PUT and DELETE operations towards the test Web API <br /> <br />
			                  
			   
                <b>Module Bundler</b> <br />
                
                - Manuel configuration of the Webpack 5 from scratch <br /> <br />
				
                
				<b>The single page application - The frontend</b> <br />
            
                
                - Mainly React <br />
				- PostCSS <br />
                - HTML <br />
                - Bootstrap 4 by CDN for the responsive design <br /> <br />
				
				<b>The Web API - The backend</b> <br />
 
                - The Web API is the jsonplaceholder used for testing frontends <br /> <br />


                				
                <b>Security</b> <br />
             
                - The only security is the use of HTTPS because it is a demo only <br /> <br />
				
				
				<b>Hosting</b> <br />
                - The application is hosted at a traditionel Webhotel <br /> <br />
             

                <b>Text Editor</b> <br />
             
			    - Visual Studio Code <br />
            			 

         </div>
      );
   }
}

export default About;
