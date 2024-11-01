import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Exporta el sitio como estático
  assetPrefix: isProd ? '/<nombre-del-repositorio>/' : '', // Reemplaza con el nombre de tu repositorio
  images: {
    unoptimized: true, // Desactiva optimización de imágenes, necesaria para exportación estática
  },
};

export default nextConfig;
