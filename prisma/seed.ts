import prisma from "@configs/database-connection";

async function main() {
  await prisma.message.createMany({
    skipDuplicates: true,
    data: {
      text: "Hello, world!",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
