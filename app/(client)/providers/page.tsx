import Image from "next/image";
import Link from "next/link";

const Services = () => {
	return (
		<>
			<section className="bg-gray-50 min-h-screen h-auto">
				<div className="sm:px-6 max-w-7xl px-2 pb-5">
					<Link
						href="/services"
						className=" sticky top-0 bg-white z-20 flex items-center gap-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-6 text-black"
						>
							<path
								fill-rule="evenodd"
								d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
								clip-rule="evenodd"
							/>
						</svg>

						<h2 className="text-2xl text-black font-bold py-3">
							Carpentary
						</h2>
					</Link>
					<div className="grid max-w-md grid-cols-2 gap-2">
						<Link
							href="/service"
							className="overflow-hidden bg-white rounded shadow h-[240px]"
						>
							<div className="h-[200px]">
								<div>
									<span className="block h-[50%]">
										<Image
											className="object-cover w-full h-full"
											src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg"
											alt=""
											width={400}
											height={300}
										/>
									</span>
								</div>

								<p className="p-2 text-sm text-gray-600 ">
									Amet minim mollit non deserunt ullamco
								</p>
								<div className="pb-2">
									<span className="flex px-2">
										<div className="flex items-center w-[100px] h-[20px]">
											{/* Star 1 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 2 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 3 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 4 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 5 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>
										</div>
										<p className="text-gray-500 text-sm">
											(123)
										</p>
									</span>
									<h3 className="text-gray-600 text-sm px-3">
										Cape Coast
									</h3>
								</div>
							</div>
						</Link>

						<Link
							href="/service"
							className="overflow-hidden bg-white rounded shadow"
						>
							<div className="h-[240px]">
								<div>
									<span className="block">
										<Image
											className="object-cover w-full h-[135px]"
											src="https://i.pinimg.com/236x/ab/e6/af/abe6afd26dc065995edf1df4c44a1049.jpg"
											alt=""
											width={400}
											height={300}
										/>
									</span>
								</div>

								<p className="p-2 text-sm text-gray-600 ">
									Amet minim mollit non deserunt ullamco
								</p>
								<div className="pb-2">
									<span className="flex px-2">
										<div className="flex items-center w-[100px] h-[20px]">
											{/* Star 1 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 2 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 3 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 4 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 5 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>
										</div>
										<p className="text-gray-500 text-sm">
											(123)
										</p>
									</span>
									<h3 className="text-gray-600 text-sm px-3">
										Cape Coast
									</h3>
								</div>
							</div>
						</Link>

						<Link
							href="/service"
							className="overflow-hidden bg-white rounded shadow"
						>
							<div className="h-[240px]">
								<div>
									<span className="block">
										<Image
											className="object-cover w-full h-[135px]"
											src="https://i.pinimg.com/236x/b8/33/e9/b833e94ca748c17b83f4146a3aae8822.jpg"
											alt=""
											width={400}
											height={300}
										/>
									</span>
								</div>

								<p className="p-2 text-sm text-gray-600 ">
									Amet minim mollit non deserunt ullamco
								</p>
								<div className="pb-2">
									<span className="flex px-2">
										<div className="flex items-center w-[100px] h-[20px]">
											{/* Star 1 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 2 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 3 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 4 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 5 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>
										</div>
										<p className="text-gray-500 text-sm">
											(123)
										</p>
									</span>
									<h3 className="text-gray-600 text-sm px-3">
										Cape Coast
									</h3>
								</div>
							</div>
						</Link>

						<Link
							href="/service"
							className="overflow-hidden bg-white rounded shadow"
						>
							<div className="h-[240px]">
								<div>
									<span className="block">
										<Image
											className="object-cover w-full h-[135px]"
											src="https://i.pinimg.com/236x/ba/5d/df/ba5ddf5304eecdd558025fedf0b6cc1f.jpg"
											alt=""
											width={400}
											height={300}
										/>
									</span>
								</div>

								<p className="p-2 text-sm text-gray-600 ">
									Amet minim mollit non deserunt ullamco
								</p>
								<div className="pb-2">
									<span className="flex px-2">
										<div className="flex items-center w-[100px] h-[20px]">
											{/* Star 1 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 2 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 3 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 4 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 5 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>
										</div>
										<p className="text-gray-500 text-sm">
											(123)
										</p>
									</span>
									<h3 className="text-gray-600 text-sm px-3">
										Cape Coast
									</h3>
								</div>
							</div>
						</Link>

						<Link
							href="/service"
							className="overflow-hidden bg-white rounded shadow"
						>
							<div className="h-[240px]">
								<div>
									<span className="block">
										<Image
											className="object-cover w-full h-[135px]"
											src="https://i.pinimg.com/236x/a3/6d/d9/a36dd9e3607f60f4ae76f124e0b388a8.jpg"
											alt=""
											width={400}
											height={300}
										/>
									</span>
								</div>

								<p className="p-2 text-sm text-gray-600 ">
									Amet minim mollit non deserunt ullamco
								</p>
								<div className="pb-2">
									<span className="flex px-2">
										<div className="flex items-center w-[100px] h-[20px]">
											{/* Star 1 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 2 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 3 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 4 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 5 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>
										</div>
										<p className="text-gray-500 text-sm">
											(123)
										</p>
									</span>
									<h3 className="text-gray-600 text-sm px-3">
										Cape Coast
									</h3>
								</div>
							</div>
						</Link>

						<Link
							href="/service"
							className="overflow-hidden bg-white rounded shadow"
						>
							<div className="h-[240px]">
								<div>
									<span className="block">
										<Image
											className="object-cover w-full h-[135px]"
											src="https://i.pinimg.com/236x/24/88/e1/2488e186d9e50621d08b942fbe4e874a.jpg"
											alt=""
											width={400}
											height={300}
										/>
									</span>
								</div>

								<p className="p-2 text-sm text-gray-600 ">
									Amet minim mollit non deserunt ullamco
								</p>
								<div className="pb-2">
									<span className="flex px-2">
										<div className="flex items-center w-[100px] h-[20px]">
											{/* Star 1 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 2 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 3 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 4 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 5 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>
										</div>
										<p className="text-gray-500 text-sm">
											(123)
										</p>
									</span>
									<h3 className="text-gray-600 text-sm px-3">
										Cape Coast
									</h3>
								</div>
							</div>
						</Link>

						<Link
							href="/service"
							className="overflow-hidden bg-white rounded shadow"
						>
							<div className="h-[240px]">
								<div>
									<a href="#" title="" className="block">
										<Image
											className="object-cover w-full h-[135px]"
											src="https://i.pinimg.com/236x/8e/41/64/8e41646520ec6eb6c477d203c543fc54.jpg"
											alt=""
											width={400}
											height={300}
										/>
									</a>
								</div>

								<p className="p-2 text-sm text-gray-600 ">
									Amet minim mollit non deserunt ullamco
								</p>
								<div className="pb-2">
									<span className="flex px-2">
										<div className="flex items-center w-[100px] h-[20px]">
											{/* Star 1 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 2 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 3 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 4 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 5 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>
										</div>
										<p className="text-gray-500 text-sm">
											(123)
										</p>
									</span>
									<h3 className="text-gray-600 text-sm px-3">
										Cape Coast
									</h3>
								</div>
							</div>
						</Link>

						<Link
							href="/service"
							className="overflow-hidden bg-white rounded shadow"
						>
							<div className="h-[240px]">
								<div>
									<span className="block">
										<Image
											className="object-cover w-full h-[135px]"
											src="https://i.pinimg.com/236x/84/2d/03/842d03e68c671aa86ad7a3ec54b1f2b4.jpg"
											alt=""
											width={400}
											height={300}
										/>
									</span>
								</div>

								<p className="p-2 text-sm text-gray-600 ">
									Amet minim mollit non deserunt ullamco
								</p>
								<div className="pb-2">
									<span className="flex px-2">
										<div className="flex items-center w-[100px] h-[20px]">
											{/* Star 1 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 2 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 3 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 4 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>

											{/* Star 5 */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 24 24"
												className="w-5 h-5 text-yellow-400"
											>
												<path d="M12 17.27l5.18 3.15-1.39-6.06L22 9.24l-6.19-.53L12 2 8.19 8.71 2 9.24l4.21 4.12-1.39 6.06L12 17.27z" />
											</svg>
										</div>
										<p className="text-gray-500 text-sm">
											(123)
										</p>
									</span>
									<h3 className="text-gray-600 text-sm px-3">
										Cape Coast
									</h3>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
