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
            document.body.style.background = '#121212';
        } else {
            setMode('light');
            document.body.style.background = 'white';
        }
    }

    const router = createBrowserRouter([
                {
                    path: "/",
                    element: (
                        <div>
                            <Navigation mode={mode} toggleMode={toggleMode}/>
                            <Home mode={mode} toggleMode={toggleMode}/>
                            <Footer mode={mode} toggleMode={toggleMode}/>
                        </div>
                    )
                },
                {
                    path: "/MyStory",
                    element: (
                        <div>
                            <Navigation mode={mode} toggleMode={toggleMode}/>
                            <MyStory mode={mode} toggleMode={toggleMode}/>
                            <Footer mode={mode} toggleMode={toggleMode}/>
                        </div>
                    )
                },
                {
                    path: "/NutritionGuide",
                    element: (
                        <div>
                            <Navigation mode={mode} toggleMode={toggleMode}/>
                            <NutritionGuide mode={mode} toggleMode={toggleMode}/>
                            <Footer mode={mode} toggleMode={toggleMode}/>
                        </div>
                    )
                },
                {
                    path: "/Supplements",
                    element: (
                        <div>
                            <Navigation mode={mode} toggleMode={toggleMode}/>
                            <Supplements mode={mode} toggleMode={toggleMode} />
                            <Footer mode={mode} toggleMode={toggleMode} />
                        </div>
                    )
                },
                {
                    path: "/MentalHealth",
                    element: (
                        <div>
                            <Navigation mode={mode} toggleMode={toggleMode}/>
                            <MentalHealth mode={mode} toggleMode={toggleMode} />
                            <Footer mode={mode} toggleMode={toggleMode} />
                        </div>
                    )
                },
                {
                    path: "/Map",
                    element: (
                        <div>
                            <Navigation mode={mode} toggleMode={toggleMode}/>
                            <MyMap mode={mode} toggleMode={toggleMode} />
                            <Footer mode={mode} toggleMode={toggleMode} />
                        </div>
                    )
                },
        {
                    path: "/ContactMe",
                    element: (
                        <div>
                            <Navigation mode={mode} toggleMode={toggleMode}/>
                            <ContactMe mode={mode} toggleMode={toggleMode} />
                            <Footer mode={mode} toggleMode={toggleMode} />
                        </div>
                    )
                },
                {
                    path: "/UsefulLinks",
                    element: (
                        <div>
                            <Navigation mode={mode} toggleMode={toggleMode}/>
                            <UsefulLinks mode={mode} toggleMode={toggleMode} />
                            <Footer mode={mode} toggleMode={toggleMode} />
                        </div>
                    )
                },
                {
                    path: "/SupportForums",
                    element: (
                        <div>
                            <Navigation mode={mode} toggleMode={toggleMode}/>
                            <SupportForums mode={mode} toggleMode={toggleMode} />
                            <Footer mode={mode} toggleMode={toggleMode} />
                        </div>
                    )
                }
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;