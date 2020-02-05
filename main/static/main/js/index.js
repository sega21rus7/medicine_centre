$(function () {
    var $signUpBtn = $('a.sign-up');
    var $signInBtn = $('a.sign-in');

    $signUpBtn.on("click", function (event) {
        event.preventDefault();
        $.ajax({
            url: '/user_profile/sign_up',
            type: 'get',
            dataType: 'json',
            beforeSend: function () {

            },
            success: function (data) {
                $('.modal-sign-up').modal('show');
                $('.modal-sign-up .modal-content').html(data.html_form);
            }
        })
    });

    $signInBtn.on("click", function (event) {
        event.preventDefault();
        $.ajax({
            url: '/user_profile/sign_in',
            type: 'get',
            dataType: 'json',
            beforeSend: function () {

            },
            success: function (data) {
                $('.modal-sign-in').modal('show');
                $('.modal-sign-in .modal-content').html(data.html_form);
            }
        })
    });
});