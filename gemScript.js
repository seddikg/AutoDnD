const effects = {
      classShift: {
        red: "Barbarian or Warlock",
        blue: "Life Cleric or Alchemist Artificer",
        black: "Necromancer or Aberrant Sorcerer",
        green: "Druid or Ranger",
        yellow: "Genie Warlock or Elemental Sorcerer",
        white: "Light Cleric or Divination Wizard",
        purple: "Enchanter or Psion"
      },
      red: [
        "Fireball or other damage spell",
        "Rage-like buff (bonus damage, no control)",
        "Summon hostile fiend",
        "Berserk aura (affects everyone)",
        "Magic weapon conjuration",
        "Explosive runes around target",
        "Hunter's Mark-like effect",
        "Chain Lightning or Meteor Swarm variant",
        "Gain random martial feat temporarily"
      ],
      blue: [
        "Revive fallen creature with mutation",
        "Restore HP but cause exhaustion",
        "Temporary regeneration",
        "Swap HP between two creatures",
        "Mass Healing with wild magic surge",
        "Poison purge + temporary resistance",
        "Heal ally, but inflict psychic damage",
        "Reverse damage recently taken",
        "Summon a celestial healer for 1 round"
      ],
      black: [
        "Cast Fear or Phantasmal Killer",
        "Inflict Madness (short term)",
        "Gain undead traits temporarily",
        "Aberration tentacle attack",
        "Speak with dead (without asking)",
        "Target gains darkvision and sees spirits",
        "Nearby corpse reanimates aggressively",
        "Nightmarish illusion invades minds",
        "Summon an intellect devourer"
      ],
      green: [
        "Wild Shape (random beast)",
        "Summon animal ally",
        "Sudden overgrowth of terrain",
        "Speak with plants or animals",
        "Barkskin or Stoneskin",
        "Conjure fey spirit",
        "Acid rain or hailstorm",
        "Merge into terrain temporarily",
        "Summon treant or earth elemental"
      ],
      yellow: [
        "Cast Gust of Wind or Wall of Sand",
        "Teleport short range",
        "Elemental resistance for 1 minute",
        "Grant levitation or flight",
        "Random weather change",
        "Lightning bolt or flame wave",
        "Sand form (intangible) for 1 round",
        "Mini wish (DM improvises magical effect)",
        "Summon a genie (unpredictable loyalty)"
      ],
      white: [
        "Reroll one failed save",
        "Speed up ally (Haste)",
        "Reverse one action taken last round",
        "Cast Guidance or Bless on all allies",
        "Light or sunbeam-based damage",
        "Time Stop for 1 round (minor version)",
        "Reveal a vision or prophecy",
        "Prevent death once (1 minute duration)",
        "Summon avatar of fate (cryptic aid)"
      ],
      purple: [
        "Mind reading for 1 minute",
        "Hallucination or illusory double appears",
        "Psychic scream (damage and stun)",
        "Random teleportation (misty step or worse)",
        "Shared mind link with nearby creature",
        "Confusion spell",
        "Dominate person/beast (short duration)",
        "Time-loop illusion (lose a round)",
        "Summon psychic projection of user"
      ]
    };

    function rollDie(sides) {
      return Math.floor(Math.random() * sides) + 1;
    }

    function rollGemEffect() {
      const color = document.getElementById("gemColor").value;
      const weightedRoll = [1,1,1,2,3,4,5,6,7,8,9,10];
      const d10 = weightedRoll[Math.floor(Math.random() * weightedRoll.length)];
      const d20 = rollDie(20);
      const d4 = rollDie(4);

      let intensity =
        d20 <= 5 ? "Minor" :
        d20 <= 10 ? "Moderate" :
        d20 <= 15 ? "Strong" :
        d20 <= 19 ? "Intense" :
        "Legendary";

      let direction =
        d4 === 1 ? "Helps the Player(s)" :
        d4 === 2 ? "Helps the Enemies" :
        d4 === 3 ? "Affects Everyone" :
        "Chaotic / Unclear Consequences";

      let effect;
      if (d10 === 1) {
        effect = `Class Shift: ${effects.classShift[color]}`;
      } else {
        const effectList = effects[color];
        const randomIndex = Math.floor(Math.random() * effectList.length);
        effect = effectList[randomIndex];
      }

      document.getElementById("result").innerText =
        `🎲 Rolls:\n- Effect Type d10: ${d10}\n- Intensity d20: ${d20} → ${intensity}\n- Direction d4: ${d4} → ${direction}\n\n✨ Result: ${effect}`;
    }
