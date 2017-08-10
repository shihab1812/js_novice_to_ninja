(function ($, window, undefined) {
    
//Module one
var changeBg = function(){

    // private variable with respect to module
    var btn = document.getElementById('trigger-bg');
    var colorArr = ['#444',"#ddd","#cacaca","#eee","#f36"];

    //init function
    this.intialize = function () {

        this.setupEvents();
    }

    //events function
    this.setupEvents = function () {

     btn.addEventListener('click',  this.randomColor.bind(this));
    }

    //change the color function
    this.randomColor = function() {
        var luckyColor = Math.floor(colorArr.length * Math.random());
        var randomPick = colorArr[luckyColor];
        document.getElementById('changedDiv').style.background= randomPick;
       console.log("am here");
    }
    
    //console.log("hellow");
    this.intialize();
}


    //document ready function
    $(document).ready(
        function () {
            new changeBg();
        }
    )

})(jQuery, window);