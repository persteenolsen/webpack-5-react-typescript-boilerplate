import React from "react";


class About extends React.Component { 
   render() {
      return (
	  
	     
         <div>
              			 			  
		       <h2>Description</h2><br />
  
                - This single page application was made in React, TypeScript and Babel 7 with a Webpack 5 configuration
                <br/> <br/>
				
                <div className="lastupdated"><b>Last Updated: </b></div>
                - 08-01-2025 <br /> <br />
                				
                <b>Main functionality</b> <br />
                
				- History of Node Versions 12.16.2 => 14.17.3 => 20.18.1 <br />
                                - React 17.0.1<br />
                                - TypeScript 5.7.2<br />
			        - Showing the power of Webpack <br />
				- Using TypeScript with React in .tsx files <br />
				- Using React with JS in .jsx files <br />
				- Babel 7 for compiling TypeScript files instead of the TypeScript compiler <br />
				- The TypeScript type checking is handled by the Webpack plugin <br />"fork-ts-checker-webpack-plugin" which use the tsconfig.json <br />
                - Showing routing in React <br />
				- Custom 404 Error page. Click on the link Secret in the menu for e demo<br />
				- Serving static assets like images, styles and fonts <br />
				- Support for the IE 11 Browser when using React Hook Form 6 with React 17.0.1<br />
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

export { About };
