function initScanSetting(jsonData) {
    
    if (window.localStorage) {
        var xmpMetadataJsonStr = JSON.stringify(jsonData.XmpMetadata);
        var fileNameJsonStr = JSON.stringify(jsonData.FileName);
        var waterMarkJsonStr = JSON.stringify(jsonData.Watermark);
        sessionStorage.setItem('xmpMetadataJsonStr',xmpMetadataJsonStr);
        sessionStorage.setItem('fileNameJsonStr',fileNameJsonStr);
        sessionStorage.setItem('waterMarkJsonStr',waterMarkJsonStr);
        console.log('xmpMetadataJsonStr数据：' + xmpMetadataJsonStr);
        console.log('FileNameJsonStr数据：' + fileNameJsonStr);
        console.log('WaterMarkJsonStr数据：' + waterMarkJsonStr);   
    }
    else {
        alert("浏览暂不支持localStorage")
    }

    if (jsonData.Preview == true) {
        $('#switch1').attr("checked", true);
    } else {
        $('#switch1').attr("checked", false);
    }

    if (jsonData.FileName.Selectable == true) {
        $('#check').attr("checked", true);
    } else {
        $('#check').attr("checked", false);
    }

    var fileName = '';

    fileName = jsonData.FileName.Settings.Prefix.Value;

    switch(jsonData.FileName.Settings.Date.Value){
        case 0:
            fileName += '_YYYYMMDD';
            break;
        case 1:
            fileName += '_MMDDYYYY';
            break;
        case 2:
            fileName += '_DDMMYYYY';
            break;
        default:
            break;        
    }

    switch(jsonData.FileName.Settings.Time.Value){
        case 0:
            fileName += '_HHMMSS';
            break;
        case 1:
            fileName += '_HHMM';
        default:
            break;
    }

    switch(jsonData.FileName.Settings.SerialNumber.Value){
        case 0:
            fileName += '_01-99';
            break;
        case 1:
            fileName += '_001-999';
            break;
        case 2:
            fileName += '_0001-9999';
            break;
        case 3:
            fileName += '_00001-99999';
            break;
        case 4:
            fileName += '_000001-999999';
            break;    
        default:
            break;
    }

    $('#file-name').text(fileName);

    if (jsonData.ScanMode.Selectable == true) {
        $('#check1').attr("checked", true);
    } else {
        $('#check1').attr("checked", false);
    }
    switch(jsonData.ScanMode.Value){
        case 0:
            $('#scan-mode').text('Simplex');
            break;
        case 1:
            $('#scan-mode').text('Duplex');
            break;
        default:
            break;

    }

    if (jsonData.ColorMode.Selectable == true) {
        $('#check2').attr("checked", true);
    } else {
        $('#check2').attr("checked", false);
    }
    switch(jsonData.ColorMode.Value){
        case 0:
            $('#color-mode').text('Color');
            break;
        case 1:
            $('#color-mode').text('Gray');
            break;
        case 2:
            $('#color-mode').text('Black & White');
            break;
        default:
            break;
    }

    if (jsonData.Quality.Selectable == true) {
        $('#check3').attr("checked", true);
    } else {
        $('#check3').attr("checked", false);
    }
    switch(jsonData.Quality.Value){
        case 0:
            $('#quality').text('100dpi');
            break;
        case 1:
            $('#quality').text('200dpi');
            break;
        case 2:
            $('#quality').text('300dpi');
            break;
        case 3:
            $('#quality').text('400dpi');
            break;
        case 4:
            $('#quality').text('600dpi');
            break;
        default:
            break;        
    }
    

    if (jsonData.Size.Selectable == true) {
        $('#check4').attr("checked", true);
    } else {
        $('#check4').attr("checked", false);
    }
    switch(jsonData.Size.Value){
        case 0:
             $('#size').text('Auto(8.5"x 12.5"Max.)');
            break;
        case 1:
            $('#size').text('A4');
            break;
        case 2:
            $('#size').text('A5');
            break;
        case 3:
            $('#size').text('B5');
            break;
        case 4:
            $('#size').text('Letter(8.5"x11")');
            break;
        case 5:
            $('#size').text('Legal(8.5"x14")');
            break;
        case 6:
            $('#size').text('Invoice(5.5"x8.5")');
            break;
        case 7:
            $('#size').text('Oficio(8.5"x13")');
            break;
        case 8:
            $('#size').text('Long Paper(21cmx41cm)');
            break;
        case 9:
            $('#size').text('Long Paper(8.5"x 33"Max.)');
            break;
        case 10:
            $('#size').text('Custom Size(8.26"x11.69")');
            break;
        default:
            break;
    }
   

    if (jsonData.Format.Selectable == true) {
        $('#check5').attr("checked", true);
    } else {
        $('#check5').attr("checked", false);
    }
    switch(jsonData.Format.Type){
        case 0:
             $('#value-format').text('JPG');
            break;
        case 1:
            $('#value-format').text('PDF');
            break;
        case 2:
            $('#value-format').text('Multi-Page PDF');
            break;
        case 3:
            $('#value-format').text('TIFF');
            break;
        case 4:
            $('#value-format').text('Multi-Page TIFF');
            break;
        case 5:
            $('#value-format').text('PNG');
            break;
        default:
            break;
    }
    

    if (jsonData.CompressLevel.Selectable == true) {
        $('#check6').attr("checked", true);
    } else {
        $('#check6').attr("checked", false);
    }

    $('#compress-level-value').text(jsonData.CompressLevel.Value);
    $('#range-compress-level').val(jsonData.CompressLevel.Value);

    if (jsonData.Brightness.Selectable == true) {
        $('#check7').attr("checked", true);
    } else {
        $('#check7').attr("checked", false);
    }

    $('#brightness-value').text(jsonData.Brightness.Value);
    $('#range-brightness').val(jsonData.Brightness.Value);


    if (jsonData.Contrast.Selectable == true) {
        $('#check8').attr("checked", true);
    } else {
        $('#check8').attr("checked", false);
    }

    $('#contrast-value').text(jsonData.Contrast.Value);
    $('#range-contrast').val(jsonData.Contrast.Value);

    if (jsonData.Watermark.Enable == true) {
        $('#switch').attr("checked", true);
    } else {
        $('#switch').attr("checked", false);
    }

    if (jsonData.Watermark.Selectable == true) {
        $('#check9').attr("checked", true);
    } else {
        $('#check9').attr("checked", false);
    }

    $('#watermark').text(jsonData.Watermark.Settings.Text);

    if (jsonData.SplitPdfTiff.Selectable == true) {
        $('#check10').attr("checked", true);
    } else {
        $('#check10').attr("checked", false);
    }

    if (jsonData.PunchHoleRemoval.Selectable == true) {
        $('#check11').attr("checked", true);
    } else {
        $('#check11').attr("checked", false);
    }

    if (jsonData.PunchHoleRemoval.Enable == true) {
        $('#switch2').attr("checked", true);
    } else {
        $('#switch2').attr("checked", false);
    }

    if (jsonData.BlankPageRemoval.Selectable == true) {
        $('#check12').attr("checked", true);
    } else {
        $('#check12').attr("checked", false);
    }

    if (jsonData.BlankPageRemoval.Enable == true) {
        $('#switch3').attr("checked", true);
    } else {
        $('#switch3').attr("checked", false);
    }
    $('#value-blank-page').text(jsonData.BlankPageRemoval.Value);
    $('#range-blank-page').val(jsonData.BlankPageRemoval.Value);

    if (jsonData.FillEdges.Selectable == true) {
        $('#check13').attr("checked", true);
    } else {
        $('#check13').attr("checked", false);
    }

    if (jsonData.FillEdges.Enable == true) {
        $('#switch3').attr("checked", true);
    } else {
        $('#switch3').attr("checked", false);
    }
    $('#value-fill-edges').text(jsonData.FillEdges.Value);
    $('#range-fill-edge').val(jsonData.FillEdges.Value);

    if (jsonData.MergeSplit.Selectable == true) {
        $('#check14').attr("checked", true);
    } else {
        $('#check14').attr("checked", false);
    }
    switch(jsonData.MergeSplit.Value){
        case 0:
            $('#value-merge').text('Disable');
            break;
        case 1:
            $('#value-merge').text('Merge on the long ends');
            break;
        case 2:
            $('#value-merge').text('Merge on the short ends');
            break;
        case 3:
            $('#value-merge').text('Split from the long ends');
            break;
        case 4:
            $('#value-merge').text('Custom Split');
            break;
        default:
            break;
    }

    if (jsonData.XmpMetadata.Selectable == true) {
        $('#check15').attr("checked", true);
    } else {
        $('#check15').attr("checked", false);
    }

    loadingDialog.hide();
}


