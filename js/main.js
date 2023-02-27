$(function () {
  "use strict";
  // Calculate Body Padding Top Depend on Navbar Height

  $("body").css("paddingTop", $(".navbar").innerHeight());

  // Smooth Scrolling To The Element

  $(".navbar li a").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });

  // Add Active Class on Navbar Link And Remove From Siblings

  $(".navbar li a").click(function () {
    $(".navbar a").removeClass("active");
    $(this).addClass("active");
  });

  $(window).scroll(function () {
    // Sync Navbar Links With Sections
    $(".block").each(function () {
      if ($(window).scrollTop() > $(this).offset().top) {
        let blockID = $(this).attr("id");
        $(".navbar a").removeClass("active");
        $(".navbar a[data-scroll=" + blockID + "]").addClass("active");
      }
    });
    // Scroll To Top

    if ($(window).scrollTop() >= 800) {
      $(".scroll-button").slideDown(400);
    } else {
      $(".scroll-button").slideUp(400);
    }
  });

  // Click on Scroll To Top To Get Up
  $(".scroll-button").click(function (e) {
    e.preventDefault();
    $("body, HTML").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // Popup
  $(".show-popup").click(function () {
    $($(this).data("popup")).fadeIn();
  });
  $(".popup").click(function (e) {
    $(this).fadeOut();
  });
  $(".popup .inner").click(function (e) {
    e.stopPropagation();
  });
  $(".popup .close").click(function (e) {
    e.preventDefault();
    $(this).parentsUntil(".popup").parent().fadeOut();
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".popup").fadeOut();
    }
  });
  // Buttons With Effect

  $(".buttons-effects button").prepend("<span></span>");

  $(".from-left, .border-from-left").hover(
    function () {
      $(this).find("span").eq("0").animate(
        {
          width: "100%",
        },
        250
      );
    },
    function () {
      $(this).find("span").eq("0").animate(
        {
          width: "0",
        },
        250
      );
    }
  );
  $(".from-top, .border-from-top").hover(
    function () {
      $(this).find("span").eq("0").animate(
        {
          height: "100%",
        },
        250
      );
    },
    function () {
      $(this).find("span").eq("0").animate(
        {
          height: "0",
        },
        250
      );
    }
  );
  $(".border-from-top").hover(
    function () {
      $(this).find(".border-bottom").animate(
        {
          height: "100%",
        },
        250
      );
    },
    function () {
      $(this).find(".border-bottom").animate(
        {
          height: "0",
        },
        250
      );
    }
  );
  // Bounce Button Effects
  function bounceElement(selector, times, distance, speed) {
    for (let i = 0; i < times; i++) {
      $(selector)
        .animate(
          {
            top: "-=" + distance,
          },
          speed
        )
        .animate(
          {
            top: "+=" + distance,
          },
          speed
        );
    }
  }
  $(".bounce-one").on("click", function () {
    bounceElement($(this), 3, 20, 300);
  });
  $(".bounce-two").on("click", function () {
    bounceElement($(this), 5, 30, 400);
  });
  $(".bounce-three").on("click", function () {
    bounceElement($(this), 10, 25, 200);
  });

  // Animate Progress Bar
  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress"),
      },
      1000,
      function () {
        $(this).text($(this).attr("data-progress"));
      }
    );
  });
  // Fixed Menu
  $(".fixed-menu .gear-check").on("click", function () {
    $(this).parent(".fixed-menu").toggleClass("visible");
    if ($(this).parent(".fixed-menu").hasClass("visible")) {
      $(this)
        .parent(".fixed-menu")
        .animate(
          {
            left: "+=" + $(this).css("left"),
          },
          400
        );
    } else {
      $(this)
        .parent(".fixed-menu")
        .animate(
          {
            left: "-=" + $(this).css("left"),
          },
          400
        );
    }
  });
  // Change Colors
  $(".change-colors li").click(function () {
    $("body").attr("data-default-color", $(this).attr("data-color"));
    $("h2, a").addClass("skin-color");
    $("button, .gear-check, .scroll-button").addClass("skin-background");
  });
  // Thumbnails Gallery
  let numOfThumbnails = $(".thumbnails").children().length;
  let marginOfThumbnails = ".5";
  let totalMarginBTThumbnail = (numOfThumbnails - 1) * marginOfThumbnails;
  let thumbnailsWidth = (100 - totalMarginBTThumbnail) / numOfThumbnails;
  $(".thumbnails img").css({
    width: thumbnailsWidth + "%",
    "margin-right": marginOfThumbnails + "%",
  });
  console.log(thumbnailsWidth);
  $(".thumbnails img").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    $(".main-img img").hide().attr("src", $(this).attr("src")).fadeIn(100);
    console.log($(this).hasClass("selected"));
  });
  $(".main-img .fa-chevron-right").on("click", function () {
    if ($(".thumbnails .selected").is(":last-child")) {
      $(".thumbnails img").eq(0).click();
    } else {
      $(".thumbnails .selected").next().click();
    }
  });
  $(".main-img .fa-chevron-left").on("click", function () {
    if ($(".thumbnails .selected").is(":first-child")) {
      $(".thumbnails img:last").click();
    } else {
      $(".thumbnails .selected").prev().click();
    }
  });
  // Toggle Products Description
  $(".products .product i, .items .item i").on("click", function () {
    $(this).toggleClass("fa-plus fa-minus").next("p").slideToggle();
  });
  // Switch List And Grid View
  $(".view-options i").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".items")
      .removeClass("list-view grid-view")
      .addClass($(this).data("class"));
    console.log($(this).data("class"));
  });
  // Error Message
  $(".error-message").each(function () {
    $(this).animate(
      {
        right: 0,
      },
      800,
      function () {
        $(this).delay(2500).fadeOut(800);
      }
    );
  });
  // Hide and Show Placeholder
  let placeAttr = "";
  $("[placeholder]")
    .focus(function () {
      placeAttr = $(this).attr("placeholder");
      $(this).attr("placeholder", "");
    })
    .blur(function () {
      $(this).attr("placeholder", placeAttr);
    });
  // Show Message When Field is Empty
  $("[required]").blur(function () {
    if ($(this).val() === "") {
      $(this).next("span").fadeIn().delay(2500).fadeOut();
    }
  });
  // Add Asterisk to All Required Field
  $("<span class='asterisk'>*</span>").insertBefore(":input[required]");
  $(".asterisk").parent("div").css("position", "relative");
  $(".asterisk").each(function () {
    $(".asterisk").css({
      position: "absolute",
      top: "20px",
      left: $(this).parent("div").find(":input").innerWidth() - 20,
      fontWeight: "bold",
      color: "red",
    });
  });
  // Customize The Input File
  $("input[type='file']").wrap("<div class='custom-file'></div>");
  $(".custom-file").prepend("<span>Upload Your Files</span>");
  $(".custom-file").append("<i class='fa fa-upload fa-lg skin-color'></i>");
  $("input[type='file']").change(function () {
    $(this).prev("span").text($(this).val());
  });
  // Detect Unicode of Keyboard Keys
  $(".detect-unicode").on("keyup", function (e) {
    let keyboardKeys = e.keyCode || e.which;
    $(".unicode").text(keyboardKeys);
  });
  // Change Input Direction Depend on Direction
  $(".auto-direction").on("keyup", function () {
    if ($(this).val().charCodeAt(0) > 200) {
      $(this).css("direction", "rtl");

      // $("[placeholder]").css(
      //   "direction",
      //   $(".auto-direction").css("direction")
      // );
    } else {
      $(this).css("direction", "ltr");
      // $("[placeholder]").css(
      //   "direction",
      //   $(".auto-direction").css("direction")
      // );
    }
  });
  // Convert Input value to Tags
  $(".add-tag").on("keyup", function (e) {
    let keyboardKeys = e.keyCode || e.which;
    if (keyboardKeys === 188) {
      // IF Pressed Comma
      let inputValue = $(this).val().slice(0, -1);
      $(".tags").append(
        "<span class='tag-span'><i class='fa fa-times'></i>" +
          inputValue +
          "</span>"
      );
      $(this).val("");
    }
  });
  // Remove Tag on Click
  $(".tags").on("click", ".tag-span i", function () {
    $(this).parent(".tag-span").fadeOut(300);
  });
  // Trim Paragraph Text Characters

  function trimText(selector, maxLength) {
    $(selector).each(function () {
      if ($(this).text().length > maxLength) {
        var trimmedText = $(this).text().substr(0, maxLength);
        console.log(trimmedText.length);
        $(this).text(trimmedText + " ...");
      }
    });
  }
  trimText(".trimmed-texts .p-one", 100);
  trimText(".trimmed-texts .p-two", 200);
  trimText(".trimmed-texts .p-three", 300);
  // Adjust Elements Height To be The Same
  let maxHeight = 0;
  $(".same-height div").each(function () {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $(".same-height div").height(maxHeight);
  // Suffle Cards
  let zIndexValue = 0;
  $(".cards .card").on("click", function () {
    $(this)
      .animate(
        {
          left: "35%",
          marginTop: "35",
        },
        300,
        function () {
          zIndexValue--;
          $(this).css("z-index", zIndexValue--);
        }
      )
      .animate(
        {
          left: "50%",
          marginTop: 0,
        },
        300
      );
  });
  // Creat Blink Warning
  blinkWarning();
  function blinkWarning() {
    $(".blink-warning").fadeOut(1000, function () {
      $(this).fadeIn(1000);
      blinkWarning();
    });
  }
  // To Do List
  let newTask = $(".task-input");
  $(".add-task").on("submit", function (e) {
    e.preventDefault();
    if ($(newTask).val() != "") {
      $("<li>" + newTask.val() + "</li>").appendTo(".tasks");
      newTask.val("");
    }
  });
  $(".tasks").on("click", "li", function () {
    $(this)
      .css({
        textDecoration: "line-through",
        textDecorationColor: "red",
      })
      .delay(200)
      .fadeOut(400, function () {
        $(this).remove();
      });
  });
  // Start Typewriter Effect
  let theText = $(".typer").data("text"),
    textLength = theText.length,
    n = 0,
    textTyper = setInterval(function () {
      $(".typer").each(function () {
        $(this).html($(this).html() + theText[n]);
      });
      n += 1;
      if (n === textLength) {
        clearInterval(textTyper);
      }
    }, 100);
  console.log(theText);
  console.log(theText[0]);
  console.log(textLength);
  // Calculate  Table Cell Price Values
  let theSummary = 0;
  $(".price").each(function () {
    theSummary += parseInt($(this).text());
  });
  $(".the-total").text(theSummary);
  // Auto Change Content
  (function autoChange() {
    $(".ticker-list .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(1000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoChange();
          });
      } else {
        $(this)
          .delay(1000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".ticker-list li").eq(0).addClass("active").fadeIn();
            autoChange();
          });
      }
    });
  })();
  // Dynamic tabs
  $(".tabs-list li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".content-list > div").hide();
    $($(this).data("content")).fadeIn();
  });
  // Switch Tabs View
  $(".switch-tabs").on("click", function () {
    $(this).next(".dynamic-tabs").toggleClass("left-tabs ");
  });
  // Email Suggest Box
  let emailProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"],
    finalString = "";
  $(".email-suggest").on("keyup", function () {
    finalString = "";
    if (!$(this).next().is(".suggest-box")) {
      $("<ul class='suggest-box'></ul>").insertAfter($(this));
    }
    for (let i = 0; i < emailProviders.length; i++) {
      if (!$(this).val().includes("@")) {
        finalString +=
          "<li>" + $(this).val() + "@" + emailProviders[i] + "</li>";
        $(".suggest-box").html(finalString);
        console.log(finalString);
      } else {
        finalString +=
          "<li>" +
          $(this).val().substr("@", $(this).val.length) +
          "@" +
          emailProviders[i] +
          "</li>";
      }
    }
    if ($(".email-suggest").val() == "") {
      $(".suggest-box").fadeOut();
    } else {
      $(".suggest-box").fadeIn();
    }
    $("body").on("click", ".suggest-box li", function () {
      $(".email-suggest").val($(this).text());
      $(this).parent().fadeOut(250);
    });
  });
  // Start jQuery Pracitcal Examples Coures 2
  $.extend($.expr[":"], {
    moreThan100Px: function (ele) {
      if ($(ele).height() > 100) {
        return $(this);
      }
    },
  });
  $(".new-examples li:moreThan100Px").css("color", "turquoise");
  // Extend Element with Red Color
  $.extend($.expr[":"], {
    redElement: function (ele) {
      if ($(ele).css("color") === "rgb(255, 0, 0)") {
        return $(ele);
      }
    },
  });
  $(".new-examples li:redElement").css("font-size", "40px");
  // Create Own Plugin ( Centering The Element Dynamically )
  $.fn.centeringMe = function () {
    $(this).css({
      position: "absolute",
      left: ($(window).width() - $(this).width()) / 2,
      top: ($(window).height() - $(this).height()) / 2,
    });
  };
  $(".our-test").centeringMe();
  $(".our-test2").centeringMe();
  // Calculate Textarea Remaining Characters
  let maxText = $("#our-field").attr("maxlength");
  let txMessage = $(".textarea-message");
  console.log(maxText);
  txMessage.html("<span>" + maxText + "</span> Characters Remaining");
  $(".textarea-message > span").css({
    color: "green",
    fontWeight: "bold",
  });
  $("#our-field").keyup(function () {
    let textareaLength = $(this).val().length,
      remChars = maxText - textareaLength;
    txMessage.html("<span>" + remChars + "</span> Characters Remaining");
    $(".textarea-message > span").css({
      color: "green",
      fontWeight: "bold",
    });
    console.log(textareaLength);
    if (textareaLength === 100) {
      $(".textarea-message > span").css("color", "red");
    } else {
      $(".textarea-message > span").css("color", "green");
    }
  });
  // Convert Password Field to Text Field
  $("button.pass").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).text("Show Password").prev("input").attr("type", "text");
    } else {
      $(this).text("Hide Password").prev("input").attr("type", "password");
    }
  });
  // Creating Countdown
  let ourCountdown = setInterval(function () {
    let counter = parseInt($(".countdown").html());
    if (counter !== 0) {
      $(".countdown").html(counter - 1);
    } else {
      clearInterval(ourCountdown);
      $(".countdown").html("Done");
    }
  }, 1000);
  // Creating Infinity Animation Function
  $(
    (function infinityImg() {
      $(".offer img").animate(
        {
          left: "-365px",
        },
        600,
        function () {
          $(this).animate(
            {
              left: "-335px",
            },
            600,
            function () {
              infinityImg();
            }
          );
        }
      );
    })()
  );
  // Generate Options Inside Select Box
  for (let i = 1998; i <= 2022; i++) {
    console.log(i);
    $("<option>", { value: i, text: i }).appendTo($("#years"));
  }
  // Start Horizontal Accordion Slider
  $(".accordion-info").first().show().animate({ width: "40%" });
  $(".accordion-item").click(function () {
    $(this)
      .next()
      .show()
      .animate({ width: "40%" })
      .siblings(".accordion-info")
      .animate({ width: "0" }, function () {
        $(this).hide();
      });
  });
  // Click on the Button To Switch Style
  $("article button").click(function () {
    $("link[href*='theme']").attr("href", "css/" + $(this).val() + ".css");
  });
  // Create jQuery Accordion
  $("section.jquery-accordion div:first").css("display", "block");
  $("section.jquery-accordion h3").click(function () {
    $(this).next().slideToggle(500);
    $("section.jquery-accordion div").not($(this).next()).slideUp(500);
  });
});
