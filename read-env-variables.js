
const dotenv = require("dotenv");

dotenv.config({
  path: `.env.${process.env.TEST_ENV}`,
});

console.log(process.env.NEETO_CI_JOB_ID);
console.log(process.env.TAG);