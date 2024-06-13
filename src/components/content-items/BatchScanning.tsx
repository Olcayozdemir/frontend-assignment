import { motion } from 'framer-motion';
import './TabContent.css';
import { useMediaQuery } from 'react-responsive';

const BatchScanning = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const imageVariants = {
    initial: () => ({
      y: isMobile ? 130 : 180,
      opacity: 1,
    }),
    animate: (index: number) => ({
      y: isMobile ? index * 30 + 50 : index * 40 + 50,
      opacity: 1,
      transition: {
        delay: (index + 1) * 0.4,
        duration: 0.5,
      },
    }),
  };
  const images = [
    '/assets/FilePreview.png',
    '/assets/FilePreview.png',
    '/assets/FilePreview.png',
  ];
  return (
    <div className="tab-container">
      <div className="tab-images">
        <motion.img
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="/assets/BatchScanning.png"
          alt="Batch Scanning"
        />

        {images.map((src, index) => (
          <motion.img
            key={src}
            custom={index}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            src={src}
            alt={`Page ${index + 1}`}
            className="page"
          />
        ))}
      </div>
      <div className="tab-content">
        <h2 className="section-title">Batch Scanning</h2>
        <p className="main-title">Multiple Page Scan</p>
        <p className="description">
          Scan multiple pages or documents in multiple-scanning mode. Batch all
          scans as a single document.
        </p>
        <a href="/batch-scanning" className="learn-more-button">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default BatchScanning;
