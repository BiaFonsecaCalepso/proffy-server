import knex from "knex"; // ORM: Object Relation Mapping
import path from "path"; 

const db = knex({
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, "database.sqlite"),
    },
    useNullAsDefault: true,
});

export default db;