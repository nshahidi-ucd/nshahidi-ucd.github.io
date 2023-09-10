import {def as _def} from './modules/utilMod.mjs';

(function(){
    var tho = {},
    def = function(a,b,c){_def(a,b,c,tho)};
    def(['doc','test1','test2'],[window.document,3,function(){console.log(this.test1+7)}],'001');
    tho.test2();
})();