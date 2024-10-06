import React, { Component } from "react";
import { Button, Form, Loader } from "semantic-ui-react";
import _ from "lodash";
import { Document, Page, pdfjs } from "react-pdf";
// import { makeValidJson } from "../../util/index";
import { editDrayagePartnerLegal, uploadImageToBucket } from "../../Api";
import "./drayagePartner.css";
import "./user-admin.css";
import LegalDocViwer from "./LegalDocViwer";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const lightRed = "rgba(255,153,153, 0.2)";

export default class Legal extends Component {
  constructor(props){
    super(props);
    this.state = {
      documents: this.configureArray([]),
      selected: [],
      error: [],
      loading: false,
      file: null,
      newDocName: "",
      insurance: {
        policyNo: "",
        expiryDate: "",
        effextiveDate: "",
      },
      options: {
        visible: false,
        currentIndex: null,
        type: null,
      }
    }
    this.imageRef = React.createRef();
  }

  componentDidMount = () => {
    this.props.data.documents && this.setState({documents : this.configureArray( this.props.data.documents)})
  }
  componentDidUpdate = (prevProps, prevState)=> {
    if(prevProps.data.documents !== this.props.data.documents){
      this.setState({documents : this.configureArray( this.props.data.documents)})
    }
  }

  configureArray(array) {
    let resp = [];
    array.map((item, index) => {
      if (item.documentName) {
        resp.push(item);
      }
    });
    let termsPayload = {
      documentName: "",
      documentType: "TERMS_AGREEMENTS",
      documentTitle: "TERMS AND CONDITIONS",
    };
    let insurancePayload = {
      documentName: "",
      effectiveDate: "",
      expiryDate: "",
      policyNumber: "",
      documentType: "INSURANCE",
      documentTitle: "COPY OF THE INSURANCE",
    };
    if (_.isEmpty(array)) {
      resp = [termsPayload, insurancePayload];
    } else {
      let findIndex = resp.findIndex((obj) => {
        return obj.documentType === "TERMS_AGREEMENTS";
      });
      let findIndex2 = resp.findIndex((obj) => {
        return obj.documentType === "INSURANCE";
      });

      if (findIndex === -1) {
        resp.unshift(termsPayload);
      }

      if (findIndex2 === -1) {
        resp.splice(1, 0, insurancePayload);
      }
    }
    return resp;
  }

  validate = () => {
    let resp = true;
    this.state.documents && this.state.documents.map((item, index) => {
      if (item.documentName === "") {
        resp = false;
      }
    });
    return resp;
  };

  onPressAddDocument = () => {
    if (this.validate()) {
      this.setState({file: null, newDocName:"",
      insurance:{policyNo: "", expiryDate: "", effectiveDate: ""}, 
      options:{type: "OTHER", currentIndex: null, visible: true}})
    } else {
      // this.setState({error: [{err:"Please upload both Terms and Conditons & Copy of Insurance before uploading any other document"}]})
      window.scrollTo(0, 0);
    }
  };

  onAddComplete = () => {
    let payload = {
      documentName: this.state.file,
      documentType: "PARTNER_DOCUMENT_NONE",
      documentTitle: this.state.newDocName,
    };
    let arr = [...this.state.documents];
    arr.push(payload);
    this.callApi(arr);
  };

  callApi = (finalArr) => {
    this.setState({loading: true});
    editDrayagePartnerLegal(this.props.data.companyProfile.userGuid, finalArr)
      .then((resp) => {
        console.log(resp);
        this.setState({loading: false});
        if (resp.code === 400) {
          console.log("err");
          let error = [{ key: resp.code, err: resp.msg }];
          this.setState({error: error});
        } else {
          this.props.fetchDrayagePartnerData();
          window.scrollTo(0, 0);
        }
        this.setState({options: {
          type: null,
          currentIndex: null,
          visible: false,
        }});
        this.props.fetchDrayagePartnerData();
        window.scrollTo(0, 0);
      })
      .catch(() => {
        this.setState({loading: false});
        let error = [{ key: 500, err: "Something Went Wrong!" }];
        this.setState({error: error});
        window.scrollTo(0, 0);
      });
  };

  onEditDocument = (docName, index, type) => {
    let array = [...this.state.documents];
    if (type === "COPY OF THE INSURANCE") {
      array[index].documentName = docName;
      array[index].effectiveDate = this.state.insurance.effextiveDate;
      array[index].expiryDate = this.state.insurance.expiryDate;
      array[index].policyNumber = this.state.insurance.policyNo;
    } else if (type === "TERMS AND CONDITIONS") {
      array[index].documentName = docName;
    } else {
      array[index].documentName = docName;
      array[index].documentTitle = this.state.newDocName;
    }
    let finalArr = [];
    array.map((item, index) => {
      if (item.documentName !== "") {
        finalArr.push(item);
      }
    });
    console.log(finalArr);
    this.callApi(finalArr);
  };

