import { NextApiRequest, NextApiResponse } from "next"
import withHandler, { ResponseType } from "@libs/server/withHandler"
import client from "@libs/server/client"

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body
  console.log("토큰입니다", token)
  res.status(200).end()
}

export default withHandler("POST", handler)
