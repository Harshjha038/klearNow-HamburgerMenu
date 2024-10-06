import React, { Component } from "react";
import { Confirm, Checkbox, Radio,Message, Modal,Button } from "semantic-ui-react";
import { editDrayagePartnerTruckers, updateDrayagePartnerTruckers, getStateList } from "../../Api";
import AddTruckers from "./AddTruckers";
import UpdateTruckers from "./UpdateTruckers";
import "./drayagePartner.css";
import "./user-admin.css";

export default class MyTruckers extends Component {
  constructor(props){
    super(props);
    this.state = {
      listOfTruckers: [],
      addTruckers: false,
      updateTruckers: false,
      name: "",
      phoneNumber: "",
      isdCode: "",
      driversLicenseState: "",
      driversLicenseNumber: "",
      status: "",
      confirmOpen: false,
      // reqData: "",
      errorMessage:"",
      showMsg: false,
      message: "",
      clickedIndex: "",
      truckerGuid: "",
      stateList:{},
      openModal: false,
      msgColor:"",
      deleteData: "",
    };
    this.onChangeList = this.onChangeList.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onChangeIsdCode = this.onChangeIsdCode.bind(this);
  }

  componentDidMount =() =>{
    this.setState({listOfTruckers : this.props.data.truckers})
    this.fetchStateList()
  }

  componentDidUpdate = (prevProps, prevState)=> {
    if(prevProps.data.truckers !== this.props.data.truckers){
      this.setState({listOfTruckers : this.props.data.truckers})
    }
  }

  handleCancel = () => this.setState({ confirmOpen: false });

  // Resets state data
  resetData() {
    this.setState({

      id: -1,
      name: "",
      phoneNumber: "",
      isdCode: "",
      licenseState: "",
      licenseNumber: "",
      emailids: ""
    });
  }

  toggleClose() {
    let { clickedIndex } = this.state;

    this.setState({
      updateTruckers: false,
      
      id: -1,
      name: "",
      phoneNumber: "",
      isdCode: "",
      licenseState: "",
      licenseNumber: "",
      emailids: "",
      errorMessage: "",
      driversLicenseState: "",
      driversLicenseNumber: "",
    });

    try {
      document.getElementById("toggled-card").id = "untoggled-card" + clickedIndex;
    } catch (err) {
      console.log("caught: ", err);
    }
  }

