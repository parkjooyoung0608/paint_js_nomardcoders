const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x,y)
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
    // line을 만드는 함수가 필요하기 때문에  stopPainting을 하지않는다.
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);

}