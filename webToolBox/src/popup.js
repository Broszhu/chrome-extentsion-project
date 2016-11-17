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
        /*����ƶ�����Ӧ������*/
        $ContactHeader.on("click",".menu-item",function(e){
            e.preventDefault();
            var $this=$(this);
            var index=$(this).index();
            $this.find("a").addClass("active");
            $this.siblings().each(function(){$(this).find("a").removeClass("active");});
            $pageMain.animate({scrollTop:targetAry[index]-70});
        });
        /*������ʱ�򣬸�����Ӧ�Ĵ���*/
        $pageMain[0].onscroll=function(){
            console.log("2",$pageMain.offset().top)
        }
    }
};
pageUtility.init();
