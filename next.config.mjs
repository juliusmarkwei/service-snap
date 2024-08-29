/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"res.cloudinary.com",
			"cdn.rareblocks.xyz",
			"i.pinimg.com",
			"demos.creative-tim.com",
			"i.pravatar.cc",
			"mdbcdn.b-cdn.net",
		],
	},
};

export default nextConfig;
