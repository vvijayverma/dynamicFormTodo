import React from 'react';
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Sidebar = ({locations,resetLocation,deleteLocations}) => {
  return (
    <div className="sidebar">
    <h2>Location</h2>
    <ul className="list">
      {locations?.map((item) => {
        return (
          <li className="list-item" key={item.id}>
            <Link to="" className="list-link" onClick={()=>resetLocation(item)}>
              {item?.title?.locationName}
            </Link>
            <MdDelete
              className="icon"
              onClick={() => deleteLocations(item.id)}
            />
          </li>
        );
      })}
    </ul>
  </div>
  )
}

export default Sidebar
