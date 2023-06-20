const yargs = require("yargs");

const FullSet = require("./App")

yargs.command({
    command: "search",
    describe:"To add a guest",
    builder:{
            location:{
            describe:"location",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        FullSet(argv.location)
    }
})
yargs.parse()