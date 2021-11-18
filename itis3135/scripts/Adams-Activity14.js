$(document).ready(function() {
	
    $('#toobin, #sorkin, #chua, #sampson').click(function(){ 
        var file = 'Activity14_json/' + this.title + '.json';
        title = this.title;

        $.ajax({
            url: file,
            beforeSend: function() {
                $('main').append($('<div><h3>Loading...</h3></div>'))
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $('main').empty();
        
                $.each(data.speakers, function(key, element){
                    
                    $('main').append(
                        "<h1>" + element.title + "</h3>" + 
                        "<h2>" + element.month + "</h2>" +    
                        "<h3>" + element.speaker + "</h3>" +
                        "<img src='images/Activity_14/" + title + ".jpg' alt = '" + this.title + "_picture'>" +
                        "<p>" + element.text + "</p>"
                    )
    
                })
                
            }
        });

    })

}); // end ready