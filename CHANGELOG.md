# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)


v4.5.0
------------------------------
*January 17 2022*

### Added
- Cash small icon

v4.4.0
------------------------------
*December 7, 2021*

### Added
- Jet logo icons.


v4.3.3
------------------------------
*December 07, 2021*

### Changed
- `legend` icon - trimmed whitespace


v4.3.2
------------------------------
*December 06, 2021*

### Changed
- `offer` icon - trimmed even more whitespace


v4.3.1
------------------------------
*December 06, 2021*

### Changed
- `offer` icon - trimmed whitespace


v4.3.0
------------------------------
*December 06, 2021*

### Added
- `offer` icon (new icon, old name).


v4.2.0
------------------------------
*November 29, 2021*

### Added
- `legend` icon (new icon, old name).


v4.1.0
------------------------------
*November 8, 2021*

### Changed
- Updated icons to make viewbox consistent across all bags.
  - `bag-binoculars-bg`
  - `bag-celebrate`
  - `bag-celebrate-bg`
  - `bag-run-bg`


v4.0.0
------------------------------
*November 4, 2021*

### Changed
- Old `bag-sad-bg` icon has been renamed to `bag-sorry-bg`.
  - If you were using the old `bag-sad-bg` icon, please make sure you're using the updated name.

### Added
- `bag-sad-bg` icon (new icon, old name).
- `bag-binoculars-bg` icon.
- `bag-cry-bg` icon.
- `bag-heart-1-bg` icon.
- `bag-heart-2-bg` icon.
- `bag-help-bg` icon.
- `bag-listen-bg` icon.
- `bag-magic-bg` icon.
- `bag-money-bg` icon.
- `bag-surf-bg` icon.
- `bag-xmas-decorate-bg` icon.
- `bag-xmas-santa-bg` icon.
- `bag-xmas-sleigh-bg` icon.


v3.9.0
------------------------------
*September 20, 2021*

### Changed
- Updated arrow icon.


v3.8.0
------------------------------
*August 16, 2021*

### Added
- `collection` icon for search page


v3.7.0
------------------------------
*August 12, 2021*

### Added
- `bag-run-bg` icon added.
- `bag-sad-bg` icon added.


v3.6.0
------------------------------
*June 02, 2021*

### Changed
- `payment-visa.svg` icon updated.


v3.5.1
------------------------------
*March 25, 2021*

### Changed
- `note` icon moved to icons directory.
- `close-circle` icon moved to icons directory.


v3.5.0
------------------------------
*March 24, 2021*

### Added
- `note` icon added.
- `close-circle` icon added.


v3.4.0
------------------------------
*February 4, 2021*

### Added
- `more-vertical` icon added.

### Changed
- Minor package updates


v3.3.1
------------------------------
*January 29, 2020*

### Fixed
- Simplify arrow icon to fix issue when using CSS fill.


v3.3.0
------------------------------
*January 18, 2020*

### Changed
- Gift and profile icons to match new designs.

v3.2.0
------------------------------
*January 14, 2020*

### Changed
- Arrow icon to match new designs.


v3.1.0
------------------------------
*December 10, 2020*

### Added
- Info outline icon.


v3.0.1
------------------------------
*December 9, 2020*

### Fixed
- Chevron icon markup.


v3.0.0
------------------------------
*December 8, 2020*

### Added
- Arrow icon.
- Celebrate bag bg icon.
- Bag icon.
- Bin icon.
- Chevron split icon.
- Moped icon.

## Changed
- Updated alert icon.
- Updated celebrate bag icon.
- Updated basket icon.
- Updated chevron icon.
- Updated cross icon.
- Updated info icon.
- Updated minus icon.
- Updated offer icon.
- Updated plus icon.
- Updated spicy icon.
- Updated star icons.
- Updated vegetarian icon.
- Updated warning icon.
- Renamed question mark icon.

### Removed
- Collection icons (use bag icons instead).
- Delivery icon (use moped icon instead).
- Legacy JE logo.
- Plus thick icon.


v2.12.0
------------------------------
*December 1, 2020*

### Changed

- Geo-outline icon colour to black.
- Geo-fill icon colour to black.


v2.11.0
------------------------------
*November 25, 2020*

### Added
- Geo-outline icon.
- Geo-fill icon.


