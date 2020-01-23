import { Selection } from './../../../3rdparty/walkontable/src';

/**
 * Creates the new instance of Selection responsible for highlighting area of the selected multiple cells.
 *
 * @returns {Selection}
 */
function createHighlight({ layerLevel, areaCornerVisible }) {
  const s = new Selection({
    className: 'area',
    markIntersections: true,
    layerLevel: Math.min(layerLevel, 7),
    border: {
      width: 1,
      color: '#4b89ff',
      cornerVisible: areaCornerVisible,
      strokeAlignment: 'inside',
    },
  });

  return s;
}

export default createHighlight;
