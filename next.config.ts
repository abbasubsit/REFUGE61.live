import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 is next/image's own default (used wherever a component omits
    // `quality`); 85 is the deliberately higher value Hero uses for its
    // large, texture-heavy photograph. Both need to be declared explicitly
    // — undeclared qualities become an error in Next.js 16.
    qualities: [75, 85],
  },
};

export default nextConfig;
