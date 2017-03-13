{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createQuestion: {errors: ["search can't be blank"]},
    createAnswer: {errors: ["body can't be blank"]},
    createComment: {errors: ["body can't be blank"]}
  },
  questions: {
    1: {
      title: "Sample?",
      body: "more detail about the question",
      author_id: 1,
      notebook_id: 1,
      tags: {
        1: {
          id: 1
          name: "Coding"
        }
      }
    }
  },
  answers: {
    1: {
      title: "first answer",
      author_id: 1,
      question_id: 1,
      description: "is best answer"
    }
  },
  comments: {
    1: {
      title: "first!",
      author_id: 1,
      question_id: 1,
      description: "is best comment"
    }
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of notes
}
