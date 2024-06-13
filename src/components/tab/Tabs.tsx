import { Tab } from '../../types/Tab';
import './Tabs.css';
import { motion } from 'framer-motion';

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  onTabClick: (index: number) => void;
}

const circleVariants = {
  initial: { strokeDashoffset: 100 },
  animate: { strokeDashoffset: 0 },
};

const Tabs = ({ tabs, activeTab, onTabClick }: TabsProps) => (
  <div className="tabs" role="tablist">
    {tabs.map((tab, index) => (
      <div
        key={tab.label}
        role="tab"
        className={`tab ${activeTab === index ? 'active' : ''}`}
        onClick={() => onTabClick(index)}
        onKeyDown={() => onTabClick(index)}
        tabIndex={activeTab === index ? 0 : -1}
        aria-selected={activeTab === index}
        aria-controls={`tabpanel-${index}`}
        id={`tab-${index}`}
      >
        <div className="circle-container">
          <svg className="circle-svg" viewBox="0 0 36 36">
            <path
              className="circle-bg"
              fill="none"
              stroke="#ccc"
              strokeWidth="2"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="circle"
              fill="none"
              strokeWidth="2"
              stroke="#0070f3"
              strokeDasharray="100"
              strokeDashoffset="100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              variants={circleVariants}
              initial="initial"
              animate={activeTab === index ? 'animate' : 'initial'}
              transition={{ duration: 0.5 }}
            />
          </svg>
          {tab.icon && (
            <tab.icon
              className={`icon ${activeTab === index ? 'active' : ''}`}
            />
          )}
        </div>
        {tab.label}
      </div>
    ))}
  </div>
);

export default Tabs;
