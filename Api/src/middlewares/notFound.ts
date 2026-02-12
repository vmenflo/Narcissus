import type { Request, Response, NextFunction } from "express";

export function notFound(req: Request, res: Response, _next: NextFunction) {
  res.status(404).json({
    code: "NOT_FOUND",
    message: `Route not found: ${req.method} ${req.path}`,
  });
}
