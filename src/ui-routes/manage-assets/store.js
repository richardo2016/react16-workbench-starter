import { generateStoreManager } from "@/react-helpers/store";

const { StateContext, StateProvider, useCtxState } = generateStoreManager();

const START_PAGE_NUM = 1;
const noOp = () => undefined

const forceInteger = (input, defaultValue = 10) => {
  const formattedValue = parseInt(input, 10)

  // eslint-disable-next-line
  if (isNaN(formattedValue))
    return defaultValue

  return formattedValue
}

const initialState = {
  list: [],
  listCountKey: 0,
  /**
   * pointless now
   */
  pagination: {
    page: START_PAGE_NUM,
    pageSize: 100,
    total: 0,
  },

  filters: {
  },

  /**
   * @mix null | [NEW_MATERIAL_INFO] | [MATERIAL_INFO]
   */
  editingAttributeItem: null,
  editingAttributeValue: null,
  editingAttributeValueNextTick: noOp,
  // just for test [NEW_MATERIAL_INFO]
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const computer = {};

export { StateContext, StateProvider, useCtxState, initialState, reducer, computer };
