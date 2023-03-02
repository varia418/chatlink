import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from '../features/messagesSlice'

export default configureStore({
  reducer: {
    message: messagesReducer
  },
})