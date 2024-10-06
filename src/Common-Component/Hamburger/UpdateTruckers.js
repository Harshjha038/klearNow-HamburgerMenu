/*************************************************************************
 *
 * KLEAREXPRESS CONFIDENTIAL
 * __________________
 *
 *  Copyright (c) 2018 - 2018 KlearExpress Corporation.
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of KlearExpress Corporation and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to KlearExpress Corporation
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from KlearExpress Corporation.
 */

 import React, { Component } from "react";
 import { Button, Dropdown, Form, Header } from "semantic-ui-react";
 import "../../css/manage_user.css";
 
 class UpdateTruckers extends Component {
   constructor(props) {
     super(props);
     this.state = {
     };
   }
 
   render() {
     const { toggleClose, handleUpdate, onChange, name, phoneNumber, driversLicenseState, driversLicenseNumber, parentState, stateList, onChangeList  } = this.props;
     return (
      <Form className="ua popup-form" onSubmit={handleUpdate}>
        <Header className="" as="h2">
          Update Trukers
        </Header>
        <div className="form-scroller">
          <Form.Field className="create-user-input">
            <input id="name" name="name" placeholder="Name" value={name} required onChange={onChange} />
            {/* <label for="groupName">Name</label> */}
          </Form.Field>
          <Form.Field className="create-user-input">
            <input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} type="number" required onChange={onChange} />
            {/* <label for="shippingLine">Phone Number</label> */}
          </Form.Field>
          <Form.Field className="create-user-input">
            <Dropdown style={{padding: "10px"}} options={stateList} id="driversLicenseState" name="driversLicenseState" placeholder="Driver's License State" value={driversLicenseState} onChange={(e, data)=>{onChangeList("driversLicenseState", data.value)}} />
            {/* <label for="location">Drivers License State</label> */}
          </Form.Field>
          <Form.Field className="create-user-input"> 
            <input id="driversLicenseNumber" name="driversLicenseNumber" placeholder="Driver's License Number" value={driversLicenseNumber} onChange={onChange} />
            {/* <label for="location">Drivers License Number</label> */}
          </Form.Field>
          {/* <Form.Field className="create-user-input"> */}
            {/* <input id="status" name="status" placeholder="Status" onChange={onChange} /> */}
            {/* <label for="location">Status</label> */}
          {/* </Form.Field> */}
          <p className="errorMessage" style={{color: "red", textAlign: "center", fontWeight: "bold"}}>{parentState.errorMessage}</p>
      
        </div>
        <div className="popup-pagination">
          <Button.Group>
            <Button className="ua cancel" onClick={toggleClose} type="submit">
              CANCEL
            </Button>
            <Button disabled={!name || !phoneNumber} className="ua save" type="submit">
              SAVE
            </Button>
          </Button.Group>
        </div>
      </Form>
     );
   }
 }
 
 export default UpdateTruckers;
 
