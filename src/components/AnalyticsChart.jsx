import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"


function AnalyticsChart() {

  const data = [
    {
      name: "New",
      leads: 80
    },
    {
      name: "Contacted",
      leads: 50
    },
    {
      name: "Converted",
      leads: 120
    },
    {
      name: "Lost",
      leads: 20
    }
  ]


  return (
    <div className="chart-box">

      <h2>Lead Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar 
            dataKey="leads"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}


export default AnalyticsChart