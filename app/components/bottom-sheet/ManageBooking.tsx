import React from "react";

const ManageBooking = () => {
	return (
		<>
			<section className="fixed bottom-0 w-full bg-white h-[30vh] rounded-t-3xl shadow-lg p-3">
				<div className="flex flex-col h-full">
					<h2 className="text-2xl font-bold text-black pb-3">
						Manage Booking
					</h2>
					<p className="text-gray-900 pb-3">
						Are you sure you want to delete, cancel or recreate this
						booking? This action can not be undone.
					</p>

					<hr />

					<div className="space-y-4 w-full">
						<button
							type="button"
							className="w-full py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
						>
							Cancel
						</button>

						<button
							type="button"
							className="w-full py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-600 rounded-full focus:outline-none hover:bg-gray-700 focus:bg-gray-700"
						>
							Delete
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default ManageBooking;
