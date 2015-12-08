import postcss from 'postcss';
import test from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

test('replaces border-top-radius', t => {
    return run(t,
        'a{ border-top-radius: 5px; }',
        'a{ border-top-right-radius: 5px; border-top-left-radius: 5px; }',
        { });
});

test('replaces border-right-radius', t => {
    return run(t,
        'a{ border-right-radius: 5px; }',
        'a{ border-top-right-radius: 5px; border-bottom-right-radius: 5px; }',
        { });
});

test('replaces border-bottom-radius', t => {
    return run(t,
        'a{ border-bottom-radius: 5px; }',
        'a{ border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; }',
        { });
});

test('replaces border-left-radius', t => {
    return run(t,
        'a{ border-left-radius: 5px; }',
        'a{ border-top-left-radius: 5px; border-bottom-left-radius: 5px; }',
        { });
});

test('works with multiple values', t => {
    return run(t,
        'a{ border-top-radius: 5px 10px; }',
        'a{ border-top-right-radius: 5px 10px; ' +
        'border-top-left-radius: 5px 10px; }',
        { });
});
