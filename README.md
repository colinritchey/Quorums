# Quorums
------

[Quorums](https://quorums.herokuapp.com)

Quorums is a question an answer site that allows users to ask, answer and comments questions.

## Technologies

The app is using PostgresSQL for the database, Ruby on Rails for the backend, and  React on the frontend.

## Features

### Answer/Comment Creation

Questions have many answers and comments, but users can only create and edit one answer. On the backend, questions receives all of their answers and comments associated with them and renders the results as json through jbuilder.

On the frontend a question will display all the comments/answers but will be able to tell if the current user owns said answer/comment. Edit and delete buttons will only appear if the user owns the post. Meaning you can always edit your answers or comments, but can't edit others.

![question-show](wireframes/question-show.png)

Backend comment creation:

```Ruby
def create
  @comment = current_user.comments.new(comments_params)
  if @comment.save
    render :show
  else
    render json: @comment.errors.full_messages, status: 422
  end
end
```
This will automatically make the user association instead of manually adding the `user_id` after a new comment object.

```Ruby
def update
  @comment = current_user.comments.find(params[:id])

  if @comment.update(comments_params)
    render :show
  else
    render json: @comment.errors.full_messages, status: 422
  end
end
```

Comment are fetched from the user's pool of comments.

On the frontend the authorized buttons (edit and delete) only appear if the currently logged in user owns this particular comment:

```javascript
const CommentIndexItem = ({comment, currentUser, authorizedButttons}) => {
  return(
    <li className="comment-index-item">

      <div>
        <i className="fa fa-user" aria-hidden="true"></i>

        {comment.user.username}

        <span className="comment-inline-buttons">
          {authorizedButttons(comment, currentUser)}</span>

      </div>

      <p>{comment.body}</p>
    </li>
  );

};
```

### Tag Filtering

Questions are able to be tagged with topics chosen by the asker, each user has their own subscriptions they can personalize and allows them to filter out the questions that they might not be interested in.

```javascript
handleSubmit(e){
  e.preventDefault();
  this.props.updateFilter('searchByTagId', e.target.value);
}
```

Filtering fetches the index of questions with a new parameter from the state's filter.

```javascript
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return dispatch(fetchQuestions(getState().filters));
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
```

The function `changeFilter` is telling the Filter Reducer to change the field `searchByTagId` to the value that's being passed. (It's import to refresh the filter every time you are about to update within the filter reducer since other filters might override the most recent one.)

'updateFilter' takes in the filter name and value and calls changeFilter, then returns a promise 'fetchQuestions' with the state's filter parameter. This will repopulate the questions index with the returned questions instead of the default fetch.

![questions-index](wireframes/question-index.png)

### Future Direction for Quorums

##### Comments for Answers
Allow users to comment on answers and alter the display of a question's comments so it's more clear what are answers and what are comments.

##### Comment nesting for Questions
Comments will have parent comments, which will allow comment nesting.

##### Up/Down Vote answers
Users will be able to vote for answers they deemed most useful and the collection of answers will display the most useful answers to the top.

##### Personalize User accounts
User's will be able to create their own profile image and fetch questions based on their own subscriptions when they reach the home page.
