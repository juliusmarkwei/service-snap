import Image from "next/image";
import Verified from "@/public/verified.png";
import Link from "next/link";
import BottomNavigator from "@/app/components/BottomNavigator";

const ProviderProfile = () => {
	return (
		<>
			<div className="bg-white min-h-screen h-auto">
				<div className="container mx-auto pb-3 h-full">
					<div className="flex justify-center items-center h-full">
						<div className="w-full max-w-lg">
							<div className="bg-white shadow-sm overflow-hidden">
								<div className="bg-blue-300 h-[220px] flex items-end p-4">
									<div className="flex-shrink-0">
										<Link href="/chat">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												className="size-6 absolute top-4 left-4 text-black"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
												/>
											</svg>
										</Link>
										<Image
											className="rounded-full w-36 h-36 border-4 border-green-500 -mt-16 object-cover"
											src="https://i.pinimg.com/236x/12/6f/55/126f553fa64284e5a74ec0934c9718f0.jpg"
											alt="https://i.pinimg.com/236x/77/be/02/77be029001c1c9f35eacdae3b9584c38.jpg"
											width={144}
											height={144}
										/>
										{/* <Link href="/settings">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6 text-gray-700 absolute top-4 right-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
												/>
											</svg>
										</Link> */}
									</div>
									<div className="ml-4">
										<h5 className="text-gray-900 text-2xl flex items-center">
											Sandra Horwitz
											<Image
												src={Verified}
												width={24}
												height={24}
												alt="verified"
												className="ml-2"
											/>
										</h5>

										<p className="text-gray-900">
											Ayensu, Cape Coast
										</p>
									</div>
								</div>
								<div className="bg-gray-100 p-4">
									<div className="flex justify-end text-center gap-4">
										<div>
											<p className="text-xl font-bold text-gray-500">
												253
											</p>
											<p className="text-gray-500">
												Ratings
											</p>
										</div>

										<div>
											<p className="text-xl font-bold text-gray-500">
												478
											</p>
											<p className="text-gray-500">
												Jobs
											</p>
										</div>
									</div>
								</div>
								<div className="p-4">
									<div className="mb-5">
										<p className="text-lg font-semibold text-black">
											About
										</p>
										<div className="bg-gray-100 p-4">
											<p className="italic text-gray-700">
												Web Developer
											</p>
											<p className="italic text-gray-700">
												Lives in New York
											</p>
											<p className="italic text-gray-700">
												Photographer
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProviderProfile;
