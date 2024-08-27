import React, { useState } from "react";

const ResetPasswordConfirm = () => {
	return (
		<>
			<section className="bg-white h-screen">
				<div className="flex items-center justify-center py-10 bg-white">
					<div className="w-full max-w-xs mt-[30%]">
						<div className="mb-[20%] flex flex-col gap-3">
							<h2 className="text-3xl font-bold leading-tight text-black text-center">
								Reset Your Password
							</h2>
							<p className="text-lg leading-tight text-black text-center">
								Enter your new password below
							</p>
						</div>

						<form action="#" method="POST" className="mt-8">
							<div className="space-y-5">
								<div>
									<div className="mt-2.5">
										<input
											type="password"
											name="password"
											id="password"
											placeholder="New Password"
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
											placeholder="Confirm New Password"
											className="block w-full p-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="inline-flex items-center justify-center w-full px-4 py-5 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full focus:outline-none"
									>
										Reset Password
									</button>
								</div>
							</div>
						</form>

						<p className="text-lg text-gray-600 flex gap-5 mt-5 text-center">
							<span>Remember your password?</span>
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

export default ResetPasswordConfirm;
