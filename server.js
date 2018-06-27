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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECT_ALL_TODO = exports.DELETE_TODO = exports.ADD_TODO = exports.LOADING = undefined;
exports.tasksFetchDataSuccess = tasksFetchDataSuccess;
exports.tasksDeleteSuccess = tasksDeleteSuccess;
exports.tasksAddSuccess = tasksAddSuccess;
exports.fetchTodos = fetchTodos;
exports.deleteTodo = deleteTodo;
exports.addTask = addTask;

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING = exports.LOADING = 'LOADING';

var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';

var DELETE_TODO = exports.DELETE_TODO = 'DELETE_TODO';

var SELECT_ALL_TODO = exports.SELECT_ALL_TODO = 'SELECT_ALL_TODO';

function tasksFetchDataSuccess(items) {
  return {
    type: SELECT_ALL_TODO,
    payload: items
  };
}

function tasksDeleteSuccess(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}

function tasksAddSuccess(description) {
  console.log('in success add', description);
  return {
    type: ADD_TODO,
    payload: description
  };
}

function fetchTodos() {
  return function (dispatch) {
    return _axios2.default.get('http://127.0.0.1:4000/').then(function (response) {
      dispatch(tasksFetchDataSuccess(response.data.data));
    });
  };
}

function deleteTodo(task_id) {
  return function (dispatch) {
    return (0, _axios2.default)({
      method: 'delete',
      url: 'http://127.0.0.1:4000/pop',
      params: { id: task_id }
    }).then(dispatch(tasksDeleteSuccess(task_id)));
  };
}

function addTask(text) {
  return function (dispatch) {
    (0, _axios2.default)({
      method: 'post',
      url: 'http://127.0.0.1:4000/todos',
      params: text
    }).then(dispatch(tasksAddSuccess(text)));
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _redux = __webpack_require__(3);

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

var _AddTodo = __webpack_require__(8);

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _Todos = __webpack_require__(11);

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
        _react2.default.createElement(_AddTodo2.default, null),
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
exports.mapDispatchToProps = undefined;

var _reactRedux = __webpack_require__(1);

var _index = __webpack_require__(2);

var _index2 = __webpack_require__(10);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addTask: function addTask(description) {
      return dispatch((0, _index.addTask)({ description: description }));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_index3.default);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

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

var AddTodo = function AddTodo(_ref) {
  var addTask = _ref.addTask;

  var input = void 0;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: function onSubmit(e) {
          e.preventDefault();
          addTask(input.value);
          input.value = '';
        } },
      _react2.default.createElement('input', { type: 'text', id: 'inputTask', ref: function ref(node) {
          input = node;
        }, placeholder: 'input todo' }),
      _react2.default.createElement(
        'button',
        { className: 'btn2', type: 'submit' },
        ' Add Todo '
      )
    )
  );
};

exports.default = AddTodo;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _ListTodos = __webpack_require__(12);

var _ListTodos2 = _interopRequireDefault(_ListTodos);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return { todos: state.todos };
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: function deleteTodo(id) {
      return dispatch((0, _actions.deleteTodo)(id));
    },
    fetchTodos: function fetchTodos() {
      return dispatch((0, _actions.fetchTodos)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ListTodos2.default);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = function TodoList(_ref) {
  var todos = _ref.todos,
      onDeleteTodo = _ref.onDeleteTodo,
      onGet = _ref.onGet;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "ul",
      { className: "list-group" },
      todos.map(function (todo) {
        return _react2.default.createElement(
          "li",
          { key: todo.task_id, name: "nameTask", className: "list-group-item" },
          todo.description,
          _react2.default.createElement(
            "button",
            {
              type: "button",
              className: "close right",
              "aria-label": "Close",
              onClick: function onClick() {
                return onDeleteTodo(todo.task_id);
              },
              style: { marginLeft: '5px' }
            },
            _react2.default.createElement(
              "span",
              { "aria-hidden": "true" },
              "\xD7"
            )
          )
        );
      })
    ),
    _react2.default.createElement(
      "button",
      { onClick: onGet(), type: "button" },
      "GET"
    )
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(3);

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

var _actions = __webpack_require__(2);

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

/***/ })
/******/ ]);