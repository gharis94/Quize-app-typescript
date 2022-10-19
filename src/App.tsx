import React,{useState} from 'react';
import './App.css';
import QuestionCard from './Component/QuestionCard/QuestionCard'

const TOTAL_QUESTIONS=10;

function App() {
  const [question,setQuestion]=useState([])
  const [answers,setAnswers]=useState([])
  const [qNo,setQNo]=useState(0)
  const [userAnswer,setUserAnswer] =useState('')

  const userClick =()=>{
    console.log('click')
  }
  
  return (
    <div className="App">
      
      <QuestionCard totalQuestion={TOTAL_QUESTIONS} ans={answers} question={question[qNo]} questionNo={qNo+1} callback={userClick} userAns={userAnswer}/>
    </div>
  );
}

export default App;
