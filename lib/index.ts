
const videoId = Symbol('video').toString();
declare const navigator: any;

 const getImage = (callback: (input:string) => void) => {
    let video = document.getElementById(videoId) as HTMLVideoElement;
    let canvas = document.createElement("canvas");
    let context = canvas.getContext('2d');
    if (context)
        context.drawImage(video, 0, 0, 400, 300);

    let im = canvas.toDataURL('image/png');
    var base64Data = im.replace(/^data:image\/png;base64,/, "");
    callback(im);
}
export const startVideo = (callback: (input:string) => void ) => {

    const dialogId = Symbol('dialog').toString();
    const btnId = Symbol('btn').toString();
    let dialog = document.createElement('dialog');
    let btn = document.createElement('input');
    btn.type = "button";
    btn.value = "Take Photo";
    btn.onclick = () => getImage(callback);
    btn.setAttribute('style', " margin:0.5rem;padding:1rem;background-color: green;");
    btn.setAttribute('id', btnId);
    dialog.setAttribute('id', dialogId);
    dialog.setAttribute('style', " padding:0;");
    var childDiv = document.createElement("div");
    childDiv.setAttribute('style', " border:solid black;margin:0 auto;background-color: grey; width:400px; height: 300px;");
    let videoEle = document.createElement("video")
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
    }, function (stream: MediaStream | MediaSource | Blob | null) {
        videoEle.srcObject = stream;
        videoEle.play();
    }, function () {
        //error
    });
};

