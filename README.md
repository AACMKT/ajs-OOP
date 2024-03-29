## OOP (Models)
---
[![Build status](https://ci.appveyor.com/api/projects/status/yj224iae4k1042i8?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-oop)

## Классы, наследование, методы

### Описание

Класс `Character` является родительским для 6 дочерних классов `Bowerman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie`.

Свойства объектов класса `Character`:
1. `name` - имя
2. `type` - тип
3. `health` - уровень жизни
4. `level` - уровень персонажа
5. `attack` - атака
6. `defence` - защита

Конструктор класса соответствует следующим требованиям:
1. `name` - строка, min - 2 символа, max - 10
2. `type` - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie

В случае, если передаются некорректные значения, выбрасывается ошибка (`throw new Error(...)`).

Занчения полей по умолчанию:
1. health: 100
2. level: 1
3. Атака/защита:
    1. Bowman: 25/25
    2. Swordsman: 40/10
    3. Magician: 10/40
    4. Undead: 25/25
    5. Zombie: 40/10
    6. Daemon: 10/40

---

В классе `Character` реализованы следующие методы: 

- `levelUp`, который работает следующим образом:
  1. На 1 повышает поле `level`;
  2. На 20% повышает показатели `attack` и `defence`;
  3. Приводит показатель `health` к значению 100.

  Работает только если показатель жизни не равен 0. В противном случае генерируется ошибка (нельзя повысить левел умершего).

- `damage(points)`, который меняет внутреннее состояние объекта (`points` -  это урон, наносимый персонажу). Метод `damage(points)` ничего не возвращает и рассчитывает итоговое изменение жизни персонажа (`health`) по формуле: `health -= points * (1 - defence / 100)`, учитывая, что значение `health >= 0`.

---

Обеспечено покрытие тестами.