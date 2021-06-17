(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.QunarAssist = factory());
}(this, (function () { 'use strict';

  function ownKeys$3(object, enumerableOnly) {
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

  function _objectSpread2$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$3(Object(source), true).forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$3(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$1 = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof$1 = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof$1(obj);
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
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

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
  }

  function _getPrototypeOf$1(o) {
    _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$1(o);
  }

  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf$1(o, p);
  }

  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn$1(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized$1(self);
  }

  function _createSuper$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf$1(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf$1(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn$1(this, result);
    };
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule$1(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var check$1 = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1$1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check$1(typeof globalThis == 'object' && globalThis) ||
    check$1(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check$1(typeof self == 'object' && self) ||
    check$1(typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var fails$1 = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Detect IE8's incomplete defineProperty implementation
  var descriptors$1 = !fails$1(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG$1 = getOwnPropertyDescriptor$5 && !$propertyIsEnumerable$2.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$e = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$5(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$2;

  var objectPropertyIsEnumerable$1 = {
  	f: f$e
  };

  var createPropertyDescriptor$1 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString$3 = {}.toString;

  var classofRaw$1 = function (it) {
    return toString$3.call(it).slice(8, -1);
  };

  var split$1 = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject$1 = fails$1(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw$1(it) == 'String' ? split$1.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$1 = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject$1 = function (it) {
    return indexedObject$1(requireObjectCoercible$1(it));
  };

  var isObject$1 = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive$1 = function (input, PREFERRED_STRING) {
    if (!isObject$1(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$1(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$1 = function (argument) {
    return Object(requireObjectCoercible$1(argument));
  };

  var hasOwnProperty$1 = {}.hasOwnProperty;

  var has$3 = function hasOwn(it, key) {
    return hasOwnProperty$1.call(toObject$1(it), key);
  };

  var document$6 = global_1$1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$1(document$6) && isObject$1(document$6.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$6.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine$1 = !descriptors$1 && !fails$1(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(documentCreateElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$d = descriptors$1 ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$1(O);
    P = toPrimitive$1(P, true);
    if (ie8DomDefine$1) try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) { /* empty */ }
    if (has$3(O, P)) return createPropertyDescriptor$1(!objectPropertyIsEnumerable$1.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor$1 = {
  	f: f$d
  };

  var anObject$1 = function (it) {
    if (!isObject$1(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty$2 = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f$c = descriptors$1 ? $defineProperty$2 : function defineProperty(O, P, Attributes) {
    anObject$1(O);
    P = toPrimitive$1(P, true);
    anObject$1(Attributes);
    if (ie8DomDefine$1) try {
      return $defineProperty$2(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty$1 = {
  	f: f$c
  };

  var createNonEnumerableProperty$1 = descriptors$1 ? function (object, key, value) {
    return objectDefineProperty$1.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal$1 = function (key, value) {
    try {
      createNonEnumerableProperty$1(global_1$1, key, value);
    } catch (error) {
      global_1$1[key] = value;
    } return value;
  };

  var SHARED$1 = '__core-js_shared__';
  var store$3 = global_1$1[SHARED$1] || setGlobal$1(SHARED$1, {});

  var sharedStore$1 = store$3;

  var functionToString$1 = Function.toString;

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof sharedStore$1.inspectSource != 'function') {
    sharedStore$1.inspectSource = function (it) {
      return functionToString$1.call(it);
    };
  }

  var inspectSource$1 = sharedStore$1.inspectSource;

  var WeakMap$3 = global_1$1.WeakMap;

  var nativeWeakMap$1 = typeof WeakMap$3 === 'function' && /native code/.test(inspectSource$1(WeakMap$3));

  var shared$1 = createCommonjsModule$1(function (module) {
  (module.exports = function (key, value) {
    return sharedStore$1[key] || (sharedStore$1[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.12.1',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id$1 = 0;
  var postfix$1 = Math.random();

  var uid$1 = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$1 + postfix$1).toString(36);
  };

  var keys$2 = shared$1('keys');

  var sharedKey$1 = function (key) {
    return keys$2[key] || (keys$2[key] = uid$1(key));
  };

  var hiddenKeys$3 = {};

  var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
  var WeakMap$2 = global_1$1.WeakMap;
  var set$3, get$1, has$2;

  var enforce$1 = function (it) {
    return has$2(it) ? get$1(it) : set$3(it, {});
  };

  var getterFor$1 = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$1(it) || (state = get$1(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (nativeWeakMap$1 || sharedStore$1.state) {
    var store$2 = sharedStore$1.state || (sharedStore$1.state = new WeakMap$2());
    var wmget$1 = store$2.get;
    var wmhas$1 = store$2.has;
    var wmset$1 = store$2.set;
    set$3 = function (it, metadata) {
      if (wmhas$1.call(store$2, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$1);
      metadata.facade = it;
      wmset$1.call(store$2, it, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return wmget$1.call(store$2, it) || {};
    };
    has$2 = function (it) {
      return wmhas$1.call(store$2, it);
    };
  } else {
    var STATE$1 = sharedKey$1('state');
    hiddenKeys$3[STATE$1] = true;
    set$3 = function (it, metadata) {
      if (has$3(it, STATE$1)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$1);
      metadata.facade = it;
      createNonEnumerableProperty$1(it, STATE$1, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return has$3(it, STATE$1) ? it[STATE$1] : {};
    };
    has$2 = function (it) {
      return has$3(it, STATE$1);
    };
  }

  var internalState$1 = {
    set: set$3,
    get: get$1,
    has: has$2,
    enforce: enforce$1,
    getterFor: getterFor$1
  };

  var redefine$1 = createCommonjsModule$1(function (module) {
  var getInternalState = internalState$1.get;
  var enforceInternalState = internalState$1.enforce;
  var TEMPLATE = String(String).split('String');

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$3(value, 'name')) {
        createNonEnumerableProperty$1(value, 'name', key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }
    if (O === global_1$1) {
      if (simple) O[key] = value;
      else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty$1(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource$1(this);
  });
  });

  var path$1 = global_1$1;

  var aFunction$3 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn$1 = function (namespace, method) {
    return arguments.length < 2 ? aFunction$3(path$1[namespace]) || aFunction$3(global_1$1[namespace])
      : path$1[namespace] && path$1[namespace][method] || global_1$1[namespace] && global_1$1[namespace][method];
  };

  var ceil$1 = Math.ceil;
  var floor$3 = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger
  var toInteger$1 = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$3 : ceil$1)(argument);
  };

  var min$6 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$1 = function (argument) {
    return argument > 0 ? min$6(toInteger$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max$4 = Math.max;
  var min$5 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$1 = function (index, length) {
    var integer = toInteger$1(index);
    return integer < 0 ? max$4(integer + length, 0) : min$5(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$7 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$1($this);
      var length = toLength$1(O.length);
      var index = toAbsoluteIndex$1(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes$1 = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$7(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$7(false)
  };

  var indexOf$1 = arrayIncludes$1.indexOf;


  var objectKeysInternal$1 = function (object, names) {
    var O = toIndexedObject$1(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has$3(hiddenKeys$3, key) && has$3(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has$3(O, key = names[i++])) {
      ~indexOf$1(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$1 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var hiddenKeys$2 = enumBugKeys$1.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  var f$b = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal$1(O, hiddenKeys$2);
  };

  var objectGetOwnPropertyNames$1 = {
  	f: f$b
  };

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f$a = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols$1 = {
  	f: f$a
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys$2 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames$1.f(anObject$1(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols$1.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties$1 = function (target, source) {
    var keys = ownKeys$2(source);
    var defineProperty = objectDefineProperty$1.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor$1.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$3(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement$1 = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data$1[normalize$1(feature)];
    return value == POLYFILL$1 ? true
      : value == NATIVE$1 ? false
      : typeof detection == 'function' ? fails$1(detection)
      : !!detection;
  };

  var normalize$1 = isForced$1.normalize = function (string) {
    return String(string).replace(replacement$1, '.').toLowerCase();
  };

  var data$1 = isForced$1.data = {};
  var NATIVE$1 = isForced$1.NATIVE = 'N';
  var POLYFILL$1 = isForced$1.POLYFILL = 'P';

  var isForced_1$1 = isForced$1;

  var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor$1.f;






  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export$1 = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1$1;
    } else if (STATIC) {
      target = global_1$1[TARGET] || setGlobal$1(TARGET, {});
    } else {
      target = (global_1$1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$4(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties$1(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$1(sourceProperty, 'sham', true);
      }
      // extend global
      redefine$1(target, key, sourceProperty, options);
    }
  };

  var aFunction$2 = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  // optional / simple context binding
  var functionBindContext$1 = function (fn, that, length) {
    aFunction$2(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$2 = Array.isArray || function isArray(arg) {
    return classofRaw$1(arg) == 'Array';
  };

  var engineUserAgent$1 = getBuiltIn$1('navigator', 'userAgent') || '';

  var process$7 = global_1$1.process;
  var versions$1 = process$7 && process$7.versions;
  var v8$1 = versions$1 && versions$1.v8;
  var match$1, version$1;

  if (v8$1) {
    match$1 = v8$1.split('.');
    version$1 = match$1[0] < 4 ? 1 : match$1[0] + match$1[1];
  } else if (engineUserAgent$1) {
    match$1 = engineUserAgent$1.match(/Edge\/(\d+)/);
    if (!match$1 || match$1[1] >= 74) {
      match$1 = engineUserAgent$1.match(/Chrome\/(\d+)/);
      if (match$1) version$1 = match$1[1];
    }
  }

  var engineV8Version$1 = version$1 && +version$1;

  /* eslint-disable es/no-symbol -- required for testing */



  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails$1(function () {
    return !String(Symbol()) ||
      // Chrome 38 Symbol has incorrect toString conversion
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && engineV8Version$1 && engineV8Version$1 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */


  var useSymbolAsUid$1 = nativeSymbol$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var WellKnownSymbolsStore$2 = shared$1('wks');
  var Symbol$2 = global_1$1.Symbol;
  var createWellKnownSymbol$1 = useSymbolAsUid$1 ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

  var wellKnownSymbol$1 = function (name) {
    if (!has$3(WellKnownSymbolsStore$2, name) || !(nativeSymbol$1 || typeof WellKnownSymbolsStore$2[name] == 'string')) {
      if (nativeSymbol$1 && has$3(Symbol$2, name)) {
        WellKnownSymbolsStore$2[name] = Symbol$2[name];
      } else {
        WellKnownSymbolsStore$2[name] = createWellKnownSymbol$1('Symbol.' + name);
      }
    } return WellKnownSymbolsStore$2[name];
  };

  var SPECIES$d = wellKnownSymbol$1('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$1 = function (originalArray, length) {
    var C;
    if (isArray$2(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray$2(C.prototype))) C = undefined;
      else if (isObject$1(C)) {
        C = C[SPECIES$d];
        if (C === null) C = undefined;
      }
    } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push$1 = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
  var createMethod$6 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$1($this);
      var self = indexedObject$1(O);
      var boundFunction = functionBindContext$1(callbackfn, that, 3);
      var length = toLength$1(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$1;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push$1.call(target, value); // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$1.call(target, value); // filterOut
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration$1 = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$6(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$6(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$6(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$6(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$6(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$6(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$6(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod$6(7)
  };

  var SPECIES$c = wellKnownSymbol$1('species');

  var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version$1 >= 51 || !fails$1(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$c] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $map$1 = arrayIteration$1.map;


  var HAS_SPECIES_SUPPORT$4 = arrayMethodHasSpeciesSupport$1('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  _export$1({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$4 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  /*
  ie10 不支持 location.origin，以下是hack方法
  */
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }

  var createProperty$1 = function (object, key, value) {
    var propertyKey = toPrimitive$1(key);
    if (propertyKey in object) objectDefineProperty$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
    else object[propertyKey] = value;
  };

  var IS_CONCAT_SPREADABLE$1 = wellKnownSymbol$1('isConcatSpreadable');
  var MAX_SAFE_INTEGER$2 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED$1 = 'Maximum allowed index exceeded';

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT$1 = engineV8Version$1 >= 51 || !fails$1(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE$1] = false;
    return array.concat()[0] !== array;
  });

  var SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('concat');

  var isConcatSpreadable$1 = function (O) {
    if (!isObject$1(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE$1];
    return spreadable !== undefined ? !!spreadable : isArray$2(O);
  };

  var FORCED$6 = !IS_CONCAT_SPREADABLE_SUPPORT$1 || !SPECIES_SUPPORT$1;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export$1({ target: 'Array', proto: true, forced: FORCED$6 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$1(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable$1(E)) {
          len = toLength$1(E.length);
          if (n + len > MAX_SAFE_INTEGER$2) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER$2) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);
          createProperty$1(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$1 = Object.keys || function keys(O) {
    return objectKeysInternal$1(O, enumBugKeys$1);
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var objectDefineProperties = descriptors$1 ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$1(O);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty$1.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var html$1 = getBuiltIn$1('document', 'documentElement');

  var GT = '>';
  var LT = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$2 = sharedKey$1('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      /* global ActiveXObject -- old IE */
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys$1.length;
    while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
    return NullProtoObject();
  };

  hiddenKeys$3[IE_PROTO$2] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject$1(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$2] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  var UNSCOPABLES = wellKnownSymbol$1('unscopables');
  var ArrayPrototype$2 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$2[UNSCOPABLES] == undefined) {
    objectDefineProperty$1.f(ArrayPrototype$2, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype$2[UNSCOPABLES][key] = true;
  };

  var $includes = arrayIncludes$1.includes;


  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  _export$1({ target: 'Array', proto: true }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var MATCH$3 = wellKnownSymbol$1('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp$1 = function (it) {
    var isRegExp;
    return isObject$1(it) && ((isRegExp = it[MATCH$3]) !== undefined ? !!isRegExp : classofRaw$1(it) == 'RegExp');
  };

  var notARegexp = function (it) {
    if (isRegexp$1(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    } return it;
  };

  var MATCH$2 = wellKnownSymbol$1('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH$2] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  _export$1({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~String(requireObjectCoercible$1(this))
        .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$1(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var nativeJoin$1 = [].join;

  var ES3_STRINGS$1 = indexedObject$1 != Object;
  var STRICT_METHOD$3 = arrayMethodIsStrict$1('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  _export$1({ target: 'Array', proto: true, forced: ES3_STRINGS$1 || !STRICT_METHOD$3 }, {
    join: function join(separator) {
      return nativeJoin$1.call(toIndexedObject$1(this), separator === undefined ? ',' : separator);
    }
  });

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$1(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.
  function RE$1(s, f) {
    return RegExp(s, f);
  }

  var UNSUPPORTED_Y$7 = fails$1(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE$1('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  var BROKEN_CARET$1 = fails$1(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE$1('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers$1 = {
  	UNSUPPORTED_Y: UNSUPPORTED_Y$7,
  	BROKEN_CARET: BROKEN_CARET$1
  };

  /* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */




  var nativeExec$1 = RegExp.prototype.exec;
  var nativeReplace$1 = shared$1('native-string-replace', String.prototype.replace);

  var patchedExec$1 = nativeExec$1;

  var UPDATES_LAST_INDEX_WRONG$1 = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec$1.call(re1, 'a');
    nativeExec$1.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$6 = regexpStickyHelpers$1.UNSUPPORTED_Y || regexpStickyHelpers$1.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED$1 = /()??/.exec('')[1] !== undefined;

  var PATCH$1 = UPDATES_LAST_INDEX_WRONG$1 || NPCG_INCLUDED$1 || UNSUPPORTED_Y$6;

  if (PATCH$1) {
    patchedExec$1 = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y$6 && re.sticky;
      var flags = regexpFlags$1.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED$1) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG$1) lastIndex = re.lastIndex;

      match = nativeExec$1.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG$1 && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED$1 && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace$1.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec$1 = patchedExec$1;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  _export$1({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec$1 }, {
    exec: regexpExec$1
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points







  var SPECIES$b = wellKnownSymbol$1('species');
  var RegExpPrototype$3 = RegExp.prototype;

  var REPLACE_SUPPORTS_NAMED_GROUPS$1 = !fails$1(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0$1 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  var REPLACE$1 = wellKnownSymbol$1('replace');
  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE$1 = (function () {
    if (/./[REPLACE$1]) {
      return /./[REPLACE$1]('a', '$0') === '';
    }
    return false;
  })();

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC$1 = !fails$1(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic$1 = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol$1(KEY);

    var DELEGATES_TO_SYMBOL = !fails$1(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$b] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !(
        REPLACE_SUPPORTS_NAMED_GROUPS$1 &&
        REPLACE_KEEPS_$0$1 &&
        !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE$1
      )) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC$1)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype$3.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }, {
        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0$1,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE$1
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];

      redefine$1(String.prototype, KEY, stringMethod);
      redefine$1(RegExpPrototype$3, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return regexMethod.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return regexMethod.call(string, this); }
      );
    }

    if (sham) createNonEnumerableProperty$1(RegExpPrototype$3[SYMBOL], 'sham', true);
  };

  var SPECIES$a = wellKnownSymbol$1('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$1(O).constructor;
    var S;
    return C === undefined || (S = anObject$1(C)[SPECIES$a]) == undefined ? defaultConstructor : aFunction$2(S);
  };

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod$5 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible$1($this));
      var position = toInteger$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte$1 = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$5(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$5(true)
  };

  var charAt$2 = stringMultibyte$1.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$1 = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract$1 = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classofRaw$1(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec$1.call(R, S);
  };

  var UNSUPPORTED_Y$5 = regexpStickyHelpers$1.UNSUPPORTED_Y;
  var arrayPush$1 = [].push;
  var min$4 = Math.min;
  var MAX_UINT32$1 = 0xFFFFFFFF;

  // @@split logic
  fixRegexpWellKnownSymbolLogic$1('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible$1(this));
        var lim = limit === undefined ? MAX_UINT32$1 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegexp$1(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec$1.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush$1.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible$1(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;

        var rx = anObject$1(regexp);
        var S = String(this);
        var C = speciesConstructor$1(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (UNSUPPORTED_Y$5 ? 'g' : 'y');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(UNSUPPORTED_Y$5 ? '^(?:' + rx.source + ')' : rx, flags);
        var lim = limit === undefined ? MAX_UINT32$1 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return regexpExecAbstract$1(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = UNSUPPORTED_Y$5 ? 0 : q;
          var z = regexpExecAbstract$1(splitter, UNSUPPORTED_Y$5 ? S.slice(q) : S);
          var e;
          if (
            z === null ||
            (e = min$4(toLength$1(splitter.lastIndex + (UNSUPPORTED_Y$5 ? q : 0)), S.length)) === p
          ) {
            q = advanceStringIndex$1(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  }, UNSUPPORTED_Y$5);

  var TO_STRING_TAG$6 = wellKnownSymbol$1('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$6] = 'z';

  var toStringTagSupport$1 = String(test$1) === '[object z]';

  var TO_STRING_TAG$5 = wellKnownSymbol$1('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS$1 = classofRaw$1(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet$1 = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$1 = toStringTagSupport$1 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet$1(O = Object(it), TO_STRING_TAG$5)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS$1 ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString$1 = toStringTagSupport$1 ? {}.toString : function toString() {
    return '[object ' + classof$1(this) + ']';
  };

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!toStringTagSupport$1) {
    redefine$1(Object.prototype, 'toString', objectToString$1, { unsafe: true });
  }

  var TO_STRING = 'toString';
  var RegExpPrototype$2 = RegExp.prototype;
  var nativeToString = RegExpPrototype$2[TO_STRING];

  var NOT_GENERIC = fails$1(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine$1(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$1(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$2) ? regexpFlags$1.call(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  // @@match logic
  fixRegexpWellKnownSymbolLogic$1('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible$1(this);
        var matcher = regexp == undefined ? undefined : regexp[MATCH];
        return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative(nativeMatch, regexp, this);
        if (res.done) return res.value;

        var rx = anObject$1(regexp);
        var S = String(this);

        if (!rx.global) return regexpExecAbstract$1(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regexpExecAbstract$1(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames$1.f;

  var toString$2 = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return windowNames.slice();
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var f$9 = function getOwnPropertyNames(it) {
    return windowNames && toString$2.call(it) == '[object Window]'
      ? getWindowNames(it)
      : $getOwnPropertyNames$1(toIndexedObject$1(it));
  };

  var objectGetOwnPropertyNamesExternal = {
  	f: f$9
  };

  var f$8 = wellKnownSymbol$1;

  var wellKnownSymbolWrapped = {
  	f: f$8
  };

  var defineProperty$7 = objectDefineProperty$1.f;

  var defineWellKnownSymbol = function (NAME) {
    var Symbol = path$1.Symbol || (path$1.Symbol = {});
    if (!has$3(Symbol, NAME)) defineProperty$7(Symbol, NAME, {
      value: wellKnownSymbolWrapped.f(NAME)
    });
  };

  var defineProperty$6 = objectDefineProperty$1.f;



  var TO_STRING_TAG$4 = wellKnownSymbol$1('toStringTag');

  var setToStringTag$1 = function (it, TAG, STATIC) {
    if (it && !has$3(it = STATIC ? it : it.prototype, TO_STRING_TAG$4)) {
      defineProperty$6(it, TO_STRING_TAG$4, { configurable: true, value: TAG });
    }
  };

  var $forEach$2 = arrayIteration$1.forEach;

  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var TO_PRIMITIVE = wellKnownSymbol$1('toPrimitive');
  var setInternalState$4 = internalState$1.set;
  var getInternalState$4 = internalState$1.getterFor(SYMBOL);
  var ObjectPrototype$2 = Object[PROTOTYPE];
  var $Symbol = global_1$1.Symbol;
  var $stringify = getBuiltIn$1('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor$1.f;
  var nativeDefineProperty = objectDefineProperty$1.f;
  var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = objectPropertyIsEnumerable$1.f;
  var AllSymbols = shared$1('symbols');
  var ObjectPrototypeSymbols = shared$1('op-symbols');
  var StringToSymbolRegistry = shared$1('string-to-symbol-registry');
  var SymbolToStringRegistry = shared$1('symbol-to-string-registry');
  var WellKnownSymbolsStore$1 = shared$1('wks');
  var QObject = global_1$1.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = descriptors$1 && fails$1(function () {
    return objectCreate(nativeDefineProperty({}, 'a', {
      get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$2, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$2[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$2) {
      nativeDefineProperty(ObjectPrototype$2, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;

  var wrap$2 = function (tag, description) {
    var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE]);
    setInternalState$4(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!descriptors$1) symbol.description = description;
    return symbol;
  };

  var isSymbol = useSymbolAsUid$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return Object(it) instanceof $Symbol;
  };

  var $defineProperty$1 = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$2) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
    anObject$1(O);
    var key = toPrimitive$1(P, true);
    anObject$1(Attributes);
    if (has$3(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!has$3(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$1(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (has$3(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor$1(0, false) });
      } return setSymbolDescriptor(O, key, Attributes);
    } return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$1(O);
    var properties = toIndexedObject$1(Properties);
    var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
    $forEach$2(keys, function (key) {
      if (!descriptors$1 || $propertyIsEnumerable$1.call(properties, key)) $defineProperty$1(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
  };

  var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
    var P = toPrimitive$1(V, true);
    var enumerable = nativePropertyIsEnumerable.call(this, P);
    if (this === ObjectPrototype$2 && has$3(AllSymbols, P) && !has$3(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !has$3(this, P) || !has$3(AllSymbols, P) || has$3(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$1(O);
    var key = toPrimitive$1(P, true);
    if (it === ObjectPrototype$2 && has$3(AllSymbols, key) && !has$3(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
    if (descriptor && has$3(AllSymbols, key) && !(has$3(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$1(O));
    var result = [];
    $forEach$2(names, function (key) {
      if (!has$3(AllSymbols, key) && !has$3(hiddenKeys$3, key)) result.push(key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$1(O));
    var result = [];
    $forEach$2(names, function (key) {
      if (has$3(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has$3(ObjectPrototype$2, key))) {
        result.push(AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!nativeSymbol$1) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
      var tag = uid$1(description);
      var setter = function (value) {
        if (this === ObjectPrototype$2) setter.call(ObjectPrototypeSymbols, value);
        if (has$3(this, HIDDEN) && has$3(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor$1(1, value));
      };
      if (descriptors$1 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$2, tag, { configurable: true, set: setter });
      return wrap$2(tag, description);
    };

    redefine$1($Symbol[PROTOTYPE], 'toString', function toString() {
      return getInternalState$4(this).tag;
    });

    redefine$1($Symbol, 'withoutSetter', function (description) {
      return wrap$2(uid$1(description), description);
    });

    objectPropertyIsEnumerable$1.f = $propertyIsEnumerable$1;
    objectDefineProperty$1.f = $defineProperty$1;
    objectGetOwnPropertyDescriptor$1.f = $getOwnPropertyDescriptor$1;
    objectGetOwnPropertyNames$1.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    objectGetOwnPropertySymbols$1.f = $getOwnPropertySymbols;

    wellKnownSymbolWrapped.f = function (name) {
      return wrap$2(wellKnownSymbol$1(name), name);
    };

    if (descriptors$1) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$4(this).description;
        }
      });
      {
        redefine$1(ObjectPrototype$2, 'propertyIsEnumerable', $propertyIsEnumerable$1, { unsafe: true });
      }
    }
  }

  _export$1({ global: true, wrap: true, forced: !nativeSymbol$1, sham: !nativeSymbol$1 }, {
    Symbol: $Symbol
  });

  $forEach$2(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol(name);
  });

  _export$1({ target: SYMBOL, stat: true, forced: !nativeSymbol$1 }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function (key) {
      var string = String(key);
      if (has$3(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
      if (has$3(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  _export$1({ target: 'Object', stat: true, forced: !nativeSymbol$1, sham: !descriptors$1 }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty$1,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1
  });

  _export$1({ target: 'Object', stat: true, forced: !nativeSymbol$1 }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  _export$1({ target: 'Object', stat: true, forced: fails$1(function () { objectGetOwnPropertySymbols$1.f(1); }) }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return objectGetOwnPropertySymbols$1.f(toObject$1(it));
    }
  });

  // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify
  if ($stringify) {
    var FORCED_JSON_STRINGIFY = !nativeSymbol$1 || fails$1(function () {
      var symbol = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      return $stringify([symbol]) != '[null]'
        // WebKit converts symbol values to JSON as null
        || $stringify({ a: symbol }) != '{}'
        // V8 throws on boxed symbols
        || $stringify(Object(symbol)) != '{}';
    });

    _export$1({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = [it];
        var index = 1;
        var $replacer;
        while (arguments.length > index) args.push(arguments[index++]);
        $replacer = replacer;
        if (!isObject$1(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!isArray$2(replacer)) replacer = function (key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return $stringify.apply(null, args);
      }
    });
  }

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
    createNonEnumerableProperty$1($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  }
  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$1($Symbol, SYMBOL);

  hiddenKeys$3[HIDDEN] = true;

  var defineProperty$5 = objectDefineProperty$1.f;


  var NativeSymbol = global_1$1.Symbol;

  if (descriptors$1 && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined
  )) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
      var result = this instanceof SymbolWrapper
        ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };
    copyConstructorProperties$1(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;

    var symbolToString = symbolPrototype.toString;
    var native = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty$5(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject$1(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (has$3(EmptyStringDescriptionStore, symbol)) return '';
        var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });

    _export$1({ global: true, forced: true }, {
      Symbol: SymbolWrapper
    });
  }

  // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol('iterator');

  var iterators$1 = {};

  var correctPrototypeGetter$1 = !fails$1(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO$1 = sharedKey$1('IE_PROTO');
  var ObjectPrototype$1 = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf$1 = correctPrototypeGetter$1 ? Object.getPrototypeOf : function (O) {
    O = toObject$1(O);
    if (has$3(O, IE_PROTO$1)) return O[IE_PROTO$1];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectPrototype$1 : null;
  };

  var ITERATOR$8 = wellKnownSymbol$1('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  var returnThis$2 = function () { return this; };

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf$1(objectGetPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$1(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$8].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  if (!has$3(IteratorPrototype$2, ITERATOR$8)) {
    createNonEnumerableProperty$1(IteratorPrototype$2, ITERATOR$8, returnThis$2);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





  var returnThis$1 = function () { return this; };

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor$1(1, next) });
    setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
    iterators$1[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var aPossiblePrototype$1 = function (it) {
    if (!isObject$1(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    } return it;
  };

  /* eslint-disable no-proto -- safe */



  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$1(O);
      aPossiblePrototype$1(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$7 = wellKnownSymbol$1('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$7]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf$1(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf$1(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (objectSetPrototypeOf$1) {
            objectSetPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$7] != 'function') {
            createNonEnumerableProperty$1(CurrentIteratorPrototype, ITERATOR$7, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }

    // define iterator
    if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
      createNonEnumerableProperty$1(IterablePrototype, ITERATOR$7, defaultIterator);
    }
    iterators$1[NAME] = defaultIterator;

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine$1(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export$1({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    return methods;
  };

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$3 = internalState$1.set;
  var getInternalState$3 = internalState$1.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$3(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$1(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$3(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return { value: undefined, done: true };
    }
    if (kind == 'keys') return { value: index, done: false };
    if (kind == 'values') return { value: target[index], done: false };
    return { value: [index, target[index]], done: false };
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  iterators$1.Arguments = iterators$1.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var charAt$1 = stringMultibyte$1.charAt;



  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = internalState$1.set;
  var getInternalState$2 = internalState$1.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$2(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt$1(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables$1 = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var ITERATOR$6 = wellKnownSymbol$1('iterator');
  var TO_STRING_TAG$3 = wellKnownSymbol$1('toStringTag');
  var ArrayValues = es_array_iterator.values;

  for (var COLLECTION_NAME$2 in domIterables$1) {
    var Collection$2 = global_1$1[COLLECTION_NAME$2];
    var CollectionPrototype$2 = Collection$2 && Collection$2.prototype;
    if (CollectionPrototype$2) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$2[ITERATOR$6] !== ArrayValues) try {
        createNonEnumerableProperty$1(CollectionPrototype$2, ITERATOR$6, ArrayValues);
      } catch (error) {
        CollectionPrototype$2[ITERATOR$6] = ArrayValues;
      }
      if (!CollectionPrototype$2[TO_STRING_TAG$3]) {
        createNonEnumerableProperty$1(CollectionPrototype$2, TO_STRING_TAG$3, COLLECTION_NAME$2);
      }
      if (domIterables$1[COLLECTION_NAME$2]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype$2[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          createNonEnumerableProperty$1(CollectionPrototype$2, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype$2[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  }

  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$1('slice');

  var SPECIES$9 = wellKnownSymbol$1('species');
  var nativeSlice$1 = [].slice;
  var max$3 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export$1({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$1(this);
      var length = toLength$1(O.length);
      var k = toAbsoluteIndex$1(start, length);
      var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$2(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (typeof Constructor == 'function' && (Constructor === Array || isArray$2(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$1(Constructor)) {
          Constructor = Constructor[SPECIES$9];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice$1.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max$3(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor$1.f;


  var FAILS_ON_PRIMITIVES$5 = fails$1(function () { nativeGetOwnPropertyDescriptor(1); });
  var FORCED$5 = !descriptors$1 || FAILS_ON_PRIMITIVES$5;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  _export$1({ target: 'Object', stat: true, forced: FORCED$5, sham: !descriptors$1 }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
    }
  });

  var getOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;

  // eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
  var FAILS_ON_PRIMITIVES$4 = fails$1(function () { return !Object.getOwnPropertyNames(1); });

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  _export$1({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$4 }, {
    getOwnPropertyNames: getOwnPropertyNames$1
  });

  var floor$2 = Math.floor;
  var replace = ''.replace;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$1(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$2(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var max$2 = Math.max;
  var min$3 = Math.min;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegexpWellKnownSymbolLogic$1('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible$1(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        if (
          (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
          (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
        ) {
          var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
          if (res.done) return res.value;
        }

        var rx = anObject$1(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regexpExecAbstract$1(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max$2(min$3(toInteger$1(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];
  });

  var FAILS_ON_PRIMITIVES$3 = fails$1(function () { objectKeys$1(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  _export$1({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$3 }, {
    keys: function keys(it) {
      return objectKeys$1(toObject$1(it));
    }
  });

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  _export$1({ target: 'Object', stat: true }, {
    setPrototypeOf: objectSetPrototypeOf$1
  });

  var iteratorClose$1 = function (iterator) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) {
      return anObject$1(returnMethod.call(iterator)).value;
    }
  };

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$1(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (error) {
      iteratorClose$1(iterator);
      throw error;
    }
  };

  var ITERATOR$5 = wellKnownSymbol$1('iterator');
  var ArrayPrototype$1 = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$1 = function (it) {
    return it !== undefined && (iterators$1.Array === it || ArrayPrototype$1[ITERATOR$5] === it);
  };

  var ITERATOR$4 = wellKnownSymbol$1('iterator');

  var getIteratorMethod$1 = function (it) {
    if (it != undefined) return it[ITERATOR$4]
      || it['@@iterator']
      || iterators$1[classof$1(it)];
  };

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$1(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod$1(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = functionBindContext$1(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();
      for (;!(step = next.call(iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$1(result, index, value);
      }
    } else {
      length = toLength$1(O.length);
      result = new C(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$1(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var ITERATOR$3 = wellKnownSymbol$1('iterator');
  var SAFE_CLOSING$1 = false;

  try {
    var called$1 = 0;
    var iteratorWithReturn$1 = {
      next: function () {
        return { done: !!called$1++ };
      },
      'return': function () {
        SAFE_CLOSING$1 = true;
      }
    };
    iteratorWithReturn$1[ITERATOR$3] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn$1, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING$1) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$3] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var INCORRECT_ITERATION$2 = !checkCorrectnessOfIteration$1(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  _export$1({ target: 'Array', stat: true, forced: INCORRECT_ITERATION$2 }, {
    from: arrayFrom
  });

  var slice$2 = [].slice;
  var MSIE$1 = /MSIE .\./.test(engineUserAgent$1); // <- dirty ie9- check

  var wrap$1 = function (scheduler) {
    return function (handler, timeout /* , ...arguments */) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice$2.call(arguments, 2) : undefined;
      return scheduler(boundArgs ? function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
      } : handler, timeout);
    };
  };

  // ie9- setTimeout & setInterval additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
  _export$1({ global: true, bind: true, forced: MSIE$1 }, {
    // `setTimeout` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    setTimeout: wrap$1(global_1$1.setTimeout),
    // `setInterval` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    setInterval: wrap$1(global_1$1.setInterval)
  });

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      objectSetPrototypeOf$1 &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      typeof (NewTarget = dummy.constructor) == 'function' &&
      NewTarget !== Wrapper &&
      isObject$1(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) objectSetPrototypeOf$1($this, NewTargetPrototype);
    return $this;
  };

  var SPECIES$8 = wellKnownSymbol$1('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$1(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty$1.f;

    if (descriptors$1 && Constructor && !Constructor[SPECIES$8]) {
      defineProperty(Constructor, SPECIES$8, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var defineProperty$4 = objectDefineProperty$1.f;
  var getOwnPropertyNames = objectGetOwnPropertyNames$1.f;





  var enforceInternalState = internalState$1.enforce;



  var MATCH$1 = wellKnownSymbol$1('match');
  var NativeRegExp = global_1$1.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  var UNSUPPORTED_Y$4 = regexpStickyHelpers$1.UNSUPPORTED_Y;

  var FORCED$4 = descriptors$1 && isForced_1$1('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y$4 || fails$1(function () {
    re2[MATCH$1] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  })));

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (FORCED$4) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof RegExpWrapper;
      var patternIsRegExp = isRegexp$1(pattern);
      var flagsAreUndefined = flags === undefined;
      var sticky;

      if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
        return pattern;
      }

      if (CORRECT_NEW) {
        if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
      } else if (pattern instanceof RegExpWrapper) {
        if (flagsAreUndefined) flags = regexpFlags$1.call(pattern);
        pattern = pattern.source;
      }

      if (UNSUPPORTED_Y$4) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }

      var result = inheritIfRequired(
        CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
        thisIsRegExp ? this : RegExpPrototype$1,
        RegExpWrapper
      );

      if (UNSUPPORTED_Y$4 && sticky) {
        var state = enforceInternalState(result);
        state.sticky = true;
      }

      return result;
    };
    var proxy = function (key) {
      key in RegExpWrapper || defineProperty$4(RegExpWrapper, key, {
        configurable: true,
        get: function () { return NativeRegExp[key]; },
        set: function (it) { NativeRegExp[key] = it; }
      });
    };
    var keys$1 = getOwnPropertyNames(NativeRegExp);
    var index = 0;
    while (keys$1.length > index) proxy(keys$1[index++]);
    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    redefine$1(global_1$1, 'RegExp', RegExpWrapper);
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies$1('RegExp');

  var UNSUPPORTED_Y$3 = regexpStickyHelpers$1.UNSUPPORTED_Y;

  // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  // eslint-disable-next-line es/no-regexp-prototype-flags -- required for testing
  if (descriptors$1 && (/./g.flags != 'g' || UNSUPPORTED_Y$3)) {
    objectDefineProperty$1.f(RegExp.prototype, 'flags', {
      configurable: true,
      get: regexpFlags$1
    });
  }

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign$1 = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$3 = Object.defineProperty;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign$1 = !$assign$1 || fails$1(function () {
    // should have correct order of operations (Edge bug)
    if (descriptors$1 && $assign$1({ b: 1 }, $assign$1(defineProperty$3({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$3(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return $assign$1({}, A)[symbol] != 7 || objectKeys$1($assign$1({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$1(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols$1.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable$1.f;
    while (argumentsLength > index) {
      var S = indexedObject$1(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys$1(S).concat(getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!descriptors$1 || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign$1;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  _export$1({ target: 'Object', stat: true, forced: Object.assign !== objectAssign$1 }, {
    assign: objectAssign$1
  });

  var $forEach$1 = arrayIteration$1.forEach;


  var STRICT_METHOD$2 = arrayMethodIsStrict$1('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach$1 = !STRICT_METHOD$2 ? function forEach(callbackfn /* , thisArg */) {
    return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  for (var COLLECTION_NAME$1 in domIterables$1) {
    var Collection$1 = global_1$1[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== arrayForEach$1) try {
      createNonEnumerableProperty$1(CollectionPrototype$1, 'forEach', arrayForEach$1);
    } catch (error) {
      CollectionPrototype$1.forEach = arrayForEach$1;
    }
  }

  var nativePromiseConstructor$1 = global_1$1.Promise;

  var redefineAll$1 = function (target, src, options) {
    for (var key in src) redefine$1(target, key, src[key], options);
    return target;
  };

  var anInstance$1 = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    } return it;
  };

  var Result$1 = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate$1 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext$1(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose$1(iterator);
      return new Result$1(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$1(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$1(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod$1(iterFn)) {
        for (index = 0, length = toLength$1(iterable.length); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && result instanceof Result$1) return result;
        } return new Result$1(false);
      }
      iterator = iterFn.call(iterable);
    }

    next = iterator.next;
    while (!(step = next.call(iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$1(iterator);
        throw error;
      }
      if (typeof result == 'object' && result && result instanceof Result$1) return result;
    } return new Result$1(false);
  };

  var engineIsIos$1 = /(?:iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent$1);

  var engineIsNode$1 = classofRaw$1(global_1$1.process) == 'process';

  var location$2 = global_1$1.location;
  var set$2 = global_1$1.setImmediate;
  var clear$1 = global_1$1.clearImmediate;
  var process$6 = global_1$1.process;
  var MessageChannel$1 = global_1$1.MessageChannel;
  var Dispatch$1 = global_1$1.Dispatch;
  var counter$1 = 0;
  var queue$1 = {};
  var ONREADYSTATECHANGE$1 = 'onreadystatechange';
  var defer$1, channel$1, port$1;

  var run$1 = function (id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue$1.hasOwnProperty(id)) {
      var fn = queue$1[id];
      delete queue$1[id];
      fn();
    }
  };

  var runner$1 = function (id) {
    return function () {
      run$1(id);
    };
  };

  var listener$1 = function (event) {
    run$1(event.data);
  };

  var post$1 = function (id) {
    // old engines have not location.origin
    global_1$1.postMessage(id + '', location$2.protocol + '//' + location$2.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set$2 || !clear$1) {
    set$2 = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue$1[++counter$1] = function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
      };
      defer$1(counter$1);
      return counter$1;
    };
    clear$1 = function clearImmediate(id) {
      delete queue$1[id];
    };
    // Node.js 0.8-
    if (engineIsNode$1) {
      defer$1 = function (id) {
        process$6.nextTick(runner$1(id));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch$1 && Dispatch$1.now) {
      defer$1 = function (id) {
        Dispatch$1.now(runner$1(id));
      };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel$1 && !engineIsIos$1) {
      channel$1 = new MessageChannel$1();
      port$1 = channel$1.port2;
      channel$1.port1.onmessage = listener$1;
      defer$1 = functionBindContext$1(port$1.postMessage, port$1, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      global_1$1.addEventListener &&
      typeof postMessage == 'function' &&
      !global_1$1.importScripts &&
      location$2 && location$2.protocol !== 'file:' &&
      !fails$1(post$1)
    ) {
      defer$1 = post$1;
      global_1$1.addEventListener('message', listener$1, false);
    // IE8-
    } else if (ONREADYSTATECHANGE$1 in documentCreateElement$1('script')) {
      defer$1 = function (id) {
        html$1.appendChild(documentCreateElement$1('script'))[ONREADYSTATECHANGE$1] = function () {
          html$1.removeChild(this);
          run$1(id);
        };
      };
    // Rest old browsers
    } else {
      defer$1 = function (id) {
        setTimeout(runner$1(id), 0);
      };
    }
  }

  var task$3 = {
    set: set$2,
    clear: clear$1
  };

  var engineIsWebosWebkit$1 = /web0s(?!.*chrome)/i.test(engineUserAgent$1);

  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor$1.f;
  var macrotask$1 = task$3.set;




  var MutationObserver$1 = global_1$1.MutationObserver || global_1$1.WebKitMutationObserver;
  var document$5 = global_1$1.document;
  var process$5 = global_1$1.process;
  var Promise$2 = global_1$1.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor$1 = getOwnPropertyDescriptor$3(global_1$1, 'queueMicrotask');
  var queueMicrotask$1 = queueMicrotaskDescriptor$1 && queueMicrotaskDescriptor$1.value;

  var flush$1, head$1, last$1, notify$3, toggle$1, node$1, promise$1, then$1;

  // modern engines have queueMicrotask method
  if (!queueMicrotask$1) {
    flush$1 = function () {
      var parent, fn;
      if (engineIsNode$1 && (parent = process$5.domain)) parent.exit();
      while (head$1) {
        fn = head$1.fn;
        head$1 = head$1.next;
        try {
          fn();
        } catch (error) {
          if (head$1) notify$3();
          else last$1 = undefined;
          throw error;
        }
      } last$1 = undefined;
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!engineIsIos$1 && !engineIsNode$1 && !engineIsWebosWebkit$1 && MutationObserver$1 && document$5) {
      toggle$1 = true;
      node$1 = document$5.createTextNode('');
      new MutationObserver$1(flush$1).observe(node$1, { characterData: true });
      notify$3 = function () {
        node$1.data = toggle$1 = !toggle$1;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise$2 && Promise$2.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise$1 = Promise$2.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise$1.constructor = Promise$2;
      then$1 = promise$1.then;
      notify$3 = function () {
        then$1.call(promise$1, flush$1);
      };
    // Node.js without promises
    } else if (engineIsNode$1) {
      notify$3 = function () {
        process$5.nextTick(flush$1);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      notify$3 = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask$1.call(global_1$1, flush$1);
      };
    }
  }

  var microtask$1 = queueMicrotask$1 || function (fn) {
    var task = { fn: fn, next: undefined };
    if (last$1) last$1.next = task;
    if (!head$1) {
      head$1 = task;
      notify$3();
    } last$1 = task;
  };

  var PromiseCapability$1 = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction$2(resolve);
    this.reject = aFunction$2(reject);
  };

  // 25.4.1.5 NewPromiseCapability(C)
  var f$7 = function (C) {
    return new PromiseCapability$1(C);
  };

  var newPromiseCapability$3 = {
  	f: f$7
  };

  var promiseResolve$1 = function (C, x) {
    anObject$1(C);
    if (isObject$1(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$3.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var hostReportErrors$1 = function (a, b) {
    var console = global_1$1.console;
    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform$1 = function (exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };

  var engineIsBrowser$1 = typeof window == 'object';

  var task$2 = task$3.set;












  var SPECIES$7 = wellKnownSymbol$1('species');
  var PROMISE$1 = 'Promise';
  var getInternalState$1 = internalState$1.get;
  var setInternalState$1 = internalState$1.set;
  var getInternalPromiseState$1 = internalState$1.getterFor(PROMISE$1);
  var NativePromisePrototype$1 = nativePromiseConstructor$1 && nativePromiseConstructor$1.prototype;
  var PromiseConstructor$1 = nativePromiseConstructor$1;
  var PromiseConstructorPrototype$1 = NativePromisePrototype$1;
  var TypeError$2 = global_1$1.TypeError;
  var document$4 = global_1$1.document;
  var process$4 = global_1$1.process;
  var newPromiseCapability$2 = newPromiseCapability$3.f;
  var newGenericPromiseCapability$1 = newPromiseCapability$2;
  var DISPATCH_EVENT$1 = !!(document$4 && document$4.createEvent && global_1$1.dispatchEvent);
  var NATIVE_REJECTION_EVENT$1 = typeof PromiseRejectionEvent == 'function';
  var UNHANDLED_REJECTION$1 = 'unhandledrejection';
  var REJECTION_HANDLED$1 = 'rejectionhandled';
  var PENDING$1 = 0;
  var FULFILLED$1 = 1;
  var REJECTED$1 = 2;
  var HANDLED$1 = 1;
  var UNHANDLED$1 = 2;
  var SUBCLASSING$1 = false;
  var Internal$1, OwnPromiseCapability$1, PromiseWrapper$1, nativeThen$1;

  var FORCED$3 = isForced_1$1(PROMISE$1, function () {
    var GLOBAL_CORE_JS_PROMISE = inspectSource$1(PromiseConstructor$1) !== String(PromiseConstructor$1);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && engineV8Version$1 === 66) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (engineV8Version$1 >= 51 && /native code/.test(PromiseConstructor$1)) return false;
    // Detect correctness of subclassing with @@species support
    var promise = new PromiseConstructor$1(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES$7] = FakePromise;
    SUBCLASSING$1 = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING$1) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser$1 && !NATIVE_REJECTION_EVENT$1;
  });

  var INCORRECT_ITERATION$1 = FORCED$3 || !checkCorrectnessOfIteration$1(function (iterable) {
    PromiseConstructor$1.all(iterable)['catch'](function () { /* empty */ });
  });

  // helpers
  var isThenable$1 = function (it) {
    var then;
    return isObject$1(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify$2 = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask$1(function () {
      var value = state.value;
      var ok = state.state == FULFILLED$1;
      var index = 0;
      // variable length - can't use forEach
      while (chain.length > index) {
        var reaction = chain[index++];
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED$1) onHandleUnhandled$1(state);
              state.rejection = HANDLED$1;
            }
            if (handler === true) result = value;
            else {
              if (domain) domain.enter();
              result = handler(value); // can throw
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(TypeError$2('Promise-chain cycle'));
            } else if (then = isThenable$1(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      }
      state.reactions = [];
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled$1(state);
    });
  };

  var dispatchEvent$1 = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT$1) {
      event = document$4.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global_1$1.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_REJECTION_EVENT$1 && (handler = global_1$1['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION$1) hostReportErrors$1('Unhandled promise rejection', reason);
  };

  var onUnhandled$1 = function (state) {
    task$2.call(global_1$1, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled$1(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform$1(function () {
          if (engineIsNode$1) {
            process$4.emit('unhandledRejection', value, promise);
          } else dispatchEvent$1(UNHANDLED_REJECTION$1, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = engineIsNode$1 || isUnhandled$1(state) ? UNHANDLED$1 : HANDLED$1;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled$1 = function (state) {
    return state.rejection !== HANDLED$1 && !state.parent;
  };

  var onHandleUnhandled$1 = function (state) {
    task$2.call(global_1$1, function () {
      var promise = state.facade;
      if (engineIsNode$1) {
        process$4.emit('rejectionHandled', promise);
      } else dispatchEvent$1(REJECTION_HANDLED$1, promise, state.value);
    });
  };

  var bind$1 = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject$1 = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED$1;
    notify$2(state, true);
  };

  var internalResolve$1 = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw TypeError$2("Promise can't be resolved itself");
      var then = isThenable$1(value);
      if (then) {
        microtask$1(function () {
          var wrapper = { done: false };
          try {
            then.call(value,
              bind$1(internalResolve$1, wrapper, state),
              bind$1(internalReject$1, wrapper, state)
            );
          } catch (error) {
            internalReject$1(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED$1;
        notify$2(state, false);
      }
    } catch (error) {
      internalReject$1({ done: false }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED$3) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor$1 = function Promise(executor) {
      anInstance$1(this, PromiseConstructor$1, PROMISE$1);
      aFunction$2(executor);
      Internal$1.call(this);
      var state = getInternalState$1(this);
      try {
        executor(bind$1(internalResolve$1, state), bind$1(internalReject$1, state));
      } catch (error) {
        internalReject$1(state, error);
      }
    };
    PromiseConstructorPrototype$1 = PromiseConstructor$1.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal$1 = function Promise(executor) {
      setInternalState$1(this, {
        type: PROMISE$1,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: PENDING$1,
        value: undefined
      });
    };
    Internal$1.prototype = redefineAll$1(PromiseConstructorPrototype$1, {
      // `Promise.prototype.then` method
      // https://tc39.es/ecma262/#sec-promise.prototype.then
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState$1(this);
        var reaction = newPromiseCapability$2(speciesConstructor$1(this, PromiseConstructor$1));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = engineIsNode$1 ? process$4.domain : undefined;
        state.parent = true;
        state.reactions.push(reaction);
        if (state.state != PENDING$1) notify$2(state, false);
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.es/ecma262/#sec-promise.prototype.catch
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability$1 = function () {
      var promise = new Internal$1();
      var state = getInternalState$1(promise);
      this.promise = promise;
      this.resolve = bind$1(internalResolve$1, state);
      this.reject = bind$1(internalReject$1, state);
    };
    newPromiseCapability$3.f = newPromiseCapability$2 = function (C) {
      return C === PromiseConstructor$1 || C === PromiseWrapper$1
        ? new OwnPromiseCapability$1(C)
        : newGenericPromiseCapability$1(C);
    };

    if (typeof nativePromiseConstructor$1 == 'function' && NativePromisePrototype$1 !== Object.prototype) {
      nativeThen$1 = NativePromisePrototype$1.then;

      if (!SUBCLASSING$1) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine$1(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor$1(function (resolve, reject) {
            nativeThen$1.call(that, resolve, reject);
          }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, { unsafe: true });

        // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
        redefine$1(NativePromisePrototype$1, 'catch', PromiseConstructorPrototype$1['catch'], { unsafe: true });
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype$1.constructor;
      } catch (error) { /* empty */ }

      // make `instanceof Promise` work for native promise-based APIs
      if (objectSetPrototypeOf$1) {
        objectSetPrototypeOf$1(NativePromisePrototype$1, PromiseConstructorPrototype$1);
      }
    }
  }

  _export$1({ global: true, wrap: true, forced: FORCED$3 }, {
    Promise: PromiseConstructor$1
  });

  setToStringTag$1(PromiseConstructor$1, PROMISE$1, false);
  setSpecies$1(PROMISE$1);

  PromiseWrapper$1 = getBuiltIn$1(PROMISE$1);

  // statics
  _export$1({ target: PROMISE$1, stat: true, forced: FORCED$3 }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability$2(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });

  _export$1({ target: PROMISE$1, stat: true, forced: FORCED$3 }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve$1(this, x);
    }
  });

  _export$1({ target: PROMISE$1, stat: true, forced: INCORRECT_ITERATION$1 }, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability$2(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var $promiseResolve = aFunction$2(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          $promiseResolve.call(C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability$2(C);
      var reject = capability.reject;
      var result = perform$1(function () {
        var $promiseResolve = aFunction$2(C.resolve);
        iterate$1(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $filter = arrayIteration$1.filter;


  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$1('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  _export$1({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // `Object.getOwnPropertyDescriptors` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  _export$1({ target: 'Object', stat: true, sham: !descriptors$1 }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject$1(object);
      var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor$1.f;
      var keys = ownKeys$2(O);
      var result = {};
      var index = 0;
      var key, descriptor;
      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty$1(result, key, descriptor);
      }
      return result;
    }
  });

  var FAILS_ON_PRIMITIVES$2 = fails$1(function () { objectGetPrototypeOf$1(1); });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  _export$1({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2, sham: !correctPrototypeGetter$1 }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return objectGetPrototypeOf$1(toObject$1(it));
    }
  });

  var slice$1 = [].slice;
  var factories = {};

  var construct = function (C, argsLength, args) {
    if (!(argsLength in factories)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
      // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
      factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
    } return factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  var functionBind = Function.bind || function bind(that /* , ...args */) {
    var fn = aFunction$2(this);
    var partArgs = slice$1.call(arguments, 1);
    var boundFunction = function bound(/* args... */) {
      var args = partArgs.concat(slice$1.call(arguments));
      return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
    };
    if (isObject$1(fn.prototype)) boundFunction.prototype = fn.prototype;
    return boundFunction;
  };

  var nativeConstruct = getBuiltIn$1('Reflect', 'construct');

  // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails$1(function () {
    function F() { /* empty */ }
    return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
  });
  var ARGS_BUG = !fails$1(function () {
    nativeConstruct(function () { /* empty */ });
  });
  var FORCED$2 = NEW_TARGET_BUG || ARGS_BUG;

  _export$1({ target: 'Reflect', stat: true, forced: FORCED$2, sham: FORCED$2 }, {
    construct: function construct(Target, args /* , newTarget */) {
      aFunction$2(Target);
      anObject$1(args);
      var newTarget = arguments.length < 3 ? Target : aFunction$2(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0: return new Target();
          case 1: return new Target(args[0]);
          case 2: return new Target(args[0], args[1]);
          case 3: return new Target(args[0], args[1], args[2]);
          case 4: return new Target(args[0], args[1], args[2], args[3]);
        }
        // w/o altered newTarget, lot of arguments case
        var $args = [null];
        $args.push.apply($args, args);
        return new (functionBind.apply(Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype;
      var instance = objectCreate(isObject$1(proto) ? proto : Object.prototype);
      var result = Function.apply.call(Target, instance, args);
      return isObject$1(result) ? result : instance;
    }
  });

  var defineProperty$2 = objectDefineProperty$1.f;

  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';

  // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (descriptors$1 && !(NAME in FunctionPrototype)) {
    defineProperty$2(FunctionPrototype, NAME, {
      configurable: true,
      get: function () {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  // a string of all valid unicode whitespaces
  var whitespaces$1 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace$1 = '[' + whitespaces$1 + ']';
  var ltrim$1 = RegExp('^' + whitespace$1 + whitespace$1 + '*');
  var rtrim$1 = RegExp(whitespace$1 + whitespace$1 + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$4 = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible$1($this));
      if (TYPE & 1) string = string.replace(ltrim$1, '');
      if (TYPE & 2) string = string.replace(rtrim$1, '');
      return string;
    };
  };

  var stringTrim$1 = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$4(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$4(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$4(3)
  };

  var non$1 = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced$1 = function (METHOD_NAME) {
    return fails$1(function () {
      return !!whitespaces$1[METHOD_NAME]() || non$1[METHOD_NAME]() != non$1 || whitespaces$1[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim$1 = stringTrim$1.trim;


  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  _export$1({ target: 'String', proto: true, forced: stringTrimForced$1('trim') }, {
    trim: function trim() {
      return $trim$1(this);
    }
  });

  /**
   * es6-proxy-polyfill
   * @version 2.1.1
   * @author Ambit-Tsai <ambit_tsai@qq.com>
   * @license Apache-2.0
   * @see {@link https://github.com/ambit-tsai/es6-proxy-polyfill#readme}
   */
  var t="[[ProxyTarget]]",n="[[Get]]",r="[[Set]]",e="[[Call]]",o=Object.defineProperty,i=Object.defineProperties,u=Object.getPrototypeOf,c=Object.getOwnPropertyDescriptor,a=!!i&&s(i),f$6=a?Object.__proto__?u:function(t){return "function"==typeof t?t.__proto__||{}:u(t)}:function(t){return _isVbObject(t)&&_getVbInternalOf(t).__proto__||{}};function s(t){return "function"==typeof t&&/\[native code\]/.test(t.toString())}function p(t,n){if(this instanceof p)return l(new y(t,n));v("Constructor Proxy requires 'new'");}function l(f){var s=f[t];return "function"==typeof s?function(n){var r=n[t];function o(){return this instanceof o?n["[[Construct]]"](arguments,o):n[e](this,arguments)}if(o.prototype=r.prototype,a){var c=j(n),f=O(u(r),c);for(var s in g(o,f),c=x(r,n))d(o,s)&&delete c[s];i(o,c);}else P(o,r);return o}(f):s instanceof Array?function(e){var i,f,s=e[t];a&&((i=j(e)).concat.get=function(){var t=e[n]("concat",this);return t===Array.prototype.concat?t.bind(s):t},f=O(u(s),i));return (i=x(s,e)).length.set=function(n){var i=n-s.length;e[r]("length",n,this),i&&function(n,r,e){var i=e[t];if(n>0)for(var u=i.length,a=u-n;a<u;++a){var f=c(r,a);f?o(i,a,f):i[a]=undefined,f=w(i,a,e),o(r,a,f);}else for(var s=(a=i.length)-n;a<s;++a)delete r[a];}(i,this,e);},O(f,i)}(f):function(n){var r,e,o=n[t];a&&(r=j(n),e=O(u(o),r));return r=x(o,n),O(e,r)}(f)}function y(n,r){h(n)&&h(r)||v("Cannot create proxy with a non-object as target or handler"),"REVOKED"===(f$6(n).__PROXY__||f$6(r).__PROXY__)&&v("Cannot create proxy with a revoked proxy as target or handler"),this[t]=n,this["[[ProxyHandler]]"]=r;}function _(t,n){t||v("Cannot perform '"+n+"' on a proxy that has been revoked");}function v(t){throw new TypeError(t)}function h(t){return !!t&&("object"==typeof t||"function"==typeof t)}function d(t,n){return Object.prototype.hasOwnProperty.call(t,n)}p.revocable=function(n,r){this instanceof p.revocable&&v("Proxy.revocable is not a constructor");var e=new y(n,r),o=l(e);return {proxy:o,revoke:function(){e[t]=undefined,e["[[ProxyHandler]]"]=undefined,a||(f$6(o).__PROXY__="REVOKED");}}},y.prototype[n]=function(n,r){var e=this["[[ProxyHandler]]"];return _(e,"get"),null==e.get?this[t][n]:"function"==typeof e.get?e.get(this[t],n,r):void v("Trap 'get' is not a function: "+e.get)},y.prototype[r]=function(n,r,e){var o=this["[[ProxyHandler]]"];if(_(o,"set"),null==o.set)this[t][n]=r;else {if("function"==typeof o.set){var i=o.set(this[t],n,r,e);return i||console.warn("Trap 'set' returned false for property '"+n+"'"),Boolean(i)}v("Trap 'set' is not a function: "+o.set);}},y.prototype[e]=function(n,r){var e=this["[[ProxyHandler]]"];return _(e,"apply"),null==e.apply?this[t].apply(n,r):"function"==typeof e.apply?e.apply(this[t],n,r):void v("Trap 'apply' is not a function: "+e.apply)},y.prototype["[[Construct]]"]=function(n,r){var e,o=this["[[ProxyHandler]]"];if(_(o,"construct"),null==o.construct?e=function(t,n){for(var r=[],e=0,o=n.length;e<o;++e)r.push("args["+e+"]");return new Function("Ctor","args","return new Ctor("+r.join(", ")+")")(t,n)}(this[t],n):"function"==typeof o.construct?e=o.construct(this[t],n,r):v("Trap 'construct' is not a function: "+o.construct),h(e))return e;v("Trap 'construct' returned non-object: "+e);};var b=Object.getOwnPropertyNames||function(t){var n=[];for(var r in t)d(t,r)&&n.push(r);return n},g=s(Object.setPrototypeOf)?Object.setPrototypeOf:Object.__proto__?function(t,n){return t.__proto__=n,t}:function(t,n){return o(t,"__proto__",{value:n})},O=a?Object.create:function(t,n){var r=i({},n);if(_isVbObject(r)){var e={__PROXY__:undefined};_getVbInternalOf(r).__proto__=e;}return r},P=Object.assign||function(t,n){for(var r in n)d(n,r)&&(t[r]=n[r]);return t};function j(n){for(var r={},e=n[t];e=u(e);){var o=x(e,n);P(r,o);}return r.__PROXY__={get:function(){return n[t]?undefined:"REVOKED"}},r}function x(t,n){for(var r=b(t),e={},o=r.length-1;o>=0;--o)e[r[o]]=w(t,r[o],n);return e}function w(t,e,o){var i=c(t,e);return {get:function(){return o[n](e,this)},set:function(t){o[r](e,t,this);},enumerable:i.enumerable,configurable:i.configurable}}var C="undefined"==typeof Proxy?p:Proxy;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var check = function check(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global_1 = // eslint-disable-next-line es/no-global-this -- safe
  check((typeof globalThis === "undefined" ? "undefined" : _typeof$1(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof$1(window)) == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check((typeof self === "undefined" ? "undefined" : _typeof$1(self)) == 'object' && self) || check(_typeof$1(commonjsGlobal) == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var fails = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  }; // Detect IE8's incomplete defineProperty implementation


  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] != 7;
  });

  var isObject = function isObject(it) {
    return _typeof$1(it) === 'object' ? it !== null : typeof it === 'function';
  };

  var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function documentCreateElement(it) {
    return EXISTS ? document$1.createElement(it) : {};
  }; // Thank's IE8 for his funny defineProperty


  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var anObject = function anObject(it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  }; // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var toPrimitive = function toPrimitive(input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  }; // eslint-disable-next-line es/no-object-defineproperty -- safe


  var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  var f = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var objectDefineProperty = {
    f: f
  };

  var createPropertyDescriptor = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function setGlobal(key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    }

    return value;
  };

  var SHARED = '__core-js_shared__';
  var store = global_1[SHARED] || setGlobal(SHARED, {});
  var sharedStore = store;
  var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.13.0',
      mode: 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    });
  }); // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible = function requireObjectCoercible(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  }; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject


  var toObject = function toObject(argument) {
    return Object(requireObjectCoercible(argument));
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
  };

  var id = 0;
  var postfix = Math.random();

  var uid = function uid(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var path = global_1;

  var aFunction = function aFunction(variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';
  var process = global_1.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;
  /* eslint-disable es/no-symbol -- required for testing */
  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    return !String(Symbol()) || // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && engineV8Version && engineV8Version < 41;
  });
  /* eslint-disable es/no-symbol -- required for testing */

  var useSymbolAsUid = nativeSymbol && !Symbol.sham && _typeof$1(Symbol.iterator) == 'symbol';
  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global_1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function wellKnownSymbol(name) {
    if (!has(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (nativeSymbol && has(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    }

    return WellKnownSymbolsStore[name];
  };

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var test = {};
  test[TO_STRING_TAG] = 'z';
  var toStringTagSupport = String(test) === '[object z]';
  var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;
  var WeakMap = global_1.WeakMap;
  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
  var keys = shared('keys');

  var sharedKey = function sharedKey(key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var WeakMap$1 = global_1.WeakMap;
  var set, get, has$1;

  var enforce = function enforce(it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;

      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (nativeWeakMap || sharedStore.state) {
    var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;

    set = function set(it, metadata) {
      if (wmhas.call(store$1, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset.call(store$1, it, metadata);
      return metadata;
    };

    get = function get(it) {
      return wmget.call(store$1, it) || {};
    };

    has$1 = function has$1(it) {
      return wmhas.call(store$1, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;

    set = function set(it, metadata) {
      if (has(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };

    get = function get(it) {
      return has(it, STATE) ? it[STATE] : {};
    };

    has$1 = function has$1(it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };
  var redefine = createCommonjsModule(function (module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      var state;

      if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) {
          createNonEnumerableProperty(value, 'name', key);
        }

        state = enforceInternalState(value);

        if (!state.source) {
          state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
        }
      }

      if (O === global_1) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
  });
  var toString = {}.toString;

  var classofRaw = function classofRaw(it) {
    return toString.call(it).slice(8, -1);
  };

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag'); // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  }; // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  }; // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  if (!toStringTagSupport) {
    redefine(Object.prototype, 'toString', objectToString, {
      unsafe: true
    });
  }

  var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;
  var objectPropertyIsEnumerable = {
    f: f$1
  };
  var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object; // toObject with fallback for non-array-like ES3 strings

  var toIndexedObject = function toIndexedObject(it) {
    return indexedObject(requireObjectCoercible(it));
  }; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  var f$2 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
      /* empty */
    }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };
  var objectGetOwnPropertyDescriptor = {
    f: f$2
  };
  var ceil = Math.ceil;
  var floor$1 = Math.floor; // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger

  var toInteger = function toInteger(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$1 : ceil)(argument);
  };

  var min$1 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength = function toLength(argument) {
    return argument > 0 ? min$1(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max$1 = Math.max;
  var min$1$1 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex = function toAbsoluteIndex(index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max$1(integer + length, 0) : min$1$1(integer, length);
  }; // `Array.prototype.{ indexOf, includes }` methods implementation


  var createMethod = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };
  var indexOf = arrayIncludes.indexOf;

  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      !has(hiddenKeys, key) && has(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (has(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
    }

    return result;
  }; // IE8- don't enum bug keys


  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe

  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
    f: f$3
  }; // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe

  var f$4 = Object.getOwnPropertySymbols;
  var objectGetOwnPropertySymbols = {
    f: f$4
  }; // all object keys, includes non-enumerable and symbols

  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function copyConstructorProperties(target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  var isForced_1 = isForced;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */

  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (_typeof$1(sourceProperty) === _typeof$1(targetProperty)) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      } // extend global


      redefine(target, key, sourceProperty, options);
    }
  }; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe


  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  var FAILS_ON_PRIMITIVES = fails(function () {
    objectKeys(1);
  }); // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
  }, {
    keys: function keys(it) {
      return objectKeys(toObject(it));
    }
  });

  var nativePromiseConstructor = global_1.Promise;

  var redefineAll = function redefineAll(target, src, options) {
    for (var key in src) {
      redefine(target, key, src[key], options);
    }

    return target;
  };

  var aPossiblePrototype = function aPossiblePrototype(it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }

    return it;
  };
  /* eslint-disable no-proto -- safe */
  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe


  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  var defineProperty = objectDefineProperty.f;
  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

  var setToStringTag = function setToStringTag(it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
      defineProperty(it, TO_STRING_TAG$2, {
        configurable: true,
        value: TAG
      });
    }
  };

  var SPECIES = wellKnownSymbol('species');

  var setSpecies = function setSpecies(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;

    if (descriptors && Constructor && !Constructor[SPECIES]) {
      defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };

  var aFunction$1 = function aFunction$1(it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }

    return it;
  };

  var anInstance = function anInstance(it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    }

    return it;
  };

  var iterators = {};
  var ITERATOR = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod = function isArrayIteratorMethod(it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  }; // optional / simple context binding


  var functionBindContext = function functionBindContext(fn, that, length) {
    aFunction$1(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };

      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');

  var getIteratorMethod = function getIteratorMethod(it) {
    if (it != undefined) return it[ITERATOR$1] || it['@@iterator'] || iterators[classof(it)];
  };

  var iteratorClose = function iteratorClose(iterator) {
    var returnMethod = iterator['return'];

    if (returnMethod !== undefined) {
      return anObject(returnMethod.call(iterator)).value;
    }
  };

  var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate = function iterate(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function stop(condition) {
      if (iterator) iteratorClose(iterator);
      return new Result(true, condition);
    };

    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = toLength(iterable.length); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && result instanceof Result) return result;
        }

        return new Result(false);
      }

      iterator = iterFn.call(iterable);
    }

    next = iterator.next;

    while (!(step = next.call(iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator);
        throw error;
      }

      if (_typeof$1(result) == 'object' && result && result instanceof Result) return result;
    }

    return new Result(false);
  };

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function next() {
        return {
          done: !!called++
        };
      },
      'return': function _return() {
        SAFE_CLOSING = true;
      }
    };

    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$2] = function () {
        return {
          next: function next() {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var SPECIES$1 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor

  var speciesConstructor = function speciesConstructor(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction$1(S);
  };

  var html = getBuiltIn('document', 'documentElement');
  var engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);
  var engineIsNode = classofRaw(global_1.process) == 'process';
  var location$1 = global_1.location;
  var set$1 = global_1.setImmediate;
  var clear = global_1.clearImmediate;
  var process$1 = global_1.process;
  var MessageChannel = global_1.MessageChannel;
  var Dispatch = global_1.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;

  var run = function run(id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var runner = function runner(id) {
    return function () {
      run(id);
    };
  };

  var listener = function listener(event) {
    run(event.data);
  };

  var post = function post(id) {
    // old engines have not location.origin
    global_1.postMessage(id + '', location$1.protocol + '//' + location$1.host);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!set$1 || !clear) {
    set$1 = function setImmediate(fn) {
      var args = [];
      var i = 1;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
      };

      defer(counter);
      return counter;
    };

    clear = function clearImmediate(id) {
      delete queue[id];
    }; // Node.js 0.8-


    if (engineIsNode) {
      defer = function defer(id) {
        process$1.nextTick(runner(id));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(runner(id));
      }; // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624

    } else if (MessageChannel && !engineIsIos) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = functionBindContext(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global_1.addEventListener && typeof postMessage == 'function' && !global_1.importScripts && location$1 && location$1.protocol !== 'file:' && !fails(post)) {
      defer = post;
      global_1.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
      defer = function defer(id) {
        html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      }; // Rest old browsers

    } else {
      defer = function defer(id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task = {
    set: set$1,
    clear: clear
  };
  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task.set;
  var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
  var document$2 = global_1.document;
  var process$2 = global_1.process;
  var Promise$1 = global_1.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global_1, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method

  if (!queueMicrotask) {
    flush = function flush() {
      var parent, fn;
      if (engineIsNode && (parent = process$2.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (error) {
          if (head) notify();else last = undefined;
          throw error;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


    if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, {
        characterData: true
      });

      notify = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

      promise.constructor = Promise$1;
      then = promise.then;

      notify = function notify() {
        then.call(promise, flush);
      }; // Node.js without promises

    } else if (engineIsNode) {
      notify = function notify() {
        process$2.nextTick(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global_1, flush);
      };
    }
  }

  var microtask = queueMicrotask || function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };

  var PromiseCapability = function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction$1(resolve);
    this.reject = aFunction$1(reject);
  }; // 25.4.1.5 NewPromiseCapability(C)


  var f$5 = function f$5(C) {
    return new PromiseCapability(C);
  };

  var newPromiseCapability = {
    f: f$5
  };

  var promiseResolve = function promiseResolve(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var hostReportErrors = function hostReportErrors(a, b) {
    var console = global_1.console;

    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform = function perform(exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };

  var engineIsBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) == 'object';
  var task$1 = task.set;
  var SPECIES$2 = wellKnownSymbol('species');
  var PROMISE = 'Promise';
  var getInternalState = internalState.get;
  var setInternalState = internalState.set;
  var getInternalPromiseState = internalState.getterFor(PROMISE);
  var NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype;
  var PromiseConstructor = nativePromiseConstructor;
  var PromiseConstructorPrototype = NativePromisePrototype;
  var TypeError$1 = global_1.TypeError;
  var document$3 = global_1.document;
  var process$3 = global_1.process;
  var newPromiseCapability$1 = newPromiseCapability.f;
  var newGenericPromiseCapability = newPromiseCapability$1;
  var DISPATCH_EVENT = !!(document$3 && document$3.createEvent && global_1.dispatchEvent);
  var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var SUBCLASSING = false;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
  var FORCED$1 = isForced_1(PROMISE, function () {
    var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions

    if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true; // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679

    if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false; // Detect correctness of subclassing with @@species support

    var promise = new PromiseConstructor(function (resolve) {
      resolve(1);
    });

    var FakePromise = function FakePromise(exec) {
      exec(function () {
        /* empty */
      }, function () {
        /* empty */
      });
    };

    var constructor = promise.constructor = {};
    constructor[SPECIES$2] = FakePromise;
    SUBCLASSING = promise.then(function () {
      /* empty */
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

    return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT;
  });
  var INCORRECT_ITERATION = FORCED$1 || !checkCorrectnessOfIteration(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () {
      /* empty */
    });
  }); // helpers

  var isThenable = function isThenable(it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify$1 = function notify$1(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function () {
      var value = state.value;
      var ok = state.state == FULFILLED;
      var index = 0; // variable length - can't use forEach

      while (chain.length > index) {
        var reaction = chain[index++];
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED) onHandleUnhandled(state);
              state.rejection = HANDLED;
            }

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // can throw

              if (domain) {
                domain.exit();
                exited = true;
              }
            }

            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      }

      state.reactions = [];
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function dispatchEvent(name, promise, reason) {
    var event, handler;

    if (DISPATCH_EVENT) {
      event = document$3.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global_1.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };

    if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function onUnhandled(state) {
    task$1.call(global_1, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;

      if (IS_UNHANDLED) {
        result = perform(function () {
          if (engineIsNode) {
            process$3.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function isUnhandled(state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function onHandleUnhandled(state) {
    task$1.call(global_1, function () {
      var promise = state.facade;

      if (engineIsNode) {
        process$3.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind = function bind(fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function internalReject(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify$1(state, true);
  };

  var internalResolve = function internalResolve(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;

    try {
      if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);

      if (then) {
        microtask(function () {
          var wrapper = {
            done: false
          };

          try {
            then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify$1(state, false);
      }
    } catch (error) {
      internalReject({
        done: false
      }, error, state);
    }
  }; // constructor polyfill


  if (FORCED$1) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromiseConstructor, PROMISE);
      aFunction$1(executor);
      Internal.call(this);
      var state = getInternalState(this);

      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromiseConstructorPrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

    Internal = function Promise(executor) {
      setInternalState(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    Internal.prototype = redefineAll(PromiseConstructorPrototype, {
      // `Promise.prototype.then` method
      // https://tc39.es/ecma262/#sec-promise.prototype.then
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = engineIsNode ? process$3.domain : undefined;
        state.parent = true;
        state.reactions.push(reaction);
        if (state.state != PENDING) notify$1(state, false);
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.es/ecma262/#sec-promise.prototype.catch
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      var state = getInternalState(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };

    newPromiseCapability.f = newPromiseCapability$1 = function newPromiseCapability$1(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };

    if (typeof nativePromiseConstructor == 'function' && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;

      if (!SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            nativeThen.call(that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

        redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], {
          unsafe: true
        });
      } // make `.constructor === Promise` work for native promise-based APIs


      try {
        delete NativePromisePrototype.constructor;
      } catch (error) {
        /* empty */
      } // make `instanceof Promise` work for native promise-based APIs


      if (objectSetPrototypeOf) {
        objectSetPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
      }
    }
  }

  _export({
    global: true,
    wrap: true,
    forced: FORCED$1
  }, {
    Promise: PromiseConstructor
  });

  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);
  PromiseWrapper = getBuiltIn(PROMISE); // statics

  _export({
    target: PROMISE,
    stat: true,
    forced: FORCED$1
  }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability$1(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });

  _export({
    target: PROMISE,
    stat: true,
    forced: FORCED$1
  }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });

  _export({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$1(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          $promiseResolve.call(C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$1(C.resolve);
        iterate(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  }); // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


  var regexpFlags = function regexpFlags() {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  }; // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.


  function RE(s, f) {
    return RegExp(s, f);
  }

  var UNSUPPORTED_Y = fails(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });
  var BROKEN_CARET = fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var regexpStickyHelpers = {
    UNSUPPORTED_Y: UNSUPPORTED_Y,
    BROKEN_CARET: BROKEN_CARET
  };
  /* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

  /* eslint-disable regexp/no-useless-quantifier -- testing */

  var nativeExec = RegExp.prototype.exec;
  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');

        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        } // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.


        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec; // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec

  _export({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== regexpExec
  }, {
    exec: regexpExec
  }); // TODO: Remove from `core-js@4` since it's moved to entry points


  var SPECIES$3 = wellKnownSymbol('species');
  var RegExpPrototype = RegExp.prototype;
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  }); // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }();

  var REPLACE = wellKnownSymbol('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string

  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }

    return false;
  }(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper


  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.

        re.constructor = {};

        re.constructor[SPECIES$3] = function () {
          return re;
        };

        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;

        if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      }, {
        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];
      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExpPrototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return regexMethod.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return regexMethod.call(string, this);
      });
    }

    if (sham) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
  }; // `String.prototype.{ codePointAt, at }` methods implementation


  var createMethod$1 = function createMethod$1(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };
  var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex

  var advanceStringIndex = function advanceStringIndex(S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  }; // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec


  var regexpExecAbstract = function regexpExecAbstract(R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (_typeof$1(result) !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  }; // @@match logic


  fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  var arrayMethodIsStrict = function arrayMethodIsStrict(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };

  var nativeJoin = [].join;
  var ES3_STRINGS = indexedObject != Object;
  var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join

  _export({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || !STRICT_METHOD
  }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  }); // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe


  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var SPECIES$4 = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate = function arraySpeciesCreate(originalArray, length) {
    var C;

    if (isArray(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
        C = C[SPECIES$4];
        if (C === null) C = undefined;
      }
    }

    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

  var createMethod$2 = function createMethod$2(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);

          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
                case 3:
                  return true;
                // some

                case 5:
                  return value;
                // find

                case 6:
                  return index;
                // findIndex

                case 2:
                  push.call(target, value);
                // filter
              } else switch (TYPE) {
                case 4:
                  return false;
                // every

                case 7:
                  push.call(target, value);
                // filterOut
              }
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod$2(7)
  };
  var SPECIES$5 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$5] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $map = arrayIteration.map;
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp

  var isRegexp = function isRegexp(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y;
  var arrayPush = [].push;
  var min$2 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF; // @@split logic

  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output.length > lim ? output.slice(0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y$2 ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(UNSUPPORTED_Y$2 ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y$2 ? 0 : q;
        var z = regexpExecAbstract(splitter, UNSUPPORTED_Y$2 ? S.slice(q) : S);
        var e;

        if (z === null || (e = min$2(toLength(splitter.lastIndex + (UNSUPPORTED_Y$2 ? q : 0)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  }, UNSUPPORTED_Y$2); // eslint-disable-next-line es/no-object-assign -- safe

  var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

  var defineProperty$1 = Object.defineProperty; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign

  var objectAssign = !$assign || fails(function () {
    // should have correct order of operations (Edge bug)
    if (descriptors && $assign({
      b: 1
    }, $assign(defineProperty$1({}, 'a', {
      enumerable: true,
      get: function get() {
        defineProperty$1(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

    var A = {};
    var B = {}; // eslint-disable-next-line es/no-symbol -- safe

    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f;

    while (argumentsLength > index) {
      var S = indexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing

  _export({
    target: 'Object',
    stat: true,
    forced: Object.assign !== objectAssign
  }, {
    assign: objectAssign
  });

  var H5 = 'h5';
  var PC = 'www';
  var HY = 'hy';
  var REQUIREDFILEDS = ['bizType', 'appcode', 'page', 'module', 'operType', 'id'];
  var toString$1 = Object.prototype.toString;

  function isPlainObject(target) {
    return toString$1.call(target) === '[object Object]';
  }

  function isString(target) {
    return toString$1.call(target) === '[object String]';
  }

  function isArray$1(target) {
    return toString$1.call(target) === '[object Array]';
  }

  function isBoolean(target) {
    return toString$1.call(target) === '[object Boolean]';
  }

  function isFunction(target) {
    return typeof target === 'function';
  }

  function isNumber(target) {
    // eslint-disable-next-line no-restricted-globals
    return toString$1.call(target) === '[object Number]' && !isNaN(target);
  }

  function isPromise(object) {
    if (Promise && Promise.resolve) {
      return Promise.resolve(object) == object;
    }
  } // from https://github.com/juliangruber/is-mobile/blob/master/index.js


  var isMobile = function () {
    var result = void 0;
    return function (opts) {
      if (typeof result === 'boolean') {
        return result;
      }

      var mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
      var tabletRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;
      if (!opts) opts = {};
      var ua = opts.ua;
      if (!ua && typeof navigator !== 'undefined') ua = getUserAgent();

      if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
        ua = ua.headers['user-agent'];
      }

      if (typeof ua !== 'string') return false;
      result = opts.tablet ? tabletRE.test(ua) : mobileRE.test(ua);

      if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf('Macintosh') !== -1 && ua.indexOf('Safari') !== -1) {
        result = true;
      }

      return result;
    };
  }();

  var getUserAgent = function getUserAgent() {
    try {
      return window.navigator.userAgent;
    } catch (e) {
      return '';
    }
  };

  var getPlatform = function () {
    var ret = void 0;
    return function () {
      if (typeof ret === 'string') {
        return ret;
      }

      var ua = getUserAgent();
      var hyReg = "(^|\\s)(qunar[^\\/]+)\\/([\\d\\.]+)";
      var isHy = getGlobal().hysdk && getGlobal().hysdk.hy || ua.toLowerCase().match(hyReg);
      return ret = !isMobile() ? PC : isHy ? HY : H5;
    };
  }(); // todo   缓存环境信息


  var systemType = function () {
    var ret = void 0;
    return function () {
      if (typeof ret === 'string') {
        return ret;
      }

      var ua = getUserAgent();
      var isAndroid = /(Android|Adr)/i.test(ua); //android终端

      var isiOS = /(iPhone|iPad|iPod|iOS)/i.test(ua); //ios终端

      if (isAndroid) {
        return ret = 'Android';
      } else if (isiOS) {
        return ret = 'iOS';
      }

      return ret = '';
    };
  }();

  function utf8ToB64(data) {
    // return getGlobal().btoa(JSON.stringify(data));
    return getGlobal().btoa(unescape(encodeURIComponent(JSON.stringify(data))));
  }

  function getNow() {
    return +new Date();
  }

  function getAgent() {
    try {
      if (window && window.history) {
        return 'WEB_APP';
      }

      if (wx) {
        return 'WX_MINI_APP';
      }

      if (swan) {
        return 'BAIDU_MINI_APP';
      }

      if (my) {
        return 'ALIPAY_MINI_APP';
      }

      if (tt) {
        return 'TT_MINI_APP';
      }

      if (qq) {
        return 'QQ_MINI_APP';
      }

      if (quick) {
        return 'QUICK_APP';
      }
    } catch (err) {
      return 'UNKNOWN_APP';
    }
  }

  function getGlobal() {
    try {
      if (window && window.history) {
        return window;
      }

      if (wx) {
        return wx;
      }

      if (swan) {
        return swan;
      }

      if (my) {
        return my;
      }

      if (tt) {
        return tt;
      }

      if (qq) {
        return qq;
      }
    } catch (err) {
      return {};
    }
  } // 这里做个缓存


  var getSystemInfo = function () {
    var globalObj = getGlobal();
    var systemInfo = {};
    return function () {
      var isTrue = Object.keys(systemInfo).length > 0;
      if (isTrue) return systemInfo;

      try {
        return systemInfo = globalObj.getSystemInfoSync();
      } catch (err) {
        return systemInfo;
      }
    };
  }();

  function getRoutes() {
    // eslint-disable-next-line prefer-const
    var defaultRouteInfo = {
      path: '',
      query: {},
      routeStack: []
    };
    var pages = getCurrentPages();
    var curPage = {};

    if (pages.length) {
      curPage = pages[pages.length - 1];
      var _curPage = curPage,
          _curPage$route = _curPage.route,
          route = _curPage$route === void 0 ? '' : _curPage$route,
          _curPage$options = _curPage.options,
          options = _curPage$options === void 0 ? {} : _curPage$options;
      defaultRouteInfo.path = route;
      defaultRouteInfo.query = options; // https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html

      defaultRouteInfo.routeStack = pages.map(function (curPage) {
        return curPage.route;
      });
    }

    return defaultRouteInfo;
  }

  function getH5Info() {
    return {
      os: systemType(),
      pageUrl: getGlobal().location.href,
      ua: getUserAgent(),
      platform: getPlatform()
    };
  } // 获取环境变量


  var getEnv = function () {
    var agent = getAgent();
    var global = getGlobal();

    if (agent === 'WEB_APP') {
      return global.BUILD_ENV || '';
    } else if (agent === 'WX_MINI_APP') {
      return global.env.BUILD_ENV || '';
    }
  }(); // pages/platform/indexWx/index => platform


  function getBiz() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (path.split('/')[1] || '').toLowerCase();
  }

  var getReffer = function () {
    var pageStack = [];
    return function (page) {
      var prevPage = pageStack.shift();
      pageStack.push(page);
      return prevPage || '';
    };
  }();

  function getLog() {
    var log = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _getRoutes = getRoutes(),
        pageUrl = _getRoutes.path;

    var defaultLog = {
      platform: getAgent(),
      bizType: getBiz(pageUrl),
      reffer: getReffer(pageUrl),
      operTime: getNow(),
      pageUrl: pageUrl
    };
    return Object.assign(defaultLog, log);
  }

  function getMeta() {
    return {
      agent: getAgent(),
      system: Object.assign({}, getSystemInfo())
    };
  }

  function loop() {}

  var createProperty = function createProperty(object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$1$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  _export({
    target: 'Array',
    proto: true,
    forced: FORCED$1$1
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) {
            if (k in E) createProperty(A, n, E[k]);
          }
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var HAS_SPECIES_SUPPORT$1$1 = arrayMethodHasSpeciesSupport('slice');
  var SPECIES$6 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$1$1 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1$1
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$6];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array : Constructor)(max$1$1(fin - k, 0));

      for (n = 0; k < fin; k++, n++) {
        if (k in O) createProperty(result, n, O[k]);
      }

      result.length = n;
      return result;
    }
  });

  function ownKeys$1(object, enumerableOnly) {
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
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof C === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  } // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods


  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
  var $forEach = arrayIteration.forEach;
  var STRICT_METHOD$1 = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach

  var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  }

  var slice = [].slice;
  var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

  var wrap = function wrap(scheduler) {
    return function (handler, timeout
    /* , ...arguments */
    ) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice.call(arguments, 2) : undefined;
      return scheduler(boundArgs ? function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
      } : handler, timeout);
    };
  }; // ie9- setTimeout & setInterval additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


  _export({
    global: true,
    bind: true,
    forced: MSIE
  }, {
    // `setTimeout` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    setTimeout: wrap(global_1.setTimeout),
    // `setInterval` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    setInterval: wrap(global_1.setInterval)
  });

  function throwErr(err) {
    throw new Error("[".concat(new Date(), "] [error] - ").concat(err));
  }

  var strategies = {
    url: {
      validate: function validate(val) {
        if (!val) {
          throwErr(this.msgRequred);
        }
      },
      msgRequred: '配置中 url 字段必填.'
    },
    appVersion: {
      validate: function validate(val) {
        if (!val) return;

        if (!isString(val)) {
          throwErr(this.msgTypeErr);
        }
      },
      msgTypeErr: '配置中 appVersion 字段类型需为 String.'
    },
    env: {
      validate: function validate(val) {
        if (!val) return;

        if (!isString(val)) {
          throwErr(this.msgTypeErr);
        }
      },
      msgTypeErr: '配置中 env 字段类型需为 String.'
    },
    ignoreErrors: {
      validate: function validate(val) {
        if (!isArray$1(val)) {
          throwErr(this.msgTypeErr);
        }
      },
      msgTypeErr: '配置中 ignoreErrors 字段类型需为 Array.'
    },
    delay: {
      validate: function validate(val) {
        if (!isNumber(val)) {
          throwErr(this.msgTypeErr);
        }
      },
      msgTypeErr: '配置中 delay 字段类型需为 Number.'
    },
    batchSend: {
      validate: function validate(val) {
        if (!isPlainObject(val) && !isBoolean(val)) {
          throwErr(this.msgTypeErr);
        }

        if (isPlainObject(val) && !isNumber(val.maxLogLength)) {
          throwErr('配置中 batchSend.maxLogLength 字段类型需为 number.');
        }

        if (isPlainObject(val) && !isNumber(val.delay)) {
          throwErr('配置中 batchSend.delay 字段类型需为 number.');
        }
      },
      msgTypeErr: '配置中 batchSend 字段类型需为 object 或者 boolean'
    },
    beforeReport: {
      validate: function validate(val) {
        if (!isFunction(val)) {
          throwErr(this.msgTypeErr);
        }
      },
      msgTypeErr: '配置中 beforeReport 字段类型需为 Function.'
    },
    success: {
      validate: function validate(val) {
        if (!isFunction(val)) {
          throwErr(this.msgTypeErr);
        }
      },
      msgTypeErr: '配置中 success 字段类型需为 Function.'
    },
    fail: {
      validate: function validate(val) {
        if (!isFunction(val)) {
          throwErr(this.msgTypeErr);
        }
      },
      msgTypeErr: '配置中 fail 字段类型需为 Function.'
    },
    complete: {
      validate: function validate(val) {
        if (!isFunction(val)) {
          throwErr(this.msgTypeErr);
        }
      },
      msgTypeErr: '配置中 complete 字段类型需为 Function.'
    }
  };

  function proxyValidate() {
    var proxyObj = {};
    return new C(proxyObj, {
      set: function set(target, key, val) {
        strategies[key].validate(val); // eslint-disable-next-line no-param-reassign

        target[key] = val;
        return true;
      }
    });
  }

  function validateConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var proxy = proxyValidate();
    Object.keys(Object.assign({
      url: ''
    }, config)).forEach(function (prop) {
      proxy[prop] = config[prop];
    });
  }

  var Core = /*#__PURE__*/function () {
    function Core() {
      _classCallCheck(this, Core);

      this.logQueue = [];
      this.logMap = {};
      this.reportedLogs = null;
      this.config = {
        url: '',
        appVersion: '',
        // 应用Version
        env: '',
        // 环境
        isBatchSend: false,
        batchSend: {
          // 日志数量
          maxLogLength: 3,
          // 延迟发送
          delay: 2000
        },
        beforeReport: function beforeReport(log) {
          // 1.可在这里劫持上报的数据, 比如添加userid, session等等
          // 2.如果return false, 则不用内置http上报, 此时可以在这里自定义自己的http上报方式
          //  比如以后浏览器端，可以自定义 ajax 上报还是用图片上报
          return log;
        }
      };
      this.applyRequested = false;
      this.delayTimer = -1;
    }

    _createClass(Core, [{
      key: "mergeConfig",
      value: function mergeConfig(opts) {
        validateConfig(opts);

        var newOpts = _objectSpread2(_objectSpread2({}, opts), {}, {
          isBatchSend: isBoolean(opts.batchSend) && opts.batchSend || isPlainObject(opts.batchSend),
          batchSend: isPlainObject(opts.batchSend) ? opts.batchSend : this.config.batchSend
        });

        this.config = Object.assign({}, this.config, newOpts);
      }
    }, {
      key: "pushLog",
      value: function pushLog(log) {
        this.logQueue.push(log);
        return this;
      }
    }, {
      key: "getLog",
      value: function getLog() {
        return this.logQueue;
      }
    }, {
      key: "clearLog",
      value: function clearLog() {
        this.logQueue = [];
        this.resetLogMap();
        return this;
      }
    }, {
      key: "resetLogMap",
      value: function resetLogMap() {
        this.logMap = {};
      } // immediately 是否是立马发送

    }, {
      key: "report",
      value: function report() {
        var _this = this;

        var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var logs = this.getLog();

        if (immediately) {
          this.sendLog(logs);
          return;
        }

        if (this.config.isBatchSend) {
          // 提前清理定时器，因为可能在定时期间，日志数量又增加到阈值了
          clearTimeout(this.delayTimer); // 如果日志队列数量大于等于阈值，立马发送

          if (logs.length >= this.config.batchSend.maxLogLength) {
            this.sendLog(logs);
          } else {
            // 否则定时发送
            this.delayTimer = setTimeout(function () {
              _this.sendLog(logs);
            }, this.config.batchSend.delay);
          }
        }
      }
    }, {
      key: "sendLog",
      value: function sendLog() {
        var _this2 = this;

        var logQueue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var log = logQueue.slice();
        if (!log.length) return;
        var ret = isFunction(this.config.beforeReport) && this.config.beforeReport.call(this, logQueue); // 异步回调

        if (isPromise(ret)) {
          ret.then(function (res) {
            if (isBoolean(res) && res === false) {
              // 用户阻止默认上报后，可在 beforeReport 可自定义 request 上报
              return;
            }

            _this2.reportedLogs = res;

            _this2.startReport(res);
          });
        } else {
          if (isBoolean(ret) && ret === false) {
            // 用户阻止默认上报后，可在 beforeReport 可自定义 request 上报
            return;
          }

          this.reportedLogs = ret;
          this.startReport(ret);
        }
      }
    }, {
      key: "getReportedLogs",
      value: function getReportedLogs() {
        return this.reportedLogs;
      }
    }, {
      key: "startReport",
      value: function startReport(data) {
        // 重要
        this.clearLog();
        var url = this.config.url; // 默认上报

        this.request({
          url: url,
          method: 'POST',
          data: data
        });
      }
    }, {
      key: "registerPlugin",
      value: function registerPlugin(plugin) {
        try {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          plugin.init.apply(plugin, [this].concat(args));
        } catch (error) {// console.log(error)   
        }
      }
    }, {
      key: "applyRequest",
      value: function applyRequest(request) {
        if (this.applyRequested) return false;
        this.request = request;
        this.applyRequested = true;
        return true;
      }
    }]);

    return Core;
  }();

  var patchUrlStateAction = function patchUrlStateAction(type) {
    var orig = history[type];
    return function () {
      var rv = orig.apply(this, arguments);
      var e = new Event(type);
      e.arguments = arguments;
      getGlobal().dispatchEvent(e);
      return rv;
    };
  };

  var pluginH5HookRouter = {
    init: function init(core) {
      history.pushState = patchUrlStateAction('pushState');
      history.replaceState = patchUrlStateAction('replaceState');
      ['popstate', 'pushState', 'replaceState'].forEach(function (eventName) {
        getGlobal().addEventListener(eventName, function () {
          // 用于计算pv
          var log = {
            operType: 'show'
          };
          core.pushLog(log);
          core.report(true);
        });
      });
    }
  };
  var pluginH5HookPageShow = {
    init: function init(core) {
      document.addEventListener('DOMContentLoaded', function () {
        // 用于计算pv
        var log = {
          operType: 'show'
        };
        core.pushLog(log);
        core.report(true);
      });
    }
  };

  function request(options) {
    var url = options.url,
        data = options.data,
        _options$success = options.success,
        success = _options$success === void 0 ? function () {} : _options$success,
        _options$fail = options.fail,
        fail = _options$fail === void 0 ? function () {} : _options$fail;
    var query = "&params=".concat(utf8ToB64(data)),
        rqImageUrl = url + query;

    if (!!navigator.sendBeacon) {
      navigator.sendBeacon(url, JSON.stringify(data)) ? success() : fail();
    } else {
      sendImgLogger(rqImageUrl).then(function () {
        success();
      }).catch(function () {
        fail();
      });
    }
  } // todo name


  function sendImgLogger(url) {
    return new Promise(function (rel, rej) {
      var img = new Image();
      img.src = url;

      img.onload = function () {
        rel();
      };

      img.onerror = function () {
        rej();
      };
    });
  }

  function H5Rq() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return request(options);
  } // a string of all valid unicode whitespaces


  var whitespaces = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

  var createMethod$3 = function createMethod$3(TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$3(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$3(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$3(3)
  };
  var non = "\u200B\x85\u180E"; // check that a method works with the correct list
  // of whitespaces and has a correct name

  var stringTrimForced = function stringTrimForced(METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim; // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim

  _export({
    target: 'String',
    proto: true,
    forced: stringTrimForced('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var getCookie = function () {
    var ret = {};
    return function (cookie) {
      if (ret[cookie]) {
        return ret[cookie];
      }

      var name = cookie + '=';
      var cookieList = document.cookie.split(';');

      for (var i = 0; i < cookieList.length; i++) {
        var cookieArr = cookieList[i].trim();

        if (cookieArr.indexOf(name) == 0) {
          var str = cookieArr.substring(name.length, cookieArr.length);
          ret[cookie] = str;
          return str;
        }
      }

      return '';
    };
  }();

  var rebuildLog = function rebuildLog(logs) {
    var _getH5Info = getH5Info(),
        pageUrl = _getH5Info.pageUrl,
        ua = _getH5Info.ua,
        platform = _getH5Info.platform,
        os = _getH5Info.os;

    var metaData = {
      cid: getEnv || '',
      uname: getCookie('_q') || '',
      uid: getPlatform() === HY ? getCookie('QN270') : getCookie('QN48'),
      gid: getCookie('gid') || '',
      fp: getCookie('QN271') || '',
      os: os || '',
      ua: ua || '',
      platform: platform || '',
      bdSource: getCookie('QN300') || '',
      qunarGlobal: getCookie('QunarGlobal') || '',
      first_source: getCookie('QN611') || '',
      last_source: getCookie('QN612') || '',
      urlfrom: document.referrer || ''
    };
    return _objectSpread2(_objectSpread2({}, metaData), {}, {
      action: logs.map(function (el) {
        var bizType = el.bizType,
            page = el.page,
            module = el.module,
            operType = el.operType,
            id = el.id;
        var key = bizType ? "".concat(bizType, "/").concat(page, "/").concat(module, "/").concat(operType, "/").concat(id) : '';

        var result = _objectSpread2(_objectSpread2({}, el), {}, {
          pageUrl: pageUrl,
          operTime: Date.now()
        });

        return !key ? result : Object.assign(result, {
          key: key
        });
      })
    });
  };

  var Reporter = /*#__PURE__*/function (_Core) {
    _inherits(Reporter, _Core);

    var _super = _createSuper(Reporter);

    function Reporter() {
      var _this;

      _classCallCheck(this, Reporter);

      _this = _super.call(this);
      _this.inited = false;
      return _this;
    }

    _createClass(Reporter, [{
      key: "init",
      value: function init(defaultConfig) {
        if (this.inited) {
          throw new Error('SNIPER ERROR: SDK 已初始化过. init 方法只能执行一次.');
        }

        this.mergeConfig(defaultConfig); // hook 页面初始化

        this.registerPlugin(pluginH5HookPageShow); // hook 路由 插件

        this.registerPlugin(pluginH5HookRouter); // request 能力

        this.applyRequest(H5Rq);
        this.inited = true;
      }
    }]);

    return Reporter;
  }(Core);

  var createInstance = function () {
    var instance = null;
    return function () {
      if (!instance) {
        instance = new Reporter();
      }

      return instance;
    };
  }();

  var repoterIntance = createInstance();

  var validateSendLogField = function validateSendLogField(log) {
    var errors = [];
    REQUIREDFILEDS.forEach(function (key) {
      if (!log[key]) {
        errors.push("\u65E5\u5FD7\u4E2D `".concat(key, "` \u5B57\u6BB5\u7F3A\u5931."));
      } else if (typeof log[key] !== 'string') {
        errors.push("\u65E5\u5FD7\u4E2D `".concat(key, "` \u5B57\u6BB5\u7C7B\u578B\u9700\u4E3A String."));
      }
    });
    return errors;
  };

  var QAV = {
    init: function init(config) {
      repoterIntance.init(config);
    },
    sendLog: function sendLog(log, immediately) {
      var errors = validateSendLogField(log);

      if (errors.length) {
        errors.forEach(function (errMsg) {
          console.error("[".concat(new Date(), "] [error] - ").concat(errMsg));
        });
        console.error('wiki: https://wiki.corp.qunar.com/confluence/pages/viewpage.action?pageId=392401865');
        return;
      }

      repoterIntance.pushLog(log);
      repoterIntance.report(!!immediately);
    },
    getReportedLogs: function getReportedLogs() {
      return repoterIntance.getReportedLogs();
    }
  };

  var Adapter = /*#__PURE__*/function () {
    function Adapter(config) {
      _classCallCheck(this, Adapter);

      this.config = config;
      this.QAV = null;
    }

    _createClass(Adapter, [{
      key: "log",
      value: function log(userLog, immediately) {
        if (!this.QAV) {
          throw '请先通过 applyQav 方法绑定QVA';
        }

        this.QAV.sendLog(Object.assign({}, this.config, userLog), !!immediately);
      }
    }, {
      key: "applyQav",
      value: function applyQav(QAV) {
        this.QAV = QAV;
      }
    }, {
      key: "getLogStr",
      value: function getLogStr() {
        var retLog = this.QAV.getReportedLogs();
        return _typeof(retLog) === 'object' ? JSON.stringify(retLog) : '';
      }
    }]);

    return Adapter;
  }();

  var api = 'https://pwapp.qunar.com/api/log/commonLog';
  QAV.init({
    url: "".concat(api, "?pt=").concat(getPlatform()),
    batchSend: true,
    beforeReport: function beforeReport(logQueue) {
      return rebuildLog(logQueue);
    }
  });
  var QMark = {
    hoc: function hoc(initConfig) {
      var instance = new Adapter(initConfig);
      instance.applyQav(QAV);
      return instance;
    },
    log: function log() {
      var _QAV$sendLog;

      return (_QAV$sendLog = QAV.sendLog).call.apply(_QAV$sendLog, [this].concat(Array.prototype.slice.call(arguments)));
    }
  };
  var correctPrototypeGetter = !fails(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  var IE_PROTO = sharedKey('IE_PROTO');
  var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe

  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectPrototype : null;
  };
  var FAILS_ON_PRIMITIVES$1 = fails(function () {
    objectGetPrototypeOf(1);
  }); // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$1,
    sham: !correctPrototypeGetter
  }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return objectGetPrototypeOf(toObject(it));
    }
  });

  var pluginHookApp = {
    init: function init(core) {
      var originApp = App;

      App = function App(options) {
        // 主题 App.config在 options.__proto__上
        var config = Object.getPrototypeOf(options);
        var oldGlobalShow = config.onGlobalLoad || loop;

        var configCopy = _objectSpread2({}, config); // rewrite globalshow


        configCopy.onGlobalLoad = function onGlobalLoad(originParams) {
          // 用于计算pv
          var log = {
            operType: 'show'
          };
          core.pushLog(log);
          core.report(true);
          return oldGlobalShow.call(this, originParams);
        }; // 创建新对象，挂在config原型


        var newOptions = Object.create(configCopy); // 为新对象配置属性

        Object.assign(newOptions, options);
        return originApp(newOptions);
      };

      return App;
    }
  };
  var globalCtx = getGlobal();

  function Rq() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return globalCtx.request(options);
  }

  var global$1 = getGlobal();

  var getLocalStorage = function () {
    var cache = {};
    return function (key) {
      if (cache[key]) return cache[key];

      try {
        var value = global$1.getStorageSync(key);

        if (value) {
          return cache[key] = value;
        }
      } catch (e) {
        return '';
      }
    };
  }();

  var rebuildLog$1 = function rebuildLog(logs) {
    var _ref = getLocalStorage('UserData') || {},
        _ref$cookies = _ref.cookies,
        cookies = _ref$cookies === void 0 ? {} : _ref$cookies,
        _ref$user = _ref.user,
        user = _ref$user === void 0 ? {} : _ref$user;

    var _ref2 = getLocalStorage('extraCookie') || {},
        _ref2$QN = _ref2.QN48,
        QN48 = _ref2$QN === void 0 ? '' : _ref2$QN;

    var fp = getLocalStorage('ql7qGD') || '';

    var _getLog = getLog();
        _getLog.bizType;
        var pageUrl = _getLog.pageUrl;

    var metaData = {
      cid: getEnv || '',
      uname: user.nickName || '',
      qunarGlobal: cookies.QunarGlobal || '',
      openid: user.openId || '',
      unionid: user.unionid || '',
      bdSource: cookies.bd_source || '',
      fp: fp,
      model: getMeta().system.model || '',
      os: getMeta().system.system || '',
      pVersion: getApp() && getApp().globalData.pVersion || '',
      uid: QN48
    };
    return _objectSpread2(_objectSpread2({}, metaData), {}, {
      action: logs.map(function (el) {
        var bizType = el.bizType,
            page = el.page,
            module = el.module,
            operType = el.operType,
            id = el.id;
        var key = bizType ? "".concat(bizType, "/").concat(page, "/").concat(module, "/").concat(operType, "/").concat(id) : '';

        var result = _objectSpread2(_objectSpread2({}, el), {}, {
          pageUrl: pageUrl,
          operTime: Date.now()
        });

        return !key ? result : Object.assign(result, {
          key: key
        });
      })
    });
  };

  var Reporter$1 = /*#__PURE__*/function (_Core) {
    _inherits(Reporter, _Core);

    var _super = _createSuper(Reporter);

    function Reporter() {
      var _this;

      _classCallCheck(this, Reporter);

      _this = _super.call(this);
      _this.inited = false;
      return _this;
    }

    _createClass(Reporter, [{
      key: "init",
      value: function init(defaultConfig) {
        if (this.inited) {
          throw new Error('SNIPER ERROR: SDK 已初始化过. init 方法只能执行一次.');
        }

        this.mergeConfig(defaultConfig); // hook app 插件

        this.registerPlugin(pluginHookApp); // request 能力

        this.applyRequest(Rq);
        this.inited = true;
      }
    }]);

    return Reporter;
  }(Core);

  var createInstance$1 = function () {
    var instance = null;
    return function () {
      if (!instance) {
        instance = new Reporter$1();
      }

      return instance;
    };
  }();

  var repoterIntance$1 = createInstance$1();

  var validateSendLogField$1 = function validateSendLogField(log) {
    var errors = [];
    REQUIREDFILEDS.forEach(function (key) {
      if (!log[key]) {
        errors.push("\u65E5\u5FD7\u4E2D `".concat(key, "` \u5B57\u6BB5\u7F3A\u5931."));
      } else if (typeof log[key] !== 'string') {
        errors.push("\u65E5\u5FD7\u4E2D `".concat(key, "` \u5B57\u6BB5\u7C7B\u578B\u9700\u4E3A String."));
      }
    });
    return errors;
  };

  var QAV$1 = {
    init: function init(config) {
      repoterIntance$1.init(config);
    },
    sendLog: function sendLog(log, immediately) {
      var errors = validateSendLogField$1(log);

      if (errors.length) {
        errors.forEach(function (errMsg) {
          console.error("[".concat(new Date(), "] [error] - ").concat(errMsg));
        });
        console.error('wiki: https://wiki.corp.qunar.com/confluence/pages/viewpage.action?pageId=392401865');
        return;
      }

      repoterIntance$1.pushLog(log);
      repoterIntance$1.report(!!immediately);
    },
    getReportedLogs: function getReportedLogs() {
      return repoterIntance$1.getReportedLogs();
    }
  };
  QAV$1.init({
    url: "".concat(api, "?pt=mina_wechat"),
    batchSend: true,
    beforeReport: function beforeReport(logQueue) {
      return rebuildLog$1(logQueue);
    }
  }); // 适配业务线需求

  var QMark$1 = {
    hoc: function hoc(initConfig) {
      var instance = new Adapter(initConfig);
      instance.applyQav(QAV$1);
      return instance;
    },
    log: function log() {
      var _QAV$sendLog;

      return (_QAV$sendLog = QAV$1.sendLog).call.apply(_QAV$sendLog, [this].concat(Array.prototype.slice.call(arguments)));
    }
  };
  var platform = getAgent();
  var exportModule = null;

  try {
    switch (platform) {
      case 'WEB_APP':
        exportModule = QMark;
        break;

      case 'WX_MINI_APP':
        exportModule = QMark$1;

      default:
        break;
    }
  } catch (e) {}

  var exportModule$1 = exportModule;

  var js_cookie = createCommonjsModule$1(function (module, exports) {
  (function (factory) {
  	var registeredInModuleLoader;
  	{
  		module.exports = factory();
  		registeredInModuleLoader = true;
  	}
  	if (!registeredInModuleLoader) {
  		var OldCookies = window.Cookies;
  		var api = window.Cookies = factory();
  		api.noConflict = function () {
  			window.Cookies = OldCookies;
  			return api;
  		};
  	}
  }(function () {
  	function extend () {
  		var i = 0;
  		var result = {};
  		for (; i < arguments.length; i++) {
  			var attributes = arguments[ i ];
  			for (var key in attributes) {
  				result[key] = attributes[key];
  			}
  		}
  		return result;
  	}

  	function decode (s) {
  		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  	}

  	function init (converter) {
  		function api() {}

  		function set (key, value, attributes) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			attributes = extend({
  				path: '/'
  			}, api.defaults, attributes);

  			if (typeof attributes.expires === 'number') {
  				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
  			}

  			// We're using "expires" because "max-age" is not supported by IE
  			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

  			try {
  				var result = JSON.stringify(value);
  				if (/^[\{\[]/.test(result)) {
  					value = result;
  				}
  			} catch (e) {}

  			value = converter.write ?
  				converter.write(value, key) :
  				encodeURIComponent(String(value))
  					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

  			key = encodeURIComponent(String(key))
  				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
  				.replace(/[\(\)]/g, escape);

  			var stringifiedAttributes = '';
  			for (var attributeName in attributes) {
  				if (!attributes[attributeName]) {
  					continue;
  				}
  				stringifiedAttributes += '; ' + attributeName;
  				if (attributes[attributeName] === true) {
  					continue;
  				}

  				// Considers RFC 6265 section 5.2:
  				// ...
  				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
  				//     character:
  				// Consume the characters of the unparsed-attributes up to,
  				// not including, the first %x3B (";") character.
  				// ...
  				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
  			}

  			return (document.cookie = key + '=' + value + stringifiedAttributes);
  		}

  		function get (key, json) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			var jar = {};
  			// To prevent the for loop in the first place assign an empty array
  			// in case there are no cookies at all.
  			var cookies = document.cookie ? document.cookie.split('; ') : [];
  			var i = 0;

  			for (; i < cookies.length; i++) {
  				var parts = cookies[i].split('=');
  				var cookie = parts.slice(1).join('=');

  				if (!json && cookie.charAt(0) === '"') {
  					cookie = cookie.slice(1, -1);
  				}

  				try {
  					var name = decode(parts[0]);
  					cookie = (converter.read || converter)(cookie, name) ||
  						decode(cookie);

  					if (json) {
  						try {
  							cookie = JSON.parse(cookie);
  						} catch (e) {}
  					}

  					jar[name] = cookie;

  					if (key === name) {
  						break;
  					}
  				} catch (e) {}
  			}

  			return key ? jar[key] : jar;
  		}

  		api.set = set;
  		api.get = function (key) {
  			return get(key, false /* read as raw */);
  		};
  		api.getJSON = function (key) {
  			return get(key, true /* read as json */);
  		};
  		api.remove = function (key, attributes) {
  			set(key, '', extend(attributes, {
  				expires: -1
  			}));
  		};

  		api.defaults = {};

  		api.withConverter = init;

  		return api;
  	}

  	return init(function () {});
  }));
  });

  var cookie = {
    set: function set(key, value, namespace) {
      var memory = {
        show: false,
        // 是否展示无障碍
        audio: false,
        // 是否开启声音
        speed: 'middle',
        // 语速
        zomm: 0.1,
        // 缩放倍数
        cursor: false,
        // 是否替换鼠标样式
        pointer: false,
        // 是否开启十字线
        bigtext: false,
        // 是否开启大字幕
        overead: false // 是否开启指读

      };

      if (js_cookie.get(namespace)) {
        memory = JSON.parse(js_cookie.get(namespace));
      }

      memory[key] = value;
      js_cookie.set(namespace, JSON.stringify(memory), {
        domain: '.qunar.com'
      });
    },
    get: function get(key, namespace) {
      var __key = '';

      if (js_cookie.get(namespace)) {
        __key = JSON.parse(js_cookie.get(namespace))[key];
      }

      return __key;
    },
    remove: function remove(namespace) {
      js_cookie.remove(namespace, {
        domain: '.qunar.com'
      });
    },
    setTag: function setTag(namespace) {
      var __key = "".concat(namespace, "-ignore");

      var __data = [];

      if (js_cookie.get(__key)) {
        __data = JSON.parse(js_cookie.get(__key));
      }

      var _location = location,
          origin = _location.origin,
          pathname = _location.pathname;

      var __ignoreUrl = "".concat(origin).concat(pathname);

      !__data.includes(__ignoreUrl) && __data.push("".concat(origin).concat(pathname));
      js_cookie.set(__key, JSON.stringify(__data), {
        domain: '.qunar.com'
      });
    },
    getTag: function getTag(namespace) {
      var __key = "".concat(namespace, "-ignore");

      var __data = [];

      if (js_cookie.get(__key)) {
        __data = JSON.parse(js_cookie.get(__key));
      }

      return __data;
    }
  };

  var addEvent = function addEvent(element, type, callback) {
    var ignore = ['DOMContentLoaded'];

    var __type = ignore.includes(type) ? type : 'on' + type;

    if (element.addEventListener) {
      element.addEventListener(type, callback, false);
    } else if (element.attachEvent) {
      element.attachEvent(__type, callback);
    } else {
      element[__type] = callback;
    }
  };

  var removeEvent = function removeEvent(element, type, callback) {
    var ignore = ['DOMContentLoaded'];

    var __type = ignore.includes(type) ? type : 'on' + type;

    if (element.removeEventListener) {
      element.removeEventListener(type, callback);
    } else if (element.detachEvent) {
      element.detachEvent(__type, callback);
    } else {
      element[__type] = null;
    }
  };

  var ruleType = function ruleType(target) {
    var __role = !!target.getAttribute('role') && target.getAttribute('role').toUpperCase() || target.tagName.toUpperCase();

    var __roleName = {
      IMG: '图片',
      BUTTON: '按钮',
      INPUT: '输入框',
      CHECKBOX: '复选框',
      RADIO: '单选框',
      OPTION: '下拉框',
      A: '链接'
    };

    if (__role == 'INPUT') {
      if (target.type == 'radio') {
        return '单选框';
      } else if (target.type == 'checkbox') {
        // button reset file
        return '复选框';
      } else if (target.type == 'text') {
        // button reset file
        return '文本框';
      } else if (target.type == 'submit') {
        return '提交按钮';
      } else if (target.type == 'reset') {
        return '重置按钮';
      } else if (target.type == 'password') {
        return '密码输入框';
      } else {
        return '输入框';
      }
    }

    return __roleName[__role] || '文本';
  };

  var parseTagText = function parseTagText(target) {
    var __name = ruleType(target);

    var __role = !!target.getAttribute('role') && target.getAttribute('role').toUpperCase();

    if (__role === 'A' || target.tagName === 'A') {
      console.log('这是一个链接:' + target.alt || target.title || target.innerText);
      return "\u94FE\u63A5 ".concat(target.alt || target.title || target.innerText);
    }

    if (target.children.length === 0) {
      if (__role === 'IMG' || target.tagName === 'IMG') {
        console.log('这是一张图片:' + target.alt || target.title);
        return "\u56FE\u7247 ".concat(target.alt || target.title);
      }

      if (__role === 'BUTTON' || target.tagName === 'BUTTON') {
        console.log('这是一个按钮:' + target.innerText);
        return "\u6309\u94AE ".concat(target.alt || target.title || target.innerText);
      }

      if (__role === 'INPUT' || target.tagName === 'INPUT') {
        console.log("\u8FD9\u662F\u4E00\u4E2A".concat(__name, ":") + target.alt || target.title || target.value);
        return "".concat(__name, " ").concat(target.alt || target.title || target.value);
      }

      if (__role === 'LABEL' || target.tagName === 'LABEL') {
        var __linkId = target.getAttribute('for');

        var __linkDom = document.getElementById(__linkId);

        if (!!__linkDom && !!__linkDom.type && __linkDom.type == 'radio') {
          console.log("\u8FD9\u662F\u4E00\u4E2A\u5355\u9009:" + target.alt || target.title || target.innerText);
          return "\u5355\u9009 ".concat(target.alt || target.title || target.innerText);
        }
      }

      if (target.alt || target.title || target.innerText) {
        console.log("".concat(__name, " ").concat(target.alt || target.title || target.innerText));
        return "".concat(__name, " ").concat(target.alt || target.title || target.innerText);
      }

      return '';
    }

    if (target.alt || target.title || target.innerText) {
      console.log("".concat(__name, " ").concat(target.alt || target.title || target.innerText));
      return "".concat(__name, " ").concat(target.alt || target.title || target.innerText);
    }

    return '';
  };

  var trim = function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  };
  /**
   * 判断是否是IE
   */

  var isIE = function isIE() {
    if (!!window.ActiveXobject || "ActiveXObject" in window) {
      return true;
    } else {
      return false;
    }
  };
  /**
   * 判断是否是IE11
   */


  var isIE11 = function isIE11() {
    if (/Trident\/7\./.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  };

  var isFirefox = function isFirefox() {
    var ua = navigator.userAgent;

    if (ua.indexOf('Firefox') > -1) {
      return true;
    }

    return false;
  };

  var removeNode = function removeNode(item) {
    if (isIE() || isIE11()) {
      item.removeNode(true);
    } else {
      item.remove();
    }
  };

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('splice');

  var max = Math.max;
  var min = Math.min;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  _export$1({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject$1(this);
      var len = toLength$1(O.length);
      var actualStart = toAbsoluteIndex$1(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min(max(toInteger$1(deleteCount), 0), len - actualStart);
      }
      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
        throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }
      A = arraySpeciesCreate$1(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty$1(A, k, O[from]);
      }
      A.length = actualDeleteCount;
      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];
          else delete O[to];
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];
          else delete O[to];
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });

  var pubSub = {
    list: {},
    subscribe: function subscribe(key, fn) {
      if (!this.list[key]) this.list[key] = [];
      this.list[key].push(fn);
    },
    unsubscribe: function unsubscribe(key, fn) {
      var fnList = this.list[key];
      if (!fnList) return false;

      if (!fn) {
        // 不传入指定的方法，清空所用 key 下的订阅
        fnList && (fnList.length = 0);
      } else {
        fnList.forEach(function (item, index) {
          item === fn && fnList.splice(index, 1);
        });
      }
    },
    publish: function publish(key) {
      var fnList = this.list[key];
      if (!fnList) return false;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _iterator = _createForOfIteratorHelper(this.list[key]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fn = _step.value;
          !!fn && fn.call.apply(fn, [this].concat(args));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };

  var Base = /*#__PURE__*/function () {
    function Base() {
      _classCallCheck$1(this, Base);

      this.config = {
        namespace: 'mozi-assist',
        url: ''
      };
      this.message = pubSub;
      this.tmplStyle = [];
      this.tmplHtml = [];
      this.registeOpen();
    }

    _createClass$1(Base, [{
      key: "mergeConfig",
      value: function mergeConfig(opts) {
        this.config = _objectSpread2$1(_objectSpread2$1({}, this.config), opts);
        this.creatContainer();
      }
    }, {
      key: "use",
      value: function use(plugin) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        plugin.init.apply(plugin, [this].concat(args));
      }
    }, {
      key: "useEvent",
      value: function useEvent(plugin) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        plugin.setEvents.apply(plugin, [this].concat(args));
      }
    }, {
      key: "creatContainer",
      value: function creatContainer() {
        var namespace = this.config.namespace;

        if (document.getElementById(namespace)) {
          return;
        }

        var Container = document.createElement("div");
        Container.id = namespace;
        document.body.appendChild(Container);
      }
    }, {
      key: "registeOpen",
      value: function registeOpen() {
        var _this = this;

        if (document.getElementById('assist-open')) {
          document.getElementById('assist-open').onclick = function () {
            if (!_this.existIgnore()) {
              _this.show();

              _this.message.publish('openState', true);
            }

            exportModule$1.log({
              bizType: "rdc",
              appcode: "qunar_common",
              operType: "show",
              page: "assist",
              module: "open_assist",
              title: "插件打开次数",
              id: 'open_num'
            });
          };
        }
      }
    }, {
      key: "isShow",
      value: function isShow() {
        var _this2 = this;

        var namespace = this.config.namespace;
        addEvent(window, 'DOMContentLoaded', function () {
          if (cookie.get('show', namespace) && !_this2.existIgnore()) {
            _this2.isShowTopBar(true);

            _this2.message.publish('openState', true);
          } else {
            _this2.message.publish('openState', false);
          }
        });
      }
    }, {
      key: "existIgnore",
      value: function existIgnore() {
        var namespace = this.config.namespace;
        var _location = location,
            origin = _location.origin,
            pathname = _location.pathname;

        var __key = "".concat(origin).concat(pathname);

        console.log('namespace++++', cookie.getTag(namespace));
        console.log('__key++++', __key);
        console.log('existIgnore++++', cookie.getTag(namespace).includes(__key));
        return cookie.getTag(namespace).includes(__key);
      }
    }, {
      key: "show",
      value: function show() {
        this.isShowTopBar(true);
      }
    }, {
      key: "close",
      value: function close() {
        this.isShowTopBar(false);
      }
    }, {
      key: "showTag",
      value: function showTag() {
        var namespace = this.config.namespace;
        cookie.setTag(namespace);
        cookie.set('show', true, namespace);
        this.resetAction();
      }
    }, {
      key: "isShowTopBar",
      value: function isShowTopBar(isShow) {
        var namespace = this.config.namespace;
        var activeBtn = document.getElementById("".concat(namespace, "-topbar-html"));

        if (isShow) {
          document.body.style.marginTop = '100px';
          activeBtn.style.display = 'block';
          cookie.set('show', true, namespace);
          this.hideModules();
        } else {
          if (document.body.style.cssText) {
            document.body.style.cssText = '';
          } else {
            document.body.style = '';
          } //activeBtn.style.display = 'none'


          cookie.remove("".concat(namespace));
          location.reload();
        }
      }
    }, {
      key: "hideModules",
      value: function hideModules() {
        var namespace = this.config.namespace;
        var classList = document.getElementsByClassName("".concat(namespace, "-hide"));

        for (var i = 0; i < classList.length; i++) {
          classList[i].style.display = 'none';
        }
      }
    }, {
      key: "creatStyle",
      value: function creatStyle(id, css) {
        var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (!flag) {
          this.tmplStyle.push(css);
        } else {
          var namespace = this.config.namespace;
          var styleNode = document.createElement('style');
          styleNode.type = 'text/css';
          styleNode.id = "".concat(namespace, "-").concat(id);
          styleNode.className = id;

          if (styleNode.styleSheet) {
            styleNode.styleSheet.cssText = css;
          } else {
            styleNode.innerHTML = css;
          }

          document.getElementsByTagName('head')[0].appendChild(styleNode);
        }
      }
    }, {
      key: "creatHtml",
      value: function creatHtml(id, htmlFn) {
        var namespace = this.config.namespace;
        var DomContainer = document.createElement("div");
        DomContainer.id = "".concat(namespace, "-").concat(id);
        DomContainer.className = id;
        DomContainer.style.display = 'none';

        if (typeof htmlFn !== 'function') {
          console.error('htmlFn不是一个函数');
          return;
        }

        var __html = htmlFn(namespace);

        DomContainer.innerHTML = __html;
        this.tmplHtml.push(DomContainer.outerHTML);
      }
    }, {
      key: "registeHtml",
      value: function registeHtml() {
        var namespace = this.config.namespace;
        document.getElementById(namespace).innerHTML = this.tmplHtml.join('');
      }
    }, {
      key: "registeStyle",
      value: function registeStyle() {
        var namespace = this.config.namespace;
        var styleNode = document.createElement('style');
        styleNode.type = 'text/css';
        styleNode.id = "".concat(namespace, "-style");

        var __css = this.tmplStyle.join('\n');

        if (styleNode.styleSheet) {
          styleNode.styleSheet.cssText = __css;
        } else {
          styleNode.innerHTML = __css;
        }

        document.getElementsByTagName('head')[0].appendChild(styleNode);
      }
    }, {
      key: "formatLongText",
      value: function formatLongText() {
        var namespace = this.config.namespace;
        var longText = document.getElementsByClassName("".concat(namespace, "-long-text")) || [];
        [].forEach.call(longText, function (el) {
          var __el = el.innerText.split('。');

          var __elItem = [];

          __el.map(function (item) {
            __elItem.push("<label>".concat(item, "</label>"));
          });

          el.innerHTML = __elItem.join('。');
        });
      }
    }]);

    return Base;
  }();

  var styles$4 = ".topbar-html {\n  width: 100%;\n  background: #797F8D;\n  overflow: hidden;\n  z-index: 2147483645;\n  position: fixed;\n  top: 0;\n  box-shadow: 0 0 10px 2px #999;\n  left: 0;\n  right: 0;\n}\n.topbar-html-mright {\n  margin-right: 50px !important;\n}\n.topbar-html-margin0 {\n  margin: 0 !important;\n}\n.topbar-html-content {\n  width: 1080px;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n.topbar-html-content-item {\n  cursor: pointer;\n  margin: 0 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.topbar-html-content-item span {\n  height: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: PingFangSC-Medium;\n}\n.topbar-html-content-item img {\n  height: 52px;\n  width: 52px;\n  border-radius: 5px;\n  display: block;\n}";

  var img$n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAkFBMVEUAAAD///////////////////////////////////////8zMzM5OTk8PDz8/PxcXFzu7u6zs7NHR0diYmJBQUG3t7eqqqqkpKSBgYHQ0NC+vr5MTEybm5v5+fnz8/Po6OjV1dWfn590dHRPT0/h4eHd3d3b29vLy8vFxcWvr6+WlpaHh4dmZmZXV1dubm6MjIwpqEHtAAAACnRSTlMAvfPZlHYzJgQRpdOjTAAAA69JREFUaN7t2mlTpDAQBuAZj1WbTkBuGOa+D/X//7sdDTHRWbTTzqRqq3w/7g4+SRMghPR07m7711dw1lxd92/veh/zpw8XSv+PxdzfwAVzc6+dhz5cNP2Htj9Uhy+pPt3AxXPzNg7AQ15HRB88pH+8fsBL7nq34CW3PiqnancNXnLduwIvueqBp/xCvxAbitZ1Pp0WeVZFoHNuSE6aUGAqMAgQhRCY7Cp5fmhSiiPxKUKU1VkhmQ2EDdjWPJNng7JYMR1UXJ8HWoSa6aTCFbQZzuIw50HNyZlBPP2nQtVvFLxmxoCig7CbjiLcN3meF2WSorClcATHlKoJE2doEaPVkdljZLehfrYsHIwBIFTtyVyhpbBG8k4rJsOtNRrTJcCT+u2jIzS22vvYMYg3ZkRixITG5k+UEroiC1PdMQsaxZpJ1/BVVnNNzTmQTNAMKJXvf4oMqBDakQBUiQEt9aHJEAiZtc1yh0LdH+UQ+sSD6raFT5KgRKvVapKyIBm3HVp9Y6j7WyqOQQ6UCXVEQSja4B1gQHN1REwo3Cb9AVS1HdrA95niD6BSHTAAQtbBKVQRIdl2aAuUnJwjpD34TOWQeAm9xGgnLoEK7VTZn4EZMpSoytVACx9C/RwjhQ9F6hSlQAsfqhR0AFr4UKagEjipy3JDhXJ1jgqOk7/NMIiQmm1g7miYeRNuaNA0YEO1auP0spApRkGDtuocNQzohX73No/xPQOaKaimQZV6lCUMKFGXekWDImTfGUTnzatH+Dk9i3YCCUQo1KfUNbmCDiTIvE3OnKHn4C0NFZowazdEPWVwmzPgzhEqWkiC4yxISCdHtjM86pzB1E5kTlDdHlVRITOFGtC7ZObGc9Chz71x7wC9oCmD+9vEmuxMUM/X6ZDpUpCOiI6cB9YNlfPGJ2mXUNh2KARHaIF0yX5bXrpC0Aj627IMtVOAMwQHcp9G4XujJAOK3ldO5qsvnXWKgUo8AgYEC2Gv+3VF7jUTiDGwIFha66abDiYbWGtOwIRgLAw12A5Pq7sT1i+W4AwZyWqvwOc6spXHGZr/xXgBP4BglHxcU02TssjzvNl/WlMVhwh+BIEsSKvEDQATMlkS1r0XwIbs1N+s5GcA54FAZnPRxQyo3yaIqf7xtQWFKCcAQIXIVpMgHjl8JVIUYTNx/X5ET1RleTGdbut193D+v77x/UL+IW/bDLxtnPC2FcTb5hZv23V8bUDytqXK1yYxb9vefG3k87U10etmS2/bR/8CfLm94E4nnEwAAAAASUVORK5CYII=";

  var img$m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAjVBMVEUAAAD///////////////////////8zMzM4ODg+Pj719fWoqKg7OztGRkbg4OD39/d1dXVbW1vIyMj7+/tMTEzj4+OUlJSCgoJCQkLo6Oi9vb1RUVHs7Ozb29vX19fw8PDAwMC6urpwcHC0tLRVVVWlpaVpaWnQ0NCurq6enp6ZmZmLi4uIiIh7e3thYWGg660bAAAABnRSTlMA+uWnfzGozdCBAAADiklEQVRo3u3a7XKqMBAGYK3HJeFEUEHRgqj41dqP+7+805MNs5lhILF2memM758iJTwG1hDbDL4yHj0NgS3Dp9F4oPOHSyHrj3agh3xJ4yH0kOF4MIJeMho8QS95GgyhlwwH0FMe0AN6QA/ot0FRNhFikm3sfQxQnIlAR2S0kwGKP1VQJwcMBxTPyKE+3Q81HYGGkUoA4ICMQ/kA4IDC2hHvH7ghgQEiR80BKtzkgKg/ewD4K/Rm/PNQeCSHoPDHIXKegQdqOjxQ02mH4u29UJgbR2mnBXoXIp3fBW0bDkG2g5XvgDz70w4lASb6LhRfUro/HRDUR0U3QcXhnEqhowKM2EEnVBlpsvWHinc8PYacTig0PRdnb+giReBwCKKsV3QrvaBLkwkUOU2oWOO+SJoxPfSCyiYj5BxaoXAmRBCjZC7e0gcKJw1FZGtoh7ACCr33VWH/Qw/opMz502ypc9phsxZojUfn+qB4hdDVDQ0n2LDxwWuDFhIbvOndzwo76IY2eKTcgieU5PTY/conNr84oZOgVl5Q3aUg1fv3+CpzQssAT+APQWkuwou+SwKvnROa0nFekN5GaaZ/ccZ3WnBAiSkgfV8PUndvxwHVJz/ozyH+4pUF2uKNqfQLrIYpCwQzukm0zQFVpsCpGnIe6A2rwT4DD7S0oA8+iFrRpUv5i+GTsRhCu7zxSXFmgXAkVfZgt2SBcmt8m9Mo0Q5RoSa3QAccVI9W0cmN3/NIljdAG4nnPlkjkAIXNDet/KGinqEmVvvKCSWmWZV4QkmAkThtzPDF3glBhpJI33ZznXLbCRXoiJl+ZxtsrWI3VKjARJqI4z5ph9bKntrPUM3ADcFLLVHkcd0KwVEfsrBnWyJyQ3Tx7IhV1AptAylX+EZi80yfghsyE9tGZNQGQVKWMX01pA65Idil0iERRElm6KgluCDKoRKirgWSuqHKXIg0dkN2wmjzP/NXkjqhq7kKqvzut/JIktQBTQLMHr4LwYKkDggPEidwQDf2qQlNqRDckL/UhMJASXUFF+QvtZf3fL8AN+Qvcf0ZrVkRPBBJK5J4oKa0BrgilDBAtrQ74IYCDsiWBP48AzBAWhKGoqkBA6QlG8rxFt0Luftkao4FgnWuUJEpTSQ4IIhfUiWlSk8x7WOAdIqybPTmN/979AE9oF8C9bWkqrdFYr0te+ttIV9fSxP7W2zZ2/LRf1C1IJ35WNi4AAAAAElFTkSuQmCC";

  var img$l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABqCAMAAABnCuSYAAAAw1BMVEUAAAD///////////////////////////////////////////////////////////8zMzP8/Px5eXk6Ojrj4+NBQUE3Nzf5+fn09PRISEjn5+fb29ubm5uWlpbGxsaoqKiDg4N+fn5zc3NtbW1kZGRUVFTf39/U1NTLy8tPT09MTEzw8PCxsbGPj49hYWHr6+u4uLiioqKSkpJpaWnY2NiLi4uHh4ddXV3l5eW7u7vDw8O1tbWsrKyfn5/t7e3Pz8+/v7+8gE6lAAAAD3RSTlMAyDfs3bdeSxoQ5K2klG8zW7abAAAEyUlEQVRo3u2aiW7iMBBAs9tu2z3HTiAOuSDhvinQAqXX/3/Vih0Tb9jER49IK/WpqlQ1ybM9kxknYFXJ11/fP70j3399Rc/lN3hnvl0ePBdQAReWdXUGFXB2Zf2ESvhpnUMlnFsUKoFaUBEfog/Rh4jDgl0zXN7eRA/3sQ/Im4v8fTIkf+NsljF7a9H8ukuKcNNn+oaiQdslpdSn8zcSxR0ix7n130BUaxM1TsheKaKhc7JQm7adJOmqe7KY3cGrRP6MCNxZNHgUQ+gtWrksjOjLRXd1kjG7H8M/BNMGyejMXypqkgx7DcXQvcj7Ue9loogcacuuQBeNLID9l4imhNN4Bjne1CWI0zcXPWRLPwYlcf04p8BUNCGcFgUNesPj9H0zUd/lKd0EPbwVQTbUROTxATox6EJbBJmaiGyCLEAf2ibInb7omSARmOB1eZiYroiN8IwUzKjx3FvqiiJeJz0wZOBiBgV6orGDidADY0JesPREkQiQKYxna09H5OFKjwpDSg8/EmIUJTqiezx2AkXMm81HqWmGy+5piDaYo7RoPtv6oZzJTHc4zHu1qIdHXkMRf7YpK5DRxTapFoWYofOiCfFBSKd0jcf4SlEHWx0UscSL3IIEn4dYJWJueSrQBuGhlk0JR5qoRAO81rbIc0c4TZAQYTKpRLjEI2lNJ12QwIf6qBC1SmsI9cSecSBZO4aHPClEuMKhZPelrOsjjLJC1ChveBshcn3JlFbYKxQiV8w7Dw3405ey4uLqt+Qiym/JrIbSbY1zi2m7EBWKwriWwYDmNoS2XDQ+ye4Hh+QZML64FChLicCd0lxtSeWiOZ415xOKyQkjClFWzBKSY5Lbeq7kIg/PqQFycyqKgPrH1e2RPHbujk21YrQWg8tTowApD3aL5LnJjS6Ri8DBSHDtuPHvtegA0y9wSY76lgcpwcqrEA2zvoWm0BYke0pFy2ngb5sT+fkmGypE7fy2lgKS+6uZz4DTQ3HPsVOIbng7kkA9XF/R8YsSN1CI7nG9KcjAe7ek4+/wP0whCvCwvnRKQZYAjJaMYqNs5XURSmkXLT1siFFWimx1awO6K+/pff7sohRNlGsndg83pfFzPKWIp1QLpIS8K5VtqG2NnarNW5t0RvQQpX35ti7WEMWi2khMbBI9Fez3Ga8XVCUSFcapgUD7sSIUt5datCC8OpizxQDXPS0RHcofydUP5iFoiMRDubMGQ5a8AHqaIuADGz2CEQuC7EBXVOPlecbAgD4/awW6ItFxEtBn3uCF1jcQgW3wbgvpdcUbGgORN5S8rZO+sZuCkQh6xxNHAWjQdAmSUiMRhhZxnkEFaxFOh4GpCAYO4di+YtmGhLPxwFwE/br4RMCDUtZiB95mYChCeiOxO1xuoQg6aJOMhIKxCBmnRNCZ+KeW/hKHonr9iiIp17l977DVjGseBWDj9S5M67n/reE1Igg65B+co13gLhmoRCr2DaJkFQC8WgSsOVJongB0RGroflVqqbf6ANoiNf7DzC2w2DsGYCZS48VR2nUzxyy5xkTTFZlBH2vrp37ge1DM//ZZ+YfoQ/R/ic6gEs6sL1AJX6xLqIRLy/oBFfDj8J3OChbvC36v8+Ic3pXzC+vI1ed35Mo68BtVKaeQ+hFKXwAAAABJRU5ErkJggg==";

  var img$k = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAmVBMVEX8/PwAAAD///////////////////8zMzM3Nzfg4OBERERRUVE+Pj6kpKTn5+fi4uKFhYVubm5YWFj4+Pj09PTAwMCbm5vs7OzZ2dmSkpKKiopNTU1BQUFra2vw8PDPz8+ysrKvr6/FxcWOjo54eHhiYmLLy8u4uLhwcHBmZmY7OzvS0tKVlZWAgIB9fX10dHSqqqpJSUleXl4uaMzTAAAABnRSTlP+AOWnfzGF0eAUAAAD5UlEQVRo3u3a2XqqMBAAYLpNIhakrCog7vtW3//hjoeJRhrwZNTynQvnplVC/jAJCWkxXl5ePt5e4Rfj9e3jiByhdwN+OYz3v9A71BDvL8aHATXEkXmDWuLNeIVa4tWAmuIJPaEn9ITuhFqB5YzTw2K+7fRXPn73cKg3GCeMcc6OgT/ddfZ4KJgzJC6Ds+/QfiRk9GPBlFib1sOgYVxGSKrrPwSKdsV6MQpfJbMHQG2TS4OZ6cgazPr7cOvyy2yO7oYCzs8pSgeXPe9NO+bZ4ql/HxSer2YZRurh6eR8PG7dA41lh/cqBkrzVOQzux0anTKzu9LcfiJKfbZuhfpMhAXXwnZR4k3/NijjoneGcD28ncje102QnYhebuBnnTHTuQXChPBEazJbCymgQ3uRuBVoxRyLmx4VipbYxD7ohd/EBHSoUBfPG4Fu2J+YgYgGRZiJpCwTQycsG8eWaBoN6uBZg7IKj98zo6Sib7ykHgUycGjHZSs6r2r3DKE9BRpWD9ZG3hdp6Q2Rn+RSoHGeuSZUQl9QeUmsQYDyynhIhLxlfpqlD7WxaTYRgk2eiLk+hCP1G6jQLD9vqQ1hy7hDhiKRCW3IxZuIDIGZQ0NtCGeTjA5NcDToQgZmoDBrBYemCJycTp++Cnly8pyvdaEeQp4yPErD/zlz8a4uZGMNSvKVUBaGMG/P5g6IVUdXhYipuzyyqIYyNXXEwVCY77fnTloWtxKBslzyji4EWGn7R0EMMXuLT15xZUxpwxuaefkZ/T7CtS/QhnY4nMiQL9YJbQgHj0uGhthvhjY0FbciFcJNwQS0IQNHQ58KmbheakLytplQIJmIFQESG5Y2DZqL9ZIA+fhYt4CqacMBNVY4FNb6kJwIpqCGW3WtBzzHJkFtVv2M1o1Lt0wBXtCY+JA/lwNPL7xY9CsFkpfE27rQjosLIkLQFTurSM8JRcNsMuSLLazr6TiB3L/TIHn78bmGNOVM3g9UCPZCcu1/OZYomUQ3QeCIdpqrq4zhMAFlcBtkTLioYX+lVANLyQ6iQ9CLT1IcVBSJHPmnNLN1KwT+gjMRh6zseMixgJToEEZXPu80rWI93nAsGFWiQzBgTFrm1grarchuZIPOhDPJmIpEhiAzL7PDi7+I3y3DUSQyBN4aa62Myd/KpUSGZLS2rIrizJ1hISnRIRl29zO3FGaHN7MikSFZLhgnxZ5hy9TC2UmRaJAajcEojRN+rMpNN5ZcqhTJJkDkQEmdxQkQSVK3pQSILHHl+8dCKKnPdr8CwcB1lfXi//2v5RN6Qk/oCT02antJrLbX3mp7ka+uVxPre9myttdH/wB03iKbr43v3gAAAABJRU5ErkJggg==";

  var img$j = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAllBMVEUAAAD///////////////////////8zMzM2NjY4ODj7+/tSUlLi4uJERESTk5OFhYX4+Pjn5+fAwMCkpKRYWFhBQUH09PSbm5vs7Ox2dnbZ2dlra2tiYmJNTU08PDzPz8+ysrKvr6+pqamJiYmOjo5/f3/w8PDLy8t7e3twcHDT09PGxsbk5ORmZmZeXl5JSUm3t7e6urrPoq9IAAAABnRSTlMA+uWnfzGozdCBAAADxklEQVRo3u3a7XaaQBCAYZM0M7sIyJcIgkHFbxOT3P/NNd3ZIoRod4zh9IfvjzanUR9YB8RTeh89PtzDD3b/8NhT/bqDH+7ul3Kggz6kxzvooLvH3gN00kPvHjrpvgcddYNu0A26Qd+E7CAcpNkh3y7d6S4GRgxoNUuHiFLgR/R35BbXh4ItElFP4uvIvyZkTSfEtBO4tK8G7SdtoE6V8VWgJG0ul5RCSNmghu9XgMaOrF5QoJMtwtnbdD7aRAJr2sL6LhRIUS1RNnuGY97adbD6ZRZ/DxpVe/M0SqDVOq9WdGJ/A7LSao7L1Yk97ldbUlwOLQRSqX1m9If6UcPnS6Ep6kI4lx+RJPrxZVAh9Jrs4Xxe+nciLoL8IT1bv8tGM+NeAkWSDkYfDHK1FPChuV64HRi1pYc7HhdKnlA1BbPivpKEy4VKWrgFmObTlomEByWSDg0PjAsFbRoPcmmHZmCe9UonkRUHsmi0JxYweqO1m3OgfTWsnCL1pIgDpULtEPB6R5XNgNQEiRET8tTT5NwcGqPKB2ZLtRBbcyhUM/cK3N4U9GQM0ZaJARtK9EoYQ5E+iNg5CtobQ3Q2KfhQTtNgClmoSqBWcOh/Wdb4/B6IP5BrCq0I8pofGqeKP5+5ZGkK+ahqLX6r1gfDSI3r0hR6bkN4urINMZfOgmMvp6Hi89KJkjkMq/o/bY5X4PQHJZon3pI3DEAvOv7Ef5XnQb1MjXdoDPXVxr4BO/rsC4yhFGkFuMWoso0hGp6IDe2VIyxjaF0dirwWagNzMIYsGqrpRedUOTKH9GGTMx29EDsGNMXmgHMui1+BAcV0WffCcnb63MeBQJ8I1hzoQO/sMwsaI3InPKAdSoEFwZY7eN5Ev69MSO+SNJ6HlE62G2BCUOpvVomZM9Ib5rOhWH+FjTyzN4gKgQtVh5/YGkhridXxwIZgrqXIB+qfjxwmfIgunuj5zu4sYw1QQwVcBlm51K8wt+Bkdi6abxAfgtVEaGkSwNclA5TaEY59KQTxi0Ddofjq9yNJD2hKfAis8njx0w+br+PtN8Q0JT5EzRCPlrMJg7Gd+HYxc3OBR8ZpSWwICqe+OrL5g/45tAYtiQ2B5wqB58ptAGhIfIiylyhPIAKjdwBoSXyI8hdDFG1GYroDqiXxIcoKNh+WqCNPWegDZSARZJY9W2SToUTpRNkyHFtAtSWfBfGrpByOMSCW1P5ayoDYkoR6DIglta/tfgSC2SEK4VP/7/9a3qAbdINu0HXr7Caxzm576+xGvq5uTezuZsvObh/9DX0gIQxCgyCMAAAAAElFTkSuQmCC";

  var img$i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAmVBMVEUAAAD///////////////////////8zMzM5OTnT09M/Pz/7+/tGRkY1NTXv7+9OTk7c3Nx6enpYWFjo6OjFxcVfX1/39/fW1tbMzMy7u7usrKyNjY1oaGhTU1Pz8/Pk5OTQ0NC3t7eysrJzc3NKSkqjo6OdnZ2Tk5OAgIDr6+vg4OCXl5dvb29ra2tjY2O+vr6Dg4Onp6eJiYmMMDgYAAAABnRSTlMA+uWnfzGozdCBAAAC8UlEQVRo3u3ay3LiMBAFUAzhCmxjg23wA8wbwpsk//9xk4nUyC6YmgVqVRbcDVBenFJJ5W4JNb7TbjUdsMVpttqNn7zxKWS9/TiwkG+p7cBCnHajBStpNZqwkmbDgZU4DVjKC3pBL8gKNN+8LwPUwwDtT+I7boFKOCAvEjIfHigs0FZQTiNQOKCJuGVIE8UCuUInPECGA+qIStw5KEwQcZ0cFB4op7XX+wTACHWnt0UxBjgheAOSBiNWCHgn6RLwQih6SipjXggJLT4/5YWQ+kpyE14Is5CW+ZIXQjAUKkdeCKMVSTuPFQK+SDpPeSFsSIr2vBByWubrPi+EzKVlnvFC6K+pbix4IewjobLhhTA9k/TFC8HbkbQasULAUbdHvBCWVDfCGS+ExKW60eWFdN3oJLwQ4pLqRsELIbgIlXdeqNoeeawQMCZpMuWF8EnLPIp5IVx13eCFMHf1foMVwiFUkr/nhXR7NOCEnOAwX7hqSKahuJ/lxXa8Ow1DSVBGhqFI3IVnRPk/oA9j0MKTn+XjAQWmoI1YqrL3yIn6MARthQgd+TZdV4WeH11W48SDCYj6BNXLFZKYLJI0nhqtsLSPLdXGwpez4plvt6ggXGvdfmEa0huWoRqSK3sgzzC0E7cktTO2pVHIGQidi+qL5ZBKhpMTSlZdHCI3B3krqmyybJ9VcZCPI2NQdiYnVSNLa+swMQXd6mcffbWFUMVCPh+agrQDnOR39VL7oDkzCa0PANCtleyZnLPJ01CknXBWPTjuqV9qzrrPQjvtxJDJqhWO5uz0LDTrKKfcgzKUQ1LwiubsOQiLzt2xY1I7XU3lr+2zEGa70p8UDyauE1S71PNz0OPkekeUU+O4YoCoMXHjz1BQjhwQNSY9cYsbsEBeSAA5V7BAKOrO5ACAAar3Wr1BChkGCHOaH3ccg8IB4er/ZdabKXRYIIwWx23m4T6//w/fF/SCXtB/Yu1KlbVLYtauvVm7yGfraqK9y5bWro/+AdOIGl9J8J/ZAAAAAElFTkSuQmCC";

  var img$h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAUVBMVEUAAAD///////////////////////8zMzPz8/NZWVnAwMA/Pz/a2tpzc3P4+Pi6urpOTk47Ozvu7u6qqqp6enphYWHS0tLHx8ebm5uTk5Nra2tiB1jKAAAABnRSTlMA++WnfzGVrfkxAAABBElEQVRo3u3aW46CQBCF4S6QU+04w8XLzOj+F6qCLZrYSSfaFSDn38CXEOCljrtUlYUgW1KUletbCTInq96BQRepEhgklSthUukKmFQ4gUniYBQhQoSWDYk3gbb7TtsGT+WA6lav7fBQFuhf+7oaY1mgkw79YiwLtNahL4wRAqEQIRAKEQKhECEQChHCkiEf7bAZanysOhna7jca7RtDPxpt3aRBvlVNguLtkqCjvg11PgU6vA/p36Sgjzy6Sb0MH3i9p/bBLvJfR4gQoVuEQChECIRChEDo3qyPIC/POrM+VL08vc37mHiNECFCS4esJlVmIzGz2ZvZkM9qmmg3tjSbj54BcxwE/PC391YAAAAASUVORK5CYII=";

  var img$g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAjVBMVEUAAAD///////////////////////////8zMzOysrI3NzdgYGBcXFzOzs6VlZU1NTX8/Pz39/dmZmZFRUW8vLyrq6uenp6BgYFwcHBXV1dBQUH09PTh4eHZ2dnHx8eSkpJQUFBLS0s8PDzl5eXU1NR0dHTw8PDb29vAwMCvr6+mpqaMjIx6enrr6+tiYmIKA4ZdAAAAB3RSTlMA+uWnfzED0RzAUQAAAf1JREFUaN7t2tlSwjAUgOGyeQ6B0n2je9kFff/HUybRGUenSROaUSf/NeQbaHJBONZ7i9kURmw6W1j3nuYTGLnJ/OkdmoOG5pa1mICGJgtrBlqaWVPQ0tQCTRnIQAb6J9DODpcDO5f5UKioW5TJ8S/eACi/OihdGwpDRYtKJa4YtA9QsdQTgV4CVC4RgFwfH9CSD12QFVyj5cDiA0HaNudBboO0jQsSFSukxTwoRNozyOUxKXA50I2+bgWylewI2hyIbbk9SJewr74fKhQ+EOtEl/D7IZu+qgaFtngv64dCla3AyugG74eWH+dNIbrviIH+IxSla07+Jn8AdEN+pM2VoT2KRDbKUOQISakyVAk55KoMuRnhOw7ZKUNwTLb4ra9455ePP0f2x8P/moEMZCADGchABjKQgQz0c3u6TDw65BG8V40OQYQOOimMD0GVpNHf/rFsoCHQZXSoolCsAjX0UrUfKimUKDjsRK/7oePnHa90Z7rEoR+CTPUK0mUrRByoZjfxR1koQtqOA52Q5ntyjt3R978CB4IDk5pQ4jm91ARpFRcqCbK6bDWwxkHWK3AhiFG97U4AglTZcc4gAnkHRYeEwINYtaPitDaIQnDypZlu44EQxCpiv+nIwIL1Lfxkft9/5QYy0DhpGxLTNvambZBP12iivmFLbeOjbzu6QQG065M4AAAAAElFTkSuQmCC";

  var img$f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAk1BMVEUAAAD///////////////////////////8zMzM8PDyQkJDv7++pqal0dHRJSUlZWVk4ODj8/PyxsbH39/ejo6Nvb2/5+fnOzs6fn5+3t7ebm5uXl5fi4uKHh4d+fn5nZ2dMTExERETo6Ojd3d2/v7+Dg4N5eXnIyMiVlZVTU1Pz8/PU1NTQ0NCMjIzY2NhgYGCtra3alU/RAAAAB3RSTlMA+uWnfzED0RzAUQAAAoNJREFUaN7t2ttu4jAQgGFO7UwwFDvHpuRAIMBCgfb9n27JxNpuF21jSMcqUv47JOCLIyLI4N65h+EAGBsMH3pVj6M+MNcfPZ6hEVhodD5vfbBQ/6E3BCsNewOw0qAHluqgDuqgDvqBkIj98fX5sbgOes3x1vKDOaSO2KZUmUIBtitQZtAY23Y0glbYvpMJtEGddK5Noi4wgDz97HQJ17c86mPcN0MRUhnc1hqpbTMUI/V6I3RCym2GJkiJG6E9Uj475HVQB1mHwMGqmB/K8Jwj+CGRIxYlsEK6VeQBO6S7fyicbNaRBcib4bkjPzRHKvC4oRzrZktmaIa64tUShLLkh3Q+O5RLpNaKGXK3DlK5YIZgtUBqlzBDIN6QKiJmCMINUjJmharmWDfnhiCWSG1CZgiiAqk3wQxBskNqsWKGYJ8j5WyZIVBrpOSBEUrK9+dx5iA144JCAFEbOsUDJQEAvOBHBbBApwJjAO/pA3r+3ntYDR0cxEUI4KJOjpX5Xbk5tJF6Dap6GLjlwfvyOgodpNYJ/JuqC8PQqwo/QTpHAGyrq1VdMTnR4f/alZcQHvXUym2EVhKNO1xCMgFY6SV933Qr+wwV1TFO9fzEbYRgagwFQGVILZIUz0X1J2rWDCnjNU3+Ptu7JSwlfT+M6bEwmakG8qpR43aHMqvemJakX+uZTYlL/xc1p150z3V+1SSCj/Zk0pJ0Ae/cO8XLH/wskFjUTNxwwbYvmTrFJoJP/Yi/DKxD5XraWDZRraEUjXpTLaETGua2hN5NobQltDWF/JYQ5GbOYt8W8sazp8Z2qbij66iDOgg6qIP+dMeQrU1i1ra9WdvIZ2tror3Nlta2j/4GQjRJ2VA0dAoAAAAASUVORK5CYII=";

  var img$e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAllBMVEUAAAD///////////////////////8zMzNDQ0OlpaX7+/vq6upQUFDk5OTf3983Nzfx8fHDw8OSkpLS0tKDg4N+fn5bW1v39/fZ2dmYmJiLi4tVVVV5eXljY2M6OjrKysqioqKdnZ1zc3NnZ2dfX19LS0tHR0e/v7+7u7u0tLSurq5sbGw/Pz+qqqpZWVmIiIjs7OzFxcURI+eeAAAABnRSTlMA+uWnfzGozdCBAAADWUlEQVRo3u3aaXOiQBAGYI+1wRkuRRRFUeMZjxz//89tVnnH1JaQbqywtbv0tyTdPjJMzwwVGh/RabfoG6PV7jQu8aNJ3xzNHxeHKogPqdOkCqLZabSpkmg3WlRJtBpUUdRQDdXQPw6p2BVkl4fOqWXNxJQc2lm/YqiEZXJoZV1iLiyTQ/YV6tKnqKH/BQpUJVDPsdIoKIT2yWn9/iCk+pdPnRVBi8vP/YegYGWhPXOhIL3+4hiUh7RjZXHOh0LkJFoOGQfxng+5JsnR5aC3m5OofIiebtJbGUjNLMRQUwE0GprEmSoBDUx5NCruo9HUpA7k0LMpXny9MixN8rMU0ieUdjlLUBfZJy2Enm7Xw4FogfwnGdS7DToPoggVPRH0gvmmuJAaokQC7bKi1OVvE16aFe0EEC5oLNmPxrgkPhSj05UEUlhJYjb0mlUcZDvsISubcCGVfdZWySDU2YoJzc0dkkHmLs2ZEPJdKeThGzKhdbY3yE9BSbaI8yDlX9P7cqh//ZuvWJCHxpND+6zUY0E93CI55GK940BY8k90P5yijSfFt2BAGGgnB4owOvdig9vLgSaFqzBpGx+Vv0hOOBAWoBXlSa/DY96OnR1oXlnQAM0gD0ADydC9yAj50OFIs5EzZjIsWdAB7S13FPYXUcN6csgTNazGWVAO4dSpWRAWmYHYQTPbxIOOmA1l58KRCeHUGUodPJMtmZBnlRy7AaYRE8ICnWqZo1Msx1xojEsqd0FjNqT9rGc9UROhSrMhmhY/gxQ/6UyJD4XFzyDFTzqhADLf7uSxB+5kRkECuT7O+QHPCXDC910RRH0MxEpxHLVCfp9k0ChB5VQxnCmyk5EQothH7Vp/5eg1cv2YpBCdLcQ2LHbCrUk9kxyiiSn3z6pg2Lq+SZyQFELbIpx9XtLeQQ5aVQ6po3WL9fxeynxo3eKoxBCkyPoUydL9rUeXyee/R3DkENrJxCZa7GI3CNx4t5hiChQ0EB+inm2xwu7RYxDpFcdZaSoPIfbbr5gt5uRjEI2WduGojUf0MASq6+QxThfMgxAinGzujNkEqxMD4od7iNY2DHsdHdBXPEgYgRvPw9gt3A//un/41lAN1dAfgip7Sayy194qe5GvqlcTq3vZsrLXR38CNzUbwKsmamQAAAAASUVORK5CYII=";

  var img$d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAolBMVEUAAAAAvssAv8wAvswAv8sAv8sAvssAvs0AxNEAv8wAw9IAv8sAvsv////x+/z3/P38/v71/Pz4/f0Fv8xe1t7u+/vK8vTz+/waxNASw8/g9/jl+PosydTF8PNz2+JS09ye5us2zNY8zdfA7/Jp2OBZ1d0kx9KY5Op53ONu2uJ93uTa9vez6++C3+VK0Nrp+ftCz9jQ8/Wq6e5k2N8JwM2P4uiT7n99AAAADHRSTlMA2b69u5R2MybzEfI7x2vHAAAEAElEQVRo3u3a2XLaMBQGYNKkadIeS5aM9x2D2ZdC+v6v1gTJxqkHcqSAZjqT/yqJTT50LAlbaNDk6fHh7hmumue7h8enwfv8uIcb5f5H1/kON8z3lvn5DW6abz8ldENHSjp106/eDzCQtx5xDwZy/zp+wEieBo9gJI+DBzCSh8EdGMnd4BmM5HkAhvIFfUHaULjLx7NZNp+UASCiBTnlwiPcJcy2OSUuo+l6dAOoLHzCrfexCSlG14UmkW93hK61HDpXg4Yxsc6HbPPrQLVHrMvxvQRkXvaxN9aDFtT+p1qU9f7EMtkprbcjew0orPxulbjrTRfj8TwrKpd2G8rSEF4zpcffSmWo3lKrCeWrYXfwBPmqY/Ho7Zh3/NmdqEIJaWtEyDroD61D5Lfl2yYAv8W5Q0UoOFUmOteJNzFrJBZoQjVpnen5seJkp64RaEFhLP8BdXeXC7yksk1LLSjl0vFCuBwnZfJUpgHNfVk2z/l4vq247HvqUNK8yQo1la3k6eqQJy4Q914AlZTrQbkonP0b054wSZLStXUgJ5YXKEEwlu2S11AdaEKEkyE+eKOmKTrQUrwiRhRu41r60Eg0yN/Ax5n5n4AKUY0IENlZfWiEhYg4/wCY9K4RXwESkpWjDqDyJ6bdxFPAQmsx+FagGTSUisrlgIs+xESpA0BFHwoE5AIu+lAphmAFuOhDcv6Zgk42RbHBQnN6nLgzHWds2RYvkFDGj6NoruEEohttcNDsONTZWAPK2fE9zm4NyWLwDAcd2PEaLTSgP2LWR87euX6v28s5BQeNxDhKNaBUDPURDgq59swgp/0AB8nTeajs1M3khYS85gNZNWMBVVhoIWq3V4ZWohRrLFS2pVbLC5O3DFjIETc2bK06XCUEoHgXRBw1aCtuows8VPo63SEnsnJ4CCLrmEilSY580RIAlO+9pyrzHJNlUIGgeZrYoZ1SPk1sHSVINslyQ8XC+WJCVX7io56DG0KeaJDtgSJUU0tBctLm9EQVah9HWPXyseMxefIclCGo0G0KmxU9noIGFG5t+fJlctHZuc3KSRzqQFC77VJgdmEtaMosGVKDFgSJ1cSPN2eYYdQ6VgCaEATEbqno4PSPrwk5rRcnoA1BHfFTq+gqD7rKcE9PreFxDZ+AIEzfralStyqy+Xi8mKYuJ50jfhWCLiQzZ/1V4v6fFgCfhSDxfOtyiFeDBtRPfnklPx4CXAcCZ7IkZ76b8KMJgD7Uz6ggvW9bOGFFCYCG0NY6ZcwllNs2Iy4n3qJ0ANCQWoJyMs9ms0O+O9+d/6/v+L4g85CpbQa/jG2cMLYVxNjmFmPbdUxtQDK2pcrUJjFT296MbeQztDXR7GZLY9tH/wJaqhlff2pFzgAAAABJRU5ErkJggg==";

  var img$c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAnFBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////3/P35/f0Mwc39/v70/Pxt2eHw+/zu+vvl+PoGv8ys6u5R09spyNPX9fff9/gjx9Imx9KF4OYdxdEPws7p+frL8vQZxNDQ8/VX1Nwyy9UvydQTw8983uRe1t687vGy6++d5utH0NlFz9lx2+LH8POa5eqT4+k/ztil6OyO4uhm2OA6zddz/xLXAAAABnRSTlMA++WnfzGVrfkxAAADxUlEQVRo3u3abXeaMBQHcNuuNwnJglFB6wNK1epmrW33/b/bXC7bZeMAmdvlnJ7j/00hgj8DIb226Z1zf3d7A2y5ub277/l84lLI+uQd6CBn6Z6zP9Sn+94ddJK73i10ktveDXSSmx50lCt0ha7QFfpo0OjYV6q/H5XbGCC3l0qco+WeGhkg92xEEZ0UbRxQhA5GHbGRAYoWUpRi8nMbA0SO1vjjFYABIke+vOJGDBxQtCwc8xVgp32XOCByVue9z35HRaHQZQ4nNPvlDIETmiWFI9HhgNBR1J9ayK3boXCnHnqRMj39E7SuOASVHRz5l0NRyamHnMCMLoWiU5+cBgiK0aJGfwVl26fUyh9RRpDTBO1Q0v11OJS9SCMo5DRBs1Rhl56CoW9WlgR6fpohmMaaPlII9A2Pr/SnFsqm2DayeLCdBUF5lVH2C9RC0cIo4VDCC24eQqCo/4ciY7mfQj0ktBB6nvnWTSHNAqDPpnj/dP/gcxhGAPXQFPuc+IPcHKFNADRHRkyA0gSNDZ7w5puHuDdvhx7xSLuGQMglWgiafJ7x9FMrdDB0VhAE42Kspb595ff0sRV6w0s+C4cgLy7Cux9L+NT2W6EBHRcG0fhZ+Bee8JZlHJDr42Xw93VrffeG/x+iN9/6KU/5FzYs0BpvzMDvWNxmgWBJN4m2OaBdMcBpNCQ8ED4UpvwOPNADjmm//coH0Vl06VIeaFEMAJrtlixQMe/sStP/EwuEM6nxk53DL04PLFCCU5Cf377SLNEIveA57m+grSk9Oq/aQ49t0EH54/JQiIofeyjNQBaaIOq5tuFQpjT++vZX4YTQrhVyRnhp4AIhJ34rG/d45VatEBxlUQS9Db/45OtGKCtKv6XzJYdE1bVDmREYbWMfK5OVq4emplzaL7Rv3odUqu+mWhAvp7UQYBU0LldbchICwVFVJBVPaqG1sHaOHySa49EDCICosC1Hk1QZ3i7P3W9fDc0kEIJhalskgijuWVKN3wxRtjuprE+sSGqGdsWTkboQiDIbPf7IaSM1SQ3QJi5GzuOl38pH8U9p1AT1BWYFl0IwJqkBsjiyD3A5BBOS6qGBxoEQBIVLVSgSxpoNtEHhUv3w/roaQwgULrH+BXJMEi9Ekh0xQVVpCrDRHnIcEEnxcCuKapsDQgkBJahMZIBQwlBpwAHBeF6SdOJvEQPkJfXLETNsY4Fgmhh0TEqFBAcE7j01NjbpIaI2Bsgny/NKbz7yv0ev0BX6IFBXS6o6WyTW2bK3zhbydbU0sbvFlp0tH/0OpJspgKLrZusAAAAASUVORK5CYII=";

  var img$b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAsVBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8Fv8x53eRR09zu+/z6/v79//8kx9J/3uUrydT3/f70/P1Ez9kextEMwc4JwM237PCs6u5p2eFX1N0ZxNAQws7f9/kxytXa9vjE8POd5uuE4OY+ztiN4uhu2+JJ0Nrl+fo3zNYVw8/i+PnU9PbI8fSY5erA7/K67vGx6++I4ed13ONj19/p+vum6e2i5+xd1t5N0tvN8/aT4+lAZSgTAAAABnRSTlMA++WnfzGVrfkxAAAEnklEQVRo3u2a6VbaQBSAQeudQEIIZiGQEPZd2bSgvv+DtYc7k2k0mQVoTnuO378eQ79Z7iam8puH+7sq/DWqd/cPlTM/dC36rh9nD5TAb9NDFUqg+lC5h1K4r9xBKdxVqlAK1QqUxLfoW/SviwKnPq3tPz5Gh47rAXJzkXc69hrkD1pPeze4tSg6rEkeVlg3bigatxukEHMS3Ug0GxAxrWfvBiK7TeS0asaVIqPZ+nRQT+1weNxt+xbJ0HevEnlPf178YOQu+RLs7rBHOI3RFaI3k6Q8dWL4QjKZ8yc20aWiTiNdbpgUne2Jx/3KuUw0Ioy2AwK66a7MxSWiSbrQOojxJ2zrjwt9UY15BkuFVDPZnhxd0QvzDJVKjN1n2/f0RIlFo2AKasRbFp2Gjiju0Yx3QZlnaproiEKCdEEDVqve1EVvBBmBDv6aXlOgKgrowe1AD5vG3l5JxDN17YMmLoaQ5aiJlo8YCDZo08Ql/lQTjdgF6WP0MSlsFVGMJ90L4AJmNMtVRB189gUuYoDHHiuIsNfNjdxEbv6cGipb6shFNj55yL2CDSEkBCGYTAO5qInXGQFAwamOhaIDLtSTijbY6iCPd0KkW4oaeMUyUWAVh4JDh5RIIRyOMpFLdy7quU2FpJ3LRAdMotxQeKWiuTDwxvjQUiIaYg0R1HRZ9wjwksYS0aD4cMJUNAARPbxliei1cMlLi6Q4ItEWe4VEZBWmypRwnuU9/VksMopX/I63h/ObqFVN8EGxKP4U3bFbp3SoARvBFMvVW53h+p/ieycWRSiK+GCYZUhPsE//R445zo6eW7HIx0/ZPHOyjMHH/uvScOeseONU2BHghxJeyTP00rve4aVx+DF8YA2SiOh66Y5aJEstrXiNyCVZTKAcz//8kIh6mb71kv1t/D3gOT3aZj3WKds5mxJROzvWOtMap2uci1wX44+gj/6sYwPDxJyXiCa0HQkw5ugoeDCi1ywR0XQx5I0gr4TwDTcCkYg3t4WwiVrM81RYgd6lrfxV3tt4Ha8XFu+JVBSyzJf3NrKGryzwRzOp6IWdnXymIqfCk3v0pSK/lTfU5obMKidkfJPWbqkIsBFYnkjkn2+yUzzWzWQiPtR+iG+plb/p4JXNQHIRrFV+PVrWF4IUOyiJuizp9fHwgk1fSQR9FlPatNmEqSaq0y92El3Png6YvpKIL2y11PN0+XypKLJpwxsYOp4F/dQW5CKekMhRwxPR7mF66iJeNp9xTxrfbzXeQEcU96lpo3hPrsm/c9IRgc0mrZ6j4pmy4SIETREkjwR5rEs1wZBQNoa2CFxmImEk9sz6aceNQV8EC5OwTTVjKCTZ8VElgEtE4PRIqtp7Bftuk5SjAZeJIN6RlMbm5YtrsV/xB6wpgK6Ic7Ayf+kYTmd2DADGMuk2d2ZmLE/gGhE4G/KFFrNzrH0AMpGM05xI2ToAV4sg6KwkmjGAikiOcdo0iizmMAFQFsnxagMrxxJ2AwA9kRx/NgrXVuoYDKd8L9oiOUs7GS8cT1Aq/qu/lX+LvkX/l6isV6pKe0mstNfeSnuRr6xXE8t72bK010d/AQQIN3f3lf4mAAAAAElFTkSuQmCC";

  var img$a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAApVBMVEUAAAAAvssAv8wAvswAv8sAv80AwdAAvsv////5/f37/v79/v73/f0HwMwlx9K17PDx+/zo+fqY5eofxtHX9PaH4OY7zdft+vtQ0tsOwc7d9vgTw8+T4+ly2+IYxNDS8/bG8POg5+uN4uhs2eFk199g1t4xytXN8vXA7/K67fFI0NoqydP0/Pzh9/mv6++q6e193uRZ1d1Cz9ik6OyB3+V23OPZ9feaBTLJAAAAB3RSTlMA/Prlp38x8V/kKgAABD5JREFUaN7t2mlz2jAQBmByNJJWMtQ4Prnv+4b8/5/WoDUZE9up1qGeTsv7pVPa+BHr1QFx5T0vz08P7I/l4en5paLz45H94Tz+0A4rIe/SyyMrIY8vlWdWSp4rT6yUPFUeWCl5qLCScofu0B36V6FqcKpvZt3puueOvJARQoAaw43PpRL8PfpPOXG920NBDQTwT1F8dXRuCo0iCTwzAnrVm0HzCCTPjZDN8CZQY80heV2lQCh19ZK/uwE0tgWPA4Lbs35ruBsNtoeOkIrHkbL/bShQ8FGi2TB55629a8vLIGAWfg/aShkzy22bpbLvXppERNXvQJvLZaDZyGmUt7hRxE+vONSPHbn+YrgjP57DP52i0EjGt7rFvorTQUm8hcUgD+K7M2dfx1rH/7NWCHJ8MLjLmCO+d3CLQFgQ8I0WMxewygEdGsTlMFyga0JDtkWF2ksc4oiZJXzVknCpUBN/rs9M4/zECrRpUEPp9+NnVWJeP2b1cQtwaDTIxU4YZl2QS8UzBmCtdOupBgny9RuK8t4rZI17pyExoEBzmdusC30vapkTAs4/NKFAG125KPMglA/tcEZUCZC+mDgRIWuJtTOHxlzHIUKsJ861q5lDLd3cK0aFsHZLc6gH5xLUyVA7roQxNNG1HpKheFbMjSFcTTw6NNVTdmAMcZ2rVSvovmIiPGTFf3urXdWpDmfoaAo1ELKSm4bg2QEeJlcuda550xRycIdIvmRnKqmNYXuGoEeDIPkS5EKy+RmSvW+Ubspz4xUvncV1GldTSwGG49YLGMGD1HapXFOIYWONP/EYXL1n1iXXJwfd3i1j6FWPeUefRyvcXYyhjcQKUKEQj3cLUwibh0/IEO6XwjKG9ti4IRXq6+7uMmPIwqPJiAjhtFZHc4hNJQ6NBu3jiUWARqBrN6ZBa4H7JQEKdTeIGctZNmTWpujhlxwuBWIHXK33WYcqmdPBXTznOyRooRsVOpnH8lWU5QTY2xtGgi4fQ0bMNFYkceEiQmOpITU2hfDMKQ6MCMWfW8BumzlbwFZok6HQx5pPLBMnwLpBi5EhtgeupbWBtFc4qmmhj/8DiVLH+Z0zAHT8diGI1QVKvvd1v9VxRFJ4Rb+imaIEYsDyU+0KjmmxolAjEhypKGDZadfh4gi7WhRi4RQuX/1NvKx/PypkEhIZwjQlxwB/O11fx5ofPhiZkqgQGwJ8jJjbh1MwrradhTd0uyA1g/MaUhIVYp6dqA4oGaMqUTJxYvWURIaY5YLg+QHoVhm7lugQptrLpQSf4PkvJVEhjNP3JaQUqeQamzFDokMYKzj4XIjE3eLLWgtXp1yJDmEWw/5s5Suu7M6sd8KtKlNyCBA9KKVWcQJEl2RyayFAZEmxZAgQScr8tvj2EBtOOqn94u/9reUdukN36H+BynqkqrSHxEp77K20B/nKejSxvIctS3t89BeexFWlWRwk5gAAAABJRU5ErkJggg==";

  var img$9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAApVBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////8/v74/f36/f4Hv8zX9fckx9Lp+fofxtGY5Ok7zdft+/tQ0tsRws8Lwc1z2+IYxNDE8POI4efz/Py87vF/3uUxytXl+Pm17PCh5+yT4+ls2eFDz9nd9viN4uhh1t7S8/av6++q6e3K8vSF4ObP8vVj198oyNPg9/im6Ox43eNl2N9b1d5Y1N1K0dqc5ut7OHYxAAAABnRSTlMA++WnfzGVrfkxAAAD9UlEQVRo3u3aaVPbMBAG4ATKaldO4tjxlfu+CVeh//+nlchL7YBJtSH1dNq8X5iBcR55tY5so8prbq6vqvDHUr26vqmYfJMqcuubcaCEvEo3VSgh1ZvKNZSS68oVlJKrShVKSbUCJeUCXaAL9K9C9VbUXHc3yWrUXnghCCKAgt3aV0havcb8xNutd36oNUSN6l1IDXruOSFnMUOtCkP4o342aHqPxQpT4+AsULxSeYeIkIgOfuU/nwHqD0hxUKtGdx49PX+f9EZLrSiz5l+GWvQ2ORq7Ozc/cdN2Q739EbvB16Ce4lCnFxfMXvJWVprVvwKt8XcT/lJDPuGOdzo0Ry7M6shwFz5fw379VGjBDEZwLO6S0nOqhadBHnJNpnA84QrTAg9Pglwf7WY56xlsnwLdUlp5FyyyxZRqyaEJF84DqwzTYQ1CKRR3lMkC7BLWtBlXWwqNyRw3B9u4nbQCsQyKjaMaglU0MqdEcxnUNhA+gX2cgTJSIIEc3zgzkOQ7mtpNJNBL1qyCLI10K4HWpt4zkOXZQOpOAJkOokch5KSHTeyhvjJxQZjRvhA4tIci03P3UofboWMPjfYHUFMMxVwJa2hjav0E4jQMNLWG0m8TTw4l3A2WkKNM4oO7oU2tMMODOjX1HtraQkEKhflFQ6vioAref3PR2BZy04+AXAaFyoeFobeH8McXIPwUwvz4Hw00EpbOgSxd9Wm896XTY2EzBAeXFmFR9OEX79g0Q9sWAjJQ/x1fnMM7B9PekTVUM8X/DuLcmwNb1tAauQLChLxOWEM94hVMFl4vybGGpmnjBlJobgaYgDXkkIEWMoYva+rZQ9DFPZQIHY8vLAG0QG5wUVamEAMQQGF6n9o94YRoK4HggXgJEyTRZmZdEdQ3Di4FTis9oTWIIBhqYeOFM55XIdRPDyPbfuB7TnoAIcTPLdiI7ZweDywWQwE/wm4c+wlSGIEYgik/W64spCkpvh7kUPYUu3R/50wwfWLxYznEN0/7kO8dZZwmpnUjD06DnIT49dnkSPnuEq3SRCCGOMGMeJJnLShO3ERiRzfqUiiTupol3BTVJewRMyxJoSxjxdGqFtUPK/vyQDpjWJJDnB1i7u3z6LHVr8funbdrJ1r9YrCBmSSGON4gN2wkZnW+ZPToNDNJDnHCLZL6PIjJ/sPzkhzi1EefUlrd8rvoA0kOcdy5j/qDgoQrbsYPkhziOK0HXxHlENUZRi5wCiU5xLl7mg/vfVLUWHZHES9VRZIrgeTJpASyCCC5hCFkEUBiiSAfASSUcAsHEUCC7DbLD+vF3/tfywt0gS7Q/wKVtaWqtE1ipW17K20jX1lbE8vbbFna9tGfpbEkz2i9HpUAAAAASUVORK5CYII=";

  var img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAn1BMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////4/f04zNYFv8zt+vv8/v7Z9ff0/Pzn+frf9/gsydQVw88bxdBp2eBY1N1T09w8ztc0y9Ulx9IPws7O8vWr6e5K0dogxtEJwc3S9Pa97vG47fCx6+/H8PPC7/Kk6Oyf5+uO4uiI4OZy2+JCztnx+/ya5eqB3+Ve1t7j+PmT4+h83uR33ONk199wOre6AAAABnRSTlMA++WnfzGVrfkxAAAC80lEQVRo3u3aSXfaMBQFYIZyBTKTR2wz2oEwhiQk//+3NUV6WLTp6cJ6Ol1wV4EsvmOkk/sU1PhKp91qgi3NVrvTuOYHn0LWj6sDB/mSOk04SLPTaMNJ2o0WnKTVaMJJmg04ygN6QA/ICTQ57F8D3IcBCkvxFS+CEQ5IToXKiwSFBfoQlHIJCge0EbdMaaFYoJOoMs6gwgF1hRFvAgoTNNRSNwGFB0pWWuofADBCvbwQOjuAE4J8Jmm2ZIWAPUmbnBdC1NfSYMELYU6bb5TyQkhHWhrOeSEsBrTNP3khBGuhc+aFsJyRtJWsEPBOUpnzQlVFTUNeCHGXesPnhTDxqt5gheCPqTdiXgjhVOgceCHkJUnvvBDklqSnJSsEnElaB7wQPm+9kfFCZm/wQmZvsEJmb0S8EPLbzLznhSBnJD1LVgjYkVTkvBAOtM1XIS+EhHrjzeeFqt44TXghZNQbo5AXQjClvccKBVkv9vQj2YZC/5hEl932aT1QBGVpGVqJ38P0RPFfoBdr0KvENYNvHS+wBR3Epwa/c1Y+6kM0pg7UT3JsCt3RajPbzSVsQDQn6FkuUkQRH9NFbrlh9+rz0QeLkdpm0v64RYWQ0HJdE1mHXoTOVD+Sp0Z9aRnailv0KHJRr17tQs+iykYPDCc11lmEaDSgTMzNIWJ7kHyiZlO1XeKaYEhrZgk6ltrxUv1k6d2Bdm4LGpPjw9dHCF0W6vdrSxBl5APQH6IPc8sfrUJvGQD07io7U2tW1IZWlTNeqLcKNWz/Uqtd36sLbYmp/nl2NBuuWrOaUDYkJwRlrYpBv0FrVhNCrKSN0Zzzu1Nyql5d6kJYbAdeEcGMmuGGgTmllvWg75NUJ6JkLVRmDBANJqcwqur8zAHRYNI3px8OiAaTKsMELBCie6fIALBA5iP1ZylUGCBMaH2GuwUoHBCSt+vf2Y8cVVggLOPz5SjxZ/7/L3wf0AN6QP+IsytVzi6JObv25uwin6urie4uWzq7PvoTA1gcp9niWMsAAAAASUVORK5CYII=";

  var img$7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAWlBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8Pws7Q8/VP0tuw6u4vydTw+/vv+vv1/P3e9vjG8POD3+VV09w/ztgWw88IwMzs+vu57fCq6e2i5+xt2eFp2eBa1N0bVuUsAAAABnRSTlMA+uWnfzGozdCBAAABDElEQVRo3u3aC66CMBCF4Q7Iab1Xxffb/W9TBZtqYpWoHcGcfwNfQlqSZsacKvJMkCzJ8sJU9QSJk17lQKGTVAgUksLkUCk3GVTKjEAlMVCKECFCPw45RPootNiUdnzATSkgN7bn9rgqCTS1VeUSoSTQ2tbNEUoC9S/QH0KEQMhHCIR8hEDIRwiEfITwy5CLNhnVzVysZWNosV3ZaAPU/dto/dkzKLwXXoJCu0bQ1L4Nla4JNHkfsvNWQR/5dK06DArHu9GFHdY9uLCt/AURIkToEiEQ8hECIR8hEPJ1G7o7BOn0WOfuoKrTo7fYMLHb41FChAh9CxKoJGpLYmprb2qLfFqriXrLlmrro0c+CAVx4/q+RAAAAABJRU5ErkJggg==";

  var img$6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAkFBMVEUAAAAAvssAv8wAvswAv8sAv80AwdAA2/8Avsv///9h1t75/f3H8PP9/v7L8fSF3+Y+zdf7/v4JwM3j+Plo2OAQws7u+vu/7vJR0tsix9L0/P3R8/ae5uswytTb9vez6++u6u7q+fqI4OZ73eRY1N02zNYqydSn6O2Q4uh23ONu2uFI0NpDz9nD7/IZxNCK4efrtanHAAAACHRSTlMA/Prlp38xA5BBKAUAAAIJSURBVGje7drZjtowFIDhsM4xwWQn+8IOhZm+/9uV6rjVVKpyHJtYXfxfR/6I5FzYHOfZcj6bwGhNZvOl8723xRRGbrp4e0ILMNDCcZZTMNB06czBSHNnBkaaORMw0sQBQ1nIQhYaF8r942pgWZ0Mhc77iKnE0zgcACXXgCkXZdLQOWJaVZLQacs0a0MZ6GPHtKtkoJS9oCMNrZgousargd06l2HbhIQasU+9EBTK10I6UNCRYV9ArVBIOwq64HNrUK3muIJPQLjl+AmUqxDy+qGceiG6My6R9kM+PrUHjfB7L/uhjNwKdCVu8H5ohdBKB8J951roX4TidkOUeskLoEvAGZUbJdrQicnkHrShOJCBeKsN3eXe6KoNQenSTlDk+lBSbfnncBn+uSKtX/8d+biMB79mIQtZyEIWspCFLGQhC/2+kzg9jA6FLnvGH6NDELOAB62JM+yj6uK/+7BsIWPQRga6I3TTgRq8ZO6HaoQqoKK+aLbphxIufo564m6x64eg1L6CFCvEBLT/eROvWMywnIDOHJ97D9Ucv/hxz0xA0DGsyRSYj33AsDsJ1QETFeV6YE3ARO9AQnBj+m1zCQhabYdnIAOFnabjZkBC2NdAx4keIAtBnSozhReCHITlh7Qp3IHtNpejYP7E/8ot9L9BpkaqjA2JGRt7MzbIZ2o00dywpbHx0W/4CGtodLp8vQAAAABJRU5ErkJggg==";

  var img$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAn1BMVEUAAAAAvssAv8wAvswAv8sAv80AwdAAvsv////0/PyL4ecSws5s2eGu6u7k+frQ8/Vh1t4Lwc0HwMz6/v502+L4/f4Vw889zth33OOo6e2b5uuW5OmF4OZ73eRa1d05zdckx9IcxdHr+vuC3+VR09wsydTh9/nZ9fey6++h5+x/3uUzy9XJ8fTA7/K37fBF0Nm97vGQ4+ln2ODU9PaS4+iKiZWvAAAAB3RSTlMA/Prlp38x8V/kKgAAApBJREFUaN7t2mmPokAQgGGvsQqP4RJQVC7xGs9x5v//tpWyk87uzoZWrM6a8HzSL74B1Ja2GlfdTrsJbJrtTrdB3lrArPVGHdDgWuq2QINWt9EBLTqNNmjRbjRBi2YDNKlDdagO1SH1kB+NevcbR/59ofiMjzrEd4Q+sYqpcmiD1RwVQz2s6lsptMTqdiqhCQqecS8PhY1CyDHEJU3hfuk3Es8uDwVItvCYEMmpPBQhiR8M7ZBY5aEBEv/BkI1kpBzq16E69DIhMLAQsYbkV6WR8of8A2KWA19IWgY28Iak1w85g0kYaAjZJl598oc+xAJuc4cOeGOmzCEThfedphAaOXNIGrOHzi6S0GEOWScDybnPHILlCsk6YQ6Bv0eSBcwhcCZIvIg1VFjgzYI7BJGHZOIwhyDIkOx95hAkaySrJXMI+mckxok5BE6IxI0ZQ0l+GfdCA4nJFXIA/FtDcHhCyQYA5ihlz7zjk6FdhhGA/S5D8yfew8pQbCCuHAALBbf3xLtyGZoYtO6Jp0crj22lfYYwgR84gn3l/LTCGj7AqVgq7tg5cT3PLeC/rPM/Q+LX3bE4k6WhpYvK4r9DbnJ7iXVpCGaKFXkl93iTeYg4FPsnVmkIhsqhDZAtklUyxavg9o4yy0PqO3YDcbY9umQppMWDfX9GZ98vD8Hu6KodkBB8obctvkzokDwkdlmI9PPRjCwKH4U5GZPR1SAAyYYCHZJw5N33nqKwT0FiCPkrypgWSCwhSIZGNgngN//FXwbaQ3k4LLW9VA9NUcmhamiHiqyKoYtqaFoxdFINjSqG4KDWWfWrhuye+V7qa+q/0OeoDtUhqEN1iI+2kSptQ2Laxt60DfLpGk3UN2ypbXz0F72CSzMm2iCFAAAAAElFTkSuQmCC";

  var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAqFBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////t+vtx2uIbxdAFv8wjx9L4/f1M0drZ9ffP8/UTw8+e5uuS4+k2zNYHwMzl+PrV9PbD7/KI4OZ93uUpyNPq+frL8vS+7vKv6++p6e2i5+yY5epr2eFR0ttCz9j8/v7d9vi57fBm2OBf1t4vytQnyNMJwM3z/Pzg9/iD3+V43eNW1N3H8PM8zdcNws6M4ed13OOQ5B26AAAABnRSTlMA+uWnfzGozdCBAAADfUlEQVRo3u3a+VPiMBQHcI7lBZIe9KKclVoQkEMB0f//P1vFHO4ObfLqbJ2d6fc3xzw/mPYlqbbxnk671YR/lmar3Wlc8wur4K1fVwcqyLvUaUIFaXYabagk7UYLKkmr0YRK0mxARamhGqqhn4GikCJGl4eyAyFDC1uFhxbkI32GLMNDCblmiSzDQ9NPKEOW4aHuJ9SDL6mhH4a8qBLIcYmdeoXQKe6ene9CI/KRYRHUu349+hbkJYS3Zz50sck1a688RF3Ck+VDL2JMTHWQ3iFOPmTJQS4tB3nK6bN8CO6U5JWB2JCIzCgUQJeZHDhkJaB7WZ7ui/toP5dD7/HQoyx+068MRzn4EQvRrijtgR6CnhjdpUjoTjkmELyJ8Xc4yBF1vumi6stOQEF9cb9FplAkSvoYaMGLbMt8m9jZvGiBgMSnG2P2o2fxK5lDIS9ZRRgoWvGy0BgKeMUGt8NueFlgCjH+s6YMB0VT3kvMEFrKK4SDYCx2LyNIXVULC+144bMhdOYbGWAhiPkibgYx3hAjPDTi7ceMoIloPCykGn1nBDniEuEhS6x3ekgt+Qe4nVXRxnPI/RSN3Ile5UCpmJ1beVKXVw8Fhasw0Gtbvhau+oEeUoeFBPKk+/46b8ceqqODHvJFM2CjIB83dYjgp06tWE9oRd0MYz2kVvsHhnfYA99fUA07wUMTVMNSeRZERp06qREEU3HroOPzHRPMoDW/G0rfC2sjSJ2kX3CKeiY7GkI7zaOB9gFkYgiBy/cvinMo3zFdMIWeSanbwRdHBmOIPvCenaCaSFRRYwjmhc8gmiedOZhDYeEziOZJJ0RA8tMdJsYTd5CzgIEsW5zzPTPHW8knHRQEr4QnYSYOS8T4V8BB+1hUziO9E83F6HiPhGBrqz9n6Bw6E2PtLWAhyIjIICx2woEcmgEegkCW21kBwzJbDgwABam2lXFPeYNOrho1h3IQWxOV2fLWkOWMqKwZElJSSr4kPv7VIrtx/PX7KYNSkDqHqwzSt8XW8jxruzim8hZQ5+3yEDhdYpSuA9+DgCYmTkJBC2lzGuiYwQlAD+lzGU8LZ218AQRUmH3PzWPc3h4AAWkTBoMbcxaEAICE9LE2/rkrJ+zsb3hfISBEPGu7fNlaRfvh//cP3xqqoRr6M5W9UlXZS2KVvfZW2Yt8Vb2aWN3LlpW9PvobhVMftSFfeGQAAAAASUVORK5CYII=";

  var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAyVBMVEUAAAD///////////////////////////////8zMzM/Pz/c3NzCwsI6Ojo2Njb8/Pw4ODg8PDxCQkLt7e2ampqwsLD4+Pj09PSMjIyJiYlnZ2dhYWFTU1NPT09ISEioqKilpaVvb29sbGzS0tK5ubmmpqaFhYV8fHxKSkrx8fHq6urW1tbOzs7Ly8vExMStra2rq6uWlpZycnJLS0vm5ubGxsaSkpLIyMi/v7+ysrKioqKPj494eHh1dXVtbW1eXl7g4OCfn59bW1uBhrKlAAAACHRSTlMA+uWnfzED/pS6TTQAAAL/SURBVGje7dprU+IwFIBhbupJJW1apNwsXkBYUFAQ1ivr5f//qC1puidsZ+KgPZlhhvcTExyeSaikDCnEHZRLRSCrWCofFNYdVqgUtCqHMVQBC1XidSuChYoHhTJYqVwogZVKhSJYqVgAS+2hPbSH9tBOQaPH84/6eHOMAKoNhCNcR3R6OEYBXQeCqZagooB6PsMecTw/CB2MLyCOAupxpicG8RgFdKPm4wqRiAEABXTDlXM/Dj9dOaURAYROdwRQlZNzjgkgdMYQQw4VNNEcOggd0a0BJfSQzudXDSgh3aGElppDCU00hxLqaw4B9D6tn6+bdXx0cocaL13f4WIdU7n36OQGXfmcYejkDQ19ZnDyg+Yi4zgROrlBz25mOnzVgNyhmp/OgieK6LbilzNCYSuI+rDRojmsmqGBWrjT/sKTqXET1GJxVxt7/vrpuhFyJOM3ceRrKGDrzrR7MvlsZIJ68k/cDmwDRUx2989J5MAE9ZMXmG4F1VnS7YbDWgZIXXOithUEMyXJd+VYOe3QBJ0klxpsB8HvVEKn04DcIZTcJ80hgeBFSegQQdBkWm8NoIBQQocQglbqfI6AGsKr3MrSuY8kEDooVemgF6YnUCL6h60PlTSlgfAjyEulpRn6cCUUfv9D1XtNHvMHI/SUfJO7+f42gdK7CVoGct7Nn2x83orJBiYoFExW/clW7s3lwNAEwaWbvJfPIwNjujlBqWqEjrlaYdE9lXWG1fALKGwGp33Q82ZB9ARGCC6UhDlBHSD/O9Uwctn/+TMvfwgaTGSluZc/BGGbZyR+4eUHYZOI86xEAAEs7prz9ro3n6NEAGm1UKKF4BYlWgjOUaKF4CqV/ni0kC7RQrpEC8FZKl16tJAu0UFZaUoIobQ6UvsjH5NAKHUd9cADEgjupIRdxmMEUEbi1xBHAsGtjw7eT+UIocRTxseFo4Bgcu+4MeP4JzhGAsHRdNDuvPYboLfbP4/uoT20O5CtI1XWDolZO/Zm7SCfraOJ9g5bWjs++hf/oHqtqKJk0gAAAABJRU5ErkJggg==";

  var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAA3lBMVEUAAAD///////////////////////8zMzPb29s3NzdYWFg6Ojr9/f329vb8/Pz4+PhPT0/v7+89PT3o6Ohubm7s7Ozk5OTT09ODg4NSUlLz8/Pf39+bm5uOjo54eHhra2tBQUHX19erq6t9fX1mZmZMTExJSUnCwsK4uLizs7Ourq6Hh4eAgIBhYWHGxsaTk5Nzc3NjY2Px8fHh4eHa2trPz8/MzMy7u7uoqKiRkZFeXl5DQ0M/Pz/JycnExMSfn5+Xl5eVlZVpaWm/v7+hoaGYmJhGRkakpKRwcHCLi4tOBDJdAAAABnRSTlMA++WnfzGVrfkxAAAFBklEQVRo3u2aaVfiMBSGi44JpRtQ9h2FUWQVUFldcET9/39oHG5iSkuSFpiemXN8P3lOYh56c7ekVT51dnoSQX9NkZPTM2WjHzLK4awfGw4KQZ+kswgKQZEz5RSFolPlBIWiEyWCQlFEQSHpG/QN+tdBVvR+Upq2P54fz5c2Ah0dZLc6ceyUNuv3jGOD0m8xvEvq4MU8IugupWKuauX0kUC9GyyW1raPAMqksFxayToQZJY0vKXFrFrpXAxWeZcx83cHgeyuc+O7T0u2HeboKrflhc/6/qDLGlunez5EHo3Lazajkd4XNGGLVMY827bymKpZ3A/0hKlSohX0q5903jy7D6iMiX6+ILGMMvWMZDY46JFybhI+Qm1Bo7cYFNSinJyvFFPM08e3g4HqxBjqBPnTsEpIMzMIqEAiROshv9JzhFQOAqpg0BXyL53mqkv/oBca7CiICnmyTYZfkNGE/xigYMqQRDL1C3qG+TFjRyK4vBYE750KHlT0B0okwRFGO4Zin8s88kklkrAEIG/qeUJetTcj/GeyiLeO/IAKEOVNa8c6Sf4egB4A1PEDOoe518ire5KUEF9dMPvQB2gGPmryw0szBSUMppzLQSOY+WuX29OyXkd8QTB15SBwHHVXtbzCROcC0C+YYktBjc28KtqhAQVdCEA2TGnJQJbKdYWCRkFxJNAN/BYZaAlLZXglCiSqha/gTDIQmLiJdijFQJei/pn8Fgkox80hQ5WB+gKQBVNuJSCw8KvYcriBBGrCLktAa27Bg1oN4ZzUBSCY2JeAVO9zgxIw8gDpbiwAgfVzYpAJpokij66hRTRX0pAtg3+LQQmudwOgTYpIR+rf72JQGkBpyo1S3YLl7kghyNP0F2XKbLWeVTGo4CxcQ88ZbK2jhCNMjA7gieJZRycwEIN0Z3q+wG61IT3TkH13Df/cFMsPyR6BNGKhP6phJhaFna9Cv/SMZ9nva0tAcYg28rdLeVaBVxDcLhVZkS1JQCnS1rIlmbRNeI1pyN55OCmHIe4loLLTZa5SMaZZrgjbmCShtgJijOrm1XI47lgCuob/Fp1VGmDdLCz4xulgDAkoSneVrz6ELBh5buzu/WLSUj4nWylrdIhLetvWOOyyFFQh/sVXAjMtCu5RYtEHKagltJ3b7V85XbNmiEGsBckJQCxjJD0dqVHj9EkKpx1VbT6IxVef19b1ZCDWp3/wQXXK0RKehmENSU8Xg0AxWCTDBZka91xc4jbUCrfzrcpCFmuevjmjgesbvkB6XHYkn9Ki4ZJexdwoVPiHcq3ODVmOv/QFx3JF0JM2wTS8Z55ybA6JWw5ipsZdi0PKNLBW1t05QRNtrsKLFEmzY3jye5pc29XsACBUCXC3BRrl2QEgAKhA81kDYtL/jd004H3daI5BzagfzoT2XQM9IAjVkzRxvkgxVg4TNazgd6pLSsIVW8x5+Kobs8I+t8TZ+Vc1KA0FKXbAuiBjv3vvYpMVnn5md+guHW3zhbnvTX7C2fM2rm03JdtvsnF1cshLkLftLj436WUKOkJWYnxfel9sjdUPe60TvcEeaZTOpE6Ng19UtdZYqlURoYNByJo0xZjqLTrSOz6z1eBSFjnYnMNBIPuxq3op88q9hdDxQCCj9zzIf9Fq3c4bnBiODQLp6Uz9Nhu1Xbnmv31X/g36Bv1foLA+qQrtI7HQPnsL7UO+sD5NDO9jy9A+H/0NycNHk3RuOUIAAAAASUVORK5CYII=";

  var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAolBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////v+/v1/P1N0dosydP8/v4Ev8z5/f33/f3x+/x+3uTs+vsWw88Pws6z6++U4+lh1t5l2ODh9/m37PCP4uhy2+Ju2uFq2eFI0Nrk+PnF8PO97vFDz9g1zNbe9vit6u6k6OxX1N08zdcKwM3W9PaF4OYYxNDK8fSZ5eocxdHZ9fcqyNOK4ecjx9LQ8/U2dbEYAAAABnRSTlMA++WnfzGVrfkxAAAC0klEQVRo3u3aa2/aMBiGYSjjMabOoSEQBrThfFpbKN3+/19bY9geOkup6PxGqsT9KRIoF7EgNoprbzUbN3WIVb9pNGu2b1IKrW/WQQW9Sc06KqjerDVQSY3aDSrpplZHJdVrqKgrdIWu0BX6UlC6Ht1le7xLAOrsolYUxnqyAROA5kmkbEblYN6heaxYG8wbRIfpn2BeoY1W50U7MJ/Q5nQ9RkdHMQH8Q7yecLHfPhs7dh0BiM44Bdr24loHAYjOE96gloVu/UOzM0cGch1BiM536whAriMJ5X+dDiShmePIQOszRwA65P1R0ePEcTxC6es4bumoyCg63qH7WCtGxze0ilWJ4w/qRo4Tv9DxBo3Mv4zRyxTeoY4+nT3WxhaNewegFNr2kpc13rXvrdrl0O40cL/W+8AGWynUK47vcda8eDkrhVqWiYdgH0KJokRHLUqg01vMBJdAC2V7eH8SlZRB6+MUnV8EZepYH7bbRNl6ZdAotOuozkUQHinRmW7LoDtVZHARRCmjM6HjEcKrspns8MdJIQJheJLoeIcosWc63iH0HEcCokRHHsrARIcubIOJfBkoiUF0KMn+YFfKFuVgMrcgSuWQsVDw6ZsqpVkplB2nic1/TBPB0v3P7kK5PUE0/PzER6lXBgWRsrU/PZVTWpVBGBhVFI5SsEsXJ0HXfthS6FYrmw7HP2yTVTv4ANoOT8stSo/JIkMphO5RYqaV9AH/K9XtwrhL4jsBCKkKXakrAGE71Y6kux4hNnuJtCMFHiG2fxgup0XPWlPyCbkNKclC6FOShXBPSQpyJVmI0iCQglxJFsIDJSnIlYQgVwKQx3IQpSUwCO3RkwhEadxStiiAd4gSMwMwXxDvRkzPwfxBrrQD8wa5UsyBk4AwW7RMwTjrCF8Qy3fTyXKd4ryv/Xj0Cl2hrwNVtaWqsk1ilW17q2wjX1VbE6vbbFnZ9tHfnZ0j0oLHnMYAAAAASUVORK5CYII=";

  var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAq1BMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8uytQMwc4HwMzR8/YTw8/6/f39/v7d9vg2zNYjx9L3/P3r+vvC7/K47fCD3+a07O+I4OZY1N1H0NkexdEZxNCt6u6d5uuX5Op+3uX1/Pzl+PrY9ffH8POi5+xm2OApyNPz+/zh9/l33ONM0drv+/uN4udr2eE9zte97vFf1t5x2+JCz9in6O1R09yQ4+jK8fTO8vXaeG6JAAAABnRSTlMA++WnfzGVrfkxAAAExklEQVRo3u2aa3OiMBSGtd2eAAUBL4iCiPda71rb/f+/bLtNSOjG5IB1md2Zvh86nTHyJOfkXIipvevh/q4Of031u/uH2od+YJSvs358cKACvZMe6lCB6g+1e6hE97U7qER3tTpUonoNKtI36Bv0r4Ms43xMw+Fr8DzvR0B1c1B0mLkNklPzLeybtwbFx0dySc7gbN0QtOs2iFKtTXwjUL9N9GoOoxuA/C7B1UytL4KstEk+af3WGSSzwX7ikE+anL4EiqZ5x0+DU5xbai9xiVAj+AJotSZc060NkozNWIxox9eCtg0+3YEBCh0mnLRcXAcK+BM6C9Cox1fV8q4BbfhEz6CXucmWPvLKg5656e0CobbO1rQoCzpknKRQillMsuVH5UCew3bBEYrJ7mS70yoDMl0W8X0orCEjbcqABoSqByWU5apVcdCZUAVQRuaEucksCjKX9BsDKCe/Rb8XakFypD6aIMlazTXBe3JoUlwUA9kjuhH8Cx/9fH/Ms5qU0im+oKD8ggLVzmqo12S5NCj8IiBzTV1qXXjOE/OBUn0W5UVAWzp2rt6NbVBrSs1uIyAxdGypw2ukK2FsmjjIpyMvedzMyrqnIdFgmuKglLozBlk9wrRVUUTWj1BQm5Y6XWIiMw0oprXpgIEsh9pYZzniqihipjMMdKKP8hUliskGrAMYY6Bn9ZS7ArTS9c9sLggoUeYQ2xGgUAOyqJN2CIhaONVbjuxBoyX1MgIaKwserdVvH3+fVBAxMERADl230nJ9mu4MtKYP9SCLqJ4zp+0U7NGQ3VA360G2Iq6BAYYQsDDBilJXD4opKM64RqYd3UsnljUnWRAvDC7/U4R09CBTxKvo1YTGfM32x+jEITm5Xi5iB8hmyPtoRv7UkKfn1R8hnKstr9S4CGjELPRbLQm04/iAl9O8PDG/IQJyabSJ//OaiO2358Gd10JUzhQBUWtseFHPa/QRXkYWsjuJ080ZooeAXvNbptd5FHpLFnnrGrCnRD6gHVi5jWsgoDmaYhhg7tEHHi/X4YaJgAy8KwhpR0WN3DIvZ6CfgICYhVO00VmrmhiXehkFvbD9pZZNhNbSgphFVyjogNvOFaBAkbtHJgLiLUiiAYmM8WQrGuoXQEDcdk6kBon4ClVtXR8DicTyqgYZPIKlBVnjLPniIHiUX4+khKiaTKpsqGvKzreD9YikGUuNe1MEFw4CF3slD3nRkPsSEYU46Mw8YOhD1okUExibWpDcky5jbSSFCptzU+Agv6k/bgG/TUZSkvGaknMxEGzR9xNTmkM8ZgdcEQ6SX4WGFhSUP2HHVCsoAzJdxWkdemK3AQUIOW4hrlGEc2yw4YPSJ5DeU5Y4zyjGSvhxpVUaBKcRYXqJEbPxujE1rzkl9lq8GqQaTxmijeyY1517L5ai8ISRYt0CQ2bWtSf5du4pjfZcYnnhUgxwtl/5EeT4uYtPjn3f/O192+il3bXU4V8PAqNNJDU5ncsJTcBAmA5jgmq/AEBBqKztUo/p7AAKgXDUYd9QUdaJcA4OwhU9Tx2Z0hr0LIByIFxmPxhMHM6YJkckDSIgRLFv7DwjklLFf/pb+TfoG/R/gaq6UlXZJbHKrr1VdpGvqquJ1V22rOz66C+wOzeLd8XkIgAAAABJRU5ErkJggg==";

  var topBarHtml = function topBarHtml(namespace) {
    return "<div class='topbar-html-content' id='".concat(namespace, "-topbar-html-content'>\n        <div id='").concat(namespace, "-reset' class='topbar-html-content-item'>\n          <span>\u91CD\u7F6E</span>\n          <img src='").concat(img$n, "' source-src='").concat(img$n, "'  hover-src='").concat(img$d, "'></img>\n        </div>\n        <div id='").concat(namespace, "-audio' class='topbar-html-content-item topbar-html-margin0'>\n          <span>\u58F0\u97F3\u5F00\u5173</span>\n          <img src='").concat(img$m, "' name='audio' source-src='").concat(img$m, "'  hover-src='").concat(img$c, "'    selected-src='").concat(img$3, "'   selected-hover-src='").concat(img$1, "'></img>\n        </div>\n        <div id='").concat(namespace, "-audio-speed' class='topbar-html-content-item topbar-html-mright'>\n          <span>\u8BED\u901F</span>\n          <img src='").concat(img$l, "' name='speed' source-src='").concat(img$l, "'  hover-src='").concat(img$b, "'  selected-src='").concat(img$2, "'   selected-hover-src='").concat(img, "'></img>\n        </div>\n        <div id='").concat(namespace, "-zoom-out' class='topbar-html-content-item'>\n          <span>\u653E\u5927</span>\n          <img src='").concat(img$k, "' source-src='").concat(img$k, "'  hover-src='").concat(img$a, "'></img>\n        </div>\n        <div id='").concat(namespace, "-zoom-min' class='topbar-html-content-item topbar-html-mright'>\n          <span>\u7F29\u5C0F</span>\n          <img src='").concat(img$j, "' source-src='").concat(img$j, "'  hover-src='").concat(img$9, "'></img>\n        </div>\n        <div id='").concat(namespace, "-cursor-auto' class='topbar-html-content-item topbar-html-margin0'>\n          <span>\u9F20\u6807\u6837\u5F0F</span>\n          <img src='").concat(img$i, "' source-src='").concat(img$i, "'  hover-src='").concat(img$8, "'></img>\n        </div>\n        <div id='").concat(namespace, "-pointer-follow' class='topbar-html-content-item'>\n          <span>\u5341\u5B57\u7EBF</span>\n          <img src='").concat(img$h, "' source-src='").concat(img$h, "'  hover-src='").concat(img$7, "'></img>\n        </div>\n        <div id='").concat(namespace, "-bigtext' class='topbar-html-content-item topbar-html-mright'>\n          <span>\u5927\u5B57\u5E55</span>\n          <img src='").concat(img$g, "' source-src='").concat(img$g, "'  hover-src='").concat(img$6, "'></img>\n        </div>\n        <div id='").concat(namespace, "-pointeread' class='topbar-html-content-item topbar-html-mright'>\n          <span>\u6307\u8BFB</span>\n          <img src='").concat(img$f, "' source-src='").concat(img$f, "'  hover-src='").concat(img$5, "'></img>\n        </div>\n        <div id='").concat(namespace, "-close' class='topbar-html-content-item'>\n          <span>\u9000\u51FA\u670D\u52A1</span>\n          <img src='").concat(img$e, "' source-src='").concat(img$e, "'  hover-src='").concat(img$4, "'></img>\n        </div>\n      </div>");
  };

  var TopBar = {
    init: function init(core) {
      var namespace = core.config.namespace;
      this.namespace = namespace;
      core.creatStyle('topbar-style', styles$4);
      core.creatHtml('topbar-html', topBarHtml);
    },
    setEvents: function setEvents(core) {
      var _this = this;

      var namespace = core.config.namespace;
      var BtnClose = document.getElementById("".concat(namespace, "-close"));
      var BtnReset = document.getElementById("".concat(namespace, "-reset"));
      var HoverItem = document.getElementById("".concat(namespace, "-topbar-html-content"));

      BtnClose.onclick = function () {
        core.close();
      };

      BtnReset.onclick = function () {
        core.resetAction();
      };

      if (isFirefox()) {
        document.getElementById("".concat(namespace, "-zoom-out")).style.display = 'none';
        document.getElementById("".concat(namespace, "-zoom-min")).style.display = 'none';
      }

      [].forEach.call(HoverItem.children, function (el) {
        addEvent(el, 'mouseover', _this.mouseOver);
        addEvent(el, 'mouseout', _this.mouseOut);
      });
    },
    mouseOver: function mouseOver(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;

      if (target.tagName !== 'IMG') {
        return;
      }

      var __name = target.getAttribute('name');

      var __hover = target.getAttribute('hover-src');

      if (__name == 'audio') {
        if (cookie.get('audio', TopBar.namespace)) {
          target.src = __hover;
        } else {
          target.src = target.getAttribute('selected-hover-src');
        }
      } else if (__name == 'speed') {
        if (cookie.get('speed', TopBar.namespace) == 'fast') {
          target.src = target.getAttribute('selected-hover-src');
        } else {
          target.src = __hover;
        }
      } else {
        target.src = __hover;
      }
    },
    mouseOut: function mouseOut(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;

      if (target.tagName !== 'IMG') {
        return;
      }

      var __name = target.getAttribute('name');

      var __source = target.getAttribute('source-src');

      if (__name == 'audio') {
        if (cookie.get('audio', TopBar.namespace)) {
          target.src = __source;
        } else {
          target.src = target.getAttribute('selected-src');
        }
      } else if (__name == 'speed') {
        if (cookie.get('speed', TopBar.namespace) == 'fast') {
          target.src = target.getAttribute('selected-src');
        } else {
          target.src = __source;
        }
      } else {
        target.src = __source;
      }
    }
  };

  var audioTabText = {
    pointeread: '已开启指读模式',
    bigtextOpen: '大字幕已开启',
    bigtextClose: '大字幕已关闭',
    pointerFollowOpen: '十字线已开启',
    pointerFollowClose: '十字线已关闭',
    cursorAutoOpen: '大鼠标已开启',
    cursorAutoClose: '大鼠标已关闭',
    zoomOut: '页面已放大',
    zoomOutEnd: '页面已放到最大',
    zoomMin: '页面已缩小',
    zoomMinEnd: '页面已缩至最小',
    speedQuick: '语速已加快',
    speedMiddle: '语速已正常',
    audioOpen: '声音已开启',
    audioClose: '声音关闭',
    reset: '已重置'
  };
  var symbolsReg = new RegExp("[]");

  var styles$3 = ".bigtext-html {\n  z-index: 99999999999;\n  height: 150px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #505050;\n}\n.bigtext-html-content {\n  height: 100%;\n  background-color: #FFFFFF;\n  font-size: 53px;\n  color: #333 !important;\n  text-align: center;\n  font-weight: bold;\n}";

  var BigTextHtml$1 = function BigTextHtml(namespace) {
    return "<audio autoplay id='".concat(namespace, "-audio-media'>\n               <source src='' id='").concat(namespace, "-audio-source'>\n               <embed height=\"0\" width=\"0\"  src='' id='").concat(namespace, "-audio-embed'>\n        </audio>\n        ");
  };

  var Audio = {
    init: function init(core) {
      var _core$config = core.config,
          namespace = _core$config.namespace,
          url = _core$config.url;
      this.body = document.body;
      this.namespace = namespace;
      this.AudioApi = url;
      core.creatStyle('audio-style', styles$3);
      core.creatHtml('audio-html', BigTextHtml$1);
      this.isAudio = cookie.get('audio', namespace);
    },
    setEvents: function setEvents(core) {
      var namespace = core.config.namespace;
      this.registeDom(namespace);
      this.toggleAudio();

      if (this.isAudio) {
        this.addEventMove();
        addEvent(document, 'click', this.forceSafariPlayAudio); // 苹果浏览器需要用户跟浏览器有个交互才可以播放语音
      } else {
        this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src');
      }

      if (this.speed == 'fast') {
        this.speedTabImg.src = this.speedTabImg.getAttribute('selected-src');
      } else {
        this.speedTabImg.src = this.speedTabImg.getAttribute('source-src');
      }
    },
    registeDom: function registeDom(namespace) {
      this.audio = document.getElementById("".concat(namespace, "-audio-media")) || '';
      this.audioTab = document.getElementById("".concat(namespace, "-audio")) || '';
      this.audioTabImg = this.audioTab.getElementsByTagName('img')[0];
      this.speed = cookie.get('speed', namespace);
      this.speedTab = document.getElementById("".concat(namespace, "-audio-speed")) || '';
      this.speedTabImg = this.speedTab.getElementsByTagName('img')[0];
      this.pointeReadTab = document.getElementById("".concat(namespace, "-pointeread")) || '';
    },
    toggleAudio: function toggleAudio() {
      var _this = this;

      var namespace = Audio.namespace;

      this.audioTab.onclick = function () {
        if (_this.isAudio) {
          _this.closeAudio();
        } else {
          _this.showAudio();

          Audio.playAudio(audioTabText.audioOpen);
        }
      };

      this.speedTab.onclick = function () {
        if (_this.speed == 'middle') {
          _this.speed = 'fast';
          _this.speedTabImg.src = _this.speedTabImg.getAttribute('selected-src');
          Audio.playAudio(audioTabText.speedQuick);
        } else {
          _this.speed = 'middle';
          _this.speedTabImg.src = _this.speedTabImg.getAttribute('source-src');
          Audio.playAudio(audioTabText.speedMiddle);
        }

        cookie.set('speed', _this.speed, namespace);
      };

      this.pointeReadTab.onclick = function () {
        _this.showAudio();

        Audio.playAudio(audioTabText.pointeread);
      };
    },
    showAudio: function showAudio() {
      var namespace = Audio.namespace;
      this.isAudio = true;
      this.addEventMove();
      cookie.set('audio', true, namespace);
      this.audioTabImg.src = this.audioTabImg.getAttribute('source-src');
    },
    closeAudio: function closeAudio() {
      var namespace = Audio.namespace;
      this.isAudio = false;
      this.audio.pause();
      this.removeEventMove();
      cookie.set('audio', false, namespace);
      this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src');
    },
    addEventMove: function addEventMove() {
      addEvent(this.body, 'mouseover', this.mouseOver);
    },
    removeEventMove: function removeEventMove() {
      removeEvent(this.body, 'mouseover', this.mouseOver);
    },
    forceSafariPlayAudio: function forceSafariPlayAudio() {
      var audio = Audio.audio;
      audio.load();
      audio.play();
    },
    mouseOver: function mouseOver(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;

      var __text = parseTagText(target).replace(symbolsReg, '');

      var __parentNodeId = target.parentNode.id;

      var __isAssist = __parentNodeId.indexOf(Audio.namespace) > -1;

      if (__text == '' || trim(__text) == '文本' || __isAssist) {
        return;
      }

      Audio.playAudio(__text);
    },
    playAudio: function playAudio(text) {
      var namespace = Audio.namespace,
          AudioApi = Audio.AudioApi,
          isAudio = Audio.isAudio,
          audio = Audio.audio,
          speed = Audio.speed,
          forceSafariPlayAudio = Audio.forceSafariPlayAudio;

      if (!isAudio) {
        return;
      }

      var __speed = speed == 'middle' ? -150 : 0;

      var AudioParam = "speed=".concat(__speed, "&text=").concat(encodeURI(text));
      var AudioUrl = "".concat(AudioApi, "?").concat(AudioParam);
      audio.src = AudioUrl;
      document.getElementById("".concat(namespace, "-audio-source")).src = AudioUrl;
      document.getElementById("".concat(namespace, "-audio-embed")).src = AudioUrl;
      var playPromise = audio.play();

      if (playPromise) {
        playPromise.then(function (_) {
          // audio.pause();
          removeEvent(document, 'click', forceSafariPlayAudio);
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    reset: function reset() {
      var namespace = Audio.namespace;
      this.closeAudio();
      this.speedTabImg.src = this.speedTabImg.getAttribute('source-src');
      this.speed = 'middle';
      cookie.set('speed', 'middle', namespace);
    }
  };

  // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue
  var thisNumberValue = function (value) {
    if (typeof value != 'number' && classofRaw$1(value) != 'Number') {
      throw TypeError('Incorrect invocation');
    }
    return +value;
  };

  // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  var stringRepeat = function repeat(count) {
    var str = String(requireObjectCoercible$1(this));
    var result = '';
    var n = toInteger$1(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
    for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };

  var nativeToFixed = 1.0.toFixed;
  var floor = Math.floor;

  var pow = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function (x) {
    var n = 0;
    var x2 = x;
    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }
    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    } return n;
  };

  var multiply = function (data, n, c) {
    var index = -1;
    var c2 = c;
    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor(c2 / 1e7);
    }
  };

  var divide = function (data, n) {
    var index = 6;
    var c = 0;
    while (--index >= 0) {
      c += data[index];
      data[index] = floor(c / n);
      c = (c % n) * 1e7;
    }
  };

  var dataToString = function (data) {
    var index = 6;
    var s = '';
    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = String(data[index]);
        s = s === '' ? t : s + stringRepeat.call('0', 7 - t.length) + t;
      }
    } return s;
  };

  var FORCED = nativeToFixed && (
    0.00008.toFixed(3) !== '0.000' ||
    0.9.toFixed(0) !== '1' ||
    1.255.toFixed(2) !== '1.25' ||
    1000000000000000128.0.toFixed(0) !== '1000000000000000128'
  ) || !fails$1(function () {
    // V8 ~ Android 4.3-
    nativeToFixed.call({});
  });

  // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed
  _export$1({ target: 'Number', proto: true, forced: FORCED }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue(this);
      var fractDigits = toInteger$1(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k;

      if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
      // eslint-disable-next-line no-self-compare -- NaN check
      if (number != number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return String(number);
      if (number < 0) {
        sign = '-';
        number = -number;
      }
      if (number > 1e-21) {
        e = log(number * pow(2, 69, 1)) - 69;
        z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;
          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }
          multiply(data, pow(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }
          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + stringRepeat.call('0', fractDigits);
        }
      }
      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits
          ? '0.' + stringRepeat.call('0', fractDigits - k) + result
          : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
      } else {
        result = sign + result;
      } return result;
    }
  });

  var ZoomPage = {
    init: function init(core) {
      var namespace = core.config.namespace;
      this.size = cookie.get('zomm', namespace) || 1.0;
      this.ignore = ['LINK', 'SCRIPT'];
      this.namespace = namespace;
      this.set();
    },
    setEvents: function setEvents(core) {
      var _this = this;

      var namespace = core.config.namespace;

      document.getElementById("".concat(namespace, "-zoom-out")).onclick = function () {
        _this.zoomOut(core);
      };

      document.getElementById("".concat(namespace, "-zoom-min")).onclick = function () {
        _this.zoomMin(core);
      };

      addEvent(window, 'DOMContentLoaded', function () {
        _this.updateZoomState(core);
      });
    },
    updateZoomState: function updateZoomState(core) {
      var message = core.message;
      message.publish('zoomState', this.size);
    },
    zoomOut: function zoomOut(core) {
      if (this.size >= 1.3) {
        console.log('已最大');
        Audio.playAudio(audioTabText.zoomOutEnd);
        this.updateZoomState(core);
        return;
      }

      this.size = parseFloat((this.size + 0.1).toFixed(10));
      this.updateZoomState(core);
      this.set();
      Audio.playAudio(audioTabText.zoomOut);
    },
    zoomMin: function zoomMin(core) {
      if (this.size <= 1.0) {
        console.log('已最小');
        Audio.playAudio(audioTabText.zoomMinEnd);
        this.updateZoomState(core);
        return;
      }

      this.size = parseFloat((this.size - 0.1).toFixed(10));
      this.updateZoomState(core);
      this.set();
      Audio.playAudio(audioTabText.zoomMin);
    },
    set: function set() {
      var _this2 = this;

      [].forEach.call(document.body.children, function (el) {
        var __el = el.tagName.toUpperCase();

        if (_this2.ignore.indexOf(__el) > -1 || el.id == _this2.namespace) {
          return;
        }

        el.style.zoom = _this2.size; //  el.style.transform = `scale(${this.size})`
        //el.style.transformOrigin = '0px 0px'
      });
      cookie.set('zomm', this.size, this.namespace);
    },
    reset: function reset() {
      this.size = 1.0;
      this.set();
    }
  };

  var styles$2 = ".pointer-follow-html-x, .pointer-follow-html-y {\n  z-index: 99999999999;\n  transform: none;\n  transform-origin: 0px 0px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #ff0000 !important;\n  width: 100%;\n  height: 4px;\n}\n.pointer-follow-html-y {\n  height: 100%;\n  width: 4px;\n}";

  var PointerFllowHtml = function PointerFllowHtml() {
    return "<div class='pointer-follow-html'>\n        <div  class=\"pointer-follow-html-x\" id=\"pointer-follow-html-x\"></div>\n        <div class=\"pointer-follow-html-y\" id=\"pointer-follow-html-y\"></div>\n      </div>";
  };

  var PointerFllow = {
    init: function init(core) {
      core.config.namespace;
      this.body = document.body;
      core.creatStyle('pointer-follow-style', styles$2);
      core.creatHtml('pointer-follow-html', PointerFllowHtml);
    },
    setEvents: function setEvents(core) {
      var namespace = core.config.namespace;

      if (cookie.get('pointer', namespace)) {
        this.show(core);
      }

      this.togglePointer(core, namespace);
    },
    addEventMove: function addEventMove() {
      addEvent(this.body, 'mousemove', this.mouseMove);
    },
    removeEventMove: function removeEventMove() {
      removeEvent(this.body, 'mousemove', this.mouseMove);
    },
    togglePointer: function togglePointer(core, namespace) {
      var _this = this;

      var tabBarBtn = document.getElementById("".concat(namespace, "-pointer-follow"));
      var activeBtn = document.getElementById("".concat(namespace, "-pointer-follow-html"));

      tabBarBtn.onclick = function () {
        if (activeBtn.style.display == 'block') {
          _this.reset(core);

          Audio.playAudio(audioTabText.pointerFollowClose);
        } else {
          _this.show(core);

          Audio.playAudio(audioTabText.pointerFollowOpen);
        }
      };
    },
    mouseMove: function mouseMove(event) {
      var event = window.event || event;
      var pointerX = document.getElementById("pointer-follow-html-x"),
          pointerY = document.getElementById("pointer-follow-html-y");
      pointerX.style.top = event.clientY - 10 + "px";
      pointerY.style.left = event.clientX - 10 + "px";
    },
    show: function show(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-pointer-follow-html"));
      activeBtn.style.display = 'block';
      this.addEventMove();
      cookie.set('pointer', true, namespace);
    },
    reset: function reset(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-pointer-follow-html"));
      activeBtn.style.display = 'none';
      this.removeEventMove();
      cookie.set('pointer', false, namespace);
    }
  };

  var styles$1 = "* {\n  cursor: url(\"http://s.qunarzz.com/common/assist/allaw.cur\"), auto !important;\n}\n\na {\n  cursor: url(\"http://s.qunarzz.com/common/assist/linkaw.cur\"), auto !important;\n}";

  var CursorAuto = {
    init: function init(core) {
      core.config.namespace;
    },
    setEvents: function setEvents(core) {
      var namespace = core.config.namespace;

      if (cookie.get('cursor', namespace)) {
        core.creatStyle('cursor-auto-style', styles$1, true);
      }

      var tabBarBtn = document.getElementById("".concat(namespace, "-cursor-auto"));

      tabBarBtn.onclick = function () {
        var activeBtn = document.getElementById("".concat(namespace, "-cursor-auto-style"));

        if (activeBtn) {
          removeNode(activeBtn);
          cookie.set('cursor', false, namespace);
          Audio.playAudio(audioTabText.cursorAutoClose);
        } else {
          cookie.set('cursor', true, namespace);
          core.creatStyle('cursor-auto-style', styles$1, true);
          Audio.playAudio(audioTabText.cursorAutoOpen);
        }
      };
    },
    reset: function reset(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-cursor-auto-style"));
      activeBtn && removeNode(activeBtn);
    }
  };

  var styles = ".bigtext-html {\n  z-index: 99999999999;\n  height: 150px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #797F8D;\n  background-color: #FFFFFF;\n}\n.bigtext-html-content {\n  height: 100%;\n  background-color: #FFFFFF;\n  font-size: 53px;\n  color: #333 !important;\n  text-align: center;\n  font-weight: bold;\n  width: 93%;\n  margin: 0 auto;\n}\n.bigtext-html-btn {\n  width: 20px;\n  height: 20px;\n  background-color: red;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  border-radius: 10px;\n  color: #FFFFFF;\n  cursor: pointer;\n}\n.bigtext-html-bone {\n  width: 100%;\n  height: 151px;\n}";

  var BigTextHtml = function BigTextHtml(namespace) {
    return "<div id='".concat(namespace, "-bigtext-html' class='bigtext-html'>\n           <div id='").concat(namespace, "-bigtext-content' class='bigtext-html-content'></div>\n           <div class='bigtext-html-btn' id='").concat(namespace, "-bigtext-close'>\n              <i class='bigtext-html-close' role='button' title='\u5173\u95ED\u5927\u5B57\u5E55\u6A21\u5F0F'>X</i>\n           </div>\n        </div>");
  };

  var BigTextBone = function BigTextBone() {
    return "<div class='bigtext-html-bone'></div>";
  };

  var BigText = {
    init: function init(core) {
      var namespace = core.config.namespace;
      this.body = document.body;
      this.namespace = namespace;
      core.creatStyle('bigtext-style', styles);
      core.creatHtml('bigtext-html', BigTextHtml);
      core.creatHtml('bigtext-bone', BigTextBone);
    },
    setEvents: function setEvents(core) {
      var _this = this;

      var namespace = core.config.namespace;
      addEvent(window, 'DOMContentLoaded', function () {
        if (cookie.get('bigtext', namespace)) {
          _this.show(core);
        }
      });
      this.toggleBigText(core, namespace);
    },
    addEventMove: function addEventMove() {
      addEvent(this.body, 'mouseover', this.mouseOver);
    },
    removeEventMove: function removeEventMove() {
      removeEvent(this.body, 'mouseover', this.mouseOver);
    },
    toggleBigText: function toggleBigText(core, namespace) {
      var _this2 = this;

      var tabBarBtn = document.getElementById("".concat(namespace, "-bigtext"));
      var tabBarBtnClose = document.getElementById("".concat(namespace, "-bigtext-close"));

      tabBarBtn.onclick = function () {
        var activeBtn = document.getElementById("".concat(namespace, "-bigtext-html"));

        if (activeBtn.style.display == 'block') {
          _this2.reset(core);

          Audio.playAudio(audioTabText.bigtextClose);
        } else {
          _this2.show(core);

          Audio.playAudio(audioTabText.bigtextOpen);
        }
      };

      tabBarBtnClose.onclick = function () {
        _this2.reset(core);

        Audio.playAudio(audioTabText.bigtextClose);
      };
    },
    mouseOver: function mouseOver(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;
      var namespace = BigText.namespace;
      var __parentNodeId = target.parentNode.id;

      var __isAssist = __parentNodeId.indexOf(namespace) > -1;

      var activeBtn = document.getElementById("".concat(namespace, "-bigtext-content"));
      activeBtn.innerText = parseTagText(target).replace(symbolsReg, '');

      if (__isAssist || activeBtn.innerText == '文本') {
        activeBtn.innerText = '';
        return;
      }
    },
    show: function show(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-bigtext-html"));
      var tabBar = document.getElementById("".concat(namespace, "-bigtext-bone"));
      activeBtn.style.display = 'block';
      tabBar.style.display = 'block';
      this.addEventMove();
      cookie.set('bigtext', true, namespace);
      core.message.publish('bigTextState', true);
    },
    reset: function reset(core) {
      var namespace = core.config.namespace;
      var activeBtn = document.getElementById("".concat(namespace, "-bigtext-html"));
      var tabBar = document.getElementById("".concat(namespace, "-bigtext-bone"));
      activeBtn.style.display = 'none';
      tabBar.style.display = 'none';
      this.removeEventMove();
      cookie.set('bigtext', false, namespace);
      core.message.publish('bigTextState', false);
    }
  };

  var InitModules = [TopBar, Audio, ZoomPage, PointerFllow, CursorAuto, BigText];

  var Assist = /*#__PURE__*/function (_Base) {
    _inherits$1(Assist, _Base);

    var _super = _createSuper$1(Assist);

    function Assist() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck$1(this, Assist);

      _this = _super.call(this, opts); // 合并参数

      _this.mergeConfig(opts); // 初始化插件


      _this.init();

      _this.isShow();

      _this.resetAction = _this.reset;
      return _this;
    }

    _createClass$1(Assist, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        // 初始化dom
        InitModules.map(function (item) {
          return _this2.use(item);
        });
        this.registeStyle();
        this.registeHtml(); // 初始化事件

        InitModules.map(function (item) {
          return _this2.useEvent(item);
        }); // 格式化大段文本

        this.formatLongText();
      }
    }, {
      key: "reset",
      value: function reset() {
        Audio.reset();
        ZoomPage.reset();
        CursorAuto.reset(this);
        PointerFllow.reset(this);
        BigText.reset(this);
      }
    }]);

    return Assist;
  }(Base);

  var QunarAssist = new Assist({
    namespace: 'qunar-assist',
    url: '//eventbus.qunar.com/voice/byte'
  });

  return QunarAssist;

})));
