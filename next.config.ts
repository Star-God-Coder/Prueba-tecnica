// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Exporta el sitio como estático
  assetPrefix: isProd ? '/<Prueba-tecnica>/' : '', // Reemplaza con el nombre de tu repositorio
  images: {
    unoptimized: true, // Desactiva optimización de imágenes, necesaria para exportación estática
  },
};

module.exports = nextConfig;
