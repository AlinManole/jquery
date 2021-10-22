$(function(){
    $("input").keyup(function(){
        var inputValue = $("input").val()
        if(inputValue.lenght > 5){
            $(this).addClass("is-valid")
            $(this).removeClass("is-invalid")
        } else {
            $(this).addClass("is-invalid")
            $(this).removeClass("is-valid")
        }
    })
})