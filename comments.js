// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse JSON
app.use(bodyParser.json());

// Create comments
const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments[id];
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ error: 'Comment not found' });
    }
});

// Update a comment
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const newComment = req.body.comment;
    const comment = comments[id];
    if (comment) {
        comment.comment = newComment;
        res.status(200).json(comment);
    } else {
        res.status(404).json({ error: 'Comment not found' });
    }
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments[id];
    if (comment) {
        comments.splice(id, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Comment not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```

## 15. Express Router

```js
// Path: app.js
// Create web server
const express = require('express');
const bodyParser