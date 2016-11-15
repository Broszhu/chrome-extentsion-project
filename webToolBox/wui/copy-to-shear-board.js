/*点击按钮复制到剪贴板*/
var $page=$("#page-demo");
$page.on("focus",".copy-to-shear-board",function(){
    //$(this).css({ "background-color": "#5eb95e" }).select();
    $(this).select();
    document.execCommand("Copy")
});
/*
$page.on("blur",".copy-to-shear-board",function(){
    $(this).css({ "background-color": "#fff" });
});*/
