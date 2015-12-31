module.exports = (function (window) {
        //variables for easier minification
        var uagent = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        //Repeated strings
        var _opera = 'Opera';
        var _chrome = 'Chrome';
        var _ie = 'Microsoft Internet Explorer';
        var _safari = 'Safari';
        var _ff = 'Firefox';
        var _ver  = 'Version';
        // Opera
        if ((verOffset = uagent.indexOf(_opera)) != -1) {
            browser = _opera;
            version = uagent.substring(verOffset + 6);
            if ((verOffset = uagent.indexOf(_ver)) != -1) {
                version = uagent.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = uagent.indexOf('OPR')) != -1) {
            browser = _opera;
            version = uagent.substring(verOffset + 4);
        }
        // MSIE
        else if ((verOffset = uagent.indexOf('MSIE')) != -1) {
            browser = _ie;
            version = uagent.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = uagent.indexOf(_chrome)) != -1) {
            browser = _chrome;
            version = uagent.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = uagent.indexOf(_safari)) != -1) {
            browser = _safari;
            version = uagent.substring(verOffset + 7);
            if ((verOffset = uagent.indexOf(_ver)) != -1) {
                version = uagent.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = uagent.indexOf(_ff)) != -1) {
            browser = _ff;
            version = uagent.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (uagent.indexOf('Trident/') != -1) {
            browser = _ie;
            version = uagent.substring(uagent.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = uagent.lastIndexOf(' ') + 1) < (verOffset = uagent.lastIndexOf('/'))) {
            browser = uagent.substring(nameOffset, verOffset);
            version = uagent.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        return {name:browser, majorVer: majorVersion, ver: version};
})(this);
