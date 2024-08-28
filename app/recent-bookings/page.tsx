import Image from "next/image";

const Categories = () => {
	return (
		<>
			<section className="bg-gray-50 min-h-screen h-auto">
				<div className="sm:px-6 max-w-7xl px-2 pb-5">
					<h2 className="text-xl text-black font-black py-3 sticky top-0 bg-white z-10">
						Recent Bookings
					</h2>
					<div className="grid max-w-md grid-cols-1 gap-6 px-4">
						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										width={400}
										height={300}
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/564x/e4/76/61/e47661e9d11e76f53c962ce4aff08db1.jpg"
										alt="Carpentry Image"
									/>
								</a>
								<div className="absolute top-4 left-4">
									<span className="px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full shadow-sm">
										Carpentry
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-3">
										Whether it&apos;s{" "}
										<span className="font-semibold font-sans">
											custom furniture
										</span>
										,{" "}
										<span className="font-semibold font-sans">
											cabinetry
										</span>
										, or{" "}
										<span className="font-semibold font-sans">
											home renovations
										</span>
										, skilled carpenters bring your vision
										to life with precision and
										craftsmanship.
									</p>
								</div>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/564x/f9/5c/6f/f95c6f5e340ee676f80c3ebe9d7b6627.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Tailoring{" "}
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-4">
										Tailors provide{" "}
										<span className="font-semibold font-sans">
											custom clothing solutions
										</span>
										,{" "}
										<span className="font-semibold font-sans">
											alterations
										</span>
										, and{" "}
										<span className="font-semibold font-sans">
											repairs
										</span>
										, ensuring that every piece fits
										perfectly and reflects your personal
										style.
									</p>
								</div>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/564x/f9/5c/6f/f95c6f5e340ee676f80c3ebe9d7b6627.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Tailoring{" "}
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-4">
										Tailors provide{" "}
										<span className="font-semibold font-sans">
											custom clothing solutions
										</span>
										,{" "}
										<span className="font-semibold font-sans">
											alterations
										</span>
										, and{" "}
										<span className="font-semibold font-sans">
											repairs
										</span>
										, ensuring that every piece fits
										perfectly and reflects your personal
										style.
									</p>
								</div>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/564x/f9/5c/6f/f95c6f5e340ee676f80c3ebe9d7b6627.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Tailoring{" "}
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-4">
										Tailors provide{" "}
										<span className="font-semibold font-sans">
											custom clothing solutions
										</span>
										,{" "}
										<span className="font-semibold font-sans">
											alterations
										</span>
										, and{" "}
										<span className="font-semibold font-sans">
											repairs
										</span>
										, ensuring that every piece fits
										perfectly and reflects your personal
										style.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Categories;
