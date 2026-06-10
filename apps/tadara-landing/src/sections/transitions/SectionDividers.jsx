import styled from 'styled-components'
import { tadaraTheme } from '../../designSystem'

const { main, cream, soft } = tadaraTheme.colors.background
const gold = tadaraTheme.colors.brand.secondary

const Divider = styled.div`
  width: 100%;
  height: clamp(72px, 9vw, 112px);
  line-height: 0;
  flex-shrink: 0;
  margin-top: -1px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export function HeroStoryDivider() {
  return (
    <Divider aria-hidden="true">
      <svg viewBox="0 0 1440 112" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tadara-hero-cream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={main} />
            <stop offset="55%" stopColor="#D4E3E9" />
            <stop offset="100%" stopColor={cream} />
          </linearGradient>
        </defs>
        <path
          fill="url(#tadara-hero-cream)"
          d="M0,0 H1440 V52 C1080,112 360,112 0,52 Z"
        />
        <path
          fill="none"
          stroke={gold}
          strokeOpacity="0.18"
          strokeWidth="1"
          d="M0,52 C360,112 1080,112 1440,52"
        />
      </svg>
    </Divider>
  )
}

export function StoryContentDivider() {
  return (
    <Divider aria-hidden="true">
      <svg viewBox="0 0 1440 112" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tadara-cream-soft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={cream} />
            <stop offset="50%" stopColor="#EEF2F0" />
            <stop offset="100%" stopColor={soft} />
          </linearGradient>
        </defs>
        <path
          fill="url(#tadara-cream-soft)"
          d="M0,60 C360,0 1080,0 1440,60 V112 H0 Z"
        />
        <path
          fill="none"
          stroke={gold}
          strokeOpacity="0.14"
          strokeWidth="1"
          d="M0,60 C360,0 1080,0 1440,60"
        />
      </svg>
    </Divider>
  )
}
