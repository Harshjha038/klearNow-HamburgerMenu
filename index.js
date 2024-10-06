var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import "./styles.scss";
import { Icon } from 'semantic-ui-react';

var Accordian = function (_React$Component) {
    _inherits(Accordian, _React$Component);

    function Accordian(props) {
        _classCallCheck(this, Accordian);

        var _this = _possibleConstructorReturn(this, (Accordian.__proto__ || Object.getPrototypeOf(Accordian)).call(this, props));

        _this.state = {
            accordianState: props.accordianState
        };
        return _this;
    }

    // makeArray = (index) => {
    //     let {accordianState} = this.state;
    //     accordianState[index] = !accordianState[index];
    //     return (accordianState);
    // }

    _createClass(Accordian, [{
        key: 'onClick',
        value: function onClick() {
            var shipmentCount = this.props.shipmentCount;

            if (!shipmentCount) return;
            var _props = this.props,
                index = _props.index,
                toggleAccordian = _props.toggleAccordian,
                accordianState = _props.accordianState;

            this.setState({ accordianState: !accordianState });
            toggleAccordian(index);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                accordianBody = _props2.accordianBody,
                accordianHeader = _props2.accordianHeader,
                accordianTitle = _props2.accordianTitle,
                loading = _props2.loading,
                noPorts = _props2.noPorts,
                shipmentCount = _props2.shipmentCount,
                _props2$additionalBod = _props2.additionalBodyClass,
                additionalBodyClass = _props2$additionalBod === undefined ? '' : _props2$additionalBod;
            var accordianState = this.state.accordianState;

            return React.createElement(
                'div',
                { className: 'drayage_accordian_item' },
                React.createElement(
                    'div',
                    { 'data-shipmentCount': shipmentCount ? shipmentCount : 0, className: "accordian_item_header" + (accordianState ? " expanded" : " collapsed"), onClick: function onClick() {
                            return _this2.onClick();
                        } },
                    shipmentCount && !loading && accordianState && React.createElement(Icon, { name: 'minus square outline' }),
                    (!shipmentCount || !loading && !accordianState) && React.createElement(Icon, { name: 'plus square outline' }),
                    shipmentCount && loading && React.createElement('img', { src: '/images/loader.gif', style: { width: "20px", "marginRight": "6px" } }),
                    React.createElement(
                        'div',
                        { className: 'accordian_item_title' },
                        accordianTitle,
                        !shipmentCount && React.createElement(
                            'span',
                            { className: 'error_msg' },
                            React.createElement(Icon, { name: 'warning sign' }),
                            ' No current shipments'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'accordian_item_heading_wrapper' },
                        accordianHeader
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'drayage_accordian_body ' + additionalBodyClass },
                    this.props.accordianBody
                )
            );
        }
    }]);

    return Accordian;
}(React.Component);

export default Accordian;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import "./styles.scss";

var BlockHeader = function (_React$Component) {
    _inherits(BlockHeader, _React$Component);

    function BlockHeader(props) {
        _classCallCheck(this, BlockHeader);

        var _this = _possibleConstructorReturn(this, (BlockHeader.__proto__ || Object.getPrototypeOf(BlockHeader)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(BlockHeader, [{
        key: "render",
        value: function render() {
            var data = this.props.data;


            return React.createElement(
                "div",
                { className: "flexUniformDisplay blockHeaderMargin" },
                data.map(function (item) {
                    return item.value && React.createElement(
                        "div",
                        { className: "accordian_item_heading" },
                        React.createElement(
                            "div",
                            { className: "heading_label" },
                            item.label,
                            ":"
                        ),
                        React.createElement(
                            "div",
                            { className: "heading_value" },
                            item.value
                        )
                    );
                })
            );
        }
    }]);

    return BlockHeader;
}(React.Component);

;

export default BlockHeader;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from 'react';
import DatePicker from "react-datepicker";
import { isEmpty, isUndefined } from 'lodash-es';
import "react-datepicker/dist/react-datepicker.css";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { modalIcon } from '../../images';
import moment from 'moment';
import 'moment-timezone';
import "./styles.scss";

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.findUtcOffset = function (timezone) {
      var s = timezone.substr(3); // Get rid of UTC, s= "+05:00"
      var sign = s[0]; // "+""
      var x = s.substr(1, 2) * 60 + parseInt(s.substr(4, 5));
      return sign + x;
    };

    _this.timeZoneConverter = function (value, source) {
      var entityTimezone = _this.props.entityTimezone;

      var time = new Date(value).getTime();
      // console.log({ value, source, entityTimezone, time});

      if (!isEmpty(entityTimezone)) {
        // let utcOffset = Number(this.findUtcOffset(entityTimezone))
        // let now = new Date(value);
        // let localOffset =  -now.getTimezoneOffset();  

        // let hoursDiff = +(localOffset) - (utcOffset)
        // let currentTzMiliSec = now.getTime() +  hoursDiff*60*1000;


        var localTime = moment(value);
        // console.log({ localTime, entityTimezone });
        var timeZoneTime = moment(value).tz(entityTimezone);
        var modifiedDate = moment(value);

        modifiedDate.subtract(-localTime.utcOffset() + timeZoneTime.utcOffset(), 'minutes');

        if (source === 'OPS') {
          _this.setState({ opsTime: value, currentDate: time });
        } else {
          _this.setState({ demurrageTime: value, currentDate2: time });
        }
      } else {
        // console.log('addadasd', value.getTime());
        if (source === 'OPS') {
          _this.setState({ opsTime: time, currentDate: time });
        } else {
          _this.setState({ currentDate2: time });
        }
      }
    };

    _this.timeZoneReverse = function (value) {
      if (!isEmpty(value) && !isUndefined(value)) {
        var entityTimezone = _this.props.entityTimezone;

        if (!isEmpty(entityTimezone)) {
          var parsedTime = parseInt(value);

          // UTC logic to convert time zone
          // let utcOffset = Number(this.findUtcOffset(entityTimezone))
          // let localOffset =  - new Date().getTimezoneOffset();
          // let hoursDiff = +(localOffset) - (utcOffset)
          // let currentTzMiliSec = value -  hoursDiff*60*1000;

          // string time zone logic 
          var localTime = moment(parsedTime);
          var timeZoneTime = moment(parsedTime).tz(entityTimezone);
          var modifiedDate = moment(parsedTime);
          modifiedDate.subtract(localTime.utcOffset() - timeZoneTime.utcOffset(), 'minutes');
          return modifiedDate.valueOf();
        }
      }
    };

    _this.renderSystemTimePicker = function (_ref) {
      var enableModel = _ref.enableModel,
          showSystemTimeFunc = _ref.showSystemTimeFunc;
      return React.createElement(
        'div',
        { className: 'system-time-picker ' + (enableModel ? '' : 'is-disable') },
        React.createElement(
          'span',
          { className: 'select-system-time', onClick: showSystemTimeFunc },
          React.createElement('img', { src: modalIcon, alt: 'modal icon' })
        )
      );
    };

    var _props$selectedDate = props.selectedDate,
        selectedDate = _props$selectedDate === undefined ? null : _props$selectedDate,
        _props$selectedDate2 = props.selectedDate2,
        selectedDate2 = _props$selectedDate2 === undefined ? null : _props$selectedDate2;

    _this.state = {
      opsTime: selectedDate,
      demurrageTime: selectedDate2,
      currentDate: null,
      currentDate2: null
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          selectedDate = _props.selectedDate,
          selectedDate2 = _props.selectedDate2,
          triggerApiCall = _props.triggerApiCall,
          eventName = _props.eventName,
          calendarIdentifire = _props.calendarIdentifire,
          OPSTime = _props.OPSTime,
          OPSTime2 = _props.OPSTime2,
          eModalTime = _props.eModalTime,
          tModalTime = _props.tModalTime,
          entityId = _props.entityId,
          _props$entityTimezone = _props.entityTimezone,
          entityTimezone = _props$entityTimezone === undefined ? "" : _props$entityTimezone,
          entityType = _props.entityType,
          showSystemTimeFunc = _props.showSystemTimeFunc,
          _state = this.state,
          opsTime = _state.opsTime,
          currentDate = _state.currentDate,
          currentDate2 = _state.currentDate2;


      var enableModel = !isEmpty(OPSTime) || !isEmpty(eModalTime) || !isEmpty(tModalTime);
      var incomingDate = !isEmpty(entityTimezone) ? this.timeZoneReverse(selectedDate) : parseInt(selectedDate);
      var incomingDate2 = !isEmpty(entityTimezone) ? this.timeZoneReverse(selectedDate2) : parseInt(selectedDate2);

      var opsSelectedTime = currentDate || incomingDate;
      var demurrageSelectedTime = currentDate2 || incomingDate2;

      return React.createElement(
        Fragment,
        null,
        calendarIdentifire === 'readyForPickup' || calendarIdentifire === 'gateOut' ? React.createElement(
          'div',
          { className: 'popup-calendor' },
          React.createElement(
            'div',
            { className: 'conta-1' },
            React.createElement(
              'div',
              { className: 'row-1 flexDisplay' },
              React.createElement(
                'div',
                { className: 'popup-date-picker' },
                React.createElement(
                  'p',
                  null,
                  'Ops time'
                ),
                React.createElement(DatePicker, {
                  title: 'Select time',
                  placeholderText: 'Select time',
                  id: "vessel-departure-date",
                  name: 'etd',
                  selected: opsSelectedTime,
                  onChange: function onChange(value) {
                    _this2.timeZoneConverter(value, 'OPS');
                  },
                  showTimeSelect: true,
                  timeFormat: 'hh:mm a',
                  timeIntervals: 15,
                  timeCaption: 'time',
                  dateCaption: 'Select time',
                  dateFormat: 'MMMM d, yyyy h:mm aa'
                  //disabled={isfDisabled}
                  , peekNextMonth: true,
                  showMonthDropdown: true,
                  showYearDropdown: true,
                  dropdownMode: "select",
                  popperPlacement: 'bottom-end',
                  popperProps: {
                    positionFixed: true // prevents the popper from hiding behind overflow parent
                  },
                  popperModifiers: {
                    flip: {
                      behavior: ["bottom"] // don't allow it to flip to be above
                    },
                    preventOverflow: {
                      enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                    },
                    hide: {
                      enabled: false // turn off since needs preventOverflow to be enabled
                    }
                  }
                })
              ),
              React.createElement(
                'div',
                { className: 'topSpace flexDisplay' },
                React.createElement(
                  'div',
                  { className: 'button-container' },
                  React.createElement(
                    'button',
                    {
                      className: 'ui primary button',
                      onClick: function onClick(e) {
                        if (opsSelectedTime && demurrageSelectedTime) {
                          triggerApiCall(e, {
                            entityId: entityId,
                            eventName: eventName,
                            entityType: entityType,
                            eventCode: '',
                            eventDescription: '',
                            sourceSelected: 'OPS',
                            selectedTime: opsSelectedTime,
                            selectedTime2: demurrageSelectedTime
                          });
                        }
                      }
                    },
                    'Y'
                  )
                ),
                this.renderSystemTimePicker({ enableModel: enableModel, showSystemTimeFunc: showSystemTimeFunc })
              )
            ),
            React.createElement(
              'div',
              { className: 'row-2 flexDisplay' },
              React.createElement(
                'div',
                { className: 'popup-date-picker' },
                React.createElement(
                  'p',
                  null,
                  calendarIdentifire === 'readyForPickup' ? "Demurrage time" : "Per Diem time"
                ),
                React.createElement(DatePicker, {
                  title: 'Select time',
                  placeholderText: 'Select time',
                  id: "vessel-departure-date2",
                  name: 'etd',
                  selected: demurrageSelectedTime,
                  onChange: function onChange(value) {
                    _this2.timeZoneConverter(value, 'DEM');
                  },
                  showTimeSelect: true,
                  timeFormat: 'hh:mm a',
                  timeIntervals: 15,
                  timeCaption: 'time',
                  dateCaption: 'Select time',
                  dateFormat: 'MMMM d, yyyy h:mm aa'
                  //disabled={isfDisabled}
                  , peekNextMonth: true,
                  showMonthDropdown: true,
                  showYearDropdown: true,
                  dropdownMode: "select",
                  popperPlacement: 'bottom-end',
                  popperProps: {
                    positionFixed: true // prevents the popper from hiding behind overflow parent
                  }
                })
              ),
              React.createElement(
                'div',
                { className: 'topSpace flexDisplay' },
                React.createElement(
                  'div',
                  { className: 'button-container' },
                  React.createElement(
                    'button',
                    {
                      className: 'ui primary button',
                      onClick: function onClick(e) {
                        if (opsSelectedTime && demurrageSelectedTime) {
                          triggerApiCall(e, {
                            entityId: entityId,
                            eventName: eventName,
                            entityType: entityType,
                            eventCode: '',
                            eventDescription: '',
                            sourceSelected: 'OPS',
                            selectedTime: opsSelectedTime,
                            selectedTime2: demurrageSelectedTime
                          });
                        }
                      }
                    },
                    'Y'
                  )
                ),
                this.renderSystemTimePicker({ enableModel: enableModel, showSystemTimeFunc: showSystemTimeFunc })
              )
            )
          )
        ) : React.createElement(
          'div',
          { className: 'popup-calendor' },
          React.createElement(
            'div',
            { className: 'popup-date-picker' },
            React.createElement(
              'p',
              null,
              'Ops time'
            ),
            React.createElement(DatePicker, {
              title: 'Select time',
              placeholderText: 'Select time',
              id: "vessel-departure-date",
              name: 'etd',
              selected: opsSelectedTime,
              onChange: function onChange(value) {
                return _this2.timeZoneConverter(value, 'OPS');
              },
              showTimeSelect: 'true',
              timeFormat: 'hh:mm a',
              timeIntervals: 15,
              timeCaption: 'time',
              dateCaption: 'Select time',
              dateFormat: 'MMM d, yyyy h:mm aa'
              //disabled={isfDisabled}
              , peekNextMonth: true,
              showMonthDropdown: true,
              showYearDropdown: true,
              dropdownMode: "select",
              popperPlacement: 'bottom-end',
              popperProps: {
                positionFixed: true // prevents the popper from hiding behind overflow parent
              },
              popperModifiers: calendarIdentifire !== 'gateOut' && calendarIdentifire !== 'gateIn' && {
                flip: {
                  behavior: ["bottom"] // don't allow it to flip to be above
                },
                preventOverflow: {
                  enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                },
                hide: {
                  enabled: false // turn off since needs preventOverflow to be enabled
                }
              }
            })
          ),
          React.createElement(
            'div',
            { className: 'topSpace flexDisplay' },
            React.createElement(
              'div',
              { className: 'button-container' },
              React.createElement(
                'button',
                { className: 'ui primary button', onClick: function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (!opsTime) {
                                _context.next = 4;
                                break;
                              }

                              _context.next = 3;
                              return triggerApiCall(e, { entityId: entityId, eventName: eventName, eventCode: '', eventDescription: '', sourceSelected: 'OPS', selectedTime: opsTime, entityType: entityType });

                            case 3:
                              _this2.setState({ currentDate: null });

                            case 4:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, _this2);
                    }));

                    return function (_x) {
                      return _ref2.apply(this, arguments);
                    };
                  }() },
                'Y '
              )
            ),
            calendarIdentifire !== 'carrierReleased' ? this.renderSystemTimePicker({ enableModel: enableModel, showSystemTimeFunc: showSystemTimeFunc }) : null
          )
        )
      );
    }
  }]);

  return Calendar;
}(Component);

export default Calendar;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from 'react';
import { isEmpty, isUndefined } from 'lodash-es';
import moment from 'moment';
import momentTz from 'moment-timezone';
import Calendar from '../Calendar/index.js';
import StateTimeSeriesModal from '../StateTimeSeriesModal/index.js';
import { statusTextMapping } from '../../util/constants';
import { Icon, Button } from 'semantic-ui-react';
import "./styles.scss";

