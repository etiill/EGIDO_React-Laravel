import './App.css'

function App() {

  let name: string = "Ethyl Joy F. Egido"
  let age: number = 20;

  let score1: number = 85
  let score2: number = 90

  let totalScore: number = score1 + score2
  let average: number = totalScore / 2


  //comment

  return (
    <> {/* FRAGMENT*/}
      <h1 className='text-purple-600'>Student Information</h1>
      <p className='text-blue-500'>Name: {name} </p>
      <p>Age:{age} </p>
      <h2>Scores</h2>
<p>Score 1: {score1}</p>
<p>Score 2: {score2}</p>

<h3>Total Score: {totalScore}</h3>
<h3>Average Score: {average}</h3>

    </>
  )

}

export default App