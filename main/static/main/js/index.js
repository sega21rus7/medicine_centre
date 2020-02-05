$(function () {
    var $signUpBtn = $('a.sign-up');

    $signUpBtn.on("click", function (event) {
        event.preventDefault();
        $.ajax({
            url: '/user_profile/sign_up',
            type: 'get',
            dataType: 'json',
            beforeSend: function () {
                $('.modal-sign-up').modal('show');
            },
            success: function (data) {
                $('.modal-sign-up .modal-content').html(data.html);
            }
        })
    })
});