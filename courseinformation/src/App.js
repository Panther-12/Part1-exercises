// Displays the title of the project
const Header = (props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
    );
}

// Displays sub sections of the project
const Part = (props)=>{
  return(
    <div>
      <p>{props.part}</p>
      <p>{props.exercises}</p>
    </div>
  );
}

// Display the total no of exercises in each section
const Total = (props)=>{
  const total = props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises
  return(
    <div>
    <p>Total exercises: {total}</p>
    </div>
  );
}

// Displays the data by passing part components
const Content = (props)=>{
  return(
    <div className="parts-wrapper">
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  );
}


 
const App = ()=>{
  //Definations passed as props to components
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div className="App">
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}

export default App;
