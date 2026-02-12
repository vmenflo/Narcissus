import { Router } from "express";
import type { Request, Response } from "express";


const router = Router();


const peliculas = [
    { id: 1, nombre: "Alien: El Octavo Pasajero" },
    { id: 2, nombre: "El bueno, el feo y el malo" },
  ];

router.get("/", (req: Request, res: Response) => {
  res.json(peliculas);
});

router.get("/:id", (req: Request, res: Response) => {

  const id = Number(req.params.id)

  if(Number.isNaN(id)){
    return res.status(400).json(
        {
        code:"INVALID_ID",
        message:"El ID no es válido, se espera un número"
    });
  }

  const pelicula = peliculas.find(c => c.id === id);

  if(!pelicula){
    return res.status(404).json(
        {
            code:"NOT_FOUND",
            message:"No se encuentra ninguna pelicula para ese ID"
        }
    );
  }

  return res.json(pelicula);

  });

export default router;