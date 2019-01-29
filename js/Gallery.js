//Index of current picture
var CurrentPic = 0;

//Buffer with all pictures
var PicBuffer = "";
var DotBuffer = "";

//Format divs and pics
for (i = 0; i < Pictures.length; i++) {
    PicBuffer += "<img src='" + Pictures[i] + "' width='100%' alt='' id='picture_" + i + "'></img>";
    DotBuffer += "<span class='dot' id='dot_" + i + "' onclick='SetPic(" + i + ")'></span>";
}

//Add new divs
document.getElementById("picture_frame").innerHTML = PicBuffer;
document.getElementById("dots").innerHTML = DotBuffer;


function SetPic(Pic) {
    CurrentPic = Pic;
    RefreshPics();
}

//Set next pic
function NextPic() {
    CurrentPic++
    if (CurrentPic >= Pictures.length) {
        CurrentPic = 0;
    }
    RefreshPics();
}

//Set previous pic
function PrevPic() {
    CurrentPic--
    if (CurrentPic < 0) {
        CurrentPic = Pictures.length - 1;
    }
    RefreshPics();
}

//Hide unused pictures and show current pic
function RefreshPics () {
    for (i = 0; i < Pictures.length; i++) {
        if ( i == CurrentPic ) {
        document.getElementById("picture_" + i).hidden = false;
        document.getElementById("dot_" + i).style.backgroundColor = "#717171";
        }
        else {
            document.getElementById("picture_" + i).hidden = true;
            document.getElementById("dot_" + i).style.backgroundColor = "#bbb";
        }
    }
    
    document.getElementById("on").innerHTML = (CurrentPic + 1) + " / " + Pictures.length;
}

//Start
RefreshPics();

//Change pic every 4 secs
setInterval(NextPic, 3000);