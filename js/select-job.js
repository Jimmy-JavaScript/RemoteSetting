
function getJobDataToHtml(jsonStr) {

    var jsonObj;
    jsonObj = JSON.parse(jsonStr);
    console.log(jsonObj);
    console.log(jsonObj.accounts);
    console.log(jsonObj.accounts.length);
    var htmlStrs = '';
    for (var i in jsonObj.accounts) {
        htmlStr =
        '<li class="li-style" id="' + jsonObj.accounts[i].id + '">' +
            '                    <div class="li-left-div">' +
            '                        <span class="list-name-one">' + jsonObj.accounts[i].account + '</span>' +
            '                        <span class="account-name">' + jsonObj.accounts[i].group + '</span>' +
            '                    </div>' +
            '                    <div class="li-center-div">' +
            '                        <div id="job-save-as">' +
            '                            <img class="job-list-save-as" src="../images/job_save.png">' +
            '                        </div>' +
            '                        <div id="job-setting">' +
            '                            <img class="list-delete" src="../images/job_setting.png" >' +
            '                        </div>' +
            '                        <div id="job-rename">' +
            '                            <img class="job-list-save-as" src="../images/job_rename.png">' +
            '                        </div>' +
            '                    </div>' +
            '                    <div id="job-delete" class="li-right-div">' +
            '                         <img class="list-delete" src="../images/delete.png">' +
            '                    </div>' +
            '                </li>';
        htmlStrs += htmlStr;
    }
    return htmlStrs;
}

function openSaveAsDialog(titleName) {
    var html = '<div class="add-job-tip" style="padding-top: 1px">you can enter up to 18 characters or numbers</div>' +
        '            <div class="add-job-middle-list" style="padding-top: 20px">' +
        '                <span id="span-one">Job Name</span>' +
        '                <img class="add-job-img">' +
        '                <input id="add-job-name"  class="add-job-input" />' +
        '            </div>' +
        '            <div class="add-job-middle-list" style="padding-top: 20px">' +
        '                <span id="span-two">Group(pr Owner)</span>' +
        '                <img class="add-job-img">' +
        '                <input id="add-job-pwd" class="add-job-input" >' +
        '            </div>' +
        '            <div class="add-job-middle-list" style="padding-top: 20px">' +
        '                <span id="span-three">Protection Password</span>' +
        '                <img class="add-job-img">' +
        '                <input id="add-job-pro-pwd" class="add-job-input" type="password">' +
        '            </div>' +
        '            <div class="add-job-middle-list" style="padding-top: 20px">' +
        '                <span id="span-three">Confirm Password</span>' +
        '                <img class="add-job-img">' +
        '                <input id="add-job-con-pwd" class="add-job-input" style="margin-left: 50px" type="password">' +
        '            </div>';
    nConfirm(titleName, html, function () {

    }, function () {
        $(".add-job-img").click(function () {
            $(this).siblings("input").val("");
        })
    }, { confirmBtnText: "Save", cancelBtnText: "Cancel", contentAlign: "left" })
}

function openEditDialog(typeId) {
    var html = '<div class="add-job-tip" style="padding-top: 0px">you can enter up to 18 characters or numbers</div>' +
        '            <div class="add-job-middle-list" style="padding-top: 20px">' +
        '                <span id="span-one">Job Name</span>' +
        '                <img class="add-job-img">' +
        '                <input id="add-job-name"  class="add-job-input" style="margin-left: 50px"/>' +
        '            </div>' +
        '            <div class="add-job-middle-list" style="padding-top: 20px">' +
        '                <span id="span-two">Group(or Owner)</span>' +
        '                <img class="add-job-img" >' +
        '                <input id="add-job-pwd" class="add-job-input" style="margin-left: 50px"  >' +
        '            </div>' +
        '            <div class="add-job-middle-list" style="padding-top: 20px">' +
        '                <span id="span-three">Description</span>' +
        '                <img class="add-job-img" >' +
        '                <input id="add-job-pro-pwd" class="add-job-input" style="margin-left: 50px" type="password">' +
        '            </div>' +
        '            <div class="add-job-middle-list" style="padding-top: 20px;vertical-align:middle">' +
        '                <div id="div-psd-pro" style="vertical-align:middle;background-image:url(../images/pdf_security_on.png);width: 60px;background-size:100% 100%;height: 60px;display: inline-block;margin-left: 100px"  "></div>' +
        '                <div id="div-type-img" style="vertical-align:middle;background-image:url(../images/icon_mail.png);background-size:100% 100%;display:inline-block;margin-left:250px;width: 60px;height: 60px;"></div>' +
        '                <div id="div-type-text" style="vertical-align:middle;display:inline-block;width: 60px;height: 60px;padding-top: 5px">Mail</div>' +
        '            </div>';
    nConfirm("Edit", html, function () {

    }, function () {

        $(".add-job-img").click(function () {
            $(this).siblings("input").val("");
        });
        $("#div-psd-pro").click(function () {
            $.alerts._hide();
            openProtectionPwdDialog();

        });
        switch (typeId) {
            case Constants.ACCOUNTS_TYPE.FTP:
                $("#div-type-img").css({ backgroundImage: 'url("../images/icon_ftp.png")' });
                $("#div-type-text").text(Constants.ACCOUNTS_NAME.FTP);
                break;
        }
    }, { confirmBtnText: "Save", cancelBtnText: "Cancel", contentAlign: "left" })
}


function openProtectionPwdDialog() {
    var html = '<div class="add-job-middle-list" style="padding-top: 20px">' +
        '                <span id="span-one">Enable Password Protection</span>' +
        '                <img id="switch-pwd" on = "1" src="../images/dialog_on_79x49.png" style="height:30px;width:50px;float:right;margin-top: 15px;margin-right:15%;">' +
        '            </div>' +
        '            <div class="add-job-middle-list pro-content" style="padding-top: 20px">' +
        '                <span id="span-two">Current Password</span>' +
        '                <img class="add-job-img">' +
        '                <input id="add-job-pwd" class="add-job-input" style="margin-left: 30px" type="password">' +
        '            </div>' +
        '            <div class="add-job-middle-list pro-content" style="padding-top: 20px">' +
        '                <span id="span-three">New Password</span>' +
        '                <img class="add-job-img">' +
        '                <input id="add-job-pro-pwd" class="add-job-input" style="margin-left: 30px" type="password">' +
        '            </div>' +
        '            <div class="add-job-middle-list pro-content" style="padding-top: 20px">' +
        '                <span id="span-three">Confirm Password</span>' +
        '                <img class="add-job-img">' +
        '                <input id="add-job-con-pwd" class="add-job-input" style="margin-left: 30px" type="password">' +
        '            </div>';
    nConfirm("Protection Password", html, function () {

    }, function () {

        $(".add-job-img").click(function () {
            $(this).siblings("input").val("");
        });
        $("#switch-pwd").click(function () {

            var on = $(this).attr("on");
            if (parseInt(on)) {

                $(this).attr("src", "../images/dialog_off_79x49.png");
                $(this).attr("on", 0);
                $(".pro-content").css({ visibility: "hidden" })
            } else {
                $(this).attr("src", "../images/dialog_on_79x49.png");
                $(this).attr("on", 1);
                $(".pro-content").css({ visibility: "visible" })
            }
        })

    }, { confirmBtnText: "Save", cancelBtnText: "Cancel", contentAlign: "left" })
}
