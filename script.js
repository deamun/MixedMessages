const randomNumberGenerator = listLength => {
    const randomNumber = Math.floor(Math.random() * listLength);
    return randomNumber;
};

const skillListGenerator = (skillList, numSkills, primarySkills = []) => {
    let chosenSkills = [];

    for (let i = 0; i < numSkills; i++) {
        let skill = skillList[randomNumberGenerator(skillList.length)];

        let duplicate = true; // Guilty until proven innocent

        while (duplicate === true) {
            for (const primarySkill of primarySkills) {
                if (skill === primarySkill) {
                    skill = skillList[randomNumberGenerator(skillList.length)];
                } else {
                    duplicate = false;
                };
            };

            for (const chosenSkill of chosenSkills) {
                if (skill === chosenSkill) {
                    skill = skillList[randomNumberGenerator(skillList.length)];
                    duplicate = true;
                } else {
                    duplicate = false;
                };
            };
        };
        
        chosenSkills.push(skill);
    };

    for (const chosenSkill of chosenSkills) {
        if (chosenSkill === 'Two-Handed') {
            chosenSkill = chosenSkill + ': ' + weaponClassList[randomNumberGenerator(weaponClassList.length - 1)];
        };

        if (chosenSkill === 'One-Handed') {
            chosenSkill = chosenSkill + ': ' + weaponClassList[randomNumberGenerator(weaponClassList.length)];
        };

        if (chosenSkill === 'Destruction') {
            chosenSkill = chosenSkill + ': ' + magicElementList[randomNumberGenerator(magicElementList.length)];
        };
    };

    return chosenSkills;
};

const formatOutput = character => {
    console.log(`Your character is a ${character.morality} ${character.gender} ${character.race}. Their primary skills are ${character.primarySkills[0]} and ${character.primarySkills[1]}, with ${character.secondarySkills[0]}, ${character.secondarySkills[0]} and ${character.secondarySkills[2]} to complement their adventure. Have fun!`);
};

const moralityList = ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'neutral', 'chaotic neutral', 'lawful evil', 'neutral evil', 'chaotic evil'];
const genderList = ['Female', 'Male'];
const raceList = ['Altmer (High Elf)', 'Argonian', 'Bosmer (Wood Elf)', 'Breton', 'Dunmer (Dark Elf)', 'Imperial', 'Khajiit', 'Nord', 'Orsimer(Orc)', 'Redguard'];
const skillList = ['Alchemy', 'Alteration', 'Archery', 'Block', 'Conjuration', 'Destruction', 'Enchanting', 'Heavy Armor', 'Illusion', 'Light Armor', 'Lockpicking', 'One-Handed', 'Pickpocket', 'Restoration', 'Smithing', 'Sneak', 'Speech', 'Two-Handed'];
const weaponClassList = ['Axe', 'Hammer', 'Sword', 'Dagger'];
const magicElementList = ['Fire', 'Lightning', 'Frost'];

const character = {
    morality: moralityList[randomNumberGenerator(moralityList.length)],
    gender: genderList[randomNumberGenerator(genderList.length)],
    race: raceList[randomNumberGenerator(raceList.length)],
    primarySkills: skillListGenerator(skillList, 2),
    secondarySkills: skillListGenerator(skillList, 3, this.primarySkills),
};

formatOutput(character);