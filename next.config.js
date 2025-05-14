/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Adicionado para tentar resolver problema da imagem não aparecer
  },
};

module.exports = nextConfig;

