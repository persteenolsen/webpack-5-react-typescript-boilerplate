import React from 'react';

// Note: For now the content of this file is just for .jsx but could be TS like in the About Component!!

// Note: To import .jpg files by TS I creacted a index.d.ts files in the 
// scr directory with type declaration: "declare module '*.jpg';"

// Import of an asset usin alias in Webpack
import LOGO from 'images/persteenolsen.jpg';


class MyInfo extends React.Component { 
   render() {
      return (
         <div>
		 
		
		   <h2>Per Steen Olsen</h2><br />
		   
		   <h4>Web Developer</h4><br />
			
           <img width="150px" src={LOGO} alt="Per Steen Olsen" />
		   
		   <br/>

         </div>
      );
   }
}

export { MyInfo };