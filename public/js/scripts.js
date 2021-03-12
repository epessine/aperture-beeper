$(document).ready(function () {
  const beepURL = 'http://localhost:5000/beep';
  getBeeps();

  $('#beeper-form').submit(function (event) {
    event.preventDefault();

    var data = {
      name: $('input[name=name]').val(),
      message: $('textarea[name=message]').val(),
    };

    $('#beeper-form').toggle();
    $('.loading').toggle();

    fetch(beepURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(newBeep => {
        getBeeps();

        $('#beeper-form')[0].reset();
        $('#beeper-form').toggle();
        $('.loading').toggle();
      })
  });
  
  function getBeeps() {
    $('.beeps').empty();

    fetch(beepURL)
    .then(res => res.json())
    .then(beeps => {
      beeps.reverse();
      beeps.forEach(beep => {
        var beepDate = new Date(beep.created_at);

        $('.beeps').append(`
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${beep.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${beepDate.toLocaleString()}</h6>
              <p class="card-text">${beep.message}</p>
            </div>
          </div>
        `);
      });
    });
  }
});
