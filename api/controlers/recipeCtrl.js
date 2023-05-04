
export default (recipeRepo) => {
    
        const listRecipes = (_, res) => {
            res.send({
                data: recipeRepo.listRecipes()
            })
        }

        const createRecipe = (req, res) => {
            const recipe = recipeRepo.createRecipe(req.body);
            res.status(201).send({
                data: recipe
            })
        }

        const updateRecipe = (req, res) => {
            const id = req.params.id;
            const recipe = recipeRepo.updateRecipe(id, req.body);
           
            if (recipe === null) {
                return res.status(404).send();
            } 
            return res.status(200).send({
                data: recipe
            })
        }

        const deleteRecipe = (req, res) => {
            const id = req.params.id;
            const recipe = recipeRepo.deleteRecipe(id);

            if (recipe === null) {
                return res.status(404).send();
            }
            return res.status(200).send({
                metadata: recipe
            })
        }

        return {
            listRecipes,
            createRecipe,
            updateRecipe,
            deleteRecipe
        }
}