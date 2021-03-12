$(document).ready(function () {
  $("#beeper-form").submit(function (event) {
    event.preventDefault();

    var data = {
      name: $("input[name=name]").val(),
      message: $("textarea[name=message]").val(),
    };

    $("#beeper-form").toggle();
    $('.loading').toggle();

    fetch('http://localhost:5000/beep', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(newBeep => {
      console.log(newBeep);
      $("#beeper-form")[0].reset();
      $("#beeper-form").toggle();
      $('.loading').toggle();
    })
  });
});
