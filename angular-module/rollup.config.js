export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/angular-module.js',
            format: 'umd',
            name: 'angularModule'
        }
    ],
    globals: {
        // some angular-related globals will probably go here
        "" : ""
    }
}