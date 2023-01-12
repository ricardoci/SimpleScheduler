$('.saveBtn').on('click', function () {
    // Get nearby values
    var value = this.previousElementSibling.value;
    var time = this.closest('.time-block').id;

  
    // Save in localStorage
    localStorage.setItem(time, value);
    // Show notification that item was saved to localStorage
  
    // Remove the notification after 5 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });


  