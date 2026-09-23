import styled from "styled-components"
import { formatChartDay } from "./adminHelpers"

function LineChart({ days }) {
  const width = 920
  const height = 220
  const paddingLeft = 36
  const paddingRight = 16
  const paddingTop = 16
  const paddingBottom = 28
  const chartWidth = width - paddingLeft - paddingRight
  const chartHeight = height - paddingTop - paddingBottom
  const safeDays = days.length > 0 ? days : [{ date: "1970-01-01", count: 0 }]
  const maxCount = Math.max(1, ...safeDays.map((day) => day.count))

  const points = safeDays.map((day, index) => {
    const x =
      paddingLeft +
      (safeDays.length === 1 ? chartWidth / 2 : (index / (safeDays.length - 1)) * chartWidth)
    const y = paddingTop + chartHeight - (day.count / maxCount) * chartHeight
    return { x, y, day }
  })

  const polyline = points.map((point) => `${point.x},${point.y}`).join(" ")
  const area = `${paddingLeft},${paddingTop + chartHeight} ${polyline} ${
    points[points.length - 1]?.x || paddingLeft
  },${paddingTop + chartHeight}`

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) => Math.round(maxCount * ratio))

  return (
    <ChartWrap viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Évolution sur 30 jours">
      {yTicks.map((tick) => {
        const y = paddingTop + chartHeight - (tick / maxCount) * chartHeight
        return (
          <g key={tick}>
            <line
              x1={paddingLeft}
              x2={width - paddingRight}
              y1={y}
              y2={y}
              stroke="#EEF2F7"
            />
            <text x={4} y={y + 4} fill="#94A3B8" fontSize="10">
              {tick}
            </text>
          </g>
        )
      })}
      <polygon points={area} fill="url(#chartFill)" />
      <polyline
        points={polyline}
        fill="none"
        stroke="#4F46E5"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {points.map((point) => (
        <circle key={point.day.date} cx={point.x} cy={point.y} r="3.5" fill="#4F46E5" />
      ))}
      {points.filter((_, index) => index % 2 === 0).map((point) => (
        <text
          key={`${point.day.date}-label`}
          x={point.x}
          y={height - 8}
          textAnchor="middle"
          fill="#94A3B8"
          fontSize="10"
        >
          {formatChartDay(point.day.date)}
        </text>
      ))}
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </ChartWrap>
  )
}

const ChartWrap = styled.svg`
  width: 100%;
  height: 240px;
  display: block;
`

export default LineChart
