import React, { Component } from "react";
import { Dropdown, Button, Loader } from "semantic-ui-react";
import _ from "lodash";
import { Input } from "kx-common-components";
import { Document, Page, pdfjs, Image } from "react-pdf";
import { fetchFileLegal, editDrayagePartnerPricing, editDrayagePartnerPricingDoc, uploadImageToBucket, getPricingDropdown } from "../../Api";
// import { makeValidJson } from "../../util/index";
import "./drayagePartner.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const lightRed = "rgba(255,153,153, 0.2)";
const white = "#FFFFFF";
const unitMeasurement = [
  { text: "PER DAY", value: "PER DAY" },
  { text: "PER UNIT", value: "PER UNIT" },
  { text: "PER HOUR", value: "PER HOUR" },
  { text: "PER STATE", value: "PER STATE" },
  { text: "APMT", value: "APMT" },
];

export default class Pricing extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      pricingItems: [],
      error: [],
      loading: false,
      loading2: false,
      chargeList: [],
    }
    this.imageRef = React.createRef();
  }
  
  componentDidMount = () => {
    this.fetchPricingDropdown();
  }
  
  fetchPricingDropdown= () => {
    this.setState({loading2: true})
    let list = [];
    getPricingDropdown()
    .then((resp) => {
      let details = [...resp.data.eventMessage.drayageAdditionalCharges];
      details.map((item, index) => {
        list.push({ text: item.chargeName, value: item.glCode });
      });
      this.setState({chargeList : list})
      this.configureArray(resp.data.eventMessage.drayageStandardCharges);
    })
    .catch((err) => {});
  }

  configureArray = (input) => {
    let items = [];
    let pricing = [...(this.props.data.pricing.pricingItems || [])];
    input.map((item, index) => {
      let findIndex = pricing.findIndex((obj) => {
        return obj.chargeName === item.chargeName;
      });
      let obj = {
        chargeName: item.chargeName,
        unitPrice: findIndex === -1 ? "" : pricing[findIndex].unitPrice,
        note: findIndex === -1 ? "" : pricing[findIndex].note,
        unitMeasurement:
          findIndex === -1 ? "" : pricing[findIndex].unitMeasurement,
        glCode: item.glCode,
        flag: false,
      };
      items.push(obj);
      if (findIndex !== -1) {
        pricing.splice(findIndex, 1);
      }
    });
    this.setState({pricingItems: [...items, ...pricing] , loading2 : false})
  };

  handleChangeText = (key, data, index) => {
    let inputs = [...this.state.pricingItems];
    inputs[index][key] = data;
    this.setState({pricingItems : inputs})
  };

  handleAddContactPerson = () => {
    this.setState({pricingItems :[
      ...this.state.pricingItems,
      {
        unitPrice: "",
        unitMeasurement: "",
        note: "",
        chargeName: "",
        glCode: "",
        flag: true,
      },
    ]});
  };

  handleAddDocument = () => {
    return this.imageRef.current.click();
  };

  checkValidation = (key) => {
    let color = white;
    let findIndex = this.state.error.findIndex((el) => {
      return el.key === key;
    });
    if (findIndex !== -1) {
      color = lightRed;
    }
    return color;
  };

  handleFieldValidation = (key, text) => {
    let str = text;
    if (Number.isInteger(text)) {
      str = text.toString();
    }
    if (str.length > 0) {
      let tempArr = [...this.state.error];
      let findIndex = tempArr.findIndex((el) => {
        return el.key === key;
      });
      if (findIndex !== -1) {
        tempArr.splice(findIndex, 1);
        this.setState({error : tempArr})
      }
    }
  };

  validate = () => {
    this.setState({error : []})
    let validateErr = false;
    let tempErr = [];
    this.state.pricingItems.map((item, index) => {
      if (item.flag) {
        if (item.glCode === "") {
          validateErr = true;
          tempErr.push({
            key: `chargeName_row_${index}`,
            err: "Please enter all the required details",
          });
        }
        if (item.unitPrice === "") {
          validateErr = true;
          tempErr.push({
            key: `unitPrice_row_${index}`,
            err: "Please enter all the required details",
          });
        }
        if (item.unitMeasurement === "") {
          validateErr = true;
          tempErr.push({
            key: `unitMeasurement_row_${index}`,
            err: "Please enter all the required detailst",
          });
        }
      }
      if (item.unitPrice && !item.unitMeasurement) {
        validateErr = true;
        tempErr.push({
          key: `unitMeasurement_row_${index}`,
          err: "Please enter all the required detailst",
        });
      }
    });
    this.setState({error : tempErr})
    if (tempErr.length > 0) {
      window.scrollTo(0, 0);
    }
    return validateErr;
  };

  callApi = (finalArr) => {
    this.setState({loading : true})
    editDrayagePartnerPricing(this.props.data.companyProfile.userGuid, finalArr, this.props.data.pricing.pricingListDocument)
      .then((resp) => {
        this.setState({loading : false})
        if (resp.code === 400) {
          let error = [{ key: resp.code, err: resp.msg }];
          this.setState({error : error})
          window.scrollTo(0, 0);
        } else {
          this.props.fetchDrayagePartnerData();
          window.scrollTo(0, 0);
        }
      })
      .catch(() => {
        this.setState({loading : false})
        let error = [{ key: 500, err: "Something Went Wrong!" }];
        this.setState({error : error})
        window.scrollTo(0, 0);
      });
  };

  callApiDocList = (finalString) => {
    this.setState({loading : true})
    editDrayagePartnerPricingDoc(this.props.data.companyProfile.userGuid, finalString)
      .then((resp) => {
        console.log("doc", resp)
        this.setState({loading : false})
        if (resp.data && resp.data.code === 400) {
          let error = [{ key: resp.data && resp.data.code, err: resp.data && resp.data.msg }];
          setError(error);
          window.scrollTo(0, 0);
        } else {
          this.props.fetchDrayagePartnerData();
          window.scrollTo(0, 0);
        }
      })
      .catch(() => {
        this.setState({loading : false})
        let error = [{ key: 500, err: "Something Went Wrong!" }];
        this.setState({error : error})
        window.scrollTo(0, 0);
      });
  };

  getChargeName = (glCode, flag) => {
    if (flag) {
      let resp =
        this.state.chargeList[
          this.state.chargeList.findIndex((obj) => {
            return obj.value === glCode;
          })
        ].text;
      return resp;
    } else {
      return undefined;
    }
  };

  onSave = () => {
    if (!this.validate()) {
      let finalArr = [];
      this.state.pricingItems.map((item, index) => {
        if (item.unitPrice && item.unitMeasurement) {
          let obj = {
            ...item,
            chargeName:
              this.getChargeName(item.glCode, item.flag) || item.chargeName,
          };
          delete obj["flag"];
          finalArr.push(obj);
        }
      });
      this.callApi(finalArr);
    }
  };

  getDynamicDropDown = () => {
    // let response = [];
    // this.state.chargeList.map((item, index) => {
    //   let findIndex = this.state.pricingItems.findIndex((obj) => {
    //     return obj.glCode === item.value;
    //   });
    //   if (!findIndex || findIndex === -1) {
    //     response.push(item);
    //   }
    // });
    // return response;
    return this.state.chargeList;
  };

  Icon = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "3px",
          right: "5px",
          height: "8px",
          width: "8px",
          borderStyle: "solid",
          borderColor: "#04ADB1",
          borderWidth: "0px 2px 2px 0px",
          transform: "rotate(45deg)",
        }}
      ></div>
    );
  };

  renderDropdown = (
    value,
    key,
    data,
    handleChange,
    unit,
    width = "100px"
  ) => {
    return (
      <div className="pricing-dropdown-container" style={{ width: width }}>
        <Dropdown
          placeholder={unit}
          value={value}
          className="pricing-dropdown"
          icon={this.Icon}
          selection
          style={{
            color: "#000000",
            backgroundColor: this.checkValidation(key),
            borderWidth: unit === "Charge Name" ? "0px" : "1px",
          }}
          options={data}
          onChange={(e, data) => {
            this.handleFieldValidation(key, data.value);
            handleChange(data.value);
          }}
        />
      </div>
    );
  };

  renderButton = (title, handleClick, customStyle = {}) => {
    return (
      <div style={{ ...customStyle }}>
        <button
          className="contact-detail-button"
          style={{ backgroundColor: "#FFFFFF" }}
          onClick={handleClick}
        >
          <span
            style={{
              color: "#1765AE",
              fontSize: "14px",
              marginLeft: "10px",
            }}
          >
            {title}
          </span>
        </button>
      </div>
    );
  };

  renderInput = (
    divStyle,
    inputStyle,
    name,
    value,
    placeholder,
    key,
    handleChange
  ) => {
    return (
      <div style={divStyle}>
        {name === "unitPrice" && value.length > 0 && (
          <span
            style={{
              position: "absolute",
              left: value.length > 6 ? "3px" : "auto",
              right:
                value.length <= 6 ? `calc(${value.length}ch + 10px)` : "auto",
              fontWeight: "600",
              zIndex: 1,
              transform: "translateY(-50%)",
              top: "50%",
            }}
          >
            $
          </span>
        )}
        <Input
          className="pricing-text-input"
          placeholder={placeholder}
          name={name}
          numbersOnly={name === "unitPrice" ? true : false}
          value={value}
          inputStyle={{
            ...inputStyle,
            ...{
              backgroundColor: name === "note" ? white : this.checkValidation(key),
              textAlign: name === "unitPrice" ? "right" : "initial",
              border: "2px #286084 solid",
            },
          }}
          onChange={(e) => {
            this.handleFieldValidation(key, e);
            handleChange(e);
          }}
        />
      </div>
    );
  };

  renderRow = (item, index) => {
    return (
      <div key={index} className="pricing-text-input-container">
        {item.flag ? (
          this.renderDropdown(
            item.glCode,
            `chargeName_row_${index}`,
            this.getDynamicDropDown(),
            (data) => {
              let findIndex = this.state.pricingItems.findIndex((el) => {
                return el.glCode === data;
              });
              if (findIndex === -1) {
                this.handleChangeText("glCode", data, index);
              }
            },
            "Charge Name",
            "30%"
          )
        ) : (
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "22px",
              width: "30%",
              minWidth: "80px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            {item.chargeName}
          </span>
        )}

        {this.renderInput(
          {
            position: "relative",
            width: "11ch",
          },
          {
            color: "#000000",
          },
          "unitPrice",
          `${item.unitPrice}`,
          "Price",
          `unitPrice_row_${index}`,
          (data) => this.handleChangeText("unitPrice", data, index)
        )}

        {this.renderDropdown(
          item.unitMeasurement,
          `unitMeasurement_row_${index}`,
          unitMeasurement,
          (data) => this.handleChangeText("unitMeasurement", data, index),
          "Unit"
        )}

        {this.renderInput(
          {
            width: "30%",
            marginLeft: "15px",
          },
          {
            color: "#000000",
          },
          "note",
          item.note,
          "Note (Optional)",
          `unitMeasurement_row_${index}`,
          (data) => this.handleChangeText("note", data, index)
        )}

        <div
          className="price-item-remove"
          onClick={() => {
            this.setState({pricingItems : this.state.pricingItems.filter((_, i) => i !== index)})
          }}
        ></div>
      </div>
    );
  };

  renderLabel = (title, width, float = true) => {
    return (
      <div
        style={{
          width: width,
          height: "17px",
          fontSize: "12px",
          fontWeight: "600",
        }}
      >
        <span style={{ float: float ? "left" : "right" }}>{title}</span>
      </div>
    );
  };

  renderDocument = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: "35px",
        }}
      >
        {!_.isEmpty(this.props.data.pricing.pricingListDocument) && (
          <div style={{ marginBottom: "10px" }}>
            {this.renderButton("Attach Price List", this.handleAddDocument)}
          </div>
        )}

        <RenderDocument
          visible={true}
          bucketName={ this.props.data.pricing.pricingListDocument && this.props.data.pricing.pricingListDocument.bucketName
          }
          documentName={ this.props.data.pricing.pricingListDocument && this.props.data.pricing.pricingListDocument.documentName
          }
        />
      </div>
    );
  };

  render(){
    return (
      <div className="drayage-cp-container drayage-pricing-container" style={{ overflow: "scroll" }}>
        {this.state.error.length > 0 && (
          <div
            style={{
              marginLeft: "10px",
              color: "red",
              height: "35px",
              width: "95%",
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

        {this.state.loading2 === true ? (
          <div
            style={{
              height: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader active={true} inline={"centered"} size={"medium"} />
          </div>
        ) : (
          <div
            style={{
              margin: "10px",
              width: "calc(100% - 20px)",
              maxWidth: "600px",
            }}
          >
            {this.state.pricingItems.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {this.renderLabel("ITEM", "30%")}
                {this.renderLabel("CHARGE", "11ch")}
                {this.renderLabel("PER UNIT", "105px")}
                {this.renderLabel("NOTES", "30%")}
                {this.renderLabel("DEL", "50px", false)}
              </div>
            )}

            {this.state.pricingItems.length > 0 &&
              this.state.pricingItems.map((item, index) => {
                return this.renderRow(item, index);
              })}

            {this.state.pricingItems.length > 0 && (
              <div
                style={{
                  borderTopWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#D4D4D4",
                }}
              />
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {this.renderButton("ADD ADDITIONAL", this.handleAddContactPerson, {
                marginLeft: "-8px",
                marginTop: "10px",
              })}

              {_.isEmpty(this.props.data.pricing.pricingListDocument) &&
                this.renderButton("ADD PRICE LIST", this.handleAddDocument, {
                  marginLeft: "-10px",
                  marginTop: "10px",
                })}
            </div>

            {this.state.pricingItems.length > 0 && (
              <Button
                loading={this.state.loading}
                style={{
                  padding: "12px 40px",
                  marginTop: "20px",
                  fontSize: "12px",
                  backgroundColor: "#008B8F",
                  color: "white",
                  borderRadius: "0",
                  marginBottom: "10px",
                }}
                onClick={() => {
                  this.onSave({});
                }}
              >
                SAVE
              </Button>
            )}
            
            

            <input
              style={{ display: "none" }}
              type={"file"}
              accept={".doc,.docx,application/pdf"}
              ref={this.imageRef}
              onChange={(event) => {
                let file = event.target.files[0];
                let filename = `${Date.now()}_${file.name}`;
                let formdata = new FormData();
                formdata.append("files", file, filename);
                // let bucketName = JSON.parse(makeValidJson());
                uploadImageToBucket(formdata, window._env_.DRAYAGE_PARTNER_DOC_BUCKET )
                  .then((resp) => {
                    let str = resp.data.msg;
                    let firstIndex = str.indexOf("[");
                    let lastIndex = str.indexOf("]");
                    const finalString = str.substring(firstIndex + 1, lastIndex);
                    this.callApiDocList(finalString);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            />
          </div>
        )}
        <div className="show_document">
          {this.renderDocument()}
        </div>
      </div>
    );
  }
}

class RenderDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberPages: [],
      signedDoc: ""
    }
  }
  
  componentDidMount = () => {
    this.fetchFile();
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.documentName !== this.props.documentName){
    this.fetchFile();
    }
  }
  
  fetchFile = () => {
    let unmounted = false;

    if (this.props.bucketName && this.props.documentName){
      fetchFileLegal(this.props.bucketName + ":" + this.props.documentName)
    .then((resp) => {
      if (!unmounted) this.setState({signedDoc :resp.data.eventMessage.urls[0] })
    })
    .catch((err) => {});
  }

    return () => {
      unmounted = true;
    };
  }

  onDocumentLoadSuccess(pdf) {
    let myArr = [];
    for (let i = 1; i <= pdf._pdfInfo.numPages; i++) {
      myArr.push(i);
    }
    this.setState({numberPages : myArr})
  }

  displayMessage = (title, color) => {
    return (
      <div
        style={{
          marginTop: "10px",
          marginLeft: "10px",
          color: color,
        }}
      >
        {title}
      </div>
    );
  };

  render () {
    return (
      this.props.visible &&
      this.state.signedDoc && (
        <div
          style={{
            // display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "scroll",
            height: "622px",
            borderWidth: "2px",
            borderColor: "#000000",
            borderStyle: "solid",
            padding: "2px",
            width:"100%",
          }}
        >
          <Document
            file={this.state.signedDoc}
            loading={this.displayMessage("Loading PDF ...", "black")}
            error={this.displayMessage("Error Loading Document", "red")}
            onLoadSuccess={(pdf) => {
              this.onDocumentLoadSuccess(pdf);
            }}
            onLoadError={() => (console.error, "loadError")}
          >
            {this.state.numberPages.length > 0 &&
              this.state.numberPages.map((item, index) => {
                return (
                  <Page
                    key={index}
                    pageNumber={item}
                    loading={""}
                    className="pdf-view"
                  />
                );
              })}
          </Document>
        </div>
      )
    );
  }
};
