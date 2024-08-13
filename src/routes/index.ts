import { Router, Request, Response } from "express";

const router = Router();
interface User {
  id: number;
  full_name: string;
  email: string;
}

const users: User[] = [];

router.get("/users", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Berhasil mendapatkan data user",
    data: {
      users,
    },
  });
});

router.post("/users", (req: Request, res: Response) => {
  const inputUser: User = req.body;

  const index = users.findIndex((user) => user.email === inputUser.email);

  if (index !== -1) {
    res.status(400).json({
      status: false,
      message: "email sudah terdaftar",
      data: {},
    });
    return;
  }

  users.push({
    id: +new Date(),
    full_name: inputUser.full_name,
    email: inputUser.email.toLocaleLowerCase(),
  });

  res.status(201).json({
    success: true,
    message: "user berhasil ditambahkan",
    data: inputUser,
  });
});

router.put("/users/:email", (req: Request, res: Response) => {
  const email = req.params.email.toLocaleLowerCase();
  const user: User = req.body;

  const index = users.findIndex((user) => user.email === email);

  if (index === -1) {
    res.status(404).json({
      success: false,
      message: "User tidak ditemukan",
      data: {},
    });
    return;
  }

  users[index] = {
    id: +new Date(),
    full_name: user.full_name,
    email: user.email.toLowerCase(),
  };

  res.status(200).json({
    success: true,
    meesage: "User berhasil perbarui",
    data: {
      user,
    },
  });
});

router.delete("/user/:email", (req: Request, res: Response) => {
  const email = req.params.email.toLocaleLowerCase();

  const index = users.findIndex((item) => item.email === email);

  if (index === -1) {
    res.status(404).json({
      message: "User tidak ditemukan",
      success: false,
      data: {},
    });
    return;
  }
  users.splice(index, 1);

  res.status(200).json({
    message: "Data berhasil dihapus",
    success: true,
    data: {},
  });
});

export default router;
