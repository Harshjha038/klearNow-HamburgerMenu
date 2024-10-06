'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var thunkMiddleware = _interopDefault(require('redux-thunk'));
var reduxLogger = require('redux-logger');
require('moment');
require('moment-timezone');
var _ = require('lodash');
var ___default = _interopDefault(_);
var axios = _interopDefault(require('axios'));
require('date-fns');
var React = require('react');
var React__default = _interopDefault(React);
var semanticUiReact = require('semantic-ui-react');
var kxCommonComponents = require('kx-common-components');
require('semantic-ui-css/semantic.min.css');
var reactPdf = require('react-pdf');
require('react-dom');

// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".drayage_container {\n  display: flex;\n  width: 100%; }\n\n.container_modal {\n  width: 100%;\n  background-color: #f5f5f5; }\n\n.drayage-cp-container {\n  margin-top: 60px;\n  background-color: #ffffff;\n  width: 100%;\n  padding: 4%;\n  box-shadow: 0 0 2px #999;\n  min-height: 100vh; }\n\n.top_header {\n  height: 55px;\n  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5) !important; }\n\n.header_logo {\n  height: 20px;\n  margin: 18px 13px; }\n\n.header_button {\n  border: 1px solid #008b8f;\n  border-radius: 3px;\n  background-color: #fff;\n  box-shadow: 0 1px 4px 0 rgba(94, 48, 165, 0.37);\n  color: #008b8f;\n  float: right;\n  cursor: pointer;\n  padding: 7px;\n  font-size: 15px;\n  text-transform: uppercase;\n  margin: 11px 10px; }\n\n.hbmenu_icon {\n  float: left;\n  margin: 11px 0px 11px 13px; }\n\n.hamburger_menu {\n  width: 228px;\n  border: 1px solid #ccc;\n  height: calc(100vh - 60px); }\n\n.hamburger_menu_top {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0;\n  background-image: linear-gradient(225.29241deg, #04909e, #3db6b4, #7adecb); }\n\n.hamburger_menu_top {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0px 20px 0px;\n  background-image: linear-gradient(225.29241deg, #04909e, #3db6b4, #7adecb);\n  margin-top: 54px; }\n  .hamburger_menu_top .account-menu-logout {\n    align-self: flex-start;\n    margin-left: 20px;\n    letter-spacing: .7px;\n    font-weight: 400;\n    cursor: pointer;\n    color: #045685; }\n\n.profile-pic-div {\n  min-width: 100px;\n  min-height: 100px;\n  max-width: 100px;\n  max-height: 100px;\n  border-radius: 50%;\n  border: 3px solid white;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain; }\n\n.username {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  margin: 10px 20px;\n  text-align: center;\n  text-transform: capitalize; }\n\n.useremail {\n  font-size: 9px;\n  color: #fff;\n  letter-spacing: .7px; }\n\n.hamburger_menu_menu {\n  padding-left: 20px;\n  padding-top: 20px; }\n  .hamburger_menu_menu h3 {\n    color: #504e4e;\n    font-size: 14px;\n    letter-spacing: 0.47px;\n    line-height: 19px;\n    margin-bottom: 10px;\n    margin-top: 20px; }\n  .hamburger_menu_menu a {\n    font-size: 14px;\n    display: block;\n    text-decoration: none;\n    margin: 10px 0; }\n  .hamburger_menu_menu .menu-item-group {\n    display: flex; }\n  .hamburger_menu_menu .menu-item {\n    color: #295f84 !important;\n    font-size: 18px;\n    line-height: 24px;\n    cursor: pointer; }\n    .hamburger_menu_menu .menu-item:hover {\n      background: none !important;\n      font-weight: bold !important; }\n    .hamburger_menu_menu .menu-item:focus {\n      margin-left: 0;\n      padding-right: 0; }\n  .hamburger_menu_menu .menu-item-active {\n    width: 15px;\n    height: 26px;\n    position: relative;\n    top: 8px !important;\n    left: -45px; }\n\n.outer-modal-container {\n  left: 223px;\n  width: calc(100% - 228px); }\n\n.outer-modal-container {\n  margin: 75px 0 0 85px !important; }\n\n.modal-container {\n  border-radius: 8px !important;\n  margin: 5% 0 5% 25% !important;\n  width: 680px !important;\n  padding: 63px 30px !important;\n  position: relative; }\n\n#scrollableContainer {\n  height: calc(100% - 100px);\n  position: relative;\n  top: -41px;\n  overflow-x: hidden;\n  margin-top: 8%; }\n\n.modal-container {\n  margin: 5% auto !important; }\n\n.profile-pic-div {\n  min-width: 100px;\n  min-height: 100px;\n  max-width: 100px;\n  max-height: 100px;\n  border-radius: 50%;\n  border: 3px solid white;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain; }\n\n.modal-profile-image, .modal-profile-initials {\n  margin: 0 auto;\n  position: absolute;\n  top: -37px;\n  left: calc(50% - 50px); }\n\n.modal-profile-initials {\n  background-color: #295f84;\n  color: white;\n  border: 8px solid white; }\n\n.profile_header {\n  text-align: center; }\n\n.profile_header ._header {\n  margin: 18px 0 38px;\n  height: 33px;\n  color: #090b0b;\n  font-family: \"Open Sans\",sans-serif !important;\n  font-size: 28px;\n  font-weight: 500;\n  letter-spacing: 0;\n  line-height: 33px; }\n\n#modal-container, .form-column, .form-column-wrapper {\n  flex-grow: 1;\n  flex-basis: 0; }\n\n.form-column:first-child {\n  margin-top: 0; }\n\n.form-column {\n  font-family: \"Open Sans\",sans-serif; }\n\n.form-column {\n  border-top: 1px solid #1765ae;\n  flex-direction: row;\n  display: flex;\n  margin-top: 30px; }\n\n.form-column:not(.separate_rows):not(.address_row) > div:first-child div[tabindex=\"0\"], .form-column:not(.separate_rows):not(.address_row) > div:first-child input[type=text] {\n  border-left: 1px solid #1765ae !important;\n  color: #000; }\n\n.form-column-wrapper .form-column:not(.address_row) input[type=text] {\n  border-radius: 0 !important;\n  border: 1px solid #1765ae;\n  border-top: none;\n  padding-top: 26px !important;\n  height: unset !important;\n  padding-bottom: 4px !important;\n  min-height: 53px; }\n\n.form-column > div > div [tabindex=\"0\"], .form-column > div > div input[type=text] {\n  font-weight: 600; }\n\n.form-column > div {\n  flex: 1 1; }\n\n.dswqfK {\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n  position: relative;\n  margin: 0px; }\n\n.iAVvqQ {\n  height: 44px;\n  background-color: white;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(34, 36, 38, 0.15);\n  border-radius: 4px;\n  padding: 1em 0em 0em 0.5em;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 1em; }\n\n.form-column:not(.address_row) > div > div, .form-column:not(.address_row) > div > div > div, .form-column:not(.address_row) [label] {\n  font-size: 12px !important; }\n\n.form-column > div > div:first-child, .form-column > div > div:first-child > div:first-child {\n  text-transform: uppercase;\n  color: #606060;\n  font-weight: 700; }\n\n.bHnXBk {\n  font-size: 0.8em;\n  position: absolute;\n  top: 2px;\n  left: 6px;\n  font-weight: 400;\n  color: grey;\n  display: flex; }\n\n.form-column:not(.address_row) > div > div, .form-column:not(.address_row) > div > div > div, .form-column:not(.address_row) [label] {\n  font-size: 12px !important; }\n\n.dWpLch {\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: row; }\n\n.outer-modal-container .close.icon {\n  border: none !important; }\n\n.form-column:not(.address_row) [label] {\n  font-size: 12px !important; }\n\ni.icon {\n  display: inline-block;\n  opacity: 1;\n  margin: 0 0.25rem 0 0;\n  width: 1.18em;\n  height: 1em;\n  font-family: Icons;\n  font-style: normal;\n  font-weight: 400;\n  text-decoration: inherit;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.2);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.jFJGII {\n  position: absolute;\n  right: 6px;\n  display: flex;\n  align-self: center;\n  color: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease 0s;\n  padding: 2px 0px 0px;\n  height: auto !important;\n  font-size: 1em !important; }\n\n.form-column > div {\n  flex: 1 1; }\n\n.dswqfK {\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n  position: relative;\n  margin: 0px; }\n\n.form-column:not(.address_row) > div > div, .form-column:not(.address_row) > div > div > div, .form-column:not(.address_row) [label] {\n  font-size: 12px !important; }\n\n.form-column > div > div:first-child, .form-column > div > div:first-child > div:first-child {\n  text-transform: uppercase;\n  color: #606060;\n  font-weight: 700; }\n\n.form-column-wrapper .form-column:not(.address_row) div[tabindex=\"0\"], .form-column-wrapper .form-column:not(.address_row) input[type=text] {\n  border-radius: 0 !important;\n  border: 1px solid #1765ae;\n  border-top: none;\n  padding-top: 26px !important;\n  height: unset !important;\n  padding-bottom: 4px !important;\n  min-height: 53px; }\n\n.form-column:not(.address_row) > div > div #profilePicture, .form-column:not(.address_row) > div > div [tabindex=\"0\"], .form-column:not(.address_row) > div > div input[type=text] {\n  padding-left: 6px;\n  font-size: 15px !important;\n  letter-spacing: 1.14px;\n  line-height: 22px;\n  color: #000 !important; }\n\n.form-column:not(.separate_rows) > div div[tabindex=\"0\"], .form-column:not(.separate_rows) > div input[type=text], .nlb {\n  border-left: 0 !important; }\n\n.hgLnqH {\n  height: 44px;\n  background-color: white;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(34, 36, 38, 0.15);\n  cursor: not-allowed;\n  border-radius: 4px;\n  padding: 1em 0em 0em 0.5em;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  color: #9b9b9b;\n  font-size: 1em; }\n\n.ntb {\n  border-top: none; }\n\n.reset_password_wrapper > div {\n  margin-top: 0;\n  border: 0; }\n\n.delRmI {\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n  position: relative;\n  margin: 30px 0px 0px; }\n\n.dBCZSM {\n  font-size: 1em;\n  top: -20px;\n  left: 0px;\n  font-weight: 700;\n  color: #9b9b9b;\n  display: flex;\n  position: absolute; }\n\n.reset_password_wrapper > div > div:nth-child(2) {\n  border: 0;\n  padding-left: 0; }\n\n.cTNOEr {\n  min-height: 44px;\n  background-color: white;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(34, 36, 38, 0.15);\n  border-radius: 4px;\n  padding: 0.5em;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  color: #9b9b9b;\n  font-size: 1em; }\n\n.form-column-wrapper button {\n  border-color: #008b8f !important;\n  color: #008b8f !important; }\n\n.gmTQnU {\n  display: flex;\n  flex: 0 1 0%;\n  width: fit-content;\n  padding: 5px 10px;\n  text-align: center;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.7);\n  border-radius: 4px;\n  transition: all 0.2s ease 0s;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.7);\n  background-color: white;\n  font-weight: normal;\n  outline: none; }\n\n.phone_code_label {\n  position: relative;\n  top: 53px;\n  z-index: 2;\n  left: 314px;\n  text-transform: uppercase;\n  color: #606060;\n  font-weight: 700;\n  font-size: 12px; }\n\n.input-box {\n  width: 70px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n  border: none; }\n\ninput.input-box:focus {\n  background: lightcyan;\n  border: none; }\n\n.form-column {\n  border-top: 1px solid #1765ae;\n  flex-direction: row;\n  display: flex;\n  margin-top: 30px; }\n\n.form-column:not(.address_row) > div > div {\n  font-size: 12px !important; }\n\n.form-column > div > div:first-chil {\n  text-transform: uppercase;\n  color: #606060;\n  font-weight: 700; }\n\n.gcXisZ {\n  font-size: 0.8em;\n  position: absolute;\n  top: 2px;\n  left: 6px;\n  font-weight: 400;\n  color: grey;\n  cursor: pointer;\n  display: flex;\n  z-index: 1; }\n\n.cInrMX {\n  display: flex;\n  flex-direction: column;\n  position: relative; }\n\n.form-column:not(.separate_rows):not(.address_row) > div:first-child div[tabindex=\"0\"] {\n  border-left: 1px solid #1765ae !important; }\n\n.form-column-wrapper .form-column:not(.address_row) div[tabindex=\"0\"] {\n  border-radius: 0 !important;\n  border: 1px solid #1765ae;\n  border-top: none;\n  padding-top: 26px !important;\n  height: unset !important;\n  padding-bottom: 4px !important;\n  min-height: 53px; }\n\n.form-column:not(.address_row) > div > div [tabindex=\"0\"] {\n  padding-left: 6px;\n  font-size: 16px !important;\n  letter-spacing: 1.14px;\n  line-height: 22px;\n  color: #000 !important; }\n\n.kHWiJh {\n  display: flex;\n  flex-flow: row wrap;\n  -webkit-box-align: center;\n  align-items: center;\n  position: relative;\n  padding: 1em 0em 0em 0.5em;\n  background-color: white;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 1em;\n  min-height: 44px;\n  transition: all 0.2s ease 0s;\n  cursor: pointer;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(34, 36, 38, 0.15);\n  border-radius: 4px; }\n\n.form-column .angle.down.icon {\n  margin-top: 6px; }\n\ni.icon, i.icons {\n  font-size: 1em; }\n\n.ifPDqy {\n  position: absolute;\n  top: 13px;\n  right: 5px;\n  color: rgba(0, 0, 0, 0.2);\n  cursor: pointer; }\n\n.form-column > div > div:first-child, .form-column > div > div:first-child > div:first-child {\n  text-transform: uppercase;\n  color: #606060;\n  font-weight: 700; }\n\n.phone-wrapper > div > div:first-child {\n  z-index: 4;\n  margin-left: 80px; }\n\n.phone-wrapper > div > div > div:first-child {\n  margin-right: 0 !important; }\n\n.bswFeq {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0%;\n  position: relative;\n  margin: 0px; }\n\n.form-column-wrapper .form-column:not(.address_row) div[tabindex=\"0\"] {\n  border-radius: 0 !important;\n  border: 1px solid #1765ae;\n  border-top: none;\n  padding-top: 26px !important;\n  height: unset !important;\n  padding-bottom: 4px !important;\n  min-height: 53px; }\n\n.fUzuAt {\n  width: 100%;\n  height: 0px;\n  position: absolute;\n  bottom: 0px;\n  left: 0px; }\n\n.form-column-wrapper .form-column:not(.address_row) input[type=text] {\n  border-radius: 0 !important;\n  border: 1px solid #1765ae;\n  border-top: none;\n  padding-top: 26px !important;\n  height: unset !important;\n  padding-bottom: 4px !important;\n  min-height: 53px; }\n\n.status_message {\n  text-align: center;\n  margin-top: 25px;\n  font-weight: bold;\n  color: green; }\n\n.basic-info-buttonRow {\n  height: 50px;\n  display: flex;\n  margin: 0 auto;\n  position: relative; }\n\n#scrollableContainer .basic-info-buttonRow {\n  left: 0;\n  text-align: center;\n  display: block; }\n\n.ui.twitter.button.saveBasicInfo {\n  width: 50%;\n  margin: 0px;\n  border-bottom-right-radius: 3px;\n  width: 330px;\n  background: #008b8f;\n  margin-left: 10px;\n  height: 45px;\n  padding: 0px;\n  font-weight: 300;\n  font-size: 16px !important;\n  border-radius: 2px; }\n\n.ui.button.cancelBasicInfo {\n  background: #EBF2FB;\n  border: 0px;\n  width: 320px !important;\n  border: 1px solid #008b8f;\n  margin-left: 10px;\n  height: 45px;\n  padding: 0px;\n  font-weight: 300;\n  font-size: 16px !important;\n  border-radius: 2px; }\n\n.ui.twitter.button.saveBasicInfo:hover {\n  background: #008b8f; }\n\n.kHGjzY {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  width: calc(100% + 2px);\n  min-width: auto;\n  top: 0px;\n  left: -1px;\n  background-color: transparent;\n  z-index: 100;\n  max-height: 125px;\n  overflow-y: auto;\n  border-bottom: 1px solid rgba(34, 36, 38, 0.15);\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.cOtxdQ {\n  background-color: white;\n  font-weight: normal;\n  display: flex;\n  min-height: 35px;\n  -webkit-box-align: center;\n  align-items: center;\n  padding: 5px 15px;\n  transition: all 0.2s ease 0s;\n  color: rgba(34, 36, 38, 0.75);\n  cursor: pointer;\n  border-style: solid;\n  border-width: 1px 1px 0px;\n  border-color: rgba(34, 36, 38, 0.15); }\n\n.eUKCrU {\n  background-color: #fafafa;\n  font-weight: bold;\n  display: flex;\n  min-height: 35px;\n  -webkit-box-align: center;\n  align-items: center;\n  padding: 5px 15px;\n  transition: all 0.2s ease 0s;\n  color: rgba(34, 36, 38, 0.75);\n  cursor: pointer;\n  border-style: solid;\n  border-width: 1px 1px 0px;\n  border-color: rgba(34, 36, 38, 0.15); }\n\n.mb-header {\n  height: 78px;\n  border-radius: 1px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(124, 124, 124, 0.5); }\n  .mb-header .mb-title {\n    height: 26px;\n    color: #040404;\n    font-size: 17px;\n    font-weight: 500;\n    line-height: 26px;\n    text-align: left !important;\n    float: left;\n    padding-top: 10px; }\n    .mb-header .mb-title:first-child {\n      padding-left: 50px !important; }\n\n.mycustomers-table {\n  max-height: 50vh !important;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  width: 65vw !important;\n  padding: 0 !important;\n  box-sizing: border-box;\n  height: 658px;\n  border: 1px solid #295f84 !important;\n  border-radius: 2px !important;\n  background-color: #ffffff; }\n  .mycustomers-table .tab-description {\n    color: #122837;\n    font-size: 28px;\n    letter-spacing: 1.4px;\n    line-height: 37px; }\n  .mycustomers-table .add-actors {\n    padding: 40px !important; }\n    .mycustomers-table .add-actors .search-icon {\n      padding: 5px 8px;\n      float: right;\n      box-sizing: border-box;\n      border: 1px solid #008b8f;\n      border-radius: 3px;\n      background-color: #ffffff; }\n      .mycustomers-table .add-actors .search-icon:hover {\n        cursor: pointer;\n        box-shadow: 0 1px 4px 0 rgba(94, 48, 165, 0.37); }\n  .mycustomers-table table {\n    border-collapse: collapse; }\n    .mycustomers-table table td {\n      padding: 0;\n      margin: 0; }\n    .mycustomers-table table .mb-row {\n      cursor: pointer;\n      height: 50px;\n      clear: both; }\n      .mycustomers-table table .mb-row:hover {\n        background-color: #b3eeff !important; }\n    .mycustomers-table table .divider {\n      outline: 0.5px solid #f9f9f9; }\n    .mycustomers-table table .mb-button {\n      height: 25px;\n      width: 109px;\n      border: 1px solid #008b8f;\n      border-radius: 3px;\n      box-shadow: 0 1px 4px 0 rgba(94, 48, 165, 0.37);\n      float: right;\n      color: #008b8f;\n      font-size: 16px;\n      letter-spacing: 0.53px;\n      line-height: 21px;\n      margin-right: -40px !important;\n      cursor: pointer;\n      margin-left: 50px; }\n      .mycustomers-table table .mb-button.add {\n        margin-right: 50px !important; }\n  .mycustomers-table .name {\n    padding-left: 50px !important; }\n  .mycustomers-table .status {\n    padding-right: 50px !important;\n    width: 300px; }\n  .mycustomers-table .mb-li-container {\n    color: #040404 !important;\n    font-size: 18px !important;\n    line-height: 50px !important; }\n    .mycustomers-table .mb-li-container .mb-item.name {\n      margin: 10px 15px auto -10px !important; }\n\n.mb-item .ui.inline.dropdown > .text {\n  font-weight: normal;\n  font-size: 14px;\n  outline: none; }\n\n.my-customers-container {\n  width: calc( 100% - 100px) !important; }\n\n.mycustomers-table {\n  width: 100% !important; }\n\n.my-customers-container.narrow-table table {\n  table-layout: fixed; }\n  .my-customers-container.narrow-table table .mb-header {\n    height: 48px !important; }\n  .my-customers-container.narrow-table table .mb-button {\n    background-color: white;\n    margin-right: 10px !important;\n    font-size: 12px; }\n  .my-customers-container.narrow-table table .mb-row:hover {\n    background-color: #DFFEFF !important; }\n\n.mycustomers-table .initials-icon {\n  display: none; }\n\n.mycustomers-table .mb-item.email {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.my-customers-title {\n  color: #122837;\n  font-family: Roboto;\n  font-size: 36px;\n  font-weight: 300;\n  letter-spacing: 1.8px;\n  width: max-content;\n  margin-bottom: 0;\n  position: relative;\n  margin-right: auto; }\n\n.my-customers-top {\n  width: max-content;\n  display: block !important;\n  margin-bottom: 0;\n  border-top: 0; }\n\n.add_icon {\n  width: 16px;\n  margin: 3px;\n  float: left; }\n\n.mb-name {\n  width: 20% !important; }\n\n.mb-phonenumber {\n  width: 20%; }\n\n.mb-licensestate {\n  width: 20%; }\n\n.mb-licensenumber {\n  width: 20%; }\n\n.delivery-order-page .mb-remove {\n  width: 10% !important; }\n\n.delivery-order-page .mb-item {\n  padding-right: 10px;\n  overflow-wrap: anywhere;\n  height: auto !important;\n  min-height: 48px !important;\n  float: left;\n  padding-top: 14px; }\n\n.delivery-order-page .mb-row {\n  height: auto !important;\n  overflow: hidden; }\n\n.emailids-do textarea#notes, .emailids-do textarea#emailids, .notes-do textarea#notes, .notes-do textarea#emailids {\n  height: 113px !important; }\n\n.emailids-do label, .notes-do label {\n  margin-bottom: 71px !important; }\n\n.delivery-order-page .header-children {\n  flex-direction: row;\n  display: flex; }\n  .delivery-order-page .header-children:nth-child(2) {\n    margin-top: 20px; }\n  .delivery-order-page .header-children:first-child h3 {\n    max-width: fit-content; }\n    .delivery-order-page .header-children:first-child h3 + div {\n      margin-top: 10px;\n      margin-left: 20px; }\n\n.delivery-order-page .my-customers-header {\n  flex-direction: column; }\n\n.delivery-order-page .mycustomers-table::-webkit-scrollbar {\n  width: 10px !important; }\n\n.filter-tab {\n  height: 25px;\n  padding: 2px 7px;\n  margin-right: 20px;\n  margin-right: 0;\n  display: inline-block;\n  float: right;\n  border: 1px solid #008B8F;\n  background: white; }\n  .filter-tab .filter-title {\n    color: #267678; }\n  .filter-tab .filter-count {\n    background: #008B8F;\n    color: white; }\n  .filter-tab:nth-child(2) {\n    margin-right: 10px;\n    border-radius: 3px; }\n  .filter-tab:nth-child(3) {\n    border-radius: 3px;\n    margin-right: 10px; }\n  .filter-tab:nth-child(1) {\n    border-radius: 3px;\n    cursor: pointer; }\n    .filter-tab:nth-child(1) .filter-title {\n      margin-right: 0 !important; }\n";
styleInject(css_248z);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _scacCodes, _opsProcessEvents;

var modals = {
  myFreightForwarders: "myFreightForwarders",
  myCustomers: "myCustomers",
  myBrokers: "myBrokers",
  myPersonalProfile: "myPersonalProfile",
  drayageCompanyProfile: "drayageCompanyProfile",
  myCompany: "myCompany",
  businessSize: "businessSize",
  paymentInformation: "paymentInformation",
  paymentHistory: "paymentHistory",
  customsStatements: "customsStatements",
  shippingInformation: "shippingInformation",
  shippingDestinations: "shippingDestinations",
  manufacturers: "manufacturers",
  bondInformation: "bondInformation",
  communications: "communications",
  manageUsers: "manageUsers",
  myInvoices: "myInvoices",
  deliveryOrder: "deliveryOrder",
  docs: "docs",
  serviceArea: "serviceArea",
  accessorialCharges: "accessorialCharges",
  mytruckers: "mytruckers"
};

