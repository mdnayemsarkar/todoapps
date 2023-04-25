import React from "react";
import cross from "./Images/cancel.png"

function Todolst(props) {



  return (<>
    <div className="todo_style">
    {/* <i class="fa-duotone fa-circle-xmark"></i> */}
    <img src={cross} alt="" onClick={()=>{
    props.onSelect(props.id);
    
     } }

     />

        <li>{props.text}</li>
    </div>
    </>
  );
}
export default Todolst;
