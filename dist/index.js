(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Assist = factory());
}(this, (function () { 'use strict';

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

  let Base = /*#__PURE__*/function () {
    function Base() {
      _classCallCheck(this, Base);

      this.config = {
        namespace: 'qunar-assist',
        url: ''
      };
      this.creatContainer();
      this.show();
    }

    _createClass(Base, [{
      key: "mergeConfig",
      value: function mergeConfig(opts) {
        this.config = _objectSpread2(_objectSpread2({}, this.config), opts);
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
        const Container = document.createElement("div");
        Container.id = namespace;
        document.body.appendChild(Container);
      }
    }, {
      key: "show",
      value: function show() {
        document.getElementById('assist-open').onclick = () => {
          this.showTopBar();
        };
      }
    }, {
      key: "showTopBar",
      value: function showTopBar() {
        const {
          namespace
        } = this.config;
        const activeBtn = document.getElementById(`${namespace}-topbar-html`);
        activeBtn.style.display = 'block';
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

  var styles$2 = ".topbar-html {\n  width: 100%;\n  background: #00d0d4;\n  overflow: hidden;\n  z-index: 2147483645;\n  position: fixed;\n  top: 0;\n  box-shadow: 0 0 10px 2px #999;\n  left: 0;\n  right: 0;\n}\n.topbar-html-mright {\n  margin-right: 20px !important;\n}\n.topbar-html-content {\n  width: 1080px;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n}\n.topbar-html-content-item {\n  width: 60px;\n  margin: 0 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.topbar-html-content-item span {\n  height: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  font-size: 14px;\n  font-weight: bolder;\n}\n.topbar-html-content-item i {\n  height: 60px;\n  width: 60px;\n  border-radius: 5px;\n  display: block;\n  background-color: #FFFFFF;\n}";

  const topBarHtml = namespace => {
    console.log('namespace+++++++', namespace);
    return `<div class='topbar-html-content'>
        <div id='${namespace}-zoom-out' class='topbar-html-content-item'>
          <span>放大</span>
          <i></i>
        </div>
        <div id='${namespace}-zoom-min' class='topbar-html-content-item'>
          <span>缩小</span>
          <i></i>
        </div>
        <div id='${namespace}-pointer-follow' class='topbar-html-content-item topbar-html-mright'>
          <span>十字线</span>
          <i></i>
        </div>
        <div id='${namespace}-cursor-auto' class='topbar-html-content-item'>
          <span>鼠标样式</span>
          <i></i>
        </div>
      </div>`;
  };

  const TopBar = {
    init(core) {
      const {
        namespace
      } = core.config;
      core.creatStyle('topbar-style', styles$2);
      core.creatHtml('topbar-html', topBarHtml);
      this.setContainer(namespace);
    },

    setContainer(namespace) {}

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
    },

    setEvents(namespace) {
      // document.onmousedown = this.mouseDown; 
      document.getElementById(`${namespace}-zoom-out`).onclick = () => {
        this.zoomOut();
      };

      document.getElementById(`${namespace}-zoom-min`).onclick = () => {
        this.zoomMin();
      };
    },

    zoomOut() {
      this.size = this.size + 0.1;
      this.set();
    },

    zoomMin() {
      this.size = this.size - 0.1;
      this.set();
    },

    set() {
      [].forEach.call(document.body.children, el => {
        const __el = el.tagName.toUpperCase();

        if (this.ignore.indexOf(__el) > -1 || el.id == this.namespace) {
          return;
        }

        el.style.zoom = this.size;
        el.style.cssText += '; -moz-transform: scale(' + this.size + ');-moz-transform-origin: 0 0; ';
      });
    }

  };

  var styles$1 = ".pointer-follow-html {\n  background-color: #505050 !important;\n}\n.pointer-follow-html-x, .pointer-follow-html-y {\n  z-index: 99999999999;\n  transform: none;\n  transform-origin: 0px 0px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: blue !important;\n  width: 100%;\n  height: 2px;\n}\n.pointer-follow-html-y {\n  height: 100%;\n  width: 2px;\n}";

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
      core.creatStyle('pointer-follow-style', styles$1);
      core.creatHtml('pointer-follow-html', PointerFllowHtml);
      this.setEvents(namespace);
    },

    setEvents(namespace) {
      document.onmousemove = this.mouseMove;
      this.togglePointer(namespace);
    },

    togglePointer(namespace) {
      const tabBarBtn = document.getElementById(`${namespace}-pointer-follow`);
      const activeBtn = document.getElementById(`${namespace}-pointer-follow-html`);

      tabBarBtn.onclick = () => {
        if (activeBtn.style.display == 'block') {
          activeBtn.style.display = 'none';
        } else {
          activeBtn.style.display = 'block';
        }
      };
    },

    mouseMove(event) {
      var event = window.event || event;
      var pointerX = document.getElementById("pointer-follow-html-x"),
          pointerY = document.getElementById("pointer-follow-html-y");
      pointerX.style.top = event.clientY - 10 + "px";
      pointerY.style.left = event.clientX - 10 + "px";
    }

  };

  var styles = "* {\n  cursor: url(\"./assets/allaw.cur\"), auto !important;\n}\n\na {\n  cursor: url(\"./assets/linkaw.cur\"), auto !important;\n}";

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

      return _this;
    }

    _createClass(Assist, [{
      key: "init",
      value: function init() {
        this.use(TopBar);
        this.use(ZoomPage);
        this.use(PointerFllow);
        this.use(CursorAuto);
      }
    }]);

    return Assist;
  }(Base);

  new Assist();

  return Assist;

})));
