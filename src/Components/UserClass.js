//File to demonstrate the User Functional Component in Class Component
import React from "react";

//If there is a Class component inside class component the order is
// Parent constructor -> parent render() -> Child constructor -> Child render()

//Lifecycle of Components of react CLASS COMPONENT
//Contructor() => render() => componentDidMount()
// Parent constructor -> parent render() -> Child constructor -> Child render() ->Child componentDidMount -> Parent componentDidMount

//If there are multiple childs to the parent then (Render and Commit Phase)
    // - Parent constructor
    // - parent render
    // - first child constructor
    // - first child render
    // - second child constructor
    // - second child render
    // - first child componentDidMount
            // ```Updating the DOM is an expensive task so react tries to do all in SINGLE/ONE BATCH```
    // - second child componentDidMount
    // - parent componentDidMount

// ```REACT LIFE CYCLE METHODS```  DIAGRAM
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// RENDER PHASE : Until where page renders with dummy data
// COMMIT PHASE : Phase after Render phase completes and state-variables( setState() ) are updated and re-rendered on UI with new data.


class UserClass extends React.Component {
  constructor(props) {
    console.log(" constructor ")

    super(props);

    //Declare the state variables here
    //React creates a single object to manage all state variables as shown in UserClass
    this.state ={
        count1 : 0,
        count2 : 0,
        userInfo : {
            login : "Dummy Name",
            location: "Dummy Location",
        }
    }
  }

  // componentDidMount() is similar to useEffect() hook in functional components.
  // We can perform the API calls inside componentDidMount.
  // Simlar to useEffect, the componentDidMount function also executes after the components renders.

  //To make API call inside componentDidMount we can make it async
  async componentDidMount(){
    //To say that the component is completely rendered in DOM/UI
    console.log(" componentDidMount ")
    const data = await fetch(`https://api.github.com/users/RAHULGOLI21`)
    const userInfo = await data.json();
    // console.log(userInfo)
    this.setState({userInfo})   
    console.log(this.state.userInfo) 


    // const interval = setInterval(()=>{
    //     console.log(" Namastey Rahul");
    // },1000)
  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate")
  }

  componentWillUnmount(){
    //It will be called when the component is removed from UI. Ex: During page change etc..
    console.log("componentWillUnmount")
    
    //Used to clear the setIntervals which are triggered if any during the rendering of the component
    // clearInterval(this,interval);

    //to do the same above functionality in Func Components we have a return function in useEffect
  }

  render() {
    console.log(" render ")
    const { login, avatar_url,html_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1> Name: {this.props.name}</h1>
        <h3> location: {this.props.location}</h3>
        <h3> GitHub Profile name : {login}</h3>
        <h3> GitHub Profile URL : {html_url}</h3>

        <button onClick={()=> {
            // NEVER UPDATE STATE VARIABLES DIRECTLY like 
            //this.state.count1 = this.state.count +1
            //It creates inconsistencies
            this.setState({
                count1 : this.state.count1 + 1,
                count2 : this.state.count2 -1
            })
        }}>{this.state.count2}  Decrease Left & Increase right  {this.state.count1}</button>
      </div>
    );
  }
}

export default UserClass;

/**
 * -- MOUNTING --
 *   constructor(dummy)
 *   render(dummy)
 *   componentDidMount
 *      API Call
 *      this.setState({})
 *  
 * -- UPDATING --
 *  render(API new data)
 *  ComponentDidUpdate
 *
 *
 */