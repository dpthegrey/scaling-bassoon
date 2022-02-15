import React, { useState } from "react";

import BarChart from "./BarChart.js";
import AreaChart from "./AreaChart.js";
import { useAppContext } from "../context/appContext.js";
import Wrapper from "../assets/wrappers/ChartsContainer.js";

export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>

      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "AreaChart" : "BarChart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
}
