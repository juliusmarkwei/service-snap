"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CreateBooking from "@/app/components/bottom-sheet/CreateBooking";
import toast from "react-hot-toast";

const ServiceProviders = () => {
	const [showBtSheet, setShowBtSheet] = useState(false);

	const _rating = Math.floor(Math.random() * 100);
	const getYellowStars = (rating: number) => {
		if (rating >= 0 && rating <= 5) {
			return 1;
		} else if (rating >= 6 && rating <= 15) {
			return 2;
		} else if (rating >= 16 && rating <= 30) {
			return 3;
		} else if (rating >= 31 && rating <= 50) {
			return 4;
		} else if (rating > 50) {
			return 5;
		}
		return 0;
	};

	const yellowStars = getYellowStars(_rating);

	const handleCreateBooking = () => {
		setShowBtSheet(true);
	};

	return (
		<>
			<section className="bg-[#ffffffe4] min-h-screen h-auto">
				<Link href="/providers">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="size-6 relative top-4 left-4 text-black"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
						/>
					</svg>
				</Link>
				<div className="pt-16 w-full px-4 mx-auto">
					<div className="relative flex flex-col min-w-0 break-words bg-[#f8f8f8] w-full shadow-xl rounded-lg mt-16">
						<div className="px-4">
							<div className="flex flex-wrap justify-center relative items-center">
								<div className="w-full px-4 flex justify-center">
									<div className="bg-black">
										<Image
											alt="..."
											width={400}
											height={300}
											priority
											src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
											className="shadow-xl rounded-full w-52 h-52 align-middle border-none absolute left-[19%] -top-24"
										/>
									</div>
								</div>

								<div className="w-full px-4 text-center mt-20">
									<div className="flex justify-center py-4 lg:pt-4 pt-8">
										<div className="mr-4 p-3 text-center flex flex-col items-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
												22
											</span>
											<span className="text-sm text-black">
												Ratings
											</span>
										</div>
										<div className="mr-4 p-3 text-center flex flex-col items-center">
											<span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
												10
											</span>
											<span className="text-sm text-black">
												Tasks
											</span>
										</div>

										<div className="mr-4 p-3 text-center flex flex-col items-center gap-1">
											<span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
												<Link href="/chat">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="size-6 text-black"
													>
														<path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
														<path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
													</svg>
												</Link>
											</span>
											<span className="text-sm text-black">
												Chat
											</span>
										</div>

										<div
											onClick={handleCreateBooking}
											className="mr-4 p-3 text-center flex flex-col items-center gap-1"
										>
											<span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="size-6 text-black"
												>
													<path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
													<path
														fillRule="evenodd"
														d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z"
														clipRule={"evenodd"}
													/>
												</svg>
											</span>
											<span className="text-sm text-black">
												Book
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className="text-center">
								<h3 className="text-xl font-semibold leading-normal text-gray-800 mb-2">
									@jenna-stones
								</h3>
								<div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
									<i className="fas fa-map-marker-alt mr-2 text-lg text-black"></i>
									Amamoma - Cape Coast
								</div>
								<div className="mb-2 text-gray-600 mt-7">
									<h3 className="text-gray-700 underline decoration-2 text-lg font-bold p-1">
										SKILLS
									</h3>
									<i className="fas fa-briefcase mr-2 text-lg text-black"></i>
									Web Developer{" "}
									<span className="text-gray-500 px-1">
										•
									</span>{" "}
									Graphic Artist{" "}
									<span className="text-gray-500 px-1">
										•
									</span>{" "}
									User <br /> Experience Designer{" "}
									<span className="text-gray-500 px-2">
										•
									</span>{" "}
									Photographer
								</div>
							</div>

							<div className="py-6 border-t border-blueGray-200 text-center">
								{/* rate */}
								<div className="flex gap-2 py-1 justify-center">
									<div className="flex items-center w-[100px] h-[20px]">
										{Array.from(
											{ length: 5 },
											(_, index) => (
												<svg
													key={index}
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 24 24"
													className={`w-5 h-5 ${
														index < yellowStars
															? "text-yellow-400"
															: "text-gray-300"
													}`}
												>
													<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
												</svg>
											)
										)}
									</div>
									<span className="text-gray-600">
										({_rating} verified ratings)
									</span>
								</div>

								{/* leave a review */}
								<div className="relative">
									<input
										type="text"
										placeholder="Leave a review"
										id=""
										className="border-2 border-gray-300 rounded-xl p-4 w-full focus:outline-none focus:border-blue-500"
									/>
									<svg
										onClick={() =>
											toast.success(
												"Review added successfully"
											)
										}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="size-6 text-black absolute right-4 top-4"
									>
										<path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
									</svg>
								</div>
							</div>

							{/* show review list here */}

							<div className="flex flex-col gap-2 w-full">
								<span className="text-gray-800 h-14 px-2 mt-2 border-1 bg-[#ffffff6b] border-gray-400 rounded-sm overflow-scroll">
									@precious{" "}
									<span className="text-gray-500 px-1">
										•
									</span>
									Today, 12:30 PM
									<br />
									<p className="font-light text-gray-700 leading-tight">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</span>
								<hr />
								<span className="text-gray-800 h-14 px-2 mt-2 border-1 bg-[#ffff] border-gray-400 rounded-sm overflow-scroll">
									@christian{" "}
									<span className="text-gray-500 px-1">
										•
									</span>
									Today, 12:30 PM
									<br />
									<p className="font-light text-gray-700 leading-tight">
										some review here
									</p>
								</span>
								<hr />
								<span className="text-gray-800 h-14 px-2 mt-2 border-1 bg-[#ffff] border-gray-400 rounded-sm overflow-scroll">
									@selase{" "}
									<span className="text-gray-500 px-1">
										•
									</span>
									Today, 12:30 PM
									<br />
									<p className="font-light text-gray-700 leading-tight">
										user review here
									</p>
								</span>
								<hr />

								{/* show more */}
								<div className="text-center mb-4">
									<a
										href="#"
										className="text-blue-500 underline"
									>
										Show more reviews...
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{showBtSheet == true ? (
				<CreateBooking handleOnSubmit={setShowBtSheet} />
			) : (
				""
			)}
		</>
	);
};

export default ServiceProviders;
