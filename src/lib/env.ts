import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
  },
  experimental__runtimeEnv: {},
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});

// This file is used to validate your environment variables (.env) before your app starts.
//  Instead of accessing process.env everywhere, you create one safe env object.

// Line by line
// import { z } from "zod";
// Imports Zod, a validation library.
// Used to check if values have the correct type and format.