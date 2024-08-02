export const UsefulLinks = ({ mode, toggleMode }) => {
    return (
        <>
        <br />
        <h1 id="useful_links" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Useful Links</h1>      
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Here are some sites I found very helpful in understanding the condition:</p>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            <a href="https://www.crohnscolitisfoundation.org/">Crohn's and Colitis Foundation</a>
        </p>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
              <a href="https://www.mayoclinic.org/diseases-conditions/ulcerative-colitis/diagnosis-treatment/drc-20353331">Mayo Clinic</a>
        </p>
        </>
    )
}