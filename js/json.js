
function initDataToHtml () {
    var jsonStr = '{ "accounts" : [' +
        '{ "id":"1" , "account":"A" },' +
        '{ "id":"2" , "account":"B" },' +
        '{ "id":"3" , "account":"C" },' +
        '{ "id":"4" , "account":"D" },' +
        '{ "id":"5" , "account":"E" },' +
        '{ "id":"6" , "account":"F" },' +
        '{ "id":"7" , "account":"G" },' +
        '{ "id":"8" , "account":"H" },' +
        '{ "id":"9" , "account":"I" },' +
        '{ "id":"10" , "account":"J" },' +
        '{ "id":"11" , "account":"K" },' +
        '{ "id":"12" , "account":"L" },' +
        '{ "id":"13" , "account":"M" },' +
        '{ "id":"14" , "account":"N" },' +
        '{ "id":"15" , "account":"0" },' +
        '{ "id":"16" , "account":"P" },' +
        '{ "id":"17" , "account":"Q" },' +
        '{ "id":"18" , "account":"R" },' +
        '{ "id":"19" , "account":"S" },' +
        '{ "id":"20" , "account":"T" },' +
        '{ "id":"21" , "account":"U" },' +
        '{ "id":"22" , "account":"V" },' +
        '{ "id":"23" , "account":"W" },' +
        '{ "id":"24" , "account":"X" },' +
        '{ "id":"25" , "account":"Y" },' +
        '{ "id":"26" , "account":"Z" } ]}';
    var jsonObj;
    jsonObj = JSON.parse(jsonStr);
    console.log(jsonObj);
    console.log(jsonObj.accounts);
    console.log(jsonObj.accounts.length);
    var htmlStrs = '';
    for (i in jsonObj.accounts) {
        htmlStr =
            '<li id="' + jsonObj.accounts[i].id + '">' +
            '<img class="list-icon" src="./images/water_current.png">' +
            '<div class="account-name" style="color:white;line-height:60px;" >' + jsonObj.accounts[i].account + '</div>' +
            '<img class="list-delete" src="./images/delete.png" onclick="showDeleteDialog()">' +
            '<img class="list-lock" src="./images/pdf_security_off.png" onclick="showLockDialog()">' +
            '<p>' +
            '<img class="list-devider" src="./images/devide_line.png">' +
            '</li>';
        htmlStrs += htmlStr;
    }
    return htmlStrs;
}


function initJobDataToHtml () {
    var jsonStr = '{ "accounts" : [' +
        '{ "id":"1" , "account":"A" },' +
        '{ "id":"2" , "account":"B" },' +
        '{ "id":"3" , "account":"C" },' +
        '{ "id":"4" , "account":"D" },' +
        '{ "id":"5" , "account":"E" },' +
        '{ "id":"6" , "account":"F" },' +
        '{ "id":"7" , "account":"G" }]}';
    var jsonObj;
    jsonObj = JSON.parse(jsonStr);
    console.log(jsonObj);
    console.log(jsonObj.accounts);
    console.log(jsonObj.accounts.length);
    var htmlStrs = '';
    for (i in jsonObj.accounts) {
        htmlStr =
            '<li id="' + jsonObj.accounts[i].id + '">' +
            '<img class="list-icon" src="../../images/water_current.png">' +
            '<div class="account-name" style="color:white;margin-left:300px;line-height:60px;" >' + jsonObj.accounts[i].account + '</div>' +
            '<img class="list-lock" src="../../images/delete.png" onclick="showDeleteJobDialog()">' +
            '<img class="list-delete" src="../../images/job_rename.png" onclick="showEditJobDialog()">' +
            '<img class="job-list-setting" src="../../images/job_setting.png" onclick="jobSetting()">' +
            '<img class="job-list-save-as" src="../../images/job_save.png" onclick="showSaveAsDialog()">' +
            '<p>' +
            '<img class="list-devider" src="../../images/devide_line.png">' +
            '</li>';
        htmlStrs += htmlStr;
    }
    return htmlStrs;
}


