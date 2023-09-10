import {def as _def, ref as _ref} from './utilMod.mjs';

(function(){
    var tho = {},
    [def,ref]=[function(a,b,c){_def(a,b,c,tho)},function(a,b,c){_ref(a,b,tho,c)}];
    def(['doc','makel','setattrs','setcinf','addel'],[window.document,function(a){return(ref(['doc','createElement'],[0,[a]]));},function(a,b){for(var c in a)_ref('setAttribute',[c,a[c]],b,true);},function(){var[e,f,g]=[{},arguments[0],_ref('slice',[1],[...arguments])];_def(['class','id','name','data-for'],g,'0000',e);ref('setattrs',[f,e],true);},function(a,b){var[c]=[b?b:ref(['doc','body'],[0,0])];_ref('appendChild',[a],c,true);}],'01011');var test1=ref('makel',['span']);ref('setcinf',[test1,'test-class','test_id','testname','testHost'],1);console.log(tho);console.log(test1);ref('addel',[test1]);
})();