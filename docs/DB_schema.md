users
-------------
| column names        | data type           | details  |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key |
| username     | string      | not null, indexed, unique |
| password_digest | string      |    not null |
| session_token | string      |    not null, indexed, unique |

questions
-------------
| column names        | data type           | details  |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key |
| user_id      | integer | not null, foreign key |
| title | string      |    not null |
| body | text      |    not null |

comments
-------------
| column names        | data type           | details  |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key |
| user_id      | integer | not null, foreign key |
| question_id      | integer | not null, foreign key |
| body | text      |    not null |

answers
-------------
| column names        | data type           | details  |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key |
| user_id      | integer | not null, foreign key |
| question_id      | integer | not null, foreign key |
| body | text      |    not null |

tags
-------------
| column names        | data type           | details  |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key |
| name | string      |    not null |

taggings
-------------
| column names        | data type           | details  |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key |
| question_id | integer      | not null, foreign key (references notes), indexed, unique [tag_id] |
| tag_id | integer      | not null, foreign key (references tags), indexed |

subscriptions
-------------
| column names        | data type           | details  |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key |
| user_id | integer      | not null, foreign key (references notes), indexed, unique [tag_id] |
| tag_id | integer      | not null, foreign key (references tags), indexed |