var scacCodes = (_scacCodes = {
  "11DX": "11DX",
  "22AA": "22AA",
  ABFS: "ABFS",
  ACLU: "ACLU",
  ACSU: "ACSU",
  AKMR: "AKMR",
  ALLV: "ALLV",
  ANNU: "ANNU",
  ANRM: "ANRM",
  ANTC: "ANTC",
  APLU: "APLU",
  ARFW: "ARFW",
  ARKU: "ARKU",
  AROF: "AROF",
  AYAF: "AYAF",
  BAXG: "BAXG",
  BCLU: "BCLU",
  BKFB: "BKFB",
  BLOJ: "BLOJ",
  BNAF: "BNAF",
  BTEY: "BTEY",
  CBNP: "CBNP",
  CDNK: "CDNK",
  CEGL: "CEGL",
  CENF: "CENF",
  CGSQ: "CGSQ",
  CHIW: "CHIW",
  CHKA: "CHKA",
  CHNJ: "CHNJ",
  CHRP: "CHRP",
  CHVW: "CHVW",
  CJRF: "CJRF"
}, defineProperty(_scacCodes, "CJRF", "CJRF"), defineProperty(_scacCodes, "CJRQ", "CJRQ"), defineProperty(_scacCodes, "CLIB", "CLIB"), defineProperty(_scacCodes, "CMCU/CAMN", "CMCU/CAMN"), defineProperty(_scacCodes, "CMDU", "CMDU"), defineProperty(_scacCodes, "CNIU", "CNIU"), defineProperty(_scacCodes, "CNPC", "CNPC"), defineProperty(_scacCodes, "COSU", "COSU"), defineProperty(_scacCodes, "COTO", "COTO"), defineProperty(_scacCodes, "CPGP", "CPGP"), defineProperty(_scacCodes, "CPJQ", "CPJQ"), defineProperty(_scacCodes, "CSXT", "CSXT"), defineProperty(_scacCodes, "CTII", "CTII"), defineProperty(_scacCodes, "CWAS", "CWAS"), defineProperty(_scacCodes, "CWCE", "CWCE"), defineProperty(_scacCodes, "CWIM", "CWIM"), defineProperty(_scacCodes, "CWSE", "CWSE"), defineProperty(_scacCodes, "CWWE", "CWWE"), defineProperty(_scacCodes, "DAAE", "DAAE"), defineProperty(_scacCodes, "DBGB", "DBGB"), defineProperty(_scacCodes, "DMLI", "DMLI"), defineProperty(_scacCodes, "DOLQ", "DOLQ"), defineProperty(_scacCodes, "DOLR", "DOLR"), defineProperty(_scacCodes, "DYLT", "DYLT"), defineProperty(_scacCodes, "EGLV", "EGLV"), defineProperty(_scacCodes, "EIMU/EIMW", "EIMU/EIMW"), defineProperty(_scacCodes, "ELOI", "ELOI"), defineProperty(_scacCodes, "EQLI", "EQLI"), defineProperty(_scacCodes, "ESPU", "ESPU"), defineProperty(_scacCodes, "EUKO", "EUKO"), defineProperty(_scacCodes, "EWCF", "EWCF"), defineProperty(_scacCodes, "EXLA", "EXLA"), defineProperty(_scacCodes, "EXPD", "EXPD"), defineProperty(_scacCodes, "FDCC", "FDCC"), defineProperty(_scacCodes, "FDE", "FDE"), defineProperty(_scacCodes, "FDEG/FDXG", "FDEG/FDXG"), defineProperty(_scacCodes, "FESO", "FESO"), defineProperty(_scacCodes, "FICS", "FICS"), defineProperty(_scacCodes, "FLJF", "FLJF"), defineProperty(_scacCodes, "FTNA", "FTNA"), defineProperty(_scacCodes, "FWFG", "FWFG"), defineProperty(_scacCodes, "FXFE", "FXFE"), defineProperty(_scacCodes, "FXFW", "FXFW"), defineProperty(_scacCodes, "FXNL", "FXNL"), defineProperty(_scacCodes, "GBEA", "GBEA"), defineProperty(_scacCodes, "GBXI", "GBXI"), defineProperty(_scacCodes, "GESC", "GESC"), defineProperty(_scacCodes, "GFAL", "GFAL"), defineProperty(_scacCodes, "GMLS", "GMLS"), defineProperty(_scacCodes, "GPTC", "GPTC"), defineProperty(_scacCodes, "GRIU", "GRIU"), defineProperty(_scacCodes, "GSLU", "GSLU"), defineProperty(_scacCodes, "HAEI", "HAEI"), defineProperty(_scacCodes, "HDMU", "HDMU"), defineProperty(_scacCodes, "HJBT", "HJBT"), defineProperty(_scacCodes, "HLCU", "HLCU"), defineProperty(_scacCodes, "HOYO", "HOYO"), defineProperty(_scacCodes, "HRCF", "HRCF"), defineProperty(_scacCodes, "HRZU", "HRZU"), defineProperty(_scacCodes, "HUAU", "HUAU"), defineProperty(_scacCodes, "HUBT", "HUBT"), defineProperty(_scacCodes, "HYDU", "HYDU"), defineProperty(_scacCodes, "IDMC", "IDMC"), defineProperty(_scacCodes, "IEXA", "IEXA"), defineProperty(_scacCodes, "IILU", "IILU"), defineProperty(_scacCodes, "INML", "INML"), defineProperty(_scacCodes, "INOC", "INOC"), defineProperty(_scacCodes, "ITFC", "ITFC"), defineProperty(_scacCodes, "KAEJ", "KAEJ"), defineProperty(_scacCodes, "KHNN", "KHNN"), defineProperty(_scacCodes, "KKLU", "KKLU"), defineProperty(_scacCodes, "KMTU", "KMTU"), defineProperty(_scacCodes, "KNIG", "KNIG"), defineProperty(_scacCodes, "KOSL", "KOSL"), defineProperty(_scacCodes, "LDYN", "LDYN"), defineProperty(_scacCodes, "LDYQ", "LDYQ"), defineProperty(_scacCodes, "LGLT", "LGLT"), defineProperty(_scacCodes, "LMCU", "LMCU"), defineProperty(_scacCodes, "MAEU", "MAEU"), defineProperty(_scacCodes, "MATS", "MATS"), defineProperty(_scacCodes, "MCCQ", "MCCQ"), defineProperty(_scacCodes, "MCPU", "MCPU"), defineProperty(_scacCodes, "MFTU", "MFTU"), defineProperty(_scacCodes, "MGMC", "MGMC"), defineProperty(_scacCodes, "MISC", "MISC"), defineProperty(_scacCodes, "MRUB", "MRUB"), defineProperty(_scacCodes, "MSCU", "MSCU"), defineProperty(_scacCodes, "MTEN", "MTEN"), defineProperty(_scacCodes, "NAFT", "NAFT"), defineProperty(_scacCodes, "NAVI", "NAVI"), defineProperty(_scacCodes, "NIDU", "NIDU"), defineProperty(_scacCodes, "NODA", "NODA"), defineProperty(_scacCodes, "NOSU", "NOSU"), defineProperty(_scacCodes, "NSAU", "NSAU"), defineProperty(_scacCodes, "NSLU", "NSLU"), defineProperty(_scacCodes, "NXPL", "NXPL"), defineProperty(_scacCodes, "NYKU/NYKS", "NYKU/NYKS"), defineProperty(_scacCodes, "ODFL", "ODFL"), defineProperty(_scacCodes, "ONEY", "ONEY"), defineProperty(_scacCodes, "OOLU", "OOLU"), defineProperty(_scacCodes, "PAMT", "PAMT"), defineProperty(_scacCodes, "PAYL", "PAYL"), defineProperty(_scacCodes, "PCIU", "PCIU"), defineProperty(_scacCodes, "PDME", "PDME"), defineProperty(_scacCodes, "PENS", "PENS"), defineProperty(_scacCodes, "PFLP", "PFLP"), defineProperty(_scacCodes, "PLGQ", "PLGQ"), defineProperty(_scacCodes, "PLLU", "PLLU"), defineProperty(_scacCodes, "PMOL", "PMOL"), defineProperty(_scacCodes, "PNEP", "PNEP"), defineProperty(_scacCodes, "PRIJ", "PRIJ"), defineProperty(_scacCodes, "PRML", "PRML"), defineProperty(_scacCodes, "PSHI", "PSHI"), defineProperty(_scacCodes, "PSQL", "PSQL"), defineProperty(_scacCodes, "PYLE", "PYLE"), defineProperty(_scacCodes, "RCKI", "RCKI"), defineProperty(_scacCodes, "RDSS", "RDSS"), defineProperty(_scacCodes, "RGLN", "RGLN"), defineProperty(_scacCodes, "ROWL", "ROWL"), defineProperty(_scacCodes, "RUSS", "RUSS"), defineProperty(_scacCodes, "RXLI", "RXLI"), defineProperty(_scacCodes, "RYOM", "RYOM"), defineProperty(_scacCodes, "SAFM", "SAFM"), defineProperty(_scacCodes, "SAIA", "SAIA"), defineProperty(_scacCodes, "SCIU", "SCIU"), defineProperty(_scacCodes, "SCYE", "SCYE"), defineProperty(_scacCodes, "SDYA", "SDYA"), defineProperty(_scacCodes, "SEFN", "SEFN"), defineProperty(_scacCodes, "SEJJ", "SEJJ"), defineProperty(_scacCodes, "SKII", "SKII"), defineProperty(_scacCodes, "SKLU", "SKLU"), defineProperty(_scacCodes, "SLAQ", "SLAQ"), defineProperty(_scacCodes, "SMLU", "SMLU"), defineProperty(_scacCodes, "SNCY/SNLU/SCNN", "SNCY/SNLU/SCNN"), defineProperty(_scacCodes, "STVV", "STVV"), defineProperty(_scacCodes, "SUDU", "SUDU"), defineProperty(_scacCodes, "SWFT", "SWFT"), defineProperty(_scacCodes, "TCKM", "TCKM"), defineProperty(_scacCodes, "THZS", "THZS"), defineProperty(_scacCodes, "TOHO", "TOHO"), defineProperty(_scacCodes, "TOTE", "TOTE"), defineProperty(_scacCodes, "TPNW", "TPNW"), defineProperty(_scacCodes, "TRKU", "TRKU"), defineProperty(_scacCodes, "UALC", "UALC"), defineProperty(_scacCodes, "UBCU", "UBCU"), defineProperty(_scacCodes, "UDRY", "UDRY"), defineProperty(_scacCodes, "UPGF", "UPGF"), defineProperty(_scacCodes, "UPSS/UPSZ/UPSN/UPSC", "UPSS/UPSZ/UPSN/UPSC"), defineProperty(_scacCodes, "UQEP", "UQEP"), defineProperty(_scacCodes, "USAU/USAX", "USAU/USAX"), defineProperty(_scacCodes, "USIT", "USIT"), defineProperty(_scacCodes, "USLU", "USLU"), defineProperty(_scacCodes, "USNW", "USNW"), defineProperty(_scacCodes, "USPS", "USPS"), defineProperty(_scacCodes, "USXI", "USXI"), defineProperty(_scacCodes, "UYSN", "UYSN"), defineProperty(_scacCodes, "VCTS", "VCTS"), defineProperty(_scacCodes, "VLOQ", "VLOQ"), defineProperty(_scacCodes, "VSRD", "VSRD"), defineProperty(_scacCodes, "WDLS", "WDLS"), defineProperty(_scacCodes, "WECU", "WECU"), defineProperty(_scacCodes, "WLWH", "WLWH"), defineProperty(_scacCodes, "WWSU", "WWSU"), defineProperty(_scacCodes, "XPOC/XPOL", "XPOC/XPOL"), defineProperty(_scacCodes, "XUI", "XUI"), defineProperty(_scacCodes, "YMLU", "YMLU"), defineProperty(_scacCodes, "ZIMU", "ZIMU"), _scacCodes);

var opsProcessEvents = (_opsProcessEvents = {
  // SHIPMENT_OPS_PROCESS
  STATE_OPS_NONE: "NEW",
  STATE_OPS_NEW: "NEW",
  STATE_OPS_SKIPPED: "OPS SKIPPED",
  STATE_OPS_ASSIGNED: "OPS ASSIGNED",
  STATE_OPS_IN_PROCESS: "OPS IN PROGRESS",
  STATE_OPS_STUCK: "OPS STUCK",
  STATE_OPS_READY: "OPS READY",
  STATE_OPS_DONE: "OPS DONE",

  // SHIPMENT_US_ISF_PROCESS
  STATE_ISF_NONE: "ISF NEW",
  STATE_ISF_NEW: "ISF NEW",
  STATE_ISF_ASSIGNED: "ISF ASSIGNED",
  STATE_ISF_IN_PROCESS: "ISF IN PROCESS",
  STATE_ISF_STUCK: "ISF STUCK",
  STATE_ISF_READY: "ISF READY",
  STATE_ISF_FILED: "ISF FILED",
  STATE_ISF_SKIPPED: "ISF SKIPPED",
  STATE_ISF_ACCEPTED: "ISF ACCEPTED",
  STATE_ISF_ACCEPTED_WITH_WARNINGS: "ISF ACCEPTED WITH WARNING",
  STATE_ISF_ACCEPTED_NO_BILL_MATCH: "ISF ACCEPTED NO BILL MATCH",
  STATE_ISF_ACCEPTED_BILL_MATCH: "ISF ACCEPTED BILL MATCH",
  STATE_ISF_REJECTED: "ISF REJECTED",
  STATE_ISF_RETRACT_FILED: "ISF RETRACT FILED",
  STATE_ISF_RETRACT_ACCEPTED: "ISF RETRACT ACCEPTED",
  STATE_ISF_RETRACT_REJECTED: "ISF RETRACT REJECTED",
  STATE_ISF_REPLACE_FILED: "ISF REPLACE FILED",
  STATE_ISF_REPLACE_ACCEPTED: "ISF REPLACE ACCEPTED",
  STATE_ISF_REPLACE_REJECTED: "ISF REPLACE REJECTED",

  // SHIPMENT_BROKER_PROCESS
  STATE_BROKER_NONE: "NO BROKER",
  STATE_BROKER_READY: "BROKER READY",
  STATE_BROKER_IN_QUEUE: "BROKER PENDING",
  STATE_ASSIGNED_TO_BROKER: "BROKER PROCESSING",

  // SHIPMENT_US_CR_PROCESS / CA
  STATE_CARGO_RELEASE_NONE: "CR NEW",
  STATE_CARGO_RELEASE_NEW: "CR NEW",
  STATE_CARGO_RELEASE_ASSIGNED: "CR ASSIGNED",
  STATE_CARGO_RELEASE_IN_PROCESS: "CR IN PROGRESS",
  STATE_CARGO_RELEASE_STUCK: "CR STUCK",
  STATE_CARGO_RELEASE_READY: "CR READY",
  STATE_CARGO_RELEASE_FILED: "CR FILED",
  STATE_CARGO_RELEASE_ACCEPTED: "CR ACCEPTED",
  STATE_CARGO_RELEASE_ACCEPTED_NO_BILL_MATCH: "CR ACCEPTED NO BILL MATCH",
  STATE_CARGO_RELEASE_ACCEPTED_WITH_WARNINGS: "CR ACCEPTED WITH WARNINGS",
  STATE_CARGO_RELEASE_REJECTED: "CR REJECTED",
  STATE_CARGO_RELEASE_ACKNOWLEDGED: "CR ACKNOWLEDGED",
  STATE_CARGO_RELEASE_RETRACT_FILED: "CR RETRACT FILED",
  STATE_CARGO_RELEASE_RETRACT_ACCEPTED: "CR RETRACT ACCEPTED",
  STATE_CARGO_RELEASE_RETRACT_REJECTED: "CR RETRACT REJECTED",
  STATE_CARGO_RELEASE_REPLACE_FILED: "CR REPLACE FILED",
  STATE_CARGO_RELEASE_REPLACE_ACCEPTED: "CR REPLACE ACCEPTED",
  STATE_CARGO_RELEASE_REPLACE_REJECTED: "CR REPLACE REJECTED",
  STATE_CARGO_RELEASE_CANCEL_FILED: "CR CANCEL FILED",
  STATE_CARGO_RELEASE_CANCEL_ACCEPTED: "CR CANCEL ACCEPTED",
  STATE_CARGO_RELEASE_CANCEL_REJECTED: "CR CANCEL REJECTED",
  STATE_CARGO_RELEASE_CHANGE_FILED: "CR CHANGE FILED",
  STATE_CARGO_RELEASE_CHANGE_ACCEPTED: "CR CHANGE ACCEPTED",
  STATE_CARGO_RELEASE_CHANGE_REJECTED: "CR CHANGE REJECTED",
  STATE_CARGO_RELEASE_AMEND_FILED: "CR AMEND FILED",
  STATE_CARGO_RELEASE_AMEND_ACCEPTED: "CR AMEND ACCEPTED",
  STATE_CARGO_RELEASE_AMEND_REJECTED: "CR AMEND REJECTED",

  // SHIPMENT_US_ES_PROCESS / CA
  STATE_ENTRY_SUMMARY_NONE: "ES NEW",
  STATE_ENTRY_SUMMARY_NEW: "ES NEW",
  STATE_ENTRY_SUMMARY_IN_PROCESS: "ES IN PROCESS",
  STATE_ENTRY_SUMMARY_STUCK: "ES STUCK",
  STATE_ENTRY_SUMMARY_READY: "ES READY",
  STATE_ENTRY_SUMMARY_FILED: "ES FILED",
  STATE_ENTRY_SUMMARY_ACCEPTED: "ES ACCEPTED",
  STATE_ENTRY_SUMMARY_ACCEPTED_NO_BILL_MATCH: "ES ACCEPTED NO BILL MATCH",
  STATE_ENTRY_SUMMARY_REJECTED: "ES REJECTED",
  STATE_ENTRY_SUMMARY_RETRACT_FILED: "ES RETRACT FILED",
  STATE_ENTRY_SUMMARY_RETRACT_ACCEPTED: "ES RETRACT ACCEPTED",
  STATE_ENTRY_SUMMARY_RETRACT_REJECTED: "ES RETRACT REJECTED",
  STATE_ENTRY_SUMMARY_REPLACE_FILED: "ES REPLACE FILED",
  STATE_ENTRY_SUMMARY_REPLACE_ACCEPTED: "ES REPLACE ACCEPTED",
  STATE_ENTRY_SUMMARY_REPLACE_REJECTED: "ES REPLACE REJECTED",

  // EXPIDITOR_OPS_PROCESS
  STATE_OPERATOR_1_ASSIGNED: "STATE_OPERATOR_1_ASSIGNED",
  STATE_OPERATOR_2_ASSIGNED: "STATE_OPERATOR_2_ASSIGNED",
  STATE_OPERATOR_1_IN_PROCESS: "STATE_OPERATOR_1_IN_PROCESS",
  STATE_OPERATOR_2_IN_PROCESS: "STATE_OPERATOR_2_IN_PROCESS",
  STATE_OPERATOR_1_STUCK: "STATE_OPERATOR_1_STUCK",
  STATE_OPERATOR_2_STUCK: "STATE_OPERATOR_2_STUCK",
  STATE_OPERATOR_1_READY: "STATE_OPERATOR_1_READY",
  STATE_OPERATOR_2_READY: "STATE_OPERATOR_2_READY",

  // SHIPMENT_SUPERVISOR_PROCESS
  STATE_SUPERVISOR_NONE: "SUPERVISOR NEW",
  STATE_SUPERVISOR_IN_PROCESS: "SUPERVISOR IN PROCESS",
  STATE_SUPERVISOR_DONE: "SUPERVISOR COMPLETE",

  // LATE FINDS - Jake added, verify w/ sangeeta
  STATE_BROKER_ASSIGNED: "BROKER ASSIGNED",
  STATE_ENTRY_ACCOUNTING_FILED: "ENTRY ACCOUNT FILED",
  STATE_SKIP_OPS: "OPS SKIPPED",
  STATE_SAVE_DONE: "SAVE DONE",
  STATE_ARRIVAL_NOTICE_RECEIVED: "ARRIVAL NOTICE RECEIVED",
  STATE_ENTRY_ACCOUNTING_IN_PROCESS: "ENTRY ACCOUNTING IN PROCESS"
}, defineProperty(_opsProcessEvents, "STATE_ENTRY_ACCOUNTING_FILED", "ENTRY ACCOUNTING FILED"), defineProperty(_opsProcessEvents, "STATE_ENTRY_ACCOUNTING_REJECTED", "ENTRY ACCOUNTING REJECTED"), defineProperty(_opsProcessEvents, "STATE_ENTRY_ACCOUNTING_ACCEPTED", "ENTRY ACCOUNTING ACCEPTED"), defineProperty(_opsProcessEvents, "STATE_ADD_DOCUMENT", "DOC STITCHED"), defineProperty(_opsProcessEvents, "STATE_ADD_DOCUMENT_DONE", "DOC DATA ADDED"), defineProperty(_opsProcessEvents, "STATE_DO_NEW", "DO NEW"), defineProperty(_opsProcessEvents, "STATE_DO_IN_PROCESS", "DO IN PROCESS"), defineProperty(_opsProcessEvents, "STATE_DO_DONE", "DO DONE"), defineProperty(_opsProcessEvents, "STATE_DO_APPROVED", "DO APPROVED"), defineProperty(_opsProcessEvents, "STATE_DO_PUBLISHED", "DO PUBLISHED"), defineProperty(_opsProcessEvents, "STATE_DO_GENERATE_PDF", "DO PDF GENERATED"), defineProperty(_opsProcessEvents, "STATE_SAVE_DONE", "SAVE DONE"), defineProperty(_opsProcessEvents, "STATE_CHECKPOINT_FAILED", "BROKER ASSIGNMENT FAILED"), defineProperty(_opsProcessEvents, "PAYMENT_BROKER_FEE_ES_ACCEPTED", "BROKER PAYMENT"), defineProperty(_opsProcessEvents, "STATE_PREP_MERGED", "MERGED"), defineProperty(_opsProcessEvents, "STATE_PREP_SIMHASH_MATCHED", "DOC MATCH"), defineProperty(_opsProcessEvents, "STATE_PREP_IN_PROCESS", "IN PROCESS"), defineProperty(_opsProcessEvents, "STATE_PREP_NEW", "NEW"), defineProperty(_opsProcessEvents, "STATE_PREP_MANUAL_MATCH", "MANUAL MATCH"), defineProperty(_opsProcessEvents, "STATE_PREP_NEW_CREATED", "NEW CREATED"), defineProperty(_opsProcessEvents, "STATE_DO_PUBLISHED", "PUBLISHED"), defineProperty(_opsProcessEvents, "STATE_DO_DONE", "DONE"), defineProperty(_opsProcessEvents, "STATE_DO_IN_PROCESS", "IN PROCESS"), defineProperty(_opsProcessEvents, "STATE_DO_GENERATE_PDF", "PDF GENERATED"), defineProperty(_opsProcessEvents, "STATE_DO_NEW", "NEW"), _opsProcessEvents);

