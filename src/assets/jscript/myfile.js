const { randomBytes } = require("crypto");
const { redraw } = require("plotly.js-dist-min");

function random () {
  return Math.random() * 100 + 1;
}


function mymethod(){
  var trace1 = {




     y : Array.apply(null, Array(120)).map(() => Math.ceil(Math.random() * 370 + 250)),


    type: 'bar',
    marker: {
      color: 'rgb(242, 242, 242)',
      opacity: 0.75,
    }
  };
  console.log(trace1.y);

  var trace2 = {
  y : Array(120).fill(600),

  type: 'bar',

    marker: {
      color: 'rgb(0,0,0)',
      opacity: 1
    }
  };

  var data = [trace2,trace1];

  var layout = {

    barmode: 'overlay',
    bargap: 0.1,

    width:1130,
    height :180,
    showlegend:false,
    margin: {
      l: 25,
      r: 0,
      b: 80,
      t: 10,
    },



    // plot_bgcolor: "rgba(0,0,0,0)",
    // paper_bgcolor: "rgba(0,0,0,0)"
  };
  Plotly.newPlot('myDiv', data, layout);

}



