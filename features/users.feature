Feature: Crud User

    Scenario: List Users
        When I list the "users"
        Then I should have response "OK"
         And following "users" data:
            | id | firstname | lastname | email | birthDate | phone | address |
            | e3b8b6e0-1b9a-11ec-9621-0242ac130002 | John | Doe | johndoe@outlook.fr | 1990-01-01 | 0123456789 | 1 rue de la Paix |
            | e3b8b6e0-1b9a-11ec-9621-0242ac130003 | Jane | Doe | janedoe@outlook.fr | 1990-01-01 | 0123456789 | 1 rue de la Paix |

            
    Scenario: Create User
        When I create a "user" with following data:
            | firstname | lastname | email | birthDate | phone | address |
            | Mike | Dolly | mike@outlook.fr | 1990-01-01 | 0123456789 | 4 rue de la Paix |
        Then I should have response "CREATED"
            And following new "user" data:
              | firstname | lastname | email | birthDate | phone | address |
              | Mike | Dolly | mike@outlook.fr | 1990-01-01 | 0123456789 | 4 rue de la Paix |

    Scenario: Create User but his phone number is not valid
        When I create a "user" with following data:
            | firstname | lastname | email | birthDate | phone | address |
            | Mike | Dolly | mike@outlook.fr | 1990-01-01 | 0123456780559 | 4 rue de la Paix |
        Then I should have response "BAD_REQUEST"
           

    Scenario: Update User
        When I update a "user" with following data:
            | id | firstname | lastname | email | birthDate | phone | address |
            | e3b8b6e0-1b9a-11ec-9621-0242ac130002 | John | Doe | johndoe@outlook.fr | 1990-01-01 | 0123456789 | 14 rue de la Paix |
        Then I should have response "OK"
            And following updated "user" data:
              | id | firstname | lastname | email | birthDate | phone | address |
              | e3b8b6e0-1b9a-11ec-9621-0242ac130002 | John | Doe | johndoe@outlook.fr | 1990-01-01 | 0123456789 | 14 rue de la Paix |
    
    Scenario: Delete User
        When I delete a "user" with following data:
        |id|
        |e3b8b6e0-1b9a-11ec-9621-0242ac130002|
        Then I should have response "OK"
            And following deleted "user" data:
              | id | firstname | lastname | email | birthDate | phone | address |
              | e3b8b6e0-1b9a-11ec-9621-0242ac130002 | John | Doe | johndoe@outlook.fr | 1990-01-01 | 0123456789 | 14 rue de la Paix |