require("dotenv").config();

export const jwtConstants = {
    secret:process.env.CLAVE_JWT
}