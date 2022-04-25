function resolveAfter(){
  return new Promise((res)=>{
    setTimeout(()=>{res('Resolved')},10000);
  });
}

async function asyncfunction(){
  console.log("calling");
  const result = await resolveAfter();
  console.log(result);
}

asyncfunction();