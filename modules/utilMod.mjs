export function def(ma,ka,ha,wa){var[sa,ta]=Array.isArray(ma)?[ma,ka]:[[ma],[ka]];for(var[na]=[0];na<sa.length;++na)wa[sa[na]]=!eval(ha[na])?ta[na]:ta[na]['bind'](wa)}export function ref(ba,da,fa,pa){var ja=fa,qa=window.btoa(nul),la=!window.Array.isArray(ba)?da?ja[ba](...da):ja[ba]:qa;if(la!=qa)return(pa?undefined:la);for(var[ga]=[0];ga<ba.length;++ga)ja=da[ga]?ja[ba[ga]](...da[ga]):ja[ba[ga]];if(!pa)return(ja)}