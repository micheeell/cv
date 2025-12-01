Résumé
======

  + [Introduction](#introduction)
    + [Description](#description)
    + [Facts](#facts)
    + [Author](#author)
    + [to-do](#to-do)
  + [Usage](#usage)
  + [Contribution](#contribution)
  + [Validators](#validators)
    + [HTML Validator](#markup-validator)
    + [CSS Validator](#css-validator)
    + [Link Checker](#link-checker)
      + [checklink locally](#checklink-local)
      + [checklink usage](#checklink-usage)
  + [License](#license)

# Introduction

Welcome to the github repository for my résumé.

## Description ##

- Github page for my [online résumé](https://micheeell.github.io/cv/resume.html).
- Manually updated regularly.
- Comments welcome.

## Facts ##
<a name="facts"></a>
- version: [2018](https://github.com/micheeell/cv/tree/v2018)
- available languages:<br>
    - ![bandera argentina](./files/flag_ar.png) castellano,<br>
    - ![English flag](./files/flag_en.png) English,<br>
    - ![drapeau français](./files/flag_fr.png) français.
- PDF download

## Author ##

[@micheeell](https://twitter.com/micheeell)

[@mayoul26](https://twitter.com/mayoul26)

## to-do ##

- add contact form using [formspree.io](formspree.io)
- refactor styles & CSS files
- redraw icons with [svg](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)
- add portfolio / gallery
- add link to [polytechnique profile](https://ax.polytechnique.org/person/michael-ayoul/40834)


## Usage ##

```bash
git clone git@github.com:micheeell/cv.git
cd cv/
```
Or more simply: `wget https://micheeell.github.io/files/resume-ayoul-2020.pdf`<br>
**Note:** please update download url for another language.

## Contribution ##

Any contribution, comment or credit is highly appreciated. The best way to contribute code is to open a [pull request on Github](https://help.github.com/articles/using-pull-requests).


## Validators ##

### W3C Markup Validation Service ###

![Valid HTML](https://www.w3.org/Icons/WWW/w3c_home_nb.png)<br>
See [Online Validator](https://validator.w3.org/).

### W3C CSS Validation Service ###

![Valid CSS](https://www.w3.org/Icons/valid-css.png)<br>
See [Online Validator](http://jigsaw.w3.org/css-validator/validator).


### W3C Link Checker ###

See [Online validator](https://validator.w3.org/checklink) or follow instructions to install locally for debian-based linux systems.

#### Link Checker Local Installation ####

- From package repository:
```bash
sudo apt install w3c-linkchecker
```

- Manually:
```bash
wget http://search.cpan.org/CPAN/authors/id/S/SC/SCOP/W3C-LinkChecker-4.81.tar.gz
tar -xzf W3C-LinkChecker-4.81.tar.gz
cd W3C-LinkChecker-4.81/
perl Makefile.PL
make
make test
sudo make install
sudo apt install cpanminus
sudo perl -MCPAN -e 'install W3C::LinkChecker'
cpanm CSS::DOM
```

#### Link Checker usage ####

```bash
checklink resume.html
```


### License
[OSL - Open Software License 3.0](http://opensource.org/licenses/osl-3.0.php)


### Local setup v2

+ Requirements:
  1. node.js
  2. npm
  ```bash
  node -v # recommended 22 or above
  npm -v # recommended 11 or above
  ```
  3. packages
+ Install
  ```bash
  npm install playwright
  npx playwright install --with-deps
  ```
+ Build
  ```bash
  node src/scripts/build.mjs
  ```
+ Serve
  ```bash
  npx http-server docs
  ```

### Validators

```bash
npx stylelint "src/**/*.{css,scss}"
htmlhint docs/**/*.html
```
