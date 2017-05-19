/*============定义所有的页面的跳转============ */
function PageSwitch() {
    //跳转到Device Information页面
    this.deviceInformation = function () {
        window.location.href = 'device-information.html';
    };
    //跳转到Administrator Management页面
    this.administratorManagement = function () {
        window.location.href = 'administrator-management.html';
    }
    //跳转到Maintenance页面
    this.maintenance = function () {
        window.location.href = 'maintenance.html';
    }
}

/*===========Ethernet功能============ */
function Ethernet() {
    //本地连接打开和关闭
    this.ehernetSwitch = function () {
        $('#ethernet-switch').change(
            function () {
                if ($("#ethernet-switch").is(':checked')) {
                    $('#ethernet-status').empty();
                    $('#ethernet-status').html('Connected');
                    console.log('本地连接已经打开！');
                } else {
                    $('#ethernet-status').empty();
                    $('#ethernet-status').html('Disconnected');
                    console.log('本地连接关闭！');
                }
            });
        $('#check-net').click(
            function () {
                console.log('正在检测网络状况！');
            }
        );

    }
}

/*===========Ethernet功能============ */
function Wifi() {
    //Wifi连接打开和关闭
    this.wifiSwitch = function () {
        $('#wifi-switch').change(
            function () {
                if ($('#wifi-switch').is(':checked')) {
                    $('#wifi-status').empty();
                    $('#wifi-status').html('Connected');
                    console.log('Wifi已经打开！');
                } else {
                    $('#wifi-status').empty();
                    $('#wifi-status').html('Disconnected');
                    console.log('Wifi已经关闭！');
                }
            });
    }
    //热点的打开和关闭
    this.hotsPotSwitch = function () {
        $('#hotspot-switch').change(
            function () {
                if ($('#hotspot-switch').is(':checked')) {
                    $('#wifi-switch').prop("checked", false);
                    console.log('热点已经打开！');
                } else {
                    console.log('热点已经关闭！');
                }
            });
    }
}


/*===========Ethernet功能============ */
function Wifi() {
    //Wifi连接打开和关闭
    this.wifiSwitch = function () {
        $('#wifi-switch').change(
            function () {
                if ($('#wifi-switch').is(':checked')) {
                    $('#wifi-status').empty();
                    $('#wifi-status').html('Connected');
                    console.log('Wifi已经打开！');
                } else {
                    $('#wifi-status').empty();
                    $('#wifi-status').html('Disconnected');
                    console.log('Wifi已经关闭！');
                }
            });
    }
    //热点的打开和关闭
    this.hotsPotSwitch = function () {
        $('#hotspot-switch').change(
            function () {
                if ($('#hotspot-switch').is(':checked')) {
                    $('#wifi-switch').prop("checked", false);
                    console.log('热点已经打开！');
                } else {
                    console.log('热点已经关闭！');
                }
            });
    }
}


/*===========Language语言功能============ */
function Language() {
    //Wifi连接打开和关闭
    this.selectLanguage = function () {
        $('#language').click(
            function () {
                openLanguageDialog();
            }
        );
    }
}

function openLanguageDialog() {
    var jsonStr = '{ "language" : [' +
        '{ "id":"1" , "name":"简体中文" },' +
        '{ "id":"2" , "name":"繁體中文" },' +
        '{ "id":"3" , "name":"Nederlands" },' +
        '{ "id":"4" , "name":"English" },' +
        '{ "id":"5" , "name":"Français" },' +
        '{ "id":"6" , "name":"Deutsch" },' +
        '{ "id":"7" , "name":"Italiano" },' +
        '{ "id":"8" , "name":"日本語" },' +
        '{ "id":"9" , "name":"한국어" },' +
        '{ "id":"10" , "name":"Polski" },' +
        '{ "id":"11" , "name":"Português" },' +
        '{ "id":"12" , "name":"русский" },' +
        '{ "id":"13" , "name":"Elespañol" }]}';
    var jsonObj;
    jsonObj = JSON.parse(jsonStr);
    var htmlStrs = '<ul style="overflow-y:auto;overflow-x:hidden;height: 200px;margin: 0;padding:0;::-webkit-scrollbar{width:0px};">';
    for (i in jsonObj.language) {
        htmlStr =
            '<li style="height:40px;width:90%;max-width:90%;min-width:70%;margin:0 auto;">' +
            '<div style="color:white;margin-left:50px;line-height:30px;text-align:left;font-size:20px;">' +
            jsonObj.language[i].name +
            '<img id="' + jsonObj.language[i].id + '"  src="../../images/water_select_70x87.png" style="width:30px;height:35px;float:right;margin-right:20px;" onclick="selectLanguage(this)">' +
            '</div>' +
            '<div style="height:2px;width:100%;background:url(../../images/devide_line.png) no-repeat;background-size:100% 2px;"></div>' +
            ' </li>';
        htmlStrs += htmlStr;
    }
    htmlStrs = htmlStrs + '</ul>';
    console.log(htmlStrs);
    nConfirm("Language", htmlStrs, function () {

    }, function () {
        $(".add-job-img").click(function () {
            $(this).siblings("input").val("");
        })
    }, { confirmBtnText: "Save", cancelBtnText: "Cancel", contentAlign: "left" })
}


