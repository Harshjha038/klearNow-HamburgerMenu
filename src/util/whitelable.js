import Images from "../config/images"

let whitelabelVars = new Map()
// let envStaging = window._env_.REACT_APP_API_URL.indexOf("staging-") != -1
// let envDev = window._env_.REACT_APP_API_URL.indexOf("dev-") != -1
let envStaging = ""
let envDev = ""
// let envPreProd = window._env_.REACT_APP_API_URL.indexOf("preprod-") != -1 // Need aliases for whitelabel for diff env
// let prodDev = !envStaging && !envDev

// import {smallDownArrowRed, smallUpArrowRed,smallDownArrowYellow,smallUpArrowYellow, smallDownArrowJBHYellow, smallUpArrowJBHYellow,smallDownArrowBlack,smallUpArrowBlack} from "../../src/images"

// let whitelabelVars = new Map()

//  whitelabelVars["DEFAULT"] = {
//     "backgroundColor":"",
//     "smallDownArrow" : smallDownArrowRed,
//     "smallUpArrow":    smallUpArrowRed,
//     "primaryColor" : "#AA1A14",
//     "border":  "1px solid #AA1A14",
//     "filterButton" : "filterButton-jd",
//     "filterButton-selected" : "filterButton selected-jd",
//     "FilterDropdown": "FilterDropdownJd",
//     "color":"white",
//     "advance-filter":"adv-filter"   
//  }

// whitelabelVars["JDL"] = {
//     "backgroundColor":"#AA1A14",
//     "buttonBackgroundColor":"#AA1A14",
//     "smallDownArrow" : smallDownArrowRed,
//     "smallUpArrow":    smallUpArrowRed,
//     "primaryColor" : "#AA1A14",
//     "border":  "1px solid #AA1A14",
//     "filterButton" : "filterButton-jd",
//     "filterButton-selected" : "filterButton selected-jd",
//     "FilterDropdown": "FilterDropdownJd",
//     "color":"white",
//     "advance-filter":"adv-filter",
//     "applyButtonBackgroundColor":"#AA1A14",
//     "applyButtonColor":"#ffffff",
//     "cancelButtonColor": "#AA1A14",

    
// }



whitelabelVars["SAT"] = {
    "title" : "SAT",
    "color" :  "white",
    "buttonBackgroundColor":"#045685",
    "buttonBackgroundImage":"linear-gradient(205.33deg, #78216C 0%, #392A6D 44.36%, #51ABD8 100%)",
    "buttonColor":"#ffffff",
    "backgroundColor": "#045685",
    "backgroundImage":"linear-gradient(205.33deg, #78216C 0%, #392A6D 44.36%, #51ABD8 100%)",
    "cancelButtonColor":"#045685",
    "downArrow" : Images.downArrowBigCSGP,
    "primaryColor" : "#045685",
    "selectedRectangleClassName" : "selected-cgts-blue",
    "rectangleClassName" :"cgts-blue-rectangle",
    "burgerMenu" : Images.blueBurgermenu,
    "cssClass" :"account-menu-header-div-sat",
    "logoutUrl" : envDev ? "https://sat-dev.klearnow.com" : envStaging ? "https://sat-stage.klearnow.com" : "https://sat.klearnow.com",
    "account-menu-logout" : "account-menu-logout-sat",
    "account-menu-cust" : "account-menu-cust-sat",
    "account-menu-email" : "account-menu-email-sat",
    "advanceSearchApplyButtonBackgroundColor":"linear-gradient(205.33deg, #78216C 0%, #392A6D 44.36%, #51ABD8 100%)",
    "advanceSearchApplyButtonTextColor":"white",
    "advanceSearchCancelButtonColor":"#045685",
    "mode-button-backgroundColor":"white",
    "mode-button-selected-backgroundColor":"#045685",
    "searchSubmitButtonBackgroundColor":"linear-gradient(205.33deg, #78216C 0%, #392A6D 44.36%, #51ABD8 100%)",
    "advanceSearchCancelButtonBorderColor": "#045685",
    "mode-btn":"mode-btn",
     "mode-selected":"selected-sat",
     "export-btn":"export-btn-sat",
     "downArrowImage":Images.downArrowEtaCSGP,
     "upArrowImage":Images.upArrowEtaeti,
     "etaColor":"#045685",
     "iconColor":"#045685",
     "border":"#045685",
     "wlReportEye":Images.reportEyeCSGP,
     "wlReportEyeReport":Images.reportEyeCSGPReport,
     "klearviewFontColor":"white",
}




