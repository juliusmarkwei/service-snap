import Image from "next/image";

const Categories = () => {
	return (
		<>
			<section className="bg-gray-50 min-h-screen h-auto">
				<div className="sm:px-6 max-w-7xl px-2 pb-5">
					{/* Sticky Heading Container */}
					<div className="sticky top-0 bg-white z-10">
						<div className="flex items-center py-2 gap-2 h-[75px]">
							<div className="flex items-center">
								<div className="relative w-14 h-14">
									<Image
										src="https://i.pinimg.com/236x/3e/1d/ce/3e1dced892a602d93039ebc2a150c35f.jpg"
										alt="Profile Image"
										className="rounded-full"
										layout="fill"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2 w-[90%]">
								<input
									type="search"
									placeholder="Search"
									className="px-4 py-1 border-[1px] border-gray-300 rounded-full h-[50px] w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
								/>
							</div>
						</div>
						<h2 className="text-xl text-black font-black pb-3">
							Recent Bookings
						</h2>
					</div>

					{/* Booking List */}
					<div className="grid max-w-md grid-cols-1 gap-6 px-3">
						{/* Example Booking Item */}
						<div className="overflow-hidden bg-white rounded shadow flex flex-col gap-2">
							<div className="h-[100px] bg-white shadow-lg rounded-md overflow-hidden flex w-full">
								<a href="#" title="" className="block w-[30%]">
									<Image
										width={400}
										height={300}
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/564x/e4/76/61/e47661e9d11e76f53c962ce4aff08db1.jpg"
										alt="Carpentry Image"
									/>
								</a>

								<div className="px-2 w-[70%] h-full">
									<h3 className="text-black text-base font-semibold py-1">
										Carpentry Work 🪵
									</h3>
									<hr className="py-1" />
									<p className="text-gray-700 leading-snug text-xs flex items-center">
										<span className="text-xs font-mono font-extrabold rounded-md bg-blue-200 px-1 flex items-center justify-center">
											STATUS
										</span>{" "}
										<span className="font-bold text-gray-500 px-1 flex gap-[2px] items-center">
											COMPETED{" "}
											<span className="text-[8px]">
												✅
											</span>
										</span>
										<span className="text-gray-500 px-2">
											•
										</span>
										23/07/24
									</p>
									<p className="text-xs font-medium text-gray-600 px-1">
										<span className="font-mono font-bold pr-1 text-gray-700">
											DESCRIPTION
										</span>
										<span className="text-gray-500 px-1">
											•
										</span>
										personal or business expenses, generate
										and...
									</p>
								</div>
							</div>
							<div className="h-[100px] bg-white shadow-lg rounded-md overflow-hidden flex w-full">
								<a href="#" title="" className="block w-[30%]">
									<Image
										width={400}
										height={300}
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/236x/87/45/ad/8745ad7ffec46d21d855eba5ad5e10a5.jpg"
										alt="Carpentry Image"
									/>
								</a>

								<div className="px-2 w-[70%] h-full">
									<h3 className="text-black text-base font-semibold py-1">
										Electrical Work 🔌
									</h3>
									<hr className="py-1" />
									<p className="text-gray-700 leading-snug text-xs flex items-center">
										<span className="text-xs font-mono font-extrabold rounded-md bg-blue-200 px-1 flex items-center justify-center">
											STATUS
										</span>{" "}
										<span className="font-bold text-gray-500 px-1 flex gap-[2px] items-center">
											ACTIVE{" "}
											<span className="text-[8px]">
												⏳
											</span>
										</span>
										<span className="text-gray-500 px-2">
											•
										</span>
										23/07/24
									</p>
									<p className="text-xs font-medium text-gray-600 px-1">
										<span className="font-mono font-bold pr-1 text-gray-700">
											DESCRIPTION
										</span>
										<span className="text-gray-500 px-1">
											•
										</span>
										Lorem ipsum dolor sit amet consectetur
										jhk.
									</p>
								</div>
							</div>

							<div className="h-[100px] bg-white shadow-lg rounded-md overflow-hidden flex w-full">
								<a href="#" title="" className="block w-[30%]">
									<Image
										width={400}
										height={300}
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/236x/cf/38/d3/cf38d3ee40e829bc95a1385b086272ad.jpg"
										alt="Carpentry Image"
									/>
								</a>

								<div className="px-2 w-[70%] h-full">
									<h3 className="text-black text-base font-semibold py-1">
										Plumbing Work 🪠
									</h3>
									<hr className="py-1" />
									<p className="text-gray-700 leading-snug text-xs flex items-center">
										<span className="text-xs font-mono font-extrabold rounded-md bg-blue-200 px-1 flex items-center justify-center">
											STATUS
										</span>{" "}
										<span className="font-bold text-gray-500 px-1 flex gap-[2px] items-center">
											ACTIVE{" "}
											<span className="text-[8px]">
												⏳
											</span>
										</span>
										<span className="text-gray-500 px-2">
											•
										</span>
										23/07/24
									</p>
									<p className="text-xs font-medium text-gray-600 px-1">
										<span className="font-mono font-bold pr-1 text-gray-700">
											DESCRIPTION
										</span>
										<span className="text-gray-500 px-1">
											•
										</span>
										Lorem ipsum dolor sit amet consectetur
										jhk.
									</p>
								</div>
							</div>

							<div className="h-[100px] bg-white shadow-lg rounded-md overflow-hidden flex w-full">
								<a href="#" title="" className="block w-[30%]">
									<Image
										width={400}
										height={300}
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/236x/3e/1d/ce/3e1dced892a602d93039ebc2a150c35f.jpg"
										alt="Carpentry Image"
									/>
								</a>

								<div className="px-2 w-[70%] h-full">
									<h3 className="text-black text-base font-semibold py-1">
										Tailoring Work ✂️
									</h3>
									<hr className="py-1" />
									<p className="text-gray-700 leading-snug text-xs flex items-center">
										<span className="text-xs font-mono font-extrabold rounded-md bg-blue-200 px-1 flex items-center justify-center">
											STATUS
										</span>{" "}
										<span className="font-bold text-gray-500 px-1 flex gap-[2px] items-center">
											PENDING{" "}
											<span className="text-[8px]">
												⏳
											</span>
										</span>
										<span className="text-gray-500 px-2">
											•
										</span>
										23/07/24
									</p>
									<p className="text-xs font-medium text-gray-600 px-1">
										<span className="font-mono font-bold pr-1 text-gray-700">
											DESCRIPTION
										</span>
										<span className="text-gray-500 px-1">
											•
										</span>
										Lorem ipsum dolor sit amet consectetur
										jhk.
									</p>
								</div>
							</div>

							<div className="h-[100px] bg-white shadow-lg rounded-md overflow-hidden flex w-full">
								<a href="#" title="" className="block w-[30%]">
									<Image
										width={400}
										height={300}
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/236x/4f/25/4c/4f254c0dc7c7175f5b05990585c9d1bc.jpg"
										alt="Carpentry Image"
									/>
								</a>

								<div className="px-2 w-[70%] h-full">
									<h3 className="text-black text-base font-semibold py-1">
										Catetring 🍜
									</h3>
									<hr className="py-1" />
									<p className="text-gray-700 leading-snug text-xs flex items-center">
										<span className="text-xs font-mono font-extrabold rounded-md bg-blue-200 px-1 flex items-center justify-center">
											STATUS
										</span>{" "}
										<span className="font-bold text-gray-500 px-1 flex gap-[2px] items-center">
											COMPETED{" "}
											<span className="text-[8px]">
												✅
											</span>
										</span>
										<span className="text-gray-500 px-2">
											•
										</span>
										23/07/24
									</p>
									<p className="text-xs font-medium text-gray-600 px-1">
										<span className="font-mono font-bold pr-1 text-gray-700">
											DESCRIPTION
										</span>
										<span className="text-gray-500 px-1">
											•
										</span>
										Lorem ipsum dolor sit amet consectetur
										jhk.
									</p>
								</div>
							</div>

							<div className="h-[100px] bg-white shadow-lg rounded-md overflow-hidden flex w-full">
								<a href="#" title="" className="block w-[30%]">
									<Image
										width={400}
										height={300}
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/236x/55/7b/da/557bda4412c049b79ee894c6d74ce0e3.jpg"
										alt="Carpentry Image"
									/>
								</a>

								<div className="px-2 w-[70%] h-full">
									<h3 className="text-black text-base font-semibold py-1">
										Laundry Work 👔
									</h3>
									<hr className="py-1" />
									<p className="text-gray-700 leading-snug text-xs flex items-center">
										<span className="text-xs font-mono font-extrabold rounded-md bg-blue-200 px-1 flex items-center justify-center">
											STATUS
										</span>{" "}
										<span className="font-bold text-gray-500 px-1 flex gap-[2px] items-center">
											ACTIVE{" "}
											<span className="text-[8px]">
												⏳
											</span>
										</span>
										<span className="text-gray-500 px-2">
											•
										</span>
										23/07/24
									</p>
									<p className="text-xs font-medium text-gray-600 px-1">
										<span className="font-mono font-bold pr-1 text-gray-700">
											DESCRIPTION
										</span>
										<span className="text-gray-500 px-1">
											•
										</span>
										Lorem ipsum dolor sit amet consectetur
										jhk.
									</p>
								</div>
							</div>

							<div className="h-[100px] bg-white shadow-lg rounded-md overflow-hidden flex w-full">
								<a href="#" title="" className="block w-[30%]">
									<Image
										width={400}
										height={300}
										className="object-cover w-full h-full"
										src="https://i.pinimg.com/236x/82/95/c2/8295c2af7b2b165b473849daf4fdee32.jpg"
										alt="Carpentry Image"
									/>
								</a>

								<div className="px-2 w-[70%] h-full">
									<h3 className="text-black text-base font-semibold py-1">
										Painting 🎨
									</h3>
									<hr className="py-1" />
									<p className="text-gray-700 leading-snug text-xs flex items-center">
										<span className="text-xs font-mono font-extrabold rounded-md bg-blue-200 px-1 flex items-center justify-center">
											STATUS
										</span>{" "}
										<span className="font-bold text-gray-500 px-1 flex gap-[2px] items-center">
											COMPETED{" "}
											<span className="text-[8px]">
												✅
											</span>
										</span>
										<span className="text-gray-500 px-2">
											•
										</span>
										23/07/24
									</p>
									<p className="text-xs font-medium text-gray-600 px-1">
										<span className="font-mono font-bold pr-1 text-gray-700">
											DESCRIPTION
										</span>
										<span className="text-gray-500 px-1">
											•
										</span>
										Lorem ipsum dolor sit amet consectetur
										jhk.
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
