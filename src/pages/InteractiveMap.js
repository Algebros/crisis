import React, { useState, useEffect } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './InteractiveMap.css';
import { useTranslation } from 'react-i18next';

const bounds = [[0, 0], [1080, 1920]]; // Adjust the bounds according to your image dimensions

// Create a custom icon
const ventIcon = L.icon({
  iconUrl: require('../assets/vent.png'), // Path to your custom marker image
  iconSize: [40, 40], // Adjust the size of the icon
  iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -38] // Point from which the popup should open relative to the iconAnchor
});
const securityCameraIcon = L.icon({
  iconUrl: require('../assets/security-camera.png'), // Path to your custom marker image
  iconSize: [40, 40], // Adjust the size of the icon
  iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -38] // Point from which the popup should open relative to the iconAnchor
});
// const terminalIcon = L.icon({
//   iconUrl: require('../assets/terminal.png'), // Path to your custom marker image
//   iconSize: [40, 40], // Adjust the size of the icon
//   iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location
//   popupAnchor: [0, -38] // Point from which the popup should open relative to the iconAnchor
// });



const InteractiveMap = () => {
  const { t, i18n } = useTranslation();
  const [ventsText, setVentilationText] = useState(false);
  const [cameraText, setCameraText] = useState(false);
  // const [terminalText, setTerminalText] = useState(false);

  useEffect(() => {
    setVentilationText(t("UI.Ventilation System"));
    setCameraText(t("UI.Security Camera"));
    // setTerminalText(t("UI.Terminal"));
    // debugger
    // var ventsText = t("Ventilation System");
    // var cameraText = t("Security Camera");
    // var terminalText = t("Terminal");
  }, [i18n.language]);

  return (
    <MapContainer
      center={[600, 950]} // Center of the image
      zoom={1} // Adjust zoom level to fit the image
      className="full-page-map" // Use the CSS class
      crs={L.CRS.Simple}
    >
      <ImageOverlay
        url={require('../assets/crisismap.png')} // Path to your image
        bounds={bounds}
      />
      <Marker position={[470, 1085]} icon={ventIcon}>
        <Popup>
          {ventsText + " 1"}
        </Popup>
      </Marker>
      <Marker position={[665, 1205]} icon={ventIcon}>
        <Popup>
          {ventsText + " 2"}
        </Popup>
      </Marker>
      <Marker position={[425, 905]} icon={ventIcon}>
        <Popup>
          {ventsText + " 3"}
        </Popup>
      </Marker>
      <Marker position={[685, 800]} icon={ventIcon}>
        <Popup>
          {ventsText + " 4"}
        </Popup>
      </Marker>
      <Marker position={[450, 734]} icon={ventIcon}>
        <Popup>
          {ventsText + " 5"}
        </Popup>
      </Marker>
      <Marker position={[600, 670]} icon={ventIcon}>
        <Popup>
          {ventsText + " 6"}
        </Popup>
      </Marker>
      <Marker position={[600, 740]} icon={securityCameraIcon}>
        <Popup>
          {cameraText + " 1"}
        </Popup>
      </Marker>
      <Marker position={[740, 820]} icon={securityCameraIcon}>
        <Popup>
          {cameraText + " 2"}
        </Popup>
      </Marker>
      <Marker position={[560, 1150]} icon={securityCameraIcon}>
        <Popup>
          {cameraText + " 3"}
        </Popup>
      </Marker>
      <Marker position={[510, 1180]} icon={securityCameraIcon}>
        <Popup>
          {cameraText + " 4"}
        </Popup>
      </Marker>
      <Marker position={[650, 1080]} icon={securityCameraIcon}>
        <Popup>
          {cameraText + " 5"}
        </Popup>
      </Marker>
      <Marker position={[360, 890]} icon={securityCameraIcon}>
        <Popup>
          {cameraText + " 6"}
        </Popup>
      </Marker>
      <Marker position={[540, 840]} icon={securityCameraIcon}>
        <Popup>
          {cameraText + " 7"}
        </Popup>
      </Marker>
      {/* <Marker position={[0, 0]} icon={securityCameraIcon}>
        <Popup>
          {cameraText}
        </Popup>
      </Marker>
      <Marker position={[1000, 1500]} icon={securityCameraIcon}>
        <Popup>
          {cameraText}
        </Popup>
      </Marker> */}
      {/* <Marker position={[500, 940]} icon={terminalIcon}>
        <Popup>
          {cameraText}
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default InteractiveMap;