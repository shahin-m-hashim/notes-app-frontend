import{u as c,a as m,b as u,c as p,r as g,j as e,d as x,$ as h,L as f,l as w}from"./index-_cp4kPxp.js";function N(){const i=c(),[n,a,l,o]=m(u(s=>[s.resetForm,s.authSlice.login,s.setLoginFormField,s.setShowPasswordValue])),t=p({mutationFn:w,onSuccess:()=>i("/")}),d=s=>{s.preventDefault(),t.mutate({email:a.email,password:a.password})},r=!a.email||!a.password||t.isPending;return g.useEffect(()=>()=>n("login"),[]),e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:d,className:"flex flex-col md:border-[rgb(218,218,218)] md:border items-center w-full gap-5 md:shadow-lg md:p-10 md:w-3/4 xl:w-1/2",children:[e.jsx("img",{alt:"website logo",className:"hidden w-1/2 h-10 md:block",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"}),e.jsxs("div",{className:"flex flex-col w-full gap-2",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-semibold text-[#475569]",children:"EMAIL"}),e.jsx("input",{id:"email",type:"text",name:"email",autoComplete:"off",placeholder:"Email",value:a.email,className:"w-full p-2 bg-[#e2e8f0] rounded-md",onChange:s=>l("email",s.target.value)})]}),e.jsxs("div",{className:"flex flex-col w-full gap-2",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-semibold text-[#475569]",children:"PASSWORD"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:"password",name:"password",placeholder:"Password",value:a.password,className:"w-full p-2 bg-[#e2e8f0] rounded-md",type:a.showPassword?"text":"password",onChange:s=>l("password",s.target.value)}),a.showPassword?e.jsx("button",{type:"button",className:"absolute -translate-y-1/2 top-1/2 right-2",onClick:()=>o("login",!1),children:e.jsx("img",{className:"size-6",alt:"hide password",src:"icons/eye-closed.svg"})}):e.jsx("button",{type:"button",className:"absolute -translate-y-1/2 top-1/2 right-2",onClick:()=>o("login",!0),children:e.jsx("img",{className:"size-6",alt:"show password",src:"icons/eye-opened.svg"})})]})]}),e.jsx("button",{type:"submit",disabled:r,className:x("bg-[#0b69ff] w-full p-2 text-white rounded-md flex justify-center",r?"opacity-60 cursor-not-allowed":"cursor-pointer"),children:t.isPending?e.jsx(h,{width:"20",height:"20",strokeColor:"black",animationDuration:"0.75"}):"Login"}),t.isError&&e.jsx("p",{className:"text-[#ff0b37] text-center",children:t.error.message})]}),e.jsx(f,{to:"/auth/signup",className:"text-[#0b69ff]",children:"Don't have an account? Register."})]})}export{N as default};
