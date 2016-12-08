$(function(){


$('#btn').on('click',function(){
var val=$('#tx').val();
var link='http://www.omdbapi.com/?s='+val;

$.ajax({
type:'GET',
url:link,
success:function(disp){
 console.log(disp);
 disp.Search.map(function(item){
   console.log(item.Year);
   console.log(item.Title);
   $("#disp").append("<p>"+item.Year+"</p>")
   $("#disp").append("<p>"+item.Title+"</p>")
$("#disp").append('<div class="graphic"><img src='+item.Poster+'></div>');
 });

}


});


});

});
