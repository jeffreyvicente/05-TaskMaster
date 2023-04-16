// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
$('#currentDay').text("Today is " + today.format('MMM D, YYYY'));


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

    /*
    var temp = $('#hour-9');
    console.log("Currently how #hour-9 is formated" + temp);
    temp = $('#hour-9').removeClass('future');
    console.log("Currently how #hour-9 is formated with future removed" + temp);
    temp = $('#hour-9').addClass('past');
    console.log("Currently how #hour-9 is formated with past added" + temp);
*/
    var todayHour = dayjs('2023-04-15 12:00').hour();
    console.log("This is the value of todayHour " + todayHour);



    $(".saveBtn").on("click",function(){
      var hourId = $(this).parent(".time-block").attr("id");
      console.log("This should grab the id of the parent (hour-x): " + hourId);
      
      var hourDesc = $(this).siblings(".description").val();
      console.log("This should be desc of the hour block: " + hourDesc);

      /*Saves the item in local storage with the hourId being the key, 
        and the hourDesc storing the description.
        Output: 
        KEY:(hour-XX)
        VALUE: (entered description)
      */
      localStorage.setItem(hourId, hourDesc);
    });

    $(".time-block").each(function(){


      console.log("Start of the time block function");
      //Output is currently hour-xx
      var hourId = $(this).attr("id");
      console.log("timeId: " + hourId);

      //Removes the hour- from the string so that the hour is only returned. 
      var timeIdAppend = hourId.replace("hour-", "");
      console.log("Appended timeId " + timeIdAppend);

      // Returns the current hour. 
      // Example 7:00 PM will return the value of 19.
      var currentTime = dayjs('2023-04-15 12:00').hour();
      console.log("This is the value of currentTime: " + currentTime);

      //Checks if the hour block is in the future, past or current
      if(currentTime > timeIdAppend){
        console.log("Currently in the past");
        // Adds the class past to the time-block div. 
        $(this).addClass("past");
      }else if ( currentTime == timeIdAppend){
        console.log("The times are equal");
        // Adds the class present to the time-block div. 
        $(this).addClass("present");
      }else{
        console.log("Current in the future");
        // Add the class future to the time-block div
        $(this).addClass("future");
      }
    });

    $(".time-block").each(function(){
    
    var savedDesc = localStorage.getItem($(this).attr("id")); 
    //console.log("This is the saved description " + savedDesc);
    
    if(savedDesc === null){
      console.log("This is null, returning!")
      return;
    };
    $(this).find(".description").text(savedDesc);

    });





  });
  