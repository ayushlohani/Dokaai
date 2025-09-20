import { Handle, Position } from '@xyflow/react'
import React from 'react'

const CustomFlowNode = ({data}:any) => {
  return (
    <div className="custom bg-red-100 w-[200px] h-[50px] flex justify-center items-center">
        {data.label}
        <Handle type="target" position={Position.Top} id='a'/>
      <Handle type="source" position={Position.Bottom} id='b'/>
    </div>
  )
}

export default CustomFlowNode