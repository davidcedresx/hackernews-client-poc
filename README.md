# hackernews-client-poc

This was a code challenge where I tried to prove my fullstack skills and my Javascript knowledge.

The challenge was to create a small backend and frontend for a simple article reader web app, that goes like this:

The backend was fairly small, it supported two operations:

- Fetching articles every hour from a third party API and storing them in a mongoDB collection.

- Serving the articles stored in the database through an endpoint the frontend could consume.

The frontend was even smaller, just a single view where I could show the article list, where you could click on them and get redirected to the original post on hackernews site.

## What I learned

- NestJS, which I found totally awesome, the fact that it comes with typescript out of the box was great, plus the benefit of generators via CLI in the same fashion as Ruby on Rails.

- Setup docker-compose with multi-stage dockerfiles, I found this tricky and useful, as one can specify in Dockerfiles the steps to build for production and then hijack commands and instruct compose to just run a given stage, this kept away the necesity to create a Dockerfile.dev where the build process was different
