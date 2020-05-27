export function CreateUrl(
  city,
  advertisementCategory,
  workingHours,
  contractType
) {
  var url = "";
  var pom = [];
  let advertisementCategoryTable = ["HOUSEWORK", "ANIMALSCARE"];
  let workingHoursTable = ["HALF_TIME", "FULL_TIME"];
  let contractTypeTable = ["EMPLOYMENT_CONTRACT", "MANDATORY_CONTRACT"];

  if (city.length > 0) pom.push("city=" + city.toUpperCase());

  if (advertisementCategoryTable.includes(advertisementCategory))
    pom.push("advertisementCategory=" + advertisementCategory);

  if (workingHoursTable.includes(workingHours))
    pom.push("workingHours=" + workingHours);

  if (contractTypeTable.includes(contractType))
    pom.push("contractType=" + contractType);

  //Łączenie tablic w ostateczny URL
  if (pom.length > 1) url = pom.join("&");
  else url = pom.join();

  return url;
}
