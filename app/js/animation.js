var preIndex = 0;//出厂动画的下标
var outInAn =[
  {
    //第一屏入场动画
    in:function () {
      var p1s =document.querySelectorAll("#wrap .list .pic1 .pin1-list .p1");
      for(var i = 0;i<p1s.length;i++){
        p1s[i].style.transform = "translateX(0%)";
        p1s[i].style.opacity = 1;
      }
      var p2s =document.querySelectorAll("#wrap .list .pic1 .pin1-list .p2");
      for(var i = 0;i<p1s.length;i++){
        p2s[i].style.transform = "translateX(0%)";
        p2s[i].style.opacity = 1;
      }
    },
    //第一屏出场动画
    out:function () {
      var p1s =document.querySelectorAll("#wrap .list .pic1 .pin1-list .p1");
      for(var i = 0;i<p1s.length;i++){
        p1s[i].style.transform = "translateX(-100%)";
        p1s[i].style.opacity = 0;
      }
      var p2s =document.querySelectorAll("#wrap .list .pic1 .pin1-list .p2");
      for(var i = 0;i<p1s.length;i++){
        p2s[i].style.transform = "translateX(100%)";
        p2s[i].style.opacity = 0;
      }
    }
  },
  {
    in:function () {
      var pic2_p1 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p1");
      var pic2_p2 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p2");
      var pic2_p3 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p3");
      var pic2_p4 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p4");
      var pic2_p5 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p5");
      var pic2_p6 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p6");
      pic2_p1.style.transform = "translate(-100px,-100px)"+"rotate(720deg)";
      pic2_p2.style.transform = "translate(0,-150px)"+"rotate(720deg)";
      pic2_p3.style.transform = "translate(100px,-100px)"+"rotate(720deg)";
      pic2_p4.style.transform = "translate(-100px,100px)"+"rotate(720deg)";
      pic2_p5.style.transform = "translate(0px,150px)"+"rotate(720deg)";
      pic2_p6.style.transform = "translate(100px,100px)"+"rotate(720deg)";
    },
    out:function () {
      var pic2_p1 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p1");
      var pic2_p2 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p2");
      var pic2_p3 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p3");
      var pic2_p4 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p4");
      var pic2_p5 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p5");
      var pic2_p6 = document.querySelector("#wrap .list .pic2 .pin2-list .pic2-p6");
      pic2_p1.style.transform = "translate(0,0)"+"rotate(0deg)";
      pic2_p2.style.transform = "translate(0,0)"+"rotate(0deg)";
      pic2_p3.style.transform = "translate(0,0)"+"rotate(0deg)";
      pic2_p4.style.transform = "translate(0,0)"+"rotate(0deg)";
      pic2_p5.style.transform = "translate(0,0)"+"rotate(0deg)";
      pic2_p6.style.transform = "translate(0,0)"+"rotate(0deg)";
    }
  },
  {
    in:function () {
      var pic3_div = document.querySelector("#wrap .list .pic3 div");
      pic3_div.style.transform = "rotateY(720deg)";
    },
    out:function () {
      var pic3_div = document.querySelector("#wrap .list .pic3 div");
      pic3_div.style.transform = "rotateY(0deg)";
    }

  },
  {
    in:function () {
      var pic4_d1 = document.querySelector("#wrap .list .pic4 .pic4-d1");
      var pic4_d2 = document.querySelector("#wrap .list .pic4 .pic4-d2");
      var pic4_d3 = document.querySelector("#wrap .list .pic4 .pic4-d3");

      pic4_d1.style.width = "35%";
      pic4_d1.style.height = "20%";
      pic4_d1.style.fontSize = "10%";

      pic4_d2.style.width = "43%";
      pic4_d2.style.height = "13%";
      pic4_d2.style.fontSize = "10%";

      pic4_d3.style.width = "17%";
      pic4_d3.style.height = "25%";
      pic4_d3.style.fontSize = "10%"
    },
    out:function () {
      var pic4_d1 = document.querySelector("#wrap .list .pic4 .pic4-d1");
      var pic4_d2 = document.querySelector("#wrap .list .pic4 .pic4-d2");
      var pic4_d3 = document.querySelector("#wrap .list .pic4 .pic4-d3");
      pic4_d1.style.width = "0";
      pic4_d1.style.height = "0";
      pic4_d1.style.fontSize = "0";

      pic4_d2.style.width = "0";
      pic4_d2.style.height = "0";
      pic4_d2.style.fontSize = "0";

      pic4_d3.style.width = "0";
      pic4_d3.style.height = "0";
      pic4_d3.style.fontSize = "0";
    }
  },
  {
    in:function (){

    },
    out:function (){

    }
  }];