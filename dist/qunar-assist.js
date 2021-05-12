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

  let Base = /*#__PURE__*/function () {
    function Base() {
      _classCallCheck(this, Base);

      this.config = {
        namespace: 'mozi-assist',
        url: ''
      };
      this.eventShow();
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
      key: "eventShow",
      value: function eventShow() {
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
          js_cookie.set(namespace, true, {
            domain: '.qunar.com'
          });
        } else {
          document.body.style = 'none';
          activeBtn.style.display = 'none';
          js_cookie.remove(namespace, {
            domain: '.qunar.com'
          });
          location.reload();
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
    }, {
      key: "parseTagText",
      value: function parseTagText(target) {
        if (target.children.length === 0) {
          if (target.role === 'A' || target.tagName === 'A') {
            console.log('这是一个链接:' + target.innerText);
            return `链接 ${target.innerText}`;
          }

          if (target.role === 'IMG' || target.tagName === 'IMG') {
            console.log('这是一张图片:' + target.alt || target.title);
            return `图片 ${target.alt || target.title}`;
          }

          if (target.role === 'BUTTON' || target.tagName === 'BUTTON') {
            console.log('这是一个按钮:' + target.innerText);
            return `按钮 ${target.innerText}`;
          }

          if (!!target.innerText && target.innerText != 'undefined') {
            console.log(`文本 ${target.innerText}`);
            return `文本 ${target.innerText || target.alt || target.title}`;
          }

          return '';
        } else {
          return '';
        }
      }
    }, {
      key: "addEvent",
      value: function addEvent(element, type, callback) {
        if (element.addEventListener) {
          element.addEventListener(type, callback, false);
        } else if (element.attachEvent) {
          element.attachEvent('on' + type, callback);
        } else {
          element['on' + type] = callback;
        }
      }
    }, {
      key: "removeEvent",
      value: function removeEvent(element, type, callback) {
        if (element.removeEventListener) {
          element.removeEventListener(type, callback);
        } else if (element.detachEvent) {
          element.detachEvent('on' + type, callback);
        } else {
          element['on' + type] = null;
        }
      }
    }]);

    return Base;
  }();

  var styles$3 = ".topbar-html {\n  width: 100%;\n  background: #00d0d4;\n  overflow: hidden;\n  z-index: 2147483645;\n  position: fixed;\n  top: 0;\n  box-shadow: 0 0 10px 2px #999;\n  left: 0;\n  right: 0;\n}\n.topbar-html-mright {\n  margin-right: 20px !important;\n}\n.topbar-html-content {\n  width: 1080px;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n.topbar-html-content-item {\n  width: 60px;\n  margin: 0 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.topbar-html-content-item span {\n  height: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  font-size: 14px;\n  font-weight: bolder;\n}\n.topbar-html-content-item i {\n  height: 60px;\n  width: 60px;\n  border-radius: 5px;\n  display: block;\n  background-color: #FFFFFF;\n}";

  const topBarHtml = namespace => {
    console.log('namespace+++++++', namespace);
    return `<div class='topbar-html-content'>
        <div id='${namespace}-reset' class='topbar-html-content-item'>
          <span>重置</span>
          <i></i>
        </div>
        <div id='${namespace}-audio' class='topbar-html-content-item'>
          <span>声音开关</span>
          <i></i>
        </div>
        <div id='${namespace}-audio-speed' class='topbar-html-content-item topbar-html-mright'>
          <span>语速</span>
          <i></i>
        </div>
        <div id='${namespace}-zoom-out' class='topbar-html-content-item'>
          <span>放大</span>
          <i></i>
        </div>
        <div id='${namespace}-zoom-min' class='topbar-html-content-item topbar-html-mright'>
          <span>缩小</span>
          <i></i>
        </div>
        <div id='${namespace}-cursor-auto' class='topbar-html-content-item'>
          <span>鼠标样式</span>
          <i></i>
        </div>
        <div id='${namespace}-pointer-follow' class='topbar-html-content-item'>
          <span>十字线</span>
          <i></i>
        </div>
        <div id='${namespace}-bigtext' class='topbar-html-content-item topbar-html-mright'>
          <span>大字幕</span>
          <i></i>
        </div>
        <div id='${namespace}-info' class='topbar-html-content-item'>
          <span>说明</span>
          <i></i>
        </div>
        <div id='${namespace}-close' class='topbar-html-content-item'>
          <span>退出</span>
          <i></i>
        </div>
      </div>`;
  };

  const ZoomPage = {
    init(core) {
      const {
        namespace
      } = core.config;
      this.setEvents(namespace);
      this.size = 1.0;
      this.ignore = ['LINK', 'SCRIPT'];
      this.namespace = namespace;
      console.log('初始化---');
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

      this.size = this.size + 0.1;
      this.set();
    },

    zoomMin() {
      if (this.size <= 1.0) {
        console.log('已最小');
        return;
      }

      this.size = this.size - 0.1;
      this.set();
    },

    set() {
      [].forEach.call(document.body.children, el => {
        const __el = el.tagName.toUpperCase();

        if (this.ignore.indexOf(__el) > -1 || el.id == this.namespace) {
          return;
        }

        el.style.transform = `scale(${this.size})`;
        el.style.transformOrigin = '0px 0px';
      });
    },

    reset() {
      this.size = 1.0;
      this.set();
    }

  };

  var styles$2 = ".pointer-follow-html {\n  background-color: #505050 !important;\n}\n.pointer-follow-html-x, .pointer-follow-html-y {\n  z-index: 99999999999;\n  transform: none;\n  transform-origin: 0px 0px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: blue !important;\n  width: 100%;\n  height: 2px;\n}\n.pointer-follow-html-y {\n  height: 100%;\n  width: 2px;\n}";

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
    },

    setEvents(core, namespace) {
      this.togglePointer(core, namespace);
    },

    addEventMove(core) {
      core.addEvent(this.body, 'mousemove', this.mouseMove);
    },

    removeEventMove(core) {
      core.removeEvent(this.body, 'mousemove', this.mouseMove);
    },

    togglePointer(core, namespace) {
      const tabBarBtn = document.getElementById(`${namespace}-pointer-follow`);
      const activeBtn = document.getElementById(`${namespace}-pointer-follow-html`);

      tabBarBtn.onclick = () => {
        if (activeBtn.style.display == 'block') {
          activeBtn.style.display = 'none';
          this.removeEventMove(core);
        } else {
          activeBtn.style.display = 'block';
          this.addEventMove(core);
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

    reset(core) {
      const {
        namespace
      } = core.config;
      const activeBtn = document.getElementById(`${namespace}-pointer-follow-html`);
      activeBtn.style.display = 'none';
      this.removeEventMove(core);
    }

  };

  var styles$1 = ".bigtext-html {\n  z-index: 99999999999;\n  height: 150px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #505050;\n}\n.bigtext-html-content {\n  height: 100%;\n  background-color: #FFFFFF;\n  font-size: 53px;\n  color: #333 !important;\n  text-align: center;\n  font-weight: bold;\n}";

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
      this.parseTagText = core.parseTagText;
      core.creatStyle('bigtext-style', styles$1);
      core.creatHtml('bigtext-html', BigTextHtml);
      this.setEvents(core, namespace);
    },

    setEvents(core, namespace) {
      this.toggleBigText(core, namespace);
    },

    addEventMove(core) {
      core.addEvent(this.body, 'mouseover', this.mouseMove);
    },

    removeEventMove(core) {
      core.removeEvent(this.body, 'mouseover', this.mouseMove);
    },

    toggleBigText(core, namespace) {
      const tabBarBtn = document.getElementById(`${namespace}-bigtext`);

      tabBarBtn.onclick = () => {
        const activeBtn = document.getElementById(`${namespace}-bigtext-html`);

        if (activeBtn.style.display == 'block') {
          activeBtn.style.display = 'none';
          this.removeEventMove(core);
        } else {
          activeBtn.style.display = 'block';
          this.addEventMove(core);
        }
      };
    },

    mouseMove(event) {
      var event = window.event || event;
      var target = event.target;
      const {
        parseTagText,
        namespace
      } = BigText;
      const activeBtn = document.getElementById(`${namespace}-bigtext-content`);
      activeBtn.innerText = BigText.parseTagText(target);
    },

    reset(core) {
      const {
        namespace
      } = core.config;
      const activeBtn = document.getElementById(`${namespace}-bigtext-html`);
      activeBtn.style.display = 'none';
      this.removeEventMove(core);
    }

  };

  var styles = "* {\n  cursor: url(\"http://s.qunarzz.com/common/assist/allaw.cur\"), auto !important;\n}\n\na {\n  cursor: url(\"http://s.qunarzz.com/common/assist/linkaw.cur\"), auto !important;\n}";

  const CursorAuto = {
    init(core) {
      const {
        namespace
      } = core.config;
      this.setEvents(core, namespace);
    },

    setEvents(core, namespace) {
      const tabBarBtn = document.getElementById(`${namespace}-cursor-auto`);

      tabBarBtn.onclick = () => {
        const activeBtn = document.getElementById(`${namespace}-cursor-auto-style`);

        if (activeBtn) {
          activeBtn.remove();
        } else {
          core.creatStyle('cursor-auto-style', styles);
        }
      };
    },

    reset(core) {
      const {
        namespace
      } = core.config;
      const activeBtn = document.getElementById(`${namespace}-cursor-auto-style`);
      activeBtn.remove();
    }

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
        // console.log('core----', core)
        ZoomPage.reset();
        PointerFllow.reset(core);
        BigText.reset(core);
        CursorAuto.reset(core);
      }; // document.onmousemove = this.mouseMove; 
      // this.togglePointer(namespace)

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

      if (js_cookie.get(_this.config.namespace)) {
        _this.isShowTopBar(true);
      }

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
    }]);

    return Assist;
  }(Base);

  const QunarAssist = new Assist({
    namespace: 'qunar-assist',
    url: 'http://qunar.com'
  });
  console.log('Assist-----', QunarAssist);

})));