var ContainerModal = function (_Component) {
  _inherits(ContainerModal, _Component);

  function ContainerModal(props) {
    var _this2 = this;

    _classCallCheck(this, ContainerModal);

    var _this = _possibleConstructorReturn(this, (ContainerModal.__proto__ || Object.getPrototypeOf(ContainerModal)).call(this, props));

    _this.findUtcOffset = function (timezone) {
      var s = timezone.substr(3); // Get rid of UTC, s= "+05:00"
      var sign = s[0]; // "+""
      var x = s.substr(1, 2) * 60 + parseInt(s.substr(4, 5));
      return sign + x;
    };

    _this.timeZoneConverter = function (value, source) {
      var entityTimezone = _this.props.entityTimezone;

      var time = new Date(value).getTime();

      if (!isEmpty(entityTimezone)) {
        _this.setState({ modelEvent: "OPS" });
        var localTime = moment(value);
        var timeZoneTime = moment(value).tz(entityTimezone);
        var modifiedDate = moment(value);

        modifiedDate.subtract(-localTime.utcOffset() + timeZoneTime.utcOffset(), 'minutes');
        if (source === 'OPS') {
          _this.setState({ opsTime: modifiedDate.valueOf(), newOpsTime: time });
        } else {
          _this.setState({ demurrageTime: modifiedDate.valueOf(), newDemurrageTime: time });
        }
      } else {
        _this.setState({ opsTime: time });
      }
    };

    _this.timeZoneReverse = function (value) {
      if (!isEmpty(value) && !isUndefined(value)) {
        var entityTimezone = _this.props.entityTimezone;

        if (!isEmpty(entityTimezone)) {
          var parsedTime = parseInt(value);
          // string time zone logic 
          var localTime = moment(parsedTime);
          var timeZoneTime = moment(parsedTime).tz(entityTimezone);
          var modifiedDate = moment(parsedTime);
          modifiedDate.subtract(localTime.utcOffset() - timeZoneTime.utcOffset(), 'minutes');
          return modifiedDate.valueOf();
        }
      }
    };

    _this.getSelectedTime = function () {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var time = '';
      if (!isEmpty(identifier) && identifier.sourceSelected) {
        if (identifier.sourceSelected === 'OPS') {
          time = identifier.OPSTime;
        } else if (identifier.sourceSelected === 'TMODAL') {
          time = identifier.tModalTime;
        } else if (identifier.sourceSelected === 'EMODAL') {
          time = identifier.eModalTime;
        }
      }
      return time;
    };

    _this.handleState = function (e, key, value, id) {
      var _this$setState;

      var handleParentState = _this.props.handleParentState;

      e.preventDefault();
      e.stopPropagation();
      _this.setState((_this$setState = {}, _defineProperty(_this$setState, key, value), _defineProperty(_this$setState, 'isContainerLayout', true), _defineProperty(_this$setState, 'entityId', id), _this$setState));
      handleParentState(id);
    };

    _this.openDateCalendar = function () {
      _this.setState({ showSystemTime: false });
    };

    _this.selectModelTime = function (e, entityId, type, time, eventName, entityType) {
      _this.triggerApiCall(e, { entityId: entityId, eventName: eventName, eventCode: '', eventDescription: '', sourceSelected: type, selectedTime: time, entityType: entityType });
    };

    _this.selectCustomTime = function (date) {
      _this.setState({ selectedDate: date });
    };

    _this.selectCustomTime2 = function (date) {
      _this.setState({ selectedDate2: date });
    };

    _this.showSystemTimeFunc = function (_ref) {
      var fieldName = _ref.fieldName;

      _this.setState({ showSystemTime: true, selectedField: fieldName });
    };

    _this.updateReasonField = function (_ref2) {
      var key = _ref2.key,
          value = _ref2.value;

      _this.setState(_defineProperty({}, key, value));
    };

    _this.getSelectedDemurrageTime = function () {
      var identifire = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var time = '';
      if (!isEmpty(identifire) && identifire.sourceSelected) {
        time = identifire.OPSTime2;
      }
      return time;
    };

    _this.epochToUtc = function (epoch) {
      epoch = Number(epoch);
      var entityTimezone = _this.props.selectedContainerInfo.entityTimezone;

      var newDate = isEmpty(entityTimezone) ? momentTz(epoch) : momentTz(epoch).tz(entityTimezone, true); //sets timezone without changing the date/time
      console.log("newDate", epoch, momentTz(epoch).toString(), newDate.toString(), epoch, entityTimezone, newDate.utc().toString(), newDate.utc().valueOf());
      return newDate.utc().valueOf(); // converts to utc and then to epoch
    };

    _this.triggerApiCall = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var params = arguments[1];
      var _this$props = _this.props,
          getEntityTime = _this$props.getEntityTime,
          getListOfContainers = _this$props.getListOfContainers,
          selectedFilter = _this$props.selectedFilter,
          getAccordianBody = _this$props.getAccordianBody;

      var apiParamData = _extends({}, params);

      apiParamData.selectedTime = Number(apiParamData.selectedTime);
      apiParamData.selectedTime2 = Number(apiParamData.selectedTime2);

      if (!params.skipTzConversion) {
        if (apiParamData.selectedTime) apiParamData.selectedTime = _this.epochToUtc(apiParamData.selectedTime);
      }

      if (apiParamData.selectedTime2) apiParamData.selectedTime2 = _this.epochToUtc(apiParamData.selectedTime2);

      var entityId = params.entityId;

      e.preventDefault();
      e.stopPropagation();
      _this.setState({
        isMarkDone: false,
        isNewLoading: true,
        showGroundPopuop: false,
        isHoldsStuck: false,
        isFeesStuck: false,
        showLineReleasePopuop: false,
        showReadyPickup: false,
        showGateOut: false,
        showGateIn: false
      });

      return getEntityTime(apiParamData).then(function () {
        if (selectedFilter === "container") getListOfContainers(true, entityId, false);else if (selectedFilter === "vessel") getAccordianBody(indexRowClicked, true, 'vessel');else if (selectedFilter === "port") getAccordianBody(indexRowClicked, true, 'port');

        _this.setState({
          selectedDate: null, loading: false, isNewLoading: false
        });
      }).catch(function () {
        _this.setState({
          selectedDate: null, loading: false, isNewLoading: false
        });
      });
    };

    _this.handleRadioSelectionEvent = function (e, entityId, eventName, eventCode, type, selectedTime) {
      var entityType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';

      e.preventDefault();
      e.stopPropagation();
      _this.triggerApiCall(e, { entityId: entityId, eventName: eventName, eventCode: eventCode, eventDescription: '', sourceSelected: type, selectedTime: selectedTime, entityType: entityType });
    };

    _this.renderCalendar = function (_ref3) {
      var selectedField = _ref3.selectedField,
          stateInfo = _ref3.stateInfo,
          eventName = _ref3.eventName,
          entityIdData = _ref3.entityIdData,
          OPSTime = _ref3.OPSTime,
          OPSTime2 = _ref3.OPSTime2,
          eModalTime = _ref3.eModalTime,
          tModalTime = _ref3.tModalTime,
          entityId = _ref3.entityId,
          entityTimezone = _ref3.entityTimezone,
          fieldName = _ref3.fieldName,
          entityType = _ref3.entityType,
          isEnable = _ref3.isEnable;
      return isEnable && React.createElement(
        React.Fragment,
        null,
        React.createElement(Calendar, {
          selectCustomTime: _this.selectCustomTime,
          selectedDate2: _this.getSelectedDemurrageTime(stateInfo),
          showSystemTimeFunc: function showSystemTimeFunc() {
            return _this.showSystemTimeFunc({ fieldName: fieldName });
          },
          selectedDate: _this.getSelectedTime(stateInfo),
          calendarIdentifire: fieldName,
          eventName: eventName,
          triggerApiCall: _this.triggerApiCall,
          handleState: _this.handleState,
          entityIdData: entityIdData,
          OPSTime: OPSTime,
          OPSTime2: OPSTime2,
          eModalTime: eModalTime,
          tModalTime: tModalTime,
          entityId: entityId,
          entityTimezone: entityTimezone,
          entityType: entityType,
          selectedField: selectedField
        })
      );
    };

    _this.holdsAndFeesApiHandler = function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, entityId, eventName, eventCode, type, isSourceSelected, selectedTime) {
        var entityType = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';

        var _this$state, _this$state$holdsReas, holdsReasonValue, _this$state$feesReaso, feesReasonValue, newFeesVal, eventDescription;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                e.stopPropagation();
                _this.setState({ isMarkDone: false, isNewLoading: true, isHoldsStuck: false, isFeesStuck: false, showGroundPopuop: false, showLineReleasePopuop: false, showReadyPickup: false, showGateOut: false, showGateIn: false });
                _this$state = _this.state, _this$state$holdsReas = _this$state.holdsReasonValue, holdsReasonValue = _this$state$holdsReas === undefined ? '' : _this$state$holdsReas, _this$state$feesReaso = _this$state.feesReasonValue, feesReasonValue = _this$state$feesReaso === undefined ? '' : _this$state$feesReaso;
                newFeesVal = !isEmpty(feesReasonValue) ? (feesReasonValue * 100).toString() : "";
                eventDescription = !isEmpty(holdsReasonValue) ? holdsReasonValue : newFeesVal;

                if (!isSourceSelected) {
                  _context.next = 11;
                  break;
                }

                _this.setState({ isContainerLayout: true, isFeesYesChecked: false });
                _context.next = 10;
                return _this.triggerApiCall(e, { entityId: entityId, eventName: eventName, eventCode: eventCode, eventDescription: eventDescription, sourceSelected: type, selectedTime: selectedTime, entityType: entityType });

              case 10:
                _this.setState({ holdsReasonValue: '', feesReasonValue: '' });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x5, _x6, _x7, _x8, _x9, _x10, _x11) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.getCurrentTime = function () {
      var time = new Date().getTime();
      var convertedTime = _this.convertEpochToDate(time);
      _this.setState({ doneTime: convertedTime });
    };

    _this.renderReasonTextArea = function (_ref5) {
      var isSourceSelected = _ref5.isSourceSelected,
          holdsReasonValue = _ref5.holdsReasonValue,
          entityId = _ref5.entityId,
          eventName = _ref5.eventName,
          eventCode = _ref5.eventCode,
          entityType = _ref5.entityType,
          type = _ref5.type,
          feesReasonValue = _ref5.feesReasonValue;
      return React.createElement(
        'div',
        { className: 'holds-reason' },
        React.createElement(
          'div',
          { className: 'headerLabel' },
          type === 'hold' ? 'Reason for hold' : 'Fees due'
        ),
        React.createElement(
          'div',
          { className: 'flexDisplay' },
          React.createElement(
            'div',
            { className: 'rightSpace' },
            React.createElement('input', {
              type: 'text',
              placeholder: type === 'hold' ? "Add description" : "Enter Amount",
              value: type === 'hold' ? holdsReasonValue : feesReasonValue,
              onChange: function onChange(_ref6) {
                var value = _ref6.target.value;
                return _this.updateReasonField({ key: type === 'hold' ? 'holdsReasonValue' : 'feesReasonValue', value: value });
              }
            })
          ),
          React.createElement(
            'div',
            { className: 'button-container' },
            React.createElement(
              'button',
              {
                'class': 'ui primary button',
                onClick: function onClick(e) {
                  return (type === 'hold' ? holdsReasonValue : feesReasonValue) && _this.holdsAndFeesApiHandler(e, entityId, eventName, eventCode, 'OPS', isSourceSelected, 0, entityType);
                }
              },
              'Y'
            )
          ),
          React.createElement(Button, {
            icon: 'angle double left',
            className: 'iconClass',
            onClick: function onClick() {
              if (type === 'hold') {
                _this.setState({ isHoldYesChecked: false });
              } else {
                _this.setState({ isFeesYesChecked: false });
              }
            }
          })
        )
      );
    };

    _this.renderRadioButton = function (_ref7) {
      var isSourceSelected = _ref7.isSourceSelected,
          entityId = _ref7.entityId,
          name = _ref7.name,
          onClickEventName = _ref7.onClickEventName,
          eventName = _ref7.eventName,
          state = _ref7.state,
          entityType = _ref7.entityType;
      return React.createElement(
        'form',
        null,
        React.createElement(
          'span',
          { className: 'holds-form' },
          React.createElement(
            'label',
            null,
            ' ',
            React.createElement('input', { type: 'radio', name: name, disabled: !isSourceSelected,
              onClick: function onClick(e) {
                return isSourceSelected && _this.handleState(e, onClickEventName, true, entityId);
              }
            }),
            ' Yes '
          )
        ),
        React.createElement(
          'span',
          { className: 'holds-form' },
          React.createElement(
            'label',
            null,
            React.createElement('input', {
              type: 'radio',
              name: name,
              disabled: !isSourceSelected,
              onClick: function onClick(e) {
                return isSourceSelected && _this.handleRadioSelectionEvent(e, entityId, eventName, state, 'OPS', 0, entityType);
              }
            }),
            ' No'
          )
        )
      );
    };

    _this.renderTextStatus = function (_ref8) {
      var entityId = _ref8.entityId,
          eventName = _ref8.eventName,
          _ref8$entityType = _ref8.entityType,
          entityType = _ref8$entityType === undefined ? '' : _ref8$entityType,
          eventDescription = _ref8.eventDescription,
          isSourceSelected = _ref8.isSourceSelected,
          text = _ref8.text,
          showButton = _ref8.showButton,
          eventCode = _ref8.eventCode,
          fieldName = _ref8.fieldName,
          status = _ref8.status;
      return React.createElement(
        Fragment,
        null,
        React.createElement(
          'div',
          { className: 'flexDisplay' },
          React.createElement(
            'div',
            { className: 'rightSpace textStyle' },
            text
          ),
          showButton && React.createElement(
            'div',
            { className: 'button-container' },
            React.createElement(
              'button',
              {
                'class': 'ui primary button',
                onClick: function onClick(e) {
                  return _this.holdsAndFeesApiHandler(e, entityId, eventName, eventCode, 'OPS', isSourceSelected, 0, entityType);
                }
              },
              'Y'
            )
          )
        ),
        fieldName === "fees" && (status === 'FEES_DUE' || status === 'FEES_PAID') ? !isEmpty(eventDescription) && React.createElement(
          'div',
          { className: 'rightSpace textStyle' },
          '$',
          eventDescription / 100
        ) : !isEmpty(eventDescription) && React.createElement(
          'div',
          { className: 'rightSpace textStyle' },
          eventDescription
        )
      );
    };

    _this.renderRadioFields = function (_ref9) {
      var status = _ref9.status,
          isSourceSelected = _ref9.isSourceSelected,
          entityId = _ref9.entityId,
          eventName = _ref9.eventName,
          eventDescription = _ref9.eventDescription,
          entityType = _ref9.entityType,
          isHoldYesChecked = _ref9.isHoldYesChecked,
          holdsReasonValue = _ref9.holdsReasonValue,
          isFeesYesChecked = _ref9.isFeesYesChecked,
          feesReasonValue = _ref9.feesReasonValue,
          fieldName = _ref9.fieldName;

      if (status === 'NO_HOLD' || status === 'HOLD_REMOVED' || status === 'ON_HOLD' || status === 'NO_DUES' || status === 'FEES_DUE' || status === 'FEES_PAID') {
        return _this.renderTextStatus({
          entityId: entityId,
          eventName: eventName,
          entityType: entityType,
          eventDescription: eventDescription,
          isSourceSelected: isSourceSelected,
          text: statusTextMapping[status],
          showButton: status === 'ON_HOLD' || status === 'FEES_DUE',
          eventCode: status === 'ON_HOLD' ? 'HOLD_REMOVED' : status === 'FEES_DUE' ? 'FEES_PAID' : '',
          fieldName: fieldName,
          status: status
        });
      } else if (status === 'HOLD_NONE') {
        if (isHoldYesChecked) {
          return _this.renderReasonTextArea({ isSourceSelected: isSourceSelected, holdsReasonValue: holdsReasonValue, entityId: entityId, eventName: eventName, eventCode: 'ON_HOLD', entityType: entityType, type: 'hold' });
        }
        return _this.renderRadioButton({
          isSourceSelected: isSourceSelected,
          entityId: entityId,
          name: 'holds',
          onClickEventName: 'isHoldYesChecked',
          eventName: eventName,
          state: 'NO_HOLD',
          entityType: entityType
        });
      } else if (status === 'FEES_NONE') {
        if (isFeesYesChecked) {
          return _this.renderReasonTextArea({ isSourceSelected: isSourceSelected, feesReasonValue: feesReasonValue, entityId: entityId, eventName: eventName, eventCode: 'FEES_DUE', entityType: entityType, type: 'fees' });
        }
        return _this.renderRadioButton({
          isSourceSelected: isSourceSelected,
          entityId: entityId,
          name: 'fees',
          onClickEventName: 'isFeesYesChecked',
          eventName: eventName,
          state: 'NO_DUES',
          entityType: entityType
        });
      }
    };

    _this.renderStateTimeSeriesInfo = function (_ref10) {
      var OPSTime = _ref10.OPSTime,
          OPSTime2 = _ref10.OPSTime2,
          eModalTime = _ref10.eModalTime,
          tModalTime = _ref10.tModalTime,
          modalIdentifire = _ref10.modalIdentifire,
          entityId = _ref10.entityId,
          entityIdData = _ref10.entityIdData,
          eventName = _ref10.eventName,
          convertEpochToDate = _ref10.convertEpochToDate,
          sourceSelected = _ref10.sourceSelected,
          entityType = _ref10.entityType,
          selectedField = _ref10.selectedField,
          entityTimezone = _ref10.entityTimezone,
          stateInfo = _ref10.stateInfo;
      return React.createElement(
        Fragment,
        null,
        React.createElement(StateTimeSeriesModal, {
          OPSTime: OPSTime,
          OPSTime2: OPSTime2,
          eModalTime: eModalTime,
          tModalTime: tModalTime,
          modalIdentifire: modalIdentifire,
          entityId: entityId,
          entityIdData: entityIdData,
          eventName: eventName,
          selectModelTime: _this.selectModelTime,
          convertEpochToDate: convertEpochToDate,
          sourceSelected: sourceSelected,
          entityType: entityType,
          selectedField: selectedField,
          selectedDate2: _this.getSelectedDemurrageTime(stateInfo),
          triggerApiCall: _this.triggerApiCall,
          openDateCalendar: _this.openDateCalendar,
          entityTimezone: entityTimezone,
          epochToUtc: _this.epochToUtc
        })
      );
    };

    _this.computeStaticText = function (_ref11) {
      var sourceSelected = _ref11.sourceSelected,
          eModalTime = _ref11.eModalTime,
          tModalTime = _ref11.tModalTime,
          OPSTime = _ref11.OPSTime,
          convertEpochToDate = _ref11.convertEpochToDate,
          entityTimezone = _ref11.entityTimezone;

      var text = void 0;
      switch (sourceSelected) {
        case 'OPS':
          if (!isEmpty(OPSTime)) {
            text = convertEpochToDate(OPSTime, false, true, entityTimezone).concat(' (K)');
          }
          break;
        case 'TMODAL':
          if (!isEmpty(tModalTime)) {
            text = convertEpochToDate(tModalTime, false, true, entityTimezone).concat(' (T)');
          }
          break;
        case 'EMODAL':
          if (!isEmpty(eModalTime)) {
            text = convertEpochToDate(eModalTime, false, true, entityTimezone).concat(' (E)');
          }
          break;
        default:
          text = '';
      }
      return text;
    };

    var _props$selectedDate = props.selectedDate2,
        selectedDate2 = _props$selectedDate === undefined ? null : _props$selectedDate;

    _this.state = {
      modelTime: null,
      modelEvent: null,
      sourceName: null,
      demurrageTime: selectedDate2,
      newDemurrageTime: '',

      showSystemTime: false,
      selectedDate: null,

      showGroundPopuop: false,
      showLineReleasePopuop: false,
      showReadyPickup: false,
      showGateOut: false,
      showGateIn: false,

      isHoldYesChecked: false,
      isHoldsStuck: false,
      holdsReasonValue: '',

      isFeesYesChecked: false,
      isFeesStuck: false,
      feesReasonValue: '',

      isContainerLayout: false,
      isNewLoading: false,
      isMarkDone: false,
      isMarkDisable: false,
      doneTime: null,
      selectedField: null

    };
    return _this;
  }

  _createClass(ContainerModal, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          convertEpochToDate = _props.convertEpochToDate,
          entityIdData = _props.entityIdData,
          selectedContainerInfo = _props.selectedContainerInfo,
          rowHeaders = _props.rowHeaders,
          closeContainerModal = _props.closeContainerModal,
          _state = this.state,
          showSystemTime = _state.showSystemTime,
          selectedDate = _state.selectedDate,
          isHoldYesChecked = _state.isHoldYesChecked,
          holdsReasonValue = _state.holdsReasonValue,
          feesReasonValue = _state.feesReasonValue,
          isFeesYesChecked = _state.isFeesYesChecked,
          selectedField = _state.selectedField;

      if (!selectedContainerInfo) return null;
      // console.log("selectedContainerInfo:",selectedContainerInfo);

      // let isDrayageEnabled = false;
      // let entityShipmentLists = selectedContainerInfo.entityShipmentList;
      // for(let i=0; i<entityShipmentLists.length; i++) { 
      //     if(entityShipmentLists[i].drayageEnabled == 1) {
      //       isDrayageEnabled = true;
      //       break;
      //     }
      // }


      var _selectedContainerInf = selectedContainerInfo.shipmentIds,
          shipmentIds = _selectedContainerInf === undefined ? "" : _selectedContainerInf,
          entityType = selectedContainerInfo.entityType,
          archived = selectedContainerInfo.archived,
          _selectedContainerInf2 = selectedContainerInfo.grounded,
          grounded = _selectedContainerInf2 === undefined ? {} : _selectedContainerInf2,
          _selectedContainerInf3 = selectedContainerInfo.customReleased,
          customReleased = _selectedContainerInf3 === undefined ? {} : _selectedContainerInf3,
          _selectedContainerInf4 = selectedContainerInfo.carrierReleased,
          carrierReleased = _selectedContainerInf4 === undefined ? {} : _selectedContainerInf4,
          _selectedContainerInf5 = selectedContainerInfo.holds,
          holds = _selectedContainerInf5 === undefined ? {} : _selectedContainerInf5,
          _selectedContainerInf6 = selectedContainerInfo.fees,
          fees = _selectedContainerInf6 === undefined ? {} : _selectedContainerInf6,
          _selectedContainerInf7 = selectedContainerInfo.readyForPickup,
          readyForPickup = _selectedContainerInf7 === undefined ? {} : _selectedContainerInf7,
          _selectedContainerInf8 = selectedContainerInfo.terminalPickupAppointment,
          terminalPickupAppointment = _selectedContainerInf8 === undefined ? {} : _selectedContainerInf8,
          _selectedContainerInf9 = selectedContainerInfo.terminalDropAppointment,
          terminalDropAppointment = _selectedContainerInf9 === undefined ? {} : _selectedContainerInf9,
          _selectedContainerInf10 = selectedContainerInfo.warehouseDropAppointment,
          warehouseDropAppointment = _selectedContainerInf10 === undefined ? {} : _selectedContainerInf10,
          _selectedContainerInf11 = selectedContainerInfo.warehousePickupAppointment,
          warehousePickupAppointment = _selectedContainerInf11 === undefined ? {} : _selectedContainerInf11,
          _selectedContainerInf12 = selectedContainerInfo.gateOut,
          gateOut = _selectedContainerInf12 === undefined ? {} : _selectedContainerInf12,
          _selectedContainerInf13 = selectedContainerInfo.gateIn,
          gateIn = _selectedContainerInf13 === undefined ? {} : _selectedContainerInf13,
          _selectedContainerInf14 = selectedContainerInfo.done,
          done = _selectedContainerInf14 === undefined ? {} : _selectedContainerInf14;

      var isSourceSelected = grounded.sourceSelected !== 'ENTITY_SOURCE_NONE';

      var isCustomReleased = customReleased.sourceSelected && customReleased.sourceSelected !== 'ENTITY_SOURCE_NONE';
      var isCarrierReleased = carrierReleased.sourceSelected && carrierReleased.sourceSelected !== 'ENTITY_SOURCE_NONE';
      var isReadyForPickup = readyForPickup.sourceSelected && readyForPickup.sourceSelected !== 'ENTITY_SOURCE_NONE';
      // let isTerminalPickupAppointment  = terminalPickupAppointment.sourceSelected && terminalPickupAppointment.sourceSelected !== 'ENTITY_SOURCE_NONE';

      var isGateOut = gateOut.sourceSelected && gateOut.sourceSelected !== 'ENTITY_SOURCE_NONE';

      var isTerminalAppointment = terminalPickupAppointment.sourceSelected && terminalPickupAppointment.sourceSelected !== 'ENTITY_SOURCE_NONE';

      var isDeliveryAppointment = terminalDropAppointment.sourceSelected && terminalDropAppointment.sourceSelected !== 'ENTITY_SOURCE_NONE';

      var isTerminalReturnApp = warehousePickupAppointment.sourceSelected && warehousePickupAppointment.sourceSelected !== 'ENTITY_SOURCE_NONE';

      var isActualDelivery = warehouseDropAppointment.sourceSelected && warehouseDropAppointment.sourceSelected !== 'ENTITY_SOURCE_NONE';

      // let isWarehousePickupAppointment  = warehousePickupAppointment.sourceSelected && warehousePickupAppointment.sourceSelected !== 'ENTITY_SOURCE_NONE';

      var isGateIn = gateIn.sourceSelected && gateIn.sourceSelected !== 'ENTITY_SOURCE_NONE';
      // let isSourceSelected  = grounded.sourceSelected && grounded.sourceSelected !== 'ENTITY_SOURCE_NONE';
      var isReadyForPickupEnable = isSourceSelected && isCustomReleased && isCarrierReleased && (holds.holdStatus === 'NO_HOLD' || holds.holdStatus === 'HOLD_REMOVED') && (fees.feesStatus === 'FEES_PAID' || fees.feesStatus === 'NO_DUES');

      var isTerminalAppointmentEnable = void 0;
      var isGateOutEnable = void 0;
      var isDeliveryAppointmentEnable = void 0;
      var isActualDeliveryEnable = void 0;
      var isTerminalReturnAppEnable = void 0;
      var isGateInEnable = void 0;

      isTerminalAppointmentEnable = isReadyForPickupEnable && isReadyForPickup;
      //let isGateOutEnable =isReadyForPickupEnable && isReadyForPickup && isTerminalAppointment && isTerminalAppointmentEnable && isDeliveryAppointment && isDeliveryAppointmentEnable && isActualDeliveryEnable && isActualDelivery && isTerminalReturnAppEnable && isTerminalReturnApp;
      isGateOutEnable = isReadyForPickupEnable && isReadyForPickup;
      isDeliveryAppointmentEnable = isGateOut && isGateOutEnable;
      isActualDeliveryEnable = isGateOut && isGateOutEnable;
      isTerminalReturnAppEnable = isGateOut && isGateOutEnable;
      isGateInEnable = isGateOutEnable && isGateOut;

      var entityId = selectedContainerInfo.entityId,
          entityTimezone = selectedContainerInfo.entityTimezone;


      return React.createElement(
        'div',
        { className: 'newContainerModal' },
        React.createElement(Icon, { className: 'crossIcon', name: 'close large', onClick: function onClick() {
            return closeContainerModal();
          } }),
        React.createElement(
          'h3',
          { className: 'modal_header' },
          entityId
        ),
        React.createElement(
          'div',
          { className: 'statesInfo' },
          rowHeaders.map(function (_ref12) {
            var fieldName = _ref12.fieldName,
                displayName = _ref12.displayName;


            var stageInfo = selectedContainerInfo[fieldName];
            // console.log({ selectedContainerInfo, fieldName });

            if (!isEmpty(stageInfo)) {
              var eventName = stageInfo.eventName,
                  eModalTime = stageInfo.eModalTime,
                  tModalTime = stageInfo.tModalTime,
                  OPSTime = stageInfo.OPSTime,
                  OPSTime2 = stageInfo.OPSTime2,
                  sourceSelected = stageInfo.sourceSelected,
                  holdStatus = stageInfo.holdStatus,
                  eventDescription = stageInfo.eventDescription,
                  feesStatus = stageInfo.feesStatus;

              return React.createElement(
                'div',
                { className: 'state' },
                fieldName === 'grounded' ? showSystemTime && selectedField === 'grounded' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  _this3.renderStateTimeSeriesInfo({
                    OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, modalIdentifire: 'grounded', entityId: entityId, entityIdData: entityIdData, eventName: eventName, convertEpochToDate: convertEpochToDate, sourceSelected: sourceSelected, entityType: entityType, selectedField: selectedField, entityTimezone: entityTimezone, stateInfo: stageInfo
                  })
                ) : React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  _this3.renderCalendar({ selectedDate: selectedDate, stateInfo: stageInfo, eventName: eventName, entityIdData: entityIdData, OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, entityId: entityId, entityTimezone: entityTimezone, fieldName: fieldName, entityType: entityType, selectedField: selectedField, isEnable: true })
                ) : fieldName === 'customReleased' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  isCustomReleased ? _this3.renderTextStatus({
                    text: _this3.computeStaticText({ sourceSelected: sourceSelected, eModalTime: eModalTime, tModalTime: tModalTime, OPSTime: OPSTime, convertEpochToDate: convertEpochToDate, entityTimezone: entityTimezone }),
                    showButton: false
                  }) : React.createElement(
                    'p',
                    { className: 'small_font' },
                    'Disabled'
                  )
                ) : fieldName === 'carrierReleased' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  isSourceSelected ? _this3.renderCalendar({
                    selectedDate: selectedDate, selectedField: selectedField, stateInfo: stageInfo, eventName: eventName, entityIdData: entityIdData, OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, entityId: entityId, entityTimezone: entityTimezone, fieldName: fieldName, entityType: entityType, isEnable: isSourceSelected
                  }) : React.createElement(
                    'p',
                    { className: 'small_font' },
                    'Disabled'
                  )
                ) : fieldName === 'holds' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  _this3.renderRadioFields({ status: holdStatus, isSourceSelected: isSourceSelected, entityId: entityId, eventName: eventName, eventDescription: eventDescription, entityType: entityType, isHoldYesChecked: isHoldYesChecked, holdsReasonValue: holdsReasonValue, fieldName: fieldName })
                ) : fieldName === 'fees' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  _this3.renderRadioFields({ status: feesStatus, isSourceSelected: isSourceSelected, entityId: entityId, eventName: eventName, eventDescription: eventDescription, entityType: entityType, isFeesYesChecked: isFeesYesChecked, feesReasonValue: feesReasonValue, fieldName: fieldName })
                ) : fieldName === 'readyForPickup' ? showSystemTime && selectedField === 'readyForPickup' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  _this3.renderStateTimeSeriesInfo({
                    OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, modalIdentifire: 'readyForPickup', entityId: entityId, entityIdData: entityIdData, eventName: eventName, convertEpochToDate: convertEpochToDate, sourceSelected: sourceSelected, entityType: entityType, selectedField: selectedField, entityTimezone: entityTimezone, stateInfo: stageInfo
                  })
                ) : React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  isReadyForPickupEnable ? _this3.renderCalendar({
                    selectedDate: selectedDate, stateInfo: stageInfo, eventName: eventName, entityIdData: entityIdData, OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, entityId: entityId, entityTimezone: entityTimezone, fieldName: fieldName, entityType: entityType, selectedField: selectedField, isEnable: isReadyForPickupEnable
                  }) : React.createElement(
                    'p',
                    { className: 'small_font' },
                    'Disabled'
                  )
                ) : fieldName === 'terminalPickupAppointment' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  isTerminalAppointmentEnable ? _this3.renderCalendar({
                    selectedDate: selectedDate, selectedField: selectedField, stateInfo: stageInfo, eventName: eventName, entityIdData: entityIdData, OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, entityId: entityId, entityTimezone: entityTimezone, fieldName: fieldName, entityType: entityType, isEnable: isTerminalAppointmentEnable
                  }) : React.createElement(
                    'p',
                    { className: 'small_font' },
                    'Disabled'
                  )
                ) : fieldName === 'gateOut' ? showSystemTime && selectedField === 'gateOut' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  _this3.renderStateTimeSeriesInfo({
                    OPSTime: OPSTime, OPSTime2: OPSTime2, eModalTime: eModalTime, tModalTime: tModalTime, modalIdentifire: 'gateOut', entityId: entityId, entityIdData: entityIdData, eventName: eventName, convertEpochToDate: convertEpochToDate, sourceSelected: sourceSelected, entityType: entityType, selectedField: selectedField, entityTimezone: entityTimezone, stateInfo: stageInfo
                  })
                ) : React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  isGateOutEnable ? _this3.renderCalendar({
                    selectedDate: selectedDate, stateInfo: stageInfo, eventName: eventName, entityIdData: entityIdData, OPSTime: OPSTime, OPSTime2: OPSTime2, eModalTime: eModalTime, tModalTime: tModalTime, entityId: entityId, entityTimezone: entityTimezone, fieldName: fieldName, entityType: entityType, selectedField: selectedField, isEnable: isGateOutEnable
                  }) : React.createElement(
                    'p',
                    { className: 'small_font' },
                    'Disabled'
                  )
                ) : fieldName === 'terminalDropAppointment' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  isDeliveryAppointmentEnable ? _this3.renderCalendar({
                    selectedDate: selectedDate, selectedField: selectedField, stateInfo: stageInfo, eventName: eventName, entityIdData: entityIdData, OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, entityId: entityId, entityTimezone: entityTimezone, fieldName: fieldName, entityType: entityType, isEnable: isDeliveryAppointmentEnable
                  }) : React.createElement(
                    'p',
                    { className: 'small_font' },
                    'Disabled'
                  )
                ) : fieldName === 'warehouseDropAppointment' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  isActualDeliveryEnable ? _this3.renderCalendar({
                    selectedDate: selectedDate, selectedField: selectedField, stateInfo: stageInfo, eventName: eventName, entityIdData: entityIdData, OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, entityId: entityId, entityTimezone: entityTimezone, fieldName: fieldName, entityType: entityType, isEnable: isActualDeliveryEnable
                  }) : React.createElement(
                    'p',
                    { className: 'small_font' },
                    'Disabled'
                  )
                ) : fieldName === 'warehousePickupAppointment' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  isTerminalReturnAppEnable ? _this3.renderCalendar({
                    selectedDate: selectedDate, selectedField: selectedField, stateInfo: stageInfo, eventName: eventName, entityIdData: entityIdData, OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, entityId: entityId, entityTimezone: entityTimezone, fieldName: fieldName, entityType: entityType, isEnable: isTerminalReturnAppEnable
                  }) : React.createElement(
                    'p',
                    { className: 'small_font' },
                    'Disabled'
                  )
                ) : fieldName === 'gateIn' ? showSystemTime && selectedField === 'gateIn' ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  _this3.renderStateTimeSeriesInfo({
                    OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, modalIdentifire: 'gateIn', entityId: entityId, entityIdData: entityIdData, eventName: eventName, convertEpochToDate: convertEpochToDate, sourceSelected: sourceSelected, entityType: entityType, selectedField: selectedField, entityTimezone: entityTimezone, stateInfo: stageInfo
                  })
                ) : React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: 'header' },
                    displayName
                  ),
                  isGateInEnable ? _this3.renderCalendar({
                    selectedDate: selectedDate, stateInfo: stageInfo, eventName: eventName, entityIdData: entityIdData, OPSTime: OPSTime, eModalTime: eModalTime, tModalTime: tModalTime, entityId: entityId, entityTimezone: entityTimezone, fieldName: fieldName, entityType: entityType, selectedField: selectedField, isEnable: isGateInEnable
                  }) : React.createElement(
                    'p',
                    { className: 'small_font' },
                    'Disabled'
                  )
                ) : null
              );
            }
          })
        )
      );
    }
  }]);

  return ContainerModal;
}(Component);

