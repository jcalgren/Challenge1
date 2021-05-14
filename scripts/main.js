//


//Countdown widget die de aankomsttijd aangeeft
var countDownDate = new Date("Mar 21, 2019 00:13:00").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();
    

  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

    fontFamily:"arial"
    fontColor: "white"
    fontSize:1
    
  // Hier wordt een bericht weergeven wanneer de reis voorbij is.
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "We zijn aangekomen op de  Eindbestemming!!";
  }

}, 1000);


//snelheids meter

$(function(){
    $("#gauge").dxCircularGauge({
        scale: {
            startValue: 0,
            endValue: 30000,
            tickInterval: 1000,
            label: {
                useRangeColors: true
            }
        },
        rangeContainer: {
            palette: "pastel",
            ranges: [
                { startValue: 0, endValue: 10000 },
                { startValue: 10000, endValue: 26000 },
                { startValue: 26000, endValue: 30000 }
            ]
        },
        title: {
            text: "Speed in KM/H",
            font: { size: 20 },
            fontFamily:"arial",
            fontSize:15
        },
        "export": {
            enabled: false
        },
        value: 25000
    });
});

// onload functie laat de widget opstarten zodra de website word geladen
window.onload = function() {



//voedsel en drank widget
var chart = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    
    title:{
        //tekstkleur etc veranderen
        text: "Food & Drink Reserves",
        fontColor: "black",
        fontFamily: "arial"
    },
    axisY: {
        title: "Aantal KG",
        fontcolor:"green"
    },
    data: [{        
        type: "column",  
        showInLegend: false, 
        legendMarkerColor: "white",
        legendText: "",
        dataPoints: [      
            { y: 3500, label: "Eten" },
            { y: 5000,  label: "Drinken" }
         
        ]
    }]
});
chart.render();

// tank inhoud
var chart = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    title:{
        text: "Brandstof",
        horizontalAlign: "center" ,
            fontFamily:"arial",
            fontColor:"black"

    },
    data: [{
        type: "doughnut",
        startAngle: 60,
        //innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
            { y: 67, label: "full" },
            { y: 28, label: "empty" }
            
        ]
    }]
});
chart.render();

//temperatuur meter?
var dps = [];
var chart = new CanvasJS.Chart("chartContainer3", {
    exportEnabled: false,
    title :{
        text: "Engine Temperature Levels",
            fontFamily:"arial",
            fontColor:"black"

    },
    axisY: {
        includeZero: false
    },
    data: [{
        type: "spline",
        markerSize: 0,
        dataPoints: dps 
    }]
});

var xVal = 0;
var yVal = 40;
var updateInterval = 1000;
var dataLength = 15; // number of dataPoints visible at any point

var updateChart = function (count) {
    count = count || 1;
    // count is number of times loop runs to generate random dataPoints.
    for (var j = 0; j < count; j++) {   
        yVal = yVal + Math.round(5 + Math.random() *(-5-5));
        dps.push({
            x: xVal,
            y: yVal
        });
        xVal++;
    }
    if (dps.length > dataLength) {
        dps.shift();
    }
    chart.render();
};

updateChart(dataLength); 
setInterval(function(){ updateChart() }, updateInterval); 

}











