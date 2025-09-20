"use client";
import React, { useState } from "react";
import { Button } from "@/cuteui/components/button/button";
import CustomSelect from "@/cuteui/components/custom-select";
import { Search } from "@/cuteui/components/searchbar";

const RecipeintForm = ({setFormOpen,setNodes,nodes,edges,setEdges,setRecipeint,idToAssign,setIdToAssign,xIndex,yIndex,setXIndex,setYIndex}:any) => {
  const [customerPool, setCustomerPool] = useState("");
  const [recipientType, setRecipientType] = useState("");
  const [searchText,setSearchText] = useState("");

  const handleSave = () => {
    setRecipeint({ customerPool, recipientType });
    console.warn(idToAssign);
    setNodes([...nodes,{ id: `${idToAssign}`, position: { x: xIndex, y: yIndex+100 }, data: { label: "Recipients",description:`You are using ${recipientType} from ${customerPool} pool`,icon:"db",isTarget:true } ,type : 'customnode'}]);
    setEdges([...edges,{ id: "e1-2", source: `${idToAssign-1}`, target: `${idToAssign}`,sourceHandle: 'b'}]);
    setYIndex(yIndex+100);
    setIdToAssign(idToAssign+1);
    setFormOpen("");
  };

  return (
    <div className="p-6 absolute top-[100px] left-[10px] bg-white w-[450px] h-[620px] z-50 flex flex-col gap-8 rounded-lg shadow-lg">
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold"><span onClick={setFormOpen} className="hover:cursor-pointer">{"<-"}</span> Choose recipient type</span>
        <span className="border-gray-600 border-[1px] p-1/1 px-2 rounded-full">i</span>
      </div>

      <div className="flex flex-col gap-2 px-2">
        <label className="text-sm font-medium text-gray-300">
            Customer pool
        </label>
        <CustomSelect
          value={customerPool}
          onChange={(e) => setCustomerPool(e.target.value)}
          options={[
            { value: "Instagram", label: "Instagram" },
            { value: "Facebook", label: "Facebook" },
            { value: "Twitter", label: "Twitter" },
          ]}
          placeholder="Select"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Search
                      value={searchText}
                      onChange={(e:any) => setSearchText(e.target.value)}
                      placeholderText="Search Target Audience"
                      shape="circle"
                    />
        <span className="text-sm text-gray-600 flex gap-[3px] pl-2"><span className="border-gray-600 border-[1px] p-1/1 px-2 rounded-full">i</span>No recipient selected</span>
      </div>

      <div className="flex gap-3">
        {["Cohorts", "Target Audience", "Payload based"].map((type) => (
          <label
            key={type}
            className="flex items-center gap-1 text-sm text-gray-300 cursor-pointer bg-slate-100 p-2 rounded-full"
          >
            <input
              type="radio"
              name="recipientType"
              value={type}
              checked={recipientType === type}
              onChange={(e) => setRecipientType(e.target.value)}
              className="accent-blue-500"
            />
            {type}
          </label>
        ))}
      </div>

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

export default RecipeintForm;
