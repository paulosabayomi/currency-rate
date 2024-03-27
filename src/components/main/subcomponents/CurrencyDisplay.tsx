import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import { formatCurrency } from "../../../shared/functions";
import { useAppSelector } from "../../../shared/hooks";

const CurrencyDisplay: React.MemoExoticComponent<() => JSX.Element> = React.memo(() => {
    const exchange_data = useAppSelector(state => state.main.exchange_data)
    const is_rate_limit_exceeded = useAppSelector(state => state.main.is_rate_limited);
    const loading = useAppSelector(state => state.main.loading);
    const from_currency = useAppSelector(state => state.main.from_currency);

    return (
        <MDBCol xs={12} className="my-5">
            {
                is_rate_limit_exceeded &&
                <div className="h5 text-center">Rate Limit Exceeded, Please Try Again Later</div>
            }

            {
                loading ?
                <div className="h5 text-center">Loading data...</div>:
                <div className="d-block">
                    <div className="h3 text-center">1 {from_currency.value} =</div>
                    <div className="display-4 text-center mb-3">
                        {formatCurrency(parseFloat(exchange_data?.['Realtime Currency Exchange Rate']?.['5. Exchange Rate']) || 0)}
                    </div>
                    <div className="d-block">
                        <div className="text-center">
                            <dl className="d-flex justify-content-center">
                                <dt>Ask:</dt>
                                <dd className="mx-3">
                                    {formatCurrency(parseFloat(exchange_data?.['Realtime Currency Exchange Rate']?.['9. Ask Price']) || 0)}
                                </dd>
                            </dl>
                        </div>
                        <div className="text-center">
                            <dl className="d-flex justify-content-center">
                                <dt>Bid:</dt>
                                <dd className="mx-3">
                                    {formatCurrency(parseFloat(exchange_data?.['Realtime Currency Exchange Rate']?.['8. Bid Price']) || 0)}
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            }
        </MDBCol>
    )
});

export default CurrencyDisplay;