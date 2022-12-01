import {useState} from 'react';

// Renders the buttons with necessary text
const Button = ({onClick, text})=>{
    return(
      <button onClick={onClick}>{text}</button>
      )
}

// Displays the statistics and data
const StatisticLine = ({text, value})=>{
  return(
    <p>{text} {value}</p>
  )
}

//
const Statistics = ({good, neutral, bad, sum }) =>{
  return(
    <div>
      <table>
        <tbody>
          <tr><StatisticLine text="Good" value={good}/></tr>
          <tr><StatisticLine text="Neutral" value={neutral}/></tr>
          <tr><StatisticLine text="Bad" value={bad}/></tr>
          <tr><p>All {sum}</p></tr>
          <tr><p>Average {sum/2}</p></tr>
          <tr><p>Positive: {(good/sum)*100}%</p></tr>
        </tbody>
      </table>
    </div>
  )
}

// Main function body
function App() {
  // States to store the statistical data
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let sum = good+bad+neutral

  const handleGoodClick = (e)=>{
    e.preventDefault()
    setGood(good+1)
  }
  const handleNeutralClick = (e)=>{
    e.preventDefault()
    setNeutral(neutral+1)
  }
  const handleBadClick = (e)=>{
    e.preventDefault()
    setBad(bad+1)
  }

  return (
    <div className="App">
      <h2>Give feedback</h2>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>
      <h3> Statistics</h3>
     { good!==0|| neutral!==0 || bad!==0?<Statistics good={good} neutral={neutral} bad={bad} sum={sum}/>:"No feedback given"}
    </div>
  );
}

export default App;
