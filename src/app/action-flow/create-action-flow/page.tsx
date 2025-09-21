"use client";
import { Button } from "@/cuteui/components/button/button";
import FloatingSidebar from "@/cuteui/components/floatingSideBar";
import React, { useCallback, useState } from "react";
import { AiOutlineCluster } from "react-icons/ai";
import { FaChevronRight, FaExpand, FaMinus, FaPlus } from "react-icons/fa";
import { IoSaveOutline, IoPaperPlaneOutline } from "react-icons/io5";
import {
  ReactFlow,
  Background,
  useReactFlow,
  ReactFlowProvider,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FlowCanvas } from "@/cuteui/components/flowCanvas";
import { HiOutlineBolt } from "react-icons/hi2";
import ActionFlowStart from "@/app/components/sideFloatingForm/ActionFlowStart";
import RecipeintForm from "@/app/components/sideFloatingForm/RecipeintForm";
import ConditionFormNode from "@/app/components/sideFloatingForm/ConditionNodeForm";

const Page = () => {
  const handleClick = () => alert("Hello");
  const [idToAssign,setIdToAssign] = useState(1);
  const [xIndex,setXIndex] = useState(0);
  const [yIndex,setYIndex] = useState(0);
  const [recipeint,setRecipeint] = useState({});
  const [condition,setCondition] = useState({});

  const initialNodes = [
      { id: "1", position: { x: 100, y: 100 }, data: { label: "Node 1" } ,type : 'customnode'},
      { id: "2", position: { x: 200, y: 200 }, data: { label: "Node 2" } },
      { id: "3", position: { x: 0, y: 200 }, data: { label: "Node 3" } },
      { id: "4", position: { x: 300, y: 300 }, data: { label: "Node 3" },type : 'customnodeplus'},
    ];
    const initialEdges = [{ id: "e1-2", source: "1", target: "2",sourceHandle: 'b'},{ id: "e1-3", source: "1", target: "3",sourceHandle: 'b'},{ id: "e2-4", source: "2", target: "4"}];
      const [nodes, setNodes] = useState([]);
      const [edges, setEdges] = useState([]);
      type ActionFlow = { name?: string,tag?:string,notificationType?:string,description?:string };
      const [actionFlow, setActionFlow] = useState<ActionFlow>({});
      const [formOpen,setFormOpen] = useState("");

  return (
    <div className="bg-[#f3f3f3] h-[100vh] w-[100vw]">
      <FloatingSidebar setFormOpen = {setFormOpen}/>
      {formOpen === "new-action" && <ActionFlowStart setActionFlow={setActionFlow} setFormOpen = {setFormOpen} setNodes = {setNodes} 
      idToAssign = {idToAssign} setIdToAssign={setIdToAssign} xIndex = {xIndex} yIndex = {yIndex} setXIndex={setXIndex} setYIndex={setYIndex}/>}
      {formOpen == "Recipents" && 
      <RecipeintForm setFormOpen = {setFormOpen} setRecipeint={setRecipeint} nodes = {nodes} setNodes = {setNodes} edges = {edges} setEdges = {setEdges} 
      idToAssign = {idToAssign} setIdToAssign={setIdToAssign} xIndex = {xIndex} yIndex = {yIndex} setXIndex={setXIndex} setYIndex={setYIndex}/>}
      {formOpen == "Condition" && 
      <ConditionFormNode setFormOpen = {setFormOpen} setCondition={setCondition} nodes = {nodes} setNodes = {setNodes} edges = {edges} setEdges = {setEdges} 
      idToAssign = {idToAssign} setIdToAssign={setIdToAssign} xIndex = {xIndex} yIndex = {yIndex} setXIndex={setXIndex} setYIndex={setYIndex}/>}

      {/* Header */}
      <div className="header bg-white py-4 px-8 w-full flex justify-between items-center">
        <div className="left flex items-center gap-2.5">
          <span className="rounded-[6px] text-[#389f7f]">
            <AiOutlineCluster
              size={40}
              style={{ backgroundColor: "#398a7a5b", padding: "6px" }}
            />
          </span>
          <span className="text-center flex items-center text-[#389f7f]">
            <FaChevronRight size={20} />
          </span>
          <span className="text-[18px]">{actionFlow?.name || "Untitled"}</span>
        </div>
        <div className="right flex gap-2.5">
          {actionFlow?.name ?<Button
            text="Edit"
            variant="outlined"
            color="secondary"
            icon={<IoSaveOutline size={20} />}
            position="leading"
            size="medium"
            onClick={handleClick}
          /> : <Button
            text="Save"
            variant="outlined"
            color="secondary"
            icon={<IoSaveOutline size={20} />}
            position="leading"
            size="medium"
            onClick={handleClick}
          />}
          <Button
            text="Publish"
            variant="contained"
            color="primary"
            icon={<IoPaperPlaneOutline size={20} />}
            position="leading"
            size="medium"
            disabled = {actionFlow?.name ? false : true}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="w-[200px] h-[40px] absolute top-1/2 left-[44%] z-50" onClick={()=>setFormOpen("new-action")}>
        {nodes.length == 0 && <button className="flex text-[18px] text-white bg-[#1F1F1F66] px-5 justify-center items-center py-2 rounded-md hover:bg-[#707070]"><HiOutlineBolt size={20}/> Click to start</button>}
      </div>
      {/* Flow Canvas inside Provider */}
      <ReactFlowProvider>
        {initialNodes.length > 0 && <FlowCanvas nodes={nodes} setNodes={setNodes} edges={edges} setEdges={setEdges}/>}
      </ReactFlowProvider>
    </div>
  );
};

export default Page;
