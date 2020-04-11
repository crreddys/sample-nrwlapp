module.exports = {
  name: 'mysite',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mysite',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
