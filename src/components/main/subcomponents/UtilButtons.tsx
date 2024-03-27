import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import { refreshData } from "../../../shared/functions";
import { useAppSelector } from "../../../shared/hooks";

const UtilButtons: React.MemoExoticComponent<(props: any) => JSX.Element> = React.memo((props) => {
    const loading = useAppSelector(state => state.main.loading);

    return (
        <MDBCol xs={12} className="d-flex mt-5 mb-2 justify-content-between">
            <div>
                <MDBBtn onClick={() => refreshData()} disabled={loading}>
                    <i className="fa fa-refresh mx-2"></i> Refresh
                </MDBBtn>
            </div>
        </MDBCol>
    )
});

export default UtilButtons;