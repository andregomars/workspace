export class AddPlayData {
    static readonly type = '[player] add data';
    constructor(public payload: number) {}
}

export class Pause {
    static readonly type = '[player] pause';
}

export class Stop {
    static readonly type = '[player] stop';
}

export class Play {
    static readonly type = '[player] play';
    constructor(public interval: number) {}
}
