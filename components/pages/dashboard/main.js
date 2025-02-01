import LineChart from "@/components/chart/lineChart";
import PieChart from "@/components/chart/pieChart";
import data from "../../../constant/data.json"

const MainView = () => {
    
    const processDataPie = () => {
        let totalKosmetik = 0;
        let totalBusana = 0;

        data.forEach((item) => {
            if (item.type === "Kosmetik") {
                totalKosmetik += item.sold;
            } else if (item.type === "Busana") {
                totalBusana += item.sold;
            }
        });

        return {
            totalKosmetik,
            totalBusana,
        };
    };

    const processDataLine = () => {
        const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let totalKosmetik = {};
        let totalBusana = {};

        data.forEach((item) => {
            const month = new Date(item.date).toLocaleString("default", { month: "short" });
            if (item.type === "Kosmetik") {
                totalKosmetik[month] = (totalKosmetik[month] || 0) + item.sold;
            } else if (item.type === "Busana") {
                totalBusana[month] = (totalBusana[month] || 0) + item.sold;
            }
        });

        const months = allMonths;
        const salesKosmetik = months.map((month) => totalKosmetik[month] || 0);
        const salesBusana = months.map((month) => totalBusana[month] || 0);

        return {
            months,
            salesKosmetik,
            salesBusana
        };
    };

    const { months, salesKosmetik, salesBusana } = processDataLine();

    const opt = {
        series: [
            {
                name: "Kosmetik",
                data: salesKosmetik,
            },
            {
                name: "Busana",
                data: salesBusana,
            },
        ],
        options: {
            title: {
                text: "Pertumbuhan Pesanan Tahun Ini",
            },
            chart: {
                height: 350,
                type: "area",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                categories: months,
            },
        },
    };

    const { totalKosmetik, totalBusana } = processDataPie();

    const options = {
        chart: {
            type: "pie",
            height: 350,
        },
        labels: ["Kosmetik", "Busana"],
        title: {
            text: "Data Pesanan Berdasarkan Tipe",
        },
    };

    const series = [totalKosmetik, totalBusana];

    return (
            <div className="w-dvw h-fit sm:h-[100vh] min-h-[100dvh] p-[20px] flex md:flex-row flex-col items-center md:items-start justify-center gap-[25px] ">
                <div className="md:w-[44%] w-[95%] rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default mt-4 md:mt-6 2xl:mt-7.5 ">
                    <LineChart options={opt?.options} series={opt?.series} height={500} />
                </div>
                <div className="md:w-[44%] w-[95%] rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default mt-4 md:mt-6 2xl:mt-7.5">
                    <PieChart options={options} series={series} height={350} />
                </div>
            </div>
    );
}


 

export default MainView