"use strict";
const { loadEnv, defineConfig } = require("@medusajs/framework/utils");
loadEnv(process.env.NODE_ENV || "development", process.cwd());
const workerMode = process.env.MEDUSA_WORKER_MODE;
if (!workerMode) {
    throw new Error("MEDUSA_WORKER_MODE must be set to 'server' or 'worker'");
}
module.exports = defineConfig({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        // ✅ Medusa v2 auto-wires Redis for cache, event bus, workflows & locking
        redisUrl: process.env.REDIS_URL,
        http: {
            storeCors: process.env.STORE_CORS,
            adminCors: process.env.ADMIN_CORS,
            authCors: process.env.AUTH_CORS,
            jwtSecret: process.env.JWT_SECRET || "supersecret",
            cookieSecret: process.env.COOKIE_SECRET || "supersecret",
        },
        // ✅ Explicit server / worker split
        workerMode,
    },
    admin: {
        disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
        backendUrl: process.env.MEDUSA_BACKEND_URL,
    },
});
//# sourceMappingURL=medusa-config.js.map