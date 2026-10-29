// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   basePath: '/@develop/samwarthika-ui/next',
//   // basePath: '',
//   assetPrefix: '/@develop/samwarthika-ui/next', // Required for assets
//   trailingSlash: true,
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

// Create extended type so TypeScript stops complaining
interface ExtendedNextConfig extends NextConfig {
  productionBrowserSourceMaps?: boolean;
}

const nextConfig: ExtendedNextConfig = {
  // basePath: "/@develop/samwarthika-ui/next",
  basePath: '',
  // assetPrefix: "/@develop/samwarthika-ui/next",
  assetPrefix: "",
  trailingSlash: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    // This will allow build to succeed even if ESLint has errors
    ignoreDuringBuilds: true,
  },

  // Set to false for secure production builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;

