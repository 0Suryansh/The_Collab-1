/** @format */



import Rightbox from "./Rightbox";




import React from "react";
import '../pages/info'
import Info from "../pages/info";

function Leftbox() {

  return (
    <>

{Info.map(data=>(
  <>
  <table className="table">
        <tr>
          <td className="td_left">
            <h6> Work Space</h6>
            <p className="author_name"> <span>{data.title}</span> 
             <br />
             {data.content}
            </p>
          </td>

          <td className="td_right">
            
              <p class="table_link">Learn More</p>
            

          </td>
        </tr>
      </table>
        <hr />
   </>   
))}

    </>
  );
}

export default Leftbox;