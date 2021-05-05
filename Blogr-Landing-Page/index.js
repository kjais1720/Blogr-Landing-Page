// const w=window.innerWidth

$(".menu-toggle").click(function(){
                    $("nav").toggleClass('responsive-nav')
                    $('.menu-icon').toggleClass('fa-bars')
                    $('.menu-icon').toggleClass('fa-times')
})

// $(".menu-toggle .fa-times").click(function(){
//     $("nav").removeClass("responsive-nav")
//     $(".fa-times").addClass('fa-bars')
//     $(".fa-times").removeClass("fa-times")
// })

$('ul li').mouseenter(function(){
    $(this).toggleClass('active')
    $(this).siblings().removeClass('active')
})