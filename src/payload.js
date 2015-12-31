var loadJs = require('./lib/jsByXhr.js');

var jqUri = 'https://code.jquery.com/jquery-1.11.3.min.js';
var jqUiUri = 'https://code.jquery.com/ui/1.11.4/jquery-ui.min.js';

//loadCss('https://raw.githubusercontent.com/JGillam/ntlm-mimic/master/ie11/login-ie11.css');
loadJs(jqUri,
	function() {
  	loadJs(jqUiUri,
    	function(){
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
      }
    )
  });
