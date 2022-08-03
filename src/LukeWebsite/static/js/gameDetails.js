$(function () {

    var defaultColumnClassName = "stat-center-auto stat-inset-border cellnowrap strong-text";
    var tableColumns = [
        {
            "className": "stat-right stat-leftcol-border",
            "data": "playerName",
            "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                $(nTd).html("<a href='/ten_mans/player/" + oData.playerID + "'>" + sData + "</a>");
            }
        },
        {
            "className": defaultColumnClassName,
            "data": "champion",
            "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                if(oData.riotChampionName!=undefined){
                    $(nTd).html("<a href='/ten_mans/champion/" + oData.championID+"'> <img src='https://ddragon.leagueoflegends.com/cdn/" + oData.championVersion +"/img/champion/"+oData.riotChampionName+".png' style='width:20px; height:20px;'/> "+sData+"</a>");
                }
            }
        },
        {
            "className": defaultColumnClassName,
            "data": "lane",
            "render": function (data, type) {
                if (type === 'sort') {
                    if (data === "Top") {
                        return 0;
                    }
                    if (data === "Jungle") {
                        return 1;
                    }
                    if (data === "Mid") {
                        return 2;
                    }
                    if (data === "Bot") {
                        return 3;
                    }
                    if (data === "Support") {
                        return 4;
                    }

                }
                return data;
            }
        },
        {
            "className": defaultColumnClassName,
            "data": "draftOrder"
        },
        {
            "className": defaultColumnClassName,
            "data": "kills"
        },
        {
            "className": defaultColumnClassName,
            "data": "deaths"
        },
        {
            "className": defaultColumnClassName,
            "data": "assists"
        },
        {
            "className": defaultColumnClassName,
            "data": "largestKillingSpree"
        },
        {
            "className": defaultColumnClassName,
            "data": "largestMultiKill"
        },
        {
            "className": defaultColumnClassName,
            "data": "doubleKills"
        },
        {
            "className": defaultColumnClassName,
            "data": "tripleKills"
        },
        {
            "className": defaultColumnClassName,
            "data": "quadraKills"
        },
        {
            "className": defaultColumnClassName,
            "data": "pentaKills"
        },
        {
            "className": defaultColumnClassName,
            "data": "totalDamageDealtToChampions",
            "render": $.fn.dataTable.render.number(',', '.')
        },
        {
            "className": defaultColumnClassName,
            "data": "visionScore"
        },
        {
            "className": defaultColumnClassName,
            "data": "crowdControlScore",
            "render": $.fn.dataTable.render.number(',', '.')
        },
        {
            "className": defaultColumnClassName,
            "data": "totalDamageTaken",
            "render": $.fn.dataTable.render.number(',', '.')
        },
        {
            "className": defaultColumnClassName,
            "data": "goldEarned",
            "render": $.fn.dataTable.render.number(',', '.')
        },
        {
            "className": defaultColumnClassName,
            "data": "turretKills"
        },
        {
            "className": defaultColumnClassName,
            "data": "inhibitorKills"
        },
        {
            "className": defaultColumnClassName,
            "data": "cs"
        },
        {
            "className": defaultColumnClassName,
            "data": "teamJungleMinionsKilled"
        },
        {
            "className": defaultColumnClassName,
            "data": "enemyJungleMinionsKilled"
        },
        {
            "className": defaultColumnClassName,
            "data": "baronKills"
        },
        {
            "className": defaultColumnClassName,
            "data": "dragonKills"
        },
        {
            "className": defaultColumnClassName,
            "data": "goldSpent"
        },
        {
            "className": defaultColumnClassName,
            "data": "killedNexus",
            "render": function (data, type, row) {
                return (data === true) ? '<p>&#9989;</p>' : '<p>&#10060</p>';
            }
        },
        {
            "className": defaultColumnClassName,
            "data": "largestCrit"
        },
        {
            "className": defaultColumnClassName,
            "data": "longestTimeAlive"
        },
        {
            "className": defaultColumnClassName,
            "data": "timesFlashed"
        },
        {
            "className": defaultColumnClassName,
            "data": "objectivesStolen"
        },
        {
            "className": defaultColumnClassName,
            "data": "timeAlive"
        },
        {
            "className": defaultColumnClassName,
            "data": "timeDead"
        },
        {
            "className": defaultColumnClassName,
            "data": "controlWardsPurchased"
        },
        {
            "className": defaultColumnClassName,
            "data": "firstBlood",
            "render": function (data, type, row) {
                return (data === true) ? '<p>&#9989;</p>' : '<p>&#10060</p>';
            }
        },
        {
            "className": defaultColumnClassName,
            "data": "firstTower",
            "render": function (data, type, row) {
                return (data === true) ? '<p>&#9989;</p>' : '<p>&#10060</p>';
            }
        },
        {
            "className": defaultColumnClassName,
            "data": "csRateFirstTen",
            "render": $.fn.dataTable.render.number(',', '.', 1)
        },
        {
            "className": defaultColumnClassName,
            "data": "csRateSecondTen",
            "render": $.fn.dataTable.render.number(',', '.', 1)
        },
        {
            "className": defaultColumnClassName,
            "data": "playerID"
        }
    ];
    var tableColumnDefs = [
        {
            targets: [28],
            visible: false
        },
        {
            targets: [1],
            class: "cellnowrap"
        }
    ];
    var blueTeamTable = $('#blueTeamTable').DataTable({
        "ajax": $('#blueTeamTable').data('url'),
        "columns": tableColumns,
        columnDefs:tableColumnDefs,
        paging: false,
        searching: false,
        info: false,
        "order": [
            [2, "asc"]
        ],
        "pageResize": true,
        "scrollX": true
    });

    var redTeamTable = $('#redTeamTable').DataTable({
        "ajax": $('#redTeamTable').data('url'),
        "columns": tableColumns,
        columnDefs: tableColumnDefs,
        paging: false,
        searching: false,
        info: false,
        "order": [
            [2, "asc"]
        ],
        "pageResize": true,
        "scrollX": true
    });

    var blueTeamBansTable = $('#blueTeamBansTable').DataTable({
        "ajax": $('#blueTeamBansTable').data('url'),
        "columns": [
            {
                "className": "stat-right cellnowrap stat-leftcol-border",
                "data": "champion",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    if(oData.riotChampionName!=undefined){
                        $(nTd).html("<a href='/ten_mans/champion/" + oData.championID+"'> <img src='https://ddragon.leagueoflegends.com/cdn/" + oData.championVersion +"/img/champion/"+oData.riotChampionName+".png' style='width:20px; height:20px;'/> "+sData+"</a>");
                    }
                }
            },
            {
                "className": defaultColumnClassName,
                "data": "playerName",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<a href='/ten_mans/player/" + oData.playerID + "'>" + sData + "</a>");
                }
            },
            {
                "data": "playerID"
            }
        ],
        columnDefs: [{
            targets: [2],
            visible: false
        }],
        paging: false,
        searching: false,
        info: false,
        "order": [
            [1, "asc"]
        ],
        "pageResize": true
    });

    var redTeamBansTable = $('#redTeamBansTable').DataTable({
        "ajax": $('#redTeamBansTable').data('url'),
        "columns": [
            {
                "className": "stat-right cellnowrap stat-leftcol-border",
                "data": "champion",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    if(oData.riotChampionName!=undefined){
                        $(nTd).html("<a href='/ten_mans/champion/" + oData.championID+"'> <img src='https://ddragon.leagueoflegends.com/cdn/" + oData.championVersion +"/img/champion/"+oData.riotChampionName+".png' style='width:20px; height:20px;'/> "+sData+"</a>");
                    }
                }
            },
            {
                "className": defaultColumnClassName,
                "data": "playerName",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<a href='/ten_mans/player/" + oData.playerID + "'>" + sData + "</a>");
                }
            },
            {
                "data": "playerID"
            }
        ],
        columnDefs: [{
            targets: [2],
            visible: false
        }],
        paging: false,
        searching: false,
        info: false,
        "order": [
            [1, "asc"]
        ],
        "pageResize": true
    });

});