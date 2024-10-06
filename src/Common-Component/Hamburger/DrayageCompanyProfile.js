import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Dropdown,
  Message,
  Dimmer,
  Loader,
  Popup
} from "semantic-ui-react";
import _, { find, get } from "lodash";
import "./drayagePartner.css";
import { Input } from "kx-common-components";
import 'semantic-ui-css/semantic.min.css';

// import { makeValidJson } from "../../util/index";
import { getContainerTypeList, getCountryList, fetchFile, editDrayagePartnerProfile, uploadImageToBucket } from '../../Api/index'
const phoneOptions = {
  WORK: "WORK",
  HOME: "HOME",
  MOBILE: "MOBILE",
};
export default class DrayageCompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dispathcherCodeNum: null,
      
      dispatcherPhoneNum: null,
      isdCode : null,
      
      showCodeMsg:false,
      showPhoneMsg:false,
      loader: false,
      corpName: "",
      image: {
        preview: null,
        file: null,
      },
      entityAddress: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      mailingAddress: {
        addressLine1:
          "",
        addressLine2:
          "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      trucksDrivers: {
        companyTrucks: "",
        drivers: "",
        dot: "",
        scac: ""
      },
      abilityLimitations: {
        containerType: [],
      },
      error: [],
      imgLoading: false,
      countryCodes: [],
      checkBoxOptions: [],

    }

    this.imageRef = React.createRef();
  }
  handleISDUPdate(e) {
    this.setState({ dispathcherCodeNum: e });
  } // Updates phone isd


  componentDidMount = () => {
    this.fetchContainerType();
    this.fetchCountryType();

    this.state.loader === false && this.fetchUrl();
    let dispatcherPhoneNo = get(this.props, "data.companyProfile.dispatcherPhone.phoneNumber","")
    let isd = get(this.props, "data.companyProfile.dispatcherPhone.isd","")
    console.log("componentDidMount >>> ", dispatcherPhoneNo, isd)

    this.setState({
      dispatcherPhoneNum : dispatcherPhoneNo,
      dispathcherCodeNum : isd,
      corpName: this.props.data.companyProfile.name,
      entityAddress: {
        addressLine1: this.props.data.companyProfile.entityAddress.addressLine1,
        addressLine2: this.props.data.companyProfile.entityAddress.addressLine2,
        city: this.props.data.companyProfile.entityAddress.city,
        state: this.props.data.companyProfile.entityAddress.state,
        zip: this.props.data.companyProfile.entityAddress.zip,
        country: this.props.data.companyProfile.entityAddress.country,
      },
      mailingAddress: {
        addressLine1: this.props.data.companyProfile.mailingAddress.addressLine1,
        addressLine2: this.props.data.companyProfile.mailingAddress.addressLine2,
        city: this.props.data.companyProfile.mailingAddress.city,
        state: this.props.data.companyProfile.mailingAddress.state,
        zip: this.props.data.companyProfile.mailingAddress.zip,
        country: this.props.data.companyProfile.mailingAddress.country,
      },
      trucksDrivers: {
        companyTrucks: this.props.data.companyProfile.noOfTrucks,
        drivers: this.props.data.companyProfile.noOfDrivers,
        dot: this.props.data.companyProfile.dotNumber,
        scac: this.props.data.companyProfile.scacCode
      },
      abilityLimitations: {
        containerType: this.props.data.companyProfile.containerType,
      },
    })
  }
  phoneCodeInputHandler = (e) => {
    console.log("phoneCodeInputHandler", e.target)
    console.log("phoneCodeInputHandler", e.target.value, typeof (e.target.value))
    let codeNum = e.target.value

    if ((codeNum.length === 2 || codeNum.length === 3) && !isNaN(codeNum)) {
      this.setState({ dispathcherCodeNum: codeNum,showCodeMsg:false })
    }else if (codeNum.length === 1){
      this.setState({dispathcherCodeNum: codeNum, showCodeMsg:true})
    } else if (codeNum.length === 0){
      this.setState({dispathcherCodeNum: "",showCodeMsg:false})
    }



  }
  phoneNumberInputHandler = (e) => {
    //console.log("phoneNumberInputHandler", e)
    //console.log("phoneNumberInputHandler", e.target.value, typeof (e.target.value))

    let phoneNum = e//e.target.value
    let phoneNumString=e.toString()
    //console.log("phoneNumString",phoneNumString)

    if (phoneNum.length <= 10 && phoneNum.length > 0 && !isNaN(phoneNum)) {
      //if (phoneNum.length <= 10 && phoneNum.length > 0 ) {

      this.setState({ dispatcherPhoneNum: (phoneNum),showPhoneMsg:phoneNumString.length < 10 ? true : false })
    } else if (phoneNumString.length === 0){
      this.setState({ dispatcherPhoneNum: "",showPhoneMsg:false })
    }
    else{
      this.setState({ showPhoneMsg:true })
    }

  }
  handleUpdate(key, e) {
    console.log("key and e for handleUpdate",key,e)
    this.setState({ [key]: e });
} // Updates general inputs

  componentDidUpdate = (prevProps) => {
    if (prevProps.data.companyProfile.logo !== this.props.data.companyProfile.logo) {
      this.fetchUrl();
    }
  }

  fetchUrl = () => {
    if (this.props.data.companyProfile.logo) {
      this.setState({ imgLoading: true });
      fetchFile(this.props.data.companyProfile.bucketName + ":" + this.props.data.companyProfile.logo)
        .then((resp) => {
          this.setState({
            image: {
              ...this.state.image,
              preview: resp.data.eventMessage.urls[0]
            }
          });
          this.setState({ imgLoading: false });
        })
        .catch((err) => {
          this.setState({
            image: {
              preview: null,
              file: null,
            }
          });
          this.setState({ imgLoading: false });
        });
    }
  }

  checkFieldValidation = (key, alternateClr) => {
    let lightRed = "rgba(255,153,153, 0.2)";
    let textInputClr = "#f0f4ff";
    let white = "#FFFFFF";
    let color = alternateClr ? white : textInputClr;
    const resp = this.state.error.find((el) => {
      return el.key === key;
    });
    if (resp) {
      color = lightRed;
    }
    return color;
  };

  handleFieldValidation = (key, text) => {
    if (text.length > 0) {
      let tempArr = [...this.state.error];
      let findIndex = tempArr.findIndex((el) => {
        return el.key === key;
      });
      if (findIndex !== -1) {
        tempArr.splice(findIndex, 1);
        this.setState({ error: tempArr })
      }
    }
  };

  validate = () => {
    this.setState({ error: [] })
    let tempErr = [];
    let validateErr = false;
    if (!this.state.corpName) {
      validateErr = true;
      tempErr.push({
        key: "corpName",
        err: "Please enter a coorporation name",
      });
    }
    if (!this.state.entityAddress.addressLine1) {
      validateErr = true;
      tempErr.push({
        key: "entityAdd1",
        err: "Please enter address line 1 for facility Address",
      });
    }
    if (!this.state.entityAddress.addressLine2) {
      validateErr = true;
      tempErr.push({
        key: "entityAdd2",
        err: "Please enter address line 2 for facility Address",
      });
    }
    if (!this.state.entityAddress.city) {
      validateErr = true;
      tempErr.push({
        key: "entityCity",
        err: "Please enter city for facility Address",
      });
    }
    if (!this.state.entityAddress.state) {
      validateErr = true;
      tempErr.push({
        key: "entityState",
        err: "Please enter state for facility Address",
      });
    }
    if (!this.state.entityAddress.zip) {
      validateErr = true;
      tempErr.push({
        key: "entityZip",
        err: "Please enter zip code for facility Address",
      });
    }
    if (!this.state.entityAddress.country) {
      validateErr = true;
      tempErr.push({
        key: "entityCountry",
        err: "Please enter country for facility Address",
      });
    }
    if (!this.state.mailingAddress.addressLine1) {
      validateErr = true;
      tempErr.push({
        key: "mailingAdd1",
        err: "Please enter address line 1 for mailing address",
      });
    }
    if (!this.state.mailingAddress.addressLine2) {
      validateErr = true;
      tempErr.push({
        key: "mailingAdd2",
        err: "Please enter address line 2 for mailing address",
      });
    }
    if (!this.state.mailingAddress.city) {
      validateErr = true;
      tempErr.push({
        key: "mailingCity",
        err: "Please enter city for mailing address",
      });
    }
    if (!this.state.mailingAddress.state) {
      validateErr = true;
      tempErr.push({
        key: "mailingState",
        err: "Please enter state for mailing address",
      });
    }
    if (!this.state.mailingAddress.zip) {
      validateErr = true;
      tempErr.push({
        key: "mailingZip",
        err: "Please enter zip code for mailing address",
      });
    }
    if (!this.state.mailingAddress.country) {
      validateErr = true;
      tempErr.push({
        key: "mailingCountry",
        err: "Please enter country for mailing address",
      });
    }
    if (!this.state.trucksDrivers.companyTrucks) {
      validateErr = true;
      tempErr.push({
        key: "companyTrucks",
        err: "Please enter total company owned trucks",
      });
    }
    if (!this.state.trucksDrivers.drivers) {
      validateErr = true;
      tempErr.push({
        key: "companyDrivers",
        err: "Please enter total drivers",
      });
    }
    this.setState({ error: tempErr })
    if (tempErr.length > 0) {
      window.scrollTo(0, 0);
    }
    return validateErr;
  };

  callApi = (logo) => {
    this.setState({ loader: true })
    editDrayagePartnerProfile(this.props.data.companyProfile.userGuid, this.state.corpName, logo, this.state.entityAddress.addressLine1, this.state.entityAddress.addressLine2, this.state.entityAddress.city, this.state.entityAddress.state, this.state.entityAddress.zip, this.state.entityAddress.country, this.state.mailingAddress.addressLine1, this.state.mailingAddress.addressLine2, this.state.mailingAddress.city, this.state.mailingAddress.state, this.state.mailingAddress.zip, this.state.mailingAddress.country, this.state.trucksDrivers.companyTrucks, this.state.trucksDrivers.drivers, this.state.trucksDrivers.dot, this.state.trucksDrivers.scac, this.state.abilityLimitations.containerType,
      this.state.dispathcherCodeNum, this.state.dispatcherPhoneNum)
      .then((resp) => {
        this.setState({ loader: false })
        if (resp.code === 400) {
          console.log("err");
          let error = [{ key: resp.code, err: resp.msg }];
          this.setState({ error: error })
        } else {
          if (this.props.data.companyProfile.logo) this.setState({ image: { preview: "", file: "" } });
          // if (this.state.dispathcherCodeNum.length < 2 ||this.state.dispathcherCodeNum.length>3) {
          //   this.setState({showCodeMsg:true})
          // }
          if (this.state.dispatcherPhoneNum.length < 10 || this.state.dispatcherPhoneNum.length > 10) {
            this.setState({showPhoneMsg:true})
          }
          // if (this.state.dispathcherCodeNum.length <= 3 && this.state.dispatcherPhoneNum.length === 10) {
            let dispatcherPhone = {
              isd: parseInt(this.state.dispathcherCodeNum),
              phoneNumber: parseInt(this.state.dispatcherPhoneNum)

            }
          //}
          this.props.fetchDrayagePartnerData();

        }
        window.scrollTo(0, 0);
      })
      .catch(() => {
        this.setState({ loader: false })
        let error = [{ key: 500, err: "Something Went Wrong!" }];
        this.setState({ error: error })
        window.scrollTo(0, 0);
      });
  };

  onSave = () => {
    if (!this.validate()) {
      if (this.state.image.file) {
        this.setState({ loader: true })
        let formData = new FormData();
        let fileName = `${Date.now()}_${this.state.image.file.name}`;
        formData.append("files", this.state.image.file, fileName);

        // let bucketName = JSON.parse(makeValidJson());
        uploadImageToBucket(formData, window._env_.DRAYAGE_PARTNER_MEDIA_BUCKET)
          .then((resp) => {
            console.log("image", resp)
            let str = resp.data.msg;
            let firstIndex = str.indexOf("[");
            let lastIndex = str.indexOf("]");
            const finalString = str.substring(firstIndex + 1, lastIndex);
            this.callApi(finalString);
            this.setState({ error: [], loader: false })
          })
          .catch((err) => {
            console.log(err);
            this.setState({ loader: false })
            this.setState({ error: [{ err: "Failed to Upload Image" }] });
            window.scrollTo(0, 0);
          });
      } else {
        this.callApi(this.props.data.companyProfile.logo || "");
      }

    }

  };

  fetchContainerType = (e) => {
    getContainerTypeList().then((response) => {
      let res = response.data.eventMessage;
      let containerTypes = res.containerType.map((item, index) => {
        return {
          text: item,
          value: item,
        };
      });
      this.setState({ checkBoxOptions: containerTypes })
    }).catch((err) => {
      console.log(err)
    });
  }

  fetchCountryType = (e) => {
    getCountryList().then((response) => {
      let res = response.data.eventMessage;
      let countryList = res.itemList.map((item, index) => {
        return {
          text: item.description.toUpperCase(),
          value: item.id.toUpperCase(),
        };
      });
      this.setState({ countryCodes: countryList })
    }).catch((err) => {
      console.log(err)
    });
  }

  renderEntityAndMailingAddress = (title, isEntityAddress) => {
    return (
      <div style={{ marginTop: "20px", width: "75%" }}>
        <span
          style={{ fontSize: "15px", fontWeight: "bold", marginLeft: "10px" }}
        >
          {title}
        </span>
        <div
          className="drayage-conainer-company-profile"
          style={{ marginTop: "5px", padding: "5px" }}
        >
          <span className="company-profile-textinput-header">ADDRESS</span>
          <div className="company-profile-flex-row">
            <div className="company-profile-text-input-conatiner">
              <Input
                className="company-profile-text-input"
                name="addressLine1"
                style={{
                  backgroundColor: this.checkFieldValidation(
                    isEntityAddress ? "entityAdd1" : "mailingAdd1"
                  ),
                }}
                value={
                  isEntityAddress
                    ? this.state.entityAddress.addressLine1
                    : this.state.mailingAddress.addressLine1
                }
                onChange={(e) => {
                  if (isEntityAddress) {
                    this.setState({
                      entityAddress: {
                        ...this.state.entityAddress,
                        addressLine1: e,
                      }
                    });
                    this.handleFieldValidation("entityAdd1", e);
                  } else {
                    this.setState({
                      mailingAddress: {
                        ...this.state.mailingAddress,
                        addressLine1: e,
                      }
                    });
                    this.handleFieldValidation("mailingAdd1", e);
                  }
                }}
              />

              <span
                style={{
                  color: "#606060",
                  fontSize: "8px",
                  fontWeight: "600",
                  alignSelf: "center",
                }}
              >
                ADDRESS LINE 1
              </span>
            </div>

            <div className="company-profile-text-input-conatiner">
              <Input
                className="company-profile-text-input"
                name="addressLine2"
                style={{
                  backgroundColor: this.checkFieldValidation(
                    isEntityAddress ? "entityAdd2" : "mailingAdd2"
                  ),
                }}
                value={
                  isEntityAddress
                    ? this.state.entityAddress.addressLine2
                    : this.state.mailingAddress.addressLine2
                }
                onChange={(e) => {
                  if (isEntityAddress) {
                    this.setState({
                      entityAddress: {
                        ...this.state.entityAddress,
                        addressLine2: e,
                      }
                    });
                    this.handleFieldValidation("entityAdd2", e);
                  } else {
                    this.setState({
                      mailingAddress: {
                        ...this.state.mailingAddress,
                        addressLine2: e,
                      }
                    });
                    this.handleFieldValidation("mailingAdd2", e);
                  }
                }}
              />

              <span
                style={{
                  color: "#606060",
                  fontSize: "8px",
                  fontWeight: "600",
                  alignSelf: "center",
                }}
              >
                ADDRESS LINE 2
              </span>
            </div>
          </div>

          <div
            className="company-profile-flex-row"
            style={{ marginTop: "5px" }}
          >
            <div
              className="company-profile-text-input-conatiner"
              style={{ width: "32%" }}
            >
              <Input
                className="company-profile-text-input"
                name="city"
                style={{
                  backgroundColor: this.checkFieldValidation(
                    isEntityAddress ? "entityCity" : "mailingCity"
                  ),
                }}
                value={
                  isEntityAddress ? this.state.entityAddress.city : this.state.mailingAddress.city
                }
                charsOnly
                onChange={(e) => {
                  if (isEntityAddress) {
                    this.setState({
                      entityAddress: {
                        ...this.state.entityAddress,
                        city: e,
                      }
                    });
                    this.handleFieldValidation("entityCity", e);
                  } else {
                    this.setState({
                      mailingAddress: {
                        ...this.state.mailingAddress,
                        city: e,
                      }
                    });
                    this.handleFieldValidation("mailingCity", e);
                  }
                }}
              />

              <span
                style={{
                  color: "#606060",
                  fontSize: "8px",
                  fontWeight: "600",
                  alignSelf: "center",
                }}
              >
                CITY
              </span>
            </div>

            <div
              className="company-profile-text-input-conatiner"
              style={{ width: "18%" }}
            >
              <Input
                className="company-profile-text-input"
                name="state"
                style={{
                  backgroundColor: this.checkFieldValidation(
                    isEntityAddress ? "entityState" : "mailingState"
                  ),
                }}
                value={
                  isEntityAddress ? this.state.entityAddress.state : this.state.mailingAddress.state
                }
                charsOnly
                onChange={(e) => {
                  if (isEntityAddress) {
                    this.setState({
                      entityAddress: {
                        ...this.state.entityAddress,
                        state: e,
                      }
                    });
                    this.handleFieldValidation("entityState", e);
                  } else {
                    this.setState({
                      mailingAddress: {
                        ...this.state.mailingAddress,
                        state: e,
                      }
                    });
                    this.handleFieldValidation("mailingState", e);
                  }
                }}
              />

              <span
                style={{
                  color: "#606060",
                  fontSize: "8px",
                  fontWeight: "600",
                  alignSelf: "center",
                }}
              >
                STATE/PROVINCE
              </span>
            </div>

            <div
              className="company-profile-text-input-conatiner"
              style={{ width: "18%" }}
            >
              <Input
                className="company-profile-text-input"
                name="zip"
                style={{
                  backgroundColor: this.checkFieldValidation(
                    isEntityAddress ? "entityZip" : "mailingZip"
                  ),
                }}
                numbersOnly
                value={isEntityAddress ? this.state.entityAddress.zip : this.state.mailingAddress.zip}
                onChange={(e) => {
                  if (isEntityAddress) {
                    this.setState({
                      entityAddress: {
                        ...this.state.entityAddress,
                        zip: e,
                      }
                    });
                    this.handleFieldValidation("entityZip", e);
                  } else {
                    this.setState({
                      mailingAddress: {
                        ...this.state.mailingAddress,
                        zip: e,
                      }
                    });
                    this.handleFieldValidation("mailingZip", e);
                  }
                }}
              />

              <span
                style={{
                  color: "#606060",
                  fontSize: "8px",
                  fontWeight: "600",
                  alignSelf: "center",
                }}
              >
                ZIP/POSTAL CODE
              </span>
            </div>

            <div
              className="company-profile-text-input-conatiner"
              style={{ width: "28%" }}
            >
              <Dropdown
                search
                name="country"
                style={{
                  position: "relative",
                  padding: "0px",
                  minWidth: "auto",
                  minHeight: "auto",
                  backgroundColor: "rgb(240, 244, 255)",
                  borderRadius: "0px",
                  height: "19px",
                  marginTop: "2px",
                  padding: "2px",
                  fontWeight: "600",
                  border: "0px",
                }}
                value={
                  isEntityAddress
                    ? this.state.entityAddress.country
                    : this.state.mailingAddress.country
                }
                icon={<Icon />}
                selection
                options={this.state.countryCodes}
                onChange={(e, data) => {
                  if (isEntityAddress) {
                    this.setState({
                      entityAddress: {
                        ...this.state.entityAddress,
                        country: data.value,
                      }
                    });
                    this.handleFieldValidation("entityCountry", data.value);
                  } else {
                    this.setState({
                      mailingAddress: {
                        ...this.state.mailingAddress,
                        country: data.value,
                      }
                    });
                    this.handleFieldValidation("mailingCountry", data.value);
                  }
                }}
              />

              <span
                style={{
                  color: "#606060",
                  fontSize: "8px",
                  fontWeight: "600",
                  alignSelf: "center",
                }}
              >
                COUNTRY
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const lightRed = "rgba(255,153,153, 0.2)";
    const textInputClr = "#f0f4ff";
    const white = "#FFFFFF";
    let showText=""
    let showPhoneText=""
    if(this.state.showCodeMsg){
      showText="Phone Code should be 2 - 3 digits     "
    }
    if(this.state.showPhoneMsg){
      showPhoneText="Phone number must be of 10 digits"
    }

    

    return (
      <div className="drayage-cp-container" style={{ overflow: "scroll" }}>
        {this.state.error.length > 0 && (
          <div
            style={{
              marginLeft: "10px",
              color: "red",
              height: "35px",
              width: "74%",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
              backgroundColor: lightRed,
              marginTop: "5px",
              marginBottom: "15px",
            }}
          >
            {this.state.error[0].err || "Something Went Wrong"}
          </div>
        )}

        {/* CORPORATION NAME AND IMAGE  */}
        <div
          className="drayage-conainer-company-profile"
          style={{ marginTop: "10px", width: "74%" }}
        >
          <div
            className="corp-name-input-container"
            style={{
              width: "100%",
              borderBottomWidth: "1px",
              borderColor: "#2e71b5",
              // borderStyle: "solid",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#606060",
                padding: "5px",
              }}
            >
              CORPORATION NAME
            </span>
            <br />
            <Input
              className="input-company-profile-corpName"
              style={{
                backgroundColor: this.checkFieldValidation("corpName", true),
              }}
              name="corpname"
              value={this.state.corpName}
              hasError={true}
              error={"Error"}
              onChange={(e) => {
                this.handleFieldValidation("corpName", e);
                this.setState({ CorpName: e });
              }}
            />
          </div>

          <div
            className="company-profile-image"
            style={{
              backgroundColor: this.checkFieldValidation("image"),
            }}
          >
            {this.state.imgLoading && (
              <Loader active={true} inline={"centered"} size={"small"} />
            )}
            {this.state.image.preview ? (
              <img
                style={{ height: "100%", width: "100%" }}
                src={this.state.image.preview}
              />
            ) : null}
          </div>

          <div className={"company-profile-button"}>
            <Button
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#008B8F",
                border: "1px solid #008B8F",
                backgroundColor: "#FFFFFF",
                borderRadius: "3px",
                color: "#008B8F",
              }}
              onClick={() => this.imageRef.current.click()}
            >
              UPLOAD
            </Button>
            <input
              style={{ display: "none" }}
              type={"file"}
              accept={"image/*"}
              ref={this.imageRef}
              onChange={(event) => {
                // console.log(event.target.files[0], "event");
                let file = event.target.files[0];
                this.setState({
                  image: {
                    preview: URL.createObjectURL(file),
                    file: file,
                  }
                });
                let tempArr = [...this.state.error];
                let findIndex = tempArr.findIndex((el) => {
                  return el.key === "image";
                });
                if (findIndex !== -1) {
                  tempArr.splice(findIndex, 1);
                  this.setState({ error: tempArr });
                }
              }}
            />
          </div>
        </div>
        {/* CORPORATION NAME AND IMAGE  */}

        {this.renderEntityAndMailingAddress("Facility Address test", true)}

        {this.renderEntityAndMailingAddress("Mailing Address", false)}

        {/* TRUCKS AND DRIVERS */}
        <div style={{ marginTop: "20px", width: "75%" }}>


          <span
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            Fleet Info
          </span>
          <div
            className="drayage-conainer-company-profile"
            style={{ marginTop: "5px" }}
          >
            <div className="company-profile-flex-row">
              <div
                style={{
                  width: "33.3%",
                  borderRightWidth: "1px",
                  borderColor: "#2e71b5",
                  // borderStyle: "solid",
                  padding: "5px",
                }}
              >
                <div>
                  <span className="company-profile-textinput-header">
                    COMPANY OWNED TRUCKS
                  </span>
                </div>

                <Input
                  className="company-profile-text-input-trucks-drivers"
                  name="companyTrucks"
                  numbersOnly
                  style={{
                    backgroundColor: this.checkFieldValidation("companyTrucks", true),
                  }}
                  value={this.state.trucksDrivers.companyTrucks}
                  onChange={(e) => {
                    this.setState({
                      trucksDrivers: {
                        ...this.state.trucksDrivers,
                        companyTrucks: e,
                      }
                    });
                    this.handleFieldValidation("companyTrucks", e);
                  }}
                />
              </div>

              <div
                style={{
                  width: "33.3%",
                  borderRightWidth: "1px",
                  borderColor: "#2e71b5",
                  // borderStyle: "solid",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>
                  <span className="company-profile-textinput-header">
                    DRIVERS
                  </span>
                </div>

                <Input
                  className="company-profile-text-input-trucks-drivers"
                  name="copmanyDrivers"
                  numbersOnly
                  style={{
                    backgroundColor: this.checkFieldValidation("companyDrivers", true),
                  }}
                  value={this.state.trucksDrivers.drivers}
                  onChange={(e) => {
                    this.setState({
                      trucksDrivers: {
                        ...this.state.trucksDrivers,
                        drivers: e,
                      }
                    });
                    this.handleFieldValidation("companyDrivers", e);
                  }}
                />
              </div>

              <div
                style={{
                  width: "33.3%",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>
                  <span className="company-profile-textinput-header">
                    DOT NUMBER
                  </span>
                </div>

                <Input
                  className="company-profile-text-input-trucks-drivers"
                  name="dotNo"
                  value={this.state.trucksDrivers.dot}
                  onChange={(e) => {
                    this.setState({
                      trucksDrivers: {
                        ...this.state.trucksDrivers,
                        dot: e,
                      }
                    });
                  }}
                />
              </div>

              <div
                style={{
                  width: "33.3%",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>
                  <span className="company-profile-textinput-header">
                    SCAC CODE
                  </span>
                </div>

                <Input
                  className="company-profile-text-input-trucks-drivers"
                  name="scac"
                  charsOnly
                  maxLength="4"
                  value={this.state.trucksDrivers.scac}
                  onChange={(e) => {
                    this.setState({
                      trucksDrivers: {
                        ...this.state.trucksDrivers,
                        scac: e,
                      }
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* TRUCKS AND DRIVERS */}

        {/* ABILITY AND LIMITATIONS */}
        <div style={{ marginTop: "20px", width: "75%" }}>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            Drayage ability
          </span>
          <div
            className="drayage-conainer-company-profile"
            style={{ marginTop: "5px" }}
          >
            <div className="company-profile-flex-row">
              <div
                style={{
                  width: "100%",
                  padding: "5px",
                }}
              >
                <span className="company-profile-textinput-header">
                  CONTAINER TYPE
                </span>

                <div
                  style={{
                    width: "100%",
                    marginBottom: "3px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {this.state.checkBoxOptions.map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          width: "30%",
                          marginTop: "10px",
                          backgroundColor: "#f0f4ff",
                          paddingTop: "3px",
                          paddingBottom: "3px",
                          paddingLeft: "5px",
                          marginLeft: index % 3 === 0 ? 0 : "8px",
                        }}
                      >
                        <div
                          style={{
                            height: "15px",
                            width: "15px",
                            borderWidth: "1px",
                            // borderStyle: "solid",
                            borderColor: "#008B8F",
                            backgroundColor:
                              this.state.abilityLimitations.containerType && this.state.abilityLimitations.containerType.includes(
                                item.value
                              )
                                ? "#008B8F"
                                : "#FFFFFF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={() => {
                            let array = [...this.state.abilityLimitations.containerType];
                            let findIndex = array.findIndex(
                              (el) => el === item.value
                            );
                            if (findIndex === -1) {
                              array.push(item.value);
                            } else {
                              array.splice(findIndex, 1);
                            }
                            console.log(array);
                            this.setState({
                              abilityLimitations: {
                                containerType: array,
                              }
                            });
                          }}
                        >
                          <span style={{ fontSize: "12px", color: "#FFFFFF" }}>
                            {this.state.abilityLimitations.containerType && this.state.abilityLimitations.containerType.includes(item.value)
                              ? "✓"
                              : ""}
                          </span>
                        </div>

                        <span
                          style={{
                            color: "#000000",
                            fontWeight: "bold",
                            fontSize: "12px",
                            marginLeft: "10px",
                          }}
                        >
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABILITY AND LIMITATIONS */}
        <div style={{ marginTop: "20px", width: "75%" }}>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            Dispatcher Phone Number
          </span>
          </div>
        <div style={{ height: "60px", display: "flex", flexDirection: "row", width: "600px", justifyContent: "space-between", padding: "8px", marginTop: "10px", }} className="drayage-conainer-company-profile">
          <div style={{ display: "flex", flexDirection: "column", }}>
            {/* <div style={{ color: "#606060",fontWeight: "600",fontSize:"12px" }}>CODE</div> */}

            
            {/* <Input style={{ backgroundColor: "rgb(240, 244, 255)",width:"60px" }}  handleISDUPdate={(e) => this.handleISDUPdate(e)} value={this.state.dispathcherCodeNum} phone rounded /> */}
            {/* <div><input className="company-profile-text-input" style={{ backgroundColor: "rgb(240, 244, 255)" }} type="text" onChange={(e) => { this.phoneCodeInputHandler(e) }} value={this.state.dispathcherCodeNum} /></div> */}
            <div class="form-column profile-second-row">
                  <div className="phone-wrapper">
                      <Input value={this.state.dispatcherPhoneNum} label={"Phone Number"} onChange={(e) => { this.phoneNumberInputHandler(e) }} handleISDUPdate={(e) => this.handleISDUPdate(e)} isdCode={this.state.dispathcherCodeNum} phone rounded />
                  </div>
            </div>

          </div>
          {/* <div style={{ display: "flex", flexDirection: "column", }}>
            <div style={{ color: "#606060",fontWeight: "600",fontSize:"12px" }}
    
    >PHONE NUMBER</div>
            <div><input className="company-profile-text-input" style={{ backgroundColor: "rgb(240, 244, 255)" }} type="text" onChange={(e) => { this.phoneNumberInputHandler(e) }} value={this.state.dispatcherPhoneNum} /> </div>
          </div> */}

        </div>
        {
          showText.length>0 &&
        <div style={{marginTop:"10px", color:"red",marginLeft:"10px",fontSize:"14px",fontWeight:"700",paddingLeft:"10px"}}>{showText}</div>
        }
        {showPhoneText.length>0 &&
        <div style={{marginTop:"10px", color:"red",marginLeft:"10px",fontSize:"14px",fontWeight:"700",paddingLeft:"10px"}}>{showPhoneText}</div>
        
        }
       
        

          

        
       

        <Button
          loading={this.state.loader}
          type="submit"
          style={{
            padding: "12px 40px",
            marginLeft: "10px",
            marginTop: "20px",
            fontSize: "12px",
            backgroundColor: "#008B8F",
            color: "white",
            borderRadius: "0",
            marginBottom: "10px",
          }}
          onClick={() => {
            this.onSave();
          }}
        >
          SAVE
        </Button>


      </div>
    );
  }

}

class Icon extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "4px",
          right: "5px",
          height: "6px",
          width: "6px",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: "0px 2px 2px 0px",
          transform: "rotate(45deg)",
        }}
      ></div>
    );
  }
};
