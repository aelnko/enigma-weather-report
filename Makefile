lint:
	npx stylelint ./frontend/src/styles/**/*.scss
	npx htmlhint ./frontend/src/components/**/*.html
	npx eslint .