;

export default ContainerModal;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from "react";
import { Icon } from "semantic-ui-react";
import { isEmpty } from 'lodash-es';
import { iconStatusMapping, statesMapping, stringTypeFields } from "../../util/constants";
import BlockHeader from "../BlockHeader/index.js";
import "./styles.scss";
import { ReactReduxContext } from "react-redux";
import { Popup } from 'semantic-ui-react';

var ContainerTable = function (_Component) {
  _inherits(ContainerTable, _Component);

  function ContainerTable(props) {
    _classCallCheck(this, ContainerTable);

    var _this = _possibleConstructorReturn(this, (ContainerTable.__proto__ || Object.getPrototypeOf(ContainerTable)).call(this, props));

    _this.handleState = function (e, key, value, id) {
      var _this$setState;

      var handleParentState = _this.props.handleParentState;

      e.preventDefault();
      e.stopPropagation();
      _this.setState((_this$setState = {}, _defineProperty(_this$setState, key, value), _defineProperty(_this$setState, "entityId", id), _this$setState));
      handleParentState(id);
    };

    _this.renderDateTime = function (_ref) {
      var data = _ref.data;
      return data.map(function (info) {
        return React.createElement(
          "div",
          { className: "infoStyle" },
          info
        );
      });
    };

    _this.renderData = function (_ref2) {
      var status = _ref2.status,
          dataList = _ref2.dataList,
          fieldName = _ref2.fieldName,
          blockType = _ref2.blockType,
          allShipmentInfo = _ref2.allShipmentInfo;


      if (fieldName === "fees") {

        var whatToDisplay = dataList[0];
        if (status === 'FEES_DUE') whatToDisplay = "$" + (dataList[1] / 100).toFixed(2);

        return React.createElement(
          React.Fragment,
          null,
          whatToDisplay
        );
      }if (fieldName === "holds") {

        var _whatToDisplay = dataList[0];

        return React.createElement(
          React.Fragment,
          null,
          _whatToDisplay,
          " ",
          dataList[1] && dataList[1].trim() && React.createElement(Popup, {
            trigger: React.createElement(Icon, { name: "warning sign", color: "red" }),
            content: dataList[1],
            position: "top left"
          })
        );
      }

      var getAllShipmentId = "";
      if (allShipmentInfo && fieldName === "shipmentId") {
        for (var i = 0; i < allShipmentInfo.length; i++) {
          var getShipmentId = allShipmentInfo[i].shipmentId;
          if (i < allShipmentInfo.length - 1) getAllShipmentId += getShipmentId + ", ";else getAllShipmentId += getShipmentId;
        }
        return React.createElement(
          React.Fragment,
          null,
          allShipmentInfo[0].shipmentId,
          allShipmentInfo.length > 1 ? React.createElement(Popup, { content: getAllShipmentId, trigger: React.createElement(
              "b",
              null,
              React.createElement(
                "a",
                { style: { color: "#0A8B8F" } },
                "..."
              )
            ) }) : ""
        );
      }

      return dataList.map(function (data) {

        var whatToDisplay = "";

        if (isEmpty(data)) whatToDisplay = '';else {
          if (stringTypeFields[fieldName]) whatToDisplay = data;else {
            // if(fieldName === "purchaseOrder")
            //   data = data.replace(",", ", ")

            if (blockType === "timelineTable") whatToDisplay = _this.renderDateTime({ data: data.split(';') });else whatToDisplay = _this.renderDateTime({ data: [data.replace(';', ',')] });
          }
        }

        var firstPart = whatToDisplay;

        if (stringTypeFields[fieldName] && blockType === "metaTable") firstPart = whatToDisplay.substring(0, 16);

        return React.createElement(
          "div",
          { className: status === 'FEES_DUE' || stringTypeFields[fieldName] ? 'infoStyle' : '' },
          firstPart,
          stringTypeFields[fieldName] && blockType === "metaTable" && whatToDisplay.length > 16 ? React.createElement(Popup, { content: whatToDisplay, trigger: React.createElement(
              "b",
              null,
              React.createElement(
                "a",
                { style: { color: "#0A8B8F" } },
                "..."
              )
            ) }) : ""
        );
      });
    };

    _this.openContainerPopup = function (e, identifier, isEnable, id) {
      // console.log({ identifier });
      var _this$props = _this.props,
          handleParentState = _this$props.handleParentState,
          archived = _this$props.archived;
      // e.preventDefault();
      // e.stopPropagation()

      _this.setState({ entityId: id });
      handleParentState(id);
      _this.setState({ showGroundPopuop: false, showLineReleasePopuop: false, showReadyPickup: false, showGateOut: false, showGateIn: false });
      if (isEnable && !archived) {
        if (identifier === 'showGroundPopuop') {
          _this.setState({ showGroundPopuop: true, showLineReleasePopuop: false, showReadyPickup: false, showGateOut: false, showGateIn: false });
        } else if (identifier === 'showLineReleasePopuop') {
          _this.setState({ showGroundPopuop: false, showLineReleasePopuop: true, showReadyPickup: false, showGateOut: false, showGateIn: false });
        } else if (identifier === 'showReadyPickup') {
          _this.setState({ showGroundPopuop: false, showLineReleasePopuop: false, showReadyPickup: true, showGateOut: false, showGateIn: false });
        } else if (identifier === 'showGateOut') {
          _this.setState({ showGroundPopuop: false, showLineReleasePopuop: false, showReadyPickup: false, showGateOut: true, showGateIn: false });
        } else {
          _this.setState({ showGroundPopuop: false, showLineReleasePopuop: false, showReadyPickup: false, showGateOut: false, showGateIn: true });
        }
      }
    };

    _this.renderRowHeaders = function (_ref3) {
      var tableData = _ref3.tableData,
          rowHeadersLength = _ref3.rowHeadersLength,
          entityId = _ref3.entityId,
          showContainerModal = _ref3.showContainerModal,
          _ref3$showProgressIco = _ref3.showProgressIcons,
          showProgressIcons = _ref3$showProgressIco === undefined ? false : _ref3$showProgressIco,
          blockType = _ref3.blockType,
          allShipmentInfo = _ref3.allShipmentInfo;

      console.log("tableData", entityId, tableData);
      return tableData.map(function (_ref4, index) {
        var displayName = _ref4.displayName,
            status = _ref4.status,
            dataList = _ref4.dataList,
            fieldName = _ref4.fieldName,
            compactName = _ref4.compactName;
        return React.createElement(
          "div",
          { className: "flexDisplay " + (tableData[index].status === "ENTITY_SOURCE_NONE" && (tableData[index].eModalTime || tableData[index].tModalTime) ? "isUnprocessed" : ""), onClick: function onClick(e) {
              return !isEmpty(statesMapping[fieldName]) && _this.openContainerPopup(e, statesMapping[fieldName].identifier, true, entityId);
            } },
          showProgressIcons && React.createElement(
            "div",
            { className: "rowHeader iconClass verticalCentreAlign " + iconStatusMapping[status].color },
            React.createElement(Icon, { name: iconStatusMapping[status].name, className: "verticalCentreAlign" })
          ),
          React.createElement(
            "div",
            { className: "maxContentWidth" },
            React.createElement(
              "div",
              { className: "rowWrapper" },
              React.createElement(
                "div",
                { className: "rowHeader verticalCentreAlign" },
                React.createElement(
                  "div",
                  { className: "headerText" + (showProgressIcons && iconStatusMapping[status].color === 'red' ? ' failedState' : !showProgressIcons ? index !== rowHeadersLength ? ' metaHeaderText' : ' lastChildMetaHeader' : '') },
                  displayName
                )
              ),
              showProgressIcons && index !== rowHeadersLength && React.createElement(
                "div",
                { className: "lineBackground" },
                React.createElement("div", { className: "progressLine " + iconStatusMapping[status].progressLineColor })
              )
            ),
            React.createElement(
              "div",
              { className: "dataDisplay" + (index === 0 && showProgressIcons ? ' firstState' : '') },
              _this.renderData({ status: status, dataList: dataList, fieldName: fieldName, blockType: blockType, allShipmentInfo: allShipmentInfo })
            )
          )
        );
      });
    };

    _this.state = {
      showGroundPopuop: false,
      showLineReleasePopuop: false,
      showReadyPickup: false,
      showGateOut: false,
      showGateIn: false,
      isNewLoading: false,
      isMarkDone: false,
      isMarkDisable: false,
      doneTime: null
    };
    return _this;
  }

  _createClass(ContainerTable, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          tableData = _props.tableData,
          data = _props.data,
          showContainerModal = _props.showContainerModal,
          entityId = _props.entityId,
          metaData = _props.metaData,
          allShipmentInfo = _props.allShipmentInfo;

      return React.createElement(
        Fragment,
        null,
        React.createElement(
          "div",
          { className: "tableWrapper" },
          React.createElement(BlockHeader, { data: data }),
          React.createElement("hr", null),
          React.createElement(
            "div",
            { className: "flexDisplay rowSpacing" },
            this.renderRowHeaders({
              tableData: tableData, rowHeadersLength: tableData.length - 1, entityId: entityId, showContainerModal: showContainerModal, showProgressIcons: true, blockType: "timelineTable"
            })
          ),
          React.createElement("hr", { className: "horizantalDivider" }),
          React.createElement(
            "div",
            { className: "flexDisplay rowSpacing metaTable" },
            this.renderRowHeaders({
              tableData: metaData, rowHeadersLength: metaData.length - 1, entityId: entityId, showContainerModal: showContainerModal, showProgressIcons: false, blockType: "metaTable", allShipmentInfo: allShipmentInfo
            })
          ),
          React.createElement("hr", { className: "horizantalDivider" })
        )
      );
    }
  }]);

  return ContainerTable;
}(Component);

export default ContainerTable;
;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from "react";
import moment from 'moment';
import { cloneDeep, get, isEmpty, find, debounce } from "lodash-es";
import { rowHeaders, metaData, containerFilters, checkBoxFilters, containerHeaderData } from "../../util/constants";
import ContainerTable from "../ContainerTable/index";
import ContainerModal from "../ContainerModal/index";
import Pagination from "../Pagination/index";
import Accordian from "../Accordian/index";
import { portIcon, vesselIcon, containerIcon } from '../../images';
import "./styles.scss";
import FilterDropdown from "../FilterDropdown";

var prevTerminal = "",
    prevName = "";

// const { data, containerDataSample } = sampleResponses;

