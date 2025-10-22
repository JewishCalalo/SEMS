const f=new Map;function C(o,t="Processing...",e=null){const s=document.getElementById(o);s&&(f.has(o)||f.set(o,{originalText:e||s.innerHTML,originalDisabled:s.disabled,originalClasses:s.className}),s.disabled=!0,s.innerHTML=`
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        ${t}
    `,s.classList.add("opacity-75","cursor-not-allowed"))}function S(o,t=null){const e=document.getElementById(o);e&&(f.has(o)||f.set(o,{originalText:t||e.innerHTML,originalDisabled:e.disabled,originalClasses:e.className}),e.disabled=!0,e.innerHTML=`
        <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    `,e.classList.add("opacity-75","cursor-not-allowed"))}function B(o){const t=document.getElementById(o);if(!t||!f.has(o))return;const e=f.get(o);t.disabled=e.originalDisabled,t.innerHTML=e.originalText,t.className=e.originalClasses,f.delete(o)}function y(o,t,e=null,s={}){const i=s&&s.color?s.color:"#22c55e",d="rgba(34,197,94,0.12)",u=i,a=`
        <div class="text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left:-24px;margin-right:-24px;margin-top:-24px;background:${i};">
            <h2 class="text-xl font-bold text-center">${o}</h2>
        </div>`,c=`
        <div class="text-center">
            <div class="mb-4">
                <div class="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3" style="background:${d}">
                    <svg class="w-8 h-8" style="color:${u}" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <p class="text-gray-700">${t}</p>
        </div>`,r=`
        <div class="flex justify-center mt-6">
            <button type="button" class="px-6 py-2 text-white rounded-lg transition-transform" style="background:${i}" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';" onclick="Swal.close()">OK</button>
        </div>`;Swal.fire({icon:!1,buttonsStyling:!1,html:a+c+r,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}}).then(p=>{e&&typeof e=="function"&&e(p)})}function m(o,t,e=null){const s="#ef4444",i="rgba(239,68,68,0.12)",d=s,u=`
        <div class="text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left:-24px;margin-right:-24px;margin-top:-24px;background:${s};">
            <h2 class="text-xl font-bold text-center">${o}</h2>
        </div>`,a=`
        <div class="text-center">
            <div class="mb-4">
                <div class="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3" style="background:${i}">
                    <svg class="w-8 h-8" style="color:${d}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
            </div>
            <p class="text-gray-700">${t}</p>
        </div>`,c=`
        <div class="flex justify-center mt-6">
            <button type="button" class="px-6 py-2 text-white rounded-lg transition-transform" style="background:${s}" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';" onclick="Swal.close()">OK</button>
        </div>`;Swal.fire({icon:!1,buttonsStyling:!1,html:u+a+c,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}}).then(r=>{e&&typeof e=="function"&&e(r)})}function $(o,t,e=null){Swal.fire({title:o,text:t,icon:"warning",confirmButtonColor:"#f59e0b",confirmButtonText:"OK",customClass:{popup:"swal-custom-popup"}}).then(s=>{e&&typeof e=="function"&&e(s)})}function T(o,t,e=null){Swal.fire({title:o,text:t,icon:"info",confirmButtonColor:"#3b82f6",confirmButtonText:"OK",customClass:{popup:"swal-custom-popup"}}).then(s=>{e&&typeof e=="function"&&e(s)})}function v(o="Processing..."){Swal.fire({title:o,html:`
            <div class="flex flex-col items-center justify-center py-8">
                <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
                <p class="text-gray-600 text-lg">Please wait...</p>
            </div>
        `,allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,showCancelButton:!1,showCloseButton:!1,width:"400px",customClass:{popup:"swal-loading-popup"},didOpen:()=>{const t=document.querySelector(".swal-loading-popup");t&&(t.style.background="rgba(255, 255, 255, 0.95)",t.style.backdropFilter="blur(5px)")}})}function h(){Swal.close()}function M(o,t,e={}){const{loadingText:s="Processing...",successTitle:i="Success!",successMessage:d="Action completed successfully.",errorTitle:u="Error",errorMessage:a="An error occurred. Please try again.",onSuccess:c=null,onError:r=null,onComplete:p=null}=e;fetch(t.action,{method:t.method,body:new FormData(t),headers:{"X-Requested-With":"XMLHttpRequest"}}).then(l=>l.json()).then(l=>{l.success?y(i,d,()=>{c&&typeof c=="function"&&c(l)}):m(u,l.message||a,()=>{r&&typeof r=="function"&&r(l)})}).catch(l=>{console.error("Form submission error:",l),m(u,a,()=>{r&&typeof r=="function"&&r(l)})})}function H(o,t,e={}){const{method:s="POST",data:i={},loadingText:d="Processing...",successTitle:u="Success!",successMessage:a="Action completed successfully.",errorTitle:c="Error",errorMessage:r="An error occurred. Please try again.",onSuccess:p=null,onError:l=null,onComplete:L=null}=e;v(d);const w=document.querySelector('meta[name="csrf-token"]')?.content,x={"X-Requested-With":"XMLHttpRequest"};w&&(x["X-CSRF-TOKEN"]=w);const b=new FormData;Object.keys(i).forEach(n=>{b.append(n,i[n])}),fetch(t,{method:s,headers:x,body:b}).then(n=>{const g=n.headers.get("content-type");if(g&&g.includes("application/json"))return n.json();throw new Error("Expected JSON response but received: "+g)}).then(n=>{h(),n.success?y(u,a,()=>{console.log("Success message:",n.message),n.message&&(n.message.includes("deleted successfully")||n.message.includes("deleted")||n.message.includes("User deleted"))&&(console.log("Auto-refreshing page after delete operation"),window.location.reload()),p&&typeof p=="function"&&p(n)}):m(c,n.message||r,()=>{l&&typeof l=="function"&&l(n)})}).catch(n=>{console.error("AJAX action error:",n),h();let g=r;n.message&&n.message.includes("Expected JSON response")&&(g="Server returned an unexpected response format. Please try again."),m(c,g,()=>{l&&typeof l=="function"&&l(n)})})}function E(o,t,e="primary",s="",i=""){const a=`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${{primary:"text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",secondary:"text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500",danger:"text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",success:"text-white bg-green-600 hover:bg-green-700 focus:ring-green-500",warning:"text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500"}[e]} ${i}`,c=s?`onclick="${s}"`:"";return`<button id="${o}" type="button" class="${a}" ${c}>${t}</button>`}window.ActionHandler={showButtonLoading:C,showSmallButtonLoading:S,restoreButtonState:B,showSuccessNotification:y,showErrorNotification:m,showWarningNotification:$,showInfoNotification:T,showLoadingModal:v,closeLoadingModal:h,handleFormSubmission:M,handleAjaxAction:H,createLoadingButton:E};
