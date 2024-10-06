import React, { Component } from "react";
import { Button, Dropdown } from "semantic-ui-react";
import _ from "lodash";
import { getDrayagePartnersDetails, editDrayagePartnerServiceArea } from '../../Api/index'
import "./drayagePartner.css";
// import {USMapMidwest} from '../../Images/images';
// import {USMapNortheast} from '../../Images/images';
// import {USMapSoutheast} from '../../Images/images';
// import {USMapSouthwest} from '../../Images/images';
// import {USMapWest} from '../../Images/images';



export default class ServiceArea extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      selectedArea: [],
      loader: false,
      error: [],
    }
  }

  componentDidMount = () => {
    this.setState({selectedArea: this.props.data.serviceAreas && this.props.data.serviceAreas[0].regions})
  }

  validate = () => {
    this.setState({error : []})
    let result = true;
    let errorArr = [];
    if (_.isEmpty(this.state.selectedArea)) {
      result = false;
      errorArr.push({
        key: `area`,
        err: "Please choose service area",
      });
    }
    this.setState({error : errorArr})
    if (errorArr.length > 0) {
      window.scrollTo(0, 0);
    }
    return result;
  };

  onSave = () => {
    if (this.validate()) {
      this.setState({loader: true})
      editDrayagePartnerServiceArea(this.props.data.companyProfile.userGuid, this.state.selectedArea)
        .then((resp) => {
          console.log(resp);
          this.setState({loader: false})
          if (resp.code === 400) {
            console.log("err");
            let error = [{ key: resp.code, err: resp.msg }];
            this.setState({error : error})
            window.scrollTo(0, 0);
          } else {
            this.props.fetchDrayagePartnerData();
            window.scrollTo(0, 0);
          }
        })
        .catch(() => {
          this.setState({loader: false})
          let error = [{ key: 500, err: "Something Went Wrong!" }];
          this.setState({error : error})
          window.scrollTo(0, 0);
        });
    }
  };

  checkValidation = (key) => {
    let lightRed = "rgba(255,153,153, 0.2)";
    let color = "#FFFFFF";
    let findIndex = this.state.error.findIndex((el) => {
      return el.key === key;
    });
    if (findIndex !== -1) {
      color = lightRed;
    }
    return color;
  };

  

  renderDropdown = (width = "100%", heading, multiple = true) => {
    const SERVICE_AREA_OPTIONS = [
      { text: "West", value: "WEST" },
      { text: "Southwest", value: "SOUTHWEST" },
      { text: "Southeast", value: "SOUTHEAST" },
      { text: "Midwest", value: "MIDWEST" },
      { text: "Northeast", value: "NORTHEAST" },
    ];

    return (
      <div
        style={{
          width: width,
        }}
      >
        <div style={{ padding: "2px", paddingLeft: "10px" }}>
          <span className="company-profile-textinput-header">{heading}</span>
        </div>

        <Dropdown
          placeholder={heading}
          scrolling
          multiple={multiple}
          value={this.state.selectedArea}
          style={{
            backgroundColor: this.checkValidation("area"),
            borderWidth: "0px",
            marginLeft: "10px",
            borderRadius: "0px",
            paddingLeft: "0px",
            minWidth: "15%",
            // marginLeft: this.props.data.serviceAreas.length > 0 ? "10px" : "2px",
          }}
          selection
          options={SERVICE_AREA_OPTIONS}
          onChange={(e, data) => {
            this.setState({error : []})
            this.setState({selectedArea : data.value});
          }}
        />
      </div>
    );
  };

 

  render () {
    const lightRed = "rgba(255,153,153, 0.2)";
    const white = "#FFFFFF";

    return (
      <div className="drayage-cp-container" style={{ overflow: "scroll" }}>
        {this.state.error.length > 0 && (
          <div
            style={{
              marginLeft: "10px",
              color: "red",
              height: "35px",
              width: "79%",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
              backgroundColor: lightRed,
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            {this.state.error[0].err || "Something Went Wrong"}
          </div>
        )}
        <div style={{ marginTop: "10px", width: "80%" }}>
          <span
            style={{ fontSize: "15px", fontWeight: "bold", marginLeft: "10px" }}
          >
            Select service area
          </span>

          <div
            className="drayage-conainer-company-profile"
            style={{ marginTop: "10px" }}
          >
            <div
              style={{
                borderBottomWidth: "1px",
                borderStyle: "solid",
                borderColor: "#2e71b5",
                width: "100%",
              }}
            >
              {this.renderDropdown("100%", "SERVICE AREA", true)}
            </div>
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Map data={this.state.selectedArea} />
            </div>
          </div>

          <Button
            loading={this.state.loader}
            style={{
              padding: "12px 40px",
              fontSize: "12px",
              backgroundColor: "#008B8F",
              color: "white",
              borderRadius: "0",
              marginTop: "20px",
              marginLeft: "10px",
            }}
            onClick={this.onSave}
          >
            SAVE
          </Button>
        </div>
      </div>
    );
  }
}

class Map extends Component {

  constructor(props) {
    super(props);
  }
  

  checkOpacity = (region) => {
    let opacity;
    // if (_.isEmpty(this.props.data)) {
      if ( this.props.data && this.props.data.includes(region)) {
        opacity = 1;
      } else {
        opacity = 0.2;
      }
    // } 
    // else {
    //   opacity = 0.2;
    // }
    return opacity;
  };
  render () {
    return (
      <div style={{ position: "relative", width: "483px", height: "304px" }}>
        <img
          src="/images/USMidwest.png"
          style={{ position: "absolute", opacity: this.checkOpacity("MIDWEST") }}
        />
        <img
          src="/images/USNortheast.png"
          style={{ position: "absolute", opacity: this.checkOpacity("NORTHEAST") }}
        />
        <img
          src="/images/USSoutheast.png"
          style={{ position: "absolute", opacity: this.checkOpacity("SOUTHEAST") }}
        />
        <img
          src="/images/USSouthwest.png"
          style={{ position: "absolute", opacity: this.checkOpacity("SOUTHWEST") }}
        />
        <img
          src="/images/USWest.png"
          style={{ position: "absolute", opacity: this.checkOpacity("WEST") }}
        />
      </div>
    );
  }
};