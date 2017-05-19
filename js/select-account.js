/**
 * Created by Cheryl on 2017/4/21.
 */
function getAccountsHtml(data) {
    if (!data) {
        return ""
    }
    var jsonObj;
    jsonObj = JSON.parse(data);
    var htmlStrs = '';
    for (var i in jsonObj.accounts) {
        htmlStr =
            '<li class="li-style" id="' + jsonObj.accounts[i].id + '">' +
            '                    <div class="li-left-div">' +
            '                        <img class="list-icon" src="../images/water_current.png">' +
            '                        <span class="account-name">' + jsonObj.accounts[i].account + '</span>' +
            '                    </div>' +
            '                    <div class="li-center-div">' +
            '                        <div>' +
            '                            <img class="list-lock" src="../images/pdf_security_off.png">' +
            '                        </div>' +
            '                    </div>' +
            '                    <div class="li-right-div">' +
            '                         <img class="list-delete" src="../images/delete.png">' +
            '                    </div>' +
            '                </li>';
        htmlStrs += htmlStr;
    }
    return htmlStrs;
}

function initClickEvent() {
    $(".list-delete").click(function () {
        var message =
            '<div style="width:60%;margin:0 auto;">' +
            "Do you really want to remove this account?Removing this account will delete all of it's messages,contacts and other data from the tablet!" +
            '</div>'
        nConfirm('Remove account', message, function (r) {
            if (r) {


            }
        })
    });


    $("#add-account").click(function () {
        switch (window.currentAccountTypeId) {
            case Constants.ACCOUNTS_TYPE.SHAREPOINT:
                window.location.href = "../page/add-account.html?" + Constants.ACCOUNT_TYPE_ID + "=" + Constants.ACCOUNTS_TYPE.SHAREPOINT;
                break;
            case Constants.ACCOUNTS_TYPE.FTP:
                window.location.href = "../page/add-account.html?" + Constants.ACCOUNT_TYPE_ID + "=" + Constants.ACCOUNTS_TYPE.FTP;
                break;
            case Constants.ACCOUNTS_TYPE.LOCAL_MACHINE:
                addMachineAccount('');
                break;
            default:
                break;
        }
    });

    $(".list-lock").click(function () {
        changePinDialog()
    });

    $(".account-name").click(function () {
        openSignInDialog($(this).text());

    })
}

function openSignInDialog(account) {
    var html = '<div  style="text-align: left; display: flex;flex-direction: column;">' +
        '        <div style="margin-left: 50px; ">' +
        '            <span style="width: 80px;float:left;">Account</span>' +
        '            <span style="margin-left: 30px" id="account"></span>' +
        '            <div style="width: 50px" ></div>' +
        '        </div>' +
        '        <div style="margin-left: 50px">' +
        '            <span style="width: 80px;float:left; vertical-align: middle">Password</span>' +
        '            <input style="margin-left:30px; width: 200px;vertical-align: middle;background: url(' + $.getProjectPath() +
        '/images/txt_box_keypad.png) no-repeat;background-size: 100% 100% ;outline: none" >' +
        '            <div id="clear-text" style="vertical-align: middle;display:inline-block;background: url(' + $.getProjectPath() +
        '/images/txt_clear.png) no-repeat;width: 50px;height: 50px;background-size: 100% 100% "></div>' +
        '        </div>' +
        '    </div>';
    nAlert("Sign in", html, function (r) {
        if (r) {
            window.location.href = "../page/select-job.html?" + Constants.ACCOUNT_TYPE_ID + "=" + window.currentAccountTypeId;
        }
    }, function () {
        $("#account").text(account);
        $("#clear-text").click(function () {
            $(this).prev().val("");
        })
    },{confirmBtnText:'confirm'})
}

function addMachineAccount(account) {
    var html =
        '<div class="dialog-lock-middle-list">' +
        '<span id="span-one">Account Name</span>' +
        '<img id="clear-name" class="dialog-lock-img">' +
        '<input id="input-one" class="dialog-lock-input" />' +
        '</div>' +
        '<div class="dialog-lock-middle-list">' +
        '<span id="span-two">Password</span>' +
        '<img id="clear-pwd" class="dialog-lock-img">' +
        '<input id="input-two" class="dialog-lock-input" type="password">' +
        '</div>' +
        '<div class="dialog-lock-middle-list">' +
        '<span id="span-three">Confirm Password</span>' +
        '<img id="clear-con-pwd" class="dialog-lock-img">' +
        '<input id="input-three" class="dialog-lock-input" type="password">' +
        '</div>';
    nConfirm("New Account", html, function (r) {
        if (r) {

        }
    }, function () {
        $('#input-one').val('');
        $('#input-two').val('');
        $('#input-three').val('');
        $('#input-one').attr('placeholder', "Guest");
        $('#input-two').attr('placeholder', 'Optional');
        $('#input-three').attr("placeholder", "Optional");
        $('#input-one').removeAttr('type');
        $("#clear-name").click(function () {
            $('#input-one').val('');
        })
        $("#clear-pwd").click(function () {
            $('#input-two').val('');
        })
        $("#clear-con-pwd").click(function () {
            $('#input-three').val('');
        })
    }, { confirmBtnText: "Save", cancelBtnText: "Cancel" })
}



function changePinDialog(account) {
    var html = '<div style="padding-top: 20px;text-align: left;padding-left: 80px" > ' +
        '                <span style="text-align: left" >Current PIN</span>' +
        '                <img class="dialog-lock-img">' +
        '                <input  style="margin-left: 30px" class="dialog-lock-input" />' +
        '            </div>' +
        '            <div style="padding-top: 20px;text-align: left;padding-left: 80px" >' +
        '                <span style="text-align: left">New PIN</span>' +
        '                <img class="dialog-lock-img">' +
        '                <input  style="margin-left: 30px" class="dialog-lock-input" type="password">' +
        '            </div>' +
        '            <div style="padding-top: 20px;text-align: left;padding-left: 80px" >' +
        '                <span style="text-align: left">Confirm PIN</span>' +
        '                <img class="dialog-lock-img">' +
        '                <input  style="margin-left: 30px" class="dialog-lock-input" type="password">' +
        '            </div>';
    nConfirm("Change", html, function (r) {
        if (r) {

        }
    }, function () {

        $(".dialog-lock-img").click(function () {
            $(this).next().val("");
        })

    })
}
