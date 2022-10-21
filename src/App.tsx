import React,{useEffect, useState,MouseEvent} from 'react';
import './App.css';
import QuestionCard from './Component/QuestionCard/QuestionCard'
import { fetchQuizQuestions,QuestionState,Difficulty } from './utils/API';
import { Result}  from './Component/Result';

const TOTAL_QUESTIONS=10;

function App() {
  const [questionArr, setQuestion] = useState<QuestionState[]>([])
  //const [answer,setAnswers]=useState([])
  const [qNo,setQNo]=useState(0)
  const [userAnswer,setUserAnswer] =useState('')
  const [correct,setCorrect] = useState<number>(0)
  const [submit,setSubmit]= useState<boolean>(false)
  useEffect(()=>{
    const fetchQues = async()=>{
      const data =await fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY);
      setQuestion(data)
    }
    fetchQues()
  },[])

  const userClick = (e: any)=>{
    console.log(e.target.innerText)
    //console.log(e.target.children.firstElementChild.innerText)
    setUserAnswer(e.target.innerText)
    console.log('user ans',userAnswer)
   if(e.target ===questionArr[qNo].correctAnswer){
      setCorrect(prev=>prev+1)
    }
  
  }
  const handleNext=()=>{
    setQNo(prev => prev + 1)
    setUserAnswer('')
  }
  
  return (
    <>
    {
     !submit ? (
       <div className="App">
         {questionArr.length > 0 ? (<QuestionCard totalQuestion={TOTAL_QUESTIONS} ans={questionArr[qNo].answers} question={questionArr[qNo].question} questionNo={qNo + 1} callback={userClick} userAns={userAnswer} />) : null
         }
         <button disabled={qNo === 9 ? true : false} onClick={() =>handleNext() }>Next Question</button>
         <button onClick={()=>setSubmit(true)}>Submit Quize</button>
        </div>
      ): (
        <Result score={correct}/>
      )
      }
    </>
  );
}

export default App;
