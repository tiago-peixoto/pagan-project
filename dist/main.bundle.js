webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	//# Providers provided by Angular
	var platform_browser_dynamic_1 = __webpack_require__(295);
	//## Platform and Environment
	//
	//** our providers/directives/pipes **
	var browser_1 = __webpack_require__(500);
	var environment_1 = __webpack_require__(503);
	//## App Component
	//
	//** our top level component that holds all of our components **
	var app_1 = __webpack_require__(489);
	// Bootstrap our Angular app with a top level component `App` and inject
	// our Services and Providers into Angular's dependency injection
	function main(initialHmrState) {
	    return platform_browser_dynamic_1.bootstrap(app_1.App, browser_1.PROVIDERS.concat(environment_1.ENV_PROVIDERS, browser_1.DIRECTIVES, browser_1.PIPES, app_1.APP_PROVIDERS, app_1.APP_STORES))
	        .catch(function (err) { return console.error(err); });
	}
	exports.main = main;
	//## Vendors
	//
	// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
	// You can also import them in vendors to ensure that they are bundled in one file
	// Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
	//## Hot Module Reload
	//
	// experimental version
	if (false) {
	    // activate hot module reload
	    var ngHmr = require('angular2-hmr');
	    ngHmr.hotModuleReplacement(main, module);
	}
	else {
	    // bootstrap when documetn is ready
	    document.addEventListener('DOMContentLoaded', function () { return main(); });
	}
	

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var angular2_hmr_1 = __webpack_require__(559);
	var AppState = (function () {
	    function AppState() {
	        // `HmrState` is used by `HMR` to track the any `state` during reloading
	        this._state = {};
	    }
	    Object.defineProperty(AppState.prototype, "state", {
	        // Already return a `clone` of the current `state`
	        get: function () {
	            return this._state = this._clone(this._state);
	        },
	        // Never allow mutation
	        set: function (value) {
	            throw new Error('Do not mutate the `.state` directly!');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AppState.prototype.get = function (prop) {
	        // Use our `state` getter for the `clone`
	        var state = this.state;
	        return state[prop] || state;
	    };
	    AppState.prototype.set = function (prop, value) {
	        // Internally mutate our `state`
	        return this._state[prop] = value;
	    };
	    AppState.prototype._clone = function (object) {
	        // Simple object `clone`
	        return JSON.parse(JSON.stringify(object));
	    };
	    __decorate([
	        angular2_hmr_1.HmrState(), 
	        __metadata('design:type', Object)
	    ], AppState.prototype, "_state", void 0);
	    AppState = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AppState);
	    return AppState;
	}());
	exports.AppState = AppState;
	

/***/ },

/***/ 129:
/***/ function(module, exports) {

	"use strict";
	var OpaqueToken = (function () {
	    function OpaqueToken(_desc) {
	        this._desc = _desc;
	    }
	    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
	    return OpaqueToken;
	}());
	exports.OpaqueToken = OpaqueToken;
	exports.HMR_STATE = new OpaqueToken('hmrState');
	var HmrStore = (function () {
	    function HmrStore() {
	    }
	    HmrStore.set = function (prop, value) {
	        HmrStore._state[prop] = value;
	        return HmrStore._state[prop];
	    };
	    HmrStore.get = function (prop) {
	        return HmrStore._state[prop];
	    };
	    HmrStore.select = function (name, getState) {
	        HmrStore._states.push({ name: name, getState: getState });
	        var defaultData = getState();
	        var currentData = HmrStore.get(name);
	        if (defaultData && !currentData) {
	            return HmrStore.set(name, defaultData);
	        }
	        else if (defaultData && currentData) {
	            return HmrStore.set(name, Object.assign({}, defaultData, currentData));
	        }
	        else {
	            return HmrStore.set(name, currentData || defaultData);
	        }
	    };
	    HmrStore.dispose = function () {
	        HmrStore._states = [];
	        HmrStore._state = {};
	        HmrStore._initialValues = {};
	    };
	    HmrStore.getState = function () {
	        var initialState = Object.assign({}, HmrStore._state);
	        return HmrStore._states
	            .reduce(function (memo, item) {
	            memo[item.name] = item.getState();
	            return memo;
	        }, initialState);
	    };
	    HmrStore.toJSON = function () {
	        return HmrStore.getState();
	    };
	    HmrStore.dev = false;
	    HmrStore._state = {};
	    HmrStore._initialValues = {};
	    HmrStore._states = [];
	    return HmrStore;
	}());
	exports.HmrStore = HmrStore;
	

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(713)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  background: #F4FAFA; }\n\nbody {\n  margin: 0; }\n\nmd-card {\n  margin: 25px; }\n\n/**\n * Set up a decent box model on the root element\n */\nhtml {\n  box-sizing: border-box; }\n\n/**\n * Make all elements from the DOM inherit from the parent box-sizing\n * Since `*` has a specificity of 0, it does not override the `html` value\n * making all elements inheriting from the root box-sizing value\n * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\n */\n*, *::before, *::after {\n  box-sizing: inherit; }\n\n/**\n * Basic styles for links\n */\na {\n  color: #e50050;\n  text-decoration: none; }\n  a:hover, a:active, a:focus {\n    color: #222222;\n    text-decoration: underline; }\n\n/**\n * Basic typography style for copy text\n */\nbody {\n  color: #222222;\n  font: normal 125%/1.4 \"Open Sans\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\n/**\n * Clear inner floats\n */\n.clearfix::after {\n  clear: both;\n  content: '';\n  display: table; }\n\n/**\n * Main content containers\n * 1. Make the container full-width with a maximum width\n * 2. Center it in the viewport\n * 3. Leave some space on the edges, especially valuable on small screens\n */\n.container {\n  max-width: 1180px;\n  /* 1 */\n  margin-left: auto;\n  /* 2 */\n  margin-right: auto;\n  /* 2 */\n  padding-left: 20px;\n  /* 3 */\n  padding-right: 20px;\n  /* 3 */\n  width: 100%;\n  /* 1 */ }\n\n/**\n * Hide text while making it readable for screen readers\n * 1. Needed in WebKit-based browsers because of an implementation bug;\n *    See: https://code.google.com/p/chromium/issues/detail?id=457146\n */\n.hide-text {\n  overflow: hidden;\n  padding: 0;\n  /* 1 */\n  text-indent: 101%;\n  white-space: nowrap; }\n\n/**\n * Hide element while making it readable for screen readers\n * Shamelessly borrowed from HTML5Boilerplate:\n * https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133\n */\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\nmd-toolbar ul {\n  display: inline;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 60px; }\n\nmd-toolbar li {\n  display: inline; }\n\nmd-toolbar li.active {\n  background-color: lightgray; }\n\nfooter {\n  flex: 0 0 60px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff; }\n\nbutton.active {\n  background: #fff;\n  color: #009688; }\n\nbutton.active:hover {\n  color: #fff; }\n\n.fill {\n  flex: 1 1 auto; }\n\n.app-state {\n  margin: 15px;\n  flex: 1;\n  max-height: 9.969rem; }\n\n.home {\n  flex: 1; }\n\nmd-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  border: 2px dashed #FBC02D; }\n\n.sample-content {\n  flex: 1; }\n\n.card-container md-card {\n  margin: 5px; }\n", ""]);

	// exports


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(352));
	__export(__webpack_require__(353));
	__export(__webpack_require__(350));
	__export(__webpack_require__(351));
	__export(__webpack_require__(557));


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(66);
	var error_1 = __webpack_require__(81);
	var Observable_1 = __webpack_require__(7);
	__webpack_require__(518);
	__webpack_require__(519);
	__webpack_require__(202);
	__webpack_require__(523);
	__webpack_require__(522);
	__webpack_require__(529);
	__webpack_require__(524);
	__webpack_require__(520);
	/** Exception thrown when attempting to load an icon with a name that cannot be found. */
	var MdIconNameNotFoundError = (function (_super) {
	    __extends(MdIconNameNotFoundError, _super);
	    function MdIconNameNotFoundError(iconName) {
	        _super.call(this, "Unable to find icon with the name \"" + iconName + "\"");
	    }
	    return MdIconNameNotFoundError;
	}(error_1.MdError));
	exports.MdIconNameNotFoundError = MdIconNameNotFoundError;
	/**
	 * Exception thrown when attempting to load SVG content that does not contain the expected
	 * <svg> tag.
	 */
	var MdIconSvgTagNotFoundError = (function (_super) {
	    __extends(MdIconSvgTagNotFoundError, _super);
	    function MdIconSvgTagNotFoundError() {
	        _super.call(this, '<svg> tag not found');
	    }
	    return MdIconSvgTagNotFoundError;
	}(error_1.MdError));
	exports.MdIconSvgTagNotFoundError = MdIconSvgTagNotFoundError;
	/**
	  * Configuration for an icon, including the URL and possibly the cached SVG element.
	  * @internal
	  */
	var SvgIconConfig = (function () {
	    function SvgIconConfig(url) {
	        this.url = url;
	        this.svgElement = null;
	    }
	    return SvgIconConfig;
	}());
	/** Returns the cache key to use for an icon namespace and name. */
	var iconKey = function (namespace, name) { return namespace + ':' + name; };
	/**
	 * Service to register and display icons used by the <md-icon> component.
	 * - Registers icon URLs by namespace and name.
	 * - Registers icon set URLs by namespace.
	 * - Registers aliases for CSS classes, for use with icon fonts.
	 * - Loads icons from URLs and extracts individual icons from icon sets.
	 */
	var MdIconRegistry = (function () {
	    function MdIconRegistry(_http) {
	        this._http = _http;
	        /**
	         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
	         */
	        this._svgIconConfigs = new Map();
	        /**
	         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
	         * Multiple icon sets can be registered under the same namespace.
	         */
	        this._iconSetConfigs = new Map();
	        /** Cache for icons loaded by direct URLs. */
	        this._cachedIconsByUrl = new Map();
	        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
	        this._inProgressUrlFetches = new Map();
	        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
	        this._fontCssClassesByAlias = new Map();
	        /**
	         * The CSS class to apply when an <md-icon> component has no icon name, url, or font specified.
	         * The default 'material-icons' value assumes that the material icon font has been loaded as
	         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
	         */
	        this._defaultFontSetClass = 'material-icons';
	    }
	    /** Registers an icon by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIcon = function (iconName, url) {
	        return this.addSvgIconInNamespace('', iconName, url);
	    };
	    /** Registers an icon by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url) {
	        var key = iconKey(namespace, iconName);
	        this._svgIconConfigs.set(key, new SvgIconConfig(url));
	        return this;
	    };
	    /** Registers an icon set by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIconSet = function (url) {
	        return this.addSvgIconSetInNamespace('', url);
	    };
	    /** Registers an icon set by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url) {
	        var config = new SvgIconConfig(url);
	        if (this._iconSetConfigs.has(namespace)) {
	            this._iconSetConfigs.get(namespace).push(config);
	        }
	        else {
	            this._iconSetConfigs.set(namespace, [config]);
	        }
	        return this;
	    };
	    /**
	     * Defines an alias for a CSS class name to be used for icon fonts. Creating an mdIcon
	     * component with the alias as the fontSet input will cause the class name to be applied
	     * to the <md-icon> element.
	     */
	    MdIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
	        if (className === void 0) { className = alias; }
	        this._fontCssClassesByAlias.set(alias, className);
	        return this;
	    };
	    /**
	     * Returns the CSS class name associated with the alias by a previous call to
	     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
	     */
	    MdIconRegistry.prototype.classNameForFontAlias = function (alias) {
	        return this._fontCssClassesByAlias.get(alias) || alias;
	    };
	    /**
	     * Sets the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.setDefaultFontSetClass = function (className) {
	        this._defaultFontSetClass = className;
	        return this;
	    };
	    /**
	     * Returns the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.getDefaultFontSetClass = function () {
	        return this._defaultFontSetClass;
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) from the given URL.
	     * The response from the URL may be cached so this will not always cause an HTTP request, but
	     * the produced element will always be a new copy of the originally fetched icon. (That is,
	     * it will not contain any modifications made to elements previously returned).
	     */
	    MdIconRegistry.prototype.getSvgIconFromUrl = function (url) {
	        var _this = this;
	        if (this._cachedIconsByUrl.has(url)) {
	            return Observable_1.Observable.of(cloneSvg(this._cachedIconsByUrl.get(url)));
	        }
	        return this._loadSvgIconFromConfig(new SvgIconConfig(url))
	            .do(function (svg) { return _this._cachedIconsByUrl.set(url, svg); })
	            .map(function (svg) { return cloneSvg(svg); });
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) with the given name
	     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
	     * if not, the Observable will throw an MdIconNameNotFoundError.
	     */
	    MdIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
	        if (namespace === void 0) { namespace = ''; }
	        // Return (copy of) cached icon if possible.
	        var key = iconKey(namespace, name);
	        if (this._svgIconConfigs.has(key)) {
	            return this._getSvgFromConfig(this._svgIconConfigs.get(key));
	        }
	        // See if we have any icon sets registered for the namespace.
	        var iconSetConfigs = this._iconSetConfigs.get(namespace);
	        if (iconSetConfigs) {
	            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
	        }
	        return Observable_1.Observable.throw(new MdIconNameNotFoundError(key));
	    };
	    /**
	     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
	     */
	    MdIconRegistry.prototype._getSvgFromConfig = function (config) {
	        if (config.svgElement) {
	            // We already have the SVG element for this icon, return a copy.
	            return Observable_1.Observable.of(cloneSvg(config.svgElement));
	        }
	        else {
	            // Fetch the icon from the config's URL, cache it, and return a copy.
	            return this._loadSvgIconFromConfig(config)
	                .do(function (svg) { return config.svgElement = svg; })
	                .map(function (svg) { return cloneSvg(svg); });
	        }
	    };
	    /**
	     * Attempts to find an icon with the specified name in any of the SVG icon sets.
	     * First searches the available cached icons for a nested element with a matching name, and
	     * if found copies the element to a new <svg> element. If not found, fetches all icon sets
	     * that have not been cached, and searches again after all fetches are completed.
	     * The returned Observable produces the SVG element if possible, and throws
	     * MdIconNameNotFoundError if no icon with the specified name can be found.
	     */
	    MdIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
	        var _this = this;
	        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
	        // requested name.
	        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	        if (namedIcon) {
	            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
	            // time anyway, there's probably not much advantage compared to just always extracting
	            // it from the icon set.
	            return Observable_1.Observable.of(namedIcon);
	        }
	        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
	        // fetched, fetch them now and look for iconName in the results.
	        var iconSetFetchRequests = iconSetConfigs
	            .filter(function (iconSetConfig) { return !iconSetConfig.svgElement; })
	            .map(function (iconSetConfig) {
	            return _this._loadSvgIconSetFromConfig(iconSetConfig)
	                .catch(function (err, caught) {
	                // Swallow errors fetching individual URLs so the combined Observable won't
	                // necessarily fail.
	                console.log("Loading icon set URL: " + iconSetConfig.url + " failed: " + err);
	                return Observable_1.Observable.of(null);
	            })
	                .do(function (svg) {
	                // Cache SVG element.
	                if (svg) {
	                    iconSetConfig.svgElement = svg;
	                }
	            });
	        });
	        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
	        // cached SVG element (unless the request failed), and we can check again for the icon.
	        return Observable_1.Observable.forkJoin(iconSetFetchRequests)
	            .map(function (ignoredResults) {
	            var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	            if (!foundIcon) {
	                throw new MdIconNameNotFoundError(name);
	            }
	            return foundIcon;
	        });
	    };
	    /**
	     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
	        // Iterate backwards, so icon sets added later have precedence.
	        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
	            var config = iconSetConfigs[i];
	            if (config.svgElement) {
	                var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config);
	                if (foundIcon) {
	                    return foundIcon;
	                }
	            }
	        }
	        return null;
	    };
	    /**
	     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
	        var _this = this;
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._createSvgElementForSingleIcon(svgText, config); });
	    };
	    /**
	     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
	        var _this = this;
	        // TODO: Document that icons should only be loaded from trusted sources.
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._svgElementFromString(svgText); });
	    };
	    /**
	     * Creates a DOM element from the given SVG string, and adds default attributes.
	     */
	    MdIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText, config) {
	        var svg = this._svgElementFromString(responseText);
	        this._setSvgAttributes(svg, config);
	        return svg;
	    };
	    /**
	     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName, config) {
	        var iconNode = iconSet.querySelector('#' + iconName);
	        if (!iconNode) {
	            return null;
	        }
	        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
	        // the content of a new <svg> node.
	        if (iconNode.tagName.toLowerCase() == 'svg') {
	            return this._setSvgAttributes(iconNode.cloneNode(true), config);
	        }
	        // createElement('SVG') doesn't work as expected; the DOM ends up with
	        // the correct nodes, but the SVG content doesn't render. Instead we
	        // have to create an empty SVG node using innerHTML and append its content.
	        // Elements created using DOMParser.parseFromString have the same problem.
	        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
	        var svg = this._svgElementFromString('<svg></svg>');
	        // Clone the node so we don't remove it from the parent icon set element.
	        svg.appendChild(iconNode.cloneNode(true));
	        return this._setSvgAttributes(svg, config);
	    };
	    /**
	     * Creates a DOM element from the given SVG string.
	     */
	    MdIconRegistry.prototype._svgElementFromString = function (str) {
	        // TODO: Is there a better way than innerHTML? Renderer doesn't appear to have a method for
	        // creating an element from an HTML string.
	        var div = document.createElement('DIV');
	        div.innerHTML = str;
	        var svg = div.querySelector('svg');
	        if (!svg) {
	            throw new MdIconSvgTagNotFoundError();
	        }
	        return svg;
	    };
	    /**
	     * Sets the default attributes for an SVG element to be used as an icon.
	     */
	    MdIconRegistry.prototype._setSvgAttributes = function (svg, config) {
	        if (!svg.getAttribute('xmlns')) {
	            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	        }
	        svg.setAttribute('fit', '');
	        svg.setAttribute('height', '100%');
	        svg.setAttribute('width', '100%');
	        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
	        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
	        return svg;
	    };
	    /**
	     * Returns an Observable which produces the string contents of the given URL. Results may be
	     * cached, so future calls with the same URL may not cause another HTTP request.
	     */
	    MdIconRegistry.prototype._fetchUrl = function (url) {
	        var _this = this;
	        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
	        // already a request in progress for that URL. It's necessary to call share() on the
	        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
	        if (this._inProgressUrlFetches.has(url)) {
	            return this._inProgressUrlFetches.get(url);
	        }
	        // TODO(jelbourn): for some reason, the `finally` operator "loses" the generic type on the
	        // Observable. Figure out why and fix it.
	        var req = this._http.get(url)
	            .map(function (response) { return response.text(); })
	            .finally(function () {
	            _this._inProgressUrlFetches.delete(url);
	        })
	            .share();
	        this._inProgressUrlFetches.set(url, req);
	        return req;
	    };
	    MdIconRegistry = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], MdIconRegistry);
	    return MdIconRegistry;
	}());
	exports.MdIconRegistry = MdIconRegistry;
	/** Clones an SVGElement while preserving type information. */
	function cloneSvg(svg) {
	    return svg.cloneNode(true);
	}
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-IydvmmBU.tmp/0/components/icon/icon-registry.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	// ```
	// rating.component.js
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// rating.component.js may be freely distributed under the MIT license
	// ```
	"use strict";
	// # Rating Component
	var core_1 = __webpack_require__(1);
	var Rating = (function () {
	    function Rating() {
	        this.updateRate = new core_1.EventEmitter();
	        this.range = [1, 2, 3, 4, 5];
	    }
	    Rating.prototype.update = function (value) {
	        // Check to see if this component should be interactive or not
	        if (this.interactive) {
	            this.rate = value;
	            // push a new value every time we click on a star
	            // this is thanks to the fact that the `NG2` `EventEmitter`
	            // is using `Rx` thus this is an `Observable`
	            this.updateRate.next(value);
	        }
	        else {
	            // DEBUG
	            console.log('This rating component is not interactive.');
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], Rating.prototype, "rate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], Rating.prototype, "interactive", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], Rating.prototype, "updateRate", void 0);
	    Rating = __decorate([
	        core_1.Component({
	            selector: 'rating',
	            template: __webpack_require__(507),
	            directives: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Rating);
	    return Rating;
	}());
	exports.Rating = Rating;
	

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	// ```
	// recipe.service.js
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// recipe.service.js may be freely distributed under the MIT license
	// ```
	"use strict";
	// # Recipe Service
	var http_1 = __webpack_require__(66);
	var store_1 = __webpack_require__(206);
	var core_1 = __webpack_require__(1);
	var HEADER = {
	    headers: new http_1.Headers({
	        'Content-Type': 'application/json'
	    })
	};
	var RecipeService = (function () {
	    // Inject the `AppStore` into the constructor with a type of `AppStore`
	    function RecipeService(http, store) {
	        this.http = http;
	        this.store = store;
	        // Bind an observable of our `recipes` to `RecipeService`
	        // Since this is essentially a `key, value` system, we can
	        // set our `recipes` by calling `store.select('recipes')`
	        this.recipes = store.select('recipes');
	    }
	    RecipeService.prototype.loadRecipes = function () {
	        var _this = this;
	        this.http.get('/api/recipe')
	            .map(function (res) { return res.json(); })
	            .map(function (payload) { return ({ type: 'ADD_RECIPES', payload: payload }); })
	            .subscribe(function (action) { return _this.store.dispatch(action); });
	    };
	    RecipeService.prototype.saveRecipe = function (recipe) {
	        (recipe._id) ? this.updateRecipe(recipe) : this.createRecipe(recipe);
	    };
	    RecipeService.prototype.createRecipe = function (recipe) {
	        var _this = this;
	        this.http.post('/api/recipe', JSON.stringify(recipe), HEADER)
	            .map(function (res) { return res.json(); })
	            .map(function (payload) { return ({ type: 'CREATE_RECIPE', payload: payload }); })
	            .subscribe(function (action) { return _this.store.dispatch(action); });
	    };
	    RecipeService.prototype.updateRecipe = function (recipe) {
	        var _this = this;
	        this.http.put("/api/recipe/" + recipe._id, JSON.stringify(recipe), HEADER)
	            .subscribe(function (action) { return _this.store.dispatch({ type: 'UPDATE_RECIPE', payload: recipe }); });
	    };
	    RecipeService.prototype.deleteRecipe = function (recipe) {
	        var _this = this;
	        this.http.delete("/api/recipe/" + recipe._id)
	            .subscribe(function (action) { return _this.store.dispatch({ type: 'DELETE_RECIPE', payload: recipe }); });
	    };
	    RecipeService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, store_1.Store])
	    ], RecipeService);
	    return RecipeService;
	}());
	exports.RecipeService = RecipeService;
	

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var Accordion = (function () {
	    function Accordion() {
	        this.groups = [];
	    }
	    Accordion.prototype.addGroup = function (group) {
	        this.groups.push(group);
	    };
	    Accordion.prototype.closeOthers = function (openGroup) {
	        this.groups.forEach(function (group) {
	            if (group !== openGroup) {
	                group.isOpen = false;
	            }
	        });
	    };
	    Accordion.prototype.removeGroup = function (group) {
	        var index = this.groups.indexOf(group);
	        if (index !== -1) {
	            this.groups.splice(index, 1);
	        }
	    };
	    Accordion = __decorate([
	        core_1.Component({
	            selector: 'accordion, [accordion]',
	            host: {
	                'class': 'panel-group'
	            },
	            template: '<ng-content></ng-content>'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Accordion);
	    return Accordion;
	}());
	exports.Accordion = Accordion;
	

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var button_1 = __webpack_require__(322);
	var card_1 = __webpack_require__(323);
	var checkbox_1 = __webpack_require__(324);
	var grid_list_1 = __webpack_require__(200);
	var icon_1 = __webpack_require__(477);
	var input_1 = __webpack_require__(327);
	var list_1 = __webpack_require__(328);
	var progress_bar_1 = __webpack_require__(329);
	var progress_circle_1 = __webpack_require__(330);
	var radio_1 = __webpack_require__(331);
	var sidenav_1 = __webpack_require__(333);
	var slide_toggle_1 = __webpack_require__(334);
	var tabs_1 = __webpack_require__(335);
	var toolbar_1 = __webpack_require__(336);
	/*
	 * we are grouping the module so we only need to manage the imports in one location
	 */
	exports.MATERIAL_PIPES = [];
	exports.MATERIAL_DIRECTIVES = [
	    button_1.MdAnchor,
	    button_1.MdButton,
	    checkbox_1.MdCheckbox,
	    icon_1.MdIcon,
	    progress_bar_1.MdProgressBar,
	    progress_circle_1.MdProgressCircle,
	    radio_1.MdRadioButton,
	    radio_1.MdRadioGroup,
	    progress_circle_1.MdSpinner,
	    toolbar_1.MdToolbar
	].concat(card_1.MD_CARD_DIRECTIVES, grid_list_1.MD_GRID_LIST_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, sidenav_1.MD_SIDENAV_DIRECTIVES, slide_toggle_1.MD_SLIDE_TOGGLE_DIRECTIVES, tabs_1.MD_TABS_DIRECTIVES);
	exports.MATERIAL_PROVIDERS = [
	    icon_1.MdIconRegistry,
	    radio_1.MdRadioDispatcher
	];
	

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(7);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(58);
	var Subscription_1 = __webpack_require__(82);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	        this.pending = false;
	    }
	    FutureAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            this.error = new Error('executing a cancelled action');
	        }
	        else {
	            try {
	                this.work(this.state);
	            }
	            catch (e) {
	                this.unsubscribe();
	                this.error = e;
	            }
	        }
	    };
	    FutureAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        return this._schedule(state, delay);
	    };
	    FutureAction.prototype._schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        // Always replace the current state with the new state.
	        this.state = state;
	        // Set the pending flag indicating that this action has been scheduled, or
	        // has recursively rescheduled itself.
	        this.pending = true;
	        var id = this.id;
	        // If this action has an intervalID and the specified delay matches the
	        // delay we used to create the intervalID, don't call `setInterval` again.
	        if (id != null && this.delay === delay) {
	            return this;
	        }
	        this.delay = delay;
	        // If this action has an intervalID, but was rescheduled with a different
	        // `delay` time, cancel the current intervalID and call `setInterval` with
	        // the new `delay` time.
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        //
	        // Important implementation note:
	        //
	        // By default, FutureAction only executes once. However, Actions have the
	        // ability to be rescheduled from within the scheduled callback (mimicking
	        // recursion for asynchronous methods). This allows us to implement single
	        // and repeated actions with the same code path without adding API surface
	        // area, and implement tail-call optimization over asynchronous boundaries.
	        //
	        // However, JS runtimes make a distinction between intervals scheduled by
	        // repeatedly calling `setTimeout` vs. a single `setInterval` call, with
	        // the latter providing a better guarantee of precision.
	        //
	        // In order to accommodate both single and repeatedly rescheduled actions,
	        // use `setInterval` here for both cases. By default, the interval will be
	        // canceled after its first execution, or if the action schedules itself to
	        // run again with a different `delay` time.
	        //
	        // If the action recursively schedules itself to run again with the same
	        // `delay` time, the interval is not canceled, but allowed to loop again.
	        // The check of whether the interval should be canceled or not is run every
	        // time the interval is executed. The first time an action fails to
	        // reschedule itself, the interval is canceled.
	        //
	        this.id = root_1.root.setInterval(function () {
	            _this.pending = false;
	            var _a = _this, id = _a.id, scheduler = _a.scheduler;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	            //
	            // Terminate this interval if the action didn't reschedule itself.
	            // Don't call `this.unsubscribe()` here, because the action could be
	            // rescheduled later. For example:
	            //
	            // ```
	            // scheduler.schedule(function doWork(counter) {
	            //   /* ... I'm a busy worker bee ... */
	            //   var originalAction = this;
	            //   /* wait 100ms before rescheduling this action again */
	            //   setTimeout(function () {
	            //     originalAction.schedule(counter + 1);
	            //   }, 100);
	            // }, 1000);
	            // ```
	            if (_this.pending === false && id != null) {
	                _this.id = null;
	                root_1.root.clearInterval(id);
	            }
	        }, delay);
	        return this;
	    };
	    FutureAction.prototype._unsubscribe = function () {
	        this.pending = false;
	        var _a = this, id = _a.id, scheduler = _a.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        this.work = null;
	        this.state = null;
	        this.scheduler = null;
	    };
	    return FutureAction;
	}(Subscription_1.Subscription));
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(34);
	var Dispatcher = (function (_super) {
	    __extends(Dispatcher, _super);
	    function Dispatcher() {
	        _super.apply(this, arguments);
	    }
	    Dispatcher.prototype.dispatch = function (action) {
	        this.next(action);
	    };
	    return Dispatcher;
	}(Subject_1.Subject));
	exports.Dispatcher = Dispatcher;


