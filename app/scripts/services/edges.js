'use strict';

angular.module('swFrontApp').service('edges', function() {
  this.query = function() {
    return [
      {
        name: 'Attractive',
        description: 'Number 1',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: null, value: 'Novice'},
          { name: 'Vigor', value: 'd6'}
        ]
      },
      {
        name: 'Very Attractive',
        description: 'Number 2',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: 'Strength', value: 'd9'},
          { name: 'Agility', value: 'd2'}
        ]
      }
    ];
  }
});