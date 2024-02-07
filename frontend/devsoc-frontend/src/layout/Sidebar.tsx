import UnilectivesLogo from "../assets/unilectives.svg";
import AuthIcon from "../components/nav-icons/AuthIcon";
import HistoryIcon from "../components/nav-icons/HistoryIcon";
import ListArrIcon from "../components/nav-icons/ListArrIcon";
import LogoutIcon from "../components/nav-icons/LogoutIcon";
import ModeIcon from "../components/nav-icons/ModeIcon";
import UserIcon from "../components/nav-icons/UserIcon";

export default function Sidebar() {
	return (
		<aside className="bg-slate-100 w-[5rem] flex flex-col p-4 items-center justify-between">
			<div className="flex flex-col gap-6 items-center">
				<img src={UnilectivesLogo} alt="Unilectives logo" className="h-9 w-9 mt-2" />
				<div className="border w-14 mt-1"></div>

				<div className="flex flex-col gap-12 mt-2">
					<HistoryIcon />
					<AuthIcon />
				</div>
			</div>

			<div className="flex flex-col items-center gap-12 mb-14">
				<ListArrIcon />
				<UserIcon />
				<ModeIcon />
				<LogoutIcon />
			</div>
		</aside>
	);
}
