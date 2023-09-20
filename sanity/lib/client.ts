import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // token: "sk2NRoOfT9W6nZaKYZLDKvXJc2xEGPHAyVQH2DOoJsIkj9YmlVyTR8mamuhDuaPajwPtcPVQWBPtc13XpiS5ObjIfWHxvIdCnVQdk3qDo33dcLW2FR6ILYh5cq9x1oe5etnWnpz6Q1kRbJgwh35G3uvUGMEGn4z09uIGAJeFtRUtEjSzlPDf"
})
