export default function reducer (state, action) {
  switch (action.type) {
    case 'SEARCH_INGRIDIENTS':
      const input = action.payload

      function match (ingridients) {
        const results = []
        ingridients.forEach(ingridient => {
          if (input !== '' && ingridient.name.search(input) !== -1) {
            results.push(ingridient)
          }
        })

        return results
      }

      return {
        ...state,
        results: match(state.ingridients)
      }

    case 'ADD_INGRIDIENT_TO_RECIPE':
      console.log(state.recipe)
      let exists = state.recipe.find(ingridient => {
        return ingridient.id === action.payload.id
      })

      if (!exists) {
        return {
          ...state,
          results: state.results.filter(
            ingridient => ingridient.id !== action.payload.id
          ),
          recipe: [...state.recipe, action.payload],
          total_recipe_carbs: state.total_recipe_carbs + action.payload.carbs,
          total_recipe_protein:
            state.total_recipe_protein + action.payload.protein,
          total_recipe_sugar: state.total_recipe_sugar + action.payload.sugar,
          total_recipe_fat: state.total_recipe_fat + action.payload.fat,
          total_recipe_weight:
            state.total_recipe_weight + action.payload.weight_in_grams
        }
      } else {
        return { ...state, recipe_message: 'Ingridient already exists' }
      }

    case 'REMOVE_INGRIDIENT_FROM_RECIPE':
      return {
        ...state,
        recipe: state.recipe.filter(
          ingridient => ingridient.id !== action.payload.id
        ),
        results: [...state.results, action.payload],
        total_recipe_carbs: state.total_recipe_carbs - action.payload.carbs,
        total_recipe_protein:
          state.total_recipe_protein - action.payload.protein,
        total_recipe_sugar: state.total_recipe_sugar - action.payload.sugar,
        total_recipe_fat: state.total_recipe_fat - action.payload.fat,
        total_recipe_weight:
          state.total_recipe_weight - action.payload.weight_in_grams
      }
    default:
      return state
  }
}
