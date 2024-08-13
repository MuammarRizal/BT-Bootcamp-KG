function sapaBangSaya({
  namaLengkap,
  judulBootcamp,
  tahun,
}: {
  namaLengkap: string;
  judulBootcamp: string;
  tahun: number;
}) {
  return `Halo kak nama saya ${namaLengkap},Selamat Datang di ${judulBootcamp}, di tahun ${tahun}`;
}

const sapa = {
  namaLengkap: "Muammar Rizal",
  judulBootcamp: "Belajar Typescript",
  tahun: 2024,
};

const jange = sapaBangSaya(sapa);

console.log(jange);
