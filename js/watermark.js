function initJsonData() {
    if (window.sessionStorage) {
        var waterMarkJsonObj = JSON.parse(sessionStorage.getItem('waterMarkJsonStr'));

        switch (waterMarkJsonObj.Settings.Type) {
            case 0:
                $('#use-text-img').attr('src', '../../images/water_current.png');
                $('#use-pic-img').attr('src', '../../images/water_select_70x87.png');
                break;
            case 1:
                $('#use-text-img').attr('src', '../../images/water_select_70x87.png');
                $('#use-pic-img').attr('src', '../../images/water_current.png');
                break;
            default:
                break;
        }

        $('#watermark-text-input').val(waterMarkJsonObj.Settings.Text);

        $('#watermark-pic-input').val(waterMarkJsonObj.Settings.Picture);

        switch (waterMarkJsonObj.Settings.Position) {
            case 0:
                $('#value-position').text('Upper Left');
                break;
            case 1:
                $('#value-position').text('Upper Middle');
                break;
            case 2:
                $('#value-position').text('Upper Right');
                break;
            case 3:
                $('#value-position').text('Middle Left');
                break;
            case 4:
                $('#value-position').text('Middle');
                break;
            case 5:
                $('#value-position').text('Middle Right');
                break;
            case 6:
                $('#value-position').text('Lower Left');
                break;
            case 7:
                $('#value-position').text('Lower Middle');
                break;
            case 8:
                $('#value-position').text('Lower Right');
                break;
            default:
                break;
        }

        $('#value-text-size').text(waterMarkJsonObj.Settings.TextSize + 'pt');

        $('#range-text-size').val(waterMarkJsonObj.Settings.TextSize);

        $('#value-text-angle').text(waterMarkJsonObj.Settings.TextAngle);

        $('#range-text-angle').val(waterMarkJsonObj.Settings.TextAngle);

        $('#value-transparency').text(waterMarkJsonObj.Settings.Transparency);

        $('#value-range-transparency').val(waterMarkJsonObj.Settings.Transparency);
    }
    else {
        alert("浏览器不支持SessionStorage")
    }
}



function initClick() {

    $('#use-text').bind('click', function () {
        $('#use-text-img').attr('src', '../../images/water_current.png');
        $('#use-pic-img').attr('src', '../../images/water_select_70x87.png');  
    });

    $('#use-pic').bind('click', function () {
        $('#use-text-img').attr('src', '../../images/water_select_70x87.png');
        $('#use-pic-img').attr('src', '../../images/water_current.png');
    });

    $(".watermark-text-img").click(function () {
        $(this).prev().val("");
    });

    $('#range-text-size').RangeSlider({
        min: 12, max: 99, step: 1, callback: function ($input) {
            $("#value-text-size").text($('#range-text-size').val() + "pt");
        }
    });

    $('#range-text-angle').RangeSlider({
        min: 0, max: 90, step: 1, callback: function ($input) {
            $("#value-text-angle").text($('#range-text-angle').val());
        }
    });

    $('#range-transparency').RangeSlider({
        min: 0, max: 225, step: 1, callback: function ($input) {
            $("#value-transparency").text($('#range-transparency').val());
        }
    });

    $("#div-text").click(function () {
        var typeValue = $("#type").attr("type-value");
        if (typeValue == 1) {
            $(this).find("img").attr("src", $.getProjectPath() + "/images/water_current.png");
            $("#type").attr("type-value", 0);
            $("#div-pic").find("img").attr("src", $.getProjectPath() + "/images/water_select_70x87.png");
        }
    });
    $("#div-pic").click(function () {

        var typeValue = $("#type").attr("type-value");
        if (typeValue == 0) {
            $(this).find("img").attr("src", $.getProjectPath() + "/images/water_current.png");
            $("#type").attr("type-value", 1);
            $("#div-text").find("img").attr("src", $.getProjectPath() + "/images/water_select_70x87.png");

        }
    });
    $("#value-position").click(function () {
        openPositionDialog($.trim($(this).text()))
    })
}

function openPositionDialog(selected) {
    var html = '<div class="water-position-container">' +
        '        <div >' +
        '            <span class="water-position-span" >Upper Left</span>' +
        '            <span class="water-position-span">Upper Middle</span>' +
        '            <span class="water-position-span">Upper Right</span>' +
        '        </div>' +
        '        <div>' +
        '            <span class="water-position-span">Middle Left</span>' +
        '            <span class="water-position-span">Middle</span>' +
        '            <span class="water-position-span">Middle Right</span>' +
        '        </div>' +
        '        <div>' +
        '            <span class="water-position-span">Lower Left</span>' +
        '            <span class="water-position-span">Lower Middle</span>' +
        '            <span class="water-position-span">Lower Right</span>' +
        '        </div>' +
        '    </div>';

    var dialog = Object.create($.alerts);

    dialog.alert("Position", html, function (r) {

    }, function () {
        $(".water-position-span").each(function () {
            var spanText = $(this).text();
            if (spanText === selected) {
                $(this).addClass("water-position-span-select");
            }
        });

        $(".water-position-span").click(function () {
            $(this).addClass("water-position-span-select");
            dialog._hide();
            $("#value-position").text($(this).text())

        })

    }, { confirmBtnText: "Cancel" })
}