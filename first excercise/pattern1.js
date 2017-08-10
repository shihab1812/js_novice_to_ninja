
/***** @uthor Shihab 
 * Pttern 
 * ***********/
(function ($, window, undefined) {
//Module one
 var moduleName = function(){
    // local variables for this module
    // var x,y,z;

    //init function
    this.initilize = function(){
          // functionality 1
          // call eventSetup function()
    }

    //event setup function
    this.eventSetup = function(){
        // functionality 2
        // if click function is there then remeber to use .bind(this)
            // Example = btn.addEventListener('click',  this.randomColor.bind(this));
    }

    //sub events from eventsetup function
    this.event1_From_eventSetup = function(){
        // functionality 
    }

     //sub events from eventsetup function
      this.event2_From_eventSetup = function(){
          // functionality 
    }

     //super subevents events from events in eventsetup function
    this.event21_from_event2 = function(){
          // functionality 
    }

    //call the init function
    this.initilize();
}

//document ready function
    $(document).ready(
        function () {
            new moduleName();
        }
    )

})(jQuery, window);