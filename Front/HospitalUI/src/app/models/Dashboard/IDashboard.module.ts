export interface Survey{
    opd: number,
    relieved: number, 
    inPatient: number,
    onVentilation: number
}

export interface SurveyResponse{
    [key: string]: Survey
}