var SERVERURL = 'https://api-dev.klearexpress.com/v1/events';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (process.env.NODE_ENV !== 'production') {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(12) : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(13) : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

/*************************************************************************
 * 
 * KLEAREXPRESS CONFIDENTIAL
 * __________________
 * 
 *  Copyright (c) 2018 - 2021 KlearExpress Corporation.
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
//  import ShipmentList from '../reducers/shipmentList'
//  import OpportunityReducer from './OpportunityReducer'


var rootReducer = combineReducers({
  //  shipmentList: ShipmentList
  //   opportunityReducer : OpportunityReducer
});

/*************************************************************************
 *
 * KLEARNOW CONFIDENTIAL
 * __________________
 *
 *  Copyright (c) 2018 - 2021 KlearExpress Corporation.
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

// Opportinity

var APPLICATION_CLICKED = "APPLICATION_CLICKED";

var OPPORTUNITY_ARROW_CLICKED = "OPPORTUNITY_ARROW_CLICKED";

var OPPORTUNITY_BID_CLICKED = "OPPORTUNITY_BID_CLICKED";

var ADDITONAL_CHARGE_DONE_CLICKED = "ADDITONAL_CHARGE_DONE_CLICKED";
var ADDITONAL_CHARGE_CANCEL_CLICKED = "ADDITONAL_CHARGE_CANCEL_CLICKED";

var OPPORTUNITY_BID_MODAL_BID_CLICKED = "OPPORTUNITY_BID_MODAL_BID_CLICKED";
var OPPORTUNITY_BID_MODAL_PORT_ADDITIONAL_CHARGE_CLICKED = "OPPORTUNITY_BID_MODAL_PORT_ADDITIONAL_CHARGE_CLICKED";
var OPPORTUNITY_BID_MODAL_SUBMIT_CLICKED = "OPPORTUNITY_BID_MODAL_SUBMIT_CLICKED";
var OPPORTUNITY_BID_MODAL_CANCEL_CLICKED = "OPPORTUNITY_BID_MODAL_CANCEL_CLICKED";

var LANE_BID_DONE_CLICKED = "LANE_BID_DONE_CLICKED";
var LANE_BID_CANCEL_CLICKED = "LANE_BID_CANCEL_CLICKED";
var LANE_BID_ADDITIONAL_CHARGE_CLICKED = "LANE_BID_ADDITIONAL_CHARGE_CLICKED";

//Standard additional charges
var PARTNER_STANDARD_ADDITIONAL_CHARGES = "PARTNER_STANDARD_ADDITIONAL_CHARGES";

//API

var API_GET_OPPORTINITY_LIST = "API_GET_OPPORTINITY_LIST";
var API_GET_OPPORTINITY_DETAILS = "API_GET_OPPORTINITY_DETAILS";

//Internal bid data storage - when user enters bid info in any form for a given opportunity
var SET_OPPORTUNITY_BID_DATA = "SET_OPPORTUNITY_BID_DATA";

var LANE_BID_SELECT_CLICKED = "LANE_BID_SELECT_CLICKED";

var actions = /*#__PURE__*/Object.freeze({
  APPLICATION_CLICKED: APPLICATION_CLICKED,
  OPPORTUNITY_ARROW_CLICKED: OPPORTUNITY_ARROW_CLICKED,
  OPPORTUNITY_BID_CLICKED: OPPORTUNITY_BID_CLICKED,
  ADDITONAL_CHARGE_DONE_CLICKED: ADDITONAL_CHARGE_DONE_CLICKED,
  ADDITONAL_CHARGE_CANCEL_CLICKED: ADDITONAL_CHARGE_CANCEL_CLICKED,
  OPPORTUNITY_BID_MODAL_BID_CLICKED: OPPORTUNITY_BID_MODAL_BID_CLICKED,
  OPPORTUNITY_BID_MODAL_PORT_ADDITIONAL_CHARGE_CLICKED: OPPORTUNITY_BID_MODAL_PORT_ADDITIONAL_CHARGE_CLICKED,
  OPPORTUNITY_BID_MODAL_SUBMIT_CLICKED: OPPORTUNITY_BID_MODAL_SUBMIT_CLICKED,
  OPPORTUNITY_BID_MODAL_CANCEL_CLICKED: OPPORTUNITY_BID_MODAL_CANCEL_CLICKED,
  LANE_BID_DONE_CLICKED: LANE_BID_DONE_CLICKED,
  LANE_BID_CANCEL_CLICKED: LANE_BID_CANCEL_CLICKED,
  LANE_BID_ADDITIONAL_CHARGE_CLICKED: LANE_BID_ADDITIONAL_CHARGE_CLICKED,
  PARTNER_STANDARD_ADDITIONAL_CHARGES: PARTNER_STANDARD_ADDITIONAL_CHARGES,
  API_GET_OPPORTINITY_LIST: API_GET_OPPORTINITY_LIST,
  API_GET_OPPORTINITY_DETAILS: API_GET_OPPORTINITY_DETAILS,
  SET_OPPORTUNITY_BID_DATA: SET_OPPORTUNITY_BID_DATA,
  LANE_BID_SELECT_CLICKED: LANE_BID_SELECT_CLICKED
});

/*************************************************************************
 * 
 * KlearNow CONFIDENTIAL
 * __________________
 * 
 *  Copyright (c) 2021 - 2021 KlearExpress Corporation.
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
var actionSanitizer = function actionSanitizer(action) {
  return actions[action.type] ? _extends({}, action) : null;
};

var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  actionSanitizer: actionSanitizer,
  stateSanitizer: function stateSanitizer(state) {
    return { modal: state.modal };
  }
}) : compose;

var middleware = [thunkMiddleware];

// UNCOMMENT OUT BELOW TO LOG ACTIONS TO CONSOLE
// process.env.NODE_ENV !== 'production' && middleware.push(logger)

var enhancer = composeEnhancers(applyMiddleware.apply(undefined, middleware.concat([reduxLogger.logger])), applyMiddleware.apply(undefined, middleware)

// other store enhancers if any
);

var store = createStore(rootReducer, enhancer);

var _this = undefined;

// Removes spaces and - from input
var parseNumber = function parseNumber(input) {
  var tempStr = input.toString(); // Convert phone to string
  var parsedStr = ""; // Create empty string for parsed phone #

  // Removes ' ' and '-' from number
  for (var i = 0; i < tempStr.length; i++) {
    if (!(tempStr.charAt(i) === " " || tempStr.charAt(i) === "-")) parsedStr += tempStr.charAt(i);
  }return parseInt(parsedStr); // Convert back into number
};

var getInitials = function getInitials(name) {
  if (!name) {
    return "";
  }
  return name.split(/\s/).reduce(function (response, word) {
    return response += word.slice(0, 1);
  }, "").toUpperCase().substring(0, 3);
};

// Create a promise that rejects in <ms> milliseconds
var timeoutPromise = function () {
  var _ref6 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ms, promise) {
    var timeout;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (promise) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", Promise.resolve(null));

          case 2:
            timeout = new Promise(function (resolve, reject) {
              var id = setTimeout(function () {
                clearTimeout(id);
                resolve(null);
              }, ms);
            });

            // Returns a race between our timeout and the passed in promise

            return _context.abrupt("return", Promise.race([promise, timeout]));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function timeoutPromise(_x, _x2) {
    return _ref6.apply(this, arguments);
  };
}();

function getAppType() {
  if (window.location.href.toLowerCase().includes("sales")) return "SALES";else if (window.location.href.toLowerCase().includes("drayage")) return "PARTNER";
}

//if logging in from a different domain will route to /validate?token=[token] and set cookie
var parseUrlFromProxy = function parseUrlFromProxy() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var token = urlParams.get("token");
  if (!token) return;
  var domain = window.location.hostname;
  domain = domain.split(".");
  domain = "." + domain[1] + "." + domain[2];
  document.cookie = "kxCommonToken=" + token + ";domain=" + domain + ";path=/";
  window.location = window._env_["REACT_APP_LOGIN_URL_" + getAppType()];

  return token;
};

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

var getTokenName = function getTokenName() {
  console.trace("APP NAME :: getTokenName", window._env_.APP_NAME);
  switch (window._env_.APP_NAME) {
    case "Partner":
      return "kxPartnerToken";
    case "Customer":
      return "kxCustomerToken";
    case "Sales":
      return "kxSalesToken";
  }
  return "kxCustomerToken";
};

var getCookieValue$1 = function getCookieValue$$1() {
  var b = document.cookie.match("(^|;)\\s*" + getTokenName() + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};

var noTokenValue = "_BLANK_";
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
axios.defaults.headers.common["kxToken"] = getCookieValue$1() || noTokenValue;
// console.log("Use token : ", axios.defaults.headers.common['kxToken'])
var baseUrl = window._env_.REACT_APP_API_URL;
parseUrlFromProxy();

var logout = function logout() {
  var domain = window.location.hostname;
  document.cookie = getTokenName() + "=;domain=" + domain + ";path=/";
  var dt = new Date();
  dt.setTime(dt.getTime() - 24 * 60 * 60 * 1000);
  document.cookie = getTokenName() + "=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  window.location = "/";
  return true;
};

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  var msg = _.get(error, "response.data.msg", null);
  if (msg === "Expired Token" || msg === "Event not allowed without valid token" || msg === "Failed to decrypt") {
    // Send user to login URL
    // window.location = window._env_["REACT_APP_LOGOUT_URL_" + getAppType()];
    logout();
  } else {
    return Promise.reject(error);
  }
});

var post = function post() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return axios.post(url, data, config);
};

var custom = function custom() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  axios.defaults.baseURL = window._env_.REACT_APP_API_URL;
  config.method = "post";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["kxToken"] = getCookieValue$1() || noTokenValue;
  // console.log("Use token : ", axios.defaults.headers.common['kxToken'])
  return axios(config);
};

var addDoc = function addDoc() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  config.method = "post";
  axios.defaults.baseURL = window._env_.REACT_APP_API_URL + "?timeout=10000";
  return axios(config);
};

// const get = (url) => {
//   return axios(url)
// }

var put = function put() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return axios.put(url, data, config);
};

var del = function del() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return axios.delete(url, config);
};

var HttpClient = {
  post: post,
  // get,
  put: put,
  delete: del,
  custom: custom,
  baseUrl: baseUrl,
  // url,
  addDoc: addDoc,
  server: SERVERURL
};

var _counterMap;

var getRequestHeadersNoToken = function getRequestHeadersNoToken() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json"
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

var getCookie = function getCookie() {
  var cname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "kxCommonToken";

  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

var kxToken = getCookie("kxCommonToken");
var getRequestHeaders = function getRequestHeaders() {
  return {
    "Content-Type": "application/json",
    kxToken: kxToken
  };
};

var sendCustomerDocEmail = function sendCustomerDocEmail(shipmentId, customerEmail, documents, sentTo) {
  var cc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var data = {
    eventMessage: {
      shipmentId: shipmentId,
      customerEmail: customerEmail,
      documents: documents,
      sentTo: sentTo,
      cc: cc
    },
    eventType: "SEND_CUSTOMER_DOC_EMAIL",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var customerDataBody = {
  eventType: "GET_KXUSER",
  eventMessage: {},
  eventTime: Date.now()
};

var channelConnections = {
  eventType: "GET_CHANNEL_CONNECTIONS",
  eventMessage: {},
  eventTime: Date.now()
};

var teamMembers = {
  eventType: "GET_TEAM_MEMBERS",
  eventMessage: {},
  eventTime: Date.now()
};

var paymentDataBody = {
  eventType: "GET_PAYMENT_INSTRUMENTS",
  eventMessage: {},
  eventTime: Date.now()
};

var customsStatementsBody = function customsStatementsBody(importerNumber) {
  var pageNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var keyword = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return {
    eventType: "PAYMENT_CBP_GET_STATEMENTS",
    eventMessage: {
      importerNumber: importerNumber,
      pageNumber: pageNumber,
      keyword: keyword
    },
    eventTime: Date.now()
  };
};

var authStatusBody = function authStatusBody(statementNumber, importerNumber) {
  return {
    eventType: "PAYMENT_CBP_GET_AUTHORIZATION_STATUS",

    eventMessage: {
      statementNumber: statementNumber,
      importerNumber: importerNumber
    },
    eventTime: Date.now()
  };
};

var paymentHistoryBody = function paymentHistoryBody(paymentGuid, low, high, pageDirection) {
  return {
    eventType: "PAYMENT_GET_HISTORY",
    eventMessage: {
      paymentGuid: paymentGuid,
      low: low,
      high: high,
      pageDirection: pageDirection
    },
    eventTime: Date.now()
  };
};

var downloadInvoiceSignedUrl = function downloadInvoiceSignedUrl(bucketName, fileName) {
  return HttpClient.custom({
    url: HttpClient.baseUrl,
    headers: getRequestHeaders(),
    data: {
      eventMessage: bucketName + ":" + fileName,
      eventType: "GET_SIGNED_URLS",
      eventTime: Date.now()
    },
    method: "post"
  });
};

var getCustomsStatements = function getCustomsStatements(importerNumber, pageNumber, keyword) {
  return HttpClient.custom({
    data: customsStatementsBody(importerNumber, pageNumber, keyword)
  });
};

var getAuthStatus = function getAuthStatus(statementNumber, importerNumber) {
  return HttpClient.custom({
    data: authStatusBody(statementNumber, importerNumber)
  });
};

var getKXEmail = function getKXEmail() {
  return HttpClient.custom({
    data: {
      eventMessage: {},
      eventType: "GET_KXEMAIL",
      eventTime: Date.now()
    }
  });
};

var updateCustomerUserInfo = function updateCustomerUserInfo(_ref3) {
  var email = _ref3.email,
      companyName = _ref3.companyName,
      typeOfUser = _ref3.typeOfUser,
      contactName = _ref3.contactName,
      role = _ref3.role,
      typeOfPhone = _ref3.typeOfPhone,
      isdCode = _ref3.isdCode,
      phoneNo = _ref3.phoneNo,
      bondInformationRead = _ref3.bondInformationRead,
      bondInformationWrite = _ref3.bondInformationWrite,
      paymentInformationRead = _ref3.paymentInformationRead,
      paymentInformationWrite = _ref3.paymentInformationWrite,
      paymentHistoryRead = _ref3.paymentHistoryRead,
      paymentHistoryWrite = _ref3.paymentHistoryWrite,
      customsStatementsRead = _ref3.customsStatementsRead,
      customsStatementsWrite = _ref3.customsStatementsWrite,
      type = _ref3.type;

  var data = {
    eventMessage: {
      userBasicInfo: {
        companyName: companyName,
        email: email,
        typeOfUser: typeOfUser,
        contactName: contactName,
        role: role,
        userPrivileges: {
          userPrivilege: [{
            privilegeItem: "USER_PRIVILEGES_BOND_INFO",
            read: bondInformationRead,
            write: bondInformationWrite
          }, {
            privilegeItem: "USER_PRIVILEGES_PAYMENT_DETAILS",
            read: paymentInformationRead,
            write: paymentInformationWrite
          }, {
            privilegeItem: "USER_PRIVILEGES_PAYMENT_HISTORY",
            read: paymentHistoryRead,
            write: paymentHistoryWrite
          }, {
            privilegeItem: "USER_PRIVILEGES_CBP_STATEMENT",
            read: customsStatementsRead,
            write: customsStatementsWrite
          }]
        }
      },
      phone: [{
        typeOfPhone: typeOfPhone,
        isdCode: isdCode,
        phoneNo: phoneNo
      }]
    },
    eventType: type === "add" ? "KXUSER_UPDATE_ADD_TEAM_MEMBER" : "KXUSER_UPDATE_TEAM_MEMBER",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var updateDOInfo = function updateDOInfo(_ref4) {
  var groupName = _ref4.groupName,
      shippingLine = _ref4.shippingLine,
      location = _ref4.location,
      emailids = _ref4.emailids,
      type = _ref4.type,
      kxEmail = _ref4.kxEmail,
      id = _ref4.id,
      notes = _ref4.notes;

  var data = {
    eventMessage: {
      kxEmail: kxEmail,
      DOList: [{
        drayGroup: groupName,
        shippingLine: shippingLine,
        location: location,
        emails: emailids,
        notes: notes
      }]
    },
    eventType: type === "add" ? "ADD_DELIVERY_ORDER_INFO" : "UPDATE_DELIVERY_ORDER_INFO",
    eventTime: Date.now()
  };

  if (type !== "add") {
    data.eventMessage.DOList[0].id = id;
  }

  return HttpClient.custom({
    data: data
  });
};

var fetchDOs = function fetchDOs(email) {
  return HttpClient.custom({
    data: {
      eventMessage: {
        kxEmail: email
      },
      eventType: "GET_DELIVERY_ORDER_INFO",
      eventTime: Date.now()
    }
  });
};

var verificationEmail = function verificationEmail(_ref5) {
  var email = _ref5.email,
      role = _ref5.role,
      contactName = _ref5.contactName,
      typeOfUser = _ref5.typeOfUser;

  var data = {
    eventMessage: {
      userBasicInfo: {
        email: email,
        role: role,
        contactName: contactName,
        typeOfUser: typeOfUser
      }
    },
    eventType: "REVERIFY_TEAM_MEMBER",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var deleteCustomerUser = function deleteCustomerUser(email, typeOfUser) {
  var data = {
    eventMessage: {
      userBasicInfo: {
        email: email,
        typeOfUser: typeOfUser
      }
    },
    eventType: "KXUSER_UPDATE_DELETE_TEAM_MEMBER",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var deleteDO = function deleteDO(id) {
  var data = {
    eventMessage: {
      id: id
    },
    eventType: "DELETE_DELIVERY_ORDER_INFO",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var getHSMaster = function getHSMaster(type, input) {
  var data = {
    eventType: "GET_HS_MASTER_HS",
    eventMessage: {
      country: "US",
      hsVersion: "2019Rev2.0",
      itemType: type,
      itemId: "",
      itemEdi: "",
      carrierDesc: input
    },
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var removeShippingDestination = function removeShippingDestination(body) {
  return HttpClient.custom({
    data: body
  });
};

var removeManufacturer = function removeManufacturer(body) {
  return HttpClient.custom({
    data: body
  });
};

var updateShippingDestination = function updateShippingDestination(body) {
  return HttpClient.custom({
    data: body
  });
};

var updateManufacturer = function updateManufacturer(body) {
  return HttpClient.custom({
    data: body
  });
};

var getCustomerData = function getCustomerData() {
  console.trace("getCustomerData :: ");
  return HttpClient.custom({
    data: customerDataBody
  });
};
var getChannelConnections = function getChannelConnections() {
  return HttpClient.custom({
    data: channelConnections
  });
};

var getTeamMembers = function getTeamMembers() {
  return HttpClient.custom({
    data: teamMembers
  });
};

//  const getCountryList = () => {
//    // console.trace();
//    return HttpClient.custom({
//      data: countryListBody,
//    });
//  };

var getPaymentData = function getPaymentData() {
  return HttpClient.custom({
    data: paymentDataBody
  });
};

var getPaymentHistory = function getPaymentHistory(paymentGuid, low, high, pageDirection) {
  return HttpClient.custom({
    data: paymentHistoryBody(paymentGuid, low, high, pageDirection)
  });
};

var updateUser = function updateUser(body) {
  return HttpClient.custom({
    data: body
  });
};

var updateMyCompany = function updateMyCompany(body) {
  return HttpClient.custom({
    data: body
  });
};

var businessSize = function businessSize(body) {
  return HttpClient.custom({
    data: body
  });
};

var shippingInfo = function shippingInfo(body) {
  return HttpClient.custom({
    data: body
  });
};

var bondInfo = function bondInfo(body) {
  return HttpClient.custom({
    data: body
  });
};

var deliveryOrder = function deliveryOrder(body) {
  return HttpClient.custom({
    data: body
  });
};

var resetPasswordEmail = function resetPasswordEmail(body) {
  return HttpClient.custom({
    headers: getRequestHeadersNoToken(),
    data: body
  });
};

var achPayment = function achPayment(body) {
  return HttpClient.custom({
    data: body
  });
};

var ccPayment = function ccPayment(body) {
  return HttpClient.custom({
    data: body
  });
};

var paymentSettings = function paymentSettings(body) {
  return HttpClient.custom({
    data: body
  });
};

var addshippingdestination = function addshippingdestination(body) {
  return HttpClient.custom({
    data: body
  });
};

var getshippingdestination = function getshippingdestination(body) {
  return HttpClient.custom({
    data: body
  });
};

var getmanufacturers = function getmanufacturers(body) {
  return HttpClient.custom({
    data: body
  });
};

var addmanufacturer = function addmanufacturer(body) {
  return HttpClient.custom({
    data: body
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
var addDocument = function addDocument(shipmentId, documentDetails, email) {
  var data = {
    eventMessage: {
      shipmentId: shipmentId,
      email: email,
      userType: "CUSTOMER",
      documentDetails: documentDetails
    },
    eventType: "ADD_DOCUMENT_NEW",
    eventTime: Date.now()
  };
  return HttpClient.addDoc({
    data: data
  });
};

var fetchAddDocumentStatus = function fetchAddDocumentStatus(uploadId) {
  var data = {
    eventMessage: uploadId.toString(),
    eventType: "ADD_DOCUMENT_STATUS",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var getSignedURL = function getSignedURL(files) {
  var data = {
    eventMessage: files,
    eventType: "GET_SIGNED_URLS",
    eventTime: Date.now()
  };
  console.log("GET_SIGNED_URLS body", data);
  return HttpClient.custom({
    data: data
  });
};

var getInvoices = function getInvoices() {
  var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var keyword = arguments[1];

  var data = {
    eventMessage: {
      pageNumber: pageNumber,
      keyword: keyword
    },
    eventType: "GET_CUSTOMER_INVOICES",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var inviteChannelUser = function inviteChannelUser(email, type) {
  var data = {
    eventMessage: {
      email: email,
      typeOfUser: type,
      isDelete: false
    },
    eventType: "CHANNEL_INVITE_USER",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var deleteChannelUser = function deleteChannelUser(email, type) {
  var data = {
    eventMessage: {
      email: email,
      typeOfUser: type,
      isDelete: true
    },
    eventType: "CHANNEL_INVITE_USER",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var approveChannelUser = function approveChannelUser(email) {
  var data = {
    eventMessage: {
      email: email,
      approved: true
    },
    eventType: "CHANNEL_APPROVE_USER",
    eventTime: Date.now
  };

  return HttpClient.custom({
    data: data
  });
};

var getAllBrokers = function getAllBrokers() {
  var data = {
    eventMessage: {},
    eventType: "CHANNEL_GET_ALL_BROKERS",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var getAllFFBrokers = function getAllFFBrokers() {
  var data = {
    eventMessage: {},
    eventType: "CHANNEL_GET_ALL_FF_AND_BROKERS",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

// REPORT_COUNTER_TYPE_US_MISSING_AN_COUNT:  convertTo32(getValidShipmentsList(validShipments, data.MissingAN)),
//    REPORT_COUNTER_TYPE_US_MISSING_BOL_COUNT: convertTo32(getValidShipmentsList(validShipments, data.MissingBOL)),
//    REPORT_COUNTER_TYPE_US_MISSING_CI_COUNT:  convertTo32(getValidShipmentsList(validShipments, data.MissingCI)),
//    REPORT_COUNTER_TYPE_US_MISSING_PL_COUNT:

var counterMap = (_counterMap = {
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
  containerGateIn: "REPORT_COUNTER_TYPE_CONTAINER_GATE_IN"
}, defineProperty(_counterMap, "containerGateIn", "REPORT_COUNTER_TYPE_CONTAINER_GATE_IN"), defineProperty(_counterMap, "missingBL", "REPORT_COUNTER_TYPE_MISSING_BOL"), defineProperty(_counterMap, "missingPL", "REPORT_COUNTER_TYPE_MISSING_PL"), defineProperty(_counterMap, "missingAN", "REPORT_COUNTER_TYPE_MISSING_AN"), defineProperty(_counterMap, "missingCI", "REPORT_COUNTER_TYPE_MISSING_CI"), defineProperty(_counterMap, "missingTrucker", "REPORT_COUNTER_TYPE_MISSING_TRUCK_NUMBER_MISSING"), _counterMap);

var getFinanceInvoices = function getFinanceInvoices(tab) {
  var keyword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var pageNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var selectedCountries = arguments[3];

  return HttpClient.custom({
    data: {
      eventMessage: {
        invoiceTab: tab,
        keyword: keyword,
        pageNumber: pageNumber,
        selectedCountries: selectedCountries
      },
      eventType: "GET_CUSTOMER_INVOICES",
      eventTime: Date.now()
    },

    method: "post"
  });
};

var getTabCount = function getTabCount(keyword, selectedCountries) {
  return HttpClient.custom({
    data: {
      eventMessage: {
        keyword: keyword,
        selectedCountries: selectedCountries
      },
      eventType: "GET_TAB_COUNT",
      eventTime: Date.now()
    },
    method: "post"
  });
};

var customerPaidInvoice = function customerPaidInvoice(invoiceNumber) {
  return HttpClient.custom({
    data: {
      eventMessage: {
        invoiceNumber: invoiceNumber
      },
      eventType: "CUSTOMER_PAID_INVOICE",
      eventTime: Date.now()
    },
    method: "post"
  });
};

var customerDisputedInvoice = function customerDisputedInvoice(invoiceNumberDispute, shipmentIdDispute, disputeResion, disputedAmount) {
  return HttpClient.custom({
    data: {
      eventMessage: {
        invoiceNumber: invoiceNumberDispute,
        disputeReason: "DISPUTE_OVERCHARGED",
        disputeRaisedComment: disputeResion,
        disputedAmount: disputedAmount,
        shipmentList: {
          shipment: [].concat(toConsumableArray(shipmentIdDispute))
        }
      },
      eventType: "CUSTOMER_DISPUTE_INVOICE",
      eventTime: Date.now()
    },
    method: "post"
  });
};

var getSearchShipment = function getSearchShipment(kxEmail, shipmentId) {
  var pageNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return HttpClient.custom({
    data: {
      eventMessage: {
        searchType: "SEARCH_TYPE_CUSTOMER",
        filters: [{
          key: "SEARCH_FILTERS_KXEMAIL",
          value: kxEmail
        }, {
          key: "SEARCH_FILTERS_SHIPMENT_ID",
          value: shipmentId
        }],
        pageNumber: pageNumber,
        searchOrder: {
          searchTab: "SEARCH_TAB_SHIPMENTS",
          direction: "DESC"
        }
      },
      eventType: "SEARCH_SHIPMENTS_CUSTOMER",
      eventTime: Date.now()
    },
    method: "post"
  });
};

var fetchTeamMembers = function fetchTeamMembers() {
  return HttpClient.custom({
    eventMessage: {},
    eventType: "GET_TEAM_MEMBERS",
    eventTime: Date.now()
  });
};
var getDocumentById = function getDocumentById(documentId) {
  return HttpClient.custom({
    data: {
      eventType: "GET_DOCUMENT_BY_ID",
      eventMessage: {
        documentId: documentId,
        getDocRequestSource: 1
      }
    },
    eventTime: Date.now()
  });
};

var fetchAllDocs = function fetchAllDocs(kxEmail, guid) {
  var data = {
    eventType: "FETCH_CUSTOMER_DOCUMENT",
    eventMessage: {
      "customerEmail": kxEmail,
      "userGuid": guid,
      "isCustomer": true
    },
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};
var setAchCredit = function setAchCredit(param) {
  var data = {
    eventMessage: {
      value: param
    },
    eventType: "SET_ACH_CREDIT",
    eventTime: Date.now()
  };

  return HttpClient.custom({
    data: data
  });
};

var getPricingDropdown = function getPricingDropdown() {
  var data = {
    eventMessage: {},
    eventType: "DRAYAGE_GET_CHARGE_LIST",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var fetchFile = function fetchFile(url) {
  var data = {
    eventMessage: url,
    eventType: "GET_SIGNED_URLS",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var fetchFileLegal = function fetchFileLegal(url) {
  var data = {
    eventMessage: url,
    eventType: "GET_SIGNED_URLS",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var editDrayagePartnerLegal = function editDrayagePartnerLegal(userGuid, finalArr) {
  var data = {
    eventMessage: {
      userGuid: userGuid,
      documents: finalArr
    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var editDrayagePartnerPricing = function editDrayagePartnerPricing(userGuid, finalArr, pricingListDocument) {
  var data = {
    eventMessage: {
      userGuid: userGuid,
      pricing: {
        pricingItems: finalArr,
        pricingListDocument: pricingListDocument
      }
    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var editDrayagePartnerPricingDoc = function editDrayagePartnerPricingDoc(userGuid, finalString) {
  var data = {
    eventMessage: {
      userGuid: userGuid,
      pricing: {
        pricingListDocument: {
          documentName: finalString,
          documentType: "PRICING_LIST"
        }
      }
    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var editDrayagePartnerServiceArea = function editDrayagePartnerServiceArea(userGuid, selectedArea) {
  var data = {
    eventMessage: {
      userGuid: userGuid,
      serviceAreas: [{
        country: "US",
        regions: selectedArea
      }]
    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var getStateList = function getStateList() {
  var data = {
    eventMessage: {
      country: "US",
      hsVersion: "2019Rev2.0",
      itemType: "PROVINCE_LIST"
    },
    eventType: "GET_HS_MASTER_HS",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var editDrayagePartnerTruckers = function editDrayagePartnerTruckers(userGuid, name, phoneNumber, isdCode, driversLicenseState, driversLicenseNumber) {
  var data = {
    eventMessage: {
      userGuid: userGuid,
      truckers: [{
        user: {
          phoneNumber: phoneNumber,
          isdCode: isdCode,
          contactName: name
        },
        licenseInfo: {
          licenseState: driversLicenseState,
          licenseNumber: driversLicenseNumber
        }
      }]
    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var updateDrayagePartnerTruckers = function updateDrayagePartnerTruckers(userGuid, truckers) {
  var data = {
    eventMessage: {
      userGuid: userGuid,
      truckers: truckers,
      dispatcherPhone: {}
    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var editDrayagePartnerProfile = function editDrayagePartnerProfile(userGuid, corpName, logo, entityAddressLine1, entityAddressLine2, entityCity, entityState, entityZip, entityCountry, mailingaddressLine1, mailingaddressLine2, mailingCity, mailingState, mailingZip, mailingCountry, companyTrucks, drivers, dot, scac, containerType, isd, phoneNumber) {
  var data = {
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
          country: entityCountry
        },
        mailingAddress: {
          addressLine1: mailingaddressLine1,
          addressLine2: mailingaddressLine2,
          city: mailingCity,
          state: mailingState,
          zip: mailingZip,
          country: mailingCountry
        },
        noOfTrucks: companyTrucks,
        noOfDrivers: drivers,
        dotNumber: dot,
        scacCode: scac,
        containerType: containerType,
        dispatcherPhone: {
          isd: isd,
          phoneNumber: phoneNumber
        }
      }

    },
    eventType: "DRAYAGE_CREATE_UPDATE_PARTNER",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var uploadImageToBucket = function uploadImageToBucket(formData, uploadTo) {
  return HttpClient.custom({
    url: window._env_.REACT_APP_MEDIA_URL + "/" + uploadTo,
    headers: {
      "Content-type": "multipart/form-data"
    },
    data: formData,
    method: "post"
  });
};

var getDrayagePartnersDetails = function getDrayagePartnersDetails(id) {
  var data = {};
  data = {
    eventMessage: {
      partnerId: id
    },
    eventType: "DRAYAGE_GET_PARTNER_DETAILS",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var getContainerTypeList = function getContainerTypeList(params) {
  var data = {
    eventMessage: _extends({}, params),
    eventType: "GET_CONTAINER_TYPES",
    eventTime: Date.now()
  };
  return HttpClient.custom({
    data: data
  });
};

var getCountryList = function getCountryList(country) {
  var data = {
    eventMessage: {
      country: "CA",
      itemType: "COUNTRY_LIST",
      hsVersion: "2019Rev2.0",
      province: ""
    },
    eventType: "GET_HS_MASTER_HS",
    eventTime: 15332404112
  };

  return HttpClient.custom({
    data: data
  });
};

var userApi = {
  updateUser: updateUser,
  updateMyCompany: updateMyCompany,
  fetchTeamMembers: fetchTeamMembers,
  getCustomerData: getCustomerData,
  getChannelConnections: getChannelConnections,
  getTeamMembers: getTeamMembers,
  businessSize: businessSize,
  shippingInfo: shippingInfo,
  bondInfo: bondInfo,
  deliveryOrder: deliveryOrder,
  getKXEmail: getKXEmail,
  achPayment: achPayment,
  ccPayment: ccPayment,
  getPaymentData: getPaymentData,
  getPaymentHistory: getPaymentHistory,
  paymentSettings: paymentSettings,
  addshippingdestination: addshippingdestination,
  addmanufacturer: addmanufacturer,
  getshippingdestination: getshippingdestination,
  removeShippingDestination: removeShippingDestination,
  getmanufacturers: getmanufacturers,
  updateShippingDestination: updateShippingDestination,
  updateCustomerUserInfo: updateCustomerUserInfo,
  updateDOInfo: updateDOInfo,
  fetchDOs: fetchDOs,
  deleteCustomerUser: deleteCustomerUser,
  deleteDO: deleteDO,
  removeManufacturer: removeManufacturer,
  updateManufacturer: updateManufacturer,
  addDocument: addDocument,
  getSignedURL: getSignedURL,
  resetPasswordEmail: resetPasswordEmail,
  getCustomsStatements: getCustomsStatements,
  getAuthStatus: getAuthStatus,
  getHSMaster: getHSMaster,
  getInvoices: getInvoices,
  inviteChannelUser: inviteChannelUser,
  deleteChannelUser: deleteChannelUser,
  approveChannelUser: approveChannelUser,
  getAllBrokers: getAllBrokers,
  getAllFFBrokers: getAllFFBrokers,
  downloadInvoiceSignedUrl: downloadInvoiceSignedUrl,
  sendCustomerDocEmail: sendCustomerDocEmail,
  verificationEmail: verificationEmail,
  getTabCount: getTabCount,
  customerPaidInvoice: customerPaidInvoice,
  customerDisputedInvoice: customerDisputedInvoice,
  getFinanceInvoices: getFinanceInvoices,
  getSearchShipment: getSearchShipment,
  fetchAddDocumentStatus: fetchAddDocumentStatus,
  getDocumentById: getDocumentById,
  fetchAllDocs: fetchAllDocs,
  setAchCredit: setAchCredit
};

var phoneOptions = {
    WORK: "WORK",
    HOME: "HOME",
    MOBILE: "MOBILE"
};

var MyPersonalProfile = function (_Component) {
    inherits(MyPersonalProfile, _Component);

    function MyPersonalProfile() {
        var _this2 = this;

        classCallCheck(this, MyPersonalProfile);

        var _this = possibleConstructorReturn(this, (MyPersonalProfile.__proto__ || Object.getPrototypeOf(MyPersonalProfile)).call(this));

        _this.componentWillMount = function () {
            _this.setState({
                contactName: _this.props.contactName,
                email: _this.props.email,
                phoneType: _this.props.phoneType,
                phone: _this.props.phone,
                isdCode: _this.props.isdCode,
                timestamp: Date.now()
            });
        };

        _this.handleSubmit = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this$state, contactName, phone, isdCode, phoneType, profile;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this$state = _this.state, contactName = _this$state.contactName, phone = _this$state.phone, isdCode = _this$state.isdCode, phoneType = _this$state.phoneType;
                            profile = {
                                eventMessage: {
                                    "countryName": "UNITED_KINGDOM",
                                    userBasicInfo: {
                                        contactName: contactName
                                    },
                                    phone: [{
                                        typeOfPhone: phoneType,
                                        isdCode: isdCode,
                                        phoneNo: parseNumber(phone)
                                    }]
                                },
                                eventType: "KXUSER_UPDATE_EXISTING_PERSONAL_PROFILE",
                                eventTime: Date.now()
                            };


                            userApi.updateUser(profile).then(function () {
                                _this.props.fetchCustomerData();
                            });
                            _this.setState({ "statusMessage": "Form Saved!" }, function () {
                                setTimeout(function () {
                                    _this.setState({ "statusMessage": "" });
                                }, 2000);
                            });

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.state = {
            checkEmail: false,
            phoneType: null,
            phone: null,
            isdCode: null,
            contactName: null,
            statusMessage: ""
        };
        return _this;
    }

    createClass(MyPersonalProfile, [{
        key: "handleUpdate",
        value: function handleUpdate(key, e) {
            this.setState(defineProperty({}, key, e));
        } // Updates general inputs

    }, {
        key: "handleISDUPdate",
        value: function handleISDUPdate(e) {
            this.setState({ isdCode: e });
        } // Updates phone isd


    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                contactName = _state.contactName,
                email = _state.email,
                phone = _state.phone,
                phoneType = _state.phoneType,
                checkEmail = _state.checkEmail,
                error = _state.error;
            var profileImage = this.props.profileImage;
            // let isWhiteLabel = get(this.props.userInitialData, "userInfo.isWhiteLabel", null);
            // let wlCustomerName = get(this.props.userInitialData, "userInfo.wlCustomerName", null);

            var companyName = _.get(this.props, "userInitialData.userBasicInfo.companyName", "");

            return React__default.createElement(
                "div",
                { className: "outer-modal-container", style: { display: "flex", alignItems: "center", justifyContent: "center" } },
                React__default.createElement(
                    "div",
                    { id: "scrollableContainer" },
                    React__default.createElement(
                        semanticUiReact.Segment,
                        { padded: "very", className: "modal-container", raised: true },
                        profileImage ? React__default.createElement("div", { className: "profile-pic-div modal-profile-image", style: { backgroundImage: "url(" + profileImage + ")" } }) : React__default.createElement(
                            "div",
                            { className: "profile-pic-div modal-profile-initials" },
                            React__default.createElement(
                                "div",
                                null,
                                React__default.createElement(
                                    "p",
                                    { style: { fontSize: '50px', top: '50%', position: 'relative', transform: 'translateY(-50%)', maxWidth: '100px', overflow: 'hidden' } },
                                    getInitials(contactName)
                                )
                            )
                        ),
                        React__default.createElement(
                            "div",
                            { className: "profile_header" },
                            React__default.createElement(
                                "h1",
                                { className: "_header" },
                                "My Profile"
                            )
                        ),
                        React__default.createElement(
                            "div",
                            { "class": "form-column-wrapper" },
                            React__default.createElement(
                                "div",
                                { "class": "form-column" },
                                React__default.createElement(kxCommonComponents.Input, { value: contactName, label: "Full Name", onChange: function onChange(e) {
                                        return _this3.handleUpdate("contactName", e);
                                    }, charsOnly: true, rounded: true }),
                                React__default.createElement(kxCommonComponents.Input, { value: email, label: "Email", onChange: function onChange(e) {
                                        return _this3.handleUpdate("email", e);
                                    }, disabled: true, rounded: true })
                            ),
                            React__default.createElement(
                                "label",
                                { className: "phone_code_label" },
                                "CODE"
                            ),
                            React__default.createElement(
                                "div",
                                { "class": "form-column profile-second-row" },
                                React__default.createElement(kxCommonComponents.Dropdown, { value: phoneOptions[phoneType], handleSelect: function handleSelect(e) {
                                        return _this3.handleUpdate("phoneType", e);
                                    }, list: phoneOptions, label: "Phone Type", rounded: true }),
                                React__default.createElement(
                                    "div",
                                    { className: "phone-wrapper" },
                                    React__default.createElement(kxCommonComponents.Input, { value: phone, label: "Phone Number", onChange: function onChange(e) {
                                            return _this3.handleUpdate("phone", e);
                                        }, handleISDUPdate: function handleISDUPdate(e) {
                                            return _this3.handleISDUPdate(e);
                                        }, isdCode: this.state.isdCode, phone: true, rounded: true })
                                )
                            )
                        ),
                        React__default.createElement(
                            "p",
                            { className: "status_message" },
                            this.state.statusMessage
                        )
                    ),
                    React__default.createElement(
                        "div",
                        { className: "basic-info-buttonRow" },
                        React__default.createElement(
                            semanticUiReact.Button,
                            { type: "submit", className: "cancelBasicInfo", style: { border: "1px solid", backgroundColor: "white" }, onClick: function onClick() {
                                    return _this3.props.toggleModal();
                                } },
                            "CANCEL"
                        ),
                        React__default.createElement(
                            semanticUiReact.Button,
                            { type: "submit", className: "saveBasicInfo", onClick: function onClick() {
                                    return _this3.handleSubmit();
                                }, color: "twitter" },
                            "SAVE CHANGES"
                        )
                    )
                )
            );
        }
    }]);
    return MyPersonalProfile;
}(React.Component);

var css_248z$1 = ".drayage-conainer-company-profile {\n  border: 1px solid #2e71b5;\n  border-radius: 2px;\n  margin-left: 10px;\n  width: \"80%\";\n}\n\n.input-company-profile-corpName {\n  height: 44px;\n  background-color: rgba(255, 217, 218, 0.5);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(34, 36, 38, 0.15);\n  border-radius: 0px;\n  padding: 0.5em;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.7);\n  /* font-size: 1em; */\n  margin-top: 5px;\n  font-weight: 600;\n  letter-spacing: 1.71px;\n  line-height: 28px;\n}\n\n.corp-name-input-container .close.icon {\n  display: none !important;\n}\n\n.company-profile-image {\n  display: flex;\n  margin: auto;\n  margin-top: 30px;\n  height: 110px;\n  max-width: 354px;\n  width: 95%;\n  border-radius: 2px;\n  background-color: #ebedf0;\n  align-items: center;\n  justify-content: center;\n}\n\n.company-profile-button {\n  display: flex;\n  margin: auto;\n  margin-top: 30px;\n  height: 46px;\n  max-width: 246px;\n  width: 95%;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.company-profile-textinput-header {\n  color: #606060;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.company-profile-flex-row {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.company-profile-flex-row .close.icon {\n  display: none;\n}\n\n.company-profile-text-input-conatiner {\n  display: flex;\n  flex-direction: column;\n  width: 49.2%;\n}\n\n.company-profile-text-input-conatiner .ui.selection.visible.dropdown > .text:not(.default) {\n  color: rgba(0,0,0,0.8) !important;\n}\n\n.company-profile-text-input {\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 19px;\n  height: 19px;\n  color: #000000 !important;\n  letter-spacing: 1.14px;\n  margin-top: 2px;\n  height: auto !important;\n  padding: 0px 2px !important;\n  border: none !important;\n}\n\n.company-profile-text-input-trucks-drivers {\n  width: 100%;\n  font-size: 16px;\n  font-weight: 500;\n  color: #000000;\n  letter-spacing: 1.14px;\n  margin-top: 0px;\n  height: auto !important;\n  padding: 0px !important;\n  border: none !important;\n  margin-left: 5px;\n}\n\n.contact-detail-role .close.icon {\n  display: none;\n}\n\n.contact-detail-button {\n  display: flex;\n  align-items: center;\n  background-color: \"#FFFFFF\";\n  border-width: 0px;\n}\n\n/* .drayage-cp-container {\n  margin-top: 60px;\n  background-color: #ffffff;\n  width: 100%;\n  padding: 4%;\n  box-shadow: 0 0 2px #999;\n  min-height: 100vh;\n  overflow-y: scroll !important;\n} */\n\n.contact-details-text-input {\n  width: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  color: #000000;\n  letter-spacing: 1.14px;\n  margin-top: 0px;\n  padding: 0px !important;\n  height: auto !important;\n  border: none !important;\n}\n\n.contact-detail-dropdown {\n  min-height: auto !important;\n  padding: 5px !important;\n  padding-left: 0px !important;\n  margin-left: 8px;\n  border-radius: 0px !important;\n  font-size: 14px;\n  font-weight: 600;\n  color: \"#000000\";\n}\n\n.contact-detail-dropdown .dropdown.icon {\n  padding-top: 5px !important;\n}\n\n.pricing-text-input-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-width: 300px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-top-width: 1px;\n  border-style: solid;\n  border-color: #d4d4d4;\n}\n\n.pricing-text-input {\n  width: 100%;\n\theight: auto !important;\n  font-size: 14px !important;\n  font-weight: 600;\n  color: #606060;\n  padding: 0px 10px !important;\n}\n\n.pricing-text-input:focus {\n  box-shadow: 0 0 0px #719ece;\n}\n\n.pricing-dropdown {\n\twidth: 100%;\n  min-width: auto !important;\n  min-height: auto !important;\n  padding: 1px !important;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 0px !important;\n  border: 2px #286084 solid !important;\n\tborder-left: 0px !important;\n}\n\n.pricing-text-input-container .close.icon {\n  display: none;\n}\n\n.ui.selection.visible.dropdown>.text:not(.default) {\n\tmargin-top: 0px !important;\n}\n\n.pdf-view {\n  padding: 5px;\n  border-bottom-width: 2px;\n  border-style: solid;\n  border-color: #e7e7e7;\n  min-height: 728px;\n}\n\n.pricing-dropdown-container {\n  position: relative;\n  width: 18%;\n  min-width: 100px;\n}\n\n.price-item-remove {\n  cursor: pointer;\n  position: relative;\n  width: 50px;\n  height: 22px;\n}\n.price-item-remove::before,\n.price-item-remove::after {\n  position: absolute;\n  top: 3px;\n  right: 10px;\n  content: \" \";\n  height: 17px;\n  width: 2px;\n  background-color: #333;\n}\n.price-item-remove::before {\n  transform: rotate(45deg);\n}\n.price-item-remove::after {\n  transform: rotate(-45deg);\n}\n.price-item-remove:hover::before,\n.price-item-remove:hover::after {\n  background-color: #d8000c;\n}\n\n.drayage-pricing-container {\n  margin: 1px;\n  background-color: #ffffff;\n  width: 100%;\n  padding: 2%;\n  box-shadow: 0 0 2px #999;\n  min-height: 100vh;\n  overflow-y: scroll;\n  display: flex;\n  margin-top: 60px;\n}\n\n.show_document{\nmargin-left: 30px;\n}";
styleInject(css_248z$1);

var DrayageCompanyProfile = function (_Component) {
  inherits(DrayageCompanyProfile, _Component);

  function DrayageCompanyProfile(props) {
    classCallCheck(this, DrayageCompanyProfile);

    var _this = possibleConstructorReturn(this, (DrayageCompanyProfile.__proto__ || Object.getPrototypeOf(DrayageCompanyProfile)).call(this, props));

    _this.componentDidMount = function () {
      _this.fetchContainerType();
      _this.fetchCountryType();

      _this.state.loader === false && _this.fetchUrl();
      var dispatcherPhoneNo = _.get(_this.props, "data.companyProfile.dispatcherPhone.phoneNumber", "");
      var isd = _.get(_this.props, "data.companyProfile.dispatcherPhone.isd", "");
      console.log("componentDidMount >>> ", dispatcherPhoneNo, isd);

      _this.setState({
        dispatcherPhoneNum: dispatcherPhoneNo,
        dispathcherCodeNum: isd,
        corpName: _this.props.data.companyProfile.name,
        entityAddress: {
          addressLine1: _this.props.data.companyProfile.entityAddress.addressLine1,
          addressLine2: _this.props.data.companyProfile.entityAddress.addressLine2,
          city: _this.props.data.companyProfile.entityAddress.city,
          state: _this.props.data.companyProfile.entityAddress.state,
          zip: _this.props.data.companyProfile.entityAddress.zip,
          country: _this.props.data.companyProfile.entityAddress.country
        },
        mailingAddress: {
          addressLine1: _this.props.data.companyProfile.mailingAddress.addressLine1,
          addressLine2: _this.props.data.companyProfile.mailingAddress.addressLine2,
          city: _this.props.data.companyProfile.mailingAddress.city,
          state: _this.props.data.companyProfile.mailingAddress.state,
          zip: _this.props.data.companyProfile.mailingAddress.zip,
          country: _this.props.data.companyProfile.mailingAddress.country
        },
        trucksDrivers: {
          companyTrucks: _this.props.data.companyProfile.noOfTrucks,
          drivers: _this.props.data.companyProfile.noOfDrivers,
          dot: _this.props.data.companyProfile.dotNumber,
          scac: _this.props.data.companyProfile.scacCode
        },
        abilityLimitations: {
          containerType: _this.props.data.companyProfile.containerType
        }
      });
    };

    _this.phoneCodeInputHandler = function (e) {
      console.log("phoneCodeInputHandler", e.target);
      console.log("phoneCodeInputHandler", e.target.value, _typeof(e.target.value));
      var codeNum = e.target.value;

      if ((codeNum.length === 2 || codeNum.length === 3) && !isNaN(codeNum)) {
        _this.setState({ dispathcherCodeNum: codeNum, showCodeMsg: false });
      } else if (codeNum.length === 1) {
        _this.setState({ dispathcherCodeNum: codeNum, showCodeMsg: true });
      } else if (codeNum.length === 0) {
        _this.setState({ dispathcherCodeNum: "", showCodeMsg: false });
      }
    };

    _this.phoneNumberInputHandler = function (e) {
      //console.log("phoneNumberInputHandler", e)
      //console.log("phoneNumberInputHandler", e.target.value, typeof (e.target.value))

      var phoneNum = e; //e.target.value
      var phoneNumString = e.toString();
      //console.log("phoneNumString",phoneNumString)

      if (phoneNum.length <= 10 && phoneNum.length > 0 && !isNaN(phoneNum)) {
        //if (phoneNum.length <= 10 && phoneNum.length > 0 ) {

        _this.setState({ dispatcherPhoneNum: phoneNum, showPhoneMsg: phoneNumString.length < 10 ? true : false });
      } else if (phoneNumString.length === 0) {
        _this.setState({ dispatcherPhoneNum: "", showPhoneMsg: false });
      } else {
        _this.setState({ showPhoneMsg: true });
      }
    };

    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.data.companyProfile.logo !== _this.props.data.companyProfile.logo) {
        _this.fetchUrl();
      }
    };

    _this.fetchUrl = function () {
      if (_this.props.data.companyProfile.logo) {
        _this.setState({ imgLoading: true });
        fetchFile(_this.props.data.companyProfile.bucketName + ":" + _this.props.data.companyProfile.logo).then(function (resp) {
          _this.setState({
            image: _extends({}, _this.state.image, {
              preview: resp.data.eventMessage.urls[0]
            })
          });
          _this.setState({ imgLoading: false });
        }).catch(function (err) {
          _this.setState({
            image: {
              preview: null,
              file: null
            }
          });
          _this.setState({ imgLoading: false });
        });
      }
    };

    _this.checkFieldValidation = function (key, alternateClr) {
      var lightRed = "rgba(255,153,153, 0.2)";
      var textInputClr = "#f0f4ff";
      var white = "#FFFFFF";
      var color = alternateClr ? white : textInputClr;
      var resp = _this.state.error.find(function (el) {
        return el.key === key;
      });
      if (resp) {
        color = lightRed;
      }
      return color;
    };

    _this.handleFieldValidation = function (key, text) {
      if (text.length > 0) {
        var tempArr = [].concat(toConsumableArray(_this.state.error));
        var findIndex = tempArr.findIndex(function (el) {
          return el.key === key;
        });
        if (findIndex !== -1) {
          tempArr.splice(findIndex, 1);
          _this.setState({ error: tempArr });
        }
      }
    };

    _this.validate = function () {
      _this.setState({ error: [] });
      var tempErr = [];
      var validateErr = false;
      if (!_this.state.corpName) {
        validateErr = true;
        tempErr.push({
          key: "corpName",
          err: "Please enter a coorporation name"
        });
      }
      if (!_this.state.entityAddress.addressLine1) {
        validateErr = true;
        tempErr.push({
          key: "entityAdd1",
          err: "Please enter address line 1 for facility Address"
        });
      }
      if (!_this.state.entityAddress.addressLine2) {
        validateErr = true;
        tempErr.push({
          key: "entityAdd2",
          err: "Please enter address line 2 for facility Address"
        });
      }
      if (!_this.state.entityAddress.city) {
        validateErr = true;
        tempErr.push({
          key: "entityCity",
          err: "Please enter city for facility Address"
        });
      }
      if (!_this.state.entityAddress.state) {
        validateErr = true;
        tempErr.push({
          key: "entityState",
          err: "Please enter state for facility Address"
        });
      }
      if (!_this.state.entityAddress.zip) {
        validateErr = true;
        tempErr.push({
          key: "entityZip",
          err: "Please enter zip code for facility Address"
        });
      }
      if (!_this.state.entityAddress.country) {
        validateErr = true;
        tempErr.push({
          key: "entityCountry",
          err: "Please enter country for facility Address"
        });
      }
      if (!_this.state.mailingAddress.addressLine1) {
        validateErr = true;
        tempErr.push({
          key: "mailingAdd1",
          err: "Please enter address line 1 for mailing address"
        });
      }
      if (!_this.state.mailingAddress.addressLine2) {
        validateErr = true;
        tempErr.push({
          key: "mailingAdd2",
          err: "Please enter address line 2 for mailing address"
        });
      }
      if (!_this.state.mailingAddress.city) {
        validateErr = true;
        tempErr.push({
          key: "mailingCity",
          err: "Please enter city for mailing address"
        });
      }
      if (!_this.state.mailingAddress.state) {
        validateErr = true;
        tempErr.push({
          key: "mailingState",
          err: "Please enter state for mailing address"
        });
      }
      if (!_this.state.mailingAddress.zip) {
        validateErr = true;
        tempErr.push({
          key: "mailingZip",
          err: "Please enter zip code for mailing address"
        });
      }
      if (!_this.state.mailingAddress.country) {
        validateErr = true;
        tempErr.push({
          key: "mailingCountry",
          err: "Please enter country for mailing address"
        });
      }
      if (!_this.state.trucksDrivers.companyTrucks) {
        validateErr = true;
        tempErr.push({
          key: "companyTrucks",
          err: "Please enter total company owned trucks"
        });
      }
      if (!_this.state.trucksDrivers.drivers) {
        validateErr = true;
        tempErr.push({
          key: "companyDrivers",
          err: "Please enter total drivers"
        });
      }
      _this.setState({ error: tempErr });
      if (tempErr.length > 0) {
        window.scrollTo(0, 0);
      }
      return validateErr;
    };

    _this.callApi = function (logo) {
      _this.setState({ loader: true });
      editDrayagePartnerProfile(_this.props.data.companyProfile.userGuid, _this.state.corpName, logo, _this.state.entityAddress.addressLine1, _this.state.entityAddress.addressLine2, _this.state.entityAddress.city, _this.state.entityAddress.state, _this.state.entityAddress.zip, _this.state.entityAddress.country, _this.state.mailingAddress.addressLine1, _this.state.mailingAddress.addressLine2, _this.state.mailingAddress.city, _this.state.mailingAddress.state, _this.state.mailingAddress.zip, _this.state.mailingAddress.country, _this.state.trucksDrivers.companyTrucks, _this.state.trucksDrivers.drivers, _this.state.trucksDrivers.dot, _this.state.trucksDrivers.scac, _this.state.abilityLimitations.containerType, _this.state.dispathcherCodeNum, _this.state.dispatcherPhoneNum).then(function (resp) {
        _this.setState({ loader: false });
        if (resp.code === 400) {
          console.log("err");
          var error = [{ key: resp.code, err: resp.msg }];
          _this.setState({ error: error });
        } else {
          if (_this.props.data.companyProfile.logo) _this.setState({ image: { preview: "", file: "" } });
          // if (this.state.dispathcherCodeNum.length < 2 ||this.state.dispathcherCodeNum.length>3) {
          //   this.setState({showCodeMsg:true})
          // }
          if (_this.state.dispatcherPhoneNum.length < 10 || _this.state.dispatcherPhoneNum.length > 10) {
            _this.setState({ showPhoneMsg: true });
          }
          // if (this.state.dispathcherCodeNum.length <= 3 && this.state.dispatcherPhoneNum.length === 10) {
          var dispatcherPhone = {
            isd: parseInt(_this.state.dispathcherCodeNum),
            phoneNumber: parseInt(_this.state.dispatcherPhoneNum)
            //}
          };_this.props.fetchDrayagePartnerData();
        }
        window.scrollTo(0, 0);
      }).catch(function () {
        _this.setState({ loader: false });
        var error = [{ key: 500, err: "Something Went Wrong!" }];
        _this.setState({ error: error });
        window.scrollTo(0, 0);
      });
    };

    _this.onSave = function () {
      if (!_this.validate()) {
        if (_this.state.image.file) {
          _this.setState({ loader: true });
          var formData = new FormData();
          var fileName = Date.now() + "_" + _this.state.image.file.name;
          formData.append("files", _this.state.image.file, fileName);

          // let bucketName = JSON.parse(makeValidJson());
          uploadImageToBucket(formData, window._env_.DRAYAGE_PARTNER_MEDIA_BUCKET).then(function (resp) {
            console.log("image", resp);
            var str = resp.data.msg;
            var firstIndex = str.indexOf("[");
            var lastIndex = str.indexOf("]");
            var finalString = str.substring(firstIndex + 1, lastIndex);
            _this.callApi(finalString);
            _this.setState({ error: [], loader: false });
          }).catch(function (err) {
            console.log(err);
            _this.setState({ loader: false });
            _this.setState({ error: [{ err: "Failed to Upload Image" }] });
            window.scrollTo(0, 0);
          });
        } else {
          _this.callApi(_this.props.data.companyProfile.logo || "");
        }
      }
    };

    _this.fetchContainerType = function (e) {
      getContainerTypeList().then(function (response) {
        var res = response.data.eventMessage;
        var containerTypes = res.containerType.map(function (item, index) {
          return {
            text: item,
            value: item
          };
        });
        _this.setState({ checkBoxOptions: containerTypes });
      }).catch(function (err) {
        console.log(err);
      });
    };

    _this.fetchCountryType = function (e) {
      getCountryList().then(function (response) {
        var res = response.data.eventMessage;
        var countryList = res.itemList.map(function (item, index) {
          return {
            text: item.description.toUpperCase(),
            value: item.id.toUpperCase()
          };
        });
        _this.setState({ countryCodes: countryList });
      }).catch(function (err) {
        console.log(err);
      });
    };

    _this.renderEntityAndMailingAddress = function (title, isEntityAddress) {
      var _ref;

      return React__default.createElement(
        "div",
        { style: { marginTop: "20px", width: "75%" } },
        React__default.createElement(
          "span",
          {
            style: { fontSize: "15px", fontWeight: "bold", marginLeft: "10px" }
          },
          title
        ),
        React__default.createElement(
          "div",
          {
            className: "drayage-conainer-company-profile",
            style: { marginTop: "5px", padding: "5px" }
          },
          React__default.createElement(
            "span",
            { className: "company-profile-textinput-header" },
            "ADDRESS"
          ),
          React__default.createElement(
            "div",
            { className: "company-profile-flex-row" },
            React__default.createElement(
              "div",
              { className: "company-profile-text-input-conatiner" },
              React__default.createElement(kxCommonComponents.Input, {
                className: "company-profile-text-input",
                name: "addressLine1",
                style: {
                  backgroundColor: _this.checkFieldValidation(isEntityAddress ? "entityAdd1" : "mailingAdd1")
                },
                value: isEntityAddress ? _this.state.entityAddress.addressLine1 : _this.state.mailingAddress.addressLine1,
                onChange: function onChange(e) {
                  if (isEntityAddress) {
                    _this.setState({
                      entityAddress: _extends({}, _this.state.entityAddress, {
                        addressLine1: e
                      })
                    });
                    _this.handleFieldValidation("entityAdd1", e);
                  } else {
                    _this.setState({
                      mailingAddress: _extends({}, _this.state.mailingAddress, {
                        addressLine1: e
                      })
                    });
                    _this.handleFieldValidation("mailingAdd1", e);
                  }
                }
              }),
              React__default.createElement(
                "span",
                {
                  style: {
                    color: "#606060",
                    fontSize: "8px",
                    fontWeight: "600",
                    alignSelf: "center"
                  }
                },
                "ADDRESS LINE 1"
              )
            ),
            React__default.createElement(
              "div",
              { className: "company-profile-text-input-conatiner" },
              React__default.createElement(kxCommonComponents.Input, {
                className: "company-profile-text-input",
                name: "addressLine2",
                style: {
                  backgroundColor: _this.checkFieldValidation(isEntityAddress ? "entityAdd2" : "mailingAdd2")
                },
                value: isEntityAddress ? _this.state.entityAddress.addressLine2 : _this.state.mailingAddress.addressLine2,
                onChange: function onChange(e) {
                  if (isEntityAddress) {
                    _this.setState({
                      entityAddress: _extends({}, _this.state.entityAddress, {
                        addressLine2: e
                      })
                    });
                    _this.handleFieldValidation("entityAdd2", e);
                  } else {
                    _this.setState({
                      mailingAddress: _extends({}, _this.state.mailingAddress, {
                        addressLine2: e
                      })
                    });
                    _this.handleFieldValidation("mailingAdd2", e);
                  }
                }
              }),
              React__default.createElement(
                "span",
                {
                  style: {
                    color: "#606060",
                    fontSize: "8px",
                    fontWeight: "600",
                    alignSelf: "center"
                  }
                },
                "ADDRESS LINE 2"
              )
            )
          ),
          React__default.createElement(
            "div",
            {
              className: "company-profile-flex-row",
              style: { marginTop: "5px" }
            },
            React__default.createElement(
              "div",
              {
                className: "company-profile-text-input-conatiner",
                style: { width: "32%" }
              },
              React__default.createElement(kxCommonComponents.Input, {
                className: "company-profile-text-input",
                name: "city",
                style: {
                  backgroundColor: _this.checkFieldValidation(isEntityAddress ? "entityCity" : "mailingCity")
                },
                value: isEntityAddress ? _this.state.entityAddress.city : _this.state.mailingAddress.city,
                charsOnly: true,
                onChange: function onChange(e) {
                  if (isEntityAddress) {
                    _this.setState({
                      entityAddress: _extends({}, _this.state.entityAddress, {
                        city: e
                      })
                    });
                    _this.handleFieldValidation("entityCity", e);
                  } else {
                    _this.setState({
                      mailingAddress: _extends({}, _this.state.mailingAddress, {
                        city: e
                      })
                    });
                    _this.handleFieldValidation("mailingCity", e);
                  }
                }
              }),
              React__default.createElement(
                "span",
                {
                  style: {
                    color: "#606060",
                    fontSize: "8px",
                    fontWeight: "600",
                    alignSelf: "center"
                  }
                },
                "CITY"
              )
            ),
            React__default.createElement(
              "div",
              {
                className: "company-profile-text-input-conatiner",
                style: { width: "18%" }
              },
              React__default.createElement(kxCommonComponents.Input, {
                className: "company-profile-text-input",
                name: "state",
                style: {
                  backgroundColor: _this.checkFieldValidation(isEntityAddress ? "entityState" : "mailingState")
                },
                value: isEntityAddress ? _this.state.entityAddress.state : _this.state.mailingAddress.state,
                charsOnly: true,
                onChange: function onChange(e) {
                  if (isEntityAddress) {
                    _this.setState({
                      entityAddress: _extends({}, _this.state.entityAddress, {
                        state: e
                      })
                    });
                    _this.handleFieldValidation("entityState", e);
                  } else {
                    _this.setState({
                      mailingAddress: _extends({}, _this.state.mailingAddress, {
                        state: e
                      })
                    });
                    _this.handleFieldValidation("mailingState", e);
                  }
                }
              }),
              React__default.createElement(
                "span",
                {
                  style: {
                    color: "#606060",
                    fontSize: "8px",
                    fontWeight: "600",
                    alignSelf: "center"
                  }
                },
                "STATE/PROVINCE"
              )
            ),
            React__default.createElement(
              "div",
              {
                className: "company-profile-text-input-conatiner",
                style: { width: "18%" }
              },
              React__default.createElement(kxCommonComponents.Input, {
                className: "company-profile-text-input",
                name: "zip",
                style: {
                  backgroundColor: _this.checkFieldValidation(isEntityAddress ? "entityZip" : "mailingZip")
                },
                numbersOnly: true,
                value: isEntityAddress ? _this.state.entityAddress.zip : _this.state.mailingAddress.zip,
                onChange: function onChange(e) {
                  if (isEntityAddress) {
                    _this.setState({
                      entityAddress: _extends({}, _this.state.entityAddress, {
                        zip: e
                      })
                    });
                    _this.handleFieldValidation("entityZip", e);
                  } else {
                    _this.setState({
                      mailingAddress: _extends({}, _this.state.mailingAddress, {
                        zip: e
                      })
                    });
                    _this.handleFieldValidation("mailingZip", e);
                  }
                }
              }),
              React__default.createElement(
                "span",
                {
                  style: {
                    color: "#606060",
                    fontSize: "8px",
                    fontWeight: "600",
                    alignSelf: "center"
                  }
                },
                "ZIP/POSTAL CODE"
              )
            ),
            React__default.createElement(
              "div",
              {
                className: "company-profile-text-input-conatiner",
                style: { width: "28%" }
              },
              React__default.createElement(semanticUiReact.Dropdown, {
                search: true,
                name: "country",
                style: (_ref = {
                  position: "relative",
                  padding: "0px",
                  minWidth: "auto",
                  minHeight: "auto",
                  backgroundColor: "rgb(240, 244, 255)",
                  borderRadius: "0px",
                  height: "19px",
                  marginTop: "2px"
                }, defineProperty(_ref, "padding", "2px"), defineProperty(_ref, "fontWeight", "600"), defineProperty(_ref, "border", "0px"), _ref),
                value: isEntityAddress ? _this.state.entityAddress.country : _this.state.mailingAddress.country,
                icon: React__default.createElement(Icon, null),
                selection: true,
                options: _this.state.countryCodes,
                onChange: function onChange(e, data) {
                  if (isEntityAddress) {
                    _this.setState({
                      entityAddress: _extends({}, _this.state.entityAddress, {
                        country: data.value
                      })
                    });
                    _this.handleFieldValidation("entityCountry", data.value);
                  } else {
                    _this.setState({
                      mailingAddress: _extends({}, _this.state.mailingAddress, {
                        country: data.value
                      })
                    });
                    _this.handleFieldValidation("mailingCountry", data.value);
                  }
                }
              }),
              React__default.createElement(
                "span",
                {
                  style: {
                    color: "#606060",
                    fontSize: "8px",
                    fontWeight: "600",
                    alignSelf: "center"
                  }
                },
                "COUNTRY"
              )
            )
          )
        )
      );
    };

    _this.state = {
      dispathcherCodeNum: null,

      dispatcherPhoneNum: null,
      isdCode: null,

      showCodeMsg: false,
      showPhoneMsg: false,
      loader: false,
      corpName: "",
      image: {
        preview: null,
        file: null
      },
      entityAddress: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        country: ""
      },
      mailingAddress: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        country: ""
      },
      trucksDrivers: {
        companyTrucks: "",
        drivers: "",
        dot: "",
        scac: ""
      },
      abilityLimitations: {
        containerType: []
      },
      error: [],
      imgLoading: false,
      countryCodes: [],
      checkBoxOptions: []

    };

    _this.imageRef = React__default.createRef();
    return _this;
  }

  createClass(DrayageCompanyProfile, [{
    key: "handleISDUPdate",
    value: function handleISDUPdate(e) {
      this.setState({ dispathcherCodeNum: e });
    } // Updates phone isd


  }, {
    key: "handleUpdate",
    value: function handleUpdate(key, e) {
      console.log("key and e for handleUpdate", key, e);
      this.setState(defineProperty({}, key, e));
    } // Updates general inputs

  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _ref2;

      var lightRed = "rgba(255,153,153, 0.2)";
      var showText = "";
      var showPhoneText = "";
      if (this.state.showCodeMsg) {
        showText = "Phone Code should be 2 - 3 digits     ";
      }
      if (this.state.showPhoneMsg) {
        showPhoneText = "Phone number must be of 10 digits";
      }

      return React__default.createElement(
        "div",
        { className: "drayage-cp-container", style: { overflow: "scroll" } },
        this.state.error.length > 0 && React__default.createElement(
          "div",
          {
            style: {
              marginLeft: "10px",
              color: "red",
              height: "35px",
              width: "74%",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
              backgroundColor: lightRed,
              marginTop: "5px",
              marginBottom: "15px"
            }
          },
          this.state.error[0].err || "Something Went Wrong"
        ),
        React__default.createElement(
          "div",
          {
            className: "drayage-conainer-company-profile",
            style: { marginTop: "10px", width: "74%" }
          },
          React__default.createElement(
            "div",
            {
              className: "corp-name-input-container",
              style: {
                width: "100%",
                borderBottomWidth: "1px",
                borderColor: "#2e71b5"
                // borderStyle: "solid",
              }
            },
            React__default.createElement(
              "span",
              {
                style: {
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#606060",
                  padding: "5px"
                }
              },
              "CORPORATION NAME"
            ),
            React__default.createElement("br", null),
            React__default.createElement(kxCommonComponents.Input, {
              className: "input-company-profile-corpName",
              style: {
                backgroundColor: this.checkFieldValidation("corpName", true)
              },
              name: "corpname",
              value: this.state.corpName,
              hasError: true,
              error: "Error",
              onChange: function onChange(e) {
                _this2.handleFieldValidation("corpName", e);
                _this2.setState({ CorpName: e });
              }
            })
          ),
          React__default.createElement(
            "div",
            {
              className: "company-profile-image",
              style: {
                backgroundColor: this.checkFieldValidation("image")
              }
            },
            this.state.imgLoading && React__default.createElement(semanticUiReact.Loader, { active: true, inline: "centered", size: "small" }),
            this.state.image.preview ? React__default.createElement("img", {
              style: { height: "100%", width: "100%" },
              src: this.state.image.preview
            }) : null
          ),
          React__default.createElement(
            "div",
            { className: "company-profile-button" },
            React__default.createElement(
              semanticUiReact.Button,
              {
                style: (_ref2 = {
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#008B8F",
                  border: "1px solid #008B8F"
                }, defineProperty(_ref2, "backgroundColor", "#FFFFFF"), defineProperty(_ref2, "borderRadius", "3px"), defineProperty(_ref2, "color", "#008B8F"), _ref2),
                onClick: function onClick() {
                  return _this2.imageRef.current.click();
                }
              },
              "UPLOAD"
            ),
            React__default.createElement("input", {
              style: { display: "none" },
              type: "file",
              accept: "image/*",
              ref: this.imageRef,
              onChange: function onChange(event) {
                // console.log(event.target.files[0], "event");
                var file = event.target.files[0];
                _this2.setState({
                  image: {
                    preview: URL.createObjectURL(file),
                    file: file
                  }
                });
                var tempArr = [].concat(toConsumableArray(_this2.state.error));
                var findIndex = tempArr.findIndex(function (el) {
                  return el.key === "image";
                });
                if (findIndex !== -1) {
                  tempArr.splice(findIndex, 1);
                  _this2.setState({ error: tempArr });
                }
              }
            })
          )
        ),
        this.renderEntityAndMailingAddress("Facility Address test", true),
        this.renderEntityAndMailingAddress("Mailing Address", false),
        React__default.createElement(
          "div",
          { style: { marginTop: "20px", width: "75%" } },
          React__default.createElement(
            "span",
            {
              style: {
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "10px"
              }
            },
            "Fleet Info"
          ),
          React__default.createElement(
            "div",
            {
              className: "drayage-conainer-company-profile",
              style: { marginTop: "5px" }
            },
            React__default.createElement(
              "div",
              { className: "company-profile-flex-row" },
              React__default.createElement(
                "div",
                {
                  style: {
                    width: "33.3%",
                    borderRightWidth: "1px",
                    borderColor: "#2e71b5",
                    // borderStyle: "solid",
                    padding: "5px"
                  }
                },
                React__default.createElement(
                  "div",
                  null,
                  React__default.createElement(
                    "span",
                    { className: "company-profile-textinput-header" },
                    "COMPANY OWNED TRUCKS"
                  )
                ),
                React__default.createElement(kxCommonComponents.Input, {
                  className: "company-profile-text-input-trucks-drivers",
                  name: "companyTrucks",
                  numbersOnly: true,
                  style: {
                    backgroundColor: this.checkFieldValidation("companyTrucks", true)
                  },
                  value: this.state.trucksDrivers.companyTrucks,
                  onChange: function onChange(e) {
                    _this2.setState({
                      trucksDrivers: _extends({}, _this2.state.trucksDrivers, {
                        companyTrucks: e
                      })
                    });
                    _this2.handleFieldValidation("companyTrucks", e);
                  }
                })
              ),
              React__default.createElement(
                "div",
                {
                  style: {
                    width: "33.3%",
                    borderRightWidth: "1px",
                    borderColor: "#2e71b5",
                    // borderStyle: "solid",
                    padding: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }
                },
                React__default.createElement(
                  "div",
                  null,
                  React__default.createElement(
                    "span",
                    { className: "company-profile-textinput-header" },
                    "DRIVERS"
                  )
                ),
                React__default.createElement(kxCommonComponents.Input, {
                  className: "company-profile-text-input-trucks-drivers",
                  name: "copmanyDrivers",
                  numbersOnly: true,
                  style: {
                    backgroundColor: this.checkFieldValidation("companyDrivers", true)
                  },
                  value: this.state.trucksDrivers.drivers,
                  onChange: function onChange(e) {
                    _this2.setState({
                      trucksDrivers: _extends({}, _this2.state.trucksDrivers, {
                        drivers: e
                      })
                    });
                    _this2.handleFieldValidation("companyDrivers", e);
                  }
                })
              ),
              React__default.createElement(
                "div",
                {
                  style: {
                    width: "33.3%",
                    padding: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }
                },
                React__default.createElement(
                  "div",
                  null,
                  React__default.createElement(
                    "span",
                    { className: "company-profile-textinput-header" },
                    "DOT NUMBER"
                  )
                ),
                React__default.createElement(kxCommonComponents.Input, {
                  className: "company-profile-text-input-trucks-drivers",
                  name: "dotNo",
                  value: this.state.trucksDrivers.dot,
                  onChange: function onChange(e) {
                    _this2.setState({
                      trucksDrivers: _extends({}, _this2.state.trucksDrivers, {
                        dot: e
                      })
                    });
                  }
                })
              ),
              React__default.createElement(
                "div",
                {
                  style: {
                    width: "33.3%",
                    padding: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }
                },
                React__default.createElement(
                  "div",
                  null,
                  React__default.createElement(
                    "span",
                    { className: "company-profile-textinput-header" },
                    "SCAC CODE"
                  )
                ),
                React__default.createElement(kxCommonComponents.Input, {
                  className: "company-profile-text-input-trucks-drivers",
                  name: "scac",
                  charsOnly: true,
                  maxLength: "4",
                  value: this.state.trucksDrivers.scac,
                  onChange: function onChange(e) {
                    _this2.setState({
                      trucksDrivers: _extends({}, _this2.state.trucksDrivers, {
                        scac: e
                      })
                    });
                  }
                })
              )
            )
          )
        ),
        React__default.createElement(
          "div",
          { style: { marginTop: "20px", width: "75%" } },
          React__default.createElement(
            "span",
            {
              style: {
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "10px"
              }
            },
            "Drayage ability"
          ),
          React__default.createElement(
            "div",
            {
              className: "drayage-conainer-company-profile",
              style: { marginTop: "5px" }
            },
            React__default.createElement(
              "div",
              { className: "company-profile-flex-row" },
              React__default.createElement(
                "div",
                {
                  style: {
                    width: "100%",
                    padding: "5px"
                  }
                },
                React__default.createElement(
                  "span",
                  { className: "company-profile-textinput-header" },
                  "CONTAINER TYPE"
                ),
                React__default.createElement(
                  "div",
                  {
                    style: {
                      width: "100%",
                      marginBottom: "3px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }
                  },
                  this.state.checkBoxOptions.map(function (item, index) {
                    return React__default.createElement(
                      "div",
                      {
                        key: index,
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          width: "30%",
                          marginTop: "10px",
                          backgroundColor: "#f0f4ff",
                          paddingTop: "3px",
                          paddingBottom: "3px",
                          paddingLeft: "5px",
                          marginLeft: index % 3 === 0 ? 0 : "8px"
                        }
                      },
                      React__default.createElement(
                        "div",
                        {
                          style: {
                            height: "15px",
                            width: "15px",
                            borderWidth: "1px",
                            // borderStyle: "solid",
                            borderColor: "#008B8F",
                            backgroundColor: _this2.state.abilityLimitations.containerType && _this2.state.abilityLimitations.containerType.includes(item.value) ? "#008B8F" : "#FFFFFF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          },
                          onClick: function onClick() {
                            var array = [].concat(toConsumableArray(_this2.state.abilityLimitations.containerType));
                            var findIndex = array.findIndex(function (el) {
                              return el === item.value;
                            });
                            if (findIndex === -1) {
                              array.push(item.value);
                            } else {
                              array.splice(findIndex, 1);
                            }
                            console.log(array);
                            _this2.setState({
                              abilityLimitations: {
                                containerType: array
                              }
                            });
                          }
                        },
                        React__default.createElement(
                          "span",
                          { style: { fontSize: "12px", color: "#FFFFFF" } },
                          _this2.state.abilityLimitations.containerType && _this2.state.abilityLimitations.containerType.includes(item.value) ? "✓" : ""
                        )
                      ),
                      React__default.createElement(
                        "span",
                        {
                          style: {
                            color: "#000000",
                            fontWeight: "bold",
                            fontSize: "12px",
                            marginLeft: "10px"
                          }
                        },
                        item.text
                      )
                    );
                  })
                )
              )
            )
          )
        ),
        React__default.createElement(
          "div",
          { style: { marginTop: "20px", width: "75%" } },
          React__default.createElement(
            "span",
            {
              style: {
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "10px"
              }
            },
            "Dispatcher Phone Number"
          )
        ),
        React__default.createElement(
          "div",
          { style: { height: "60px", display: "flex", flexDirection: "row", width: "600px", justifyContent: "space-between", padding: "8px", marginTop: "10px" }, className: "drayage-conainer-company-profile" },
          React__default.createElement(
            "div",
            { style: { display: "flex", flexDirection: "column" } },
            React__default.createElement(
              "div",
              { "class": "form-column profile-second-row" },
              React__default.createElement(
                "div",
                { className: "phone-wrapper" },
                React__default.createElement(kxCommonComponents.Input, { value: this.state.dispatcherPhoneNum, label: "Phone Number", onChange: function onChange(e) {
                    _this2.phoneNumberInputHandler(e);
                  }, handleISDUPdate: function handleISDUPdate(e) {
                    return _this2.handleISDUPdate(e);
                  }, isdCode: this.state.dispathcherCodeNum, phone: true, rounded: true })
              )
            )
          )
        ),
        showText.length > 0 && React__default.createElement(
          "div",
          { style: { marginTop: "10px", color: "red", marginLeft: "10px", fontSize: "14px", fontWeight: "700", paddingLeft: "10px" } },
          showText
        ),
        showPhoneText.length > 0 && React__default.createElement(
          "div",
          { style: { marginTop: "10px", color: "red", marginLeft: "10px", fontSize: "14px", fontWeight: "700", paddingLeft: "10px" } },
          showPhoneText
        ),
        React__default.createElement(
          semanticUiReact.Button,
          {
            loading: this.state.loader,
            type: "submit",
            style: {
              padding: "12px 40px",
              marginLeft: "10px",
              marginTop: "20px",
              fontSize: "12px",
              backgroundColor: "#008B8F",
              color: "white",
              borderRadius: "0",
              marginBottom: "10px"
            },
            onClick: function onClick() {
              _this2.onSave();
            }
          },
          "SAVE"
        )
      );
    }
  }]);
  return DrayageCompanyProfile;
}(React.Component);

