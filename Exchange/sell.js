
setInterval(function(){ 
  var sBalance = $('#balance-hxt').html();
  var iBalance = parseFloat(sBalance);

  console.log(iBalance);

  if(iBalance == 501.2078){
    // reset tab
       var sell = 499.98;
      // li 1
      if($("div#create-an-order-body > ul li:eq(0)").hasClass("active")){
        $("div#create-an-order-body > ul li:eq(0)").removeClass("active");
        $("div#create-an-order-body > ul li:eq(0) > a").attr("aria-expanded","false");
        $("div#create-buy-order").removeClass("active");
      }
      // li 2
      if(!$("div#create-an-order-body > ul li:eq(1)").hasClass("active")){
        $("div#create-an-order-body > ul li:eq(1)").addClass("active");
        $("div#create-an-order-body > ul li:eq(1) > a").attr("aria-expanded","true");
        $("div#create-sell-order").addClass("active");
      }
      if($("div#create-sell-order").hasClass("active")){
        $('input#S-offer_quantity').val(sell);
        // get and set price
        var rPrice = 0;
        if($(".fill-sum-sell").length > 0){
            var sPrice = "";
            $('#sell-order tr').each(function() {
              sPrice = $(this).find("td").eq(2).html();
            });
            rPrice = parseFloat(sPrice);
            $("input#S-price").val(rPrice);

        }else{
            var sPrice = $("span#app_hxt_to_btc").html();
            var iPrice = parseFloat(sPrice) * 100000;
            rPrice = (Math.round(iPrice*Math.pow(10,0))/Math.pow(10,0)) / 100000;
            $("input#S-price").val(rPrice);
        }
        var iBtcR = rPrice*sell*99.75 / 100 * 100000000;
        var rBtcR = (Math.round(iBtcR*Math.pow(10,0))/Math.pow(10,0)) / 100000000;
       
        $("input#S-want_quantity").val(rBtcR);

        $(".open-modal-btn").click();
        $("#confirm-order-btn").click();
      }

}
}, 2500);
setTimeout(function(){ window.location.href = "https://hextracoin.co/exchange";}, 10000);
