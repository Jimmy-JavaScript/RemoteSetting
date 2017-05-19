
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]); return null;
    };

    $.getProjectPath = function () {
        var pathName = document.location.pathname;
        var index = pathName.substr(1).indexOf("/");
        var result = pathName.substr(0,index+1);
        // return result;
        console.log(pathName);
        return 'file:///F:/JobCode/WebPage';
    };


    $.alerts = {
        tag:"",//used to distinguish two or more dialog exit
        alert: function(title, message, callback,init,opt) {
            if( title == null ) title = 'INFO';
            this._show(title, message, null, 'alert', function(result) {
                if( callback ) callback(result);
            },init,opt);
        },

        confirm: function(title, message, callback,init,opt) {
            if( title == null ) title = 'INFO';
            this._show(title, message, null, 'confirm', function(result) {
                if( callback ) callback(result);
            },init,opt);
        },

        _show: function(title, msg, value, type, callback,init,opt) {

            var _html = "";
            var dialog = this;
            this.tag = new Date().getTime().toString();

            _html += '<div id="' +dialog.tag+ 'mb_box"></div><div id="' +dialog.tag+ 'mb_con"><span id="' +dialog.tag+ 'mb_tit">' + title + '</span>';

            _html += '<div id="' +dialog.tag+ 'mb_msg">' + msg + '</div>';

            _html += '<div id="' +dialog.tag+ 'mb_btnbox">';
            if (type == "alert") {
                _html += '<input id="' +dialog.tag+ 'mb_btn_ok" type="button" value="ok" />';
            }
            if (type == "confirm") {

                _html += '<input id="' +dialog.tag+ 'mb_btn_no" type="button" value="No" />';
                _html += '<input id="' +dialog.tag+ 'mb_btn_ok" type="button" value="Yes" />';
            }
            _html += '</div></div>';

            //必须先将_html添加到body，再设置Css样式
            $("body").append(_html);
            GenerateCss(type,dialog.tag);
            if (init){
                init();
            }
            if(opt){
                if(opt.confirmBtnText){ // yes button (or one button exit) text
                    $("#" + dialog.tag+ "mb_btn_ok").val(opt.confirmBtnText);
                }
                if (opt.cancelBtnText){  // no button text
                    $("#" + dialog.tag+ "mb_btn_no").val(opt.cancelBtnText);
                }
                if(opt.contentAlign){  //content section textAlign
                    $("#" +dialog.tag+ "mb_msg").css({
                        textAlign:opt.contentAlign
                    })

                }
            }
            switch( type ) {
                case 'alert':

                    $("#" + dialog.tag+ "mb_btn_ok").click( function() {
                        callback(true);
                        dialog._hide();
                    });
                    $("#" + dialog.tag+ "mb_btn_ok").focus().keypress( function(e) {
                        if( e.keyCode == 13 || e.keyCode == 27 ) $("#" + dialog.tag+ "mb_btn_ok").trigger('click');
                    });
                    break;
                case 'confirm':

                    $("#" + dialog.tag+ "mb_btn_ok").click( function() {

                        if( callback ) callback(true);
                        dialog._hide();
                    });
                    $("#" + dialog.tag+ "mb_btn_no").click( function() {
                        dialog._hide();
                        if( callback ) callback(false);
                    });
                    $("#" + dialog.tag+ "mb_btn_no").focus();
                    $("#" + dialog.tag+ "mb_btn_ok, #" + dialog.tag+ "mb_btn_no").keypress( function(e) {
                        if( e.keyCode == 13 ) $("#mb_btn_ok").trigger('click');
                        if( e.keyCode == 27 ) $("#mb_btn_no").trigger('click');
                    });
                    break;


            }
        },
        _hide: function() {
            $("#" +this.tag+ "mb_box,#" +this.tag+ "mb_con").remove();
        }
    };
    /**
     * single button dialog
     * @param title  标题名称
     * @param message  可以是要呈现的信息，也可以是html代码
     * @param callback 结果回调，可以携带true false 或者自定义值
     * @param init 自定义dialog时，初始化操作，往往在message为html代码时配合使用
     */
    nAlert = function(title,message,callback,init,opt) {
        $.alerts.alert(title, message,callback,init,opt);
    };

    nCommonAlert = function(title,message,callback) {
        nAlert(title, message,callback,null);
    };

    nConfirm = function(title,message, callback,init,opt) {
        $.alerts.confirm(title, message, callback,init,opt);
    };

    /**
     * 仅用于呈现文字信息
     * @param title 标题
     * @param message 呈现的信息
     * @param callback 用户选择确认时会返回true
     */
    nCommonConfirm = function(title, message, callback) {
        nConfirm(title, message, callback,null);
    };


    nCommonSelect = function (title,options,callback) {
        var html = "";
        html +="<div style='overflow-y: auto;height: 200px;display: flex;flex-direction: column;margin-left: 2%;margin-right: 2%'>";
        for(var name of options){
            html +=  "<div class='div-select' style='cursor: pointer;text-align: left;padding-left: 30px;margin-bottom: 0px;'> " +
            "<span>" +
                name +
                "</span></div> " +
            "<img style='width: 100%' src='" +$.getProjectPath()+ "/images/devide_line.png'>"
        }
        html +="</div>";
        var obj = Object.create($.alerts);
        obj.alert(null, html,function (r) {

        },function () {


            $(".div-select").click(function () {
                obj._hide();
                var selected = $(this).find("span").text();
                callback(selected);
            })
        },{confirmBtnText:"Cancel"});
    };

    nSelectWithRound = function (title,options,callback,selected) {
        var html = "";
        html +="<div style='overflow-y: auto;height: 200px;display: flex;flex-direction: column;margin-left: 2%;margin-right: 2%'>";
        for(var name of options){
            html +=  "<div class='div-select' style='cursor: pointer;text-align: left;padding-left: 30px;'> " +
                "<span>" +
                name +
                "</span> " +
                "<div style='width: 50px;height: 60px;vertical-align: middle;background-size:100% 100%;margin-right: 50px; float: right;background-image: url(" +$.getProjectPath()+
                "/images/water_select_70x87.png)'>" +
                "</div>" +
                "</div> " +
                "<img style='width: 100%' src='" +$.getProjectPath()+ "/images/devide_line.png'>"
        }
        html +="</div>";
        var obj = Object.create($.alerts);
        obj.alert(title, html,function (r) {

        },function () {
            for (var i in options){
                if (options[i]==selected){
                    $(".div-select").eq(i).find("div").css({backgroundImage:'url("' +$.getProjectPath()+ '/images/water_current.png")'})
                }
            }


            $(".div-select").click(function () {
                $(this).find("div").css({backgroundImage:'url("' +$.getProjectPath()+ '/images/water_current.png")'});
                obj._hide();
                var selected = $(this).find("span").text();
                callback(selected);
            })
        },{confirmBtnText:"Cancel"});
    };


    //生成Css
    var GenerateCss = function (type,tag) {

        $("#" + tag+ "mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
            filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.4'
        });

        $("#" +tag+ "mb_con").css({ zIndex: '999999', position: 'fixed',maxWidth:"70%",minWidth:"40%",
             paddingLeft:'0px'
        });

        $("#" +tag+ "mb_tit").css({ display: 'block',height:"80px", fontSize: '25px', color: 'white', padding: '45px 35px',
            borderRadius: '0px 0px 0 0',backgroundSize:" 100% 100%",textAlign:"center",
            fontWeight: 'bold',
            backgroundImage:'url("' +$.getProjectPath()+ '/images/dialog_top.png")'

            // backgroundColor: '#0073c6'
        });

        $("#" +tag+ "mb_msg").css({ paddingLeft: '40px', paddingRight: '40px',paddingTop:"30px",paddingBottom:"30px",lineHeight: '50px',
             fontSize: '20px',textAlign:'center',
            backgroundImage:'url("' +$.getProjectPath()+
            '/images/dialog_middle.png")',backgroundRepeat:"repeat",
            backgroundSize:" 100% 100%"
        });

        $("#" +tag+ "mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
            border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',
            lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
        });

        $("#" +tag+ "mb_btnbox").css({ margin: '0px 0 10px 0', textAlign: 'center',height:"80px",  backgroundImage:'url("' +$.getProjectPath()+ '/images/dialog_bottom.png")',
            backgroundSize:" 100% 100%" });


        $("#" +tag+ "mb_btn_ok,#" +tag+ "mb_btn_no").css({ width: '50%', height: '40px', color: 'white', border: 'none' ,outline:"none",fontSize: '25px',cursor:"pointer"});
        $("#" +tag+ "mb_btn_ok").css({ backgroundColor: 'transparent',paddingLeft: '0px'});
        $("#" +tag+ "mb_btn_no").css({ backgroundColor: 'transparent', paddingRight: '0px' });

        if (type == "alert") {
            $("#" +tag+ "mb_btn_ok").css({ width: '100%',backgroundColor: 'transparent',paddingLeft: '0px'});
            $("#" +tag+ "mb_btnbox").css({backgroundImage:'url("' +$.getProjectPath()+ '/images/dialog_bottom_nobrand.png")',
                backgroundSize:" 100% 100%"})
        }
        if (type == "confirm") {

        }


        //右上角关闭按钮hover样式
        $("#" +tag+ "mb_ico").hover(function () {
            $(this).css({ backgroundColor: 'Red', color: 'White' });
        }, function () {
            $(this).css({ backgroundColor: '#DDD', color: 'black' });
        });

        var _widht = document.documentElement.clientWidth; //屏幕宽
        var _height = document.documentElement.clientHeight; //屏幕高

        var boxWidth = $("#" +tag+ "mb_con").width();
        var boxHeight = $("#" +tag+ "mb_con").height();

        //让提示框居中
        $("#" +tag+ "mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
    }
})(jQuery);