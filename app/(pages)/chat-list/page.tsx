import Image from "next/image";
import BottomNavigator from "@/app/components/BottomNavigator";
import Link from "next/link";

const Notification = () => {
	return (
		<>
			<section className="bg-white min-h-screen mb-16 h-auto px-2 pb-2">
				<h1 className="text-3xl font-bold leading-tight text-black mb-3 px-2 bg-white sticky z-20 top-0 pt-2">
					Chat
					<span className="absolute right-4 top-4 flex gap-2 justify-end">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 text-black  "
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 text-black"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
							/>
						</svg>
					</span>
				</h1>

				<div className="w-full h-auto relative mb-1">
					<Link href="/chat">
						<div className="bg-slate-900 text-slate-100 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
							<div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
								<div className="relative flex flex-shrink-0 items-end">
									<Image
										className="h-16 w-16 rounded-full"
										src="https://i.pravatar.cc/200"
										alt=""
										width={300}
										height={300}
									/>
									<span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
								</div>
								<div className="ml-3.5">
									<span className="font-semibold tracking-tight text-xs">
										John Doe
									</span>
									<span className="text-xs leading-none opacity-50">
										{" "}
										reacted to your comment:
									</span>
									<p className="text-xs leading-4 pt-2 italic opacity-70">
										This is the comment...
									</p>
									<span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
										a few seconds ago
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-full h-auto relative mb-1">
					<Link href="/chat">
						<div className="bg-slate-900 text-slate-100 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
							<div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
								<div className="relative flex flex-shrink-0 items-end">
									<Image
										className="h-16 w-16 rounded-full"
										src="https://i.pravatar.cc/400"
										alt=""
										width={300}
										height={300}
									/>
									<span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
								</div>
								<div className="ml-3.5">
									<span className="font-semibold tracking-tight text-xs">
										Raymond Reddington
									</span>
									<span className="text-xs leading-none opacity-50">
										{" "}
										reacted to your comment:
									</span>
									<p className="text-xs leading-4 pt-2 italic opacity-70">
										This is the comment...
									</p>
									<span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
										a few seconds ago
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-full h-auto relative mb-1">
					<Link href="/chat">
						<div className="bg-slate-900 text-slate-100 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
							<div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
								<div className="relative flex flex-shrink-0 items-end">
									<Image
										className="h-16 w-16 rounded-full"
										src="https://i.pravatar.cc/700"
										alt=""
										width={300}
										height={300}
									/>
									<span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
								</div>
								<div className="ml-3.5">
									<span className="font-semibold tracking-tight text-xs">
										Jane Doe
									</span>
									<span className="text-xs leading-none opacity-50">
										{" "}
										reacted to your comment:
									</span>
									<p className="text-xs leading-4 pt-2 italic opacity-70">
										This is the comment...
									</p>
									<span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
										a few seconds ago
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-full h-auto relative mb-1">
					<Link href="/chat">
						<div className="bg-slate-900 text-slate-100 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
							<div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
								<div className="relative flex flex-shrink-0 items-end">
									<Image
										className="h-16 w-16 rounded-full"
										src="https://i.pravatar.cc/600"
										alt=""
										width={300}
										height={300}
									/>
									<span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
								</div>
								<div className="ml-3.5">
									<span className="font-semibold tracking-tight text-xs">
										Whisper Freeck
									</span>
									<span className="text-xs leading-none opacity-50">
										{" "}
										reacted to your comment:
									</span>
									<p className="text-xs leading-4 pt-2 italic opacity-70">
										This is the comment...
									</p>
									<span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
										a few seconds ago
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-full h-auto relative mb-1">
					<Link href="/chat">
						<div className="bg-slate-900 text-slate-100 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
							<div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
								<div className="relative flex flex-shrink-0 items-end">
									<Image
										className="h-16 w-16 rounded-full"
										src="https://i.pravatar.cc/500"
										alt=""
										width={300}
										height={300}
									/>
									<span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
								</div>
								<div className="ml-3.5">
									<span className="font-semibold tracking-tight text-xs">
										Leon hills
									</span>
									<span className="text-xs leading-none opacity-50">
										{" "}
										reacted to your comment:
									</span>
									<p className="text-xs leading-4 pt-2 italic opacity-70">
										This is the comment...
									</p>
									<span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
										a few seconds ago
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-full h-auto relative mb-1">
					<Link href="/chat">
						<div className="bg-slate-900 text-slate-100 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
							<div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
								<div className="relative flex flex-shrink-0 items-end">
									<Image
										className="h-16 w-16 rounded-full"
										src="https://i.pravatar.cc/800"
										alt=""
										width={300}
										height={300}
									/>
									<span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
								</div>
								<div className="ml-3.5">
									<span className="font-semibold tracking-tight text-xs">
										John Doe
									</span>
									<span className="text-xs leading-none opacity-50">
										{" "}
										reacted to your comment:
									</span>
									<p className="text-xs leading-4 pt-2 italic opacity-70">
										This is the comment...
									</p>
									<span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
										a few seconds ago
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-full h-auto relative mb-1">
					<Link href="/chat">
						<div className="bg-slate-900 text-slate-100 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
							<div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
								<div className="relative flex flex-shrink-0 items-end">
									<Image
										className="h-16 w-16 rounded-full"
										src="https://i.pravatar.cc/300"
										alt=""
										width={300}
										height={300}
									/>
									<span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
								</div>
								<div className="ml-3.5">
									<span className="font-semibold tracking-tight text-xs">
										Reeni Walker
									</span>
									<span className="text-xs leading-none opacity-50">
										{" "}
										reacted to your comment:
									</span>
									<p className="text-xs leading-4 pt-2 italic opacity-70">
										This is the comment...
									</p>
									<span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
										a few seconds ago
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-full h-auto relative mb-1">
					<Link href="/chat">
						<div className="bg-slate-900 text-slate-100 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
							<div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
								<div className="relative flex flex-shrink-0 items-end">
									<Image
										className="h-16 w-16 rounded-full"
										src="https://i.pravatar.cc/900"
										alt=""
										width={300}
										height={300}
									/>
									<span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
								</div>
								<div className="ml-3.5">
									<span className="font-semibold tracking-tight text-xs">
										Coil Linton
									</span>
									<span className="text-xs leading-none opacity-50">
										{" "}
										reacted to your comment:
									</span>
									<p className="text-xs leading-4 pt-2 italic opacity-70">
										This is the comment...
									</p>
									<span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
										a few seconds ago
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</section>
			<BottomNavigator />
		</>
	);
};

export default Notification;