  handleToggle = (index) => {
    const myArr = [...this.state.selected];
    const indexOf = myArr.indexOf(index);

    if (indexOf !== -1) {
      myArr.splice(indexOf, 1);
      this.setState({selected : myArr})
    } else {
      myArr.push(index);
      this.setState({selected : myArr})
    }
  };

  documentValidation = (type) => {
    let resp = false;
    if (type === "TERMS AND CONDITIONS") {
      if (this.state.file === null) {
        resp = true;
      }
    } else if (type === "COPY OF THE INSURANCE") {
      if (
        this.state.file === null ||
        !this.state.insurance.policyNo ||
        !this.state.insurance.expiryDate ||
        !this.state.insurance.effextiveDate
      ) {
        resp = true;
      }
    } else {
      if (this.state.file === null || !this.state.newDocName) {
        resp = true;
      }
    }
    console.log(resp);
    return resp;
  };

  renderAddDocumentModal = (existingDocName) => {
    return this.state.options.visible ? (
      <div style={{marginTop: "2%"}}>
        <Form
          className="ua popup-form"
          style={{
            height:
              this.state.options.type === "TERMS AND CONDITIONS"
                ? "18vh"
                : this.state.options.type === "COPY OF THE INSURANCE"
                ? "47vh"
                : "27vh",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              color: "#008B8F",
              fontWeight: "600",
              textTransform: "uppercase",
              paddingBottom: "4px",
            }}
          >
            UPLOAD DOCUMENT
          </div>

          <div style={{ overflow: "scroll" }}>
            <Button
              loading={this.state.loading}
              style={{
                width: "100%",
                fontSize: "12px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#008B8F",
                color: "#008B8F",
                borderRadius: "0",
                marginTop: "20px",
                backgroundColor: "#FFFFFF",
              }}
              onClick={() => this.imageRef.current.click()}
            >
              {this.state.file === null ? "UPLOAD" : "✓"}
            </Button>

            {(this.state.options.type === "OTHER" ) ? (
              <Form.Field>
                <label
                  style={{
                    marginTop: "20px",
                    letterSpacing: "2px",
                    color: "#008B8F",
                  }}
                >
                  Document Name
                </label>
                <input
                  style={{ marginTop: "2px" }}
                  required
                  type="text"
                  name="docName"
                  placeholder="Document Name"
                  value={this.state.newDocName}
                  onChange={(e) => {
                    this.setState({newDocName : e.target.value})
                  }}
                />
              </Form.Field>
            ) : ""}

            {this.state.options.type === "COPY OF THE INSURANCE" && (
              <Form.Field>
                <label
                  style={{
                    marginTop: "20px",
                    letterSpacing: "2px",
                    color: "#008B8F",
                  }}
                >
                  Policy Number
                </label>

                <input
                  style={{ marginTop: "2px" }}
                  required
                  type="text"
                  name="policyNo"
                  placeholder="Policy Number"
                  value={this.state.insurance.policyNo}
                  onChange={(e) => {
                    this.setState({insurance: { ...this.state.insurance, policyNo: e.target.value}})
                  }}
                />
              </Form.Field>
            )}

            {this.state.options.type === "COPY OF THE INSURANCE" && (
              <Form.Field>
                <label
                  style={{
                    marginTop: "20px",
                    letterSpacing: "2px",
                    color: "#008B8F",
                  }}
                >
                  Effective Date
                </label>

                <input
                  style={{ marginTop: "2px" }}
                  required
                  type="date"
                  name="effectiveDate"
                  placeholder="Effective Date"
                  onChange={(e) => {
                    this.setState({insurance: { ...this.state.insurance, effextiveDate: new Date(e.target.value).getTime()}})
                  }}
                />
              </Form.Field>
            )}

            {this.state.options.type === "COPY OF THE INSURANCE" && (
              <Form.Field>
                <label
                  style={{
                    marginTop: "20px",
                    letterSpacing: "2px",
                    color: "#008B8F",
                  }}
                >
                  Policy Expiry Date
                </label>

                <input
                  style={{ marginTop: "2px" }}
                  required
                  type="date"
                  name="expiryDate"
                  placeholder="Expiry Date"
                  onChange={(e) => {
                    this.setState({insurance: { ...this.state.insurance, expiryDate: new Date(e.target.value).getTime()}})
                  }}
                />
              </Form.Field>
            )}
          </div>

          <div className="popup-pagination" style={{marginTop: "5px"}}>
            <Button.Group>
              <Button
                className="ua cancel"
                onClick={() => {
                  this.setState({options: {
                    type: null,
                    currentIndex: null,
                    visible: false,
                  }});
                }}
                style={{ background: "#EBF2FB", marginLeft: "33px" }}
                type="submit"
              >
                CANCEL
              </Button>
              <Button
                loading={this.state.loading}
                disabled={this.documentValidation(this.state.options.type)}
                className="ua save"
                style={{ background: "#008B8F", color: "white" }}
                type="submit"
                onClick={() => {
                  this.setState({loading : true})
                  this.state.options.type === "OTHER"
                    ? this.onAddComplete()
                    : this.onEditDocument(this.state.file, this.state.options.currentIndex, this.state.options.type);
                }}
              >
                SUBMIT
              </Button>
            </Button.Group>
          </div>
        </Form>
      </div>
    ) : null;
  };

