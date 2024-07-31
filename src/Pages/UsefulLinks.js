import Footer from "../Components/Footer"
import Navigation from "../Components/Navbar"

export const UsefulLinks = () => {
    return (
        <>
        <Navigation />
        <br />
        <h1 id="useful_links">Useful Links</h1>      
        <p>Here are some sites I found very helpful in understanding the condition</p>
        <p>
            <a href="https://www.crohnscolitisfoundation.org/">Crohn's and Colitis Foundation</a>
        </p>
        <p>
              <a href="https://www.mayoclinic.org/diseases-conditions/ulcerative-colitis/diagnosis-treatment/drc-20353331">Mayo Clinic</a>
        </p>
        <Footer />
        </>
    )
}