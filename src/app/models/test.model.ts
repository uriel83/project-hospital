export interface testModel{

    Supervisor?: String,    
    profession?: String,
    urlTest?: String,
    usersId?: String[]
    
}

export interface CompleteTest{

    supervisor?: String,    
    profession?: String,
    urlCompleteTest?: String,
    userId?: number,
    score?: number,
    remarks?:string,
    StartTime?: number,
    endTime?: number,

    
}