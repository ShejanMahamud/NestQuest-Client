import axios from 'axios';
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Map = ({location}) => {
    const [position, setPosition] = useState(null);
    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await axios.get('https://nominatim.openstreetmap.org/search', {
                    params: {
                        q: location,
                        format: 'json',
                        limit: 1,
                    },
                });
                console.log('API Response:', response.data); // Log the API response
                if (response.data.length > 0) {
                    const { lat, lon } = response.data[0];
                    console.log('Coordinates:', lat, lon); // Log the parsed coordinates
                    setPosition([parseFloat(lat), parseFloat(lon)]);
                }
            } catch (error) {
                console.error('Error fetching coordinates:', error);
            }
        };

        fetchCoordinates();
    }, [location]);

  return (
    <MapContainer center={position || [51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {position && (
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default Map