var ContainerTrackingApp = function (_Component) {
  _inherits(ContainerTrackingApp, _Component);

  function ContainerTrackingApp(props) {
    _classCallCheck(this, ContainerTrackingApp);

    var _this = _possibleConstructorReturn(this, (ContainerTrackingApp.__proto__ || Object.getPrototypeOf(ContainerTrackingApp)).call(this, props));

    _this.filtersSubmitted = function (filterValues) {
      console.log("filtersSubmitted called");
      var selectedTab = document.querySelector(".outerWrapperContainerModal").getAttribute('data-fieldname');
      if (selectedTab === "container") {
        _this.setState({ filterValues: filterValues }, function () {
          _this.getListOfContainers();
        });
      } else {
        _this.setState({ filterValues: filterValues, accordianStateVessels: [false], accordianStatePorts: [false] });
      }
    };

    _this.resetFilters = function () {
      _this.setState({ filterValues: {} }, function () {
        return _this.getListOfContainers();
      });
    };

    _this.convertIsoToDate = function (isoDate) {
      if (isoDate) return moment(isoDate).format("MMM DD, YYYY; HH:MMa").toString();else return "";
    };

    _this.getFilterParams = function (entityId, number, type) {
      var _this$state = _this.state,
          pageNumber = _this$state.pageNumber,
          searchText = _this$state.searchText,
          showDrayageOnly = _this$state.showDrayageOnly,
          historyMode = _this$state.historyMode,
          excludeprocessed = _this$state.excludeprocessed,
          containerData = _this$state.containerData,
          searchOrder = _this$state.searchOrder,
          filterValues = _this$state.filterValues,
          getContainerList = _this.props.getContainerList;


      return [].concat(_toConsumableArray(type === "vessel" && !isEmpty(number) ? [{
        key: "SEARCH_FILTER_ENTITY_VESSEL_IMO",
        value: [number]
      }] : []), _toConsumableArray(type === "port" && !isEmpty(number) ? [{
        key: "SEARCH_FILTER_ENTITY_PORT_UNLOC",
        value: [number]
      }] : []), _toConsumableArray(!isEmpty(entityId) ? [{
        key: "SEARCH_FILTER_ENTITY_IDS",
        value: [entityId]
      }] : []), _toConsumableArray(!isEmpty(searchText) ? [{
        key: "SEARCH_FILTER_ENTITY_ALL",
        value: [searchText]
      }] : []), _toConsumableArray(isEmpty(entityId) && !excludeprocessed && !historyMode ? [{
        key: "SEARCH_FILTER_ENTITY_UNPROCESSED",
        value: ["0"]
      }] : []), _toConsumableArray(excludeprocessed && !historyMode ? [{
        key: "SEARCH_FILTER_ENTITY_UNPROCESSED",
        value: ["1"]
      }, {
        key: "SEARCH_FILTER_ENTITY_IS_DIRTY",
        value: ["1"]
      }, {
        key: "SEARCH_FILTER_ENTITY_ARCHIVED",
        value: ["0"]
      }] : []), _toConsumableArray(historyMode ? [{
        key: "SEARCH_FILTER_ENTITY_ARCHIVED",
        value: ["1"]
      }] : []), _toConsumableArray(showDrayageOnly && !historyMode ? [{
        key: "SEARCH_FILTER_ENTITY_DRAYAGE_ENABLED",
        value: ["1"]
      }] : []), _toConsumableArray(filterValues ? [{
        key: "SEARCH_FILTER_ENTITY_SORT_BY",
        value: [filterValues.sortBy]
      }] : []));
    };

    _this.getListOfContainers = function () {
      var mergeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var entityId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var updatePagination = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var _this$state2 = _this.state,
          pageNumber = _this$state2.pageNumber,
          containerData = _this$state2.containerData,
          searchOrder = _this$state2.searchOrder,
          getContainerList = _this.props.getContainerList;

      _this.setState({ isError: false, isApiCallDone: false });
      var params = {
        filters: _this.getFilterParams(entityId),
        pageNumber: pageNumber,
        searchOrder: {
          direction: searchOrder
        }
      };
      return getContainerList(params).then(function (response) {
        var containerDoneState = _this.state.containerDoneState;

        var containerDataItem = get(response, 'data.eventMessage.list', []);

        containerDataItem.map(function (container, index) {
          if (container.archived) {
            containerDoneState[container.entityId] = true;
          } else {
            containerDoneState[container.entityId] = false;
          }
          _this.setState({ containerDoneState: containerDoneState });
        });

        var totalDirtyRowsCount = get(response, 'data.eventMessage.totalDirtyRowsCount', 0);
        console.log("totalDirtyRowsCount:", totalDirtyRowsCount);
        var mergedItems = containerDataItem;
        _this.setState({ isCount: true });
        if (mergeData) {
          _this.setState({ isCount: false });
          mergedItems = !isEmpty(containerData) && containerData.map(function (item) {
            if (item.entityId === entityId) {
              return containerDataItem[0];
            }
            return item;
          });
        }

        //  mergedItems = containerDataSample;

        var filteredMergedItems = mergedItems.filter(function (el) {
          return el !== undefined;
        });
        if (pageNumber > 1) {
          // this.setState({containerData: [...containerData, ...mergedItems]})
          _this.setState({ containerData: filteredMergedItems });
        } else {
          _this.setState({ containerData: filteredMergedItems });
        }
        _this.setState({
          loading: false,
          isError: false,
          isApiCallDone: true,
          isLoading: false,
          isEnableSpacer: true
        });

        if (updatePagination) _this.setState({
          totalListEl: totalDirtyRowsCount
        });
      }).catch(function (error) {
        console.error('getListOfContainers ERROR', error);
        _this.setState({
          loading: false,
          isError: true,
          isLoading: false,
          isEnableSpacer: false
        });
      });
    };

    _this.handleState = function (key, val) {
      _this.setState(_defineProperty({}, key, val));
    };

    _this.constructAccordianBody = function (_ref, type) {
      var list = _ref.list;
      return list && list.map(function (_ref2, index) {
        var unloc = _ref2.unloc,
            name = _ref2.name,
            containers = _ref2.containers,
            terminal = _ref2.terminal;


        var jsx = React.createElement(
          "div",
          { className: "port_wrapper", "data-imo": unloc, "data-portindex": index },
          type === "vessel" && name !== prevName && React.createElement(
            "div",
            { className: "accordian_internal_heading portName" },
            name
          ),
          (terminal !== prevTerminal || name !== prevName) && React.createElement(
            "div",
            { className: "accordian_internal_heading terminalName" },
            terminal === "TERMINAL_TEMP" ? "TBD" : terminal
          ),
          containers.map(function (containerInfo, index) {
            return _this.renderContainerTable({ containerInfo: containerInfo, index: index, unloc: unloc });
          })
        );

        prevTerminal = terminal;
        prevName = name;
        if (list.length - 1 === index) {
          prevName = "";
          prevTerminal = "";
        }
        return jsx;
      });
    };

    _this.getAccordianBody = function (index, forceUpdate, type) {
      var _this$state3 = _this.state,
          vesselsList = _this$state3.vesselsList,
          portsList = _this$state3.portsList,
          filterValues = _this$state3.filterValues;

      var accordianBodies = type === "vessel" ? _this.state.accordianBodiesVessels : _this.state.accordianBodiesPorts;

      if (forceUpdate || typeof accordianBodies === "undefined" || typeof accordianBodies[index] === "undefined") {
        accordianBodies[index] = React.createElement(Fragment, null);

        var _this$props = _this.props,
            getVesselsLvl2 = _this$props.getVesselsLvl2,
            getPortsLvl2 = _this$props.getPortsLvl2;


        var fetchLevel2 = type === "vessel" ? getVesselsLvl2 : getPortsLvl2;

        fetchLevel2(_this.getFilterParams("", type === "vessel" ? vesselsList[index].imo : portsList[index].unloc, type)).then(function (response) {
          var _this$setState2;

          var list = response.data.eventMessage.list;


          list && list.sort(function (a, b) {
            if (a.name < b.name) return -1;else if (a.name >= b.name) return 1;else {
              if (a.terminal < b.terminal) return -1;else if (a.terminal >= b.terminal) return 1;
              // else {
              //     if (a.shipmentId < b.shipmentId) return -1;
              //     else if (a.shipmentId > b.shipmentId) return 1;
              // }
            }
          });

          accordianBodies[index] = _this.constructAccordianBody({ list: list }, type);
          if (list.length === 0) accordianBodies[index] = React.createElement(
            "p",
            { className: "no_data_msg" },
            "There is no data to display"
          );
          _this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, type === "vessel" ? "accordianBodiesVessels" : "accordianBodiesPorts", accordianBodies), _defineProperty(_this$setState2, "list", list), _this$setState2));
        });
      }
    };

    _this.toggleVesselAccordian = function (index) {
      var accordianStateVessels = _this.state.accordianStateVessels;

      accordianStateVessels[index] = !accordianStateVessels[index];
      _this.setState({ accordianStateVessels: accordianStateVessels });
      // this.forceUpdate();
      if (accordianStateVessels[index]) {
        _this.getAccordianBody(index, true, 'vessel');
      }
    };

    _this.togglePortAccordian = function (index) {
      var accordianStatePorts = _this.state.accordianStatePorts;

      accordianStatePorts[index] = !accordianStatePorts[index];
      _this.setState({ accordianStatePorts: accordianStatePorts });
      // this.forceUpdate();
      if (accordianStatePorts[index]) {
        _this.getAccordianBody(index, true, 'port');
      }
    };

    _this.closeContainerModal = function () {
      return _this.setState({ indexRowClicked: -1 });
    };

    _this.longDateFormatter = function (seconds, entityTimezone) {
      var time = void 0;
      if (!isEmpty(entityTimezone)) {
        time = moment.unix(seconds).tz(entityTimezone).format("MMM DD, YYYY; h:mm a");
      } else {
        time = moment.unix(seconds).format("MMM DD, YYYY; h:mm a");
      }
      if (time === "Invalid date") return null;
      return time;
    };

    _this.shortDateFormatter = function (seconds) {
      var time = moment.unix(seconds).format("MM/DD/YYYY");
      if (time === "Invalid date") return null;
      return time;
    };

    _this.convertEpochToDate = function (epoch) {
      var shortFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var longDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var entityTimezone = arguments[3];

      if (!epoch || epoch === "TBD") return null;
      if (shortFormat) return _this.shortDateFormatter(epoch / 1000);
      if (longDate) return _this.longDateFormatter(epoch / 1000, entityTimezone);
      return _this.dateFormatter(epoch / 1000);
    };

    _this.computeData = function (_ref3) {
      var fieldName = _ref3.fieldName,
          dataType = _ref3.dataType,
          stageInfo = _ref3.stageInfo,
          entityTimezone = _ref3.entityTimezone,
          isMarkDisable = _ref3.isMarkDisable,
          index = _ref3.index;

      //  Todo: adding onclick functionality and other things from containerlist.js file
      var dataList = [];
      var sourceSelected = stageInfo.sourceSelected;
      var tModalTime = stageInfo.tModalTime,
          eModalTime = stageInfo.eModalTime,
          OPSTime = stageInfo.OPSTime,
          OPSTime2 = stageInfo.OPSTime2,
          archived = stageInfo.archived,
          holdStatus = stageInfo.holdStatus,
          eventDescription = stageInfo.eventDescription,
          feesStatus = stageInfo.feesStatus;
      var _ref4 = [_this.convertEpochToDate(tModalTime, false, true, entityTimezone), _this.convertEpochToDate(eModalTime, false, true, entityTimezone), _this.convertEpochToDate(OPSTime, false, true, entityTimezone), _this.convertEpochToDate(OPSTime2, false, true, entityTimezone)],
          humanReadableTModalTime = _ref4[0],
          humanReadableEModalTime = _ref4[1],
          humanReadableOPSTime = _ref4[2],
          humanReadableOPSTime2 = _ref4[3];


      switch (fieldName) {

        case 'grounded':
          if (sourceSelected === 'ENTITY_SOURCE_NONE') {
            if (!isEmpty(tModalTime)) {
              dataList.push(humanReadableTModalTime.concat(' (T)'));
            }
            if (!isEmpty(eModalTime)) {
              dataList.push(humanReadableEModalTime.concat(' (E)'));
            }
          } else if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push(humanReadableOPSTime.concat(' (K)'));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }
          return { dataList: dataList, sourceSelected: sourceSelected };

        case 'customReleased':
          if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push(humanReadableOPSTime.concat(' (K)'));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }
          return { dataList: dataList, sourceSelected: sourceSelected };
        case 'carrierReleased':
          if (sourceSelected === 'ENTITY_SOURCE_NONE' && !archived && !isMarkDisable) {
            if (!isEmpty(tModalTime)) {
              dataList.push(humanReadableTModalTime.concat(' (T)'));
            }
            if (!isEmpty(eModalTime)) {
              dataList.push(humanReadableEModalTime.concat(' (E)'));
            }
          } else if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push(humanReadableOPSTime.concat(' (K)'));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }
          return { dataList: dataList, sourceSelected: sourceSelected };
        case 'holds':
          if (holdStatus === 'NO_HOLD') {
            dataList.push('No hold');
          } else if (holdStatus === 'HOLD_REMOVED') {
            dataList.push('Hold removed');
          } else {
            dataList.push('');
          }
          if (!isEmpty(eventDescription)) {
            dataList.push(eventDescription);
          }
          return { dataList: dataList, sourceSelected: holdStatus };
        case 'fees':
          if (feesStatus === 'NO_DUES') {
            dataList.push('No dues');
          } else if (feesStatus === 'FEES_PAID') {
            dataList.push('Fees paid');
          } else {
            dataList.push('');
          }
          if (!isEmpty(eventDescription)) {
            dataList.push(eventDescription);
          }
          return { dataList: dataList, sourceSelected: feesStatus };
        case 'readyForPickup':
          if (sourceSelected === 'ENTITY_SOURCE_NONE') {
            if (!isEmpty(humanReadableOPSTime)) {
              dataList.push(humanReadableOPSTime);
            }
            if (!isEmpty(tModalTime)) {
              dataList.push(humanReadableTModalTime.concat(' (T)'));
            }
            if (!isEmpty(eModalTime)) {
              dataList.push(humanReadableEModalTime.concat(' (E)'));
            }
          } else if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push('Ops: '.concat(humanReadableOPSTime));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }
          if (!isEmpty(OPSTime2)) {
            dataList.push('Dem: '.concat(humanReadableOPSTime2));
          }
          return { dataList: dataList, sourceSelected: sourceSelected };

        case 'terminalPickupAppointment':
          if (sourceSelected === 'ENTITY_SOURCE_NONE') {
            if (!isEmpty(tModalTime)) {
              dataList.push(humanReadableTModalTime.concat(' (T)'));
            }
            if (!isEmpty(eModalTime)) {
              dataList.push(humanReadableEModalTime.concat(' (E)'));
            }
          } else if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push(humanReadableOPSTime.concat(' (K)'));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }

          return { dataList: dataList, sourceSelected: sourceSelected };

        case 'gateOut':
          // sGateOutEnable && (!archived && !isMarkDisable) => this check missing
          if (sourceSelected === 'ENTITY_SOURCE_NONE') {
            if (!isEmpty(humanReadableOPSTime)) {
              dataList.push(humanReadableOPSTime);
            }
            if (!isEmpty(tModalTime)) {
              dataList.push(humanReadableTModalTime.concat(' (T)'));
            }
            if (!isEmpty(eModalTime)) {
              dataList.push(humanReadableEModalTime.concat(' (E)'));
            }
          } else if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push('Ops: '.concat(humanReadableOPSTime));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }
          if (!isEmpty(OPSTime2)) {
            dataList.push('PD: '.concat(humanReadableOPSTime2));
          }
          return { dataList: dataList, sourceSelected: sourceSelected };

        case 'terminalDropAppointment':
          if (sourceSelected === 'ENTITY_SOURCE_NONE') {
            if (!isEmpty(tModalTime)) {
              dataList.push(humanReadableTModalTime.concat(' (T)'));
            }
            if (!isEmpty(eModalTime)) {
              dataList.push(humanReadableEModalTime.concat(' (E)'));
            }
          } else if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push(humanReadableOPSTime.concat(' (K)'));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }
          return { dataList: dataList, sourceSelected: sourceSelected };

        case 'warehouseDropAppointment':
          if (sourceSelected === 'ENTITY_SOURCE_NONE') {
            if (!isEmpty(tModalTime)) {
              dataList.push(humanReadableTModalTime.concat(' (T)'));
            }
            if (!isEmpty(eModalTime)) {
              dataList.push(humanReadableEModalTime.concat(' (E)'));
            }
          } else if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push(humanReadableOPSTime.concat(' (K)'));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }
          return { dataList: dataList, sourceSelected: sourceSelected };

        case 'warehousePickupAppointment':
          if (sourceSelected === 'ENTITY_SOURCE_NONE') {
            if (!isEmpty(tModalTime)) {
              dataList.push(humanReadableTModalTime.concat(' (T)'));
            }
            if (!isEmpty(eModalTime)) {
              dataList.push(humanReadableEModalTime.concat(' (E)'));
            }
          } else if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push(humanReadableOPSTime.concat(' (K)'));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }
          return { dataList: dataList, sourceSelected: sourceSelected };

        case 'gateIn':
          // line775 => this check missing
          if (sourceSelected === 'ENTITY_SOURCE_NONE') {
            if (!isEmpty(tModalTime)) {
              dataList.push(humanReadableTModalTime.concat(' (T)'));
            }
            if (!isEmpty(eModalTime)) {
              dataList.push(humanReadableEModalTime.concat(' (E)'));
            }
          } else if (sourceSelected === 'OPS' && !isEmpty(humanReadableOPSTime)) {
            dataList.push(humanReadableOPSTime.concat(' (K)'));
          } else if (sourceSelected === 'TMODAL' && !isEmpty(humanReadableTModalTime)) {
            dataList.push(humanReadableTModalTime.concat(' (T)'));
          } else if (sourceSelected === 'EMODAL' && !isEmpty(humanReadableEModalTime)) {
            dataList.push(humanReadableEModalTime.concat(' (E)'));
          }
          return { dataList: dataList, sourceSelected: sourceSelected };

        case 'purchaseOrder':
          dataList.push(stageInfo[fieldName] && stageInfo[fieldName].replace(/,/g, ", "));
          return { dataList: dataList };
        case 'shipmentId':

        case 'carrierName':
        case 'finalDelivery':
        case 'masterBolNumber':
        case 'bolDocNumber':
        case 'seal':
          dataList.push(stageInfo[fieldName]);
          return { dataList: dataList };
        case 'eta':

        case 'berthed':
          dataList.push(_this.convertEpochToDate(stageInfo[fieldName], false, true, entityTimezone));
          return { dataList: dataList };
        case 'arrivalNoticeReceived':
        case 'doCreated':
        case 'doPublished':
          dataList.push(_this.convertIsoToDate(stageInfo[fieldName]));
          return { dataList: dataList };
        default:
          return { dataList: dataList, sourceSelected: sourceSelected };
      }
    };

    _this.getCurrentTime = function (containerId) {
      var time = new Date().getTime();
      var convertedTime = _this.convertEpochToDate(time);

      console.log("containerId", containerId);

      var doneTime = _this.state.doneTime;

      doneTime[containerId] = convertedTime;
      _this.setState({ doneTime: doneTime });
    };

    _this.renderLoader = function () {
      return React.createElement(
        "div",
        { className: "loading" },
        "  Loading... "
      );
    };

    _this.renderContainerTable = function (_ref5) {
      var containerInfo = _ref5.containerInfo,
          index = _ref5.index,
          unloc = _ref5.unloc;
      var isMarkDisable = _this.props.isMarkDisable,
          _this$state4 = _this.state,
          indexRowClicked = _this$state4.indexRowClicked,
          selectedFilter = _this$state4.selectedFilter,
          selectedPort = _this$state4.selectedPort,
          containerDoneState = _this$state4.containerDoneState,
          doneTime = _this$state4.doneTime,
          _containerInfo$entity = containerInfo.entityTimezone,
          entityTimezone = _containerInfo$entity === undefined ? '' : _containerInfo$entity,
          entityId = containerInfo.entityId,
          sealNumber = containerInfo.sealNumber,
          lfd = containerInfo.lfd,
          holds = containerInfo.holds,
          fees = containerInfo.fees,
          archived = containerInfo.archived,
          entityType = containerInfo.entityType,
          entityShipmentList = containerInfo.entityShipmentList,
          done = containerInfo.done,
          shipmentIds = containerInfo.shipmentIds;
      var _ref6 = [cloneDeep(rowHeaders), cloneDeep(metaData), cloneDeep(containerHeaderData)],
          rowHeadersCopy = _ref6[0],
          metaHeadersCopy = _ref6[1],
          containerHeaderCopy = _ref6[2];
      // console.log({ containerInfo });

      rowHeadersCopy.forEach(function (_ref7, index2, arr) {
        var fieldName = _ref7.fieldName,
            dataType = _ref7.dataType;

        var stageInfo = containerInfo[fieldName];
        if (!isEmpty(stageInfo)) {
          var _this$computeData = _this.computeData({ fieldName: fieldName, dataType: dataType, stageInfo: stageInfo, entityTimezone: entityTimezone, isMarkDisable: isMarkDisable, index: index }),
              dataList = _this$computeData.dataList,
              sourceSelected = _this$computeData.sourceSelected;

          arr[index2].dataList = dataList;
          arr[index2].eModalTime = stageInfo.eModalTime;
          arr[index2].tModalTime = stageInfo.tModalTime;
          arr[index2].status = sourceSelected;
        }
      });
      metaHeadersCopy.forEach(function (_ref8, index, arr) {
        var fieldName = _ref8.fieldName,
            dataType = _ref8.dataType;

        var stageInfo = entityShipmentList[0];
        if (!isEmpty(stageInfo)) {
          var _this$computeData2 = _this.computeData({ fieldName: fieldName, dataType: dataType, stageInfo: stageInfo, entityTimezone: entityTimezone, isMarkDisable: isMarkDisable }),
              dataList = _this$computeData2.dataList;

          arr[index].dataList = dataList;
        }
      });

      containerHeaderCopy.forEach(function (_ref9, index, arr) {
        var label = _ref9.label,
            fieldName = _ref9.fieldName;

        var fieldValue = containerInfo[fieldName];
        if (fieldName === "customer" && fieldValue) fieldValue = fieldValue.split('@')[0];
        arr[index].value = fieldValue;
      });

      var groundedSource = find(rowHeadersCopy, { fieldName: 'grounded' });
      var isSourceSelected = !isEmpty(groundedSource) && groundedSource.status !== 'ENTITY_SOURCE_NONE';
      console.log({ selectedPort: selectedPort, unloc: unloc, index: index });
      var allShipmentInfo = entityShipmentList;
      // console.log("metaHeadersCopy", metaHeadersCopy)


      return React.createElement(
        "div",
        {
          className: (indexRowClicked === index && (selectedFilter === 'vessel' && selectedPort === unloc ? 'containerWrapper ' : false) ? 'containerWrapper ' : '') + "containerRowDisplay flexDisplay" + (archived || containerDoneState[entityId] ? ' is-disable' : '')
          // className="flexDisplay"
          , onClick: function onClick() {
            return !archived && _this.setState({ rowClicked: true, indexRowClicked: index, selectedPort: selectedFilter !== 'container' && unloc });
          }
          // onMouseOver={() => this.setState({ childHovered: true })}
          // onMouseOut={()=> this.setState({ childHovered: false })}
        },
        React.createElement(
          "div",
          { className: "leftSideDrayageContainer" },
          entityId,
          React.createElement("hr", { className: "horizantalRuler" }),
          sealNumber && React.createElement(
            "div",
            { className: "labelInfo blackLabel" },
            "SEAL: ",
            sealNumber
          ),
          lfd && React.createElement(
            "div",
            { className: "labelInfo " + (lfd < 0 ? 'failureBackground' : 'successBackground') + " lfd_label" },
            lfd,
            " LFD"
          ),
          React.createElement(
            "p",
            { className: "undo-action", onClick: function onClick(e) {

                _this.undoLastAction(e, { entityId: entityId, shipmentIds: shipmentIds, eventName: "", entityType: entityType, eventDescription: "", sourceSelected: "OPS", selectedTime: new Date().getTime() });
              } },
            "UNDO LAST ACTION"
          ),
          done.sourceSelected === 'ENTITY_SOURCE_NONE' && containerInfo.archived === undefined && containerDoneState[entityId] === false ? React.createElement(
            "p",
            { className: "mark-as-done", onClick: function onClick(e) {
                var containerDoneState = _this.state.containerDoneState;

                containerDoneState[entityId] = true;
                _this.setState({ containerDoneState: containerDoneState });

                _this.markDonetriggerApiCall(e, { entityId: entityId, entityType: entityType, eventName: done.eventName, eventCode: "", eventDescription: "", sourceSelected: "OPS", selectedTime: new Date().getTime() });
              } },
            "MARK AS DONE"
          ) : React.createElement(
            "div",
            { className: "done-date" },
            "Marked done on:",
            React.createElement("br", null),
            React.createElement(
              "div",
              { className: "date" },
              doneTime[entityId] || _this.convertEpochToDate(done.OPSTime)
            )
          )
        ),
        React.createElement(ContainerTable, {
          tableData: rowHeadersCopy,
          data: containerHeaderCopy,
          isSourceSelected: isSourceSelected,
          entityId: entityId,
          holds: holds,
          handleParentState: _this.handleState,
          archived: archived,
          fees: fees,
          containerInfo: containerInfo,
          entityTimezone: entityTimezone,
          entityType: entityType,
          showContainerModal: indexRowClicked !== -1,
          metaData: metaHeadersCopy,
          allShipmentInfo: allShipmentInfo
        })
      );
    };

    _this.renderVessels = function () {
      var _this$state5 = _this.state,
          accordianStateVessels = _this$state5.accordianStateVessels,
          loadingAccordian = _this$state5.loadingAccordian,
          accordianBodiesVessels = _this$state5.accordianBodiesVessels;
      var vesselsList = _this.state.vesselsList;


      return vesselsList && vesselsList.map(function (_ref10, index) {
        var imo = _ref10.imo,
            name = _ref10.name;


        return React.createElement(Accordian, {
          accordianTitle: name + " (" + imo + ")",
          accordianBody: accordianStateVessels[index] && accordianBodiesVessels[index],
          accordianState: accordianStateVessels[index],
          index: index,
          toggleAccordian: _this.toggleVesselAccordian,
          loading: loadingAccordian[index],
          shipmentCount: 2,
          additionalBodyClass: "blockDisplay"
        });
      });
    };

    _this.renderPorts = function () {
      var _this$state6 = _this.state,
          accordianStatePorts = _this$state6.accordianStatePorts,
          loadingAccordian = _this$state6.loadingAccordian,
          accordianBodiesPorts = _this$state6.accordianBodiesPorts;
      var portsList = _this.state.portsList;


      return portsList && portsList.map(function (_ref11, index) {
        var name = _ref11.name,
            unloc = _ref11.unloc;


        return React.createElement(Accordian, {
          accordianTitle: name + " (" + unloc + ")",
          accordianBody: accordianStatePorts[index] && accordianBodiesPorts[index],
          accordianState: accordianStatePorts[index],
          index: index,
          toggleAccordian: _this.togglePortAccordian,
          loading: loadingAccordian[index],
          shipmentCount: 2,
          additionalBodyClass: "blockDisplay"
        });
      });
    };

    _this.nextContainer = function (params) {
      var _this$state7 = _this.state,
          pageNumber = _this$state7.pageNumber,
          totalListEl = _this$state7.totalListEl;

      var totalPage = Math.ceil(totalListEl / 25);

      if (pageNumber < totalPage && params === "next") {
        _this.setState({ pageNumber: pageNumber + 1 }, function () {
          _this.getListOfContainers(false, '');
        });
      }
      if (pageNumber > 1 && params === "prev") {
        _this.setState({ pageNumber: pageNumber - 1 }, function () {
          _this.getListOfContainers(false, '');
        });
      }
    };

    _this.filterChangeHandler = function (_ref12) {
      var fieldName = _ref12.fieldName;


      _this.setState({ selectedFilter: fieldName });

      document.querySelector(".outerWrapperContainerModal").setAttribute('data-fieldname', fieldName);
      document.querySelector(".container-pagination") && document.querySelector(".container-pagination").setAttribute('data-fieldname', fieldName);

      if (fieldName == "vessel" || fieldName == "port") {
        _this.fetchVesselsPortsLvl1(fieldName);
      }
    };

    _this.fetchVesselsPortsLvl1 = function (tabType) {
      var getVesselsPortsLvl1 = _this.props.getVesselsPortsLvl1;


      var filters = [];
      _this.getFilterParams("").map(function (filter) {
        if (filter.key === "SEARCH_FILTER_ENTITY_SORT_BY") return;
        filters.push(filter);
      });

      getVesselsPortsLvl1(filters, tabType).then(function (response) {
        var _response$data$eventM = response.data.eventMessage,
            vessels = _response$data$eventM.vessels,
            ports = _response$data$eventM.ports;

        _this.setState({ vesselsList: vessels, portsList: ports });

        Array.from(document.querySelectorAll(".accordian_item_header .minus.square.outline.icon")).forEach(function (element, index) //Change all minus to plus
        {
          element.classList.remove("minus");
          element.classList.add("plus");
        });
      });
    };

    _this.renderFilter = function (_ref13) {
      var displayName = _ref13.displayName,
          alt = _ref13.alt,
          fieldName = _ref13.fieldName,
          selectedFilter = _ref13.selectedFilter;
      return React.createElement(
        "div",
        {
          className: "filter" + (selectedFilter === fieldName ? ' selectedFilter' : ''),
          onClick: function onClick() {
            return _this.filterChangeHandler({ fieldName: fieldName });
          }
        },
        React.createElement("img", {
          src: fieldName === 'vessel' ? vesselIcon : fieldName === 'container' ? containerIcon : fieldName === 'port' ? portIcon : '',
          alt: alt,
          className: "imgStyle " + fieldName
        }),
        React.createElement(
          "div",
          { className: "textStyle" },
          displayName
        )
      );
    };

    _this.renderContainerFilters = function (_ref14) {
      var selectedFilter = _ref14.selectedFilter;
      return containerFilters.map(function (_ref15) {
        var displayName = _ref15.displayName,
            fieldName = _ref15.fieldName,
            alt = _ref15.alt;
        return _this.renderFilter({ displayName: displayName, alt: alt, fieldName: fieldName, selectedFilter: selectedFilter });
      });
    };

    _this.resetSearchFilter = function () {
      // document.getElementById('search-select-box').selectedIndex = "0";
      _this.setState({ isDropDownFilter: '', searchText: '', pageNumber: 1 });
    };

    _this.loadInitialFilter = function () {
      _this.resetSearchFilter();
      setTimeout(function () {
        _this.getListOfContainers(false, "");
      }, 1000);
    };

    _this.keyPress = function (event) {
      var _this$state8 = _this.state,
          searchText = _this$state8.searchText,
          selectedFilter = _this$state8.selectedFilter;

      if (event.keyCode === 13 && searchText.length > 3) {
        _this.setState({ pageNumber: 1, searchText: searchText, accordianStateVessels: [false], accordianStatePorts: [false] }, function () {
          if (!isEmpty(searchText)) {

            if (selectedFilter === "container") _this.getListOfContainers();else _this.fetchVesselsPortsLvl1(selectedFilter);
          }
        });
      }
    };

    _this.updateSearch = function (_ref16) {
      var _ref16$searchText = _ref16.searchText,
          searchText = _ref16$searchText === undefined ? '' : _ref16$searchText;
      var selectedFilter = _this.state.selectedFilter;

      var search = new String(searchText);
      if (search.length > 3) {
        if (selectedFilter === "container") _this.getListOfContainers();else _this.fetchVesselsPortsLvl1(selectedFilter);
      }
      if (search.length === 0) {
        _this.resetSearchFilter();

        if (selectedFilter === "container") _this.getListOfContainers(false, "");else _this.fetchVesselsPortsLvl1(selectedFilter);
      }
      _this.setState({ pageNumber: 1 });
    };

    _this.searchHandle = function (_ref17) {
      var value = _ref17.target.value;

      var searchText = value.trim();

      _this.setState({ searchText: searchText, accordianStateVessels: [false], accordianStatePorts: [false] });
      _this.updateSearch({ searchText: searchText });
    };

    _this.renderCheckBoxes = function (_ref18) {
      var searchText = _ref18.searchText;

      return React.createElement(
        "div",
        { className: "check-container" },
        checkBoxFilters.map(function (_ref19) {
          var labelName = _ref19.labelName,
              fieldName = _ref19.fieldName;
          return React.createElement(
            "div",
            { className: "checkBoxFilter" },
            React.createElement("input", {
              type: "checkbox",
              onChange: function onChange(_ref20) {
                var checked = _ref20.target.checked;

                _this.setState(_defineProperty({}, fieldName, checked), function () {
                  return _this.updateSearch({ searchText: searchText });
                });
              },
              disabled: fieldName === "excludeprocessed" && _this.state.historyMode || fieldName === "showDrayageOnly" && _this.state.historyMode,
              defaultChecked: fieldName === "excludeprocessed"
            }),
            React.createElement(
              "label",
              { className: "labelStyle" },
              labelName
            )
          );
        })
      );
    };

    _this.undoLastAction = function (e, params) {
      var undoEntityEvent = _this.props.undoEntityEvent;
      var entityId = params.entityId;

      e.preventDefault();
      e.stopPropagation();
      _this.setState({ entityId: entityId });
      undoEntityEvent(params).then(function () {
        _this.getListOfContainers(true, entityId, false);
        _this.setState({ isMarkDisable: false });
      });
    };

    _this.markDonetriggerApiCall = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var params = arguments[1];

      e.preventDefault();
      e.stopPropagation();
      _this.setState({ isMarkDone: false, isNewLoading: true, showGroundPopuop: false, isHoldsStuck: false, isFeesStuck: false, showLineReleasePopuop: false, showReadyPickup: false, showGateOut: false, showGateIn: false });

      var apiParamData = _extends({}, params);
      return _this.props.getEntityTime(apiParamData).then(function (response) {
        // markAsDone(apiParamData.entityId);
        _this.setState({
          isMarkDisable: true, selectedDate: null, loading: false, isNewLoading: false
        });
        _this.getCurrentTime(apiParamData.entityId);
      }).catch(function (error) {

        _this.setState({
          isMarkDisable: false, selectedDate: null, loading: false, isNewLoading: false
        });
      });
    };

    _this.renderSearchHeader = function (_ref21) {
      var searchText = _ref21.searchText,
          selectedFilter = _ref21.selectedFilter;
      return React.createElement(
        "div",
        { className: "container-app" },
        React.createElement(
          "div",
          { className: "container-header", onClick: function onClick() {
              return _this.setState({ indexRowClicked: -1 });
            } },
          React.createElement(
            "div",
            { className: "container-header-sec" },
            React.createElement(
              "div",
              { className: "flexDisplay spaceInBetween" },
              React.createElement(
                "div",
                { className: "flexDisplay containerFiltersWrapper" },
                _this.renderContainerFilters({ selectedFilter: selectedFilter })
              ),
              React.createElement(
                "div",
                { className: "processed-checkbox-search" },
                _this.renderCheckBoxes({ searchText: searchText }),
                React.createElement(
                  "div",
                  { className: "search-container right labeled " },
                  React.createElement(
                    "div",
                    { className: "search-field ui input" },
                    React.createElement(
                      "span",
                      { className: "search-close-icon" },
                      " ",
                      React.createElement("i", {
                        className: "times icon",
                        onClick: function onClick() {
                          _this.loadInitialFilter();
                        }
                      }),
                      " "
                    ),
                    React.createElement("input", { type: "text", value: searchText, onKeyDown: _this.keyPress, onChange: _this.searchHandle, placeholder: "Enter min four character" }),
                    React.createElement(
                      "span",
                      { className: "search-search-icon", onClick: !isEmpty(searchText) && _this.loadInitialFilter },
                      " ",
                      React.createElement("i", { className: "search icon" }),
                      " "
                    )
                  )
                )
              )
            )
          )
        )
      );
    };

    _this.state = {
      loading: true,
      isError: false,
      searchText: '',
      searchOrder: 'ASC',
      isEnableSpacer: false,
      isDropDownFilter: "",
      // searchDropDownFilter: "NONE",
      scrollTop: 0,
      pageNumber: 1,
      totalCount: null,
      totalListEl: 0,
      isApiCallDone: true,
      isLoading: false,
      isCount: false,
      isexcludeprocessedChecked: true,
      historyMode: false,
      showDrayageOnly: false,
      excludeprocessed: true,
      prevCounter: 0,
      resetClicked: false,
      indexRowClicked: -1,
      rowClicked: false,
      isMarkDisable: false,
      selectedFilter: 'container',
      accordianStateVessels: [false],
      accordianBodiesVessels: [],
      accordianStatePorts: [false],
      accordianBodiesPorts: [],
      loadingAccordian: [false],
      containerDoneState: [false],
      list: [],
      vesselsList: [],
      portsList: [],
      filterValues: { sortBy: "PROCESSING_TIME" },
      doneTime: []
    };
    _this.updateSearch = debounce(_this.updateSearch, 1000);
    return _this;
  }

  _createClass(ContainerTrackingApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getListOfContainers();
    }

    // dropDownFilterHandler = ({ target: { value }}) => {
    //   this.setState({ searchDropDownFilter: value });
    // };

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          getEntityTime = _props.getEntityTime,
          undoEntityEvent = _props.undoEntityEvent,
          _state = this.state,
          pageNumber = _state.pageNumber,
          totalListEl = _state.totalListEl,
          indexRowClicked = _state.indexRowClicked,
          loading = _state.loading,
          isEnableSpacer = _state.isEnableSpacer,
          isError = _state.isError,
          searchText = _state.searchText,
          selectedFilter = _state.selectedFilter,
          containerData = _state.containerData,
          list = _state.list,
          selectedPort = _state.selectedPort;


      return React.createElement(
        Fragment,
        null,
        this.renderSearchHeader({ searchText: searchText, selectedFilter: selectedFilter }),
        console.log("totalListEl:", totalListEl),
        totalListEl > 0 && React.createElement(Pagination, { pageNumber: pageNumber, entitiesCount: totalListEl, pageChangeHandler: this.nextContainer }),
        React.createElement(
          "div",
          { className: "outerWrapperContainerModal", "data-fieldname": "container" },
          React.createElement(FilterDropdown, {
            filtersSubmitted: this.filtersSubmitted,
            resetFilters: this.resetFilters,
            filterValues: this.state.filterValues,
            resetClicked: this.state.resetClicked,
            setResetClicked: function setResetClicked(val) {
              // this.setState({"resetClicked": val})
            },
            type: "container_app"
          }),
          React.createElement(
            "div",
            { className: "container-modal", id: "container-modal" },
            React.createElement(
              "h1",
              { className: "container_heading" },
              "CONTAINER HOLD / ISSUES"
            ),
            React.createElement(
              "h1",
              { className: "vessel_heading" },
              "VESSELS"
            ),
            React.createElement(
              "h1",
              { className: "port_heading" },
              "PORTS"
            ),
            indexRowClicked !== -1 && React.createElement(ContainerModal
            // undoEntityEvent={undoEntityEvent}
            , { selectedFilter: selectedFilter,
              selectedContainerInfo: selectedFilter === 'container' ? containerData[indexRowClicked] : selectedFilter === 'vessel' ? find(list, { unloc: selectedPort }) && find(list, { unloc: selectedPort }).containers[indexRowClicked] : find(list, { unloc: selectedPort }) && find(list, { unloc: selectedPort }).containers[indexRowClicked]
              // ^^ TODO: Might need change for port
              // isDrayageEnabled={getDrayAgeEnabled(containerData[indexRowClicked])}
              , rowHeaders: rowHeaders,
              convertEpochToDate: this.convertEpochToDate,
              getEntityTime: getEntityTime,
              getListOfContainers: this.getListOfContainers,
              handleParentState: this.handleState,
              closeContainerModal: this.closeContainerModal,
              indexRowClicked: indexRowClicked,
              getAccordianBody: this.getAccordianBody
              // markAsDone={(containerId)=> {
              //   let { state: { containerDoneState } } = this;
              //   containerDoneState[containerId] = true;
              //   this.setState({ containerDoneState });
              //   console.log("containerDoneState", containerDoneState, containerId)
              // }}
            }),
            console.log("containerData", containerData),
            loading ? this.renderLoader() : React.createElement(
              "div",
              null,
              selectedFilter === 'container' ? containerData.map(function (containerInfo, index) {
                return _this2.renderContainerTable({ containerInfo: containerInfo, index: index });
              }) : selectedFilter === 'vessel' ? this.renderVessels() : this.renderPorts()
            ),
            !loading && !isError && selectedFilter === 'container' && containerData && containerData.length === 0 ? React.createElement(
              "div",
              { className: "error", style: { textAlign: "center", fontSize: "18px" } },
              "  No more container events to process, search to see existing containers "
            ) : null,
            !loading && isError && React.createElement(
              "div",
              { style: { textAlign: "center", fontSize: "18px" } },
              " There was an error retrieving containers information. "
            ),
            !isEnableSpacer && React.createElement(
              "div",
              { style: { height: "50px" } },
              ' '
            )
          )
        )
      );
    }
  }]);

  return ContainerTrackingApp;
}(Component);

