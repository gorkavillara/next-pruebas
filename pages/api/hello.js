// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { logger } from "../../controllers/winston"

export default function handler(req, res) {
  console.log("Api")
  logger.log("error", "Esto es un error de pruebas")
  res.status(200).json({ name: 'John Doe' })
}
