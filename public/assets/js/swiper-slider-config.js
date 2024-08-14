(function($) {
    // Swipper
    $(".swiper-banner-4-items").each(function () {
        var swiper_4_items = new Swiper(this, {
            spaceBetween: 0,
            slidesPerView: 4,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-banner-4-items",
                prevEl: ".swiper-button-prev-banner-4-items"
            },
            pagination: {
                el: ".swiper-pagination-banner-4-items",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: 4
                },
                1100: {
                    slidesPerView: 3
                },
                850: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 2
                },
                500: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-6").each(function () {
        var swiper_6_items = new Swiper(this, {
            spaceBetween: 80,
            slidesPerView: 6,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-6",
                prevEl: ".swiper-button-prev-group-6"
            },
            pagination: {
                el: ".swiper-pagination-group-6",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: 6
                },
                1100: {
                    slidesPerView: 5
                },
                850: {
                    slidesPerView: 4
                },
                600: {
                    slidesPerView: 3
                },
                400: {
                    slidesPerView: 2
                },
                150: {
                    slidesPerView: 2
                }
            }
        });
    });

    $(".swiper-group-6-2").each(function () {
        var swiper_6_items = new Swiper(this, {
            spaceBetween: 50,
            slidesPerView: 6,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-6",
                prevEl: ".swiper-button-prev-group-6"
            },
            pagination: {
                el: ".swiper-pagination-group-6",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: 6
                },
                1100: {
                    slidesPerView: 5
                },
                850: {
                    slidesPerView: 4
                },
                600: {
                    slidesPerView: 3
                },
                400: {
                    slidesPerView: 2
                },
                150: {
                    slidesPerView: 2
                }
            }
        });
    });

    $(".swiper-group-5").each(function () {
        var swiper_6_items = new Swiper(this, {
            spaceBetween: 80,
            slidesPerView: 6,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-5",
                prevEl: ".swiper-button-prev-group-5"
            },
            pagination: {
                el: ".swiper-pagination-group-5",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: 5
                },
                1100: {
                    slidesPerView: 4
                },
                850: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 3
                },
                400: {
                    slidesPerView: 2
                },
                150: {
                    slidesPerView: 2
                }
            }
        });
    });

    $(".swiper-group-3-center").each(function () {
        var swiper_3_items = new Swiper(this, {
            spaceBetween: 150,
            // slidesPerView: 3,
            slidesPerView: "auto",
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-3",
                prevEl: ".swiper-button-prev-group-3"
            },
            pagination: {
                el: ".swiper-pagination-group-3",
                clickable: true
            },
            autoplay: false,
            breakpoints: {
                1399: {
                    slidesPerView: "auto"
                },
                1100: {
                    spaceBetween: 30,
                    slidesPerView: "auto"
                },
                850: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-4-center").each(function () {
        var swiper_4_center_items = new Swiper(this, {
            spaceBetween: 30,
            // slidesPerView: 3,
            slidesPerView: "auto",
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-4",
                prevEl: ".swiper-button-prev-group-4"
            },
            pagination: {
                el: ".swiper-pagination-group-4",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: "auto"
                },
                1100: {
                    spaceBetween: 30,
                    slidesPerView: "auto"
                },
                850: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            },
            on: {
                beforeInit: function () {
                    // set padding left slide fleet
                    var leftTitle = 0;
                    var titleFleet = $(".title-left");
                    if (titleFleet.length > 0) {
                        leftTitle = titleFleet.offset().left;
                    }
                    if ($(".box-slide-padding-left").length > 0) {
                        $(".box-slide-padding-left").css("padding-left", leftTitle + "px");
                    }
                }
            }
        });
    });

    $(".swiper-group-center").each(function () {
        var swiper_3_items = new Swiper(this, {
            spaceBetween: 80,
            slidesPerView: 5,
            slidesPerGroup: 1,
            centeredSlides: true,
            centerInsufficientSlides: true,
            centeredSlidesBounds: true,
            roundLengths: true,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-center",
                prevEl: ".swiper-button-prev-group-center"
            },
            pagination: {
                el: ".swiper-pagination-group-center",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1599: {
                    slidesPerView: 5
                },
                1499: {
                    slidesPerView: 4
                },
                1100: {
                    slidesPerView: 4
                },
                850: {
                    spaceBetween: 30,
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-3-customer").each(function () {
        var swiper_3_items = new Swiper(this, {
            spaceBetween: 80,
            // slidesPerView: 3,
            slidesPerView: "auto",
            slidesPerGroup: 1,
            centeredSlides: false,
            // roundLengths: true,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-4",
                prevEl: ".swiper-button-prev-group-4"
            },
            pagination: {
                el: ".swiper-pagination-group-4",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: "auto"
                },
                1100: {
                    slidesPerView: "auto"
                },
                850: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-2").each(function () {
        var swiper_2_items = new Swiper(this, {
            slidesPerView: 2,
            spaceBetween: 80,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-1",
                prevEl: ".swiper-button-prev-group-1"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            on: {
                beforeInit: function () {
                    // set padding left slide fleet
                    var leftTitle = 0;
                    var titleFleet = $(".container");
                    if (titleFleet.length > 0) {
                        leftTitle = titleFleet.offset().left;
                    }
                    if ($(".box-slider-padding-left").length > 0) {
                        $(".box-slider-padding-left").css("padding-left", leftTitle + "px");
                        $(".box-slider-padding-left .swiper-container").css("padding-right", leftTitle + "px");;
                    }
                }
            },
            breakpoints: {
                1399: {
                    slidesPerView: 2
                },
                1100: {
                    slidesPerView: 2
                },
                850: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-2-normal").each(function () {
        var swiper_2_items_normal = new Swiper(this, {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-2",
                prevEl: ".swiper-button-prev-group-2"
            },
            pagination: {
                el: ".swiper-pagination-group-2",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: 2
                },
                1100: {
                    slidesPerView: 2
                },
                850: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-3").each(function () {
        var swiper_3_items = new Swiper(this, {
            slidesPerView: 3,
            spaceBetween: 80,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-3",
                prevEl: ".swiper-button-prev-group-3"
            },
            pagination: {
                el: ".swiper-pagination-group-3",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: 3
                },
                1100: {
                    slidesPerView: 3
                },
                850: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-3-2").each(function () {
        var swiper_3_items = new Swiper(this, {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-3",
                prevEl: ".swiper-button-prev-group-3"
            },
            pagination: {
                el: ".swiper-pagination-group-3",
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1399: {
                    slidesPerView: 3
                },
                1100: {
                    slidesPerView: 3
                },
                850: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                150: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-1").each(function () {
        var swiper_1_items = new Swiper(this, {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-1",
                prevEl: ".swiper-button-prev-group-1"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            autoplay: {
                delay: 10000
            }
        });
    });
})(jQuery);