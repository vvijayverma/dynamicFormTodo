import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import Header from "../../Components/Header";

import {
  addLocation,
  deleteLocation,
  updateLocation,
} from "../../Feature/Slices/locationSlice";
import { isFormValid } from "../../Helper/HelperFunctions";
import Sidebar from "./Sidebar";
import LocationForm from "./LocationForm";

const Dashboard = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state?.location);
  const [locationListName, setLocationListName] = useState("");
  const [locationId, setLocationId] = useState(null);
  const [location, setLocation] = useState([
    { office: "", street: "", city: "", state: "", zipCode: "" },
  ]);

  // console.log(locations,"=============");
  const addLocationInput = () => {
    if (location && location.length < 3) {
      setLocation([
        ...location,
        { office: "", street: "", city: "", state: "", zipCode: "" },
      ]);
    } else {
      toast.warning("Maximum 3 locations are allowed");
    }
  };

  const removeLocationInput = (index) => {
    const updatedLocation = [...location];
    updatedLocation.splice(index, index);
    setLocation(updatedLocation);
  };

  const handleChangeLocation = (index, field, value) => {
    const updatedLocation = [...location];
    updatedLocation[index][field] = value;
    setLocation(updatedLocation);
  };

  const clearLocation = () => {
    setLocationListName("");
    setLocation([{ office: "", street: "", city: "", state: "", zipCode: "" }]);
  };

  const saveLocation = () => {
    const valid = isFormValid(locationListName, location);
    if (valid === false) return;
    let newLocation = {
      locationName: locationListName,
      locations: location,
    };
    dispatch(addLocation(newLocation));
    clearLocation();
    toast.success("Location saved successfully");
  };

  const deleteLocations = async (id) => {
    try {
      dispatch(deleteLocation(id));
      toast.success("Location deleted successfully");
    } catch (error) {}
  };

  const resetLocation = (item) => {
    setLocationId(item.id);
    setLocation(item?.title?.locations);
    setLocationListName(item.title.locationName);
  };

  const locationUpdate = () => {
    const valid = isFormValid(locationListName, location);
    if (valid === false) return;
    let updatedLocation = {
      id: locationId,
      title: {
        locationName: locationListName,
        locations: location,
      },
    };
    dispatch(updateLocation(updatedLocation));
    clearLocation();
    toast.success("Location updated successfully");
  };


  return (
    <>
      <div className="container">
        <Sidebar
          locations={locations}
          resetLocation={resetLocation}
          deleteLocations={deleteLocations}
        />
        <LocationForm
          setLocationListName={setLocationListName}
          locationListName={locationListName}
          location={location}
          removeLocationInput={removeLocationInput}
          handleChangeLocation={handleChangeLocation}
          addLocationInput={addLocationInput}
          clearLocation={clearLocation}
          locationUpdate={locationUpdate}
          saveLocation={saveLocation}
        />
      </div>
    </>
  );
};

export default Dashboard;
