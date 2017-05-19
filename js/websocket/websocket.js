
var webSocket = {

    status: '',


    //初始化数据
    "init": function (opt, fun) {
        if ("WebSocket" in window) {
            //var host = 'ws://net.my-device.cc:9111';
            var host = 'ws://192.168.1.91:9111';
            socket = new WebSocket(host);
            socket.onopen = function () {
                socket.send(opt);
            }

            var jsonStr = '';

            socket.onmessage = function (msg) {

                if (msg.data == "Connect_Ready") {
                    status = "ok";
                } else {
                    if (msg.data == "Not_detect_pcclient") {
                        status = "wait";
                    } else {
                        if (msg.data == "Disconnect") {
                            status = "wait";
                        } else {
                            if (msg.data == "Sendfinish") {
                                status = "Sendfinish";
                                console.log('Sendfinish------->' + msg.data);
                                console.log('******************************');
                                console.log(jsonStr);
                                fun(JSON.parse(jsonStr));
                                jsonStr = '';
                            } else {
                                if (status != "Sendfinish") {
                                    loadingDialog.show();
                                    jsonStr += atob(msg.data);
                                    console.log('====================================');
                                    console.log(jsonStr);
                                    console.log('====================================');
                                } else {
                                    
                                }

                            }
                        }
                    }
                }
            }

            socket.onclose = function () {
                alert('连接已关闭！');
            }

            socket.onerror = function () {
                alert('连接错误，请查看是否是网络出现问题！');
            }

        } else {
            alert('您的浏览器不支持 WebSocket');
        }
    },

    "sendChat": function () {
        if (!socket || socket.readyState != 1) {
            webSocket.init();
        }

        var content = $('textarea').val();

        socket.send('action=talk&' + webSocket.addname + webSocket.n + '&message=' + webSocket.content + '&' + webSocket.type);
    },

    "sleep": function () {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    },

    "close": function () {
        socket.close()
    }
}