export const Supplements = ({ mode, toggleMode }) => {
    return (
        <>
        <br />
        <h1 id="supplements" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Supplements</h1>
              <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
                While people swear by all kinds of supplements and magic pills, these are the only ones that worked for me and I continue to take:
              </p>
              <br />
              <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Evinature:</h2>
              <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
                This curcumin <a href="http://www.evinature.com/">supplement</a> worked really well in reducing inflammation.
              </p>
              <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Psyllium Husk: </h2>
              <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
                Recommended by a nutritionist I consulted, this supplement was also key in road to remission. 
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10148163/">Recent</a> NIH study also found evidence of significant benefit.
              </p>
              <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Omega-3: </h2>
              <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
                Another supplement recommended by my nutritionist and its efficacy validated by another NIH <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6801729/">study</a>
              </p>
              <h2 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Protein Supplements:</h2>
              <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
                Getting enough proteins is key to recovery. In addition to eggs and cheese, I use hemp hearts, nuts and lentils. For a period of time, I also used protein drinks (fairlife) as part of my daily routine.
              </p>
              <br />
              <br />
              <br />
              </>
    )
}