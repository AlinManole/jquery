$(function() {
  $("input").keyup(function() {
    if ($(this).val().length > 5) {
      $(this).addClass("is-valid")
      $(this).removeClass("is-invalid")
    } else {
      $(this).addClass("is-invalid")
      $(this).removeClass("is-valid")
    }
  })
})
