import fs from 'fs'
import path from 'path'

console.log('build start!')
await runParallel(getTargets(), build)
console.log('build end!')

function runParallel(targets, exec){
    const res = [];
    targets.forEach(t => {
        const r = exec(t);
        res.push(r);
    })
    return Promise.all(res);
}

async function build(target){
    await console.log(`mock build: ${target}`)
    // await execa('rollup', ['-cw','--environment', `TARGET:${target}`], {stdio:"inherit"})
}

function getTargets(){
    return fs.readdirSync(path.resolve(process.cwd(), './packages')).filter(f => fs.statSync(`packages/${f}`).isDirectory())
}