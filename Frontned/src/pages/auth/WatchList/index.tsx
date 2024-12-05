import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { FooterComponent } from "../../../components/common";
import { HeaderComponent } from "../../../components/common";
import axios from "axios"; 

const WatchListPage = () => {
  const [seriesData, setSeriesData] = useState([25.6, 32.0, 23.8, 9.9, 8.7]);
  const [tempSeriesData, setTempSeriesData] = useState([...seriesData]);
  const [showInputs, setShowInputs] = useState(false);
  const [chartId, setChartId] = useState(""); 

  useEffect(() => {
    axios
      .get("http://localhost:9006/pie/")
      .then((response) => {
        console.log(response.data); 
        if (response.data && response.data.series) {
          setSeriesData(response.data.series); 
          setTempSeriesData(response.data.series); 
          setChartId(response.data.id); 
        } else {
          console.error("Invalid response structure", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const handleInputChange = (index:any, value:any) => {
    const updatedTempData = [...tempSeriesData];
    updatedTempData[index] = parseFloat(value) || 0;
    setTempSeriesData(updatedTempData);
  };


  const handleApplyUpdate = () => {
    setSeriesData([...tempSeriesData]);
    setShowInputs(false);
  
    axios
      .post(`http://localhost:9006/pie/${chartId}`, { series: tempSeriesData })
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        alert("Chart updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        alert("Failed to update the chart. Please try again.");
        setSeriesData([...seriesData]); 
      });
  };
  

  const chartData = {
    series: seriesData,
    options: {
      chart: {
        type: "donut",
        height: 700,
        width: 700,
      },
      labels: ["series-1", "series-2", "series-3", "series-4", "series-5"],
      title: {
        text: "Simple Donut Chart",
        align: "center",
        style: {
          fontSize: "24px",
          fontWeight: "bold",
        },
      },
      legend: {
        position: "right",
        fontSize: "16px",
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return `${val.toFixed(1)}%`;
        },
        style: {
          fontSize: "14px",
        },
      },
    } as ApexOptions,
  };

  return (
    <>
      <HeaderComponent />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
       
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          height={700}
          width={700}
        />

        <button
          onClick={() => setShowInputs(true)}
          style={{
            margin: "20px 0",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Update
        </button>

        {showInputs && (
          <div>
            {tempSeriesData.map((value, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <label>{`Series ${index + 1}: `}</label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  step="0.1"
                  style={{
                    padding: "8px",
                    width: "80px",
                    fontSize: "16px",
                  }}
                />
              </div>
            ))}

        
            <button
              onClick={handleApplyUpdate}
              style={{
                margin: "20px 0",
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Apply Update
            </button>
          </div>
        )}
      </div>
      <FooterComponent />
    </>
  );
};

export default WatchListPage;
