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
 import { HttpClient } from "./httpClient";
 import { markerTypes } from "../util/constants";
 import { knlog, DBG_API } from "../util/debug";
 import { parse } from "date-fns";
 
 const getRequestHeadersNoToken = () => {
   return {
     Accept: "application/json",
     "Content-Type": "application/json",
   };
 };
 
 // {
 //   "eventMessage": {
 //       "searchType": "SEARCH_TYPE_CUSTOMER",
 //       "filters": [
 //           {
 //               "key": "SEARCH_FILTERS_MODE",
 //               "value": [
 //                   "AIR","TRUCK", "OCEAN"
 //               ]
 //           },
 //           {
 //               "key": "SEARCH_FILTERS_KXEMAIL",
 //               "value": [
 //                   "lifestyle@klearexpress.us"
 //               ]
 //           }
 //       ],
 //       "pageNumber": 1,
 //       "searchOrder": {
 //           "searchTab": "SEARCH_TAB_NEW_ISF",
 //           "direction": "DESC"
 //       }
 //   },
 //   "eventType": "SEARCH_SHIPMENTS_CUSTOMER",
 //   "eventTime": 1604110056356
 // }
 
 const getCookie = (cname = "kxCommonToken") => {
   let name = cname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(";");
   for (let i = 0; i < ca.length; i++) {
     let c = ca[i];
     while (c.charAt(0) === " ") {
       c = c.substring(1);
     }
     if (c.indexOf(name) === 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
 };
 
 const kxToken = getCookie("kxCommonToken");
 const getRequestHeaders = () => {
   return {
     "Content-Type": "application/json",
     kxToken: kxToken,
   };
 };
 
 const getLocEntity = ({ type, list }) => {
   let data = {};
   if (type === markerTypes.container) {
     data = {
       eventMessage: {
         entityType: "CONTAINER",
         entityId: list[0],
       },
       eventType: "GET_LOC_ENTITY",
       eventTime: Date.now(),
     };
   }
   return HttpClient.custom({
     data,
   });
 };
 
 const customerShipmentsBody = (kxEmail, searchFilters, pageNumber, searchTab, direction) => {
   // console.log("customerShipmentsBody here"  ,kxEmail, searchFilters, pageNumber, searchTab, direction)
 
   // console.log("searchFilters :: ",searchFilters)
 
 
   let filters;
   if (kxEmail) {
     filters = searchFilters.concat([
       {
         key: "SEARCH_FILTERS_KXEMAIL",
         value: kxEmail,
       },
     ]);
   } else filters = searchFilters;
 
   for (let filter of filters) {
     if (filter.key === "SEARCH_FILTERS_MODE") {
       if (filter.value.includes("AIR")) {
         if (!filter.value.includes("AIR_CONTAINER")) {
           filter.value.push("AIR_CONTAINER");
         }
       }
       if (filter.value.includes("TRUCK")) {
         if (!filter.value.includes("TRUCK_CONTAINER")) {
           filter.value.push("TRUCK_CONTAINER");
           filter.value.push("MULTIMODAL");
         }
       }
 
       if (filter.value.includes("OCEAN")) {
         if (!filter.value.includes("OCEAN_NON_CONTAINER")) {
           filter.value.push("OCEAN_NON_CONTAINER");
         }
 
         if (!filter.value.includes("RAIL")) {
           filter.value.push("RAIL");
           filter.value.push("RAIL_CONTAINER");
           filter.value.push("PIPELINE");
         }
       }
     }
   }
 
   if (searchTab) {
     let eventType = "SEARCH_SHIPMENTS_CUSTOMER";
     if(searchTab === "SEARCH_TAB_CONTAINERS")
       eventType = "SEARCH_CONTAINERS";
     return {
       eventMessage: {
         searchType: "SEARCH_TYPE_CUSTOMER",
         filters,
         pageNumber,
         searchOrder: {
           searchTab,
           direction,
         },
       },
       eventType: eventType,
       eventTime: Date.now(),
     };
   } else {
     return {
       eventMessage: {
         searchType: "SEARCH_TYPE_CUSTOMER",
         filters,
         pageNumber,
       },
       eventType: "SEARCH_SHIPMENTS_CUSTOMER",
       eventTime: Date.now(),
     };
   }
 };
 
 const getDoStatusBody = (containerIds) => ({
   eventMessage: {
     containers: containerIds,
   },
   eventType: "GET_CONTAINER_DO_STATUS",
   eventTime: Date.now(),
 });
 
 const getNewShipments = (kxEmail, searchFilters, pageNumber, direction) => {
   let filters;
   if (kxEmail) {
     filters = searchFilters.concat([
       {
         key: "SEARCH_FILTERS_KXEMAIL",
         value: kxEmail,
       },
     ]);
   } else filters = searchFilters;
 
   // for (let filter of filters) {
   //   if (filter.key === "SEARCH_FILTERS_MODE") {
   //     if (filter.value.includes("OCEAN") && !filter.value.includes("RAIL")) {
   //       filter.value.push("RAIL")
   //     }
   //   }
   // }
 
   let eventMessage = {
     searchType: "SEARCH_TYPE_CUSTOMER",
     filters,
     pageNumber,
     searchOrder: {
       searchTab: "SEARCH_TAB_NEW_ISF",
       direction,
     },
   };
 
   return {
     eventMessage,
     eventType: "SEARCH_SHIPMENTS_CUSTOMER",
     eventTime: Date.now(),
   };
 };
 
 const locationCarrierBody = (carrierId, carrierType = "VESSEL") => ({
   eventMessage: {
     carrierType: carrierType,
     carrierId: carrierId,
   },
   eventType: "GET_LOC_CARRIER",
   eventTime: Date.now(),
 });
 
 const sendCustomerDocEmail = (shipmentId, customerEmail, documents, sentTo, cc = {}) => {
   const data = {
     eventMessage: {
       shipmentId: shipmentId,
       customerEmail: customerEmail,
       documents: documents,
       sentTo: sentTo,
       cc: cc,
     },
     eventType: "SEND_CUSTOMER_DOC_EMAIL",
     eventTime: Date.now(),
   };
   return HttpClient.custom({
     data,
   });
 };
 
 //entityInfo: [{entityId: "9741437"}, {entityId: "9397913"}, {entit
 const vesselDetailsBody = (carrierInfo) => {
   let entityInfo = carrierInfo;
   knlog(DBG_API, ["vesselDetailsBody", carrierInfo, typeof carrierInfo]);
   if (typeof carrierInfo === "string") {
     // If string provided, it is a single request
     entityInfo = [{ entityId: carrierInfo }];
   } else if (typeof carrierInfo === "object") {
     entityInfo = carrierInfo.map((entityId) => {
       return { entityId: entityId };
     });
   }
   return {
     eventMessage: {
       entityInfo,
     },
     eventType: "GET_VESSELS_DTL",
     eventTime: Date.now(),
   };
 };
 
 const addressDetailsBody = (addressIds) => {
   addressIds = addressIds.map((addressId) => {
     return parseInt(addressId);
   });
   knlog(DBG_API, ["addressDetailsBody : Sending address ids ", addressIds]);
 
   return {
     eventMessage: addressIds,
     eventType: "GET_LOC_DETAILS",
     eventTime: Date.now(),
   };
 };
 
 const containerDetailsBody = (shipmentId, containerNumber) => {
   if (typeof containerNumber === "string") {
     // If string provided, it is a single request
     return {
       eventMessage: {
         // entityList: {
         //   //entityId: containerInfo.toString(),
         //   // entityType: "WORKFLOW_ENTITY_TYPE_CONTAINER",
         // },
         isDetailedPage: true,
         shipmentId: shipmentId,
         containerNumber: containerNumber,
       },
       eventType: "FETCH_CONTAINER_TIMELINE",
       eventTime: Date.now(),
     };
   } else {
     // Multiple array should have been provided
     return {
       eventMessage: {
         entityList: containerNumber,
         isDetailedPage: true,
       },
       eventType: "FETCH_CONTAINER_TIMELINE",
       eventTime: Date.now(),
     };
   }
 };
 
 const countryListBody = {
   eventType: "GET_HS_MASTER_HS",
   eventMessage: { country: "CA", hsVersion: "2019Rev2.0", itemType: "COUNTRY_LIST" },
   eventTime: Date.now(),
 };
 
 const customerDataBody = {
   eventType: "GET_KXUSER",
   eventMessage: {},
   eventTime: Date.now(),
 };
 
 const channelConnections = {
   eventType: "GET_CHANNEL_CONNECTIONS",
   eventMessage: {},
   eventTime: Date.now(),
 };
 
 const teamMembers = {
   eventType: "GET_TEAM_MEMBERS",
   eventMessage: {},
   eventTime: Date.now(),
 };
 
 const paymentDataBody = {
   eventType: "GET_PAYMENT_INSTRUMENTS",
   eventMessage: {},
   eventTime: Date.now(),
 };
 
 const customsStatementsBody = (importerNumber, pageNumber = 1, keyword = "") => ({
   eventType: "PAYMENT_CBP_GET_STATEMENTS",
   eventMessage: {
     importerNumber: importerNumber,
     pageNumber: pageNumber,
     keyword: keyword,
   },
   eventTime: Date.now(),
 });
 
 const authStatusBody = (statementNumber, importerNumber) => ({
   eventType: "PAYMENT_CBP_GET_AUTHORIZATION_STATUS",
 
   eventMessage: {
     statementNumber: statementNumber,
     importerNumber: importerNumber,
   },
   eventTime: Date.now(),
 });
 
 const paymentHistoryBody = (paymentGuid, low, high, pageDirection) => {
   return {
     eventType: "PAYMENT_GET_HISTORY",
     eventMessage: {
       paymentGuid: paymentGuid,
       low: low,
       high: high,
       pageDirection: pageDirection,
     },
     eventTime: Date.now(),
   };
 };
 
 const getCustomerShipmentDetailsBody = (id, kxEmail) => ({
   eventMessage: {
     id,
     kxEmail: kxEmail,
   },
   eventType: "FETCH_CUSTOMER_SHIPMENT_DETAILS",
   eventTime: Date.now(),
 });
 
 const getShipmentDocumentsBody = (id) => ({
   eventMessage: { id },
   eventType: "GET_SHIPMENT_DOCUMENTS",
   eventTime: Date.now(),
 });
 
 const getSignedUrlsBody = (eventMessage) => ({
   eventMessage,
   eventType: "GET_SIGNED_URLS",
   eventTime: Date.now(),
 });
 
 const getOneShipmentTimelineBody = (id) => ({
   eventMessage: {
     shipmentId: id,
     isDetailedPage: true,
   },
   eventType: "SEARCH_CUSTOMER_SHIPMENT_TIMELINE",
   eventTime: Date.now(),
 });
 
 const getManyShipmentTimelineBody = (ids) => ({
   eventMessage: {
     shipmentIds: ids,
     isDetailedPage: false,
   },
   eventType: "SEARCH_CUSTOMER_SHIPMENT_TIMELINE",
   eventTime: Date.now(),
 });
 
 const getOneShipmentTimelineWebBody = (id) => ({
   eventMessage: {
     shipmentId: id,
     isDetailedPage: true,
   },
   eventType: "SEARCH_CUSTOMER_SHIPMENT_TIMELINE_WEB",
   eventTime: Date.now(),
 });
 
 const getOneShipmentMilestones = (id, country, mode) => ({
   eventMessage: {
     shipmentId: id,
     country: country,
     mode: mode,
   },
   eventType: "FETCH_SHIPMENT_MILESTONES",
   eventTime: Date.now(),
 });
 
 const getManyShipmentTimelineWebBody = (ids) => ({
   eventMessage: {
     shipmentIds: ids,
     isDetailedPage: false,
   },
   eventType: "SEARCH_CUSTOMER_SHIPMENT_TIMELINE_WEB",
   eventTime: Date.now(),
 });
 
 const getShipmentList = () => {
   return HttpClient.get(HttpClient.baseUrl + "shipmentList");
 };
 
 const getPortLocDtls = (ports) => {
   return HttpClient.custom({
     data: {
       eventMessage: ports.join(","),
       // eventMessage: {
       //   kxPortLocs: ports,
       // },
       eventType: "GET_PORTS_LOC_DTLS",
       eventTime: Date.now(),
     },
   });
 };
 
 const getShipmentActivityDetail = (id, kxEmail) => {
   return HttpClient.custom({
     data: getCustomerShipmentDetailsBody(id, kxEmail),
   });
 };
 
 export const getShipmentDocuments = (id) => {
   return HttpClient.custom({
     data: getShipmentDocumentsBody(id),
   });
 };
 
 const getSignedUrls = ({ bucket, files }) => {
   let eventMessage = bucket ? bucket + ":" + files.join(",") : files.join(",");
   return HttpClient.custom({
     data: getSignedUrlsBody(eventMessage),
   });
 };
 
 export const downloadInvoiceSignedUrl = (bucketName, fileName) => {
   return HttpClient.custom({
     url: HttpClient.baseUrl,
     headers: getRequestHeaders(),
     data: {
       eventMessage: `${bucketName}:${fileName}`,
       eventType: "GET_SIGNED_URLS",
       eventTime: Date.now(),
     },
     method: "post",
   });
 };
 
 const getCustomsStatements = (importerNumber, pageNumber, keyword) => {
   return HttpClient.custom({
     data: customsStatementsBody(importerNumber, pageNumber, keyword),
   });
 };
 
 const getAuthStatus = (statementNumber, importerNumber) => {
   return HttpClient.custom({
     data: authStatusBody(statementNumber, importerNumber),
   });
 };
 
 // Get timeline info for given shipments
 // If only one shipment is supplied, the detailed timeline info is fetched (all phases)
 // If multiple are given, the abbreviated timeline is fetched
 const getShipmentTimeline = (id) => {
   if (typeof id === "string") {
     return HttpClient.custom({
       data: getOneShipmentTimelineBody(id),
     });
   } else {
     return HttpClient.custom({
       data: getManyShipmentTimelineBody(id),
     });
   }
 };
 
 const getShipmentTimelineWeb = (id, country, mode) => {
   if (typeof id === "string") {
     return HttpClient.custom({
       data: getOneShipmentMilestones(id, country, mode),
     });
   } else {
     return HttpClient.custom({
       data: getOneShipmentMilestones(id, country, mode),
     });
   }
 };
 
 const getKXEmail = () => {
   return HttpClient.custom({
     data: {
       eventMessage: {},
       eventType: "GET_KXEMAIL",
       eventTime: Date.now(),
     },
   });
 };
 
 const updateCustomerUserInfo = ({ email, companyName, typeOfUser, contactName, role, typeOfPhone, isdCode, phoneNo, bondInformationRead, bondInformationWrite, paymentInformationRead, paymentInformationWrite, paymentHistoryRead, paymentHistoryWrite, customsStatementsRead, customsStatementsWrite, type }) => {
   const data = {
     eventMessage: {
       userBasicInfo: {
         companyName,
         email,
         typeOfUser,
         contactName,
         role,
         userPrivileges: {
           userPrivilege: [
             {
               privilegeItem: "USER_PRIVILEGES_BOND_INFO",
               read: bondInformationRead,
               write: bondInformationWrite,
             },
             {
               privilegeItem: "USER_PRIVILEGES_PAYMENT_DETAILS",
               read: paymentInformationRead,
               write: paymentInformationWrite,
             },
             {
               privilegeItem: "USER_PRIVILEGES_PAYMENT_HISTORY",
               read: paymentHistoryRead,
               write: paymentHistoryWrite,
             },
             {
               privilegeItem: "USER_PRIVILEGES_CBP_STATEMENT",
               read: customsStatementsRead,
               write: customsStatementsWrite,
             },
           ],
         },
       },
       phone: [
         {
           typeOfPhone,
           isdCode,
           phoneNo,
         },
       ],
     },
     eventType: type === "add" ? "KXUSER_UPDATE_ADD_TEAM_MEMBER" : "KXUSER_UPDATE_TEAM_MEMBER",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 const updateDOInfo = ({ groupName, shippingLine, location, emailids, type, kxEmail, id, notes }) => {
   const data = {
     eventMessage: {
       kxEmail: kxEmail,
       DOList: [
         {
           drayGroup: groupName,
           shippingLine,
           location,
           emails: emailids,
           notes: notes,
         },
       ],
     },
     eventType: type === "add" ? "ADD_DELIVERY_ORDER_INFO" : "UPDATE_DELIVERY_ORDER_INFO",
     eventTime: Date.now(),
   };
 
   if (type !== "add") {
     data.eventMessage.DOList[0].id = id;
   }
 
   return HttpClient.custom({
     data,
   });
 };
 
 const fetchDOs = (email) => {
   return HttpClient.custom({
     data: {
       eventMessage: {
         kxEmail: email,
       },
       eventType: "GET_DELIVERY_ORDER_INFO",
       eventTime: Date.now(),
     },
   });
 };
 
 const verificationEmail = ({ email, role, contactName, typeOfUser }) => {
   const data = {
     eventMessage: {
       userBasicInfo: {
         email: email,
         role: role,
         contactName: contactName,
         typeOfUser: typeOfUser,
       },
     },
     eventType: "REVERIFY_TEAM_MEMBER",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 const deleteCustomerUser = (email, typeOfUser) => {
   const data = {
     eventMessage: {
       userBasicInfo: {
         email,
         typeOfUser,
       },
     },
     eventType: "KXUSER_UPDATE_DELETE_TEAM_MEMBER",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 const deleteDO = (id) => {
   const data = {
     eventMessage: {
       id: id,
     },
     eventType: "DELETE_DELIVERY_ORDER_INFO",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 const getHSMaster = (type, input) => {
   const data = {
     eventType: "GET_HS_MASTER_HS",
     eventMessage: {
       country: "US",
       hsVersion: "2019Rev2.0",
       itemType: type,
       itemId: "",
       itemEdi: "",
       carrierDesc: input,
     },
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 const getNewCustomerShipments = (kxEmail, filters, page, direction) => {
   return HttpClient.custom({
     data: getNewShipments(kxEmail, filters, page, direction),
   });
 };
 
 const getCustomerShipments = (kxEmail, filters, page, searchTab, direction) => {
   return HttpClient.custom({
     data: customerShipmentsBody(kxEmail, filters, page, searchTab, direction),
   });
 };
 
 const getDoStatus = (containerIds) => {
   return HttpClient.custom({
     data: getDoStatusBody(containerIds),
   });
 };
 
 const removeShippingDestination = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const removeManufacturer = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const updateShippingDestination = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const updateManufacturer = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const getLocationCarrier = (carrierId, carrierType) => {
   return HttpClient.custom({
     data: locationCarrierBody(carrierId, carrierType),
   });
 };
 
 // Can provide either a single carrier Id or an array of carriers formatted for the request { "carrierId": carrierID, "carrierType": 'VESSEL' }
 const getVesselDetails = (carrierId) => {
   return HttpClient.custom({
     data: vesselDetailsBody(carrierId ? carrierId : ""),
   });
 };
 
 const getAddressDetails = (addressIds) => {
   return HttpClient.custom({
     data: addressDetailsBody(addressIds ? addressIds : ""),
   });
 };
 
 // Can provide either a single carrier Id or an array of carriers formatted for the request { "carrierId": carrierID, "carrierType": 'VESSEL' }
 const getContainerDetails = (shipmentId, containerNumber) => {
   return HttpClient.custom({
     data: containerDetailsBody(shipmentId, containerNumber ? containerNumber : ""),
   });
 };
 
 const getCustomerData = () => {
   console.trace("getCustomerData :: ");
   return HttpClient.custom({
     data: customerDataBody,
   });
 };
 const getChannelConnections = () => {
   return HttpClient.custom({
     data: channelConnections,
   });
 };
 
 const getTeamMembers = () => {
   return HttpClient.custom({
     data: teamMembers,
   });
 };
 
//  const getCountryList = () => {
//    // console.trace();
//    return HttpClient.custom({
//      data: countryListBody,
//    });
//  };
 
 const getPaymentData = () => {
   return HttpClient.custom({
     data: paymentDataBody,
   });
 };
 
 const getPaymentHistory = (paymentGuid, low, high, pageDirection) => {
   return HttpClient.custom({
     data: paymentHistoryBody(paymentGuid, low, high, pageDirection),
   });
 };
 
 const updateUser = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const updateMyCompany = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const businessSize = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const shippingInfo = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const bondInfo = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const deliveryOrder = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const resetPasswordEmail = (body) => {
   return HttpClient.custom({
     headers: getRequestHeadersNoToken(),
     data: body,
   });
 };
 
 const achPayment = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const ccPayment = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const paymentSettings = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const addshippingdestination = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const getshippingdestination = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const getmanufacturers = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 const addmanufacturer = (body) => {
   return HttpClient.custom({
     data: body,
   });
 };
 
 // const addDocument = (shipmentId, docName) => {
 //   let data = {
 //     eventMessage: `${shipmentId},${docName}`,
 //     eventType: "ADD_DOCUMENT",
 //     eventTime: Date.now(),
 //   };
 //   return HttpClient.addDoc({
 //     data: data,
 //   });
 // };
 export const addDocument = (shipmentId, documentDetails,email) => {
   const data = {
     eventMessage: {
       shipmentId,
       email: email,
       userType:"CUSTOMER",
       documentDetails
     },
     eventType: "ADD_DOCUMENT_NEW",
     eventTime: Date.now(),
   };
   return HttpClient.addDoc({
     data,
   });
 };
 
 export const fetchAddDocumentStatus = (uploadId) => {
   const data = {
     eventMessage: uploadId.toString(),
     eventType: "ADD_DOCUMENT_STATUS",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 export const relabelDocumentName = (documentId, docName) => {
   let data = {
     eventMessage: `${documentId},${docName}`,
     eventType: "SET_DOC_NAME",
     eventTime: Date.now(),
   };
   return HttpClient.custom({
     data: data,
   });
 };
 
 export const getSignedURL = (files) => {
   let data = {
     eventMessage: files,
     eventType: "GET_SIGNED_URLS",
     eventTime: Date.now(),
   };
   console.log("GET_SIGNED_URLS body", data);
   return HttpClient.custom({
     data,
   });
 };
 
 export const getInvoices = (pageNumber = 1, keyword) => {
   let data = {
     eventMessage: {
       pageNumber: pageNumber,
       keyword: keyword,
     },
     eventType: "GET_CUSTOMER_INVOICES",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 export const inviteChannelUser = (email, type) => {
   let data = {
     eventMessage: {
       email: email,
       typeOfUser: type,
       isDelete: false,
     },
     eventType: "CHANNEL_INVITE_USER",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 export const deleteChannelUser = (email, type) => {
   let data = {
     eventMessage: {
       email: email,
       typeOfUser: type,
       isDelete: true,
     },
     eventType: "CHANNEL_INVITE_USER",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 export const approveChannelUser = (email) => {
   let data = {
     eventMessage: {
       email: email,
       approved: true,
     },
     eventType: "CHANNEL_APPROVE_USER",
     eventTime: Date.now,
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 export const getAllBrokers = () => {
   let data = {
     eventMessage: {},
     eventType: "CHANNEL_GET_ALL_BROKERS",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 export const getAllFFBrokers = () => {
   let data = {
     eventMessage: {},
     eventType: "CHANNEL_GET_ALL_FF_AND_BROKERS",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 export const getDocumentTypes = () => {
   let data = {
     eventMessage: "",
     eventType: "GET_DOCUMENT_TYPES",
     eventTime: Date.now(),
   };
 
   return HttpClient.custom({
     data,
   });
 };
 
 //getReportCounters
 //getReportCounterShipments
 export const getReportCounters = (countries, modes, importers, timeStamp) => {
   let data = {
     eventMessage: {
       dateRange: {
         type: "day",
         values: {},
       },
       modesOfTransport: modes,
       countries: countries,
       allImporters: importers.all,
       importers: importers.selected,
       utcOffset: new Date().getTimezoneOffset(),
       // customers:["lifestyle@klearexpress.net"],
       startTimeCheck:parseInt(timeStamp)
     },
     eventType: "CUSTOMER_REPORTS_GET_COUNT_CACHED",
     eventTime: Date.now(),
   };
   if(!timeStamp) delete data.eventMessage.startTimeCheck
   return HttpClient.custom({
     data,
   });
 };
 
 // REPORT_COUNTER_TYPE_US_MISSING_AN_COUNT:  convertTo32(getValidShipmentsList(validShipments, data.MissingAN)),
 //    REPORT_COUNTER_TYPE_US_MISSING_BOL_COUNT: convertTo32(getValidShipmentsList(validShipments, data.MissingBOL)),
 //    REPORT_COUNTER_TYPE_US_MISSING_CI_COUNT:  convertTo32(getValidShipmentsList(validShipments, data.MissingCI)),
 //    REPORT_COUNTER_TYPE_US_MISSING_PL_COUNT:
 
 const counterMap = {
   today: "REPORT_COUNTER_TYPE_THIS_DAY",
   thisWeek: "REPORT_COUNTER_TYPE_THIS_WEEK",
   thisMonth: "REPORT_COUNTER_TYPE_THIS_MONTH",
   thisYear: "REPORT_COUNTER_TYPE_THIS_YEAR",
   waitingToDepart: "REPORT_COUNTER_TYPE_WAITING_TO_DEPART",
   inTransitOnTime: "REPORT_COUNTER_TYPE_IN_TRANSIT_ON_TIME",
   inTransitDelayed: "REPORT_COUNTER_TYPE_IN_TRANSIT_DELAYED",
   inTransitDiverted: "REPORT_COUNTER_TYPE_IN_TRANSIT_DIVERTED",
   inTransit0DayOut: "REPORT_COUNTER_TYPE_IN_TRANSIT_0_DAY_OUT",
   inTransit1DayOut: "REPORT_COUNTER_TYPE_IN_TRANSIT_1_DAY_OUT",
   inTransit2DaysOut: "REPORT_COUNTER_TYPE_IN_TRANSIT_2_DAY_OUT",
   inTransit3DaysOut: "REPORT_COUNTER_TYPE_IN_TRANSIT_3_DAY_OUT",
   inTransit4DaysOut: "REPORT_COUNTER_TYPE_IN_TRANSIT_4_DAY_OUT",
   inTransit5DaysOut: "REPORT_COUNTER_TYPE_IN_TRANSIT_5_DAY_OUT",
   atDestinationPort: "REPORT_COUNTER_TYPE_AT_DESTINATION_PORT",
   delivered: "REPORT_COUNTER_TYPE_DELIVERED",
   isfPending: "REPORT_COUNTER_TYPE_ISF_PENDING",
   isfAccepted: "REPORT_COUNTER_TYPE_ISF_ACCEPTED",
   isfBillMatch: "REPORT_COUNTER_TYPE_ISF_BILL_MATCH",
   isfBillNoMatch: "REPORT_COUNTER_TYPE_ISF_NO_BILL_MATCH",
   customsReleasePending: "REPORT_COUNTER_TYPE_CUSTOMS_RELEASE_PENDING",
   customsReleaseFiled: "REPORT_COUNTER_TYPE_CUSTOMS_RELEASE_FILED",
   customsReleaseHold: "REPORT_COUNTER_TYPE_CUSTOMS_RELEASE_HOLD",
   customsReleaseReleased: "REPORT_COUNTER_TYPE_CUSTOMS_RELEASE_RELEASED",
   customsReleaseAccepted: "REPORT_COUNTER_TYPE_CUSTOMS_RELEASE_ACCEPTED",
   customsReleasePaid: "REPORT_COUNTER_TYPE_CUSTOMS_RELEASE_PAID",
   containerGrounded: "REPORT_COUNTER_TYPE_CONTAINER_GROUNDED",
   containerRfp: "REPORT_COUNTER_TYPE_CONTAINER_READY_FOR_PICKUP",
   containerDemurrageCharges: "REPORT_COUNTER_TYPE_CONTAINER_DEMURRAGE_CHARGES",
   containerGateOut: "REPORT_COUNTER_TYPE_CONTAINER_GATE_OUT",
   containerPerDiem: "REPORT_COUNTER_TYPE_CONTAINER_PER_DIEM",
   containerGateIn: "REPORT_COUNTER_TYPE_CONTAINER_GATE_IN",
   containerGateIn: "REPORT_COUNTER_TYPE_CONTAINER_GATE_IN",
   missingBL: "REPORT_COUNTER_TYPE_MISSING_BOL",
   missingPL: "REPORT_COUNTER_TYPE_MISSING_PL",
   missingAN: "REPORT_COUNTER_TYPE_MISSING_AN",
   missingCI: "REPORT_COUNTER_TYPE_MISSING_CI",
   missingTrucker: "REPORT_COUNTER_TYPE_MISSING_TRUCK_NUMBER_MISSING",
 };
 
 export const setReportData = (rows, counterType, countries, modesSelected, importers, tabID) => {
   let countriesList = [];
   if (countries.get("US")) {
     countriesList.push("US");
   }
   if (countries.get("GB")) {
     countriesList.push("GB");
   }
   if (countries.get("CA")) {
     countriesList.push("CA");
   }
 
   let modes = [];
   if (modesSelected.get("OCEAN") === true) {
     modes.push("MOT_OCEAN");
   }
 
   if (modesSelected.get("AIR") === true) {
     modes.push("MOT_AIR");
   }
   if (modesSelected.get("TRUCK") === true) {
     modes.push("MOT_TRUCK");
   }
 
   let data = {
     eventMessage: {
       //"reportData": rows,
       modesOfTransport: modes,
       countries: countriesList,
       importers: importers.selected,
       rows: rows,
       counterType: counterMap[counterType],
       utcOffset: new Date().getTimezoneOffset(),
       tabID,
     },
     eventType: "CUSTOMER_REPORTS_EXPORT_TO_EXCEL",
     eventTime: Date.now(),
   };
 
   if (counterType === "today" || counterType === "thisWeek" || counterType === "thisMonth" || counterType === "thisYear") {
     data.eventMessage.importers = importers.all;
   }
 
   return HttpClient.custom({
     data,
   });
 };
 
 export const getReportDuties = (countries, modes, importers) => {
   let data = {
     eventMessage: {
       modesOfTransport: modes,
       countries: countries,
       importers: importers.selected,
       utcOffset: new Date().getTimezoneOffset(),
     },
     eventType: "CUSTOMER_REPORTS_GET_DUTIES",
     eventTime: Date.now(),
   };
   return HttpClient.custom({
     data,
   });
 };
 
 export const getReportCounterShipments = (countStr, modesOfTransport, countrries, importers, pageNumber, tabID, timeStamp) => {
   let data = {
     eventMessage: {
       dateRange: {
         type: "day",
         values: {},
       },
       modesOfTransport: modesOfTransport,
       countries: countrries,
       importers: importers.selected,
       pageNumber: pageNumber,
       tabID,
       //  customers : ["lifestyle@klearexpress.net"],
       counterType: counterMap[countStr],
       utcOffset: new Date().getTimezoneOffset(),
       startTimeCheck:parseInt(timeStamp)
     },
     eventType: "CUSTOMER_REPORTS_GET_COUNT_SHIPMENTS_CACHED",
     eventTime: Date.now(),
   };
   if(!timeStamp) delete data.eventMessage.startTimeCheck
   if (countStr === "today" || countStr === "thisWeek" || countStr === "thisMonth" || countStr === "thisYear") {
     data.eventMessage.importers = importers.all;
   }
 
   return HttpClient.custom({
     data,
   });
 };
 
 export const getFinanceInvoices = (tab, keyword = "", pageNumber = 1, selectedCountries) => {
   return HttpClient.custom({
     data: {
       eventMessage: {
         invoiceTab: tab,
         keyword: keyword,
         pageNumber: pageNumber,
         selectedCountries:selectedCountries
       },
       eventType: "GET_CUSTOMER_INVOICES",
       eventTime: Date.now(),
     },
 
     method: "post",
   });
 };
 
 export const getTabCount = (keyword, selectedCountries) => {
   return HttpClient.custom({
     data: {
       eventMessage: {
        keyword: keyword,
        selectedCountries:selectedCountries
       },
       eventType: "GET_TAB_COUNT",
       eventTime: Date.now(),
     },
     method: "post",
   });
 };
 
 export const customerPaidInvoice = (invoiceNumber) => {
   return HttpClient.custom({
     data: {
       eventMessage: {
         invoiceNumber: invoiceNumber,
       },
       eventType: "CUSTOMER_PAID_INVOICE",
       eventTime: Date.now(),
     },
     method: "post",
   });
 };
 
 export const customerDisputedInvoice = (invoiceNumberDispute, shipmentIdDispute, disputeResion, disputedAmount) => {
   return HttpClient.custom({
     data: {
       eventMessage: {
         invoiceNumber: invoiceNumberDispute,
         disputeReason: "DISPUTE_OVERCHARGED",
         disputeRaisedComment: disputeResion,
         disputedAmount: disputedAmount,
         shipmentList: {
           shipment: [...shipmentIdDispute],
         },
       },
       eventType: "CUSTOMER_DISPUTE_INVOICE",
       eventTime: Date.now(),
     },
     method: "post",
   });
 };
 
 export const getSearchShipment = (kxEmail, shipmentId, pageNumber = 1) => {
   return HttpClient.custom({
     data: {
       eventMessage: {
         searchType: "SEARCH_TYPE_CUSTOMER",
         filters: [
           {
             key: "SEARCH_FILTERS_KXEMAIL",
             value: kxEmail,
           },
           {
             key: "SEARCH_FILTERS_SHIPMENT_ID",
             value: shipmentId,
           },
         ],
         pageNumber,
         searchOrder: {
           searchTab: "SEARCH_TAB_SHIPMENTS",
           direction: "DESC",
         },
       },
       eventType: "SEARCH_SHIPMENTS_CUSTOMER",
       eventTime: Date.now(),
     },
     method: "post",
   });
 };
 
 export const fetchTeamMembers = () => {
   return HttpClient.custom({
     eventMessage: {},
     eventType: "GET_TEAM_MEMBERS",
     eventTime: Date.now(),
   });
 };
 
 // export const getCustomsMessages = (id, docType) => {
 //   let body = {
 //     eventMessage: {
 //       shipmentid: id,
 //       type: docType,
 //     },
 //     eventType: "GET_CBP_RESPONSE_MESSAGE",
 //     eventTime: Date.now(),
 //   };
 //   return HttpClient.custom({
 //     data: body,
 //   });
 // };
 
 export const getCustomsMessages = (id, country, DocEntry) => {
   let typeOfEvent = {
     US: "GET_CBP_RESPONSE_MESSAGE",
     USA: "GET_CBP_RESPONSE_MESSAGE",
     CA: "GET_CBSA_RESPONSE_MESSAGE",
     UK: "GET_UK_RESPONSE_MESSAGE",
   };
 
   let body = {
     eventMessage: {
       shipmentid: id,
       // type: DocEntry
     },
     eventType: typeOfEvent[country],
     eventTime: Date.now(),
   };
 
   if(country === "UK") {
     body.eventMessage = id;
   }
 
   return HttpClient.custom({
     data: body,
   });
 };
 
 export const getDeliveryOrderStatus = (containerNumbers) => {
   return HttpClient.custom({
     data: {
       eventMessage: {
         containers: containerNumbers,
       },
       eventType: "GET_CONTAINER_DO_STATUS",
     },
     method: "post",
   });
 };
 // {
 
 export const getLatestResponseSummary = (shipmentid) => {
   return HttpClient.custom({
     data: {
       eventType: "GET_LATEST_RESPONSE_SUMMARY",
       eventMessage: {
         shipmentid: shipmentid,
       },
     },
     eventTime: Date.now(),
   });
 };
 export const getDocumentById=(documentId)=>{
  return HttpClient.custom({
    data: {
      eventType: "GET_DOCUMENT_BY_ID",
      eventMessage: {
        documentId:documentId,
        getDocRequestSource:1,
      },
    },
    eventTime: Date.now(),
  });
 }
 
 export const fetchAllDocs = (kxEmail, guid) => {
  const data= {
    eventType: "FETCH_CUSTOMER_DOCUMENT",
    eventMessage: {
      "customerEmail":kxEmail,
      "userGuid": guid,
      "isCustomer": true  
    },
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data
  });
}
export const setAchCredit = (param) => {
  let data = {
    eventMessage: {
      value: param
    },
    eventType: "SET_ACH_CREDIT",
    eventTime: Date.now(),
  };

  return HttpClient.custom({
    data,
  });
};

export const getPricingDropdown = () => {
  const data = {
    eventMessage: {
        
      },
    eventType: "DRAYAGE_GET_CHARGE_LIST",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};

export const fetchFile = (url) => {
  const data = {
    eventMessage:
        url,
    eventType: "GET_SIGNED_URLS",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};


export const fetchFileLegal = (url) => {
  const data = {
    eventMessage:
        url,
    eventType: "GET_SIGNED_URLS",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};

export const editDrayagePartnerLegal = (userGuid, finalArr) => {
  const data = {
    eventMessage: {
      userGuid: userGuid,
      documents: finalArr,
      },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};

export const editDrayagePartnerPricing = (userGuid, finalArr, pricingListDocument) => {
  const data = {
    eventMessage: {
      userGuid: userGuid,
        pricing: {
          pricingItems: finalArr,
          pricingListDocument: pricingListDocument,
        },
      },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};

export const editDrayagePartnerPricingDoc = (userGuid, finalString) => {
  const data = {
    eventMessage: {
      userGuid: userGuid,
      pricing: {
        pricingListDocument: {
          documentName: finalString,
          documentType: "PRICING_LIST",
        }
      },
      },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};

export const editDrayagePartnerServiceArea = (userGuid, selectedArea) => {
  const data = {
    eventMessage: {
        userGuid: userGuid,
        serviceAreas: [
          {
            country: "US",
            regions: selectedArea,
          },
        ],
      },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};

export const getStateList = () => {
  const data = {
    eventMessage: {
        country: "US",
        hsVersion: "2019Rev2.0",
        itemType: "PROVINCE_LIST" 
      },
    eventType: "GET_HS_MASTER_HS",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};

export const editDrayagePartnerTruckers = ( userGuid, name, phoneNumber, isdCode, driversLicenseState, driversLicenseNumber) => {
  const data = {
    eventMessage: {
      userGuid: userGuid,
		  truckers: [
        {
          user: {
          phoneNumber: phoneNumber,
          isdCode: isdCode,
          contactName: name
          },
          licenseInfo:{
            licenseState: driversLicenseState,
            licenseNumber: driversLicenseNumber
          }
        },
		  ]
    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};

export const updateDrayagePartnerTruckers = ( userGuid, truckers,) => {
  const data = {
    eventMessage: {
      userGuid: userGuid,
		  truckers: truckers,
      dispatcherPhone:{
        
      }
    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};

export const editDrayagePartnerProfile = (userGuid, corpName, logo, entityAddressLine1, entityAddressLine2, entityCity, entityState, entityZip, entityCountry, mailingaddressLine1, mailingaddressLine2, mailingCity, mailingState, mailingZip, mailingCountry, companyTrucks, drivers, dot, scac, containerType,isd,phoneNumber) => {
  const data = {
    eventMessage: {
      userGuid: userGuid,
      companyProfile: {
        name: corpName,
        logo: logo,
        entityAddress: {
          addressLine1: entityAddressLine1,
          addressLine2: entityAddressLine2,
          city: entityCity,
          state: entityState,
          zip: entityZip,
          country: entityCountry,
        },
        mailingAddress: {
          addressLine1: mailingaddressLine1,
          addressLine2: mailingaddressLine2,
          city: mailingCity,
          state: mailingState,
          zip: mailingZip,
          country: mailingCountry,
        },
        noOfTrucks: companyTrucks,
        noOfDrivers: drivers,
        dotNumber: dot,
        scacCode: scac,
        containerType: containerType,
        dispatcherPhone:{
          isd:isd,
          phoneNumber:phoneNumber
        }
      }
      

    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now(),
  };
  return HttpClient.custom({
    data
  });
};


export const uploadImageToBucket = (formData, uploadTo) => {
  return HttpClient.custom({
    url: `${window._env_.REACT_APP_MEDIA_URL}/${uploadTo}`,
    headers: {
      "Content-type": "multipart/form-data",
    },
    data: formData,
    method: "post",
  });
};

export const getDrayagePartnersDetails = (id) => {
  let data = {};
    data = {
      eventMessage: {
        partnerId: id,
      },
      eventType: "DRAYAGE_GET_PARTNER_DETAILS",
      eventTime: Date.now(),
    };
      return HttpClient.custom({
      data
  });
};

export const getContainerTypeList = params => {
  const data = {
    eventMessage: {
      ...params
    },
    eventType: "GET_CONTAINER_TYPES",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data
  });
};

export const getCountryList = (country) => {
  const data = {
    eventMessage: {
      country: "CA",
      itemType: "COUNTRY_LIST",
      hsVersion: "2019Rev2.0",
      province: "",
    },
    eventType: "GET_HS_MASTER_HS",
    eventTime: 15332404112,
  };

  return HttpClient.custom({
    data,
  });
}

 const shipmentApi = {
   getShipmentList,
   getShipmentActivityDetail,
   getShipmentDocuments,
   getSignedUrls,
   getNewCustomerShipments,
   getCustomerShipments,
   getLocationCarrier,
   getShipmentTimeline,
   getShipmentTimelineWeb,
   getVesselDetails,
   getAddressDetails,
   getContainerDetails,
   getPortLocDtls,
   getLocEntity,
   getDocumentTypes,
   getDoStatus,
   getCustomsMessages,
   getLatestResponseSummary,
   getDocumentById
 };
 
 const userApi = {
   updateUser,
   updateMyCompany,
   fetchTeamMembers,
   getCustomerData,
   getChannelConnections,
   getTeamMembers,
   businessSize,
   shippingInfo,
   bondInfo,
   deliveryOrder,
   getKXEmail,
   achPayment,
   ccPayment,
   getPaymentData,
   getPaymentHistory,
   paymentSettings,
   addshippingdestination,
   addmanufacturer,
   getshippingdestination,
   removeShippingDestination,
   getmanufacturers,
   updateShippingDestination,
   updateCustomerUserInfo,
   updateDOInfo,
   fetchDOs,
   deleteCustomerUser,
   deleteDO,
   removeManufacturer,
   updateManufacturer,
   addDocument,
   getSignedURL,
   resetPasswordEmail,
   getCustomsStatements,
   getAuthStatus,
   getHSMaster,
   getInvoices,
   inviteChannelUser,
   deleteChannelUser,
   approveChannelUser,
   getAllBrokers,
   getAllFFBrokers,
   downloadInvoiceSignedUrl,
   sendCustomerDocEmail,
   verificationEmail,
   getTabCount,
   customerPaidInvoice,
   customerDisputedInvoice,
   getFinanceInvoices,
   getSearchShipment,
   fetchAddDocumentStatus,
   getDocumentById,
   fetchAllDocs,
   setAchCredit,   
 };
 
 export { shipmentApi, userApi };
 