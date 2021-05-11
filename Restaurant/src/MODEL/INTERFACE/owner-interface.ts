interface IOwner {
    ValidateUser(req: any, res: any, next: any): any;
    SingUpOwner(token: string): Promise<any>;
    NewPassword(tokenUser: string, tokenPassword: string): Promise<any>;
    SingInOwner(token: string): Promise<any>;
    sendMail(varible: string, token: string): Promise<any>;
    OwnerGoogle(user_google: object, done: any): Promise<any>;
}

export default IOwner;