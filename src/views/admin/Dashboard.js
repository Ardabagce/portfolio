import React from "react";

// components

import CardLineChart from "../../Components/Dashboard/Cards/CardLineChart.js";
import CardBarChart from "../../Components/Dashboard/Cards/CardBarChart.js";
import CardPageVisits from "../../Components/Dashboard/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../Components/Dashboard/Cards/CardSocialTraffic.js";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar.js";

export default function Dashboard() {
  return (
    <>
    <Sidebar/>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
