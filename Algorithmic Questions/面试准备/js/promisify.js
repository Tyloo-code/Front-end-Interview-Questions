function promisify(f) {
  return function () {
      let args = Array.prototype.slice.call(arguments);
      return new Promise(function (resolve, reject) {
          args.push(function (err, result) {
              if (err) reject(err);
              else resolve(result);
          });
          f.apply(null, args);
      });
  }
}