whitelabelVars["CGTS"] = {
    "title" : "CGTS",
    "color" :  "white",
    "buttonBackgroundColor":"#045685",
    "buttonBackgroundImage":"#045685",
    "buttonColor":"#ffffff",
    "backgroundColor": "#045685",
    "cancelButtonColor":"#6C757D",
    "downArrow" : Images.downArrowBigCSGP,
    "primaryColor" : "#045685",
    "selectedRectangleClassName" : "selected-cgts-blue",
    "rectangleClassName" :"cgts-blue-rectangle",
    "burgerMenu" : Images.blueBurgermenu,
    "cssClass" :"account-menu-header-div-cgts",
    "logoutUrl" : envDev ? "https://cgts-dev.klearnow.com" : envStaging ? "https://cgts-staging.klearnow.com" : "https://cgtradeservices.klearnow.com",
    "account-menu-logout" : "account-menu-logout-cgts",
    "account-menu-cust" : "account-menu-cust-cgts",
    "account-menu-email" : "account-menu-email-cgts",
    "advanceSearchApplyButtonBackgroundColor":"#045685",
    "advanceSearchApplyButtonTextColor":"white",
    "advanceSearchCancelButtonColor":"#045685",
    "mode-button-backgroundColor":"white",
    "mode-button-selected-backgroundColor":"#045685",
    "searchSubmitButtonBackgroundColor":"#045685",
    "advanceSearchCancelButtonBorderColor":"#045685",
    "mode-btn":"mode-btn",
     "mode-selected":"selected-cgts",
     "export-btn":"export-btn-cgts",
     "downArrowImage":Images.downArrowEtaCSGP,
     "upArrowImage":Images.upArrowEtaeti,
     "etaColor":"#045685",
     "iconColor":"#045685",
     "border":"#045685",
     "wlReportEye":Images.reportEyeCSGP,
     "wlReportEyeReport":Images.reportEyeCSGPReport,
     "klearviewFontColor":"white",
}



whitelabelVars["JDL"] = {
    "title" : "JDL Inc",
    // "color" : "#AA1A14",
    "color":"white",
    "backgroundColor":"#AA1A14",
    "buttonBackgroundImage":"#AA1A14",
    "buttonColor":"white",
    "buttonBackgroundColor":"#AA1A14",
    "cancelButtonColor":"#AA1A14",
    "downArrow" : Images.downArrowRed,
    "primaryColor" : "#AA1A14",
    "selectedRectangleClassName" : "selected-red",
    "rectangleClassName" : "red-rectangle",
    "burgerMenu" : Images.redBurgermenu,
    "cssClass" :"account-menu-header-div-jd",
    "logoutUrl" : envDev ? "https://jdl-dev.klearnow.com" : envStaging ? "https://jdl-staging.klearnow.com" : "https://jdl.klearnow.com",
    "account-menu-logout" : "account-menu-logout",
    "account-menu-cust" : "account-menu-cust",
    "account-menu-email" : "account-menu-email",
    "advanceSearchApplyButtonBackgroundColor":"#AA1A14",
    "advanceSearchApplyButtonTextColor":"#ffffff",
    "advanceSearchCancelButtonColor":"#AA1A14",
     "advanceSearchCancelButtonBorderColor":"#AA1A14",
    "mode-button-backgroundColor":"white",
    "mode-button-selected-backgroundColor":"#AA1A14",
    "searchSubmitButtonBackgroundColor":"#AA1A14",
     "mode-btn":"mode-btn",
     "mode-selected":"selected-jdl",
     "export-btn":"export-btn-jdl",
     "icon":"icon-jdl",
     "downArrowImage":Images.downArrowEtajdl,
     "upArrowImage":Images.upArrowEtajdl,
     "etaColor":"#AA1A14",
     "iconColor":"#AA1A14",
     "border": "#AA1A14",
     "wlReportEye":Images.reportEyeJDL,
     "wlReportEyeReport":Images.reportEyeJDLReport,
     "klearviewFontColor":"#ffffff",



   
}

