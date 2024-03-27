export interface IRdxMainSlice {
    from_currency: TSelectedCurrency;
    to_currency: TSelectedCurrency;
    exchange_data: TExchangedata;
    is_rate_limited: boolean;
    loading: boolean;
}

export type TSelectedCurrency = { value: string, label?: string; rawLabel: string }

export type TExchangedata = {
    "Realtime Currency Exchange Rate": {
        "1. From_Currency Code": string,
        "2. From_Currency Name": string,
        "3. To_Currency Code": string,
        "4. To_Currency Name": string,
        "5. Exchange Rate": string,
        "6. Last Refreshed": string,
        "7. Time Zone": string,
        "8. Bid Price": string,
        "9. Ask Price": string
    }
}

export interface ICurrencyValueItem {
    value: TSelectedCurrency;
    title: string; 
    currencyName: string; 
    currencyAcronym: string;
    onSelectChange: (value: TSelectedCurrency) => void;
}

export interface ICurrencySelectProps {
    onSelectChange: (value: TSelectedCurrency) => void; 
    value: TSelectedCurrency;
}