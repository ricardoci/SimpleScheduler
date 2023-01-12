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
  
  // Update the time blocks
  hourUpdater();
  setInterval(hourUpdater, 15000);
  
  // Load any saved data from localStorage
  $('.time-block .description').each(function() {
    $(this).val(localStorage.getItem($(this).closest('.time-block').attr('id')));
  });
  
  //

  