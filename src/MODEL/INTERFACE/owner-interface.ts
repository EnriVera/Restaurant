interface IOwner {
    SingUpOwner(email: string, password: string, done: any): any,
    SingInOwner(email: string, password: string, done: any): any,
    AddOwnerGoogle(): any
}

export default IOwner;