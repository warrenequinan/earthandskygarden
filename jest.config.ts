import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig: Config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};

export default createJestConfig(customJestConfig);
