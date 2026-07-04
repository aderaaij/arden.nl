import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const EASE: [number, number, number, number] = [0.2, 0.7, 0.3, 1];

interface Props {
  text?: string;
  /** Resting chromatic offset in px; doubles on hover. The dial from the design. */
  offset?: number;
}

export default function GlitchWordmark({ text = 'Arden de Raaij', offset = 2 }: Props) {
  const [spread, setSpread] = useState(false);
  const reduced = useReducedMotion();
  // Reduced motion keeps the static split but never animates it.
  const s = reduced ? offset : spread ? offset * 2 : offset;

  return (
    <span
      className="wordmark"
      onMouseEnter={() => setSpread(true)}
      onMouseLeave={() => setSpread(false)}
    >
      <motion.span
        aria-hidden="true"
        className="wordmark-layer wordmark-layer-r"
        initial={false}
        animate={{ x: -s, y: 0.5 }}
        transition={{ duration: 0.18, ease: EASE }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="wordmark-layer wordmark-layer-c"
        initial={false}
        animate={{ x: s, y: -0.5 }}
        transition={{ duration: 0.18, ease: EASE }}
      >
        {text}
      </motion.span>
      <span className="wordmark-text">{text}</span>
    </span>
  );
}
