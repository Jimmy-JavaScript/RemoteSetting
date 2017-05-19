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

function showDeleteDialog() {
    $('#bodyHide').show();
    //显示在屏幕中间
    $('#dialog-delete').css('left', $(window).width() / 2 - $('#dialog-delete').width() / 2);
    $('#dialog-delete').css('top', $(window).height() / 2 - $('#dialog-delete').height() / 2);
    $('#dialog-delete').show();
}


function showLockDialog() {
    setLockDialogData("4");
    $('#bodyHide').show();
    $('#dialog-lock').css('left', $(window).width() / 2 - $('#dialog-lock').width() / 2);
    $('#dialog-lock').css('top', $(window).height() / 2 - $('#dialog-lock').height() / 2);
    $("#dialog-lock").show();
}

function hideDialog() {
    $('#bodyHide').hide();
    $('#dialog-delete').hide();
    $('#dialog-lock').hide();
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

/*
 *在数据加载的时候显示Loading   
*/
var loadingDialog = {

    show: function () {

        var html =
            ' <div id="bodyHide">' +
            '    </div>' +
            '    <div id="loading" class="loading-dialog-bg">' +
            '        <img src="../images/spinner.gif" style="height:80px;width:80px;">' +
            '    </div>';
        $("body").append(html);
        $('#bodyHide').show();
        //显示在屏幕中间
        $('#loading').css('left', $(window).width() / 2 - $('#loading').width() / 2);
        $('#loading').css('top', $(window).height() / 2 - $('#loading').height() / 2);
        $('#loading').show();
    },

    hide: function () {
        $('#bodyHide').hide();
        $('#loading').hide();
    }

}