import { NutritionImg } from "../Assets/Configurations/ChangeSizeNutrition"
import pdf from "../Assets/Recipes/smoothie.pdf"

export const NutritionGuide = ({ mode, toggleMode }) => {
    return (
        <>
        <br />
        <h1 id="guide" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Nutrition Guide</h1>
        <NutritionImg />



    <div class="row align-items-start">
        <div class="col-md-5 text-start text-md-start">
        <p className={`text-${mode === 'light' ? 'dark' : 'white'}`}>What I learned about nutrition, a 4 week menu planner with recipe links</p>
        <h1 class="display-6">
          <div className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Meal Planner:</div>
        </h1>
        <ul>
          <li><a href="#Week_1" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Week 1</a></li>
          <li><a href="#Week_2" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Week 2</a></li>
          <li><a href="#Week_3" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Week 3</a></li>
          <li><a href="#Week_4" className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Week 4</a></li>
        </ul>
      
      </div>
      <div class="col-md-5 text-center d-none d-md-block">
        
      </div>
    </div>


    <section id="Week_1">
    <div class="row align-items-start">
      <div class="col-md-5 text-start text-md-start">
        <h1 class="display-6">
          <div className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Week 1:</div>
        </h1>
      </div>
      <div class="table-responsive">
          <table class="table table-striped">
              <thead>
              <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Breakfast</th>
                  <th scope="col">Lunch</th>
                  <th scope="col">Dinner</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr>
                  <th scope="row">Sunday</th>
                  <td><a href={pdf}>Smoothie</a></td>
                  <td>Pesto Pasta</td>
                  <td>Rice and Veggies</td>
              </tr>
              <tr>
                  <th scope="row">Monday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Tuesday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Wednesday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Thursday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Friday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Saturday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              </tbody>
          </table>
      </div>
    </div>
    <br />    
    <a href="#guide">Back to Meal Planner</a>
    <br />
    <br />
    </section>


    <section id="Week_2">
    <div class="row align-items-start">
      <div class="col-md-5 text-start text-md-start">
        <h1 class="display-6">
          <div className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Week 2:</div>
        </h1>
      </div>
      <div class="table-responsive">
          <table class="table table-striped">
              <thead>
              <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Breakfast</th>
                  <th scope="col">Lunch</th>
                  <th scope="col">Dinner</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr>
                  <th scope="row">Sunday</th>
                  <td><a href={pdf}>Smoothie</a></td>
                  <td>Pesto Pasta</td>
                  <td>Rice and Veggies</td>
              </tr>
              <tr>
                  <th scope="row">Monday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Tuesday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Wednesday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Thursday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Friday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Saturday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              </tbody>
          </table>
      </div>
    </div>
    <br />    
    <a href="#guide">Back to Meal Planner</a>
    <br />
    <br />
    </section>

<section id="Week_3">
    <div class="row align-items-start">
      <div class="col-md-5 text-start text-md-start">
        <h1 class="display-6">
          <div className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Week 3:</div>
        </h1>
      </div>
      <div class="table-responsive">
          <table class="table table-striped">
              <thead>
              <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Breakfast</th>
                  <th scope="col">Lunch</th>
                  <th scope="col">Dinner</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr>
                  <th scope="row">Sunday</th>
                  <td><a href={pdf}>Smoothie</a></td>
                  <td>Pesto Pasta</td>
                  <td>Rice and Veggies</td>
              </tr>
              <tr>
                  <th scope="row">Monday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Tuesday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Wednesday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Thursday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Friday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Saturday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              </tbody>
          </table>
      </div>
    </div>
    <br />    
    <a href="#guide">Back to Meal Planner</a>
    <br />
    <br />
</section>

<section id="Week_4">
    <div class="row align-items-start">
      <div class="col-md-5 text-start text-md-start">
        <h1 class="display-6">
          <div className={`text-${mode === 'light' ? 'dark' : 'white'}`}>Week 4:</div>
        </h1>
      </div>
      <div class="table-responsive">
          <table class="table table-striped">
              <thead>
              <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Breakfast</th>
                  <th scope="col">Lunch</th>
                  <th scope="col">Dinner</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr>
                  <th scope="row">Sunday</th>
                  <td><a href={pdf}>Smoothie</a></td>
                  <td>Pesto Pasta</td>
                  <td>Rice and Veggies</td>
              </tr>
              <tr>
                  <th scope="row">Monday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Tuesday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Wednesday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Thursday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Friday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              <tr>
                  <th scope="row">Saturday</th>
                  <td>BF TBD</td>
                  <td>Lunch TBD</td>
                  <td>Dinner TBD</td>
              </tr>
              </tbody>
          </table>
      </div>
    </div>
    <br />    
    <a href="#guide">Back to Meal Planner</a>
    <br />
    <br />
    <br />
    <br />
</section>
        </>
    )
}