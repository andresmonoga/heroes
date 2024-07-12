import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatButton,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  MatChip,
  MatChipListbox,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatDivider,
  MatFormField,
  MatGridList,
  MatGridTile,
  MatIcon,
  MatIconButton,
  MatInput,
  MatLabel,
  MatList,
  MatListItem,
  MatListItemIcon,
  MatNavList,
  MatOption,
  MatProgressSpinner,
  MatSelect,
  MatSidenav,
  MatSidenavContainer,
  MatSnackBar,
  MatToolbar,
  MaterialModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-5I32PRJY.js";
import {
  ActivatedRoute,
  AuthService,
  HttpClient,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  environments
} from "./chunk-INFC27TE.js";
import "./chunk-F6QFL7AI.js";
import {
  CommonModule,
  JsonPipe,
  NgForOf,
  NgIf,
  NgStyle,
  SlicePipe,
  catchError,
  delay,
  filter,
  map,
  of,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PEADVLQM.js";

// src/app/heroes/pages/layout-page/layout-page.component.ts
var _c0 = () => ({ width: "250px" });
function LayoutPageComponent_mat_list_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 8);
    \u0275\u0275listener("click", function LayoutPageComponent_mat_list_item_11_Template_mat_list_item_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      \u0275\u0275nextContext();
      const sidenav_r2 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(sidenav_r2.toggle());
    });
    \u0275\u0275elementStart(1, "mat-icon", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.label, " ");
  }
}
var _LayoutPageComponent = class _LayoutPageComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.sidebarItems = [
      { label: "Listado", icon: "label", url: "./list" },
      { label: "A\xF1adir", icon: "add", url: "./new-hero" },
      { label: "Buscar", icon: "search", url: "./search" }
    ];
  }
  get user() {
    return this.authService.currentUser;
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }
};
_LayoutPageComponent.\u0275fac = function LayoutPageComponent_Factory(t) {
  return new (t || _LayoutPageComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_LayoutPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutPageComponent, selectors: [["app-layout-page"]], decls: 25, vars: 4, consts: [["sidenav", ""], ["fullscreen", ""], ["mode", "push", 3, "ngStyle"], ["color", "primary"], [1, "spacer"], ["mat-icon-button", "", 3, "click"], [3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "container", "mt-2", "p-2"], [3, "click", "routerLink"], ["matListItemIcon", ""]], template: function LayoutPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-sidenav-container", 1)(1, "mat-sidenav", 2, 0)(3, "mat-toolbar", 3)(4, "span");
    \u0275\u0275text(5, "Men\xFA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 4);
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function LayoutPageComponent_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const sidenav_r2 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(sidenav_r2.toggle());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "menu");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "mat-nav-list");
    \u0275\u0275template(11, LayoutPageComponent_mat_list_item_11_Template, 4, 3, "mat-list-item", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-toolbar", 3)(13, "button", 5);
    \u0275\u0275listener("click", function LayoutPageComponent_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const sidenav_r2 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(sidenav_r2.toggle());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "menu");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "span", 4);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "span", 4);
    \u0275\u0275elementStart(20, "button", 5);
    \u0275\u0275listener("click", function LayoutPageComponent_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onLogout());
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "logout");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 7);
    \u0275\u0275element(24, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx.sidebarItems);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.user);
  }
}, dependencies: [NgForOf, NgStyle, MatIconButton, MatIcon, MatNavList, MatListItem, MatListItemIcon, MatSidenav, MatSidenavContainer, MatToolbar, RouterOutlet, RouterLink] });
var LayoutPageComponent = _LayoutPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutPageComponent, { className: "LayoutPageComponent", filePath: "src\\app\\heroes\\pages\\layout-page\\layout-page.component.ts", lineNumber: 11 });
})();

