var saveBtn = $(".saveBtn");

// Display the current day at the top of page 
var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#todaysDay").html(todaysDate);

// Adds color to blocks depending on hour of day and css class properties
function containerColor() {
    var time = moment().hours();
    $(".hourBlocks").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour > time) {
            $(this).addClass("future");
        } else if (currentHour === time) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});

//saves planned out day after refreshing page
function savedPlans() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currPlan = localStorage.getItem(currentHour);
        
        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

containerColor();
savedPlans();
