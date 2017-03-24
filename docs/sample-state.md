{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy"
    },
    errors: []
  },
  questions: {
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
    tag_ids: [1, 3, 4]
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
  },
  filter: {
    searchByTitle: "Quorums",
    searchByTagId:  null
  },
  tags: {
    1: {
      id: 1,
      name: "Science"
    }
  }
}
