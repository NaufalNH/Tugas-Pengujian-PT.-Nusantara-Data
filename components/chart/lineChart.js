"use client";
import React from "react";
import data from "../../constant/data.json"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = ({options, series, height}) => {
    return (
        <div className="w-full">
            <Chart options={options} width="100%" series={series} type="area" height={height} />
        </div>
    );
};

export default LineChart;
