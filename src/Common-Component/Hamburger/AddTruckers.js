 import React, { Component } from "react";
 import { Button, Dropdown, Form, Header, Select } from "semantic-ui-react";
 import "../../css/manage_user.css";

 const isdOptions = [
  { key: '+91', text: '+91', value: '+91' },
  { key: '+1', text: '+1', value: '+1' },
]
 
 class AddTruckers extends Component {
   constructor(props) {
     super(props);
     this.state = {
       status: true,
       
     };
   }
 
   onChangeHandler = () => {
     this.setState({
       status: !this.state.status
     });
   };
 
   handleChange = (name) => {
     this.setState({ [name]: !this.state[name] });
   };
 
   render() {
     const { toggle, onChange, onChangeIsdCode, stateList, handleSubmit, errorMessage, parentState, onChangeList } = this.props;
 
 
     return (
      <Form className="ua popup-form" onSubmit={handleSubmit}>
        <Header className="" as="h2">
          Add a New Trucker
        </Header>
        <div className="form-scroller">
          <Form.Field className="create-user-input">
            <input id="name" name="name" placeholder="Name" required onChange={onChange} />
            {/* <label for="groupName">Name</label> */}
          </Form.Field>
          <Form.Field className="create-user-input">
            <Dropdown style={{padding: "10px"}} options={isdOptions} id="driversLicenseState" name="isdCode" placeholder="ISD Codes" onChange={(e, data)=>{onChangeIsdCode("isdCode", data.value)}} />
            {/* <label for="location">Drivers License State</label> */}
          </Form.Field>
          <Form.Field className="create-user-input"> 
            <input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" type="number" required onChange={onChange} />
            {/* <label for="shippingLine">Phone Number</label> */}
          </Form.Field>
          <Form.Field className="create-user-input">
            <Dropdown style={{padding: "10px"}} options={stateList} id="driversLicenseState" name="driversLicenseState" placeholder="Driver's License State" onChange={(e, data)=>{onChangeList("driversLicenseState", data.value)}} />
            {/* <label for="location">Drivers License State</label> */}
          </Form.Field>
          <Form.Field className="create-user-input">
            <input id="driversLicenseNumber" name="driversLicenseNumber" placeholder="Driver's License Number" onChange={onChange} />
            {/* <label for="location">Drivers License Number</label> */}
          </Form.Field>
          {/* <Form.Field className="create-user-input"> */}
            {/* <input id="status" name="status" placeholder="Status" onChange={onChange} /> */}
            {/* <label for="location">Status</label> */}
          {/* </Form.Field> */}
          {errorMessage !== "" && 
          <p className="errorMessage" style={{color: "red", textAlign: "center", fontWeight: "bold"}}>{parentState.errorMessage}</p>}
        </div>
        
        <div className="popup-pagination">
          <Button.Group>
            <Button className="ua cancel" onClick={toggle}  type="submit">
              CANCEL
            </Button>
            <Button disabled={!parentState.name || !parentState.phoneNumber} className="ua save" type="submit">
              SAVE
            </Button>
          </Button.Group>
        </div>
      </Form>
     );
   }
 }
 
 export default AddTruckers;
 
