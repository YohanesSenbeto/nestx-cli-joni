import chalk from "chalk";
import fs from "fs-extra";
import path from "path";

export async function createProject(name: string) {
  const target = path.resolve(process.cwd(), name);

  const template = path.resolve(__dirname, "../templates/nestjs-starter");

  console.log(chalk.blue(`Creating project: ${name}`));

  if (await fs.pathExists(target)) {
    console.log(chalk.red("❌ Folder already exists"));
    return;
  }

  try {
    await fs.copy(template, target, {
      overwrite: false,
      errorOnExist: true
    });

    console.log(chalk.green("✅ Project created successfully!"));

    console.log("\nNext steps:");
    console.log(`cd ${name}`);
    console.log("npm install");
    console.log("npm run start:dev");
  } catch (err: any) {
    console.error(chalk.red("Failed to create project:"), err.message);
  }
}
