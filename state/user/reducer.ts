import { createReducer } from '@reduxjs/toolkit'
import { UserState } from './types'
import { resetUser, updateSlippageTolerance, setChart, setCloseBanner, setDashboardFilterSettings } from './actions'

export const initialState: UserState = {
  userDarkMode: true,
  slippageTolerance: 0.5,
  showChart: false,
  closeBanner: false,
  dashboardFilterSettings: 'All Positions',
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(resetUser, (state) => {
      state = initialState
    })

    .addCase(updateSlippageTolerance, (state, action) => {
      state.slippageTolerance = action.payload.slippageTolerance
    })

    .addCase(setChart, (state, action) => {
      state.showChart = action.payload
    })

    .addCase(setCloseBanner, (state) => {
      state.closeBanner = true
    })

    .addCase(setDashboardFilterSettings, (state, action) => {
      state.dashboardFilterSettings = action.payload
    })
})
