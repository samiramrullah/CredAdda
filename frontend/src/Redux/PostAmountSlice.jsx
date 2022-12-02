import { createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDEL: 'idel',
    LOADING: 'loading',
    ERROR: 'error',
})
const postAmountSlice = createSlice({
    name: 'post',
    initialState: {
        data: [],
        convertStatus: STATUSES.IDEL,
    },
    reducers: {
        SetConvert(state, action) {
            state.data = action.payload;
        },
        setConvertStatus(state, action) {
            state.convertStatus = action.payload
        },
    },
});

export const { SetConvert, setConvertStatus } = postAmountSlice.actions;
export default postAmountSlice.reducer;

//thunk

export const convertAmount = (fromcurrency, tocurrency) => {
    console.log('====================================');
    console.log(fromcurrency,tocurrency);
    console.log('====================================');
    return async function convertAmountThunk(dispatch, getstate) {
        dispatch(setConvertStatus(STATUSES.LOADING));
        try {
            var myHeaders = new Headers();
            myHeaders.append("apikey", "Ol0dOwtnieTW7sR2IiOyADrWSaENgxsN");

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };

            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${fromcurrency}&from=${tocurrency}&amount=5000`, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        } catch (error) {
            dispatch(setConvertStatus(STATUSES.ERROR))
        }
    }
}