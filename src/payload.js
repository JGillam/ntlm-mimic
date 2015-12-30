function include(scriptUrl, cb)
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

function loadCss(url) {
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", url)
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadCss('https://raw.githubusercontent.com/JGillam/ntlm-mimic/master/ie11/login-ie11.css');
include('https://code.jquery.com/jquery-1.11.3.min.js',
	function() {
  	include('https://code.jquery.com/ui/1.11.4/jquery-ui.min.js',
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
