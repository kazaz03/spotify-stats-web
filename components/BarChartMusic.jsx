import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function MusicBarChart() {
  const data = [
    { day: "Mon", hours: 0.7 },
    { day: "Tue", hours: 1.1 },
    { day: "Wed", hours: 0.5 },
    { day: "Thu", hours: 1.3 },
    { day: "Fri", hours: 1.6 },
    { day: "Sat", hours: 2.0 },
    { day: "Sun", hours: 1.2 },
  ];

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        height: 300,
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ bottom: 60 }} barCategoryGap="5%">
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1DB954" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={({ x, y, payload }) => {
              const { index } = payload;
              return (
                <text x={x} y={y + 20} textAnchor="middle">
                  <tspan x={x} dy="0" fill="white" fontSize={16}>
                    {payload.value}
                  </tspan>
                  <tspan x={x} dy="1.2em" fill="#1DB954" fontSize={14}>
                    {data[index].hours}h
                  </tspan>
                </text>
              );
            }}
          />

          <YAxis hide />

          <Bar
            dataKey="hours"
            radius={[10, 10, 0, 0]}
            fill="url(#grad1)"
            barSize={120}
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
