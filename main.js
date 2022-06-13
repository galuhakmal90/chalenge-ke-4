class game {
  constructor() {
    this.controlBatuPemain = document.querySelector(
      "#game-control .gambar-batu"
    );

    this.controlKertasPemain = document.querySelector(
      "#game-control .gambar-kertas"
    );

    this.controlGuntingPemain = document.querySelector(
      "#game-control .gambar-gunting"
    );

    this.controlBatuBot = document.querySelector(
      "#game-control .gambar-batu-bot"
    );

    this.controlKertastBot = document.querySelector(
      "#game-control .gambar-kertas-bot"
    );

    this.controlGuntingBot = document.querySelector(
      "#game-control .gambar-gunting-bot"
    );

    this.controlBatuMenang = document.querySelector(
      "#game-control .gambar-batu-com-re"
    );

    this.controlKertasuMenang = document.querySelector(
      "#game-control .gambar-kertas-com-re"
    );

    this.controlGuntingMenang = document.querySelector(
      "#game-control .gambar-gunting-com-re"
    );

    this.controlVs = document.querySelector("#game-control .match")

    this.controlBatuPemain.addEventListener("click", () => {
      this.controlVs.style.display = "none";
      this.pilihBatu();
    });

    this.controlKertasPemain.addEventListener("click", () => {
      this.controlVs.style.display = "none";
      this.pilihKertas();
    });

    this.controlGuntingPemain.addEventListener("click", () => {
      this.controlVs.style.display = "none";
      this.pilihGunting();
    });

  }

  pilihBatu() {
    const pilih = ["kertas", "batu", "gunting"];
    const bot = Math.floor(Math.random() * 3);
    const hasil = pilih[bot];
    const batu = "batu";
    const tampilHasil = document.querySelector(".style-win");

    if (hasil === "gunting" && batu ==="batu") {
      tampilHasil.textContent = "kamu menang";
      this.controlKertasuMenang.style.background = "none";
      this.controlBatuMenang.style.background = "none";
      this.controlGuntingMenang.style.background = null;
    } else if(hasil === "batu"&& batu ==="batu") {
      tampilHasil.textContent = "imbang";
      this.controlKertasuMenang.style.background = "none";
      this.controlGuntingMenang.style.background = "none";
      this.controlBatuMenang.style.background = null;
    } else if(hasil && batu === "batu") {
      tampilHasil.textContent = "kamu kalah";
      this.controlBatuuMenang.style.background = "none";
      this.controlGuntingMenang.style.background = "none";
      this.controlKertasMenang.style.background = null;
    }
  }

  pilihKertas() {
    const pilih = ["kertas", "batu", "gunting"];
    const bot = Math.floor(Math.random() * 3);
    const hasil = pilih[bot];
    const batu = "kertas";
    const tampilHasil = document.querySelector(".style-win");

    if (hasil === "gunting" && batu ==="kertas") {
      tampilHasil.textContent = "kamu kalah";
      this.controlKertasuMenang.style.background = "none";
      this.controlBatuMenang.style.background = "none";
      this.controlGuntingMenang.style.background = null;
    } else if(hasil === "kertas"&& batu ==="kertas") {
      tampilHasil.textContent = "imbang";
      this.controlKertasuMenang.style.background = null;
      this.controlGuntingMenang.style.background = "none";
      this.controlBatuMenang.style.background = "none";
    } else if(hasil && kertas === "kertas") {
      tampilHasil.textContent = "kamu menang";
      this.controlBatuuMenang.style.background = "none";
      this.controlGuntingMenang.style.background = "none";
      this.controlKertasMenang.style.background = null;
    }
  }

  pilihGunting() {
    const pilih = ["kertas", "batu", "gunting"];
    const bot = Math.floor(Math.random() * 3);
    const hasil = pilih[bot];
    const batu = "gunting";
    const tampilHasil = document.querySelector(".style-win");

    if (hasil === "gunting" && batu ==="batu") {
      tampilHasil.textContent = "kamu kalah";
      this.controlKertasuMenang.style.background = "none";
      this.controlGuntingMenang.style.background = "none";
      this.controlBatuMenang.style.background = null;
    } else if(hasil === "gunting"&& batu ==="gunting") {
      tampilHasil.textContent = "imbang";
      this.controlKertasuMenang.style.background = "none";
      this.controlBatuMenang.style.background = "none";
      this.controlGuntingMenang.style.background = null;
    } else if(hasil && batu === "batu") {
      tampilHasil.textContent = "kamu menang";
      this.controlBatuuMenang.style.background = "none";
      this.controlGuntingMenang.style.background = "none";
      this.controlKertasMenang.style.background = null;
    }
  }
}

this.controlBatuMenang = document.querySelector(
  "#game-control .gambar-batu-com-re"
);
this.controlKertasMenang = document.querySelector(
  "#game-control .gambar-kertas-com-re"
);
this.controlGuntingMenang = document.querySelector(
  "#game-control .gambar-gunting-com-re"
);

overlayButton.addEventListener("click", () => {
  overlay.style.display = "none";
  this.controlBatuMenang.style.background = "none";
  this.controlKertasMenang.style.background = "none";
  this.controlGuntingMenang.style.background = "none";
  new Game();
});
