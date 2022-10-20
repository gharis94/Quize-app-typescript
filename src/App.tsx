import React,{useEffect, useState} from 'react';
import './App.css';
import QuestionCard from './Component/QuestionCard/QuestionCard'
import { fetchQuizQuestions,QuestionState,Difficulty } from './utils/API';

const TOTAL_QUESTIONS=10;

function App() {
  const [questionArr, setQuestion] = useState<QuestionState[]>([])
  //const [answer,setAnswers]=useState([])
  const [qNo,setQNo]=useState(0)
  const [userAnswer,setUserAnswer] =useState('')

  useEffect(()=>{
    const fetchQues = async()=>{
      const data =await fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY);
      console.log(data)
      setQuestion(data)
    }
    fetchQues()
  },[])
  const userClick =()=>{
    console.log('click')
  }
  console.log(questionArr)
  return (
    <div className="App">
      {questionArr.length > 0? ( <QuestionCard totalQuestion={TOTAL_QUESTIONS} ans={questionArr[qNo].answers} question={questionArr[qNo].question} questionNo={qNo+1} callback={userClick} userAns={userAnswer}/>):null
      }
    </div>
  );
}

export default App;
