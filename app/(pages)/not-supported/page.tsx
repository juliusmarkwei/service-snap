import Image from "next/image";
import ErrorImage from "@/public/unsupported.jpg";
import Head from "next/head";

const NotSupported = () => {
	return (
		<div className="h-dvh w-dvw bg-white  flex flex-col gap-2 justify-center items-center px-5">
			<Head>
				<title>Device Not Supported</title>
				<meta
					name="description"
					content="This website is only accessible on mobile devices."
				/>
			</Head>
			<Image
				src={ErrorImage}
				alt="Not Supported"
				width={250}
				height={250}
			/>
			<p className="text-blue-500 text-2xl font-medium font-serif text-center">
				This application is only accessible on mobile devices.
				<br />
				<span className="font-semibold text-base">
					Hint: Switch to mobile view in your browser’s developer
					tools to access this page.
				</span>
			</p>
		</div>
	);
};

export default NotSupported;
