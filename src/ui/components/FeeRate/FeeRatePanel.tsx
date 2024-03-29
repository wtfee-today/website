import * as dateFns from 'date-fns';
import FeeRateCard from './FeeRateCard';
import { useAppContext } from '../../../context/AppContext';
import CustomFeeRateCard from './CustomFeeRateCard';

export default function FeeRatePanel() {
  const {
    state: { feeStats, feesLastFetchedAt },
  } = useAppContext();

  return (
    <div className="flex flex-col my-4">
      {feeStats ? (
        <>
          <div className="flex md:flex-row flex-col">
            <FeeRateCard
              title="Median for next block 🥵🏃"
              level="high"
              feeRateCode={'medianNextBlock'}
            />
            <FeeRateCard
              title="Minimum for next block 😯🚶"
              level="medium"
              feeRateCode={'minimumNextBlock'}
            />
            <FeeRateCard
              title="Next hour ☕🧉"
              level="low"
              feeRateCode={'hour'}
            />
            <CustomFeeRateCard />
          </div>
          {feesLastFetchedAt && (
            <small className="text-center text-slate-500">
              {`(last updated ${dateFns.formatDistance(feesLastFetchedAt, new Date())} ago)`}
            </small>
          )}
        </>
      ) : (
        <div className="text-center p-6 border rounded shadow w-full bg-slate-0">
          (No fees rates obtained)
        </div>
      )}
    </div>
  );
}
