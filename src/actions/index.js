
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// export をすると他のコンポーネント側でimportできるようになる
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})
