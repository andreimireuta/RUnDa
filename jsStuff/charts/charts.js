function selectChart(numar) {
  if (numar === 0) {
    document.getElementById('canvas').style.width = '70vw';
    var ctx = document.getElementById('chart-pie').getContext('2d');
    window.myPie = new Chart(ctx, config);
  } else if (numar === 1) {
    document.getElementById('canvas-line').style.width = '90vw';
    var ctx = document.getElementById('chart-line').getContext('2d');
    window.myLine = new Chart(ctx, config1);
  } else {
    var ctx = document.getElementById('chart-pie').getContext('2d');
    window.myPie = new Chart(ctx, config);
  }
}
var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
};

var config = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue'
    ]
  },
  options: {
    responsive: true,
    fullWidth: true,
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 10
      }
    }
  }
};


var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var config1 = {
  type: 'line',
  data: {
    labels: MONTHS,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'red',
      borderColor: 'red',
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      fill: false,
    }, {
      label: 'My Second dataset',
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
    }]
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
          fontSize: 10
        }
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
          fontSize: 10
        }
      }
    },
    fullWidth: true,
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 10
      }
    }
  }
};

