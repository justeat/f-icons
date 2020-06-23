import classnames from 'classnames/dedupe';

import DEFAULT_ATTRS from './default-attrs.json';

class Icon {
    constructor (name, contents, attrs, tags = []) {
        this.name = name;
        this.contents = contents;
        this.tags = tags;
        this.attrs = {
            ...DEFAULT_ATTRS,
            ...attrs,
            ...{ class: `c-ficon c-ficon--${name}` }

        };
    }

    /**
     * Create an SVG string.
     * @param {Object} attrs
     * @returns {string}
     */
    toSvg (attrs = {}) {
        const combinedAttrs = {
            ...this.attrs,
            ...attrs,
            ...{ class: classnames(this.attrs.class, attrs.class) }
        };

        return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`;
    }
}

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */
function attrsToString (attrs) {
    return Object.keys(attrs)
        .map(key => `${key}="${attrs[key]}"`)
        .join(' ');
}

export default Icon;
