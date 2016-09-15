# test_extension

chrome的扩展开发,记录了学习的步骤


# 配置环境

- 创建 manifest.json 文件；这是扩展程序的主入口；类似 package.json的配置目录；
- 包括扩展的名称（name）、版本（version）、描述（description）、图标位置（icons）和 manifest 版本（manifest_version）等信息。
- 其中，name、version 和 manifest_version 是必须的，而且 manifest_version 必须为 2


        {
          "name":"My Test Extension",
          "version":"0.1",
          "manifest_version":2,
          "description":"this is my first extension",
          "browser_action":{
            "default_icon":"icon.png",
            "default_title":"this is a test obj"//如果没有默认的悬浮标题，会显示上面name的值；
          },
          "permissions":[
            "http://api.flickr.com/"
          ]
        
        }