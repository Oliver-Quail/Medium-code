window.onload = function() {

    //global graph settings
    Chart.defaults.font.size = 16;
    Chart.defaults.font.family = "'Open Sans Condensed', sans-serif";
    Chart.defaults.font.weight = "bold";


    //spectific default settings
    Chart.defaults.plugins.legend.labels.color = "#212529";
    Chart.defaults.plugins.title.font.size = 24;


    //Graph 1

    var Chart1 = document.getElementById("Chart1");
    //Chart1.width = 0;

    var ctx = document.getElementById('Chart1').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['From flight', 'From Ground crew'],
        datasets: [{
            data: [12, 19],
            backgroundColor: [
                '#ef233c',
                '#d90429',
                
                
            ],
            borderColor: [
                "#212529",
                "#212529",
                
            ],
            borderWidth: 0
        }]
    },
    options: {
        
        scales: {
        },
        plugins : {
            title: {
                display: true,
                align: "center",
                color: "#212529",
                text: "Breakdown of carbon from areoplane",
                font : {
                    size: 36,
                    weight: "bold"
                    
                }
              
            },
            legend: {
                display: true,
                position: "bottom",

                labels: {
                    font: {
                        size: "24",
                        fontColor: "#edf2f4"
                    },
                    boxWidth: 20
                    

                }
            },
            
        }
    }
});








//end code
}