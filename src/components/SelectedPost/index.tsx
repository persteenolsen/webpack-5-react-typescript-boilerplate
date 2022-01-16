import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";


function SelectedPost() {

    const [selectedPostId, setSelectedPostId] : any = useState(null);
	const [ selectedPostTitle, setSelectedPostTitle] : any  = useState(null);
	const [ selectedPostBody, setSelectedPostBody] : any = useState(null);
		
	// Note: For using the below params / to get the id from the selected Post
    type QuizParams = {
		id: string;
	  };
    
    const { id } = useParams<QuizParams>();

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

    return (
           
		   <div>
		     <h2>The selected Post from the Web API</h2>
			 
			 <br />
			 You selected a Post with Id: <b>{ id }</b>
			 <br /> <br />
			 
			 <Link to="/listposts" >Show the 10 Posts again</Link>
			 <br /><br />
          
             <div className="table-responsive">
           
		       <table className="table table-striped">
                  <thead>
                    <tr>
                        
                        <th>Id</th>
                        <th>Title</th>
						<th>Body</th>
                        
                    </tr>
                  </thead>
                  <tbody>
								                         
						<tr>
                            <td>{selectedPostId}</td>
                            <td>{selectedPostTitle}</td>
							<td>{selectedPostBody}</td>

                        </tr>
                   					
					</tbody>
				</table>
				
              </div>
          </div>
    );
}

export { SelectedPost };