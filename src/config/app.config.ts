export const EnvConfiguration = () => ( {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: Number( process.env.DATABASE_PORT ) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
} );