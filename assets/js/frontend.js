jQuery(document).ready(function (){
    AOSInit();
    swipperSlider();
    menuMobi();
    // slideProductPopup();
})

document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("search-lightbox");
    const buttons = document.querySelectorAll('[href="#search-lightbox"]');

    buttons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === this) {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        }
    });


    jQuery('.mobile_menu .closed_menu').on('click', function (e) {
        jQuery('.mobile_menu').removeClass('active');
    })
});

// ---------------------------------dd_wrap--------------------------
document.querySelectorAll('.wrap_btn_option').forEach(wrap => {
    const trigger = wrap.querySelector('.dd_trigger');
    const triggerText = trigger.querySelector('.dd_trigger_text');
    const triggerIcon = trigger.querySelector('.icon_dd_trigger img');
    const items = wrap.querySelectorAll('.dd_item');

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        wrap.classList.toggle('open');
    });

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const itemText = item.querySelector('.dd_trigger_text').textContent.trim();
            const itemIconSrc = item.querySelector('.icon_dd_trigger img').getAttribute('src');

            triggerText.textContent = itemText;
            triggerIcon.setAttribute('src', itemIconSrc);

            wrap.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!wrap.contains(e.target)) {
            wrap.classList.remove('open');
        }
    });
});
// ---------------------------------dd_wrap_end--------------------------

const header = document.querySelector('header');
const headerWrappers = document.querySelectorAll('.header-wrapper');

window.addEventListener('scroll', () => {
    const isStuck = window.scrollY > header.offsetHeight;
    headerWrappers.forEach(wrapper => {
        wrapper.classList.toggle('stuck', isStuck);
    });

    // Toggle đổi background của header (before/after)
    header.classList.toggle('is_scrolled', isStuck);
});



function menuMobi() {
    const btnMenuMobi = document.querySelector('.btn_menu_mobi');
    const mobileMenu = document.querySelector('.mobile_menu');
    if (!btnMenuMobi || !mobileMenu) return;
    btnMenuMobi.addEventListener('click', () => mobileMenu.classList.toggle('active'));
}

function AOSInit(){
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        once: false,
        offset: 150, // offset (in px) from the original trigger point
        delay: 300, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
}

// function menuMobi() {
//     const btnMenuMobi = document.querySelector('.btn_menu_mobi');
//     const mobileMenu = document.querySelector('.mobile_menu');
//     if (!btnMenuMobi || !mobileMenu) return;
//     btnMenuMobi.addEventListener('click', () => mobileMenu.classList.toggle('active'));
// }

