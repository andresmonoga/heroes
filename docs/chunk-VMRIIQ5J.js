import {
  MatButton,
  MatFormField,
  MatIcon,
  MatInput,
  MatLabel,
  MaterialModule
} from "./chunk-5I32PRJY.js";
import {
  AuthService,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-INFC27TE.js";
import "./chunk-F6QFL7AI.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-PEADVLQM.js";

// src/app/auth/pages/layout-page/layout.component.ts
var _LayoutComponent = class _LayoutComponent {
};
_LayoutComponent.\u0275fac = function LayoutComponent_Factory(t) {
  return new (t || _LayoutComponent)();
};
_LayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 0, consts: [[1, "grid", "p-3"], [1, "col-12", "mt-5", "md:col-6", "md:col-offset-3", "md:mt-8"]], template: function LayoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [RouterOutlet] });
var LayoutComponent = _LayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src\\app\\auth\\pages\\layout-page\\layout.component.ts", lineNumber: 8 });
})();

// src/app/auth/pages/loging-page/loging-page.component.ts
var _LogingPageComponent = class _LogingPageComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  onLogin() {
    this.authService.login("andres@gmail.com", "123456").subscribe((user) => {
      this.router.navigate(["/"]);
    });
  }
};
_LogingPageComponent.\u0275fac = function LogingPageComponent_Factory(t) {
  return new (t || _LogingPageComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_LogingPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogingPageComponent, selectors: [["app-loging-page"]], decls: 18, vars: 0, consts: [[1, "flex", "flex-column"], [1, "text-lg", "mb-4"], ["type", "text", "matInput", "", "placeholder", "Nombre de Usuario"], ["type", "password", "matInput", "", "placeholder", "Contrase\xF1a"], ["mat-button", "", "mat-flat-button", "", "color", "primary", 3, "click"], [1, "flex", "justify-content-end", "mt-5"], ["routerLink", "/auth/register"]], template: function LogingPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field")(4, "mat-label");
    \u0275\u0275text(5, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field")(8, "mat-label");
    \u0275\u0275text(9, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 4);
    \u0275\u0275listener("click", function LogingPageComponent_Template_button_click_11_listener() {
      return ctx.onLogin();
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Ingresar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 5)(16, "a", 6);
    \u0275\u0275text(17, "\xBFNo tienes cuenta?");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [RouterLink, MatButton, MatFormField, MatLabel, MatIcon, MatInput] });
var LogingPageComponent = _LogingPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogingPageComponent, { className: "LogingPageComponent", filePath: "src\\app\\auth\\pages\\loging-page\\loging-page.component.ts", lineNumber: 10 });
})();

// src/app/auth/pages/register-page/register-page.component.ts
var _RegisterPageComponent = class _RegisterPageComponent {
};
_RegisterPageComponent.\u0275fac = function RegisterPageComponent_Factory(t) {
  return new (t || _RegisterPageComponent)();
};
_RegisterPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPageComponent, selectors: [["app-register-page"]], decls: 22, vars: 0, consts: [[1, "flex", "flex-column"], [1, "text-lg", "mb-4"], ["type", "text", "matInput", "", "placeholder", "Nombre de Usuario"], ["type", "password", "matInput", "", "placeholder", "Contrase\xF1a"], ["mat-button", "", "mat-flat-button", "", "color", "primary"], [1, "flex", "justify-content-end", "mt-5"], ["routerLink", "/auth/login"]], template: function RegisterPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2, "Registro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field")(4, "mat-label");
    \u0275\u0275text(5, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field")(8, "mat-label");
    \u0275\u0275text(9, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field")(12, "mat-label");
    \u0275\u0275text(13, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 4)(16, "mat-icon");
    \u0275\u0275text(17, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Crear cuenta ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 5)(20, "a", 6);
    \u0275\u0275text(21, "\xBFYa tienes cuenta?");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [RouterLink, MatButton, MatFormField, MatLabel, MatIcon, MatInput] });
var RegisterPageComponent = _RegisterPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPageComponent, { className: "RegisterPageComponent", filePath: "src\\app\\auth\\pages\\register-page\\register-page.component.ts", lineNumber: 8 });
})();

// src/app/auth/auth-routing.module.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "loging", component: LogingPageComponent },
      { path: "register", component: RegisterPageComponent },
      { path: "**", redirectTo: "loging" }
    ]
  }
];
var _AuthRoutingModule = class _AuthRoutingModule {
};
_AuthRoutingModule.\u0275fac = function AuthRoutingModule_Factory(t) {
  return new (t || _AuthRoutingModule)();
};
_AuthRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
_AuthRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AuthRoutingModule = _AuthRoutingModule;

// src/app/auth/auth.module.ts
var _AuthModule = class _AuthModule {
};
_AuthModule.\u0275fac = function AuthModule_Factory(t) {
  return new (t || _AuthModule)();
};
_AuthModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
_AuthModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  AuthRoutingModule,
  MaterialModule
] });
var AuthModule = _AuthModule;
export {
  AuthModule
};
//# sourceMappingURL=chunk-VMRIIQ5J.js.map