/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var queue_1 = __webpack_require__(550);
	__webpack_require__(525);
	__webpack_require__(528);
	__webpack_require__(527);
	exports.ActionTypes = {
	    INIT: '@@ngrx/INIT'
	};
	var StoreBackend = (function () {
	    function StoreBackend(_dispatcher, _reducer, _initialState, _preMiddleware, _postMiddleware) {
	        if (_preMiddleware === void 0) { _preMiddleware = function (t) { return t; }; }
	        if (_postMiddleware === void 0) { _postMiddleware = function (t) { return t; }; }
	        this._dispatcher = _dispatcher;
	        this._reducer = _reducer;
	        this._initialState = _initialState;
	        this._preMiddleware = _preMiddleware;
	        this._postMiddleware = _postMiddleware;
	    }
	    StoreBackend.prototype._init = function () {
	        this._dispatcher.dispatch({ type: exports.ActionTypes.INIT });
	    };
	    StoreBackend.prototype.connect = function (nextCallbackFn) {
	        var _this = this;
	        this._dispatcher
	            .let(this._preMiddleware)
	            .observeOn(queue_1.queue)
	            .scan(function (state, action) { return _this._reducer(state, action); }, this._initialState)
	            .let(this._postMiddleware)
	            .subscribe(nextCallbackFn);
	        this._init();
	    };
	    StoreBackend.prototype.replaceReducer = function (reducer) {
	        this._reducer = reducer;
	        this._init();
	    };
	    return StoreBackend;
	}());
	exports.StoreBackend = StoreBackend;


