export const chartOptions = {
    title: {
        text: "",
        style: {
            color: '#fff',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    accessibility: {
        highContrastTheme: true
    },
    yAxis: {
        title: {
            text: "",
            style: {
                color: '#fff',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        gridLineColor: "transparent",
        dataSorting: {
            enabled: true
        },
    },
    tooltip: {
        borderColor: "#0d575a",
        color: '#fff',
        fontWeight: 'bold',
        useHTML: true,
        backgroundColor: "#0c0c0f",
        crosshairs: {
            color: '#5d5d61',
            dashStyle: 'solig',
            width: "2px"
        },
        formatter: function(){
            return '<div style="background-color:'+ this.series.color +'!important; font-weight:bold;color:#fff; font-size:10px;" class="tooltip"> ' + this.series.name + '</br>'+ this.y +' messages on '+ this.x  + '</div>';
        }
    },
    xAxis: {
        labels: {
            style: {
                color: '#3e424a',
            }
        },
        style: {color: "#5d5d61"},
        title: {
            style: {
                color: '#fff',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
    }, 
    chart: {
        backgroundColor:  "#22222c",
    },
}