import{r as d,j as e,R as q}from"./react-1F1He6-G.js";import{c as Q}from"./react-dom-B7OSs1zE.js";import{u as G,f as $,g as J,a as W,b as Y}from"./@tanstack-BB1Lo6bJ.js";import{c as Z}from"./clsx-B-dksMZM.js";import{t as ee}from"./tailwind-merge-BTwrKG5i.js";import{$ as te,F as se,A as ae,a as oe,b as T,c as F,d as re,e as V,f as k,g as le,h as ne,i as ie,j as D}from"./@radix-ui-DOUUxMU_.js";import{c as P}from"./class-variance-authority-Bb4qSo10.js";import{u as w,w as de,r as ce}from"./xlsx-DIngFzXJ.js";import{B as j,Q as me}from"./react-toastify-BV3RQC40.js";import{X as ue}from"./lucide-react-DJCUJiPB.js";import"./scheduler-CzFDRTuY.js";import"./@babel-CCbyfPlC.js";import"./react-remove-scroll-CLqBl6YT.js";import"./tslib-CDuPK5Eb.js";import"./react-remove-scroll-bar-B-b6fxcn.js";import"./react-style-singleton-jvMCV41A.js";import"./get-nonce-C-Z93AgS.js";import"./use-sidecar-C6xNNSdH.js";import"./use-callback-ref--kW7sOA6.js";import"./aria-hidden-TUpxsc0i.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function a(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=a(r);fetch(r.href,l)}})();function u(...t){return ee(Z(t))}const E=d.forwardRef(({className:t,...s},a)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:a,className:u("w-full caption-bottom text-sm",t),...s})}));E.displayName="Table";const L=d.forwardRef(({className:t,...s},a)=>e.jsx("thead",{ref:a,className:u("[&_tr]:border-b",t),...s}));L.displayName="TableHeader";const A=d.forwardRef(({className:t,...s},a)=>e.jsx("tbody",{ref:a,className:u("[&_tr:last-child]:border-0",t),...s}));A.displayName="TableBody";const pe=d.forwardRef(({className:t,...s},a)=>e.jsx("tfoot",{ref:a,className:u("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s}));pe.displayName="TableFooter";const C=d.forwardRef(({className:t,...s},a)=>e.jsx("tr",{ref:a,className:u("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s}));C.displayName="TableRow";const O=d.forwardRef(({className:t,...s},a)=>e.jsx("th",{ref:a,className:u("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s}));O.displayName="TableHead";const S=d.forwardRef(({className:t,...s},a)=>e.jsx("td",{ref:a,className:u("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s}));S.displayName="TableCell";const fe=d.forwardRef(({className:t,...s},a)=>e.jsx("caption",{ref:a,className:u("mt-4 text-sm text-muted-foreground",t),...s}));fe.displayName="TableCaption";const xe=[{id:1,label:"DateTime",value:"datetime"},{id:2,label:"Site",value:"site"},{id:3,label:"Controller",value:"controller"},{id:4,label:"Card No",value:"cardno"},{id:5,label:"Staff No",value:"staffno"},{id:6,label:"Name",value:"name"},{id:7,label:"Transaction",value:"status"},{id:8,label:"Company",value:"company"},{id:9,label:"Vehicle No",value:"vehicleno"}],ge=P("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),v=d.forwardRef(({className:t,variant:s,size:a,asChild:i=!1,...r},l)=>{const m=i?te:"button";return e.jsx(m,{className:u(ge({variant:s,size:a,className:t})),ref:l,...r})});v.displayName="Button";const I=d.forwardRef(({className:t,type:s,...a},i)=>e.jsx("input",{type:s,className:u("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:i,...a}));I.displayName="Input";function he({columns:t,data:s}){var b,x;const[a,i]=d.useState([]),[r,l]=d.useState(""),m=d.useRef(null),f=o=>{l("");const n=o.target.value;l(n)},c=G({data:s,columns:t,getCoreRowModel:J(),getPaginationRowModel:W(),onColumnFiltersChange:i,getFilteredRowModel:Y(),state:{columnFilters:a}}),p=c.getFilteredRowModel().rows,h=()=>{var o,n;if((s==null?void 0:s.length)!==0){const g=w.json_to_sheet(p.map(X=>X.original)),y=w.book_new(),H=(o=c.getColumn("status"))==null?void 0:o.getFilterValue(),U=(n=c.getColumn("datetime"))==null?void 0:n.getFilterValue(),R=`${H.replace(/\//g,"-")}-${U.replace(/\//g,"-")}-Sheet`;w.book_append_sheet(y,g,`${R}`),de(y,`${R.replace(/\//g,"-")} Report.xlsx`)}else j.info("Tidak ada data yang bisa diimport")},N=()=>e.jsxs("div",{className:"block md:flex items-center justify-between text-xs md:text-base",children:[e.jsxs("div",{className:"flex justify-between md:gap-8 p-2.5",children:[e.jsxs("p",{children:[e.jsx("b",{children:"Data"}),": ",p.length]}),e.jsxs("p",{children:[e.jsx("b",{children:"Entry"}),": ",p.filter(o=>o.getValue("status")==="Valid Entry Access").length]}),e.jsxs("p",{children:[e.jsx("b",{children:"Exit"}),": ",p.filter(o=>o.getValue("status")==="Valid Exit Access").length]})]}),e.jsxs("div",{className:"flex justify-between md:gap-8 p-2.5",children:[e.jsxs(v,{size:"sm",onClick:h,className:"bg-slate-900 text-white hover:bg-green-800 text-xs md:text-base items-center",children:["Import to XLSX ",e.jsx(se,{className:"h-2 w-2 md:h-4 md:w-4 mx-2"})]}),e.jsxs(v,{size:"sm",onClick:()=>c.previousPage(),disabled:!c.getCanPreviousPage(),className:"bg-slate-900 text-white text-xs md:text-base items-center",children:[e.jsx(ae,{className:"h-2 w-2 md:h-4 md:w-4 mx-2"})," Previous"]}),e.jsxs(v,{size:"sm",onClick:()=>c.nextPage(),disabled:!c.getCanNextPage(),className:"bg-slate-900 text-white text-xs md:text-base items-center",children:["Next ",e.jsx(oe,{className:"h-2 w-2 md:h-4 md:w-4 mx-2"})]})]})]});return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center py-4",children:[e.jsx("select",{value:r,onChange:f,className:"p-2.5 bg-slate-900 rounded-lg text-white mx-5 hover:bg-white hover:text-slate-900 hover:cursor-pointer",children:e.jsxs("optgroup",{label:"Filter List",children:[e.jsx("option",{value:"",children:"--Pilih Filter--"}),xe.map(o=>e.jsx("option",{value:o.value,children:o.label},o.id))]})}),e.jsx(I,{placeholder:`Filter ${r}`,className:"max-w-sm placeholder:capitalize",value:((b=c.getColumn(r.toString()))==null?void 0:b.getFilterValue())??"",onChange:o=>{var n;return(n=c.getColumn(r.toString()))==null?void 0:n.setFilterValue(o.target.value)}})]}),e.jsx("div",{className:"rounded-md border",children:e.jsxs(E,{ref:m,children:[e.jsx(L,{className:"bg-slate-900 text-white",children:c.getHeaderGroups().map(o=>e.jsx(C,{children:o.headers.map(n=>e.jsx(O,{children:n.isPlaceholder?null:$(n.column.columnDef.header,n.getContext())},n.id))},o.id))}),e.jsx(A,{children:(x=c.getRowModel().rows)!=null&&x.length?c.getRowModel().rows.map(o=>e.jsx(C,{"data-state":o.getIsSelected()&&"selected",className:"odd:bg-gray-100",children:o.getVisibleCells().map(n=>e.jsx(S,{className:n.getValue()==="Valid Entry Access"||n.getValue()==="Valid Exit Access"?"text-green-500 font-bold text-center":"",children:$(n.column.columnDef.cell,n.getContext())},n.id))},o.id)):e.jsx(C,{children:e.jsx(S,{colSpan:t.length,className:"h-24 text-center",children:"No results."})})})]})}),e.jsx(N,{})]})}const be=ne,ye=ie,ve=le,M=d.forwardRef(({className:t,...s},a)=>e.jsx(T,{className:u("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s,ref:a}));M.displayName=T.displayName;const je=P("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),K=d.forwardRef(({side:t="right",className:s,children:a,...i},r)=>e.jsxs(ve,{children:[e.jsx(M,{}),e.jsxs(F,{ref:r,className:u(je({side:t}),s),...i,children:[a,e.jsxs(re,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(ue,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));K.displayName=F.displayName;const B=({className:t,...s})=>e.jsx("div",{className:u("flex flex-col space-y-2 text-center sm:text-left",t),...s});B.displayName="SheetHeader";const _=d.forwardRef(({className:t,...s},a)=>e.jsx(V,{ref:a,className:u("text-lg font-semibold text-foreground",t),...s}));_.displayName=V.displayName;const z=d.forwardRef(({className:t,...s},a)=>e.jsx(k,{ref:a,className:u("text-sm text-muted-foreground",t),...s}));z.displayName=k.displayName;const Ne=t=>{t.preventDefault(),t.stopPropagation()},we=t=>s=>{s.preventDefault(),s.stopPropagation(),t(!0)},Ce=t=>s=>{s.preventDefault(),s.stopPropagation(),t(!1)},Se=(t,s,a)=>{var r,l;t.preventDefault(),t.stopPropagation(),(r=s.current)==null||r.classList.remove("dragging");const i=t.dataTransfer.files[0];if(i.type!=="application/vnd.ms-excel"&&i.type!=="text/csv"&&i.type!=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){(l=s.current)==null||l.classList.add("bg-red-500"),setTimeout(()=>{var m;(m=s.current)==null||m.classList.remove("bg-red-500")},1e3),j.error("Only Excel/CSV files are supported.");return}a(i)},Re=(t,s)=>{const a=document.createElement("input");a.type="file",a.accept=".xls,.xlsx,.csv",a.onchange=i=>{var m,f;const l=(m=i.target.files)==null?void 0:m[0];if(l){if(l.type!=="application/vnd.ms-excel"&&l.type!=="text/csv"&&l.type!=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){(f=t.current)==null||f.classList.add("bg-red-500"),setTimeout(()=>{var c;(c=t.current)==null||c.classList.remove("bg-red-500")},1e3),j.error("Only Excel/CSV files are supported.");return}s(l)}},a.click()},$e=({handleFileUpload:t})=>{const[s,a]=d.useState(!1),i=d.useRef(null);return e.jsx("div",{className:"flex justify-between",children:e.jsxs(be,{children:[e.jsx(ye,{asChild:!0,children:e.jsxs(v,{className:"my-2 mx-5 hover:bg-white hover:text-slate-900 duration-300 gap-2",children:["Upload File ",e.jsx(D,{className:"w-4 h-4"})]})}),e.jsxs(K,{className:"bg-white",children:[e.jsxs(B,{children:[e.jsxs(_,{className:"flex items-center gap-2 py-2",children:["Upload File",e.jsx(D,{className:"w-4 h-4"})]}),e.jsxs(z,{className:"py-5",children:["Silahkan upload file transaksi yang Anda inginkan ",e.jsx("b",{children:"(hanya menerima file berekstensi .xls/.xlsx/.csv)"})]})]}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsx("div",{ref:i,className:`drag-and-drop ${s?"dragging":""} bg-blue-500 font-bold text-sky-100 p-1 rounded-md text-center mx-auto h-64`,onDragEnter:we(a),onDragLeave:Ce(a),onDragOver:Ne,onDrop:r=>Se(r,i,t),children:e.jsx("div",{className:"drag-and-drop-content rounded-md border-dashed border-2 border-white h-full",children:e.jsx("div",{className:"flex flex-col justify-center items-center h-full px-2",children:e.jsxs("p",{children:["Silahkan seret atau ",e.jsx("span",{onClick:()=>Re(i,t),className:"underline cursor-pointer hover:text-white duration-300",children:"upload"})," file transaksi disini"]})})})})})]})]})})},De=[{accessorKey:"datetime",header:"DateTime"},{accessorKey:"site",header:"Site"},{accessorKey:"controller",header:"Controller"},{accessorKey:"cardno",header:"Card No"},{accessorKey:"staffno",header:"Staff No"},{accessorKey:"name",header:"Name"},{accessorKey:"status",header:"Transaction"},{accessorKey:"company",header:"Company"},{accessorKey:"vehicleno",header:"Vehicle No"}],Te=(t,s)=>{j.info("Sedang upload");const a=new FileReader;a.onload=i=>{var b;const r=new Uint8Array((b=i.target)==null?void 0:b.result),l=ce(r,{type:"array"}),m=l.SheetNames[0],f=l.Sheets[m],c=w.sheet_to_json(f,{header:1}),p=[];let h,N;for(let x=1;x<c.length;x++){const o=c[x],n=o[3],g=o[2],y=o[6]==="Valid Entry Access"||o[6]==="Valid Exit Access"?o[6]:"Valid Entry Access";n!==h?p.push({datetime:new Date((parseFloat(o[0])-25569)*86400*1e3).toLocaleDateString().toString(),site:o[1],controller:g,cardno:n,staffno:o[4],name:o[5],status:y,company:o[7],vehicleno:o[8]}):n===h&&g!==N&&p.push({datetime:new Date((parseFloat(o[0])-25569)*86400*1e3).toLocaleDateString().toString(),site:o[1],controller:g,cardno:n,staffno:o[4],name:o[5],status:y,company:o[7],vehicleno:o[8]}),h=n,N=g}s(p),j.info("Proses upload selesai")},a.readAsArrayBuffer(t)};function Fe(){const[t,s]=d.useState([]);return e.jsxs("div",{className:"px-5",children:[e.jsx(me,{position:"top-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!0}),e.jsx($e,{handleFileUpload:a=>Te(a,s)}),e.jsx(he,{columns:De,data:t})]})}Q.createRoot(document.getElementById("root")).render(e.jsx(q.StrictMode,{children:e.jsx(Fe,{})}));
