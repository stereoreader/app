import{I as i,t as a,C as h,h as c}from"./index-Dam73RXz.js";class u extends h{constructor(e){super(e)}calcRow(e,t,n){return t.push({offset:e,height:10,lines:[{idx:0,chunkPos:0,chunk:this,text:""}],lineHeight:10}),10}component({lines:e,width:t,columnIdx:n},o){const s={};return s.style=`
            user-select: none;
            display: block;
            position: absolute;
            left: 0;
            top:0;
            width: ${t}px;
            height:${document.querySelector(".reader").clientHeight}px;
        `,s.class="playground",[c("div",s)]}}const l=new Set(["readingProgress","fontSize","fontWeight","alternateCharOpacity"]);class p extends i{readerTopPadding=0;readerBottomPadding=0;iconColor="#C2FF2B";icon="game";get settingsToStore(){return["width","gap","noStereo"]}get settingsToOverride(){return{showReaderScrollbar:!1}}get recalcProps(){return[]}supports(e){return!l.has(e)}constructor(){super();const e=["length"];for(const t of e)Object.defineProperty(this,t,{writable:!0,configurable:!1,enumerable:!1,value:this[t]});this.settings.speed??=500,this.settings.itemSize??=30}async parseInfo(){}async parseData(){const e=a(this);return e._chunks.push(new u({offset:0,idx:e._chunks.length,pageIdx:0,item:e})),Object.assign(e,{length:1}),this}get chunks(){return this._chunks}}export{p as I};
