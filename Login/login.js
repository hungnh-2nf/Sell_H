setTimeout(function(){ window.location.href = "https://hextracoin.co";}, 5000);
var url = window.location.href;
if (url.indexOf("hextracoin") >= 0 && url.indexOf("login") >= 0){
  
  $("input[name=username]").val("anhlinh");
  $("input[name=password]").val("10011993aA730303sellCoin");
  $("button[type=submit]").click();
  console.log("login");
}