import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  //Fetch available places from backend
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        setAvailablePlaces(resData.places);
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
