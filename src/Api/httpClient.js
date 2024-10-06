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

import { SERVERURL } from "../config";
import axios from "axios";
import { get, template } from "lodash";
//  import "./env-config"

import { parseUrlFromProxy } from "../util";

const getTokenName = () => {
  console.trace("APP NAME :: getTokenName", window._env_.APP_NAME)
  switch(window._env_.APP_NAME) {
    case "Partner" :
      return "kxPartnerToken"
    case "Customer" :
      return "kxCustomerToken"
    case "Sales":
      return "kxSalesToken"  
  }
  return "kxCustomerToken"
}

const getCookieValue = () => {
  var b = document.cookie.match("(^|;)\\s*" +  getTokenName() + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};

let noTokenValue = "_BLANK_";

let tmpToken = ""
  // "eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.NGup5enI1yNYNRmCtH0h8jkrDztdf1og8c9h1i2LivnKw5o5dUUOIA.q4kGqbCKxXr0er4gaB-gGw.OPGr_CizXXs9b_cM3bK2hnzTngz10AjGJj7B0EPonLv7b0XG86wJm70_o6OPrgENY42Z-tI51O8B7uyq1o3OJTRUm4NdT4O21FTW0QNwUtXcrYy8YUspABdt7T3oSb3AVpN08ZlHpUte2E29mWYxZRXk_jtOZ1TL3M0B7Rmw8KzPhRgRg0mKsK3oTJy7YNaFk7MlUJRyJKG70Imdkw3Z7rB5g82z9bFaRG7pau0YC76m0P9Jr1a6sek3oodnE16kHkc7-qSksGiamUe8Bj0eRNZEiounThBr5hzlvjNmvXqXF_lgXHrzWlZguvDO8stjNg-c9o6nI-qn-IMCPxhDiM96sa4S0OpfIt8KoCj9T11vTPLOYx4lHeGxz7zBZM3qjQHsp7LTh0EilV-K-UZCWA766MBeCCW5XAb-WqKw580hesGmYDrCH6NyWgckqQIIW8Vwj2GyJjsozPSH6H1XYoMg_h-Nf_O9j8cMGsgfBq62ft18R3jHuTwh9KuI2hjJ0vPwIKAyug5ALQYoBRPuzFZ6rO0kdBtBsLT-uC-1YvdMGY6Wfua8K1ITv39t5AKsFswNNY92sD3AgXX65SX6TiMKKHlVrdTw2jIAT4Ka1zcie7iAHsv0u6c1pmYtGtt5Y30mED5moqGW1wPyqvPeMpBSCeJWh96cib99Er_GwL60pRloald944jRZ7KqFnWB82AD6dii261hAYfyBP0XtpnZVkSzemrcuXq-bBfCx0ZJz1qkU6aeZrHs3UEzaobHKKzWi8__e6YqZBA5cu0Nce2-isFF1n07DNLYtqgMiFAcvm4IfeIMcGEu3wih0l6T_vEDfzgEsSJemWmlQv_KUw.XGWWDdKryNVEf7GKJ_8o2Q";
// let tmpToken = "eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.CAaFioiagSjS8LQzdtXdAjtroTZXADnehra45YhKHtX50JewFv60CQ.QoVaAUM8qC-ruQww-aIqoQ.-mnIYPVGmG11aKpulDLrowjBGVNo9VKwTwv2h35sKeBV2A-dm1TNdEZ_DDrg6QYvQU_EmOZ-7SHvycpXrz-iJSPGAz6A8WxLtYTK0gM6E_tLj2bnKi2Lb50a_CMMhMbHhA43huql_uwe1tymrSEsvy-XmmM6rewCqbjJgQ-2HSB0OISpgH5UC2RmWGttat1KKd9Z8b182nxfTwolki46p8WADf8FnW3OUitNhLJTxIYXptiiHezSbN-_9FZ6h7SaT_lHAlFT8iJ8eOjcdlXWmM9uYu6OSeXzVX1mFU9XgI36vq0vDEUzmAfuQVb-PLiUPv6K4YLXrLHALciqzXsCS2ZSazTI8wiS6Mm81TCgR96OyD9ryal8L__vtyFqdJ_pGctQtBfozCzHxOKYkKkQNPmE49JqD2Q-t4GjzNyqyoxiPNv07--qQ4yZnWlsHuKJM0b9Kg8cVEfUsrQPmUILvlqGVrJ-Q-Hdb5bC6NpxHaqkED_qopnVOkVwH2Qiz5MAreC_n9XZpHbM3yLxUjH76zjgqJ2WrRKuzsvUjFAJn4tr7fwtElpcp4PlceBTu_0rFB4G8yg2_vm2xlHawI8sB7MV_e2fJ86iEAqUJKKzUIOPvI1mrdv8KKSTt9crY9LvUiq7OXvCpade2G32iFC7LI9MYS7byE1rHf45Ja1yFMpTjiRPiKmnwhd3s1_-KSUnh1H7-J_VHR52uIc-nJglezdJ6gp7p_hKDKJY78CMDisXYZwSmocB3mc_GjYIfrS5UpKz39gQgmMZf1spJfzHM0852jK_bcjIDjymvKJmugIPTlYJiR2s7StvhAX-efce3epBfsvnRxrUC3LvPYh87Q.kXwNV4yEx8xRW0b_P7MxhA"
// tmpToken="eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.1SFutOCHZdWsT3cYsdE-D-1pMO_pJI5c2x5TYKPndXs6Xj5wFGkXmw.ttaS_6L0GdiQg4fb4D-kig.HRREhxivEe_K0U8TbPd2ETwAj2kmrjkAR7nq4OZa2n_4ESdfbuwcZ9Y6FX_WBLXRJZCCP2cYApBgfCjyTCeJ9WikR8UoG0Dp3UGmXbny3wiTCI8EYYVd-o3g7LNEXyq5xrdwNJPRf1b2mTiqw1t08oqpSZxMn8vsS0OpISWJAUJbGGT_ur5Rli4F0R_pps17Q0y-w96KgCU7WPwaI3fBTWtZr5ixyWdHQyWw8vGxdnyAyWj7AqXNxGPCc-7ckZxUd8IdywxjfSjNqzOt4ZsvfMr2cndfrvCl8LszT3ORsCyPbxDEypKj2EZlRbbOMbRRWYWT5fmZ1WoZviyRHUPg6_LuH2CqQeSLZCiWmMrm6hSf4cQjMupK8uc2vtrupd8ucqjnnF624i11VYQuw6F1lOIsfXrTQUE1-CpuJCYWs9xiCGJZUq_-2vv1ndfo24QD0U1j7JaQKIDUL8oz3ekBRqD2ogoZZeiMiFOnyND0O4hbbu98Ic_2coLO8bIMoAGbfGdwJd3PwxpRayJZ-PYKUxxhv3SC3irztT2ED2Q4cOR68iOcM0xyr8_gi215HTHUmZHbtQHVFY7S-dfcGUg-lrdNsU81vnmYIm1hESVMF9ywapksLG916SeE-f4u-GQEju6S9ka48poxtFFNYKHFtfQimTllGsEYBggZ0izPZhqHyZ4pUvPrBL6NzUzEJM-1kTcDxdJXXq6GaeTosSICsWcIu2W2OsYo-RSIBzriA_nNlBST3lkGxkiyenJ95N7jsLyeHYyB848xi5VREQEBR9cmufEN9l4o5F3I1of-CglgFWPDBF8wiaexhxF3ruc8tcDdNfM1zqv2ASvW5D-hmQ.2eUnhYO3NwT3RnONniT_DA"
// tmpToken="eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.Ja1nibNNc3z4Wkq9OSmbnGX3Q6xmjAUKSz0TzIPFCdNi7h4r9C6E8A.c8WD_bBJkOrdB_NDc4zpVA.k711h7vro23XfOaseaCyU8NHFoFKAM1MwsAmVmPxqk9M5f6_dEDMsXXtS61ImgEvwE_86TvM_y81yQ5yxZkNaHK5HQ3ZLPf9mJRyN1LHUJRIqpXTLjKpOWOPX-8Gk_psnXhibnkcWFKFLi_5r-CG10aUlwu0FW4rBurCdKtpP_2Lsd271OFZg7xBKjWYgq_aAXmQqR5ujmybSTwEgbtKWfrNm7vvh5BopLVNxo7s00qv4yINzOSKH9zP_t8ZiexCwGjxTXnXl9ycN5LVqF1xoS0q0y1U8kcRctHO_ktSFwMDMIE3m_pnHYDbKjSvfI90JjOG4I8zcBTyjHjabQyJpQr7hwYmy7_hL2XFXNRAl6JynObyC9h9OR-W_L4ps_g-WBculWfjU5vB2aKNTTJHBg7_F3Ji5ayvFSwYveKkKV8yDtpPPICAl-cbuYqnwyfLZEFOQ4MAahoLEoZxwb3RyF982TvrsBbNPvI5ov6q-5kAt1awCp2SSFBirGdpskkc8hFNm9Lyyb2_Xl6je1S1SMRvdxXzHW2ONfX7SUHL0sikwI8-9U3BR7-nsOv-JXMAQx3OgmXAZxC8n0z2RPREdy7879L71gl6UBEvvJgxlNgEW9TCjDqbeZrcNlkXOpy6VLUWLOpkiVrNsYWm3-USC8gATS8jSLhMqk5zux8JskcLZDE2MNrHHaJDVBenGKMEH8T7T-3vO19Yw1wRXC9AB4ThVNqrgHVyAfaeSRpVoGXVpqooXNWWRZBz2fcHlB9Fkn9QmvmA43suuaLmkYhjPizuWBg3cFhROFDT-3Rrd5XmNzm2j-cyrLzacwsdO6ItYadmpz8yrFSiiP0WnG7KorDIrMm43xHqzP3y_KfJ3Ou8Kdu5CHbAbwOeN_H6SxoS9HmimkGBnSDh7FXSgsdJHcwq5FuCkKvDg5e5Q9EVrnJtis8xBaAlUd1MtEC5rk29BDwKkGgOxcV6ufC50-2eRBX3cmHTmYOE78PRYA3POTQ1J-4WbtZgkkHOPCCVFm_TFjux2IxpxpPUpzLhS_CE0MdYTBHisVS2QaHwcUf9_zzHYBdU5Z13lt-b8HiL1E7UDzH4tt7_To0CU3X1HJucVHJS19RN3xtQ63_xCIcWt8gD6Yd2D9Bh-P767XvbBJHUYQVfTmsImodPBinIDL-4nQ6duuJiIkVRP4uQbTSGi943h_myCOR6B4rt8nxSWy8WIkR-Z5VUXvZrtBBuphITFHqahTXss_6SMOhTVVzDHWXswaO2s-V7GLu30fUeFZ1vyaLtaCZgw8ZnkSPY_9t4_1q_vxmz13xqqbkhTKnmn1DGErDzmoib9mVC2Jf8IWJgK4l5dRkrFtFug0Zn9QZt3MiI2T6M-xkdUaGaC1FljUFpMgjkTMfQ3p4B84p_s1XyRDXw1B_ooJ_An58VHKb3_T1XyhAVOjDgiScEF02btSQZJYlMT3ZvEa-UJ1tXp3AUoFhwzmU3lPDaSFJ_Xa0-mlrmbnZc-IKr5d61cgookmOToIKIlGQejwBPMunqiVQLAkTRzeqWomIxYqkPzw9kpwEYAuG0g_4ayqA0jGe-B_Y.FXLbZrIOtp0TKghRazeTXA"

// tmpToken =
//   "eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.XkLeaMT_dX4-CzKVN-zb1AHMY4aglX6ydO6OZ2Pmujb4aj2QYgRnNQ.QRgz0FkJsgAdF66fXD72Sw.qoDxMV9JSo62CiNRMjTFEUAL-sCbBbrfS8ml-FoCvmVC7-dDciZyWHf2ejeLnI4rboMLw3VxdY9UX_IOVWSxXQAR6TtcSvK3G0PxLlrHb2Ih0AZ-YY-EtqrgNtv9ZmM11j1D6YBXp2huRD0sG1-N-mNPtKMM5QBUiC6sXv5WEaoAFtpBhTLWHOnExus0CWWp4eKKKJI81t-WmKQzNeptLZRUmgOkZWw3CVXSs5sT3Jz5W8P5tQ2NZyGGH_Scjt7XHjXathZTgQQ6nS2-9-rOhgVGWXJXzelQYoJUv-a1v_250Z5nY_8r3iRDdZtc8FkEih3sQJAVy-3lQRm4APzOmG15M1lIBtB1LwLKgsAlWS63Cb8r2YH0IICfh3IVlOeErUfVoHuGYYrsMfhJg_vKQDBHpqY9Dy8GeaT2DcLJg9qoKkDIxPIxxnhPa68OwkvfT2Cjz7Umel15z2x1V4Lk5MguX6GAXlCff36zJV52ZyxeF0_MTn7XIdf5EbaEBp-Budk7DeqwsBH2_e24Us3_brZtAiS8zXGDHKKqmGeWVZXOcAcs5i8GgH5BlFESecXbSpAN2sDPi7Z8BDbCPhYbFKBTw-SFdSUpbW6iMpy6uJdZa9mzDSAeBsFdZG8H-r6XYHj2W4KX0MXD7mRpGC2EWq2auk0XgEK-csPJqfRDdxPAK3h0LU_9pWmynHv7tOrc_iQHjsM8_v1Z5yncKoDOXP761gsCRsPwL99qhJlYqcGdL_gxYAtL7AiNt_q6FW6xCpvYkHyrBt-FvNReOnjgag.Ty_QFqqUAd-XdGAMc4-HZw";
//tmpToken =
// "eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.j_dozQeCS4DjbpDXfZX2TzHspknFfn7gXo9-iaF0V7B_cI1uDel8WA.4hFyVbtivQ6qFSMIGTDosw.YT3J02m4tdx_k-9OIBLqaYpgBWvmop5-nSWUeE4LHOEx9rtiPU5MupwaKYphoe8EIGqulqOkr0TGZ0Mi8aRn1rYRXBK9_1794KY0qxwSpaDz7OFcw6ydHzGg2ypmK25OpFEq2bD8sJcxYxK_SFAnxQ-NK3CZIU_OobkvghYAaDDLv_IdqiTvbEoKpJAtSf2iK3Omr34EE87EUWmtEL0RtXbAItTk4lGbwi2qIxpQoIAAvdonNBeFFA6UP6VNfnyKcQzmVVHQKIufdt0BwXcrPTDJrtLGU76-Ed0TByrmTH-lj3E7W2DaojOJ2e9TdcJQjJ9ixJuJReT5jRX5TuOk9kCos4SgJehaE4ybPZbMrIKNwBO4yJgTMTd6OdYG9Uf3s0Na22fgwtPghHEawBubEPxr5iGkH7I2o-aNoG8a4MKIMRTV5pxe3vPdEs3ZN0v9eUtD_qBXg60hNNe0YSIVB719iKa6w6wCFxk2Y9eJRQ78mojA7zgIl588HyzjTKPI88NzixwcQXlLnj8tHhjDYeiRGkMmSFzVF-iTHo5iSXE769LiZ54h3RNbSLwKLzigQd2A2WLLy8RHMs5oib_b0EcIMi4emiCqoKMTUx0TPRT2yIeBUoUs0TW6Vf5qSi6T4naGxBd1im-V6Va4-rCHZ7lQ0zaeK4cUQVCkc1e0SOhQI_y9NY6KXTXmy_sLSQAlG3Zp4Gso93veN0K9XychTYV5aDxFVs4acgH4WVYun7p9eJ5ne7G-M7Ae6k1MhWpFwCVxaJX1HA9KczF-XwKTQsG66IHPqwlM9zqN5E1CsAgIEQiXeraaZKrKA47JurwwceNekZZPjBNn1nDtFqiAJ3xYVdLuS7c9JNkhVLeSOdxkeAUotVu0LRsQaioH4WMWRdLXGQARpDRtYnNX2DCHqDoUTeDW1FrHrYyIz6IIC20fR7eRdP0ErWSv5s5-iZFxdXoJZE1EsVgBRMElb_p-h82tlEqhniWtlyX2LsdpqZ7zXBykxrZoWSjOHqSYEpOTmYz66zPNzbZDIywhSKPg26wERctNRj7yY32E6NkZ5M5ojnastKjKqhLv93nvRocSxGZ95xgffXGiKJCFD2T8zWB8GURMW28H4pQEQnNvbAg2CR5_RhY6Kyf4810H9r8vZ1wfua2FtCrN9NWDVFL7Na0s7dey70u6wlrDdmiThBLnMUrYI-4xEchfMpwFWZJ_ccE3VWAenyBkKUUiaPZTpu7Z1yyrKe71ap-1x8TA_eXhfH-r993GTMBg_KS_BZpkcvpeEHL26CP-mA4-nOEuCrpUInM9gaUBYqqb7ZB-dVB-IZCBc6KPAhD-k-tDyUhNErlM-y4blVjQqk2pKoATMN_ij4qBWMQwAoAeKiDA5uBNznG7gFGr9y1I1FeBvQpcZEsnO1_IZGwhrHxVcgAawWKyNOQ0iXN_MToE9xmVD3kApfYS6c_AL5bndDGNRyXrzaaBGonI3hj3WTvM4MzYGjYEjegg5a_zRWfTK5z-UYiWKiqNTDL_DSZqrZM2noI2ClMP-yKBAOZIjcWhzJSTRWYinUS5kM69g4jcuFHN4CA.bGpsDlGILwoRdA4_JMDJsw"


axios.defaults.method = "post";
axios.defaults.baseURL = window._env_.REACT_APP_API_URL;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["kxToken"] = getCookieValue() || noTokenValue;
// console.log("Use token : ", axios.defaults.headers.common['kxToken'])
const baseUrl = window._env_.REACT_APP_API_URL;
parseUrlFromProxy();

function getAppType() {
  if(window.location.href.toLowerCase().includes("sales"))
    return "SALES";
  else if(window.location.href.toLowerCase().includes("drayage"))
    return "PARTNER";
 }


const logout = () => {
  const domain = window.location.hostname;
  document.cookie = `${getTokenName()}=;domain=${domain};path=/`;
  const dt = new Date();
  dt.setTime(dt.getTime() - 24 * 60 * 60 * 1000);
  document.cookie = `${getTokenName()}=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  window.location = "/"
  return true;
}

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    const msg = get(error, "response.data.msg", null);
    if (msg === "Expired Token" || msg === "Event not allowed without valid token" || msg === "Failed to decrypt") {
      // Send user to login URL
      // window.location = window._env_["REACT_APP_LOGOUT_URL_" + getAppType()];
      logout()
    } else {
      return Promise.reject(error);
    }
  }
);

const post = (url = "", data = "", config = {}) => {
  return axios.post(url, data, config);
};

const custom = (config = {}) => {
  axios.defaults.baseURL = window._env_.REACT_APP_API_URL;
  config.method = "post";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["kxToken"] = getCookieValue() || noTokenValue;
  // console.log("Use token : ", axios.defaults.headers.common['kxToken'])
  return axios(config);
};

const addDoc = (config = {}) => {
  config.method = "post";
  axios.defaults.baseURL = `${window._env_.REACT_APP_API_URL}?timeout=10000`;
  return axios(config);
};

// const get = (url) => {
//   return axios(url)
// }

const put = (url = "", data = "", config = {}) => {
  return axios.put(url, data, config);
};

const del = (url = "", config = {}) => {
  return axios.delete(url, config);
};

const HttpClient = {
  post,
  // get,
  put,
  delete: del,
  custom,
  baseUrl,
  // url,
  addDoc,
  server: SERVERURL,
};

export { HttpClient };
