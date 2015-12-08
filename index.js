var postcss = require('postcss');

function replaceDeclaration(props) {
    return function (declaration) {
        props.forEach(function (prop) {
            declaration.cloneBefore({ prop: prop });
        });

        declaration.remove();
    };
}

module.exports = postcss.plugin('postcss-border-radius', function () {
    return function (css) {

        css.walkDecls('border-top-radius', replaceDeclaration([
            'border-top-right-radius',
            'border-top-left-radius'
        ]));

        css.walkDecls('border-right-radius', replaceDeclaration([
            'border-top-right-radius',
            'border-bottom-right-radius'
        ]));

        css.walkDecls('border-bottom-radius', replaceDeclaration([
            'border-bottom-right-radius',
            'border-bottom-left-radius'
        ]));

        css.walkDecls('border-left-radius', replaceDeclaration([
            'border-top-left-radius',
            'border-bottom-left-radius'
        ]));
    };
});
