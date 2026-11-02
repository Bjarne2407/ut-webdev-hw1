# PostIt

Homework 1 and 2 for Web Application Development (LTAT.05.004) at the
University of Tartu, fall 2026.

PostIt is a small made-up social feed. Nothing gets saved, and the buttons
just take you back to the feed.

Live site: <https://bjarne2407.github.io/ut-webdev-hw1/>

## Branches

- `main` is Homework 1. It's only HTML and CSS, and the posts are written
  straight into `index.html`.
- `homework2/feat/dynamic-posts` is Homework 2. The live site is built from
  this branch.

## Homework 2

In HW1 the posts were hard-coded in the HTML. For HW2 they come f
file, and `script.js` builds every post with JavaScript.

- **Posts as JSON.** `db/post_db.json` has 10 posts. Each one has an author,
  a creation time (as a timestamp), a text and optionally a photo
  the file with an online JSON validator.
- **Online and local.** The same JSON is also hosted online at
  <https://www.jsonkeeper.com/b/VCWJX>. The fetch for that URL is still in
  `script.js`, but commented out. The page now loads the local fi
- **Photos.** JSON can only hold text, so the photos are stored as base64
  strings. A base64 string can go straight into the `src` of an i
  posts don't need separate image files.
- **Profile dropdown.** Clicking the avatar in the top right open
  menu with the user's name, email and a logout link. Clicking it again
  closes it.
- **Styling.** We restyled all three pages: white cards on a light grey
  background, one blue accent colour and the same buttons everywh

## Pages

- `index.html` is the feed. It has the nav bar with the avatar dr
  posts from the JSON and a footer.
- `addPost.html` is the form for a new post, with a text area and
  picker. It shows an error if you try to post without any text.
- `login.html` is the login page. It checks that the email looks
  that the password has 8 to 16 characters without spaces.

The layout uses Flexbox, so it also works on a phone. You can check that with
the device toolbar in the browser dev tools.

## Running it locally

There's no build step, but you can't just open `index.html` any m
Browsers block `fetch` for files opened directly from disk, so the posts
wouldn't load. Start a small local server in the project folder i

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. The Live Server extension in V
too.