"use strict";
(self["webpackChunkdashboard_widget"] = self["webpackChunkdashboard_widget"] || []).push([["src_app_marchand_marchand_module_ts"],{

/***/ 9416:
/*!*************************************************************!*\
  !*** ./src/app/marchand/layouts/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 2,
    vars: 0,
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9945:
/*!****************************************************!*\
  !*** ./src/app/marchand/layouts/layouts.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutsModule: () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 9416);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 6182);
/* harmony import */ var _sidebar_sidebar_collapse_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar-collapse.directive */ 1759);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 8382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







class LayoutsModule {
  static #_ = this.ɵfac = function LayoutsModule_Factory(t) {
    return new (t || LayoutsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: LayoutsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LayoutsModule, {
    declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _sidebar_sidebar_collapse_directive__WEBPACK_IMPORTED_MODULE_2__.SidebarCollapseDirective],
    exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
  });
})();

/***/ }),

/***/ 4592:
/*!*****************************************************!*\
  !*** ./src/app/marchand/marchand-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   marchandRoutingModule: () => (/* binding */ marchandRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _marchand_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marchand.routes */ 9700);
/* harmony import */ var _views_admin_page_not_found_admin_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/admin-page-not-found/admin-page-not-found.component */ 5700);
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ 9623);
/* harmony import */ var _views_settings_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/settings/profile/profile.component */ 3463);
/* harmony import */ var _views_settings_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/settings/users/users.component */ 8104);
/* harmony import */ var _views_more_more_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/more/more.component */ 7628);
/* harmony import */ var _views_faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/faq/faq.component */ 1010);
/* harmony import */ var _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/contact/contact.component */ 1550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);











const routes = [{
  path: '',
  redirectTo: _marchand_routes__WEBPACK_IMPORTED_MODULE_0__.MarchandRoutes.Dashboard,
  pathMatch: 'full'
}, {
  title: 'Dashboard',
  path: _marchand_routes__WEBPACK_IMPORTED_MODULE_0__.MarchandRoutes.Dashboard,
  children: [{
    path: '',
    component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent
  }, {
    path: _marchand_routes__WEBPACK_IMPORTED_MODULE_0__.MarchandRoutes.More,
    component: _views_more_more_component__WEBPACK_IMPORTED_MODULE_5__.MoreComponent
  }]
}, {
  path: _marchand_routes__WEBPACK_IMPORTED_MODULE_0__.MarchandRoutes.Support,
  children: [{
    title: 'Faq',
    path: _marchand_routes__WEBPACK_IMPORTED_MODULE_0__.SupportRoutes.FAQ,
    component: _views_faq_faq_component__WEBPACK_IMPORTED_MODULE_6__.FaqComponent
  }, {
    title: 'Contact',
    path: _marchand_routes__WEBPACK_IMPORTED_MODULE_0__.SupportRoutes.Contact,
    component: _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent
  }]
}, {
  path: _marchand_routes__WEBPACK_IMPORTED_MODULE_0__.MarchandRoutes.Settings,
  children: [{
    title: 'Settings',
    path: _marchand_routes__WEBPACK_IMPORTED_MODULE_0__.SettingRoutes.Profile,
    component: _views_settings_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent
  }, {
    title: 'Users',
    path: _marchand_routes__WEBPACK_IMPORTED_MODULE_0__.SettingRoutes.Users,
    component: _views_settings_users_users_component__WEBPACK_IMPORTED_MODULE_4__.UsersComponent
  }]
}, {
  path: '**',
  component: _views_admin_page_not_found_admin_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.AdminPageNotFoundComponent
}];
class marchandRoutingModule {
  static #_ = this.ɵfac = function marchandRoutingModule_Factory(t) {
    return new (t || marchandRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: marchandRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](marchandRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 1905:
/*!*********************************************!*\
  !*** ./src/app/marchand/marchand.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarchandModule: () => (/* binding */ MarchandModule)
/* harmony export */ });
/* harmony import */ var _views_more_more_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/more/more.component */ 7628);
/* harmony import */ var _views_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/transaction/transaction.component */ 9106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _marchand_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marchand-routing.module */ 4592);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/layouts.module */ 9945);
/* harmony import */ var _marchand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marchand.component */ 4565);
/* harmony import */ var _views_admin_page_not_found_admin_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/admin-page-not-found/admin-page-not-found.component */ 5700);
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ 9623);
/* harmony import */ var _views_events_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/events/events.component */ 238);
/* harmony import */ var _views_settings_settings_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/settings/settings.module */ 5141);
/* harmony import */ var _views_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/scroll-to-top/scroll-to-top.component */ 3597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);












