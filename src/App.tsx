import { BAR_CHART_DATA, GROUPED_BAR_CHART_DATA, Piedata } from "./data";
import { BarChart } from "./BarChart";
import { GroupedBarChart } from "./GroupedBarChart";
import Pie from "./PieChart";

export default function App() {
  return (
    <div className="container">
      <h2>
        <span>Nepal Population distribution using D3 js </span>
      </h2>
      <section>
        <h2>Provinces Distribution by percentage</h2>
        <BarChart data={BAR_CHART_DATA} />
      </section>
      <section>
        <h2>Male vs Female Population (In percentage) </h2>
        <GroupedBarChart data={GROUPED_BAR_CHART_DATA} />
      </section>

      <section>
        <h2>Male vs Female Literacy Rate (In percentage) </h2>
        <Pie
          data={Piedata}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </section>
    </div>
  );
}
