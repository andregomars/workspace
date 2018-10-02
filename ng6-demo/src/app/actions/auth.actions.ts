export class Login {
    static readonly type = '[auth] login';
    constructor(public email: string, public password: string) {}
}

export class Logout {
    static readonly type = '[auth] logout';
}