  renderButton = () => {
    return (
      <div>
        <button
          className="contact-detail-button"
          style={{ backgroundColor: "#FFFFFF" }}
          onClick={() => {
            this.onPressAddDocument();
          }}
        >
          <img
            src={"/images/addContactPerson.png"}
            style={{ height: "15px", width: "20px" }}
          />
          <span
            style={{
              color: "#1765AE",
              fontSize: "14px",
              marginLeft: "10px",
            }}
          >
            ADD DOCUMENT
          </span>
        </button>
      </div>
    );
  };

  renderList =  (title, index, item) => {
    return (
      <LegalDocViwer
        key={index}
        title={title}
        index={index}
        visible={this.state.selected && this.state.selected.includes(index)}
        bucketName={item.bucketName}
        policyNo={item.policyNumber || ""}
        effectiveDate={item.effectiveDate || ""}
        expiryDate={item.expiryDate || ""}
        documentName={item.documentName}
        onToggle={() => {
          this.handleToggle(index);
        }}
        onPressUpload={() => {
          this.setState({file: null})
          this.setState({options:{
            type: title === "TERMS AND CONDITIONS" ||
            title === "COPY OF THE INSURANCE"
              ? title
              : "EDIT_EXISTING",
            currentIndex: index,
            visible: true,
          }});
        }}
        onPressDownload={(doc) => {
          if (doc) {
            window.open(doc, "_blank");
          }
        }}
        onPressPrint={(doc) => {
          if (doc) {
          }
        }}
      />
    );
  };

  render(){
    return (
      <div className="drayage-cp-container" style={{ overflow: "scroll" }}>
        {this.state.error.length > 0 && (
          <div
            style={{
              marginLeft: "10px",
              color: "red",
              width: "80%",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "flex",
              alignItems: "center",
              backgroundColor: lightRed,
              marginTop: "5px",
              marginBottom: "15px",
            }}
          >
            {error[0].err ||"Something Went Wrong"}
        </div>
        )}
        {this.validate() ? "" : <p style={{color: "red"}}>"Please upload Copy of Insurance before uploading any other document"</p>}
        {this.state.loading === true ? <Loader active={true} style={{marginTop: "30%"}} inline={"centered"} size={"medium"} /> : 
        <div style={{ marginLeft: "10px", marginTop: "10px", width: "50%" }}>
          {this.state.documents &&
            this.state.documents.map((item, index) => {
              return this.renderList(item.documentTitle, index, item);
              
            })}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "20px",
              marginBottom: "10px",
              marginLeft: "2px",
            }}
          >
            {this.renderButton()}
          </div>

          <input
            style={{ display: "none" }}
            type={"file"}
            accept={".doc,.docx,application/pdf"}
            ref={this.imageRef}
            onChange={(event) => {
              console.log(event.target.files[0], "event");
              let file = event.target.files[0];
              let filename = `${Date.now()}_${file.name}`;
              let formData = new FormData();
              formData.append("files", file, filename);
              // let bucketName = JSON.parse(makeValidJson());
              uploadImageToBucket(formData, window._env_.DRAYAGE_PARTNER_DOC_BUCKET )
                .then((resp) => {
                  let str = resp.data.msg;
                  let firstIndex = str.indexOf("[");
                  let lastIndex = str.indexOf("]");
                  const finalString = str.substring(firstIndex + 1, lastIndex);
                  this.setState({file :finalString })
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          />

          {this.renderAddDocumentModal()}
        </div>}
      </div>
    );
  }
}
