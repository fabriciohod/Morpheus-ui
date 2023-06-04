module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    require('path').join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],
  plugins: [
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
    require('@tailwindcss/forms'),
  ]
};
