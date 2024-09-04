import React from "react";
import { IoMdRemoveCircle } from "react-icons/io";

const LocationInput = ({
  index,
  removeLocationInput,
  handleChangeLocation,
  item}
) => {
  if (!item) return null;
  return (
    <React.Fragment key={index}>
      <div className="location-para">
        <p className="location-heading">Location Parameters</p>
        {removeLocationInput && (
          <IoMdRemoveCircle
            className="location-icon"
            onClick={() => removeLocationInput(index)}
          />
        )}
      </div>

      {["office", "street", "city", "state", "zipCode"].map((field) => (
        <div className="add-location-form" key={field}>
          <div className="office-div">
            <label htmlFor={field} className="input-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
          </div>
          <input
            type="text"
            id={field}
            placeholder={`Enter ${
              field.charAt(0).toUpperCase() + field.slice(1)
            } Name`}
            onChange={(e) => handleChangeLocation(index, field, e.target.value)}
            value={item[field] || ""}
            className="form-input"
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default LocationInput;
