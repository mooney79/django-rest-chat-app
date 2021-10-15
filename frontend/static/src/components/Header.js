import {useEffect} from 'react'
function Header(){
    
    useEffect(() => {
        const canvas3 = document.getElementById('canvas3');
        const ctx3 = canvas3.getContext('2d');
        
        ctx3.moveTo(30, 20);
        ctx3.beginPath();
        let x = 30;
        let y = 20;
        let xCount=0;
        
        function draw(){
            ctx3.arc(x, y, 2, 0, Math.PI * 2);
            ctx3.strokeStyle = "transparent";
            ctx3.stroke();
        }
        
        function drawPants() {  
            for (let i=0; i < 75; i++){
                xCount++;
                draw();
                if (xCount > 3){
                    xCount=0;
                    x--;
                }
                y++;
            }
                            
            for (let i=0; i < 25; i++){
                x++;
                draw();
            }
            
            for (let i=0; i < 50; i++){
                xCount++;
                draw();
                if (xCount > 3){
                    xCount=0;
                    x++;
                }
                y--;
            }
                
            for (let i=0; i < 50; i++){
                xCount++;
                draw();
                if (xCount > 3){
                    xCount=0;
                    x++;
                }
                y++;
            }
            
            for (let i=0; i < 25; i++){
                x++;
                draw();
            }
            
            for (let i=0; i < 75; i++){
                xCount++;
                draw();
                if (xCount > 3){
                    xCount=0;
                    x--;
                }
                y--;
            }
            
            for (let i=0; i < 35; i++){
                x--;
                draw();
            }                
        }
        drawPants();
            
        let last100 = 0;
        let hue = 0;
        function frame(time){                
            if (time > last100 + 100){
                ctx3.fillStyle='hsl(' + hue + ', 100%, 50%)';
                ctx3.fill();
                last100 = time;
                hue=hue+1;
            }
            requestAnimationFrame(frame);
        }
        frame();
    }, []);



    return(
        <header>
            <canvas id="canvas3" width="100" height="108"></canvas>
            <h1> Slacks!</h1>
            <p>The premier chat app for afficionados of fine gentleman's trousers</p>
        </header>
    )
}

export default Header
