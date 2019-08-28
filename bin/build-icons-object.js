import path from 'path';
import cheerio from 'cheerio';
import { minify } from 'html-minifier';

/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of filenames.
 * @param {Function} getSvg - A function that returns the contents of an SVG file given a filename.
 * @returns {Object}
 */
function buildIconsObject (svgFiles, getSvg) {
    return svgFiles
    .map(svgFile => {
        const name = path.basename(svgFile, '.svg');
        const svg = getSvg(svgFile);
        const contents = getSvgContents(svg);
        const attributes = getSvgAttributes(svg);

        return { name, contents, attributes };
    })
    .reduce((icons, icon) => {
        icons[icon.name] = {
            contents: icon.contents,
            attrs: icon.attributes
        };
        return icons;
    }, {});
}

/**
 * Get contents between opening and closing `<svg>` tags.
 * @param {string} svg
 * @returns {string}
 */
function getSvgContents (svg) {
    const $ = cheerio.load(svg);
    return minify($('svg').html(), { collapseWhitespace: true });
}

function getSvgAttributes (svg) {
    const $ = cheerio.load(svg);
    const viewBox = $('svg').attr('viewBox');
    return { viewBox };
}

export default buildIconsObject;
