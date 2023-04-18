$(function () {
    
    //Grabs the current date using the dayjs library.
    var today = dayjs();

    //Sets the current day value in the HTML.
    $('#currentDay').text("Today is " + today.format('MMM D, YYYY'));
   // console.log("This is the value of todayHour " + today);


    //On click event that saves the description to local storage
    $(".saveBtn").on("click",function(){
      //Sets hourID to the id of the div where the button is pressed
      var hourId = $(this).parent(".time-block").attr("id");
      console.log("This should grab the id of the parent (hour-x): " + hourId);
      
      //Grabs the contents of description in the section and assigns it to hourDesc
      var hourDesc = $(this).siblings(".description").val();
      console.log("This should be desc of the hour block: " + hourDesc);

      /*Saves the item in local storage with the hourId being the key, 
        and the hourDesc storing the description.
        Output: 
        KEY:(hour-XX)
        VALUE: (entered description)
      */
      // Saves the hourId and the hourDesc in local storage
      localStorage.setItem(hourId, hourDesc);
    });


    //Function that sets the class to either past, present or future depending on the current time
    $(".time-block").each(function(){
      //console.log("Start of the time block function");
      //Output is currently hour-xx
      var hourId = $(this).attr("id");
      console.log("timeId: " + hourId);

      //Removes the hour- from the string so that the hour is only returned. 
      var timeIdAppend = hourId.replace("hour-", "");
      console.log("Appended timeId " + timeIdAppend);

      // Returns the current hour. 
      // Example 7:00 PM will return the value of 19.
      //var currentTime = dayjs('2023-04-15 12:00').hour(); Hard coded value
      var currentTime = dayjs().hour();
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

    //Sets and data saved in local storage and assigns them to the correct field when reloading the page. 
    $(".time-block").each(function(){
    
    var savedDesc = localStorage.getItem($(this).attr("id")); 
    //console.log("This is the saved description " + savedDesc);
    
    //will skip local storage values that are empty
    if(savedDesc === null){
      console.log("This is null, returning!")
      return;
    };
    //sets the decription for a time block if the data is in local storage.
    $(this).find(".description").text(savedDesc);

    });
  });
  