import Footer from '../Components/Footer'
import 'leaflet/dist/leaflet.css'
import { MapSource } from '../Components/Map'

export const MyMap = ({ mode, toggleMode }) => {
    
    return (
        <>
        <br />
        <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Map Locations</h1>
        <br />
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            Here is a map listing useful shopping locations in the Boston Area for Ulcerative Colitis safe food options.
        </p>
        <MapSource />
        </>
    )
}