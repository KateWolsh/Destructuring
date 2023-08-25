import { extractSpecialAttacks } from '../basic';

describe('extractSpecialAttacks', () => {
  it('extracts special attacks with description', () => {
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
          icon: 'http://...',
        }
      ]	
    };

    const extractedAttacks = extractSpecialAttacks(character);

    expect(extractedAttacks).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...'
      }
    ]);
  });

  it('extracts special attacks without description', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 10,
          name: 'Удар в спину',
          icon: 'http://...'
        },
        {
          id: 11,
          name: 'Смертельный удар',
          icon: 'http://...'
        }
      ]	
    };

    const extractedAttacks = extractSpecialAttacks(character);

    expect(extractedAttacks).toEqual([
      {
        id: 10,
        name: 'Удар в спину',
        description: 'Описание недоступно',
        icon: 'http://...'
      },
      {
        id: 11,
        name: 'Смертельный удар',
        description: 'Описание недоступно',
        icon: 'http://...'
      }
    ]);
  });
});
