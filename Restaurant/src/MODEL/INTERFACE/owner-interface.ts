interface IOwner {
    SingUpOwner(token: string): Promise<any>,
    NewPassword(token: string): Promise<any>,
    SingInOwner(email: string, password: string, done: any): Promise<any>,
    // sendMail(varible: string, ownerObj: object, done: any): Promise<any>,
    sendMail(varible: string, token: string): Promise<any>,
    OwnerGoogle(user_google: object, done: any): Promise<any>
}

export default IOwner;