import { Handle, Position } from "@xyflow/react";
import React from "react";
import { BsDatabase } from "react-icons/bs";
import { HiOutlineBolt } from "react-icons/hi2";

const CustomFlowNode = ({ data }: any) => {
  const icons: Record<string, JSX.Element> = {
    bolt: <HiOutlineBolt size={20}/>,
    db: <BsDatabase size={20}/>
  };

  return (
    <div
      className="custom bg-white w-[300px] min-h-[60px] p-2 rounded-md flex flex-col justify-center items-center gap-1 cursor-pointer"
      onClick={() => alert("Hello")}
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        {icons[data?.icon]}
        <span>{data?.label}</span>
      </div>
      {data?.description && (
        <span className="text-xs text-gray-600">{data.description}</span>
      )}

      {data?.isTarget && <Handle type="target" position={Position.Top} id="a" />}
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
};

export const CustomFlowSumNode = () => {
  return (
    <div
      className="custom bg-white w-[30px] h-[30px] text-[#389f7f] rounded-full flex justify-center items-center border border-gray-300 cursor-pointer"
      onClick={() => alert("Hello")}
    >
      +
      <Handle type="target" position={Position.Top} id="c" />
    </div>
  );
};

export default CustomFlowNode;
