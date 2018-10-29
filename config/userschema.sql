CREATE TABLE user (
  UserID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  CreatedAt DATE,
  Address VARCHAR(250),
  SSN INT
);

  CREATE TABLE userCards (
    AccountID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    BankNumber INT,
    CardNumber INT,
    CVC INT(3),
    PIN INT(4),
    Status BOOLEAN,
    Balance INT,
    FOREIGN KEY (UserID) REFERENCES user(UserID)

  );

  CREATE TABLE transactions (
    TransactionID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Amount INT,
    Reason VARCHAR(255),
    UserID INT NOT NULL,
    FOREIGN KEY (UserID) REFERENCES user(UserID)
  );