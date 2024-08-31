import Image from "next/image";
import BottomNavigator from "@/app/components/BottomNavigator";
import NoNotification from "@/public/notification.jpg";

const Notification = () => {
	return (
		<>
			<section className="bg-white min-h-screen h-screen px-2 pb-2">
				<h1 className="text-3xl font-bold leading-tight text-black mb-3 px-2 bg-white sticky z-20 top-0 pt-2">
					Notification
				</h1>

				<div className="flex flex-col justify-center items-center h-[60%] w-full">
					<Image
						src={NoNotification}
						alt=""
						width={250}
						height={250}
						className="text-black"
					/>
					<h3 className="font-serif text-blue-400 font-black">
						No notification
					</h3>
				</div>
			</section>
			<BottomNavigator />
		</>
	);
};

export default Notification;
