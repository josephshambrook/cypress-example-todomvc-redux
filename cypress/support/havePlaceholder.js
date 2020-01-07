function domShouldExist($element) {
  new chai.Assertion($element).to.be.exist;
}

export function havePlaceholder(chai) {
  chai.Assertion.addMethod('placeholder', function (expected) {
    const $element = this._obj;

    domShouldExist($element);

    const actual = $element.attr('placeholder');

    this.assert(
      actual === expected,
      'expected #{this} to have placeholder #{exp}, but the placeholder was #{act}',
      'expected #{this} not to have placeholder #{exp}',
      expected,
      actual
    );
  });
}
