// ==UserScript==
// @name         Pricechecker-API
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Скрипт для проверки цен
// @author       XaN-24
// @match        https://traderie.com/*
// @updateURL    https://raw.githubusercontent.com/XaN-24/traderie/refs/heads/main/Pricechecker-API.js
// @downloadURL  https://raw.githubusercontent.com/XaN-24/traderie/refs/heads/main/Pricechecker-API.js
// ==/UserScript==

// Твой код ниже:
(function() {
    'use strict';

    // Функция создания pop-up
    function showCustomPopup(message) {
        const popup = document.createElement('div');
        popup.innerHTML = `
            <div style="position: fixed; top: 20px; right: 20px; background: #333; color: #fff; 
                        padding: 15px; border-radius: 8px; z-index: 9999; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                ${message}
                <button onclick="this.parentElement.remove()" style="margin-left: 10px; cursor: pointer;">X</button>
            </div>
        `;
        document.body.appendChild(popup);
    }

    // Вызываем нашу функцию
    console.log("Pricechecker started");
    showCustomPopup("Hello test!");
})();