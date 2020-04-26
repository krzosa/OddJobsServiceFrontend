# Bootstrap
* Starac sie nie pisac za duzo css, jak juz trzeba cos wycentrowac to flexbox(display: flex) to wasz najlepszy przyjaciel.
* Staracie sie uzywac tylko tych kolorkow(tzn. bootstrapowe kolory, nic sami w css-sie nie kolorujcie):

        primary
        secondary
        info
        light
        dark

* Gotowiec to przyjaciel, kopiuj wklej to król. W dokumentacji Bootstrapa jest MASA gotowych elementów żeby skopiowac/troche przerobic. Nie przesadzajcie ofc. czasem prosciej jest samemu niz z gotowcem.

# React
* Podział: 1. Widoki(views) np. stronka główna, spis ofert. 2. Componenty pojedyncza oferta, navbar, footer.
* Potem się to jeszcze bardziej podzieli narazie nie ma co komplikowac.
* Starajcie się rozbierać widoki na mniejsze componenty które mozna uzywac po kilka razy. W miarach rozsadku ofc.

# Javascript
* Poczytajcie sobie o asynchronicznosci w Javascriptcie jeżeli nie mieliscie z tym stycznosci!!!!
* Ja bym osobiście preferował składnię async await kiedy robimy requesty do backendu tzn.
```Javascript
PIEKNY KOD, WSZYSTKO CZYTELNIE, PERFEKCJA
async function MEMESACTIVATED(){
    const url = "https://restcountries.eu/rest/v2/name/united"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

mysle ze z ta skladnia wielu z was moze miec problemy(jest ona powszechna w javascripcie)
function BIGMEMES(){
  fetch('https://restcountries.eu/rest/v2/name/united')
  .then(response => response.json())
  .then(data => {
      console.log(data)
    });
}
```