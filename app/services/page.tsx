import Image from "next/image";

const Categories = () => {
	return (
		<>
			<section className="bg-gray-50">
				<div className="sm:px-6 max-w-7xl px-2 pb-5">
					<h2 className="text-xl text-black font-black py-3 sticky top-0 bg-white z-10">
						Services
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
										src="https://i.pinimg.com/564x/dc/5d/ba/dc5dba89aed95b356c8348b5313058c0.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Electrical Work{" "}
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-4">
										This involves the{" "}
										<span className="font-semibold font-sans">
											installation
										</span>
										,{" "}
										<span className="font-semibold font-sans">
											maintenance
										</span>
										, and{" "}
										<span className="font-semibold font-sans">
											repair of electrical systems
										</span>{" "}
										in homes, businesses, and other
										buildings.
									</p>
								</div>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/564x/36/c3/c6/36c3c6e123b7787e7f8cbf0ffa346208.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Laundry Services{" "}
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-4">
										Do you need a client to do your{" "}
										<span className="font-semibold font-sans">
											washing , drying,
										</span>{" "}
										and{" "}
										<span className="font-semibold font-sans">
											ironing clothes{" "}
										</span>{" "}
										and{" "}
										<span className="font-semibold font-sans">
											{" "}
											linens
										</span>
										, ensuring they are clean,
										well-maintained, and presentable.
									</p>
								</div>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/564x/af/87/80/af878081f65bf7e6871a1d6caa7d26d2.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Plumbing{" "}
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-4">
										Plumbing specialists{" "}
										<span className="font-semibold font-sans">
											install
										</span>{" "}
										and{" "}
										<span className="font-semibold font-sans">
											repair water supply systems,
											drainage systems,{" "}
										</span>
										and{" "}
										<span className="font-semibold font-sans">
											fixtures like sinks, toilets, and
											showers
										</span>
										.
									</p>
								</div>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/564x/3c/1d/33/3c1d337c94b0e9ef6dd7ed018104cc4b.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Painting{" "}
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-4">
										Painting involves{" "}
										<span className="font-semibold font-sans">
											applying finishes to surfaces
										</span>
										,{" "}
										<span className="font-semibold font-sans">
											enhancing appearance
										</span>
										, and protecting structures from wear
										and tear.
									</p>
								</div>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/564x/ee/9a/8e/ee9a8e2fd0709825d7a805a2a5262d8e.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Barbering{" "}
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-4">
										Barbering includes{" "}
										<span className="font-semibold font-sans">
											cutting
										</span>
										,{" "}
										<span className="font-semibold font-sans">
											trimming
										</span>
										,
										<span className="font-semibold font-sans">
											shaving
										</span>
										, and{" "}
										<span className="font-semibold font-sans">
											styling hair
										</span>
										, primarily for men, to look and feel
										good.
									</p>
								</div>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/736x/22/82/f0/2282f09f08a415f95b33b86b484aa823.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Catering{" "}
									</span>
								</div>
								<div className="px-2">
									<p className="text-sm font-medium text-gray-600 my-4">
										Catering involves{" "}
										<span className="font-semibold font-sans">
											preparing
										</span>{" "}
										and{" "}
										<span className="font-semibold font-sans">
											serving food
										</span>{" "}
										for events, ensuring guests enjoy
										delicious and well-presented meals.
									</p>
								</div>
							</div>
						</div>

						{/* Use this for the dynamic categoeries */}
						<div className="overflow-hidden bg-white rounded shadow">
							<div className="relative h-[320px] bg-white shadow-lg rounded-md overflow-hidden">
								<a href="#" title="" className="block h-[75%]">
									<Image
										className="object-cover w-full h-full"
										src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</a>

								<div className="absolute top-4 left-4">
									<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
										{" "}
										Lorem{" "}
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
