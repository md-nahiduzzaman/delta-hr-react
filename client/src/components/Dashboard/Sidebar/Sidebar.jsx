import MenuItem from "./Menu/MenuItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  LayoutDashboard,
  CalendarClock,
  Landmark,
  ClipboardList,
  UserRound,
  Tent,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-[260px] border-r flex flex-col  ">
      <div className="flex items-center  p-4 pt-4">
        <h1 className="text-3xl font-medium text-center">Delta HR</h1>
      </div>
      <hr />
      <div className="flex flex-col flex-1 mt-6 px-3">
        <nav>
          <MenuItem
            label="Statistics"
            icon={LayoutDashboard}
            address="/"
          ></MenuItem>
          <MenuItem
            label="Attendance"
            icon={CalendarClock}
            address="/attendance"
          ></MenuItem>
          <MenuItem label="Leave" icon={Tent} address="/leave"></MenuItem>
          <MenuItem
            label="Task Management"
            icon={ClipboardList}
            address="/taskManagement"
          ></MenuItem>
          <MenuItem label="Salary" icon={Landmark} address="/salary"></MenuItem>
          <MenuItem
            label="Profile"
            icon={UserRound}
            address="/profile"
          ></MenuItem>
        </nav>
      </div>
      <hr />
      <div className="mb-6 mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 px-6">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid gap-0">
            <h1 className="font-semibold">William Smith</h1>
            <h1 className="text-xs">smith@gmail.com</h1>
          </div>
        </div>
        <div className=" flex w-full items-center px-4  text-slate-900 ">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="w-5 h-5" />
            <span className="mx-2">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
