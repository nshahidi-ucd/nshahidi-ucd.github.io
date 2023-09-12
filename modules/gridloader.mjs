import {def as _def, ref as _ref} from './utilMod.mjs';
export var[Grids]=[{}];

(function(){
    var tho = {},
    [def,ref]=[function(a,b,c){_def(a,b,c,tho)},function(a,b,c){return(_ref(a,b,tho,c))}];
    def(['doc','makel','setattrs','setcinff','addel'],[window.document,function(a){return(ref(['doc','createElement'],[0,[a]]));},function(a,b){for(var c in a)_ref('setAttribute',[c,a[c]],b,true);},function(){var[e,f,g]=[{},arguments[0],_ref('slice',[1],[...arguments])];_def(['class','id','name','data-for','data-coordname'],g,'00000',e);ref('setattrs',[e,f],true);},function(a,b){var[c]=[b?b:ref(['doc','body'],[0,0])];_ref('appendChild',[a],c,true);}],'01011');def(['ilist','indmat','nmeget'],[function(a,b){return(b&&_ref('length',false,a)==1?a[0]:a)},function(a,b,c){return(c[_ref('indexOf',[a],b)])},function(a,b){return(ref('ilist',[ref(['doc','getElementsByName'],[0,[a]]),b]))}],'001');def(['numnames','numdigs','letnames','letlets','gridels','setgridels'],[['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'],['1','2','3','4','5','6','7','8','9','10'],['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Gulf','Hotel','India','Juliet'],['A','B','C','D','E','F','G','H','I','J'],[],function(){var[a]=[ref('gridels',null)];for(var[b]=[0];b<10;++b)_ref('push',[ref('nmeget',[ref('numnames',null)[b]])],a);}],'000001');def(['setsquares'],[function(){for(var[a]=[0];a<10;++a){var[b]=[ref('gridels',0)[a]];for(var c of b){var[d,e]=[ref('numnames',0)[a],ref('numdigs',0)[a]],[f,g]=[_ref(['parentElement','id'],[0,0],c)];if(typeof(_ref(f,0,Grids))!='undefined')_def(f,{},'0',Grids);for(g=0;g<10;++g){var[h,i]=[ref('letnames',0)[g],ref('letlets',0)[g]],[j,k]=[h+' '+d,i+e],[l]=[f+'_'+k],[m]=[ref('makel',['div'])];ref('setcinff',[m,'grid-space',l,k,f,j],true);ref('addel',[m,c],true);_def(k,m,'0',_ref(f,0,Grids));}}}}],'1');ref('setgridels',[],true);ref('setsquares',[],true);
})();