/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BehaviorSubject_1 = __webpack_require__(513);
	__webpack_require__(202);
	__webpack_require__(521);
	var Store = (function (_super) {
	    __extends(Store, _super);
	    function Store(_dispatcher, _backend, initialState) {
	        var _this = this;
	        _super.call(this, initialState);
	        this._dispatcher = _dispatcher;
	        this._backend = _backend;
	        _backend.connect(function (state) { return _super.prototype.next.call(_this, state); });
	    }
	    Store.prototype.select = function (keyOrSelector) {
	        if (typeof keyOrSelector === 'string' ||
	            typeof keyOrSelector === 'number' ||
	            typeof keyOrSelector === 'symbol') {
	            return this.map(function (state) { return state[keyOrSelector]; }).distinctUntilChanged();
	        }
	        else if (typeof keyOrSelector === 'function') {
	            return this.map(keyOrSelector).distinctUntilChanged();
	        }
	        else {
	            throw new TypeError("Store@select Unknown Parameter Type: "
	                + ("Expected type of function or valid key type, got " + typeof keyOrSelector));
	        }
	    };
	    Store.prototype.getState = function () {
	        return this.value;
	    };
	    Store.prototype.dispatch = function (action) {
	        this._dispatcher.dispatch(action);
	    };
	    Store.prototype.next = function (action) {
	        this._dispatcher.next(action);
	    };
	    Store.prototype.error = function (error) {
	        this._dispatcher.error(error);
	    };
	    Store.prototype.replaceReducer = function (reducer) {
	        this._backend.replaceReducer(reducer);
	    };
	    return Store;
	}(BehaviorSubject_1.BehaviorSubject));
	exports.Store = Store;


/***/ },

/***/ 353:
/***/ function(module, exports) {

	"use strict";
	function combineReducers(reducers) {
	    var reducerKeys = Object.keys(reducers);
	    var finalReducers = {};
	    for (var i = 0; i < reducerKeys.length; i++) {
	        var key = reducerKeys[i];
	        if (typeof reducers[key] === 'function') {
	            finalReducers[key] = reducers[key];
	        }
	    }
	    var finalReducerKeys = Object.keys(finalReducers);
	    return function combination(state, action) {
	        if (state === void 0) { state = {}; }
	        var hasChanged = false;
	        var nextState = {};
	        for (var i = 0; i < finalReducerKeys.length; i++) {
	            var key = finalReducerKeys[i];
	            var reducer = finalReducers[key];
	            var previousStateForKey = state[key];
	            var nextStateForKey = reducer(previousStateForKey, action);
	            nextState[key] = nextStateForKey;
	            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	        }
	        return hasChanged ? nextState : state;
	    };
	}
	exports.combineReducers = combineReducers;
	exports.compose = function () {
	    var funcs = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        funcs[_i - 0] = arguments[_i];
	    }
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        if (funcs.length === 0) {
	            return args[0];
	        }
	        var last = funcs[funcs.length - 1];
	        var rest = funcs.slice(0, -1);
	        return rest.reduceRight(function (composed, f) { return f(composed); }, last.apply(void 0, args));
	    };
	};


