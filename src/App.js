import "./App.css";
import Ev from "./Event";
import React from 'react';
// import {Button,Row,Col} from 'bootstrap/dist/css/bootstrap.min.css';

var App = (props) =>
{
    // let Ul_Class = ["me","you","can"];

    return (
        <>
          <div className="bgcolor-App mt-5 p-5 w-50 m-auto rounded">
              <div className="container-fluid w-10">
                  <div className="d-flex justify-content-center">
                    <div className="p-2 Todo-head rounded w-100 text-center">Todo-List</div>
                  </div>
              </div>

              <Ev />
          </div>
          </>
       
        
        
        
       
    );
}
export default App;