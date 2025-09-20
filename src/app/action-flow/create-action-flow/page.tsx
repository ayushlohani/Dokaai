"use client";
import { Button } from "@/cuteui/components/button/button";
import FloatingSidebar from "@/cuteui/components/floatingSideBar";
import React from "react";
import { AiOutlineCluster } from "react-icons/ai";
import { FaChevronRight, FaExpand, FaMinus, FaPlus } from "react-icons/fa";
import { IoSaveOutline, IoPaperPlaneOutline } from "react-icons/io5";
import {
  ReactFlow,
  Background,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ------------------ Custom Controls ------------------
const CustomControls = () => {
  const { zoomIn, zoomOut, fitView } = useReactFlow();

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-white p-2 rounded-lg shadow-md">
      <button
        onClick={() => zoomIn()}
        className="p-2 rounded hover:bg-gray-100"
      >
        <FaPlus />
      </button>
      <button
        onClick={() => zoomOut()}
        className="p-2 rounded hover:bg-gray-100"
      >
        <FaMinus />
      </button>
      <button
        onClick={() => fitView()}
        className="p-2 rounded hover:bg-gray-100"
      >
        <FaExpand />
      </button>
    </div>
  );
};

// ------------------ Flow Canvas ------------------
const FlowCanvas = () => {
  const nodes = [
    { id: "1", position: { x: 100, y: 100 }, data: { label: "Node 1" } },
    { id: "2", position: { x: 100, y: 200 }, data: { label: "Node 2" } },
  ];
  const edges = [{ id: "e1-2", source: "1", target: "2" }];

  return (
    <div className="h-[calc(100%-70px)] w-full relative">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <CustomControls />
      </ReactFlow>
    </div>
  );
};

// ------------------ Main Page ------------------
const Page = () => {
  const handleClick = () => alert("Hello");

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
        <FlowCanvas />
      </ReactFlowProvider>
    </div>
  );
};

export default Page;
