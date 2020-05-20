export function CreateUrl(
  city,
  housework,
  animalScare,
  gardencare,
  halfTime,
  fullTime,
  employmentContract,
  mandatoryContract
) {
  var url = "";
  var pom = [];

  //dodanie do tablicy miasta
  if (city.length > 0) pom.push("city=" + city.toUpperCase());

  //dodanie do tablicy kategorii housework
  if (housework) pom.push("advertisementCategory=HOUSEWORK");

  //dodanie do tablicy kategorii animalScare
  if (animalScare) pom.push("advertisementCategory=ANIMALSCARE");

  //dodawanie do tablicy kategorii gardencare
  if (gardencare) pom.push("advertisementCategory=GARDENCARE");

  //dodawanie do tablicy czasu 1/2
  if (halfTime) pom.push("workingHours=HALF_TIME");

  //dodawanie do tablicy czasu 1/1
  if (fullTime) pom.push("workingHours=FULL_TIME");

  //dodawanie do tablicy rodzaju umowy o prace
  if (employmentContract) pom.push("contractType=EMPLOYMENT_CONTRACT");

  //dodawanie do tablicy rodzaju umowy zlecenie
  if (mandatoryContract) pom.push("contractType=MANDATORY_CONTRACT");

  //Łączenie tablic w ostateczny URL
  if (pom.length > 1) url = pom.join("&");
  else url = pom.join();

  return url;
}
