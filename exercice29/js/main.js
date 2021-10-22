$(function() {
    $(".btn").click(function(){
        var inputValue = $("input").val()
        if(inputValue.lenght >= 5 ) {
            $("input").addClass("is-valid")
            $("input").removeClass("is-invalid")
        } else {
            $("input").addClass("is-invalid")
            $("input").removeClass("is-valid")
        }
    })
})