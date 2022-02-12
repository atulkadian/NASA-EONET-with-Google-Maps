import { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import Maps from "./components/Maps";
import "./App.css";

function App() {
  var [eventData, setEventData] = useState([]);
  var [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchEvenets = async () => {
      var data = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      var events = await data.json();
      events = await events["events"];
      events.forEach((event) => {
        if (event["categories"][0]["title"].includes("Wildfires")) {
          setEventData((oldData) => [...oldData, event]);
          console.log(event);
        }
      });
      setIsLoaded(true);
    };
    fetchEvenets();
  }, []);

  if (!isLoaded) {
    return (
      <div className="loading-class">
        <div className="loading-spinner">
          <RingLoader size={110} margin={6} />
          <br />
          <br />
          <h2>Crunching the latest data from NASA... </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <Maps events={eventData} />
    </div>
  );
}

export default App;
