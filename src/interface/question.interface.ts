type Option  = {
    letter: string;
    title: string;
}


export interface Question{
    question: string;
    answer: string;
    options: Array<Option>;
}


export interface PointProtocol {
    setCount:React.Dispatch<React.SetStateAction<number>>
    count:number
}