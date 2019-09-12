
var roll = function(amt, sides){
  amt=parseInt(amt);
  sides = parseInt(sides);
  var total = 0;
  if(amt>=1){
      if(sides>1){
        for(var i = 0; i<amt; i++){
          total+=Math.floor(Math.random()*sides+1);
        }
        createWarning("Total: " + total);
      } else {
        createWarning("Please enter a valid number of sides.")
      }
  } else {
    createWarning("Please enter a valid number of rolls.");
  }
}


var createWarning = function(msg){
  document.getElementById("alrt").innerHTML += '<div class="alert alert-danger alert-dismissible show">    <button type="button" class="close" data-dismiss="alert">&times;</button>    <strong>Alert: </strong> ' + msg + '  </div>';
};
