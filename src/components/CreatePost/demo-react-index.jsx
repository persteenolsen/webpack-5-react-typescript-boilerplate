// The use of "useBuiltIns" in .babelrc would take care of loading polyfill in most cases but somehow not here!
// Note: As an alternative use babel polyfill by cdn in the template.html
import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

// For using IE 11 also
import { useForm } from 'react-hook-form/dist/index.ie11'; 

//import { useForm } from "react-hook-form";

function CreatePost() {

    const [selectedPostId, setSelectedPostId] = useState(null);
	const [ selectedPostTitle, setSelectedPostTitle] = useState(null);
	const [ selectedPostBody, setSelectedPostBody] = useState(null);
	
	//let { id } = useParams();

    useEffect(() => {
		        
        
		  			

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
	
	 const { register, handleSubmit, errors } = useForm();
	 
	 // On Submit
     const onSubmit = data => { 
	      
		  console.log(data);
	      alert( 'Input Submit:\r\n\r\n' + data.titlePost + '\r\n\r\n' +  data.bodyPost );
		  
		   // Making the PUT request to the web API
	      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
              title: data.titlePost,
              body: data.bodyPost,
              userId: 1,
             }),
           headers: {
                   'Content-type': 'application/json; charset=UTF-8',
            },
          })
	    
		 // Getting the response from the Web API and convert it to json
        .then((response) => response.json())
        .then((json) => { 
	        console.log(json);
					
			alert( 'Response from the Web API:\r\n\r\nid: ' + 
			json.id + '\r\n\r\ntitle: ' + 
			json.title + '\r\n\r\nbody: ' + 
			json.body + '\r\n\r\nuserId: ' + 
			json.userId );
					 
			// Setting the GUI with the value returned from the Web API
			document.getElementById("idp").innerHTML = json.id;
			
	    });
	 };

    return (
           
		   <div>
		     <h2>Create simulation of a new Post</h2>
			 
			<br />
			
			 <Link to="/listposts" >Show the 10 Posts again</Link>
			 <br /><br />
          
             <div className="table-responsive">
			 			           		       						 
				 <form onSubmit={handleSubmit(onSubmit)}>
				 
				    <label><b>Id:</b></label><br/>
					<p id="idp"></p>

					
                  	<label><b>Title:</b></label><br/>					  
                    <input size="30" name="titlePost" ref={register({ required: true, maxLength: 25 })} />
				    {errors.titlePost && <span> Required - max 25 characters</span>}
							  
                    <br /> 
							   
				 	<label><b>Body:</b></label><br/>
				    <textarea name="bodyPost" cols="32" rows="4" ref={register({ required: true, maxLength: 100 })} />
				    {errors.bodyPost && <span> Required - max 100 characters</span>}
							 					 
                    <br />
					
					<input className="btn btn-warning custom-text-color-button" value="Submit"  type="submit" />
							
				</form> 
				
               				
            </div>
			
        </div>
    );
}

export { CreatePost };