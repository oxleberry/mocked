

$(function(){
   console.log('Sanity Check2');

   galleryData();

   function galleryData() {

      $('.gallery-display').each(function(idx, el){
         // console.log('ART FILESSS: ' + $(this).attr('src'));
         // console.log(idx);
         // console.log(el);

         let galleryDocument = $('.gallery-document').eq(idx).text();
         console.log(galleryDocument);

         if (galleryDocument === ''){
            $(this).attr('src','');
         } else {
            $(this).attr('src',`http://localhost:8000/media/${galleryDocument}`);
         }

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

      $('.gallery-text-display').each(function(idx, el){
         // console.log('ART FILESSS: ' + $(this).attr('src'));
         // console.log(idx);
         // console.log(el);

         // if available, shows text input
         let galleryText = $('.gallery-text').eq(idx).text();
         console.log(galleryText);
         if (galleryText === 'None'){
            $(this).text('');
         } else {
            $(this).text(galleryText);
         }

         let galleryTextFont = $('.gallery-text-font').eq(idx).text();
         // console.log(galleryTextFont);
         // console.log(jQuery.type(galleryTextFont));
         $(this).css({'font-family': galleryTextFont});

         let galleryTextSize = $('.gallery-text-size').eq(idx).text();
         // console.log(galleryTextSize);
         // console.log(jQuery.type(galleryTextSize));
         $(this).css({'font-size': `${galleryTextSize}px`});

         let galleryTextPosTop = $('.gallery-text-pos-top').eq(idx).text();
         galleryTextPosTop = parseInt(galleryTextPosTop);
         // console.log(galleryTextPosTop);
         // console.log(jQuery.type(galleryTextPosTop));
         $(this).css('top', galleryTextPosTop);

         let galleryTextPosLeft = $('.gallery-text-pos-left').eq(idx).text();
         galleryTextPosLeft = parseInt(galleryTextPosLeft);
         console.log(galleryTextPosLeft);
         console.log(jQuery.type(galleryTextPosLeft));
         $(this).css('left', galleryTextPosLeft);

      })


   }


}); // end of document.ready
