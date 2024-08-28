import React from "react";

const BottomSheet = () => {
	return (
		<>
			<section className="fixed bottom-0 w-full bg-white h-[35vh] rounded-t-3xl shadow-lg p-3">
				<div className="flex flex-col h-full">
					<h2 className="text-2xl font-bold text-black pb-3 pl-2">
						Create Booking
					</h2>

					<hr />

					<div className="space-y-4 w-full">
						<input
							type="search"
							placeholder="Title"
							className="w-full py-4 text-base text-gray-900 font-semibold transition-all duration-200 rounded-full px-4 border focus:outline-none"
						/>

						<input
							type="search"
							placeholder="Description"
							className="w-full py-4 text-base font-semibold text-gray-900 transition-all duration-200 rounded-full px-4 border focus:outline-none "
						/>
						<button
							type="button"
							className="w-full py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full"
						>
							Submit
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default BottomSheet;
