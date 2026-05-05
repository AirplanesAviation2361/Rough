// ==UserScript==
// @name         GeoFS-V3.9_Failure-Simulator
// @namespace    https://codeberg.org/AwesomeOddEven-NightKeys-LunarBlink
// @version      1.0.1
// @description  Advanced emergency training engine delivering realistic, unpredictable system failures.
// @author       AwesomeOddEven-NightKeys-LunarBlink
// @match        https://www.geo-fs.com/geofs.php*
// @grant        none
// @license      MIT
// @icon         https://codeberg.org/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Failure-Simulator/raw/branch/main/logo.png
// @downloadURL https://update.greasyfork.org/scripts/575241/GeoFS-V39_Failure-Simulator.user.js
// @updateURL https://update.greasyfork.org/scripts/575241/GeoFS-V39_Failure-Simulator.meta.js
// ==/UserScript==

(function () {
    'use strict';

    if (!window.location.href.includes("geofs.php")) return;

    const CORE_URL = "https://AwesomeOddEven-NightKeys-LunarBlink.codeberg.page/GeoFS-V3.9_Core-Library/core-library.js";
    const CSS_URL = "https://AwesomeOddEven-NightKeys-LunarBlink.codeberg.page/GeoFS-V3.9_Design-System/design-system.css";
    const CDN_URL = "https://AwesomeOddEven-NightKeys-LunarBlink.codeberg.page/GeoFS-V3.9_Failure-Simulator/failure-simulator.js";

    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url + "?v=" + Date.now();
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    function loadCSS(url) {
        if (document.querySelector(`link[href*="design-system.css"]`)) return;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url + "?v=" + Date.now();
        document.head.appendChild(link);
    }

    async function init() {
        console.log("[GeoFS-V3.9_Failure-Simulator] >> INITIALIZING FAILURE SIMULATOR ECOSYSTEM...");
        try {
            // 1. Load Foundations
            loadCSS(CSS_URL);
            if (!window.SafeInit) {
                await loadScript(CORE_URL);
                console.log("[GeoFS-V3.9_Failure-Simulator] >> FOUNDATION: CORE LIBRARY LOADED.");
            }

            // 2. Load Logic
            await loadScript(CDN_URL);
            console.log("[GeoFS-V3.9_Failure-Simulator] >> FAILURE SIMULATOR LOGIC LOADED.");
        } catch (e) {
            console.error("[GeoFS-V3.9_Failure-Simulator] >> ECOSYSTEM BOOT FAILURE. CHECK CDN STATUS.");
        }
    }

    init();
})();
