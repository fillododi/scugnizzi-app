CREATE ROLE db_admin;
GRANT ALL PRIVILEGES ON DATABASE db TO db_admin;
GRANT db_admin TO admin_user;

CREATE TABLE Mother (
    AdminID INT PRIMARY KEY,  
    RestID INT,
    FirstName NVARCHAR(255),
    LastName NVARCHAR(255),
    admin_user NVARCHAR(255),
    LoggedIn DATETIME,
    LoggedOut DATETIME
);


CREATE TABLE Ristoranti(
    RestID INT PRIMARY KEY,
    RestName NVARCHAR(255),
    AdminIDs INT , 
    Address NVARCHAR(255),
    City NVARCHAR(255),
    ZIP NVARCHAR(255),
    CapienzaMax INT
);

CREATE TABLE Planimetrie(
    PlantID INT PRIMARY KEY,
    RestID INT,
    Seats_Numb INT
);

CREATE TABLE Common_User(
    UserID INT PRIMARY KEY,
    Name NVARCHAR(255),
    Surname NVARCHAR(255),
    Address NVARCHAR(255),
    City NVARCHAR(255),
    ZIP NVARCHAR(255),
    TakeAwayIDs INT, 
    ResIDs INT 
);

CREATE TABLE Reservations(
    ResID INT PRIMARY KEY, 
    UserID INT,
    AdminID INT,
    RestID INT,
    Occurred DATETIME,
    DateFor DATETIME,
    Party INT,
    Frequent BOOLEAN,
    Accepted BOOLEAN
);

CREATE TABLE Take_Away(
    TakeAwID INT PRIMARY KEY,
    UserID INT,
    AdminID INT,
    RestID INT,
    Occurred DATETIME,
    DateFor DATETIME,
    ProdID INT,
    Addition NVARCHAR(255),
    Prod_Price DECIMAL(6,2),
    Add_Price DECIMAL(6,2),
    Tot_Price DECIMAL(6,2),
    Accepted BOOLEAN
);

CREATE TABLE Macro_Prodotti(
    ProdID INT PRIMARY KEY,
    AdditionID INT, 
    Prod_Name NVARCHAR(255),
    Allergeni NVARCHAR(255),
    RestID INT,
    Prod_Price DECIMAL(6,2),
    Disponibile BOOLEAN,
    is_Modifiable BOOLEAN,
    ET_Preparazione DATETIME 
);

CREATE TABLE Mod_Prodotti(
    AdditionID INT PRIMARY KEY, 
    Add_Name NVARCHAR(255),
    Allergeni NVARCHAR(255),
    RestID INT,
    Add_Price DECIMAL(6,2),
    Disponibile BOOLEAN,
    Addizionale DECIMAL(6,2)
);


