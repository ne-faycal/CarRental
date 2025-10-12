import { createSlice,type PayloadAction  } from "@reduxjs/toolkit";
 

interface CarFormState {
    category: string;
    model: string;
    brand: string;
    Transmission: string;
    Fuel_Type: string;
    Location: string;
    Description: string | null;
    price: number | null;
    seats: number | null;
    year: number | null;
    image: string;
   
}   

const initialState: CarFormState = {
    category: '',
    model: '',
    brand: '',
    Transmission: '',   
    Fuel_Type: '',
    Location: '',
    Description: '',
    price: null,
    seats: null,
    year: null,
    image: '',

};  
 const carFormSlice = createSlice({
    name: 'carForm',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        } ,          
        setModel(state, action: PayloadAction<string>) {
            state.model = action.payload;
        },
        setBrand(state, action: PayloadAction<string>) {
            state.brand = action.payload;
        },
        setTransmission(state, action: PayloadAction<string>) {
            state.Transmission = action.payload;
        },
        setFuelType(state, action: PayloadAction<string>) {
            state.Fuel_Type = action.payload;
        },
        setLocation(state, action: PayloadAction<string>) {
            state.Location = action.payload;
        },
        setDescription(state, action: PayloadAction<string>) {
            state.Description = action.payload;
        } ,      
        setPrice(state, action: PayloadAction<number>) {          
            state.price = action.payload;
        },
        setSeats(state, action: PayloadAction<number>) {    
            state.seats = action.payload;
        },
        setYear(state, action: PayloadAction<number>) {
            state.year = action.payload;
        } ,      
        setImage(state, action: PayloadAction<string>) {
            state.image = action.payload;
        }  , 
        resetForm(state) {
            state.category = '';
            state.model = '';   
            state.brand = '';
            state.Transmission = '';
            state.Fuel_Type = '';
            state.Location = '';
            state.Description = '';
            state.price = null;
            state.seats = null;
            state.year = null;
            state.image = '';
        }
    },
});
export const {
    setCategory,
    setModel,   
    setBrand,
    setTransmission,
    setFuelType,
    setLocation,
    setDescription,
    setPrice,
    setSeats,
    setYear,
    setImage,
    resetForm,
} = carFormSlice.actions;

export default carFormSlice.reducer;