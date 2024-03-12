// updated form version
import React, { useState } from "react";

const App2 = () => {
    // use state ke andar hum function call kar sakte hai
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    pNumber: '',
  });

  


  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value =event.target.value;
    // const name  = event.target.name;

    const{value,name}=event.target //obj destructuring


    setFullName((preValue)=>{
        // console.log(preValue);
        if(name === 'fName'){
            return{
                fname:value,
                lname: preValue.lname,
                email: preValue.email,
                pNumber: preValue.pNumber,
            };
        }
        else if(name === 'lName'){
            return{
                fname: preValue.fname,
                lname: value,
                email: preValue.email,
                pNumber: preValue.pNumber,
            };
        }
        else if(name === 'email'){
            return{
                fname: preValue.fname,
                lname: preValue.lname,
                email: value,
                pNumber: preValue.pNumber,

            };
        }
        else if(name === 'pNumber'){
            return{
                fname: preValue.fname,
                lname: preValue.lname,
                email: preValue.email,
                pNumber: value,

            };
        }
    })

  };

  //agar hum event pass kar te hai tou wo trigger hota hai
  //bue hum event.target.value use karte hai tou wo har ek word or letter ke liye trigger hota hai yani user ka input mile ga
  //

  const onSubmit = (event) => {
    event.preventDefault();
    alert('form Submitted')
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Hello {fullName.fname} {fullName.lname} </h1>
          <p>
          {fullName.email}
          {fullName.pNumber}
          </p>

          <input
            type="text"
            placeholder="Enter Your Name"
            name="fName"
            onChange={inputEvent}
            value={fullName.fname}
          />

          {/* onchange is the control component */}

          <br />

          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lName"
            onChange={inputEvent}
            value={fullName.lname}
          />

          <input
            type="email"
            placeholder="Enter Your email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
          />

          <input
            type="number"
            placeholder="Enter Your phoneNumber"
            name="pNumber"
            onChange={inputEvent}
            value={fullName.pNumber}
          />

          <button type="submit" onClick={onSubmit}>Click me 👍</button>
        </div>
      </form>
    </>
  );
};




















export default App2;
//input field pe kaam karne ka matlab hai ki hum controlled event pe kaam kar rahe hai and it is controlled by react
// single source of truth:jo hum har jaga use karte hai
// note:in form tag when we click submit button the text in the text box disappear.
// to overcome this we can use onSubmit in the form and then we can use event.preventDefault() in the onSubmit function

// spread operator
const fullName=['anurag','sinha'];
const boiData=[1,...fullName,21,'male'];

console.log(fullName);
console.log(boiData);

// ... this is the spreadOperator

var shooterGames = ['call of duty','far cry','residentil evil']
var racingGames = ['need for speed','burn out']
var games=[...shooterGames,...racingGames]
console.log(games)

var [first,...remaining] = shooterGames
console.log(first);
console.log(remaining);