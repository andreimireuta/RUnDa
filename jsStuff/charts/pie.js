
            var randomScalingFactor = function() {
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
                responsive: true
              }
            };
        
            window.onload = function() {
              var ctx = document.getElementById('chart-area').getContext('2d');
              window.myPie = new Chart(ctx, config);
            };
