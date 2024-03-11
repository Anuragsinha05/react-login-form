import React, { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [fullName, setFullName] = useState("");

  const[lastName, setLastName] = useState();
  const[lastNamenew, setLastNameNew] = useState("");

  


  const inputEvent = (event) => {
    console.log(event.target.value);
    setname(event.target.value);
  };
  //agar hum event pass kar te hai tou wo trigger hota hai
  //bue hum event.target.value use karte hai tou wo har ek word or letter ke liye trigger hota hai yani user ka input mile ga
  //

  const inputEventTwo = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Hello {fullName} {lastNamenew} </h1>

          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={inputEvent}
            value={name}
          />

          {/* onchange is the control component */}

          <br />

          <input
            type="text"
            placeholder="Enter Your Last Name"
            onChange={inputEventTwo}
            value={lastName}
          />

          <button type="submit" onClick={onSubmit}>Click me 👍</button>
        </div>
      </form>
    </>
  );
};




















export default App;
//input field pe kaam karne ka matlab hai ki hum controlled event pe kaam kar rahe hai and it is controlled by react
// single source of truth:jo hum har jaga use karte hai
// note:in form tag when we click submit button the text in the text box disappear.
// to overcome this we can use onSubmit in the form and then we can use event.preventDefault() in the onSubmit function