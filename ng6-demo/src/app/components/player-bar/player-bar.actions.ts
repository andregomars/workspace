export class AddPlayData {
    static readonly type = '[player] add data';
    constructor(public payload: any) {}
}

export class Pause {
    static readonly type = '[player] pause';
}

export class Stop {
    static readonly type = '[player] stop';
}

export class Play {
    static readonly type = '[player] play';
}

export class Resume {
    static readonly type = '[player] resume';
    constructor(public payload: any) {}
}
