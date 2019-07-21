import reducer  from './todo.reducers';

const INITIAL_STATE = {
  todos: [{
        id: 0,
        text: 'Walk the Dog',
        complete: false,
        }
        ]
  }

describe('todo reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  describe('Add todo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: 'ADD_TODO',
        id: 1,
        complete: false,
        text: 'Test React',
      };

      const expectedState = {
        todos: [
          {
            id: 0,
            text: 'Walk the Dog',
            complete: false,
          },
          {
              id: 1,
              text: 'Test React',
              complete: false,
          }
          ]
        };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('Remove todo', () => {
    it('Should remove the item from list', () => {
      const action = {
        type: 'REMOVE_TODO',
        id: 1
      };

      const expectedState = {
        todos: [
          {
            id: 0,
            text: 'Walk the Dog',
            complete: false,
          }
          ]
        };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
  describe('Toggle todo', () => {
    it('Should return the correct toggle state', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: 0
      };

      const expectedState = {
        todos: [
          {
            id: 0,
            text: 'Walk the Dog',
            complete: true,
          }
          ]
        };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});