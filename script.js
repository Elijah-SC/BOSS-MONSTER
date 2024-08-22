// console.log(`GET READY TO RUMBLE`)

const heroes = [
  {
    name: 'Elijah',
    type: 'dwarf',
    damage: 5,
    health: 100
  },
  {
    name: 'Autumn',
    type: 'elf',
    damage: 10,
    health: 50
  }
]

const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1

}


let partyGold = 20





function attackBoss() {
  let totalDamage = 0
  heroes.forEach((fighter) => {
    totalDamage += fighter.damage
  })

  boss.health -= totalDamage

  if (boss.health < 0) { boss.health = 0 }

  // console.log(totalDamage)
  // console.log(boss.health)
  drawBossHealth()
  BossDeath()

}

function drawBossHealth() {
  const bossHealthElm = document.getElementById(`boss-health`)
  bossHealthElm.innerText = boss.health.toFixed().toString()

  const bossLevelElm = document.getElementById(`boss-level`)
  bossLevelElm.innerText = boss.level.toFixed().toString()
}


function attackHeroes() {
  let bossDamage = 0
  heroes.forEach((hero) => {
    hero.health -= boss.damage
    // console.log(hero.health)
  })

  drawHeroesHealth()

}

function drawHeroesHealth() {
  heroes.forEach((hero) => {
    const heroesHealthElm = document.getElementById(hero.name)
    // console.log(hero.health)

    if (hero.health < 0) { hero.health = 0 }

    heroesHealthElm.innerText = hero.health.toFixed().toString()

  })
}

function drawGold() {

  const partyGoldElm = document.getElementById(`partyGold`)
  partyGoldElm.innerText = partyGold.toFixed().toString()
  if (partyGold < 0) { partyGold = 0 }

}

function BossDeath() {

  if (boss.health <= 0) {
    boss.level++
    partyGold += 20 * boss.level
    boss.damage += .5 * boss.damage
    boss.maxHealth += .2 * boss.maxHealth
    boss.health = boss.maxHealth


    console.log(boss.damage, boss.level, partyGold, boss.maxHealth, boss.health)
  }


  drawBossHealth()
  drawGold()
}

function buyPotionAutumn() {
  if (partyGold >= 20) {
    partyGold -= 20
    heroes[1].health += 20

  }
  drawGold()
  drawHeroesHealth()
}

function buyPotionElijah() {
  if (partyGold >= 20) {
    partyGold -= 20
    heroes[0].health += 20
  }
  drawGold()
  drawHeroesHealth()
}


function reset() {

  boss.health = 100
  boss.maxHealth = 100
  boss.damage = 5
  boss.level = 1

  heroes[0].health = 100
  heroes[1].health = 50
  partyGold = 20

  console.log(`WHyyyyy`)

  drawBossHealth()
  drawGold()
  drawHeroesHealth()

}




setInterval(attackHeroes, 5000)

drawHeroesHealth()
drawGold()
drawBossHealth()