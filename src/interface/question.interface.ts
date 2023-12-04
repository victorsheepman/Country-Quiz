type Option  = {
    letter: string;
    title: string;
}


export interface Question{
    question: string;
    answer: string;
    options: Array<Option>;
}