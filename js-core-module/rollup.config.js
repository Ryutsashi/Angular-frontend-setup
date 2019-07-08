export default {
    input: 'src/js-core.js',
    output: [
        {
            file: 'target/build/js-core.module.js',
            format: 'es'
        },
        {
            file: 'target/build/js-core.js',
            format: 'umd',
            name: 'jsCore'
        }
    ]
}