import React from 'react'
import { SliderCellVariant } from '@/src/components/UI/Table/TableSkeleton/types'

interface SliderCellProps {
  variant: SliderCellVariant
}

const SliderCell = ({ variant }: SliderCellProps) => {
  return (
    <div className="flex justify-end w-fit items-center gap-3 animate-pulse">
      <div className="w-60 h-3 rounded-lg bg-shark-300"></div>
    </div>
  )
}
export default SliderCell
