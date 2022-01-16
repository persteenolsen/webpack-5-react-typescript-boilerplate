import React from "react";

// Note: Using an Alias in Webpack
import { Header } from 'components/Header/index.tsx';
import { Bottom } from 'components/Bottom/index.tsx';

// Note: Without curly braces importing a function which use export default 
import Menu from 'components/Menu/index.tsx';


class App extends React.Component { 

   render() {
	   
      return (
         <div>
		  <Header />	 
		    <Menu />
		  <Bottom />
		
         </div>
      );
   }
}

export default App;