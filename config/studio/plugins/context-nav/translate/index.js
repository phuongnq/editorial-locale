(function (React, ReactDOM, rxjs) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  function _extends() {
    _extends = Object.assign || function (target) {
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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });
  var propTypes_1 = propTypes.elementType;

  function toVal(mix) {
  	var k, y, str='';

  	if (typeof mix === 'string' || typeof mix === 'number') {
  		str += mix;
  	} else if (typeof mix === 'object') {
  		if (Array.isArray(mix)) {
  			for (k=0; k < mix.length; k++) {
  				if (mix[k]) {
  					if (y = toVal(mix[k])) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			}
  		} else {
  			for (k in mix) {
  				if (mix[k]) {
  					str && (str += ' ');
  					str += k;
  				}
  			}
  		}
  	}

  	return str;
  }

  function clsx () {
  	var i=0, tmp, x, str='';
  	while (i < arguments.length) {
  		if (tmp = arguments[i++]) {
  			if (x = toVal(tmp)) {
  				str && (str += ' ');
  				str += x;
  			}
  		}
  	}
  	return str;
  }

  function isPlainObject(item) {
    return item !== null && typeof item === 'object' && // TS thinks `item is possibly null` even though this was our first guard.
    // @ts-expect-error
    item.constructor === Object;
  }
  function deepmerge(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? _extends({}, target) : target;

    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach(key => {
        // Avoid prototype pollution
        if (key === '__proto__') {
          return;
        }

        if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
          // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
          output[key] = deepmerge(target[key], source[key], options);
        } else {
          output[key] = source[key];
        }
      });
    }

    return output;
  }

  /**
   * WARNING: Don't import this directly.
   * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
   * @param {number} code
   */
  function formatMuiErrorMessage(code) {
    // Apply babel-plugin-transform-template-literals in loose mode
    // loose mode is safe iff we're concatenating primitives
    // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

    /* eslint-disable prefer-template */
    let url = 'https://mui.com/production-error/?code=' + code;

    for (let i = 1; i < arguments.length; i += 1) {
      // rest params over-transpile for this case
      // eslint-disable-next-line prefer-rest-params
      url += '&args[]=' + encodeURIComponent(arguments[i]);
    }

    return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
    /* eslint-enable prefer-template */
  }

  // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
  //
  // A strict capitalization should uppercase the first letter of each word in the sentence.
  // We only handle the first word.
  function capitalize(string) {
    if (typeof string !== 'string') {
      throw new Error( formatMuiErrorMessage(7));
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Safe chained function.
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   */
  function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func) => {
      if (func == null) {
        return acc;
      }

      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    }, () => {});
  }

  // Corresponds to 10 frames at 60 Hz.
  // A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
  function debounce(func, wait = 166) {
    let timeout;

    function debounced(...args) {
      const later = () => {
        func.apply(this, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }

    debounced.clear = () => {
      clearTimeout(timeout);
    };

    return debounced;
  }

  function deprecatedPropType(validator, reason) {
    {
      return () => null;
    }
  }

  function isMuiElement(element, muiNames) {
    return /*#__PURE__*/React.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
  }

  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  function ownerWindow(node) {
    const doc = ownerDocument(node);
    return doc.defaultView || window;
  }

  function requirePropFactory(componentNameInError, Component) {
    {
      return () => null;
    } // eslint-disable-next-line react/forbid-foreign-prop-types
  }

  /**
   * TODO v5: consider making it private
   *
   * passes {value} to {ref}
   *
   * WARNING: Be sure to only call this inside a callback that is passed as a ref.
   * Otherwise, make sure to cleanup the previous {ref} if it changes. See
   * https://github.com/mui-org/material-ui/issues/13539
   *
   * Useful if you want to expose the ref of an inner component to the public API
   * while still using it inside the component.
   * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
   */
  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

  function useId(idOverride) {
    const [defaultId, setDefaultId] = React.useState(idOverride);
    const id = idOverride || defaultId;
    React.useEffect(() => {
      if (defaultId == null) {
        // Fallback to this default id when possible.
        // Use the random value for client-side rendering only.
        // We can't use it server-side.
        setDefaultId(`mui-${Math.round(Math.random() * 1e9)}`);
      }
    }, [defaultId]);
    return id;
  }

  function unsupportedProp(props, propName, componentName, location, propFullName) {
    {
      return null;
    }
  }

  /* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
  function useControlled({
    controlled,
    default: defaultProp,
    name,
    state = 'value'
  }) {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const {
      current: isControlled
    } = React.useRef(controlled !== undefined);
    const [valueState, setValue] = React.useState(defaultProp);
    const value = isControlled ? controlled : valueState;

    const setValueIfUncontrolled = React.useCallback(newValue => {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
    return [value, setValueIfUncontrolled];
  }

  /**
   * https://github.com/facebook/react/issues/14099#issuecomment-440013892
   */

  function useEventCallback(fn) {
    const ref = React.useRef(fn);
    useEnhancedEffect(() => {
      ref.current = fn;
    });
    return React.useCallback((...args) => // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, ref.current)(...args), []);
  }

  function useForkRef(refA, refB) {
    /**
     * This will create a new function if the ref props change and are defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior.
     */
    return React.useMemo(() => {
      if (refA == null && refB == null) {
        return null;
      }

      return refValue => {
        setRef(refA, refValue);
        setRef(refB, refValue);
      };
    }, [refA, refB]);
  }

  // based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
  let hadKeyboardEvent = true;
  let hadFocusVisibleRecently = false;
  let hadFocusVisibleRecentlyTimeout = null;
  const inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} node
   * @returns {boolean}
   */

  function focusTriggersKeyboardModality(node) {
    const {
      type,
      tagName
    } = node;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !node.readOnly) {
      return true;
    }

    if (node.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Keep track of our keyboard modality state with `hadKeyboardEvent`.
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * @param {KeyboardEvent} event
   */


  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   */


  function handlePointerDown() {
    hadKeyboardEvent = false;
  }

  function handleVisibilityChange() {
    if (this.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }

  function prepare(doc) {
    doc.addEventListener('keydown', handleKeyDown, true);
    doc.addEventListener('mousedown', handlePointerDown, true);
    doc.addEventListener('pointerdown', handlePointerDown, true);
    doc.addEventListener('touchstart', handlePointerDown, true);
    doc.addEventListener('visibilitychange', handleVisibilityChange, true);
  }

  function isFocusVisible(event) {
    const {
      target
    } = event;

    try {
      return target.matches(':focus-visible');
    } catch (error) {// Browsers not implementing :focus-visible will throw a SyntaxError.
      // We use our own heuristic for those browsers.
      // Rethrow might be better if it's not the expected error but do we really
      // want to crash if focus-visible malfunctioned?
    } // No need for validFocusTarget check. The user does that by attaching it to
    // focusable events only.


    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }

  function useIsFocusVisible() {
    const ref = React.useCallback(node => {
      if (node != null) {
        prepare(node.ownerDocument);
      }
    }, []);
    const isFocusVisibleRef = React.useRef(false);
    /**
     * Should be called if a blur event is fired
     */

    function handleBlurVisible() {
      // checking against potential state variable does not suffice if we focus and blur synchronously.
      // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
      // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
      // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
      // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
      if (isFocusVisibleRef.current) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
          hadFocusVisibleRecently = false;
        }, 100);
        isFocusVisibleRef.current = false;
        return true;
      }

      return false;
    }
    /**
     * Should be called if a blur event is fired
     */


    function handleFocusVisible(event) {
      if (isFocusVisible(event)) {
        isFocusVisibleRef.current = true;
        return true;
      }

      return false;
    }

    return {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref
    };
  }

  // A change of the browser zoom change the scrollbar size.
  // Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
  function getScrollbarSize(doc) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = doc.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }

  function composeClasses(slots, getUtilityClass, classes) {
    const output = {};
    Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    slot => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }

          acc.push(getUtilityClass(key));
        }

        return acc;
      }, []).join(' ');
    });
    return output;
  }

  /**
   * Determines if a given element is a DOM element name (i.e. not a React component).
   */
  function isHostComponent(element) {
    return typeof element === 'string';
  }

  const globalStateClassesMapping = {
    active: 'Mui-active',
    checked: 'Mui-checked',
    completed: 'Mui-completed',
    disabled: 'Mui-disabled',
    error: 'Mui-error',
    expanded: 'Mui-expanded',
    focused: 'Mui-focused',
    focusVisible: 'Mui-focusVisible',
    required: 'Mui-required',
    selected: 'Mui-selected'
  };
  function generateUtilityClass(componentName, slot) {
    const globalStateClass = globalStateClassesMapping[slot];
    return globalStateClass || `${componentName}-${slot}`;
  }

  function generateUtilityClasses(componentName, slots) {
    const result = {};
    slots.forEach(slot => {
      result[slot] = generateUtilityClass(componentName, slot);
    });
    return result;
  }

  function getBackdropUtilityClass(slot) {
    return generateUtilityClass('MuiBackdrop', slot);
  }
  const backdropUnstyledClasses = generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
  var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=React__default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
  function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
  });
  var reactJsxRuntime_production_min_1 = reactJsxRuntime_production_min.Fragment;
  var reactJsxRuntime_production_min_2 = reactJsxRuntime_production_min.jsx;
  var reactJsxRuntime_production_min_3 = reactJsxRuntime_production_min.jsxs;

  var jsxRuntime = createCommonjsModule(function (module) {

  {
    module.exports = reactJsxRuntime_production_min;
  }
  });
  var jsxRuntime_1 = jsxRuntime.jsx;
  var jsxRuntime_2 = jsxRuntime.jsxs;
  var jsxRuntime_3 = jsxRuntime.Fragment;

  const _excluded = ["classes", "className", "invisible", "component", "components", "componentsProps", "theme"];

  const useUtilityClasses = ownerState => {
    const {
      classes,
      invisible
    } = ownerState;
    const slots = {
      root: ['root', invisible && 'invisible']
    };
    return composeClasses(slots, getBackdropUtilityClass, classes);
  };

  const BackdropUnstyled = /*#__PURE__*/React.forwardRef(function BackdropUnstyled(props, ref) {
    const {
      classes: classesProp,
      className,
      invisible = false,
      component = 'div',
      components = {},
      componentsProps = {},

      /* eslint-disable react/prop-types */
      theme
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded);

    const ownerState = _extends({}, props, {
      classes: classesProp,
      invisible
    });

    const classes = useUtilityClasses(ownerState);
    const Root = components.Root || component;
    const rootProps = componentsProps.root || {};
    return /*#__PURE__*/jsxRuntime_1(Root, _extends({
      "aria-hidden": true
    }, rootProps, !isHostComponent(Root) && {
      as: component,
      ownerState: _extends({}, ownerState, rootProps.ownerState),
      theme
    }, {
      ref: ref
    }, other, {
      className: clsx(classes.root, rootProps.className, className)
    }));
  });

  function getContainer(container) {
    return typeof container === 'function' ? container() : container;
  }
  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   */


  const Portal = /*#__PURE__*/React.forwardRef(function Portal(props, ref) {
    const {
      children,
      container,
      disablePortal = false
    } = props;
    const [mountNode, setMountNode] = React.useState(null);
    const handleRef = useForkRef( /*#__PURE__*/React.isValidElement(children) ? children.ref : null, ref);
    useEnhancedEffect(() => {
      if (!disablePortal) {
        setMountNode(getContainer(container) || document.body);
      }
    }, [container, disablePortal]);
    useEnhancedEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(ref, mountNode);
        return () => {
          setRef(ref, null);
        };
      }

      return undefined;
    }, [ref, mountNode, disablePortal]);

    if (disablePortal) {
      if ( /*#__PURE__*/React.isValidElement(children)) {
        return /*#__PURE__*/React.cloneElement(children, {
          ref: handleRef
        });
      }

      return children;
    }

    return mountNode ? /*#__PURE__*/ReactDOM.createPortal(children, mountNode) : mountNode;
  });

  // Is a vertical scrollbar displayed?
  function isOverflowing(container) {
    const doc = ownerDocument(container);

    if (doc.body === container) {
      return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
    }

    return container.scrollHeight > container.clientHeight;
  }

  function ariaHidden(element, show) {
    if (show) {
      element.setAttribute('aria-hidden', 'true');
    } else {
      element.removeAttribute('aria-hidden');
    }
  }

  function getPaddingRight(element) {
    return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
  }

  function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
    const blacklist = [mountElement, currentElement, ...elementsToExclude];
    const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
    [].forEach.call(container.children, element => {
      if (blacklist.indexOf(element) === -1 && blacklistTagNames.indexOf(element.tagName) === -1) {
        ariaHidden(element, show);
      }
    });
  }

  function findIndexOf(items, callback) {
    let idx = -1;
    items.some((item, index) => {
      if (callback(item)) {
        idx = index;
        return true;
      }

      return false;
    });
    return idx;
  }

  function handleContainer(containerInfo, props) {
    const restoreStyle = [];
    const container = containerInfo.container;

    if (!props.disableScrollLock) {
      if (isOverflowing(container)) {
        // Compute the size before applying overflow hidden to avoid any scroll jumps.
        const scrollbarSize = getScrollbarSize(ownerDocument(container));
        restoreStyle.push({
          value: container.style.paddingRight,
          property: 'padding-right',
          el: container
        }); // Use computed style, here to get the real padding to add our scrollbar width.

        container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`; // .mui-fixed is a global helper.

        const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
        [].forEach.call(fixedElements, element => {
          restoreStyle.push({
            value: element.style.paddingRight,
            property: 'padding-right',
            el: element
          });
          element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
        });
      } // Improve Gatsby support
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      const scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
      // screensize shrink.

      restoreStyle.push({
        value: scrollContainer.style.overflow,
        property: 'overflow',
        el: scrollContainer
      }, {
        value: scrollContainer.style.overflowX,
        property: 'overflow-x',
        el: scrollContainer
      }, {
        value: scrollContainer.style.overflowY,
        property: 'overflow-y',
        el: scrollContainer
      });
      scrollContainer.style.overflow = 'hidden';
    }

    const restore = () => {
      restoreStyle.forEach(({
        value,
        el,
        property
      }) => {
        if (value) {
          el.style.setProperty(property, value);
        } else {
          el.style.removeProperty(property);
        }
      });
    };

    return restore;
  }

  function getHiddenSiblings(container) {
    const hiddenSiblings = [];
    [].forEach.call(container.children, element => {
      if (element.getAttribute('aria-hidden') === 'true') {
        hiddenSiblings.push(element);
      }
    });
    return hiddenSiblings;
  }

  /**
   * @ignore - do not document.
   *
   * Proper state management for containers and the modals in those containers.
   * Simplified, but inspired by react-overlay's ModalManager class.
   * Used by the Modal to ensure proper styling of containers.
   */
  class ModalManager {
    constructor() {
      this.containers = void 0;
      this.modals = void 0;
      this.modals = [];
      this.containers = [];
    }

    add(modal, container) {
      let modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      const hiddenSiblings = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
      const containerIndex = findIndexOf(this.containers, item => item.container === container);

      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.containers.push({
        modals: [modal],
        container,
        restore: null,
        hiddenSiblings
      });
      return modalIndex;
    }

    mount(modal, props) {
      const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
      const containerInfo = this.containers[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }

    remove(modal) {
      const modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
      const containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }

    isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }

  }

  /* eslint-disable @typescript-eslint/naming-convention, consistent-return, jsx-a11y/no-noninteractive-tabindex */
  const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');

  function getTabIndex(node) {
    const tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

    if (!Number.isNaN(tabindexAttr)) {
      return tabindexAttr;
    } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
    // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    //  yet they are still part of the regular tab order; in FF, they get a default
    //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    //  order, consider their tab index to be 0.


    if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
      return 0;
    }

    return node.tabIndex;
  }

  function isNonTabbableRadio(node) {
    if (node.tagName !== 'INPUT' || node.type !== 'radio') {
      return false;
    }

    if (!node.name) {
      return false;
    }

    const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);

    let roving = getRadio(`[name="${node.name}"]:checked`);

    if (!roving) {
      roving = getRadio(`[name="${node.name}"]`);
    }

    return roving !== node;
  }

  function isNodeMatchingSelectorFocusable(node) {
    if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
      return false;
    }

    return true;
  }

  function defaultGetTabbable(root) {
    const regularTabNodes = [];
    const orderedTabNodes = [];
    Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
      const nodeTabIndex = getTabIndex(node);

      if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
        return;
      }

      if (nodeTabIndex === 0) {
        regularTabNodes.push(node);
      } else {
        orderedTabNodes.push({
          documentOrder: i,
          tabIndex: nodeTabIndex,
          node
        });
      }
    });
    return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
  }

  function defaultIsEnabled() {
    return true;
  }
  /**
   * Utility component that locks focus inside the component.
   */


  function Unstable_TrapFocus(props) {
    const {
      children,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableRestoreFocus = false,
      getTabbable = defaultGetTabbable,
      isEnabled = defaultIsEnabled,
      open
    } = props;
    const ignoreNextEnforceFocus = React.useRef();
    const sentinelStart = React.useRef(null);
    const sentinelEnd = React.useRef(null);
    const nodeToRestore = React.useRef(null);
    const reactFocusEventTarget = React.useRef(null); // This variable is useful when disableAutoFocus is true.
    // It waits for the active element to move into the component to activate.

    const activated = React.useRef(false);
    const rootRef = React.useRef(null);
    const handleRef = useForkRef(children.ref, rootRef);
    const lastKeydown = React.useRef(null);
    React.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }

      activated.current = !disableAutoFocus;
    }, [disableAutoFocus, open]);
    React.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }

      const doc = ownerDocument(rootRef.current);

      if (!rootRef.current.contains(doc.activeElement)) {
        if (!rootRef.current.hasAttribute('tabIndex')) {

          rootRef.current.setAttribute('tabIndex', -1);
        }

        if (activated.current) {
          rootRef.current.focus();
        }
      }

      return () => {
        // restoreLastFocus()
        if (!disableRestoreFocus) {
          // In IE11 it is possible for document.activeElement to be null resulting
          // in nodeToRestore.current being null.
          // Not all elements in IE11 have a focus method.
          // Once IE11 support is dropped the focus() call can be unconditional.
          if (nodeToRestore.current && nodeToRestore.current.focus) {
            ignoreNextEnforceFocus.current = true;
            nodeToRestore.current.focus();
          }

          nodeToRestore.current = null;
        }
      }; // Missing `disableRestoreFocus` which is fine.
      // We don't support changing that prop on an open TrapFocus
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);
    React.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }

      const doc = ownerDocument(rootRef.current);

      const contain = nativeEvent => {
        const {
          current: rootElement
        } = rootRef; // Cleanup functions are executed lazily in React 17.
        // Contain can be called between the component being unmounted and its cleanup function being run.

        if (rootElement === null) {
          return;
        }

        if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
          ignoreNextEnforceFocus.current = false;
          return;
        }

        if (!rootElement.contains(doc.activeElement)) {
          // if the focus event is not coming from inside the children's react tree, reset the refs
          if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
            reactFocusEventTarget.current = null;
          } else if (reactFocusEventTarget.current !== null) {
            return;
          }

          if (!activated.current) {
            return;
          }

          let tabbable = [];

          if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
            tabbable = getTabbable(rootRef.current);
          }

          if (tabbable.length > 0) {
            var _lastKeydown$current, _lastKeydown$current2;

            const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
            const focusNext = tabbable[0];
            const focusPrevious = tabbable[tabbable.length - 1];

            if (isShiftTab) {
              focusPrevious.focus();
            } else {
              focusNext.focus();
            }
          } else {
            rootElement.focus();
          }
        }
      };

      const loopFocus = nativeEvent => {
        lastKeydown.current = nativeEvent;

        if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
          return;
        } // Make sure the next tab starts from the right place.
        // doc.activeElement referes to the origin.


        if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
          // We need to ignore the next contain as
          // it will try to move the focus back to the rootRef element.
          ignoreNextEnforceFocus.current = true;
          sentinelEnd.current.focus();
        }
      };

      doc.addEventListener('focusin', contain);
      doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
      // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
      // Instead, we can look if the active element was restored on the BODY element.
      //
      // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
      // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

      const interval = setInterval(() => {
        if (doc.activeElement.tagName === 'BODY') {
          contain();
        }
      }, 50);
      return () => {
        clearInterval(interval);
        doc.removeEventListener('focusin', contain);
        doc.removeEventListener('keydown', loopFocus, true);
      };
    }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);

    const onFocus = event => {
      if (nodeToRestore.current === null) {
        nodeToRestore.current = event.relatedTarget;
      }

      activated.current = true;
      reactFocusEventTarget.current = event.target;
      const childrenPropsHandler = children.props.onFocus;

      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };

    const handleFocusSentinel = event => {
      if (nodeToRestore.current === null) {
        nodeToRestore.current = event.relatedTarget;
      }

      activated.current = true;
    };

    return /*#__PURE__*/jsxRuntime_2(React.Fragment, {
      children: [/*#__PURE__*/jsxRuntime_1("div", {
        tabIndex: 0,
        onFocus: handleFocusSentinel,
        ref: sentinelStart,
        "data-test": "sentinelStart"
      }), /*#__PURE__*/React.cloneElement(children, {
        ref: handleRef,
        onFocus
      }), /*#__PURE__*/jsxRuntime_1("div", {
        tabIndex: 0,
        onFocus: handleFocusSentinel,
        ref: sentinelEnd,
        "data-test": "sentinelEnd"
      })]
    });
  }

  function getModalUtilityClass(slot) {
    return generateUtilityClass('MuiModal', slot);
  }
  const modalUnstyledClasses = generateUtilityClasses('MuiModal', ['root', 'hidden']);

  const _excluded$1 = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"];

  const useUtilityClasses$1 = ownerState => {
    const {
      open,
      exited,
      classes
    } = ownerState;
    const slots = {
      root: ['root', !open && exited && 'hidden']
    };
    return composeClasses(slots, getModalUtilityClass, classes);
  };

  function getContainer$1(container) {
    return typeof container === 'function' ? container() : container;
  }

  function getHasTransition(props) {
    return props.children ? props.children.props.hasOwnProperty('in') : false;
  } // A modal manager used to track and manage the state of open Modals.
  // Modals don't open on the server so this won't conflict with concurrent requests.


  const defaultManager = new ModalManager();
  /**
   * Modal is a lower-level construct that is leveraged by the following components:
   *
   * - [Dialog](/api/dialog/)
   * - [Drawer](/api/drawer/)
   * - [Menu](/api/menu/)
   * - [Popover](/api/popover/)
   *
   * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
   * rather than directly using Modal.
   *
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   */

  const ModalUnstyled = /*#__PURE__*/React.forwardRef(function ModalUnstyled(props, ref) {
    const {
      BackdropComponent,
      BackdropProps,
      children,
      classes: classesProp,
      className,
      closeAfterTransition = false,
      component = 'div',
      components = {},
      componentsProps = {},
      container,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      // private
      // eslint-disable-next-line react/prop-types
      manager = defaultManager,
      onBackdropClick,
      onClose,
      onKeyDown,
      open,

      /* eslint-disable react/prop-types */
      theme,
      onTransitionEnter,
      onTransitionExited
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$1);

    const [exited, setExited] = React.useState(true);
    const modal = React.useRef({});
    const mountNodeRef = React.useRef(null);
    const modalRef = React.useRef(null);
    const handleRef = useForkRef(modalRef, ref);
    const hasTransition = getHasTransition(props);

    const getDoc = () => ownerDocument(mountNodeRef.current);

    const getModal = () => {
      modal.current.modalRef = modalRef.current;
      modal.current.mountNode = mountNodeRef.current;
      return modal.current;
    };

    const handleMounted = () => {
      manager.mount(getModal(), {
        disableScrollLock
      }); // Fix a bug on Chrome where the scroll isn't initially 0.

      modalRef.current.scrollTop = 0;
    };

    const handleOpen = useEventCallback(() => {
      const resolvedContainer = getContainer$1(container) || getDoc().body;
      manager.add(getModal(), resolvedContainer); // The element was already mounted.

      if (modalRef.current) {
        handleMounted();
      }
    });
    const isTopModal = React.useCallback(() => manager.isTopModal(getModal()), [manager]);
    const handlePortalRef = useEventCallback(node => {
      mountNodeRef.current = node;

      if (!node) {
        return;
      }

      if (open && isTopModal()) {
        handleMounted();
      } else {
        ariaHidden(modalRef.current, true);
      }
    });
    const handleClose = React.useCallback(() => {
      manager.remove(getModal());
    }, [manager]);
    React.useEffect(() => {
      return () => {
        handleClose();
      };
    }, [handleClose]);
    React.useEffect(() => {
      if (open) {
        handleOpen();
      } else if (!hasTransition || !closeAfterTransition) {
        handleClose();
      }
    }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

    const ownerState = _extends({}, props, {
      classes: classesProp,
      closeAfterTransition,
      disableAutoFocus,
      disableEnforceFocus,
      disableEscapeKeyDown,
      disablePortal,
      disableRestoreFocus,
      disableScrollLock,
      exited,
      hideBackdrop,
      keepMounted
    });

    const classes = useUtilityClasses$1(ownerState);

    if (!keepMounted && !open && (!hasTransition || exited)) {
      return null;
    }

    const handleEnter = () => {
      setExited(false);

      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };

    const handleExited = () => {
      setExited(true);

      if (onTransitionExited) {
        onTransitionExited();
      }

      if (closeAfterTransition) {
        handleClose();
      }
    };

    const handleBackdropClick = event => {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (onClose) {
        onClose(event, 'backdropClick');
      }
    };

    const handleKeyDown = event => {
      if (onKeyDown) {
        onKeyDown(event);
      } // The handler doesn't take event.defaultPrevented into account:
      //
      // event.preventDefault() is meant to stop default behaviors like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default behaviors.


      if (event.key !== 'Escape' || !isTopModal()) {
        return;
      }

      if (!disableEscapeKeyDown) {
        // Swallow the event, in case someone is listening for the escape key on the body.
        event.stopPropagation();

        if (onClose) {
          onClose(event, 'escapeKeyDown');
        }
      }
    };

    const childProps = {};

    if (children.props.tabIndex === undefined) {
      childProps.tabIndex = '-1';
    } // It's a Transition like component


    if (hasTransition) {
      childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
      childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
    }

    const Root = components.Root || component;
    const rootProps = componentsProps.root || {};
    return /*#__PURE__*/jsxRuntime_1(Portal, {
      ref: handlePortalRef,
      container: container,
      disablePortal: disablePortal,
      children: /*#__PURE__*/jsxRuntime_2(Root, _extends({
        role: "presentation"
      }, rootProps, !isHostComponent(Root) && {
        as: component,
        ownerState: _extends({}, ownerState, rootProps.ownerState),
        theme
      }, other, {
        ref: handleRef,
        onKeyDown: handleKeyDown,
        className: clsx(classes.root, rootProps.className, className),
        children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/jsxRuntime_1(BackdropComponent, _extends({
          open: open,
          onClick: handleBackdropClick
        }, BackdropProps)) : null, /*#__PURE__*/jsxRuntime_1(Unstable_TrapFocus, {
          disableEnforceFocus: disableEnforceFocus,
          disableAutoFocus: disableAutoFocus,
          disableRestoreFocus: disableRestoreFocus,
          isEnabled: isTopModal,
          open: open,
          children: /*#__PURE__*/React.cloneElement(children, childProps)
        })]
      }))
    });
  });

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
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

    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  unwrapExports(_extends_1);

  function memoize(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

  var isPropValid = /* #__PURE__ */memoize(function (prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
    /* o */
    && prop.charCodeAt(1) === 110
    /* n */
    && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
  );

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */
  // $FlowFixMe
  function sheetForTag(tag) {
    if (tag.sheet) {
      // $FlowFixMe
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        // $FlowFixMe
        return document.styleSheets[i];
      }
    }
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }

  var StyleSheet = /*#__PURE__*/function () {
    function StyleSheet(options) {
      var _this = this;

      this._insertTag = function (tag) {
        var before;

        if (_this.tags.length === 0) {
          before = _this.prepend ? _this.container.firstChild : _this.before;
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }

        _this.container.insertBefore(tag, before);

        _this.tags.push(tag);
      };

      this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }

      var tag = this.tags[this.tags.length - 1];

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      // $FlowFixMe
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };

    return StyleSheet;
  }();

  var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var i="@import";var p="@keyframes";var k=Math.abs;var d=String.fromCharCode;function m(e,r){return (((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function g(e){return e.trim()}function x(e,r){return (e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function I(e,r,a){return H(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F}function K(){F=E>0?z(G,--E):0;if(B--,F===10)B=1,q--;return F}function L(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function N(){return z(G,E)}function P(){return E}function Q(e,r){return C(G,e,r)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return q=B=1,D=A(G=e),E=0,[]}function U(e){return G="",e}function V(e){return g(Q(E-1,_(e===91?e+2:e===40?e+1:e)))}function X(e){while(F=N())if(F<33)L();else break;return R(e)>2||R(F)>3?"":" "}function Z(e,r){while(--r&&L())if(F<48||F>102||F>57&&F<65||F>70&&F<97)break;return Q(e,P()+(r<6&&N()==32&&L()==32))}function _(e){while(L())switch(F){case e:return E;case 34:case 39:return _(e===34||e===39?e:F);case 40:if(e===41)_(e);break;case 92:L();break}return E}function ee(e,r){while(L())if(e+F===47+10)break;else if(e+F===42+42&&N()===47)break;return "/*"+Q(r,E-1)+"*"+d(e===47?e:L())}function re(e){while(!R(N()))L();return Q(e,E)}function ae(e){return U(ce("",null,null,null,[""],e=T(e),0,[0],e))}function ce(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(w)switch(p=k,k=L()){case 34:case 39:case 91:case 40:z+=V(k);break;case 9:case 10:case 13:case 32:z+=X(p);break;case 92:z+=Z(P()-1,7);continue;case 47:switch(N()){case 42:case 47:O(te(ee(L(),P()),r,a),i);break;default:z+="/";}break;case 123*b:u[f++]=A(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&A(z)-l)O(h>32?se(z+";",c,a,l-1):se(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ne(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)ce(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:ce(e,j,j,c&&O(ne(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:ce(z,j,j,j,[""],x,l,u,x);}}f=o=h=0,b=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&K()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(N()===45)z+=V(L());v=N(),o=A(m=z+=re(P())),k++;break;case 45:if(p===45&&A(z)==2)b=0;}}return t}function ne(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,m=C(e,v+1,v=k(w=u[b])),x=e;d<p;++d)if(x=g(w>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function te(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function se(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function ue(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y(c,"shrink","negative")+c;case 5292:return a+c+e+y(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y(c,"-grow","")+a+c+e+y(c,"grow","positive")+c;case 4554:return a+y(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y(y(y(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y(y(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return y(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return ~j(c,"stretch")?ue(y(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,A(c)-3-(~j(c,"!important")&&10))){case 107:return y(c,":",":"+a)+c;case 101:return y(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function ie(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function fe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case n:e.value=e.props.join(",");}return A(a=ie(e.children,s))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function ve(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=ue(c.value,c.length);break;case p:return ie([I(y(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ie([I(y(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return ie([I(y(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I(y(n,/:(plac\w+)/,":"+r+"$1"),c,""),I(y(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return ""}))}}

  var weakMemoize = function weakMemoize(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function (arg) {
      if (cache.has(arg)) {
        // $FlowFixMe
        return cache.get(arg);
      }

      var ret = func(arg);
      cache.set(arg, ret);
      return ret;
    };
  };

  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;

    do {
      switch (R(character)) {
        case 0:
          // &\f
          if (character === 38 && N() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }

          parsed[index] += re(E - 1);
          break;

        case 2:
          parsed[index] += V(character);
          break;

        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = N() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += d(character);
      }
    } while (character = L());

    return parsed;
  };

  var getRules = function getRules(value, points) {
    return U(toRules(T(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
    !element.length) {
      return;
    }

    var value = element.value,
        parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;

    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case


    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */
    && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


    if (isImplicitRule) {
      return;
    }

    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;

    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;

      if ( // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };

  var isBrowser = typeof document !== 'undefined';
  var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
    return memoize(function () {
      var cache = {};
      return function (name) {
        return cache[name];
      };
    });
  });
  var defaultStylisPlugins = [ve];

  var createCache = function createCache(options) {
    var key = options.key;

    if (isBrowser && key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
      // note this very very intentionally targets all style elements regardless of the key to ensure
      // that creating a cache works inside of render of a React component

      Array.prototype.forEach.call(ssrStyles, function (node) {
        // we want to only move elements which have a space in the data-emotion attribute value
        // because that indicates that it is an Emotion 11 server-side rendered style elements
        // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
        // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
        // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
        // will not result in the Emotion 10 styles being destroyed
        var dataEmotionAttribute = node.getAttribute('data-emotion');

        if (dataEmotionAttribute.indexOf(' ') === -1) {
          return;
        }
        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }

    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

    var inserted = {}; // $FlowFixMe

    var container;
    var nodesToHydrate = [];

    if (isBrowser) {
      container = options.container || document.head;
      Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
        var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }

        nodesToHydrate.push(node);
      });
    }

    var _insert;

    var omnipresentPlugins = [compat, removeLabel];

    if (isBrowser) {
      var currentSheet;
      var finalizingPlugins = [fe,  le(function (rule) {
        currentSheet.insert(rule);
      })];
      var serializer = oe(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

      var stylis = function stylis(styles) {
        return ie(ae(styles), serializer);
      };

      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;

        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    } else {
      var _finalizingPlugins = [fe];

      var _serializer = oe(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

      var _stylis = function _stylis(styles) {
        return ie(ae(styles), _serializer);
      }; // $FlowFixMe


      var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

      var getRules = function getRules(selector, serialized) {
        var name = serialized.name;

        if (serverStylisCache[name] === undefined) {
          serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        }

        return serverStylisCache[name];
      };

      _insert = function _insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        var rules = getRules(selector, serialized);

        if (cache.compat === undefined) {
          // in regular mode, we don't set the styles on the inserted cache
          // since we don't need to and that would be wasting memory
          // we return them so that they are rendered in a style tag
          if (shouldCache) {
            cache.inserted[name] = true;
          }

          return rules;
        } else {
          // in compat mode, we put the styles on the inserted cache so
          // that emotion-server can pull out the styles
          // except when we don't want to cache it which was in Global but now
          // is nowhere but we don't want to do a major right now
          // and just in case we're going to leave the case here
          // it's also not affecting client side bundle size
          // so it's really not a big deal
          if (shouldCache) {
            cache.inserted[name] = rules;
          } else {
            return rules;
          }
        }
      };
    }

    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c$1=b?Symbol.for("react.element"):60103,d$1=b?Symbol.for("react.portal"):60106,e$1=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g$1=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k$1=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n$1=b?Symbol.for("react.forward_ref"):60112,p$1=b?Symbol.for("react.suspense"):60113,q$1=b?
  Symbol.for("react.suspense_list"):60120,r$1=b?Symbol.for("react.memo"):60115,t$1=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x$1=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
  function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l:case m$1:case e$1:case g$1:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t$1:case r$1:case h:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k$1;var ContextProvider=h;var Element=c$1;var ForwardRef=n$1;var Fragment=e$1;var Lazy=t$1;var Memo=r$1;var Portal$1=d$1;
  var Profiler=g$1;var StrictMode=f;var Suspense=p$1;var isAsyncMode=function(a){return A$1(a)||z$1(a)===l};var isConcurrentMode=A$1;var isContextConsumer=function(a){return z$1(a)===k$1};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef=function(a){return z$1(a)===n$1};var isFragment=function(a){return z$1(a)===e$1};var isLazy=function(a){return z$1(a)===t$1};
  var isMemo=function(a){return z$1(a)===r$1};var isPortal=function(a){return z$1(a)===d$1};var isProfiler=function(a){return z$1(a)===g$1};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p$1};
  var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z$1;

  var reactIs_production_min = {
  	AsyncMode: AsyncMode,
  	ConcurrentMode: ConcurrentMode,
  	ContextConsumer: ContextConsumer,
  	ContextProvider: ContextProvider,
  	Element: Element,
  	ForwardRef: ForwardRef,
  	Fragment: Fragment,
  	Lazy: Lazy,
  	Memo: Memo,
  	Portal: Portal$1,
  	Profiler: Profiler,
  	StrictMode: StrictMode,
  	Suspense: Suspense,
  	isAsyncMode: isAsyncMode,
  	isConcurrentMode: isConcurrentMode,
  	isContextConsumer: isContextConsumer,
  	isContextProvider: isContextProvider,
  	isElement: isElement,
  	isForwardRef: isForwardRef,
  	isFragment: isFragment,
  	isLazy: isLazy,
  	isMemo: isMemo,
  	isPortal: isPortal,
  	isProfiler: isProfiler,
  	isStrictMode: isStrictMode,
  	isSuspense: isSuspense,
  	isValidElementType: isValidElementType,
  	typeOf: typeOf
  };

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });

  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  var isBrowser$1 = typeof document !== 'undefined';
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }

    if (cache.inserted[serialized.name] === undefined) {
      var stylesForSSR = '';
      var current = serialized;

      do {
        var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

        if (!isBrowser$1 && maybeStyles !== undefined) {
          stylesForSSR += maybeStyles;
        }

        current = current.next;
      } while (current !== undefined);

      if (!isBrowser$1 && stylesForSSR.length !== 0) {
        return stylesForSSR;
      }
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
        i = 0,
        len = str.length;

    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^=
      /* k >>> r: */
      k >>> 24;
      h =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array


    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.


    h ^= h >>> 13;
    h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };

  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };

  var processStyleName = /* #__PURE__ */memoize(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }

    if (interpolation.__emotion_styles !== undefined) {

      return interpolation;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          if (interpolation.anim === 1) {
            cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            };
            return interpolation.name;
          }

          if (interpolation.styles !== undefined) {
            var next = interpolation.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = interpolation.styles + ";";

            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }

          break;
        }
    } // finalize string values (regular strings and functions interpolated into css calls)


    if (registered == null) {
      return interpolation;
    }

    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];

        if (typeof value !== 'object') {
          if (registered != null && registered[value] !== undefined) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
          }

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);

            switch (_key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }

              default:
                {

                  string += _key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  // keyframes are stored on the SerializedStyles object as a linked list


  var cursor;
  var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {

      styles += strings[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);

      if (stringMode) {

        styles += strings[i];
      }
    }


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + // $FlowFixMe we know it's not null
      match[1];
    }

    var name = murmur2(styles) + identifierName;

    return {
      name: name,
      styles: styles,
      next: cursor
    };
  };

  var isBrowser$2 = typeof document !== 'undefined';

  var EmotionCacheContext = /* #__PURE__ */React.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
    key: 'css'
  }) : null);

  var CacheProvider = EmotionCacheContext.Provider;

  var withEmotionCache = function withEmotionCache(func) {
    // $FlowFixMe
    return /*#__PURE__*/React.forwardRef(function (props, ref) {
      // the cache will never be null in the browser
      var cache = React.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };

  if (!isBrowser$2) {
    withEmotionCache = function withEmotionCache(func) {
      return function (props) {
        var cache = React.useContext(EmotionCacheContext);

        if (cache === null) {
          // yes, we're potentially creating this on every render
          // it doesn't actually matter though since it's only on the server
          // so there will only every be a single render
          // that could change in the future because of suspense and etc. but for now,
          // this works and i don't want to optimise for a future thing that we aren't sure about
          cache = createCache({
            key: 'css'
          });
          return /*#__PURE__*/React.createElement(EmotionCacheContext.Provider, {
            value: cache
          }, func(props, cache));
        } else {
          return func(props, cache);
        }
      };
    };
  }

  var ThemeContext = /* #__PURE__ */React.createContext({});

  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return serializeStyles(args);
  }

  var keyframes = function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name; // $FlowFixMe

    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };

  var testOmitPropsOnStringTag = isPropValid;

  var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== 'theme';
  };

  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
    var shouldForwardProp;

    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }

    if (typeof shouldForwardProp !== 'function' && isReal) {
      shouldForwardProp = tag.__emotion_forwardProp;
    }

    return shouldForwardProp;
  };
  var isBrowser$3 = typeof document !== 'undefined';

  var createStyled = function createStyled(tag, options) {

    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;

    if (options !== undefined) {
      identifierName = options.label;
      targetClassName = options.target;
    }

    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (args[0] == null || args[0].raw === undefined) {
        styles.push.apply(styles, args);
      } else {

        styles.push(args[0][0]);
        var len = args.length;
        var i = 1;

        for (; i < len; i++) {

          styles.push(args[i], args[0][i]);
        }
      } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


      var Styled = withEmotionCache(function (props, cache, ref) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = React.useContext(ThemeContext);
        }

        if (typeof props.className === 'string') {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
        className += cache.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref;
        var ele = /*#__PURE__*/React.createElement(finalTag, newProps);

        if (!isBrowser$3 && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
        }

        return ele;
      });
      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if (targetClassName === undefined && "production" !== 'production') {
            return 'NO_COMPONENT_SELECTOR';
          } // $FlowFixMe: coerce undefined to string


          return "." + targetClassName;
        }
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return createStyled(nextTag, _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        })).apply(void 0, styles);
      };

      return Styled;
    };
  };

  var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
  'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

  var newStyled = createStyled.bind();
  tags.forEach(function (tagName) {
    // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
    newStyled[tagName] = newStyled(tagName);
  });

  /** @license MUI v5.0.1
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  function styled(tag, options) {
    const stylesFactory = newStyled(tag, options);

    return stylesFactory;
  }

  function merge(acc, item) {
    if (!item) {
      return acc;
    }

    return deepmerge(acc, item, {
      clone: false // No need to clone deep, it's way faster.

    });
  }

  // For instance with the first breakpoint xs: [xs, sm[.

  const values = {
    xs: 0,
    // phone
    sm: 600,
    // tablets
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536 // large screens

  };
  const defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values[key]}px)`
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme = props.theme || {};

    if (Array.isArray(propValue)) {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }

    if (typeof propValue === 'object') {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        // key is breakpoint
        if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
          const mediaKey = themeBreakpoints.up(breakpoint);
          acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }

        return acc;
      }, {});
    }

    const output = styleFromPropValue(propValue);
    return output;
  }

  function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _breakpointsInput$key;

    const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
      const breakpointStyleKey = breakpointsInput.up(key);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style) {
    return breakpointKeys.reduce((acc, key) => {
      const breakpointOutput = acc[key];
      const isBreakpointUnused = Object.keys(breakpointOutput).length === 0;

      if (isBreakpointUnused) {
        delete acc[key];
      }

      return acc;
    }, style);
  }
  function resolveBreakpointValues({
    values: breakpointValues,
    base
  }) {
    const keys = Object.keys(base);

    if (keys.length === 0) {
      return breakpointValues;
    }

    let previous;
    return keys.reduce((acc, breakpoint) => {
      if (typeof breakpointValues === 'object') {
        acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      } else {
        acc[breakpoint] = breakpointValues;
      }

      previous = breakpoint;
      return acc;
    }, {});
  }

  function getPath(obj, path) {
    if (!path || typeof path !== 'string') {
      return null;
    }

    return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
  }

  function getValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;

    if (typeof themeMapping === 'function') {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }

    if (transform) {
      value = transform(value);
    }

    return value;
  }

  function style(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;

    const fn = props => {
      if (props[prop] == null) {
        return null;
      }

      const propValue = props[prop];
      const theme = props.theme;
      const themeMapping = getPath(theme, themeKey) || {};

      const styleFromPropValue = propValueFinal => {
        let value = getValue(themeMapping, transform, propValueFinal);

        if (propValueFinal === value && typeof propValueFinal === 'string') {
          // Haven't found value
          value = getValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
        }

        if (cssProperty === false) {
          return value;
        }

        return {
          [cssProperty]: value
        };
      };

      return handleBreakpoints(props, propValue, styleFromPropValue);
    };

    fn.propTypes =  {};
    fn.filterProps = [prop];
    return fn;
  }

  function compose(...styles) {
    const handlers = styles.reduce((acc, style) => {
      style.filterProps.forEach(prop => {
        acc[prop] = style;
      });
      return acc;
    }, {});

    const fn = props => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge(acc, handlers[prop](props));
        }

        return acc;
      }, {});
    };

    fn.propTypes =  {};
    fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
    return fn;
  }

  function memoize$1(fn) {
    const cache = {};
    return arg => {
      if (cache[arg] === undefined) {
        cache[arg] = fn(arg);
      }

      return cache[arg];
    };
  }

  const properties = {
    m: 'margin',
    p: 'padding'
  };
  const directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  };
  const aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py'
  }; // memoize() impact:
  // From 300,000 ops/sec
  // To 350,000 ops/sec

  const getCssProperties = memoize$1(prop => {
    // It's not a shorthand notation.
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }

    const [a, b] = prop.split('');
    const property = properties[a];
    const direction = directions[b] || '';
    return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
  });
  const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
  const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
  const spacingKeys = [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    const themeSpacing = getPath(theme, themeKey) || defaultValue;

    if (typeof themeSpacing === 'number') {
      return abs => {
        if (typeof abs === 'string') {
          return abs;
        }

        return themeSpacing * abs;
      };
    }

    if (Array.isArray(themeSpacing)) {
      return abs => {
        if (typeof abs === 'string') {
          return abs;
        }

        return themeSpacing[abs];
      };
    }

    if (typeof themeSpacing === 'function') {
      return themeSpacing;
    }

    return () => undefined;
  }
  function createUnarySpacing(theme) {
    return createUnaryUnit(theme, 'spacing', 8);
  }
  function getValue$1(transformer, propValue) {
    if (typeof propValue === 'string' || propValue == null) {
      return propValue;
    }

    const abs = Math.abs(propValue);
    const transformed = transformer(abs);

    if (propValue >= 0) {
      return transformed;
    }

    if (typeof transformed === 'number') {
      return -transformed;
    }

    return `-${transformed}`;
  }
  function getStyleFromPropValue(cssProperties, transformer) {
    return propValue => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue$1(transformer, propValue);
      return acc;
    }, {});
  }

  function resolveCssProperty(props, keys, prop, transformer) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (keys.indexOf(prop) === -1) {
      return null;
    }

    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }

  function style$1(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
  }

  function spacing(props) {
    return style$1(props, spacingKeys);
  }

  spacing.propTypes =  {};
  spacing.filterProps = spacingKeys;

  function getBorder(value) {
    if (typeof value !== 'number') {
      return value;
    }

    return `${value}px solid`;
  }

  const border = style({
    prop: 'border',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderTop = style({
    prop: 'borderTop',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderRight = style({
    prop: 'borderRight',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderBottom = style({
    prop: 'borderBottom',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderLeft = style({
    prop: 'borderLeft',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderColor = style({
    prop: 'borderColor',
    themeKey: 'palette'
  });
  const borderTopColor = style({
    prop: 'borderTopColor',
    themeKey: 'palette'
  });
  const borderRightColor = style({
    prop: 'borderRightColor',
    themeKey: 'palette'
  });
  const borderBottomColor = style({
    prop: 'borderBottomColor',
    themeKey: 'palette'
  });
  const borderLeftColor = style({
    prop: 'borderLeftColor',
    themeKey: 'palette'
  });
  const borderRadius = props => {
    if (props.borderRadius !== undefined && props.borderRadius !== null) {
      const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);

      const styleFromPropValue = propValue => ({
        borderRadius: getValue$1(transformer, propValue)
      });

      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }

    return null;
  };
  borderRadius.propTypes =  {};
  borderRadius.filterProps = ['borderRadius'];
  const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);

  const displayPrint = style({
    prop: 'displayPrint',
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  });
  const displayRaw = style({
    prop: 'display'
  });
  const overflow = style({
    prop: 'overflow'
  });
  const textOverflow = style({
    prop: 'textOverflow'
  });
  const visibility = style({
    prop: 'visibility'
  });
  const whiteSpace = style({
    prop: 'whiteSpace'
  });
  var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

  const flexBasis = style({
    prop: 'flexBasis'
  });
  const flexDirection = style({
    prop: 'flexDirection'
  });
  const flexWrap = style({
    prop: 'flexWrap'
  });
  const justifyContent = style({
    prop: 'justifyContent'
  });
  const alignItems = style({
    prop: 'alignItems'
  });
  const alignContent = style({
    prop: 'alignContent'
  });
  const order = style({
    prop: 'order'
  });
  const flex = style({
    prop: 'flex'
  });
  const flexGrow = style({
    prop: 'flexGrow'
  });
  const flexShrink = style({
    prop: 'flexShrink'
  });
  const alignSelf = style({
    prop: 'alignSelf'
  });
  const justifyItems = style({
    prop: 'justifyItems'
  });
  const justifySelf = style({
    prop: 'justifySelf'
  });
  const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

  const gap = props => {
    if (props.gap !== undefined && props.gap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8);

      const styleFromPropValue = propValue => ({
        gap: getValue$1(transformer, propValue)
      });

      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }

    return null;
  };
  gap.propTypes =  {};
  gap.filterProps = ['gap'];
  const columnGap = props => {
    if (props.columnGap !== undefined && props.columnGap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8);

      const styleFromPropValue = propValue => ({
        columnGap: getValue$1(transformer, propValue)
      });

      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }

    return null;
  };
  columnGap.propTypes =  {};
  columnGap.filterProps = ['columnGap'];
  const rowGap = props => {
    if (props.rowGap !== undefined && props.rowGap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8);

      const styleFromPropValue = propValue => ({
        rowGap: getValue$1(transformer, propValue)
      });

      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }

    return null;
  };
  rowGap.propTypes =  {};
  rowGap.filterProps = ['rowGap'];
  const gridColumn = style({
    prop: 'gridColumn'
  });
  const gridRow = style({
    prop: 'gridRow'
  });
  const gridAutoFlow = style({
    prop: 'gridAutoFlow'
  });
  const gridAutoColumns = style({
    prop: 'gridAutoColumns'
  });
  const gridAutoRows = style({
    prop: 'gridAutoRows'
  });
  const gridTemplateColumns = style({
    prop: 'gridTemplateColumns'
  });
  const gridTemplateRows = style({
    prop: 'gridTemplateRows'
  });
  const gridTemplateAreas = style({
    prop: 'gridTemplateAreas'
  });
  const gridArea = style({
    prop: 'gridArea'
  });
  const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

  const color = style({
    prop: 'color',
    themeKey: 'palette'
  });
  const bgcolor = style({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette'
  });
  const backgroundColor = style({
    prop: 'backgroundColor',
    themeKey: 'palette'
  });
  const palette = compose(color, bgcolor, backgroundColor);

  const position = style({
    prop: 'position'
  });
  const zIndex = style({
    prop: 'zIndex',
    themeKey: 'zIndex'
  });
  const top = style({
    prop: 'top'
  });
  const right = style({
    prop: 'right'
  });
  const bottom = style({
    prop: 'bottom'
  });
  const left = style({
    prop: 'left'
  });
  var positions = compose(position, zIndex, top, right, bottom, left);

  const boxShadow = style({
    prop: 'boxShadow',
    themeKey: 'shadows'
  });

  function transform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }

  const width = style({
    prop: 'width',
    transform
  });
  const maxWidth = props => {
    if (props.maxWidth !== undefined && props.maxWidth !== null) {
      const styleFromPropValue = propValue => {
        var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

        const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue];
        return {
          maxWidth: breakpoint || transform(propValue)
        };
      };

      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }

    return null;
  };
  maxWidth.filterProps = ['maxWidth'];
  const minWidth = style({
    prop: 'minWidth',
    transform
  });
  const height = style({
    prop: 'height',
    transform
  });
  const maxHeight = style({
    prop: 'maxHeight',
    transform
  });
  const minHeight = style({
    prop: 'minHeight',
    transform
  });
  const sizeWidth = style({
    prop: 'size',
    cssProperty: 'width',
    transform
  });
  const sizeHeight = style({
    prop: 'size',
    cssProperty: 'height',
    transform
  });
  const boxSizing = style({
    prop: 'boxSizing'
  });
  const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

  const fontFamily = style({
    prop: 'fontFamily',
    themeKey: 'typography'
  });
  const fontSize = style({
    prop: 'fontSize',
    themeKey: 'typography'
  });
  const fontStyle = style({
    prop: 'fontStyle',
    themeKey: 'typography'
  });
  const fontWeight = style({
    prop: 'fontWeight',
    themeKey: 'typography'
  });
  const letterSpacing = style({
    prop: 'letterSpacing'
  });
  const lineHeight = style({
    prop: 'lineHeight'
  });
  const textAlign = style({
    prop: 'textAlign'
  });
  const typographyVariant = style({
    prop: 'typography',
    cssProperty: false,
    themeKey: 'typography'
  });
  const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

  const filterPropsMapping = {
    borders: borders.filterProps,
    display: display.filterProps,
    flexbox: flexbox.filterProps,
    grid: grid.filterProps,
    positions: positions.filterProps,
    palette: palette.filterProps,
    shadows: boxShadow.filterProps,
    sizing: sizing.filterProps,
    spacing: spacing.filterProps,
    typography: typography.filterProps
  };
  const styleFunctionMapping = {
    borders,
    display,
    flexbox,
    grid,
    positions,
    palette,
    shadows: boxShadow,
    sizing,
    spacing,
    typography
  };
  const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
    filterPropsMapping[styleFnName].forEach(propName => {
      acc[propName] = styleFunctionMapping[styleFnName];
    });
    return acc;
  }, {});

  function getThemeValue(prop, value, theme) {
    const inputProps = {
      [prop]: value,
      theme
    };
    const styleFunction = propToStyleFunction[prop];
    return styleFunction ? styleFunction(inputProps) : {
      [prop]: value
    };
  }

  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every(object => union.size === Object.keys(object).length);
  }

  function callIfFn(maybeFn, arg) {
    return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
  }

  function styleFunctionSx(props) {
    const {
      sx: styles,
      theme = {}
    } = props || {};

    if (!styles) {
      return null;
    }

    if (typeof styles === 'function') {
      return styles(theme);
    }

    if (typeof styles !== 'object') {
      // value
      return styles;
    }

    const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
    const breakpointsKeys = Object.keys(emptyBreakpoints);
    let css = emptyBreakpoints;
    Object.keys(styles).forEach(styleKey => {
      const value = callIfFn(styles[styleKey], theme);

      if (typeof value === 'object') {
        if (propToStyleFunction[styleKey]) {
          css = merge(css, getThemeValue(styleKey, value, theme));
        } else {
          const breakpointsValues = handleBreakpoints({
            theme
          }, value, x => ({
            [styleKey]: x
          }));

          if (objectsHaveSameKeys(breakpointsValues, value)) {
            css[styleKey] = styleFunctionSx({
              sx: value,
              theme
            });
          } else {
            css = merge(css, breakpointsValues);
          }
        }
      } else {
        css = merge(css, getThemeValue(styleKey, value, theme));
      }
    });
    return removeUnusedBreakpoints(breakpointsKeys, css);
  }

  styleFunctionSx.filterProps = ['sx'];

  const _excluded$2 = ["sx"];

  const splitProps = props => {
    const result = {
      systemProps: {},
      otherProps: {}
    };
    Object.keys(props).forEach(prop => {
      if (propToStyleFunction[prop]) {
        result.systemProps[prop] = props[prop];
      } else {
        result.otherProps[prop] = props[prop];
      }
    });
    return result;
  };

  function extendSxProp(props) {
    const {
      sx: inSx
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$2);

    const {
      systemProps,
      otherProps
    } = splitProps(other);
    return _extends({}, otherProps, {
      sx: _extends({}, systemProps, inSx)
    });
  }

  const _excluded$3 = ["values", "unit", "step"];

  function createBreakpoints(breakpoints) {
    const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values = {
        xs: 0,
        // phone
        sm: 600,
        // tablets
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screens

      },
      unit = 'px',
      step = 5
    } = breakpoints,
          other = _objectWithoutPropertiesLoose(breakpoints, _excluded$3);

    const keys = Object.keys(values);

    function up(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (min-width:${value}${unit})`;
    }

    function down(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (max-width:${value - step / 100}${unit})`;
    }

    function between(start, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
    }

    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }

      return up(key);
    }

    return _extends({
      keys,
      values,
      up,
      down,
      between,
      only,
      unit
    }, other);
  }

  const shape = {
    borderRadius: 4
  };

  /* tslint:enable:unified-signatures */
  function createSpacing(spacingInput = 8) {
    // Already transformed.
    if (spacingInput.mui) {
      return spacingInput;
    } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
    // Smaller components, such as icons, can align to a 4dp grid.
    // https://material.io/design/layout/understanding-layout.html#usage


    const transform = createUnarySpacing({
      spacing: spacingInput
    });

    const spacing = (...argsInput) => {

      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map(argument => {
        const output = transform(argument);
        return typeof output === 'number' ? `${output}px` : output;
      }).join(' ');
    };

    spacing.mui = true;
    return spacing;
  }

  const _excluded$4 = ["breakpoints", "palette", "spacing", "shape"];

  function createTheme(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options,
          other = _objectWithoutPropertiesLoose(options, _excluded$4);

    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);
    let muiTheme = deepmerge({
      breakpoints,
      direction: 'ltr',
      components: {},
      // Inject component definitions.
      palette: _extends({
        mode: 'light'
      }, paletteInput),
      spacing,
      shape: _extends({}, shape, shapeInput)
    }, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    return muiTheme;
  }

  const ThemeContext$1 = /*#__PURE__*/React.createContext(null);

  function useTheme() {
    const theme = React.useContext(ThemeContext$1);

    return theme;
  }

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function useTheme$1(defaultTheme = null) {
    const contextTheme = useTheme();
    return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
  }

  const systemDefaultTheme = createTheme();

  function useTheme$2(defaultTheme = systemDefaultTheme) {
    return useTheme$1(defaultTheme);
  }

  const _excluded$5 = ["variant"];

  function isEmpty(string) {
    return string.length === 0;
  }
  /**
   * Generates string classKey based on the properties provided. It starts with the
   * variant if defined, and then it appends all other properties in alphabetical order.
   * @param {object} props - the properties for which the classKey should be created.
   */


  function propsToClassKey(props) {
    const {
      variant
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$5);

    let classKey = variant || '';
    Object.keys(other).sort().forEach(key => {
      if (key === 'color') {
        classKey += isEmpty(classKey) ? props[key] : capitalize(props[key]);
      } else {
        classKey += `${isEmpty(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
      }
    });
    return classKey;
  }

  const _excluded$6 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
        _excluded2 = ["theme"],
        _excluded3 = ["theme"];

  function isEmpty$1(obj) {
    return Object.keys(obj).length === 0;
  }

  const getStyleOverrides = (name, theme) => {
    if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
      return theme.components[name].styleOverrides;
    }

    return null;
  };

  const getVariantStyles = (name, theme) => {
    let variants = [];

    if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
      variants = theme.components[name].variants;
    }

    const variantsStyles = {};
    variants.forEach(definition => {
      const key = propsToClassKey(definition.props);
      variantsStyles[key] = definition.style;
    });
    return variantsStyles;
  };

  const variantsResolver = (props, styles, theme, name) => {
    var _theme$components, _theme$components$nam;

    const {
      ownerState = {}
    } = props;
    const variantsStyles = [];
    const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

    if (themeVariants) {
      themeVariants.forEach(themeVariant => {
        let isMatch = true;
        Object.keys(themeVariant.props).forEach(key => {
          if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
            isMatch = false;
          }
        });

        if (isMatch) {
          variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
        }
      });
    }

    return variantsStyles;
  };

  function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
  }
  const systemDefaultTheme$1 = createTheme();

  function createStyled$1(input = {}) {
    const {
      defaultTheme = systemDefaultTheme$1,
      rootShouldForwardProp = shouldForwardProp,
      slotShouldForwardProp = shouldForwardProp
    } = input;
    return (tag, inputOptions = {}) => {
      const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        overridesResolver
      } = inputOptions,
            options = _objectWithoutPropertiesLoose(inputOptions, _excluded$6); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


      const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
      const skipSx = inputSkipSx || false;
      let label;

      let shouldForwardPropOption = shouldForwardProp;

      if (componentSlot === 'Root') {
        shouldForwardPropOption = rootShouldForwardProp;
      } else if (componentSlot) {
        // any other slot specified
        shouldForwardPropOption = slotShouldForwardProp;
      }

      const defaultStyledResolver = styled(tag, _extends({
        shouldForwardProp: shouldForwardPropOption,
        label
      }, options));

      const muiStyledResolver = (styleArg, ...expressions) => {
        const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
          return typeof stylesArg === 'function' ? _ref => {
            let {
              theme: themeInput
            } = _ref,
                other = _objectWithoutPropertiesLoose(_ref, _excluded2);

            return stylesArg(_extends({
              theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
            }, other));
          } : stylesArg;
        }) : [];
        let transformedStyleArg = styleArg;

        if (componentName && overridesResolver) {
          expressionsWithDefaultTheme.push(props => {
            const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
            const styleOverrides = getStyleOverrides(componentName, theme);

            if (styleOverrides) {
              return overridesResolver(props, styleOverrides);
            }

            return null;
          });
        }

        if (componentName && !skipVariantsResolver) {
          expressionsWithDefaultTheme.push(props => {
            const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
            return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
          });
        }

        if (!skipSx) {
          expressionsWithDefaultTheme.push(props => {
            const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
            return styleFunctionSx(_extends({}, props, {
              theme
            }));
          });
        }

        const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

        if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
          const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

          transformedStyleArg = [...styleArg, ...placeholders];
          transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
        } else if (typeof styleArg === 'function') {
          // If the type is function, we need to define the default theme.
          transformedStyleArg = _ref2 => {
            let {
              theme: themeInput
            } = _ref2,
                other = _objectWithoutPropertiesLoose(_ref2, _excluded3);

            return styleArg(_extends({
              theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
            }, other));
          };
        }

        const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

        return Component;
      };

      return muiStyledResolver;
    };
  }

  /* eslint-disable no-restricted-syntax */
  function getThemeProps(params) {
    const {
      theme,
      name,
      props
    } = params;

    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
      return props;
    }

    const output = _extends({}, props); // Resolve default props, code borrow from React source.
    // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


    const defaultProps = theme.components[name].defaultProps;
    let propName;

    for (propName in defaultProps) {
      if (output[propName] === undefined) {
        output[propName] = defaultProps[propName];
      }
    }

    return output;
  }

  function useThemeProps({
    props,
    name,
    defaultTheme
  }) {
    const theme = useTheme$2(defaultTheme);
    const mergedProps = getThemeProps({
      theme,
      name,
      props
    });
    return mergedProps;
  }

  /**
   * Returns a number whose value is limited to the given range.
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clamp(value, min = 0, max = 1) {

    return Math.min(Math.max(min, value), max);
  }
  /**
   * Converts a color from CSS hex format to CSS rgb format.
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */


  function hexToRgb(color) {
    color = color.substr(1);
    const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
    let colors = color.match(re);

    if (colors && colors[0].length === 1) {
      colors = colors.map(n => n + n);
    }

    return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
  }
  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */


  function decomposeColor(color) {
    // Idempotent
    if (color.type) {
      return color;
    }

    if (color.charAt(0) === '#') {
      return decomposeColor(hexToRgb(color));
    }

    const marker = color.indexOf('(');
    const type = color.substring(0, marker);

    if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
      throw new Error( formatMuiErrorMessage(9, color));
    }

    let values = color.substring(marker + 1, color.length - 1);
    let colorSpace;

    if (type === 'color') {
      values = values.split(' ');
      colorSpace = values.shift();

      if (values.length === 4 && values[3].charAt(0) === '/') {
        values[3] = values[3].substr(1);
      }

      if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
        throw new Error( formatMuiErrorMessage(10, colorSpace));
      }
    } else {
      values = values.split(',');
    }

    values = values.map(value => parseFloat(value));
    return {
      type,
      values,
      colorSpace
    };
  }
  /**
   * Converts a color object with type and values to a string.
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */

  function recomposeColor(color) {
    const {
      type,
      colorSpace
    } = color;
    let {
      values
    } = color;

    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
    } else if (type.indexOf('hsl') !== -1) {
      values[1] = `${values[1]}%`;
      values[2] = `${values[2]}%`;
    }

    if (type.indexOf('color') !== -1) {
      values = `${colorSpace} ${values.join(' ')}`;
    } else {
      values = `${values.join(', ')}`;
    }

    return `${type}(${values})`;
  }
  /**
   * Converts a color from hsl format to rgb format.
   * @param {string} color - HSL color values
   * @returns {string} rgb color values
   */

  function hslToRgb(color) {
    color = decomposeColor(color);
    const {
      values
    } = color;
    const h = values[0];
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);

    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    let type = 'rgb';
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

    if (color.type === 'hsla') {
      type += 'a';
      rgb.push(values[3]);
    }

    return recomposeColor({
      type,
      values: rgb
    });
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */

  function getLuminance(color) {
    color = decomposeColor(color);
    let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map(val => {
      if (color.type !== 'color') {
        val /= 255; // normalized
      }

      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }
  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */

  function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  /**
   * Sets the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} value - value to set the alpha channel to in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function alpha(color, value) {
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }

    if (color.type === 'color') {
      color.values[3] = `/${value}`;
    } else {
      color.values[3] = value;
    }

    return recomposeColor(color);
  }
  /**
   * Darkens a color.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }

    return recomposeColor(color);
  }
  /**
   * Lightens a color.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    } else if (color.type.indexOf('color') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (1 - color.values[i]) * coefficient;
      }
    }

    return recomposeColor(color);
  }
  /**
   * Darken or lighten a color, depending on its luminance.
   * Light colors are darkened, dark colors are lightened.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function emphasize(color, coefficient = 0.15) {
    return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
  }

  function createMixins(breakpoints, spacing, mixins) {
    return _extends({
      toolbar: {
        minHeight: 56,
        [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
          minHeight: 48
        },
        [breakpoints.up('sm')]: {
          minHeight: 64
        }
      }
    }, mixins);
  }

  const common = {
    black: '#000',
    white: '#fff'
  };

  const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
  };

  const purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
  };

  const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };

  const orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  };

  const blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  };

  const lightBlue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
  };

  const green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  };

  const _excluded$7 = ["mode", "contrastThreshold", "tonalOffset"];
  const light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: common.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
  const dark = {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#121212',
      default: '#121212'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };

  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = lighten(intent.main, tonalOffsetLight);
      } else if (direction === 'dark') {
        intent.dark = darken(intent.main, tonalOffsetDark);
      }
    }
  }

  function getDefaultPrimary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: blue[200],
        light: blue[50],
        dark: blue[400]
      };
    }

    return {
      main: blue[700],
      light: blue[400],
      dark: blue[800]
    };
  }

  function getDefaultSecondary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: purple[200],
        light: purple[50],
        dark: purple[400]
      };
    }

    return {
      main: purple[500],
      light: purple[300],
      dark: purple[700]
    };
  }

  function getDefaultError(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: red[500],
        light: red[300],
        dark: red[700]
      };
    }

    return {
      main: red[700],
      light: red[400],
      dark: red[800]
    };
  }

  function getDefaultInfo(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: lightBlue[400],
        light: lightBlue[300],
        dark: lightBlue[700]
      };
    }

    return {
      main: lightBlue[700],
      light: lightBlue[500],
      dark: lightBlue[900]
    };
  }

  function getDefaultSuccess(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: green[400],
        light: green[300],
        dark: green[700]
      };
    }

    return {
      main: green[800],
      light: green[500],
      dark: green[900]
    };
  }

  function getDefaultWarning(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: orange[400],
        light: orange[300],
        dark: orange[700]
      };
    }

    return {
      main: '#ED6C02',
      // closest to orange[800] that pass 3:1.
      light: orange[500],
      dark: orange[900]
    };
  }

  function createPalette(palette) {
    const {
      mode = 'light',
      contrastThreshold = 3,
      tonalOffset = 0.2
    } = palette,
          other = _objectWithoutPropertiesLoose(palette, _excluded$7);

    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

    function getContrastText(background) {
      const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

      return contrastText;
    }

    const augmentColor = ({
      color,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color = _extends({}, color);

      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }

      if (!color.hasOwnProperty('main')) {
        throw new Error( formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
      }

      if (typeof color.main !== 'string') {
        throw new Error( formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
      }

      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }

      return color;
    };

    const modes = {
      dark,
      light
    };

    const paletteOutput = deepmerge(_extends({
      // A collection of common colors.
      common,
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: 'primary'
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: 'secondary',
        mainShade: 'A400',
        lightShade: 'A200',
        darkShade: 'A700'
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: 'error'
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: 'warning'
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info,
        name: 'info'
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: 'success'
      }),
      // The grey colors.
      grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset
    }, modes[mode]), other);
    return paletteOutput;
  }

  const _excluded$8 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  const caseAllCaps = {
    textTransform: 'uppercase'
  };
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  /**
   * @see @link{https://material.io/design/typography/the-type-system.html}
   * @see @link{https://material.io/design/typography/understanding-typography.html}
   */

  function createTypography(palette, typography) {
    const _ref = typeof typography === 'function' ? typography(palette) : typography,
          {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2
    } = _ref,
          other = _objectWithoutPropertiesLoose(_ref, _excluded$8);

    const coef = fontSize / 14;

    const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {}, casing, allVariants);

    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
    };
    return deepmerge(_extends({
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold
    }, variants), other, {
      clone: false // No need to clone deep

    });
  }

  const shadowKeyUmbraOpacity = 0.2;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.12;

  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
  } // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


  const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

  const _excluded$9 = ["duration", "easing", "delay"];
  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing

  const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };

  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }

  function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }

  function createTransitions(inputTransitions) {
    const mergedEasing = _extends({}, easing, inputTransitions.easing);

    const mergedDuration = _extends({}, duration, inputTransitions.duration);

    const create = (props = ['all'], options = {}) => {
      const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options,
            other = _objectWithoutPropertiesLoose(options, _excluded$9);

      return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
    };

    return _extends({
      getAutoHeightDuration,
      create
    }, inputTransitions, {
      easing: mergedEasing,
      duration: mergedDuration
    });
  }

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  const zIndex$1 = {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };

  const _excluded$a = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

  function createTheme$1(options = {}, ...args) {
    const {
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {}
    } = options,
          other = _objectWithoutPropertiesLoose(options, _excluded$a);

    const palette = createPalette(paletteInput);
    const systemTheme = createTheme(options);
    let muiTheme = deepmerge(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
      palette,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows.slice(),
      typography: createTypography(palette, typographyInput),
      transitions: createTransitions(transitionsInput),
      zIndex: _extends({}, zIndex$1)
    });
    muiTheme = deepmerge(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);

    return muiTheme;
  }

  const defaultTheme = createTheme$1();

  const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
  const styled$1 = createStyled$1({
    defaultTheme,
    rootShouldForwardProp
  });

  function useThemeProps$1({
    props,
    name
  }) {
    return useThemeProps({
      props,
      name,
      defaultTheme
    });
  }

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
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

    return _extends$1.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var config = {
    disabled: false
  };

  var TransitionGroupContext = React__default.createContext(null);

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }
    ;

    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();

        if (nextStatus === ENTERING) {
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;

      var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default.findDOMNode(this), appearing],
          maybeNode = _ref2[0],
          maybeAppearing = _ref2[1];

      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }

      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(maybeNode, maybeAppearing);

        _this2.onTransitionEnd(enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };

    _proto.performExit = function performExit() {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default.findDOMNode(this); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
        return;
      }

      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(maybeNode);

        _this3.onTransitionEnd(timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default.findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
            maybeNode = _ref3[0],
            maybeNextCallback = _ref3[1];

        this.props.addEndListener(maybeNode, maybeNextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          _in = _this$props.in,
          _mountOnEnter = _this$props.mountOnEnter,
          _unmountOnExit = _this$props.unmountOnExit,
          _appear = _this$props.appear,
          _enter = _this$props.enter,
          _exit = _this$props.exit,
          _timeout = _this$props.timeout,
          _addEndListener = _this$props.addEndListener,
          _onEnter = _this$props.onEnter,
          _onEntering = _this$props.onEntering,
          _onEntered = _this$props.onEntered,
          _onExit = _this$props.onExit,
          _onExiting = _this$props.onExiting,
          _onExited = _this$props.onExited,
          _nodeRef = _this$props.nodeRef,
          childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

      return (
        /*#__PURE__*/
        // allows for nested Transitions
        React__default.createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === 'function' ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
      );
    };

    return Transition;
  }(React__default.Component);

  Transition.contextType = TransitionGroupContext;
  Transition.propTypes =  {}; // Name the function so it is clearer in the documentation

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && React.isValidElement(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!React.isValidElement(child)) return;
      var hasPrev = (key in prevChildMapping);
      var hasNext = (key in nextChildMapping);
      var prevChild = prevChildMapping[key];
      var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values$1 = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
  };
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

  var TransitionGroup = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    } // node is `undefined` when user provided `nodeRef` prop
    ;

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends$1({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose$1(_this$props, ["component", "childFactory"]);

      var contextValue = this.state.contextValue;
      var children = values$1(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }

      return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, /*#__PURE__*/React__default.createElement(Component, props, children));
    };

    return TransitionGroup;
  }(React__default.Component);

  TransitionGroup.propTypes =  {};
  TransitionGroup.defaultProps = defaultProps;

  function Ripple(props) {
    const {
      className,
      classes,
      pulsate = false,
      rippleX,
      rippleY,
      rippleSize,
      in: inProp,
      onExited,
      timeout
    } = props;
    const [leaving, setLeaving] = React.useState(false);
    const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);

    if (!inProp && !leaving) {
      setLeaving(true);
    }

    React.useEffect(() => {
      if (!inProp && onExited != null) {
        // react-transition-group#onExited
        const timeoutId = setTimeout(onExited, timeout);
        return () => {
          clearTimeout(timeoutId);
        };
      }

      return undefined;
    }, [onExited, inProp, timeout]);
    return /*#__PURE__*/jsxRuntime_1("span", {
      className: rippleClassName,
      style: rippleStyles,
      children: /*#__PURE__*/jsxRuntime_1("span", {
        className: childClassName
      })
    });
  }

  const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);

  const _excluded$b = ["center", "classes", "className"];

  let _$1 = t => t,
      _t,
      _t2,
      _t3,
      _t4;
  const DURATION = 550;
  const DELAY_RIPPLE = 80;
  const enterKeyframe = keyframes(_t || (_t = _$1`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
  const exitKeyframe = keyframes(_t2 || (_t2 = _$1`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
  const pulsateKeyframe = keyframes(_t3 || (_t3 = _$1`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
  const TouchRippleRoot = styled$1('span', {
    name: 'MuiTouchRipple',
    slot: 'Root',
    skipSx: true
  })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
  }); // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
  // in string templates. Do not convert these styles in JS object as it will break.

  const TouchRippleRipple = styled$1(Ripple, {
    name: 'MuiTouchRipple',
    slot: 'Ripple'
  })(_t4 || (_t4 = _$1`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({
    theme
  }) => theme.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({
    theme
  }) => theme.transitions.easing.easeInOut);
  /**
   * @ignore - internal component.
   *
   * TODO v5: Make private
   */

  const TouchRipple = /*#__PURE__*/React.forwardRef(function TouchRipple(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiTouchRipple'
    });

    const {
      center: centerProp = false,
      classes = {},
      className
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$b);

    const [ripples, setRipples] = React.useState([]);
    const nextKey = React.useRef(0);
    const rippleCallback = React.useRef(null);
    React.useEffect(() => {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]); // Used to filter out mouse emulated events on mobile.

    const ignoringMouseDown = React.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.

    const startTimer = React.useRef(null); // This is the hook called once the previous timeout is ready.

    const startTimerCommit = React.useRef(null);
    const container = React.useRef(null);
    React.useEffect(() => {
      return () => {
        clearTimeout(startTimer.current);
      };
    }, []);
    const startCommit = React.useCallback(params => {
      const {
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      } = params;
      setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntime_1(TouchRippleRipple, {
        classes: {
          ripple: clsx(classes.ripple, touchRippleClasses.ripple),
          rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
          ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
          child: clsx(classes.child, touchRippleClasses.child),
          childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
          childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
        },
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      }, nextKey.current)]);
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    const start = React.useCallback((event = {}, options = {}, cb) => {
      const {
        pulsate = false,
        center = centerProp || options.pulsate,
        fakeElement = false // For test purposes

      } = options;

      if (event.type === 'mousedown' && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }

      if (event.type === 'touchstart') {
        ignoringMouseDown.current = true;
      }

      const element = fakeElement ? null : container.current;
      const rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }; // Get the size of the ripple

      let rippleX;
      let rippleY;
      let rippleSize;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const {
          clientX,
          clientY
        } = event.touches ? event.touches[0] : event;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size is even.

        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
      } // Touche devices


      if (event.touches) {
        // check that this isn't another touchstart due to multitouch
        // otherwise we will only clear a single timer when unmounting while two
        // are running
        if (startTimerCommit.current === null) {
          // Prepare the ripple effect.
          startTimerCommit.current = () => {
            startCommit({
              pulsate,
              rippleX,
              rippleY,
              rippleSize,
              cb
            });
          }; // Delay the execution of the ripple effect.


          startTimer.current = setTimeout(() => {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
        }
      } else {
        startCommit({
          pulsate,
          rippleX,
          rippleY,
          rippleSize,
          cb
        });
      }
    }, [centerProp, startCommit]);
    const pulsate = React.useCallback(() => {
      start({}, {
        pulsate: true
      });
    }, [start]);
    const stop = React.useCallback((event, cb) => {
      clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
      // We still want to show ripple effect.

      if (event.type === 'touchend' && startTimerCommit.current) {
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.current = setTimeout(() => {
          stop(event, cb);
        });
        return;
      }

      startTimerCommit.current = null;
      setRipples(oldRipples => {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }

        return oldRipples;
      });
      rippleCallback.current = cb;
    }, []);
    React.useImperativeHandle(ref, () => ({
      pulsate,
      start,
      stop
    }), [pulsate, start, stop]);
    return /*#__PURE__*/jsxRuntime_1(TouchRippleRoot, _extends({
      className: clsx(classes.root, touchRippleClasses.root, className),
      ref: container
    }, other, {
      children: /*#__PURE__*/jsxRuntime_1(TransitionGroup, {
        component: null,
        exit: true,
        children: ripples
      })
    }));
  });

  function getButtonBaseUtilityClass(slot) {
    return generateUtilityClass('MuiButtonBase', slot);
  }
  const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);

  const _excluded$c = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"];

  const useUtilityClasses$2 = ownerState => {
    const {
      disabled,
      focusVisible,
      focusVisibleClassName,
      classes
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
    };
    const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);

    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }

    return composedClasses;
  };

  const ButtonBaseRoot = styled$1('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    [`&.${buttonBaseClasses.disabled}`]: {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  });
  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */

  const ButtonBase = /*#__PURE__*/React.forwardRef(function ButtonBase(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiButtonBase'
    });

    const {
      action,
      centerRipple = false,
      children,
      className,
      component = 'button',
      disabled = false,
      disableRipple = false,
      disableTouchRipple = false,
      focusRipple = false,
      LinkComponent = 'a',
      onBlur,
      onClick,
      onContextMenu,
      onDragLeave,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex = 0,
      TouchRippleProps,
      type
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$c);

    const buttonRef = React.useRef(null);
    const rippleRef = React.useRef(null);
    const {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible();
    const [focusVisible, setFocusVisible] = React.useState(false);

    if (disabled && focusVisible) {
      setFocusVisible(false);
    }

    React.useImperativeHandle(action, () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    }), []);
    React.useEffect(() => {
      if (focusVisible && focusRipple && !disableRipple) {
        rippleRef.current.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible]);

    function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
      return useEventCallback(event => {
        if (eventCallback) {
          eventCallback(event);
        }

        const ignore = skipRippleAction;

        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }

        return true;
      });
    }

    const handleMouseDown = useRippleHandler('start', onMouseDown);
    const handleContextMenu = useRippleHandler('stop', onContextMenu);
    const handleDragLeave = useRippleHandler('stop', onDragLeave);
    const handleMouseUp = useRippleHandler('stop', onMouseUp);
    const handleMouseLeave = useRippleHandler('stop', event => {
      if (focusVisible) {
        event.preventDefault();
      }

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    const handleTouchStart = useRippleHandler('start', onTouchStart);
    const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
    const handleTouchMove = useRippleHandler('stop', onTouchMove);
    const handleBlur = useRippleHandler('stop', event => {
      handleBlurVisible(event);

      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }

      if (onBlur) {
        onBlur(event);
      }
    }, false);
    const handleFocus = useEventCallback(event => {
      // Fix for https://github.com/facebook/react/issues/7769
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }

      handleFocusVisible(event);

      if (isFocusVisibleRef.current === true) {
        setFocusVisible(true);

        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }

      if (onFocus) {
        onFocus(event);
      }
    });

    const isNonNativeButton = () => {
      const button = buttonRef.current;
      return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };
    /**
     * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
     */


    const keydownRef = React.useRef(false);
    const handleKeyDown = useEventCallback(event => {
      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
        keydownRef.current = true;
        rippleRef.current.stop(event, () => {
          rippleRef.current.start(event);
        });
      }

      if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
        event.preventDefault();
      }

      if (onKeyDown) {
        onKeyDown(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    });
    const handleKeyUp = useEventCallback(event => {
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
      if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
        keydownRef.current = false;
        rippleRef.current.stop(event, () => {
          rippleRef.current.pulsate(event);
        });
      }

      if (onKeyUp) {
        onKeyUp(event);
      } // Keyboard accessibility for non interactive elements


      if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
        onClick(event);
      }
    });
    let ComponentProp = component;

    if (ComponentProp === 'button' && (other.href || other.to)) {
      ComponentProp = LinkComponent;
    }

    const buttonProps = {};

    if (ComponentProp === 'button') {
      buttonProps.type = type === undefined ? 'button' : type;
      buttonProps.disabled = disabled;
    } else {
      if (!other.href && !other.to) {
        buttonProps.role = 'button';
      }

      if (disabled) {
        buttonProps['aria-disabled'] = disabled;
      }
    }

    const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
    const handleRef = useForkRef(ref, handleOwnRef);
    const [mountedState, setMountedState] = React.useState(false);
    React.useEffect(() => {
      setMountedState(true);
    }, []);
    const enableTouchRipple = mountedState && !disableRipple && !disabled;

    const ownerState = _extends({}, props, {
      centerRipple,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      tabIndex,
      focusVisible
    });

    const classes = useUtilityClasses$2(ownerState);
    return /*#__PURE__*/jsxRuntime_2(ButtonBaseRoot, _extends({
      as: ComponentProp,
      className: clsx(classes.root, className),
      ownerState: ownerState,
      onBlur: handleBlur,
      onClick: onClick,
      onContextMenu: handleContextMenu,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex,
      type: type
    }, buttonProps, other, {
      children: [children, enableTouchRipple ?
      /*#__PURE__*/

      /* TouchRipple is only needed client-side, x2 boost on the server. */
      jsxRuntime_1(TouchRipple, _extends({
        ref: rippleRef,
        center: centerRipple
      }, TouchRippleProps)) : null]
    }));
  });

  function getButtonUtilityClass(slot) {
    return generateUtilityClass('MuiButton', slot);
  }
  const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);

  const _excluded$d = ["children", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];

  const useUtilityClasses$3 = ownerState => {
    const {
      color,
      disableElevation,
      fullWidth,
      size,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ['root', variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color === 'inherit' && 'colorInherit', disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
      label: ['label'],
      startIcon: ['startIcon', `iconSize${capitalize(size)}`],
      endIcon: ['endIcon', `iconSize${capitalize(size)}`]
    };
    const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
    return _extends({}, classes, composedClasses);
  };

  const commonIconStyles = ownerState => _extends({}, ownerState.size === 'small' && {
    '& > *:nth-of-type(1)': {
      fontSize: 18
    }
  }, ownerState.size === 'medium' && {
    '& > *:nth-of-type(1)': {
      fontSize: 20
    }
  }, ownerState.size === 'large' && {
    '& > *:nth-of-type(1)': {
      fontSize: 22
    }
  });

  const ButtonRoot = styled$1(ButtonBase, {
    shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color)}`], styles[`size${capitalize(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
    }
  })(({
    theme,
    ownerState
  }) => _extends({}, theme.typography.button, {
    minWidth: 64,
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
      duration: theme.transitions.duration.short
    }),
    '&:hover': _extends({
      textDecoration: 'none',
      backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
      backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
      border: `1px solid ${theme.palette[ownerState.color].main}`,
      backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, ownerState.variant === 'contained' && {
      backgroundColor: theme.palette.grey.A100,
      boxShadow: theme.shadows[4],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: theme.shadows[2],
        backgroundColor: theme.palette.grey[300]
      }
    }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
      backgroundColor: theme.palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette[ownerState.color].main
      }
    }),
    '&:active': _extends({}, ownerState.variant === 'contained' && {
      boxShadow: theme.shadows[8]
    }),
    [`&.${buttonClasses.focusVisible}`]: _extends({}, ownerState.variant === 'contained' && {
      boxShadow: theme.shadows[6]
    }),
    [`&.${buttonClasses.disabled}`]: _extends({
      color: theme.palette.action.disabled
    }, ownerState.variant === 'outlined' && {
      border: `1px solid ${theme.palette.action.disabledBackground}`
    }, ownerState.variant === 'outlined' && ownerState.color === 'secondary' && {
      border: `1px solid ${theme.palette.action.disabled}`
    }, ownerState.variant === 'contained' && {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground
    })
  }, ownerState.variant === 'text' && {
    padding: '6px 8px'
  }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
    color: theme.palette[ownerState.color].main
  }, ownerState.variant === 'outlined' && {
    padding: '5px 15px',
    border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
  }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
    color: theme.palette[ownerState.color].main,
    border: `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
  }, ownerState.variant === 'contained' && {
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    boxShadow: theme.shadows[2]
  }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
    color: theme.palette[ownerState.color].contrastText,
    backgroundColor: theme.palette[ownerState.color].main
  }, ownerState.color === 'inherit' && {
    color: 'inherit',
    borderColor: 'currentColor'
  }, ownerState.size === 'small' && ownerState.variant === 'text' && {
    padding: '4px 5px',
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === 'large' && ownerState.variant === 'text' && {
    padding: '8px 11px',
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
    padding: '3px 9px',
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === 'large' && ownerState.variant === 'outlined' && {
    padding: '7px 21px',
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === 'small' && ownerState.variant === 'contained' && {
    padding: '4px 10px',
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === 'large' && ownerState.variant === 'contained' && {
    padding: '8px 22px',
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.fullWidth && {
    width: '100%'
  }), ({
    ownerState
  }) => ownerState.disableElevation && {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none'
    },
    [`&.${buttonClasses.focusVisible}`]: {
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    },
    [`&.${buttonClasses.disabled}`]: {
      boxShadow: 'none'
    }
  });
  const ButtonStartIcon = styled$1('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.startIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
    }
  })(({
    ownerState
  }) => _extends({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4
  }, ownerState.size === 'small' && {
    marginLeft: -2
  }, commonIconStyles(ownerState)));
  const ButtonEndIcon = styled$1('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.endIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
    }
  })(({
    ownerState
  }) => _extends({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8
  }, ownerState.size === 'small' && {
    marginRight: -2
  }, commonIconStyles(ownerState)));
  const Button = /*#__PURE__*/React.forwardRef(function Button(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiButton'
    });

    const {
      children,
      color = 'primary',
      component = 'button',
      disabled = false,
      disableElevation = false,
      disableFocusRipple = false,
      endIcon: endIconProp,
      focusVisibleClassName,
      fullWidth = false,
      size = 'medium',
      startIcon: startIconProp,
      type,
      variant = 'text'
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$d);

    const ownerState = _extends({}, props, {
      color,
      component,
      disabled,
      disableElevation,
      disableFocusRipple,
      fullWidth,
      size,
      type,
      variant
    });

    const classes = useUtilityClasses$3(ownerState);

    const startIcon = startIconProp && /*#__PURE__*/jsxRuntime_1(ButtonStartIcon, {
      className: classes.startIcon,
      ownerState: ownerState,
      children: startIconProp
    });

    const endIcon = endIconProp && /*#__PURE__*/jsxRuntime_1(ButtonEndIcon, {
      className: classes.endIcon,
      ownerState: ownerState,
      children: endIconProp
    });

    return /*#__PURE__*/jsxRuntime_2(ButtonRoot, _extends({
      ownerState: ownerState,
      component: component,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ref: ref,
      type: type
    }, other, {
      classes: classes,
      children: [startIcon, children, endIcon]
    }));
  });

  function useTheme$3() {
    const theme = useTheme$2(defaultTheme);

    return theme;
  }

  const reflow = node => node.scrollTop;
  function getTransitionProps(props, options) {
    var _style$transitionDura, _style$transitionTimi;

    const {
      timeout,
      easing,
      style = {}
    } = props;
    return {
      duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
      easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
      delay: style.transitionDelay
    };
  }

  const _excluded$e = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
  const styles = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  const defaultTimeout = {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  };
  /**
   * The Fade transition is used by the [Modal](/components/modal/) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  const Fade = /*#__PURE__*/React.forwardRef(function Fade(props, ref) {
    const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$e);

    const theme = useTheme$3();
    const nodeRef = React.useRef(null);
    const foreignRef = useForkRef(children.ref, ref);
    const handleRef = useForkRef(nodeRef, foreignRef);

    const normalizedTransitionCallback = callback => maybeIsAppearing => {
      if (callback) {
        const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };

    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
      reflow(node); // So the animation always start from the start.

      const transitionProps = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback(node => {
      const transitionProps = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (onExit) {
        onExit(node);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);

    const handleAddEndListener = next => {
      if (addEndListener) {
        // Old call signature before `react-transition-group` implemented `nodeRef`
        addEndListener(nodeRef.current, next);
      }
    };

    return /*#__PURE__*/jsxRuntime_1(TransitionComponent, _extends({
      appear: appear,
      in: inProp,
      nodeRef:  nodeRef ,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      timeout: timeout
    }, other, {
      children: (state, childProps) => {
        return /*#__PURE__*/React.cloneElement(children, _extends({
          style: _extends({
            opacity: 0,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined
          }, styles[state], style, children.props.style),
          ref: handleRef
        }, childProps));
      }
    }));
  });

  const _excluded$f = ["children", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"];

  const extendUtilityClasses = ownerState => {
    const {
      classes
    } = ownerState;
    return classes;
  };

  const BackdropRoot = styled$1('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.invisible && styles.invisible];
    }
  })(({
    ownerState
  }) => _extends({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  }, ownerState.invisible && {
    backgroundColor: 'transparent'
  }));
  const Backdrop = /*#__PURE__*/React.forwardRef(function Backdrop(inProps, ref) {
    var _componentsProps$root;

    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiBackdrop'
    });

    const {
      children,
      components = {},
      componentsProps = {},
      className,
      invisible = false,
      open,
      transitionDuration,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Fade
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$f);

    const ownerState = _extends({}, props, {
      invisible
    });

    const classes = extendUtilityClasses(ownerState);
    return /*#__PURE__*/jsxRuntime_1(TransitionComponent, _extends({
      in: open,
      timeout: transitionDuration
    }, other, {
      children: /*#__PURE__*/jsxRuntime_1(BackdropUnstyled, {
        className: className,
        invisible: invisible,
        components: _extends({
          Root: BackdropRoot
        }, components),
        componentsProps: {
          root: _extends({}, componentsProps.root, (!components.Root || !isHostComponent(components.Root)) && {
            ownerState: _extends({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
          })
        },
        classes: classes,
        ref: ref,
        children: children
      })
    }));
  });

  const _excluded$g = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"];

  const extendUtilityClasses$1 = ownerState => {
    return ownerState.classes;
  };

  const ModalRoot = styled$1('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    position: 'fixed',
    zIndex: theme.zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
  }, !ownerState.open && ownerState.exited && {
    visibility: 'hidden'
  }));
  const ModalBackdrop = styled$1(Backdrop, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (props, styles) => {
      return styles.backdrop;
    }
  })({
    zIndex: -1
  });
  /**
   * Modal is a lower-level construct that is leveraged by the following components:
   *
   * - [Dialog](/api/dialog/)
   * - [Drawer](/api/drawer/)
   * - [Menu](/api/menu/)
   * - [Popover](/api/popover/)
   *
   * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
   * rather than directly using Modal.
   *
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   */

  const Modal = /*#__PURE__*/React.forwardRef(function Modal(inProps, ref) {
    var _componentsProps$root;

    const props = useThemeProps$1({
      name: 'MuiModal',
      props: inProps
    });

    const {
      BackdropComponent = ModalBackdrop,
      closeAfterTransition = false,
      children,
      components = {},
      componentsProps = {},
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$g);

    const [exited, setExited] = React.useState(true);
    const commonProps = {
      closeAfterTransition,
      disableAutoFocus,
      disableEnforceFocus,
      disableEscapeKeyDown,
      disablePortal,
      disableRestoreFocus,
      disableScrollLock,
      hideBackdrop,
      keepMounted
    };

    const ownerState = _extends({}, props, commonProps, {
      exited
    });

    const classes = extendUtilityClasses$1(ownerState);
    return /*#__PURE__*/jsxRuntime_1(ModalUnstyled, _extends({
      components: _extends({
        Root: ModalRoot
      }, components),
      componentsProps: {
        root: _extends({}, componentsProps.root, (!components.Root || !isHostComponent(components.Root)) && {
          ownerState: _extends({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
        })
      },
      BackdropComponent: BackdropComponent,
      onTransitionEnter: () => setExited(false),
      onTransitionExited: () => setExited(true),
      ref: ref
    }, other, {
      classes: classes
    }, commonProps, {
      children: children
    }));
  });

  function getPaperUtilityClass(slot) {
    return generateUtilityClass('MuiPaper', slot);
  }
  const paperClasses = generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);

  const _excluded$h = ["className", "component", "elevation", "square", "variant"];

  const getOverlayAlpha = elevation => {
    let alphaValue;

    if (elevation < 1) {
      alphaValue = 5.11916 * elevation ** 2;
    } else {
      alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }

    return (alphaValue / 100).toFixed(2);
  };

  const useUtilityClasses$4 = ownerState => {
    const {
      square,
      elevation,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
    };
    return composeClasses(slots, getPaperUtilityClass, classes);
  };

  const PaperRoot = styled$1('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    transition: theme.transitions.create('box-shadow')
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === 'outlined' && {
    border: `1px solid ${theme.palette.divider}`
  }, ownerState.variant === 'elevation' && _extends({
    boxShadow: theme.shadows[ownerState.elevation]
  }, theme.palette.mode === 'dark' && {
    backgroundImage: `linear-gradient(${alpha('#fff', getOverlayAlpha(ownerState.elevation))}, ${alpha('#fff', getOverlayAlpha(ownerState.elevation))})`
  })));
  const Paper = /*#__PURE__*/React.forwardRef(function Paper(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiPaper'
    });

    const {
      className,
      component = 'div',
      elevation = 1,
      square = false,
      variant = 'elevation'
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$h);

    const ownerState = _extends({}, props, {
      component,
      elevation,
      square,
      variant
    });

    const classes = useUtilityClasses$4(ownerState);

    return /*#__PURE__*/jsxRuntime_1(PaperRoot, _extends({
      as: component,
      ownerState: ownerState,
      className: clsx(classes.root, className),
      ref: ref
    }, other));
  });

  function getDialogUtilityClass(slot) {
    return generateUtilityClass('MuiDialog', slot);
  }
  const dialogClasses = generateUtilityClasses('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);

  const DialogContext = /*#__PURE__*/React.createContext({});

  const _excluded$i = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
  const DialogBackdrop = styled$1(Backdrop, {
    name: 'MuiDialog',
    slot: 'Backdrop',
    overrides: (props, styles) => styles.backdrop
  })({
    // Improve scrollable dialog support.
    zIndex: -1
  });

  const useUtilityClasses$5 = ownerState => {
    const {
      classes,
      scroll,
      maxWidth,
      fullWidth,
      fullScreen
    } = ownerState;
    const slots = {
      root: ['root'],
      container: ['container', `scroll${capitalize(scroll)}`],
      paper: ['paper', `paperScroll${capitalize(scroll)}`, `paperWidth${capitalize(String(maxWidth))}`, fullWidth && 'paperFullWidth', fullScreen && 'paperFullScreen']
    };
    return composeClasses(slots, getDialogUtilityClass, classes);
  };

  const DialogRoot = styled$1(Modal, {
    name: 'MuiDialog',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    '@media print': {
      // Use !important to override the Modal inline-style.
      position: 'absolute !important'
    }
  });
  const DialogContainer = styled$1('div', {
    name: 'MuiDialog',
    slot: 'Container',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.container, styles[`scroll${capitalize(ownerState.scroll)}`]];
    }
  })(({
    ownerState
  }) => _extends({
    height: '100%',
    '@media print': {
      height: 'auto'
    },
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }, ownerState.scroll === 'paper' && {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, ownerState.scroll === 'body' && {
    overflowY: 'auto',
    overflowX: 'hidden',
    textAlign: 'center',
    '&:after': {
      content: '""',
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '100%',
      width: '0'
    }
  }));
  const DialogPaper = styled$1(Paper, {
    name: 'MuiDialog',
    slot: 'Paper',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.paper, styles[`scrollPaper${capitalize(ownerState.scroll)}`], styles[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    margin: 32,
    position: 'relative',
    overflowY: 'auto',
    // Fix IE11 issue, to remove at some point.
    '@media print': {
      overflowY: 'visible',
      boxShadow: 'none'
    }
  }, ownerState.scroll === 'paper' && {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100% - 64px)'
  }, ownerState.scroll === 'body' && {
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'left' // 'initial' doesn't work on IE11

  }, !ownerState.maxWidth && {
    maxWidth: 'calc(100% - 64px)'
  }, ownerState.maxWidth === 'xs' && {
    maxWidth: theme.breakpoints.unit === 'px' ? Math.max(theme.breakpoints.values.xs, 444) : `${theme.breakpoints.values.xs}${theme.breakpoints.unit}`,
    [`&.${dialogClasses.paperScrollBody}`]: {
      [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
        maxWidth: 'calc(100% - 64px)'
      }
    }
  }, ownerState.maxWidth !== 'xs' && {
    maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
    [`&.${dialogClasses.paperScrollBody}`]: {
      [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
        maxWidth: 'calc(100% - 64px)'
      }
    }
  }, ownerState.fullWidth && {
    width: 'calc(100% - 64px)'
  }, ownerState.fullScreen && {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: 'none',
    borderRadius: 0,
    [`&.${dialogClasses.paperScrollBody}`]: {
      margin: 0,
      maxWidth: '100%'
    }
  }));
  const defaultTransitionDuration = {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  };
  /**
   * Dialogs are overlaid modal paper based components with a backdrop.
   */

  const Dialog = /*#__PURE__*/React.forwardRef(function Dialog(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiDialog'
    });

    const {
      'aria-describedby': ariaDescribedby,
      'aria-labelledby': ariaLabelledbyProp,
      BackdropComponent,
      BackdropProps,
      children,
      className,
      disableEscapeKeyDown = false,
      fullScreen = false,
      fullWidth = false,
      maxWidth = 'sm',
      onBackdropClick,
      onClose,
      open,
      PaperComponent = Paper,
      PaperProps = {},
      scroll = 'paper',
      TransitionComponent = Fade,
      transitionDuration = defaultTransitionDuration,
      TransitionProps
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$i);

    const ownerState = _extends({}, props, {
      disableEscapeKeyDown,
      fullScreen,
      fullWidth,
      maxWidth,
      scroll
    });

    const classes = useUtilityClasses$5(ownerState);
    const backdropClick = React.useRef();

    const handleMouseDown = event => {
      // We don't want to close the dialog when clicking the dialog content.
      // Make sure the event starts and ends on the same DOM element.
      backdropClick.current = event.target === event.currentTarget;
    };

    const handleBackdropClick = event => {
      // Ignore the events not coming from the "backdrop".
      if (!backdropClick.current) {
        return;
      }

      backdropClick.current = null;

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (onClose) {
        onClose(event, 'backdropClick');
      }
    };

    const ariaLabelledby = useId(ariaLabelledbyProp);
    const dialogContextValue = React.useMemo(() => {
      return {
        titleId: ariaLabelledby
      };
    }, [ariaLabelledby]);
    return /*#__PURE__*/jsxRuntime_1(DialogRoot, _extends({
      className: clsx(classes.root, className),
      BackdropProps: _extends({
        transitionDuration,
        as: BackdropComponent
      }, BackdropProps),
      closeAfterTransition: true,
      BackdropComponent: DialogBackdrop,
      disableEscapeKeyDown: disableEscapeKeyDown,
      onClose: onClose,
      open: open,
      ref: ref,
      onClick: handleBackdropClick,
      ownerState: ownerState
    }, other, {
      children: /*#__PURE__*/jsxRuntime_1(TransitionComponent, _extends({
        appear: true,
        in: open,
        timeout: transitionDuration,
        role: "presentation"
      }, TransitionProps, {
        children: /*#__PURE__*/jsxRuntime_1(DialogContainer, {
          className: clsx(classes.container),
          onMouseDown: handleMouseDown,
          ownerState: ownerState,
          children: /*#__PURE__*/jsxRuntime_1(DialogPaper, _extends({
            as: PaperComponent,
            elevation: 24,
            role: "dialog",
            "aria-describedby": ariaDescribedby,
            "aria-labelledby": ariaLabelledby
          }, PaperProps, {
            className: clsx(classes.paper, PaperProps.className),
            ownerState: ownerState,
            children: /*#__PURE__*/jsxRuntime_1(DialogContext.Provider, {
              value: dialogContextValue,
              children: children
            })
          }))
        })
      }))
    }));
  });

  function getTypographyUtilityClass(slot) {
    return generateUtilityClass('MuiTypography', slot);
  }
  const typographyClasses = generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

  const _excluded$j = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];

  const useUtilityClasses$6 = ownerState => {
    const {
      align,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
    };
    return composeClasses(slots, getTypographyUtilityClass, classes);
  };

  const TypographyRoot = styled$1('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    margin: 0
  }, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
    textAlign: ownerState.align
  }, ownerState.noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, ownerState.gutterBottom && {
    marginBottom: '0.35em'
  }, ownerState.paragraph && {
    marginBottom: 16
  }));
  const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
  }; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

  const colorTransformations = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
  };

  const transformDeprecatedColors = color => {
    return colorTransformations[color] || color;
  };

  const Typography = /*#__PURE__*/React.forwardRef(function Typography(inProps, ref) {
    const themeProps = useThemeProps$1({
      props: inProps,
      name: 'MuiTypography'
    });
    const color = transformDeprecatedColors(themeProps.color);
    const props = extendSxProp(_extends({}, themeProps, {
      color
    }));

    const {
      align = 'inherit',
      className,
      component,
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      variant = 'body1',
      variantMapping = defaultVariantMapping
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$j);

    const ownerState = _extends({}, props, {
      align,
      color,
      className,
      component,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      variantMapping
    });

    const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
    const classes = useUtilityClasses$6(ownerState);
    return /*#__PURE__*/jsxRuntime_1(TypographyRoot, _extends({
      as: Component,
      ref: ref,
      ownerState: ownerState,
      className: clsx(classes.root, className)
    }, other));
  });

  function getDialogTitleUtilityClass(slot) {
    return generateUtilityClass('MuiDialogTitle', slot);
  }
  const dialogTitleClasses = generateUtilityClasses('MuiDialogTitle', ['root']);

  const _excluded$k = ["className", "id"];

  const useUtilityClasses$7 = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getDialogTitleUtilityClass, classes);
  };

  const DialogTitleRoot = styled$1(Typography, {
    name: 'MuiDialogTitle',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    padding: '16px 24px',
    flex: '0 0 auto'
  });
  const DialogTitle = /*#__PURE__*/React.forwardRef(function DialogTitle(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiDialogTitle'
    });

    const {
      className,
      id: idProp
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$k);

    const ownerState = props;
    const classes = useUtilityClasses$7(ownerState);
    const {
      titleId: id = idProp
    } = React.useContext(DialogContext);
    return /*#__PURE__*/jsxRuntime_1(DialogTitleRoot, _extends({
      component: "h2",
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ref: ref,
      variant: "h6",
      id: id
    }, other));
  });

  function getDialogContentUtilityClass(slot) {
    return generateUtilityClass('MuiDialogContent', slot);
  }
  const dialogContentClasses = generateUtilityClasses('MuiDialogContent', ['root', 'dividers']);

  const _excluded$l = ["className", "dividers"];

  const useUtilityClasses$8 = ownerState => {
    const {
      classes,
      dividers
    } = ownerState;
    const slots = {
      root: ['root', dividers && 'dividers']
    };
    return composeClasses(slots, getDialogContentUtilityClass, classes);
  };

  const DialogContentRoot = styled$1('div', {
    name: 'MuiDialogContent',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.dividers && styles.dividers];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    flex: '1 1 auto',
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: 'touch',
    overflowY: 'auto',
    padding: '20px 24px'
  }, ownerState.dividers ? {
    padding: '16px 24px',
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`
  } : {
    '.MuiDialogTitle-root + &': {
      paddingTop: 0
    }
  }));
  const DialogContent = /*#__PURE__*/React.forwardRef(function DialogContent(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiDialogContent'
    });

    const {
      className,
      dividers = false
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$l);

    const ownerState = _extends({}, props, {
      dividers
    });

    const classes = useUtilityClasses$8(ownerState);
    return /*#__PURE__*/jsxRuntime_1(DialogContentRoot, _extends({
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ref: ref
    }, other));
  });

  function getDialogActionsUtilityClass(slot) {
    return generateUtilityClass('MuiDialogActions', slot);
  }
  const dialogActionsClasses = generateUtilityClasses('MuiDialogActions', ['root', 'spacing']);

  const _excluded$m = ["className", "disableSpacing"];

  const useUtilityClasses$9 = ownerState => {
    const {
      classes,
      disableSpacing
    } = ownerState;
    const slots = {
      root: ['root', !disableSpacing && 'spacing']
    };
    return composeClasses(slots, getDialogActionsUtilityClass, classes);
  };

  const DialogActionsRoot = styled$1('div', {
    name: 'MuiDialogActions',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, !ownerState.disableSpacing && styles.spacing];
    }
  })(({
    ownerState
  }) => _extends({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  }, !ownerState.disableSpacing && {
    '& > :not(:first-of-type)': {
      marginLeft: 8
    }
  }));
  const DialogActions = /*#__PURE__*/React.forwardRef(function DialogActions(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiDialogActions'
    });

    const {
      className,
      disableSpacing = false
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$m);

    const ownerState = _extends({}, props, {
      disableSpacing
    });

    const classes = useUtilityClasses$9(ownerState);
    return /*#__PURE__*/jsxRuntime_1(DialogActionsRoot, _extends({
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ref: ref
    }, other));
  });

  const _excluded$n = ["component", "direction", "spacing", "divider", "children"];

  function joinChildren(children, separator) {
    const childrenArray = React.Children.toArray(children).filter(Boolean);
    return childrenArray.reduce((output, child, index) => {
      output.push(child);

      if (index < childrenArray.length - 1) {
        output.push( /*#__PURE__*/React.cloneElement(separator, {
          key: `separator-${index}`
        }));
      }

      return output;
    }, []);
  }

  const getSideFromDirection = direction => {
    return {
      row: 'Left',
      'row-reverse': 'Right',
      column: 'Top',
      'column-reverse': 'Bottom'
    }[direction];
  };

  const style$2 = ({
    ownerState,
    theme
  }) => {
    let styles = _extends({
      display: 'flex'
    }, handleBreakpoints({
      theme
    }, ownerState.direction, propValue => ({
      flexDirection: propValue
    })));

    if (ownerState.spacing) {
      const transformer = createUnarySpacing(theme);
      const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
        if (ownerState.spacing[breakpoint] != null || ownerState.direction[breakpoint] != null) {
          acc[breakpoint] = true;
        }

        return acc;
      }, {});
      const directionValues = resolveBreakpointValues({
        values: ownerState.direction,
        base
      });
      const spacingValues = resolveBreakpointValues({
        values: ownerState.spacing,
        base
      });

      const styleFromPropValue = (propValue, breakpoint) => {
        return {
          '& > :not(style) + :not(style)': {
            margin: 0,
            [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue$1(transformer, propValue)
          }
        };
      };

      styles = deepmerge(styles, handleBreakpoints({
        theme
      }, spacingValues, styleFromPropValue));
    }

    return styles;
  };
  const StackRoot = styled$1('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      return [styles.root];
    }
  })(style$2);
  const Stack = /*#__PURE__*/React.forwardRef(function Stack(inProps, ref) {
    const themeProps = useThemeProps$1({
      props: inProps,
      name: 'MuiStack'
    });
    const props = extendSxProp(themeProps);

    const {
      component = 'div',
      direction = 'column',
      spacing = 0,
      divider,
      children
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$n);

    const ownerState = {
      direction,
      spacing
    };
    return /*#__PURE__*/jsxRuntime_1(StackRoot, _extends({
      as: component,
      ownerState: ownerState,
      ref: ref
    }, other, {
      children: divider ? joinChildren(children, divider) : children
    }));
  });

  function mapEventPropToEvent(eventProp) {
    return eventProp.substring(2).toLowerCase();
  }

  function clickedRootScrollbar(event, doc) {
    return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
  }

  /**
   * Listen for click events that occur somewhere in the document, outside of the element itself.
   * For instance, if you need to hide a menu when people click anywhere else on your page.
   *
   * Demos:
   *
   * - [Click Away Listener](https://mui.com/components/click-away-listener/)
   * - [Menus](https://mui.com/components/menus/)
   *
   * API:
   *
   * - [ClickAwayListener API](https://mui.com/api/click-away-listener/)
   */
  function ClickAwayListener(props) {
    const {
      children,
      disableReactTree = false,
      mouseEvent = 'onClick',
      onClickAway,
      touchEvent = 'onTouchEnd'
    } = props;
    const movedRef = React.useRef(false);
    const nodeRef = React.useRef(null);
    const activatedRef = React.useRef(false);
    const syntheticEventRef = React.useRef(false);
    React.useEffect(() => {
      // Ensure that this component is not "activated" synchronously.
      // https://github.com/facebook/react/issues/20074
      setTimeout(() => {
        activatedRef.current = true;
      }, 0);
      return () => {
        activatedRef.current = false;
      };
    }, []);
    const handleRef = useForkRef( // @ts-expect-error TODO upstream fix
    children.ref, nodeRef); // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.

    const handleClickAway = useEventCallback(event => {
      // Given developers can stop the propagation of the synthetic event,
      // we can only be confident with a positive value.
      const insideReactTree = syntheticEventRef.current;
      syntheticEventRef.current = false;
      const doc = ownerDocument(nodeRef.current); // 1. IE11 support, which trigger the handleClickAway even after the unbind
      // 2. The child might render null.
      // 3. Behave like a blur listener.

      if (!activatedRef.current || !nodeRef.current || 'clientX' in event && clickedRootScrollbar(event, doc)) {
        return;
      } // Do not act if user performed touchmove


      if (movedRef.current) {
        movedRef.current = false;
        return;
      }

      let insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

      if (event.composedPath) {
        insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
      } else {
        insideDOM = !doc.documentElement.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target) || nodeRef.current.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target);
      }

      if (!insideDOM && (disableReactTree || !insideReactTree)) {
        onClickAway(event);
      }
    }); // Keep track of mouse/touch events that bubbled up through the portal.

    const createHandleSynthetic = handlerName => event => {
      syntheticEventRef.current = true;
      const childrenPropsHandler = children.props[handlerName];

      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };

    const childrenProps = {
      ref: handleRef
    };

    if (touchEvent !== false) {
      childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
    }

    React.useEffect(() => {
      if (touchEvent !== false) {
        const mappedTouchEvent = mapEventPropToEvent(touchEvent);
        const doc = ownerDocument(nodeRef.current);

        const handleTouchMove = () => {
          movedRef.current = true;
        };

        doc.addEventListener(mappedTouchEvent, handleClickAway);
        doc.addEventListener('touchmove', handleTouchMove);
        return () => {
          doc.removeEventListener(mappedTouchEvent, handleClickAway);
          doc.removeEventListener('touchmove', handleTouchMove);
        };
      }

      return undefined;
    }, [handleClickAway, touchEvent]);

    if (mouseEvent !== false) {
      childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
    }

    React.useEffect(() => {
      if (mouseEvent !== false) {
        const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
        const doc = ownerDocument(nodeRef.current);
        doc.addEventListener(mappedMouseEvent, handleClickAway);
        return () => {
          doc.removeEventListener(mappedMouseEvent, handleClickAway);
        };
      }

      return undefined;
    }, [handleClickAway, mouseEvent]);
    return /*#__PURE__*/jsxRuntime_1(React.Fragment, {
      children: /*#__PURE__*/React.cloneElement(children, childrenProps)
    });
  }

  const _excluded$o = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

  function getScale(value) {
    return `scale(${value}, ${value ** 2})`;
  }

  const styles$1 = {
    entering: {
      opacity: 1,
      transform: getScale(1)
    },
    entered: {
      opacity: 1,
      transform: 'none'
    }
  };
  /**
   * The Grow transition is used by the [Tooltip](/components/tooltips/) and
   * [Popover](/components/popover/) components.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  const Grow = /*#__PURE__*/React.forwardRef(function Grow(props, ref) {
    const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = 'auto',
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$o);

    const timer = React.useRef();
    const autoTimeout = React.useRef();
    const theme = useTheme$3();
    const nodeRef = React.useRef(null);
    const foreignRef = useForkRef(children.ref, ref);
    const handleRef = useForkRef(nodeRef, foreignRef);

    const normalizedTransitionCallback = callback => maybeIsAppearing => {
      if (callback) {
        const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };

    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
      reflow(node); // So the animation always start from the start.

      const {
        duration: transitionDuration,
        delay,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'enter'
      });
      let duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration,
        delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay,
        easing: transitionTimingFunction
      })].join(',');

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback(node => {
      const {
        duration: transitionDuration,
        delay,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'exit'
      });
      let duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration,
        delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333,
        easing: transitionTimingFunction
      })].join(',');
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (onExit) {
        onExit(node);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);

    const handleAddEndListener = next => {
      if (timeout === 'auto') {
        timer.current = setTimeout(next, autoTimeout.current || 0);
      }

      if (addEndListener) {
        // Old call signature before `react-transition-group` implemented `nodeRef`
        addEndListener(nodeRef.current, next);
      }
    };

    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
    return /*#__PURE__*/jsxRuntime_1(TransitionComponent, _extends({
      appear: appear,
      in: inProp,
      nodeRef: nodeRef,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      timeout: timeout === 'auto' ? null : timeout
    }, other, {
      children: (state, childProps) => {
        return /*#__PURE__*/React.cloneElement(children, _extends({
          style: _extends({
            opacity: 0,
            transform: getScale(0.75),
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined
          }, styles$1[state], style, children.props.style),
          ref: handleRef
        }, childProps));
      }
    }));
  });
  Grow.muiSupportAuto = true;

  function getSnackbarContentUtilityClass(slot) {
    return generateUtilityClass('MuiSnackbarContent', slot);
  }
  const snackbarContentClasses = generateUtilityClasses('MuiSnackbarContent', ['root', 'message', 'action']);

  const _excluded$p = ["action", "className", "message", "role"];

  const useUtilityClasses$a = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root'],
      action: ['action'],
      message: ['message']
    };
    return composeClasses(slots, getSnackbarContentUtilityClass, classes);
  };

  const SnackbarContentRoot = styled$1(Paper, {
    name: 'MuiSnackbarContent',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme
  }) => {
    const emphasis = theme.palette.mode === 'light' ? 0.8 : 0.98;
    const backgroundColor = emphasize(theme.palette.background.default, emphasis);
    return _extends({}, theme.typography.body2, {
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        flexGrow: 'initial',
        minWidth: 288
      }
    });
  });
  const SnackbarContentMessage = styled$1('div', {
    name: 'MuiSnackbarContent',
    slot: 'Message',
    overridesResolver: (props, styles) => styles.message
  })({
    padding: '8px 0'
  });
  const SnackbarContentAction = styled$1('div', {
    name: 'MuiSnackbarContent',
    slot: 'Action',
    overridesResolver: (props, styles) => styles.action
  })({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingLeft: 16,
    marginRight: -8
  });
  const SnackbarContent = /*#__PURE__*/React.forwardRef(function SnackbarContent(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiSnackbarContent'
    });

    const {
      action,
      className,
      message,
      role = 'alert'
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$p);

    const ownerState = props;
    const classes = useUtilityClasses$a(ownerState);
    return /*#__PURE__*/jsxRuntime_2(SnackbarContentRoot, _extends({
      role: role,
      square: true,
      elevation: 6,
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ref: ref
    }, other, {
      children: [/*#__PURE__*/jsxRuntime_1(SnackbarContentMessage, {
        className: classes.message,
        ownerState: ownerState,
        children: message
      }), action ? /*#__PURE__*/jsxRuntime_1(SnackbarContentAction, {
        className: classes.action,
        ownerState: ownerState,
        children: action
      }) : null]
    }));
  });

  function getSnackbarUtilityClass(slot) {
    return generateUtilityClass('MuiSnackbar', slot);
  }
  const snackbarClasses = generateUtilityClasses('MuiSnackbar', ['root', 'anchorOriginTopCenter', 'anchorOriginBottomCenter', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft']);

  const _excluded$q = ["onEnter", "onExited"],
        _excluded2$1 = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onClose", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"];

  const useUtilityClasses$b = ownerState => {
    const {
      classes,
      anchorOrigin
    } = ownerState;
    const slots = {
      root: ['root', `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`]
    };
    return composeClasses(slots, getSnackbarUtilityClass, classes);
  };

  const SnackbarRoot = styled$1('div', {
    name: 'MuiSnackbar',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}`]];
    }
  })(({
    theme,
    ownerState
  }) => {
    const center = _extends({}, !ownerState.isRtl && {
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)'
    }, ownerState.isRtl && {
      right: '50%',
      left: 'auto',
      transform: 'translateX(50%)'
    });

    return _extends({
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 8,
      right: 8,
      justifyContent: 'center',
      alignItems: 'center'
    }, ownerState.anchorOrigin.vertical === 'top' ? {
      top: 8
    } : {
      bottom: 8
    }, ownerState.anchorOrigin.horizontal === 'left' && {
      justifyContent: 'flex-start'
    }, ownerState.anchorOrigin.horizontal === 'right' && {
      justifyContent: 'flex-end'
    }, {
      [theme.breakpoints.up('sm')]: _extends({}, ownerState.anchorOrigin.vertical === 'top' ? {
        top: 24
      } : {
        bottom: 24
      }, ownerState.anchorOrigin.horizontal === 'center' && center, ownerState.anchorOrigin.horizontal === 'left' && _extends({}, !ownerState.isRtl && {
        left: 24,
        right: 'auto'
      }, ownerState.isRtl && {
        right: 24,
        left: 'auto'
      }), ownerState.anchorOrigin.horizontal === 'right' && _extends({}, !ownerState.isRtl && {
        right: 24,
        left: 'auto'
      }, ownerState.isRtl && {
        left: 24,
        right: 'auto'
      }))
    });
  });
  const Snackbar = /*#__PURE__*/React.forwardRef(function Snackbar(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiSnackbar'
    });

    const {
      action,
      anchorOrigin: {
        vertical,
        horizontal
      } = {
        vertical: 'bottom',
        horizontal: 'left'
      },
      autoHideDuration = null,
      children,
      className,
      ClickAwayListenerProps,
      ContentProps,
      disableWindowBlurListener = false,
      message,
      onClose,
      onMouseEnter,
      onMouseLeave,
      open,
      resumeHideDuration,
      TransitionComponent = Grow,
      transitionDuration = {
        enter: duration.enteringScreen,
        exit: duration.leavingScreen
      },
      TransitionProps: {
        onEnter,
        onExited
      } = {}
    } = props,
          TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$q),
          other = _objectWithoutPropertiesLoose(props, _excluded2$1);

    const theme = useTheme$3();
    const isRtl = theme.direction === 'rtl';

    const ownerState = _extends({}, props, {
      anchorOrigin: {
        vertical,
        horizontal
      },
      isRtl
    });

    const classes = useUtilityClasses$b(ownerState);
    const timerAutoHide = React.useRef();
    const [exited, setExited] = React.useState(true);
    const handleClose = useEventCallback((...args) => {
      if (onClose) {
        onClose(...args);
      }
    });
    const setAutoHideTimer = useEventCallback(autoHideDurationParam => {
      if (!onClose || autoHideDurationParam == null) {
        return;
      }

      clearTimeout(timerAutoHide.current);
      timerAutoHide.current = setTimeout(() => {
        handleClose(null, 'timeout');
      }, autoHideDurationParam);
    });
    React.useEffect(() => {
      if (open) {
        setAutoHideTimer(autoHideDuration);
      }

      return () => {
        clearTimeout(timerAutoHide.current);
      };
    }, [open, autoHideDuration, setAutoHideTimer]); // Pause the timer when the user is interacting with the Snackbar
    // or when the user hide the window.

    const handlePause = () => {
      clearTimeout(timerAutoHide.current);
    }; // Restart the timer when the user is no longer interacting with the Snackbar
    // or when the window is shown back.


    const handleResume = React.useCallback(() => {
      if (autoHideDuration != null) {
        setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
      }
    }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

    const handleMouseEnter = event => {
      if (onMouseEnter) {
        onMouseEnter(event);
      }

      handlePause();
    };

    const handleMouseLeave = event => {
      if (onMouseLeave) {
        onMouseLeave(event);
      }

      handleResume();
    };

    const handleClickAway = event => {
      if (onClose) {
        onClose(event, 'clickaway');
      }
    };

    const handleExited = node => {
      setExited(true);

      if (onExited) {
        onExited(node);
      }
    };

    const handleEnter = (node, isAppearing) => {
      setExited(false);

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    };

    React.useEffect(() => {
      // TODO: window global should be refactored here
      if (!disableWindowBlurListener && open) {
        window.addEventListener('focus', handleResume);
        window.addEventListener('blur', handlePause);
        return () => {
          window.removeEventListener('focus', handleResume);
          window.removeEventListener('blur', handlePause);
        };
      }

      return undefined;
    }, [disableWindowBlurListener, handleResume, open]); // So we only render active snackbars.

    if (!open && exited) {
      return null;
    }

    return /*#__PURE__*/jsxRuntime_1(ClickAwayListener, _extends({
      onClickAway: handleClickAway
    }, ClickAwayListenerProps, {
      children: /*#__PURE__*/jsxRuntime_1(SnackbarRoot, _extends({
        className: clsx(classes.root, className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ownerState: ownerState,
        ref: ref
      }, other, {
        children: /*#__PURE__*/jsxRuntime_1(TransitionComponent, _extends({
          appear: true,
          in: open,
          timeout: transitionDuration,
          direction: vertical === 'top' ? 'down' : 'up',
          onEnter: handleEnter,
          onExited: handleExited
        }, TransitionProps, {
          children: children || /*#__PURE__*/jsxRuntime_1(SnackbarContent, _extends({
            message: message,
            action: action
          }, ContentProps))
        }))
      }))
    }));
  });

  function getAlertUtilityClass(slot) {
    return generateUtilityClass('MuiAlert', slot);
  }
  const alertClasses = generateUtilityClasses('MuiAlert', ['root', 'action', 'icon', 'message', 'filled', 'filledSuccess', 'filledInfo', 'filledWarning', 'filledError', 'outlined', 'outlinedSuccess', 'outlinedInfo', 'outlinedWarning', 'outlinedError', 'standard', 'standardSuccess', 'standardInfo', 'standardWarning', 'standardError']);

  function getIconButtonUtilityClass(slot) {
    return generateUtilityClass('MuiIconButton', slot);
  }
  const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);

  const _excluded$r = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];

  const useUtilityClasses$c = ownerState => {
    const {
      classes,
      disabled,
      color,
      edge,
      size
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', color !== 'default' && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`]
    };
    return composeClasses(slots, getIconButtonUtilityClass, classes);
  };

  const IconButtonRoot = styled$1(ButtonBase, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    padding: 8,
    borderRadius: '50%',
    overflow: 'visible',
    // Explicitly set the default value to solve a bug on IE11.
    color: theme.palette.action.active,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }, ownerState.edge === 'start' && {
    marginLeft: ownerState.size === 'small' ? -3 : -12
  }, ownerState.edge === 'end' && {
    marginRight: ownerState.size === 'small' ? -3 : -12
  }), ({
    theme,
    ownerState
  }) => _extends({}, ownerState.color === 'inherit' && {
    color: 'inherit'
  }, ownerState.color !== 'inherit' && ownerState.color !== 'default' && {
    color: theme.palette[ownerState.color].main,
    '&:hover': {
      backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }, ownerState.size === 'small' && {
    padding: 5,
    fontSize: theme.typography.pxToRem(18)
  }, ownerState.size === 'large' && {
    padding: 12,
    fontSize: theme.typography.pxToRem(28)
  }, {
    [`&.${iconButtonClasses.disabled}`]: {
      backgroundColor: 'transparent',
      color: theme.palette.action.disabled
    }
  }));
  /**
   * Refer to the [Icons](/components/icons/) section of the documentation
   * regarding the available icon options.
   */

  const IconButton = /*#__PURE__*/React.forwardRef(function IconButton(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiIconButton'
    });

    const {
      edge = false,
      children,
      className,
      color = 'default',
      disabled = false,
      disableFocusRipple = false,
      size = 'medium'
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$r);

    const ownerState = _extends({}, props, {
      edge,
      color,
      disabled,
      disableFocusRipple,
      size
    });

    const classes = useUtilityClasses$c(ownerState);
    return /*#__PURE__*/jsxRuntime_1(IconButtonRoot, _extends({
      className: clsx(classes.root, className),
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled: disabled,
      ref: ref,
      ownerState: ownerState
    }, other, {
      children: children
    }));
  });

  function getSvgIconUtilityClass(slot) {
    return generateUtilityClass('MuiSvgIcon', slot);
  }
  const svgIconClasses = generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

  const _excluded$s = ["children", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"];

  const useUtilityClasses$d = ownerState => {
    const {
      color,
      fontSize,
      classes
    } = ownerState;
    const slots = {
      root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
    };
    return composeClasses(slots, getSvgIconUtilityClass, classes);
  };

  const SvgIconRoot = styled$1('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
    }
  })(({
    theme,
    ownerState
  }) => {
    var _theme$palette$ownerS, _theme$palette$ownerS2;

    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      }),
      fontSize: {
        inherit: 'inherit',
        small: theme.typography.pxToRem(20),
        medium: theme.typography.pxToRem(24),
        large: theme.typography.pxToRem(35)
      }[ownerState.fontSize],
      // TODO v5 deprecate, v6 remove for sx
      color: (_theme$palette$ownerS = (_theme$palette$ownerS2 = theme.palette[ownerState.color]) == null ? void 0 : _theme$palette$ownerS2.main) != null ? _theme$palette$ownerS : {
        action: theme.palette.action.active,
        disabled: theme.palette.action.disabled,
        inherit: undefined
      }[ownerState.color]
    };
  });
  const SvgIcon = /*#__PURE__*/React.forwardRef(function SvgIcon(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiSvgIcon'
    });

    const {
      children,
      className,
      color = 'inherit',
      component = 'svg',
      fontSize = 'medium',
      htmlColor,
      titleAccess,
      viewBox = '0 0 24 24'
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$s);

    const ownerState = _extends({}, props, {
      color,
      component,
      fontSize,
      viewBox
    });

    const classes = useUtilityClasses$d(ownerState);
    return /*#__PURE__*/jsxRuntime_2(SvgIconRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ownerState: ownerState,
      focusable: "false",
      viewBox: viewBox,
      color: htmlColor,
      "aria-hidden": titleAccess ? undefined : true,
      role: titleAccess ? 'img' : undefined,
      ref: ref
    }, other, {
      children: [children, titleAccess ? /*#__PURE__*/jsxRuntime_1("title", {
        children: titleAccess
      }) : null]
    }));
  });
  SvgIcon.muiName = 'SvgIcon';

  function createSvgIcon(path, displayName) {
    const Component = (props, ref) => /*#__PURE__*/jsxRuntime_1(SvgIcon, _extends({
      "data-testid": `${displayName}Icon`,
      ref: ref
    }, props, {
      children: path
    }));

    Component.muiName = SvgIcon.muiName;
    return /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Component));
  }

  var SuccessOutlinedIcon = createSvgIcon( /*#__PURE__*/jsxRuntime_1("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), 'SuccessOutlined');

  var ReportProblemOutlinedIcon = createSvgIcon( /*#__PURE__*/jsxRuntime_1("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), 'ReportProblemOutlined');

  var ErrorOutlineIcon = createSvgIcon( /*#__PURE__*/jsxRuntime_1("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), 'ErrorOutline');

  var InfoOutlinedIcon = createSvgIcon( /*#__PURE__*/jsxRuntime_1("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), 'InfoOutlined');

  var CloseIcon = createSvgIcon( /*#__PURE__*/jsxRuntime_1("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), 'Close');

  var _CloseIcon;

  const _excluded$t = ["action", "children", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"];

  const useUtilityClasses$e = ownerState => {
    const {
      variant,
      color,
      severity,
      classes
    } = ownerState;
    const slots = {
      root: ['root', `${variant}${capitalize(color || severity)}`, `${variant}`],
      icon: ['icon'],
      message: ['message'],
      action: ['action']
    };
    return composeClasses(slots, getAlertUtilityClass, classes);
  };

  const AlertRoot = styled$1(Paper, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color || ownerState.severity)}`]];
    }
  })(({
    theme,
    ownerState
  }) => {
    const getColor = theme.palette.mode === 'light' ? darken : lighten;
    const getBackgroundColor = theme.palette.mode === 'light' ? lighten : darken;
    const color = ownerState.color || ownerState.severity;
    return _extends({}, theme.typography.body2, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px'
    }, color && ownerState.variant === 'standard' && {
      color: getColor(theme.palette[color].light, 0.6),
      backgroundColor: getBackgroundColor(theme.palette[color].light, 0.9),
      [`& .${alertClasses.icon}`]: {
        color: theme.palette.mode === 'dark' ? theme.palette[color].main : theme.palette[color].light
      }
    }, color && ownerState.variant === 'outlined' && {
      color: getColor(theme.palette[color].light, 0.6),
      border: `1px solid ${theme.palette[color].light}`,
      [`& .${alertClasses.icon}`]: {
        color: theme.palette.mode === 'dark' ? theme.palette[color].main : theme.palette[color].light
      }
    }, color && ownerState.variant === 'filled' && {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette[color].dark : theme.palette[color].main
    });
  });
  const AlertIcon = styled$1('div', {
    name: 'MuiAlert',
    slot: 'Icon',
    overridesResolver: (props, styles) => styles.icon
  })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9
  });
  const AlertMessage = styled$1('div', {
    name: 'MuiAlert',
    slot: 'Message',
    overridesResolver: (props, styles) => styles.message
  })({
    padding: '8px 0'
  });
  const AlertAction = styled$1('div', {
    name: 'MuiAlert',
    slot: 'Action',
    overridesResolver: (props, styles) => styles.action
  })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8
  });
  const defaultIconMapping = {
    success: /*#__PURE__*/jsxRuntime_1(SuccessOutlinedIcon, {
      fontSize: "inherit"
    }),
    warning: /*#__PURE__*/jsxRuntime_1(ReportProblemOutlinedIcon, {
      fontSize: "inherit"
    }),
    error: /*#__PURE__*/jsxRuntime_1(ErrorOutlineIcon, {
      fontSize: "inherit"
    }),
    info: /*#__PURE__*/jsxRuntime_1(InfoOutlinedIcon, {
      fontSize: "inherit"
    })
  };
  const Alert = /*#__PURE__*/React.forwardRef(function Alert(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiAlert'
    });

    const {
      action,
      children,
      className,
      closeText = 'Close',
      color,
      icon,
      iconMapping = defaultIconMapping,
      onClose,
      role = 'alert',
      severity = 'success',
      variant = 'standard'
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$t);

    const ownerState = _extends({}, props, {
      color,
      severity,
      variant
    });

    const classes = useUtilityClasses$e(ownerState);
    return /*#__PURE__*/jsxRuntime_2(AlertRoot, _extends({
      role: role,
      square: true,
      elevation: 0,
      ownerState: ownerState,
      className: clsx(classes.root, className),
      ref: ref
    }, other, {
      children: [icon !== false ? /*#__PURE__*/jsxRuntime_1(AlertIcon, {
        ownerState: ownerState,
        className: classes.icon,
        children: icon || iconMapping[severity] || defaultIconMapping[severity]
      }) : null, /*#__PURE__*/jsxRuntime_1(AlertMessage, {
        ownerState: ownerState,
        className: classes.message,
        children: children
      }), action != null ? /*#__PURE__*/jsxRuntime_1(AlertAction, {
        className: classes.action,
        children: action
      }) : null, action == null && onClose ? /*#__PURE__*/jsxRuntime_1(AlertAction, {
        ownerState: ownerState,
        className: classes.action,
        children: /*#__PURE__*/jsxRuntime_1(IconButton, {
          size: "small",
          "aria-label": closeText,
          title: closeText,
          color: "inherit",
          onClick: onClose,
          children: _CloseIcon || (_CloseIcon = /*#__PURE__*/jsxRuntime_1(CloseIcon, {
            fontSize: "small"
          }))
        })
      }) : null]
    }));
  });

  function getAlertTitleUtilityClass(slot) {
    return generateUtilityClass('MuiAlertTitle', slot);
  }
  const alertTitleClasses = generateUtilityClasses('MuiAlertTitle', ['root']);

  const _excluded$u = ["className"];

  const useUtilityClasses$f = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getAlertTitleUtilityClass, classes);
  };

  const AlertTitleRoot = styled$1(Typography, {
    name: 'MuiAlertTitle',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme
  }) => {
    return {
      fontWeight: theme.typography.fontWeightMedium,
      marginTop: -2
    };
  });
  const AlertTitle = /*#__PURE__*/React.forwardRef(function AlertTitle(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiAlertTitle'
    });

    const {
      className
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$u);

    const ownerState = props;
    const classes = useUtilityClasses$f(ownerState);
    return /*#__PURE__*/jsxRuntime_1(AlertTitleRoot, _extends({
      gutterBottom: true,
      component: "div",
      ownerState: ownerState,
      ref: ref,
      className: clsx(classes.root, className)
    }, other));
  });

  /**
   * @ignore - internal component.
   */

  const TableContext = /*#__PURE__*/React.createContext();

  function getTableUtilityClass(slot) {
    return generateUtilityClass('MuiTable', slot);
  }
  const tableClasses = generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);

  const _excluded$v = ["className", "component", "padding", "size", "stickyHeader"];

  const useUtilityClasses$g = ownerState => {
    const {
      classes,
      stickyHeader
    } = ownerState;
    const slots = {
      root: ['root', stickyHeader && 'stickyHeader']
    };
    return composeClasses(slots, getTableUtilityClass, classes);
  };

  const TableRoot = styled$1('table', {
    name: 'MuiTable',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    '& caption': _extends({}, theme.typography.body2, {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: 'left',
      captionSide: 'bottom'
    })
  }, ownerState.stickyHeader && {
    borderCollapse: 'separate'
  }));
  const defaultComponent = 'table';
  const Table = /*#__PURE__*/React.forwardRef(function Table(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiTable'
    });

    const {
      className,
      component = defaultComponent,
      padding = 'normal',
      size = 'medium',
      stickyHeader = false
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$v);

    const ownerState = _extends({}, props, {
      component,
      padding,
      size,
      stickyHeader
    });

    const classes = useUtilityClasses$g(ownerState);
    const table = React.useMemo(() => ({
      padding,
      size,
      stickyHeader
    }), [padding, size, stickyHeader]);
    return /*#__PURE__*/jsxRuntime_1(TableContext.Provider, {
      value: table,
      children: /*#__PURE__*/jsxRuntime_1(TableRoot, _extends({
        as: component,
        role: component === defaultComponent ? null : 'table',
        ref: ref,
        className: clsx(classes.root, className),
        ownerState: ownerState
      }, other))
    });
  });

  /**
   * @ignore - internal component.
   */

  const Tablelvl2Context = /*#__PURE__*/React.createContext();

  function getTableBodyUtilityClass(slot) {
    return generateUtilityClass('MuiTableBody', slot);
  }
  const tableBodyClasses = generateUtilityClasses('MuiTableBody', ['root']);

  const _excluded$w = ["className", "component"];

  const useUtilityClasses$h = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getTableBodyUtilityClass, classes);
  };

  const TableBodyRoot = styled$1('tbody', {
    name: 'MuiTableBody',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    display: 'table-row-group'
  });
  const tablelvl2 = {
    variant: 'body'
  };
  const defaultComponent$1 = 'tbody';
  const TableBody = /*#__PURE__*/React.forwardRef(function TableBody(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiTableBody'
    });

    const {
      className,
      component = defaultComponent$1
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$w);

    const ownerState = _extends({}, props, {
      component
    });

    const classes = useUtilityClasses$h(ownerState);
    return /*#__PURE__*/jsxRuntime_1(Tablelvl2Context.Provider, {
      value: tablelvl2,
      children: /*#__PURE__*/jsxRuntime_1(TableBodyRoot, _extends({
        className: clsx(classes.root, className),
        as: component,
        ref: ref,
        role: component === defaultComponent$1 ? null : 'rowgroup',
        ownerState: ownerState
      }, other))
    });
  });

  function getTableContainerUtilityClass(slot) {
    return generateUtilityClass('MuiTableContainer', slot);
  }
  const tableContainerClasses = generateUtilityClasses('MuiTableContainer', ['root']);

  const _excluded$x = ["className", "component"];

  const useUtilityClasses$i = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getTableContainerUtilityClass, classes);
  };

  const TableContainerRoot = styled$1('div', {
    name: 'MuiTableContainer',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    width: '100%',
    overflowX: 'auto'
  });
  const TableContainer = /*#__PURE__*/React.forwardRef(function TableContainer(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiTableContainer'
    });

    const {
      className,
      component = 'div'
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$x);

    const ownerState = _extends({}, props, {
      component
    });

    const classes = useUtilityClasses$i(ownerState);
    return /*#__PURE__*/jsxRuntime_1(TableContainerRoot, _extends({
      ref: ref,
      as: component,
      className: clsx(classes.root, className),
      ownerState: ownerState
    }, other));
  });

  function getTableHeadUtilityClass(slot) {
    return generateUtilityClass('MuiTableHead', slot);
  }
  const tableHeadClasses = generateUtilityClasses('MuiTableHead', ['root']);

  const _excluded$y = ["className", "component"];

  const useUtilityClasses$j = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getTableHeadUtilityClass, classes);
  };

  const TableHeadRoot = styled$1('thead', {
    name: 'MuiTableHead',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    display: 'table-header-group'
  });
  const tablelvl2$1 = {
    variant: 'head'
  };
  const defaultComponent$2 = 'thead';
  const TableHead = /*#__PURE__*/React.forwardRef(function TableHead(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiTableHead'
    });

    const {
      className,
      component = defaultComponent$2
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$y);

    const ownerState = _extends({}, props, {
      component
    });

    const classes = useUtilityClasses$j(ownerState);
    return /*#__PURE__*/jsxRuntime_1(Tablelvl2Context.Provider, {
      value: tablelvl2$1,
      children: /*#__PURE__*/jsxRuntime_1(TableHeadRoot, _extends({
        as: component,
        className: clsx(classes.root, className),
        ref: ref,
        role: component === defaultComponent$2 ? null : 'rowgroup',
        ownerState: ownerState
      }, other))
    });
  });

  function getTableRowUtilityClass(slot) {
    return generateUtilityClass('MuiTableRow', slot);
  }
  const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);

  const _excluded$z = ["className", "component", "hover", "selected"];

  const useUtilityClasses$k = ownerState => {
    const {
      classes,
      selected,
      hover,
      head,
      footer
    } = ownerState;
    const slots = {
      root: ['root', selected && 'selected', hover && 'hover', head && 'head', footer && 'footer']
    };
    return composeClasses(slots, getTableRowUtilityClass, classes);
  };

  const TableRowRoot = styled$1('tr', {
    name: 'MuiTableRow',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
    }
  })(({
    theme
  }) => ({
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    [`&.${tableRowClasses.hover}:hover`]: {
      backgroundColor: theme.palette.action.hover
    },
    [`&.${tableRowClasses.selected}`]: {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
      }
    }
  }));
  const defaultComponent$3 = 'tr';
  /**
   * Will automatically set dynamic row height
   * based on the material table element parent (head, body, etc).
   */

  const TableRow = /*#__PURE__*/React.forwardRef(function TableRow(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiTableRow'
    });

    const {
      className,
      component = defaultComponent$3,
      hover = false,
      selected = false
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$z);

    const tablelvl2 = React.useContext(Tablelvl2Context);

    const ownerState = _extends({}, props, {
      component,
      hover,
      selected,
      head: tablelvl2 && tablelvl2.variant === 'head',
      footer: tablelvl2 && tablelvl2.variant === 'footer'
    });

    const classes = useUtilityClasses$k(ownerState);
    return /*#__PURE__*/jsxRuntime_1(TableRowRoot, _extends({
      as: component,
      ref: ref,
      className: clsx(classes.root, className),
      role: component === defaultComponent$3 ? null : 'row',
      ownerState: ownerState
    }, other));
  });

  /**
   * @ignore - internal component.
   */

  const GridContext = /*#__PURE__*/React.createContext();

  function getGridUtilityClass(slot) {
    return generateUtilityClass('MuiGrid', slot);
  }
  const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
  const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
  const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const gridClasses = generateUtilityClasses('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth', // spacings
  ...SPACINGS.map(spacing => `spacing-xs-${spacing}`), // direction values
  ...DIRECTIONS.map(direction => `direction-xs-${direction}`), // wrap values
  ...WRAPS.map(wrap => `wrap-xs-${wrap}`), // grid sizes for all breakpoints
  ...GRID_SIZES.map(size => `grid-xs-${size}`), ...GRID_SIZES.map(size => `grid-sm-${size}`), ...GRID_SIZES.map(size => `grid-md-${size}`), ...GRID_SIZES.map(size => `grid-lg-${size}`), ...GRID_SIZES.map(size => `grid-xl-${size}`)]);

  const _excluded$A = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "lg", "md", "rowSpacing", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"];

  function getOffset(val) {
    const parse = parseFloat(val);
    return `${parse}${String(val).replace(String(parse), '') || 'px'}`;
  }

  function generateGrid(globalStyles, theme, breakpoint, ownerState) {
    const size = ownerState[breakpoint];

    if (!size) {
      return;
    }

    let styles = {};

    if (size === true) {
      // For the auto layouting
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    } else if (size === 'auto') {
      styles = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    } else {
      const columnsBreakpointValues = resolveBreakpointValues({
        values: ownerState.columns,
        base: theme.breakpoints.values
      }); // Keep 7 significant numbers.

      const width = `${Math.round(size / columnsBreakpointValues[breakpoint] * 10e7) / 10e5}%`;
      let more = {};

      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        const themeSpacing = theme.spacing(ownerState.columnSpacing);

        if (themeSpacing !== '0px') {
          const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      } // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41


      styles = _extends({
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      }, more);
    } // No need for a media query for the first size.


    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
  }

  function generateDirection({
    theme,
    ownerState
  }) {
    return handleBreakpoints({
      theme
    }, ownerState.direction, propValue => {
      const output = {
        flexDirection: propValue
      };

      if (propValue.indexOf('column') === 0) {
        output[`& > .${gridClasses.item}`] = {
          maxWidth: 'none'
        };
      }

      return output;
    });
  }

  function generateRowGap({
    theme,
    ownerState
  }) {
    const {
      container,
      rowSpacing
    } = ownerState;
    let styles = {};

    if (container && rowSpacing !== 0) {
      styles = handleBreakpoints({
        theme
      }, rowSpacing, propValue => {
        const themeSpacing = theme.spacing(propValue);

        if (themeSpacing !== '0px') {
          return {
            marginTop: `-${getOffset(themeSpacing)}`,
            [`& > .${gridClasses.item}`]: {
              paddingTop: getOffset(themeSpacing)
            }
          };
        }

        return {};
      });
    }

    return styles;
  }
  function generateColumnGap({
    theme,
    ownerState
  }) {
    const {
      container,
      columnSpacing
    } = ownerState;
    let styles = {};

    if (container && columnSpacing !== 0) {
      styles = handleBreakpoints({
        theme
      }, columnSpacing, propValue => {
        const themeSpacing = theme.spacing(propValue);

        if (themeSpacing !== '0px') {
          return {
            width: `calc(100% + ${getOffset(themeSpacing)})`,
            marginLeft: `-${getOffset(themeSpacing)}`,
            [`& > .${gridClasses.item}`]: {
              paddingLeft: getOffset(themeSpacing)
            }
          };
        }

        return {};
      });
    }

    return styles;
  } // Default CSS values
  // flex: '0 1 auto',
  // flexDirection: 'row',
  // alignItems: 'flex-start',
  // flexWrap: 'nowrap',
  // justifyContent: 'flex-start',

  const GridRoot = styled$1('div', {
    name: 'MuiGrid',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        container,
        direction,
        item,
        lg,
        md,
        sm,
        spacing,
        wrap,
        xl,
        xs,
        zeroMinWidth
      } = props.ownerState;
      return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, container && spacing !== 0 && styles[`spacing-xs-${String(spacing)}`], direction !== 'row' && styles[`direction-xs-${String(direction)}`], wrap !== 'wrap' && styles[`wrap-xs-${String(wrap)}`], xs !== false && styles[`grid-xs-${String(xs)}`], sm !== false && styles[`grid-sm-${String(sm)}`], md !== false && styles[`grid-md-${String(md)}`], lg !== false && styles[`grid-lg-${String(lg)}`], xl !== false && styles[`grid-xl-${String(xl)}`]];
    }
  })(({
    ownerState
  }) => _extends({
    boxSizing: 'border-box'
  }, ownerState.container && {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  }, ownerState.item && {
    margin: 0 // For instance, it's useful when used with a `figure` element.

  }, ownerState.zeroMinWidth && {
    minWidth: 0
  }, ownerState.wrap === 'nowrap' && {
    flexWrap: 'nowrap'
  }, ownerState.wrap === 'reverse' && {
    flexWrap: 'wrap-reverse'
  }), generateDirection, generateRowGap, generateColumnGap, ({
    theme,
    ownerState
  }) => theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    // Use side effect over immutability for better performance.
    generateGrid(globalStyles, theme, breakpoint, ownerState);
    return globalStyles;
  }, {}));

  const useUtilityClasses$l = ownerState => {
    const {
      classes,
      container,
      direction,
      item,
      lg,
      md,
      sm,
      spacing,
      wrap,
      xl,
      xs,
      zeroMinWidth
    } = ownerState;
    const slots = {
      root: ['root', container && 'container', item && 'item', zeroMinWidth && 'zeroMinWidth', container && spacing !== 0 && `spacing-xs-${String(spacing)}`, direction !== 'row' && `direction-xs-${String(direction)}`, wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, xs !== false && `grid-xs-${String(xs)}`, sm !== false && `grid-sm-${String(sm)}`, md !== false && `grid-md-${String(md)}`, lg !== false && `grid-lg-${String(lg)}`, xl !== false && `grid-xl-${String(xl)}`]
    };
    return composeClasses(slots, getGridUtilityClass, classes);
  };

  const Grid = /*#__PURE__*/React.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps$1({
      props: inProps,
      name: 'MuiGrid'
    });
    const props = extendSxProp(themeProps);

    const {
      className,
      columns: columnsProp = 12,
      columnSpacing: columnSpacingProp,
      component = 'div',
      container = false,
      direction = 'row',
      item = false,
      lg = false,
      md = false,
      rowSpacing: rowSpacingProp,
      sm = false,
      spacing = 0,
      wrap = 'wrap',
      xl = false,
      xs = false,
      zeroMinWidth = false
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$A);

    const rowSpacing = rowSpacingProp || spacing;
    const columnSpacing = columnSpacingProp || spacing;
    const columns = React.useContext(GridContext) || columnsProp;

    const ownerState = _extends({}, props, {
      columns,
      container,
      direction,
      item,
      lg,
      md,
      sm,
      rowSpacing,
      columnSpacing,
      wrap,
      xl,
      xs,
      zeroMinWidth
    });

    const classes = useUtilityClasses$l(ownerState);

    const wrapChild = element => columns !== 12 ? /*#__PURE__*/jsxRuntime_1(GridContext.Provider, {
      value: columns,
      children: element
    }) : element;

    return wrapChild( /*#__PURE__*/jsxRuntime_1(GridRoot, _extends({
      ownerState: ownerState,
      className: clsx(classes.root, className),
      as: component,
      ref: ref
    }, other)));
  });

  function getTableCellUtilityClass(slot) {
    return generateUtilityClass('MuiTableCell', slot);
  }
  const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);

  const _excluded$B = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];

  const useUtilityClasses$m = ownerState => {
    const {
      classes,
      variant,
      align,
      padding,
      size,
      stickyHeader
    } = ownerState;
    const slots = {
      root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && `align${capitalize(align)}`, padding !== 'normal' && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
    };
    return composeClasses(slots, getTableCellUtilityClass, classes);
  };

  const TableCellRoot = styled$1('td', {
    name: 'MuiTableCell',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== 'normal' && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
    }
  })(({
    theme,
    ownerState
  }) => _extends({}, theme.typography.body2, {
    display: 'table-cell',
    verticalAlign: 'inherit',
    // Workaround for a rendering bug with spanned columns in Chrome 62.0.
    // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
    borderBottom: `1px solid
    ${theme.palette.mode === 'light' ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
    textAlign: 'left',
    padding: 16
  }, ownerState.variant === 'head' && {
    color: theme.palette.text.primary,
    lineHeight: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium
  }, ownerState.variant === 'body' && {
    color: theme.palette.text.primary
  }, ownerState.variant === 'footer' && {
    color: theme.palette.text.secondary,
    lineHeight: theme.typography.pxToRem(21),
    fontSize: theme.typography.pxToRem(12)
  }, ownerState.size === 'small' && {
    padding: '6px 16px',
    [`&.${tableCellClasses.paddingCheckbox}`]: {
      width: 24,
      // prevent the checkbox column from growing
      padding: '0 12px 0 16px',
      '& > *': {
        padding: 0
      }
    }
  }, ownerState.padding === 'checkbox' && {
    width: 48,
    // prevent the checkbox column from growing
    padding: '0 0 0 4px'
  }, ownerState.padding === 'none' && {
    padding: 0
  }, ownerState.align === 'left' && {
    textAlign: 'left'
  }, ownerState.align === 'center' && {
    textAlign: 'center'
  }, ownerState.align === 'right' && {
    textAlign: 'right',
    flexDirection: 'row-reverse'
  }, ownerState.align === 'justify' && {
    textAlign: 'justify'
  }, ownerState.stickyHeader && {
    position: 'sticky',
    top: 0,
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  }));
  /**
   * The component renders a `<th>` element when the parent context is a header
   * or otherwise a `<td>` element.
   */

  const TableCell = /*#__PURE__*/React.forwardRef(function TableCell(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiTableCell'
    });

    const {
      align = 'inherit',
      className,
      component: componentProp,
      padding: paddingProp,
      scope: scopeProp,
      size: sizeProp,
      sortDirection,
      variant: variantProp
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$B);

    const table = React.useContext(TableContext);
    const tablelvl2 = React.useContext(Tablelvl2Context);
    const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
    let component;

    if (componentProp) {
      component = componentProp;
    } else {
      component = isHeadCell ? 'th' : 'td';
    }

    let scope = scopeProp;

    if (!scope && isHeadCell) {
      scope = 'col';
    }

    const variant = variantProp || tablelvl2 && tablelvl2.variant;

    const ownerState = _extends({}, props, {
      align,
      component,
      padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
      size: sizeProp || (table && table.size ? table.size : 'medium'),
      sortDirection,
      stickyHeader: variant === 'head' && table && table.stickyHeader,
      variant
    });

    const classes = useUtilityClasses$m(ownerState);
    let ariaSort = null;

    if (sortDirection) {
      ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
    }

    return /*#__PURE__*/jsxRuntime_1(TableCellRoot, _extends({
      as: component,
      ref: ref,
      className: clsx(classes.root, className),
      "aria-sort": ariaSort,
      scope: scope,
      ownerState: ownerState
    }, other));
  });

  var StyledTableCell = styled$1(TableCell)(function (_ref) {
    var _ref2;

    var theme = _ref.theme;
    return _ref2 = {}, _defineProperty(_ref2, "&.".concat(tableCellClasses.head), {
      backgroundColor: '#7e9dbb',
      color: theme.palette.common.white
    }), _defineProperty(_ref2, "&.".concat(tableCellClasses.body), {
      fontSize: 14
    }), _ref2;
  });
  var StyledTableRow = styled$1(TableRow)(function (_ref3) {
    var theme = _ref3.theme;
    return {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0
      }
    };
  });

  function createData(name, path) {
    return {
      name: name,
      path: path
    };
  }

  function SelectedItem(_ref) {
    var selectedItems = _ref.selectedItems;
    var rows = selectedItems.map(function (item) {
      return createData(item.name, item.path);
    });
    return /*#__PURE__*/jsxRuntime_1(jsxRuntime_3, {
      children: /*#__PURE__*/jsxRuntime_1(Grid, {
        container: true,
        sx: {
          padding: '15px'
        },
        children: /*#__PURE__*/jsxRuntime_1(TableContainer, {
          component: Paper,
          children: /*#__PURE__*/jsxRuntime_2(Table, {
            sx: {
              minWidth: 650
            },
            "aria-label": "selected item table",
            children: [/*#__PURE__*/jsxRuntime_1(TableHead, {
              children: /*#__PURE__*/jsxRuntime_2(TableRow, {
                children: [/*#__PURE__*/jsxRuntime_1(StyledTableCell, {
                  children: "Name"
                }), /*#__PURE__*/jsxRuntime_1(StyledTableCell, {
                  children: "Path"
                })]
              })
            }), /*#__PURE__*/jsxRuntime_1(TableBody, {
              children: rows.map(function (row) {
                return /*#__PURE__*/jsxRuntime_2(StyledTableRow, {
                  children: [/*#__PURE__*/jsxRuntime_1(StyledTableCell, {
                    component: "th",
                    scope: "row",
                    children: row.name
                  }), /*#__PURE__*/jsxRuntime_1(StyledTableCell, {
                    children: row.path
                  })]
                }, row.name);
              })
            })]
          })
        })
      })
    });
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$1
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable = function (argument) {
    return typeof argument === 'function';
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : isCallable(it);
  };

  var aFunction = function (argument) {
    return isCallable(argument) ? argument : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
  };

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process = global_1.process;
  var Deno = global_1.Deno;
  var versions = process && process.versions || Deno && Deno.version;
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
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && engineV8Version && engineV8Version < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */


  var useSymbolAsUid = nativeSymbol
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var isSymbol = useSymbolAsUid ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && Object(it) instanceof $Symbol;
  };

  var tryToString = function (argument) {
    try {
      return String(argument);
    } catch (error) {
      return 'Object';
    }
  };

  // `Assert: IsCallable(argument) is true`
  var aCallable = function (argument) {
    if (isCallable(argument)) return argument;
    throw TypeError(tryToString(argument) + ' is not a function');
  };

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod = function (V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable(func);
  };

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var isPure = false;

  var setGlobal = function (key, value) {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty(global_1, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var SHARED = '__core-js_shared__';
  var store = global_1[SHARED] || setGlobal(SHARED, {});

  var sharedStore = store;

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.18.2',
    mode:  'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
  });

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$1 = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var hasOwnProperty$1 = {}.hasOwnProperty;

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty$1.call(toObject$1(it), key);
  };

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global_1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function (name) {
    if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (nativeSymbol && hasOwnProperty_1(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    } return WellKnownSymbolsStore[name];
  };

  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive = function (input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = exoticToPrim.call(input, pref);
      if (!isObject(result) || isSymbol(result)) return result;
      throw TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : String(key);
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$2 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$2
  };

  // `Assert: Type(argument) is Object`
  var anObject = function (argument) {
    if (isObject(argument)) return argument;
    throw TypeError(String(argument) + ' is not an object');
  };

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f$3 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$3
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var functionToString = Function.toString;

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable(sharedStore.inspectSource)) {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap$1 = global_1.WeakMap;

  var nativeWeakMap = isCallable(WeakMap$1) && /native code/.test(inspectSource(WeakMap$1));

  var keys = shared('keys');

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var WeakMap$2 = global_1.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (nativeWeakMap || sharedStore.state) {
    var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$2());
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;
    set = function (it, metadata) {
      if (wmhas.call(store$1, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset.call(store$1, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store$1, it) || {};
    };
    has = function (it) {
      return wmhas.call(store$1, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
      if (hasOwnProperty_1(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwnProperty_1(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

  var EXISTS$1 = hasOwnProperty_1(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS$1 && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS$1 && (!descriptors || (descriptors && getDescriptor(FunctionPrototype, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS$1,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var redefine = createCommonjsModule(function (module) {
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;

  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split('String');

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== undefined ? options.name : key;
    var state;
    if (isCallable(value)) {
      if (String(name).slice(0, 7) === 'Symbol(') {
        name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
      }
      if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
        createNonEnumerableProperty(value, 'name', name);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
      }
    }
    if (O === global_1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  });
  });

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- safe
    return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
  };

  var max = Math.max;
  var min = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
  };

  var min$1 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min$1(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike = function (obj) {
    return toLength(obj.length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      var index = toAbsoluteIndex(fromIndex, length);
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

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };

  var indexOf = arrayIncludes.indexOf;


  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwnProperty_1(hiddenKeys, key) && hasOwnProperty_1(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
  	f: f$4
  };

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f$5 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$5
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys$1(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwnProperty_1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable(detection) ? fails(detection)
      : !!detection;
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
    options.name        - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
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
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      // extend global
      redefine(target, key, sourceProperty, options);
    }
  };

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray = Array.isArray || function isArray(argument) {
    return classofRaw(argument) == 'Array';
  };

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var test = {};

  test[TO_STRING_TAG] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };

  var toString_1 = function (argument) {
    if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return String(argument);
  };

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var html = getBuiltIn('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */








  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');

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
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
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
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var $getOwnPropertyNames = objectGetOwnPropertyNames.f;

  var toString$1 = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames(it);
    } catch (error) {
      return windowNames.slice();
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var f$6 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]'
      ? getWindowNames(it)
      : $getOwnPropertyNames(toIndexedObject(it));
  };

  var objectGetOwnPropertyNamesExternal = {
  	f: f$6
  };

  var f$7 = wellKnownSymbol;

  var wellKnownSymbolWrapped = {
  	f: f$7
  };

  var path = global_1;

  var defineProperty = objectDefineProperty.f;

  var defineWellKnownSymbol = function (NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!hasOwnProperty_1(Symbol, NAME)) defineProperty(Symbol, NAME, {
      value: wellKnownSymbolWrapped.f(NAME)
    });
  };

  var defineProperty$1 = objectDefineProperty.f;



  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !hasOwnProperty_1(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
      defineProperty$1(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
  };

  // optional / simple context binding
  var functionBindContext = function (fn, that, length) {
    aCallable(fn);
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

  var empty = [];
  var construct = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec = constructorRegExp.exec;
  var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

  var isConstructorModern = function (argument) {
    if (!isCallable(argument)) return false;
    try {
      construct(Object, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function (argument) {
    if (!isCallable(argument)) return false;
    switch (classof(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
      // we can't check .prototype since constructors produced by .bind haven't it
    } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
  };

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor = !construct || fails(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var SPECIES = wellKnownSymbol('species');

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor = function (originalArray) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$1($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that, 3);
      var length = lengthOfArrayLike(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
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
            case 2: push.call(target, value); // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push.call(target, value); // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$1(7)
  };

  var $forEach = arrayIteration.forEach;

  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE$1 = 'prototype';
  var TO_PRIMITIVE$1 = wellKnownSymbol('toPrimitive');
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE$1];
  var $Symbol = global_1.Symbol;
  var $stringify = getBuiltIn('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var nativeDefineProperty = objectDefineProperty.f;
  var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = objectPropertyIsEnumerable.f;
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore$1 = shared('wks');
  var QObject = global_1.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = descriptors && fails(function () {
    return objectCreate(nativeDefineProperty({}, 'a', {
      get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
      nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;

  var wrap = function (tag, description) {
    var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
    setInternalState(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!descriptors) symbol.description = description;
    return symbol;
  };

  var $defineProperty$1 = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPropertyKey(P);
    anObject(Attributes);
    if (hasOwnProperty_1(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwnProperty_1(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwnProperty_1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
      } return setSymbolDescriptor(O, key, Attributes);
    } return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function (key) {
      if (!descriptors || $propertyIsEnumerable$1.call(properties, key)) $defineProperty$1(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
  };

  var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = nativePropertyIsEnumerable.call(this, P);
    if (this === ObjectPrototype && hasOwnProperty_1(AllSymbols, P) && !hasOwnProperty_1(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwnProperty_1(this, P) || !hasOwnProperty_1(AllSymbols, P) || hasOwnProperty_1(this, HIDDEN) && this[HIDDEN][P]
      ? enumerable : true;
  };

  var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype && hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && hasOwnProperty_1(AllSymbols, key) && !(hasOwnProperty_1(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames$1 = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (!hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(hiddenKeys, key)) result.push(key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (hasOwnProperty_1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwnProperty_1(ObjectPrototype, key))) {
        result.push(AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!nativeSymbol) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : toString_1(arguments[0]);
      var tag = uid(description);
      var setter = function (value) {
        if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
        if (hasOwnProperty_1(this, HIDDEN) && hasOwnProperty_1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };
      if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
      return wrap(tag, description);
    };

    redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
      return getInternalState(this).tag;
    });

    redefine($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });

    objectPropertyIsEnumerable.f = $propertyIsEnumerable$1;
    objectDefineProperty.f = $defineProperty$1;
    objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor$1;
    objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames$1;
    objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

    wellKnownSymbolWrapped.f = function (name) {
      return wrap(wellKnownSymbol(name), name);
    };

    if (descriptors) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty($Symbol[PROTOTYPE$1], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        }
      });
      {
        redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable$1, { unsafe: true });
      }
    }
  }

  _export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
    Symbol: $Symbol
  });

  $forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol(name);
  });

  _export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function (key) {
      var string = toString_1(key);
      if (hasOwnProperty_1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
      if (hasOwnProperty_1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  _export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
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

  _export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames$1,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  _export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return objectGetOwnPropertySymbols.f(toObject$1(it));
    }
  });

  // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify
  if ($stringify) {
    var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
      var symbol = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      return $stringify([symbol]) != '[null]'
        // WebKit converts symbol values to JSON as null
        || $stringify({ a: symbol }) != '{}'
        // V8 throws on boxed symbols
        || $stringify(Object(symbol)) != '{}';
    });

    _export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = [it];
        var index = 1;
        var $replacer;
        while (arguments.length > index) args.push(arguments[index++]);
        $replacer = replacer;
        if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!isArray(replacer)) replacer = function (key, value) {
          if (isCallable($replacer)) value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return $stringify.apply(null, args);
      }
    });
  }

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE$1]) {
    var valueOf = $Symbol[PROTOTYPE$1].valueOf;
    redefine($Symbol[PROTOTYPE$1], TO_PRIMITIVE$1, function () {
      return valueOf.apply(this, arguments);
    });
  }
  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag($Symbol, SYMBOL);

  hiddenKeys[HIDDEN] = true;

  var defineProperty$2 = objectDefineProperty.f;


  var NativeSymbol = global_1.Symbol;

  if (descriptors && isCallable(NativeSymbol) && (!('description' in NativeSymbol.prototype) ||
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
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;

    var symbolToString = symbolPrototype.toString;
    var nativeSymbol$1 = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty$2(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (hasOwnProperty_1(EmptyStringDescriptionStore, symbol)) return '';
        var desc = nativeSymbol$1 ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });

    _export({ global: true, forced: true }, {
      Symbol: SymbolWrapper
    });
  }

  // `Symbol.asyncIterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.asynciterator
  defineWellKnownSymbol('asyncIterator');

  // `Symbol.hasInstance` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.hasinstance
  defineWellKnownSymbol('hasInstance');

  // `Symbol.isConcatSpreadable` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
  defineWellKnownSymbol('isConcatSpreadable');

  // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol('iterator');

  // `Symbol.match` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.match
  defineWellKnownSymbol('match');

  // `Symbol.matchAll` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.matchall
  defineWellKnownSymbol('matchAll');

  // `Symbol.replace` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.replace
  defineWellKnownSymbol('replace');

  // `Symbol.search` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.search
  defineWellKnownSymbol('search');

  // `Symbol.species` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.species
  defineWellKnownSymbol('species');

  // `Symbol.split` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.split
  defineWellKnownSymbol('split');

  // `Symbol.toPrimitive` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.toprimitive
  defineWellKnownSymbol('toPrimitive');

  // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag
  defineWellKnownSymbol('toStringTag');

  // `Symbol.unscopables` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.unscopables
  defineWellKnownSymbol('unscopables');

  var correctPrototypeGetter = !fails(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO$1 = sharedKey('IE_PROTO');
  var ObjectPrototype$1 = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    var object = toObject$1(O);
    if (hasOwnProperty_1(object, IE_PROTO$1)) return object[IE_PROTO$1];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof Object ? ObjectPrototype$1 : null;
  };

  var aPossiblePrototype = function (argument) {
    if (typeof argument === 'object' || isCallable(argument)) return argument;
    throw TypeError("Can't set " + String(argument) + ' as a prototype');
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
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  // `InstallErrorCause` abstract operation
  // https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
  var installErrorCause = function (O, options) {
    if (isObject(options) && 'cause' in options) {
      createNonEnumerableProperty(O, 'cause', O.cause);
    }
  };

  var iterators = {};

  var ITERATOR = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');

  var getIteratorMethod = function (it) {
    if (it != undefined) return getMethod(it, ITERATOR$1)
      || getMethod(it, '@@iterator')
      || iterators[classof(it)];
  };

  var getIterator = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(iteratorMethod.call(argument));
    throw TypeError(String(argument) + ' is not iterable');
  };

  var iteratorClose = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
      innerResult = getMethod(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = innerResult.call(iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
  };

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw TypeError(String(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && result instanceof Result) return result;
        } return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }

    next = iterator.next;
    while (!(step = next.call(iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && result instanceof Result) return result;
    } return new Result(false);
  };

  var $AggregateError = function AggregateError(errors, message /* , options */) {
    var that = this;
    var options = arguments.length > 2 ? arguments[2] : undefined;
    if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message, options);
    if (objectSetPrototypeOf) {
      // eslint-disable-next-line unicorn/error-message -- expected
      that = objectSetPrototypeOf(new Error(undefined), objectGetPrototypeOf(that));
    }
    if (message !== undefined) createNonEnumerableProperty(that, 'message', toString_1(message));
    installErrorCause(that, options);
    var errorsArray = [];
    iterate(errors, errorsArray.push, { that: errorsArray });
    createNonEnumerableProperty(that, 'errors', errorsArray);
    return that;
  };

  $AggregateError.prototype = objectCreate(Error.prototype, {
    constructor: createPropertyDescriptor(5, $AggregateError),
    message: createPropertyDescriptor(5, ''),
    name: createPropertyDescriptor(5, 'AggregateError')
  });

  // `AggregateError` constructor
  // https://tc39.es/ecma262/#sec-aggregate-error-constructor
  _export({ global: true }, {
    AggregateError: $AggregateError
  });

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  // `Array.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method
  _export({ target: 'Array', proto: true }, {
    at: function at(index) {
      var O = toObject$1(this);
      var len = lengthOfArrayLike(O);
      var relativeIndex = toIntegerOrInfinity(index);
      var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
      return (k < 0 || k >= len) ? undefined : O[k];
    }
  });

  addToUnscopables('at');

  var createProperty = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var SPECIES$1 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$1] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export({ target: 'Array', proto: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$1(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike(E);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var min$2 = Math.min;

  // `Array.prototype.copyWithin` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin
  // eslint-disable-next-line es/no-array-prototype-copywithin -- safe
  var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
    var O = toObject$1(this);
    var len = lengthOfArrayLike(O);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min$2((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O) O[to] = O[from];
      else delete O[to];
      to += inc;
      from += inc;
    } return O;
  };

  // `Array.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin
  _export({ target: 'Array', proto: true }, {
    copyWithin: arrayCopyWithin
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('copyWithin');

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var $every = arrayIteration.every;


  var STRICT_METHOD = arrayMethodIsStrict('every');

  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  _export({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
    every: function every(callbackfn /* , thisArg */) {
      return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  var arrayFill = function fill(value /* , start = 0, end = @length */) {
    var O = toObject$1(this);
    var length = lengthOfArrayLike(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };

  // `Array.prototype.fill` method
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  _export({ target: 'Array', proto: true }, {
    fill: arrayFill
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('fill');

  var $filter = arrayIteration.filter;


  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $find = arrayIteration.find;


  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var $findIndex = arrayIteration.findIndex;


  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES$1 = true;

  // Shouldn't skip holes
  if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES$1 = false; });

  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findindex
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES$1 }, {
    findIndex: function findIndex(callbackfn /* , that = undefined */) {
      return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND_INDEX);

  // `FlattenIntoArray` abstract operation
  // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
  var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? functionBindContext(mapper, thisArg, 3) : false;
    var element, elementLen;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

        if (depth > 0 && isArray(element)) {
          elementLen = lengthOfArrayLike(element);
          targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
          target[targetIndex] = element;
        }

        targetIndex++;
      }
      sourceIndex++;
    }
    return targetIndex;
  };

  var flattenIntoArray_1 = flattenIntoArray;

  // `Array.prototype.flat` method
  // https://tc39.es/ecma262/#sec-array.prototype.flat
  _export({ target: 'Array', proto: true }, {
    flat: function flat(/* depthArg = 1 */) {
      var depthArg = arguments.length ? arguments[0] : undefined;
      var O = toObject$1(this);
      var sourceLen = lengthOfArrayLike(O);
      var A = arraySpeciesCreate(O, 0);
      A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
      return A;
    }
  });

  // `Array.prototype.flatMap` method
  // https://tc39.es/ecma262/#sec-array.prototype.flatmap
  _export({ target: 'Array', proto: true }, {
    flatMap: function flatMap(callbackfn /* , thisArg */) {
      var O = toObject$1(this);
      var sourceLen = lengthOfArrayLike(O);
      var A;
      aCallable(callbackfn);
      A = arraySpeciesCreate(O, 0);
      A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return A;
    }
  });

  var $forEach$1 = arrayIteration.forEach;


  var STRICT_METHOD$1 = arrayMethodIsStrict('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn /* , thisArg */) {
    return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  _export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
    forEach: arrayForEach
  });

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
  };

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$1(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (;!(step = next.call(iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike(O);
      result = IS_CONSTRUCTOR ? new this(length) : Array(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$2] = function () {
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

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  _export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: arrayFrom
  });

  var $includes = arrayIncludes.includes;


  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  _export({ target: 'Array', proto: true }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */

  var $indexOf = arrayIncludes.indexOf;


  var nativeIndexOf = [].indexOf;

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
  var STRICT_METHOD$2 = arrayMethodIsStrict('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  _export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$2 }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf.apply(this, arguments) || 0
        : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray
  _export({ target: 'Array', stat: true }, {
    isArray: isArray
  });

  var ITERATOR$3 = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR$3].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable(IteratorPrototype[ITERATOR$3])) {
    redefine(IteratorPrototype, ITERATOR$3, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





  var returnThis = function () { return this; };

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis$1 = function () { return this; };

  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$4]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$4])) {
            redefine(CurrentIteratorPrototype, ITERATOR$4, returnThis$1);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if ( CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return nativeIterator.call(this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if ( IterablePrototype[ITERATOR$4] !== defaultIterator) {
      redefine(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
    }
    iterators[NAME] = defaultIterator;

    return methods;
  };

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$1 = internalState.set;
  var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

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
    setInternalState$1(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
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
  iterators.Arguments = iterators.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var nativeJoin = [].join;

  var ES3_STRINGS = indexedObject != Object;
  var STRICT_METHOD$3 = arrayMethodIsStrict('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  _export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$3 }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  /* eslint-disable es/no-array-prototype-lastindexof -- safe */





  var min$3 = Math.min;
  var $lastIndexOf = [].lastIndexOf;
  var NEGATIVE_ZERO$1 = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
  var STRICT_METHOD$4 = arrayMethodIsStrict('lastIndexOf');
  var FORCED$1 = NEGATIVE_ZERO$1 || !STRICT_METHOD$4;

  // `Array.prototype.lastIndexOf` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  var arrayLastIndexOf = FORCED$1 ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO$1) return $lastIndexOf.apply(this, arguments) || 0;
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var index = length - 1;
    if (arguments.length > 1) index = min$3(index, toIntegerOrInfinity(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
    return -1;
  } : $lastIndexOf;

  // `Array.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  // eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
  _export({ target: 'Array', proto: true, forced: arrayLastIndexOf !== [].lastIndexOf }, {
    lastIndexOf: arrayLastIndexOf
  });

  var $map = arrayIteration.map;


  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var ISNT_GENERIC = fails(function () {
    function F() { /* empty */ }
    // eslint-disable-next-line es/no-array-of -- required for testing
    return !(Array.of.call(F) instanceof F);
  });

  // `Array.of` method
  // https://tc39.es/ecma262/#sec-array.of
  // WebKit Array.of isn't generic
  _export({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {
    of: function of(/* ...args */) {
      var index = 0;
      var argumentsLength = arguments.length;
      var result = new (isConstructor(this) ? this : Array)(argumentsLength);
      while (argumentsLength > index) createProperty(result, index, arguments[index++]);
      result.length = argumentsLength;
      return result;
    }
  });

  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod$2 = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aCallable(callbackfn);
      var O = toObject$1(that);
      var self = indexedObject(O);
      var length = lengthOfArrayLike(O);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }
      for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$2(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$2(true)
  };

  var engineIsNode = classofRaw(global_1.process) == 'process';

  var $reduce = arrayReduce.left;




  var STRICT_METHOD$5 = arrayMethodIsStrict('reduce');
  // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
  var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83;

  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  _export({ target: 'Array', proto: true, forced: !STRICT_METHOD$5 || CHROME_BUG }, {
    reduce: function reduce(callbackfn /* , initialValue */) {
      return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $reduceRight = arrayReduce.right;




  var STRICT_METHOD$6 = arrayMethodIsStrict('reduceRight');
  // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
  var CHROME_BUG$1 = !engineIsNode && engineV8Version > 79 && engineV8Version < 83;

  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  _export({ target: 'Array', proto: true, forced: !STRICT_METHOD$6 || CHROME_BUG$1 }, {
    reduceRight: function reduceRight(callbackfn /* , initialValue */) {
      return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var nativeReverse = [].reverse;
  var test$1 = [1, 2];

  // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794
  _export({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray(this)) this.length = this.length;
      return nativeReverse.call(this);
    }
  });

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');

  var SPECIES$2 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$1 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike(O);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$2];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var $some = arrayIteration.some;


  var STRICT_METHOD$7 = arrayMethodIsStrict('some');

  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  _export({ target: 'Array', proto: true, forced: !STRICT_METHOD$7 }, {
    some: function some(callbackfn /* , thisArg */) {
      return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // TODO: use something more complex like timsort?
  var floor$1 = Math.floor;

  var mergeSort = function (array, comparefn) {
    var length = array.length;
    var middle = floor$1(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge$1(
      mergeSort(array.slice(0, middle), comparefn),
      mergeSort(array.slice(middle), comparefn),
      comparefn
    );
  };

  var insertionSort = function (array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    } return array;
  };

  var merge$1 = function (left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;
    var result = [];

    while (lindex < llength || rindex < rlength) {
      if (lindex < llength && rindex < rlength) {
        result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
      } else {
        result.push(lindex < llength ? left[lindex++] : right[rindex++]);
      }
    } return result;
  };

  var arraySort = mergeSort;

  var firefox = engineUserAgent.match(/firefox\/(\d+)/i);

  var engineFfVersion = !!firefox && +firefox[1];

  var engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent);

  var webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./);

  var engineWebkitVersion = !!webkit && +webkit[1];

  var test$2 = [];
  var nativeSort = test$2.sort;

  // IE8-
  var FAILS_ON_UNDEFINED = fails(function () {
    test$2.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails(function () {
    test$2.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD$8 = arrayMethodIsStrict('sort');

  var STABLE_SORT = !fails(function () {
    // feature detection can be too slow, so check engines versions
    if (engineV8Version) return engineV8Version < 70;
    if (engineFfVersion && engineFfVersion > 3) return;
    if (engineIsIeOrEdge) return true;
    if (engineWebkitVersion) return engineWebkitVersion < 603;

    var result = '';
    var code, chr, value, index;

    // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66: case 69: case 70: case 72: value = 3; break;
        case 68: case 71: value = 4; break;
        default: value = 2;
      }

      for (index = 0; index < 47; index++) {
        test$2.push({ k: chr + index, v: value });
      }
    }

    test$2.sort(function (a, b) { return b.v - a.v; });

    for (index = 0; index < test$2.length; index++) {
      chr = test$2[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });

  var FORCED$2 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$8 || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString_1(x) > toString_1(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  _export({ target: 'Array', proto: true, forced: FORCED$2 }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable(comparefn);

      var array = toObject$1(this);

      if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);

      var items = [];
      var arrayLength = lengthOfArrayLike(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) items.push(array[index]);
      }

      items = arraySort(items, getSortCompare(comparefn));
      itemsLength = items.length;
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) delete array[index++];

      return array;
    }
  });

  var SPECIES$3 = wellKnownSymbol('species');

  var setSpecies = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;

    if (descriptors && Constructor && !Constructor[SPECIES$3]) {
      defineProperty(Constructor, SPECIES$3, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  // `Array[@@species]` getter
  // https://tc39.es/ecma262/#sec-get-array-@@species
  setSpecies('Array');

  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('splice');

  var max$2 = Math.max;
  var min$4 = Math.min;
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject$1(this);
      var len = lengthOfArrayLike(O);
      var actualStart = toAbsoluteIndex(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$4(max$2(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
      }
      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
        throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }
      A = arraySpeciesCreate(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
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

  // this method was added to unscopables after implementation
  // in popular engines, so it's moved to a separate module


  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('flat');

  // this method was added to unscopables after implementation
  // in popular engines, so it's moved to a separate module


  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('flatMap');

  // eslint-disable-next-line es/no-typed-arrays -- safe
  var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

  var redefineAll = function (target, src, options) {
    for (var key in src) redefine(target, key, src[key], options);
    return target;
  };

  var anInstance = function (it, Constructor, name) {
    if (it instanceof Constructor) return it;
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  };

  // `ToIndex` abstract operation
  // https://tc39.es/ecma262/#sec-toindex
  var toIndex = function (it) {
    if (it === undefined) return 0;
    var number = toIntegerOrInfinity(it);
    var length = toLength(number);
    if (number !== length) throw RangeError('Wrong length or index');
    return length;
  };

  // IEEE754 conversions based on https://github.com/feross/ieee754
  var abs = Math.abs;
  var pow = Math.pow;
  var floor$2 = Math.floor;
  var log = Math.log;
  var LN2 = Math.LN2;

  var pack = function (number, mantissaLength, bytes) {
    var buffer = new Array(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs(number);
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number || number === Infinity) {
      // eslint-disable-next-line no-self-compare -- NaN check
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor$2(log(number) / LN2);
      if (number * (c = pow(2, -exponent)) < 1) {
        exponent--;
        c *= 2;
      }
      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow(2, 1 - eBias);
      }
      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }
      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
        exponent = 0;
      }
    }
    for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;
    for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
    buffer[--index] |= sign * 128;
    return buffer;
  };

  var unpack = function (buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;
    for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;
    for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity : Infinity;
    } else {
      mantissa = mantissa + pow(2, mantissaLength);
      exponent = exponent - eBias;
    } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
  };

  var ieee754 = {
    pack: pack,
    unpack: unpack
  };

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var defineProperty$3 = objectDefineProperty.f;




  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var getInternalState$2 = internalState.get;
  var setInternalState$2 = internalState.set;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE$2 = 'prototype';
  var WRONG_LENGTH = 'Wrong length';
  var WRONG_INDEX = 'Wrong index';
  var NativeArrayBuffer = global_1[ARRAY_BUFFER];
  var $ArrayBuffer = NativeArrayBuffer;
  var $DataView = global_1[DATA_VIEW];
  var $DataViewPrototype = $DataView && $DataView[PROTOTYPE$2];
  var ObjectPrototype$2 = Object.prototype;
  var RangeError$1 = global_1.RangeError;

  var packIEEE754 = ieee754.pack;
  var unpackIEEE754 = ieee754.unpack;

  var packInt8 = function (number) {
    return [number & 0xFF];
  };

  var packInt16 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };

  var packInt32 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };

  var unpackInt32 = function (buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };

  var packFloat32 = function (number) {
    return packIEEE754(number, 23, 4);
  };

  var packFloat64 = function (number) {
    return packIEEE754(number, 52, 8);
  };

  var addGetter = function (Constructor, key) {
    defineProperty$3(Constructor[PROTOTYPE$2], key, { get: function () { return getInternalState$2(this)[key]; } });
  };

  var get$1 = function (view, count, index, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState$2(view);
    if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
    var bytes = getInternalState$2(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = bytes.slice(start, start + count);
    return isLittleEndian ? pack : pack.reverse();
  };

  var set$1 = function (view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState$2(view);
    if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
    var bytes = getInternalState$2(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);
    for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
  };

  if (!arrayBufferNative) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
      var byteLength = toIndex(length);
      setInternalState$2(this, {
        bytes: arrayFill.call(new Array(byteLength), 0),
        byteLength: byteLength
      });
      if (!descriptors) this.byteLength = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = getInternalState$2(buffer).byteLength;
      var offset = toIntegerOrInfinity(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError$1('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError$1(WRONG_LENGTH);
      setInternalState$2(this, {
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset
      });
      if (!descriptors) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };

    if (descriptors) {
      addGetter($ArrayBuffer, 'byteLength');
      addGetter($DataView, 'buffer');
      addGetter($DataView, 'byteLength');
      addGetter($DataView, 'byteOffset');
    }

    redefineAll($DataView[PROTOTYPE$2], {
      getInt8: function getInt8(byteOffset) {
        return get$1(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get$1(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get$1(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set$1(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set$1(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        set$1(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        set$1(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$1 && NativeArrayBuffer.name !== ARRAY_BUFFER;
    /* eslint-disable no-new -- required for testing */
    if (!fails(function () {
      NativeArrayBuffer(1);
    }) || !fails(function () {
      new NativeArrayBuffer(-1);
    }) || fails(function () {
      new NativeArrayBuffer();
      new NativeArrayBuffer(1.5);
      new NativeArrayBuffer(NaN);
      return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME$1;
    })) {
    /* eslint-enable no-new -- required for testing */
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer);
        return new NativeArrayBuffer(toIndex(length));
      };
      var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE$2] = NativeArrayBuffer[PROTOTYPE$2];
      for (var keys$1 = getOwnPropertyNames(NativeArrayBuffer), j$1 = 0, key; keys$1.length > j$1;) {
        if (!((key = keys$1[j$1++]) in $ArrayBuffer)) {
          createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
        }
      }
      ArrayBufferPrototype.constructor = $ArrayBuffer;
    } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME$1) {
      createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
    }

    // WebKit bug - the same parent prototype for typed arrays and data view
    if (objectSetPrototypeOf && objectGetPrototypeOf($DataViewPrototype) !== ObjectPrototype$2) {
      objectSetPrototypeOf($DataViewPrototype, ObjectPrototype$2);
    }

    // iOS Safari 7.x bug
    var testView = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataViewPrototype.setInt8;
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, { unsafe: true });
  }

  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);

  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };

  var ARRAY_BUFFER$1 = 'ArrayBuffer';
  var ArrayBuffer$1 = arrayBuffer[ARRAY_BUFFER$1];
  var NativeArrayBuffer$1 = global_1[ARRAY_BUFFER$1];

  // `ArrayBuffer` constructor
  // https://tc39.es/ecma262/#sec-arraybuffer-constructor
  _export({ global: true, forced: NativeArrayBuffer$1 !== ArrayBuffer$1 }, {
    ArrayBuffer: ArrayBuffer$1
  });

  setSpecies(ARRAY_BUFFER$1);

  var defineProperty$4 = objectDefineProperty.f;





  var Int8Array$1 = global_1.Int8Array;
  var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
  var Uint8ClampedArray = global_1.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
  var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);
  var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
  var ObjectPrototype$3 = Object.prototype;
  var isPrototypeOf = ObjectPrototype$3.isPrototypeOf;

  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
  var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
  var TYPED_ARRAY_CONSTRUCTOR = uid('TYPED_ARRAY_CONSTRUCTOR');
  // Fixing native typed arrays in Opera Presto crashes the browser, see #595
  var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferNative && !!objectSetPrototypeOf && classof(global_1.opera) !== 'Opera';
  var TYPED_ARRAY_TAG_REQIRED = false;
  var NAME, Constructor, Prototype;

  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };

  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };

  var isView = function isView(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return klass === 'DataView'
      || hasOwnProperty_1(TypedArrayConstructorsList, klass)
      || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
  };

  var isTypedArray = function (it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return hasOwnProperty_1(TypedArrayConstructorsList, klass)
      || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
  };

  var aTypedArray = function (it) {
    if (isTypedArray(it)) return it;
    throw TypeError('Target is not a typed array');
  };

  var aTypedArrayConstructor = function (C) {
    if (isCallable(C) && (!objectSetPrototypeOf || isPrototypeOf.call(TypedArray, C))) return C;
    throw TypeError(tryToString(C) + ' is not a typed array constructor');
  };

  var exportTypedArrayMethod = function (KEY, property, forced) {
    if (!descriptors) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor.prototype, KEY)) try {
        delete TypedArrayConstructor.prototype[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArrayPrototype[KEY] || forced) {
      redefine(TypedArrayPrototype, KEY, forced ? property
        : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
    }
  };

  var exportTypedArrayStaticMethod = function (KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!descriptors) return;
    if (objectSetPrototypeOf) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor, KEY)) try {
          delete TypedArrayConstructor[KEY];
        } catch (error) { /* empty */ }
      }
      if (!TypedArray[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
        } catch (error) { /* empty */ }
      } else return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        redefine(TypedArrayConstructor, KEY, property);
      }
    }
  };

  for (NAME in TypedArrayConstructorsList) {
    Constructor = global_1[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);
    else NATIVE_ARRAY_BUFFER_VIEWS = false;
  }

  for (NAME in BigIntArrayConstructorsList) {
    Constructor = global_1[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor);
  }

  // WebKit bug - typed arrays constructors prototype is Object.prototype
  if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray = function TypedArray() {
      throw TypeError('Incorrect invocation');
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
      if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME], TypedArray);
    }
  }

  if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$3) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
      if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME].prototype, TypedArrayPrototype);
    }
  }

  // WebKit bug - one more object in Uint8ClampedArray prototype chain
  if (NATIVE_ARRAY_BUFFER_VIEWS && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
    objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
  }

  if (descriptors && !hasOwnProperty_1(TypedArrayPrototype, TO_STRING_TAG$3)) {
    TYPED_ARRAY_TAG_REQIRED = true;
    defineProperty$4(TypedArrayPrototype, TO_STRING_TAG$3, { get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    } });
    for (NAME in TypedArrayConstructorsList) if (global_1[NAME]) {
      createNonEnumerableProperty(global_1[NAME], TYPED_ARRAY_TAG, NAME);
    }
  }

  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
    aTypedArray: aTypedArray,
    aTypedArrayConstructor: aTypedArrayConstructor,
    exportTypedArrayMethod: exportTypedArrayMethod,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    isView: isView,
    isTypedArray: isTypedArray,
    TypedArray: TypedArray,
    TypedArrayPrototype: TypedArrayPrototype
  };

  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

  // `ArrayBuffer.isView` method
  // https://tc39.es/ecma262/#sec-arraybuffer.isview
  _export({ target: 'ArrayBuffer', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS$1 }, {
    isView: arrayBufferViewCore.isView
  });

  // `Assert: IsConstructor(argument) is true`
  var aConstructor = function (argument) {
    if (isConstructor(argument)) return argument;
    throw TypeError(tryToString(argument) + ' is not a constructor');
  };

  var SPECIES$4 = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aConstructor(S);
  };

  var ArrayBuffer$2 = arrayBuffer.ArrayBuffer;
  var DataView$1 = arrayBuffer.DataView;
  var nativeArrayBufferSlice = ArrayBuffer$2.prototype.slice;

  var INCORRECT_SLICE = fails(function () {
    return !new ArrayBuffer$2(2).slice(1, undefined).byteLength;
  });

  // `ArrayBuffer.prototype.slice` method
  // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
  _export({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
    slice: function slice(start, end) {
      if (nativeArrayBufferSlice !== undefined && end === undefined) {
        return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
      }
      var length = anObject(this).byteLength;
      var first = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      var result = new (speciesConstructor(this, ArrayBuffer$2))(toLength(fin - first));
      var viewSource = new DataView$1(this);
      var viewTarget = new DataView$1(result);
      var index = 0;
      while (first < fin) {
        viewTarget.setUint8(index++, viewSource.getUint8(first++));
      } return result;
    }
  });

  // `DataView` constructor
  // https://tc39.es/ecma262/#sec-dataview-constructor
  _export({ global: true, forced: !arrayBufferNative }, {
    DataView: arrayBuffer.DataView
  });

  var FORCED$3 = fails(function () {
    return new Date(16e11).getYear() !== 120;
  });

  var getFullYear = Date.prototype.getFullYear;

  // `Date.prototype.getYear` method
  // https://tc39.es/ecma262/#sec-date.prototype.getyear
  _export({ target: 'Date', proto: true, forced: FORCED$3 }, {
    getYear: function getYear() {
      return getFullYear.call(this) - 1900;
    }
  });

  // `Date.now` method
  // https://tc39.es/ecma262/#sec-date.now
  _export({ target: 'Date', stat: true }, {
    now: function now() {
      return new Date().getTime();
    }
  });

  var getTime = Date.prototype.getTime;
  var setFullYear = Date.prototype.setFullYear;

  // `Date.prototype.setYear` method
  // https://tc39.es/ecma262/#sec-date.prototype.setyear
  _export({ target: 'Date', proto: true }, {
    setYear: function setYear(year) {
      // validate
      getTime.call(this);
      var yi = toIntegerOrInfinity(year);
      var yyyy = 0 <= yi && yi <= 99 ? yi + 1900 : yi;
      return setFullYear.call(this, yyyy);
    }
  });

  // `Date.prototype.toGMTString` method
  // https://tc39.es/ecma262/#sec-date.prototype.togmtstring
  _export({ target: 'Date', proto: true }, {
    toGMTString: Date.prototype.toUTCString
  });

  // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  var stringRepeat = function repeat(count) {
    var str = toString_1(requireObjectCoercible(this));
    var result = '';
    var n = toIntegerOrInfinity(count);
    if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
    for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };

  // https://github.com/tc39/proposal-string-pad-start-end





  var ceil$1 = Math.ceil;

  // `String.prototype.{ padStart, padEnd }` methods implementation
  var createMethod$3 = function (IS_END) {
    return function ($this, maxLength, fillString) {
      var S = toString_1(requireObjectCoercible($this));
      var intMaxLength = toLength(maxLength);
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : toString_1(fillString);
      var fillLen, stringFiller;
      if (intMaxLength <= stringLength || fillStr == '') return S;
      fillLen = intMaxLength - stringLength;
      stringFiller = stringRepeat.call(fillStr, ceil$1(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
      return IS_END ? S + stringFiller : stringFiller + S;
    };
  };

  var stringPad = {
    // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart
    start: createMethod$3(false),
    // `String.prototype.padEnd` method
    // https://tc39.es/ecma262/#sec-string.prototype.padend
    end: createMethod$3(true)
  };

  var padStart = stringPad.start;

  var abs$1 = Math.abs;
  var DatePrototype = Date.prototype;
  var getTime$1 = DatePrototype.getTime;
  var nativeDateToISOString = DatePrototype.toISOString;

  // `Date.prototype.toISOString` method implementation
  // https://tc39.es/ecma262/#sec-date.prototype.toisostring
  // PhantomJS / old WebKit fails here:
  var dateToIsoString = (fails(function () {
    return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
  }) || !fails(function () {
    nativeDateToISOString.call(new Date(NaN));
  })) ? function toISOString() {
    if (!isFinite(getTime$1.call(this))) throw RangeError('Invalid time value');
    var date = this;
    var year = date.getUTCFullYear();
    var milliseconds = date.getUTCMilliseconds();
    var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
    return sign + padStart(abs$1(year), sign ? 6 : 4, 0) +
      '-' + padStart(date.getUTCMonth() + 1, 2, 0) +
      '-' + padStart(date.getUTCDate(), 2, 0) +
      'T' + padStart(date.getUTCHours(), 2, 0) +
      ':' + padStart(date.getUTCMinutes(), 2, 0) +
      ':' + padStart(date.getUTCSeconds(), 2, 0) +
      '.' + padStart(milliseconds, 3, 0) +
      'Z';
  } : nativeDateToISOString;

  // `Date.prototype.toISOString` method
  // https://tc39.es/ecma262/#sec-date.prototype.toisostring
  // PhantomJS / old WebKit has a broken implementations
  _export({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== dateToIsoString }, {
    toISOString: dateToIsoString
  });

  var FORCED$4 = fails(function () {
    return new Date(NaN).toJSON() !== null
      || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
  });

  // `Date.prototype.toJSON` method
  // https://tc39.es/ecma262/#sec-date.prototype.tojson
  _export({ target: 'Date', proto: true, forced: FORCED$4 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    toJSON: function toJSON(key) {
      var O = toObject$1(this);
      var pv = toPrimitive(O, 'number');
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

  // `Date.prototype[@@toPrimitive](hint)` method implementation
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
  var dateToPrimitive = function (hint) {
    anObject(this);
    if (hint === 'string' || hint === 'default') hint = 'string';
    else if (hint !== 'number') throw TypeError('Incorrect hint');
    return ordinaryToPrimitive(this, hint);
  };

  var TO_PRIMITIVE$2 = wellKnownSymbol('toPrimitive');
  var DatePrototype$1 = Date.prototype;

  // `Date.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
  if (!(TO_PRIMITIVE$2 in DatePrototype$1)) {
    redefine(DatePrototype$1, TO_PRIMITIVE$2, dateToPrimitive);
  }

  var DatePrototype$2 = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING = 'toString';
  var nativeDateToString = DatePrototype$2[TO_STRING];
  var getTime$2 = DatePrototype$2.getTime;

  // `Date.prototype.toString` method
  // https://tc39.es/ecma262/#sec-date.prototype.tostring
  if (String(new Date(NaN)) != INVALID_DATE) {
    redefine(DatePrototype$2, TO_STRING, function toString() {
      var value = getTime$2.call(this);
      // eslint-disable-next-line no-self-compare -- NaN check
      return value === value ? nativeDateToString.call(this) : INVALID_DATE;
    });
  }

  var raw = /[\w*+\-./@]/;

  var hex = function (code, length) {
    var result = code.toString(16);
    while (result.length < length) result = '0' + result;
    return result;
  };

  // `escape` method
  // https://tc39.es/ecma262/#sec-escape-string
  _export({ global: true }, {
    escape: function escape(string) {
      var str = toString_1(string);
      var result = '';
      var length = str.length;
      var index = 0;
      var chr, code;
      while (index < length) {
        chr = str.charAt(index++);
        if (raw.test(chr)) {
          result += chr;
        } else {
          code = chr.charCodeAt(0);
          if (code < 256) {
            result += '%' + hex(code, 2);
          } else {
            result += '%u' + hex(code, 4).toUpperCase();
          }
        }
      } return result;
    }
  });

  var slice = [].slice;
  var factories = {};

  var construct$1 = function (C, argsLength, args) {
    if (!(argsLength in factories)) {
      for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
      // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
      factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
    } return factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  var functionBind = Function.bind || function bind(that /* , ...args */) {
    var fn = aCallable(this);
    var partArgs = slice.call(arguments, 1);
    var boundFunction = function bound(/* args... */) {
      var args = partArgs.concat(slice.call(arguments));
      return this instanceof boundFunction ? construct$1(fn, args.length, args) : fn.apply(that, args);
    };
    if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
    return boundFunction;
  };

  // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  _export({ target: 'Function', proto: true }, {
    bind: functionBind
  });

  var HAS_INSTANCE = wellKnownSymbol('hasInstance');
  var FunctionPrototype$1 = Function.prototype;

  // `Function.prototype[@@hasInstance]` method
  // https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance
  if (!(HAS_INSTANCE in FunctionPrototype$1)) {
    objectDefineProperty.f(FunctionPrototype$1, HAS_INSTANCE, { value: function (O) {
      if (!isCallable(this) || !isObject(O)) return false;
      if (!isObject(this.prototype)) return O instanceof this;
      // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
      while (O = objectGetPrototypeOf(O)) if (this.prototype === O) return true;
      return false;
    } });
  }

  var FUNCTION_NAME_EXISTS = functionName.EXISTS;
  var defineProperty$5 = objectDefineProperty.f;

  var FunctionPrototype$2 = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype$2.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME$1 = 'name';

  // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (descriptors && !FUNCTION_NAME_EXISTS) {
    defineProperty$5(FunctionPrototype$2, NAME$1, {
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

  // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis
  _export({ global: true }, {
    globalThis: global_1
  });

  var $stringify$1 = getBuiltIn('JSON', 'stringify');
  var re$1 = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var fix = function (match, offset, string) {
    var prev = string.charAt(offset - 1);
    var next = string.charAt(offset + 1);
    if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
      return '\\u' + match.charCodeAt(0).toString(16);
    } return match;
  };

  var FORCED$5 = fails(function () {
    return $stringify$1('\uDF06\uD834') !== '"\\udf06\\ud834"'
      || $stringify$1('\uDEAD') !== '"\\udead"';
  });

  if ($stringify$1) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    // https://github.com/tc39/proposal-well-formed-stringify
    _export({ target: 'JSON', stat: true, forced: FORCED$5 }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var result = $stringify$1.apply(null, arguments);
        return typeof result == 'string' ? result.replace(re$1, fix) : result;
      }
    });
  }

  // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag
  setToStringTag(global_1.JSON, 'JSON', true);

  var freezing = !fails(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var internalMetadata = createCommonjsModule(function (module) {
  var defineProperty = objectDefineProperty.f;





  var REQUIRED = false;
  var METADATA = uid('meta');
  var id = 0;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var isExtensible = Object.isExtensible || function () {
    return true;
  };

  var setMetadata = function (it) {
    defineProperty(it, METADATA, { value: {
      objectID: 'O' + id++, // object ID
      weakData: {}          // weak collections IDs
    } });
  };

  var fastKey = function (it, create) {
    // return a primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwnProperty_1(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMetadata(it);
    // return object ID
    } return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!hasOwnProperty_1(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMetadata(it);
    // return the store of weak collections IDs
    } return it[METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (freezing && REQUIRED && isExtensible(it) && !hasOwnProperty_1(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function () {
    meta.enable = function () { /* empty */ };
    REQUIRED = true;
    var getOwnPropertyNames = objectGetOwnPropertyNames.f;
    var splice = [].splice;
    var test = {};
    test[METADATA] = 1;

    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      objectGetOwnPropertyNames.f = function (it) {
        var result = getOwnPropertyNames(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice.call(result, i, 1);
            break;
          }
        } return result;
      };

      _export({ target: 'Object', stat: true, forced: true }, {
        getOwnPropertyNames: objectGetOwnPropertyNamesExternal.f
      });
    }
  };

  var meta = module.exports = {
    enable: enable,
    fastKey: fastKey,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  };

  hiddenKeys[METADATA] = true;
  });
  var internalMetadata_1 = internalMetadata.enable;
  var internalMetadata_2 = internalMetadata.fastKey;
  var internalMetadata_3 = internalMetadata.getWeakData;
  var internalMetadata_4 = internalMetadata.onFreeze;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      objectSetPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable(NewTarget = dummy.constructor) &&
      NewTarget !== Wrapper &&
      isObject(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global_1[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function (KEY) {
      var nativeMethod = NativePrototype[KEY];
      redefine(NativePrototype, KEY,
        KEY == 'add' ? function add(value) {
          nativeMethod.call(this, value === 0 ? 0 : value);
          return this;
        } : KEY == 'delete' ? function (key) {
          return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
          return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
          return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          nativeMethod.call(this, key === 0 ? 0 : key, value);
          return this;
        }
      );
    };

    var REPLACE = isForced_1(
      CONSTRUCTOR_NAME,
      !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
        new NativeConstructor().entries().next();
      }))
    );

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      internalMetadata.enable();
    } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

      // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    _export({ global: true, forced: Constructor != NativeConstructor }, exported);

    setToStringTag(Constructor, CONSTRUCTOR_NAME);

    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

    return Constructor;
  };

  var defineProperty$6 = objectDefineProperty.f;








  var fastKey = internalMetadata.fastKey;


  var setInternalState$3 = internalState.set;
  var internalStateGetterFor = internalState.getterFor;

  var collectionStrong = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, CONSTRUCTOR_NAME);
        setInternalState$3(that, {
          type: CONSTRUCTOR_NAME,
          index: objectCreate(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!descriptors) that.size = 0;
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
      });

      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index;
        // change existing entry
        if (entry) {
          entry.value = value;
        // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (descriptors) state.size++;
          else that.size++;
          // add to index
          if (index !== 'F') state.index[index] = entry;
        } return that;
      };

      var getEntry = function (that, key) {
        var state = getInternalState(that);
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index];
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      redefineAll(C.prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }
          state.first = state.last = undefined;
          if (descriptors) state.size = 0;
          else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (descriptors) state.size--;
            else that.size--;
          } return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this);
          var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });

      redefineAll(C.prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (descriptors) defineProperty$6(C.prototype, 'size', {
        get: function () {
          return getInternalState(this).size;
        }
      });
      return C;
    },
    setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
      // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
      defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$3(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return { value: undefined, done: true };
        }
        // return step by kind
        if (kind == 'keys') return { value: entry.key, done: false };
        if (kind == 'values') return { value: entry.value, done: false };
        return { value: [entry.key, entry.value], done: false };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species
      setSpecies(CONSTRUCTOR_NAME);
    }
  };

  // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects
  var es_map = collection('Map', function (init) {
    return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong);

  var log$1 = Math.log;

  // `Math.log1p` method implementation
  // https://tc39.es/ecma262/#sec-math.log1p
  // eslint-disable-next-line es/no-math-log1p -- safe
  var mathLog1p = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log$1(1 + x);
  };

  // eslint-disable-next-line es/no-math-acosh -- required for testing
  var $acosh = Math.acosh;
  var log$2 = Math.log;
  var sqrt = Math.sqrt;
  var LN2$1 = Math.LN2;

  var FORCED$6 = !$acosh
    // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
    || Math.floor($acosh(Number.MAX_VALUE)) != 710
    // Tor Browser bug: Math.acosh(Infinity) -> NaN
    || $acosh(Infinity) != Infinity;

  // `Math.acosh` method
  // https://tc39.es/ecma262/#sec-math.acosh
  _export({ target: 'Math', stat: true, forced: FORCED$6 }, {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156
        ? log$2(x) + LN2$1
        : mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  });

  // eslint-disable-next-line es/no-math-asinh -- required for testing
  var $asinh = Math.asinh;
  var log$3 = Math.log;
  var sqrt$1 = Math.sqrt;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log$3(x + sqrt$1(x * x + 1));
  }

  // `Math.asinh` method
  // https://tc39.es/ecma262/#sec-math.asinh
  // Tor Browser bug: Math.asinh(0) -> -0
  _export({ target: 'Math', stat: true, forced: !($asinh && 1 / $asinh(0) > 0) }, {
    asinh: asinh
  });

  // eslint-disable-next-line es/no-math-atanh -- required for testing
  var $atanh = Math.atanh;
  var log$4 = Math.log;

  // `Math.atanh` method
  // https://tc39.es/ecma262/#sec-math.atanh
  // Tor Browser bug: Math.atanh(-0) -> 0
  _export({ target: 'Math', stat: true, forced: !($atanh && 1 / $atanh(-0) < 0) }, {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : log$4((1 + x) / (1 - x)) / 2;
    }
  });

  // `Math.sign` method implementation
  // https://tc39.es/ecma262/#sec-math.sign
  // eslint-disable-next-line es/no-math-sign -- safe
  var mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

  var abs$2 = Math.abs;
  var pow$1 = Math.pow;

  // `Math.cbrt` method
  // https://tc39.es/ecma262/#sec-math.cbrt
  _export({ target: 'Math', stat: true }, {
    cbrt: function cbrt(x) {
      return mathSign(x = +x) * pow$1(abs$2(x), 1 / 3);
    }
  });

  var floor$3 = Math.floor;
  var log$5 = Math.log;
  var LOG2E = Math.LOG2E;

  // `Math.clz32` method
  // https://tc39.es/ecma262/#sec-math.clz32
  _export({ target: 'Math', stat: true }, {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - floor$3(log$5(x + 0.5) * LOG2E) : 32;
    }
  });

  // eslint-disable-next-line es/no-math-expm1 -- safe
  var $expm1 = Math.expm1;
  var exp = Math.exp;

  // `Math.expm1` method implementation
  // https://tc39.es/ecma262/#sec-math.expm1
  var mathExpm1 = (!$expm1
    // Old FF bug
    || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
    // Tor Browser bug
    || $expm1(-2e-17) != -2e-17
  ) ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
  } : $expm1;

  // eslint-disable-next-line es/no-math-cosh -- required for testing
  var $cosh = Math.cosh;
  var abs$3 = Math.abs;
  var E$1 = Math.E;

  // `Math.cosh` method
  // https://tc39.es/ecma262/#sec-math.cosh
  _export({ target: 'Math', stat: true, forced: !$cosh || $cosh(710) === Infinity }, {
    cosh: function cosh(x) {
      var t = mathExpm1(abs$3(x) - 1) + 1;
      return (t + 1 / (t * E$1 * E$1)) * (E$1 / 2);
    }
  });

  // `Math.expm1` method
  // https://tc39.es/ecma262/#sec-math.expm1
  // eslint-disable-next-line es/no-math-expm1 -- required for testing
  _export({ target: 'Math', stat: true, forced: mathExpm1 != Math.expm1 }, { expm1: mathExpm1 });

  var abs$4 = Math.abs;
  var pow$2 = Math.pow;
  var EPSILON = pow$2(2, -52);
  var EPSILON32 = pow$2(2, -23);
  var MAX32 = pow$2(2, 127) * (2 - EPSILON32);
  var MIN32 = pow$2(2, -126);

  var roundTiesToEven = function (n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  };

  // `Math.fround` method implementation
  // https://tc39.es/ecma262/#sec-math.fround
  // eslint-disable-next-line es/no-math-fround -- safe
  var mathFround = Math.fround || function fround(x) {
    var $abs = abs$4(x);
    var $sign = mathSign(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    // eslint-disable-next-line no-self-compare -- NaN check
    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  };

  // `Math.fround` method
  // https://tc39.es/ecma262/#sec-math.fround
  _export({ target: 'Math', stat: true }, { fround: mathFround });

  // eslint-disable-next-line es/no-math-hypot -- required for testing
  var $hypot = Math.hypot;
  var abs$5 = Math.abs;
  var sqrt$2 = Math.sqrt;

  // Chrome 77 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=9546
  var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity;

  // `Math.hypot` method
  // https://tc39.es/ecma262/#sec-math.hypot
  _export({ target: 'Math', stat: true, forced: BUGGY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    hypot: function hypot(value1, value2) {
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;
      while (i < aLen) {
        arg = abs$5(arguments[i++]);
        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return larg === Infinity ? Infinity : larg * sqrt$2(sum);
    }
  });

  // eslint-disable-next-line es/no-math-imul -- required for testing
  var $imul = Math.imul;

  var FORCED$7 = fails(function () {
    return $imul(0xFFFFFFFF, 5) != -5 || $imul.length != 2;
  });

  // `Math.imul` method
  // https://tc39.es/ecma262/#sec-math.imul
  // some WebKit versions fails with big numbers, some has wrong arity
  _export({ target: 'Math', stat: true, forced: FORCED$7 }, {
    imul: function imul(x, y) {
      var UINT16 = 0xFFFF;
      var xn = +x;
      var yn = +y;
      var xl = UINT16 & xn;
      var yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });

  var log$6 = Math.log;
  var LOG10E = Math.LOG10E;

  // `Math.log10` method
  // https://tc39.es/ecma262/#sec-math.log10
  _export({ target: 'Math', stat: true }, {
    log10: function log10(x) {
      return log$6(x) * LOG10E;
    }
  });

  // `Math.log1p` method
  // https://tc39.es/ecma262/#sec-math.log1p
  _export({ target: 'Math', stat: true }, { log1p: mathLog1p });

  var log$7 = Math.log;
  var LN2$2 = Math.LN2;

  // `Math.log2` method
  // https://tc39.es/ecma262/#sec-math.log2
  _export({ target: 'Math', stat: true }, {
    log2: function log2(x) {
      return log$7(x) / LN2$2;
    }
  });

  // `Math.sign` method
  // https://tc39.es/ecma262/#sec-math.sign
  _export({ target: 'Math', stat: true }, {
    sign: mathSign
  });

  var abs$6 = Math.abs;
  var exp$1 = Math.exp;
  var E$2 = Math.E;

  var FORCED$8 = fails(function () {
    // eslint-disable-next-line es/no-math-sinh -- required for testing
    return Math.sinh(-2e-17) != -2e-17;
  });

  // `Math.sinh` method
  // https://tc39.es/ecma262/#sec-math.sinh
  // V8 near Chromium 38 has a problem with very small numbers
  _export({ target: 'Math', stat: true, forced: FORCED$8 }, {
    sinh: function sinh(x) {
      return abs$6(x = +x) < 1 ? (mathExpm1(x) - mathExpm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (E$2 / 2);
    }
  });

  var exp$2 = Math.exp;

  // `Math.tanh` method
  // https://tc39.es/ecma262/#sec-math.tanh
  _export({ target: 'Math', stat: true }, {
    tanh: function tanh(x) {
      var a = mathExpm1(x = +x);
      var b = mathExpm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
    }
  });

  // Math[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-math-@@tostringtag
  setToStringTag(Math, 'Math', true);

  var ceil$2 = Math.ceil;
  var floor$4 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  _export({ target: 'Math', stat: true }, {
    trunc: function trunc(it) {
      return (it > 0 ? floor$4 : ceil$2)(it);
    }
  });

  var valueOf$1 = 1.0.valueOf;

  // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue
  var thisNumberValue = function (value) {
    return valueOf$1.call(value);
  };

  // a string of all valid unicode whitespaces
  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$4 = function (TYPE) {
    return function ($this) {
      var string = toString_1(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
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

  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var defineProperty$7 = objectDefineProperty.f;

  var trim = stringTrim.trim;

  var NUMBER = 'Number';
  var NativeNumber = global_1[NUMBER];
  var NumberPrototype = NativeNumber.prototype;

  // `ToNumeric` abstract operation
  // https://tc39.es/ecma262/#sec-tonumeric
  var toNumeric = function (value) {
    var primValue = toPrimitive(value, 'number');
    return typeof primValue === 'bigint' ? primValue : toNumber(primValue);
  };

  // `ToNumber` abstract operation
  // https://tc39.es/ecma262/#sec-tonumber
  var toNumber = function (argument) {
    var it = toPrimitive(argument, 'number');
    var first, third, radix, maxCode, digits, length, index, code;
    if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
    if (typeof it == 'string' && it.length > 2) {
      it = trim(it);
      first = it.charCodeAt(0);
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
          case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
          default: return +it;
        }
        digits = it.slice(2);
        length = digits.length;
        for (index = 0; index < length; index++) {
          code = digits.charCodeAt(index);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        } return parseInt(digits, radix);
      }
    } return +it;
  };

  // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor
  if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
      var dummy = this;
      // check on 1..constructor(foo) case
      return dummy instanceof NumberWrapper && fails(function () { thisNumberValue(dummy); })
        ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
    };
    for (var keys$2 = descriptors ? getOwnPropertyNames$1(NativeNumber) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES2015 (in case, if modules with ES2015 Number statics required before):
      'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
      // ESNext
      'fromString,range'
    ).split(','), j$2 = 0, key$1; keys$2.length > j$2; j$2++) {
      if (hasOwnProperty_1(NativeNumber, key$1 = keys$2[j$2]) && !hasOwnProperty_1(NumberWrapper, key$1)) {
        defineProperty$7(NumberWrapper, key$1, getOwnPropertyDescriptor$2(NativeNumber, key$1));
      }
    }
    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine(global_1, NUMBER, NumberWrapper);
  }

  // `Number.EPSILON` constant
  // https://tc39.es/ecma262/#sec-number.epsilon
  _export({ target: 'Number', stat: true }, {
    EPSILON: Math.pow(2, -52)
  });

  var globalIsFinite = global_1.isFinite;

  // `Number.isFinite` method
  // https://tc39.es/ecma262/#sec-number.isfinite
  // eslint-disable-next-line es/no-number-isfinite -- safe
  var numberIsFinite = Number.isFinite || function isFinite(it) {
    return typeof it == 'number' && globalIsFinite(it);
  };

  // `Number.isFinite` method
  // https://tc39.es/ecma262/#sec-number.isfinite
  _export({ target: 'Number', stat: true }, { isFinite: numberIsFinite });

  var floor$5 = Math.floor;

  // `IsIntegralNumber` abstract operation
  // https://tc39.es/ecma262/#sec-isintegralnumber
  // eslint-disable-next-line es/no-number-isinteger -- safe
  var isIntegralNumber = Number.isInteger || function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor$5(it) === it;
  };

  // `Number.isInteger` method
  // https://tc39.es/ecma262/#sec-number.isinteger
  _export({ target: 'Number', stat: true }, {
    isInteger: isIntegralNumber
  });

  // `Number.isNaN` method
  // https://tc39.es/ecma262/#sec-number.isnan
  _export({ target: 'Number', stat: true }, {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare -- NaN check
      return number != number;
    }
  });

  var abs$7 = Math.abs;

  // `Number.isSafeInteger` method
  // https://tc39.es/ecma262/#sec-number.issafeinteger
  _export({ target: 'Number', stat: true }, {
    isSafeInteger: function isSafeInteger(number) {
      return isIntegralNumber(number) && abs$7(number) <= 0x1FFFFFFFFFFFFF;
    }
  });

  // `Number.MAX_SAFE_INTEGER` constant
  // https://tc39.es/ecma262/#sec-number.max_safe_integer
  _export({ target: 'Number', stat: true }, {
    MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
  });

  // `Number.MIN_SAFE_INTEGER` constant
  // https://tc39.es/ecma262/#sec-number.min_safe_integer
  _export({ target: 'Number', stat: true }, {
    MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
  });

  var trim$1 = stringTrim.trim;


  var $parseFloat = global_1.parseFloat;
  var Symbol$2 = global_1.Symbol;
  var ITERATOR$5 = Symbol$2 && Symbol$2.iterator;
  var FORCED$9 = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR$5 && !fails(function () { $parseFloat(Object(ITERATOR$5)); }));

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  var numberParseFloat = FORCED$9 ? function parseFloat(string) {
    var trimmedString = trim$1(toString_1(string));
    var result = $parseFloat(trimmedString);
    return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;

  // `Number.parseFloat` method
  // https://tc39.es/ecma262/#sec-number.parseFloat
  // eslint-disable-next-line es/no-number-parsefloat -- required for testing
  _export({ target: 'Number', stat: true, forced: Number.parseFloat != numberParseFloat }, {
    parseFloat: numberParseFloat
  });

  var trim$2 = stringTrim.trim;


  var $parseInt = global_1.parseInt;
  var Symbol$3 = global_1.Symbol;
  var ITERATOR$6 = Symbol$3 && Symbol$3.iterator;
  var hex$1 = /^[+-]?0[Xx]/;
  var FORCED$a = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR$6 && !fails(function () { $parseInt(Object(ITERATOR$6)); }));

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$a ? function parseInt(string, radix) {
    var S = trim$2(toString_1(string));
    return $parseInt(S, (radix >>> 0) || (hex$1.test(S) ? 16 : 10));
  } : $parseInt;

  // `Number.parseInt` method
  // https://tc39.es/ecma262/#sec-number.parseint
  // eslint-disable-next-line es/no-number-parseint -- required for testing
  _export({ target: 'Number', stat: true, forced: Number.parseInt != numberParseInt }, {
    parseInt: numberParseInt
  });

  var nativeToFixed = 1.0.toFixed;
  var floor$6 = Math.floor;

  var pow$3 = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow$3(x, n - 1, acc * x) : pow$3(x * x, n / 2, acc);
  };

  var log$8 = function (x) {
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
      c2 = floor$6(c2 / 1e7);
    }
  };

  var divide = function (data, n) {
    var index = 6;
    var c = 0;
    while (--index >= 0) {
      c += data[index];
      data[index] = floor$6(c / n);
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

  var FORCED$b = nativeToFixed && (
    0.00008.toFixed(3) !== '0.000' ||
    0.9.toFixed(0) !== '1' ||
    1.255.toFixed(2) !== '1.25' ||
    1000000000000000128.0.toFixed(0) !== '1000000000000000128'
  ) || !fails(function () {
    // V8 ~ Android 4.3-
    nativeToFixed.call({});
  });

  // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed
  _export({ target: 'Number', proto: true, forced: FORCED$b }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue(this);
      var fractDigits = toIntegerOrInfinity(fractionDigits);
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
        e = log$8(number * pow$3(2, 69, 1)) - 69;
        z = e < 0 ? number * pow$3(2, -e, 1) : number / pow$3(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;
          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }
          multiply(data, pow$3(10, j, 1), 0);
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

  var nativeToPrecision = 1.0.toPrecision;

  var FORCED$c = fails(function () {
    // IE7-
    return nativeToPrecision.call(1, undefined) !== '1';
  }) || !fails(function () {
    // V8 ~ Android 4.3-
    nativeToPrecision.call({});
  });

  // `Number.prototype.toPrecision` method
  // https://tc39.es/ecma262/#sec-number.prototype.toprecision
  _export({ target: 'Number', proto: true, forced: FORCED$c }, {
    toPrecision: function toPrecision(precision) {
      return precision === undefined
        ? nativeToPrecision.call(thisNumberValue(this))
        : nativeToPrecision.call(thisNumberValue(this), precision);
    }
  });

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$8 = Object.defineProperty;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign$1 = !$assign || fails(function () {
    // should have correct order of operations (Edge bug)
    if (descriptors && $assign({ b: 1 }, $assign(defineProperty$8({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$8(this, 'b', {
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
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$1(target);
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
    } return T;
  } : $assign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  _export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign$1 }, {
    assign: objectAssign$1
  });

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  _export({ target: 'Object', stat: true, sham: !descriptors }, {
    create: objectCreate
  });

  // Forced replacement object prototype accessors methods
  var objectPrototypeAccessorsForced =  !fails(function () {
    // This feature detection crashes old WebKit
    // https://github.com/zloirock/core-js/issues/232
    if (engineWebkitVersion && engineWebkitVersion < 535) return;
    var key = Math.random();
    // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call -- required for testing
    __defineSetter__.call(null, key, function () { /* empty */ });
    delete global_1[key];
  });

  // `Object.prototype.__defineGetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
  if (descriptors) {
    _export({ target: 'Object', proto: true, forced: objectPrototypeAccessorsForced }, {
      __defineGetter__: function __defineGetter__(P, getter) {
        objectDefineProperty.f(toObject$1(this), P, { get: aCallable(getter), enumerable: true, configurable: true });
      }
    });
  }

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  _export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
    defineProperties: objectDefineProperties
  });

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  _export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
    defineProperty: objectDefineProperty.f
  });

  // `Object.prototype.__defineSetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
  if (descriptors) {
    _export({ target: 'Object', proto: true, forced: objectPrototypeAccessorsForced }, {
      __defineSetter__: function __defineSetter__(P, setter) {
        objectDefineProperty.f(toObject$1(this), P, { set: aCallable(setter), enumerable: true, configurable: true });
      }
    });
  }

  var propertyIsEnumerable = objectPropertyIsEnumerable.f;

  // `Object.{ entries, values }` methods implementation
  var createMethod$5 = function (TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject(it);
      var keys = objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) {
        key = keys[i++];
        if (!descriptors || propertyIsEnumerable.call(O, key)) {
          result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }
      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$5(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$5(false)
  };

  var $entries = objectToArray.entries;

  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  _export({ target: 'Object', stat: true }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var onFreeze = internalMetadata.onFreeze;

  // eslint-disable-next-line es/no-object-freeze -- safe
  var $freeze = Object.freeze;
  var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

  // `Object.freeze` method
  // https://tc39.es/ecma262/#sec-object.freeze
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !freezing }, {
    freeze: function freeze(it) {
      return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
    }
  });

  // `Object.fromEntries` method
  // https://github.com/tc39/proposal-object-from-entries
  _export({ target: 'Object', stat: true }, {
    fromEntries: function fromEntries(iterable) {
      var obj = {};
      iterate(iterable, function (k, v) {
        createProperty(obj, k, v);
      }, { AS_ENTRIES: true });
      return obj;
    }
  });

  var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;


  var FAILS_ON_PRIMITIVES$1 = fails(function () { nativeGetOwnPropertyDescriptor$1(1); });
  var FORCED$d = !descriptors || FAILS_ON_PRIMITIVES$1;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  _export({ target: 'Object', stat: true, forced: FORCED$d, sham: !descriptors }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return nativeGetOwnPropertyDescriptor$1(toIndexedObject(it), key);
    }
  });

  // `Object.getOwnPropertyDescriptors` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  _export({ target: 'Object', stat: true, sham: !descriptors }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject(object);
      var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
      var keys = ownKeys$1(O);
      var result = {};
      var index = 0;
      var key, descriptor;
      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty(result, key, descriptor);
      }
      return result;
    }
  });

  var getOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f;

  // eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
  var FAILS_ON_PRIMITIVES$2 = fails(function () { return !Object.getOwnPropertyNames(1); });

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2 }, {
    getOwnPropertyNames: getOwnPropertyNames$2
  });

  var FAILS_ON_PRIMITIVES$3 = fails(function () { objectGetPrototypeOf(1); });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$3, sham: !correctPrototypeGetter }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return objectGetPrototypeOf(toObject$1(it));
    }
  });

  // `Object.hasOwn` method
  // https://github.com/tc39/proposal-accessible-object-hasownproperty
  _export({ target: 'Object', stat: true }, {
    hasOwn: hasOwnProperty_1
  });

  // `SameValue` abstract operation
  // https://tc39.es/ecma262/#sec-samevalue
  // eslint-disable-next-line es/no-object-is -- safe
  var sameValue = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  // `Object.is` method
  // https://tc39.es/ecma262/#sec-object.is
  _export({ target: 'Object', stat: true }, {
    is: sameValue
  });

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES$4 = fails(function () { $isExtensible(1); });

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$4 }, {
    isExtensible: function isExtensible(it) {
      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    }
  });

  // eslint-disable-next-line es/no-object-isfrozen -- safe
  var $isFrozen = Object.isFrozen;
  var FAILS_ON_PRIMITIVES$5 = fails(function () { $isFrozen(1); });

  // `Object.isFrozen` method
  // https://tc39.es/ecma262/#sec-object.isfrozen
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$5 }, {
    isFrozen: function isFrozen(it) {
      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    }
  });

  // eslint-disable-next-line es/no-object-issealed -- safe
  var $isSealed = Object.isSealed;
  var FAILS_ON_PRIMITIVES$6 = fails(function () { $isSealed(1); });

  // `Object.isSealed` method
  // https://tc39.es/ecma262/#sec-object.issealed
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$6 }, {
    isSealed: function isSealed(it) {
      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    }
  });

  var FAILS_ON_PRIMITIVES$7 = fails(function () { objectKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$7 }, {
    keys: function keys(it) {
      return objectKeys(toObject$1(it));
    }
  });

  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;

  // `Object.prototype.__lookupGetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
  if (descriptors) {
    _export({ target: 'Object', proto: true, forced: objectPrototypeAccessorsForced }, {
      __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject$1(this);
        var key = toPropertyKey(P);
        var desc;
        do {
          if (desc = getOwnPropertyDescriptor$3(O, key)) return desc.get;
        } while (O = objectGetPrototypeOf(O));
      }
    });
  }

  var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;

  // `Object.prototype.__lookupSetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
  if (descriptors) {
    _export({ target: 'Object', proto: true, forced: objectPrototypeAccessorsForced }, {
      __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject$1(this);
        var key = toPropertyKey(P);
        var desc;
        do {
          if (desc = getOwnPropertyDescriptor$4(O, key)) return desc.set;
        } while (O = objectGetPrototypeOf(O));
      }
    });
  }

  var onFreeze$1 = internalMetadata.onFreeze;



  // eslint-disable-next-line es/no-object-preventextensions -- safe
  var $preventExtensions = Object.preventExtensions;
  var FAILS_ON_PRIMITIVES$8 = fails(function () { $preventExtensions(1); });

  // `Object.preventExtensions` method
  // https://tc39.es/ecma262/#sec-object.preventextensions
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$8, sham: !freezing }, {
    preventExtensions: function preventExtensions(it) {
      return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze$1(it)) : it;
    }
  });

  var onFreeze$2 = internalMetadata.onFreeze;



  // eslint-disable-next-line es/no-object-seal -- safe
  var $seal = Object.seal;
  var FAILS_ON_PRIMITIVES$9 = fails(function () { $seal(1); });

  // `Object.seal` method
  // https://tc39.es/ecma262/#sec-object.seal
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$9, sham: !freezing }, {
    seal: function seal(it) {
      return $seal && isObject(it) ? $seal(onFreeze$2(it)) : it;
    }
  });

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  _export({ target: 'Object', stat: true }, {
    setPrototypeOf: objectSetPrototypeOf
  });

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!toStringTagSupport) {
    redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
  }

  var $values = objectToArray.values;

  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  _export({ target: 'Object', stat: true }, {
    values: function values(O) {
      return $values(O);
    }
  });

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  _export({ global: true, forced: parseFloat != numberParseFloat }, {
    parseFloat: numberParseFloat
  });

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  _export({ global: true, forced: parseInt != numberParseInt }, {
    parseInt: numberParseInt
  });

  var nativePromiseConstructor = global_1.Promise;

  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent);

  var set$2 = global_1.setImmediate;
  var clear = global_1.clearImmediate;
  var process$1 = global_1.process;
  var MessageChannel = global_1.MessageChannel;
  var Dispatch = global_1.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var location, defer, channel, port;

  try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global_1.location;
  } catch (error) { /* empty */ }

  var run = function (id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run(id);
    };
  };

  var listener = function (event) {
    run(event.data);
  };

  var post = function (id) {
    // old engines have not location.origin
    global_1.postMessage(String(id), location.protocol + '//' + location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set$2 || !clear) {
    set$2 = function setImmediate(fn) {
      var args = [];
      var argumentsLength = arguments.length;
      var i = 1;
      while (argumentsLength > i) args.push(arguments[i++]);
      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (isCallable(fn) ? fn : Function(fn)).apply(undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (engineIsNode) {
      defer = function (id) {
        process$1.nextTick(runner(id));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !engineIsIos) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = functionBindContext(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      global_1.addEventListener &&
      isCallable(global_1.postMessage) &&
      !global_1.importScripts &&
      location && location.protocol !== 'file:' &&
      !fails(post)
    ) {
      defer = post;
      global_1.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
      defer = function (id) {
        html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task = {
    set: set$2,
    clear: clear
  };

  var engineIsIosPebble = /ipad|iphone|ipod/i.test(engineUserAgent) && global_1.Pebble !== undefined;

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

  var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task.set;





  var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
  var document$2 = global_1.document;
  var process$2 = global_1.process;
  var Promise$1 = global_1.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$5(global_1, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

  var flush, head, last, notify, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!queueMicrotask) {
    flush = function () {
      var parent, fn;
      if (engineIsNode && (parent = process$2.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (error) {
          if (head) notify();
          else last = undefined;
          throw error;
        }
      } last = undefined;
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, { characterData: true });
      notify = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!engineIsIosPebble && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1;
      then = promise.then;
      notify = function () {
        then.call(promise, flush);
      };
    // Node.js without promises
    } else if (engineIsNode) {
      notify = function () {
        process$2.nextTick(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global_1, flush);
      };
    }
  }

  var microtask = queueMicrotask || function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable(resolve);
    this.reject = aCallable(reject);
  };

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  var f$8 = function (C) {
    return new PromiseCapability(C);
  };

  var newPromiseCapability = {
  	f: f$8
  };

  var promiseResolve = function (C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var hostReportErrors = function (a, b) {
    var console = global_1.console;
    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform = function (exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };

  var engineIsBrowser = typeof window == 'object';

  var task$1 = task.set;












  var SPECIES$5 = wellKnownSymbol('species');
  var PROMISE = 'Promise';
  var getInternalState$3 = internalState.get;
  var setInternalState$4 = internalState.set;
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
  var NATIVE_REJECTION_EVENT = isCallable(global_1.PromiseRejectionEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var SUBCLASSING = false;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  var FORCED$e = isForced_1(PROMISE, function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (engineV8Version >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
    // Detect correctness of subclassing with @@species support
    var promise = new PromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES$5] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT;
  });

  var INCORRECT_ITERATION$1 = FORCED$e || !checkCorrectnessOfIteration(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
  });

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject(it) && isCallable(then = it.then) ? then : false;
  };

  var notify$1 = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function () {
      var value = state.value;
      var ok = state.state == FULFILLED;
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
              if (state.rejection === UNHANDLED) onHandleUnhandled(state);
              state.rejection = HANDLED;
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

  var dispatchEvent = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$3.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global_1.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
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
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function (state) {
    task$1.call(global_1, function () {
      var promise = state.facade;
      if (engineIsNode) {
        process$3.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify$1(state, true);
  };

  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = { done: false };
          try {
            then.call(value,
              bind(internalResolve, wrapper, state),
              bind(internalReject, wrapper, state)
            );
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
      internalReject({ done: false }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED$e) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromiseConstructor, PROMISE);
      aCallable(executor);
      Internal.call(this);
      var state = getInternalState$3(this);
      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };
    PromiseConstructorPrototype = PromiseConstructor.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState$4(this, {
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
        reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable(onRejected) && onRejected;
        reaction.domain = engineIsNode ? process$3.domain : undefined;
        state.parent = true;
        state.reactions.push(reaction);
        if (state.state != PENDING) notify$1(state, false);
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.es/ecma262/#sec-promise.prototype.catch
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalState$3(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };
    newPromiseCapability.f = newPromiseCapability$1 = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };

    if ( isCallable(nativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;

      if (!SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            nativeThen.call(that, resolve, reject);
          }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, { unsafe: true });

        // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
        redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype.constructor;
      } catch (error) { /* empty */ }

      // make `instanceof Promise` work for native promise-based APIs
      if (objectSetPrototypeOf) {
        objectSetPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
      }
    }
  }

  _export({ global: true, wrap: true, forced: FORCED$e }, {
    Promise: PromiseConstructor
  });

  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);

  PromiseWrapper = getBuiltIn(PROMISE);

  // statics
  _export({ target: PROMISE, stat: true, forced: FORCED$e }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability$1(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });

  _export({ target: PROMISE, stat: true, forced:  FORCED$e }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve( this, x);
    }
  });

  _export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION$1 }, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable(C.resolve);
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
        var $promiseResolve = aCallable(C.resolve);
        iterate(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  // `Promise.allSettled` method
  // https://tc39.es/ecma262/#sec-promise.allsettled
  _export({ target: 'Promise', stat: true }, {
    allSettled: function allSettled(iterable) {
      var C = this;
      var capability = newPromiseCapability.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var promiseResolve = aCallable(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          promiseResolve.call(C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = { status: 'fulfilled', value: value };
            --remaining || resolve(values);
          }, function (error) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = { status: 'rejected', reason: error };
            --remaining || resolve(values);
          });
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var PROMISE_ANY_ERROR = 'No one promise resolved';

  // `Promise.any` method
  // https://tc39.es/ecma262/#sec-promise.any
  _export({ target: 'Promise', stat: true }, {
    any: function any(iterable) {
      var C = this;
      var capability = newPromiseCapability.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var promiseResolve = aCallable(C.resolve);
        var errors = [];
        var counter = 0;
        var remaining = 1;
        var alreadyResolved = false;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyRejected = false;
          errors.push(undefined);
          remaining++;
          promiseResolve.call(C, promise).then(function (value) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyResolved = true;
            resolve(value);
          }, function (error) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyRejected = true;
            errors[index] = error;
            --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
          });
        });
        --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var NON_GENERIC = !!nativePromiseConstructor && fails(function () {
    nativePromiseConstructor.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
  });

  // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally
  _export({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
    'finally': function (onFinally) {
      var C = speciesConstructor(this, getBuiltIn('Promise'));
      var isFunction = isCallable(onFinally);
      return this.then(
        isFunction ? function (x) {
          return promiseResolve(C, onFinally()).then(function () { return x; });
        } : onFinally,
        isFunction ? function (e) {
          return promiseResolve(C, onFinally()).then(function () { throw e; });
        } : onFinally
      );
    }
  });

  // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
  if ( isCallable(nativePromiseConstructor)) {
    var method = getBuiltIn('Promise').prototype['finally'];
    if (nativePromiseConstructor.prototype['finally'] !== method) {
      redefine(nativePromiseConstructor.prototype, 'finally', method, { unsafe: true });
    }
  }

  var nativeApply = getBuiltIn('Reflect', 'apply');
  var functionApply = Function.apply;

  // MS Edge argumentsList argument is optional
  var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
    nativeApply(function () { /* empty */ });
  });

  // `Reflect.apply` method
  // https://tc39.es/ecma262/#sec-reflect.apply
  _export({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
    apply: function apply(target, thisArgument, argumentsList) {
      aCallable(target);
      anObject(argumentsList);
      return nativeApply
        ? nativeApply(target, thisArgument, argumentsList)
        : functionApply.call(target, thisArgument, argumentsList);
    }
  });

  var nativeConstruct = getBuiltIn('Reflect', 'construct');

  // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails(function () {
    function F() { /* empty */ }
    return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
  });
  var ARGS_BUG = !fails(function () {
    nativeConstruct(function () { /* empty */ });
  });
  var FORCED$f = NEW_TARGET_BUG || ARGS_BUG;

  _export({ target: 'Reflect', stat: true, forced: FORCED$f, sham: FORCED$f }, {
    construct: function construct(Target, args /* , newTarget */) {
      aConstructor(Target);
      anObject(args);
      var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
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
      var instance = objectCreate(isObject(proto) ? proto : Object.prototype);
      var result = Function.apply.call(Target, instance, args);
      return isObject(result) ? result : instance;
    }
  });

  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
  var ERROR_INSTEAD_OF_FALSE = fails(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.defineProperty(objectDefineProperty.f({}, 1, { value: 1 }), 1, { value: 2 });
  });

  // `Reflect.defineProperty` method
  // https://tc39.es/ecma262/#sec-reflect.defineproperty
  _export({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !descriptors }, {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject(target);
      var key = toPropertyKey(propertyKey);
      anObject(attributes);
      try {
        objectDefineProperty.f(target, key, attributes);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;

  // `Reflect.deleteProperty` method
  // https://tc39.es/ecma262/#sec-reflect.deleteproperty
  _export({ target: 'Reflect', stat: true }, {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var descriptor = getOwnPropertyDescriptor$6(anObject(target), propertyKey);
      return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
  });

  var isDataDescriptor = function (descriptor) {
    return descriptor !== undefined && (hasOwnProperty_1(descriptor, 'value') || hasOwnProperty_1(descriptor, 'writable'));
  };

  // `Reflect.get` method
  // https://tc39.es/ecma262/#sec-reflect.get
  function get$2(target, propertyKey /* , receiver */) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if (anObject(target) === receiver) return target[propertyKey];
    descriptor = objectGetOwnPropertyDescriptor.f(target, propertyKey);
    if (descriptor) return isDataDescriptor(descriptor)
      ? descriptor.value
      : descriptor.get === undefined ? undefined : descriptor.get.call(receiver);
    if (isObject(prototype = objectGetPrototypeOf(target))) return get$2(prototype, propertyKey, receiver);
  }

  _export({ target: 'Reflect', stat: true }, {
    get: get$2
  });

  // `Reflect.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
  _export({ target: 'Reflect', stat: true, sham: !descriptors }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return objectGetOwnPropertyDescriptor.f(anObject(target), propertyKey);
    }
  });

  // `Reflect.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-reflect.getprototypeof
  _export({ target: 'Reflect', stat: true, sham: !correctPrototypeGetter }, {
    getPrototypeOf: function getPrototypeOf(target) {
      return objectGetPrototypeOf(anObject(target));
    }
  });

  // `Reflect.has` method
  // https://tc39.es/ecma262/#sec-reflect.has
  _export({ target: 'Reflect', stat: true }, {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var objectIsExtensible = Object.isExtensible;

  // `Reflect.isExtensible` method
  // https://tc39.es/ecma262/#sec-reflect.isextensible
  _export({ target: 'Reflect', stat: true }, {
    isExtensible: function isExtensible(target) {
      anObject(target);
      return objectIsExtensible ? objectIsExtensible(target) : true;
    }
  });

  // `Reflect.ownKeys` method
  // https://tc39.es/ecma262/#sec-reflect.ownkeys
  _export({ target: 'Reflect', stat: true }, {
    ownKeys: ownKeys$1
  });

  // `Reflect.preventExtensions` method
  // https://tc39.es/ecma262/#sec-reflect.preventextensions
  _export({ target: 'Reflect', stat: true, sham: !freezing }, {
    preventExtensions: function preventExtensions(target) {
      anObject(target);
      try {
        var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
        if (objectPreventExtensions) objectPreventExtensions(target);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  // `Reflect.set` method
  // https://tc39.es/ecma262/#sec-reflect.set
  function set$3(target, propertyKey, V /* , receiver */) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDescriptor = objectGetOwnPropertyDescriptor.f(anObject(target), propertyKey);
    var existingDescriptor, prototype, setter;
    if (!ownDescriptor) {
      if (isObject(prototype = objectGetPrototypeOf(target))) {
        return set$3(prototype, propertyKey, V, receiver);
      }
      ownDescriptor = createPropertyDescriptor(0);
    }
    if (isDataDescriptor(ownDescriptor)) {
      if (ownDescriptor.writable === false || !isObject(receiver)) return false;
      if (existingDescriptor = objectGetOwnPropertyDescriptor.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        objectDefineProperty.f(receiver, propertyKey, existingDescriptor);
      } else objectDefineProperty.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    } else {
      setter = ownDescriptor.set;
      if (setter === undefined) return false;
      setter.call(receiver, V);
    } return true;
  }

  // MS Edge 17-18 Reflect.set allows setting the property to object
  // with non-writable property on the prototype
  var MS_EDGE_BUG = fails(function () {
    var Constructor = function () { /* empty */ };
    var object = objectDefineProperty.f(new Constructor(), 'a', { configurable: true });
    // eslint-disable-next-line es/no-reflect -- required for testing
    return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
  });

  _export({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
    set: set$3
  });

  // `Reflect.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-reflect.setprototypeof
  if (objectSetPrototypeOf) _export({ target: 'Reflect', stat: true }, {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      anObject(target);
      aPossiblePrototype(proto);
      try {
        objectSetPrototypeOf(target, proto);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  _export({ global: true }, { Reflect: {} });

  // Reflect[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-reflect-@@tostringtag
  setToStringTag(global_1.Reflect, 'Reflect', true);

  var MATCH = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp = global_1.RegExp;

  var UNSUPPORTED_Y = fails(function () {
    var re = $RegExp('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  var BROKEN_CARET = fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
  	UNSUPPORTED_Y: UNSUPPORTED_Y,
  	BROKEN_CARET: BROKEN_CARET
  };

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global_1.RegExp;

  var regexpUnsupportedDotAll = fails(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp$2 = global_1.RegExp;

  var regexpUnsupportedNcg = fails(function () {
    var re = $RegExp$2('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  var defineProperty$9 = objectDefineProperty.f;
  var getOwnPropertyNames$3 = objectGetOwnPropertyNames.f;







  var enforceInternalState = internalState.enforce;





  var MATCH$1 = wellKnownSymbol('match');
  var NativeRegExp = global_1.RegExp;
  var RegExpPrototype = NativeRegExp.prototype;
  // TODO: Use only propper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y;

  var BASE_FORCED = descriptors &&
    (!CORRECT_NEW || UNSUPPORTED_Y$1 || regexpUnsupportedDotAll || regexpUnsupportedNcg || fails(function () {
      re2[MATCH$1] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
    }));

  var handleDotAll = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for (; index <= length; index++) {
      chr = string.charAt(index);
      if (chr === '\\') {
        result += chr + string.charAt(++index);
        continue;
      }
      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        } result += chr;
      }
    } return result;
  };

  var handleNCG = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = {};
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for (; index <= length; index++) {
      chr = string.charAt(index);
      if (chr === '\\') {
        chr = chr + string.charAt(++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;
        case chr === '(':
          if (IS_NCG.test(string.slice(index + 1))) {
            index += 2;
            ncg = true;
          }
          result += chr;
          groupid++;
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwnProperty_1(names, groupname)) {
            throw new SyntaxError('Invalid capture group name');
          }
          names[groupname] = true;
          named.push([groupname, groupid]);
          ncg = false;
          groupname = '';
          continue;
      }
      if (ncg) groupname += chr;
      else result += chr;
    } return [result, named];
  };

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced_1('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof RegExpWrapper;
      var patternIsRegExp = isRegexp(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;

      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }

      if (patternIsRegExp || pattern instanceof RegExpWrapper) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : regexpFlags.call(rawPattern);
      }

      pattern = pattern === undefined ? '' : toString_1(pattern);
      flags = flags === undefined ? '' : toString_1(flags);
      rawPattern = pattern;

      if (regexpUnsupportedDotAll && 'dotAll' in re1) {
        dotAll = !!flags && flags.indexOf('s') > -1;
        if (dotAll) flags = flags.replace(/s/g, '');
      }

      rawFlags = flags;

      if (UNSUPPORTED_Y$1 && 'sticky' in re1) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }

      if (regexpUnsupportedNcg) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

      if (dotAll || sticky || groups.length) {
        state = enforceInternalState(result);
        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }
        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }

      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) { /* empty */ }

      return result;
    };

    var proxy = function (key) {
      key in RegExpWrapper || defineProperty$9(RegExpWrapper, key, {
        configurable: true,
        get: function () { return NativeRegExp[key]; },
        set: function (it) { NativeRegExp[key] = it; }
      });
    };

    for (var keys$3 = getOwnPropertyNames$3(NativeRegExp), index = 0; keys$3.length > index;) {
      proxy(keys$3[index++]);
    }

    RegExpPrototype.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype;
    redefine(global_1, 'RegExp', RegExpWrapper);
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  var defineProperty$a = objectDefineProperty.f;
  var getInternalState$4 = internalState.get;
  var RegExpPrototype$1 = RegExp.prototype;

  // `RegExp.prototype.dotAll` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
  if (descriptors && regexpUnsupportedDotAll) {
    defineProperty$a(RegExpPrototype$1, 'dotAll', {
      configurable: true,
      get: function () {
        if (this === RegExpPrototype$1) return undefined;
        // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.
        if (this instanceof RegExp) {
          return !!getInternalState$4(this).dotAll;
        }
        throw TypeError('Incompatible receiver, RegExp required');
      }
    });
  }

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */





  var getInternalState$5 = internalState.get;



  var nativeExec = RegExp.prototype.exec;
  var nativeReplace = shared('native-string-replace', String.prototype.replace);

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2 || regexpUnsupportedDotAll || regexpUnsupportedNcg;

  if (PATCH) {
    // eslint-disable-next-line max-statements -- TODO
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$5(re);
      var str = toString_1(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = patchedExec.call(raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$2 && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = str.slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
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

      if (match && groups) {
        match.groups = object = objectCreate(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  _export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
    exec: regexpExec
  });

  var FORCED$g = descriptors && fails(function () {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({ dotAll: true, sticky: true }) !== 'sy';
  });

  // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  if (FORCED$g) objectDefineProperty.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regexpFlags
  });

  var UNSUPPORTED_Y$3 = regexpStickyHelpers.UNSUPPORTED_Y;
  var defineProperty$b = objectDefineProperty.f;
  var getInternalState$6 = internalState.get;
  var RegExpPrototype$2 = RegExp.prototype;

  // `RegExp.prototype.sticky` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
  if (descriptors && UNSUPPORTED_Y$3) {
    defineProperty$b(RegExpPrototype$2, 'sticky', {
      configurable: true,
      get: function () {
        if (this === RegExpPrototype$2) return undefined;
        // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.
        if (this instanceof RegExp) {
          return !!getInternalState$6(this).sticky;
        }
        throw TypeError('Incompatible receiver, RegExp required');
      }
    });
  }

  // TODO: Remove from `core-js@4` since it's moved to entry points





  var DELEGATES_TO_EXEC = function () {
    var execCalled = false;
    var re = /[ac]/;
    re.exec = function () {
      execCalled = true;
      return /./.exec.apply(this, arguments);
    };
    return re.test('abc') === true && execCalled;
  }();

  var nativeTest = /./.test;

  // `RegExp.prototype.test` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.test
  _export({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
    test: function (str) {
      var exec = this.exec;
      if (!isCallable(exec)) return nativeTest.call(this, str);
      var result = exec.call(this, str);
      if (result !== null && !isObject(result)) {
        throw new Error('RegExp exec method returned something other than an Object or null');
      }
      return !!result;
    }
  });

  var PROPER_FUNCTION_NAME$2 = functionName.PROPER;






  var TO_STRING$1 = 'toString';
  var RegExpPrototype$3 = RegExp.prototype;
  var nativeToString = RegExpPrototype$3[TO_STRING$1];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME$2 && nativeToString.name != TO_STRING$1;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING$1, function toString() {
      var R = anObject(this);
      var p = toString_1(R.source);
      var rf = R.flags;
      var f = toString_1(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$3) ? regexpFlags.call(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects
  var es_set = collection('Set', function (init) {
    return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong);

  var FORCED$h = fails(function () {
    return '𠮷'.at(0) !== '\uD842';
  });

  // `String.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method
  _export({ target: 'String', proto: true, forced: FORCED$h }, {
    at: function at(index) {
      var S = toString_1(requireObjectCoercible(this));
      var len = S.length;
      var relativeIndex = toIntegerOrInfinity(index);
      var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
      return (k < 0 || k >= len) ? undefined : S.charAt(k);
    }
  });

  var createMethod$6 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString_1(requireObjectCoercible($this));
      var position = toIntegerOrInfinity(pos);
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

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$6(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$6(true)
  };

  var codeAt = stringMultibyte.codeAt;

  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  _export({ target: 'String', proto: true }, {
    codePointAt: function codePointAt(pos) {
      return codeAt(this, pos);
    }
  });

  var notARegexp = function (it) {
    if (isRegexp(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    } return it;
  };

  var MATCH$2 = wellKnownSymbol('match');

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

  var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;







  // eslint-disable-next-line es/no-string-prototype-endswith -- safe
  var $endsWith = ''.endsWith;
  var min$5 = Math.min;

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('endsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG =  !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor$7(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.endsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.endswith
  _export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    endsWith: function endsWith(searchString /* , endPosition = @length */) {
      var that = toString_1(requireObjectCoercible(this));
      notARegexp(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = that.length;
      var end = endPosition === undefined ? len : min$5(toLength(endPosition), len);
      var search = toString_1(searchString);
      return $endsWith
        ? $endsWith.call(that, search, end)
        : that.slice(end - search.length, end) === search;
    }
  });

  var fromCharCode = String.fromCharCode;
  // eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
  var $fromCodePoint = String.fromCodePoint;

  // length should be 1, old FF problem
  var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;

  // `String.fromCodePoint` method
  // https://tc39.es/ecma262/#sec-string.fromcodepoint
  _export({ target: 'String', stat: true, forced: INCORRECT_LENGTH }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    fromCodePoint: function fromCodePoint(x) {
      var elements = [];
      var length = arguments.length;
      var i = 0;
      var code;
      while (length > i) {
        code = +arguments[i++];
        if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
        elements.push(code < 0x10000
          ? fromCharCode(code)
          : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00)
        );
      } return elements.join('');
    }
  });

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~toString_1(requireObjectCoercible(this))
        .indexOf(toString_1(notARegexp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var charAt = stringMultibyte.charAt;




  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$5 = internalState.set;
  var getInternalState$7 = internalState.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$5(this, {
      type: STRING_ITERATOR,
      string: toString_1(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$7(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points







  var SPECIES$6 = wellKnownSymbol('species');
  var RegExpPrototype$4 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
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
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$6] = function () { return re; };
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
      FORCED
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;
        if ($exec === regexpExec || $exec === RegExpPrototype$4.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      });

      redefine(String.prototype, KEY, methods[0]);
      redefine(RegExpPrototype$4, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty(RegExpPrototype$4[SYMBOL], 'sham', true);
  };

  var charAt$1 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable(exec)) {
      var result = exec.call(R, S);
      if (result !== null) anObject(result);
      return result;
    }
    if (classofRaw(R) === 'RegExp') return regexpExec.call(R, S);
    throw TypeError('RegExp#exec called on incompatible receiver');
  };

  // @@match logic
  fixRegexpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible(this);
        var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
        return matcher ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString_1(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var rx = anObject(this);
        var S = toString_1(string);
        var res = maybeCallNative(nativeMatch, rx, S);

        if (res.done) return res.value;

        if (!rx.global) return regexpExecAbstract(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regexpExecAbstract(rx, S)) !== null) {
          var matchStr = toString_1(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  /* eslint-disable es/no-string-prototype-matchall -- safe */



















  var MATCH_ALL = wellKnownSymbol('matchAll');
  var REGEXP_STRING = 'RegExp String';
  var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
  var setInternalState$6 = internalState.set;
  var getInternalState$8 = internalState.getterFor(REGEXP_STRING_ITERATOR);
  var RegExpPrototype$5 = RegExp.prototype;
  var nativeMatchAll = ''.matchAll;

  var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function () {
    'a'.matchAll(/./);
  });

  // eslint-disable-next-line max-len -- ignore
  var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, global, fullUnicode) {
    setInternalState$6(this, {
      type: REGEXP_STRING_ITERATOR,
      regexp: regexp,
      string: string,
      global: global,
      unicode: fullUnicode,
      done: false
    });
  }, REGEXP_STRING, function next() {
    var state = getInternalState$8(this);
    if (state.done) return { value: undefined, done: true };
    var R = state.regexp;
    var S = state.string;
    var match = regexpExecAbstract(R, S);
    if (match === null) return { value: undefined, done: state.done = true };
    if (state.global) {
      if (toString_1(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
      return { value: match, done: false };
    }
    state.done = true;
    return { value: match, done: false };
  });

  var $matchAll = function (string) {
    var R = anObject(this);
    var S = toString_1(string);
    var C, flagsValue, flags, matcher, global, fullUnicode;
    C = speciesConstructor(R, RegExp);
    flagsValue = R.flags;
    if (flagsValue === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$5)) {
      flagsValue = regexpFlags.call(R);
    }
    flags = flagsValue === undefined ? '' : toString_1(flagsValue);
    matcher = new C(C === RegExp ? R.source : R, flags);
    global = !!~flags.indexOf('g');
    fullUnicode = !!~flags.indexOf('u');
    matcher.lastIndex = toLength(R.lastIndex);
    return new $RegExpStringIterator(matcher, S, global, fullUnicode);
  };

  // `String.prototype.matchAll` method
  // https://tc39.es/ecma262/#sec-string.prototype.matchall
  _export({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
    matchAll: function matchAll(regexp) {
      var O = requireObjectCoercible(this);
      var flags, S, matcher, rx;
      if (regexp != null) {
        if (isRegexp(regexp)) {
          flags = toString_1(requireObjectCoercible('flags' in RegExpPrototype$5
            ? regexp.flags
            : regexpFlags.call(regexp)
          ));
          if (!~flags.indexOf('g')) throw TypeError('`.matchAll` does not allow non-global regexes');
        }
        if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
        matcher = getMethod(regexp, MATCH_ALL);
        if (matcher === undefined && isPure && classofRaw(regexp) == 'RegExp') matcher = $matchAll;
        if (matcher) return matcher.call(regexp, O);
      } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
      S = toString_1(O);
      rx = new RegExp(regexp, 'g');
      return  rx[MATCH_ALL](S);
    }
  });

   MATCH_ALL in RegExpPrototype$5 || redefine(RegExpPrototype$5, MATCH_ALL, $matchAll);

  // https://github.com/zloirock/core-js/issues/280


  var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(engineUserAgent);

  var $padEnd = stringPad.end;


  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  _export({ target: 'String', proto: true, forced: stringPadWebkitBug }, {
    padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
      return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $padStart = stringPad.start;


  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  _export({ target: 'String', proto: true, forced: stringPadWebkitBug }, {
    padStart: function padStart(maxLength /* , fillString = ' ' */) {
      return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var ArrayPrototype$2 = Array.prototype;
  var push$1 = ArrayPrototype$2.push;
  var join = ArrayPrototype$2.join;

  // `String.raw` method
  // https://tc39.es/ecma262/#sec-string.raw
  _export({ target: 'String', stat: true }, {
    raw: function raw(template) {
      var rawTemplate = toIndexedObject(toObject$1(template).raw);
      var literalSegments = lengthOfArrayLike(rawTemplate);
      var argumentsLength = arguments.length;
      var elements = [];
      var i = 0;
      while (literalSegments > i) {
        push$1.call(elements, toString_1(rawTemplate[i++]));
        if (i === literalSegments) return join.call(elements, '');
        if (i < argumentsLength) push$1.call(elements, toString_1(arguments[i]));
      }
    }
  });

  // `String.prototype.repeat` method
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  _export({ target: 'String', proto: true }, {
    repeat: stringRepeat
  });

  var floor$7 = Math.floor;
  var replace = ''.replace;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
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
            var f = floor$7(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var REPLACE = wellKnownSymbol('replace');
  var max$3 = Math.max;
  var min$6 = Math.min;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
        return replacer
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(toString_1(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString_1(string);

        if (
          typeof replaceValue === 'string' &&
          replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
          replaceValue.indexOf('$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString_1(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regexpExecAbstract(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = toString_1(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString_1(result[0]);
          var position = max$3(min$6(toIntegerOrInfinity(result.index), S.length), 0);
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
            var replacement = toString_1(replaceValue.apply(undefined, replacerArgs));
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
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var REPLACE$1 = wellKnownSymbol('replace');
  var RegExpPrototype$6 = RegExp.prototype;
  var max$4 = Math.max;

  var stringIndexOf = function (string, searchValue, fromIndex) {
    if (fromIndex > string.length) return -1;
    if (searchValue === '') return fromIndex;
    return string.indexOf(searchValue, fromIndex);
  };

  // `String.prototype.replaceAll` method
  // https://tc39.es/ecma262/#sec-string.prototype.replaceall
  _export({ target: 'String', proto: true }, {
    replaceAll: function replaceAll(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
      var position = 0;
      var endOfLastMatch = 0;
      var result = '';
      if (searchValue != null) {
        IS_REG_EXP = isRegexp(searchValue);
        if (IS_REG_EXP) {
          flags = toString_1(requireObjectCoercible('flags' in RegExpPrototype$6
            ? searchValue.flags
            : regexpFlags.call(searchValue)
          ));
          if (!~flags.indexOf('g')) throw TypeError('`.replaceAll` does not allow non-global regexes');
        }
        replacer = getMethod(searchValue, REPLACE$1);
        if (replacer) {
          return replacer.call(searchValue, O, replaceValue);
        }
      }
      string = toString_1(O);
      searchString = toString_1(searchValue);
      functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString_1(replaceValue);
      searchLength = searchString.length;
      advanceBy = max$4(1, searchLength);
      position = stringIndexOf(string, searchString, 0);
      while (position !== -1) {
        if (functionalReplace) {
          replacement = toString_1(replaceValue(searchString, position, string));
        } else {
          replacement = getSubstitution(searchString, string, position, [], undefined, replaceValue);
        }
        result += string.slice(endOfLastMatch, position) + replacement;
        endOfLastMatch = position + searchLength;
        position = stringIndexOf(string, searchString, position + advanceBy);
      }
      if (endOfLastMatch < string.length) {
        result += string.slice(endOfLastMatch);
      }
      return result;
    }
  });

  // @@search logic
  fixRegexpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
    return [
      // `String.prototype.search` method
      // https://tc39.es/ecma262/#sec-string.prototype.search
      function search(regexp) {
        var O = requireObjectCoercible(this);
        var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
        return searcher ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](toString_1(O));
      },
      // `RegExp.prototype[@@search]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
      function (string) {
        var rx = anObject(this);
        var S = toString_1(string);
        var res = maybeCallNative(nativeSearch, rx, S);

        if (res.done) return res.value;

        var previousLastIndex = rx.lastIndex;
        if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
        var result = regexpExecAbstract(rx, S);
        if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
        return result === null ? -1 : result.index;
      }
    ];
  });

  var UNSUPPORTED_Y$4 = regexpStickyHelpers.UNSUPPORTED_Y;
  var arrayPush = [].push;
  var min$7 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  // @@split logic
  fixRegexpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = toString_1(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegexp(separator)) {
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
        var O = requireObjectCoercible(this);
        var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
        return splitter
          ? splitter.call(separator, O, limit)
          : internalSplit.call(toString_1(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (string, limit) {
        var rx = anObject(this);
        var S = toString_1(string);
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

        if (res.done) return res.value;

        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (UNSUPPORTED_Y$4 ? 'g' : 'y');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(UNSUPPORTED_Y$4 ? '^(?:' + rx.source + ')' : rx, flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = UNSUPPORTED_Y$4 ? 0 : q;
          var z = regexpExecAbstract(splitter, UNSUPPORTED_Y$4 ? S.slice(q) : S);
          var e;
          if (
            z === null ||
            (e = min$7(toLength(splitter.lastIndex + (UNSUPPORTED_Y$4 ? q : 0)), S.length)) === p
          ) {
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
      }
    ];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y$4);

  var getOwnPropertyDescriptor$8 = objectGetOwnPropertyDescriptor.f;







  // eslint-disable-next-line es/no-string-prototype-startswith -- safe
  var $startsWith = ''.startsWith;
  var min$8 = Math.min;

  var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegexpLogic('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG$1 =  !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
    var descriptor = getOwnPropertyDescriptor$8(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith
  _export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = toString_1(requireObjectCoercible(this));
      notARegexp(searchString);
      var index = toLength(min$8(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString_1(searchString);
      return $startsWith
        ? $startsWith.call(that, search, index)
        : that.slice(index, index + search.length) === search;
    }
  });

  var slice$1 = ''.slice;
  var max$5 = Math.max;
  var min$9 = Math.min;

  // eslint-disable-next-line unicorn/prefer-string-slice -- required for testing
  var FORCED$i = !''.substr || 'ab'.substr(-1) !== 'b';

  // `String.prototype.substr` method
  // https://tc39.es/ecma262/#sec-string.prototype.substr
  _export({ target: 'String', proto: true, forced: FORCED$i }, {
    substr: function substr(start, length) {
      var that = toString_1(requireObjectCoercible(this));
      var size = that.length;
      var intStart = toIntegerOrInfinity(start);
      var intLength, intEnd;
      if (intStart === Infinity) intStart = 0;
      if (intStart < 0) intStart = max$5(size + intStart, 0);
      intLength = length === undefined ? size : toIntegerOrInfinity(length);
      if (intLength <= 0 || intLength === Infinity) return '';
      intEnd = min$9(intStart + intLength, size);
      return intStart >= intEnd ? '' : slice$1.call(that, intStart, intEnd);
    }
  });

  var PROPER_FUNCTION_NAME$3 = functionName.PROPER;



  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]()
        || non[METHOD_NAME]() !== non
        || (PROPER_FUNCTION_NAME$3 && whitespaces[METHOD_NAME].name !== METHOD_NAME);
    });
  };

  var $trim = stringTrim.trim;


  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  _export({ target: 'String', proto: true, forced: stringTrimForced('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var $trimEnd = stringTrim.end;


  var FORCED$j = stringTrimForced('trimEnd');

  var trimEnd = FORCED$j ? function trimEnd() {
    return $trimEnd(this);
  // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
  } : ''.trimEnd;

  // `String.prototype.{ trimEnd, trimRight }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  // https://tc39.es/ecma262/#String.prototype.trimright
  _export({ target: 'String', proto: true, name: 'trimEnd', forced: FORCED$j }, {
    trimEnd: trimEnd,
    trimRight: trimEnd
  });

  var $trimStart = stringTrim.start;


  var FORCED$k = stringTrimForced('trimStart');

  var trimStart = FORCED$k ? function trimStart() {
    return $trimStart(this);
  // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
  } : ''.trimStart;

  // `String.prototype.{ trimStart, trimLeft }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  // https://tc39.es/ecma262/#String.prototype.trimleft
  _export({ target: 'String', proto: true, name: 'trimStart', forced: FORCED$k }, {
    trimStart: trimStart,
    trimLeft: trimStart
  });

  var quot = /"/g;

  // `CreateHTML` abstract operation
  // https://tc39.es/ecma262/#sec-createhtml
  var createHtml = function (string, tag, attribute, value) {
    var S = toString_1(requireObjectCoercible(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + toString_1(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };

  // check the existence of a method, lowercase
  // of a tag and escaping quotes in arguments
  var stringHtmlForced = function (METHOD_NAME) {
    return fails(function () {
      var test = ''[METHOD_NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    });
  };

  // `String.prototype.anchor` method
  // https://tc39.es/ecma262/#sec-string.prototype.anchor
  _export({ target: 'String', proto: true, forced: stringHtmlForced('anchor') }, {
    anchor: function anchor(name) {
      return createHtml(this, 'a', 'name', name);
    }
  });

  // `String.prototype.big` method
  // https://tc39.es/ecma262/#sec-string.prototype.big
  _export({ target: 'String', proto: true, forced: stringHtmlForced('big') }, {
    big: function big() {
      return createHtml(this, 'big', '', '');
    }
  });

  // `String.prototype.blink` method
  // https://tc39.es/ecma262/#sec-string.prototype.blink
  _export({ target: 'String', proto: true, forced: stringHtmlForced('blink') }, {
    blink: function blink() {
      return createHtml(this, 'blink', '', '');
    }
  });

  // `String.prototype.bold` method
  // https://tc39.es/ecma262/#sec-string.prototype.bold
  _export({ target: 'String', proto: true, forced: stringHtmlForced('bold') }, {
    bold: function bold() {
      return createHtml(this, 'b', '', '');
    }
  });

  // `String.prototype.fixed` method
  // https://tc39.es/ecma262/#sec-string.prototype.fixed
  _export({ target: 'String', proto: true, forced: stringHtmlForced('fixed') }, {
    fixed: function fixed() {
      return createHtml(this, 'tt', '', '');
    }
  });

  // `String.prototype.fontcolor` method
  // https://tc39.es/ecma262/#sec-string.prototype.fontcolor
  _export({ target: 'String', proto: true, forced: stringHtmlForced('fontcolor') }, {
    fontcolor: function fontcolor(color) {
      return createHtml(this, 'font', 'color', color);
    }
  });

  // `String.prototype.fontsize` method
  // https://tc39.es/ecma262/#sec-string.prototype.fontsize
  _export({ target: 'String', proto: true, forced: stringHtmlForced('fontsize') }, {
    fontsize: function fontsize(size) {
      return createHtml(this, 'font', 'size', size);
    }
  });

  // `String.prototype.italics` method
  // https://tc39.es/ecma262/#sec-string.prototype.italics
  _export({ target: 'String', proto: true, forced: stringHtmlForced('italics') }, {
    italics: function italics() {
      return createHtml(this, 'i', '', '');
    }
  });

  // `String.prototype.link` method
  // https://tc39.es/ecma262/#sec-string.prototype.link
  _export({ target: 'String', proto: true, forced: stringHtmlForced('link') }, {
    link: function link(url) {
      return createHtml(this, 'a', 'href', url);
    }
  });

  // `String.prototype.small` method
  // https://tc39.es/ecma262/#sec-string.prototype.small
  _export({ target: 'String', proto: true, forced: stringHtmlForced('small') }, {
    small: function small() {
      return createHtml(this, 'small', '', '');
    }
  });

  // `String.prototype.strike` method
  // https://tc39.es/ecma262/#sec-string.prototype.strike
  _export({ target: 'String', proto: true, forced: stringHtmlForced('strike') }, {
    strike: function strike() {
      return createHtml(this, 'strike', '', '');
    }
  });

  // `String.prototype.sub` method
  // https://tc39.es/ecma262/#sec-string.prototype.sub
  _export({ target: 'String', proto: true, forced: stringHtmlForced('sub') }, {
    sub: function sub() {
      return createHtml(this, 'sub', '', '');
    }
  });

  // `String.prototype.sup` method
  // https://tc39.es/ecma262/#sec-string.prototype.sup
  _export({ target: 'String', proto: true, forced: stringHtmlForced('sup') }, {
    sup: function sup() {
      return createHtml(this, 'sup', '', '');
    }
  });

  /* eslint-disable no-new -- required for testing */



  var NATIVE_ARRAY_BUFFER_VIEWS$2 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

  var ArrayBuffer$3 = global_1.ArrayBuffer;
  var Int8Array$2 = global_1.Int8Array;

  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$2 || !fails(function () {
    Int8Array$2(1);
  }) || !fails(function () {
    new Int8Array$2(-1);
  }) || !checkCorrectnessOfIteration(function (iterable) {
    new Int8Array$2();
    new Int8Array$2(null);
    new Int8Array$2(1.5);
    new Int8Array$2(iterable);
  }, true) || fails(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array$2(new ArrayBuffer$3(2), 1, undefined).length !== 1;
  });

  var toPositiveInteger = function (it) {
    var result = toIntegerOrInfinity(it);
    if (result < 0) throw RangeError("The argument can't be less than 0");
    return result;
  };

  var toOffset = function (it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw RangeError('Wrong offset');
    return offset;
  };

  var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;

  var typedArrayFrom = function from(source /* , mapfn, thisArg */) {
    var C = aConstructor(this);
    var O = toObject$1(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var i, length, result, step, iterator, next;
    if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      O = [];
      while (!(step = next.call(iterator)).done) {
        O.push(step.value);
      }
    }
    if (mapping && argumentsLength > 2) {
      mapfn = functionBindContext(mapfn, arguments[2], 2);
    }
    length = lengthOfArrayLike(O);
    result = new (aTypedArrayConstructor$1(C))(length);
    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var typedArrayConstructor = createCommonjsModule(function (module) {




















  var getOwnPropertyNames = objectGetOwnPropertyNames.f;

  var forEach = arrayIteration.forEach;






  var getInternalState = internalState.get;
  var setInternalState = internalState.set;
  var nativeDefineProperty = objectDefineProperty.f;
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var round = Math.round;
  var RangeError = global_1.RangeError;
  var ArrayBuffer = arrayBuffer.ArrayBuffer;
  var DataView = arrayBuffer.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_CONSTRUCTOR = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
  var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
  var TypedArray = arrayBufferViewCore.TypedArray;
  var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
  var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
  var isTypedArray = arrayBufferViewCore.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key) {
    nativeDefineProperty(it, key, { get: function () {
      return getInternalState(this)[key];
    } });
  };

  var isArrayBuffer = function (it) {
    var klass;
    return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function (target, key) {
    return isTypedArray(target)
      && !isSymbol(key)
      && key in target
      && isIntegralNumber(+key)
      && key >= 0;
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    key = toPropertyKey(key);
    return isTypedArrayIndex(target, key)
      ? createPropertyDescriptor(2, target[key])
      : nativeGetOwnPropertyDescriptor(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    key = toPropertyKey(key);
    if (isTypedArrayIndex(target, key)
      && isObject(descriptor)
      && hasOwnProperty_1(descriptor, 'value')
      && !hasOwnProperty_1(descriptor, 'get')
      && !hasOwnProperty_1(descriptor, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !descriptor.configurable
      && (!hasOwnProperty_1(descriptor, 'writable') || descriptor.writable)
      && (!hasOwnProperty_1(descriptor, 'enumerable') || descriptor.enumerable)
    ) {
      target[key] = descriptor.value;
      return target;
    } return nativeDefineProperty(target, key, descriptor);
  };

  if (descriptors) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
      objectDefineProperty.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype, 'buffer');
      addGetter(TypedArrayPrototype, 'byteOffset');
      addGetter(TypedArrayPrototype, 'byteLength');
      addGetter(TypedArrayPrototype, 'length');
    }

    _export({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    module.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global_1[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function (that, index) {
        var data = getInternalState(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function (that, index, value) {
        var data = getInternalState(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function (that, index) {
        nativeDefineProperty(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;
          if (!isObject(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset(offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }
          setInternalState(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView(buffer)
          });
          while (index < length) addElement(that, index++);
        });

        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
      } else if (typedArrayConstructorsRequireWrappers) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
          return inheritIfRequired(function () {
            if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
              : typedArrayOffset !== undefined
                ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
                : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });

        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor);

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

      _export({
        global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies(CONSTRUCTOR_NAME);
    };
  } else module.exports = function () { /* empty */ };
  });

  // `Float32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Float32', function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // `Float64Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Float64', function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // `Int8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Int8', function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // `Int16Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Int16', function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // `Int32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Int32', function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // `Uint8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // `Uint8ClampedArray` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Uint8', function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);

  // `Uint16Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Uint16', function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // `Uint32Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Uint32', function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method
  exportTypedArrayMethod$1('at', function at(index) {
    var O = aTypedArray$1(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : O[k];
  });

  var aTypedArray$2 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$2 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
  exportTypedArrayMethod$2('copyWithin', function copyWithin(target, start /* , end */) {
    return arrayCopyWithin.call(aTypedArray$2(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  });

  var $every$1 = arrayIteration.every;

  var aTypedArray$3 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$3 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.every` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
  exportTypedArrayMethod$3('every', function every(callbackfn /* , thisArg */) {
    return $every$1(aTypedArray$3(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var aTypedArray$4 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$4 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.fill` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  exportTypedArrayMethod$4('fill', function fill(value /* , start, end */) {
    return arrayFill.apply(aTypedArray$4(this), arguments);
  });

  var arrayFromConstructorAndList = function (Constructor, list) {
    var index = 0;
    var length = list.length;
    var result = new Constructor(length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var TYPED_ARRAY_CONSTRUCTOR$1 = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
  var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;

  // a part of `TypedArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#typedarray-species-create
  var typedArraySpeciesConstructor = function (originalArray) {
    return aTypedArrayConstructor$2(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR$1]));
  };

  var typedArrayFromSpeciesAndList = function (instance, list) {
    return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
  };

  var $filter$1 = arrayIteration.filter;


  var aTypedArray$5 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$5 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.filter` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
  exportTypedArrayMethod$5('filter', function filter(callbackfn /* , thisArg */) {
    var list = $filter$1(aTypedArray$5(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return typedArrayFromSpeciesAndList(this, list);
  });

  var $find$1 = arrayIteration.find;

  var aTypedArray$6 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$6 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.find` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
  exportTypedArrayMethod$6('find', function find(predicate /* , thisArg */) {
    return $find$1(aTypedArray$6(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $findIndex$1 = arrayIteration.findIndex;

  var aTypedArray$7 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$7 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
  exportTypedArrayMethod$7('findIndex', function findIndex(predicate /* , thisArg */) {
    return $findIndex$1(aTypedArray$7(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $forEach$2 = arrayIteration.forEach;

  var aTypedArray$8 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$8 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
  exportTypedArrayMethod$8('forEach', function forEach(callbackfn /* , thisArg */) {
    $forEach$2(aTypedArray$8(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var exportTypedArrayStaticMethod$1 = arrayBufferViewCore.exportTypedArrayStaticMethod;


  // `%TypedArray%.from` method
  // https://tc39.es/ecma262/#sec-%typedarray%.from
  exportTypedArrayStaticMethod$1('from', typedArrayFrom, typedArrayConstructorsRequireWrappers);

  var $includes$1 = arrayIncludes.includes;

  var aTypedArray$9 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$9 = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.includes` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
  exportTypedArrayMethod$9('includes', function includes(searchElement /* , fromIndex */) {
    return $includes$1(aTypedArray$9(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $indexOf$1 = arrayIncludes.indexOf;

  var aTypedArray$a = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$a = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
  exportTypedArrayMethod$a('indexOf', function indexOf(searchElement /* , fromIndex */) {
    return $indexOf$1(aTypedArray$a(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var PROPER_FUNCTION_NAME$4 = functionName.PROPER;




  var ITERATOR$7 = wellKnownSymbol('iterator');
  var Uint8Array = global_1.Uint8Array;
  var arrayValues = es_array_iterator.values;
  var arrayKeys = es_array_iterator.keys;
  var arrayEntries = es_array_iterator.entries;
  var aTypedArray$b = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$b = arrayBufferViewCore.exportTypedArrayMethod;
  var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR$7];

  var PROPER_ARRAY_VALUES_NAME = !!nativeTypedArrayIterator && nativeTypedArrayIterator.name === 'values';

  var typedArrayValues = function values() {
    return arrayValues.call(aTypedArray$b(this));
  };

  // `%TypedArray%.prototype.entries` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
  exportTypedArrayMethod$b('entries', function entries() {
    return arrayEntries.call(aTypedArray$b(this));
  });
  // `%TypedArray%.prototype.keys` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
  exportTypedArrayMethod$b('keys', function keys() {
    return arrayKeys.call(aTypedArray$b(this));
  });
  // `%TypedArray%.prototype.values` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
  exportTypedArrayMethod$b('values', typedArrayValues, PROPER_FUNCTION_NAME$4 && !PROPER_ARRAY_VALUES_NAME);
  // `%TypedArray%.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
  exportTypedArrayMethod$b(ITERATOR$7, typedArrayValues, PROPER_FUNCTION_NAME$4 && !PROPER_ARRAY_VALUES_NAME);

  var aTypedArray$c = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$c = arrayBufferViewCore.exportTypedArrayMethod;
  var $join = [].join;

  // `%TypedArray%.prototype.join` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  exportTypedArrayMethod$c('join', function join(separator) {
    return $join.apply(aTypedArray$c(this), arguments);
  });

  var aTypedArray$d = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$d = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  exportTypedArrayMethod$d('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
    return arrayLastIndexOf.apply(aTypedArray$d(this), arguments);
  });

  var $map$1 = arrayIteration.map;


  var aTypedArray$e = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$e = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.map` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
  exportTypedArrayMethod$e('map', function map(mapfn /* , thisArg */) {
    return $map$1(aTypedArray$e(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
      return new (typedArraySpeciesConstructor(O))(length);
    });
  });

  var aTypedArrayConstructor$3 = arrayBufferViewCore.aTypedArrayConstructor;
  var exportTypedArrayStaticMethod$2 = arrayBufferViewCore.exportTypedArrayStaticMethod;

  // `%TypedArray%.of` method
  // https://tc39.es/ecma262/#sec-%typedarray%.of
  exportTypedArrayStaticMethod$2('of', function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = new (aTypedArrayConstructor$3(this))(length);
    while (length > index) result[index] = arguments[index++];
    return result;
  }, typedArrayConstructorsRequireWrappers);

  var $reduce$1 = arrayReduce.left;

  var aTypedArray$f = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$f = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
  exportTypedArrayMethod$f('reduce', function reduce(callbackfn /* , initialValue */) {
    return $reduce$1(aTypedArray$f(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $reduceRight$1 = arrayReduce.right;

  var aTypedArray$g = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$g = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduceRicht` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
  exportTypedArrayMethod$g('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight$1(aTypedArray$g(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  });

  var aTypedArray$h = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$h = arrayBufferViewCore.exportTypedArrayMethod;
  var floor$8 = Math.floor;

  // `%TypedArray%.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
  exportTypedArrayMethod$h('reverse', function reverse() {
    var that = this;
    var length = aTypedArray$h(that).length;
    var middle = floor$8(length / 2);
    var index = 0;
    var value;
    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    } return that;
  });

  var aTypedArray$i = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$i = arrayBufferViewCore.exportTypedArrayMethod;

  var FORCED$l = fails(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).set({});
  });

  // `%TypedArray%.prototype.set` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
  exportTypedArrayMethod$i('set', function set(arrayLike /* , offset */) {
    aTypedArray$i(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var length = this.length;
    var src = toObject$1(arrayLike);
    var len = lengthOfArrayLike(src);
    var index = 0;
    if (len + offset > length) throw RangeError('Wrong length');
    while (index < len) this[offset + index] = src[index++];
  }, FORCED$l);

  var aTypedArray$j = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$j = arrayBufferViewCore.exportTypedArrayMethod;
  var $slice = [].slice;

  var FORCED$m = fails(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).slice();
  });

  // `%TypedArray%.prototype.slice` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
  exportTypedArrayMethod$j('slice', function slice(start, end) {
    var list = $slice.call(aTypedArray$j(this), start, end);
    var C = typedArraySpeciesConstructor(this);
    var index = 0;
    var length = list.length;
    var result = new C(length);
    while (length > index) result[index] = list[index++];
    return result;
  }, FORCED$m);

  var $some$1 = arrayIteration.some;

  var aTypedArray$k = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$k = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.some` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
  exportTypedArrayMethod$k('some', function some(callbackfn /* , thisArg */) {
    return $some$1(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var aTypedArray$l = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$l = arrayBufferViewCore.exportTypedArrayMethod;
  var Uint16Array = global_1.Uint16Array;
  var nativeSort$1 = Uint16Array && Uint16Array.prototype.sort;

  // WebKit
  var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort$1 && !fails(function () {
    var array = new Uint16Array(2);
    array.sort(null);
    array.sort({});
  });

  var STABLE_SORT$1 = !!nativeSort$1 && !fails(function () {
    // feature detection can be too slow, so check engines versions
    if (engineV8Version) return engineV8Version < 74;
    if (engineFfVersion) return engineFfVersion < 67;
    if (engineIsIeOrEdge) return true;
    if (engineWebkitVersion) return engineWebkitVersion < 602;

    var array = new Uint16Array(516);
    var expected = Array(516);
    var index, mod;

    for (index = 0; index < 516; index++) {
      mod = index % 4;
      array[index] = 515 - index;
      expected[index] = index - 2 * mod + 3;
    }

    array.sort(function (a, b) {
      return (a / 4 | 0) - (b / 4 | 0);
    });

    for (index = 0; index < 516; index++) {
      if (array[index] !== expected[index]) return true;
    }
  });

  var getSortCompare$1 = function (comparefn) {
    return function (x, y) {
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      // eslint-disable-next-line no-self-compare -- NaN check
      if (y !== y) return -1;
      // eslint-disable-next-line no-self-compare -- NaN check
      if (x !== x) return 1;
      if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
      return x > y;
    };
  };

  // `%TypedArray%.prototype.sort` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
  exportTypedArrayMethod$l('sort', function sort(comparefn) {
    var array = this;
    if (comparefn !== undefined) aCallable(comparefn);
    if (STABLE_SORT$1) return nativeSort$1.call(array, comparefn);

    aTypedArray$l(array);
    var arrayLength = lengthOfArrayLike(array);
    var items = Array(arrayLength);
    var index;

    for (index = 0; index < arrayLength; index++) {
      items[index] = array[index];
    }

    items = arraySort(array, getSortCompare$1(comparefn));

    for (index = 0; index < arrayLength; index++) {
      array[index] = items[index];
    }

    return array;
  }, !STABLE_SORT$1 || ACCEPT_INCORRECT_ARGUMENTS);

  var aTypedArray$m = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$m = arrayBufferViewCore.exportTypedArrayMethod;

  // `%TypedArray%.prototype.subarray` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
  exportTypedArrayMethod$m('subarray', function subarray(begin, end) {
    var O = aTypedArray$m(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex(begin, length);
    var C = typedArraySpeciesConstructor(O);
    return new C(
      O.buffer,
      O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
      toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
    );
  });

  var Int8Array$3 = global_1.Int8Array;
  var aTypedArray$n = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$n = arrayBufferViewCore.exportTypedArrayMethod;
  var $toLocaleString = [].toLocaleString;
  var $slice$1 = [].slice;

  // iOS Safari 6.x fails here
  var TO_LOCALE_STRING_BUG = !!Int8Array$3 && fails(function () {
    $toLocaleString.call(new Int8Array$3(1));
  });

  var FORCED$n = fails(function () {
    return [1, 2].toLocaleString() != new Int8Array$3([1, 2]).toLocaleString();
  }) || !fails(function () {
    Int8Array$3.prototype.toLocaleString.call([1, 2]);
  });

  // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
  exportTypedArrayMethod$n('toLocaleString', function toLocaleString() {
    return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice$1.call(aTypedArray$n(this)) : aTypedArray$n(this), arguments);
  }, FORCED$n);

  var exportTypedArrayMethod$o = arrayBufferViewCore.exportTypedArrayMethod;



  var Uint8Array$1 = global_1.Uint8Array;
  var Uint8ArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype || {};
  var arrayToString = [].toString;
  var arrayJoin = [].join;

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

  // `%TypedArray%.prototype.toString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
  exportTypedArrayMethod$o('toString', arrayToString, IS_NOT_ARRAY_METHOD);

  var fromCharCode$1 = String.fromCharCode;
  var hex2 = /^[\da-f]{2}$/i;
  var hex4 = /^[\da-f]{4}$/i;

  // `unescape` method
  // https://tc39.es/ecma262/#sec-unescape-string
  _export({ global: true }, {
    unescape: function unescape(string) {
      var str = toString_1(string);
      var result = '';
      var length = str.length;
      var index = 0;
      var chr, slice;
      while (index < length) {
        chr = str.charAt(index++);
        if (chr === '%') {
          if (str.charAt(index) === 'u') {
            slice = str.slice(index + 1, index + 5);
            if (hex4.test(slice)) {
              result += fromCharCode$1(parseInt(slice, 16));
              index += 5;
              continue;
            }
          } else {
            slice = str.slice(index, index + 2);
            if (hex2.test(slice)) {
              result += fromCharCode$1(parseInt(slice, 16));
              index += 2;
              continue;
            }
          }
        }
        result += chr;
      } return result;
    }
  });

  var getWeakData = internalMetadata.getWeakData;








  var setInternalState$7 = internalState.set;
  var internalStateGetterFor$1 = internalState.getterFor;
  var find = arrayIteration.find;
  var findIndex = arrayIteration.findIndex;
  var id$1 = 0;

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function (store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function () {
    this.entries = [];
  };

  var findUncaughtFrozen = function (store, key) {
    return find(store.entries, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;
      else this.entries.push([key, value]);
    },
    'delete': function (key) {
      var index = findIndex(this.entries, function (it) {
        return it[0] === key;
      });
      if (~index) this.entries.splice(index, 1);
      return !!~index;
    }
  };

  var collectionWeak = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, CONSTRUCTOR_NAME);
        setInternalState$7(that, {
          type: CONSTRUCTOR_NAME,
          id: id$1++,
          frozen: undefined
        });
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
      });

      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value);
        else data[state.id] = value;
        return that;
      };

      redefineAll(C.prototype, {
        // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
        // https://tc39.es/ecma262/#sec-weakset.prototype.delete
        'delete': function (key) {
          var state = getInternalState(this);
          if (!isObject(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)['delete'](key);
          return data && hasOwnProperty_1(data, state.id) && delete data[state.id];
        },
        // `{ WeakMap, WeakSet }.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.has
        // https://tc39.es/ecma262/#sec-weakset.prototype.has
        has: function has(key) {
          var state = getInternalState(this);
          if (!isObject(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && hasOwnProperty_1(data, state.id);
        }
      });

      redefineAll(C.prototype, IS_MAP ? {
        // `WeakMap.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.get
        get: function get(key) {
          var state = getInternalState(this);
          if (isObject(key)) {
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        // `WeakMap.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.set
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        // `WeakSet.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-weakset.prototype.add
        add: function add(value) {
          return define(this, value, true);
        }
      });

      return C;
    }
  };

  var es_weakMap = createCommonjsModule(function (module) {






  var enforceIternalState = internalState.enforce;


  var IS_IE11 = !global_1.ActiveXObject && 'ActiveXObject' in global_1;
  // eslint-disable-next-line es/no-object-isextensible -- safe
  var isExtensible = Object.isExtensible;
  var InternalWeakMap;

  var wrapper = function (init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  };

  // `WeakMap` constructor
  // https://tc39.es/ecma262/#sec-weakmap-constructor
  var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

  // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485
  if (nativeWeakMap && IS_IE11) {
    InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
    internalMetadata.enable();
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeDelete = WeakMapPrototype['delete'];
    var nativeHas = WeakMapPrototype.has;
    var nativeGet = WeakMapPrototype.get;
    var nativeSet = WeakMapPrototype.set;
    redefineAll(WeakMapPrototype, {
      'delete': function (key) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeDelete.call(this, key) || state.frozen['delete'](key);
        } return nativeDelete.call(this, key);
      },
      has: function has(key) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas.call(this, key) || state.frozen.has(key);
        } return nativeHas.call(this, key);
      },
      get: function get(key) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
        } return nativeGet.call(this, key);
      },
      set: function set(key, value) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
        } else nativeSet.call(this, key, value);
        return this;
      }
    });
  }
  });

  // `WeakSet` constructor
  // https://tc39.es/ecma262/#sec-weakset-constructor
  collection('WeakSet', function (init) {
    return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionWeak);

  // iterable DOM collections
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

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`


  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  };

  for (var COLLECTION_NAME in domIterables) {
    if (domIterables[COLLECTION_NAME]) {
      handlePrototype(global_1[COLLECTION_NAME] && global_1[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(domTokenListPrototype);

  var ITERATOR$8 = wellKnownSymbol('iterator');
  var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;

  var handlePrototype$1 = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$8] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR$8, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$8] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG$4]) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$4, COLLECTION_NAME);
      }
      if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME$1 in domIterables) {
    handlePrototype$1(global_1[COLLECTION_NAME$1] && global_1[COLLECTION_NAME$1].prototype, COLLECTION_NAME$1);
  }

  handlePrototype$1(domTokenListPrototype, 'DOMTokenList');

  var FORCED$o = !global_1.setImmediate || !global_1.clearImmediate;

  // http://w3c.github.io/setImmediate/
  _export({ global: true, bind: true, enumerable: true, forced: FORCED$o }, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: task.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: task.clear
  });

  var process$4 = global_1.process;

  // `queueMicrotask` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
  _export({ global: true, enumerable: true, noTargetGet: true }, {
    queueMicrotask: function queueMicrotask(fn) {
      var domain = engineIsNode && process$4.domain;
      microtask(domain ? domain.bind(fn) : fn);
    }
  });

  var slice$2 = [].slice;
  var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

  var wrap$1 = function (scheduler) {
    return function (handler, timeout /* , ...arguments */) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice$2.call(arguments, 2) : undefined;
      return scheduler(boundArgs ? function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (isCallable(handler) ? handler : Function(handler)).apply(this, args);
      } : handler, timeout);
    };
  };

  // ie9- setTimeout & setInterval additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
  _export({ global: true, bind: true, forced: MSIE }, {
    // `setTimeout` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    setTimeout: wrap$1(global_1.setTimeout),
    // `setInterval` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    setInterval: wrap$1(global_1.setInterval)
  });

  var ITERATOR$9 = wellKnownSymbol('iterator');

  var nativeUrl = !fails(function () {
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function (value, key) {
      searchParams['delete']('b');
      result += key + value;
    });
    return (isPure && !url.toJSON)
      || !searchParams.sort
      || url.href !== 'http://a/c%20d?a=1&c=3'
      || searchParams.get('c') !== '3'
      || String(new URLSearchParams('?a=1')) !== 'a=1'
      || !searchParams[ITERATOR$9]
      // throws in Edge
      || new URL('https://a@b').username !== 'a'
      || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
      // not punycoded in Edge
      || new URL('http://тест').host !== 'xn--e1aybc'
      // not escaped in Chrome 62-
      || new URL('http://a#б').hash !== '#%D0%B1'
      // fails in Chrome 66-
      || result !== 'a1c3'
      // throws in Safari
      || new URL('http://x', undefined).host !== 'x';
  });

  // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80
  var delimiter = '-'; // '\x2D'
  var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
  var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
  var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var baseMinusTMin = base - tMin;
  var floor$9 = Math.floor;
  var stringFromCharCode = String.fromCharCode;

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */
  var ucs2decode = function (string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while (counter < length) {
      var value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  };

  /**
   * Converts a digit/integer into a basic code point.
   */
  var digitToBasic = function (digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */
  var adapt = function (delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor$9(delta / damp) : delta >> 1;
    delta += floor$9(delta / numPoints);
    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor$9(delta / baseMinusTMin);
    }
    return floor$9(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */
  // eslint-disable-next-line max-statements -- TODO
  var encode = function (input) {
    var output = [];

    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);

    // Cache the length.
    var inputLength = input.length;

    // Initialize the state.
    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue;

    // Handle the basic code points.
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }

    var basicLength = output.length; // number of basic code points.
    var handledCPCount = basicLength; // number of code points that have been handled;

    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) {
      output.push(delimiter);
    }

    // Main encoding loop:
    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = maxInt;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }

      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
      var handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor$9((maxInt - delta) / handledCPCountPlusOne)) {
        throw RangeError(OVERFLOW_ERROR);
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue < n && ++delta > maxInt) {
          throw RangeError(OVERFLOW_ERROR);
        }
        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;
          for (var k = base; /* no condition */; k += base) {
            var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
            q = floor$9(qMinusT / baseMinusT);
          }

          output.push(stringFromCharCode(digitToBasic(q)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }

      ++delta;
      ++n;
    }
    return output.join('');
  };

  var stringPunycodeToAscii = function (input) {
    var encoded = [];
    var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
    var i, label;
    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
    }
    return encoded.join('.');
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`























  var nativeFetch = getBuiltIn('fetch');
  var NativeRequest = getBuiltIn('Request');
  var RequestPrototype = NativeRequest && NativeRequest.prototype;
  var Headers = getBuiltIn('Headers');
  var ITERATOR$a = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$8 = internalState.set;
  var getInternalParamsState = internalState.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = internalState.getterFor(URL_SEARCH_PARAMS_ITERATOR);

  var plus = /\+/g;
  var sequences = Array(4);

  var percentSequence = function (bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };

  var percentDecode = function (sequence) {
    try {
      return decodeURIComponent(sequence);
    } catch (error) {
      return sequence;
    }
  };

  var deserialize = function (it) {
    var result = it.replace(plus, ' ');
    var bytes = 4;
    try {
      return decodeURIComponent(result);
    } catch (error) {
      while (bytes) {
        result = result.replace(percentSequence(bytes--), percentDecode);
      }
      return result;
    }
  };

  var find$1 = /[!'()~]|%20/g;

  var replace$1 = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };

  var replacer = function (match) {
    return replace$1[match];
  };

  var serialize = function (it) {
    return encodeURIComponent(it).replace(find$1, replacer);
  };

  var parseSearchParams = function (result, query) {
    if (query) {
      var attributes = query.split('&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = attribute.split('=');
          result.push({
            key: deserialize(entry.shift()),
            value: deserialize(entry.join('='))
          });
        }
      }
    }
  };

  var updateSearchParams = function (query) {
    this.entries.length = 0;
    parseSearchParams(this.entries, query);
  };

  var validateArgumentsLength = function (passed, required) {
    if (passed < required) throw TypeError('Not enough arguments');
  };

  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState$8(this, {
      type: URL_SEARCH_PARAMS_ITERATOR,
      iterator: getIterator(getInternalParamsState(params).entries),
      kind: kind
    });
  }, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;
    if (!step.done) {
      step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
    } return step;
  });

  // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams
  var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
    anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    var that = this;
    var entries = [];
    var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

    setInternalState$8(that, {
      type: URL_SEARCH_PARAMS,
      entries: entries,
      updateURL: function () { /* empty */ },
      updateSearchParams: updateSearchParams
    });

    if (init !== undefined) {
      if (isObject(init)) {
        iteratorMethod = getIteratorMethod(init);
        if (iteratorMethod) {
          iterator = getIterator(init, iteratorMethod);
          next = iterator.next;
          while (!(step = next.call(iterator)).done) {
            entryIterator = getIterator(anObject(step.value));
            entryNext = entryIterator.next;
            if (
              (first = entryNext.call(entryIterator)).done ||
              (second = entryNext.call(entryIterator)).done ||
              !entryNext.call(entryIterator).done
            ) throw TypeError('Expected sequence with length 2');
            entries.push({ key: toString_1(first.value), value: toString_1(second.value) });
          }
        } else for (key in init) if (hasOwnProperty_1(init, key)) entries.push({ key: key, value: toString_1(init[key]) });
      } else {
        parseSearchParams(
          entries,
          typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : toString_1(init)
        );
      }
    }
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

  redefineAll(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      validateArgumentsLength(arguments.length, 2);
      var state = getInternalParamsState(this);
      state.entries.push({ key: toString_1(name), value: toString_1(value) });
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function (name) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var key = toString_1(name);
      var index = 0;
      while (index < entries.length) {
        if (entries[index].key === key) entries.splice(index, 1);
        else index++;
      }
      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = toString_1(name);
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }
      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = toString_1(name);
      var result = [];
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) result.push(entries[index].value);
      }
      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = toString_1(name);
      var index = 0;
      while (index < entries.length) {
        if (entries[index++].key === key) return true;
      }
      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var found = false;
      var key = toString_1(name);
      var val = toString_1(value);
      var index = 0;
      var entry;
      for (; index < entries.length; index++) {
        entry = entries[index];
        if (entry.key === key) {
          if (found) entries.splice(index--, 1);
          else {
            found = true;
            entry.value = val;
          }
        }
      }
      if (!found) entries.push({ key: key, value: val });
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = getInternalParamsState(this);
      var entries = state.entries;
      // Array#sort is not stable in some engines
      var slice = entries.slice();
      var entry, entriesIndex, sliceIndex;
      entries.length = 0;
      for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
        entry = slice[sliceIndex];
        for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
          if (entries[entriesIndex].key > entry.key) {
            entries.splice(entriesIndex, 0, entry);
            break;
          }
        }
        if (entriesIndex === sliceIndex) entries.push(entry);
      }
      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback /* , thisArg */) {
      var entries = getInternalParamsState(this).entries;
      var boundFunction = functionBindContext(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
      var index = 0;
      var entry;
      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new URLSearchParamsIterator(this, 'entries');
    }
  }, { enumerable: true });

  // `URLSearchParams.prototype[@@iterator]` method
  redefine(URLSearchParamsPrototype, ITERATOR$a, URLSearchParamsPrototype.entries, { name: 'entries' });

  // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  redefine(URLSearchParamsPrototype, 'toString', function toString() {
    var entries = getInternalParamsState(this).entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      result.push(serialize(entry.key) + '=' + serialize(entry.value));
    } return result.join('&');
  }, { enumerable: true });

  setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

  _export({ global: true, forced: !nativeUrl }, {
    URLSearchParams: URLSearchParamsConstructor
  });

  // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
  if (!nativeUrl && isCallable(Headers)) {
    var wrapRequestOptions = function (init) {
      if (isObject(init)) {
        var body = init.body;
        var headers;
        if (classof(body) === URL_SEARCH_PARAMS) {
          headers = init.headers ? new Headers(init.headers) : new Headers();
          if (!headers.has('content-type')) {
            headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
          return objectCreate(init, {
            body: createPropertyDescriptor(0, String(body)),
            headers: createPropertyDescriptor(0, headers)
          });
        }
      } return init;
    };

    if (isCallable(nativeFetch)) {
      _export({ global: true, enumerable: true, forced: true }, {
        fetch: function fetch(input /* , init */) {
          return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }
      });
    }

    if (isCallable(NativeRequest)) {
      var RequestConstructor = function Request(input /* , init */) {
        anInstance(this, RequestConstructor, 'Request');
        return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      };

      RequestPrototype.constructor = RequestConstructor;
      RequestConstructor.prototype = RequestPrototype;

      _export({ global: true, forced: true }, {
        Request: RequestConstructor
      });
    }
  }

  var web_urlSearchParams = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`











  var codeAt$1 = stringMultibyte.codeAt;






  var NativeURL = global_1.URL;
  var URLSearchParams$1 = web_urlSearchParams.URLSearchParams;
  var getInternalSearchParamsState = web_urlSearchParams.getState;
  var setInternalState$9 = internalState.set;
  var getInternalURLState = internalState.getterFor('URL');
  var floor$a = Math.floor;
  var pow$4 = Math.pow;

  var INVALID_AUTHORITY = 'Invalid authority';
  var INVALID_SCHEME = 'Invalid scheme';
  var INVALID_HOST = 'Invalid host';
  var INVALID_PORT = 'Invalid port';

  var ALPHA = /[A-Za-z]/;
  // eslint-disable-next-line regexp/no-obscure-range -- safe
  var ALPHANUMERIC = /[\d+-.A-Za-z]/;
  var DIGIT = /\d/;
  var HEX_START = /^0x/i;
  var OCT = /^[0-7]+$/;
  var DEC = /^\d+$/;
  var HEX = /^[\dA-Fa-f]+$/;
  /* eslint-disable regexp/no-control-character -- safe */
  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
  var TAB_AND_NEW_LINE = /[\t\n\r]/g;
  /* eslint-enable regexp/no-control-character -- safe */
  var EOF;

  var parseHost = function (url, input) {
    var result, codePoints, index;
    if (input.charAt(0) == '[') {
      if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(input.slice(1, -1));
      if (!result) return INVALID_HOST;
      url.host = result;
    // opaque host
    } else if (!isSpecial(url)) {
      if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      url.host = result;
    } else {
      input = stringPunycodeToAscii(input);
      if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      url.host = result;
    }
  };

  var parseIPv4 = function (input) {
    var parts = input.split('.');
    var partsLength, numbers, index, part, radix, number, ipv4;
    if (parts.length && parts[parts.length - 1] == '') {
      parts.pop();
    }
    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];
    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part == '') return input;
      radix = 10;
      if (part.length > 1 && part.charAt(0) == '0') {
        radix = HEX_START.test(part) ? 16 : 8;
        part = part.slice(radix == 8 ? 1 : 2);
      }
      if (part === '') {
        number = 0;
      } else {
        if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
        number = parseInt(part, radix);
      }
      numbers.push(number);
    }
    for (index = 0; index < partsLength; index++) {
      number = numbers[index];
      if (index == partsLength - 1) {
        if (number >= pow$4(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }
    ipv4 = numbers.pop();
    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow$4(256, 3 - index);
    }
    return ipv4;
  };

  // eslint-disable-next-line max-statements -- TODO
  var parseIPv6 = function (input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

    var chr = function () {
      return input.charAt(pointer);
    };

    if (chr() == ':') {
      if (input.charAt(1) != ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }
    while (chr()) {
      if (pieceIndex == 8) return;
      if (chr() == ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }
      value = length = 0;
      while (length < 4 && HEX.test(chr())) {
        value = value * 16 + parseInt(chr(), 16);
        pointer++;
        length++;
      }
      if (chr() == '.') {
        if (length == 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;
        while (chr()) {
          ipv4Piece = null;
          if (numbersSeen > 0) {
            if (chr() == '.' && numbersSeen < 4) pointer++;
            else return;
          }
          if (!DIGIT.test(chr())) return;
          while (DIGIT.test(chr())) {
            number = parseInt(chr(), 10);
            if (ipv4Piece === null) ipv4Piece = number;
            else if (ipv4Piece == 0) return;
            else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }
          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
        }
        if (numbersSeen != 4) return;
        break;
      } else if (chr() == ':') {
        pointer++;
        if (!chr()) return;
      } else if (chr()) return;
      address[pieceIndex++] = value;
    }
    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;
      while (pieceIndex != 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex != 8) return;
    return address;
  };

  var findLongestZeroSequence = function (ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;
    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }
        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }
    if (currLength > maxLength) {
      maxIndex = currStart;
      maxLength = currLength;
    }
    return maxIndex;
  };

  var serializeHost = function (host) {
    var result, index, compress, ignore0;
    // ipv4
    if (typeof host == 'number') {
      result = [];
      for (index = 0; index < 4; index++) {
        result.unshift(host % 256);
        host = floor$a(host / 256);
      } return result.join('.');
    // ipv6
    } else if (typeof host == 'object') {
      result = '';
      compress = findLongestZeroSequence(host);
      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;
        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += host[index].toString(16);
          if (index < 7) result += ':';
        }
      }
      return '[' + result + ']';
    } return host;
  };

  var C0ControlPercentEncodeSet = {};
  var fragmentPercentEncodeSet = objectAssign$1({}, C0ControlPercentEncodeSet, {
    ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
  });
  var pathPercentEncodeSet = objectAssign$1({}, fragmentPercentEncodeSet, {
    '#': 1, '?': 1, '{': 1, '}': 1
  });
  var userinfoPercentEncodeSet = objectAssign$1({}, pathPercentEncodeSet, {
    '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
  });

  var percentEncode = function (chr, set) {
    var code = codeAt$1(chr, 0);
    return code > 0x20 && code < 0x7F && !hasOwnProperty_1(set, chr) ? chr : encodeURIComponent(chr);
  };

  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };

  var isSpecial = function (url) {
    return hasOwnProperty_1(specialSchemes, url.scheme);
  };

  var includesCredentials = function (url) {
    return url.username != '' || url.password != '';
  };

  var cannotHaveUsernamePasswordPort = function (url) {
    return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
  };

  var isWindowsDriveLetter = function (string, normalized) {
    var second;
    return string.length == 2 && ALPHA.test(string.charAt(0))
      && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
  };

  var startsWithWindowsDriveLetter = function (string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
      string.length == 2 ||
      ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
    );
  };

  var shortenURLsPath = function (url) {
    var path = url.path;
    var pathSize = path.length;
    if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.pop();
    }
  };

  var isSingleDot = function (segment) {
    return segment === '.' || segment.toLowerCase() === '%2e';
  };

  var isDoubleDot = function (segment) {
    segment = segment.toLowerCase();
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  };

  // States:
  var SCHEME_START = {};
  var SCHEME = {};
  var NO_SCHEME = {};
  var SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var PATH_OR_AUTHORITY = {};
  var RELATIVE = {};
  var RELATIVE_SLASH = {};
  var SPECIAL_AUTHORITY_SLASHES = {};
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var AUTHORITY = {};
  var HOST = {};
  var HOSTNAME = {};
  var PORT = {};
  var FILE = {};
  var FILE_SLASH = {};
  var FILE_HOST = {};
  var PATH_START = {};
  var PATH = {};
  var CANNOT_BE_A_BASE_URL_PATH = {};
  var QUERY = {};
  var FRAGMENT = {};

  // eslint-disable-next-line max-statements -- TODO
  var parseURL = function (url, input, stateOverride, base) {
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }

    input = input.replace(TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && ALPHA.test(chr)) {
            buffer += chr.toLowerCase();
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (ALPHANUMERIC.test(chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += chr.toLowerCase();
          } else if (chr == ':') {
            if (stateOverride && (
              (isSpecial(url) != hasOwnProperty_1(specialSchemes, buffer)) ||
              (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
              (url.scheme == 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = FILE;
            } else if (isSpecial(url) && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (isSpecial(url)) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              url.path.push('');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (chr == '/' || (chr == '\\' && isSpecial(url))) {
            state = RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = base.path.slice();
            url.path.pop();
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (isSpecial(url) && (chr == '/' || chr == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || buffer.charAt(pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && isSpecial(url))
          ) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = parseHost(url, buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && isSpecial(url))
          ) {
            if (isSpecial(url) && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
            failure = parseHost(url, buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;
            else if (chr == ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (DIGIT.test(chr)) {
            buffer += chr;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && isSpecial(url)) ||
            stateOverride
          ) {
            if (buffer != '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = FILE_SLASH;
          else if (base && base.scheme == 'file') {
            if (chr == EOF) {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = base.path.slice();
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                url.host = base.host;
                url.path = base.path.slice();
                shortenURLsPath(url);
              }
              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
            if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = parseHost(url, buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (isSpecial(url)) {
            state = PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            state = PATH;
            if (chr != '/') continue;
          } break;

        case PATH:
          if (
            chr == EOF || chr == '/' ||
            (chr == '\\' && isSpecial(url)) ||
            (!stateOverride && (chr == '?' || chr == '#'))
          ) {
            if (isDoubleDot(buffer)) {
              shortenURLsPath(url);
              if (chr != '/' && !(chr == '\\' && isSpecial(url))) {
                url.path.push('');
              }
            } else if (isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && isSpecial(url))) {
                url.path.push('');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
              }
              url.path.push(buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                url.path.shift();
              }
            }
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            if (chr == "'" && isSpecial(url)) url.query += '%27';
            else if (chr == '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  };

  // `URL` constructor
  // https://url.spec.whatwg.org/#url-class
  var URLConstructor = function URL(url /* , base */) {
    var that = anInstance(this, URLConstructor, 'URL');
    var base = arguments.length > 1 ? arguments[1] : undefined;
    var urlString = toString_1(url);
    var state = setInternalState$9(that, { type: 'URL' });
    var baseState, failure;
    if (base !== undefined) {
      if (base instanceof URLConstructor) baseState = getInternalURLState(base);
      else {
        failure = parseURL(baseState = {}, toString_1(base));
        if (failure) throw TypeError(failure);
      }
    }
    failure = parseURL(state, urlString, null, baseState);
    if (failure) throw TypeError(failure);
    var searchParams = state.searchParams = new URLSearchParams$1();
    var searchParamsState = getInternalSearchParamsState(searchParams);
    searchParamsState.updateSearchParams(state.query);
    searchParamsState.updateURL = function () {
      state.query = String(searchParams) || null;
    };
    if (!descriptors) {
      that.href = serializeURL.call(that);
      that.origin = getOrigin.call(that);
      that.protocol = getProtocol.call(that);
      that.username = getUsername.call(that);
      that.password = getPassword.call(that);
      that.host = getHost.call(that);
      that.hostname = getHostname.call(that);
      that.port = getPort.call(that);
      that.pathname = getPathname.call(that);
      that.search = getSearch.call(that);
      that.searchParams = getSearchParams.call(that);
      that.hash = getHash.call(that);
    }
  };

  var URLPrototype = URLConstructor.prototype;

  var serializeURL = function () {
    var url = getInternalURLState(this);
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (includesCredentials(url)) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  };

  var getOrigin = function () {
    var url = getInternalURLState(this);
    var scheme = url.scheme;
    var port = url.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !isSpecial(url)) return 'null';
    return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
  };

  var getProtocol = function () {
    return getInternalURLState(this).scheme + ':';
  };

  var getUsername = function () {
    return getInternalURLState(this).username;
  };

  var getPassword = function () {
    return getInternalURLState(this).password;
  };

  var getHost = function () {
    var url = getInternalURLState(this);
    var host = url.host;
    var port = url.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  };

  var getHostname = function () {
    var host = getInternalURLState(this).host;
    return host === null ? '' : serializeHost(host);
  };

  var getPort = function () {
    var port = getInternalURLState(this).port;
    return port === null ? '' : String(port);
  };

  var getPathname = function () {
    var url = getInternalURLState(this);
    var path = url.path;
    return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  };

  var getSearch = function () {
    var query = getInternalURLState(this).query;
    return query ? '?' + query : '';
  };

  var getSearchParams = function () {
    return getInternalURLState(this).searchParams;
  };

  var getHash = function () {
    var fragment = getInternalURLState(this).fragment;
    return fragment ? '#' + fragment : '';
  };

  var accessorDescriptor = function (getter, setter) {
    return { get: getter, set: setter, configurable: true, enumerable: true };
  };

  if (descriptors) {
    objectDefineProperties(URLPrototype, {
      // `URL.prototype.href` accessors pair
      // https://url.spec.whatwg.org/#dom-url-href
      href: accessorDescriptor(serializeURL, function (href) {
        var url = getInternalURLState(this);
        var urlString = toString_1(href);
        var failure = parseURL(url, urlString);
        if (failure) throw TypeError(failure);
        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
      }),
      // `URL.prototype.origin` getter
      // https://url.spec.whatwg.org/#dom-url-origin
      origin: accessorDescriptor(getOrigin),
      // `URL.prototype.protocol` accessors pair
      // https://url.spec.whatwg.org/#dom-url-protocol
      protocol: accessorDescriptor(getProtocol, function (protocol) {
        var url = getInternalURLState(this);
        parseURL(url, toString_1(protocol) + ':', SCHEME_START);
      }),
      // `URL.prototype.username` accessors pair
      // https://url.spec.whatwg.org/#dom-url-username
      username: accessorDescriptor(getUsername, function (username) {
        var url = getInternalURLState(this);
        var codePoints = arrayFrom(toString_1(username));
        if (cannotHaveUsernamePasswordPort(url)) return;
        url.username = '';
        for (var i = 0; i < codePoints.length; i++) {
          url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      }),
      // `URL.prototype.password` accessors pair
      // https://url.spec.whatwg.org/#dom-url-password
      password: accessorDescriptor(getPassword, function (password) {
        var url = getInternalURLState(this);
        var codePoints = arrayFrom(toString_1(password));
        if (cannotHaveUsernamePasswordPort(url)) return;
        url.password = '';
        for (var i = 0; i < codePoints.length; i++) {
          url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      }),
      // `URL.prototype.host` accessors pair
      // https://url.spec.whatwg.org/#dom-url-host
      host: accessorDescriptor(getHost, function (host) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        parseURL(url, toString_1(host), HOST);
      }),
      // `URL.prototype.hostname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hostname
      hostname: accessorDescriptor(getHostname, function (hostname) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        parseURL(url, toString_1(hostname), HOSTNAME);
      }),
      // `URL.prototype.port` accessors pair
      // https://url.spec.whatwg.org/#dom-url-port
      port: accessorDescriptor(getPort, function (port) {
        var url = getInternalURLState(this);
        if (cannotHaveUsernamePasswordPort(url)) return;
        port = toString_1(port);
        if (port == '') url.port = null;
        else parseURL(url, port, PORT);
      }),
      // `URL.prototype.pathname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-pathname
      pathname: accessorDescriptor(getPathname, function (pathname) {
        var url = getInternalURLState(this);
        if (url.cannotBeABaseURL) return;
        url.path = [];
        parseURL(url, toString_1(pathname), PATH_START);
      }),
      // `URL.prototype.search` accessors pair
      // https://url.spec.whatwg.org/#dom-url-search
      search: accessorDescriptor(getSearch, function (search) {
        var url = getInternalURLState(this);
        search = toString_1(search);
        if (search == '') {
          url.query = null;
        } else {
          if ('?' == search.charAt(0)) search = search.slice(1);
          url.query = '';
          parseURL(url, search, QUERY);
        }
        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
      }),
      // `URL.prototype.searchParams` getter
      // https://url.spec.whatwg.org/#dom-url-searchparams
      searchParams: accessorDescriptor(getSearchParams),
      // `URL.prototype.hash` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hash
      hash: accessorDescriptor(getHash, function (hash) {
        var url = getInternalURLState(this);
        hash = toString_1(hash);
        if (hash == '') {
          url.fragment = null;
          return;
        }
        if ('#' == hash.charAt(0)) hash = hash.slice(1);
        url.fragment = '';
        parseURL(url, hash, FRAGMENT);
      })
    });
  }

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  redefine(URLPrototype, 'toJSON', function toJSON() {
    return serializeURL.call(this);
  }, { enumerable: true });

  // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior
  redefine(URLPrototype, 'toString', function toString() {
    return serializeURL.call(this);
  }, { enumerable: true });

  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
    // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
      return nativeCreateObjectURL.apply(NativeURL, arguments);
    });
    // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
      return nativeRevokeObjectURL.apply(NativeURL, arguments);
    });
  }

  setToStringTag(URLConstructor, 'URL');

  _export({ global: true, forced: !nativeUrl, sham: !descriptors }, {
    URL: URLConstructor
  });

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  _export({ target: 'URL', proto: true, enumerable: true }, {
    toJSON: function toJSON() {
      return URL.prototype.toString.call(this);
    }
  });

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] =
      GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });



  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    capitalize: capitalize,
    createChainedFunction: createChainedFunction,
    createSvgIcon: createSvgIcon,
    debounce: debounce,
    deprecatedPropType: deprecatedPropType,
    isMuiElement: isMuiElement,
    ownerDocument: ownerDocument,
    ownerWindow: ownerWindow,
    requirePropFactory: requirePropFactory,
    setRef: setRef,
    unstable_useEnhancedEffect: useEnhancedEffect,
    unstable_useId: useId,
    unsupportedProp: unsupportedProp,
    useControlled: useControlled,
    useEventCallback: useEventCallback,
    useForkRef: useForkRef,
    useIsFocusVisible: useIsFocusVisible
  });

  /**
   * @ignore - internal component.
   */

  const TreeViewContext = /*#__PURE__*/React.createContext({});

  const _excluded$C = ["element"];

  function findIndex$1(array, comp) {
    for (let i = 0; i < array.length; i += 1) {
      if (comp(array[i])) {
        return i;
      }
    }

    return -1;
  }

  function binaryFindElement(array, element) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
      const middle = Math.floor((start + end) / 2);

      if (array[middle].element === element) {
        return middle;
      } // eslint-disable-next-line no-bitwise


      if (array[middle].element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return start;
  }

  const DescendantContext = /*#__PURE__*/React.createContext({});

  function usePrevious(value) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const noop$1 = () => {};
  /**
   * This hook registers our descendant by passing it into an array. We can then
   * search that array by to find its index when registering it in the component.
   * We use this for focus management, keyboard navigation, and typeahead
   * functionality for some components.
   *
   * The hook accepts the element node
   *
   * Our main goals with this are:
   *   1) maximum composability,
   *   2) minimal API friction
   *   3) SSR compatibility*
   *   4) concurrent safe
   *   5) index always up-to-date with the tree despite changes
   *   6) works with memoization of any component in the tree (hopefully)
   *
   * * As for SSR, the good news is that we don't actually need the index on the
   * server for most use-cases, as we are only using it to determine the order of
   * composed descendants for keyboard navigation.
   */


  function useDescendant(descendant) {
    const [, forceUpdate] = React.useState();
    const {
      registerDescendant = noop$1,
      unregisterDescendant = noop$1,
      descendants = [],
      parentId = null
    } = React.useContext(DescendantContext); // This will initially return -1 because we haven't registered the descendant
    // on the first render. After we register, this will then return the correct
    // index on the following render and we will re-register descendants
    // so that everything is up-to-date before the user interacts with a
    // collection.

    const index = findIndex$1(descendants, item => item.element === descendant.element);
    const previousDescendants = usePrevious(descendants); // We also need to re-register descendants any time ANY of the other
    // descendants have changed. My brain was melting when I wrote this and it
    // feels a little off, but checking in render and using the result in the
    // effect's dependency array works well enough.

    const someDescendantsHaveChanged = descendants.some((newDescendant, position) => {
      return previousDescendants && previousDescendants[position] && previousDescendants[position].element !== newDescendant.element;
    }); // Prevent any flashing

    useEnhancedEffect(() => {
      if (descendant.element) {
        registerDescendant(_extends({}, descendant, {
          index
        }));
        return () => {
          unregisterDescendant(descendant.element);
        };
      }

      forceUpdate({});
      return undefined;
    }, [registerDescendant, unregisterDescendant, index, someDescendantsHaveChanged, descendant]);
    return {
      parentId,
      index
    };
  }
  function DescendantProvider(props) {
    const {
      children,
      id
    } = props;
    const [items, set] = React.useState([]);
    const registerDescendant = React.useCallback(_ref => {
      let {
        element
      } = _ref,
          other = _objectWithoutPropertiesLoose(_ref, _excluded$C);

      set(oldItems => {
        let newItems;

        if (oldItems.length === 0) {
          // If there are no items, register at index 0 and bail.
          return [_extends({}, other, {
            element,
            index: 0
          })];
        }

        const index = binaryFindElement(oldItems, element);

        if (oldItems[index] && oldItems[index].element === element) {
          // If the element is already registered, just use the same array
          newItems = oldItems;
        } else {
          // When registering a descendant, we need to make sure we insert in
          // into the array in the same order that it appears in the DOM. So as
          // new descendants are added or maybe some are removed, we always know
          // that the array is up-to-date and correct.
          //
          // So here we look at our registered descendants and see if the new
          // element we are adding appears earlier than an existing descendant's
          // DOM node via `node.compareDocumentPosition`. If it does, we insert
          // the new element at this index. Because `registerDescendant` will be
          // called in an effect every time the descendants state value changes,
          // we should be sure that this index is accurate when descendent
          // elements come or go from our component.
          const newItem = _extends({}, other, {
            element,
            index
          }); // If an index is not found we will push the element to the end.


          newItems = oldItems.slice();
          newItems.splice(index, 0, newItem);
        }

        newItems.forEach((item, position) => {
          item.index = position;
        });
        return newItems;
      });
    }, []);
    const unregisterDescendant = React.useCallback(element => {
      set(oldItems => oldItems.filter(item => element !== item.element));
    }, []);
    const value = React.useMemo(() => ({
      descendants: items,
      registerDescendant,
      unregisterDescendant,
      parentId: id
    }), [items, registerDescendant, unregisterDescendant, id]);
    return /*#__PURE__*/jsxRuntime_1(DescendantContext.Provider, {
      value: value,
      children: children
    });
  }

  function getTreeViewUtilityClass(slot) {
    return generateUtilityClass('MuiTreeView', slot);
  }
  const treeViewClasses = generateUtilityClasses('MuiTreeView', ['root']);

  const _excluded$D = ["children", "className", "defaultCollapseIcon", "defaultEndIcon", "defaultExpanded", "defaultExpandIcon", "defaultParentIcon", "defaultSelected", "disabledItemsFocusable", "disableSelection", "expanded", "id", "multiSelect", "onBlur", "onFocus", "onKeyDown", "onNodeFocus", "onNodeSelect", "onNodeToggle", "selected"];

  const useUtilityClasses$n = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getTreeViewUtilityClass, classes);
  };

  const TreeViewRoot = styled$1('ul', {
    name: 'MuiTreeView',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    padding: 0,
    margin: 0,
    listStyle: 'none',
    outline: 0
  });

  function isPrintableCharacter(string) {
    return string && string.length === 1 && string.match(/\S/);
  }

  function findNextFirstChar(firstChars, startIndex, char) {
    for (let i = startIndex; i < firstChars.length; i += 1) {
      if (char === firstChars[i]) {
        return i;
      }
    }

    return -1;
  }

  function noopSelection() {
    return false;
  }

  const defaultDefaultExpanded = [];
  const defaultDefaultSelected = [];
  const TreeView = /*#__PURE__*/React.forwardRef(function TreeView(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiTreeView'
    });

    const {
      children,
      className,
      defaultCollapseIcon,
      defaultEndIcon,
      defaultExpanded = defaultDefaultExpanded,
      defaultExpandIcon,
      defaultParentIcon,
      defaultSelected = defaultDefaultSelected,
      disabledItemsFocusable = false,
      disableSelection = false,
      expanded: expandedProp,
      id: idProp,
      multiSelect = false,
      onBlur,
      onFocus,
      onKeyDown,
      onNodeFocus,
      onNodeSelect,
      onNodeToggle,
      selected: selectedProp
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$D);

    const theme = useTheme$3();
    const isRtl = theme.direction === 'rtl';

    const ownerState = _extends({}, props, {
      defaultExpanded,
      defaultSelected,
      disabledItemsFocusable,
      disableSelection,
      multiSelect
    });

    const classes = useUtilityClasses$n(ownerState);
    const treeId = useId(idProp);
    const treeRef = React.useRef(null);
    const handleRef = useForkRef(treeRef, ref);
    const [focusedNodeId, setFocusedNodeId] = React.useState(null);
    const nodeMap = React.useRef({});
    const firstCharMap = React.useRef({});
    const [expanded, setExpandedState] = useControlled({
      controlled: expandedProp,
      default: defaultExpanded,
      name: 'TreeView',
      state: 'expanded'
    });
    const [selected, setSelectedState] = useControlled({
      controlled: selectedProp,
      default: defaultSelected,
      name: 'TreeView',
      state: 'selected'
    });
    /*
     * Status Helpers
     */

    const isExpanded = React.useCallback(id => Array.isArray(expanded) ? expanded.indexOf(id) !== -1 : false, [expanded]);
    const isExpandable = React.useCallback(id => nodeMap.current[id] && nodeMap.current[id].expandable, []);
    const isSelected = React.useCallback(id => Array.isArray(selected) ? selected.indexOf(id) !== -1 : selected === id, [selected]);
    const isDisabled = React.useCallback(id => {
      let node = nodeMap.current[id]; // This can be called before the node has been added to the node map.

      if (!node) {
        return false;
      }

      if (node.disabled) {
        return true;
      }

      while (node.parentId != null) {
        node = nodeMap.current[node.parentId];

        if (node.disabled) {
          return true;
        }
      }

      return false;
    }, []);

    const isFocused = id => focusedNodeId === id;
    /*
     * Child Helpers
     */
    // Using Object.keys -> .map to mimic Object.values we should replace with Object.values() once we stop IE11 support.


    const getChildrenIds = id => Object.keys(nodeMap.current).map(key => {
      return nodeMap.current[key];
    }).filter(node => node.parentId === id).sort((a, b) => a.index - b.index).map(child => child.id);

    const getNavigableChildrenIds = id => {
      let childrenIds = getChildrenIds(id);

      if (!disabledItemsFocusable) {
        childrenIds = childrenIds.filter(node => !isDisabled(node));
      }

      return childrenIds;
    };
    /*
     * Node Helpers
     */


    const getNextNode = id => {
      // If expanded get first child
      if (isExpanded(id) && getNavigableChildrenIds(id).length > 0) {
        return getNavigableChildrenIds(id)[0];
      }

      let node = nodeMap.current[id];

      while (node != null) {
        // Try to get next sibling
        const siblings = getNavigableChildrenIds(node.parentId);
        const nextSibling = siblings[siblings.indexOf(node.id) + 1];

        if (nextSibling) {
          return nextSibling;
        } // If the sibling does not exist, go up a level to the parent and try again.


        node = nodeMap.current[node.parentId];
      }

      return null;
    };

    const getPreviousNode = id => {
      const node = nodeMap.current[id];
      const siblings = getNavigableChildrenIds(node.parentId);
      const nodeIndex = siblings.indexOf(id);

      if (nodeIndex === 0) {
        return node.parentId;
      }

      let currentNode = siblings[nodeIndex - 1];

      while (isExpanded(currentNode) && getNavigableChildrenIds(currentNode).length > 0) {
        currentNode = getNavigableChildrenIds(currentNode).pop();
      }

      return currentNode;
    };

    const getLastNode = () => {
      let lastNode = getNavigableChildrenIds(null).pop();

      while (isExpanded(lastNode)) {
        lastNode = getNavigableChildrenIds(lastNode).pop();
      }

      return lastNode;
    };

    const getFirstNode = () => getNavigableChildrenIds(null)[0];

    const getParent = id => nodeMap.current[id].parentId;
    /**
     * This is used to determine the start and end of a selection range so
     * we can get the nodes between the two border nodes.
     *
     * It finds the nodes' common ancestor using
     * a naive implementation of a lowest common ancestor algorithm
     * (https://en.wikipedia.org/wiki/Lowest_common_ancestor).
     * Then compares the ancestor's 2 children that are ancestors of nodeA and NodeB
     * so we can compare their indexes to work out which node comes first in a depth first search.
     * (https://en.wikipedia.org/wiki/Depth-first_search)
     *
     * Another way to put it is which node is shallower in a trémaux tree
     * https://en.wikipedia.org/wiki/Tr%C3%A9maux_tree
     */


    const findOrderInTremauxTree = (nodeAId, nodeBId) => {
      if (nodeAId === nodeBId) {
        return [nodeAId, nodeBId];
      }

      const nodeA = nodeMap.current[nodeAId];
      const nodeB = nodeMap.current[nodeBId];

      if (nodeA.parentId === nodeB.id || nodeB.parentId === nodeA.id) {
        return nodeB.parentId === nodeA.id ? [nodeA.id, nodeB.id] : [nodeB.id, nodeA.id];
      }

      const aFamily = [nodeA.id];
      const bFamily = [nodeB.id];
      let aAncestor = nodeA.parentId;
      let bAncestor = nodeB.parentId;
      let aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
      let bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
      let continueA = true;
      let continueB = true;

      while (!bAncestorIsCommon && !aAncestorIsCommon) {
        if (continueA) {
          aFamily.push(aAncestor);
          aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
          continueA = aAncestor !== null;

          if (!aAncestorIsCommon && continueA) {
            aAncestor = nodeMap.current[aAncestor].parentId;
          }
        }

        if (continueB && !aAncestorIsCommon) {
          bFamily.push(bAncestor);
          bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
          continueB = bAncestor !== null;

          if (!bAncestorIsCommon && continueB) {
            bAncestor = nodeMap.current[bAncestor].parentId;
          }
        }
      }

      const commonAncestor = aAncestorIsCommon ? aAncestor : bAncestor;
      const ancestorFamily = getChildrenIds(commonAncestor);
      const aSide = aFamily[aFamily.indexOf(commonAncestor) - 1];
      const bSide = bFamily[bFamily.indexOf(commonAncestor) - 1];
      return ancestorFamily.indexOf(aSide) < ancestorFamily.indexOf(bSide) ? [nodeAId, nodeBId] : [nodeBId, nodeAId];
    };

    const getNodesInRange = (nodeA, nodeB) => {
      const [first, last] = findOrderInTremauxTree(nodeA, nodeB);
      const nodes = [first];
      let current = first;

      while (current !== last) {
        current = getNextNode(current);
        nodes.push(current);
      }

      return nodes;
    };
    /*
     * Focus Helpers
     */


    const focus = (event, id) => {
      if (id) {
        setFocusedNodeId(id);

        if (onNodeFocus) {
          onNodeFocus(event, id);
        }
      }
    };

    const focusNextNode = (event, id) => focus(event, getNextNode(id));

    const focusPreviousNode = (event, id) => focus(event, getPreviousNode(id));

    const focusFirstNode = event => focus(event, getFirstNode());

    const focusLastNode = event => focus(event, getLastNode());

    const focusByFirstCharacter = (event, id, char) => {
      let start;
      let index;
      const lowercaseChar = char.toLowerCase();
      const firstCharIds = [];
      const firstChars = []; // This really only works since the ids are strings

      Object.keys(firstCharMap.current).forEach(nodeId => {
        const firstChar = firstCharMap.current[nodeId];
        const map = nodeMap.current[nodeId];
        const visible = map.parentId ? isExpanded(map.parentId) : true;
        const shouldBeSkipped = disabledItemsFocusable ? false : isDisabled(nodeId);

        if (visible && !shouldBeSkipped) {
          firstCharIds.push(nodeId);
          firstChars.push(firstChar);
        }
      }); // Get start index for search based on position of currentItem

      start = firstCharIds.indexOf(id) + 1;

      if (start >= firstCharIds.length) {
        start = 0;
      } // Check remaining slots in the menu


      index = findNextFirstChar(firstChars, start, lowercaseChar); // If not found in remaining slots, check from beginning

      if (index === -1) {
        index = findNextFirstChar(firstChars, 0, lowercaseChar);
      } // If match was found...


      if (index > -1) {
        focus(event, firstCharIds[index]);
      }
    };
    /*
     * Expansion Helpers
     */


    const toggleExpansion = (event, value = focusedNodeId) => {
      let newExpanded;

      if (expanded.indexOf(value) !== -1) {
        newExpanded = expanded.filter(id => id !== value);
      } else {
        newExpanded = [value].concat(expanded);
      }

      if (onNodeToggle) {
        onNodeToggle(event, newExpanded);
      }

      setExpandedState(newExpanded);
    };

    const expandAllSiblings = (event, id) => {
      const map = nodeMap.current[id];
      const siblings = getChildrenIds(map.parentId);
      const diff = siblings.filter(child => isExpandable(child) && !isExpanded(child));
      const newExpanded = expanded.concat(diff);

      if (diff.length > 0) {
        setExpandedState(newExpanded);

        if (onNodeToggle) {
          onNodeToggle(event, newExpanded);
        }
      }
    };
    /*
     * Selection Helpers
     */


    const lastSelectedNode = React.useRef(null);
    const lastSelectionWasRange = React.useRef(false);
    const currentRangeSelection = React.useRef([]);

    const handleRangeArrowSelect = (event, nodes) => {
      let base = selected.slice();
      const {
        start,
        next,
        current
      } = nodes;

      if (!next || !current) {
        return;
      }

      if (currentRangeSelection.current.indexOf(current) === -1) {
        currentRangeSelection.current = [];
      }

      if (lastSelectionWasRange.current) {
        if (currentRangeSelection.current.indexOf(next) !== -1) {
          base = base.filter(id => id === start || id !== current);
          currentRangeSelection.current = currentRangeSelection.current.filter(id => id === start || id !== current);
        } else {
          base.push(next);
          currentRangeSelection.current.push(next);
        }
      } else {
        base.push(next);
        currentRangeSelection.current.push(current, next);
      }

      if (onNodeSelect) {
        onNodeSelect(event, base);
      }

      setSelectedState(base);
    };

    const handleRangeSelect = (event, nodes) => {
      let base = selected.slice();
      const {
        start,
        end
      } = nodes; // If last selection was a range selection ignore nodes that were selected.

      if (lastSelectionWasRange.current) {
        base = base.filter(id => currentRangeSelection.current.indexOf(id) === -1);
      }

      let range = getNodesInRange(start, end);
      range = range.filter(node => !isDisabled(node));
      currentRangeSelection.current = range;
      let newSelected = base.concat(range);
      newSelected = newSelected.filter((id, i) => newSelected.indexOf(id) === i);

      if (onNodeSelect) {
        onNodeSelect(event, newSelected);
      }

      setSelectedState(newSelected);
    };

    const handleMultipleSelect = (event, value) => {
      let newSelected;

      if (selected.indexOf(value) !== -1) {
        newSelected = selected.filter(id => id !== value);
      } else {
        newSelected = [value].concat(selected);
      }

      if (onNodeSelect) {
        onNodeSelect(event, newSelected);
      }

      setSelectedState(newSelected);
    };

    const handleSingleSelect = (event, value) => {
      const newSelected = multiSelect ? [value] : value;

      if (onNodeSelect) {
        onNodeSelect(event, newSelected);
      }

      setSelectedState(newSelected);
    };

    const selectNode = (event, id, multiple = false) => {
      if (id) {
        if (multiple) {
          handleMultipleSelect(event, id);
        } else {
          handleSingleSelect(event, id);
        }

        lastSelectedNode.current = id;
        lastSelectionWasRange.current = false;
        currentRangeSelection.current = [];
        return true;
      }

      return false;
    };

    const selectRange = (event, nodes, stacked = false) => {
      const {
        start = lastSelectedNode.current,
        end,
        current
      } = nodes;

      if (stacked) {
        handleRangeArrowSelect(event, {
          start,
          next: end,
          current
        });
      } else if (start != null && end != null) {
        handleRangeSelect(event, {
          start,
          end
        });
      }

      lastSelectionWasRange.current = true;
    };

    const rangeSelectToFirst = (event, id) => {
      if (!lastSelectedNode.current) {
        lastSelectedNode.current = id;
      }

      const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
      selectRange(event, {
        start,
        end: getFirstNode()
      });
    };

    const rangeSelectToLast = (event, id) => {
      if (!lastSelectedNode.current) {
        lastSelectedNode.current = id;
      }

      const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
      selectRange(event, {
        start,
        end: getLastNode()
      });
    };

    const selectNextNode = (event, id) => {
      if (!isDisabled(getNextNode(id))) {
        selectRange(event, {
          end: getNextNode(id),
          current: id
        }, true);
      }
    };

    const selectPreviousNode = (event, id) => {
      if (!isDisabled(getPreviousNode(id))) {
        selectRange(event, {
          end: getPreviousNode(id),
          current: id
        }, true);
      }
    };

    const selectAllNodes = event => {
      selectRange(event, {
        start: getFirstNode(),
        end: getLastNode()
      });
    };
    /*
     * Mapping Helpers
     */


    const registerNode = React.useCallback(node => {
      const {
        id,
        index,
        parentId,
        expandable,
        idAttribute,
        disabled
      } = node;
      nodeMap.current[id] = {
        id,
        index,
        parentId,
        expandable,
        idAttribute,
        disabled
      };
    }, []);
    const unregisterNode = React.useCallback(id => {
      const newMap = _extends({}, nodeMap.current);

      delete newMap[id];
      nodeMap.current = newMap;
      setFocusedNodeId(oldFocusedNodeId => {
        if (oldFocusedNodeId === id && treeRef.current === ownerDocument(treeRef.current).activeElement) {
          return getChildrenIds(null)[0];
        }

        return oldFocusedNodeId;
      });
    }, []);
    const mapFirstChar = React.useCallback((id, firstChar) => {
      firstCharMap.current[id] = firstChar;
    }, []);
    const unMapFirstChar = React.useCallback(id => {
      const newMap = _extends({}, firstCharMap.current);

      delete newMap[id];
      firstCharMap.current = newMap;
    }, []);
    /**
     * Event handlers and Navigation
     */

    const handleNextArrow = event => {
      if (isExpandable(focusedNodeId)) {
        if (isExpanded(focusedNodeId)) {
          focusNextNode(event, focusedNodeId);
        } else if (!isDisabled(focusedNodeId)) {
          toggleExpansion(event);
        }
      }

      return true;
    };

    const handlePreviousArrow = event => {
      if (isExpanded(focusedNodeId) && !isDisabled(focusedNodeId)) {
        toggleExpansion(event, focusedNodeId);
        return true;
      }

      const parent = getParent(focusedNodeId);

      if (parent) {
        focus(event, parent);
        return true;
      }

      return false;
    };

    const handleKeyDown = event => {
      let flag = false;
      const key = event.key; // If the tree is empty there will be no focused node

      if (event.altKey || event.currentTarget !== event.target || !focusedNodeId) {
        return;
      }

      const ctrlPressed = event.ctrlKey || event.metaKey;

      switch (key) {
        case ' ':
          if (!disableSelection && !isDisabled(focusedNodeId)) {
            if (multiSelect && event.shiftKey) {
              selectRange(event, {
                end: focusedNodeId
              });
              flag = true;
            } else if (multiSelect) {
              flag = selectNode(event, focusedNodeId, true);
            } else {
              flag = selectNode(event, focusedNodeId);
            }
          }

          event.stopPropagation();
          break;

        case 'Enter':
          if (!isDisabled(focusedNodeId)) {
            if (isExpandable(focusedNodeId)) {
              toggleExpansion(event);
              flag = true;
            }
          }

          event.stopPropagation();
          break;

        case 'ArrowDown':
          if (multiSelect && event.shiftKey && !disableSelection) {
            selectNextNode(event, focusedNodeId);
          }

          focusNextNode(event, focusedNodeId);
          flag = true;
          break;

        case 'ArrowUp':
          if (multiSelect && event.shiftKey && !disableSelection) {
            selectPreviousNode(event, focusedNodeId);
          }

          focusPreviousNode(event, focusedNodeId);
          flag = true;
          break;

        case 'ArrowRight':
          if (isRtl) {
            flag = handlePreviousArrow(event);
          } else {
            flag = handleNextArrow(event);
          }

          break;

        case 'ArrowLeft':
          if (isRtl) {
            flag = handleNextArrow(event);
          } else {
            flag = handlePreviousArrow(event);
          }

          break;

        case 'Home':
          if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
            rangeSelectToFirst(event, focusedNodeId);
          }

          focusFirstNode(event);
          flag = true;
          break;

        case 'End':
          if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
            rangeSelectToLast(event, focusedNodeId);
          }

          focusLastNode(event);
          flag = true;
          break;

        default:
          if (key === '*') {
            expandAllSiblings(event, focusedNodeId);
            flag = true;
          } else if (multiSelect && ctrlPressed && key.toLowerCase() === 'a' && !disableSelection) {
            selectAllNodes(event);
            flag = true;
          } else if (!ctrlPressed && !event.shiftKey && isPrintableCharacter(key)) {
            focusByFirstCharacter(event, focusedNodeId, key);
            flag = true;
          }

      }

      if (flag) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    const handleFocus = event => {
      // if the event bubbled (which is React specific) we don't want to steal focus
      if (event.target === event.currentTarget) {
        const firstSelected = Array.isArray(selected) ? selected[0] : selected;
        focus(event, firstSelected || getNavigableChildrenIds(null)[0]);
      }

      if (onFocus) {
        onFocus(event);
      }
    };

    const handleBlur = event => {
      setFocusedNodeId(null);

      if (onBlur) {
        onBlur(event);
      }
    };

    const activeDescendant = nodeMap.current[focusedNodeId] ? nodeMap.current[focusedNodeId].idAttribute : null;
    return /*#__PURE__*/jsxRuntime_1(TreeViewContext.Provider, {
      value: {
        icons: {
          defaultCollapseIcon,
          defaultExpandIcon,
          defaultParentIcon,
          defaultEndIcon
        },
        focus,
        toggleExpansion,
        isExpanded,
        isExpandable,
        isFocused,
        isSelected,
        isDisabled,
        selectNode: disableSelection ? noopSelection : selectNode,
        selectRange: disableSelection ? noopSelection : selectRange,
        multiSelect,
        disabledItemsFocusable,
        mapFirstChar,
        unMapFirstChar,
        registerNode,
        unregisterNode,
        treeId
      },
      children: /*#__PURE__*/jsxRuntime_1(DescendantProvider, {
        children: /*#__PURE__*/jsxRuntime_1(TreeViewRoot, _extends({
          role: "tree",
          id: treeId,
          "aria-activedescendant": activeDescendant,
          "aria-multiselectable": multiSelect,
          className: clsx(classes.root, className),
          ref: handleRef,
          tabIndex: 0,
          onKeyDown: handleKeyDown,
          onFocus: handleFocus,
          onBlur: handleBlur,
          ownerState: ownerState
        }, other, {
          children: children
        }))
      })
    });
  });

  var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  unwrapExports(interopRequireDefault);

  var createSvgIcon$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return utils.createSvgIcon;
    }
  });
  });

  unwrapExports(createSvgIcon$1);

  var ExpandMore = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _createSvgIcon = interopRequireDefault(createSvgIcon$1);



  var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), 'ExpandMore');

  exports.default = _default;
  });

  var ExpandMoreIcon = unwrapExports(ExpandMore);

  var ChevronRight = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _createSvgIcon = interopRequireDefault(createSvgIcon$1);



  var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
    d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  }), 'ChevronRight');

  exports.default = _default;
  });

  var ChevronRightIcon = unwrapExports(ChevronRight);

  function getCollapseUtilityClass(slot) {
    return generateUtilityClass('MuiCollapse', slot);
  }
  const collapseClasses = generateUtilityClasses('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);

  const _excluded$E = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"];

  const useUtilityClasses$o = ownerState => {
    const {
      orientation,
      classes
    } = ownerState;
    const slots = {
      root: ['root', `${orientation}`],
      entered: ['entered'],
      hidden: ['hidden'],
      wrapper: ['wrapper', `${orientation}`],
      wrapperInner: ['wrapperInner', `${orientation}`]
    };
    return composeClasses(slots, getCollapseUtilityClass, classes);
  };

  const CollapseRoot = styled$1('div', {
    name: 'MuiCollapse',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.orientation], ownerState.state === 'entered' && styles.entered, ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && styles.hidden];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    height: 0,
    overflow: 'hidden',
    transition: theme.transitions.create('height')
  }, ownerState.orientation === 'horizontal' && {
    height: 'auto',
    width: 0,
    transition: theme.transitions.create('width')
  }, ownerState.state === 'entered' && _extends({
    height: 'auto',
    overflow: 'visible'
  }, ownerState.orientation === 'horizontal' && {
    width: 'auto'
  }), ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && {
    visibility: 'hidden'
  }));
  const CollapseWrapper = styled$1('div', {
    name: 'MuiCollapse',
    slot: 'Wrapper',
    overridesResolver: (props, styles) => styles.wrapper
  })(({
    ownerState
  }) => _extends({
    // Hack to get children with a negative margin to not falsify the height computation.
    display: 'flex',
    width: '100%'
  }, ownerState.orientation === 'horizontal' && {
    width: 'auto',
    height: '100%'
  }));
  const CollapseWrapperInner = styled$1('div', {
    name: 'MuiCollapse',
    slot: 'WrapperInner',
    overridesResolver: (props, styles) => styles.wrapperInner
  })(({
    ownerState
  }) => _extends({
    width: '100%'
  }, ownerState.orientation === 'horizontal' && {
    width: 'auto',
    height: '100%'
  }));
  /**
   * The Collapse transition is used by the
   * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  const Collapse = /*#__PURE__*/React.forwardRef(function Collapse(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiCollapse'
    });

    const {
      addEndListener,
      children,
      className,
      collapsedSize: collapsedSizeProp = '0px',
      component,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      orientation = 'vertical',
      style,
      timeout = duration.standard,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$E);

    const ownerState = _extends({}, props, {
      orientation,
      collapsedSize: collapsedSizeProp
    });

    const classes = useUtilityClasses$o(ownerState);
    const theme = useTheme$3();
    const timer = React.useRef();
    const wrapperRef = React.useRef(null);
    const autoTransitionDuration = React.useRef();
    const collapsedSize = typeof collapsedSizeProp === 'number' ? `${collapsedSizeProp}px` : collapsedSizeProp;
    const isHorizontal = orientation === 'horizontal';
    const size = isHorizontal ? 'width' : 'height';
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
    const nodeRef = React.useRef(null);
    const handleRef = useForkRef(ref, nodeRef);

    const normalizedTransitionCallback = callback => maybeIsAppearing => {
      if (callback) {
        const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };

    const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;

    const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
      if (wrapperRef.current && isHorizontal) {
        // Set absolute position to get the size of collapsed content
        wrapperRef.current.style.position = 'absolute';
      }

      node.style[size] = collapsedSize;

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
      const wrapperSize = getWrapperSize();

      if (wrapperRef.current && isHorizontal) {
        // After the size is read reset the position back to default
        wrapperRef.current.style.position = '';
      }

      const {
        duration: transitionDuration,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'enter'
      });

      if (timeout === 'auto') {
        const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
        node.style.transitionDuration = `${duration2}ms`;
        autoTransitionDuration.current = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
      }

      node.style[size] = `${wrapperSize}px`;
      node.style.transitionTimingFunction = transitionTimingFunction;

      if (onEntering) {
        onEntering(node, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
      node.style[size] = 'auto';

      if (onEntered) {
        onEntered(node, isAppearing);
      }
    });
    const handleExit = normalizedTransitionCallback(node => {
      node.style[size] = `${getWrapperSize()}px`;

      if (onExit) {
        onExit(node);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleExiting = normalizedTransitionCallback(node => {
      const wrapperSize = getWrapperSize();
      const {
        duration: transitionDuration,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'exit'
      });

      if (timeout === 'auto') {
        // TODO: rename getAutoHeightDuration to something more generic (width support)
        // Actually it just calculates animation duration based on size
        const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
        node.style.transitionDuration = `${duration2}ms`;
        autoTransitionDuration.current = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
      }

      node.style[size] = collapsedSize;
      node.style.transitionTimingFunction = transitionTimingFunction;

      if (onExiting) {
        onExiting(node);
      }
    });

    const handleAddEndListener = next => {
      if (timeout === 'auto') {
        timer.current = setTimeout(next, autoTransitionDuration.current || 0);
      }

      if (addEndListener) {
        // Old call signature before `react-transition-group` implemented `nodeRef`
        addEndListener(nodeRef.current, next);
      }
    };

    return /*#__PURE__*/jsxRuntime_1(TransitionComponent, _extends({
      in: inProp,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      nodeRef: nodeRef,
      timeout: timeout === 'auto' ? null : timeout
    }, other, {
      children: (state, childProps) => /*#__PURE__*/jsxRuntime_1(CollapseRoot, _extends({
        as: component,
        className: clsx(classes.root, className, {
          'entered': classes.entered,
          'exited': !inProp && collapsedSize === '0px' && classes.hidden
        }[state]),
        style: _extends({
          [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize
        }, style),
        ownerState: _extends({}, ownerState, {
          state
        }),
        ref: handleRef
      }, childProps, {
        children: /*#__PURE__*/jsxRuntime_1(CollapseWrapper, {
          ownerState: _extends({}, ownerState, {
            state
          }),
          className: classes.wrapper,
          ref: wrapperRef,
          children: /*#__PURE__*/jsxRuntime_1(CollapseWrapperInner, {
            ownerState: _extends({}, ownerState, {
              state
            }),
            className: classes.wrapperInner,
            children: children
          })
        })
      }))
    }));
  });
  Collapse.muiSupportAuto = true;

  function useTreeItem(nodeId) {
    const {
      focus,
      isExpanded,
      isExpandable,
      isFocused,
      isDisabled,
      isSelected,
      multiSelect,
      selectNode,
      selectRange,
      toggleExpansion
    } = React.useContext(TreeViewContext);
    const expandable = isExpandable ? isExpandable(nodeId) : false;
    const expanded = isExpanded ? isExpanded(nodeId) : false;
    const focused = isFocused ? isFocused(nodeId) : false;
    const disabled = isDisabled ? isDisabled(nodeId) : false;
    const selected = isSelected ? isSelected(nodeId) : false;

    const handleExpansion = event => {
      if (!disabled) {
        if (!focused) {
          focus(event, nodeId);
        }

        const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey); // If already expanded and trying to toggle selection don't close

        if (expandable && !(multiple && isExpanded(nodeId))) {
          toggleExpansion(event, nodeId);
        }
      }
    };

    const handleSelection = event => {
      if (!disabled) {
        if (!focused) {
          focus(event, nodeId);
        }

        const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey);

        if (multiple) {
          if (event.shiftKey) {
            selectRange(event, {
              end: nodeId
            });
          } else {
            selectNode(event, nodeId, true);
          }
        } else {
          selectNode(event, nodeId);
        }
      }
    };

    const preventSelection = event => {
      if (event.shiftKey || event.ctrlKey || event.metaKey || disabled) {
        // Prevent text selection
        event.preventDefault();
      }
    };

    return {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection
    };
  }

  const _excluded$F = ["classes", "className", "displayIcon", "expansionIcon", "icon", "label", "nodeId", "onClick", "onMouseDown"];
  const TreeItemContent = /*#__PURE__*/React.forwardRef(function TreeItemContent(props, ref) {
    const {
      classes,
      className,
      displayIcon,
      expansionIcon,
      icon: iconProp,
      label,
      nodeId,
      onClick,
      onMouseDown
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$F);

    const {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection
    } = useTreeItem(nodeId);
    const icon = iconProp || expansionIcon || displayIcon;

    const handleMouseDown = event => {
      preventSelection(event);

      if (onMouseDown) {
        onMouseDown(event);
      }
    };

    const handleClick = event => {
      handleExpansion(event);
      handleSelection(event);

      if (onClick) {
        onClick(event);
      }
    };

    return (
      /*#__PURE__*/

      /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions -- Key event is handled by the TreeView */
      jsxRuntime_2("div", _extends({
        className: clsx(className, classes.root, expanded && classes.expanded, selected && classes.selected, focused && classes.focused, disabled && classes.disabled),
        onClick: handleClick,
        onMouseDown: handleMouseDown,
        ref: ref
      }, other, {
        children: [/*#__PURE__*/jsxRuntime_1("div", {
          className: classes.iconContainer,
          children: icon
        }), /*#__PURE__*/jsxRuntime_1("div", {
          className: classes.label,
          children: label
        })]
      }))
    );
  });

  function getTreeItemUtilityClass(slot) {
    return generateUtilityClass('MuiTreeItem', slot);
  }
  const treeItemClasses = generateUtilityClasses('MuiTreeItem', ['root', 'group', 'content', 'expanded', 'selected', 'focused', 'disabled', 'iconContainer', 'label']);

  const _excluded$G = ["children", "className", "collapseIcon", "ContentComponent", "ContentProps", "endIcon", "expandIcon", "disabled", "icon", "id", "label", "nodeId", "onClick", "onMouseDown", "TransitionComponent", "TransitionProps"];

  const useUtilityClasses$p = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root'],
      content: ['content'],
      expanded: ['expanded'],
      selected: ['selected'],
      focused: ['focused'],
      disabled: ['disabled'],
      iconContainer: ['iconContainer'],
      label: ['label'],
      group: ['group']
    };
    return composeClasses(slots, getTreeItemUtilityClass, classes);
  };

  const TreeItemRoot = styled$1('li', {
    name: 'MuiTreeItem',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    outline: 0
  });
  const StyledTreeItemContent = styled$1(TreeItemContent, {
    name: 'MuiTreeItem',
    slot: 'Content',
    overridesResolver: (props, styles) => {
      return [styles.content, styles.iconContainer && {
        [`& .${treeItemClasses.iconContainer}`]: styles.iconContainer
      }, styles.label && {
        [`& .${treeItemClasses.label}`]: styles.label
      }];
    }
  })(({
    theme
  }) => ({
    padding: '0 8px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    [`&.${treeItemClasses.disabled}`]: {
      opacity: theme.palette.action.disabledOpacity,
      backgroundColor: 'transparent'
    },
    [`&.${treeItemClasses.focused}`]: {
      backgroundColor: theme.palette.action.focus
    },
    [`&.${treeItemClasses.selected}`]: {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
      },
      [`&.${treeItemClasses.focused}`]: {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    },
    [`& .${treeItemClasses.iconContainer}`]: {
      marginRight: 4,
      width: 15,
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'center',
      '& svg': {
        fontSize: 18
      }
    },
    [`& .${treeItemClasses.label}`]: _extends({
      width: '100%',
      // fixes overflow - see https://github.com/mui-org/material-ui/issues/27372
      minWidth: 0,
      paddingLeft: 4,
      position: 'relative'
    }, theme.typography.body1)
  }));
  const TreeItemGroup = styled$1(Collapse, {
    name: 'MuiTreeItem',
    slot: 'Group',
    overridesResolver: (props, styles) => styles.group
  })({
    margin: 0,
    padding: 0,
    marginLeft: 17
  });
  const TreeItem = /*#__PURE__*/React.forwardRef(function TreeItem(inProps, ref) {
    const props = useThemeProps$1({
      props: inProps,
      name: 'MuiTreeItem'
    });

    const {
      children,
      className,
      collapseIcon,
      ContentComponent = TreeItemContent,
      ContentProps,
      endIcon,
      expandIcon,
      disabled: disabledProp,
      icon,
      id: idProp,
      label,
      nodeId,
      onClick,
      onMouseDown,
      TransitionComponent = Collapse,
      TransitionProps
    } = props,
          other = _objectWithoutPropertiesLoose(props, _excluded$G);

    const {
      icons: contextIcons = {},
      focus,
      isExpanded,
      isFocused,
      isSelected,
      isDisabled,
      multiSelect,
      disabledItemsFocusable,
      mapFirstChar,
      unMapFirstChar,
      registerNode,
      unregisterNode,
      treeId
    } = React.useContext(TreeViewContext);
    let id = null;

    if (idProp != null) {
      id = idProp;
    } else if (treeId && nodeId) {
      id = `${treeId}-${nodeId}`;
    }

    const [treeitemElement, setTreeitemElement] = React.useState(null);
    const contentRef = React.useRef(null);
    const handleRef = useForkRef(setTreeitemElement, ref);
    const descendant = React.useMemo(() => ({
      element: treeitemElement,
      id: nodeId
    }), [nodeId, treeitemElement]);
    const {
      index,
      parentId
    } = useDescendant(descendant);
    const expandable = Boolean(Array.isArray(children) ? children.length : children);
    const expanded = isExpanded ? isExpanded(nodeId) : false;
    const focused = isFocused ? isFocused(nodeId) : false;
    const selected = isSelected ? isSelected(nodeId) : false;
    const disabled = isDisabled ? isDisabled(nodeId) : false;

    const ownerState = _extends({}, props, {
      expanded,
      focused,
      selected,
      disabled
    });

    const classes = useUtilityClasses$p(ownerState);
    let displayIcon;
    let expansionIcon;

    if (expandable) {
      if (!expanded) {
        expansionIcon = expandIcon || contextIcons.defaultExpandIcon;
      } else {
        expansionIcon = collapseIcon || contextIcons.defaultCollapseIcon;
      }
    }

    if (expandable) {
      displayIcon = contextIcons.defaultParentIcon;
    } else {
      displayIcon = endIcon || contextIcons.defaultEndIcon;
    }

    React.useEffect(() => {
      // On the first render a node's index will be -1. We want to wait for the real index.
      if (registerNode && unregisterNode && index !== -1) {
        registerNode({
          id: nodeId,
          idAttribute: id,
          index,
          parentId,
          expandable,
          disabled: disabledProp
        });
        return () => {
          unregisterNode(nodeId);
        };
      }

      return undefined;
    }, [registerNode, unregisterNode, parentId, index, nodeId, expandable, disabledProp, id]);
    React.useEffect(() => {
      if (mapFirstChar && unMapFirstChar && label) {
        mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
        return () => {
          unMapFirstChar(nodeId);
        };
      }

      return undefined;
    }, [mapFirstChar, unMapFirstChar, nodeId, label]);
    let ariaSelected;

    if (multiSelect) {
      ariaSelected = selected;
    } else if (selected) {
      /* single-selection trees unset aria-selected on un-selected items.
       *
       * If the tree does not support multiple selection, aria-selected
       * is set to true for the selected node and it is not present on any other node in the tree.
       * Source: https://www.w3.org/TR/wai-aria-practices/#TreeView
       */
      ariaSelected = true;
    }

    function handleFocus(event) {
      // DOM focus stays on the tree which manages focus with aria-activedescendant
      if (event.target === event.currentTarget) {
        ownerDocument(event.target).getElementById(treeId).focus({
          preventScroll: true
        });
      }

      const unfocusable = !disabledItemsFocusable && disabled;

      if (!focused && event.currentTarget === event.target && !unfocusable) {
        focus(event, nodeId);
      }
    }

    return /*#__PURE__*/jsxRuntime_2(TreeItemRoot, _extends({
      className: clsx(classes.root, className),
      role: "treeitem",
      "aria-expanded": expandable ? expanded : null,
      "aria-selected": ariaSelected,
      "aria-disabled": disabled || null,
      ref: handleRef,
      id: id,
      tabIndex: -1
    }, other, {
      ownerState: ownerState,
      onFocus: handleFocus,
      children: [/*#__PURE__*/jsxRuntime_1(StyledTreeItemContent, _extends({
        as: ContentComponent,
        ref: contentRef,
        classes: {
          root: classes.content,
          expanded: classes.expanded,
          selected: classes.selected,
          focused: classes.focused,
          disabled: classes.disabled,
          iconContainer: classes.iconContainer,
          label: classes.label
        },
        label: label,
        nodeId: nodeId,
        onClick: onClick,
        onMouseDown: onMouseDown,
        icon: icon,
        expansionIcon: expansionIcon,
        displayIcon: displayIcon,
        ownerState: ownerState
      }, ContentProps)), children && /*#__PURE__*/jsxRuntime_1(DescendantProvider, {
        id: nodeId,
        children: /*#__PURE__*/jsxRuntime_1(TreeItemGroup, _extends({
          as: TransitionComponent,
          unmountOnExit: true,
          className: classes.group,
          in: expanded,
          component: "ul",
          role: "group"
        }, TransitionProps, {
          children: children
        }))
      })]
    }));
  });

  var CookieHelper = {
    get: function get(name) {
      var value = '; ' + document.cookie;
      var parts = value.split('; ' + name + '=');
      if (parts.length >= 2) return parts.pop().split(';').shift();
    }
  };

  var API_GET_ITEM_TREE = '/studio/api/1/services/api/1/content/get-items-tree.json';
  var API_GET_ITEM = '/studio/api/1/services/api/1/content/get-item.json';
  var API_CLIPBOARD_COPY = '/studio/api/1/services/api/1/clipboard/copy-item.json';
  var API_CLIPBOARD_PASTE = '/studio/api/1/services/api/1/clipboard/paste-item.json';
  var StudioAPI = {
    origin: function origin() {
      return window.location.origin;
    },
    xsrfToken: function xsrfToken() {
      return CookieHelper.get('XSRF-TOKEN');
    },
    siteId: function siteId() {
      var url = new URL(window.location.href);

      if (url.searchParams.has('site')) {
        return url.searchParams.get('site');
      }

      return CookieHelper.get('crafterSite');
    },
    getSelectedItems: function getSelectedItems() {
      return CStudioAuthoring.SelectedContent.getSelectedContent().map(function (item) {
        return {
          name: item.internalName,
          path: item.uri
        };
      });
    },
    getChildrenPaths: function getChildrenPaths(path) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(StudioAPI.origin()).concat(API_GET_ITEM_TREE, "?site=").concat(StudioAPI.siteId(), "&path=").concat(path, "&depth=1"), {
                  method: 'GET',
                  headers: {
                    'content-type': 'application/json; charset=UTF-8'
                  },
                  credentials: 'include'
                });

              case 2:
                res = _context.sent;

                if (!(res.status === 200)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", data.item.children.filter(function (child) {
                  return child.path !== path;
                }).map(function (child) {
                  return child.path;
                }));

              case 8:
                return _context.abrupt("return", []);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getItem: function getItem(path) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("".concat(StudioAPI.origin()).concat(API_GET_ITEM, "?site=").concat(StudioAPI.siteId(), "&path=").concat(path, "&populateDependencies=false"), {
                  method: 'GET',
                  headers: {
                    'content-type': 'application/json; charset=UTF-8'
                  },
                  credentials: 'include'
                });

              case 2:
                res = _context2.sent;

                if (!(res.status === 200)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 6;
                return res.json();

              case 6:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 8:
                return _context2.abrupt("return", null);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    clipboardCopy: function clipboardCopy(path) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var item, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                item = {
                  item: [{
                    uri: path
                  }]
                };
                _context3.next = 3;
                return fetch("".concat(StudioAPI.origin()).concat(API_CLIPBOARD_COPY, "?site=").concat(StudioAPI.siteId()), {
                  method: 'POST',
                  headers: {
                    'x-xsrf-token': StudioAPI.xsrfToken(),
                    'content-type': 'application/json; charset=UTF-8'
                  },
                  credentials: 'include',
                  body: JSON.stringify(item)
                });

              case 3:
                res = _context3.sent;

                if (!(res.status === 200)) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", true);

              case 6:
                return _context3.abrupt("return", false);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    clipboardPaste: function clipboardPaste(parentPath) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch("".concat(StudioAPI.origin()).concat(API_CLIPBOARD_PASTE, "?site=").concat(StudioAPI.siteId(), "&parentPath=").concat(parentPath), {
                  method: 'GET',
                  headers: {
                    'content-type': 'application/json; charset=UTF-8'
                  },
                  credentials: 'include'
                });

              case 2:
                res = _context4.sent;

                if (!(res.status === 200)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", true);

              case 5:
                return _context4.abrupt("return", false);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  };

  var copyDestSub = new rxjs.Subject('');

  var DEFAULT_ROOT_PATH = '/site';
  var DEFAULT_WEBSITE_PATH = '/site/website';
  var DEFAULT_COMPONENT_PATH = '/site/components';
  function FileSystemNavigator(_ref) {
    var selectedItems = _ref.selectedItems;

    var _React$useState = React__default.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        nodes = _React$useState2[0],
        setNodes = _React$useState2[1];

    var _React$useState3 = React__default.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        expanded = _React$useState4[0],
        setExpanded = _React$useState4[1];

    var _React$useState5 = React__default.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        selected = _React$useState6[0],
        setSelected = _React$useState6[1];

    var getRootDir = function getRootDir() {
      // If more than 1 items (or no item selected) selected, use /site as ROOT
      if (selectedItems.length !== 1) {
        return DEFAULT_ROOT_PATH;
      }

      var path = selectedItems[0].path;

      if (path.startsWith(DEFAULT_WEBSITE_PATH)) {
        return DEFAULT_WEBSITE_PATH;
      }

      if (path.startsWith(DEFAULT_COMPONENT_PATH)) {
        return DEFAULT_COMPONENT_PATH;
      }

      return DEFAULT_ROOT_PATH;
    };

    var handleToggle = function handleToggle(event, nodeIds) {
      setExpanded(nodeIds);
    };
    /**
     * Find a node by its path from nodes object
     * @param {*} path
     * @param {*} data
     * @returns found node
     */


    var findNode = function findNode(path, data) {
      console.log(path, data); // Get list of paths from root to the node
      // Ex, ['site', 'website', 'article'] => ['/site', '/site/website', '/site/website/article']

      var subPaths = path.split('/').filter(function (elm) {
        return !!elm;
      });
      var fullPaths = [];
      var nextPath = '';
      var rootPath = getRootDir();

      for (var i = 0; i < subPaths.length; i += 1) {
        if (i === 0) {
          nextPath = "/".concat(subPaths[i]);
        } else {
          nextPath = "".concat(nextPath, "/").concat(subPaths[i]);
        }

        console.log(nextPath);

        if (nextPath.indexOf(rootPath) >= 0) {
          fullPaths.push(nextPath);
        }
      }

      console.log(fullPaths);
      var foundNode = {}; // go throush each path from root to the last child node

      var _loop = function _loop() {
        var currPath = fullPaths.shift();

        if (data.id === currPath) {
          foundNode = data;
          return "continue";
        }

        console.log(foundNode);
        foundNode = foundNode.children.find(function (item) {
          return item.id === currPath;
        });
      };

      while (fullPaths.length > 0) {
        var _ret = _loop();

        if (_ret === "continue") continue;
      }

      return foundNode;
    };

    var handleSelect = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event, nodeId) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSelected(nodeId);
                copyDestSub.next(nodeId);
                fetchChildNodes(nodeId);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleSelect(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    /**
     * Fetch child nodes if needed
     * @param {*} nodeId
     * @returns
     */


    var fetchChildNodes = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(nodeId) {
        var foundNode, items, childNodes;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // First, find a node by its path
                // If found and it has children, return since no need to fetch data anymore
                foundNode = findNode(nodeId, nodes);

                if (!(foundNode.children.length > 0)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                _context2.next = 5;
                return StudioAPI.getChildrenPaths(nodeId);

              case 5:
                items = _context2.sent;
                childNodes = items.map(function (item) {
                  return {
                    id: item,
                    name: item.split('/').pop(),
                    children: []
                  };
                });
                foundNode.children = childNodes; // Re-render tree view

                setNodes(Object.assign({}, nodes));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchChildNodes(_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    React__default.useEffect(function () {
      _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var items, childNodes;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return StudioAPI.getChildrenPaths(getRootDir());

              case 2:
                items = _context3.sent;
                console.log(items);
                childNodes = items.map(function (item) {
                  return {
                    id: item,
                    name: item.split('/').pop(),
                    children: []
                  };
                });
                setNodes({
                  id: getRootDir(),
                  name: getRootDir().split('/').pop(),
                  children: childNodes
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }, []);
    /**
     * Recursively render tree view
     * @param {*} nodes
     * @returns
     */

    var renderTree = function renderTree(nodes) {
      return /*#__PURE__*/jsxRuntime_1(TreeItem, {
        nodeId: nodes.id,
        label: nodes.name,
        children: Array.isArray(nodes.children) && nodes.children.length > 0 ? nodes.children.map(function (node) {
          return renderTree(node);
        }) : /*#__PURE__*/jsxRuntime_1(TreeItem, {})
      }, nodes.id);
    };

    return /*#__PURE__*/jsxRuntime_1(jsxRuntime_3, {
      children: /*#__PURE__*/jsxRuntime_2(Grid, {
        container: true,
        sx: {
          padding: '15px'
        },
        children: [/*#__PURE__*/jsxRuntime_1(TableContainer, {
          component: Paper,
          sx: {
            marginBottom: '15px'
          },
          children: /*#__PURE__*/jsxRuntime_2(Table, {
            sx: {
              minWidth: 650
            },
            "aria-label": "destination path table",
            children: [/*#__PURE__*/jsxRuntime_1(TableHead, {
              children: /*#__PURE__*/jsxRuntime_1(TableRow, {
                children: /*#__PURE__*/jsxRuntime_1(StyledTableCell, {
                  children: "Destination Path"
                })
              })
            }), /*#__PURE__*/jsxRuntime_1(TableBody, {
              children: /*#__PURE__*/jsxRuntime_1(StyledTableRow, {
                children: /*#__PURE__*/jsxRuntime_1(StyledTableCell, {
                  component: "th",
                  scope: "row",
                  children: selected
                })
              }, selected)
            })]
          })
        }), /*#__PURE__*/jsxRuntime_1(TreeView, {
          defaultCollapseIcon: /*#__PURE__*/jsxRuntime_1(ExpandMoreIcon, {}),
          defaultExpandIcon: /*#__PURE__*/jsxRuntime_1(ChevronRightIcon, {}),
          defaultExpanded: [getRootDir()],
          expanded: expanded,
          selected: selected,
          onNodeToggle: handleToggle,
          onNodeSelect: handleSelect,
          sx: {
            height: 360,
            flexGrow: 1,
            maxWidth: '100%',
            overflowY: 'auto'
          },
          children: renderTree(nodes)
        })]
      })
    });
  }

  var Alert$1 = /*#__PURE__*/React__default.forwardRef(function Alert$1(props, ref) {
    return /*#__PURE__*/jsxRuntime_1(Alert, _objectSpread2({
      elevation: 6,
      ref: ref,
      variant: "filled"
    }, props));
  });

  var NoSelectedItems = function NoSelectedItems() {
    return /*#__PURE__*/jsxRuntime_1(Stack, {
      sx: {
        width: '100%'
      },
      spacing: 2,
      children: /*#__PURE__*/jsxRuntime_2(Alert$1, {
        variant: "outlined",
        severity: "error",
        children: [/*#__PURE__*/jsxRuntime_1(AlertTitle, {
          children: "Error"
        }), "Please select at least one item to copy."]
      })
    });
  };

  var StyledPopupButton = styled$1('a')(function (_ref) {
    var theme = _ref.theme;
    return {
      cursor: 'pointer',
      paddingLeft: 0,
      paddingRight: '10px',
      paddingTop: '16.5px',
      paddingBottom: '16.5px',
      color: '#777',
      lineHeight: '17px',
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      '&:hover': {
        color: '#333',
        textDecoration: 'none'
      }
    };
  });
  var StyledActionButton = styled$1(Button)(function (_ref2) {
    var theme = _ref2.theme;
    return {
      minWidth: '120px'
    };
  });
  function App() {
    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

    var _useState3 = React.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        openNotification = _useState4[0],
        setOpenNotification = _useState4[1];

    var _useState5 = React.useState([]),
        _useState6 = _slicedToArray(_useState5, 2),
        selectedItems = _useState6[0],
        setSelectedItems = _useState6[1];

    var _useState7 = React.useState(''),
        _useState8 = _slicedToArray(_useState7, 2),
        desPath = _useState8[0],
        setDesPath = _useState8[1];

    var handleContentMenuChanged = function handleContentMenuChanged() {
      var items = StudioAPI.getSelectedItems();
      setSelectedItems(items);
    };

    var handleClose = function handleClose() {
      return setOpen(false);
    };

    var handleCopy = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var paths, i, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                paths = StudioAPI.getSelectedItems().map(function (item) {
                  return item.path;
                });
                i = 0;

              case 3:
                if (!(i < paths.length)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 6;
                return StudioAPI.clipboardCopy(paths[i]);

              case 6:
                if (!_context.sent) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return StudioAPI.clipboardPaste(desPath);

              case 9:
                res = _context.sent;

                if (res) {
                  setOpen(false);
                  setOpenNotification(true);
                }

              case 11:
                i += 1;
                _context.next = 3;
                break;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function handleCopy(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    React__default.useEffect(function () {
      CStudioAuthoring.Events.contentSelected.subscribe(handleContentMenuChanged, {
        subscriber: 'translate-plugin'
      });
      CStudioAuthoring.Events.contentUnSelected.subscribe(handleContentMenuChanged, {
        subscriber: 'translate-plugin'
      });
      return function () {
        CStudioAuthoring.Events.contentSelected.unsubscribe(handleContentMenuChanged);
        CStudioAuthoring.Events.contentUnSelected.unsubscribe(handleContentMenuChanged);
      };
    }, []);
    React__default.useEffect(function () {
      copyDestSub.subscribe(function (path) {
        setDesPath(path);
      });
      return function () {
        copyDestSub.unsubscribe();
      };
    }, []);
    return /*#__PURE__*/jsxRuntime_2("div", {
      children: [selectedItems.length > 0 && /*#__PURE__*/jsxRuntime_2("li", {
        className: "acn-link",
        onClick: function onClick() {
          return setOpen(true);
        },
        children: [/*#__PURE__*/jsxRuntime_1(StyledPopupButton, {
          className: "ItemTranslate cursor",
          children: "Translate"
        }), /*#__PURE__*/jsxRuntime_1("img", {
          id: "itemtranslate-loading",
          src: "/studio/static-assets/themes/cstudioTheme/images/treeview-loading.gif"
        })]
      }), /*#__PURE__*/jsxRuntime_2(Dialog, {
        open: open,
        fullWidth: true,
        maxWidth: "lg",
        onClose: handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        children: [/*#__PURE__*/jsxRuntime_1(DialogTitle, {
          id: "alert-dialog-title",
          children: "Translate"
        }), /*#__PURE__*/jsxRuntime_1(DialogContent, {
          children: selectedItems.length === 0 ? /*#__PURE__*/jsxRuntime_1(NoSelectedItems, {}) : /*#__PURE__*/jsxRuntime_2(jsxRuntime_3, {
            children: [/*#__PURE__*/jsxRuntime_1(SelectedItem, {
              selectedItems: selectedItems
            }), /*#__PURE__*/jsxRuntime_1(FileSystemNavigator, {
              selectedItems: selectedItems
            })]
          })
        }), /*#__PURE__*/jsxRuntime_2(DialogActions, {
          children: [/*#__PURE__*/jsxRuntime_1(StyledActionButton, {
            variant: "contained",
            onClick: handleCopy,
            color: "primary",
            children: "Translate"
          }), /*#__PURE__*/jsxRuntime_1(StyledActionButton, {
            variant: "outlined",
            onClick: handleClose,
            color: "primary",
            children: "Cancel"
          })]
        })]
      }), /*#__PURE__*/jsxRuntime_1(Stack, {
        spacing: 2,
        sx: {
          width: '100%'
        },
        children: /*#__PURE__*/jsxRuntime_1(Snackbar, {
          open: openNotification,
          autoHideDuration: 6000,
          onClose: function onClose() {
            return setOpenNotification(false);
          },
          children: /*#__PURE__*/jsxRuntime_1(Alert$1, {
            onClose: function onClose() {
              return setOpenNotification(false);
            },
            severity: "success",
            sx: {
              width: '100%'
            },
            children: "Selected files are translated to destination folder."
          })
        })
      })]
    });
  }

  /*
   * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
   *
   * This program is free software: you can redistribute it and/or modify
   * it under the terms of the GNU General Public License version 3 as published by
   * the Free Software Foundation.
   *
   * This program is distributed in the hope that it will be useful,
   * but WITHOUT ANY WARRANTY; without even the implied warranty of
   * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   * GNU General Public License for more details.
   *
   * You should have received a copy of the GNU General Public License
   * along with this program.  If not, see <http://www.gnu.org/licenses/>.
   */
  CStudioAuthoring.Module.moduleLoaded('translate', {
    initialize: function initialize(config) {
      if (config && config.params) {
        switch (config.params.widget) {
          case 'popup':
            var elm = document.createElement('ul');
            elm.setAttribute('id', 'translate-popup');
            elm.setAttribute('class', 'nav navbar-nav');
            elm.setAttribute('style', 'margin-left: "12px";');
            var activeActNode = document.getElementById('activeContentActions');
            activeActNode.parentNode.insertBefore(elm, activeActNode.nextElementSibling);
            ReactDOM.render( /*#__PURE__*/React.createElement(App), elm);
            break;

          default:
            console.error('No widget supplied on the config. Skipping initialize request.');
        }
      } else {
        console.error('No config supplied to the sidebar plugin. Skipping initialize request.');
      }
    }
  });

}(window.CrafterCMSNext.React, window.CrafterCMSNext.ReactDOM, window.CrafterCMSNext.rxjs));