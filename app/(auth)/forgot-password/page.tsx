"use client";

import Link from "next/link";
import toast from "react-hot-toast";

const ForgotPassword = () => {
	const handleLogin = async (event: any) => {
		event.preventDefault();
		toast.success("Password reset link sent to your email", {
			duration: 2000,
		});
	};

	return (
		<>
			<section className="bg-white min-h-screen h-auto">
				<div className="flex items-center justify-center py-10 px-5 bg-white">
					<div className="w-full max-w-sm mt-[25%]">
						<div className="mb-[20%] flex flex-col gap-3">
							<h2 className="text-3xl font-bold leading-tight text-black text-center">
								Reset Your Password
							</h2>
							<p className="text-lg leading-tight text-black text-center">
								Enter the email address associated with your
								SkillConnect account
							</p>
						</div>

						<form className="mt-8">
							<div className="space-y-5">
								<div>
									<div className="mt-2.5">
										<input
											type="email"
											name="email"
											id="email"
											placeholder="Email"
											className="block w-full px-5 py-5 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										onClick={handleLogin}
										className="inline-flex items-center justify-center w-full px-4 py-5 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full focus:outline-none"
									>
										Confirm
									</button>
								</div>
							</div>
						</form>

						<p className="text-bas text-gray-600 flex gap-5 mt-5 text-center justify-center">
							<span>Remember your password?</span>
							<Link
								href="/login"
								title=""
								className="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700 underline"
							>
								Login
							</Link>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default ForgotPassword;
