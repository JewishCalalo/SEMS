document.addEventListener("DOMContentLoaded",function(){window.submitReservationForm=function(){console.log("submitReservationForm function called from global scope");const r=document.querySelector(".swal2-popup #reservationForm");if(console.log("Form found:",r),!r){console.error("Form not found in modal"),Swal.fire({icon:"error",title:"Form Error",text:"Reservation form not found. Please refresh the page and try again."});return}W();const t=["name","email","contact_number","department","borrow_date","return_date","reason_type"];let o=!0,n=null,s=[];t.forEach(p=>{const v=r.querySelector(`[name="${p}"]`);v&&!v.value.trim()?(v.classList.add("border-red-500"),B(v,"This field is required"),n||(n=v),o=!1,s.push(`${Q(p)} is required`)):v&&(v.classList.remove("border-red-500"),D(v))});const i=r.querySelector('[name="department"]'),c=r.querySelector('[name="department_other"]');i&&i.value==="Other"&&(!c||!c.value.trim()?(c&&(c.classList.add("border-red-500"),B(c,"Please specify the department"),n||(n=c)),o=!1,s.push('Please specify the department when "Other" is selected')):c&&(c.classList.remove("border-red-500"),D(c)));const g=r.querySelector('[name="reason_type"]'),u=r.querySelector('[name="custom_reason"]');g&&g.value==="Other"&&(!u||!u.value.trim()?(u.classList.add("border-red-500"),B(u,"Please specify the purpose of your reservation"),n||(n=u),o=!1,s.push("Please specify the purpose of your reservation")):(u.classList.remove("border-red-500"),D(u)));const d=new Date(r.borrow_date.value),f=new Date(r.return_date.value),_=new Date;_.setHours(0,0,0,0);const E=new Date(d);E.setHours(0,0,0,0);const h=new Date(_);if(h.setDate(h.getDate()+6),E<_||E>h){const p=r.querySelector('[name="borrow_date"]');p.classList.add("border-red-500");const v=h.toISOString().slice(0,10);B(p,`Please select a date from today up to ${v}`),n||(n=p),o=!1,s.push("Borrow date must be within the next 7 days")}if(f<d){const p=r.querySelector('[name="return_date"]');p.classList.add("border-red-500"),B(p,"Return date cannot be before borrow date"),n||(n=p),o=!1,s.push("Return date cannot be before borrow date")}const I=r.querySelector("#borrow_time")?.value,C=r.querySelector("#return_time")?.value,k=p=>{if(!p)return null;const[v,w]=p.split(":").map(Number);return v*60+w},y=480,l=1020,b=k(I),x=k(C),a=document.getElementById("borrow_time_error"),m=document.getElementById("return_time_error");if(a&&(a.textContent="",a.classList.add("hidden")),m&&(m.textContent="",m.classList.add("hidden")),b!==null){const p=r.querySelector("#borrow_time");if((b<y||b>l)&&(p.classList.add("border-red-500"),B(p,"Borrow time must be between 8:00 AM and 5:00 PM"),a&&(a.textContent="Borrow time must be between 8:00 AM and 5:00 PM",a.classList.remove("hidden")),n||(n=p),o=!1,s.push("Borrow time must be between 8:00 AM and 5:00 PM")),E&&E.getTime()===_.getTime()){const w=new Date,q=w.getHours()*60+w.getMinutes();b<=q&&(p.classList.add("border-red-500"),B(p,"Borrow time cannot be in the past"),a&&(a.textContent="Borrow time cannot be in the past",a.classList.remove("hidden")),n||(n=p),o=!1,s.push("Borrow time cannot be in the past"))}}if(x!==null){const p=r.querySelector("#return_time");(x<y||x>l)&&(p.classList.add("border-red-500"),B(p,"Return time must be between 8:00 AM and 5:00 PM"),m&&(m.textContent="Return time must be between 8:00 AM and 5:00 PM",m.classList.remove("hidden")),n||(n=p),o=!1,s.push("Return time must be between 8:00 AM and 5:00 PM"));const v=new Date(f);if(isNaN(v)||v.setHours(0,0,0,0),!isNaN(v)&&v.getTime()===_.getTime()){const w=new Date,q=w.getHours()*60+w.getMinutes();x<=q&&(p.classList.add("border-red-500"),B(p,"Return time cannot be in the past"),m&&(m.textContent="Return time cannot be in the past",m.classList.remove("hidden")),n||(n=p),o=!1,s.push("Return time cannot be in the past"))}}if(d&&f&&d.toDateString()===f.toDateString()&&b!==null&&x!==null&&x-b<30){const v=r.querySelector("#return_time");v.classList.add("border-red-500"),B(v,"For same-day reservations, return time must be at least 30 minutes after borrow time"),m&&(m.textContent="For same-day reservations, return time must be at least 30 minutes after borrow time",m.classList.remove("hidden")),n||(n=v),o=!1,s.push("For same-day reservations, return time must be at least 30 minutes after borrow time")}if(!o){Y(s),n&&n.focus();return}return console.log("Form validation passed, delegating to duplicate-check..."),ae()},document.querySelectorAll(".notification").forEach(r=>{setTimeout(()=>{r.classList.remove("translate-x-full")},100),setTimeout(()=>{r.classList.add("translate-x-full"),setTimeout(()=>{r.remove()},300)},5e3);const t=document.createElement("button");t.innerHTML="×",t.className="ml-4 text-white hover:text-gray-200 text-xl font-bold",t.onclick=function(){r.classList.add("translate-x-full"),setTimeout(()=>{r.remove()},300)};const o=r.querySelector("div");o&&o.appendChild(t)}),me()});function R(e,r="info"){const t=document.getElementById("notification-container");if(!t){console.error("Notification container not found");return}const o={success:"bg-green-500",error:"bg-red-500",warning:"bg-yellow-500",info:"bg-blue-500"},n={success:'<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>',error:'<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>',warning:'<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>',info:'<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>'},s=document.createElement("div");s.className=`notification ${r} ${o[r]} text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full`,s.innerHTML=`
        <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                ${n[r]}
            </svg>
            <span>${e}</span>
            <button class="ml-4 text-white hover:text-gray-200 text-xl font-bold" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `,t.appendChild(s),setTimeout(()=>{s.classList.remove("translate-x-full")},100),setTimeout(()=>{s.classList.add("translate-x-full"),setTimeout(()=>{s.remove()},300)},5e3)}function z(e,r){Swal.fire({icon:!1,buttonsStyling:!1,html:`
            <div class="bg-red-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                <h2 class="text-xl font-bold text-center">${e||"Error"}</h2>
            </div>
            <div class="text-center">
                <div class="mb-4">
                    <div class="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                        <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">${r||""}</p>
            </div>
            <div class="flex justify-center mt-6">
                <button type="button" class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105" style="border: none !important; outline: none !important;" onclick="Swal.close()">OK</button>
            </div>
        `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}})}window.openImagePopup=function(e){try{const r=document.createElement("div");r.className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4";const t=document.createElement("div");t.className="relative max-w-6xl w-full flex items-center justify-center";const o=document.createElement("img");o.src=e,o.alt="Equipment image",o.className="max-h-[85vh] max-w-full rounded-xl shadow-2xl select-none";const n=()=>{document.removeEventListener("keydown",s),r.remove()},s=i=>{i.key==="Escape"&&n()};r.addEventListener("click",i=>{i.target===r&&n()}),document.addEventListener("keydown",s),t.appendChild(o),r.appendChild(t),document.body.appendChild(r)}catch(r){console.error("openImagePopup error:",r)}};document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",function(e){const r=e.target;if(r&&r.classList&&r.classList.contains("js-image-popup")){const t=r.getAttribute("src");t&&(e.preventDefault(),window.openImagePopup&&window.openImagePopup(t))}})});function U(e,r="Reservation Updated"){const t=document.querySelector(".swal2-container .swal2-popup");if(t){let o=document.getElementById("inline-orange-modal");o&&o.remove(),o=document.createElement("div"),o.id="inline-orange-modal",o.className="fixed inset-0 flex items-center justify-center",o.style.background="rgba(0,0,0,0.35)",o.style.zIndex="10000",o.innerHTML=`
            <div class="bg-white rounded-lg shadow-xl w-full max-w-md relative" role="dialog" aria-modal="true">
                <div class="bg-orange-500 text-white p-4 rounded-t-lg">
                    <h2 class="text-lg font-bold text-center">${r}</h2>
                </div>
                <div class="px-6 pt-6 pb-4 text-center">
                    <div class="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M5.07 19h13.86A2 2 0 0021 17.15L13.93 4.6a2 2 0 00-3.46 0L3 17.15A2 2 0 005.07 19z"></path>
                        </svg>
                    </div>
                    <p class="text-gray-700">${e||""}</p>
                    <div class="flex justify-center mt-6">
                        <button type="button" id="inline-orange-modal-ok" class="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400">OK</button>
                    </div>
                </div>
            </div>`,o.addEventListener("click",s=>{s.target===o&&o.remove()}),t.appendChild(o);const n=o.querySelector("#inline-orange-modal-ok");n&&n.addEventListener("click",()=>o.remove());return}Swal.fire({icon:!1,buttonsStyling:!1,allowOutsideClick:!0,html:`
            <div class="bg-orange-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                <h2 class="text-xl font-bold text-center">${r}</h2>
            </div>
            <div class="text-center">
                <div class="mb-4">
                    <div class="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                        <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M5.07 19h13.86A2 2 0 0021 17.15L13.93 4.6a2 2 0 00-3.46 0L3 17.15A2 2 0 005.07 19z"></path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">${e||""}</p>
            </div>
            <div class="flex justify-center mt-6">
                <button type="button" class="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105" style="border: none !important; outline: none !important;" onclick="Swal.close()">OK</button>
            </div>
        `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}})}function me(){const e=document.getElementById("reservationButton");e&&e.addEventListener("click",function(){const u=document.getElementById("reservationDropdown");u&&u.classList.toggle("hidden")}),document.addEventListener("click",function(u){const d=document.getElementById("reservationButton"),f=document.getElementById("reservationDropdown");d&&f&&!d.contains(u.target)&&!f.contains(u.target)&&f.classList.add("hidden")});const r=document.getElementById("proceedToReservation");r&&r.addEventListener("click",ie);const t=document.getElementById("categorySelect"),o=document.getElementById("equipmentTypeSelect");if(t&&o){const u=()=>{const d=!!t.value;o.disabled=!d,o.classList.toggle("opacity-50",!d),o.classList.toggle("cursor-not-allowed",!d);const f=document.getElementById("equipmentTypeHelp");f&&(f.style.visibility=d?"hidden":"visible"),d||(o.value="")};u(),t.addEventListener("change",u)}const n=document.getElementById("reservationForm");n&&n.addEventListener("submit",function(u){const d=this.querySelector('button[type="submit"]');if(d){const f=d.textContent;d.textContent="Submitting...",d.disabled=!0,setTimeout(()=>{d.textContent=f,d.disabled=!1},3e3)}});const s=document.getElementById("searchInput"),i=document.getElementById("categorySelect"),c=document.getElementById("equipmentTypeSelect"),g=document.getElementById("availabilitySelect");s&&s.addEventListener("input",()=>performDynamicSearch(1)),i&&i.addEventListener("change",()=>performDynamicSearch(1)),c&&c.addEventListener("change",()=>performDynamicSearch(1)),g&&g.addEventListener("change",()=>performDynamicSearch(1)),pe()}let L=[];function pe(){const e=localStorage.getItem("sems_reservation");if(e)try{L=JSON.parse(e)}catch(r){console.error("Error parsing saved reservation:",r),L=[]}H()}function fe(){localStorage.setItem("sems_reservation",JSON.stringify(L))}function ge(){L=[],localStorage.removeItem("sems_reservation"),H()}function ve(e,r,t){if(console.log("Adding to reservation:",e,r,"Available:",t),!t||t<=0){console.error("Invalid available count:",t),R(`Error: Invalid available count for ${r}`,"error");return}const o=L.find(n=>n.id===e||n.equipment_id===e);if(o){const n=o.quantity;if(t-n<=0){console.log("DEBUG: Showing Already in Reservation modal - this is the NEW version"),Swal.fire({icon:!1,buttonsStyling:!1,html:`
                    <div class="bg-red-500 rounded-t-lg -m-6 -mt-6 mb-4">
                        <h2 class="text-xl text-white font-bold">Already in Reservation!</h2>
                    </div>
                    <div class="text-center">
                        <div class="mb-4">
                            <div class="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                                <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-700">You already have <strong class="text-orange-600 font-bold">${n} units</strong> of <strong class="text-gray-900 font-bold">${r}</strong> in your reservation, which is the maximum available.</p>
                    </div>
                    <div class="flex justify-center mt-6">
                        <button type="button" class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                            OK
                        </button>
                    </div>
                `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}});return}oe(e,r,t,n)}else oe(e,r,t,1)}function oe(e,r,t,o){Swal.fire({icon:!1,buttonsStyling:!1,html:`
            <div class="bg-red-600 text-white p-4 -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                <h2 class="text-xl font-bold">Add to Reservation</h2>
            </div>
            <div class="text-center">
                <h3 class="text-lg font-medium text-gray-900 mb-4">${r}</h3>
                <p class="text-sm text-gray-600 mb-4">Available: ${t} units</p>
                
                <div class="mb-6">
                    <label for="quantityInput" class="block text-sm font-medium text-gray-700 mb-2">Quantity to Add</label>
                    <div class="flex items-center justify-center space-x-3">
                        <button type="button" id="decrementBtn" class="w-10 h-10 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                            </svg>
                        </button>
                        <input type="number" id="quantityInput" value="${o}" min="1" max="${t}" 
                               class="w-20 text-center border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <button type="button" id="incrementBtn" class="w-10 h-10 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </button>
                    </div>
                    <p class="text-xs text-gray-500 mt-2">Current in reservation: ${o}</p>
                </div>
            </div>
            <div class="flex justify-between mt-6">
                <button type="button" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                    Cancel
                </button>
                <button type="button" id="confirmAddBtn" class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors transform hover:scale-105">
                    Add to Reservation
                </button>
            </div>
        `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-small-popup"},didOpen:()=>{const n=document.getElementById("quantityInput"),s=document.getElementById("incrementBtn"),i=document.getElementById("decrementBtn"),c=document.getElementById("confirmAddBtn"),g=document.querySelector("#reservationForm");g&&g.querySelectorAll("input, textarea").forEach(f=>{f.addEventListener("blur",()=>$(f)),f.addEventListener("input",()=>{f.classList.contains("border-red-500")&&$(f)})}),s.addEventListener("click",()=>{const d=parseInt(n.value);d<t&&(n.value=d+1,u())}),i.addEventListener("click",()=>{const d=parseInt(n.value);d>1&&(n.value=d-1,u())}),n.addEventListener("input",u),c.addEventListener("click",()=>{const d=parseInt(n.value);d>=1&&d<=t?be(e,r,t):Swal.showValidationMessage("Please enter a valid quantity")}),u();function u(){const d=parseInt(n.value),f=d>=1&&d<=t;s.disabled=d>=t,i.disabled=d<=1,s.disabled?(s.classList.add("opacity-50","cursor-not-allowed"),s.classList.remove("hover:bg-gray-300")):(s.classList.remove("opacity-50","cursor-not-allowed"),s.classList.add("hover:bg-gray-300")),i.disabled?(i.classList.add("opacity-50","cursor-not-allowed"),i.classList.remove("hover:bg-gray-300")):(i.classList.remove("opacity-50","cursor-not-allowed"),i.classList.add("hover:bg-gray-300")),c.disabled=!f,f?(c.classList.remove("opacity-50","cursor-not-allowed"),c.classList.add("hover:bg-red-700","hover:scale-105")):(c.classList.add("opacity-50","cursor-not-allowed"),c.classList.remove("hover:bg-red-700","hover:scale-105"))}}})}function be(e,r,t){const o=document.getElementById("quantityInput");if(!o){Swal.showValidationMessage("Quantity input not found");return}const n=parseInt(o.value);if(isNaN(n)||n<1){Swal.showValidationMessage("Quantity must be at least 1");return}const s=L.find(g=>g.id===e||g.equipment_id===e),i=s?s.quantity:0;if(s){if(n>t){Swal.showValidationMessage(`Total quantity cannot exceed available units (${t})`);return}}else if(n>t){Swal.showValidationMessage(`Quantity cannot exceed available units (${t})`);return}const c=s?n:i+n;if(c>t){Swal.showValidationMessage(`Total quantity in reservation (${c}) would exceed available units (${t})`);return}s?(s.quantity=c,Swal.fire({icon:!1,buttonsStyling:!1,html:`
                <div class="bg-green-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                    <h2 class="text-xl font-bold text-center">Reservation Updated!</h2>
                </div>
                <div class="text-center">
                    <div class="mb-4">
                        <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                            <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-700">${r} quantity updated to ${n} units</p>
                </div>
            `,showConfirmButton:!1,showCancelButton:!1,timer:3e3,customClass:{popup:"swal-custom-popup"}})):(L.push({id:e,equipment_id:e,name:r,quantity:n}),Swal.fire({icon:!1,buttonsStyling:!1,html:`
                <div class="bg-green-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                    <h2 class="text-xl font-bold text-center">Added to Reservation!</h2>
                </div>
                <div class="text-center">
                    <div class="mb-4">
                        <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                            <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-700">${r} added to reservation (${n} units)</p>
                </div>
            `,showConfirmButton:!1,showCancelButton:!1,timer:3e3,customClass:{popup:"swal-small-popup"}})),H()}function H(){const e=document.getElementById("reservationCount"),r=document.getElementById("fabReservationCount"),t=document.getElementById("reservationItems"),o=document.getElementById("reservationTotalItems"),n=L.reduce((s,i)=>s+i.quantity,0);e&&(e.textContent=n),r&&(r.textContent=n),o&&(o.textContent=n),t&&(t.innerHTML="",L.length===0?t.innerHTML=`
                <div class="text-center py-6 text-gray-500">
                    <svg class="mx-auto h-8 w-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path>
                    </svg>
                    <p>Your reservation is empty</p>
                </div>
            `:(L.forEach((s,i)=>{const c=document.createElement("div");c.className="flex items-center justify-between p-2 bg-gray-50 rounded",c.innerHTML=`
                    <div>
                        <span class="font-medium">${s.name}</span>
                        <span class="text-gray-500">x${s.quantity}</span>
                    </div>
                    <button type="button" data-remove-index="${i}" class="text-red-500 hover:text-red-700 remove-reservation-item">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                `,t.appendChild(c)}),t.querySelectorAll(".remove-reservation-item").forEach(s=>{s.addEventListener("click",i=>{const c=parseInt(i.currentTarget.getAttribute("data-remove-index"));J(c)})}))),fe(),console.log("Reservation updated:",L),console.log("Total items:",n)}function J(e){if(L[e]){const r=L[e].name;L.splice(e,1),H(),U(`${r} removed from reservation`,"Reservation Updated")}}function he(e){return J(e)}function ye(){const e=document.querySelector(".swal2-popup #reservationForm"),r=document.getElementById("submitReservationBtn");if(!e||!r)return;function t(){const n=["name","email","contact_number","department","borrow_date","return_date","reason_type"];let s=!0;n.forEach(d=>{const f=e.querySelector(`[name="${d}"]`);f&&!f.value.trim()&&(s=!1)});const i=e.querySelector('[name="department"]'),c=e.querySelector('[name="department_other"]');i&&i.value==="Other"&&(!c||!c.value.trim())&&(s=!1);const g=e.querySelector('[name="reason_type"]'),u=e.querySelector('[name="custom_reason"]');g&&g.value==="Other"&&(!u||!u.value.trim())&&(s=!1),s?(r.disabled=!1,r.classList.remove("disabled:bg-gray-400","disabled:cursor-not-allowed","disabled:transform-none"),r.classList.add("hover:bg-red-700","transform","hover:scale-105")):(r.disabled=!0,r.classList.add("disabled:bg-gray-400","disabled:cursor-not-allowed","disabled:transform-none"),r.classList.remove("hover:bg-red-700","transform","hover:scale-105"))}e.querySelectorAll("input, select, textarea").forEach(n=>{n.addEventListener("input",t),n.addEventListener("change",t)}),t()}function ie(){if(L.length===0){U("Your reservation is empty");return}const e=new Date,r=s=>s.toISOString().split("T")[0],t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+7),o=r(e);r(t);let n="";L.forEach((s,i)=>{n+=`
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-200 mb-2">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="font-medium text-gray-900">${s.name}</p>
                        <p class="text-sm text-gray-500">Quantity: ${s.quantity}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        ${s.quantity} item${s.quantity>1?"s":""}
                    </span>
                    <button type="button" class="ml-2 text-gray-400 hover:text-red-600" aria-label="Remove item" onclick="removeFromReservationSummary(${i})">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        `}),Swal.fire({buttonsStyling:!1,allowOutsideClick:!1,customClass:{popup:"swal-reservation-form"},html:`
            <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 -m-6 -mt-6 mb-6 rounded-t-lg" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                <div class="flex items-center justify-center gap-3">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <h2 class="text-2xl font-bold">Complete Your Reservation</h2>
                </div>
                <p class="text-red-100 text-sm mt-2 text-center">Fill out the details below to submit your equipment reservation request</p>
            </div>
            
            <!-- Reservation Details - Toggleable -->
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <button type="button" id="toggleReservationDetails" class="w-full text-left">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-semibold text-blue-900 text-left">How Reservation Works</h3>
                        <svg id="toggleIcon" class="w-5 h-5 text-blue-600 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                </button>
                <div id="reservationDetailsContent" class="mt-4 hidden">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800 text-left">
                        <div class="flex items-start space-x-2 text-left">
                            <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                            <div>
                                <p class="font-medium">Submit Request</p>
                                <p class="text-blue-600">Fill out this form with your details and equipment needs</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-2 text-left">
                            <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                            <div>
                                <p class="font-medium">Verify Email</p>
                                <p class="text-blue-600">We will send a 6-digit verification code to your email. You will enter it on the verification page to continue.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-2 text-left">
                            <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                            <div>
                                <p class="font-medium">Admin Review</p>
                                <p class="text-blue-600">Your request will be reviewed by our staff</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-2 text-left">
                            <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                            <div>
                                <p class="font-medium">Approval & Pickup</p>
                                <p class="text-blue-600">You'll receive updates on your email. Pick up and return items on schedule to avoid penalties.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <form id="reservationForm" method="POST" action="/reservations" class="space-y-6 text-left max-w-5xl mx-auto w-full">
                <input type="hidden" name="cart_data" value='${JSON.stringify(Array.isArray(L)?L:[])}'>
                
                <!-- Personal Details -->
                <div class="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900">Personal Details</h4>
                    </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input type="text" name="name" id="name" required
                                   class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white"
                                   value="${(window.currentUserName||"").replace(/"/g,"&quot;")}">
                    </div>
                    <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</nlabel>
                        <input type="email" name="email" id="email" required
                                   class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white"
                                   value="${(window.currentUserEmail||"").replace(/"/g,"&quot;")}">
                    </div>
                    <div>
                        <label for="contact_number" class="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                            <input type="tel" name="contact_number" id="contact_number" required placeholder="09123456789"
                                   class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white">
                    </div>
                    <div>
                        <label for="department" class="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                        <select name="department" id="department" required 
                                   class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white"
                                onchange="document.getElementById('department_other_wrap').classList.toggle('hidden', this.value !== 'Other')">
                            <option value="">Select department...</option>
                            <option value="SBAA">SBAA</option>
                            <option value="SCJPS">SCJPS</option>
                            <option value="SOD">SOD</option>
                            <option value="SEA">SEA</option>
                            <option value="SIT">SIT</option>
                            <option value="SOL">SOL</option>
                            <option value="SNS">SNS</option>
                            <option value="SON">SON</option>
                            <option value="STELA">STELA</option>
                            <option value="Other">Other</option>
                        </select>
                        <div id="department_other_wrap" class="mt-2 hidden">
                            <input type="text" name="department_other" id="department_other" placeholder="Please specify department"
                                       class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white">
                        </div>
                        <div class="field-error-message text-red-600 text-sm mt-1 hidden"></div>
                        </div>
                    </div>
                </div>

                <!-- Date & Time -->
                <div class="bg-gradient-to-r from-gray-50 to-green-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900">Date & Time</h4>
                    </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="borrow_date" class="block text-sm font-medium text-gray-700 mb-2">Borrow Date *</label>
                        <input type="date" name="borrow_date" id="borrow_date" required 
                               min="${o}"
                                   max="${(()=>{const s=new Date;return s.setHours(0,0,0,0),s.setDate(s.getDate()+6),s.toISOString().slice(0,10)})()}"
                                   class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white">
                        <p class="mt-1 text-sm text-gray-500">Please choose from the dates available on the calendar.</p>
                        <div class="field-error-message text-red-600 text-sm mt-1 hidden"></div>
                    </div>
                    
                    <div>
                        <label for="return_date" class="block text-sm font-medium text-gray-700 mb-2">Return Date *</label>
                        <input type="date" name="return_date" id="return_date" required 
                               min="${o}"
                                   class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white">
                        <p class="mt-1 text-sm text-gray-500">Up to 7 days from your chosen borrow date.</p>
                        <div class="field-error-message text-red-600 text-sm mt-1 hidden"></div>
                    </div>
                </div>
                    <div class="flex flex-col md:flex-row md:space-x-6 mt-4">
                    <div class="md:w-1/2">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Borrow Time</label>
                        <div class="flex gap-2">
                                <select id="borrow_hour" class="w-20 px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white" onchange="updateHiddenTimesAndValidate()">
                                ${Array.from({length:12},(s,i)=>`<option value="${String(i+1).padStart(2,"0")}">${i+1}</option>`).join("")}
                            </select>
                                <select id="borrow_minute" class="w-20 px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white" onchange="updateHiddenTimesAndValidate()">
                                ${[0,5,10,15,20,25,30,35,40,45,50,55].map(s=>`<option value="${String(s).padStart(2,"0")}">${String(s).padStart(2,"0")}</option>`).join("")}
                            </select>
                                <select id="borrow_period" class="w-24 px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white" onchange="updateHiddenTimesAndValidate()">
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                        <input type="hidden" name="borrow_time" id="borrow_time">
                        <div id="borrow_time_error" class="text-red-600 text-sm mt-1 hidden"></div>
                    </div>
                    <div class="md:w-1/2 mt-4 md:mt-0">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Return Time</label>
                        <div class="flex gap-2">
                                <select id="return_hour" class="w-20 px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white" onchange="updateHiddenTimesAndValidate()">
                                ${Array.from({length:12},(s,i)=>`<option value="${String(i+1).padStart(2,"0")}">${i+1}</option>`).join("")}
                            </select>
                                <select id="return_minute" class="w-20 px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white" onchange="updateHiddenTimesAndValidate()">
                                ${[0,5,10,15,20,25,30,35,40,45,50,55].map(s=>`<option value="${String(s).padStart(2,"0")}">${String(s).padStart(2,"0")}</option>`).join("")}
                            </select>
                                <select id="return_period" class="w-24 px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 bg-white" onchange="updateHiddenTimesAndValidate()">
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                        <input type="hidden" name="return_time" id="return_time">
                        <div id="return_time_error" class="text-red-600 text-sm mt-1 hidden"></div>
                    </div>
                </div>
                </div>

                <!-- Reservation & Additional Details -->
                <div class="bg-gradient-to-r from-gray-50 to-purple-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900">Reservation & Additional Details</h4>
                    </div>
                    <label for="reason_type" class="block text-sm font-medium text-gray-700 mb-2">Reason for Reservation *</label>
                    <select name="reason_type" id="reason_type" required 
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                            onchange="toggleCustomReasonModal()">
                        <option value="">Select a reason...</option>
                        <option value="PE Class">PE Class</option>
                        <option value="Sports Event">Sports Event</option>
                        <option value="Training Session">Training Session</option>
                        <option value="Research/Study">Research/Study</option>
                        <option value="Other">Other (Specify)</option>
                    </select>
                    <div class="field-error-message text-red-600 text-sm mt-1 hidden"></div>
                    <div id="custom_reason_div" class="hidden mt-3">
                        <label for="custom_reason" class="block text.sm font-medium text-gray-700 mb-2">Specify Purpose <span class="text-red-500">*</span></label>
                    <textarea name="custom_reason" id="custom_reason" rows="3" 
                              placeholder="Please specify the purpose of your reservation..."
                              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"></textarea>
                    <div class="field-error-message text-red-600 text-sm mt-1 hidden"></div>
                </div>
                    <div class="mt-3">
                    <label for="additional_details" class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                    <textarea name="additional_details" id="additional_details" rows="2" 
                              placeholder="Any additional information..."
                              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"></textarea>
                    <div class="field-error-message text-red-600 text-sm mt-1 hidden"></div>
                    </div>
                </div>
                
                <!-- Reservation Summary -->
                <div class="border-t pt-4">
                    <h4 class="font-medium text-gray-900 mb-2">Reservation Summary</h4>
                    <div class="space-y-2 text-sm text-gray-600">
                        ${n}
                    </div>
                </div>
            </form>
            <div class="flex flex-col sm:flex-row gap-3 sm:justify-between mt-8 pt-6 border-t border-gray-200">
                <button type="button" class="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-200 hover:shadow-md border border-gray-300" onclick="Swal.close()">
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    Cancel
                </button>
                <button type="button" id="submitReservationBtn" class="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none" onclick="submitReservationForm()">
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                    Submit Reservation
                </button>
            </div>
        `,showConfirmButton:!1,showCancelButton:!1,width:"90%",maxWidth:"800px",customClass:{popup:"swal-custom-popup"},didOpen:()=>{setTimeout(()=>{const C=document.querySelector(".swal2-popup #reservationForm");if(C){C.querySelectorAll(".field-error-message").forEach(b=>{b.classList.add("hidden"),b.innerHTML=""}),C.querySelectorAll(".border-red-500").forEach(b=>b.classList.remove("border-red-500"));const l=C.querySelector('[name="email"]');if(l&&l.value.trim()){const b=l.value.trim();/^[a-zA-Z0-9._%+-]+@(s\.ubaguio\.edu|e\.ubaguio\.edu)$/.test(b)&&(l.classList.remove("border-red-500"),D(l),console.log("Email validated as valid on modal open:",b))}}},100),window.updateHiddenTimesAndValidate=function(){const C=document.getElementById("borrow_hour")?.value,k=document.getElementById("borrow_minute")?.value,y=document.getElementById("borrow_period")?.value,l=document.getElementById("return_hour")?.value,b=document.getElementById("return_minute")?.value,x=document.getElementById("return_period")?.value;function a(v,w){let q=parseInt(v||"0",10)%12;return w==="PM"&&(q+=12),String(q).padStart(2,"0")}C&&k&&y&&(document.getElementById("borrow_time").value=`${a(C,y)}:${k}`),l&&b&&x&&(document.getElementById("return_time").value=`${a(l,x)}:${b}`);try{let K=function(O,F){O&&D(O),F&&(F.textContent="",F.classList.add("hidden"))},P=function(O,F,te){O&&B(O,te),F&&(F.textContent=te,F.classList.remove("hidden"))};var m=K,p=P;const v=document.querySelector(".swal2-popup #reservationForm");if(!v)return;let w=null;const q=new Date(v.borrow_date.value),T=new Date(v.return_date.value),M=document.getElementById("borrow_time")?.value,S=document.getElementById("return_time")?.value,X=480,G=1020,j=toMinutes(M),A=toMinutes(S),Z=document.getElementById("borrow_time_error"),N=document.getElementById("return_time_error"),ee=document.getElementById("borrow_minute")||document.getElementById("borrow_time"),V=document.getElementById("return_minute")||document.getElementById("return_time");K(ee,Z),K(V,N),j!==null&&(j<X||j>G)&&P(ee,Z,"Borrow time must be between 8:00 AM and 5:00 PM"),A!==null&&(A<X||A>G)&&P(V,N,"Return time must be between 8:00 AM and 5:00 PM"),j!==null&&A!==null&&q.toDateString()===T.toDateString()&&(A<=j?P(V,N,"Return time must be after borrow time"):A-j<30&&P(V,N,"At least 30 minutes difference required"))}catch{}};const s=document.getElementById("toggleReservationDetails"),i=document.getElementById("reservationDetailsContent"),c=document.getElementById("toggleIcon");s&&i&&c&&s.addEventListener("click",()=>{i.classList.contains("hidden")?(i.classList.remove("hidden"),c.style.transform="rotate(180deg)"):(i.classList.add("hidden"),c.style.transform="rotate(0deg)")});const g=document.getElementById("borrow_date"),u=document.getElementById("return_date"),d=new Date,f=new Date(d.getFullYear(),d.getMonth(),d.getDate()),_=new Date(d.getFullYear(),d.getMonth(),d.getDate()+7),E=new Date(d.getFullYear(),d.getMonth()+1,0);new Date(Math.min(_.getTime(),E.getTime()));const h=C=>C.toISOString().split("T")[0];if(g&&u){g.min=h(f);const C=()=>{const k=g.value?new Date(g.value):f,y=new Date(k.getFullYear(),k.getMonth(),k.getDate()+7),l=new Date(Math.min(E.getTime(),y.getTime())),x=h(k),a=h(l);u.min=x,u.max=a,u.value&&(u.value<x||u.value>a)&&(u.value="")};g.addEventListener("change",C),g.value="",u.value="",C(),u.addEventListener("change",()=>{const k=u.parentElement.querySelector(".field-error-message"),y=g.value?new Date(g.value):null,l=u.value?new Date(u.value):null;let b="";!y||!l?b="":l<y?b="Return date cannot be before borrow date.":l-y>10080*60*1e3+1e3&&(b="Return date can be at most 7 days after the borrow date."),b?(k&&(k.textContent=b,k.classList.remove("hidden")),u.classList.add("border-red-500")):(k&&k.classList.add("hidden"),u.classList.remove("border-red-500"))})}const I=document.querySelector(".swal2-popup #reservationForm");if(window.removeFromReservationSummary=function(C){if(typeof C!="number"||!L[C])return;const k=L.splice(C,1)[0];if(H(),L.length===0){Swal.close(),U("Your reservation is now empty");return}const y=document.querySelector(".swal2-popup .space-y-2.text-sm.text-gray-600");if(y){let b="";L.forEach((x,a)=>{b+=`
                            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-200 mb-2">
                                <div class="flex items-center space-x-3">
                                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                    </div>
                                    <div>
                                        <p class="font-medium text-gray-900">${x.name}</p>
                                        <p class="text-sm text-gray-500">Quantity: ${x.quantity}</p>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">${x.quantity} item${x.quantity>1?"s":""}</span>
                                    <button type="button" class="ml-2 text-gray-400 hover:text-red-600" aria-label="Remove item" onclick="removeFromReservationSummary(${a})">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            </div>`}),y.innerHTML=b}const l=document.querySelector('.swal2-popup #reservationForm [name="cart_data"]');l&&(l.value=JSON.stringify(L)),U(`${k.name} removed from reservation`,"Reservation Updated")},I){I.querySelectorAll("input, textarea").forEach(l=>{l.addEventListener("blur",()=>{$(l),re()}),l.addEventListener("input",()=>{l.classList.contains("border-red-500")&&(l.classList.remove("border-red-500"),D(l)),l.name==="contact_number"&&(l.value=l.value.replace(/\D/g,""),l.value.length>11?(l.value=l.value.substring(0,11),l.classList.add("border-red-500"),B(l,"Contact number must be exactly 11 digits")):(l.classList.remove("border-red-500"),D(l)),setTimeout(()=>$(l),300)),l.name==="email"&&(l.classList.remove("border-red-500"),D(l),setTimeout(()=>{const b=l.value.trim(),x=/^[a-zA-Z0-9._%+-]+@(s\.ubaguio\.edu|e\.ubaguio\.edu)$/;console.log("Email validation:",{value:b,isValid:x.test(b)}),b&&!x.test(b)?(console.log("Email invalid, showing error"),l.classList.add("border-red-500"),B(l,"Please use your University of Baguio email format.")):b&&x.test(b)&&(console.log("Email valid, ensuring no error"),l.classList.remove("border-red-500"),D(l))},500))}),l.addEventListener("change",()=>{$(l),re()}),l.name==="email"&&(l.addEventListener("focus",()=>{l.classList.remove("border-red-500"),D(l)}),l.addEventListener("blur",()=>{const b=l.value.trim(),x=/^[a-zA-Z0-9._%+-]+@(s\.ubaguio\.edu|e\.ubaguio\.edu)$/;b&&!x.test(b)?(l.classList.add("border-red-500"),B(l,"Please use your University of Baguio email format.")):b&&x.test(b)&&(l.classList.remove("border-red-500"),D(l))}))});const k=I.querySelector('[name="borrow_date"]'),y=I.querySelector('[name="return_date"]');k&&y&&k.addEventListener("change",function(){const l=this.value,b=new Date(l),x=new Date(l);if(x.setDate(x.getDate()+7),y.min=b.toISOString().split("T")[0],y.max=x.toISOString().split("T")[0],y.value){const a=new Date(y.value);(a<new Date(l)||a>x)&&(y.value="",y.classList.remove("border-red-500"),D(y))}$(k),$(y)})}ye()},customClass:{popup:"swal-reservation-form"}})}function ae(){console.log("submitReservationForm function called");const e=document.querySelector(".swal2-popup #reservationForm");if(console.log("Form found:",e),!e){console.error("Form not found in modal"),Swal.fire({icon:!1,buttonsStyling:!1,html:`
                <div class="bg-red-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                    <h2 class="text-xl font-bold text-center">Form Error</h2>
                </div>
                <div class="text-center">
                    <div class="mb-4">
                        <div class="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-700">Reservation form not found. Please refresh the page and try again.</p>
                </div>
                <div class="flex justify-center mt-6">
                    <button type="button" class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                        OK
                    </button>
                </div>
            `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}});return}W();const r=["name","email","contact_number","department","borrow_date","return_date","reason"];let t=!0,o=null,n=[];r.forEach(a=>{const m=e.querySelector(`[name="${a}"]`);m&&(m.value.trim()?(m.classList.remove("border-red-500"),D(m)):(m.classList.add("border-red-500"),B(m,"This field is required"),o||(o=m),t=!1,n.push(`${Q(a)} is required`)))});const s=e.querySelector('[name="department"]'),i=e.querySelector('[name="department_other"]');s&&s.value==="Other"&&(!i||!i.value.trim()?(i&&(i.classList.add("border-red-500"),B(i,"Please specify the department"),o||(o=i)),t=!1,n.push('Please specify the department when "Other" is selected')):i&&(i.classList.remove("border-red-500"),D(i)));const c=e.querySelector('[name="email"]');if(c&&c.value.trim()){const a=c.value.trim(),m=/^[a-zA-Z0-9._%+-]+@(s\.ubaguio\.edu|e\.ubaguio\.edu)$/;console.log("Form submission email validation:",{email:a,isValid:m.test(a)}),m.test(a)?(c.classList.remove("border-red-500"),D(c)):(c.classList.add("border-red-500"),B(c,"Please use your University of Baguio email format."),o||(o=c),t=!1,n.push("Please use your University of Baguio email format."))}const g=e.querySelector('[name="contact_number"]');if(g&&g.value.trim()){const a=g.value.trim();/^09[0-9]{9}$/.test(a)||(g.classList.add("border-red-500"),B(g,"Contact number must be 11 digits starting with 09 (Philippines format)"),o||(o=g),t=!1,n.push("Contact number must be 11 digits starting with 09"))}const u=new Date(e.borrow_date.value),d=new Date(e.return_date.value),f=document.getElementById("borrow_hour");if(f){const a=document.getElementById("borrow_minute").value,m=document.getElementById("borrow_period").value,p=v=>{let w=parseInt(v,10)%12;return m==="PM"&&(w+=12),String(w).padStart(2,"0")};document.getElementById("borrow_time").value=`${p(f.value)}:${a}`}const _=document.getElementById("return_hour");if(_){const a=document.getElementById("return_minute").value,m=document.getElementById("return_period").value,p=v=>{let w=parseInt(v,10)%12;return m==="PM"&&(w+=12),String(w).padStart(2,"0")};document.getElementById("return_time").value=`${p(_.value)}:${a}`}updateHiddenTimesAndValidate();const E=new Date;E.setHours(0,0,0,0);const h=new Date(E);h.setDate(h.getDate()+1);const I=new Date(u);if(I.setHours(0,0,0,0),I<E){const a=e.querySelector('[name="borrow_date"]');a.classList.add("border-red-500"),B(a,"Please select today or a future date"),o||(o=a),t=!1,n.push("Please select today or a future date")}if(d<u){const a=e.querySelector('[name="return_date"]');a.classList.add("border-red-500"),B(a,"Return date cannot be before borrow date"),o||(o=a),t=!1,n.push("Return date cannot be before borrow date")}else if(d>new Date(u.getTime()+10080*60*1e3)){const a=document.getElementById("borrow_time")?.value,m=document.getElementById("return_time")?.value,p=480,v=1020,w=toMinutes(a),q=toMinutes(m);if(w!==null){const M=document.getElementById("borrow_minute")||document.getElementById("borrow_time"),S=document.getElementById("borrow_time_error");w<p||w>v?(B(M,"Borrow time must be between 8:00 AM and 5:00 PM"),S&&(S.textContent="Borrow time must be between 8:00 AM and 5:00 PM",S.classList.remove("hidden")),o||(o=M),t=!1,n.push("Borrow time must be between 8:00 AM and 5:00 PM")):(D(M),S&&(S.textContent="",S.classList.add("hidden")))}if(q!==null){const M=document.getElementById("return_minute")||document.getElementById("return_time"),S=document.getElementById("return_time_error");q<p||q>v?(B(M,"Return time must be between 8:00 AM and 5:00 PM"),S&&(S.textContent="Return time must be between 8:00 AM and 5:00 PM",S.classList.remove("hidden")),o||(o=M),t=!1,n.push("Return time must be between 8:00 AM and 5:00 PM")):(D(M),S&&(S.textContent="",S.classList.add("hidden")))}if(w!==null&&q!==null&&u.toDateString()===d.toDateString()){if(q<=w){const M=document.getElementById("return_minute")||document.getElementById("return_time");B(M,"Return time must be after borrow time");const S=document.getElementById("return_time_error");S&&(S.textContent="Return time must be after borrow time",S.classList.remove("hidden")),o||(o=M),t=!1,n.push("Return time must be after borrow time")}else if(q-w<30){const M=document.getElementById("return_minute")||document.getElementById("return_time");B(M,"For same-day reservations, allow at least 30 minutes between times");const S=document.getElementById("return_time_error");S&&(S.textContent="At least 30 minutes difference required",S.classList.remove("hidden")),o||(o=M),t=!1,n.push("At least 30 minutes difference required for same-day times")}}const T=e.querySelector('[name="return_date"]');T.classList.add("border-red-500"),B(T,"Return date cannot be more than 7 days after borrow date"),o||(o=T),t=!1,n.push("Return date cannot be more than 7 days after borrow date")}if(!t){Y(n),o&&o.focus(),o&&o.scrollIntoView({behavior:"smooth",block:"center"});return}console.log("Form validation passed, submitting...");const C=()=>{const a=e.querySelector('[name="reason_type"]'),m=e.querySelector('[name="custom_reason"]');let p=e.querySelector('[name="reason"]');p||(p=document.createElement("input"),p.type="hidden",p.name="reason",e.appendChild(p));let v=a?a.value||"":p.value||"";return a&&a.value==="Other"&&m&&m.value.trim()&&(v=m.value.trim()),p.value=v,console.log("[Submit] Ensured reason value:",v),v},k=()=>{try{C()}catch{}Swal.fire({title:"Submitting Reservation...",text:"Please wait while we process your request.",allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,didOpen:()=>{Swal.showLoading()},customClass:{popup:"swal-custom-popup"}});const a=new FormData(e);fetch("/reservations/initiate",{method:"POST",headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content"),Accept:"application/json"},body:a}).then(m=>m.ok?m.json():m.json().then(p=>{throw new Error(JSON.stringify(p))})).then(m=>{console.log("Response received:",m),m.success&&m.redirect_url&&(window.location.href=m.redirect_url)}).catch(m=>{console.error("Error:",m),Swal.close();let p="An error occurred while submitting your reservation. Please try again.",v=!1;try{const w=JSON.parse(m.message);if(w.errors){v=!0,W(),Object.keys(w.errors).forEach(M=>{const S=e.querySelector(`[name="${M}"]`);S&&(S.classList.add("border-red-500"),B(S,w.errors[M][0]))});const q=[];Object.keys(w.errors).forEach(M=>{w.errors[M].forEach(S=>{q.push(`${Q(M)}: ${S}`)})}),Y(q);const T=e.querySelector(".border-red-500");T&&(T.focus(),T.scrollIntoView({behavior:"smooth",block:"center"}));return}else w.message&&(p=w.message)}catch(w){console.error("Error parsing error data:",w)}v||Y([p])})};try{const a=e.querySelector('[name="cart_data"]');if(a&&typeof L<"u"){const m=Array.isArray(L)?L:[];a.value=JSON.stringify(m)}}catch{}try{C()}catch{}const y=new FormData,l=a=>(e.querySelector(`[name="${a}"]`)||{}).value||"";y.append("email",l("email")),y.append("borrow_date",l("borrow_date")),y.append("return_date",l("return_date")),y.append("borrow_time",l("borrow_time")),y.append("return_time",l("return_time")),y.append("reason",l("reason")),y.append("department",l("department")),y.append("department_other",l("department_other")),y.append("cart_data",l("cart_data"));try{console.log("[DupCheck] Starting duplicate check with payload:");const a={};["email","borrow_date","return_date","borrow_time","return_time","reason","department","department_other","cart_data"].forEach(m=>a[m]=y.get(m)),console.log("[DupCheck] Payload",a)}catch(a){console.warn("[DupCheck] Debug log failed",a)}Swal.fire({title:"Checking for duplicate reservation...",text:"Please wait a moment.",allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,didOpen:()=>Swal.showLoading(),customClass:{popup:"swal-custom-popup"}});const b=new Promise(a=>setTimeout(a,700)),x=fetch("/reservations/check-duplicate",{method:"POST",headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content"),Accept:"application/json","X-Requested-With":"XMLHttpRequest"},body:y}).then(a=>a.json());Promise.all([x,b]).then(([a])=>{if(Swal.close(),console.log("[DupCheck] Response",a),a&&a.is_duplicate){Swal.fire({title:"",html:`
                    <div class="bg-orange-500 text-white p-4 -m-6 -mt-6 mb-4 rounded-t-lg" style="margin-left:-24px;margin-right:-24px;margin-top:-24px;">
                        <h2 class="text-xl font-bold text-center">Duplicate Reservation Detected</h2>
                    </div>
                    <div class="text-center">
                        <div class="mb-4 flex justify-center">
                            <div class="w-16 h-16 mb-2 rounded-full bg-orange-100 flex items-center justify-center">
                                <svg class="w-9 h-9 text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 102 0 1 1 0 00-2 0zm1-8a1 1 0 00-1 1v5a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-700 text-lg font-medium">You already have a similar reservation</p>
                        <p class="text-gray-600 text-sm mt-2">${a.message||"A similar reservation appears to exist with the same details."}</p>
                        <p class="text-gray-600 text-sm mt-1">Do you want to proceed anyway?</p>
                    </div>
                    <div class="flex justify-between mt-6">
                        <button type="button" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors transform hover:scale-105" onclick="Swal.close()">Cancel</button>
                        <button type="button" class="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105" id="dupProceedBtn">Proceed</button>
                    </div>
                `,showConfirmButton:!1,customClass:{popup:"swal-custom-popup"}}).then(()=>{}),setTimeout(()=>{const m=document.getElementById("dupProceedBtn");m&&m.addEventListener("click",()=>{let p=e.querySelector('[name="proceed_with_duplicate"]');p||(p=document.createElement("input"),p.type="hidden",p.name="proceed_with_duplicate",e.appendChild(p)),p.value="1",console.log("[DupCheck] Proceeding despite duplicate (proceed_with_duplicate=1)"),k()})},0);return}Swal.fire({title:"",html:`
                <div class="bg-blue-500 text-white p-4 -m-6 -mt-6 mb-4 rounded-t-lg" style="margin-left:-24px;margin-right:-24px;margin-top:-24px;">
                    <h2 class="text-xl font-bold text-center">Confirm Reservation</h2>
                </div>
                <div class="text-center">
                    <div class="mb-4">
                        <div class="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-700 text-lg font-medium">Are you ready to submit your reservation?</p>
                    <p class="text-gray-600 text-sm mt-2">Please review your reservation details before proceeding.</p>
                </div>
                <div class="flex justify-between mt-6">
                    <button type="button" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors transform hover:scale-105" onclick="Swal.close()">Cancel</button>
                    <button type="button" class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105" id="confirmSubmitBtn">Submit Reservation</button>
                </div>
            `,showConfirmButton:!1,customClass:{popup:"swal-custom-popup"}}),setTimeout(()=>{const m=document.getElementById("confirmSubmitBtn");m&&m.addEventListener("click",()=>k())},0)}).catch(a=>{console.error("[DupCheck] Request failed, proceeding anyway",a),Swal.close(),k()})}function we(){const e=document.getElementById("reservationModal");e&&e.classList.add("hidden")}function W(){document.querySelectorAll(".swal2-popup .field-error-message, .swal2-popup .form-error-summary").forEach(t=>t.remove()),document.querySelectorAll(".swal2-popup .border-red-500").forEach(t=>t.classList.remove("border-red-500"))}function re(){const e=document.querySelector(".swal2-popup #formErrorSummary");e&&(e.classList.add("hidden"),e.innerHTML="")}function B(e,r){const t=e.parentNode.querySelector(".field-error-message");if(t){let o=r;r.includes("required")?o="This field is required to complete your reservation":r.includes("email")?o="Please use your University of Baguio email format":r.includes("contact")?o="Please enter a valid 11-digit Philippine mobile number":r.includes("date")||r.includes("characters")?o=r:r.includes("ID")&&(o="Please upload a clear photo of your University ID"),t.innerHTML=`
            <div class="flex items-start text-red-600 text-sm mt-2 p-2 bg-red-50 rounded-md border border-red-200">
                <span class="leading-relaxed">${o}</span>
            </div>
        `,t.classList.remove("hidden")}}function D(e){const r=e.parentNode.querySelector(".field-error-message");r&&(r.classList.add("hidden"),r.innerHTML="",console.log("Field error cleared for:",e.name));const t=e.parentNode;t&&t.querySelectorAll("div").forEach(n=>{n.textContent&&(n.textContent.includes("University of Baguio email")||n.textContent.includes("email format")||n.textContent.includes("Please use your University of Baguio email format"))&&(n.style.display="none",n.innerHTML="",n.classList.add("hidden"),console.log("Cleared error div:",n.textContent))})}function Y(e){const r=document.querySelector(".swal2-popup #formErrorSummary");r&&(e.filter(t=>t.includes("is required")),e.filter(t=>!t.includes("is required")),r.innerHTML=`
            <div class="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-r-lg p-4 mb-6 shadow-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-red-800">
                            Please fill in all required fields to continue.
                        </p>
                    </div>
                </div>
            </div>
        `,r.classList.remove("hidden"))}function Q(e){return{name:"Full Name",email:"Email",contact_number:"Contact Number",department:"Department",borrow_date:"Borrow Date",return_date:"Return Date",reason:"Reason for Reservation"}[e]||e}function $(e){const r=e.name,t=e.value?e.value.trim():"";D(e),e.classList.remove("border-red-500");let o=!0,n="";if(e.type==="file")e.hasAttribute("required")&&(!e.files||e.files.length===0)&&(o=!1,n="This field is required");else if(e.hasAttribute("required")&&!t)o=!1,n="This field is required";else if(t)switch(r){case"name":t.length<2&&(o=!1,n="Please enter your full name (at least 2 characters)");break;case"email":/^[a-zA-Z0-9._%+-]+@(s\.ubaguio\.edu|e\.ubaguio\.edu)$/.test(t)||(o=!1,n="Please use your University of Baguio email format.");break;case"contact_number":/^09[0-9]{9}$/.test(t)||(o=!1,n="Please enter a valid Philippine mobile number (11 digits starting with 09)");break;case"borrow_date":const c=new Date(t),g=new Date;g.setHours(0,0,0,0);const u=new Date(c);u.setHours(0,0,0,0),u<g&&(o=!1,n="Please select today or a future date");break;case"borrow_time":case"return_time":break;case"return_date":const d=new Date(t),f=e.closest("form").querySelector('[name="borrow_date"]');if(f&&f.value){const _=new Date(f.value),E=new Date(_);E.setDate(E.getDate()+7),d<_?(o=!1,n="Return date cannot be before your borrow date"):d>E&&(o=!1,n="Maximum rental period is 7 days")}else e.hasAttribute("required")&&(o=!1,n="This field is required");break;case"reason":t.length<10&&(o=!1,n="Please provide more details about why you need this equipment (at least 10 characters)");break}return o||(e.classList.add("border-red-500"),B(e,n)),o}function xe(e,r,t){console.log("Adding to wishlist:",e,r);const o=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");if(!o){console.error("CSRF token not found"),R("Error: CSRF token not found","error");return}fetch(`/wishlist/add/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":o}}).then(n=>n.json().then(s=>({status:n.status,data:s}))).then(({status:n,data:s})=>{if(s.success){const i=t.target.closest("button");if(i){const c=i.querySelector("svg");if(c){const g=c.outerHTML;c.innerHTML='<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>',c.style.fill="#f59e0b",i.className="wishlist-btn inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-300 text-amber-700 rounded-lg cursor-not-allowed";const u=document.createElement("span");u.textContent="Added!",u.className="text-xs font-medium",i.innerHTML="",i.appendChild(c),i.appendChild(u),i.disabled=!0,i.style.cursor="not-allowed",setTimeout(()=>{i.innerHTML=g,i.disabled=!1,i.style.cursor="pointer"},3e3)}}Swal.fire({icon:!1,html:`
                    <div class="bg-green-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                        <h2 class="text-xl font-bold text-center">Added to Wishlist</h2>
                    </div>
                    <div class="text-center">
                        <div class="mb-4">
                            <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4">Equipment added to wishlist successfully!</p>
                    </div>
                    <div class="flex justify-center mt-6">
                        <button type="button" class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105" style="border: none !important; outline: none !important;" onclick="Swal.close();">
                            OK
                        </button>
                    </div>
                `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}})}else if(n===400&&s.message.includes("already added")){const i=t.target.closest("button");if(i){const c=i.querySelector("svg");if(c){c.innerHTML='<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>',c.style.fill="#f59e0b",i.className="wishlist-btn inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-300 text-amber-700 rounded-lg cursor-not-allowed";const g=document.createElement("span");g.textContent="Already Added",g.className="text-xs font-medium",i.innerHTML="",i.appendChild(c),i.appendChild(g),i.disabled=!0}}z("Already Added",s.message)}else z("Error",s.message||"Error adding to wishlist")}).catch(n=>{console.error("Error:",n),z("Error","Error adding to wishlist: "+n.message)})}function Ee(e,r,t){t&&(t.preventDefault(),t.stopPropagation()),typeof ne=="function"?ne(e,r):z("Error","Notification feature is unavailable at the moment.")}function ne(e,r){Swal.fire({icon:!1,buttonsStyling:!1,html:`
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4">
                <div class="flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 17h5l-2-2V11a6 6 0 10-12 0v4l-2 2h5a3 3 0 006 0z"/></svg>
                    <h2 class="text-base sm:text-lg font-bold">Get Notified When Available</h2>
                </div>
            </div>
            <div class="text-center">
                <div class="mb-4">
                    <div class="mx-auto w-16 h-16 bg-transparent flex items-center justify-center mb-3">
                        <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 17h5l-2-2V11a6 6 0 10-12 0v4l-2 2h5a3 3 0 006 0z"/></svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">${r}</h3>
                    <p class="text-sm text-gray-600 mb-4">This equipment is currently unavailable. Enter your UB email to get notified when it becomes available.</p>
                </div>
                <div class="text-left space-y-4">
                    
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input type="text" id="wishlistEmail" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="12345678@s.ubaguio.edu">
                        <p id="wishlistEmailError" class="mt-1 text-xs text-red-600 hidden"></p>
                        <div class="mt-1 text-xs text-gray-500">Please use your University of Baguio email format</div>
                    </div>
                    
                </div>
                <div class="flex items-center justify-between mt-6">
                    <button type="button" class="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors" onclick="Swal.close()">Cancel</button>
                    <button type="button" class="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" id="subscribeNotifyBtn">Get Notified</button>
                </div>
            </div>
        `,showConfirmButton:!1,customClass:{popup:"swal-custom-popup"},didOpen:()=>{const t=document.getElementById("wishlistEmail"),o=document.getElementById("wishlistEmailError"),n=document.getElementById("subscribeNotifyBtn"),s=()=>{const i=t.value.trim();return/^[0-9]{8}@[se]\.ubaguio\.edu$/.test(i)?(o.textContent="",o.classList.add("hidden"),t.classList.remove("border-red-500"),!0):(o.textContent="Please use a valid UB email (e.g., 12345678@s.ubaguio.edu or 12345678@e.ubaguio.edu).",o.classList.remove("hidden"),t.classList.add("border-red-500"),!1)};t.addEventListener("input",s),n.addEventListener("click",()=>{s()&&se(e,r,null,t.value.trim(),null)})}}).then(t=>{if(t.isConfirmed){const{name:o,email:n,contact:s}=t.value;se(e,r,o,n,s)}})}function se(e,r,t,o,n){Swal.fire({title:"Submitting...",text:"Please wait while we process your request.",allowOutsideClick:!1,showConfirmButton:!1,didOpen:()=>{Swal.showLoading()}});const s=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");if(!s){Swal.fire({icon:!1,buttonsStyling:!1,html:`
                <div class="bg-red-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                    <h2 class="text-xl font-bold text-center">Error</h2>
                </div>
                <div class="text-center">
                    <div class="mb-4">
                        <div class="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-700">CSRF token not found. Please refresh the page and try again.</p>
                </div>
                <div class="flex justify-center mt-6">
                    <button type="button" class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                        OK
                    </button>
                </div>
            `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}});return}fetch(`/wishlist/${e}/notify`,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s},body:JSON.stringify({name:t,email:o,contact:n||null})}).then(i=>i.json()).then(i=>{i.success?Swal.fire({icon:!1,buttonsStyling:!1,html:`
                    <div class="bg-green-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                        <h2 class="text-xl font-bold text-center">Successfully Subscribed!</h2>
                    </div>
                    <div class="text-center">
                        <div class="mb-4">
                            <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-700">You'll be notified at ${o} when ${r} becomes available.</p>
                    </div>
                    <div class="flex justify-center mt-6">
                        <button type="button" class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                            OK
                        </button>
                    </div>
                `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}}):Swal.fire({icon:!1,buttonsStyling:!1,html:`
                    <div class="bg-red-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                        <h2 class="text-xl font-bold text-center">Subscription Failed</h2>
                    </div>
                    <div class="text-center">
                        <div class="mb-4">
                            <div class="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-700">${i.message||"Failed to subscribe to notifications. Please try again."}</p>
                    </div>
                    <div class="flex justify-center mt-6">
                        <button type="button" class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                            OK
                        </button>
                    </div>
                `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}})}).catch(i=>{console.error("Error subscribing to wishlist notification:",i),Swal.fire({icon:!1,buttonsStyling:!1,html:`
                <div class="bg-red-500 text-white p-4 rounded-t-lg -m-6 -mt-6 mb-4" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                    <h2 class="text-xl font-bold text-center">Subscription Failed</h2>
                </div>
                <div class="text-center">
                    <div class="mb-4">
                        <div class="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-gray-700">An error occurred while subscribing. Please try again.</p>
                </div>
                <div class="flex justify-center mt-6">
                    <button type="button" class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                        OK
                    </button>
                </div>
            `,showConfirmButton:!1,showCancelButton:!1,customClass:{popup:"swal-custom-popup"}})})}function le(e){const r=document.getElementById("equipmentDetailsModal");if(!r){console.error("Equipment details modal not found");return}r.dataset.equipmentId=e;const t=document.getElementById("modalEquipmentName"),o=document.getElementById("modalEquipmentCategory"),n=document.getElementById("modalEquipmentType"),s=document.getElementById("modalEquipmentCondition"),i=document.getElementById("conditionProgress"),c=document.getElementById("modalEquipmentQuantity"),g=document.getElementById("modalEquipmentDescription"),u=document.getElementById("availabilityBadge");t&&(t.textContent="Loading..."),o&&(o.textContent="Loading..."),n&&(n.textContent="Loading..."),s&&(s.textContent="Loading..."),c&&(c.textContent="Loading..."),g&&(g.textContent="Loading..."),ce(),fetch(`/equipment/${e}/details?t=${Date.now()}`).then(d=>d.json()).then(d=>{if(d.success){const f=d.equipment;if(t&&(t.textContent=f.name),o&&(o.textContent=f.category.name),n&&(n.textContent=f.equipment_type?f.equipment_type.name:"Not specified"),s&&i){s.textContent=f.condition;let E=100,h="bg-green-500";switch(f.condition.toLowerCase()){case"excellent":E=100,h="bg-green-500";break;case"very good":E=80,h="bg-green-400";break;case"good":E=60,h="bg-yellow-500";break;case"fair":E=40,h="bg-yellow-400";break;case"poor":E=20,h="bg-red-500";break;default:E=100,h="bg-gray-300"}i.className=`h-2 rounded-full ${h}`,i.style.width=`${E}%`}g&&(g.textContent=f.description||"No description available");const _=document.getElementById("modalEquipmentImages");return _&&(_.innerHTML="",f.images&&f.images.length>0?f.images.forEach(E=>{const h=document.createElement("img");h.src=E.image_path,h.alt=f.name,h.className="w-full h-24 object-cover rounded-lg shadow-sm",_.appendChild(h)}):_.innerHTML='<p class="text-sm text-gray-500 col-span-2 text-center py-4">No images available.</p>'),fetch(`/equipment/${e}/instances?t=${Date.now()}`)}else throw new Error(d.message||"Failed to fetch equipment details")}).then(d=>d.json()).then(d=>{console.log("Equipment instances data:",d);const f=document.getElementById("modalEquipmentInstancesBody");if(f)if(f.innerHTML="",d.instances&&d.instances.length>0){const _=d.instances.filter(h=>h.is_available).length,E=d.instances.length;if(c&&(c.textContent=`${_} of ${E}`),u){let h="Limited",I="bg-yellow-100 text-yellow-800";_===E?(h="Available",I="bg-green-100 text-green-800"):_===0&&(h="Unavailable",I="bg-red-100 text-red-800"),u.textContent=h,u.className=`px-2 py-1 rounded-full text-xs font-medium ${I}`}d.instances.forEach(h=>{const I=document.createElement("tr");I.className="hover:bg-gray-50 transition-colors duration-150",I.innerHTML=`
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <div class="text-sm font-bold text-gray-900">${h.instance_code}</div>
                                ${h.location?`<div class="text-xs font-medium text-blue-600">${h.location}</div>`:""}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${h.is_available?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}">
                                    ${h.is_available?"Available":"Borrowed"}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex px-2 py-1 text-xs font-medium rounded-full ${de(h.condition)}">${h.condition}</span>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                                ${h.notes||(h.is_available?"Available for reservation":"Currently borrowed")}
                            </td>
                        `,f.appendChild(I)})}else c&&(c.textContent="0 of 0"),u&&(u.textContent="Unavailable",u.className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800"),f.innerHTML='<tr><td colspan="4" class="px-6 py-8 whitespace-nowrap text-sm text-gray-500 text-center">No instances available for this equipment.</td></tr>'}).catch(d=>{console.error("Error fetching equipment details:",d),R("Error loading equipment details","error"),ue()})}function de(e){switch(e.toLowerCase()){case"excellent":return"bg-green-100 text-green-800";case"very good":return"bg-green-50 text-green-700";case"good":return"bg-yellow-100 text-yellow-800";case"fair":return"bg-orange-100 text-orange-800";case"poor":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}}function ce(){const e=document.getElementById("equipmentDetailsModal");e&&(e.classList.remove("hidden"),e.setAttribute("data-show","true"),setTimeout(()=>{e.classList.add("flex")},10))}function ue(){const e=document.getElementById("equipmentDetailsModal");e&&(e.setAttribute("data-show","false"),setTimeout(()=>{e.classList.add("hidden"),e.classList.remove("flex")},300))}function Se(e){if(!confirm("Are you sure you want to return this equipment instance?"))return;const r=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");if(!r){R("Error: CSRF token not found","error");return}fetch(`/equipment/instances/${e}/return`,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":r}}).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}).then(t=>{if(t.success){R("Equipment instance returned successfully!","success");const o=document.getElementById("equipmentDetailsModal")?.dataset.equipmentId;o&&le(o)}else R(t.message||"Error returning equipment instance","error")}).catch(t=>{console.error("Error:",t),R("Error returning equipment instance: "+t.message,"error")})}window.addToReservation=ve;window.addToWishlist=xe;window.notifyWhenAvailable=Ee;window.showEquipmentDetails=le;window.closeEquipmentDetailsModal=ue;window.closeReservationModal=we;window.removeFromReservation=J;window.returnEquipmentInstance=Se;window.showNotification=R;window.showEquipmentDetailsModal=ce;window.getConditionStyle=de;window.proceedToReservation=ie;window.removeFromModalReservation=he;window.clearReservation=ge;window.submitReservationForm=ae;window.toggleCustomReasonModal=function(){const e=document.getElementById("reason_type"),r=document.getElementById("custom_reason_div"),t=document.getElementById("custom_reason");e&&r&&t&&(e.value==="Other"?(r.classList.remove("hidden"),t.required=!0):(r.classList.add("hidden"),t.required=!1,t.value=""))};try{document.addEventListener("DOMContentLoaded",function(){window.location.pathname==="/"&&setTimeout(()=>{window.Swal&&(window.Swal.fire({buttonsStyling:!1,customClass:{popup:"swal-welcome-guide"},html:`
                        <div class="bg-red-600 text-white p-4 -m-6 -mt-6 mb-4" style="margin-left:-24px;margin-right:-24px;margin-top:-24px;">
                            <h2 class="text-xl font-bold text-center">Welcome to SEMS</h2>
                            <p class="text-center text-white/90 text-sm mt-1">A quick guide to reserving sports equipment</p>
                        </div>
                        <div class="text-left space-y-4">
                            <div class="flex items-start gap-3">
                                <div class="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                                <div>
                                    <p class="font-medium">Browse & Add</p>
                                    <p class="text-gray-600">Choose equipment and add quantities to your reservation. Availability updates in real time.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                                <div>
                                    <p class="font-medium">Submit Request</p>
                                    <p class="text-gray-600">Open "Complete Your Reservation" to set dates and details. You can reserve up to 7 days ahead.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                                <div>
                                    <p class="font-medium">Verify Email</p>
                                    <p class="text-gray-600">We will send a verification code to your email. You will enter it to continue.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                                <div>
                                    <p class="font-medium">Approval & Pickup</p>
                                    <p class="text-gray-600">You'll receive updates on your email. Pick up and return items on schedule to avoid penalties.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                                <div>
                                    <p class="font-medium">Keep in Mind</p>
                                    <ul class="text-gray-600 list-disc pl-5 space-y-1">
                                        <li>Use your U‑Baguio email (s./e. domains) for requests and notifications.</li>
                                        <li>Reservation and return times: 8:00 AM – 5:00 PM. Same‑day returns must be 30+ minutes after pickup.</li>
                                        <li>If an item is unavailable, tap the star icon to add it to your wishlist.</li>
                                        <li>Use the bell icon to receive an email when an unavailable item becomes available.</li>
                                        <li>During pickup, the PE Office may require a valid ID as collateral per borrowing policy.</li>
                                        <li>After pickup, you are responsible for the equipment until it is returned.</li>
                                        <li>Lost or damaged equipment may require replacement in line with policy.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center mt-6">
                            <button id="dismissGuideBtn" class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Got it</button>
                        </div>
                    `,showConfirmButton:!1,customClass:{popup:"swal-custom-popup"}}),document.addEventListener("click",function e(r){r.target&&r.target.id==="dismissGuideBtn"&&(window.Swal&&window.Swal.close(),document.removeEventListener("click",e))}))},300)})}catch(e){console.warn("Guide modal setup failed:",e)}
