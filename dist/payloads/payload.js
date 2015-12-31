(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function() {
  if(window.jQuery) {
    if(window.jQuery('<div></div').draggable !== undefined) {
      return { jq: true, jqUi: true };
    } else {
      return { jq: true, jqUi: false };
    }
  } else {
    return { jq: false, jqUi: false };
  }
})(this);

},{}],2:[function(require,module,exports){
var jqInfo = require('./detect/jqInfo.js');
var loadJs = require('./fetch/jsByXhr.js');

var jqUri = 'https://code.jquery.com/jquery-1.11.3.min.js';
var jqUiUri = 'https://code.jquery.com/ui/1.11.4/jquery-ui.min.js';

//loadCss('https://raw.githubusercontent.com/JGillam/ntlm-mimic/master/ie11/login-ie11.css');
var getJqUi = function() {
  loadJs(jqUiUri, showNtlm);
};

var showNtlm = function() {
      $("#authWin").draggable();
      $("#buttons button").click(function(){
      $("#authWin").hide();});

      var vars = [], key;
      var query = window.location.search.substring(1);
      var parms = query.split("&");
        for(var i = 0; i < parms.length; i++)
        {
          key = parms[i].split('=');
          vars.push(key[0]);
          vars[key[0]] = key[1];
        }
      if (key['name']) {
          alert('Name is: ' + key['name']);
      }
  };

  if(jqInfo.jq) {
    if(jqInfo.jqUi) {
      showNtlm();
    } else {
      getJqUi();
    }
  } else {
    loadJs(jqUri, getJqUi);
  }

},{"./detect/jqInfo.js":1,"./fetch/jsByXhr.js":3}],3:[function(require,module,exports){
module.exports = function (scriptUrl, cb)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", scriptUrl);
    xmlhttp.onreadystatechange = function()
    {
        if ((xmlhttp.status == 200) && (xmlhttp.readyState == 4))
        {
            eval(xmlhttp.responseText);
            if(typeof cb === 'function') {
              cb();
            }
        }
    };
    xmlhttp.send();
}

},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lsbGFtbVxcbnRsbS1taW1pY1xcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvZ2lsbGFtbS9udGxtLW1pbWljL3NyYy9kZXRlY3QvanFJbmZvLmpzIiwiQzovVXNlcnMvZ2lsbGFtbS9udGxtLW1pbWljL3NyYy9mYWtlX2M5MmQwOGM5LmpzIiwiQzovVXNlcnMvZ2lsbGFtbS9udGxtLW1pbWljL3NyYy9mZXRjaC9qc0J5WGhyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xyXG4gIGlmKHdpbmRvdy5qUXVlcnkpIHtcclxuICAgIGlmKHdpbmRvdy5qUXVlcnkoJzxkaXY+PC9kaXYnKS5kcmFnZ2FibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4geyBqcTogdHJ1ZSwganFVaTogdHJ1ZSB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHsganE6IHRydWUsIGpxVWk6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7IGpxOiBmYWxzZSwganFVaTogZmFsc2UgfTtcclxuICB9XHJcbn0pKHRoaXMpO1xyXG4iLCJ2YXIganFJbmZvID0gcmVxdWlyZSgnLi9kZXRlY3QvanFJbmZvLmpzJyk7XHJcbnZhciBsb2FkSnMgPSByZXF1aXJlKCcuL2ZldGNoL2pzQnlYaHIuanMnKTtcclxuXHJcbnZhciBqcVVyaSA9ICdodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMS4xMS4zLm1pbi5qcyc7XHJcbnZhciBqcVVpVXJpID0gJ2h0dHBzOi8vY29kZS5qcXVlcnkuY29tL3VpLzEuMTEuNC9qcXVlcnktdWkubWluLmpzJztcclxuXHJcbi8vbG9hZENzcygnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0pHaWxsYW0vbnRsbS1taW1pYy9tYXN0ZXIvaWUxMS9sb2dpbi1pZTExLmNzcycpO1xyXG52YXIgZ2V0SnFVaSA9IGZ1bmN0aW9uKCkge1xyXG4gIGxvYWRKcyhqcVVpVXJpLCBzaG93TnRsbSk7XHJcbn07XHJcblxyXG52YXIgc2hvd050bG0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgJChcIiNhdXRoV2luXCIpLmRyYWdnYWJsZSgpO1xyXG4gICAgICAkKFwiI2J1dHRvbnMgYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCIjYXV0aFdpblwiKS5oaWRlKCk7fSk7XHJcblxyXG4gICAgICB2YXIgdmFycyA9IFtdLCBrZXk7XHJcbiAgICAgIHZhciBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xyXG4gICAgICB2YXIgcGFybXMgPSBxdWVyeS5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBhcm1zLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleSA9IHBhcm1zW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICB2YXJzLnB1c2goa2V5WzBdKTtcclxuICAgICAgICAgIHZhcnNba2V5WzBdXSA9IGtleVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIGlmIChrZXlbJ25hbWUnXSkge1xyXG4gICAgICAgICAgYWxlcnQoJ05hbWUgaXM6ICcgKyBrZXlbJ25hbWUnXSk7XHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuICBpZihqcUluZm8uanEpIHtcclxuICAgIGlmKGpxSW5mby5qcVVpKSB7XHJcbiAgICAgIHNob3dOdGxtKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZXRKcVVpKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvYWRKcyhqcVVyaSwgZ2V0SnFVaSk7XHJcbiAgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY3JpcHRVcmwsIGNiKVxyXG57XHJcbiAgICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeG1saHR0cC5vcGVuKFwiR0VUXCIsIHNjcmlwdFVybCk7XHJcbiAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZiAoKHhtbGh0dHAuc3RhdHVzID09IDIwMCkgJiYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PSA0KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGV2YWwoeG1saHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhtbGh0dHAuc2VuZCgpO1xyXG59XHJcbiJdfQ==
