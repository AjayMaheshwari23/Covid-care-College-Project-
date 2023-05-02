import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import fever from '../Images/fever.webp'
import cough from '../Images/cough.png'
import tired from '../Images/tired.png'
import taste from '../Images/taste.png'
import throat from '../Images/throat.png'
import head from '../Images/head.webp'

function Symtoms() {
  return (
    <div>
      <h1 classname="heading"> What are the <span>symptoms</span>? </h1>

<div classname="container">

    <div classname="d-flex flex-wrap justify-content-center">

        <div classname="box p-4 m-2">
            <img src={fever} alt="" width={200} height={200}/>
            <h3>Fever</h3>
            <p>Fever is one of the most common symptoms in COVID-19 patients.</p>
        </div>

        <div classname="box p-4 m-2">
            <img src={cough} alt="" width={200} height={200}/>
            <h3>cough</h3>
            <p>The virus causes difficulty in breathing, hence coughing is a common symptom.</p>
        </div>

        <div classname="box p-4 m-2">
            <img src={tired}  alt="" width={200} height={200}/>
            <h3>tiredness</h3>
            <p>When recovering from coronavirus, you may feel you need to sleep more or feel exhausted after
                only taking a short walk.</p>
        </div>

        <div classname="box p-4 m-2">
            <img src={taste} alt="" width={200} height={200}/>
            <h3>loss of taste or smell</h3>
            <p>Loss of smell can occur suddenly in people with COVID-19 and is often accompanied by loss of
                taste. </p>
        </div>

        <div classname="box p-4 m-2">
            <img src={throat} alt="" width={200} height={200}/>
            <h3>sore throat</h3>
            <p>sore throat was the most prevalent symptom among those who tested positive for the omicron
                variant, at nearly a two-to-one pace compared with the delta variant.</p>
        </div>

        <div classname="box p-4 m-2">
            <img src={head} alt="" width={200} height={200}/>
            <h3>headache</h3>
            <p>Many studies have shown that COVID may cause headaches. Some people even get a headache before
                they notice any breathing problems. It is a common symptom of COVID.</p>
        </div>

    </div>

</div>

    </div>
  )
}

export default Symtoms
