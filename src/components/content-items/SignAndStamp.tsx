import { motion } from 'framer-motion';
import './TabContent.css';
import { useMediaQuery } from 'react-responsive';

const SignAndStamp = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const signInitialPosition = isMobile
    ? { opacity: 0, scale: 0.5, x: -100, y: 50 }
    : { opacity: 0, scale: 0.5, x: -150, y: 50 };

  const completeInitialPosition = isMobile
    ? { opacity: 0, scale: 0.5, x: 100 }
    : { opacity: 0, scale: 0.5, x: 150 };

  return (
    <div className="tab-container">
      <div className="tab-images">
        <motion.img
          src="/assets/SignAndStamp.png"
          alt="Sign & Stamp"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src="/assets/sign.png"
          alt="sign"
          initial={signInitialPosition}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="animation-icon"
        />

        <motion.img
          src="/assets/complete.png"
          alt="complete"
          initial={completeInitialPosition}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="animation-icon"
        />
      </div>
      <div className="tab-content">
        <h2 className="section-title">Sign & Stamp</h2>
        <p className="main-title">One-Tap Focus</p>
        <p className="description">
          Draw, scan or import your signature and stamp with a simple touch.
          Sign and stamp any document with just a single tap!
        </p>
        <a href="/export-and-share" className="learn-more-button">
          Learn More
        </a>
      </div>
    </div>
  );
};
export default SignAndStamp;
