import styled from 'styled-components'
import { tadaraTheme } from '../../designSystem'

const { main, cream, soft } = tadaraTheme.colors.background
const gold = tadaraTheme.colors.brand.secondary

const Divider = styled.div`
  width: 100%;
  height: clamp(120px, 12vw, 168px);
  line-height: 0;
  flex-shrink: 0;
  margin-top: -1px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`

function PremiumDivider({ from, to, id, invert = false }) {
  const gradientId = `tadara-gradient-${id}`
  const motifId = `tadara-motif-${id}`

  return (
    <Divider aria-hidden="true">
      <svg viewBox="0 0 1440 168" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="52%" stopColor="#E9E1D5" />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
          <pattern id={motifId} width="120" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M0 14 H120"
              fill="none"
              stroke={gold}
              strokeOpacity="0.2"
              strokeWidth="0.8"
            />
            <path
              d="M12 14 L20 6 L28 14 L20 22 Z M28 14 L36 6 L44 14 L36 22 Z M44 14 L52 6 L60 14 L52 22 Z"
              fill="none"
              stroke={gold}
              strokeOpacity="0.34"
              strokeWidth="0.9"
            />
            <circle cx="60" cy="14" r="1.6" fill={gold} fillOpacity="0.38" />
            <path
              d="M68 14 L76 6 L84 14 L76 22 Z M84 14 L92 6 L100 14 L92 22 Z M100 14 L108 6 L116 14 L108 22 Z"
              fill="none"
              stroke={gold}
              strokeOpacity="0.34"
              strokeWidth="0.9"
            />
          </pattern>
        </defs>

        <path
          fill={`url(#${gradientId})`}
          d={
            invert
              ? 'M0,98 C300,28 1140,28 1440,98 V168 H0 Z'
              : 'M0,0 H1440 V70 C1140,140 300,140 0,70 Z'
          }
        />

        <path
          fill="none"
          stroke={gold}
          strokeOpacity="0.24"
          strokeWidth="1"
          d={invert ? 'M0,98 C300,28 1140,28 1440,98' : 'M0,70 C300,140 1140,140 1440,70'}
        />
        <rect x="0" y="84" width="1440" height="28" fill={`url(#${motifId})`} />
        <line x1="0" y1="84" x2="1440" y2="84" stroke={gold} strokeOpacity="0.18" strokeWidth="0.9" />
        <line x1="0" y1="112" x2="1440" y2="112" stroke={gold} strokeOpacity="0.16" strokeWidth="0.9" />
      </svg>
    </Divider>
  )
}

export function HeroStoryDivider() {
  return <PremiumDivider from={main} to={cream} id="hero-story" />
}

export function StoryContentDivider() {
  return <PremiumDivider from={cream} to={soft} id="story-content" invert />
}

export function ContentReasonsDivider() {
  return <PremiumDivider from={soft} to={cream} id="content-reasons" />
}

export function ReasonsMoreLetterDivider() {
  return <PremiumDivider from={cream} to={soft} id="reasons-more-letter" invert />
}

export function MoreLetterWhyStartDivider() {
  return <PremiumDivider from={soft} to={cream} id="more-letter-why-start" />
}
