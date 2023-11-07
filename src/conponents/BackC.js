import { useState } from "react";


let BackC=()=>{

    const [color,setColor]=useState('olive');



    return(
        <>
            {/* <h1 className="text-center text-danger">Background Changers React Js Pages</h1> */}
            <div className="container-fluid"
                style={{backgroundColor:color}}
            >
                <div></div>
            </div>
        </>
    )
}

export default BackC;