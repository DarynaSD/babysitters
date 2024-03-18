import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import app from "../firebase/firebaseConfig"; 
import { getDatabase, ref, get } from "firebase/database"; 

export const fetchAllNannies = createAsyncThunk(
  'nannies/fetchAllNannies',
  async (_, thunkAPI) => {
    try {
       const db = getDatabase(app); 
 const dbRef = ref(db, "nannies"); 
      const snapshot = await get(dbRef); 
      const res = snapshot.val();
      const formattedData = res.map(one => ({ ...one, isLiked: false }))
      return formattedData;
      
      // const response = await axios.get(
      //   'https://65364b41c620ba9358ed4420.mockapi.io/adverts'
      // );

      // const formattedData = response.data.map(one => ({ ...one, isLiked: false }))
      // return formattedData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
