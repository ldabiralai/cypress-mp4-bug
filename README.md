#  Cypress mp4 bug

Cypress 9 installed by default. The page attempts to load an mp4 to autoplay which does not work when running the test in cypress 9.

### Cypress 9 (failing)

1. Run app `npm start`
2. `npx cypress run`
3. See failing test

### Cypress 8 (passes)

1. Run app `npm start`
2. `npm i --save-dev cypress@8`
3. `npx cypress run`
4. See passing test