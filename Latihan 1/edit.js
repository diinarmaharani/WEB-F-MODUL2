function jumlahkan() {
  var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
  var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

  if (isNaN(bilangan1) || isNaN(bilangan2)) {
    alert("Masukkan bilangan valid.");
    return;
  }

  var hasil = bilangan1 + bilangan2;

  alert("Hasil penjumlahan: " + hasil);
}

function resetForm() {
  document.getElementById("bilangan1").value = "";
  document.getElementById("bilangan2").value = "";
}

// Tambahkan kode untuk input otomatis
document
  .getElementById("bilangan1")
  .addEventListener("keydown", function (event) {
    if (event.key >= 0 && event.key <= 9) {
      // Biarkan hanya angka yang diizinkan
    } else {
      event.preventDefault();
    }
  });

document
  .getElementById("bilangan2")
  .addEventListener("keydown", function (event) {
    if (event.key >= 0 && event.key <= 9) {
      // Biarkan hanya angka yang diizinkan
    } else {
      event.preventDefault();
    }
  });
