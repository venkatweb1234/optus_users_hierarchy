import { Role, User } from "./types/types"
export const roles: Role[]= [
    { 
    Id: 1,
    Name:"System Administrator",
    Parent: 0
     },
     {
    Id: 2,
    Name:"Location Manager",
    Parent: 1,
     },
     {
    Id: 3,
    Name:"Supervisor",
    Parent: 2,
     },
     {
    Id: 4,
    Name:"Employee",
    Parent: 3,
     },
     {
    Id: 5,
    Name:"Trainer",
    Parent: 3,
     }
 ]

export const users:User[]=[
 {
     Id: 1,
     Name: "Adam Admin",
     Role: 1
    },
   {
     Id: 2,
     Name: "Emily Employee",
    Role: 4
    },
     {
     Id: 3,
     Name: "Sam Supervisor",
    Role: 3
    },
  {
     Id: 4,
     Name: "Mary Manager",
    Role: 2
    },
    {
     Id: 5,
     Name: "Steve Trainer",
    Role: 5
    }
    

]