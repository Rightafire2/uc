import '../Assets/CSS/App.css';
import Footer from '../Components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ mode, toggleMode }) => {

  return (
    <div>
    <br />
    <h1 className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Ulcerative Colitis - my personal journey </h1>
    <br />
    <main className='main'>
    <section>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
          October 2022: I had just started my senior year at college. In addition to planning for completing requisite
          courses, I was busy applying and interviewing for jobs. It was exciting and stressful time. I was looking
          forward to completing the courses and eager to land my dream job. Fate had other ideas... 
        </p>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
          It all started with stomach cramps and bloody stools. Initial diagnosis by the doctors at the university 
          health center, was that this was likely a minor stomach bug and I would be back on my feet quickly. Unfortunately, 
          things got significantly worse very quickly. By the middle of November, I could barely walk and had to run to the 
          bathroom 25+ times a day. My parents cut short their India vacation and flew to Chicago. It was clear I had to see 
          a GI specialist asap. We flew back home (to Boston) and met with a GI. A colonoscopy was scheduled for Monday after 
          Thanksgiving. The diagnosis was a severe case of Ulcerative Colitis (Pan Colitis - inflammation of the entire Colon)
        </p>
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>
          After receiving this devastating news, we had to quickly learn about this disease and make significant adjustments 
          to our lifestyles. This website chronicles my journey, the lessons I learned, how I was able to get into remission 
          and the impact it has had on my and my family's life. 
        </p>
    </section>
    <Footer />
    </main>
    </div>

  );
}

export default Home;
