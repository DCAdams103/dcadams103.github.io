$(document).ready(function() {

        // preload the image for each link
        // List of images
        var imgList = ['Activity10_images/h1.jpg', 'Activity10_images/h2.jpg', 'Activity10_images/h3.jpg',
        'Activity10_images/h4.jpg', 'Activity10_images/h5.jpg', 'Activity10_images/h6.jpg'];

        // Preload images
        var $images = new Array();
        for (var i = 0; i <= imgList.length; i++) {
                $images.push($('<img>').attr('src', imgList[i]));
        }

        // move the focus to the first link
        $('#h1').focus();

        // Boolean that determines if the user can switch images
        var canSwitch = true;

        // set up the event handlers for each link
        $('#h1, #h2, #h3, #h4, #h5, #h6').on('click', function(event){
                // cancel the default action of each link
                event.preventDefault();

                // The horse image object
                var horseImg = this;

                if(canSwitch) {

                        // Don't allow user to switch images while fading out
                        canSwitch = false;

                        // Fade out the picholder and caption elements
                        // picholder is the paragraph that contains the image, it's easier to
                        // fade that out instead.
                        $('#picholder, #caption').animate({
                                opacity: 0,
                        }, 3000, function() {
                                // When animation completes use the callback function to change caption and image
                                imgCallback(picClick, horseImg)
                        })

                }
                
        })

        function picClick(title, id) {

                // get the image title and id for each image
                $('#caption').text(title)
                
                // Remove all children from the picholder element
                $('#picholder').empty();

                // Get the number at the end of the id and use it to get the image in the array
                $('#picholder').append($images[parseInt(id.substring(1,2)) - 1]);
                
                // Fade back in for 3 seconds since the caption and image have changed
                $('#picholder, #caption').animate({
                        opacity: 1,
                }, 3000, function() {
                        // Now that the image has faded back in, allow the user to switch images.
                        canSwitch = true;
                })

        }

        function imgCallback(callback, tn) {
                // Get the title and id from the given thumbnail link
                var title = tn.title;
                var id = tn.id;
                callback(title, id)
        }

}); // end ready