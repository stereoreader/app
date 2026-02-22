import{I as i,f as o,e as l,C as u,g as h}from"./App-CDSzeW__.js";import{C as c,m as f}from"./index-CHR6cbVc.js";class m extends u{async onClick(t){}childVNodes=(t,s)=>this.$item.thumbnailUrl?[f("div",{innerHTML:"&nbsp;",style:`
                background:url(${this.$item.thumbnailUrl}) no-repeat top right;
                background-size: auto 100%;
                position:absolute;
                width: 100%;
                top: 0;
                right: 0;
                z-index: 0;
                bottom: ${h.chunkGapReal}px;
            `})]:[]}class g extends i{binaries={};loaders=[];get iconColor(){return"#44ff88"}get icon(){return"items-file"}constructor(){super();const t=["length","binaries","loaders"];for(const s of t)Object.defineProperty(this,s,{writable:!0,configurable:!1,enumerable:!1,value:this[s]})}async parseInfo(){}async save(){return this}async parseData(){const t=c(this);let s=0;const r=(e,n)=>{t._chunks.push(new m({...n,text:e,offset:s,idx:t._chunks.length,type:"item",item:t,allLinesSelectable:!0,noLeadingSpaces:!0,hasMultipleLines:!0,horizontalPadding:200})),s+=e.length};for(const e of i.items){const n=[e.title,e.author,o(e.size)+" "+l(e.added)].filter(Boolean);n.length<3&&n.push(""),r(n.join(`
`),{$item:e})}return Object.assign(t,{length:s}),await Promise.all(t.loaders.map(e=>e())),this}get chunks(){return this._chunks}}export{g as ItemItems,g as default};
