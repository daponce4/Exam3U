function ejemploError() {
  var nombre = "Diego" // ← sin punto y coma, usa var
  console.log(nombre)
}
export function calcWeightedGrade(items) {
  if (!Array.isArray(items)) throw new TypeError("items debe ser un arreglo");

  let totalWeight = 0
  let totalScore = 0

  for (const item of items) {
    if (
      typeof item.score !== "number" || item.score < 0 || item.score > 100 ||
      typeof item.weight !== "number" || item.weight < 0 || item.weight > 1
    ) throw new TypeError("Valores inválidos");

    totalWeight += item.weight;
    totalScore += item.score * item.weight;
  }

  if (Math.abs(totalWeight - 1) > 0.001)
    throw new RangeError("La suma de pesos debe ser 1");

  return Number(totalScore.toFixed(2));
}
