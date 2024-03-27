import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import CurrencyTitle from "./subcomponents/CurrencyTitle";
import CurrencyDisplay from "./subcomponents/CurrencyDisplay";
import UtilButtons from "./subcomponents/UtilButtons";

const MainComponent: React.MemoExoticComponent<(props: any) => JSX.Element> = React.memo((props) => {

    return (
        <MDBContainer fluid className="d-flex justify-content-center">
            <MDBRow className="w-75">
                <UtilButtons />
                <CurrencyTitle />
                <CurrencyDisplay />
            </MDBRow>
        </MDBContainer>
    )
})

export default MainComponent;