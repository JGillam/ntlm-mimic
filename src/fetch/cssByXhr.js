module.exports = function (url, cb) {
        //Known issues with this.
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", url)
        document.getElementsByTagName("head")[0].appendChild(fileref)
        if(typeof cb === 'function') {
          cb();
        }
}
