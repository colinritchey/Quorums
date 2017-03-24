# Quorums
------

[Quorums](https://quorums.herokuapp.com)

Quorums is a question an answer site that allows users to ask, answer and comments questions.

### Technologies

The app is using PostgresSQL for the database, Ruby on Rails for the backend, and  React on the frontend.

### Answer/Comment Creation

Questions have many answers and comments, but users can only create and edit one answer. On the backend, questions receives all of their answers and comments associated with them and renders the results as a json through jbuilder. On the frontend a question will display a list of both their answers and comments. The user will have create, edit or delete buttons on answers or comments they own. Meaning you can always edit your answers or comments
