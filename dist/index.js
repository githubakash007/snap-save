"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const fs = require('fs');
// const path = require('path');
const videoId = Symbol().toString();
//declare const context: any; 
exports.getImage = () => {
    let video = document.getElementById(videoId);
    let canvas = document.createElement("canvas");
    let context = canvas.getContext('2d');
    // canvasEle.setAttribute('id', canvasId);
    if (context)
        context.drawImage(video, 0, 0, 400, 300);
    let im = canvas.toDataURL('image/png');
    //const filepath = path.join(loc, "out.png");
    var base64Data = im.replace(/^data:image\/png;base64,/, "");
    return base64Data;
    // fs.writeFile(filepath, base64Data, 'base64', function (err) {
    //     console.log(err);
    // });
};
exports.startVideo = () => {
    const dialogId = Symbol().toString();
    const btnId = Symbol().toString();
    let dialog = document.createElement('dialog');
    let btn = document.createElement('input');
    btn.type = "button";
    btn.value = "Take Photo";
    btn.onclick = () => exports.getImage;
    btn.setAttribute('style', " margin:0.5rem;padding:1rem;background-color: green;");
    btn.setAttribute('id', btnId);
    dialog.setAttribute('id', dialogId);
    dialog.setAttribute('style', " padding:0;");
    var childDiv = document.createElement("div");
    childDiv.setAttribute('style', " border:solid black;margin:0 auto;background-color: grey; width:400px; height: 300px;");
    let videoEle = document.createElement("video");
    videoEle.setAttribute('id', videoId);
    videoEle.setAttribute('width', '100%');
    videoEle.setAttribute('height', '100%');
    childDiv.appendChild(videoEle);
    dialog.appendChild(childDiv);
    dialog.appendChild(btn);
    document.body.appendChild(dialog);
    dialog.showModal();
    let video = document.getElementById(videoId);
    let venderUrl = window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia ||
        navigator.webkitgetUserMedia;
    navigator.getMedia({
        video: true,
        audio: false
    }, function (stream) {
        videoEle.srcObject = stream;
        videoEle.play();
    }, function () {
        //error
    });
};
//exports { startVideo, getImage }
