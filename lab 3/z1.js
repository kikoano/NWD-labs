class NPC {
    constructor(name, hitpoints) {
        this.name = name;
        this.hitpoints = hitpoints;
    }
    status() {
        return this.name+", "+this.hitpoints;
    }
    isDead() {
        return this.hitpoints <= 0;
    }
}
class Hero extends NPC {
    constructor(name, hitpoints = 100, damage = 10) {
        super(name, hitpoints);
        this.damage = damage;
        this.crit = 1;
    }
    attack(npc) {
        npc.hitpoints -= this.damage * this.crit;
        if (npc instanceof Hero)
            if (!npc.isDead())
                npc.crit = this.crit;
        this.crit = 1;
    }
}
const getRandom = (max) => {
    return Math.floor(Math.random() * max);
}
const getAliveHeroes = (arr) => {
    return arr.filter(e => e instanceof Hero && !e.isDead());
}
let size = 50;
let npcs = [];
let cNpc = 0, cHero = 0;
for (let i = 0; i < size; i++) {
    flip = Math.round(Math.random());
    if (flip)
        npcs.push(new NPC("NPC " + cNpc++, 100))
    else
        npcs.push(new Hero("Hero " + cHero++))
}
let heroes = getAliveHeroes(npcs);
heroes[getRandom(heroes.length)].crit = 1.5;
loop:
while(true) {
    for (let hero of heroes) {
        let rnd;
        do {
            rnd = getRandom(size);
        } while (hero === npcs[rnd] || npcs[rnd].isDead()); // no self attack and no dead npc
        hero.attack(npcs[rnd]);
        heroes = getAliveHeroes(heroes);
        if(heroes.length == 1)
            break loop;
    }
}
console.log("Winner: "+heroes[0].status());