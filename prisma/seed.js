const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alicemartin", email: "amartin@hotmail.com" },
      { username: "alicemartin", email: "alicem@hotmail.com" },
      { username: "martinLynch", email: "martylynch35@hotmail.com" },
    ],
  });

  // Add your code here

  const createdProfile = await prisma.profile.create({
    data: {
      profilePic: "http://profile.com",
      bio: "Just an awkward guy trying to learn to code",
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  const createdPost = await prisma.post.create({
    data: {
      title: "This is more difficult than it seems initially",
      content:
        "I initially was overconfident as my shadow schema wasnt set up properly. I'm still getting errors but things seem ot be working better",
      published: true,
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  const createdComment = awaitprisma.comment.create({
    data: {
      content: "I'm Jim Halpert....Little comment",
      user: {
        create: {
          username: "Dwight",
          email: "dwightschrute@gmail.com",
        },
      },
      post: {
        connect: {
          id: 3,
        },
      },
    },
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
