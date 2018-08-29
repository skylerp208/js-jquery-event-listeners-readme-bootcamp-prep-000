//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
   }
  )
}

function frameIt() {
  $('img').on('load', function(){
    img.class = tasty
   }
  )
}

function pressIt() {
  $(document).on('keypress',
  function(key) {
    if (key.which == 71) {
      alert ('You have pressed "g"')
    }
  }
)
}

function submitIt() {
  $('form').on('submit', function()
  {
    if ($('input:first').val() === 'type') {
      alert("Your form is going to be submitted now.");
      return;
    } 
  })
}


$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()

// call functions here

});
