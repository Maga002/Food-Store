CREATE TABLE IF NOT EXISTS foods(
    food_ID UUID PRIMARY KEY NOT NULL,
    title VARCHAR(100) NOT NULL,
    ingredients VARCHAR(100)[] NOT NULL,
    price DECIMAl NOT NULL,
    count INTEGER NOT NULL CHECK(count >= 0)
);