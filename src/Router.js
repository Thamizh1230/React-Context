import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Forms/Form";
import { useReducer } from 'react';
import Login from "./Login/Login";
import { stateContext } from "./Context/Statecontext";
import { initialzevalue, stateReducer } from "./Context/Statereducer";

const Router = () => {
    const [state, dispatch]= useReducer(stateReducer, initialzevalue);
    console.log("state", state);
  return (
    <stateContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/form" element={<Form />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    </stateContext.Provider>
  )
}

export default Router