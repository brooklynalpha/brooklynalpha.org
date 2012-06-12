(function () {
    var highDpi = window.getComputedStyle(document.body, ':after')
        .getPropertyValue('content')
        // Doing this for IE9. When it gets the string, it
        // includes " and ". Weird. Dumb.
        .replace(/\"/g, '') || null;

    if (highDpi !== null) {
        var imgsToReplace = document.getElementsByClassName('has-high-dpi');

        for (var i = 0; i < imgsToReplace.length; i += 1) {
            var img = imgsToReplace[i],
                src = img.getAttribute('src'),
                ext = src.substring(src.lastIndexOf('.')),
                highDpiSrc = src.replace(ext, '@2x' + ext);

            img.setAttribute('src', highDpiSrc);
        }
    }
}());