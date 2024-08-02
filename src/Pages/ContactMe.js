import Navigation from "../Components/Navbar"

export const ContactMe = ({ mode, toggleMode }) => {
    return (
        <>
        <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Contact Me</h1>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            Being diagnosed with UC can be devastating and overwhelming. 
            I hope this site has helped in a small way in helping you come to terms with the diagnosis 
            as well as plan the most important aspects of your life (nutrition, mental health, supplements and additional resources). 
        </p>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            If you have further questions, feel free to <a href="mailto:name@email.com">email</a> me. I will do my best to answer them. 
        </p>
        </>
    )
}