/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var error_1 = __webpack_require__(81);
	var icon_registry_1 = __webpack_require__(326);
	var icon_registry_2 = __webpack_require__(326);
	exports.MdIconRegistry = icon_registry_2.MdIconRegistry;
	/** Exception thrown when an invalid icon name is passed to an md-icon component. */
	var MdIconInvalidNameError = (function (_super) {
	    __extends(MdIconInvalidNameError, _super);
	    function MdIconInvalidNameError(iconName) {
	        _super.call(this, "Invalid icon name: \"" + name + "\"");
	    }
	    return MdIconInvalidNameError;
	}(error_1.MdError));
	exports.MdIconInvalidNameError = MdIconInvalidNameError;
	/**
	 * Component to display an icon. It can be used in the following ways:
	 * - Specify the svgSrc input to load an SVG icon from a URL. The SVG content is directly inlined
	 *   as a child of the <md-icon> component, so that CSS styles can easily be applied to it.
	 *   The URL is loaded via an XMLHttpRequest, so it must be on the same domain as the page or its
	 *   server must be configured to allow cross-domain requests.
	 *   Example:
	 *     <md-icon svgSrc="assets/arrow.svg"></md-icon>
	 *
	 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
	 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
	 *   MdIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
	 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
	 *   Examples:
	 *     <md-icon svgIcon="left-arrow"></md-icon>
	 *     <md-icon svgIcon="animals:cat"></md-icon>
	 *
	 * - Use a font ligature as an icon by putting the ligature text in the content of the <md-icon>
	 *   component. By default the Material icons font is used as described at
	 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
	 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
	 *   desired font, or to an alias previously registered with MdIconRegistry.registerFontClassAlias.
	 *   Examples:
	 *     <md-icon>home</md-icon>
	 *     <md-icon fontSet="myfont">sun</md-icon>
	 *
	 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
	 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
	 *   CSS class which causes the glyph to be displayed via a :before selector, as in
	 *   https://fortawesome.github.io/Font-Awesome/examples/
	 *   Example:
	 *     <md-icon fontSet="fa" fontIcon="alarm"></md-icon>
	 */
	var MdIcon = (function () {
	    function MdIcon(_element, _renderer, _mdIconRegistry) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._mdIconRegistry = _mdIconRegistry;
	        this.hostAriaLabel = '';
	    }
	    /**
	     * Splits an svgIcon binding value into its icon set and icon name components.
	     * Returns a 2-element array of [(icon set), (icon name)].
	     * The separator for the two fields is ':'. If there is no separator, an empty
	     * string is returned for the icon set and the entire value is returned for
	     * the icon name. If the argument is falsy, returns an array of two empty strings.
	     * Throws a MdIconInvalidNameError if the name contains two or more ':' separators.
	     * Examples:
	     *   'social:cake' -> ['social', 'cake']
	     *   'penguin' -> ['', 'penguin']
	     *   null -> ['', '']
	     *   'a:b:c' -> (throws MdIconInvalidNameError)
	     */
	    MdIcon.prototype._splitIconName = function (iconName) {
	        if (!iconName) {
	            return ['', ''];
	        }
	        var parts = iconName.split(':');
	        switch (parts.length) {
	            case 1:
	                // Use default namespace.
	                return ['', parts[0]];
	            case 2:
	                return parts;
	            default:
	                throw new MdIconInvalidNameError(iconName);
	        }
	    };
	    /** @internal */
	    MdIcon.prototype.ngOnChanges = function (changes) {
	        var _this = this;
	        var changedInputs = Object.keys(changes);
	        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
	        if (changedInputs.indexOf('svgIcon') != -1 || changedInputs.indexOf('svgSrc') != -1) {
	            if (this.svgIcon) {
	                var _a = this._splitIconName(this.svgIcon), namespace = _a[0], iconName = _a[1];
	                this._mdIconRegistry.getNamedSvgIcon(iconName, namespace).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	            else if (this.svgSrc) {
	                this._mdIconRegistry.getSvgIconFromUrl(this.svgSrc).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	        }
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	        this._updateAriaLabel();
	    };
	    /** @internal */
	    MdIcon.prototype.ngOnInit = function () {
	        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
	        // e.g. <md-icon>arrow</md-icon>. In this case we need to add a CSS class for the default font.
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	    };
	    /** @internal */
	    MdIcon.prototype.ngAfterViewChecked = function () {
	        // Update aria label here because it may depend on the projected text content.
	        // (e.g. <md-icon>home</md-icon> should use 'home').
	        this._updateAriaLabel();
	    };
	    MdIcon.prototype._updateAriaLabel = function () {
	        var ariaLabel = this._getAriaLabel();
	        if (ariaLabel) {
	            this._renderer.setElementAttribute(this._element.nativeElement, 'aria-label', ariaLabel);
	        }
	    };
	    MdIcon.prototype._getAriaLabel = function () {
	        // If the parent provided an aria-label attribute value, use it as-is. Otherwise look for a
	        // reasonable value from the alt attribute, font icon name, SVG icon name, or (for ligatures)
	        // the text content of the directive.
	        var label = this.hostAriaLabel ||
	            this.alt ||
	            this.fontIcon ||
	            this._splitIconName(this.svgIcon)[1];
	        if (label) {
	            return label;
	        }
	        // The "content" of an SVG icon is not a useful label.
	        if (this._usingFontIcon()) {
	            var text = this._element.nativeElement.textContent;
	            if (text) {
	                return text;
	            }
	        }
	        // TODO: Warn here in dev mode.
	        return null;
	    };
	    MdIcon.prototype._usingFontIcon = function () {
	        return !(this.svgIcon || this.svgSrc);
	    };
	    MdIcon.prototype._setSvgElement = function (svg) {
	        var layoutElement = this._element.nativeElement;
	        // Remove existing child nodes and add the new SVG element.
	        // We would use renderer.detachView(Array.from(layoutElement.childNodes)) here,
	        // but it fails in IE11: https://github.com/angular/angular/issues/6327
	        layoutElement.innerHTML = '';
	        this._renderer.projectNodes(layoutElement, [svg]);
	    };
	    MdIcon.prototype._updateFontIconClasses = function () {
	        if (!this._usingFontIcon()) {
	            return;
	        }
	        var elem = this._element.nativeElement;
	        var fontSetClass = this.fontSet ?
	            this._mdIconRegistry.classNameForFontAlias(this.fontSet) :
	            this._mdIconRegistry.getDefaultFontSetClass();
	        if (fontSetClass != this._previousFontSetClass) {
	            if (this._previousFontSetClass) {
	                this._renderer.setElementClass(elem, this._previousFontSetClass, false);
	            }
	            if (fontSetClass) {
	                this._renderer.setElementClass(elem, fontSetClass, true);
	            }
	            this._previousFontSetClass = fontSetClass;
	        }
	        if (this.fontIcon != this._previousFontIconClass) {
	            if (this._previousFontIconClass) {
	                this._renderer.setElementClass(elem, this._previousFontIconClass, false);
	            }
	            if (this.fontIcon) {
	                this._renderer.setElementClass(elem, this.fontIcon, true);
	            }
	            this._previousFontIconClass = this.fontIcon;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgSrc", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontSet", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "alt", void 0);
	    __decorate([
	        core_1.Input('aria-label'), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "hostAriaLabel", void 0);
	    MdIcon = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            template: '<ng-content></ng-content>',
	            selector: 'md-icon',
	            styles: ["/** The width/height of the icon element. */ /** This works because we're using ViewEncapsulation.None. If we used the default encapsulation, the selector would need to be \":host\". */ md-icon { background-repeat: no-repeat; display: inline-block; fill: currentColor; height: 24px; width: 24px; } "],
	            host: {
	                'role': 'img',
	            },
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, icon_registry_1.MdIconRegistry])
	    ], MdIcon);
	    return MdIcon;
	}());
	exports.MdIcon = MdIcon;
	exports.MD_ICON_DIRECTIVES = [MdIcon];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-IydvmmBU.tmp/0/components/icon/icon.js.map

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	// ```
	// app.ts
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// app.ts may be freely distributed under the MIT license
	// ```
	"use strict";
	// *src/app/app.ts*
	// This file contains the main class as well as the necessary
	// decorators for creating the primary `app` `component`
	/*
	 * Angular 2 decorators and services
	 */
	var core_1 = __webpack_require__(1);
	var router_deprecated_1 = __webpack_require__(95);
	var app_service_1 = __webpack_require__(126);
	var router_active_directive_1 = __webpack_require__(496);
	var home_1 = __webpack_require__(486);
	// Import NgFor directive
	var common_1 = __webpack_require__(24);
	// Import Todo component
	var todo_component_1 = __webpack_require__(497);
	// Import Recipes component
	var recipes_component_1 = __webpack_require__(492);
	/*
	 * App Component
	 * Top Level Component
	 */
	var App = (function () {
	    // Pass in our application `state`
	    // Alternative to using `redux`
	    function App(appState) {
	        this.appState = appState;
	        this.angularLogo = 'assets/img/angular-logo.png';
	        this.name = 'Angular 2 MEAN Webpack Starter';
	        this.url = 'https://twitter.com/datatype_void';
	    }
	    // Fire off upon initialization
	    App.prototype.ngOnInit = function () {
	        console.log('Initial App State', this.appState.state);
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            providers: [],
	            directives: [todo_component_1.Todo,
	                common_1.NgFor,
	                router_active_directive_1.RouterActive],
	            encapsulation: core_1.ViewEncapsulation.None,
	            pipes: [],
	            // Load our main `Sass` file into our `app` `component`
	            styleUrls: [__webpack_require__(719)],
	            template: "\n    <md-content>\n      <md-toolbar color=\"primary\">\n          <span>{{ name }}</span>\n          <span class=\"fill\"></span>\n          <button md-button router-active [routerLink]=\" ['Index'] \">\n            Index\n          </button>\n          <button md-button router-active [routerLink]=\" ['Home'] \">\n            Home\n          </button>\n          <button md-button router-active [routerLink]=\" ['Todo'] \">\n            Todo\n          </button>\n          <button md-button router-active [routerLink]=\" ['Recipes'] \">\n            Recipes\n          </button>\n          <button md-button router-active [routerLink]=\" ['About'] \">\n            About\n          </button>\n      </md-toolbar>\n\n      <md-progress-bar mode=\"indeterminate\" color=\"primary\" *ngIf=\"loading\">\n      </md-progress-bar>\n\n      <router-outlet></router-outlet>\n\n      <pre class=\"app-state\">this.appState.state = {{ appState.state | json }}</pre>\n\n      <footer>\n        <img [src]=\"angularLogo\" width=\"7%\">\n        <span>Angular 2 MEAN Webpack Starter by <a [href]=\"url\">@datatype_void</a></span>\n      </footer>\n    </md-content>\n  "
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true },
	            { path: '/home', name: 'Home', component: home_1.Home },
	            { path: '/todo', component: todo_component_1.Todo, name: 'Todo' },
	            { path: '/redux', component: recipes_component_1.Recipes, name: 'Recipes' },
	            // Async load a component using Webpack's require with
	            // es6-promise-loader and webpack `require`
	            { path: '/about', name: 'About', loader: function () { return __webpack_require__(504)('About'); } },
	        ]), 
	        __metadata('design:paramtypes', [app_service_1.AppState])
	    ], App);
	    return App;
	}());
	exports.App = App;
	/*
	 * For help or questions please contact us at @datatype_void on twitter
	 * or our chat on Slack at http://www.davidniciforovic.com/wp-login.php?action=slack-invitation
	 */
	

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(484));
	

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	/*
	 * Directive
	 * XLarge is a simple directive to show how one is made
	 */
	var XLarge = (function () {
	    function XLarge(element, renderer) {
	        // simple DOM manipulation to set font size to x-large
	        // `nativeElement` is the direct reference to the DOM element
	        // element.nativeElement.style.fontSize = 'x-large';
	        // for server/webworker support use the renderer
	        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
	    }
	    XLarge = __decorate([
	        core_1.Directive({
	            selector: '[x-large]' // using [ ] means selecting attributes
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], XLarge);
	    return XLarge;
	}());
	exports.XLarge = XLarge;
	

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var app_service_1 = __webpack_require__(126);
	var title_1 = __webpack_require__(487);
	var x_large_1 = __webpack_require__(483);
	var accordion_component_1 = __webpack_require__(339);
	var accordion_group_component_1 = __webpack_require__(495);
	// Import NgFor directive
	var common_1 = __webpack_require__(24);
	var Home = (function () {
	    // TypeScript public modifiers
	    function Home(appState, title) {
	        this.appState = appState;
	        this.title = title;
	        // Set our default values
	        this.localState = { value: '' };
	        this.isOpen = false;
	        this.groups = [
	            {
	                heading: 'Dynamic 1',
	                content: 'I am dynamic!'
	            },
	            {
	                heading: 'Dynamic 2',
	                content: 'Dynamic as well'
	            }
	        ];
	    }
	    Home.prototype.removeDynamic = function () {
	        this.groups.pop();
	    };
	    Home.prototype.ngOnInit = function () {
	        console.log('hello `Home` component');
	        // this.title.getData().subscribe(data => this.data = data);
	    };
	    Home.prototype.submitState = function (value) {
	        console.log('submitState', value);
	        this.appState.set('value', value);
	        this.localState.value = '';
	    };
	    Home = __decorate([
	        core_1.Component({
	            // The selector is what angular internally uses
	            // for `document.querySelectorAll(selector)` in our index.html
	            // where, in this case, selector is the string 'home'
	            selector: 'home',
	            // We need to tell Angular's Dependency Injection which providers are in our app.
	            providers: [
	                title_1.Title
	            ],
	            // We need to tell Angular's compiler which directives are in our template.
	            // Doing so will allow Angular to attach our behavior to an element
	            directives: [
	                x_large_1.XLarge,
	                accordion_component_1.Accordion,
	                accordion_group_component_1.AccordionGroup,
	                common_1.NgFor
	            ],
	            // We need to tell Angular's compiler which custom pipes are in our template.
	            pipes: [],
	            // Our list of styles in our component. We may add more to compose many styles together
	            styles: [__webpack_require__(505)],
	            // Every Angular template is first compiled by the browser before Angular runs it's compiler
	            template: __webpack_require__(506)
	        }), 
	        __metadata('design:paramtypes', [app_service_1.AppState, title_1.Title])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;
	

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(485));
	

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(488));
	

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(66);
	var Title = (function () {
	    function Title(http) {
	        this.http = http;
	        this.value = 'Angular 2';
	    }
	    Title.prototype.getData = function () {
	        console.log('Title#getData(): Get Data');
	        // return this.http.get('/assets/data.json')
	        // .map(res => res.json());
	        return {
	            value: 'Angular 2 MEAN Webpack Starter'
	        };
	    };
	    Title = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], Title);
	    return Title;
	}());
	exports.Title = Title;
	

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// App
	__export(__webpack_require__(482));
	__export(__webpack_require__(126));
	var app_service_2 = __webpack_require__(126);
	// Application wide providers
	exports.APP_PROVIDERS = [
	    app_service_2.AppState
	];
	//# Global Redux Stores
	//
	//** These `redux` `stores` are available in any template **
	// Import module to provide an app `store` for the life-cycle of the app
	var store_1 = __webpack_require__(206);
	// Import all of the files necessary for our `recipes` component
	var recipe_service_1 = __webpack_require__(338);
	var recipes_reducer_1 = __webpack_require__(493);
	var selected_recipe_reducer_1 = __webpack_require__(494);
	//# Application Redux Stores
	//
	//** Redux stores for use with our Angular 2 app **
	exports.APP_STORES = [
	    // These are the primary consumers of our app store
	    recipe_service_1.RecipeService,
	    // Inititialize app store available to entire app
	    // and pass in our reducers.
	    // Notice that we are passing in an object that matches the
	    // `AppStore` interface
	    store_1.provideStore({ recipes: recipes_reducer_1.recipes, selectedRecipe: selected_recipe_reducer_1.selectedRecipe })
	];
	

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	// ```
	// recipes.component.js
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// recipes.component.js may be freely distributed under the MIT license
	// ```
	"use strict";
	// # Recipes Component
	var core_1 = __webpack_require__(1);
	var rating_component_1 = __webpack_require__(337);
	var RecipeDetails = (function () {
	    function RecipeDetails() {
	        // Allow the user to save/delete a `recipe or cancel the
	        // operation. Flow events up from here.
	        this.saved = new core_1.EventEmitter();
	        this.cancelled = new core_1.EventEmitter();
	    }
	    Object.defineProperty(RecipeDetails.prototype, "_recipe", {
	        // Assign our `recipe` to a locally scoped property
	        // Perform additional logic on every update via ES6 setter
	        // Create a copy of `_recipe` and assign it to `this.selectedRecipe`
	        // which we will use to bind our form to
	        set: function (value) {
	            if (value)
	                this.originalTitle = value.title;
	            this.selectedRecipe = Object.assign({}, value);
	            // DEBUG
	            console.log('this.selectedRecipe: ');
	            console.log(this.selectedRecipe);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    // Whenever the user needs to add a new `tag`, push an
	    // empty `tag` object to the `tags` array on the
	    // `selectedRecipe`
	    RecipeDetails.prototype.newTag = function () {
	        // blank `tag` object
	        var tag = {
	            name: ''
	        };
	        // Check to see if the `tags` array exists before
	        // attempting to push a `tag` to it
	        if (!this.selectedRecipe.tags)
	            this.selectedRecipe.tags = [];
	        this.selectedRecipe.tags.push(tag);
	    };
	    // Whenever the user needs to add a new `ingredient`, push an
	    // empty `ingredient` object to the `ingredient` array on the
	    // `selectedRecipe`
	    RecipeDetails.prototype.newIngredient = function () {
	        // blank `ingredient` object
	        var ingredient = {
	            amount: '',
	            unit: '',
	            name: ''
	        };
	        // Check to see if the `ingredients` array exists before
	        // attempting to push an `ingredient` to it
	        if (!this.selectedRecipe.ingredients)
	            this.selectedRecipe.ingredients = [];
	        this.selectedRecipe.ingredients.push(ingredient);
	    };
	    // Whenever the user needs to add a new `direction`, push an
	    // empty `direction` object to the `direction` array on the
	    // `selectedRecipe`
	    RecipeDetails.prototype.newDirection = function () {
	        // blank `direction` object
	        var direction = {
	            step: ''
	        };
	        // Check to see if the `directions` array exists before
	        // attempting to push a `direction` to it
	        if (!this.selectedRecipe.directions)
	            this.selectedRecipe.directions = [];
	        this.selectedRecipe.directions.push(direction);
	    };
	    RecipeDetails.prototype.onUpdate = function (value) {
	        // Set the value of the selected recipe's rating to the
	        // value passed up from the `rating` component
	        this.selectedRecipe.rating = value;
	    };
	    RecipeDetails.prototype.deleteTag = function (tag) {
	        // loop through all of the `tags` in the `selectedRecipe`
	        for (var i = 0; i < this.selectedRecipe.tags.length; i++) {
	            // if the `tag` at the current index matches that of the one
	            // the user is trying to delete
	            if (this.selectedRecipe.tags[i] === tag) {
	                // delete the `tag` at the current index
	                this.selectedRecipe.tags.splice(i, 1);
	            }
	        }
	    };
	    RecipeDetails.prototype.deleteIngredient = function (ingredient) {
	        // loop through all of the `ingredients` in the `selectedRecipe`
	        for (var i = 0; i < this.selectedRecipe.ingredients.length; i++) {
	            // if the `ingredient` at the current index matches that of the one
	            // the user is trying to delete
	            if (this.selectedRecipe.ingredients[i] === ingredient) {
	                // delete the `ingredient` at the current index
	                this.selectedRecipe.ingredients.splice(i, 1);
	            }
	        }
	    };
	    RecipeDetails.prototype.deleteDirection = function (step) {
	        // loop through all of the `directions` in the `selectedRecipe`
	        for (var i = 0; i < this.selectedRecipe.directions.length; i++) {
	            // if the `direction` at the current index matches that of the one
	            // the user is trying to delete
	            if (this.selectedRecipe.directions[i] === step) {
	                // delete the `direction` at the current index
	                this.selectedRecipe.directions.splice(i, 1);
	            }
	        }
	    };
	    __decorate([
	        core_1.Input('recipe'), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], RecipeDetails.prototype, "_recipe", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], RecipeDetails.prototype, "saved", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], RecipeDetails.prototype, "cancelled", void 0);
	    RecipeDetails = __decorate([
	        core_1.Component({
	            selector: 'recipe-detail',
	            template: __webpack_require__(508),
	            directives: [rating_component_1.Rating]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RecipeDetails);
	    return RecipeDetails;
	}());
	exports.RecipeDetails = RecipeDetails;
	

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	// ```
	// recipe-list.component.js
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// recipe-list.component.js may be freely distributed under the MIT license
	// ```
	"use strict";
	// # Recipe List
	var core_1 = __webpack_require__(1);
	var rating_component_1 = __webpack_require__(337);
	var RecipeList = (function () {
	    function RecipeList() {
	        // Two event outputs for when a recipe is selected or deleted
	        this.selected = new core_1.EventEmitter();
	        this.deleted = new core_1.EventEmitter();
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], RecipeList.prototype, "recipes", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], RecipeList.prototype, "selected", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], RecipeList.prototype, "deleted", void 0);
	    RecipeList = __decorate([
	        core_1.Component({
	            selector: 'recipe-list',
	            template: __webpack_require__(509),
	            directives: [rating_component_1.Rating]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RecipeList);
	    return RecipeList;
	}());
	exports.RecipeList = RecipeList;
	

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	// ```
	// recipes.component.js
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// recipes.component.js may be freely distributed under the MIT license
	// ```
	"use strict";
	// # Recipes Component
	var core_1 = __webpack_require__(1);
	var store_1 = __webpack_require__(206);
	var recipe_service_1 = __webpack_require__(338);
	var recipe_details_component_1 = __webpack_require__(490);
	var recipe_list_component_1 = __webpack_require__(491);
	var Recipes = (function () {
	    function Recipes(recipeService, store) {
	        this.recipeService = recipeService;
	        this.store = store;
	        // Bind to the `recipes` observable on `RecipeService`
	        this.recipes = recipeService.recipes;
	        // Bind the `selectedRecipe` observable from the store
	        this.selectedRecipe = store.select('selectedRecipe');
	        // DEBUG
	        this.selectedRecipe.subscribe(function (v) { return console.log(v); });
	        // `recipeService.loadRecipes` dispatches the `ADD_RECIPES` event
	        // to our store which in turn updates the `recipes` collection
	        recipeService.loadRecipes();
	    }
	    Recipes.prototype.selectRecipe = function (recipe) {
	        this.store.dispatch({
	            type: 'SELECT_RECIPE',
	            payload: recipe
	        });
	    };
	    Recipes.prototype.deleteRecipe = function (recipe) {
	        this.recipeService.deleteRecipe(recipe);
	    };
	    Recipes.prototype.resetRecipe = function () {
	        var emptyRecipe = {
	            _id: null,
	            tags: [],
	            title: '',
	            description: '',
	            rating: null,
	            creator: '',
	            ingredients: [],
	            directions: []
	        };
	        this.store.dispatch({
	            type: 'SELECT_RECIPE',
	            payload: emptyRecipe
	        });
	    };
	    Recipes.prototype.saveRecipe = function (recipe) {
	        this.recipeService.saveRecipe(recipe);
	        this.resetRecipe();
	    };
	    Recipes = __decorate([
	        core_1.Component({
	            selector: 'recipes',
	            providers: [],
	            template: __webpack_require__(510),
	            directives: [recipe_list_component_1.RecipeList, recipe_details_component_1.RecipeDetails],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [recipe_service_1.RecipeService, store_1.Store])
	    ], Recipes);
	    return Recipes;
	}());
	exports.Recipes = Recipes;
	

/***/ },

/***/ 493:
/***/ function(module, exports) {

	// ```
	// recipes.reducer.js
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// recipes.reducer.js may be freely distributed under the MIT license
	// ```
	"use strict";
	// # Redux reducer for `recipes`
	// A traditional `reducer` is a function which takes a `state`
	// object and an action to perform.
	// `ngrx` reducers work differently:
	//   * the second parameter is an object with the type of
	//     action to perform and the payload for that action
	// The `recipes` reducer performs actions on our list of `recipes`
	// Notice that we set `state` to a default value to initialize
	// smoothly
	exports.recipes = function (state, _a) {
	    if (state === void 0) { state = []; }
	    var type = _a.type, payload = _a.payload;
	    // DEBUG
	    console.log('Recipes reducer hit! type: ');
	    console.log(type);
	    console.log('payload: ');
	    console.log(payload);
	    console.log('state: ');
	    console.log(state);
	    switch (type) {
	        // `ADD_RECIPES` returns whatever collection passed in as a
	        // new array
	        case 'ADD_RECIPES':
	            return payload;
	        // `CREATE_RECIPE` returns a new array by concatenating the
	        // existing recipe array with our new recipe
	        case 'CREATE_RECIPE':
	            return state.concat([payload]);
	        // `UPDATE_RECIPE` returns a new array by mapping to the current
	        // array, locating the recipe to update and cloning to create
	        // a new object using `Object.assign`
	        case 'UPDATE_RECIPE':
	            return state.map(function (recipe) {
	                return recipe._id === payload._id
	                    ? Object.assign({}, recipe, payload) : recipe;
	            });
	        // `DELETE_RECIPE` returns a new array by filtering out the
	        // `recipe` that we want to delete
	        case 'DELETE_RECIPE':
	            return state.filter(function (recipe) {
	                return recipe._id !== payload._id;
	            });
	        default:
	            return state;
	    }
	};
	

/***/ },

/***/ 494:
/***/ function(module, exports) {

	// ```
	// selected-recipe.reducer.js
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// selected-recipe.reducer.js may be freely distributed under the MIT license
	// ```
	"use strict";
	// # Redux interface/reducer for `recipes`
	// The `selected recipe` reducer handles the currently
	// selected recipe
	exports.selectedRecipe = function (state, _a) {
	    if (state === void 0) { state = null; }
	    var type = _a.type, payload = _a.payload;
	    // DEBUG
	    console.log('selected recipe reducer hit! type: ');
	    console.log(type);
	    console.log('payload: ');
	    console.log(payload);
	    console.log('state: ');
	    console.log(state);
	    switch (type) {
	        // When an `event` from our store is dispatched with an action
	        // type of `SELECT_RECIPE`, it will hit this switch case
	        case 'SELECT_RECIPE':
	            return payload;
	        default:
	            return state;
	    }
	};
	

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	// Import NgClass directive
	var common_1 = __webpack_require__(24);
	var accordion_component_1 = __webpack_require__(339);
	var AccordionGroup = (function () {
	    function AccordionGroup(accordion) {
	        this.accordion = accordion;
	        this._isOpen = false;
	        this.accordion.addGroup(this);
	    }
	    AccordionGroup.prototype.toggleOpen = function (event) {
	        event.preventDefault();
	        this.isOpen = !this.isOpen;
	    };
	    AccordionGroup.prototype.onDestroy = function () {
	        this.accordion.removeGroup(this);
	    };
	    Object.defineProperty(AccordionGroup.prototype, "isOpen", {
	        get: function () {
	            return this._isOpen;
	        },
	        set: function (value) {
	            this._isOpen = value;
	            if (value) {
	                this.accordion.closeOthers(this);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AccordionGroup = __decorate([
	        core_1.Component({
	            selector: 'accordion-group, [accordion-group]',
	            inputs: ['heading', 'isOpen'],
	            directives: [common_1.NgClass],
	            template: __webpack_require__(511)
	        }), 
	        __metadata('design:paramtypes', [accordion_component_1.Accordion])
	    ], AccordionGroup);
	    return AccordionGroup;
	}());
	exports.AccordionGroup = AccordionGroup;
	

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(4);
	var router_deprecated_1 = __webpack_require__(95);
	/*
	 * RouterActive dynamically finds the first element with routerLink and toggles the active class
	 *
	 * ## Use
	 *
	 * ```
	 * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
	 * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
	 * ```
	 */
	var RouterActive = (function () {
	    function RouterActive(router, element, renderer, routerLink, routerActiveAttr) {
	        this.router = router;
	        this.element = element;
	        this.renderer = renderer;
	        this.routerLink = routerLink;
	        this.routerActive = undefined;
	        this.routerActiveAttr = 'active';
	        this.routerActiveAttr = this._defaultAttrValue(routerActiveAttr);
	    }
	    RouterActive.prototype.ngOnInit = function () {
	        var _this = this;
	        this.routerLink.changes.subscribe(function () {
	            if (_this.routerLink.first) {
	                _this._updateClass();
	                _this._findRootRouter().subscribe(function () {
	                    _this._updateClass();
	                });
	            }
	        });
	    };
	    RouterActive.prototype._findRootRouter = function () {
	        var router = this.router;
	        while (lang_1.isPresent(router.parent)) {
	            router = router.parent;
	        }
	        return router;
	    };
	    RouterActive.prototype._updateClass = function () {
	        var active = this.routerLink.first.isRouteActive;
	        this.renderer.setElementClass(this.element.nativeElement, this._attrOrProp(), active);
	    };
	    RouterActive.prototype._defaultAttrValue = function (attr) {
	        return this.routerActiveAttr = attr || this.routerActiveAttr;
	    };
	    RouterActive.prototype._attrOrProp = function () {
	        return lang_1.isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], RouterActive.prototype, "routerActive", void 0);
	    RouterActive = __decorate([
	        core_1.Directive({
	            selector: '[router-active]'
	        }),
	        __param(3, core_1.Query(router_deprecated_1.RouterLink)),
	        __param(4, core_1.Optional()),
	        __param(4, core_1.Attribute('router-active')), 
	        __metadata('design:paramtypes', [router_deprecated_1.Router, core_1.ElementRef, core_1.Renderer, core_1.QueryList, String])
	    ], RouterActive);
	    return RouterActive;
	}());
	exports.RouterActive = RouterActive;
	

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var todo_service_1 = __webpack_require__(498);
	// We `import` `http` into our `TodoService` but we can only
	// specify providers within our component
	var http_1 = __webpack_require__(66);
	// Create metadata with the `@Component` decorator
	var Todo = (function () {
	    function Todo(todoService) {
	        var _this = this;
	        this.todoService = todoService;
	        // Initialize our `todoData.text` to an empty `string`
	        this.todoData = {
	            text: ''
	        };
	        this.todos = [];
	        console.log('Todo constructor go!');
	        //this.todos = [];
	        todoService.getAll()
	            .subscribe(function (res) {
	            // Populate our `todo` array with the `response` data
	            _this.todos = res;
	            // Reset `todo` input
	            _this.todoData.text = '';
	        });
	    }
	    Todo.prototype.createTodo = function () {
	        var _this = this;
	        this.todoService.createTodo(this.todoData)
	            .subscribe(function (res) {
	            // Populate our `todo` array with the `response` data
	            _this.todos = res;
	            // Reset `todo` input
	            _this.todoData.text = '';
	        });
	    };
	    Todo.prototype.deleteTodo = function (id) {
	        var _this = this;
	        this.todoService.deleteTodo(id)
	            .subscribe(function (res) {
	            // Populate our `todo` array with the `response` data
	            _this.todos = res;
	        });
	    };
	    Todo = __decorate([
	        core_1.Component({
	            // HTML tag for specifying this component
	            selector: 'todo',
	            // Let Angular 2 know about `Http` and `TodoService`
	            providers: http_1.HTTP_PROVIDERS.concat([todo_service_1.TodoService]),
	            template: __webpack_require__(512)
	        }), 
	        __metadata('design:paramtypes', [todo_service_1.TodoService])
	    ], Todo);
	    return Todo;
	}());
	exports.Todo = Todo;
	

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(66);
	// `Injectable` is usually used with `Dart` metadata
	// generation; it has no special meaning within `TypeScript`
	// This makes sure `TypeScript` emits the needed metadata
	// Reference : http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
	var TodoService = (function () {
	    // The `public` keyword denotes that the constructor parameter will
	    // be retained as a field.
	    // Reference: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#336-members
	    // Add `Http` type annotation to the `http` function argument
	    // Type annotations in TypeScript are used to record the
	    // intended contract of the function or variable.
	    // Reference: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3-types
	    // Here we intend the constructor function to be called with the
	    // `Http` parameter
	    function TodoService(http) {
	        this.http = http;
	    }
	    TodoService.prototype.getAll = function () {
	        return this.http.get('/api/todo')
	            .map(function (res) { return res.json(); });
	    };
	    TodoService.prototype.createTodo = function (data) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/todo', JSON.stringify(data), { headers: headers })
	            .map(function (res) { return res.json(); });
	    };
	    TodoService.prototype.deleteTodo = function (id) {
	        return this.http.delete("/api/todo/" + id)
	            .map(function (res) { return res.json(); });
	    };
	    TodoService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], TodoService);
	    return TodoService;
	}());
	exports.TodoService = TodoService;
	

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	//# Global Directives
	//
	//** These `directives` are available in any template **
	"use strict";
	var core_1 = __webpack_require__(1);
	// Angular 2 Router
	var router_deprecated_1 = __webpack_require__(95);
	// Angular 2 Material 2
	//
	// TODO(datatypevoid): replace with @angular2-material/all
	var angular2_material2_1 = __webpack_require__(340);
	// APPLICATION_DIRECTIVES
	//
	// directives that are global through out the application
	exports.APPLICATION_DIRECTIVES = router_deprecated_1.ROUTER_DIRECTIVES.concat(angular2_material2_1.MATERIAL_DIRECTIVES);
	exports.DIRECTIVES = [
	    { provide: core_1.PLATFORM_DIRECTIVES, multi: true, useValue: exports.APPLICATION_DIRECTIVES }
	];
	

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(499));
	__export(__webpack_require__(501));
	__export(__webpack_require__(502));
	

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	//# Global Pipes
	//
	//** These `pipes` are available in any template **
	"use strict";
	var core_1 = __webpack_require__(1);
	//# APPLICATION_PIPES
	//
	//** Pipes that are global throughout our application **
	exports.APPLICATION_PIPES = [];
	exports.PIPES = [
	    { provide: core_1.PLATFORM_PIPES, multi: true, useValue: exports.APPLICATION_PIPES }
	];
	

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	//# Global Providers
	//
	//** These `providers` are available in any template **
	"use strict";
	// Angular 2
	var common_1 = __webpack_require__(24);
	// Angular 2 Http
	var http_1 = __webpack_require__(66);
	// Angular 2 Router
	var router_deprecated_1 = __webpack_require__(95);
	// Angular 2 Material 2
	//
	// TODO:(datatypevoid): replace with @angular2-material/all
	var angular2_material2_1 = __webpack_require__(340);
	//# Application Providers/Directives/Pipes
	//
	//** providers/directives/pipes that only live in our browser environment **
	exports.APPLICATION_PROVIDERS = common_1.FORM_PROVIDERS.concat(http_1.HTTP_PROVIDERS, angular2_material2_1.MATERIAL_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS, [
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
	]);
	exports.PROVIDERS = exports.APPLICATION_PROVIDERS.slice();
	

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Angular 2
	var core_1 = __webpack_require__(1);
	// Environment Providers
	var PROVIDERS = [];
	if (false) {
	    // Production
	    core_1.enableProdMode();
	    PROVIDERS = PROVIDERS.slice();
	}
	else {
	    // Development
	    PROVIDERS = PROVIDERS.slice();
	}
	exports.ENV_PROVIDERS = PROVIDERS.slice();
	

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(1, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(385)[namespace]);
	      } else {
	        resolve(__webpack_require__(385));
	      }
	    });
	  });
	}

