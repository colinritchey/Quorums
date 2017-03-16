# Component Hierarchy

### AuthFormContainer
  - AuthForm
  - HomeContainer

### HomeContainer
  - Navbar
  - Side Bar
  - Questions

### NavBar Container
  - NavBar Index Container
    - NavBar Index Item
      - AutoSearch Container

### Auto Search Container
  - AutoSearch Form Container
  - SearchResults Index Container
    - SearchResults Index Item

### Subscriptions Container
  - Subscriptions Header
  - Subscriptions Index Container
    - Subscriptions Index Item

### Questions Container
  - Questions Header
  - Questions Index Container
    - Questions Index Item

### Question Show Page
  - NavBar
  - Question Content

### Question Container
  - Question Tag Index
    - Question Tag Item
  - Question Header

### Answer Container
  - Answer index Container
    - Answer index Item

### Comment Container
  - Comment index Container
    - Comment index Item

### Search Results Page
  - NavBar
  - Sidebar
  - Results Content

### Result Options Container
  - Options Index Container
    - Options Index Item

### Results Container
  - Results Index Container
    - Results index item

| Path        | Component         |
| ------------- |:-------------:|
| "/sign-up"  |	"AuthFormContainer" |
| "/sign-in"  |	"AuthFormContainer" |
| "/home"  |	"HomeContainer" |
| "/questions/:questionId" | "QuestionDetailContainer" |
| "/questions/:questionId/answers" | "AnswerIndexContainer" |
| "/questions/:questionId/comments" | "CommentIndexContainer" |
| "/questions/:questionId/answer-form" | "AnswerFormContainer" |
| "/questions/:questionId/comment-form" | "CommentFormContainer" |
| "/search-results" | "SearchResultsContainer" |
