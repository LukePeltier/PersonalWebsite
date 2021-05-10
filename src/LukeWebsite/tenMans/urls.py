from django.urls import path
from . import views

urlpatterns = [
    path('', views.Dashboard.as_view(), name='tenMansHome'),
    path('overallWinrateChart/', views.overallWinrateBarChart, name='overallWinrateChart'),
    path('overallWinrateTable/', views.overallWinrateTable, name='overallWinrateTable'),
    path('overallPlaytimeChart/', views.overallPlaytimeBarChart, name='overallPlaytimeChart'),
    path('overallPlaytimeTable/', views.overallPlaytimeTable, name='overallPlaytimeTable'),
    path('player/<int:pk>/', views.PlayerDetailView.as_view(), name='detailPlayer'),
    path('player/<int:pk>/winrateOTData/', views.PlayerWinrateOverTimeView.as_view(), name='playerWinrateOverTime'),
    path('newgame/', views.NewGameView.as_view(), name='newGameFormView'),
    path('updategame/', views.UpdateGameView.as_view(), name='updateGameFormView'),
    path('updateallgames/', views.UpdateAllGamesView.as_view(), name='updateAllGamesFormView'),
    path('playerDraftStats/', views.PlayerDraftStats.as_view(), name='playerDraftStatsView'),
    path('averagePlayerDraftOrderTable/', views.AverageDraftOrderTable.as_view(), name='averageDraftOrderTable'),
    path('expectedPlayerDraftOrderWinrateTable/', views.ExpectedDraftOrderWinrateTable.as_view(), name='expectedDraftOrderWinrateTable'),
    path('expectedPlayerDraftOrderWinrateTable/<str:lane>/', views.ExpectedDraftOrderWinrateLaneTable.as_view(), name='expectedDraftOrderWinrateLaneTable'),
    path('player/<int:pk>/laneCountData/', views.PlayerLaneCountTable.as_view(), name='playerLaneCountTable'),
    path('player/<int:pk>/championCountData/', views.PlayerChampionCountTable.as_view(), name='playerChampionCountTable'),
    path('player/<int:pk>/gamesPlayedData/', views.PlayerGamesTable.as_view(), name='playerGamesTable'),
    path('game/', views.GameListView.as_view(), name='gameListView'),
    path('game/<int:pk>/', views.GameDetailView.as_view(), name='detailGame'),
    path('game/<int:pk>/blueTeamTable/', views.BlueTeamTable.as_view(), name='blueTeamTable'),
    path('game/<int:pk>/redTeamTable/', views.RedTeamTable.as_view(), name='redTeamTable'),
    path('game/<int:pk>/blueTeamBanTable/', views.BlueTeamBanTable.as_view(), name='blueTeamBanTable'),
    path('game/<int:pk>/redTeamBanTable/', views.RedTeamBanTable.as_view(), name='redTeamBanTable'),
    path('champion/', views.ChampionListView.as_view(), name='championListView'),
    path('champion/<int:pk>/', views.ChampionDetailView.as_view(), name='detailChampion'),
    path('champion/<int:pk>/playtimeChart/', views.ChampionPlaytimeChartView.as_view(), name='championPlaytimeChart'),
    path('champion/<int:pk>/playerChampCountTable/', views.ChampionPlayerCountTableView.as_view(), name='playerChampCountTable'),
    path('champion/<int:pk>/gamesPlayedData/', views.ChampionGamesTable.as_view(), name='champGamesTable'),
    path('newplayer/', views.NewPlayerView.as_view(), name='newPlayerFormView'),
    path('laneMatchup/', views.LaneMatchupView.as_view(), name='laneMatchupFormView'),
    path('laneMatchupChart/<int:pk1>/<int:pk2>/', views.LaneMatchupChartView.as_view(), name='laneMatchupChart'),
    path('laneMatchupGamesTable/<int:pk1>/<int:pk2>/', views.MatchupGamesTable.as_view(), name='matchupGamesTable'),
    path('laneMatchupCountTable/<int:pk1>/<int:pk2>/', views.MatchupCountTable.as_view(), name='matchupCountTable'),
    path('duos/', views.DuoView.as_view(), name='duoView'),
    path('duoGamesTable/<int:pk1>/<int:pk2>/', views.DuoGamesTable.as_view(), name='duoGamesTable'),
    path('leaderboards/', views.Leaderboards.as_view(), name='leaderboards'),
    path('mostKillsGameTable/', views.MostKillsGameTable.as_view(), name='mostKillsGameTable'),
    path('mostDeathsGameTable/', views.MostDeathsGameTable.as_view(), name='mostDeathsGameTable'),
    path('mostAssistsGameTable/', views.MostAssistsGameTable.as_view(), name='mostAssistsGameTable'),
    path('mostDamageGameTable/', views.MostDamageGameTable.as_view(), name='mostDamageGameTable'),
    path('mostSpreeGameTable/', views.MostSpreeGameTable.as_view(), name='mostSpreeGameTable'),
    path('mostCSGameTable/', views.MostCSGameTable.as_view(), name='mostCSGameTable'),
    path('mostCSFirstTwentyGameTable/', views.MostCSFirstTwentyGameTable.as_view(), name='mostCSFirstTwentyGameTable'),
    path('mostVisionGameTable/', views.MostVisionGameTable.as_view(), name='mostVisionGameTable'),
    path('mostControlWardGameTable/', views.MostControlWardGameTable.as_view(), name='mostControlWardGameTable'),
    path('mostBanGameTable/', views.MostBanGameTable.as_view(), name='mostBanGameTable'),
    path('mostChampsTable/', views.MostChampsTable.as_view(), name='mostChampsTable'),
]