var Icon = function (_Component2) {
  inherits(Icon, _Component2);

  function Icon() {
    classCallCheck(this, Icon);
    return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  createClass(Icon, [{
    key: "render",
    value: function render() {
      return React__default.createElement("div", {
        style: {
          position: "absolute",
          top: "4px",
          right: "5px",
          height: "6px",
          width: "6px",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: "0px 2px 2px 0px",
          transform: "rotate(45deg)"
        }
      });
    }
  }]);
  return Icon;
}(React.Component);

// import {USMapMidwest} from '../../Images/images';
// import {USMapNortheast} from '../../Images/images';
// import {USMapSoutheast} from '../../Images/images';
// import {USMapSouthwest} from '../../Images/images';
// import {USMapWest} from '../../Images/images';


var ServiceArea = function (_Component) {
  inherits(ServiceArea, _Component);

  function ServiceArea(props) {
    classCallCheck(this, ServiceArea);

    var _this = possibleConstructorReturn(this, (ServiceArea.__proto__ || Object.getPrototypeOf(ServiceArea)).call(this, props));

    _this.componentDidMount = function () {
      _this.setState({ selectedArea: _this.props.data.serviceAreas && _this.props.data.serviceAreas[0].regions });
    };

    _this.validate = function () {
      _this.setState({ error: [] });
      var result = true;
      var errorArr = [];
      if (___default.isEmpty(_this.state.selectedArea)) {
        result = false;
        errorArr.push({
          key: "area",
          err: "Please choose service area"
        });
      }
      _this.setState({ error: errorArr });
      if (errorArr.length > 0) {
        window.scrollTo(0, 0);
      }
      return result;
    };

    _this.onSave = function () {
      if (_this.validate()) {
        _this.setState({ loader: true });
        editDrayagePartnerServiceArea(_this.props.data.companyProfile.userGuid, _this.state.selectedArea).then(function (resp) {
          console.log(resp);
          _this.setState({ loader: false });
          if (resp.code === 400) {
            console.log("err");
            var error = [{ key: resp.code, err: resp.msg }];
            _this.setState({ error: error });
            window.scrollTo(0, 0);
          } else {
            _this.props.fetchDrayagePartnerData();
            window.scrollTo(0, 0);
          }
        }).catch(function () {
          _this.setState({ loader: false });
          var error = [{ key: 500, err: "Something Went Wrong!" }];
          _this.setState({ error: error });
          window.scrollTo(0, 0);
        });
      }
    };

    _this.checkValidation = function (key) {
      var lightRed = "rgba(255,153,153, 0.2)";
      var color = "#FFFFFF";
      var findIndex = _this.state.error.findIndex(function (el) {
        return el.key === key;
      });
      if (findIndex !== -1) {
        color = lightRed;
      }
      return color;
    };

    _this.renderDropdown = function () {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "100%";
      var heading = arguments[1];
      var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var SERVICE_AREA_OPTIONS = [{ text: "West", value: "WEST" }, { text: "Southwest", value: "SOUTHWEST" }, { text: "Southeast", value: "SOUTHEAST" }, { text: "Midwest", value: "MIDWEST" }, { text: "Northeast", value: "NORTHEAST" }];

      return React__default.createElement(
        "div",
        {
          style: {
            width: width
          }
        },
        React__default.createElement(
          "div",
          { style: { padding: "2px", paddingLeft: "10px" } },
          React__default.createElement(
            "span",
            { className: "company-profile-textinput-header" },
            heading
          )
        ),
        React__default.createElement(semanticUiReact.Dropdown, {
          placeholder: heading,
          scrolling: true,
          multiple: multiple,
          value: _this.state.selectedArea,
          style: {
            backgroundColor: _this.checkValidation("area"),
            borderWidth: "0px",
            marginLeft: "10px",
            borderRadius: "0px",
            paddingLeft: "0px",
            minWidth: "15%"
            // marginLeft: this.props.data.serviceAreas.length > 0 ? "10px" : "2px",
          },
          selection: true,
          options: SERVICE_AREA_OPTIONS,
          onChange: function onChange(e, data) {
            _this.setState({ error: [] });
            _this.setState({ selectedArea: data.value });
          }
        })
      );
    };

    _this.state = {
      selectedArea: [],
      loader: false,
      error: []
    };
    return _this;
  }

  createClass(ServiceArea, [{
    key: "render",
    value: function render() {
      var lightRed = "rgba(255,153,153, 0.2)";

      return React__default.createElement(
        "div",
        { className: "drayage-cp-container", style: { overflow: "scroll" } },
        this.state.error.length > 0 && React__default.createElement(
          "div",
          {
            style: {
              marginLeft: "10px",
              color: "red",
              height: "35px",
              width: "79%",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
              backgroundColor: lightRed,
              marginTop: "5px",
              marginBottom: "5px"
            }
          },
          this.state.error[0].err || "Something Went Wrong"
        ),
        React__default.createElement(
          "div",
          { style: { marginTop: "10px", width: "80%" } },
          React__default.createElement(
            "span",
            {
              style: { fontSize: "15px", fontWeight: "bold", marginLeft: "10px" }
            },
            "Select service area"
          ),
          React__default.createElement(
            "div",
            {
              className: "drayage-conainer-company-profile",
              style: { marginTop: "10px" }
            },
            React__default.createElement(
              "div",
              {
                style: {
                  borderBottomWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#2e71b5",
                  width: "100%"
                }
              },
              this.renderDropdown("100%", "SERVICE AREA", true)
            ),
            React__default.createElement(
              "div",
              {
                style: {
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center"
                }
              },
              React__default.createElement(Map, { data: this.state.selectedArea })
            )
          ),
          React__default.createElement(
            semanticUiReact.Button,
            {
              loading: this.state.loader,
              style: {
                padding: "12px 40px",
                fontSize: "12px",
                backgroundColor: "#008B8F",
                color: "white",
                borderRadius: "0",
                marginTop: "20px",
                marginLeft: "10px"
              },
              onClick: this.onSave
            },
            "SAVE"
          )
        )
      );
    }
  }]);
  return ServiceArea;
}(React.Component);

var Map = function (_Component2) {
  inherits(Map, _Component2);

  function Map(props) {
    classCallCheck(this, Map);

    var _this2 = possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _this2.checkOpacity = function (region) {
      var opacity = void 0;
      // if (_.isEmpty(this.props.data)) {
      if (_this2.props.data && _this2.props.data.includes(region)) {
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

    return _this2;
  }

  createClass(Map, [{
    key: "render",
    value: function render() {
      return React__default.createElement(
        "div",
        { style: { position: "relative", width: "483px", height: "304px" } },
        React__default.createElement("img", {
          src: "/images/USMidwest.png",
          style: { position: "absolute", opacity: this.checkOpacity("MIDWEST") }
        }),
        React__default.createElement("img", {
          src: "/images/USNortheast.png",
          style: { position: "absolute", opacity: this.checkOpacity("NORTHEAST") }
        }),
        React__default.createElement("img", {
          src: "/images/USSoutheast.png",
          style: { position: "absolute", opacity: this.checkOpacity("SOUTHEAST") }
        }),
        React__default.createElement("img", {
          src: "/images/USSouthwest.png",
          style: { position: "absolute", opacity: this.checkOpacity("SOUTHWEST") }
        }),
        React__default.createElement("img", {
          src: "/images/USWest.png",
          style: { position: "absolute", opacity: this.checkOpacity("WEST") }
        })
      );
    }
  }]);
  return Map;
}(React.Component);

var css_248z$2 = ".ui.basic.button.dropdown {\n    border: 0.5px solid #85b7d9 !important;\n    /* border-right: 7px solid #85b7d9 !important; */\n  }\n  .background-col {\n    background-color: white !important;\n  }\n  .ua-container {\n    padding-top: 90px;\n    background: white;\n    padding-bottom: 80px;\n  }\n  .card-icon:hover {\n    color: #379bff !important;\n  }\n  .ua.kx-header-logo {\n    position: relative;\n    width: 20%;\n    max-width: 200px !important;\n  }\n  .ua.header {\n    position: fixed;\n    top: 0 !important;\n    left: 0 !important;\n    width: 100% !important;\n    height: 80px;\n    margin: auto;\n    background-color: #fff;\n    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.29);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 10 !important;\n    margin-left: 0rem !important;\n    padding: 10px 30px;\n  }\n  .ua.header-user-container {\n    display: flex;\n    width: 33%;\n  }\n  .ua.filter {\n    background-color: white transparent;\n    /* position: fixed; */\n    z-index: 1;\n    /* width: 510px; */\n    width: 100%;\n    display: flex;\n    padding-left: 0%;\n    margin-left: 4vw;\n    margin-top: 15px\n    /* margin: 0 auto; */\n  }\n  .ua.searchbar {\n    width: 180px !important;\n    height: 38.1px;\n  }\n  .ua.searchbar.ui.input {\n    border-radius: 0 4px 4px 0 !important;\n  }\n  .ua.searchbar.ui.icon.input > input {\n    border-radius: 0 4px 4px 0 !important;\n    border-color: #85b7d9 !important;\n  }\n  .ua .ui.input > input {\n    border-color: #85b7d9 !important;\n    margin-left: -10px !important;\n    border-radius: 0 4px 4px 0 !important;\n  }\n  .ua.header-dropdown {\n    background: #008B8F !important;\n    /* min-width: 160px !important; */\n    width: 170px !important;\n    border-radius: 4px !important;\n    color: white !important;\n    padding-top: 14px !important;\n  }\n  .ua.header-dropdown2 {\n    background: #008B8F !important;\n    /* min-width: 160px !important; */\n    width: 170px !important;\n    border-radius: 4px !important;\n    color: white !important;\n    padding-top: 14px !important;\n    margin-right: 20px\n  }\n  .ua.user-header {\n    display: flex;\n    width: 23%;\n    justify-content: flex-end;\n  }\n  .ua.header-user {\n    padding-top: 25px;\n    padding-right: 14px;\n  }\n  .ua.user-dropdown {\n    margin: 20px 10px 0 0;\n  }\n  .ua.user-img {\n    margin-top: 15px;\n  }\n  .ua.grid {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 15px;\n    justify-content: flex-start;\n  }\n  .ua.card-header {\n    display: flex;\n    height: 45px;\n  }\n  .ua.card-bottom {\n    display: flex;\n    justify-content: space-between;\n  }\n  .ua .card-container {\n    padding: 5px !important;\n  }\n  .ua.card-icon {\n    font-size: 20px !important;\n    color: #c9c9c9;\n    margin-right: -50px !important;\n    margin-left: 35%;\n    margin-top: 20px;\n    cursor: pointer;\n  }\n  .ua.phone-container {\n    width: 100%;\n    display: flex;\n    margin: -20px 0 20px 0;\n  }\n  .ua.create-user-phone {\n    width: 80% !important;\n  }\n  .ua.add-phone {\n    margin: 20px 0 20px 0 !important;\n  }\n  .ua .ui.input > input {\n    padding-bottom: 10px !important;\n  }\n  .ua-header-bars {\n    padding-top: 10px;\n  }\n  .ua-header-columns {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .ua-header-image {\n    padding-top: 14px;\n    padding-right: 24px;\n  }\n  .delete-search {\n    font-size: 17px !important;\n    color: #c9c9c9;\n    margin-left: -2px;\n  }\n  .delete-search:hover {\n    color: #379bff !important;\n    height: 18px;\n    width: 18px;\n  }\n  .ui.icon.input > i.icon {\n    width: 30px !important;\n  }\n  .user-card {\n    margin: -10px;\n    width: 312px !important;\n    height: 164px !important;\n    border-radius: 2px !important;\n  }\n  .ua.header-buttons {\n    margin: auto;\n    padding-left: 20%;\n    width: 100%;\n    max-height: 80px;\n  }\n  .ua.date {\n    float: right;\n  }\n  .ua.popup-form {\n    /* height: 80vh; */\n    width: 49%;\n    position: absolute;\n    top:'10%';\n    z-index: 1;\n    padding: 24px 35px 35px !important;\n    /* height: 80vh;\n    width: 355px !important;\n    position: fixed !important;\n    bottom: 20px;\n    right: 20px;\n    background: white;\n    padding: 80px 35px 35px !important;\n    margin-top: 20px !important;\n    border-radius: 6px;\n    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.2); */\n  }\n  .ua.circle {\n    display: block;\n    width: 100px;\n    height: 50px;\n    top: 0px;\n    left: 40%;\n    overflow: hidden;\n    position: absolute;\n  }\n  .ua.form-image {\n    margin-top: 0%;\n    position: relative;\n    left: 3%;\n    top: 1%;\n    width: 80px !important;\n    height: 80px !important;\n    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 20%);\n  }\n  .ua.popup-header {\n    margin-top: -20px !important;\n    text-align: center;\n    font-weight: 80 !important;\n  }\n  .ua.create-user-input {\n    width: 285px !important;\n    height: 42px !important;\n    margin-bottom: -5px !important;\n    padding-top: 20px !important;\n    font-weight: 550 !important;\n  }\n  .ua.create-user-phone {\n    border-color: #85b7d9 !important;\n    height: 44px !important;\n  }\n  .ua.create-user-phone-readonly {\n    border: 0px !important;\n    height: 44px !important;\n  }\n  .ua.phone-dropdown text {\n    font-weight: 550px !important;\n    color: black !important;\n  }\n  .ua.create-user-dropdown {\n    height: 40px !important;\n    margin-bottom: -5px !important;\n    padding-top: 15px !important;\n  }\n  .ua.create-user-dropdown text {\n    font-weight: 550px !important;\n    color: black !important;\n  }\n  .ua.formDropdown {\n    padding-top: 20px !important;\n    height: 62px !important;\n    width: 285px !important;\n  }\n  .ua.create-user-label {\n    position: absolute !important;\n    font-size: 10px !important;\n    left: 14px;\n    text-transform: uppercase !important;\n    margin-top: 2px;\n    margin-bottom: 2px;\n    color: grey !important;\n  }\n  .ua.create-user-phone-label {\n    position: absolute !important;\n    font-size: 10px !important;\n    left: 0px !important;\n    text-transform: uppercase !important;\n    margin-top: 2px;\n    margin-bottom: 2px;\n    color: grey !important;\n  }\n  .ua.users {\n    color: #979797;\n    height: 50px !important;\n    margin-bottom: -5px !important;\n    border: 1px solid #85b7d9 !important;\n    background: white !important;\n    width: 50% !important;\n    padding: 10px;\n    border-radius: 4px 0 0 4px;\n  }\n  .ua.users.total-shipment {\n    height: 38px !important;\n  }\n  .ua.shipments {\n    color: #979797;\n    height: 50px !important;\n    margin-bottom: -5px !important;\n    border: 1px solid #85b7d9 !important;\n    background: white !important;\n    width: 50% !important;\n    padding: 10px;\n    border-radius: 0 4px 4px 0;\n  }\n  .ua.shipmentButton {\n    height: 15px !important;\n    background: #379bff !important;\n    border-radius: 14px !important;\n    border: 0px !important;\n    color: white;\n    font-size: 10px;\n  }\n  .ua.userText {\n    margin-bottom: 5px !important;\n  }\n  .ua.cardButton {\n    height: 15px !important;\n    background: #379bff !important;\n    border-radius: 14px !important;\n    border: 0px !important;\n    color: white;\n    font-size: 10px;\n    text-align: center !important;\n  }\n  .ua.deleteButton {\n    font-size: 12px;\n    color: #379bff;\n    background: transparent;\n    border: 0px;\n  }\n  .ua.shipmentText {\n    font-size: 12px;\n    color: \"#f7f7f7\";\n  }\n  .ua.cancel {\n    width: 177.5px;\n    height: 40px;\n    border-radius: 0px 0px 0px 4px !important;\n  }\n  .ua.save {\n    width: 177.5px;\n    height: 40px;\n    border-radius: 0px 0px 4px 0px !important;\n  }\n  .selected-card {\n    background-color: #e8f5ff !important;\n    box-shadow: 0 0 2px 2px #379bff !important;\n  }\n  .ui.toggle.checkbox input:checked ~ .box:before,\n  .ui.toggle.checkbox input:checked ~ label:before {\n    background-color: #58d021 ;\n  }\n  .ui.toggle.checkbox input:checked ~ .box:before,\n  .ui.toggle.checkbox input:checked ~ label:before {\n    background-color: #58d021 ;\n  }\n  .ui.toggle.checkbox input:focus:checked ~ .box:before,\n  .ui.toggle.checkbox input:focus:checked ~ label:before {\n    background-color: #58d021 ;\n  }\n  .ui.checkbox {\n    margin: 2px;\n  }\n  .popup-pagination {\n    width: 425px;\n    margin-left: -35px;\n    height: 40px;\n  }\n  .ua-add-user {\n    bottom: 30px;\n    right: 30px;\n   \n  }\n  .add-user-button{\n    position: absolute;\n    top: 11%;\n    left: 38%;\n    padding: 16px 40px !important;\n    border-radius: 0px 6px 6px 0px ;\n    background-color: rgb(0, 139, 143)!important;\n    font-weight: 100;\n  }\n  .ui.card > .content,\n  .ui.cards > .card > .content {\n    padding: 12px !important;\n  }\n  .form-scroller {\n    height: 58vh;\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  body ::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 0px !important;\n    height: 10px;\n  }\n  .create-user-input {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n  .create-user-input label {\n    position: relative !important;\n    font-size: 14px !important;\n    font-weight: 20;\n    font-style: italic;\n    left: 14px;\n    top: 25px;\n    margin-top: -20px !important;\n    color: #8a8a8a !important;\n    transform-origin: top left;\n    transform: translate(0, 16px) scale(1);\n    transition: all 0.1s ease-in-out;\n  }\n  .create-user-input input,\n  .create-user-input select,\n  .create-user-input textarea {\n    height: 42px !important;\n    margin-bottom: -5px !important;\n    padding-top: 20px !important;\n    margin-left: 0px !important;\n    border: 1px solid #85b7d9 !important;\n    font-weight: 550 !important;\n  }\n\n  .create-user-input #driversLicenseState{\n    height: 42px !important;\n    margin-bottom: -5px !important;\n    padding-top: 20px !important;\n    margin-left: 0px !important;\n    border: 1px solid #85b7d9 !important;\n    font-weight: 550 !important;\n  }\n  .create-user-input input:focus + label,\n  .create-user-input input:valid + label,\n  .create-user-input select:focus + label,\n  .create-user-input select:valid + label,\n  .create-user-input textarea:focus + label,\n  .create-user-input textarea:valid + label {\n    transform: translate(0, 4px) scale(0.75);\n    text-transform: uppercase !important;\n    font-style: normal !important;\n  }\n  .statusText {\n    position: absolute !important;\n    font-size: 10px !important;\n    left: 0px;\n    margin-top: 5px !important;\n    color: grey !important;\n    text-transform: uppercase !important;\n  }\n  .activeText {\n    position: absolute !important;\n    font-size: 10px !important;\n    margin-top: 5px !important;\n  }\n  .status {\n    margin-left: 58px !important;\n    margin-bottom: -5px !important;\n    margin-right: 15px !important;\n  }\n  .ui.selection.visible.dropdown > .text:not(.default) {\n    color: white !important;\n    margin-top: 2px !important;\n  }\n  .card-data {\n    color: #423f3f !important;\n  }\n  .card-date-header {\n    font-size: 12px !important;\n  }\n  .ui.card > .content,\n  .ui.cards > .card > .content {\n    cursor: default;\n  }\n  .create-user-input-readonly {\n    display: flex;\n    flex-direction: column-reverse;\n    cursor: default !important;\n  }\n  .create-user-input-readonly label {\n    position: static !important;\n    padding-left: 1.2rem !important;\n    font-size: 14px !important;\n    font-weight: 20;\n    font-style: italic;\n    left: 14px;\n    margin-top: -20px !important;\n    color: #8a8a8a !important;\n    transform-origin: top left;\n    transform: translate(0, 16px) scale(1);\n    transition: all 0.1s ease-in-out;\n  }\n  .create-user-input-readonly input,\n  .create-user-input-readonly select,\n  .create-user-input-readonly textarea {\n    height: 42px !important;\n    margin-bottom: -5px !important;\n    padding-top: 20px !important;\n    margin-left: 0px !important;\n    border: 0px !important;\n    font-weight: 550 !important;\n    width: 285px !important;\n    cursor: default !important;\n  }\n  .create-user-input-readonly input:focus + label,\n  .create-user-input-readonly input:valid + label,\n  .create-user-input-readonly select:focus + label,\n  .create-user-input-readonly select:valid + label,\n  .create-user-input-readonly textarea:focus + label,\n  .create-user-input-readonly textarea:valid + label {\n    transform: translate(0, 4px) scale(0.75);\n    text-transform: uppercase !important;\n    font-style: normal !important;\n  }\n  .invisible-card {\n    height: 164px !important;\n    width: 312px !important;\n    margin: 5px !important;\n    background: #f5f5f5 !important;\n    border: 0px !important;\n    box-shadow: none !important;\n  }\n  .capitalize {\n    text-transform: capitalize;\n  }\n  .clickCursor {\n    cursor: pointer !important;\n  }\n  .image-upload {\n    color: #379bff !important;\n  }\n  .ui.basic.button.dropdown {\n    height: 42px;\n  }\n  .KXname {\n    font-size: 14px !important;\n  }\n  .Search-bar{\n    padding: 5px;\n    background-color: white;\n    position: fixed;\n    z-index: 1;\n    margin-top: -11px;\n    width: 100%;\n  }\n  .UaClose{\n    display: inline-block;\n    position: absolute;\n    z-index: 1;\n    right: 15px;\n    padding: 10px;\n  }\n  \n/* Company Profile */\n.company-profile-input{\n  background: #FFF;\n  border: none;\n  height: 24px;\n  width: 100%;\n  line-height: 24px;\n}\n\n.cp-container {\n  margin: 1px;\n  background-color: #FFFFFF;\n  width: 100%;\n  padding: 2%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  height: 100vh;\n  overflow-y: scroll;\n}\n\n.cp-header{\n  position: relative;\n}\n\n.cp-title{\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 24px;\n}\n\n.cp-alert{\n  /* position: absolute; \n  top: -8;\n  right: 0;\n  width: 70%;\n  height: 20px;  */\n  margin-top: -12px;\n  margin-bottom: 12px;\n}\n\n.cp-inputs-group{\n  \n}\n\n.cp-gap{\n  margin-top: 32px;\n}\n\n.cp-status{\n  padding: 8px 0px;\n  display: flex;\n  align-items: center;\n}\n\n.cp-status{\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.cp-active{\n  padding-left: 24px;\n  padding-right: 12px;\n}\n\n.cp-input{\n  padding-top: 24px;\n  height: 60px;\n}\n\n.cp-flex{\n  display: flex;\n}\n\n.cp-dropdown-label{\n  font-size: 12px;\n  padding: 2px 8px;\n  color: #808080;\n}\n\n.cp-dropdown{\n  border: 1px solid #dededf;\n  width: 180px;\n}\n\n.cp-dropdown-select{\n  width: 100%;\n  padding: 8px;\n}   \n.dropdown-color-pref {\n  background-color: #008B8F !important;\n  width: 154px;\n  color: #fff;\n} \n.dropdown-color-pref .visible.menu.transition{\n  width: 154px;\n}\n.dropdown-color-pref .default.text{\n  color: #fff !important;\n}\n.dropdown-color-pref.ui.dropdown{padding-right: 20px;}\n.dropdown-color-pref.ui.dropdown .icon{width: auto;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translate(0, -50%);}\n.profile-update-button{\n  padding:12px 40px;\n  font-size:12px;\n  background-color:'#008B8F';\n  color:'#fff';\n  border-radius:0\n}\n.BrokerAssignment{\n  margin-top: 20px;\n  display: flex;\n}\n.ShipmentID{\n  margin-right: 15px;\n}\n.Broker{\n  margin-left: 30px;\n  margin-right: 15px;\n}\n.BAradio{\n  margin-left: 50px;\n}\n.radiogroup{\n  display: flex;\n  margin-top: 20px;\n}\n.PUNchange{\n  display: flex;\n  margin-bottom: 10px;\n  padding-top: 15px;\n  \n} \n.PUNchange .ui.input.cp-input{\n  padding-top: 0;\n  height: 35px;\n  margin-right: 15px;\n}\n.SavePayment{\n  margin-left: 20px;\n  margin-top: 25px;\n}\n.payment-broker-title{\n  padding-top: 10px;\n  margin-right: 10px;\n}\n.paymentType{\n  margin-left: 25px;\n}";
styleInject(css_248z$2);

reactPdf.pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + reactPdf.pdfjs.version + "/pdf.worker.js";

var LegalDocViwer = function (_Component) {
  inherits(LegalDocViwer, _Component);

  function LegalDocViwer(props) {
    classCallCheck(this, LegalDocViwer);

    var _this = possibleConstructorReturn(this, (LegalDocViwer.__proto__ || Object.getPrototypeOf(LegalDocViwer)).call(this, props));

    _this.componentDidMount = function () {
      _this.fetchFile();
    };

    _this.componentDidUpdate = function (prevProps, prevState) {
      if (prevProps.bucketName !== _this.props.bucketName && prevProps.documentName !== _this.props.documentName) {
        _this.fetchFile();
      }
    };

    _this.fetchFile = function () {
      if (_this.props.bucketName && _this.props.documentName) {
        fetchFileLegal(_this.props.bucketName + ":" + _this.props.documentName).then(function (resp) {
          var a = resp.data.eventMessage.urls[0];
          _this.setState({ signedDoc: a });
        }).catch(function (err) {});
      }
    };

    _this.displayMessage = function (title, color) {
      return React__default.createElement(
        "div",
        {
          style: {
            marginTop: "10px",
            marginLeft: "10px",
            color: color
          }
        },
        title
      );
    };

    _this.renderOptions = function (marginLeft, img, type) {
      return React__default.createElement(
        "div",
        {
          style: {
            height: "50px",
            width: "43px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#008B8F",
            marginLeft: marginLeft,
            borderRadius: "3px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          onClick: function onClick() {
            if (type === "upload") {
              if (_this.props.onPressUpload) {
                _this.props.onPressUpload();
              }
            } else if (type === "download") {
              if (_this.props.onPressDownload) {
                _this.props.onPressDownload(_this.state.signedDoc);
              }
            } else {
              if (_this.props.onPressPrint) {
                _this.props.onPressPrint(_this.state.signedDoc);
              }
            }
          }
        },
        React__default.createElement("img", {
          style: {
            height: type === "upload" ? "15px" : "18px",
            width: type === "upload" ? "15px" : "18px"
          },
          src: img
        })
      );
    };

    _this.renderInformation = function () {
      if (_this.props.title === "COPY OF THE INSURANCE") {
        return React__default.createElement(
          "div",
          {
            style: {
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
              paddingBottom: "4px"
            }
          },
          React__default.createElement(
            "div",
            {
              style: {
                width: "33.3%",
                height: "100%",
                borderRightWidth: "1px",
                borderStyle: "solid",
                borderColor: "#1866AE",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column"
              }
            },
            React__default.createElement(
              "span",
              { className: "company-profile-textinput-header" },
              "POLICY NUMBER"
            ),
            React__default.createElement(
              "span",
              {
                style: { marginTop: "2px", fontSize: "15px", fontWeight: "600" }
              },
              _this.props.policyNo
            )
          ),
          React__default.createElement(
            "div",
            {
              style: {
                width: "33.3%",
                height: "100%",
                borderRightWidth: "1px",
                borderStyle: "solid",
                borderColor: "#1866AE",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column"
              }
            },
            React__default.createElement(
              "span",
              { className: "company-profile-textinput-header" },
              "EFFECTIVE DATE"
            ),
            React__default.createElement(
              "span",
              {
                style: { marginTop: "2px", fontSize: "15px", fontWeight: "600" }
              },
              _this.convertEpochtoDate(_this.props.effectiveDate)
            )
          ),
          React__default.createElement(
            "div",
            {
              style: {
                width: "33.3%",
                height: "100%",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column"
              }
            },
            React__default.createElement(
              "span",
              { className: "company-profile-textinput-header" },
              "POLICY EXPIRY DATE"
            ),
            React__default.createElement(
              "span",
              {
                style: { marginTop: "2px", fontSize: "15px", fontWeight: "600" }
              },
              _this.convertEpochtoDate(_this.props.expiryDate)
            )
          )
        );
      }
    };

    _this.convertEpochtoDate = function (epoch) {
      if (epoch) {
        var myDate = new Date(epoch);
        return myDate.toLocaleDateString("default", {
          month: "long",
          day: "2-digit",
          year: "numeric"
        });
      } else {
        return "";
      }
    };

    _this.state = {
      numPages: [],
      signedDoc: ""
    };
    return _this;
  }

  createClass(LegalDocViwer, [{
    key: "onDocumentLoadSuccess",
    value: function onDocumentLoadSuccess(pdf) {
      var myArr = [];
      for (var i = 1; i <= pdf._pdfInfo.numPages; i++) {
        myArr.push(i);
      }
      this.setState({ numPages: myArr });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        "div",
        {
          style: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#1866AE",
            marginTop: this.props.index !== 0 ? "10px" : 0,
            borderRadius: "2px"
          }
        },
        React__default.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px"
            }
          },
          React__default.createElement(
            "span",
            {
              style: {
                color: "#1866AE",
                fontSize: "18px",
                fontWeight: "500",
                width: "60%",
                height: "50px",
                display: "flex",
                alignItems: "center"
              },
              onClick: function onClick() {
                if (_this2.props.onToggle) {
                  _this2.props.onToggle();
                }
              }
            },
            this.props.title
          ),
          React__default.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }
            },
            this.props.title === "TERMS AND CONDITIONS" ? "" : this.renderOptions("0", "/images/attach.svg", "upload"),
            this.renderOptions("10px", "/images/pdf.png", "download")
          )
        ),
        this.props.visible && this.state.signedDoc && React__default.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "scroll",
              height: "622px"
            }
          },
          this.renderInformation(),
          React__default.createElement(
            reactPdf.Document,
            {
              file: this.state.signedDoc,
              loading: this.displayMessage("Loading PDF ...", "black"),
              error: this.displayMessage("Error Loading Document", "red"),
              onLoadSuccess: function onLoadSuccess(pdf) {
                _this2.onDocumentLoadSuccess(pdf);
              }
              // onLoadError={(console.error, "loadError")}
            },
            this.state.numPages.length > 0 && this.state.numPages.map(function (item, index) {
              return React__default.createElement(reactPdf.Page, { pageNumber: item, loading: "", className: "pdf-view" });
            })
          )
        )
      );
    }
  }]);
  return LegalDocViwer;
}(React.Component);

