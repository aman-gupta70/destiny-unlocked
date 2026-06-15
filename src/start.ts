import { createStart } from "@tanstack/react-start/server";

export default createStart({
  server: {
    preset: "cloudflare",
  },
});
