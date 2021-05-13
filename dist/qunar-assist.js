(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

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
    if (typeof Proxy === "function") return true;

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
    if (call && (typeof call === "object" || typeof call === "function")) {
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
  }

  function createCommonjsModule(fn, basedir, module) {
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

  var js_cookie = createCommonjsModule(function (module, exports) {
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

  const cookie = {
    set: (key, value, namespace) => {
      let memory = {
        show: false,
        // 是否展示无障碍
        audio: false,
        // 是否开启声音
        speed: 'slow',
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
    get: (key, namespace) => {
      let __key = '';

      if (js_cookie.get(namespace)) {
        __key = JSON.parse(js_cookie.get(namespace))[key];
      }

      return __key;
    },
    remove: namespace => {
      js_cookie.remove(namespace, {
        domain: '.qunar.com'
      });
    }
  };

  const addEvent = (element, type, callback) => {
    if (element.addEventListener) {
      element.addEventListener(type, callback, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, callback);
    } else {
      element['on' + type] = callback;
    }
  };

  const removeEvent = (element, type, callback) => {
    if (element.removeEventListener) {
      element.removeEventListener(type, callback);
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, callback);
    } else {
      element['on' + type] = null;
    }
  };

  const parseTagText = target => {
    if (target.children.length === 0) {
      if (target.role === 'A' || target.tagName === 'A') {
        console.log('这是一个链接:' + target.alt || target.title || target.innerText);
        return `链接 ${target.alt || target.title || target.innerText}`;
      }

      if (target.role === 'IMG' || target.tagName === 'IMG') {
        console.log('这是一张图片:' + target.alt || target.title);
        return `图片 ${target.alt || target.title}`;
      }

      if (target.role === 'BUTTON' || target.tagName === 'BUTTON') {
        console.log('这是一个按钮:' + target.innerText);
        return `按钮 ${target.alt || target.title || target.innerText}`;
      }

      if (target.role === 'INPUT' || target.tagName === 'INPUT') {
        if (target.type == 'radio') {
          console.log('这是一个单选框:' + target);
          return `单选框 ${target.alt || target.title || target.value}`;
        } else if (target.type == 'checkbox') {
          console.log('这是一个复选框:' + target.alt || target.title || target.value);
          return `复选框 ${target.alt || target.title || target.value}`;
        }

        console.log('这是一个输入框:' + target.alt || target.title || target.value);
        return `输入框 ${target.alt || target.title || target.value}`;
      }

      if (target.alt || target.title || target.innerText) {
        console.log(`文本 ${target.innerText}`);
        return `文本 ${target.innerText || target.alt || target.title}`;
      }

      return '';
    } else {
      return '';
    }
  };

  let Base = /*#__PURE__*/function () {
    function Base() {
      _classCallCheck(this, Base);

      this.config = {
        namespace: 'mozi-assist',
        url: ''
      };
      this.registeOpen();
    }

    _createClass(Base, [{
      key: "mergeConfig",
      value: function mergeConfig(opts) {
        this.config = _objectSpread2(_objectSpread2({}, this.config), opts);
        this.creatContainer();
      }
    }, {
      key: "use",
      value: function use(plugin, ...args) {
        plugin.init(this, ...args);
      }
    }, {
      key: "creatContainer",
      value: function creatContainer() {
        const {
          namespace
        } = this.config;

        if (document.getElementById(namespace)) {
          return;
        }

        const Container = document.createElement("div");
        Container.id = namespace;
        document.body.appendChild(Container);
      }
    }, {
      key: "registeOpen",
      value: function registeOpen() {
        if (document.getElementById('assist-open')) {
          document.getElementById('assist-open').onclick = () => {
            this.isShowTopBar(true);
          };
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.isShowTopBar(false);
      }
    }, {
      key: "isShowTopBar",
      value: function isShowTopBar(isShow) {
        const {
          namespace
        } = this.config;
        const activeBtn = document.getElementById(`${namespace}-topbar-html`);

        if (isShow) {
          document.body.style.marginTop = '100px';
          activeBtn.style.display = 'block';
          cookie.set('show', true, namespace);
          this.hideModules();
        } else {
          document.body.style = 'none';
          activeBtn.style.display = 'none';
          cookie.remove(namespace);
          location.reload();
        }
      }
    }, {
      key: "hideModules",
      value: function hideModules() {
        const {
          namespace
        } = this.config;
        const classList = document.getElementsByClassName(`${namespace}-hide`);

        for (let i = 0; i < classList.length; i++) {
          classList[i].style.display = 'none';
        }
      }
    }, {
      key: "creatStyle",
      value: function creatStyle(id, css) {
        const {
          namespace
        } = this.config;
        let styleNode = document.createElement('style');
        styleNode.type = 'text/css';
        styleNode.id = `${namespace}-${id}`;
        styleNode.className = id;

        if (styleNode.styleSheet) {
          styleNode.styleSheet.cssText = css;
        } else {
          styleNode.innerHTML = css;
        }

        document.getElementsByTagName('head')[0].appendChild(styleNode);
      }
    }, {
      key: "creatHtml",
      value: function creatHtml(id, htmlFn) {
        const {
          namespace
        } = this.config;
        const DomContainer = document.createElement("div");
        DomContainer.id = `${namespace}-${id}`;
        DomContainer.className = id;
        DomContainer.style.display = 'none';

        if (typeof htmlFn !== 'function') {
          console.error('htmlFn不是一个函数');
          return;
        }

        const __html = htmlFn(namespace);

        DomContainer.innerHTML = __html;
        document.getElementById(namespace).appendChild(DomContainer);
      }
    }]);

    return Base;
  }();

  var styles$3 = ".topbar-html {\n  width: 100%;\n  background: #797F8D;\n  overflow: hidden;\n  z-index: 2147483645;\n  position: fixed;\n  top: 0;\n  box-shadow: 0 0 10px 2px #999;\n  left: 0;\n  right: 0;\n}\n.topbar-html-mright {\n  margin-right: 50px !important;\n}\n.topbar-html-margin0 {\n  margin: 0 !important;\n}\n.topbar-html-content {\n  width: 1080px;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n.topbar-html-content-item {\n  margin: 0 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.topbar-html-content-item span {\n  height: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: PingFangSC-Medium;\n}\n.topbar-html-content-item img {\n  height: 52px;\n  width: 52px;\n  border-radius: 5px;\n  display: block;\n  background-color: #FFFFFF;\n}";

  var img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAkFBMVEUAAAD///////////////////////////////////////8zMzM5OTk8PDz8/PxcXFzu7u6zs7NHR0diYmJBQUG3t7eqqqqkpKSBgYHQ0NC+vr5MTEybm5v5+fnz8/Po6OjV1dWfn590dHRPT0/h4eHd3d3b29vLy8vFxcWvr6+WlpaHh4dmZmZXV1dubm6MjIwpqEHtAAAACnRSTlMAvfPZlHYzJgQRpdOjTAAAA69JREFUaN7t2mlTpDAQBuAZj1WbTkBuGOa+D/X//7sdDTHRWbTTzqRqq3w/7g4+SRMghPR07m7711dw1lxd92/veh/zpw8XSv+PxdzfwAVzc6+dhz5cNP2Htj9Uhy+pPt3AxXPzNg7AQ15HRB88pH+8fsBL7nq34CW3PiqnancNXnLduwIvueqBp/xCvxAbitZ1Pp0WeVZFoHNuSE6aUGAqMAgQhRCY7Cp5fmhSiiPxKUKU1VkhmQ2EDdjWPJNng7JYMR1UXJ8HWoSa6aTCFbQZzuIw50HNyZlBPP2nQtVvFLxmxoCig7CbjiLcN3meF2WSorClcATHlKoJE2doEaPVkdljZLehfrYsHIwBIFTtyVyhpbBG8k4rJsOtNRrTJcCT+u2jIzS22vvYMYg3ZkRixITG5k+UEroiC1PdMQsaxZpJ1/BVVnNNzTmQTNAMKJXvf4oMqBDakQBUiQEt9aHJEAiZtc1yh0LdH+UQ+sSD6raFT5KgRKvVapKyIBm3HVp9Y6j7WyqOQQ6UCXVEQSja4B1gQHN1REwo3Cb9AVS1HdrA95niD6BSHTAAQtbBKVQRIdl2aAuUnJwjpD34TOWQeAm9xGgnLoEK7VTZn4EZMpSoytVACx9C/RwjhQ9F6hSlQAsfqhR0AFr4UKagEjipy3JDhXJ1jgqOk7/NMIiQmm1g7miYeRNuaNA0YEO1auP0spApRkGDtuocNQzohX73No/xPQOaKaimQZV6lCUMKFGXekWDImTfGUTnzatH+Dk9i3YCCUQo1KfUNbmCDiTIvE3OnKHn4C0NFZowazdEPWVwmzPgzhEqWkiC4yxISCdHtjM86pzB1E5kTlDdHlVRITOFGtC7ZObGc9Chz71x7wC9oCmD+9vEmuxMUM/X6ZDpUpCOiI6cB9YNlfPGJ2mXUNh2KARHaIF0yX5bXrpC0Aj627IMtVOAMwQHcp9G4XujJAOK3ldO5qsvnXWKgUo8AgYEC2Gv+3VF7jUTiDGwIFha66abDiYbWGtOwIRgLAw12A5Pq7sT1i+W4AwZyWqvwOc6spXHGZr/xXgBP4BglHxcU02TssjzvNl/WlMVhwh+BIEsSKvEDQATMlkS1r0XwIbs1N+s5GcA54FAZnPRxQyo3yaIqf7xtQWFKCcAQIXIVpMgHjl8JVIUYTNx/X5ET1RleTGdbut193D+v77x/UL+IW/bDLxtnPC2FcTb5hZv23V8bUDytqXK1yYxb9vefG3k87U10etmS2/bR/8CfLm94E4nnEwAAAAASUVORK5CYII=";

  var img$7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAjVBMVEUAAAD///////////////////////8zMzM4ODg+Pj719fWoqKg7OztGRkbg4OD39/d1dXVbW1vIyMj7+/tMTEzj4+OUlJSCgoJCQkLo6Oi9vb1RUVHs7Ozb29vX19fw8PDAwMC6urpwcHC0tLRVVVWlpaVpaWnQ0NCurq6enp6ZmZmLi4uIiIh7e3thYWGg660bAAAABnRSTlMA+uWnfzGozdCBAAADiklEQVRo3u3a7XKqMBAGYK3HJeFEUEHRgqj41dqP+7+805MNs5lhILF2memM758iJTwG1hDbDL4yHj0NgS3Dp9F4oPOHSyHrj3agh3xJ4yH0kOF4MIJeMho8QS95GgyhlwwH0FMe0AN6QA/ot0FRNhFikm3sfQxQnIlAR2S0kwGKP1VQJwcMBxTPyKE+3Q81HYGGkUoA4ICMQ/kA4IDC2hHvH7ghgQEiR80BKtzkgKg/ewD4K/Rm/PNQeCSHoPDHIXKegQdqOjxQ02mH4u29UJgbR2mnBXoXIp3fBW0bDkG2g5XvgDz70w4lASb6LhRfUro/HRDUR0U3QcXhnEqhowKM2EEnVBlpsvWHinc8PYacTig0PRdnb+giReBwCKKsV3QrvaBLkwkUOU2oWOO+SJoxPfSCyiYj5BxaoXAmRBCjZC7e0gcKJw1FZGtoh7ACCr33VWH/Qw/opMz502ypc9phsxZojUfn+qB4hdDVDQ0n2LDxwWuDFhIbvOndzwo76IY2eKTcgieU5PTY/conNr84oZOgVl5Q3aUg1fv3+CpzQssAT+APQWkuwou+SwKvnROa0nFekN5GaaZ/ccZ3WnBAiSkgfV8PUndvxwHVJz/ozyH+4pUF2uKNqfQLrIYpCwQzukm0zQFVpsCpGnIe6A2rwT4DD7S0oA8+iFrRpUv5i+GTsRhCu7zxSXFmgXAkVfZgt2SBcmt8m9Mo0Q5RoSa3QAccVI9W0cmN3/NIljdAG4nnPlkjkAIXNDet/KGinqEmVvvKCSWmWZV4QkmAkThtzPDF3glBhpJI33ZznXLbCRXoiJl+ZxtsrWI3VKjARJqI4z5ph9bKntrPUM3ADcFLLVHkcd0KwVEfsrBnWyJyQ3Tx7IhV1AptAylX+EZi80yfghsyE9tGZNQGQVKWMX01pA65Idil0iERRElm6KgluCDKoRKirgWSuqHKXIg0dkN2wmjzP/NXkjqhq7kKqvzut/JIktQBTQLMHr4LwYKkDggPEidwQDf2qQlNqRDckL/UhMJASXUFF+QvtZf3fL8AN+Qvcf0ZrVkRPBBJK5J4oKa0BrgilDBAtrQ74IYCDsiWBP48AzBAWhKGoqkBA6QlG8rxFt0Luftkao4FgnWuUJEpTSQ4IIhfUiWlSk8x7WOAdIqybPTmN/979AE9oF8C9bWkqrdFYr0te+ttIV9fSxP7W2zZ2/LRf1C1IJ35WNi4AAAAAElFTkSuQmCC";

  var img$6 = "data:image/png;base64,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";

  var img$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAmVBMVEX8/PwAAAD///////////////////8zMzM3Nzfg4OBERERRUVE+Pj6kpKTn5+fi4uKFhYVubm5YWFj4+Pj09PTAwMCbm5vs7OzZ2dmSkpKKiopNTU1BQUFra2vw8PDPz8+ysrKvr6/FxcWOjo54eHhiYmLLy8u4uLhwcHBmZmY7OzvS0tKVlZWAgIB9fX10dHSqqqpJSUleXl4uaMzTAAAABnRSTlP+AOWnfzGF0eAUAAAD5UlEQVRo3u3a2XqqMBAAYLpNIhakrCog7vtW3//hjoeJRhrwZNTynQvnplVC/jAJCWkxXl5ePt5e4Rfj9e3jiByhdwN+OYz3v9A71BDvL8aHATXEkXmDWuLNeIVa4tWAmuIJPaEn9ITuhFqB5YzTw2K+7fRXPn73cKg3GCeMcc6OgT/ddfZ4KJgzJC6Ds+/QfiRk9GPBlFib1sOgYVxGSKrrPwSKdsV6MQpfJbMHQG2TS4OZ6cgazPr7cOvyy2yO7oYCzs8pSgeXPe9NO+bZ4ql/HxSer2YZRurh6eR8PG7dA41lh/cqBkrzVOQzux0anTKzu9LcfiJKfbZuhfpMhAXXwnZR4k3/NijjoneGcD28ncje102QnYhebuBnnTHTuQXChPBEazJbCymgQ3uRuBVoxRyLmx4VipbYxD7ohd/EBHSoUBfPG4Fu2J+YgYgGRZiJpCwTQycsG8eWaBoN6uBZg7IKj98zo6Sib7ykHgUycGjHZSs6r2r3DKE9BRpWD9ZG3hdp6Q2Rn+RSoHGeuSZUQl9QeUmsQYDyynhIhLxlfpqlD7WxaTYRgk2eiLk+hCP1G6jQLD9vqQ1hy7hDhiKRCW3IxZuIDIGZQ0NtCGeTjA5NcDToQgZmoDBrBYemCJycTp++Cnly8pyvdaEeQp4yPErD/zlz8a4uZGMNSvKVUBaGMG/P5g6IVUdXhYipuzyyqIYyNXXEwVCY77fnTloWtxKBslzyji4EWGn7R0EMMXuLT15xZUxpwxuaefkZ/T7CtS/QhnY4nMiQL9YJbQgHj0uGhthvhjY0FbciFcJNwQS0IQNHQ58KmbheakLytplQIJmIFQESG5Y2DZqL9ZIA+fhYt4CqacMBNVY4FNb6kJwIpqCGW3WtBzzHJkFtVv2M1o1Lt0wBXtCY+JA/lwNPL7xY9CsFkpfE27rQjosLIkLQFTurSM8JRcNsMuSLLazr6TiB3L/TIHn78bmGNOVM3g9UCPZCcu1/OZYomUQ3QeCIdpqrq4zhMAFlcBtkTLioYX+lVANLyQ6iQ9CLT1IcVBSJHPmnNLN1KwT+gjMRh6zseMixgJToEEZXPu80rWI93nAsGFWiQzBgTFrm1grarchuZIPOhDPJmIpEhiAzL7PDi7+I3y3DUSQyBN4aa62Myd/KpUSGZLS2rIrizJ1hISnRIRl29zO3FGaHN7MikSFZLhgnxZ5hy9TC2UmRaJAajcEojRN+rMpNN5ZcqhTJJkDkQEmdxQkQSVK3pQSILHHl+8dCKKnPdr8CwcB1lfXi//2v5RN6Qk/oCT02antJrLbX3mp7ka+uVxPre9myttdH/wB03iKbr43v3gAAAABJRU5ErkJggg==";

  var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAllBMVEUAAAD///////////////////////8zMzM2NjY4ODj7+/tSUlLi4uJERESTk5OFhYX4+Pjn5+fAwMCkpKRYWFhBQUH09PSbm5vs7Ox2dnbZ2dlra2tiYmJNTU08PDzPz8+ysrKvr6+pqamJiYmOjo5/f3/w8PDLy8t7e3twcHDT09PGxsbk5ORmZmZeXl5JSUm3t7e6urrPoq9IAAAABnRSTlMA+uWnfzGozdCBAAADxklEQVRo3u3a7XaaQBCAYZM0M7sIyJcIgkHFbxOT3P/NNd3ZIoRod4zh9IfvjzanUR9YB8RTeh89PtzDD3b/8NhT/bqDH+7ul3Kggz6kxzvooLvH3gN00kPvHjrpvgcddYNu0A26Qd+E7CAcpNkh3y7d6S4GRgxoNUuHiFLgR/R35BbXh4ItElFP4uvIvyZkTSfEtBO4tK8G7SdtoE6V8VWgJG0ul5RCSNmghu9XgMaOrF5QoJMtwtnbdD7aRAJr2sL6LhRIUS1RNnuGY97adbD6ZRZ/DxpVe/M0SqDVOq9WdGJ/A7LSao7L1Yk97ldbUlwOLQRSqX1m9If6UcPnS6Ep6kI4lx+RJPrxZVAh9Jrs4Xxe+nciLoL8IT1bv8tGM+NeAkWSDkYfDHK1FPChuV64HRi1pYc7HhdKnlA1BbPivpKEy4VKWrgFmObTlomEByWSDg0PjAsFbRoPcmmHZmCe9UonkRUHsmi0JxYweqO1m3OgfTWsnCL1pIgDpULtEPB6R5XNgNQEiRET8tTT5NwcGqPKB2ZLtRBbcyhUM/cK3N4U9GQM0ZaJARtK9EoYQ5E+iNg5CtobQ3Q2KfhQTtNgClmoSqBWcOh/Wdb4/B6IP5BrCq0I8pofGqeKP5+5ZGkK+ahqLX6r1gfDSI3r0hR6bkN4urINMZfOgmMvp6Hi89KJkjkMq/o/bY5X4PQHJZon3pI3DEAvOv7Ef5XnQb1MjXdoDPXVxr4BO/rsC4yhFGkFuMWoso0hGp6IDe2VIyxjaF0dirwWagNzMIYsGqrpRedUOTKH9GGTMx29EDsGNMXmgHMui1+BAcV0WffCcnb63MeBQJ8I1hzoQO/sMwsaI3InPKAdSoEFwZY7eN5Ev69MSO+SNJ6HlE62G2BCUOpvVomZM9Ib5rOhWH+FjTyzN4gKgQtVh5/YGkhridXxwIZgrqXIB+qfjxwmfIgunuj5zu4sYw1QQwVcBlm51K8wt+Bkdi6abxAfgtVEaGkSwNclA5TaEY59KQTxi0Ddofjq9yNJD2hKfAis8njx0w+br+PtN8Q0JT5EzRCPlrMJg7Gd+HYxc3OBR8ZpSWwICqe+OrL5g/45tAYtiQ2B5wqB58ptAGhIfIiylyhPIAKjdwBoSXyI8hdDFG1GYroDqiXxIcoKNh+WqCNPWegDZSARZJY9W2SToUTpRNkyHFtAtSWfBfGrpByOMSCW1P5ayoDYkoR6DIglta/tfgSC2SEK4VP/7/9a3qAbdINu0HXr7Caxzm576+xGvq5uTezuZsvObh/9DX0gIQxCgyCMAAAAAElFTkSuQmCC";

  var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAmVBMVEUAAAD///////////////////////8zMzM5OTnT09M/Pz/7+/tGRkY1NTXv7+9OTk7c3Nx6enpYWFjo6OjFxcVfX1/39/fW1tbMzMy7u7usrKyNjY1oaGhTU1Pz8/Pk5OTQ0NC3t7eysrJzc3NKSkqjo6OdnZ2Tk5OAgIDr6+vg4OCXl5dvb29ra2tjY2O+vr6Dg4Onp6eJiYmMMDgYAAAABnRSTlMA+uWnfzGozdCBAAAC8UlEQVRo3u3ay3LiMBAFUAzhCmxjg23wA8wbwpsk//9xk4nUyC6YmgVqVRbcDVBenFJJ5W4JNb7TbjUdsMVpttqNn7zxKWS9/TiwkG+p7cBCnHajBStpNZqwkmbDgZU4DVjKC3pBL8gKNN+8LwPUwwDtT+I7boFKOCAvEjIfHigs0FZQTiNQOKCJuGVIE8UCuUInPECGA+qIStw5KEwQcZ0cFB4op7XX+wTACHWnt0UxBjgheAOSBiNWCHgn6RLwQih6SipjXggJLT4/5YWQ+kpyE14Is5CW+ZIXQjAUKkdeCKMVSTuPFQK+SDpPeSFsSIr2vBByWubrPi+EzKVlnvFC6K+pbix4IewjobLhhTA9k/TFC8HbkbQasULAUbdHvBCWVDfCGS+ExKW60eWFdN3oJLwQ4pLqRsELIbgIlXdeqNoeeawQMCZpMuWF8EnLPIp5IVx13eCFMHf1foMVwiFUkr/nhXR7NOCEnOAwX7hqSKahuJ/lxXa8Ow1DSVBGhqFI3IVnRPk/oA9j0MKTn+XjAQWmoI1YqrL3yIn6MARthQgd+TZdV4WeH11W48SDCYj6BNXLFZKYLJI0nhqtsLSPLdXGwpez4plvt6ggXGvdfmEa0huWoRqSK3sgzzC0E7cktTO2pVHIGQidi+qL5ZBKhpMTSlZdHCI3B3krqmyybJ9VcZCPI2NQdiYnVSNLa+swMQXd6mcffbWFUMVCPh+agrQDnOR39VL7oDkzCa0PANCtleyZnLPJ01CknXBWPTjuqV9qzrrPQjvtxJDJqhWO5uz0LDTrKKfcgzKUQ1LwiubsOQiLzt2xY1I7XU3lr+2zEGa70p8UDyauE1S71PNz0OPkekeUU+O4YoCoMXHjz1BQjhwQNSY9cYsbsEBeSAA5V7BAKOrO5ACAAar3Wr1BChkGCHOaH3ccg8IB4er/ZdabKXRYIIwWx23m4T6//w/fF/SCXtB/Yu1KlbVLYtauvVm7yGfraqK9y5bWro/+AdOIGl9J8J/ZAAAAAElFTkSuQmCC";

  var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAUVBMVEUAAAD///////////////////////8zMzPz8/NZWVnAwMA/Pz/a2tpzc3P4+Pi6urpOTk47Ozvu7u6qqqp6enphYWHS0tLHx8ebm5uTk5Nra2tiB1jKAAAABnRSTlMA++WnfzGVrfkxAAABBElEQVRo3u3aW46CQBCF4S6QU+04w8XLzOj+F6qCLZrYSSfaFSDn38CXEOCljrtUlYUgW1KUletbCTInq96BQRepEhgklSthUukKmFQ4gUniYBQhQoSWDYk3gbb7TtsGT+WA6lav7fBQFuhf+7oaY1mgkw79YiwLtNahL4wRAqEQIRAKEQKhECEQChHCkiEf7bAZanysOhna7jca7RtDPxpt3aRBvlVNguLtkqCjvg11PgU6vA/p36Sgjzy6Sb0MH3i9p/bBLvJfR4gQoVuEQChECIRChEDo3qyPIC/POrM+VL08vc37mHiNECFCS4esJlVmIzGz2ZvZkM9qmmg3tjSbj54BcxwE/PC391YAAAAASUVORK5CYII=";

  var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAjVBMVEUAAAD///////////////////////////8zMzOysrI3NzdgYGBcXFzOzs6VlZU1NTX8/Pz39/dmZmZFRUW8vLyrq6uenp6BgYFwcHBXV1dBQUH09PTh4eHZ2dnHx8eSkpJQUFBLS0s8PDzl5eXU1NR0dHTw8PDb29vAwMCvr6+mpqaMjIx6enrr6+tiYmIKA4ZdAAAAB3RSTlMA+uWnfzED0RzAUQAAAf1JREFUaN7t2tlSwjAUgOGyeQ6B0n2je9kFff/HUybRGUenSROaUSf/NeQbaHJBONZ7i9kURmw6W1j3nuYTGLnJ/OkdmoOG5pa1mICGJgtrBlqaWVPQ0tQCTRnIQAb6J9DODpcDO5f5UKioW5TJ8S/eACi/OihdGwpDRYtKJa4YtA9QsdQTgV4CVC4RgFwfH9CSD12QFVyj5cDiA0HaNudBboO0jQsSFSukxTwoRNozyOUxKXA50I2+bgWylewI2hyIbbk9SJewr74fKhQ+EOtEl/D7IZu+qgaFtngv64dCla3AyugG74eWH+dNIbrviIH+IxSla07+Jn8AdEN+pM2VoT2KRDbKUOQISakyVAk55KoMuRnhOw7ZKUNwTLb4ra9455ePP0f2x8P/moEMZCADGchABjKQgQz0c3u6TDw65BG8V40OQYQOOimMD0GVpNHf/rFsoCHQZXSoolCsAjX0UrUfKimUKDjsRK/7oePnHa90Z7rEoR+CTPUK0mUrRByoZjfxR1koQtqOA52Q5ntyjt3R978CB4IDk5pQ4jm91ARpFRcqCbK6bDWwxkHWK3AhiFG97U4AglTZcc4gAnkHRYeEwINYtaPitDaIQnDypZlu44EQxCpiv+nIwIL1Lfxkft9/5QYy0DhpGxLTNvambZBP12iivmFLbeOjbzu6QQG065M4AAAAAElFTkSuQmCC";

  var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAllBMVEUAAAD///////////////////////8zMzNDQ0OlpaX7+/vq6upQUFDk5OTf3983Nzfx8fHDw8OSkpLS0tKDg4N+fn5bW1v39/fZ2dmYmJiLi4tVVVV5eXljY2M6OjrKysqioqKdnZ1zc3NnZ2dfX19LS0tHR0e/v7+7u7u0tLSurq5sbGw/Pz+qqqpZWVmIiIjs7OzFxcURI+eeAAAABnRSTlMA+uWnfzGozdCBAAADWUlEQVRo3u3aaXOiQBAGYI+1wRkuRRRFUeMZjxz//89tVnnH1JaQbqywtbv0tyTdPjJMzwwVGh/RabfoG6PV7jQu8aNJ3xzNHxeHKogPqdOkCqLZabSpkmg3WlRJtBpUUdRQDdXQPw6p2BVkl4fOqWXNxJQc2lm/YqiEZXJoZV1iLiyTQ/YV6tKnqKH/BQpUJVDPsdIoKIT2yWn9/iCk+pdPnRVBi8vP/YegYGWhPXOhIL3+4hiUh7RjZXHOh0LkJFoOGQfxng+5JsnR5aC3m5OofIiebtJbGUjNLMRQUwE0GprEmSoBDUx5NCruo9HUpA7k0LMpXny9MixN8rMU0ieUdjlLUBfZJy2Enm7Xw4FogfwnGdS7DToPoggVPRH0gvmmuJAaokQC7bKi1OVvE16aFe0EEC5oLNmPxrgkPhSj05UEUlhJYjb0mlUcZDvsISubcCGVfdZWySDU2YoJzc0dkkHmLs2ZEPJdKeThGzKhdbY3yE9BSbaI8yDlX9P7cqh//ZuvWJCHxpND+6zUY0E93CI55GK940BY8k90P5yijSfFt2BAGGgnB4owOvdig9vLgSaFqzBpGx+Vv0hOOBAWoBXlSa/DY96OnR1oXlnQAM0gD0ADydC9yAj50OFIs5EzZjIsWdAB7S13FPYXUcN6csgTNazGWVAO4dSpWRAWmYHYQTPbxIOOmA1l58KRCeHUGUodPJMtmZBnlRy7AaYRE8ICnWqZo1Msx1xojEsqd0FjNqT9rGc9UROhSrMhmhY/gxQ/6UyJD4XFzyDFTzqhADLf7uSxB+5kRkECuT7O+QHPCXDC910RRH0MxEpxHLVCfp9k0ChB5VQxnCmyk5EQothH7Vp/5eg1cv2YpBCdLcQ2LHbCrUk9kxyiiSn3z6pg2Lq+SZyQFELbIpx9XtLeQQ5aVQ6po3WL9fxeynxo3eKoxBCkyPoUydL9rUeXyee/R3DkENrJxCZa7GI3CNx4t5hiChQ0EB+inm2xwu7RYxDpFcdZaSoPIfbbr5gt5uRjEI2WduGojUf0MASq6+QxThfMgxAinGzujNkEqxMD4od7iNY2DHsdHdBXPEgYgRvPw9gt3A//un/41lAN1dAfgip7Sayy194qe5GvqlcTq3vZsrLXR38CNzUbwKsmamQAAAAASUVORK5CYII=";

  const topBarHtml = namespace => {
    return `<div class='topbar-html-content'>
        <div id='${namespace}-reset' class='topbar-html-content-item'>
          <span>重置</span>
          <img src='${img$8}'></img>
        </div>
        <div id='${namespace}-audio' class='topbar-html-content-item topbar-html-margin0'>
          <span>声音开关</span>
          <img src='${img$7}'></img>
        </div>
        <div id='${namespace}-audio-speed' class='topbar-html-content-item topbar-html-mright'>
          <span>语速</span>
          <img src='${img$6}'></img>
        </div>
        <div id='${namespace}-zoom-out' class='topbar-html-content-item'>
          <span>放大</span>
          <img src='${img$5}'></img>
        </div>
        <div id='${namespace}-zoom-min' class='topbar-html-content-item topbar-html-mright'>
          <span>缩小</span>
          <img src='${img$4}'></img>
        </div>
        <div id='${namespace}-cursor-auto' class='topbar-html-content-item topbar-html-margin0'>
          <span>鼠标样式</span>
          <img src='${img$3}'></img>
        </div>
        <div id='${namespace}-pointer-follow' class='topbar-html-content-item'>
          <span>十字线</span>
          <img src='${img$2}'></img>
        </div>
        <div id='${namespace}-bigtext' class='topbar-html-content-item topbar-html-mright'>
          <span>大字幕</span>
          <img src='${img$1}'></img>
        </div>
        <div id='${namespace}-close' class='topbar-html-content-item'>
          <span>退出服务</span>
          <img src='${img}'></img>
        </div>
      </div>`;
  };

  const TopBar = {
    init(core) {
      core.creatStyle('topbar-style', styles$3);
      core.creatHtml('topbar-html', topBarHtml);
      this.setEvents(core);
    },

    setEvents(core) {
      const {
        namespace
      } = core.config;
      const BtnClose = document.getElementById(`${namespace}-close`);
      const BtnReset = document.getElementById(`${namespace}-reset`);

      BtnClose.onclick = () => {
        core.close();
      };

      BtnReset.onclick = () => {
        core.resetAction();
      };
    }

  };

  const ZoomPage = {
    init(core) {
      const {
        namespace
      } = core.config;
      this.setEvents(namespace);
      this.size = cookie.get('zomm', namespace) || 1.0;
      this.ignore = ['LINK', 'SCRIPT'];
      this.namespace = namespace;
      this.set();
    },

    setEvents(namespace) {
      document.getElementById(`${namespace}-zoom-out`).onclick = () => {
        this.zoomOut();
      };

      document.getElementById(`${namespace}-zoom-min`).onclick = () => {
        this.zoomMin();
      };
    },

    zoomOut() {
      if (this.size >= 1.3) {
        console.log('已最大');
        return;
      }

      this.size = parseFloat((this.size + 0.1).toFixed(10));
      this.set();
    },

    zoomMin() {
      if (this.size <= 1.0) {
        console.log('已最小');
        return;
      }

      this.size = parseFloat((this.size - 0.1).toFixed(10));
      this.set();
    },

    set() {
      [].forEach.call(document.body.children, el => {
        const __el = el.tagName.toUpperCase();

        if (this.ignore.indexOf(__el) > -1 || el.id == this.namespace) {
          return;
        }

        el.style.zoom = this.size;
        el.style.transform = `scale(${this.size})`;
        el.style.transformOrigin = '0px 0px';
      });
      cookie.set('zomm', this.size, this.namespace);
    },

    reset() {
      this.size = 1.0;
      this.set();
    }

  };

  var styles$2 = ".pointer-follow-html-x, .pointer-follow-html-y {\n  z-index: 99999999999;\n  transform: none;\n  transform-origin: 0px 0px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #ff0000 !important;\n  width: 100%;\n  height: 4px;\n}\n.pointer-follow-html-y {\n  height: 100%;\n  width: 4px;\n}";

  const PointerFllowHtml = () => {
    return `<div class='pointer-follow-html'>
        <div  class="pointer-follow-html-x" id="pointer-follow-html-x"></div>
        <div class="pointer-follow-html-y" id="pointer-follow-html-y"></div>
      </div>`;
  };

  const PointerFllow = {
    init(core) {
      const {
        namespace
      } = core.config;
      this.body = document.body;
      core.creatStyle('pointer-follow-style', styles$2);
      core.creatHtml('pointer-follow-html', PointerFllowHtml);
      this.setEvents(core, namespace);

      if (cookie.get('pointer', namespace)) {
        this.show(core);
      }
    },

    setEvents(core, namespace) {
      this.togglePointer(core, namespace);
    },

    addEventMove() {
      addEvent(this.body, 'mousemove', this.mouseMove);
    },

    removeEventMove() {
      removeEvent(this.body, 'mousemove', this.mouseMove);
    },

    togglePointer(core, namespace) {
      const tabBarBtn = document.getElementById(`${namespace}-pointer-follow`);
      const activeBtn = document.getElementById(`${namespace}-pointer-follow-html`);

      tabBarBtn.onclick = () => {
        if (activeBtn.style.display == 'block') {
          this.reset(core);
        } else {
          this.show(core);
        }
      };
    },

    mouseMove(event) {
      var event = window.event || event;
      var pointerX = document.getElementById("pointer-follow-html-x"),
          pointerY = document.getElementById("pointer-follow-html-y");
      pointerX.style.top = event.clientY - 10 + "px";
      pointerY.style.left = event.clientX - 10 + "px";
    },

    show(core) {
      const {
        namespace
      } = core.config;
      const activeBtn = document.getElementById(`${namespace}-pointer-follow-html`);
      activeBtn.style.display = 'block';
      this.addEventMove();
      cookie.set('pointer', true, namespace);
    },

    reset(core) {
      const {
        namespace
      } = core.config;
      const activeBtn = document.getElementById(`${namespace}-pointer-follow-html`);
      activeBtn.style.display = 'none';
      this.removeEventMove();
      cookie.set('pointer', false, namespace);
    }

  };

  var styles$1 = "* {\n  cursor: url(\"http://s.qunarzz.com/common/assist/allaw.cur\"), auto !important;\n}\n\na {\n  cursor: url(\"http://s.qunarzz.com/common/assist/linkaw.cur\"), auto !important;\n}";

  const CursorAuto = {
    init(core) {
      const {
        namespace
      } = core.config;
      this.setEvents(core, namespace);

      if (cookie.get('cursor', namespace)) {
        core.creatStyle('cursor-auto-style', styles$1);
      }
    },

    setEvents(core, namespace) {
      const tabBarBtn = document.getElementById(`${namespace}-cursor-auto`);

      tabBarBtn.onclick = () => {
        const activeBtn = document.getElementById(`${namespace}-cursor-auto-style`);

        if (activeBtn) {
          activeBtn.remove();
          cookie.set('cursor', false, namespace);
        } else {
          cookie.set('cursor', true, namespace);
          core.creatStyle('cursor-auto-style', styles$1);
        }
      };
    },

    reset(core) {
      const {
        namespace
      } = core.config;
      const activeBtn = document.getElementById(`${namespace}-cursor-auto-style`);
      activeBtn && activeBtn.remove();
    }

  };

  var styles = ".bigtext-html {\n  z-index: 99999999999;\n  height: 150px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #505050;\n}\n.bigtext-html-content {\n  height: 100%;\n  background-color: #FFFFFF;\n  font-size: 53px;\n  color: #333 !important;\n  text-align: center;\n  font-weight: bold;\n}";

  const BigTextHtml = namespace => {
    return `<div class='bigtext-html'>
           <div id='${namespace}-bigtext-content' class='bigtext-html-content'></div>
           <div class='bigtext-html-btn'>
              <i class='bigtext-html-close'>X</i>
           </div>
        </div>`;
  };

  const BigText = {
    init(core) {
      const {
        namespace
      } = core.config;
      this.body = document.body;
      this.namespace = namespace;
      core.creatStyle('bigtext-style', styles);
      core.creatHtml('bigtext-html', BigTextHtml);
      this.setEvents(core, namespace);

      if (cookie.get('bigtext', namespace)) {
        this.show(core);
      }
    },

    setEvents(core, namespace) {
      this.toggleBigText(core, namespace);
    },

    addEventMove() {
      addEvent(this.body, 'mouseover', this.mouseMove);
    },

    removeEventMove() {
      removeEvent(this.body, 'mouseover', this.mouseMove);
    },

    toggleBigText(core, namespace) {
      const tabBarBtn = document.getElementById(`${namespace}-bigtext`);

      tabBarBtn.onclick = () => {
        const activeBtn = document.getElementById(`${namespace}-bigtext-html`);

        if (activeBtn.style.display == 'block') {
          this.reset(core);
        } else {
          this.show(core);
        }
      };
    },

    mouseMove(event) {
      var event = window.event || event;
      var target = event.target;
      const {
        namespace
      } = BigText;
      const activeBtn = document.getElementById(`${namespace}-bigtext-content`);
      activeBtn.innerText = parseTagText(target);
    },

    show(core) {
      const {
        namespace
      } = core.config;
      const activeBtn = document.getElementById(`${namespace}-bigtext-html`);
      activeBtn.style.display = 'block';
      this.addEventMove();
      cookie.set('bigtext', true, namespace);
    },

    reset(core) {
      const {
        namespace
      } = core.config;
      const activeBtn = document.getElementById(`${namespace}-bigtext-html`);
      activeBtn.style.display = 'none';
      this.removeEventMove();
      cookie.set('bigtext', false, namespace);
    }

  };

  let Assist = /*#__PURE__*/function (_Base) {
    _inherits(Assist, _Base);

    var _super = _createSuper(Assist);

    function Assist(opts = {}) {
      var _this;

      _classCallCheck(this, Assist);

      _this = _super.call(this, opts); // 合并参数

      _this.mergeConfig(opts);

      _this.init();

      if (cookie.get('show', _this.config.namespace)) {
        _this.isShowTopBar(true);
      }

      _this.resetAction = _this.reset;
      return _this;
    }

    _createClass(Assist, [{
      key: "init",
      value: function init() {
        this.use(TopBar);
        this.use(ZoomPage);
        this.use(PointerFllow);
        this.use(CursorAuto);
        this.use(BigText);
      }
    }, {
      key: "reset",
      value: function reset() {
        ZoomPage.reset();
        CursorAuto.reset(this);
        PointerFllow.reset(this);
        BigText.reset(this);
      }
    }]);

    return Assist;
  }(Base);

  window.QunarAssist = new Assist({
    namespace: 'qunar-assist',
    url: 'http://qunar.com'
  });

})));
