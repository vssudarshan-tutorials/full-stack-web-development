import fs from "fs";
import {input} from "@inquirer/prompts";
import {image} from "qr-image";

(async ()=>{

    var answers = ""
    for(const q of ["What is your name?","What is your age?", "What is your hobby?" ]){
        var answer = await input({message: q})
        answers +=`Question: ${q}\nAnswer: ${answer}\n\n`
    }

    const img = await image(answers);
    await img.pipe(fs.createWriteStream('user.jpeg'));

    await fs.writeFile("user.txt", answers, (err)=>{
        if(err) console.log("Error saving user data");
        else console.log(`User data saved.`);
    })
})();

