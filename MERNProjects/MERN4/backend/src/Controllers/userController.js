import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class userController {
  static async getAllUsers({ limit }) {
    try {
      const res = await prisma.user.findMany({ take: limit });
      return res;
    } catch (ex) {
      console.log("While trying to find users there is an exception : " + ex);
    } finally {
      prisma.$disconnect();
    }
  }
  static async getImageTypes() {
    try {
      const res = await prisma.imageType.findMany();
      return res;
    } catch (ex) {
      console.log(
        "While trying to find imageTypes there is an exception : " + ex
      );
    } finally {
      prisma.$disconnect();
    }
  }
  static async getImageTypeByID(id) {
    try {
      const res = await prisma.imageType.findUnique({
        where: {
          id,
        },
      });
      return res;
    } catch (ex) {
      console.log(
        "While trying to find imageType by id there is an exception : " + ex
      );
    } finally {
      prisma.$disconnect();
    }
  }
}

export default userController;