/***/ },

/***/ 505:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 506:
/***/ function(module, exports) {

	module.exports = "<div class=\"card-container\">\n  <md-card x-large class=\"sample-content\">Your Content Here</md-card>\n  <md-card>\n    <md-card-title>Local State</md-card-title>\n    <md-card-content>\n\n      <form (ngSubmit)=\"submitState(localState.value)\" autocomplete=\"off\">\n\n        <md-input\n          placeholder=\"Submit Local State to App State\"\n          [value]=\"localState.value\"\n          (input)=\"localState.value = $event.target.value\"\n          autofocus>\n        </md-input>\n\n        <button md-raised-button color=\"primary\">Submit Value</button>\n      </form>\n      <!--\n        <input type=\"text\" [value]=\"localState.value\" (input)=\"localState.value = $event.target.value\" autofocus>\n        Rather than wiring up two-way data-binding ourselves with [value] and (input)\n        we can use Angular's [(ngModel)] syntax\n        <input type=\"text\" [(ngModel)]=\"localState.value\" autofocus>\n      -->\n\n      <pre>this.localState = {{ localState | json }}</pre>\n\n    </md-card-content>\n  </md-card>\n\n  <md-card>\n    <p>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"removeDynamic()\">\n        Remove last dynamic\n      </button>\n    </p>\n\n    <accordion close-others=\"true\">\n      <accordion-group heading=\"This is the header\" is-open=\"true\">\n        This is the content\n      </accordion-group>\n      <accordion-group [heading]=\"group.heading\" *ngFor=\"let group of groups\">\n        {{group.content}}\n      </accordion-group>\n      <accordion-group heading=\"Another group\" [is-open]=\"isOpen\">\n        More content\n      </accordion-group>\n    </accordion>\n  </md-card>\n\n</div>\n"

/***/ },

