/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

// {
//   "presets": [
//     "next/babel"
//   ],
//   "plugins": [
//     [
//       "styled-components",
//       {
//         "ssr": true,
//         "displayName": true,
//         "preprocess": false
//       }
//     ]
//   ]
// }
module.exports = nextConfig;
