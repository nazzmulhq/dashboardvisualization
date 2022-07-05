'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var material = require('@mui/material');
var styles = require('@mui/material/styles');
var Chart = _interopDefault(require('react-apexcharts'));
var TrendingDownIcon = _interopDefault(require('@mui/icons-material/TrendingDown'));
var icons = require('@tabler/icons');
var axios = _interopDefault(require('axios'));
var ArrowUpwardIcon = _interopDefault(require('@mui/icons-material/ArrowUpward'));
var EmojiEventsTwoToneIcon = _interopDefault(require('@mui/icons-material/EmojiEventsTwoTone'));
var system = require('@mui/system');
var ArrowForwardIosSharpIcon = _interopDefault(require('@mui/icons-material/ArrowForwardIosSharp'));
var MuiAccordion = _interopDefault(require('@mui/material/Accordion'));
var MuiAccordionDetails = _interopDefault(require('@mui/material/AccordionDetails'));
var MuiAccordionSummary = _interopDefault(require('@mui/material/AccordionSummary'));
var Typography = _interopDefault(require('@mui/material/Typography'));
var AdapterDateFns = _interopDefault(require('@mui/lab/AdapterDateFns'));
var DatePicker = _interopDefault(require('@mui/lab/DatePicker'));
var LocalizationProvider = _interopDefault(require('@mui/lab/LocalizationProvider'));
var DateRangePicker = _interopDefault(require('rsuite/DateRangePicker'));
require('rsuite/dist/rsuite.min.css');
var Autocomplete = _interopDefault(require('@mui/material/Autocomplete'));
var TextField$1 = _interopDefault(require('@mui/material/TextField'));
var InputLabel = _interopDefault(require('@mui/material/InputLabel'));
var _ = _interopDefault(require('lodash'));
var CheckBoxIcon = _interopDefault(require('@mui/icons-material/CheckBox'));
var CheckBoxOutlineBlankIcon = _interopDefault(require('@mui/icons-material/CheckBoxOutlineBlank'));
var Checkbox = _interopDefault(require('@mui/material/Checkbox'));
var ChevronLeftIcon = _interopDefault(require('@mui/icons-material/ChevronLeft'));
var ChevronRightIcon = _interopDefault(require('@mui/icons-material/ChevronRight'));
var FilterAltIcon = _interopDefault(require('@mui/icons-material/FilterAlt'));
var Box = _interopDefault(require('@mui/material/Box'));
var Divider = _interopDefault(require('@mui/material/Divider'));
var Drawer = _interopDefault(require('@mui/material/Drawer'));
var IconButton = _interopDefault(require('@mui/material/IconButton'));
var AddIcon = _interopDefault(require('@mui/icons-material/Add'));
var RemoveIcon = _interopDefault(require('@mui/icons-material/Remove'));
var RestartAltIcon = _interopDefault(require('@mui/icons-material/RestartAlt'));
var reactZoomPanPinch = require('react-zoom-pan-pinch');
var styles$1 = require('@mui/styles');
var SearchIcon = _interopDefault(require('@mui/icons-material/Search'));
var CssBaseline = _interopDefault(require('@mui/material/CssBaseline'));
var MaUTable = _interopDefault(require('@mui/material/Table'));
var TableBody = _interopDefault(require('@mui/material/TableBody'));
var TableCell = _interopDefault(require('@mui/material/TableCell'));
var TableHead = _interopDefault(require('@mui/material/TableHead'));
var TableRow = _interopDefault(require('@mui/material/TableRow'));
var reactTable = require('react-table');
var redux = require('redux');
var reduxDevtoolsExtension = require('redux-devtools-extension');
require('redux-persist');
var thunk = _interopDefault(require('redux-thunk'));

var TEXT = 'text';
var NUMBER = 'number';
var TIME = 'time';
var DATE = 'date';
var DATE_RANGE = 'date-range';
var DATE_TIME = 'date-range';
var RADIO = 'radio';
var DROPDOWN = 'dropdown';
var DROPDOWN_WITH_CHECKBOX = 'dropdown-with-checkbox';
var CHECKBOX = 'checkbox';
var FILTER = 'filter';
var DASHBOARD_CARDS = 'dashboardCards';
var CHART = 'chart';
var TABLE = 'table';
var BAR_CHART = 'bar';
var LINE_CHART = 'line';
var PIE_CHART = 'pie';
var AREA_CHART = 'area';
var MAP_CHART = 'map';
var DRAWER = 'drawer';
var DEFAULT = 'default';

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var UI_CONFIG_CHANGE = '@UI_CONFIG/CHANGE';
var initialState = {
  accordionOpen: 'filter',
  serverCall: 0,
  drawerOpen: false
};

var uiConfigChangeReducer = function uiConfigChangeReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case UI_CONFIG_CHANGE:
      {
        return _extends({}, state, action.payload);
      }

    default:
      {
        return _extends({}, state);
      }
  }
};

function useUiConfigChangeReducer(item) {
  if (item === void 0) {
    item = null;
  }

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.uiConfigChange;
  }),
      accordionOpen = _useSelector.accordionOpen,
      serverCall = _useSelector.serverCall,
      drawerOpen = _useSelector.drawerOpen;

  var dispatch = reactRedux.useDispatch(); // for accordion

  var handleAccordionOpen = function handleAccordionOpen(panel) {
    return function (_event, newExpanded) {
      dispatch({
        type: UI_CONFIG_CHANGE,
        payload: {
          accordionOpen: newExpanded ? panel : false
        }
      });
    };
  }; // for drawer


  var handleDrawerOpen = function handleDrawerOpen() {
    dispatch({
      type: UI_CONFIG_CHANGE,
      payload: {
        drawerOpen: true
      }
    });
  };

  var handleDrawerClose = function handleDrawerClose() {
    dispatch({
      type: UI_CONFIG_CHANGE,
      payload: {
        drawerOpen: false
      }
    });
  }; // for server call


  var handleServerCall = function handleServerCall() {
    dispatch({
      type: UI_CONFIG_CHANGE,
      payload: {
        serverCall: serverCall + 1
      }
    });
  }; // for server call with item data


  React.useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _item;

      var _item2;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(serverCall && (_item = item) != null && _item.api)) {
                _context.next = 9;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return axios.get((_item2 = item) == null ? void 0 : _item2.api);

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6]]);
    }))(); // eslint-disable-next-line

  }, [serverCall]);
  return {
    serverCall: serverCall,
    accordionOpen: accordionOpen,
    drawerOpen: drawerOpen,
    handleServerCall: handleServerCall,
    handleAccordionOpen: handleAccordionOpen,
    handleDrawerOpen: handleDrawerOpen,
    handleDrawerClose: handleDrawerClose
  };
}

// material-ui

var AreaChart = function AreaChart(_ref) {
  var chartData = _ref.chartData;
  var config = chartData.config;
  var theme = styles.useTheme();
  useUiConfigChangeReducer(chartData);
  return React__default.createElement(React__default.Fragment, null, (chartData == null ? void 0 : chartData.title) && React__default.createElement(material.Box, {
    marginBottom: 2
  }, React__default.createElement(material.CardHeader, {
    title: chartData.title,
    sx: {
      textAlign: chartData.titlePosition
    }
  }), React__default.createElement(material.Divider, null)), React__default.createElement(material.Grid, {
    container: true,
    direction: "column",
    spacing: 3
  }, React__default.createElement(material.Grid, {
    item: true,
    container: true,
    spacing: 3,
    alignItems: "center"
  }, React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    variant: "h5"
  }, "Market Share")), React__default.createElement(material.Grid, {
    item: true,
    xs: true,
    zeroMinWidth: true
  }), React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(TrendingDownIcon, {
    fontSize: "large",
    color: "error"
  })), React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    variant: "h5"
  }, "27, 695.65"))), React__default.createElement(material.Grid, {
    item: true,
    xs: 12
  }, React__default.createElement(material.Typography, {
    sx: {
      mt: -2.5,
      fontWeight: 400
    },
    color: "inherit",
    variant: "h6"
  }, "Department wise monthly sales report")), React__default.createElement(material.Grid, {
    item: true,
    container: true,
    justifyContent: "space-around",
    alignItems: "center",
    spacing: 3
  }, React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Grid, {
    container: true,
    alignItems: "center",
    spacing: 1
  }, React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    sx: {
      width: 40,
      height: 40,
      color: theme.palette.secondary.main,
      borderRadius: '12px',
      padding: 1,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background["default"] : theme.palette.secondary.light
    }
  }, React__default.createElement(icons.IconBrandFacebook, {
    stroke: 1.5
  }))), React__default.createElement(material.Grid, {
    item: true,
    sm: true,
    zeroMinWidth: true
  }, React__default.createElement(material.Typography, {
    variant: "h5"
  }, "+45.36%")))), React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Grid, {
    container: true,
    alignItems: "center",
    spacing: 1
  }, React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    sx: {
      width: 40,
      height: 40,
      color: theme.palette.primary.main,
      borderRadius: '12px',
      padding: 1,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background["default"] : theme.palette.primary.light
    }
  }, React__default.createElement(icons.IconBrandTwitter, {
    stroke: 1.5
  }))), React__default.createElement(material.Grid, {
    item: true,
    sm: true,
    zeroMinWidth: true
  }, React__default.createElement(material.Typography, {
    variant: "h5"
  }, "- 50.69%")))), React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Grid, {
    container: true,
    alignItems: "center",
    spacing: 2
  }, React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    sx: {
      width: 40,
      height: 40,
      color: theme.palette.error.main,
      borderRadius: '12px',
      padding: 1,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background["default"] : '#ffe9e9'
    }
  }, React__default.createElement(icons.IconBrandYoutube, {
    stroke: 2
  }))), React__default.createElement(material.Grid, {
    item: true,
    sm: true,
    zeroMinWidth: true
  }, React__default.createElement(material.Typography, {
    variant: "h5"
  }, "+ 16.85%")))), React__default.createElement(material.Grid, {
    item: true,
    xs: true,
    zeroMinWidth: true
  }))), React__default.createElement(Chart, Object.assign({}, config)));
};

// material-ui

var BarChart = function BarChart(_ref) {
  var chartData = _ref.chartData;
  var theme = styles.useTheme();
  var config = chartData.config;
  useUiConfigChangeReducer(chartData);
  return React__default.createElement(React__default.Fragment, null, chartData.title && React__default.createElement(material.Box, {
    marginBottom: 2
  }, React__default.createElement(material.CardHeader, {
    title: chartData.title,
    sx: {
      textAlign: chartData.titlePosition
    }
  }), React__default.createElement(material.Divider, null)), React__default.createElement(material.Box, {
    sx: {
      p: 3
    }
  }, React__default.createElement(material.Grid, {
    container: true,
    spacing: 1,
    alignItems: "center"
  }, React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    variant: "subtitle1"
  }, "New Stock")), React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    variant: "caption"
  }, "(Purchased)"))), React__default.createElement(material.Grid, {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    variant: "h4"
  }, "0.85%")), React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Grid, {
    container: true,
    spacing: 1,
    alignItems: "center",
    style: {
      color: theme.palette.info.main
    }
  }, React__default.createElement(ArrowUpwardIcon, {
    color: "inherit"
  }), React__default.createElement(material.Typography, {
    variant: "h4",
    color: "inherit"
  }, "0.50%"))))), React__default.createElement(Chart, Object.assign({}, config)));
};

// material-ui

var LineChart = function LineChart(_ref) {
  var chartData = _ref.chartData;
  var config = chartData.config;
  useUiConfigChangeReducer(chartData);
  return React__default.createElement(React__default.Fragment, null, chartData.title && React__default.createElement(material.Box, {
    marginBottom: 2
  }, React__default.createElement(material.CardHeader, {
    title: chartData.title,
    sx: {
      textAlign: chartData.titlePosition
    }
  }), React__default.createElement(material.Divider, null)), React__default.createElement(material.Card, null, React__default.createElement(material.Box, {
    sx: {
      bgcolor: chartData.bgColorForChart ? chartData.bgColorForChart : ''
    }
  }, React__default.createElement(material.Box, {
    sx: {
      p: 2.5
    }
  }, React__default.createElement(material.Grid, {
    container: true,
    direction: "column"
  }, React__default.createElement(material.Grid, {
    item: true,
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    variant: "h3",
    color: chartData.textColorForChart
  }, "4000")), React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    variant: "body2",
    color: chartData.textColorForChart
  }, "42%"))), React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    variant: "body2",
    color: chartData.textColorForChart
  }, "Total Sales")))), React__default.createElement(Chart, Object.assign({}, config)))));
};

// material-ui
// =========================|| SATISFACTION CHART CARD ||========================= //

var PieChart = function PieChart(_ref) {
  var chartData = _ref.chartData;
  var config = chartData.config;
  useUiConfigChangeReducer(chartData);
  return React__default.createElement(React__default.Fragment, null, chartData.title && React__default.createElement(material.Box, {
    marginBottom: 2
  }, React__default.createElement(material.CardHeader, {
    title: chartData.title,
    sx: {
      textAlign: chartData.titlePosition
    }
  }), React__default.createElement(material.Divider, null)), React__default.createElement(material.Grid, {
    container: true,
    direction: "column",
    spacing: 1
  }, React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(material.Typography, {
    variant: "subtitle1"
  }, "Customer Satisfaction")), React__default.createElement(material.Grid, {
    item: true
  }, React__default.createElement(Chart, Object.assign({}, config)))));
};

function Charts(charts) {
  var getChart = function getChart() {
    switch (charts.config.type) {
      case BAR_CHART:
        return React__default.createElement(BarChart, {
          chartData: charts
        });

      case AREA_CHART:
        return React__default.createElement(AreaChart, {
          chartData: charts
        });

      case PIE_CHART:
        return React__default.createElement(PieChart, {
          chartData: charts
        });

      case LINE_CHART:
        return React__default.createElement(LineChart, {
          chartData: charts
        });
    }
  };

  return React__default.createElement(React__default.Fragment, null, " ", getChart(), " ");
}

// material-ui

var IconWrapper = /*#__PURE__*/styles.styled('div')({
  position: 'absolute',
  left: '-17px',
  bottom: '-27px',
  color: '#fff',
  transform: 'rotate(25deg)',
  '&> svg': {
    width: '100px',
    height: '100px',
    opacity: '0.35'
  }
}); // =============================|| USER NUM CARD ||============================= //

var DashboardCard = function DashboardCard(_ref) {
  var item = _ref.item;
  useUiConfigChangeReducer(item);
  return React__default.createElement(React__default.Fragment, null, item.title && React__default.createElement(material.Box, {
    marginBottom: 2
  }, React__default.createElement(material.CardHeader, {
    title: item.title,
    sx: {
      textAlign: item.titlePosition
    }
  }), React__default.createElement(material.Divider, null)), React__default.createElement(material.Grid, {
    container: true,
    spacing: 2
  }, item.config.map(function (card, index) {
    return React__default.createElement(material.Grid, {
      item: true,
      xs: card.xs,
      md: card.md
    }, React__default.createElement(material.Card, {
      sx: {
        background: card.color,
        position: 'relative',
        color: '#fff'
      },
      key: index
    }, React__default.createElement(material.CardContent, null, React__default.createElement(IconWrapper, null, React__default.createElement(EmojiEventsTwoToneIcon, null)), React__default.createElement(material.Grid, {
      container: true,
      direction: "column",
      justifyContent: "center",
      alignItems: "center",
      spacing: 1
    }, React__default.createElement(material.Grid, {
      item: true,
      sm: 12
    }, React__default.createElement(material.Typography, {
      variant: "h3",
      align: "center",
      color: "inherit"
    }, card.value)), React__default.createElement(material.Grid, {
      item: true,
      sm: 12
    }, React__default.createElement(material.Typography, {
      variant: "body1",
      align: "center",
      color: "inherit"
    }, card.title))))));
  })));
};

var options = [{
  label: 'Dhaka',
  id: 1,
  type: 'division',
  child: 'district'
}, {
  label: 'Khulna',
  id: 2,
  type: 'division',
  child: 'district'
}, {
  label: 'Rangpur',
  id: 3,
  type: 'division',
  child: 'district'
}, {
  label: 'Barisal',
  id: 4,
  type: 'division',
  child: 'district'
}];
var radioOptions = [{
  label: 'Male',
  id: 1,
  type: 'division',
  child: 'district'
}, {
  label: 'Female',
  id: 2,
  type: 'division',
  child: 'district'
}, {
  label: 'Other',
  id: 3,
  type: 'division',
  child: 'district'
}];
var movies = [{
  label: 'The Shawshank Redemption',
  year: 1994
}, {
  label: 'The Godfather',
  year: 1972
}, {
  label: 'The Godfather: Part II',
  year: 1974
}, {
  label: 'The Dark Knight',
  year: 2008
}, {
  label: '12 Angry Men',
  year: 1957
}, {
  label: "Schindler's List",
  year: 1993
}, {
  label: 'Pulp Fiction',
  year: 1994
}, {
  label: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  label: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  label: 'Fight Club',
  year: 1999
}, {
  label: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  label: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  label: 'Forrest Gump',
  year: 1994
}, {
  label: 'Inception',
  year: 2010
}, {
  label: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  label: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  label: 'Goodfellas',
  year: 1990
}, {
  label: 'The Matrix',
  year: 1999
}, {
  label: 'Seven Samurai',
  year: 1954
}, {
  label: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  label: 'City of God',
  year: 2002
}, {
  label: 'Se7en',
  year: 1995
}, {
  label: 'The Silence of the Lambs',
  year: 1991
}, {
  label: "It's a Wonderful Life",
  year: 1946
}, {
  label: 'Life Is Beautiful',
  year: 1997
}, {
  label: 'The Usual Suspects',
  year: 1995
}, {
  label: 'Léon: The Professional',
  year: 1994
}, {
  label: 'Spirited Away',
  year: 2001
}, {
  label: 'Saving Private Ryan',
  year: 1998
}, {
  label: 'Once Upon a Time in the West',
  year: 1968
}, {
  label: 'American History X',
  year: 1998
}, {
  label: 'Interstellar',
  year: 2014
}, {
  label: 'Casablanca',
  year: 1942
}, {
  label: 'City Lights',
  year: 1931
}, {
  label: 'Psycho',
  year: 1960
}, {
  label: 'The Green Mile',
  year: 1999
}, {
  label: 'The Intouchables',
  year: 2011
}, {
  label: 'Modern Times',
  year: 1936
}, {
  label: 'Raiders of the Lost Ark',
  year: 1981
}, {
  label: 'Rear Window',
  year: 1954
}, {
  label: 'The Pianist',
  year: 2002
}, {
  label: 'The Departed',
  year: 2006
}, {
  label: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  label: 'Back to the Future',
  year: 1985
}, {
  label: 'Whiplash',
  year: 2014
}, {
  label: 'Gladiator',
  year: 2000
}, {
  label: 'Memento',
  year: 2000
}, {
  label: 'The Prestige',
  year: 2006
}, {
  label: 'The Lion King',
  year: 1994
}, {
  label: 'Apocalypse Now',
  year: 1979
}, {
  label: 'Alien',
  year: 1979
}, {
  label: 'Sunset Boulevard',
  year: 1950
}, {
  label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  label: 'The Great Dictator',
  year: 1940
}, {
  label: 'Cinema Paradiso',
  year: 1988
}, {
  label: 'The Lives of Others',
  year: 2006
}, {
  label: 'Grave of the Fireflies',
  year: 1988
}, {
  label: 'Paths of Glory',
  year: 1957
}, {
  label: 'Django Unchained',
  year: 2012
}, {
  label: 'The Shining',
  year: 1980
}, {
  label: 'WALL·E',
  year: 2008
}, {
  label: 'American Beauty',
  year: 1999
}, {
  label: 'The Dark Knight Rises',
  year: 2012
}, {
  label: 'Princess Mononoke',
  year: 1997
}, {
  label: 'Aliens',
  year: 1986
}, {
  label: 'Oldboy',
  year: 2003
}, {
  label: 'Once Upon a Time in America',
  year: 1984
}, {
  label: 'Witness for the Prosecution',
  year: 1957
}, {
  label: 'Das Boot',
  year: 1981
}, {
  label: 'Citizen Kane',
  year: 1941
}, {
  label: 'North by Northwest',
  year: 1959
}, {
  label: 'Vertigo',
  year: 1958
}, {
  label: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  label: 'Reservoir Dogs',
  year: 1992
}, {
  label: 'Braveheart',
  year: 1995
}, {
  label: 'M',
  year: 1931
}, {
  label: 'Requiem for a Dream',
  year: 2000
}, {
  label: 'Amélie',
  year: 2001
}, {
  label: 'A Clockwork Orange',
  year: 1971
}, {
  label: 'Like Stars on Earth',
  year: 2007
}, {
  label: 'Taxi Driver',
  year: 1976
}, {
  label: 'Lawrence of Arabia',
  year: 1962
}, {
  label: 'Double Indemnity',
  year: 1944
}, {
  label: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  label: 'Amadeus',
  year: 1984
}, {
  label: 'To Kill a Mockingbird',
  year: 1962
}, {
  label: 'Toy Story 3',
  year: 2010
}, {
  label: 'Logan',
  year: 2017
}, {
  label: 'Full Metal Jacket',
  year: 1987
}, {
  label: 'Dangal',
  year: 2016
}, {
  label: 'The Sting',
  year: 1973
}, {
  label: '2001: A Space Odyssey',
  year: 1968
}, {
  label: "Singin' in the Rain",
  year: 1952
}, {
  label: 'Toy Story',
  year: 1995
}, {
  label: 'Bicycle Thieves',
  year: 1948
}, {
  label: 'The Kid',
  year: 1921
}, {
  label: 'Inglourious Basterds',
  year: 2009
}, {
  label: 'Snatch',
  year: 2000
}, {
  label: '3 Idiots',
  year: 2009
}, {
  label: 'Monty Python and the Holy Grail',
  year: 1975
}];
var checkboxOptions = [{
  id: 1,
  label: 'spiderman'
}, {
  id: 2,
  label: 'hulk'
}, {
  id: 3,
  label: 'thor'
}, {
  id: 4,
  label: 'ironman'
}]; // export const pieChartDemo = {
//     title: 'Pie Chart',
//     titlePosition: 'left',
//     api: 'https://catfact.ninja/fact',
//     height: 300,
//     type: 'pie',
//     options: {
//         chart: {
//             id: 'satisfaction-chart'
//         },
//         labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
//         legend: {
//             show: true,
//             position: 'bottom',
//             fontFamily: 'inherit',
//             labels: {
//                 colors: 'inherit'
//             }
//         },
//         dataLabels: {
//             enabled: true,
//             dropShadow: {
//                 enabled: false
//             }
//         },
//         theme: {
//             monochrome: {
//                 enabled: true
//             }
//         }
//     },
//     series: [66, 50, 40, 30]
// };
// export const barChartDemo = {
//     type: 'bar',
//     height: 260,
//     title: 'Bar Chart',
//     titlePosition: 'center',
//     api: 'https://catfact.ninja/fact',
//     options: {
//         chart: {
//             id: 'new-stack-chart',
//             sparkline: {
//                 enabled: true
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         plotOptions: {
//             bar: {
//                 columnWidth: '80%'
//             }
//         },
//         xaxis: {
//             crosshairs: {
//                 width: 1
//             }
//         },
//         tooltip: {
//             fixed: {
//                 enabled: false
//             },
//             x: {
//                 show: false
//             },
//             y: {
//                 title: {
//                     formatter: (seriesName) => 'Stock - '
//                 }
//             },
//             marker: {
//                 show: false
//             }
//         }
//     },
//     series: [
//         {
//             data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
//         }
//     ]
// };
// export const lineChartDemo = {
//     type: 'line',
//     title: 'Line Chart',
//     titlePosition: 'center',
//     api: 'https://catfact.ninja/fact',
//     height: 100,
//     options: {
//         chart: {
//             sparkline: {
//                 enabled: true
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         colors: ['#fff'],
//         fill: {
//             type: 'solid',
//             opacity: 1
//         },
//         stroke: {
//             curve: 'smooth',
//             width: 3
//         },
//         yaxis: {
//             min: 0,
//             max: 30
//         },
//         tooltip: {
//             theme: 'dark',
//             fixed: {
//                 enabled: false
//             },
//             x: {
//                 show: false
//             },
//             y: {
//                 title: {
//                     formatter: (seriesName: string) => 'Total Status'
//                 }
//             },
//             marker: {
//                 show: false
//             }
//         }
//     },
//     series: [
//         {
//             name: 'series1',
//             data: [20, 10, 18, 12, 25, 10, 20]
//         }
//     ]
// };
// export const areaChartDemo = {
//     height: 200,
//     type: 'area',
//     title: 'Area Chart',
//     titlePosition: 'right',
//     api: 'https://catfact.ninja/fact',
//     options: {
//         chart: {
//             id: 'market-sale-chart',
//             toolbar: {
//                 show: false
//             },
//             zoom: {
//                 enabled: false
//             },
//             sparkline: {
//                 enabled: true
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             curve: 'smooth',
//             width: 2
//         },
//         fill: {
//             type: 'gradient',
//             gradient: {
//                 shadeIntensity: 1,
//                 opacityFrom: 0.5,
//                 opacityTo: 0,
//                 stops: [0, 80, 100]
//             }
//         },
//         legend: {
//             show: false
//         },
//         yaxis: {
//             min: 1,
//             max: 100,
//             labels: {
//                 show: false
//             }
//         }
//     },
//     series: [
//         {
//             name: 'Youtube',
//             data: [10, 90, 65, 85, 40, 80, 30]
//         },
//         {
//             name: 'Facebook',
//             data: [50, 30, 25, 15, 60, 10, 25]
//         },
//         {
//             name: 'Twitter',
//             data: [5, 50, 40, 55, 20, 40, 20]
//         }
//     ]
// };

var visualizationDemo = [{
  title: 'Dashboard Cards',
  titlePosition: 'center',
  type: 'dashboardCards',
  api: 'https://catfact.ninja/fact',
  xs: 12,
  md: 12,
  config: [{
    size: 'small',
    color: 'skyblue',
    title: 'Total Earnings',
    value: 89,
    xs: 12,
    md: 4
  }, {
    size: 'small',
    color: 'purple',
    title: 'Total Earnings',
    value: 124,
    xs: 12,
    md: 4
  }, {
    size: 'small',
    color: 'green',
    title: 'Total Earnings',
    value: 194,
    xs: 12,
    md: 4
  }]
}, {
  type: 'filter',
  appearance: 'default',
  xs: 12,
  md: 12,
  config: [{
    title: 'Division',
    appearance: 'dropdown',
    defaultOptions: options,
    id: 'division',
    multiple: true,
    changedChildOption: 'district',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'District',
    appearance: 'dropdown',
    defaultOptions: [],
    id: 'district',
    multiple: true,
    changedChildOption: 'district',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Upazila',
    appearance: 'dropdown',
    defaultOptions: [],
    id: 'upazila',
    multiple: false,
    changedChildOption: '',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: false
  }, {
    title: 'Age',
    appearance: 'number',
    defaultOptions: options,
    id: 'age',
    multiple: true,
    changedChildOption: '',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Date',
    appearance: 'date',
    defaultOptions: [],
    id: 'date',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    format: 'y-MM-dd',
    mxDate: '2023-01-01',
    minDate: '2021-01-01',
    required: true
  }, {
    title: 'Date Range',
    appearance: 'date-range',
    defaultOptions: [],
    id: 'daterange',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    format: 'y-MM-dd',
    mxDate: '2021-01-01',
    minDate: '2021-01-01',
    required: true
  }, {
    title: 'Category',
    appearance: 'checkbox',
    defaultOptions: radioOptions,
    id: 'category',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    required: false
  }, {
    title: 'Gender',
    appearance: 'radio',
    defaultOptions: radioOptions,
    id: 'gender',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Product Category',
    appearance: 'dropdown',
    defaultOptions: options,
    id: 'pd',
    multiple: true,
    changedChildOption: '',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Product Category With Checkbox',
    appearance: 'dropdown-with-checkbox',
    defaultOptions: options,
    id: 'pd',
    multiple: true,
    changedChildOption: '',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Search',
    appearance: 'text',
    defaultOptions: [],
    id: 'freeText',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    required: true
  }]
}, {
  type: 'filter',
  appearance: 'drawer',
  xs: 12,
  md: 12,
  config: [{
    title: 'Division',
    appearance: 'dropdown',
    defaultOptions: options,
    id: 'division',
    multiple: true,
    changedChildOption: 'district',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'District',
    appearance: 'dropdown',
    defaultOptions: [],
    id: 'district',
    multiple: true,
    changedChildOption: 'district',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Upazila',
    appearance: 'dropdown',
    defaultOptions: [],
    id: 'upazila',
    multiple: false,
    changedChildOption: '',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: false
  }, {
    title: 'Age',
    appearance: 'number',
    defaultOptions: options,
    id: 'age',
    multiple: true,
    changedChildOption: '',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Date',
    appearance: 'date',
    defaultOptions: [],
    id: 'date',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    format: 'y-MM-dd',
    mxDate: '2023-01-01',
    minDate: '2021-01-01',
    required: true
  }, {
    title: 'Date Range',
    appearance: 'date-range',
    defaultOptions: [],
    id: 'daterange',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    format: 'y-MM-dd',
    mxDate: '2021-01-01',
    minDate: '2021-01-01',
    required: true
  }, {
    title: 'Category',
    appearance: 'checkbox',
    defaultOptions: radioOptions,
    id: 'category',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    required: false
  }, {
    title: 'Gender',
    appearance: 'radio',
    defaultOptions: radioOptions,
    id: 'gender',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Product Category',
    appearance: 'dropdown',
    defaultOptions: options,
    id: 'pd',
    multiple: true,
    changedChildOption: '',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Product Category With Checkbox',
    appearance: 'dropdown-with-checkbox',
    defaultOptions: options,
    id: 'pd',
    multiple: true,
    changedChildOption: '',
    url: 'https://jsonplaceholder.typicode.com/posts',
    xs: 12,
    md: 3,
    required: true
  }, {
    title: 'Search',
    appearance: 'text',
    defaultOptions: [],
    id: 'freeText',
    changedChildOption: '',
    multiple: false,
    url: '',
    xs: 12,
    md: 3,
    required: true
  }]
}, {
  title: 'Basic Table',
  titlePosition: 'center',
  type: 'table',
  api: 'https://catfact.ninja/fact',
  paginationForTable: {
    pageSize: 0,
    count: 30,
    rowsPerPage: 10
  },
  xs: 12,
  md: 12,
  config: {
    header: [{
      id: 10,
      Header: 'Name',
      disableSortBy: true,
      columns: [{
        id: 9,
        Header: 'First Name',
        accessor: 'firstName'
      }, {
        id: 8,
        Header: 'Last Name',
        accessor: 'lastName'
      }]
    }, {
      id: 7,
      Header: 'Info',
      disableSortBy: true,
      columns: [{
        id: 5,
        Header: 'Age',
        accessor: 'age',
        disableSortBy: true,
        columns: [{
          id: 4,
          Header: 'Real Age',
          accessor: 'age_1'
        }, {
          id: 3,
          Header: 'Certificate Age',
          accessor: 'age_2'
        }]
      }, {
        id: 6,
        Header: 'Visits',
        accessor: 'visits',
        disableSortBy: true,
        columns: [{
          id: 2,
          Header: 'Dhaka',
          accessor: 'dhaka'
        }, {
          id: 1,
          Header: 'Chittagong',
          accessor: 'chittagong'
        }]
      }]
    }],
    data: [{
      firstName: 'nazmul',
      lastName: 'haque',
      age_1: '12',
      age_2: '15',
      chittagong: 'yes',
      dhaka: 'no'
    }, {
      firstName: 'nazmul',
      lastName: 'haque',
      age_1: '12',
      age_2: '15',
      chittagong: 'yes',
      dhaka: 'no'
    }, {
      firstName: 'nazmul',
      lastName: 'haque',
      age_1: '12',
      age_2: '15',
      chittagong: 'yes',
      dhaka: 'no'
    }]
  }
}, {
  title: 'Bar chart',
  titlePosition: 'center',
  api: 'https://catfact.ninja/fact',
  type: 'chart',
  xs: 12,
  md: 4,
  config: {
    height: 260,
    type: 'bar',
    options: {
      chart: {
        id: 'new-stack-chart',
        sparkline: {
          enabled: false
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(_seriesName) {
              return 'Stock - ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }]
  }
}, {
  type: 'chart',
  title: 'Area chart',
  titlePosition: 'center',
  api: 'https://catfact.ninja/fact',
  xs: 12,
  md: 4,
  config: {
    height: 200,
    type: 'area',
    options: {
      chart: {
        id: 'market-sale-chart',
        toolbar: {
          show: true
        },
        sparkline: {
          enabled: false
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 80, 100]
        }
      },
      legend: {
        show: false
      },
      yaxis: {
        min: 1,
        max: 100,
        labels: {
          show: false
        }
      }
    },
    series: [{
      name: 'Youtube',
      data: [10, 90, 65, 85, 40, 80, 30]
    }, {
      name: 'Facebook',
      data: [50, 30, 25, 15, 60, 10, 25]
    }, {
      name: 'Twitter',
      data: [5, 50, 40, 55, 20, 40, 20]
    }]
  }
}, {
  type: 'chart',
  title: 'Pie chart',
  titlePosition: 'center',
  api: 'https://catfact.ninja/fact',
  xs: 12,
  md: 4,
  config: {
    height: 300,
    type: 'pie',
    options: {
      chart: {
        id: 'satisfaction-chart',
        toolbar: {
          show: true
        },
        sparkline: {
          enabled: false
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1
            }
          }
        }
      },
      labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
      legend: {
        show: true,
        position: 'bottom',
        fontFamily: 'inherit',
        labels: {
          colors: 'inherit'
        }
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      theme: {
        monochrome: {
          enabled: true
        }
      }
    },
    series: [66, 50, 40, 30]
  }
}, {
  type: 'chart',
  title: 'Line chart',
  titlePosition: 'center',
  api: 'https://catfact.ninja/fact',
  bgColorForChart: 'white',
  textColorForChart: '#0089ff',
  xs: 12,
  md: 4,
  config: {
    type: 'line',
    height: 200,
    options: {
      chart: {
        toolbar: {
          show: true
        },
        sparkline: {
          enabled: false
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#0089ff'],
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      yaxis: {
        min: 0,
        max: 30
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(_seriesName) {
              return 'Total Status';
            }
          }
        },
        marker: {
          show: false
        }
      }
    },
    series: [{
      name: 'series1',
      data: [20, 10, 18, 12, 25, 10, 20]
    }]
  }
}, {
  type: 'map',
  title: 'Map',
  titlePosition: 'center',
  api: 'https://catfact.ninja/fact',
  xs: 12,
  md: 12,
  config: {
    divisions: [{
      id: 'dhaka',
      geo_code: '30',
      value: 0,
      d: 'M544.7 781.3l8.3 6.2 1.8 5.2-7.9-5.8-4.3-1.7-1.2 2.7-3.9 1.9-4.1-1.2-3.9-2.9-6.8-7.1-2.3-3.4 0.6-2.1 5.7 0 7.8 2.8 10.2 5.4z m85.4-428l-0.6 10.3 3.2 10.4-0.1 3.2-0.7 2.3-2.3 3.5-1.9 4-2.4 8.6 14.1 23.5 6.2 2.8 25.7-2.7 2.8 10.7 1.5 4.9 0.8 10.6-1.6 12.4 1.4 4.3 1.2 0.5 3.9-0.5 6.6 0.3 2.3 1.1 1.2 1.8 0.9 2.9-0.1 1.8-2.3 4-0.3 4.5-0.7 1.3-5 2.5 0.1 1.8 2.7 3.4 1.1 2.5 2.5 2.5 3.9 2.1-3 7.9-2.3 4.4-1.9 2.7-2.1 2.1-0.2 1.7 1.7 2 1.6 1 2.4 0.2 2.6 1.2 1.2 5.6-0.3 2.9-3.6 2.6 4.7 4.2 2.5 3.3 0.4 1.8-1.1 2.2-1.5 0.5-2.4 2.6 3 4.7-4.7 3.3-7.3 3.3-3.2 8.1-1.7 1.6-1.7 2.8-2.8 2-3.7 1.3-4.2 0.4-1.9 1.1 0 2.4 0.4 2.7-0.6 1.9-1.5 0.2-1.6-0.6-2.9-2.3-7.2 9.9-4.9 1.7-1.3 0.8 0.9 4.6-0.3 1.1 3.9 5.6-1.6 3.4 4.2 2.5-1.6 5-4.2 4.8-3.5 2.2-2.5 2.4-1.9 5.6 0.9 4.5-1.1 5.8-4.4 9.9-8.2 11.4-3 2.5-2 1.1-2.5-0.7-6.4-4.2-4.2 2-1.7 0.2-6.6-0.3-2.9 0.8-2.8 2.2-2.1 3.1-0.1 1.9 1.2 5.1-0.3 3.5-4.4 11.6-3.4 5.2-0.4 2.1 0.7 1.5 3.1 2.2 2.2 2.6 0.5 1.7-0.2 1.7-1.6 3.2-1.9 1.9 5.7 5.9 1.9 2.7-0.5 1.2-3.3 0.4-2.6 1.3-0.9 2 1.6 2.7-2.2 2.4-4.8 3.1-1.9 2.9-5.2-0.1-0.6 1 1.9 2.2 3.9 3.1-1.5 4.9-3.8-2.2-2.4-0.3-4.1 2.5-5.5 1.8-3.1 2.1-1-0.8-3.3-9.3 0.9-6.7 3.5-5.5 5.4-2.5-1.7-0.4-1.2 0.4-1.7-2.3-3.6 0.4-7.9 3.3 1.2 3.3-1.1 2-2.6 1-3.4 0.3-3.6-0.3-2.8-1-5.5-3.5 1.7 3.6 3.1 2.4 3.5 1.4 3.6 0.6 8 0.3 1.8 1.9 0.5 21.1-0.7 2.6-1.7 1.4-1.7 3.4-1.4 4.2-0.4 3.7-7.2-3.1-42.3-8.3-8.2-3-7.4-4.9-0.2 2.7 2 2.6 28 17 3.4 2.8 2 2.9 1.4 2.9 1.9 2.3 6.8 1.5 6 3 3.4 1.2 14.1 1.6 1.8 1.5 6.3 9.7 1 3.9 0.7 8.3-2.5-3.7-2-2.1 1.1 4.6 0.9 13.9-0.8 5.6-5.8 8.4-1.4 1.4-2.6-0.7-0.5-1.9 1-2.3 2.1-1.7 0-1.6-1.5 0-2.4 3.3-2.4 2.3-3 1.6-4.1 1-8.1-0.3-2.7 1.1-1 3.9 0.2 1.5-2.3 3.5-3.7 2.2-5.7-2.7-2.9-2.8-4.9-3.8-7-1.6-3.2 1.3-2.4 1.6-1.9 3.8 2.1 0.4 3.3-0.5 1.8 1.2 0.1 4.1-1.9 3.8-1.6 1.5-2.4 3.9-2.1 1.5-3.2 0.4-2.5-1-3.1-2.2-4.2-5.1-1.2-3.9-0.5-5.9-0.7-1.9-1.3-1.8-1.8-0.8-2.4-0.4-10.6 2-2 3.6-1.6 4.4-4.1 2.2-3.6 3.7-1.8 2.8-4.2 4-1.2 1.5-3 6.5-5.4 7.5-5.1 5.3-3 1.6-3.7 0.8-7.7 1.3-8.9-4.7-1.6-1.5-4.4-5-4.6-2.3-1.2-1-0.9-1.6-1.2-4.3-1-2.2-2.8-3.9-7-6.4-3.4-4.1-5.3-11.3-2.1-3.2-1.7-1-3.7-0.7-1.8-1.6-1.6-3.2-0.4-2.2 0.2-2.6 4.3 3.6 2.2 0.8 1.6-3.3 3.3-4.8 1.4-1 2.7-0.9 0.7-2.1-1.2-2.2-3.1-1.2-2.5 0.6-3.7 2.9-2.7-0.3-3.2-4.2 0.7-4.8-0.5-4.1-11.5-3.1 1.8-3.5 4.3-4.2 2.5-3.7-6.5 0.2-5.4-6.4-3.2-8.9 0.2-7.5 1.6 0 1.6 2.1 2.8 1.3-4.1-19.4-1.9-4.8-4.3-4-6.6-3.6-6.3-0.7-3.5 5.1-1.4-3 0.1-3.4 4.3-3.2 2-2.3-1.3-1.1-2.2-1.1-1.3-2.5-0.9-3-1.4-2.3-2.7-3.1-12.8-19.2-2.3-1.1-2.8 0.2-3.6 1.1-6.2 0.4-8.9-11.4-0.6-2.1 11.2-29.2 0.2-4.8-0.4-1.9-3.1-9.3 7.1 4.8 19.3 8.3 4.9 2.9 8.7 7.9 5.5 1.1 3.8-1.2 6.5-4.3 3.5-1.4 12-1.1 4.9-1.3 0-2.8-2.2-11-0.6-3.5 0.9-5.2 2.8-7.3 18.5-15.4 2.7-2.5 2-3.3 1.6-3.2 0.6-8.4 2.1-4-0.6-0.4 0.4-3.4 0.9-3.4-1-2.5 0.4-2.2-0.8-2.2-3.9-1-0.3-6.4-3-2.6-8-8.8-0.2-2 0.1-9.3-1.3-9.1 0-2.4 2-17 0.2-8.9 1.8-7.4 0.3-4.7-0.2-4.4-0.6-2.9 1.1-2.6 2.4-2.9 1.6-6 0-3-1.1-4.6 0.3-2.6 2.4-10.8-0.1-5-1.1-4.4-1.4-2.5-1.8-2.2-3.9-3.7-6.4-3.4-3.7-2.5-2.2-2.4-2.9-5.8-1.9-4.7-5.2-25.8-0.3-2 1.2-20 2-12.6 2.9-12.8 4.8-10.3 2-3.2 2.6-3 3.2-4.7 1.2-6-1.9-13 4.9-11.8 1.9-3.5 3.1-2 3.6-0.7-0.9 6.9 0.7 8.1 1.9 8.5 2.5 4.7 3.4 0.6 7.7-3.1 8.2-0.3 47.9 20.3 33.9 7.6 16.8 7.1 7.6 0.3 21.9-4.7 17.7 1.6 8.7-2.3 3 0.1 2.5 0.8 4.7 2.1 8 1.4 1.8-0.1 1.3-0.7 2.3-2.5 1.1-0.6 3.5 0.4 2.8 1.7 2.7 2.1 3.1 1.5 6.1 0.8 24.3-3.4z'
    }, {
      id: 'khulna',
      geo_code: '40',
      value: 0,
      d: 'M243.5 1158.1l-2.6 4.1-6.5-3.5-11-13.1 0-1 1.3-1.4 1.4-4.4-0.1-4.5-2.1-7.7-0.6-3.6-1.4-4.1 0.2-2.2 2.6-0.1 0.9 0.6 1.3 2.5 0.8 3.3 2.1 15.6 2.5 6.9 5 2.9 5 3.3 1.2 6.4z m43.3-511.3l3.1 9.3 0.4 1.9-0.2 4.8-11.2 29.2 0.6 2.1 8.9 11.4 6.2-0.4 3.6-1.1 2.8-0.2 2.3 1.1 12.8 19.2 2.7 3.1 1.4 2.3 0.9 3 1.3 2.5 2.2 1.1 1.3 1.1-2 2.3-4.3 3.2-0.1 3.4 1.4 3 3.5-5.1 6.3 0.7 6.6 3.6 4.3 4 1.9 4.8 4.1 19.4-2.8-1.3-1.6-2.1-1.6 0-0.2 7.5 3.2 8.9 5.4 6.4 6.5-0.2-2.5 3.7-4.3 4.2-1.8 3.5 11.5 3.1 0.5 4.1-0.7 4.8 3.2 4.2 2.7 0.3 3.7-2.9 2.5-0.6 3.1 1.2 1.2 2.2-0.7 2.1-2.7 0.9-1.4 1-3.3 4.8-1.6 3.3-2.2-0.8-4.3-3.6-0.2 2.6 0.4 2.2 1.6 3.2 1.8 1.6 3.7 0.7 1.7 1 2.1 3.2 5.3 11.3 3.4 4.1 7 6.4 2.8 3.9 1 2.2 1.2 4.3 0.9 1.6 1.2 1 4.6 2.3 4.4 5 1.6 1.5 8.9 4.7 3.2 3 4 7.1-3 2.4-2.2-0.1-1.3 0.6-1.5 2.8 0.1 1.4 1.4 1.4-0.4 1.8-3.2 1.7-0.8 1.7 0 1.7 0.9 2.1 1.9 1.1 1 1.1-1.1 2-6.6 4.4-1.9 2.3 0 1.2 1.4 0.7 5.4 0.6 1.9 0.6 1.1 1.7-0.2 3.3-1.5 0.6-2.1-0.8-2.4 1 0.1 1 2.3 2.1 1.5 2 2.4 7.1 3.5 2.6 1.3 1.2 1.7 5.1 0.1 2.9-0.5 3.5-1.9 4.2-0.8 3.7 0.9 2 3.4 1.8 1.1 1.7 1.8 5.4-6.9 7.1-3 3.8-1.2 3.7-1.7 3.7-3.7-1.1-6.5-5.2 0.4 4.9 1.2 4 0.8 4-0.8 5-9 17.4 2.6 4.9 2.3 8.3 2.5 15.7 0.3 8.1-0.7 4-1.8 3-3.6 2-3.1-0.4-3.4-0.9-4.1 0 0 1.7 4.6 2 3.8 2.5 2.6 3.6 0.9 5.5-0.2 2.2-1.1 4.2 0 2.5 0.9 2.1 2.9 4.6 1.8 4.5 2.1 2.6 1.2 3-1.5 3.7-1.6 0.6-4.8 0.9-5.5 5-2.4 3.6-2 1.2-4 1.5-2.3 0.4-1-1.2-1.1-3.3-2.7 0.7-3.3 2.2-2.7 1.2-3.6-0.2-4-0.9-3.7-1.5-2.6-2.1-1.8-4.3-0.1-2.6 2.3-4-0.4-2.3-3.1-4.4-6.1 12.8 2.5 4.3 4.2 5.8 4.8 5.2 4.3 2.2 1.9 2.3-2.3 4.6-4.7 3.3-5.3-1.4-2.7-1.7-2.4 0-5.3 1-0.6 1.3 2.4 6.2 0.4 2-4.1 4.2-4.6-2.9-6.1-9.4 0.3-4.1-2.4-9.6 0.6-5.3 1.7-3 4-4.7 1.7-3.6 0.7-3.9-0.9-16.8 1.6-13.6 1.2-4.7 5.2-9.3 1.1-5.1-0.7-4.9-1.9-4.9-2.7-4.4-2.9-3.4-0.1-3.3 6.6-8.7 1.7-3.9 0.3-5 0.7-4.8 1.4-4.6 2.1-4.1-2.4 1.8-2 3-3 6.4-2.5 2.5-0.8 2.1 2 5.4-1.3 2-4.2 3.2-2.5 4.1 0.2 3.1 4.5 8 1.7 5.1 0.1 5.3-0.5 2.8-2.2 4.5-0.5 2.3-1.8 14.8-1 3.4-4.1 2.2-1.7-3.6-0.3-10.4 0.6-2.4 2.2-4.9 0.2-3-9.8-23.2-0.5-4.8 1-10.4-0.3-4.7-2.1-5-1.6 0-1.8 15.4 1.8 29.5 1.6 0 0.2-3.3 1-3 1.8-1 1 4.8 1.1 2.9 1.3 2 1.2 2.6-0.2 3.4-1.8 5.9-1.1 1.1-2.6 0.5-0.3 2.4 1.4 2.4 0.8 2.6 2.6 5.7 1.6 2.1 0.4 1.6-2 12.4-2.3 2.7-2.8 2.1-2.9 2.7-2.4 4.1-0.2 3.3 0.7 3.8 0.6 5.7-0.8 5.3-2.1 4.4-2.9 3.7-7.9 6.8-2.4 0.2-5.5-6.2-1.2-3.5-0.3-6 0.7-10.5 1.1-4.2 2.9-7.1 0.5-5.5-0.9-4.7-4-7.8-1-4-1.6 0-1.3 3.5 0.6 3 1.4 2.9 0.9 3.3 0 3.7-0.8 2.1-3.6 3.7-2.2 2.8-1.4 2.4-3.5 8.6-1.1 1.9-1.1 0.1-1.2-3.1-1.4 0 0.1 5.9 2.2 9.1-0.9 5.7-3.6 8 0.6 2.6 4.5 2.2-2.5 2.9-3.7 2.7-4.3 1.9-4.2 0.5-4.1-2.4-1.3-4.3 0.8-4.2 2.3-1.8 0.4-2.6-6.7-19-0.4-4.7-0.9-1-2 1.3-2.1 2.3-0.9 2.1-1.3 1-2.8-0.8-4.8-2.5-2.2-1.9-0.9-1.5-5.4-19-0.4-3.9 0.5-4.8 2.3-9.8 0.1-5.4-1.5-4.9-4.8-6.6-1-3.7 1.3-10.7-0.7-4.3 3.8-5-0.4-5.6-1.2-4.6-1.8-3.9-9.4-12.4-2.1-4.9 3.1-2.2-3.5-6.2-1.2-2.8-2.6-12.5 0-2.2 0.6-2.4 1.8-3.1 0.4-1.9-0.9-5.4-4-9.3-1.9-8.6-2.6-2.1-6.7-2.6 4.8-3.3 1.3-5.4-0.9-6.3-2.1-6-2.7-4.9-0.8-5.2-0.8-3-2.6-6.8-0.5-4.2 1.5-3.2 2.4-3 2.3-3.6 1-3.1 0.8-4.6 0.4-4.5-0.5-3.2-2.5-2.3-6-2-2.5-3.1-4.6-11-2.3-3.7-4.1-5.2-0.9-2.6 0.2-4.6 2-6.7 0.5-12.1 3-5.9 11.7-12.5 5.8-4.9 1.9-2.2 1.1-2.5 0-1.9-1.2-1.1-5.9 0.2-3.8-1.4-15.1-5.3-3.6-0.7-2.9 0.4-3.3 2.6-1.7 0.9-2.3-0.1-14.2-4.6-2.9-2.6-2.1-4.5-0.2-5.1 2-4.6 5.2-8.4 10.5-28 0.5-5-2.9-2.4-2.8 2.2-2.5 4-2.7 1-3.2-6.3-2.4-1.1-6.3-4.4-3.6-3.9-5.1-9.2-3.2-3.5-1.7-0.4-4.3 0.5-2.2-0.9-2.1-2.3-0.1-1.6 0.7-1.8 0.4-2.9-1.1-0.9-2.2-0.5-2-1-0.4-2.6 4.6-21.5-0.3-2.2-1.6-3.6 0.1-2.2 1-2.5 3.2-5.1 1.1-2.7 0-2.1-0.7-4.3 0.7-2.3 3.5-2.7 4.2-0.2 4.5 0.4 4.1-0.9 2.9-2.3 8.2-8.1 2.1-2.7 0.7-4.2-0.6-5.1-1.3-4.5-1.5-2.8 2.7-4.6 2.5-3.3-0.1-2.3-5.2-1.2-0.7-3-4.1-3.5-1-2.7 0.3-2.2 1.3-4.9 0.3-2.8-1-4.8-0.1-2.3 1.3-2.9 2.1-2.1 4.8-1.8 3.4-1.6 1 3.6 3.4 5.2 1.4 1.2 5.2 2.8 3.2 2.3 1.7 0.9 4.2 0.7 4-0.9 13.9-6.6 2.9-2 2.2-2.9 4.3 0.3 3.9 2 1.7 1.4 5 6.7 7.9 7.6 1.9 5.9 4.4 5.6 0.9 2.1 0 2.5-1 5.2 0.6 2.1 2.1 2.5 8.3 7.2 4.6 3 4.7 2.2 5.9 1.1 17.9-1.9 5.8 0.5 5.4 1.2 5.1 2.2z'
    }, {
      id: 'barisal',
      geo_code: '10',
      value: 0,
      d: 'M555.8 1112.5l-2.1 5.3-1.8-1.2-1.5 0-1.8 4.7-3.6 5-4.2 3.4-3.8-0.3 0-1.7 4.3-1.3 1.7-0.3-2.9-3.8-1.6-1.1 1.4-1.5-0.4-4 0.6-2.4 1.8-2.8 14.5-10 0 4.8 1.6 2.7 1.2 3.7-3.4 0.8z m-55.8 20l-2 1.3-1-0.6 0-10.8 0.9-5.6 2.1-5.1 4.7-8.9 3.7-4.2 5-1.2-0.8 5.1-5.4 9.2-5.2 18.2-2 2.6z m2.9-28.6l-1.3 0 1.3-5 2.8-6.8 3.3-5.3 2.9-0.6-1.4 5.8-6.1 7-1.5 4.9z m18.6 15l-3.5 1.7-2.9-1.5-1.7-3.4 0-4 1.2-3.3 1.4-2.5 1.2-2.9 0.5-4.9-0.5-7.4 0.8-2.2 2.8-2.3 9.7 10.4 2.7 6.2-2.1 7.4-4.6 2.8-5 5.9z m39.2-59.7l-4.3 14.3-0.4-3.8-1.2-2.7-2.5 8-1.3 8.9-1.9 8-4.6 5.5-4.1 1.2-2.2-1.1-1-2.5-0.2-3.2 1.1-2.1 7.7-6.7-1.3-1.6-9.3 5.5-1.2 2.4-1.3 0 0.4-5.5 1.3-5.1 2.5-3.7 3.8-1.5 2.7-1.7 5.8-6.5 2.7 0.1 1.8-2.7 2.6-2.5 2.5-1.4 1.9 0.4z m73.6-10.3l0.5 2.1 0 12.6-1.6 5.5-4.3 1.1-2.2-3.6 0.3-6.5 1.5-7 1.8-5.2 1.3 1.7 1.2-1.5 1.5 0.8z m7.3 3l-2.5 2.2 0.1-12.5 1.3-4.6 3 1.3 0.2 4.3-0.6 5-1.5 4.3z m0.5-20.1l-8.1 12.7-3.4-1.4 0.7-3.2 2.2-4 1.3-3.2 0.8-10.6 1.3-5.7 2.2-3.8 1.6 1.8 1.2 3.5 0.9 4.3 0.2 4.8-0.9 4.8z m-77.1-35.1l3.1 5.7 2.4 6.5 0.5 5.5-2.4-4.8-0.5-1.7-1.6 4.1 1.4 9.3-1.4 4.1-1.1-2.1-0.4-7.5 1.5 0-1.4-4.2-1.6-9.1-1.4-4.2-1.3-0.9-2.7-0.1-0.5-3.1 0.5-1.4 1.4-0.5 2.6 1.2 2.9 3.2z m4.4 0.1l-1.3 1.5 1.3-13.7 1.6 0.8 0.9 2.5 0.4 2.5 0.1 4.6-3 1.8z m37.6 65.1l-11.4 17.8-3.8 3.3-1.6-3.3-4.9 5.2-2.1 1.2-5.6 9.7-7.3 3.3-2.2-0.3-1.8-5.1 2.6-6.7 4-7.1 2.6-6.4-12.1 17.6-3.4 0.7-1.4-4.6 0.9-6.6 2.4-6.8 3.1-5.1-2.4-5.1 2.1-8.6 9-19.7 1.1-3.8 0.7-4.5 0-13.7 1.3-4-1.7-6.9-0.5-4.6 0.9-2.8 0-1.5-2.4-4.3-2.6-14.2-2.4-5.6-3.5-3.1-12.2-8.7-3.5-1-1-8.6 0.5-8.2 4.8-19.2 1.5-2.6 2.3-1.7 3.7-1.5 3.8-0.9 4.2-0.5 2.2 7 2.4 8.3 2.7 6.5 3.7 7.6 3.1 5.6 3.4 4.1 3.4 5.5 1.6 11.4 2.7 7.2 5.1 5.2 9.5 8.7 4.4 5.5-4.3 22.2 0.2 37.7-1.8 6z m-47.8-169.5l4.4 4.7 4 1.8 4 4.8 3.1 4.8-3.4 0.7-7.4-1.5-8-0.5-6.3 5.9-3.3 1.2-3.3 3.4-0.4 5.8 1.1 3.7-3 4-2.1-2.6-2.8-2.6-0.3-2.2-0.8-2.4-2.2-1.5-5.8-1.8 1.8-2.7 0.3-2.1-0.7-6.5 0.2-4.3 0.6-4.1 1.6-3.2 2.9-1.2 7.4 1.3 3.5-0.5 1.5-3.2 1.8-0.3 8.5 0 3.1 1.1z m8.4-22.9l4.8 3.7 0 1.4-5.6 0.2 0.7 1.5 2.1 2 1.7 2.2 1.1 2.3-6.8-0.8-1.9-0.8-1.6-1.8-2.6-4.7-1.9-1.5-2.2-0.7-1.6 1.3-1.9 0.8-2.4 0.3-5.8 0.1-2.3-0.4-3.4-5.3 4.3-7.5 7.2-5.9 5.3-0.5 4.6 3.9 8.2 10.2z m-36.2-8.8l-1.8 1.1-1.8-9.6-1.1-3.4 8.3 0 3.5-1.4 1.4 2.3-0.3 1.7-3.3 3.3-4.9 6z m-6-8.7l1 5.1 3 7.4 4 7 4.3 5.7 0.5 1.2-0.3 2.7 0.6 1.7 2.3 0.6 3.2 2.8 0.9 1.7-1.1 2.2-3.3 1.6-3.2-0.4-3.1-0.8-3.1 0.3-4.1 5.2-2 7.8-2.6 6.5-6.1 1.4 3.5 3.1-0.9 3.1-2.9 1.2-2.6-2.7-4.7 3.1 3.2 2.4 6.1 2.1 4.2 2.1 2-4.3 3.7 0.7 3.8 3.2 2.3 3.5 0.7 2.4 0.8 7.3 2.6 7.6 0.9 8.1-0.6 1.7-2.1 2.8-1.9 1.1-5 0.7-2 1.3-1.2 3.5-2.5 13 0.6 1 2.8-2.4 1-1.5 0.2-2.4-0.6-4.7 0.4-2.5 2.2-3.2 3.2-1.9 3.8-0.6 4.1 0.8 7.7 4.8 3.9 6.7 2.6 7.8 3.6 8.1-4.4-1.7 0.1 5.3 1.5 4.2 4.3 8.3 1.1 4.7 0.2 4.9-1.3 9.6-6.9 17.9-5.1 8.1-4.2 1-5.8 3.2-2.2 2-1 2.1-0.5 3.2-1.3 3.6-6.2 10.9-2.1 2.6-2.4 1.1-2.9-0.7-3.7-1.6-3.1-2.1-1.4-1.8 1.3-5.8 5.2-11.1 0.9-5.6-2.5-6.6-0.5-3.1 1.4-7.3-0.7-2.9-3.6-0.9 0.9 4.8-2.1 10.4 0.4 3.3 1.8 1.6 2.5 1.5 0.8 2.3-0.3 1.8-1 1.6-2.8 3.3-0.6 3.3-1.9-0.7-0.8 0.5-0.6 2.4-0.7 7.2-1.8 5-3.9 6-3.3 4-1 4.1-4.1 8.5-0.9 4.3-1 8.9-2 8.7-1.7 4.5-2.2 3.1-11.9 10.2-3 2.1-4.1 0.8-4.4-0.7-8.1-3.4-3.8-0.8-3.5-1.9-0.9-3.8 1.4-3 3.7 0.8-1.6-3.3 1.3-2.3 2.1-2.1 1.2-2.8-1-3.3-1.2-0.9-3.8 9.5-2.1 2-2 0.7-2.7 3.1-2 1-1.8-0.4-2.8-2.4-2.6-0.3 1.5-6.2 0.6-12.6 2.3-5.3 2-1.7 5-3.4 1.9-2.8 1-3.6 1.2-5.7 2-3.3 8.9-8.1 3.8-5.7 1.9-0.9 4.8 1.8 4.5-3.2 3.4-5.2 1.6-6.3-0.7-6.2-3.8 10.1-2.7 5.3-3.1 2.3-5.8 0.8-3.5 2.1-12.9 13.9-1.5 2.4-1.7 5-2.8 4.3-0.7 1.7-1.1 1.1-3.1 0.5-2.2-0.3-6.9-2.8 1.3-3.3 0.2-3.5 1.7-2.8 2-1.8 1.9-0.9 1.4-1.6 0.6-3.6-0.8-7 1-2.6 0.8-3.5 2-2.3 2.4-1.1 2-1.4 1.3-2.8-5.6 2-2.7 4-3.4 11.5-1.9 2.6-5.8 5.7-1.3 2 0.5 10.5-0.5 3-3.2 2.8-3.9-1.4-3.3-4-1.4-4.5-0.4-2.3-1.9-5.3-0.6-2.8-0.5-17.2-2-9.6-0.5-5.9-0.5-2.2-2.8-4.5-1.1-2.3-0.8-3-0.3-2.5 1.1-5.6 4.3-10.7 17.8-26 1.2-2.9 0.8-2.8 1.3-2.6-3.3 1.8-0.7 0.7-1.8-5.4-1.1-1.7-3.4-1.8-0.9-2 0.8-3.7 1.9-4.2 0.5-3.5-0.1-2.9-1.7-5.1-1.3-1.2-3.5-2.6-2.4-7.1-1.5-2-2.3-2.1-0.1-1 2.4-1 2.1 0.8 1.5-0.6 0.2-3.3-1.1-1.7-1.9-0.6-5.4-0.6-1.4-0.7 0-1.2 1.9-2.3 6.6-4.4 1.1-2-1-1.1-1.9-1.1-0.9-2.1 0-1.7 0.8-1.7 3.2-1.7 0.4-1.8-1.4-1.4-0.1-1.4 1.5-2.8 1.3-0.6 2.2 0.1 3-2.4-4-7.1-3.2-3 7.7-1.3 3.7-0.8 3-1.6 5.1-5.3 5.4-7.5 3-6.5 1.2-1.5 4.2-4 1.8-2.8 3.6-3.7 4.1-2.2 1.6-4.4 2-3.6 10.6-2 2.4 0.4 1.8 0.8 1.3 1.8 0.7 1.9 0.5 5.9 1.2 3.9 4.2 5.1 3.1 2.2 2.5 1 3.2-0.4 2.1-1.5 2.4-3.9 1.6-1.5 1.9-3.8-0.1-4.1-1.8-1.2-3.3 0.5-2.1-0.4 1.9-3.8 2.4-1.6 3.2-1.3 7 1.6 4.9 3.8 2.9 2.8 5.7 2.7 3.7-2.2 2.3-3.5z'
    }, {
      id: 'chittagong',
      geo_code: '20',
      value: 0,
      d: 'M846.9 1163.8l7.8 15.3 2 9.2-0.5 4.9-2 9.8-0.5 5.2-1.9 4.1-4.8 0.2-5.4-1-4.2 0.6 0 1.3 1 1.7 0.1 1.8-2.6 1.4-2.3-0.2-1.9-1.3-1.2-1.9-0.9-4.1-0.7-1.6 0.1-1.7 3.3-4.9 0.6-2.4 0.1-5.5-1.1-9.4-4.6-15.5 1.2-8.6 2.1-4.6 2-2.1 2.4 0.2 3.1 2.5 1.1 3-1 3.6-1.6 3.7-0.7 3.2 3.4-4.1 1.3-5.6-0.2-5.9-1.6-5.2 3.9-0.5 3.5-1 0 4.9 0.7 10.5z m-21.1-4.8l-1.8 2.2-1.8-3.9 3.4-19.3-1.6-11.9 0.8-4 1.6-3 5.1-5.8 1.2 1.4 0.3 1.9 2.6 8.7 0.3 3.3-0.7 3.7-3 5.9-1.7 8.1-4.7 12.7z m-163.8-85.2l-4.1 2.7-5.4-0.3-3.4-0.9-2.5-1.7-1.3-3.4 6.2-7.5 4-6.2 1.5-3.9 1.9-11.3 0.2-16.4 1.3-18.2 3.7-0.6 7.5 3.9 4.7 4.1 1.7 5.8 3.2 3 2.2 8.4 0.1 5.4 1 7.6-3.5 7.1-2.1 3.6-4.2 8.3-4.4 3.7-3.1 2.1-2.8 0.6-2.4 4.1z m16.7-81.6l-5.5 0.3-4.4-2.8 2.1-6.5 7.6-3.3 8.9-2.6 2.3 4.5-2.1 5.4-4.5 3-4.4 2z m85.4 11.4l-10.3 1.2-6.8-3.8-6.4-9.4-3.6-9.3-1.3-7.5 5-11.9 4.5-2.4 19.2 25.3 1.5 10-1.8 7.8z m-53.3-373.8l-3.6-0.6-3.8 1.6-2.9 2.6-2.2 3.1-7.4 13.2-0.9 3.3 0.1 3.2 2.5 5.5 0.9 3-0.7 4.4-4.3 12.9-2.2 3.9-4 2-4.1 0.4-3.4 1.2-2 4.5 0.9 5.1 3.4 1.9 3.6 1.3 1.3 3.6-1.9 3.8-3-0.2-2.7 0.3-0.8 5.7 1 4.1 6.3 11.8 1.6 4.2 1.8 7.7 2 3.9 1.8 1.7 3.8 2.3 1.4 2.2 0.5 1.8 1 5.8 2.9 10 2.2 4.8 2.8 2.1 2.8 0.7 0.7 1.4-0.9 1.9-2.2 2.1-1.5 2.2 0.4 1.8 2.1 4.3 5 37.9 2.8 9.7 5.2 7 7.2 1.9 0.8-7.7-4-19.7-0.1-10.5 1.2-5.5 2.4-3.3 4.8-0.2 4.1 3.3 3.2 4.5 1.7 3.2 0.8-1.8 1.4 1.9 0 4.1 3.2 3.2 0.5 0 1.5 7.3 1 2.4 5 17.2 1.1 6 0.6 0.7 2 0.6 0.6 0.8 0.3 7 0.9 2.4 2.8 3.1 2.8 1.1 2.9 0.6 3 1.4 1.3 2.6 0 2.3 0.7 0.8 3.5-2 1.3-1.7 1.8-4.2 1.9-0.8 4.6 1.2 4.5-1.4 5.8-1.3 2.7-1.7 1.6-1.8 3.6-3.4 1.5-1.7 3.7-5.5 0.2-3.2 1-0.9 3.3 0.1 3.3-3.6 0.9-2.1-0.8-2.8-2.8-7.2-3.2-16.1-3.2-7.5-1.2-9.4 4.1-11.6 6.3-11 5.6-7.6 3.5-3.1 11.9-5.2 3.5-2.5 2.8-3.1 4.9-8.3 0.3-9.3-5.7-27.3-0.3-9 0.4-5.1 1.4-3 3-0.2 2.7 3.3 2.7 4.4 9 10.3 3.4 1.7 5-1.3 3.7-3.3 7.1-9.8 3.5-4 9.1-3.2 4.3 6.6 2.2 9 2.9 4.1 3.3-3.2 2.7-10.9 3.6-2.1 4.5 2.4 0.5 5.1-2.5 10 0.6 7.9 8.2 26.8 1.3 11.5 1 3.5 1.1 1.9 2.8 2.7 1.2 2 0.4 1.8-0.4 3.3 0.3 1.6 1.1 1.5 2.8 2.3 0.9 1.2 0.2 2.1-0.6 4.6 0 2.4 1.1 3.9 1 2.3 0.2 2.4-1.5 4.2-3.9 8.1-0.9 3.6-0.2 9.3 5.5 33.3-0.2 16.3 1.7 7.9 4 6.1 7.2 3 3.1 3.9 1.9 18.3 1.5 7.1 2.6 3.5 5.8 5.1 2.3 3.5 1 3.6 1.5 18.1-0.5 13.5 0.8 4 2.8 7.3 0.3 4 12.6 76.3-0.3 5.9-2.5 1.2-3.2-0.1-2.6 2.3 4.9 15.7 2.8 15.4 0.6 4.1 3.1 14.1 0.6 7-3.7 35.6 3.1 55.4 0.6 5.9 2.3 11.6 7.7 23.6 0.8 4.7-2 3.7-4.2 4.4-5 3.4-4.4 0.3-2.6-2.9-1.5-4.8-1.7-9.3-4.2-9.4-5.5-1.2-7.2 1.5-9.2-0.9-4.9-1.7-2.3-1.2-1.8-2-1.5-4-0.5-3.9-0.9-3.8-2.8-3.8-7-2.4-8.2 10-6.8-0.1-3.6 0.5-2.4 4.6-2.9 9.9-6.1 8.7-1.1 4.1-0.1 4.5 1.6 9.2-0.3 4.5-1.9 10.5 1.2 4.1 1.6 3.2 5.1 4.8 2.7 7 8.8 7.5-1.4 8.9-0.3 9.6 0.9 9.4 2.3 8.5 6.2 9.5 1 2.4 0.5 4.4 4 12.1 1.5 3 0.7 2.4-0.5 2.5-1.8 1.8-1.4-0.8-1.1-1.6-2.8-3-5-12-14.7-27-3.7-15-1.4-2.4-11.3-9.6-2.1-3-3.5-6.8-2.4-3.7-9.6-11.3-1.5-3.8-0.3-4.9 1.8-14.9-0.4-5.6-1.2-4.4-11.9-22-2.1-2.2-2.3-1.3-2.1-3.4-1.5-4.1-0.7-3.8 1.3 0 1.7 1.4 1.6-4.1 2.6-4.4 3.5-2.5 4 1.5-2.7-2.6-2.1-4.2-1.2-4.9 0-4.3 1.9-2.6 3-2.8 2-3.3-0.9-3.9 3.3-3.9 0.6-1.7-0.9-2.3 1.3-2.2-0.4-2-1.6-1.5-1.2-0.5 1.4-4.5-0.8-0.5-2.9 8-2.5 3.3-3.6-0.1-1.7-2.7 0.6-3.7 1.2-3.7-0.1-2.7-1.5 0-1.1 4-2-0.3-2-2.8-0.8-3.4 0.7-5.2 1.9-1.3 2.8-0.6 3.3-3.1-1.3-1.6-3.6 2.6-1.5-1.9 1.3-3.5 5.1-2.1 0-1.6-10 0.8-7.6 2.4-2-2 0.4-5.5 2.2-5 3.9-2-1.7-2.4 0.9-2.2 2.3-1.8 2.9-1.4 0-1.7-2.3 0.2-2 1.1-1.7 1.6-1.3 2.1-1.2-2.9-1-4.8-1-9.2-0.6-2.3-3.1-3.5-0.7-2.1 0-8.8-5.5-23.8-0.4-8.1 2.3 1-0.4-2.6-1.9 0.4-1.6 3 0 4.5-1.3 0-2.3-4-2.2-5.1-1.3-5.7-0.2-5.8 1-3.6 3.9-4 1.1-2.1-0.3-3.8-1.9-2-2.3-1-1.5-1.3-0.7-5.8 3.8-2.8 5.6-1.7 4.7-2.5 2.3-4.1 5-16.6-4.4 0-0.5 3.5-2.1 9 0.4 1.8-1.5 1.3-2.5 2.7-3.2 2.7-3.8 1.3-0.7 1.2-5.3 2.9-1.6 2.3 0.6 3.7 2.3 1.8 2.7 1 2 1.5-0.1 4.5-3.7 2.8-4.7-0.4-3.3-5.2-3.8-26.7-2.3-8.5-14.6-28.9-27.6-38.8-6.9-2.8-3.8-3.5-3-4.2-1.7-3.7-1.7 0.9-1.4-1.1-1-2.4-0.4-3 0.5-2.8 2-2.9 1.4-6.8 3.4-9.9 0.1-5.6-1.6 0-0.7 4.4-3.7 12.2-2.2 2.6-4.7 1.5-3 3.8-1.1 5.2 0.7 5.6-3.3-2.5-3.2-1.5-3.6-0.7-4.7-0.2 0 1.7 4.6 1.4 0.5 2.2-2.1 2-3.8 1-11.2 0.2 3.9 1.3 3.5 1.6 1.7 1.4-0.6 3.4-2.8 2-3.6 0.9-3.7 0-6.6-1.4-1.7 0.2-0.3-0.9 0-4.2-2.7-1-3.2-0.4-7.4-0.1 0 1.5 2.7 2.4 1 2.6-1.5 1.7-5-0.2 0 1.7 12.5 3.3 5.7 2.4 2.4 4.7-0.7 3-1.7 3.3-2.5 9-4.4 4.2-4 3.3-5.7 1.6-10.6 2.2-8.2-4.1-4.3-6.3-2.3-10-2.2-2.8-2.3-4.1-2.4-7.2-1.8-2-3.2 1 3.2 3.3 3 6.5 1.7 6.8-0.5 4.5-4.4 2.2-7 1.1-6.5-0.3-2.9-2.4-1.3-3.2-5.9-4.3-1.4-2.1-0.7-2.1-3.1-4.3-1.7-6.7-2.4-1-6.3 0.5-1-1.3-2.6-8.4-1.7-1.4-3.6-2.1-1.4-4.2-3.1-4.4-0.7-1.6-0.3-2.4-2.6-6.4-1.6-8-1.7-4.1-2-3.5-1.6-3.9-0.6-5.3-1.1-2.9-16.7-22.8-2.3-6.2-0.5-2.7 0-2.6 2.5-14.3 0.3-9.7 1.2-5.2 2.4-4.5 1.8-4.4-0.9-4.4 1.4 0-3.6-7.7-0.2-3.1 2.4-2-1.7-0.6 0.1-1.2-5.5 1.9-3.6-4.9-2.1-7-0.6-4.5 0.3-13.8 1.8-5.4 5.3-3.3 12.6 0.1 5.1-2.8 0.1-8.7-1-3.2-1.9-1.4 1.9-2.9 4.8-3.1 2.2-2.4-1.6-2.7 0.9-2 2.6-1.3 3.3-0.4 0.5-1.2-1.9-2.7-5.7-5.9 1.9-1.9 1.6-3.2 0.2-1.7-0.5-1.7-2.2-2.6-3.1-2.2-0.7-1.5 0.4-2.1 3.4-5.2 4.4-11.6 0.3-3.5-1.2-5.1 0.1-1.9 2.1-3.1 2.8-2.2 2.9-0.8 6.6 0.3 1.7-0.2 4.2-2 6.4 4.2 2.5 0.7 2-1.1 3-2.5 8.2-11.4 4.4-9.9 1.1-5.8-0.9-4.5 1.9-5.6 2.5-2.4 3.5-2.2 4.2-4.8 1.6-5-4.2-2.5 1.6-3.4-3.9-5.6 0.3-1.1-0.9-4.6 1.3-0.8 4.9-1.7 7.2-9.9 2.9 2.3 1.6 0.6 1.5-0.2 0.6-1.9-0.4-2.7 0-2.4 1.9-1.1 4.2-0.4 3.7-1.3 2.8-2 17.8 9.3 5.4 1 7.2-6 3-1.4 2.5-0.4 2.7 1.1 0 1.6-3.8 3.3-5.9 3.6-1.4 1.6 1.3 1.7 5.2 1.5 1.4 1.3-1.4 0.8-4.7 1-1.5 0.7-1.6 1.7-0.1 4 1.6 3.6 1 4-0.2 3 0.7 5.9 2.2 8 3.1 4-0.1 2.1-0.9 5.5z'
    }, {
      id: 'sylhet',
      geo_code: '60',
      value: 0,
      d: 'M710.8 629.8l0.9-5.5 0.1-2.1-3.1-4-2.2-8-0.7-5.9 0.2-3-1-4-1.6-3.6 0.1-4 1.6-1.7 1.5-0.7 4.7-1 1.4-0.8-1.4-1.3-5.2-1.5-1.3-1.7 1.4-1.6 5.9-3.6 3.8-3.3 0-1.6-2.7-1.1-2.5 0.4-3 1.4-7.2 6-5.4-1-17.8-9.3 1.7-2.8 1.7-1.6 3.2-8.1 7.3-3.3 4.7-3.3-3-4.7 2.4-2.6 1.5-0.5 1.1-2.2-0.4-1.8-2.5-3.3-4.7-4.2 3.6-2.6 0.3-2.9-1.2-5.6-2.6-1.2-2.4-0.2-1.6-1-1.7-2 0.2-1.7 2.1-2.1 1.9-2.7 2.3-4.4 3-7.9-3.9-2.1-2.5-2.5-1.1-2.5-2.7-3.4-0.1-1.8 5-2.5 0.7-1.3 0.3-4.5 2.3-4 0.1-1.8-0.9-2.9-1.2-1.8-2.3-1.1-6.6-0.3-3.9 0.5-1.2-0.5-1.4-4.3 1.6-12.4-0.8-10.6-1.5-4.9-2.8-10.7-25.7 2.7-6.2-2.8-14.1-23.5 2.4-8.6 1.9-4 2.3-3.5 0.7-2.3 0.1-3.2-3.2-10.4 0.6-10.3 1.9-0.2 6.8-2.5 34.6-5.6 12 0.4 2.7-0.4 4.7-2.5 2.3-0.1 10.4 5.5 32 9.8 8.4 1 2.1-0.3 4.4-1.5 4.8-0.9 3.7-3 1.8-0.8 3.8 0.3 1.5 1.8 1.5 2.7 3.5 2.9 3.6 0.9 5.5 0.2 5.1-0.7 2.2-2.2 1.1-3.9 2.5-0.1 4.7 2 1.5-1.2 1.3-2.9 1.4-1.3 3.3-0.5 10.4 1 23.1-2.9 12 1.8 9.8-3.1 7 0.3 6.9 1.7 5.8 2.3 1.7 1.4 2.1 3.4 1.3 1.3 1.7 0.5 3.1 0.2 2.7 1.6 2.9-0.9 1.8 0.3 1.4 1.3 3.2 4.2 3 2.6 2.6 1.9 2.9 1.3 3.9 0.9 11.2 1.6 1.9 1.4 3.4 4.9 6.1 2.6 5.4 3.2 1.2 6.8 5.5 1.8 0 0.8 7 5.2 2 1 0.9 1.1-1.8 1.7 5.3 2.3 2 2 1.7 3.8 0.7 4.2-0.7 2.6-3 4.7-7.7 2.1-13.2 4.4-2.1-0.3-1.6-0.7-0.9-1.2-0.2-1.8-14.7-9-8.3-2.8-6.3 2.8-1.1 4 0.9 4.2 2.8 7.7 0.4 3.8-0.1 3.7-0.5 3.7-11 31-2.1 9.2-1 8.1-1.1 3.6-2.3 3.5-3.1 2.5-3.3 2-2.7 2.7-1.1 4.5 1.2 14.4-0.8 6.8-4.2 5.7-5.5 2.6-6.3 0.5-18-1.6-0.3 2.8 4.9 8.1 0.2 3.2-4.2-1.7-4.7-3.3-2-1.8-4.8 1.6-0.7 4.2 2.3 9.5-0.2 4.6-4.7 20.2-1.6 4.1-2.7 1.8-4.4-1.1-6.6-6.6-0.5-2.1-0.3-5.4-0.6-1.5-2.3-0.1-13.7-3-2.2 3.1 0.6 4.5 1.4 4.8 0.1 4.1-2.5 3.7-3.7 1.4-4.2-0.6-3.9-2.5-2-3.6-3.8-9.6-2.2-0.8-1 2.8-2.3 15-1.7 5-2.1 3.3-3.1 2.1-5 1.5-8.9 1.1-8-0.7-16.4-3.6-9 0.8-2.6 6.1-0.4 9-2.2 9.6-2.6 1.8-4-1.1z'
    }, {
      id: 'rajshahi',
      geo_code: '50',
      value: 0,
      d: 'M359.5 352.6l-2.9 12.8-2 12.6-1.2 20 0.3 2 5.2 25.8 1.9 4.7 2.9 5.8 2.2 2.4 3.7 2.5 6.4 3.4 3.9 3.7 1.8 2.2 1.4 2.5 1.1 4.4 0.1 5-2.4 10.8-0.3 2.6 1.1 4.6 0 3-1.6 6-2.4 2.9-1.1 2.6 0.6 2.9 0.2 4.4-0.3 4.7-1.8 7.4-0.2 8.9-2 17 0 2.4 1.3 9.1-0.1 9.3 0.2 2 8 8.8 3 2.6 0.3 6.4 3.9 1 0.8 2.2-0.4 2.2 1 2.5-0.9 3.4-0.4 3.4 0.6 0.4-2.1 4-0.6 8.4-1.6 3.2-2 3.3-2.7 2.5-18.5 15.4-2.8 7.3-0.9 5.2 0.6 3.5 2.2 11 0 2.8-4.9 1.3-12 1.1-3.5 1.4-6.5 4.3-3.8 1.2-5.5-1.1-8.7-7.9-4.9-2.9-19.3-8.3-7.1-4.8-5.1-2.2-5.4-1.2-5.8-0.5-17.9 1.9-5.9-1.1-4.7-2.2-4.6-3-8.3-7.2-2.1-2.5-0.6-2.1 1-5.2 0-2.5-0.9-2.1-4.4-5.6-1.9-5.9-7.9-7.6-5-6.7-1.7-1.4-3.9-2-4.3-0.3-2.2 2.9-2.9 2-13.9 6.6-4 0.9-4.2-0.7-1.7-0.9-3.2-2.3-5.2-2.8-1.4-1.2-3.4-5.2-1-3.6 0.7-2 2.5-3.7 0.7-2.2-0.5-0.9-0.5-3.9-0.4-1-1.2-9.3-5-6.8-7.1-4.3-4.6-1.1-2.3 5.5-3.3 5-4.7 0.3-10.7-3.7-14-0.6-4.9-1.1-16-12.8-56.7-29.8-6.3-1.4-0.4-1.6-2-3.5-2.7-3.4-0.3-1.2 0-12.3-0.6-1.5-3.2-3.2-2.1-4.9-3.6-1.5-4.1-1.2 1.2-7.2 1.7-4.3 2.9-4.1 1-10.4 2.4-1 2.7-0.5 1.5-2.2 0.3-3.3 0.7-2.8 1.4-1.7 2.8 0.5 2-4.3 3-3 2.1-3.1-0.6-4.5-2.8-8.2-1-2.1-1.2-1.2 0-1.1 10.7-5.9 4-1.4 4.2 0.4 3.5 2.5 3.1 4 1.9 4.6 0.2 4.4 2.6 0.1 9.1 2.5 3.6 0.3 2-1.5 3.9-7 7.5-9.9 2.7-5.5 0.6-6.3 5-6.3 2.6-7.1 1.8-15.6-0.6-13.5 2.1-3.9 7.4-1.3 3.5 0.9 6.8 2.7 7.8 2.2 2.4-0.6 1.6-1 2.6-3 2-0.8 7.6 0.3 6.5 1.2 13 4.9 12.9 1.3 1.7-1.3 2.2-5.2 1.4-1.7 1.8-0.3 2.8 1.3 14.8 5.2 5.5 0.4-3.2-5.1 4-0.9 0.6-2.3-0.6-3.2 0.2-3.2 1.9-2.6 8.1-6 1.6-2.3 0.5-2.4-0.5-2.3-1.6-1.9 21.4 0.7 23.3 0 8.9 2.2 0.7 9.1 5.5 12.2 6.9 6.8 14.4-8.3 13 3 20.6 6.8 21.3 0 16.6 1.7z'
    }, {
      id: 'rangpur',
      geo_code: '55',
      value: 0,
      d: 'M384.9 294.4l-3.6 0.7-3.1 2-1.9 3.5-4.9 11.8 1.9 13-1.2 6-3.2 4.7-2.6 3-2 3.2-4.8 10.3-16.6-1.7-21.3 0-20.6-6.8-13-3-14.4 8.3-6.9-6.8-5.5-12.2-0.7-9.1-8.9-2.2-23.3 0-21.4-0.7-10.5 0.5-5.1-0.7-4.9-4.8-4.5-0.3-2.2-0.6-1.6-1.3-5.1-6.4-0.9-2.6-0.2-2.3-0.6-2-2.3-1.7-0.1-1.5 3.7-8.5-0.3-5.1-2-3.1-2.7-2.5-2.6-3.2-1.9-1.6-6.6-2.6 0.2 4.2-2.2 1-4-0.4-1.7 0.3-2.3 1.9-3.8 4.3-2.5 0.7-4.5-1.1-7-4.6-4.2-2-9.2-0.4-4.5-0.9-2.1-2.1-1.7-3.5-5.8-4.5-2.2-4.8-8.2-4.1-3-3-0.9-14.7-5.7-6.5-15.7-10.7-13.1-15.3-7-3.6-9.6 2.8-3.6 2.1-4.3 1.9-4 0.2-2.8-2.9-1.5-4.6-1-2.1-3.4-3.8 0.3-4.3-1.5-3.6-1.6-10.7 2.9-3.6 4-13.6 4.2-8.1 5.4-4.3 1.5-4.6-0.3-2.6-2.5-2.2-0.8-1.2-0.3-2.3 1-2.6 2.4-7.8 1.8-2.9 7.1-4.6 1.9-1.7 2.9-3.3 2.3-0.9 4.5-1 12.6-4.3 3.8-2.4 1.7-3.6-0.3-8.7 0.8-3.5 3.2-4.7 3.3-3 10.2-6.4 1.6-2.1 1-2.2 1.2-1 3.7 2.1 2 0.1 3.8-0.7 4.8 0.8-0.5-6.1-4.3-13.1-3.1-5.2-5.8-2.8-12.4-2.4-5-2.2-1.6 0.1-0.7 1.6-0.6 5.6-1 1.4-2.8-0.8-1.7-3.2-0.2-4 1.2-3.2 2.8-4.8 4.4-15.5 1.6-3.4 2.6-4.5 2.8-2.9 2 1.3 0.3 4.5-0.2 5.1 0.6 4.8 2.9 3.2 7.6 2.4 3.5 1.6 2.8 3.3 2.7 2.2 4.1 4.4 4.3 3 4.9 2.1 1.8 0.2 4.6-0.1 2.6 1.2 2.6 5.1 1.8 2.2 4.6 2.6 5 1.2-0.9 2-0.5 2.1 0.6 1.6 3.5 1.4-0.3 4.2 1.3 1.8 5 2.6 2.9 2.3 0.5 3-2 4.4-2.8 2.4-7.9 4-1.6 1.8 3.8 2.7 18.2-6.7 7.8 3 1.7 3.7 1.4 4.1 2.1 3.4 3.6 1.7 3.4-1.4 3.3-7.9 4.3-3 5.9 1.1 9.5 9.6 6.1 2.1 9.6-2.4 4.3-3.1-1.1-4.5-2.4-0.7-2.5-0.1-1.6-1.6 0.8-5.1-2 1.3-2 0.5-1.7-0.6-1.4-1.9-2-6.9-5.3-2.8-6.2-2.1-4.5-4.8-0.1-4.1 1.7-4.5 2.7-4.1 2.8-2.6 3.5-1.7 2 0.6 2 2 3.4 2.6 2.5 1.2 3.2 3.8 2 1.6 2.4 1 4.7 1.2 1.9 1.6 1 2.9-0.7 2.1 0.3 1.6 3.6 1.6 5.1 1.5 1.6 1.7 0.1 3.3-1.9 1-3.1-1.5-2.5 0.3 0.2 6.5 1.4 3.9 4.3 7.3 1.6 3.8 1.8 14.6 1.6 4.3 2.7 3.1 14.3 6.3 3.2 2.1 2.2 3 1.4 4.6 1.8 2.2 7.6 3.5 5.2 6.1 3.9 2.7 4.4 2 3.5 0.4 3.5-2 2.6-2.4 2.5 0 3.3 4.9 3.1 0.4 1.2-0.4 11.7-1 3.1 1 3.1 5.3 1.9 2.6 2.2 1.2 2.9-0.6 1.5-2.2 0.6-3.1-0.2-3.2 1.8-6.6 9.5-7.9 1.8-4.1-1.6-3-2.8-0.1-3 0.6-2.2-1.1 0-2.8 2.4-2 3.1-1.6 2.6-1.7-4-0.5-3.6-1.7-1.4-3 2.3-4.4 2.9-2 1.5-0.2 4.5 1.4 0.1-1.2-1.4-2.8-0.5-7.3 1.5-2 4.7-1.6 3.9 0.8 1.2 3.6-0.3 10.2 0.2 1.5 2.6 1.2 1.6 0.2 4.3-0.4 2 0.2 2.5 2.1 1.3 3.6 1 3.9 1.7 3.3 2.8 4 0.3 3-0.5 3 0.3 4.2 1.2 2.2 4.4 5.8 2.9 4.9 1.3 0.4 1.4-0.6 1.5-1.6 1.1-0.2 3.1 4-0.6 3.3-3.1 2.5-4.2 1.5 4.1 2.5 3.3 0.3 1.8 1.4-1 5.7-9.3 16.5-0.8 5.9 4 21.6 4.9 12.1 2.2 9.4-2 16.9-0.4 18-4.9 18.2-0.3 2.4z'
    }],
    districts: [{
      id: 'rajshahi',
      geo_code: '5081',
      value: 0,
      d: 'M120.73 789.591l3.729-8.62-8.7-11.084 1.243-16.009-7.456-8.62 1.242-9.852 24.856-7.389 14.913-7.389-1.243-9.852 23.613 1.232 3.729-3.695-3.729-6.157-6.214 3.694-8.7-4.926 16.157-8.62 18.642 6.157 1.242 9.852 7.457 2.463 7.457-8.62 6.214 4.926-1.243 13.546 11.185 4.926 27.34-14.778-1.242-2.463 13.67 4.926 7.457 6.158 9.943-1.232 8.699 8.62 9.942-3.694v12.315l1.243 6.157 9.942 4.926h6.214v7.39l-2.486 6.156-13.67 1.232-7.457 6.157h4.971l7.457 7.39-11.185 8.62 1.243 6.157h0l1.243 33.25-12.428 8.62-2.486 3.695h0l6.214 12.315 9.942-2.463 1.243 7.388 2.486 6.158 3.728 3.694-16.156 6.158-4.971 4.926 6.214 4.926-7.457 3.694 4.971 3.694-4.97 3.695 13.67 2.463 2.485 4.926-9.942 2.463-1.243 4.926H277.32l-17.398-7.39-11.185-9.851-4.972-2.463-8.699-2.463v-4.926l9.942-2.463 1.243-25.86-8.7-18.473-9.942-1.232-4.97 7.39-18.642-1.232-11.185-6.158-8.7 7.39-11.185-6.158-11.185-11.083-4.97 1.231-1.244-6.157-11.185-2.463-12.427-6.158-11.185-16.009z'
    }, {
      id: 'nilphamari',
      geo_code: '5573',
      value: 0,
      d: 'M256.193 140.601l6.214-6.157 6.214 1.231 6.214 4.926-4.971 13.546 7.456 2.463 6.214 7.39 7.457-1.232-1.243-8.62-6.214-3.695 7.457-8.62 13.67 1.231 6.214 8.62 4.972 6.158 3.728 6.157 2.485-3.694h11.185l2.486 2.463 7.457-3.695v8.62l1.242 14.778 8.7 6.158 8.7 4.926 2.485 6.157-1.243 7.389-2.486 18.472 3.729 12.315 2.485 13.546 9.943 8.62 11.185 7.39 8.699 7.388-3.728 9.852-3.729 8.62-3.728 4.926-7.457-8.62-12.427 11.083 1.242 13.547-9.942-9.852-6.214 12.315-19.884-4.926-13.67 3.694 4.97 12.315-6.214 7.389-3.728 6.157-11.185-1.231-9.942-8.62h-6.214v-13.547l-9.942-2.463v-29.555l-4.971-6.158-4.971-8.62-13.67-3.695 1.242-6.157-3.728-2.463v-9.852l-1.243-3.694 4.97-6.158-3.727 6.158 7.456-11.083 7.457-3.695v-20.935l3.728-7.389v-4.926l-1.243-17.24 3.729-7.39-13.67-14.777V140.6z'
    }, {
      id: 'panchagarh',
      geo_code: '5577',
      value: 0,
      d: 'M120.73 87.647l-2.485-8.62-2.486-6.157 6.214-8.62 4.971-11.084 4.972-14.778 9.942-14.778 2.485 16.01 1.243 8.62 9.942 9.852 9.943-2.463 2.485 8.62 9.942 2.463 1.243 7.39 9.942 3.694 1.243 4.925 9.942 2.463 6.214-7.388 3.728 9.851 4.972 6.158 7.456 4.926 2.486 4.926 6.214-2.463 3.728 3.694-3.728 8.62 3.728 3.695 4.971 3.694v2.463l9.942-1.231v4.926l2.486 4.926h-16.156l1.243 11.083-11.185 2.463-1.243 4.926 9.942-1.232 8.7-3.694 8.699-7.389 6.214 4.926-1.243 11.083 4.971 8.62 6.214 8.621-2.486 8.62v23.399l-3.728 9.851 2.486 12.315-6.214 8.62-8.7 12.315-9.942-2.463-13.67-1.231-4.972-9.852-6.213-4.926 7.456-13.546-4.97-9.852-6.215-7.389-9.942-3.694-4.971-4.926-3.728-7.39-6.214 2.464s-1.554-1.232-4.971-2.463c-3.418-1.232-8.7-2.463-8.7-2.463l-6.214-2.463-6.214 4.926-9.942-2.463-8.7-3.695-7.456 4.926-1.243 6.158s-4.039-.616-8.7-2.463c-4.66-1.847-9.941-4.926-9.941-4.926l-2.486-3.695 8.7-4.925 4.97-6.158-3.728-7.389v-17.24l13.67-1.232 4.972-4.926 4.971-7.389 11.185-3.694 2.486-8.62 6.214 9.851 6.213-3.694 4.972-8.62-4.972-6.158-4.97-7.389v-8.62l-8.7-7.389-11.185 2.463-6.214-9.852-6.214 4.926-7.457-1.231-6.213 9.851z'
    }, {
      id: 'thakurgaon',
      geo_code: '5594',
      value: 0,
      d: 'M54.863 322.86l-6.213-11.083-7.457-9.852 4.97-11.083-12.427-2.463 3.729-19.704 8.699-6.157-1.243-7.39 4.971-9.851 14.914-9.852 4.97-13.546-11.184-6.158 6.214-11.083 2.485-11.083 13.67-4.926v-12.315l18.642 2.463 13.67-3.695 18.643 12.315 3.728-9.852 12.686-2.64 10.927 3.872 9.942-1.232 24.855 6.158 9.943 11.083 8.699 3.695 12.428 14.777-8.7 12.315 2.486 8.62-6.214 6.158-2.486 9.852h-8.699l-6.214-9.852-3.728 7.389h-7.457l-3.728 13.546 4.97 4.926-6.213 1.231-7.457 12.315-2.485 7.39-3.728 7.388 4.97 6.157-7.456 1.232h-4.971v-6.157l-16.156 1.231v9.852h-6.214l-1.243 12.315 7.457 3.694-4.971 4.926v11.083l6.214 3.695 7.456 6.157-1.243 8.62-8.699 1.232-7.457-7.389-6.214-3.694v-4.926l-8.699-8.62h-7.457l-2.485-8.621-13.67-7.389 1.242-6.157-1.243-3.695-11.185 3.695-7.456 6.157-6.214-7.389-14.914 12.315z'
    }, {
      id: 'lalmonirhat',
      geo_code: '5552',
      value: 0,
      d: 'M340.702 144.295l-3.728-9.851-9.943 7.389-4.97-7.39 7.456-6.157-3.728-6.157-6.214-1.232-3.729 3.695-12.427-6.158-2.486-11.083 12.428-18.472 11.185-3.695v7.39l3.728 2.462 11.185 3.695 7.457 7.389 16.156-1.232 3.728 8.62-7.456 1.232 6.214 7.389-6.214 7.389h14.913l4.971 8.62-1.243 3.695h-7.456l-7.457-7.39v11.084l6.214 7.389 9.942 11.083 1.243 7.389-3.728 3.694 11.185 22.167 19.884 3.695 9.942 9.851 1.243 7.39-4.971 2.462 1.243 2.463 8.7 1.232 9.941 4.926 8.7 9.851 16.156 3.695 7.456-13.546 4.972 1.231 1.242 6.157 6.214 2.463 4.971 4.926 4.971-3.694-2.485 23.398 9.942 1.232 13.67 14.777 2.486-1.231v7.389h11.185l1.243 3.694-11.185 14.778-6.214 1.231 1.243 14.778-13.67 9.852-3.729-1.232-1.243-11.083-3.728 1.232-2.486 6.157-9.942-1.231-7.457-2.463-1.242 2.463-24.856-14.778s6.214-7.39 0-8.62c-6.214-1.232-12.428-4.926-12.428-4.926v-8.62l-7.456 1.23-11.185-8.62-12.428-4.926-7.457-8.62-15.937-5.22-7.675-12.02-6.214-28.325 3.728-18.472v-7.389l-19.884-12.315 1.242-24.63 9.943-3.694-6.214-8.62-7.457-1.232z'
    }, {
      id: 'dinajpur',
      geo_code: '5527',
      value: 0,
      d: 'M218.91 231.73l-6.214 6.158-2.486 9.852-8.699 2.463-7.457-11.084-2.485 8.62h-8.7l-3.728 13.547 6.214 3.695v3.694l-7.457-1.232-11.185 24.63 3.729 6.157-2.486 3.695-9.942 1.231-1.243-7.388-3.728 2.462-13.67-2.462 2.485 12.314-6.214-2.463-1.243 11.084 6.214 3.694-3.728 8.62 1.242 8.62 12.428 9.853v9.852l4.971 3.694-1.242 11.083-4.972 2.463v9.852l7.457 4.926h11.185v9.852l8.7 6.157 3.728 8.62 14.913 1.232 8.7-2.463 2.485 6.158 11.185 1.231v4.926l17.399 2.463 4.971-4.926 6.214-3.694s14.913 6.157 11.185 1.231c-3.728-4.926-3.728-13.546-3.728-13.546l7.456 7.389 7.457-7.39v12.316l6.214 2.462 4.971 11.084-4.971 12.315-6.214 3.694 7.457 3.694 1.242 9.852 16.157 16.01 3.728-6.158 3.728 4.926v4.926l31.07 2.463 3.728 4.926-1.243 8.62 13.67 7.39 12.428-2.464 6.214 9.852 17.4-2.463 37.283 8.62 9.942-4.926v-8.62l-9.942-11.083-1.243-11.084-13.67-11.083 2.485-4.926-3.729-2.463h-6.213l-1.243-7.389h-11.185l-7.457-8.62 3.728-2.463-12.427-7.389-8.7-34.481-4.97-12.315-18.643-3.694-8.699-19.704-17.399-11.083-2.485-17.241-13.67-3.695-4.972-4.926-7.457-1.231 3.729-13.546h-12.428l-1.243-29.556-9.942-17.24-11.185-2.464-3.728-9.851v-11.084l-21.128-3.694-8.7-11.083z'
    }, {
      id: 'rangpur',
      geo_code: '5585',
      value: 0,
      d: 'M421.483 492.804v-9.852l-16.157-11.083 3.729-6.157-9.942-2.463v-4.926l-12.428-1.232-9.942-8.62 6.213-1.231-16.156-8.62-9.942-45.566-19.884-4.925-8.7-19.704-14.913-8.62-4.971-19.704 12.428-12.315-3.729-12.315 13.67-3.694 21.128 3.694 3.728-9.852 12.428 9.852-1.243-14.778 12.428-12.314 4.971 9.851 14.914-22.166 18.641 12.315h8.7v8.62l13.67 4.926 4.971 11.083 19.885 12.315 2.485-4.926 14.914 7.389 3.728 3.694-1.243 3.695 11.185 2.463 3.728 4.926-11.185 4.926 9.943 3.694 3.728 4.926v8.62l-3.728 2.463v6.158l7.456 3.694 1.243 3.695-4.971 3.694-9.942 7.389 3.728 6.157-6.214 3.695-3.728-6.158-7.457-2.463-1.243 3.695-9.942-1.232-4.97 6.158 12.427 11.083-1.243 8.62 7.457 4.926-8.7 11.084-8.7 1.231-8.698 9.852-12.428 23.398v2.463l3.728 6.158-6.214 2.462 13.67 9.852h-32.311z'
    }, {
      id: 'kurigram',
      geo_code: '5549',
      value: 0,
      d: 'M501.02 363.499v-8.62l-11.185-9.852 11.185-1.232-7.456-7.389h-8.7l-3.728-11.083 8.7-7.389v8.62l6.213 4.926 11.185-9.851 1.243-16.01 16.156-13.546-1.243-4.926-11.185-1.231v-8.62l-4.97 3.694-12.429-17.24h-9.942l3.728-22.168h17.4l2.485 4.926-1.243 6.158 7.457 7.389 2.485-4.926 6.214-2.463v-6.158l-6.214-1.231-1.242-11.083 13.67-9.852h11.185v-6.158l-3.728-2.463-1.243-9.852-3.728 1.232-2.486 4.926-2.485 3.694-4.972-2.463 4.972-8.62-2.486-4.926-2.486-4.926v-6.157h4.972l7.456-8.62 2.486-6.158-1.243-7.389 3.728-3.694h11.185l7.457 6.157-4.971 4.926-1.243 6.157-1.243 2.463 3.729 7.39 4.97-3.695h13.671l3.729 11.083 12.427 20.935-4.97 2.463v7.39l7.456 2.462 6.214 18.472h12.428l-12.428 11.084 12.428 3.694 8.699 3.694v3.695l-6.214 6.157-11.185 9.852 1.243 13.546-6.214 8.62 4.971 8.621 4.971 8.62-7.456 7.39v7.388l6.213 1.232-2.485 9.852 11.185 8.62v32.018l-6.214 12.315-1.243 19.704-2.485 11.083-3.729 3.695-1.242 13.546-6.214-3.694-8.7-4.926v7.388l4.971 3.695-11.185 8.62-4.97-1.231v-4.926l-2.486 2.463-9.942-1.232v-6.157l4.97-2.463-4.97-1.231v-6.158l3.728-9.852L549.489 430l8.699-3.695-4.971-7.388v-4.926l-11.185-9.852h-8.7l-2.485 6.157-3.728-9.852-14.914-7.389-4.97-13.546-6.215-6.157v-9.852z'
    }, {
      id: 'gaibandha',
      geo_code: '5532',
      value: 0,
      d: 'M399.113 512.508l21.127 7.389 9.942-4.926 2.486-8.62-9.943-13.547 28.584 1.232-11.185-11.084 8.7-1.231-6.214-9.852 17.399-27.092 6.213-7.39 6.214 2.464 9.943-13.547-8.7-4.926 1.243-11.083-11.185-8.62 3.728-6.158 9.942-3.694 9.943 2.463 1.242 9.852 9.943-4.926-6.214-8.62 14.913-8.62 9.942 13.545 8.7 6.158 4.97 11.083 3.73-7.389h7.456l9.942 8.62v4.927l6.214 6.157-12.428 6.157 18.642 3.695-3.728 3.694v11.084l2.485 2.462-3.728 1.232v6.157l9.942 1.232 4.971-4.926v6.157l3.728 2.463v19.704l6.214 13.546 1.243 8.62-8.7 12.315-6.213-1.231-8.7 7.389-1.242 11.083-8.7 12.315-7.457 8.62V563l3.729 6.157 4.97 1.232-6.213 3.694-2.486 7.389-2.485-4.926-13.67-1.232-11.186 3.695-2.485 6.157h-6.214l-2.486-4.926-18.641-3.694-4.971-6.157-3.729-1.232-3.728 4.926-6.214-3.694-3.728-1.232-2.486 4.926-9.942-1.231-3.728-12.315h-4.971l-3.729-3.695-13.67-1.231-4.971 6.157-7.457-6.157v-3.695l-9.942-13.546h-3.729l-4.97-6.157-2.486-6.158 6.214-13.546z'
    }, {
      id: 'joypurhat',
      geo_code: '5038',
      value: 0,
      d: 'M335.73 636.887l-1.242-22.166 2.486-2.463 1.242-27.093-7.456-7.389h-6.214l-2.486 4.926h-4.97l-4.972-9.851v-6.158l3.729-1.231 1.242-18.473-7.456-1.231 3.728-2.463-4.971-9.852 6.214-6.157-1.243-8.62 2.486-17.241 14.913-4.926 4.97 1.231 11.186 8.62 13.67-2.462 6.214 8.62 17.4-2.463 13.67 4.926-4.971 9.852 6.214 9.852 6.213 4.926 8.7 12.314-1.243 3.695 11.185 7.389v4.926l-7.457 6.157-4.97 2.463 4.97 7.389-7.456 2.463 2.485 4.926-7.456-3.695-6.214 17.241h-4.971v9.852l3.728 3.694-1.243 4.926-6.214-1.231v-3.695H375.5l-1.243-8.62-8.7-3.695-1.242 17.241h-3.729l1.243 4.926 7.457 4.926v3.694l-11.185 7.39-3.728 2.462-6.214-4.926-6.214 7.39v-4.927h-6.214v4.926l-2.486-3.694h-8.7v-7.389l11.186-1.232z'
    }, {
      id: 'naogaon',
      geo_code: '5064',
      value: 0,
      d: 'M323.303 646.74v-8.621l12.428-1.232-2.486-22.166 4.971-1.232-1.242-25.86-7.457-12.316h-2.486l-4.97 6.158-6.214 1.231-6.214-11.083v-4.926h4.97l3.73-19.704h-13.671l7.456-2.463-7.456-9.851 4.97-6.158-9.942-1.231h-4.97l-16.157-9.852-3.728 8.62-8.7 6.158h-2.485l-6.214-7.39-6.214 3.695-14.913-8.62-8.7-2.463-2.485 4.926-23.613-1.232-6.214 12.315h-6.214v-7.389l-3.728-3.694-3.728 4.926-4.971-6.158h-7.457l-6.214-4.926-2.486 4.926-8.699 3.695h0l-1.243 9.852 9.942 4.926v3.694l-8.699 3.694v17.241l2.486 3.695-6.214-1.232-1.243 11.083 6.214 4.926-4.971 6.158-6.214 3.694v7.39l-6.214 1.23v4.926h8.7l7.456 7.39 1.243 13.546h3.728v-4.926l1.243-4.926h4.971l8.7 8.62v4.926l-8.7 14.778-6.214 2.463-9.942 1.231-1.243 3.695-11.185-2.463-3.728 7.389 8.7 4.926 4.97-2.463h14.914l-4.971 7.388 6.213 2.463 12.428 1.232 3.729 7.389-6.214 1.231-6.214-2.463h-4.971l-1.243 3.695 8.7 2.463 7.456 3.694 1.243 3.695 6.214 3.694 13.67 3.694v8.62l6.214 2.464 7.457-9.852 6.214 8.62-1.243 13.547 4.97 4.926 1.244-2.463h6.214l7.456-3.695 17.4-12.315h4.97l1.243 4.926 8.7-1.231h0l6.213 7.389 2.486-2.463h8.7l7.456 8.62 1.243-2.463 7.456-1.231 3.729 4.926V739.1l6.214 4.926 6.214 1.232 13.67 1.231v7.39l2.486 2.462h4.97l1.243-3.694v4.926h7.457l2.486 7.388 4.97-6.157 3.73 1.231 8.699-7.388v-12.315l-3.729-2.463v-8.62l9.942-14.778 3.729-6.158-1.243-11.083 2.486-9.852-6.214 4.926-13.67 1.232 1.242-11.084-8.7-14.778h-2.485l-9.942 9.852-3.729-1.231-11.185 9.852-1.242-27.093-4.971-2.463 7.456-9.852z'
    }, {
      id: 'chapainawabganj',
      geo_code: '5070',
      value: 0,
      d: 'M174.17 689.841l-7.457-6.157-8.7-2.463 1.244-4.926 17.399 3.694-3.729-7.389h-11.185l-11.185-4.926 6.214-7.388-11.185-2.463-4.971 4.926-9.942-4.926 2.485-8.62 9.943 3.694 2.485-4.926 13.67 1.231 3.729-4.926 9.942-16.009-12.428-12.315-3.728 11.084-7.457 1.231 2.486-12.315-7.457-8.62-7.456-1.232-3.729 8.62-14.913-1.23-2.486 9.851h-3.728l-1.243 4.926h8.7v6.158l-4.971 7.388-2.486-7.388h0l-6.214 6.157-2.485-6.157-7.457-4.926-3.728 7.388 3.728-12.314-12.428-8.62 1.243-7.39-8.7-1.231-1.242 3.694h-9.942l-9.943 6.158-1.242 6.157 6.213 6.158 2.486 17.24-22.37 14.778 2.486 9.852-7.457-1.232-3.728 3.695-1.243 9.852-1.243 8.62-1.243 6.157-6.214-1.231-6.213 3.694 3.728 3.695 6.214 4.926-1.243 4.926 13.67 8.62-1.242 7.389 7.456 7.389-3.728 11.083 4.971 9.852 6.214 7.389h8.7l7.456 7.389 4.971 6.157 8.7-1.231 31.07 9.852h12.427v-6.158h-1.243l-6.214-9.852v-17.24l-6.214-7.39v-11.083l14.914-7.389 9.942-1.231h0l13.67-8.62-1.242-9.852h26.098l2.486-2.463-4.972-3.695-4.97 2.463-8.7-4.926 16.156-11.083z'
    }, {
      id: 'bogra',
      geo_code: '5010',
      value: 0,
      d: 'M322.06 683.684l-1.242-25.861-4.971-3.695 9.942-8.62h7.456l3.729 8.62 1.242-8.62h3.729v7.389l8.7-11.084 6.213 6.158 14.913-12.315-12.427-12.315 6.214 2.463 1.242-18.472 7.457 3.694 1.243 7.39 13.67 1.23v4.927h9.943l-1.243-7.39-6.214-3.694V606.1l6.214 1.232 7.456-19.704 8.7 4.926-3.728-7.389h8.699l-6.214-8.62 12.428-7.389 1.243-8.62-4.971-1.232 4.97-4.926 13.671 2.463 8.7 4.926 2.485 11.084 11.185 2.462 2.486-6.157 11.185 6.157 3.728-7.388 9.942 9.851 14.914 2.463 6.213 6.158h4.972l3.728-8.62 21.127-2.464 3.728 6.158 3.729 1.231-3.729 9.852h4.972l2.485 8.62-4.971 7.39 4.971 3.694-2.485 6.157 4.97 7.39 1.243 8.62-6.213 1.231v11.083l9.942 11.084h8.7l3.728 6.157-2.486 3.694h-17.399l-2.485 3.695v7.389h-2.486v8.62l-12.428 17.24-8.7-8.62-6.213 3.695-4.971-4.926v6.157l-4.971 4.926-1.243 9.852 4.971 2.463-2.486 6.158 1.243 2.463 7.457-1.232 7.457 6.157-4.972 6.158 8.7 4.926-4.971 6.157h-7.457l-1.243 4.926-7.456-2.463-4.971-7.389-1.243 6.158h-7.457l-3.728-4.926-9.942 4.926-8.7 1.231-9.942-6.157-24.856 1.231v-6.157l-6.213-8.62h-3.729l-7.456-7.39-9.943-1.23-4.97 3.694 2.485 9.851-1.243 3.695-13.67-11.084v-4.925l4.97-3.695-2.485-6.157-7.457 6.157-3.728-3.694-6.214 13.546-8.7-17.24 6.215-7.39-1.243-18.472-6.214 6.158-12.428-1.232 1.243-6.157-11.185-18.473-8.7 9.852-3.728-4.926-12.428 11.084z'
    }, {
      id: 'natore',
      geo_code: '5069',
      value: 0,
      d: 'M289.748 904.119v-6.158l12.428-1.231-2.486-6.158-16.156-2.463 4.971-4.926-4.97-2.462 7.456-3.695-4.971-7.389 19.884-7.389-6.214-9.852v-7.388l-12.427 1.231-4.971-12.315 16.156-11.083-2.486-39.407 12.428-8.62-8.7-8.621h-7.456l11.185-7.389 12.428 2.463 4.97-9.852-1.242-4.926h8.7l-1.244 6.158 7.457 6.157 9.942 1.231 8.7 1.232 11.185-7.389 1.243-13.546h-4.972v-11.084l9.943-12.314 8.7 14.777 4.97-12.314 4.971 2.463 7.457-7.39 3.728 4.927-7.456 8.62 14.913 11.083 1.243-4.926-4.971-6.157 6.214-6.157 11.185 2.463 7.456 6.157 7.457 6.157 3.728 8.62 3.729 3.695-21.128 28.324-12.427 14.778 7.456 3.694 2.486 7.39 6.214 3.694 1.242 23.398-9.942 9.852v6.157l-6.214-1.231-11.185 22.166-8.7 4.926H384.2l-3.728 8.62-11.185 8.62-22.37 4.927-4.971-4.926-3.729-1.232-4.97 8.62v8.621l-14.914-1.231-12.428-3.695-4.97 6.158-11.186-2.463z'
    }, {
      id: 'sirajganj',
      geo_code: '5088',
      value: 0,
      d: 'M426.454 826.535v-18.472l-6.214-4.926v-4.926l-8.7-7.389 33.555-40.638-2.485-4.926h22.37l8.7 7.389h8.699l11.185-6.158 9.942 4.926 2.485-8.62 4.971 9.852 8.7 2.463v-6.158h6.214l6.214-4.926-9.943-6.157 4.972-4.926-8.7-7.389-7.457 1.232-2.485-1.232 6.214-6.157-6.214-3.695 3.728-13.546v-8.62l6.214 6.157 7.457-2.463 7.456 7.389 16.157-17.24-2.486-7.39 2.486-12.315 14.913 1.232 4.971 6.157 3.728 3.695 2.486-4.926h3.728l6.214 6.157 3.728 1.232 1.243 7.389-7.456 1.231-1.243 3.695 7.456 6.157v18.472l-2.485 9.852h-7.457l6.214 7.389 1.243 8.62-6.214 3.695-1.243 7.389-4.97-1.232-6.215 7.389 6.214 8.62v9.852l-8.7 6.158-3.728 6.157 17.4 18.472-7.457 7.39 1.242 4.925 8.7 6.157 6.214 9.852-2.486 35.713 3.728 4.926-3.728 3.694v4.926l3.728 1.232 4.972 4.926v3.694l3.728 3.695-1.243 14.777-8.7 17.241-16.155 6.158h-8.7l-9.942-12.315-14.913-11.084h-11.185l-16.157-13.546-12.427-2.463-1.243-6.157 6.214-2.463 1.243-8.62-4.972-2.463 3.729-2.463v-4.926l-4.971-6.158-3.729 2.463-11.185 2.463-3.728-2.463v-8.62l4.971-2.463s0-7.389-4.971-7.389h-6.214l-3.728 6.157h-2.486l-2.485-7.388v-9.852l-11.185-7.39-9.942-2.462-17.4-3.695z'
    }, {
      id: 'pabna',
      geo_code: '5076',
      value: 0,
      d: 'M333.245 906.582v-8.62l4.971-8.621 6.214 6.157 24.856-4.926 12.428-9.851 2.485-9.852 7.457 2.463 11.185-6.158 7.457-22.166 7.456 3.694 1.243-9.852 9.942-9.852 26.098 6.158 8.7 3.694v12.315l3.728 7.389 8.7-4.926 7.456 2.463-4.97 3.694v9.852l4.97 3.695h11.185l4.972-6.158 4.97 8.62-7.456 6.158h6.214v7.389l-7.457 3.694 2.486 8.62 11.185 1.232 16.156 13.546 11.185-1.231 16.156 13.546 8.7 12.315-12.428 2.463v7.389l-4.972 1.231 1.243 11.084 6.214 7.389 9.942-2.463 4.971 14.777h-4.97l-9.943-11.083 3.728 14.778 14.914 2.463 11.185 7.389-11.185 3.694-6.214 3.694-14.913-1.231-14.914-6.157-17.399 4.926-11.185 4.925-29.826-18.472-4.971-12.315-14.914-16.009h-6.214l4.971 12.315-6.213 7.389-13.671-2.463-8.7-12.315-12.427-13.546-4.971-2.463h-17.4l-7.456-4.926h-13.67l-7.457-1.231-9.942 8.62v-6.158l-9.942-3.694-4.972-9.852 2.486-16.009-7.457-8.62z'
    }, {
      id: 'kushtia',
      geo_code: '4050',
      value: 0,
      d: 'M231.338 883.183h13.67l12.428 11.084 17.399 9.852 13.67 1.231 13.671 2.463 4.971-8.62 9.942 6.157h16.156l7.457 13.546-2.486 11.084 3.729 11.083 4.97 1.232 6.215 1.231v7.389l11.185 4.926 3.728 9.852 4.971-6.158 6.214 3.695 7.457 8.62 17.399-1.231-12.428-11.084 14.913-3.694 13.67 9.852-9.941 3.694 1.242 7.389 11.185 8.62 7.457 4.926 7.457-1.231 4.97 2.463-1.242 11.083-1.243 17.24-8.7 9.853 2.486 6.157h-8.7l-14.912-9.852-3.729-1.231-2.485 7.389h-11.185l-6.214 8.62-7.457-2.463-9.942 8.62-1.243-11.083h-7.457l1.243-7.389-8.7-2.463-1.242 4.926 6.214 8.62-8.7 2.463-.728 8.335-9.214 3.98v-16.009l-1.243-11.083-4.97-6.158-4.972 3.695-6.214 8.62-6.214-14.778-9.942-2.463 6.214-7.389-11.185-2.462-8.7-6.158 4.972-4.926v-4.926l-7.457 1.232-4.97-3.695 8.699-4.926-3.729-9.851-4.97-6.158-8.7 4.926-3.729-12.315-3.728-4.926h-3.728v9.852l-13.67-14.778h7.456l4.97-2.463-7.456-7.388-6.214 1.231-3.728 2.463-1.243-7.389 8.7-2.463-11.185-6.157 7.456-3.695-14.913-11.083-3.728-29.556z'
    }, {
      id: 'rajbari',
      geo_code: '3082',
      value: 0,
      d: 'M440.124 1007.563v-16.01l-6.214-4.925 7.457-3.695 17.399 1.232 9.942 1.231 6.214 7.39v8.62l2.485 8.62 18.642 11.083-4.971-13.546 9.942-1.231 2.486 6.157 6.214 3.694 17.399-11.083 6.213 3.694-1.242 6.158 6.214 7.389v-9.852l27.34-1.232 13.671 2.463 8.7 11.084 1.242 13.546-11.185-8.62-8.699-11.084h-29.827l-1.242 4.926h24.855l12.428 8.62 16.156 12.315 6.214 4.926 4.97 2.463-6.213 2.463-1.243 6.158h-12.427l-1.243 6.157-8.7-2.463v17.24l9.943 6.158-2.486 6.158h-8.7l-2.485-6.158-2.486 6.158-12.427-1.232-2.486-14.778-14.913 13.547h-6.214l-2.486-11.084h-4.97l-2.486 4.926-12.428-6.157-2.486 4.926 7.457 4.926-7.457 3.694-4.97-1.231v-6.158l-9.943-1.231-4.971-13.547-12.428-8.62-1.243-7.389-17.398-1.231-2.486 3.694-14.913-13.546-2.486-7.389-3.728-7.389 8.7-8.62v-12.315z'
    }, {
      id: 'meherpur',
      geo_code: '4057',
      value: 0,
      d: 'M249.98 950.915l14.913 16.01 1.242-12.316 7.457 7.39v7.388l3.728 4.926 7.457-7.389 8.7 13.546-11.185 7.39 7.456 6.157 7.457-2.463 2.485 4.926-8.699 3.694v2.463l-1.243 7.389-6.214-3.694-4.97 7.388 1.242 11.084-11.185 1.231.31 23.398-10.252 10.776-9.632 1.54-6.524 4.925-4.971-1.232-16.157 13.547-2.485 3.694-18.02.924 1.864-13.239-8.7-2.462-2.485-4.926 6.214-3.695 2.485-8.62-6.214-2.463 1.243-13.546 6.214-6.158-8.7-12.315 6.214 2.463 7.457-7.389v-2.463l-3.728-3.694 1.243-13.546-2.486-2.463 7.457-3.695 6.214 2.463v7.39l4.29-5.432 7.516-.418 13.05-13.855 8.077-.923 2.796-7.389-2.174-10.16 1.242-6.157z'
    }, {
      id: 'chuadanga',
      geo_code: '4018',
      value: 0,
      d: 'M216.424 1082.683l21.128-16.009 6.213 1.232 4.972-6.158 10.381-2.252 8.624-10.212.879-23.249 9.867-1.38-2.41-10.935 7.456-6.157 6.214 4.926 2.561-11.158 6.139 6.232 14.336 1.231-8.122 7.39 9.942 3.694 2.636 5.722 7.306 9.055 2.485-6.157 6.214-6.157 4.971 6.157 1.394 27.963-.15 16.37-3.73 13.547-3.207 4.281-7.977 1.876v3.694l4.971 3.695-1.243 6.157-13.67-2.463-7.457 2.463 5.818 1.412 4.124 8.44-1.243 17.24-6.213 2.464 7.237 4.124 2.705 5.728-13.382 10.362-11.474.435-1.242 11.37h-8.7l-7.093-5.573-7.82 3.11h-11.185l-3.729-3.695v-14.778l3.729-11.083 7.456 2.463-.954-8.185 2.925-7.314-3.213-3.26-6.214-.945 5.41 5.287-9.139 7.028-4.97-4.926 1.242-4.926-4.318-3.98-9.413-4.677-16.096-12.278 3.729-8.62-8.7-8.62z'
    }, {
      id: 'jhenaidah',
      geo_code: '4044',
      value: 0,
      d: 'M256.193 1162.73l14.914 3.694 7.456-4.926 4.971 6.157 9.943 1.232 1.242-13.546 8.7 1.231 16.156-9.852-1.243-6.157-9.942-6.158 4.971-2.462 2.486-17.241-3.729-6.158-6.214-3.694 7.457-3.695 14.913 6.158 1.243-6.158-4.971-6.157-1.243-3.694h7.457l9.942-17.241-1.243-19.704 8.7-3.694 3.728-8.62h6.214v-4.927l-6.214-7.388 1.243-4.926 7.456 3.694v6.158l7.457 2.462 1.243 7.39h4.971l4.971-7.39 8.7 3.695 6.213-8.62h11.185l3.729-7.39 14.913 10.5 9.942 1.815 1.243 4.926 17.399 14.778 1.243 7.389-2.486 3.694h-3.728l-2.486 4.926 3.729 3.695 1.242 4.926-3.728 1.231v7.39l4.971 2.462-1.243 2.463h-6.213l-6.214 9.852 1.242 13.546-1.242 13.546-3.729 6.158-4.97 4.926-6.215-1.232-7.456 14.778-1.243 8.62 4.97 1.232-4.97 3.694v6.158l-6.214 6.157-4.971-4.926-2.486 3.695 3.729 9.852-8.7 3.694-21.127 3.694-6.214-14.777h-9.942l-4.971-11.084 7.456-4.926-12.427-4.925-4.971-3.695-3.729 3.695 7.457 9.851h-12.428l-9.942 4.926 7.457 7.39 7.456 3.694-9.942 1.231-16.156-4.926-3.728 1.232 7.456 4.926-3.728 8.62-3.728 6.157-1.243 6.158h-21.127l-12.428-6.158v8.62l-12.428-1.23-2.485-6.158-9.943-1.232-6.214-3.694v-6.158l-7.456-4.925v-6.158l2.485-4.926 9.943-2.463-1.243-6.157 8.7-8.62z'
    }, {
      id: 'magura',
      geo_code: '4055',
      value: 0,
      d: 'M420.24 1167.655l-6.214-3.694v-6.157l8.7-14.778 6.213 1.231 9.942-12.315v-14.777l-1.242-12.315 3.728-9.852h8.7l2.485-3.694-6.214-1.232v-8.62h3.728v-4.926l-4.97-4.926 1.242-4.926 6.214 2.463 2.485-4.926-1.242-7.389 1.242-3.694 16.157 1.231 2.485 6.158 12.428 9.851 3.728 12.315 4.971 6.158v8.62l4.972 6.158 4.97 2.462v4.926h-6.213l-4.971 3.695 1.242 3.694h18.642l9.942 6.158 2.486 8.62h3.728v13.546l8.7 13.547 2.485 7.388-11.185-7.388-4.971 4.926 6.214 2.462v16.01h-14.913l-6.214 11.083-6.214 2.463-8.7-11.083-4.97 2.463-7.457 9.851-4.971 2.463h-2.486l-6.214-7.388-3.728 1.23-7.457-8.62h-1.243l-2.485 2.464h-6.214l-6.214-4.926-1.243-7.39-7.456 1.232-12.428-9.852z'
    }, {
      id: 'jessore',
      geo_code: '4041',
      value: 0,
      d: 'M307.147 1209.526l9.942-17.241-9.942-8.62h7.457l12.428 6.157h13.67l-16.156-12.315 6.214-4.926 17.399 1.232-8.7-9.852 3.729-6.157 2.485 4.925 14.913 4.926-6.213 4.926 3.728 9.852 11.185 1.232 4.971 14.777 14.913-2.463 16.156-3.694-4.97-9.852 1.242-4.926 6.214 4.926 7.457-6.157-2.486-7.39 4.971-2.462 16.156 11.083 6.214-1.231 1.243 6.157 7.457 7.389 6.213 1.231 3.729-4.925 6.214 8.62 11.185 3.694-3.729 6.158 6.214 3.694-3.728 3.695 1.243 14.778-3.729 4.925 2.486 11.084-11.185 1.231v3.695l6.214 2.463 1.243 4.926-3.729 1.231 1.243 8.62 11.185-7.389h3.728l-1.242 12.315 7.456 2.463v2.463h11.185l2.486 3.695-2.486 8.62 7.457 12.315s6.214 8.62 1.243 8.62h-7.457l-8.7-2.463-3.728-3.694-6.214-14.778-3.728-3.694-8.7 6.157 2.486 8.62-7.456 11.084-16.157 7.389-1.242 6.157 4.97 6.157-1.242 16.01-1.243 4.925-13.67-6.157v-6.157l-4.971-1.232-1.243 3.695-11.185 9.851-7.457-1.231-11.185 6.157h-7.457 0l-8.699-6.157-1.243 1.231-4.97-3.694-1.244-6.157 7.457-1.232-8.7-11.083 7.457 1.231 1.243-3.694-4.971-8.62-9.942-6.158-1.243 7.389h-19.263l-8.078-6.158-6.214-3.694h0l4.971 11.7-4.971 4.925-18.642-2.463-4.97-5.542-6.215 3.695h-4.97l3.728-7.389-14.914-6.157 2.486-22.167 7.456-2.463-3.728-6.157v-6.158l-4.971-3.694 9.942-16.01 12.428-4.925-1.243-9.852 12.428-8.62 4.971 3.694 3.728-7.389-4.97-2.463-1.243-6.157-11.185 8.62-6.214-3.694-2.486-9.852z'
    }, {
      id: 'narail',
      geo_code: '4065',
      value: 0,
      d: 'M476.165 1209.526l-6.214-8.62 9.942-1.232 9.942-9.852 3.729-3.694 7.456 11.083 8.7-3.695 6.214-8.62h13.67l3.728 9.852h9.943l1.242 2.463-8.699 9.852 3.728 7.389h13.67l6.215 7.389v4.925l-3.729 6.158 3.729 1.231 8.7-6.157 9.941 1.231-1.242 8.62-3.729 8.621-4.97 9.852h-6.215l-9.942-2.463 16.156 13.546 4.971 7.39 4.971 12.314 13.67 8.62v6.158l-3.727 1.231-11.185 2.463-28.584-11.083-9.942 11.083-16.157-8.62-4.97 7.389h-3.729l-13.67-16.01 4.97-7.388-3.728-7.39-12.428-1.23-6.213-6.158 2.485-9.852-4.97-1.232-11.186 11.084 2.486-9.852-1.243-7.389-7.457-2.463 13.67-2.463-2.485-11.083 4.971-4.926-2.485-18.472z'
    }, {
      id: 'satkhira',
      geo_code: '4087',
      value: 0,
      d: 'M354.373 1667.636l-11.185 4.926 2.485 9.852 7.457 11.083-6.214 20.935 1.243 7.39 9.942 2.462 11.185 16.01 9.942 1.231 3.729-7.389-1.243-7.389-4.971-6.157-8.7-1.232-8.7-7.389 1.243-20.935-6.213-23.398zm-21.128-360.823l8.7 11.083-6.214 7.389-7.457-4.926-9.942 1.231-4.971-4.925-11.185 6.157 2.486 9.852 7.456 8.62 3.729-6.157 4.97 2.463-1.242 6.157 4.97 2.463-1.242 7.389-7.456 7.389 4.97 4.926-4.97 1.231-1.243 11.083-7.457-3.694 2.486 11.083 9.942 13.547-11.185 20.935 12.428 8.62-2.486 7.389-2.485 9.852 11.185 8.62-2.486 11.084 7.457 12.314 1.242 13.547 4.971 3.694-11.184 3.694 1.242 7.39 4.971 3.694-4.97 20.935 12.427 1.231 2.486 9.852-9.943-2.463v6.158l7.457 8.62 7.457 1.232v11.083l8.7 7.389 1.242 16.009 11.185-2.463-8.7 12.315h-11.184l-1.243 9.852 3.728 12.314 11.185 19.704-3.728 2.463-1.243 29.556 8.7 11.083 1.242 16.01 1.243 8.62 14.913 7.388 11.185-4.926 7.457 14.778-2.486 6.158 7.457 7.389-4.971 11.083-11.185 12.315 14.913 6.157 14.914-3.694-2.486-6.158h8.7l1.242-7.389-6.214-3.694 4.971-7.389v-24.63l-4.97-2.463 10.563-8.62 8.078-23.398 7.457-7.389-3.729-11.083-9.942-18.472-9.942-19.704-3.728-8.62 8.699-8.62h-21.127l12.428-17.242 6.213-13.546 4.972-30.787-12.428-19.704v-6.157l7.456-6.157-12.427-8.62 1.242-23.399 11.185-6.157-11.185-20.935 1.243-28.324 7.457-8.62 6.214 11.083 7.456-9.852-2.485-6.158-7.457-1.231-4.97-4.926 4.97-9.852 2.486 4.926 6.214 2.463 2.485-8.62 6.214-3.695-1.243-6.157-11.185-18.472-12.427-6.158-6.214-11.083-2.486-3.695-9.942 7.39-8.7 1.23-7.456-7.388-3.728 2.463-4.972-11.083 7.457-2.463-11.185-11.084 9.942 2.463-4.97-14.778-7.458-4.925-1.242 8.62h-19.885l-17.399-11.083z'
    }, {
      id: 'khulna',
      geo_code: '4047',
      value: 0,
      d: 'M432.668 1719.358l-2.486 22.167 13.67 8.62 3.729-13.546-14.913-17.24zm11.806-324.495l-4.35 1.848-1.864 9.236-6.214-3.079-2.485-6.773-6.836 11.083 4.971 5.542 8.078.616 3.107 7.389-7.456 9.851-6.214-10.467-8.078 7.389-.622 26.476 11.807 23.399-11.807 6.157-1.242 22.782 11.806 9.236-6.835 4.31-.622 6.774 13.05 20.935-5.593 29.555-17.399 31.403 20.506-.616-8.078 8.62 21.749 46.181 4.97 12.315 8.079 2.463.621 8.005-13.05 2.463-9.941 16.625 5.592 4.926 3.729 11.083h5.592l1.864 9.852 3.728 12.315 15.535 1.231 9.321-14.162 4.971-3.079 4.971-9.236-2.485-5.542-3.107-7.388-11.807-7.39 9.321-4.925 16.778-17.24 1.243-13.547.62-15.394h4.972l8.7-32.018.62-25.245-5.592-23.398 16.778-16.625 3.728-8.005 5.593-1.232 7.456-12.314v-15.394l-11.185-32.634-6.214-3.079v-14.778l-8.7-18.472-2.485-20.935 4.972-11.7 9.942-9.85 6.214-21.552 4.97-4.31 4.35 3.079 9.321-9.236 4.35-8.62-1.864-9.853-3.729-3.694v-8.005l13.05-.615 8.078-6.773 4.97-25.862-28.583-9.851-12.428 11.083-14.292-8.62-6.214 8.004-6.214 3.695-14.292-1.848-5.592-3.694-9.942-19.088-9.321 3.695 3.107 9.851-9.32 11.084-15.536 7.388-1.864 4.926 4.971 5.542-1.242 24.014-14.292-6.773 1.242-6.158-5.592-2.463-.621 4.31-11.185 9.852-8.079-1.231 8.7 14.778 12.428 5.541 9.32 16.01.622 9.851z'
    }, {
      id: 'faridpur',
      geo_code: '3029',
      value: 0,
      d: 'M491.48 1083.424l7.908 1.742.88 6.096 5.272 2.612 7.909-4.354-8.788-5.225 3.515-4.354 13.182 5.225 1.757-5.225 4.394.871 2.636 10.45 7.03.87 14.061-13.932 2.636 14.803 12.303 1.742 2.637-6.967 3.515 6.096 7.909.87 3.515-6.095-10.545-5.225v-20.028l8.787 3.483 1.758-6.095h12.303l.879-6.096h2.636l7.03 1.742 2.636 6.966 25.485 5.225 8.788 10.45h7.03l4.394 10.449 27.242 4.354 15.818 11.32 7.909 13.933.878 16.545h-7.03l-.879 13.061-7.03 6.096 9.667 6.095-4.394 11.32-5.273 16.546-6.151-2.613-9.667-6.095-4.394 12.19-4.393-.87-.88-6.095h-5.272l-6.151-9.58-7.91-.87 6.152 7.837-7.03.87-9.667 6.097-.878-9.58h-7.91l-5.272 4.355-4.394-6.966-7.909-.871-14.94 14.803-20.21.87-1.758 5.226 7.908 4.354-.878 4.353-2.637 4.354-11.424 9.58h-8.787l-4.394-5.226h-13.182l-4.394-7.837 8.788-9.578-11.424-2.613-2.637-9.578v-16.545l-6.151-4.354 5.273-5.225 14.06 10.45-5.273-9.58-9.666-14.803.879-12.19h-2.637l-4.393-7.838-7.03-6.095-21.091-.871-.879-3.483 5.273-4.354h6.151l.879-3.483-9.667-8.708-4.394-14.804z'
    }, {
      id: 'gopalganj',
      geo_code: '3035',
      value: 0,
      d: 'M591.66 1301.992l.879-5.225-12.303-6.966-6.152-15.674-17.575-17.416 12.303.87 7.03-17.415 1.757-9.579-8.787-3.483-10.546 7.837-1.757-1.741 2.636-7.837v-4.354h5.273l15.818-10.45 1.757-7.837-8.787-5.224 1.757-6.096 16.697.87 16.697-13.932 7.909.871 6.151 5.225 5.273-4.354 6.151.87 1.758 9.58 7.909-5.225 9.666-.871-5.272-9.579 5.272.87 7.03 10.45h4.394l2.637 6.967h3.515l3.515 13.061-4.394 14.804-11.424 6.095s3.515 7.837 0 7.837h-11.424l-5.273 19.158 10.545 6.095 4.394-7.837 6.152-3.483 11.424 6.966 4.394 4.354 9.666-8.708 11.424 6.096-4.394 3.483-.878 8.708 11.424 3.483-4.394 1.742v11.32h-9.667l-3.515 7.837-10.545 4.354v7.837l-3.515.87v4.355l-7.03 5.224-3.516 13.933-3.515 5.225-.878 3.483-8.788 1.742h-12.303l-1.758 9.578h-2.636l-9.666-6.095-14.06.87-12.304-6.966-1.757-6.095 7.909-6.967-13.182-8.708.879-14.803z'
    }, {
      id: 'bagerhat',
      geo_code: '4001',
      value: 0,
      d: 'M577.6 1306.346l14.06-5.225-1.758 15.674 14.06 5.225-8.787 8.708 1.758 8.708 12.302 8.708 15.818-5.225 10.546 12.191 1.757 24.382-12.303 5.225-7.03 3.483-1.757 12.191h17.575l3.515 3.483v19.158l7.03 17.415-5.272 8.708 7.03 22.64-14.06-6.965-10.546-5.225-3.515 3.483 19.333 13.933v5.224h-5.272l-8.788 10.45v22.64l-10.546 17.416-3.515 10.45-1.757 20.898 10.545 15.674 3.515 19.158-14.06 19.157 5.272 12.191-1.757 22.64 7.03 19.158v10.45h-7.03v10.449l-24.606 15.674-8.788-6.966-21.09-1.742-12.303 3.483 22.848 17.416-5.273 10.45h-19.333l-14.06-3.484 8.788 17.416-12.303 3.483-14.06-5.224 5.272-12.191-10.545-15.675v-13.932l-1.758-13.933 3.515-27.865-3.515-15.674 8.788-24.382 1.758-29.607-7.03-26.124 21.09-17.416 12.303-8.707 3.515-27.866-14.06-27.865-5.273-5.225v-12.19l-8.788-17.416-3.515-22.64 15.818-26.124 7.03-20.9h10.546l12.302-13.932v-12.19l-7.03-5.226v-10.45l19.333 1.742 5.273-13.932 1.757-17.416z'
    }, {
      id: 'jamalpur',
      geo_code: '4539',
      value: 0,
      d: 'M544.517 556.841l17.4-18.472-1.243-11.083 8.699-9.852 8.7 1.231 7.456-9.851-1.243-12.315-6.214-11.084V464.48l12.428-8.62-6.214-3.695v-8.62l13.67 9.852-3.727 19.704 7.456 7.389-1.243 9.851 8.7 6.158h8.7l6.213-8.62 11.185 2.462 7.457-1.231v18.472l-2.486 2.463-7.456-4.926-3.729 17.24-7.456 7.39 3.728 8.62 9.942-1.231-1.243 6.157-4.97 6.157-1.244 9.852 11.185 8.62-1.242 7.39-8.7 4.925 1.243 4.926h-6.214v6.158l6.214 12.315 1.243 7.388 7.456-1.231 6.214 7.389-2.485 7.389 8.7 3.694 28.583 7.389 2.486 8.62 16.156-13.546 23.612 11.083-1.242 14.778-11.185 12.315-8.7-1.232h-19.884l-11.185 2.463-18.642 22.167-6.214-8.62-2.485-3.695-8.7-3.694v7.389l-9.942 6.157-4.97-3.694-3.73 7.389 3.73 7.388 7.456 4.926-2.486 4.926-3.728-1.231-4.971 11.083h-6.214v8.62l-7.457 2.463v13.547l-6.214 2.463-9.942-1.232v-11.083l-7.457-6.158 9.943-1.231 3.728-25.861-9.942-11.083 7.456-1.232 1.243-8.62-11.185-7.39-4.97-1.23-2.487 4.925-7.456-8.62h3.728l2.486-6.157-1.243-6.158-8.7 1.232-9.942-11.084-1.242-9.852 6.213-1.231-1.242-11.083-4.971-6.158 1.242-6.157-4.97-4.926 4.97-4.926v-11.083h-8.7l7.458-8.62-6.214-3.695 3.728-8.62-2.486-13.547z'
    }, {
      id: 'tangail',
      geo_code: '3093',
      value: 0,
      d: 'M588.015 933.674l9.942-16.01-1.243-14.777-4.971-11.083-7.457-2.463v-4.926l3.729-3.694-3.729-4.926 2.486-14.778 1.243-22.167-17.4-18.472 8.7-11.083-17.399-16.01 11.185-12.314 2.486-14.778-8.7-7.389 8.7-6.157 3.728 2.463 6.214-9.852 11.185 3.694 1.243-6.157 4.97-8.62 3.73-6.158 2.485-6.157 4.971-3.695 6.214-8.62 6.214 1.231v-4.926l-8.7-7.388-1.243-6.158 1.243-6.157 3.729 4.926 12.427-7.39 1.243-7.388 7.457 3.694 9.942 13.547 14.913-22.167 12.428-4.926 7.457 3.694 1.243 11.084h11.184v20.935l9.943 14.778v6.157l-6.214 8.62-1.243 7.39 8.7 19.703 26.098 16.01-6.214 2.462-3.728 8.62L738.39 805.6l1.242 8.62-3.728 6.158 8.7 22.167 8.699 3.694 6.214 2.463 2.485 3.695-9.942 4.925v11.084l-7.457 2.463-6.213 4.926-4.972 13.546 1.243 18.472-8.7 1.232-4.97-4.926-1.243 6.157h-3.728l1.242 8.62-13.67 13.547-9.942 6.157h-3.729l-11.185-7.389-7.456 7.39h-3.729l-7.456-4.927v8.62l-6.214 6.158-2.486-9.852-4.97-2.463-11.186 12.315-7.457 2.463-6.213 6.157-3.729-7.389-4.97 8.62h-7.458l-7.456-6.157-2.486 3.695-4.97-7.39-2.486-14.777z'
    }, {
      id: 'manikganj',
      geo_code: '3056',
      value: 0,
      d: 'M586.772 934.906l-19.885 6.157-12.427 1.232 1.242 12.314 11.185 13.547 14.914 13.546 1.242 7.389 4.972 6.157-1.243 12.315 13.67 18.472 14.914 9.852 14.913 3.694 6.214 7.39h-13.67l9.942 9.851 6.213-3.694 6.214 12.315 22.37 6.157 7.457-6.157v-13.547l16.156-2.463 11.185-4.926 28.584 4.926-7.457-20.935 12.428-13.546-24.855-4.926-8.7-11.083-6.214-13.547-8.7-4.926-6.213-16.009-12.428-6.157 9.942-8.62-23.612-1.232-2.486-9.852-6.214-2.463-12.428 12.315-3.728-2.463-8.7 9.852-3.728-6.158-4.97 11.084-7.458-2.463-6.213-4.926-3.729 4.926-4.97-7.39-3.73-16.008z'
    }, {
      id: 'dhaka',
      geo_code: '3026',
      value: 0,
      d: 'M667.552 1071.6l6.214-7.389v-12.315l21.127-2.463 7.457-4.925 27.341 6.157-6.214-22.167 12.428-11.083-21.127-6.158-6.214-1.231-12.428-23.398-9.942-4.926-3.728-16.01-13.67-8.62 9.941-7.389-21.127-2.463 1.243-6.157v-7.389l9.942 7.39 11.185-8.621 14.913 7.389 11.185-4.926 7.457 12.314 9.942-4.925 9.942-2.463 3.729 6.157 6.214-18.472 11.185 17.24-9.943 8.62 8.7 2.464 18.642 2.463 1.242 23.398 9.943-2.463 6.213 6.157h8.7l6.214-4.926h6.214l1.242 9.852v8.62l-2.485 7.39 11.185 32.018 4.971 4.926-4.971 2.463-21.127 9.852 8.7 14.778-3.73 13.546-11.184-9.852-3.729 6.157-3.728 16.01-8.7-2.463 4.972-14.778-11.185-6.158-6.214-7.388-18.642-3.695-7.456 11.083-1.243 6.158-1.243 17.24-6.214 7.39-8.7-4.926-1.242 9.851-3.728 6.158-12.428-6.158-1.243-11.083-3.728-12.315-9.942-6.157-21.128-7.389z'
    }, {
      id: 'madaripur',
      geo_code: '3054',
      value: 0,
      d: 'M699.864 1134.406l16.157 1.23 9.942 8.621 11.185 4.926 24.855 7.39-4.97 8.62-17.4 28.323-16.156 11.084 3.729 22.167 14.913 11.083 7.457 17.24 12.427 8.62-13.67 18.473 9.942 8.62 3.728 7.39-6.214 4.925h-13.67l-14.913-3.694 1.242-16.01 1.243-14.777-6.214-2.463-3.728 6.157h-16.156l-9.942-6.157v-4.926l6.213-2.463-11.184-7.389-9.943 8.62-12.428-9.851h-7.456l-7.457 9.851-11.185-7.389 7.457-18.472 14.913 1.232-2.485-7.389 11.185-6.157 3.728-16.01-6.214-11.083 6.214-12.315 17.399 7.389 6.214-25.861-4.971-9.852 6.213-4.926v-14.777z'
    }, {
      id: 'shariatpur',
      geo_code: '3086',
      value: 0,
      d: 'M821.657 1262.48l-9.943 1.445-6.213 11.565 4.97 10.12 13.671-1.446 9.942 11.565 4.971-7.228-2.485-13.01-4.971-8.675-9.942-4.337zm-20.849 21.226l-17.575 5.224-10.545 6.967-3.516 8.708-12-9.007-9.09-11.892 5.273-10.45 7.03-10.45-10.546-10.449-8.787-15.674-12.303-8.708-5.273-22.64 15.818-12.191 12.303-22.64 10.545-15.675 17.576 1.742 15.818 12.19 7.03 12.192h26.363l5.273 12.19 1.758 12.192 5.272 19.157-7.03 15.674-10.332 7.9 6.729 10.536-22.76 5.946-7.03 19.158z'
    }, {
      id: 'gazipur',
      geo_code: '3033',
      value: 0,
      d: 'M697.379 937.369l19.884-17.241-2.485-9.852h4.97v-7.389l7.458 7.39 7.456-1.232-1.243-20.936 3.729-13.546 17.399-7.389-2.486-11.083 11.185-4.926-3.728-3.694 7.456-2.463 8.7-1.232 3.728-7.389 7.457 8.62 7.457-1.23 4.97 3.694 3.729-20.936 12.428-1.231 3.728 4.926 14.913 6.157v6.158l9.943 9.852h11.185l2.485-3.695h9.942l13.67 8.62 7.458 3.695-7.457 4.926 1.243 11.083 4.97 9.852-3.727 8.62-1.243 7.39 7.456 7.388-13.67 2.463-4.971-4.926-3.729 3.695 4.971 2.463 2.486 23.398-6.214 14.777-6.214 1.232 3.729 6.157-7.457 12.315-9.942 7.389-6.214-4.926-12.428-14.778-1.243 6.158-7.456-1.232-9.943 20.935-6.213-4.926-4.972 3.695-9.942 2.463-7.457-7.39-9.942 2.464v-24.63H755.79l-9.942-3.694 8.7-9.852-6.214-9.852-3.729-1.231-7.456 13.546-3.729-7.389-9.942 4.926-8.7 4.926-17.398-11.083z'
    }, {
      id: 'sherpur',
      geo_code: '4589',
      value: 0,
      d: 'M681.223 644.276l-1.243-8.62-19.884-4.926-17.4-6.157 2.486-7.39-6.214-7.388-6.213 1.231-1.243-7.388-6.214-8.62-3.728-9.853 8.699 1.232v-6.158l7.457-4.925 1.242-6.158-8.699-7.389-2.486-8.62 6.214-7.389 1.243-9.852-9.942 1.232-3.728-7.39 9.942-7.388 2.485-17.24 4.971 6.157 4.972-4.926v-18.473l8.699 7.39 12.428 7.388 6.214 3.695 16.156 6.157 13.67 3.694 18.642 2.463 13.67 6.158h8.7l3.728 6.157v11.084l1.243 13.546-2.486 8.62 14.914 7.39-4.971 8.62-12.428-2.463-8.7 12.314 7.457 6.158-4.971 7.389 3.728 9.851 8.7 4.926-4.971 2.463-7.457-2.463 1.243 6.158 6.214 4.926-6.214 12.314-16.156-1.231-9.942-4.926-13.671-6.157-16.156 14.777z'
    }, {
      id: 'mymensingh',
      geo_code: '4561',
      value: 0,
      d: 'M755.79 847.47l-11.186-4.925-9.942-20.935 4.971-4.926v-12.315l-12.427-18.472 2.485-8.62 8.7-2.464-18.642-9.852-7.457-7.388-9.942-17.241 1.243-7.389 7.457-8.62v-6.158l-11.186-16.009 1.243-20.935-11.185-1.232-3.728-9.852 12.428-2.462 11.185 2.462 11.185-13.546v-12.315l6.214-3.694 8.699 2.463 8.7-11.083-8.7-6.158v-7.389l7.457 2.463 7.456-1.231-9.942-4.926-4.971-11.083 4.971-7.39-6.214-6.157 8.7-12.315 12.427 4.926 4.972-9.851-9.943-3.695-4.97-6.157V532.21l-1.244-4.925 6.214-1.232 6.214 4.926h11.185l3.729 7.39 26.098 4.925 12.428-4.926 14.913-6.157 16.156 2.463 6.214-3.695 9.942 4.926 8.7-7.389 6.213 3.695-2.485 6.157-6.214 17.24-1.243 9.853-6.214 4.926 9.943 11.083-1.243 7.389-8.7 1.231-4.97 7.39-2.486 9.851-4.971 1.231-4.972-13.546-3.728 4.926-7.456-2.463-3.729 2.463 9.942 7.389 2.486 9.852-2.486 7.389h2.486l6.214 12.315h8.7l-1.244 13.546 6.214 4.926-3.728 4.926h8.7l8.699 7.389 12.428 2.462 4.97-3.694 11.186 3.694-2.486 7.39-6.214-1.232 2.486 8.62 4.971 2.463 2.486 2.463-6.214 7.389-1.243 12.315 9.942 8.62 8.7 4.926 2.485 16.01 7.457-4.927 1.243 4.926 9.942 6.158 2.485 4.926-7.456 12.314-8.7 8.62-8.7-3.694-4.97-8.62-7.457 14.778-4.971-9.852-7.457 13.546-9.942 1.232-8.7-7.39h-11.184l-3.729 9.853 11.185 8.62 12.428 7.389-1.243 16.01-6.214 4.925-1.242 11.083 6.213 13.547 3.729 7.389-8.7-2.463-11.185 4.926h-12.427l-9.943-7.39 1.243-7.388-17.399-6.158-1.243-4.926-12.427-1.231-4.971 19.704-4.971-2.463-6.214 2.463-7.457-8.62-3.728 7.388-21.128 3.695z'
    }, {
      id: 'kishoreganj',
      geo_code: '3048',
      value: 0,
      d: 'M887.524 862.248l-13.67-12.314-3.73-13.547-2.485-7.389-1.242-9.851 8.699-4.926 1.243-16.01-24.856-17.24 3.729-4.926v-6.158l9.942 1.232 9.942 8.62 8.7-1.231 8.699-12.315 6.214 6.157 4.97-12.314 9.943 8.62 11.185-4.926 8.7-12.315 6.213-9.852 27.342-4.926-17.4 2.463 13.671-2.463h16.156l8.7 2.463 12.427-8.62 12.428 2.463 4.971 8.62 13.67-8.62 7.458-6.157h13.67l-2.485 9.851 11.184 12.315v8.62l-3.728 6.158-1.243 3.694-17.399 9.852 9.943 2.463 2.485-3.694 8.7 2.463 4.97 9.852-1.242 6.157-8.7 4.926 12.428 8.62 2.486 7.39-8.7 1.23-3.728 4.927 6.214 4.925v7.389l-8.7 2.463-14.913 1.232-3.728 6.157 7.457 3.695 2.485 4.926-6.214 3.694-14.913 3.694-14.913 3.695-3.729 9.852-16.156-1.232-12.427 12.315v3.694l7.456 8.62 9.942 2.464 2.486 8.62-2.486 6.158-6.214 4.925s7.457 3.695-1.242 6.158c-8.7 2.463-11.185 3.694-11.185 3.694l-6.214-6.157-3.728-8.62-11.186 1.231-7.456-8.62h-9.942l-1.243-9.852 7.457-6.158-14.914-3.694-3.728-9.852-8.7-1.231-6.213-12.315-7.457-7.39-3.728 1.232-2.486 2.463-9.942 2.463z'
    }, {
      id: 'netrokona',
      geo_code: '4572',
      value: 0,
      d: 'M933.507 746.49l-9.943-3.695-1.242-8.62-8.7 3.694-2.485-12.315-11.185-6.157-6.214-8.62-1.243-12.316 8.7-8.62-11.186-6.157v-7.39l4.971 1.232 4.972-7.389-13.67-4.925-2.486 4.925h-12.428l-8.7-8.62h-11.185l4.971-6.157-4.97-4.926v-12.315l-8.7-1.232-4.971-13.546h-3.729l1.243-4.926-1.243-11.083-11.185-7.389h13.671l2.485-6.157 4.972 14.777h6.214l2.485-11.083 3.728-6.157h6.214l4.971-9.852-11.185-11.083 7.457-3.695-2.485-7.389 4.97-8.62 6.214-14.778 9.943 1.232 3.728 3.694 21.127-13.546 7.457 11.083 32.312 1.232 3.728-3.695 9.943 4.926 16.156-13.546 1.243 6.157-3.729 1.232-1.243 23.398 4.972 4.926-2.486 2.463-7.457 1.231-2.485 6.158 9.942 2.462-4.971 6.158-1.243 12.315 6.214 11.083v17.24l14.913 3.695 9.942 9.852 23.613 1.231 6.214 9.852v11.084l4.971 9.851 4.971-9.851 6.214-1.232 4.971 8.62-3.728 9.852-8.7 2.463v12.315l6.214 3.695 7.457 1.231 9.942 3.694 4.971 6.158 3.729 4.926-7.457 8.62-9.942 7.389-13.67 1.232-21.128 13.546-3.728-6.158-14.914-3.694-11.185 7.389-8.699-1.232-17.399 1.232H948.42l-14.913 8.62z'
    }, {
      id: 'sunamganj',
      geo_code: '6090',
      value: 0,
      d: 'M1052.813 736.637v-9.851l17.399-14.778-7.457-12.315-16.156-4.926-8.7-4.926 2.486-11.083 7.457-3.695 3.728-8.62-4.97-8.62-3.73-2.463-8.698 12.314-4.972-8.62 1.243-9.852-7.457-11.083-21.127-2.463-8.7-11.083-17.398-2.463V606.1l-4.971-11.083v-13.546l6.214-6.158-12.428-3.694 2.486-4.926 12.427-1.231-6.214-7.39 2.486-23.397 2.486-6.158 19.884-3.694h13.67l17.4 3.694 33.554-6.157 31.07 16.01 4.97-6.158 14.914 4.926 16.156 9.851h11.185l4.971-4.925 8.7 2.462 18.642-9.851v9.851l6.213 1.232 3.729 7.389 18.641-4.926 7.457 1.231-2.486 7.39 9.943 8.62 1.242 11.083-6.214 7.389v3.694l13.671 13.547-1.243 4.925-3.728 1.232v3.694l7.457 3.695v9.852l-7.457 14.777v3.695l7.457 9.852-12.428 2.463-6.214 7.389 7.457 16.009-7.457 2.463 7.457 11.083-11.185 22.167-18.642-2.463-1.243 6.157 3.729 3.695-4.971 3.694-4.972-6.157h-9.942l-16.156-3.695-4.971 4.926 4.971 4.926-8.7 7.389-17.398-13.546-1.243-7.39-9.942-1.23-11.185 9.851-11.185 6.158 1.243 9.851-2.486 6.158-7.457-4.926-11.185 9.852-9.942 2.463-11.185-13.547z'
    }, {
      id: 'sylhet',
      geo_code: '6091',
      value: 0,
      d: 'M1204.432 714.47l13.67-23.397-8.699-11.084 7.457-1.231-6.214-17.24 8.7-7.39h9.941l-9.942-12.315 8.7-14.777 1.242-12.315-9.942-6.158 6.214-6.157-12.428-14.778v-4.926l4.971-4.926v-12.314l-9.942-8.62 1.243-6.158-7.457-6.158 3.729-6.157h3.728l11.185 3.695 7.457-8.62 37.283 1.23 22.37-3.694 8.7 7.39 7.456-9.853h19.884l13.671 4.926 11.185 13.546 4.971-1.231 4.971 3.694 4.971-2.463 8.7 4.926v6.158l6.214 1.231 14.913 7.39 9.942 2.462 3.728-3.694h4.972v9.851l13.67 3.695 12.428 7.389-2.486 7.389 4.971 11.083 11.185 3.694-4.97 6.158 11.184 1.231 4.971 7.39-1.242 18.471h-4.971l-4.972-2.463-7.456 7.39-14.914-1.232-21.127-3.695-12.428 3.695-9.942 6.157 8.7 9.852-1.243 8.62-11.185 20.936h-8.7l-18.641 2.463-4.971-9.852h-6.214l-1.243 8.62-4.971 16.01-12.428 9.851-6.214 2.463-14.913 3.695-6.214-4.926-7.457 4.926-8.699-1.232-3.728-6.157-8.7 4.926-6.214-6.158-7.456 8.62-9.942 13.547-19.885 1.231-3.728-8.62-12.428-1.232 4.971-7.388-9.942-7.39z'
    }, {
      id: 'habiganj',
      geo_code: '6036',
      value: 0,
      d: 'M1040.385 856.09l7.457-2.462-4.971-7.389-4.971-2.463 2.485-7.389 14.914 1.232 8.7-3.695v-8.62l-4.972-6.157 8.7-2.463-1.243-7.39-8.7-9.851 4.971-6.158 1.243-8.62-2.486-4.926-6.213-3.694-7.457 3.694-8.7-3.694 17.4-6.158 6.213-17.24 12.428-8.62 8.7-8.621 8.699 9.852 3.728-7.39-3.728-8.62 8.7-12.314 16.155-4.926h6.214l8.7 7.389 9.942 14.777 6.214-9.851v-3.695l6.214-4.926 4.97 2.463 19.885-2.463 4.971 11.084 6.214-2.463-4.97-6.158v-6.157l16.155 2.463 14.914 3.694-7.457 11.083 12.428 1.232 2.485 6.157-8.7 9.852-8.699-6.157-7.456-1.232-3.729 2.463 7.457 12.315 7.457 4.926h-7.457l-8.7 6.157-2.485 19.704-2.485 35.713 7.456 20.935-7.456 20.935-4.972 3.695v3.694l6.214 4.926v4.926l-4.97 2.463v25.861l-16.157 9.852-17.399 2.463-11.185-8.62h-13.67l-12.428-6.158h-11.185l-2.486 7.389 7.457 9.852-2.485 8.62-6.214 8.62-3.729 12.315-18.641-4.926v-8.62l3.728-2.463-2.486-9.852-9.942-20.935 12.428-3.694-9.942-4.926v-14.778l13.67 3.694v-7.388l-11.185-4.926 17.4-12.315v-7.389l-11.186-2.463-11.185 19.704-9.942-7.39-18.642-7.388z'
    }, {
      id: 'moulovibazar',
      geo_code: '6058',
      value: 0,
      d: 'M1188.276 864.711l8.7-23.398-8.7-19.704 6.214-56.648 7.456-4.926 13.67 1.232-9.941-4.926-12.428-14.778 6.214-3.694 8.7 1.231 8.699 8.62 7.456-9.851 18.642 1.231 19.884-24.63 6.214 6.158 7.457-3.694 3.728 6.157 12.428 1.232 4.971-4.926 4.971 4.926 17.4-3.695 17.398-9.852 6.214-25.86h6.214l3.728 9.851 17.399-3.694h12.428l-2.486 8.62-3.728 8.62-8.7 16.01-3.728 22.166-18.642 12.315-2.485 22.167 6.214 8.62v7.389l-8.7 17.24h-16.156l-24.855-3.694-9.943 2.463 9.943 8.62 2.485 9.852-6.214 2.463-2.485-6.157-1.243-4.926-7.457-1.232-8.7 8.62 4.972 4.927v27.092l-6.214 7.39-2.485 24.629h-8.7l-6.214-13.546-9.942-8.62 4.971-4.927-9.942 2.463h-11.185l-3.728-7.389-7.457 1.232h1.243v23.398l4.97 7.389-6.213 4.926-6.214-2.463-3.728-6.158-11.185-7.389-11.185-18.472z'
    }, {
      id: 'narshingdi',
      geo_code: '3068',
      value: 0,
      d: 'M848.998 980.47l12.428-11.083 4.97-7.389-4.97-8.62h7.456l4.971-13.546v-13.547l-2.485-12.315-6.214-3.694 4.971-3.694 6.214 7.388 11.185-2.462h3.728l-7.456-8.62 3.728-16.01-3.728-8.62v-12.315l4.97-4.926 7.457 1.231 8.7-7.389 11.185 18.473 8.7 3.694 6.213 9.852 12.428 4.926 1.243 3.694-7.457 3.695 6.214 7.389-8.7 2.463 13.67-1.232 7.458 8.62 11.185-3.694 2.485 12.315 7.457 3.694-2.486 3.695-7.456 12.314 3.728 11.084-6.214 2.463-7.457 19.703-4.97 3.695-2.486 6.157-1.243 2.463-16.156-1.231-8.7 3.694h-7.456v-2.463l-8.7-1.231-3.728 2.463-1.243 16.009-7.457 12.315-11.184-9.852-1.243-6.158-2.486 8.62-9.942-2.462-3.728-3.695 7.456-3.694-3.728-8.62-8.7 3.694-2.485 6.157-3.728-7.388 8.7-12.315-14.914-3.695z'
    }, {
      id: 'narayanganj',
      geo_code: '3067',
      value: 0,
      d: 'M806.743 1070.369l-11.185-17.241 28.584-9.852-14.913-35.713 3.728-8.62v-11.084l8.7-23.398 7.456 2.463 1.243-6.157 14.913 18.472 17.4 7.389-8.7 8.62 2.485 7.389 13.671-8.62 4.971 6.157-8.7 8.62 12.428 3.695 14.914 4.926-1.243 4.926-3.728 11.083-8.7 7.389-2.485 11.083-8.7-2.463h-6.214l-2.485 8.62v12.315l-16.156 7.39-6.214 6.157-6.214 7.389-9.942-1.232v-7.389l-8.7 6.158-7.456-6.158 1.242-12.315z'
    }, {
      id: 'brahmanbaria',
      geo_code: '2012',
      value: 0,
      d: 'M913.622 1053.128l-14.913-6.158v-3.694l-12.428-9.852 3.728-9.852 11.185-13.546 1.243-17.24 8.7-4.927 3.728 4.926h11.185l3.728-3.694 21.127 2.463v-8.62l7.457-2.464 4.971-20.935 9.942-2.463-6.213-11.083 11.185-16.01 13.67-6.157-1.243-4.926 7.457-7.388-2.486-12.315-7.456-1.232-7.457-13.546 9.942-12.315 17.4 2.463 6.213-9.852 21.127-7.389 21.127 6.158 11.186 7.389 13.67-19.704 9.942 2.463v7.389l-16.156 11.083 9.942 6.158v6.157l-12.427-3.694-1.243 14.777 7.456 4.926-8.699 2.463 6.214 19.704 6.214 8.62v3.695l-4.971 2.463V950.915l-13.67 6.157 4.97 12.315-9.942 2.463-7.457 14.778 7.457 8.62 1.243 6.158-6.214 4.925-2.486 9.852 4.971 9.852-7.456 9.852-4.971-3.694h-8.7l-6.214 4.925 1.243 14.778 6.214 2.463 3.728-4.926 3.729 2.463v16.01h-4.971l-8.7-7.39-2.485 3.695-9.943-9.852v-9.852h-4.97l-1.243-4.926-9.943-2.462 6.214-4.926-13.67-11.084-19.885-1.231-8.7 7.389h-14.913l-6.213 1.231 2.485 9.852-11.185 2.463-13.67-9.852-7.457 4.926 1.243 3.694 3.728 3.695-6.214 9.852z'
    }, {
      id: 'munshiganj',
      geo_code: '3059',
      value: 0,
      d: 'M837.278 1095.18l2.636 5.66 4.394 7.402 2.197 13.497 17.136-7.402 16.257-4.354-7.47-13.932-7.908-13.497-15.818.87-11.424 11.756zm-54.045 52.683l31.636 6.966-3.515 17.416-28.121-24.382zm-68.545-29.607l5.273-19.157 10.545 5.224 7.03-8.708v-15.674l8.788-19.157 17.576 5.225 17.575 12.19-5.272 17.416 10.545 1.742 5.273-19.157 21.09 13.932 17.576 3.483 3.515 8.708 7.03 5.225v12.191l-1.757 10.45-8.788 13.932-3.515 13.933-12.303-13.933H792.02l-17.576-5.225h-14.06l-15.818-3.483-29.879-19.157z'
    }, {
      id: 'comilla',
      geo_code: '2019',
      value: 0,
      d: 'M887.807 1096.922l10.985-20.029 3.954-6.095-5.272-8.708 1.757-14.803 14.06 6.095 6.152-9.143-3.075-5.225-.88-3.918 5.713-3.484 14.5 9.58 10.984-3.049-1.318-9.143 6.59-1.742 14.5.436 7.91-7.402 18.893 1.306-3.075-.87 10.984 6.095 6.591 5.66-5.272 4.354 9.227 3.048 1.757 4.354h4.833l-.878 9.579 10.106 9.578 2.197 4.354-.44 11.32 3.076 7.402 10.106 10.45-.44 6.966 6.152 2.177-3.076 2.612.44 5.225 12.742 10.014 6.59 21.334 6.591 21.335 10.985 4.354-11.424 8.272.879 4.354 8.788 4.79-3.516 3.047-.439 3.919 3.076 6.53 2.636 3.484-.879 4.354 1.758 33.525 4.394 5.66 4.833 9.579-1.318 10.885-9.667 5.66-12.303-6.531-10.545.435-15.818-2.177-7.909-5.224-7.909-.436-9.227 5.225-3.076-2.177h-8.787l-11.424-5.66-5.712-10.014-.44.87-7.03-.435-4.833-6.966 8.348-2.177 5.273-7.402-.88-15.239 5.713-9.578-6.59-6.096-1.319-9.578-7.91-9.58-3.514-7.836-13.182-9.579-1.757-8.708-9.227-6.095-3.516-16.98-17.575-4.79-12.742 10.885-4.834-3.048-4.833 10.014h-5.273l-11.863-6.53v-8.273h-.44l-5.711-6.096-8.349-8.272 7.03-3.919-.439-8.272 4.833-7.837zm-18.454-28.736l-1.318 11.755 7.47 9.579 2.196 5.66 4.834-.87 6.59-10.015 7.47-12.626-3.515-9.144.44-10.449-7.106-8.409-7.394 14.07-11.864-3.049-.44 9.144 2.637 4.354z'
    }, {
      id: 'chandpur',
      geo_code: '2013',
      value: 0,
      d: 'M855.212 1289.572l-12.428-20.935-4.971-12.315 6.214-17.24 8.7-14.779 11.184-12.314 3.728-12.315-4.97-9.852v-8.62l-8.7-4.926-8.7-2.463v-8.62l-7.456-3.695 6.214-12.315 2.485-12.315 1.243-9.852 12.428-3.694 8.7-3.694 7.456-1.232 13.67 12.315 1.243 8.62 13.67 6.158 6.215-8.62 4.97 4.925 12.428-16.009 21.128 6.157 2.485 16.01 11.185 7.389 1.243 11.083 12.428 11.083 11.185 14.778-1.243 8.62 9.942 8.62-7.457 7.39 1.243 16.009-3.728 8.62h-8.7l-4.97 2.463-7.457-4.926-13.67 1.232-6.215-9.852h-6.214l-7.456 3.694-3.729 12.315-2.485 8.62-17.399 6.158h-6.214l-12.428 7.389h-2.485l-3.728-7.39h-3.729l-3.728 4.927-1.243 12.315v6.157l-7.457 8.62-12.427-3.694z'
    }, {
      id: 'laxmipur',
      geo_code: '2051',
      value: 0,
      d: 'M865.154 1292.035l3.728 12.315 16.156 6.157 2.486 9.852 4.97 9.852 16.157 13.546 6.214 23.398 11.185 25.861 4.971 19.704 22.37 22.167 7.457 13.546 17.399 6.157 19.884-14.778-3.728-17.24-13.67-22.167 1.242-7.389-19.885-29.555-1.242-19.704 12.427-6.157 3.729-14.778v-20.935l-12.428-8.62-14.913-6.158-1.243-4.926 9.942-3.694-4.971-8.62 6.214 1.23 12.428-28.323-7.457-3.695h-12.428l-4.97-9.852-13.671 2.463-7.457 24.63-19.885 6.157-2.485-2.463-16.156 8.62-4.971-7.388h-3.729l-3.728 3.694v23.398l-9.942 3.695z'
    }, {
      id: 'perojpur',
      geo_code: '1079',
      value: 0,
      d: 'M625.298 1586.359l-2.486-18.473-7.456-9.851 1.243-18.473 9.942-17.24-2.486-11.084v-17.24l8.7-9.852h4.97l-6.213-6.158-14.913-23.398 17.398 9.852 11.185 9.852-1.242-11.083-4.972-13.547 6.214-8.62-6.214-17.24v-18.473l-4.97-4.926-17.4-2.463-1.242-13.546 19.884-7.389v-20.935l-1.243-4.926 2.486-3.694 1.243-8.62 18.641 2.462 6.214-8.62h1.243l8.7 11.083-1.243 12.315h6.214l7.456 11.083h7.457l2.485 7.389 18.642 3.694 8.7 2.463-1.243 6.158-4.971 1.231v6.158l-8.7 6.157-2.485 9.852-13.67 8.62 7.456 7.39v9.851l-12.428 2.463v24.63l19.884 3.694 2.486 2.463-2.486 6.157-12.427 12.315-7.457-6.157-6.214 3.694-7.457-3.694 1.243 14.778-7.456 11.083 1.242 9.852 7.457-3.695 2.486 14.778-3.729 7.389-3.728 17.24-8.7 16.01-8.699 1.231-14.913 16.01h-12.428z'
    }, {
      id: 'jhalokati',
      geo_code: '1042',
      value: 0,
      d: 'M675.009 1513.701l-6.214 4.926-2.485-9.852 8.699-11.083-3.728-18.472 7.456 7.389 8.7-4.926 4.97 4.926 14.914-9.852 1.243-7.389-19.884-6.157-1.243-23.398 12.428-3.695v-8.62l-8.7-9.852 13.67-7.39 1.243-9.85 11.185-6.158-1.242-3.695 6.213-2.463 1.243-6.157-8.7-4.926 8.7-7.389 4.971-2.463 2.486 7.389h7.457l4.97-2.463 9.943 11.083-3.728 4.926-1.243 6.158 2.485 3.694h7.457l3.728 6.158 21.128 3.694 1.242 4.926-6.214 1.231-3.728 6.158 13.67 2.463 1.243 6.157-11.185 2.463s2.486 7.389-2.485 7.389-9.942-4.926-9.942-4.926l-3.729 4.926-7.456-1.231-3.729 7.388-2.485 7.39-8.7 3.694-13.67 8.62-8.7 6.157-1.242 8.62-2.486 14.779-9.942 6.157-4.971 11.083-6.214 7.39-17.399-4.927z'
    }, {
      id: 'barisal',
      geo_code: '1006',
      value: 0,
      d: 'M717.263 1468.137l16.157-8.62 16.156-7.39 4.97-13.546h7.457l2.486-3.694 14.913 3.694 2.486-8.62h8.7l-1.244-7.39-14.913-2.462 3.728-7.39 6.214 1.232-1.242-6.157-19.885-2.463-4.971-6.157-9.942-1.232 1.243-7.389 4.97-3.694-11.184-13.546h-8.7l-4.97-6.158-16.157 9.852-19.884-3.694-1.243-4.926h-4.971l-7.457-12.315h-8.7l1.243-12.315-7.456-9.852v-14.778l11.185-12.314 1.243-6.158 11.185-6.157 2.485-6.158 11.185-1.231v-14.778l14.913 1.232 4.971-7.39 6.214 2.464-1.242 29.555 17.398 7.39 9.943-2.464 6.214-3.694 7.456 4.926 3.729-8.62 14.913-7.39 17.399 3.695 17.399 9.852 12.427 11.083 14.914 6.157 14.913 6.158 11.185 9.852 7.457 17.24-7.457 8.62-12.428 6.158-21.127 14.778-11.185 11.083-1.243 8.62-14.913 2.464 8.7 13.546-3.729 9.852 1.243 11.083 4.971 7.389-14.913 1.231-13.67 7.39v8.62l-2.486 8.62-8.7-2.463-7.457-1.232-16.156-7.388-8.699 4.926-1.243 6.157-14.913 6.157-1.243-11.083-18.642 1.232z'
    }, {
      id: 'barguna',
      geo_code: '1004',
      value: 0,
      d: 'M719.961 1466.571l17.576 1.742-1.758 8.707 17.576-5.224v-3.483l10.545-6.967 12.303 5.225-3.515 13.933-12.303 1.741-12.303 17.416 5.273 13.933-3.516 10.449-17.575 3.483-7.03 12.191-1.758 13.933 5.273 6.966 15.818-15.674 8.788-3.483 7.03 3.483 29.878 1.742 1.758 12.19-17.576 17.416-5.272 10.45 12.302 6.966v10.45l-12.302 20.899-10.546 12.19v26.124l-17.575 20.899 1.757 19.157-15.818 5.225-14.06 8.708-15.818-3.483-12.303-10.45-22.848-5.224 5.273-8.708-7.03-8.708s-7.03-19.157 1.757-19.157c8.788 0 21.09-6.967 21.09-6.967l-12.302-5.224-12.303-1.742 1.757-17.416 8.788-10.45-5.273-8.707-5.272 12.19-8.788 1.743-1.757 12.19 5.272 5.225-8.788 10.45-14.06-22.64-3.515-17.417v-24.382h0l17.575-8.707 8.788-10.45 7.03 3.483 12.303-26.123 5.273-13.933-3.515-15.674 17.575 1.741 12.303-15.674 10.545-6.966 1.758-13.933 3.515-15.674z'
    }, {
      id: 'patuakhali',
      geo_code: '1078',
      value: 0,
      d: 'M835.96 1658.144l-15.818 15.675-5.273 15.674 14.06 6.966 10.546-12.191-3.515-12.191v-13.933zm-19.333-29.606l15.817-10.45 5.273 10.45-1.757 12.19-10.546 12.192-8.787 8.707v-33.089zm-35.152-8.708l17.576 8.708 8.788 8.707 1.757 13.933-5.272 15.674-8.788 12.191-19.333-8.708-5.273 12.191-5.273 17.416-12.302 5.225 3.515-19.157 7.03-13.933v-15.674l7.03-13.933 10.545-22.64zm-5.272-8.708l3.515-17.416-12.303-6.966 19.333-20.9 5.273-5.224-3.515-13.933-26.364 1.742-8.787-5.225-24.606 13.933-3.515-8.708 1.757-17.416 22.848-5.224 3.516-10.45-7.03-15.674 14.06-15.674 10.545-1.742 5.273-13.932 15.818 1.741 5.272-15.674 24.606-6.966 1.758-12.191 12.303 12.19 10.545 13.933-1.758 17.416 14.06 5.225 8.788 27.865-12.302 6.966v15.674l-10.546 20.9-7.03 19.157-3.515 10.45 3.515 24.381-31.636 10.45-29.878-8.708z'
    }, {
      id: 'bhola',
      geo_code: '1009',
      value: 0,
      d: 'M878.14 1644.212l-5.272 13.932h17.576l-12.303-13.932zm87.878-128.877l-7.03 22.64-8.788 26.124v24.382l17.576 19.158v-45.281l8.788-22.64 1.757-12.192-12.303-12.19zm-124.786 81.854l15.818-17.416 14.06-20.898 1.758-31.349-1.757-22.64-7.03-19.158-7.03-19.157v-19.157l-12.304-10.45-12.303-13.932 1.758-15.675 10.545-17.415 15.818-8.708 7.03-8.708 24.606-1.742 5.273 19.158 10.545 38.314 17.576 20.9 12.303 15.673 7.03 10.45-1.758 19.157-5.272 5.225v22.64l-7.03 15.675-3.516 12.19-3.515 15.675V1593.706l-12.303 8.708-7.03 13.933-21.09 6.966-1.758 10.45-10.545 5.224-14.06 8.708s-5.274-1.742-5.274-8.708-5.272-15.674-5.272-15.674l8.788-12.191-14.06-13.933zm10.545 73.146l8.788-12.19 10.546 13.932-7.03 6.966-12.304-8.708z'
    }, {
      id: 'noakhali',
      geo_code: '2075',
      value: 0,
      d: 'M983.218 1466.905l32.312 2.463 9.942 22.167 2.486 19.703 9.942 12.315-2.486 27.093-4.97 27.092-17.4 12.315-14.913 17.24-7.457-2.462 2.486-24.63 2.485-27.092 2.486-24.63-2.486-24.63-12.427-36.944zm91.965-12.315l-24.855-7.389v-32.018l19.884 9.852 7.457 12.315-2.486 17.24zm-44.74-73.889l32.312 2.463 14.914 12.315-2.486 14.778-22.37-9.852-22.37-19.704zm-42.254 14.778h27.34l12.429 14.778 9.942 17.24-7.457 14.779-17.399 7.388-12.428-2.463-2.485-22.166-9.942-29.556zm-24.856-54.185l9.942-12.315 4.972-19.703-9.943-12.315-17.399-12.315 2.486-12.315 14.913-27.092 19.885 7.388 19.884 17.241 19.885-7.389 12.427 2.463 27.341 7.39 2.486 9.851-2.486 12.315v9.852l-7.456 22.166 22.37-2.463h12.427l-9.942 14.778v12.315l4.971 17.24-14.913-7.388-14.913 4.926-27.341-2.463-14.914-9.852-7.456 9.852s-7.457 7.389-17.4 2.463c-9.941-4.926-27.34-22.167-29.826-24.63z'
    }, {
      id: 'feni',
      geo_code: '2030',
      value: 0,
      d: 'M1090.805 1363.818l-7.03-10.45 1.757-10.449 10.545-19.157-12.303 1.741-15.818-3.483-5.272 5.225 3.515-13.933-1.758-12.19 3.515-10.45-5.272-20.899 19.333 5.225 10.545-8.708 10.545 3.483 7.03-6.966-5.272-15.675-3.515-10.449v-10.45l3.515-13.932 1.758-12.191 15.817 3.483 10.546 17.416 10.545 20.899 3.515 15.674v13.933l12.303 17.415-1.757 12.191 14.06 5.225-19.333 1.742 1.757 19.157h-14.06l-10.545 6.966-5.273 15.674-12.303 17.416v12.191l-7.03-3.483v-8.708l-14.06-3.483z'
    }, {
      id: 'chittagong',
      geo_code: '2015',
      value: 0,
      d: 'M1240.196 1565.84l-10.545-6.965-3.515-20.9-1.758-19.157v-6.966l-12.302-19.157-8.788-24.382-14.06-12.191-10.546-15.675-7.03-13.932v-5.225l-7.03-8.708-8.788-6.966-26.363-19.157 5.272-8.708-12.303-12.191 1.758-10.45 5.273-20.899 17.575-6.966h7.03l1.758-17.416h14.06l12.303 3.483 7.03-8.708 21.091-5.224 10.545 5.224 3.515 10.45-7.03 12.191 8.788 12.191 8.788 17.416 8.788 15.674 7.03 12.191v-13.933h14.06l7.03 5.225v15.674l12.303 1.742 3.515 17.416 1.758 19.157 5.273 13.932-1.758 12.192 12.303 8.707 3.515-8.707 1.758-8.708-5.273-6.967 1.757-15.674 14.06-5.225 14.061 15.675 12.303 29.606 3.515 20.9-12.303 22.64 19.333 13.932-3.515 13.933-1.757 8.708 5.272 20.899 1.758 8.708v8.708l5.273 8.707-3.515 10.45 3.515 17.416 10.545 20.899-5.273 10.45-5.272 6.965 5.272 12.191-12.303 3.484-10.545-3.484 3.515-10.449h-15.818l-10.545 10.45-19.333 3.483-10.545 10.449-17.576 10.45-3.515-13.933 8.788-12.191-14.06-12.191v-15.674l-10.546-13.933-3.515-24.382-8.788-8.708-5.273-27.865zm-151.149-155l10.545 19.158 7.03 10.45v6.966l-3.515 1.741-3.515 17.416 5.273 19.157 15.818 17.416 10.545 5.225v10.45l1.758 3.483h14.06l8.788-10.45 3.515-10.45v-10.449l-3.515-10.45-28.12-47.022-1.759-10.45-36.908-12.19zm-10.545-34.83l15.818 5.224 3.515 12.19-5.273 1.742-14.06-19.157z'
    }, {
      id: 'khagrachari',
      geo_code: '2046',
      value: 0,
      d: 'M1286.455 1402.868l17.399-22.167v-17.24l7.457-24.63 34.797-24.63-9.942-46.796 24.856-12.315-4.971-22.166-12.428-32.019 4.971-19.703-17.399-17.241 24.856-29.556-29.827-66.5-14.913 2.463-17.4-29.555h-7.456l-9.942 9.852 9.942 41.87 4.971 27.093-7.456 9.851v14.778l-14.914-4.926-17.399 14.778-17.398 29.556-7.457 22.166 12.428 22.167 2.184 31.148-3.063 7.96-9.064.3v7.388l-19.884 24.63 14.913 12.315-4.97 9.851 2.485 9.852 14.913 32.019 14.913 19.703 2.486-9.851 17.399 2.463 2.485 14.777 12.428 12.315z'
    }, {
      id: 'coxs_bazar',
      geo_code: '2022',
      value: 0,
      d: 'M1274.027 1695.96l27.341-14.777 12.428-9.852 12.428-2.463 17.399 29.555 19.884 9.852 7.457-2.463 4.971-12.315 12.428 17.241v7.389h-12.428l-2.485 17.24h-22.37l-9.943 12.316 9.942 24.63 19.885 19.703-7.457 12.315 12.428 19.703 9.942 12.315-4.97 17.24h-9.943l-2.486-9.851-17.399 19.704 4.972 22.166 9.942 17.241 2.485 17.24-4.97 12.316 4.97 19.703 17.4 22.167v14.778l2.485 19.703 12.428 39.408 9.942 24.63-2.486 12.314-7.456-7.389-9.943-27.092-12.427-14.778-9.943-17.24-7.456-17.242v-14.777l-42.255-49.26-4.97-39.407v-17.24l-7.457-17.241-14.914-19.704-2.485-9.852 12.427-14.778 2.486-17.24 4.971-14.778 4.971-22.167-2.485-27.092-9.943 22.166-12.427-7.389 9.942 17.241 7.457 19.704-12.428 24.63 2.485 2.462-24.855-2.463 2.485 12.315h-14.913l-2.485-12.315 7.456-22.166 4.971-19.704-12.427-9.852 17.398-66.5zm-34.797-22.166l24.855-4.926 4.971 24.63-7.456 22.166-14.914 24.63 2.486-17.241 2.485-34.482-12.427-14.777zm155.35 446.628c-1.284-5.17.63-7.24-3.911-11.81-6.117-6.155 1.046-6.888 5.867-6.888 1.795 0-1.811 18.334-1.956 18.698z'
    }, {
      id: 'bandarban',
      geo_code: '2003',
      value: 0,
      d: 'M1373.45 1695.96l-9.943 12.315-17.399-7.389-4.97-9.852-14.914-22.166 7.457-9.852h12.427l4.972 9.852 17.398 2.463v-9.852l7.457-19.704-7.457-12.315-4.97-24.63-2.486-12.314-4.971-24.63-4.971-17.24 4.97-24.63 14.914 4.926 14.913-7.389h24.856l14.913 9.852 22.37 12.315 12.428 27.092 12.428 34.482-4.971 9.852 14.913 32.018 14.913 41.87 2.486 12.315-2.486 27.093v17.24l-2.485 19.704 2.485 24.63 7.457 27.092 2.485 27.093 2.486 22.167 12.428 22.166-12.428 4.926-12.428 14.778-7.456-4.926-2.486-12.315-7.457-17.24 2.486-9.852-7.457-2.463-7.456 4.926-12.428 2.462-14.914-4.925-2.485-9.852-9.942-24.63-7.457-4.926-9.942 12.315-4.971 9.852-9.943-2.463-12.427 22.167-7.457 2.462-7.457 9.852 2.486 19.704-7.457 17.24-2.485-24.629-7.457-19.704-2.486-9.851 14.914-17.241 9.942 9.852 7.457-14.778-9.942-19.704-9.943-17.24 4.971-9.852-12.427-12.315-4.971-14.778-7.457-19.704 12.428-12.314h19.884v-14.778h12.428v-7.389l-14.913-17.24z'
    }, {
      id: 'rangamati',
      geo_code: '2084',
      value: 0,
      d: 'M1288.94 1427.498l-4.97-24.63 12.427-14.778 9.943-17.24 2.485-29.556 37.283-27.093-2.485-14.777-4.971-27.093 22.37-17.24-4.971-19.704-7.457-32.019v-17.24l-17.399-24.63 22.37-29.556-9.942-24.63-17.399-44.332 4.971-7.39 19.885-19.703h12.427l7.457 12.315 4.971 19.704 4.971-17.241 4.971-9.852 12.428 4.926-7.457 17.24 4.971 17.241 4.972 12.315 4.97 44.333 12.428 17.241 7.457 14.778-4.97 9.852 7.456 7.389 2.485 9.851-17.399 12.315 2.486 19.704 2.485 17.24 2.486 12.315 9.942 12.315-7.456 39.408 9.942 19.703 19.884 9.852-4.97 12.315 7.456 29.555 14.913 14.778 2.486 19.704 4.97 24.63-7.456 4.925 7.457 24.63 4.97 29.556 4.972 24.63v14.777l4.971 19.704 4.971 19.703v22.167l-12.428-4.926 7.457 27.093 9.942 39.407 7.457 24.63-9.942 17.24-4.971-12.315-7.457-22.166-7.457-24.63-12.427-24.63 2.485-7.388-4.971-19.704-9.942-34.481-9.943-9.852-24.855-17.241-32.312-7.389-22.37 9.852-14.914-12.315-9.942-14.778 7.457-19.703-2.486-19.704-12.427-24.63-14.914-22.166-7.456 2.463-9.942 14.778 7.456 19.703-4.971 9.852-9.942-12.315-4.971-27.092z'
    }]
  }
}];

var Accordion = /*#__PURE__*/styles.styled(function (props) {
  return React.createElement(MuiAccordion, Object.assign({
    disableGutters: true,
    elevation: 0,
    square: true
  }, props));
})(function (_ref) {
  var theme = _ref.theme;
  return {
    border: "1px solid " + theme.palette.divider,
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    }
  };
});
var AccordionSummary = /*#__PURE__*/styles.styled(function (props) {
  return React.createElement(MuiAccordionSummary, Object.assign({
    expandIcon: React.createElement(ArrowForwardIosSharpIcon, {
      sx: {
        fontSize: '0.9rem'
      }
    })
  }, props));
})(function (_ref2) {
  var theme = _ref2.theme;
  return {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1)
    }
  };
});
var AccordionDetails = /*#__PURE__*/styles.styled(MuiAccordionDetails)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
  };
});
function CustomizedAccordions(_ref4) {
  var title = _ref4.title,
      children = _ref4.children;

  var _useUiConfigChangeRed = useUiConfigChangeReducer(),
      accordionOpen = _useUiConfigChangeRed.accordionOpen,
      handleAccordionOpen = _useUiConfigChangeRed.handleAccordionOpen;

  return React.createElement("div", null, React.createElement(Accordion, {
    expanded: accordionOpen === title,
    onChange: handleAccordionOpen(title)
  }, React.createElement(AccordionSummary, {
    "aria-controls": "panel1d-content",
    id: "panel1d-header"
  }, React.createElement(Typography, {
    textTransform: "capitalize"
  }, title)), React.createElement(AccordionDetails, null, children)));
}

var CHANGE_FILTERS = '@filter/change';

function useFilters(prop) {
  var filters = reactRedux.useSelector(function (state) {
    return state.filters;
  });
  var dispatch = reactRedux.useDispatch();

  var handleChange = function handleChange(value) {
    dispatch({
      type: CHANGE_FILTERS,
      payload: {
        fieldName: prop.title,
        value: value
      }
    });
  };

  return {
    filters: filters,
    handleChange: handleChange
  };
}

function DateField(prop) {
  var _useFilters = useFilters(prop),
      filters = _useFilters.filters,
      handleChange = _useFilters.handleChange;

  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, React__default.createElement(material.InputLabel, null, prop.title), React__default.createElement(LocalizationProvider, {
    dateAdapter: AdapterDateFns
  }, React__default.createElement(DatePicker, {
    inputFormat: "dd/MM/yyyy",
    value: filters[prop.title],
    onChange: handleChange,
    renderInput: function renderInput(params) {
      return React__default.createElement(material.TextField, Object.assign({
        name: "createdDate"
      }, params, {
        fullWidth: true
      }));
    }
  })));
}

var dateRangeStyle = {
  border: '1px solid lightgrey',
  padding: '3%',
  width: '100%'
};

function DateRangeField(prop) {
  var _useFilters = useFilters(prop),
      filters = _useFilters.filters,
      handleChange = _useFilters.handleChange;

  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, React__default.createElement(material.InputLabel, null, prop.title), React__default.createElement(DateRangePicker, {
    format: 'dd-MM-yyyy',
    value: filters[prop.title] || [null, null],
    onChange: function onChange(value) {
      return handleChange(value);
    },
    style: dateRangeStyle
  }));
}

function DateTimeField(prop) {
  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, "DateTime field");
}

function DropdownMultipleField(prop) {
  var _useFilters = useFilters(prop),
      filters = _useFilters.filters,
      handleChange = _useFilters.handleChange;

  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, React__default.createElement(material.InputLabel, null, prop.title), React__default.createElement(Autocomplete, {
    multiple: true,
    disablePortal: true,
    options: movies,
    style: {
      width: '100%'
    },
    value: filters[prop.title] || [],
    fullWidth: true,
    onChange: function onChange(_, value) {
      return handleChange(value);
    },
    renderInput: function renderInput(params) {
      return React__default.createElement(TextField$1, Object.assign({}, params, {
        fullWidth: true
      }));
    }
  }));
}

function DropdownSingleField(prop) {
  var _useFilters = useFilters(prop),
      filters = _useFilters.filters,
      handleChange = _useFilters.handleChange;

  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, React__default.createElement(InputLabel, null, prop.title), React__default.createElement(Autocomplete, {
    disablePortal: true,
    options: movies,
    value: filters[prop.title] || '',
    onChange: function onChange(_e, value) {
      return handleChange(value);
    },
    renderInput: function renderInput(params) {
      return React__default.createElement(TextField$1, Object.assign({}, params));
    }
  }));
}

function DropdownField(prop) {
  var renderDropdown = function renderDropdown(field) {
    return field.multiple ? React__default.createElement(DropdownMultipleField, Object.assign({}, prop)) : React__default.createElement(DropdownSingleField, Object.assign({}, prop));
  };

  return React__default.createElement(React__default.Fragment, null, renderDropdown(prop));
}

function NumberField(prop) {
  var _useFilters = useFilters(prop),
      filters = _useFilters.filters,
      handleChange = _useFilters.handleChange;

  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, React__default.createElement(material.InputLabel, null, prop.title), React__default.createElement(material.TextField, {
    type: "number",
    variant: "outlined",
    fullWidth: true,
    value: filters[prop.title] || '',
    onChange: function onChange(e) {
      return handleChange(e.target.value);
    }
  }));
}

function CheckboxField(prop) {
  var filters = reactRedux.useSelector(function (state) {
    return state.filters;
  });
  var dispatch = reactRedux.useDispatch();

  var handleChange = function handleChange(value) {
    if (!filters[prop.title]) {
      value = [value];
    } else {
      var currentValue = _.cloneDeep(filters[prop.title]);

      if (currentValue.includes(value)) {
        var index = currentValue.indexOf(value);
        currentValue.splice(index, 1);
        value = currentValue;
      } else {
        value = [].concat(currentValue, [value]);
      }
    }

    dispatch({
      type: CHANGE_FILTERS,
      payload: {
        fieldName: prop.title,
        value: value
      }
    });
  };

  var isItemChecked = function isItemChecked(value) {
    console.log(value, filters[prop.title]);
    return filters[prop.title] && filters[prop.title].includes(value) ? {
      checked: true
    } : {
      checked: false
    };
  };

  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, React__default.createElement(material.FormGroup, null, React__default.createElement(material.FormLabel, {
    component: "legend"
  }, prop.title), React__default.createElement(material.Box, {
    display: "inline"
  }, checkboxOptions.map(function (opt, index) {
    return React__default.createElement(material.FormControlLabel, {
      label: opt.label,
      key: index,
      control: React__default.createElement(material.Checkbox, Object.assign({}, isItemChecked(String(opt.id)), {
        value: String(opt.id),
        onChange: function onChange(e) {
          return handleChange(e.target.value);
        }
      }))
    });
  }))));
}

var icon = /*#__PURE__*/React__default.createElement(CheckBoxOutlineBlankIcon, {
  fontSize: "small"
});
var checkedIcon = /*#__PURE__*/React__default.createElement(CheckBoxIcon, {
  fontSize: "small"
});
function DropdownWithCheckbox(prop) {
  var _useFilters = useFilters(prop),
      filters = _useFilters.filters,
      handleChange = _useFilters.handleChange;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, React__default.createElement(material.InputLabel, null, prop.title), React__default.createElement(material.Autocomplete, {
    multiple: true,
    id: "checkboxes-tags-demo",
    options: prop.defaultOptions,
    disableCloseOnSelect: true,
    value: filters[prop.title] || [],
    getOptionLabel: function getOptionLabel(option) {
      return option.label;
    },
    renderOption: function renderOption(props, option, _ref) {
      var selected = _ref.selected;
      return React__default.createElement("li", Object.assign({}, props), React__default.createElement(Checkbox, {
        icon: icon,
        checkedIcon: checkedIcon,
        style: {
          marginRight: 8
        },
        checked: selected
      }), option.label);
    },
    onChange: function onChange(_, value) {
      return handleChange(value);
    },
    style: {
      width: '100%'
    },
    renderInput: function renderInput(params) {
      return React__default.createElement(TextField$1, Object.assign({}, params, {
        fullWidth: true
      }));
    }
  })));
}

function RadioField(prop) {
  var _useFilters = useFilters(prop),
      filters = _useFilters.filters,
      handleChange = _useFilters.handleChange;

  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, React__default.createElement(material.FormControl, null, React__default.createElement(material.FormLabel, {
    id: "radio_" + prop.title
  }, prop.title), React__default.createElement(material.RadioGroup, {
    value: filters[prop.title] || '',
    name: prop.title,
    onChange: function onChange(e) {
      return handleChange(e.target.value);
    }
  }, React__default.createElement(material.Box, {
    display: "inline"
  }, checkboxOptions.map(function (opt, index) {
    return React__default.createElement(material.FormControlLabel, {
      key: index,
      value: opt.id,
      control: React__default.createElement(material.Radio, {
        value: opt.id
      }),
      label: opt.label
    });
  })))));
}

function TextField(prop) {
  var _useFilters = useFilters(prop),
      filters = _useFilters.filters,
      handleChange = _useFilters.handleChange;

  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, React__default.createElement(material.InputLabel, null, prop.title), React__default.createElement(material.TextField, {
    variant: "outlined",
    name: prop.title,
    value: filters[prop.title] || '',
    fullWidth: true,
    onChange: function onChange(e) {
      return handleChange(e.target.value);
    }
  }));
}

function TimeField(prop) {
  return React__default.createElement(material.Grid, {
    item: true,
    xs: prop.xs,
    md: prop.md,
    style: {
      border: '1px solid white',
      textAlign: 'left'
    }
  }, "time field");
}

function RenderField(field) {
  switch (field.appearance) {
    case TEXT:
      return React__default.createElement(TextField, Object.assign({}, field));

    case NUMBER:
      return React__default.createElement(NumberField, Object.assign({}, field));

    case DATE_RANGE:
      return React__default.createElement(DateRangeField, Object.assign({}, field));

    case RADIO:
      return React__default.createElement(RadioField, Object.assign({}, field));

    case CHECKBOX:
      return React__default.createElement(CheckboxField, Object.assign({}, field));

    case DROPDOWN:
      return React__default.createElement(DropdownField, Object.assign({}, field));

    case DATE:
      return React__default.createElement(DateField, Object.assign({}, field));

    case TIME:
      return React__default.createElement(TimeField, Object.assign({}, field));

    case DATE_TIME:
      return React__default.createElement(DateTimeField, Object.assign({}, field));

    case DROPDOWN_WITH_CHECKBOX:
      return React__default.createElement(DropdownWithCheckbox, Object.assign({}, field));

    default:
      return React__default.createElement(React__default.Fragment, null, " default ");
  }
}

function FilterAccordion(_ref) {
  var item = _ref.item;

  var _useUiConfigChangeRed = useUiConfigChangeReducer(),
      handleServerCall = _useUiConfigChangeRed.handleServerCall;

  return React__default.createElement(CustomizedAccordions, {
    title: "filter"
  }, React__default.createElement(material.Grid, {
    container: true,
    spacing: 2
  }, item.config.map(function (field, index) {
    return React__default.createElement(React__default.Fragment, {
      key: index
    }, React__default.createElement(RenderField, Object.assign({}, field)));
  })), React__default.createElement(system.Box, {
    textAlign: "right",
    textTransform: 'capitalize'
  }, React__default.createElement(material.Button, {
    type: "button",
    variant: "contained",
    color: "primary",
    onClick: function onClick(_e) {
      return handleServerCall();
    }
  }, "Filter")));
}

var DrawerHeader = /*#__PURE__*/styles.styled('div')(function (_ref) {
  var theme = _ref.theme;
  return _extends({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar, {
    justifyContent: 'flex-start'
  });
});
function PersistentDrawer(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  var theme = styles.useTheme();

  var _useUiConfigChangeRed = useUiConfigChangeReducer(),
      drawerOpen = _useUiConfigChangeRed.drawerOpen,
      handleDrawerOpen = _useUiConfigChangeRed.handleDrawerOpen,
      handleDrawerClose = _useUiConfigChangeRed.handleDrawerClose;

  return React.createElement(Box, {
    marginBottom: 2
  }, React.createElement(Box, {
    sx: {
      display: 'flex',
      justifyContent: 'end'
    },
    textTransform: 'capitalize'
  }, React.createElement(material.Button, {
    type: "button",
    variant: "contained",
    color: "primary",
    onClick: handleDrawerOpen,
    sx: _extends({}, drawerOpen && {
      visibility: 'hidden'
    })
  }, React.createElement(FilterAltIcon, null), " ", title)), React.createElement(Drawer, {
    sx: {
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        boxShadow: '-5px 0 5px -5px #333'
      }
    },
    variant: "persistent",
    anchor: "right",
    open: drawerOpen
  }, React.createElement(DrawerHeader, null, React.createElement(IconButton, {
    onClick: handleDrawerClose
  }, theme.direction === 'rtl' ? React.createElement(ChevronLeftIcon, null) : React.createElement(ChevronRightIcon, null))), React.createElement(Divider, null), React.createElement(material.Container, null, children)));
}

function FilterDrawer(_ref) {
  var item = _ref.item;

  var _useUiConfigChangeRed = useUiConfigChangeReducer(),
      handleServerCall = _useUiConfigChangeRed.handleServerCall;

  return React__default.createElement(PersistentDrawer, {
    title: "filter"
  }, React__default.createElement(material.Grid, {
    container: true,
    spacing: 2
  }, item.config.map(function (field, index) {
    return React__default.createElement(React__default.Fragment, {
      key: index
    }, React__default.createElement(RenderField, Object.assign({}, field)));
  })), React__default.createElement(system.Box, {
    textAlign: "right",
    textTransform: 'capitalize'
  }, React__default.createElement(material.Button, {
    type: "button",
    variant: "contained",
    color: "primary",
    onClick: function onClick(_e) {
      return handleServerCall();
    }
  }, "Filter")));
}

var FilterSection = function FilterSection(_ref) {
  var item = _ref.item;

  var renderField = function renderField(item) {
    switch (item.appearance) {
      case DRAWER:
        return React__default.createElement(FilterDrawer, {
          item: item,
          dataObject: {}
        });

      case DEFAULT:
        return React__default.createElement(FilterAccordion, {
          item: item,
          dataObject: {}
        });

      default:
        return React__default.createElement(FilterAccordion, {
          item: item,
          dataObject: {}
        });
    }
  };

  return React__default.createElement(React__default.Fragment, null, renderField(item));
};

var _excluded = ["children", "className", "content", "contentClass", "darkTitle", "secondary", "sx", "contentSX", "title"];

var SubCard = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      content = _ref.content,
      contentClass = _ref.contentClass,
      darkTitle = _ref.darkTitle,
      secondary = _ref.secondary,
      _ref$sx = _ref.sx,
      sx = _ref$sx === void 0 ? {} : _ref$sx,
      _ref$contentSX = _ref.contentSX,
      contentSX = _ref$contentSX === void 0 ? {} : _ref$contentSX,
      _title = _ref.title,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var theme = styles.useTheme();
  return React__default.createElement(material.Card, Object.assign({
    ref: ref,
    sx: _extends({
      border: '1px solid',
      borderColor: theme.palette.mode === 'dark' ? '#f1f3f4' : 'lightgray',
      ':hover': {
        boxShadow: theme.palette.mode === 'dark' ? '0 2px 14px 0 rgb(33 150 243 / 10%)' : '0 2px 14px 0 rgb(32 40 45 / 8%)'
      }
    }, sx)
  }, others), !darkTitle && _title && React__default.createElement(material.CardHeader, {
    sx: {
      p: 2.5
    },
    title: React__default.createElement(material.Typography, {
      variant: "h5"
    }, _title),
    action: secondary
  }), darkTitle && _title && React__default.createElement(material.CardHeader, {
    sx: {
      p: 2.5
    },
    title: React__default.createElement(material.Typography, {
      variant: "h4"
    }, _title),
    action: secondary
  }), _title && React__default.createElement(material.Divider, {
    sx: {
      opacity: 1,
      borderColor: theme.palette.mode === 'dark' ? '#f1f3f4' : 'lightgray'
    }
  }), content && React__default.createElement(material.CardContent, {
    sx: _extends({
      p: 2.5
    }, contentSX),
    className: contentClass || ''
  }, children), !content && children);
});
SubCard.defaultProps = {
  content: true
};

var useStyle = /*#__PURE__*/styles$1.makeStyles(function (_theme) {
  return {
    map: {
      height: '500px',
      width: '500px',
      overflow: 'auto'
    },
    svg: {
      '& path:hover': {
        fill: '#fbae9d'
      }
    }
  };
});
var divisions = [{
  id: 'dhaka',
  geo_code: '30',
  value: 0,
  d: 'M544.7 781.3l8.3 6.2 1.8 5.2-7.9-5.8-4.3-1.7-1.2 2.7-3.9 1.9-4.1-1.2-3.9-2.9-6.8-7.1-2.3-3.4 0.6-2.1 5.7 0 7.8 2.8 10.2 5.4z m85.4-428l-0.6 10.3 3.2 10.4-0.1 3.2-0.7 2.3-2.3 3.5-1.9 4-2.4 8.6 14.1 23.5 6.2 2.8 25.7-2.7 2.8 10.7 1.5 4.9 0.8 10.6-1.6 12.4 1.4 4.3 1.2 0.5 3.9-0.5 6.6 0.3 2.3 1.1 1.2 1.8 0.9 2.9-0.1 1.8-2.3 4-0.3 4.5-0.7 1.3-5 2.5 0.1 1.8 2.7 3.4 1.1 2.5 2.5 2.5 3.9 2.1-3 7.9-2.3 4.4-1.9 2.7-2.1 2.1-0.2 1.7 1.7 2 1.6 1 2.4 0.2 2.6 1.2 1.2 5.6-0.3 2.9-3.6 2.6 4.7 4.2 2.5 3.3 0.4 1.8-1.1 2.2-1.5 0.5-2.4 2.6 3 4.7-4.7 3.3-7.3 3.3-3.2 8.1-1.7 1.6-1.7 2.8-2.8 2-3.7 1.3-4.2 0.4-1.9 1.1 0 2.4 0.4 2.7-0.6 1.9-1.5 0.2-1.6-0.6-2.9-2.3-7.2 9.9-4.9 1.7-1.3 0.8 0.9 4.6-0.3 1.1 3.9 5.6-1.6 3.4 4.2 2.5-1.6 5-4.2 4.8-3.5 2.2-2.5 2.4-1.9 5.6 0.9 4.5-1.1 5.8-4.4 9.9-8.2 11.4-3 2.5-2 1.1-2.5-0.7-6.4-4.2-4.2 2-1.7 0.2-6.6-0.3-2.9 0.8-2.8 2.2-2.1 3.1-0.1 1.9 1.2 5.1-0.3 3.5-4.4 11.6-3.4 5.2-0.4 2.1 0.7 1.5 3.1 2.2 2.2 2.6 0.5 1.7-0.2 1.7-1.6 3.2-1.9 1.9 5.7 5.9 1.9 2.7-0.5 1.2-3.3 0.4-2.6 1.3-0.9 2 1.6 2.7-2.2 2.4-4.8 3.1-1.9 2.9-5.2-0.1-0.6 1 1.9 2.2 3.9 3.1-1.5 4.9-3.8-2.2-2.4-0.3-4.1 2.5-5.5 1.8-3.1 2.1-1-0.8-3.3-9.3 0.9-6.7 3.5-5.5 5.4-2.5-1.7-0.4-1.2 0.4-1.7-2.3-3.6 0.4-7.9 3.3 1.2 3.3-1.1 2-2.6 1-3.4 0.3-3.6-0.3-2.8-1-5.5-3.5 1.7 3.6 3.1 2.4 3.5 1.4 3.6 0.6 8 0.3 1.8 1.9 0.5 21.1-0.7 2.6-1.7 1.4-1.7 3.4-1.4 4.2-0.4 3.7-7.2-3.1-42.3-8.3-8.2-3-7.4-4.9-0.2 2.7 2 2.6 28 17 3.4 2.8 2 2.9 1.4 2.9 1.9 2.3 6.8 1.5 6 3 3.4 1.2 14.1 1.6 1.8 1.5 6.3 9.7 1 3.9 0.7 8.3-2.5-3.7-2-2.1 1.1 4.6 0.9 13.9-0.8 5.6-5.8 8.4-1.4 1.4-2.6-0.7-0.5-1.9 1-2.3 2.1-1.7 0-1.6-1.5 0-2.4 3.3-2.4 2.3-3 1.6-4.1 1-8.1-0.3-2.7 1.1-1 3.9 0.2 1.5-2.3 3.5-3.7 2.2-5.7-2.7-2.9-2.8-4.9-3.8-7-1.6-3.2 1.3-2.4 1.6-1.9 3.8 2.1 0.4 3.3-0.5 1.8 1.2 0.1 4.1-1.9 3.8-1.6 1.5-2.4 3.9-2.1 1.5-3.2 0.4-2.5-1-3.1-2.2-4.2-5.1-1.2-3.9-0.5-5.9-0.7-1.9-1.3-1.8-1.8-0.8-2.4-0.4-10.6 2-2 3.6-1.6 4.4-4.1 2.2-3.6 3.7-1.8 2.8-4.2 4-1.2 1.5-3 6.5-5.4 7.5-5.1 5.3-3 1.6-3.7 0.8-7.7 1.3-8.9-4.7-1.6-1.5-4.4-5-4.6-2.3-1.2-1-0.9-1.6-1.2-4.3-1-2.2-2.8-3.9-7-6.4-3.4-4.1-5.3-11.3-2.1-3.2-1.7-1-3.7-0.7-1.8-1.6-1.6-3.2-0.4-2.2 0.2-2.6 4.3 3.6 2.2 0.8 1.6-3.3 3.3-4.8 1.4-1 2.7-0.9 0.7-2.1-1.2-2.2-3.1-1.2-2.5 0.6-3.7 2.9-2.7-0.3-3.2-4.2 0.7-4.8-0.5-4.1-11.5-3.1 1.8-3.5 4.3-4.2 2.5-3.7-6.5 0.2-5.4-6.4-3.2-8.9 0.2-7.5 1.6 0 1.6 2.1 2.8 1.3-4.1-19.4-1.9-4.8-4.3-4-6.6-3.6-6.3-0.7-3.5 5.1-1.4-3 0.1-3.4 4.3-3.2 2-2.3-1.3-1.1-2.2-1.1-1.3-2.5-0.9-3-1.4-2.3-2.7-3.1-12.8-19.2-2.3-1.1-2.8 0.2-3.6 1.1-6.2 0.4-8.9-11.4-0.6-2.1 11.2-29.2 0.2-4.8-0.4-1.9-3.1-9.3 7.1 4.8 19.3 8.3 4.9 2.9 8.7 7.9 5.5 1.1 3.8-1.2 6.5-4.3 3.5-1.4 12-1.1 4.9-1.3 0-2.8-2.2-11-0.6-3.5 0.9-5.2 2.8-7.3 18.5-15.4 2.7-2.5 2-3.3 1.6-3.2 0.6-8.4 2.1-4-0.6-0.4 0.4-3.4 0.9-3.4-1-2.5 0.4-2.2-0.8-2.2-3.9-1-0.3-6.4-3-2.6-8-8.8-0.2-2 0.1-9.3-1.3-9.1 0-2.4 2-17 0.2-8.9 1.8-7.4 0.3-4.7-0.2-4.4-0.6-2.9 1.1-2.6 2.4-2.9 1.6-6 0-3-1.1-4.6 0.3-2.6 2.4-10.8-0.1-5-1.1-4.4-1.4-2.5-1.8-2.2-3.9-3.7-6.4-3.4-3.7-2.5-2.2-2.4-2.9-5.8-1.9-4.7-5.2-25.8-0.3-2 1.2-20 2-12.6 2.9-12.8 4.8-10.3 2-3.2 2.6-3 3.2-4.7 1.2-6-1.9-13 4.9-11.8 1.9-3.5 3.1-2 3.6-0.7-0.9 6.9 0.7 8.1 1.9 8.5 2.5 4.7 3.4 0.6 7.7-3.1 8.2-0.3 47.9 20.3 33.9 7.6 16.8 7.1 7.6 0.3 21.9-4.7 17.7 1.6 8.7-2.3 3 0.1 2.5 0.8 4.7 2.1 8 1.4 1.8-0.1 1.3-0.7 2.3-2.5 1.1-0.6 3.5 0.4 2.8 1.7 2.7 2.1 3.1 1.5 6.1 0.8 24.3-3.4z'
}, {
  id: 'khulna',
  geo_code: '40',
  value: 0,
  d: 'M243.5 1158.1l-2.6 4.1-6.5-3.5-11-13.1 0-1 1.3-1.4 1.4-4.4-0.1-4.5-2.1-7.7-0.6-3.6-1.4-4.1 0.2-2.2 2.6-0.1 0.9 0.6 1.3 2.5 0.8 3.3 2.1 15.6 2.5 6.9 5 2.9 5 3.3 1.2 6.4z m43.3-511.3l3.1 9.3 0.4 1.9-0.2 4.8-11.2 29.2 0.6 2.1 8.9 11.4 6.2-0.4 3.6-1.1 2.8-0.2 2.3 1.1 12.8 19.2 2.7 3.1 1.4 2.3 0.9 3 1.3 2.5 2.2 1.1 1.3 1.1-2 2.3-4.3 3.2-0.1 3.4 1.4 3 3.5-5.1 6.3 0.7 6.6 3.6 4.3 4 1.9 4.8 4.1 19.4-2.8-1.3-1.6-2.1-1.6 0-0.2 7.5 3.2 8.9 5.4 6.4 6.5-0.2-2.5 3.7-4.3 4.2-1.8 3.5 11.5 3.1 0.5 4.1-0.7 4.8 3.2 4.2 2.7 0.3 3.7-2.9 2.5-0.6 3.1 1.2 1.2 2.2-0.7 2.1-2.7 0.9-1.4 1-3.3 4.8-1.6 3.3-2.2-0.8-4.3-3.6-0.2 2.6 0.4 2.2 1.6 3.2 1.8 1.6 3.7 0.7 1.7 1 2.1 3.2 5.3 11.3 3.4 4.1 7 6.4 2.8 3.9 1 2.2 1.2 4.3 0.9 1.6 1.2 1 4.6 2.3 4.4 5 1.6 1.5 8.9 4.7 3.2 3 4 7.1-3 2.4-2.2-0.1-1.3 0.6-1.5 2.8 0.1 1.4 1.4 1.4-0.4 1.8-3.2 1.7-0.8 1.7 0 1.7 0.9 2.1 1.9 1.1 1 1.1-1.1 2-6.6 4.4-1.9 2.3 0 1.2 1.4 0.7 5.4 0.6 1.9 0.6 1.1 1.7-0.2 3.3-1.5 0.6-2.1-0.8-2.4 1 0.1 1 2.3 2.1 1.5 2 2.4 7.1 3.5 2.6 1.3 1.2 1.7 5.1 0.1 2.9-0.5 3.5-1.9 4.2-0.8 3.7 0.9 2 3.4 1.8 1.1 1.7 1.8 5.4-6.9 7.1-3 3.8-1.2 3.7-1.7 3.7-3.7-1.1-6.5-5.2 0.4 4.9 1.2 4 0.8 4-0.8 5-9 17.4 2.6 4.9 2.3 8.3 2.5 15.7 0.3 8.1-0.7 4-1.8 3-3.6 2-3.1-0.4-3.4-0.9-4.1 0 0 1.7 4.6 2 3.8 2.5 2.6 3.6 0.9 5.5-0.2 2.2-1.1 4.2 0 2.5 0.9 2.1 2.9 4.6 1.8 4.5 2.1 2.6 1.2 3-1.5 3.7-1.6 0.6-4.8 0.9-5.5 5-2.4 3.6-2 1.2-4 1.5-2.3 0.4-1-1.2-1.1-3.3-2.7 0.7-3.3 2.2-2.7 1.2-3.6-0.2-4-0.9-3.7-1.5-2.6-2.1-1.8-4.3-0.1-2.6 2.3-4-0.4-2.3-3.1-4.4-6.1 12.8 2.5 4.3 4.2 5.8 4.8 5.2 4.3 2.2 1.9 2.3-2.3 4.6-4.7 3.3-5.3-1.4-2.7-1.7-2.4 0-5.3 1-0.6 1.3 2.4 6.2 0.4 2-4.1 4.2-4.6-2.9-6.1-9.4 0.3-4.1-2.4-9.6 0.6-5.3 1.7-3 4-4.7 1.7-3.6 0.7-3.9-0.9-16.8 1.6-13.6 1.2-4.7 5.2-9.3 1.1-5.1-0.7-4.9-1.9-4.9-2.7-4.4-2.9-3.4-0.1-3.3 6.6-8.7 1.7-3.9 0.3-5 0.7-4.8 1.4-4.6 2.1-4.1-2.4 1.8-2 3-3 6.4-2.5 2.5-0.8 2.1 2 5.4-1.3 2-4.2 3.2-2.5 4.1 0.2 3.1 4.5 8 1.7 5.1 0.1 5.3-0.5 2.8-2.2 4.5-0.5 2.3-1.8 14.8-1 3.4-4.1 2.2-1.7-3.6-0.3-10.4 0.6-2.4 2.2-4.9 0.2-3-9.8-23.2-0.5-4.8 1-10.4-0.3-4.7-2.1-5-1.6 0-1.8 15.4 1.8 29.5 1.6 0 0.2-3.3 1-3 1.8-1 1 4.8 1.1 2.9 1.3 2 1.2 2.6-0.2 3.4-1.8 5.9-1.1 1.1-2.6 0.5-0.3 2.4 1.4 2.4 0.8 2.6 2.6 5.7 1.6 2.1 0.4 1.6-2 12.4-2.3 2.7-2.8 2.1-2.9 2.7-2.4 4.1-0.2 3.3 0.7 3.8 0.6 5.7-0.8 5.3-2.1 4.4-2.9 3.7-7.9 6.8-2.4 0.2-5.5-6.2-1.2-3.5-0.3-6 0.7-10.5 1.1-4.2 2.9-7.1 0.5-5.5-0.9-4.7-4-7.8-1-4-1.6 0-1.3 3.5 0.6 3 1.4 2.9 0.9 3.3 0 3.7-0.8 2.1-3.6 3.7-2.2 2.8-1.4 2.4-3.5 8.6-1.1 1.9-1.1 0.1-1.2-3.1-1.4 0 0.1 5.9 2.2 9.1-0.9 5.7-3.6 8 0.6 2.6 4.5 2.2-2.5 2.9-3.7 2.7-4.3 1.9-4.2 0.5-4.1-2.4-1.3-4.3 0.8-4.2 2.3-1.8 0.4-2.6-6.7-19-0.4-4.7-0.9-1-2 1.3-2.1 2.3-0.9 2.1-1.3 1-2.8-0.8-4.8-2.5-2.2-1.9-0.9-1.5-5.4-19-0.4-3.9 0.5-4.8 2.3-9.8 0.1-5.4-1.5-4.9-4.8-6.6-1-3.7 1.3-10.7-0.7-4.3 3.8-5-0.4-5.6-1.2-4.6-1.8-3.9-9.4-12.4-2.1-4.9 3.1-2.2-3.5-6.2-1.2-2.8-2.6-12.5 0-2.2 0.6-2.4 1.8-3.1 0.4-1.9-0.9-5.4-4-9.3-1.9-8.6-2.6-2.1-6.7-2.6 4.8-3.3 1.3-5.4-0.9-6.3-2.1-6-2.7-4.9-0.8-5.2-0.8-3-2.6-6.8-0.5-4.2 1.5-3.2 2.4-3 2.3-3.6 1-3.1 0.8-4.6 0.4-4.5-0.5-3.2-2.5-2.3-6-2-2.5-3.1-4.6-11-2.3-3.7-4.1-5.2-0.9-2.6 0.2-4.6 2-6.7 0.5-12.1 3-5.9 11.7-12.5 5.8-4.9 1.9-2.2 1.1-2.5 0-1.9-1.2-1.1-5.9 0.2-3.8-1.4-15.1-5.3-3.6-0.7-2.9 0.4-3.3 2.6-1.7 0.9-2.3-0.1-14.2-4.6-2.9-2.6-2.1-4.5-0.2-5.1 2-4.6 5.2-8.4 10.5-28 0.5-5-2.9-2.4-2.8 2.2-2.5 4-2.7 1-3.2-6.3-2.4-1.1-6.3-4.4-3.6-3.9-5.1-9.2-3.2-3.5-1.7-0.4-4.3 0.5-2.2-0.9-2.1-2.3-0.1-1.6 0.7-1.8 0.4-2.9-1.1-0.9-2.2-0.5-2-1-0.4-2.6 4.6-21.5-0.3-2.2-1.6-3.6 0.1-2.2 1-2.5 3.2-5.1 1.1-2.7 0-2.1-0.7-4.3 0.7-2.3 3.5-2.7 4.2-0.2 4.5 0.4 4.1-0.9 2.9-2.3 8.2-8.1 2.1-2.7 0.7-4.2-0.6-5.1-1.3-4.5-1.5-2.8 2.7-4.6 2.5-3.3-0.1-2.3-5.2-1.2-0.7-3-4.1-3.5-1-2.7 0.3-2.2 1.3-4.9 0.3-2.8-1-4.8-0.1-2.3 1.3-2.9 2.1-2.1 4.8-1.8 3.4-1.6 1 3.6 3.4 5.2 1.4 1.2 5.2 2.8 3.2 2.3 1.7 0.9 4.2 0.7 4-0.9 13.9-6.6 2.9-2 2.2-2.9 4.3 0.3 3.9 2 1.7 1.4 5 6.7 7.9 7.6 1.9 5.9 4.4 5.6 0.9 2.1 0 2.5-1 5.2 0.6 2.1 2.1 2.5 8.3 7.2 4.6 3 4.7 2.2 5.9 1.1 17.9-1.9 5.8 0.5 5.4 1.2 5.1 2.2z'
}, {
  id: 'barisal',
  geo_code: '10',
  value: 0,
  d: 'M555.8 1112.5l-2.1 5.3-1.8-1.2-1.5 0-1.8 4.7-3.6 5-4.2 3.4-3.8-0.3 0-1.7 4.3-1.3 1.7-0.3-2.9-3.8-1.6-1.1 1.4-1.5-0.4-4 0.6-2.4 1.8-2.8 14.5-10 0 4.8 1.6 2.7 1.2 3.7-3.4 0.8z m-55.8 20l-2 1.3-1-0.6 0-10.8 0.9-5.6 2.1-5.1 4.7-8.9 3.7-4.2 5-1.2-0.8 5.1-5.4 9.2-5.2 18.2-2 2.6z m2.9-28.6l-1.3 0 1.3-5 2.8-6.8 3.3-5.3 2.9-0.6-1.4 5.8-6.1 7-1.5 4.9z m18.6 15l-3.5 1.7-2.9-1.5-1.7-3.4 0-4 1.2-3.3 1.4-2.5 1.2-2.9 0.5-4.9-0.5-7.4 0.8-2.2 2.8-2.3 9.7 10.4 2.7 6.2-2.1 7.4-4.6 2.8-5 5.9z m39.2-59.7l-4.3 14.3-0.4-3.8-1.2-2.7-2.5 8-1.3 8.9-1.9 8-4.6 5.5-4.1 1.2-2.2-1.1-1-2.5-0.2-3.2 1.1-2.1 7.7-6.7-1.3-1.6-9.3 5.5-1.2 2.4-1.3 0 0.4-5.5 1.3-5.1 2.5-3.7 3.8-1.5 2.7-1.7 5.8-6.5 2.7 0.1 1.8-2.7 2.6-2.5 2.5-1.4 1.9 0.4z m73.6-10.3l0.5 2.1 0 12.6-1.6 5.5-4.3 1.1-2.2-3.6 0.3-6.5 1.5-7 1.8-5.2 1.3 1.7 1.2-1.5 1.5 0.8z m7.3 3l-2.5 2.2 0.1-12.5 1.3-4.6 3 1.3 0.2 4.3-0.6 5-1.5 4.3z m0.5-20.1l-8.1 12.7-3.4-1.4 0.7-3.2 2.2-4 1.3-3.2 0.8-10.6 1.3-5.7 2.2-3.8 1.6 1.8 1.2 3.5 0.9 4.3 0.2 4.8-0.9 4.8z m-77.1-35.1l3.1 5.7 2.4 6.5 0.5 5.5-2.4-4.8-0.5-1.7-1.6 4.1 1.4 9.3-1.4 4.1-1.1-2.1-0.4-7.5 1.5 0-1.4-4.2-1.6-9.1-1.4-4.2-1.3-0.9-2.7-0.1-0.5-3.1 0.5-1.4 1.4-0.5 2.6 1.2 2.9 3.2z m4.4 0.1l-1.3 1.5 1.3-13.7 1.6 0.8 0.9 2.5 0.4 2.5 0.1 4.6-3 1.8z m37.6 65.1l-11.4 17.8-3.8 3.3-1.6-3.3-4.9 5.2-2.1 1.2-5.6 9.7-7.3 3.3-2.2-0.3-1.8-5.1 2.6-6.7 4-7.1 2.6-6.4-12.1 17.6-3.4 0.7-1.4-4.6 0.9-6.6 2.4-6.8 3.1-5.1-2.4-5.1 2.1-8.6 9-19.7 1.1-3.8 0.7-4.5 0-13.7 1.3-4-1.7-6.9-0.5-4.6 0.9-2.8 0-1.5-2.4-4.3-2.6-14.2-2.4-5.6-3.5-3.1-12.2-8.7-3.5-1-1-8.6 0.5-8.2 4.8-19.2 1.5-2.6 2.3-1.7 3.7-1.5 3.8-0.9 4.2-0.5 2.2 7 2.4 8.3 2.7 6.5 3.7 7.6 3.1 5.6 3.4 4.1 3.4 5.5 1.6 11.4 2.7 7.2 5.1 5.2 9.5 8.7 4.4 5.5-4.3 22.2 0.2 37.7-1.8 6z m-47.8-169.5l4.4 4.7 4 1.8 4 4.8 3.1 4.8-3.4 0.7-7.4-1.5-8-0.5-6.3 5.9-3.3 1.2-3.3 3.4-0.4 5.8 1.1 3.7-3 4-2.1-2.6-2.8-2.6-0.3-2.2-0.8-2.4-2.2-1.5-5.8-1.8 1.8-2.7 0.3-2.1-0.7-6.5 0.2-4.3 0.6-4.1 1.6-3.2 2.9-1.2 7.4 1.3 3.5-0.5 1.5-3.2 1.8-0.3 8.5 0 3.1 1.1z m8.4-22.9l4.8 3.7 0 1.4-5.6 0.2 0.7 1.5 2.1 2 1.7 2.2 1.1 2.3-6.8-0.8-1.9-0.8-1.6-1.8-2.6-4.7-1.9-1.5-2.2-0.7-1.6 1.3-1.9 0.8-2.4 0.3-5.8 0.1-2.3-0.4-3.4-5.3 4.3-7.5 7.2-5.9 5.3-0.5 4.6 3.9 8.2 10.2z m-36.2-8.8l-1.8 1.1-1.8-9.6-1.1-3.4 8.3 0 3.5-1.4 1.4 2.3-0.3 1.7-3.3 3.3-4.9 6z m-6-8.7l1 5.1 3 7.4 4 7 4.3 5.7 0.5 1.2-0.3 2.7 0.6 1.7 2.3 0.6 3.2 2.8 0.9 1.7-1.1 2.2-3.3 1.6-3.2-0.4-3.1-0.8-3.1 0.3-4.1 5.2-2 7.8-2.6 6.5-6.1 1.4 3.5 3.1-0.9 3.1-2.9 1.2-2.6-2.7-4.7 3.1 3.2 2.4 6.1 2.1 4.2 2.1 2-4.3 3.7 0.7 3.8 3.2 2.3 3.5 0.7 2.4 0.8 7.3 2.6 7.6 0.9 8.1-0.6 1.7-2.1 2.8-1.9 1.1-5 0.7-2 1.3-1.2 3.5-2.5 13 0.6 1 2.8-2.4 1-1.5 0.2-2.4-0.6-4.7 0.4-2.5 2.2-3.2 3.2-1.9 3.8-0.6 4.1 0.8 7.7 4.8 3.9 6.7 2.6 7.8 3.6 8.1-4.4-1.7 0.1 5.3 1.5 4.2 4.3 8.3 1.1 4.7 0.2 4.9-1.3 9.6-6.9 17.9-5.1 8.1-4.2 1-5.8 3.2-2.2 2-1 2.1-0.5 3.2-1.3 3.6-6.2 10.9-2.1 2.6-2.4 1.1-2.9-0.7-3.7-1.6-3.1-2.1-1.4-1.8 1.3-5.8 5.2-11.1 0.9-5.6-2.5-6.6-0.5-3.1 1.4-7.3-0.7-2.9-3.6-0.9 0.9 4.8-2.1 10.4 0.4 3.3 1.8 1.6 2.5 1.5 0.8 2.3-0.3 1.8-1 1.6-2.8 3.3-0.6 3.3-1.9-0.7-0.8 0.5-0.6 2.4-0.7 7.2-1.8 5-3.9 6-3.3 4-1 4.1-4.1 8.5-0.9 4.3-1 8.9-2 8.7-1.7 4.5-2.2 3.1-11.9 10.2-3 2.1-4.1 0.8-4.4-0.7-8.1-3.4-3.8-0.8-3.5-1.9-0.9-3.8 1.4-3 3.7 0.8-1.6-3.3 1.3-2.3 2.1-2.1 1.2-2.8-1-3.3-1.2-0.9-3.8 9.5-2.1 2-2 0.7-2.7 3.1-2 1-1.8-0.4-2.8-2.4-2.6-0.3 1.5-6.2 0.6-12.6 2.3-5.3 2-1.7 5-3.4 1.9-2.8 1-3.6 1.2-5.7 2-3.3 8.9-8.1 3.8-5.7 1.9-0.9 4.8 1.8 4.5-3.2 3.4-5.2 1.6-6.3-0.7-6.2-3.8 10.1-2.7 5.3-3.1 2.3-5.8 0.8-3.5 2.1-12.9 13.9-1.5 2.4-1.7 5-2.8 4.3-0.7 1.7-1.1 1.1-3.1 0.5-2.2-0.3-6.9-2.8 1.3-3.3 0.2-3.5 1.7-2.8 2-1.8 1.9-0.9 1.4-1.6 0.6-3.6-0.8-7 1-2.6 0.8-3.5 2-2.3 2.4-1.1 2-1.4 1.3-2.8-5.6 2-2.7 4-3.4 11.5-1.9 2.6-5.8 5.7-1.3 2 0.5 10.5-0.5 3-3.2 2.8-3.9-1.4-3.3-4-1.4-4.5-0.4-2.3-1.9-5.3-0.6-2.8-0.5-17.2-2-9.6-0.5-5.9-0.5-2.2-2.8-4.5-1.1-2.3-0.8-3-0.3-2.5 1.1-5.6 4.3-10.7 17.8-26 1.2-2.9 0.8-2.8 1.3-2.6-3.3 1.8-0.7 0.7-1.8-5.4-1.1-1.7-3.4-1.8-0.9-2 0.8-3.7 1.9-4.2 0.5-3.5-0.1-2.9-1.7-5.1-1.3-1.2-3.5-2.6-2.4-7.1-1.5-2-2.3-2.1-0.1-1 2.4-1 2.1 0.8 1.5-0.6 0.2-3.3-1.1-1.7-1.9-0.6-5.4-0.6-1.4-0.7 0-1.2 1.9-2.3 6.6-4.4 1.1-2-1-1.1-1.9-1.1-0.9-2.1 0-1.7 0.8-1.7 3.2-1.7 0.4-1.8-1.4-1.4-0.1-1.4 1.5-2.8 1.3-0.6 2.2 0.1 3-2.4-4-7.1-3.2-3 7.7-1.3 3.7-0.8 3-1.6 5.1-5.3 5.4-7.5 3-6.5 1.2-1.5 4.2-4 1.8-2.8 3.6-3.7 4.1-2.2 1.6-4.4 2-3.6 10.6-2 2.4 0.4 1.8 0.8 1.3 1.8 0.7 1.9 0.5 5.9 1.2 3.9 4.2 5.1 3.1 2.2 2.5 1 3.2-0.4 2.1-1.5 2.4-3.9 1.6-1.5 1.9-3.8-0.1-4.1-1.8-1.2-3.3 0.5-2.1-0.4 1.9-3.8 2.4-1.6 3.2-1.3 7 1.6 4.9 3.8 2.9 2.8 5.7 2.7 3.7-2.2 2.3-3.5z'
}, {
  id: 'chittagong',
  geo_code: '20',
  value: 0,
  d: 'M846.9 1163.8l7.8 15.3 2 9.2-0.5 4.9-2 9.8-0.5 5.2-1.9 4.1-4.8 0.2-5.4-1-4.2 0.6 0 1.3 1 1.7 0.1 1.8-2.6 1.4-2.3-0.2-1.9-1.3-1.2-1.9-0.9-4.1-0.7-1.6 0.1-1.7 3.3-4.9 0.6-2.4 0.1-5.5-1.1-9.4-4.6-15.5 1.2-8.6 2.1-4.6 2-2.1 2.4 0.2 3.1 2.5 1.1 3-1 3.6-1.6 3.7-0.7 3.2 3.4-4.1 1.3-5.6-0.2-5.9-1.6-5.2 3.9-0.5 3.5-1 0 4.9 0.7 10.5z m-21.1-4.8l-1.8 2.2-1.8-3.9 3.4-19.3-1.6-11.9 0.8-4 1.6-3 5.1-5.8 1.2 1.4 0.3 1.9 2.6 8.7 0.3 3.3-0.7 3.7-3 5.9-1.7 8.1-4.7 12.7z m-163.8-85.2l-4.1 2.7-5.4-0.3-3.4-0.9-2.5-1.7-1.3-3.4 6.2-7.5 4-6.2 1.5-3.9 1.9-11.3 0.2-16.4 1.3-18.2 3.7-0.6 7.5 3.9 4.7 4.1 1.7 5.8 3.2 3 2.2 8.4 0.1 5.4 1 7.6-3.5 7.1-2.1 3.6-4.2 8.3-4.4 3.7-3.1 2.1-2.8 0.6-2.4 4.1z m16.7-81.6l-5.5 0.3-4.4-2.8 2.1-6.5 7.6-3.3 8.9-2.6 2.3 4.5-2.1 5.4-4.5 3-4.4 2z m85.4 11.4l-10.3 1.2-6.8-3.8-6.4-9.4-3.6-9.3-1.3-7.5 5-11.9 4.5-2.4 19.2 25.3 1.5 10-1.8 7.8z m-53.3-373.8l-3.6-0.6-3.8 1.6-2.9 2.6-2.2 3.1-7.4 13.2-0.9 3.3 0.1 3.2 2.5 5.5 0.9 3-0.7 4.4-4.3 12.9-2.2 3.9-4 2-4.1 0.4-3.4 1.2-2 4.5 0.9 5.1 3.4 1.9 3.6 1.3 1.3 3.6-1.9 3.8-3-0.2-2.7 0.3-0.8 5.7 1 4.1 6.3 11.8 1.6 4.2 1.8 7.7 2 3.9 1.8 1.7 3.8 2.3 1.4 2.2 0.5 1.8 1 5.8 2.9 10 2.2 4.8 2.8 2.1 2.8 0.7 0.7 1.4-0.9 1.9-2.2 2.1-1.5 2.2 0.4 1.8 2.1 4.3 5 37.9 2.8 9.7 5.2 7 7.2 1.9 0.8-7.7-4-19.7-0.1-10.5 1.2-5.5 2.4-3.3 4.8-0.2 4.1 3.3 3.2 4.5 1.7 3.2 0.8-1.8 1.4 1.9 0 4.1 3.2 3.2 0.5 0 1.5 7.3 1 2.4 5 17.2 1.1 6 0.6 0.7 2 0.6 0.6 0.8 0.3 7 0.9 2.4 2.8 3.1 2.8 1.1 2.9 0.6 3 1.4 1.3 2.6 0 2.3 0.7 0.8 3.5-2 1.3-1.7 1.8-4.2 1.9-0.8 4.6 1.2 4.5-1.4 5.8-1.3 2.7-1.7 1.6-1.8 3.6-3.4 1.5-1.7 3.7-5.5 0.2-3.2 1-0.9 3.3 0.1 3.3-3.6 0.9-2.1-0.8-2.8-2.8-7.2-3.2-16.1-3.2-7.5-1.2-9.4 4.1-11.6 6.3-11 5.6-7.6 3.5-3.1 11.9-5.2 3.5-2.5 2.8-3.1 4.9-8.3 0.3-9.3-5.7-27.3-0.3-9 0.4-5.1 1.4-3 3-0.2 2.7 3.3 2.7 4.4 9 10.3 3.4 1.7 5-1.3 3.7-3.3 7.1-9.8 3.5-4 9.1-3.2 4.3 6.6 2.2 9 2.9 4.1 3.3-3.2 2.7-10.9 3.6-2.1 4.5 2.4 0.5 5.1-2.5 10 0.6 7.9 8.2 26.8 1.3 11.5 1 3.5 1.1 1.9 2.8 2.7 1.2 2 0.4 1.8-0.4 3.3 0.3 1.6 1.1 1.5 2.8 2.3 0.9 1.2 0.2 2.1-0.6 4.6 0 2.4 1.1 3.9 1 2.3 0.2 2.4-1.5 4.2-3.9 8.1-0.9 3.6-0.2 9.3 5.5 33.3-0.2 16.3 1.7 7.9 4 6.1 7.2 3 3.1 3.9 1.9 18.3 1.5 7.1 2.6 3.5 5.8 5.1 2.3 3.5 1 3.6 1.5 18.1-0.5 13.5 0.8 4 2.8 7.3 0.3 4 12.6 76.3-0.3 5.9-2.5 1.2-3.2-0.1-2.6 2.3 4.9 15.7 2.8 15.4 0.6 4.1 3.1 14.1 0.6 7-3.7 35.6 3.1 55.4 0.6 5.9 2.3 11.6 7.7 23.6 0.8 4.7-2 3.7-4.2 4.4-5 3.4-4.4 0.3-2.6-2.9-1.5-4.8-1.7-9.3-4.2-9.4-5.5-1.2-7.2 1.5-9.2-0.9-4.9-1.7-2.3-1.2-1.8-2-1.5-4-0.5-3.9-0.9-3.8-2.8-3.8-7-2.4-8.2 10-6.8-0.1-3.6 0.5-2.4 4.6-2.9 9.9-6.1 8.7-1.1 4.1-0.1 4.5 1.6 9.2-0.3 4.5-1.9 10.5 1.2 4.1 1.6 3.2 5.1 4.8 2.7 7 8.8 7.5-1.4 8.9-0.3 9.6 0.9 9.4 2.3 8.5 6.2 9.5 1 2.4 0.5 4.4 4 12.1 1.5 3 0.7 2.4-0.5 2.5-1.8 1.8-1.4-0.8-1.1-1.6-2.8-3-5-12-14.7-27-3.7-15-1.4-2.4-11.3-9.6-2.1-3-3.5-6.8-2.4-3.7-9.6-11.3-1.5-3.8-0.3-4.9 1.8-14.9-0.4-5.6-1.2-4.4-11.9-22-2.1-2.2-2.3-1.3-2.1-3.4-1.5-4.1-0.7-3.8 1.3 0 1.7 1.4 1.6-4.1 2.6-4.4 3.5-2.5 4 1.5-2.7-2.6-2.1-4.2-1.2-4.9 0-4.3 1.9-2.6 3-2.8 2-3.3-0.9-3.9 3.3-3.9 0.6-1.7-0.9-2.3 1.3-2.2-0.4-2-1.6-1.5-1.2-0.5 1.4-4.5-0.8-0.5-2.9 8-2.5 3.3-3.6-0.1-1.7-2.7 0.6-3.7 1.2-3.7-0.1-2.7-1.5 0-1.1 4-2-0.3-2-2.8-0.8-3.4 0.7-5.2 1.9-1.3 2.8-0.6 3.3-3.1-1.3-1.6-3.6 2.6-1.5-1.9 1.3-3.5 5.1-2.1 0-1.6-10 0.8-7.6 2.4-2-2 0.4-5.5 2.2-5 3.9-2-1.7-2.4 0.9-2.2 2.3-1.8 2.9-1.4 0-1.7-2.3 0.2-2 1.1-1.7 1.6-1.3 2.1-1.2-2.9-1-4.8-1-9.2-0.6-2.3-3.1-3.5-0.7-2.1 0-8.8-5.5-23.8-0.4-8.1 2.3 1-0.4-2.6-1.9 0.4-1.6 3 0 4.5-1.3 0-2.3-4-2.2-5.1-1.3-5.7-0.2-5.8 1-3.6 3.9-4 1.1-2.1-0.3-3.8-1.9-2-2.3-1-1.5-1.3-0.7-5.8 3.8-2.8 5.6-1.7 4.7-2.5 2.3-4.1 5-16.6-4.4 0-0.5 3.5-2.1 9 0.4 1.8-1.5 1.3-2.5 2.7-3.2 2.7-3.8 1.3-0.7 1.2-5.3 2.9-1.6 2.3 0.6 3.7 2.3 1.8 2.7 1 2 1.5-0.1 4.5-3.7 2.8-4.7-0.4-3.3-5.2-3.8-26.7-2.3-8.5-14.6-28.9-27.6-38.8-6.9-2.8-3.8-3.5-3-4.2-1.7-3.7-1.7 0.9-1.4-1.1-1-2.4-0.4-3 0.5-2.8 2-2.9 1.4-6.8 3.4-9.9 0.1-5.6-1.6 0-0.7 4.4-3.7 12.2-2.2 2.6-4.7 1.5-3 3.8-1.1 5.2 0.7 5.6-3.3-2.5-3.2-1.5-3.6-0.7-4.7-0.2 0 1.7 4.6 1.4 0.5 2.2-2.1 2-3.8 1-11.2 0.2 3.9 1.3 3.5 1.6 1.7 1.4-0.6 3.4-2.8 2-3.6 0.9-3.7 0-6.6-1.4-1.7 0.2-0.3-0.9 0-4.2-2.7-1-3.2-0.4-7.4-0.1 0 1.5 2.7 2.4 1 2.6-1.5 1.7-5-0.2 0 1.7 12.5 3.3 5.7 2.4 2.4 4.7-0.7 3-1.7 3.3-2.5 9-4.4 4.2-4 3.3-5.7 1.6-10.6 2.2-8.2-4.1-4.3-6.3-2.3-10-2.2-2.8-2.3-4.1-2.4-7.2-1.8-2-3.2 1 3.2 3.3 3 6.5 1.7 6.8-0.5 4.5-4.4 2.2-7 1.1-6.5-0.3-2.9-2.4-1.3-3.2-5.9-4.3-1.4-2.1-0.7-2.1-3.1-4.3-1.7-6.7-2.4-1-6.3 0.5-1-1.3-2.6-8.4-1.7-1.4-3.6-2.1-1.4-4.2-3.1-4.4-0.7-1.6-0.3-2.4-2.6-6.4-1.6-8-1.7-4.1-2-3.5-1.6-3.9-0.6-5.3-1.1-2.9-16.7-22.8-2.3-6.2-0.5-2.7 0-2.6 2.5-14.3 0.3-9.7 1.2-5.2 2.4-4.5 1.8-4.4-0.9-4.4 1.4 0-3.6-7.7-0.2-3.1 2.4-2-1.7-0.6 0.1-1.2-5.5 1.9-3.6-4.9-2.1-7-0.6-4.5 0.3-13.8 1.8-5.4 5.3-3.3 12.6 0.1 5.1-2.8 0.1-8.7-1-3.2-1.9-1.4 1.9-2.9 4.8-3.1 2.2-2.4-1.6-2.7 0.9-2 2.6-1.3 3.3-0.4 0.5-1.2-1.9-2.7-5.7-5.9 1.9-1.9 1.6-3.2 0.2-1.7-0.5-1.7-2.2-2.6-3.1-2.2-0.7-1.5 0.4-2.1 3.4-5.2 4.4-11.6 0.3-3.5-1.2-5.1 0.1-1.9 2.1-3.1 2.8-2.2 2.9-0.8 6.6 0.3 1.7-0.2 4.2-2 6.4 4.2 2.5 0.7 2-1.1 3-2.5 8.2-11.4 4.4-9.9 1.1-5.8-0.9-4.5 1.9-5.6 2.5-2.4 3.5-2.2 4.2-4.8 1.6-5-4.2-2.5 1.6-3.4-3.9-5.6 0.3-1.1-0.9-4.6 1.3-0.8 4.9-1.7 7.2-9.9 2.9 2.3 1.6 0.6 1.5-0.2 0.6-1.9-0.4-2.7 0-2.4 1.9-1.1 4.2-0.4 3.7-1.3 2.8-2 17.8 9.3 5.4 1 7.2-6 3-1.4 2.5-0.4 2.7 1.1 0 1.6-3.8 3.3-5.9 3.6-1.4 1.6 1.3 1.7 5.2 1.5 1.4 1.3-1.4 0.8-4.7 1-1.5 0.7-1.6 1.7-0.1 4 1.6 3.6 1 4-0.2 3 0.7 5.9 2.2 8 3.1 4-0.1 2.1-0.9 5.5z'
}, {
  id: 'sylhet',
  geo_code: '60',
  value: 0,
  d: 'M710.8 629.8l0.9-5.5 0.1-2.1-3.1-4-2.2-8-0.7-5.9 0.2-3-1-4-1.6-3.6 0.1-4 1.6-1.7 1.5-0.7 4.7-1 1.4-0.8-1.4-1.3-5.2-1.5-1.3-1.7 1.4-1.6 5.9-3.6 3.8-3.3 0-1.6-2.7-1.1-2.5 0.4-3 1.4-7.2 6-5.4-1-17.8-9.3 1.7-2.8 1.7-1.6 3.2-8.1 7.3-3.3 4.7-3.3-3-4.7 2.4-2.6 1.5-0.5 1.1-2.2-0.4-1.8-2.5-3.3-4.7-4.2 3.6-2.6 0.3-2.9-1.2-5.6-2.6-1.2-2.4-0.2-1.6-1-1.7-2 0.2-1.7 2.1-2.1 1.9-2.7 2.3-4.4 3-7.9-3.9-2.1-2.5-2.5-1.1-2.5-2.7-3.4-0.1-1.8 5-2.5 0.7-1.3 0.3-4.5 2.3-4 0.1-1.8-0.9-2.9-1.2-1.8-2.3-1.1-6.6-0.3-3.9 0.5-1.2-0.5-1.4-4.3 1.6-12.4-0.8-10.6-1.5-4.9-2.8-10.7-25.7 2.7-6.2-2.8-14.1-23.5 2.4-8.6 1.9-4 2.3-3.5 0.7-2.3 0.1-3.2-3.2-10.4 0.6-10.3 1.9-0.2 6.8-2.5 34.6-5.6 12 0.4 2.7-0.4 4.7-2.5 2.3-0.1 10.4 5.5 32 9.8 8.4 1 2.1-0.3 4.4-1.5 4.8-0.9 3.7-3 1.8-0.8 3.8 0.3 1.5 1.8 1.5 2.7 3.5 2.9 3.6 0.9 5.5 0.2 5.1-0.7 2.2-2.2 1.1-3.9 2.5-0.1 4.7 2 1.5-1.2 1.3-2.9 1.4-1.3 3.3-0.5 10.4 1 23.1-2.9 12 1.8 9.8-3.1 7 0.3 6.9 1.7 5.8 2.3 1.7 1.4 2.1 3.4 1.3 1.3 1.7 0.5 3.1 0.2 2.7 1.6 2.9-0.9 1.8 0.3 1.4 1.3 3.2 4.2 3 2.6 2.6 1.9 2.9 1.3 3.9 0.9 11.2 1.6 1.9 1.4 3.4 4.9 6.1 2.6 5.4 3.2 1.2 6.8 5.5 1.8 0 0.8 7 5.2 2 1 0.9 1.1-1.8 1.7 5.3 2.3 2 2 1.7 3.8 0.7 4.2-0.7 2.6-3 4.7-7.7 2.1-13.2 4.4-2.1-0.3-1.6-0.7-0.9-1.2-0.2-1.8-14.7-9-8.3-2.8-6.3 2.8-1.1 4 0.9 4.2 2.8 7.7 0.4 3.8-0.1 3.7-0.5 3.7-11 31-2.1 9.2-1 8.1-1.1 3.6-2.3 3.5-3.1 2.5-3.3 2-2.7 2.7-1.1 4.5 1.2 14.4-0.8 6.8-4.2 5.7-5.5 2.6-6.3 0.5-18-1.6-0.3 2.8 4.9 8.1 0.2 3.2-4.2-1.7-4.7-3.3-2-1.8-4.8 1.6-0.7 4.2 2.3 9.5-0.2 4.6-4.7 20.2-1.6 4.1-2.7 1.8-4.4-1.1-6.6-6.6-0.5-2.1-0.3-5.4-0.6-1.5-2.3-0.1-13.7-3-2.2 3.1 0.6 4.5 1.4 4.8 0.1 4.1-2.5 3.7-3.7 1.4-4.2-0.6-3.9-2.5-2-3.6-3.8-9.6-2.2-0.8-1 2.8-2.3 15-1.7 5-2.1 3.3-3.1 2.1-5 1.5-8.9 1.1-8-0.7-16.4-3.6-9 0.8-2.6 6.1-0.4 9-2.2 9.6-2.6 1.8-4-1.1z'
}, {
  id: 'rajshahi',
  geo_code: '50',
  value: 0,
  d: 'M359.5 352.6l-2.9 12.8-2 12.6-1.2 20 0.3 2 5.2 25.8 1.9 4.7 2.9 5.8 2.2 2.4 3.7 2.5 6.4 3.4 3.9 3.7 1.8 2.2 1.4 2.5 1.1 4.4 0.1 5-2.4 10.8-0.3 2.6 1.1 4.6 0 3-1.6 6-2.4 2.9-1.1 2.6 0.6 2.9 0.2 4.4-0.3 4.7-1.8 7.4-0.2 8.9-2 17 0 2.4 1.3 9.1-0.1 9.3 0.2 2 8 8.8 3 2.6 0.3 6.4 3.9 1 0.8 2.2-0.4 2.2 1 2.5-0.9 3.4-0.4 3.4 0.6 0.4-2.1 4-0.6 8.4-1.6 3.2-2 3.3-2.7 2.5-18.5 15.4-2.8 7.3-0.9 5.2 0.6 3.5 2.2 11 0 2.8-4.9 1.3-12 1.1-3.5 1.4-6.5 4.3-3.8 1.2-5.5-1.1-8.7-7.9-4.9-2.9-19.3-8.3-7.1-4.8-5.1-2.2-5.4-1.2-5.8-0.5-17.9 1.9-5.9-1.1-4.7-2.2-4.6-3-8.3-7.2-2.1-2.5-0.6-2.1 1-5.2 0-2.5-0.9-2.1-4.4-5.6-1.9-5.9-7.9-7.6-5-6.7-1.7-1.4-3.9-2-4.3-0.3-2.2 2.9-2.9 2-13.9 6.6-4 0.9-4.2-0.7-1.7-0.9-3.2-2.3-5.2-2.8-1.4-1.2-3.4-5.2-1-3.6 0.7-2 2.5-3.7 0.7-2.2-0.5-0.9-0.5-3.9-0.4-1-1.2-9.3-5-6.8-7.1-4.3-4.6-1.1-2.3 5.5-3.3 5-4.7 0.3-10.7-3.7-14-0.6-4.9-1.1-16-12.8-56.7-29.8-6.3-1.4-0.4-1.6-2-3.5-2.7-3.4-0.3-1.2 0-12.3-0.6-1.5-3.2-3.2-2.1-4.9-3.6-1.5-4.1-1.2 1.2-7.2 1.7-4.3 2.9-4.1 1-10.4 2.4-1 2.7-0.5 1.5-2.2 0.3-3.3 0.7-2.8 1.4-1.7 2.8 0.5 2-4.3 3-3 2.1-3.1-0.6-4.5-2.8-8.2-1-2.1-1.2-1.2 0-1.1 10.7-5.9 4-1.4 4.2 0.4 3.5 2.5 3.1 4 1.9 4.6 0.2 4.4 2.6 0.1 9.1 2.5 3.6 0.3 2-1.5 3.9-7 7.5-9.9 2.7-5.5 0.6-6.3 5-6.3 2.6-7.1 1.8-15.6-0.6-13.5 2.1-3.9 7.4-1.3 3.5 0.9 6.8 2.7 7.8 2.2 2.4-0.6 1.6-1 2.6-3 2-0.8 7.6 0.3 6.5 1.2 13 4.9 12.9 1.3 1.7-1.3 2.2-5.2 1.4-1.7 1.8-0.3 2.8 1.3 14.8 5.2 5.5 0.4-3.2-5.1 4-0.9 0.6-2.3-0.6-3.2 0.2-3.2 1.9-2.6 8.1-6 1.6-2.3 0.5-2.4-0.5-2.3-1.6-1.9 21.4 0.7 23.3 0 8.9 2.2 0.7 9.1 5.5 12.2 6.9 6.8 14.4-8.3 13 3 20.6 6.8 21.3 0 16.6 1.7z'
}, {
  id: 'rangpur',
  geo_code: '55',
  value: 0,
  d: 'M384.9 294.4l-3.6 0.7-3.1 2-1.9 3.5-4.9 11.8 1.9 13-1.2 6-3.2 4.7-2.6 3-2 3.2-4.8 10.3-16.6-1.7-21.3 0-20.6-6.8-13-3-14.4 8.3-6.9-6.8-5.5-12.2-0.7-9.1-8.9-2.2-23.3 0-21.4-0.7-10.5 0.5-5.1-0.7-4.9-4.8-4.5-0.3-2.2-0.6-1.6-1.3-5.1-6.4-0.9-2.6-0.2-2.3-0.6-2-2.3-1.7-0.1-1.5 3.7-8.5-0.3-5.1-2-3.1-2.7-2.5-2.6-3.2-1.9-1.6-6.6-2.6 0.2 4.2-2.2 1-4-0.4-1.7 0.3-2.3 1.9-3.8 4.3-2.5 0.7-4.5-1.1-7-4.6-4.2-2-9.2-0.4-4.5-0.9-2.1-2.1-1.7-3.5-5.8-4.5-2.2-4.8-8.2-4.1-3-3-0.9-14.7-5.7-6.5-15.7-10.7-13.1-15.3-7-3.6-9.6 2.8-3.6 2.1-4.3 1.9-4 0.2-2.8-2.9-1.5-4.6-1-2.1-3.4-3.8 0.3-4.3-1.5-3.6-1.6-10.7 2.9-3.6 4-13.6 4.2-8.1 5.4-4.3 1.5-4.6-0.3-2.6-2.5-2.2-0.8-1.2-0.3-2.3 1-2.6 2.4-7.8 1.8-2.9 7.1-4.6 1.9-1.7 2.9-3.3 2.3-0.9 4.5-1 12.6-4.3 3.8-2.4 1.7-3.6-0.3-8.7 0.8-3.5 3.2-4.7 3.3-3 10.2-6.4 1.6-2.1 1-2.2 1.2-1 3.7 2.1 2 0.1 3.8-0.7 4.8 0.8-0.5-6.1-4.3-13.1-3.1-5.2-5.8-2.8-12.4-2.4-5-2.2-1.6 0.1-0.7 1.6-0.6 5.6-1 1.4-2.8-0.8-1.7-3.2-0.2-4 1.2-3.2 2.8-4.8 4.4-15.5 1.6-3.4 2.6-4.5 2.8-2.9 2 1.3 0.3 4.5-0.2 5.1 0.6 4.8 2.9 3.2 7.6 2.4 3.5 1.6 2.8 3.3 2.7 2.2 4.1 4.4 4.3 3 4.9 2.1 1.8 0.2 4.6-0.1 2.6 1.2 2.6 5.1 1.8 2.2 4.6 2.6 5 1.2-0.9 2-0.5 2.1 0.6 1.6 3.5 1.4-0.3 4.2 1.3 1.8 5 2.6 2.9 2.3 0.5 3-2 4.4-2.8 2.4-7.9 4-1.6 1.8 3.8 2.7 18.2-6.7 7.8 3 1.7 3.7 1.4 4.1 2.1 3.4 3.6 1.7 3.4-1.4 3.3-7.9 4.3-3 5.9 1.1 9.5 9.6 6.1 2.1 9.6-2.4 4.3-3.1-1.1-4.5-2.4-0.7-2.5-0.1-1.6-1.6 0.8-5.1-2 1.3-2 0.5-1.7-0.6-1.4-1.9-2-6.9-5.3-2.8-6.2-2.1-4.5-4.8-0.1-4.1 1.7-4.5 2.7-4.1 2.8-2.6 3.5-1.7 2 0.6 2 2 3.4 2.6 2.5 1.2 3.2 3.8 2 1.6 2.4 1 4.7 1.2 1.9 1.6 1 2.9-0.7 2.1 0.3 1.6 3.6 1.6 5.1 1.5 1.6 1.7 0.1 3.3-1.9 1-3.1-1.5-2.5 0.3 0.2 6.5 1.4 3.9 4.3 7.3 1.6 3.8 1.8 14.6 1.6 4.3 2.7 3.1 14.3 6.3 3.2 2.1 2.2 3 1.4 4.6 1.8 2.2 7.6 3.5 5.2 6.1 3.9 2.7 4.4 2 3.5 0.4 3.5-2 2.6-2.4 2.5 0 3.3 4.9 3.1 0.4 1.2-0.4 11.7-1 3.1 1 3.1 5.3 1.9 2.6 2.2 1.2 2.9-0.6 1.5-2.2 0.6-3.1-0.2-3.2 1.8-6.6 9.5-7.9 1.8-4.1-1.6-3-2.8-0.1-3 0.6-2.2-1.1 0-2.8 2.4-2 3.1-1.6 2.6-1.7-4-0.5-3.6-1.7-1.4-3 2.3-4.4 2.9-2 1.5-0.2 4.5 1.4 0.1-1.2-1.4-2.8-0.5-7.3 1.5-2 4.7-1.6 3.9 0.8 1.2 3.6-0.3 10.2 0.2 1.5 2.6 1.2 1.6 0.2 4.3-0.4 2 0.2 2.5 2.1 1.3 3.6 1 3.9 1.7 3.3 2.8 4 0.3 3-0.5 3 0.3 4.2 1.2 2.2 4.4 5.8 2.9 4.9 1.3 0.4 1.4-0.6 1.5-1.6 1.1-0.2 3.1 4-0.6 3.3-3.1 2.5-4.2 1.5 4.1 2.5 3.3 0.3 1.8 1.4-1 5.7-9.3 16.5-0.8 5.9 4 21.6 4.9 12.1 2.2 9.4-2 16.9-0.4 18-4.9 18.2-0.3 2.4z'
}];
var districts = [{
  id: 'rajshahi',
  geo_code: '5081',
  value: 0,
  d: 'M120.73 789.591l3.729-8.62-8.7-11.084 1.243-16.009-7.456-8.62 1.242-9.852 24.856-7.389 14.913-7.389-1.243-9.852 23.613 1.232 3.729-3.695-3.729-6.157-6.214 3.694-8.7-4.926 16.157-8.62 18.642 6.157 1.242 9.852 7.457 2.463 7.457-8.62 6.214 4.926-1.243 13.546 11.185 4.926 27.34-14.778-1.242-2.463 13.67 4.926 7.457 6.158 9.943-1.232 8.699 8.62 9.942-3.694v12.315l1.243 6.157 9.942 4.926h6.214v7.39l-2.486 6.156-13.67 1.232-7.457 6.157h4.971l7.457 7.39-11.185 8.62 1.243 6.157h0l1.243 33.25-12.428 8.62-2.486 3.695h0l6.214 12.315 9.942-2.463 1.243 7.388 2.486 6.158 3.728 3.694-16.156 6.158-4.971 4.926 6.214 4.926-7.457 3.694 4.971 3.694-4.97 3.695 13.67 2.463 2.485 4.926-9.942 2.463-1.243 4.926H277.32l-17.398-7.39-11.185-9.851-4.972-2.463-8.699-2.463v-4.926l9.942-2.463 1.243-25.86-8.7-18.473-9.942-1.232-4.97 7.39-18.642-1.232-11.185-6.158-8.7 7.39-11.185-6.158-11.185-11.083-4.97 1.231-1.244-6.157-11.185-2.463-12.427-6.158-11.185-16.009z'
}, {
  id: 'nilphamari',
  geo_code: '5573',
  value: 0,
  d: 'M256.193 140.601l6.214-6.157 6.214 1.231 6.214 4.926-4.971 13.546 7.456 2.463 6.214 7.39 7.457-1.232-1.243-8.62-6.214-3.695 7.457-8.62 13.67 1.231 6.214 8.62 4.972 6.158 3.728 6.157 2.485-3.694h11.185l2.486 2.463 7.457-3.695v8.62l1.242 14.778 8.7 6.158 8.7 4.926 2.485 6.157-1.243 7.389-2.486 18.472 3.729 12.315 2.485 13.546 9.943 8.62 11.185 7.39 8.699 7.388-3.728 9.852-3.729 8.62-3.728 4.926-7.457-8.62-12.427 11.083 1.242 13.547-9.942-9.852-6.214 12.315-19.884-4.926-13.67 3.694 4.97 12.315-6.214 7.389-3.728 6.157-11.185-1.231-9.942-8.62h-6.214v-13.547l-9.942-2.463v-29.555l-4.971-6.158-4.971-8.62-13.67-3.695 1.242-6.157-3.728-2.463v-9.852l-1.243-3.694 4.97-6.158-3.727 6.158 7.456-11.083 7.457-3.695v-20.935l3.728-7.389v-4.926l-1.243-17.24 3.729-7.39-13.67-14.777V140.6z'
}, {
  id: 'panchagarh',
  geo_code: '5577',
  value: 0,
  d: 'M120.73 87.647l-2.485-8.62-2.486-6.157 6.214-8.62 4.971-11.084 4.972-14.778 9.942-14.778 2.485 16.01 1.243 8.62 9.942 9.852 9.943-2.463 2.485 8.62 9.942 2.463 1.243 7.39 9.942 3.694 1.243 4.925 9.942 2.463 6.214-7.388 3.728 9.851 4.972 6.158 7.456 4.926 2.486 4.926 6.214-2.463 3.728 3.694-3.728 8.62 3.728 3.695 4.971 3.694v2.463l9.942-1.231v4.926l2.486 4.926h-16.156l1.243 11.083-11.185 2.463-1.243 4.926 9.942-1.232 8.7-3.694 8.699-7.389 6.214 4.926-1.243 11.083 4.971 8.62 6.214 8.621-2.486 8.62v23.399l-3.728 9.851 2.486 12.315-6.214 8.62-8.7 12.315-9.942-2.463-13.67-1.231-4.972-9.852-6.213-4.926 7.456-13.546-4.97-9.852-6.215-7.389-9.942-3.694-4.971-4.926-3.728-7.39-6.214 2.464s-1.554-1.232-4.971-2.463c-3.418-1.232-8.7-2.463-8.7-2.463l-6.214-2.463-6.214 4.926-9.942-2.463-8.7-3.695-7.456 4.926-1.243 6.158s-4.039-.616-8.7-2.463c-4.66-1.847-9.941-4.926-9.941-4.926l-2.486-3.695 8.7-4.925 4.97-6.158-3.728-7.389v-17.24l13.67-1.232 4.972-4.926 4.971-7.389 11.185-3.694 2.486-8.62 6.214 9.851 6.213-3.694 4.972-8.62-4.972-6.158-4.97-7.389v-8.62l-8.7-7.389-11.185 2.463-6.214-9.852-6.214 4.926-7.457-1.231-6.213 9.851z'
}, {
  id: 'thakurgaon',
  geo_code: '5594',
  value: 0,
  d: 'M54.863 322.86l-6.213-11.083-7.457-9.852 4.97-11.083-12.427-2.463 3.729-19.704 8.699-6.157-1.243-7.39 4.971-9.851 14.914-9.852 4.97-13.546-11.184-6.158 6.214-11.083 2.485-11.083 13.67-4.926v-12.315l18.642 2.463 13.67-3.695 18.643 12.315 3.728-9.852 12.686-2.64 10.927 3.872 9.942-1.232 24.855 6.158 9.943 11.083 8.699 3.695 12.428 14.777-8.7 12.315 2.486 8.62-6.214 6.158-2.486 9.852h-8.699l-6.214-9.852-3.728 7.389h-7.457l-3.728 13.546 4.97 4.926-6.213 1.231-7.457 12.315-2.485 7.39-3.728 7.388 4.97 6.157-7.456 1.232h-4.971v-6.157l-16.156 1.231v9.852h-6.214l-1.243 12.315 7.457 3.694-4.971 4.926v11.083l6.214 3.695 7.456 6.157-1.243 8.62-8.699 1.232-7.457-7.389-6.214-3.694v-4.926l-8.699-8.62h-7.457l-2.485-8.621-13.67-7.389 1.242-6.157-1.243-3.695-11.185 3.695-7.456 6.157-6.214-7.389-14.914 12.315z'
}, {
  id: 'lalmonirhat',
  geo_code: '5552',
  value: 0,
  d: 'M340.702 144.295l-3.728-9.851-9.943 7.389-4.97-7.39 7.456-6.157-3.728-6.157-6.214-1.232-3.729 3.695-12.427-6.158-2.486-11.083 12.428-18.472 11.185-3.695v7.39l3.728 2.462 11.185 3.695 7.457 7.389 16.156-1.232 3.728 8.62-7.456 1.232 6.214 7.389-6.214 7.389h14.913l4.971 8.62-1.243 3.695h-7.456l-7.457-7.39v11.084l6.214 7.389 9.942 11.083 1.243 7.389-3.728 3.694 11.185 22.167 19.884 3.695 9.942 9.851 1.243 7.39-4.971 2.462 1.243 2.463 8.7 1.232 9.941 4.926 8.7 9.851 16.156 3.695 7.456-13.546 4.972 1.231 1.242 6.157 6.214 2.463 4.971 4.926 4.971-3.694-2.485 23.398 9.942 1.232 13.67 14.777 2.486-1.231v7.389h11.185l1.243 3.694-11.185 14.778-6.214 1.231 1.243 14.778-13.67 9.852-3.729-1.232-1.243-11.083-3.728 1.232-2.486 6.157-9.942-1.231-7.457-2.463-1.242 2.463-24.856-14.778s6.214-7.39 0-8.62c-6.214-1.232-12.428-4.926-12.428-4.926v-8.62l-7.456 1.23-11.185-8.62-12.428-4.926-7.457-8.62-15.937-5.22-7.675-12.02-6.214-28.325 3.728-18.472v-7.389l-19.884-12.315 1.242-24.63 9.943-3.694-6.214-8.62-7.457-1.232z'
}, {
  id: 'dinajpur',
  geo_code: '5527',
  value: 0,
  d: 'M218.91 231.73l-6.214 6.158-2.486 9.852-8.699 2.463-7.457-11.084-2.485 8.62h-8.7l-3.728 13.547 6.214 3.695v3.694l-7.457-1.232-11.185 24.63 3.729 6.157-2.486 3.695-9.942 1.231-1.243-7.388-3.728 2.462-13.67-2.462 2.485 12.314-6.214-2.463-1.243 11.084 6.214 3.694-3.728 8.62 1.242 8.62 12.428 9.853v9.852l4.971 3.694-1.242 11.083-4.972 2.463v9.852l7.457 4.926h11.185v9.852l8.7 6.157 3.728 8.62 14.913 1.232 8.7-2.463 2.485 6.158 11.185 1.231v4.926l17.399 2.463 4.971-4.926 6.214-3.694s14.913 6.157 11.185 1.231c-3.728-4.926-3.728-13.546-3.728-13.546l7.456 7.389 7.457-7.39v12.316l6.214 2.462 4.971 11.084-4.971 12.315-6.214 3.694 7.457 3.694 1.242 9.852 16.157 16.01 3.728-6.158 3.728 4.926v4.926l31.07 2.463 3.728 4.926-1.243 8.62 13.67 7.39 12.428-2.464 6.214 9.852 17.4-2.463 37.283 8.62 9.942-4.926v-8.62l-9.942-11.083-1.243-11.084-13.67-11.083 2.485-4.926-3.729-2.463h-6.213l-1.243-7.389h-11.185l-7.457-8.62 3.728-2.463-12.427-7.389-8.7-34.481-4.97-12.315-18.643-3.694-8.699-19.704-17.399-11.083-2.485-17.241-13.67-3.695-4.972-4.926-7.457-1.231 3.729-13.546h-12.428l-1.243-29.556-9.942-17.24-11.185-2.464-3.728-9.851v-11.084l-21.128-3.694-8.7-11.083z'
}, {
  id: 'rangpur',
  geo_code: '5585',
  value: 0,
  d: 'M421.483 492.804v-9.852l-16.157-11.083 3.729-6.157-9.942-2.463v-4.926l-12.428-1.232-9.942-8.62 6.213-1.231-16.156-8.62-9.942-45.566-19.884-4.925-8.7-19.704-14.913-8.62-4.971-19.704 12.428-12.315-3.729-12.315 13.67-3.694 21.128 3.694 3.728-9.852 12.428 9.852-1.243-14.778 12.428-12.314 4.971 9.851 14.914-22.166 18.641 12.315h8.7v8.62l13.67 4.926 4.971 11.083 19.885 12.315 2.485-4.926 14.914 7.389 3.728 3.694-1.243 3.695 11.185 2.463 3.728 4.926-11.185 4.926 9.943 3.694 3.728 4.926v8.62l-3.728 2.463v6.158l7.456 3.694 1.243 3.695-4.971 3.694-9.942 7.389 3.728 6.157-6.214 3.695-3.728-6.158-7.457-2.463-1.243 3.695-9.942-1.232-4.97 6.158 12.427 11.083-1.243 8.62 7.457 4.926-8.7 11.084-8.7 1.231-8.698 9.852-12.428 23.398v2.463l3.728 6.158-6.214 2.462 13.67 9.852h-32.311z'
}, {
  id: 'kurigram',
  geo_code: '5549',
  value: 0,
  d: 'M501.02 363.499v-8.62l-11.185-9.852 11.185-1.232-7.456-7.389h-8.7l-3.728-11.083 8.7-7.389v8.62l6.213 4.926 11.185-9.851 1.243-16.01 16.156-13.546-1.243-4.926-11.185-1.231v-8.62l-4.97 3.694-12.429-17.24h-9.942l3.728-22.168h17.4l2.485 4.926-1.243 6.158 7.457 7.389 2.485-4.926 6.214-2.463v-6.158l-6.214-1.231-1.242-11.083 13.67-9.852h11.185v-6.158l-3.728-2.463-1.243-9.852-3.728 1.232-2.486 4.926-2.485 3.694-4.972-2.463 4.972-8.62-2.486-4.926-2.486-4.926v-6.157h4.972l7.456-8.62 2.486-6.158-1.243-7.389 3.728-3.694h11.185l7.457 6.157-4.971 4.926-1.243 6.157-1.243 2.463 3.729 7.39 4.97-3.695h13.671l3.729 11.083 12.427 20.935-4.97 2.463v7.39l7.456 2.462 6.214 18.472h12.428l-12.428 11.084 12.428 3.694 8.699 3.694v3.695l-6.214 6.157-11.185 9.852 1.243 13.546-6.214 8.62 4.971 8.621 4.971 8.62-7.456 7.39v7.388l6.213 1.232-2.485 9.852 11.185 8.62v32.018l-6.214 12.315-1.243 19.704-2.485 11.083-3.729 3.695-1.242 13.546-6.214-3.694-8.7-4.926v7.388l4.971 3.695-11.185 8.62-4.97-1.231v-4.926l-2.486 2.463-9.942-1.232v-6.157l4.97-2.463-4.97-1.231v-6.158l3.728-9.852L549.489 430l8.699-3.695-4.971-7.388v-4.926l-11.185-9.852h-8.7l-2.485 6.157-3.728-9.852-14.914-7.389-4.97-13.546-6.215-6.157v-9.852z'
}, {
  id: 'gaibandha',
  geo_code: '5532',
  value: 0,
  d: 'M399.113 512.508l21.127 7.389 9.942-4.926 2.486-8.62-9.943-13.547 28.584 1.232-11.185-11.084 8.7-1.231-6.214-9.852 17.399-27.092 6.213-7.39 6.214 2.464 9.943-13.547-8.7-4.926 1.243-11.083-11.185-8.62 3.728-6.158 9.942-3.694 9.943 2.463 1.242 9.852 9.943-4.926-6.214-8.62 14.913-8.62 9.942 13.545 8.7 6.158 4.97 11.083 3.73-7.389h7.456l9.942 8.62v4.927l6.214 6.157-12.428 6.157 18.642 3.695-3.728 3.694v11.084l2.485 2.462-3.728 1.232v6.157l9.942 1.232 4.971-4.926v6.157l3.728 2.463v19.704l6.214 13.546 1.243 8.62-8.7 12.315-6.213-1.231-8.7 7.389-1.242 11.083-8.7 12.315-7.457 8.62V563l3.729 6.157 4.97 1.232-6.213 3.694-2.486 7.389-2.485-4.926-13.67-1.232-11.186 3.695-2.485 6.157h-6.214l-2.486-4.926-18.641-3.694-4.971-6.157-3.729-1.232-3.728 4.926-6.214-3.694-3.728-1.232-2.486 4.926-9.942-1.231-3.728-12.315h-4.971l-3.729-3.695-13.67-1.231-4.971 6.157-7.457-6.157v-3.695l-9.942-13.546h-3.729l-4.97-6.157-2.486-6.158 6.214-13.546z'
}, {
  id: 'joypurhat',
  geo_code: '5038',
  value: 0,
  d: 'M335.73 636.887l-1.242-22.166 2.486-2.463 1.242-27.093-7.456-7.389h-6.214l-2.486 4.926h-4.97l-4.972-9.851v-6.158l3.729-1.231 1.242-18.473-7.456-1.231 3.728-2.463-4.971-9.852 6.214-6.157-1.243-8.62 2.486-17.241 14.913-4.926 4.97 1.231 11.186 8.62 13.67-2.462 6.214 8.62 17.4-2.463 13.67 4.926-4.971 9.852 6.214 9.852 6.213 4.926 8.7 12.314-1.243 3.695 11.185 7.389v4.926l-7.457 6.157-4.97 2.463 4.97 7.389-7.456 2.463 2.485 4.926-7.456-3.695-6.214 17.241h-4.971v9.852l3.728 3.694-1.243 4.926-6.214-1.231v-3.695H375.5l-1.243-8.62-8.7-3.695-1.242 17.241h-3.729l1.243 4.926 7.457 4.926v3.694l-11.185 7.39-3.728 2.462-6.214-4.926-6.214 7.39v-4.927h-6.214v4.926l-2.486-3.694h-8.7v-7.389l11.186-1.232z'
}, {
  id: 'naogaon',
  geo_code: '5064',
  value: 0,
  d: 'M323.303 646.74v-8.621l12.428-1.232-2.486-22.166 4.971-1.232-1.242-25.86-7.457-12.316h-2.486l-4.97 6.158-6.214 1.231-6.214-11.083v-4.926h4.97l3.73-19.704h-13.671l7.456-2.463-7.456-9.851 4.97-6.158-9.942-1.231h-4.97l-16.157-9.852-3.728 8.62-8.7 6.158h-2.485l-6.214-7.39-6.214 3.695-14.913-8.62-8.7-2.463-2.485 4.926-23.613-1.232-6.214 12.315h-6.214v-7.389l-3.728-3.694-3.728 4.926-4.971-6.158h-7.457l-6.214-4.926-2.486 4.926-8.699 3.695h0l-1.243 9.852 9.942 4.926v3.694l-8.699 3.694v17.241l2.486 3.695-6.214-1.232-1.243 11.083 6.214 4.926-4.971 6.158-6.214 3.694v7.39l-6.214 1.23v4.926h8.7l7.456 7.39 1.243 13.546h3.728v-4.926l1.243-4.926h4.971l8.7 8.62v4.926l-8.7 14.778-6.214 2.463-9.942 1.231-1.243 3.695-11.185-2.463-3.728 7.389 8.7 4.926 4.97-2.463h14.914l-4.971 7.388 6.213 2.463 12.428 1.232 3.729 7.389-6.214 1.231-6.214-2.463h-4.971l-1.243 3.695 8.7 2.463 7.456 3.694 1.243 3.695 6.214 3.694 13.67 3.694v8.62l6.214 2.464 7.457-9.852 6.214 8.62-1.243 13.547 4.97 4.926 1.244-2.463h6.214l7.456-3.695 17.4-12.315h4.97l1.243 4.926 8.7-1.231h0l6.213 7.389 2.486-2.463h8.7l7.456 8.62 1.243-2.463 7.456-1.231 3.729 4.926V739.1l6.214 4.926 6.214 1.232 13.67 1.231v7.39l2.486 2.462h4.97l1.243-3.694v4.926h7.457l2.486 7.388 4.97-6.157 3.73 1.231 8.699-7.388v-12.315l-3.729-2.463v-8.62l9.942-14.778 3.729-6.158-1.243-11.083 2.486-9.852-6.214 4.926-13.67 1.232 1.242-11.084-8.7-14.778h-2.485l-9.942 9.852-3.729-1.231-11.185 9.852-1.242-27.093-4.971-2.463 7.456-9.852z'
}, {
  id: 'chapainawabganj',
  geo_code: '5070',
  value: 0,
  d: 'M174.17 689.841l-7.457-6.157-8.7-2.463 1.244-4.926 17.399 3.694-3.729-7.389h-11.185l-11.185-4.926 6.214-7.388-11.185-2.463-4.971 4.926-9.942-4.926 2.485-8.62 9.943 3.694 2.485-4.926 13.67 1.231 3.729-4.926 9.942-16.009-12.428-12.315-3.728 11.084-7.457 1.231 2.486-12.315-7.457-8.62-7.456-1.232-3.729 8.62-14.913-1.23-2.486 9.851h-3.728l-1.243 4.926h8.7v6.158l-4.971 7.388-2.486-7.388h0l-6.214 6.157-2.485-6.157-7.457-4.926-3.728 7.388 3.728-12.314-12.428-8.62 1.243-7.39-8.7-1.231-1.242 3.694h-9.942l-9.943 6.158-1.242 6.157 6.213 6.158 2.486 17.24-22.37 14.778 2.486 9.852-7.457-1.232-3.728 3.695-1.243 9.852-1.243 8.62-1.243 6.157-6.214-1.231-6.213 3.694 3.728 3.695 6.214 4.926-1.243 4.926 13.67 8.62-1.242 7.389 7.456 7.389-3.728 11.083 4.971 9.852 6.214 7.389h8.7l7.456 7.389 4.971 6.157 8.7-1.231 31.07 9.852h12.427v-6.158h-1.243l-6.214-9.852v-17.24l-6.214-7.39v-11.083l14.914-7.389 9.942-1.231h0l13.67-8.62-1.242-9.852h26.098l2.486-2.463-4.972-3.695-4.97 2.463-8.7-4.926 16.156-11.083z'
}, {
  id: 'bogra',
  geo_code: '5010',
  value: 0,
  d: 'M322.06 683.684l-1.242-25.861-4.971-3.695 9.942-8.62h7.456l3.729 8.62 1.242-8.62h3.729v7.389l8.7-11.084 6.213 6.158 14.913-12.315-12.427-12.315 6.214 2.463 1.242-18.472 7.457 3.694 1.243 7.39 13.67 1.23v4.927h9.943l-1.243-7.39-6.214-3.694V606.1l6.214 1.232 7.456-19.704 8.7 4.926-3.728-7.389h8.699l-6.214-8.62 12.428-7.389 1.243-8.62-4.971-1.232 4.97-4.926 13.671 2.463 8.7 4.926 2.485 11.084 11.185 2.462 2.486-6.157 11.185 6.157 3.728-7.388 9.942 9.851 14.914 2.463 6.213 6.158h4.972l3.728-8.62 21.127-2.464 3.728 6.158 3.729 1.231-3.729 9.852h4.972l2.485 8.62-4.971 7.39 4.971 3.694-2.485 6.157 4.97 7.39 1.243 8.62-6.213 1.231v11.083l9.942 11.084h8.7l3.728 6.157-2.486 3.694h-17.399l-2.485 3.695v7.389h-2.486v8.62l-12.428 17.24-8.7-8.62-6.213 3.695-4.971-4.926v6.157l-4.971 4.926-1.243 9.852 4.971 2.463-2.486 6.158 1.243 2.463 7.457-1.232 7.457 6.157-4.972 6.158 8.7 4.926-4.971 6.157h-7.457l-1.243 4.926-7.456-2.463-4.971-7.389-1.243 6.158h-7.457l-3.728-4.926-9.942 4.926-8.7 1.231-9.942-6.157-24.856 1.231v-6.157l-6.213-8.62h-3.729l-7.456-7.39-9.943-1.23-4.97 3.694 2.485 9.851-1.243 3.695-13.67-11.084v-4.925l4.97-3.695-2.485-6.157-7.457 6.157-3.728-3.694-6.214 13.546-8.7-17.24 6.215-7.39-1.243-18.472-6.214 6.158-12.428-1.232 1.243-6.157-11.185-18.473-8.7 9.852-3.728-4.926-12.428 11.084z'
}, {
  id: 'natore',
  geo_code: '5069',
  value: 0,
  d: 'M289.748 904.119v-6.158l12.428-1.231-2.486-6.158-16.156-2.463 4.971-4.926-4.97-2.462 7.456-3.695-4.971-7.389 19.884-7.389-6.214-9.852v-7.388l-12.427 1.231-4.971-12.315 16.156-11.083-2.486-39.407 12.428-8.62-8.7-8.621h-7.456l11.185-7.389 12.428 2.463 4.97-9.852-1.242-4.926h8.7l-1.244 6.158 7.457 6.157 9.942 1.231 8.7 1.232 11.185-7.389 1.243-13.546h-4.972v-11.084l9.943-12.314 8.7 14.777 4.97-12.314 4.971 2.463 7.457-7.39 3.728 4.927-7.456 8.62 14.913 11.083 1.243-4.926-4.971-6.157 6.214-6.157 11.185 2.463 7.456 6.157 7.457 6.157 3.728 8.62 3.729 3.695-21.128 28.324-12.427 14.778 7.456 3.694 2.486 7.39 6.214 3.694 1.242 23.398-9.942 9.852v6.157l-6.214-1.231-11.185 22.166-8.7 4.926H384.2l-3.728 8.62-11.185 8.62-22.37 4.927-4.971-4.926-3.729-1.232-4.97 8.62v8.621l-14.914-1.231-12.428-3.695-4.97 6.158-11.186-2.463z'
}, {
  id: 'sirajganj',
  geo_code: '5088',
  value: 0,
  d: 'M426.454 826.535v-18.472l-6.214-4.926v-4.926l-8.7-7.389 33.555-40.638-2.485-4.926h22.37l8.7 7.389h8.699l11.185-6.158 9.942 4.926 2.485-8.62 4.971 9.852 8.7 2.463v-6.158h6.214l6.214-4.926-9.943-6.157 4.972-4.926-8.7-7.389-7.457 1.232-2.485-1.232 6.214-6.157-6.214-3.695 3.728-13.546v-8.62l6.214 6.157 7.457-2.463 7.456 7.389 16.157-17.24-2.486-7.39 2.486-12.315 14.913 1.232 4.971 6.157 3.728 3.695 2.486-4.926h3.728l6.214 6.157 3.728 1.232 1.243 7.389-7.456 1.231-1.243 3.695 7.456 6.157v18.472l-2.485 9.852h-7.457l6.214 7.389 1.243 8.62-6.214 3.695-1.243 7.389-4.97-1.232-6.215 7.389 6.214 8.62v9.852l-8.7 6.158-3.728 6.157 17.4 18.472-7.457 7.39 1.242 4.925 8.7 6.157 6.214 9.852-2.486 35.713 3.728 4.926-3.728 3.694v4.926l3.728 1.232 4.972 4.926v3.694l3.728 3.695-1.243 14.777-8.7 17.241-16.155 6.158h-8.7l-9.942-12.315-14.913-11.084h-11.185l-16.157-13.546-12.427-2.463-1.243-6.157 6.214-2.463 1.243-8.62-4.972-2.463 3.729-2.463v-4.926l-4.971-6.158-3.729 2.463-11.185 2.463-3.728-2.463v-8.62l4.971-2.463s0-7.389-4.971-7.389h-6.214l-3.728 6.157h-2.486l-2.485-7.388v-9.852l-11.185-7.39-9.942-2.462-17.4-3.695z'
}, {
  id: 'pabna',
  geo_code: '5076',
  value: 0,
  d: 'M333.245 906.582v-8.62l4.971-8.621 6.214 6.157 24.856-4.926 12.428-9.851 2.485-9.852 7.457 2.463 11.185-6.158 7.457-22.166 7.456 3.694 1.243-9.852 9.942-9.852 26.098 6.158 8.7 3.694v12.315l3.728 7.389 8.7-4.926 7.456 2.463-4.97 3.694v9.852l4.97 3.695h11.185l4.972-6.158 4.97 8.62-7.456 6.158h6.214v7.389l-7.457 3.694 2.486 8.62 11.185 1.232 16.156 13.546 11.185-1.231 16.156 13.546 8.7 12.315-12.428 2.463v7.389l-4.972 1.231 1.243 11.084 6.214 7.389 9.942-2.463 4.971 14.777h-4.97l-9.943-11.083 3.728 14.778 14.914 2.463 11.185 7.389-11.185 3.694-6.214 3.694-14.913-1.231-14.914-6.157-17.399 4.926-11.185 4.925-29.826-18.472-4.971-12.315-14.914-16.009h-6.214l4.971 12.315-6.213 7.389-13.671-2.463-8.7-12.315-12.427-13.546-4.971-2.463h-17.4l-7.456-4.926h-13.67l-7.457-1.231-9.942 8.62v-6.158l-9.942-3.694-4.972-9.852 2.486-16.009-7.457-8.62z'
}, {
  id: 'kushtia',
  geo_code: '4050',
  value: 0,
  d: 'M231.338 883.183h13.67l12.428 11.084 17.399 9.852 13.67 1.231 13.671 2.463 4.971-8.62 9.942 6.157h16.156l7.457 13.546-2.486 11.084 3.729 11.083 4.97 1.232 6.215 1.231v7.389l11.185 4.926 3.728 9.852 4.971-6.158 6.214 3.695 7.457 8.62 17.399-1.231-12.428-11.084 14.913-3.694 13.67 9.852-9.941 3.694 1.242 7.389 11.185 8.62 7.457 4.926 7.457-1.231 4.97 2.463-1.242 11.083-1.243 17.24-8.7 9.853 2.486 6.157h-8.7l-14.912-9.852-3.729-1.231-2.485 7.389h-11.185l-6.214 8.62-7.457-2.463-9.942 8.62-1.243-11.083h-7.457l1.243-7.389-8.7-2.463-1.242 4.926 6.214 8.62-8.7 2.463-.728 8.335-9.214 3.98v-16.009l-1.243-11.083-4.97-6.158-4.972 3.695-6.214 8.62-6.214-14.778-9.942-2.463 6.214-7.389-11.185-2.462-8.7-6.158 4.972-4.926v-4.926l-7.457 1.232-4.97-3.695 8.699-4.926-3.729-9.851-4.97-6.158-8.7 4.926-3.729-12.315-3.728-4.926h-3.728v9.852l-13.67-14.778h7.456l4.97-2.463-7.456-7.388-6.214 1.231-3.728 2.463-1.243-7.389 8.7-2.463-11.185-6.157 7.456-3.695-14.913-11.083-3.728-29.556z'
}, {
  id: 'rajbari',
  geo_code: '3082',
  value: 0,
  d: 'M440.124 1007.563v-16.01l-6.214-4.925 7.457-3.695 17.399 1.232 9.942 1.231 6.214 7.39v8.62l2.485 8.62 18.642 11.083-4.971-13.546 9.942-1.231 2.486 6.157 6.214 3.694 17.399-11.083 6.213 3.694-1.242 6.158 6.214 7.389v-9.852l27.34-1.232 13.671 2.463 8.7 11.084 1.242 13.546-11.185-8.62-8.699-11.084h-29.827l-1.242 4.926h24.855l12.428 8.62 16.156 12.315 6.214 4.926 4.97 2.463-6.213 2.463-1.243 6.158h-12.427l-1.243 6.157-8.7-2.463v17.24l9.943 6.158-2.486 6.158h-8.7l-2.485-6.158-2.486 6.158-12.427-1.232-2.486-14.778-14.913 13.547h-6.214l-2.486-11.084h-4.97l-2.486 4.926-12.428-6.157-2.486 4.926 7.457 4.926-7.457 3.694-4.97-1.231v-6.158l-9.943-1.231-4.971-13.547-12.428-8.62-1.243-7.389-17.398-1.231-2.486 3.694-14.913-13.546-2.486-7.389-3.728-7.389 8.7-8.62v-12.315z'
}, {
  id: 'meherpur',
  geo_code: '4057',
  value: 0,
  d: 'M249.98 950.915l14.913 16.01 1.242-12.316 7.457 7.39v7.388l3.728 4.926 7.457-7.389 8.7 13.546-11.185 7.39 7.456 6.157 7.457-2.463 2.485 4.926-8.699 3.694v2.463l-1.243 7.389-6.214-3.694-4.97 7.388 1.242 11.084-11.185 1.231.31 23.398-10.252 10.776-9.632 1.54-6.524 4.925-4.971-1.232-16.157 13.547-2.485 3.694-18.02.924 1.864-13.239-8.7-2.462-2.485-4.926 6.214-3.695 2.485-8.62-6.214-2.463 1.243-13.546 6.214-6.158-8.7-12.315 6.214 2.463 7.457-7.389v-2.463l-3.728-3.694 1.243-13.546-2.486-2.463 7.457-3.695 6.214 2.463v7.39l4.29-5.432 7.516-.418 13.05-13.855 8.077-.923 2.796-7.389-2.174-10.16 1.242-6.157z'
}, {
  id: 'chuadanga',
  geo_code: '4018',
  value: 0,
  d: 'M216.424 1082.683l21.128-16.009 6.213 1.232 4.972-6.158 10.381-2.252 8.624-10.212.879-23.249 9.867-1.38-2.41-10.935 7.456-6.157 6.214 4.926 2.561-11.158 6.139 6.232 14.336 1.231-8.122 7.39 9.942 3.694 2.636 5.722 7.306 9.055 2.485-6.157 6.214-6.157 4.971 6.157 1.394 27.963-.15 16.37-3.73 13.547-3.207 4.281-7.977 1.876v3.694l4.971 3.695-1.243 6.157-13.67-2.463-7.457 2.463 5.818 1.412 4.124 8.44-1.243 17.24-6.213 2.464 7.237 4.124 2.705 5.728-13.382 10.362-11.474.435-1.242 11.37h-8.7l-7.093-5.573-7.82 3.11h-11.185l-3.729-3.695v-14.778l3.729-11.083 7.456 2.463-.954-8.185 2.925-7.314-3.213-3.26-6.214-.945 5.41 5.287-9.139 7.028-4.97-4.926 1.242-4.926-4.318-3.98-9.413-4.677-16.096-12.278 3.729-8.62-8.7-8.62z'
}, {
  id: 'jhenaidah',
  geo_code: '4044',
  value: 0,
  d: 'M256.193 1162.73l14.914 3.694 7.456-4.926 4.971 6.157 9.943 1.232 1.242-13.546 8.7 1.231 16.156-9.852-1.243-6.157-9.942-6.158 4.971-2.462 2.486-17.241-3.729-6.158-6.214-3.694 7.457-3.695 14.913 6.158 1.243-6.158-4.971-6.157-1.243-3.694h7.457l9.942-17.241-1.243-19.704 8.7-3.694 3.728-8.62h6.214v-4.927l-6.214-7.388 1.243-4.926 7.456 3.694v6.158l7.457 2.462 1.243 7.39h4.971l4.971-7.39 8.7 3.695 6.213-8.62h11.185l3.729-7.39 14.913 10.5 9.942 1.815 1.243 4.926 17.399 14.778 1.243 7.389-2.486 3.694h-3.728l-2.486 4.926 3.729 3.695 1.242 4.926-3.728 1.231v7.39l4.971 2.462-1.243 2.463h-6.213l-6.214 9.852 1.242 13.546-1.242 13.546-3.729 6.158-4.97 4.926-6.215-1.232-7.456 14.778-1.243 8.62 4.97 1.232-4.97 3.694v6.158l-6.214 6.157-4.971-4.926-2.486 3.695 3.729 9.852-8.7 3.694-21.127 3.694-6.214-14.777h-9.942l-4.971-11.084 7.456-4.926-12.427-4.925-4.971-3.695-3.729 3.695 7.457 9.851h-12.428l-9.942 4.926 7.457 7.39 7.456 3.694-9.942 1.231-16.156-4.926-3.728 1.232 7.456 4.926-3.728 8.62-3.728 6.157-1.243 6.158h-21.127l-12.428-6.158v8.62l-12.428-1.23-2.485-6.158-9.943-1.232-6.214-3.694v-6.158l-7.456-4.925v-6.158l2.485-4.926 9.943-2.463-1.243-6.157 8.7-8.62z'
}, {
  id: 'magura',
  geo_code: '4055',
  value: 0,
  d: 'M420.24 1167.655l-6.214-3.694v-6.157l8.7-14.778 6.213 1.231 9.942-12.315v-14.777l-1.242-12.315 3.728-9.852h8.7l2.485-3.694-6.214-1.232v-8.62h3.728v-4.926l-4.97-4.926 1.242-4.926 6.214 2.463 2.485-4.926-1.242-7.389 1.242-3.694 16.157 1.231 2.485 6.158 12.428 9.851 3.728 12.315 4.971 6.158v8.62l4.972 6.158 4.97 2.462v4.926h-6.213l-4.971 3.695 1.242 3.694h18.642l9.942 6.158 2.486 8.62h3.728v13.546l8.7 13.547 2.485 7.388-11.185-7.388-4.971 4.926 6.214 2.462v16.01h-14.913l-6.214 11.083-6.214 2.463-8.7-11.083-4.97 2.463-7.457 9.851-4.971 2.463h-2.486l-6.214-7.388-3.728 1.23-7.457-8.62h-1.243l-2.485 2.464h-6.214l-6.214-4.926-1.243-7.39-7.456 1.232-12.428-9.852z'
}, {
  id: 'jessore',
  geo_code: '4041',
  value: 0,
  d: 'M307.147 1209.526l9.942-17.241-9.942-8.62h7.457l12.428 6.157h13.67l-16.156-12.315 6.214-4.926 17.399 1.232-8.7-9.852 3.729-6.157 2.485 4.925 14.913 4.926-6.213 4.926 3.728 9.852 11.185 1.232 4.971 14.777 14.913-2.463 16.156-3.694-4.97-9.852 1.242-4.926 6.214 4.926 7.457-6.157-2.486-7.39 4.971-2.462 16.156 11.083 6.214-1.231 1.243 6.157 7.457 7.389 6.213 1.231 3.729-4.925 6.214 8.62 11.185 3.694-3.729 6.158 6.214 3.694-3.728 3.695 1.243 14.778-3.729 4.925 2.486 11.084-11.185 1.231v3.695l6.214 2.463 1.243 4.926-3.729 1.231 1.243 8.62 11.185-7.389h3.728l-1.242 12.315 7.456 2.463v2.463h11.185l2.486 3.695-2.486 8.62 7.457 12.315s6.214 8.62 1.243 8.62h-7.457l-8.7-2.463-3.728-3.694-6.214-14.778-3.728-3.694-8.7 6.157 2.486 8.62-7.456 11.084-16.157 7.389-1.242 6.157 4.97 6.157-1.242 16.01-1.243 4.925-13.67-6.157v-6.157l-4.971-1.232-1.243 3.695-11.185 9.851-7.457-1.231-11.185 6.157h-7.457 0l-8.699-6.157-1.243 1.231-4.97-3.694-1.244-6.157 7.457-1.232-8.7-11.083 7.457 1.231 1.243-3.694-4.971-8.62-9.942-6.158-1.243 7.389h-19.263l-8.078-6.158-6.214-3.694h0l4.971 11.7-4.971 4.925-18.642-2.463-4.97-5.542-6.215 3.695h-4.97l3.728-7.389-14.914-6.157 2.486-22.167 7.456-2.463-3.728-6.157v-6.158l-4.971-3.694 9.942-16.01 12.428-4.925-1.243-9.852 12.428-8.62 4.971 3.694 3.728-7.389-4.97-2.463-1.243-6.157-11.185 8.62-6.214-3.694-2.486-9.852z'
}, {
  id: 'narail',
  geo_code: '4065',
  value: 0,
  d: 'M476.165 1209.526l-6.214-8.62 9.942-1.232 9.942-9.852 3.729-3.694 7.456 11.083 8.7-3.695 6.214-8.62h13.67l3.728 9.852h9.943l1.242 2.463-8.699 9.852 3.728 7.389h13.67l6.215 7.389v4.925l-3.729 6.158 3.729 1.231 8.7-6.157 9.941 1.231-1.242 8.62-3.729 8.621-4.97 9.852h-6.215l-9.942-2.463 16.156 13.546 4.971 7.39 4.971 12.314 13.67 8.62v6.158l-3.727 1.231-11.185 2.463-28.584-11.083-9.942 11.083-16.157-8.62-4.97 7.389h-3.729l-13.67-16.01 4.97-7.388-3.728-7.39-12.428-1.23-6.213-6.158 2.485-9.852-4.97-1.232-11.186 11.084 2.486-9.852-1.243-7.389-7.457-2.463 13.67-2.463-2.485-11.083 4.971-4.926-2.485-18.472z'
}, {
  id: 'satkhira',
  geo_code: '4087',
  value: 0,
  d: 'M354.373 1667.636l-11.185 4.926 2.485 9.852 7.457 11.083-6.214 20.935 1.243 7.39 9.942 2.462 11.185 16.01 9.942 1.231 3.729-7.389-1.243-7.389-4.971-6.157-8.7-1.232-8.7-7.389 1.243-20.935-6.213-23.398zm-21.128-360.823l8.7 11.083-6.214 7.389-7.457-4.926-9.942 1.231-4.971-4.925-11.185 6.157 2.486 9.852 7.456 8.62 3.729-6.157 4.97 2.463-1.242 6.157 4.97 2.463-1.242 7.389-7.456 7.389 4.97 4.926-4.97 1.231-1.243 11.083-7.457-3.694 2.486 11.083 9.942 13.547-11.185 20.935 12.428 8.62-2.486 7.389-2.485 9.852 11.185 8.62-2.486 11.084 7.457 12.314 1.242 13.547 4.971 3.694-11.184 3.694 1.242 7.39 4.971 3.694-4.97 20.935 12.427 1.231 2.486 9.852-9.943-2.463v6.158l7.457 8.62 7.457 1.232v11.083l8.7 7.389 1.242 16.009 11.185-2.463-8.7 12.315h-11.184l-1.243 9.852 3.728 12.314 11.185 19.704-3.728 2.463-1.243 29.556 8.7 11.083 1.242 16.01 1.243 8.62 14.913 7.388 11.185-4.926 7.457 14.778-2.486 6.158 7.457 7.389-4.971 11.083-11.185 12.315 14.913 6.157 14.914-3.694-2.486-6.158h8.7l1.242-7.389-6.214-3.694 4.971-7.389v-24.63l-4.97-2.463 10.563-8.62 8.078-23.398 7.457-7.389-3.729-11.083-9.942-18.472-9.942-19.704-3.728-8.62 8.699-8.62h-21.127l12.428-17.242 6.213-13.546 4.972-30.787-12.428-19.704v-6.157l7.456-6.157-12.427-8.62 1.242-23.399 11.185-6.157-11.185-20.935 1.243-28.324 7.457-8.62 6.214 11.083 7.456-9.852-2.485-6.158-7.457-1.231-4.97-4.926 4.97-9.852 2.486 4.926 6.214 2.463 2.485-8.62 6.214-3.695-1.243-6.157-11.185-18.472-12.427-6.158-6.214-11.083-2.486-3.695-9.942 7.39-8.7 1.23-7.456-7.388-3.728 2.463-4.972-11.083 7.457-2.463-11.185-11.084 9.942 2.463-4.97-14.778-7.458-4.925-1.242 8.62h-19.885l-17.399-11.083z'
}, {
  id: 'khulna',
  geo_code: '4047',
  value: 0,
  d: 'M432.668 1719.358l-2.486 22.167 13.67 8.62 3.729-13.546-14.913-17.24zm11.806-324.495l-4.35 1.848-1.864 9.236-6.214-3.079-2.485-6.773-6.836 11.083 4.971 5.542 8.078.616 3.107 7.389-7.456 9.851-6.214-10.467-8.078 7.389-.622 26.476 11.807 23.399-11.807 6.157-1.242 22.782 11.806 9.236-6.835 4.31-.622 6.774 13.05 20.935-5.593 29.555-17.399 31.403 20.506-.616-8.078 8.62 21.749 46.181 4.97 12.315 8.079 2.463.621 8.005-13.05 2.463-9.941 16.625 5.592 4.926 3.729 11.083h5.592l1.864 9.852 3.728 12.315 15.535 1.231 9.321-14.162 4.971-3.079 4.971-9.236-2.485-5.542-3.107-7.388-11.807-7.39 9.321-4.925 16.778-17.24 1.243-13.547.62-15.394h4.972l8.7-32.018.62-25.245-5.592-23.398 16.778-16.625 3.728-8.005 5.593-1.232 7.456-12.314v-15.394l-11.185-32.634-6.214-3.079v-14.778l-8.7-18.472-2.485-20.935 4.972-11.7 9.942-9.85 6.214-21.552 4.97-4.31 4.35 3.079 9.321-9.236 4.35-8.62-1.864-9.853-3.729-3.694v-8.005l13.05-.615 8.078-6.773 4.97-25.862-28.583-9.851-12.428 11.083-14.292-8.62-6.214 8.004-6.214 3.695-14.292-1.848-5.592-3.694-9.942-19.088-9.321 3.695 3.107 9.851-9.32 11.084-15.536 7.388-1.864 4.926 4.971 5.542-1.242 24.014-14.292-6.773 1.242-6.158-5.592-2.463-.621 4.31-11.185 9.852-8.079-1.231 8.7 14.778 12.428 5.541 9.32 16.01.622 9.851z'
}, {
  id: 'faridpur',
  geo_code: '3029',
  value: 0,
  d: 'M491.48 1083.424l7.908 1.742.88 6.096 5.272 2.612 7.909-4.354-8.788-5.225 3.515-4.354 13.182 5.225 1.757-5.225 4.394.871 2.636 10.45 7.03.87 14.061-13.932 2.636 14.803 12.303 1.742 2.637-6.967 3.515 6.096 7.909.87 3.515-6.095-10.545-5.225v-20.028l8.787 3.483 1.758-6.095h12.303l.879-6.096h2.636l7.03 1.742 2.636 6.966 25.485 5.225 8.788 10.45h7.03l4.394 10.449 27.242 4.354 15.818 11.32 7.909 13.933.878 16.545h-7.03l-.879 13.061-7.03 6.096 9.667 6.095-4.394 11.32-5.273 16.546-6.151-2.613-9.667-6.095-4.394 12.19-4.393-.87-.88-6.095h-5.272l-6.151-9.58-7.91-.87 6.152 7.837-7.03.87-9.667 6.097-.878-9.58h-7.91l-5.272 4.355-4.394-6.966-7.909-.871-14.94 14.803-20.21.87-1.758 5.226 7.908 4.354-.878 4.353-2.637 4.354-11.424 9.58h-8.787l-4.394-5.226h-13.182l-4.394-7.837 8.788-9.578-11.424-2.613-2.637-9.578v-16.545l-6.151-4.354 5.273-5.225 14.06 10.45-5.273-9.58-9.666-14.803.879-12.19h-2.637l-4.393-7.838-7.03-6.095-21.091-.871-.879-3.483 5.273-4.354h6.151l.879-3.483-9.667-8.708-4.394-14.804z'
}, {
  id: 'gopalganj',
  geo_code: '3035',
  value: 0,
  d: 'M591.66 1301.992l.879-5.225-12.303-6.966-6.152-15.674-17.575-17.416 12.303.87 7.03-17.415 1.757-9.579-8.787-3.483-10.546 7.837-1.757-1.741 2.636-7.837v-4.354h5.273l15.818-10.45 1.757-7.837-8.787-5.224 1.757-6.096 16.697.87 16.697-13.932 7.909.871 6.151 5.225 5.273-4.354 6.151.87 1.758 9.58 7.909-5.225 9.666-.871-5.272-9.579 5.272.87 7.03 10.45h4.394l2.637 6.967h3.515l3.515 13.061-4.394 14.804-11.424 6.095s3.515 7.837 0 7.837h-11.424l-5.273 19.158 10.545 6.095 4.394-7.837 6.152-3.483 11.424 6.966 4.394 4.354 9.666-8.708 11.424 6.096-4.394 3.483-.878 8.708 11.424 3.483-4.394 1.742v11.32h-9.667l-3.515 7.837-10.545 4.354v7.837l-3.515.87v4.355l-7.03 5.224-3.516 13.933-3.515 5.225-.878 3.483-8.788 1.742h-12.303l-1.758 9.578h-2.636l-9.666-6.095-14.06.87-12.304-6.966-1.757-6.095 7.909-6.967-13.182-8.708.879-14.803z'
}, {
  id: 'bagerhat',
  geo_code: '4001',
  value: 0,
  d: 'M577.6 1306.346l14.06-5.225-1.758 15.674 14.06 5.225-8.787 8.708 1.758 8.708 12.302 8.708 15.818-5.225 10.546 12.191 1.757 24.382-12.303 5.225-7.03 3.483-1.757 12.191h17.575l3.515 3.483v19.158l7.03 17.415-5.272 8.708 7.03 22.64-14.06-6.965-10.546-5.225-3.515 3.483 19.333 13.933v5.224h-5.272l-8.788 10.45v22.64l-10.546 17.416-3.515 10.45-1.757 20.898 10.545 15.674 3.515 19.158-14.06 19.157 5.272 12.191-1.757 22.64 7.03 19.158v10.45h-7.03v10.449l-24.606 15.674-8.788-6.966-21.09-1.742-12.303 3.483 22.848 17.416-5.273 10.45h-19.333l-14.06-3.484 8.788 17.416-12.303 3.483-14.06-5.224 5.272-12.191-10.545-15.675v-13.932l-1.758-13.933 3.515-27.865-3.515-15.674 8.788-24.382 1.758-29.607-7.03-26.124 21.09-17.416 12.303-8.707 3.515-27.866-14.06-27.865-5.273-5.225v-12.19l-8.788-17.416-3.515-22.64 15.818-26.124 7.03-20.9h10.546l12.302-13.932v-12.19l-7.03-5.226v-10.45l19.333 1.742 5.273-13.932 1.757-17.416z'
}, {
  id: 'jamalpur',
  geo_code: '4539',
  value: 0,
  d: 'M544.517 556.841l17.4-18.472-1.243-11.083 8.699-9.852 8.7 1.231 7.456-9.851-1.243-12.315-6.214-11.084V464.48l12.428-8.62-6.214-3.695v-8.62l13.67 9.852-3.727 19.704 7.456 7.389-1.243 9.851 8.7 6.158h8.7l6.213-8.62 11.185 2.462 7.457-1.231v18.472l-2.486 2.463-7.456-4.926-3.729 17.24-7.456 7.39 3.728 8.62 9.942-1.231-1.243 6.157-4.97 6.157-1.244 9.852 11.185 8.62-1.242 7.39-8.7 4.925 1.243 4.926h-6.214v6.158l6.214 12.315 1.243 7.388 7.456-1.231 6.214 7.389-2.485 7.389 8.7 3.694 28.583 7.389 2.486 8.62 16.156-13.546 23.612 11.083-1.242 14.778-11.185 12.315-8.7-1.232h-19.884l-11.185 2.463-18.642 22.167-6.214-8.62-2.485-3.695-8.7-3.694v7.389l-9.942 6.157-4.97-3.694-3.73 7.389 3.73 7.388 7.456 4.926-2.486 4.926-3.728-1.231-4.971 11.083h-6.214v8.62l-7.457 2.463v13.547l-6.214 2.463-9.942-1.232v-11.083l-7.457-6.158 9.943-1.231 3.728-25.861-9.942-11.083 7.456-1.232 1.243-8.62-11.185-7.39-4.97-1.23-2.487 4.925-7.456-8.62h3.728l2.486-6.157-1.243-6.158-8.7 1.232-9.942-11.084-1.242-9.852 6.213-1.231-1.242-11.083-4.971-6.158 1.242-6.157-4.97-4.926 4.97-4.926v-11.083h-8.7l7.458-8.62-6.214-3.695 3.728-8.62-2.486-13.547z'
}, {
  id: 'tangail',
  geo_code: '3093',
  value: 0,
  d: 'M588.015 933.674l9.942-16.01-1.243-14.777-4.971-11.083-7.457-2.463v-4.926l3.729-3.694-3.729-4.926 2.486-14.778 1.243-22.167-17.4-18.472 8.7-11.083-17.399-16.01 11.185-12.314 2.486-14.778-8.7-7.389 8.7-6.157 3.728 2.463 6.214-9.852 11.185 3.694 1.243-6.157 4.97-8.62 3.73-6.158 2.485-6.157 4.971-3.695 6.214-8.62 6.214 1.231v-4.926l-8.7-7.388-1.243-6.158 1.243-6.157 3.729 4.926 12.427-7.39 1.243-7.388 7.457 3.694 9.942 13.547 14.913-22.167 12.428-4.926 7.457 3.694 1.243 11.084h11.184v20.935l9.943 14.778v6.157l-6.214 8.62-1.243 7.39 8.7 19.703 26.098 16.01-6.214 2.462-3.728 8.62L738.39 805.6l1.242 8.62-3.728 6.158 8.7 22.167 8.699 3.694 6.214 2.463 2.485 3.695-9.942 4.925v11.084l-7.457 2.463-6.213 4.926-4.972 13.546 1.243 18.472-8.7 1.232-4.97-4.926-1.243 6.157h-3.728l1.242 8.62-13.67 13.547-9.942 6.157h-3.729l-11.185-7.389-7.456 7.39h-3.729l-7.456-4.927v8.62l-6.214 6.158-2.486-9.852-4.97-2.463-11.186 12.315-7.457 2.463-6.213 6.157-3.729-7.389-4.97 8.62h-7.458l-7.456-6.157-2.486 3.695-4.97-7.39-2.486-14.777z'
}, {
  id: 'manikganj',
  geo_code: '3056',
  value: 0,
  d: 'M586.772 934.906l-19.885 6.157-12.427 1.232 1.242 12.314 11.185 13.547 14.914 13.546 1.242 7.389 4.972 6.157-1.243 12.315 13.67 18.472 14.914 9.852 14.913 3.694 6.214 7.39h-13.67l9.942 9.851 6.213-3.694 6.214 12.315 22.37 6.157 7.457-6.157v-13.547l16.156-2.463 11.185-4.926 28.584 4.926-7.457-20.935 12.428-13.546-24.855-4.926-8.7-11.083-6.214-13.547-8.7-4.926-6.213-16.009-12.428-6.157 9.942-8.62-23.612-1.232-2.486-9.852-6.214-2.463-12.428 12.315-3.728-2.463-8.7 9.852-3.728-6.158-4.97 11.084-7.458-2.463-6.213-4.926-3.729 4.926-4.97-7.39-3.73-16.008z'
}, {
  id: 'dhaka',
  geo_code: '3026',
  value: 0,
  d: 'M667.552 1071.6l6.214-7.389v-12.315l21.127-2.463 7.457-4.925 27.341 6.157-6.214-22.167 12.428-11.083-21.127-6.158-6.214-1.231-12.428-23.398-9.942-4.926-3.728-16.01-13.67-8.62 9.941-7.389-21.127-2.463 1.243-6.157v-7.389l9.942 7.39 11.185-8.621 14.913 7.389 11.185-4.926 7.457 12.314 9.942-4.925 9.942-2.463 3.729 6.157 6.214-18.472 11.185 17.24-9.943 8.62 8.7 2.464 18.642 2.463 1.242 23.398 9.943-2.463 6.213 6.157h8.7l6.214-4.926h6.214l1.242 9.852v8.62l-2.485 7.39 11.185 32.018 4.971 4.926-4.971 2.463-21.127 9.852 8.7 14.778-3.73 13.546-11.184-9.852-3.729 6.157-3.728 16.01-8.7-2.463 4.972-14.778-11.185-6.158-6.214-7.388-18.642-3.695-7.456 11.083-1.243 6.158-1.243 17.24-6.214 7.39-8.7-4.926-1.242 9.851-3.728 6.158-12.428-6.158-1.243-11.083-3.728-12.315-9.942-6.157-21.128-7.389z'
}, {
  id: 'madaripur',
  geo_code: '3054',
  value: 0,
  d: 'M699.864 1134.406l16.157 1.23 9.942 8.621 11.185 4.926 24.855 7.39-4.97 8.62-17.4 28.323-16.156 11.084 3.729 22.167 14.913 11.083 7.457 17.24 12.427 8.62-13.67 18.473 9.942 8.62 3.728 7.39-6.214 4.925h-13.67l-14.913-3.694 1.242-16.01 1.243-14.777-6.214-2.463-3.728 6.157h-16.156l-9.942-6.157v-4.926l6.213-2.463-11.184-7.389-9.943 8.62-12.428-9.851h-7.456l-7.457 9.851-11.185-7.389 7.457-18.472 14.913 1.232-2.485-7.389 11.185-6.157 3.728-16.01-6.214-11.083 6.214-12.315 17.399 7.389 6.214-25.861-4.971-9.852 6.213-4.926v-14.777z'
}, {
  id: 'shariatpur',
  geo_code: '3086',
  value: 0,
  d: 'M821.657 1262.48l-9.943 1.445-6.213 11.565 4.97 10.12 13.671-1.446 9.942 11.565 4.971-7.228-2.485-13.01-4.971-8.675-9.942-4.337zm-20.849 21.226l-17.575 5.224-10.545 6.967-3.516 8.708-12-9.007-9.09-11.892 5.273-10.45 7.03-10.45-10.546-10.449-8.787-15.674-12.303-8.708-5.273-22.64 15.818-12.191 12.303-22.64 10.545-15.675 17.576 1.742 15.818 12.19 7.03 12.192h26.363l5.273 12.19 1.758 12.192 5.272 19.157-7.03 15.674-10.332 7.9 6.729 10.536-22.76 5.946-7.03 19.158z'
}, {
  id: 'gazipur',
  geo_code: '3033',
  value: 0,
  d: 'M697.379 937.369l19.884-17.241-2.485-9.852h4.97v-7.389l7.458 7.39 7.456-1.232-1.243-20.936 3.729-13.546 17.399-7.389-2.486-11.083 11.185-4.926-3.728-3.694 7.456-2.463 8.7-1.232 3.728-7.389 7.457 8.62 7.457-1.23 4.97 3.694 3.729-20.936 12.428-1.231 3.728 4.926 14.913 6.157v6.158l9.943 9.852h11.185l2.485-3.695h9.942l13.67 8.62 7.458 3.695-7.457 4.926 1.243 11.083 4.97 9.852-3.727 8.62-1.243 7.39 7.456 7.388-13.67 2.463-4.971-4.926-3.729 3.695 4.971 2.463 2.486 23.398-6.214 14.777-6.214 1.232 3.729 6.157-7.457 12.315-9.942 7.389-6.214-4.926-12.428-14.778-1.243 6.158-7.456-1.232-9.943 20.935-6.213-4.926-4.972 3.695-9.942 2.463-7.457-7.39-9.942 2.464v-24.63H755.79l-9.942-3.694 8.7-9.852-6.214-9.852-3.729-1.231-7.456 13.546-3.729-7.389-9.942 4.926-8.7 4.926-17.398-11.083z'
}, {
  id: 'sherpur',
  geo_code: '4589',
  value: 0,
  d: 'M681.223 644.276l-1.243-8.62-19.884-4.926-17.4-6.157 2.486-7.39-6.214-7.388-6.213 1.231-1.243-7.388-6.214-8.62-3.728-9.853 8.699 1.232v-6.158l7.457-4.925 1.242-6.158-8.699-7.389-2.486-8.62 6.214-7.389 1.243-9.852-9.942 1.232-3.728-7.39 9.942-7.388 2.485-17.24 4.971 6.157 4.972-4.926v-18.473l8.699 7.39 12.428 7.388 6.214 3.695 16.156 6.157 13.67 3.694 18.642 2.463 13.67 6.158h8.7l3.728 6.157v11.084l1.243 13.546-2.486 8.62 14.914 7.39-4.971 8.62-12.428-2.463-8.7 12.314 7.457 6.158-4.971 7.389 3.728 9.851 8.7 4.926-4.971 2.463-7.457-2.463 1.243 6.158 6.214 4.926-6.214 12.314-16.156-1.231-9.942-4.926-13.671-6.157-16.156 14.777z'
}, {
  id: 'mymensingh',
  geo_code: '4561',
  value: 0,
  d: 'M755.79 847.47l-11.186-4.925-9.942-20.935 4.971-4.926v-12.315l-12.427-18.472 2.485-8.62 8.7-2.464-18.642-9.852-7.457-7.388-9.942-17.241 1.243-7.389 7.457-8.62v-6.158l-11.186-16.009 1.243-20.935-11.185-1.232-3.728-9.852 12.428-2.462 11.185 2.462 11.185-13.546v-12.315l6.214-3.694 8.699 2.463 8.7-11.083-8.7-6.158v-7.389l7.457 2.463 7.456-1.231-9.942-4.926-4.971-11.083 4.971-7.39-6.214-6.157 8.7-12.315 12.427 4.926 4.972-9.851-9.943-3.695-4.97-6.157V532.21l-1.244-4.925 6.214-1.232 6.214 4.926h11.185l3.729 7.39 26.098 4.925 12.428-4.926 14.913-6.157 16.156 2.463 6.214-3.695 9.942 4.926 8.7-7.389 6.213 3.695-2.485 6.157-6.214 17.24-1.243 9.853-6.214 4.926 9.943 11.083-1.243 7.389-8.7 1.231-4.97 7.39-2.486 9.851-4.971 1.231-4.972-13.546-3.728 4.926-7.456-2.463-3.729 2.463 9.942 7.389 2.486 9.852-2.486 7.389h2.486l6.214 12.315h8.7l-1.244 13.546 6.214 4.926-3.728 4.926h8.7l8.699 7.389 12.428 2.462 4.97-3.694 11.186 3.694-2.486 7.39-6.214-1.232 2.486 8.62 4.971 2.463 2.486 2.463-6.214 7.389-1.243 12.315 9.942 8.62 8.7 4.926 2.485 16.01 7.457-4.927 1.243 4.926 9.942 6.158 2.485 4.926-7.456 12.314-8.7 8.62-8.7-3.694-4.97-8.62-7.457 14.778-4.971-9.852-7.457 13.546-9.942 1.232-8.7-7.39h-11.184l-3.729 9.853 11.185 8.62 12.428 7.389-1.243 16.01-6.214 4.925-1.242 11.083 6.213 13.547 3.729 7.389-8.7-2.463-11.185 4.926h-12.427l-9.943-7.39 1.243-7.388-17.399-6.158-1.243-4.926-12.427-1.231-4.971 19.704-4.971-2.463-6.214 2.463-7.457-8.62-3.728 7.388-21.128 3.695z'
}, {
  id: 'kishoreganj',
  geo_code: '3048',
  value: 0,
  d: 'M887.524 862.248l-13.67-12.314-3.73-13.547-2.485-7.389-1.242-9.851 8.699-4.926 1.243-16.01-24.856-17.24 3.729-4.926v-6.158l9.942 1.232 9.942 8.62 8.7-1.231 8.699-12.315 6.214 6.157 4.97-12.314 9.943 8.62 11.185-4.926 8.7-12.315 6.213-9.852 27.342-4.926-17.4 2.463 13.671-2.463h16.156l8.7 2.463 12.427-8.62 12.428 2.463 4.971 8.62 13.67-8.62 7.458-6.157h13.67l-2.485 9.851 11.184 12.315v8.62l-3.728 6.158-1.243 3.694-17.399 9.852 9.943 2.463 2.485-3.694 8.7 2.463 4.97 9.852-1.242 6.157-8.7 4.926 12.428 8.62 2.486 7.39-8.7 1.23-3.728 4.927 6.214 4.925v7.389l-8.7 2.463-14.913 1.232-3.728 6.157 7.457 3.695 2.485 4.926-6.214 3.694-14.913 3.694-14.913 3.695-3.729 9.852-16.156-1.232-12.427 12.315v3.694l7.456 8.62 9.942 2.464 2.486 8.62-2.486 6.158-6.214 4.925s7.457 3.695-1.242 6.158c-8.7 2.463-11.185 3.694-11.185 3.694l-6.214-6.157-3.728-8.62-11.186 1.231-7.456-8.62h-9.942l-1.243-9.852 7.457-6.158-14.914-3.694-3.728-9.852-8.7-1.231-6.213-12.315-7.457-7.39-3.728 1.232-2.486 2.463-9.942 2.463z'
}, {
  id: 'netrokona',
  geo_code: '4572',
  value: 0,
  d: 'M933.507 746.49l-9.943-3.695-1.242-8.62-8.7 3.694-2.485-12.315-11.185-6.157-6.214-8.62-1.243-12.316 8.7-8.62-11.186-6.157v-7.39l4.971 1.232 4.972-7.389-13.67-4.925-2.486 4.925h-12.428l-8.7-8.62h-11.185l4.971-6.157-4.97-4.926v-12.315l-8.7-1.232-4.971-13.546h-3.729l1.243-4.926-1.243-11.083-11.185-7.389h13.671l2.485-6.157 4.972 14.777h6.214l2.485-11.083 3.728-6.157h6.214l4.971-9.852-11.185-11.083 7.457-3.695-2.485-7.389 4.97-8.62 6.214-14.778 9.943 1.232 3.728 3.694 21.127-13.546 7.457 11.083 32.312 1.232 3.728-3.695 9.943 4.926 16.156-13.546 1.243 6.157-3.729 1.232-1.243 23.398 4.972 4.926-2.486 2.463-7.457 1.231-2.485 6.158 9.942 2.462-4.971 6.158-1.243 12.315 6.214 11.083v17.24l14.913 3.695 9.942 9.852 23.613 1.231 6.214 9.852v11.084l4.971 9.851 4.971-9.851 6.214-1.232 4.971 8.62-3.728 9.852-8.7 2.463v12.315l6.214 3.695 7.457 1.231 9.942 3.694 4.971 6.158 3.729 4.926-7.457 8.62-9.942 7.389-13.67 1.232-21.128 13.546-3.728-6.158-14.914-3.694-11.185 7.389-8.699-1.232-17.399 1.232H948.42l-14.913 8.62z'
}, {
  id: 'sunamganj',
  geo_code: '6090',
  value: 0,
  d: 'M1052.813 736.637v-9.851l17.399-14.778-7.457-12.315-16.156-4.926-8.7-4.926 2.486-11.083 7.457-3.695 3.728-8.62-4.97-8.62-3.73-2.463-8.698 12.314-4.972-8.62 1.243-9.852-7.457-11.083-21.127-2.463-8.7-11.083-17.398-2.463V606.1l-4.971-11.083v-13.546l6.214-6.158-12.428-3.694 2.486-4.926 12.427-1.231-6.214-7.39 2.486-23.397 2.486-6.158 19.884-3.694h13.67l17.4 3.694 33.554-6.157 31.07 16.01 4.97-6.158 14.914 4.926 16.156 9.851h11.185l4.971-4.925 8.7 2.462 18.642-9.851v9.851l6.213 1.232 3.729 7.389 18.641-4.926 7.457 1.231-2.486 7.39 9.943 8.62 1.242 11.083-6.214 7.389v3.694l13.671 13.547-1.243 4.925-3.728 1.232v3.694l7.457 3.695v9.852l-7.457 14.777v3.695l7.457 9.852-12.428 2.463-6.214 7.389 7.457 16.009-7.457 2.463 7.457 11.083-11.185 22.167-18.642-2.463-1.243 6.157 3.729 3.695-4.971 3.694-4.972-6.157h-9.942l-16.156-3.695-4.971 4.926 4.971 4.926-8.7 7.389-17.398-13.546-1.243-7.39-9.942-1.23-11.185 9.851-11.185 6.158 1.243 9.851-2.486 6.158-7.457-4.926-11.185 9.852-9.942 2.463-11.185-13.547z'
}, {
  id: 'sylhet',
  geo_code: '6091',
  value: 0,
  d: 'M1204.432 714.47l13.67-23.397-8.699-11.084 7.457-1.231-6.214-17.24 8.7-7.39h9.941l-9.942-12.315 8.7-14.777 1.242-12.315-9.942-6.158 6.214-6.157-12.428-14.778v-4.926l4.971-4.926v-12.314l-9.942-8.62 1.243-6.158-7.457-6.158 3.729-6.157h3.728l11.185 3.695 7.457-8.62 37.283 1.23 22.37-3.694 8.7 7.39 7.456-9.853h19.884l13.671 4.926 11.185 13.546 4.971-1.231 4.971 3.694 4.971-2.463 8.7 4.926v6.158l6.214 1.231 14.913 7.39 9.942 2.462 3.728-3.694h4.972v9.851l13.67 3.695 12.428 7.389-2.486 7.389 4.971 11.083 11.185 3.694-4.97 6.158 11.184 1.231 4.971 7.39-1.242 18.471h-4.971l-4.972-2.463-7.456 7.39-14.914-1.232-21.127-3.695-12.428 3.695-9.942 6.157 8.7 9.852-1.243 8.62-11.185 20.936h-8.7l-18.641 2.463-4.971-9.852h-6.214l-1.243 8.62-4.971 16.01-12.428 9.851-6.214 2.463-14.913 3.695-6.214-4.926-7.457 4.926-8.699-1.232-3.728-6.157-8.7 4.926-6.214-6.158-7.456 8.62-9.942 13.547-19.885 1.231-3.728-8.62-12.428-1.232 4.971-7.388-9.942-7.39z'
}, {
  id: 'habiganj',
  geo_code: '6036',
  value: 0,
  d: 'M1040.385 856.09l7.457-2.462-4.971-7.389-4.971-2.463 2.485-7.389 14.914 1.232 8.7-3.695v-8.62l-4.972-6.157 8.7-2.463-1.243-7.39-8.7-9.851 4.971-6.158 1.243-8.62-2.486-4.926-6.213-3.694-7.457 3.694-8.7-3.694 17.4-6.158 6.213-17.24 12.428-8.62 8.7-8.621 8.699 9.852 3.728-7.39-3.728-8.62 8.7-12.314 16.155-4.926h6.214l8.7 7.389 9.942 14.777 6.214-9.851v-3.695l6.214-4.926 4.97 2.463 19.885-2.463 4.971 11.084 6.214-2.463-4.97-6.158v-6.157l16.155 2.463 14.914 3.694-7.457 11.083 12.428 1.232 2.485 6.157-8.7 9.852-8.699-6.157-7.456-1.232-3.729 2.463 7.457 12.315 7.457 4.926h-7.457l-8.7 6.157-2.485 19.704-2.485 35.713 7.456 20.935-7.456 20.935-4.972 3.695v3.694l6.214 4.926v4.926l-4.97 2.463v25.861l-16.157 9.852-17.399 2.463-11.185-8.62h-13.67l-12.428-6.158h-11.185l-2.486 7.389 7.457 9.852-2.485 8.62-6.214 8.62-3.729 12.315-18.641-4.926v-8.62l3.728-2.463-2.486-9.852-9.942-20.935 12.428-3.694-9.942-4.926v-14.778l13.67 3.694v-7.388l-11.185-4.926 17.4-12.315v-7.389l-11.186-2.463-11.185 19.704-9.942-7.39-18.642-7.388z'
}, {
  id: 'moulovibazar',
  geo_code: '6058',
  value: 0,
  d: 'M1188.276 864.711l8.7-23.398-8.7-19.704 6.214-56.648 7.456-4.926 13.67 1.232-9.941-4.926-12.428-14.778 6.214-3.694 8.7 1.231 8.699 8.62 7.456-9.851 18.642 1.231 19.884-24.63 6.214 6.158 7.457-3.694 3.728 6.157 12.428 1.232 4.971-4.926 4.971 4.926 17.4-3.695 17.398-9.852 6.214-25.86h6.214l3.728 9.851 17.399-3.694h12.428l-2.486 8.62-3.728 8.62-8.7 16.01-3.728 22.166-18.642 12.315-2.485 22.167 6.214 8.62v7.389l-8.7 17.24h-16.156l-24.855-3.694-9.943 2.463 9.943 8.62 2.485 9.852-6.214 2.463-2.485-6.157-1.243-4.926-7.457-1.232-8.7 8.62 4.972 4.927v27.092l-6.214 7.39-2.485 24.629h-8.7l-6.214-13.546-9.942-8.62 4.971-4.927-9.942 2.463h-11.185l-3.728-7.389-7.457 1.232h1.243v23.398l4.97 7.389-6.213 4.926-6.214-2.463-3.728-6.158-11.185-7.389-11.185-18.472z'
}, {
  id: 'narshingdi',
  geo_code: '3068',
  value: 0,
  d: 'M848.998 980.47l12.428-11.083 4.97-7.389-4.97-8.62h7.456l4.971-13.546v-13.547l-2.485-12.315-6.214-3.694 4.971-3.694 6.214 7.388 11.185-2.462h3.728l-7.456-8.62 3.728-16.01-3.728-8.62v-12.315l4.97-4.926 7.457 1.231 8.7-7.389 11.185 18.473 8.7 3.694 6.213 9.852 12.428 4.926 1.243 3.694-7.457 3.695 6.214 7.389-8.7 2.463 13.67-1.232 7.458 8.62 11.185-3.694 2.485 12.315 7.457 3.694-2.486 3.695-7.456 12.314 3.728 11.084-6.214 2.463-7.457 19.703-4.97 3.695-2.486 6.157-1.243 2.463-16.156-1.231-8.7 3.694h-7.456v-2.463l-8.7-1.231-3.728 2.463-1.243 16.009-7.457 12.315-11.184-9.852-1.243-6.158-2.486 8.62-9.942-2.462-3.728-3.695 7.456-3.694-3.728-8.62-8.7 3.694-2.485 6.157-3.728-7.388 8.7-12.315-14.914-3.695z'
}, {
  id: 'narayanganj',
  geo_code: '3067',
  value: 0,
  d: 'M806.743 1070.369l-11.185-17.241 28.584-9.852-14.913-35.713 3.728-8.62v-11.084l8.7-23.398 7.456 2.463 1.243-6.157 14.913 18.472 17.4 7.389-8.7 8.62 2.485 7.389 13.671-8.62 4.971 6.157-8.7 8.62 12.428 3.695 14.914 4.926-1.243 4.926-3.728 11.083-8.7 7.389-2.485 11.083-8.7-2.463h-6.214l-2.485 8.62v12.315l-16.156 7.39-6.214 6.157-6.214 7.389-9.942-1.232v-7.389l-8.7 6.158-7.456-6.158 1.242-12.315z'
}, {
  id: 'brahmanbaria',
  geo_code: '2012',
  value: 0,
  d: 'M913.622 1053.128l-14.913-6.158v-3.694l-12.428-9.852 3.728-9.852 11.185-13.546 1.243-17.24 8.7-4.927 3.728 4.926h11.185l3.728-3.694 21.127 2.463v-8.62l7.457-2.464 4.971-20.935 9.942-2.463-6.213-11.083 11.185-16.01 13.67-6.157-1.243-4.926 7.457-7.388-2.486-12.315-7.456-1.232-7.457-13.546 9.942-12.315 17.4 2.463 6.213-9.852 21.127-7.389 21.127 6.158 11.186 7.389 13.67-19.704 9.942 2.463v7.389l-16.156 11.083 9.942 6.158v6.157l-12.427-3.694-1.243 14.777 7.456 4.926-8.699 2.463 6.214 19.704 6.214 8.62v3.695l-4.971 2.463V950.915l-13.67 6.157 4.97 12.315-9.942 2.463-7.457 14.778 7.457 8.62 1.243 6.158-6.214 4.925-2.486 9.852 4.971 9.852-7.456 9.852-4.971-3.694h-8.7l-6.214 4.925 1.243 14.778 6.214 2.463 3.728-4.926 3.729 2.463v16.01h-4.971l-8.7-7.39-2.485 3.695-9.943-9.852v-9.852h-4.97l-1.243-4.926-9.943-2.462 6.214-4.926-13.67-11.084-19.885-1.231-8.7 7.389h-14.913l-6.213 1.231 2.485 9.852-11.185 2.463-13.67-9.852-7.457 4.926 1.243 3.694 3.728 3.695-6.214 9.852z'
}, {
  id: 'munshiganj',
  geo_code: '3059',
  value: 0,
  d: 'M837.278 1095.18l2.636 5.66 4.394 7.402 2.197 13.497 17.136-7.402 16.257-4.354-7.47-13.932-7.908-13.497-15.818.87-11.424 11.756zm-54.045 52.683l31.636 6.966-3.515 17.416-28.121-24.382zm-68.545-29.607l5.273-19.157 10.545 5.224 7.03-8.708v-15.674l8.788-19.157 17.576 5.225 17.575 12.19-5.272 17.416 10.545 1.742 5.273-19.157 21.09 13.932 17.576 3.483 3.515 8.708 7.03 5.225v12.191l-1.757 10.45-8.788 13.932-3.515 13.933-12.303-13.933H792.02l-17.576-5.225h-14.06l-15.818-3.483-29.879-19.157z'
}, {
  id: 'comilla',
  geo_code: '2019',
  value: 0,
  d: 'M887.807 1096.922l10.985-20.029 3.954-6.095-5.272-8.708 1.757-14.803 14.06 6.095 6.152-9.143-3.075-5.225-.88-3.918 5.713-3.484 14.5 9.58 10.984-3.049-1.318-9.143 6.59-1.742 14.5.436 7.91-7.402 18.893 1.306-3.075-.87 10.984 6.095 6.591 5.66-5.272 4.354 9.227 3.048 1.757 4.354h4.833l-.878 9.579 10.106 9.578 2.197 4.354-.44 11.32 3.076 7.402 10.106 10.45-.44 6.966 6.152 2.177-3.076 2.612.44 5.225 12.742 10.014 6.59 21.334 6.591 21.335 10.985 4.354-11.424 8.272.879 4.354 8.788 4.79-3.516 3.047-.439 3.919 3.076 6.53 2.636 3.484-.879 4.354 1.758 33.525 4.394 5.66 4.833 9.579-1.318 10.885-9.667 5.66-12.303-6.531-10.545.435-15.818-2.177-7.909-5.224-7.909-.436-9.227 5.225-3.076-2.177h-8.787l-11.424-5.66-5.712-10.014-.44.87-7.03-.435-4.833-6.966 8.348-2.177 5.273-7.402-.88-15.239 5.713-9.578-6.59-6.096-1.319-9.578-7.91-9.58-3.514-7.836-13.182-9.579-1.757-8.708-9.227-6.095-3.516-16.98-17.575-4.79-12.742 10.885-4.834-3.048-4.833 10.014h-5.273l-11.863-6.53v-8.273h-.44l-5.711-6.096-8.349-8.272 7.03-3.919-.439-8.272 4.833-7.837zm-18.454-28.736l-1.318 11.755 7.47 9.579 2.196 5.66 4.834-.87 6.59-10.015 7.47-12.626-3.515-9.144.44-10.449-7.106-8.409-7.394 14.07-11.864-3.049-.44 9.144 2.637 4.354z'
}, {
  id: 'chandpur',
  geo_code: '2013',
  value: 0,
  d: 'M855.212 1289.572l-12.428-20.935-4.971-12.315 6.214-17.24 8.7-14.779 11.184-12.314 3.728-12.315-4.97-9.852v-8.62l-8.7-4.926-8.7-2.463v-8.62l-7.456-3.695 6.214-12.315 2.485-12.315 1.243-9.852 12.428-3.694 8.7-3.694 7.456-1.232 13.67 12.315 1.243 8.62 13.67 6.158 6.215-8.62 4.97 4.925 12.428-16.009 21.128 6.157 2.485 16.01 11.185 7.389 1.243 11.083 12.428 11.083 11.185 14.778-1.243 8.62 9.942 8.62-7.457 7.39 1.243 16.009-3.728 8.62h-8.7l-4.97 2.463-7.457-4.926-13.67 1.232-6.215-9.852h-6.214l-7.456 3.694-3.729 12.315-2.485 8.62-17.399 6.158h-6.214l-12.428 7.389h-2.485l-3.728-7.39h-3.729l-3.728 4.927-1.243 12.315v6.157l-7.457 8.62-12.427-3.694z'
}, {
  id: 'laxmipur',
  geo_code: '2051',
  value: 0,
  d: 'M865.154 1292.035l3.728 12.315 16.156 6.157 2.486 9.852 4.97 9.852 16.157 13.546 6.214 23.398 11.185 25.861 4.971 19.704 22.37 22.167 7.457 13.546 17.399 6.157 19.884-14.778-3.728-17.24-13.67-22.167 1.242-7.389-19.885-29.555-1.242-19.704 12.427-6.157 3.729-14.778v-20.935l-12.428-8.62-14.913-6.158-1.243-4.926 9.942-3.694-4.971-8.62 6.214 1.23 12.428-28.323-7.457-3.695h-12.428l-4.97-9.852-13.671 2.463-7.457 24.63-19.885 6.157-2.485-2.463-16.156 8.62-4.971-7.388h-3.729l-3.728 3.694v23.398l-9.942 3.695z'
}, {
  id: 'perojpur',
  geo_code: '1079',
  value: 0,
  d: 'M625.298 1586.359l-2.486-18.473-7.456-9.851 1.243-18.473 9.942-17.24-2.486-11.084v-17.24l8.7-9.852h4.97l-6.213-6.158-14.913-23.398 17.398 9.852 11.185 9.852-1.242-11.083-4.972-13.547 6.214-8.62-6.214-17.24v-18.473l-4.97-4.926-17.4-2.463-1.242-13.546 19.884-7.389v-20.935l-1.243-4.926 2.486-3.694 1.243-8.62 18.641 2.462 6.214-8.62h1.243l8.7 11.083-1.243 12.315h6.214l7.456 11.083h7.457l2.485 7.389 18.642 3.694 8.7 2.463-1.243 6.158-4.971 1.231v6.158l-8.7 6.157-2.485 9.852-13.67 8.62 7.456 7.39v9.851l-12.428 2.463v24.63l19.884 3.694 2.486 2.463-2.486 6.157-12.427 12.315-7.457-6.157-6.214 3.694-7.457-3.694 1.243 14.778-7.456 11.083 1.242 9.852 7.457-3.695 2.486 14.778-3.729 7.389-3.728 17.24-8.7 16.01-8.699 1.231-14.913 16.01h-12.428z'
}, {
  id: 'jhalokati',
  geo_code: '1042',
  value: 0,
  d: 'M675.009 1513.701l-6.214 4.926-2.485-9.852 8.699-11.083-3.728-18.472 7.456 7.389 8.7-4.926 4.97 4.926 14.914-9.852 1.243-7.389-19.884-6.157-1.243-23.398 12.428-3.695v-8.62l-8.7-9.852 13.67-7.39 1.243-9.85 11.185-6.158-1.242-3.695 6.213-2.463 1.243-6.157-8.7-4.926 8.7-7.389 4.971-2.463 2.486 7.389h7.457l4.97-2.463 9.943 11.083-3.728 4.926-1.243 6.158 2.485 3.694h7.457l3.728 6.158 21.128 3.694 1.242 4.926-6.214 1.231-3.728 6.158 13.67 2.463 1.243 6.157-11.185 2.463s2.486 7.389-2.485 7.389-9.942-4.926-9.942-4.926l-3.729 4.926-7.456-1.231-3.729 7.388-2.485 7.39-8.7 3.694-13.67 8.62-8.7 6.157-1.242 8.62-2.486 14.779-9.942 6.157-4.971 11.083-6.214 7.39-17.399-4.927z'
}, {
  id: 'barisal',
  geo_code: '1006',
  value: 0,
  d: 'M717.263 1468.137l16.157-8.62 16.156-7.39 4.97-13.546h7.457l2.486-3.694 14.913 3.694 2.486-8.62h8.7l-1.244-7.39-14.913-2.462 3.728-7.39 6.214 1.232-1.242-6.157-19.885-2.463-4.971-6.157-9.942-1.232 1.243-7.389 4.97-3.694-11.184-13.546h-8.7l-4.97-6.158-16.157 9.852-19.884-3.694-1.243-4.926h-4.971l-7.457-12.315h-8.7l1.243-12.315-7.456-9.852v-14.778l11.185-12.314 1.243-6.158 11.185-6.157 2.485-6.158 11.185-1.231v-14.778l14.913 1.232 4.971-7.39 6.214 2.464-1.242 29.555 17.398 7.39 9.943-2.464 6.214-3.694 7.456 4.926 3.729-8.62 14.913-7.39 17.399 3.695 17.399 9.852 12.427 11.083 14.914 6.157 14.913 6.158 11.185 9.852 7.457 17.24-7.457 8.62-12.428 6.158-21.127 14.778-11.185 11.083-1.243 8.62-14.913 2.464 8.7 13.546-3.729 9.852 1.243 11.083 4.971 7.389-14.913 1.231-13.67 7.39v8.62l-2.486 8.62-8.7-2.463-7.457-1.232-16.156-7.388-8.699 4.926-1.243 6.157-14.913 6.157-1.243-11.083-18.642 1.232z'
}, {
  id: 'barguna',
  geo_code: '1004',
  value: 0,
  d: 'M719.961 1466.571l17.576 1.742-1.758 8.707 17.576-5.224v-3.483l10.545-6.967 12.303 5.225-3.515 13.933-12.303 1.741-12.303 17.416 5.273 13.933-3.516 10.449-17.575 3.483-7.03 12.191-1.758 13.933 5.273 6.966 15.818-15.674 8.788-3.483 7.03 3.483 29.878 1.742 1.758 12.19-17.576 17.416-5.272 10.45 12.302 6.966v10.45l-12.302 20.899-10.546 12.19v26.124l-17.575 20.899 1.757 19.157-15.818 5.225-14.06 8.708-15.818-3.483-12.303-10.45-22.848-5.224 5.273-8.708-7.03-8.708s-7.03-19.157 1.757-19.157c8.788 0 21.09-6.967 21.09-6.967l-12.302-5.224-12.303-1.742 1.757-17.416 8.788-10.45-5.273-8.707-5.272 12.19-8.788 1.743-1.757 12.19 5.272 5.225-8.788 10.45-14.06-22.64-3.515-17.417v-24.382h0l17.575-8.707 8.788-10.45 7.03 3.483 12.303-26.123 5.273-13.933-3.515-15.674 17.575 1.741 12.303-15.674 10.545-6.966 1.758-13.933 3.515-15.674z'
}, {
  id: 'patuakhali',
  geo_code: '1078',
  value: 0,
  d: 'M835.96 1658.144l-15.818 15.675-5.273 15.674 14.06 6.966 10.546-12.191-3.515-12.191v-13.933zm-19.333-29.606l15.817-10.45 5.273 10.45-1.757 12.19-10.546 12.192-8.787 8.707v-33.089zm-35.152-8.708l17.576 8.708 8.788 8.707 1.757 13.933-5.272 15.674-8.788 12.191-19.333-8.708-5.273 12.191-5.273 17.416-12.302 5.225 3.515-19.157 7.03-13.933v-15.674l7.03-13.933 10.545-22.64zm-5.272-8.708l3.515-17.416-12.303-6.966 19.333-20.9 5.273-5.224-3.515-13.933-26.364 1.742-8.787-5.225-24.606 13.933-3.515-8.708 1.757-17.416 22.848-5.224 3.516-10.45-7.03-15.674 14.06-15.674 10.545-1.742 5.273-13.932 15.818 1.741 5.272-15.674 24.606-6.966 1.758-12.191 12.303 12.19 10.545 13.933-1.758 17.416 14.06 5.225 8.788 27.865-12.302 6.966v15.674l-10.546 20.9-7.03 19.157-3.515 10.45 3.515 24.381-31.636 10.45-29.878-8.708z'
}, {
  id: 'bhola',
  geo_code: '1009',
  value: 0,
  d: 'M878.14 1644.212l-5.272 13.932h17.576l-12.303-13.932zm87.878-128.877l-7.03 22.64-8.788 26.124v24.382l17.576 19.158v-45.281l8.788-22.64 1.757-12.192-12.303-12.19zm-124.786 81.854l15.818-17.416 14.06-20.898 1.758-31.349-1.757-22.64-7.03-19.158-7.03-19.157v-19.157l-12.304-10.45-12.303-13.932 1.758-15.675 10.545-17.415 15.818-8.708 7.03-8.708 24.606-1.742 5.273 19.158 10.545 38.314 17.576 20.9 12.303 15.673 7.03 10.45-1.758 19.157-5.272 5.225v22.64l-7.03 15.675-3.516 12.19-3.515 15.675V1593.706l-12.303 8.708-7.03 13.933-21.09 6.966-1.758 10.45-10.545 5.224-14.06 8.708s-5.274-1.742-5.274-8.708-5.272-15.674-5.272-15.674l8.788-12.191-14.06-13.933zm10.545 73.146l8.788-12.19 10.546 13.932-7.03 6.966-12.304-8.708z'
}, {
  id: 'noakhali',
  geo_code: '2075',
  value: 0,
  d: 'M983.218 1466.905l32.312 2.463 9.942 22.167 2.486 19.703 9.942 12.315-2.486 27.093-4.97 27.092-17.4 12.315-14.913 17.24-7.457-2.462 2.486-24.63 2.485-27.092 2.486-24.63-2.486-24.63-12.427-36.944zm91.965-12.315l-24.855-7.389v-32.018l19.884 9.852 7.457 12.315-2.486 17.24zm-44.74-73.889l32.312 2.463 14.914 12.315-2.486 14.778-22.37-9.852-22.37-19.704zm-42.254 14.778h27.34l12.429 14.778 9.942 17.24-7.457 14.779-17.399 7.388-12.428-2.463-2.485-22.166-9.942-29.556zm-24.856-54.185l9.942-12.315 4.972-19.703-9.943-12.315-17.399-12.315 2.486-12.315 14.913-27.092 19.885 7.388 19.884 17.241 19.885-7.389 12.427 2.463 27.341 7.39 2.486 9.851-2.486 12.315v9.852l-7.456 22.166 22.37-2.463h12.427l-9.942 14.778v12.315l4.971 17.24-14.913-7.388-14.913 4.926-27.341-2.463-14.914-9.852-7.456 9.852s-7.457 7.389-17.4 2.463c-9.941-4.926-27.34-22.167-29.826-24.63z'
}, {
  id: 'feni',
  geo_code: '2030',
  value: 0,
  d: 'M1090.805 1363.818l-7.03-10.45 1.757-10.449 10.545-19.157-12.303 1.741-15.818-3.483-5.272 5.225 3.515-13.933-1.758-12.19 3.515-10.45-5.272-20.899 19.333 5.225 10.545-8.708 10.545 3.483 7.03-6.966-5.272-15.675-3.515-10.449v-10.45l3.515-13.932 1.758-12.191 15.817 3.483 10.546 17.416 10.545 20.899 3.515 15.674v13.933l12.303 17.415-1.757 12.191 14.06 5.225-19.333 1.742 1.757 19.157h-14.06l-10.545 6.966-5.273 15.674-12.303 17.416v12.191l-7.03-3.483v-8.708l-14.06-3.483z'
}, {
  id: 'chittagong',
  geo_code: '2015',
  value: 0,
  d: 'M1240.196 1565.84l-10.545-6.965-3.515-20.9-1.758-19.157v-6.966l-12.302-19.157-8.788-24.382-14.06-12.191-10.546-15.675-7.03-13.932v-5.225l-7.03-8.708-8.788-6.966-26.363-19.157 5.272-8.708-12.303-12.191 1.758-10.45 5.273-20.899 17.575-6.966h7.03l1.758-17.416h14.06l12.303 3.483 7.03-8.708 21.091-5.224 10.545 5.224 3.515 10.45-7.03 12.191 8.788 12.191 8.788 17.416 8.788 15.674 7.03 12.191v-13.933h14.06l7.03 5.225v15.674l12.303 1.742 3.515 17.416 1.758 19.157 5.273 13.932-1.758 12.192 12.303 8.707 3.515-8.707 1.758-8.708-5.273-6.967 1.757-15.674 14.06-5.225 14.061 15.675 12.303 29.606 3.515 20.9-12.303 22.64 19.333 13.932-3.515 13.933-1.757 8.708 5.272 20.899 1.758 8.708v8.708l5.273 8.707-3.515 10.45 3.515 17.416 10.545 20.899-5.273 10.45-5.272 6.965 5.272 12.191-12.303 3.484-10.545-3.484 3.515-10.449h-15.818l-10.545 10.45-19.333 3.483-10.545 10.449-17.576 10.45-3.515-13.933 8.788-12.191-14.06-12.191v-15.674l-10.546-13.933-3.515-24.382-8.788-8.708-5.273-27.865zm-151.149-155l10.545 19.158 7.03 10.45v6.966l-3.515 1.741-3.515 17.416 5.273 19.157 15.818 17.416 10.545 5.225v10.45l1.758 3.483h14.06l8.788-10.45 3.515-10.45v-10.449l-3.515-10.45-28.12-47.022-1.759-10.45-36.908-12.19zm-10.545-34.83l15.818 5.224 3.515 12.19-5.273 1.742-14.06-19.157z'
}, {
  id: 'khagrachari',
  geo_code: '2046',
  value: 0,
  d: 'M1286.455 1402.868l17.399-22.167v-17.24l7.457-24.63 34.797-24.63-9.942-46.796 24.856-12.315-4.971-22.166-12.428-32.019 4.971-19.703-17.399-17.241 24.856-29.556-29.827-66.5-14.913 2.463-17.4-29.555h-7.456l-9.942 9.852 9.942 41.87 4.971 27.093-7.456 9.851v14.778l-14.914-4.926-17.399 14.778-17.398 29.556-7.457 22.166 12.428 22.167 2.184 31.148-3.063 7.96-9.064.3v7.388l-19.884 24.63 14.913 12.315-4.97 9.851 2.485 9.852 14.913 32.019 14.913 19.703 2.486-9.851 17.399 2.463 2.485 14.777 12.428 12.315z'
}, {
  id: 'coxs_bazar',
  geo_code: '2022',
  value: 0,
  d: 'M1274.027 1695.96l27.341-14.777 12.428-9.852 12.428-2.463 17.399 29.555 19.884 9.852 7.457-2.463 4.971-12.315 12.428 17.241v7.389h-12.428l-2.485 17.24h-22.37l-9.943 12.316 9.942 24.63 19.885 19.703-7.457 12.315 12.428 19.703 9.942 12.315-4.97 17.24h-9.943l-2.486-9.851-17.399 19.704 4.972 22.166 9.942 17.241 2.485 17.24-4.97 12.316 4.97 19.703 17.4 22.167v14.778l2.485 19.703 12.428 39.408 9.942 24.63-2.486 12.314-7.456-7.389-9.943-27.092-12.427-14.778-9.943-17.24-7.456-17.242v-14.777l-42.255-49.26-4.97-39.407v-17.24l-7.457-17.241-14.914-19.704-2.485-9.852 12.427-14.778 2.486-17.24 4.971-14.778 4.971-22.167-2.485-27.092-9.943 22.166-12.427-7.389 9.942 17.241 7.457 19.704-12.428 24.63 2.485 2.462-24.855-2.463 2.485 12.315h-14.913l-2.485-12.315 7.456-22.166 4.971-19.704-12.427-9.852 17.398-66.5zm-34.797-22.166l24.855-4.926 4.971 24.63-7.456 22.166-14.914 24.63 2.486-17.241 2.485-34.482-12.427-14.777zm155.35 446.628c-1.284-5.17.63-7.24-3.911-11.81-6.117-6.155 1.046-6.888 5.867-6.888 1.795 0-1.811 18.334-1.956 18.698z'
}, {
  id: 'bandarban',
  geo_code: '2003',
  value: 0,
  d: 'M1373.45 1695.96l-9.943 12.315-17.399-7.389-4.97-9.852-14.914-22.166 7.457-9.852h12.427l4.972 9.852 17.398 2.463v-9.852l7.457-19.704-7.457-12.315-4.97-24.63-2.486-12.314-4.971-24.63-4.971-17.24 4.97-24.63 14.914 4.926 14.913-7.389h24.856l14.913 9.852 22.37 12.315 12.428 27.092 12.428 34.482-4.971 9.852 14.913 32.018 14.913 41.87 2.486 12.315-2.486 27.093v17.24l-2.485 19.704 2.485 24.63 7.457 27.092 2.485 27.093 2.486 22.167 12.428 22.166-12.428 4.926-12.428 14.778-7.456-4.926-2.486-12.315-7.457-17.24 2.486-9.852-7.457-2.463-7.456 4.926-12.428 2.462-14.914-4.925-2.485-9.852-9.942-24.63-7.457-4.926-9.942 12.315-4.971 9.852-9.943-2.463-12.427 22.167-7.457 2.462-7.457 9.852 2.486 19.704-7.457 17.24-2.485-24.629-7.457-19.704-2.486-9.851 14.914-17.241 9.942 9.852 7.457-14.778-9.942-19.704-9.943-17.24 4.971-9.852-12.427-12.315-4.971-14.778-7.457-19.704 12.428-12.314h19.884v-14.778h12.428v-7.389l-14.913-17.24z'
}, {
  id: 'rangamati',
  geo_code: '2084',
  value: 0,
  d: 'M1288.94 1427.498l-4.97-24.63 12.427-14.778 9.943-17.24 2.485-29.556 37.283-27.093-2.485-14.777-4.971-27.093 22.37-17.24-4.971-19.704-7.457-32.019v-17.24l-17.399-24.63 22.37-29.556-9.942-24.63-17.399-44.332 4.971-7.39 19.885-19.703h12.427l7.457 12.315 4.971 19.704 4.971-17.241 4.971-9.852 12.428 4.926-7.457 17.24 4.971 17.241 4.972 12.315 4.97 44.333 12.428 17.241 7.457 14.778-4.97 9.852 7.456 7.389 2.485 9.851-17.399 12.315 2.486 19.704 2.485 17.24 2.486 12.315 9.942 12.315-7.456 39.408 9.942 19.703 19.884 9.852-4.97 12.315 7.456 29.555 14.913 14.778 2.486 19.704 4.97 24.63-7.456 4.925 7.457 24.63 4.97 29.556 4.972 24.63v14.777l4.971 19.704 4.971 19.703v22.167l-12.428-4.926 7.457 27.093 9.942 39.407 7.457 24.63-9.942 17.24-4.971-12.315-7.457-22.166-7.457-24.63-12.427-24.63 2.485-7.388-4.971-19.704-9.942-34.481-9.943-9.852-24.855-17.241-32.312-7.389-22.37 9.852-14.914-12.315-9.942-14.778 7.457-19.703-2.486-19.704-12.427-24.63-14.914-22.166-7.456 2.463-9.942 14.778 7.456 19.703-4.971 9.852-9.942-12.315-4.971-27.092z'
}];

function Path(_ref) {
  var id = _ref.id,
      name = _ref.name,
      title = _ref.title,
      fill = _ref.fill,
      d = _ref.d;
  return React__default.createElement(material.Tooltip, {
    title: title,
    placement: "top",
    arrow: true,
    followCursor: true
  }, React__default.createElement("path", {
    onClick: function onClick() {
      return console.log(name);
    },
    className: "path",
    id: id,
    name: name,
    fill: fill,
    d: d
  }));
}

function Map(_ref) {
  var config = _ref.config;
  var classes = useStyle();

  var _useState = React.useState(config ? config.divisions : divisions),
      mapOfDivision = _useState[0],
      setMapOfDivision = _useState[1];

  var _useState2 = React.useState(config ? config.districts : districts),
      mapOfDistrict = _useState2[0],
      setMapOfDistrict = _useState2[1];

  var divisionPath = mapOfDivision.map(function (path) {
    return React__default.createElement(Path, {
      key: path.id,
      id: path.id,
      fill: "gray",
      name: _.capitalize(path.id),
      title: React__default.createElement(React__default.Fragment, null, React__default.createElement(material.Box, {
        display: "flex"
      }, React__default.createElement(material.Typography, {
        variant: "subtitle2",
        color: "white"
      }, _.capitalize(path.id) + " Value: " + _.capitalize(path == null ? void 0 : path.value.toString())))),
      d: path.d
    });
  });
  var districtsPath = mapOfDistrict.map(function (path) {
    return React__default.createElement(Path, {
      key: path.id,
      id: path.id,
      fill: "gray",
      name: _.capitalize(path.id),
      title: React__default.createElement(React__default.Fragment, null, React__default.createElement(material.Box, {
        display: "flex"
      }, React__default.createElement(material.Typography, {
        variant: "subtitle2",
        color: "white"
      }, _.capitalize(path.id) + " Value: " + _.capitalize(path == null ? void 0 : path.value.toString())))),
      d: path.d
    });
  });
  React.useEffect(function () {
    setMapOfDivision(config.divisions);
    setMapOfDistrict(config.districts);
  }, [config]);
  return React__default.createElement(reactZoomPanPinch.TransformWrapper, {
    initialScale: 0.9,
    minScale: 0.5,
    maxScale: 4,
    initialPositionX: 120,
    initialPositionY: 120
  }, function (_ref2) {
    var zoomIn = _ref2.zoomIn,
        zoomOut = _ref2.zoomOut,
        resetTransform = _ref2.resetTransform,
        state = _ref2.state;
    return React__default.createElement(React__default.Fragment, null, React__default.createElement(material.Card, null, React__default.createElement(material.Box, {
      sx: {
        backgroundColor: '#892910'
      }
    }, React__default.createElement(material.IconButton, {
      size: "large",
      onClick: function onClick() {
        return zoomIn();
      }
    }, React__default.createElement(AddIcon, {
      fontSize: "small",
      sx: {
        color: '#faeee7'
      }
    })), React__default.createElement(material.IconButton, {
      size: "large",
      onClick: function onClick() {
        return zoomOut();
      }
    }, React__default.createElement(RemoveIcon, {
      fontSize: "small",
      sx: {
        color: '#faeee7'
      }
    })), React__default.createElement(material.IconButton, {
      size: "large",
      onClick: function onClick() {
        return resetTransform();
      }
    }, React__default.createElement(RestartAltIcon, {
      fontSize: "small",
      sx: {
        color: '#faeee7'
      }
    }))), React__default.createElement(reactZoomPanPinch.TransformComponent, null, React__default.createElement(material.Box, {
      height: "75vh",
      width: "100vw"
    }, React__default.createElement("svg", {
      id: "map",
      className: classes.svg,
      baseProfile: "tiny",
      fill: "#7c7c7c",
      stroke: "#ffffff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      version: "1.2",
      viewBox: "0 0 3722.2117757783362 2791.658831833752",
      height: "100%",
      width: "100%",
      xmlns: "http://www.w3.org/2000/svg"
    }, state.scale >= 1 ? districtsPath : divisionPath)))));
  });
}

function Maps(_ref) {
  var item = _ref.item;
  return React__default.createElement(React__default.Fragment, null, item.title && React__default.createElement(React__default.Fragment, null, React__default.createElement(material.CardHeader, {
    title: item.title,
    sx: {
      textAlign: item.titlePosition
    }
  }), React__default.createElement(material.Divider, null)), React__default.createElement(Map, Object.assign({}, item)));
}

var TABLE_PAGINATION = '@TABLE/PAGINATION';
var initialState$1 = {
  rowsPerPage: 10,
  pageSize: 0,
  count: 30,
  search: ''
};

var tableReducer = function tableReducer(state, action) {
  if (state === void 0) {
    state = initialState$1;
  }

  switch (action.type) {
    case TABLE_PAGINATION:
      {
        return _extends({}, state, action.payload);
      }

    default:
      {
        return _extends({}, state);
      }
  }
};

function useTables() {
  var _useSelector = reactRedux.useSelector(function (state) {
    return state.table;
  }),
      count = _useSelector.count,
      pageSize = _useSelector.pageSize,
      rowsPerPage = _useSelector.rowsPerPage,
      search = _useSelector.search;

  var dispatch = reactRedux.useDispatch();

  var handleChangePage = function handleChangePage(_event, newPage) {
    dispatch({
      type: TABLE_PAGINATION,
      payload: {
        pageSize: newPage
      }
    });
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    (event == null ? void 0 : event.target.value) && dispatch({
      type: TABLE_PAGINATION,
      payload: {
        rowsPerPage: parseInt(event == null ? void 0 : event.target.value, 10)
      }
    });
    dispatch({
      type: TABLE_PAGINATION,
      payload: {
        pageSize: 0
      }
    });
  };

  var handleSearch = function handleSearch(event) {
    dispatch({
      type: TABLE_PAGINATION,
      payload: {
        search: event.target.value
      }
    });
  };

  return {
    count: count,
    pageSize: pageSize,
    rowsPerPage: rowsPerPage,
    search: search,
    handleChangePage: handleChangePage,
    handleChangeRowsPerPage: handleChangeRowsPerPage,
    handleSearch: handleSearch
  };
}

function Table(_ref) {
  var columns = _ref.columns,
      data = _ref.data;

  // Use the state and functions returned from useTable to build your UI
  var _useTable = reactTable.useTable({
    columns: columns,
    data: data
  }, reactTable.useSortBy, reactTable.useExpanded),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // Render the UI for your table


  return React__default.createElement(MaUTable, Object.assign({}, getTableProps()), React__default.createElement(TableHead, null, headerGroups.map(function (headerGroup) {
    return React__default.createElement(TableRow, Object.assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) {
      return React__default.createElement(TableCell, Object.assign({}, column.getHeaderProps(column.getSortByToggleProps()), {
        style: {
          border: '1px solid lightgrey',
          textAlign: 'center'
        }
      }), !column.disableSortBy ? React__default.createElement(material.TableSortLabel, {
        active: column.isSorted,
        direction: column.isSorted ? column.isSortedDesc ? 'asc' : 'desc' : 'asc'
      }, column.render('Header')) : column.render('Header'));
    }));
  })), React__default.createElement(TableBody, Object.assign({}, getTableBodyProps()), rows.map(function (row, _i) {
    prepareRow(row);
    return React__default.createElement(TableRow, Object.assign({}, row.getRowProps()), row.cells.map(function (cell) {
      return React__default.createElement(TableCell, Object.assign({}, cell.getCellProps(), {
        style: {
          border: '1px solid lightgrey'
        }
      }), cell.render('Cell'));
    }));
  })));
}

function MTable(_ref2) {
  var item = _ref2.item;
  var config = item.config;
  useUiConfigChangeReducer(item);

  var _useTables = useTables(),
      count = _useTables.count,
      pageSize = _useTables.pageSize,
      rowsPerPage = _useTables.rowsPerPage,
      search = _useTables.search,
      handleChangePage = _useTables.handleChangePage,
      handleChangeRowsPerPage = _useTables.handleChangeRowsPerPage,
      handleSearch = _useTables.handleSearch;

  return React__default.createElement("div", null, item.title && React__default.createElement(material.Box, {
    marginBottom: 2
  }, React__default.createElement(material.CardHeader, {
    title: item.title,
    sx: {
      textAlign: item.titlePosition
    }
  }), React__default.createElement(material.Divider, null)), React__default.createElement(material.Box, {
    marginBottom: 2,
    textAlign: "right"
  }, React__default.createElement(material.OutlinedInput, {
    id: "outlined-basic",
    type: "text",
    value: search,
    placeholder: "Search",
    startAdornment: React__default.createElement(material.InputAdornment, {
      position: "start"
    }, React__default.createElement(SearchIcon, null)),
    onChange: handleSearch
  })), React__default.createElement(CssBaseline, null), React__default.createElement(Table, {
    columns: config.header,
    data: config.data
  }), count && React__default.createElement(material.TablePagination, {
    component: "div",
    count: count ? count : 0,
    rowsPerPage: rowsPerPage ? rowsPerPage : 0,
    page: pageSize ? pageSize : 0,
    onPageChange: handleChangePage,
    onRowsPerPageChange: handleChangeRowsPerPage
  }));
}

var dataObject = {};

function App() {
  var getComponent = function getComponent(item) {
    switch (item.type) {
      case CHART:
        return React__default.createElement(Charts, Object.assign({}, item));

      case TABLE:
        return React__default.createElement(MTable, {
          item: item
        });

      case FILTER:
        return React__default.createElement(FilterSection, {
          item: item,
          dataObject: dataObject
        });

      case DASHBOARD_CARDS:
        return React__default.createElement(DashboardCard, {
          item: item
        });

      case MAP_CHART:
        return React__default.createElement(Maps, {
          item: item
        });
    }
  };

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(material.Grid, {
    container: true,
    spacing: 3
  }, visualizationDemo.map(function (item, index) {
    return React__default.createElement(material.Grid, {
      item: true,
      xs: item.xs,
      md: item.md,
      key: index
    }, React__default.createElement(SubCard, null, getComponent(item)));
  })));
}

var accountReducer = function accountReducer(state, action) {
  if (state === void 0) {
    state = {};
  }

  switch (action.type) {
    case CHANGE_FILTERS:
      {
        var _extends2;

        var _action$payload = action.payload,
            fieldName = _action$payload.fieldName,
            value = _action$payload.value;
        return _extends({}, state, (_extends2 = {}, _extends2[fieldName] = value, _extends2));
      }

    default:
      {
        return _extends({}, state);
      }
  }
};

var reducer = /*#__PURE__*/redux.combineReducers({
  filters: accountReducer,
  table: tableReducer,
  uiConfigChange: uiConfigChangeReducer
});

var store = /*#__PURE__*/redux.createStore(reducer, /*#__PURE__*/reduxDevtoolsExtension.composeWithDevTools( /*#__PURE__*/redux.applyMiddleware(thunk)));
console.log('in store index.ts: ', store);

function Thing() {
  return React__default.createElement(reactRedux.Provider, {
    store: store
  }, React__default.createElement(App, null));
}

exports.default = Thing;
//# sourceMappingURL=dashboardvisualization.cjs.development.js.map
