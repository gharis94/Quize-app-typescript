import React from 'react'
import styled from 'styled-components'

export const Result = ({score}:any):any => {
    
    
    if(score > 7){
        return(
            <MainContainer>
                <h2>Congratulation For Exceptional Performance</h2>
                <h4>`Your Score is ${score} `</h4>
            </MainContainer>
        )               
    }else if(score >=4 && score <=7 ){
        return(
            <MainContainer>
                <h2>Satisfactory Performance</h2>
                <h4>`Your Score is ${score} `</h4>
            </MainContainer>
        )
    }else{
        return (
            <MainContainer>
                <h2>Need Improvemet</h2>
                <h4>`Your Score is ${score} `</h4>
            </MainContainer>
        )
    }
            
   
}

const MainContainer=styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: azure;
    margin: 10px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%)
`