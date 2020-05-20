export function CreateUrl(city,housework,animalScare,gardencare){
    var url = '';
    var pom = [];

    //dodanie do tablicy miasta
    if(city.length > 0)
        pom.push("city=" + city);
    
    //dodanie do tablicy kategorii housework
    if(housework)
        pom.push("advertisementCategory=HOUSEWORK");

    //dodanie do tablicy kategorii animalScare
    if(animalScare)
        pom.push("advertisementCategory=ANIMALSCARE")

    //dodawanie do tablicy kategorii gardencare
    if(gardencare)
        pom.push("advertisementCategory=GARDENCARE")
    
    //Łączenie tablic w ostateczny URL
    if(pom.length > 1)
        url = pom.join("&");
    else
        url = pom.join();
    

    return url;
}