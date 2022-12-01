import {useState} from "react";

const Button= ({onClick, text})=>{
  return(<button onClick={onClick}>{text}</button>)
}

//Main function body

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Uint8Array(7))

  var arr2 = [...vote]
  var max_value=0
  let index=0;

  const generateRandomInt = ()=>{
    var anecdoteNo = Math.floor(Math.random()*(anecdotes.length-1)+1)
    setSelected(anecdoteNo)
  }
  const addVote = (e)=>{
    e.preventDefault()
    arr2[selected]+=1
    setVote(arr2)
  }

  const getMaxValue = ()=>{
    console.log(vote)
    for(var i=0; i<vote.length;i++){
      if(vote[i]>max_value){
        max_value =vote[i]
        index=i
      }
    }
    return index
  }


  return (
    <div className="App">
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has{vote[selected]}votes</p>
      <Button onClick={generateRandomInt} text="next anecdote"/>
      <Button onClick={addVote} text="vote"/>
      <h2>Anecdote with most votes</h2>
      <Button onClick={getMaxValue} text="getMaxValue"/>
      <p>{anecdotes[getMaxValue()]}</p>

    </div>
  );
}

export default App;
