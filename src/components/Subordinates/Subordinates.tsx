import React from 'react';
import {useLocation} from 'react-router-dom';
import {getSubordinates} from '../../commonfunctions/commonFunction';
import {users} from '../../mock';


function Subordinates() {
 
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const userId = queryParams.get('userId');
   const user = users.find((user)=> user.Id === Number(userId) )
   
    const subordinates = getSubordinates(Number(userId))
    
return (
<>
  {user ? 
    (
    <>
    <div>Subordinates for user({userId}) {user.Name}</div> 
 
    {subordinates }
    </>) : "No user"}
    </>
    

)
}
export default Subordinates