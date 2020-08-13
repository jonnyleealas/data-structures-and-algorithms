('use strict');
const $$ = require('../shredder.js')
describe('shredder library', ()=>{


  it(' can deterimine if a thing is an array', ()=>{
    let input = []
    let expected = 'array';
    let actual = $$.whatIs(input)
    expect(actual).toEqual(expected)
  })

  it(' can deterimine if a thing is an object', ()=>{
    let input = {}
    let expected = 'array';
    let actual = $$.whatIs(input)
    expect(actual).toEqual(expected)
  })

  it(' skips non array', ()=>{
    let input = ''
    let expected = 'undefined';
    let actual = $$.whatIs(input)
    expect(actual).toEqual(expected)
  })

  it( 'can map over an array', ()=>{
    // expect(true).toBeTruthy();


    let start = [2,4,6,];
    let expected = [4,16,32];
    let callback = (val => val *val;
    let squares = $$.map(start, callback);
    expected(squares).toStrictEqual(expected);
  })
});

it('can map over an array opf 1', ()=> {
  let start = [2];
  let expected = [4];
  let callback = (val)=> val *val;
  let squares = $$.map (start, callback);
  expect (squares).toStrictEqual(expected);
})

