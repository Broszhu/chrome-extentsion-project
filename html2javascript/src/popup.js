var $page=$("#bodyer");
//用于赋值文本的
//var $ZeroClipboardDoms = $page.find(".cope-target-string");
//var client = new ZeroClipboard( $ZeroClipboardDoms );

var pageUtilily={
    init:function(){
        //ZeroClipboard.config( { swfPath: "src/ZeroClipboard.swf" } );
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
/*        $page.on("focus",".target-data",function(event){
            var targetString=$(this).val();
            $(".cope-target-string").trigger("copy");
            $(client).trigger("copy");
            console.log("star trigger");
            console.log(client);
            console.log(event);

        });

        client.on( "copy", function (event) {
            var clipboard = event.clipboardData;
            var targetString=$page.find(".target-data").val();
            clipboard.setData( "text/plain",targetString );

            console.log(event);
            console.log("OK trigger")
        });*/


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
    getTargetStr:function($targetDom){
    }
};
pageUtilily.init();