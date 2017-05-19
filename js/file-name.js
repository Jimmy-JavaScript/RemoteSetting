function initJsonData(){
    if (window.sessionStorage) {
        var fileNameJsonObj = JSON.parse(sessionStorage.getItem('fileNameJsonStr'));
 
        $('#prefix').val(fileNameJsonObj.Settings.Prefix.Value);

        switch(fileNameJsonObj.Settings.Barcode.Type){
            case 0:
                $('#barcode-type').text('CODE39');
                break;
            case 1:
                $('#barcode-type').text('CODABAR(NW-7)');
                break;
            case 2:
                $('#barcode-type').text('CODE128');
                break;
            case 3:
                $('#barcode-type').text('ITF2of5(ITF25)');
                break;
            case 4:
                $('#barcode-type').text('QR CODE');
                break;
            case 5:
                $('#barcode-type').text('CODE93');
                break;
            case 6:
                $('#barcode-type').text('EAN13');
                break;
            case 7:
                $('#barcode-type').text('EAN8');
                break;
            case 8:
                $('#barcode-type').text('UPCA');
                break;
            case 9:
                $('#barcode-type').text('UPCE');
                break;
            case 10:
                $('#barcode-type').text('PDF417');
                break;
            case 11:
                $('#barcode-type').text('DATA_MATRIX');
                break;
            case 12:
                $('#barcode-type').text('AUTO(1D)');
                break;
            default:
                break;
        }

        switch(fileNameJsonObj.Settings.Barcode.Position){
            case 0:
                $('#barcode-pos').text('Upper-Right');
                break;
            case 1:
                $('#barcode-pos').text('Upper-Middle');
                break;
            case 2:
                $('#barcode-pos').text('Upper-Left');
                break;
            case 3:
                $('#barcode-pos').text('Full Page');
                break;
            default:
                break;
        }

        $('#barcode-filter').text(fileNameJsonObj.Settings.Barcode.Filter.Include+'-'+fileNameJsonObj.Settings.Barcode.Filter.Exclude);

        switch(fileNameJsonObj.Settings.Date.Value){
            case 0:
                $('#date').text('YYYYMMDD');
                break;
            case 1:
                $('#date').text('MMDDYYYY');
                break;
            case 2:
                $('#date').text('DDMMYYYY');
                break;
            default:
                break;
        }

        switch(fileNameJsonObj.Settings.Time.Value){
            case 0:
                $('#time').text('HHMMSS');
                break;
            case 1:
                $('#time').text('HHMM');
                break;
            default:
                break;
        }

        switch(fileNameJsonObj.Settings.SerialNumber.Value){
            case 0:
                 $('#serial-number').text('01-99');
                break;
            case 1:
                $('#serial-number').text('001-999');
                break;
            case 2:
                $('#serial-number').text('0001-9999');
                break;
            case 3:
                $('#serial-number').text('00001-99999');
                break;
            case 4:
                $('#serial-number').text('000001-999999');
                break;
            default:
                break;
        }
        
        var fileName = $('#prefix').val() +'_' + $('#date').text() + '_' + $('#time').text() + '_' + $('#serial-number').text();
        $('#file-name').text(fileName);
    }
    else {
        alert("浏览暂不支持localStorage")
    }
}

function initClick() {
    $('#clear-prefix').click(
        function () {
            $('#prefix').val('');
        }
    );

    $('#barcode-type').click(
        function () {
            var data = ['CODE39', 'CODABAR(NW-7)', 'CODE128', 'ITF20f5(ITF25)', 'QR CODE', 'CODE93', 'EAN13', 'EAN8', 'UPCA', 'UPCE', 'PDF417', 'DATA_MATRIX', 'AUTO(1D)'];
            nCommonSelect('Code Type', data, function (d) {
                $('#barcode-type').html(d);
            });
        }
    );

    $('#barcode-pos').click(
        function () {
            var data = ['Upper-Right', 'Upper-Middle', 'Upper-Left', 'Full Page'];
            nCommonSelect('Code Type', data, function (d) {
                $('#barcode-pos').html(d);
            });
        }
    );

    $('#barcode-filter').click(
        function () {
            var html =
                '<div style="height:100px;display:block;margin-top:20px;">' +
                '<div id="span-one" style="float:left;margin-left:40px;font-size:25px;">Include</div>' +
                '<input id="include" class="input-short" />' +
                '<img id="clear-include" src="../../images/txt_clear.png" style="height:50px;width:50px;float:left;margin-left:20px;">' +
                '</div>' +
                '<div style="height:100px;display:block;">' +
                '<div style="float:left;font-size:25px;margin-left:40px;">Exclude</div>' +
                '<input id="exclude" class="input-short" />' +
                '<img id="clear-exclude" src="../../images/txt_clear.png" style="height:50px;width:50px;float:left;margin-left:20px;">' +
                '</div>';

            nConfirm('Keyword Filter', html, function (r) {
                if(r){
                    var text1 = $('#include').val();
                    var text2 = $('#exclude').val();
                    $('#barcode-filter').text(text1+'-'+text2);
                }else{

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
    );

    $('#date').click(
        function () {
            var date = ["YYYYMMDD", "MMDDYYYY", "DDMMYYYY"];
            var selected = $.trim($(this).text());
            nSelectWithRound("Date", date, function (r) {
                $("#date").text(r);
            }, selected);
        }
    );

    $('#time').click(
        function () {
            var time = ["HHMMSS", "HHMM"];
            var selected = $.trim($(this).text());
            nSelectWithRound("Time", time, function (r) {
                $("#time").text(r);
            }, selected);
        }
    );

    $('#serial-number').click(
        function () {
            var number = ["01-99", "001-999","0001-9999","00001-99999","000001-999999"];
            var selected = $.trim($(this).text());
            nSelectWithRound("Serial Number",number, function (r) {
                $("#serial-number").text(r)
                var fileName = $('#prefix').val() +'_' + $('#date').text() + '_' + $('#time').text() + '_' + $('#serial-number').text();
                $('#file-name').text(fileName);
            }, selected);
        }
    );


    //所有的toggle btn监听
    $('#toggle-prefix').change(
        function () {
            if ($('#toggle-prefix').is(':checked')) {

            } else {

            }
        });

    $('#toggle-barcode-type').change(
        function () {
            if ($('#toggle-barcode-type').is(':checked')) {

            } else {

            }
        });

    $('#toggle-date').change(
        function () {
            if ($('#toggle-date').is(':checked')) {

            } else {

            }
        });

    $('#toggle-time').change(
        function () {
            if ($('#toggle-time').is(':checked')) {

            } else {

            }
        });

    $('#toggle-serial-num').change(
        function () {
            if ($('#toggle-serial-num').is(':checked')) {

            } else {

            }
        });

    $('#toggle-continuous').change(
        function () {
            if ($('#toggle-continuous').is(':checked')) {
                $('#serial-number').text('0001-9999');
            } else {

            }
        });
}