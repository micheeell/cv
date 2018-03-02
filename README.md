# Résumé


## Facts ##
- version: 2018

## Description ##
- Github page for my online résumé.
- Updated once every year.
- Comments welcome.

## Author ##
[@micheeell](https://twitter.com/micheeell)

[@mayoul26](https://twitter.com/mayoul26)


## Usage ##

```bash
git clone git@github.com:micheeell/cv.git
cd cv/
```
Or more simply: `wget https://micheeell.github.io/files/resume-ayoul-2018.pdf`
**Note:** please update download url for another language.

## Contribution ##
Any contribution, comment or credit is highly appreciated. The best way to contribute code is to open a [pull request on Github](https://help.github.com/articles/using-pull-requests).


## Validators ##

### W3C Markup Validation Service ###

See [Online Validator](https://validator.w3.org/).

### W3C Css Validation Service ###

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


Licence
---
[OSL - Open Software Licence 3.0](http://opensource.org/licenses/osl-3.0.php)
