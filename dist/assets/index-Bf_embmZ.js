(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $a={exports:{}},wl;function sf(){return wl||(wl=1,function(n){var e=Object.prototype.hasOwnProperty,t="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(t=!1));function r(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function s(l,c,u,d,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var _=new r(u,d||l,f),S=t?t+c:c;return l._events[S]?l._events[S].fn?l._events[S]=[l._events[S],_]:l._events[S].push(_):(l._events[S]=_,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new i:delete l._events[c]}function a(){this._events=new i,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)e.call(u,d)&&c.push(t?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=t?t+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var f=0,_=d.length,S=new Array(_);f<_;f++)S[f]=d[f].fn;return S},a.prototype.listenerCount=function(c){var u=t?t+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,f,_,S){var E=t?t+c:c;if(!this._events[E])return!1;var p=this._events[E],h=arguments.length,R,M;if(p.fn){switch(p.once&&this.removeListener(c,p.fn,void 0,!0),h){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,d),!0;case 4:return p.fn.call(p.context,u,d,f),!0;case 5:return p.fn.call(p.context,u,d,f,_),!0;case 6:return p.fn.call(p.context,u,d,f,_,S),!0}for(M=1,R=new Array(h-1);M<h;M++)R[M-1]=arguments[M];p.fn.apply(p.context,R)}else{var L=p.length,H;for(M=0;M<L;M++)switch(p[M].once&&this.removeListener(c,p[M].fn,void 0,!0),h){case 1:p[M].fn.call(p[M].context);break;case 2:p[M].fn.call(p[M].context,u);break;case 3:p[M].fn.call(p[M].context,u,d);break;case 4:p[M].fn.call(p[M].context,u,d,f);break;default:if(!R)for(H=1,R=new Array(h-1);H<h;H++)R[H-1]=arguments[H];p[M].fn.apply(p[M].context,R)}}return!0},a.prototype.on=function(c,u,d){return s(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return s(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,f){var _=t?t+c:c;if(!this._events[_])return this;if(!u)return o(this,_),this;var S=this._events[_];if(S.fn)S.fn===u&&(!f||S.once)&&(!d||S.context===d)&&o(this,_);else{for(var E=0,p=[],h=S.length;E<h;E++)(S[E].fn!==u||f&&!S[E].once||d&&S[E].context!==d)&&p.push(S[E]);p.length?this._events[_]=p.length===1?p[0]:p:o(this,_)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=t?t+c:c,this._events[u]&&o(this,u)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a}($a)),$a.exports}var af=sf(),of=uu(af),wt;(function(n){n.assertEqual=r=>r;function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const s={};for(const o of r)s[o]=o;return s},n.getValidEnumValues=r=>{const s=n.objectKeys(r).filter(a=>typeof r[r[a]]!="number"),o={};for(const a of s)o[a]=r[a];return n.objectValues(o)},n.objectValues=r=>n.objectKeys(r).map(function(s){return r[s]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const s=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&s.push(o);return s},n.find=(r,s)=>{for(const o of r)if(s(o))return o},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function i(r,s=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(s)}n.joinValues=i,n.jsonStringifyReplacer=(r,s)=>typeof s=="bigint"?s.toString():s})(wt||(wt={}));var Oo;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Oo||(Oo={}));const Fe=wt.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Di=n=>{switch(typeof n){case"undefined":return Fe.undefined;case"string":return Fe.string;case"number":return isNaN(n)?Fe.nan:Fe.number;case"boolean":return Fe.boolean;case"function":return Fe.function;case"bigint":return Fe.bigint;case"symbol":return Fe.symbol;case"object":return Array.isArray(n)?Fe.array:n===null?Fe.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?Fe.promise:typeof Map<"u"&&n instanceof Map?Fe.map:typeof Set<"u"&&n instanceof Set?Fe.set:typeof Date<"u"&&n instanceof Date?Fe.date:Fe.object;default:return Fe.unknown}},_e=wt.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),lf=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");class Dn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(s){return s.message},i={_errors:[]},r=s=>{for(const o of s.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)i._errors.push(t(o));else{let a=i,l=0;for(;l<o.path.length;){const c=o.path[l];l===o.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(t(o))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return r(this),i}static assert(e){if(!(e instanceof Dn))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,wt.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}Dn.create=n=>new Dn(n);const Wr=(n,e)=>{let t;switch(n.code){case _e.invalid_type:n.received===Fe.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case _e.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,wt.jsonStringifyReplacer)}`;break;case _e.unrecognized_keys:t=`Unrecognized key(s) in object: ${wt.joinValues(n.keys,", ")}`;break;case _e.invalid_union:t="Invalid input";break;case _e.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${wt.joinValues(n.options)}`;break;case _e.invalid_enum_value:t=`Invalid enum value. Expected ${wt.joinValues(n.options)}, received '${n.received}'`;break;case _e.invalid_arguments:t="Invalid function arguments";break;case _e.invalid_return_type:t="Invalid function return type";break;case _e.invalid_date:t="Invalid date";break;case _e.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:wt.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case _e.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case _e.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case _e.custom:t="Invalid input";break;case _e.invalid_intersection_types:t="Intersection results could not be merged";break;case _e.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case _e.not_finite:t="Number must be finite";break;default:t=e.defaultError,wt.assertNever(n)}return{message:t}};let du=Wr;function cf(n){du=n}function Aa(){return du}const ba=n=>{const{data:e,path:t,errorMaps:i,issueData:r}=n,s=[...t,...r.path||[]],o={...r,path:s};if(r.message!==void 0)return{...r,path:s,message:r.message};let a="";const l=i.filter(c=>!!c).slice().reverse();for(const c of l)a=c(o,{data:e,defaultError:a}).message;return{...r,path:s,message:a}},uf=[];function De(n,e){const t=Aa(),i=ba({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===Wr?void 0:Wr].filter(r=>!!r)});n.common.issues.push(i)}class pn{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const r of t){if(r.status==="aborted")return ot;r.status==="dirty"&&e.dirty(),i.push(r.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const r of t){const s=await r.key,o=await r.value;i.push({key:s,value:o})}return pn.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const r of t){const{key:s,value:o}=r;if(s.status==="aborted"||o.status==="aborted")return ot;s.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof o.value<"u"||r.alwaysSet)&&(i[s.value]=o.value)}return{status:e.value,value:i}}}const ot=Object.freeze({status:"aborted"}),Br=n=>({status:"dirty",value:n}),Sn=n=>({status:"valid",value:n}),Fo=n=>n.status==="aborted",Bo=n=>n.status==="dirty",Es=n=>n.status==="valid",Ss=n=>typeof Promise<"u"&&n instanceof Promise;function wa(n,e,t,i){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function fu(n,e,t,i,r){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var Ye;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(Ye||(Ye={}));var hs,ps;class si{constructor(e,t,i,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Rl=(n,e)=>{if(Es(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Dn(n.common.issues);return this._error=t,this._error}}};function _t(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:r}=n;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,a)=>{var l,c;const{message:u}=n;return o.code==="invalid_enum_value"?{message:u??a.defaultError}:typeof a.data>"u"?{message:(l=u??i)!==null&&l!==void 0?l:a.defaultError}:o.code!=="invalid_type"?{message:a.defaultError}:{message:(c=u??t)!==null&&c!==void 0?c:a.defaultError}},description:r}}class xt{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Di(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Di(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new pn,ctx:{common:e.parent.common,data:e.data,parsedType:Di(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Ss(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const r={common:{issues:[],async:(i=t==null?void 0:t.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Di(e)},s=this._parseSync({data:e,path:r.path,parent:r});return Rl(r,s)}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Di(e)},r=this._parse({data:e,path:i.path,parent:i}),s=await(Ss(r)?r:Promise.resolve(r));return Rl(i,s)}refine(e,t){const i=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,s)=>{const o=e(r),a=()=>s.addIssue({code:_e.custom,...i(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,t){return this._refinement((i,r)=>e(i)?!0:(r.addIssue(typeof t=="function"?t(i,r):t),!1))}_refinement(e){return new $n({schema:this,typeName:st.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ii.create(this,this._def)}nullable(){return Wi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Kn.create(this,this._def)}promise(){return qr.create(this,this._def)}or(e){return Ts.create([this,e],this._def)}and(e){return As.create(this,e,this._def)}transform(e){return new $n({..._t(this._def),schema:this,typeName:st.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Is({..._t(this._def),innerType:this,defaultValue:t,typeName:st.ZodDefault})}brand(){return new el({typeName:st.ZodBranded,type:this,..._t(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Ps({..._t(this._def),innerType:this,catchValue:t,typeName:st.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Fs.create(this,e)}readonly(){return Ns.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const df=/^c[^\s-]{8,}$/i,ff=/^[0-9a-z]+$/,hf=/^[0-9A-HJKMNP-TV-Z]{26}$/,pf=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,mf=/^[a-z0-9_-]{21}$/i,_f=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,gf=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,vf="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ja;const Ef=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Sf=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,xf=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,hu="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",yf=new RegExp(`^${hu}$`);function pu(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function Mf(n){return new RegExp(`^${pu(n)}$`)}function mu(n){let e=`${hu}T${pu(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Tf(n,e){return!!((e==="v4"||!e)&&Ef.test(n)||(e==="v6"||!e)&&Sf.test(n))}class jn extends xt{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Fe.string){const s=this._getOrReturnCtx(e);return De(s,{code:_e.invalid_type,expected:Fe.string,received:s.parsedType}),ot}const i=new pn;let r;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(r=this._getOrReturnCtx(e,r),De(r,{code:_e.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(r=this._getOrReturnCtx(e,r),De(r,{code:_e.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){const o=e.data.length>s.value,a=e.data.length<s.value;(o||a)&&(r=this._getOrReturnCtx(e,r),o?De(r,{code:_e.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):a&&De(r,{code:_e.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")gf.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"email",code:_e.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")Ja||(Ja=new RegExp(vf,"u")),Ja.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"emoji",code:_e.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")pf.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"uuid",code:_e.invalid_string,message:s.message}),i.dirty());else if(s.kind==="nanoid")mf.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"nanoid",code:_e.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")df.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"cuid",code:_e.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")ff.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"cuid2",code:_e.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")hf.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"ulid",code:_e.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),De(r,{validation:"url",code:_e.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"regex",code:_e.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(r=this._getOrReturnCtx(e,r),De(r,{code:_e.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(r=this._getOrReturnCtx(e,r),De(r,{code:_e.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(r=this._getOrReturnCtx(e,r),De(r,{code:_e.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?mu(s).test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{code:_e.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="date"?yf.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{code:_e.invalid_string,validation:"date",message:s.message}),i.dirty()):s.kind==="time"?Mf(s).test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{code:_e.invalid_string,validation:"time",message:s.message}),i.dirty()):s.kind==="duration"?_f.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"duration",code:_e.invalid_string,message:s.message}),i.dirty()):s.kind==="ip"?Tf(e.data,s.version)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"ip",code:_e.invalid_string,message:s.message}),i.dirty()):s.kind==="base64"?xf.test(e.data)||(r=this._getOrReturnCtx(e,r),De(r,{validation:"base64",code:_e.invalid_string,message:s.message}),i.dirty()):wt.assertNever(s);return{status:i.value,value:e.data}}_regex(e,t,i){return this.refinement(r=>e.test(r),{validation:t,code:_e.invalid_string,...Ye.errToObj(i)})}_addCheck(e){return new jn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Ye.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Ye.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Ye.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Ye.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...Ye.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Ye.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Ye.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Ye.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...Ye.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Ye.errToObj(e)})}datetime(e){var t,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,local:(i=e==null?void 0:e.local)!==null&&i!==void 0?i:!1,...Ye.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...Ye.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...Ye.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Ye.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...Ye.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Ye.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Ye.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Ye.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Ye.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Ye.errToObj(t)})}nonempty(e){return this.min(1,Ye.errToObj(e))}trim(){return new jn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new jn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new jn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}jn.create=n=>{var e;return new jn({checks:[],typeName:st.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,..._t(n)})};function Af(n,e){const t=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,r=t>i?t:i,s=parseInt(n.toFixed(r).replace(".","")),o=parseInt(e.toFixed(r).replace(".",""));return s%o/Math.pow(10,r)}class Hi extends xt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Fe.number){const s=this._getOrReturnCtx(e);return De(s,{code:_e.invalid_type,expected:Fe.number,received:s.parsedType}),ot}let i;const r=new pn;for(const s of this._def.checks)s.kind==="int"?wt.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),De(i,{code:_e.invalid_type,expected:"integer",received:"float",message:s.message}),r.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),De(i,{code:_e.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),De(i,{code:_e.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="multipleOf"?Af(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),De(i,{code:_e.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),De(i,{code:_e.not_finite,message:s.message}),r.dirty()):wt.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Ye.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ye.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ye.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ye.toString(t))}setLimit(e,t,i,r){return new Hi({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Ye.toString(r)}]})}_addCheck(e){return new Hi({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Ye.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Ye.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Ye.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Ye.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Ye.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ye.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Ye.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Ye.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Ye.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&wt.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Hi.create=n=>new Hi({checks:[],typeName:st.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,..._t(n)});class zi extends xt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==Fe.bigint){const s=this._getOrReturnCtx(e);return De(s,{code:_e.invalid_type,expected:Fe.bigint,received:s.parsedType}),ot}let i;const r=new pn;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),De(i,{code:_e.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),De(i,{code:_e.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),De(i,{code:_e.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):wt.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Ye.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ye.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ye.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ye.toString(t))}setLimit(e,t,i,r){return new zi({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Ye.toString(r)}]})}_addCheck(e){return new zi({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Ye.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Ye.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Ye.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Ye.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ye.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}zi.create=n=>{var e;return new zi({checks:[],typeName:st.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,..._t(n)})};class xs extends xt{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Fe.boolean){const i=this._getOrReturnCtx(e);return De(i,{code:_e.invalid_type,expected:Fe.boolean,received:i.parsedType}),ot}return Sn(e.data)}}xs.create=n=>new xs({typeName:st.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,..._t(n)});class dr extends xt{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Fe.date){const s=this._getOrReturnCtx(e);return De(s,{code:_e.invalid_type,expected:Fe.date,received:s.parsedType}),ot}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return De(s,{code:_e.invalid_date}),ot}const i=new pn;let r;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(r=this._getOrReturnCtx(e,r),De(r,{code:_e.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(r=this._getOrReturnCtx(e,r),De(r,{code:_e.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):wt.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new dr({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Ye.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Ye.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}dr.create=n=>new dr({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:st.ZodDate,..._t(n)});class Ra extends xt{_parse(e){if(this._getType(e)!==Fe.symbol){const i=this._getOrReturnCtx(e);return De(i,{code:_e.invalid_type,expected:Fe.symbol,received:i.parsedType}),ot}return Sn(e.data)}}Ra.create=n=>new Ra({typeName:st.ZodSymbol,..._t(n)});class ys extends xt{_parse(e){if(this._getType(e)!==Fe.undefined){const i=this._getOrReturnCtx(e);return De(i,{code:_e.invalid_type,expected:Fe.undefined,received:i.parsedType}),ot}return Sn(e.data)}}ys.create=n=>new ys({typeName:st.ZodUndefined,..._t(n)});class Ms extends xt{_parse(e){if(this._getType(e)!==Fe.null){const i=this._getOrReturnCtx(e);return De(i,{code:_e.invalid_type,expected:Fe.null,received:i.parsedType}),ot}return Sn(e.data)}}Ms.create=n=>new Ms({typeName:st.ZodNull,..._t(n)});class Xr extends xt{constructor(){super(...arguments),this._any=!0}_parse(e){return Sn(e.data)}}Xr.create=n=>new Xr({typeName:st.ZodAny,..._t(n)});class sr extends xt{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Sn(e.data)}}sr.create=n=>new sr({typeName:st.ZodUnknown,..._t(n)});class Ti extends xt{_parse(e){const t=this._getOrReturnCtx(e);return De(t,{code:_e.invalid_type,expected:Fe.never,received:t.parsedType}),ot}}Ti.create=n=>new Ti({typeName:st.ZodNever,..._t(n)});class La extends xt{_parse(e){if(this._getType(e)!==Fe.undefined){const i=this._getOrReturnCtx(e);return De(i,{code:_e.invalid_type,expected:Fe.void,received:i.parsedType}),ot}return Sn(e.data)}}La.create=n=>new La({typeName:st.ZodVoid,..._t(n)});class Kn extends xt{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),r=this._def;if(t.parsedType!==Fe.array)return De(t,{code:_e.invalid_type,expected:Fe.array,received:t.parsedType}),ot;if(r.exactLength!==null){const o=t.data.length>r.exactLength.value,a=t.data.length<r.exactLength.value;(o||a)&&(De(t,{code:o?_e.too_big:_e.too_small,minimum:a?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),i.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(De(t,{code:_e.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),i.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(De(t,{code:_e.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((o,a)=>r.type._parseAsync(new si(t,o,t.path,a)))).then(o=>pn.mergeArray(i,o));const s=[...t.data].map((o,a)=>r.type._parseSync(new si(t,o,t.path,a)));return pn.mergeArray(i,s)}get element(){return this._def.type}min(e,t){return new Kn({...this._def,minLength:{value:e,message:Ye.toString(t)}})}max(e,t){return new Kn({...this._def,maxLength:{value:e,message:Ye.toString(t)}})}length(e,t){return new Kn({...this._def,exactLength:{value:e,message:Ye.toString(t)}})}nonempty(e){return this.min(1,e)}}Kn.create=(n,e)=>new Kn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:st.ZodArray,..._t(e)});function Fr(n){if(n instanceof Wt){const e={};for(const t in n.shape){const i=n.shape[t];e[t]=ii.create(Fr(i))}return new Wt({...n._def,shape:()=>e})}else return n instanceof Kn?new Kn({...n._def,type:Fr(n.element)}):n instanceof ii?ii.create(Fr(n.unwrap())):n instanceof Wi?Wi.create(Fr(n.unwrap())):n instanceof ai?ai.create(n.items.map(e=>Fr(e))):n}class Wt extends xt{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=wt.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==Fe.object){const c=this._getOrReturnCtx(e);return De(c,{code:_e.invalid_type,expected:Fe.object,received:c.parsedType}),ot}const{status:i,ctx:r}=this._processInputParams(e),{shape:s,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Ti&&this._def.unknownKeys==="strip"))for(const c in r.data)o.includes(c)||a.push(c);const l=[];for(const c of o){const u=s[c],d=r.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new si(r,d,r.path,c)),alwaysSet:c in r.data})}if(this._def.catchall instanceof Ti){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(c==="strict")a.length>0&&(De(r,{code:_e.unrecognized_keys,keys:a}),i.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of a){const d=r.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new si(r,d,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const d=await u.key,f=await u.value;c.push({key:d,value:f,alwaysSet:u.alwaysSet})}return c}).then(c=>pn.mergeObjectSync(i,c)):pn.mergeObjectSync(i,l)}get shape(){return this._def.shape()}strict(e){return Ye.errToObj,new Wt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var r,s,o,a;const l=(o=(s=(r=this._def).errorMap)===null||s===void 0?void 0:s.call(r,t,i).message)!==null&&o!==void 0?o:i.defaultError;return t.code==="unrecognized_keys"?{message:(a=Ye.errToObj(e).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new Wt({...this._def,unknownKeys:"strip"})}passthrough(){return new Wt({...this._def,unknownKeys:"passthrough"})}extend(e){return new Wt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Wt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:st.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Wt({...this._def,catchall:e})}pick(e){const t={};return wt.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new Wt({...this._def,shape:()=>t})}omit(e){const t={};return wt.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new Wt({...this._def,shape:()=>t})}deepPartial(){return Fr(this)}partial(e){const t={};return wt.objectKeys(this.shape).forEach(i=>{const r=this.shape[i];e&&!e[i]?t[i]=r:t[i]=r.optional()}),new Wt({...this._def,shape:()=>t})}required(e){const t={};return wt.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof ii;)s=s._def.innerType;t[i]=s}}),new Wt({...this._def,shape:()=>t})}keyof(){return _u(wt.objectKeys(this.shape))}}Wt.create=(n,e)=>new Wt({shape:()=>n,unknownKeys:"strip",catchall:Ti.create(),typeName:st.ZodObject,..._t(e)});Wt.strictCreate=(n,e)=>new Wt({shape:()=>n,unknownKeys:"strict",catchall:Ti.create(),typeName:st.ZodObject,..._t(e)});Wt.lazycreate=(n,e)=>new Wt({shape:n,unknownKeys:"strip",catchall:Ti.create(),typeName:st.ZodObject,..._t(e)});class Ts extends xt{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function r(s){for(const a of s)if(a.result.status==="valid")return a.result;for(const a of s)if(a.result.status==="dirty")return t.common.issues.push(...a.ctx.common.issues),a.result;const o=s.map(a=>new Dn(a.ctx.common.issues));return De(t,{code:_e.invalid_union,unionErrors:o}),ot}if(t.common.async)return Promise.all(i.map(async s=>{const o={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:o}),ctx:o}})).then(r);{let s;const o=[];for(const l of i){const c={...t,common:{...t.common,issues:[]},parent:null},u=l._parseSync({data:t.data,path:t.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!s&&(s={result:u,ctx:c}),c.common.issues.length&&o.push(c.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const a=o.map(l=>new Dn(l));return De(t,{code:_e.invalid_union,unionErrors:a}),ot}}get options(){return this._def.options}}Ts.create=(n,e)=>new Ts({options:n,typeName:st.ZodUnion,..._t(e)});const gi=n=>n instanceof ws?gi(n.schema):n instanceof $n?gi(n.innerType()):n instanceof Rs?[n.value]:n instanceof Vi?n.options:n instanceof Ls?wt.objectValues(n.enum):n instanceof Is?gi(n._def.innerType):n instanceof ys?[void 0]:n instanceof Ms?[null]:n instanceof ii?[void 0,...gi(n.unwrap())]:n instanceof Wi?[null,...gi(n.unwrap())]:n instanceof el||n instanceof Ns?gi(n.unwrap()):n instanceof Ps?gi(n._def.innerType):[];class ka extends xt{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Fe.object)return De(t,{code:_e.invalid_type,expected:Fe.object,received:t.parsedType}),ot;const i=this.discriminator,r=t.data[i],s=this.optionsMap.get(r);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(De(t,{code:_e.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),ot)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const r=new Map;for(const s of t){const o=gi(s.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(r.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);r.set(a,s)}}return new ka({typeName:st.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,..._t(i)})}}function ko(n,e){const t=Di(n),i=Di(e);if(n===e)return{valid:!0,data:n};if(t===Fe.object&&i===Fe.object){const r=wt.objectKeys(e),s=wt.objectKeys(n).filter(a=>r.indexOf(a)!==-1),o={...n,...e};for(const a of s){const l=ko(n[a],e[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(t===Fe.array&&i===Fe.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let s=0;s<n.length;s++){const o=n[s],a=e[s],l=ko(o,a);if(!l.valid)return{valid:!1};r.push(l.data)}return{valid:!0,data:r}}else return t===Fe.date&&i===Fe.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class As extends xt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=(s,o)=>{if(Fo(s)||Fo(o))return ot;const a=ko(s.value,o.value);return a.valid?((Bo(s)||Bo(o))&&t.dirty(),{status:t.value,value:a.data}):(De(i,{code:_e.invalid_intersection_types}),ot)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,o])=>r(s,o)):r(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}As.create=(n,e,t)=>new As({left:n,right:e,typeName:st.ZodIntersection,..._t(t)});class ai extends xt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Fe.array)return De(i,{code:_e.invalid_type,expected:Fe.array,received:i.parsedType}),ot;if(i.data.length<this._def.items.length)return De(i,{code:_e.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ot;!this._def.rest&&i.data.length>this._def.items.length&&(De(i,{code:_e.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const s=[...i.data].map((o,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new si(i,o,i.path,a)):null}).filter(o=>!!o);return i.common.async?Promise.all(s).then(o=>pn.mergeArray(t,o)):pn.mergeArray(t,s)}get items(){return this._def.items}rest(e){return new ai({...this._def,rest:e})}}ai.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ai({items:n,typeName:st.ZodTuple,rest:null,..._t(e)})};class bs extends xt{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Fe.object)return De(i,{code:_e.invalid_type,expected:Fe.object,received:i.parsedType}),ot;const r=[],s=this._def.keyType,o=this._def.valueType;for(const a in i.data)r.push({key:s._parse(new si(i,a,i.path,a)),value:o._parse(new si(i,i.data[a],i.path,a)),alwaysSet:a in i.data});return i.common.async?pn.mergeObjectAsync(t,r):pn.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof xt?new bs({keyType:e,valueType:t,typeName:st.ZodRecord,..._t(i)}):new bs({keyType:jn.create(),valueType:e,typeName:st.ZodRecord,..._t(t)})}}class Ia extends xt{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Fe.map)return De(i,{code:_e.invalid_type,expected:Fe.map,received:i.parsedType}),ot;const r=this._def.keyType,s=this._def.valueType,o=[...i.data.entries()].map(([a,l],c)=>({key:r._parse(new si(i,a,i.path,[c,"key"])),value:s._parse(new si(i,l,i.path,[c,"value"]))}));if(i.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of o){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return ot;(c.status==="dirty"||u.status==="dirty")&&t.dirty(),a.set(c.value,u.value)}return{status:t.value,value:a}})}else{const a=new Map;for(const l of o){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return ot;(c.status==="dirty"||u.status==="dirty")&&t.dirty(),a.set(c.value,u.value)}return{status:t.value,value:a}}}}Ia.create=(n,e,t)=>new Ia({valueType:e,keyType:n,typeName:st.ZodMap,..._t(t)});class fr extends xt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Fe.set)return De(i,{code:_e.invalid_type,expected:Fe.set,received:i.parsedType}),ot;const r=this._def;r.minSize!==null&&i.data.size<r.minSize.value&&(De(i,{code:_e.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&i.data.size>r.maxSize.value&&(De(i,{code:_e.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const s=this._def.valueType;function o(l){const c=new Set;for(const u of l){if(u.status==="aborted")return ot;u.status==="dirty"&&t.dirty(),c.add(u.value)}return{status:t.value,value:c}}const a=[...i.data.values()].map((l,c)=>s._parse(new si(i,l,i.path,c)));return i.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(e,t){return new fr({...this._def,minSize:{value:e,message:Ye.toString(t)}})}max(e,t){return new fr({...this._def,maxSize:{value:e,message:Ye.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}fr.create=(n,e)=>new fr({valueType:n,minSize:null,maxSize:null,typeName:st.ZodSet,..._t(e)});class Hr extends xt{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Fe.function)return De(t,{code:_e.invalid_type,expected:Fe.function,received:t.parsedType}),ot;function i(a,l){return ba({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Aa(),Wr].filter(c=>!!c),issueData:{code:_e.invalid_arguments,argumentsError:l}})}function r(a,l){return ba({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Aa(),Wr].filter(c=>!!c),issueData:{code:_e.invalid_return_type,returnTypeError:l}})}const s={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof qr){const a=this;return Sn(async function(...l){const c=new Dn([]),u=await a._def.args.parseAsync(l,s).catch(_=>{throw c.addIssue(i(l,_)),c}),d=await Reflect.apply(o,this,u);return await a._def.returns._def.type.parseAsync(d,s).catch(_=>{throw c.addIssue(r(d,_)),c})})}else{const a=this;return Sn(function(...l){const c=a._def.args.safeParse(l,s);if(!c.success)throw new Dn([i(l,c.error)]);const u=Reflect.apply(o,this,c.data),d=a._def.returns.safeParse(u,s);if(!d.success)throw new Dn([r(u,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Hr({...this._def,args:ai.create(e).rest(sr.create())})}returns(e){return new Hr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new Hr({args:e||ai.create([]).rest(sr.create()),returns:t||sr.create(),typeName:st.ZodFunction,..._t(i)})}}class ws extends xt{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}ws.create=(n,e)=>new ws({getter:n,typeName:st.ZodLazy,..._t(e)});class Rs extends xt{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return De(t,{received:t.data,code:_e.invalid_literal,expected:this._def.value}),ot}return{status:"valid",value:e.data}}get value(){return this._def.value}}Rs.create=(n,e)=>new Rs({value:n,typeName:st.ZodLiteral,..._t(e)});function _u(n,e){return new Vi({values:n,typeName:st.ZodEnum,..._t(e)})}class Vi extends xt{constructor(){super(...arguments),hs.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return De(t,{expected:wt.joinValues(i),received:t.parsedType,code:_e.invalid_type}),ot}if(wa(this,hs)||fu(this,hs,new Set(this._def.values)),!wa(this,hs).has(e.data)){const t=this._getOrReturnCtx(e),i=this._def.values;return De(t,{received:t.data,code:_e.invalid_enum_value,options:i}),ot}return Sn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return Vi.create(e,{...this._def,...t})}exclude(e,t=this._def){return Vi.create(this.options.filter(i=>!e.includes(i)),{...this._def,...t})}}hs=new WeakMap;Vi.create=_u;class Ls extends xt{constructor(){super(...arguments),ps.set(this,void 0)}_parse(e){const t=wt.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==Fe.string&&i.parsedType!==Fe.number){const r=wt.objectValues(t);return De(i,{expected:wt.joinValues(r),received:i.parsedType,code:_e.invalid_type}),ot}if(wa(this,ps)||fu(this,ps,new Set(wt.getValidEnumValues(this._def.values))),!wa(this,ps).has(e.data)){const r=wt.objectValues(t);return De(i,{received:i.data,code:_e.invalid_enum_value,options:r}),ot}return Sn(e.data)}get enum(){return this._def.values}}ps=new WeakMap;Ls.create=(n,e)=>new Ls({values:n,typeName:st.ZodNativeEnum,..._t(e)});class qr extends xt{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Fe.promise&&t.common.async===!1)return De(t,{code:_e.invalid_type,expected:Fe.promise,received:t.parsedType}),ot;const i=t.parsedType===Fe.promise?t.data:Promise.resolve(t.data);return Sn(i.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}qr.create=(n,e)=>new qr({type:n,typeName:st.ZodPromise,..._t(e)});class $n extends xt{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===st.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=this._def.effect||null,s={addIssue:o=>{De(i,o),o.fatal?t.abort():t.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const o=r.transform(i.data,s);if(i.common.async)return Promise.resolve(o).then(async a=>{if(t.value==="aborted")return ot;const l=await this._def.schema._parseAsync({data:a,path:i.path,parent:i});return l.status==="aborted"?ot:l.status==="dirty"||t.value==="dirty"?Br(l.value):l});{if(t.value==="aborted")return ot;const a=this._def.schema._parseSync({data:o,path:i.path,parent:i});return a.status==="aborted"?ot:a.status==="dirty"||t.value==="dirty"?Br(a.value):a}}if(r.type==="refinement"){const o=a=>{const l=r.refinement(a,s);if(i.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?ot:(a.status==="dirty"&&t.dirty(),o(a.value),{status:t.value,value:a.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>a.status==="aborted"?ot:(a.status==="dirty"&&t.dirty(),o(a.value).then(()=>({status:t.value,value:a.value}))))}if(r.type==="transform")if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Es(o))return o;const a=r.transform(o.value,s);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>Es(o)?Promise.resolve(r.transform(o.value,s)).then(a=>({status:t.value,value:a})):o);wt.assertNever(r)}}$n.create=(n,e,t)=>new $n({schema:n,typeName:st.ZodEffects,effect:e,..._t(t)});$n.createWithPreprocess=(n,e,t)=>new $n({schema:e,effect:{type:"preprocess",transform:n},typeName:st.ZodEffects,..._t(t)});class ii extends xt{_parse(e){return this._getType(e)===Fe.undefined?Sn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ii.create=(n,e)=>new ii({innerType:n,typeName:st.ZodOptional,..._t(e)});class Wi extends xt{_parse(e){return this._getType(e)===Fe.null?Sn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Wi.create=(n,e)=>new Wi({innerType:n,typeName:st.ZodNullable,..._t(e)});class Is extends xt{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===Fe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Is.create=(n,e)=>new Is({innerType:n,typeName:st.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,..._t(e)});class Ps extends xt{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Ss(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Dn(i.common.issues)},input:i.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new Dn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ps.create=(n,e)=>new Ps({innerType:n,typeName:st.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,..._t(e)});class Pa extends xt{_parse(e){if(this._getType(e)!==Fe.nan){const i=this._getOrReturnCtx(e);return De(i,{code:_e.invalid_type,expected:Fe.nan,received:i.parsedType}),ot}return{status:"valid",value:e.data}}}Pa.create=n=>new Pa({typeName:st.ZodNaN,..._t(n)});const bf=Symbol("zod_brand");class el extends xt{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class Fs extends xt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?ot:s.status==="dirty"?(t.dirty(),Br(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{const r=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?ot:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:i.path,parent:i})}}static create(e,t){return new Fs({in:e,out:t,typeName:st.ZodPipeline})}}class Ns extends xt{_parse(e){const t=this._def.innerType._parse(e),i=r=>(Es(r)&&(r.value=Object.freeze(r.value)),r);return Ss(t)?t.then(r=>i(r)):i(t)}unwrap(){return this._def.innerType}}Ns.create=(n,e)=>new Ns({innerType:n,typeName:st.ZodReadonly,..._t(e)});function tl(n,e={},t){return n?Xr.create().superRefine((i,r)=>{var s,o;if(!n(i)){const a=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,l=(o=(s=a.fatal)!==null&&s!==void 0?s:t)!==null&&o!==void 0?o:!0,c=typeof a=="string"?{message:a}:a;r.addIssue({code:"custom",...c,fatal:l})}}):Xr.create()}const wf={object:Wt.lazycreate};var st;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(st||(st={}));const Rf=(n,e={message:`Input not instance of ${n.name}`})=>tl(t=>t instanceof n,e),B=jn.create,Ze=Hi.create,Lf=Pa.create,gu=zi.create,ut=xs.create,If=dr.create,Pf=Ra.create,Nf=ys.create,Ga=Ms.create,Cf=Xr.create,Cs=sr.create,Df=Ti.create,Uf=La.create,bt=Kn.create,Ae=Wt.create,Of=Wt.strictCreate,nl=Ts.create,Ff=ka.create,Bf=As.create,kf=ai.create,Gf=bs.create,Hf=Ia.create,zf=fr.create,Vf=Hr.create,Wf=ws.create,Jt=Rs.create,Xf=Vi.create,Jr=Ls.create,qf=qr.create,Ll=$n.create,vu=ii.create,Yf=Wi.create,Eu=$n.createWithPreprocess,Zf=Fs.create,jf=()=>B().optional(),Kf=()=>Ze().optional(),$f=()=>ut().optional(),Jf={string:n=>jn.create({...n,coerce:!0}),number:n=>Hi.create({...n,coerce:!0}),boolean:n=>xs.create({...n,coerce:!0}),bigint:n=>zi.create({...n,coerce:!0}),date:n=>dr.create({...n,coerce:!0})},Qf=ot;var be=Object.freeze({__proto__:null,defaultErrorMap:Wr,setErrorMap:cf,getErrorMap:Aa,makeIssue:ba,EMPTY_PATH:uf,addIssueToContext:De,ParseStatus:pn,INVALID:ot,DIRTY:Br,OK:Sn,isAborted:Fo,isDirty:Bo,isValid:Es,isAsync:Ss,get util(){return wt},get objectUtil(){return Oo},ZodParsedType:Fe,getParsedType:Di,ZodType:xt,datetimeRegex:mu,ZodString:jn,ZodNumber:Hi,ZodBigInt:zi,ZodBoolean:xs,ZodDate:dr,ZodSymbol:Ra,ZodUndefined:ys,ZodNull:Ms,ZodAny:Xr,ZodUnknown:sr,ZodNever:Ti,ZodVoid:La,ZodArray:Kn,ZodObject:Wt,ZodUnion:Ts,ZodDiscriminatedUnion:ka,ZodIntersection:As,ZodTuple:ai,ZodRecord:bs,ZodMap:Ia,ZodSet:fr,ZodFunction:Hr,ZodLazy:ws,ZodLiteral:Rs,ZodEnum:Vi,ZodNativeEnum:Ls,ZodPromise:qr,ZodEffects:$n,ZodTransformer:$n,ZodOptional:ii,ZodNullable:Wi,ZodDefault:Is,ZodCatch:Ps,ZodNaN:Pa,BRAND:bf,ZodBranded:el,ZodPipeline:Fs,ZodReadonly:Ns,custom:tl,Schema:xt,ZodSchema:xt,late:wf,get ZodFirstPartyTypeKind(){return st},coerce:Jf,any:Cf,array:bt,bigint:gu,boolean:ut,date:If,discriminatedUnion:Ff,effect:Ll,enum:Xf,function:Vf,instanceof:Rf,intersection:Bf,lazy:Wf,literal:Jt,map:Hf,nan:Lf,nativeEnum:Jr,never:Df,null:Ga,nullable:Yf,number:Ze,object:Ae,oboolean:$f,onumber:Kf,optional:vu,ostring:jf,pipeline:Zf,preprocess:Eu,promise:qf,record:Gf,set:zf,strictObject:Of,string:B,symbol:Pf,transformer:Ll,tuple:kf,undefined:Nf,union:nl,unknown:Cs,void:Uf,NEVER:Qf,ZodIssueCode:_e,quotelessJson:lf,ZodError:Dn}),Qa={exports:{}},Il;function eh(){return Il||(Il=1,function(n){var e=function(t){var i=1e7,r=7,s=9007199254740992,o=S(s),a="0123456789abcdefghijklmnopqrstuvwxyz",l=typeof BigInt=="function";function c(m,g,b,N){return typeof m>"u"?c[0]:typeof g<"u"?+g==10&&!b?$(m):Lt(m,g,b,N):$(m)}function u(m,g){this.value=m,this.sign=g,this.isSmall=!1}u.prototype=Object.create(c.prototype);function d(m){this.value=m,this.sign=m<0,this.isSmall=!0}d.prototype=Object.create(c.prototype);function f(m){this.value=m}f.prototype=Object.create(c.prototype);function _(m){return-s<m&&m<s}function S(m){return m<1e7?[m]:m<1e14?[m%1e7,Math.floor(m/1e7)]:[m%1e7,Math.floor(m/1e7)%1e7,Math.floor(m/1e14)]}function E(m){p(m);var g=m.length;if(g<4&&le(m,o)<0)switch(g){case 0:return 0;case 1:return m[0];case 2:return m[0]+m[1]*i;default:return m[0]+(m[1]+m[2]*i)*i}return m}function p(m){for(var g=m.length;m[--g]===0;);m.length=g+1}function h(m){for(var g=new Array(m),b=-1;++b<m;)g[b]=0;return g}function R(m){return m>0?Math.floor(m):Math.ceil(m)}function M(m,g){var b=m.length,N=g.length,I=new Array(b),F=0,W=i,V,q;for(q=0;q<N;q++)V=m[q]+g[q]+F,F=V>=W?1:0,I[q]=V-F*W;for(;q<b;)V=m[q]+F,F=V===W?1:0,I[q++]=V-F*W;return F>0&&I.push(F),I}function L(m,g){return m.length>=g.length?M(m,g):M(g,m)}function H(m,g){var b=m.length,N=new Array(b),I=i,F,W;for(W=0;W<b;W++)F=m[W]-I+g,g=Math.floor(F/I),N[W]=F-g*I,g+=1;for(;g>0;)N[W++]=g%I,g=Math.floor(g/I);return N}u.prototype.add=function(m){var g=$(m);if(this.sign!==g.sign)return this.subtract(g.negate());var b=this.value,N=g.value;return g.isSmall?new u(H(b,Math.abs(N)),this.sign):new u(L(b,N),this.sign)},u.prototype.plus=u.prototype.add,d.prototype.add=function(m){var g=$(m),b=this.value;if(b<0!==g.sign)return this.subtract(g.negate());var N=g.value;if(g.isSmall){if(_(b+N))return new d(b+N);N=S(Math.abs(N))}return new u(H(N,Math.abs(b)),b<0)},d.prototype.plus=d.prototype.add,f.prototype.add=function(m){return new f(this.value+$(m).value)},f.prototype.plus=f.prototype.add;function O(m,g){var b=m.length,N=g.length,I=new Array(b),F=0,W=i,V,q;for(V=0;V<N;V++)q=m[V]-F-g[V],q<0?(q+=W,F=1):F=0,I[V]=q;for(V=N;V<b;V++){if(q=m[V]-F,q<0)q+=W;else{I[V++]=q;break}I[V]=q}for(;V<b;V++)I[V]=m[V];return p(I),I}function C(m,g,b){var N;return le(m,g)>=0?N=O(m,g):(N=O(g,m),b=!b),N=E(N),typeof N=="number"?(b&&(N=-N),new d(N)):new u(N,b)}function de(m,g,b){var N=m.length,I=new Array(N),F=-g,W=i,V,q;for(V=0;V<N;V++)q=m[V]+F,F=Math.floor(q/W),q%=W,I[V]=q<0?q+W:q;return I=E(I),typeof I=="number"?(b&&(I=-I),new d(I)):new u(I,b)}u.prototype.subtract=function(m){var g=$(m);if(this.sign!==g.sign)return this.add(g.negate());var b=this.value,N=g.value;return g.isSmall?de(b,Math.abs(N),this.sign):C(b,N,this.sign)},u.prototype.minus=u.prototype.subtract,d.prototype.subtract=function(m){var g=$(m),b=this.value;if(b<0!==g.sign)return this.add(g.negate());var N=g.value;return g.isSmall?new d(b-N):de(N,Math.abs(b),b>=0)},d.prototype.minus=d.prototype.subtract,f.prototype.subtract=function(m){return new f(this.value-$(m).value)},f.prototype.minus=f.prototype.subtract,u.prototype.negate=function(){return new u(this.value,!this.sign)},d.prototype.negate=function(){var m=this.sign,g=new d(-this.value);return g.sign=!m,g},f.prototype.negate=function(){return new f(-this.value)},u.prototype.abs=function(){return new u(this.value,!1)},d.prototype.abs=function(){return new d(Math.abs(this.value))},f.prototype.abs=function(){return new f(this.value>=0?this.value:-this.value)};function T(m,g){var b=m.length,N=g.length,I=b+N,F=h(I),W=i,V,q,ce,Me,Pe;for(ce=0;ce<b;++ce){Me=m[ce];for(var Ve=0;Ve<N;++Ve)Pe=g[Ve],V=Me*Pe+F[ce+Ve],q=Math.floor(V/W),F[ce+Ve]=V-q*W,F[ce+Ve+1]+=q}return p(F),F}function w(m,g){var b=m.length,N=new Array(b),I=i,F=0,W,V;for(V=0;V<b;V++)W=m[V]*g+F,F=Math.floor(W/I),N[V]=W-F*I;for(;F>0;)N[V++]=F%I,F=Math.floor(F/I);return N}function te(m,g){for(var b=[];g-- >0;)b.push(0);return b.concat(m)}function ne(m,g){var b=Math.max(m.length,g.length);if(b<=30)return T(m,g);b=Math.ceil(b/2);var N=m.slice(b),I=m.slice(0,b),F=g.slice(b),W=g.slice(0,b),V=ne(I,W),q=ne(N,F),ce=ne(L(I,N),L(W,F)),Me=L(L(V,te(O(O(ce,V),q),b)),te(q,2*b));return p(Me),Me}function ge(m,g){return-.012*m-.012*g+15e-6*m*g>0}u.prototype.multiply=function(m){var g=$(m),b=this.value,N=g.value,I=this.sign!==g.sign,F;if(g.isSmall){if(N===0)return c[0];if(N===1)return this;if(N===-1)return this.negate();if(F=Math.abs(N),F<i)return new u(w(b,F),I);N=S(F)}return ge(b.length,N.length)?new u(ne(b,N),I):new u(T(b,N),I)},u.prototype.times=u.prototype.multiply;function G(m,g,b){return m<i?new u(w(g,m),b):new u(T(g,S(m)),b)}d.prototype._multiplyBySmall=function(m){return _(m.value*this.value)?new d(m.value*this.value):G(Math.abs(m.value),S(Math.abs(this.value)),this.sign!==m.sign)},u.prototype._multiplyBySmall=function(m){return m.value===0?c[0]:m.value===1?this:m.value===-1?this.negate():G(Math.abs(m.value),this.value,this.sign!==m.sign)},d.prototype.multiply=function(m){return $(m)._multiplyBySmall(this)},d.prototype.times=d.prototype.multiply,f.prototype.multiply=function(m){return new f(this.value*$(m).value)},f.prototype.times=f.prototype.multiply;function J(m){var g=m.length,b=h(g+g),N=i,I,F,W,V,q;for(W=0;W<g;W++){V=m[W],F=0-V*V;for(var ce=W;ce<g;ce++)q=m[ce],I=2*(V*q)+b[W+ce]+F,F=Math.floor(I/N),b[W+ce]=I-F*N;b[W+g]=F}return p(b),b}u.prototype.square=function(){return new u(J(this.value),!1)},d.prototype.square=function(){var m=this.value*this.value;return _(m)?new d(m):new u(J(S(Math.abs(this.value))),!1)},f.prototype.square=function(m){return new f(this.value*this.value)};function oe(m,g){var b=m.length,N=g.length,I=i,F=h(g.length),W=g[N-1],V=Math.ceil(I/(2*W)),q=w(m,V),ce=w(g,V),Me,Pe,Ve,We,me,D,Te;for(q.length<=b&&q.push(0),ce.push(0),W=ce[N-1],Pe=b-N;Pe>=0;Pe--){for(Me=I-1,q[Pe+N]!==W&&(Me=Math.floor((q[Pe+N]*I+q[Pe+N-1])/W)),Ve=0,We=0,D=ce.length,me=0;me<D;me++)Ve+=Me*ce[me],Te=Math.floor(Ve/I),We+=q[Pe+me]-(Ve-Te*I),Ve=Te,We<0?(q[Pe+me]=We+I,We=-1):(q[Pe+me]=We,We=0);for(;We!==0;){for(Me-=1,Ve=0,me=0;me<D;me++)Ve+=q[Pe+me]-I+ce[me],Ve<0?(q[Pe+me]=Ve+I,Ve=0):(q[Pe+me]=Ve,Ve=1);We+=Ve}F[Pe]=Me}return q=ae(q,V)[0],[E(F),E(q)]}function ue(m,g){for(var b=m.length,N=g.length,I=[],F=[],W=i,V,q,ce,Me,Pe;b;){if(F.unshift(m[--b]),p(F),le(F,g)<0){I.push(0);continue}q=F.length,ce=F[q-1]*W+F[q-2],Me=g[N-1]*W+g[N-2],q>N&&(ce=(ce+1)*W),V=Math.ceil(ce/Me);do{if(Pe=w(g,V),le(Pe,F)<=0)break;V--}while(V);I.push(V),F=O(F,Pe)}return I.reverse(),[E(I),E(F)]}function ae(m,g){var b=m.length,N=h(b),I=i,F,W,V,q;for(V=0,F=b-1;F>=0;--F)q=V*I+m[F],W=R(q/g),V=q-W*g,N[F]=W|0;return[N,V|0]}function se(m,g){var b,N=$(g);if(l)return[new f(m.value/N.value),new f(m.value%N.value)];var I=m.value,F=N.value,W;if(F===0)throw new Error("Cannot divide by zero");if(m.isSmall)return N.isSmall?[new d(R(I/F)),new d(I%F)]:[c[0],m];if(N.isSmall){if(F===1)return[m,c[0]];if(F==-1)return[m.negate(),c[0]];var V=Math.abs(F);if(V<i){b=ae(I,V),W=E(b[0]);var q=b[1];return m.sign&&(q=-q),typeof W=="number"?(m.sign!==N.sign&&(W=-W),[new d(W),new d(q)]):[new u(W,m.sign!==N.sign),new d(q)]}F=S(V)}var ce=le(I,F);if(ce===-1)return[c[0],m];if(ce===0)return[c[m.sign===N.sign?1:-1],c[0]];I.length+F.length<=200?b=oe(I,F):b=ue(I,F),W=b[0];var Me=m.sign!==N.sign,Pe=b[1],Ve=m.sign;return typeof W=="number"?(Me&&(W=-W),W=new d(W)):W=new u(W,Me),typeof Pe=="number"?(Ve&&(Pe=-Pe),Pe=new d(Pe)):Pe=new u(Pe,Ve),[W,Pe]}u.prototype.divmod=function(m){var g=se(this,m);return{quotient:g[0],remainder:g[1]}},f.prototype.divmod=d.prototype.divmod=u.prototype.divmod,u.prototype.divide=function(m){return se(this,m)[0]},f.prototype.over=f.prototype.divide=function(m){return new f(this.value/$(m).value)},d.prototype.over=d.prototype.divide=u.prototype.over=u.prototype.divide,u.prototype.mod=function(m){return se(this,m)[1]},f.prototype.mod=f.prototype.remainder=function(m){return new f(this.value%$(m).value)},d.prototype.remainder=d.prototype.mod=u.prototype.remainder=u.prototype.mod,u.prototype.pow=function(m){var g=$(m),b=this.value,N=g.value,I,F,W;if(N===0)return c[1];if(b===0)return c[0];if(b===1)return c[1];if(b===-1)return g.isEven()?c[1]:c[-1];if(g.sign)return c[0];if(!g.isSmall)throw new Error("The exponent "+g.toString()+" is too large.");if(this.isSmall&&_(I=Math.pow(b,N)))return new d(R(I));for(F=this,W=c[1];N&!0&&(W=W.times(F),--N),N!==0;)N/=2,F=F.square();return W},d.prototype.pow=u.prototype.pow,f.prototype.pow=function(m){var g=$(m),b=this.value,N=g.value,I=BigInt(0),F=BigInt(1),W=BigInt(2);if(N===I)return c[1];if(b===I)return c[0];if(b===F)return c[1];if(b===BigInt(-1))return g.isEven()?c[1]:c[-1];if(g.isNegative())return new f(I);for(var V=this,q=c[1];(N&F)===F&&(q=q.times(V),--N),N!==I;)N/=W,V=V.square();return q},u.prototype.modPow=function(m,g){if(m=$(m),g=$(g),g.isZero())throw new Error("Cannot take modPow with modulus 0");var b=c[1],N=this.mod(g);for(m.isNegative()&&(m=m.multiply(c[-1]),N=N.modInv(g));m.isPositive();){if(N.isZero())return c[0];m.isOdd()&&(b=b.multiply(N).mod(g)),m=m.divide(2),N=N.square().mod(g)}return b},f.prototype.modPow=d.prototype.modPow=u.prototype.modPow;function le(m,g){if(m.length!==g.length)return m.length>g.length?1:-1;for(var b=m.length-1;b>=0;b--)if(m[b]!==g[b])return m[b]>g[b]?1:-1;return 0}u.prototype.compareAbs=function(m){var g=$(m),b=this.value,N=g.value;return g.isSmall?1:le(b,N)},d.prototype.compareAbs=function(m){var g=$(m),b=Math.abs(this.value),N=g.value;return g.isSmall?(N=Math.abs(N),b===N?0:b>N?1:-1):-1},f.prototype.compareAbs=function(m){var g=this.value,b=$(m).value;return g=g>=0?g:-g,b=b>=0?b:-b,g===b?0:g>b?1:-1},u.prototype.compare=function(m){if(m===1/0)return-1;if(m===-1/0)return 1;var g=$(m),b=this.value,N=g.value;return this.sign!==g.sign?g.sign?1:-1:g.isSmall?this.sign?-1:1:le(b,N)*(this.sign?-1:1)},u.prototype.compareTo=u.prototype.compare,d.prototype.compare=function(m){if(m===1/0)return-1;if(m===-1/0)return 1;var g=$(m),b=this.value,N=g.value;return g.isSmall?b==N?0:b>N?1:-1:b<0!==g.sign?b<0?-1:1:b<0?1:-1},d.prototype.compareTo=d.prototype.compare,f.prototype.compare=function(m){if(m===1/0)return-1;if(m===-1/0)return 1;var g=this.value,b=$(m).value;return g===b?0:g>b?1:-1},f.prototype.compareTo=f.prototype.compare,u.prototype.equals=function(m){return this.compare(m)===0},f.prototype.eq=f.prototype.equals=d.prototype.eq=d.prototype.equals=u.prototype.eq=u.prototype.equals,u.prototype.notEquals=function(m){return this.compare(m)!==0},f.prototype.neq=f.prototype.notEquals=d.prototype.neq=d.prototype.notEquals=u.prototype.neq=u.prototype.notEquals,u.prototype.greater=function(m){return this.compare(m)>0},f.prototype.gt=f.prototype.greater=d.prototype.gt=d.prototype.greater=u.prototype.gt=u.prototype.greater,u.prototype.lesser=function(m){return this.compare(m)<0},f.prototype.lt=f.prototype.lesser=d.prototype.lt=d.prototype.lesser=u.prototype.lt=u.prototype.lesser,u.prototype.greaterOrEquals=function(m){return this.compare(m)>=0},f.prototype.geq=f.prototype.greaterOrEquals=d.prototype.geq=d.prototype.greaterOrEquals=u.prototype.geq=u.prototype.greaterOrEquals,u.prototype.lesserOrEquals=function(m){return this.compare(m)<=0},f.prototype.leq=f.prototype.lesserOrEquals=d.prototype.leq=d.prototype.lesserOrEquals=u.prototype.leq=u.prototype.lesserOrEquals,u.prototype.isEven=function(){return(this.value[0]&1)===0},d.prototype.isEven=function(){return(this.value&1)===0},f.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},u.prototype.isOdd=function(){return(this.value[0]&1)===1},d.prototype.isOdd=function(){return(this.value&1)===1},f.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},u.prototype.isPositive=function(){return!this.sign},d.prototype.isPositive=function(){return this.value>0},f.prototype.isPositive=d.prototype.isPositive,u.prototype.isNegative=function(){return this.sign},d.prototype.isNegative=function(){return this.value<0},f.prototype.isNegative=d.prototype.isNegative,u.prototype.isUnit=function(){return!1},d.prototype.isUnit=function(){return Math.abs(this.value)===1},f.prototype.isUnit=function(){return this.abs().value===BigInt(1)},u.prototype.isZero=function(){return!1},d.prototype.isZero=function(){return this.value===0},f.prototype.isZero=function(){return this.value===BigInt(0)},u.prototype.isDivisibleBy=function(m){var g=$(m);return g.isZero()?!1:g.isUnit()?!0:g.compareAbs(2)===0?this.isEven():this.mod(g).isZero()},f.prototype.isDivisibleBy=d.prototype.isDivisibleBy=u.prototype.isDivisibleBy;function ve(m){var g=m.abs();if(g.isUnit())return!1;if(g.equals(2)||g.equals(3)||g.equals(5))return!0;if(g.isEven()||g.isDivisibleBy(3)||g.isDivisibleBy(5))return!1;if(g.lesser(49))return!0}function Ee(m,g){for(var b=m.prev(),N=b,I=0,F,W,V;N.isEven();)N=N.divide(2),I++;e:for(W=0;W<g.length;W++)if(!m.lesser(g[W])&&(V=e(g[W]).modPow(N,m),!(V.isUnit()||V.equals(b)))){for(F=I-1;F!=0;F--){if(V=V.square().mod(m),V.isUnit())return!1;if(V.equals(b))continue e}return!1}return!0}u.prototype.isPrime=function(m){var g=ve(this);if(g!==t)return g;var b=this.abs(),N=b.bitLength();if(N<=64)return Ee(b,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var I=Math.log(2)*N.toJSNumber(),F=Math.ceil(m===!0?2*Math.pow(I,2):I),W=[],V=0;V<F;V++)W.push(e(V+2));return Ee(b,W)},f.prototype.isPrime=d.prototype.isPrime=u.prototype.isPrime,u.prototype.isProbablePrime=function(m,g){var b=ve(this);if(b!==t)return b;for(var N=this.abs(),I=m===t?5:m,F=[],W=0;W<I;W++)F.push(e.randBetween(2,N.minus(2),g));return Ee(N,F)},f.prototype.isProbablePrime=d.prototype.isProbablePrime=u.prototype.isProbablePrime,u.prototype.modInv=function(m){for(var g=e.zero,b=e.one,N=$(m),I=this.abs(),F,W,V;!I.isZero();)F=N.divide(I),W=g,V=N,g=b,N=I,b=W.subtract(F.multiply(b)),I=V.subtract(F.multiply(I));if(!N.isUnit())throw new Error(this.toString()+" and "+m.toString()+" are not co-prime");return g.compare(0)===-1&&(g=g.add(m)),this.isNegative()?g.negate():g},f.prototype.modInv=d.prototype.modInv=u.prototype.modInv,u.prototype.next=function(){var m=this.value;return this.sign?de(m,1,this.sign):new u(H(m,1),this.sign)},d.prototype.next=function(){var m=this.value;return m+1<s?new d(m+1):new u(o,!1)},f.prototype.next=function(){return new f(this.value+BigInt(1))},u.prototype.prev=function(){var m=this.value;return this.sign?new u(H(m,1),!0):de(m,1,this.sign)},d.prototype.prev=function(){var m=this.value;return m-1>-s?new d(m-1):new u(o,!0)},f.prototype.prev=function(){return new f(this.value-BigInt(1))};for(var ee=[1];2*ee[ee.length-1]<=i;)ee.push(2*ee[ee.length-1]);var fe=ee.length,we=ee[fe-1];function ze(m){return Math.abs(m)<=i}u.prototype.shiftLeft=function(m){var g=$(m).toJSNumber();if(!ze(g))throw new Error(String(g)+" is too large for shifting.");if(g<0)return this.shiftRight(-g);var b=this;if(b.isZero())return b;for(;g>=fe;)b=b.multiply(we),g-=fe-1;return b.multiply(ee[g])},f.prototype.shiftLeft=d.prototype.shiftLeft=u.prototype.shiftLeft,u.prototype.shiftRight=function(m){var g,b=$(m).toJSNumber();if(!ze(b))throw new Error(String(b)+" is too large for shifting.");if(b<0)return this.shiftLeft(-b);for(var N=this;b>=fe;){if(N.isZero()||N.isNegative()&&N.isUnit())return N;g=se(N,we),N=g[1].isNegative()?g[0].prev():g[0],b-=fe-1}return g=se(N,ee[b]),g[1].isNegative()?g[0].prev():g[0]},f.prototype.shiftRight=d.prototype.shiftRight=u.prototype.shiftRight;function Se(m,g,b){g=$(g);for(var N=m.isNegative(),I=g.isNegative(),F=N?m.not():m,W=I?g.not():g,V=0,q=0,ce=null,Me=null,Pe=[];!F.isZero()||!W.isZero();)ce=se(F,we),V=ce[1].toJSNumber(),N&&(V=we-1-V),Me=se(W,we),q=Me[1].toJSNumber(),I&&(q=we-1-q),F=ce[0],W=Me[0],Pe.push(b(V,q));for(var Ve=b(N?1:0,I?1:0)!==0?e(-1):e(0),We=Pe.length-1;We>=0;We-=1)Ve=Ve.multiply(we).add(e(Pe[We]));return Ve}u.prototype.not=function(){return this.negate().prev()},f.prototype.not=d.prototype.not=u.prototype.not,u.prototype.and=function(m){return Se(this,m,function(g,b){return g&b})},f.prototype.and=d.prototype.and=u.prototype.and,u.prototype.or=function(m){return Se(this,m,function(g,b){return g|b})},f.prototype.or=d.prototype.or=u.prototype.or,u.prototype.xor=function(m){return Se(this,m,function(g,b){return g^b})},f.prototype.xor=d.prototype.xor=u.prototype.xor;var Qe=1<<30,lt=(i&-i)*(i&-i)|Qe;function Ne(m){var g=m.value,b=typeof g=="number"?g|Qe:typeof g=="bigint"?g|BigInt(Qe):g[0]+g[1]*i|lt;return b&-b}function ht(m,g){if(g.compareTo(m)<=0){var b=ht(m,g.square(g)),N=b.p,I=b.e,F=N.multiply(g);return F.compareTo(m)<=0?{p:F,e:I*2+1}:{p:N,e:I*2}}return{p:e(1),e:0}}u.prototype.bitLength=function(){var m=this;return m.compareTo(e(0))<0&&(m=m.negate().subtract(e(1))),m.compareTo(e(0))===0?e(0):e(ht(m,e(2)).e).add(e(1))},f.prototype.bitLength=d.prototype.bitLength=u.prototype.bitLength;function Y(m,g){return m=$(m),g=$(g),m.greater(g)?m:g}function Vt(m,g){return m=$(m),g=$(g),m.lesser(g)?m:g}function qe(m,g){if(m=$(m).abs(),g=$(g).abs(),m.equals(g))return m;if(m.isZero())return g;if(g.isZero())return m;for(var b=c[1],N,I;m.isEven()&&g.isEven();)N=Vt(Ne(m),Ne(g)),m=m.divide(N),g=g.divide(N),b=b.multiply(N);for(;m.isEven();)m=m.divide(Ne(m));do{for(;g.isEven();)g=g.divide(Ne(g));m.greater(g)&&(I=g,g=m,m=I),g=g.subtract(m)}while(!g.isZero());return b.isUnit()?m:m.multiply(b)}function nt(m,g){return m=$(m).abs(),g=$(g).abs(),m.divide(qe(m,g)).multiply(g)}function He(m,g,b){m=$(m),g=$(g);var N=b||Math.random,I=Vt(m,g),F=Y(m,g),W=F.subtract(I).add(1);if(W.isSmall)return I.add(Math.floor(N()*W));for(var V=x(W,i).value,q=[],ce=!0,Me=0;Me<V.length;Me++){var Pe=ce?V[Me]+(Me+1<V.length?V[Me+1]/i:0):i,Ve=R(N()*Pe);q.push(Ve),Ve<V[Me]&&(ce=!1)}return I.add(c.fromArray(q,i,!1))}var Lt=function(m,g,b,N){b=b||a,m=String(m),N||(m=m.toLowerCase(),b=b.toLowerCase());var I=m.length,F,W=Math.abs(g),V={};for(F=0;F<b.length;F++)V[b[F]]=F;for(F=0;F<I;F++){var q=m[F];if(q!=="-"&&q in V&&V[q]>=W){if(q==="1"&&W===1)continue;throw new Error(q+" is not a valid digit in base "+g+".")}}g=$(g);var ce=[],Me=m[0]==="-";for(F=Me?1:0;F<m.length;F++){var q=m[F];if(q in V)ce.push($(V[q]));else if(q==="<"){var Pe=F;do F++;while(m[F]!==">"&&F<m.length);ce.push($(m.slice(Pe+1,F)))}else throw new Error(q+" is not a valid character")}return tt(ce,g,Me)};function tt(m,g,b){var N=c[0],I=c[1],F;for(F=m.length-1;F>=0;F--)N=N.add(m[F].times(I)),I=I.times(g);return b?N.negate():N}function A(m,g){return g=g||a,m<g.length?g[m]:"<"+m+">"}function x(m,g){if(g=e(g),g.isZero()){if(m.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(g.equals(-1)){if(m.isZero())return{value:[0],isNegative:!1};if(m.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-m.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var b=Array.apply(null,Array(m.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return b.unshift([1]),{value:[].concat.apply([],b),isNegative:!1}}var N=!1;if(m.isNegative()&&g.isPositive()&&(N=!0,m=m.abs()),g.isUnit())return m.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(m.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:N};for(var I=[],F=m,W;F.isNegative()||F.compareAbs(g)>=0;){W=F.divmod(g),F=W.quotient;var V=W.remainder;V.isNegative()&&(V=g.minus(V).abs(),F=F.next()),I.push(V.toJSNumber())}return I.push(F.toJSNumber()),{value:I.reverse(),isNegative:N}}function Z(m,g,b){var N=x(m,g);return(N.isNegative?"-":"")+N.value.map(function(I){return A(I,b)}).join("")}u.prototype.toArray=function(m){return x(this,m)},d.prototype.toArray=function(m){return x(this,m)},f.prototype.toArray=function(m){return x(this,m)},u.prototype.toString=function(m,g){if(m===t&&(m=10),m!==10||g)return Z(this,m,g);for(var b=this.value,N=b.length,I=String(b[--N]),F="0000000",W;--N>=0;)W=String(b[N]),I+=F.slice(W.length)+W;var V=this.sign?"-":"";return V+I},d.prototype.toString=function(m,g){return m===t&&(m=10),m!=10||g?Z(this,m,g):String(this.value)},f.prototype.toString=d.prototype.toString,f.prototype.toJSON=u.prototype.toJSON=d.prototype.toJSON=function(){return this.toString()},u.prototype.valueOf=function(){return parseInt(this.toString(),10)},u.prototype.toJSNumber=u.prototype.valueOf,d.prototype.valueOf=function(){return this.value},d.prototype.toJSNumber=d.prototype.valueOf,f.prototype.valueOf=f.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};function pe(m){if(_(+m)){var g=+m;if(g===R(g))return l?new f(BigInt(g)):new d(g);throw new Error("Invalid integer: "+m)}var b=m[0]==="-";b&&(m=m.slice(1));var N=m.split(/e/i);if(N.length>2)throw new Error("Invalid integer: "+N.join("e"));if(N.length===2){var I=N[1];if(I[0]==="+"&&(I=I.slice(1)),I=+I,I!==R(I)||!_(I))throw new Error("Invalid integer: "+I+" is not a valid exponent.");var F=N[0],W=F.indexOf(".");if(W>=0&&(I-=F.length-W-1,F=F.slice(0,W)+F.slice(W+1)),I<0)throw new Error("Cannot include negative exponent part for integers");F+=new Array(I+1).join("0"),m=F}var V=/^([0-9][0-9]*)$/.test(m);if(!V)throw new Error("Invalid integer: "+m);if(l)return new f(BigInt(b?"-"+m:m));for(var q=[],ce=m.length,Me=r,Pe=ce-Me;ce>0;)q.push(+m.slice(Pe,ce)),Pe-=Me,Pe<0&&(Pe=0),ce-=Me;return p(q),new u(q,b)}function he(m){if(l)return new f(BigInt(m));if(_(m)){if(m!==R(m))throw new Error(m+" is not an integer.");return new d(m)}return pe(m.toString())}function $(m){return typeof m=="number"?he(m):typeof m=="string"?pe(m):typeof m=="bigint"?new f(m):m}for(var Ue=0;Ue<1e3;Ue++)c[Ue]=$(Ue),Ue>0&&(c[-Ue]=$(-Ue));return c.one=c[1],c.zero=c[0],c.minusOne=c[-1],c.max=Y,c.min=Vt,c.gcd=qe,c.lcm=nt,c.isInstance=function(m){return m instanceof u||m instanceof d||m instanceof f},c.randBetween=He,c.fromArray=function(m,g,b){return tt(m.map($),$(g||10),b)},c}();n.hasOwnProperty("exports")&&(n.exports=e)}(Qa)),Qa.exports}var th=eh(),nh=uu(th);const Su=64,Go=16,Ui=Su/Go;function ih(){try{return!0}catch{return!1}}function rh(n,e,t){let i=0;for(let r=0;r<t;r++){const s=n[e+r];if(s===void 0)break;i+=s*16**r}return i}function xu(n){const e=[];for(let t=0;t<n.length;t++){let i=Number(n[t]);for(let r=0;i||r<e.length;r++)i+=(e[r]||0)*10,e[r]=i%16,i=(i-e[r])/16}return e}function sh(n){const e=xu(n),t=Array(Ui);for(let i=0;i<Ui;i++)t[Ui-1-i]=rh(e,i*Ui,Ui);return t}class Qn{static fromString(e){return new Qn(sh(e),e)}static fromBit(e){const t=Array(Ui),i=Math.floor(e/Go);for(let r=0;r<Ui;r++)t[Ui-1-r]=r===i?1<<e-i*Go:0;return new Qn(t)}constructor(e,t){this.parts=e,this.str=t}and({parts:e}){return new Qn(this.parts.map((t,i)=>t&e[i]))}or({parts:e}){return new Qn(this.parts.map((t,i)=>t|e[i]))}xor({parts:e}){return new Qn(this.parts.map((t,i)=>t^e[i]))}not(){return new Qn(this.parts.map(e=>~e))}equals({parts:e}){return this.parts.every((t,i)=>t===e[i])}toString(){if(this.str!=null)return this.str;const e=new Array(Su/4);return this.parts.forEach((t,i)=>{const r=xu(t.toString());for(let s=0;s<4;s++)e[s+i*4]=r[3-s]||0}),this.str=nh.fromArray(e,16).toString()}toJSON(){return this.toString()}}const Yi=ih();Yi&&BigInt.prototype.toJSON==null&&(BigInt.prototype.toJSON=function(){return this.toString()});const Qs={},yu=Yi?function(e){return BigInt(e)}:function(e){return e instanceof Qn?e:(typeof e=="number"&&(e=e.toString()),Qs[e]!=null||(Qs[e]=Qn.fromString(e)),Qs[e])},cn=yu(0),Ha=Yi?function(e=cn,t=cn){return e&t}:function(e=cn,t=cn){return e.and(t)},Mu=Yi?function(e=cn,t=cn){return e|t}:function(e=cn,t=cn){return e.or(t)},ah=Yi?function(e=cn,t=cn){return e^t}:function(e=cn,t=cn){return e.xor(t)},oh=Yi?function(e=cn){return~e}:function(e=cn){return e.not()},il=Yi?function(e,t){return e===t}:function(e,t){return e==null||t==null?e==t:e.equals(t)};function lh(...n){let e=n[0];for(let t=1;t<n.length;t++)e=Mu(e,n[t]);return e}function ch(n,e){return il(Ha(n,e),e)}function uh(n,e){return!il(Ha(n,e),cn)}function dh(n,e){return e===cn?n:Mu(n,e)}function fh(n,e){return e===cn?n:ah(n,Ha(n,e))}const hh=Yi?function(e){return BigInt(1)<<BigInt(e)}:function(e){return Qn.fromBit(e)};var rt={combine:lh,add:dh,remove:fh,filter:Ha,invert:oh,has:ch,hasAny:uh,equals:il,deserialize:yu,getFlag:hh},Pl;(function(n){n[n.CLOSE_NORMAL=1e3]="CLOSE_NORMAL",n[n.CLOSE_UNSUPPORTED=1003]="CLOSE_UNSUPPORTED",n[n.CLOSE_ABNORMAL=1006]="CLOSE_ABNORMAL",n[n.INVALID_CLIENTID=4e3]="INVALID_CLIENTID",n[n.INVALID_ORIGIN=4001]="INVALID_ORIGIN",n[n.RATELIMITED=4002]="RATELIMITED",n[n.TOKEN_REVOKED=4003]="TOKEN_REVOKED",n[n.INVALID_VERSION=4004]="INVALID_VERSION",n[n.INVALID_ENCODING=4005]="INVALID_ENCODING"})(Pl||(Pl={}));var Ho;(function(n){n[n.INVALID_PAYLOAD=4e3]="INVALID_PAYLOAD",n[n.INVALID_COMMAND=4002]="INVALID_COMMAND",n[n.INVALID_EVENT=4004]="INVALID_EVENT",n[n.INVALID_PERMISSIONS=4006]="INVALID_PERMISSIONS"})(Ho||(Ho={}));var zo;(function(n){n.LANDSCAPE="landscape",n.PORTRAIT="portrait"})(zo||(zo={}));var Si;(function(n){n.MOBILE="mobile",n.DESKTOP="desktop"})(Si||(Si={}));Object.freeze({CREATE_INSTANT_INVITE:rt.getFlag(0),KICK_MEMBERS:rt.getFlag(1),BAN_MEMBERS:rt.getFlag(2),ADMINISTRATOR:rt.getFlag(3),MANAGE_CHANNELS:rt.getFlag(4),MANAGE_GUILD:rt.getFlag(5),ADD_REACTIONS:rt.getFlag(6),VIEW_AUDIT_LOG:rt.getFlag(7),PRIORITY_SPEAKER:rt.getFlag(8),STREAM:rt.getFlag(9),VIEW_CHANNEL:rt.getFlag(10),SEND_MESSAGES:rt.getFlag(11),SEND_TTS_MESSAGES:rt.getFlag(12),MANAGE_MESSAGES:rt.getFlag(13),EMBED_LINKS:rt.getFlag(14),ATTACH_FILES:rt.getFlag(15),READ_MESSAGE_HISTORY:rt.getFlag(16),MENTION_EVERYONE:rt.getFlag(17),USE_EXTERNAL_EMOJIS:rt.getFlag(18),VIEW_GUILD_INSIGHTS:rt.getFlag(19),CONNECT:rt.getFlag(20),SPEAK:rt.getFlag(21),MUTE_MEMBERS:rt.getFlag(22),DEAFEN_MEMBERS:rt.getFlag(23),MOVE_MEMBERS:rt.getFlag(24),USE_VAD:rt.getFlag(25),CHANGE_NICKNAME:rt.getFlag(26),MANAGE_NICKNAMES:rt.getFlag(27),MANAGE_ROLES:rt.getFlag(28),MANAGE_WEBHOOKS:rt.getFlag(29),MANAGE_GUILD_EXPRESSIONS:rt.getFlag(30),USE_APPLICATION_COMMANDS:rt.getFlag(31),REQUEST_TO_SPEAK:rt.getFlag(32),MANAGE_EVENTS:rt.getFlag(33),MANAGE_THREADS:rt.getFlag(34),CREATE_PUBLIC_THREADS:rt.getFlag(35),CREATE_PRIVATE_THREADS:rt.getFlag(36),USE_EXTERNAL_STICKERS:rt.getFlag(37),SEND_MESSAGES_IN_THREADS:rt.getFlag(38),USE_EMBEDDED_ACTIVITIES:rt.getFlag(39),MODERATE_MEMBERS:rt.getFlag(40),VIEW_CREATOR_MONETIZATION_ANALYTICS:rt.getFlag(41),USE_SOUNDBOARD:rt.getFlag(42),CREATE_GUILD_EXPRESSIONS:rt.getFlag(43),CREATE_EVENTS:rt.getFlag(44),USE_EXTERNAL_SOUNDS:rt.getFlag(45),SEND_VOICE_MESSAGES:rt.getFlag(46),SEND_POLLS:rt.getFlag(49),USE_EXTERNAL_APPS:rt.getFlag(50)});const Nl=-1,ph=250;function mn(n){return Eu(e=>{var t;const[i]=(t=Object.entries(n).find(([,r])=>r===e))!==null&&t!==void 0?t:[];return e!=null&&i===void 0?n.UNHANDLED:e},B().or(Ze()))}function Tu(n){const e=tl().transform(t=>{const i=n.safeParse(t);return i.success?i.data:n._def.defaultValue()});return e.overlayType=n,e}const mh=be.object({image_url:be.string()}),_h=be.object({mediaUrl:be.string().max(1024)}),gh=be.object({access_token:be.union([be.string(),be.null()]).optional()}),Au=be.object({access_token:be.string(),user:be.object({username:be.string(),discriminator:be.string(),id:be.string(),avatar:be.union([be.string(),be.null()]).optional(),public_flags:be.number(),global_name:be.union([be.string(),be.null()]).optional()}),scopes:be.array(Tu(be.enum(["identify","email","connections","guilds","guilds.join","guilds.members.read","guilds.channels.read","gdm.join","bot","rpc","rpc.notifications.read","rpc.voice.read","rpc.voice.write","rpc.video.read","rpc.video.write","rpc.screenshare.read","rpc.screenshare.write","rpc.activities.write","webhook.incoming","messages.read","applications.builds.upload","applications.builds.read","applications.commands","applications.commands.permissions.update","applications.commands.update","applications.store.update","applications.entitlements","activities.read","activities.write","relationships.read","relationships.write","voice","dm_channels.read","role_connections.write","presences.read","presences.write","openid","dm_channels.messages.read","dm_channels.messages.write","gateway.connect","account.global_name.update","payment_sources.country_code","sdk.social_layer"]).or(be.literal(-1)).default(-1))),expires:be.string(),application:be.object({description:be.string(),icon:be.union([be.string(),be.null()]).optional(),id:be.string(),rpc_origins:be.array(be.string()).optional(),name:be.string()})}),bu=be.object({participants:be.array(be.object({id:be.string(),username:be.string(),global_name:be.union([be.string(),be.null()]).optional(),discriminator:be.string(),avatar:be.union([be.string(),be.null()]).optional(),flags:be.number(),bot:be.boolean(),avatar_decoration_data:be.union([be.object({asset:be.string(),skuId:be.string().optional()}),be.null()]).optional(),premium_type:be.union([be.number(),be.null()]).optional(),nickname:be.string().optional()}))}),vh=be.object({command:be.string(),content:be.string().max(2e3).optional(),preview_image:be.object({height:be.number(),url:be.string(),width:be.number()}).optional(),components:be.array(be.object({type:be.literal(1),components:be.array(be.object({type:be.literal(2),style:be.number().gte(1).lte(5),label:be.string().max(80).optional(),custom_id:be.string().max(100).describe("Developer-defined identifier for the button; max 100 characters").optional()})).max(5).optional()})).optional()}),Eh=be.object({referrer_id:be.string().max(64).optional(),custom_id:be.string().max(64).optional(),message:be.string().max(1e3)}),Sh=be.object({success:be.boolean()});var Pn;(function(n){n.INITIATE_IMAGE_UPLOAD="INITIATE_IMAGE_UPLOAD",n.OPEN_SHARE_MOMENT_DIALOG="OPEN_SHARE_MOMENT_DIALOG",n.AUTHENTICATE="AUTHENTICATE",n.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS="GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS",n.SHARE_INTERACTION="SHARE_INTERACTION",n.SHARE_LINK="SHARE_LINK"})(Pn||(Pn={}));const Cl=be.object({}).optional().nullable(),Dl=be.void(),wu={[Pn.INITIATE_IMAGE_UPLOAD]:{request:Dl,response:mh},[Pn.OPEN_SHARE_MOMENT_DIALOG]:{request:_h,response:Cl},[Pn.AUTHENTICATE]:{request:gh,response:Au},[Pn.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]:{request:Dl,response:bu},[Pn.SHARE_INTERACTION]:{request:vh,response:Cl},[Pn.SHARE_LINK]:{request:Eh,response:Sh}},xh="DISPATCH";var Ke;(function(n){n.AUTHORIZE="AUTHORIZE",n.AUTHENTICATE="AUTHENTICATE",n.GET_GUILDS="GET_GUILDS",n.GET_GUILD="GET_GUILD",n.GET_CHANNEL="GET_CHANNEL",n.GET_CHANNELS="GET_CHANNELS",n.SELECT_VOICE_CHANNEL="SELECT_VOICE_CHANNEL",n.SELECT_TEXT_CHANNEL="SELECT_TEXT_CHANNEL",n.SUBSCRIBE="SUBSCRIBE",n.UNSUBSCRIBE="UNSUBSCRIBE",n.CAPTURE_SHORTCUT="CAPTURE_SHORTCUT",n.SET_CERTIFIED_DEVICES="SET_CERTIFIED_DEVICES",n.SET_ACTIVITY="SET_ACTIVITY",n.GET_SKUS="GET_SKUS",n.GET_ENTITLEMENTS="GET_ENTITLEMENTS",n.GET_SKUS_EMBEDDED="GET_SKUS_EMBEDDED",n.GET_ENTITLEMENTS_EMBEDDED="GET_ENTITLEMENTS_EMBEDDED",n.START_PURCHASE="START_PURCHASE",n.SET_CONFIG="SET_CONFIG",n.SEND_ANALYTICS_EVENT="SEND_ANALYTICS_EVENT",n.USER_SETTINGS_GET_LOCALE="USER_SETTINGS_GET_LOCALE",n.OPEN_EXTERNAL_LINK="OPEN_EXTERNAL_LINK",n.ENCOURAGE_HW_ACCELERATION="ENCOURAGE_HW_ACCELERATION",n.CAPTURE_LOG="CAPTURE_LOG",n.SET_ORIENTATION_LOCK_STATE="SET_ORIENTATION_LOCK_STATE",n.OPEN_INVITE_DIALOG="OPEN_INVITE_DIALOG",n.GET_PLATFORM_BEHAVIORS="GET_PLATFORM_BEHAVIORS",n.GET_CHANNEL_PERMISSIONS="GET_CHANNEL_PERMISSIONS",n.OPEN_SHARE_MOMENT_DIALOG="OPEN_SHARE_MOMENT_DIALOG",n.INITIATE_IMAGE_UPLOAD="INITIATE_IMAGE_UPLOAD",n.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS="GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS",n.SHARE_LINK="SHARE_LINK"})(Ke||(Ke={}));const Qr=Ae({cmd:B(),data:Cs(),evt:Ga(),nonce:B()}).passthrough(),yh=Object.assign(Object.assign({},Au.shape.scopes.element.overlayType._def.innerType.options[0].Values),{UNHANDLED:-1});mn(yh);const Xi=Ae({id:B(),username:B(),discriminator:B(),global_name:B().optional().nullable(),avatar:B().optional().nullable(),avatar_decoration_data:Ae({asset:B(),sku_id:B().optional()}).nullable(),bot:ut(),flags:Ze().optional().nullable(),premium_type:Ze().optional().nullable()}),rl=Ae({user:Xi,nick:B().optional().nullable(),roles:bt(B()),joined_at:B(),deaf:ut(),mute:ut()}),Mh=Ae({user_id:B(),nick:B().optional().nullable(),guild_id:B(),avatar:B().optional().nullable(),avatar_decoration_data:Ae({asset:B(),sku_id:B().optional().nullable()}).optional().nullable(),color_string:B().optional().nullable()}),sl=Ae({id:B(),name:B().optional().nullable(),roles:bt(B()).optional().nullable(),user:Xi.optional().nullable(),require_colons:ut().optional().nullable(),managed:ut().optional().nullable(),animated:ut().optional().nullable(),available:ut().optional().nullable()}),Ru=Ae({mute:ut(),deaf:ut(),self_mute:ut(),self_deaf:ut(),suppress:ut()}),Lu=Ae({mute:ut(),nick:B(),user:Xi,voice_state:Ru,volume:Ze()}),Th={UNHANDLED:-1,IDLE:"idle",DND:"dnd",ONLINE:"online",OFFLINE:"offline"},ea=mn(Th),gs=Ae({name:B(),type:Ze(),url:B().optional().nullable(),created_at:Ze().optional().nullable(),timestamps:Ae({start:Ze(),end:Ze()}).partial().optional().nullable(),application_id:B().optional().nullable(),details:B().optional().nullable(),state:B().optional().nullable(),emoji:sl.optional().nullable(),party:Ae({id:B().optional().nullable(),size:bt(Ze()).optional().nullable()}).optional().nullable(),assets:Ae({large_image:B().nullable(),large_text:B().nullable(),small_image:B().nullable(),small_text:B().nullable()}).partial().optional().nullable(),secrets:Ae({join:B(),match:B()}).partial().optional().nullable(),instance:ut().optional().nullable(),flags:Ze().optional().nullable()}),Ah={UNHANDLED:-1,ROLE:0,MEMBER:1},bh=Ae({id:B(),type:mn(Ah),allow:B(),deny:B()}),Iu={UNHANDLED:-1,DM:1,GROUP_DM:3,GUILD_TEXT:0,GUILD_VOICE:2,GUILD_CATEGORY:4,GUILD_ANNOUNCEMENT:5,GUILD_STORE:6,ANNOUNCEMENT_THREAD:10,PUBLIC_THREAD:11,PRIVATE_THREAD:12,GUILD_STAGE_VOICE:13,GUILD_DIRECTORY:14,GUILD_FORUM:15},Pu=Ae({id:B(),type:mn(Iu),guild_id:B().optional().nullable(),position:Ze().optional().nullable(),permission_overwrites:bt(bh).optional().nullable(),name:B().optional().nullable(),topic:B().optional().nullable(),nsfw:ut().optional().nullable(),last_message_id:B().optional().nullable(),bitrate:Ze().optional().nullable(),user_limit:Ze().optional().nullable(),rate_limit_per_user:Ze().optional().nullable(),recipients:bt(Xi).optional().nullable(),icon:B().optional().nullable(),owner_id:B().optional().nullable(),application_id:B().optional().nullable(),parent_id:B().optional().nullable(),last_pin_timestamp:B().optional().nullable()}),wh=Ae({user:Xi,guild_id:B(),status:ea,activities:bt(gs),client_status:Ae({desktop:ea,mobile:ea,web:ea}).partial()}),Rh=Ae({id:B(),name:B(),color:Ze(),hoist:ut(),position:Ze(),permissions:B(),managed:ut(),mentionable:ut()});Ae({id:B(),name:B(),owner_id:B(),icon:B().nullable(),icon_hash:B().optional().nullable(),splash:B().nullable(),discovery_splash:B().nullable(),owner:ut().optional().nullable(),permissions:B().optional().nullable(),region:B(),afk_channel_id:B().nullable(),afk_timeout:Ze(),widget_enabled:ut().optional().nullable(),widget_channel_id:B().optional().nullable(),verification_level:Ze(),default_message_notifications:Ze(),explicit_content_filter:Ze(),roles:bt(Rh),emojis:bt(sl),features:bt(B()),mfa_level:Ze(),application_id:B().nullable(),system_channel_id:B().nullable(),system_channel_flags:Ze(),rules_channel_id:B().nullable(),joined_at:B().optional().nullable(),large:ut().optional().nullable(),unavailable:ut().optional().nullable(),member_count:Ze().optional().nullable(),voice_states:bt(Ru).optional().nullable(),members:bt(rl).optional().nullable(),channels:bt(Pu).optional().nullable(),presences:bt(wh).optional().nullable(),max_presences:Ze().optional().nullable(),max_members:Ze().optional().nullable(),vanity_url_code:B().nullable(),description:B().nullable(),banner:B().nullable(),premium_tier:Ze(),premium_subscription_count:Ze().optional().nullable(),preferred_locale:B(),public_updates_channel_id:B().nullable(),max_video_channel_users:Ze().optional().nullable(),approximate_member_count:Ze().optional().nullable(),approximate_presence_count:Ze().optional().nullable()});const Lh=Ae({id:B(),guild_id:B(),type:Ze(),name:B()}),Ih=Ae({id:B(),filename:B(),size:Ze(),url:B(),proxy_url:B(),height:Ze().optional().nullable(),width:Ze().optional().nullable()}),Ph=Ae({text:B(),icon_url:B().optional().nullable(),proxy_icon_url:B().optional().nullable()}),Vo=Ae({url:B().optional().nullable(),proxy_url:B().optional().nullable(),height:Ze().optional().nullable(),width:Ze().optional().nullable()}),Nh=Vo.omit({proxy_url:!0}),Ch=Ae({name:B().optional().nullable(),url:B().optional().nullable()}),Dh=Ae({name:B().optional().nullable(),url:B().optional().nullable(),icon_url:B().optional().nullable(),proxy_icon_url:B().optional().nullable()}),Uh=Ae({name:B(),value:B(),inline:ut()}),Oh=Ae({title:B().optional().nullable(),type:B().optional().nullable(),description:B().optional().nullable(),url:B().optional().nullable(),timestamp:B().optional().nullable(),color:Ze().optional().nullable(),footer:Ph.optional().nullable(),image:Vo.optional().nullable(),thumbnail:Vo.optional().nullable(),video:Nh.optional().nullable(),provider:Ch.optional().nullable(),author:Dh.optional().nullable(),fields:bt(Uh).optional().nullable()}),Fh=Ae({count:Ze(),me:ut(),emoji:sl}),Bh=Ae({type:Ze(),party_id:B().optional().nullable()}),kh=Ae({id:B(),cover_image:B().optional().nullable(),description:B(),icon:B().optional().nullable(),name:B()}),Gh=Ae({message_id:B().optional().nullable(),channel_id:B().optional().nullable(),guild_id:B().optional().nullable()}),Hh=Ae({id:B(),channel_id:B(),guild_id:B().optional().nullable(),author:Xi.optional().nullable(),member:rl.optional().nullable(),content:B(),timestamp:B(),edited_timestamp:B().optional().nullable(),tts:ut(),mention_everyone:ut(),mentions:bt(Xi),mention_roles:bt(B()),mention_channels:bt(Lh),attachments:bt(Ih),embeds:bt(Oh),reactions:bt(Fh).optional().nullable(),nonce:nl([B(),Ze()]).optional().nullable(),pinned:ut(),webhook_id:B().optional().nullable(),type:Ze(),activity:Bh.optional().nullable(),application:kh.optional().nullable(),message_reference:Gh.optional().nullable(),flags:Ze().optional().nullable(),stickers:bt(Cs()).optional().nullable(),referenced_message:Cs().optional().nullable()}),zh=Ae({id:B(),name:B()}),Vh={UNHANDLED:-1,KEYBOARD_KEY:0,MOUSE_BUTTON:1,KEYBOARD_MODIFIER_KEY:2,GAMEPAD_BUTTON:3},Nu=Ae({type:mn(Vh),code:Ze(),name:B()}),Wh={UNHANDLED:-1,PUSH_TO_TALK:"PUSH_TO_TALK",VOICE_ACTIVITY:"VOICE_ACTIVITY"},Xh=Ae({type:mn(Wh),auto_threshold:ut(),threshold:Ze(),shortcut:bt(Nu),delay:Ze()}),Ul=Ae({device_id:B(),volume:Ze(),available_devices:bt(zh)}),qh={UNHANDLED:-1,AUDIO_INPUT:"AUDIO_INPUT",AUDIO_OUTPUT:"AUDIO_OUTPUT",VIDEO_INPUT:"VIDEO_INPUT"};Ae({type:mn(qh),id:B(),vendor:Ae({name:B(),url:B()}),model:Ae({name:B(),url:B()}),related:bt(B()),echo_cancellation:ut().optional().nullable(),noise_suppression:ut().optional().nullable(),automatic_gain_control:ut().optional().nullable(),hardware_mute:ut().optional().nullable()});const Yh={UNHANDLED:-1,APPLICATION:1,DLC:2,CONSUMABLE:3,BUNDLE:4,SUBSCRIPTION:5},Zh=Ae({id:B(),name:B(),type:mn(Yh),price:Ae({amount:Ze(),currency:B()}),application_id:B(),flags:Ze(),release_date:B().nullable()}),jh={UNHANDLED:-1,PURCHASE:1,PREMIUM_SUBSCRIPTION:2,DEVELOPER_GIFT:3,TEST_MODE_PURCHASE:4,FREE_PURCHASE:5,USER_GIFT:6,PREMIUM_PURCHASE:7},al=Ae({id:B(),sku_id:B(),application_id:B(),user_id:B(),gift_code_flags:Ze(),type:mn(jh),gifter_user_id:B().optional().nullable(),branches:bt(B()).optional().nullable(),starts_at:B().optional().nullable(),ends_at:B().optional().nullable(),parent_id:B().optional().nullable(),consumed:ut().optional().nullable(),deleted:ut().optional().nullable(),gift_code_batch_id:B().optional().nullable()}),Kh={UNHANDLED:-1,UNLOCKED:1,PORTRAIT:2,LANDSCAPE:3};mn(Kh);const $h={UNHANDLED:-1,NOMINAL:0,FAIR:1,SERIOUS:2,CRITICAL:3},Jh=mn($h),Cu={UNHANDLED:-1,PORTRAIT:0,LANDSCAPE:1};mn(Cu);const Du={UNHANDLED:-1,FOCUSED:0,PIP:1,GRID:2};mn(Du);const ol="ERROR";var Pt;(function(n){n.READY="READY",n.VOICE_STATE_UPDATE="VOICE_STATE_UPDATE",n.SPEAKING_START="SPEAKING_START",n.SPEAKING_STOP="SPEAKING_STOP",n.ACTIVITY_LAYOUT_MODE_UPDATE="ACTIVITY_LAYOUT_MODE_UPDATE",n.ORIENTATION_UPDATE="ORIENTATION_UPDATE",n.CURRENT_USER_UPDATE="CURRENT_USER_UPDATE",n.CURRENT_GUILD_MEMBER_UPDATE="CURRENT_GUILD_MEMBER_UPDATE",n.ENTITLEMENT_CREATE="ENTITLEMENT_CREATE",n.THERMAL_STATE_UPDATE="THERMAL_STATE_UPDATE",n.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE="ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"})(Pt||(Pt={}));const In=Qr.extend({evt:Jr(Pt),nonce:B().nullable(),cmd:Jt(xh),data:Ae({}).passthrough()}),Uu=Qr.extend({evt:Jt(ol),data:Ae({code:Ze(),message:B().optional()}).passthrough(),cmd:Jr(Ke),nonce:B().nullable()}),Qh=In.extend({evt:B()}),ep=nl([In,Qh,Uu]);function tp(n){const e=n.evt;if(!(e in Pt))throw new Error(`Unrecognized event type ${n.evt}`);return np[e].payload.parse(n)}const np={[Pt.READY]:{payload:In.extend({evt:Jt(Pt.READY),data:Ae({v:Ze(),config:Ae({cdn_host:B().optional(),api_endpoint:B(),environment:B()}),user:Ae({id:B(),username:B(),discriminator:B(),avatar:B().optional()}).optional()})})},[Pt.VOICE_STATE_UPDATE]:{payload:In.extend({evt:Jt(Pt.VOICE_STATE_UPDATE),data:Lu}),subscribeArgs:Ae({channel_id:B()})},[Pt.SPEAKING_START]:{payload:In.extend({evt:Jt(Pt.SPEAKING_START),data:Ae({lobby_id:B().optional(),channel_id:B().optional(),user_id:B()})}),subscribeArgs:Ae({lobby_id:B().nullable().optional(),channel_id:B().nullable().optional()})},[Pt.SPEAKING_STOP]:{payload:In.extend({evt:Jt(Pt.SPEAKING_STOP),data:Ae({lobby_id:B().optional(),channel_id:B().optional(),user_id:B()})}),subscribeArgs:Ae({lobby_id:B().nullable().optional(),channel_id:B().nullable().optional()})},[Pt.ACTIVITY_LAYOUT_MODE_UPDATE]:{payload:In.extend({evt:Jt(Pt.ACTIVITY_LAYOUT_MODE_UPDATE),data:Ae({layout_mode:mn(Du)})})},[Pt.ORIENTATION_UPDATE]:{payload:In.extend({evt:Jt(Pt.ORIENTATION_UPDATE),data:Ae({screen_orientation:mn(Cu),orientation:Jr(zo)})})},[Pt.CURRENT_USER_UPDATE]:{payload:In.extend({evt:Jt(Pt.CURRENT_USER_UPDATE),data:Xi})},[Pt.CURRENT_GUILD_MEMBER_UPDATE]:{payload:In.extend({evt:Jt(Pt.CURRENT_GUILD_MEMBER_UPDATE),data:Mh}),subscribeArgs:Ae({guild_id:B()})},[Pt.ENTITLEMENT_CREATE]:{payload:In.extend({evt:Jt(Pt.ENTITLEMENT_CREATE),data:Ae({entitlement:al})})},[Pt.THERMAL_STATE_UPDATE]:{payload:In.extend({evt:Jt(Pt.THERMAL_STATE_UPDATE),data:Ae({thermal_state:Jh})})},[Pt.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]:{payload:In.extend({evt:Jt(Pt.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),data:Ae({participants:bu.shape.participants})})}};function ip(n,e){throw e}const za=Ae({}).nullable(),Ou=Ae({code:B()}),rp=Ae({guilds:bt(Ae({id:B(),name:B()}))}),sp=Ae({id:B(),name:B(),icon_url:B().optional(),members:bt(rl)}),Yr=Ae({id:B(),type:mn(Iu),guild_id:B().optional().nullable(),name:B().optional().nullable(),topic:B().optional().nullable(),bitrate:Ze().optional().nullable(),user_limit:Ze().optional().nullable(),position:Ze().optional().nullable(),voice_states:bt(Lu),messages:bt(Hh)}),ap=Ae({channels:bt(Pu)});Yr.nullable();const op=Yr.nullable(),lp=Yr.nullable();Ae({input:Ul,output:Ul,mode:Xh,automatic_gain_control:ut(),echo_cancellation:ut(),noise_suppression:ut(),qos:ut(),silence_warning:ut(),deaf:ut(),mute:ut()});const cp=Ae({evt:B()}),up=Ae({shortcut:Nu}),Fu=gs,Bu=Ae({skus:bt(Zh)}),ku=Ae({entitlements:bt(al)}),Gu=bt(al).nullable(),Hu=Ae({use_interactive_pip:ut()}),zu=Ae({locale:B()}),Vu=Ae({enabled:ut()}),Wu=Ae({permissions:gu().or(B())}),Xu=Tu(Ae({opened:ut().or(Ga())}).default({opened:null})),qu=Ae({iosKeyboardResizesView:vu(ut())}),dp=Qr.extend({cmd:Jr(Ke),evt:Ga()});function fp({cmd:n,data:e}){switch(n){case Ke.AUTHORIZE:return Ou.parse(e);case Ke.CAPTURE_SHORTCUT:return up.parse(e);case Ke.ENCOURAGE_HW_ACCELERATION:return Vu.parse(e);case Ke.GET_CHANNEL:return Yr.parse(e);case Ke.GET_CHANNELS:return ap.parse(e);case Ke.GET_CHANNEL_PERMISSIONS:return Wu.parse(e);case Ke.GET_GUILD:return sp.parse(e);case Ke.GET_GUILDS:return rp.parse(e);case Ke.GET_PLATFORM_BEHAVIORS:return qu.parse(e);case Ke.GET_CHANNEL:return Yr.parse(e);case Ke.SELECT_TEXT_CHANNEL:return lp.parse(e);case Ke.SELECT_VOICE_CHANNEL:return op.parse(e);case Ke.SET_ACTIVITY:return Fu.parse(e);case Ke.GET_SKUS_EMBEDDED:return Bu.parse(e);case Ke.GET_ENTITLEMENTS_EMBEDDED:return ku.parse(e);case Ke.SET_CONFIG:return Hu.parse(e);case Ke.START_PURCHASE:return Gu.parse(e);case Ke.SUBSCRIBE:case Ke.UNSUBSCRIBE:return cp.parse(e);case Ke.USER_SETTINGS_GET_LOCALE:return zu.parse(e);case Ke.OPEN_EXTERNAL_LINK:return Xu.parse(e);case Ke.SET_ORIENTATION_LOCK_STATE:case Ke.SET_CERTIFIED_DEVICES:case Ke.SEND_ANALYTICS_EVENT:case Ke.OPEN_INVITE_DIALOG:case Ke.CAPTURE_LOG:case Ke.GET_SKUS:case Ke.GET_ENTITLEMENTS:return za.parse(e);case Ke.AUTHENTICATE:case Ke.INITIATE_IMAGE_UPLOAD:case Ke.OPEN_SHARE_MOMENT_DIALOG:case Ke.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:case Ke.SHARE_LINK:const{response:t}=wu[n];return t.parse(e);default:ip(n,new Error(`Unrecognized command ${n}`))}}function hp(n){return Object.assign(Object.assign({},n),{data:fp(n)})}Ae({frame_id:B(),platform:Jr(Si).optional().nullable()});Ae({v:Jt(1),encoding:Jt("json").optional(),client_id:B(),frame_id:B()});const pp=Ae({code:Ze(),message:B().optional()}),mp=Ae({evt:B().nullable(),nonce:B().nullable(),data:Cs().nullable(),cmd:B()}).passthrough();function _p(n){const e=mp.parse(n);return e.evt!=null?e.evt===ol?Uu.parse(e):tp(ep.parse(e)):hp(dp.passthrough().parse(e))}function wn(n,e,t,i=()=>{}){const r=Qr.extend({cmd:Jt(e),data:t});return async s=>{const o=await n({cmd:e,args:s,transfer:i(s)});return r.parse(o).data}}function Bs(n,e=()=>{}){const t=wu[n].response,i=Qr.extend({cmd:Jt(n),data:t});return r=>async s=>{const o=await r({cmd:n,args:s,transfer:e(s)});return i.parse(o).data}}const gp=Bs(Pn.AUTHENTICATE),vp=n=>wn(n,Ke.AUTHORIZE,Ou),Ep=n=>wn(n,Ke.CAPTURE_LOG,za),Sp=n=>wn(n,Ke.ENCOURAGE_HW_ACCELERATION,Vu),xp=n=>wn(n,Ke.GET_ENTITLEMENTS_EMBEDDED,ku),yp=n=>wn(n,Ke.GET_SKUS_EMBEDDED,Bu),Mp=n=>wn(n,Ke.GET_CHANNEL_PERMISSIONS,Wu),Tp=n=>wn(n,Ke.GET_PLATFORM_BEHAVIORS,qu),Ap=n=>wn(n,Ke.OPEN_EXTERNAL_LINK,Xu),bp=n=>wn(n,Ke.OPEN_INVITE_DIALOG,za),wp=Bs(Pn.OPEN_SHARE_MOMENT_DIALOG);gs.pick({state:!0,details:!0,timestamps:!0,assets:!0,party:!0,secrets:!0,instance:!0,type:!0}).extend({type:gs.shape.type.optional(),instance:gs.shape.instance.optional()}).nullable();const Rp=n=>wn(n,Ke.SET_ACTIVITY,Fu),Lp=n=>wn(n,Ke.SET_CONFIG,Hu);function Ip({sendCommand:n,cmd:e,response:t,fallbackTransform:i,transferTransform:r=()=>{}}){const s=Qr.extend({cmd:Jt(e),data:t});return async o=>{try{const a=await n({cmd:e,args:o,transfer:r(o)});return s.parse(a).data}catch(a){if(a.code===Ho.INVALID_PAYLOAD){const l=i(o),c=await n({cmd:e,args:l,transfer:r(l)});return s.parse(c).data}else throw a}}}const Pp=n=>({lock_state:n.lock_state,picture_in_picture_lock_state:n.picture_in_picture_lock_state}),Np=n=>Ip({sendCommand:n,cmd:Ke.SET_ORIENTATION_LOCK_STATE,response:za,fallbackTransform:Pp}),Cp=Bs(Pn.SHARE_LINK),Dp=n=>wn(n,Ke.START_PURCHASE,Gu),Up=n=>wn(n,Ke.USER_SETTINGS_GET_LOCALE,zu),Op=Bs(Pn.INITIATE_IMAGE_UPLOAD),Fp=n=>wn(n,Ke.GET_CHANNEL,Yr),Bp=Bs(Pn.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);function kp(n){return{authenticate:gp(n),authorize:vp(n),captureLog:Ep(n),encourageHardwareAcceleration:Sp(n),getChannel:Fp(n),getChannelPermissions:Mp(n),getEntitlements:xp(n),getPlatformBehaviors:Tp(n),getSkus:yp(n),openExternalLink:Ap(n),openInviteDialog:bp(n),openShareMomentDialog:wp(n),setActivity:Rp(n),setConfig:Lp(n),setOrientationLockState:Np(n),shareLink:Cp(n),startPurchase:Dp(n),userSettingsGetLocale:Up(n),initiateImageUpload:Op(n),getInstanceConnectedParticipants:Bp(n)}}class Gp extends Error{constructor(e,t=""){super(t),this.code=e,this.message=t,this.name="Discord SDK Error"}}function Hp(){return{disableConsoleLogOverride:!1}}const zp=["log","warn","debug","info","error"];function Vp(n,e,t){const i=n[e],r=n;i&&(n[e]=function(){const s=[].slice.call(arguments),o=""+s.join(" ");t(e,o),i.apply(r,s)})}var Wp="1.9.0",Xp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ol={randomUUID:Xp},ta,qp=new Uint8Array(16);function Yp(){if(!ta&&(ta=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ta))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ta(qp)}var on=[];for(var eo=0;eo<256;++eo)on.push((eo+256).toString(16).slice(1));function Zp(n,e=0){return(on[n[e+0]]+on[n[e+1]]+on[n[e+2]]+on[n[e+3]]+"-"+on[n[e+4]]+on[n[e+5]]+"-"+on[n[e+6]]+on[n[e+7]]+"-"+on[n[e+8]]+on[n[e+9]]+"-"+on[n[e+10]]+on[n[e+11]]+on[n[e+12]]+on[n[e+13]]+on[n[e+14]]+on[n[e+15]]).toLowerCase()}function Fl(n,e,t){if(Ol.randomUUID&&!n)return Ol.randomUUID();n=n||{};var i=n.random||(n.rng||Yp)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Zp(i)}var Ei;(function(n){n[n.HANDSHAKE=0]="HANDSHAKE",n[n.FRAME=1]="FRAME",n[n.CLOSE=2]="CLOSE",n[n.HELLO=3]="HELLO"})(Ei||(Ei={}));const jp=new Set(Kp());function Kp(){return typeof window>"u"?[]:[window.location.origin,"https://discord.com","https://discordapp.com","https://ptb.discord.com","https://ptb.discordapp.com","https://canary.discord.com","https://canary.discordapp.com","https://staging.discord.co","http://localhost:3333","https://pax.discord.com","null"]}function $p(){var n;return[(n=window.parent.opener)!==null&&n!==void 0?n:window.parent,document.referrer?document.referrer:"*"]}class Jp{getTransfer(e){var t;switch(e.cmd){case Ke.SUBSCRIBE:case Ke.UNSUBSCRIBE:return;default:return(t=e.transfer)!==null&&t!==void 0?t:void 0}}constructor(e,t){if(this.sdkVersion=Wp,this.mobileAppVersion=null,this.source=null,this.sourceOrigin="",this.eventBus=new of,this.pendingCommands=new Map,this.sendCommand=a=>{var l;if(this.source==null)throw new Error("Attempting to send message before initialization");const c=Fl();return(l=this.source)===null||l===void 0||l.postMessage([Ei.FRAME,Object.assign(Object.assign({},a),{nonce:c})],this.sourceOrigin,this.getTransfer(a)),new Promise((d,f)=>{this.pendingCommands.set(c,{resolve:d,reject:f})})},this.commands=kp(this.sendCommand),this.handleMessage=a=>{if(!jp.has(a.origin))return;const l=a.data;if(!Array.isArray(l))return;const[c,u]=l;switch(c){case Ei.HELLO:return;case Ei.CLOSE:return this.handleClose(u);case Ei.HANDSHAKE:return this.handleHandshake();case Ei.FRAME:return this.handleFrame(u);default:throw new Error("Invalid message format")}},this.isReady=!1,this.clientId=e,this.configuration=t??Hp(),typeof window<"u"&&window.addEventListener("message",this.handleMessage),typeof window>"u"){this.frameId="",this.instanceId="",this.customId=null,this.referrerId=null,this.platform=Si.DESKTOP,this.guildId=null,this.channelId=null,this.locationId=null;return}const i=new URLSearchParams(this._getSearch()),r=i.get("frame_id");if(!r)throw new Error("frame_id query param is not defined");this.frameId=r;const s=i.get("instance_id");if(!s)throw new Error("instance_id query param is not defined");this.instanceId=s;const o=i.get("platform");if(o){if(o!==Si.DESKTOP&&o!==Si.MOBILE)throw new Error(`Invalid query param "platform" of "${o}". Valid values are "${Si.DESKTOP}" or "${Si.MOBILE}"`)}else throw new Error("platform query param is not defined");this.platform=o,this.customId=i.get("custom_id"),this.referrerId=i.get("referrer_id"),this.guildId=i.get("guild_id"),this.channelId=i.get("channel_id"),this.locationId=i.get("location_id"),this.mobileAppVersion=i.get("mobile_app_version"),[this.source,this.sourceOrigin]=$p(),this.addOnReadyListener(),this.handshake()}close(e,t){var i;window.removeEventListener("message",this.handleMessage);const r=Fl();(i=this.source)===null||i===void 0||i.postMessage([Ei.CLOSE,{code:e,message:t,nonce:r}],this.sourceOrigin)}async subscribe(e,t,...i){const[r]=i,s=this.eventBus.listenerCount(e),o=this.eventBus.on(e,t);return Object.values(Pt).includes(e)&&e!==Pt.READY&&s===0&&await this.sendCommand({cmd:Ke.SUBSCRIBE,args:r,evt:e}),o}async unsubscribe(e,t,...i){const[r]=i;return e!==Pt.READY&&this.eventBus.listenerCount(e)===1&&await this.sendCommand({cmd:Ke.UNSUBSCRIBE,evt:e,args:r}),this.eventBus.off(e,t)}async ready(){this.isReady||await new Promise(e=>{this.eventBus.once(Pt.READY,e)})}parseMajorMobileVersion(){if(this.mobileAppVersion&&this.mobileAppVersion.includes("."))try{return parseInt(this.mobileAppVersion.split(".")[0])}catch{return Nl}return Nl}handshake(){var e;const t={v:1,encoding:"json",client_id:this.clientId,frame_id:this.frameId},i=this.parseMajorMobileVersion();(this.platform===Si.DESKTOP||i>=ph)&&(t.sdk_version=this.sdkVersion),(e=this.source)===null||e===void 0||e.postMessage([Ei.HANDSHAKE,t],this.sourceOrigin)}addOnReadyListener(){this.eventBus.once(Pt.READY,()=>{this.overrideConsoleLogging(),this.isReady=!0})}overrideConsoleLogging(){if(this.configuration.disableConsoleLogOverride)return;const e=(t,i)=>{this.commands.captureLog({level:t,message:i})};zp.forEach(t=>{Vp(console,t,e)})}handleClose(e){pp.parse(e)}handleHandshake(){}handleFrame(e){var t,i;let r;try{r=_p(e)}catch(s){console.error("Failed to parse",e),console.error(s);return}if(r.cmd==="DISPATCH")this.eventBus.emit(r.evt,r.data);else{if(r.evt===ol){if(r.nonce!=null){(t=this.pendingCommands.get(r.nonce))===null||t===void 0||t.reject(r.data),this.pendingCommands.delete(r.nonce);return}this.eventBus.emit("error",new Gp(r.data.code,r.data.message))}if(r.nonce==null){console.error("Missing nonce",e);return}(i=this.pendingCommands.get(r.nonce))===null||i===void 0||i.resolve(r),this.pendingCommands.delete(r.nonce)}}_getSearch(){return typeof window>"u"?"":window.location.search}}var es=1e9,Qp={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},Ju,zt=!0,zn="[DecimalError] ",ar=zn+"Invalid argument: ",ll=zn+"Exponent out of range: ",ts=Math.floor,er=Math.pow,em=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Nn,sn=1e7,kt=7,Yu=9007199254740991,Na=ts(Yu/kt),Ge={};Ge.absoluteValue=Ge.abs=function(){var n=new this.constructor(this);return n.s&&(n.s=1),n};Ge.comparedTo=Ge.cmp=function(n){var e,t,i,r,s=this;if(n=new s.constructor(n),s.s!==n.s)return s.s||-n.s;if(s.e!==n.e)return s.e>n.e^s.s<0?1:-1;for(i=s.d.length,r=n.d.length,e=0,t=i<r?i:r;e<t;++e)if(s.d[e]!==n.d[e])return s.d[e]>n.d[e]^s.s<0?1:-1;return i===r?0:i>r^s.s<0?1:-1};Ge.decimalPlaces=Ge.dp=function(){var n=this,e=n.d.length-1,t=(e-n.e)*kt;if(e=n.d[e],e)for(;e%10==0;e/=10)t--;return t<0?0:t};Ge.dividedBy=Ge.div=function(n){return Mi(this,new this.constructor(n))};Ge.dividedToIntegerBy=Ge.idiv=function(n){var e=this,t=e.constructor;return Dt(Mi(e,new t(n),0,1),t.precision)};Ge.equals=Ge.eq=function(n){return!this.cmp(n)};Ge.exponent=function(){return jt(this)};Ge.greaterThan=Ge.gt=function(n){return this.cmp(n)>0};Ge.greaterThanOrEqualTo=Ge.gte=function(n){return this.cmp(n)>=0};Ge.isInteger=Ge.isint=function(){return this.e>this.d.length-2};Ge.isNegative=Ge.isneg=function(){return this.s<0};Ge.isPositive=Ge.ispos=function(){return this.s>0};Ge.isZero=function(){return this.s===0};Ge.lessThan=Ge.lt=function(n){return this.cmp(n)<0};Ge.lessThanOrEqualTo=Ge.lte=function(n){return this.cmp(n)<1};Ge.logarithm=Ge.log=function(n){var e,t=this,i=t.constructor,r=i.precision,s=r+5;if(n===void 0)n=new i(10);else if(n=new i(n),n.s<1||n.eq(Nn))throw Error(zn+"NaN");if(t.s<1)throw Error(zn+(t.s?"NaN":"-Infinity"));return t.eq(Nn)?new i(0):(zt=!1,e=Mi(Ds(t,s),Ds(n,s),s),zt=!0,Dt(e,r))};Ge.minus=Ge.sub=function(n){var e=this;return n=new e.constructor(n),e.s==n.s?Ku(e,n):Zu(e,(n.s=-n.s,n))};Ge.modulo=Ge.mod=function(n){var e,t=this,i=t.constructor,r=i.precision;if(n=new i(n),!n.s)throw Error(zn+"NaN");return t.s?(zt=!1,e=Mi(t,n,0,1).times(n),zt=!0,t.minus(e)):Dt(new i(t),r)};Ge.naturalExponential=Ge.exp=function(){return ju(this)};Ge.naturalLogarithm=Ge.ln=function(){return Ds(this)};Ge.negated=Ge.neg=function(){var n=new this.constructor(this);return n.s=-n.s||0,n};Ge.plus=Ge.add=function(n){var e=this;return n=new e.constructor(n),e.s==n.s?Zu(e,n):Ku(e,(n.s=-n.s,n))};Ge.precision=Ge.sd=function(n){var e,t,i,r=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(ar+n);if(e=jt(r)+1,i=r.d.length-1,t=i*kt+1,i=r.d[i],i){for(;i%10==0;i/=10)t--;for(i=r.d[0];i>=10;i/=10)t++}return n&&e>t?e:t};Ge.squareRoot=Ge.sqrt=function(){var n,e,t,i,r,s,o,a=this,l=a.constructor;if(a.s<1){if(!a.s)return new l(0);throw Error(zn+"NaN")}for(n=jt(a),zt=!1,r=Math.sqrt(+a),r==0||r==1/0?(e=ni(a.d),(e.length+n)%2==0&&(e+="0"),r=Math.sqrt(e),n=ts((n+1)/2)-(n<0||n%2),r==1/0?e="5e"+n:(e=r.toExponential(),e=e.slice(0,e.indexOf("e")+1)+n),i=new l(e)):i=new l(r.toString()),t=l.precision,r=o=t+3;;)if(s=i,i=s.plus(Mi(a,s,o+2)).times(.5),ni(s.d).slice(0,o)===(e=ni(i.d)).slice(0,o)){if(e=e.slice(o-3,o+1),r==o&&e=="4999"){if(Dt(s,t+1,0),s.times(s).eq(a)){i=s;break}}else if(e!="9999")break;o+=4}return zt=!0,Dt(i,t)};Ge.times=Ge.mul=function(n){var e,t,i,r,s,o,a,l,c,u=this,d=u.constructor,f=u.d,_=(n=new d(n)).d;if(!u.s||!n.s)return new d(0);for(n.s*=u.s,t=u.e+n.e,l=f.length,c=_.length,l<c&&(s=f,f=_,_=s,o=l,l=c,c=o),s=[],o=l+c,i=o;i--;)s.push(0);for(i=c;--i>=0;){for(e=0,r=l+i;r>i;)a=s[r]+_[i]*f[r-i-1]+e,s[r--]=a%sn|0,e=a/sn|0;s[r]=(s[r]+e)%sn|0}for(;!s[--o];)s.pop();return e?++t:s.shift(),n.d=s,n.e=t,zt?Dt(n,d.precision):n};Ge.toDecimalPlaces=Ge.todp=function(n,e){var t=this,i=t.constructor;return t=new i(t),n===void 0?t:(oi(n,0,es),e===void 0?e=i.rounding:oi(e,0,8),Dt(t,n+jt(t)+1,e))};Ge.toExponential=function(n,e){var t,i=this,r=i.constructor;return n===void 0?t=hr(i,!0):(oi(n,0,es),e===void 0?e=r.rounding:oi(e,0,8),i=Dt(new r(i),n+1,e),t=hr(i,!0,n+1)),t};Ge.toFixed=function(n,e){var t,i,r=this,s=r.constructor;return n===void 0?hr(r):(oi(n,0,es),e===void 0?e=s.rounding:oi(e,0,8),i=Dt(new s(r),n+jt(r)+1,e),t=hr(i.abs(),!1,n+jt(i)+1),r.isneg()&&!r.isZero()?"-"+t:t)};Ge.toInteger=Ge.toint=function(){var n=this,e=n.constructor;return Dt(new e(n),jt(n)+1,e.rounding)};Ge.toNumber=function(){return+this};Ge.toPower=Ge.pow=function(n){var e,t,i,r,s,o,a=this,l=a.constructor,c=12,u=+(n=new l(n));if(!n.s)return new l(Nn);if(a=new l(a),!a.s){if(n.s<1)throw Error(zn+"Infinity");return a}if(a.eq(Nn))return a;if(i=l.precision,n.eq(Nn))return Dt(a,i);if(e=n.e,t=n.d.length-1,o=e>=t,s=a.s,o){if((t=u<0?-u:u)<=Yu){for(r=new l(Nn),e=Math.ceil(i/kt+4),zt=!1;t%2&&(r=r.times(a),kl(r.d,e)),t=ts(t/2),t!==0;)a=a.times(a),kl(a.d,e);return zt=!0,n.s<0?new l(Nn).div(r):Dt(r,i)}}else if(s<0)throw Error(zn+"NaN");return s=s<0&&n.d[Math.max(e,t)]&1?-1:1,a.s=1,zt=!1,r=n.times(Ds(a,i+c)),zt=!0,r=ju(r),r.s=s,r};Ge.toPrecision=function(n,e){var t,i,r=this,s=r.constructor;return n===void 0?(t=jt(r),i=hr(r,t<=s.toExpNeg||t>=s.toExpPos)):(oi(n,1,es),e===void 0?e=s.rounding:oi(e,0,8),r=Dt(new s(r),n,e),t=jt(r),i=hr(r,n<=t||t<=s.toExpNeg,n)),i};Ge.toSignificantDigits=Ge.tosd=function(n,e){var t=this,i=t.constructor;return n===void 0?(n=i.precision,e=i.rounding):(oi(n,1,es),e===void 0?e=i.rounding:oi(e,0,8)),Dt(new i(t),n,e)};Ge.toString=Ge.valueOf=Ge.val=Ge.toJSON=Ge[Symbol.for("nodejs.util.inspect.custom")]=function(){var n=this,e=jt(n),t=n.constructor;return hr(n,e<=t.toExpNeg||e>=t.toExpPos)};function Zu(n,e){var t,i,r,s,o,a,l,c,u=n.constructor,d=u.precision;if(!n.s||!e.s)return e.s||(e=new u(n)),zt?Dt(e,d):e;if(l=n.d,c=e.d,o=n.e,r=e.e,l=l.slice(),s=o-r,s){for(s<0?(i=l,s=-s,a=c.length):(i=c,r=o,a=l.length),o=Math.ceil(d/kt),a=o>a?o+1:a+1,s>a&&(s=a,i.length=1),i.reverse();s--;)i.push(0);i.reverse()}for(a=l.length,s=c.length,a-s<0&&(s=a,i=c,c=l,l=i),t=0;s;)t=(l[--s]=l[s]+c[s]+t)/sn|0,l[s]%=sn;for(t&&(l.unshift(t),++r),a=l.length;l[--a]==0;)l.pop();return e.d=l,e.e=r,zt?Dt(e,d):e}function oi(n,e,t){if(n!==~~n||n<e||n>t)throw Error(ar+n)}function ni(n){var e,t,i,r=n.length-1,s="",o=n[0];if(r>0){for(s+=o,e=1;e<r;e++)i=n[e]+"",t=kt-i.length,t&&(s+=Ci(t)),s+=i;o=n[e],i=o+"",t=kt-i.length,t&&(s+=Ci(t))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}var Mi=function(){function n(i,r){var s,o=0,a=i.length;for(i=i.slice();a--;)s=i[a]*r+o,i[a]=s%sn|0,o=s/sn|0;return o&&i.unshift(o),i}function e(i,r,s,o){var a,l;if(s!=o)l=s>o?1:-1;else for(a=l=0;a<s;a++)if(i[a]!=r[a]){l=i[a]>r[a]?1:-1;break}return l}function t(i,r,s){for(var o=0;s--;)i[s]-=o,o=i[s]<r[s]?1:0,i[s]=o*sn+i[s]-r[s];for(;!i[0]&&i.length>1;)i.shift()}return function(i,r,s,o){var a,l,c,u,d,f,_,S,E,p,h,R,M,L,H,O,C,de,T=i.constructor,w=i.s==r.s?1:-1,te=i.d,ne=r.d;if(!i.s)return new T(i);if(!r.s)throw Error(zn+"Division by zero");for(l=i.e-r.e,C=ne.length,H=te.length,_=new T(w),S=_.d=[],c=0;ne[c]==(te[c]||0);)++c;if(ne[c]>(te[c]||0)&&--l,s==null?R=s=T.precision:o?R=s+(jt(i)-jt(r))+1:R=s,R<0)return new T(0);if(R=R/kt+2|0,c=0,C==1)for(u=0,ne=ne[0],R++;(c<H||u)&&R--;c++)M=u*sn+(te[c]||0),S[c]=M/ne|0,u=M%ne|0;else{for(u=sn/(ne[0]+1)|0,u>1&&(ne=n(ne,u),te=n(te,u),C=ne.length,H=te.length),L=C,E=te.slice(0,C),p=E.length;p<C;)E[p++]=0;de=ne.slice(),de.unshift(0),O=ne[0],ne[1]>=sn/2&&++O;do u=0,a=e(ne,E,C,p),a<0?(h=E[0],C!=p&&(h=h*sn+(E[1]||0)),u=h/O|0,u>1?(u>=sn&&(u=sn-1),d=n(ne,u),f=d.length,p=E.length,a=e(d,E,f,p),a==1&&(u--,t(d,C<f?de:ne,f))):(u==0&&(a=u=1),d=ne.slice()),f=d.length,f<p&&d.unshift(0),t(E,d,p),a==-1&&(p=E.length,a=e(ne,E,C,p),a<1&&(u++,t(E,C<p?de:ne,p))),p=E.length):a===0&&(u++,E=[0]),S[c++]=u,a&&E[0]?E[p++]=te[L]||0:(E=[te[L]],p=1);while((L++<H||E[0]!==void 0)&&R--)}return S[0]||S.shift(),_.e=l,Dt(_,o?s+jt(_)+1:s)}}();function ju(n,e){var t,i,r,s,o,a,l=0,c=0,u=n.constructor,d=u.precision;if(jt(n)>16)throw Error(ll+jt(n));if(!n.s)return new u(Nn);for(zt=!1,a=d,o=new u(.03125);n.abs().gte(.1);)n=n.times(o),c+=5;for(i=Math.log(er(2,c))/Math.LN10*2+5|0,a+=i,t=r=s=new u(Nn),u.precision=a;;){if(r=Dt(r.times(n),a),t=t.times(++l),o=s.plus(Mi(r,t,a)),ni(o.d).slice(0,a)===ni(s.d).slice(0,a)){for(;c--;)s=Dt(s.times(s),a);return u.precision=d,e==null?(zt=!0,Dt(s,d)):s}s=o}}function jt(n){for(var e=n.e*kt,t=n.d[0];t>=10;t/=10)e++;return e}function to(n,e,t){if(e>n.LN10.sd())throw zt=!0,t&&(n.precision=t),Error(zn+"LN10 precision limit exceeded");return Dt(new n(n.LN10),e)}function Ci(n){for(var e="";n--;)e+="0";return e}function Ds(n,e){var t,i,r,s,o,a,l,c,u,d=1,f=10,_=n,S=_.d,E=_.constructor,p=E.precision;if(_.s<1)throw Error(zn+(_.s?"NaN":"-Infinity"));if(_.eq(Nn))return new E(0);if(e==null?(zt=!1,c=p):c=e,_.eq(10))return e==null&&(zt=!0),to(E,c);if(c+=f,E.precision=c,t=ni(S),i=t.charAt(0),s=jt(_),Math.abs(s)<15e14){for(;i<7&&i!=1||i==1&&t.charAt(1)>3;)_=_.times(n),t=ni(_.d),i=t.charAt(0),d++;s=jt(_),i>1?(_=new E("0."+t),s++):_=new E(i+"."+t.slice(1))}else return l=to(E,c+2,p).times(s+""),_=Ds(new E(i+"."+t.slice(1)),c-f).plus(l),E.precision=p,e==null?(zt=!0,Dt(_,p)):_;for(a=o=_=Mi(_.minus(Nn),_.plus(Nn),c),u=Dt(_.times(_),c),r=3;;){if(o=Dt(o.times(u),c),l=a.plus(Mi(o,new E(r),c)),ni(l.d).slice(0,c)===ni(a.d).slice(0,c))return a=a.times(2),s!==0&&(a=a.plus(to(E,c+2,p).times(s+""))),a=Mi(a,new E(d),c),E.precision=p,e==null?(zt=!0,Dt(a,p)):a;a=l,r+=2}}function Bl(n,e){var t,i,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(t<0&&(t=i),t+=+e.slice(i+1),e=e.substring(0,i)):t<0&&(t=e.length),i=0;e.charCodeAt(i)===48;)++i;for(r=e.length;e.charCodeAt(r-1)===48;)--r;if(e=e.slice(i,r),e){if(r-=i,t=t-i-1,n.e=ts(t/kt),n.d=[],i=(t+1)%kt,t<0&&(i+=kt),i<r){for(i&&n.d.push(+e.slice(0,i)),r-=kt;i<r;)n.d.push(+e.slice(i,i+=kt));e=e.slice(i),i=kt-e.length}else i-=r;for(;i--;)e+="0";if(n.d.push(+e),zt&&(n.e>Na||n.e<-Na))throw Error(ll+t)}else n.s=0,n.e=0,n.d=[0];return n}function Dt(n,e,t){var i,r,s,o,a,l,c,u,d=n.d;for(o=1,s=d[0];s>=10;s/=10)o++;if(i=e-o,i<0)i+=kt,r=e,c=d[u=0];else{if(u=Math.ceil((i+1)/kt),s=d.length,u>=s)return n;for(c=s=d[u],o=1;s>=10;s/=10)o++;i%=kt,r=i-kt+o}if(t!==void 0&&(s=er(10,o-r-1),a=c/s%10|0,l=e<0||d[u+1]!==void 0||c%s,l=t<4?(a||l)&&(t==0||t==(n.s<0?3:2)):a>5||a==5&&(t==4||l||t==6&&(i>0?r>0?c/er(10,o-r):0:d[u-1])%10&1||t==(n.s<0?8:7))),e<1||!d[0])return l?(s=jt(n),d.length=1,e=e-s-1,d[0]=er(10,(kt-e%kt)%kt),n.e=ts(-e/kt)||0):(d.length=1,d[0]=n.e=n.s=0),n;if(i==0?(d.length=u,s=1,u--):(d.length=u+1,s=er(10,kt-i),d[u]=r>0?(c/er(10,o-r)%er(10,r)|0)*s:0),l)for(;;)if(u==0){(d[0]+=s)==sn&&(d[0]=1,++n.e);break}else{if(d[u]+=s,d[u]!=sn)break;d[u--]=0,s=1}for(i=d.length;d[--i]===0;)d.pop();if(zt&&(n.e>Na||n.e<-Na))throw Error(ll+jt(n));return n}function Ku(n,e){var t,i,r,s,o,a,l,c,u,d,f=n.constructor,_=f.precision;if(!n.s||!e.s)return e.s?e.s=-e.s:e=new f(n),zt?Dt(e,_):e;if(l=n.d,d=e.d,i=e.e,c=n.e,l=l.slice(),o=c-i,o){for(u=o<0,u?(t=l,o=-o,a=d.length):(t=d,i=c,a=l.length),r=Math.max(Math.ceil(_/kt),a)+2,o>r&&(o=r,t.length=1),t.reverse(),r=o;r--;)t.push(0);t.reverse()}else{for(r=l.length,a=d.length,u=r<a,u&&(a=r),r=0;r<a;r++)if(l[r]!=d[r]){u=l[r]<d[r];break}o=0}for(u&&(t=l,l=d,d=t,e.s=-e.s),a=l.length,r=d.length-a;r>0;--r)l[a++]=0;for(r=d.length;r>o;){if(l[--r]<d[r]){for(s=r;s&&l[--s]===0;)l[s]=sn-1;--l[s],l[r]+=sn}l[r]-=d[r]}for(;l[--a]===0;)l.pop();for(;l[0]===0;l.shift())--i;return l[0]?(e.d=l,e.e=i,zt?Dt(e,_):e):new f(0)}function hr(n,e,t){var i,r=jt(n),s=ni(n.d),o=s.length;return e?(t&&(i=t-o)>0?s=s.charAt(0)+"."+s.slice(1)+Ci(i):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(r<0?"e":"e+")+r):r<0?(s="0."+Ci(-r-1)+s,t&&(i=t-o)>0&&(s+=Ci(i))):r>=o?(s+=Ci(r+1-o),t&&(i=t-r-1)>0&&(s=s+"."+Ci(i))):((i=r+1)<o&&(s=s.slice(0,i)+"."+s.slice(i)),t&&(i=t-o)>0&&(r+1===o&&(s+="."),s+=Ci(i))),n.s<0?"-"+s:s}function kl(n,e){if(n.length>e)return n.length=e,!0}function $u(n){var e,t,i;function r(s){var o=this;if(!(o instanceof r))return new r(s);if(o.constructor=r,s instanceof r){o.s=s.s,o.e=s.e,o.d=(s=s.d)?s.slice():s;return}if(typeof s=="number"){if(s*0!==0)throw Error(ar+s);if(s>0)o.s=1;else if(s<0)s=-s,o.s=-1;else{o.s=0,o.e=0,o.d=[0];return}if(s===~~s&&s<1e7){o.e=0,o.d=[s];return}return Bl(o,s.toString())}else if(typeof s!="string")throw Error(ar+s);if(s.charCodeAt(0)===45?(s=s.slice(1),o.s=-1):o.s=1,em.test(s))Bl(o,s);else throw Error(ar+s)}if(r.prototype=Ge,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.clone=$u,r.config=r.set=tm,n===void 0&&(n={}),n)for(i=["precision","rounding","toExpNeg","toExpPos","LN10"],e=0;e<i.length;)n.hasOwnProperty(t=i[e++])||(n[t]=this[t]);return r.config(n),r}function tm(n){if(!n||typeof n!="object")throw Error(zn+"Object expected");var e,t,i,r=["precision",1,es,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(e=0;e<r.length;e+=3)if((i=n[t=r[e]])!==void 0)if(ts(i)===i&&i>=r[e+1]&&i<=r[e+2])this[t]=i;else throw Error(ar+t+": "+i);if((i=n[t="LN10"])!==void 0)if(i==Math.LN10)this[t]=new this(i);else throw Error(ar+t+": "+i);return this}var Ju=$u(Qp);Nn=new Ju(1);var k;(function(n){n.AED="aed",n.AFN="afn",n.ALL="all",n.AMD="amd",n.ANG="ang",n.AOA="aoa",n.ARS="ars",n.AUD="aud",n.AWG="awg",n.AZN="azn",n.BAM="bam",n.BBD="bbd",n.BDT="bdt",n.BGN="bgn",n.BHD="bhd",n.BIF="bif",n.BMD="bmd",n.BND="bnd",n.BOB="bob",n.BOV="bov",n.BRL="brl",n.BSD="bsd",n.BTN="btn",n.BWP="bwp",n.BYN="byn",n.BYR="byr",n.BZD="bzd",n.CAD="cad",n.CDF="cdf",n.CHE="che",n.CHF="chf",n.CHW="chw",n.CLF="clf",n.CLP="clp",n.CNY="cny",n.COP="cop",n.COU="cou",n.CRC="crc",n.CUC="cuc",n.CUP="cup",n.CVE="cve",n.CZK="czk",n.DJF="djf",n.DKK="dkk",n.DOP="dop",n.DZD="dzd",n.EGP="egp",n.ERN="ern",n.ETB="etb",n.EUR="eur",n.FJD="fjd",n.FKP="fkp",n.GBP="gbp",n.GEL="gel",n.GHS="ghs",n.GIP="gip",n.GMD="gmd",n.GNF="gnf",n.GTQ="gtq",n.GYD="gyd",n.HKD="hkd",n.HNL="hnl",n.HRK="hrk",n.HTG="htg",n.HUF="huf",n.IDR="idr",n.ILS="ils",n.INR="inr",n.IQD="iqd",n.IRR="irr",n.ISK="isk",n.JMD="jmd",n.JOD="jod",n.JPY="jpy",n.KES="kes",n.KGS="kgs",n.KHR="khr",n.KMF="kmf",n.KPW="kpw",n.KRW="krw",n.KWD="kwd",n.KYD="kyd",n.KZT="kzt",n.LAK="lak",n.LBP="lbp",n.LKR="lkr",n.LRD="lrd",n.LSL="lsl",n.LTL="ltl",n.LVL="lvl",n.LYD="lyd",n.MAD="mad",n.MDL="mdl",n.MGA="mga",n.MKD="mkd",n.MMK="mmk",n.MNT="mnt",n.MOP="mop",n.MRO="mro",n.MUR="mur",n.MVR="mvr",n.MWK="mwk",n.MXN="mxn",n.MXV="mxv",n.MYR="myr",n.MZN="mzn",n.NAD="nad",n.NGN="ngn",n.NIO="nio",n.NOK="nok",n.NPR="npr",n.NZD="nzd",n.OMR="omr",n.PAB="pab",n.PEN="pen",n.PGK="pgk",n.PHP="php",n.PKR="pkr",n.PLN="pln",n.PYG="pyg",n.QAR="qar",n.RON="ron",n.RSD="rsd",n.RUB="rub",n.RWF="rwf",n.SAR="sar",n.SBD="sbd",n.SCR="scr",n.SDG="sdg",n.SEK="sek",n.SGD="sgd",n.SHP="shp",n.SLL="sll",n.SOS="sos",n.SRD="srd",n.SSP="ssp",n.STD="std",n.SVC="svc",n.SYP="syp",n.SZL="szl",n.THB="thb",n.TJS="tjs",n.TMT="tmt",n.TND="tnd",n.TOP="top",n.TRY="try",n.TTD="ttd",n.TWD="twd",n.TZS="tzs",n.UAH="uah",n.UGX="ugx",n.USD="usd",n.USN="usn",n.USS="uss",n.UYI="uyi",n.UYU="uyu",n.UZS="uzs",n.VEF="vef",n.VND="vnd",n.VUV="vuv",n.WST="wst",n.XAF="xaf",n.XAG="xag",n.XAU="xau",n.XBA="xba",n.XBB="xbb",n.XBC="xbc",n.XBD="xbd",n.XCD="xcd",n.XDR="xdr",n.XFU="xfu",n.XOF="xof",n.XPD="xpd",n.XPF="xpf",n.XPT="xpt",n.XSU="xsu",n.XTS="xts",n.XUA="xua",n.YER="yer",n.ZAR="zar",n.ZMW="zmw",n.ZWL="zwl"})(k||(k={}));k.AED+"",k.AFN+"",k.ALL+"",k.AMD+"",k.ANG+"",k.AOA+"",k.ARS+"",k.AUD+"",k.AWG+"",k.AZN+"",k.BAM+"",k.BBD+"",k.BDT+"",k.BGN+"",k.BHD+"",k.BIF+"",k.BMD+"",k.BND+"",k.BOB+"",k.BOV+"",k.BRL+"",k.BSD+"",k.BTN+"",k.BWP+"",k.BYR+"",k.BYN+"",k.BZD+"",k.CAD+"",k.CDF+"",k.CHE+"",k.CHF+"",k.CHW+"",k.CLF+"",k.CLP+"",k.CNY+"",k.COP+"",k.COU+"",k.CRC+"",k.CUC+"",k.CUP+"",k.CVE+"",k.CZK+"",k.DJF+"",k.DKK+"",k.DOP+"",k.DZD+"",k.EGP+"",k.ERN+"",k.ETB+"",k.EUR+"",k.FJD+"",k.FKP+"",k.GBP+"",k.GEL+"",k.GHS+"",k.GIP+"",k.GMD+"",k.GNF+"",k.GTQ+"",k.GYD+"",k.HKD+"",k.HNL+"",k.HRK+"",k.HTG+"",k.HUF+"",k.IDR+"",k.ILS+"",k.INR+"",k.IQD+"",k.IRR+"",k.ISK+"",k.JMD+"",k.JOD+"",k.JPY+"",k.KES+"",k.KGS+"",k.KHR+"",k.KMF+"",k.KPW+"",k.KRW+"",k.KWD+"",k.KYD+"",k.KZT+"",k.LAK+"",k.LBP+"",k.LKR+"",k.LRD+"",k.LSL+"",k.LTL+"",k.LVL+"",k.LYD+"",k.MAD+"",k.MDL+"",k.MGA+"",k.MKD+"",k.MMK+"",k.MNT+"",k.MOP+"",k.MRO+"",k.MUR+"",k.MVR+"",k.MWK+"",k.MXN+"",k.MXV+"",k.MYR+"",k.MZN+"",k.NAD+"",k.NGN+"",k.NIO+"",k.NOK+"",k.NPR+"",k.NZD+"",k.OMR+"",k.PAB+"",k.PEN+"",k.PGK+"",k.PHP+"",k.PKR+"",k.PLN+"",k.PYG+"",k.QAR+"",k.RON+"",k.RSD+"",k.RUB+"",k.RWF+"",k.SAR+"",k.SBD+"",k.SCR+"",k.SDG+"",k.SEK+"",k.SGD+"",k.SHP+"",k.SLL+"",k.SOS+"",k.SRD+"",k.SSP+"",k.STD+"",k.SVC+"",k.SYP+"",k.SZL+"",k.THB+"",k.TJS+"",k.TMT+"",k.TND+"",k.TOP+"",k.TRY+"",k.TTD+"",k.TWD+"",k.TZS+"",k.UAH+"",k.UGX+"",k.USD+"",k.USN+"",k.USS+"",k.UYI+"",k.UYU+"",k.UZS+"",k.VEF+"",k.VND+"",k.VUV+"",k.WST+"",k.XAF+"",k.XAG+"",k.XAU+"",k.XBA+"",k.XBB+"",k.XBC+"",k.XBD+"",k.XCD+"",k.XDR+"",k.XFU+"",k.XOF+"",k.XPD+"",k.XPF+"",k.XPT+"",k.XSU+"",k.XTS+"",k.XUA+"",k.YER+"",k.ZAR+"",k.ZMW+"",k.ZWL+"";var ms={exports:{}};ms.exports;var Gl;function nm(){return Gl||(Gl=1,function(n,e){var t=200,i="Expected a function",r="__lodash_hash_undefined__",s=1,o=2,a=9007199254740991,l="[object Arguments]",c="[object Array]",u="[object Boolean]",d="[object Date]",f="[object Error]",_="[object Function]",S="[object GeneratorFunction]",E="[object Map]",p="[object Number]",h="[object Object]",R="[object Promise]",M="[object RegExp]",L="[object Set]",H="[object String]",O="[object Symbol]",C="[object WeakMap]",de="[object ArrayBuffer]",T="[object DataView]",w="[object Float32Array]",te="[object Float64Array]",ne="[object Int8Array]",ge="[object Int16Array]",G="[object Int32Array]",J="[object Uint8Array]",oe="[object Uint8ClampedArray]",ue="[object Uint16Array]",ae="[object Uint32Array]",se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/,ve=/^\./,Ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,fe=/\\(\\)?/g,we=/^\[object .+?Constructor\]$/,ze=/^(?:0|[1-9]\d*)$/,Se={};Se[w]=Se[te]=Se[ne]=Se[ge]=Se[G]=Se[J]=Se[oe]=Se[ue]=Se[ae]=!0,Se[l]=Se[c]=Se[de]=Se[u]=Se[T]=Se[d]=Se[f]=Se[_]=Se[E]=Se[p]=Se[h]=Se[M]=Se[L]=Se[H]=Se[C]=!1;var Qe=typeof Js=="object"&&Js&&Js.Object===Object&&Js,lt=typeof self=="object"&&self&&self.Object===Object&&self,Ne=Qe||lt||Function("return this")(),ht=e&&!e.nodeType&&e,Y=ht&&!0&&n&&!n.nodeType&&n,Vt=Y&&Y.exports===ht,qe=Vt&&Qe.process,nt=function(){try{return qe&&qe.binding("util")}catch{}}(),He=nt&&nt.isTypedArray;function Lt(v,P){for(var ie=-1,ye=v?v.length:0;++ie<ye&&P(v[ie],ie,v)!==!1;);return v}function tt(v,P){for(var ie=-1,ye=v?v.length:0;++ie<ye;)if(P(v[ie],ie,v))return!0;return!1}function A(v){return function(P){return P==null?void 0:P[v]}}function x(v,P){for(var ie=-1,ye=Array(v);++ie<v;)ye[ie]=P(ie);return ye}function Z(v){return function(P){return v(P)}}function pe(v,P){return v==null?void 0:v[P]}function he(v){var P=!1;if(v!=null&&typeof v.toString!="function")try{P=!!(v+"")}catch{}return P}function $(v){var P=-1,ie=Array(v.size);return v.forEach(function(ye,ft){ie[++P]=[ft,ye]}),ie}function Ue(v,P){return function(ie){return v(P(ie))}}function m(v){var P=-1,ie=Array(v.size);return v.forEach(function(ye){ie[++P]=ye}),ie}var g=Array.prototype,b=Function.prototype,N=Object.prototype,I=Ne["__core-js_shared__"],F=function(){var v=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||"");return v?"Symbol(src)_1."+v:""}(),W=b.toString,V=N.hasOwnProperty,q=N.toString,ce=RegExp("^"+W.call(V).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Me=Ne.Symbol,Pe=Ne.Uint8Array,Ve=Ue(Object.getPrototypeOf,Object),We=Object.create,me=N.propertyIsEnumerable,D=g.splice,Te=Ue(Object.keys,Object),Re=vr(Ne,"DataView"),et=vr(Ne,"Map"),$e=vr(Ne,"Promise"),Rt=vr(Ne,"Set"),At=vr(Ne,"WeakMap"),Ut=vr(Object,"create"),Kt=Zi(Re),U=Zi(et),re=Zi($e),xe=Zi(Rt),at=Zi(At),Je=Me?Me.prototype:void 0,Le=Je?Je.valueOf:void 0,ke=Je?Je.toString:void 0;function mt(v){var P=-1,ie=v?v.length:0;for(this.clear();++P<ie;){var ye=v[P];this.set(ye[0],ye[1])}}function Be(){this.__data__=Ut?Ut(null):{}}function vt(v){return this.has(v)&&delete this.__data__[v]}function Gt(v){var P=this.__data__;if(Ut){var ie=P[v];return ie===r?void 0:ie}return V.call(P,v)?P[v]:void 0}function je(v){var P=this.__data__;return Ut?P[v]!==void 0:V.call(P,v)}function Tt(v,P){var ie=this.__data__;return ie[v]=Ut&&P===void 0?r:P,this}mt.prototype.clear=Be,mt.prototype.delete=vt,mt.prototype.get=Gt,mt.prototype.has=je,mt.prototype.set=Tt;function y(v){var P=-1,ie=v?v.length:0;for(this.clear();++P<ie;){var ye=v[P];this.set(ye[0],ye[1])}}function z(){this.__data__=[]}function X(v){var P=this.__data__,ie=Jn(P,v);if(ie<0)return!1;var ye=P.length-1;return ie==ye?P.pop():D.call(P,ie,1),!0}function K(v){var P=this.__data__,ie=Jn(P,v);return ie<0?void 0:P[ie][1]}function j(v){return Jn(this.__data__,v)>-1}function Ce(v,P){var ie=this.__data__,ye=Jn(ie,v);return ye<0?ie.push([v,P]):ie[ye][1]=P,this}y.prototype.clear=z,y.prototype.delete=X,y.prototype.get=K,y.prototype.has=j,y.prototype.set=Ce;function Oe(v){var P=-1,ie=v?v.length:0;for(this.clear();++P<ie;){var ye=v[P];this.set(ye[0],ye[1])}}function it(){this.__data__={hash:new mt,map:new(et||y),string:new mt}}function ct(v){return Xs(this,v).delete(v)}function gt(v){return Xs(this,v).get(v)}function dt(v){return Xs(this,v).has(v)}function pt(v,P){return Xs(this,v).set(v,P),this}Oe.prototype.clear=it,Oe.prototype.delete=ct,Oe.prototype.get=gt,Oe.prototype.has=dt,Oe.prototype.set=pt;function Ot(v){var P=-1,ie=v?v.length:0;for(this.__data__=new Oe;++P<ie;)this.add(v[P])}function _n(v){return this.__data__.set(v,r),this}function Yt(v){return this.__data__.has(v)}Ot.prototype.add=Ot.prototype.push=_n,Ot.prototype.has=Yt;function $t(v){this.__data__=new y(v)}function Ft(){this.__data__=new y}function Et(v){return this.__data__.delete(v)}function rs(v){return this.__data__.get(v)}function Ht(v){return this.__data__.has(v)}function li(v,P){var ie=this.__data__;if(ie instanceof y){var ye=ie.__data__;if(!et||ye.length<t-1)return ye.push([v,P]),this;ie=this.__data__=new Oe(ye)}return ie.set(v,P),this}$t.prototype.clear=Ft,$t.prototype.delete=Et,$t.prototype.get=rs,$t.prototype.has=Ht,$t.prototype.set=li;function Vs(v,P){var ie=ui(v)||Ml(v)?x(v.length,String):[],ye=ie.length,ft=!!ye;for(var Xe in v)V.call(v,Xe)&&!(ft&&(Xe=="length"||El(Xe,ye)))&&ie.push(Xe);return ie}function Jn(v,P){for(var ie=v.length;ie--;)if(yl(v[ie][0],P))return ie;return-1}function ss(v){return Er(v)?We(v):{}}var nn=zd();function ci(v,P){return v&&nn(v,P,js)}function gr(v,P){P=qs(P,v)?[P]:gl(P);for(var ie=0,ye=P.length;v!=null&&ie<ye;)v=v[Ys(P[ie++])];return ie&&ie==ye?v:void 0}function xn(v){return q.call(v)}function as(v,P){return v!=null&&P in Object(v)}function os(v,P,ie,ye,ft){return v===P?!0:v==null||P==null||!Er(v)&&!Zs(P)?v!==v&&P!==P:Ws(v,P,os,ie,ye,ft)}function Ws(v,P,ie,ye,ft,Xe){var yt=ui(v),qt=ui(P),Xt=c,un=c;yt||(Xt=bi(v),Xt=Xt==l?h:Xt),qt||(un=bi(P),un=un==l?h:un);var yn=Xt==h&&!he(v),Mn=un==h&&!he(P),gn=Xt==un;if(gn&&!yn)return Xe||(Xe=new $t),yt||Al(v)?vl(v,P,ie,ye,ft,Xe):Vd(v,P,Xt,ie,ye,ft,Xe);if(!(ft&o)){var On=yn&&V.call(v,"__wrapped__"),Fn=Mn&&V.call(P,"__wrapped__");if(On||Fn){var wi=On?v.value():v,di=Fn?P.value():P;return Xe||(Xe=new $t),ie(wi,di,ye,ft,Xe)}}return gn?(Xe||(Xe=new $t),Wd(v,P,ie,ye,ft,Xe)):!1}function Cd(v,P,ie,ye){var ft=ie.length,Xe=ft;if(v==null)return!Xe;for(v=Object(v);ft--;){var yt=ie[ft];if(yt[2]?yt[1]!==v[yt[0]]:!(yt[0]in v))return!1}for(;++ft<Xe;){yt=ie[ft];var qt=yt[0],Xt=v[qt],un=yt[1];if(yt[2]){if(Xt===void 0&&!(qt in v))return!1}else{var yn=new $t,Mn;if(!(Mn===void 0?os(un,Xt,ye,s|o,yn):Mn))return!1}}return!0}function Dd(v){if(!Er(v)||Zd(v))return!1;var P=Za(v)||he(v)?ce:we;return P.test(Zi(v))}function Ud(v){return Zs(v)&&ja(v.length)&&!!Se[q.call(v)]}function Od(v){return typeof v=="function"?v:v==null?nf:typeof v=="object"?ui(v)?kd(v[0],v[1]):Bd(v):rf(v)}function Fd(v){if(!jd(v))return Te(v);var P=[];for(var ie in Object(v))V.call(v,ie)&&ie!="constructor"&&P.push(ie);return P}function Bd(v){var P=Xd(v);return P.length==1&&P[0][2]?xl(P[0][0],P[0][1]):function(ie){return ie===v||Cd(ie,v,P)}}function kd(v,P){return qs(v)&&Sl(P)?xl(Ys(v),P):function(ie){var ye=Qd(ie,v);return ye===void 0&&ye===P?ef(ie,v):os(P,ye,void 0,s|o)}}function Gd(v){return function(P){return gr(P,v)}}function Hd(v){if(typeof v=="string")return v;if(Ka(v))return ke?ke.call(v):"";var P=v+"";return P=="0"&&1/v==-1/0?"-0":P}function gl(v){return ui(v)?v:Kd(v)}function zd(v){return function(P,ie,ye){for(var ft=-1,Xe=Object(P),yt=ye(P),qt=yt.length;qt--;){var Xt=yt[++ft];if(ie(Xe[Xt],Xt,Xe)===!1)break}return P}}function vl(v,P,ie,ye,ft,Xe){var yt=ft&o,qt=v.length,Xt=P.length;if(qt!=Xt&&!(yt&&Xt>qt))return!1;var un=Xe.get(v);if(un&&Xe.get(P))return un==P;var yn=-1,Mn=!0,gn=ft&s?new Ot:void 0;for(Xe.set(v,P),Xe.set(P,v);++yn<qt;){var On=v[yn],Fn=P[yn];if(ye)var wi=yt?ye(Fn,On,yn,P,v,Xe):ye(On,Fn,yn,v,P,Xe);if(wi!==void 0){if(wi)continue;Mn=!1;break}if(gn){if(!tt(P,function(di,ji){if(!gn.has(ji)&&(On===di||ie(On,di,ye,ft,Xe)))return gn.add(ji)})){Mn=!1;break}}else if(!(On===Fn||ie(On,Fn,ye,ft,Xe))){Mn=!1;break}}return Xe.delete(v),Xe.delete(P),Mn}function Vd(v,P,ie,ye,ft,Xe,yt){switch(ie){case T:if(v.byteLength!=P.byteLength||v.byteOffset!=P.byteOffset)return!1;v=v.buffer,P=P.buffer;case de:return!(v.byteLength!=P.byteLength||!ye(new Pe(v),new Pe(P)));case u:case d:case p:return yl(+v,+P);case f:return v.name==P.name&&v.message==P.message;case M:case H:return v==P+"";case E:var qt=$;case L:var Xt=Xe&o;if(qt||(qt=m),v.size!=P.size&&!Xt)return!1;var un=yt.get(v);if(un)return un==P;Xe|=s,yt.set(v,P);var yn=vl(qt(v),qt(P),ye,ft,Xe,yt);return yt.delete(v),yn;case O:if(Le)return Le.call(v)==Le.call(P)}return!1}function Wd(v,P,ie,ye,ft,Xe){var yt=ft&o,qt=js(v),Xt=qt.length,un=js(P),yn=un.length;if(Xt!=yn&&!yt)return!1;for(var Mn=Xt;Mn--;){var gn=qt[Mn];if(!(yt?gn in P:V.call(P,gn)))return!1}var On=Xe.get(v);if(On&&Xe.get(P))return On==P;var Fn=!0;Xe.set(v,P),Xe.set(P,v);for(var wi=yt;++Mn<Xt;){gn=qt[Mn];var di=v[gn],ji=P[gn];if(ye)var bl=yt?ye(ji,di,gn,P,v,Xe):ye(di,ji,gn,v,P,Xe);if(!(bl===void 0?di===ji||ie(di,ji,ye,ft,Xe):bl)){Fn=!1;break}wi||(wi=gn=="constructor")}if(Fn&&!wi){var Ks=v.constructor,$s=P.constructor;Ks!=$s&&"constructor"in v&&"constructor"in P&&!(typeof Ks=="function"&&Ks instanceof Ks&&typeof $s=="function"&&$s instanceof $s)&&(Fn=!1)}return Xe.delete(v),Xe.delete(P),Fn}function Xs(v,P){var ie=v.__data__;return Yd(P)?ie[typeof P=="string"?"string":"hash"]:ie.map}function Xd(v){for(var P=js(v),ie=P.length;ie--;){var ye=P[ie],ft=v[ye];P[ie]=[ye,ft,Sl(ft)]}return P}function vr(v,P){var ie=pe(v,P);return Dd(ie)?ie:void 0}var bi=xn;(Re&&bi(new Re(new ArrayBuffer(1)))!=T||et&&bi(new et)!=E||$e&&bi($e.resolve())!=R||Rt&&bi(new Rt)!=L||At&&bi(new At)!=C)&&(bi=function(v){var P=q.call(v),ie=P==h?v.constructor:void 0,ye=ie?Zi(ie):void 0;if(ye)switch(ye){case Kt:return T;case U:return E;case re:return R;case xe:return L;case at:return C}return P});function qd(v,P,ie){P=qs(P,v)?[P]:gl(P);for(var ye,ft=-1,yt=P.length;++ft<yt;){var Xe=Ys(P[ft]);if(!(ye=v!=null&&ie(v,Xe)))break;v=v[Xe]}if(ye)return ye;var yt=v?v.length:0;return!!yt&&ja(yt)&&El(Xe,yt)&&(ui(v)||Ml(v))}function El(v,P){return P=P??a,!!P&&(typeof v=="number"||ze.test(v))&&v>-1&&v%1==0&&v<P}function qs(v,P){if(ui(v))return!1;var ie=typeof v;return ie=="number"||ie=="symbol"||ie=="boolean"||v==null||Ka(v)?!0:le.test(v)||!se.test(v)||P!=null&&v in Object(P)}function Yd(v){var P=typeof v;return P=="string"||P=="number"||P=="symbol"||P=="boolean"?v!=="__proto__":v===null}function Zd(v){return!!F&&F in v}function jd(v){var P=v&&v.constructor,ie=typeof P=="function"&&P.prototype||N;return v===ie}function Sl(v){return v===v&&!Er(v)}function xl(v,P){return function(ie){return ie==null?!1:ie[v]===P&&(P!==void 0||v in Object(ie))}}var Kd=Ya(function(v){v=Jd(v);var P=[];return ve.test(v)&&P.push(""),v.replace(Ee,function(ie,ye,ft,Xe){P.push(ft?Xe.replace(fe,"$1"):ye||ie)}),P});function Ys(v){if(typeof v=="string"||Ka(v))return v;var P=v+"";return P=="0"&&1/v==-1/0?"-0":P}function Zi(v){if(v!=null){try{return W.call(v)}catch{}try{return v+""}catch{}}return""}function Ya(v,P){if(typeof v!="function"||P&&typeof P!="function")throw new TypeError(i);var ie=function(){var ye=arguments,ft=P?P.apply(this,ye):ye[0],Xe=ie.cache;if(Xe.has(ft))return Xe.get(ft);var yt=v.apply(this,ye);return ie.cache=Xe.set(ft,yt),yt};return ie.cache=new(Ya.Cache||Oe),ie}Ya.Cache=Oe;function yl(v,P){return v===P||v!==v&&P!==P}function Ml(v){return $d(v)&&V.call(v,"callee")&&(!me.call(v,"callee")||q.call(v)==l)}var ui=Array.isArray;function Tl(v){return v!=null&&ja(v.length)&&!Za(v)}function $d(v){return Zs(v)&&Tl(v)}function Za(v){var P=Er(v)?q.call(v):"";return P==_||P==S}function ja(v){return typeof v=="number"&&v>-1&&v%1==0&&v<=a}function Er(v){var P=typeof v;return!!v&&(P=="object"||P=="function")}function Zs(v){return!!v&&typeof v=="object"}function Ka(v){return typeof v=="symbol"||Zs(v)&&q.call(v)==O}var Al=He?Z(He):Ud;function Jd(v){return v==null?"":Hd(v)}function Qd(v,P,ie){var ye=v==null?void 0:gr(v,P);return ye===void 0?ie:ye}function ef(v,P){return v!=null&&qd(v,P,as)}function js(v){return Tl(v)?Vs(v):Fd(v)}function tf(v,P,ie){var ye=ui(v)||Al(v);if(P=Od(P),ie==null)if(ye||Er(v)){var ft=v.constructor;ye?ie=ui(v)?new ft:[]:ie=Za(ft)?ss(Ve(v)):{}}else ie={};return(ye?Lt:ci)(v,function(Xe,yt,qt){return P(ie,Xe,yt,qt)}),ie}function nf(v){return v}function rf(v){return qs(v)?A(Ys(v)):Gd(v)}n.exports=tf}(ms,ms.exports)),ms.exports}nm();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="160",im=0,Hl=1,rm=2,Qu=1,sm=2,vi=3,qi=0,bn=1,xi=2,Bi=0,zr=1,zl=2,Vl=3,Wl=4,am=5,ir=100,om=101,lm=102,Xl=103,ql=104,cm=200,um=201,dm=202,fm=203,Wo=204,Xo=205,hm=206,pm=207,mm=208,_m=209,gm=210,vm=211,Em=212,Sm=213,xm=214,ym=0,Mm=1,Tm=2,Ca=3,Am=4,bm=5,wm=6,Rm=7,ul=0,Lm=1,Im=2,ki=0,Pm=1,Nm=2,Cm=3,Dm=4,Um=5,Om=6,ed=300,Zr=301,jr=302,qo=303,Yo=304,Va=306,Zo=1e3,Yn=1001,jo=1002,En=1003,Yl=1004,no=1005,kn=1006,Fm=1007,Us=1008,Gi=1009,Bm=1010,km=1011,dl=1012,td=1013,Oi=1014,Fi=1015,Os=1016,nd=1017,id=1018,or=1020,Gm=1021,Zn=1023,Hm=1024,zm=1025,lr=1026,Kr=1027,Vm=1028,rd=1029,Wm=1030,sd=1031,ad=1033,ro=33776,so=33777,ao=33778,oo=33779,Zl=35840,jl=35841,Kl=35842,$l=35843,od=36196,Jl=37492,Ql=37496,ec=37808,tc=37809,nc=37810,ic=37811,rc=37812,sc=37813,ac=37814,oc=37815,lc=37816,cc=37817,uc=37818,dc=37819,fc=37820,hc=37821,lo=36492,pc=36494,mc=36495,Xm=36283,_c=36284,gc=36285,vc=36286,ld=3e3,cr=3001,qm=3200,Ym=3201,cd=0,Zm=1,Hn="",ln="srgb",Ai="srgb-linear",fl="display-p3",Wa="display-p3-linear",Da="linear",Bt="srgb",Ua="rec709",Oa="p3",Sr=7680,Ec=519,jm=512,Km=513,$m=514,ud=515,Jm=516,Qm=517,e_=518,t_=519,Sc=35044,xc="300 es",Ko=1035,yi=2e3,Fa=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],co=Math.PI/180,$o=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function An(n,e,t){return Math.max(e,Math.min(t,n))}function n_(n,e){return(n%e+e)%e}function uo(n,e,t){return(1-t)*n+t*e}function yc(n){return(n&n-1)===0&&n!==0}function Jo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ls(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(e=0,t=0){Nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,t,i,r,s,o,a,l,c){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],_=i[5],S=i[8],E=r[0],p=r[3],h=r[6],R=r[1],M=r[4],L=r[7],H=r[2],O=r[5],C=r[8];return s[0]=o*E+a*R+l*H,s[3]=o*p+a*M+l*O,s[6]=o*h+a*L+l*C,s[1]=c*E+u*R+d*H,s[4]=c*p+u*M+d*O,s[7]=c*h+u*L+d*C,s[2]=f*E+_*R+S*H,s[5]=f*p+_*M+S*O,s[8]=f*h+_*L+S*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,_=c*s-o*l,S=t*d+i*f+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=d*E,e[1]=(r*c-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=f*E,e[4]=(u*t-r*l)*E,e[5]=(r*s-a*t)*E,e[6]=_*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new Mt;function dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function i_(){const n=Ba("canvas");return n.style.display="block",n}const Mc={};function vs(n){n in Mc||(Mc[n]=!0,console.warn(n))}const Tc=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ac=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),na={[Ai]:{transfer:Da,primaries:Ua,toReference:n=>n,fromReference:n=>n},[ln]:{transfer:Bt,primaries:Ua,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wa]:{transfer:Da,primaries:Oa,toReference:n=>n.applyMatrix3(Ac),fromReference:n=>n.applyMatrix3(Tc)},[fl]:{transfer:Bt,primaries:Oa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ac),fromReference:n=>n.applyMatrix3(Tc).convertLinearToSRGB()}},r_=new Set([Ai,Wa]),Ct={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!r_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=na[e].toReference,r=na[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return na[n].primaries},getTransfer:function(n){return n===Hn?Da:na[n].transfer}};function Vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ho(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xr;class fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=Ba("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vr(t[i]/255)*255):t[i]=Vr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(po(r[o].image)):s.push(po(r[o]))}else s=po(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a_=0;class Un extends ns{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,i=Yn,r=Yn,s=kn,o=Us,a=Zn,l=Gi,c=Un.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=ks(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===cr?ln:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ln?cr:ld}set encoding(e){vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cr?ln:Hn}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=ed;Un.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,t=0,i=0,r=1){an.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],_=l[5],S=l[9],E=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-E)<.01&&Math.abs(S-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+E)<.1&&Math.abs(S+p)<.1&&Math.abs(c+_+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,L=(_+1)/2,H=(h+1)/2,O=(u+f)/4,C=(d+E)/4,de=(S+p)/4;return M>L&&M>H?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=O/i,s=C/i):L>H?L<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(L),i=O/r,s=de/r):H<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(H),i=C/s,r=de/s),this.set(i,r,s,t),this}let R=Math.sqrt((p-S)*(p-S)+(d-E)*(d-E)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(p-S)/R,this.y=(d-E)/R,this.z=(f-u)/R,this.w=Math.acos((c+_+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o_ extends ns{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(vs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===cr?ln:Hn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends o_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends Un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l_ extends Un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],_=s[o+1],S=s[o+2],E=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=_,e[t+2]=S,e[t+3]=E;return}if(d!==E||l!==f||c!==_||u!==S){let p=1-a;const h=l*f+c*_+u*S+d*E,R=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const H=Math.sqrt(M),O=Math.atan2(H,h*R);p=Math.sin(p*O)/H,a=Math.sin(a*O)/H}const L=a*R;if(l=l*p+f*L,c=c*p+_*L,u=u*p+S*L,d=d*p+E*L,p===1-a){const H=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=H,c*=H,u*=H,d*=H}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],_=s[o+2],S=s[o+3];return e[t]=a*S+u*d+l*_-c*f,e[t+1]=l*S+u*f+c*d-a*_,e[t+2]=c*S+u*_+a*f-l*d,e[t+3]=u*S-a*d-l*f-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),_=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*_*S,this._y=c*_*d-f*u*S,this._z=c*u*S+f*_*d,this._w=c*u*d-f*_*S;break;case"YXZ":this._x=f*u*d+c*_*S,this._y=c*_*d-f*u*S,this._z=c*u*S-f*_*d,this._w=c*u*d+f*_*S;break;case"ZXY":this._x=f*u*d-c*_*S,this._y=c*_*d+f*u*S,this._z=c*u*S+f*_*d,this._w=c*u*d-f*_*S;break;case"ZYX":this._x=f*u*d-c*_*S,this._y=c*_*d+f*u*S,this._z=c*u*S-f*_*d,this._w=c*u*d+f*_*S;break;case"YZX":this._x=f*u*d+c*_*S,this._y=c*_*d+f*u*S,this._z=c*u*S-f*_*d,this._w=c*u*d-f*_*S;break;case"XZY":this._x=f*u*d-c*_*S,this._y=c*_*d-f*u*S,this._z=c*u*S+f*_*d,this._w=c*u*d+f*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(i>a&&i>d){const _=2*Math.sqrt(1+i-a-d);this._w=(u-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>d){const _=2*Math.sqrt(1+a-i-d);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+d-i-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*i+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new Q,bc=new Gs;class Hs{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),ra.subVectors(this.max,cs),yr.subVectors(e.a,cs),Mr.subVectors(e.b,cs),Tr.subVectors(e.c,cs),Ri.subVectors(Mr,yr),Li.subVectors(Tr,Mr),Ki.subVectors(yr,Tr);let t=[0,-Ri.z,Ri.y,0,-Li.z,Li.y,0,-Ki.z,Ki.y,Ri.z,0,-Ri.x,Li.z,0,-Li.x,Ki.z,0,-Ki.x,-Ri.y,Ri.x,0,-Li.y,Li.x,0,-Ki.y,Ki.x,0];return!_o(t,yr,Mr,Tr,ra)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,yr,Mr,Tr,ra))?!1:(sa.crossVectors(Ri,Li),t=[sa.x,sa.y,sa.z],_o(t,yr,Mr,Tr,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Vn=new Q,ia=new Hs,yr=new Q,Mr=new Q,Tr=new Q,Ri=new Q,Li=new Q,Ki=new Q,cs=new Q,ra=new Q,sa=new Q,$i=new Q;function _o(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$i.fromArray(n,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const c_=new Hs,us=new Q,go=new Q;class hl{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):c_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const t=us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(go)),this.expandByPoint(us.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new Q,vo=new Q,aa=new Q,Ii=new Q,Eo=new Q,oa=new Q,So=new Q;class u_{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vo.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(vo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(aa),a=Ii.dot(this.direction),l=-Ii.dot(aa),c=Ii.lengthSq(),u=Math.abs(1-o*o);let d,f,_,S;if(u>0)if(d=o*l-a,f=o*a-l,S=s*u,d>=0)if(f>=-S)if(f<=S){const E=1/u;d*=E,f*=E,_=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+c;else f<=-S?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+c):f<=S?(d=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(vo).addScaledVector(aa,f),_}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){Eo.subVectors(t,e),oa.subVectors(i,e),So.crossVectors(Eo,oa);let o=this.direction.dot(So),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(oa.crossVectors(Ii,oa));if(l<0)return null;const c=a*this.direction.dot(Eo.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(So);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,t,i,r,s,o,a,l,c,u,d,f,_,S,E,p){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,_,S,E,p)}set(e,t,i,r,s,o,a,l,c,u,d,f,_,S,E,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=_,h[7]=S,h[11]=E,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,_=o*d,S=a*u,E=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=_+S*c,t[5]=f-E*c,t[9]=-a*l,t[2]=E-f*c,t[6]=S+_*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,_=l*d,S=c*u,E=c*d;t[0]=f+E*a,t[4]=S*a-_,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=_*a-S,t[6]=E+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,_=l*d,S=c*u,E=c*d;t[0]=f-E*a,t[4]=-o*d,t[8]=S+_*a,t[1]=_+S*a,t[5]=o*u,t[9]=E-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,_=o*d,S=a*u,E=a*d;t[0]=l*u,t[4]=S*c-_,t[8]=f*c+E,t[1]=l*d,t[5]=E*c+f,t[9]=_*c-S,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,_=o*c,S=a*l,E=a*c;t[0]=l*u,t[4]=E-f*d,t[8]=S*d+_,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=_*d+S,t[10]=f-E*d}else if(e.order==="XZY"){const f=o*l,_=o*c,S=a*l,E=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+E,t[5]=o*u,t[9]=_*d-S,t[2]=S*d-_,t[6]=a*u,t[10]=E*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d_,e,f_)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Pi.crossVectors(i,Rn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Pi.crossVectors(i,Rn)),Pi.normalize(),la.crossVectors(Rn,Pi),r[0]=Pi.x,r[4]=la.x,r[8]=Rn.x,r[1]=Pi.y,r[5]=la.y,r[9]=Rn.y,r[2]=Pi.z,r[6]=la.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],_=i[13],S=i[2],E=i[6],p=i[10],h=i[14],R=i[3],M=i[7],L=i[11],H=i[15],O=r[0],C=r[4],de=r[8],T=r[12],w=r[1],te=r[5],ne=r[9],ge=r[13],G=r[2],J=r[6],oe=r[10],ue=r[14],ae=r[3],se=r[7],le=r[11],ve=r[15];return s[0]=o*O+a*w+l*G+c*ae,s[4]=o*C+a*te+l*J+c*se,s[8]=o*de+a*ne+l*oe+c*le,s[12]=o*T+a*ge+l*ue+c*ve,s[1]=u*O+d*w+f*G+_*ae,s[5]=u*C+d*te+f*J+_*se,s[9]=u*de+d*ne+f*oe+_*le,s[13]=u*T+d*ge+f*ue+_*ve,s[2]=S*O+E*w+p*G+h*ae,s[6]=S*C+E*te+p*J+h*se,s[10]=S*de+E*ne+p*oe+h*le,s[14]=S*T+E*ge+p*ue+h*ve,s[3]=R*O+M*w+L*G+H*ae,s[7]=R*C+M*te+L*J+H*se,s[11]=R*de+M*ne+L*oe+H*le,s[15]=R*T+M*ge+L*ue+H*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],_=e[14],S=e[3],E=e[7],p=e[11],h=e[15];return S*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*_-i*l*_)+E*(+t*l*_-t*c*f+s*o*f-r*o*_+r*c*u-s*l*u)+p*(+t*c*d-t*a*_-s*o*d+i*o*_+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],_=e[11],S=e[12],E=e[13],p=e[14],h=e[15],R=d*p*c-E*f*c+E*l*_-a*p*_-d*l*h+a*f*h,M=S*f*c-u*p*c-S*l*_+o*p*_+u*l*h-o*f*h,L=u*E*c-S*d*c+S*a*_-o*E*_-u*a*h+o*d*h,H=S*d*l-u*E*l-S*a*f+o*E*f+u*a*p-o*d*p,O=t*R+i*M+r*L+s*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/O;return e[0]=R*C,e[1]=(E*f*s-d*p*s-E*r*_+i*p*_+d*r*h-i*f*h)*C,e[2]=(a*p*s-E*l*s+E*r*c-i*p*c-a*r*h+i*l*h)*C,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*_-i*l*_)*C,e[4]=M*C,e[5]=(u*p*s-S*f*s+S*r*_-t*p*_-u*r*h+t*f*h)*C,e[6]=(S*l*s-o*p*s-S*r*c+t*p*c+o*r*h-t*l*h)*C,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*_+t*l*_)*C,e[8]=L*C,e[9]=(S*d*s-u*E*s-S*i*_+t*E*_+u*i*h-t*d*h)*C,e[10]=(o*E*s-S*a*s+S*i*c-t*E*c-o*i*h+t*a*h)*C,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*_-t*a*_)*C,e[12]=H*C,e[13]=(u*E*r-S*d*r+S*i*f-t*E*f-u*i*p+t*d*p)*C,e[14]=(S*a*r-o*E*r-S*i*l+t*E*l+o*i*p-t*a*p)*C,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,_=s*u,S=s*d,E=o*u,p=o*d,h=a*d,R=l*c,M=l*u,L=l*d,H=i.x,O=i.y,C=i.z;return r[0]=(1-(E+h))*H,r[1]=(_+L)*H,r[2]=(S-M)*H,r[3]=0,r[4]=(_-L)*O,r[5]=(1-(f+h))*O,r[6]=(p+R)*O,r[7]=0,r[8]=(S+M)*C,r[9]=(p-R)*C,r[10]=(1-(f+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/o,d=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=yi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let _,S;if(a===yi)_=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Fa)_=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=yi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,_=(i+r)*u;let S,E;if(a===yi)S=(o+s)*d,E=-2*d;else if(a===Fa)S=s*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=E,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ar=new Q,Wn=new Qt,d_=new Q(0,0,0),f_=new Q(1,1,1),Pi=new Q,la=new Q,Rn=new Q,wc=new Qt,Rc=new Gs;class Xa{constructor(e=0,t=0,i=0,r=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(An(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h_=0;const Lc=new Q,br=new Gs,pi=new Qt,ca=new Q,ds=new Q,p_=new Q,m_=new Gs,Ic=new Q(1,0,0),Pc=new Q(0,1,0),Nc=new Q(0,0,1),__={type:"added"},g_={type:"removed"};class hn extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new Q,t=new Xa,i=new Gs,r=new Q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Mt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ca.copy(e):ca.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ds,ca,this.up):pi.lookAt(ca,ds,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),br.setFromRotationMatrix(pi),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(__)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,p_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,m_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),_=o(e.animations),S=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new Q(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new Q,mi=new Q,xo=new Q,_i=new Q,wr=new Q,Rr=new Q,Cc=new Q,yo=new Q,Mo=new Q,To=new Q;let ua=!1;class qn{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),mi.subVectors(i,t),xo.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(mi),l=Xn.dot(xo),c=mi.dot(mi),u=mi.dot(xo),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,_=(c*l-a*u)*f,S=(o*u-a*l)*f;return s.set(1-_-S,S,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,i,r,s,o,a,l){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),mi.subVectors(e,t),Xn.cross(mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Xn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;wr.subVectors(r,i),Rr.subVectors(s,i),yo.subVectors(e,i);const l=wr.dot(yo),c=Rr.dot(yo);if(l<=0&&c<=0)return t.copy(i);Mo.subVectors(e,r);const u=wr.dot(Mo),d=Rr.dot(Mo);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(wr,o);To.subVectors(e,s);const _=wr.dot(To),S=Rr.dot(To);if(S>=0&&_<=S)return t.copy(s);const E=_*c-l*S;if(E<=0&&c>=0&&S<=0)return a=c/(c-S),t.copy(i).addScaledVector(Rr,a);const p=u*S-_*d;if(p<=0&&d-u>=0&&_-S>=0)return Cc.subVectors(s,r),a=(d-u)/(d-u+(_-S)),t.copy(r).addScaledVector(Cc,a);const h=1/(p+E+f);return o=E*h,a=f*h,t.copy(i).addScaledVector(wr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},da={h:0,s:0,l:0};function Ao(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class It{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ct.workingColorSpace){if(e=n_(e,1),t=An(t,0,1),i=An(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ao(o,s,e+1/3),this.g=Ao(o,s,e),this.b=Ao(o,s,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Ct.fromWorkingColorSpace(fn.copy(this),e),Math.round(An(fn.r*255,0,255))*65536+Math.round(An(fn.g*255,0,255))*256+Math.round(An(fn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(fn.copy(this),t);const i=fn.r,r=fn.g,s=fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ln){Ct.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,i=fn.g,r=fn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(da);const i=uo(Ni.h,da.h,t),r=uo(Ni.s,da.s,t),s=uo(Ni.l,da.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new It;It.NAMES=_d;let v_=0;class zs extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=zr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Xo&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gd extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Q,fa=new Nt;class ri{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ls(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),i=Tn(i,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}}class vd extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ed extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ur extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}}let E_=0;const Bn=new Qt,bo=new hn,Lr=new Q,Ln=new Hs,fs=new Hs,rn=new Q;class _r extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?Ed:vd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Mt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ur(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Ln.min,fs.min),Ln.expandByPoint(rn),rn.addVectors(Ln.max,fs.max),Ln.expandByPoint(rn)):(Ln.expandByPoint(fs.min),Ln.expandByPoint(fs.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),rn.add(Lr)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new Q,u[w]=new Q;const d=new Q,f=new Q,_=new Q,S=new Nt,E=new Nt,p=new Nt,h=new Q,R=new Q;function M(w,te,ne){d.fromArray(r,w*3),f.fromArray(r,te*3),_.fromArray(r,ne*3),S.fromArray(o,w*2),E.fromArray(o,te*2),p.fromArray(o,ne*2),f.sub(d),_.sub(d),E.sub(S),p.sub(S);const ge=1/(E.x*p.y-p.x*E.y);isFinite(ge)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(_,-E.y).multiplyScalar(ge),R.copy(_).multiplyScalar(E.x).addScaledVector(f,-p.x).multiplyScalar(ge),c[w].add(h),c[te].add(h),c[ne].add(h),u[w].add(R),u[te].add(R),u[ne].add(R))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let w=0,te=L.length;w<te;++w){const ne=L[w],ge=ne.start,G=ne.count;for(let J=ge,oe=ge+G;J<oe;J+=3)M(i[J+0],i[J+1],i[J+2])}const H=new Q,O=new Q,C=new Q,de=new Q;function T(w){C.fromArray(s,w*3),de.copy(C);const te=c[w];H.copy(te),H.sub(C.multiplyScalar(C.dot(te))).normalize(),O.crossVectors(de,te);const ge=O.dot(u[w])<0?-1:1;l[w*4]=H.x,l[w*4+1]=H.y,l[w*4+2]=H.z,l[w*4+3]=ge}for(let w=0,te=L.length;w<te;++w){const ne=L[w],ge=ne.start,G=ne.count;for(let J=ge,oe=ge+G;J<oe;J+=3)T(i[J+0]),T(i[J+1]),T(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,_=i.count;f<_;f++)i.setXYZ(f,0,0,0);const r=new Q,s=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,d=new Q;if(e)for(let f=0,_=e.count;f<_;f+=3){const S=e.getX(f+0),E=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,S),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,_=t.count;f<_;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let _=0,S=0;for(let E=0,p=l.length;E<p;E++){a.isInterleavedBufferAttribute?_=l[E]*a.data.stride+a.offset:_=l[E]*u;for(let h=0;h<u;h++)f[S++]=c[_++]}return new ri(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _r,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],_=e(f,i);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const _=c[d];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,_=d.length;f<_;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new Qt,Ji=new u_,ha=new hl,Uc=new Q,Ir=new Q,Pr=new Q,Nr=new Q,wo=new Q,pa=new Q,ma=new Nt,_a=new Nt,ga=new Nt,Oc=new Q,Fc=new Q,Bc=new Q,va=new Q,Ea=new Q;class Cn extends hn{constructor(e=new _r,t=new gd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(wo.fromBufferAttribute(d,e),o?pa.addScaledVector(wo,u):pa.addScaledVector(wo.sub(t),u))}t.add(pa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(ha.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ha,Uc)===null||Ji.origin.distanceToSquared(Uc)>(e.far-e.near)**2))&&(Dc.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Dc),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,E=f.length;S<E;S++){const p=f[S],h=o[p.materialIndex],R=Math.max(p.start,_.start),M=Math.min(a.count,Math.min(p.start+p.count,_.start+_.count));for(let L=R,H=M;L<H;L+=3){const O=a.getX(L),C=a.getX(L+1),de=a.getX(L+2);r=Sa(this,h,e,i,c,u,d,O,C,de),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const S=Math.max(0,_.start),E=Math.min(a.count,_.start+_.count);for(let p=S,h=E;p<h;p+=3){const R=a.getX(p),M=a.getX(p+1),L=a.getX(p+2);r=Sa(this,o,e,i,c,u,d,R,M,L),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,E=f.length;S<E;S++){const p=f[S],h=o[p.materialIndex],R=Math.max(p.start,_.start),M=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let L=R,H=M;L<H;L+=3){const O=L,C=L+1,de=L+2;r=Sa(this,h,e,i,c,u,d,O,C,de),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const S=Math.max(0,_.start),E=Math.min(l.count,_.start+_.count);for(let p=S,h=E;p<h;p+=3){const R=p,M=p+1,L=p+2;r=Sa(this,o,e,i,c,u,d,R,M,L),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function S_(n,e,t,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qi,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ea);return c<t.near||c>t.far?null:{distance:c,point:Ea.clone(),object:n}}function Sa(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ir),n.getVertexPosition(l,Pr),n.getVertexPosition(c,Nr);const u=S_(n,e,t,i,Ir,Pr,Nr,va);if(u){r&&(ma.fromBufferAttribute(r,a),_a.fromBufferAttribute(r,l),ga.fromBufferAttribute(r,c),u.uv=qn.getInterpolation(va,Ir,Pr,Nr,ma,_a,ga,new Nt)),s&&(ma.fromBufferAttribute(s,a),_a.fromBufferAttribute(s,l),ga.fromBufferAttribute(s,c),u.uv1=qn.getInterpolation(va,Ir,Pr,Nr,ma,_a,ga,new Nt),u.uv2=u.uv1),o&&(Oc.fromBufferAttribute(o,a),Fc.fromBufferAttribute(o,l),Bc.fromBufferAttribute(o,c),u.normal=qn.getInterpolation(va,Ir,Pr,Nr,Oc,Fc,Bc,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Q,materialIndex:0};qn.getNormal(Ir,Pr,Nr,d.normal),u.face=d}return u}class ti extends _r{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,_=0;S("z","y","x",-1,-1,i,t,e,o,s,0),S("z","y","x",1,-1,i,t,-e,o,s,1),S("x","z","y",1,1,e,i,t,r,o,2),S("x","z","y",1,-1,e,i,-t,r,o,3),S("x","y","z",1,-1,e,t,i,r,s,4),S("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ur(c,3)),this.setAttribute("normal",new ur(u,3)),this.setAttribute("uv",new ur(d,2));function S(E,p,h,R,M,L,H,O,C,de,T){const w=L/C,te=H/de,ne=L/2,ge=H/2,G=O/2,J=C+1,oe=de+1;let ue=0,ae=0;const se=new Q;for(let le=0;le<oe;le++){const ve=le*te-ge;for(let Ee=0;Ee<J;Ee++){const ee=Ee*w-ne;se[E]=ee*R,se[p]=ve*M,se[h]=G,c.push(se.x,se.y,se.z),se[E]=0,se[p]=0,se[h]=O>0?1:-1,u.push(se.x,se.y,se.z),d.push(Ee/C),d.push(1-le/de),ue+=1}}for(let le=0;le<de;le++)for(let ve=0;ve<C;ve++){const Ee=f+ve+J*le,ee=f+ve+J*(le+1),fe=f+(ve+1)+J*(le+1),we=f+(ve+1)+J*le;l.push(Ee,ee,we),l.push(ee,fe,we),ae+=6}a.addGroup(_,ae,T),_+=ae,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=$r(n[t]);for(const r in i)e[r]=i[r]}return e}function x_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sd(n){return n.getRenderTarget()===null?n.outputColorSpace:Ct.workingColorSpace}const y_={clone:$r,merge:vn};var M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=x_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xd extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gn extends xd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cr=-90,Dr=1;class A_ extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Cr,Dr,e,t);r.layers=this.layers,this.add(r);const s=new Gn(Cr,Dr,e,t);s.layers=this.layers,this.add(s);const o=new Gn(Cr,Dr,e,t);o.layers=this.layers,this.add(o);const a=new Gn(Cr,Dr,e,t);a.layers=this.layers,this.add(a);const l=new Gn(Cr,Dr,e,t);l.layers=this.layers,this.add(l);const c=new Gn(Cr,Dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,_),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class yd extends Un{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b_ extends pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(vs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cr?ln:Hn),this.texture=new yd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ti(5,5,5),s=new mr({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Bi});s.uniforms.tEquirect.value=t;const o=new Cn(r,s),a=t.minFilter;return t.minFilter===Us&&(t.minFilter=kn),new A_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ro=new Q,w_=new Q,R_=new Mt;class tr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ro.subVectors(i,t).cross(w_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||R_.getNormalMatrix(e),r=this.coplanarPoint(Ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new hl,xa=new Q;class pl{constructor(e=new tr,t=new tr,i=new tr,r=new tr,s=new tr,o=new tr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],_=r[8],S=r[9],E=r[10],p=r[11],h=r[12],R=r[13],M=r[14],L=r[15];if(i[0].setComponents(l-s,f-c,p-_,L-h).normalize(),i[1].setComponents(l+s,f+c,p+_,L+h).normalize(),i[2].setComponents(l+o,f+u,p+S,L+R).normalize(),i[3].setComponents(l-o,f-u,p-S,L-R).normalize(),i[4].setComponents(l-a,f-d,p-E,L-M).normalize(),t===yi)i[5].setComponents(l+a,f+d,p+E,L+M).normalize();else if(t===Fa)i[5].setComponents(a,d,E,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xa.x=r.normal.x>0?e.max.x:e.min.x,xa.y=r.normal.y>0?e.max.y:e.min.y,xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Md(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function L_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,_=d.byteLength,S=n.createBuffer();n.bindBuffer(u,S),n.bufferData(u,d,f),c.onUploadCallback();let E;if(d instanceof Float32Array)E=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)E=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=n.SHORT;else if(d instanceof Uint32Array)E=n.UNSIGNED_INT;else if(d instanceof Int32Array)E=n.INT;else if(d instanceof Int8Array)E=n.BYTE;else if(d instanceof Uint8Array)E=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:S,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function s(c,u,d){const f=u.array,_=u._updateRange,S=u.updateRanges;if(n.bindBuffer(d,c),_.count===-1&&S.length===0&&n.bufferSubData(d,0,f),S.length!==0){for(let E=0,p=S.length;E<p;E++){const h=S[E];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}_.count!==-1&&(t?n.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):n.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class ml extends _r{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,_=[],S=[],E=[],p=[];for(let h=0;h<u;h++){const R=h*f-o;for(let M=0;M<c;M++){const L=M*d-s;S.push(L,-R,0),E.push(0,0,1),p.push(M/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let R=0;R<a;R++){const M=R+c*h,L=R+c*(h+1),H=R+1+c*(h+1),O=R+1+c*h;_.push(M,L,O),_.push(L,H,O)}this.setIndex(_),this.setAttribute("position",new ur(S,3)),this.setAttribute("normal",new ur(E,3)),this.setAttribute("uv",new ur(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,N_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,U_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,G_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Q_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ig=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_v=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ov=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Fv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$v=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:I_,alphahash_pars_fragment:P_,alphamap_fragment:N_,alphamap_pars_fragment:C_,alphatest_fragment:D_,alphatest_pars_fragment:U_,aomap_fragment:O_,aomap_pars_fragment:F_,batching_pars_vertex:B_,batching_vertex:k_,begin_vertex:G_,beginnormal_vertex:H_,bsdfs:z_,iridescence_fragment:V_,bumpmap_pars_fragment:W_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:Y_,clipping_planes_vertex:Z_,color_fragment:j_,color_pars_fragment:K_,color_pars_vertex:$_,color_vertex:J_,common:Q_,cube_uv_reflection_fragment:eg,defaultnormal_vertex:tg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:rg,emissivemap_pars_fragment:sg,colorspace_fragment:ag,colorspace_pars_fragment:og,envmap_fragment:lg,envmap_common_pars_fragment:cg,envmap_pars_fragment:ug,envmap_pars_vertex:dg,envmap_physical_pars_fragment:Mg,envmap_vertex:fg,fog_vertex:hg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:_g,gradientmap_pars_fragment:gg,lightmap_fragment:vg,lightmap_pars_fragment:Eg,lights_lambert_fragment:Sg,lights_lambert_pars_fragment:xg,lights_pars_begin:yg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Ag,lights_phong_fragment:bg,lights_phong_pars_fragment:wg,lights_physical_fragment:Rg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Ig,lights_fragment_maps:Pg,lights_fragment_end:Ng,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Og,map_fragment:Fg,map_pars_fragment:Bg,map_particle_fragment:kg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:zg,morphcolor_vertex:Vg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:Zg,normal_pars_fragment:jg,normal_pars_vertex:Kg,normal_vertex:$g,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:rv,premultiplied_alpha_fragment:sv,project_vertex:av,dithering_fragment:ov,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:uv,shadowmap_pars_fragment:dv,shadowmap_pars_vertex:fv,shadowmap_vertex:hv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:_v,skinning_vertex:gv,skinnormal_vertex:vv,specularmap_fragment:Ev,specularmap_pars_fragment:Sv,tonemapping_fragment:xv,tonemapping_pars_fragment:yv,transmission_fragment:Mv,transmission_pars_fragment:Tv,uv_pars_fragment:Av,uv_pars_vertex:bv,uv_vertex:wv,worldpos_vertex:Rv,background_vert:Lv,background_frag:Iv,backgroundCube_vert:Pv,backgroundCube_frag:Nv,cube_vert:Cv,cube_frag:Dv,depth_vert:Uv,depth_frag:Ov,distanceRGBA_vert:Fv,distanceRGBA_frag:Bv,equirect_vert:kv,equirect_frag:Gv,linedashed_vert:Hv,linedashed_frag:zv,meshbasic_vert:Vv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:Zv,meshnormal_vert:jv,meshnormal_frag:Kv,meshphong_vert:$v,meshphong_frag:Jv,meshphysical_vert:Qv,meshphysical_frag:e0,meshtoon_vert:t0,meshtoon_frag:n0,points_vert:i0,points_frag:r0,shadow_vert:s0,shadow_frag:a0,sprite_vert:o0,sprite_frag:l0},Ie={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ei={basic:{uniforms:vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new It(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:vn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:vn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new It(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:vn([Ie.points,Ie.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:vn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:vn([Ie.common,Ie.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:vn([Ie.sprite,Ie.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:vn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:vn([Ie.lights,Ie.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ei.physical={uniforms:vn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const ya={r:0,b:0,g:0};function c0(n,e,t,i,r,s,o){const a=new It(0);let l=s===!0?0:1,c,u,d=null,f=0,_=null;function S(p,h){let R=!1,M=h.isScene===!0?h.background:null;M&&M.isTexture&&(M=(h.backgroundBlurriness>0?t:e).get(M)),M===null?E(a,l):M&&M.isColor&&(E(M,1),R=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||R)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Va)?(u===void 0&&(u=new Cn(new ti(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:$r(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,O,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ct.getTransfer(M.colorSpace)!==Bt,(d!==M||f!==M.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,_=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Cn(new ml(2,2),new mr({name:"BackgroundMaterial",uniforms:$r(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(M.colorSpace)!==Bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,_=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function E(p,h){p.getRGB(ya,Sd(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,E(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,E(a,l)},render:S}}function u0(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(G,J,oe,ue,ae){let se=!1;if(o){const le=E(ue,oe,J);c!==le&&(c=le,_(c.object)),se=h(G,ue,oe,ae),se&&R(G,ue,oe,ae)}else{const le=J.wireframe===!0;(c.geometry!==ue.id||c.program!==oe.id||c.wireframe!==le)&&(c.geometry=ue.id,c.program=oe.id,c.wireframe=le,se=!0)}ae!==null&&t.update(ae,n.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,de(G,J,oe,ue),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ae).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function _(G){return i.isWebGL2?n.bindVertexArray(G):s.bindVertexArrayOES(G)}function S(G){return i.isWebGL2?n.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function E(G,J,oe){const ue=oe.wireframe===!0;let ae=a[G.id];ae===void 0&&(ae={},a[G.id]=ae);let se=ae[J.id];se===void 0&&(se={},ae[J.id]=se);let le=se[ue];return le===void 0&&(le=p(f()),se[ue]=le),le}function p(G){const J=[],oe=[],ue=[];for(let ae=0;ae<r;ae++)J[ae]=0,oe[ae]=0,ue[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:oe,attributeDivisors:ue,object:G,attributes:{},index:null}}function h(G,J,oe,ue){const ae=c.attributes,se=J.attributes;let le=0;const ve=oe.getAttributes();for(const Ee in ve)if(ve[Ee].location>=0){const fe=ae[Ee];let we=se[Ee];if(we===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(we=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(we=G.instanceColor)),fe===void 0||fe.attribute!==we||we&&fe.data!==we.data)return!0;le++}return c.attributesNum!==le||c.index!==ue}function R(G,J,oe,ue){const ae={},se=J.attributes;let le=0;const ve=oe.getAttributes();for(const Ee in ve)if(ve[Ee].location>=0){let fe=se[Ee];fe===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(fe=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(fe=G.instanceColor));const we={};we.attribute=fe,fe&&fe.data&&(we.data=fe.data),ae[Ee]=we,le++}c.attributes=ae,c.attributesNum=le,c.index=ue}function M(){const G=c.newAttributes;for(let J=0,oe=G.length;J<oe;J++)G[J]=0}function L(G){H(G,0)}function H(G,J){const oe=c.newAttributes,ue=c.enabledAttributes,ae=c.attributeDivisors;oe[G]=1,ue[G]===0&&(n.enableVertexAttribArray(G),ue[G]=1),ae[G]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,J),ae[G]=J)}function O(){const G=c.newAttributes,J=c.enabledAttributes;for(let oe=0,ue=J.length;oe<ue;oe++)J[oe]!==G[oe]&&(n.disableVertexAttribArray(oe),J[oe]=0)}function C(G,J,oe,ue,ae,se,le){le===!0?n.vertexAttribIPointer(G,J,oe,ae,se):n.vertexAttribPointer(G,J,oe,ue,ae,se)}function de(G,J,oe,ue){if(i.isWebGL2===!1&&(G.isInstancedMesh||ue.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const ae=ue.attributes,se=oe.getAttributes(),le=J.defaultAttributeValues;for(const ve in se){const Ee=se[ve];if(Ee.location>=0){let ee=ae[ve];if(ee===void 0&&(ve==="instanceMatrix"&&G.instanceMatrix&&(ee=G.instanceMatrix),ve==="instanceColor"&&G.instanceColor&&(ee=G.instanceColor)),ee!==void 0){const fe=ee.normalized,we=ee.itemSize,ze=t.get(ee);if(ze===void 0)continue;const Se=ze.buffer,Qe=ze.type,lt=ze.bytesPerElement,Ne=i.isWebGL2===!0&&(Qe===n.INT||Qe===n.UNSIGNED_INT||ee.gpuType===td);if(ee.isInterleavedBufferAttribute){const ht=ee.data,Y=ht.stride,Vt=ee.offset;if(ht.isInstancedInterleavedBuffer){for(let qe=0;qe<Ee.locationSize;qe++)H(Ee.location+qe,ht.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let qe=0;qe<Ee.locationSize;qe++)L(Ee.location+qe);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let qe=0;qe<Ee.locationSize;qe++)C(Ee.location+qe,we/Ee.locationSize,Qe,fe,Y*lt,(Vt+we/Ee.locationSize*qe)*lt,Ne)}else{if(ee.isInstancedBufferAttribute){for(let ht=0;ht<Ee.locationSize;ht++)H(Ee.location+ht,ee.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ht=0;ht<Ee.locationSize;ht++)L(Ee.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let ht=0;ht<Ee.locationSize;ht++)C(Ee.location+ht,we/Ee.locationSize,Qe,fe,we*lt,we/Ee.locationSize*ht*lt,Ne)}}else if(le!==void 0){const fe=le[ve];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(Ee.location,fe);break;case 3:n.vertexAttrib3fv(Ee.location,fe);break;case 4:n.vertexAttrib4fv(Ee.location,fe);break;default:n.vertexAttrib1fv(Ee.location,fe)}}}}O()}function T(){ne();for(const G in a){const J=a[G];for(const oe in J){const ue=J[oe];for(const ae in ue)S(ue[ae].object),delete ue[ae];delete J[oe]}delete a[G]}}function w(G){if(a[G.id]===void 0)return;const J=a[G.id];for(const oe in J){const ue=J[oe];for(const ae in ue)S(ue[ae].object),delete ue[ae];delete J[oe]}delete a[G.id]}function te(G){for(const J in a){const oe=a[J];if(oe[G.id]===void 0)continue;const ue=oe[G.id];for(const ae in ue)S(ue[ae].object),delete ue[ae];delete oe[G.id]}}function ne(){ge(),u=!0,c!==l&&(c=l,_(c.object))}function ge(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ne,resetDefaultState:ge,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:te,initAttributes:M,enableAttribute:L,disableUnusedAttributes:O}}function d0(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,f){if(f===0)return;let _,S;if(r)_=n,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](s,u,d,f),t.update(d,s,f)}function c(u,d,f){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<f;S++)this.render(u[S],d[S]);else{_.multiDrawArraysWEBGL(s,u,0,d,0,f);let S=0;for(let E=0;E<f;E++)S+=d[E];t.update(S,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function f0(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),E=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,L=o||e.has("OES_texture_float"),H=M&&L,O=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:R,vertexTextures:M,floatFragmentTextures:L,floatVertexTextures:H,maxSamples:O}}function h0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new tr,a=new Mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||i!==0||r;return r=f,i=d.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,_){const S=d.clippingPlanes,E=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||S===null||S.length===0||s&&!p)s?u(null):c();else{const R=s?0:i,M=R*4;let L=h.clippingState||null;l.value=L,L=u(S,f,M,_);for(let H=0;H!==M;++H)L[H]=t[H];h.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,_,S){const E=d!==null?d.length:0;let p=null;if(E!==0){if(p=l.value,S!==!0||p===null){const h=_+E*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,L=_;M!==E;++M,L+=4)o.copy(d[M]).applyMatrix4(R,a),o.normal.toArray(p,L),p[L+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function p0(n){let e=new WeakMap;function t(o,a){return a===qo?o.mapping=Zr:a===Yo&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qo||a===Yo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new b_(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Td extends xd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const kr=4,kc=[.125,.215,.35,.446,.526,.582],rr=20,Lo=new Td,Gc=new It;let Io=null,Po=0,No=0;const nr=(1+Math.sqrt(5))/2,Ur=1/nr,Hc=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,nr,Ur),new Q(0,nr,-Ur),new Q(Ur,0,nr),new Q(-Ur,0,nr),new Q(nr,Ur,0),new Q(-nr,Ur,0)];class zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Io=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Po,No),e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Os,format:Zn,colorSpace:Ai,depthBuffer:!1},r=Vc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(s)),this._blurMaterial=_0(s,e,t)}return r}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,r){const a=new Gn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Gc),u.toneMapping=ki,u.autoClear=!1;const _=new gd({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),S=new Cn(new ti,_);let E=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,E=!0):(_.color.copy(Gc),E=!0);for(let h=0;h<6;h++){const R=h%3;R===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):R===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const M=this._cubeSize;Ma(r,R*M,h>2?M:0,M,M),u.setRenderTarget(r),E&&u.render(S,a),u.render(e,a)}S.geometry.dispose(),S.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ma(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hc[(r-1)%Hc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Cn(this._lodPlanes[r],c),f=c.uniforms,_=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*rr-1),E=s/S,p=isFinite(s)?1+Math.floor(u*E):rr;p>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rr}`);const h=[];let R=0;for(let C=0;C<rr;++C){const de=C/E,T=Math.exp(-de*de/2);h.push(T),C===0?R+=T:C<p&&(R+=2*T)}for(let C=0;C<h.length;C++)h[C]=h[C]/R;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=S,f.mipInt.value=M-i;const L=this._sizeLods[r],H=3*L*(r>M-kr?r-M+kr:0),O=4*(this._cubeSize-L);Ma(t,H,O,3*L,2*L),l.setRenderTarget(t),l.render(d,Lo)}}function m0(n){const e=[],t=[],i=[];let r=n;const s=n-kr+1+kc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-kr?l=kc[o-n+kr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,S=6,E=3,p=2,h=1,R=new Float32Array(E*S*_),M=new Float32Array(p*S*_),L=new Float32Array(h*S*_);for(let O=0;O<_;O++){const C=O%3*2/3-1,de=O>2?0:-1,T=[C,de,0,C+2/3,de,0,C+2/3,de+1,0,C,de,0,C+2/3,de+1,0,C,de+1,0];R.set(T,E*S*O),M.set(f,p*S*O);const w=[O,O,O,O,O,O];L.set(w,h*S*O)}const H=new _r;H.setAttribute("position",new ri(R,E)),H.setAttribute("uv",new ri(M,p)),H.setAttribute("faceIndex",new ri(L,h)),e.push(H),r>kr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vc(n,e,t){const i=new pr(n,e,t);return i.texture.mapping=Va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _0(n,e,t){const i=new Float32Array(rr),r=new Q(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Wc(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Xc(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qo||l===Yo,u=l===Zr||l===jr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new zc(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new zc(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function v0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function E0(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const S in f.attributes)e.remove(f.attributes[S]);for(const S in f.morphAttributes){const E=f.morphAttributes[S];for(let p=0,h=E.length;p<h;p++)e.remove(E[p])}f.removeEventListener("dispose",o),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const S in f)e.update(f[S],n.ARRAY_BUFFER);const _=d.morphAttributes;for(const S in _){const E=_[S];for(let p=0,h=E.length;p<h;p++)e.update(E[p],n.ARRAY_BUFFER)}}function c(d){const f=[],_=d.index,S=d.attributes.position;let E=0;if(_!==null){const R=_.array;E=_.version;for(let M=0,L=R.length;M<L;M+=3){const H=R[M+0],O=R[M+1],C=R[M+2];f.push(H,O,O,C,C,H)}}else if(S!==void 0){const R=S.array;E=S.version;for(let M=0,L=R.length/3-1;M<L;M+=3){const H=M+0,O=M+1,C=M+2;f.push(H,O,O,C,C,H)}}else return;const p=new(dd(f)?Ed:vd)(f,1);p.version=E;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function S0(n,e,t,i){const r=i.isWebGL2;let s;function o(_){s=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function u(_,S){n.drawElements(s,S,a,_*l),t.update(S,s,1)}function d(_,S,E){if(E===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,S,a,_*l,E),t.update(S,s,E)}function f(_,S,E){if(E===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<E;h++)this.render(_[h]/l,S[h]);else{p.multiDrawElementsWEBGL(s,S,0,a,_,0,E);let h=0;for(let R=0;R<E;R++)h+=S[R];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function x0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function y0(n,e){return n[0]-e[0]}function M0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function T0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new an,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const S=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,E=S!==void 0?S.length:0;let p=s.get(u);if(p===void 0||p.count!==E){let J=function(){ge.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var _=J;p!==void 0&&p.texture.dispose();const M=u.morphAttributes.position!==void 0,L=u.morphAttributes.normal!==void 0,H=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],de=u.morphAttributes.color||[];let T=0;M===!0&&(T=1),L===!0&&(T=2),H===!0&&(T=3);let w=u.attributes.position.count*T,te=1;w>e.maxTextureSize&&(te=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const ne=new Float32Array(w*te*4*E),ge=new pd(ne,w,te,E);ge.type=Fi,ge.needsUpdate=!0;const G=T*4;for(let oe=0;oe<E;oe++){const ue=O[oe],ae=C[oe],se=de[oe],le=w*te*4*oe;for(let ve=0;ve<ue.count;ve++){const Ee=ve*G;M===!0&&(o.fromBufferAttribute(ue,ve),ne[le+Ee+0]=o.x,ne[le+Ee+1]=o.y,ne[le+Ee+2]=o.z,ne[le+Ee+3]=0),L===!0&&(o.fromBufferAttribute(ae,ve),ne[le+Ee+4]=o.x,ne[le+Ee+5]=o.y,ne[le+Ee+6]=o.z,ne[le+Ee+7]=0),H===!0&&(o.fromBufferAttribute(se,ve),ne[le+Ee+8]=o.x,ne[le+Ee+9]=o.y,ne[le+Ee+10]=o.z,ne[le+Ee+11]=se.itemSize===4?o.w:1)}}p={count:E,texture:ge,size:new Nt(w,te)},s.set(u,p),u.addEventListener("dispose",J)}let h=0;for(let M=0;M<f.length;M++)h+=f[M];const R=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",R),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const S=f===void 0?0:f.length;let E=i[u.id];if(E===void 0||E.length!==S){E=[];for(let L=0;L<S;L++)E[L]=[L,0];i[u.id]=E}for(let L=0;L<S;L++){const H=E[L];H[0]=L,H[1]=f[L]}E.sort(M0);for(let L=0;L<8;L++)L<S&&E[L][1]?(a[L][0]=E[L][0],a[L][1]=E[L][1]):(a[L][0]=Number.MAX_SAFE_INTEGER,a[L][1]=0);a.sort(y0);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let R=0;for(let L=0;L<8;L++){const H=a[L],O=H[0],C=H[1];O!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+L)!==p[O]&&u.setAttribute("morphTarget"+L,p[O]),h&&u.getAttribute("morphNormal"+L)!==h[O]&&u.setAttribute("morphNormal"+L,h[O]),r[L]=C,R+=C):(p&&u.hasAttribute("morphTarget"+L)===!0&&u.deleteAttribute("morphTarget"+L),h&&u.hasAttribute("morphNormal"+L)===!0&&u.deleteAttribute("morphNormal"+L),r[L]=0)}const M=u.morphTargetsRelative?1:1-R;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function A0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ad extends Un{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:lr,u!==lr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===lr&&(i=Oi),i===void 0&&u===Kr&&(i=or),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bd=new Un,wd=new Ad(1,1);wd.compareFunction=ud;const Rd=new pd,Ld=new l_,Id=new yd,qc=[],Yc=[],Zc=new Float32Array(16),jc=new Float32Array(9),Kc=new Float32Array(4);function is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=qc[r];if(s===void 0&&(s=new Float32Array(r),qc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qa(n,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function L0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function I0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Kc.set(i),n.uniformMatrix2fv(this.addr,!1,Kc),tn(t,i)}}function P0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;jc.set(i),n.uniformMatrix3fv(this.addr,!1,jc),tn(t,i)}}function N0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Zc.set(i),n.uniformMatrix4fv(this.addr,!1,Zc),tn(t,i)}}function C0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function O0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function F0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function G0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function H0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?wd:bd;t.setTexture2D(e||s,r)}function z0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ld,r)}function V0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Id,r)}function W0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rd,r)}function X0(n){switch(n){case 5126:return b0;case 35664:return w0;case 35665:return R0;case 35666:return L0;case 35674:return I0;case 35675:return P0;case 35676:return N0;case 5124:case 35670:return C0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return B0;case 36295:return k0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}function q0(n,e){n.uniform1fv(this.addr,e)}function Y0(n,e){const t=is(e,this.size,2);n.uniform2fv(this.addr,t)}function Z0(n,e){const t=is(e,this.size,3);n.uniform3fv(this.addr,t)}function j0(n,e){const t=is(e,this.size,4);n.uniform4fv(this.addr,t)}function K0(n,e){const t=is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $0(n,e){const t=is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J0(n,e){const t=is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Q0(n,e){n.uniform1iv(this.addr,e)}function eE(n,e){n.uniform2iv(this.addr,e)}function tE(n,e){n.uniform3iv(this.addr,e)}function nE(n,e){n.uniform4iv(this.addr,e)}function iE(n,e){n.uniform1uiv(this.addr,e)}function rE(n,e){n.uniform2uiv(this.addr,e)}function sE(n,e){n.uniform3uiv(this.addr,e)}function aE(n,e){n.uniform4uiv(this.addr,e)}function oE(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bd,s[o])}function lE(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ld,s[o])}function cE(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Id,s[o])}function uE(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rd,s[o])}function dE(n){switch(n){case 5126:return q0;case 35664:return Y0;case 35665:return Z0;case 35666:return j0;case 35674:return K0;case 35675:return $0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return eE;case 35668:case 35672:return tE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return rE;case 36295:return sE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return uE}}class fE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}}class hE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dE(t.type)}}class pE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function $c(n,e){n.seq.push(e),n.map[e.id]=e}function mE(n,e,t){const i=n.name,r=i.length;for(Co.lastIndex=0;;){const s=Co.exec(i),o=Co.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$c(t,c===void 0?new fE(a,n,e):new hE(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new pE(a),$c(t,d)),t=d}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Jc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _E=37297;let gE=0;function vE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function EE(n){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(n);let i;switch(e===t?i="":e===Oa&&t===Ua?i="LinearDisplayP3ToLinearSRGB":e===Ua&&t===Oa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ai:case Wa:return[i,"LinearTransferOETF"];case ln:case fl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Qc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vE(n.getShaderSource(e),o)}else return r}function SE(n,e){const t=EE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xE(n,e){let t;switch(e){case Pm:t="Linear";break;case Nm:t="Reinhard";break;case Cm:t="OptimizedCineon";break;case Dm:t="ACESFilmic";break;case Om:t="AgX";break;case Um:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gr).join(`
`)}function ME(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gr).join(`
`)}function TE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gr(n){return n!==""}function eu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(n){return n.replace(bE,RE)}const wE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function RE(n,e){let t=St[e];if(t===void 0){const i=wE.get(e);if(i!==void 0)t=St[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(n){return n.replace(LE,IE)}function IE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function iu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function NE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case jr:e="ENVMAP_TYPE_CUBE";break;case Va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function DE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ul:e="ENVMAP_BLENDING_MULTIPLY";break;case Lm:e="ENVMAP_BLENDING_MIX";break;case Im:e="ENVMAP_BLENDING_ADD";break}return e}function UE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=PE(t),c=NE(t),u=CE(t),d=DE(t),f=UE(t),_=t.isWebGL2?"":yE(t),S=ME(t),E=TE(s),p=r.createProgram();let h,R,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Gr).join(`
`),h.length>0&&(h+=`
`),R=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Gr).join(`
`),R.length>0&&(R+=`
`)):(h=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),R=[_,iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?St.tonemapping_pars_fragment:"",t.toneMapping!==ki?xE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,SE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Qo(o),o=eu(o,t),o=tu(o,t),a=Qo(a),a=eu(a,t),a=tu(a,t),o=nu(o),a=nu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,R=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const L=M+h+o,H=M+R+a,O=Jc(r,r.VERTEX_SHADER,L),C=Jc(r,r.FRAGMENT_SHADER,H);r.attachShader(p,O),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function de(ne){if(n.debug.checkShaderErrors){const ge=r.getProgramInfoLog(p).trim(),G=r.getShaderInfoLog(O).trim(),J=r.getShaderInfoLog(C).trim();let oe=!0,ue=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,O,C);else{const ae=Qc(r,O,"vertex"),se=Qc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ge+`
`+ae+`
`+se)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(G===""||J==="")&&(ue=!1);ue&&(ne.diagnostics={runnable:oe,programLog:ge,vertexShader:{log:G,prefix:h},fragmentShader:{log:J,prefix:R}})}r.deleteShader(O),r.deleteShader(C),T=new Ta(r,p),w=AE(r,p)}let T;this.getUniforms=function(){return T===void 0&&de(this),T};let w;this.getAttributes=function(){return w===void 0&&de(this),w};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=r.getProgramParameter(p,_E)),te},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=O,this.fragmentShader=C,this}let FE=0;class BE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kE(e),t.set(e,i)),i}}class kE{constructor(e){this.id=FE++,this.code=e,this.usedTimes=0}}function GE(n,e,t,i,r,s,o){const a=new md,l=new BE,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return T===0?"uv":`uv${T}`}function p(T,w,te,ne,ge){const G=ne.fog,J=ge.geometry,oe=T.isMeshStandardMaterial?ne.environment:null,ue=(T.isMeshStandardMaterial?t:e).get(T.envMap||oe),ae=ue&&ue.mapping===Va?ue.image.height:null,se=S[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const le=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ve=le!==void 0?le.length:0;let Ee=0;J.morphAttributes.position!==void 0&&(Ee=1),J.morphAttributes.normal!==void 0&&(Ee=2),J.morphAttributes.color!==void 0&&(Ee=3);let ee,fe,we,ze;if(se){const Kt=ei[se];ee=Kt.vertexShader,fe=Kt.fragmentShader}else ee=T.vertexShader,fe=T.fragmentShader,l.update(T),we=l.getVertexShaderID(T),ze=l.getFragmentShaderID(T);const Se=n.getRenderTarget(),Qe=ge.isInstancedMesh===!0,lt=ge.isBatchedMesh===!0,Ne=!!T.map,ht=!!T.matcap,Y=!!ue,Vt=!!T.aoMap,qe=!!T.lightMap,nt=!!T.bumpMap,He=!!T.normalMap,Lt=!!T.displacementMap,tt=!!T.emissiveMap,A=!!T.metalnessMap,x=!!T.roughnessMap,Z=T.anisotropy>0,pe=T.clearcoat>0,he=T.iridescence>0,$=T.sheen>0,Ue=T.transmission>0,m=Z&&!!T.anisotropyMap,g=pe&&!!T.clearcoatMap,b=pe&&!!T.clearcoatNormalMap,N=pe&&!!T.clearcoatRoughnessMap,I=he&&!!T.iridescenceMap,F=he&&!!T.iridescenceThicknessMap,W=$&&!!T.sheenColorMap,V=$&&!!T.sheenRoughnessMap,q=!!T.specularMap,ce=!!T.specularColorMap,Me=!!T.specularIntensityMap,Pe=Ue&&!!T.transmissionMap,Ve=Ue&&!!T.thicknessMap,We=!!T.gradientMap,me=!!T.alphaMap,D=T.alphaTest>0,Te=!!T.alphaHash,Re=!!T.extensions,et=!!J.attributes.uv1,$e=!!J.attributes.uv2,Rt=!!J.attributes.uv3;let At=ki;return T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(At=n.toneMapping),{isWebGL2:u,shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:ee,fragmentShader:fe,defines:T.defines,customVertexShaderID:we,customFragmentShaderID:ze,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:lt,instancing:Qe,instancingColor:Qe&&ge.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ai,map:Ne,matcap:ht,envMap:Y,envMapMode:Y&&ue.mapping,envMapCubeUVHeight:ae,aoMap:Vt,lightMap:qe,bumpMap:nt,normalMap:He,displacementMap:f&&Lt,emissiveMap:tt,normalMapObjectSpace:He&&T.normalMapType===Zm,normalMapTangentSpace:He&&T.normalMapType===cd,metalnessMap:A,roughnessMap:x,anisotropy:Z,anisotropyMap:m,clearcoat:pe,clearcoatMap:g,clearcoatNormalMap:b,clearcoatRoughnessMap:N,iridescence:he,iridescenceMap:I,iridescenceThicknessMap:F,sheen:$,sheenColorMap:W,sheenRoughnessMap:V,specularMap:q,specularColorMap:ce,specularIntensityMap:Me,transmission:Ue,transmissionMap:Pe,thicknessMap:Ve,gradientMap:We,opaque:T.transparent===!1&&T.blending===zr,alphaMap:me,alphaTest:D,alphaHash:Te,combine:T.combine,mapUv:Ne&&E(T.map.channel),aoMapUv:Vt&&E(T.aoMap.channel),lightMapUv:qe&&E(T.lightMap.channel),bumpMapUv:nt&&E(T.bumpMap.channel),normalMapUv:He&&E(T.normalMap.channel),displacementMapUv:Lt&&E(T.displacementMap.channel),emissiveMapUv:tt&&E(T.emissiveMap.channel),metalnessMapUv:A&&E(T.metalnessMap.channel),roughnessMapUv:x&&E(T.roughnessMap.channel),anisotropyMapUv:m&&E(T.anisotropyMap.channel),clearcoatMapUv:g&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:b&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:I&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:F&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:W&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:V&&E(T.sheenRoughnessMap.channel),specularMapUv:q&&E(T.specularMap.channel),specularColorMapUv:ce&&E(T.specularColorMap.channel),specularIntensityMapUv:Me&&E(T.specularIntensityMap.channel),transmissionMapUv:Pe&&E(T.transmissionMap.channel),thicknessMapUv:Ve&&E(T.thicknessMap.channel),alphaMapUv:me&&E(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(He||Z),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:et,vertexUv2s:$e,vertexUv3s:Rt,pointsUvs:ge.isPoints===!0&&!!J.attributes.uv&&(Ne||me),fog:!!G,useFog:T.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ge.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&te.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ne&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===xi,flipSided:T.side===bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Re&&T.extensions.derivatives===!0,extensionFragDepth:Re&&T.extensions.fragDepth===!0,extensionDrawBuffers:Re&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function h(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const te in T.defines)w.push(te),w.push(T.defines[te]);return T.isRawShaderMaterial===!1&&(R(w,T),M(w,T),w.push(n.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function R(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function M(T,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function L(T){const w=S[T.type];let te;if(w){const ne=ei[w];te=y_.clone(ne.uniforms)}else te=T.uniforms;return te}function H(T,w){let te;for(let ne=0,ge=c.length;ne<ge;ne++){const G=c[ne];if(G.cacheKey===w){te=G,++te.usedTimes;break}}return te===void 0&&(te=new OE(n,w,T,s),c.push(te)),te}function O(T){if(--T.usedTimes===0){const w=c.indexOf(T);c[w]=c[c.length-1],c.pop(),T.destroy()}}function C(T){l.remove(T)}function de(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:L,acquireProgram:H,releaseProgram:O,releaseShaderCache:C,programs:c,dispose:de}}function HE(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function zE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ru(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function su(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,_,S,E,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:_,groupOrder:S,renderOrder:d.renderOrder,z:E,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=_,h.groupOrder=S,h.renderOrder=d.renderOrder,h.z=E,h.group=p),e++,h}function a(d,f,_,S,E,p){const h=o(d,f,_,S,E,p);_.transmission>0?i.push(h):_.transparent===!0?r.push(h):t.push(h)}function l(d,f,_,S,E,p){const h=o(d,f,_,S,E,p);_.transmission>0?i.unshift(h):_.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||zE),i.length>1&&i.sort(f||ru),r.length>1&&r.sort(f||ru)}function u(){for(let d=e,f=n.length;d<f;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function VE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new su,n.set(i,[o])):r>=s.length?(o=new su,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function WE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new It};break;case"SpotLight":t={position:new Q,direction:new Q,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function XE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qE=0;function YE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZE(n,e){const t=new WE,i=XE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new Q);const s=new Q,o=new Qt,a=new Qt;function l(u,d){let f=0,_=0,S=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let E=0,p=0,h=0,R=0,M=0,L=0,H=0,O=0,C=0,de=0,T=0;u.sort(YE);const w=d===!0?Math.PI:1;for(let ne=0,ge=u.length;ne<ge;ne++){const G=u[ne],J=G.color,oe=G.intensity,ue=G.distance,ae=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=J.r*oe*w,_+=J.g*oe*w,S+=J.b*oe*w;else if(G.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(G.sh.coefficients[se],oe);T++}else if(G.isDirectionalLight){const se=t.get(G);if(se.color.copy(G.color).multiplyScalar(G.intensity*w),G.castShadow){const le=G.shadow,ve=i.get(G);ve.shadowBias=le.bias,ve.shadowNormalBias=le.normalBias,ve.shadowRadius=le.radius,ve.shadowMapSize=le.mapSize,r.directionalShadow[E]=ve,r.directionalShadowMap[E]=ae,r.directionalShadowMatrix[E]=G.shadow.matrix,L++}r.directional[E]=se,E++}else if(G.isSpotLight){const se=t.get(G);se.position.setFromMatrixPosition(G.matrixWorld),se.color.copy(J).multiplyScalar(oe*w),se.distance=ue,se.coneCos=Math.cos(G.angle),se.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),se.decay=G.decay,r.spot[h]=se;const le=G.shadow;if(G.map&&(r.spotLightMap[C]=G.map,C++,le.updateMatrices(G),G.castShadow&&de++),r.spotLightMatrix[h]=le.matrix,G.castShadow){const ve=i.get(G);ve.shadowBias=le.bias,ve.shadowNormalBias=le.normalBias,ve.shadowRadius=le.radius,ve.shadowMapSize=le.mapSize,r.spotShadow[h]=ve,r.spotShadowMap[h]=ae,O++}h++}else if(G.isRectAreaLight){const se=t.get(G);se.color.copy(J).multiplyScalar(oe),se.halfWidth.set(G.width*.5,0,0),se.halfHeight.set(0,G.height*.5,0),r.rectArea[R]=se,R++}else if(G.isPointLight){const se=t.get(G);if(se.color.copy(G.color).multiplyScalar(G.intensity*w),se.distance=G.distance,se.decay=G.decay,G.castShadow){const le=G.shadow,ve=i.get(G);ve.shadowBias=le.bias,ve.shadowNormalBias=le.normalBias,ve.shadowRadius=le.radius,ve.shadowMapSize=le.mapSize,ve.shadowCameraNear=le.camera.near,ve.shadowCameraFar=le.camera.far,r.pointShadow[p]=ve,r.pointShadowMap[p]=ae,r.pointShadowMatrix[p]=G.shadow.matrix,H++}r.point[p]=se,p++}else if(G.isHemisphereLight){const se=t.get(G);se.skyColor.copy(G.color).multiplyScalar(oe*w),se.groundColor.copy(G.groundColor).multiplyScalar(oe*w),r.hemi[M]=se,M++}}R>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=_,r.ambient[2]=S;const te=r.hash;(te.directionalLength!==E||te.pointLength!==p||te.spotLength!==h||te.rectAreaLength!==R||te.hemiLength!==M||te.numDirectionalShadows!==L||te.numPointShadows!==H||te.numSpotShadows!==O||te.numSpotMaps!==C||te.numLightProbes!==T)&&(r.directional.length=E,r.spot.length=h,r.rectArea.length=R,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=O+C-de,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=de,r.numLightProbes=T,te.directionalLength=E,te.pointLength=p,te.spotLength=h,te.rectAreaLength=R,te.hemiLength=M,te.numDirectionalShadows=L,te.numPointShadows=H,te.numSpotShadows=O,te.numSpotMaps=C,te.numLightProbes=T,r.version=qE++)}function c(u,d){let f=0,_=0,S=0,E=0,p=0;const h=d.matrixWorldInverse;for(let R=0,M=u.length;R<M;R++){const L=u[R];if(L.isDirectionalLight){const H=r.directional[f];H.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),H.direction.sub(s),H.direction.transformDirection(h),f++}else if(L.isSpotLight){const H=r.spot[S];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(h),H.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),H.direction.sub(s),H.direction.transformDirection(h),S++}else if(L.isRectAreaLight){const H=r.rectArea[E];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(h),a.identity(),o.copy(L.matrixWorld),o.premultiply(h),a.extractRotation(o),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),H.halfWidth.applyMatrix4(a),H.halfHeight.applyMatrix4(a),E++}else if(L.isPointLight){const H=r.point[_];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(h),_++}else if(L.isHemisphereLight){const H=r.hemi[p];H.direction.setFromMatrixPosition(L.matrixWorld),H.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function au(n,e){const t=new ZE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jE(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new au(n,e),t.set(s,[l])):o>=a.length?(l=new au(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class KE extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $E extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eS(n,e,t){let i=new pl;const r=new Nt,s=new Nt,o=new an,a=new KE({depthPacking:Ym}),l=new $E,c={},u=t.maxTextureSize,d={[qi]:bn,[bn]:qi,[xi]:xi},f=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:JE,fragmentShader:QE}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const S=new _r;S.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Cn(S,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let h=this.type;this.render=function(O,C,de){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||O.length===0)return;const T=n.getRenderTarget(),w=n.getActiveCubeFace(),te=n.getActiveMipmapLevel(),ne=n.state;ne.setBlending(Bi),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ge=h!==vi&&this.type===vi,G=h===vi&&this.type!==vi;for(let J=0,oe=O.length;J<oe;J++){const ue=O[J],ae=ue.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;r.copy(ae.mapSize);const se=ae.getFrameExtents();if(r.multiply(se),s.copy(ae.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,ae.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,ae.mapSize.y=s.y)),ae.map===null||ge===!0||G===!0){const ve=this.type!==vi?{minFilter:En,magFilter:En}:{};ae.map!==null&&ae.map.dispose(),ae.map=new pr(r.x,r.y,ve),ae.map.texture.name=ue.name+".shadowMap",ae.camera.updateProjectionMatrix()}n.setRenderTarget(ae.map),n.clear();const le=ae.getViewportCount();for(let ve=0;ve<le;ve++){const Ee=ae.getViewport(ve);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),ne.viewport(o),ae.updateMatrices(ue,ve),i=ae.getFrustum(),L(C,de,ae.camera,ue,this.type)}ae.isPointLightShadow!==!0&&this.type===vi&&R(ae,de),ae.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(T,w,te)};function R(O,C){const de=e.update(E);f.defines.VSM_SAMPLES!==O.blurSamples&&(f.defines.VSM_SAMPLES=O.blurSamples,_.defines.VSM_SAMPLES=O.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new pr(r.x,r.y)),f.uniforms.shadow_pass.value=O.map.texture,f.uniforms.resolution.value=O.mapSize,f.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(C,null,de,f,E,null),_.uniforms.shadow_pass.value=O.mapPass.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(C,null,de,_,E,null)}function M(O,C,de,T){let w=null;const te=de.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(te!==void 0)w=te;else if(w=de.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const ne=w.uuid,ge=C.uuid;let G=c[ne];G===void 0&&(G={},c[ne]=G);let J=G[ge];J===void 0&&(J=w.clone(),G[ge]=J,C.addEventListener("dispose",H)),w=J}if(w.visible=C.visible,w.wireframe=C.wireframe,T===vi?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:d[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,de.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ne=n.properties.get(w);ne.light=de}return w}function L(O,C,de,T,w){if(O.visible===!1)return;if(O.layers.test(C.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===vi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,O.matrixWorld);const ge=e.update(O),G=O.material;if(Array.isArray(G)){const J=ge.groups;for(let oe=0,ue=J.length;oe<ue;oe++){const ae=J[oe],se=G[ae.materialIndex];if(se&&se.visible){const le=M(O,se,T,w);O.onBeforeShadow(n,O,C,de,ge,le,ae),n.renderBufferDirect(de,null,ge,le,O,ae),O.onAfterShadow(n,O,C,de,ge,le,ae)}}}else if(G.visible){const J=M(O,G,T,w);O.onBeforeShadow(n,O,C,de,ge,J,null),n.renderBufferDirect(de,null,ge,J,O,null),O.onAfterShadow(n,O,C,de,ge,J,null)}}const ne=O.children;for(let ge=0,G=ne.length;ge<G;ge++)L(ne[ge],C,de,T,w)}function H(O){O.target.removeEventListener("dispose",H);for(const de in c){const T=c[de],w=O.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function tS(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const Te=new an;let Re=null;const et=new an(0,0,0,0);return{setMask:function($e){Re!==$e&&!D&&(n.colorMask($e,$e,$e,$e),Re=$e)},setLocked:function($e){D=$e},setClear:function($e,Rt,At,Ut,Kt){Kt===!0&&($e*=Ut,Rt*=Ut,At*=Ut),Te.set($e,Rt,At,Ut),et.equals(Te)===!1&&(n.clearColor($e,Rt,At,Ut),et.copy(Te))},reset:function(){D=!1,Re=null,et.set(-1,0,0,0)}}}function s(){let D=!1,Te=null,Re=null,et=null;return{setTest:function($e){$e?lt(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function($e){Te!==$e&&!D&&(n.depthMask($e),Te=$e)},setFunc:function($e){if(Re!==$e){switch($e){case ym:n.depthFunc(n.NEVER);break;case Mm:n.depthFunc(n.ALWAYS);break;case Tm:n.depthFunc(n.LESS);break;case Ca:n.depthFunc(n.LEQUAL);break;case Am:n.depthFunc(n.EQUAL);break;case bm:n.depthFunc(n.GEQUAL);break;case wm:n.depthFunc(n.GREATER);break;case Rm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=$e}},setLocked:function($e){D=$e},setClear:function($e){et!==$e&&(n.clearDepth($e),et=$e)},reset:function(){D=!1,Te=null,Re=null,et=null}}}function o(){let D=!1,Te=null,Re=null,et=null,$e=null,Rt=null,At=null,Ut=null,Kt=null;return{setTest:function(U){D||(U?lt(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(U){Te!==U&&!D&&(n.stencilMask(U),Te=U)},setFunc:function(U,re,xe){(Re!==U||et!==re||$e!==xe)&&(n.stencilFunc(U,re,xe),Re=U,et=re,$e=xe)},setOp:function(U,re,xe){(Rt!==U||At!==re||Ut!==xe)&&(n.stencilOp(U,re,xe),Rt=U,At=re,Ut=xe)},setLocked:function(U){D=U},setClear:function(U){Kt!==U&&(n.clearStencil(U),Kt=U)},reset:function(){D=!1,Te=null,Re=null,et=null,$e=null,Rt=null,At=null,Ut=null,Kt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},_={},S=new WeakMap,E=[],p=null,h=!1,R=null,M=null,L=null,H=null,O=null,C=null,de=null,T=new It(0,0,0),w=0,te=!1,ne=null,ge=null,G=null,J=null,oe=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,se=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(le)[1]),ae=se>=1):le.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ae=se>=2);let ve=null,Ee={};const ee=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),we=new an().fromArray(ee),ze=new an().fromArray(fe);function Se(D,Te,Re,et){const $e=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(D,Rt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<Re;At++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(Te,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,$e):n.texImage2D(Te+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,$e);return Rt}const Qe={};Qe[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),Qe[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Qe[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Qe[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),lt(n.DEPTH_TEST),l.setFunc(Ca),tt(!1),A(Hl),lt(n.CULL_FACE),He(Bi);function lt(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function Ne(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function ht(D,Te){return _[D]!==Te?(n.bindFramebuffer(D,Te),_[D]=Te,i&&(D===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=Te),D===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=Te)),!0):!1}function Y(D,Te){let Re=E,et=!1;if(D)if(Re=S.get(Te),Re===void 0&&(Re=[],S.set(Te,Re)),D.isWebGLMultipleRenderTargets){const $e=D.texture;if(Re.length!==$e.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,At=$e.length;Rt<At;Rt++)Re[Rt]=n.COLOR_ATTACHMENT0+Rt;Re.length=$e.length,et=!0}}else Re[0]!==n.COLOR_ATTACHMENT0&&(Re[0]=n.COLOR_ATTACHMENT0,et=!0);else Re[0]!==n.BACK&&(Re[0]=n.BACK,et=!0);et&&(t.isWebGL2?n.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Vt(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const qe={[ir]:n.FUNC_ADD,[om]:n.FUNC_SUBTRACT,[lm]:n.FUNC_REVERSE_SUBTRACT};if(i)qe[Xl]=n.MIN,qe[ql]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(qe[Xl]=D.MIN_EXT,qe[ql]=D.MAX_EXT)}const nt={[cm]:n.ZERO,[um]:n.ONE,[dm]:n.SRC_COLOR,[Wo]:n.SRC_ALPHA,[gm]:n.SRC_ALPHA_SATURATE,[mm]:n.DST_COLOR,[hm]:n.DST_ALPHA,[fm]:n.ONE_MINUS_SRC_COLOR,[Xo]:n.ONE_MINUS_SRC_ALPHA,[_m]:n.ONE_MINUS_DST_COLOR,[pm]:n.ONE_MINUS_DST_ALPHA,[vm]:n.CONSTANT_COLOR,[Em]:n.ONE_MINUS_CONSTANT_COLOR,[Sm]:n.CONSTANT_ALPHA,[xm]:n.ONE_MINUS_CONSTANT_ALPHA};function He(D,Te,Re,et,$e,Rt,At,Ut,Kt,U){if(D===Bi){h===!0&&(Ne(n.BLEND),h=!1);return}if(h===!1&&(lt(n.BLEND),h=!0),D!==am){if(D!==R||U!==te){if((M!==ir||O!==ir)&&(n.blendEquation(n.FUNC_ADD),M=ir,O=ir),U)switch(D){case zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFunc(n.ONE,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}L=null,H=null,C=null,de=null,T.set(0,0,0),w=0,R=D,te=U}return}$e=$e||Te,Rt=Rt||Re,At=At||et,(Te!==M||$e!==O)&&(n.blendEquationSeparate(qe[Te],qe[$e]),M=Te,O=$e),(Re!==L||et!==H||Rt!==C||At!==de)&&(n.blendFuncSeparate(nt[Re],nt[et],nt[Rt],nt[At]),L=Re,H=et,C=Rt,de=At),(Ut.equals(T)===!1||Kt!==w)&&(n.blendColor(Ut.r,Ut.g,Ut.b,Kt),T.copy(Ut),w=Kt),R=D,te=!1}function Lt(D,Te){D.side===xi?Ne(n.CULL_FACE):lt(n.CULL_FACE);let Re=D.side===bn;Te&&(Re=!Re),tt(Re),D.blending===zr&&D.transparent===!1?He(Bi):He(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const et=D.stencilWrite;c.setTest(et),et&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){ne!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),ne=D)}function A(D){D!==im?(lt(n.CULL_FACE),D!==ge&&(D===Hl?n.cullFace(n.BACK):D===rm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),ge=D}function x(D){D!==G&&(ae&&n.lineWidth(D),G=D)}function Z(D,Te,Re){D?(lt(n.POLYGON_OFFSET_FILL),(J!==Te||oe!==Re)&&(n.polygonOffset(Te,Re),J=Te,oe=Re)):Ne(n.POLYGON_OFFSET_FILL)}function pe(D){D?lt(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function he(D){D===void 0&&(D=n.TEXTURE0+ue-1),ve!==D&&(n.activeTexture(D),ve=D)}function $(D,Te,Re){Re===void 0&&(ve===null?Re=n.TEXTURE0+ue-1:Re=ve);let et=Ee[Re];et===void 0&&(et={type:void 0,texture:void 0},Ee[Re]=et),(et.type!==D||et.texture!==Te)&&(ve!==Re&&(n.activeTexture(Re),ve=Re),n.bindTexture(D,Te||Qe[D]),et.type=D,et.texture=Te)}function Ue(){const D=Ee[ve];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function m(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function g(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function b(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function N(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(D){we.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function Pe(D){ze.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ze.copy(D))}function Ve(D,Te){let Re=d.get(Te);Re===void 0&&(Re=new WeakMap,d.set(Te,Re));let et=Re.get(D);et===void 0&&(et=n.getUniformBlockIndex(Te,D.name),Re.set(D,et))}function We(D,Te){const et=d.get(Te).get(D);u.get(Te)!==et&&(n.uniformBlockBinding(Te,et,D.__bindingPointIndex),u.set(Te,et))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ve=null,Ee={},_={},S=new WeakMap,E=[],p=null,h=!1,R=null,M=null,L=null,H=null,O=null,C=null,de=null,T=new It(0,0,0),w=0,te=!1,ne=null,ge=null,G=null,J=null,oe=null,we.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:lt,disable:Ne,bindFramebuffer:ht,drawBuffers:Y,useProgram:Vt,setBlending:He,setMaterial:Lt,setFlipSided:tt,setCullFace:A,setLineWidth:x,setPolygonOffset:Z,setScissorTest:pe,activeTexture:he,bindTexture:$,unbindTexture:Ue,compressedTexImage2D:m,compressedTexImage3D:g,texImage2D:q,texImage3D:ce,updateUBOMapping:Ve,uniformBlockBinding:We,texStorage2D:W,texStorage3D:V,texSubImage2D:b,texSubImage3D:N,compressedTexSubImage2D:I,compressedTexSubImage3D:F,scissor:Me,viewport:Pe,reset:me}}function nS(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,x){return _?new OffscreenCanvas(A,x):Ba("canvas")}function E(A,x,Z,pe){let he=1;if((A.width>pe||A.height>pe)&&(he=pe/Math.max(A.width,A.height)),he<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const $=x?Jo:Math.floor,Ue=$(he*A.width),m=$(he*A.height);d===void 0&&(d=S(Ue,m));const g=Z?S(Ue,m):d;return g.width=Ue,g.height=m,g.getContext("2d").drawImage(A,0,0,Ue,m),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ue+"x"+m+")."),g}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return yc(A.width)&&yc(A.height)}function h(A){return a?!1:A.wrapS!==Yn||A.wrapT!==Yn||A.minFilter!==En&&A.minFilter!==kn}function R(A,x){return A.generateMipmaps&&x&&A.minFilter!==En&&A.minFilter!==kn}function M(A){n.generateMipmap(A)}function L(A,x,Z,pe,he=!1){if(a===!1)return x;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=x;if(x===n.RED&&(Z===n.FLOAT&&($=n.R32F),Z===n.HALF_FLOAT&&($=n.R16F),Z===n.UNSIGNED_BYTE&&($=n.R8)),x===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&($=n.R8UI),Z===n.UNSIGNED_SHORT&&($=n.R16UI),Z===n.UNSIGNED_INT&&($=n.R32UI),Z===n.BYTE&&($=n.R8I),Z===n.SHORT&&($=n.R16I),Z===n.INT&&($=n.R32I)),x===n.RG&&(Z===n.FLOAT&&($=n.RG32F),Z===n.HALF_FLOAT&&($=n.RG16F),Z===n.UNSIGNED_BYTE&&($=n.RG8)),x===n.RGBA){const Ue=he?Da:Ct.getTransfer(pe);Z===n.FLOAT&&($=n.RGBA32F),Z===n.HALF_FLOAT&&($=n.RGBA16F),Z===n.UNSIGNED_BYTE&&($=Ue===Bt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function H(A,x,Z){return R(A,Z)===!0||A.isFramebufferTexture&&A.minFilter!==En&&A.minFilter!==kn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function O(A){return A===En||A===Yl||A===no?n.NEAREST:n.LINEAR}function C(A){const x=A.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&u.delete(x)}function de(A){const x=A.target;x.removeEventListener("dispose",de),te(x)}function T(A){const x=i.get(A);if(x.__webglInit===void 0)return;const Z=A.source,pe=f.get(Z);if(pe){const he=pe[x.__cacheKey];he.usedTimes--,he.usedTimes===0&&w(A),Object.keys(pe).length===0&&f.delete(Z)}i.remove(A)}function w(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const Z=A.source,pe=f.get(Z);delete pe[x.__cacheKey],o.memory.textures--}function te(A){const x=A.texture,Z=i.get(A),pe=i.get(x);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(Z.__webglFramebuffer[he]))for(let $=0;$<Z.__webglFramebuffer[he].length;$++)n.deleteFramebuffer(Z.__webglFramebuffer[he][$]);else n.deleteFramebuffer(Z.__webglFramebuffer[he]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[he])}else{if(Array.isArray(Z.__webglFramebuffer))for(let he=0;he<Z.__webglFramebuffer.length;he++)n.deleteFramebuffer(Z.__webglFramebuffer[he]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let he=0;he<Z.__webglColorRenderbuffer.length;he++)Z.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[he]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let he=0,$=x.length;he<$;he++){const Ue=i.get(x[he]);Ue.__webglTexture&&(n.deleteTexture(Ue.__webglTexture),o.memory.textures--),i.remove(x[he])}i.remove(x),i.remove(A)}let ne=0;function ge(){ne=0}function G(){const A=ne;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),ne+=1,A}function J(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function oe(A,x){const Z=i.get(A);if(A.isVideoTexture&&Lt(A),A.isRenderTargetTexture===!1&&A.version>0&&Z.__version!==A.version){const pe=A.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(Z,A,x);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+x)}function ue(A,x){const Z=i.get(A);if(A.version>0&&Z.__version!==A.version){we(Z,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+x)}function ae(A,x){const Z=i.get(A);if(A.version>0&&Z.__version!==A.version){we(Z,A,x);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+x)}function se(A,x){const Z=i.get(A);if(A.version>0&&Z.__version!==A.version){ze(Z,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+x)}const le={[Zo]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},ve={[En]:n.NEAREST,[Yl]:n.NEAREST_MIPMAP_NEAREST,[no]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[Fm]:n.LINEAR_MIPMAP_NEAREST,[Us]:n.LINEAR_MIPMAP_LINEAR},Ee={[jm]:n.NEVER,[t_]:n.ALWAYS,[Km]:n.LESS,[ud]:n.LEQUAL,[$m]:n.EQUAL,[e_]:n.GEQUAL,[Jm]:n.GREATER,[Qm]:n.NOTEQUAL};function ee(A,x,Z){if(Z?(n.texParameteri(A,n.TEXTURE_WRAP_S,le[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,le[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,le[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ve[x.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Yn||x.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,O(x.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,O(x.minFilter)),x.minFilter!==En&&x.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===En||x.minFilter!==no&&x.minFilter!==Us||x.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Os&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(A,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function fe(A,x){let Z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const pe=x.source;let he=f.get(pe);he===void 0&&(he={},f.set(pe,he));const $=J(x);if($!==A.__cacheKey){he[$]===void 0&&(he[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),he[$].usedTimes++;const Ue=he[A.__cacheKey];Ue!==void 0&&(he[A.__cacheKey].usedTimes--,Ue.usedTimes===0&&w(x)),A.__cacheKey=$,A.__webglTexture=he[$].texture}return Z}function we(A,x,Z){let pe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(pe=n.TEXTURE_3D);const he=fe(A,x),$=x.source;t.bindTexture(pe,A.__webglTexture,n.TEXTURE0+Z);const Ue=i.get($);if($.version!==Ue.__version||he===!0){t.activeTexture(n.TEXTURE0+Z);const m=Ct.getPrimaries(Ct.workingColorSpace),g=x.colorSpace===Hn?null:Ct.getPrimaries(x.colorSpace),b=x.colorSpace===Hn||m===g?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);const N=h(x)&&p(x.image)===!1;let I=E(x.image,N,!1,r.maxTextureSize);I=tt(x,I);const F=p(I)||a,W=s.convert(x.format,x.colorSpace);let V=s.convert(x.type),q=L(x.internalFormat,W,V,x.colorSpace,x.isVideoTexture);ee(pe,x,F);let ce;const Me=x.mipmaps,Pe=a&&x.isVideoTexture!==!0&&q!==od,Ve=Ue.__version===void 0||he===!0,We=H(x,I,F);if(x.isDepthTexture)q=n.DEPTH_COMPONENT,a?x.type===Fi?q=n.DEPTH_COMPONENT32F:x.type===Oi?q=n.DEPTH_COMPONENT24:x.type===or?q=n.DEPTH24_STENCIL8:q=n.DEPTH_COMPONENT16:x.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===lr&&q===n.DEPTH_COMPONENT&&x.type!==dl&&x.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Oi,V=s.convert(x.type)),x.format===Kr&&q===n.DEPTH_COMPONENT&&(q=n.DEPTH_STENCIL,x.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=or,V=s.convert(x.type))),Ve&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,q,I.width,I.height):t.texImage2D(n.TEXTURE_2D,0,q,I.width,I.height,0,W,V,null));else if(x.isDataTexture)if(Me.length>0&&F){Pe&&Ve&&t.texStorage2D(n.TEXTURE_2D,We,q,Me[0].width,Me[0].height);for(let me=0,D=Me.length;me<D;me++)ce=Me[me],Pe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ce.width,ce.height,W,V,ce.data):t.texImage2D(n.TEXTURE_2D,me,q,ce.width,ce.height,0,W,V,ce.data);x.generateMipmaps=!1}else Pe?(Ve&&t.texStorage2D(n.TEXTURE_2D,We,q,I.width,I.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,W,V,I.data)):t.texImage2D(n.TEXTURE_2D,0,q,I.width,I.height,0,W,V,I.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,q,Me[0].width,Me[0].height,I.depth);for(let me=0,D=Me.length;me<D;me++)ce=Me[me],x.format!==Zn?W!==null?Pe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ce.width,ce.height,I.depth,W,ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,q,ce.width,ce.height,I.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ce.width,ce.height,I.depth,W,V,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,q,ce.width,ce.height,I.depth,0,W,V,ce.data)}else{Pe&&Ve&&t.texStorage2D(n.TEXTURE_2D,We,q,Me[0].width,Me[0].height);for(let me=0,D=Me.length;me<D;me++)ce=Me[me],x.format!==Zn?W!==null?Pe?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,ce.width,ce.height,W,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,me,q,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ce.width,ce.height,W,V,ce.data):t.texImage2D(n.TEXTURE_2D,me,q,ce.width,ce.height,0,W,V,ce.data)}else if(x.isDataArrayTexture)Pe?(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,q,I.width,I.height,I.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,W,V,I.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,q,I.width,I.height,I.depth,0,W,V,I.data);else if(x.isData3DTexture)Pe?(Ve&&t.texStorage3D(n.TEXTURE_3D,We,q,I.width,I.height,I.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,W,V,I.data)):t.texImage3D(n.TEXTURE_3D,0,q,I.width,I.height,I.depth,0,W,V,I.data);else if(x.isFramebufferTexture){if(Ve)if(Pe)t.texStorage2D(n.TEXTURE_2D,We,q,I.width,I.height);else{let me=I.width,D=I.height;for(let Te=0;Te<We;Te++)t.texImage2D(n.TEXTURE_2D,Te,q,me,D,0,W,V,null),me>>=1,D>>=1}}else if(Me.length>0&&F){Pe&&Ve&&t.texStorage2D(n.TEXTURE_2D,We,q,Me[0].width,Me[0].height);for(let me=0,D=Me.length;me<D;me++)ce=Me[me],Pe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,W,V,ce):t.texImage2D(n.TEXTURE_2D,me,q,W,V,ce);x.generateMipmaps=!1}else Pe?(Ve&&t.texStorage2D(n.TEXTURE_2D,We,q,I.width,I.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,W,V,I)):t.texImage2D(n.TEXTURE_2D,0,q,W,V,I);R(x,F)&&M(pe),Ue.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ze(A,x,Z){if(x.image.length!==6)return;const pe=fe(A,x),he=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+Z);const $=i.get(he);if(he.version!==$.__version||pe===!0){t.activeTexture(n.TEXTURE0+Z);const Ue=Ct.getPrimaries(Ct.workingColorSpace),m=x.colorSpace===Hn?null:Ct.getPrimaries(x.colorSpace),g=x.colorSpace===Hn||Ue===m?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,g);const b=x.isCompressedTexture||x.image[0].isCompressedTexture,N=x.image[0]&&x.image[0].isDataTexture,I=[];for(let me=0;me<6;me++)!b&&!N?I[me]=E(x.image[me],!1,!0,r.maxCubemapSize):I[me]=N?x.image[me].image:x.image[me],I[me]=tt(x,I[me]);const F=I[0],W=p(F)||a,V=s.convert(x.format,x.colorSpace),q=s.convert(x.type),ce=L(x.internalFormat,V,q,x.colorSpace),Me=a&&x.isVideoTexture!==!0,Pe=$.__version===void 0||pe===!0;let Ve=H(x,F,W);ee(n.TEXTURE_CUBE_MAP,x,W);let We;if(b){Me&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,ce,F.width,F.height);for(let me=0;me<6;me++){We=I[me].mipmaps;for(let D=0;D<We.length;D++){const Te=We[D];x.format!==Zn?V!==null?Me?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,D,0,0,Te.width,Te.height,V,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,D,ce,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,D,0,0,Te.width,Te.height,V,q,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,D,ce,Te.width,Te.height,0,V,q,Te.data)}}}else{We=x.mipmaps,Me&&Pe&&(We.length>0&&Ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,ce,I[0].width,I[0].height));for(let me=0;me<6;me++)if(N){Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,I[me].width,I[me].height,V,q,I[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,I[me].width,I[me].height,0,V,q,I[me].data);for(let D=0;D<We.length;D++){const Re=We[D].image[me].image;Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,D+1,0,0,Re.width,Re.height,V,q,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,D+1,ce,Re.width,Re.height,0,V,q,Re.data)}}else{Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,V,q,I[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,V,q,I[me]);for(let D=0;D<We.length;D++){const Te=We[D];Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,D+1,0,0,V,q,Te.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,D+1,ce,V,q,Te.image[me])}}}R(x,W)&&M(n.TEXTURE_CUBE_MAP),$.__version=he.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Se(A,x,Z,pe,he,$){const Ue=s.convert(Z.format,Z.colorSpace),m=s.convert(Z.type),g=L(Z.internalFormat,Ue,m,Z.colorSpace);if(!i.get(x).__hasExternalTextures){const N=Math.max(1,x.width>>$),I=Math.max(1,x.height>>$);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,$,g,N,I,x.depth,0,Ue,m,null):t.texImage2D(he,$,g,N,I,0,Ue,m,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),He(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,he,i.get(Z).__webglTexture,0,nt(x)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,he,i.get(Z).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(A,x,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer&&!x.stencilBuffer){let pe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||He(x)){const he=x.depthTexture;he&&he.isDepthTexture&&(he.type===Fi?pe=n.DEPTH_COMPONENT32F:he.type===Oi&&(pe=n.DEPTH_COMPONENT24));const $=nt(x);He(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,pe,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,$,pe,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,pe,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(x.depthBuffer&&x.stencilBuffer){const pe=nt(x);Z&&He(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,x.width,x.height):He(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const pe=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let he=0;he<pe.length;he++){const $=pe[he],Ue=s.convert($.format,$.colorSpace),m=s.convert($.type),g=L($.internalFormat,Ue,m,$.colorSpace),b=nt(x);Z&&He(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,b,g,x.width,x.height):He(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b,g,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,g,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),oe(x.depthTexture,0);const pe=i.get(x.depthTexture).__webglTexture,he=nt(x);if(x.depthTexture.format===lr)He(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(x.depthTexture.format===Kr)He(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const x=i.get(A),Z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");lt(x.__webglFramebuffer,A)}else if(Z){x.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[pe]),x.__webglDepthbuffer[pe]=n.createRenderbuffer(),Qe(x.__webglDepthbuffer[pe],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Qe(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(A,x,Z){const pe=i.get(A);x!==void 0&&Se(pe.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ne(A)}function Y(A){const x=A.texture,Z=i.get(A),pe=i.get(x);A.addEventListener("dispose",de),A.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=x.version,o.memory.textures++);const he=A.isWebGLCubeRenderTarget===!0,$=A.isWebGLMultipleRenderTargets===!0,Ue=p(A)||a;if(he){Z.__webglFramebuffer=[];for(let m=0;m<6;m++)if(a&&x.mipmaps&&x.mipmaps.length>0){Z.__webglFramebuffer[m]=[];for(let g=0;g<x.mipmaps.length;g++)Z.__webglFramebuffer[m][g]=n.createFramebuffer()}else Z.__webglFramebuffer[m]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){Z.__webglFramebuffer=[];for(let m=0;m<x.mipmaps.length;m++)Z.__webglFramebuffer[m]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if($)if(r.drawBuffers){const m=A.texture;for(let g=0,b=m.length;g<b;g++){const N=i.get(m[g]);N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&He(A)===!1){const m=$?x:[x];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let g=0;g<m.length;g++){const b=m[g];Z.__webglColorRenderbuffer[g]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[g]);const N=s.convert(b.format,b.colorSpace),I=s.convert(b.type),F=L(b.internalFormat,N,I,b.colorSpace,A.isXRRenderTarget===!0),W=nt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,F,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+g,n.RENDERBUFFER,Z.__webglColorRenderbuffer[g])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(Z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(n.TEXTURE_CUBE_MAP,x,Ue);for(let m=0;m<6;m++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let g=0;g<x.mipmaps.length;g++)Se(Z.__webglFramebuffer[m][g],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+m,g);else Se(Z.__webglFramebuffer[m],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);R(x,Ue)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){const m=A.texture;for(let g=0,b=m.length;g<b;g++){const N=m[g],I=i.get(N);t.bindTexture(n.TEXTURE_2D,I.__webglTexture),ee(n.TEXTURE_2D,N,Ue),Se(Z.__webglFramebuffer,A,N,n.COLOR_ATTACHMENT0+g,n.TEXTURE_2D,0),R(N,Ue)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let m=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?m=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(m,pe.__webglTexture),ee(m,x,Ue),a&&x.mipmaps&&x.mipmaps.length>0)for(let g=0;g<x.mipmaps.length;g++)Se(Z.__webglFramebuffer[g],A,x,n.COLOR_ATTACHMENT0,m,g);else Se(Z.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,m,0);R(x,Ue)&&M(m),t.unbindTexture()}A.depthBuffer&&Ne(A)}function Vt(A){const x=p(A)||a,Z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0,he=Z.length;pe<he;pe++){const $=Z[pe];if(R($,x)){const Ue=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,m=i.get($).__webglTexture;t.bindTexture(Ue,m),M(Ue),t.unbindTexture()}}}function qe(A){if(a&&A.samples>0&&He(A)===!1){const x=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Z=A.width,pe=A.height;let he=n.COLOR_BUFFER_BIT;const $=[],Ue=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,m=i.get(A),g=A.isWebGLMultipleRenderTargets===!0;if(g)for(let b=0;b<x.length;b++)t.bindFramebuffer(n.FRAMEBUFFER,m.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+b,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+b,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,m.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,m.__webglFramebuffer);for(let b=0;b<x.length;b++){$.push(n.COLOR_ATTACHMENT0+b),A.depthBuffer&&$.push(Ue);const N=m.__ignoreDepthValues!==void 0?m.__ignoreDepthValues:!1;if(N===!1&&(A.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),g&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,m.__webglColorRenderbuffer[b]),N===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ue]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ue])),g){const I=i.get(x[b]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,he,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),g)for(let b=0;b<x.length;b++){t.bindFramebuffer(n.FRAMEBUFFER,m.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+b,n.RENDERBUFFER,m.__webglColorRenderbuffer[b]);const N=i.get(x[b]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+b,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,m.__webglMultisampledFramebuffer)}}function nt(A){return Math.min(r.maxSamples,A.samples)}function He(A){const x=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Lt(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function tt(A,x){const Z=A.colorSpace,pe=A.format,he=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ko||Z!==Ai&&Z!==Hn&&(Ct.getTransfer(Z)===Bt?a===!1?e.has("EXT_sRGB")===!0&&pe===Zn?(A.format=Ko,A.minFilter=kn,A.generateMipmaps=!1):x=fd.sRGBToLinear(x):(pe!==Zn||he!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),x}this.allocateTextureUnit=G,this.resetTextureUnits=ge,this.setTexture2D=oe,this.setTexture2DArray=ue,this.setTexture3D=ae,this.setTextureCube=se,this.rebindTextures=ht,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=He}function iS(n,e,t){const i=t.isWebGL2;function r(s,o=Hn){let a;const l=Ct.getTransfer(o);if(s===Gi)return n.UNSIGNED_BYTE;if(s===nd)return n.UNSIGNED_SHORT_4_4_4_4;if(s===id)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Bm)return n.BYTE;if(s===km)return n.SHORT;if(s===dl)return n.UNSIGNED_SHORT;if(s===td)return n.INT;if(s===Oi)return n.UNSIGNED_INT;if(s===Fi)return n.FLOAT;if(s===Os)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Gm)return n.ALPHA;if(s===Zn)return n.RGBA;if(s===Hm)return n.LUMINANCE;if(s===zm)return n.LUMINANCE_ALPHA;if(s===lr)return n.DEPTH_COMPONENT;if(s===Kr)return n.DEPTH_STENCIL;if(s===Ko)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Vm)return n.RED;if(s===rd)return n.RED_INTEGER;if(s===Wm)return n.RG;if(s===sd)return n.RG_INTEGER;if(s===ad)return n.RGBA_INTEGER;if(s===ro||s===so||s===ao||s===oo)if(l===Bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ro)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ro)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===so)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ao)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===oo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zl||s===jl||s===Kl||s===$l)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$l)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===od)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jl||s===Ql)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jl)return l===Bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ql)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===ac||s===oc||s===lc||s===cc||s===uc||s===dc||s===fc||s===hc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ec)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ic)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ac)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lo||s===pc||s===mc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lo)return l===Bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xm||s===_c||s===gc||s===vc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===lo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_c)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===or?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class rS extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _s extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sS={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,i),h=this._getHandJoint(c,E);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),_=.02,S=.005;c.inputState.pinching&&f>_+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=_-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class aS extends ns{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,_=null,S=null;const E=t.getContextAttributes();let p=null,h=null;const R=[],M=[],L=new Nt;let H=null;const O=new Gn;O.layers.enable(1),O.viewport=new an;const C=new Gn;C.layers.enable(2),C.viewport=new an;const de=[O,C],T=new rS;T.layers.enable(1),T.layers.enable(2);let w=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=R[ee];return fe===void 0&&(fe=new Do,R[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=R[ee];return fe===void 0&&(fe=new Do,R[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=R[ee];return fe===void 0&&(fe=new Do,R[ee]=fe),fe.getHandSpace()};function ne(ee){const fe=M.indexOf(ee.inputSource);if(fe===-1)return;const we=R[fe];we!==void 0&&(we.update(ee.inputSource,ee.frame,c||o),we.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ge(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",ge),r.removeEventListener("inputsourceschange",G);for(let ee=0;ee<R.length;ee++){const fe=M[ee];fe!==null&&(M[ee]=null,R[ee].disconnect(fe))}w=null,te=null,e.setRenderTarget(p),_=null,f=null,d=null,r=null,h=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(H),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",ge),r.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),h=new pr(_.framebufferWidth,_.framebufferHeight,{format:Zn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let fe=null,we=null,ze=null;E.depth&&(ze=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=E.stencil?Kr:lr,we=E.stencil?or:Oi);const Se={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Se),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new pr(f.textureWidth,f.textureHeight,{format:Zn,type:Gi,depthTexture:new Ad(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Qe=e.properties.get(h);Qe.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(ee){for(let fe=0;fe<ee.removed.length;fe++){const we=ee.removed[fe],ze=M.indexOf(we);ze>=0&&(M[ze]=null,R[ze].disconnect(we))}for(let fe=0;fe<ee.added.length;fe++){const we=ee.added[fe];let ze=M.indexOf(we);if(ze===-1){for(let Qe=0;Qe<R.length;Qe++)if(Qe>=M.length){M.push(we),ze=Qe;break}else if(M[Qe]===null){M[Qe]=we,ze=Qe;break}if(ze===-1)break}const Se=R[ze];Se&&Se.connect(we)}}const J=new Q,oe=new Q;function ue(ee,fe,we){J.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(we.matrixWorld);const ze=J.distanceTo(oe),Se=fe.projectionMatrix.elements,Qe=we.projectionMatrix.elements,lt=Se[14]/(Se[10]-1),Ne=Se[14]/(Se[10]+1),ht=(Se[9]+1)/Se[5],Y=(Se[9]-1)/Se[5],Vt=(Se[8]-1)/Se[0],qe=(Qe[8]+1)/Qe[0],nt=lt*Vt,He=lt*qe,Lt=ze/(-Vt+qe),tt=Lt*-Vt;fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(tt),ee.translateZ(Lt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const A=lt+Lt,x=Ne+Lt,Z=nt-tt,pe=He+(ze-tt),he=ht*Ne/x*A,$=Y*Ne/x*A;ee.projectionMatrix.makePerspective(Z,pe,he,$,A,x),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function ae(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;T.near=C.near=O.near=ee.near,T.far=C.far=O.far=ee.far,(w!==T.near||te!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),w=T.near,te=T.far);const fe=ee.parent,we=T.cameras;ae(T,fe);for(let ze=0;ze<we.length;ze++)ae(we[ze],fe);we.length===2?ue(T,O,C):T.projectionMatrix.copy(O.projectionMatrix),se(ee,T,fe)};function se(ee,fe,we){we===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(we.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=$o*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ee)};let le=null;function ve(ee,fe){if(u=fe.getViewerPose(c||o),S=fe,u!==null){const we=u.views;_!==null&&(e.setRenderTargetFramebuffer(h,_.framebuffer),e.setRenderTarget(h));let ze=!1;we.length!==T.cameras.length&&(T.cameras.length=0,ze=!0);for(let Se=0;Se<we.length;Se++){const Qe=we[Se];let lt=null;if(_!==null)lt=_.getViewport(Qe);else{const ht=d.getViewSubImage(f,Qe);lt=ht.viewport,Se===0&&(e.setRenderTargetTextures(h,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(h))}let Ne=de[Se];Ne===void 0&&(Ne=new Gn,Ne.layers.enable(Se),Ne.viewport=new an,de[Se]=Ne),Ne.matrix.fromArray(Qe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Qe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(lt.x,lt.y,lt.width,lt.height),Se===0&&(T.matrix.copy(Ne.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ze===!0&&T.cameras.push(Ne)}}for(let we=0;we<R.length;we++){const ze=M[we],Se=R[we];ze!==null&&Se!==void 0&&Se.update(ze,fe,c||o)}le&&le(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),S=null}const Ee=new Md;Ee.setAnimationLoop(ve),this.setAnimationLoop=function(ee){le=ee},this.dispose=function(){}}}function oS(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Sd(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,R,M,L){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&_(p,h,L)):h.isMeshMatcapMaterial?(s(p,h),S(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),E(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,R,M):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===bn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===bn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const R=e.get(h).envMap;if(R&&(p.envMap.value=R,p.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*M,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,R,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*R,p.scale.value=M*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function _(p,h,R){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function S(p,h){h.matcap&&(p.matcap.value=h.matcap)}function E(p,h){const R=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lS(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(R,M){const L=M.program;i.uniformBlockBinding(R,L)}function c(R,M){let L=r[R.id];L===void 0&&(S(R),L=u(R),r[R.id]=L,R.addEventListener("dispose",p));const H=M.program;i.updateUBOMapping(R,H);const O=e.render.frame;s[R.id]!==O&&(f(R),s[R.id]=O)}function u(R){const M=d();R.__bindingPointIndex=M;const L=n.createBuffer(),H=R.__size,O=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,H,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,L),L}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const M=r[R.id],L=R.uniforms,H=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let O=0,C=L.length;O<C;O++){const de=Array.isArray(L[O])?L[O]:[L[O]];for(let T=0,w=de.length;T<w;T++){const te=de[T];if(_(te,O,T,H)===!0){const ne=te.__offset,ge=Array.isArray(te.value)?te.value:[te.value];let G=0;for(let J=0;J<ge.length;J++){const oe=ge[J],ue=E(oe);typeof oe=="number"||typeof oe=="boolean"?(te.__data[0]=oe,n.bufferSubData(n.UNIFORM_BUFFER,ne+G,te.__data)):oe.isMatrix3?(te.__data[0]=oe.elements[0],te.__data[1]=oe.elements[1],te.__data[2]=oe.elements[2],te.__data[3]=0,te.__data[4]=oe.elements[3],te.__data[5]=oe.elements[4],te.__data[6]=oe.elements[5],te.__data[7]=0,te.__data[8]=oe.elements[6],te.__data[9]=oe.elements[7],te.__data[10]=oe.elements[8],te.__data[11]=0):(oe.toArray(te.__data,G),G+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ne,te.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(R,M,L,H){const O=R.value,C=M+"_"+L;if(H[C]===void 0)return typeof O=="number"||typeof O=="boolean"?H[C]=O:H[C]=O.clone(),!0;{const de=H[C];if(typeof O=="number"||typeof O=="boolean"){if(de!==O)return H[C]=O,!0}else if(de.equals(O)===!1)return de.copy(O),!0}return!1}function S(R){const M=R.uniforms;let L=0;const H=16;for(let C=0,de=M.length;C<de;C++){const T=Array.isArray(M[C])?M[C]:[M[C]];for(let w=0,te=T.length;w<te;w++){const ne=T[w],ge=Array.isArray(ne.value)?ne.value:[ne.value];for(let G=0,J=ge.length;G<J;G++){const oe=ge[G],ue=E(oe),ae=L%H;ae!==0&&H-ae<ue.boundary&&(L+=H-ae),ne.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=L,L+=ue.storage}}}const O=L%H;return O>0&&(L+=H-O),R.__size=L,R.__cache={},this}function E(R){const M={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(M.boundary=4,M.storage=4):R.isVector2?(M.boundary=8,M.storage=8):R.isVector3||R.isColor?(M.boundary=16,M.storage=12):R.isVector4?(M.boundary=16,M.storage=16):R.isMatrix3?(M.boundary=48,M.storage=48):R.isMatrix4?(M.boundary=64,M.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),M}function p(R){const M=R.target;M.removeEventListener("dispose",p);const L=o.indexOf(M.__bindingPointIndex);o.splice(L,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Pd{constructor(e={}){const{canvas:t=i_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const _=new Uint32Array(4),S=new Int32Array(4);let E=null,p=null;const h=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this._useLegacyLights=!1,this.toneMapping=ki,this.toneMappingExposure=1;const M=this;let L=!1,H=0,O=0,C=null,de=-1,T=null;const w=new an,te=new an;let ne=null;const ge=new It(0);let G=0,J=t.width,oe=t.height,ue=1,ae=null,se=null;const le=new an(0,0,J,oe),ve=new an(0,0,J,oe);let Ee=!1;const ee=new pl;let fe=!1,we=!1,ze=null;const Se=new Qt,Qe=new Nt,lt=new Q,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return C===null?ue:1}let Y=i;function Vt(y,z){for(let X=0;X<y.length;X++){const K=y[X],j=t.getContext(K,z);if(j!==null)return j}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",Te,!1),Y===null){const z=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&z.shift(),Y=Vt(z,y),Y===null)throw Vt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let qe,nt,He,Lt,tt,A,x,Z,pe,he,$,Ue,m,g,b,N,I,F,W,V,q,ce,Me,Pe;function Ve(){qe=new v0(Y),nt=new f0(Y,qe,e),qe.init(nt),ce=new iS(Y,qe,nt),He=new tS(Y,qe,nt),Lt=new x0(Y),tt=new HE,A=new nS(Y,qe,He,tt,nt,ce,Lt),x=new p0(M),Z=new g0(M),pe=new L_(Y,nt),Me=new u0(Y,qe,pe,nt),he=new E0(Y,pe,Lt,Me),$=new A0(Y,he,pe,Lt),W=new T0(Y,nt,A),N=new h0(tt),Ue=new GE(M,x,Z,qe,nt,Me,N),m=new oS(M,tt),g=new VE,b=new jE(qe,nt),F=new c0(M,x,Z,He,$,f,l),I=new eS(M,$,nt),Pe=new lS(Y,Lt,nt,He),V=new d0(Y,qe,Lt,nt),q=new S0(Y,qe,Lt,nt),Lt.programs=Ue.programs,M.capabilities=nt,M.extensions=qe,M.properties=tt,M.renderLists=g,M.shadowMap=I,M.state=He,M.info=Lt}Ve();const We=new aS(M,Y);this.xr=We,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const y=qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(y){y!==void 0&&(ue=y,this.setSize(J,oe,!1))},this.getSize=function(y){return y.set(J,oe)},this.setSize=function(y,z,X=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,oe=z,t.width=Math.floor(y*ue),t.height=Math.floor(z*ue),X===!0&&(t.style.width=y+"px",t.style.height=z+"px"),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(J*ue,oe*ue).floor()},this.setDrawingBufferSize=function(y,z,X){J=y,oe=z,ue=X,t.width=Math.floor(y*X),t.height=Math.floor(z*X),this.setViewport(0,0,y,z)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(le)},this.setViewport=function(y,z,X,K){y.isVector4?le.set(y.x,y.y,y.z,y.w):le.set(y,z,X,K),He.viewport(w.copy(le).multiplyScalar(ue).floor())},this.getScissor=function(y){return y.copy(ve)},this.setScissor=function(y,z,X,K){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,z,X,K),He.scissor(te.copy(ve).multiplyScalar(ue).floor())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(y){He.setScissorTest(Ee=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){se=y},this.getClearColor=function(y){return y.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor.apply(F,arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha.apply(F,arguments)},this.clear=function(y=!0,z=!0,X=!0){let K=0;if(y){let j=!1;if(C!==null){const Ce=C.texture.format;j=Ce===ad||Ce===sd||Ce===rd}if(j){const Ce=C.texture.type,Oe=Ce===Gi||Ce===Oi||Ce===dl||Ce===or||Ce===nd||Ce===id,it=F.getClearColor(),ct=F.getClearAlpha(),gt=it.r,dt=it.g,pt=it.b;Oe?(_[0]=gt,_[1]=dt,_[2]=pt,_[3]=ct,Y.clearBufferuiv(Y.COLOR,0,_)):(S[0]=gt,S[1]=dt,S[2]=pt,S[3]=ct,Y.clearBufferiv(Y.COLOR,0,S))}else K|=Y.COLOR_BUFFER_BIT}z&&(K|=Y.DEPTH_BUFFER_BIT),X&&(K|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),g.dispose(),b.dispose(),tt.dispose(),x.dispose(),Z.dispose(),$.dispose(),Me.dispose(),Pe.dispose(),Ue.dispose(),We.dispose(),We.removeEventListener("sessionstart",Kt),We.removeEventListener("sessionend",U),ze&&(ze.dispose(),ze=null),re.stop()};function me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=Lt.autoReset,z=I.enabled,X=I.autoUpdate,K=I.needsUpdate,j=I.type;Ve(),Lt.autoReset=y,I.enabled=z,I.autoUpdate=X,I.needsUpdate=K,I.type=j}function Te(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Re(y){const z=y.target;z.removeEventListener("dispose",Re),et(z)}function et(y){$e(y),tt.remove(y)}function $e(y){const z=tt.get(y).programs;z!==void 0&&(z.forEach(function(X){Ue.releaseProgram(X)}),y.isShaderMaterial&&Ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,X,K,j,Ce){z===null&&(z=Ne);const Oe=j.isMesh&&j.matrixWorld.determinant()<0,it=Gt(y,z,X,K,j);He.setMaterial(K,Oe);let ct=X.index,gt=1;if(K.wireframe===!0){if(ct=he.getWireframeAttribute(X),ct===void 0)return;gt=2}const dt=X.drawRange,pt=X.attributes.position;let Ot=dt.start*gt,_n=(dt.start+dt.count)*gt;Ce!==null&&(Ot=Math.max(Ot,Ce.start*gt),_n=Math.min(_n,(Ce.start+Ce.count)*gt)),ct!==null?(Ot=Math.max(Ot,0),_n=Math.min(_n,ct.count)):pt!=null&&(Ot=Math.max(Ot,0),_n=Math.min(_n,pt.count));const Yt=_n-Ot;if(Yt<0||Yt===1/0)return;Me.setup(j,K,it,X,ct);let $t,Ft=V;if(ct!==null&&($t=pe.get(ct),Ft=q,Ft.setIndex($t)),j.isMesh)K.wireframe===!0?(He.setLineWidth(K.wireframeLinewidth*ht()),Ft.setMode(Y.LINES)):Ft.setMode(Y.TRIANGLES);else if(j.isLine){let Et=K.linewidth;Et===void 0&&(Et=1),He.setLineWidth(Et*ht()),j.isLineSegments?Ft.setMode(Y.LINES):j.isLineLoop?Ft.setMode(Y.LINE_LOOP):Ft.setMode(Y.LINE_STRIP)}else j.isPoints?Ft.setMode(Y.POINTS):j.isSprite&&Ft.setMode(Y.TRIANGLES);if(j.isBatchedMesh)Ft.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Ft.renderInstances(Ot,Yt,j.count);else if(X.isInstancedBufferGeometry){const Et=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,rs=Math.min(X.instanceCount,Et);Ft.renderInstances(Ot,Yt,rs)}else Ft.render(Ot,Yt)};function Rt(y,z,X){y.transparent===!0&&y.side===xi&&y.forceSinglePass===!1?(y.side=bn,y.needsUpdate=!0,mt(y,z,X),y.side=qi,y.needsUpdate=!0,mt(y,z,X),y.side=xi):mt(y,z,X)}this.compile=function(y,z,X=null){X===null&&(X=y),p=b.get(X),p.init(),R.push(p),X.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),y!==X&&y.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(M._useLegacyLights);const K=new Set;return y.traverse(function(j){const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){const it=Ce[Oe];Rt(it,X,j),K.add(it)}else Rt(Ce,X,j),K.add(Ce)}),R.pop(),p=null,K},this.compileAsync=function(y,z,X=null){const K=this.compile(y,z,X);return new Promise(j=>{function Ce(){if(K.forEach(function(Oe){tt.get(Oe).currentProgram.isReady()&&K.delete(Oe)}),K.size===0){j(y);return}setTimeout(Ce,10)}qe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let At=null;function Ut(y){At&&At(y)}function Kt(){re.stop()}function U(){re.start()}const re=new Md;re.setAnimationLoop(Ut),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(y){At=y,We.setAnimationLoop(y),y===null?re.stop():re.start()},We.addEventListener("sessionstart",Kt),We.addEventListener("sessionend",U),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(z),z=We.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,z,C),p=b.get(y,R.length),p.init(),R.push(p),Se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee.setFromProjectionMatrix(Se),we=this.localClippingEnabled,fe=N.init(this.clippingPlanes,we),E=g.get(y,h.length),E.init(),h.push(E),xe(y,z,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(ae,se),this.info.render.frame++,fe===!0&&N.beginShadows();const X=p.state.shadowsArray;if(I.render(X,y,z),fe===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),F.render(E,y),p.setupLights(M._useLegacyLights),z.isArrayCamera){const K=z.cameras;for(let j=0,Ce=K.length;j<Ce;j++){const Oe=K[j];at(E,y,Oe,Oe.viewport)}}else at(E,y,z);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(M,y,z),Me.resetDefaultState(),de=-1,T=null,R.pop(),R.length>0?p=R[R.length-1]:p=null,h.pop(),h.length>0?E=h[h.length-1]:E=null};function xe(y,z,X,K){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ee.intersectsSprite(y)){K&&lt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Se);const Oe=$.update(y),it=y.material;it.visible&&E.push(y,Oe,it,X,lt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ee.intersectsObject(y))){const Oe=$.update(y),it=y.material;if(K&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),lt.copy(y.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),lt.copy(Oe.boundingSphere.center)),lt.applyMatrix4(y.matrixWorld).applyMatrix4(Se)),Array.isArray(it)){const ct=Oe.groups;for(let gt=0,dt=ct.length;gt<dt;gt++){const pt=ct[gt],Ot=it[pt.materialIndex];Ot&&Ot.visible&&E.push(y,Oe,Ot,X,lt.z,pt)}}else it.visible&&E.push(y,Oe,it,X,lt.z,null)}}const Ce=y.children;for(let Oe=0,it=Ce.length;Oe<it;Oe++)xe(Ce[Oe],z,X,K)}function at(y,z,X,K){const j=y.opaque,Ce=y.transmissive,Oe=y.transparent;p.setupLightsView(X),fe===!0&&N.setGlobalState(M.clippingPlanes,X),Ce.length>0&&Je(j,Ce,z,X),K&&He.viewport(w.copy(K)),j.length>0&&Le(j,z,X),Ce.length>0&&Le(Ce,z,X),Oe.length>0&&Le(Oe,z,X),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Je(y,z,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Ce=nt.isWebGL2;ze===null&&(ze=new pr(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")?Os:Gi,minFilter:Us,samples:Ce?4:0})),M.getDrawingBufferSize(Qe),Ce?ze.setSize(Qe.x,Qe.y):ze.setSize(Jo(Qe.x),Jo(Qe.y));const Oe=M.getRenderTarget();M.setRenderTarget(ze),M.getClearColor(ge),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear();const it=M.toneMapping;M.toneMapping=ki,Le(y,X,K),A.updateMultisampleRenderTarget(ze),A.updateRenderTargetMipmap(ze);let ct=!1;for(let gt=0,dt=z.length;gt<dt;gt++){const pt=z[gt],Ot=pt.object,_n=pt.geometry,Yt=pt.material,$t=pt.group;if(Yt.side===xi&&Ot.layers.test(K.layers)){const Ft=Yt.side;Yt.side=bn,Yt.needsUpdate=!0,ke(Ot,X,K,_n,Yt,$t),Yt.side=Ft,Yt.needsUpdate=!0,ct=!0}}ct===!0&&(A.updateMultisampleRenderTarget(ze),A.updateRenderTargetMipmap(ze)),M.setRenderTarget(Oe),M.setClearColor(ge,G),M.toneMapping=it}function Le(y,z,X){const K=z.isScene===!0?z.overrideMaterial:null;for(let j=0,Ce=y.length;j<Ce;j++){const Oe=y[j],it=Oe.object,ct=Oe.geometry,gt=K===null?Oe.material:K,dt=Oe.group;it.layers.test(X.layers)&&ke(it,z,X,ct,gt,dt)}}function ke(y,z,X,K,j,Ce){y.onBeforeRender(M,z,X,K,j,Ce),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),j.onBeforeRender(M,z,X,K,y,Ce),j.transparent===!0&&j.side===xi&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,M.renderBufferDirect(X,z,K,j,y,Ce),j.side=qi,j.needsUpdate=!0,M.renderBufferDirect(X,z,K,j,y,Ce),j.side=xi):M.renderBufferDirect(X,z,K,j,y,Ce),y.onAfterRender(M,z,X,K,j,Ce)}function mt(y,z,X){z.isScene!==!0&&(z=Ne);const K=tt.get(y),j=p.state.lights,Ce=p.state.shadowsArray,Oe=j.state.version,it=Ue.getParameters(y,j.state,Ce,z,X),ct=Ue.getProgramCacheKey(it);let gt=K.programs;K.environment=y.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(y.isMeshStandardMaterial?Z:x).get(y.envMap||K.environment),gt===void 0&&(y.addEventListener("dispose",Re),gt=new Map,K.programs=gt);let dt=gt.get(ct);if(dt!==void 0){if(K.currentProgram===dt&&K.lightsStateVersion===Oe)return vt(y,it),dt}else it.uniforms=Ue.getUniforms(y),y.onBuild(X,it,M),y.onBeforeCompile(it,M),dt=Ue.acquireProgram(it,ct),gt.set(ct,dt),K.uniforms=it.uniforms;const pt=K.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(pt.clippingPlanes=N.uniform),vt(y,it),K.needsLights=Tt(y),K.lightsStateVersion=Oe,K.needsLights&&(pt.ambientLightColor.value=j.state.ambient,pt.lightProbe.value=j.state.probe,pt.directionalLights.value=j.state.directional,pt.directionalLightShadows.value=j.state.directionalShadow,pt.spotLights.value=j.state.spot,pt.spotLightShadows.value=j.state.spotShadow,pt.rectAreaLights.value=j.state.rectArea,pt.ltc_1.value=j.state.rectAreaLTC1,pt.ltc_2.value=j.state.rectAreaLTC2,pt.pointLights.value=j.state.point,pt.pointLightShadows.value=j.state.pointShadow,pt.hemisphereLights.value=j.state.hemi,pt.directionalShadowMap.value=j.state.directionalShadowMap,pt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,pt.spotShadowMap.value=j.state.spotShadowMap,pt.spotLightMatrix.value=j.state.spotLightMatrix,pt.spotLightMap.value=j.state.spotLightMap,pt.pointShadowMap.value=j.state.pointShadowMap,pt.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=dt,K.uniformsList=null,dt}function Be(y){if(y.uniformsList===null){const z=y.currentProgram.getUniforms();y.uniformsList=Ta.seqWithValue(z.seq,y.uniforms)}return y.uniformsList}function vt(y,z){const X=tt.get(y);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Gt(y,z,X,K,j){z.isScene!==!0&&(z=Ne),A.resetTextureUnits();const Ce=z.fog,Oe=K.isMeshStandardMaterial?z.environment:null,it=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ai,ct=(K.isMeshStandardMaterial?Z:x).get(K.envMap||Oe),gt=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,dt=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),pt=!!X.morphAttributes.position,Ot=!!X.morphAttributes.normal,_n=!!X.morphAttributes.color;let Yt=ki;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Yt=M.toneMapping);const $t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ft=$t!==void 0?$t.length:0,Et=tt.get(K),rs=p.state.lights;if(fe===!0&&(we===!0||y!==T)){const xn=y===T&&K.id===de;N.setState(K,y,xn)}let Ht=!1;K.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==rs.state.version||Et.outputColorSpace!==it||j.isBatchedMesh&&Et.batching===!1||!j.isBatchedMesh&&Et.batching===!0||j.isInstancedMesh&&Et.instancing===!1||!j.isInstancedMesh&&Et.instancing===!0||j.isSkinnedMesh&&Et.skinning===!1||!j.isSkinnedMesh&&Et.skinning===!0||j.isInstancedMesh&&Et.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Et.instancingColor===!1&&j.instanceColor!==null||Et.envMap!==ct||K.fog===!0&&Et.fog!==Ce||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==N.numPlanes||Et.numIntersection!==N.numIntersection)||Et.vertexAlphas!==gt||Et.vertexTangents!==dt||Et.morphTargets!==pt||Et.morphNormals!==Ot||Et.morphColors!==_n||Et.toneMapping!==Yt||nt.isWebGL2===!0&&Et.morphTargetsCount!==Ft)&&(Ht=!0):(Ht=!0,Et.__version=K.version);let li=Et.currentProgram;Ht===!0&&(li=mt(K,z,j));let Vs=!1,Jn=!1,ss=!1;const nn=li.getUniforms(),ci=Et.uniforms;if(He.useProgram(li.program)&&(Vs=!0,Jn=!0,ss=!0),K.id!==de&&(de=K.id,Jn=!0),Vs||T!==y){nn.setValue(Y,"projectionMatrix",y.projectionMatrix),nn.setValue(Y,"viewMatrix",y.matrixWorldInverse);const xn=nn.map.cameraPosition;xn!==void 0&&xn.setValue(Y,lt.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&nn.setValue(Y,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&nn.setValue(Y,"isOrthographic",y.isOrthographicCamera===!0),T!==y&&(T=y,Jn=!0,ss=!0)}if(j.isSkinnedMesh){nn.setOptional(Y,j,"bindMatrix"),nn.setOptional(Y,j,"bindMatrixInverse");const xn=j.skeleton;xn&&(nt.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),nn.setValue(Y,"boneTexture",xn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(nn.setOptional(Y,j,"batchingTexture"),nn.setValue(Y,"batchingTexture",j._matricesTexture,A));const gr=X.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0&&nt.isWebGL2===!0)&&W.update(j,X,li),(Jn||Et.receiveShadow!==j.receiveShadow)&&(Et.receiveShadow=j.receiveShadow,nn.setValue(Y,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ci.envMap.value=ct,ci.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),Jn&&(nn.setValue(Y,"toneMappingExposure",M.toneMappingExposure),Et.needsLights&&je(ci,ss),Ce&&K.fog===!0&&m.refreshFogUniforms(ci,Ce),m.refreshMaterialUniforms(ci,K,ue,oe,ze),Ta.upload(Y,Be(Et),ci,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ta.upload(Y,Be(Et),ci,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&nn.setValue(Y,"center",j.center),nn.setValue(Y,"modelViewMatrix",j.modelViewMatrix),nn.setValue(Y,"normalMatrix",j.normalMatrix),nn.setValue(Y,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const xn=K.uniformsGroups;for(let as=0,os=xn.length;as<os;as++)if(nt.isWebGL2){const Ws=xn[as];Pe.update(Ws,li),Pe.bind(Ws,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function je(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function Tt(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,z,X){tt.get(y.texture).__webglTexture=z,tt.get(y.depthTexture).__webglTexture=X;const K=tt.get(y);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,z){const X=tt.get(y);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(y,z=0,X=0){C=y,H=z,O=X;let K=!0,j=null,Ce=!1,Oe=!1;if(y){const ct=tt.get(y);ct.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(Y.FRAMEBUFFER,null),K=!1):ct.__webglFramebuffer===void 0?A.setupRenderTarget(y):ct.__hasExternalTextures&&A.rebindTextures(y,tt.get(y.texture).__webglTexture,tt.get(y.depthTexture).__webglTexture);const gt=y.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(Oe=!0);const dt=tt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(dt[z])?j=dt[z][X]:j=dt[z],Ce=!0):nt.isWebGL2&&y.samples>0&&A.useMultisampledRTT(y)===!1?j=tt.get(y).__webglMultisampledFramebuffer:Array.isArray(dt)?j=dt[X]:j=dt,w.copy(y.viewport),te.copy(y.scissor),ne=y.scissorTest}else w.copy(le).multiplyScalar(ue).floor(),te.copy(ve).multiplyScalar(ue).floor(),ne=Ee;if(He.bindFramebuffer(Y.FRAMEBUFFER,j)&&nt.drawBuffers&&K&&He.drawBuffers(y,j),He.viewport(w),He.scissor(te),He.setScissorTest(ne),Ce){const ct=tt.get(y.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+z,ct.__webglTexture,X)}else if(Oe){const ct=tt.get(y.texture),gt=z||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ct.__webglTexture,X||0,gt)}de=-1},this.readRenderTargetPixels=function(y,z,X,K,j,Ce,Oe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Oe!==void 0&&(it=it[Oe]),it){He.bindFramebuffer(Y.FRAMEBUFFER,it);try{const ct=y.texture,gt=ct.format,dt=ct.type;if(gt!==Zn&&ce.convert(gt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pt=dt===Os&&(qe.has("EXT_color_buffer_half_float")||nt.isWebGL2&&qe.has("EXT_color_buffer_float"));if(dt!==Gi&&ce.convert(dt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(dt===Fi&&(nt.isWebGL2||qe.has("OES_texture_float")||qe.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-K&&X>=0&&X<=y.height-j&&Y.readPixels(z,X,K,j,ce.convert(gt),ce.convert(dt),Ce)}finally{const ct=C!==null?tt.get(C).__webglFramebuffer:null;He.bindFramebuffer(Y.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(y,z,X=0){const K=Math.pow(2,-X),j=Math.floor(z.image.width*K),Ce=Math.floor(z.image.height*K);A.setTexture2D(z,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,X,0,0,y.x,y.y,j,Ce),He.unbindTexture()},this.copyTextureToTexture=function(y,z,X,K=0){const j=z.image.width,Ce=z.image.height,Oe=ce.convert(X.format),it=ce.convert(X.type);A.setTexture2D(X,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,X.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,K,y.x,y.y,j,Ce,Oe,it,z.image.data):z.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,K,y.x,y.y,z.mipmaps[0].width,z.mipmaps[0].height,Oe,z.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,K,y.x,y.y,Oe,it,z.image),K===0&&X.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(y,z,X,K,j=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=y.max.x-y.min.x+1,Oe=y.max.y-y.min.y+1,it=y.max.z-y.min.z+1,ct=ce.convert(K.format),gt=ce.convert(K.type);let dt;if(K.isData3DTexture)A.setTexture3D(K,0),dt=Y.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),dt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);const pt=Y.getParameter(Y.UNPACK_ROW_LENGTH),Ot=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),_n=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Yt=Y.getParameter(Y.UNPACK_SKIP_ROWS),$t=Y.getParameter(Y.UNPACK_SKIP_IMAGES),Ft=X.isCompressedTexture?X.mipmaps[j]:X.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ft.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ft.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,y.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,y.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,y.min.z),X.isDataTexture||X.isData3DTexture?Y.texSubImage3D(dt,j,z.x,z.y,z.z,Ce,Oe,it,ct,gt,Ft.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(dt,j,z.x,z.y,z.z,Ce,Oe,it,ct,Ft.data)):Y.texSubImage3D(dt,j,z.x,z.y,z.z,Ce,Oe,it,ct,gt,Ft),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,pt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ot),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,_n),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Yt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,$t),j===0&&K.generateMipmaps&&Y.generateMipmap(dt),He.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),He.unbindTexture()},this.resetState=function(){H=0,O=0,C=null,He.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fl?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===Wa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ln?cr:ld}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cr?ln:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cS extends Pd{}cS.prototype.isWebGL1Renderer=!0;class uS extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Or extends zs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nd extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new It(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Uo=new Qt,ou=new Q,lu=new Q;class dS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fS extends dS{constructor(){super(new Td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hS extends Nd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new fS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pS extends Nd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);const mS="1476678928256073728";function cu(n){return new Promise((e,t)=>{if(typeof io<"u")return e();const i=document.createElement("script");i.src=n,i.onload=()=>e(),i.onerror=()=>t(new Error("Failed to load "+n)),document.head.appendChild(i)})}async function _S(){try{await cu("https://cdn.socket.io/4.5.4/socket.io.min.js")}catch{await cu("./cdn")}}async function gS(){try{await new Jp(mS).ready(),window.focus(),document.body.focus()}catch(n){console.warn("Discord SDK not ready (run in Discord Activity for full integration)",n)}vS()}function vS(){const n=[16716947,2003199,3329330,16753920,10040012,14423100,2142890,16766720,16738740,52945,9127187,8421504],e=[16711757,16753408,8615580,16772135,16711757,16772135,2731519,58422,16742312,11227702],t={classic:{label:"Classic",cost:0},rainbow:{label:"Rainbow",cost:100,type:"rainbow"},phantom:{label:"Phantom",cost:100,head:10445823,body:2756421},candy:{label:"Candy",cost:150,head:16744135,body:15219597},lava:{label:"Lava",cost:250,head:16733466,body:9056e3},solar:{label:"Solar",cost:250,head:16767338,body:16742912},neon:{label:"Neon",cost:300,type:"neon"}},i=Object.keys(t),r=20,s=4,o=r*s/2-s/2;function a(){return parseInt(localStorage.getItem("snake_coins")||"0",10)}function l(U){localStorage.setItem("snake_coins",String(U))}function c(U){l(a()+U)}function u(U){return t[U]&&t[U].label||(U?U[0].toUpperCase()+U.slice(1):"Classic")}function d(){try{return JSON.parse(localStorage.getItem("owned_skins")||'["classic"]')}catch{return["classic"]}}function f(U){localStorage.setItem("owned_skins",JSON.stringify(U))}function _(U){return d().includes(U)}function S(){const U=localStorage.getItem("selected_skin")||"classic";return _(U)&&t[U]?U:"classic"}function E(U){localStorage.setItem("selected_skin",U)}function p(U,re){if(a()<re)return!1;l(a()-re);const xe=d();return xe.includes(U)||f([...xe,U]),!0}const h=typeof io<"u"?io({path:"/socket.io"}):{on:()=>{},emit:()=>{}};let R=null,M,L,H,O={},C=[],de=!1,T=!1,w=0,te=[],ne=[],ge=0,G=S(),J=!1,oe=!1,ue=null,ae=G,se=i.indexOf(ae);se<0&&(se=0,ae=i[0]);const le=16,ve=10,Ee=12,ee=140,fe=.075,we=.45,ze=110,Se=.12,Qe=(()=>{const U=[];for(let re=1;re<r-1;re++)U.push([re,1]);for(let re=1;re<r-1;re++)U.push([r-2,re]);for(let re=r-2;re>0;re--)U.push([re,r-2]);for(let re=r-2;re>0;re--)U.push([1,re]);return U})(),lt=document.getElementById("score"),Ne=document.getElementById("status-text"),ht=document.getElementById("main-menu"),Y=document.getElementById("ui"),Vt=document.querySelectorAll(".start-game-button"),qe=document.getElementById("skins-panel"),nt=document.getElementById("skin-title"),He=document.getElementById("skin-indicators");let Lt,tt;function A(){Ne.classList.remove("cinematic-title"),Ne.style.fontSize="",Ne.style.color="",Ne.style.opacity="",Ne.style.transform="",Ne.style.textShadow="",Ne.innerHTML=""}h.on("connect",()=>{R=h.id}),h.on("state",U=>{!U||!U.snakes||!Array.isArray(U.fruits)||q(U)});function x(){const U=document.getElementById("game-container");M=new uS,M.background=new It(0),L=new Gn(45,1,.1,2e3),L.position.set(0,90,70),L.lookAt(0,-10,0),H=new Pd({antialias:!1,powerPreference:"high-performance"}),H.setSize(512,512,!1),H.domElement.style.width="100%",H.domElement.style.height="100%",U.style.width="100%",U.style.height="100%",H.shadowMap.enabled=!0,U.appendChild(H.domElement),Lt=new pS(16777215,.32),M.add(Lt),tt=new hS(16777215,.8),tt.position.set(20,50,20),tt.castShadow=!0,M.add(tt),V(),H.setAnimationLoop(Kt)}function Z(){i.forEach(U=>{const re=document.getElementById("skin-preview-"+U);re&&$e(re,U)}),m(),pe()}function pe(){He&&(He.innerHTML="",i.forEach((U,re)=>{const xe=document.createElement("span");xe.className="skin-indicator"+(U===ae?" active":""),xe.setAttribute("data-skin-index",String(re)),xe.setAttribute("aria-label",u(U)),xe.addEventListener("click",()=>Ve(re)),He.appendChild(xe)}))}function he(U){nt&&(nt.textContent=u(U))}function $(U,re){const xe=Math.floor((U>>>16&255)*re),at=Math.floor((U>>>8&255)*re),Je=Math.floor((U&255)*re);return xe<<16|at<<8|Je}function Ue(U,re,xe){if(U==="classic"){const Je=n[xe%n.length];return re===0?Je:$(Je,.7)}if(U==="rainbow")return n[re%n.length];if(U==="neon")return re===0?60671:re%2===0?9183231:1499391;const at=t[U];if(!at){const Je=n[xe%n.length];return re===0?Je:$(Je,.7)}return re===0?at.head:at.body?$(at.body,.75):$(at.head,.75)}function m(){document.querySelectorAll(".skin-view-section").forEach(U=>{const re=U.dataset.skin;if(!re)return;const xe=U.querySelector(".shop-skin-action"),at=U.querySelector(".shop-section-desc");if(xe){const Je=_(re);U.classList.toggle("locked",!Je);const Le=parseInt(xe.dataset.shopCost||"0",10);xe.disabled=!Je&&Le>0&&a()<Le,Je&&Le===0&&(xe.textContent=G===re?"EQUIPPED":"EQUIP")}if(at){const Je=parseInt(U.dataset.cost||"0",10);!_(re)&&Je>0?at.textContent=a()>=Je?`${Je} COINS`:`${Je} COINS (Locked)`:(_(re)||Je===0)&&(at.textContent="OWNED")}})}function g(U){const re=Qe.length,xe=(U%re+re)%re,at=Math.floor(xe),Je=xe-at,Le=Qe[at],ke=Qe[(at+1)%re],mt=(Le[0]+(ke[0]-Le[0])*Je)*s-o,Be=(Le[1]+(ke[1]-Le[1])*Je)*s-o;return[mt,Be]}function b(){T=!1,te.forEach(U=>M.remove(U)),te=[],ne.forEach(U=>M.remove(U.mesh)),ne=[],M.fog=null,A()}function N(U){ge+=.02,Lt&&(Lt.intensity=.2+Math.sin(ge)*.08),tt&&(tt.intensity=.75+Math.sin(ge*1.3)*.2),w=(w+fe)%Qe.length;const[re,xe]=g(w),[at,Je]=g(w+.9),Le=at-re,ke=Je-xe,mt=Math.hypot(Le,ke)||1,Be=Le/mt,vt=ke/mt,Gt=.4+(Math.sin(ge*2)+1)*.5;L.position.set(re-Be*(72+Gt*4)+Math.sin(ge*1.4)*6,54+Math.sin(ge*.7)*9+Math.sin(U*9e-4)*4,xe-vt*(72+Gt*4)+Math.cos(ge*1.6)*6),L.lookAt(re,-4,xe);for(let je=0;je<te.length;je++){const[Tt,y]=g(w-je*.9),z=te[je];z.position.set(Tt,0,y),z.rotation.x=Math.sin((U+je*120)*.002)*.1,z.rotation.y=Math.cos((U+je*90)*.002)*.08,je===0&&(z.rotation.z=Math.sin(ge)*.06);const X=Ue(G,je,0);z.material.color.setHex(X)}for(const je of ne){if(!je.alive){if(je.cooldown-=1,je.cooldown<=0)je.alive=!0,je.step=Math.floor(Math.random()*Qe.length),je.mesh.position.y=Se,je.mesh.visible=!0,je.mesh.scale.setScalar(1),je.mesh.rotation.set(0,0,0);else{const Ce=1-je.cooldown/ze,Oe=Math.max(.05,1-Ce);je.mesh.scale.setScalar(Oe),je.mesh.rotation.z+=.4,je.mesh.position.y=Se+Ce*.6}continue}const[Tt,y]=g(je.step+je.offset),[z,X]=g(w-.1);je.mesh.position.set(Tt,Se,y),je.mesh.rotation.y+=.025,je.mesh.rotation.z=Math.sin(U*.0015+je.step)*.06;const K=1+Math.sin(U*.006+je.step)*.06;if(je.mesh.scale.setScalar(K),Math.hypot(Tt-z,y-X)<we*s*.9){je.alive=!1,je.cooldown=ze,je.mesh.rotation.x+=.8;continue}}}let I=[],F=[],W=null;function V(){const U=new ti(s,1,s),re=new Or({color:1118481}),xe=new Or({color:2236962});for(let Be=0;Be<r;Be++)for(let vt=0;vt<r;vt++){const Gt=(Be+vt)%2===0?re:xe,je=new Cn(U,Gt.clone());je.position.set(Be*s-o,-2.5,vt*s-o),je.receiveShadow=!0,M.add(je),I.push({mesh:je,isDark:(Be+vt)%2===0})}const at=4,Je=2,Le=new ti(r*s+Je*2,at,Je),ke=new Or({color:58422,emissive:17408});[[0,0,-r*s/2-Je/2,0,0,0],[0,0,r*s/2+Je/2,0,0,0],[-r*s/2-Je/2,0,0,0,Math.PI/2,0],[r*s/2+Je/2,0,0,0,Math.PI/2,0]].forEach(Be=>{const vt=new Cn(Le,ke);vt.position.set(Be[0],Be[1],Be[2]),vt.rotation.set(Be[3],Be[4],Be[5]),vt.castShadow=!0,vt.receiveShadow=!0,M.add(vt),F.push(vt)})}function q(U){var at,Je;for(const Le in U.snakes){const ke=U.snakes[Le],mt=Le===R,Be=n[ke.color%n.length],vt=(Be>>16&255)*.7<<16|(Be>>8&255)*.7<<8|(Be&255)*.7;O[Le]||(O[Le]=[]);const Gt=O[Le];for(;Gt.length<ke.body.length;){const je=new ti(s-.2,s-.2,s-.2),Tt=new Or({color:Be}),y=new Cn(je,Tt);y.castShadow=!0,y.receiveShadow=!0,M.add(y),Gt.push(y)}for(;Gt.length>ke.body.length;)M.remove(Gt.pop());for(let je=0;je<ke.body.length;je++){const Tt=ke.body[je],y=Gt[je],z=mt?Ue(G,je,ke.color%n.length):je===0?Be:vt;y.material.color.setHex(z),y.position.set(Tt[0]*s-o,0,Tt[1]*s-o),ke.alive?(y.rotation.set(0,0,0),y.scale.set(1,1,1)):(y.rotation.x+=.1,y.rotation.y+=.1,y.scale.multiplyScalar(.95))}}for(const Le in O)U.snakes[Le]||(O[Le].forEach(ke=>M.remove(ke)),delete O[Le]);for(;C.length<U.fruits.length;){const Le=s-.5,ke=new _s,mt=new ti(Le,Le,Le),Be=new Or({color:16711680,flatShading:!0}),vt=new Cn(mt,Be);vt.castShadow=!0;const Gt=new Cn(new ti(Le*.25,Le*.35,Le*.25),new Or({color:2969622,flatShading:!0}));Gt.position.y=Le/2+Le*.35/2,vt.add(Gt),ke.add(vt),M.add(ke),C.push(ke)}for(;C.length>U.fruits.length;)M.remove(C.pop());for(let Le=0;Le<U.fruits.length;Le++){const ke=U.fruits[Le],mt=C[Le];mt.position.set(ke[0]*s-o,0,ke[1]*s-o);const Be=((Je=(at=U.levelSync)==null?void 0:at.current)==null?void 0:Je.fruits)||e;mt.children[0].material.color.setHex(Be[ke[2]%Be.length])}if(R&&U.snakes[R]){const Le=U.snakes[R];lt.textContent="SCORE: "+Le.score,Le.score,Le.alive?Ne.style.display="none":(oe||(oe=!0,c(Math.max(10,Le.score*10))),U.levelSync&&U.levelSync.state==="VOTE"?Ne.innerHTML="VOTING IN PROGRESS...":U.levelSync&&U.levelSync.state==="HARD"?Ne.innerHTML='SURVIVE IF YOU CAN!<br><span style="font-size: 14px; opacity: 0.8;">SPAWNING DISABLED</span>':U.levelSync&&U.levelSync.state==="WAITING"?Ne.innerHTML='Waiting for players to drop in!<br><span style="font-size: 14px; opacity: 0.8;">VOTING BEGINS IN '+U.levelSync.timer+"s</span>":Ne.innerHTML="GAME OVER<br>PRESS SPACE TO RESTART",Ne.style.display="block")}const re=Object.entries(U.snakes).sort((Le,ke)=>ke[1].score-Le[1].score);let xe="";re.forEach(([Le,ke])=>{const Be="#"+n[ke.color%n.length].toString(16).padStart(6,"0");xe+=`<div style="color: ${Be}">${Le===R?"YOU":"PLYR"}: ${ke.score}</div>`}),document.getElementById("scoreboard").innerHTML=xe,U.levelSync&&(ce(U.levelSync.current),Pe(U.levelSync))}function ce(U){W!==U.id&&(W=U.id,I.forEach(re=>{re.mesh.material.color.setHex(re.isDark?U.base1:U.base2)}),F.forEach(re=>{re.material.color.setHex(U.wall),re.material.emissive.setHex(U.base1)}))}let Me=null;function Pe(U){const re=document.getElementById("vote-timer"),xe=document.getElementById("vote-options"),at=document.getElementById("in-game-vote");if(!re||!xe)return;at&&de&&U.state==="VOTE"?at.style.display="block":at&&(at.style.display="none",Me=null),re.textContent=`VOTING ENDS IN: ${U.timer}s (${U.current.name} Active)`;const Je=U.options.map(Le=>Le.id).join("-");if(xe.dataset.optionsId!==Je){xe.dataset.optionsId=Je;let Le="";U.options.forEach(ke=>{Le+=`
          <div class="vote-option" data-id="${ke.id}" style="
            background: #1a1a1a;
            border: 1px solid ${ke.diff==="EASY"?"#66cc00":ke.diff==="MEDIUM"?"#cc9900":"#ff3300"};
            padding: 8px; border-radius: 4px; cursor: pointer; color: white; display: flex; justify-content: space-between; align-items: center; pointer-events: auto;
          ">
            <div>
              <div style="font-weight: bold; font-size: 0.9rem">${ke.name}</div>
              <div style="color: #aaa; font-size: 0.75rem">${ke.diff} / Spd: ${ke.speed}</div>
            </div>
            <div class="vote-count-text" style="font-size: 1rem; font-weight: bold;">0</div>
          </div>
        `}),xe.innerHTML=Le,xe.querySelectorAll(".vote-option").forEach(ke=>{ke.addEventListener("click",()=>{Me=ke.dataset.id,h.emit("vote",Me)})})}U.options.forEach(Le=>{const ke=U.counts[Le.id]||0,mt=Me===Le.id,Be=xe.querySelector(`[data-id="${Le.id}"]`);if(Be){Be.style.background=mt?"#444":"#1a1a1a",Be.style.borderColor=mt?"#00e436":Le.diff==="EASY"?"#66cc00":Le.diff==="MEDIUM"?"#cc9900":"#ff3300";const vt=Be.querySelector(".vote-count-text");vt&&(vt.textContent=ke,vt.style.color=mt?"#00e436":"#fff")}})}document.querySelectorAll(".menu-tab").forEach(U=>{U.addEventListener("click",()=>{const re=U.dataset.tab;document.querySelectorAll(".menu-tab").forEach(xe=>xe.classList.remove("active")),document.querySelectorAll(".menu-panel").forEach(xe=>xe.classList.remove("active")),U.classList.add("active"),document.getElementById(re+"-panel").classList.add("active"),re==="skins"&&!J&&(Z(),J=!0),re==="skins"?(We(ae),pe(),Re(ae)):re==="coins"&&(document.getElementById("coins-display").textContent="COINS: "+a()),re!=="skins"&&Te()})});function Ve(U){se=(U+i.length)%i.length,ae=i[se],We(ae)}function We(U){ae=U,se=i.indexOf(U),se<0&&(se=0),document.querySelectorAll(".skin-view-section").forEach(xe=>xe.classList.remove("active"));const re=document.querySelector('.skin-view-section[data-skin-view="'+U+'"]');re&&re.classList.add("active"),document.querySelectorAll(".skin-indicator").forEach(xe=>{xe.classList.toggle("active",xe.dataset.skinIndex===String(se))}),he(ae),Te(),Re(ae),At(),m()}const me=document.getElementById("skin-prev"),D=document.getElementById("skin-next");me&&me.addEventListener("click",()=>Ve(se-1)),D&&D.addEventListener("click",()=>Ve(se+1)),document.querySelectorAll(".skin-view-section").forEach(U=>{const re=U.dataset.skin;re&&U.addEventListener("click",xe=>{xe.target.closest(".shop-skin-action")||We(re)})});function Te(){ue&&(cancelAnimationFrame(ue),ue=null)}function Re(U){if(Te(),!U)return;const re=document.getElementById("skins-panel");!re||!re.classList.contains("active")||et("skin-preview-"+U,U)}function et(U,re){const xe=document.getElementById(U);if(!xe)return;const at=xe.getContext("2d"),Je=le,Le=ve,ke=Ee,mt=[];for(let Tt=2;Tt<Je-2;Tt++)mt.push([Tt,2]);for(let Tt=2;Tt<Le-2;Tt++)mt.push([Je-3,Tt]);for(let Tt=Je-3;Tt>=2;Tt--)mt.push([Tt,Le-3]);for(let Tt=Le-3;Tt>=2;Tt--)mt.push([2,Tt]);const Be=Math.min(10,mt.length-1);let vt=0,Gt=0;function je(Tt){const y=document.getElementById("skins-panel"),z=document.querySelector(".skin-view-section.active");if(!(!y||!y.classList.contains("active")||!z||z.dataset.skinView!==re)){Gt===0&&(Gt=Tt),Tt-Gt>=ee&&(vt=(vt+1)%mt.length,Gt=Tt),at.fillStyle="#0d0d0d",at.fillRect(0,0,xe.width,xe.height);for(let X=0;X<Je;X++)for(let K=0;K<Le;K++)at.fillStyle=(X+K)%2===0?"#111":"#1a1a1a",at.fillRect(X*ke,K*ke,ke,ke);for(let X=0;X<Be;X++){const K=(vt-X+mt.length*2)%mt.length,[j,Ce]=mt[K],Oe=Rt(re,X);at.fillStyle="#"+(Oe>>>0).toString(16).padStart(6,"0"),at.fillRect(j*ke+1,Ce*ke+1,ke-2,ke-2)}ue=requestAnimationFrame(je)}}ue=requestAnimationFrame(je)}function $e(U,re){const xe=U.getContext("2d");if(!xe)return;const at=le,Je=ve,Le=Ee,ke=[];for(let Be=2;Be<at-2;Be++)ke.push([Be,2]);for(let Be=2;Be<Je-2;Be++)ke.push([at-3,Be]);for(let Be=at-3;Be>=2;Be--)ke.push([Be,Je-3]);for(let Be=Je-3;Be>=2;Be--)ke.push([2,Be]);const mt=Math.min(10,ke.length-1);xe.fillStyle="#0d0d0d",xe.fillRect(0,0,U.width,U.height);for(let Be=0;Be<at;Be++)for(let vt=0;vt<Je;vt++)xe.fillStyle=(Be+vt)%2===0?"#111":"#1a1a1a",xe.fillRect(Be*Le,vt*Le,Le,Le);for(let Be=0;Be<mt;Be++){const vt=(1-Be+ke.length)%ke.length,[Gt,je]=ke[vt],Tt=Rt(re,Be);xe.fillStyle="#"+(Tt>>>0).toString(16).padStart(6,"0"),xe.fillRect(Gt*Le+1,je*Le+1,Le-2,Le-2)}}function Rt(U,re){return Ue(U,re,0)}function At(){document.querySelectorAll(".shop-skin-action").forEach(U=>{const re=U.dataset.shopSkin,xe=parseInt(U.dataset.shopCost||"0",10),at=_(re),Je=G===re;at?(U.disabled=!1,U.textContent=Je?"EQUIPPED":"EQUIP",U.classList.toggle("equipped",Je)):(U.textContent="BUY",U.classList.remove("equipped"),U.disabled=xe>0&&a()<xe)})}document.querySelectorAll(".shop-skin-action").forEach(U=>{U.addEventListener("click",()=>{const re=U.dataset.shopSkin,xe=parseInt(U.dataset.shopCost||"0",10);if(_(re)){G=re,E(re),ae=re,se=i.indexOf(re),se<0&&(se=0),We(ae),he(re),At(),m();return}xe>0&&a()>=xe&&p(re,xe)&&(G=re,E(re),ae=re,se=i.indexOf(re),se<0&&(se=0),We(ae),At(),m(),he(re),document.getElementById("coins-display").textContent="COINS: "+a())})}),qe&&(We(ae),J?pe():(Z(),J=!0));function Ut(){b(),Ne.style.display="none",lt.style.display="block";const U=document.getElementById("scoreboard");U&&(U.style.display="block");const re=document.getElementById("in-game-vote");re&&(re.style.display="none"),ht.classList.add("hidden"),Y.classList.add("visible"),de=!0,oe=!1,h.emit("join",{mode:"play",botCount:0})}Vt.forEach(U=>{U.addEventListener("click",()=>{Ut(U.dataset.mode||"play")})}),document.addEventListener("keydown",U=>{if(!de){const xe=document.getElementById("skins-panel");if(!(ht&&!ht.classList.contains("hidden")&&xe&&xe.classList.contains("active")))return;if(U.code==="ArrowLeft"||U.key==="a"||U.key==="A"){U.preventDefault(),Ve(se-1);return}if(U.code==="ArrowRight"||U.key==="d"||U.key==="D"){U.preventDefault(),Ve(se+1);return}return}if(U.code==="Space"){h.emit("reset");return}let re=null;(U.code==="ArrowUp"||U.key==="w")&&(re={x:0,y:-1}),(U.code==="ArrowDown"||U.key==="s")&&(re={x:0,y:1}),(U.code==="ArrowLeft"||U.key==="a")&&(re={x:-1,y:0}),(U.code==="ArrowRight"||U.key==="d")&&(re={x:1,y:0}),re&&h.emit("dir",re)});function Kt(U){T&&N(U),C.forEach((re,xe)=>{re.position.y=Math.sin(U*.005+xe)*1,re.rotation.y+=.02}),H.render(M,L)}x()}_S().then(()=>gS()).catch(n=>{document.body.innerHTML='<p style="color:#fff;font-family:sans-serif;padding:20px;text-align:center">Failed to start: '+(n&&n.message)+"</p>",console.error(n)});
