$(function () {
    
    var today = dayjs();

    $('#currentDay').text("Today is " + today.format('MMM D, YYYY'));
    console.log("This is the value of todayHour " + today);



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
  