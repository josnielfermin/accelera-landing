import React from 'react'

interface TableHeaderCell {
  text: string
  className: string
  rangeClassName?: string
  sortBy?: string
  tooltip?: React.ReactNode
  widthTooltip?: string
}

export default TableHeaderCell