// src/app/heroes/interfaces/heroes.interface.ts
var Publisher;
(function(Publisher2) {
  Publisher2["DCComics"] = "DC Comics";
  Publisher2["MarvelComics"] = "Marvel Comics";
})(Publisher || (Publisher = {}));

// src/app/heroes/components/confirm-dialog/confirm-dialog.component.ts
var _ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onNoClick() {
    this.dialogRef.close(false);
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
};
_ConfirmDialogComponent.\u0275fac = function ConfirmDialogComponent_Factory(t) {
  return new (t || _ConfirmDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_ConfirmDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 11, vars: 1, consts: [["mat-dialog-title", ""], ["mat-button", "", "color", "primary", 3, "click"], [1, "spacer"], ["mat-button", "", "color", "warn", "cdkFocusInitial", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 0);
    \u0275\u0275text(1, "\xBFEst\xE1 seguro?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-dialog-actions")(6, "button", 1);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
      return ctx.onNoClick();
    });
    \u0275\u0275text(7, "No Thanks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "span", 2);
    \u0275\u0275elementStart(9, "button", 3);
    \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_9_listener() {
      return ctx.onConfirm();
    });
    \u0275\u0275text(10, "Ok");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Este proceso no es reversible, est\xE1 apunto de eliminar a ", ctx.data.superhero, " ");
  }
}, dependencies: [MatButton, MatDialogTitle, MatDialogActions, MatDialogContent] });
var ConfirmDialogComponent = _ConfirmDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src\\app\\heroes\\components\\confirm-dialog\\confirm-dialog.component.ts", lineNumber: 10 });
})();

