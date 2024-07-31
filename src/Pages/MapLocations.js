import Footer from '../Components/Footer'
import 'leaflet/dist/leaflet.css'
import { MapSource } from '../Components/Map'

export const MyMap = () => {
    
    return (
        <>
        <br />
        <h1>Map Locations</h1>
        <br />
        <p>
            Here is a map listing useful shopping locations in the Boston Area for Ulcerative Colitis safe food options.
        </p>
        <MapSource />
        <Footer />
        </>
    )
}