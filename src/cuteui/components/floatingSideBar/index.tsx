import React, { useState } from "react";
import { FaDatabase, FaRegClipboard, FaUserPlus } from "react-icons/fa";
import { AiOutlineCluster, AiOutlineNodeIndex, AiOutlineCalendar } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { MdOutlineQueryStats } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { TbClockCheck, TbClockPlus } from "react-icons/tb";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";

const FloatingSidebar = ({setFormOpen}:any) => {
  const [active, setActive] = useState(0);

  const menuItems = [
    { icon: <BsDatabase />, label: "Recipents" },
    { icon: <PiTreeStructureDuotone />, label: "Condition" },
    { icon: <AiOutlineNodeIndex />, label: "Node" },
    { icon: <TbClockPlus />, label: "Target" },
    { icon: <TbClockCheck />, label: "Stats" },
    { icon: <RiFileList2Line />, label: "Clipboard" },
    { icon: <MdOutlinePersonAddAlt />, label: "User" },
    { icon: <AiOutlineCalendar />, label: "Calendar" },
    { icon: <AiOutlineCluster/>, label: "Clust" },
  ];

  return (
    <div className="absolute top-1/2 left-[10px] -translate-y-1/2 z-50 bg-white rounded-xl shadow-md py-2">
      <ul className="flex flex-col">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {setActive(index);setFormOpen(item.label)}}
            className={`flex items-center justify-center p-4 text-lg cursor-pointer transition-all duration-300
              ${false
                ? "bg-[#e8f8f3] border-l-4 border-[#389F7F]"
                : " hover:bg-[#f1fdf8]  hover:text-[#389F7F] border-l-4 border-[#fff] hover:border-[#389F7F]"}`}
            title={item.label} // tooltip on hover
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FloatingSidebar;
