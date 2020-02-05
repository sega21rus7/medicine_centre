$(function () {
    var $signUpBtn = $('.sign-up');

    $signUpBtn.click(function () {
        alert('Привет');

        $.ajax({
            url: '/user_profile/sign_up',
            type: 'get',
            dataType: 'json',
            beforeSend: function () {
                $('.modal-sign-up').modal('show');
            },
            success: function (data) {
                $('.modal-sign-up .modal-content').html(data.html_form);
            }
        })
    })
});