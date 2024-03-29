'use strict';

angular.module('swFrontApp').factory('edges', function($resource) {
  return $resource('/api/edges');
  /*this.query = function() {
    return [
      {
        name: 'Attractive',
        category: {
          name: 'Background'
        },
        description: 'It’s no secret that beautiful people have an easier time getting their way in life. This Edge grants your beautiful or handsome character +2 to Charisma',
        requirements: [
          { mode: 'rank', name: '', value: 'Novice' },
          { mode: 'trait', name: 'Vigor', value: 'd6' }
        ]
      },
      {
        name: 'Very Attractive',
        category: {
          name: 'Background'
        },
        description: 'Your hero is drop-dead gorgeous. His Charisma is increased to +4',
        requirements: [
          { mode: 'rank', name: '', value: 'Novice' },
          { mode: 'edge', name: '', value: 'Attractive' }
        ]
      },
      {
        name: 'Brave',
        category: {
          name: 'Background'
        },
        description: 'Those with this Edge have learned to master their fear. Or perhaps are so jaded or emotionally distant they’ve just lost their normal “fight or flight” responses. Either way, your hero adds +2 to Fear tests. If the character is in a setting that uses Guts as a Setting Rule, it adds to that as well.',
        requirements: [
          { mode: 'rank', name: '', value: 'Novice' },
          { mode: 'trait', name: 'Spirit', value: 'd6' }
        ]
      },
      {
        name: 'Block',
        category: {
          name: 'Combat'
        },
        description: 'Warriors who engage in frequent hand-to-hand combat are far more skilled in personal defense than most others. They’ve learned not only how to attack, but how to block their opponent’s blows as well. A fighter with this Edge adds +1 to his Parry.',
        requirements: [
          { mode: 'rank', name: '', value: 'Seasoned' },
          { mode: 'skill', name: 'Fighting', value: 'd8' }
        ]
      },
      {
        name: 'Brawler',
        category: {
          name: 'Combat'
        },
        description: 'Frequent fights with his bare hands have given this thug a powerful punch. When he hits a foe with a successful bare-handed Fighting roll, he adds +2 to his damage.',
        requirements: [
          { mode: 'rank', name: '', value: 'Novice' },
          { mode: 'trait', name: 'Strength', value: 'd6' }
        ]
      },
      {
        name: 'Command',
        category: {
          name: 'Leadership'
        },
        description: 'Command is the ability to give clear instructions to surrounding allies and enforce your hero’s will upon them. This makes your character’s compatriots more willing to fight on despite their wounds, and so adds +1 to their Spirit rolls to recover from being Shaken.',
        requirements: [
          { mode: 'rank', name: '', value: 'Novice' },
          { mode: 'trait', name: 'Smarts', value: 'd6' }
        ]
      },
      {
        name: 'Hold the Line!',
        category: {
          name: 'Leadership'
        },
        description: 'This Edge strengthens the will of the men under the hero’s command. The troops add +1 to their Toughness.',
        requirements: [
          { mode: 'rank', name: '', value: 'Seasoned' },
          { mode: 'trait', name: 'Smarts', value: 'd8' },
          { mode: 'edge', name: '', value: 'Command' }
        ]
      }
    ];
  }*/
});