import { TokenCellVariant } from '@/components/UI/Table/TableSkeleton/types';
interface TokenCellProps {
  variant: TokenCellVariant;
}
const TokenCell = ({ variant }: TokenCellProps) => {
  return (
    <>
      {variant === 'Single' && (
        <div className="flex items-center gap-2 animate-pulse w-fit ">
          <div className="flex items-center">
            <div className="rounded-full w-7 h-7 bg-[#222A25]"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-3 mb-2 rounded w-14 max-xxs:w-10 bg-[#222A25]"></div>
            <div className="flex">
              <div className="w-32 max-xxs:w-20 h-3 rounded bg-[#222A25]"></div>
            </div>
          </div>
        </div>
      )}

      {variant === 'Pair' && (
        <div className="flex items-center gap-2 animate-pulse w-fit ">
          <div className="flex items-center">
            <div className="rounded-full w-7 h-7 bg-[#222A25]"></div>
            <div className="-ml-2 rounded-full w-7 h-7 bg-[#222A25]"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-3 mb-2 rounded w-14 bg-[#222A25]"></div>
            <div className="flex">
              <div className="w-40 h-3 rounded bg-[#222A25]"></div>
            </div>
          </div>
        </div>
      )}

      {variant === 'SingleSquare' && (
        <div className="flex items-center gap-2 animate-pulse w-fit ">
          <div className="flex items-center">
            <div className="rounded-sm w-11 h-11 bg-[#222A25]"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-3 mb-2 rounded w-14 bg-[#222A25]"></div>
            <div className="flex">
              <div className="w-32 h-3 rounded bg-[#222A25]"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TokenCell;
