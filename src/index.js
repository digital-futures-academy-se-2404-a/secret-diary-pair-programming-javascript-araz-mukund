import Diary from "./Diary";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const diary = new Diary("1234")

rl.question("Secret Diary - Please enter pin: ", (answer) => {
	diary.enterPin(answer)
  rl.close();
});
