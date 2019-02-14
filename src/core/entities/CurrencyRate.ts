export class CurrencyRate {
    // currency name besides USD
    _currency: string;
    // exchange rate of dollar currency
    exchangeRate: number;
    // initial value in dollar currency
    initialValue: number;

    constructor (_currency:string, exchangeRate: number, value: number) {
        if (isEmptyOrNull(exchangeRate) || isEmptyOrNull(value)) {
            throw new Error("exchangeRate or Value Should not be null");
        }
        this._currency = _currency;
        this.exchangeRate = exchangeRate;
        this.initialValue = value;
    }

    get toDollarRate () {
        return this.exchangeRate * this.initialValue;
    }

    get currency () {
        return this._currency
    }
    
}

function isEmptyOrNull  (num: number) {
    return num === null
}