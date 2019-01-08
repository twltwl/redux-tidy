"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.organizeReducers = exports.makeReducer = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var makeReducer = function makeReducer(_name, initialState) {
  var transitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var t = _objectSpread({}, transitions, {
      name: function name() {
        return _name;
      }
    });

    var fn = t[action.type];

    if (!fn) {
      return state;
    }

    return fn(state, action);
  };
};

exports.makeReducer = makeReducer;

var organizeReducers = function organizeReducers(reducers) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return reducers.reduce(function (state, reducer) {
    return _objectSpread({}, state, _defineProperty({}, reducer({}, {
      type: 'name'
    }), func && reducer || reducer()));
  }, {});
};

exports.organizeReducers = organizeReducers;
