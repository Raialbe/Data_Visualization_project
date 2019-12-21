Highcharts.chart('highc1', {
    chart: {
    type:"bar",
        
    },
    title: {
        text: 'Proporzioni risposte'
    },
    subtitle:{
        text:'Visualizzazione 1',
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
        data: [24, 25, 23, 28, 27,31],
        
    }, {
      name: 'Negative',
      type: 'column',
      color:'#FF0000',
      data: [15, 14, 16, 11, 12,8]
      
    },{
        name: 'Intervallo di confidenza',
        type: 'errorbar',
        color:'#ffffff',
        data: [[22.9, 54.1], [20.3, 51.5], [56.6, 25.4], [43.8,12.6 ], [46.4,15.2],[4.9,36.1 ]],
        
    
        
    },]
});