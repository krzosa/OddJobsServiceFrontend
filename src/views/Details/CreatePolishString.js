export function CreatePolishString(text) {
  let polishString;

  //prace domowe
  if (text == "HOUSEWORK") polishString = "Prace domowe";

  //opieka nad zwierzętami
  if (text == "ANIMALSCARE") polishString = "Opieka nad zwierzętami";

  //umowa o pracę
  if (text == "EMPLOYMENT_CONTRACT") polishString = "Umowa o pracę";

  //umowa zlecenie
  if (text == "MANDATORY_CONTRACT") polishString = "Umowa zlecenie";

  //pełen etat
  if (text == "FULL_TIME") polishString = "Pełen etat";

  // 1/2 etatu
  if (text == "HALF_TIME") polishString = "1/2 etatu";

  return polishString;
}
