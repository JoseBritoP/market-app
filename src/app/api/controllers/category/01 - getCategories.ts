import { prisma } from "@/app/config/prisma";

export const getCategories = async () => {
  const categories = await prisma.categories.findMany();

  return categories;
};