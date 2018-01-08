// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/
      }
    },

  stylesheets: {
    joinTo: {
    'css/vendor.css': /^(?!app)/,
    'css/app.css': /^app/
  }
}
};

exports.plugins={
  browserSync: {
    files: [
      '*'
    ]
  },
  copycat: {
    "fonts": ["node_modules/font-awesome/fonts"]
  },
  sass: {
    options: {
      includePaths: [
        'node_modules/bulma',
        'node_modules/font-awesome/scss'
      ]
    }
  }
}

exports.npm={
  enabled: true,
  styles: {
      "normalize.css":['normalize.css']
  }
};
