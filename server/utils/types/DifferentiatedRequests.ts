import { Request } from "express";

type RequestWithBody<T> = Request<Record<string, any>, Record<string, any>, T>

export { RequestWithBody }