import { createSlice } from '@reduxjs/toolkit'

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    setMessages: (state, action) => {
      return action.payload;
    },
    addMessage: (state, action) => {
      return [...state, action.payload];
    }
  },
})

export const { setMessages, addMessage } = messagesSlice.actions

export default messagesSlice.reducer















// import { createSlice } from '@reduxjs/toolkit'

// export const messageSlice = createSlice({
//   name: 'message',
//   initialState: {
//     value: "",
//   },
//   reducers: {
//     setMessage: (state, action) => {
//       return action.payload;
//     },

//     clearMessage: (state) => {
//       return "";
//     }
//   },
// })

// export const { setMessage, clearMessage } = messageSlice.actions

// export default messageSlice.reducer