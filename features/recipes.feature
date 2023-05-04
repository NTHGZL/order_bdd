Feature: Recipes Management
    Scenario: List Recipes
        When I list the "recipes"
        Then I should have response "OK"
         And following "recipes" data:
          | id | name | ingredients | procedure |
          | a35ce12d-d52b-4a07-90ad-68e985b779e7 | Chausson aux pommes | pommes, pate feuilletée, sucre             | faire compote, former chausson, cuire                                   |
          | dc466424-4297-481a-a8de-aa0898852da1 | Quiche thon tomate  | thon, tomate, pate feuilletée, oeuf, creme | couper thon, tomates, mélanger creme et oeufs, mettre dans moule, cuire |

    Scenario: Create a recipe 
        When I create a "recipe" with following data:
          | name | ingredients | procedure |
          | Chausson aux pommes | pommes, pate feuilletée, sucre    | faire compote, former chausson, cuire                                   |
        Then I should have response "CREATED"
         And following new "recipe" data:
         | name | ingredients | procedure |
         | Chausson aux pommes | pommes, pate feuilletée, sucre    | faire compote, former chausson, cuire  |
          
    Scenario: Update a recipe
        When I update a "recipe" with following data:
            | id | name | ingredients | procedure |
            | a35ce12d-d52b-4a07-90ad-68e985b779e7 | Chausson aux pommes v2 | pommes, pate feuilletée, sucre, beurre             | faire compote, former chausson, cuire |
        Then I should have response "OK"
         And following updated "recipe" data:
            | id | name | ingredients | procedure |
            | a35ce12d-d52b-4a07-90ad-68e985b779e7 | Chausson aux pommes v2 | pommes, pate feuilletée, sucre, beurre             | faire compote, former chausson, cuire                                   | 

    Scenario: Delete a recipe
        When I delete a "recipe" with following data:
        |id|
        | a35ce12d-d52b-4a07-90ad-68e985b779e7 |
        Then I should have response "OK"
         And following deleted "recipe" data:
            | id | name | ingredients | procedure |
            | a35ce12d-d52b-4a07-90ad-68e985b779e7 | Chausson aux pommes v2 | pommes, pate feuilletée, sucre, beurre             | faire compote, former chausson, cuire                                   | 