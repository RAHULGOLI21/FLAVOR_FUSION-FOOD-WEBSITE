import { useState, useEffect } from "react";

const User = (props) => {

    //React creates a single object to manage all state variables as shown in UserClass
    [count1, setCount1]=useState(0);
    [count2, setCount2]=useState(0)

    useEffect(()=>{
        console.log("UseEffect");

        // do API or setIntervals, setTimers or any stuff etc..

        // const interval = setInterval(()=>{
        //     console.log(" Namastey Rahul");
        // },1000) 


        // below return code is called only when Component-Un-Mounting happens
        // i.e constructor -> render -> useEffect -> (when unmounting happens) -> useEffect return();
        return () =>{
            console.log("UseEffect return ")

            // clearInterval(interval);


        }
    },[])

  return(
  <div className="user-card">
    <h1> Name: {props.name}</h1>
    <h2> location: {props.location}</h2>
    <button onClick={()=> {
        setCount1(count1 + 1)
        setCount2(count2 - 1)
    }}>{count2} : Decrease Left & Increase right : {count1}</button>
  </div>)
};

export default User;
