(function () {
  var canvas = document.querySelector('canvas');
  if(canvas.getContext){
    var ctx = canvas.getContext("2d");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    var img = new Image();
    img.src="img/a.png";
    img.onload = function(){
      draw(this);
    }
  }
  function draw (img){
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    canvas.addEventListener("touchstart",function(ev){
      ev=ev||event;
      var touchC = ev.changedTouches[0];
      var x = touchC.clientX;
      var y = touchC.clientY;
      ctx.globalCompositeOperation="destination-out"
      ctx.lineWidth=40;
      ctx.lineCap="round";
      ctx.lineJoin="round"
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+1,y+1);
      ctx.stroke()

    })
    canvas.addEventListener("touchmove",function(ev){
      ev=ev||event;
      var touchC = ev.changedTouches[0];
      var x = touchC.clientX;
      var y = touchC.clientY;
      ctx.lineTo(x,y);
      ctx.stroke();
    })

    canvas.addEventListener("touchend",function(ev){
      ev=ev||event;
      var touchC = ev.changedTouches[0];
      var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
      var allPx = imgData.width*imgData.height;
      var flag = 0;

      for(var i=0;i<allPx;i++){
        if(imgData.data[i*4+3]===0){
          flag++
        }
      }

      if(flag>allPx/2){
        canvas.style.opacity=0;
      }
      canvas.addEventListener("transitionend",function(){
        this.remove()
      })

    })

  }
})()
