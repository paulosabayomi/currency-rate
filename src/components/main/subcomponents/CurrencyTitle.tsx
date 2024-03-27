import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import CurrencyTitleItem from "./CurrencyTitleItem";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { TSelectedCurrency } from "../../../shared/types";
import { setFromCurrency, setToCurrency } from "../../../shared/rdx-slice";
import { fetch_data } from "../../../shared/functions";
import { STORAGE_NAME } from "../../../shared/constants";

const CurrencyTitle: React.MemoExoticComponent<(props: any) => JSX.Element> = React.memo((props) => {
    const from_currency = useAppSelector(state => state.main.from_currency);
    const to_currency = useAppSelector(state => state.main.to_currency);
    const dispatch = useAppDispatch()

    const updateCurrencyState = React.useCallback((value: TSelectedCurrency, type: "to" | 'from') => {
        dispatch(type == 'from' ? setFromCurrency(value) : setToCurrency(value));
    }, [])

    const handleUpdateCurrency = React.useCallback(async (value: TSelectedCurrency, type: "to" | 'from') => {
        try {
            if (value == null) return updateCurrencyState({value: '', rawLabel: ''}, type);
            updateCurrencyState(value, type);
    
            const from_data = type === 'from' ? value.value : from_currency.value;
            const to_data = type === 'to' ? value.value : to_currency.value;

            localStorage.setItem(STORAGE_NAME, JSON.stringify({from: from_data, to: to_data}));
            const request_data = await fetch_data(from_data, to_data);
        } catch (error) {}
    }, [from_currency, to_currency]);
    
    return (
        <MDBCol xs={12} className="mb-5">
            <MDBRow className="w-100 d-flex justify-content-between">
                <CurrencyTitleItem 
                    title="From"
                    value={from_currency}
                    currencyAcronym={from_currency.value}
                    currencyName={from_currency.rawLabel}
                    onSelectChange={(value: TSelectedCurrency) => handleUpdateCurrency(value, 'from')}
                />
                <CurrencyTitleItem 
                    title="To"
                    value={to_currency}
                    currencyAcronym={to_currency.value}
                    currencyName={to_currency.rawLabel}
                    onSelectChange={(value: TSelectedCurrency) => handleUpdateCurrency(value, 'to')}
                />
            </MDBRow>
        </MDBCol>
    )
})

export default CurrencyTitle;