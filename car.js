let y;
m=0;
function start(){
  y= setInterval(run,100);
function run(){
    m+=5;
   let x=document.getElementById('ran');
    x.style.marginLeft=m+'px';
}
}
function stop(){
clearInterval(y);
}