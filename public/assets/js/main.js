(function ($) {
    ("use strict");
    // Detect mobile device (Do not remove!!!)
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;
    if (isMobile) {
        $("body").addClass("is-mobile");
    }

    //lazy load image
    $('img').each(function () {
        $(this).addClass("lazy");
    });

    $(function () {
        $("img.lazy").lazyload();
    });
    /*-----------------
        Sidebar Sticky
    -----------------*/
    var sidebar = $(".sidebar-left");
    var win = $(window);
    win.on("scroll", function () {
        var scroll = win.scrollTop();
        if (scroll < 760) {
            sidebar.removeClass("stick");
        } else {
            sidebar.addClass("stick");
        }
    });

    /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $(".menu-mobile"),
            endTrigger = $(".mobile-menu-close"),
            container = $(".mobile-header-active"),
            wrapper4 = $("body");
        navbarTrigger.on("click", function (e) {
            navbarTrigger.toggleClass("burger-close");
            e.preventDefault();
            container.toggleClass("sidebar-visible");
            wrapper4.toggleClass("mobile-menu-active");
            window.scrollTo(0, 0);
            //li animation

            var tlMobile = gsap.timeline();
            tlMobile.from(".mobile-menu > li", {
                duration: 0.8,
                y: 120,
                autoAlpha: 0,
                stagger: 0.15,
                ease: Power2.easeOut,
                clearProps:"all"
            });

        });
        endTrigger.on("click", function () {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
        });
        $(".btn-close").on("click", function () {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
            navbarTrigger.removeClass("burger-close");
        });
    }
    mobileHeaderActive();
    /*---------------------
    Mobile menu active
------------------------ */
    var $offCanvasNav = $(".mobile-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><svg class="w-6 h-6 icon-16" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7911 1.0474C15.5023 0.741097 15.0192 0.729691 14.7145 1.01768L7.99961 7.37897L1.28555 1.01772C0.980773 0.728941 0.498472 0.741128 0.208947 1.04743C-0.080577 1.35296 -0.0676398 1.83526 0.237916 2.12478L7.47618 8.98209C7.62246 9.12077 7.81143 9.19087 7.99961 9.19087C8.18779 9.19087 8.37751 9.12077 8.52382 8.98209L15.7621 2.12478C16.0676 1.83523 16.0806 1.35296 15.7911 1.0474Z" fill="#F1F1F1"/></svg></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.parent("li").removeClass("active");
                $this.siblings("ul").slideUp();
            } else {
                $this.parent("li").addClass("active");
                $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                $this.closest("li").siblings("li").find("ul:visible").slideUp();
                $this.siblings("ul").slideDown();
            }
        }
    });

    function addMenuIconEvents() {
        const menuIcons = document.querySelectorAll(".hover-rotate");
        if (menuIcons.length > 0) {
            menuIcons.forEach((menuIcon) => {
                menuIcon.addEventListener("mouseenter", () => {
                    gsap.to(menuIcon, {
                        duration: 1,
                        rotation: "+=360",
                        ease: "linear",
                        repeat: -1
                    });
                });
                menuIcon.addEventListener("mouseleave", () => {
                    gsap.killTweensOf(menuIcon);
                });
            });
        }
    }
    addMenuIconEvents();

    //Dropdown selected item
    $(".dropdown-menu > li a").on("click", function (e) {
        e.preventDefault();
        $(this)
            .parents(".dropdown")
            .find(".btn span")
            .html($(this).html() + "");
        $(this).parents(".dropdown").find(".btn").val($(this).data("value"));
    });

    // Video popup
    if ($(".popup-youtube").length) {
        $(".popup-youtube").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    // text circle
    $(".box-text-circle").lettering();

    // check and apply mode on page load
    $(document).ready(function () {
        if (!localStorage.getItem('mode')) {
            localStorage.setItem('mode', 'dark');
        }
        var mode = localStorage.getItem("mode");
        if (mode === "dark") {
            $(".dark-light-mode").addClass("dark-mode");
            $("body").addClass("dark-mode");
        } else {
            $(".dark-light-mode").removeClass("dark-mode");
            $("body").removeClass("dark-mode");
        }
    });

    // switch light dark mode
    $(".dark-light-mode").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("dark-mode")) {
            $(this).removeClass("dark-mode");
            $("body").removeClass("dark-mode");
            localStorage.setItem("mode", "light");
        } else {
            $(this).addClass("dark-mode");
            $("body").addClass("dark-mode");
            localStorage.setItem("mode", "dark");
        }
    });

    //Fillter
    $(".btn-filter").on("click", function (e) {
        e.preventDefault();
        $(".btn-filter").removeClass("active");
        var class_filter = $(this).data("filter");
        if (class_filter == "*") {
            $(".filter-item").show();
        } else {
            $(".filter-item").hide();
            $(class_filter).show();
        }
        $(this).addClass("active");
        $(".masonry-container").masonry();
    });

    if ($(".section-banner-portfolio-detail-4").length > 0) {
        var leftPos = 0;
        var titleContainer = $(".container");
        if (titleContainer.length > 0) {
            leftPos = titleContainer.offset().left;
        }
        if (leftPos < 10) {
            leftPos = 10;
        }
        $(".section-banner-portfolio-detail-4 .banner-left").css("padding-left", leftPos + "px");
    }

    // Magic cursor (no effect on small screens!)
    if ($("body").not(".is-mobile").hasClass("alith-magic-cursor")) {
        const cursor = document.querySelector(".cursor");
        const follower = document.querySelector(".follower");
        const cursorScale = document.querySelectorAll(".cursor-scale");
        document.addEventListener("pointermove", function (e) {
            positionCircle(e);
        });

        function positionCircle(e) {
            let relX = e.clientX;
            let relY = e.clientY;
            TweenMax.from(cursor, 0.3, { x: relX - 5, y: relY - 38 });
            TweenMax.to(follower, 0.3, { x: relX - 21, y: relY - 55 });
        }

        const cursorPlay = document.querySelectorAll(".cursor-play");
        cursorPlay.forEach((cursorPlay) => {
            cursorPlay.addEventListener("mouseenter", function () {
                document.querySelector(".cursor").classList.add("cursor-play");
            });

            cursorPlay.addEventListener("mouseleave", function () {
                document.querySelector(".cursor").classList.remove("cursor-play");
            });
        });

        const cursorDrag = document.querySelectorAll(".swiper-container");
        cursorDrag.forEach((cursorDrag) => {
            cursorDrag.addEventListener("mouseenter", function () {
                document.querySelector(".cursor").classList.add("cursor-drag");
            });

            cursorDrag.addEventListener("mouseleave", function () {
                document.querySelector(".cursor").classList.remove("cursor-drag");
            });
        });

        const cursorView = document.querySelectorAll(".cursor-view");
        cursorView.forEach((cursorView) => {
            cursorView.addEventListener("mouseenter", function () {
                document.querySelector(".cursor").classList.add("cursor-view");
            });

            cursorView.addEventListener("mouseleave", function () {
                document.querySelector(".cursor").classList.remove("cursor-view");
            });
        });
    } else {
        $( ".cursor" ).remove();
        $( ".follower" ).remove();
    }

    // =======================================================================================
    // Smooth Scrollbar
    // Source: https://github.com/idiotWu/smooth-scrollbar/
    // =======================================================================================
    if (!isMobile) {
        if ($("body").hasClass("alith-smooth-scroll")) {
            // Setup
            const scroller = document.querySelector('.scroll-container');

            const bodyScrollBar = Scrollbar.init(scroller, {
                damping: 0.05,
                renderByPixel: true,
                continuousScrolling: true,
                alwaysShowTracks: true
            });

            ScrollTrigger.scrollerProxy(".scroll-container", {
                scrollTop(value) {
                    if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                    }
                    return bodyScrollBar.scrollTop;
                }
            });
            bodyScrollBar.addListener(ScrollTrigger.update);
            ScrollTrigger.defaults({ scroller: scroller });


            if ($(".header").hasClass("sticky-bar")) {
                $(".scroll-container").before($(".header"));
            }
            $("#scroll-to-top").hide();
            const scrollbar = Scrollbar.init(document.querySelector(".scroll-container"));
            scrollbar.addListener((status) => {
                const header = document.querySelector(".sticky-bar");
                if (status.offset.y > 200) {
                    header.classList.add("stick");
                } else {
                    header.classList.remove("stick");
                }

                if (status.offset.y > 400) {
                    gsap.to("#scroll-to-top", { duration: 0.3, opacity: 1, display: "block" });
                } else {
                    gsap.to("#scroll-to-top", { duration: 0.3, opacity: 0, display: "none" });
                }
            });
        } else {
            var header = $(".sticky-bar");
            var scrollToTop = $("#scroll-to-top");
            var win = $(window);
            win.on("scroll", function () {
                var scroll = win.scrollTop();
                if (scroll < 200) {
                    header.removeClass("stick");
                    scrollToTop.hide();
                } else {
                    header.addClass("stick");
                    scrollToTop.show();
                    scrollToTop.css("position", "fixed");
                }
            });
        }
    }

    if (isMobile) {
        var header = $(".sticky-bar");
        var win = $(window);
        win.on("scroll", function () {
            var scroll = win.scrollTop();
            if (scroll < 200) {
                header.removeClass("stick");
            } else {
                header.addClass("stick");
            }
        });
    }

    if ($("body").hasClass("page-transition")) {
        //page loader
        $(window).on("load", function () {
            setTimeout(function () {
                $(".page-loader").fadeOut("slow");
            }, 800);
            gsap.to(".bar", 1.5, {
                delay: 0,
                height: 0,
                stagger: {
                    amount: 0.5
                },
                ease: "power4.inOut"
            });
        });


    } else {
        $(".page-loader").hide();
    }

    var logoLoading = document.querySelector(".page-loader-logo img");
    logoLoading.addEventListener("load", function () {
        gsap.to(logoLoading, { duration: 1, scale: 1.5 });
    });

    // ================================================================
    // Scroll to top
    // Requires "GSAP ScrollToPlugin" (https://greensock.com/docs/v2/Plugins/ScrollToPlugin)
    // ================================================================

    $(".scroll-to-top").on("click", function () {
        if (!isMobile) {
            // Not for mobile devices!
            if ($("body").hasClass("alith-smooth-scroll")) {
                var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
                gsap.to($scrollbar, { duration: 1.5, scrollTo: { y: 0, autoKill: true }, ease: Expo.easeInOut });
            } else {
                $("html,body").animate({ scrollTop: 0 }, 800);
            }
        } else {
            $("html,body").animate({ scrollTop: 0 }, 800);
        }
        return false;
    });

    //LINK HOVER EFFECT
    let elements = document.querySelectorAll(".link-effect");

    elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
            let span = document.createElement("span");
            span.innerText = letter.trim() === "" ? "\xa0" : letter;
            span.classList.add("letter");
            textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.classList.remove("play");
        });
    });

    //Perfect Scrollbar
    if ($(".mobile-header-wrapper-inner").length) {
        const ps = new PerfectScrollbar(".mobile-header-wrapper-inner");
    }

    $(".rd-package").click(function(e){
        var _parent = $(this).parent("label");
        $(".content-overview label.font-lg").removeClass("active");
        _parent.addClass("active");
    });

})(jQuery);
