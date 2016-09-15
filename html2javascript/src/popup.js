var $page=$("#bodyer");
var pageUtilily={
    init:function(){
        this.bind();
    },
    bind:function(){
        var self=this;
        var $arraySpliceDOM=$page.find("#arrays-splice");

        //todo 点击转成单引号；
        $page.on("click",".j-to-alone",function(){
            var isArraySelect=$arraySpliceDOM.prop("checked");
            self.toAlone(isArraySelect);
        });

        //todo 点击转成双引号；
        $page.on("click",".j-to-double",function(){
            var isArraySelect=$arraySpliceDOM.prop("checked");
            self.toDouble(isArraySelect);
        });

        //todo 点击复制到剪切板
        $page.on("focus",".target-data",function(event){
            var targetStr=$(this).val();
            self.getTargetStr(event,targetStr);
            console.log(targetStr);
        });
    },
    toAlone:function(isArraySelect){
        var sourcesDataAry=$page.find(".sources-data").val().replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").split('\n');
        var len=sourcesDataAry.length;
        var outArr = [];
        if (isArraySelect) {
            outArr.push("[");
            $.each(sourcesDataAry, function (index, value) {
                if (value !== "") {
                    if (index === len - 1) {
                        outArr.push("\'" + value + "\'");
                    } else {
                        outArr.push("\'" + value + "\',\n");
                    }
                }

            });
            outArr.push("].join(\"\");");
        } else {
            $.each(sourcesDataAry, function (index, value) {
                if (value !== "") {
                    if (index === len - 1) {
                        outArr.push("\'" + value + "\';");
                    } else {
                        outArr.push("\'" + value + "\'+\n");
                    }
                }
            });
        }
        $page.find(".target-data").val(outArr.join(""));
    },
    toDouble:function(isArraySelect){
        var sourcesDataAry = $page.find(".sources-data").val().replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").replace(/\"/g, "\\\"").split('\n');
        var len = sourcesDataAry.length;
        var outArr = [];
        if (isArraySelect) {
            outArr.push("[");
            $.each(sourcesDataAry, function (index, value) {
                if (value !== "") {
                    if (index === len - 1) {
                        outArr.push("\"" + value + "\"");
                    } else {
                        outArr.push("\"" + value + "\",\n");
                    }
                }

            });
            outArr.push("].join(\"\");");
        } else {
            $.each(sourcesDataAry, function (index, value) {
                if (value !== "") {
                    if (index === len - 1) {
                        outArr.push("\"" + value + "\";");
                    } else {
                        outArr.push("\"" + value + "\"+\n");
                    }
                }
            });
        }
        $page.find(".target-data").val(outArr.join(""));
    },
    getTargetStr:function(event,targetStr){
        console.dir(event);
        event.clipboardData.setData("Text",targetStr);
    }
};
pageUtilily.init();