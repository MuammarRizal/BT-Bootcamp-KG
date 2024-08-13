const panggil = ({ nama, umur }: { nama: string; umur: number }): string => {
  return `Hallo nama saya ${nama} saya berumur ${umur}`;
};

let func = function () {};

const arrObj: {
  nama: string;
  umur: number;
  menikah?: boolean;
}[] = [
  {
    nama: "muammar rizal",
    umur: 22,
    menikah: false,
  },
  {
    nama: "alfina rahmalia",
    umur: 22,
    menikah: false,
  },
];

arrObj.map((item) => {
  console.log(panggil(item));
});
