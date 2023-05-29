function Calculo() {
  let cafecomum, bombom, cafe_chocolate, cafe_cupuacu, valor_total;

  cafecomum = parseFloat(document.getElementById("cafe").value);
  bombom = parseFloat(document.getElementById("bombom-cafe").value);
  cafe_chocolate = parseFloat(document.getElementById("cafe-chocolate").value);
  cafe_cupuacu = parseFloat(document.getElementById("cupuacu-cafe").value);

  if (isNaN(cafe_cupuacu)) {
    cafe_cupuacu = 0;
  }
  if (isNaN(bombom)) {
    bombom = 0;
  }
  if (isNaN(cafe_chocolate)) {
    cafe_chocolate = 0;
  }
  if (isNaN(cafecomum)) {
    cafecomum = 0;
  }

  valor_total =
    cafecomum * 13 + bombom * 23 + cafe_chocolate * 83 + cafe_cupuacu * 133;

  if (0 <= valor_total <= 500) {
    final = valor_total * 0.95;
    document.getElementById("final-pedido-calculo").innerHTML =
      "R$" + final.toFixed(2);
    document.getElementById("Desconto").innerHTML = "Ganhou 5% de desconto";
  }
  if (500.01 <= valor_total <= 1500) {
    final = valor_total * 0.85;
    document.getElementById("final-pedido-calculo").innerHTML =
      "R$" + final.toFixed(2);
    document.getElementById("Desconto").innerHTML = "Ganhou 15% de desconto";
  }
  if (1500 < valor_total) {
    final = valor_total * 0.8;
    document.getElementById("final-pedido-calculo").innerHTML =
      "R$" + final.toFixed(2);
    document.getElementById("Desconto").innerHTML = "Ganhou 20% de desconto";
  }
}
