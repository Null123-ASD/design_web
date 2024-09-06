
/* ////////////////////
    DOWNLOAD CV
////////////////// */


function file(){
    var downloadLink = document.createElement('a');
    downloadLink.href= 'cv/CV_IT_LIUYISHNA.docx';

    downloadLink.download = 'CV.docx';

    downloadLink.click();
}


/* ////////////////////
        VIDEO 
////////////////// */

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

    function stopVideo(){
        videoPlayer.style.display = "none";
    }

    function playVideo(file){
        myVideo.src = file;
        videoPlayer.style.display = "block";
    }
