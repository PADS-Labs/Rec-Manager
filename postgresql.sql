CREATE TABLE player(
    id serial PRIMARY KEY,
    firstname character varying(20),
    lastname character varying(20),
    email character varying(50),
    username character varying(20),
    googleid character varying(40),
    teams json,
    administrator boolean 
);

CREATE TABLE team(
    id serial PRIMARY KEY,
    teamname character varying(70),
    administrator json,
    calenderlink character varying(70),
    players json
);

CREATE TABLE attendance(
    team character varying(70),
    attendees json,
    gamedate date
)


INSERT INTO player(firstname, lastname, email, username)
VALUES
('Dale','Nogiec','dnogiec@aol.com', 'Fluffy'),
('Brock', 'Kensigton', 'bk@gmail.com', 'Dirty'),
('Susan', 'Graves', 'susangraves@gmail.com', 'Sweet Susan'),
('Felicia', 'Noonan', 'felicianoonan@gmail.com', 'Bye Felicia')

INSERT INTO team(teamname, calenderlink)
VALUES
('Clevers', 'googlecalender.com'),
('Dapper Bats', 'googlecalender.com'),
('Clovers', 'googlecalender.com'),
('Doodle Berries', 'googlecalender.com')

INSERT INTO attendance(team, attendees, gamedate)
VALUES
('Clevers', '{'player': 'Brock'}', clock_timestamp())