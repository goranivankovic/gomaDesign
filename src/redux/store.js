import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './changeLanguage.js'

export default configureStore({
  reducer: {
    lang: counterReducer
  }
})