export default ContainerTrackingApp;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import "./index.scss";
import { Dropdown, Input, Button } from 'semantic-ui-react';
import _ from 'lodash';

var FilterDropdown = function (_React$Component) {
    _inherits(FilterDropdown, _React$Component);

    function FilterDropdown(props) {
        _classCallCheck(this, FilterDropdown);

        var _this = _possibleConstructorReturn(this, (FilterDropdown.__proto__ || Object.getPrototypeOf(FilterDropdown)).call(this, props));

        _this.componentDidUpdate = function () {
            if (_this.props.resetClicked) {
                _this.setState({ filterValues: {} });
                _this.props.setResetClicked(false);
            }
        };

        _this.handleFilterActivation = function (e, filterId) {
            e.stopPropagation();
            var el = document.querySelector(".drayage_filter_" + filterId);
            if (window.getComputedStyle(el).display === 'block') {
                el.style.display = "none";
                var filterValues = _this.state.filterValues;

                var filters = _extends({}, filterValues);
                delete filters[filterId];
                filters[filterId] = "";
                console.log("filters1", filters);
                _this.setState({ filterValues: filters });
            } else {
                el.style.display = "block";
            }
        };

        _this.handleFilterChange = function (filterId, value, eta) {
            console.log("filter id:", filterId);
            console.log("value:", value);
            // console.log("eta==",eta);
            if (eta === "beforeInc") {
                _this.setState({ etdbefore: _this.state.etdbefore + 1 });
            } else if (eta === "beforeDec") {
                _this.setState({ etdbefore: _this.state.etdbefore - 1 });
            } else {
                _this.setState({ etdbefore: _this.state.etdbefore });
            }

            var filterValues = _this.state.filterValues;

            var filters = _extends({}, filterValues);
            delete filters[filterId];
            filters[filterId] = value;
            console.log("filters2", filters);
            _this.setState({ filterValues: filters });
            _this.props.setResetClicked(false);
        };

        console.log("props.filterValues", props.filterValues);
        _this.state = {
            filterValues: _extends({}, props.filterValues),
            etdbefore: 14,
            eatAfter: 14
        };
        return _this;
    }

    _createClass(FilterDropdown, [{
        key: 'render',

        // IncrementItem = (e) => {
        //     e.stopPropagation();
        //     this.setState({ etdbefore: this.state.etdbefore + 1 });
        //     //this.setState({filterValues:{...this.state.filterValues,etdBefore:""}})
        // }
        // DecreaseItem = (e) => {
        //     e.stopPropagation();
        //         this.setState({ etdbefore: this.state.etdbefore - 1 });
        // }

        // IncrementItemAfter = (e,filterId) => {
        //     e.stopPropagation();
        //     this.setState({ eatAfter: this.state.eatAfter + 1 });
        // }
        // DecreaseItemAfter = (e,filterId) => {
        //     e.stopPropagation();
        //         this.setState({ eatAfter: this.state.eatAfter - 1 });
        // }
        // ToggleClick = (e) => {
        //     e.stopPropagation();
        //     this.setState({ ...this.state,show: !this.state.show });
        //     // this.setState({filterValues:{...this.state.filterValues,etdBefore:""}})
        // }


        value: function render() {
            var _this2 = this;

            var filterValues = this.state.filterValues;
            var type = this.props.type;


            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    Dropdown,
                    {
                        text: type !== "container_app" ? 'Filters' : "Sorting",
                        floating: true,
                        labeled: true,
                        className: 'icon drayage_filter_dropdown',
                        onClick: function onClick(e) {
                            e.stopPropagation();
                        }
                    },
                    React.createElement(
                        Dropdown.Menu,
                        null,
                        type !== "container_app" ? React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(Dropdown.Item, {
                                text: 'Shipment ID',
                                onClick: function onClick(e) {
                                    return _this2.handleFilterActivation(e, "shipmentId");
                                }
                            }),
                            React.createElement(Input, { icon: 'search', iconPosition: 'left', name: 'shipmentId', className: 'drayage_filter drayage_filter_shipmentId', placeholder: 'Shipment ID',
                                onClick: function onClick(e) {
                                    return e.stopPropagation();
                                },
                                onChange: function onChange(e) {
                                    return _this2.handleFilterChange("shipmentId", e.target.value);
                                },
                                value: filterValues.shipmentId ? filterValues.shipmentId : ""
                            }),
                            React.createElement(Dropdown.Divider, null),
                            React.createElement(Dropdown.Item, {
                                text: 'Customer',
                                onClick: function onClick(e) {
                                    return _this2.handleFilterActivation(e, "customer");
                                }
                            }),
                            React.createElement(Input, { icon: 'search', iconPosition: 'left', name: 'customer', className: ' drayage_filter drayage_filter_customer', placeholder: 'Customer',
                                onClick: function onClick(e) {
                                    return e.stopPropagation();
                                },
                                onChange: function onChange(e) {
                                    return _this2.handleFilterChange("customer", e.target.value);
                                },
                                value: filterValues.customer ? filterValues.customer : ""
                            }),
                            React.createElement(Dropdown.Divider, null),
                            React.createElement(Dropdown.Item, {
                                text: 'IMO',
                                onClick: function onClick(e) {
                                    return _this2.handleFilterActivation(e, "imo");
                                }
                            }),
                            React.createElement(Input, { name: 'imo', className: ' drayage_filter drayage_filter_imo', placeholder: 'IMO',
                                onClick: function onClick(e) {
                                    return e.stopPropagation();
                                },
                                onChange: function onChange(e) {
                                    return _this2.handleFilterChange("imo", e.target.value);
                                },
                                value: filterValues.imo ? filterValues.imo : ""
                            }),
                            React.createElement(Dropdown.Divider, null),
                            React.createElement(Dropdown.Item, {
                                text: 'Port',
                                onClick: function onClick(e) {
                                    return _this2.handleFilterActivation(e, "port");
                                }
                            }),
                            React.createElement(Input, { icon: 'search', iconPosition: 'left', name: 'port', className: ' drayage_filter drayage_filter_port', placeholder: 'Port',
                                onClick: function onClick(e) {
                                    return e.stopPropagation();
                                },
                                onChange: function onChange(e) {
                                    return _this2.handleFilterChange("port", e.target.value);
                                },
                                value: filterValues.port ? filterValues.port : ""
                            }),
                            React.createElement(Dropdown.Divider, null),
                            React.createElement(Dropdown.Item, {
                                text: 'Vessel Name',
                                onClick: function onClick(e) {
                                    return _this2.handleFilterActivation(e, "vesselName");
                                }
                            }),
                            React.createElement(Input, { icon: 'search', iconPosition: 'left', name: 'vesselName', className: ' drayage_filter drayage_filter_vesselName', placeholder: 'Vessel Name',
                                onClick: function onClick(e) {
                                    return e.stopPropagation();
                                },
                                onChange: function onChange(e) {
                                    return _this2.handleFilterChange("vesselName", e.target.value);
                                },
                                value: filterValues.vesselName ? filterValues.vesselName : ""

                            })
                        ) : React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(Dropdown.Item, {
                                text: 'Sort By',
                                onClick: function onClick(e) {
                                    return _this2.handleFilterActivation(e, "sortBy");
                                }
                            }),
                            React.createElement(
                                'div',
                                { className: 'input drayage_filter drayage_filter_sortBy' },
                                React.createElement(
                                    'label',
                                    { className: 'checkbox_label' },
                                    'Processing Time',
                                    React.createElement('input', {
                                        name: 'sortBy',
                                        type: 'radio',
                                        value: 'PROCESSING_TIME'
                                        // value={filterValues.sortBy === "processingTime"}
                                        , onClick: function onClick(e) {
                                            return e.stopPropagation();
                                        },
                                        onChange: function onChange(e) {
                                            return _this2.handleFilterChange("sortBy", e.target.value);
                                        }
                                    })
                                ),
                                React.createElement(
                                    'label',
                                    { className: 'checkbox_label' },
                                    'LFD',
                                    React.createElement('input', {
                                        name: 'sortBy',
                                        type: 'radio',
                                        value: 'DEMURRAGE'
                                        // value={filterValues.sortBy === "processingTime"}
                                        , onClick: function onClick(e) {
                                            return e.stopPropagation();
                                        },
                                        onChange: function onChange(e) {
                                            return _this2.handleFilterChange("sortBy", e.target.value);
                                        }
                                    })
                                ),
                                React.createElement(
                                    'label',
                                    { className: 'checkbox_label' },
                                    'LRD',
                                    React.createElement('input', {
                                        name: 'sortBy',
                                        type: 'radio',
                                        value: 'PER_DIEM'
                                        // value={filterValues.sortBy === "processingTime"}
                                        , onClick: function onClick(e) {
                                            return e.stopPropagation();
                                        },
                                        onChange: function onChange(e) {
                                            return _this2.handleFilterChange("sortBy", e.target.value);
                                        }
                                    })
                                )
                            )
                        ),
                        React.createElement(Dropdown.Divider, null),
                        React.createElement(Input, { type: 'submit', className: 'drayage_filter_submit small_button',
                            onClick: function onClick(e) {
                                e.stopPropagation();
                                _this2.props.filtersSubmitted(filterValues);
                            },
                            value: 'Submit'
                        }),
                        React.createElement(
                            'a',
                            { className: 'resetLink', onClick: function onClick(e) {
                                    e.stopPropagation();
                                    _this2.setState({ filterValues: {} });
                                    _this2.props.resetFilters();
                                } },
                            'Reset'
                        )
                    )
                )
            );
        }
    }]);

    return FilterDropdown;
}(React.Component);

