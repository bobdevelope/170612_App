//获取音乐的相关元素
var audio = document.querySelector("#wrap .music>audio");
var music = document.querySelector("#wrap> .music");

//有关音乐的函数

function musicFn(){//等待刮刮卡刮完
  //播放音乐
  audio.play();
  //让音乐图标旋转
  music.classList.add("anima");
  music.onclick=function(){//点击音乐小图标后
    if(audio.paused){//判断是否停止,如果是就播放,并且让他转起来
      audio.play();
      music.classList.add("anima");
    }else{//否则不转,并且停止播放
      audio.pause();
      music.classList.remove("anima");
    }
  }
}
