import React, { useState } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Real', value: 45 },
    { name: 'Fake', value: 55 },
];

const COLORS = ['#3b82f6', '#93c5fd', '#dbeafe'];

const DoughnutChart = () => {
    const [activeSegment, setActiveSegment] = useState(null);

    const handleMouseEnter = (_, index) => setActiveSegment(index);
    const handleMouseLeave = () => setActiveSegment(null);

    const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);

    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Device Usage</h2>
            <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={80}
                        outerRadius={120}
                        dataKey="value"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        activeIndex={activeSegment}
                        activeShape={{ scale: 1.05 }}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index]}
                                opacity={activeSegment !== null && activeSegment !== index ? 0.3 : 1}
                                style={{ transition: 'opacity 0.2s' }}
                            />
                        ))}
                    </Pie>

                    {/* 정확히 중앙 정렬된 텍스트 */}
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="font-semibold fill-gray-800"
                    >
                        {activeSegment !== null ? (
                            <>
                                <tspan dy="-0.8em" className="text-base">{data[activeSegment].name}</tspan>
                                <tspan x="50%" dy="1.5em" className="text-sm">
                                    {data[activeSegment].value}
                                </tspan>
                            </>
                        ) : (
                            <>
                                <tspan dy="-0.8em" className="text-base">Total</tspan>
                                <tspan x="50%" dy="1.5em" className="text-sm">
                                    {totalValue}
                                </tspan>
                            </>
                        )}
                    </text>

                    <Legend
                        align="center"
                        verticalAlign="bottom"
                        iconType="circle"
                        iconSize={10}
                        wrapperStyle={{ fontSize: '13px', cursor: 'pointer' }}
                        onMouseEnter={(e) => {
                            const index = data.findIndex(d => d.name === e.value);
                            setActiveSegment(index);
                        }}
                        onMouseLeave={() => setActiveSegment(null)}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DoughnutChart;
