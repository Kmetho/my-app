import { useState } from "react";

const trackLocation = () => {
  const [message, setMessage] = useState("");
  const [latLong, setLatLong] = useState("");
  const [isLocating, setIsLocating] = useState(false);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(latitude + "%2C" + longitude);
    setMessage("");
    setIsLocating(false);
  };

  const error = () => {
    setIsLocating(false);
    setMessage("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      setIsLocating(false);
      setMessage("Geolocation is not supported by your browser");
    } else {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    latLong,
    handleTrackLocation,
    message,
    isLocating,
  };
};

export default trackLocation;
