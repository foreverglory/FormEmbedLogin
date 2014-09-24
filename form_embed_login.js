(function ($) {
    Drupal.behaviors.form_embed_login = {
        attach: function (context) {
            $(".embed-login", context).hide().prev().on("click", function () {
                $(this).next(".embed-login").show();
                return false;
            });
        }
    };
})(jQuery);
