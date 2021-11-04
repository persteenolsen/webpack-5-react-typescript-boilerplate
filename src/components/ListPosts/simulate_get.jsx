
import React, { useState } from 'react';

	
function ListPosts () {

   
 const [users, setUsers] = useState([
      		
		{ id: 1, firstName: 'Per', lastName: 'Olsen', email: 'per.olsen@test.com', role: 'Admin' },
        { id: 2, firstName: 'Ole', lastName: 'Jensen', email: 'ole.jensen@test.com', role: 'User' },
        { id: 3, firstName: 'Peter', lastName: 'Hansen', email: 'peter.hansen@test.com', role: 'User' },
        { id: 4, firstName: 'Hans', lastName: 'Larsen', email: 'hans.larsen@test.com', role: 'User' },
        { id: 5, firstName: 'Ib', lastName: 'Ibsen', email: 'ib.ibsen@test.com', role: 'User' }
		
    ]);
	

    return (
         
		    <div className="table-responsive">
            
			<h3 className="p-3 text-center">React - Display a list of items</h3>
			
			 A simulation of calling a Web API by a GET Request
            <br /><br />
		   
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
		 
      );
  
}

export { ListPosts };