function selectLanguage(e) {
    console.log(e);
    var id = e.getAttribute("id");
    console.log(id);
    switch (id) {
        case '1':
            alert('简体中文');
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;
        case 13:
            break;
        default:
            break;
    }
}


/*===========Calibration打印功能============ */
function Calibration() {
    //Wifi连接打开和关闭
    this.calibration = function () {
        $('#calibration').click(
            function () {
                openCalibrationDialog();
            }
        );
    }
}

function openCalibrationDialog() {
    var htmlStr =
        '<span style="font-size: 15px;text-align: center;margin:0 auto;">' +
        'Insert a calibration sheet into the ADF input tray and press "Start".' +
        '</span>' +
        '<div>' +
        '<img src="../../images/calibration.png" style="height:300px;width:300px;">' +
        '</div>';
    nConfirm("Calibration", htmlStr, function () {

    }, null, { confirmBtnText: "Start", cancelBtnText: "Cancel" })
}


/*===========Update更新功能============ */
function Update() {
    //Wifi连接打开和关闭
    this.update = function () {
        $('#update').click(
            function () {
                updateData();
            }
        );
    }
}

function updateData() {
    console.log('正在更新...');
}

/*===========UpdateUsb============ */
function ExportUsb() {
    this.exportUsb = function () {
        $('#export-usb').click(
            function () {
                exportDateToUsb();
            }
        );
    }
}

function exportDateToUsb() {
    console.log(2);
    var htmlStr =
        '<span style="font-size: 15px;text-align: center;margin:0 auto;">' +
        'Processing,Please wait...' +
        '</span>' +
        '<div>' +
        '<img src="../../images/spinner.gif" style="height:150px;width:150px;">' +
        '</div>';
    nConfirm("Export Settings", htmlStr, function () {

    }, null, { confirmBtnText: "Start", cancelBtnText: "Cancel" })
}


/*===========ImportUsb============ */
function ImportUsb() {
    this.importUsb = function () {
        $('#import-usb').click(
            function () {
                importDateToUsb();
            }
        );
    }
}

function importDateToUsb() {
    var htmlStr =
        '<div style="width:70%;margin:0 auto;">' +
        'The setting file was not found' +
        '</div>'
    nAlert("Import Settings", htmlStr, function () {

    }, null, { confirmBtnText: "Cancel" })
}


/*===========Clear All Settings=========== */
function ClearAllSettings() {
    this.clearAllSettings = function () {
        $('#clear-all').click(
            function () {
                clearAll();
            }
        );
    }
}

function clearAll() {
    var htmlStr = '<div style="width:70%;margin:0 auto;">' +
        'You are about to reset all user data and logs.All Settings will need to be reconfigured.Are you sure you want to proceed?' +
        '</div>'
    nConfirm("Message", htmlStr, function () {

    }, null, { confirmBtnText: "OK", cancelBtnText: "Cancel" })
}


/*===========Export Log=========== */
function ExportLog() {
    this.exportLog = function () {
        $('#export-log').click(
            function () {
                console.log('1');
                exportLogs();
            }
        );
    }
}

function exportLogs() {
    console.log('2');
    var htmlStr = '<div style="width:70%;margin:0 auto;">' +
        'USB not found,Please try again.' +
        '</div>'
    nConfirm("Export Log", htmlStr, function () {

    }, null, { confirmBtnText: "OK", cancelBtnText: "Cancel" })
}

/**********************************Administrator Management********************************/

/*===========Configurations功能============ */
function Confuguration() {
    //
    this.config = function () {
        $('#config-switch').change(
            function () {
                if ($('#config-switch').is(':checked')) {
                    alert('Configuration打开！');
                } else {
                    alert('Configuration关闭');
                }
            });
    }
}

/*===========System Settings功能============ */
function SystemSettings() {
    //
    this.sysSettings = function () {
        $('#sys-setting-switch').change(
            function () {
                if ($('#sys-setting-switch').is(':checked')) {
                    console.log('System Sttings打开！');
                } else {
                    console.log('System关闭');
                }
            });
    }
}

/*===========Add Account功能============ */
function AddAccount() {
    //
    this.addAcc = function () {
        $('#add-acc-switch').change(
            function () {
                if ($('#add-acc-switch').is(':checked')) {
                    console.log('Configuration打开！');
                } else {
                    console.log('Configuration关闭');
                }
            });
    }
}

/*===========Admin Name功能============ */
function AdminName() {
    //
    this.admName = function () {
        $('#clear-name').click(
            function () {
                $('#admin-name').val('');
            });
    }
}

/*===========Password功能============ */
function Password() {
    //
    this.pwd = function () {
        $('#clear-pwd').click(
            function () {
                $('#pwd').val('');
            });
    }
}

/*===========Confirm功能============ */
function Confirm() {
    //
    this.confirm = function () {
        $('#clear-confirm').click(
            function () {
                $('#confirm').val('');
            });
    }
}

/*===========Question功能============ */
function Question() {
    //
    this.question = function () {
        $('#clear-que').click(
            function () {
                $('#question').val('');
            });
    }
}

/*===========Answer功能============ */
function Answer() {
    //
    this.ans = function () {
        $('#clear-ans').click(
            function () {
                $('#answer').val('');
            });
    }
}

/**********************************Device Information********************************/

/*===========Device Name功能============ */
function DeviceName() {
    //
    this.devName = function () {
        $('#clear-dev-name').click(
            function () {
               $('#dev-name').val('');
            });
    }
}