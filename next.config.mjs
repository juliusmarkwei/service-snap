/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com", "cdn.rareblocks.xyz", "i.pinimg.com"],
	},
};

export default nextConfig;
