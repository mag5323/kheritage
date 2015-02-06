d3.json('data/heritage.json')
  .get(function(error, data) {
    var heritages = data;

    for (key in heritages) {
      var descs = heritages[key].Heritage_desc.split('\n');

      for (key in descs) {
        var desc = descs[key].split('：');
      }
    }
  });
