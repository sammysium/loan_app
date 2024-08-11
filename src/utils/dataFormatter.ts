import { config } from "@config/config";

export function formatCurrency(amount: number, locale: string = config.default.currency.locale, currency: string = config.default.currency.name): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(amount);
}