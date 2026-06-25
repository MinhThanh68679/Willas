jQuery(document).ready(function (){
    SmoothScroll({
        animationTime: 900,
        stepSize: 80,
        accelerationDelta: 30,
        accelerationMax: 2.5,
        keyboardSupport: true,
        arrowScroll: 40,
        pulseAlgorithm: true,
        pulseScale: 5,
        pulseNormalize: 1,
        touchpadSupport: true,
        fixedBackground: true,
        excluded: '.overflow-y'
    });
    AOSInit();
    swipperSlider();
    menuMobi();
    AOS.refresh();
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

function swipperSlider(){

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
            1200: {
                slidesPerView: 4,
            },

            991:{
                slidesPerView: 3,
            },

            767:{
                slidesPerView: 2,
            },
        },
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
          1200: {
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
            1200: {
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

}



