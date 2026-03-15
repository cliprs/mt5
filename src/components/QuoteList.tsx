import QuoteItem from './QuoteItem';
import { initialQuotes } from '../data/mockData';

const QuoteList: React.FC = () => {
  return (
    <div className="flex flex-col pb-20"> {/* pb-20 for bottom nav spacing */}
      {initialQuotes.map((quote) => (
        <QuoteItem key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default QuoteList;