function xpmMetadata() {
    window.location.href = 'scan-setting/xmp-metadata.html';
}

function initClick() {

    $('#split').click(
        function () {
            openSplitDialog($.trim($(this).text()));
        }
    );

    $('#file-name').click(
        function () {
            window.location.href = 'scan-setting/filename.html';
            console.log('1');
        }
    );

    $('#watermark').click(
        function () {
            window.location.href = 'scan-setting/watermark.html';
        }
    );

    $("#scan-mode").click(function () {

        var selected = $.trim($(this).text());
        nSelectWithRound("Scan Mode", ["Simplex", "Duplex"], function (r) {
            $("#scan-mode").text(r);
        }, selected);
    });

    $("#color-mode").click(function () {

        var selected = $.trim($(this).text());
        nSelectWithRound("Color Mode", ["Color", "Gray", "Black & White"], function (r) {
            $("#color-mode").text(r);
        }, selected);
    });

    $("#quality").click(function () {
        var dpis = ["100dpi", "200dpi", "300dpi", "400dpi", "600dpi"];

        var selected = $.trim($(this).text());
        nSelectWithRound("Quality", dpis, function (r) {
            $("#quality").text(r);
        }, selected);
    });

    $("#size").click(function () {
        var sizes = ["Auto (8.5\"x 12.5\"Max.)", "A4", "A5", "B5", "Letter(8.5\"x11\")", "Legal(8.5\"x14\")", "Invoice(5.5\"x8.5\")",
            "Oficio(8.5\"x13\")", "Long Paper(21cmx41cm)", "Long Paper(8.5\"x33\"Max.)", "Custom Size(8.27\"x16.14\")",];

        var selected = $.trim($(this).text());
        nSelectWithRound("Size", sizes, function (r) {
            $("#size").text(r);
        }, selected);
    });

    $('#range-compress-level').RangeSlider({
        min: 0, max: 100, step: 1, callback: function ($input) {
            $("#compress-level-value").text($('#range-compress-level').val());
        }
    });

    $('#range-brightness').RangeSlider({
        min: -100, max: 100, step: 1, callback: function ($input) {
            $("#brightness-value").text($('#range-brightness').val());
        }
    });

    $('#range-contrast').RangeSlider({
        min: -100, max: 100, step: 1, callback: function ($input) {
            $("#contrast-value").text($('#range-contrast').val());
        }
    });

    $('#range-blank-page').RangeSlider({
        min: 0, max: 15, step: 1, callback: function ($input) {
            $("#value-blank-page").text($('#range-blank-page').val());
        }
    });

    $('#range-fill-edge').RangeSlider({
        min: 1, max: 20, step: 1, callback: function ($input) {
            $("#value-fill-edges").text($('#range-fill-edge').val());
        }
    });

    $("#value-format").click(function () {
        openFormatDialog($.trim($(this).text()));
    });

    $("#value-merge").click(function () {
        openMergeSplitDialog($.trim($(this).text()));
    })

}