whitelabelVars["TI"] = {
    "title" : "TI Inc",
    "color" :  "#236092",
    "buttonBackgroundColor":"#FFC629",
    "buttonBackgroundImage":"#FFC629",
    "buttonColor":"#236092",
    "backgroundColor": "#FFC629",
    "cancelButtonColor":"#236092",
    "downArrow" : Images.downArrowYellow,
    "primaryColor" : "#FFC629",
    "selectedRectangleClassName" : "selected-yellow",
    "rectangleClassName" : "yellow-rectangle",
    "burgerMenu" : Images.blueBurgermenu,
    "cssClass" :"account-menu-header-div-ti",
    "logoutUrl" : envDev ? "https://ti-dev.klearnow.com" : envStaging ? "https://ti-staging.klearnow.com" : "https://ti.klearnow.com",
    "account-menu-logout" : "account-menu-logout-ti",
    "account-menu-cust" : "account-menu-cust-ti",
    "account-menu-email" : "account-menu-email-ti",
    "advanceSearchApplyButtonBackgroundColor":"#FFC629",
    "advanceSearchApplyButtonTextColor":"#236092",
    "advanceSearchCancelButtonColor":"#236092", 
    "mode-button-backgroundColor":"white",
    "mode-button-selected-backgroundColor":"#FFC629",
    "searchSubmitButtonBackgroundColor":"#FFC629",
    "advanceSearchCancelButtonBorderColor":"#FFC629",
    "mode-btn":"mode-btn",
     "mode-selected":"selected-ti",
     "export-btn":"export-btn-ti",
     "downArrowImage":Images.downArrowEtati,
     "upArrowImage":Images.upArrowEtaeti,
     "etaColor":"#236092",
     "iconColor":"#236092",
     "border":"#236092",
     "wlReportEye":Images.reportEyeTI,
     "wlReportEyeReport":Images.reportEyeTIReport,
     "klearviewFontColor":"#236092",



}
//#045685


whitelabelVars["JBH"] = {
    "title" : "JBH",
    "color" :  "#000000",
    "backgroundColor": "#fbd71e",
    "buttonBackgroundImage":"#fbd71e",
    "buttonColor":"#000000",
    "buttonBackgroundColor":"#fbd71e",
    "cancelButtonColor":"#000000",
    "downArrow" : Images.downArrowBigJBH,
    "primaryColor" : "#fbd71e",
    "selectedRectangleClassName" : "selected-yellow",
    "rectangleClassName" : "yellow-rectangle",
    "burgerMenu" : Images.blackBurgermenu,
    "cssClass" :"account-menu-header-div-jbh",
    "logoutUrl" : envDev ? "https://jbh-dev.klearnow.com" : envStaging ? "https://jbh-staging.klearnow.com" : "https://jbh.klearnow.com",
    "account-menu-logout" : "account-menu-logout-jbh",
    "account-menu-cust" : "account-menu-cust-jbh",
    "account-menu-email" : "account-menu-email-jbh",
    "advanceSearchApplyButtonBackgroundColor":"#fbd71e",
    "advanceSearchApplyButtonTextColor":"#000000",
    "advanceSearchCancelButtonColor":"#000000", 
    "mode-button-backgroundColor":"white",
    "mode-button-selected-backgroundColor":"#fbd71e",
    "searchSubmitButtonBackgroundColor":"#fbd71e",
    "advanceSearchCancelButtonBorderColor":"#fbd71e",
    "mode-btn":"mode-btn",
     "mode-selected":"selected-jbh",
     "export-btn":"export-btn-jbh",
     "downArrowImage":Images.downArrowEtajbh,
     "upArrowImage":Images.upArrowEtajbh,
     "etaColor":"#000000",
     "iconColor":"#000000",
     "border":"#fbd71e",
     "wlReportEye":Images.reportEyeJBH,
     "wlReportEyeReport":Images.reportEyeJBHReport,
     "klearviewFontColor":"#000000",


    


}
whitelabelVars["JBH-TDI"] = {
    "title" : "JBH-TDI",
    "color" :  "#000000",
    "buttonBackgroundColor":"#1C8F45",
    "buttonBackgroundImage":"#1C8F45",
    "buttonColor":"#ffffff",
    "cancelButtonColor":"#000000",
    "backgroundColor": "#000000",
    "downArrow" : Images.downArrowBigTdi,
    "primaryColor" : "#000000",
    "selectedRectangleClassName" : "selected-tdi-blue",
    "rectangleClassName" : "tdi-blue-rectangle",
    "burgerMenu" : Images.blackBurgermenu,
    "cssClass" :"account-menu-header-div-jbh-tdi",
    "logoutUrl" : envDev ? "https://jbh-tdi-dev.klearnow.com" : envStaging ? "https://jbh-tdi-staging.klearnow.com" : "https://jbh-tdi.klearnow.com",
    "account-menu-logout" : "account-menu-logout-jbh-tdi",
    "account-menu-cust" : "account-menu-cust-jbh",
    "account-menu-email" : "account-menu-email-jbh",
    "advanceSearchApplyButtonBackgroundColor":"#1C8F45",
    "advanceSearchApplyButtonTextColor":"#000000",
    "advanceSearchCancelButtonColor":"#000000", 
    "mode-button-backgroundColor":"white",
    "mode-button-selected-backgroundColor":"#1C8F45",
    "searchSubmitButtonBackgroundColor":"#1C8F45",
    "advanceSearchCancelButtonBorderColor":"#1C8F45",
    "mode-btn":"mode-btn",
    "mode-selected":"selected-jbh-tdi",
    "export-btn":"export-btn-jbh-tdi",
    "downArrowImage":Images.downArrowEtajbhtdi,
    "upArrowImage":Images.upArrowEtajbhtdi,
    "etaColor":"#1C8F45",
    "iconColor":"#1C8F45",
    "border":"#1C8F45",
    "wlReportEye":Images.reportEyeJBHTDI,
    "wlReportEyeReport":Images.reportEyeJBHTDIReport,
    "klearviewFontColor":"#000000",

    

   



}



