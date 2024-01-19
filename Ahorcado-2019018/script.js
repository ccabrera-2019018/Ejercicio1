function BotonesPantalla() {
    
}

function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");
        
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, MATH.PI * 2, true);
        ctx.moveTo(110, 75);
        ctx.stroke();
    }
}