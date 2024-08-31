import Image from "next/image";
import BottomNavigator from "@/app/components/BottomNavigator";

const Notification = () => {
	return (
		<>
			<section className="bg-white min-h-screen h-auto px-2 pb-2">
				<h1 className="text-3xl font-bold leading-tight text-black mb-3 px-4 bg-white sticky z-20 top-0 pt-2">
					Notification
				</h1>

				<div className="w-full h-auto relative mb-1">
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
									John Doe
								</span>
								<span className="text-xs leading-none opacity-50">
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
				</div>

				<div className="w-full h-auto relative my-1">
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
									John Doe
								</span>
								<span className="text-xs leading-none opacity-50">
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
				</div>

				<div className="w-full h-auto relative my-1">
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
									John Doe
								</span>
								<span className="text-xs leading-none opacity-50">
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
				</div>

				<div className="w-full h-auto relative my-1">
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
									John Doe
								</span>
								<span className="text-xs leading-none opacity-50">
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
				</div>

				<div className="w-full h-auto relative my-1">
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
									John Doe
								</span>
								<span className="text-xs leading-none opacity-50">
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
				</div>

				<div className="w-full h-auto relative my-1">
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
									John Doe
								</span>
								<span className="text-xs leading-none opacity-50">
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
				</div>

				<div className="w-full h-auto relative my-1">
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
									John Doe
								</span>
								<span className="text-xs leading-none opacity-50">
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
				</div>

				<div className="w-full h-auto relative my-1">
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
									John Doe
								</span>
								<span className="text-xs leading-none opacity-50">
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
				</div>

				<div className="w-full h-auto relative my-1">
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
									John Doe
								</span>
								<span className="text-xs leading-none opacity-50">
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
				</div>
			</section>
			<BottomNavigator />
		</>
	);
};

export default Notification;
