const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const INITIAL_COLOR = 'black';
canvas.width = 500;
canvas.height = 500;

let painting = false;
let filling = false;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

function stopPainting(){
    painting=false;
}
function startPainting(){
    painting = true;
}
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
function handleColorClick(event){
    // console.log(event.target.style.backgroundColor);
    ctx.strokeStyle = event.target.style.backgroundColor;
    ctx.fillStyle = event.target.style.backgroundColor;
}
function handleRangeChange(event){
    // console.log(event);
    ctx.lineWidth = event.target.value;
}

function handleMode(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill"

    } else{
        filling = true;
        mode.innerText = "Paint"

    }
}
function handleCanvasClick(event){
    if (filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
function debugBase64(URL, filename){
    var win = window.open();
    win.document.write(`<a href="${URL}" download="${filename}" id="get_file"></a>`);
    win.document.getElementById("get_file").click();
}
function handleSave(event){
    const image = canvas.toDataURL();
    let filename = prompt("enter the filename", "download");
    if (filename === null){
        alert("User doesn't set a filename, Download canceled");
        return ;
    }
    debugBase64(image, filename);
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}
Array.from(colors).forEach(
    c => c.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
}
if(mode){
    mode.addEventListener("click", handleMode);
}
if(saveBtn){
    saveBtn.addEventListener("click", handleSave);
}
