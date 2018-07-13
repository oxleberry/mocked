

$(function(){
   console.log('Sanity Check2');

   galleryCalc();

   function galleryCalc() {
      // console.log('NEW');
      // console.log('ART FILE: ' + $('.gallery-display').attr('src'));
      // console.log('WIDTH: ' + $('.gallery-display').width());
      // console.log('ART POS TOP: ' + $('.gallery-display').position().top);
      // console.log('ART POS LEFT: ' + $('.gallery-display').position().left);
      // let galleryArtWidth = $('.gallery-art-width').text();


      $('.gallery-display').eq(0).width(128)
      $('.gallery-display').eq(0).css('top', 50)
      $('.gallery-display').eq(0).css('left', 59)

      $('.gallery-display').eq(1).width(186)
      $('.gallery-display').eq(1).css('top', 22)
      $('.gallery-display').eq(1).css('left', 34)

      $('.gallery-display').eq(2).width(68)
      $('.gallery-display').eq(2).css('top', 51)
      $('.gallery-display').eq(2).css('left', 141)

      // $('.gallery-display').width(galleryArtWidth);
      // console.log('WIDTH: ' + galleryArtWidth);
      // let galleryArtPosTop = $(".gallery-art-pos-top").text();
      // let galleryArtPosLeft = $(".gallery-art-pos-left").text();
      // console.log(galleryArtWidth);
      // galleryArtPosTop = parseInt(galleryArtPosTop);
      // galleryArtPosLeft = parseInt(galleryArtPosLeft);
      // console.log(galleryArtPosTop);
      // console.log(galleryArtPosLeft);
      // $('.gallery-display').css('top', galleryArtPosTop);
      // $('.gallery-display').css('left', galleryArtPosLeft);
   }


}); // end of document.ready