class MarchandModule {
  static #_ = this.ɵfac = function MarchandModule_Factory(t) {
    return new (t || MarchandModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: MarchandModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _marchand_routing_module__WEBPACK_IMPORTED_MODULE_2__.marchandRoutingModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__.LayoutsModule, _views_settings_settings_module__WEBPACK_IMPORTED_MODULE_8__.SettingsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MarchandModule, {
    declarations: [_marchand_component__WEBPACK_IMPORTED_MODULE_4__.MarchandComponent, _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent, _views_admin_page_not_found_admin_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__.AdminPageNotFoundComponent, _views_events_events_component__WEBPACK_IMPORTED_MODULE_7__.EventsComponent, _views_more_more_component__WEBPACK_IMPORTED_MODULE_0__.MoreComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _marchand_routing_module__WEBPACK_IMPORTED_MODULE_2__.marchandRoutingModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__.LayoutsModule, _views_settings_settings_module__WEBPACK_IMPORTED_MODULE_8__.SettingsModule, _views_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_1__.TransactionComponent, _views_scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_9__.ScrollToTopComponent]
  });
})();

/***/ }),

/***/ 5700:
/*!***************************************************************************************!*\
  !*** ./src/app/marchand/views/admin-page-not-found/admin-page-not-found.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminPageNotFoundComponent: () => (/* binding */ AdminPageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AdminPageNotFoundComponent {
  static #_ = this.ɵfac = function AdminPageNotFoundComponent_Factory(t) {
    return new (t || AdminPageNotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AdminPageNotFoundComponent,
    selectors: [["app-admin-page-not-found"]],
    decls: 4,
    vars: 0,
    consts: [[1, "card", "flex", "flex-col", "justify-center", "items-center"], ["src", "https://i.ibb.co/qBTrGN5/error.png", "alt", "404 Error", 1, "animated-image", "h-80", "object-cover"], [1, "text-2xl", "md:text-3xl", "lg:text-5xl", "font-bold", "tracking-wider", "text-gray-500", "mt-0", "text-center", "pb-6"]],
    template: function AdminPageNotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page not found !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3MvYWRtaW4tcGFnZS1ub3QtZm91bmQvYWRtaW4tcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0xBQW9MIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1550:
/*!*************************************************************!*\
  !*** ./src/app/marchand/views/contact/contact.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ContactComponent {
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 78,
    vars: 0,
    consts: [[1, "grid", "grid-cols-1", "mb-4", "xl:grid-cols-1", "gap-5"], [1, "card", "container", "py-12", "mx-auto", "card", "p-8"], [1, "mx-auto", "px-5"], [1, "flex", "flex-col", "items-center"], [1, "mt-5", "text-emerald-700", "text-center", "text-3xl", "font-bold", "tracking-tight", "md:text-5xl"], [1, "mt-3", "text-lg", "text-neutral-500", "md:text-xl"], [1, "flex", "flex-wrap", "pt-16"], [1, "mb-12", "w-full", "shrink-0", "grow-0", "basis-auto", "md:px-3", "lg:mb-0", "lg:w-5/12", "lg:px-6"], [1, "mb-3", "w-full"], ["htmlFor", "exampleInput90", 1, "block", "font-medium", "mb-[2px]", "text-emerald-700"], ["type", "text", "id", "exampleInput90", "placeholder", "Nom", 1, "px-2", "py-2", "border", "w-full", "outline-none", "rounded-md"], ["type", "email", "id", "exampleInput90", "placeholder", "Entrez votre adresse e-mail", 1, "px-2", "py-2", "border", "w-full", "outline-none", "rounded-md"], ["name", "", "id", "", 1, "px-2", "py-2", "border", "rounded-[5px]", "w-full", "outline-none"], ["type", "button", 1, "mb-6", "inline-block", "w-full", "rounded", "bg-emerald-600", "px-6", "py-2.5", "font-medium", "uppercase", "leading-normal", "text-white", "hover:shadow-md", "hover:bg-emerald-500"], [1, "w-full", "shrink-0", "grow-0", "basis-auto", "lg:w-7/12"], [1, "flex", "flex-wrap"], [1, "mb-12", "w-full", "shrink-0", "grow-0", "basis-auto", "md:w-6/12", "md:px-3", "lg:px-6"], [1, "flex", "items-start"], [1, "shrink-0"], [1, "inline-block", "rounded-md", "bg-emerald-400-100", "p-4", "text-emerald-700"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"], [1, "ml-6", "grow"], [1, "mb-2", "font-bold"], [1, "text-neutral-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"], [1, "align-start", "flex"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nous contacter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Obtenez une r\u00E9ponse en moins de 24h. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "form", 7)(10, "div", 8)(11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Nom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8)(19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Envoyer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22)(33, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Support technique ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " supportexample.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " +1 234-567-89 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16)(40, "div", 17)(41, "div", 18)(42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22)(46, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Questions de vente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " salesexample.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " +1 234-567-89 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16)(53, "div", 26)(54, "div", 18)(55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22)(59, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Presse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " pressexample.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " +1 234-567-89 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16)(66, "div", 26)(67, "div", 18)(68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 22)(72, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Bug report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " bugsexample.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " +1 234-567-89 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3MvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9623:
/*!*****************************************************************!*\
  !*** ./src/app/marchand/views/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 7005);
/* harmony import */ var src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/animations */ 3985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transaction/transaction.component */ 9106);
/* harmony import */ var _scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scroll-to-top/scroll-to-top.component */ 3597);






