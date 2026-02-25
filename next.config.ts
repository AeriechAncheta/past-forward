import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  env: {
    API_KEY: env.API_KEY,
  }
}

export default nextConfig;
