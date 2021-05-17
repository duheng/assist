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
        audio: true,
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
        console.log(`文本 ${target.alt || target.title || target.innerText}`);
        return `文本 ${target.alt || target.title || target.innerText}`;
      }

      return '';
    }

    if (target.role === 'A' || target.tagName === 'A') {
      console.log('这是一个链接:' + target.alt || target.title || target.innerText);
      return `链接 ${target.alt || target.title || target.innerText}`;
    }

    return '';
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

  var styles$4 = ".topbar-html {\n  width: 100%;\n  background: #797F8D;\n  overflow: hidden;\n  z-index: 2147483645;\n  position: fixed;\n  top: 0;\n  box-shadow: 0 0 10px 2px #999;\n  left: 0;\n  right: 0;\n}\n.topbar-html-mright {\n  margin-right: 50px !important;\n}\n.topbar-html-margin0 {\n  margin: 0 !important;\n}\n.topbar-html-content {\n  width: 1080px;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n.topbar-html-content-item {\n  margin: 0 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.topbar-html-content-item span {\n  height: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: PingFangSC-Medium;\n}\n.topbar-html-content-item img {\n  height: 52px;\n  width: 52px;\n  border-radius: 5px;\n  display: block;\n}";

  var img$n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAkFBMVEUAAAD///////////////////////////////////////8zMzM5OTk8PDz8/PxcXFzu7u6zs7NHR0diYmJBQUG3t7eqqqqkpKSBgYHQ0NC+vr5MTEybm5v5+fnz8/Po6OjV1dWfn590dHRPT0/h4eHd3d3b29vLy8vFxcWvr6+WlpaHh4dmZmZXV1dubm6MjIwpqEHtAAAACnRSTlMAvfPZlHYzJgQRpdOjTAAAA69JREFUaN7t2mlTpDAQBuAZj1WbTkBuGOa+D/X//7sdDTHRWbTTzqRqq3w/7g4+SRMghPR07m7711dw1lxd92/veh/zpw8XSv+PxdzfwAVzc6+dhz5cNP2Htj9Uhy+pPt3AxXPzNg7AQ15HRB88pH+8fsBL7nq34CW3PiqnancNXnLduwIvueqBp/xCvxAbitZ1Pp0WeVZFoHNuSE6aUGAqMAgQhRCY7Cp5fmhSiiPxKUKU1VkhmQ2EDdjWPJNng7JYMR1UXJ8HWoSa6aTCFbQZzuIw50HNyZlBPP2nQtVvFLxmxoCig7CbjiLcN3meF2WSorClcATHlKoJE2doEaPVkdljZLehfrYsHIwBIFTtyVyhpbBG8k4rJsOtNRrTJcCT+u2jIzS22vvYMYg3ZkRixITG5k+UEroiC1PdMQsaxZpJ1/BVVnNNzTmQTNAMKJXvf4oMqBDakQBUiQEt9aHJEAiZtc1yh0LdH+UQ+sSD6raFT5KgRKvVapKyIBm3HVp9Y6j7WyqOQQ6UCXVEQSja4B1gQHN1REwo3Cb9AVS1HdrA95niD6BSHTAAQtbBKVQRIdl2aAuUnJwjpD34TOWQeAm9xGgnLoEK7VTZn4EZMpSoytVACx9C/RwjhQ9F6hSlQAsfqhR0AFr4UKagEjipy3JDhXJ1jgqOk7/NMIiQmm1g7miYeRNuaNA0YEO1auP0spApRkGDtuocNQzohX73No/xPQOaKaimQZV6lCUMKFGXekWDImTfGUTnzatH+Dk9i3YCCUQo1KfUNbmCDiTIvE3OnKHn4C0NFZowazdEPWVwmzPgzhEqWkiC4yxISCdHtjM86pzB1E5kTlDdHlVRITOFGtC7ZObGc9Chz71x7wC9oCmD+9vEmuxMUM/X6ZDpUpCOiI6cB9YNlfPGJ2mXUNh2KARHaIF0yX5bXrpC0Aj627IMtVOAMwQHcp9G4XujJAOK3ldO5qsvnXWKgUo8AgYEC2Gv+3VF7jUTiDGwIFha66abDiYbWGtOwIRgLAw12A5Pq7sT1i+W4AwZyWqvwOc6spXHGZr/xXgBP4BglHxcU02TssjzvNl/WlMVhwh+BIEsSKvEDQATMlkS1r0XwIbs1N+s5GcA54FAZnPRxQyo3yaIqf7xtQWFKCcAQIXIVpMgHjl8JVIUYTNx/X5ET1RleTGdbut193D+v77x/UL+IW/bDLxtnPC2FcTb5hZv23V8bUDytqXK1yYxb9vefG3k87U10etmS2/bR/8CfLm94E4nnEwAAAAASUVORK5CYII=";

  var img$m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAjVBMVEUAAAD///////////////////////8zMzM4ODg+Pj719fWoqKg7OztGRkbg4OD39/d1dXVbW1vIyMj7+/tMTEzj4+OUlJSCgoJCQkLo6Oi9vb1RUVHs7Ozb29vX19fw8PDAwMC6urpwcHC0tLRVVVWlpaVpaWnQ0NCurq6enp6ZmZmLi4uIiIh7e3thYWGg660bAAAABnRSTlMA+uWnfzGozdCBAAADiklEQVRo3u3a7XKqMBAGYK3HJeFEUEHRgqj41dqP+7+805MNs5lhILF2memM758iJTwG1hDbDL4yHj0NgS3Dp9F4oPOHSyHrj3agh3xJ4yH0kOF4MIJeMho8QS95GgyhlwwH0FMe0AN6QA/ot0FRNhFikm3sfQxQnIlAR2S0kwGKP1VQJwcMBxTPyKE+3Q81HYGGkUoA4ICMQ/kA4IDC2hHvH7ghgQEiR80BKtzkgKg/ewD4K/Rm/PNQeCSHoPDHIXKegQdqOjxQ02mH4u29UJgbR2mnBXoXIp3fBW0bDkG2g5XvgDz70w4lASb6LhRfUro/HRDUR0U3QcXhnEqhowKM2EEnVBlpsvWHinc8PYacTig0PRdnb+giReBwCKKsV3QrvaBLkwkUOU2oWOO+SJoxPfSCyiYj5BxaoXAmRBCjZC7e0gcKJw1FZGtoh7ACCr33VWH/Qw/opMz502ypc9phsxZojUfn+qB4hdDVDQ0n2LDxwWuDFhIbvOndzwo76IY2eKTcgieU5PTY/conNr84oZOgVl5Q3aUg1fv3+CpzQssAT+APQWkuwou+SwKvnROa0nFekN5GaaZ/ccZ3WnBAiSkgfV8PUndvxwHVJz/ozyH+4pUF2uKNqfQLrIYpCwQzukm0zQFVpsCpGnIe6A2rwT4DD7S0oA8+iFrRpUv5i+GTsRhCu7zxSXFmgXAkVfZgt2SBcmt8m9Mo0Q5RoSa3QAccVI9W0cmN3/NIljdAG4nnPlkjkAIXNDet/KGinqEmVvvKCSWmWZV4QkmAkThtzPDF3glBhpJI33ZznXLbCRXoiJl+ZxtsrWI3VKjARJqI4z5ph9bKntrPUM3ADcFLLVHkcd0KwVEfsrBnWyJyQ3Tx7IhV1AptAylX+EZi80yfghsyE9tGZNQGQVKWMX01pA65Idil0iERRElm6KgluCDKoRKirgWSuqHKXIg0dkN2wmjzP/NXkjqhq7kKqvzut/JIktQBTQLMHr4LwYKkDggPEidwQDf2qQlNqRDckL/UhMJASXUFF+QvtZf3fL8AN+Qvcf0ZrVkRPBBJK5J4oKa0BrgilDBAtrQ74IYCDsiWBP48AzBAWhKGoqkBA6QlG8rxFt0Luftkao4FgnWuUJEpTSQ4IIhfUiWlSk8x7WOAdIqybPTmN/979AE9oF8C9bWkqrdFYr0te+ttIV9fSxP7W2zZ2/LRf1C1IJ35WNi4AAAAAElFTkSuQmCC";

  var img$l = "data:image/png;base64,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";

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

  var img$2 = "data:image/png;base64,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";

  var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAolBMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv////v+/v1/P1N0dosydP8/v4Ev8z5/f33/f3x+/x+3uTs+vsWw88Pws6z6++U4+lh1t5l2ODh9/m37PCP4uhy2+Ju2uFq2eFI0Nrk+PnF8PO97vFDz9g1zNbe9vit6u6k6OxX1N08zdcKwM3W9PaF4OYYxNDK8fSZ5eocxdHZ9fcqyNOK4ecjx9LQ8/U2dbEYAAAABnRSTlMA++WnfzGVrfkxAAAC0klEQVRo3u3aa2/aMBiGYSjjMabOoSEQBrThfFpbKN3+/19bY9geOkup6PxGqsT9KRIoF7EgNoprbzUbN3WIVb9pNGu2b1IKrW/WQQW9Sc06KqjerDVQSY3aDSrpplZHJdVrqKgrdIWu0BX6UlC6Ht1le7xLAOrsolYUxnqyAROA5kmkbEblYN6heaxYG8wbRIfpn2BeoY1W50U7MJ/Q5nQ9RkdHMQH8Q7yecLHfPhs7dh0BiM44Bdr24loHAYjOE96gloVu/UOzM0cGch1BiM536whAriMJ5X+dDiShmePIQOszRwA65P1R0ePEcTxC6es4bumoyCg63qH7WCtGxze0ilWJ4w/qRo4Tv9DxBo3Mv4zRyxTeoY4+nT3WxhaNewegFNr2kpc13rXvrdrl0O40cL/W+8AGWynUK47vcda8eDkrhVqWiYdgH0KJokRHLUqg01vMBJdAC2V7eH8SlZRB6+MUnV8EZepYH7bbRNl6ZdAotOuozkUQHinRmW7LoDtVZHARRCmjM6HjEcKrspns8MdJIQJheJLoeIcosWc63iH0HEcCokRHHsrARIcubIOJfBkoiUF0KMn+YFfKFuVgMrcgSuWQsVDw6ZsqpVkplB2nic1/TBPB0v3P7kK5PUE0/PzER6lXBgWRsrU/PZVTWpVBGBhVFI5SsEsXJ0HXfthS6FYrmw7HP2yTVTv4ANoOT8stSo/JIkMphO5RYqaV9AH/K9XtwrhL4jsBCKkKXakrAGE71Y6kux4hNnuJtCMFHiG2fxgup0XPWlPyCbkNKclC6FOShXBPSQpyJVmI0iCQglxJFsIDJSnIlYQgVwKQx3IQpSUwCO3RkwhEadxStiiAd4gSMwMwXxDvRkzPwfxBrrQD8wa5UsyBk4AwW7RMwTjrCF8Qy3fTyXKd4ryv/Xj0Cl2hrwNVtaWqsk1ilW17q2wjX1VbE6vbbFnZ9tHfnZ0j0oLHnMYAAAAASUVORK5CYII=";

  var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAq1BMVEUAAAAAv8wAvswAv8sAv80AwdAAvsv///8uytQMwc4HwMzR8/YTw8/6/f39/v7d9vg2zNYjx9L3/P3r+vvC7/K47fCD3+a07O+I4OZY1N1H0NkexdEZxNCt6u6d5uuX5Op+3uX1/Pzl+PrY9ffH8POi5+xm2OApyNPz+/zh9/l33ONM0drv+/uN4udr2eE9zte97vFf1t5x2+JCz9in6O1R09yQ4+jK8fTO8vXaeG6JAAAABnRSTlMA++WnfzGVrfkxAAAExklEQVRo3u2aa3OiMBSGtd2eAAUBL4iCiPda71rb/f+/bLtNSOjG5IB1md2Zvh86nTHyJOfkXIipvevh/q4Of031u/uH2od+YJSvs358cKACvZMe6lCB6g+1e6hE97U7qER3tTpUonoNKtI36Bv0r4Ms43xMw+Fr8DzvR0B1c1B0mLkNklPzLeybtwbFx0dySc7gbN0QtOs2iFKtTXwjUL9N9GoOoxuA/C7B1UytL4KstEk+af3WGSSzwX7ikE+anL4EiqZ5x0+DU5xbai9xiVAj+AJotSZc060NkozNWIxox9eCtg0+3YEBCh0mnLRcXAcK+BM6C9Cox1fV8q4BbfhEz6CXucmWPvLKg5656e0CobbO1rQoCzpknKRQillMsuVH5UCew3bBEYrJ7mS70yoDMl0W8X0orCEjbcqABoSqByWU5apVcdCZUAVQRuaEucksCjKX9BsDKCe/Rb8XakFypD6aIMlazTXBe3JoUlwUA9kjuhH8Cx/9fH/Ms5qU0im+oKD8ggLVzmqo12S5NCj8IiBzTV1qXXjOE/OBUn0W5UVAWzp2rt6NbVBrSs1uIyAxdGypw2ukK2FsmjjIpyMvedzMyrqnIdFgmuKglLozBlk9wrRVUUTWj1BQm5Y6XWIiMw0oprXpgIEsh9pYZzniqihipjMMdKKP8hUliskGrAMYY6Bn9ZS7ArTS9c9sLggoUeYQ2xGgUAOyqJN2CIhaONVbjuxBoyX1MgIaKwserdVvH3+fVBAxMERADl230nJ9mu4MtKYP9SCLqJ4zp+0U7NGQ3VA360G2Iq6BAYYQsDDBilJXD4opKM64RqYd3UsnljUnWRAvDC7/U4R09CBTxKvo1YTGfM32x+jEITm5Xi5iB8hmyPtoRv7UkKfn1R8hnKstr9S4CGjELPRbLQm04/iAl9O8PDG/IQJyabSJ//OaiO2358Gd10JUzhQBUWtseFHPa/QRXkYWsjuJ080ZooeAXvNbptd5FHpLFnnrGrCnRD6gHVi5jWsgoDmaYhhg7tEHHi/X4YaJgAy8KwhpR0WN3DIvZ6CfgICYhVO00VmrmhiXehkFvbD9pZZNhNbSgphFVyjogNvOFaBAkbtHJgLiLUiiAYmM8WQrGuoXQEDcdk6kBon4ClVtXR8DicTyqgYZPIKlBVnjLPniIHiUX4+khKiaTKpsqGvKzreD9YikGUuNe1MEFw4CF3slD3nRkPsSEYU46Mw8YOhD1okUExibWpDcky5jbSSFCptzU+Agv6k/bgG/TUZSkvGaknMxEGzR9xNTmkM8ZgdcEQ6SX4WGFhSUP2HHVCsoAzJdxWkdemK3AQUIOW4hrlGEc2yw4YPSJ5DeU5Y4zyjGSvhxpVUaBKcRYXqJEbPxujE1rzkl9lq8GqQaTxmijeyY1517L5ai8ISRYt0CQ2bWtSf5du4pjfZcYnnhUgxwtl/5EeT4uYtPjn3f/O192+il3bXU4V8PAqNNJDU5ncsJTcBAmA5jgmq/AEBBqKztUo/p7AAKgXDUYd9QUdaJcA4OwhU9Tx2Z0hr0LIByIFxmPxhMHM6YJkckDSIgRLFv7DwjklLFf/pb+TfoG/R/gaq6UlXZJbHKrr1VdpGvqquJ1V22rOz66C+wOzeLd8XkIgAAAABJRU5ErkJggg==";

  const topBarHtml = namespace => {
    return `<div class='topbar-html-content' id='${namespace}-topbar-html-content'>
        <div id='${namespace}-reset' class='topbar-html-content-item'>
          <span>重置</span>
          <img src='${img$n}' source-src='${img$n}'  hover-src='${img$d}'></img>
        </div>
        <div id='${namespace}-audio' class='topbar-html-content-item topbar-html-margin0'>
          <span>声音开关</span>
          <img src='${img$m}' name='audio' source-src='${img$m}'  hover-src='${img$c}'    selected-src='${img$3}'   selected-hover-src='${img$1}'></img>
        </div>
        <div id='${namespace}-audio-speed' class='topbar-html-content-item topbar-html-mright'>
          <span>语速</span>
          <img src='${img$l}' name='speed' source-src='${img$l}'  hover-src='${img$b}'  selected-src='${img$2}'   selected-hover-src='${img}'></img>
        </div>
        <div id='${namespace}-zoom-out' class='topbar-html-content-item'>
          <span>放大</span>
          <img src='${img$k}' source-src='${img$k}'  hover-src='${img$a}'></img>
        </div>
        <div id='${namespace}-zoom-min' class='topbar-html-content-item topbar-html-mright'>
          <span>缩小</span>
          <img src='${img$j}' source-src='${img$j}'  hover-src='${img$9}'></img>
        </div>
        <div id='${namespace}-cursor-auto' class='topbar-html-content-item topbar-html-margin0'>
          <span>鼠标样式</span>
          <img src='${img$i}' source-src='${img$i}'  hover-src='${img$8}'></img>
        </div>
        <div id='${namespace}-pointer-follow' class='topbar-html-content-item'>
          <span>十字线</span>
          <img src='${img$h}' source-src='${img$h}'  hover-src='${img$7}'></img>
        </div>
        <div id='${namespace}-bigtext' class='topbar-html-content-item topbar-html-mright'>
          <span>大字幕</span>
          <img src='${img$g}' source-src='${img$g}'  hover-src='${img$6}'></img>
        </div>
        <div id='${namespace}-pointeread' class='topbar-html-content-item topbar-html-mright'>
          <span>指读</span>
          <img src='${img$f}' source-src='${img$f}'  hover-src='${img$5}'></img>
        </div>
        <div id='${namespace}-close' class='topbar-html-content-item'>
          <span>退出服务</span>
          <img src='${img$e}' source-src='${img$e}'  hover-src='${img$4}'></img>
        </div>
      </div>`;
  };

  const TopBar = {
    init(core) {
      const {
        namespace
      } = core.config;
      this.namespace = namespace;
      core.creatStyle('topbar-style', styles$4);
      core.creatHtml('topbar-html', topBarHtml);
      this.setEvents(core);
    },

    setEvents(core) {
      const {
        namespace
      } = core.config;
      const BtnClose = document.getElementById(`${namespace}-close`);
      const BtnReset = document.getElementById(`${namespace}-reset`);
      const HoverItem = document.getElementById(`${namespace}-topbar-html-content`);

      BtnClose.onclick = () => {
        core.close();
      };

      BtnReset.onclick = () => {
        core.resetAction();
      };

      [].forEach.call(HoverItem.children, el => {
        addEvent(el, 'mouseover', this.mouseOver);
        addEvent(el, 'mouseout', this.mouseOut);
      });
    },

    mouseOver(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;

      if (target.tagName !== 'IMG') {
        return;
      }

      const __name = target.getAttribute('name');

      const __hover = target.getAttribute('hover-src');

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

    mouseOut(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;

      if (target.tagName !== 'IMG') {
        return;
      }

      const __name = target.getAttribute('name');

      const __source = target.getAttribute('source-src');

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

  var styles$3 = ".bigtext-html {\n  z-index: 99999999999;\n  height: 150px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #505050;\n}\n.bigtext-html-content {\n  height: 100%;\n  background-color: #FFFFFF;\n  font-size: 53px;\n  color: #333 !important;\n  text-align: center;\n  font-weight: bold;\n}";

  const BigTextHtml$1 = namespace => {
    return `<audio autoplay id='${namespace}-audio-media'>
               <source src='' id='${namespace}-audio-source'>
               <embed height="0" width="0"  src='' id='${namespace}-audio-embed'>
        </audio>
        `;
  };

  const Audio = {
    init(core) {
      const {
        namespace
      } = core.config;
      this.body = document.body;
      this.namespace = namespace;
      core.creatStyle('audio-style', styles$3);
      core.creatHtml('audio-html', BigTextHtml$1);
      this.isAudio = cookie.get('audio', namespace);
      this.audio = document.getElementById(`${namespace}-audio-media`) || '';
      this.audioTab = document.getElementById(`${namespace}-audio`) || '';
      this.audioTabImg = this.audioTab.getElementsByTagName('img')[0];
      this.speed = cookie.get('speed', namespace);
      this.speedTab = document.getElementById(`${namespace}-audio-speed`) || '';
      this.speedTabImg = this.speedTab.getElementsByTagName('img')[0];
      this.setEvents();
    },

    setEvents() {
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

    toggleAudio() {
      const {
        namespace
      } = Audio;

      this.audioTab.onclick = () => {
        if (this.isAudio) {
          this.removeEventMove();
          this.isAudio = false;
          cookie.set('audio', false, namespace);
          this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src');
        } else {
          this.addEventMove();
          this.isAudio = true;
          cookie.set('audio', true, namespace);
          this.audioTabImg.src = this.audioTabImg.getAttribute('source-src');
        }
      };

      this.speedTab.onclick = () => {
        if (this.speed == 'middle') {
          this.speed = 'fast';
          this.speedTabImg.src = this.speedTabImg.getAttribute('selected-src');
        } else {
          this.speed = 'middle';
          this.speedTabImg.src = this.speedTabImg.getAttribute('source-src');
        }

        cookie.set('speed', this.speed, namespace);
      };
    },

    addEventMove() {
      addEvent(this.body, 'mouseover', this.mouseOver);
    },

    removeEventMove() {
      removeEvent(this.body, 'mouseover', this.mouseOver);
    },

    forceSafariPlayAudio() {
      const {
        audio
      } = Audio;
      audio.load();
      audio.play();
    },

    mouseOver(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;

      var __text = parseTagText(target);

      var __parentNodeId = target.parentNode.id;

      var __isAssist = __parentNodeId.indexOf(Audio.namespace) > -1;

      if (__text == '' || __isAssist) {
        return;
      }

      Audio.playAudio(__text);
    },

    playAudio(text) {
      const {
        namespace,
        audio,
        speed,
        forceSafariPlayAudio
      } = Audio;

      let __speed = speed == 'middle' ? 5 : 7;

      var __url = `http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=${__speed}&text=${text}`;
      audio.src = __url;
      document.getElementById(`${namespace}-audio-source`).src = __url;
      document.getElementById(`${namespace}-audio-embed`).src = __url;
      let playPromise = audio.play();

      if (playPromise) {
        playPromise.then(_ => {
          // audio.pause();
          removeEvent(document, 'click', forceSafariPlayAudio);
        }).catch(error => {
          console.log(error);
        });
      }
    },

    reset() {
      const {
        namespace
      } = Audio;
      this.removeEventMove();
      this.isAudio = true;
      this.audio.pause();
      this.audioTabImg.src = this.audioTabImg.getAttribute('source-src');
      this.speedTabImg.src = this.speedTabImg.getAttribute('source-src');
      cookie.set('audio', true, namespace);
      cookie.set('speed', 'middle', namespace);
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
    return `<div id='${namespace}-bigtext-html' class='bigtext-html'>
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
      addEvent(this.body, 'mouseover', this.mouseOver);
    },

    removeEventMove() {
      removeEvent(this.body, 'mouseover', this.mouseOver);
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

    mouseOver(event) {
      var event = window.event || event;
      var target = event.target || event.srcElement;
      const {
        namespace
      } = BigText;
      var __parentNodeId = target.parentNode.id;

      var __isAssist = __parentNodeId.indexOf(namespace) > -1;

      const activeBtn = document.getElementById(`${namespace}-bigtext-content`);
      activeBtn.innerText = parseTagText(target);

      if (__isAssist) {
        activeBtn.innerText = '';
        return;
      }

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
        this.use(Audio);
        this.use(ZoomPage);
        this.use(PointerFllow);
        this.use(CursorAuto);
        this.use(BigText);
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

  window.QunarAssist = new Assist({
    namespace: 'qunar-assist',
    url: 'http://qunar.com'
  });

})));
