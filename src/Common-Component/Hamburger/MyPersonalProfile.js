import React, { Component } from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import { userApi } from "../../Api";
import { Input, Dropdown } from "kx-common-components";
import { get } from "lodash";
import { parseNumber, getInitials } from "../../util/index";
import 'semantic-ui-css/semantic.min.css';
import "../../index.scss";


const phoneOptions = {
    WORK: "WORK",
    HOME: "HOME",
    MOBILE: "MOBILE",
};

export default class MyPersonalProfile extends Component {
    constructor() {
        super();
        this.state = {
            checkEmail: false,
            phoneType: null,
            phone: null,
            isdCode: null,
            contactName: null,
            statusMessage: ""
        };
    }

    componentWillMount = () => {
        this.setState({
            contactName: this.props.contactName,
            email: this.props.email,
            phoneType: this.props.phoneType,
            phone: this.props.phone,
            isdCode: this.props.isdCode,
            timestamp: Date.now(),
        });
    };


    handleSubmit = async () => {
        const { contactName, phone, isdCode, phoneType } = this.state;

        let profile = {
            eventMessage: {
                "countryName": "UNITED_KINGDOM",
                userBasicInfo: {
                    contactName: contactName
                },
                phone: [
                    {
                        typeOfPhone: phoneType,
                        isdCode: isdCode,
                        phoneNo: parseNumber(phone),
                    },
                ],
            },
            eventType: "KXUSER_UPDATE_EXISTING_PERSONAL_PROFILE",
            eventTime: Date.now(),
        };

        userApi.updateUser(profile
        ).then(() => {
            this.props.fetchCustomerData()
        })
        this.setState({"statusMessage": "Form Saved!"}, () => {
          setTimeout(() => { this.setState({"statusMessage": ""}) }, 2000);
        })
    };


    handleUpdate(key, e) {
        this.setState({ [key]: e });
    } // Updates general inputs

    handleISDUPdate(e) {
        this.setState({ isdCode: e });
    } // Updates phone isd


    render() {
        const { contactName, email, phone, phoneType, checkEmail, error } = this.state;
        const { profileImage } = this.props;
        // let isWhiteLabel = get(this.props.userInitialData, "userInfo.isWhiteLabel", null);
        // let wlCustomerName = get(this.props.userInitialData, "userInfo.wlCustomerName", null);
        let companyName = get(this.props, "userInitialData.userBasicInfo.companyName", "");


        return (
            <div className={"outer-modal-container"} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div id="scrollableContainer">
                    <Segment padded="very" className="modal-container" raised>

                        {
                            profileImage
                                ? <div className="profile-pic-div modal-profile-image" style={{ backgroundImage: "url(" + profileImage + ")" }} />
                                : <div className="profile-pic-div modal-profile-initials" ><div ><p style={{ fontSize: '50px', top: '50%', position: 'relative', transform: 'translateY(-50%)', maxWidth: '100px', overflow: 'hidden' }}>{getInitials(contactName)}</p></div></div>
                        }

                        <div className="profile_header">

                            <h1 className="_header">My Profile</h1>
                        </div>

                        <div class="form-column-wrapper">

                            <div class="form-column">
                                <Input value={contactName} label={"Full Name"} onChange={(e) => this.handleUpdate("contactName", e)} charsOnly rounded />
                                <Input value={email} label={"Email"} onChange={(e) => this.handleUpdate("email", e)} disabled rounded />


                            </div>

                            <label className="phone_code_label">CODE</label>
                            <div class="form-column profile-second-row">
                                <Dropdown value={phoneOptions[phoneType]} handleSelect={(e) => this.handleUpdate("phoneType", e)} list={phoneOptions} label={"Phone Type"} rounded />
                                <div className="phone-wrapper">
                                    <Input value={phone} label={"Phone Number"} onChange={(e) => this.handleUpdate("phone", e)} handleISDUPdate={(e) => this.handleISDUPdate(e)} isdCode={this.state.isdCode} phone rounded />
                                </div>
                            </div>
                        </div>

                        <p className="status_message">{this.state.statusMessage}</p>

                    </Segment>

                    <div className="basic-info-buttonRow">
                        <Button type="submit" className="cancelBasicInfo" style={{ border: "1px solid", backgroundColor: "white" }} onClick={() => this.props.toggleModal()}>
                            CANCEL
                        </Button>

                        <Button type="submit" className="saveBasicInfo" onClick={() => this.handleSubmit()} color="twitter">
                            SAVE CHANGES
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