reactPdf.pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + reactPdf.pdfjs.version + "/pdf.worker.js";
var lightRed = "rgba(255,153,153, 0.2)";

var Legal = function (_Component) {
  inherits(Legal, _Component);

  function Legal(props) {
    classCallCheck(this, Legal);

    var _this = possibleConstructorReturn(this, (Legal.__proto__ || Object.getPrototypeOf(Legal)).call(this, props));

    _this.componentDidMount = function () {
      _this.props.data.documents && _this.setState({ documents: _this.configureArray(_this.props.data.documents) });
    };

    _this.componentDidUpdate = function (prevProps, prevState) {
      if (prevProps.data.documents !== _this.props.data.documents) {
        _this.setState({ documents: _this.configureArray(_this.props.data.documents) });
      }
    };

    _this.validate = function () {
      var resp = true;
      _this.state.documents && _this.state.documents.map(function (item, index) {
        if (item.documentName === "") {
          resp = false;
        }
      });
      return resp;
    };

    _this.onPressAddDocument = function () {
      if (_this.validate()) {
        _this.setState({ file: null, newDocName: "",
          insurance: { policyNo: "", expiryDate: "", effectiveDate: "" },
          options: { type: "OTHER", currentIndex: null, visible: true } });
      } else {
        // this.setState({error: [{err:"Please upload both Terms and Conditons & Copy of Insurance before uploading any other document"}]})
        window.scrollTo(0, 0);
      }
    };

    _this.onAddComplete = function () {
      var payload = {
        documentName: _this.state.file,
        documentType: "PARTNER_DOCUMENT_NONE",
        documentTitle: _this.state.newDocName
      };
      var arr = [].concat(toConsumableArray(_this.state.documents));
      arr.push(payload);
      _this.callApi(arr);
    };

    _this.callApi = function (finalArr) {
      _this.setState({ loading: true });
      editDrayagePartnerLegal(_this.props.data.companyProfile.userGuid, finalArr).then(function (resp) {
        console.log(resp);
        _this.setState({ loading: false });
        if (resp.code === 400) {
          console.log("err");
          var _error = [{ key: resp.code, err: resp.msg }];
          _this.setState({ error: _error });
        } else {
          _this.props.fetchDrayagePartnerData();
          window.scrollTo(0, 0);
        }
        _this.setState({ options: {
            type: null,
            currentIndex: null,
            visible: false
          } });
        _this.props.fetchDrayagePartnerData();
        window.scrollTo(0, 0);
      }).catch(function () {
        _this.setState({ loading: false });
        var error = [{ key: 500, err: "Something Went Wrong!" }];
        _this.setState({ error: error });
        window.scrollTo(0, 0);
      });
    };

    _this.onEditDocument = function (docName, index, type) {
      var array = [].concat(toConsumableArray(_this.state.documents));
      if (type === "COPY OF THE INSURANCE") {
        array[index].documentName = docName;
        array[index].effectiveDate = _this.state.insurance.effextiveDate;
        array[index].expiryDate = _this.state.insurance.expiryDate;
        array[index].policyNumber = _this.state.insurance.policyNo;
      } else if (type === "TERMS AND CONDITIONS") {
        array[index].documentName = docName;
      } else {
        array[index].documentName = docName;
        array[index].documentTitle = _this.state.newDocName;
      }
      var finalArr = [];
      array.map(function (item, index) {
        if (item.documentName !== "") {
          finalArr.push(item);
        }
      });
      console.log(finalArr);
      _this.callApi(finalArr);
    };

    _this.handleToggle = function (index) {
      var myArr = [].concat(toConsumableArray(_this.state.selected));
      var indexOf = myArr.indexOf(index);

      if (indexOf !== -1) {
        myArr.splice(indexOf, 1);
        _this.setState({ selected: myArr });
      } else {
        myArr.push(index);
        _this.setState({ selected: myArr });
      }
    };

    _this.documentValidation = function (type) {
      var resp = false;
      if (type === "TERMS AND CONDITIONS") {
        if (_this.state.file === null) {
          resp = true;
        }
      } else if (type === "COPY OF THE INSURANCE") {
        if (_this.state.file === null || !_this.state.insurance.policyNo || !_this.state.insurance.expiryDate || !_this.state.insurance.effextiveDate) {
          resp = true;
        }
      } else {
        if (_this.state.file === null || !_this.state.newDocName) {
          resp = true;
        }
      }
      console.log(resp);
      return resp;
    };

    _this.renderAddDocumentModal = function (existingDocName) {
      return _this.state.options.visible ? React__default.createElement(
        "div",
        { style: { marginTop: "2%" } },
        React__default.createElement(
          semanticUiReact.Form,
          {
            className: "ua popup-form",
            style: {
              height: _this.state.options.type === "TERMS AND CONDITIONS" ? "18vh" : _this.state.options.type === "COPY OF THE INSURANCE" ? "47vh" : "27vh",
              backgroundColor: "white"
            }
          },
          React__default.createElement(
            "div",
            {
              style: {
                fontSize: "15px",
                color: "#008B8F",
                fontWeight: "600",
                textTransform: "uppercase",
                paddingBottom: "4px"
              }
            },
            "UPLOAD DOCUMENT"
          ),
          React__default.createElement(
            "div",
            { style: { overflow: "scroll" } },
            React__default.createElement(
              semanticUiReact.Button,
              {
                loading: _this.state.loading,
                style: {
                  width: "100%",
                  fontSize: "12px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#008B8F",
                  color: "#008B8F",
                  borderRadius: "0",
                  marginTop: "20px",
                  backgroundColor: "#FFFFFF"
                },
                onClick: function onClick() {
                  return _this.imageRef.current.click();
                }
              },
              _this.state.file === null ? "UPLOAD" : "✓"
            ),
            _this.state.options.type === "OTHER" ? React__default.createElement(
              semanticUiReact.Form.Field,
              null,
              React__default.createElement(
                "label",
                {
                  style: {
                    marginTop: "20px",
                    letterSpacing: "2px",
                    color: "#008B8F"
                  }
                },
                "Document Name"
              ),
              React__default.createElement("input", {
                style: { marginTop: "2px" },
                required: true,
                type: "text",
                name: "docName",
                placeholder: "Document Name",
                value: _this.state.newDocName,
                onChange: function onChange(e) {
                  _this.setState({ newDocName: e.target.value });
                }
              })
            ) : "",
            _this.state.options.type === "COPY OF THE INSURANCE" && React__default.createElement(
              semanticUiReact.Form.Field,
              null,
              React__default.createElement(
                "label",
                {
                  style: {
                    marginTop: "20px",
                    letterSpacing: "2px",
                    color: "#008B8F"
                  }
                },
                "Policy Number"
              ),
              React__default.createElement("input", {
                style: { marginTop: "2px" },
                required: true,
                type: "text",
                name: "policyNo",
                placeholder: "Policy Number",
                value: _this.state.insurance.policyNo,
                onChange: function onChange(e) {
                  _this.setState({ insurance: _extends({}, _this.state.insurance, { policyNo: e.target.value }) });
                }
              })
            ),
            _this.state.options.type === "COPY OF THE INSURANCE" && React__default.createElement(
              semanticUiReact.Form.Field,
              null,
              React__default.createElement(
                "label",
                {
                  style: {
                    marginTop: "20px",
                    letterSpacing: "2px",
                    color: "#008B8F"
                  }
                },
                "Effective Date"
              ),
              React__default.createElement("input", {
                style: { marginTop: "2px" },
                required: true,
                type: "date",
                name: "effectiveDate",
                placeholder: "Effective Date",
                onChange: function onChange(e) {
                  _this.setState({ insurance: _extends({}, _this.state.insurance, { effextiveDate: new Date(e.target.value).getTime() }) });
                }
              })
            ),
            _this.state.options.type === "COPY OF THE INSURANCE" && React__default.createElement(
              semanticUiReact.Form.Field,
              null,
              React__default.createElement(
                "label",
                {
                  style: {
                    marginTop: "20px",
                    letterSpacing: "2px",
                    color: "#008B8F"
                  }
                },
                "Policy Expiry Date"
              ),
              React__default.createElement("input", {
                style: { marginTop: "2px" },
                required: true,
                type: "date",
                name: "expiryDate",
                placeholder: "Expiry Date",
                onChange: function onChange(e) {
                  _this.setState({ insurance: _extends({}, _this.state.insurance, { expiryDate: new Date(e.target.value).getTime() }) });
                }
              })
            )
          ),
          React__default.createElement(
            "div",
            { className: "popup-pagination", style: { marginTop: "5px" } },
            React__default.createElement(
              semanticUiReact.Button.Group,
              null,
              React__default.createElement(
                semanticUiReact.Button,
                {
                  className: "ua cancel",
                  onClick: function onClick() {
                    _this.setState({ options: {
                        type: null,
                        currentIndex: null,
                        visible: false
                      } });
                  },
                  style: { background: "#EBF2FB", marginLeft: "33px" },
                  type: "submit"
                },
                "CANCEL"
              ),
              React__default.createElement(
                semanticUiReact.Button,
                {
                  loading: _this.state.loading,
                  disabled: _this.documentValidation(_this.state.options.type),
                  className: "ua save",
                  style: { background: "#008B8F", color: "white" },
                  type: "submit",
                  onClick: function onClick() {
                    _this.setState({ loading: true });
                    _this.state.options.type === "OTHER" ? _this.onAddComplete() : _this.onEditDocument(_this.state.file, _this.state.options.currentIndex, _this.state.options.type);
                  }
                },
                "SUBMIT"
              )
            )
          )
        )
      ) : null;
    };

    _this.renderButton = function () {
      return React__default.createElement(
        "div",
        null,
        React__default.createElement(
          "button",
          {
            className: "contact-detail-button",
            style: { backgroundColor: "#FFFFFF" },
            onClick: function onClick() {
              _this.onPressAddDocument();
            }
          },
          React__default.createElement("img", {
            src: "/images/addContactPerson.png",
            style: { height: "15px", width: "20px" }
          }),
          React__default.createElement(
            "span",
            {
              style: {
                color: "#1765AE",
                fontSize: "14px",
                marginLeft: "10px"
              }
            },
            "ADD DOCUMENT"
          )
        )
      );
    };

    _this.renderList = function (title, index, item) {
      return React__default.createElement(LegalDocViwer, {
        key: index,
        title: title,
        index: index,
        visible: _this.state.selected && _this.state.selected.includes(index),
        bucketName: item.bucketName,
        policyNo: item.policyNumber || "",
        effectiveDate: item.effectiveDate || "",
        expiryDate: item.expiryDate || "",
        documentName: item.documentName,
        onToggle: function onToggle() {
          _this.handleToggle(index);
        },
        onPressUpload: function onPressUpload() {
          _this.setState({ file: null });
          _this.setState({ options: {
              type: title === "TERMS AND CONDITIONS" || title === "COPY OF THE INSURANCE" ? title : "EDIT_EXISTING",
              currentIndex: index,
              visible: true
            } });
        },
        onPressDownload: function onPressDownload(doc) {
          if (doc) {
            window.open(doc, "_blank");
          }
        },
        onPressPrint: function onPressPrint(doc) {
        }
      });
    };

    _this.state = {
      documents: _this.configureArray([]),
      selected: [],
      error: [],
      loading: false,
      file: null,
      newDocName: "",
      insurance: {
        policyNo: "",
        expiryDate: "",
        effextiveDate: ""
      },
      options: {
        visible: false,
        currentIndex: null,
        type: null
      }
    };
    _this.imageRef = React__default.createRef();
    return _this;
  }

  createClass(Legal, [{
    key: "configureArray",
    value: function configureArray(array) {
      var resp = [];
      array.map(function (item, index) {
        if (item.documentName) {
          resp.push(item);
        }
      });
      var termsPayload = {
        documentName: "",
        documentType: "TERMS_AGREEMENTS",
        documentTitle: "TERMS AND CONDITIONS"
      };
      var insurancePayload = {
        documentName: "",
        effectiveDate: "",
        expiryDate: "",
        policyNumber: "",
        documentType: "INSURANCE",
        documentTitle: "COPY OF THE INSURANCE"
      };
      if (___default.isEmpty(array)) {
        resp = [termsPayload, insurancePayload];
      } else {
        var findIndex = resp.findIndex(function (obj) {
          return obj.documentType === "TERMS_AGREEMENTS";
        });
        var findIndex2 = resp.findIndex(function (obj) {
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
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        "div",
        { className: "drayage-cp-container", style: { overflow: "scroll" } },
        this.state.error.length > 0 && React__default.createElement(
          "div",
          {
            style: {
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
              marginBottom: "15px"
            }
          },
          error[0].err || "Something Went Wrong"
        ),
        this.validate() ? "" : React__default.createElement(
          "p",
          { style: { color: "red" } },
          "\"Please upload Copy of Insurance before uploading any other document\""
        ),
        this.state.loading === true ? React__default.createElement(semanticUiReact.Loader, { active: true, style: { marginTop: "30%" }, inline: "centered", size: "medium" }) : React__default.createElement(
          "div",
          { style: { marginLeft: "10px", marginTop: "10px", width: "50%" } },
          this.state.documents && this.state.documents.map(function (item, index) {
            return _this2.renderList(item.documentTitle, index, item);
          }),
          React__default.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "20px",
                marginBottom: "10px",
                marginLeft: "2px"
              }
            },
            this.renderButton()
          ),
          React__default.createElement("input", {
            style: { display: "none" },
            type: "file",
            accept: ".doc,.docx,application/pdf",
            ref: this.imageRef,
            onChange: function onChange(event) {
              console.log(event.target.files[0], "event");
              var file = event.target.files[0];
              var filename = Date.now() + "_" + file.name;
              var formData = new FormData();
              formData.append("files", file, filename);
              // let bucketName = JSON.parse(makeValidJson());
              uploadImageToBucket(formData, window._env_.DRAYAGE_PARTNER_DOC_BUCKET).then(function (resp) {
                var str = resp.data.msg;
                var firstIndex = str.indexOf("[");
                var lastIndex = str.indexOf("]");
                var finalString = str.substring(firstIndex + 1, lastIndex);
                _this2.setState({ file: finalString });
              }).catch(function (err) {
                console.log(err);
              });
            }
          }),
          this.renderAddDocumentModal()
        )
      );
    }
  }]);
  return Legal;
}(React.Component);

