interface IOwner {
    SingUpOwner(token: string): Promise<any>,
    SingInOwner(email: string, password: string, done: any): Promise<any>,
    sendMail(ownerObj: object, done: any): Promise<any>,
    AddOwnerGoogle(): any
}

export default IOwner;