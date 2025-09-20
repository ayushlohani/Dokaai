'use client';
import React, { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Navbar from '../components/navbar/navbar';
import { Search } from '@/cuteui/components/searchbar';
import { Edit } from '@mui/icons-material';
import { CiEdit } from "react-icons/ci";
import { useRouter } from 'next/navigation';

function ActionFlow() {
  const [searchText, setSearchText] = useState('');

  const flows = [
    { name: 'Notification for Influencers', desc: 'This flow deals specifically churn users and all their impacts.' },
    { name: 'Influencer Engagement System', desc: 'This flow deals specifically churn users and all their impacts.' },
    { name: 'Influencer Notification System', desc: 'This flow deals specifically churn users and all their impacts.' },
    { name: 'Influencer Outreach Notification', desc: 'This flow deals specifically churn users and all their impacts.' },
    { name: 'Influencer Collaboration Reminder', desc: 'This flow deals specifically churn users and all their impacts.' },
  ];

  const filteredFlows = flows.filter(flow =>
    flow.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const router = useRouter();



  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <Search
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholderText="Search flow"
              shape="circle"
              className="w-80"
            />
            <button onClick={()=>{router.push("/action-flow/create-action-flow")}} className="flex items-center justify-center w-10 h-10 bg-primary text-green text-2xl border" style={{ color: "#389f7f", borderRadius: "5px",border:"2px solid #389f7f" }}>
              +
            </button>
          </div>

          <div className="bg-white rounded-lg">
            <div className="grid grid-cols-3 font-medium px-4 py-3 text-sm text-gray-200" style={{backgroundColor:"rgb(228, 228, 228,0.3)",borderRadius:"15px"}}>
              <span>Action flow name</span>
              <span></span>
              <span className="text-right">Action</span>
            </div>

            {filteredFlows.map((flow, i) => (
              <div
                key={i}
                className="grid grid-cols-3 px-4 py-3 items-center last:border-none text-sm text-gray-400" style={{borderBottom:"1px solid rgb(228, 228, 228,0.8)",padding:"20px 0px"}}
              >
                <span className="truncate">{flow.name}</span>
                <span className="truncate">{flow.desc}</span>
                <span className="flex justify-end text-center">
                  <CiEdit size={25} className="w-100 mr-5 cursor-pointer text-primary text-center" fontSize="small" style={{ color: "#389f7f"}}/>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionFlow;
