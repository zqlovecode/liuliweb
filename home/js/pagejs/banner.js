// banner


var size=$(".ban_img>li").length;
// 添加圆点
for(var i=0;i<size;i++){
    $(".ban_num").append("<li></li");
}

var numWidth=$('.ban_num').outerWidth()/2;
    $(".ban_num").css("margin-left",-numWidth);

// 初始化
$(".ban_img>li").eq(0).show();
$(".ban_num>li").eq(0).addClass('active');

// 手动控制轮播
$(".ban_num>li").mouseover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var idx=$(this).index();

    $(".ban_img>li").eq(idx).fadeIn().siblings().fadeOut();
})

//自动控制轮播
var i=0;
var t=setInterval(move,2000);

$(".banner").hover(function(){
    clearInterval(t);
},function(){
    t=setInterval(move,2000);
})


// 点击向左的箭头
$(".btn_l").click(function(){
    moveleft();
});

// 点击向右的箭头
$(".btn_r").click(function(){
    move();
})


//向左移动动画
function moveleft(){
    i--;
    if(i==-1)
    i=size-1;
    $(".ban_num>li").eq(i).addClass('active').siblings().removeClass("active");
    $(".ban_img>li").eq(i).fadeIn().siblings().fadeOut();
}

//向右运动动画
function move(){
    i++;
    if(i>=size){
        i=0;
    }
    $(".ban_num>li").eq(i).addClass('active').siblings().removeClass("active");
    $(".ban_img>li").eq(i).fadeIn().siblings().fadeOut();
}
