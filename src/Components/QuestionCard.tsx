import React from 'react'
import styled from 'styled-components'
import { QuestionState } from '../utils/API'



const QuestionCard = ({ question, answers, callback }: QuestionState) => {
  return (
    <div>
        <h5>Question:{question} </h5>
          <ButtonContainer>
              {
                  answers.map((an:string) => (
                    <button key={an} onClick={callback}>
                        {an}
                    </button>
                ))

              }
          </ButtonContainer>

    </div>
  )
}

export default QuestionCard

const ButtonContainer= styled.div`
    display:flex;
    flex-direction:column;
`