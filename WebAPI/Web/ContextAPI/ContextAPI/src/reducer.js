export const reducer = (state, action) => {
  
    switch (action.type) {
      case "CHANGE_AGE": {
        if (action.payload < 100) {
            return { ...state, age: action.payload }
        }
        else
        {
            console.error('Age should be less than or equal to 100')
        }
      }
   
      default: {
       return state
      }
    }
  }
  