reactPdf.pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + reactPdf.pdfjs.version + "/pdf.worker.js";
var lightRed$1 = "rgba(255,153,153, 0.2)";
var white = "#FFFFFF";
var unitMeasurement = [{ text: "PER DAY", value: "PER DAY" }, { text: "PER UNIT", value: "PER UNIT" }, { text: "PER HOUR", value: "PER HOUR" }, { text: "PER STATE", value: "PER STATE" }, { text: "APMT", value: "APMT" }];

var Pricing = function (_Component) {
  inherits(Pricing, _Component);

  function Pricing(props) {
    classCallCheck(this, Pricing);

    var _this = possibleConstructorReturn(this, (Pricing.__proto__ || Object.getPrototypeOf(Pricing)).call(this, props));

    _this.componentDidMount = function () {
      _this.fetchPricingDropdown();
    };

    _this.fetchPricingDropdown = function () {
      _this.setState({ loading2: true });
      var list = [];
      getPricingDropdown().then(function (resp) {
        var details = [].concat(toConsumableArray(resp.data.eventMessage.drayageAdditionalCharges));
        details.map(function (item, index) {
          list.push({ text: item.chargeName, value: item.glCode });
        });
        _this.setState({ chargeList: list });
        _this.configureArray(resp.data.eventMessage.drayageStandardCharges);
      }).catch(function (err) {});
    };

    _this.configureArray = function (input) {
      var items = [];
      var pricing = [].concat(toConsumableArray(_this.props.data.pricing.pricingItems || []));
      input.map(function (item, index) {
        var findIndex = pricing.findIndex(function (obj) {
          return obj.chargeName === item.chargeName;
        });
        var obj = {
          chargeName: item.chargeName,
          unitPrice: findIndex === -1 ? "" : pricing[findIndex].unitPrice,
          note: findIndex === -1 ? "" : pricing[findIndex].note,
          unitMeasurement: findIndex === -1 ? "" : pricing[findIndex].unitMeasurement,
          glCode: item.glCode,
          flag: false
        };
        items.push(obj);
        if (findIndex !== -1) {
          pricing.splice(findIndex, 1);
        }
      });
      _this.setState({ pricingItems: [].concat(items, toConsumableArray(pricing)), loading2: false });
    };

    _this.handleChangeText = function (key, data, index) {
      var inputs = [].concat(toConsumableArray(_this.state.pricingItems));
      inputs[index][key] = data;
      _this.setState({ pricingItems: inputs });
    };

    _this.handleAddContactPerson = function () {
      _this.setState({ pricingItems: [].concat(toConsumableArray(_this.state.pricingItems), [{
          unitPrice: "",
          unitMeasurement: "",
          note: "",
          chargeName: "",
          glCode: "",
          flag: true
        }]) });
    };

    _this.handleAddDocument = function () {
      return _this.imageRef.current.click();
    };

    _this.checkValidation = function (key) {
      var color = white;
      var findIndex = _this.state.error.findIndex(function (el) {
        return el.key === key;
      });
      if (findIndex !== -1) {
        color = lightRed$1;
      }
      return color;
    };

    _this.handleFieldValidation = function (key, text) {
      var str = text;
      if (Number.isInteger(text)) {
        str = text.toString();
      }
      if (str.length > 0) {
        var tempArr = [].concat(toConsumableArray(_this.state.error));
        var findIndex = tempArr.findIndex(function (el) {
          return el.key === key;
        });
        if (findIndex !== -1) {
          tempArr.splice(findIndex, 1);
          _this.setState({ error: tempArr });
        }
      }
    };

    _this.validate = function () {
      _this.setState({ error: [] });
      var validateErr = false;
      var tempErr = [];
      _this.state.pricingItems.map(function (item, index) {
        if (item.flag) {
          if (item.glCode === "") {
            validateErr = true;
            tempErr.push({
              key: "chargeName_row_" + index,
              err: "Please enter all the required details"
            });
          }
          if (item.unitPrice === "") {
            validateErr = true;
            tempErr.push({
              key: "unitPrice_row_" + index,
              err: "Please enter all the required details"
            });
          }
          if (item.unitMeasurement === "") {
            validateErr = true;
            tempErr.push({
              key: "unitMeasurement_row_" + index,
              err: "Please enter all the required detailst"
            });
          }
        }
        if (item.unitPrice && !item.unitMeasurement) {
          validateErr = true;
          tempErr.push({
            key: "unitMeasurement_row_" + index,
            err: "Please enter all the required detailst"
          });
        }
      });
      _this.setState({ error: tempErr });
      if (tempErr.length > 0) {
        window.scrollTo(0, 0);
      }
      return validateErr;
    };

    _this.callApi = function (finalArr) {
      _this.setState({ loading: true });
      editDrayagePartnerPricing(_this.props.data.companyProfile.userGuid, finalArr, _this.props.data.pricing.pricingListDocument).then(function (resp) {
        _this.setState({ loading: false });
        if (resp.code === 400) {
          var error = [{ key: resp.code, err: resp.msg }];
          _this.setState({ error: error });
          window.scrollTo(0, 0);
        } else {
          _this.props.fetchDrayagePartnerData();
          window.scrollTo(0, 0);
        }
      }).catch(function () {
        _this.setState({ loading: false });
        var error = [{ key: 500, err: "Something Went Wrong!" }];
        _this.setState({ error: error });
        window.scrollTo(0, 0);
      });
    };

    _this.callApiDocList = function (finalString) {
      _this.setState({ loading: true });
      editDrayagePartnerPricingDoc(_this.props.data.companyProfile.userGuid, finalString).then(function (resp) {
        console.log("doc", resp);
        _this.setState({ loading: false });
        if (resp.data && resp.data.code === 400) {
          var error = [{ key: resp.data && resp.data.code, err: resp.data && resp.data.msg }];
          setError(error);
          window.scrollTo(0, 0);
        } else {
          _this.props.fetchDrayagePartnerData();
          window.scrollTo(0, 0);
        }
      }).catch(function () {
        _this.setState({ loading: false });
        var error = [{ key: 500, err: "Something Went Wrong!" }];
        _this.setState({ error: error });
        window.scrollTo(0, 0);
      });
    };

    _this.getChargeName = function (glCode, flag) {
      if (flag) {
        var resp = _this.state.chargeList[_this.state.chargeList.findIndex(function (obj) {
          return obj.value === glCode;
        })].text;
        return resp;
      } else {
        return undefined;
      }
    };

    _this.onSave = function () {
      if (!_this.validate()) {
        var finalArr = [];
        _this.state.pricingItems.map(function (item, index) {
          if (item.unitPrice && item.unitMeasurement) {
            var obj = _extends({}, item, {
              chargeName: _this.getChargeName(item.glCode, item.flag) || item.chargeName
            });
            delete obj["flag"];
            finalArr.push(obj);
          }
        });
        _this.callApi(finalArr);
      }
    };

    _this.getDynamicDropDown = function () {
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
      return _this.state.chargeList;
    };

    _this.Icon = function () {
      return React__default.createElement("div", {
        style: {
          position: "absolute",
          top: "3px",
          right: "5px",
          height: "8px",
          width: "8px",
          borderStyle: "solid",
          borderColor: "#04ADB1",
          borderWidth: "0px 2px 2px 0px",
          transform: "rotate(45deg)"
        }
      });
    };

    _this.renderDropdown = function (value, key, data, handleChange, unit) {
      var width = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "100px";

      return React__default.createElement(
        "div",
        { className: "pricing-dropdown-container", style: { width: width } },
        React__default.createElement(semanticUiReact.Dropdown, {
          placeholder: unit,
          value: value,
          className: "pricing-dropdown",
          icon: _this.Icon,
          selection: true,
          style: {
            color: "#000000",
            backgroundColor: _this.checkValidation(key),
            borderWidth: unit === "Charge Name" ? "0px" : "1px"
          },
          options: data,
          onChange: function onChange(e, data) {
            _this.handleFieldValidation(key, data.value);
            handleChange(data.value);
          }
        })
      );
    };

    _this.renderButton = function (title, handleClick) {
      var customStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return React__default.createElement(
        "div",
        { style: _extends({}, customStyle) },
        React__default.createElement(
          "button",
          {
            className: "contact-detail-button",
            style: { backgroundColor: "#FFFFFF" },
            onClick: handleClick
          },
          React__default.createElement(
            "span",
            {
              style: {
                color: "#1765AE",
                fontSize: "14px",
                marginLeft: "10px"
              }
            },
            title
          )
        )
      );
    };

    _this.renderInput = function (divStyle, inputStyle, name, value, placeholder, key, handleChange) {
      return React__default.createElement(
        "div",
        { style: divStyle },
        name === "unitPrice" && value.length > 0 && React__default.createElement(
          "span",
          {
            style: {
              position: "absolute",
              left: value.length > 6 ? "3px" : "auto",
              right: value.length <= 6 ? "calc(" + value.length + "ch + 10px)" : "auto",
              fontWeight: "600",
              zIndex: 1,
              transform: "translateY(-50%)",
              top: "50%"
            }
          },
          "$"
        ),
        React__default.createElement(kxCommonComponents.Input, {
          className: "pricing-text-input",
          placeholder: placeholder,
          name: name,
          numbersOnly: name === "unitPrice" ? true : false,
          value: value,
          inputStyle: _extends({}, inputStyle, {
            backgroundColor: name === "note" ? white : _this.checkValidation(key),
            textAlign: name === "unitPrice" ? "right" : "initial",
            border: "2px #286084 solid"
          }),
          onChange: function onChange(e) {
            _this.handleFieldValidation(key, e);
            handleChange(e);
          }
        })
      );
    };

    _this.renderRow = function (item, index) {
      return React__default.createElement(
        "div",
        { key: index, className: "pricing-text-input-container" },
        item.flag ? _this.renderDropdown(item.glCode, "chargeName_row_" + index, _this.getDynamicDropDown(), function (data) {
          var findIndex = _this.state.pricingItems.findIndex(function (el) {
            return el.glCode === data;
          });
          if (findIndex === -1) {
            _this.handleChangeText("glCode", data, index);
          }
        }, "Charge Name", "30%") : React__default.createElement(
          "span",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "22px",
              width: "30%",
              minWidth: "80px",
              fontSize: "12px",
              fontWeight: "600"
            }
          },
          item.chargeName
        ),
        _this.renderInput({
          position: "relative",
          width: "11ch"
        }, {
          color: "#000000"
        }, "unitPrice", "" + item.unitPrice, "Price", "unitPrice_row_" + index, function (data) {
          return _this.handleChangeText("unitPrice", data, index);
        }),
        _this.renderDropdown(item.unitMeasurement, "unitMeasurement_row_" + index, unitMeasurement, function (data) {
          return _this.handleChangeText("unitMeasurement", data, index);
        }, "Unit"),
        _this.renderInput({
          width: "30%",
          marginLeft: "15px"
        }, {
          color: "#000000"
        }, "note", item.note, "Note (Optional)", "unitMeasurement_row_" + index, function (data) {
          return _this.handleChangeText("note", data, index);
        }),
        React__default.createElement("div", {
          className: "price-item-remove",
          onClick: function onClick() {
            _this.setState({ pricingItems: _this.state.pricingItems.filter(function (_$$1, i) {
                return i !== index;
              }) });
          }
        })
      );
    };

    _this.renderLabel = function (title, width) {
      var float = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return React__default.createElement(
        "div",
        {
          style: {
            width: width,
            height: "17px",
            fontSize: "12px",
            fontWeight: "600"
          }
        },
        React__default.createElement(
          "span",
          { style: { float: float ? "left" : "right" } },
          title
        )
      );
    };

    _this.renderDocument = function () {
      return React__default.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "35px"
          }
        },
        !___default.isEmpty(_this.props.data.pricing.pricingListDocument) && React__default.createElement(
          "div",
          { style: { marginBottom: "10px" } },
          _this.renderButton("Attach Price List", _this.handleAddDocument)
        ),
        React__default.createElement(RenderDocument, {
          visible: true,
          bucketName: _this.props.data.pricing.pricingListDocument && _this.props.data.pricing.pricingListDocument.bucketName,
          documentName: _this.props.data.pricing.pricingListDocument && _this.props.data.pricing.pricingListDocument.documentName
        })
      );
    };

    _this.state = {
      pricingItems: [],
      error: [],
      loading: false,
      loading2: false,
      chargeList: []
    };
    _this.imageRef = React__default.createRef();
    return _this;
  }

  createClass(Pricing, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        "div",
        { className: "drayage-cp-container drayage-pricing-container", style: { overflow: "scroll" } },
        this.state.error.length > 0 && React__default.createElement(
          "div",
          {
            style: {
              marginLeft: "10px",
              color: "red",
              height: "35px",
              width: "95%",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
              backgroundColor: lightRed$1,
              marginTop: "5px",
              marginBottom: "15px"
            }
          },
          this.state.error[0].err || "Something Went Wrong"
        ),
        this.state.loading2 === true ? React__default.createElement(
          "div",
          {
            style: {
              height: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }
          },
          React__default.createElement(semanticUiReact.Loader, { active: true, inline: "centered", size: "medium" })
        ) : React__default.createElement(
          "div",
          {
            style: {
              margin: "10px",
              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }
          },
          this.state.pricingItems.length > 0 && React__default.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "10px"
              }
            },
            this.renderLabel("ITEM", "30%"),
            this.renderLabel("CHARGE", "11ch"),
            this.renderLabel("PER UNIT", "105px"),
            this.renderLabel("NOTES", "30%"),
            this.renderLabel("DEL", "50px", false)
          ),
          this.state.pricingItems.length > 0 && this.state.pricingItems.map(function (item, index) {
            return _this2.renderRow(item, index);
          }),
          this.state.pricingItems.length > 0 && React__default.createElement("div", {
            style: {
              borderTopWidth: "1px",
              borderStyle: "solid",
              borderColor: "#D4D4D4"
            }
          }),
          React__default.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }
            },
            this.renderButton("ADD ADDITIONAL", this.handleAddContactPerson, {
              marginLeft: "-8px",
              marginTop: "10px"
            }),
            ___default.isEmpty(this.props.data.pricing.pricingListDocument) && this.renderButton("ADD PRICE LIST", this.handleAddDocument, {
              marginLeft: "-10px",
              marginTop: "10px"
            })
          ),
          this.state.pricingItems.length > 0 && React__default.createElement(
            semanticUiReact.Button,
            {
              loading: this.state.loading,
              style: {
                padding: "12px 40px",
                marginTop: "20px",
                fontSize: "12px",
                backgroundColor: "#008B8F",
                color: "white",
                borderRadius: "0",
                marginBottom: "10px"
              },
              onClick: function onClick() {
                _this2.onSave({});
              }
            },
            "SAVE"
          ),
          React__default.createElement("input", {
            style: { display: "none" },
            type: "file",
            accept: ".doc,.docx,application/pdf",
            ref: this.imageRef,
            onChange: function onChange(event) {
              var file = event.target.files[0];
              var filename = Date.now() + "_" + file.name;
              var formdata = new FormData();
              formdata.append("files", file, filename);
              // let bucketName = JSON.parse(makeValidJson());
              uploadImageToBucket(formdata, window._env_.DRAYAGE_PARTNER_DOC_BUCKET).then(function (resp) {
                var str = resp.data.msg;
                var firstIndex = str.indexOf("[");
                var lastIndex = str.indexOf("]");
                var finalString = str.substring(firstIndex + 1, lastIndex);
                _this2.callApiDocList(finalString);
              }).catch(function (err) {
                console.log(err);
              });
            }
          })
        ),
        React__default.createElement(
          "div",
          { className: "show_document" },
          this.renderDocument()
        )
      );
    }
  }]);
  return Pricing;
}(React.Component);

