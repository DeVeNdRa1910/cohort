const {z} = require("zod")

function validation(arr){
  const schema = z.array(z.number());
  const resp = schema.safeParse(arr)
  console.log(resp);
}

validation([2,1,4,3])