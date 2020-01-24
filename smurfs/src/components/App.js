import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";

import { FetchData, SendData } from "./Reducer/Actions";
import { Card } from "./Card";

const App = props => {
  useEffect(() => {
    props.FetchData();
  }, [props.FetchData]);

  const initVal = { name: "", age: "", height: "" };

  const [newSmurf, setSmurf] = useState(initVal);

  const handleClick = () => {
    console.log("Smurf", newSmurf);
    props.SendData(newSmurf);
    props.FetchData();
    setSmurf(initVal);
  };

  const handelHeight = e => {
    const val = e.target.value;
    setSmurf(state => {
      return { ...state, height: val };
    });
  };

  const handelAge = e => {
    const val = e.target.value;
    setSmurf(state => {
      return { ...state, age: val };
    });
  };

  const handleName = e => {
    const val = e.target.value;
    setSmurf(prevState => {
      return { ...prevState, name: val };
    });
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div className="Form">
        <h2>Add a smurf!</h2>
        <input
          type="text"
          value={newSmurf.name}
          placeholder="Smurf Name"
          onChange={handleName}
        />
        <input
          value="age"
          placeholder="Smurf age"
          value={newSmurf.age}
          onChange={handelAge}
        />
        <input
          value="height"
          placeholder="Smurf height"
          value={newSmurf.height}
          onChange={handelHeight}
        />
        <button onClick={handleClick}>Add My Smurf</button>
      </div>
      <div>Have fun!</div>
      {!props.Data && props.isLoading && <h1>Loading Data..</h1>}
      {props.Data && !props.isLoading && (
        <div className="Card-Container">
          {props.Data.map(ele => (
            <Card item={ele} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { isLoading: state.isLoading, Data: state.Data, error: state.error };
};

export default connect(mapStateToProps, { FetchData, SendData })(App);
