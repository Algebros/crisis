import React from 'react';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './InteractiveMap.css'; // Import the CSS file

const bounds = [[0, 0], [1000, 1000]]; // Adjust the bounds according to your image dimensions

const InteractiveMap = () => {
  return (
    <MapContainer
      center={[500, 500]} // Center of the image
      zoom={1} // Adjust zoom level to fit the image
      className="full-page-map" // Use the CSS class
      crs={L.CRS.Simple}
    >
      <ImageOverlay
        url={require('../assets/crisismap.png')} // Path to your image
        bounds={bounds}
      />
      <Marker position={[500, 500]}>
        <Popup>
          A marker on the image.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default InteractiveMap;