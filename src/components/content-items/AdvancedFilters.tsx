import { motion } from 'framer-motion';
import './TabContent.css';

const AdvancedFilters = () => (
  <div className="tab-container">
    <div className="tab-images">
      <motion.img
        className="settings"
        src="/assets/light.png"
        alt="Advanced Filters"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.img
        src="/assets/AdvancedFilters.png"
        alt="Advanced Filters"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        className="settings"
        src="/assets/contrast.png"
        alt="Advanced Filters"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      />
    </div>

    <div className="tab-content">
      <h2 className="section-title">Advanced Filters</h2>
      <p className="main-title">Unique Filters</p>
      <p className="description">
        Apply advanced filters and enhance quality with various custom made
        filters. Manually edit brightness and contrast by your own choice on the
        custom filters.
      </p>
      <a href="/advanced-filters" className="learn-more-button">
        Learn More
      </a>
    </div>
  </div>
);

export default AdvancedFilters;
