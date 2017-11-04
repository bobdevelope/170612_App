function touchs() {

//滑屏相关元素
  var liNodes = document.querySelectorAll("#wrap .list>li");
//即将变成当面的页面
  var newIndex = 0;
//当前页面将要向上滑或者向下滑
  var oldIndex = 0;
//鼠标的开始位置
  var startY = 0;
//鼠标的结束位置
  var endY = 0;
//鼠标滑动的距离
  var distance = 0;
//是否在移动
  var isMove = false;
//视口高度
  var height = document.documentElement.clientHeight;
  document.addEventListener("touchstart",function (event) {
    event = event || window.event;
    var touch = event.changedTouches[0];
    startY = touch.clientY;
  });
  document.addEventListener("touchmove",function (event) {
    event = event || window.event;
    var touch = event.changedTouches[0];
    //定义手指结束位置
    endY = touch.clientY;
    //手指距离差
    distance = endY - startY;
    if(distance>0){//向下滑
      liNodes[oldIndex].style.transform = "translateY("+distance*0.0001+"px)"+" scale("+(1-(distance/height)*0.2)+")"
      if(!isMove){
        newIndex--;
        isMove = true;
      }
      //滑动的临界点判断
      if(newIndex<0){
        newIndex =4;
      }
      //先让页面去除隐藏
      liNodes[newIndex].classList.remove("hide");
      liNodes[newIndex].style.transform ="translateY("+(-height+distance)+"px)" ;
      //提升出来页面的层级
      liNodes[newIndex].classList.add("current");
    }else if(distance<0){//向上滑
      liNodes[oldIndex].style.transform = "translateY("+distance*0.0001+"px)"+" scale("+(1+(distance/height)*0.2)+")";
      if(!isMove){
        newIndex++;
        isMove = true;
      }
      //滑动的临界点判断
      if(newIndex>4){
        newIndex =0
      }
      //先让页面去除隐藏
      liNodes[newIndex].classList.remove("hide");
      liNodes[newIndex].style.transform ="translateY("+(height+distance)+"px)" ;
      //提升出来页面的层级
      liNodes[newIndex].classList.add("current");
    }
  });

  document.addEventListener("touchend",function (event) {
    event = event || window.event;
    var touch = event.changedTouches[0];
    if(distance>0){//向下滑
//    帮要来的li和要走的li都添加动画
      liNodes[oldIndex].classList.add("moveToBottom");
      liNodes[newIndex].classList.add("moveFromTop");


      //当动画结束,清除样式
      setTimeout(function () {
        //出厂样式还原
        liNodes[oldIndex].classList.remove("moveToBottom");
        liNodes[oldIndex].classList.remove("moveFromTop");
        liNodes[oldIndex].classList.add("hide");
        liNodes[oldIndex].classList.remove("current");
        liNodes[oldIndex].classList.add("preCurrent");
        liNodes[oldIndex].style.transform = "translateY(0)"+"scale(1)";

        //入厂样式还原
        liNodes[newIndex].classList.remove("moveFromTop");
        liNodes[newIndex].classList.remove("moveToBottom");
        liNodes[newIndex].classList.remove("current");
        liNodes[newIndex].classList.add("preCurrent");
        liNodes[newIndex].classList.remove("hide");
        liNodes[newIndex].style.transform = "translateY(0)"+"scale(1)";

        distance = 0

        outInAn[newIndex].in();
        outInAn[oldIndex].out();
        //时时更新
        oldIndex = newIndex;
        isMove = false;
      },600)

    }else if(distance<0){//向上滑
      //帮要来的li和要走的li都添加动画
      liNodes[newIndex].classList.add("moveFromTop");
      liNodes[oldIndex].classList.add("moveToTop");

      //当动画结束,清除样式
      setTimeout(function () {
        //出厂样式还原
        liNodes[oldIndex].classList.remove("moveFromTop");
        liNodes[oldIndex].classList.remove("moveToTop");
        liNodes[oldIndex].classList.add("hide");
        liNodes[oldIndex].classList.remove("current");
        liNodes[oldIndex].classList.add("preCurrent");
        liNodes[oldIndex].style.transform = "translateY(0)"+"scale(1)";

        //入厂样式还原
        liNodes[newIndex].classList.remove("moveFromTop");
        liNodes[newIndex].classList.remove("moveToTop");
        liNodes[newIndex].classList.remove("current");
        liNodes[newIndex].classList.add("preCurrent");
        liNodes[newIndex].classList.remove("hide");
        liNodes[newIndex].style.transform = "translateY(0)"+"scale(1)";

        distance = 0

        outInAn[newIndex].in();
        outInAn[oldIndex].out();
        //时时更新
        oldIndex = newIndex;
        isMove = false;
      },600)
    }else {
      console.log(oldIndex);
      setTimeout(function () {
        outInAn[oldIndex].in();
      },1100);
      outInAn[oldIndex].out();
    }
  })
}

