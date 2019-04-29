// Grab the articles as a json
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $(".landing_spot").append(
            "<div class='card mt-4'><h5 class='card-header'>Article</h5>" +
            "<div class='card-body'>" +    
            "<p data-id='" + data[i]._id + "'>" 
            + data[i].title + "<br />" + 
            "<a href='" + data[i].link + "' target='_blank'>" + data[i].link +"</a>" + 
            "</p></div></div>");
    }
});
