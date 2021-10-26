$(document).ready(function(){
    
    // List of images
    var imgList = ['images/slideshow/charlotte.jpg', 'images/slideshow/thunderbirds1.JPG', 'images/slideshow/thunderbirds2.JPG',
    'images/slideshow/goat1.JPG', 'images/slideshow/goat2.JPG', 'images/slideshow/sunset.JPG'];

    // Preload images
    var $images = new Array();
    for (var i = 0; i <= imgList.length; i++) {
        $images.push($('<img>').attr('src', imgList[i]));
    }

    // Which image in the array is being shown
    var counter = 0;

    $('#prev').click(function(){
        counter--;

        if (counter < 0) {
            counter = imgList.length-1;
        }
        $('#picholder').empty();
        $('#picholder').append($images[counter]);

    })

    $('#next').click(function(){
        
        counter++;

        if (counter >= imgList.length) {
            counter = 0;
        }

        $('#picholder').empty();
        $('#picholder').append($images[counter]);

    })

})