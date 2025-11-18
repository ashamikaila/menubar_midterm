import { type Config } from "drizzle-kit";

import { env } from "menubar/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["menubar_midterm_*"],
} satisfies Config;
