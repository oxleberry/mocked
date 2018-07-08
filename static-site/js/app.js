
$(function(){
    console.log('Sanity Check');

    // NAV ACTIONS
      $('.toggle-nav').on('click',function() {
      $('.flex-nav ul').toggleClass('nav-active');
   });


    // DROPDOWN ACTIONS
   let dropdownButtonEl = document.querySelector('.dropdown-button');
   let dropdownEl = document.querySelector('.dropdown');
   let dropdownOptionsEl = document.querySelectorAll('.dropdown-option');
   let currentValueEl = document.querySelector('.current-value');
   let valueContainerEl = document.querySelector('.value-container');

   // closes dropdown if clicked outside
   // of the dropdown component
   document.addEventListener('click', function(e) {
      hideDropdown();
   });

   // toggles the dropdown features
   dropdownButtonEl.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropdownEl.classList.toggle("is-up");
      dropdownButtonEl.classList.add("is-selected");
   });

   // outputs the selected value
   // from the dropdown options to the
   // value container to the right
   let selected = null;
   dropdownOptionsEl.forEach(option =>
      option.addEventListener('click', function(e) {
         e.preventDefault();
         e.stopPropagation();
         let currVal = currentValueEl.innerHTML = e.target.id;
         console.log(currVal);
         // console.log(valueContainerEl);
         $(".current-value").text(currVal);
         hideDropdown();
      })
   );

   function hideDropdown() {
      dropdownEl.classList.remove("is-up");
   }
    // end of dropdown actions

}); // end of document.ready
