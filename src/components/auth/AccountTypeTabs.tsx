import React from 'react';
import { Wallet, LineChart } from 'lucide-react';

interface AccountTypeTabsProps {
  selectedType: 'investor' | 'trader';
  onSelect: (type: 'investor' | 'trader') => void;
}

const AccountTypeTabs = ({ selectedType, onSelect }: AccountTypeTabsProps) => {
  return (
    <div className="flex rounded-md shadow-sm mb-6" role="group">
      <button
        type="button"
        className={`flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-l-lg border ${
          selectedType === 'investor'
            ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
        }`}
        onClick={() => onSelect('investor')}
      >
        <Wallet className="h-5 w-5 mr-2" />
        Investor Account
      </button>
      <button
        type="button"
        className={`flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-r-lg border-t border-r border-b ${
          selectedType === 'trader'
            ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
        }`}
        onClick={() => onSelect('trader')}
      >
        <LineChart className="h-5 w-5 mr-2" />
        Trader Account
      </button>
    </div>
  );
};

export default AccountTypeTabs;