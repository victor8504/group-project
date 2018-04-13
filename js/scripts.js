function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  };
};

$(document).ready(function(){
  $("button#bid").click(function(event){
    prompt("What do you Want to Bid on ?");
    alert("You have successfuly bidded on this item. It will be delivered to you shortly");
  });
});
