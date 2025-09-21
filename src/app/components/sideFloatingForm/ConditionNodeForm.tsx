"use client";
import React, { useState } from "react";
import { Button } from "@/cuteui/components/button/button";
import CustomSelect from "@/cuteui/components/custom-select";
import { Search } from "@/cuteui/components/searchbar";

const ConditionFormNode = ({
  setFormOpen,
  setNodes,
  nodes,
  edges,
  setEdges,
  setCondition,
  idToAssign,
  setIdToAssign,
  xIndex,
  yIndex,
  setXIndex,
  setYIndex,
}: any) => {
  const [conditionName, setConditionName] = useState("");
  const [dataProperty, setDataProperty] = useState("");
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("");

  const handleSave = () => {
    setCondition({ conditionName, dataProperty, operator, value });
    setNodes([
      ...nodes,
      {
        id: `${idToAssign}`,
        position: { x: xIndex, y: yIndex + 100 },
        data: {
          label: "Condition",
          description: `if ${dataProperty} ${operator} ${value}`,
          icon: "condition",
          isTarget: true,
          sourceId:idToAssign 
        },
        type: "customnode",
      },{
        id: `${idToAssign+1}`,
        position: { x: xIndex, y: yIndex + 200 },
        data:{sourceId:idToAssign+1},
        type : 'customnodeplus'
      },{
        id: `${idToAssign+2}`,
        position: { x: xIndex+290, y: yIndex + 200 },
        data:{sourceId:idToAssign+2},
        type : 'customnodeplus'
      },
    ]);
    setEdges([...edges,{ id: `e${idToAssign-1}-${idToAssign}`, source: `${idToAssign-1}`, target: `${idToAssign}`,sourceHandle: `${idToAssign-1}`},{ id: `e${idToAssign}-${idToAssign+1}`, source: `${idToAssign}`, target: `${idToAssign+1}`,sourceHandle: `${idToAssign}`,label: 'False'},{ id: `e${idToAssign}-${idToAssign+2}`, source: `${idToAssign}`, target: `${idToAssign+2}`,sourceHandle: `${idToAssign}`,label: 'True',}]);
    setYIndex(yIndex + 200);
    setIdToAssign(idToAssign + 3);
    setFormOpen("");
  };

  return (
    <div className="p-6 absolute top-[100px] left-[10px] bg-white w-[450px] h-[620px] z-50 flex flex-col gap-4 rounded-lg shadow-lg">
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">
          <span onClick={setFormOpen} className="hover:cursor-pointer">
            {"<-"}
          </span>{" "}
          Add Condition
        </span>
        <span className="border-gray-600 border-[1px] px-2 rounded-full">i</span>
      </div>

      {/* Condition Name */}
      <div className="flex flex-col gap-2 px-2">
        <label className="text-sm font-medium text-gray-300">Condition name</label>
        <CustomSelect
          value={conditionName}
          onChange={(e) => setConditionName(e.target.value)}
          options={[
            { value: "Instagram", label: "Instagram" },
            { value: "Facebook", label: "Facebook" },
            { value: "Twitter", label: "Twitter" },
          ]}
          placeholder="Select condition"
        />
      </div>

      {/* Data Property */}
      <div className="flex flex-col gap-2 px-2">
        <label className="text-sm font-medium text-gray-300">Data property</label>
        <CustomSelect
          value={dataProperty}
          onChange={(e) => setDataProperty(e.target.value)}
          options={[
            { value: "Usertype", label: "Usertype" },
            { value: "Region", label: "Region" },
            { value: "Age", label: "Age" },
          ]}
          placeholder="Select"
        />
      </div>

      {/* Operator */}
      <div className="flex flex-col gap-2 px-2">
        <label className="text-sm font-medium text-gray-300">Operator</label>
        <CustomSelect
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          options={[
            { value: "=", label: "Is equal to" },
            { value: "!=", label: "Is not equal to" },
            { value: ">", label: "Greater than" },
            { value: "<", label: "Less than" },
          ]}
          placeholder="Select operator"
        />
      </div>

      {/* Value */}
      <div className="flex flex-col gap-2 px-2">
        <label className="text-sm font-medium text-gray-300">Value</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
          className="border p-2 rounded-md"
        />
      </div>

      <div className="mt-auto flex justify-end">
        <span>
          <Button
            text="Save"
            variant="contained"
            color="primary"
            position="leading"
            size="medium"
            onClick={handleSave}
          />
        </span>
      </div>
    </div>
  );
};

export default ConditionFormNode;
