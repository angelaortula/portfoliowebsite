$(document).ready(function () {
    // Toggle navbar on menu icon click
    $("#menu-icon").click(function () {
        $(".navbar").toggleClass("active");
    });

    // Close navbar when a link is clicked
    $(".navbar a").click(function () {
        $(".navbar").removeClass("active");
    });

    // Scrollspy and sticky header
    $(window).on("scroll", function () {
        let top = $(window).scrollTop();

        $("section").each(function () {
            let offset = $(this).offset().top - 150;
            let height = $(this).outerHeight();
            let id = $(this).attr("id");

            if (top >= offset && top < offset + height) {
                $(".navbar a").removeClass("active");
                $('.navbar a[href*="' + id + '"]').addClass("active");
            }
        });

        // Sticky header
        $(".header").toggleClass("sticky", top > 100);
    });

    // Contact form functionality
    $(".contact form").submit(function (e) {
        e.preventDefault(); // prevent default form submission

        // Get form values
        let name = $("input[placeholder='Full Name']").val().trim();
        let email = $("input[placeholder='Email']").val().trim();
        let phone = $("input[placeholder='Phone Number']").val().trim();
        let message = $("textarea").val().trim();

        // Simple validation
        if (name && email && phone && message) {
            alert("Thank you, " + name + "! Your message has been sent.");
            $(this)[0].reset(); // reset form
        } else {
            alert("Please fill out all fields.");
        }
    });
});
