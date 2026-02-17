import{I as i,t as o,f as l,e as u,C as h,h as c,g as f}from"./index-BFhbMAKo.js";class m extends h{async onClick(t){}childVNodes=(t,s)=>this.$item.thumbnailUrl?[c("div",{innerHTML:"&nbsp;",style:`
                background:url(${this.$item.thumbnailUrl}) no-repeat top right;
                background-size: auto 100%;
                position:absolute;
                width: 100%;
                top: 0;
                right: 0;
                z-index: 0;
                bottom: ${f.chunkGapReal}px;
            `})]:[]}class d extends i{binaries={};loaders=[];get iconColor(){return"#44ff88"}get icon(){return"items-file"}constructor(){super();const t=["length","binaries","loaders"];for(const s of t)Object.defineProperty(this,s,{writable:!0,configurable:!1,enumerable:!1,value:this[s]})}async parseInfo(){}async save(){return this}async parseData(){const t=o(this);let s=0;const r=(e,n)=>{t._chunks.push(new m({...n,text:e,offset:s,idx:t._chunks.length,type:"item",item:t,allLinesSelectable:!0,noLeadingSpaces:!0,hasMultipleLines:!0,horizontalPadding:200})),s+=e.length};for(const e of i.items){const n=[e.title,e.author,l(e.size)+" "+u(e.added)].filter(Boolean);n.length<3&&n.push(""),r(n.join(`
`),{$item:e})}return Object.assign(t,{length:s}),await Promise.all(t.loaders.map(e=>e())),this}get chunks(){return this._chunks}}export{d as ItemItems,d as default};
