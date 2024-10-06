import React, { Component } from "react";
import _ from "lodash";
import { Document, Page, pdfjs } from "react-pdf";
import { fetchFileLegal } from "../../Api";
import "./drayagePartner.css";
import "./user-admin.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class LegalDocViwer extends Component {
    constructor(props){
      super(props);
      this.state = {
        numPages: [],
        signedDoc: "",
      }
    }
    componentDidMount =() =>{
      this.fetchFile();
    }
  
    componentDidUpdate = (prevProps, prevState)=> {
      if(prevProps.bucketName !== this.props.bucketName && prevProps.documentName !== this.props.documentName){
        this.fetchFile();
      }
    }
    
    fetchFile = () => {  
      if (this.props.bucketName && this.props.documentName) {
        fetchFileLegal(this.props.bucketName + ":" + this.props.documentName)
        .then((resp) => {
          let a = resp.data.eventMessage.urls[0]
          this.setState({signedDoc : a })
        })
        .catch((err) => {});
      }
    }
  
    onDocumentLoadSuccess(pdf) {
      let myArr = [];
      for (let i = 1; i <= pdf._pdfInfo.numPages; i++) {
        myArr.push(i);
      }
      this.setState({numPages: myArr})
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
  
    renderOptions = (marginLeft, img, type) => {
      return (
        <div
          style={{
            height: "50px",
            width: "43px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#008B8F",
            marginLeft: marginLeft,
            borderRadius: "3px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            if (type === "upload") {
              if (this.props.onPressUpload) {
                this.props.onPressUpload();
              }
            } else if (type === "download") {
              if (this.props.onPressDownload) {
                this.props.onPressDownload(this.state.signedDoc);
              }
            } else {
              if (this.props.onPressPrint) {
                this.props.onPressPrint(this.state.signedDoc);
              }
            }
          }}
        >
          <img
            style={{
              height: type === "upload" ? "15px" : "18px",
              width: type === "upload" ? "15px" : "18px",
            }}
            src={img}
          />
        </div>
      );
    };
  
    renderInformation = () => {
      if (this.props.title === "COPY OF THE INSURANCE") {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#1866AE",
              marginTop: "10px",
              marginBottom: "10px",
              alignSelf: "flex-start",
              marginLeft: "15px",
              paddingTop: "4px",
              paddingBottom: "4px",
            }}
          >
            <div
              style={{
                width: "33.3%",
                height: "100%",
                borderRightWidth: "1px",
                borderStyle: "solid",
                borderColor: "#1866AE",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="company-profile-textinput-header">
                POLICY NUMBER
              </span>
  
              <span
                style={{ marginTop: "2px", fontSize: "15px", fontWeight: "600" }}
              >
                {this.props.policyNo}
              </span>
            </div>
  
            <div
              style={{
                width: "33.3%",
                height: "100%",
                borderRightWidth: "1px",
                borderStyle: "solid",
                borderColor: "#1866AE",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="company-profile-textinput-header">
                EFFECTIVE DATE
              </span>
  
              <span
                style={{ marginTop: "2px", fontSize: "15px", fontWeight: "600" }}
              >
                {this.convertEpochtoDate(this.props.effectiveDate)}
              </span>
            </div>
  
            <div
              style={{
                width: "33.3%",
                height: "100%",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="company-profile-textinput-header">
                POLICY EXPIRY DATE
              </span>
  
              <span
                style={{ marginTop: "2px", fontSize: "15px", fontWeight: "600" }}
              >
                {this.convertEpochtoDate(this.props.expiryDate)}
              </span>
            </div>
          </div>
        );
      }
    };
  
    convertEpochtoDate = (epoch) => {
      if (epoch) {
        var myDate = new Date(epoch);
        return myDate.toLocaleDateString("default", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        });
      } else {
        return "";
      }
    };
    
    render(){
      return (
        <div
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#1866AE",
            marginTop: this.props.index !== 0 ? "10px" : 0,
            borderRadius: "2px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px",
            }}
          >
            <span
              style={{
                color: "#1866AE",
                fontSize: "18px",
                fontWeight: "500",
                width: "60%",
                height: "50px",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                if (this.props.onToggle) {
                  this.props.onToggle();
                }
              }}
            >
              {this.props.title}
            </span>
  
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {this.props.title === "TERMS AND CONDITIONS" ? "" :
              this.renderOptions("0", "/images/attach.svg", "upload")}
  
              {this.renderOptions("10px", "/images/pdf.png", "download")}
  
              {/* {this.renderOptions("10px", "/images/printer.png", "print")} */}
            </div>
          </div>
  
          {this.props.visible && this.state.signedDoc && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "scroll",
                height: "622px",
              }}
            >
              {this.renderInformation()}
  
              <Document
                file={this.state.signedDoc}
                loading={this.displayMessage("Loading PDF ...", "black")}
                error={this.displayMessage("Error Loading Document", "red")}
                onLoadSuccess={(pdf) => {
                  this.onDocumentLoadSuccess(pdf);
                }}
                // onLoadError={(console.error, "loadError")}
              >
                {this.state.numPages.length > 0 &&
                  this.state.numPages.map((item, index) => {
                    return (
                      <Page pageNumber={item} loading={""} className="pdf-view" />
                    );
                  })}
              </Document>
            </div>
          )}
        </div>
      );
    }
  };

