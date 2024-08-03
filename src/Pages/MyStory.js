import { StoryImg } from "../Assets/Configurations/ChangeSizeStory.js"

export const MyStory = ({ mode, toggleMode }) => {
    return (
        <>
        <br />
        <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>My Story</h1>
        <StoryImg />
          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
              This page chronicles my journey with UC starting with initial symptoms and diagnosis, to getting to remission.
          </p>

          <ul>
          <li><a href="#about_me">About Me</a></li>
          <li><a href="#symptoms">Initial Symptoms and diagnosis</a></li>
          <li><a href="#hospitalization">Hospitalization and rapid progression to Biologics</a></li>
          <li><a href="#weight_loss">Weight loss</a></li>
          <li><a href="#school">School, Grades and what really matters</a></li>
          <li><a href="#recovery">Road to recovery</a></li>
          <li><a href="#year1">Year 1 Imaging and remission</a></li>
          <li><a href="#support_system">My family and my support system</a></li>
          </ul>
          <br />
          <br />

          <h2 id="about_me" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>About Me</h2>
          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>My name is Amogh Bharadwaj, an undergraduate student (class of 2023) at McCormick school of Engineering pursuing Computer Science.
            This is my experience with UC and its impact on my life.
          </p>
          <br />
  
          <h2 id="symptoms" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Initial Symptoms and diagnosis</h2>
          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>It all started in October, 2022 with stomach cramps and bloody stools. Initial diagnosis by the doctors at the university 
            health center, was that this was likely a minor stomach bug and I would be back on my feet quickly. Unfortunately, 
            things got significantly worse very quickly. By the middle of November, I could barely walk and had to run to the 
            bathroom 25+ times a day. My parents cut short their India vacation and flew to Chicago. It was clear I had to see 
            a GI specialist asap. We flew back home (to Boston) and met with a GI. A colonoscopy was scheduled for Monday after 
            Thanksgiving. The diagnosis was a severe case of Ulcerative Colitis (Pan Colitis - inflammation of the entire Colon)
          </p>

          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            The GI started me on aggressive treatment plan with steriods. The hope was that the steriod treatment would reduce inflammation 
            and then we could switch to 5-aminosalicylates. Unfortunately, the initial treatment plan did not work. After 2 weeks, I had to 
            rush to the ER due to worsening symptoms
          </p>
          <br />

          <h2 id="hospitalization" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Hospitalization and rapid progression to Biologics</h2>
          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>We went to the ER assuming we would be back home in a day or two. However, the next line of defense (IV steriods) did not 
            have much effect either. After 5 days in the hospital, the GI informed us that we have to progress to the next line 
            of treatment with biologics. We were also told that we should also prepare for the worst case scenario where the biologics 
            would not work either and it may require surgery (removal of the colon). 
            In a short span of 6 weeks, I had gone from perfect to health to potentially losing my colon. I had to pause thinking about 
            completing course work and future career plans; the immediate focus was on getting healthy and getting back on my feet.
          </p>
          <br />

          <h2 id="weight_loss" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Weight loss</h2>
          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            Because of continuous loss of blood, key minerals and nutrients, and the inability to eat / hold food, I lost weight rapidly. 
            I lost close to 50 pounds in 3 months. Lost of lot of blood and had to be given blood transfusion multiple times. We eventually 
            worked with a nutritionist specializing in UC; it would have been extremely helpful to engage early on. Probably could have 
            controlled weight loss more effectively. 
          </p>
          <br />

          <h2 id="school" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>School, Grades and what really matters</h2>
          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            I dropped out of 1 course in the fall quarter of my senior year. My parent suggested taking a break from school at least during 
            the winter quarter. I was not willing to do that. In hindsight, was a terrible idea to try to attend school while I was barely 
            able to stand / walk. I ended up completing only 1 course and dropping out of 2 more. Spring quarter was not any better; I ended 
            up dropping out of all the courses. 
            My parents moved to Chicago for 6 months during the winter and spring quarters to support me. Unfortuntely, didn't really work out 
            well from an academic perspective. 
          </p>
          <br />
          

          <h2 id="recovery" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Road to recovery</h2>
          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>The biologics finally started to work by April 2023. By July, I started to gain weight and started to feel more energetic. 
            The protein markers continued to show high levels of inflammation in the colon; but, at least I was making progress and moving 
            in the right direction. 
            I started my job in July and tried to balance school and work in Fall / Winter. It turned out to be extremely hard to do that. 
          </p>
          <br />

          <h2 id="year1" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Year 1 Imaging and remission</h2>
          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
            Every couple of months, my GI kept checking the protein markers. By December, the protein marker was in normal range. It was time 
            to do another colonoscopy to assess progress. The tests done in end of January 2024, showed I was in full remission. My GI was 
            extremely pleased (so was I and my family and friends). He revealed that only 30% of patients who go on biologics see the level of 
            remission I was experiencing. I was ecstatic. Finally some good news on the health front.
            While physically I was getting better, my mental health is another story. I continue to deal with anxiety and depression. I am 
            confident that in the coming months, I will make steady progress on that front as well.
          </p>
          <br />

          <h2 id="support_system" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>My family and my support system</h2>
          <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>My parents, my brother, uncles & aunts, close friends back in Boston were my lifeline throughout this journey. 
            It truly took a village, and I am eternally grateful for their support. My professors and counsellors at Northwestern also played 
            a key role and were very kind & generous in extending support when I needed the most. I want to extend my sincere thanks to 
            everyone. 
          </p>
          <br />
          <br />
          <br />
    </>
    )
}