function openSplitDialog(selected) {
    var html =
        '<div style="overflow-y: auto;height:350px;display: flex;flex-direction: column;margin-left: 2%;margin-right: 2%">' +
        '        <div style="cursor: pointer;text-align: left;padding-left: 50px;">' +
        '            <span class="split-span" style="width:50px;text-align:left;display:inline-block">Disable</span>' +
        '            <img class="round" select1="0" src="../images/water_select_70x87.png" style="width:50px;height:50px;float:right;margin-right:5%;">' +
        '        </div>' +
        '            <img style="width: 100%;height:3px;" src="../images/devide_line.png">' +
        '        <div  style="cursor: pointer;text-align: left;padding-left: 50px;">' +
        '            <div>' +
        '                <span class="split-span" style="width:100px;text-align:left;display:inline-block">Barcode</span>' +
        '                <span id="split-barcode" style="display:inline-block;margin-left:10%;">UPCE</span>' +
        '                <img class="round" select1="0" src="../images/water_select_70x87.png" style="width:50px;height:50px;float:right;margin-right:5%;margin-top:2px;">' +
        '                <img id="arrow-next-1" src="../images/arrow_next.png" style="height:35px;width:35px;margin-right:300px;float:right;margin-top:10px;">' +
        '            </div>' +
        '            <div style="margin-top:10px;">' +
        '                <span style="width:100px;text-align:left;display:inline-block">Position</span>' +
        '                <span id="split-position" style="margin-left:10%;display:inline-block;">Upper-Right</span>' +
        '                <img id="arrow-next-2" src="../images/arrow_next.png" style="height:35px;width:35px;margin-right:410px;float:right;margin-top:10px;">' +
        '            </div>' +
        '            <div style="margin-top:10px;">' +
        '                <span style="width:100px;text-align:right;display:inline-block">Filter</span>' +
        '                <span id="split-filter" style="margin-left:10%;display:inline-block;">UPCE</span>' +
        '                <img id="arrow-next-3"   src="../images/arrow_next.png" style="height:35px;width:35px;margin-right:410px;float:right;margin-top:10px;">' +
        '            </div>' +
        '        </div>' +
        '            <img style=\'width: 100%\' src=\'../images/devide_line.png\'>' +
        '        <div  style=\'cursor: pointer;text-align: left;padding-left: 50px;\'>' +
        '            <span class="split-span">Blank Page</span>' +
        '            <img class="round" select1="0" src="../images/water_select_70x87.png" style="width:50px;height:50px;float:right;margin-right:5%;">' +
        '        </div>' +
        '            <img style=\'width: 100%\' src=\'../images/devide_line.png\'>' +
        '        <div  style=\'cursor: pointer;text-align: left;padding-left: 50px;\'>' +
        '            <span id="split-every" class="split-span">Every "n" Pages:10</span>' +
        '            <img class="round" select1="0" src="../images/water_select_70x87.png" style="width:50px;height:50px;float:right;margin-right:5%;">' +
        '            <div style="width:auto;height:60px;width:350px;text-align:center;margin:0 auto;">' +
        '                <span style="float:left;color:white;line-height:60px;">2</span>' +
        '                <input id="seekbar" disabled="disabled" style="float:left;display:table-cell; vertical-align:middle;margin-top:25px;" type="range" max="20" min="2">' +
        '                <span style="float:left;color:white;line-height:60px;">20</span>' +
        '            </div>' +
        '        </div>' +
        '            <img style=\'width: 100%\' src=\'../images/devide_line.png\'>' +
        '    </div>';

    var dialog = Object.create($.alerts);

    dialog.alert("Split PDF/TIFF", html, function (r) {
        if (r) {
            $(".round").each(function () {
                if ($(this).attr("select1") == "1") {
                    var text = $(this).siblings().filter("span").eq(0).text();
                    $("#split").text(text)
                }

            });
        }

    }, function () {
        $(".split-span").each(function () {
            var spanText = $(this).text();
            if (spanText == selected) {

                $(this).siblings().filter(".round").eq(0).attr("src", "../images/water_current.png");
                $(this).siblings().filter(".round").eq(0).attr("select1", "1");
            }
        });

        $('#arrow-next-1').click(
            function () {
                barcodeDialog();
            }
        );

        $('#arrow-next-2').click(
            function () {
                postionDialog();
            }
        );

        $('#arrow-next-3').click(
            function () {
                filterDialog();
            }
        );

        $(".round").click(function () {
            $(".round").each(function (i, val) {
                if ($(this).attr("select1") == "1") {
                    $(this).attr("select1", "0");
                    $(this).attr("src", "../images/water_select_70x87.png");
                    if (i == 3) {
                        $(this).siblings().filter("div").children().filter("input").attr("disabled", "disabled");
                    }
                }
            });
            $(this).siblings().filter("div").children().filter("input").removeAttr("disabled");
            $(this).attr("select1", 1);
            $(this).attr("src", "../images/water_current.png");
        });

        $('#seekbar').RangeSlider({
            min: 2, max: 20, step: 1, callback: function ($input) {
                $("#split-every").text('Every "n" Pages:' + $('#seekbar').val());
            }
        });
    }, { confirmBtnText: "OK" })


}

