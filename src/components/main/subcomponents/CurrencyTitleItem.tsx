import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import CurrencySelect from "./CurrencySelect";
import { ICurrencyValueItem } from "../../../shared/types";

const CurrencyTitleItem: React.MemoExoticComponent<(props: ICurrencyValueItem) => JSX.Element> = React.memo((props) => {
    return (
        <MDBCol sm={12} md={6} lg={5} className="d-block">
            <div>
                {props.title}
            </div>
            <CurrencySelect value={props.value} onSelectChange={props.onSelectChange} />
            <div className="d-flex align-items-end">
                <div style={{whiteSpace: 'nowrap', fontSize: '1.8rem', fontWeight: '300'}}>{props.currencyName}</div>
                <div className="h4 mx-4">{props.currencyAcronym}</div>
            </div>
        </MDBCol>
    )
})

export default CurrencyTitleItem;