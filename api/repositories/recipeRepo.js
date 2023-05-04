import { v4 as uuidv4 } from 'uuid';

export default (Recipe) => {

    const recipes = [
        new Recipe(
          'a35ce12d-d52b-4a07-90ad-68e985b779e7',
          'Chausson aux pommes',
          'pommes, pate feuilletée, sucre',
          'faire compote, former chausson, cuire'
        ),
        new Recipe(
          'dc466424-4297-481a-a8de-aa0898852da1',
          'Quiche thon tomate',
          'thon, tomate, pate feuilletée, oeuf, creme',
          'couper thon, tomates, mélanger creme et oeufs, mettre dans moule, cuire'
        )
      ];

      const listRecipes = () => {
        return recipes;
      }

      const createRecipe = (recipeData) => {
         const recipe = new Recipe(uuidv4(), recipeData.name, recipeData.ingredients, recipeData.procedure)

         recipes.push(recipe);
         return recipe;
        }

        const updateRecipe = (id, recipeData) => {
            const findIndexRecipe = recipes.findIndex((recipe) => recipe.id === id);
            if (findIndexRecipe === -1) {
                return null;
            }
            const updatedRecipe = new Recipe(id, recipeData.name, recipeData.ingredients, recipeData.procedure);
            recipes[findIndexRecipe] = updatedRecipe;
            return updatedRecipe;
        }

        const deleteRecipe = (id) => {
            const findIndexRecipe = recipes.findIndex((recipe) => recipe.id === id);
            if (findIndexRecipe === -1) {
                return null;
            }
            const deletedRecipe = recipes[findIndexRecipe];
            recipes.splice(findIndexRecipe, 1);
            return deletedRecipe;
        }

      return {
        listRecipes,
        createRecipe,
        updateRecipe,
        deleteRecipe
      }
}