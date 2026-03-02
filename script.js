function calculate() {
  // Inputs
  const present = parseFloat(document.getElementById("present").value) || 0;
  const prev = parseFloat(document.getElementById("prev").value) || 0;
  const unitPrice = parseFloat(document.getElementById("unitPrice").value) || 0;
  const demand = parseFloat(document.getElementById("demand").value) || 0;
  const percent = parseFloat(document.getElementById("percent").value) || 0;

  // 1. Units Calculation
  const units = Math.max(0, present - prev);

  // 2. Energy Cost
  const energyCost = units * unitPrice;

  // 3. Subtotal (Energy Cost + Demand Charge)
  const subtotal = energyCost + demand;

  // 4. VAT Amount based on Subtotal
  const vatAmount = subtotal * (percent / 100);

  // 5. Grand Total (Subtotal + VAT) Rounded
  const grandTotal = Math.round(subtotal + vatAmount);

  // Update Display
  document.getElementById("units").innerText = units.toLocaleString();
  document.getElementById("energyCost").innerText =
    "৳ " + energyCost.toLocaleString(undefined, { minimumFractionDigits: 2 });
  document.getElementById("subtotal").innerText =
    "৳ " + subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 });
  document.getElementById("vatAmount").innerText =
    "৳ " + vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2 });
  document.getElementById("grandTotal").innerText =
    "৳ " + grandTotal.toLocaleString();
}
