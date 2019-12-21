Highcharts.chart('highc2', {
    chart: {
    type:"bar",
        
    },
    title: {
        text: 'Proporzioni risposte'
    },
    subtitle:{
        text:'Visualizzazione 2',
            },
    xAxis: {
        categories:  ['Utilità','Intuitività','Chiarezza','Informatività','Bellezza','Complessivo']
    },
    yAxis: { // Primary yAxis
        
        
        title: {
            text: 'Percentuale Risposte',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    },

    tooltip: {
        shared: true
    },
    plotOptions: {
    series: {
      stacking: 'percent'
    }},

    series: [{
        name: 'Positive',
        type: 'column',
        color:'#1f77b4',
        data: [27,27,28,30,25,31],
        
    }, {
      name: 'Negative',
      type: 'column',
      color:'#FF0000',
      data: [12, 12, 11, 9, 14,8]
    },{
        name: 'Intervallo di confidenza',
        type: 'errorbar',
        color:'#ffffff',
        data: [[15.2,46.4], [15.2,46.4], [12.6,43.8], [7.5,38.7 ], [20.3,51.5],[4.9,36.1 ]],
        
    
        
    },]
});