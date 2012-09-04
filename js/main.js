(function () {
    $('#nav-registration').click(function (e) {
        e.preventDefault();

        var el = $(this).parent().find('p');

        el.removeClass('hidden');

        setTimeout(function () {
            el.addClass('hidden');
        }, 8000);
    });
}());