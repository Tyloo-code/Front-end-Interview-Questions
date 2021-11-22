;(function(){
  var Waterfall = function(opt){
    this.el = document.getElementsByClassName(opt.el)[0];
    this.oItems = this.el.getElementsByTagName('div');
    this.column = opt.column;
    this.gap = opt.gap;
    this.itemWidth = (this.el.offsetWidth - (this.column - 1) * this.gap) / this.column;
    this.heightArr = [];
    
    this.init();
  }

  Waterfall.prototype.init = function(){
    this.render();
  }

  Waterfall.prototype.render = function(){
    var item = null,
        minIdx = -1;
    for(var i = 0; i < this.oItems.length; i++){
      item = this.oItems[i];
      item.style.width = this.itemWidth + 'px';

      if(i < this.column){
        item.style.top = 0;
        item.style.left = (this.itemWidth + this.gap) * i + 'px';
        this.heightArr.push(item.offsetHeight);
      }else{
        var minIdx = getMinIdx(this.heightArr);
        item.style.top = this.heightArr[minIdx] + this.gap +'px';
        item.style.left = this.oItems[minIdx].offsetLeft + 'px';
    

        this.heightArr[minIdx] += item.offsetHeight + this.gap;
      }
      console.log(this.heightArr);
    }

    function getMinIdx(arr){
      return arr.indexOf(Math.min.apply(null, arr));
    }
  }
  window.Waterfall = Waterfall;
})();