// Simulating MySQL Database Concepts in JavaScript

// 1. Define two types of tables: Entities and Management Tables
// Entity Table: Teams
const teams = [
    { team_id: 1, team_name: "Ireland" },
    { team_id: 2, team_name: "France" },
    { team_id: 3, team_name: "England" },
];

// Entity Table: Players
const players = [
    { player_id: 101, player_name: "John", player_team: 1 },
    { player_id: 102, player_name: "Paul", player_team: 1 },
    { player_id: 103, player_name: "Luc", player_team: 2 },
    { player_id: 104, player_name: "Pierre", player_team: 2 },
    { player_id: 105, player_name: "Tom", player_team: 3 },
];

// Management Table: Matches
const matches = [
    { match_id: 201, match_home_team: 1, match_away_team: 2, match_date: "2024-12-20" },
    { match_id: 202, match_home_team: 2, match_away_team: 3, match_date: "2024-12-21" },
    { match_id: 203, match_home_team: 3, match_away_team: 1, match_date: "2024-12-22" },
];

// 2. Simulate MySQL Queries in JavaScript
// INNER JOIN: Get all matches with team names for home and away teams
const matchesWithTeams = matches.map(match => {
    const homeTeam = teams.find(team => team.team_id === match.match_home_team);
    const awayTeam = teams.find(team => team.team_id === match.match_away_team);
    return {
        match_id: match.match_id,
        home_team: homeTeam?.team_name || "Unknown",
        away_team: awayTeam?.team_name || "Unknown",
        match_date: match.match_date,
    };
});
console.log("Matches with Team Names:", matchesWithTeams);

// LEFT JOIN: Get all players and their teams
const playersWithTeams = players.map(player => {
    const team = teams.find(team => team.team_id === player.player_team);
    return {
        player_id: player.player_id,
        player_name: player.player_name,
        team_name: team?.team_name || "No Team",
    };
});
console.log("Players with Teams:", playersWithTeams);

// LIKE: Find teams with "land" in their name
const teamsWithLand = teams.filter(team => team.team_name.includes("land"));
console.log("Teams with 'land' in name:", teamsWithLand);

// SQL Functions: Count players in each team
const playerCounts = teams.map(team => {
    const playerCount = players.filter(player => player.player_team === team.team_id).length;
    return {
        team_name: team.team_name,
        player_count: playerCount,
    };
});
console.log("Player Count per Team:", playerCounts);
