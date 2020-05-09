import ReconnectingWebSocket from 'reconnecting-websocket';

function ws1 (type) {
    // 建立ws连接
    var res = ''
    var ws = new ReconnectingWebSocket('ws://192.168.2.148:9000/ws');
    ws.onopen = () => {
        console.log("已建立连接");
    };
    ws.onmessage = (evt) => {
        res = JSON.parse(evt.data);
        switch (type) {
            case "reportCount":
                return res.data
            case "serviceCount":
                return res.service
            default:
                return []
        }
    };
}

export default ws1