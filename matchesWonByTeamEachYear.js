function fetchAndVisualizeDataWon() {
    fetch("./matchesWonTeam.json")
      .then(r => r.json())
      .then(visualizeDataWon);
}
  
fetchAndVisualizeDataWon();

function visualizeDataWon(data) {
    visualizeMatchesWonByTeam(data);
    return;
  }

function visualizeMatchesWonByTeam(matchesWon){

    const array = []
    const arr = []
    for (let year in matchesWon) {
      array.push(year)
      arr.push(matchesWon[year])
    }

    //console.log(arr)
    let set = new Set();
    for (let val in arr) {
        let obj = arr[val]
        for(let key of Object.keys(obj)){
            set.add(key);
        }
      }
      let newArr = Array.from(set).sort();
      //console.log(newArr)
      let newObj = {}
        for(let name of newArr){
            for(let year of array){
                let obj = matchesWon[year]
                if(name in newObj){
                    if(obj[name]){
                        newObj[name].push(obj[name])
                    }else{
                        newObj[name].push(0)
                    }
                }else{
                    if(obj[name]){
                        newObj[name] = [obj[name]]
                    }else{
                        obj[name] = 0
                        newObj[name] = [obj[name]]      
                    }
                }
            }
        }
    //console.log(newObj)           

     var options = {
        chart: {
            type: 'column',
            renderTo: 'no-of-matches-won',
        },
        title: {
            text: 'Number of matches won per year by each team'
        },
        subtitle: {
            text: 'Source: iplt20.com'
        },
        xAxis: {
            categories: array,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches Won'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: []
    };
    
    let index = newArr.indexOf("");
    newArr[index] = "No result";
    //console.log(newArr.sort())
    let copied = [...newArr].sort();

    //dynamically adding to the series of Highchart.
    for(let val of copied){
        if(val === "No result"){
            options.series.push({
                name: val,
                data: newObj['']
            });
        }else{
            options.series.push({
                name: val,
                data: newObj[val]
            });
        }
    }

    var chart = new Highcharts.Chart(options);

         
}