whitelabelVars["EFS"] = {
    "title" : "EFS",
    "color" : "white",
    "buttonBackgroundColor":"#AF1F24",
    "buttonBackgroundImage":"#AF1F24",
    "backgroundColor":"#AF1F24",
    "buttonColor":"#ffffff",
    "cancelButtonColor":"#AF1F24",
    "downArrow" : Images.downArrowRed,
    "primaryColor" : "#AF1F24",
    "selectedRectangleClassName" : "selected-red",
    "rectangleClassName" : "red-rectangle",
    "burgerMenu" : Images.redBurgermenu,
    "cssClass" :"account-menu-header-div-efs",
    "logoutUrl" : envDev ? "https://cob-dev.klearnow.com" : envStaging ? "https://cob-staging.klearnow.com" : "https://cob.klearnow.com",
    "account-menu-logout" : "account-menu-logout",
    "account-menu-cust" : "account-menu-cust",
    "account-menu-email" : "account-menu-email",
    "mode-button-backgroundColor":"white",
    "mode-button-selected-backgroundColor":"#AF1F24",
    "searchSubmitButtonBackgroundColor":"#AF1F24",
    "advanceSearchCancelButtonColor":"#AF1F24", 
    "advanceSearchCancelButtonBorderColor":"#AF1F24",
    "mode-btn":"mode-btn",
     "mode-selected":"selected-efs",
     "icon":"icon-efs",
     "downArrowImage":Images.downArrowEtaefs,
     "upArrowImage":Images.upArrowEtaefs,
     "etaColor":"#AF1F24",
     "iconColor":"#AF1F24",
     "border":"#AF1F24",
     "wlReportEye":Images.reportEyeEFS,
     "wlReportEyeReport":Images.reportEyeEFSReport,
     "klearviewFontColor":"white",

 


    

    


   
}


export const wlGetDocumentTitle = (customer) => {
    if (!customer || !whitelabelVars[customer]) {
        return "KlearNow"
    } else {
        return whitelabelVars[customer]["title"] 
    } 
}


export const wlGetDownArrow = (customer) => {
    return whitelabelVars[customer]["downArrow"]
}

