Highcharts.chart('highc3', {
    chart: {
    type:"bar",
        
    },
    title: {
        text: 'Proporzioni risposte'
    },
    subtitle:{
        text:'Visualizzazione 3',
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
        data: [24,25,24,29,26,31],
        
    }, {
      name: 'Negative',
      type: 'column',
      color:'#FF0000',
      data: [15,14,15,10,13,8]
    },{
        name: 'Intervallo di confidenza',
        type: 'errorbar',
        color:'#ffffff',
        data: [[22.9,54.1], [20.3,51.5], [20.3,51.5],[10.0,41.2 ], [17.7,48.9],[4.9,36.1 ]],
        
    
        
    },]
});