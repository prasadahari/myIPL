function fetchAndVisualizeDataEconomic() {
    fetch("./economicBowlers.json")
      .then(r => r.json())
      .then(visualizeDataEconomic);
}
  
fetchAndVisualizeDataEconomic();

  function visualizeDataEconomic(data) {
    visualizeEconomicBowlers(data);
    return;
  }

function visualizeEconomicBowlers(economicBowlers){
    //console.log(economicBowlers)
    const seriesData = [];
    for (let name in economicBowlers) {
      seriesData.push([name, parseFloat(economicBowlers[name])]);
    }
    //console.log(seriesData)

    Highcharts.chart("economic-bowlers-year", {
        chart: {
          type: "column"
        },
        title: {
          text: "Top Economic Bowlers in 2015 season"
        },
        subtitle: {
          text:
            'Source: iplt20.com'
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          min: 0,
          title: {
            text: "Economy"
          }
        },
        series: [
          {
            name: "Economy",
            data: seriesData,
            color : '#003f5c'
          }
        ]
      });
}