CREATE TABLE IF NOT EXISTS orders (
    order_ID UUID PRIMARY KEY NOT NULL,
    address VARCHAR(250) NOT NULL,
    meals VARCHAR(200)[] NOT NULL,
    description VARCHAR(300)
)