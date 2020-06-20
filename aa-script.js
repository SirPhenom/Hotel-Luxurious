// navbar color change
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop(),
      navbar = $(".navbar");

    if (scrollPos > 100) {
      navbar.removeClass("bg-transparent");
      navbar.addClass("bg-black");
    } else {
      navbar.addClass("bg-transparent");
      navbar.removeClass("bg-black");
    }
  });
});

let noOfGuests = 1;
add.onclick = function () {
  if (parseInt(guests.innerHTML) >= 10) {
    notification.innerHTML = "Oops! Maximum no of guests reached";
    notification.classList.remove("d-none");
  } else {
    notification.classList.add("d-none");
    noOfGuests++;
  }
  guests.innerHTML = noOfGuests;
};
subtract.onclick = function () {
  if (parseInt(guests.innerHTML) >= 2) {
    notification.classList.add("d-none");
    noOfGuests--;
  } else {
    notification.innerHTML = "Oops! Minimum no of guests reached";
    notification.classList.remove("d-none");
  }
  guests.innerHTML = noOfGuests;
};
