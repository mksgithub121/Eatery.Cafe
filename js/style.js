$(document).ready(function () {
    // menu hide show
    if ($(window).width() > 768) {
        $(".menu").show();

    } else {
        $(".menu").hide();
    }

    $(".show_menu").click(function () {
        $(".menu").slideDown(1000);
    });
    $(".hide_menu").click(function () {
        $(".menu").slideUp(1000);
    });
    $(".show_menu").click(function () {
        $(".show_menu").hide();
        $(".hide_menu").show();
    })
    $(".hide_menu").click(function () {
        $(".show_menu").show();
        $(".hide_menu").hide();
    });

    $(window).resize(function () {
        if ($(window).width() > 768) {
            $(".show_menu").hide();
            $(".hide_menu").hide();
        }
    })


    //active menu
    $(".menu ul li").on("click", "a", function () {
        $(".menu ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $(".menu ul li .submenu li").on("click", "a", function () {
        $(".menu ul li .submenu a").addClass("active");
    });

    //active to menu hide
    <<
    << << < HEAD
        // if ($(window).width() < 768) {
        //     $(".menu ul li").click(function () {
        //         $(".menu").slideUp(1000)
        //     })
        //     $(".menu ul li .submenu").click(function () {
        //         $(".menu").slideUp(1000)
        //     })
        //     if ($(".menu ul .noSlideUP").click()) {
        //         $(".menu").slideDown();
        //     }
        // }
        ===
        === =
        //     if ($(window).width() < 768) {
        //        $(".menu ul li").click(function () {
        //          $(".menu").slideUp(1000)
        //         })
        //        $(".menu ul li .submenu").click(function () {
        //            $(".menu").slideUp(1000)
        //         })
        //    }
        >>>
        >>> > eafb7cafeeefa54ecbc8b7a92dc9e7e934b9cdca


    //scroll top
    $(".top_btn").click(function () {
        $("html").animate({
            "scrollTop": 0
        }, 1500)
    });
    // scroll btn hide and show

    $(window).scroll(function () {
        var x = $(window).scrollTop();
        if (x < 1500) {
            $(".top_btn").fadeOut();
        } else {
            $(".top_btn").fadeIn();
        }
    })
})

//form validation
function formCheck() {
    if (confirm("Are you want to submit this form?")) {
        function formValidation() {
            var name = document.form.name.value;
            var email = document.form.email.value;
            var subject = document.form.subject.value;
            var message = document.form.message.value;
            var error = [];
            if (name == "" || name.length < 3) {
                error[0] = "The name field must be filled !!";
                document.getElementById("name-error").innerHTML = error[0];
            } else {
                document.getElementById("name-error").innerHTML = "";
            }
            if (email == "" || email.length < 10) {
                error[1] = "The email field must be filled !!";
                document.getElementById("email-error").innerHTML = error[1];
            } else {
                document.getElementById("email-error").innerHTML = "";
            }
            if (subject == "" || subject.length < 10) {
                error[2] = "The subject field must be filled !!";
                document.getElementById("subject-error").innerHTML = error[2];
            } else {
                document.getElementById("subject-error").innerHTML = "";
            }
            if (message == "" || message.length < 3) {
                error[3] = "The message field must be filled !!";
                document.getElementById("message-error").innerHTML = error[3];
            } else {
                document.getElementById("message-error").innerHTML = "";
            }
            if (error.length > 0) {
                return false
            }
        }
        if (formValidation() == false) {
            return false;
        }
    }
}