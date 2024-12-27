export interface Survey{
    opd: number,
    relieved: number, 
    inPatient: number,
    ventilator: number
}

export interface SurveyResponse{
    [key: string]: Survey
}