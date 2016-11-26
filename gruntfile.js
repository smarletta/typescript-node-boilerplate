module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            src: [
                'main/**/*.js',
                'main/**/*.js.map',
            ],
            doc: [
                'doc/**/*'
            ],
            coverage: [
                'coverage/**/*'
            ]
        },
        mocha_istanbul: {
            src: {
                src: 'main/test',
                options: {
                    mask: '*.spec.js'
                }
            }
        },
        remapIstanbul: {
            build: {
                src: 'coverage/coverage.json',
                options: {
                    reports: {
                        'lcovhtml': 'html-report',
                        'json': 'coverage/coverage.json'
                    }
                }
            }
        },
        ts: {
            default: {
                options: {
                    tsconfig: true
                },
                include: [
                    'main/**/*.ts'
                ],
                exclude: [
                    'node_modules'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('remap-istanbul');
};