
$(function(){
   console.log('Sanity Check');

   // NAV ACTIONS ================================
   $('.flex-nav ul li a').on('click',function() {
      $('.flex-nav ul li a').removeClass('nav-active');
      $(this).addClass('nav-active');
   });

   // DROPDOWN ACTIONS ================================
   let dropdownButtonEls = document.querySelectorAll('.dropdown-button');
   let dropdownEls = document.querySelectorAll('.dropdown');
   let dropdownOptionEls = document.querySelectorAll('.dropdown-option');

   // handles the open and closing of
   // drop down options
   dropdownButtonEls.forEach(function(el) {
      el.addEventListener('click', function(e) {
         let dropdownParent = el.parentNode;
         // since this event listener is nested inside
         // another element with an event listener, stopPropagation
         // will stop the parent event listener from automatically triggering
         e.stopPropagation();
         dropdownParent.classList.toggle('is-up');
      });
   });

   // dropdown option handling
   dropdownOptionEls.forEach(function(el) {
      el.addEventListener('click', function(e) {
         // traverse the DOM from
         // dropdownOption (LI) to current value (SPAN)
         let valTarget = el.parentNode
         .parentNode
         .parentNode
         .nextElementSibling
         .firstElementChild;
         // in the field next to the dropdown bar,
         // swaps old text content for new text content
         // from selected dropdown value
         valTarget.textContent = el.textContent;
         unselectSiblings(el)
         el.classList.add('is-selected');
         hideDropdown();
      })
   });

   // closes dropdown if clicked outside
   // of the dropdown component
   document.addEventListener('click', function(e) {
      hideDropdown();
   });

   // deselects highlighted color from other options
   function unselectSiblings(el) {
      let siblings = el.parentNode.children;
      for (var i=0; i < siblings.length; i++){
         siblings[i].classList.remove('is-selected');
      }
   }

   // closes the dropdown option list
   function hideDropdown() {
      dropdownEls.forEach(el => {
         el.classList.remove('is-up');
      });
   }
   // end of dropdown actions


   // IMAGE UPLOAD ===================================
   let file;
   let reader;
   let designDisplayEl = document.getElementById('design-display');

   // activates the image upload button when the styled button is clicked
   document.getElementById('upload-button').addEventListener('click', function(){
      document.getElementById('image-input').click();
   }, false);

   // use file search to upload image
   document.getElementById('image-input').addEventListener('change', function(e){
      imageHandling(e);
   }, false);

   // uses drag and drop to upload image
   document.body.addEventListener('drop', function(e){
      imageHandling(e);
   }, false);

   function imageHandling(e) {
      file = e.target.files[0];
      if(!file.type.match('image.*')) {
         alert("This file isn't image or it's unsupported format");
         return;
      }
      reader = new FileReader();
      reader.addEventListener('load', (function(imgFile) {
         return function(e) {
            // uploads as an allover background print
            // document.body.style.backgroundImage = "url('" + e.target.result + "')";
            // uploads images in target area
            designDisplayEl.setAttribute('src', e.target.result);
            console.log(file);
            console.log(file.name);
            console.log(file.size);
         };
      })(file), false);
      reader.readAsDataURL(file);
   }
   // end of image uploads

   // DRAGGABLE IMAGE =====================
   $('#design-display').draggable({ containment: '#design-target', scroll: false });
   // end of draggable images

   // RESIZE IMAGE BUTTON CONTROLS =====================
   const changeSize = 16;
   const changePosition = 8;

   console.log('Postion TOP: ' + $('#design-display').position().top);
   console.log('Postion LEFT: ' + $('#design-display').position().left);
   console.log($('#design-display').position());
   console.log('WIDTH: ' + $('#design-display').width());
   console.log($('#design-display').width());

   $('#width-plus').on('click', function() {
      let curWidth = $('#design-display').width();
      curWidth += changeSize;
      $('#design-display').width(`${curWidth}px`);

      let curPosition = $('#design-display').position().left;
      curPosition -= changePosition;
      $('#design-display').css({"left": curPosition});
   });

   $('#width-minus').on('click', function() {
      let curWidth = $('#design-display').width();
      curWidth -= changeSize;
      $('#design-display').width(`${curWidth}px`);

      let curPosition = $('#design-display').position().left;
      curPosition += changePosition;
      $('#design-display').css({"left": curPosition});
   });
   // end of resizeable buttons controls for images

   console.log('Postion TOP: ' + $('#design-display').position().top);
   console.log('Postion LEFT: ' + $('#design-display').position().left);
   console.log($('#design-display').position());
   console.log('WIDTH: ' + $('#design-display').width());
   console.log($('#design-display').width());

}); // end of document.ready
