Aktualny stan stronki: http://94.130.72.113:3000

## Wymagania
    nodejs
    yarn

## Odpalamy
Żeby pobrać dependency(po zainstalowaniu yarna i nodejs)<br />

    yarn install

Żeby odpalić aplikację

    yarn start

Stronka odświeża się po byle jakiej edycji plików, errory mozna zobaczyc w konsoli:
[Localhost:3000](http://localhost:3000)

## Stack

    React
    Sass(do nadpisywania bootstrapa, jak nie chcecie korzystać to nie trzeba)
    Bootstrap
    coś jeszcze moze dojdzie...

## Struktura projektu

    /public/ - metadane, ikonka itd. pierdoły generalnie.
    /src/index.js - javascriptowy poczatek programu, main.
    /src/App.js - nie jestem pewny jeszcze, ale to bedzie nasz glowny plik w którym     bedziemy podmieniac widoki i componenty.
    /src/components/ - folder na komponenty reactowe.
    /src/views/ - folder z widokami tzn. stronki poszczególne typu strona główna.
    /src/glopalTheme.scss - plik nadpisujacy bootstrapa(potem trzeba zrobic refactor i usunac nie uzywane moduly bo aktualnie importujemy calego bootstrapa)
