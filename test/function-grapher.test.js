import {default as getData} from '../src/function-grapher';


test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});




test('Generate x and y data', () => {

    var data = getData();
    console.log(data);

});

