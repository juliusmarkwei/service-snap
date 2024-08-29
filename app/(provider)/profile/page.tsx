import Image from "next/image";
import Verified from "@/public/verified.png";

const ProviderProfile = () => {
	return (
		<>
			<div className="bg-white min-h-screen h-auto">
				<div className="container mx-auto pb-3 h-full">
					<div className="flex justify-center items-center h-full">
						<div className="w-full max-w-lg">
							<div className="bg-white shadow-sm rounded-lg overflow-hidden">
								<div className="bg-blue-300 h-[220px] flex items-end p-4">
									<div className="flex-shrink-0">
										<Image
											className="rounded-full w-36 h-36 border-4 border-green-500 -mt-16 object-cover"
											src="https://i.pinimg.com/236x/12/6f/55/126f553fa64284e5a74ec0934c9718f0.jpg"
											alt="https://i.pinimg.com/236x/77/be/02/77be029001c1c9f35eacdae3b9584c38.jpg"
											width={144}
											height={144}
										/>
										<button className="mt-4 bg-[#ffffff7e] text-gray-600 font-bold py-2 px-4 rounded-lg">
											Edit Profile
										</button>
									</div>
									<div className="ml-4">
										<h5 className="text-gray-900 text-2xl flex items-center">
											Andy Horwitz
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
