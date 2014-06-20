(function() {
    var mySwiper = new Swiper('.swiper-container',{
        // pagination: '.pagination',
        // paginationClickable: true,
        speed : 750,
        mode: 'vertical',
        progress: true,
        onProgressChange: function(swiper){
            for (var i = 0; i < swiper.slides.length; i++){
                var slide = swiper.slides[i];
                var progress = slide.progress;
                var translate, boxShadow;
                if (progress>0) {
                    translate = progress*swiper.height;  
                    boxShadowOpacity = 0;
                } else {
                    translate=0; 
                    boxShadowOpacity = 1  - Math.min(Math.abs(progress),1);
                }
                slide.style.boxShadow='0px 0px 10px rgba(0,0,0,'+boxShadowOpacity+')';
                swiper.setTransform(slide,'translate3d(0,'+(translate)+'px,0)');
            }
        },
        onTouchStart:function(swiper){
            for (var i = 0; i < swiper.slides.length; i++){
                swiper.setTransition(swiper.slides[i], 0);
            }
        },
        onSetWrapperTransition: function(swiper, speed) {
            for (var i = 0; i < swiper.slides.length; i++){
                swiper.setTransition(swiper.slides[i], speed);
            }
        }
    })

    // Set Z-Indexes
    for (var i = 0; i < mySwiper.slides.length; i++){
        mySwiper.slides[i].style.zIndex = i;
    }

})();