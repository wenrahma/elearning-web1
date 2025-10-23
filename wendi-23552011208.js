document
  .getElementById("form-wendi-23552011208")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.noValidate = true;

    let valid = true;

    const nama = document.getElementById("nama-wendi-23552011208");
    const email = document.getElementById("email-wendi-23552011208");
    const nim = document.getElementById("nim-wendi-23552011208");
    const telp = document.getElementById("telp-wendi-23552011208");
    const univ = document.getElementById("univ-wendi-23552011208");
    const prodi = document.getElementById("prodi-wendi-23552011208");
    const setuju = document.getElementById("setuju-wendi-23552011208");

    document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

    function setError(id, message) {
      document.getElementById(id).textContent = message;
      valid = false;
    }

    const namaValue = nama.value.trim();
    if (namaValue === "") {
      setError("error-nama", "Nama lengkap harus diisi");
    }

    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      setError("error-email", "Email harus diisi");
    } else if (!emailPattern.test(emailValue)) {
      setError("error-email", "Format email harus sesuai");
    }

    const nimValue = nim.value.trim();
    if (nimValue === "") {
      setError("error-nim", "NIM harus diisi");
    } else if (isNaN(nimValue)) {
      setError(
        "error-nim",
        "Input harus berupa angka, bukan huruf atau simbol"
      );
    }

    const telpValue = telp.value.trim();
    if (telpValue === "") {
      setError("error-telp", "Nomor telepon harus diisi");
    } else if (isNaN(telpValue)) {
      setError(
        "error-telp",
        "Input harus berupa angka, bukan huruf atau simbol"
      );
    }

    if (univ.value === "") {
      setError("error-univ", "Universitas harus dipilih");
    }

    if (prodi.value === "") {
      setError("error-prodi", "Program Studi harus dipilih");
    }

    if (!setuju.checked) {
      setError("error-setuju", "Harap setujui syarat dan ketentuan.");
    }

    if (valid) {
      alert("Pendaftaran berhasil!");
      this.reset();
    }
  });
