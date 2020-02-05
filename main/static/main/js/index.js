$(function () {
    var $signUpBtn = $('a.sign-up');

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
    })
});