/***/ 507:
/***/ function(module, exports) {

	module.exports = "<span tabindex=\"0\">\n  <template ngFor [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < rate ? '*' : ' ' }})</span>\n    <i class=\"glyphicon\"\n      [ngClass]=\"index < rate ? 'glyphicon-star' : 'glyphicon-star-empty'\"\n      (click)=\"update(index + 1)\">\n    </i>\n  </template>\n</span>\n"

/***/ },

/***/ 508:
/***/ function(module, exports) {

	module.exports = "<div class=\"recipe-card\">\n  <div>\n    <h2 *ngIf=\"selectedRecipe._id\">Editing {{originalTitle}}</h2>\n    <h2 *ngIf=\"!selectedRecipe._id\">Create New Recipe</h2>\n  </div>\n  <div>\n    <form novalidate>\n        <div>\n          <label>Recipe Title</label>\n          <input [(ngModel)]=\"selectedRecipe.title\"\n            placeholder=\"Enter a title\" type=\"text\">\n        </div>\n        <div>\n          <label>Tags</label>\n          <button (click)=\"newTag()\">\n              Add new tag\n          </button>\n          <div *ngFor=\"let tag of selectedRecipe.tags\">\n            <input [(ngModel)]=\"tag.name\" placeholder=\"Enter a tag\"\n            type=\"text\">\n            <button (click)=\"deleteTag(tag)\">\n              X\n            </button>\n          </div>\n        </div>\n        <div>\n          <label>Description</label>\n          <input [(ngModel)]=\"selectedRecipe.description\"\n            placeholder=\"Enter a description\" type=\"text\">\n        </div>\n        <div>\n          <label>Rating</label>\n          <rating [interactive]=\"true\" [rate]=\"selectedRecipe.rating\"\n            (updateRate)=\"onUpdate($event)\"></rating>\n          <input [(ngModel)]=\"selectedRecipe.rating\"\n            placeholder=\"Enter a rating\" type=\"text\">\n        </div>\n        <div>\n          <label>Creator</label>\n          <input [(ngModel)]=\"selectedRecipe.creator\"\n            placeholder=\"Enter a username\" type=\"text\">\n        </div>\n        <div>\n          <label>Ingredients</label>\n          <button (click)=\"newIngredient()\">\n              Add an Ingredient <i class=\"glyphicon glyphicon-plus\"></i>\n          </button>\n          <div *ngFor=\"let ingredient of selectedRecipe.ingredients\">\n            <input [(ngModel)]=\"ingredient.amount\"\n              placeholder=\"Amount?\" type=\"text\">\n            <input [(ngModel)]=\"ingredient.unit\"\n              placeholder=\"Units?\" type=\"text\">\n            <input [(ngModel)]=\"ingredient.name\"\n              placeholder=\"Name?\" type=\"text\">\n            <i (click)=\"deleteIngredient(ingredient)\"\n              class=\"glyphicon glyphicon-remove\">\n            </i>\n          </div>\n        </div>\n        <div>\n          <label>Directions</label>\n          <button (click)=\"newDirection()\">\n              Add a Step in the Process\n          </button>\n          <div *ngFor=\"let direction of selectedRecipe.directions\">\n            <input [(ngModel)]=\"direction.step\"\n              placeholder=\"Enter a step\" type=\"text\">\n            <button (click)=\"deleteDirection(step)\">\n              X\n            </button>\n          </div>\n        </div>\n    </form>\n  </div>\n  <div>\n      <button type=\"submit\" (click)=\"cancelled.emit(selectedRecipe)\">\n        Cancel\n      </button>\n      <button type=\"submit\" (click)=\"saved.emit(selectedRecipe)\">\n        Save\n      </button>\n  </div>\n</div>\n"

/***/ },

