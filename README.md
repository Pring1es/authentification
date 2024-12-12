BACK-END

1. Créer les essentiels, c'à-d l'API avec index.js, router.js, 
2. Créer les éléments nécessaires à la connexion de la base de données : dotenv, database.js
3. Créer base données avec les users db.sql
    3a. ID, email, mot de passe, nom, prénom, numéro de téléphone, date de naissance

1. Tout vérifier qu'on peut lire tout les utilisateurs créer dans la base données.
    1a. userController.js pour récupérer la requête et userModel.js pour faire la demande à la base de données de récupérer tous les users. Avec un .GET

Ajouter un compte utilisateur

2. Créer un USER avec .post
    2a. Il faudra que le user ai mis un email valide qui respecte les conditions de notre middleware.
    2b. Qu'il ait rentré toutes ces informations : email, mot de passe, nom, prénom, numéro de téléphone, date de naissance
    2c. Il faudra que le mot de passe soit haché avec un middleware.

Vérification

FRONT-END

1. Créer formulaire de création de compte
2. Lier avec nos requêtes.


BACK-END

Connection 
1. User à un mail valide (réutiliser le middleware validateEmail);
2. Email corresponde à un email existant.
3. Que le mot de passe hashed corresponde à l'email et au hashed password de la base de données


FRONT-END

1. Page de connexion avec un formulaire : email et mot de passe.



BACK-END
Token qui permet que l'utilisateur accéder à tout le site sans avoir besoin de se reconnecter à chaque fois

1. Avec jwt, jsonwebtoken






