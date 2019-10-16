import {SyncAction} from "redux-ts";
import {ViewType} from "app/ViewType";

export class SetViewType extends SyncAction {

    public readonly viewType: ViewType;

    constructor(viewType: ViewType) {
        super();
        this.viewType = viewType;
    }
}

export class SetClockValue extends SyncAction {

    public readonly value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}

export class SetClockRed extends SyncAction {

    public readonly red: boolean;

    constructor(red: boolean) {
        super();
        this.red = red;
    }
}

export class SetName extends SyncAction {

    public readonly name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}

export class SetEmail extends SyncAction {

    public readonly email: string;

    constructor(email: string) {
        super();
        this.email = email;
    }
}

export class SetPhone extends SyncAction {

    public readonly phone: string;

    constructor(phone: string) {
        super();
        this.phone = phone;
    }
}
