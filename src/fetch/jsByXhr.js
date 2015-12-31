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
