$(function(){
    $('[id$="-include"]').each(function (e){
        console.log($(this).attr("id").replace("-include", "") +  ".html")
        $(this).load($(this).attr("id").replace("-include", "") +  ".html");
    });
  });