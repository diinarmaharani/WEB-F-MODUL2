function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  if (name === "" || email === "" || address === "") {
    alert("Anda Harus Mengisi Data Dengan Lengkap.");
    return;
  }

  // Validasi Nama (minimal 3 karakter)
  if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Nama harus memiliki minimal 3 karakter";
    return;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validasi Email (gunakan ekspresi reguler sederhana)
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Email tidak valid";
    return;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validasi Alamat (minimal 5 karakter)
  if (address.length < 5) {
    document.getElementById("addressError").textContent =
      "Alamat harus memiliki minimal 5 karakter";
    return;
  } else {
    document.getElementById("addressError").textContent = "";
  }

  // Jika semua validasi berhasil
  alert("Pendaftaran sukses!");
  // Anda dapat menambahkan kode di sini untuk mengirim data ke server atau melakukan tindakan lain yang diperlukan.
}