const _c0 = ["detailedDescription"];
chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_3__.registerables);
class DashboardComponent {
  constructor() {
    this.eventDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'MMM dd, yyyy', 'en');
  }
  ngOnInit() {
    var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart("areaWiseSale", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)']
        }]
      },
      options: {
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        },
        plugins: {
          legend: {
            position: 'right',
            align: 'center'
          }
        }
      }
    });
  }
  scrollToSection() {
    if (this.detailedDescription && this.detailedDescription.nativeElement) {
      this.detailedDescription.nativeElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    viewQuery: function DashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.detailedDescription = _t.first);
      }
    },
    decls: 28,
    vars: 1,
    consts: [[1, "grid", "grid-cols-1", "mb-4", "xl:grid-cols-2", "gap-5"], [1, "card", "p-8"], [1, "card-title", "flex", "justify-between", "items-center", "mb-4"], [1, "text-xl", "font-bold", "leading-none"], ["id", "chart", 1, "w-2/5", "mx-auto"], [1, "flex", "justify-center", "items-center"], ["id", "areaWiseSale"], [1, "card", "p-8", "bg-emerald-600", "text-gray-50"], [1, "text-2xl"], [1, "my-5", "text-emerald-100", "hover:text-white", "hover:underline", 3, "click"], [1, "text-4xl", "font-bold"], [1, "my-5"], ["detailedDescription", ""], [1, "card", "p-5", "mt-5"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "most used methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7)(10, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Description D\u00E9taill\u00E9e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_h2_click_12_listener() {
          return ctx.scrollToSection();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " 278 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Transactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque molestiae incidunt officiis veritatis, architecto nam soluta, exercitationem minima laudantium harum qui. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "section", null, 12)(22, "div", 13)(23, "div", 2)(24, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Details des transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "app-transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "app-scroll-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@pageTransition", undefined);
      }
    },
    dependencies: [_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_1__.TransactionComponent, _scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_2__.ScrollToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__.pageTransition]
    }
  });
}

/***/ }),

/***/ 238:
/*!***********************************************************!*\
  !*** ./src/app/marchand/views/events/events.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsComponent: () => (/* binding */ EventsComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/animations */ 3985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class EventsComponent {
  constructor(router) {
    this.router = router;
  }
  loadTest() {
    this.router.navigate(['admin', 'events', {
      outlets: {
        test: ['testing']
      }
    }]);
  }
  static #_ = this.ɵfac = function EventsComponent_Factory(t) {
    return new (t || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EventsComponent,
    selectors: [["app-events"]],
    decls: 6,
    vars: 1,
    consts: [[1, "btn", "btn-primary", 3, "click"], ["name", "test"]],
    template: function EventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "events works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventsComponent_Template_button_click_3_listener() {
          return ctx.loadTest();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Click Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@pageTransition", undefined);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudHMuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3MvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__.pageTransition]
    }
  });
}

/***/ }),

/***/ 1010:
/*!*****************************************************!*\
  !*** ./src/app/marchand/views/faq/faq.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FaqComponent {
  static #_ = this.ɵfac = function FaqComponent_Factory(t) {
    return new (t || FaqComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FaqComponent,
    selectors: [["app-faq"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 69,
    vars: 0,
    consts: [[1, "grid", "grid-cols-1", "mb-4", "xl:grid-cols-1", "gap-5"], [1, "card", "container", "py-12", "mx-auto", "card", "p-8"], [1, "mx-auto", "px-5"], [1, "flex", "flex-col", "items-center"], [1, "mt-5", "text-emerald-700", "text-center", "text-3xl", "font-bold", "tracking-tight", "md:text-5xl"], [1, "mt-3", "text-lg", "text-neutral-500", "md:text-xl"], [1, "mx-auto", "mt-8", "grid", "max-w-xl", "divide-y", "divide-neutral-200"], [1, "py-5"], [1, "group"], [1, "flex", "cursor-pointer", "list-none", "items-center", "justify-between", "font-medium"], [1, "transition", "group-open:rotate-180"], ["fill", "none", "height", "24", "shape-rendering", "geometricPrecision", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "viewBox", "0 0 24 24", "width", "24"], ["d", "M6 9l6 6 6-6"], [1, "group-open:animate-fadeIn", "mt-3", "text-neutral-600"]],
    template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Les questions les plus fr\u00E9quemment pos\u00E9es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "details", 8)(11, "summary", 9)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " How does the billing work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7)(20, "details", 8)(21, "summary", 9)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Can I get a refund for my subscription?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7)(30, "details", 8)(31, "summary", 9)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " How do I cancel my subscription?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "To cancel your subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7)(40, "details", 8)(41, "summary", 9)(42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Is there a free trial?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "We offer a free trial of our software for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7)(50, "details", 8)(51, "summary", 9)(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " How do I contact support?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "If you need help with our platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing supportourwebsite.com. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7)(60, "details", 8)(61, "summary", 9)(62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Do you offer any discounts or promotions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company's newsletter or follow it on social media. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3MvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0SkFBNEoiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7628:
/*!*******************************************************!*\
  !*** ./src/app/marchand/views/more/more.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreComponent: () => (/* binding */ MoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 7005);