v2.10.1
------------------------------
*November 13, 2020*

### Fixed
- Unused ids.
- Removed superfluous elements which were preventing CSS styles from applying fill colours.


v2.10.0
------------------------------
*November 13, 2020*

### Added
- New Caret icon.


v2.9.0
------------------------------
*November 2, 2020*

### Changed
- Huawei icon to proper svg.


v2.8.0
------------------------------
*October 30, 2020*

### Added
- New Huawei icon.


v2.7.0
------------------------------
*October 29, 2020*

### Added
- New Search icon.


v2.6.0
------------------------------
*October 29, 2020*

### Added
- New rounded flag icons.


v2.5.0
------------------------------
*October 26, 2020*

### Removed
- Redundant inline style attributes from NZ flag which were causing W3C validation errors.


v2.4.0
------------------------------
*October 22, 2020*

### Changed
- Ran updated SVGs through SVGOMG again with the clean ids option turned off.
- Renamed plus icons so that the sizes are consistent with the minus icon.

### Fixed
- Manually removing redundant inline style attributes which were causing W3C validation errors.
- Duplicate ids which were tidied up by SVGOMG.
- Local legend icons now showing rays.


v2.3.0
------------------------------
*October 12, 2020*

### Added
- Success and danger icons.

### Changed
- Info, warning and cross icons.


v2.2.0
------------------------------
*September 28, 2020*

### Added
- Bag icon


v2.1.0
------------------------------
*July 8, 2020*

### Changed
- Moved `classname` dependency into `devDependencies`.
- Removed watch flag from test npm script.

### Removed
- `core-js` dependency and polyfill.


v2.0.1
------------------------------
*June 25, 2020*

### Changed
- Small fix for the default new JE logo, as baseline of the `U` was incorrect.


v2.0.0
------------------------------
*June 19, 2020*

v2 Release! This converts `f-icons` into more of a library and API than what v1 was (see documentation for usage details).

These changes mean that we can build on top of this package to build framework specific iconsets such as `f-vue-icons` which use this API to pull in the icons and convert them into SFCs that can be fully tree-shaken as part of a build.

Also there are no more styles that come down as part of the `f-icons` package. The idea now is that the majority of icons exported are colour and size agnostic so that when pulled into a platform, they can be set to whatever values you like.

