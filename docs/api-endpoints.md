# API Endpoints

## HTML API

### Root

  - GET / - loads React web app JSON API

### Users

  - POST /api/users
  - PATCH /api/users

### Session

  - POST /api/session
  - DELETE /api/session

### Questions

  - GET /api/questions
  - POST /api/questions
  - GET /api/questions/:id
  - PATCH /api/questions/:id
  - DELETE /api/questions/:id

  - GET /api/questions/:id/comments
    - index of all comments for a question
  - GET /api/questions/:id/answers
    - index of all answers for a question
  - GET /api/questions/:id/tags
    - index of all tags for a question

### Answers

  - GET /api/answers
  - POST /api/answers
  - GET /api/answers/:id
  - PATCH /api/questions/:id
  - DELETE /api/answers/:id

### Comments

  - GET /api/comments
  - POST /api/comments
  - GET /api/comments/:id
  - PATCH /api/comments/:id
  - DELETE /api/comments/:id

### Tags

  - GET /api/questions/:question_id/tags

  - POST /api/questions/:question_id/tags: add tag to question by name

  - DELETE /api/questions/:question_id/tags/:tag_name: remove tag from question by name

  - GET /api/users/:user_id/tags

  - POST /api/users/:user_id/tags: add tag to user by name

  - DELETE /api/users/:user_id/tags/:tag_name: remove tag from user by name
