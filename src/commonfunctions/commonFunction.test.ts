
import {getSubordinates} from './commonFunction'

describe('getsubordinates',()=> {

    it('getsubordinates function', ()=> {
   
        expect(getSubordinates(3)).toEqual( JSON.stringify([
            {
            Id: 2,
            Name: "Emily Employee",
           Role: 4
           },
           {
            Id: 5,
            Name: "Steve Trainer",
           Role: 5
           }]))
        expect(getSubordinates(1)).toEqual(JSON.stringify([{
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
           }]))
        expect(getSubordinates(2)).toEqual("[]")
        expect(getSubordinates(5)).toEqual("[]")
        expect(getSubordinates(4)).toEqual(JSON.stringify([{
            Id: 2,
            Name: "Emily Employee",
           Role: 4
           },
            {
            Id: 3,
            Name: "Sam Supervisor",
           Role: 3
           },{
            Id: 5,
            Name: "Steve Trainer",
           Role: 5
           }]))
    })
})
    


