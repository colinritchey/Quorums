{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy"
    },
    errors: []
  },
  forms: {
    signUp: {},
    logIn: {},
    createQuestion: {},
    createAnswer: {},
    createComment: {}
  },
  questionIndex: {
    1: {
      title: "Sample?",
      body: "more detail about the question",
      user: {
        id: 1,
        username: "Bill"
      }
      tags: {
        1: {
          id: 1
          name: "Coding"
        }
      }
    }
  },
  questionDetail: {
    id: 1,
    title: "Sample?",
    body: "more detail about the question",
    author_id: 1,
    tags: {
      1: {
        id: 1
        name: "Coding"
      }
    },
    answers: {
      1: {
        author_id: 1,
        question_id: 1,
        body: "first answer is best answer"
      }
    },
    comments: {
      1: {
        author_id: 1,
        question_id: 1,
        body: "first!"
      }
    }
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of notes
}