export const wlGetAccountMenuLogout = (customer) => {
    return whitelabelVars[customer]["account-menu-logout"]
}
export const wlGetAccountMenuCust = (customer) => {
    return whitelabelVars[customer]["account-menu-cust"]
}
export const wlGetAccountMenuEmail = (customer) => {
    return whitelabelVars[customer]["account-menu-email"]
}

export const wlGetPrimaryColor = (customer) => {
    if(!whitelabelVars[customer]) {
        return "black"; 
    }
    return whitelabelVars[customer]["primaryColor"]
}
export const wlGetColor = (customer) => {
    if(!whitelabelVars[customer]) {
        //console.log("wlGetColor");
        return "black"; 
    }
    
    return whitelabelVars[customer]["color"]
}
export const wlGetButtonBackgroundColor =(customer)=>{
    return whitelabelVars[customer]["buttonBackgroundColor"]
}

export const wlGetButtonColor =(customer)=>{
    // console.log("Customer : ", customer, whitelabelVars[customer])
    return whitelabelVars[customer]["buttonColor"]
}
// export const wlGetCancelButtonColor =(customer)=>{
//     return whitelabelVars[customer]["cancelButtonColor"]
// }

export const wlGetConfirmColorButton = (customer) => {
    if (customer != "TI" && customer != "JBH") {
        return whitelabelVars[customer]["primaryColor"]
    } else {
        return whitelabelVars[customer]["color"]
    }
}

export const wlGetSelectedRectangleClassName = (customer) => {
    return whitelabelVars[customer]["selectedRectangleClassName"]
}


export const wlGetRectangleClassName = (customer) => {
    return whitelabelVars[customer]["rectangleClassName"]
}

export const wlGetBurgerMenu = (customer) => {
    return whitelabelVars[customer][ "burgerMenu"]
}
export const wlGetCssClass = (customer) => {
    return whitelabelVars[customer][ "cssClass"]
}

export const wlGetLogoutUrl = (customer) => {
    return whitelabelVars[customer]["logoutUrl"]
}
export const wlGetModeButtonBackgroundColor = (customer) => {
    return whitelabelVars[customer]["mode-button-backgroundColor"]
}

export const wlGetModeButtonSelectedBackgroundColor = (customer) => {
    return whitelabelVars[customer]["mode-button-selected-backgroundColor"]
}

export const wlGetSearchButtonBackgroundColor = (customer) => {
    return whitelabelVars[customer]["searchSubmitButtonBackgroundColor"]
}

export const wlGetSearchButtonColor = (customer) => {
    return whitelabelVars[customer]["advanceSearchApplyButtonTextColor"]
}
export const wlGetCancelButtonColor = (customer) => {
    return whitelabelVars[customer]["advanceSearchCancelButtonColor"]
}
export const wlGetCancelButtonBorderColor = (customer) => {
    return whitelabelVars[customer]["advanceSearchCancelButtonBorderColor"]
}
// export const wlModeButton =(customer) =>{
//     return whitelabelVars[customer]["mode-btn"] 
// }
export const wlModeButtonSelected =(customer) =>{
    return whitelabelVars[customer]["mode-selected"] 
}
export const wlExportButtonSelected =(customer) =>{
    return whitelabelVars[customer]["export-btn"] 
}
export const wlIcon =(customer) =>{
    return whitelabelVars[customer]["icon"] 
}
export const wlEtaArrowDown =(customer) =>{
    return whitelabelVars[customer]["downArrowImage"] 
}
export const wlEtaArrowUp =(customer) =>{
    return whitelabelVars[customer]["upArrowImage"] 
}
export const wlEtaColor =(customer) =>{
    return whitelabelVars[customer]["etaColor"] 
}
export const chevronIconColor =(customer) =>{
    return whitelabelVars[customer]["iconColor"] 
}

export const wlBorder =(customer) =>{
    return whitelabelVars[customer]["border"] 
}
export const wlReportEye =(customer) =>{
    return whitelabelVars[customer]["wlReportEye"] 
}
export const wlReportEyeReport =(customer) =>{
    return whitelabelVars[customer]["wlReportEyeReport"] 
}
export const wlKlearViewFontColor =(customer) =>{
    if(customer){
     return whitelabelVars[customer]["klearviewFontColor"] 
    }
}
export const wlButtonBackgroundImage =(customer) =>{
    return whitelabelVars[customer]["buttonBackgroundImage"]
}