/* harmony import */ var src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/animations */ 3985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroll-to-top/scroll-to-top.component */ 3597);






const _c0 = ["detailedDescription"];
function MoreComponent_li_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 51)(1, "div", 52)(2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 55)(5, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Token ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 57)(8, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 59)(10, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
const _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8];
chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_3__.registerables);
class MoreComponent {
  constructor() {
    this.eventDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'MMM dd, yyyy', 'en');
  }
  ngOnInit() {
    var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart("areaWiseSale", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)']
        }]
      },
      options: {
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        },
        plugins: {
          legend: {
            position: 'right',
            align: 'center'
          }
        }
      }
    });
  }
  scrollToSection() {
    if (this.detailedDescription && this.detailedDescription.nativeElement) {
      this.detailedDescription.nativeElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  static #_ = this.ɵfac = function MoreComponent_Factory(t) {
    return new (t || MoreComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MoreComponent,
    selectors: [["app-more"]],
    viewQuery: function MoreComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.detailedDescription = _t.first);
      }
    },
    decls: 89,
    vars: 3,
    consts: [["aria-label", "Pagination", 1, "flex", "items-center", "justify-between", "pb-4"], ["rel", "prev", "href", "/admin/dashboard", 1, "relative", "inline-flex", "items-center", "rounded-md", "border", "border-emerald-700", "bg-transparent", "px-4", "py-2", "text-sm", "font-medium", "text-emerald-700", "hover:bg-emerald-50"], ["stroke", "currentColor", "fill", "currentColor", "stroke-width", "0", "viewBox", "0 0 448 512", "height", "1em", "width", "1em", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"], [1, "grid", "grid-cols-1", "my-4", "xl:grid-cols-2", "2xl:grid-cols-3", "gap-5"], [1, "card", "p-8", "2xl:col-span-2"], [1, "card-title"], [1, "text-xl", "font-bold", "leading-none"], [1, "mt-5"], [1, "max-w-2xl", "p-4"], [1, "grid", "grid-cols-12", "gap-x-6", "space-y-4"], [1, "col-span-12", "md:col-span-8", "mb-4"], [1, "col-span-full"], ["for", "cover-photo", 1, "block", "text-sm", "font-medium", "leading-6", "text-gray-900"], [1, "mt-2", "flex", "justify-center", "rounded-lg", "border", "border-dashed", "border-gray-900/25", "px-6", "py-8"], [1, "text-center"], ["viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true", 1, "mx-auto", "h-12", "w-12", "text-gray-300"], ["fill-rule", "evenodd", "d", "M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z", "clip-rule", "evenodd"], [1, "mt-4", "flex", "text-sm", "leading-6", "text-gray-600"], ["for", "file-upload", 1, "relative", "cursor-pointer", "rounded-md", "bg-white", "font-semibold", "text-emerald-600", "focus-within:outline-none", "hover:text-emerald-500"], ["id", "file-upload", "name", "file-upload", "type", "file", 1, "sr-only"], [1, "pl-1"], [1, "text-xs", "leading-5", "text-gray-600"], [1, "col-span-12", "md:col-span-6"], [1, "form-group"], ["for", "name", 1, "form-label", "required"], ["type", "text", "id", "name", "placeholder", "Name", 1, "form-control"], ["for", "Desctiption", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["id", "Desctiption", "rows", "4", "placeholder", "Write your thoughts here...", 1, "form-control", "block", "p-2.5", "w-full", "text-sm", "text-gray-900", "bg-gray-50", "rounded-lg", "border", "border-gray-300", "focus:ring-emerald-500", "focus:border-emerald-500", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "email", 1, "form-label", "required"], ["type", "text", "id", "email", "placeholder", "example@gmail.com", 1, "form-control"], ["for", "host", 1, "form-label"], ["type", "text", "id", "host", "placeholder", "Host", 1, "form-control"], ["for", "sms", 1, "form-label"], ["type", "text", "id", "sms", "placeholder", "SMS", 1, "form-control"], ["for", "callback", 1, "form-label"], ["type", "text", "id", "callback", "placeholder", "Callback", 1, "form-control"], ["for", "secretKey", 1, "form-label"], ["type", "text", "id", "secretKey", "placeholder", "Secret Key", 1, "form-control"], ["for", "accessKey", 1, "form-label"], ["type", "text", "id", "accessKey", "placeholder", "Access Key", 1, "form-control"], ["for", "paymentMethods", 1, "form-label"], ["type", "text", "id", "paymentMethods", "placeholder", "Payment Methods", 1, "form-control"], [1, "mt-10", "flex", "gap-x-6"], ["type", "button", 1, "text-sm", "font-semibold", "leading-6", "text-gray-900"], ["type", "submit", 1, "btn", "bg-emerald-300", "hover:bg-emerald-600", "btn-sm"], [1, "card", "p-8", 2, "max-height", "560px"], [1, "card-title", "flex", "justify-between", "items-center", "mb-4"], [1, "overflow-y-auto", "overflow-x-hidden", "pr-4", 2, "max-height", "460px"], ["role", "list", 1, "divide-y", "divide-gray-200"], ["class", "py-3 sm:py-4", 4, "ngFor", "ngForOf"], [1, "py-3", "sm:py-4"], [1, "flex", "items-center", "space-x-4"], [1, "flex-shrink-0"], ["src", "https://placehold.co/100x100", "alt", "user image", 1, "w-8", "h-8", "rounded-full"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-gray-900", "truncate"], [1, "inline-flex", "items-center", "text-base", "font-semibold", "text-gray-900"], [1, "inline-flex", "items-center", "me-5", "cursor-pointer"], ["type", "checkbox", "value", "", 1, "sr-only", "peer"], [1, "relative", "w-11", "h-6", "bg-gray-200", "rounded-full", "peer", "dark:bg-gray-700", "peer-focus:ring-4", "peer-focus:ring-emerald-300", "dark:peer-focus:ring-emerald-800", "peer-checked:after:translate-x-full", "rtl:peer-checked:after:-translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-0.5", "after:start-[2px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-5", "after:w-5", "after:transition-all", "dark:border-gray-600", "peer-checked:bg-emerald-600"]],
    template: function MoreComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u00A0 Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "section", 4)(7, "div", 5)(8, "div", 6)(9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Marchand form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "form", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Cover photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18)(23, "label", 19)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Upload a Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "or drag and drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "PNG, JPG up to 10MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23)(32, "div", 24)(33, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 23)(37, "div", 24)(38, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Desctiption");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 23)(42, "div", 24)(43, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Gmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 23)(47, "div", 24)(48, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Host");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 23)(52, "div", 24)(53, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " SMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 23)(57, "div", 24)(58, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 23)(62, "div", 24)(63, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Secret Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 23)(67, "div", 24)(68, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Access Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 23)(72, "div", 24)(73, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Payment Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 43)(77, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 46)(82, "div", 47)(83, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Attribuer les Modes de Paiement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 48)(86, "ul", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, MoreComponent_li_87_Template, 11, 0, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "app-scroll-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@pageTransition", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_1__.ScrollToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3JlLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3MvbW9yZS9tb3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__.pageTransition]
    }
  });
}

