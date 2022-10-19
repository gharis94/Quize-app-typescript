import React from 'react'

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
        <div>
            {ans.map(an=>(
                <button disabled={userAns} onClick={()=>callback()}>
                    <p dangerouslySetInnerHTML={{__html:an}}/>
                </button>
                
            ))}
        </div>
    
    </div>
  )
}

export default QuestionCard