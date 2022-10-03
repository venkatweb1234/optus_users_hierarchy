import { roles, users } from "../mock";
import { User } from "../types/types";

const  getRoleIds = (roleId:number, roleIds:number[]) => {
    if(roleId){
     for(let role of roles){
        if(role.Parent === roleId){
          
         roleIds.push(role.Id)
        getRoleIds(role.Id, roleIds)
        }
     }
    }
    return  roleIds;
 }

export const getSubordinates =(userId:number)=> {  
const user = users.find((user)=>user.Id === userId) as User
const userRoleId = user?.Role;
const selectedRoleIds= getRoleIds(userRoleId,[])
const selectedUsers = users.filter((user)=> selectedRoleIds.includes(user.Role))
return JSON.stringify(selectedUsers)
}