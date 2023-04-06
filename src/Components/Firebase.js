import React,{useState, useEffect} from 'react'
import { database } from '../firebase';

function Firebase() {
    const[name, setName] = useState('');
    const[age, setAge] = useState('');

    let createUserInDB = async () =>{   //--> CREATE COMMAND
    //    let res = await database.users.add({name,age})
          let res = await database.users.doc('1111111').set({name, age})   
       console.log(res);
    }
    useEffect(async()=>{
       let uid = '1111111';
    // let data = await database.users.orderBy('createdAt','desc').get(); //onSnapShot //READ  COMMAND
       let data = await database.users.get();
    //    console.log(data.data());
    data.forEach((obj)=>console.log(obj.data())); 
       
    })
    let update = async()=>{
        let uid = '1111111';
        await database.users.doc(uid).update({       //UPDATE COMMAND
            name,age
        })
    }
    let deletee = async()=>{        //DELETE COMMAND
        let uid = 'AtZOwENrGlqgtPJaslth';
        await database.users.doc(uid).delete();
    } 
  return (
    <>
      <div>
       <label htmlFor="name">Name</label>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
       <label htmlFor="age">Age</label>
       <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
       {/* <button onClick={createUserInDB}>Create</button> */}
       <button onClick={update}>Create</button>
       <button onClick={deletee}>Delete</button>
      </div>
    </>
  )
}

export default Firebase
