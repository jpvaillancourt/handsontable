/**
 * Check if provided expression is valid formula expression.
 *
 * @param {*} expression Expression to check.
 * @returns {boolean}
 */
export function isFormulaExpression(expression) {
  return typeof expression === 'string' && expression.length >= 2 && expression.charAt(0) === '=';
}

/**
 * Check if provided formula expression is escaped.
 *
 * @param {*} expression Expression to check.
 * @returns {boolean}
 */
export function isFormulaExpressionEscaped(expression) {
  return typeof expression === 'string' && expression.charAt(0) === '\'' && expression.charAt(1) === '=';
}

/**
 * Replace escaped formula expression into valid string.
 *
 * @param {string} expression Expression to process.
 * @returns {string}
 */
export function unescapeFormulaExpression(expression) {
  return isFormulaExpressionEscaped(expression) ? expression.substr(1) : expression;
}

/**
 * Upper case formula expression.
 *
 * @param {string} expression Formula expression.
 * @returns {string}
 */
export function toUpperCaseFormula(expression) {
  const PATTERN = /(\\"|"(?:\\"|[^"])*"|(\+))|(\\'|'(?:\\'|[^'])*'|(\+))/g;
  const strings = expression.match(PATTERN) || [];
  let index = -1;

  return expression.toUpperCase().replace(PATTERN, () => {
    index += 1;

    return strings[index];
  });
}

/**
 * Cell coordinates function factory.
 *
 * @param {string} axis An axis name (`row` or `column`) which default index will be applied to.
 * @param {number} defaultIndex Default index.
 * @returns {Function}
 */
export function cellCoordFactory(axis, defaultIndex) {
  return function(cell) {
    return {
      row: axis === 'row' ? defaultIndex : cell.row,
      column: axis === 'column' ? defaultIndex : cell.column,
    };
  };
}
