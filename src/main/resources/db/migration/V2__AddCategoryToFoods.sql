ALTER TABLE foods ADD category VARCHAR(30) CHECK(category = 'MAIN' OR category = 'SIDE' OR category = 'DESSERT' OR category = 'SALAD');