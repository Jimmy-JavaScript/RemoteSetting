/*========local-machine-account页面所有的Dialog===========*/

function showAddJobDialog() {
    $('#add-job-name').val('');
    $('#add-job-pwd').val('');
    $('#add-job-pro-pwd').val('');
    $('#add-job-con-pwd').val('');
    $('#add-job-pro-pwd').attr("placeholder", "Optional");
    $('#bodyHide').show();
    $('#dialog-add-job').css('left', $(window).width() / 2 - $('#dialog-add-job').width() / 2);
    $('#dialog-add-job').css('top', $(window).height() / 2 - $('#dialog-add-job').height() / 2);
    $('#dialog-add-job').show();
}

function hideAddJobDialog() {
    $('#bodyHide').hide();
    $('#dialog-add-job').hide();
}

function hideInfoDialog() {
    $('#dialog-info').hide();
}


function showSaveAsDialog() {
    $('#add-job-dialog-title').empty();
    $('#add-job-dialog-title').html('Save As...');
    $('#add-job-name').val('');
    $('#add-job-pwd').val('');
    $('#add-job-pro-pwd').val('');
    $('#add-job-con-pwd').val('');
    $('#add-job-pro-pwd').attr("placeholder", "Optional");
    $('#bodyHide').show();
    $('#dialog-add-job').css('left', $(window).width() / 2 - $('#dialog-add-job').width() / 2);
    $('#dialog-add-job').css('top', $(window).height() / 2 - $('#dialog-add-job').height() / 2);
    $('#dialog-add-job').show();
}

function showDeleteJobDialog() {
    $('#bodyHide').show();
    //显示在屏幕中间
    $('#dialog-delete-job').css('left', $(window).width() / 2 - $('#dialog-delete-job').width() / 2);
    $('#dialog-delete-job').css('top', $(window).height() / 2 - $('#dialog-delete-job').height() / 2);
    $('#dialog-delete-job').show();
}

function hideDeleteJobDialog() {
    $('#bodyHide').hide();
    $('#dialog-delete-job').hide();
}

function showEditJobDialog() {
    $('#bodyHide').show();
    //显示在屏幕中间
    $('#dialog-edit-job').css('left', $(window).width() / 2 - $('#dialog-edit-job').width() / 2);
    $('#dialog-edit-job').css('top', $(window).height() / 2 - $('#dialog-edit-job').height() / 2);
    $('#dialog-edit-job').show();
}

function hideEditJobDialog() {
    $('#bodyHide').hide();
    $('#dialog-edit-job').hide();
}


function showProtectionPwdDialog() {
    $('#bodyHide').show();
    $('#dialog-protection-pwd').show();
    //显示在屏幕中间
    $('#dialog-protection-pwd').css('left', $(window).width() / 2 - $('#dialog-protection-pwd').width() / 2);
    $('#dialog-protection-pwd').css('top', $(window).height() / 2 - $('#dialog-protection-pwd').height() / 2);
    $('#dialog-protection-pwd').show();
}

function hideProtectionPwdDialog() {
    $('#bodyHide').hide();
    $('#dialog-protection-pwd').hide();
}

function hideSignDialog() {
    $('#bodyHide').hide();
    $('#dialog-sign').hide();
    window.location.href = 'page/local-machine/job.html';
}

function showSignDialog(str) {
    $("#dialog-sign-pin").html(str);
    $('#input-three').val('');
    $('#bodyHide').show();
    //显示在屏幕中间
    $('#dialog-sign').css('left', $(window).width() / 2 - $('#dialog-sign').width() / 2);
    $('#dialog-sign').css('top', $(window).height() / 2 - $('#dialog-sign').height() / 2);
    $('#dialog-sign').show();
}

function hideSignDialog() {
    $('#bodyHide').hide();
    $('#dialog-sign').hide();
    window.location.href = 'page/local-machine/job.html';
}


function showLockDialog() {
    setLockDialogData("4");
    $('#bodyHide').show();
    $('#dialog-lock').css('left', $(window).width() / 2 - $('#dialog-lock').width() / 2);
    $('#dialog-lock').css('top', $(window).height() / 2 - $('#dialog-lock').height() / 2);
    $("#dialog-lock").show();
}

function showAddDialog(id) {
    setAddDialogData(id);
    $('#dialog-lock').css('left', $(window).width() / 2 - $('#dialog-lock').width() / 2);
    $('#dialog-lock').css('top', $(window).height() / 2 - $('#dialog-lock').height() / 2);
    $('#bodyHide').show();
    $("#dialog-lock").show();
}

function setAddDialogData(id) {
    switch (id) {
        case '1':
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            $("#dialog-title").empty();
            $('#dialog-title').html('New Account');
            $("#span-one").empty();
            $('#span-one').html('Account Name');
            $('#span-two').empty();
            $('#span-two').html('Password');
            $('#span-three').empty();
            $('#span-three').html('Confirm Password');
            $('#input-one').val('');
            $('#input-two').val('');
            $('#input-three').val('');
            $('#input-one').attr('placeholder', "Guest");
            $('#input-two').attr('placeholder', 'Optional');
            $('#input-three').attr("placeholder", "Optional");
            $('#input-one').removeAttr('type');
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
    }
}

