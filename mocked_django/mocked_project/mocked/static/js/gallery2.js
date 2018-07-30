

$(function(){
   console.log('Sanity Check2');

   galleryData();

   function galleryData() {

      // console.log('ART FILE: ' + $('.gallery-display').eq(0).attr('src'));

      // console.log('WIDTH: ' + $('.gallery-art-width').eq(0).text());
      // console.log('ART POS TOP: ' + $(".gallery-art-pos-top").eq(0).text());
      // console.log('ART POS LEFT: ' + $(".gallery-art-pos-left").eq(0).text();

      $('.gallery-display').each(function(idx, el){
         // console.log('ART FILESSS: ' + $(this).attr('src'));
         // console.log(idx);
         // console.log(el);
         let galleryArtWidth = $('.gallery-art-width').eq(idx).text();
         galleryArtWidth = parseInt(galleryArtWidth);
         // console.log(galleryArtWidth);
         // console.log(jQuery.type(galleryArtWidth));
         $(this).width(galleryArtWidth);

         let galleryArtPosTop = $('.gallery-art-pos-top').eq(idx).text();
         galleryArtPosTop = parseInt(galleryArtPosTop);
         $(this).css('top', galleryArtPosTop);

         let galleryArtPosLeft = $('.gallery-art-pos-left').eq(idx).text();
         galleryArtPosLeft = parseInt(galleryArtPosLeft);
         $(this).css('left', galleryArtPosLeft);


      })

      // let galleryArtWidth = $('.gallery-art-width').eq(0).text();
      // galleryArtWidth = parseInt(galleryArtWidth);
      // console.log(galleryArtWidth);
      // console.log(jQuery.type(galleryArtWidth));
      //
      // let galleryArtPosTop = $(".gallery-art-pos-top").eq(0).text();
      // galleryArtPosTop = parseInt(galleryArtPosTop);
      // console.log(galleryArtPosTop);
      // console.log(jQuery.type(galleryArtPosTop));
      //
      // let galleryArtPosLeft = $(".gallery-art-pos-left").eq(0).text();
      // galleryArtPosLeft = parseInt(galleryArtPosLeft);
      // console.log(galleryArtPosLeft);
      // console.log(jQuery.type(galleryArtPosLeft));

      // $('.gallery-display').eq(0).width(galleryArtWidth)
      // $('.gallery-display').eq(0).css('top', galleryArtPosTop)
      // $('.gallery-display').eq(0).css('left', galleryArtPosLeft)
      //
      // $('.gallery-display').eq(1).width(186)
      // $('.gallery-display').eq(1).css('top', 22)
      // $('.gallery-display').eq(1).css('left', 34)
      //
      // $('.gallery-display').eq(2).width(68)
      // $('.gallery-display').eq(2).css('top', 51)
      // $('.gallery-display').eq(2).css('left', 141)

   }


}); // end of document.ready
