

$(function(){
   console.log('Sanity Check2');


   clearGalleryCalc();
   galleryCalc();



   function galleryCalc() {
      console.log('NEW');
      console.log('ART FILE: ' + $('.gallery-display').attr('src'));
      console.log('WIDTH: ' + $('.gallery-display').width());
      console.log('ART POS TOP: ' + $('.gallery-display').position().top);
      console.log('ART POS LEFT: ' + $('.gallery-display').position().left);
      let galleryArtWidth = $('.gallery-art-width').text();
      $('.gallery-display').width(galleryArtWidth);
      console.log('WIDTH: ' + galleryArtWidth);
      let galleryArtPosTop = $(".gallery-art-pos-top").text();
      let galleryArtPosLeft = $(".gallery-art-pos-left").text();
      console.log(galleryArtWidth);
      galleryArtPosTop = parseInt(galleryArtPosTop);
      galleryArtPosLeft = parseInt(galleryArtPosLeft);
      console.log(galleryArtPosTop);
      console.log(galleryArtPosLeft);
      $('.gallery-display').css('top', galleryArtPosTop);
      $('.gallery-display').css('left', galleryArtPosLeft);
      console.log('NEW';
      console.log('ART FILE: ' + $('.gallery-display').attr('src'));
      console.log('ART POS TOP: ' + galleryArtPosTop);
      console.log('ART POS LEFT: ' + galleryArtPosLeft);
   }

   function clearGalleryCalc() {
      galleryArtWidth = 0;
      galleryArtPosTop = 0;
      galleryArtPosLeft = 0;
   }

}); // end of document.ready