function swipperSlider(){
    
    // var slideHomeBanner = new Swiper(".slider_home_banner", {
    //     loop: true,
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".home_1 .slide_btn_icon.right",
    //         prevEl: ".home_1 .slide_btn_icon.left",
    //     },
    // });

    var slideOurBrand = new Swiper(".home_6 .slider_our_brand", {
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        loop: true,
        slidesPerView: 1,
        scrollbar: {
            el: ".home_6 .swiper-scrollbar",
            clickable: true,
            hide: true,
        },
        pagination: {
            el: ".home_6 .swiper-pagination",
            type: "progressbar",
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
            },

            991:{
                slidesPerView: 3,
            },

            767:{
                slidesPerView: 2,
            },
        },



        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        // speed: 950,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        // slidesPerView: 1,
        // scrollbar: {
        //     el: ".home_6 .swiper-scrollbar",
        //     clickable: true,
        //     hide: true,
        // },
        // pagination: {
        //     el: ".home_6 .swiper-pagination",
        //     clickable: true,
        // },
        // breakpoints: {
        //     991:{
        //         slidesPerView: 3,
        //     },
        //     767:{
        //         slidesPerView: 2,
        //     }
        // },
    });

    var slideFeatureProduct = new Swiper(".slider_feature_product", {
       slidesPerView: 1,
       loop: true,
    //    autoplay: {
    //         delay: 2000,
    //         disableOnInteraction: false,
    //     },
       pagination: {
         el: ".home_7 .swiper-pagination",
         clickable: true,
       },
       breakpoints: {
          1199: {
              slidesPerView: 4,
          },

          991:{
              slidesPerView: 3,
          },

          768:{
              slidesPerView: 2,
          },
        },
    });


    var slideApplications = new Swiper(".home_8 .slider_application", {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 1,
        scrollbar: {
            el: ".home_8 .swiper-scrollbar",
            clickable: true,
            hide: true,
        },
        pagination: {
            el: ".home_8 .swiper-pagination",
            type: "progressbar",
        },
        breakpoints: {
            1199: {
                slidesPerView: 5,
            },

            991:{
                slidesPerView: 3,
            },

            767:{
                slidesPerView: 2,
            },
        },
    });


    var slideBlogInsight = new Swiper(".slider_blog_insight", {
       slidesPerView: 1,
       loop: true,
    //    autoplay: {
    //         delay: 2000,
    //         disableOnInteraction: false,
    //     },
       pagination: {
         el: ".home_10 .swiper-pagination",
         clickable: true,
       },
       breakpoints: {
            767:{
                slidesPerView: 1,
            },
        },
    });

    // var slideLogoPartnerHome = new Swiper(".slider_logo_partner_home", {
    //   slidesPerView: 3,
    //   loop: true,
    //   grid: {
    //     rows: 2,
    //     fill: 'row',
    //   },
    // //   spaceBetween: 0,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   breakpoints: {
    //         1200: {
    //             slidesPerView: 5,
    //         },

    //         768:{
    //             slidesPerView: 4,
    //         },
    //     },
    // });

    // var slideCertificate = new Swiper(".swiper_certificate", {
    //     effect: "coverflow",
    //     initialSlide: 1,
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: "auto",
    //     loop: false,
    //     coverflowEffect: {
    //         rotate: 0,
    //         stretch: 0,
    //         depth: 0,
    //         modifier: 1,
    //         scale: 0.85,
    //         slideShadows: false,
    //     },
    //     navigation: {
    //         nextEl: ".about_8 .right",
    //         prevEl: ".about_8 .left",
    //     },
    // });

    // var slideRelatedNews = new Swiper(".slider_related_news", {
    //     loop: true,
    //     // autoplay: {
    //     //     delay: 2000,
    //     //     disableOnInteraction: false,
    //     // },
    //     slidesPerView: 1,
    //     spaceBetween: 49,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".detail_news_3 .right",
    //         prevEl: ".detail_news_3 .left",
    //     },
    //     breakpoints: {
    //         768:{
    //             slidesPerView: 3,
    //         }
    //     },
    // });

    // var gallerySlides = document.querySelectorAll('.product_gallery_slider .swiper-slide');

    // var slideProductList = new Swiper(".product_gallery_small_slider", {
    //     loop: false,
    //     spaceBetween: 20,
    //     slidesPerView: 5,
    //     freeMode: true,
    //     watchSlidesProgress: true,
    //     navigation: {
    //         prevEl: ".thumb-prev",
    //         nextEl: ".thumb-next",
    //     },
    // });

    // var slideProductLarge = new Swiper(".product_gallery_slider", {
    //     loop: false,
    //     spaceBetween: 10,
    //     thumbs: {
    //         swiper: slideProductList,
    //     },
    // });


    // var slideClassifyProduct = new Swiper(".slider_classify_product", {
    //     loop: true,
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".detail_product_3 .layout_classify .slide_btn_icon.right",
    //         prevEl: ".detail_product_3 .layout_classify .slide_btn_icon.left",
    //     },
    // });

    // var slideCertificateProduct = new Swiper(".slider_certificate_image", {
    //     loop: true,
    //     slidesPerView: 1,
    //     spaceBetween: 90,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         dynamicBullets: false,
    //         clickable: true,
    //     },
    // });

    // var slideRelatedProduct = new Swiper(".slider_related_product", {
    //     loop: true,
    //     // autoplay: {
    //     //     delay: 2000,
    //     //     disableOnInteraction: false,
    //     // },
    //     slidesPerView: 1,
    //     spaceBetween: 25,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".detail_product_4 .right",
    //         prevEl: ".detail_product_4 .left",
    //     },
    //     breakpoints: {
    //         768:{
    //             slidesPerView: 3,
    //             spaceBetween: 50,
    //         },

    //         580:{
    //             slidesPerView: 2,
    //             spaceBetween: 25,
    //         },
    //     },
    // });
}

// function slideProductPopup() {
//     jQuery("[data-fancybox]").fancybox({
//         afterShow: function (instance, slide) {
//             const container = slide.$content?.[0];
//             if (!container) return;

//             const thumbEl = container.querySelector(".slide_thumb");
//             const mainEl = container.querySelector(".slide_main");

//             if (!thumbEl || !mainEl) return;

//             if (thumbEl.swiper) {
//                 thumbEl.swiper.destroy(true, true);
//             }
//             if (mainEl.swiper) {
//                 mainEl.swiper.destroy(true, true);
//             }

//             // 👉 Đếm số slide thật (không tính duplicate)
//             const totalSlides = mainEl.querySelectorAll(".swiper-slide").length;

//             // =========================
//             // THUMB SLIDER
//             // =========================
//             const thumbSwiper = new Swiper(thumbEl, {
//                 loop: true,
//                 loopedSlides: totalSlides,
//                 slidesPerView: 3,
//                 spaceBetween: 10,
//                 speed: 900,

//                 watchSlidesProgress: true,
//                 watchSlidesVisibility: true,

//                 observer: true,
//                 observeParents: true,
//             });

//             // =========================
//             // MAIN SLIDER
//             // =========================
//             const mainSwiper = new Swiper(mainEl, {
//                 loop: true,
//                 loopedSlides: totalSlides,
//                 slidesPerView: 1,
//                 speed: 900,

//                 observer: true,
//                 observeParents: true,

//                 thumbs: {
//                     swiper: thumbSwiper
//                 },

//                 on: {
//                     init: function () {
//                         updateActiveThumb(container, this.realIndex);
//                     },
//                     slideChange: function () {
//                         updateActiveThumb(container, this.realIndex);
//                     }
//                 }
//             });

