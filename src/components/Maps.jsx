import GoogleMapReact from "google-map-react";
import FireMarker from "./FireMarker";
import "./Maps.css";

const Maps = (props) => {
  var events = props.events;

  return (
    <div className="maps">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lng: 77.1025, lat: 28.7041 }}
        defaultZoom={5}
      >
        {events.map((ev) => {
          return (
            <FireMarker
              lng={ev["geometries"][0]["coordinates"][0]}
              lat={ev["geometries"][0]["coordinates"][1]}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Maps;
