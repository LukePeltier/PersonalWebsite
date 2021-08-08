from django.urls import path
import tenMans.views as views

urlpatterns = [
    path('', views.base_views.Dashboard.as_view(), name='tenMansHome'),
    path('overallWinrateChart/', views.base_views.overallWinrateBarChart, name='overallWinrateChart'),
    path('overallWinrateTable/', views.base_views.overallWinrateTable, name='overallWinrateTable'),
    path('overallPlaytimeChart/', views.base_views.overallPlaytimeBarChart, name='overallPlaytimeChart'),
    path('overallPlaytimeTable/', views.base_views.overallPlaytimeTable, name='overallPlaytimeTable'),
    path('player/<int:pk>/', views.base_views.PlayerDetailView.as_view(), name='detailPlayer'),
    path('player/<int:pk>/winrateOTData/', views.base_views.PlayerWinrateOverTimeView.as_view(), name='playerWinrateOverTime'),
    path('newgame/', views.base_views.NewGameView.as_view(), name='newGameFormView'),
    path('updategame/', views.base_views.UpdateGameView.as_view(), name='updateGameFormView'),
    path('updateallgames/', views.base_views.UpdateAllGamesView.as_view(), name='updateAllGamesFormView'),
    path('playerDraftStats/', views.base_views.PlayerDraftStats.as_view(), name='playerDraftStatsView'),
    path('averagePlayerDraftOrderTable/', views.base_views.AverageDraftOrderTable.as_view(), name='averageDraftOrderTable'),
    path('expectedPlayerDraftOrderWinrateTable/', views.base_views.ExpectedDraftOrderWinrateTable.as_view(), name='expectedDraftOrderWinrateTable'),
    path('expectedDraftOrderWinrateCaptainTable/', views.base_views.ExpectedDraftOrderWinrateCaptainTable.as_view(), name='expectedDraftOrderWinrateCaptainTable'),
    path('expectedPlayerDraftOrderWinrateTable/<str:lane>/', views.base_views.ExpectedDraftOrderWinrateLaneTable.as_view(), name='expectedDraftOrderWinrateLaneTable'),
    path('player/<int:pk>/trophyCaseString/', views.base_views.PlayerTrophyCaseString.as_view(), name='playerTrophyCaseString'),
    path('player/<int:pk>/laneCountData/', views.base_views.PlayerLaneCountTable.as_view(), name='playerLaneCountTable'),
    path('player/<int:pk>/championCountData/', views.base_views.PlayerChampionCountTable.as_view(), name='playerChampionCountTable'),
    path('player/<int:pk>/gamesPlayedData/', views.base_views.PlayerGamesTable.as_view(), name='playerGamesTable'),
    path('game/', views.base_views.GameListView.as_view(), name='gameListView'),
    path('game/<int:pk>/', views.base_views.GameDetailView.as_view(), name='detailGame'),
    path('game/<int:pk>/blueTeamTable/', views.base_views.BlueTeamTable.as_view(), name='blueTeamTable'),
    path('game/<int:pk>/redTeamTable/', views.base_views.RedTeamTable.as_view(), name='redTeamTable'),
    path('game/<int:pk>/blueTeamBanTable/', views.base_views.BlueTeamBanTable.as_view(), name='blueTeamBanTable'),
    path('game/<int:pk>/redTeamBanTable/', views.base_views.RedTeamBanTable.as_view(), name='redTeamBanTable'),
    path('champion/', views.base_views.ChampionListView.as_view(), name='championListView'),
    path('champion/<int:pk>/', views.base_views.ChampionDetailView.as_view(), name='detailChampion'),
    path('champion/<int:pk>/playtimeChart/', views.base_views.ChampionPlaytimeChartView.as_view(), name='championPlaytimeChart'),
    path('champion/<int:pk>/playerChampCountTable/', views.base_views.ChampionPlayerCountTableView.as_view(), name='playerChampCountTable'),
    path('champion/<int:pk>/gamesPlayedData/', views.base_views.ChampionGamesTable.as_view(), name='champGamesTable'),
    path('newplayer/', views.base_views.NewPlayerView.as_view(), name='newPlayerFormView'),
    path('laneMatchup/', views.base_views.LaneMatchupView.as_view(), name='laneMatchupFormView'),
    path('laneMatchupChart/<int:pk1>/<int:pk2>/', views.base_views.LaneMatchupChartView.as_view(), name='laneMatchupChart'),
    path('laneMatchupGamesTable/<int:pk1>/<int:pk2>/', views.base_views.MatchupGamesTable.as_view(), name='matchupGamesTable'),
    path('laneMatchupCountTable/<int:pk1>/<int:pk2>/', views.base_views.MatchupCountTable.as_view(), name='matchupCountTable'),
    path('duos/', views.base_views.DuoView.as_view(), name='duoView'),
    path('duoGamesTable/<int:pk1>/<int:pk2>/', views.base_views.DuoGamesTable.as_view(), name='duoGamesTable'),
    path('leaderboards/', views.base_views.Leaderboards.as_view(), name='leaderboards'),
    path('mostKillsGameTable/', views.leaderboard_tables.MostKillsGameTable.as_view(), name='mostKillsGameTable'),
    path('mostDeathsGameTable/', views.leaderboard_tables.MostDeathsGameTable.as_view(), name='mostDeathsGameTable'),
    path('mostAssistsGameTable/', views.leaderboard_tables.MostAssistsGameTable.as_view(), name='mostAssistsGameTable'),
    path('mostDamageGameTable/', views.leaderboard_tables.MostDamageGameTable.as_view(), name='mostDamageGameTable'),
    path('mostSpreeGameTable/', views.leaderboard_tables.MostSpreeGameTable.as_view(), name='mostSpreeGameTable'),
    path('mostCSGameTable/', views.leaderboard_tables.MostCSGameTable.as_view(), name='mostCSGameTable'),
    path('mostCSFirstTwentyGameTable/', views.leaderboard_tables.MostCSFirstTwentyGameTable.as_view(), name='mostCSFirstTwentyGameTable'),
    path('mostVisionGameTable/', views.leaderboard_tables.MostVisionGameTable.as_view(), name='mostVisionGameTable'),
    path('mostControlWardGameTable/', views.leaderboard_tables.MostControlWardGameTable.as_view(), name='mostControlWardGameTable'),
    path('mostBanGameTable/', views.leaderboard_tables.MostBanGameTable.as_view(), name='mostBanGameTable'),
    path('mostChampsTable/', views.leaderboard_tables.MostChampsTable.as_view(), name='mostChampsTable'),
    path('captainWinrateTable/', views.leaderboard_tables.CaptainWinrateTable.as_view(), name='captainWinrateTable'),
    path('captainCountTable/', views.leaderboard_tables.CaptainCountTable.as_view(), name='captainCountTable'),
    path('winstreakTable/', views.leaderboard_tables.WinstreakTable.as_view(), name='winstreakTable'),
    path('lossstreakTable/', views.leaderboard_tables.LossstreakTable.as_view(), name='lossstreakTable'),
    path('pentakillsTable/', views.leaderboard_tables.PentakillsTable.as_view(), name='pentakillsTable'),
    path('quadrakillsTable/', views.leaderboard_tables.QuadrakillsTable.as_view(), name='quadrakillsTable'),
    path('triplekillsTable/', views.leaderboard_tables.TriplekillsTable.as_view(), name='triplekillsTable'),
    path('doublekillsTable/', views.leaderboard_tables.DoublekillsTable.as_view(), name='doublekillsTable'),
    path('teamBuilder/', views.base_views.TeamBuilderView.as_view(), name='teamBuilderView')
]
