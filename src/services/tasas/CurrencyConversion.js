// services/tasas/CurrencyConversion.js

export default class CurrencyConversion {
    static convertToDollars(amount, rate) {
        return amount / rate;
    }

    static convertToSoles(amount, rate) {
        return amount * rate;
    }
}
