export interface SignupUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: any;
    phone: number;
    createdAt?: Date
}

export interface SignupRes {
    token:  string,
    user:  string,
}

export interface loginRes {
    userName:  string,
    token:  string
}

export interface loginReq {
    userName:  string,
    password:  string,
}


