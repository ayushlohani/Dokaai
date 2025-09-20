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

const Page = () => {
  const handleClick = () => alert("Hello");
  const initialNodes = [
      { id: "1", position: { x: 100, y: 100 }, data: { label: "Node 1" } },
      { id: "2", position: { x: 100, y: 200 }, data: { label: "Node 2" } },
    ];
    const initialEdges = [{ id: "e1-2", source: "1", target: "2"}];
      const [nodes, setNodes] = useState(initialNodes);
      const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="bg-[#f3f3f3] h-[100vh] w-[100vw]">
      <FloatingSidebar />

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
          <span className="text-[18px]">Untitled</span>
        </div>
        <div className="right flex gap-2.5">
          <Button
            text="Save"
            variant="outlined"
            color="secondary"
            icon={<IoSaveOutline size={20} />}
            position="leading"
            size="medium"
            onClick={handleClick}
          />
          <Button
            text="Publish"
            variant="contained"
            color="primary"
            icon={<IoPaperPlaneOutline size={20} />}
            position="leading"
            size="medium"
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Flow Canvas inside Provider */}
      <ReactFlowProvider>
        <FlowCanvas nodes={nodes} setNodes={setNodes} edges={edges} setEdges={setEdges}/>
      </ReactFlowProvider>
    </div>
  );
};

export default Page;