/***/ 509:
/***/ function(module, exports) {

	module.exports = "<div *ngFor=\"let recipe of recipes\" (click)=\"selected.emit(recipe)\"\n  class=\"recipe-card\">\n  <div>\n    <h2>{{recipe.title}}</h2>\n  </div>\n  <ul class=\"list-inline\">\n    <li *ngFor=\"let tag of recipe.tags\">\n      <span class=\"label label-warning\">\n        #{{tag.name}}\n      </span>\n    </li>\n  </ul>\n  <div>\n    <rating [interactive]=\"false\" [rate]=\"recipe.rating\"></rating>\n    {{recipe.rating}}\n  </div>\n  <div>\n    {{recipe.creator}}\n  </div>\n  <div>\n    {{recipe.description}}\n  </div>\n  <ul>\n    <li *ngFor=\"let ingredient of recipe.ingredients\">\n      {{ ingredient.amount }} {{ ingredient.unit}} {{ ingredient.name }}\n    </li>\n  </ul>\n  <ol>\n    <li *ngFor=\"let direction of recipe.directions\">\n      {{ direction.step }}\n    </li>\n  </ol>\n  <div>\n    <button (click)=\"deleted.emit(recipe); $event.stopPropagation();\">\n      <i>close</i>\n    </button>\n  </div>\n</div>\n"

/***/ },

/***/ 510:
/***/ function(module, exports) {

	module.exports = "<div>\n  <recipe-list [recipes]=\"recipes | async\"\n    (selected)=\"selectRecipe($event)\" (deleted)=\"deleteRecipe($event)\">\n  </recipe-list>\n</div>\n<div>\n  <recipe-detail\n    (saved)=\"saveRecipe($event)\" (cancelled)=\"resetRecipe($event)\"\n    [recipe]=\"selectedRecipe | async\">Pick your Fancy:</recipe-detail>\n\n</div>\n"

/***/ },

/***/ 511:
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\" [ngClass]=\"{'panel-open': isOpen}\">\n  <div class=\"panel-heading\" (click)=\"toggleOpen($event)\">\n    <h4 class=\"panel-title\">\n      <a href tabindex=\"0\"><span>{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class=\"panel-collapse\" [hidden]=\"!isOpen\">\n    <div class=\"panel-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 512:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n\n  <!-- HEADER AND TODO COUNT -->\n  <div class=\"jumbotron text-center\">\n      <h1>Todo <span class=\"label label-info\">{{todos.length}}</span></h1>\n  </div>\n\n  <!-- TODO LIST -->\n  <div id=\"todo-list\" class=\"row\">\n      <div class=\"col-sm-4 col-sm-offset-4\">\n\n          <!-- LOOP OVER THE TODOS IN $scope.todos -->\n          <div class=\"checkbox\" *ngFor=\"let todo of todos\">\n              <label>\n                  <input type=\"checkbox\" (click)=\"deleteTodo(todo._id)\" bind-checked=\"false\">\n                  {{ todo.text }}\n              </label>\n          </div>\n\n      </div>\n  </div>\n\n  <!-- FORM TO CREATE TODOS -->\n  <div id=\"todo-form\" class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2 text-center\">\n          <form>\n              <div class=\"form-group\">\n\n                  <!-- BIND THIS VALUE TO todoData.text IN ANGULAR -->\n                  <input type=\"text\" class=\"form-control input-lg text-center\" placeholder=\"I want to buy a puppy that will love me forever\" [(ngModel)]=\"todoData.text\" required>\n              </div>\n\n              <!-- createToDo() WILL CREATE NEW TODOS -->\n              <button type=\"submit\" class=\"btn btn-primary btn-lg\"\n                (click)=\"createTodo()\">Add</button>\n          </form>\n      </div>\n  </div>\n\n</div>\n"

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(34);
	var throwError_1 = __webpack_require__(348);
	var ObjectUnsubscribedError_1 = __webpack_require__(345);
	/**
	 * @class BehaviorSubject<T>
	 */
	var BehaviorSubject = (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    BehaviorSubject.prototype.getValue = function () {
	        if (this.hasErrored) {
	            throwError_1.throwError(this.errorValue);
	        }
	        else if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	        else {
	            return this._value;
	        }
	    };
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype._next = function (value) {
	        _super.prototype._next.call(this, this._value = value);
	    };
	    BehaviorSubject.prototype._error = function (err) {
	        this.hasErrored = true;
	        _super.prototype._error.call(this, this.errorValue = err);
	    };
	    return BehaviorSubject;
	}(Subject_1.Subject));
	exports.BehaviorSubject = BehaviorSubject;
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    /**
	     * Given some {@link Observer} callbacks, deliver the value represented by the
	     * current Notification to the correctly corresponding callback.
	     * @param {function(value: T): void} next An Observer `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    /**
	     * Takes an Observer or its individual callback functions, and calls `observe`
	     * or `do` methods accordingly.
	     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	     * the `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    /**
	     * Returns a simple Observable that just delivers the notification represented
	     * by this Notification instance.
	     * @return {any}
	     */
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `next` from a
	     * given value.
	     * @param {T} value The `next` value.
	     * @return {Notification<T>} The "next" Notification representing the
	     * argument.
	     */
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `error` from a
	     * given error.
	     * @param {any} [err] The `error` exception.
	     * @return {Notification<T>} The "error" Notification representing the
	     * argument.
	     */
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `complete`.
	     * @return {Notification<any>} The valueless "complete" Notification.
	     */
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var forkJoin_1 = __webpack_require__(534);
	Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
	//# sourceMappingURL=forkJoin.js.map

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var of_1 = __webpack_require__(535);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var catch_1 = __webpack_require__(536);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var distinctUntilChanged_1 = __webpack_require__(537);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var do_1 = __webpack_require__(538);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var filter_1 = __webpack_require__(539);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var finally_1 = __webpack_require__(540);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var let_1 = __webpack_require__(541);
	Observable_1.Observable.prototype.let = let_1.letProto;
	Observable_1.Observable.prototype.letBind = let_1.letProto;
	//# sourceMappingURL=let.js.map

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var observeOn_1 = __webpack_require__(545);
	Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var scan_1 = __webpack_require__(546);
	Observable_1.Observable.prototype.scan = scan_1.scan;
	//# sourceMappingURL=scan.js.map

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var share_1 = __webpack_require__(547);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(7);
	var ScalarObservable_1 = __webpack_require__(533);
	var EmptyObservable_1 = __webpack_require__(342);
	var isScheduler_1 = __webpack_require__(555);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(7);
	var Subscriber_1 = __webpack_require__(28);
	var Subscription_1 = __webpack_require__(82);
	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(7);
	var EmptyObservable_1 = __webpack_require__(342);
	var isArray_1 = __webpack_require__(205);
	var subscribeToResult_1 = __webpack_require__(347);
	var OuterSubscriber_1 = __webpack_require__(341);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    /**
	     * @param sources
	     * @return {any}
	     * @static true
	     * @name forkJoin
	     * @owner Observable
	     */
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ForkJoinSubscriber = (function (_super) {
	    __extends(ForkJoinSubscriber, _super);
	    function ForkJoinSubscriber(destination, sources, resultSelector) {
	        _super.call(this, destination);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	        this.completed = 0;
	        this.haveValues = 0;
	        var len = sources.length;
	        this.total = len;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
	            if (innerSubscription) {
	                innerSubscription.outerIndex = i;
	                this.add(innerSubscription);
	            }
	        }
	    }
	    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        if (!innerSub._hasValue) {
	            innerSub._hasValue = true;
	            this.haveValues++;
	        }
	    };
	    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
	        var destination = this.destination;
	        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
	        var len = values.length;
	        if (!innerSub._hasValue) {
	            destination.complete();
	            return;
	        }
	        this.completed++;
	        if (this.completed !== len) {
	            return;
	        }
	        if (haveValues === len) {
	            var value = resultSelector ? resultSelector.apply(this, values) : values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return ForkJoinSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(7);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ForkJoinObservable_1 = __webpack_require__(532);
	exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(530);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(28);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	    };
	    return CatchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(28);
	var tryCatch_1 = __webpack_require__(349);
	var errorObject_1 = __webpack_require__(204);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(28);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(28);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(28);
	var Subscription_1 = __webpack_require__(82);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} finallySelector function to be called when source terminates.
	 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 * @method finally
	 * @owner Observable
	 */
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
	    };
	    return FinallyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },

/***/ 541:
/***/ function(module, exports) {

	"use strict";
	/**
	 * @param func
	 * @return {Observable<R>}
	 * @method let
	 * @owner Observable
	 */
	function letProto(func) {
	    return func(this);
	}
	exports.letProto = letProto;
	//# sourceMappingURL=let.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(531);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(28);
	var Notification_1 = __webpack_require__(515);
	/**
	 * @see {@link Notification}
	 *
	 * @param scheduler
	 * @param delay
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method observeOn
	 * @owner Observable
	 */
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (arg) {
	        var notification = arg.notification, destination = arg.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	exports.ObserveOnMessage = ObserveOnMessage;
	//# sourceMappingURL=observeOn.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(28);
	/**
	 * Applies an accumulation function over the source Observable, and returns each
	 * intermediate result, with an optional seed value.
	 *
	 * <span class="informal">It's like {@link reduce}, but emits the current
	 * accumulation whenever the source emits a value.</span>
	 *
	 * <img src="./img/scan.png" width="100%">
	 *
	 * Combines together all values emitted on the source, using an accumulator
	 * function that knows how to join a new source value into the accumulation from
	 * the past. Is similar to {@link reduce}, but emits the intermediate
	 * accumulations.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var ones = clicks.mapTo(1);
	 * var seed = 0;
	 * var count = ones.scan((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link reduce}
	 *
	 * @param {function(acc: R, value: T): R} accumulator The accumulator function
	 * called on each source value.
	 * @param {T|R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @method scan
	 * @owner Observable
	 */
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}
	exports.scan = scan;
	var ScanOperator = (function () {
	    function ScanOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ScanOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
	    };
	    return ScanOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ScanSubscriber = (function (_super) {
	    __extends(ScanSubscriber, _super);
	    function ScanSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.accumulatorSet = false;
	        this.seed = seed;
	        this.accumulator = accumulator;
	        this.accumulatorSet = typeof seed !== 'undefined';
	    }
	    Object.defineProperty(ScanSubscriber.prototype, "seed", {
	        get: function () {
	            return this._seed;
	        },
	        set: function (value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScanSubscriber.prototype._next = function (value) {
	        if (!this.accumulatorSet) {
	            this.seed = value;
	            this.destination.next(value);
	        }
	        else {
	            return this._tryNext(value);
	        }
	    };
	    ScanSubscriber.prototype._tryNext = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.seed, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	        this.seed = result;
	        this.destination.next(result);
	    };
	    return ScanSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=scan.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(544);
	var Subject_1 = __webpack_require__(34);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(343);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction() {
	        _super.apply(this, arguments);
	    }
	    QueueAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    return QueueAction;
	}(FutureAction_1.FutureAction));
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(548);
	var FutureAction_1 = __webpack_require__(343);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.active = false;
	        this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        this.scheduledId = null;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduledId) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        for (var action = null; action = actions.shift();) {
	            action.execute();
	            if (action.error) {
	                this.active = false;
	                throw action.error;
	            }
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	}());
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueScheduler_1 = __webpack_require__(549);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },

