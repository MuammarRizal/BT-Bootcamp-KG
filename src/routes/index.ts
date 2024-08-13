import { Router, Request, Response } from "express";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

interface User {
  full_name: string;
  email: string;
}

const users: User[] = [];

router.get("/user", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Berhasil mendapatkan data user",
    data: {
      users,
    },
  });
});

router.post("/users", (req: Request, res: Response) => {
  const user: User = req.body;

  const index = users.findIndex((user) => user.email === user.email);

  if (index !== -1) {
    res.status(400).json({
      status: false,
      message: "email sudah terdaftar",
      data: {},
    });
  }

  users.push({
    full_name: user.full_name,
    email: user.email.toLocaleLowerCase(),
  });

  res.status(201).json({
    success: true,
    message: "User berhasil ditambahkan",
    data: user,
  });
});
export default router;