var RenderDocument = function (_Component2) {
  inherits(RenderDocument, _Component2);

  function RenderDocument(props) {
    classCallCheck(this, RenderDocument);

    var _this3 = possibleConstructorReturn(this, (RenderDocument.__proto__ || Object.getPrototypeOf(RenderDocument)).call(this, props));

    _this3.componentDidMount = function () {
      _this3.fetchFile();
    };

    _this3.componentDidUpdate = function (prevProps) {
      if (prevProps.documentName !== _this3.props.documentName) {
        _this3.fetchFile();
      }
    };

    _this3.fetchFile = function () {
      var unmounted = false;

      if (_this3.props.bucketName && _this3.props.documentName) {
        fetchFileLegal(_this3.props.bucketName + ":" + _this3.props.documentName).then(function (resp) {
          if (!unmounted) _this3.setState({ signedDoc: resp.data.eventMessage.urls[0] });
        }).catch(function (err) {});
      }

      return function () {
        unmounted = true;
      };
    };

    _this3.displayMessage = function (title, color) {
      return React__default.createElement(
        "div",
        {
          style: {
            marginTop: "10px",
            marginLeft: "10px",
            color: color
          }
        },
        title
      );
    };

    _this3.state = {
      numberPages: [],
      signedDoc: ""
    };
    return _this3;
  }

  createClass(RenderDocument, [{
    key: "onDocumentLoadSuccess",
    value: function onDocumentLoadSuccess(pdf) {
      var myArr = [];
      for (var i = 1; i <= pdf._pdfInfo.numPages; i++) {
        myArr.push(i);
      }
      this.setState({ numberPages: myArr });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return this.props.visible && this.state.signedDoc && React__default.createElement(
        "div",
        {
          style: {
            // display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "scroll",
            height: "622px",
            borderWidth: "2px",
            borderColor: "#000000",
            borderStyle: "solid",
            padding: "2px",
            width: "100%"
          }
        },
        React__default.createElement(
          reactPdf.Document,
          {
            file: this.state.signedDoc,
            loading: this.displayMessage("Loading PDF ...", "black"),
            error: this.displayMessage("Error Loading Document", "red"),
            onLoadSuccess: function onLoadSuccess(pdf) {
              _this4.onDocumentLoadSuccess(pdf);
            },
            onLoadError: function onLoadError() {
              return console.error, "loadError";
            }
          },
          this.state.numberPages.length > 0 && this.state.numberPages.map(function (item, index) {
            return React__default.createElement(reactPdf.Page, {
              key: index,
              pageNumber: item,
              loading: "",
              className: "pdf-view"
            });
          })
        )
      );
    }
  }]);
  return RenderDocument;
}(React.Component);

var css_248z$3 = ".ui.basic.button.dropdown{border:1px solid #85b7d9 !important}.ua-container{background:#f5f5f5;padding:30px 0px 0px 45px;\n    height:100vh !important;width:calc(100% - 400px);\n    margin-left:400px !important}\n    .ua-grid{justify-content:center}\n    .card-icon{font-size:20px !important;color:#c9c9c9;font-weight:10 !important;margin:0px !important;transition:.2s ease}\n    .card-icon:hover{color:red !important;opacity:.8;cursor:pointer}.card-container{padding-top:10px;padding-right:10px;display:inline-block;justify-content:space-around}\n    .ui.icon.input>i.icon{width:30px !important}\n    .user-card{margin:-10px;width:312px !important;height:164px !important;border-radius:2px !important;transition:.2s ease;cursor:pointer}\n    .user-card:hover{background-color:#e8f5ff !important;box-shadow:0 0 2px 2px #379BFF !important}\n    .ua.date{float:right}.ua.popup-form{height:85vh;width:355px !important;position:fixed !important;bottom:20px;right:20px;background:white;padding:80px 35px 35px !important;margin-top:20px !important;border-radius:6px;box-shadow:0 1px 20px 0 rgba(0,0,0,0.2)}\n    .ua.popup-form .popupErrorMessage{width:285px}.ua.circle{display:block;width:100px;height:50px;top:0px;left:40%;overflow:hidden;position:absolute}\n    .ua.form-image{position:absolute;left:41%;top:-39px;width:80px;box-shadow:0 1px 20px 0 rgba(0,0,0,0.2)}\n    .ua.popup-header{\n        /* margin-top:-20px !important; */\n        text-align:center;\n        font-weight:80 !important}\n    .ua.create-user-input{height:42px !important;\n        /* margin-bottom:-10px!important; */\n        /* padding-top:20px !important; */\n        \n        border:1px solid #85b7d9 !important;}\n    .ua.create-user-phonefield{border-color:#85b7d9 !important;height:44px !important}\n    .ua.create-user-dropdown{height:40px !important;margin-bottom:-5px !important;padding-top:15px !important;border:1px solid #85b7d9 !important}\n    .ua.formDropdown{padding-top:20px !important;height:62px !important}.ua.create-user-label{position:absolute !important;font-size:10px !important;left:10px;margin-top:2px;margin-bottom:2px;color:grey !important}.ua.deleteButton{font-size:12px;color:#379bff;background:transparent;border:0px}.ua.cardButton{height:15px !important;background:#379bff !important;border-radius:14px !important;border:0px !important;color:white;font-size:10px;text-align:center !important}.ua.cancel{width:177.5px;height:40px;border-radius:0px 0px 0px 4px !important}.ua.save{width:177.5px;height:40px;border-radius:0px 0px 4px 0px !important}#toggled-card{background-color:#e8f5ff;box-shadow:0 0 2px 2px #379bff !important}.ui.toggle.checkbox input:checked ~ .box:before,.ui.toggle.checkbox input:checked ~ label:before{background-color:#58d021 }.ui.toggle.checkbox input:checked ~ .box:before,.ui.toggle.checkbox input:checked ~ label:before{background-color:#58d021 }.ui.toggle.checkbox input:focus:checked ~ .box:before,.ui.toggle.checkbox input:focus:checked ~ label:before{background-color:#58d021 }.ui.checkbox{margin:5px 2px 0px 2px}.popup-pagination{position:fixed;bottom:20px;width:425px;margin-left:-35px;height:40px}.ua-add-user{position:fixed;bottom:30px;right:30px}.ui.card>.content,.ui.cards>.card>.content{padding:12px !important}.form-scroller{position:fixed;height:58vh;overflow-y:scroll;overflow-x:hidden}body ::-webkit-scrollbar{-webkit-appearance:none;width:0px !important;height:10px}.create-user-input{display:flex;flex-direction:column-reverse}\n    .create-user-input label{position:absolute !important;font-size:14px !important;font-weight:100;left:10px;\n        /* margin-top:-20px !important; */padding-bottom: 13px;\n        color:grey !important;transform-origin:top left;transform:translate(0, 16px) scale(1);transition:all 0.1s ease-in-out}.create-user-input input,.create-user-input select,.create-user-input textarea{height:42px !important;width:285px !important;margin-bottom:-5px !important;padding-top:20px !important;border:1px solid #85b7d9 !important}.create-user-input input:focus+label,.create-user-input input:valid+label,.create-user-input select:focus+label,.create-user-input select:valid+label,.create-user-input textarea:focus+label,.create-user-input textarea:valid+label{transform:translate(0, 4px) scale(0.75)}.statusText{position:absolute !important;font-size:10px !important;left:10px;margin-top:5px !important;color:grey !important}.status{margin-left:50px !important;margin-bottom:-5px !important;margin-right:15px !important}.ui.selection.visible.dropdown>.text:not(.default){color:white !important}.ui.selection.dropdown>.delete.icon,.ui.selection.dropdown>.dropdown.icon,.ui.selection.dropdown>.search.icon{margin:-10px 10px 0 0 !important}.authorizeText{font-size:10px;text-transform:uppercase}.create-user-field{width:285px !important}.privilegeList{width:419px !important}.privilegeListRow{padding-top:0px !important;padding-bottom:0px !important}.manage-users-div{position:absolute;left:350px;top:95px;display:flex;flex-direction:column;height:calc(100vh - 60px - 5vh)}.manage-users-div .manage-users-header{padding-left:15px;font-size:24px !important;font-weight:400}.manage-users-div .manage-users-content{display:flex;flex:1;overflow-y:auto;padding-left:15px}\n        .DOprefrences{\n          margin-top: 15px;\n          display: block;\n        }\n        .DObox{\n          background: rgb(255, 255, 255);\n          padding: 15px;\n        }\n        .DOcheck{\n          padding-left: 100px;\n        }\n        .DOradiogroup{\n          margin-top: 10px;\n        }\n        .DOradio{\n          padding-left: 25px;\n        }\n        .submitButton{\n          /* margin-top: 400px; */\n          margin-right: 50px;\n        }\n        .editButton{\n          margin-right: 20px;\n        }\n\n\n#scrollbarManageUsers::-webkit-scrollbar{\n  width: 10px !important;\n}\n\n#scrollbarManageUsers::-webkit-scrollbar-track{\n  margin-top:50px;\n}\n\n.manageTextscroll{\n  width:calc(100% - 330px)\n}";
styleInject(css_248z$3);

var isdOptions = [{ key: '+91', text: '+91', value: '+91' }, { key: '+1', text: '+1', value: '+1' }];

var AddTruckers = function (_Component) {
  inherits(AddTruckers, _Component);

  function AddTruckers(props) {
    classCallCheck(this, AddTruckers);

    var _this = possibleConstructorReturn(this, (AddTruckers.__proto__ || Object.getPrototypeOf(AddTruckers)).call(this, props));

    _this.onChangeHandler = function () {
      _this.setState({
        status: !_this.state.status
      });
    };

    _this.handleChange = function (name) {
      _this.setState(defineProperty({}, name, !_this.state[name]));
    };

    _this.state = {
      status: true

    };
    return _this;
  }

  createClass(AddTruckers, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          toggle = _props.toggle,
          onChange = _props.onChange,
          onChangeIsdCode = _props.onChangeIsdCode,
          stateList = _props.stateList,
          handleSubmit = _props.handleSubmit,
          errorMessage = _props.errorMessage,
          parentState = _props.parentState,
          onChangeList = _props.onChangeList;


      return React__default.createElement(
        semanticUiReact.Form,
        { className: "ua popup-form", onSubmit: handleSubmit },
        React__default.createElement(
          semanticUiReact.Header,
          { className: "", as: "h2" },
          "Add a New Trucker"
        ),
        React__default.createElement(
          "div",
          { className: "form-scroller" },
          React__default.createElement(
            semanticUiReact.Form.Field,
            { className: "create-user-input" },
            React__default.createElement("input", { id: "name", name: "name", placeholder: "Name", required: true, onChange: onChange })
          ),
          React__default.createElement(
            semanticUiReact.Form.Field,
            { className: "create-user-input" },
            React__default.createElement(semanticUiReact.Dropdown, { style: { padding: "10px" }, options: isdOptions, id: "driversLicenseState", name: "isdCode", placeholder: "ISD Codes", onChange: function onChange(e, data) {
                onChangeIsdCode("isdCode", data.value);
              } })
          ),
          React__default.createElement(
            semanticUiReact.Form.Field,
            { className: "create-user-input" },
            React__default.createElement("input", { id: "phoneNumber", name: "phoneNumber", placeholder: "Phone Number", type: "number", required: true, onChange: onChange })
          ),
          React__default.createElement(
            semanticUiReact.Form.Field,
            { className: "create-user-input" },
            React__default.createElement(semanticUiReact.Dropdown, { style: { padding: "10px" }, options: stateList, id: "driversLicenseState", name: "driversLicenseState", placeholder: "Driver's License State", onChange: function onChange(e, data) {
                onChangeList("driversLicenseState", data.value);
              } })
          ),
          React__default.createElement(
            semanticUiReact.Form.Field,
            { className: "create-user-input" },
            React__default.createElement("input", { id: "driversLicenseNumber", name: "driversLicenseNumber", placeholder: "Driver's License Number", onChange: onChange })
          ),
          errorMessage !== "" && React__default.createElement(
            "p",
            { className: "errorMessage", style: { color: "red", textAlign: "center", fontWeight: "bold" } },
            parentState.errorMessage
          )
        ),
        React__default.createElement(
          "div",
          { className: "popup-pagination" },
          React__default.createElement(
            semanticUiReact.Button.Group,
            null,
            React__default.createElement(
              semanticUiReact.Button,
              { className: "ua cancel", onClick: toggle, type: "submit" },
              "CANCEL"
            ),
            React__default.createElement(
              semanticUiReact.Button,
              { disabled: !parentState.name || !parentState.phoneNumber, className: "ua save", type: "submit" },
              "SAVE"
            )
          )
        )
      );
    }
  }]);
  return AddTruckers;
}(React.Component);

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

