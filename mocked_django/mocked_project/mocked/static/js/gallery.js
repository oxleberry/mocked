

$(function(){
   console.log('Sanity Check2');



   galleryCalc();

   function galleryCalc() {
      console.log('NEW');
      console.log('ART FILE: ' + $('.gallery-display').attr('src'));
      console.log('WIDTH: ' + $('.gallery-display').width());
      console.log('ART POS TOP: ' + $('.gallery-display').position().top);
      console.log('ART POS LEFT: ' + $('.gallery-display').position().left);
      let galleryArtWidth = $('.gallery-art-width').text();
      let galleryArtPosTop = $(".gallery-art-pos-top").text();
      let galleryArtPosLeft = $(".gallery-art-pos-left").text();
      console.log(galleryArtWidth);
      galleryArtPosTop = parseInt(galleryArtPosTop);
      galleryArtPosLeft = parseInt(galleryArtPosLeft);
      console.log(galleryArtPosTop);
      console.log(galleryArtPosLeft);
      $('.gallery-display').width(galleryArtWidth);
      $('.gallery-display').css('top', galleryArtPosTop);
      $('.gallery-display').css('left', galleryArtPosLeft);
   }

}); // end of document.ready
