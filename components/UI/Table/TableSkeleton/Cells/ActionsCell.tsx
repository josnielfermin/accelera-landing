import { ActionsCellVariant } from '@/src/components/UI/Table/TableSkeleton/types'
interface ActionsCellProps {
  variant: ActionsCellVariant
}
const ActionsCell = ({ variant }: ActionsCellProps) => {
  return (
    <>
      {variant === 'Single' && (
        <div className="flex justify-end items-center w-fit gap-3 animate-pulse ">
          <div className="w-20 h-8 rounded-lg bg-shark-300"></div>
        </div>
      )}
      {variant === 'Pair' && (
        <div className="flex justify-end items-center w-fit gap-1 animate-pulse ">
          <div className="w-20 h-8 rounded-lg bg-shark-300"></div>
          <div className="w-20 h-8 rounded-lg bg-shark-300"></div>
        </div>
      )}
    </>
  )
}
export default ActionsCell
