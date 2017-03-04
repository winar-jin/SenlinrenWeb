function bigSlider() {
    babyzone.scroll(4,"banner_list","list","banner_info");
    var bannerImg2 = document.getElementById('banner');
    var bannerWidth2 = bannerImg2.offsetWidth;
    var bannerList2 = document.getElementById('banner_list').getElementsByTagName('img');
    for(var i = 0;i<bannerList2.length;i++){
        bannerList2[i].style.width = bannerWidth2.toString() + 'px';
    }
    SlideShow(3000);
}
$(window).load(bigSlider);
