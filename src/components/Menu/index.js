//import 'whatwg-fetch';
//import 'core-js/stable';

import React from "react";
import { Switch, Route, Link } from "react-router-dom";


import Home from 'components/Home/';
import About from 'components/About/';
import MyInfo from 'components/MyInfo/';

import { ListPosts } from 'components/ListPosts/';
import { SelectedPost } from 'components/SelectedPost/';
import { EditPost } from 'components/EditPost/';
import { CreatePost } from 'components/CreatePost/'; 


import Error from 'components/Error/';


// Import of an asset usin alias in Webpack
import webpackLogo from 'images/favicon.png';

export default function BasicRouterExample() {
  return (
       
	   <div>
	   
		<nav className="navbar navbar-expand-lg navbar-light">
                    
            <Link to="/">
			   <img width="50px" src={webpackLogo} alt="Webpack Logo" />
			</Link>
					
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
						
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	  	  
	            <div className="navbar-nav">
                       
					   <Link to="/" className="nav-item nav-link">Home</Link>
                       <Link to="/about" className="nav-item nav-link">About this App</Link>
					   <Link to="/myinfo" className="nav-item nav-link">Per Steen Olsen</Link>
					   <Link to="/listposts" className="nav-item nav-link">Web API</Link>
                       <Link to="/error" className="nav-item nav-link">Secret</Link>
                 
				 </div>
				
			   </div>
				
         </nav>
          
	    <br />
		 

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
		
        <Switch>
		
          <Route exact path="/">
            <Home />
          </Route>
		  
          <Route path="/about">
            <About />
          </Route>
		  
		   <Route path="/myinfo">
            <MyInfo />
          </Route>
		  
		   <Route path="/listposts">
            <ListPosts />
          </Route>
		  
		   <Route path="/selectedpost/:id">
            <SelectedPost />
          </Route>
		  
		   <Route path="/editpost/:id">
            <EditPost />
          </Route>
		  
		    <Route path="/createpost">
            <CreatePost />
          </Route>

		  <Route path="*" component={Error} />
		  
        </Switch>
		
      </div>
   
  );
}


