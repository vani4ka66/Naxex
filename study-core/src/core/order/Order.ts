import {OrderType} from "enum/OrderType";
import {Currency} from "enum/Currency";

export interface Order {

    id(): number;

    type(): OrderType;

    amount(): number;

    currency(): Currency;

    date(): number;

    formatAmount(): string;

    formatDate(): string;
}