export default FilterDropdown;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import "./Opportunity.scss";

var OpportunityClosedCommon = function (_Component) {
    _inherits(OpportunityClosedCommon, _Component);

    function OpportunityClosedCommon(props) {
        _classCallCheck(this, OpportunityClosedCommon);

        var _this = _possibleConstructorReturn(this, (OpportunityClosedCommon.__proto__ || Object.getPrototypeOf(OpportunityClosedCommon)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(OpportunityClosedCommon, [{
        key: "render",
        value: function render() {

            console.log("OpprtunitiesClosed page :: abcd");
            console.log("OpprtunitiesClosed customer:", this.props.customer);
            console.log("OpprtunitiesClosed customer:", this.props.opportunity.opportunityName);
            var opportunityName = this.props.opportunity.opportunityName;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "section",
                    null,
                    React.createElement(
                        "div",
                        { className: "party-name-wrapper" },
                        React.createElement(
                            "div",
                            { className: "partyName-date" },
                            React.createElement(
                                "div",
                                { className: "collapsible", onClick: this.props.onButtonClick },
                                this.props.isOpen ? React.createElement("img", { className: "arrow-img", src: "/images/files/downArrow.svg" }) : React.createElement("img", { className: "arrow-img", src: "/images/files/sideArrow.svg" })
                            ),
                            React.createElement(
                                "div",
                                { className: "oppor-name-text" },
                                opportunityName.toUpperCase(),
                                " "
                            ),
                            React.createElement(
                                "div",
                                { className: "expiry-date" },
                                "VALID TILL:",
                                this.props.opportunity.endDate,
                                " "
                            )
                        )
                    )
                )
            );
        }
    }]);

    return OpportunityClosedCommon;
}(Component);

export default OpportunityClosedCommon;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import "./styles.scss";

var Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Pagination, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                pageNumber = _props.pageNumber,
                entitiesCount = _props.entitiesCount,
                pageChangeHandler = _props.pageChangeHandler;

            var maxPageNumber = Math.ceil(entitiesCount / 25);

            return React.createElement(
                "div",
                { className: "container-pagination" },
                React.createElement(
                    "span",
                    {
                        onClick: function onClick() {
                            return pageNumber > 1 && pageChangeHandler("prev");
                        },
                        className: "prev-button" + (pageNumber === 1 ? ' disable-button' : '')
                    },
                    "<"
                ),
                pageNumber,
                " of ",
                maxPageNumber,
                React.createElement(
                    "span",
                    {
                        onClick: function onClick() {
                            return pageChangeHandler("next");
                        },
                        className: "next-button" + (pageNumber === maxPageNumber ? ' disable-button' : '')
                    },
                    ">"
                )
            );
        }
    }]);

    return Pagination;
}(Component);

export default Pagination;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import "./styles.scss";
import { Icon } from "semantic-ui-react";

var RepeatingHeaderTable = function (_React$Component) {
    _inherits(RepeatingHeaderTable, _React$Component);

    function RepeatingHeaderTable(props) {
        _classCallCheck(this, RepeatingHeaderTable);

        var _this = _possibleConstructorReturn(this, (RepeatingHeaderTable.__proto__ || Object.getPrototypeOf(RepeatingHeaderTable)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RepeatingHeaderTable, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var header = this.props.header;
            // console.log("this.props.data:",this.props.data);

            var data = this.props.data && [this.props.data[0]] || [];
            var warning = this.props.data && this.props.data[1] || "";
            // const warning = this.props.data[1];
            console.log("warning:", warning);
            return data.map(function (item, index1) {
                return React.createElement(
                    "table",
                    { className: "drayage_short_table", onClick: function onClick(e) {
                            var hightedAlready = document.querySelector(".highlight_background");
                            if (hightedAlready) hightedAlready.classList.remove('highlight_background');
                            e.target.closest("table").classList.add('highlight_background');

                            _this2.props.onTableClick(data[index1][0], data[index1][4]);
                        } },
                    React.createElement(
                        "tr",
                        { className: "drayage_short_table_header" },
                        header.map(function (item, index2) {
                            return React.createElement(
                                "td",
                                null,
                                header[index2]
                            );
                        })
                    ),
                    warning && React.createElement(
                        "span",
                        { className: "ui warning-sign", "data-tooltip": "Vessel names do not match.", "data-position": "top left" },
                        React.createElement(Icon, { name: "warning sign", color: "red" })
                    ),
                    React.createElement(
                        "tr",
                        null,
                        data[index1].map(function (item, index2) {
                            return React.createElement(
                                "td",
                                null,
                                data[index1][index2]
                            );
                        })
                    )
                );
            });
        }
    }]);

    return RepeatingHeaderTable;
}(React.Component);

export default RepeatingHeaderTable;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import "./styles.scss";
import { Icon } from 'semantic-ui-react';

var SmallAccordian = function (_React$Component) {
    _inherits(SmallAccordian, _React$Component);

    function SmallAccordian(props) {
        _classCallCheck(this, SmallAccordian);

        var _this = _possibleConstructorReturn(this, (SmallAccordian.__proto__ || Object.getPrototypeOf(SmallAccordian)).call(this, props));

        _this.state = {
            smallAccordianState: false
        };
        return _this;
    }

    // makeArray = (index) => {
    //     let {accordianState} = this.state;
    //     accordianState[index] = !accordianState[index];
    //     return (accordianState);
    // }

    _createClass(SmallAccordian, [{
        key: 'onClick',
        value: function onClick() {
            var _state = this.state,
                index = _state.index,
                toggleAccordian = _state.toggleAccordian,
                smallAccordianState = _state.smallAccordianState;

            this.setState({ smallAccordianState: !smallAccordianState });
            // toggleAccordian(index)
        }

        // checkIfExpandable(key) {
        //     console.log("key", key, document.querySelector(`[data-key='${key}'] [data-type="expandable"] tbody tr`))
        //     return 1
        //     // return document.querySelector(`[data-key='${key}'] [data-type="expandable"] tbody tr`).length > 0
        // }

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                smallAccordianBody = _props.smallAccordianBody,
                smallAccordianHeader = _props.smallAccordianHeader;
            var smallAccordianState = this.state.smallAccordianState;

            return React.createElement(
                'div',
                { className: 'small_accordian', 'data-key': this.props.id },
                React.createElement(
                    'div',
                    { className: "small_accordian_header" + (smallAccordianState ? " expanded" : " collapsed"), onClick: function onClick() {
                            return _this2.onClick();
                        } },
                    React.createElement(
                        'div',
                        { className: 'small_accordian_title' },
                        smallAccordianHeader
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'small_accordian_body', 'data-type': 'expandable' },
                    smallAccordianBody
                ),
                this.props.count > 0 && React.createElement(
                    'a',
                    { className: 'expand_collapse', onClick: function onClick() {
                            return _this2.onClick();
                        } },
                    smallAccordianState ? "Hide Details" : "Show Details"
                )
            );
        }
    }]);

    return SmallAccordian;
}(React.Component);

export default SmallAccordian;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from "react";
import { isEmpty, isUndefined } from "lodash-es";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { Table, Button } from "semantic-ui-react";
import moment from "moment";
import { tableHeaders } from "../../util/constants";
import "./styles.scss";

var StateTimeSeriesModal = function (_Component) {
  _inherits(StateTimeSeriesModal, _Component);

  function StateTimeSeriesModal(props) {
    _classCallCheck(this, StateTimeSeriesModal);

    var _this = _possibleConstructorReturn(this, (StateTimeSeriesModal.__proto__ || Object.getPrototypeOf(StateTimeSeriesModal)).call(this, props));

    _this.findUtcOffset = function (timezone) {
      var s = timezone.substr(3); // Get rid of UTC, s= "+05:00"
      var sign = s[0]; // "+""
      var x = s.substr(1, 2) * 60 + parseInt(s.substr(4, 5));
      return sign + x;
    };

    _this.timeZoneConverter = function (value) {
      var entityTimezone = _this.props.entityTimezone;

      var time = new Date(value).getTime();

      if (!isEmpty(entityTimezone)) {
        _this.setState({ modelEvent: "OPS" });
        var localTime = moment(value);
        var timeZoneTime = moment(value).tz(entityTimezone);
        var modifiedDate = moment(value);

        modifiedDate.subtract(-localTime.utcOffset() + timeZoneTime.utcOffset(), 'minutes');
        // if(source === 'OPS') {
        //   this.setState({opsTime:modifiedDate.valueOf(), newOpsTime:time})
        // } else {
        _this.setState({ demurrageTime: modifiedDate.valueOf(), newDemurrageTime: time });
        // }
      } else {
        // if(source === 'OPS') {
        //   this.setState({ opsTime: time, currentDate: time });
        // } else {
        _this.setState({ currentDate2: time });
        // }
        // this.setState({opsTime:time})
      }
    };

    _this.timeZoneReverse = function (value) {
      if (!isEmpty(value) && !isUndefined(value)) {
        var entityTimezone = _this.props.entityTimezone;

        if (!isEmpty(entityTimezone)) {
          var parsedTime = parseInt(value);
          // string time zone logic 
          var localTime = moment(parsedTime);
          var timeZoneTime = moment(parsedTime).tz(entityTimezone);
          var modifiedDate = moment(parsedTime);
          modifiedDate.subtract(localTime.utcOffset() - timeZoneTime.utcOffset(), 'minutes');
          return modifiedDate.valueOf();
        }
      }
    };

    _this.renderRow = function (_ref) {
      var time = _ref.time,
          text = _ref.text,
          sourceSelected = _ref.sourceSelected,
          type = _ref.type,
          convertEpochToDate = _ref.convertEpochToDate,
          selectModelTime = _ref.selectModelTime,
          entityId = _ref.entityId,
          eventName = _ref.eventName,
          entityType = _ref.entityType,
          selectedField = _ref.selectedField,
          entityTimezone = _ref.entityTimezone,
          openDateCalendar = _ref.openDateCalendar;
      return React.createElement(
        Table.Row,
        null,
        React.createElement(
          Table.Cell,
          null,
          convertEpochToDate(time, false, true, entityTimezone)
        ),
        React.createElement(
          Table.Cell,
          null,
          text,
          " ",
          sourceSelected === type && '*'
        ),
        React.createElement(
          Table.Cell,
          null,
          React.createElement(
            "div",
            { className: "flexDisplay" },
            React.createElement(
              "span",
              { className: "action", onClick: function onClick(e) {
                  if (selectedField === 'readyForPickup' || selectedField === 'gateOut') {
                    _this.setState({ modelEvent: type, modelTime: time, eventName: eventName, skipTzConversion: true });
                  } else {
                    selectModelTime(e, entityId, type, time, eventName, entityType, entityTimezone);
                    _this.setState({ skipTzConversion: false });
                  }
                }
              },
              "Y"
            ),
            React.createElement(Button, {
              icon: "angle double left",
              className: "goBackIcon",
              onClick: openDateCalendar
            })
          )
        )
      );
    };

    _this.renderTableBody = function (_ref2) {
      var eModalTime = _ref2.eModalTime,
          OPSTime = _ref2.OPSTime,
          tModalTime = _ref2.tModalTime,
          sourceSelected = _ref2.sourceSelected,
          convertEpochToDate = _ref2.convertEpochToDate,
          selectedField = _ref2.selectedField,
          entityTimezone = _ref2.entityTimezone;
      var _this$props = _this.props,
          entityId = _this$props.entityId,
          eventName = _this$props.eventName,
          selectModelTime = _this$props.selectModelTime,
          entityType = _this$props.entityType,
          openDateCalendar = _this$props.openDateCalendar;

      if (!isEmpty(eModalTime) || !isEmpty(OPSTime) || !isEmpty(tModalTime)) {
        return React.createElement(
          Table.Body,
          null,
          !isEmpty(eModalTime) && _this.renderRow({ time: eModalTime, text: 'E-Modal', sourceSelected: sourceSelected, type: 'EMODAL', convertEpochToDate: convertEpochToDate, selectModelTime: selectModelTime, entityId: entityId, eventName: eventName, entityType: entityType, selectedField: selectedField, entityTimezone: entityTimezone, openDateCalendar: openDateCalendar }),
          !isEmpty(tModalTime) && _this.renderRow({ time: tModalTime, text: 'T-Modal', sourceSelected: sourceSelected, type: 'TMODAL', convertEpochToDate: convertEpochToDate, selectModelTime: selectModelTime, entityId: entityId, eventName: eventName, entityType: entityType, selectedField: selectedField, entityTimezone: entityTimezone, openDateCalendar: openDateCalendar }),
          !isEmpty(OPSTime) && _this.renderRow({ time: OPSTime, text: 'Ops', sourceSelected: sourceSelected, type: 'OPS', convertEpochToDate: convertEpochToDate, selectModelTime: selectModelTime, entityId: entityId, eventName: eventName, entityType: entityType, selectedField: selectedField, entityTimezone: entityTimezone, openDateCalendar: openDateCalendar })
        );
      }
    };

    _this.renderTableHeaders = function () {
      return React.createElement(
        Table.Header,
        null,
        React.createElement(
          Table.Row,
          null,
          " ",
          tableHeaders.map(function (header) {
            return React.createElement(
              Table.HeaderCell,
              null,
              header
            );
          }),
          " "
        )
      );
    };

    var _props$selectedDate = props.selectedDate2,
        selectedDate2 = _props$selectedDate === undefined ? null : _props$selectedDate;

    _this.state = {
      modelTime: null,
      modelEvent: null,
      sourceName: null,
      demurrageTime: selectedDate2,
      newDemurrageTime: '',
      currentDate2: null,
      skipTzConversion: false
    };
    return _this;
  }

  _createClass(StateTimeSeriesModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          eModalTime = _props.eModalTime,
          tModalTime = _props.tModalTime,
          OPSTime = _props.OPSTime,
          eventName = _props.eventName,
          modalIdentifire = _props.modalIdentifire,
          convertEpochToDate = _props.convertEpochToDate,
          selectedDate2 = _props.selectedDate2,
          triggerApiCall = _props.triggerApiCall,
          sourceSelected = _props.sourceSelected,
          entityId = _props.entityId,
          _props$entityTimezone = _props.entityTimezone,
          entityTimezone = _props$entityTimezone === undefined ? "" : _props$entityTimezone,
          selectedField = _props.selectedField,
          entityType = _props.entityType,
          openDateCalendar = _props.openDateCalendar,
          _state = this.state,
          modelEvent = _state.modelEvent,
          modelTime = _state.modelTime,
          newDemurrageTime = _state.newDemurrageTime,
          currentDate2 = _state.currentDate2,
          skipTzConversion = _state.skipTzConversion;


      var incomingDate2 = !isEmpty(entityTimezone) ? this.timeZoneReverse(selectedDate2) : parseInt(selectedDate2);
      var demurrageSelectedTime = currentDate2 || newDemurrageTime || incomingDate2;

      return React.createElement(
        Fragment,
        null,
        (modalIdentifire === 'readyForPickup' || modalIdentifire === 'gateOut') && React.createElement(
          "div",
          { className: "popup-source-section" },
          React.createElement(
            "div",
            { className: "popup-calendor demTopSpace" },
            React.createElement(
              "div",
              { className: "popup-date-picker" },
              modalIdentifire === 'readyForPickup' ? React.createElement(
                "p",
                null,
                "Demurrage time"
              ) : React.createElement(
                "p",
                null,
                "PD time"
              ),
              React.createElement(DatePicker, {
                title: modalIdentifire === 'readyForPickup' ? "Select demurrage time" : "Select PD time",
                placeholderText: modalIdentifire === 'readyForPickup' ? "Select demurrage time" : "Select PD time",
                id: "vessel-departure-date2",
                name: "etd",
                selected: demurrageSelectedTime,
                onChange: function onChange(value) {
                  _this2.timeZoneConverter(value, 'DEM');
                },
                showTimeSelect: true,
                timeFormat: "hh:mm a",
                timeIntervals: 15,
                timeCaption: "time",
                dateCaption: "Select time",
                dateFormat: "MMMM d, yyyy h:mm aa"
                //disabled={isfDisabled}
                , peekNextMonth: true,
                showMonthDropdown: true,
                showYearDropdown: true,
                dropdownMode: "select",
                popperPlacement: "top-end",
                popperProps: {
                  positionFixed: true // prevents the popper from hiding behind overflow parent
                }
              })
            ),
            React.createElement(
              "div",
              { className: "button-container topSpace" },
              React.createElement(
                "button",
                {
                  "class": "ui primary button " + (modelTime ? '' : 'is-disable'),
                  onClick: function onClick(e) {
                    if (demurrageSelectedTime && modelTime) {
                      triggerApiCall(e, {
                        entityId: entityId,
                        eventName: eventName,
                        entityType: entityType,
                        eventCode: '',
                        eventDescription: '',
                        sourceSelected: modelEvent,
                        selectedTime: modelTime,
                        selectedTime2: demurrageSelectedTime,
                        skipTzConversion: skipTzConversion
                      });
                      openDateCalendar();
                    }
                  }
                },
                "Y"
              )
            )
          )
        ),
        React.createElement(
          Table,
          { className: "tableStyle", celled: true, compact: true, size: "small" },
          this.renderTableHeaders(),
          this.renderTableBody({ eModalTime: eModalTime, OPSTime: OPSTime, tModalTime: tModalTime, sourceSelected: sourceSelected, convertEpochToDate: convertEpochToDate, selectedField: selectedField, entityTimezone: entityTimezone })
        )
      );
    }
  }]);

  return StateTimeSeriesModal;
}(Component);

;

export default StateTimeSeriesModal;
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

// In this file we explicity export everything. This is just to be thorough
// and explicit. This thorough exporting method can seem like a lot, but it
// allows for simpler scaling when your library grows in size, and even adds
// different tech like TypeScript

import "./commonStyles.scss";

export { default as RepeatingHeaderTable } from "./RepeatingHeaderTable";
export { default as Accordian } from "./Accordian";
export { default as SmallAccordian } from "./SmallAccordian";
export { default as BlockHeader } from "./BlockHeader";
export { default as FilterDropdown } from "./FilterDropdown";
export { default as ContainerTable } from "./ContainerTable";
export { default as ContainerModal } from "./ContainerModal";
export { default as ContainerTrackingApp } from "./ContainerTrackingApp";
export { default as OpportunityClosedCommon } from "./OpportunityClosedCommon";
export { default as Calendar } from "./Calendar";
import modalIcon from './modalIcon.svg';
import portIcon from './port.svg';
import vesselIcon from './vessel.svg';
import containerIcon from './container.svg';

export { modalIcon, portIcon, vesselIcon, containerIcon };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import Docs from './docs';
// import "semantic-ui-css/semantic.min.css";

// ReactDOM.render(
//   document.getElementById('root'));


// Common Components Export
export * from './components';

serviceWorker.unregister();
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

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = process.env.PUBLIC_URL + '/service-worker.js';

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.');

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');
    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}
export var iconStatusMapping = {
  scheduled: {
    name: 'circle',
    color: 'white',
    progressLineColor: 'green'
  },
  success: {
    name: 'check circle',
    color: 'green',
    progressLineColor: 'green'
  },
  failure: {
    name: 'times circle',
    color: 'red',
    progressLineColor: 'green'
  },
  ENTITY_SOURCE_NONE: {
    name: 'circle',
    color: 'white',
    progressLineColor: 'grey'
  },
  HOLD_NONE: {
    name: 'circle',
    color: 'white',
    progressLineColor: 'grey'
  },
  TMODAL: {
    name: 'check circle',
    color: 'green',
    progressLineColor: 'green'
  },
  OPS: {
    name: 'check circle',
    color: 'green',
    progressLineColor: 'green'
  },
  EMODAL: {
    name: 'check circle',
    color: 'green',
    progressLineColor: 'green'
  },
  NO_HOLD: {
    name: 'check circle',
    color: 'green',
    progressLineColor: 'green'
  },
  ON_HOLD: {
    name: 'times circle',
    color: 'red',
    progressLineColor: 'green'
  },
  HOLD_REMOVED: {
    name: 'check circle',
    color: 'green',
    progressLineColor: 'green'
  },
  FEES_NONE: {
    name: 'circle',
    color: 'white',
    progressLineColor: 'grey'
  },
  NO_DUES: {
    name: 'check circle',
    color: 'green',
    progressLineColor: 'green'
  },
  FEES_DUE: {
    name: 'times circle',
    color: 'red',
    progressLineColor: 'green'
  },
  FEES_PAID: {
    name: 'check circle',
    color: 'green',
    progressLineColor: 'green'
  }
};

