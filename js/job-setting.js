function scanSetting() {
    window.location.href = 'scan-setting.html';
}

function initClickEvent() {
    $(".job-setting-toggle-btn").click(function (e) {
        e.stopPropagation();
        $(".job-setting-toggle-btn").each(function () {
            var on = $(this).attr("on");
            if(parseInt(on)){
                $(this).attr("src","../images/dialog_off_79x49.png");
                $(this).attr("on",0);
                $(this).prev().prev().attr("src","../images/setting_disable_120x87.png")
            }
        });

        var on = $(this).attr("on");
        if (parseInt(on)){
            $(this).attr("src","../images/dialog_off_79x49.png");
            $(this).attr("on",0);
        }else {
            $(this).attr("src","../images/dialog_on_79x49.png");
            $(this).attr("on",1);
            $(this).prev().prev().attr("src","../images/setting_120x87.png")
        }
    })
}

function jobSettingFun() {
    var jobSetting = new Object();
    jobSetting.setting = function () {
        $('#usb .job-setting').click(
            function () {
                if ($(this).prev().prev().attr("on")==0){
                    return;
                }
                window.location.href = 'job-setting/scan-usb.html';
            }
        );

        $('#share-folder .job-setting').click(
            function () {
                if ($(this).prev().prev().attr("on")==0){
                    return;
                }
                window.location.href = 'job-setting/scan-share-folder.html';
            }
        );

        $('#ftp-sftp .job-setting').click(
            function () {
                if ($(this).prev().prev().attr("on")==0){
                    return;
                }
                window.location.href = 'job-setting/scan-ftp.html';
            }
        );

        $('#mail-smtp .job-setting').click(
            function () {
                if ($(this).prev().prev().attr("on")==0){
                    return;
                }
                window.location.href = 'job-setting/scan-mail.html';
            }
        );

        $('#pc-mobile .job-setting').click(
            function () {
                if ($(this).prev().prev().attr("on")==0){
                    return;
                }
                window.location.href = 'job-setting/scan-client.html';
            }
        );
    };
    return jobSetting;
}

