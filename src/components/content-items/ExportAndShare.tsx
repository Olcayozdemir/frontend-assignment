import { motion } from 'framer-motion';
import './TabContent.css';
import { useMediaQuery } from 'react-responsive';

const ExportAndShare = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const positions = isMobile
    ? [
        { x: -170, y: 120 },
        { x: -110, y: 80 },
        { x: -5, y: 40 },
        { x: 115, y: 80 },
      ]
    : [
        { x: -220, y: 150 },
        { x: -150, y: 100 },
        { x: -5, y: 60 },
        { x: 150, y: 100 },
      ];
  const fileIconVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (index: number) => {
      return {
        x: positions[index % positions.length].x,
        y: positions[index % positions.length].y,
        opacity: 1,
        transition: {
          delay: (index + 1) * 0.5,
          duration: 0.5,
        },
      };
    },
  };

  const fileIcons = [
    '/assets/Vector.png',
    '/assets/pdf.png',
    '/assets/jpg.png',
    '/assets/txt.png',
  ];

  return (
    <div className="tab-container">
      <div className="tab-images">
        <motion.img
          src="/assets/ExportAndShare.png"
          alt="Export & Share"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        {fileIcons.map((src, index) => (
          <motion.img
            key={src}
            className="file-icons"
            src={src}
            alt={`Export & Share ${index}`}
            custom={index}
            variants={fileIconVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </div>
      <div className="tab-content">
        <h2 className="section-title">Export & Share</h2>
        <p className="main-title">All-Round Conversion</p>
        <p className="description">
          Export your scans as PDF, JPG, ZIP, TXT and Word.
        </p>
        <a href="/export-and-share" className="learn-more-button">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ExportAndShare;
