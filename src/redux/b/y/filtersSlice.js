import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     status: "all",
//     // name: "",
//   },
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export const { setStatusFilter } = filtersSlice.actions;
// export default filtersSlice.reducer;

//     changeFilter: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { changeFilter } = filtersSlice.actions;
// export const selectNameFilter = (state) => state.filters.status;

// export default filtersSlice.reducer;
