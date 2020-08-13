test('should double negat', ()=>{


  const commant = {
    action : 'add',
    payload: 'buy milk',

  }
  const result = !!( command.action && command.payload);
  expect (result).toBe(true);
})
