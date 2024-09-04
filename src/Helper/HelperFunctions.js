import { toast } from "react-toastify";
export const isFormValid = (locationListName,location) => {
    if (!locationListName.trim()) {
         toast.warning("Please fill out all fields.");
        return false
    }
    for (const loc of location) {
      if (
        !loc.office.trim() ||
        !loc.street.trim() ||
        !loc.city.trim() ||
        !loc.state.trim() ||
        !loc.zipCode.trim()
      ) {
        alert("Please fill out all fields.");
        return false
      }
    }
    return true;
  };