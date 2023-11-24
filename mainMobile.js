let android = new Mobile(100, '', [],[]);
let iphone = new Mobile(100, '', [],[]);
function androidSent() {
    let text = document.getElementById('android').value;
    android.textMessage(text);
    android.sendMessage(iphone);
    //show lại hộp thư đến
    document.getElementById('inboxIphone').innerText = iphone.showInbox() ;
    //show lại hộp thư đã gửi
    document.getElementById('sentAndroid').innerText = android.showSent();
}
function iphoneSent() {
    let text = document.getElementById('iphone').value;
    iphone.textMessage(text);
    iphone.sendMessage(android);
    document.getElementById('inboxAndroid').innerText = '' + android.showInbox();
    document.getElementById('sentIphone').innerText = '' + iphone.showSent();
}
