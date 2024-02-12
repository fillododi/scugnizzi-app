CREATE ROLE db_admin;
GRANT ALL PRIVILEGES ON DATABASE db TO db_admin;
GRANT db_admin TO admin_user;

CREATE TABLE Admin_Users(
    AdminID INT PRIMARY KEY,  
    RestaurantID INT,
    Name NVARCHAR(255),
    Surname NVARCHAR(255),
    admin_useraname NVARCHAR(255),
    LoggedIn DATETIME,
    LoggedOut DATETIME
);


CREATE TABLE Restaurants(
    RestaurantID INT PRIMARY KEY,
    RestaurantName NVARCHAR(255),
    AdminIDs INT, 
    Address NVARCHAR(255),
    City NVARCHAR(255),
    ZIP NVARCHAR(255),
    CapienzaMax INT
);

CREATE TABLE Plant(
    PlanimetriaID INT PRIMARY KEY,
    RestaurantID INT,
    Seats_Number INT, 
    CapienzaMax INT
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
    delivery_fee DECIMAL(6,2)
);

CREATE TABLE Menu_Items(
    ProductID INT PRIMARY KEY,
    AdditionID INT, 
    Product_Name NVARCHAR(255),
    Allergen NVARCHAR(255),
    RestaurantID INT,
    Product_Price DECIMAL(6,2),
    Disponibile BOOLEAN,
    is_Modifiable BOOLEAN,
    tempo_Preparazione DATETIME 
);

CREATE TABLE Additional_Items(
    AdditionID INT PRIMARY KEY, 
    Addition_Name NVARCHAR(255),
    AllergenID NVARCHAR(255),
    RestaurantID INT,
    Addition_Price DECIMAL(6,2),
    Disponibile BOOLEAN,
);

CREATE TABLE Allergens(
    AllergenID INT PRIMARY KEY,
    Description NVARCHAR(255),
    );

-- Riders?

CREATE TABLE Riders(
    RiderID INT PRIMARY KEY, 
    Rider_Review NVARCHAR(255), 
    Rider_Review_Score INT, 
);


