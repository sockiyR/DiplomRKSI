var admin;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/private/CRUD.js":
/*!****************************!*\
  !*** ./js/private/CRUD.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
document.querySelectorAll('.card-body-CRUD').forEach(function (form) {
  var formData = new FormData();
  var type = form.formBtn.dataset.type;
  var url, id, method;
  var status;
  var code = false;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var arg = $(".card-body-CRUD").serialize().split("&");
    var sendData = {};
    arg.forEach(function (el) {
      var coupleVar = el.split("=");
      sendData[coupleVar[0]] = coupleVar[1];
      formData.append(coupleVar[0], coupleVar[1]);
    });

    if (type == "add") {
      url = form.formBtn.dataset.url;
      method = 'POST';
    }

    if (type == "update") {
      id = form.formBtn.dataset.id;
      url = form.formBtn.dataset.url + id;
      method = 'PATCH';
    }

    formData.append("file", document.querySelector(".upladed").files[0], "image.png");
    form.querySelectorAll("input[data-namber=\"true\"]").forEach(function (input) {
      if (code) {
        return;
      } else {
        if (!/\D/g.test(input.value)) {
          status = true;
        } else {
          alert("В это поле можно вводить только цифры");
          input.value = input.value.replace(/\D/g, '');
          code = true;
          return;
        }
      }
    });

    if (status) {
      fetch(url, {
        method: method,
        body: formData
      }).then(function (res) {
        if (res.status == 200) {
          alert("Операция завершина успешно");
          document.location.reload();
        } else {
          alert("Что-то пошло не так");
          document.location.reload();
        }
      });
    } else {
      alert("Что-то пошло не так");
      document.location.reload();
    }
  });
});

/***/ }),

/***/ "./js/private/adminLogin.js":
/*!**********************************!*\
  !*** ./js/private/adminLogin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
console.log($(".login-form"));
document.querySelectorAll(".login-form").forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var admin = {
      login: form.login.value,
      password: form.password.value
    };
    fetch("/adminPanel/login/autorez", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(admin)
    }).then(function (res) {
      if (res.status == 200) {
        document.location.href = '/adminPanel/bathroom';
      } else {
        alert("Неверные данные для входа");
      }
    });
  });
});

/***/ }),

/***/ "./js/private/buttonsCRUD.js":
/*!***********************************!*\
  !*** ./js/private/buttonsCRUD.js ***!
  \***********************************/
/***/ (() => {

document.querySelectorAll(".button-form").forEach(function (form) {
  var id = form.updateEntity.dataset.idEntity;
  var name = form.updateEntity.dataset.name;
  var urlUpdate = form.updateEntity.dataset.urlEntity;
  var urlDelete = form.deleteEntity.dataset.urlEntity;
  form.updateEntity.addEventListener('click', function () {
    fetch(urlUpdate + id, {
      method: 'GET'
    }).then(function () {
      document.location.href = urlUpdate + id;
    });
  });
  form.deleteEntity.addEventListener('click', function () {
    if (confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 name = ".concat(name, "?"))) {
      fetch(urlDelete + id, {
        method: 'DELETE'
      }).then(function (result) {
        console.log();

        if (result.status == 200) {
          document.location.reload();
        } else {
          alert('Упс! кажется что то сломалось');
        }
      });
    }
  });
});

/***/ }),

/***/ "./js/private/script.js":
/*!******************************!*\
  !*** ./js/private/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CRUD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CRUD */ "./js/private/CRUD.js");
/* harmony import */ var _CRUD__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CRUD__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttonsCRUD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonsCRUD */ "./js/private/buttonsCRUD.js");
/* harmony import */ var _buttonsCRUD__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttonsCRUD__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adminLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminLogin */ "./js/private/adminLogin.js");
/* harmony import */ var _adminLogin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_adminLogin__WEBPACK_IMPORTED_MODULE_2__);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"admin": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./js/private/script.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_name_"] = self["webpackChunk_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	admin = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=admin.js.map