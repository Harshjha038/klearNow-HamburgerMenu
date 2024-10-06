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

 import momentTz from "moment";
 import moment from "moment-timezone";
 import { get, values } from "lodash";
 import { markerTypes, firstMileJobStates, waterTransitJobStates, shipmentPhaseTruckerJobStates } from "./constants";
 import store from "../store";
 import { DBG_SEARCH, knlog } from "./debug";
//  import { STATE_ENTRY_ACCEPTED } from "../commonComponents/DetailComponent/util";
 import {DBG_SHIPMENT_DETAIL} from "./debug"
 
 //timezone is always of format : "UTC+05:00"
 // function findUtcOffset(timezone) {
 //   let s = timezone.substr(3); // Get rid of UTC, s= "+05:00"
 //   let sign = s[0]; // "+""
 //   let x = s.substr(1, 2) * 60 + parseInt(s.substr(4, 5));
 
 //   return sign + x;
 // }
 const findUtcOffset = (timezone) => {
   const s = timezone.substr(3); // Get rid of UTC, s= "+05:00"
   const sign = s[0]; // "+""
   const x = parseInt(s.substr(1, 2)) * 60 + parseInt(s.substr(4, 5));
   if (isNaN(x)) return null; // if timezone is formatted incorrectly, return null
   return parseInt(sign + x);
 };
 
 function dateFormatter(seconds) {
   let time = moment.unix(seconds).format("MMMM Do, YYYY");
   if (time === "Invalid date") return null;
   return time;
 }
 
 function shortDateFormatter(seconds) {
   let time = moment.unix(seconds).format("MM/DD/YYYY");
   if (time === "Invalid date") return null;
   return time;
 }
 function shortDateFormatterV2WithHourLMinAMPM(seconds, tz) {
   let time;
   if (tz) {
     let utcOffset = findUtcOffset(tz);
     if (utcOffset) {
       time = moment.unix(seconds).utcOffset(parseInt(utcOffset)).format("MMM DD, YYYY, hh:mm A");
     } else {
       time = moment.unix(seconds).format("MMM DD, YYYY, hh:mm A");
     }
   } else {
     time = moment.unix(seconds).format("MMM DD, YYYY, hh:mm A");
   }
   if (time === "Invalid date") return null;
   return time;
 }
 
 function shortDateFormatterV2WithHourLMinAMPMTZ (seconds, tz) {
 
   let time;
   if(tz==="UTC+00:00"){
     tz= "Atlantic/Reykjavik"
   }
   if (tz) {
     return moment.unix(seconds).tz(tz).format("MMM DD, YYYY, hh:mm A");
   } else {
     time = moment.unix(seconds).format("MMM DD, YYYY, hh:mm A");
   }
   if (time === "Invalid date") return null;
   return time;
 }
 
 function shortDateFormatterV3WithHourLMinAMPMUTC(seconds) {
   return moment.utc(seconds).format("MMM DD, YYYY, hh:mm A");
 }
 
 
 function shortDateFormatterV2(seconds, tz) {
   let time;
   // console.log("DATE FORMATTER",seconds, tz)
   if (tz) {
     if (tz.includes('/')) {
       time = moment.unix(seconds).tz(tz).format("MMM DD, YYYY");
     }else{
     let utcOffset = findUtcOffset(tz);
     if (utcOffset|| utcOffset==="+00:00" ||utcOffset ===0) {
       time = moment.unix(seconds).utcOffset(utcOffset).format("MMM DD, YYYY");
     } else {
       time = moment.unix(seconds).format("MMM DD, YYYY");
     }
   } }else {
     time = moment.unix(seconds).format("MMM DD, YYYY");
   }
 
   if (time === "Invalid date") return null;
   return time;
 }
 //FOR WHEN TIMEZONE IS UNAVAILABLE
 export const shortDateFormatterV2WithoutTzForCard = (seconds) => {
   // console.log("shortDateFormatterV2WithoutTz, Got time as ", seconds)
   const date = new Date(seconds);
   // console.log("Got date as ", date)
   const utcDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
   const formattedDate = moment.unix(utcDate).format('MMM DD YYYY');
   // console.log("Got date as ", utcDate)
   return formattedDate;
 };
 
 
 function normalDateFormatter(seconds) {
   let time = moment.unix(seconds).format("dddd, MMMM Do YYYY");
   if (time === "Invalid date") return null;
   return time;
 }
 
 function longDateFormatter(seconds) {
   let time = moment.unix(seconds).format("dddd, MMMM Do YYYY, h:mm:ss a");
   if (time === "Invalid date") return null;
   return time;
 }
 
 function shortDateStringFormatter(seconds) {
   let time = moment.unix(seconds).format("ddd, MMM Do");
   if (time === "Invalid date") return null;
   return time;
 }
 
 function longDateStringFormatter(dateString) {
   return moment(dateString, moment.ISO_8601).format("dddd, MMMM Do");
 }
 
 function getPortOfData(activitiesList, activityName) {
   return activitiesList.find((s) => s.activity === activityName);
 }
 
 function calculateProgressPercentage(startDate, endDate, activityList) {
   let DatesList = [];
   // add startDate
   DatesList.push(startDate);
   // add activity dates
   activityList.filter((s) => s.milestoneSequenceNo % 1 === 0).forEach((s) => DatesList.push(s.date));
   // add endDate
   DatesList.push(endDate);
   // get total days
   let totalDays = moment(endDate, "MM/DD/YYYY").diff(moment(startDate, "MM/DD/YYYY"), "days");
   let progressList = [];
   DatesList.forEach((s, i) => {
     if (i < DatesList.length - 2) {
       let diff = moment(DatesList[i + 1], "MM/DD/YYYY").diff(moment(s, "MM/DD/YYYY"), "days");
       progressList.push((diff * 100) / totalDays);
     }
   });
   return progressList;
 }
 
 const iconPaddingMapper = {
   sea: "",
   land: "2px",
   port: "4px",
 };
 
 export const highlightElement = (openMarkerId) => {
   let els = document.querySelectorAll(`[data-id]`);
   // remove all highlighted shipment
   els.forEach((node) => (node.className = node.className.replace(/highlight/g, "")));
   let el = document.querySelectorAll(`[data-id="${openMarkerId}"]`);
   
   if (el.length > 0) {
     console.log("onChildClick : openMarker id highlightElement")
     el = el[0];
     let names = el.className;
     el.className = `${names} highlight`;
     el.scrollIntoView();
     // document.body.scrollTop = 0;
   }
 };
 
 export const unhighlightElement = () => {
   let els = document.querySelectorAll(`[data-id]`);
   // remove all highlighted shipment
   els.forEach((node) => (node.className = node.className.replace(/highlight/g, "")));
 };
 
 export const isSticky = (el) => {
   if (el) {
     let elRect = el.getBoundingClientRect();
     if (elRect.top <= 0) {
       el.classList.add("sticky");
     } else {
       el.classList.remove("sticky");
     }
   }
 };
 const isInViewportOfParent = (elem) => {
   var bounding = elem.getBoundingClientRect();
   var parent = elem.parentElement.getBoundingClientRect();
   return bounding.top >= parent.top && bounding.left >= parent.left && bounding.bottom <= parent.bottom && bounding.right <= parent.right;
 };
 
 export const scrollIntoView = (el) => {
   if (!isInViewportOfParent(el)) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
 };
 
 export const stickyHeader = (top) => {
   let el = document.getElementsByClassName("main-header-logo");
   if (top > 0) {
     if (el.length) el[0].classList.add("sticky");
   } else {
     if (el.length) el[0].classList.remove("sticky");
   }
 };
 
 export const download = (fileURL, fileName) => {
   // for non-IE
   if (!window.ActiveXObject) {
     let save = document.createElement("a");
     save.href = fileURL;
     let filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
     save.download = fileName || filename;
     if (navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
       document.location = save.href;
     } else {
       var evt = new MouseEvent("click", {
         view: window,
         bubbles: true,
         cancelable: false,
       });
       save.dispatchEvent(evt);
       (window.URL || window.webkitURL).revokeObjectURL(save.href);
     }
   }
 
   // for IE < 11
   else if (!!window.ActiveXObject && document.execCommand) {
     var _window = window.open(fileURL, "_blank");
     _window.document.close();
     _window.document.execCommand("SaveAs", true, fileName || fileURL);
     _window.close();
   }
 };
 
 const convertEpochToDate = (epoch, type, format) => {
   if (!epoch || epoch === "TBD") return null;
   if (type === 0) return shortDateFormatter(epoch / 1000);
   if (type === 1) return normalDateFormatter(epoch / 1000);
   if (type === 2) return longDateFormatter(epoch / 1000);
   if (type === 3) return customDateFormatter(epoch / 1000, format);
   if (type === 4) return shortDateFormatterV2WithHourLMinAMPM(epoch / 1000);
   if (type === 5) return shortDateFormatterV2(epoch / 1000);
   if (type === 6) return shortDateFormatterV3WithHourLMinAMPMUTC(epoch);
 
   return dateFormatter(epoch / 1000);
 };
 
 const convertEpochToDateWithTimeZone = (epoch, type, timezone) => {
   if (type === 3) return shortDateFormatterV2WithHourLMinAMPMTZ(epoch / 1000, timezone);
   if (type === 4) return shortDateFormatterV2WithHourLMinAMPM(epoch / 1000, timezone);
   if (type === 5) return shortDateFormatterV2(epoch / 1000, timezone);
   return dateFormatter(epoch / 1000);
 };
 
 // Validates user information for the 3 inital on-boarding modals
 const validateUserInformation = (userInfo, paymentInfo) => {
   let validInfo = [true, true, true];
   let companyInfo = get(userInfo, "userInfo.companyInformation", null);
   let bondInfo = get(userInfo, "userInfo.bondInfo", null);
 
   // COMPANY INFO CHECK
  //  try {
  //    if (get(companyInfo, "businessName", "").length <= 0) validInfo[0] = false;
  //    if (get(companyInfo, "businessType", "").length <= 0) validInfo[0] = false;
  //    if (get(companyInfo, "businessIncorporation", "").length <= 0) validInfo[0] = false;
  //    if (get(companyInfo, "identificationInfo.idtype", "").length <= 0) validInfo[0] = false;
  //    if (get(companyInfo, "identificationInfo.idnumber", "").length <= 0) validInfo[0] = false;
  //  } catch {
  //    validInfo[0] = false;
  //  }
 
  //  // BOND CHECK
  //  try {
  //    if (get(bondInfo, "bondAmount", "").length <= 0) validInfo[1] = false;
  //    if (get(bondInfo, "bondNumber", "").length <= 0) validInfo[1] = false;
  //    if (get(bondInfo, "bondOwner", "").length <= 0) validInfo[1] = false;
  //    if (get(bondInfo, "bondType", "").length <= 0) validInfo[1] = false;
  //  } catch {
  //    validInfo[1] = false;
  //  }
 
  // //  // PAYMENT CHECK
  //  try {
  //    // if (paymentInfo[0].paymentMethod.length <= 0) validInfo[2] = false;
  //    if (get(paymentInfo[0], "paymentInstrumentGuid", "").length <= 0) validInfo[2] = false;
  //    // if (paymentInfo[0].lastFourDigit.length <= 0) validInfo[2] = false;
  //    // if (paymentInfo[0].expiryDate.length <= 0) validInfo[2] = false;
  //    // if (paymentInfo[0].type.length <= 0) validInfo[2] = false;
  //  } catch (error) {
  //    validInfo[2] = false;
  //  }
 
   return validInfo;
 };
 
 const mapColor = {
   GREEN_MILESTONE: "#23B80B",
   RED_MILESTONE: "#23B80B",
   // RED_MILESTONE: '#D0021B',
   ORANGE_MILESTONE: "#F5A623",
   YELLOW_MILESTONE: "#F5A623",
   GRAY_MILESTONE: "#C4C4C4",
 };
 
 // Events we're interested in seeing
 const markerEvents = (event) => {
   let events = [];
   const { STATE_ISF_READY, STATE_ISF_ACCEPTED, STATE_ISF_ACCEPTED_WITH_WARNINGS } = firstMileJobStates;
   const { STATE_SHIPMENT_VESSEL_DEPARTED, STATE_ARRIVAL_NOTICE_RECEIVED, STATE_CARGO_RELEASE_ACCEPTED, STATE_CARGO_RELEASE_ACCEPTED_WITH_WARNINGS, STATE_ENTRY_SUMMARY_ACCEPTED, STATE_ENTRY_SUMMARY_ACCEPTED_WITH_WARNINGS, STATE_ASSIGNED_TO_BROKER, STATE_SHIPMENT_DELIVERED } = waterTransitJobStates;
   const { STATE_SHIPMENT_VESSEL_ARRIVED } = shipmentPhaseTruckerJobStates;
 
   Object.keys(firstMileJobStates).forEach((key) => {
     if (key === STATE_ISF_READY || key === STATE_ISF_ACCEPTED || key === STATE_ISF_ACCEPTED_WITH_WARNINGS) events[key] = true;
   });
 
   Object.keys(waterTransitJobStates).forEach((key) => {
     if (key === STATE_SHIPMENT_VESSEL_DEPARTED || key === STATE_ARRIVAL_NOTICE_RECEIVED || key === STATE_ASSIGNED_TO_BROKER || key === STATE_CARGO_RELEASE_ACCEPTED || key === STATE_CARGO_RELEASE_ACCEPTED_WITH_WARNINGS || key === STATE_ENTRY_SUMMARY_ACCEPTED || key === STATE_ENTRY_SUMMARY_ACCEPTED_WITH_WARNINGS || key === STATE_SHIPMENT_DELIVERED) events[key] = true;
   });
 
   Object.keys(shipmentPhaseTruckerJobStates).forEach((key) => {
     if (key === STATE_SHIPMENT_VESSEL_ARRIVED) events[key] = true;
   });
 
   if (events[event]) return true;
   return false;
 };
 
 const iconEvents = {
   STATE_SHIPMENT_VESSEL_DEPARTED: true,
   STATE_SHIPMENT_VESSEL_ARRIVED: true,
   STATE_SHIPMENT_DELIVERED: true,
   STATE_SHIPMENT_AIRPLANE_ARRIVED: true,
   STATE_SHIPMENT_AIRPLANE_DEPARTED: true,
 };
 
 
 
 const isCountryCanada = (country) => {
   if (!country) {
     return false
   }
   let countryUpperCase =country.toUpperCase()
   return (countryUpperCase === "CA" || countryUpperCase === "CANADA")
 }
 
 
 const shipmentTimelineEventNotHappened = {
   STATE_ISF_READY: "Shipment to be received",
   STATE_ISF_ACCEPTED: "ISF to be accepted",
   STATE_ISF_IN_PROCESS : "ISF in process",
   STATE_SHIPMENT_VESSEL_DEPARTED: "Vessel to depart from the origin port (based on ETA)",
   STATE_SHIPMENT_PLANE_TAKEOFFF: "Airplane not departed (Based on ETD)",
   STATE_ARRIVAL_NOTICE_RECEIVED: "Arrival Notice to be received",
   STATE_ASSIGNED_TO_BROKER: "Broker to be assigned",
   STATE_BROKER_READY : "Broker to be assigned",
   STATE_ASSIGNED_TO_AGENT : "Agent to be assigned",
   STATE_CUSTOMS_DECLARATION_FILED:"Customs Declaration to be  Filed,Permission to Progress to be received",
   STATE_CARGO_RELEASE_ACCEPTED: "Cargo Release to be accepted",
   STATE_ENTRY_SUMMARY_ACCEPTED: "Entry Summary to be accepted",
   STATE_ENTRY_ACCOUNTING_ACCEPTED : "Entry Accounting to be accepted",
   STATE_SHIPMENT_VESSEL_ARRIVED: "Vessel to arrive at destination port",
   STATE_SHIPMENT_PLANE_LANDED: "Airplane will land (Based on ETA)",
   STATE_SHIPMENT_DELIVERED: "Shipment will be completed",
   STATE_SHIPMENT_AIRPLANE_DEPARTED: "Vessel to depart from the origin port (based on ETA)",
   STATE_TRUCKER_DEPARTURE_SCHEDULE:"Trucker Scheduled to depart",
   STATE_CUSTOMS_DECLARATION:"Customs Declaration yet to be done",
   STATE_TRUCKER_ARRIVAL_SCHEDULE :"Trucker Scheduled to cross",
   //STATE_ENTRY_ACCEPTED : "Entry will be accepted and pre-lodged",
   STATE_ACCEPTED_ENTRY_ROUTE_6 : "Entry will be released"
 };
 
 const shipmentTimelineEventHappened = {
   STATE_ISF_READY: "Shipment was received",
   STATE_ISF_ACCEPTED: "ISF filing was accepted",
   STATE_ISF_IN_PROCESS : "ISF in process",
   STATE_SHIPMENT_VESSEL_DEPARTED: "Vessel has departed from the origin port (based on ETD)",
   STATE_SHIPMENT_PLANE_TAKEOFFF: "Airplane departed (Based on ETD)",
   STATE_SHIPMENT_PLANE_TAKEOFFF_ATD: "Airplane departed",
   STATE_ARRIVAL_NOTICE_RECEIVED: "Arrival Notice has been received",
   STATE_BROKER_READY : "Broker to be assigned",
   STATE_ASSIGNED_TO_BROKER: "Broker was assigned",
   STATE_ASSIGNED_TO_AGENT : "Agent was assigned",
   STATE_CUSTOMS_DECLARATION_FILED:"Customs Declaration Filed,Permission to Progress received",
   STATE_CARGO_RELEASE_ACCEPTED: "Cargo Release has been accepted",
   STATE_ENTRY_SUMMARY_ACCEPTED: "Entry Summary has been accepted",
   STATE_ENTRY_ACCOUNTING_ACCEPTED : "Entry Accounting has been accepted",
   STATE_SHIPMENT_VESSEL_ARRIVED: "Vessel has arrived at its destination port",
   STATE_SHIPMENT_PLANE_LANDED: "Airplane landed (Based on ETA)",
   STATE_SHIPMENT_PLANE_LANDED_ATA: "Airplane landed",
   STATE_SHIPMENT_DELIVERED: "Shipment completed",
   STATE_TRUCKER_DEPARTURE_SCHEDULE:"Trucker departing",
   STATE_CUSTOMS_DECLARATION:"Customs Declaration was successful",
   STATE_TRUCKER_ARRIVAL_SCHEDULE:"Trucker crossed",
   //STATE_ENTRY_ACCEPTED : "Entry was accepted and pre-lodged",
   STATE_ACCEPTED_ENTRY_ROUTE_6 : "Entry was released"
 
 };
 
 
 
 // Returns the important shipment timeline events we're looking for. Only the keys are needed, not the values.
 const getImportantShipmentTimelineEvents = () => {
   return Object.assign({}, shipmentTimelineEventHappened); // Return new object, as to not accidentally modify old one
 };
 
 // Calculates an estimate time for each non-occurred event
 const getShipmentTimelineEstimates = ({ event, startDate, endDate, expectedShipDepartureDate, expectedShipArrivalDate, sourceTimezone, destinationTimezone }) => {
   if (!event || !startDate || !expectedShipDepartureDate || !expectedShipArrivalDate) return null;
 
   let dayInMS = 86400000;
   startDate = parseInt(startDate);
   expectedShipDepartureDate = parseInt(expectedShipDepartureDate);
   expectedShipArrivalDate = parseInt(expectedShipArrivalDate);
   //let expectedPlaneDepartureDateStr= shortDateFormatterV2WithHourLMinAMPM(expectedShipArrivalDate,sourceTimezone) ;
   //let expectedShipArrivalDateStr= shortDateFormatterV2WithHourLMinAMPM(expectedShipArrivalDate,destinationTimezone) ;
 
   // let range = Math.floor((expectedShipArrivalDate - expectedShipDepartureDate) / dayInMS); // Days between ETA / ETD (rounded down);
 
   switch (event) {
     case "STATE_ISF_READY":
       return parseInt(startDate + 180000); // 3 minutes
     case "STATE_ISF_ACCEPTED":
     case "STATE_ISF_ACCEPTED_WITH_WARNINGS":
       return parseInt(startDate + 600000); // 10 minutes
     case "STATE_SHIPMENT_VESSEL_DEPARTED":
     case "STATE_TRUCKER_DEPARTURE_SCHEDULE":  
       return parseInt(expectedShipDepartureDate); // Shipment ETD
     case "STATE_SHIPMENT_VESSEL_ARRIVAL_NOTICE":
     case "STATE_ARRIVAL_NOTICE_RECEIVED":
       return parseInt(expectedShipArrivalDate - 6 * dayInMS); // 6-days before ETA
     case "STATE_ASSIGNED_TO_BROKER":
       return parseInt(expectedShipArrivalDate - 7 * dayInMS); // 1 week before ETA
     case "STATE_CARGO_RELEASE_ACCEPTED":
     case "STATE_CARGO_RELEASE_ACCEPTED_WITH_WARNINGS":
     case "STATE_ENTRY_SUMMARY_ACCEPTED":
     case "STATE_ENTRY_SUMMARY_ACCEPTED_WITH_WARNINGS":
       return parseInt(expectedShipArrivalDate - 7 * dayInMS); // Right after filing
     case "STATE_SHIPMENT_VESSEL_ARRIVED":
     case "STATE_TRUCKER_ARRIVAL_SCHEDULE":  
       return parseInt(expectedShipArrivalDate);
     case "STATE_SHIPMENT_DELIVERED":
       return parseInt(endDate);
     default:
       return 0;
   }
 };
 
 const demurrageStatusMapper = {
   CONTAINER_DEMURRAGE_NONE: " ",
   CONTAINER_DEMURRAGE_RUNNING: "Running",
   CONTAINER_DEMURRAGE_OVERRUN: "Running",
   CONTAINER_DEMURRAGE_STOPPED: "Stopped",
   CONTAINER_DEMURRAGE_CANCELLED: "Missing Info",
 
   CONTAINER_PER_DIEM_NONE: " ",
   CONTAINER_PER_DIEM_RUNNING: "Running",
   CONTAINER_PER_DIEM_OVERRUN: "Running",
   CONTAINER_PER_DIEM_STOPPED: "Stopped",
   CONTAINER_PER_DIEM_CANCELLED: "Missing Info",
 };
 
 const containerCardStatusMapper = {
   CONTAINER_DOCK_ON_VESSEL: "GROUNDED",
   CONTAINER_DOCK_UNLOADED_FROM_VESSEL: "GROUNDED",
   CONTAINER_DOCK_READY_FOR_PICKUP: "GROUNDED",
   CONTAINER_DOCK_PICKED_UP: "GATE OUT",
   CONTAINER_DOCK_RETURNED: "GATE IN",
   CONTAINER_DOCK_DONE: "MANUALLY COMPLETED",
 
   CONTAINER_DEMURRAGE_RUNNING: "GROUNDED",
   CONTAINER_DEMURRAGE_OVERRUN: "GROUNDED",
   CONTAINER_DEMURRAGE_STOPPED: "GATE OUT",
   CONTAINER_DEMURRAGE_CANCELLED: "MANUALLY COMPLETED",
 
   CONTAINER_PER_DIEM_RUNNING: "GATE OUT",
   CONTAINER_PER_DIEM_OVERRUN: "GATE OUT",
   CONTAINER_PER_DIEM_STOPPED: "GATE IN",
   CONTAINER_PER_DIEM_CANCELLED: "MANUALLY COMPLETED",
 };
 
 const containerCardSubStatusMapper = {
   CONTAINER_DOCK_ON_VESSEL: { text: "NOT READY FOR PICKUP", color: "#FF0000" },
   CONTAINER_DOCK_UNLOADED_FROM_VESSEL: { text: "NOT READY FOR PICKUP", color: "#FF0000" },
   CONTAINER_DOCK_READY_FOR_PICKUP: { text: "READY FOR PICKUP", color: "rgb(35, 184, 11)" },
   CONTAINER_DOCK_PICKED_UP: { text: " ", color: "rgb(35, 184, 11)" },
   CONTAINER_DOCK_RETURNED: { text: "COMPLETED", color: "rgb(35, 184, 11)" },
   CONTAINER_DOCK_DONE: { text: " ", color: "#AAAAAA" },
 
   CONTAINER_DEMURRAGE_RUNNING: { text: "READY FOR PICKUP", color: "rgb(35, 184, 11)" },
   CONTAINER_DEMURRAGE_OVERRUN: { text: "READY FOR PICKUP", color: "rgb(35, 184, 11)" },
   CONTAINER_DEMURRAGE_STOPPED: { text: " ", color: "rgb(35, 184, 11)" },
   CONTAINER_DEMURRAGE_CANCELLED: { text: " ", color: "#AAAAAA" },
 
   CONTAINER_PER_DIEM_RUNNING: { text: " ", color: "rgb(35, 184, 11)" },
   CONTAINER_PER_DIEM_OVERRUN: { text: " ", color: "rgb(35, 184, 11)" },
   CONTAINER_PER_DIEM_STOPPED: { text: "COMPLETED", color: "rgb(35, 184, 11)" },
   CONTAINER_PER_DIEM_CANCELLED: { text: " ", color: "#AAAAAA" },
 };
 
 const filterDetailsMapper = {
   UNLOAD_FROM_VESSEL: "Not Ready for Pickup",
   READY_FOR_PICKUP: "Ready for Pickup",
   DEMURRAGE_START: "Demurrage Start",
   DEMURRAGE_EXPIRED: "Demurrage Expired",
   PER_DIEM_START: "Per Diem Start",
   PER_DIEM_EXPIRED: "Per Diem End",
   GATE_OUT: "Gate Out",
   GATE_IN: "Gate In",
 };
 
 const popOutDescriptionMapper = {
   UNLOAD_FROM_VESSEL: "GROUNDED",
   READY_FOR_PICKUP: "READY FOR PICKUP",
   DEMURRAGE_START: "READY FOR PICKUP",
   DEMURRAGE_EXPIRED: "READY FOR PICKUP",
   GATE_OUT: "GATE OUT",
   PER_DIEM_START: "GATE OUT",
   PER_DIEM_EXPIRED: "GATE OUT",
   CONTAINER_DONE: "GATE IN",
   GATE_IN: "GATE IN",
 };
 
 const workflowStateMap = {
   1 : "CONTAINER_DOCK_ON_VESSEL",
   2 : "CONTAINER_DOCK_UNLOADED_FROM_VESSEL",
   3 : "CONTAINER_DOCK_READY_FOR_PICKUP",
   4 : "CONTAINER_DOCK_PICKED_UP",
   5 : "CONTAINER_DOCK_RETURNED",
   6 : "CONTAINER_COMPLETED",
   7 : "CONTAINER_DEMURRAGE_NONE",
   8 : "CONTAINER_DEMURRAGE_RUNNING",
   9 : "CONTAINER_DEMURRAGE_OVERRUN",
   10 : "CONTAINER_DEMURRAGE_STOPPED",
   11 : "CONTAINER_PER_DIEM_NONE",
   12 : "CONTAINER_PER_DIEM_RUNNING",
   13 : "CONTAINER_PER_DIEM_OVERRUN",
   14 : "CONTAINER_PER_DIEM_STOPPED",
   135 : "CONTAINER_DEMURRAGE_CANCELLED",
   136 : "CONTAINER_PER_DIEM_CANCELLED",
   137 : "CONTAINER_DOCK_DONE",
   0 : "WORKFLOW_STATE_NONE",
   95 : "STATE_OPS_NONE",
   15 : "STATE_OPS_NEW",
   96 : "STATE_OPS_ASSIGNED",
   16 : "STATE_OPS_IN_PROCESS",
   17 : "STATE_OPS_STUCK",
   18 : "STATE_OPS_READY",
   19 : "STATE_OPS_DONE",
   20 : "STATE_ISF_NONE",
   21 : "STATE_ISF_NEW",
   22 : "STATE_ISF_ASSIGNED",
   23 : "STATE_ISF_IN_PROCESS",
   24 : "STATE_ISF_STUCK",
   25 : "STATE_ISF_READY",
   26 : "STATE_ISF_FILED",
   27 : "STATE_ISF_SKIPPED",
   28 : "STATE_ISF_ACCEPTED",
   29 : "STATE_ISF_ACCEPTED_WITH_WARNINGS",
   30 : "STATE_ISF_ACCEPTED_NO_BILL_MATCH",
   31 : "STATE_ISF_ACCEPTED_BILL_MATCH",
   32 : "STATE_ISF_REJECTED",
   97 : "STATE_ISF_RETRACT_FILED",
   98 : "STATE_ISF_RETRACT_ACCEPTED",
   99 : "STATE_ISF_RETRACT_REJECTED",
   100 : "STATE_ISF_REPLACE_FILED",
   101 : "STATE_ISF_REPLACE_ACCEPTED",
   102 : "STATE_ISF_REPLACE_REJECTED",
   33 : "STATE_BROKER_NONE",
   34 : "STATE_BROKER_READY",
   134 : "STATE_BROKER_IN_QUEUE",
   35 : "STATE_ARRIVAL_NOTICE_RECEIVED",
   36 : "STATE_CHECKPOINT_FAILED",
   37 : "STATE_ASSIGNED_TO_BROKER",
   38 : "STATE_ENTRY_SUMMARY_NONE",
   39 : "STATE_ENTRY_SUMMARY_NEW",
   40 : "STATE_ENTRY_SUMMARY_IN_PROCESS",
   41 : "STATE_ENTRY_SUMMARY_STUCK",
   42 : "STATE_ENTRY_SUMMARY_READY",
   43 : "STATE_ENTRY_SUMMARY_FILED",
   44 : "STATE_ENTRY_SUMMARY_ACCEPTED",
   46 : "STATE_ENTRY_SUMMARY_REJECTED",
   186 : "STATE_ENTRY_SUMMARY_ACCEPTED_WITH_WARNINGS",
   187 : "STATE_ENTRY_SUMMARY_DISPOSITION",
   188 : "STATE_ENTRY_SUMMARY_CANCELLED",
   189 : "STATE_ENTRY_SUMMARY_INACTIVATED",
   103 : "STATE_ENTRY_SUMMARY_RETRACT_FILED",
   104 : "STATE_ENTRY_SUMMARY_RETRACT_ACCEPTED",
   105 : "STATE_ENTRY_SUMMARY_RETRACT_REJECTED",
   106 : "STATE_ENTRY_SUMMARY_REPLACE_FILED",
   107 : "STATE_ENTRY_SUMMARY_REPLACE_ACCEPTED",
   108 : "STATE_ENTRY_SUMMARY_REPLACE_REJECTED",
   47 : "STATE_CARGO_RELEASE_NONE",
   48 : "STATE_CARGO_RELEASE_NEW",
   49 : "STATE_CARGO_RELEASE_ASSIGNED",
   50 : "STATE_CARGO_RELEASE_IN_PROCESS",
   51 : "STATE_CARGO_RELEASE_STUCK",
   52 : "STATE_CARGO_RELEASE_READY",
   53 : "STATE_CARGO_RELEASE_FILED",
   133 : "STATE_CARGO_RELEASE_ACCEPTED",
   55 : "STATE_CARGO_RELEASE_ACCEPTED_WITH_WARNINGS",
   56 : "STATE_CARGO_RELEASE_REJECTED",
   57 : "STATE_CARGO_RELEASE_ACKNOWLEDGED",
   109 : "STATE_CARGO_RELEASE_RETRACT_FILED",
   110 : "STATE_CARGO_RELEASE_RETRACT_ACCEPTED",
   111 : "STATE_CARGO_RELEASE_RETRACT_REJECTED",
   112 : "STATE_CARGO_RELEASE_REPLACE_FILED",
   113 : "STATE_CARGO_RELEASE_REPLACE_ACCEPTED",
   114 : "STATE_CARGO_RELEASE_REPLACE_REJECTED",
   124 : "STATE_CARGO_RELEASE_CANCEL_FILED",
   125 : "STATE_CARGO_RELEASE_CANCEL_ACCEPTED",
   126 : "STATE_CARGO_RELEASE_CANCEL_REJECTED",
   127 : "STATE_CARGO_RELEASE_CHANGE_FILED",
   128 : "STATE_CARGO_RELEASE_CHANGE_ACCEPTED",
   129 : "STATE_CARGO_RELEASE_CHANGE_REJECTED",
   130 : "STATE_CARGO_RELEASE_AMEND_FILED",
   131 : "STATE_CARGO_RELEASE_AMEND_ACCEPTED",
   132 : "STATE_CARGO_RELEASE_AMEND_REJECTED",
   58 : "STATE_KX_ISF_FEE_NONE",
   59 : "STATE_KX_ISF_FEE_STARTED",
   60 : "STATE_KX_ISF_FEE_DECLINED",
   61 : "STATE_KX_ISF_FEE_ERROR",
   62 : "STATE_KX_ISF_FEE_DONE",
   63 : "STATE_KX_ES_FEE_NONE",
   64 : "STATE_KX_ES_FEE_STARTED",
   65 : "STATE_KX_ES_FEE_DECLINED",
   66 : "STATE_KX_ES_FEE_ERROR",
   67 : "STATE_KX_ES_FEE_DONE",
   68 : "STATE_CBP_FEE_NONE",
   69 : "STATE_CBP_FEE_STARTED",
   70 : "STATE_CBP_FEE_DECLINED",
   71 : "STATE_CBP_FEE_ERROR",
   72 : "STATE_CBP_FEE_DONE",
   73 : "STATE_OTHER_CBP_FEE_NONE",
   74 : "STATE_OTHER_CBP_FEE_STARTED",
   75 : "STATE_OTHER_CBP_FEE_DECLINED",
   76 : "STATE_OTHER_CBP_FEE_ERROR",
   77 : "STATE_OTHER_CBP_FEE_DONE",
   78 : "STATE_BROKER_FEE_NONE",
   79 : "STATE_BROKER_FEE_CR_ACCEPTED",
   80 : "STATE_BROKER_FEE_ES_ACCEPTED",
   81 : "STATE_BROKER_FEE_STARTED",
   82 : "STATE_BROKER_FEE_DECLINED",
   83 : "STATE_BROKER_FEE_ERROR",
   84 : "STATE_BROKER_FEE_DONE",
   85 : "STATE_ENTRY_ACCOUNTING_NONE",
   86 : "STATE_ENTRY_ACCOUNTING_NEW",
   87 : "STATE_ENTRY_ACCOUNTING_IN_PROCESS",
   88 : "STATE_ENTRY_ACCOUNTING_READY",
   89 : "STATE_ENTRY_ACCOUNTING_STUCK",
   90 : "STATE_ENTRY_ACCOUNTING_FILED",
   91 : "STATE_ENTRY_ACCOUNTING_ACKNOWLEDGED",
   92 : "STATE_ENTRY_ACCOUNTING_ACCEPTED",
   94 : "STATE_ENTRY_ACCOUNTING_REJECTED",
   115 : "STATE_ENTRY_ACCOUNTING_CANCEL_FILED",
   116 : "STATE_ENTRY_ACCOUNTING_CANCEL_ACCEPTED",
   117 : "STATE_ENTRY_ACCOUNTING_CANCEL_REJECTED",
   118 : "STATE_ENTRY_ACCOUNTING_CHANGE_FILED",
   119 : "STATE_ENTRY_ACCOUNTING_CHANGE_ACCEPTED",
   120 : "STATE_ENTRY_ACCOUNTING_CHANGE_REJECTED",
   121 : "STATE_ENTRY_ACCOUNTING_AMEND_FILED",
   122 : "STATE_ENTRY_ACCOUNTING_AMEND_ACCEPTED",
   123 : "STATE_ENTRY_ACCOUNTING_AMEND_REJECTED",
   138 : "STATE_OPERATOR_1_ASSIGNED",
   139 : "STATE_OPERATOR_2_ASSIGNED",
   140 : "STATE_OPERATOR_1_IN_PROCESS",
   141 : "STATE_OPERATOR_2_IN_PROCESS",
   142 : "STATE_OPERATOR_1_STUCK",
   143 : "STATE_OPERATOR_2_STUCK",
   144 : "STATE_OPERATOR_1_READY",
   145 : "STATE_OPERATOR_2_READY",
   146 : "STATE_SUPERVISOR_DONE",
   147 : "STATE_SHIPMENT_DELIVERED",
   148 : "STATE_SUPERVISOR_NONE",
   149 : "STATE_SUPERVISOR_IN_PROCESS",
   150 : "STATE_SAVE_DONE",
   151 : "STATE_OPS_SKIPPED",
   152 : "STATE_DO_NONE",
   153 : "STATE_DO_NEW",
   154 : "STATE_DO_IN_PROCESS",
   155 : "STATE_DO_DONE",
   156 : "STATE_DO_APPROVED",
   157 : "STATE_DO_PUBLISHED",
   159 : "STATE_DO_GENERATE_PDF",
   158 : "WORKFLOW_STATE_ANY",
   171 : "STATE_WHEELS_NONE",
   172 : "STATE_FLIGHT_SCHEDULED",
   173 : "STATE_FLIGHT_SCHEDULE_CHANGED",
   160 : "STATE_WHEELS_UP",
   161 : "STATE_WHEELS_DOWN",
   162 : "STATE_PREP_NONE",
   163 : "STATE_PREP_NEW",
   164 : "STATE_PREP_SIMHASH_MATCHED",
   165 : "STATE_PREP_MANUAL_MATCH",
   166 : "STATE_PREP_IN_PROCESS",
   167 : "STATE_PREP_DONE",
   168 : "STATE_PREP_MERGED",
   169 : "STATE_PREP_NEW_CREATED",
   170 : "STATE_PREP_ARCHIVED",
   177 : "STATE_PREP_FINAL",
   174 : "STATE_DOCUMENT_NONE",
   175 : "STATE_ADD_DOCUMENT",
   176 : "STATE_ADD_DOCUMENT_DONE",
   178 : "STATE_PSC_NONE",
   179 : "STATE_PSC_NEW",
   180 : "STATE_PSC_IN_PROCESS",
   181 : "STATE_PSC_READY",
   182 : "STATE_PSC_FILED",
   183 : "STATE_PSC_ACCEPTED",
   184 : "STATE_PSC_REJECTED",
   185 : "STATE_PSC_CANCELLED",
   190 : "STATE_DOCUMENT_NEW",
   191 : "STATE_DOCUMENT_REQUIRED",
   192 : "STATE_DOCUMENT_FILED",
   193 : "STATE_DOCUMENT_ACKNOWLEDGED",
   194 : "STATE_DOCUMENT_REJECTED",
   195 : "STATE_BH_NONE",
   196 : "STATE_BH_ASSIGNED",
   197 : "STATE_BH_BROKER_ASSIGNED",
   198 : "STATE_BH_BROKER_IN_PROCESS",
   199 : "STATE_BH_BROKER_DONE",
   200 : "STATE_BH_BROKER_SURRENDER",
   201 : "STATE_BH_BROKER_UNASSIGNED",
   202 : "STATE_BH_UNASSIGNED",
   203 : "STATE_BH_SURRENDER",
   204 : "STATE_RNS_MESSAGE_CONTENT_ACCEPTED",
   205 : "STATE_RNS_MESSAGE_CONTENT_REJECTED",
   206 : "STATE_RNS_GOODS_RELEASED",
   207 : "STATE_RNS_GOODS_REQUIRED_FOR_EXAMINATION_REFERRED",
   208 : "STATE_RNS_GOODS_MAY_MOVE_DETAIN_TO_DESTINATION",
   209 : "STATE_RNS_DECLARATION_ACCEPTED_AWAITING_ARRIVAL_OF_GOODS",
   210 : "STATE_RNS_DECLARATION_ACCEPTED_AWAITING_CUSTOMS_PROCESSING",
   211 : "STATE_RNS_ERROR_MESSAGE",
   212 : "STATE_RNS_AUTHORISED_TO_DELIVER_CSA_SHIPMENT",
   213 : "STATE_RNS_MESSAGE_NONE",
   236 : "STATE_VESSEL_NONE",
   214 : "STATE_VESSEL_DEPARTED",
   215 : "STATE_VESSEL_ARRIVED",
   216 : "STATE_VESSEL_ETA_CHANGED",
   217 : "STATE_ENTRY_NONE",
   218 : "STATE_ENTRY_NEW",
   219 : "STATE_ENTRY_ASSIGNED",
   220 : "STATE_ENTRY_IN_PROCESS",
   221 : "STATE_ENTRY_STUCK",
   222 : "STATE_ENTRY_READY",
   223 : "STATE_ENTRY_FILED",
  //  224 : "STATE_ENTRY_ACCEPTED",
  //  225 : "STATE_ENTRY_ACCEPTED_WITH_WARNINGS",
   226 : "STATE_ENTRY_REJECTED",
   242 : "STATE_ENTRY_FEC_FAILED",
   227 : "STATE_ACCEPTED_ENTRY_ROUTE_0",
   228 : "STATE_ACCEPTED_ENTRY_ROUTE_1",
   229 : "STATE_ACCEPTED_ENTRY_ROUTE_2",
   230 : "STATE_ACCEPTED_ENTRY_ROUTE_3",
   231 : "STATE_ACCEPTED_ENTRY_ROUTE_5",
   232 : "STATE_ACCEPTED_ENTRY_ROUTE_6",
   233 : "STATE_ACCEPTED_ENTRY_ROUTE_E",
   234 : "STATE_ACCEPTED_ENTRY_ROUTE_F",
   235 : "STATE_ACCEPTED_ENTRY_ROUTE_H",
   240 : "STATE_ENTRY_AMEND_IN_PROCESS",
   241 : "STATE_ENTRY_AMEND_READY",
   237 : "STATE_BADGE_ASSIGNED",
   238 : "STATE_WAITING_FOR_INVENTORY_CLAIM",
   239 : "STATE_INVENTORY_CLAIMED",
 }
 
 const getWorkFlowNameFromVal = (value) => {
   if (value in workflowStateMap) {
     return workflowStateMap[value]
   } else {
     return "WORKFLOW_STATE_NONE"
   }
 }
 
 const popOutDescriptionStatus = (description) => {
   if (popOutDescriptionMapper[description]) return popOutDescriptionMapper[description];
   return description;
 };
 
 const demurrageStatus = (description) => {
   if (demurrageStatusMapper[description]) return demurrageStatusMapper[description];
   return description;
 };
 
 const containerCardStatus = (description) => {
   if (containerCardStatusMapper[description]) return containerCardStatusMapper[description];
   return description;
 };
 
 const filterDetailsStatus = (description) => {
   if (filterDetailsMapper[description]) return filterDetailsMapper[description];
   return description;
 };
 
 const formatDocName = (type) => {
   let names = {
     PACKING_LIST: `Packing List`,
     BOL: `Bill Of Lading`,
     INVOICE: `Commercial Invoice`,
     CUSTOMS_DOC: "CBP Document",
   };
   if (!names[type]) return "Misc.";
   return names[type];
 };
 
 const getCookieValue = (name) => {
   var b = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
   return b ? b.pop() : "";
 };
 
 const formatTimeRemaining = (epoch) => {
   let seconds = parseInt(epoch / 1000, 10);
   let days = Math.floor(seconds / (3600 * 24));
   seconds -= days * 3600 * 24;
   let hrs = Math.floor(seconds / 3600);
   seconds -= hrs * 3600;
   let mnts = Math.floor(seconds / 60);
   seconds -= mnts * 60;
   if (days > 0) {
     if (days === 1) return "1 day";
     return `${days} Days`;
   }
   if (hrs > 0) {
     if (hrs === 1) return `1:${mnts} hrs`;
     return `${hrs} hrs`;
   }
   if (mnts > 0) return `${mnts} mins`;
   return `${seconds} s`;
 };
 
 const filterShipmentsByStatus = (shipments, status) => {
   let result = [];
   for (let i = 0; i < shipments.length; i++) {
     if (shipments[i].status === status) result.push(shipments[i]);
   }
   return result;
 };
 
 const getRandomInt = (max) => {
   return Math.floor(Math.random() * Math.floor(max));
 };
 
 const addStatus = (timelineData) => {
   let shipmentIds = Object.keys(timelineData);
   for (let i = 0; i < shipmentIds.length; i++) {
     let id = shipmentIds[i];
     let color;
     if (timelineData[id] && timelineData[id].waterTransit && timelineData[id].waterTransit !== {} && timelineData[id].waterTransit.nodes) {
       color = timelineData[id].waterTransit.nodes[timelineData[id].waterTransit.nodes.length - 1].color;
       // console.log('1 color', id, color, timelineData[id].waterTransit.nodes[timelineData[id].waterTransit.nodes.length - 1])
     } else if (timelineData[id] && timelineData[id].firstMile && timelineData[id].firstMile !== {} && timelineData[id].firstMile.nodes) {
       color = timelineData[id].firstMile.nodes[timelineData[id].firstMile.nodes.length - 1].color;
       // console.log('2 color', id, color, timelineData[id].firstMile.nodes[timelineData[id].firstMile.nodes.length -1])
     } else {
       // console.log ('something else happened')
     }
     timelineData[id].status = color;
   }
 };
 
 const getColor = (obj, id) => {
   let color;
   if (obj[id].waterTransit !== {}) {
     color = obj[id].waterTransit.nodes[obj[id].waterTransid.nodes.length - 1].color;
   } else if (obj[id].waterTransit === {} && obj[id].firstMile !== {}) {
     color = obj[id].firstMile.nodes[obj[id].firstMile.nodes.length - 1].color;
   } else {
     return null;
   }
 
   return color;
 };
 
 const timelineLoop = (timelineData) => {
   for (let shipmentId in timelineData) {
     timelineData[shipmentId] = JSON.parse(timelineData[shipmentId]);
   }
 };
 
 const addToShipmentsToShipHash = (shipHash, shipments) => {
   shipments.forEach((shipment) => {
     shipHash[shipment.id] = shipment.breifInfocarrierId;
   });
   return shipHash;
 };
 
 // Takes in shipments repsonse and outputs shipmentIds to use in get_timeline request, vessel and port body used for location/details request and vessel and port relationships to shipments
 const processShipments = (shipments) => {
   let vessels = {};
   let flights = {};
   let ports = {};
   let crossBorderPorts ={};
   let trucks = {}; // A shipment's containers, whose phase is SHIPMENT_PHASE_TRUCKER, will be considered 'trucks' in terms of UI
   let timelineBody = [];
   let truckBody=[];
   let vesselBody = [];
   let flightBody = [];
   let portBody = [];
   let containerBody = [];
 
   // debugger
   shipments.forEach((shipment) => {
     let shipmentType = get(shipment, "shipment", null) !== null ? markerTypes.vessel : get(shipment, "container", null) !== null ? markerTypes.container : null;
     let shipmentId = shipmentType === markerTypes.vessel ? get(shipment, "shipment.id", null) : shipmentType === markerTypes.container ? get(shipment, "container.shipment.shipmentId", null) : null;
     let shipmentData = shipmentType === markerTypes.vessel ? get(shipment, "shipment", null) : shipmentType === markerTypes.container ? get(shipment, "container.shipment", null) : null;
     let shipmentPhase = get(shipmentData, "shipmentPhase", null);
     let carrierId = shipmentType === markerTypes.vessel || shipmentType === markerTypes.plane ? get(shipmentData, "carrierId", "") : get(shipment, "container.containerNumber", "");
     let flightNumber = get(shipment, "shipment.flightNumber", null);
     let portOfUnladingCode = shipmentType === markerTypes.vessel ? get(shipmentData, "portOfUnladingCode", "") : get(shipmentData, "portofunladingcode", "");
     let portOfLadingCode = shipmentType === markerTypes.vessel ? get(shipmentData, "portOfLadingCode", "") : get(shipmentData, "portladingcode", "");
     let expectedShipArrivalDate = get(shipmentData, "expectedShipArrivalDate", null);
     let expectedShipDepartureDate = get(shipmentData, "expectedShipDepartureDate", null);
     let ata = get(shipment, "shipment.ata", null);
     let atd = get(shipment, "shipment.atd", null);
     let truckNumber = get(shipment, "shipment.truckNumber", null);
     let mot = shipmentType != markerTypes.container ? get(shipment, "shipment.modeOfTransport", null) :  get(shipment, "container.shipment.modeoftransport", null);
     let containersOnTrucks = get(shipmentData, "containers", []);
     knlog(DBG_SEARCH, ["ProcessShipment","Mot : ",mot, "shipmentType", shipmentType, "shipment",shipment])
 
     let departureTime = parseInt(expectedShipDepartureDate);
     let arrivalTime = parseInt(expectedShipArrivalDate);
     if (atd && atd != 0) {
       departureTime = atd;
     }
     if (ata && ata != 0) {
       arrivalTime = ata;
     }
     // console.log("Arrival   Time ", arrivalTime, " Departure port ", departureTime)
 
     // These trims shouldn't be needed, but API is sending values with leading-spaces (ex: " 12345")
     carrierId = carrierId.trim();
     portOfUnladingCode = portOfUnladingCode.trim();
     portOfLadingCode = portOfLadingCode.trim();
 
     // Add each shipment to id array to be used by timeline request
     timelineBody.push(shipmentId);
     if (shipmentPhase === "SHIPMENT_PHASE_TRUCKER") {
       containersOnTrucks.forEach((container) => {
         // if (!trucks[container]) { // if not added yet, add vessel with shipment association
         //   trucks[container] = {
         //     type: markerTypes.truck,
         //     shipments: { [shipment.id]: true }
         //   }
 
         containerBody.push(container.toString());
         // } else { // just add association
         // trucks[container].shipments[shipment.id] = true
         // }
       });
     } else {
       try {
         if (mot === "AIR") {
           // console.log("Air : ",shipmentId,  flightNumber, "portOfUnladingCode ", portOfUnladingCode, " portOfLadingCode ",portOfLadingCode," arrival ", arrivalTime, " departure ", departureTime, " now ", Date.now() )
           if (arrivalTime > Date.now() && departureTime <= Date.now()) {
             if (!flights[flightNumber]) {
               // if not added yet, add flight with shipment association and to request for location
               flights[flightNumber] = {
                 type: markerTypes.plane,
                 shipments: { [shipmentId]: shipment },
                 portOfLadingCode: shipment.shipment.portOfLadingCode,
                 portOfUnladingCode: shipment.shipment.portOfUnladingCode,
                 departureTime: departureTime,
                 arrivalTime: arrivalTime,
               };
             } else {
               // just add association
               flights[flightNumber].shipments[shipmentId] = shipment;
             }
           }
 
           // if (portOfLadingCode && parseInt(arrivalTime) <= Date.now()) {
           if (!ports[portOfLadingCode]) {
             // if not added yet, add port with shipment associationt
             // Consider this port if either of this is true
             // 1. Flight is yet to depart
             // 2. Flight is in air
             if (departureTime >= Date.now() || (arrivalTime > Date.now() && departureTime <= Date.now())) {
               //shipment on airport not yet departed
               ports[portOfLadingCode] = {
                 type: markerTypes.airport,
                 shipments: { [shipmentId]: shipment },
               };
               portBody.push(portOfLadingCode);
             } else {
               // ports[portOfLadingCode] = {
               //   type: markerTypes.airport,
               //   shipments: {},
               // };
             }
             // portBody.push(portOfLadingCode);
           } else {
             // just add association
             if (departureTime >= Date.now()) {
               ports[portOfLadingCode].shipments[shipmentId] = shipment;
             }
           }
           // }
 
           // if (portOfUnladingCode && parseInt(departureTime) >= Date.now()) {
           if (!ports[portOfUnladingCode]) {
             // Consider this port if either of this is true
             // 1. Flight has lander
             // 2. Flight is in air
             if (arrivalTime <= Date.now() || (arrivalTime > Date.now() && departureTime <= Date.now())) {
               ports[portOfUnladingCode] = {
                 // if not added yet, add port with shipment association
                 type: markerTypes.airport,
                 shipments: { [shipmentId]: shipment },
               };
               portBody.push(portOfUnladingCode);
             } else {
               // ports[portOfUnladingCode] = {
               //   // if not added yet, add port with shipment association
               //   type: markerTypes.airport,
               //   shipments: {},
               // };
             }
           } else {
             // just add association
             if (arrivalTime <= Date.now()) {
               ports[portOfUnladingCode].shipments[shipmentId] = shipment;
             }
           }
           // }
           // }
         } else if (mot === "OCEAN" || shipmentType === markerTypes.container){ //OCEAN
           // PLACE SHIPMENT ON VESSEL MARKER
           // if (parseInt(expectedShipArrivalDate) > Date.now() && parseInt(expectedShipDepartureDate) <= Date.now()) {
           if (arrivalTime > Date.now() && departureTime <= Date.now()) {
             if (!vessels[carrierId]) {
               // if not added yet, add vessel with shipment association and to request for location
               vessels[carrierId] = {
                 type: markerTypes.vessel,
                 shipments: { [shipmentId]: shipment },
               };
               vesselBody.push({ entityId: carrierId ? carrierId : null });
             } else {
               // just add association
               vessels[carrierId].shipments[shipmentId] = shipment;
             }
           }
 
           // PLACE SHIPMENT ON PORT MARKER
           else {
             if (portOfUnladingCode && parseInt(expectedShipArrivalDate) <= Date.now()) {
               // PORT OF UNLADING PLACEMENT
               if (!ports[portOfUnladingCode]) {
                 ports[portOfUnladingCode] = {
                   // if not added yet, add port with shipment association
                   type: markerTypes.port,
                   shipments: { [shipmentId]: shipment },
                 };
                 portBody.push(portOfUnladingCode);
               } else {
                 // just add association
                 ports[portOfUnladingCode].shipments[shipmentId] = shipment;
               }
             }
 
             if (portOfUnladingCode && parseInt(expectedShipDepartureDate) >= Date.now()) {
               // PORT OF LADING PLACEMENT
               if (!ports[portOfLadingCode]) {
                 // if not added yet, add port with shipment associationt
                 ports[portOfLadingCode] = {
                   type: markerTypes.port,
                   shipments: { [shipmentId]: shipment },
                 };
                 portBody.push(portOfLadingCode);
               } else {
                 // just add association
                 ports[portOfLadingCode].shipments[shipmentId] = shipment;
               }
             }
 
             if (shipmentType === markerTypes.container && portOfUnladingCode) {
               // PORT OF UNLADING PLACEMENT (CONTAINERS)
               if (!ports[portOfUnladingCode]) {
                 // if not added yet, add port with shipment association
                 ports[portOfUnladingCode] = {
                   type: markerTypes.port,
                   shipments: { [carrierId]: shipment },
                 };
                 portBody.push(portOfUnladingCode);
               } else {
                 // just add association
                 ports[portOfUnladingCode].shipments[carrierId] = shipment;
               }
             }
           }
         } else if(mot === "TRUCK"){
           if ( portOfUnladingCode) {
             // PORT OF UNLADING PLACEMENT (CONTAINERS)
             if (!ports[portOfUnladingCode]) {
               // if not added yet, add port with shipment association
               ports[portOfUnladingCode] = {
                 type: markerTypes.crossBorderPort,
               trucksAtThisPort : {[truckNumber] :{ [shipmentId]: shipment }}, 
                 shipments: { [shipmentId]: shipment },
               };
               portBody.push(portOfUnladingCode);
             } else {
               // just add association
               ports[portOfUnladingCode].shipments[shipmentId] = shipment;
               ports[portOfUnladingCode].trucksAtThisPort[truckNumber][shipmentId]= shipment;
             }
           }
         }
       } catch (e) {
         console.error("Shipment has incomplete carrier or port info", shipment);
       }
     }
   });
   return {
     timelineBody, // array of all unique shipment Ids returned from original fetch shipments (used to get minitimeline info)
     vesselBody, // Body for vessel request consisting of only unique and previosuly unknown carrierId's
     flightBody,
     portBody, // Body for port request consisting of only unique and previosuly unknown port Id's
     containerBody, //  Body for container request consisting of only unique and previosuly unknown port Id's
     vessels, // Information (vessel to shipment relationship) for vessels to be added to vesselDetailList hash once vessel detail API returns
     flights,
     ports, // Information (vessel to shipment relationship) for ports to be added to portDetailList hash once port detail API returns
     trucks,
     crossBorderPorts
   };
 };
 
 const getCoors = ({ carrierId, shipmentInfo, portDetailList, vesselDetailList, type }) => {
   let lat;
   let lon;
   let portOfUnladingCode = type === markerTypes.vessel ? get(shipmentInfo, "portOfUnladingCode", null) : get(shipmentInfo, "portofunladingcode", null);
   let portOfLadingCode = type === markerTypes.vessel ? get(shipmentInfo, "portOfLadingCode", null) : get(shipmentInfo, "portladingcode", null);
   console.log("getCoors : ", portDetailList, vesselDetailList)
 
   // If the shipment has not left the origin port yet, use the portOfLadingCode location
   if (shipmentInfo.expectedShipDepartureDate && Date.now() < parseInt(shipmentInfo.expectedShipDepartureDate)) {
     lat = get(portDetailList[portOfLadingCode], "kxLocationGPSLoc.gpsLat", null);
     lon = get(portDetailList[portOfLadingCode], "kxLocationGPSLoc.gpsLon", null);
     return lat && lon ? [parseFloat(lat), parseFloat(lon)] : null;
   }
 
   // If the shipment has already arrived, use the portOfUnladingCode location
   if (shipmentInfo.expectedShipArrivalDate && Date.now() > parseInt(shipmentInfo.expectedShipArrivalDate)) {
     lat = get(portDetailList[portOfUnladingCode], "kxLocationGPSLoc.gpsLat", null);
     lon = get(portDetailList[portOfUnladingCode], "kxLocationGPSLoc.gpsLon", null);
     return lat && lon ? [parseFloat(lat), parseFloat(lon)] : null;
   }
 
   if (type === markerTypes.container && portOfUnladingCode) {
     lat = get(portDetailList[portOfUnladingCode], "kxLocationGPSLoc.gpsLat", null);
     lon = get(portDetailList[portOfUnladingCode], "kxLocationGPSLoc.gpsLon", null);
     return lat && lon ? [parseFloat(lat), parseFloat(lon)] : null;
   }
 
   // Else ship must be in transit so use that location
   lat = get(vesselDetailList[carrierId], "locationInfoDtl.locGPS.gpsLat", null);
   lon = get(vesselDetailList[carrierId], "locationInfoDtl.locGPS.gpsLon", null);
 
   return lat && lon ? [parseFloat(lat), parseFloat(lon)] : null;
 };
 
 // Looks for commas in a given string and adds a space after it (if needed)
 
 const addSpaceAfterCommas = (str) => {
   if (!str || str === undefined) return;
   let newString = str;
   if (newString.includes(",")) {
     newString = newString.split(",").join(", ");
   }
   return newString;
 };
 
 // Removes spaces and - from input
 const parseNumber = (input) => {
   let tempStr = input.toString(); // Convert phone to string
   let parsedStr = ""; // Create empty string for parsed phone #
 
   // Removes ' ' and '-' from number
   for (let i = 0; i < tempStr.length; i++) if (!(tempStr.charAt(i) === " " || tempStr.charAt(i) === "-")) parsedStr += tempStr.charAt(i);
   return parseInt(parsedStr); // Convert back into number
 };
 
 // Takes an array of inputs to check for validity
 const checkInvalidInputs = (inputs) => {
   let returnArray = {}; // Array to return
   let defaultMin = 2; // Default minimum for field inputs
   inputs.forEach((input) => {
     let keys = Object.keys(input);
     if (input === null || !input) {
       returnArray[keys[0]] = { value: keys[0], error: true, message: input.msg ? input.msg : "Field cannot be empty" };
     }
     // If input empty or null, set as false
     else {
       // If input is not empty
       if (input.min) {
         if (!input[keys[0]] || input[keys[0]].length < input.min) {
           // If input provided its own min
           returnArray[keys[0]] = { value: keys[0], error: true, message: input.msg ? input.msg : "Must have at least " + input.min + " characters" }; // If input didn't meet the required length
         }
       } else {
         if (!input[keys[0]] || input[keys[0]].length < defaultMin) {
           // If input didn't provided its own min
           returnArray[keys[0]] = { value: keys[0], error: true, message: input.msg ? input.msg : "Must have at least 2 characters" }; // If input didn't meet the min length required
         }
       }
     }
   });
 
   return returnArray;
 };
 
 const getMilisecondsAsTime = (ms) => {
   let diff = new moment.duration(ms);
   let days = diff.asDays().toFixed(2);
   let hours = diff.asHours().toFixed(2);
   let minutes = diff.asMinutes().toFixed(2);
   return { days, hours, minutes };
 };
 
 const getMilisecondsAsDays = (ms) => {
   return new moment.duration(ms).asDays().toFixed(2);
 };
 
 const getMilisecondsAsHours = (ms) => {
   return new moment.duration(ms).asDays().toFixed(2);
 };
 
 function containerDateFormatter(ms) {
   if (!ms || ms === "TBD") return null;
   let time = moment(parseInt(ms)).format("MMM Do h:mm a");
   if (time === "Invalid date") return null;
   return time;
 }
 
 function containerDateFormatterTz(ms, tz) {
   console.log("containerDateFormatterTz ", ms, tz)
   if (!ms || ms === "TBD") return null;
   let time = momentTz.tz(parseInt(ms), tz).format("MMM Do h:mm a");
   if (time === "Invalid date") return null;
   return time;
 }
 
 function customDateFormatter(time, format) {
   if (!time || time === "TBD") return null;
   let res = moment(parseInt(time)).format(format);
   if (res === "Invalid date") return null;
   return res;
 }
 
 const buildNameFUNC = (type, doc) => {
   let docTypes = get(store.getState(), "shipmentList.docTypes", []);
   let docCount = new Array(docTypes.length).fill(0);
   let misc = 0;
   const setName = (type, doc) => {
     if (type) {
       let docType = docTypes.filter((doc) => doc.name === type);
       let docTypeIndex = docTypes.indexOf(docType[0]);
       docCount[docTypeIndex]++;
       return `${get(docType[0], "longLabel", "Misc")} ${docCount[docTypeIndex] >=1 ? docCount[docTypeIndex] : ""}`;
     } else {
       misc++;
       return `Misc ${misc >= 1 ? misc : ""}`;
     }
   };
   return setName;
 };
 
 const getInitials = (name) => {
   if (!name) {
     return "";
   }
   return name
     .split(/\s/)
     .reduce((response, word) => (response += word.slice(0, 1)), "")
     .toUpperCase()
     .substring(0,3);
 };
 
 // Calculates demurrage
 const calculateDemurrage = ({ type, demurrageInfo }) => {
   knlog(DBG_SHIPMENT_DETAIL,[ "demurrageClock : calculateDemurrage : ", type, demurrageInfo])
   if (!demurrageInfo) return false; // Base case
 
   let { demurrageEndDate, demurrageStartDate, demDaysAllowed, timeRemaining } = demurrageInfo || {};
   demurrageEndDate = demurrageInfo.demurrageEndDate_ || demurrageInfo.demurrageEndDate
   demurrageStartDate = demurrageInfo.demurrageStartDate_ || demurrageInfo.demurrageStartDate
   demDaysAllowed  = demurrageInfo.demDaysAllowed_ || demurrageInfo.demDaysAllowed
   timeRemaining = demurrageInfo.timeRemaining_ || demurrageInfo.timeRemaining
   
 
   // Assign to per diem values (if needed)
   if (type === "Per Diem") {
     demurrageEndDate = get(demurrageInfo, "perDiemEndDate_", null) || get(demurrageInfo, "perDiemEndDate", null);
     demurrageStartDate = get(demurrageInfo, "perDiemStartDate_", null) || get(demurrageInfo, "perDiemStartDate", null);
     demDaysAllowed = get(demurrageInfo, "perDiemDaysAllowed_", null) || get(demurrageInfo, "perDiemDaysAllowed", null);
   }
 
   if (!timeRemaining) timeRemaining = 0; // Default case
 
   // If API doesn't provide an end date, create one from start date + allowed days (not necessarily accurate due to potential holidays)
   if (!demurrageEndDate) demurrageEndDate = demurrageStartDate + demDaysAllowed;
 
   let totalTime = type === "Demurrage" ? demurrageEndDate - demurrageStartDate : demDaysAllowed;
 
   let days = getMilisecondsAsTime(demDaysAllowed).hours / 24; // Allowed Days
   let daysLeft = getMilisecondsAsTime(timeRemaining).hours / 24;
   let hoursLeft = Math.abs(daysLeft) % 1 > 0 ? (Math.abs(daysLeft) % 1) * 24 : 0;
 
   knlog(DBG_SHIPMENT_DETAIL,[ "demurrageClock : calculateDemurrage : ", totalTime, days, timeRemaining, daysLeft, hoursLeft])
   return { totalTime, days, timeRemaining, daysLeft, hoursLeft };
 };
 
 // Calculates demurrage charges (returns either false or a status)
 const getDemurrageStatus = ({ type, timeRemaining }) => {
   if (!timeRemaining) return false; // Base case
   if (timeRemaining < 0) {
     let charges = Math.abs(getMilisecondsAsTime(timeRemaining).hours);
     let days = charges / 24;
     let hours = Math.abs(days) % 1 > 0 ? (Math.abs(days) % 1) * 24 : 0;
     let status = days < 0 ? Math.abs(Math.ceil(days)) : Math.abs(Math.floor(days)) + "d, " + Math.floor(hours) + "h";
     return status;
   } else return false;
 };
 
 // Returns passed string with each word having a capital to start ("heLLo wOrld" -> "Hello World")
 const titleCase = (str) => {
   if (!str) return null;
   var splitStr = str.toLowerCase().split(" ");
   for (var i = 0; i < splitStr.length; i++) splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   return splitStr.join(" ");
 };
 
 // Create a promise that rejects in <ms> milliseconds
 let timeoutPromise = async (ms, promise) => {
   if (!promise) return Promise.resolve(null);
   let timeout = new Promise((resolve, reject) => {
     let id = setTimeout(() => {
       clearTimeout(id);
       resolve(null);
     }, ms);
   });
 
   // Returns a race between our timeout and the passed in promise
   return Promise.race([promise, timeout]);
 };
 //functions for airport
 let getDistanceBetweenTwoPorts = (srcLat, destLat, srcLon, destLon) => {
   // console.log("getDistanceBetweenTwoPorts >> ", srcLat,destLat,srcLon,destLon)
   let distanceBetweenTwoPorts = Math.sqrt((destLat - srcLat) ** 2 + (destLon - srcLon) ** 2);
   return distanceBetweenTwoPorts;
 };
 
 // Longitutde varies across  x co-ordinates
 // Latitiude varies across  y co-ordinates
 let angleBetweenTwoPorts = (srcLat, destLat, srcLon, destLon) => {
   let quadrant = 1;
   if (destLon < srcLon && destLat > srcLat) {
     quadrant = 2;
   } else if (destLon < srcLon && destLat < srcLat) {
     quadrant = 3;
   } else if (destLon > srcLon && destLat < srcLat) {
     quadrant = 4;
   }
 
   let y = destLat - srcLat;
   let x = destLon - srcLon;
 
   //x === 0 means vertical line. So angle is either 90 or 270
   //90 or 270 is decided by sign of y
   //plane is straight so show the angle we have to consider the current face of plane
   if (x === 0) {
     return quadrant == 1 || quadrant == 2 ? [Math.PI / 2, 0, quadrant] : [Math.PI / 2, 180, quadrant];
   }
 
   // console.log("Angle : ", y,x)
   let angle = (Math.abs(Math.atan(y / x)) * 180) / Math.PI;
 
   let angleToRotate = 90 - angle;
   if (quadrant === 1) {
     angleToRotate = 90 - angle;
   } else if (quadrant === 2) {
     angleToRotate = 270 + angle;
   } else if (quadrant === 3) {
     angleToRotate = 270 - angle;
   } else {
     angleToRotate = 90 + angle;
   }
   return [angle, angleToRotate, quadrant];
 };
 
 let getDistanceTravelledSoFar = (totalDistance, totalTime, departureTime) => {
   let timeLaps = Date.now() - departureTime;
   // console.log("getDistanceTravelledSoFar >> ", totalDistance, totalTime, departureTime,timeLaps)
 
   let distanceCoveredSoFar = (timeLaps * totalDistance) / totalTime;
   return distanceCoveredSoFar;
 };
 //Getting the xand y cordinates of the distance yet travelled
 let getXCordinatesOfDistTravelled = (srcLong, angle, distanceCoveredSoFar, quadrant) => {
   angle = (angle * Math.PI) / 180;
   // console.log(" getXCordinatesOfDistTravelled >> ", srcLong, angle, distanceCoveredSoFar, quadrant)
   return quadrant == 1 || quadrant == 4 ? srcLong + distanceCoveredSoFar * Math.cos(angle) : srcLong - distanceCoveredSoFar * Math.cos(angle);
 };
 let getYCordinatesOfDistTravelled = (srcLat, angle, distanceCoveredSoFar, quadrant) => {
   angle = (angle * Math.PI) / 180;
   return quadrant == 1 || quadrant == 2 ? srcLat + distanceCoveredSoFar * Math.sin(angle) : srcLat - distanceCoveredSoFar * Math.sin(angle);
 };

 function getAppType() {
  if(window.location.href.toLowerCase().includes("sales"))
    return "SALES";
  else if(window.location.href.toLowerCase().includes("drayage"))
    return "PARTNER";
 }
 
 //if logging in from a different domain will route to /validate?token=[token] and set cookie
 let parseUrlFromProxy = () => {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const token = urlParams.get("token");
   if (!token) return;
   let domain = window.location.hostname;
   domain = domain.split(".");
   domain = `.${domain[1]}.${domain[2]}`;
   document.cookie = `kxCommonToken=${token};domain=${domain};path=/`;
   window.location = window._env_["REACT_APP_LOGIN_URL_" + getAppType()];
 
   return token;
 };
 
 let calculateScale = (elWidth, elHeight, percentage, type) => {
   let pixelWidthDesired = percentage * window.outerWidth / 100;
   let scaleValue = pixelWidthDesired / elWidth;
   let newHeight = elHeight / scaleValue; //elHeight will be calculated from vertical resolution
   if(!window.isChina && type !== "shipmentList") {
     return {
       scaleValue: 1,
       newHeight: elHeight
     };  
   }
   return {
     scaleValue,
     newHeight
   };
 }
 
 let showMapIfNotChina = () => {
   if(document.querySelector("#map"))
     document.querySelector("#map").style.visibility = !window.isChina?"visible":"hidden";
   setTimeout(()=>{
     if(document.querySelector("#map"))
       document.querySelector("#map").style.visibility = !window.isChina?"visible":"hidden";
   }, 1000);  
 }
 
 export const extractImporterName = (name) => {
   let splitted= name.split("@")
   if(splitted.length>0){
       //let temp = splitted[0].split(".")
       return splitted[0]
       //return temp[temp.length-1]
   } else {
       return name
   }
 
 }
 
 const getMSAsDays = (ms) => {
   return Math.floor(moment.duration(ms).asDays()).toFixed(0);
 };
 
 
 const containerCardSubStatus = (description) => {
   if (containerCardSubStatusMapper[description]) return containerCardSubStatusMapper[description];
   return description;
 };
 
 
 
 
 const  getCustomerAddress=(address)=>{
   let addressCity
   let addressCountry
   // console.log("getCustomerAddress : ", address )
   if(address){
     for(let i=0;i<address.length;i++){
       if(address[i].type ==="CITY"){
         // console.log(address[i].information)
         addressCity=address[i].information
         
       }if(address[i].type === "COUNTRY"){
           // console.log(address[i].information)
           addressCountry=address[i].information
         
         if(addressCountry.includes("STATES") || addressCountry === "USA"){
           addressCountry="US"
           return addressCity+ "," + addressCountry
         }
         if(addressCountry==="UNITED KINGDOM" ||  addressCountry==="GREAT BRITAIN" ){
           addressCountry="GB"
           return addressCity+ "," + addressCountry
         }
 
         if(addressCountry==="CANADA" ){
           addressCountry= "CA"
           return addressCity+ "," + addressCountry
         }
       }
     }
     // console.log("getCustomerAddress : ",addressCity, addressCountry )
     return addressCity + "," + addressCountry
   } 
   return ""
 }

  // export const makeValidJson = (str = window._env_.INFRA_BUCKETS_JSON) => {
  //   return str.replace(/[\'\"]/g, function (m) {
  //     return m === '"' ? "'" : '"';
  //   });
  // };

  export const countryOptions = [
    { key: "USA", value: "USA", flag: "us", text: "United States of America" },
    { key: "CA", value: "CANADA", flag: "ca", text: "Canada" },
    { key: "UK", value: "United Kingdom", flag: "uk", text: "United Kingdom" },
    { key: "GB", value: "United Kingdom", flag: "gb", text: "United Kingdom" },
  ];
 
 export {
   getCustomerAddress,
   timeoutPromise,
   getImportantShipmentTimelineEvents,
   getShipmentTimelineEstimates,
   titleCase,
   dateFormatter,
   shortDateStringFormatter,
   longDateStringFormatter,
   shortDateFormatter,
   normalDateFormatter,
   getPortOfData,
   calculateProgressPercentage,
   convertEpochToDate,
   validateUserInformation,
   formatDocName,
   mapColor,
   filterShipmentsByStatus,
   iconPaddingMapper,
   markerEvents,
   iconEvents,
   formatTimeRemaining,
   timelineLoop,
   addStatus,
   getColor,
   addToShipmentsToShipHash,
   processShipments,
   getCookieValue,
   getCoors,
   addSpaceAfterCommas,
   parseNumber,
   checkInvalidInputs,
   containerCardStatus,
   getMilisecondsAsTime,
   getMilisecondsAsDays,
   getMilisecondsAsHours,
   containerDateFormatter,
   containerDateFormatterTz,
   customDateFormatter,
   demurrageStatus,
   filterDetailsStatus,
   buildNameFUNC,
   getInitials,
   calculateDemurrage,
   getDemurrageStatus,
   popOutDescriptionStatus,
   convertEpochToDateWithTimeZone,
   getDistanceBetweenTwoPorts,
   angleBetweenTwoPorts,
   getDistanceTravelledSoFar,
   getXCordinatesOfDistTravelled,
   getYCordinatesOfDistTravelled,
   parseUrlFromProxy,
   calculateScale,
   showMapIfNotChina,
   containerCardSubStatusMapper, 
   getMSAsDays,
   containerCardSubStatus,
   getWorkFlowNameFromVal,
   isCountryCanada,
   shortDateFormatterV2
   
 };
 
 