import '../../index.scss';
import React, { Component } from 'react'
import { get } from "lodash";
import { modals } from "../../util/constants";
import { Menu, Loader } from "semantic-ui-react";
import MyPersonalProfile from './MyPersonalProfile';
import { getInitials } from '../../util';
import { userApi } from '../../Api';
import DrayageCompanyProfile from './DrayageCompanyProfile'
import ServiceArea from './ServiceArea'
import Legal from './Legal'
import Pricing from './Pricing'
import MyTruckers from './MyTruckers';
import {getDrayagePartnersDetails} from '../../Api/index'
export default class HamburgerMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: "",
      email: "",
      contactName: "",
      companyName: "",
      phoneType: "",
      phone: "",
      isdCode: "",
      partnerId: "",
      data: {},
      loading: true,
    }
  }

  getTokenName = () => {
    console.trace("APP NAME :: getTokenName", window._env_.APP_NAME)
    switch(window._env_.APP_NAME) {
      case "Partner" :
        return "kxPartnerToken"
      case "Customer" :
        return "kxCustomerToken"
      case "Sales":
        return "kxSalesToken"  
    }
    return "kxCustomerToken"
  }

  Logout = () => {
    const domain = window.location.hostname;
    document.cookie = `${this.getTokenName()}=;domain=${domain};path=/`;
    const dt = new Date();
    dt.setTime(dt.getTime() - 24 * 60 * 60 * 1000);
    document.cookie = `${this.getTokenName()}=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    window.location = "/"
    return true;
  }

  componentDidMount = () => {
    this.fetchCustomerData();
  };

  fetchCustomerData = () => {
    this.setState({loading : true})
    userApi.getCustomerData()
    .then((res) => {
        this.setState ({
          contactName: get(res.data.eventMessage, "userBasicInfo.contactName", ""),
          email: get(res.data.eventMessage, "userBasicInfo.email", ""),
          phoneType: get(res.data.eventMessage, "phone[0].typeOfPhone", ""),
          phone: get(res.data.eventMessage, "phone[0].phoneNo", ""),
          isdCode: get(res.data.eventMessage, "phone[0].isdCode", ""),
          partnerId: get(res.data.eventMessage, "userInfo.partnerId", ""),
          loading: false
        })
        this.validate()
    });
  }

  validate=() =>{
    if(this.state.loading === false){
      this.fetchDrayagePartnerData()
      this.setState({modalOpen : modals.myPersonalProfile})
    }
  }

  fetchDrayagePartnerData = () => {
    this.setState({loading: true})
    getDrayagePartnersDetails( this.state.partnerId )
    .then((response) => {
    this.setState({data : response.data.eventMessage, loading: false})
    })
    .catch((err) => {
      console.log(err)
    });
  }

  render() {
    const invisible = { display: "none" };
    const { modalOpen, email, contactName, phoneType, phone, isdCode, data } = this.state;
    let menuItemClass = "menu-item"
    return ( 
      <div className="drayage_container">
        <div className="hamburger_menu">
          <div className="hamburger_menu_top">

            <p className="account-menu-logout" onClick={this.Logout} >
              LOGOUT
            </p>
            <div className="profile-pic-div" ><div ><p style={{ fontSize: '50px', top: '50%', position: 'relative', transform: 'translateY(-50%)', maxWidth: '100px', overflow: 'hidden' }}>{getInitials(contactName)}</p></div></div>
            <p className="username">{contactName}</p>
            <p className="useremail">{email}</p>

          </div>
          {this.state.loading === true ?  <Loader active={true} inline={"centered"} size={"medium"} /> :
          <div className="hamburger_menu_menu" >
            <h3>Profile</h3>

            <div className="menu-item-group">
              <div style={modalOpen !== modals.myPersonalProfile ? invisible : null} className="menu-item-active"></div>
              <Menu.Item onClick={() => this.setState({ modalOpen: modals.myPersonalProfile })} className={menuItemClass} name="myaccount" active={modalOpen === modals.myPersonalProfile} >
                My Profile
              </Menu.Item>
            </div>

            <div className="menu-item-group">
              <div style={modalOpen !== modals.drayageCompanyProfile ? invisible : null} className="menu-item-active"></div>
              <Menu.Item onClick={() => this.setState({ modalOpen: modals.drayageCompanyProfile })} className={menuItemClass} name="myaccount" active={modalOpen === modals.drayageCompanyProfile} >
                Company Profile
              </Menu.Item>
            </div>

            <div className="menu-item-group">
              <div style={modalOpen !== modals.serviceArea ? invisible : null} className="menu-item-active"></div>
              <Menu.Item onClick={() => this.setState({ modalOpen: modals.serviceArea })} className={menuItemClass} name="myaccount" active={modalOpen === modals.serviceArea} >
                My Service Area
              </Menu.Item>
            </div>

            <div className="menu-item-group">
              <div style={modalOpen !== modals.docs ? invisible : null} className="menu-item-active"></div>
              <Menu.Item onClick={() => this.setState({ modalOpen: modals.docs })} className={menuItemClass} name="myaccount" active={modalOpen === modals.docs} >
                Documents
              </Menu.Item>
            </div>

            <div className="menu-item-group">
              <div style={modalOpen !== modals.mytruckers ? invisible : null} className="menu-item-active"></div>
              <Menu.Item onClick={() => this.setState({ modalOpen: modals.mytruckers })} className={menuItemClass} name="myaccount" active={modalOpen === modals.mytruckers} >
                My Truckers
              </Menu.Item>
            </div>

            {/* <h3>Users</h3>

            <div className="menu-item-group">
              <div style={modalOpen !== modals.manageUsers ? invisible : null} className="menu-item-active"></div>
              <Menu.Item onClick={() => this.setState({ modalOpen: modals.manageUsers })} className={menuItemClass} name="myaccount" active={modalOpen === modals.manageUsers} >
                Manage Users
              </Menu.Item>
            </div> */}

            <h3>Payment and Statements</h3>

            <div className="menu-item-group">
              <div style={modalOpen !== modals.accessorialCharges ? invisible : null} className="menu-item-active"></div>
              <Menu.Item onClick={() => this.setState({ modalOpen: modals.accessorialCharges })} className={menuItemClass} name="myaccount" active={modalOpen === modals.accessorialCharges} >
                Accessorial charges
              </Menu.Item>
            </div>
            
          </div>}
        </div>

        <div className="container_modal">
          {
            modalOpen === modals.myPersonalProfile &&
            <MyPersonalProfile
              toggleModal={() => this.setState({ modalOpen: "" })}
              contactName={contactName}
              email={email}
              phoneType={phoneType}
              phone={phone}
              isdCode={isdCode}
              fetchCustomerData={this.fetchCustomerData}
            />
          }
          {
            modalOpen === modals.drayageCompanyProfile &&
            <DrayageCompanyProfile
              toggleModal={() => this.setState({ modalOpen: "" })}
              data={data}
              fetchDrayagePartnerData = {this.fetchDrayagePartnerData}
            />
          }
          {
            modalOpen === modals.serviceArea &&
            <ServiceArea
              toggleModal={() => this.setState({ modalOpen: "" })}
              data={data}
              fetchDrayagePartnerData = {this.fetchDrayagePartnerData}
            />
          }
          {
            modalOpen === modals.docs &&
            <Legal
              toggleModal={() => this.setState({ modalOpen: "" })}
              data={data}
              fetchDrayagePartnerData = {this.fetchDrayagePartnerData}
            />
          }
          {
            modalOpen === modals.mytruckers &&
            <MyTruckers
              toggleModal={() => this.setState({ modalOpen: "" })}
              data={data}
              fetchDrayagePartnerData = {this.fetchDrayagePartnerData}
            />
          }
          {
            modalOpen === modals.accessorialCharges &&
            <Pricing
              toggleModal={() => this.setState({ modalOpen: "" })}
              data={data}
              fetchDrayagePartnerData = {this.fetchDrayagePartnerData}
            />
          }
        </div>
      </div>
    )
  }
}


