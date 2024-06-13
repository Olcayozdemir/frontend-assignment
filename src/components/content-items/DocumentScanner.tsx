import { motion } from 'framer-motion';
import './TabContent.css';

const DocumentScanner = () => (
  <div className="tab-container">
    <motion.div
      className="tab-images"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/assets/DocumentScanner.png" alt="Document Scanner" />
    </motion.div>

    <div className="tab-content">
      <h2 className="section-title">Document Scanner</h2>
      <p className="main-title">Scan with Ease</p>
      <p className="description">
        Scan any document instantly with your mobile device by just a few steps.
        Save as PDF,JPG,ZIP,TXT and Word format.
      </p>
      <a href="/document-scanner" className="learn-more-button">
        Learn More
      </a>
    </div>
  </div>
);

export default DocumentScanner;
