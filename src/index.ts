#!/usr/bin/env node

import { Command } from "commander";
import { createProject } from "./commands/createProject";

const program = new Command();

program
  .name("nestx")
  .description("NestJS CLI generator")
  .version("1.0.0");

program
  .command("new <name>")
  .description("Create new NestJS project")
  .action(async (name) => {
    await createProject(name);
  });

program.parse(process.argv);
