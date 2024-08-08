"use server";

import { revalidateTag } from "next/cache";

export const getFact = async () => {
  revalidateTag("fact");
};