/***/ }),

/***/ 3597:
/*!*************************************************************************!*\
  !*** ./src/app/marchand/views/scroll-to-top/scroll-to-top.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollToTopComponent: () => (/* binding */ ScrollToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ScrollToTopComponent {
  // Function to scroll to the top of the page smoothly
  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  // Listen to the scroll event and toggle button visibility based on scroll position
  onWindowScroll() {
    const toTopButton = document.getElementById("to-top-button");
    if (toTopButton) {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTopButton.classList.remove("hidden");
      } else {
        toTopButton.classList.add("hidden");
      }
    }
  }
  static #_ = this.ɵfac = function ScrollToTopComponent_Factory(t) {
    return new (t || ScrollToTopComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ScrollToTopComponent,
    selectors: [["app-scroll-to-top"]],
    hostBindings: function ScrollToTopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollToTopComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 0,
    consts: [["id", "to-top-button", "title", "Go To Top", 1, "hidden", "fixed", "z-50", "bottom-10", "right-10", "p-4", "border-0", "w-14", "h-14", "rounded-full", "shadow-md", "bg-emerald-500", "hover:bg-emerald-700", "text-white", "text-lg", "font-semibold", "transition-colors", "duration-300", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-6", "h-6"], ["d", "M12 4l8 8h-6v8h-4v-8H4l8-8z"], [1, "sr-only"]],
    template: function ScrollToTopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToTopComponent_Template_button_click_0_listener() {
          return ctx.goToTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JvbGwtdG8tdG9wLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3Mvc2Nyb2xsLXRvLXRvcC9zY3JvbGwtdG8tdG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3463:
/*!**********************************************************************!*\
  !*** ./src/app/marchand/views/settings/profile/profile.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/animations */ 3985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ProfileComponent {
  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 123,
    vars: 0,
    consts: [[1, "grid", "grid-cols-1", "px-4", "pt-6", "xl:grid-cols-3", "xl:gap-4", "dark:bg-gray-900"], [1, "mb-4", "col-span-full", "xl:mb-2"], [1, "text-xl", "font-semibold", "text-gray-900", "sm:text-2xl", "dark:text-white"], [1, "col-span-full", "xl:col-auto"], [1, "p-4", "mb-4", "bg-white", "rounded-lg", "shadow-sm", "2xl:col-span-2", "sm:p-6", "dark:bg-gray-800"], [1, "items-center", "sm:flex", "xl:block", "2xl:flex", "sm:space-x-4", "xl:space-x-0", "2xl:space-x-4"], ["src", "https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png", "alt", "Jese picture", 1, "mb-4", "rounded-lg", "w-28", "h-28", "sm:mb-0", "xl:mb-4", "2xl:mb-0"], [1, "mb-1", "text-xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "mb-4", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "space-x-4"], ["type", "button", 1, "inline-flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "text-center", "text-white", "rounded-lg", "bg-emerald-600", "hover:bg-emerald-700", "focus:ring-4", "focus:ring-emerald-300", "dark:bg-emerald-600", "dark:hover:bg-emerald-600", "dark:focus:ring-emerald-700"], ["fill", "currentColor", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "w-4", "h-4", "mr-2", "-ml-1"], ["d", "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"], ["d", "M9 13h2v5a1 1 0 11-2 0v-5z"], ["type", "button", 1, "py-2", "px-3", "text-sm", "font-medium", "text-gray-900", "focus:outline-none", "bg-white", "rounded-lg", "border", "hover:bg-gray-100", "hover:text-blue-700", "focus:z-10", "focus:ring-4", "focus:ring-gray-200", "dark:focus:ring-gray-700", "dark:bg-gray-800", "dark:text-gray-400", "dark:hover:text-white", "dark:hover:bg-gray-700"], [1, "col-span-2"], [1, "mb-4", "text-xl", "font-semibold", "dark:text-white"], ["action", "#"], [1, "grid", "grid-cols-6", "gap-6"], [1, "col-span-6", "sm:col-span-3"], ["for", "first-name", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "first-name", "id", "first-name", "placeholder", "Bonnie", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "last-name", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "last-name", "id", "last-name", "placeholder", "Green", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "country", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "country", "id", "country", "placeholder", "United States", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "city", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "city", "id", "city", "placeholder", "e.g. San Francisco", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "address", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "address", "id", "address", "placeholder", "e.g. California", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "email", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "email", "name", "email", "id", "email", "placeholder", "example@company.com", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "phone-number", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "number", "name", "phone-number", "id", "phone-number", "placeholder", "e.g. +(12)3456 789", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "birthday", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "number", "name", "birthday", "id", "birthday", "placeholder", "15/08/1990", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "organization", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "organization", "id", "organization", "placeholder", "Company Name", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "role", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "role", "id", "role", "placeholder", "React Developer", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "department", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "department", "id", "department", "placeholder", "Development", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "zip-code", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "number", "name", "zip-code", "id", "zip-code", "placeholder", "123456", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], [1, "col-span-6", "sm:col-full"], ["type", "submit", 1, "text-white", "bg-emerald-600", "hover:bg-emerald-700", "focus:ring-4", "focus:ring-emerald-300", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "text-center", "dark:bg-emerald-600", "dark:hover:bg-emerald-600", "dark:focus:ring-emerald-700"], ["for", "current-password", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "current-password", "id", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"], ["for", "password", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["data-popover-target", "popover-password", "data-popover-placement", "bottom", "type", "password", "id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "bg-gray-50", "border", "text-gray-900", "text-sm", "rounded-lg", "focus:ring-blue-500", "focus:border-blue-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-blue-500", "dark:focus:border-blue-500"], ["data-popover", "", "id", "popover-password", "role", "tooltip", 1, "absolute", "z-10", "invisible", "inline-block", "text-sm", "font-light", "text-gray-500", "transition-opacity", "duration-300", "bg-white", "border", "rounded-lg", "shadow-sm", "opacity-0", "w-72", "dark:bg-gray-800", "dark:text-gray-400"], [1, "p-3", "space-y-2"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "grid", "grid-cols-4", "gap-2"], [1, "h-1", "bg-orange-300", "dark:bg-orange-400"], [1, "h-1", "bg-gray-200", "dark:bg-gray-600"], [1, "flex", "items-center", "mb-1"], ["aria-hidden", "true", "fill", "currentColor", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "w-4", "h-4", "mr-2", "text-green-400", "dark:text-green-500"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], ["aria-hidden", "true", "fill", "currentColor", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "w-4", "h-4", "mr-2", "text-gray-300", "dark:text-gray-400"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "flex", "items-center"], ["data-popper-arrow", ""], ["for", "confirm-password", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["type", "text", "name", "confirm-password", "id", "confirm-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "shadow-sm", "bg-gray-50", "border", "text-gray-900", "sm:text-sm", "rounded-lg", "focus:ring-emerald-500", "focus:border-emerald-500", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-emerald-500", "dark:focus:border-emerald-500"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Profile settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Profile picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " JPG, GIF or PNG. Max size of 800K ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "path", 12)(17, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "div", 4)(23, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "General information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form", 17)(26, "div", 18)(27, "div", 19)(28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19)(32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19)(36, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19)(40, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19)(44, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19)(48, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 19)(52, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 19)(56, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 19)(60, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 19)(64, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 19)(68, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 19)(72, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Zip/postal code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 44)(76, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Save all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 4)(79, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Password information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "form", 17)(82, "div", 18)(83, "div", 19)(84, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 19)(88, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 50)(92, "div", 51)(93, "h3", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Must have at least 6 characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "div", 54)(97, "div", 54)(98, "div", 55)(99, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "It\u2019s better to have:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "ul")(103, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "svg", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " Upper & lower case letters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "svg", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " A symbol (#$&) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "svg", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " A longer password (min. 12 chars.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 19)(117, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 44)(121, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Save all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3Mvc2V0dGluZ3MvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__.pageTransition]
    }
  });
}

/***/ }),

/***/ 5141:
/*!************************************************************!*\
  !*** ./src/app/marchand/views/settings/settings.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModule: () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 3463);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users.component */ 8104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class SettingsModule {
  static #_ = this.ɵfac = function SettingsModule_Factory(t) {
    return new (t || SettingsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: SettingsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent]
  });
})();

