import { useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { tadaraTheme } from "../designSystem"

const { colors, typography, spacing, radius, motion } = tadaraTheme

function EmailSuccessModal({
  open,
  title = "Inscription confirmée !",
  message = "Vous serez informé en priorité de l'ouverture de l'abonnement TADARA",
  onClose,
}) {
  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <Overlay
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-success-title"
      onClick={onClose}
    >
      <ModalCard onClick={(event) => event.stopPropagation()}>
        <CheckMark aria-hidden="true">
          <svg viewBox="0 0 52 52" fill="none">
            <circle cx="26" cy="26" r="24" />
            <path d="M15 27.5L22.5 35L37 18" />
          </svg>
        </CheckMark>

        <h2 id="email-success-title">{title}</h2>
        <p>{message}</p>

        <button type="button" onClick={onClose}>
          Parfait
        </button>
      </ModalCard>
    </Overlay>
  )
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const popIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const drawCircle = keyframes`
  from { stroke-dashoffset: 160; }
  to { stroke-dashoffset: 0; }
`

const drawCheck = keyframes`
  from { stroke-dashoffset: 48; }
  to { stroke-dashoffset: 0; }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: ${spacing[5]};
  background: rgba(43, 23, 18, 0.45);
  backdrop-filter: blur(4px);
  animation: ${fadeIn} ${motion.duration.normal} ${motion.easing.smooth};
`

const ModalCard = styled.div`
  width: min(100%, 420px);
  padding: ${spacing[10]} ${spacing[8]};
  border-radius: ${radius.xl};
  background:
    radial-gradient(circle at top, rgba(216, 183, 122, 0.22), transparent 55%),
    ${colors.background.cream};
  box-shadow: 0 24px 60px rgba(43, 23, 18, 0.22);
  text-align: center;
  animation: ${popIn} ${motion.duration.slow} ${motion.easing.smooth};

  h2 {
    margin: ${spacing[5]} 0 ${spacing[3]};
    font-family: ${typography.fonts.heading};
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: ${typography.weights.bold};
    color: ${colors.text.primary};
    text-transform: uppercase;
    line-height: ${typography.lineHeights.heading};
  }

  p {
    margin: 0 0 ${spacing[8]};
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.base};
    color: ${colors.text.secondary};
    line-height: ${typography.lineHeights.body};
  }

  button {
    min-width: 160px;
    height: 46px;
    border: 0;
    border-radius: ${radius.pill};
    padding: 0 ${spacing[8]};
    background-color: ${colors.brand.primary};
    color: ${colors.text.inverse};
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.base};
    font-weight: ${typography.weights.bold};
    cursor: pointer;
    transition: background-color ${motion.duration.normal} ${motion.easing.default};

    &:hover {
      background-color: ${colors.form.buttonHover};
    }
  }
`

const CheckMark = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto;

  svg {
    width: 100%;
    height: 100%;
  }

  circle {
    stroke: ${colors.brand.secondary};
    stroke-width: 3;
    stroke-dasharray: 160;
    stroke-dashoffset: 160;
    animation: ${drawCircle} ${motion.duration.slow} ${motion.easing.smooth} forwards;
  }

  path {
    stroke: ${colors.brand.primary};
    stroke-width: 3.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: ${drawCheck} 420ms ${motion.easing.smooth} 220ms forwards;
  }
`

export default EmailSuccessModal
