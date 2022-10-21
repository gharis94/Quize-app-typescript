import React from 'react'

export const Result = ({score}:any):any => {
    
    
    if(score > 7){
        return(
            <>
                <h2>Congratulation For Exceptional Performance</h2>
                <h4>`Your Score is ${score} `</h4>
            </>
        )               
    }else if(score >=4 && score <=7 ){
        return(
            <>
                <h2>Satisfactory Performance</h2>
                <h4>`Your Score is ${score} `</h4>
            </>
        )
    }else{
        return (
            <>
                <h2>Need Improvemet</h2>
                <h4>`Your Score is ${score} `</h4>
            </>
        )
    }
            
   
}
