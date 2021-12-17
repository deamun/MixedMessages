# Planning for Mixed Messages Portfolio Project

## Topic
Random build generator for when you can't decide what character to play in Skyrim.

<hr>

## Plan
1. Choose a random gender to play as from gender list:

   - Male
   - Female  
   <p></p>

2. Choose a random race to play as from a list of races:
   
   - Altmer (High Elf)
   - Argonian
   - Bosmer (Wood Elf)
   - Breton
   - Dunmer (Dark Elf)
   - Imperial
   - Khajiit
   - Nord
   - Orsimer(Orc)
   - Redguard
   <p></p>

3. Choose a character's moral alignment from the morality list:

   - Lawful Good
   - Neutral Good
   - Chaotic Good
   - Lawful Neutral
   - Neutral
   - Chaotic Neutral
   - Lawful Evil
   - Neutral Evil
   - Chaotic Evil
   <p></p>
4. Choose 2 random skills to be assigned as primary skills from skill list:

   - Alchemy
   - Alteration
   - Archery
   - Block
   - Conjuration
   - Destruction
   - Enchanting
   - Heavy Armor
   - Illusion
   - Light Armor
   - Lockpicking
   - One-Handed
   - Pickpocket
   - Restoration
   - Smithing
   - Sneak
   - Speech
   - Two-Handed
   <p></p>

5. If primary skill is weapon skill, choose weapon class from list:

   - Axe
   - Sword
   - Hammer
   - Dagger (if One-Handed)
   <p></p>

6. If primary skill is Destruction choose Element from list:

   - Fire
   - Lightning
   - Frost
   <p></p>

7. Choose 3 random skills to be assigned as secondary skills from skill list (do not include primary skill).

8. Choose if character should be supernatural from list:

   - Vampire
   - Werewolf
   - Uncursed
   <p></p>

9. Display choices as a sentence in the format: 

   "Your character is a **morality** **gender** **race** (*Optional - if supernatural:* who hates the sun/is a slave to the moon). Their primary skills are **primary skills** complemented by **secondary skills**. Have fun!"

<hr>

## Pseudocode

1. Random Number Generation Function:
   - Parameter of list length
   - Use Math.floor(Math.random() * list length) to create random number to access list index location
   - Return random number
   <p></p>

2. Generate Skill List Function:
   - Parameters of skill list, number of skills, and primary skills list (default initialised to empty list (*to account for the case when the function is being used to create the primary skill list*)
   - Create chosen skills variable, initialise to empty list
   - Starting from 0, loop 'number of skills' times. Inside loop:
      - Create variable of skill
      - Assign value to skill equal to skill list at index location that is a result of calling random number generator, passing skill list length
      <p></p>

      > *Ensure same skill is not duplicated by checking chosen skills and primary skills*
      
      - ~~While skill value does not equal chosen skills value at index location of current iteration AND skill value does not equal primary skills value at index location of current iteration:~~ __EDIT: *incorrect logic*__
      - Create duplicate check variable, initialise to true
      - While duplicate check is true:
        - Loop over primary skills list:

          - If skill value is equal primary skills list iteration value:
            - Reassign value to skill equal to skill list at index location that is a result of calling random number generator, passing skill list length
          - Otherwise:
            - Set duplicate check to false
            <p></p>

        - Loop over chosen skills list:
          - If skill value is equal to chosen skills list iteration value:
            - Reassign value to skill equal to skill list at index location that is a result of calling random number generator, passing skill list length
            - Set duplicate check to true
          - Otherwise:
            - Set duplicate check to false
        <p></p>

      - Push skill value to chosen skills list
    - Check if any chosen skills are weapon skills or destruction:
       - Loop over chosen skills list:
          - If chosen skill element is equal to 'Two-Handed':
             - Reassign value of element to be element plus random weapon class:
                - weapon class element that is result of calling random number generator, pass weapon class list length minus 1
          - If chosen skill element is equal to 'One-Handed':
             - Reassign value of element to be element plus random weapon class:
                - weapon class element that is result of calling random number generator, pass weapon class list length
          - If chosen skill element is equal to 'Destruction':
             - Reassign value of element to be element plus random magic element:
                - magic element that is result of calling random number generator, pass magic element list length
                <p></p>

    > *Should look something like 'Two-Handed: Axe' or 'Destruction: Frost'. Should not ever be 'Two-Handed: Daggers'*
    - Return chosen skills list
   <p></p>

3. Create lists:
   - genderList
   - raceList
   - moralityList
   - skillList
   - weaponClassList
   - magicElementList
   - ~~supernaturalList~~ __EDIT: *removed vampirism/werewolf -- not necessary*__
   <p></p>

4. Create character object:
   1. Create character morality key:
      - Call random number generator, pass morality list length
   <p></p>

   2. Create character gender key:
      - Call random number generator, pass gender list length
   <p></p>

   3. Create character race variable:
      - Call random number generator, pass race list length
   <p></p>

   4. Create character primary skill list:
      - Create primary skills variable, initialise to result of calling skill list generator, pass skill list, desired size of chosen skills (2)
   <p></p>

   > *Primary skill list should contain two unique skills chosen from skill list*

   5. Create character secondary skill list:
      - Create secondary skills variable, initialise to result of calling skill list generator, pass skill list, desired size of chosen skills (3), and primary skills list
    <p></p>

   > *Secondary skill list should contain three unique skills chosen from skill list (no dubplicates of primary skills)* 

   ~~6. Create character supernatural variable:~~
      - ~~Call random number generator, pass supernatural list length~~ __EDIT: *removed vampire/werewolf selection -- not necessary*__
   <p></p>

5. Format Output Function:
   - Parameter of character object
   - Log to console string utilising `${}` to access each object key value.
   - Something like: 
   <p></p>

   > "Your character is a *__morality__* *__gender__* *__race__*. Their primary skills are *__primary skills__* with *__secondary skills__* to complement their adventure. Have fun!"
   <p></p>

6. Call format output function, pass character object