/***/ }),

/***/ 8104:
/*!******************************************************************!*\
  !*** ./src/app/marchand/views/settings/users/users.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/animations */ 3985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class UsersComponent {
  static #_ = this.ɵfac = function UsersComponent_Factory(t) {
    return new (t || UsersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UsersComponent,
    selectors: [["app-users"]],
    decls: 0,
    vars: 0,
    template: function UsersComponent_Template(rf, ctx) {},
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3Mvc2V0dGluZ3MvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [src_app_shared_utils_animations__WEBPACK_IMPORTED_MODULE_0__.pageTransition]
    }
  });
}

/***/ }),

/***/ 9106:
/*!*********************************************************************!*\
  !*** ./src/app/marchand/views/transaction/transaction.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionComponent: () => (/* binding */ TransactionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class TransactionComponent {
  static #_ = this.ɵfac = function TransactionComponent_Factory(t) {
    return new (t || TransactionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TransactionComponent,
    selectors: [["app-transaction"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 205,
    vars: 0,
    consts: [[1, "container", "px-4", "mx-auto"], [1, "flex", "flex-col"], [1, "-mx-4", "-my-2", "overflow-x-auto", "sm:-mx-6", "lg:-mx-8"], [1, "inline-block", "min-w-full", "py-2", "align-middle", "md:px-6", "lg:px-8"], [1, "overflow-hidden", "border", "border-gray-200", "dark:border-gray-700", "md:rounded-lg"], [1, "min-w-full", "divide-y", "divide-gray-200", "dark:divide-gray-700"], [1, "bg-gray-50", "dark:bg-gray-800"], ["scope", "col", 1, "py-3.5", "px-4", "text-sm", "font-normal", "text-left", "rtl:text-right", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-x-3"], ["type", "checkbox", 1, "text-blue-500", "border-gray-300", "rounded", "dark:bg-gray-900", "dark:ring-offset-gray-900", "dark:border-gray-700"], [1, "flex", "items-center", "gap-x-2"], ["viewBox", "0 0 10 11", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-3"], ["d", "M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "0.1"], ["d", "M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "0.1"], ["d", "M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "0.3"], ["scope", "col", 1, "px-4", "py-3.5", "text-sm", "font-normal", "text-left", "rtl:text-right", "text-gray-500", "dark:text-gray-400"], ["scope", "col", 1, "relative", "py-3.5", "px-4"], [1, "sr-only"], [1, "bg-white", "divide-y", "divide-gray-200", "dark:divide-gray-700", "dark:bg-gray-900"], [1, "px-4", "py-4", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-200", "whitespace-nowrap"], [1, "inline-flex", "items-center", "gap-x-3"], [1, "px-4", "py-4", "text-sm", "text-gray-500", "dark:text-gray-300", "whitespace-nowrap"], [1, "px-4", "py-4", "text-sm", "font-medium", "text-gray-700", "whitespace-nowrap"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "gap-x-2", "text-emerald-500", "bg-emerald-100/60", "dark:bg-gray-800"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 3L4.5 8.5L2 6", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "text-sm", "font-normal"], ["src", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", "alt", "", 1, "object-cover", "w-8", "h-8", "rounded-full"], [1, "text-sm", "font-medium", "text-gray-800", "dark:text-white"], [1, "text-xs", "font-normal", "text-gray-600", "dark:text-gray-400"], [1, "px-4", "py-4", "text-sm", "whitespace-nowrap"], [1, "flex", "items-center", "gap-x-6"], [1, "text-gray-500", "transition-colors", "duration-200", "dark:hover:text-indigo-500", "dark:text-gray-300", "hover:text-indigo-500", "focus:outline-none"], [1, "text-blue-500", "transition-colors", "duration-200", "hover:text-indigo-500", "focus:outline-none"], [1, "inline-flex", "items-center", "px-3", "py-1", "text-red-500", "rounded-full", "gap-x-2", "bg-red-100/60", "dark:bg-gray-800"], ["d", "M9 3L3 9M3 3L9 9", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["src", "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", "alt", "", 1, "object-cover", "w-8", "h-8", "rounded-full"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "text-gray-500", "text-center"], [1, "inline-block"], ["href", "/marchand/dashboard/transaction", 1, "inline-block", "px-6", "py-3", "font-sans", "text-xs", "font-bold", "text-gray-900", "uppercase", "align-middle", "transition-all", "rounded-lg", "select-none", "disabled:opacity-50", "disabled:shadow-none", "disabled:pointer-events-none", "hover:bg-gray-900/10", "active:bg-gray-900/20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"], ["src", "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80", "alt", "", 1, "object-cover", "w-8", "h-8", "rounded-full"], ["src", "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80", "alt", "", 1, "object-cover", "w-8", "h-8", "rounded-full"], [1, "inline-flex", "items-center", "px-3", "py-1", "text-gray-500", "rounded-full", "gap-x-2", "bg-gray-100/60", "dark:bg-gray-800"], ["d", "M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10", "stroke", "#667085", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["src", "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80", "alt", "", 1, "object-cover", "w-8", "h-8", "rounded-full"], [1, "flex", "items-center", "justify-between", "mt-6"], ["href", "#", 1, "flex", "items-center", "px-5", "py-2", "text-sm", "text-gray-700", "capitalize", "transition-colors", "duration-200", "bg-white", "border", "rounded-md", "gap-x-2", "hover:bg-gray-100", "dark:bg-gray-900", "dark:text-gray-200", "dark:border-gray-700", "dark:hover:bg-gray-800"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "rtl:-scale-x-100"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"], [1, "items-center", "hidden", "md:flex", "gap-x-3"], ["href", "#", 1, "px-2", "py-1", "text-sm", "text-blue-500", "rounded-md", "dark:bg-gray-800", "bg-blue-100/60"], ["href", "#", 1, "px-2", "py-1", "text-sm", "text-gray-500", "rounded-md", "dark:hover:bg-gray-800", "dark:text-gray-300", "hover:bg-gray-100"]],
    template: function TransactionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "table", 5)(6, "thead", 6)(7, "tr")(8, "th", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12)(16, "path", 13)(17, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Purchase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 16)(27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody", 18)(30, "tr")(31, "td", 19)(32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "#3066");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Jan 6, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 22)(39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 21)(45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div")(48, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Arthur Melo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "authurmelo@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Monthly subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 30)(55, "div", 31)(56, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Archive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr")(61, "td", 19)(62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "#3065");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Jan 5, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 22)(69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 21)(75, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div")(78, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Andi Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "andi@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Monthly subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 37)(85, "div", 38)(86, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr")(90, "td", 19)(91, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "#3064");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Jan 5, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td", 22)(98, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 21)(104, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div")(107, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Kate Morrison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "kate@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Monthly subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 30)(114, "div", 31)(115, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Archive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr")(120, "td", 19)(121, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "#3063");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Jan 4, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 22)(128, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 21)(134, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div")(137, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Candice Wu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "candice@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Monthly subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 30)(144, "div", 31)(145, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Archive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr")(150, "td", 19)(151, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "#3062");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Jan 4, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td", 22)(158, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Refunded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 21)(164, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div")(167, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Orlando Diggs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "orlando@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Monthly subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td", 30)(174, "div", 31)(175, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Archive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 47)(180, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 51)(186, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 48)(201, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFyY2hhbmQvdmlld3MvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_marchand_marchand_module_ts.js.map