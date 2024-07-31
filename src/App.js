import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navigation from './Components/Navbar.js';
import Home from './Pages/Home.js';
import { SupportForums } from './Pages/SupportForums.js';
import Footer from './Components/Footer.js';
import { MyStory } from './Pages/MyStory.js';
import { MyMap } from './Pages/MapLocations.js';
import { ContactMe } from './Pages/ContactMe.js';
import { MentalHealth } from './Pages/MentalHealth.js';
import { Supplements } from './Pages/Supplements.js';
import { UsefulLinks } from './Pages/UsefulLinks.js';
import { NutritionGuide } from './Pages/NutritionGuide.js';
import { useState } from 'react';

const App = () => {

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.background = 'black';
        } else {
            setMode('light');
            document.body.style.background = 'white';
        }
    }

    const router = createBrowserRouter([
        {
            element: <Navigation mode={'light'} toggleMode={toggleMode}/>,
            children: [
                {
                    path: "/",
                    element: (
                        <div>
                            <Navigation />
                            <Home mode={mode} toggleMode={toggleMode}/>
                            <Footer />
                        </div>
                    )
                },
                {
                    path: "/MyStory",
                    element: <MyStory />
                },
                {
                    path: "/NutritionGuide",
                    element: <NutritionGuide />
                },
                {
                    path: "/Supplements",
                    element: <Supplements />
                },
                {
                    path: "/MentalHealth",
                    element: <MentalHealth />
                },
                {
                    path: "/Map",
                    element: <MyMap />
                }
    
            ]
    
        },
        {
            element: <Footer mode={mode} toggleMode={toggleMode}/>,
            children: [
                {
                    path: "/ContactMe",
                    element: <ContactMe />
                },
                {
                    path: "/UsefulLinks",
                    element: <UsefulLinks />
                },
                {
                    path: "/SupportForums",
                    element: <SupportForums />
                }
    
            ]
    
        }
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;