$(function () {
    $(document).ready(function () {
        var playtimeTable = $('#overallPlaytimeTable').DataTable({
            "ajax": $('#overallPlaytimeTable').data('url'),
            "columns": [{
                    "data": "name",
                    "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                        $(nTd).html("<a href='/ten_mans/player/" + oData.playerID + "'>" + sData + "</a>");
                    }
                },
                {
                    "data": "top"
                },
                {
                    "data": "jungle"
                },
                {
                    "data": "mid"
                },
                {
                    "data": "bot"
                },
                {
                    "data": "supp"
                },
                {
                    "data": "overall"
                },
                {
                    "data": "playerID"
                }
            ],
            columnDefs: [{
                    type: "natural",
                    targets: [1, 2, 3, 4, 5, 6]
                },
                {
                    targets: [7],
                    visible: false
                }
            ],
            paging: false,
            searching: false,
            info: false
        });

        playtimeTable.on('draw', function () {
            var values = playtimeTable.column(6).data().toArray();
            var maxNum = Math.max(...values);
            playtimeTable.cells().every(function () {
                if (typeof (this.data()) === "number") {
                    $(this.node()).css('background-color', getRGBHeatmapColor(this.data(), window.chartColors.white, window.chartColors.green, window.chartColors.yellow, 1, false, 0, 50, maxNum));
                }
            });
        });

    });

});