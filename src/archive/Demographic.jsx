import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const geojsonData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Germany",
        color: "#FF5733",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [13.3884, 52.5176],
            [13.3976, 52.5296],
            [13.405, 52.5156],
            [13.3884, 52.5176],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "France",
        color: "#33FF57", // Green for France
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [2.3522, 48.8566],
            [2.3622, 48.8696],
            [2.3722, 48.8556],
            [2.3522, 48.8566],
          ],
        ],
      },
    },
  ],
};

const Map = () => {
  const style = (feature) => {
    return {
      fillColor: feature.properties.color,
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  // Function to handle each country's popup
  const onEachCountry = (feature, layer) => {
    layer.bindPopup(`<h3>${feature.properties.name}</h3>`);
  };

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer
        center={[20, 0]} // Center the map globally
        zoom={2} // Initial zoom level
        minZoom={2} // Minimum zoom level (world view)
        maxZoom={10} // Maximum zoom level (you can adjust based on your needs)
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Adding GeoJSON layer with styling and popups */}
        <GeoJSON
          data={geojsonData}
          style={style}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
