import Image from "next/image";

const ServiceProvidersProfile = () => {
	return (
		<>
			<section className="pt-16 bg-[#ffffffe4]">
				<div className="w-full px-4 mx-auto">
					<div className="relative flex flex-col min-w-0 break-words bg-[#f8f8f8] w-full shadow-xl rounded-lg mt-16">
						<div className="px-6">
							<div className="flex flex-wrap justify-center relative">
								<div className="w-full px-4 flex justify-center">
									<div className="bg-black">
										<Image
											alt="..."
											width={400}
											height={300}
											src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
											className="shadow-xl rounded-full w-52 h-52 align-middle border-none absolute left-16 -top-24"
										/>
									</div>
								</div>
								<div className="w-full px-4 text-center mt-20">
									<div className="flex justify-center py-4 lg:pt-4 pt-8">
										<div className="mr-4 p-3 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
												22
											</span>
											<span className="text-sm text-black">
												Ratings
											</span>
										</div>
										<div className="mr-4 p-3 text-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
												10
											</span>
											<span className="text-sm text-black">
												Finished tasks
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center mt-12">
								<h3 className="text-xl font-semibold leading-normal text-gray-800 mb-2">
									Jenna Stones
								</h3>
								<div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
									<i className="fas fa-map-marker-alt mr-2 text-lg text-black"></i>
									Los Angeles, California
								</div>
								<div className="mb-2 text-gray-600 mt-10">
									<i className="fas fa-briefcase mr-2 text-lg text-black"></i>
									Solution Manager - Creative Tim Officer
								</div>
								<div className="mb-2 text-gray-600">
									<i className="fas fa-university mr-2 text-lg text-black"></i>
									University of Computer Science
								</div>
							</div>
							<div className="mt-10 py-10 border-t border-blueGray-200 text-center ">
								<div className="flex flex-wrap justify-center mb-5">
									<div className="w-full lg:w-9/12 px-4">
										<p className="mb-4 text-lg leading-relaxed text-gray-800">
											An artist of considerable range,
											Jenna the name taken by
											Melbourne-raised, Brooklyn-based
											Nick Murphy writes, performs and
											records all of his own music, giving
											it a warm, intimate feel with a
											solid groove structure. An artist of
											considerable range.
										</p>
									</div>
								</div>

								<div className="flex items-center justify-center gap-14 absolute bottom-1 left-32">
									<span className="flex flex-col items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="size-6 text-black"
										>
											<path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
											<path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
										</svg>

										<h3 className="text-gray-700">Chat</h3>
									</span>

									<span className="flex flex-col items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="size-6 text-black"
										>
											<path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
											<path
												fill-rule="evenodd"
												d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z"
												clip-rule="evenodd"
											/>
										</svg>
										<h3 className="text-gray-700">Book</h3>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServiceProvidersProfile;
