import { HealthImg } from "../Assets/Configurations/ChangeSizeHealth.js"

export const MentalHealth = ({ mode, toggleMode }) => {
    return (
    <>
    <br />
    <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Mental Health</h1>
    <HealthImg />
    <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
        This disease takes a heavy toll on you both physically and mentally. As discussed, I had to get blood transfusion, iron supplements and 
        mineral supplements to replinish loss of essential minerals. 
        I had to drop out of multiple classes during fall, winter and spring quarters. Watching all friends graduate on time and start the next
        chapters of their lives, has been hard. My grades dropped rapidly and it was very hard for me to focus on simple tasks. 
        Depression and anxiety took a very heavy toll and I am still dealing with the fallout. I hope I can get back on my feet quickly. 
        I had great support from my parents, close relatives and friends. However, none of us really understood the mental toll it was taking. 
        I wish I had engaged with a mental health professional early on. Constantly worrying about what went wrong, if my genes or my lifestyle 
        caused this disease, has been difficult. 
        Although I didn't complete all my course work, I decided to start my job in July 2023. I was hoping to complete the remaining credits 
        while continuing to work 4 days a week. It turned out to be a bad idea and I decided to take a leave of absence from my work from April to August 2024.
        I am eagerly awaiting completing the last of the remaining courses this summer and focus on work and dealing with my mental health.  
    </p>
    <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
        I hope none of you have (or your loved ones) have to deal with this disease. Please be aware of the mental toll it can take and seek help early. 
    </p>
    <br />
    <br />
    <br />
    </>
    )
}