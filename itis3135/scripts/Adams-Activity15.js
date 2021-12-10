$(document).ready(function(){

    $.ajax({
        url: 'Activity15_json/facultyList.json',
        beforeSend: function() {
            $('main').append($('<div><h3>Loading...</h3></div>'))
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $('#faculty').empty();
    
            $.each(data.facultymembers, function(key, element){
                
                var name = element.full_name.split(' ');

                $('#faculty').append(
                    "<img src='images/Activity_15/faculty/" + "Dr." + name[1] + ".png' alt = '" + element.full_name + "'>" +
                    "<h2>" + element.full_name + "</h2>" +    
                    "<h3>" + element.department + "</h3>" +
                    "<p>" + element.bio + "</p>"
                )

            })
            
        }
    });

});
