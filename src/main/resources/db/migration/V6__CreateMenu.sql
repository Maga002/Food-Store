CREATE TABLE IF NOT EXISTS menus (
    menu_ID UUID PRIMARY KEY NOT NULL,
    title VARCHAR(100) NOT NULL,
    menu_price DECIMAL NOT NULL CHECK(menu_price > 0)
);



