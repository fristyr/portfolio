## Global dependencies
You must have installed: `node`, `npm`, `gulp`.

##How to work with this project

1. `git clone https://github.com/WebHeroSchool/Alde_npm.git app`
2. `cd app`
3. `npm i`
4. `gulp` 
... or
`NODE_ENV=production gulp`
(for production version)

---

## Project structure

* `prod/` build directory 
* `src/` 
    - `css/`
      - `style.css` entry-point styles (template)
    - `fonts/`
    - `images/` files using template (svg, png)
    - `scripts/`
      - `index.js` entry-point scripts (template)
    - `templates/`
      - `index.hbs` entry-point (template)
* `eslintrc.json` eslint rules
* `stylelintrc.json` stylilint rules