$(document).ready(function(){

    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding'

    $.getJSON(url, function(data){ 
        var html = "";
        console.log(data)
        $.each(data.items, function(i, item){ 
            html += "<h2>" + item.title + "</h2>";   
            html += "<a href='" + item.media.m + "' data-lightbox='buildings'>" + "<img src=" + item.media.m + "></a>"; 
            html += "<p></p>"; 
        }); 
     
        $("#new_building").html(html); 
    }); 

});