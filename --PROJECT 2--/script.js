let text = document.getElementById("text");
let qrbox = document.getElementById("qrbox");
let qrimg = document.getElementById("qrimg");

function generateQr(){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
}