

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ListPosts() {
    
	const [totalPosts, setTotalPosts] = useState(null);
	
	let partofroute = "/selectedpost";
	let partofrouteedit = "/editpost";

    useEffect(() => {
        
		    // GET request using fetch inside useEffect React hook
            fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
           
		    .then(response => response.json())
            .then(data => setTotalPosts(data));
			

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
	
	
	// Note: When using async / await the package "@babel/plugin-transform-runtime" was added in babelrc + package.json
	 function deleteUser( id ) {
	
	  
       if (confirm('Are you sure?')) {
	      
		 // Simulation of an error returned from the Web API	
	     // fetch('https://jsonplaceholder.typicode.com/invalid-url', { method: 'DELETE' })
	     fetch('https://jsonplaceholder.typicode.com/posts/' + id, { method: 'DELETE' })
        
		 .then(async response => {
             
			 const data = await response.json();

             // check for error response
             if (!response.ok) {
                
				// get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            alert( 'The Post was deleted successfully !' );
            
			// Simulation of an delete operation by removing the selected Post from the GUI
			// Note: There may be an alternative in the React way!
			document.getElementById(id).outerHTML = "";
			
        })
        .catch(error => {
           
            console.error('There was an error!', error);
			alert( 'Following error was returned from the Web API: ' + error );
			
        });
		
	   
	   }
	}

	
    return (
           
		   <div>
		   
             <h2>The result of a GET Request towards a test Web API</h2>
			 <br />
			 			 
			 <Link to="/createpost" >Create a new Post</Link>
			 <br /><br />
		   
             <div className="table-responsive">
           
				
		       <table className="table table-striped">
                  <thead>
                    <tr>
                        
                        <th>Id</th>
						<th></th>
						<th></th>
                        <th>Title</th>
                        
                    </tr>
                  </thead>
                  <tbody>
				
				 { totalPosts && totalPosts.map(post =>
                        
						
						<tr key={post.id} id={post.id}>
                            <td>{post.id}</td>
							<td><button type="button" onClick={() => deleteUser(post.id)} className="btn btn-danger">Delete</button></td>
							  
							<td> <Link to={`${partofrouteedit}/${post.id}`} >Edit</Link></td>
                            <td> <Link to={`${partofroute}/${post.id}`} >{post.title}</Link></td>
                           
                        </tr>
                    )}
					
					</tbody>
				</table>
				
              </div>
          </div>
    );
}

export { ListPosts };