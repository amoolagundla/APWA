(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Update.service.ts":
/*!***********************************!*\
  !*** ./src/app/Update.service.ts ***!
  \***********************************/
/*! exports provided: UpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateService", function() { return UpdateService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateService = /** @class */ (function () {
    function UpdateService(updates) {
        this.updates = updates;
        if (updates.isEnabled) {
            updates.checkForUpdate()
                .then(function () { return console.log('checking for updates'); });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(6 * 60 * 60).subscribe(function () { return updates.checkForUpdate()
                .then(function () { return console.log('checking for updates'); }); });
        }
    }
    UpdateService.prototype.checkForUpdates = function () {
        var _this = this;
        this.updates.available.subscribe(function (event) { return _this.promptUser(); });
    };
    UpdateService.prototype.promptUser = function () {
        alert('updating to new version');
        this.updates.activateUpdate().then(function () { return document.location.reload(); });
    };
    UpdateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]])
    ], UpdateService);
    return UpdateService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!-- ============================================================== -->\n    <!-- Preloader - style you can find in spinners.css -->\n    <!-- ============================================================== -->\n    <div class=\"preloader\">\n        <div class=\"loader\">\n            <div class=\"loader__figure\"></div>\n            <p class=\"loader__label\">Admin Pro</p>\n        </div>\n    </div>\n    <!-- ============================================================== -->\n    <!-- Main wrapper - style you can find in pages.scss -->\n    <!-- ============================================================== -->\n    <div id=\"main-wrapper\">\n        <!-- ============================================================== -->\n        <!-- Topbar header - style you can find in pages.scss -->\n        <!-- ============================================================== -->\n        <header class=\"topbar\">\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n                <!-- ============================================================== -->\n                <!-- Logo -->\n                <!-- ============================================================== -->\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"index.html\">\n                        <!-- Logo icon --><b>\n                            <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n                            <!-- Dark Logo icon -->\n                            <img src=\"../assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n                          \n                        </b>\n                    </a>\n                      \n                </div>\n                <!-- ============================================================== -->\n                <!-- End Logo -->\n                <!-- ============================================================== -->\n                <div class=\"navbar-collapse\">\n                    <!-- ============================================================== -->\n                    <!-- toggle and nav items -->\n                    <!-- ============================================================== -->\n                    <ul class=\"navbar-nav mr-auto\">\n                        <!-- This is  -->\n                        <li class=\"nav-item\"> <a class=\"nav-link nav-toggler hidden-md-up waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </li>\n                        <li class=\"nav-item\"> <a class=\"nav-link sidebartoggler hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </li>\n                        <li class=\"nav-item hidden-sm-down\"></li>\n                    </ul>\n                    <!-- ============================================================== -->\n                    <!-- User profile and search -->\n                    <!-- ============================================================== -->\n                    <ul class=\"navbar-nav my-lg-0\">\n                        <!-- ============================================================== -->\n                        <!-- Search -->\n                        <!-- ============================================================== -->\n                        <li class=\"nav-item hidden-xs-down search-box\"> <a class=\"nav-link hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"ti-search\"></i></a>\n                            <form class=\"app-search\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\"> <a class=\"srh-btn\"><i class=\"ti-close\"></i></a> </form>\n                        </li>\n                        <!-- ============================================================== -->\n                        <!-- Comment -->\n                        <!-- ============================================================== -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"mdi mdi-message\"></i>\n                                <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right mailbox animated bounceInDown\">\n                                <ul>\n                                    <li>\n                                        <div class=\"drop-title\">Notifications</div>\n                                    </li>\n                                    <li>\n                                        <div class=\"message-center\">\n                                            <!-- Message -->\n                                            <a href=\"#\">\n                                                <div class=\"btn btn-danger btn-circle\"><i class=\"fa fa-link\"></i></div>\n                                                <div class=\"mail-contnet\">\n                                                    <h5>Luanch Admin</h5> <span class=\"mail-desc\">Just see the my new admin!</span> <span class=\"time\">9:30 AM</span> </div>\n                                            </a>\n                                            <!-- Message -->\n                                            <a href=\"#\">\n                                                <div class=\"btn btn-success btn-circle\"><i class=\"ti-calendar\"></i></div>\n                                                <div class=\"mail-contnet\">\n                                                    <h5>Event today</h5> <span class=\"mail-desc\">Just a reminder that you have event</span> <span class=\"time\">9:10 AM</span> </div>\n                                            </a>\n                                            <!-- Message -->\n                                            <a href=\"#\">\n                                                <div class=\"btn btn-info btn-circle\"><i class=\"ti-settings\"></i></div>\n                                                <div class=\"mail-contnet\">\n                                                    <h5>Settings</h5> <span class=\"mail-desc\">You can customize this template as you want</span> <span class=\"time\">9:08 AM</span> </div>\n                                            </a>\n                                            <!-- Message -->\n                                            <a href=\"#\">\n                                                <div class=\"btn btn-primary btn-circle\"><i class=\"ti-user\"></i></div>\n                                                <div class=\"mail-contnet\">\n                                                    <h5>Pavan kumar</h5> <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:02 AM</span> </div>\n                                            </a>\n                                        </div>\n                                    </li>\n                                    <li>\n                                        <a class=\"nav-link text-center\" href=\"javascript:void(0);\"> <strong>Check all notifications</strong> <i class=\"fa fa-angle-right\"></i> </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                        <!-- ============================================================== -->\n                        <!-- End Comment -->\n                        <!-- ============================================================== -->\n                        <!-- ============================================================== -->\n                        <!-- Messages -->\n                        <!-- ============================================================== -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" id=\"2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"mdi mdi-email\"></i>\n                                <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\n                            </a>\n                           \n                        </li>\n                        <!-- ============================================================== -->\n                        <!-- End Messages -->\n                        <!-- ============================================================== -->\n                        <!-- ============================================================== -->\n                        <!-- mega menu -->\n                        <!-- ============================================================== -->\n                        <li class=\"nav-item dropdown mega-dropdown\"> <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"mdi mdi-view-grid\"></i></a>\n                            <div class=\"dropdown-menu animated bounceInDown\">\n                                <ul class=\"mega-dropdown-menu row\">\n                                    <li class=\"col-lg-3 col-xlg-2 m-b-30\">\n                                        <h4 class=\"m-b-20\">CAROUSEL</h4>\n                                        \n                                    </li>\n                                    <li class=\"col-lg-3 m-b-30\">\n                                        <h4 class=\"m-b-20\">ACCORDION</h4>\n                                        <!-- Accordian -->\n                                        <div id=\"accordion\" class=\"nav-accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                                            <div class=\"card\">\n                                                <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                                                    <h5 class=\"mb-0\">\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                                  Collapsible Group Item #1\n                                                </a>\n                                              </h5> </div>\n                                                <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                                                    <div class=\"card-body\"> Anim pariatur cliche reprehenderit, enim eiusmod high. </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"card\">\n                                                <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                                                    <h5 class=\"mb-0\">\n                                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                                                  Collapsible Group Item #2\n                                                </a>\n                                              </h5> </div>\n                                                <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                                                    <div class=\"card-body\"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"card\">\n                                                <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n                                                    <h5 class=\"mb-0\">\n                                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                                  Collapsible Group Item #3\n                                                </a>\n                                              </h5> </div>\n                                                <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                                                    <div class=\"card-body\"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </li>\n                                    <li class=\"col-lg-3  m-b-30\">\n                                        <h4 class=\"m-b-20\">CONTACT US</h4>\n                                        <!-- Contact -->\n                                        <form>\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" class=\"form-control\" id=\"exampleInputname1\" placeholder=\"Enter Name\"> </div>\n                                            <div class=\"form-group\">\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\"> </div>\n                                            <div class=\"form-group\">\n                                                <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" placeholder=\"Message\"></textarea>\n                                            </div>\n                                            <button type=\"submit\" class=\"btn btn-info\">Submit</button>\n                                        </form>\n                                    </li>\n                                    <li class=\"col-lg-3 col-xlg-4 m-b-30\">\n                                        <h4 class=\"m-b-20\">List style</h4>\n                                        <!-- List style -->\n                                        <ul class=\"list-style-none\">\n                                            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> You can give link</a></li>\n                                            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> Give link</a></li>\n                                            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> Another Give link</a></li>\n                                            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> Forth link</a></li>\n                                            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> Another fifth link</a></li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                        <!-- ============================================================== -->\n                        <!-- End mega menu -->\n                        <!-- ============================================================== -->\n                        <!-- ============================================================== -->\n                        <!-- Language -->\n                        <!-- ============================================================== -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"flag-icon flag-icon-us\"></i></a>\n                            <div class=\"dropdown-menu dropdown-menu-right animated bounceInDown\"> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-in\"></i> India</a> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-fr\"></i> French</a> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-cn\"></i> China</a> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-de\"></i> Dutch</a> </div>\n                        </li>\n                        <!-- ============================================================== -->\n                        <!-- Profile -->\n                        <!-- ============================================================== -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"../assets/images/users/1.jpg\" alt=\"user\" class=\"profile-pic\" /></a>\n                            <div class=\"dropdown-menu dropdown-menu-right animated flipInY\">\n                                <ul class=\"dropdown-user\">\n                                    <li>\n                                        <div class=\"dw-user-box\">\n                                            <div class=\"u-img\"><img src=\"../assets/images/users/1.jpg\" alt=\"user\"></div>\n                                            <div class=\"u-text\">\n                                                <h4>Steave Jobs</h4>\n                                                <p class=\"text-muted\">varun@gmail.com</p><a href=\"pages-profile.html\" class=\"btn btn-rounded btn-danger btn-sm\">View Profile</a></div>\n                                        </div>\n                                    </li>\n                                    <li role=\"separator\" class=\"divider\"></li>\n                                    <li><a href=\"#\"><i class=\"ti-user\"></i> My Profile</a></li>\n                                    <li><a href=\"#\"><i class=\"ti-wallet\"></i> My Balance</a></li>\n                                    <li><a href=\"#\"><i class=\"ti-email\"></i> Inbox</a></li>\n                                    <li role=\"separator\" class=\"divider\"></li>\n                                    <li><a href=\"#\"><i class=\"ti-settings\"></i> Account Setting</a></li>\n                                    <li role=\"separator\" class=\"divider\"></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-power-off\"></i> Logout</a></li>\n                                </ul>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </header>\n        <!-- ============================================================== -->\n        <!-- End Topbar header -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- Left Sidebar - style you can find in sidebar.scss  -->\n        <!-- ============================================================== -->\n        <aside class=\"left-sidebar\">\n            <!-- Sidebar scroll-->\n            <div class=\"scroll-sidebar\">\n                <!-- Sidebar navigation-->\n                <nav class=\"sidebar-nav\">\n                    <ul id=\"sidebarnav\">\n                        <li class=\"user-profile\"> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><img src=\"../assets/images/users/1.jpg\" alt=\"user\" /><span class=\"hide-menu\">Steave Jobs </span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"javascript:void()\">My Profile </a></li>\n                                <li><a href=\"javascript:void()\">My Balance</a></li>\n                                <li><a href=\"javascript:void()\">Inbox</a></li>\n                                <li><a href=\"javascript:void()\">Account Setting</a></li>\n                                <li><a href=\"javascript:void()\">Logout</a></li>\n                            </ul>\n                        </li>\n                        <li class=\"nav-devider\"></li>\n                        <li class=\"nav-small-cap\">PERSONAL</li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i><span class=\"hide-menu\">Dashboard <span class=\"label label-rouded label-themecolor pull-right\">4</span></span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"index.html\">Minimal </a></li>\n                                <li><a href=\"index2.html\">Analytical</a></li>\n                                <li><a href=\"index3.html\">Demographical</a></li>\n                                <li><a href=\"index4.html\">Modern</a></li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-bullseye\"></i><span class=\"hide-menu\">Apps</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"app-calendar.html\">Calendar</a></li>\n                                <li><a href=\"app-chat.html\">Chat app</a></li>\n                                <li><a href=\"app-ticket.html\">Support Ticket</a></li>\n                                <li><a href=\"app-contact.html\">Contact / Employee</a></li>\n                                <li><a href=\"app-contact2.html\">Contact Grid</a></li>\n                                <li><a href=\"app-contact-detail.html\">Contact Detail</a></li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-email\"></i><span class=\"hide-menu\">Inbox</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"app-email.html\">Mailbox</a></li>\n                                <li><a href=\"app-email-detail.html\">Mailbox Detail</a></li>\n                                <li><a href=\"app-compose.html\">Compose Mail</a></li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-chart-bubble\"></i><span class=\"hide-menu\">Ui Elements <span class=\"label label-rouded label-danger pull-right\">25</span></span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"ui-cards.html\">Cards</a></li>\n                                <li><a href=\"ui-user-card.html\">User Cards</a></li>\n                                <li><a href=\"ui-buttons.html\">Buttons</a></li>\n                                <li><a href=\"ui-modals.html\">Modals</a></li>\n                                <li><a href=\"ui-tab.html\">Tab</a></li>\n                                <li><a href=\"ui-tooltip-popover.html\">Tooltip &amp; Popover</a></li>\n                                <li><a href=\"ui-tooltip-stylish.html\">Tooltip stylish</a></li>\n                                <li><a href=\"ui-sweetalert.html\">Sweet Alert</a></li>\n                                <li><a href=\"ui-notification.html\">Notification</a></li>\n                                <li><a href=\"ui-progressbar.html\">Progressbar</a></li>\n                                <li><a href=\"ui-nestable.html\">Nestable</a></li>\n                                <li><a href=\"ui-range-slider.html\">Range slider</a></li>\n                                <li><a href=\"ui-timeline.html\">Timeline</a></li>\n                                <li><a href=\"ui-typography.html\">Typography</a></li>\n                                <li><a href=\"ui-horizontal-timeline.html\">Horizontal Timeline</a></li>\n                                <li><a href=\"ui-session-timeout.html\">Session Timeout</a></li>\n                                <li><a href=\"ui-session-ideal-timeout.html\">Session Ideal Timeout</a></li>\n                                <li><a href=\"ui-bootstrap.html\">Bootstrap Ui</a></li>\n                                <li><a href=\"ui-breadcrumb.html\">Breadcrumb</a></li>\n                                <li><a href=\"ui-bootstrap-switch.html\">Bootstrap Switch</a></li>\n                                <li><a href=\"ui-list-media.html\">List Media</a></li>\n                                <li><a href=\"ui-ribbons.html\">Ribbons</a></li>\n                                <li><a href=\"ui-grid.html\">Grid</a></li>\n                                <li><a href=\"ui-carousel.html\">Carousel</a></li>\n                                <li><a href=\"ui-date-paginator.html\">Date-paginator</a></li>\n                                <li><a href=\"ui-dragable-portlet.html\">Dragable Portlet</a></li>\n                            </ul>\n                        </li>\n                        <li class=\"nav-small-cap\">FORMS, TABLE &amp; WIDGETS</li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-file\"></i><span class=\"hide-menu\">Forms</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"form-basic.html\">Basic Forms</a></li>\n                                <li><a href=\"form-layout.html\">Form Layouts</a></li>\n                                <li><a href=\"form-addons.html\">Form Addons</a></li>\n                                <li><a href=\"form-material.html\">Form Material</a></li>\n                                <li><a href=\"form-float-input.html\">Floating Lable</a></li>\n                                <li><a href=\"form-pickers.html\">Form Pickers</a></li>\n                                <li><a href=\"form-upload.html\">File Upload</a></li>\n                                <li><a href=\"form-mask.html\">Form Mask</a></li>\n                                <li><a href=\"form-validation.html\">Form Validation</a></li>\n                                <li><a href=\"form-dropzone.html\">File Dropzone</a></li>\n                                <li><a href=\"form-icheck.html\">Icheck control</a></li>\n                                <li><a href=\"form-img-cropper.html\">Image Cropper</a></li>\n                                <li><a href=\"form-bootstrapwysihtml5.html\">HTML5 Editor</a></li>\n                                <li><a href=\"form-typehead.html\">Form Typehead</a></li>\n                                <li><a href=\"form-wizard.html\">Form Wizard</a></li>\n                                <li><a href=\"form-xeditable.html\">Xeditable Editor</a></li>\n                                <li><a href=\"form-summernote.html\">Summernote Editor</a></li>\n                                <li><a href=\"form-tinymce.html\">Tinymce Editor</a></li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-table\"></i><span class=\"hide-menu\">Tables</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"table-basic.html\">Basic Tables</a></li>\n                                <li><a href=\"table-layout.html\">Table Layouts</a></li>\n                                <li><a href=\"table-data-table.html\">Data Tables</a></li>\n                                <li><a href=\"table-footable.html\">Footable</a></li>\n                                <li><a href=\"table-jsgrid.html\">Js Grid Table</a></li>\n                                <li><a href=\"table-responsive.html\">Responsive Table</a></li>\n                                <li><a href=\"table-bootstrap.html\">Bootstrap Tables</a></li>\n                                <li><a href=\"table-editable-table.html\">Editable Table</a></li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-widgets\"></i><span class=\"hide-menu\">Widgets</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"widget-data.html\">Data Widgets</a></li>\n                                <li><a href=\"widget-apps.html\">Apps Widgets</a></li>\n                                <li><a href=\"widget-charts.html\">Charts Widgets</a></li>\n            \n                            </ul>\n                        </li>\n                        <li class=\"nav-small-cap\">EXTRA COMPONENTS</li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-book-multiple\"></i><span class=\"hide-menu\">Page Layout</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"layout-single-column.html\">1 Column</a></li>\n                                <li><a href=\"layout-fix-header.html\">Fix header</a></li>\n                                <li><a href=\"layout-fix-sidebar.html\">Fix sidebar</a></li>\n                                <li><a href=\"layout-fix-header-sidebar.html\">Fixe header &amp; Sidebar</a></li>\n                                <li><a href=\"layout-boxed.html\">Boxed Layout</a></li>\n                                <li><a href=\"layout-logo-center.html\">Logo in Center</a></li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-book-open-variant\"></i><span class=\"hide-menu\">Sample Pages <span class=\"label label-rouded label-success pull-right\">25</span></span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"starter-kit.html\">Starter Kit</a></li>\n                                <li><a href=\"pages-blank.html\">Blank page</a></li>\n                                <li><a href=\"#\" class=\"has-arrow\">Authentication <span class=\"label label-rounded label-success pull-right\">6</span></a>\n                                    <ul aria-expanded=\"false\" class=\"collapse\">\n                                        <li><a href=\"pages-login.html\">Login 1</a></li>\n                                        <li><a href=\"pages-login-2.html\">Login 2</a></li>\n                                        <li><a href=\"pages-register.html\">Register</a></li>\n                                        <li><a href=\"pages-register2.html\">Register 2</a></li>\n                                        <li><a href=\"pages-lockscreen.html\">Lockscreen</a></li>\n                                        <li><a href=\"pages-recover-password.html\">Recover password</a></li>\n                                    </ul>\n                                </li>\n                                <li><a href=\"pages-profile.html\">Profile page</a></li>\n                                <li><a href=\"pages-animation.html\">Animation</a></li>\n                                <li><a href=\"pages-fix-innersidebar.html\">Sticky Left sidebar</a></li>\n                                <li><a href=\"pages-fix-inner-right-sidebar.html\">Sticky Right sidebar</a></li>\n                                <li><a href=\"pages-invoice.html\">Invoice</a></li>\n                                <li><a href=\"pages-treeview.html\">Treeview</a></li>\n                                <li><a href=\"pages-utility-classes.html\">Helper Classes</a></li>\n                                <li><a href=\"pages-search-result.html\">Search result</a></li>\n                                <li><a href=\"pages-scroll.html\">Scrollbar</a></li>\n                                <li><a href=\"pages-pricing.html\">Pricing</a></li>\n                                <li><a href=\"pages-lightbox-popup.html\">Lighbox popup</a></li>\n                                <li><a href=\"pages-gallery.html\">Gallery</a></li>\n                                <li><a href=\"pages-faq.html\">Faqs</a></li>\n                                <li><a href=\"#\" class=\"has-arrow\">Error Pages</a>\n                                    <ul aria-expanded=\"false\" class=\"collapse\">\n                                        <li><a href=\"pages-error-400.html\">400</a></li>\n                                        <li><a href=\"pages-error-403.html\">403</a></li>\n                                        <li><a href=\"pages-error-404.html\">404</a></li>\n                                        <li><a href=\"pages-error-500.html\">500</a></li>\n                                        <li><a href=\"pages-error-503.html\">503</a></li>\n                                    </ul>\n                                </li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-file-chart\"></i><span class=\"hide-menu\">Charts</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"chart-morris.html\">Morris Chart</a></li>\n                                <li><a href=\"chart-chartist.html\">Chartis Chart</a></li>\n                                <li><a href=\"chart-echart.html\">Echarts</a></li>\n                                <li><a href=\"chart-flot.html\">Flot Chart</a></li>\n                                <li><a href=\"chart-knob.html\">Knob Chart</a></li>\n                                <li><a href=\"chart-chart-js.html\">Chartjs</a></li>\n                                <li><a href=\"chart-sparkline.html\">Sparkline Chart</a></li>\n                                <li><a href=\"chart-extra-chart.html\">Extra chart</a></li>\n                                <li><a href=\"chart-peity.html\">Peity Charts</a></li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-brush\"></i><span class=\"hide-menu\">Icons</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"icon-material.html\">Material Icons</a></li>\n                                <li><a href=\"icon-fontawesome.html\">Fontawesome Icons</a></li>\n                                <li><a href=\"icon-themify.html\">Themify Icons</a></li>\n                                <li><a href=\"icon-linea.html\">Linea Icons</a></li>\n                                <li><a href=\"icon-weather.html\">Weather Icons</a></li>\n                                <li><a href=\"icon-simple-lineicon.html\">Simple Lineicons</a></li>\n                                <li><a href=\"icon-flag.html\">Flag Icons</a></li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-map-marker\"></i><span class=\"hide-menu\">Maps</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"map-google.html\">Google Maps</a></li>\n                                <li><a href=\"map-vector.html\">Vector Maps</a></li>\n                            </ul>\n                        </li>\n                        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-arrange-send-backward\"></i><span class=\"hide-menu\">Multi level dd</span></a>\n                            <ul aria-expanded=\"false\" class=\"collapse\">\n                                <li><a href=\"#\">item 1.1</a></li>\n                                <li><a href=\"#\">item 1.2</a></li>\n                                <li> <a class=\"has-arrow\" href=\"#\" aria-expanded=\"false\">Menu 1.3</a>\n                                    <ul aria-expanded=\"false\" class=\"collapse\">\n                                        <li><a href=\"#\">item 1.3.1</a></li>\n                                        <li><a href=\"#\">item 1.3.2</a></li>\n                                        <li><a href=\"#\">item 1.3.3</a></li>\n                                        <li><a href=\"#\">item 1.3.4</a></li>\n                                    </ul>\n                                </li>\n                                <li><a href=\"#\">item 1.4</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </nav>\n                <!-- End Sidebar navigation -->\n            </div>\n            <!-- End Sidebar scroll-->\n        </aside>\n        <!-- ============================================================== -->\n        <!-- End Left Sidebar - style you can find in sidebar.scss  -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- Page wrapper  -->\n        <!-- ============================================================== -->\n        <div class=\"page-wrapper\">\n            \n            <!-- ============================================================== -->\n            <!-- Container fluid  -->\n            <!-- ============================================================== -->\n            <div class=\"container-fluid\">\n           \n  \n                <div class=\"row\">\n                    <!-- Column -->\n                    <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"row p-t-10 p-b-10\">\n                                    <!-- Column -->\n                                    <div class=\"col p-r-0\">\n                                        <h1 class=\"font-light\">86</h1>\n                                        <h6 class=\"text-muted\">Abhi's Clients</h6></div>\n                                    <!-- Column -->\n                                    <div class=\"col text-right align-self-center\">\n                                        <div data-label=\"20%\" class=\"css-bar m-b-0 css-bar-primary css-bar-20\"><i class=\"mdi mdi-account-circle\"></i></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Column -->\n                    <!-- Column -->\n                    <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"row p-t-10 p-b-10\">\n                                    <!-- Column -->\n                                    <div class=\"col p-r-0\">\n                                        <h1 class=\"font-light\">248</h1>\n                                        <h6 class=\"text-muted\">All Projects</h6></div>\n                                    <!-- Column -->\n                                    <div class=\"col text-right align-self-center\">\n                                        <div data-label=\"30%\" class=\"css-bar m-b-0 css-bar-danger css-bar-20\"><i class=\"mdi mdi-briefcase-check\"></i></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Column -->\n                    <!-- Column -->\n                    <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"row p-t-10 p-b-10\">\n                                    <!-- Column -->\n                                    <div class=\"col p-r-0\">\n                                        <h1 class=\"font-light\">352</h1>\n                                        <h6 class=\"text-muted\">New Items</h6></div>\n                                    <!-- Column -->\n                                    <div class=\"col text-right align-self-center\">\n                                        <div data-label=\"40%\" class=\"css-bar m-b-0 css-bar-warning css-bar-40\"><i class=\"mdi mdi-star-circle\"></i></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Column -->\n                    <!-- Column -->\n                    <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"row p-t-10 p-b-10\">\n                                    <!-- Column -->\n                                    <div class=\"col p-r-0\">\n                                        <h1 class=\"font-light\">159</h1>\n                                        <h6 class=\"text-muted\">Invoices</h6></div>\n                                    <!-- Column -->\n                                    <div class=\"col text-right align-self-center\">\n                                        <div data-label=\"60%\" class=\"css-bar m-b-0 css-bar-info css-bar-60\"><i class=\"mdi mdi-receipt\"></i></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Column -->\n                </div>\n                  <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Simple Toastr Alerts</h4>\n                                    <h6 class=\"card-subtitle\">You can use four different alert <code>info, warning, success, and error</code> message.</h6>\n                                    <div class=\"button-box\">\n                                        <button class=\"tst1 btn btn-info\">Info Message</button>\n                                        <button class=\"tst2 btn btn-info\">warning Message</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                \n                \n                  <div class=\"row\">\n                      <div class=\"col-12 m-t-30\">\n                          <h4 class=\"m-b-0\">{{title}}</h4>\n                          <p class=\"text-muted m-t-0 font-12\">Cards include various options for customizing their backgrounds, borders, and color.<code>.card-primary info, warning, danger</code></p>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"card card-inverse\" style=\"background-color: #333; border-color: #333;\">\n                              <div class=\"card-header\">\n                                  <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n                              <div class=\"card-body\">\n                                  <h3 class=\"card-title\">Special title treatment</h3>\n                                  <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"card card-inverse card-info\">\n                              <div class=\"card-header\">\n                                  <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n                              <div class=\"card-body\">\n                                  <h3 class=\"card-title\">Special title treatment</h3>\n                                  <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                                  <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"card card-inverse card-primary\">\n                              <div class=\"card-header\">\n                                  <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n                              <div class=\"card-body\">\n                                  <h3 class=\"card-title\">Special title treatment</h3>\n                                  <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                                  <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"card card-inverse card-danger\">\n                              <div class=\"card-header\">\n                                  <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n                              <div class=\"card-body\">\n                                  <h3 class=\"card-title\">Special title treatment</h3>\n                                  <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                                  <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"card card-inverse card-warning\">\n                              <div class=\"card-header\">\n                                  <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n                              <div class=\"card-body\">\n                                  <h3 class=\"card-title\">Special title treatment</h3>\n                                  <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                                  <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"card card-inverse card-success\">\n                              <div class=\"card-header\">\n                                  <h4 class=\"m-b-0 text-white\">Card Title</h4></div>\n                              <div class=\"card-body\">\n                                  <h3 class=\"card-title\">Special title treatment</h3>\n                                  <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                                  <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n\n\n\n                  <router-outlet></router-outlet>\n\n\n          \n                \n            </div>\n            <!-- ============================================================== -->\n            <!-- End Container fluid  -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- footer -->\n            <!-- ============================================================== -->\n            <footer class=\"footer\">\n                © 2018 Admin Pro by wrappixel.com\n            </footer>\n            <!-- ============================================================== -->\n            <!-- End footer -->\n            <!-- ============================================================== -->\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Page wrapper  -->\n        <!-- ============================================================== -->\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Update.service */ "./src/app/Update.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(sw) {
        this.sw = sw;
        this.title = 'Abhi State';
        // check the service worker for updates
        this.sw.checkForUpdates();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_Update_service__WEBPACK_IMPORTED_MODULE_1__["UpdateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Update_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Update.service */ "./src/app/Update.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: true }),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
            ],
            providers: [_Update_service__WEBPACK_IMPORTED_MODULE_2__["UpdateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function () {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/ngsw-worker.js')
                .then(function (reg) {
                reg.addEventListener('updatefound', function (newWorker) {
                    // An updated service worker has appeared in reg.installing!
                    newWorker = reg.installing;
                    newWorker.addEventListener('statechange', function () {
                        // Has service worker state changed?
                        switch (newWorker.state) {
                            case 'installed':
                                // There is a new service worker available, show the notification
                                if (navigator.serviceWorker.controller) {
                                    console.log('hi');
                                    var txt;
                                    if (confirm("A new version of this app is available.!")) {
                                        alert('hi');
                                        window.location.reload(true);
                                    }
                                    else {
                                    }
                                }
                                break;
                        }
                    });
                });
            }).catch(function (err) {
                console.log(err);
            });
        }
    });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Data\APWA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map