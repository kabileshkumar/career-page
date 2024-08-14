
 
 $(document).ready(function() {
  // Initial state for the "All" button
  $('.button.all').css('background', 'orange').css('color', '#222');

  // Function to reset visibility of all items
  var resetItemsVisibility = function() {
      $('.item').removeClass('hide');
  };

  // Category filters
  $('.button').click(function() {
      resetItemsVisibility();
      var category = $(this).attr('class').split(' ')[1];
      if (category !== 'all') {
          $('.item').not('.' + category).addClass('hide');
      }
  });

  // Active tag
  $('.button').click(function() {
      $('.button').removeClass('active').css('background', 'white').data('clicked', false);
      $(this).addClass('active').css('background', 'black').data('clicked', true);
  });

  // Accordion functionality for individual sub-topics
  $('.title').click(function() {
      var target = $(this).data('target');
      var isAllActive = $('.button.all').hasClass('active');

      // Show/hide the content of the clicked subtopic
      $('#' + target).slideToggle();

      // Add/remove active class from the clicked title
      $(this).toggleClass('active');

      // If in "All" category, don't hide other subtopics
      if (isAllActive) {
          // Ensure all items are visible
          $('.item').show();
      } else {
          // Hide other contents
          $('.content').not('#' + target).slideUp();
          $('.title').not(this).removeClass('active');
      }
  });

  // Button hover effects
  $('.button').mouseenter(function() {
    if (!$(this).data('clicked')) {
        $(this).css('background', 'black').css('color', 'white');
    }
});

$('.button').mouseleave(function() {
    if (!$(this).data('clicked')) {
        $(this).css('background', 'white').css('color', '#111');
    } else {
        $(this).css('background', 'orange').css('color', '#111');
    }
});
});





