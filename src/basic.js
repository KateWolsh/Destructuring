export function extractSpecialAttacks({ special }) {
    return special.map(attack => {
      const { id, name, description = 'Описание недоступно', icon } = attack;
      return { id, name, description, icon };
    });
  }
  
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  };
  
  const extractedAttacks = extractSpecialAttacks(character);
  console.log(extractedAttacks);
  