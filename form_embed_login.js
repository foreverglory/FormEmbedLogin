(function ($) {
    Drupal.behaviors.form_embed_login = {
        attach: function (context) {
            $(".embed-login", context).each(function () {
                var $form = $(this).hide();
                $(".embed-login-close", $form).on("click", function () {
                    $form.hide();
                });
                $form.prev().on("click", function () {
                    $form.show();
                    return false;
                });
            });
        }
    };
})(jQuery);
