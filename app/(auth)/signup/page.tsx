const SignUp = () => {
	return (
		<>
			<section className="bg-white h-screen">
				<div className="flex items-center justify-center py-10 bg-white">
					<div className="w-full px-4">
						<h2 className="text-3xl font-bold leading-tight text-black text-center">
							Create an Account
						</h2>

						<form action="#" method="POST" className="mt-8">
							<div className="space-y-5">
								<div className="flex flex-col items-center">
									<div className="relative w-28 h-28 mb-4">
										<input
											type="file"
											name="profilePicture"
											id="profilePicture"
											className="absolute w-full h-full opacity-0 cursor-pointer"
										/>
										<div className="w-full h-full rounded-full overflow-hidden border-[5px] border-blue-400 flex items-center justify-center bg-gray-200 text-gray-400">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-16 h-16 text-blue-300"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
												/>
											</svg>
										</div>
									</div>
								</div>

								<div>
									<div className="mt-2.5 w-">
										<input
											type="text"
											name="username"
											id="username"
											placeholder="Username"
											className="block w-full p-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
										/>
									</div>
								</div>

								<div>
									<div className="mt-2.5">
										<select
											name="role"
											id="role"
											className="block w-full p-5 text-black transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:border-blue-600 focus:bg-white"
										>
											<option value="">Role</option>
											<option value="user">User</option>
											<option value="admin">Admin</option>
										</select>
									</div>
								</div>

								<div>
									<div className="mt-2.5">
										<input
											type="text"
											name="text"
											id="location"
											placeholder="Location"
											className="block w-full p-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
										/>
									</div>
								</div>

								<div>
									<div className="mt-2.5">
										<input
											type="tel"
											name=""
											id="phone"
											placeholder="Phone number"
											className="block w-full p-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
										/>
									</div>
								</div>

								<div>
									<div className="mt-2.5">
										<input
											type="password"
											name="password"
											id="password"
											placeholder="Create password"
											className="block w-full p-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
										/>
									</div>
								</div>

								<div>
									<div className="mt-2.5">
										<input
											type="password"
											name="confirmPassword"
											id="confirmPassword"
											placeholder="Confirm password"
											className="block w-full p-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="inline-flex items-center justify-center w-full px-4 py-5 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full focus:outline-none focus:bg-blue-700"
									>
										Sign Up
									</button>
								</div>
							</div>
						</form>

						<p className="text-lg text-gray-600 flex gap-5 mt-5 text-center">
							<span>Already have an account?</span>
							<a
								href="#"
								title=""
								className="text-lg text-blue-600 transition-all duration-200 hover:underline focus:text-blue-700 underline"
							>
								Login
							</a>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default SignUp;
