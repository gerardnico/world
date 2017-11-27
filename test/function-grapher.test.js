import {default as graphunc} from '../src/function-grapher';




test('Test generated data on simple additive function', () => {

    var func = (x) => x+1;
    var graph = new graphunc(func);
    graph.setStep(1);
    graph.setXMin(-10);
    graph.setXMax(10);

    var expectedData = [ { x: -10, y: -9 },
        { x: -9, y: -8 },
        { x: -8, y: -7 },
        { x: -7, y: -6 },
        { x: -6, y: -5 },
        { x: -5, y: -4 },
        { x: -4, y: -3 },
        { x: -3, y: -2 },
        { x: -2, y: -1 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 5 },
        { x: 5, y: 6 },
        { x: 6, y: 7 },
        { x: 7, y: 8 },
        { x: 8, y: 9 },
        { x: 9, y: 10 } ];
    expect(graph.getData()).toEqual(expectedData);


});

test('xMax < xMin throw an error', () => {

    var func = (x) => x+1;

    var graph = new graphunc(func);
    graph.setStep(1);
    graph.setXMin(10);
    graph.setXMax(-10);

    expect(
        () => {
            graph.getData();
        }
    ).toThrow()



});


