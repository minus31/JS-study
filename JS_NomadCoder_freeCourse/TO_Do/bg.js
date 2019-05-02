const body = document.querySelector("body");
const IMG_number = 3;

const img_dict = {};
img_dict["1"] = "https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
img_dict["2"] = "https://images.unsplash.com/photo-1474959783111-a0f551bdad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
img_dict["3"] = "https://images.unsplash.com/photo-1532568547949-a09f1afe4d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"

function genRandom(){
    const number = Math.floor(Math.random() * 3);
    return number;
}
function handleImgLoad(){
    console.log("finished loading")
}
function paintImage(imgNumber){
    const image = new Image();
    image.src = img_dict[imgNumber + 1];
    image.classList.add("bgImage");
    body.prepend(image);
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