This restructuring has taken massive inspiration from the [Feather SVG icon library](https://github.com/feathericons/feather), including their API and build methods which are run on top of our icon-set.

### Changed
- **Breaking** – Updating from `v1` of `f-icons` may not be trivial in all instances. It's recommended that you only do so if absolutely needed (as you will lose the styling that comes for free in `v1`). We recommend upgrading to `v2` as part of a migration to using `f-vue-icons` which has ben developed alongside this package. For platforms still using `v1`, that branch will still be supported should additional icons need to be added before upgrading to `v2` is practical.
- Complete restructuring of how the icons are structured in the repo and exported (as detailed above).
- Logo's updated to new JET branding (and names normalised)
- Normalised star icons down to `star-filled` and `star-empty` (as additional colours can be implemented using SVG `fill`).


v2.0.0-beta.11
------------------------------
*June 8, 2020*

### Changed
- Menulog logo updated to new JET theme.


v2.0.0-beta.10
------------------------------
*February 5, 2020*

### Added
- Alcohol age and star filled orange icons.


v2.0.0-beta.9
------------------------------
*February 12, 2020*

### Added
- Add prepare command and update tests.

### Fixed
- Fix lint errors.


v2.0.0-beta.8
------------------------------
*February 5, 2020*

### Added
- Gift icon


v2.0.0-beta.7
------------------------------
*February 5, 2020*

### Added
- Alcohol age & star filled yellow icons.

### Changed
- Merged latest master.


v2.0.0-beta.6
------------------------------
*September 11, 2019*

### Added
- Profile icon


v2.0.0-beta.5
------------------------------
*September 4, 2019*

### Added
- Svgo prefixIds property for icon optimisation
- JE transparent logo and Menulog logo


v2.0.0-beta.4
------------------------------
*August 29, 2019*

### Fixed
- SVG attributes were being lowercased when some of them are case sensitive. Updated the HTML minifier to respect casing.


v2.0.0-beta.3
------------------------------
*August 28, 2019*

### Removed
- Removed `console.log` left in for testing.


v2.0.0-beta.2
------------------------------
*August 28, 2019*

### Added
- Viewbox attribute added so that the standard viewbox size set on the SVG isn't lost in the API calls


v2.0.0-beta.1
------------------------------
*August 22, 2019*

### Changed
- Complete restructuring of how the icons are structured in the repo and exported.
  This is so that when the module is exported, icons can be included in a variety of different ways for client side or server side includes.  The main thing this will give us is that the icons can then be exposed for use in Vue/React projects more effectively via a helper module.

  This restructuring has taken massive inspiration from the [Feather SVG icon library](https://github.com/feathericons/feather), including their API and build methods which are run on top of our icon-set.


v1.34.0
------------------------------
*June 06, 2020*

### Added
- Review stars for Menulog in Brand Orange


v1.33.0
------------------------------
*February 21, 2020*

### Added
- New size variation for map icon


v1.32.0
------------------------------
*February 10, 2020*

### Added
- Gift icon for offers v2


v1.31.0
------------------------------
*November 29, 2019*

### Added
- Review stars for Menulog

### Changed
- SVG for alcohol age


v1.30.0
------------------------------
*November 28, 2019*

### Added
- Alcohol age icon


v1.29.1
------------------------------
*Sept 13, 2019*

### Fixes
- Update to use v1 branch as master versions


v1.29.0
------------------------------
*July 17, 2019*

### Changed
- Renamed ids for various icons to not have overrides.
- Updated yarn.lock to fix some vulnerability issues.


v1.28.0
------------------------------
*June 27, 2019*

### Added
- Lunch icons.


v1.27.0
------------------------------
*June 18, 2019*

### Added
- Alert icon and styles.

### Changed
- Updated npm dependencies.


v1.26.0
------------------------------
*June 11, 2019*

### Fixed
- Updated local legend icon to remove rogue element


v1.25.0
------------------------------
*April 11, 2019*

### Added
- `c-icon--semiTransparent` class.
- `c-icon--basket--large` class.


v1.24.0
------------------------------
*April 9, 2019*

### Added
- `c-icon--chevron--left` class.


v1.23.0
------------------------------
*March 20, 2019*

### Fixed
- References to `@kickoff/utils.scss` changed to `@justeat/f-utils` in SCSS.


v1.22.0
------------------------------
*March 20, 2019*

### Changed
- Re-ordered card classes into alphabetical order.
- Added height to large minus icon class.

### Removed
- `width` and `height` attributes from SVGs.


v1.21.0
------------------------------
*March 20, 2019*

### Changed
- Switched from `@kickoff/utils.scss` to `@justeat/f-utils`.
- Updated npm dependencies.


v1.20.0
------------------------------
*March 12, 2019*

### Added
- Push left helper class.
- Large class for operator icons.


v1.19.1
------------------------------
*January 31, 2019*

### Changed
- Updated width of android icon
- Changed SVG images after running SVGOMG


v1.19.0
------------------------------
*January 31, 2019*

### Changed
- Updated app store icons to match international


v1.18.0
------------------------------
*January 25, 2019*

### Added
- DangerJS dependency.
- DangerJS travis config.
- Snyk badge to readme.

### Changed
- Narrow white rays image colour updated to be white rather than grey.
- Updated dependencies.
- Travis runs build on Node v8 & 10.
- Package requires Node v8 or above.


v1.17.0
------------------------------
*January 22, 2019*

### Added
- Added new order detail icons


v1.16.0
------------------------------
*November 16, 2018*

### Changed
- Renamed white rays

### Added
- Coloured rainbow rays


v1.15.1
------------------------------
*October 30, 2018*

### Changed
- Rename google-plus icon


v1.15.0
------------------------------
*October 26, 2018*

### Added
- Add social media icons


v1.14.1
------------------------------
*October 25, 2018*

### Changed
- Fix existing linting new line error


v1.14.0
------------------------------
*October 24, 2018*

### Added
- Stopwatch icon


v1.13.1
------------------------------
*October 17, 2018*

### Changed
- Fixed linting new line error


v1.13.0
------------------------------
*October 12, 2018*

### Added
- White Filled Clock Icon


v1.12.0
------------------------------
*September 20, 2018*

### Added
- Review Icon


v1.11.0
------------------------------
*September 17, 2018*

### Added
- Local legends Icon
- Local legends condensed Icon


v1.10.0
------------------------------
*September 11, 2018*

### Added
- Padlock Icon
- Collection bag Icon


v1.9.0
------------------------------
*September 7, 2018*

### Changed
- Removed slidersHorizontal SVGs fill color .


v1.8.0
------------------------------
*August 30, 2018*

### Changed
- Updated star SVGs to match latest designs.


v1.7.0
------------------------------
*August 30, 2018*

### Added
- Cash Icon
- Clock Icon

### Changed
- Remove path fill from sort amount icon
- Updated Map Pin icon


v1.6.0
------------------------------
*August 29, 2018*

### Changed
- Updated star colour to match global designs.


v1.5.0
------------------------------
*August 28, 2018*

### Added
- Decoration images.

### Changed
- Color modifiers target all child elements rather than only path (some of our SVGs use other elements such as circle).


v1.4.0
------------------------------
*August 24, 2018*

### Added
- Delivery icons & styles.
- Collection icon & styles.
- Offer icons & styles.
- Alert icon & styles.
- Basket icon & styles.
- Nut allergy icon & styles.
- Spicy icon & styles.
- Vegetarian icon & styles.

### Changed
- Removed fill attribute from some SVGs which will set their colour to black by default.


v1.3.0
------------------------------
*August 21, 2018*

### Added
- Added info icon and styles.


v1.2.0
------------------------------
*August 20, 2018*

### Added
- Added Travis config.
- Added Travis badge to readme.


v1.1.0
------------------------------
*August 10, 2018*

### Added
- Adding `c-icon--chevron--light` class which will change the fill colour of the chevron to white
- CODEOWNERS file added


v1.0.0
------------------------------
*August 10, 2018*

### Changed
- Bumped to version 1.0.0 for release version.


v0.12.0
------------------------------
*August 8, 2018*

### Added
- Speech bubble icon added.


v0.11.0
------------------------------
*July 4, 2018*

### Changed
- Update to star--empty.svg. SVG looks like it lost it's fill colour when last compressed.


v0.10.0
------------------------------
*June 25, 2018*

### Added
- Addition of map pin to tools.


v0.9.0
------------------------------
*May 29, 2018*

### Changed
- Update current icon set with new versions.


v0.8.0
------------------------------
*April 19, 2018*

### Added
- Added extendable class so image path can be easily reused rather than duplicated.


v0.7.0
------------------------------
*April 3, 2018*

### Fixed
- Fixed missing reference to ratings SCSS file.


v0.6.0
------------------------------
*March 28, 2018*


### Added
- Added stars for rating and size modifiers.


v0.5.0
------------------------------
*March 2, 2018*

### Added
- Added a green color modifier to the tick icon.


v0.4.0
------------------------------
*March 2, 2018*

### Added
- Interac icon added to cards


v0.3.4
------------------------------
*February 19, 2018*

### Added
- Added class to rotate chevron icon to face the right.


v0.2.4
------------------------------
*February 6, 2018*

### Added
- Added icons used on the search page.
    - general
        - forkAndSpoon
    - tools
        - eyeglass
        - slidersHorizontal
        - sortAmount


v0.2.3
------------------------------
*December 13, 2017*

### Added
- Added `flag.au.svg` and `flag.nz.svg`.


v0.2.2
------------------------------
*November 28, 2017*

### Added
- Added `stylelint` and `@justeat/stylelint-config-fozzie` packages.

### Changed
- Updated `lint` task to call stylelint.


v0.2.1
------------------------------
*November 21, 2017*

### Added
- Added card type icons


v0.2.0
------------------------------
*October 03, 2017*

### Added
- Imported and modified icon styles from Fozzie module.
- Set up eyeglass export for the new styles.

### Changed
- Rounded some of the icon width and heights.


v0.1.0
------------------------------
*September 27, 2017*

### Changed
- Renamed chevron icons to include the direction they point.
- Normalised `viewbox`, `fill`. `width`, and `height` attributes.

### Added
- Added appstore icons for all countries.
- Added width and height attributes to existing appstore icons.

### Removed
- Removed colour variation icons.


v0.0.1
------------------------------
*September 26, 2017*

### Added
- Added initial package files.
