/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECT_ALL_TODO = exports.DELETE_TODO = exports.ADD_TODO = undefined;
exports.testing = testing;
exports.fetchTodos = fetchTodos;
exports.deleteTodo = deleteTodo;
exports.addTask = addTask;

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';

var DELETE_TODO = exports.DELETE_TODO = 'DELETE_TODO';

var SELECT_ALL_TODO = exports.SELECT_ALL_TODO = 'SELECT_ALL_TODO';

function testing(text) {
  return {
    type: "TEST",
    text: text
  };
}

function fetchTodos() {
  return function (dispatch) {
    return _axios2.default.get('http://127.0.0.1:4000/').then(function (response) {
      dispatch({ type: SELECT_ALL_TODO, payload: response.data.data });
    });
  };
}

function deleteTodo(task_id) {
  return function (dispatch) {
    return (0, _axios2.default)({
      method: 'post',
      url: 'http://127.0.0.1:4000/pop',
      params: { id: task_id }
    }).then(dispatch({ type: DELETE_TODO, payload: task_id }));
  };
}

function addTask(text) {
  return function (dispatch) {
    (0, _axios2.default)({
      method: 'post',
      url: 'http://127.0.0.1:4000/todos',
      params: text
    }).then(function () {
      dispatch({ type: ADD_TODO, payload: text });
    });
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _redux = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(13);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static("public"));

app.use(handleRender);

function handleRender(req, res) {

  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_App2.default, null)
  ));
  var preloadedState = _store2.default.getState();

  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return "\n  <!DOCTYPE html>\n  <html>\n      <head>\n        <title>Redux SSr</title>\n        <script src=\"/bundle.js\" defer></script>\n        </head>\n      <body>\n        <div id=\"root\">" + html + "</div>\n        <script>window.__PRELOADED_STATE__ = " + JSON.stringify(preloadedState).replace(/</g, "\\u003c") + "</script>\n        </body>\n    </html>\n    ";
}

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AddTodos = __webpack_require__(8);

var _AddTodos2 = _interopRequireDefault(_AddTodos);

var _Todos = __webpack_require__(12);

var _Todos2 = _interopRequireDefault(_Todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AddTodos2.default, null),
        _react2.default.createElement(_Todos2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _Label = __webpack_require__(10);

var _Label2 = _interopRequireDefault(_Label);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addTask: function addTask(todo) {
      return dispatch((0, _actions.addTask)(todo));
    }
  };
};

var ConnectedForm = function (_React$Component) {
  _inherits(ConnectedForm, _React$Component);

  function ConnectedForm() {
    _classCallCheck(this, ConnectedForm);

    var _this = _possibleConstructorReturn(this, (ConnectedForm.__proto__ || Object.getPrototypeOf(ConnectedForm)).call(this));

    _this.state = {
      description: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ConnectedForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ description: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var description = this.state.description;

      if (!description.length) {
        return 403;
      } else {
        this.props.addTask({ description: description });
      }
      this.setState({ description: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      var description = this.state.description;

      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(_Label2.default, { title: 'add task' }),
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control',
            id: 'title',
            value: description,
            onChange: this.handleChange
          })
        ),
        _react2.default.createElement(_Button2.default, {
          name: 'save',
          type: 'submit'
        })
      );
    }
  }]);

  return ConnectedForm;
}(_react2.default.Component);

var Form = (0, _reactRedux.connect)(null, mapDispatchToProps)(ConnectedForm);

exports.default = Form;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
                          value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
                          return _react2.default.createElement(
                                                    "button",
                                                    { className: "square", type: props.type, onClick: props.onClick },
                                                    props.name
                          );
};

exports.default = Button;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(props) {
  return _react2.default.createElement(
    'label',
    null,
    props.title
  );
};

exports.default = Label;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _ListTodos = __webpack_require__(16);

var _ListTodos2 = _interopRequireDefault(_ListTodos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return { todos: state.todos };
};

var Todos = function Todos(_ref) {
  var todos = _ref.todos;
  return _react2.default.createElement(_ListTodos2.default, { todos: todos });
};

var List = (0, _reactRedux.connect)(mapStateToProps, null)(_ListTodos2.default);

exports.default = List;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _reduxThunk = __webpack_require__(14);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _store = __webpack_require__(15);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_store2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var inititalState = {
  todos: []
};

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inititalState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ADD_TODO:
      return _extends({}, state, { todos: [].concat(_toConsumableArray(state.todos), [action.payload]) });
    case _actions.SELECT_ALL_TODO:
      return _extends({}, state, { todos: action.payload });
    case _actions.DELETE_TODO:
      return _extends({}, state, { todos: state.todos.filter(function (todo) {
          return todo.task_id !== action.payload;
        }) });
    default:
      return state;
  }
};

exports.default = rootReducer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: function deleteTodo(id) {
      return dispatch((0, _actions.deleteTodo)(id));
    },
    fetchTodos: function fetchTodos() {
      return dispatch((0, _actions.fetchTodos)());
    }
  };
};

var ListTodos = function (_React$Component) {
  _inherits(ListTodos, _React$Component);

  function ListTodos() {
    _classCallCheck(this, ListTodos);

    return _possibleConstructorReturn(this, (ListTodos.__proto__ || Object.getPrototypeOf(ListTodos)).apply(this, arguments));
  }

  _createClass(ListTodos, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchTodos();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var todos = this.props.todos;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'list-group' },
          todos.map(function (todo) {
            return _react2.default.createElement(
              'li',
              { key: todo.task_id, className: 'list-group-item' },
              todo.description,
              _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'close right',
                  'aria-label': 'Close',
                  onClick: function onClick() {
                    return _this2.props.deleteTodo(todo.task_id);
                  },
                  style: { marginLeft: '5px' }
                },
                _react2.default.createElement(
                  'span',
                  { 'aria-hidden': 'true' },
                  '\xD7'
                )
              )
            );
          })
        )
      );
    }
  }]);

  return ListTodos;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ListTodos);

/***/ })
/******/ ]);