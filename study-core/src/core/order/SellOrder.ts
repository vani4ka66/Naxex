import {OrderType} from "enum/OrderType";
import {Currency} from "enum/Currency";
import {BaseOrder} from "core/order/BaseOrder";
import Numbers from "core/format/Numbers";

export class SellOrder extends BaseOrder {

    public constructor(id: number, amount: number, currency: Currency, date: number) {
        super(id, OrderType.SELL, amount, currency, date);
    }

    public formatAmount(): string {
        return "Sell " + this.currency() + Numbers.format(this.amount());
    }
}
