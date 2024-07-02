const races = [
    //[race, [subrace], size, speed, features, resistances, languages, hasDarkvision]
    ['Dragonborn', ['Black Dragonborn', 'Blue Dragonborn', 'Brass Dragonborn', 'Bronze Dragonborn', 'Copper Dragonborn', 'Gold Dragonborn', 'Green Dragonborn', 'Red Dragonborn', 'Silver Dragonborn', 'White Dragonborn'], 'Medium', 30, '', '', 'Common and Draconic', false],
    ['Dwarf', ['Hill Dwarf', 'Mountain Dwarf'], 'Medium', 25, '<strong>Dwarven Resilience.</strong> The Dwarf has advantage on saving throws against poison, and has resistance against poison damage.', 'Poison', 'Common and Dwarvish', true],
    ['Elf', ['High Elf', 'Wood Elf', 'Drow'], 'Medium', 30, '<strong>Fey Ancestry.</strong> The Elf has advantage on saving throws against being charmed, and magic can’t put the Elf to sleep.', '', 'Common and Elvish', true],
    ['Gnome', ['Rock Gnome', 'Forest Gnome'], 'Small', 25, '<strong>Gnome Cunning.</strong> The Gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.', '', '', 'Common and Gnomish', true],
    ['Half-Elf', [], 'Medium', 30, '<strong>Fey Ancestry.</strong> The Half-Elf has advantage on saving throws against being charmed, and magic can’t put the Half-Elf to sleep.', '', 'Common and Elvish', true],
    ['Half-Orc', [], 'Medium', 30, '', '', 'Common and Orc', true],
    ['Halfling', ['Lightfoot Halfling', 'Stout Halfling'], 'Small', 25, '<strong>Brave.</strong> The Halfling has advantage on saving throws against being frightened.','', '', 'Common and Halfling', false],
    ['Human', [], 'Medium', 30, '', '', 'Common and one extra language', false],
    ['Tiefling', [], 'Medium', 30, '', 'Fire', 'Common and Infernal', true]
];

const proficiencies = [
    //[proficiency, [skills]]
    ['Strength', ['Athletics']],
    ['Dexterity', ['Acrobatics', 'Sleight of Hand', 'Stealth']],
    ['Constitution', []],
    ['Intelligence', ['Arcana', 'History', 'Investigation', 'Nature', 'Religion']],
    ['Wisdom', ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival']],
    ['Charisma', ['Deception', 'Intimidation', 'Performance', 'Persuasion']]
];

const simpleMeleeWeapons = [
    //[meleeWeapon, reach, meleeDamageDice, meleeDamageType, isThrowable, range, isVersatile, versatileDamageDice, isTwoHanded],
    ['Club', '5 ft.', '1d4', 'bludgeoning', false, '', false, '', false],
    ['Dagger', '5 ft.', '1d4', 'piercing', true, '20/60 ft.', false, '', false],
    ['Greatclub', '5 ft.', '1d8', 'bludgeoning', false, '', false, '', true],
    ['Handaxe', '5 ft.', '1d8', 'slashing', true, '20/60 ft.', false, '', false],
    ['Javelin', '5 ft.', '1d6', 'piercing', true, '30/120 ft.', false, '', false],
    ['Light Hammer', '5 ft.', '1d4', 'bludgeoning', true, '20/60 ft.', false, '', false],
    ['Mace', '5 ft.', '1d6', 'bludgeoning', false, '', false, '', false],
    ['Quarterstaff', '5 ft.', '1d6', 'bludgeoning', false, '', true, '1d8', false],
    ['Sickle', '5 ft.', '1d4', 'slashing', false, '', false, '', false],
    ['Spear', '5 ft.', '1d6', 'piercing', true, '20/60 ft.', true, '1d8', false],
];

const simpleRangedWeapons = [
    //[rangedWeapon, range, rangedDamageDice, rangedDamageType, isTwoHanded],
    ['Light Crossbow', '80/320 ft.', '1d8', 'piercing', true],
    ['Dart', '20/60 ft.', '1d4', 'piercing', false],
    ['Shortbow', '80/320 ft.', '1d6', 'piercing', true],
    ['Sling', '30/120 ft.', '1d4', 'bludgeoning', false],
];

const martialMeleeWeapons = [
    //[meleeWeapon, reach, meleeDamageDice, meleeDamageType, isThrowable, range, isVersatile, versatileDamageDice, isTwoHanded],
    ['Battleaxe', '5 ft.', '1d8', 'slashing', false, '', true, '1d10', false],
    ['Flail', '5 ft.', '1d8', 'bludgeoning', false, '', false, '', false],
    ['Glaive', '10 ft.', '1d10', 'slashing', false, '', false, '', true],
    ['Greataxe', '5 ft.', '1d12', 'slashing', false, '', false, '', true],
    ['Greatsword', '5 ft.', '2d6', 'slashing', false, '', false, '', true],
    ['Halberd', '10 ft.', '1d10', 'slashing', false, '', false, '', true],
    ['Lance', '10 ft.', '1d12', 'piercing', false, '', false, '', false],
    ['Longsword', '5 ft.', '1d8', 'slashing', false, '', true, '1d10', false],
    ['Maul', '5 ft.', '2d6', 'bludgeoning', false, '', false, '', true],
    ['Morningstar', '5 ft.', '1d8', 'piercing', false, '', false, '', false],
    ['Pike', '10 ft.', '1d10', 'piercing', false, '', false, '', true],
    ['Rapier', '5 ft.', '1d8', 'piercing', false, '', false, '', false],
    ['Scimitar', '5 ft.', '1d6', 'slashing', false, '', false, '', false],
    ['Shortsword', '5 ft.', '1d6', 'piercing', false, '', false, '', false],
    ['Trident', '5 ft.', '1d6', 'piercing', true, '10/60 ft.', true, '1d8', false],
    ['War Pick', '5 ft.', '1d8', 'piercing', false, '', false, '', false],
    ['Warhammer', '5 ft.', '1d8', 'bludgeoning', false, '', true, '1d10', true],
    ['Whip', '10 ft.', '1d4', 'slashing', false, '', false, '', false]
];

const martialRangedWeapons = [
    ['Blowgun', '25/100 ft.', '1d1', 'piercing', false],
    ['Hand Crossbow', '30/120 ft.', '1d6', 'piercing', false],
    ['Heavy Crossbow', '100/400 ft.', '1d10', 'piercing', true],
    ['Longbow', '150/600 ft.', '1d8', 'piercing', true],
    ['Net', '5/15 ft.', '', '', false],
];

const breathWeapons = [
    //[damageType, range, savingThrow]
    ['Acid', '5 by 30-foot line', 'Dexterity'],
    ['Lightning', '5 by 30-foot line', 'Dexterity'],
    ['Fire', '5 by 30-foot line', 'Dexterity'],
    ['Fire', '15-foot cone', 'Dexterity'],
    ['Poison', '15-foot cone', 'Constitution'],
    ['Cold', '15-foot cone', 'Constitution']
];