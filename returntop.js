window.onload = function() {
  var top =document.getElementById("up");
  var btn=document.getElementById('btn');
  var a1=document.getElementById('a1')
  var divContent = document.getElementById('row5');
  var handleUp = function() {
    document.documentElement.scrollTop = document.body.scrollTop =0;
  }
  btn.onclick=function(){
    btn.style.display='none';
    a1.style.display='block';
    divContent.style.display='block';
    if (true) {a1.style.display='none';}
  }
  var up = function() {
    var t=document.documentElement.scrollTop||document.body.scrollTop;
    var top =document.getElementById("up");
    var top2 =document.getElementById("topbar")
    if(t >=300) {
      top.style.display = "block";
    }
    else {
      top.style.display = "none";
    }
  }
  window.addEventListener('scroll', up, false)
  top.addEventListener('click', handleUp, false)
  window.onscroll=function(){
    var top_img = document.getElementById("top_img");
    var nav1 = document.getElementById("nav1");
    t = document.documentElement.scrollTop||document.body.scrollTop;
    if(t>=100){
      top_img.style.height='57px';
      nav1.style.height='57px';
    }
    else{
      top_img.style.height='100px';
      nav1.style.height='100px';
    }
  }
}

