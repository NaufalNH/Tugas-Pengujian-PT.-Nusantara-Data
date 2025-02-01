"use client";
import React from "react";
import data from "../../constant/data.json";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = ({series, options, height}) => {
    return (
        <div className="w-full">
            <Chart options={options} width="100%" series={series} type="pie" height={height} />
        </div>
    );
};

export default PieChart;
