$(function(){
  $.ajax({
    url:"FQ_footer.html",
    type:"get",
    success:function(result){
      console.log(result);
      $(result).replaceAll("#footer");
      $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head")
      // $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head")
    }
  })
})