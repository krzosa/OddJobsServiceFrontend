run all test: npm test
run one test: npm test test\*.js
    example:  npm test test\registracia.js
run one test case: .\node_modules\.bin\mocha -g "Test Description" test\*.js
    example: .\node_modules\.bin\mocha -g "Check error empti input" test\registracia.js