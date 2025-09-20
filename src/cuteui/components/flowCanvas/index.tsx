"use client";
import React, { useCallback, useState } from "react";
import { FaChevronRight, FaExpand, FaMinus, FaPlus } from "react-icons/fa";
import {
  ReactFlow,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  useReactFlow,
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

export const FlowCanvas = ({nodes,setNodes,edges,setEdges} : any) => {
  const onNodesChange = useCallback(
  (changes:any) => setNodes((nodesSnapshot:any) => applyNodeChanges(changes, nodesSnapshot)),
  [],
);
const onEdgesChange = useCallback(
  (changes:any) => setEdges((edgesSnapshot:any) => applyEdgeChanges(changes, edgesSnapshot)),
  [],
);
const onConnect = useCallback(
  (params:any) => setEdges((edgesSnapshot:any) => addEdge(params, edgesSnapshot)),
  [],
);

  return (
    <div className="h-[calc(100%-70px)] w-full relative">
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange} onConnect={onConnect} fitView>
        <Background />
        <CustomControls />
      </ReactFlow>
    </div>
  );
};
