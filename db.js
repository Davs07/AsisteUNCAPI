import sql from 'mssql';

const sqlConfig = {
    user: 'sa',
    password: '1234',
    database: 'BDEvents',
    server: 'localhost', // o la dirección de tu servidor de SQL Server
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // true si usas Azure o necesitas encriptar
        trustServerCertificate: true, // para desarrollo local
    }
};

export async function getConnection() {
    try {
        return await sql.connect(sqlConfig);
    } catch (err) {
        console.error('Error de conexión a SQL Server:', err);
        throw err;
    }
}
