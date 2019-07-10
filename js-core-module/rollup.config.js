export default {
    input: 'src/js-core.js',
    output: [
        // I'm not exactly sure which one is correct
        {
            // I like this modern format and the modern browsers seem to support it
            // However, it may be of no consequence since...
            file: 'target/build/js-core.module.js',
            format: 'es'
        },
        {
            // I heard that angular compiles into umd modules, but I haven't checked it out myself yet.
            // Which means that compiling as umd at least keeps it consistent
            file: 'target/build/js-core.js',
            format: 'umd',
            name: 'jsCore'
        }
    ]
}