function openFormatDialog(selected) {
    var html = '<div class="scan-setting-format-container">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="scan-setting-format-span">JPG</span>' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="scan-setting-format-span">PDF</span>' +
        '            <img class="pdf" style="margin-left:40%;vertical-align: middle;width: 60px;height: 50px" src="../images/pdfa_off_110x77.png">' +
        '            <img class="pdf" style="vertical-align: middle;width: 50px;height: 50px" src="../images/pdf_security_off_60x77.png">' +
        '            <img style="vertical-align: middle;width: 5px;height: 50px" src="../images/devide_vline_20x77.png">' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="scan-setting-format-span">Multi-Page PDF</span>' +
        '            <img class="pdf" style="margin-left: 40%;vertical-align: middle;width: 60px;height: 50px" src="../images/pdfa_off_110x77.png">' +
        '            <img class="pdf" style="vertical-align: middle;width: 50px;height: 50px" src="../images/pdf_security_off_60x77.png">' +
        '            <img style="vertical-align: middle;width: 5px;height: 50px" src="../images/devide_vline_20x77.png">' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="scan-setting-format-span">TIFF</span>' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="scan-setting-format-span">Multi-page TIFF</span>' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '        <div  style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="scan-setting-format-span">PNG</span>' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '    </div>';

    var dialog = Object.create($.alerts);

    dialog.confirm("Format", html, function (r) {
        if (r) {
            $(".round").each(function () {
                if ($(this).attr("selected1") == "1") {
                    var text = $(this).siblings().filter("span").eq(0).text();
                    $("#value-format").text(text)
                }

            });
        }

    }, function () {
        $(".scan-setting-format-span").each(function () {
            var spanText = $(this).text();

            if (spanText == selected) {
                $(this).siblings().filter(".right-round").eq(0).addClass("right-round-selected");
                $(this).siblings().filter(".right-round").eq(0).attr("selected1", "1");
            }
        });

        $(".round").click(function () {
            $(".round").each(function () {
                if ($(this).attr("selected1") == "1") {
                    $(this).attr("selected1", "0");
                    $(this).css({ backgroundImage: 'url("' + $.getProjectPath() + '/images/water_select_70x87.png")' })
                }

            });
            $(this).attr("selected1", 1);
            $(this).css({ backgroundImage: 'url("' + $.getProjectPath() + '/images/water_current.png")' })
        });

        $(".pdf").click(function () {
            if ($(this).siblings().filter(".round").eq(0).attr("selected1") == "1") {
                openPdfDialog();
            }
        })

    }, { confirmBtnText: "Save", cancelBtnText: "Cancel" })
}

