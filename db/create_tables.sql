CREATE TABLE IF NOT EXISTS nest_api_project.users (
  PersonID varchar(250) NOT NULL,
  LastName varchar(250) NOT NULL,
  FirstName varchar(250) NOT NULL,
  Email varchar(250) NOT NULL,
  PRIMARY KEY (PersonID)
);