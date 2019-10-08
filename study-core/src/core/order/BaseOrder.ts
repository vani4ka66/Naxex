import {Order} from "core/order/Order";
import {OrderType} from "enum/OrderType";
import {Currency} from "enum/Currency";
import DateTime from "core/format/DateTime";

export abstract class BaseOrder implements Order {

    private readonly _id: number;
    private readonly _type: OrderType;
    private readonly _amount: number;
    private readonly _currency: Currency;
    private readonly _date: number;

    protected constructor(id: number, type: OrderType, amount: number, currency: Currency, date: number) {
        this._id = id;
        this._type = type;
        this._amount = amount;
        this._currency = currency;
        this._date = date;
    }

    public id(): number {
        return this._id;
    }

    public type(): OrderType {
        return this._type;
    }

    public amount(): number {
        return this._amount;
    }

    public currency(): Currency {
        return this._currency;
    }

    public date(): number {
        return this._date;
    }

    public abstract formatAmount(): string;

    public formatDate(): string {
        return DateTime.formatDate(this.date());
    }
}