function openPdfDialog() {

    var html = '<div style="display: flex;flex-direction: column;height: 400px;overflow-y: auto;margin-left: 2%;margin-right: 2%;padding-right: 1%">' +
        '        <div style="text-align: left;margin-left: 20px">' +
        '            <span class="pdf-span" >PDF/A</span>' +
        '            <input id="switch-pdf" type="checkbox" class="input-switch"  >' +
        '            <label style="float: right;margin-top: 15px;margin-right: 30px" for="switch-pdf"></label>' +
        '        </div>' +
        '        <img style="width: 100%" src="../images/devide_line.png">' +
        '        <div id="div-encryption">' +
        '            <div style="text-align: left;margin-left: 20px">' +
        '                <span class="pdf-span">Encryption</span>' +
        '                <input style="float: right" id="switch-encryption" type="checkbox" class="input-switch"  >' +
        '                <label style="float: right;margin-top: 15px;margin-right: 30px" for="switch-encryption"></label>' +
        '            </div>' +
        '            <div class="pdf-item-div">' +
        '                <span class="pdf-span" style="margin-left: 70px">Open Document</span>' +
        '                <input id="check-open-document" type="checkbox" class="input-checkbox" style="float: right" >' +
        '                <label style="float: right" for="check-open-document"></label>' +
        '            </div>' +
        '            <div class="pdf-item-div">' +
        '                <span class="pdf-span" style="margin-left: 90px">Password</span>' +
        '                <input type="text" class="input-keyboard">' +
        '            </div>' +
        '            <div class="pdf-item-div">' +
        '                <span class="pdf-span " style="margin-left: 90px">Confirm</span>' +
        '                <input type="text" class="input-keyboard">' +
        '            </div>' +
        '            <div class="pdf-item-div">' +
        '                <span class="pdf-span" style="margin-left: 70px">Change Document</span>' +
        '                <input id="check-change-document" type="checkbox" class="input-checkbox" style="float: right" >' +
        '                <label style="float: right" for="check-change-document"></label>' +
        '            </div>' +
        '            <div class="pdf-item-div">' +
        '                <span class="pdf-span" style="margin-left: 90px">Password</span>' +
        '                <input type="text" class="input-keyboard">' +
        '            </div>' +
        '            <div class="pdf-item-div">' +
        '                <span class="pdf-span" style="margin-left: 90px">Confirm</span>' +
        '                <input type="text" class="input-keyboard">' +
        '            </div>' +
        '            <div class="pdf-item-div">' +
        '                <span class="pdf-span" style="margin-left: 90px">Allow Print</span>' +
        '                <input id="check-allow-print" type="checkbox" class="input-checkbox" style="float: right" >' +
        '                <label style="float: right" for="check-allow-print"></label>' +
        '            </div>' +
        '            <div class="pdf-item-div">' +
        '                <span class="pdf-span" style="margin-left: 90px">Allow Edit</span>' +
        '                <input id="check-allow-edit" type="checkbox" class="input-checkbox" style="float: right" >' +
        '                <label style="float: right" for="check-allow-edit"></label>' +
        '            </div>' +
        '            <div class="pdf-item-div">' +
        '                <span class="pdf-span" style="margin-left: 90px">Allow Copy</span>' +
        '                <input id="check-allow-copy" type="checkbox" class="input-checkbox" style="float: right" >' +
        '                <label style="float: right" for="check-allow-copy"></label>' +
        '            </div>' +
        '        </div>' +
        '    </div>';
    nConfirm("PDF", html, function (r) {
        if (r) {

        }

    }, function () {
        // $("#switch-pdf").attr("checked",false);
        $("#switch-pdf").next().click(function () {
            if ($("#switch-pdf").prop('checked')) {
                $("#div-encryption").css({ visibility: "visible" })
            } else {
                $("#div-encryption").css({ visibility: "hidden" })
            }
        });
    }, { confirmBtnText: "Save", cancelBtnText: "Cancel" })
}





