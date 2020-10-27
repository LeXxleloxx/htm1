$(function(){
    console.log("Starto!");

    $("#skills").click(
        function(){
        console.log("skills clicado");
        $("#main_text").css("display","none");
    }
    );

    $("#resume").click(
        function(){
        console.log("resumo clicado");
        $("#main_text").css("display","initial");
    }
    );
 });

/*$().ready(function(){
    console.log("jquery start");


}); */