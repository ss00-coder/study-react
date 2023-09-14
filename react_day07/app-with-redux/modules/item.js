import { createAction, handleActions } from "redux-actions";

const ADD_OPTIONS = "item/ADD_OPTIONS";
const DELETE_OPTIONS = "item/DELETE_OPTIONS";
const SHOW_POPUP = "item/SHOW_POPUP";
const HIDE_POPUP = "item/HIDE_POPUP";
const HIDE_MODAL = "item/HIDE_MODAL";
const INCREASE_COUNT = "item/INCREASE_COUNT";
const DECREASE_COUNT = "item/DECREASE_COUNT";

export const addOptions = createAction(ADD_OPTIONS, (item) => item);
export const deleteOptions = createAction(DELETE_OPTIONS, (payload) => payload);
export const showPopUp = createAction(SHOW_POPUP);
export const hidePopUp = createAction(HIDE_POPUP);
export const hideModal = createAction(HIDE_MODAL);
export const increaseCount = createAction(INCREASE_COUNT);
export const decreaseCount = createAction(DECREASE_COUNT);

const initialState = {
  options: [],
  popUp: false,
  modal: false,
  total: 0,
  counts: [],
};

const item = handleActions(
  {
    [ADD_OPTIONS]: (state, action) => {
      const item = action.payload;

      if (state.options.filter(({ id }) => item.id === id).length !== 0) {
        return { ...state, modal: true };
      }
      return {
        ...state,
        total:
          state.total +
          parseInt(item.price.replaceAll(",", "").replaceAll("원", "")),
        counts: state.counts.concat(1),
        options: state.options.concat(item),
        popUp: false,
      };
    },
    [DELETE_OPTIONS]: (state, action) => {
      const { i, item } = action.payload;
      return {
        ...state,
        options: state.options.filter(({ id }) => id !== item.id),
        total:
          state.total -
          parseInt(item.price.replaceAll(",", "").replaceAll("원", "")) *
            state.counts[i],
        counts: state.counts.filter((count, index) => index !== i),
      };
    },
    [SHOW_POPUP]: (state, action) => ({ ...state, popUp: true }),
    [HIDE_POPUP]: (state, action) => ({ ...state, popUp: false }),
    [HIDE_MODAL]: (state, action) => ({ ...state, modal: false }),
    [INCREASE_COUNT]: (state, action) => {
      const { i, item } = action.payload;
      state.counts.splice(i, 1, state.counts[i] + 1);
      return {
        ...state,
        counts: state.counts.concat(),
        total:
          state.total +
          parseInt(item.price.replaceAll(",", "").replaceAll("원", "")),
      };
    },
    [DECREASE_COUNT]: (state, action) => {
      const { i, item } = action.payload;

      if(state.counts[i] < 2){
        return {...state};
      }

      state.counts.splice(i, 1, state.counts[i] - 1);
      return {
        ...state,
        counts: state.counts.concat(),
        total:
          state.total -
          parseInt(item.price.replaceAll(",", "").replaceAll("원", "")),
      };
    },
  },
  initialState
);

export default item;
