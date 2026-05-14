const visualizer = document.getElementById("visualizer");
const Vctx = visualizer.getContext("2d");

window.addEventListener('resize', () => {
    console.log("Cambiando tamaño");
    visualizer.width = window.innerWidth;
    visualizer.height = window.innerHeight * 0.8;
});
/*
Vctx.beginPath();
Vctx.moveTo(20, 20);
Vctx.lineTo(20, 100);
//Vctx.lineTo(70, 100);
Vctx.stroke();
*/

function animation(){
    //visualizer.width = window.innerWidth
    //visualizer.height = window.innerHeight * 0.8

    Vctx.clearRect(0, 0, visualizer.width, visualizer.height);

    Vctx.fillStyle = "#3C095C";
    Vctx.fillRect(0, 0, visualizer.width, visualizer.height);
    
    Vctx.beginPath();
    Vctx.moveTo(20, 20);
    Vctx.lineTo(20, 100);
    //Vctx.lineTo(70, 100);
    Vctx.stroke();
    requestAnimationFrame(animation);
};

animation();