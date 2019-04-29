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
            "</p></div>" +
            "<button class='createNote btn-primary' value='" + data[i]._id + "'>Create Note</button>" +
            "<button class='getNotes btn-secondary' value='"+ data[i]._id + "'>Get Notes</button>" +
            "</div>");
    }
    // value='" + data[i]._id + "'
});


$(document).on("click", ".createNote", function(){
    var title;
    var value = $(this).val();
    $.ajax({
        method: "GET",
        url: "/articles/" + $(this).val()
    })
    .then(function(response){
        title = response.title;
        $(".newNote").empty();
        $(".newNote").html(
            '<div class="form-group"><label for="comment">' +
            title + '</label>' +
            '<textarea class="form-control" row="8" id="newNote_' +
            value + '"></textarea>' +
            '<button class="addNote" value="'+ value +'">Add Note</button></div>'
        );
    });
});

$(document).on("click", ".addNote", function(){
    $.ajax({
        method: "POST",
        url: "/articles/" + $(this).val(),
        data: {
            body: $("#newNote_" + $(this).val()).val()
        }
    })
    .then(function(data) {
        console.log(data);
    })
});

$(document).on("click", ".getNotes", function(){
    $.ajax({
        method: "GET",
        url: "/articles/" + $(this).val()
    })
    .then(function(response){
        console.log(response);
    });
})
{/* <div class="form-group">
    <label for="comment">Comment:</label>
    <textarea class="form-control" rows="5" id="comment"></textarea>
</div> */}