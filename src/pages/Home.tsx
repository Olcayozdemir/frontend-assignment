import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import DocumentScanner from '../components/content-items/DocumentScanner';
import SignAndStamp from '../components/content-items/SignAndStamp';
import BatchScanning from '../components/content-items/BatchScanning';
import AdvancedFilters from '../components/content-items/AdvancedFilters';
import ExportAndShare from '../components/content-items/ExportAndShare';
import DocumentScannerIcon from '../icons/DocumentScannerIcon';
import SignAndStampIcon from '../icons/SignAndStampIcon';
import AdvancedFilterIcon from '../icons/AdvancedFilterIcon';
import BatchScanningIcon from '../icons/BatchScanningIcon';
import ExportAndShareIcon from '../icons/ExportAndShareIcon';
import { Tab } from '../types/Tab';
import Tabs from '../components/tab/Tabs';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs: Tab[] = [
    { label: 'Document Scanner', icon: DocumentScannerIcon },
    { label: 'Sign & Stamp', icon: SignAndStampIcon },
    { label: 'Batch Scanning', icon: BatchScanningIcon },
    { label: 'Advanced Filters', icon: AdvancedFilterIcon },
    { label: 'Export & Share', icon: ExportAndShareIcon },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <DocumentScanner key="DocumentScanner" />;
      case 1:
        return <SignAndStamp key="SignAndStamp" />;
      case 2:
        return <BatchScanning key="BatchScanning" />;
      case 3:
        return <AdvancedFilters key="AdvancedFilters" />;
      case 4:
        return <ExportAndShare key="ExportAndShare" />;
      default:
        return null;
    }
  };

  return (
    <main>
      <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
    </main>
  );
};

export default HomePage;
