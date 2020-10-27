$(function(){
    console.log("Starto!");

    $("#skills").click(
        function(){
        console.log("skills clicado");
        $("#main_text").css("display","none");
        $("#skills_text").css("display","block");
    }
    );

    $("#resume").click(
        function(){
        console.log("resumo clicado");
        $("#main_text").css("display","initial");
        $("#skills_text").css("display","none");
    }
    );
 });

/*$().ready(function(){
    console.log("jquery start");


}); */