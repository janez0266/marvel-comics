import React from 'react'
import PropTypes from 'prop-types';
import {capitalCase} from "../utils/Functions"

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
                    {capitalCase(item.role)}:  {item.name}
                </li>
            </ul>            
          </div>
        ))}
        </div>
    )
}
ShowCreators.propTypes = {
    creatorsItems: PropTypes.array,  
      item: PropTypes.shape({
        role: PropTypes.string,
        name: PropTypes.string
      })
  }
export default ShowCreators;