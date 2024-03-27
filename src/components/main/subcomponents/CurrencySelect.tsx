import React from "react";
import Select from 'react-select'
import cryptoList from "../../../shared/cryptoList";
import hardCurrencyList from "../../../shared/hardCurrencyList";
import { ICurrencySelectProps, TSelectedCurrency } from "../../../shared/types";

const CurrencySelect: React.MemoExoticComponent<(props: ICurrencySelectProps) => JSX.Element> = React.memo((props) => {
    const [selectOptions, setSelectOptions] = React.useState<any[]>([]);

    const handleSetCrytoNames = React.useCallback(() => {
        const all_currencies = {...cryptoList, ...hardCurrencyList}
        const cryptoNamesList = Object.keys(all_currencies).map((cryptoName: string) => 
            ({
                value: cryptoName, 
                label: all_currencies[cryptoName as keyof typeof all_currencies] + " " + cryptoName,
                rawLabel: all_currencies[cryptoName as keyof typeof all_currencies]
            }))
        setSelectOptions(cryptoNamesList);
    }, [])

    React.useLayoutEffect(() => {
        handleSetCrytoNames();
    }, [])

    return (
        <Select 
            value={props.value} 
            isClearable={true}
            options={selectOptions} 
            className='select-container w-100' 
            onChange={(newValue) => props.onSelectChange(newValue as unknown as TSelectedCurrency)}
        />
    )
}) 

export default CurrencySelect;