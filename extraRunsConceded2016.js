function fetchAndVisualizeDataExtra() {
    fetch("./extraRunsConceded.json")
      .then(r => r.json())
      .then(visualizeDataExtra);
}
  
fetchAndVisualizeDataExtra();

  function visualizeDataExtra(data) {
    visualizeExtraRunsConceded(data);
    return;
  }

function visualizeExtraRunsConceded(extraRuns){
    console.log(extraRuns);
    const seriesData = [];
    for (let name in extraRuns) {
      seriesData.push([name, extraRuns[name]]);
    }

    Highcharts.chart("extra-runs-conceded", {
      chart: {
        type: "column"
      },
      title: {
        text: "Extra Runs conceded by each team in 2016"
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
          text: "Extra Runs"
        }
      },
      series: [
        {
          name: "Extra Runs",
          data: seriesData,
          color : '#58508d'
        }
      ]
    });
}