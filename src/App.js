import { useState } from "react";


function App() {

  const [color,setColor]=useState("pink");


  return (
    <>
        <div className="container-fluid h-100 m-0 p-0 fixed-bottom"
          style={{backgroundColor:color}}
        >
          <div className="container mb-5 justify-contant-center fixed-bottom ">
            <button
              className="btn shadow btn-outline-danger p-3 m-3 border-light"
              onClick={()=>setColor("Red")}
            >Red</button>

            <button
              className="btn shadow-lg btn-outline-success p-3 m-3 border-light"
              onClick={()=>setColor("green")}
            >Green</button>

            <button
              className="btn shadow-sm btn-outline-warning p-3 m-3 border-light"
              onClick={()=>setColor("orange")}
            >Orange</button>

            <button
              className="btn btn-outline-secondary p-3 m-3 border-light"
              onClick={()=>setColor("Black")}
            >Black</button>

            <button
              className="btn shadow btn-outline-warning p-3 m-3 border-light"
              onClick={()=>setColor("yellow")}
            >Yellow</button>

            <button
              className="btn opacity-50 btn-outline-primary p-3 m-3 border-light"
              onClick={()=>setColor("blue")}
            >Blue</button>

            <button 
              className="btn shadow-lg btn-outline-light p-3 m-3 border-light"
              onClick={()=>{setColor('white')}}
              >Light</button>

              <button
                className="btn btn-outline-info border-info p-3 m-3"
                onClick={()=>{setColor("lightblue")}}
              >
              Info</button>
          </div>
        </div>
    </>
  );
}

export default App;