var UpdateTruckers = function (_Component) {
  inherits(UpdateTruckers, _Component);

  function UpdateTruckers(props) {
    classCallCheck(this, UpdateTruckers);

    var _this = possibleConstructorReturn(this, (UpdateTruckers.__proto__ || Object.getPrototypeOf(UpdateTruckers)).call(this, props));

    _this.state = {};
    return _this;
  }

  createClass(UpdateTruckers, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          toggleClose = _props.toggleClose,
          handleUpdate = _props.handleUpdate,
          onChange = _props.onChange,
          name = _props.name,
          phoneNumber = _props.phoneNumber,
          driversLicenseState = _props.driversLicenseState,
          driversLicenseNumber = _props.driversLicenseNumber,
          parentState = _props.parentState,
          stateList = _props.stateList,
          onChangeList = _props.onChangeList;

      return React__default.createElement(
        semanticUiReact.Form,
        { className: "ua popup-form", onSubmit: handleUpdate },
        React__default.createElement(
          semanticUiReact.Header,
          { className: "", as: "h2" },
          "Update a Dray Group"
        ),
        React__default.createElement(
          "div",
          { className: "form-scroller" },
          React__default.createElement(
            semanticUiReact.Form.Field,
            { className: "create-user-input" },
            React__default.createElement("input", { id: "name", name: "name", placeholder: "Name", value: name, required: true, onChange: onChange })
          ),
          React__default.createElement(
            semanticUiReact.Form.Field,
            { className: "create-user-input" },
            React__default.createElement("input", { id: "phoneNumber", name: "phoneNumber", placeholder: "Phone Number", value: phoneNumber, type: "number", required: true, onChange: onChange })
          ),
          React__default.createElement(
            semanticUiReact.Form.Field,
            { className: "create-user-input" },
            React__default.createElement(semanticUiReact.Dropdown, { style: { padding: "10px" }, options: stateList, id: "driversLicenseState", name: "driversLicenseState", placeholder: "Driver's License State", value: driversLicenseState, onChange: function onChange(e, data) {
                onChangeList("driversLicenseState", data.value);
              } })
          ),
          React__default.createElement(
            semanticUiReact.Form.Field,
            { className: "create-user-input" },
            React__default.createElement("input", { id: "driversLicenseNumber", name: "driversLicenseNumber", placeholder: "Driver's License Number", value: driversLicenseNumber, onChange: onChange })
          ),
          React__default.createElement(
            "p",
            { className: "errorMessage", style: { color: "red", textAlign: "center", fontWeight: "bold" } },
            parentState.errorMessage
          )
        ),
        React__default.createElement(
          "div",
          { className: "popup-pagination" },
          React__default.createElement(
            semanticUiReact.Button.Group,
            null,
            React__default.createElement(
              semanticUiReact.Button,
              { className: "ua cancel", onClick: toggleClose, type: "submit" },
              "CANCEL"
            ),
            React__default.createElement(
              semanticUiReact.Button,
              { disabled: !name || !phoneNumber, className: "ua save", type: "submit" },
              "SAVE"
            )
          )
        )
      );
    }
  }]);
  return UpdateTruckers;
}(React.Component);

var MyTruckers = function (_Component) {
  inherits(MyTruckers, _Component);

  function MyTruckers(props) {
    classCallCheck(this, MyTruckers);

    var _this = possibleConstructorReturn(this, (MyTruckers.__proto__ || Object.getPrototypeOf(MyTruckers)).call(this, props));

    _this.componentDidMount = function () {
      _this.setState({ listOfTruckers: _this.props.data.truckers });
      _this.fetchStateList();
    };

    _this.componentDidUpdate = function (prevProps, prevState) {
      if (prevProps.data.truckers !== _this.props.data.truckers) {
        _this.setState({ listOfTruckers: _this.props.data.truckers });
      }
    };

    _this.handleCancel = function () {
      return _this.setState({ confirmOpen: false });
    };

    _this.handleDismiss = function () {
      _this.setState({ showMsg: false });
    };

    _this.state = {
      listOfTruckers: [],
      addTruckers: false,
      updateTruckers: false,
      name: "",
      phoneNumber: "",
      isdCode: "",
      driversLicenseState: "",
      driversLicenseNumber: "",
      status: "",
      confirmOpen: false,
      // reqData: "",
      errorMessage: "",
      showMsg: false,
      message: "",
      clickedIndex: "",
      truckerGuid: "",
      stateList: {},
      openModal: false,
      msgColor: "",
      deleteData: ""
    };
    _this.onChangeList = _this.onChangeList.bind(_this);
    _this.onOpenModal = _this.onOpenModal.bind(_this);
    _this.onChangeIsdCode = _this.onChangeIsdCode.bind(_this);
    return _this;
  }

  createClass(MyTruckers, [{
    key: "resetData",


    // Resets state data
    value: function resetData() {
      this.setState({

        id: -1,
        name: "",
        phoneNumber: "",
        isdCode: "",
        licenseState: "",
        licenseNumber: "",
        emailids: ""
      });
    }
  }, {
    key: "toggleClose",
    value: function toggleClose() {
      var clickedIndex = this.state.clickedIndex;


      this.setState({
        updateTruckers: false,

        id: -1,
        name: "",
        phoneNumber: "",
        isdCode: "",
        licenseState: "",
        licenseNumber: "",
        emailids: "",
        errorMessage: "",
        driversLicenseState: "",
        driversLicenseNumber: ""
      });

      try {
        document.getElementById("toggled-card").id = "untoggled-card" + clickedIndex;
      } catch (err) {
        console.log("caught: ", err);
      }
    }
  }, {
    key: "blankToggle",
    value: function blankToggle() {
      var addTruckers = this.state.addTruckers;

      this.resetData();
      this.setState({ addTruckers: !addTruckers });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState(defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "onChangeIsdCode",
    value: function onChangeIsdCode(e, value) {
      this.setState({ isdCode: value });
    }
  }, {
    key: "onChangeList",
    value: function onChangeList(e, value) {
      this.setState({ driversLicenseState: value });
    }
  }, {
    key: "fetchStateList",
    value: function fetchStateList() {
      var _this2 = this;

      getStateList().then(function (response) {
        var list = response.data.eventMessage.itemList.map(function (item, index) {
          return {
            key: item.id,
            text: item.description,
            value: item.id
          };
        });
        _this2.setState({ stateList: list });
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e, type) {
      var _this3 = this;

      var _state = this.state,
          name = _state.name,
          phoneNumber = _state.phoneNumber,
          isdCode = _state.isdCode,
          driversLicenseState = _state.driversLicenseState,
          driversLicenseNumber = _state.driversLicenseNumber,
          status = _state.status;
      var data = this.props.data;

      if (phoneNumber.length == "10") {
        editDrayagePartnerTruckers(data.companyProfile.userGuid, name, phoneNumber, isdCode, driversLicenseState, driversLicenseNumber, status).then(function (response) {
          if (response.data.eventMessage.code === 400) {
            var error = response.data.eventMessage.msg;
            _this3.setState({ errorMessage: error });
          } else {
            _this3.setState({ addTruckers: false, errorMessage: "", showMsg: true, message: "Trucker is Added Successfully", msgColor: "green" }, function () {
              _this3.toggleClose();
              _this3.props.fetchDrayagePartnerData();
            });
            setTimeout(function () {
              _this3.setState({ showMsg: false });
            }, 3000);
          }
        });
      } else {
        this.setState({ errorMessage: "Trucker's phone number should be 10 digit" });
        setTimeout(function () {
          _this3.setState({ errorMessage: "" });
        }, 3000);
      }
    }
  }, {
    key: "onDelete",
    value: function onDelete(data) {

      var finalArr = [{
        user: {
          userGuid: data.user.userGuid,
          phoneNumber: data.user.phoneNo,
          isdCode: data.user.isdCode,
          contactName: data.user.contactName
        },
        operationType: "TRUCKER_DELETE",
        licenseInfo: {
          licenseState: data.licenseInfo.licenseState,
          licenseNumber: data.licenseInfo.licenseNumber
        }
      }];

      this.handleUpdate(finalArr, "Trucker is Deleted Successfully");
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      var _state2 = this.state,
          name = _state2.name,
          phoneNumber = _state2.phoneNumber,
          isdCode = _state2.isdCode,
          driversLicenseState = _state2.driversLicenseState,
          driversLicenseNumber = _state2.driversLicenseNumber,
          status = _state2.status,
          truckerGuid = _state2.truckerGuid;


      var finalArr = [{
        user: {
          userGuid: truckerGuid,
          phoneNumber: phoneNumber,
          isdCode: isdCode,
          contactName: name
        },
        operationType: "TRUCKER_UPDATE",
        licenseInfo: {
          licenseState: driversLicenseState,
          licenseNumber: driversLicenseNumber
        }
      }];
      if (phoneNumber.length == "10") {
        this.handleUpdate(finalArr, "Trucker is Updated Successfully");
      } else {
        this.setState({ errorMessage: "Trucker's phone number is not correct" });
      }
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate(finalArr, msg) {
      var _this4 = this;

      var data = this.props.data;

      updateDrayagePartnerTruckers(data.companyProfile.userGuid, finalArr).then(function (response) {
        if (response.Code === 400) {
          var error = [{ key: response.code, err: response.msg }];
          _this4.setState({ errorMessage: error });
        } else {
          _this4.setState({ addTruckers: false, errorMessage: "", showMsg: true, message: msg, msgColor: "green", openModal: false }, function () {
            _this4.toggleClose();
            _this4.props.fetchDrayagePartnerData();
          });
          setTimeout(function () {
            _this4.setState({ showMsg: false });
          }, 3000);
        }
      });
    }
  }, {
    key: "setData",
    value: function setData(data, index) {
      this.setState({
        clickedIndex: index,
        errorMessage: "",

        id: -1,
        name: data.user.contactName,
        phoneNumber: data.user.phoneNo,
        isdCode: data.user.isdCode,
        driversLicenseState: data.licenseInfo.licenseState,
        driversLicenseNumber: data.licenseInfo.licenseNumber
      }, function () {});
    }
  }, {
    key: "togglePopup",
    value: function togglePopup(e, data, index) {
      this.setState({ truckerGuid: data.user.userGuid });
      var _state3 = this.state,
          updateTruckers = _state3.updateTruckers,
          clickedIndex = _state3.clickedIndex;

      if (!updateTruckers) {
        try {
          document.getElementById("untoggled-card" + index).id = "toggled-card";
          this.setData(data, index);
          this.setState({ updateTruckers: true, createUser: false });
        } catch (err) {
          console.log("caught: ", err);
        }
      } else if (updateTruckers) {
        if (clickedIndex === index) {
          try {
            document.getElementById("toggled-card").id = "untoggled-card" + clickedIndex;
            this.resetData();
            this.setState({ updateTruckers: false, clickedIndex: index });
          } catch (err) {
            console.log("caught: ", err);
          }
        }
        if (clickedIndex !== index) {
          try {
            document.getElementById("toggled-card").id = "untoggled-card" + clickedIndex;
            this.setData(data, index);
            this.setState({ updateTruckers: true });
            document.getElementById("untoggled-card" + index).id = "toggled-card";
          } catch (err) {
            console.log("caught: ", err);
          }
        }
      }
    }
  }, {
    key: "onOpenModal",
    value: function onOpenModal(value, data) {
      this.setState({ openModal: value, deleteData: data });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _state4 = this.state,
          listOfTruckers = _state4.listOfTruckers,
          addTruckers = _state4.addTruckers,
          updateTruckers = _state4.updateTruckers,
          errorMessage = _state4.errorMessage,
          name = _state4.name,
          phoneNumber = _state4.phoneNumber,
          driversLicenseState = _state4.driversLicenseState,
          driversLicenseNumber = _state4.driversLicenseNumber,
          stateList = _state4.stateList,
          showMsg = _state4.showMsg;


      return React__default.createElement(
        "div",
        { className: "drayage-cp-container delivery-order-page", style: { overflow: "scroll" } },
        React__default.createElement(
          "div",
          { className: "my-customers-header" },
          React__default.createElement(
            "div",
            { className: "header-children" },
            React__default.createElement(
              "h3",
              { className: "my-customers-title" },
              "List of Truckers"
            ),
            React__default.createElement(
              "div",
              { className: "my-customers-top" },
              React__default.createElement(
                "a",
                { className: "filter-tab",
                  onClick: function onClick() {
                    return _this5.blankToggle();
                  }, styles: { "cursor": "pointer" }
                },
                React__default.createElement("img", { src: "/images/add-document.svg", className: "add_icon" }),
                React__default.createElement(
                  "span",
                  { className: "filter-title" },
                  "ADD TRUCKERS"
                )
              )
            )
          ),
          React__default.createElement(
            "div",
            { style: { marginLeft: "500px" } },
            showMsg === true && React__default.createElement(semanticUiReact.Message, {
              onDismiss: this.handleDismiss,
              header: "",
              content: this.state.message,
              color: this.state.msgColor,
              className: "update_popup"
            })
          ),
          React__default.createElement(
            "div",
            { className: "mycustomers-table my-customers-container narrow-table mt0" },
            React__default.createElement(
              "table",
              { style: { width: "100%" }, className: "" },
              React__default.createElement(
                "div",
                { className: "mb-header actor-list" },
                React__default.createElement(
                  "div",
                  { className: "mb-title mb-name" },
                  "NAME"
                ),
                React__default.createElement(
                  "div",
                  { className: "mb-title mb-phonenumber" },
                  "PHONE NUMBER"
                ),
                React__default.createElement(
                  "div",
                  { className: "mb-title mb-licensestate" },
                  "DRIVER'S LICENSE STATE"
                ),
                React__default.createElement(
                  "div",
                  { className: "mb-title mb-licensenumber" },
                  "DRIVER'S LICENSE NUMBER"
                )
              ),
              listOfTruckers && listOfTruckers.length > 0 && listOfTruckers.map(function (data, index) {
                return React__default.createElement(
                  React__default.Fragment,
                  null,
                  React__default.createElement(
                    "div",
                    { className: "mb-row", id: "untoggled-card" + index },
                    React__default.createElement(
                      "div",
                      { className: "mb-item mb-name", style: { marginLeft: "25px" }, onClick: function onClick(e) {
                          return _this5.togglePopup(e, data, index);
                        } },
                      data.user.contactName
                    ),
                    React__default.createElement(
                      "div",
                      { className: "mb-item mb-phonenumber", onClick: function onClick(e) {
                          return _this5.togglePopup(e, data, index);
                        } },
                      data.user.phoneNo
                    ),
                    React__default.createElement(
                      "div",
                      { className: "mb-item mb-licensestate", onClick: function onClick(e) {
                          return _this5.togglePopup(e, data, index);
                        } },
                      data.licenseInfo.licenseState
                    ),
                    React__default.createElement(
                      "div",
                      { className: "mb-item mb-licensenumber", onClick: function onClick(e) {
                          return _this5.togglePopup(e, data, index);
                        } },
                      data.licenseInfo.licenseNumber
                    ),
                    React__default.createElement(
                      "div",
                      { className: "mb-item mb-remove" },
                      React__default.createElement(
                        "button",
                        { onClick: function onClick() {
                            return _this5.onOpenModal(true, data);
                          }, className: "mb-button" },
                        " REMOVE "
                      )
                    )
                  ),
                  React__default.createElement("div", { className: "divider" })
                );
              }),
              React__default.createElement(
                semanticUiReact.Modal,
                {
                  size: "tiny",
                  onClose: function onClose() {
                    return _this5.onOpenModal(false);
                  },
                  open: this.state.openModal
                },
                React__default.createElement(
                  semanticUiReact.Modal.Header,
                  null,
                  "Delete Trucker"
                ),
                React__default.createElement(
                  semanticUiReact.Modal.Content,
                  { style: { width: "100%" } },
                  React__default.createElement(
                    "p",
                    null,
                    "Are you sure you want to delete this Trucker?"
                  )
                ),
                React__default.createElement(
                  semanticUiReact.Modal.Actions,
                  null,
                  React__default.createElement(
                    semanticUiReact.Button,
                    { className: "mb-button", onClick: function onClick() {
                        return _this5.setState({ openModal: false });
                      } },
                    "No"
                  ),
                  React__default.createElement(
                    semanticUiReact.Button,
                    { className: "mb-button", onClick: function onClick(e) {
                        return _this5.onDelete(_this5.state.deleteData);
                      } },
                    "Yes"
                  )
                )
              )
            )
          ),
          React__default.createElement(
            "div",
            { className: "manage-users-content" },
            React__default.createElement("br", null),
            React__default.createElement("br", null),
            " ",
            React__default.createElement("br", null),
            " ",
            React__default.createElement("br", null),
            " ",
            React__default.createElement("br", null),
            addTruckers && React__default.createElement(AddTruckers, {
              errorMessage: errorMessage,
              toggle: function toggle() {
                return _this5.blankToggle();
              },
              onChange: function onChange(e) {
                return _this5.onChange(e);
              },
              stateList: stateList,
              handleSubmit: function handleSubmit(e) {
                return _this5.handleSubmit(e, "add");
              },
              parentState: this.state,
              onChangeList: this.onChangeList,
              onChangeIsdCode: this.onChangeIsdCode
            }),
            updateTruckers && React__default.createElement(UpdateTruckers, {
              toggleClose: function toggleClose() {
                return _this5.toggleClose();
              },
              onChange: function onChange(e) {
                return _this5.onChange(e);
              },
              handleUpdate: function handleUpdate(e) {
                return _this5.onUpdate(e, "update");
              },
              errorMessage: errorMessage
              // isWhiteLabel={isWhiteLabel}
              // wlCustomerName={wlCustomerName}
              , stateList: stateList,
              onChangeList: this.onChangeList,
              onChangeIsdCode: this.onChangeIsdCode,
              name: name,
              phoneNumber: phoneNumber,
              driversLicenseState: driversLicenseState,
              driversLicenseNumber: driversLicenseNumber,
              parentState: this.state

            })
          )
        )
      );
    }
  }]);
  return MyTruckers;
}(React.Component);

var HamburgerMenu = function (_Component) {
  inherits(HamburgerMenu, _Component);

  function HamburgerMenu(props) {
    classCallCheck(this, HamburgerMenu);

    var _this = possibleConstructorReturn(this, (HamburgerMenu.__proto__ || Object.getPrototypeOf(HamburgerMenu)).call(this, props));

    _this.getTokenName = function () {
      console.trace("APP NAME :: getTokenName", window._env_.APP_NAME);
      switch (window._env_.APP_NAME) {
        case "Partner":
          return "kxPartnerToken";
        case "Customer":
          return "kxCustomerToken";
        case "Sales":
          return "kxSalesToken";
      }
      return "kxCustomerToken";
    };

    _this.Logout = function () {
      var domain = window.location.hostname;
      document.cookie = _this.getTokenName() + '=;domain=' + domain + ';path=/';
      var dt = new Date();
      dt.setTime(dt.getTime() - 24 * 60 * 60 * 1000);
      document.cookie = _this.getTokenName() + '=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      window.location = "/";
      return true;
    };

    _this.componentDidMount = function () {
      _this.fetchCustomerData();
    };

    _this.fetchCustomerData = function () {
      _this.setState({ loading: true });
      userApi.getCustomerData().then(function (res) {
        _this.setState({
          contactName: _.get(res.data.eventMessage, "userBasicInfo.contactName", ""),
          email: _.get(res.data.eventMessage, "userBasicInfo.email", ""),
          phoneType: _.get(res.data.eventMessage, "phone[0].typeOfPhone", ""),
          phone: _.get(res.data.eventMessage, "phone[0].phoneNo", ""),
          isdCode: _.get(res.data.eventMessage, "phone[0].isdCode", ""),
          partnerId: _.get(res.data.eventMessage, "userInfo.partnerId", ""),
          loading: false
        });
        _this.validate();
      });
    };

    _this.validate = function () {
      if (_this.state.loading === false) {
        _this.fetchDrayagePartnerData();
        _this.setState({ modalOpen: modals.myPersonalProfile });
      }
    };

    _this.fetchDrayagePartnerData = function () {
      _this.setState({ loading: true });
      getDrayagePartnersDetails(_this.state.partnerId).then(function (response) {
        _this.setState({ data: response.data.eventMessage, loading: false });
      }).catch(function (err) {
        console.log(err);
      });
    };

    _this.state = {
      modalOpen: "",
      email: "",
      contactName: "",
      companyName: "",
      phoneType: "",
      phone: "",
      isdCode: "",
      partnerId: "",
      data: {},
      loading: true
    };
    return _this;
  }

  createClass(HamburgerMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var invisible = { display: "none" };
      var _state = this.state,
          modalOpen = _state.modalOpen,
          email = _state.email,
          contactName = _state.contactName,
          phoneType = _state.phoneType,
          phone = _state.phone,
          isdCode = _state.isdCode,
          data = _state.data;

      var menuItemClass = "menu-item";
      return React__default.createElement(
        'div',
        { className: 'drayage_container' },
        React__default.createElement(
          'div',
          { className: 'hamburger_menu' },
          React__default.createElement(
            'div',
            { className: 'hamburger_menu_top' },
            React__default.createElement(
              'p',
              { className: 'account-menu-logout', onClick: this.Logout },
              'LOGOUT'
            ),
            React__default.createElement(
              'div',
              { className: 'profile-pic-div' },
              React__default.createElement(
                'div',
                null,
                React__default.createElement(
                  'p',
                  { style: { fontSize: '50px', top: '50%', position: 'relative', transform: 'translateY(-50%)', maxWidth: '100px', overflow: 'hidden' } },
                  getInitials(contactName)
                )
              )
            ),
            React__default.createElement(
              'p',
              { className: 'username' },
              contactName
            ),
            React__default.createElement(
              'p',
              { className: 'useremail' },
              email
            )
          ),
          this.state.loading === true ? React__default.createElement(semanticUiReact.Loader, { active: true, inline: "centered", size: "medium" }) : React__default.createElement(
            'div',
            { className: 'hamburger_menu_menu' },
            React__default.createElement(
              'h3',
              null,
              'Profile'
            ),
            React__default.createElement(
              'div',
              { className: 'menu-item-group' },
              React__default.createElement('div', { style: modalOpen !== modals.myPersonalProfile ? invisible : null, className: 'menu-item-active' }),
              React__default.createElement(
                semanticUiReact.Menu.Item,
                { onClick: function onClick() {
                    return _this2.setState({ modalOpen: modals.myPersonalProfile });
                  }, className: menuItemClass, name: 'myaccount', active: modalOpen === modals.myPersonalProfile },
                'My Profile'
              )
            ),
            React__default.createElement(
              'div',
              { className: 'menu-item-group' },
              React__default.createElement('div', { style: modalOpen !== modals.drayageCompanyProfile ? invisible : null, className: 'menu-item-active' }),
              React__default.createElement(
                semanticUiReact.Menu.Item,
                { onClick: function onClick() {
                    return _this2.setState({ modalOpen: modals.drayageCompanyProfile });
                  }, className: menuItemClass, name: 'myaccount', active: modalOpen === modals.drayageCompanyProfile },
                'Company Profile'
              )
            ),
            React__default.createElement(
              'div',
              { className: 'menu-item-group' },
              React__default.createElement('div', { style: modalOpen !== modals.serviceArea ? invisible : null, className: 'menu-item-active' }),
              React__default.createElement(
                semanticUiReact.Menu.Item,
                { onClick: function onClick() {
                    return _this2.setState({ modalOpen: modals.serviceArea });
                  }, className: menuItemClass, name: 'myaccount', active: modalOpen === modals.serviceArea },
                'My Service Area'
              )
            ),
            React__default.createElement(
              'div',
              { className: 'menu-item-group' },
              React__default.createElement('div', { style: modalOpen !== modals.docs ? invisible : null, className: 'menu-item-active' }),
              React__default.createElement(
                semanticUiReact.Menu.Item,
                { onClick: function onClick() {
                    return _this2.setState({ modalOpen: modals.docs });
                  }, className: menuItemClass, name: 'myaccount', active: modalOpen === modals.docs },
                'Documents'
              )
            ),
            React__default.createElement(
              'div',
              { className: 'menu-item-group' },
              React__default.createElement('div', { style: modalOpen !== modals.mytruckers ? invisible : null, className: 'menu-item-active' }),
              React__default.createElement(
                semanticUiReact.Menu.Item,
                { onClick: function onClick() {
                    return _this2.setState({ modalOpen: modals.mytruckers });
                  }, className: menuItemClass, name: 'myaccount', active: modalOpen === modals.mytruckers },
                'My Truckers'
              )
            ),
            React__default.createElement(
              'h3',
              null,
              'Payment and Statements'
            ),
            React__default.createElement(
              'div',
              { className: 'menu-item-group' },
              React__default.createElement('div', { style: modalOpen !== modals.accessorialCharges ? invisible : null, className: 'menu-item-active' }),
              React__default.createElement(
                semanticUiReact.Menu.Item,
                { onClick: function onClick() {
                    return _this2.setState({ modalOpen: modals.accessorialCharges });
                  }, className: menuItemClass, name: 'myaccount', active: modalOpen === modals.accessorialCharges },
                'Accessorial charges'
              )
            )
          )
        ),
        React__default.createElement(
          'div',
          { className: 'container_modal' },
          modalOpen === modals.myPersonalProfile && React__default.createElement(MyPersonalProfile, {
            toggleModal: function toggleModal() {
              return _this2.setState({ modalOpen: "" });
            },
            contactName: contactName,
            email: email,
            phoneType: phoneType,
            phone: phone,
            isdCode: isdCode,
            fetchCustomerData: this.fetchCustomerData
          }),
          modalOpen === modals.drayageCompanyProfile && React__default.createElement(DrayageCompanyProfile, {
            toggleModal: function toggleModal() {
              return _this2.setState({ modalOpen: "" });
            },
            data: data,
            fetchDrayagePartnerData: this.fetchDrayagePartnerData
          }),
          modalOpen === modals.serviceArea && React__default.createElement(ServiceArea, {
            toggleModal: function toggleModal() {
              return _this2.setState({ modalOpen: "" });
            },
            data: data,
            fetchDrayagePartnerData: this.fetchDrayagePartnerData
          }),
          modalOpen === modals.docs && React__default.createElement(Legal, {
            toggleModal: function toggleModal() {
              return _this2.setState({ modalOpen: "" });
            },
            data: data,
            fetchDrayagePartnerData: this.fetchDrayagePartnerData
          }),
          modalOpen === modals.mytruckers && React__default.createElement(MyTruckers, {
            toggleModal: function toggleModal() {
              return _this2.setState({ modalOpen: "" });
            },
            data: data,
            fetchDrayagePartnerData: this.fetchDrayagePartnerData
          }),
          modalOpen === modals.accessorialCharges && React__default.createElement(Pricing, {
            toggleModal: function toggleModal() {
              return _this2.setState({ modalOpen: "" });
            },
            data: data,
            fetchDrayagePartnerData: this.fetchDrayagePartnerData
          })
        )
      );
    }
  }]);
  return HamburgerMenu;
}(React.Component);

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

unregister();

exports.HamburgerMenu = HamburgerMenu;
exports.APPLICATION_CLICKED = APPLICATION_CLICKED;
exports.OPPORTUNITY_ARROW_CLICKED = OPPORTUNITY_ARROW_CLICKED;
exports.OPPORTUNITY_BID_CLICKED = OPPORTUNITY_BID_CLICKED;
exports.ADDITONAL_CHARGE_DONE_CLICKED = ADDITONAL_CHARGE_DONE_CLICKED;
exports.ADDITONAL_CHARGE_CANCEL_CLICKED = ADDITONAL_CHARGE_CANCEL_CLICKED;
exports.OPPORTUNITY_BID_MODAL_BID_CLICKED = OPPORTUNITY_BID_MODAL_BID_CLICKED;
exports.OPPORTUNITY_BID_MODAL_PORT_ADDITIONAL_CHARGE_CLICKED = OPPORTUNITY_BID_MODAL_PORT_ADDITIONAL_CHARGE_CLICKED;
exports.OPPORTUNITY_BID_MODAL_SUBMIT_CLICKED = OPPORTUNITY_BID_MODAL_SUBMIT_CLICKED;
exports.OPPORTUNITY_BID_MODAL_CANCEL_CLICKED = OPPORTUNITY_BID_MODAL_CANCEL_CLICKED;
exports.LANE_BID_DONE_CLICKED = LANE_BID_DONE_CLICKED;
exports.LANE_BID_CANCEL_CLICKED = LANE_BID_CANCEL_CLICKED;
exports.LANE_BID_ADDITIONAL_CHARGE_CLICKED = LANE_BID_ADDITIONAL_CHARGE_CLICKED;
exports.PARTNER_STANDARD_ADDITIONAL_CHARGES = PARTNER_STANDARD_ADDITIONAL_CHARGES;
exports.API_GET_OPPORTINITY_LIST = API_GET_OPPORTINITY_LIST;
exports.API_GET_OPPORTINITY_DETAILS = API_GET_OPPORTINITY_DETAILS;
exports.SET_OPPORTUNITY_BID_DATA = SET_OPPORTUNITY_BID_DATA;
exports.LANE_BID_SELECT_CLICKED = LANE_BID_SELECT_CLICKED;
//# sourceMappingURL=index.js.map
