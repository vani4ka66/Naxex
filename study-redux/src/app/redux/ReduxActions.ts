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
