
/**
 * Source Controller
 */
var sourceLoaderController = function(){
    this.sources = [];
    this.currentIndex = 0;

    this.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
};


/**
 *
 * @param sources
 * @param currentIndex
 */
sourceLoaderController.prototype.importSources = function(sources,currentIndex){
    var _this = this;

    _this.currentIndex = currentIndex || _this.currentIndex;
    _this.sources = sources || _this.sources;
    
   
    if(_this.sources.length == 0 ){
        console.info('Please push your ref array your importSources class!');
        return;
    }

    if(!this.isArray(this.sources)){
        console.log('Please push your ref value as an array!');
        return;
    }


    try{
        if (_this.currentIndex < _this.sources.length) {

            _this.sources[_this.currentIndex].srctype = _this.sources[_this.currentIndex].srctype || false;
            _this.sources[_this.currentIndex].path = _this.sources[_this.currentIndex].path || false;


            if(_this.sources[_this.currentIndex].srctype === false ){
                console.info('Please write your source type with "srctype" key on your ' +_this.currentIndex+ " object");
                return;
            }

            if(_this.sources[_this.currentIndex].path === false ){
                console.info('Please write your href with "path" key on your ' +_this.currentIndex+ " object");
                return;
            }

            var currentSources = document.getElementsByTagName((_this.sources[_this.currentIndex].srctype == 'css') ? 'link' : 'script');
            var contentLoadedBefore = false;

            for (var i = 0; i < currentSources.length; i++) {

                if (_this.sources[_this.currentIndex].srctype == 'css' && currentSources[i].href == _this.sources[_this.currentIndex].path) {
                    //Current request was loaded before
                    contentLoadedBefore = true;
                    break;
                }
                else if (_this.sources[_this.currentIndex].srctype == 'script' && currentSources[i].src == _this.sources[_this.currentIndex].path) {
                    //Current request was loaded before
                    contentLoadedBefore = true;
                    break;
                }
            }
            if (!contentLoadedBefore) {
                var sourceItem = document.createElement((_this.sources[_this.currentIndex].srctype == 'css') ? 'link' : 'script');
                if (_this.sources[_this.currentIndex].srctype == 'css') {
                    sourceItem.rel = 'stylesheet';
                    sourceItem.type = 'text/css';

                    document.getElementsByTagName("head")[0].appendChild(sourceItem);
                    sourceItem.href = _this.sources[_this.currentIndex].path;

                    console.log('css: ' + _this.sources[_this.currentIndex].path + ' loaded!');

                    _this.importSources(_this.sources, _this.currentIndex + 1);
                }
                else if (_this.sources[_this.currentIndex].srctype == 'script') {
                    sourceItem.type = 'text/javascript';
                    sourceItem.src = _this.sources[_this.currentIndex].path;

                    sourceItem.onload = sourceItem.onreadystatechange = function () {

                        if (!this.readyState ||
                            this.readyState === "loaded" ||
                            this.readyState === "complete"){

                            console.log('js: ' + _this.sources[_this.currentIndex].path + ' loaded!');
                            _this.importSources(_this.sources, _this.currentIndex + 1);
                        }
                    };
                    document.getElementsByTagName("head")[0].appendChild(sourceItem);
                }
            }
            else {
                _this.importSources(_this.sources, _this.currentIndex + 1);
            }
        }
        else{
            console.log('everything appended successfully!');
        }
    }catch (e){
        console.log('something unexpected happened!' + e)
    }


};

