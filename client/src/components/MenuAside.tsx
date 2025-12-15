import { RxDashboard } from "react-icons/rx";
import { AsideButton } from "./ui/AsideButtons";
import { LuAppWindow } from "react-icons/lu";
import { RiSettingsLine, RiTeamFill } from "react-icons/ri";
import { PiFiles } from "react-icons/pi";

export const MenuAside = () => (
  <aside className="bg-[#0F0B15] text-white p-4 w-[20%] min-w-50 h-full flex flex-col justify-between ">
    <h1 className="h-20 m-2.5 text-center text-3xl font-bold">Kanary</h1>
    <nav className="flex flex-col grow gap-5 items-center pl-[10%] pr-[5%]">
      <AsideButton label="Dashboard" icon={<RxDashboard />} />
      <AsideButton label="Board" icon={<LuAppWindow />} />
      <AsideButton label="Team" icon={<RiTeamFill />} />
      <AsideButton label="Project" icon={<PiFiles />} />
      <AsideButton label="Settings" icon={<RiSettingsLine />} />
    </nav>
    <div className="text-white decoration-0 mt-7.5 h-12.5 m-2.5 flex items-center justify-center">
      <a href="#">Log Out</a>
    </div>
  </aside>
);
