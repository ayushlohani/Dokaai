import { Button } from "@/cuteui/components/button/button";
import { CustomSelect } from "@/cuteui/components/custom-select";
import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

const ActionFlowStart = ({setActionFlow,setFormOpen,setNodes,idToAssign,setIdToAssign,xIndex,yIndex,setXIndex,setYIndex} : any) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const toStringVal = (e: SelectChangeEvent<string | string[]>) => {
    const v = e.target.value;
    return Array.isArray(v) ? (v[0] ?? "") : v;
  };

  const handleSave = () => {
    setActionFlow({ name, description, tag, notificationType });
    console.warn(idToAssign);
    setNodes([{ id: `${idToAssign}`, position: { x: xIndex, y: yIndex+100 }, data: { label: name,description,icon:"bolt",isTarget:false,sourceId:idToAssign } ,type : 'customnode'}]);
    setIdToAssign(idToAssign+1);
    setYIndex(yIndex+100);
    setFormOpen("");
  };

  return (
    <div className="actionformcreate p-6 absolute top-[100px] left-[10px] bg-white w-[450px] h-[620px] z-50 flex flex-col gap-6 rounded-lg shadow-lg" >
      <div className="form flex flex-col gap-4">
        <h5 className="text-black font-semibold text-lg flex"><span onClick={setFormOpen} className="mr-1 hover:cursor-pointer">
            ← 
          </span>{" "}Enter Handler details</h5>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-300">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tag */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-300">Tag</label>
          <CustomSelect
            value={tag}
            onChange={(e) => setTag(toStringVal(e))}
            options={[
              { value: "tag1", label: "Tag 1" },
              { value: "tag2", label: "Tag 2" },
            ]}
            placeholder="Select a tag"
            showPlaceholderInMenu
          />
        </div>

        {/* Notification Type */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-300">
            Notification type
          </label>
          <CustomSelect
            value={notificationType}
            onChange={(e) => setNotificationType(toStringVal(e))}
            options={[
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" },
              { value: "push", label: "Push" },
            ]}
            placeholder="Select type"
            showPlaceholderInMenu
          />
        </div>
      </div>

      {/* Save button */}
      <div className="mt-auto flex justify-end">
        <span><Button
          text="Save"
          variant="contained"
          color="primary"
          position="leading"
          size="medium"
          onClick={handleSave}
        /></span>
      </div>
    </div>
  );
};

export default ActionFlowStart;
