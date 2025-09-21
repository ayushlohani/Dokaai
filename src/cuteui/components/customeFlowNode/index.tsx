"use client"
import { Handle, Position } from "@xyflow/react";
import React, { useState } from "react";
import { BsDatabase } from "react-icons/bs";
import { HiOutlineBolt } from "react-icons/hi2";
import { PiTreeStructureDuotone } from "react-icons/pi";

const CustomFlowNode = ({ data }: any) => {
  const icons: Record<string, JSX.Element> = {
    bolt: <HiOutlineBolt size={20}/>,
    db: <BsDatabase size={20}/>,
    condition:<PiTreeStructureDuotone size={20}/>
  };
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`custom bg-white w-[300px] min-h-[60px] p-2 rounded-md flex flex-col justify-center items-center gap-1 cursor-pointer border-l-4 ${
        active ? "border-[#389f7f]" : "border-gray-400"
      }`}
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        {icons[data?.icon]}
        <span>{data?.label}</span>
      </div>
      {data?.description && (
        <span className="text-xs text-gray-600">{data.description}</span>
      )}

      {data?.isTarget && <Handle type="target" position={Position.Top} id={`${data.sourceId - 1}`} />}
      <Handle type="source" position={Position.Bottom} id={`${data.sourceId}`} />
    </div>
  );
};

export const CustomFlowSumNode = ({ data }: any) => {
  return (
    <div
      className="custom bg-white w-[30px] h-[30px] text-[#389f7f] rounded-full flex justify-center items-center cursor-pointer"
      onClick={() => alert("Hello")}
    >
      +
      <Handle type="target" position={Position.Top} id={`${data.sourceId}`} />
    </div>
  );
};

export default CustomFlowNode;
