import Link from "next/link";
import React from "react";
import BottomNavigator from "@/app/components/BottomNavigator";

const Settings = () => {
	return (
		<>
			<section className="bg-white min-h-screen h-auto">
				<div className="flex flex-col items-center justify-center bg-white pt-2">
					<div className="w-full">
						<h2 className="text-3xl font-bold leading-tight text-black mb-8 px-4">
							Settings
						</h2>

						<div className="space-y-2">
							{/* Button 1 */}
							<Link
								href="/profile"
								className="flex items-center justify-between w-full px-4 py-4 text-lg font-semibold text-black"
							>
								Account
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="size-6"
								>
									<path
										fillRule="evenodd"
										d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>

							{/* Button 2 */}
							<Link
								href="/recent-bookings"
								className="flex items-center justify-between w-full px-4 py-4 text-lg font-semibold text-black"
							>
								Recent Booking
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="size-6"
								>
									<path
										fillRule="evenodd"
										d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>

							{/* Button 3 */}
							<Link
								href="#"
								className="flex items-center justify-between w-full px-4 py-4 text-lg font-semibold text-black"
							>
								Privacy
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="size-6"
								>
									<path
										fillRule="evenodd"
										d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>

							{/* Button 4 */}
							<Link
								href="#"
								className="flex items-center justify-between w-full px-4 py-4 text-lg font-semibold text-black"
							>
								Help & Support
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="size-6"
								>
									<path
										fillRule="evenodd"
										d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>

							{/* Button 5 */}
							<Link
								href="/login"
								className="flex items-center justify-between w-full px-4 py-4 text-lg font-semibold text-red-500"
							>
								Sign Out
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="size-6"
								>
									<path
										fillRule="evenodd"
										d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<BottomNavigator />
		</>
	);
};

export default Settings;
