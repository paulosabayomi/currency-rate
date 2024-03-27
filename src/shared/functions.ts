import { axios_instance } from "./constants"
import { setIsRateLimited, setLoading, updateExchangeData } from "./rdx-slice";
import { store } from "./store";

export const fetch_data = async (from_currency: string, to_currency: string): Promise<any> => {
    store.dispatch(setIsRateLimited(false));
    store.dispatch(setLoading(true));
    return await axios_instance.get(`&from_currency=${from_currency}&to_currency=${to_currency}`)
    .then((data: any) => {
        if (data.data['Information'] != undefined) store.dispatch(setIsRateLimited(true));
        store.dispatch(updateExchangeData(data.data))
        store.dispatch(setLoading(false));
        return data;
    })
    .catch(err => {store.dispatch(setLoading(false)); return undefined})
}

export const refreshData = async (): Promise<void> => {
    await fetch_data(store.getState().main.from_currency.value, store.getState().main.to_currency.value);
}

export function formatCurrency (amount: number | undefined, currency?: string, locale = navigator.language): string {
    if (amount === undefined || store.getState().main.to_currency.value === undefined) return '';
    try {
        const formatter = new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: currency || store.getState().main.to_currency.value,
          maximumFractionDigits: 8,
        });
        return formatter.format(amount);        
    } catch (error) {
        return amount as unknown as string;
    }
}