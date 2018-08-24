const SVGO = require('svgo');
const FS = require('fs');

const modifiedFiles = danger.git.modified_files;
const newFiles = danger.git.created_files;
const PRFiles = modifiedFiles.concat(newFiles);

const bodyAndTitle = (danger.github.pr.body + danger.github.pr.title).toLowerCase();

const isTrivial = bodyAndTitle.includes('#trivial');

function formatBytes(bytes) {
    if(bytes < 1024) return bytes + " Bytes";
    else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + " KB";
};

if (!isTrivial) {
    // Fail if there isn’t a CHANGELOG entry – should update for every PR
    const hasChangelogChanged = modifiedFiles.includes('CHANGELOG.md')
    if (!hasChangelogChanged) {
        const changelogLink = 'https://github.com/justeat/gulp-build-fozzie/blob/master/CHANGELOG.md';
        fail(`:memo: Please include a CHANGELOG entry. You can find the current version at <a href="${changelogLink}">CHANGELOG.md</a>`);
    }

    // Check for version update
    const hasPackageJsonChanged = modifiedFiles.includes('package.json');
    const packageDiff = danger.git.JSONDiffForFile('package.json');

    packageDiff.then(result => {
        const packageVersionChanged = !hasPackageJsonChanged || (hasPackageJsonChanged && !result.version);
        if (packageVersionChanged) {
            const semverLink = 'https://docs.npmjs.com/getting-started/semantic-versioning';
            /* eslint-disable no-console */console.log('Versioning Missing'); console.log(hasPackageJsonChanged, result);/* eslint-enable no-console */
            fail(`:exclamation: This PR should include a <a href="${semverLink}">SEMVER</a> version bump, so that it can be published once merged.`);
        }
    }, err => {
        /* eslint-disable no-console */
        console.log(err);
        /* eslint-enable no-console */
    });

    // Update the readme when config changes
    const taskFiles = modifiedFiles.filter(path => path.startsWith('tasks'));
    const configChanged = modifiedFiles.includes('config.js');
    const readmeChanged = modifiedFiles.includes('README.md');

    if ((taskFiles.length > 0 || configChanged) && !readmeChanged) {
        warn(':memo: If you’ve changed the config or task files, please check that the README is still up-to-date.');
    }


    // Message on deletions
    if (danger.github.pr.deletions > danger.github.pr.additions) {
        message(':fire: :clap: You’re a deletion machine!');
    }


    const touchedSVGFiles = PRFiles.filter(f => f.includes(".svg"));
    // Check if SVG files have been added or edited
    if (touchedSVGFiles.length > 0) {
        svgo = new SVGO({
            plugins: [
                { cleanupAttrs: true },
                { removeDoctype: true },
                { removeXMLProcInst: true },
                { removeComments: true },
                { removeMetadata: true },
                { removeTitle: true },
                { removeDesc: true },
                { removeUselessDefs: true },
                { removeEditorsNSData: true },
                { removeEmptyAttrs: true },
                { removeHiddenElems: true },
                { removeEmptyText: true },
                { removeEmptyContainers: true },
                { removeViewBox: false },
                { cleanupEnableBackground: true },
                { convertStyleToAttrs: true },
                { convertColors: true },
                { convertPathData: true },
                { convertTransform: true },
                { removeUnknownsAndDefaults: true },
                { removeNonInheritableGroupAttrs: true },
                { removeUselessStrokeAndFill: true },
                { removeUnusedNS: true },
                { cleanupIDs: true },
                { cleanupNumericValues: true },
                { moveElemsAttrsToGroup: true },
                { moveGroupAttrsToElems: true },
                { collapseGroups: true },
                { removeRasterImages: false },
                { mergePaths: true },
                { convertShapeToPath: true },
                { sortAttrs: true },
                { removeDimensions: true }
            ]
        });

        let svgFilesOutput = "";
        let preBytes, postBytes;
        let preFileSize, postFileSize;

        touchedSVGFiles.forEach(svg => {
            FS.readFile(svg, 'utf8', (err, data) => {
                if (err) { throw err; }
                preBytes = data.length;
                svgo.optimize(data, {path: svg}).then(result => {
                    // console.log(result);
                    postBytes = result.length;
                });
            });

            preFileSize = formatBytes(preBytes);
            postFileSize = formatBytes(postBytes);

            if (postBytes < preBytes) {
                console.log(`File ${svg} can be reduced in size from ${preFileSize} to ${postFileSize}`);
                svgFilesOutput += `\n\`${svg}\` | ${preFileSize} | ${postFileSize}`;
            }
        });

        if (svgFilesOutput.length > 0) {
            warn("Please run the following files through Jake Archibald's [SVGOMG](https://jakearchibald.github.io/svgomg/) tool." +
            "\nFile | Current | Optimised \n---- | ---- | ----" + svgFilesOutput);
        }
    }
}
