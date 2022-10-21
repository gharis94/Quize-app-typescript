import { shuffleArray } from './utils'

export type Question ={
    correctAnswer:string;
    incorrectAnswers:string[];
    difficulty:string;
    category:string;
    question:string;
    type:string;
    id:string
}

export type QuestionState = Question & { answers:string[]}

export enum Difficulty {
    EASY='easy',
    MEDIUM='medium',
    HARD='hard'
}


export const fetchQuizQuestions = async (noOfQ: number, difficulty: Difficulty): Promise<QuestionState[]> => {
    
    const rsp = await fetch(`https://the-trivia-api.com/api/questions?categories=science&limit=10&difficulty=easy`)
    const data = await rsp.json()
    
    const rsp1 = await  data.map((name:Question)=>({
        ...name,
        answers:shuffleArray([...name.incorrectAnswers,name.correctAnswer])
    }))
    
    return rsp1
}

/*export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
};*/