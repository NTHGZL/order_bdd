Feature: CRUD Order

    Scenario: List Order
        When I list the "orders"
        Then I should have response "OK"
         And following "orders" data:
         | id | orderDate | recipeId | quantity | userId |
         | a4b8b6e0-1b9a-11ec-9621-0242ac130002 | 2023-04-25 | a35ce12d-d52b-4a07-90ad-68e985b779e7 | 1 | e3b8b6e0-1b9a-11ec-9621-0242ac130002 |
         | a4b8b6e0-1b9a-11ec-9621-0242ac130003 | 2023-04-27 | a35ce12d-d52b-4a07-90ad-68e985b779e7 | 1 | e3b8b6e0-1b9a-11ec-9621-0242ac130002 |

    Scenario: Create Order
        When I create a "order" with following data:
        | orderDate | recipeId | quantity | userId |
        | 2023-04-25 | a35ce12d-d52b-4a07-90ad-68e985b779e7 | 1 | e3b8b6e0-1b9a-11ec-9621-0242ac130002 |
        Then I should have response "CREATED"
         And following new "order" data:
         | orderDate | recipeId | quantity | userId |
         | 2023-04-25 | a35ce12d-d52b-4a07-90ad-68e985b779e7 | 1 | e3b8b6e0-1b9a-11ec-9621-0242ac130002 |

    Scenario: Create order but recipe not found
        When I create a "order" with following data:
        | orderDate | recipeId | quantity | userId |
        | 2023-04-25 | a35ce12d-d52b-4a07-90ad-68e985b779e8 | 1 | e3b8b6e0-1b9a-11ec-9621-0242ac130002 |
        Then I should have response "BAD_REQUEST"

    Scenario: Create order but user not found
        When I create a "order" with following data:
        | orderDate | recipeId | quantity | userId |
        | 2023-04-25 | none | 1 | e3b8b6e0-1b9a-11ec-9621-0242ac130003 |
        Then I should have response "BAD_REQUEST"

    Scenario: Create order but quantity is negative
        When I create a "order" with following data:
        | orderDate | recipeId | quantity | userId |
        | 2023-04-25 | a35ce12d-d52b-4a07-90ad-68e985b779e7 | -1 | e3b8b6e0-1b9a-11ec-9621-0242ac130002 |
        Then I should have response "BAD_REQUEST"

    Scenario: Create order but date is not in correct format
        When I create a "order" with following data:
        | orderDate | recipeId | quantity | userId |
        | 25-04-2023 | a35ce12d-d52b-4a07-90ad-68e985b779e7 | 1 | e3b8b6e0-1b9a-11ec-9621-0242ac130002 |
        Then I should have response "BAD_REQUEST"
