import { TextCellVariant } from '@/components/UI/Table/TableSkeleton/types';
interface TextCellProps {
  variant: TextCellVariant;
}
const TextCell = ({ variant }: TextCellProps) => {
  return (
    <>
      {variant === 'DoubleText' && (
        <div className="flex flex-col items-end justify-center w-fit  animate-pulse">
          <div className="w-10 max-xxs:w-6 h-3 mb-1 rounded bg-[#222A25]"></div>
          <div className="w-24 max-xxs:w-14 h-3 rounded bg-[#222A25]"></div>
        </div>
      )}
      {variant === 'OnlyText' && (
        <div className="flex w-fit  animate-pulse">
          <div className="w-20 max-xxs:w-14 h-3 rounded bg-[#222A25]"></div>
        </div>
      )}
      {variant === 'WithInfo' && (
        <div className="flex items-center w-fit  gap-1 animate-pulse">
          <div className="w-10 h-3 rounded bg-[#222A25]"></div>
          <div className="w-3 h-3 rounded-full bg-[#222A25]"></div>
        </div>
      )}
      {variant === 'WithInfoLeft' && (
        <div className="flex items-center w-fit  gap-1 animate-pulse">
          <div className="w-4 h-4 rounded-full bg-[#222A25]"></div>
          <div className="w-10 max-xxs:w-7 h-3 rounded bg-[#222A25]"></div>
        </div>
      )}
    </>
  );
};
export default TextCell;
