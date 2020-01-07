function domShouldExist($element) {
  new chai.Assertion($element).to.be.exist;
}

export function haveTestId(chai) {
  chai.Assertion.addMethod('testid', function (expected) {
    const $element = this._obj;

    domShouldExist($element);

    const actual = $element.attr('data-testid');

    this.assert(
      actual === expected,
      'expected #{this} to have testid #{exp}, but the testid was #{act}',
      'expected #{this} not to have testid #{exp}',
      expected,
      actual
    );
  });
}
