var menulist=document.querySelector(".menu");
var sidebar=document.querySelector(".sidebar");
menulist.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
}
var display_comments=document.querySelector(".comment-show");
var comment=document.querySelector("#click-comment");
comment.onclick=function(){
    
   display_comments.classList.toggle("display-comment");
}
// comment.ondblclick=function(){
//     console.log("hghh");
//     display_comments.style.display="none";
// }