import { generateStoreManager } from "@/react-helpers/store";

const { attach, useCtxState } = generateStoreManager();

const START_PAGE_NUM = 1;
const noOp = () => undefined

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

const reducer: React.Reducer<typeof initialState, any> = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const computer = {};
export const connect = (Target: React.Component | React.FunctionComponent) => attach(Target, { state: initialState, reducer })

export { useCtxState, computer };
