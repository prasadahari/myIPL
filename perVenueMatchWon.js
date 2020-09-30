

function fetchAndVisualizeVenueWon() {
    fetch("./perVenueMatchWon.json")
      .then(r => r.json())
      .then(visualizeDataVenueWon);
}
  
fetchAndVisualizeVenueWon();

  function visualizeDataVenueWon(data) {
    visualizeVenueWonPerTeam(data);
    return;
  }

function  visualizeVenueWonPerTeam(perVenueMatchWon){
    console.log(perVenueMatchWon)
    const seriesData = [];
    for (let year in perVenueMatchWon) {
      seriesData.push([year, perVenueMatchWon[year]]);
    }

    Highcharts.chart("per-venue-match-won", {
        chart: {
          type: "column",
        },
        title: {
          text: "Story:- Chennai Super Kings Winning Streak Each Year",
          style: {
            color: 'Purple'
          }
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
            text: "No of Matches won"
          }
        },
        series: [
          {
            name: "Chennai Super Kings",
            data: seriesData,
            color : '#cafc03'
          }
        ]
      });
}

