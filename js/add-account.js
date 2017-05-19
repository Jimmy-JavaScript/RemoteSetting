
function getHtmlContent(id) {
    var html = "";
    switch (parseInt(id)){

        case Constants.ACCOUNTS_TYPE.SHAREPOINT:
            html = getSharePointHtml();
            break;
        case Constants.ACCOUNTS_TYPE.FTP:
            html = getFtpHtml();
            break;

    }

    return html;
}

function getSharePointHtml() {

    var html = "<div style=\"margin-top: 20px;height: auto\">"+
        "                    <div style=\"padding-left: 50px\">"+
        "                        <div style=\"width: 200px;text-align:start; line-height: 50px\"><span class=\"add-account-span\">主机</span></div>"+
        "                        <input type=\"text\"  class=\"add-account-input-keyboard\" style=\"width: 400px;\">"+
        "                        <img class=\"add-account-clear\" >"+
        "                    </div>"+
        "                    <img src=\"../images/devide_line.png\">"+
        "                </div>"+
        "                <div style=\"margin-top: 20px;height: auto\">"+
        "                    <div style=\"padding-left: 50px\">"+
        "                        <div style=\"width: 200px;text-align:start;line-height: 50px\"><span class=\"add-account-span\">安全類型</span></div>"+
        "                        <input type=\"text\"  class=\"add-account-input-menu add-account-input-ssl\"  readonly value=\"SSL\">"+
        "                    </div>"+
        "                    <img src=\"../images/devide_line.png\">"+
        "                </div>"+
        "                <div style=\"margin-top: 20px;height: auto\">"+
        "                    <div style=\"padding-left: 50px\">"+
        "                        <div style=\"width: 200px;text-align:start;line-height: 50px\"><span class=\"add-account-span\">端口</span></div>"+
        "                        <input type=\"text\"  class=\"add-account-input-keyboard\">"+
        "                        <img class=\"add-account-clear\" >"+
        "                    </div>"+
        "                    <img src=\"../images/devide_line.png\">"+
        "                </div>"+
        "                <div style=\"margin-top: 20px;height: auto\">"+
        "                    <div style=\"padding-left: 50px\">"+
        "                        <div style=\"width: 200px;text-align:start;line-height: 50px\"><span class=\"add-account-span\">用戶名</span></div>"+
        "                        <input type=\"text\"  class=\"add-account-input-keyboard\">"+
        "                        <img class=\"add-account-clear\" >"+
        "                    </div>"+
        "                    <img src=\"../images/devide_line.png\">"+
        "                </div>"+
        "                <div style=\"margin-top: 20px;height: auto\">"+
        "                    <div style=\"padding-left: 50px\">"+
        "                        <div style=\"width: 200px;text-align:start;line-height: 50px\"><span class=\"add-account-span\">密碼</span></div>"+
        "                        <input type=\"text\"  class=\"add-account-input-keyboard\">"+
        "                        <img class=\"add-account-clear\" >"+
        "                    </div>"+
        "                    <img src=\"../images/devide_line.png\">"+
        "                </div>";
    return html;

}

function getFtpHtml() {
    var html = "<div style=\"margin-top: 20px;height: auto\">"+
        "                <div style=\"padding-left: 50px\">"+
        "                    <div style=\"width: 200px;text-align:start; line-height: 50px\"><span class=\"add-account-span\">主机</span></div>"+
        "                    <input type=\"text\"  class=\"add-account-input-keyboard\" style=\"width: 400px;\">"+
        "                    <img class=\"add-account-clear\" >"+
        "                </div>"+
        "                <img src=\"../images/devide_line.png\">"+
        "            </div>"+
        "            <div style=\"margin-top: 20px;height: auto\">"+
        "                <div style=\"padding-left: 50px\">"+
        "                    <div style=\"width: 200px;text-align:start;line-height: 50px\"><span class=\"add-account-span\">協議</span></div>"+
        "                    <input id=\"select-ftp\" type=\"text\"  class=\"add-account-input-menu\"  readonly value=\"FTP\">"+
        "                </div>"+
        "                <img src=\"../images/devide_line.png\">"+
        "            </div>"+
        "            <div style=\"margin-top: 20px;height: auto\">"+
        "                <div style=\"padding-left: 50px\">"+
        "                    <div style=\"width: 200px;text-align:start;line-height: 50px\"><span class=\"add-account-span\">端口</span></div>"+
        "                    <input type=\"text\"  class=\"add-account-input-keyboard\" value=\"21\">"+
        "                    <img class=\"add-account-clear\" >"+
        "                </div>"+
        "                <img src=\"../images/devide_line.png\">"+
        "            </div>"+
        "            <div style=\"margin-top: 20px;height: auto\">"+
        "                <div style=\"padding-left: 50px\">"+
        "                    <div style=\"width: 200px;text-align:start;line-height: 50px\"><span class=\"add-account-span\">安全性</span></div>"+
        "                    <input id=\"select-security\" type=\"text\"  class=\"add-account-input-menu\" value=\"Plain\" readonly>"+
        "                </div>"+
        "                <img src=\"../images/devide_line.png\">"+
        "            </div>"+
        "            <div style=\"margin-top: 20px;height: auto\">"+
        "                <div style=\"padding-left: 50px\">"+
        "                    <div style=\"width: 200px;text-align:start;line-height: 50px\"><span class=\"add-account-span\">用戶名</span></div>"+
        "                    <input type=\"text\"  class=\"add-account-input-keyboard\">"+
        "                    <img class=\"add-account-clear\" >"+
        "                </div>"+
        "                <img src=\"../images/devide_line.png\">"+
        "            </div>"+
        "            <div style=\"margin-top: 20px;height: auto\">"+
        "                <div style=\"padding-left: 50px\">"+
        "                    <div style=\"width: 200px;text-align:start;line-height: 50px\"><span class=\"add-account-span\">密碼</span></div>"+
        "                    <input type=\"text\"  class=\"add-account-input-keyboard\">"+
        "                    <img class=\"add-account-clear\" >"+
        "                </div>"+
        "                <img src=\"../images/devide_line.png\">"+
        "            </div>";
    return html;

}

function initClickEvent() {
    $(".add-account-clear").click(function () {
        $(this).prev().val("");
    });

    $(".add-account-input-ssl").click(function () {
        var menu = $(this);
        nCommonSelect(null,['NONE','SSL'],function (r) {
            if(r){
                menu.val(r);
            }
        });

    });

    $("#select-ftp").click(function () {
        var menu = $(this);
        nCommonSelect(null,['FTP','SFTP'],function (r) {
            if(r){
                menu.val(r);
            }
        });

    });
    $("#select-security").click(function () {

        var menu = $(this);
        nCommonSelect(null,['Plain','FTPS'],function (r) {
            if(r){
                menu.val(r);
            }
        });

    })
}