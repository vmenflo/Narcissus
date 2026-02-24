-- CreateTable
CREATE TABLE "Pelicula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "duracion" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "anio" INTEGER NOT NULL,
    "rating" REAL NOT NULL,
    "sala" INTEGER NOT NULL,
    "hora" TEXT NOT NULL,
    "imagenUrl" TEXT NOT NULL,
    "trailerUrl" TEXT
);

-- CreateTable
CREATE TABLE "Noticia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "articulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "imagenUrl" TEXT NOT NULL
);
