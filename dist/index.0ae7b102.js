// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Eu8z":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9a09d8230ae7b102";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3KhMX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _1Jpg = require("../imgs/1.jpg");
var _1JpgDefault = parcelHelpers.interopDefault(_1Jpg);
var _2Jpg = require("../imgs/2.jpg");
var _2JpgDefault = parcelHelpers.interopDefault(_2Jpg);
var _3Jpg = require("../imgs/3.jpg");
var _3JpgDefault = parcelHelpers.interopDefault(_3Jpg);
var _4Jpg = require("../imgs/4.jpg");
var _4JpgDefault = parcelHelpers.interopDefault(_4Jpg);
var _5Jpg = require("../imgs/5.jpg");
var _5JpgDefault = parcelHelpers.interopDefault(_5Jpg);
var _06Png = require("../imgs/06.png");
var _06PngDefault = parcelHelpers.interopDefault(_06Png);
var _07Jpg = require("../imgs/07.jpg");
var _07JpgDefault = parcelHelpers.interopDefault(_07Jpg);
var _08Jpg = require("../imgs/08.jpg");
var _08JpgDefault = parcelHelpers.interopDefault(_08Jpg);
var _09Jpg = require("../imgs/09.jpg");
var _09JpgDefault = parcelHelpers.interopDefault(_09Jpg);
var _10Jpg = require("../imgs/10.jpg");
var _10JpgDefault = parcelHelpers.interopDefault(_10Jpg);
//Variables
const mainColor = localStorage.getItem("colorOption");
const bulletLocalItem = localStorage.getItem("bulletsOption");
const backgroundLocalStorage = localStorage.getItem("backgroundOption");
const optionboxDep = document.querySelector(".option-box-dep");
const settingBox = document.querySelector(".setting-box");
const gearing = document.querySelector(".icon-gearing");
const colorContainer = document.querySelector(".colors-list");
const colorsList = document.querySelectorAll(".colors-list li");
const changeBackgroundPoll = document.querySelector(".poll-background");
let backgroundOption = true;
let intervalSetting;
const landingPage = document.querySelector(".landing-page");
const imgsToChooseContainer = document.querySelector(".option-box .imgs-container");
const landingImages = [
    `${(0, _1JpgDefault.default)}`,
    `${(0, _2JpgDefault.default)}`,
    `${(0, _3JpgDefault.default)}`,
    `${(0, _4JpgDefault.default)}`,
    `${(0, _5JpgDefault.default)}`, 
];
const ourSkills = document.querySelector(".skills");
const allSkills = document.querySelectorAll(".skills .skill-box .skill-progress span");
const galleryAllImgs = document.querySelectorAll(".gallery .images-box img");
const allBullets = document.querySelector(".nav-bullets");
const allBulletsLanding = document.querySelector(".landing-page .header-area ul");
const showBullets = document.querySelector(".option-box .testing-option");
const showBulletsAll = document.querySelectorAll(".option-box .testing-option span");
// to chamge background manually
const imagesMan = function() {
    optionboxDep.classList.add("active");
    imgsToChooseContainer.querySelectorAll("span").forEach((span, i)=>span.setAttribute("data-man", `${landingImages[i]}`));
    imgsToChooseContainer.addEventListener("click", function(e) {
        if (!e.target.closest("span") || changeBackgroundPoll.querySelector(".yes").classList.contains("active")) return;
        landingPage.style.backgroundImage = `url("${e.target.dataset.man}")`;
    });
};
// Start Setting Box
const localStorageAndActiveForColor = function() {
    // get the color from the local storage and maintain active class
    if (!mainColor) return;
    document.documentElement.style.setProperty("--mainColorTwo", mainColor);
    colorContainer.querySelector(".active").classList.remove("active");
    colorsList.forEach((el)=>{
        if (el.dataset.color === mainColor) el.classList.add("active");
    });
};
localStorageAndActiveForColor();
const localStorageAndActiveForBackground = function() {
    // get the background from the local storage and maintain active class
    if (!backgroundLocalStorage) return;
    changeBackgroundPoll.querySelectorAll("span").forEach((span)=>span.classList.remove("active"));
    if (backgroundLocalStorage === "true") {
        optionboxDep.classList.remove("active");
        backgroundOption = true;
        changeBackgroundPoll.querySelector(".yes").classList.add("active");
    } else {
        optionboxDep.classList.add("active");
        backgroundOption = false;
        changeBackgroundPoll.querySelector(".no").classList.add("active");
        imagesMan();
    }
};
localStorageAndActiveForBackground();
const localBullet = function() {
    if (!bulletLocalItem) return;
    showBulletsAll.forEach((a)=>a.classList.remove("active"));
    if (bulletLocalItem === "show") {
        allBullets.style.display = "grid";
        showBullets.querySelector(".yes").classList.add("active");
    } else {
        allBullets.style.display = "none";
        showBullets.querySelector(".no").classList.add("active");
        showBullets;
    }
};
localBullet();
const gearingSpin = function() {
    gearing.addEventListener("click", function(e) {
        this.querySelector("i").classList.toggle("fa-spin");
        this.classList.toggle("active-icon");
        settingBox.classList.toggle("view--setting-box");
    });
};
gearingSpin();
//Change Color
const mainColorChanging = function() {
    colorsList.forEach((li)=>{
        li.addEventListener("click", function(e) {
            const getTheColor = e.target.dataset.color;
            document.documentElement.style.setProperty("--mainColorTwo", getTheColor);
            // set the color to the local storage
            localStorage.setItem("colorOption", getTheColor);
            //Remove active class from all
            this.parentElement.querySelectorAll(".active").forEach((li)=>li.classList.remove("active"));
            //add active class
            this.classList.add("active");
        });
    });
};
mainColorChanging();
//bullets option
//Change Random background option
const backgroundchanging = function() {
    changeBackgroundPoll.addEventListener("click", function(e) {
        if (!e.target.closest("span")) return;
        changeBackgroundPoll.querySelectorAll("span").forEach((span)=>span.classList.remove("active"));
        e.target.classList.add("active");
        if (e.target.dataset.background === "yes") {
            optionboxDep.classList.remove("active");
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("backgroundOption", true);
        } else {
            clearInterval(intervalSetting);
            imagesMan();
            backgroundOption = false;
            localStorage.setItem("backgroundOption", false);
        }
    });
};
backgroundchanging();
showBullets.addEventListener("click", function(e) {
    if (!e.target.dataset.display) return;
    showBulletsAll.forEach((span)=>span.classList.remove("active"));
    if (e.target.dataset.display === "show") {
        allBullets.style.display = "grid";
        e.target.classList.add("active");
        localStorage.setItem("bulletsOption", "show");
    } else {
        allBullets.style.display = "none";
        e.target.classList.add("active");
        localStorage.setItem("bulletsOption", "hide");
    }
});
// End Setting Box
//////////////////////////////
// Start Landing Page
const randomizeImgs = function() {
    if (!backgroundOption) return;
    intervalSetting = setInterval(()=>{
        const randomNumber = Math.floor(Math.random() * landingImages.length);
        landingPage.style.backgroundImage = `url("${landingImages[randomNumber]}")`;
    }, 10000);
};
randomizeImgs();
// End Landing Page
// Start Skills Selector
const progressWithinScrolling = function() {
    window.addEventListener("scroll", function() {
        //Offset top
        let skillsOffsetTop = ourSkills.offsetTop;
        //offset Hieght
        let skillsOffsetHeight = ourSkills.offsetHeight;
        //Window height
        let windowHeight = window.innerHeight;
        //Window Scroll top
        let windowScrollTop = window.pageYOffset;
        if (windowScrollTop > skillsOffsetTop + skillsOffsetHeight - windowHeight) allSkills.forEach((span)=>{
            span.style.width = span.dataset.progress;
        });
    });
};
progressWithinScrolling();
// End Skills Selector
// Start Gallery
galleryAllImgs.forEach((img)=>{
    img.addEventListener("click", function(e) {
        const overlay = document.createElement("div");
        overlay.classList.add("popup-overlay");
        document.body.append(overlay);
        const popupBox = document.createElement("div");
        popupBox.classList.add("popup-box");
        const popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupBox.append(popupImage);
        document.body.append(popupBox);
        // Image title
        if (img.alt) {
            const imgHeading = document.createElement("h3");
            imgHeading.classList.add("popup-img");
            imgHeading.textContent = img.alt;
            popupBox.prepend(imgHeading);
        }
        // Create Close button
        const closeButton = document.createElement("span");
        closeButton.textContent = "X";
        closeButton.classList.add("popup-close");
        popupBox.prepend(closeButton);
        closeButton.addEventListener("click", function() {
            overlay.remove();
            popupBox.remove();
        });
        //Close using overlay
        overlay.addEventListener("click", function() {
            overlay.remove();
            popupBox.remove();
        });
    });
});
// End Gallery
// Start bullets
const allBulletsLandingLinking = document.querySelectorAll(".landing-page .header-area ul a");
scrollWithButtons = function(btnContainer, specialEle) {
    btnContainer.addEventListener("click", function(e) {
        e.preventDefault();
        if (!e.target.classList.contains(specialEle)) return;
        document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
            behavior: "smooth"
        });
        if (!e.target.classList.contains("scrolling")) return;
        // Handle active
        allBulletsLandingLinking.forEach((a)=>{
            a.classList.remove("active-link");
        });
        e.target.classList.add("active-link");
    });
};
scrollWithButtons(allBullets, "bullet");
scrollWithButtons(allBulletsLanding, "scrolling");
//End bullets
//Reset button
document.querySelector(".setting-box .reset-option").addEventListener("click", function(e) {
    localStorage.clear();
    window.location.reload(); // to restart the page
});
// Toggle menu
const togglebtn = document.querySelector(".landing-page .button-toggle");
const linksContainer = document.querySelector(".landing-page .header-area ul");
// open and close the toggle menu
togglebtn.addEventListener("click", function() {
    linksContainer.classList.toggle("links-click");
    this.classList.toggle("menu-active");
});
// click outside will close the toggle menu
document.addEventListener("click", function(e) {
    if (e.target.closest(".button-toggle") || e.target.closest(".links-click") || !linksContainer.classList.contains("links-click")) return;
    console.log("all");
    linksContainer.classList.remove("links-click");
    togglebtn.classList.remove("menu-active");
});

},{"../imgs/1.jpg":"dZZ8o","../imgs/2.jpg":"lEoQw","../imgs/3.jpg":"f6BrE","../imgs/4.jpg":"5lzOD","../imgs/5.jpg":"31fev","../imgs/06.png":"2L68t","../imgs/07.jpg":"axYsD","../imgs/08.jpg":"1Ly1Q","../imgs/09.jpg":"k3Fa8","../imgs/10.jpg":"enW25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZZ8o":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "1.2762f3f8.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lEoQw":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "2.d451eadf.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"f6BrE":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "3.a0813c39.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5lzOD":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "4.77b6efb8.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"31fev":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "5.3def381b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2L68t":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "06.58228876.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"axYsD":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "07.58c4bfee.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1Ly1Q":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "08.738bc489.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"k3Fa8":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "09.67fe46c6.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"enW25":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ddWtb") + "10.d9894d0c.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["1Eu8z","3KhMX"], "3KhMX", "parcelRequire495e")

//# sourceMappingURL=index.0ae7b102.js.map
