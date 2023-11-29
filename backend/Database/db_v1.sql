CREATE ROLE db_admin;
GRANT ALL PRIVILEGES ON DATABASE db TO db_admin;
GRANT db_admin TO admin_user;

CREATE TABLE Admin_Users(
    AdminID INT PRIMARY KEY,  
    RestaurantID INT,
    FirstName NVARCHAR(255),
    LastName NVARCHAR(255),
    admin_useraname NVARCHAR(255),
    LoggedIn DATETIME,
    LoggedOut DATETIME
);


CREATE TABLE Ristoranti(
    RestaurantID INT PRIMARY KEY,
    RestaurantName NVARCHAR(255),
    AdminIDs INT, 
    Address NVARCHAR(255),
    City NVARCHAR(255),
    ZIP NVARCHAR(255),
    CapienzaMax INT
);

CREATE TABLE Planimetrie(
    PlanimetriaID INT PRIMARY KEY,
    RestaurantID INT,
    Seats_Number INT
);

CREATE TABLE Common_User(
    UserID INT PRIMARY KEY,
    Name NVARCHAR(255),
    Surname NVARCHAR(255),
    Address NVARCHAR(255),
    City NVARCHAR(255),
    ZIP NVARCHAR(255),
    TakeAwayIDs INT, 
    ReservationIDs INT 
);

CREATE TABLE Reservations(
    ReservationID INT PRIMARY KEY, 
    UserID INT,
    AdminID INT,
    RestaurantID INT,
    Occurred DATETIME,
    DateFor DATETIME,
    Party INT,
    Frequent BOOLEAN,
    Accepted BOOLEAN
);

CREATE TABLE Take_Away(
    TakeAwayID INT PRIMARY KEY,
    UserID INT,
    AdminID INT,
    RestaurantID INT,
    Occurred DATETIME,
    DateFor DATETIME,
    ProductID INT,
    Addition NVARCHAR(255),
    Product_Price DECIMAL(6,2),
    Addition_Price DECIMAL(6,2),
    Total_Price DECIMAL(6,2),
    Accepted BOOLEAN,
    Delivery BOOLEAN,
    Addizionale_consegna DECIMAL(6,2)
);

CREATE TABLE Macro_Prodotti(
    ProductID INT PRIMARY KEY,
    AdditionID INT, 
    Product_Name NVARCHAR(255),
    Allergeni NVARCHAR(255),
    RestaurantID INT,
    Product_Price DECIMAL(6,2),
    Disponibile BOOLEAN,
    is_Modifiable BOOLEAN,
    tempo_Preparazione DATETIME 
);

CREATE TABLE Modifica_Prodotti(
    AdditionID INT PRIMARY KEY, 
    Addition_Name NVARCHAR(255),
    Allergeni NVARCHAR(255),
    RestaurantID INT,
    Addition_Price DECIMAL(6,2),
    Disponibile BOOLEAN,
);