// src/app/heroes/services/heroes.service.ts
var _HeroesService = class _HeroesService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environments.baseUrl;
  }
  getHeroes() {
    return this.http.get(`${this.baseUrl}/heroes `);
  }
  getHeroById(id) {
    return this.http.get(`${this.baseUrl}/heroes/${id}`).pipe(catchError((error) => of(void 0)));
  }
  getSuggestions(query) {
    return this.http.get(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }
  addHero(hero) {
    return this.http.post(`${this.baseUrl}/heroes`, hero);
  }
  updateHero(hero) {
    if (!hero.id)
      throw Error("Hero id is requerid");
    return this.http.patch(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }
  deleteHeroById(id) {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`).pipe(catchError((err) => of(false)), map((resp) => true));
  }
};
_HeroesService.\u0275fac = function HeroesService_Factory(t) {
  return new (t || _HeroesService)(\u0275\u0275inject(HttpClient));
};
_HeroesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HeroesService, factory: _HeroesService.\u0275fac, providedIn: "root" });
var HeroesService = _HeroesService;

// src/app/heroes/pipes/hero-image.pipe.ts
var _HeroImagePipe = class _HeroImagePipe {
  transform(hero) {
    if (!hero.id && !hero.alt_img) {
      return `assets/no-image.png`;
    }
    if (hero.alt_img)
      return hero.alt_img;
    return `assets/heroes/${hero.id}.jpg`;
  }
};
_HeroImagePipe.\u0275fac = function HeroImagePipe_Factory(t) {
  return new (t || _HeroImagePipe)();
};
_HeroImagePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "heroImage", type: _HeroImagePipe, pure: true });
var HeroImagePipe = _HeroImagePipe;

// src/app/heroes/pages/new-page/new-page.component.ts
function NewPageComponent_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.currentHero.superhero);
  }
}
function NewPageComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const publisher_r2 = ctx.$implicit;
    \u0275\u0275property("value", publisher_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", publisher_r2.desc, " ");
  }
}
function NewPageComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function NewPageComponent_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteHero());
    });
    \u0275\u0275text(1, " Borrar ");
    \u0275\u0275elementEnd();
  }
}
var _NewPageComponent = class _NewPageComponent {
  constructor(heroesService, activatedRoute, router, snackbar, dialog) {
    this.heroesService = heroesService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.snackbar = snackbar;
    this.dialog = dialog;
    this.heroForm = new FormGroup({
      id: new FormControl(""),
      superhero: new FormControl("", { nonNullable: true }),
      publisher: new FormControl(Publisher.DCComics),
      alter_ego: new FormControl(""),
      first_appearance: new FormControl(""),
      characters: new FormControl(""),
      alt_img: new FormControl("")
    });
    this.publishers = [
      { id: "DC Comics", desc: "DC - Comics" },
      { id: "Marvel Comics", desc: "Marvel - Comics" }
    ];
  }
  get currentHero() {
    const hero = this.heroForm.value;
    return hero;
  }
  ngOnInit() {
    if (!this.router.url.includes("edit"))
      return;
    this.activatedRoute.params.pipe(switchMap(({ id }) => this.heroesService.getHeroById(id))).subscribe((hero) => {
      if (!hero) {
        return this.router.navigateByUrl("/");
      }
      this.heroForm.reset(hero);
      return;
    });
  }
  onSubmit() {
    if (this.heroForm.invalid)
      return;
    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar(`${hero.superhero} updated`);
      });
      return;
    }
    this.heroesService.addHero(this.currentHero).subscribe((hero) => {
      this.showSnackbar(`${hero.superhero} updated`);
      this.router.navigate(["/heroes/edit", hero.id]);
    });
  }
  onDeleteHero() {
    if (!this.currentHero.id)
      throw Error("Hero id is required");
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });
    dialogRef.afterClosed().pipe(filter((result) => result), switchMap(() => this.heroesService.deleteHeroById(this.currentHero.id)), filter((wasDeleted) => wasDeleted)).subscribe(() => {
      this.router.navigate(["/heroes"]);
    });
  }
  showSnackbar(message) {
    this.snackbar.open(message, "done", {
      duration: 2500
    });
  }
};
_NewPageComponent.\u0275fac = function NewPageComponent_Factory(t) {
  return new (t || _NewPageComponent)(\u0275\u0275directiveInject(HeroesService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(MatDialog));
};
_NewPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewPageComponent, selectors: [["app-new-page"]], decls: 45, vars: 8, consts: [[4, "ngIf"], [1, "mb-2"], [1, "grid"], [1, "col-12", "sm:col-6"], [1, "grid", 3, "ngSubmit", "formGroup"], ["matInput", "", "type", "text", "required", "", "formControlName", "superhero"], ["matInput", "", "type", "text", "required", "", "formControlName", "alter_ego"], [1, "col-12"], ["matInput", "", "type", "text", "required", "", "formControlName", "first_appearance"], ["matInput", "", "type", "text", "required", "", "formControlName", "characters"], ["formControlName", "publisher", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "alt_img"], [1, "flex", "justify-content-between"], ["mat-flat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["alt", "imagen del h\xE9roe", "mat-card-image", "", 3, "src"], [3, "value"], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function NewPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275template(2, NewPageComponent_small_2_Template, 2, 1, "small", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-divider", 1);
    \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "mat-card")(7, "mat-card-content")(8, "form", 4);
    \u0275\u0275listener("ngSubmit", function NewPageComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
    \u0275\u0275text(11, "Super h\xE9roe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 3)(14, "mat-label");
    \u0275\u0275text(15, "Alter ego");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 7)(18, "mat-label");
    \u0275\u0275text(19, "Primera aparici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 7)(22, "mat-label");
    \u0275\u0275text(23, "Personajes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 7)(26, "mat-label");
    \u0275\u0275text(27, "Creador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-select", 10);
    \u0275\u0275template(29, NewPageComponent_mat_option_29_Template, 2, 2, "mat-option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "mat-form-field", 7)(31, "mat-label");
    \u0275\u0275text(32, "Alternative Image");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 13);
    \u0275\u0275template(35, NewPageComponent_button_35_Template, 2, 0, "button", 14);
    \u0275\u0275element(36, "span");
    \u0275\u0275elementStart(37, "button", 15);
    \u0275\u0275listener("click", function NewPageComponent_Template_button_click_37_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(38, "mat-icon");
    \u0275\u0275text(39, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Guardar ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "div", 3)(42, "mat-card");
    \u0275\u0275element(43, "img", 16);
    \u0275\u0275pipe(44, "heroImage");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.currentHero.id ? "Editar" : "Agregar", " H\xE9roe ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentHero.id);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx.heroForm);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx.publishers);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.currentHero.id);
    \u0275\u0275advance(8);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(44, 6, ctx.currentHero), \u0275\u0275sanitizeUrl);
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, MatOption, MatButton, MatCard, MatCardContent, MatCardImage, MatFormField, MatLabel, MatIcon, MatInput, MatDivider, MatSelect, HeroImagePipe], encapsulation: 2 });
var NewPageComponent = _NewPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewPageComponent, { className: "NewPageComponent", filePath: "src\\app\\heroes\\pages\\new-page\\new-page.component.ts", lineNumber: 21 });
})();

// src/app/heroes/pages/search-page/search-page.component.ts
function SearchPageComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hero_r2 = ctx.$implicit;
    \u0275\u0275property("value", hero_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", hero_r2.superhero, " ");
  }
}
function SearchPageComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" No se encontr\xF3 nada con el t\xE9rmino ", ctx_r2.searchInput.value, " ");
  }
}
var _SearchPageComponent = class _SearchPageComponent {
  constructor(heroesService) {
    this.heroesService = heroesService;
    this.searchInput = new FormControl("");
    this.heroes = [];
  }
  searchHero() {
    const value = this.searchInput.value || "";
    this.heroesService.getSuggestions(value).subscribe((heroes) => this.heroes = heroes);
  }
  onSelectedOption(event) {
    if (!event.option.value) {
      this.selectedHero = void 0;
      return;
    }
    const hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }
};
_SearchPageComponent.\u0275fac = function SearchPageComponent_Factory(t) {
  return new (t || _SearchPageComponent)(\u0275\u0275directiveInject(HeroesService));
};
_SearchPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchPageComponent, selectors: [["app-search-page"]], decls: 13, vars: 7, consts: [["auto", "matAutocomplete"], [1, "flex", "flex-column", "p-2"], ["type", "text", "matInput", "", 3, "input", "formControl", "matAutocomplete"], ["autoActiveFirstOption", "", 3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "", 4, "ngIf"], [3, "value"], ["value", ""]], template: function SearchPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h3");
    \u0275\u0275text(2, "Buscador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field")(4, "mat-label");
    \u0275\u0275text(5, "Buscador de h\xE9roes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 2);
    \u0275\u0275listener("input", function SearchPageComponent_Template_input_input_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.searchHero());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-autocomplete", 3, 0);
    \u0275\u0275listener("optionSelected", function SearchPageComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSelectedOption($event));
    });
    \u0275\u0275template(9, SearchPageComponent_mat_option_9_Template, 2, 2, "mat-option", 4)(10, SearchPageComponent_mat_option_10_Template, 2, 1, "mat-option", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx.searchInput)("matAutocomplete", auto_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.heroes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.heroes.length === 0 && ctx.searchInput.value && ctx.searchInput.value.length > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 5, ctx.selectedHero), " ");
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatFormField, MatLabel, MatInput, JsonPipe], encapsulation: 2 });
var SearchPageComponent = _SearchPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchPageComponent, { className: "SearchPageComponent", filePath: "src\\app\\heroes\\pages\\search-page\\search-page.component.ts", lineNumber: 15 });
})();

// src/app/heroes/components/card/card.component.ts
var _c02 = (a0) => ["/heroes/edit", a0];
var _c1 = (a0) => ["/heroes", a0];
function CardComponent_mat_chip_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", name_r1, " ");
  }
}
var _CardComponent = class _CardComponent {
  ngOnInit() {
    if (!this.hero)
      throw Error("Hero property is required");
  }
};
_CardComponent.\u0275fac = function CardComponent_Factory(t) {
  return new (t || _CardComponent)();
};
_CardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardComponent, selectors: [["heroes-hero-card"]], inputs: { hero: "hero" }, decls: 30, vars: 19, consts: [["mat-card-image", "", 3, "src", "alt"], [1, "mt-2"], [4, "ngFor", "ngForOf"], ["mat-button", "", "mat-raised", "", "color", "primary", 3, "routerLink"], [1, "spacer"], ["mat-button", "", "mat-raised", "", 3, "routerLink"]], template: function CardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-subtitle");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "img", 0);
    \u0275\u0275pipe(7, "heroImage");
    \u0275\u0275elementStart(8, "mat-card-content", 1)(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Primera aparici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "mat-chip-listbox");
    \u0275\u0275template(17, CardComponent_mat_chip_17_Template, 2, 1, "mat-chip", 2);
    \u0275\u0275pipe(18, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(19, "mat-divider");
    \u0275\u0275elementStart(20, "mat-card-actions")(21, "button", 3)(22, "mat-icon");
    \u0275\u0275text(23, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "span", 4);
    \u0275\u0275elementStart(26, "button", 5)(27, "mat-icon");
    \u0275\u0275text(28, "more_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " M\xE1s ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.hero.superhero, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.hero.alter_ego, " ");
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(7, 9, ctx.hero), \u0275\u0275sanitizeUrl)("alt", ctx.hero.superhero);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.hero.publisher);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx.hero.first_appearance, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(18, 11, ctx.hero.characters.split(","), 0, 3));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c02, ctx.hero.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c1, ctx.hero.id));
  }
}, dependencies: [NgForOf, MatButton, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle, MatChip, MatChipListbox, MatIcon, MatDivider, RouterLink, SlicePipe, HeroImagePipe] });
var CardComponent = _CardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src\\app\\heroes\\components\\card\\card.component.ts", lineNumber: 9 });
})();

// src/app/heroes/pages/list-page/list-page.component.ts
function ListPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "heroes-hero-card", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("hero", hero_r1);
  }
}
var _ListPageComponent = class _ListPageComponent {
  constructor(heroesService) {
    this.heroesService = heroesService;
    this.heroes = [];
  }
  ngOnInit() {
    this.heroesService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }
};
_ListPageComponent.\u0275fac = function ListPageComponent_Factory(t) {
  return new (t || _ListPageComponent)(\u0275\u0275directiveInject(HeroesService));
};
_ListPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListPageComponent, selectors: [["app-list-page"]], decls: 5, vars: 1, consts: [[1, "grid", "bm-8", "pt-2"], ["class", "col-12 sm:col-4 md:col-3 xl:col-2", 4, "ngFor", "ngForOf"], [1, "col-12", "sm:col-4", "md:col-3", "xl:col-2"], [3, "hero"]], template: function ListPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Listado de H\xE9roes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "mat-divider");
    \u0275\u0275elementStart(3, "div", 0);
    \u0275\u0275template(4, ListPageComponent_div_4_Template, 2, 1, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.heroes);
  }
}, dependencies: [NgForOf, MatDivider, CardComponent] });
var ListPageComponent = _ListPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListPageComponent, { className: "ListPageComponent", filePath: "src\\app\\heroes\\pages\\list-page\\list-page.component.ts", lineNumber: 10 });
})();

// src/app/heroes/pages/hero-page/hero-page.component.ts
function HeroPageComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-grid-list", 2)(1, "mat-grid-tile");
    \u0275\u0275element(2, "mat-spinner");
    \u0275\u0275elementEnd()();
  }
}
function HeroPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-card", 4)(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-card-subtitle");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "img", 5);
    \u0275\u0275pipe(8, "heroImage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-card", 4)(10, "mat-card-header")(11, "mat-card-title");
    \u0275\u0275text(12, "Informaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-card-subtitle");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-card-content")(16, "mat-list")(17, "mat-list-item");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-list-item");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-list-item");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-list-item");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 6);
    \u0275\u0275listener("click", function HeroPageComponent_div_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(26, " Regresar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.hero.alter_ego);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hero.superhero);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(8, 9, ctx_r1.hero), \u0275\u0275sanitizeUrl)("alt", ctx_r1.hero.superhero);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.hero.superhero);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.hero.first_appearance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hero.characters);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hero.publisher);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hero.alter_ego);
  }
}
var _HeroPageComponent = class _HeroPageComponent {
  constructor(heroesService, activateRoute, router) {
    this.heroesService = heroesService;
    this.activateRoute = activateRoute;
    this.router = router;
  }
  ngOnInit() {
    this.activateRoute.params.pipe(delay(1500), switchMap(({ id }) => this.heroesService.getHeroById(id))).subscribe((hero) => {
      if (!hero)
        return this.router.navigate(["/heroes/list"]);
      this.hero = hero;
      console.log({ hero });
      return;
    });
  }
  goBack() {
    this.router.navigateByUrl("heroes/list");
  }
};
_HeroPageComponent.\u0275fac = function HeroPageComponent_Factory(t) {
  return new (t || _HeroPageComponent)(\u0275\u0275directiveInject(HeroesService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_HeroPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroPageComponent, selectors: [["app-hero-page"]], decls: 3, vars: 2, consts: [["divLoading", ""], ["class", "grid mt-2", 4, "ngIf", "ngIfElse"], ["cols", "1"], [1, "grid", "mt-2"], [1, "col-12", "sm:col-6"], ["mat-card-image", "", 3, "src", "alt"], ["mat-button", "", "color", "warn", 3, "click"]], template: function HeroPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeroPageComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, HeroPageComponent_div_2_Template, 27, 11, "div", 1);
  }
  if (rf & 2) {
    const divLoading_r3 = \u0275\u0275reference(1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.hero)("ngIfElse", divLoading_r3);
  }
}, dependencies: [NgIf, MatButton, MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle, MatGridList, MatGridTile, MatList, MatListItem, MatProgressSpinner, HeroImagePipe] });
var HeroPageComponent = _HeroPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroPageComponent, { className: "HeroPageComponent", filePath: "src\\app\\heroes\\pages\\hero-page\\hero-page.component.ts", lineNumber: 12 });
})();

// src/app/heroes/heroes-routing.module.ts
var routes = [
  {
    path: "",
    component: LayoutPageComponent,
    children: [
      { path: "new-hero", component: NewPageComponent },
      { path: "search", component: SearchPageComponent },
      { path: "edit/:id", component: NewPageComponent },
      { path: "list", component: ListPageComponent },
      { path: ":id", component: HeroPageComponent },
      { path: "**", redirectTo: "list" }
    ]
  }
];
var _HeroesRoutingModule = class _HeroesRoutingModule {
};
_HeroesRoutingModule.\u0275fac = function HeroesRoutingModule_Factory(t) {
  return new (t || _HeroesRoutingModule)();
};
_HeroesRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HeroesRoutingModule });
_HeroesRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var HeroesRoutingModule = _HeroesRoutingModule;

// src/app/heroes/heroes.module.ts
var _HeroesModule = class _HeroesModule {
};
_HeroesModule.\u0275fac = function HeroesModule_Factory(t) {
  return new (t || _HeroesModule)();
};
_HeroesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HeroesModule });
_HeroesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  ReactiveFormsModule,
  MaterialModule,
  HeroesRoutingModule
] });
var HeroesModule = _HeroesModule;
export {
  HeroesModule
};
//# sourceMappingURL=chunk-64XX3BP5.js.map
