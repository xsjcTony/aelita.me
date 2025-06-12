const MINOR_PACKAGES = new Set([
  '@types/node',
])


const PATCH_PACKAGES = new Set([])


module.exports = {
  format: 'group',
  interactive: true,
  target: (packageName) => {
    if (MINOR_PACKAGES.has(packageName))
      return 'minor'

    if (PATCH_PACKAGES.has(packageName))
      return 'patch'

    return 'latest'
  },
}
