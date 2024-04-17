import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  languageValue: "",
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage:(state, action) => {
      state.languageValue = action.payload;
    }
  },
})

export const { setLanguage } = languageSlice.actions

export const getLanguage = () => async (dispatch, getState) => {

  let cookieString = document.cookie;

  let cookieWords = cookieString.split(';');

  let nextLocaleValue = null;
  for (let i = 0; i < cookieWords.length; i++) {
    let pair = cookieWords[i].trim();
    if (pair.indexOf('NEXT_LOCALE=') === 0) {
      nextLocaleValue = pair.substring('NEXT_LOCALE='.length);
      break;
    }
  }
  await dispatch(setLanguage(nextLocaleValue))
  // let language = getState().language.languageValue;
  // console.log(language)
}



export default languageSlice.reducer