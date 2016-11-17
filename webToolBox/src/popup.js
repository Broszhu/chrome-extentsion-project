var $page=$("#page-popup");
var $ContactHeader=$page.find(".menu");
var $pageMain=$page.find(".page-main");
var targetAry=[];
var pageUtility={
    init:function(){
        $pageMain.find(".tool-item").each(function(){
            targetAry.push(($(this).offset()||0).top)
        });
        this.bind();
    },
    bind:function(){
        /*点击移动到相应的内容*/
        $ContactHeader.on("click",".menu-item",function(e){
            e.preventDefault();
            var $this=$(this);
            var index=$(this).index();
            $this.find("a").addClass("active");
            $this.siblings().each(function(){$(this).find("a").removeClass("active");});
            $pageMain.animate({scrollTop:targetAry[index]-70});
        });
        /*滚动的时候，高亮相应的触点*/
        $pageMain[0].onscroll=function(){
            console.log("2",$pageMain.offset().top)
        }
    }
};
pageUtility.init();
