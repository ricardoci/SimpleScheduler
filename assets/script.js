$('.saveBtn').on('click', function () {
    // Get nearby values
    var value = this.previousElementSibling.value;
    var time = this.closest('.time-block').id;

  console.log(value)
    // Save in localStorage
    localStorage.setItem(time, value);
    
  
    // Remove the notification after 5 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);

    console.log(value)
  });
  
  // Update the time blocks
  hourUpdater();
  setInterval(hourUpdater, 20000);
  
  // Load any saved data from localStorage
  $('.time-block .description').each(function() {
    $(this).val(localStorage.getItem($(this).closest('.time-block').attr('id')));
  });
  
  // Display current day on page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  
  // This function updates the time blocks
  function hourUpdater() {
    const currentHour = new Date().getHours();
    document.querySelectorAll('.time-block').forEach(block => {
      const blockHour = parseInt(block.id.substring(block.id.lastIndexOf('-') + 1));




      block.classList.remove('past','present','future');




      if (blockHour < currentHour) {
        block.classList.add('past');
      } else if (blockHour === currentHour) {
        block.classList.add('present');
      } else {
        block.classList.add('future');
      }
    });
  }

  