  blankToggle() {
    let { addTruckers } = this.state;
    this.resetData();
    this.setState({ addTruckers: !addTruckers });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeIsdCode(e, value) {
    this.setState({isdCode : value});
  }

  onChangeList(e, value){
    this.setState({driversLicenseState : value});
  }

  fetchStateList() {
    getStateList()
    .then((response) =>{
      let list = response.data.eventMessage.itemList.map((item, index) => {
        return {
          key: item.id,
          text: item.description,
          value: item.id,
        };
      });
      this.setState({stateList :list})
    } ) 
  }

  handleSubmit(e, type) {
    let { name, phoneNumber, isdCode, driversLicenseState, driversLicenseNumber, status } = this.state;
    let {data} = this.props;
    if(phoneNumber.length == "10"){
      editDrayagePartnerTruckers(data.companyProfile.userGuid, name, phoneNumber, isdCode, driversLicenseState, driversLicenseNumber, status)
        .then((response) => {
          if (response.data.eventMessage.code === 400){
            let error =  response.data.eventMessage.msg ;
            this.setState({ errorMessage: error });}
          else {
            this.setState({ addTruckers: false, errorMessage: "", showMsg: true, message: "Trucker is Added Successfully", msgColor: "green" }, () => {
              this.toggleClose();
              this.props.fetchDrayagePartnerData();
            });
            setTimeout(() => {
              this.setState({ showMsg: false });
            }, 3000);
          }
        });
    } else{
      this.setState({errorMessage: "Trucker's phone number should be 10 digit"}) 
      setTimeout(() => {
        this.setState({ errorMessage: "" });
      }, 3000);
    }
  }

  onDelete(data) {

    let finalArr= [
      {
        user: {
        userGuid: data.user.userGuid,
        phoneNumber: data.user.phoneNo,
        isdCode: data.user.isdCode,
        contactName: data.user.contactName
        },
        operationType: "TRUCKER_DELETE",
        licenseInfo:{
          licenseState: data.licenseInfo.licenseState,
          licenseNumber: data.licenseInfo.licenseNumber
        }
      },
    ]

    this.handleUpdate(finalArr, "Trucker is Deleted Successfully")
  }

  onUpdate() {
    let { name, phoneNumber, isdCode, driversLicenseState, driversLicenseNumber, status, truckerGuid } = this.state;

    let finalArr= [
      {
        user: {
        userGuid: truckerGuid,
        phoneNumber: phoneNumber,
        isdCode: isdCode,
        contactName: name
        },
        operationType: "TRUCKER_UPDATE",
        licenseInfo:{
          licenseState: driversLicenseState,
          licenseNumber: driversLicenseNumber
        }
      },
    ]
    if(phoneNumber.length == "10"){
      this.handleUpdate(finalArr, "Trucker is Updated Successfully")
    }else{
      this.setState({ errorMessage: "Trucker's phone number is not correct"})
    }
  }

  handleUpdate(finalArr, msg) {
    let {data} = this.props;
    updateDrayagePartnerTruckers(data.companyProfile.userGuid, finalArr)
    .then((response) => {
      if (response.Code === 400){
        let error = [{ key: response.code, err: response.msg }];
        this.setState({ errorMessage: error });}
      else {
        this.setState({ addTruckers: false, errorMessage: "", showMsg: true, message: msg, msgColor: "green", openModal: false }, () => {
          this.toggleClose();
          this.props.fetchDrayagePartnerData();
        });
        setTimeout(() => {
          this.setState({ showMsg: false });
        }, 3000);
      }
    });
    
  }

  setData(data, index) {
    this.setState({
      clickedIndex: index,
      errorMessage: "",

      id: -1,
      name: data.user.contactName,
      phoneNumber: data.user.phoneNo,
      isdCode: data.user.isdCode,
      driversLicenseState: data.licenseInfo.licenseState,
      driversLicenseNumber: data.licenseInfo.licenseNumber,
    }, () => {});
  }

  togglePopup(e, data, index) {
    this.setState({truckerGuid: data.user.userGuid})
    let { updateTruckers, clickedIndex } = this.state;
    if (!updateTruckers) {
      try {
        document.getElementById("untoggled-card" + index).id = "toggled-card";
        this.setData(data, index);
        this.setState({ updateTruckers: true, createUser: false });
      } catch (err) {
        console.log("caught: ", err);
      }
    } else if (updateTruckers) {
      if (clickedIndex === index) {
        try {
          document.getElementById("toggled-card").id = "untoggled-card" + clickedIndex;
          this.resetData();
          this.setState({ updateTruckers: false, clickedIndex: index });
        } catch (err) {
          console.log("caught: ", err);
        }
      }
      if (clickedIndex !== index) {
        try {
          document.getElementById("toggled-card").id = "untoggled-card" + clickedIndex;
          this.setData(data, index);
          this.setState({ updateTruckers: true });
          document.getElementById("untoggled-card" + index).id = "toggled-card";
        } catch (err) {
          console.log("caught: ", err);
        }
      }
    }
  }

  onOpenModal (value, data) {
    this.setState({openModal : value, deleteData : data});
  }

  handleDismiss = () => {
    this.setState({ showMsg: false });
  };

  render(){
    let {listOfTruckers, addTruckers, updateTruckers, errorMessage, name, phoneNumber, driversLicenseState, driversLicenseNumber, stateList, showMsg } = this.state;
    
    return (
      <div className="drayage-cp-container delivery-order-page" style={{ overflow: "scroll" }}>
        <div className='my-customers-header'>
          <div className="header-children">
            <h3 className='my-customers-title'>{`List of Truckers`}</h3>
            <div className="my-customers-top">
              <a className="filter-tab" 
              onClick={() => this.blankToggle()} styles={{"cursor": "pointer"}}
              >
              <img src="/images/add-document.svg" className="add_icon" />
              <span className="filter-title">ADD TRUCKERS</span>
              </a>
            </div>
          </div>
          <div style={{marginLeft : "500px"}}>
            { showMsg === true &&
              <Message
                onDismiss={this.handleDismiss}
                header=""
                content={this.state.message}
                color={this.state.msgColor}
                className="update_popup"
              />
            }
          </div>
            <div className="mycustomers-table my-customers-container narrow-table mt0">
              <table style={{ width: "100%" }} className="">
                <div className={"mb-header actor-list"}>
                  <div className={"mb-title mb-name"}>NAME</div>
                  <div className={"mb-title mb-phonenumber"}>PHONE NUMBER</div>
                  <div className={"mb-title mb-licensestate"}>DRIVER'S LICENSE STATE</div>
                  <div className={"mb-title mb-licensenumber"}>DRIVER'S LICENSE NUMBER</div>
                  {/* <div className={"mb-title mb-licensenumber"}>STATUS</div> */}
                </div>
                {listOfTruckers &&
                  listOfTruckers.length > 0 &&
                  listOfTruckers.map((data, index) => (
                    <React.Fragment>
                      <div className="mb-row" id={"untoggled-card" + index}>
                        <div className="mb-item mb-name" style={{marginLeft:"25px"}} onClick={(e) => this.togglePopup(e, data, index)}>
                        {data.user.contactName}  
                        </div>
                        <div className="mb-item mb-phonenumber" onClick={(e) => this.togglePopup(e, data, index)}>
                        {data.user.phoneNo}  
                        </div>
                        <div className="mb-item mb-licensestate" onClick={(e) => this.togglePopup(e, data, index)}>
                        {data.licenseInfo.licenseState}   
                        </div>
                        <div className="mb-item mb-licensenumber" onClick={(e) => this.togglePopup(e, data, index)}>
                        {data.licenseInfo.licenseNumber}   
                        </div>
                        <div className="mb-item mb-remove">
                        <button onClick={() => this.onOpenModal(true, data)} className={"mb-button"}> REMOVE </button>
                        </div>
                      </div>
                      <div className="divider" />
                    </React.Fragment>
                  ))}
                  <Modal
                    size= "tiny"
                    onClose={() => this.onOpenModal(false)}
                    open={ this.state.openModal}
                  >
                    <Modal.Header>Delete Trucker</Modal.Header>
                    <Modal.Content style={{width: "100%"}}>
                      <p>Are you sure you want to delete this Trucker?</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button className={"mb-button"} onClick={() =>this.setState({openModal: false})}>
                        No
                      </Button>
                      <Button className={"mb-button"} onClick={(e)=> this.onDelete(this.state.deleteData)}>
                        Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>
              </table>
            </div>
            <div className="manage-users-content">
              <br />
              
              <br /> <br /> <br /> <br />
              
              {addTruckers && 
              <AddTruckers 
                errorMessage={errorMessage} 
                toggle={() => this.blankToggle()} 
                onChange={(e) => this.onChange(e)} 
                stateList= {stateList} 
                handleSubmit={(e) => this.handleSubmit(e, "add")} 
                parentState={this.state} 
                onChangeList={this.onChangeList}
                onChangeIsdCode={this.onChangeIsdCode}
              />}
              {updateTruckers && (
                <UpdateTruckers
                  toggleClose={() => this.toggleClose()}
                  onChange={(e) => this.onChange(e)}
                  handleUpdate={(e) => this.onUpdate(e, "update")}
                  errorMessage={errorMessage}
                  // isWhiteLabel={isWhiteLabel}
                  // wlCustomerName={wlCustomerName}
                  stateList= {stateList}
                  onChangeList={this.onChangeList}
                  onChangeIsdCode={this.onChangeIsdCode}
                  name={name}
                  phoneNumber={phoneNumber}
                  driversLicenseState={driversLicenseState}
                  driversLicenseNumber={driversLicenseNumber}
                  parentState={this.state}
                  
                />
              )}
            </div>
            {/* <Confirm header={"Removing Trucker"} content={"Are you sure you would like to remove this Trucker?"} open={confirmOpen} onCancel={this.handleCancel} onConfirm={this.handleConfirm} /> */}
          
        </div>
      </div>
    )
  }
}
