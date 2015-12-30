$(document).ready(function(){
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
});