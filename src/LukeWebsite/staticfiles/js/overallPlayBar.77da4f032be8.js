$(function () {

    var $overallPlaytimeChart = $("#overallPlaytimeChart");
    var color = Chart.helpers.color;
    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(92, 184, 92)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)',
        white: 'rgb(255, 255, 255)'
    };
    $.ajax({
        url: $overallPlaytimeChart.data("url"),
        success: function (data) {

            var ctx = $overallPlaytimeChart;

            var overallWinrate = new Chart(ctx, {
                type: 'horizontalBar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Overall',
                        data: data.overall,
                        backgroundColor: function (context) {
                            var index = context.dataIndex;
                            var value = context.dataset.data[index];
                            if(value==="N/A"){
                                return "rgba(255, 255, 255, 0)";
                            }
                            return getRGBHeatmapColor(value, window.chartColors.white, window.chartColors.green, window.chartColors.yellow, 1, false, 0, 50, data.max)
                        },
                        borderWidth: 1,
                        minBarLength: 5
                    }, {
                        label: 'Top',
                        data: data.top,
                        hidden: true,
                        backgroundColor: function (context) {
                            var index = context.dataIndex;
                            var value = context.dataset.data[index];
                            return getRGBHeatmapColor(value, window.chartColors.white, window.chartColors.green, window.chartColors.yellow, 1, false, 0, 50, data.max)
                        },
                        borderWidth: 1,
                        minBarLength: 5
                    }, {
                        label: 'Jungle',
                        data: data.jungle,
                        hidden: true,
                        backgroundColor: function (context) {
                            var index = context.dataIndex;
                            var value = context.dataset.data[index];
                            return getRGBHeatmapColor(value, window.chartColors.white, window.chartColors.green, window.chartColors.yellow, 1, false, 0, 50, data.max)
                        },
                        borderWidth: 1,
                        minBarLength: 5
                    }, {
                        label: 'Middle',
                        data: data.mid,
                        hidden: true,
                        backgroundColor: function (context) {
                            var index = context.dataIndex;
                            var value = context.dataset.data[index];
                            return getRGBHeatmapColor(value, window.chartColors.white, window.chartColors.green, window.chartColors.yellow, 1, false, 0, 50, data.max)
                        },
                        borderWidth: 1,
                        minBarLength: 5
                    }, {
                        label: 'Bottom',
                        data: data.bot,
                        hidden: true,
                        backgroundColor: function (context) {
                            var index = context.dataIndex;
                            var value = context.dataset.data[index];
                            return getRGBHeatmapColor(value, window.chartColors.white, window.chartColors.green, window.chartColors.yellow, 1, false, 0, 50, data.max)
                        },
                        borderWidth: 1,
                        minBarLength: 5
                    }, {
                        label: 'Support',
                        data: data.support,
                        hidden: true,
                        backgroundColor: function (context) {
                            var index = context.dataIndex;
                            var value = context.dataset.data[index];
                            return getRGBHeatmapColor(value, window.chartColors.white, window.chartColors.green, window.chartColors.yellow, 1, false, 0, 50, data.max)
                        },
                        borderWidth: 1,
                        minBarLength: 5
                    }]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 15,
                            generateLabels: function (chart) {
                                labels = Chart.defaults.global.legend.labels.generateLabels(chart);
                                for (var key in labels) {
                                    labels[key].fillStyle = window.chartColors.blue;
                                }
                                return labels;
                            }
                        }

                    },
                    title: {
                        display: true,
                        text: 'Winrate Bar Chart'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    }
                }
            });


        }
    });

});