//             // =========================
//             // ACTIVE THUMB CUSTOM
//             // =========================
//             function updateActiveThumb(scope, activeIndex) {
//                 const thumbs = scope.querySelectorAll(".slide_thumb .swiper-slide");

//                 thumbs.forEach(el => el.classList.remove("slide-thumb-active"));

//                 if (thumbs[activeIndex]) {
//                     thumbs[activeIndex].classList.add("slide-thumb-active");
//                 }
//             }

//             // =========================
//             // CLICK THUMB → MAIN
//             // =========================
//             thumbSwiper.on("click", function (swiper) {
//                 if (typeof swiper.clickedIndex !== "undefined") {
//                     mainSwiper.slideToLoop(swiper.clickedIndex, 500);
//                 }
//             });

//             // =========================
//             // ARROWS
//             // =========================
//             const nextBtn = container.querySelector(".arrow.next");
//             const prevBtn = container.querySelector(".arrow.prev");

//             if (nextBtn) {
//                 nextBtn.onclick = () => mainSwiper.slideNext();
//             }

//             if (prevBtn) {
//                 prevBtn.onclick = () => mainSwiper.slidePrev();
//             }
//         }
//     });
// }


// function slideProductPopup() {
//   document.addEventListener('DOMContentLoaded', () => {

//     document.querySelectorAll('.link_popup_document').forEach((link, index) => {
//       link.addEventListener('click', (e) => {
//         e.preventDefault();

//         Fancybox.show([{ src: '#popup_document', type: 'inline' }], {
//           afterShow(instance, slide) {
//             const container = slide.$content;
//             if (!container) return;

//             // Destroy nếu đã init
//             const thumbEl = container.querySelector('.slide_thumb');
//             const mainEl = container.querySelector('.slide_main');
//             if (!thumbEl || !mainEl) return;

//             if (thumbEl.swiper) thumbEl.swiper.destroy(true, true);
//             if (mainEl.swiper) mainEl.swiper.destroy(true, true);

//             const totalSlides = mainEl.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;

//             // Init thumb trước
//             const thumbSwiper = new Swiper(thumbEl, {
//               loop: true,
//               loopedSlides: totalSlides,
//               slidesPerView: 5,
//               spaceBetween: 8,
//               watchSlidesProgress: true,
//               observer: true,
//               observeParents: true,
//             });

//             // Init main sau
//             const mainSwiper = new Swiper(mainEl, {
//               loop: true,
//               loopedSlides: totalSlides,
//               slidesPerView: 1,
//               speed: 600,
//               observer: true,
//               observeParents: true,
//               thumbs: { swiper: thumbSwiper },
//               on: {
//                 init() { updateActiveThumb(container, this.realIndex); },
//                 slideChange() { updateActiveThumb(container, this.realIndex); }
//               }
//             });

//             function updateActiveThumb(scope, activeIndex) {
//               scope.querySelectorAll('.slide_thumb .swiper-slide:not(.swiper-slide-duplicate)')
//                 .forEach(el => el.classList.remove('slide-thumb-active'));
//               const thumbs = scope.querySelectorAll('.slide_thumb .swiper-slide:not(.swiper-slide-duplicate)');
//               if (thumbs[activeIndex]) thumbs[activeIndex].classList.add('slide-thumb-active');
//             }

//             thumbSwiper.on('click', (swiper) => {
//               if (typeof swiper.clickedIndex !== 'undefined') {
//                 mainSwiper.slideToLoop(swiper.realIndex, 500);
//               }
//             });

//             const prevBtn = container.querySelector('.arrow.prev');
//             const nextBtn = container.querySelector('.arrow.next');
//             if (prevBtn) prevBtn.onclick = () => mainSwiper.slidePrev();
//             if (nextBtn) nextBtn.onclick = () => mainSwiper.slideNext();

//             // Nhảy đến đúng slide được click
//             mainSwiper.slideToLoop(index, 0);
//           }
//         });
//       });
//     });

//   });
// }






// jQuery(document).ready(function ($) {
//     if (window.innerWidth > 767) {
//         $('.wrap_box_hover_about_value .item').hover(
//             // function () {
//             //     var id = $(this).data('id');

//             //     $('.wrap_box_hover_about_value .item').removeClass('active');
//             //     $(this).addClass('active');

//             //     $('.wrap_box_hover_about_value .item_bg_value').removeClass('active');
//             //     $('.wrap_box_hover_about_value .item_bg_value[data-id="' + id + '"]').addClass('active');
//             // },

//             function () {
//                 var id = $(this).data('id');

//                 // Gộp tất cả thay đổi vào cùng 1 lần
//                 $('.wrap_box_hover_about_value .item').removeClass('active');
//                 $('.wrap_box_hover_about_value .item_bg_value').removeClass('active');
                
//                 $(this).addClass('active');
//                 $('.wrap_box_hover_about_value .item_bg_value[data-id="' + id + '"]').addClass('active');
//             },
//             function () {
//                 // Bạn có thể thêm hành động khi rời chuột ở đây nếu cần
//             }
//         );
//     }
// });


