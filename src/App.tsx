import React,{useEffect, useState,MouseEvent} from 'react';
import './App.css';
import QuestionCard from './Component/QuestionCard/QuestionCard'
import { fetchQuizQuestions,QuestionState,Difficulty } from './utils/API';
import { Result}  from './Component/Result';
import styled from 'styled-components';

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
    setUserAnswer(e.target.innerText)
    console.log(e.target, questionArr[qNo].correctAnswer)
   if(e.target.innerText === questionArr[qNo].correctAnswer){
      setCorrect(prev=>prev+1)
    }
    
  }
  const handleNext=()=>{
    setQNo(prev => prev + 1)
    setUserAnswer('')
  }
  
  return (
    <div className="App">
    {
     !submit ? (
       <>
            {questionArr.length > 0 ? (
              <QuestionCard 
              totalQuestion={TOTAL_QUESTIONS} 
              ans={questionArr[qNo].answers} 
              question={questionArr[qNo].question} 
              questionNo={qNo + 1} 
              callback={userClick} userAns={userAnswer} />) : null
         }
         <ButtonContainer>
          {qNo < 9?(
            <Button  
            onClick={() =>handleNext() }>
              Next Question
          </Button>
          ):(
            <Button 
            onClick={()=>setSubmit(true)}>
              Submit Quize
          </Button>
          )}
          
          
        </ButtonContainer>
        </>
      ): (
          <ResultContainer>
              <Result score={correct} />
          </ResultContainer>

      )
      }
    </div>
  );
}

export default App;

const ResultContainer =styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
  margin-top:100px;
`
const ButtonContainer =styled.div`
  margin-top:5px;
  display:flex;
  align-items:center;
  justify-content:center
`
const Button=styled.button`
  margin:5px;
  padding:10px;
  border-radius:5px;
  border:none;
  background-color:blue;
  color:white;
  :hover{
    background-color:aliceblue;
    color:black;
  }
  :disabled{
    background-color:black
    
  }
`