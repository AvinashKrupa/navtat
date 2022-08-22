import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const CheckoutStepA = (props: any) => {
    return (
        <div className="accordion-item bgbar ms-0" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2
                className="accordion-header"
            >
                <button
                    className="accordion-button font-sb collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    <span className="wordtype">A</span>
                </button>
            </h2>
            <div>

                <p className="fs-12 font-sb">LOGIN <span><AiOutlineCheck style={{ fontSize: 20, color: '#1bf56e' }} /></span></p>
                <h1 className="fs-22  font-sb">{props.customerData?.data.userDetails.name}</h1>

            </div>
            <h1 className="fs-22  font-sb mr-5">+91{" " + props.customerData?.data.businessDetails.whatsapp_number}</h1>
            <div>
            </div>


            <div style={{ alignItems: 'flex-end' }} >
                <button className="btn fs-14" type="button" onClick={props.updateAddress} >
                    {/* Save &amp; Deliver Here */} Change
                </button>
            </div>


        </div>
    )
}

export default CheckoutStepA;