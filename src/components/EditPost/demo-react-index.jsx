// The use of "useBuiltIns" in .babelrc would take care of loading polyfill in most cases but somehow not here!
// Note: As an alternative use babel polyfill by cdn in the template.html
import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

//import { useForm } from "react-hook-form";

// For using IE 11 also
import { useForm } from 'react-hook-form/dist/index.ie11'; 

function EditPost() {

    const [selectedPostId, setSelectedPostId] = useState(null);
	const [ selectedPostTitle, setSelectedPostTitle] = useState(null);
	const [ selectedPostBody, setSelectedPostBody] = useState(null);
	
	let { id } = useParams();

    useEffect(() => {
		        
        
		    // GET request using fetch inside useEffect React hook
            fetch('https://jsonplaceholder.typicode.com/posts/' + id )
			
		    .then(response => response.json())
            .then(data => { 
			     
				 setSelectedPostId(data.id);
                 setSelectedPostTitle(data.title); 
                 setSelectedPostBody(data.body); 				  
			
			});
			

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
	
	 const { register, handleSubmit, errors } = useForm();
	 
	 // On Submit
     const onSubmit = data => { 
	      
		  console.log(data);
	      alert( 'Input Submit:\r\n\r\n' + data.idPost + '\r\n\r\n' + data.titlePost + '\r\n\r\n' +  data.bodyPost );
		  
		   // Making the PUT request to the web API
	      fetch('https://jsonplaceholder.typicode.com/posts/' + data.idPost, {
          method: 'PUT',
          body: JSON.stringify({
              id: data.idPost,
              title: data.titlePost,
              body: data.bodyPost,
              userId: data.idPost,
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
			json.body );
					 
			// Setting the GUI with the value returned from the Web API
			
			
	    });
	 };

    return (
           
		   <div>
		     <h2>Edit simulation of the selected Post</h2>
			 
			 <br />
			 Edit simulation of the Post with Id: <b>{ id }</b>
			 <br /> <br />
			 
			 <Link to="/listposts" >Show the 10 Posts again</Link>
			 <br /><br />
          
             <div className="table-responsive">
			 			           		       						 
				 <form onSubmit={handleSubmit(onSubmit)}>
				 
				    <label><b>Id:</b></label><br/>					  
                    <input readOnly size="2" name="idPost" ref={register({ required: true })} defaultValue={selectedPostId} />
					<br />
					
                  	<label><b>Title:</b></label><br/>					  
                    <input size="30" name="titlePost" ref={register({ required: true, maxLength: 75 })} defaultValue={selectedPostTitle} />
				    {errors.titlePost && <span> Required - max 75 characters</span>}
							  
                    <br /> 
							   
				 	<label><b>Body:</b></label><br/>
				    
					 <input size="30" name="bodyPost" ref={register({ required: true, maxLength: 300 })} defaultValue={selectedPostBody} />
				    {errors.bodyPost && <span> Required - max 300 characters</span>}
							 					 
                    <br /><br />
					
					<input className="btn btn-warning custom-text-color-button" value="Submit" type="submit" />
							
				</form> 
				
               				
            </div>
			
        </div>
    );
}

export { EditPost };