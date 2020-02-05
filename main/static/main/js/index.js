$(function () {
    var $signUpBtn = $('a.sign-up-link'),
        $signInBtn = $('a.sign-in-link'),
        $modalSignInForm = $('.sign-in-modal-form'),
        $modalSignUpForm = $('.sign-up-modal-form');

    $signUpBtn.on("click", function (event) {
        event.preventDefault();
        $.ajax({
            url: '/user_profile/sign_up',
            type: 'get',
            dataType: 'json',
            beforeSend: function () {

            },
            success: function (data) {
                $('.sign-up-modal-form').modal('show');
                $('.sign-up-modal-form .modal-content').html(data.html_form);
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
                $('.sign-in-modal-form').modal('show');
                $('.sign-in-modal-form .modal-content').html(data.html_form);
            }
        })
    });

    $modalSignInForm.on('submit', '.sign-in-form', function () {
        var form = $(this);
        $.ajax({
            url: form.attr('data-url'),
            data: form.serialize(),
            type: form.attr('method'),
            datatype: 'json',
            success: function (data) {
                if(data.errors){
                    alert('not');
                }
                else {
                    alert('valid');
                }
            }
        });
        return false;
    });

    $modalSignUpForm.on('submit', '.sign-up-form', function () {
        var form = $(this);
        $.ajax({
            url: form.attr('data-url'),
            data: form.serialize(),
            type: form.attr('method'),
            datatype: 'json',
            success: function (data) {
                if(data.errors){
                    alert('not');
                }
                else {
                    alert('valid');
                }
            }
        });
    });
});