function setLockDialogData(id) {
    switch (id) {
        case '1':
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            $("#dialog-title").empty();
            $('#dialog-title').html('Change');
            $("#span-one").empty();
            $('#span-one').html('Current PIN');
            $('#span-two').empty();
            $('#span-two').html('New PIN');
            $('#span-three').empty();
            $('#span-three').html('Confirm PIN');
            $('#input-one').val('');
            $('#input-two').val('');
            $('#input-three').val('');
            $('#input-one').attr('type', 'password');
            $('#input-one').removeAttr('placeholder');
            $('#input-two').removeAttr('placeholder');
            $('#input-three').removeAttr("placeholder");
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
    }
}


/*============Local Machine Account界面所有的功能逻辑 */

function addJob() {
    showAddJobDialog();
}

function addJobNext() {
    console.log($('#add-job-name').val());
    if ($('#add-job-name').val() == '') {
        $('#info-content').empty();
        $('#info-content').html('Connector Name must not be empty.');
        $('#dialog-info').css('left', $(window).width() / 2 - $('#dialog-info').width() / 2);
        $('#dialog-info').css('top', $(window).height() / 2 - $('#dialog-info').height() / 2);
        $('#dialog-info').show();
    } else {
        hideAddJobDialog();
    }
}

function addJobCancel() {
    hideAddJobDialog();
}

function jobSetting() {
    window.location.href = 'job-setting.html';
}

function protectionPwdSave() {
    hideEditJobDialog();
    hideProtectionPwdDialog();
}

function protectionPwdCancel() {
    hideEditJobDialog();
    hideProtectionPwdDialog();
}


function initJobSettingPageHtml() {
    var jsonStr = '{ "accounts" : [' +
        '{ "id":"usb" , "account":"USB" },' +
        '{ "id":"share-folder" , "account":"Share Folder(SMB/CIFS)" },' +
        '{ "id":"ftp-sftp" , "account":"FTP/SFTP/FTPS" },' +
        '{ "id":"mail-smtp" , "account":"Mail(SMTP)" },' +
        '{ "id":"pc-mobile" , "account":"Client PC/Mobile" }]}';
    var jsonObj;
    jsonObj = JSON.parse(jsonStr);
    console.log(jsonObj);
    console.log(jsonObj.accounts);
    console.log(jsonObj.accounts.length);
    var htmlStrs = '';
    for (i in jsonObj.accounts) {
        htmlStr =
            '<li id="' + jsonObj.accounts[i].id + '">' +
            '<div class="account-name" style="color:white;margin-left:150px;line-height:60px;" >' + jsonObj.accounts[i].account + '</div>' +
            '<img class="job-setting-toggle-btn" src="../../images/dialog_off_79x49.png" onclick="showDeleteDialog()">' +
            '<img class="job-setting-vline" src="../../images/devide_vline_20x77.png">' +
            '<img id="' + jsonObj.accounts[i].id + '"class="job-setting" src="../../images/job_setting.png">' +
            '<p>' +
            '<img class="list-devider" src="../../images/devide_line.png">' +
            '</li>';
        htmlStrs += htmlStr;
    }
    return htmlStrs;
}

function scanSetting() {
    window.location.href = 'scan-setting.html';
}

function xpmMetadata() {
    window.location.href = 'xpm-metadata.html';
}



function editJob() {
    if ($('#add-job-name').val() == '') {
        $('#info-content').empty();
        $('#info-content').html('Connector Name must not be empty.');
        $('#dialog-info').css('left', $(window).width() / 2 - $('#dialog-info').width() / 2);
        $('#dialog-info').css('top', $(window).height() / 2 - $('#dialog-info').height() / 2);
        $('#dialog-info').show();
    } else {
        hideEditJobDialog();
    }
}

function editJobCancel() {
    hideEditJobDialog();
}


/*=========通过javaScript类来封装某些方法==========*/
var htmlSwitch = {};

htmlSwitch.switch = function () {

}


/*=========使用工厂模式来创建js类==========*/
function jobSettingFun() {
    var jobSetting = new Object();
    jobSetting.setting = function () {
        $('#usb').click(
            function () {
                window.location.href = 'scan-setting-usb.html';
            }
        );

        $('#share-folder').click(
            function () {
                window.location.href = 'scan-share-folder.html';
            }
        );

        $('#ftp-sftp').click(
            function () {
                window.location.href = 'scan-ftp.html';
            }
        );

        $('#mail-smtp').click(
            function () {
                window.location.href = 'scan-mail.html';
            }
        );

        $('#pc-mobile').click(
            function () {
                window.location.href = 'scan-client.html';
            }
        );
    }
    return jobSetting;
}

function scanSettingFun() {
    var scanSetting = new Object();
    scanSetting.setting = function () {
        $('#watermark').click(
            function () {
                window.location.href = 'watermart.html';
            }
        );
    }
    return scanSetting;
}