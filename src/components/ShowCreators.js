import React from 'react'
import {cap} from "../utils/Constants"

 const ShowCreators = (props) => {
    return (
        <div>
            {props.creatorsItems &&
        props.creatorsItems.map((item, idx) => (
          <div
            className="creators"
            key={idx}  >
            <ul>
                <li>
                    {cap(item.role)}:  {item.name}
                </li>
            </ul>
            
          </div>
        ))}
        </div>
    )
}
export default ShowCreators;