/***/ 555:
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var dispatcher_1 = __webpack_require__(350);
	var store_1 = __webpack_require__(352);
	var store_backend_1 = __webpack_require__(351);
	var utils_1 = __webpack_require__(353);
	exports.PRE_MIDDLEWARE = new core_1.OpaqueToken('ngrx/store/pre-middleware');
	exports.POST_MIDDLEWARE = new core_1.OpaqueToken('ngrx/store/post-middleware');
	exports.RESOLVED_PRE_MIDDLEWARE = new core_1.OpaqueToken('ngrx/store/resolved-pre-middleware');
	exports.RESOLVED_POST_MIDDLEWARE = new core_1.OpaqueToken('ngrx/store/resolved-post-middleware');
	exports.REDUCER = new core_1.OpaqueToken('ngrx/store/reducer');
	exports.INITIAL_STATE = new core_1.OpaqueToken('ngrx/store/initial-state');
	var dispatcherProvider = core_1.provide(dispatcher_1.Dispatcher, {
	    useFactory: function () {
	        return new dispatcher_1.Dispatcher();
	    }
	});
	var storeProvider = core_1.provide(store_1.Store, {
	    deps: [dispatcher_1.Dispatcher, store_backend_1.StoreBackend, exports.INITIAL_STATE],
	    useFactory: function (dispatcher, backend, initialState) {
	        return new store_1.Store(dispatcher, backend, initialState);
	    }
	});
	var storeBackendProvider = core_1.provide(store_backend_1.StoreBackend, {
	    deps: [dispatcher_1.Dispatcher, exports.REDUCER, exports.INITIAL_STATE, exports.RESOLVED_PRE_MIDDLEWARE, exports.RESOLVED_POST_MIDDLEWARE],
	    useFactory: function (dispatcher, reducer, initialState, preMiddleware, postMiddleware) {
	        return new store_backend_1.StoreBackend(dispatcher, reducer, initialState, preMiddleware, postMiddleware);
	    }
	});
	var resolvedPreMiddlewareProvider = core_1.provide(exports.RESOLVED_PRE_MIDDLEWARE, {
	    deps: [exports.PRE_MIDDLEWARE],
	    useFactory: function (middleware) {
	        return utils_1.compose.apply(void 0, middleware);
	    }
	});
	var resolvedPostMiddlewareProvider = core_1.provide(exports.RESOLVED_POST_MIDDLEWARE, {
	    deps: [exports.POST_MIDDLEWARE],
	    useFactory: function (middleware) {
	        return utils_1.compose.apply(void 0, middleware);
	    }
	});
	function provideStore(reducer, initialState) {
	    return [
	        core_1.provide(exports.REDUCER, {
	            useFactory: function () {
	                if (typeof reducer === 'function') {
	                    return reducer;
	                }
	                return utils_1.combineReducers(reducer);
	            }
	        }),
	        core_1.provide(exports.INITIAL_STATE, {
	            deps: [exports.REDUCER],
	            useFactory: function (reducer) {
	                if (initialState === undefined) {
	                    return reducer(undefined, { type: store_backend_1.ActionTypes.INIT });
	                }
	                return initialState;
	            }
	        }),
	        core_1.provide(exports.PRE_MIDDLEWARE, { multi: true, useValue: (function (T) { return T; }) }),
	        core_1.provide(exports.POST_MIDDLEWARE, { multi: true, useValue: (function (T) { return T; }) }),
	        dispatcherProvider,
	        storeProvider,
	        storeBackendProvider,
	        resolvedPreMiddlewareProvider,
	        resolvedPostMiddlewareProvider
	    ];
	}
	exports.provideStore = provideStore;
	function usePreMiddleware() {
	    var middleware = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        middleware[_i - 0] = arguments[_i];
	    }
	    return provideMiddlewareForToken(exports.PRE_MIDDLEWARE, middleware);
	}
	exports.usePreMiddleware = usePreMiddleware;
	function usePostMiddleware() {
	    var middleware = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        middleware[_i - 0] = arguments[_i];
	    }
	    return provideMiddlewareForToken(exports.POST_MIDDLEWARE, middleware);
	}
	exports.usePostMiddleware = usePostMiddleware;
	function createMiddleware(useFactory, deps) {
	    return core_1.provide(new core_1.OpaqueToken('@ngrx/store middleware'), {
	        deps: deps,
	        useFactory: useFactory
	    });
	}
	exports.createMiddleware = createMiddleware;
	function provideMiddlewareForToken(token, _middleware) {
	    function isProvider(t) {
	        return t instanceof core_1.Provider;
	    }
	    var provider = core_1.provide(token, {
	        multi: true,
	        deps: [core_1.Injector],
	        useFactory: function (injector) {
	            var middleware = _middleware.map(function (m) {
	                if (isProvider(m)) {
	                    return injector.get(m.token);
	                }
	                return m;
	            });
	            return utils_1.compose.apply(void 0, middleware);
	        }
	    });
	    return _middleware.filter(isProvider).concat([provider]);
	}
	exports.provideMiddlewareForToken = provideMiddlewareForToken;


/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var hmr_store_1 = __webpack_require__(129);
	// noop in parentNode
	// TODO: find a better way to noop
	var _env = typeof process !== 'undefined' &&
	    process &&
	    ({"ENV":"development","NODE_ENV":"development","HMR":false}) &&
	    (("development") ||
	        ("development"));
	var _dev = ((_env &&
	    typeof _env === 'string' &&
	    (_env.indexOf('dev') > -1)) ||
	    _env === undefined);
	function setDev(newDev) {
	    if (typeof newDev === 'string') {
	        return _dev = (newDev.indexOf('dev') > -1);
	    }
	    else if (typeof newDev === 'boolean') {
	        return _dev = newDev;
	    }
	    throw new Error('Please provide a string or boolean');
	}
	exports.setDev = setDev;
	function HmrState(namespaceOrConfig, config) {
	    function decoratorFactory(target, decoratedPropertyName, descriptor) {
	        if (!_dev) {
	            return descriptor;
	        }
	        var key = namespaceOrConfig || target.constructor.name + '#' + decoratedPropertyName;
	        hmr_store_1.HmrStore.select(key, function () { return hmr_store_1.HmrStore.get(key); });
	        Object.defineProperty(target, decoratedPropertyName, {
	            get: function () { return hmr_store_1.HmrStore.get(key); },
	            set: function (newValue) {
	                var currentValue = hmr_store_1.HmrStore.get(key);
	                if (!currentValue) {
	                    hmr_store_1.HmrStore._initialValues[key] = newValue;
	                }
	                else {
	                    newValue = Object.assign(newValue, currentValue);
	                }
	                return hmr_store_1.HmrStore.set(key, newValue);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return descriptor;
	    }
	    return decoratorFactory;
	}
	exports.HmrState = HmrState;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(384)))

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var hmr_store_1 = __webpack_require__(129);
	__export(__webpack_require__(560));
	__export(__webpack_require__(558));
	__export(__webpack_require__(129));
	function provideHmrState(initialState) {
	    if (initialState === void 0) { initialState = {}; }
	    return [
	        { provide: hmr_store_1.HMR_STATE, useValue: initialState },
	        { provide: hmr_store_1.HmrStore, useValue: hmr_store_1.HmrStore }
	    ];
	}
	exports.provideHmrState = provideHmrState;
	

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var hmr_store_1 = __webpack_require__(129);
	function hotModuleReplacement(bootloader, module, options) {
	    if (options === void 0) { options = {}; }
	    if (!module.hot) {
	        console.warn('Warning: please use webpack hot flag');
	        return document.addEventListener('DOMContentLoaded', function () { return bootloader(); });
	    }
	    hmr_store_1.HmrStore.dev = true;
	    var LOCALSTORAGE_KEY = options.LOCALSTORAGE_KEY || '@@WEBPACK_INITIAL_DATA';
	    var LOCAL = options.localStorage || false;
	    var TOKEN = options.storeToken || hmr_store_1.HmrStore;
	    var DISPOSE = options.globalDispose || 'WEBPACK_HMR_beforeunload';
	    var GET_STATE = options.getState || getState;
	    var DATA = options.data || module.hot.data && module.hot.data.state;
	    var COMPONENT_REF = null;
	    var disposed = false;
	    function getState(appState) {
	        var json = appState.toJSON();
	        if (LOCAL) {
	            console.time('localStorage');
	            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(appState));
	            console.timeEnd('localStorage');
	        }
	        return json;
	    }
	    console.log('DATA', DATA);
	    if (!DATA && LOCAL) {
	        try {
	            console.time('start localStorage');
	            DATA = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || DATA;
	            console.timeEnd('start localStorage');
	        }
	        catch (e) {
	            console.log('JSON.parse Error', e);
	        }
	    }
	    console.time('bootstrap');
	    if (document.readyState === 'complete') {
	        bootloader(DATA)
	            .then(function (cmpRef) { return COMPONENT_REF = cmpRef; })
	            .then((function (cmpRef) { return (console.timeEnd('bootstrap'), cmpRef); }));
	    }
	    else {
	        document.addEventListener('DOMContentLoaded', function () {
	            bootloader(DATA)
	                .then(function (cmpRef) { return COMPONENT_REF = cmpRef; })
	                .then((function (cmpRef) { return (console.timeEnd('bootstrap'), cmpRef); }));
	        });
	    }
	    function beforeunload(event) {
	        var injector = COMPONENT_REF.injector;
	        var appState;
	        if ('getOptional' in injector) {
	            appState = COMPONENT_REF.injector.getOptional(TOKEN) || TOKEN;
	        }
	        else {
	            appState = COMPONENT_REF.injector.get(TOKEN, TOKEN);
	        }
	        return GET_STATE(appState);
	    }
	    window[DISPOSE] = function () {
	        disposed = true;
	        window.removeEventListener('beforeunload', beforeunload);
	        if (LOCAL) {
	            localStorage.removeItem(LOCALSTORAGE_KEY);
	        }
	    };
	    module.hot.accept();
	    window.addEventListener('beforeunload', beforeunload);
	    module.hot.dispose(function (data) {
	        console.time('dispose');
	        var componentNode = COMPONENT_REF.location.nativeElement;
	        var newNode = document.createElement(componentNode.tagName);
	        // display none
	        var currentDisplay = newNode.style.display;
	        newNode.style.display = 'none';
	        var parentNode = componentNode.parentNode;
	        parentNode.insertBefore(newNode, componentNode);
	        var injector = COMPONENT_REF.injector;
	        var appState;
	        if ('getOptional' in injector) {
	            appState = COMPONENT_REF.injector.getOptional(TOKEN) || TOKEN;
	        }
	        else {
	            appState = COMPONENT_REF.injector.get(TOKEN, TOKEN);
	        }
	        var json = GET_STATE(appState, COMPONENT_REF);
	        data.state = json;
	        if ('destroy' in COMPONENT_REF) {
	            COMPONENT_REF.destroy();
	        }
	        else if ('dispose' in COMPONENT_REF) {
	            COMPONENT_REF.dispose();
	        }
	        newNode.style.display = currentDisplay;
	        if (!disposed) {
	            window.removeEventListener('beforeunload', beforeunload);
	        }
	        disposed = true;
	        console.timeEnd('dispose');
	    });
	}
	exports.hotModuleReplacement = hotModuleReplacement;
	

/***/ },

/***/ 713:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 719:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(201);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(714)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(201, function() {
				var newContent = __webpack_require__(201);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=main.map