export var statesMapping = {
  grounded: {
    identifier: 'showGroundPopuop'
  },
  carrierReleased: {
    identifier: 'showLineReleasePopuop'
  },
  readyForPickup: {
    identifier: 'showReadyPickup'
  },
  gateOut: {
    identifier: 'showGateOut'
  },
  gateIn: {
    identifier: 'showGateIn'
  }
};

export var statusTextMapping = {
  NO_HOLD: 'No hold',
  HOLD_REMOVED: 'Hold removed',
  ON_HOLD: 'Remove Holds',
  NO_DUES: 'No dues',
  FEES_DUE: 'Fees paid',
  FEES_PAID: 'Fees paid'
};

export var tableHeaders = ['Date', 'Source', 'Action'];

export var stringTypeFields = {
  fees: true,
  holds: true,
  readyForPickup: true,
  purchaseOrder: true
  // eta: true,
  // doCreated: true,
  // anRecieved: true,
  // doPublished: true,
  // berthingDate: true,
};

export var rowHeaders = [{
  displayName: 'GROUNDED',
  dataType: 'timestamp',
  fieldName: 'grounded',
  status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'GRD'
}, {
  displayName: 'CUSTOMS REL',
  dataType: 'timestamp',
  fieldName: 'customReleased',
  status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'C REL'
}, {
  displayName: 'LINE RELEASE',
  dataType: 'timestamp',
  fieldName: 'carrierReleased',
  status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'L REL'
}, {
  displayName: 'HOLD',
  dataType: 'timestamp',
  fieldName: 'holds',
  status: 'HOLD_NONE',
  dataList: [],
  compactName: 'HOLD',
  showInToolTip: true
}, {
  displayName: 'FEES',
  dataType: 'string',
  fieldName: 'fees',
  status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'FEES'
}, {
  displayName: 'READY FOR PICKUP',
  dataType: 'timestamp',
  fieldName: 'readyForPickup',
  status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'RFP'
}, {
  displayName: 'TERM APPT',
  dataType: 'timestamp',
  fieldName: 'terminalPickupAppointment', //terminalAppointment
  status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'TER APP'
}, {
  displayName: 'GATE OUT',
  dataType: 'timestamp',
  fieldName: 'gateOut',
  status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'G OUT'
}, {
  displayName: 'DEL APPT',
  dataType: 'timestamp',
  status: 'ENTITY_SOURCE_NONE',
  fieldName: 'terminalDropAppointment', //deliveryAppointment
  dataList: [],
  compactName: 'DEL APP'
}, {
  displayName: 'ACTUAL DELIVERY',
  dataType: 'timestamp',
  status: 'ENTITY_SOURCE_NONE',
  fieldName: 'warehouseDropAppointment', //actualDelivery
  dataList: [],
  compactName: 'ACT DEL'
}, {
  displayName: 'TERM RETURN APP',
  dataType: 'timestamp',
  status: 'ENTITY_SOURCE_NONE',
  fieldName: 'warehousePickupAppointment', //terminalReturnApp
  dataList: [],
  compactName: 'TRP'
}, {
  displayName: 'GATE IN',
  dataType: 'timestamp',
  fieldName: 'gateIn',
  status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'G IN'
}];

export var metaData = [{
  displayName: 'VESSEL',
  dataType: 'string',
  fieldName: 'carrierName',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'VESSEL'
}, {
  displayName: 'AN RECIEVED',
  dataType: 'isoTimestamp',
  fieldName: 'arrivalNoticeReceived',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'AN RECV'
}, {
  displayName: 'DO CREATED',
  dataType: 'isoTimestamp',
  fieldName: 'doCreated',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'DO CRE'
}, {
  displayName: 'ETA',
  dataType: 'timestamp',
  fieldName: 'eta',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'ETA'
}, {
  displayName: 'BERTHING DATE',
  dataType: 'timestamp',
  fieldName: 'berthed',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'BERTH DATE'
}, {
  displayName: 'SHIPMENT',
  dataType: 'string',
  fieldName: 'shipmentId',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'SHIP'
}, {
  displayName: 'MBOL',
  dataType: 'string',
  fieldName: 'masterBolNumber',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'MBOL'
}, {
  displayName: 'HBOL',
  dataType: 'string',
  fieldName: 'bolDocNumber',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'HBOL'
}, {
  displayName: 'PO',
  dataType: 'string',
  fieldName: 'purchaseOrder',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'PO'
},
// {
//   displayName: 'FINAL DELIVERY',
//   dataType: 'string',
//   fieldName: 'finalDelivery',
//   // status: 'ENTITY_SOURCE_NONE',
//   dataList: [],
//   compactName: 'FIN DEL',
// },

// {
//   displayName: 'SEAL',
//   dataType: 'string',
//   fieldName: 'seal',
//   // status: 'ENTITY_SOURCE_NONE',
//   dataList: [],
//   compactName: 'SEAL',
// },
{
  displayName: 'DO PUBLISHED',
  dataType: 'timestamp',
  fieldName: 'doPublished',
  // status: 'ENTITY_SOURCE_NONE',
  dataList: [],
  compactName: 'DO PUB'
}];

export var containerFilters = [{
  displayName: 'Vessel',
  fieldName: 'vessel',
  alt: 'Vessel Icon'
}, {
  displayName: 'Port',
  fieldName: 'port',
  alt: 'port Icon'
}, {
  displayName: 'Container',
  fieldName: 'container',
  alt: 'container Icon'
}];

export var checkBoxFilters = [{
  labelName: 'Show Unprocessed Only',
  fieldName: 'excludeprocessed'
}, {
  labelName: 'Show drayage only',
  fieldName: 'showDrayageOnly'
}, {
  labelName: 'History Mode',
  fieldName: 'historyMode'
}];

export var containerHeaderData = [{
  label: 'CUSTOMER',
  fieldName: 'customer'
}, {
  label: 'PORT',
  fieldName: 'portName'
}, {
  label: 'TERMINAL',
  fieldName: 'terminal'
}, {
  label: 'SIZE',
  fieldName: 'sizeType'
}];

export var sampleResponses = {
  data: []
};

// export const sampleResponses = {
//   data: [
//     {
//       label: 'CUSTOMER',
//       value: 'Lifestyle'
//     },{
//       label: 'PORT',
//       value: 'Los Angeles'
//     },{
//       label: 'TERMINAL',
//       value: 'Fenix Marine'
//     },{
//       label: 'SIZE',
//       value: '40HC'
//     },{
//       label: 'WEIGHT',
//       value: '4.5T'
//     }
//     // ,{
//     //   label: 'TOTAL FEES',
//     //   value: '$2000'
//     // }
//   ],

//   searchLevel1Vessel: {
//     data: {
//       "eventId": "ffffffff-875d-6a5f-7b72-bc089d139247----ffffffff-e3f8-00ea-1c61-57a452098bed",
//       "eventType": "ETA_SEARCH_LEVEL1",
//       "eventMessage": {
//         "ports": [],
//         "vessels": [
//         {
//           "imo": "8201624",
//           "name": "MSC IRIS"
//         },
//         {
//           "imo": "9302140",
//           "name": "ONE HUMBER"
//         },
//         // {
//         //   "imo": "9424924",
//         //   "name": "ONE MATRIX"
//         // },
//         // {
//         //   "imo": "9454400",
//         //   "activeShipmentCount": 2
//         // },
//         // {
//         //   "imo": "9475648",
//         //   "name": "ONE MANEUVER",
//         //   "activeShipmentCount": 1
//         // },
//         // {
//         //   "imo": "9604081",
//         //   "name": "EVER LOGIC",
//         //   "activeShipmentCount": 2
//         // },
//         // {
//         //   "imo": "9606338",
//         //   "name": "MSC AMSTERDAM"
//         // }
//         ]
//       },
//       "responseTopic": "service_event_response_ops",
//       "eventTime": 1631617286561,
//       "tenantID": "TENANT_DEFAULT",
//       "typeOfUser": "OPS_SUPER_VISOR",
//       "userIPaddress": "171.50.166.154",
//       "userAgentname": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"
//     }
//   },
//   searchLevel2Vessel : {
//     data: {
//       "eventId": "ffffffff-875d-6a5f-7b72-bc089d139247----ffffffff-e405-0331-1c61-57a452098cc0",
//       "eventType": "EED_SEARCH_ENTITY",
//       "eventMessage": {
//         "list": [
//           {
//             "unloc": "USOAK",
//             "name": "Oakland, USA",
//             "containers": [
//               {
//             "entityId": "OOCU6857310",
//             "entityType": "WORKFLOW_ENTITY_TYPE_CONTAINER",
//             "entityTimezone": "America/New_York",
//             "entityShipmentList": [
//               {
//                 "portOfUnlading": "New York, USA",
//                 "shipmentId": "KX-J2J1-2881",
//                 "terminalName": "TEST",
//                 "bolDocNumber": "OOLU2622447180",
//                 "masterBolNumber": "OOLU2622447180",
//                 "scaccode": "OOLU",
//                 "customerEmail": "lifestyle@shipment.klearexpress.com",
//                 "purchaseOrder": "WHS-5252-4393782",
//                 "drayageEnabled": 2
//               },
//               {
//                 "portOfUnlading": "New York, USA",
//                 "shipmentId": "KX-T0C0-1183",
//                 "bolDocNumber": "OOLU2622447180",
//                 "masterBolNumber": "OOLU2622447180",
//                 "scaccode": "OOLU",
//                 "customerEmail": "wayfair@shipment.klearexpress.com",
//                 "purchaseOrder": "WHS-5252-4393782",
//                 "drayageEnabled": 2
//               },
//               {
//                 "portOfUnlading": "New York, USA",
//                 "shipmentId": "KX-J2J1-2881",
//                 "terminalName": "TEST",
//                 "bolDocNumber": "OOLU2622447180",
//                 "masterBolNumber": "OOLU2622447180",
//                 "scaccode": "OOLU",
//                 "customerEmail": "lifestyle@shipment.klearexpress.com",
//                 "purchaseOrder": "WHS-5252-4393782",
//                 "drayageEnabled": 2
//               },
//               {
//                 "portOfUnlading": "New York, USA",
//                 "shipmentId": "KX-T0C0-1183",
//                 "bolDocNumber": "OOLU2622447180",
//                 "masterBolNumber": "OOLU2622447180",
//                 "scaccode": "OOLU",
//                 "customerEmail": "wayfair@shipment.klearexpress.com",
//                 "purchaseOrder": "WHS-5252-4393782",
//                 "drayageEnabled": 2
//               }
//             ],
//             "grounded": {
//               "eventName": "UNLOAD_FROM_VESSEL",
//               "eventDescription": "UNLOAD_FROM_VESSEL",
//               "sourceSelected": "OPS",
//               "OPSTime": "1577817000000",
//               "createdDate": "2020-01-21 13:07:18",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "customReleased": {
//               "eventName": "CUSTOM_RELEASED",
//               "eventDescription": "CUSTOM_RELEASED",
//               "sourceSelected": "OPS",
//               "OPSTime": "1577989800000",
//               "createdDate": "2020-01-21 13:14:35",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "carrierReleased": {
//               "eventName": "CARRIER_RELEASED",
//               "eventDescription": "CARRIER_RELEASED",
//               "sourceSelected": "OPS",
//               "OPSTime": "1577989800000",
//               "createdDate": "2020-01-21 13:14:35",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "holds": {
//               "eventName": "CONTAINER_HOLDS",
//               "eventDescription": " ",
//               "sourceSelected": "OPS",
//               "holdStatus": "NO_HOLD",
//               "createdDate": "2020-01-22 05:25:13",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "fees": {
//               "eventName": "CONTAINER_FEES",
//               "eventDescription": " ",
//               "sourceSelected": "OPS",
//               "feesStatus": "NO_DUES",
//               "createdDate": "2020-01-22 05:25:13",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "readyForPickup": {
//               "eventName": "READY_FOR_PICKUP",
//               "eventDescription": "READY_FOR_PICKUP",
//               "sourceSelected": "OPS",
//               "OPSTime": "1579026600000",
//               "OPSTime2": "1579026600000",
//               "createdDate": "2020-01-21 13:20:23",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "gateOut": {
//               "eventName": "GATE_OUT",
//               "eventDescription": "GATE_OUT",
//               "sourceSelected": "OPS",
//               "OPSTime": "1579080600000",
//               "createdDate": "2020-01-22 04:58:29",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "gateIn": {
//               "eventName": "GATE_IN",
//               "eventDescription": "GATE_IN",
//               "sourceSelected": "OPS",
//               "OPSTime": "1579545000000",
//               "createdDate": "2020-01-22 05:25:13",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "done": {
//               "eventName": "CONTAINER_DONE",
//               "eventDescription": "DONE",
//               "sourceSelected": "ENTITY_SOURCE_NONE",
//               "createdDate": "2020-01-21 13:07:18",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "shipmentIds": "KX-J2J1-2881,KX-T0C0-1183,KX-J2J1-2881,KX-T0C0-1183"
//           },
//               {
//             "entityId": "DPAB1111222",
//             "entityType": "WORKFLOW_ENTITY_TYPE_CONTAINER",
//             "entityShipmentList": [
//               {
//                 "shipmentId": "KX-J2J1-1988",
//                 "customerEmail": "lifestyle@shipment.klearexpress.com",
//                 "drayageEnabled": 2
//               }
//             ],
//             "grounded": {
//               "eventName": "UNLOAD_FROM_VESSEL",
//               "eventDescription": "UNLOAD FROM VESSEL",
//               "sourceSelected": "OPS",
//               "eModalTime": "1600618764000",
//               "OPSTime": "1598009400000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-10-07 19:12:39"
//             },
//             "customReleased": {
//               "eventName": "CUSTOM_RELEASED",
//               "eventDescription": "CUSTOM RELEASED",
//               "sourceSelected": "OPS",
//               "OPSTime": "15985373170000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 14:09:36"
//             },
//             "carrierReleased": {
//               "eventName": "CARRIER_RELEASED",
//               "eventDescription": "LINE_RELEASED",
//               "sourceSelected": "OPS",
//               "OPSTime": "1598020200000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-31 13:56:59"
//             },
//             "holds": {
//               "eventName": "CONTAINER_HOLDS",
//               "sourceSelected": "OPS",
//               "holdStatus": "NO_HOLD",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 16:12:20"
//             },
//             "fees": {
//               "eventName": "CONTAINER_FEES",
//               "sourceSelected": "OPS",
//               "feesStatus": "NO_DUES",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 16:12:28"
//             },
//             "readyForPickup": {
//               "eventName": "READY_FOR_PICKUP",
//               "eventDescription": "READY_FOR_PICKUP",
//               "sourceSelected": "OPS",
//               "OPSTime": "1598545800000",
//               "OPSTime2": "1598545800000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 16:15:08"
//             },
//             "gateOut": {
//               "eventName": "GATE_OUT",
//               "eventDescription": "GATE_OUT",
//               "sourceSelected": "EMODAL",
//               "eModalTime": "1598533270000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 16:14:20"
//             },
//             "gateIn": {
//               "eventName": "GATE_IN",
//               "eventDescription": "GATE_IN",
//               "sourceSelected": "OPS",
//               "OPSTime": "1599827400705",
//               "createdDate": "2020-09-11 12:00:50",
//               "updatedDate": "2021-02-02 11:50:47"
//             },
//             "done": {
//               "eventName": "CONTAINER_DONE",
//               "eventDescription": "DONE",
//               "sourceSelected": "ENTITY_SOURCE_NONE",
//               "createdDate": "2021-02-02 11:49:26",
//               "updatedDate": "2021-02-02 11:49:26"
//             },
//             "shipmentIds": "KX-J2J1-1988"
//           }
//             ]
//           },
//           {
//             "unloc": "STKN",
//             "name": "STOCKHTON, USA",
//             "containers": [
//               {
//             "entityId": "OOCU6857310",
//             "entityType": "WORKFLOW_ENTITY_TYPE_CONTAINER",
//             "entityTimezone": "America/New_York",
//             "entityShipmentList": [
//               {
//                 "portOfUnlading": "New York, USA",
//                 "shipmentId": "KX-J2J1-2881",
//                 "terminalName": "TEST",
//                 "bolDocNumber": "OOLU2622447180",
//                 "masterBolNumber": "OOLU2622447180",
//                 "scaccode": "OOLU",
//                 "customerEmail": "lifestyle@shipment.klearexpress.com",
//                 "purchaseOrder": "WHS-5252-4393782",
//                 "drayageEnabled": 2
//               },
//               {
//                 "portOfUnlading": "New York, USA",
//                 "shipmentId": "KX-T0C0-1183",
//                 "bolDocNumber": "OOLU2622447180",
//                 "masterBolNumber": "OOLU2622447180",
//                 "scaccode": "OOLU",
//                 "customerEmail": "wayfair@shipment.klearexpress.com",
//                 "purchaseOrder": "WHS-5252-4393782",
//                 "drayageEnabled": 2
//               },
//               {
//                 "portOfUnlading": "New York, USA",
//                 "shipmentId": "KX-J2J1-2881",
//                 "terminalName": "TEST",
//                 "bolDocNumber": "OOLU2622447180",
//                 "masterBolNumber": "OOLU2622447180",
//                 "scaccode": "OOLU",
//                 "customerEmail": "lifestyle@shipment.klearexpress.com",
//                 "purchaseOrder": "WHS-5252-4393782",
//                 "drayageEnabled": 2
//               },
//               {
//                 "portOfUnlading": "New York, USA",
//                 "shipmentId": "KX-T0C0-1183",
//                 "bolDocNumber": "OOLU2622447180",
//                 "masterBolNumber": "OOLU2622447180",
//                 "scaccode": "OOLU",
//                 "customerEmail": "wayfair@shipment.klearexpress.com",
//                 "purchaseOrder": "WHS-5252-4393782",
//                 "drayageEnabled": 2
//               }
//             ],
//             "grounded": {
//               "eventName": "UNLOAD_FROM_VESSEL",
//               "eventDescription": "UNLOAD_FROM_VESSEL",
//               "sourceSelected": "OPS",
//               "OPSTime": "1577817000000",
//               "createdDate": "2020-01-21 13:07:18",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "customReleased": {
//               "eventName": "CUSTOM_RELEASED",
//               "eventDescription": "CUSTOM_RELEASED",
//               "sourceSelected": "OPS",
//               "OPSTime": "1577989800000",
//               "createdDate": "2020-01-21 13:14:35",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "carrierReleased": {
//               "eventName": "CARRIER_RELEASED",
//               "eventDescription": "CARRIER_RELEASED",
//               "sourceSelected": "OPS",
//               "OPSTime": "1577989800000",
//               "createdDate": "2020-01-21 13:14:35",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "holds": {
//               "eventName": "CONTAINER_HOLDS",
//               "eventDescription": " ",
//               "sourceSelected": "OPS",
//               "holdStatus": "NO_HOLD",
//               "createdDate": "2020-01-22 05:25:13",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "fees": {
//               "eventName": "CONTAINER_FEES",
//               "eventDescription": " ",
//               "sourceSelected": "OPS",
//               "feesStatus": "NO_DUES",
//               "createdDate": "2020-01-22 05:25:13",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "readyForPickup": {
//               "eventName": "READY_FOR_PICKUP",
//               "eventDescription": "READY_FOR_PICKUP",
//               "sourceSelected": "OPS",
//               "OPSTime": "1579026600000",
//               "OPSTime2": "1579026600000",
//               "createdDate": "2020-01-21 13:20:23",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "gateOut": {
//               "eventName": "GATE_OUT",
//               "eventDescription": "GATE_OUT",
//               "sourceSelected": "OPS",
//               "OPSTime": "1579080600000",
//               "createdDate": "2020-01-22 04:58:29",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "gateIn": {
//               "eventName": "GATE_IN",
//               "eventDescription": "GATE_IN",
//               "sourceSelected": "OPS",
//               "OPSTime": "1579545000000",
//               "createdDate": "2020-01-22 05:25:13",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "done": {
//               "eventName": "CONTAINER_DONE",
//               "eventDescription": "DONE",
//               "sourceSelected": "ENTITY_SOURCE_NONE",
//               "createdDate": "2020-01-21 13:07:18",
//               "updatedDate": "2020-09-16 12:55:11"
//             },
//             "shipmentIds": "KX-J2J1-2881,KX-T0C0-1183,KX-J2J1-2881,KX-T0C0-1183"
//           },
//               {
//             "entityId": "DPAB1111222",
//             "entityType": "WORKFLOW_ENTITY_TYPE_CONTAINER",
//             "entityShipmentList": [
//               {
//                 "shipmentId": "KX-J2J1-1988",
//                 "customerEmail": "lifestyle@shipment.klearexpress.com",
//                 "drayageEnabled": 2
//               }
//             ],
//             "grounded": {
//               "eventName": "UNLOAD_FROM_VESSEL",
//               "eventDescription": "UNLOAD FROM VESSEL",
//               "sourceSelected": "OPS",
//               "eModalTime": "1600618764000",
//               "OPSTime": "1598009400000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-10-07 19:12:39"
//             },
//             "customReleased": {
//               "eventName": "CUSTOM_RELEASED",
//               "eventDescription": "CUSTOM RELEASED",
//               "sourceSelected": "OPS",
//               "OPSTime": "15985373170000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 14:09:36"
//             },
//             "carrierReleased": {
//               "eventName": "CARRIER_RELEASED",
//               "eventDescription": "LINE_RELEASED",
//               "sourceSelected": "OPS",
//               "OPSTime": "1598020200000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-31 13:56:59"
//             },
//             "holds": {
//               "eventName": "CONTAINER_HOLDS",
//               "sourceSelected": "OPS",
//               "holdStatus": "NO_HOLD",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 16:12:20"
//             },
//             "fees": {
//               "eventName": "CONTAINER_FEES",
//               "sourceSelected": "OPS",
//               "feesStatus": "NO_DUES",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 16:12:28"
//             },
//             "readyForPickup": {
//               "eventName": "READY_FOR_PICKUP",
//               "eventDescription": "READY_FOR_PICKUP",
//               "sourceSelected": "OPS",
//               "OPSTime": "1598545800000",
//               "OPSTime2": "1598545800000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 16:15:08"
//             },
//             "gateOut": {
//               "eventName": "GATE_OUT",
//               "eventDescription": "GATE_OUT",
//               "sourceSelected": "EMODAL",
//               "eModalTime": "1598533270000",
//               "createdDate": "2020-08-24 18:51:40",
//               "updatedDate": "2020-08-27 16:14:20"
//             },
//             "gateIn": {
//               "eventName": "GATE_IN",
//               "eventDescription": "GATE_IN",
//               "sourceSelected": "OPS",
//               "OPSTime": "1599827400705",
//               "createdDate": "2020-09-11 12:00:50",
//               "updatedDate": "2021-02-02 11:50:47"
//             },
//             "done": {
//               "eventName": "CONTAINER_DONE",
//               "eventDescription": "DONE",
//               "sourceSelected": "ENTITY_SOURCE_NONE",
//               "createdDate": "2021-02-02 11:49:26",
//               "updatedDate": "2021-02-02 11:49:26"
//             },
//             "shipmentIds": "KX-J2J1-1988"
//           }
//             ]
//           }
//         ]
//       }
//     }
//   },

