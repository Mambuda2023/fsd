import type { Config } from "jest";

export default async (): Promise<Config> => {
	return {
		verbose: true,
		rootDir: "./",
		testEnvironment: "jsdom",
		setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
		transform: {
			"^.+\\.tsx?$": "ts-jest",
		},
		moduleNameMapper: {
			"\\.(gif|ttf|eot|svg|png)$": "<rootDir/test/__mocks__/fileMock.js>",
			"\\.css$": "identity-obj-proxy",
		},
	};
};