function openMergeSplitDialog(selected) {

    var html = '<div class="merge-container">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="merge-span">Disable</span>' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="merge-span">Merge on the long ends</span>' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="merge-span">Merge on the short ends</span>' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="merge-span">Split from the long ends</span>' +
        '            <div selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '        <div style="text-align: left;vertical-align: middle;padding-left: 30px;">' +
        '            <span class="merge-span">Custom Split</span>' +
        '            <img style="margin-left:20%;vertical-align: middle;width: 60px;height: 50px"  src="../images/custom_split_100x77.png">' +
        '            <span style="margin-left: 10px">H</span>' +
        '            <input class="number-input" step="1" type="number" min="1" max="12" style="padding: 3px;margin-left: 10px;display: inline-block;width: 40px;height: 40px"  >' +
        '            <span style="margin-left: 10px">V</span>' +
        '            <input class="number-input" type="number"  step="1" min="1" max="12" style="padding: 3px;margin-left: 10px;display: inline-block;width: 40px;height: 40px"  >' +
        '            <div id="custom-merge" selected1 = "0" class="right-round round"></div>' +
        '        </div>' +
        '        <img style=\'width: 100%\' src= "../images/devide_line.png">' +
        '    </div>';

    nConfirm("Merge/Split", html, function (r) {
        if (r) {
            $(".round").each(function () {
                if ($(this).attr("selected1") == "1") {
                    var text = $(this).siblings().filter("span").eq(0).text();
                    $("#value-merge").text(text);
                }
            });
        }

    }, function () {

        $(".merge-span").each(function () {
            var spanText = $(this).text();

            if (spanText == selected) {
                $(this).siblings().filter(".right-round").eq(0).addClass("right-round-selected");
                $(this).siblings().filter(".right-round").eq(0).attr("selected1", "1");
                if ($("#custom-merge").attr("selected1") == 1) {
                    $("#custom-merge").parent().find("input").attr("readonly", false)
                } else {
                    $("#custom-merge").parent().find("input").attr("readonly", true)
                }
            }
        });

        $(".round").click(function () {
            $(".round").each(function () {
                if ($(this).attr("selected1") == "1") {
                    $(this).attr("selected1", "0");
                    $(this).css({ backgroundImage: 'url("' + $.getProjectPath() + '/images/water_select_70x87.png")' })
                }

            });
            $(this).attr("selected1", 1);
            $(this).css({ backgroundImage: 'url("' + $.getProjectPath() + '/images/water_current.png")' });
            if ($("#custom-merge").attr("selected1") == 1) {
                $("#custom-merge").parent().find("input").attr("readonly", false)
            } else {
                $("#custom-merge").parent().find("input").attr("readonly", true)
            }
        });

        $(".number-input").keyup(function () {
            var val = parseInt($(this).val());
            if (val > 12) {
                $(this).val(12)
            }
            if (val < 1) {
                $(this).val(1)
            }
        })


    }, { confirmBtnText: "OK", cancelBtnText: "Cancel" })

}


