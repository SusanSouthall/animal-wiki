 $(document).ready(function(){
  // var choice = $("input:radio[name=animal]:checked").val();
  //
  // if (choice === "#cats") {
  //   $("#cats").show();
  //   $(".radio").hide();
  // }
    function is_checked() {
      var cats_checked = document.getElementById("animals_cats").checked;
      var dogs_checked = document.getElementById("animals_dogs").checked;
      var birds_checked = document.getElementById("animals_birds").checked;
        if(cats_checked && dogs_checked && birds_checked === false) {
          alert("Please choose an option.");
          return false;
        }else if{
          return true;
        }

        // }else if{
        //   (cats_checked === true) {
        //     alert("yay");
        //   }
        //    return true;

        }


       });
