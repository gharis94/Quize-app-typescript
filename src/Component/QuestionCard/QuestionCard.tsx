import React from 'react'
import styled from 'styled-components';

type Props={
    question:string;
    ans:string[];
    callback:any;
    userAns:any;
    totalQuestion:number;
    questionNo:number;

}

const QuestionCard: React.FC<Props> = ({question,questionNo,totalQuestion,callback,userAns,ans}) => {
  return (
    <div>
        <h4>Quention No:{questionNo}</h4>
        <span>{questionNo}/{totalQuestion}</span>

        <div>
            <p dangerouslySetInnerHTML={{__html:question}}/>
        </div>
        <ButtonContainer>
            {ans.map(an=>(
                <button disabled={userAns} key={an} onClick={()=>callback()}>
                    <p dangerouslySetInnerHTML={{__html:an}}/>
                </button>
                
            ))}
        </ButtonContainer>
    
    </div>
  )
}

export default QuestionCard;

const ButtonContainer = styled.div`
    display:flex;
    flex-direction:column;
`
