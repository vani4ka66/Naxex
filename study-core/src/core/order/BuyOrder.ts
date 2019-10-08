import {OrderType} from "enum/OrderType";
import {Currency} from "enum/Currency";
import {BaseOrder} from "core/order/BaseOrder";
import Numbers from "core/format/Numbers";

export class BuyOrder extends BaseOrder {

    public constructor(id: number, amount: number, currency: Currency, date: number) {
        super(id, OrderType.BUY, amount, currency, date);
    }

    public formatAmount(): string {
        return "Buy " + this.currency() + Numbers.format(this.amount());
    }
}