//   containerDataSample : [{
//     "entityId": "OOLU9502347",
//     "entityType": "WORKFLOW_ENTITY_TYPE_CONTAINER",
//     "entityTimezone": "America/Los_Angeles",
//     "entityShipmentList": [
//         {
//             "portOfUnlading": "Oakland, USA",
//             "shipmentId": "KX-J2J1-3306",
//             "terminalName": "BEN.E NUTTER",
//             "bolDocNumber": "EGLV23590581111",
//             "masterBolNumber": "EGLV235900581111",
//             "scaccode": "EGLV",
//             "customerEmail": "lifestyle@shipment.klearexpress.com",
//             "purchaseOrder": "29452,2,2945",
//             "drayageEnabled": 1,
//             'vesselName': "One Maneuver",
//             'finalDelivery': "Sep 25th 2021, 6:00pm",
//             'seal': "35HC00",
//             'eta': 1629939600000,
//             'anRecieved': 1629939600000,
//             'doCreated': 1629939600000,
//             'doPublished': 1629939600000,
//             'berthingDate': 1629939600000
//         }
//     ],
//     "grounded": {
//         "eventName": "UNLOAD_FROM_VESSEL",
//         "sourceSelected": "OPS",
//         "OPSTime": "1629939600000",
//         "createdDate": "2020-08-29 16:51:09",
//         "updatedDate": "2021-08-23 11:50:48"
//     },
//     "customReleased": {
//         "eventName": "CUSTOM_RELEASED",
//         "eventDescription": "CUSTOM_RELEASED",
//         "sourceSelected": "OPS",
//         "OPSTime": "1629939600000",
//         "createdDate": "2021-03-22 12:39:14",
//         "updatedDate": "2021-03-23 21:29:29"
//     },
//     "carrierReleased": {
//         "eventName": "CARRIER_RELEASED",
//         "eventDescription": "LINE_RELEASED",
//         "sourceSelected": "OPS",
//         "OPSTime": "1598860800000",
//         "createdDate": "2021-08-26 06:43:27",
//         "updatedDate": "2021-08-26 06:43:27"
//     },
//     "holds": {
//         "eventName": "CONTAINER_HOLDS",
//         "sourceSelected": "OPS",
//         "holdStatus": "ON_HOLD",
//         "eventDescription": "Some message comes here.",
//         "createdDate": "2021-08-24 08:06:22",
//         "updatedDate": "2021-08-26 08:05:13"
//     },
//     // "fees": {
//     //     "eventName": "CONTAINER_FEES",
//     //     "sourceSelected": "OPS",
//     //     "feesStatus": "NO_DUES",
//     //     "createdDate": "2021-08-26 08:05:16",
//     //     "updatedDate": "2021-08-26 08:05:16"
//     // },
//     // "readyForPickup": {
//     //     "eventName": "READY_FOR_PICKUP",
//     //     "eventDescription": "READY_FOR_PICKUP",
//     //     "sourceSelected": "OPS",
//     //     "tModalTime": "1615519800000",
//     //     "OPSTime": "1628983800000",
//     //     "OPSTime2": "1632534300000",
//     //     "createdDate": "2021-03-22 12:39:14",
//     //     "updatedDate": "2021-08-26 11:30:24"
//     // },
//     // "terminalAppointment": {
//     //   "eventName": "UNLOAD_FROM_VESSEL",
//     //   "sourceSelected": "OPS",
//     //   "OPSTime": "1629939600000",
//     //   "createdDate": "2020-08-29 16:51:09",
//     //   "updatedDate": "2021-08-23 11:50:48"
//     // },
//     // "gateOut": {
//     //     "eventName": "GATE_OUT",
//     //     "eventDescription": "GATE_OUT",
//     //     "sourceSelected": "OPS",
//     //     "OPSTime": "1632531600000",
//     //     "createdDate": "2021-09-16 12:28:12",
//     //     "updatedDate": "2021-09-16 12:28:18"
//     // },
//     // "deliveryAppointment": {
//     //   "eventName": "UNLOAD_FROM_VESSEL",
//     //   "sourceSelected": "OPS",
//     //   "OPSTime": "1629939600000",
//     //   "createdDate": "2020-08-29 16:51:09",
//     //   "updatedDate": "2021-08-23 11:50:48"
//     // },
//     // "actualDelivery": {
//     //   "eventName": "UNLOAD_FROM_VESSEL",
//     //   "sourceSelected": "OPS",
//     //   "OPSTime": "1629939600000",
//     //   "createdDate": "2020-08-29 16:51:09",
//     //   "updatedDate": "2021-08-23 11:50:48"
//     // },
//     // "terminalReturnApp": {
//     //   "eventName": "UNLOAD_FROM_VESSEL",
//     //   "sourceSelected": "OPS",
//     //   "OPSTime": "1629939600000",
//     //   "createdDate": "2020-08-29 16:51:09",
//     //   "updatedDate": "2021-08-23 11:50:48"
//     // },
//     // "gateIn": {
//     //     "eventName": "GATE_IN",
//     //     "eventDescription": "GATE_IN",
//     //     "sourceSelected": "ENTITY_SOURCE_NONE",
//     //     "createdDate": "2020-08-29 16:51:09",
//     //     "updatedDate": "2021-08-23 11:50:48"
//     // },
//     // "done": {
//     //     "eventName": "CONTAINER_DONE",
//     //     "eventDescription": "DONE",
//     //     "sourceSelected": "ENTITY_SOURCE_NONE",
//     //     "createdDate": "2020-08-29 16:51:09",
//     //     "updatedDate": "2021-08-23 11:50:48"
//     // },
//     "shipmentIds": "KX-J2J1-3306"
// },
// {
//   "entityId": "OOLU9502347",
//   "entityType": "WORKFLOW_ENTITY_TYPE_CONTAINER",
//   "entityTimezone": "America/Los_Angeles",
//   "entityShipmentList": [
//       {
//           "portOfUnlading": "Oakland, USA",
//           "shipmentId": "KX-J2J1-3306",
//           "terminalName": "BEN.E NUTTER",
//           "bolDocNumber": "EGLV23590581111",
//           "masterBolNumber": "EGLV235900581111",
//           "scaccode": "EGLV",
//           "customerEmail": "lifestyle@shipment.klearexpress.com",
//           "purchaseOrder": "29452,2,2945",
//           "drayageEnabled": 1,
//           'vesselName': "One Maneuver",
//           'finalDelivery': "Sep 25th 2021, 6:00pm",
//           'seal': "35HC00",
//           'eta': 1629939600000,
//           'anRecieved': 1629939600000,
//           'doCreated': 1629939600000,
//           'doPublished': 1629939600000,
//           'berthingDate': 1629939600000
//       }
//   ],
//   "grounded": {
//       "eventName": "UNLOAD_FROM_VESSEL",
//       "sourceSelected": "OPS",
//       "OPSTime": "1629939600000",
//       "createdDate": "2020-08-29 16:51:09",
//       "updatedDate": "2021-08-23 11:50:48"
//   },
//   "customReleased": {
//       "eventName": "CUSTOM_RELEASED",
//       "eventDescription": "CUSTOM_RELEASED",
//       "sourceSelected": "OPS",
//       "OPSTime": "1629939600000",
//       "createdDate": "2021-03-22 12:39:14",
//       "updatedDate": "2021-03-23 21:29:29"
//   },
//   "carrierReleased": {
//       "eventName": "CARRIER_RELEASED",
//       "eventDescription": "LINE_RELEASED",
//       "sourceSelected": "OPS",
//       "OPSTime": "1598860800000",
//       "createdDate": "2021-08-26 06:43:27",
//       "updatedDate": "2021-08-26 06:43:27"
//   },
//   "holds": {
//       "eventName": "CONTAINER_HOLDS",
//       "sourceSelected": "OPS",
//       "holdStatus": "NO_HOLD",
//       // "eventDescription": "Some message comes here.",
//       "createdDate": "2021-08-24 08:06:22",
//       "updatedDate": "2021-08-26 08:05:13"
//   },
//   "fees": {
//       "eventName": "CONTAINER_FEES",
//       "sourceSelected": "OPS",
//       "feesStatus": "NO_DUES",
//       "createdDate": "2021-08-26 08:05:16",
//       "updatedDate": "2021-08-26 08:05:16"
//   },
//   "readyForPickup": {
//       "eventName": "READY_FOR_PICKUP",
//       "eventDescription": "READY_FOR_PICKUP",
//       "sourceSelected": "OPS",
//       "tModalTime": "1615519800000",
//       "OPSTime": "1628983800000",
//       "OPSTime2": "1632534300000",
//       "createdDate": "2021-03-22 12:39:14",
//       "updatedDate": "2021-08-26 11:30:24"
//   },
//   "terminalAppointment": {
//     "eventName": "UNLOAD_FROM_VESSEL",
//     "sourceSelected": "OPS",
//     "OPSTime": "1629939600000",
//     "createdDate": "2020-08-29 16:51:09",
//     "updatedDate": "2021-08-23 11:50:48"
//   },
//   "gateOut": {
//       "eventName": "GATE_OUT",
//       "eventDescription": "GATE_OUT",
//       "sourceSelected": "OPS",
//       "OPSTime": "1632531600000",
//       "createdDate": "2021-09-16 12:28:12",
//       "updatedDate": "2021-09-16 12:28:18"
//   },
//   "deliveryAppointment": {
//     "eventName": "UNLOAD_FROM_VESSEL",
//     "sourceSelected": "OPS",
//     "OPSTime": "1629939600000",
//     "createdDate": "2020-08-29 16:51:09",
//     "updatedDate": "2021-08-23 11:50:48"
//   },
//   "actualDelivery": {
//     "eventName": "UNLOAD_FROM_VESSEL",
//     "sourceSelected": "OPS",
//     "OPSTime": "1629939600000",
//     "createdDate": "2020-08-29 16:51:09",
//     "updatedDate": "2021-08-23 11:50:48"
//   },
//   "terminalReturnApp": {
//     "eventName": "UNLOAD_FROM_VESSEL",
//     "sourceSelected": "OPS",
//     "OPSTime": "1629939600000",
//     "createdDate": "2020-08-29 16:51:09",
//     "updatedDate": "2021-08-23 11:50:48"
//   },
//   "gateIn": {
//       "eventName": "GATE_IN",
//       "eventDescription": "GATE_IN",
//       "sourceSelected": "ENTITY_SOURCE_NONE",
//       "createdDate": "2020-08-29 16:51:09",
//       "updatedDate": "2021-08-23 11:50:48"
//   },
//   "done": {
//       "eventName": "CONTAINER_DONE",
//       "eventDescription": "DONE",
//       "sourceSelected": "ENTITY_SOURCE_NONE",
//       "createdDate": "2020-08-29 16:51:09",
//       "updatedDate": "2021-08-23 11:50:48"
//   },
//   "shipmentIds": "KX-J2J1-3306"
// },
// {
// "entityId": "OOLU9502347",
// "entityType": "WORKFLOW_ENTITY_TYPE_CONTAINER",
// "entityTimezone": "America/Los_Angeles",
// "entityShipmentList": [
//     {
//         "portOfUnlading": "Oakland, USA",
//         "shipmentId": "KX-J2J1-3306",
//         "terminalName": "BEN.E NUTTER",
//         "bolDocNumber": "EGLV23590581111",
//         "masterBolNumber": "EGLV235900581111",
//         "scaccode": "EGLV",
//         "customerEmail": "lifestyle@shipment.klearexpress.com",
//         "purchaseOrder": "29452,2,2945,43243,32534,54234,42234,2222",
//         "drayageEnabled": 1,
//         'vesselName': "One Maneuver",
//         'finalDelivery': "Sep 25th 2021, 6:00pm",
//         'seal': "35HC00",
//         'eta': 1629939600000,
//         'anRecieved': 1629939600000,
//         'doCreated': 1629939600000,
//         'doPublished': 1629939600000,
//         'berthingDate': 1629939600000
//     }
// ],
// "grounded": {
//     "eventName": "UNLOAD_FROM_VESSEL",
//     "sourceSelected": "OPS",
//     "OPSTime": "1629939600000",
//     "createdDate": "2020-08-29 16:51:09",
//     "updatedDate": "2021-08-23 11:50:48"
// },
// "customReleased": {
//     "eventName": "CUSTOM_RELEASED",
//     "eventDescription": "CUSTOM_RELEASED",
//     "sourceSelected": "OPS",
//     "OPSTime": "1629939600000",
//     "createdDate": "2021-03-22 12:39:14",
//     "updatedDate": "2021-03-23 21:29:29"
// },
// "carrierReleased": {
//     "eventName": "CARRIER_RELEASED",
//     "eventDescription": "LINE_RELEASED",
//     "sourceSelected": "OPS",
//     "OPSTime": "1598860800000",
//     "createdDate": "2021-08-26 06:43:27",
//     "updatedDate": "2021-08-26 06:43:27"
// },
// "holds": {
//     "eventName": "CONTAINER_HOLDS",
//     "sourceSelected": "OPS",
//     "holdStatus": "NO_HOLD",
//     // "eventDescription": "Some message comes here.",
//     "createdDate": "2021-08-24 08:06:22",
//     "updatedDate": "2021-08-26 08:05:13"
// },
// "fees": {
//     "eventName": "CONTAINER_FEES",
//     "sourceSelected": "OPS",
//     "feesStatus": "NO_DUES",
//     "createdDate": "2021-08-26 08:05:16",
//     "updatedDate": "2021-08-26 08:05:16"
// },
// "readyForPickup": {
//     "eventName": "READY_FOR_PICKUP",
//     "eventDescription": "READY_FOR_PICKUP",
//     "sourceSelected": "OPS",
//     "tModalTime": "1615519800000",
//     "OPSTime": "1628983800000",
//     "OPSTime2": "1632534300000",
//     "createdDate": "2021-03-22 12:39:14",
//     "updatedDate": "2021-08-26 11:30:24"
// },
// "terminalAppointment": {
//   "eventName": "UNLOAD_FROM_VESSEL",
//   "sourceSelected": "OPS",
//   "OPSTime": "1629939600000",
//   "createdDate": "2020-08-29 16:51:09",
//   "updatedDate": "2021-08-23 11:50:48"
// },
// "gateOut": {
//     "eventName": "GATE_OUT",
//     "eventDescription": "GATE_OUT",
//     "sourceSelected": "OPS",
//     "OPSTime": "1632531600000",
//     "createdDate": "2021-09-16 12:28:12",
//     "updatedDate": "2021-09-16 12:28:18"
// },
// "deliveryAppointment": {
//   "eventName": "UNLOAD_FROM_VESSEL",
//   "sourceSelected": "OPS",
//   "OPSTime": "1629939600000",
//   "createdDate": "2020-08-29 16:51:09",
//   "updatedDate": "2021-08-23 11:50:48"
// },
// "actualDelivery": {
//   "eventName": "UNLOAD_FROM_VESSEL",
//   "sourceSelected": "OPS",
//   "OPSTime": "1629939600000",
//   "createdDate": "2020-08-29 16:51:09",
//   "updatedDate": "2021-08-23 11:50:48"
// },
// "terminalReturnApp": {
//   "eventName": "UNLOAD_FROM_VESSEL",
//   "sourceSelected": "OPS",
//   "OPSTime": "1629939600000",
//   "createdDate": "2020-08-29 16:51:09",
//   "updatedDate": "2021-08-23 11:50:48"
// },
// "gateIn": {
//     "eventName": "GATE_IN",
//     "eventDescription": "GATE_IN",
//     "sourceSelected": "ENTITY_SOURCE_NONE",
//     "createdDate": "2020-08-29 16:51:09",
//     "updatedDate": "2021-08-23 11:50:48"
// },
// "done": {
//     "eventName": "CONTAINER_DONE",
//     "eventDescription": "DONE",
//     "sourceSelected": "ENTITY_SOURCE_NONE",
//     "createdDate": "2020-08-29 16:51:09",
//     "updatedDate": "2021-08-23 11:50:48"
// },
// "shipmentIds": "KX-J2J1-3306"
// },
// {
// "entityId": "OOLU9502347",
// "entityType": "WORKFLOW_ENTITY_TYPE_CONTAINER",
// "entityTimezone": "America/Los_Angeles",
// "entityShipmentList": [
//   {
//       "portOfUnlading": "Oakland, USA",
//       "shipmentId": "KX-J2J1-3306",
//       "terminalName": "BEN.E NUTTER",
//       "bolDocNumber": "EGLV23590581111",
//       "masterBolNumber": "EGLV235900581111",
//       "scaccode": "EGLV",
//       "customerEmail": "lifestyle@shipment.klearexpress.com",
//       "purchaseOrder": "29452,2,2945",
//       "drayageEnabled": 1,
//       'vesselName': "One Maneuver",
//       'finalDelivery': "Sep 25th 2021, 6:00pm",
//       'seal': "35HC00",
//       'eta': 1629939600000,
//       'anRecieved': 1629939600000,
//       'doCreated': 1629939600000,
//       'doPublished': 1629939600000,
//       'berthingDate': 1629939600000
//   }
// ],
// "grounded": {
//   "eventName": "UNLOAD_FROM_VESSEL",
//   "sourceSelected": "OPS",
//   "OPSTime": "1629939600000",
//   "createdDate": "2020-08-29 16:51:09",
//   "updatedDate": "2021-08-23 11:50:48"
// },
// "customReleased": {
//   "eventName": "CUSTOM_RELEASED",
//   "eventDescription": "CUSTOM_RELEASED",
//   "sourceSelected": "OPS",
//   "OPSTime": "1629939600000",
//   "createdDate": "2021-03-22 12:39:14",
//   "updatedDate": "2021-03-23 21:29:29"
// },
// "carrierReleased": {
//   "eventName": "CARRIER_RELEASED",
//   "eventDescription": "LINE_RELEASED",
//   "sourceSelected": "OPS",
//   "OPSTime": "1598860800000",
//   "createdDate": "2021-08-26 06:43:27",
//   "updatedDate": "2021-08-26 06:43:27"
// },
// "holds": {
//   "eventName": "CONTAINER_HOLDS",
//   "sourceSelected": "OPS",
//   "holdStatus": "NO_HOLD",
//   // "eventDescription": "Some message comes here.",
//   "createdDate": "2021-08-24 08:06:22",
//   "updatedDate": "2021-08-26 08:05:13"
// },
// "fees": {
//   "eventName": "CONTAINER_FEES",
//   "sourceSelected": "OPS",
//   "feesStatus": "NO_DUES",
//   "createdDate": "2021-08-26 08:05:16",
//   "updatedDate": "2021-08-26 08:05:16"
// },
// "readyForPickup": {
//   "eventName": "READY_FOR_PICKUP",
//   "eventDescription": "READY_FOR_PICKUP",
//   "sourceSelected": "OPS",
//   "tModalTime": "1615519800000",
//   "OPSTime": "1628983800000",
//   "OPSTime2": "1632534300000",
//   "createdDate": "2021-03-22 12:39:14",
//   "updatedDate": "2021-08-26 11:30:24"
// },
// "terminalAppointment": {
//   "eventName": "UNLOAD_FROM_VESSEL",
//   "sourceSelected": "OPS",
//   "OPSTime": "1629939600000",
//   "createdDate": "2020-08-29 16:51:09",
//   "updatedDate": "2021-08-23 11:50:48"
// },
// "gateOut": {
//   "eventName": "GATE_OUT",
//   "eventDescription": "GATE_OUT",
//   "sourceSelected": "OPS",
//   "OPSTime": "1632531600000",
//   "createdDate": "2021-09-16 12:28:12",
//   "updatedDate": "2021-09-16 12:28:18"
// },
// "deliveryAppointment": {
// "eventName": "UNLOAD_FROM_VESSEL",
// "sourceSelected": "OPS",
// "OPSTime": "1629939600000",
// "createdDate": "2020-08-29 16:51:09",
// "updatedDate": "2021-08-23 11:50:48"
// },
// "actualDelivery": {
// "eventName": "UNLOAD_FROM_VESSEL",
// "sourceSelected": "OPS",
// "OPSTime": "1629939600000",
// "createdDate": "2020-08-29 16:51:09",
// "updatedDate": "2021-08-23 11:50:48"
// },
// "terminalReturnApp": {
// "eventName": "UNLOAD_FROM_VESSEL",
// "sourceSelected": "OPS",
// "OPSTime": "1629939600000",
// "createdDate": "2020-08-29 16:51:09",
// "updatedDate": "2021-08-23 11:50:48"
// },
// "gateIn": {
//   "eventName": "GATE_IN",
//   "eventDescription": "GATE_IN",
//   "sourceSelected": "ENTITY_SOURCE_NONE",
//   "createdDate": "2020-08-29 16:51:09",
//   "updatedDate": "2021-08-23 11:50:48"
// },
// "done": {
//   "eventName": "CONTAINER_DONE",
//   "eventDescription": "DONE",
//   "sourceSelected": "ENTITY_SOURCE_NONE",
//   "createdDate": "2020-08-29 16:51:09",
//   "updatedDate": "2021-08-23 11:50:48"
// },
// "shipmentIds": "KX-J2J1-3306"
// }
// ]


// }
export var shortDateFormatterV2WithoutTz = function shortDateFormatterV2WithoutTz(_ref) {
  var seconds = _ref.seconds;

  // console.log("shortDateFormatterV2WithoutTz, Got time as ", seconds)
  var date = new Date(seconds);
  console.log("Got date as ", date);

  var utcDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  console.log("Got date as2 ", utcDate);

  return new Date(utcDate);
};