function barcodeDialog() {
    var data = ['CODE39', 'CODABAR(NW-7)', 'CODE128', 'ITF20f5(ITF25)', 'QR CODE', 'CODE93', 'EAN13', 'EAN8', 'UPCA', 'UPCE', 'PDF417', 'DATA_MATRIX', 'AUTO(1D)'];
    nCommonSelect('Code Type', data, function (d) {
        $('#split-barcode').html(d);
    });
}

function postionDialog() {
    var data = ['Upper-Right', 'Upper-Middle', 'Upper-Left', 'Full Page'];
    nCommonSelect('Code Type', data, function (d) {
        $('#split-position').html(d);
    });
}


function filterDialog() {
    var html =
        '<div style="height:100px;display:block;margin-top:20px;">' +
        '<div id="span-one" style="float:left;margin-left:40px;font-size:25px;">Include</div>' +
        '<input id="include" class="input-short" />' +
        '<img id="clear-include" src="../images/txt_clear.png" style="height:50px;width:50px;float:left;margin-left:10px;">' +
        '</div>' +
        '<div style="height:100px;display:block;">' +
        '<div style="float:left;font-size:25px;margin-left:40px;">Exclude</div>' +
        '<input id="exclude" class="input-short" />' +
        '<img id="clear-exclude" src="../images/txt_clear.png" style="height:50px;width:50px;float:left;margin-left:10px;">' +
        '</div>';

    nConfirm('Keyword Filter', html, function (r) {
        if (r) {
            var text1 = $('#include').val();
            var text2 = $('#exclude').val();
            $('#split-filter').text(text1 + '-' + text2);
        } else {

        }
    }, function () {
        $('#include').attr('placeholder', "None");
        $('#exclude').attr('placeholder', "None");
        $('#clear-include').click(
            function () {
                $('#include').val('');
            }
        );
        $('#clear-exclude').click(
            function () {
                $('#exclude').val('');
            }
        );
    }, { confirmBtnText: 'Save', cancelBtnText: 'Cancel' });
}



