export type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number,
}
type CartStateType = { cart: CartItemType[] }
const initCartState: CartStateType = { cart: [] }
const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: CartItemType,
}
const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error('action.playload missing in ADD')
            }
            const { sku, name, price } = action.payload

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

            const qty: number = itemExists ? itemExists.qty + 1 : 1

            return { ...state, cart: [...filteredCart, { sku, name, price, qty }] }
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error('action.playload missing in REMOVE')
            }
            const { sku } = action.payload

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            return { ...state, cart: [...filteredCart] }
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] }

        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error('action.playload missing in QUANTITY')
            }
            const { sku, qty } = action.payload

            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

            if (!itemExists)
                throw new Error('Item must exist in order to update quantity')

            const updateItem: CartItemType = { ...itemExists, qty }

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            return { ...state, cart:[...filteredCart,updateItem]}
        }
        default:
            throw new Error('Unidentified reducer action type')
    }
}