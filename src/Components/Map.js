import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

// Code referenced from "Alejandro AO - Software & AI", video link: https://www.youtube.com/watch?v=jD6813wGdBA 
export const MapSource = () => {

    const markers = [
        {
            geocode: [42.361930, -71.065628],
            popUp: "Whole Foods North"
        },
        {
            geocode: [42.3454449299211, -71.06279485450891],
            popUp: "Whole Foods South"
        },
        {
            geocode: [42.38971850443059, -71.11902616000255],
            popUp: "Cambridge Naturals Porter Square"
        },
        {
            geocode: [42.35629960625531, -71.06071200710316],
            popUp: "Cambridge Naturals Porter Square"
        },
        {
            geocode: [42.3624044207394, -71.05670399060233],
            popUp: "Mo'Rockin Fusion"
        },
        {
            geocode: [42.36603526591939, -71.05288313581015],
            popUp: "Maria Ss Della Cava"
        }
    ]
    
    const newIcon = new Icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        iconSize: [25, 25]
    })
    
    return (
        <MapContainer center={[42.35, -71.08]} zoom={15} scrollWheelZoom={false} id="mapId">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers.map(marker => (
                <Marker position={marker.geocode} icon={newIcon} >
                    <Popup>
                        {marker.popUp}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}