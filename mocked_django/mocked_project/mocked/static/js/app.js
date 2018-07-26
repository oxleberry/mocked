
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
   let currentArtFileName;
   let imageFile;
   let reader;
   let designDisplayEl = document.getElementById('design-display');
   let uploadButtonEl = document.getElementById('upload-button');
   // let imageInputEl = document.querySelector('input[type="file"]');
   // let imageInputEl = document.getElementById('image-input');
   let idDocumentEl = document.getElementById('id_document');

   // activates the real image upload button
   // when the styledized button is clicked
   uploadButtonEl.addEventListener('click', function(){
      idDocumentEl.click();
      // idDocumentEl.click();
   }, false);
   // use file search to upload image
   idDocumentEl.addEventListener('change', function(e){
      imageHandling(e);
   }, false);


   // uses drag and drop to upload image
   document.body.addEventListener('drop', function(e){
      imageHandling(e);
   }, false);
   function imageHandling(e) {
      imageFile = e.target.files[0];
      if(!imageFile.type.match('image.*')) {
         alert("This file is not a unsupported image file");
         return;
      }
      reader = new FileReader();
      reader.addEventListener('load', (function() {
         return function(e) {
            // uploads images in target area
            designDisplayEl.setAttribute('src', e.target.result);
            getFormValues();
         };
      })(imageFile), false);
      reader.readAsDataURL(imageFile);
   }
   // end of image uploads

   // DEFAULT IMAGES =====================
   let defaultThumbnailsEl = document.querySelectorAll('.default-image');

   defaultThumbnailsEl.forEach( function(el) {
      // console.log(el);
      el.addEventListener('click', function(e) {
         let imgEl = el.firstElementChild;
         // console.log(imgEl);
         let imgElAttr = imgEl.getAttribute('src');
         // console.log(imgElAttr);
         // console.log(imgElAttr);
         // console.log(defaultThumbnailEl.firstElementChild);
         // e.stopPropagation();
         designDisplayEl.setAttribute('src', imgElAttr);
      })
   }); // end of default images


   // DRAGGABLE IMAGE =====================
   $('#design-display').draggable({ containment: '#design-target', scroll: false });
   $('#text-display').draggable({ containment: '#design-target', scroll: true });
   // end of draggable images

   // RESIZE IMAGE BUTTON CONTROLS =====================
   const changeSize = 12;
   const changeImgPos = 6;
   const changeTextPos = 12;
   // let layoutWidth;
   // let layoutArtPosTop;
   // let layoutArtPosLeft;

   // console.log('Postion TOP: ' + $('#design-display').position().top);
   // console.log('Postion LEFT: ' + $('#design-display').position().left);
   // console.log($('#design-display').position());
   // console.log('WIDTH: ' + $('#design-display').width());
   // console.log($('#design-display').width());

   $('#width-plus').on('click', function() {
      let curWidth = $('#design-display').width();
      curWidth += changeSize;
      $('#design-display').width(`${curWidth}px`);

      let curPosition = $('#design-display').position().left;
      curPosition -= changeImgPos;
      $('#design-display').css({"left": curPosition});
      calcArtDimensions();
      getFormValues();
   });
   $('#width-minus').on('click', function() {
      let curWidth = $('#design-display').width();
      curWidth -= changeSize;
      $('#design-display').width(`${curWidth}px`);

      let curPosition = $('#design-display').position().left;
      curPosition += changeImgPos;
      $('#design-display').css({'left': curPosition});
      calcArtDimensions();
      getFormValues();
   });
   // end of resizeable buttons controls for image

   // IMAGE WIDTH CALCULATOR =====================
   // Pertinent info on design data
   // console.log('NEW');
   console.log('ART FILE: ' + currentArtFileName);
   console.log('WIDTH: ' + $('#design-display').width());
   console.log('ART POS TOP: ' + $('#design-display').position().top);
   console.log('ART POS LEFT: ' + $('#design-display').position().left);
   calcArtDimensions();

   // output the dimensions of the art size
   function calcArtDimensions() {
      // const rulerConverter = 17.456666;
      const rulerConverter = 16;
      let curWidth = $('#design-display').width();
      let curHeight = $('#design-display').height();
      let widthInInches = curWidth / rulerConverter;
      let heightInInches = curHeight / rulerConverter;
      widthInInches = widthInInches.toFixed(2);
      $('.current-width').text(`${widthInInches}"`);
      heightInInches = heightInInches.toFixed(2);
      $('.current-height').text(`${heightInInches}"`);
   }

   // CUSTOM TEXT FEATURE =====================
   $('#custom-text').keyup(function() {
      // console.log($('#font-value').text());
      let currentText = $('#custom-text').val();
      console.log(currentText);
      // let currentFont = $('#font-value').text();
      $('#text-display').text(currentText);
      // $('#text-display').css({'font-family': currentFont});
      // $('#text-display').css(currentText);
   });

   // adding custom font
   $('.font-option').click(function() {
      let currentFont = $('#font-value').text();
      $('#text-display').css({'font-family': currentFont});
   });

   // using color picker to update text color
   $("#color-choice").on('change', function(){
      let curHexColor = $(this).val();
      console.log(curHexColor);
      $('#text-display').css({'color': curHexColor});
      $("#text-color-value").text(curHexColor);
   });



   // RESIZE TEXT BUTTON CONTROLS =====================
   $('#text-plus').on('click', function() {
      let curfontSize = $('#text-display').css('font-size');
      let removePxLength = curfontSize.length - 2;
      curfontSize = curfontSize.slice(0,removePxLength);
      curfontSize = parseInt(curfontSize);
      curfontSize += changeSize;
      $('#text-display').css({'font-size': `${curfontSize}px`});

      let curPosition = $('#text-display').position().left;
      curPosition -= changeTextPos;
      $('#text-display').css({"left": curPosition});
   });

   $('#text-minus').on('click', function() {
      let curfontSize = $('#text-display').css('font-size');
      let removePxLength = curfontSize.length - 2;
      curfontSize = curfontSize.slice(0,removePxLength);
      curfontSize = parseInt(curfontSize);
      curfontSize -= changeSize;
      $('#text-display').css({'font-size': `${curfontSize}px`});

      let curPosition = $('#text-display').position().left;
      curPosition += changeTextPos;
      $('#text-display').css({"left": curPosition});
   });
   // end of resizeable buttons controls for images

   // OBTAINING FORM DATA =====================
   // updating form values
   getFormValues();

   // EDIT FOR WHEN SAVE BUTTON IS CLICKED
   function getFormValues() {
      // Art Size Width Field
      let curArtWidth = $('#design-display').width();
      curArtWidth = parseInt(curArtWidth);
      curArtWidth.toFixed();
      $('#id_artWidth').val(parseInt(curArtWidth));
      let formArtWidth = $('#id_artWidth').val();
      formArtWidth = parseInt(formArtWidth);
      // console.log(jQuery.type(formArtWidth));
      // console.log(formArtWidth);

      // Art Pos Top
      let curArtPosTop = $('#design-display').position().top;
      curArtPosTop = parseInt(curArtPosTop);
      curArtPosTop.toFixed();
      $('#id_artPosTop').val(curArtPosTop);
      let formArtPosTop = $('#id_artPosTop').val();
      formArtPosTop = parseInt(formArtPosTop);
      console.log(formArtPosTop);

      // Art Pos Left
      let curArtPosLeft = $('#design-display').position().left;
      curArtPosLeft = parseInt(curArtPosLeft);
      curArtPosLeft.toFixed();
      $('#id_artPosLeft').val(curArtPosLeft);
      let formArtPosLeft = $('#id_artPosLeft').val();
      formArtPosLeft = parseInt(formArtPosLeft);
      console.log(formArtPosLeft);
   }
$('#design-display').position().left

}); // end of document.ready
