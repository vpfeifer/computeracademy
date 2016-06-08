$( document ).ready(function() {
  $("#paper-item").click(function(){
    $(".historicoModal-title").html("Papel - 105 A.C.")
    $(".historicoModal-body").html($(".paper-text").html());
    $("#historicoModal").modal();
  });

  $("#perfurado-item").click(function(){
    $(".historicoModal-title").html("Cartão Perfurado - 1725")
    $(".historicoModal-body").html($(".perfurado-text").html());
    $("#historicoModal").modal();
  });

  $("#tuboWilliams-item").click(function(){
    $(".historicoModal-title").html("Tubo de Williams - 1947")
    $(".historicoModal-body").html($(".tuboWilliams-text").html());
    $("#historicoModal").modal();
  });

  $("#tamborMemoria-item").click(function(){
    $(".historicoModal-title").html("Tambor de Memória - 1950")
    $(".historicoModal-body").html($(".tamborMemoria-text").html());
    $("#historicoModal").modal();
  });

  $("#uniservo-item").click(function(){
    $(".historicoModal-title").html("Uniservo - 1951")
    $(".historicoModal-body").html($(".uniservo-text").html());
    $("#historicoModal").modal();
  });

  $("#ramac-item").click(function(){
    $(".historicoModal-title").html("IBM 350 RAMAC - 1956")
    $(".historicoModal-body").html($(".ramac-text").html());
    $("#historicoModal").modal();
  });

  $("#ibm3380-item").click(function(){
    $(".historicoModal-title").html("IBM 3380 - 1980")
    $(".historicoModal-body").html($(".ibm3380-text").html());
    $("#historicoModal").modal();
  });

  $("#st506-item").click(function(){
    $(".historicoModal-title").html("ST-506  - 1980")
    $(".historicoModal-body").html($(".st506-text").html());
    $("#historicoModal").modal();
  });

  $("#seagate-item").click(function(){
    $(".historicoModal-title").html("Seagate Barracuda - 1996")
    $(".historicoModal-body").html($(".seagate-text").html());
    $("#historicoModal").modal();
  });

  $("#ssd-item").click(function(){
    $(".historicoModal-title").html("Solid-State Drive - 2008")
    $(".historicoModal-body").html($(".ssd-text").html());
    $("#historicoModal").modal();
  });
});
