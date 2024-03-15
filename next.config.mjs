/** @type {import('next').NextConfig} */
import path from 'path';

const __dirname = `${path.dirname}`;

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
