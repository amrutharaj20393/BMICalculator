import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

  const [bweight, setWeight] = useState("")
  const [bheight, setHeight] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [Masscalc, setMasscalc] = useState("")
  const [isBweight, setIsBweight] = useState(true)
  const [isBheight, setIsBheight] = useState(true)
  const [isAge, setIsAge] = useState(true)
  const [isGender, setIsGender] = useState(true)
  const [agecat, setAgeCat] = useState("")
  const [bmicat, setBmiCat] = useState("")
  const [res, setRes] = useState(false)


  const calculate = (e) => {

    const { name, value } = e.target
    console.log(name)
    console.log(value)

    console.log(value.match('^[0-9]*$'))

    if ((!!value.match('^[0-9]*$'))) {
      if (name == 'bweight') {
        setWeight(value)
        setIsBweight(true)
      }
      else if (name == 'bheight') {
        setHeight(value)
        setIsBheight(true)
      }
      else if (name == 'age') {
        setAge(value)
        setIsAge(true)
      }

    }
    else if (name == 'gender' && (!!value.match('^[a-zA-Z]*$'))) {
      setGender(value)
      setIsGender(true)
    }
    else {
      if (name == 'bweight') {
        setWeight(value)
        setIsBweight(false)
      }
      else if (name == 'bheight') {
        setHeight(value)
        setIsBheight(false)
      }
      else if (name == 'age') {
        setAge(value)
        setIsAge(false)
      }
      else if (name == 'gender') {
        setGender(value)
        setIsGender(false)
      }
    }



  }

  const clear = () => {
    setAge("")
    setGender("")
    setHeight("")
    setWeight("")
    setIsAge(true)
    setIsBheight(true)
    setIsBweight(true)
    setIsGender(true)
    setRes(false)
  }

  const Result = () => {
    console.log(bheight)
    const heightInMeters = bheight / 100;
    const bmi = Math.round((bweight / (heightInMeters * heightInMeters)))

    let bmiCategory = "";
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }


    let ageCategory = "";
    if (age >= 0 && age <= 12) {
      ageCategory = "Child";
    } else if (age >= 13 && age <= 19) {
      ageCategory = "Teenager";
    } else if (age >= 20 && age <= 64) {
      ageCategory = "Adult";
    } else if (age >= 65) {
      ageCategory = "Senior";
    } else {
      ageCategory = "Invalid Age";
    }

    setMasscalc(bmi);
    setAgeCat(ageCategory)
    setBmiCat(bmiCategory)
    setRes(true)
    console.log(bmi)
  }
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20210709/original/pngtree-fitness-run-motion-sprint-picture-image_917924.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0
        }}>

        <h1 style={{ color: "dark", textAlign: "center", paddingTop: "20px" }}>
          <FontAwesomeIcon icon={faCalculator} flip className='me-2' />BMI App
        </h1>

        <div className="container p-4">
          <div className="row mt-5 d-flex justify-content-center align-items-center">

            <div className="col-lg-6 col-md-8">

              <h4 className=' text-center'>Body Mass Index</h4>
              <p className='ms-2 me-2 text-primary fw-medium' style={{ fontSize: '15px', textAlign: 'justify' }}>Body Mass Index (BMI) is widely used as an indicator of body fat content. Your weight alone is not sufficient to establish if you are in a healthy weight range. For example, a tall but slender person can weigh more than a short but plump individual. But the former may enjoy better health as long as their weight is suitable for their height. The ideal weight is also likely to differ for men and women of similar heights.
                <br></br> <br></br>
                How then do you know whether you fall in the healthy weight range or not? Your BMI solves this confusion. It correlates your weight with your height and evaluates whether your weight is appropriate for your stature. You can use a BMI calculator to find out your BMI.

                Although not an exact measurement of body fat percentage, in most cases, BMI is a reliable tool for establishing risk levels for illnesses, especially ailments related to excess body fat. Many healthcare professionals use BMI to determine effective doses for medicines. Often people with a higher BMI need higher doses. Hence, it is crucial to be aware of your BMI to ensure your overall wellness.
              </p>

            </div>
            <div className="col-lg-4 col-md-8 bg-dark rounded shadow">
              <div className='container-fluid bg-light rounded-2 mt-3 mb-2'>
                <h4 className='text-center'>BMI Calculator</h4>
                <div className="mb-3 mt-3 ms-2 me-2">
                  <TextField name='bweight' value={bweight} id="outlined-basic" label="Enter Weight(kg)" variant="outlined" className='w-100' onChange={(e) => calculate(e)} />
                  {isBweight == false &&
                    <span className='text-danger'>*invalid input</span>}

                </div>
                <div className="mb-3 mt-3 ms-2 me-2">
                  <TextField name='bheight' value={bheight} id="outlined-basic" label="Enter Height(cm)" variant="outlined" className='w-100' onChange={(e) => calculate(e)} />
                  {isBheight == false &&
                    <span className='text-danger'>*invalid input</span>}

                </div>
                <div className="mb-3 mt-3 ms-2 me-2">
                  <TextField name='age' value={age} id="outlined-basic" label="Enter Age" variant="outlined" className='w-100' onChange={(e) => calculate(e)} />
                  {isAge == false &&
                    <span className='text-danger'>*invalid input</span>}
                </div>
                <div className="mb-3 mt-3 ms-2 me-2">
                  <TextField name='gender' value={gender} id="outlined-basic" label="Enter Gender" variant="outlined" className='w-100' onChange={(e) => calculate(e)} />
                  {isGender == false &&
                    <span className='text-danger'>*invalid input</span>}
                </div>
                <div className="d-flex justify-content-between mt-3">
                 
                    
                      <Button variant="contained" color="success" className='p-3 mb-3 ms-3  ' style={{ width: '150px' }} onClick={Result}>Calculate</Button>
                      <Button variant="outlined" className='p-3 ms-2  mb-3 me-3' style={{ width: '150px' }} onClick={clear} >Reset</Button>
                   
                 
                  </div>
                  {res == true && (<div className='text-center mt-4'>  <h5 className='text-center text-primary'>Your BMI is: <span className='text-danger'>{Masscalc}</span> </h5>
                    <h5 className='text-center text-primary'>classification:<span className='text-danger'> {bmicat}</span></h5>
                    <h5 className='text-center text-primary'> Category:<span className='text-danger'> {agecat} </span></h5> </div>)}

                


              </div>

            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
