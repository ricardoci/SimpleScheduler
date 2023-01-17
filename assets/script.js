// $('.saveBtn').on('click', function () {
//     // Get nearby values
//     var value = this.previousElementSibling.value;
//     var time = this.closest('.time-block').id;

//   console.log(value)
//     // Save in localStorage
//     localStorage.setItem(time, value);
    
  
//     // Remove the notification after 5 seconds
//     setTimeout(function () {
//       $('.notification').removeClass('show');
//     }, 5000);

//     console.log(value)
//   });
  
//   // Update the time blocks
//   hourUpdater();
//   setInterval(hourUpdater, 20000);
  
//   // Load any saved data from localStorage
//   $('.time-block .description').each(function() {
//     $(this).val(localStorage.getItem($(this).closest('.time-block').attr('id')));
//   });
  
//   // Display current day on page
//   $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  
//   // This function updates the time blocks
//   function hourUpdater() {
//     const currentHour = new Date().getHours();
//     document.querySelectorAll('.time-block').forEach(block => {
//       const blockHour = parseInt(block.id.substring(block.id.lastIndexOf('-') + 1));
//       block.classList.remove('past','present','future');
//       if (blockHour < currentHour) {
//         block.classList.add('past');
//       } else if (blockHour === currentHour) {
//         block.classList.add('present');
//       } else {
//         block.classList.add('future');
//       }
//     });
//   }
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {  // When the Documnet is ready we will run this function.
  $('.btn').on('click', function() {  // listener for click events on the save button for local storage.

      var task = $(this).siblings('.description').val(); //stores the task into a var
      var time = $(this).parent().attr('id'); // stores the ID of the parent in a var EX:hour-9
      var $hide =$('.show');
      localStorage.setItem(time, task); // stores the task and time in local storage

      $('.alert').addClass('show'); // adds the a class .show to show the alert.

      setTimeout(function() {  //this function has a timer to remove the class.
          $(".alert").removeClass('show');
      }, 1000);     
  });



      $('.row').each(function () {  // the past, present, or future class
          var hours = dayjs().hour(); // JavaScript library that displays dates and times
          var hourOfDay = parseInt($(this).attr('id').split('-') [1]);// this grabs the id from each row and turns it into a number.

       if(hourOfDay < hours) { // If the hour has past it will add the past class.
          $(this).addClass('past');
          $(this).removeClass('present');
          $(this).removeClass('future');
       } else if (hourOfDay === hours){ // If the hour is the same it will add present class.
          $(this).addClass('present');
          $(this).removeClass('past');
          $(this).removeClass('future');
       } else {                            // if its left over it will add future class.
          $(this).addClass('future');
          $(this).removeClass('present');
          $(this).removeClass('past');
          }
      });

  
      



 
      //  first we are selecting the descriptions for each #hour-9-17.
      // Then sets the value attribute of the selected elements.
      // get value from each hours local storage
      $('#hour-9 .description').val( localStorage.getItem('hour-9'));
      $('#hour-10 .description').val( localStorage.getItem('hour-10'));
      $('#hour-11 .description').val( localStorage.getItem('hour-11'));
      $('#hour-12 .description').val( localStorage.getItem('hour-12'));
      $('#hour-13 .description').val( localStorage.getItem('hour-13'));
      $('#hour-14 .description').val( localStorage.getItem('hour-14'));
      $('#hour-15 .description').val( localStorage.getItem('hour-15'));
      $('#hour-16 .description').val( localStorage.getItem('hour-16'));
      $('#hour-17 .description').val( localStorage.getItem('hour-17'));




      //current day is displayed at the top using day.js


      //Selecting the Id #currentDay and class lead
      //Next we are adding text with the text() method
      //using day.js to collect the data
      $('#currentDay').text(dayjs().format("[Today:] MM-DD-YYYY h:mm A"));// A = AM/PM
 
  //

  //
  //
});
  