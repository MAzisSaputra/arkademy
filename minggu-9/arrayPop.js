const hewan = ['singa', 'ular', 'harimau'], tambahan = ['buaya', 'beruang', {obj: 'rusa'}]
const arraypushHewan = async () =>{
    await tambahan.pop();
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arraypushHewan();