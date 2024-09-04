import React from "react";
import { IoMdAdd } from "react-icons/io";
import LocationInput from "./LocationInput";

const LocationForm = ({
  setLocationListName,
  locationListName,
  location,
  removeLocationInput,
  handleChangeLocation,
  addLocationInput,
  clearLocation,
  locationUpdate,
  saveLocation,
}) => {
  return (
    <div className="form-container">
      <div className="add-location-form underline">
        <div className="office-div">
          <label htmlFor="locationListName" className="input-label">
            Location List Name
          </label>
        </div>
        <input
          type="text"
          id="locationListName"
          placeholder="Enter Location List Name"
          onChange={(e) => setLocationListName(e.target.value)}
          value={locationListName}
          className="form-input"
        />
      </div>
      {location &&
        location.map((item, index) => {
         return( <LocationInput
            type="text"
            key={index}
            index={index}
            item={item}
            handleChangeLocation={handleChangeLocation}
            removeLocationInput={location.length > 1 ? removeLocationInput : null}
          />)
      })}
      <div className="location-para">
        <p className="location-heading">Add Location</p>
        <IoMdAdd className="location-icon" onClick={addLocationInput} />
      </div>

      <div className="submit-buttons">
        <button onClick={clearLocation} className="clear">
          Clear
        </button>
        <button onClick={() => locationUpdate()} className="update">
          Update
        </button>
        <button className="save" onClick={saveLocation}>
          Save
        </button>
      </div>
    </div>
  );
};

export default LocationForm;
