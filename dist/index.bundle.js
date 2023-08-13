"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/logo.ttf */ "./src/assets/fonts/logo.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/hand.ttf */ "./src/assets/fonts/hand.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/sideBar.ttf */ "./src/assets/fonts/sideBar.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/body.ttf */ "./src/assets/fonts/body.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/correct.png */ "./src/assets/images/correct.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: logoFont;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: handFont;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
  font-family: sideBarFont;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
  font-family: bodyFont;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

:root {
  --primary: #f8cf5d;
  --secondary: #f1fdc9;
  --accent: #f0400a;
  --background: #e7edfe;
  --text: #010a22;
  --border: #000000;
}
html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--background);
  font-size: 16px;
  height: 100%;
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #cbd1e03a;
  padding-left: 2rem;
  padding-top: 0rem;
  display: flex;
  align-items: center;
  gap: 45rem;
  border-bottom: 2px solid var(--text);
}

.logo {
  font-size: 2.5rem;
  padding-top: 1rem;
  font-family: logoFont;
  color: var(--text);
  display: flex;
  gap: 0.2rem;
}

.logo-svg > svg {
  height: 3rem;
  width: 3rem;
  vertical-align: middle;
}

.logo > .logo-txt {
  background: linear-gradient(120deg, var(--accent), var(--primary));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sidebar-btn > button {
  margin: 0;
  padding: 3px;
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  cursor: pointer;
  background-color: #cbd1e000;
}

.sidebar-btn > button:hover {
  background-color: #cbd1e06c;
}

.content {
  display: flex;
  flex: 1;
}

.footer {
  font-size: 1rem;
  color: var(--text);
  font-family: bodyFont;
  background-color: #e1e3e9bb;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
}

.footer img {
  height: auto;
  width: 1.5rem;
  justify-content: center;
  border-radius: 50%;
}

.footer img:hover {
  background-color: var(--primary);
}

.footer a {
  text-decoration: none;
  color: var(--accent);
}

.sidebar {
  width: 19.5%;
  font-size: 1.4rem;
  font-family: bodyFont;
  padding-left: 1.5rem;
  background-color: var(--secondary);
}

.main-content {
  flex: 1;
  background-color: var(--background);
}

.sidebar > h2 {
  border-bottom: 2px solid var(--text);
  font-size: 1.8rem;
  margin-right: 2rem;
}

.sidebar .project-h2 {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
}

.project > .material-icons {
  margin-right: 2.5rem;
}

.sidebar img {
  height: auto;
  width: 1.8rem;
  vertical-align: middle;
  padding-left: 1.2rem;
}

.home-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
}

.home {
  padding: 0.32rem;
  display: flex;
  gap: 0.2rem;
}

.projects-section {
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project {
  display: flex;
  padding: 0.5rem;
  justify-content: space-around;
  width: 20.5rem;
  position: relative;
}

.add-project {
  padding: 1rem 0rem 0rem 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
}

.add-project > .material-icons {
  color: #da4518;
}

.project-title {
  width: 80%;
  display: flex;
  gap: 0.5rem;
  padding-left: 1.2rem;
}

.selected {
  margin-right: 2rem;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-left: solid 3px var(--accent) !important;
  background-color: var(--primary);
}

.project-header {
  font-size: 3rem;
  padding: 1rem;
  font-family: bodyFont;
  background-color: var(--primary);
  color: var(--text);
  margin: 2rem 3rem 2rem 3rem;
  border-radius: 5px;
}

.project-tasks {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.task {
  position: relative;
  cursor: pointer;
  background-color: var(--secondary);
  font-family: bodyFont;
  color: var(--text);
  display: flex;
  gap: 0.9rem;
  margin: 0rem 3rem 0rem 3rem;
  padding: 0.5rem;
  border: 2px solid var(--text);
  border-radius: 5px;
  user-select: none;
}

.task:hover {
  background-color: white;
}

.task-middle-info {
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 0.2rem;
}

.task-header {
  font-size: 1.6rem;
}

.task-details {
  font-size: 1.2rem;
}

.task-right-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
}

.task-right-info .material-icons {
  font-size: 1.6rem;
}

.task-right-info .date-info {
  height: fit-content;
  padding: 0.2rem;
  border: 1px solid var(--text);
  border-radius: 10px;
}

.task-right-info svg {
  height: auto;
  width: 2rem;
}

.task-left-info {
  display: flex;
  align-items: center;
}

.task-left-info .unchecked {
  width: 1.5rem;
  height: 1.5rem;
  border: solid 2px var(--text);
  border-radius: 50%;
  margin-right: 8px;
  margin-top: 10px;
}

.task-left-info .checked {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-size: 100%;
  background-repeat: no-repeat;
  background-origin: border-box;
}

.star {
  position: relative;
  user-select: none;
}

.star .filled-star {
  position: absolute;
  left: 0;
  color: #f5b400;
  /*   display: none; */
}

.star .star-unselected {
  display: none;
}

.home:hover,
.project:hover {
  margin-right: 2rem;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-left: solid 3px #a7a7a8d0 !important;
  background-color: var(--background);
}

.selected:hover {
  margin-right: 2rem;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-left: solid 3px var(--accent) !important;
  background-color: var(--primary);
}

#newProject {
  padding-left: 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.newProject-form {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.newProject-form input {
  height: auto;
  width: 64%;
  font-family: bodyFont;
  font-size: 1.3rem;
}

.newProject-btn {
  display: flex;
  margin-left: 3.7rem;
  gap: 1.5rem;
}

.newProject-btn button,
.new-task-button button,
.renameProject-btn button {
  height: auto;
  width: 4.2rem;
  font-family: bodyFont;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.3rem;
}

button.done {
  background-color: rgb(13, 167, 13);
  color: white;
}

button.cancel {
  background-color: rgb(204, 11, 11);
  color: white;
}

.add-task {
  margin-left: 3rem;
  padding: 0.5rem 0rem 0.5rem 0rem;
  font-family: bodyFont;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 4px;
  font-size: 1.5rem;
  padding-left: 0.5rem;
  margin-right: 3rem;
  cursor: pointer;
}

.add-task > .material-icons {
  font-size: 2rem;
  color: #da4518;
}

.task.new-task {
  border: none;
  display: block;
  padding: 1rem;
  padding-right: 1.7rem;
  background-color: rgb(255, 255, 255);
  font-size: 1.2rem;
}

.new-task.hidden {
  display: none;
}

#newTask {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.new-task input {
  font-size: 1.2rem;
  width: 100%;
  height: 1.8rem;
  border: 0.13rem solid var(--text);
  border-radius: 3px;
}

.new-task textarea {
  border: 0.13rem solid var(--text);
  font-size: 1.1rem;
  border-radius: 3px;
  width: 100%;
  resize: none;
}

.new-task-button {
  padding-top: 1rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.completed {
  background-color: rgb(226, 223, 222);
  color: #6d81b9;
  border-color: #768bc5;
}

.completed:hover {
  background-color: rgb(235, 232, 232);
  color: #6d81b9;
  border-color: #768bc5;
}

.completed::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--text);
}

.options-popup {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  bottom: 2.7rem;
  right: 3.8rem;
  background-color: var(--background);
  border-radius: 4px;
  box-shadow: 2px 2px 5px 2px #b6b4b4;
}

.rename,
.delete-project {
  padding: 0.5rem;
}

.rename:hover,
.delete-project:hover,
.edit:hover,
.delete-task:hover {
  background-color: #d5d5e7;
}

#renameProject {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.rename-project {
  padding-left: 1.6rem;
}

.renameProject-form {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.renameProject-form input {
  height: auto;
  width: 64%;
  font-size: 1.3rem;
}

.renameProject-btn {
  display: flex;
  margin-left: 2.9rem;
  gap: 1.5rem;
}

.renameProject-btn button {
  width: 4.5rem;
}

.task-options-popup {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  bottom: 3.5rem;
  right: 3.4rem;
  background-color: var(--background);
  border-radius: 4px;
  box-shadow: 2px 2px 5px 2px #b6b4b4;
  font-size: 1.3rem;
}

.edit,
.delete-task {
  padding: 0.8rem;
}

.no-tasks {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: bodyFont;
  font-weight: 600;
  color: var(--text);
}

.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: logoFont;\n  src: url(\"./assets/fonts/logo.ttf\");\n}\n\n@font-face {\n  font-family: handFont;\n  src: url(\"./assets/fonts/hand.ttf\");\n}\n\n@font-face {\n  font-family: sideBarFont;\n  src: url(\"./assets/fonts/sideBar.ttf\");\n}\n\n@font-face {\n  font-family: bodyFont;\n  src: url(\"./assets/fonts/body.ttf\");\n}\n\n:root {\n  --primary: #f8cf5d;\n  --secondary: #f1fdc9;\n  --accent: #f0400a;\n  --background: #e7edfe;\n  --text: #010a22;\n  --border: #000000;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--background);\n  font-size: 16px;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.header {\n  background-color: #cbd1e03a;\n  padding-left: 2rem;\n  padding-top: 0rem;\n  display: flex;\n  align-items: center;\n  gap: 45rem;\n  border-bottom: 2px solid var(--text);\n}\n\n.logo {\n  font-size: 2.5rem;\n  padding-top: 1rem;\n  font-family: logoFont;\n  color: var(--text);\n  display: flex;\n  gap: 0.2rem;\n}\n\n.logo-svg > svg {\n  height: 3rem;\n  width: 3rem;\n  vertical-align: middle;\n}\n\n.logo > .logo-txt {\n  background: linear-gradient(120deg, var(--accent), var(--primary));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.sidebar-btn > button {\n  margin: 0;\n  padding: 3px;\n  height: 2.5rem;\n  width: 2.5rem;\n  border: none;\n  cursor: pointer;\n  background-color: #cbd1e000;\n}\n\n.sidebar-btn > button:hover {\n  background-color: #cbd1e06c;\n}\n\n.content {\n  display: flex;\n  flex: 1;\n}\n\n.footer {\n  font-size: 1rem;\n  color: var(--text);\n  font-family: bodyFont;\n  background-color: #e1e3e9bb;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.8rem;\n}\n\n.footer img {\n  height: auto;\n  width: 1.5rem;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.footer img:hover {\n  background-color: var(--primary);\n}\n\n.footer a {\n  text-decoration: none;\n  color: var(--accent);\n}\n\n.sidebar {\n  width: 19.5%;\n  font-size: 1.4rem;\n  font-family: bodyFont;\n  padding-left: 1.5rem;\n  background-color: var(--secondary);\n}\n\n.main-content {\n  flex: 1;\n  background-color: var(--background);\n}\n\n.sidebar > h2 {\n  border-bottom: 2px solid var(--text);\n  font-size: 1.8rem;\n  margin-right: 2rem;\n}\n\n.sidebar .project-h2 {\n  font-size: 1.8rem;\n  margin-bottom: 1.2rem;\n}\n\n.project > .material-icons {\n  margin-right: 2.5rem;\n}\n\n.sidebar img {\n  height: auto;\n  width: 1.8rem;\n  vertical-align: middle;\n  padding-left: 1.2rem;\n}\n\n.home-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  cursor: pointer;\n}\n\n.home {\n  padding: 0.32rem;\n  display: flex;\n  gap: 0.2rem;\n}\n\n.projects-section {\n  cursor: pointer;\n  font-size: 1.3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.project {\n  display: flex;\n  padding: 0.5rem;\n  justify-content: space-around;\n  width: 20.5rem;\n  position: relative;\n}\n\n.add-project {\n  padding: 1rem 0rem 0rem 1.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  cursor: pointer;\n}\n\n.add-project > .material-icons {\n  color: #da4518;\n}\n\n.project-title {\n  width: 80%;\n  display: flex;\n  gap: 0.5rem;\n  padding-left: 1.2rem;\n}\n\n.selected {\n  margin-right: 2rem;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n  border-left: solid 3px var(--accent) !important;\n  background-color: var(--primary);\n}\n\n.project-header {\n  font-size: 3rem;\n  padding: 1rem;\n  font-family: bodyFont;\n  background-color: var(--primary);\n  color: var(--text);\n  margin: 2rem 3rem 2rem 3rem;\n  border-radius: 5px;\n}\n\n.project-tasks {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.task {\n  position: relative;\n  cursor: pointer;\n  background-color: var(--secondary);\n  font-family: bodyFont;\n  color: var(--text);\n  display: flex;\n  gap: 0.9rem;\n  margin: 0rem 3rem 0rem 3rem;\n  padding: 0.5rem;\n  border: 2px solid var(--text);\n  border-radius: 5px;\n  user-select: none;\n}\n\n.task:hover {\n  background-color: white;\n}\n\n.task-middle-info {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  gap: 0.2rem;\n}\n\n.task-header {\n  font-size: 1.6rem;\n}\n\n.task-details {\n  font-size: 1.2rem;\n}\n\n.task-right-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  font-size: 1.2rem;\n}\n\n.task-right-info .material-icons {\n  font-size: 1.6rem;\n}\n\n.task-right-info .date-info {\n  height: fit-content;\n  padding: 0.2rem;\n  border: 1px solid var(--text);\n  border-radius: 10px;\n}\n\n.task-right-info svg {\n  height: auto;\n  width: 2rem;\n}\n\n.task-left-info {\n  display: flex;\n  align-items: center;\n}\n\n.task-left-info .unchecked {\n  width: 1.5rem;\n  height: 1.5rem;\n  border: solid 2px var(--text);\n  border-radius: 50%;\n  margin-right: 8px;\n  margin-top: 10px;\n}\n\n.task-left-info .checked {\n  background-image: url(./assets/images/correct.png);\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-origin: border-box;\n}\n\n.star {\n  position: relative;\n  user-select: none;\n}\n\n.star .filled-star {\n  position: absolute;\n  left: 0;\n  color: #f5b400;\n  /*   display: none; */\n}\n\n.star .star-unselected {\n  display: none;\n}\n\n.home:hover,\n.project:hover {\n  margin-right: 2rem;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n  border-left: solid 3px #a7a7a8d0 !important;\n  background-color: var(--background);\n}\n\n.selected:hover {\n  margin-right: 2rem;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n  border-left: solid 3px var(--accent) !important;\n  background-color: var(--primary);\n}\n\n#newProject {\n  padding-left: 1.7rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.newProject-form {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n\n.newProject-form input {\n  height: auto;\n  width: 64%;\n  font-family: bodyFont;\n  font-size: 1.3rem;\n}\n\n.newProject-btn {\n  display: flex;\n  margin-left: 3.7rem;\n  gap: 1.5rem;\n}\n\n.newProject-btn button,\n.new-task-button button,\n.renameProject-btn button {\n  height: auto;\n  width: 4.2rem;\n  font-family: bodyFont;\n  font-size: 1.1rem;\n  font-weight: 600;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 0.3rem;\n}\n\nbutton.done {\n  background-color: rgb(13, 167, 13);\n  color: white;\n}\n\nbutton.cancel {\n  background-color: rgb(204, 11, 11);\n  color: white;\n}\n\n.add-task {\n  margin-left: 3rem;\n  padding: 0.5rem 0rem 0.5rem 0rem;\n  font-family: bodyFont;\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  border-radius: 4px;\n  font-size: 1.5rem;\n  padding-left: 0.5rem;\n  margin-right: 3rem;\n  cursor: pointer;\n}\n\n.add-task > .material-icons {\n  font-size: 2rem;\n  color: #da4518;\n}\n\n.task.new-task {\n  border: none;\n  display: block;\n  padding: 1rem;\n  padding-right: 1.7rem;\n  background-color: rgb(255, 255, 255);\n  font-size: 1.2rem;\n}\n\n.new-task.hidden {\n  display: none;\n}\n\n#newTask {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.new-task input {\n  font-size: 1.2rem;\n  width: 100%;\n  height: 1.8rem;\n  border: 0.13rem solid var(--text);\n  border-radius: 3px;\n}\n\n.new-task textarea {\n  border: 0.13rem solid var(--text);\n  font-size: 1.1rem;\n  border-radius: 3px;\n  width: 100%;\n  resize: none;\n}\n\n.new-task-button {\n  padding-top: 1rem;\n  display: flex;\n  gap: 1.5rem;\n  justify-content: center;\n}\n\n.completed {\n  background-color: rgb(226, 223, 222);\n  color: #6d81b9;\n  border-color: #768bc5;\n}\n\n.completed:hover {\n  background-color: rgb(235, 232, 232);\n  color: #6d81b9;\n  border-color: #768bc5;\n}\n\n.completed::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: var(--text);\n}\n\n.options-popup {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  z-index: 2;\n  bottom: 2.7rem;\n  right: 3.8rem;\n  background-color: var(--background);\n  border-radius: 4px;\n  box-shadow: 2px 2px 5px 2px #b6b4b4;\n}\n\n.rename,\n.delete-project {\n  padding: 0.5rem;\n}\n\n.rename:hover,\n.delete-project:hover,\n.edit:hover,\n.delete-task:hover {\n  background-color: #d5d5e7;\n}\n\n#renameProject {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.rename-project {\n  padding-left: 1.6rem;\n}\n\n.renameProject-form {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n\n.renameProject-form input {\n  height: auto;\n  width: 64%;\n  font-size: 1.3rem;\n}\n\n.renameProject-btn {\n  display: flex;\n  margin-left: 2.9rem;\n  gap: 1.5rem;\n}\n\n.renameProject-btn button {\n  width: 4.5rem;\n}\n\n.task-options-popup {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  z-index: 2;\n  bottom: 3.5rem;\n  right: 3.4rem;\n  background-color: var(--background);\n  border-radius: 4px;\n  box-shadow: 2px 2px 5px 2px #b6b4b4;\n  font-size: 1.3rem;\n}\n\n.edit,\n.delete-task {\n  padding: 0.8rem;\n}\n\n.no-tasks {\n  display: flex;\n  justify-content: center;\n  font-size: 2rem;\n  font-family: bodyFont;\n  font-weight: 600;\n  color: var(--text);\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameISOWeek/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameISOWeek/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameISOWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */
function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyDateRight, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisISOWeek/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisISOWeek/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisISOWeek)
/* harmony export */ });
/* harmony import */ var _isSameISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameISOWeek/index.js */ "./node_modules/date-fns/esm/isSameISOWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameISOWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderContents */ "./src/renderContents.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



(0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_renderContents__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleProjects),
/* harmony export */   projectLists: () => (/* binding */ projectLists)
/* harmony export */ });
let projectItems = document.querySelectorAll(".project");
const homeItems = document.querySelectorAll(".home");
const addBtn = document.querySelector(".done");
const projectHeader = document.querySelector(".project-header");
const projectContent = document.querySelector(".project-content");
const newTaskHeader = document.querySelector(".new-task-header");
const newTaskDetails = document.querySelector(".new-task-details");
const newTaskDate = document.querySelector(".new-task-date");
const taskAddBtn = document.querySelector(".task-add-btn");
const newProjectName = document.querySelector(".new-project-name");
const projectTasks = document.querySelector(".project-tasks");

const homeArray = Array.from(homeItems);
let projectArray = Array.from(projectItems);

let projectLists = JSON.parse(localStorage.getItem("projectLists")) || [];

function handleProjects() {
  storeProject();
  storeTasks();
}

function task(taskTitle, details, date, importance, completionStatus) {
  return {
    taskTitle,
    details,
    date,
    importance,
    completionStatus,
  };
}

function project(title) {
  let taskLists = [];
  function addTask(taskTitle, details, date, importance, completionStatus) {
    const newTask = task(taskTitle, details, date, importance, completionStatus);
    taskLists.push(newTask);
  }

  return {
    title,
    taskLists,
    addTask,
  };
}

function addTask(project, taskTitle, details, date, importance, completionStatus) {
  const newTask = task(taskTitle, details, date, importance, completionStatus);
  project.taskLists.push(newTask);
}

projectLists.forEach((project) => {
  if (!project.addTask) {
    project.addTask = function (taskTitle, details, date, importance, completionStatus) {
      addTask(this, taskTitle, details, date, importance, completionStatus);
    };
  }
});

function storeProject() {
  addBtn.addEventListener("click", (e) => {
    const projectName = newProjectName.value;
    const projectListItem = project(projectName);
    projectLists.push(projectListItem);
    localStorage.setItem("projectLists", JSON.stringify(projectLists));
  });
}

function storeTasks() {
  taskAddBtn.addEventListener("click", (e) => {
    projectLists.forEach((project) => {
      if (projectHeader.textContent === project.title) {
        const taskTitle = newTaskHeader.value;
        const details = newTaskDetails.value;
        let date;
        if (newTaskDate.value !== "") {
          date = newTaskDate.value;
        } else date = "No Due Date";
        console.log(project);
        project.addTask(taskTitle, details, date, false, false);
        localStorage.setItem("projectLists", JSON.stringify(projectLists));
      }
    });
  });
}


/***/ }),

/***/ "./src/renderContents.js":
/*!*******************************!*\
  !*** ./src/renderContents.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleRendering)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var date_fns_isThisISOWeek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/isThisISOWeek */ "./node_modules/date-fns/esm/isThisISOWeek/index.js");



let projectItems = document.querySelectorAll(".project");
const projectSection = document.querySelector(".projects-section");
const homeItems = document.querySelectorAll(".home");
const sideBar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");
const addProject = document.querySelector(".add-project");
const newProject = document.querySelector(".new-project");
const newProjectName = document.querySelector(".new-project-name");
const addBtn = document.querySelector(".done");
const cancelBtn = document.querySelector(".cancel");
const projectHeader = document.querySelector(".project-header");
const projectTasks = document.querySelector(".project-tasks");
const addTaskSection = document.querySelector(".add-task");
const newTaskSection = document.querySelector(".new-task");
const taskAddBtn = document.querySelector(".task-add-btn");
const taskCancelBtn = document.querySelector(".task-cancel-btn");
const newTaskHeader = document.querySelector(".new-task-header");
const newTaskDetails = document.querySelector(".new-task-details");
const newTaskDate = document.querySelector(".new-task-date");
const allTasks = document.querySelector(".all-tasks");
const todayTasks = document.querySelector(".today");
const thisWeekTasks = document.querySelector(".this-week");
const importantTasks = document.querySelector(".important");
const noTasks = document.querySelector(".no-tasks");

const clickEvent = new Event("click");
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Adding a leading zero if needed
const day = today.getDate().toString().padStart(2, "0"); // Adding a leading zero if needed
const todayDate = `${year}-${month}-${day}`;

function handleRendering() {
  renderLocalTasks();
  renderStorageProjects();
  renderSelectionBar();
  menuController();
  addNewProject();
  renderProjectHeader();
  addNewTask();
  handleTaskAdd();
  handleTaskcancel();
  handleTaskCheck();
  storeCompletionStat();
  storeImportanceStat();
  handleTaskAddSec();
  renderProjectTasks();
  renderAllTasks();
  renderTodayTasks();
  renderThisWeek();
  renderImportant();
  projectPopUpOptions();
  taskPopUpOptions();
  deleteProject();
  renameProject();
  deleteTask();
  editTask();
}

function renderSelectionBar() {
  const homeArray = Array.from(homeItems);
  const projectArray = Array.from(projectItems);
  projectArray.push(...homeArray);
  projectArray.forEach((item) => {
    item.addEventListener("click", (e) => {
      projectArray.forEach((arrayItem) => {
        arrayItem.classList.remove("selected");
      });
      item.classList.add("selected");
    });
  });
}

function menuController() {
  menuBtn.addEventListener("click", (e) => {
    sideBar.classList.toggle("hidden");
  });
}

function addNewProject() {
  addProject.addEventListener("click", (e) => {
    newProject.classList.remove("hidden");
  });
  handleProjectAdd();
  handleProjectCancel();
  renderSelectionBar();
  renderProjectHeader();
}

function handleProjectAdd() {
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newProject.classList.add("hidden");
    const cloneNode = projectSection.querySelector(".project.hidden").cloneNode(true);
    cloneNode.classList.remove("hidden");
    cloneNode.querySelector(".project-name").textContent = newProjectName.value;
    projectSection.insertBefore(cloneNode, newProject);
    newProjectName.value = "";
    projectItems = document.querySelectorAll(".project");
    renderSelectionBar();
    renderProjectHeader();
  });
}

function handleProjectCancel() {
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newProjectName.value = "";
    newProject.classList.add("hidden");
  });
}

function renderProjectHeader() {
  const homeArray = Array.from(homeItems);
  const projectArray = Array.from(projectItems);
  projectArray.push(...homeArray);
  projectArray.forEach((item) => {
    if (item.classList.contains("selected") && projectHeader.textContent === "") {
      projectHeader.textContent = item.querySelector(".title").textContent;
    }
    item.addEventListener("click", (e) => {
      if (item.classList.contains("selected")) {
        projectHeader.textContent = item.querySelector(".title").textContent;
      }
    });
  });
}

function addNewTask() {
  addTaskSection.addEventListener("click", (e) => {
    newTaskSection.querySelector(".new-task-header").value = "";
    newTaskSection.querySelector(".new-task-details").value = "";
    newTaskSection.querySelector(".new-task-date").value = "";
    newTaskSection.classList.remove("hidden");
  });
}

function handleTaskCheck() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("dynamic-mark")) {
      e.target.classList.toggle("checked");
      e.target.closest(".task").classList.toggle("completed");
    } else if (e.target.classList.contains("star-outline")) {
      if (e.target.closest(".star").querySelector(".filled-star").classList.contains("star-unselected")) {
        e.target.closest(".star").querySelector(".filled-star").classList.remove("star-unselected");
      }
    } else if (e.target.classList.contains("filled-star")) {
      if (!e.target.closest(".star").querySelector(".filled-star").classList.contains("star-unselected")) {
        e.target.closest(".star").querySelector(".filled-star").classList.add("star-unselected");
      }
    }
  });
}

function handleTaskAdd() {
  taskAddBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newTaskSection.classList.add("hidden");
    const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
    cloneTaskNode.classList.remove("hidden");
    cloneTaskNode.classList.add("rendered-task");
    cloneTaskNode.querySelector(".task-header").textContent = newTaskHeader.value;
    cloneTaskNode.querySelector(".task-details").textContent = newTaskDetails.value;
    if (newTaskDate.value !== "") {
      cloneTaskNode.querySelector(".date-info").textContent = newTaskDate.value;
    } else cloneTaskNode.querySelector(".date-info").textContent = "No Due Date";
    projectTasks.insertBefore(cloneTaskNode, newTaskSection);
  });
}

function handleTaskcancel() {
  taskCancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newTaskSection.classList.add("hidden");
  });
}

function handleTaskAddSec() {
  homeItems.forEach((homeDiv) => {
    homeDiv.addEventListener("click", (e) => {
      addTaskSection.classList.add("hidden");
    });
  });

  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("trigger-task")) {
      addTaskSection.classList.remove("hidden");
    }
  });
}

function renderProjectTasks() {
  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("trigger-task")) {
      noTasks.classList.add("hidden");
      clearProjectTasks();
      const projectName = projectHeader.textContent;
      _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((listItem) => {
        if (listItem.title === projectName && listItem.taskLists.length !== 0) {
          for (let i = 0; i < listItem.taskLists.length; i++) {
            const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
            cloneTaskNode.classList.remove("hidden");
            cloneTaskNode.classList.add("rendered-task");
            cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
            cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
            cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
            if (listItem.taskLists[i].completionStatus) {
              cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
              cloneTaskNode.classList.add("completed");
            }
            if (listItem.taskLists[i].importance) {
              cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
            }
            projectTasks.insertBefore(cloneTaskNode, newTaskSection);
          }
        }
      });
    }
  });
}

function clearProjectTasks() {
  const redneredTaskNode = projectTasks.querySelectorAll(".rendered-task");
  redneredTaskNode.forEach((node) => {
    projectTasks.removeChild(node);
  });
}

function renderAllTasks() {
  allTasks.addEventListener("click", (e) => {
    noTasks.classList.add("hidden");
    let taskFlag = 0;
    clearProjectTasks();
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((listItem) => {
      for (let i = 0; i < listItem.taskLists.length; i++) {
        const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
        cloneTaskNode.classList.remove("hidden");
        cloneTaskNode.classList.add("rendered-task");
        cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
        cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
        cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
        if (listItem.taskLists[i].completionStatus) {
          cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
          cloneTaskNode.classList.add("completed");
        }
        if (listItem.taskLists[i].importance) {
          cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
        }
        projectTasks.insertBefore(cloneTaskNode, newTaskSection);
        taskFlag++;
      }
    });
    if (taskFlag === 0) {
      noTasks.classList.remove("hidden");
    }
  });
}

function renderTodayTasks() {
  todayTasks.addEventListener("click", (e) => {
    noTasks.classList.add("hidden");
    let taskFlag = 0;
    clearProjectTasks();
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((listItem) => {
      for (let i = 0; i < listItem.taskLists.length; i++) {
        if (listItem.taskLists[i].date === todayDate) {
          const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
          cloneTaskNode.classList.remove("hidden");
          cloneTaskNode.classList.add("rendered-task");
          cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
          cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
          cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
          if (listItem.taskLists[i].completionStatus) {
            cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
            cloneTaskNode.classList.add("completed");
          }
          if (listItem.taskLists[i].importance) {
            cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
          }
          projectTasks.insertBefore(cloneTaskNode, newTaskSection);
          taskFlag++;
        }
      }
    });
    if (taskFlag === 0) {
      noTasks.classList.remove("hidden");
    }
  });
}

function renderThisWeek() {
  thisWeekTasks.addEventListener("click", (e) => {
    noTasks.classList.add("hidden");
    let taskFlag = 0;
    clearProjectTasks();
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((listItem) => {
      for (let i = 0; i < listItem.taskLists.length; i++) {
        const itemDate = listItem.taskLists[i].date;
        const [year, month, day] = itemDate.split("-").map(Number);
        const itemArgDate = new Date(year, month - 1, day);
        if ((0,date_fns_isThisISOWeek__WEBPACK_IMPORTED_MODULE_1__["default"])(itemArgDate)) {
          const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
          cloneTaskNode.classList.remove("hidden");
          cloneTaskNode.classList.add("rendered-task");
          cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
          cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
          cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
          if (listItem.taskLists[i].completionStatus) {
            cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
            cloneTaskNode.classList.add("completed");
          }
          if (listItem.taskLists[i].importance) {
            cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
          }
          projectTasks.insertBefore(cloneTaskNode, newTaskSection);
          taskFlag++;
        }
      }
    });
    if (taskFlag === 0) {
      noTasks.classList.remove("hidden");
    }
  });
}

function renderImportant() {
  importantTasks.addEventListener("click", (e) => {
    noTasks.classList.add("hidden");
    let taskFlag = 0;
    clearProjectTasks();
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((listItem) => {
      for (let i = 0; i < listItem.taskLists.length; i++) {
        if (listItem.taskLists[i].importance) {
          const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
          cloneTaskNode.classList.remove("hidden");
          cloneTaskNode.classList.add("rendered-task");
          cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
          cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
          cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
          if (listItem.taskLists[i].completionStatus) {
            cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
            cloneTaskNode.classList.add("completed");
          }
          if (listItem.taskLists[i].importance) {
            cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
          }
          projectTasks.insertBefore(cloneTaskNode, newTaskSection);
          taskFlag++;
        }
      }
    });
    if (taskFlag === 0) {
      noTasks.classList.remove("hidden");
    }

    projectTasks.addEventListener("click", (e) => {
      if (e.target.classList.contains("filled-star")) {
        sideBar.querySelector(".selected").dispatchEvent(clickEvent);
      }
    });
  });
}

function storeCompletionStat() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("dynamic-mark")) {
      const checkedHeader = e.target.closest(".task").querySelector(".task-header").textContent;
      if (e.target.classList.contains("checked")) {
        _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === checkedHeader) {
              project.taskLists[i].completionStatus = true;
            }
          }
        });
      } else {
        _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === checkedHeader) {
              project.taskLists[i].completionStatus = false;
            }
          }
        });
      }
      localStorage.setItem("projectLists", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectLists));
    }
  });
}

function storeImportanceStat() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("star-outline")) {
      let checkedHeader = e.target.closest(".task").querySelector(".task-header").textContent;
      let testNode = e.target.closest(".star").querySelector(".filled-star");
      if (!testNode.classList.contains("star-unselected")) {
        _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === checkedHeader) {
              project.taskLists[i].importance = true;
            }
          }
        });
      }
      localStorage.setItem("projectLists", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectLists));
    } else if (e.target.classList.contains("filled-star")) {
      let checkedHeader = e.target.closest(".task").querySelector(".task-header").textContent;
      let testNode = e.target.closest(".star").querySelector(".filled-star");
      if (testNode.classList.contains("star-unselected")) {
        _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === checkedHeader) {
              project.taskLists[i].importance = false;
            }
          }
        });
      }
      localStorage.setItem("projectLists", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectLists));
    }
  });
}

function projectPopUpOptions() {
  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("more-options")) {
      const nodePopUp = e.target.closest(".project").querySelector(".options-popup");
      if (!nodePopUp.classList.contains("hidden")) {
        e.target.closest(".project").querySelector(".options-popup").classList.toggle("hidden");
      } else {
        clearPopUps();
        e.target.closest(".project").querySelector(".options-popup").classList.toggle("hidden");
      }
    }
  });
}

function taskPopUpOptions() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("more-options")) {
      const nodePopUp = e.target.closest(".task").querySelector(".task-options-popup");
      if (!nodePopUp.classList.contains("hidden")) {
        e.target.closest(".task").querySelector(".task-options-popup").classList.toggle("hidden");
      } else {
        clearPopUps();
        e.target.closest(".task").querySelector(".task-options-popup").classList.toggle("hidden");
      }
    }
  });
}

function clearPopUps() {
  const optionsPopUp = document.querySelectorAll(".options-popup");
  optionsPopUp.forEach((popup) => {
    popup.classList.add("hidden");
  });
}

function deleteProject() {
  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-project")) {
      const projectNode = e.target.closest(".options-popup").parentNode;
      const projectName = projectNode.querySelector(".project-name").textContent;
      for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.length; i++) {
        if (_projects__WEBPACK_IMPORTED_MODULE_0__.projectLists[i].title === projectName) {
          _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.splice(i, 1);
          i--;
        }
      }
      localStorage.setItem("projectLists", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectLists));
      projectSection.removeChild(projectNode);
      allTasks.dispatchEvent(clickEvent);
    }
  });
}

function deleteTask() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-task")) {
      const taskNode = e.target.closest(".task-options-popup").parentNode;
      const taskName = taskNode.querySelector(".task-header").textContent;
      _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((project) => {
        for (let i = 0; i < project.taskLists.length; i++) {
          if (project.taskLists[i].taskTitle === taskName) {
            project.taskLists.splice(i, 1);
            break;
          }
        }
      });
      localStorage.setItem("projectLists", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectLists));
      projectTasks.removeChild(taskNode);
    }
  });
}

function renameProject() {
  projectSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("rename")) {
      const projectNode = e.target.closest(".options-popup").parentNode;
      const projectName = projectNode.querySelector(".project-name").textContent;
      const renameNode = projectSection.querySelector(".rename-project").cloneNode(true);
      projectNode.classList.add("hidden");
      renameNode.classList.remove("hidden");
      projectNode.insertAdjacentElement("afterend", renameNode);
      const renameBtn = renameNode.querySelector(".rename-done");
      const cancelBtn = renameNode.querySelector(".cancel");

      renameNode.querySelector("input").value = projectName;

      renameNode.querySelector("input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          renameBtn.click();
        }
      });

      renameBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearPopUps();
        const newName = renameNode.querySelector("input").value;
        projectNode.querySelector(".project-name").textContent = newName;
        _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((item) => {
          if (item.title === projectName) {
            item.title = newName;
            localStorage.setItem("projectLists", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectLists));
          }
        });
        projectSection.removeChild(renameNode);
        projectNode.classList.remove("hidden");
        projectNode.dispatchEvent(clickEvent);
      });

      cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearPopUps();
        projectSection.removeChild(renameNode);
        projectNode.classList.remove("hidden");
        projectNode.dispatchEvent(clickEvent);
      });
    }
  });
}

function editTask() {
  projectTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
      const taskNode = e.target.closest(".task-options-popup").parentNode;
      const taskName = taskNode.querySelector(".task-header").textContent;
      const taskDetails = taskNode.querySelector(".task-details").textContent;
      const dueDate = taskNode.querySelector(".date-info").textContent;
      const editTaskNode = newTaskSection.cloneNode(true);
      const editDoneBtn = editTaskNode.querySelector(".done");
      const editCancelBtn = editTaskNode.querySelector(".cancel");

      editTaskNode.classList.remove("hidden");
      taskNode.classList.add("hidden");

      editTaskNode.querySelector(".new-task-header").value = taskName;
      editTaskNode.querySelector(".new-task-details").value = taskDetails;
      editTaskNode.querySelector(".new-task-date").value = dueDate;

      taskNode.insertAdjacentElement("afterend", editTaskNode);

      editDoneBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearPopUps();
        const newName = editTaskNode.querySelector(".new-task-header").value;
        const newDetails = editTaskNode.querySelector(".new-task-details").value;
        let newDate;
        if (editTaskNode.querySelector(".new-task-date").value === "") {
          newDate = "No Due Date";
        } else {
          newDate = editTaskNode.querySelector(".new-task-date").value;
        }

        _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((project) => {
          for (let i = 0; i < project.taskLists.length; i++) {
            if (project.taskLists[i].taskTitle === taskName) {
              project.taskLists[i].taskTitle = newName;
              project.taskLists[i].details = newDetails;
              project.taskLists[i].date = newDate;
            }
          }
        });

        taskNode.querySelector(".task-header").textContent = newName;
        taskNode.querySelector(".task-details").textContent = newDetails;
        taskNode.querySelector(".date-info").textContent = newDate;
        projectTasks.removeChild(editTaskNode);
        taskNode.classList.remove("hidden");
        localStorage.setItem("projectLists", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectLists));
        sideBar.querySelector(".selected").dispatchEvent(clickEvent);
      });

      editCancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearPopUps();
        taskNode.classList.remove("hidden");
        projectTasks.removeChild(editTaskNode);
      });
    }
  });
}

function renderStorageProjects() {
  _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((projects) => {
    const cloneNode = projectSection.querySelector(".project.hidden").cloneNode(true);
    cloneNode.classList.remove("hidden");
    cloneNode.querySelector(".project-name").textContent = projects.title;
    projectSection.insertBefore(cloneNode, newProject);
    projectItems = document.querySelectorAll(".project");
    renderSelectionBar();
    renderProjectHeader();
  });
}

function renderLocalTasks() {
  let taskFlag = 0;
  _projects__WEBPACK_IMPORTED_MODULE_0__.projectLists.forEach((listItem) => {
    for (let i = 0; i < listItem.taskLists.length; i++) {
      const cloneTaskNode = projectTasks.querySelector(".task.hidden").cloneNode(true);
      cloneTaskNode.classList.remove("hidden");
      cloneTaskNode.classList.add("rendered-task");
      cloneTaskNode.querySelector(".task-header").textContent = listItem.taskLists[i].taskTitle;
      cloneTaskNode.querySelector(".task-details").textContent = listItem.taskLists[i].details;
      cloneTaskNode.querySelector(".date-info").textContent = listItem.taskLists[i].date;
      if (listItem.taskLists[i].completionStatus) {
        cloneTaskNode.querySelector(".dynamic-mark").classList.add("checked");
        cloneTaskNode.classList.add("completed");
      }
      if (listItem.taskLists[i].importance) {
        cloneTaskNode.querySelector(".filled-star").classList.remove("star-unselected");
      }
      projectTasks.insertBefore(cloneTaskNode, newTaskSection);
      taskFlag++;
    }
  });
  if (taskFlag === 0) {
    noTasks.classList.remove("hidden");
  }
}


/***/ }),

/***/ "./src/assets/fonts/body.ttf":
/*!***********************************!*\
  !*** ./src/assets/fonts/body.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/body.ttf";

/***/ }),

/***/ "./src/assets/fonts/hand.ttf":
/*!***********************************!*\
  !*** ./src/assets/fonts/hand.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/hand.ttf";

/***/ }),

/***/ "./src/assets/fonts/logo.ttf":
/*!***********************************!*\
  !*** ./src/assets/fonts/logo.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/logo.ttf";

/***/ }),

/***/ "./src/assets/fonts/sideBar.ttf":
/*!**************************************!*\
  !*** ./src/assets/fonts/sideBar.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/sideBar.ttf";

/***/ }),

/***/ "./src/assets/images/correct.png":
/*!***************************************!*\
  !*** ./src/assets/images/correct.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/correct.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLG1JQUE4QztBQUMxRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxxQ0FBcUMsMEJBQTBCLDBDQUEwQyxHQUFHLGdCQUFnQiwwQkFBMEIsMENBQTBDLEdBQUcsZ0JBQWdCLDZCQUE2Qiw2Q0FBNkMsR0FBRyxnQkFBZ0IsMEJBQTBCLDBDQUEwQyxHQUFHLFdBQVcsdUJBQXVCLHlCQUF5QixzQkFBc0IsMEJBQTBCLG9CQUFvQixzQkFBc0IsR0FBRyxlQUFlLGNBQWMsZUFBZSxHQUFHLFVBQVUsd0NBQXdDLG9CQUFvQixpQkFBaUIsMkJBQTJCLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLHNCQUFzQixHQUFHLGFBQWEsZ0NBQWdDLHVCQUF1QixzQkFBc0Isa0JBQWtCLHdCQUF3QixlQUFlLHlDQUF5QyxHQUFHLFdBQVcsc0JBQXNCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsR0FBRyxxQkFBcUIsaUJBQWlCLGdCQUFnQiwyQkFBMkIsR0FBRyx1QkFBdUIsdUVBQXVFLDBCQUEwQixrQ0FBa0MseUNBQXlDLEdBQUcsMkJBQTJCLGNBQWMsaUJBQWlCLG1CQUFtQixrQkFBa0IsaUJBQWlCLG9CQUFvQixnQ0FBZ0MsR0FBRyxpQ0FBaUMsZ0NBQWdDLEdBQUcsY0FBYyxrQkFBa0IsWUFBWSxHQUFHLGFBQWEsb0JBQW9CLHVCQUF1QiwwQkFBMEIsZ0NBQWdDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixHQUFHLGlCQUFpQixpQkFBaUIsa0JBQWtCLDRCQUE0Qix1QkFBdUIsR0FBRyx1QkFBdUIscUNBQXFDLEdBQUcsZUFBZSwwQkFBMEIseUJBQXlCLEdBQUcsY0FBYyxpQkFBaUIsc0JBQXNCLDBCQUEwQix5QkFBeUIsdUNBQXVDLEdBQUcsbUJBQW1CLFlBQVksd0NBQXdDLEdBQUcsbUJBQW1CLHlDQUF5QyxzQkFBc0IsdUJBQXVCLEdBQUcsMEJBQTBCLHNCQUFzQiwwQkFBMEIsR0FBRyxnQ0FBZ0MseUJBQXlCLEdBQUcsa0JBQWtCLGlCQUFpQixrQkFBa0IsMkJBQTJCLHlCQUF5QixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLGNBQWMsb0JBQW9CLEdBQUcsV0FBVyxxQkFBcUIsa0JBQWtCLGdCQUFnQixHQUFHLHVCQUF1QixvQkFBb0Isc0JBQXNCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLGNBQWMsa0JBQWtCLG9CQUFvQixrQ0FBa0MsbUJBQW1CLHVCQUF1QixHQUFHLGtCQUFrQixtQ0FBbUMsa0JBQWtCLHdCQUF3QixnQkFBZ0Isb0JBQW9CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLG9CQUFvQixlQUFlLGtCQUFrQixnQkFBZ0IseUJBQXlCLEdBQUcsZUFBZSx1QkFBdUIsbUNBQW1DLGdDQUFnQyxvREFBb0QscUNBQXFDLEdBQUcscUJBQXFCLG9CQUFvQixrQkFBa0IsMEJBQTBCLHFDQUFxQyx1QkFBdUIsZ0NBQWdDLHVCQUF1QixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLFdBQVcsdUJBQXVCLG9CQUFvQix1Q0FBdUMsMEJBQTBCLHVCQUF1QixrQkFBa0IsZ0JBQWdCLGdDQUFnQyxvQkFBb0Isa0NBQWtDLHVCQUF1QixzQkFBc0IsR0FBRyxpQkFBaUIsNEJBQTRCLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsZUFBZSxnQkFBZ0IsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLHNCQUFzQixrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLHNCQUFzQixHQUFHLHNDQUFzQyxzQkFBc0IsR0FBRyxpQ0FBaUMsd0JBQXdCLG9CQUFvQixrQ0FBa0Msd0JBQXdCLEdBQUcsMEJBQTBCLGlCQUFpQixnQkFBZ0IsR0FBRyxxQkFBcUIsa0JBQWtCLHdCQUF3QixHQUFHLGdDQUFnQyxrQkFBa0IsbUJBQW1CLGtDQUFrQyx1QkFBdUIsc0JBQXNCLHFCQUFxQixHQUFHLDhCQUE4Qix1REFBdUQsMEJBQTBCLGlDQUFpQyxrQ0FBa0MsR0FBRyxXQUFXLHVCQUF1QixzQkFBc0IsR0FBRyx3QkFBd0IsdUJBQXVCLFlBQVksbUJBQW1CLHdCQUF3QixLQUFLLDRCQUE0QixrQkFBa0IsR0FBRyxrQ0FBa0MsdUJBQXVCLG1DQUFtQyxnQ0FBZ0MsZ0RBQWdELHdDQUF3QyxHQUFHLHFCQUFxQix1QkFBdUIsbUNBQW1DLGdDQUFnQyxvREFBb0QscUNBQXFDLEdBQUcsaUJBQWlCLHlCQUF5QixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLHNCQUFzQixrQkFBa0Isd0JBQXdCLGdCQUFnQixHQUFHLDRCQUE0QixpQkFBaUIsZUFBZSwwQkFBMEIsc0JBQXNCLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLEdBQUcsa0ZBQWtGLGlCQUFpQixrQkFBa0IsMEJBQTBCLHNCQUFzQixxQkFBcUIsaUJBQWlCLHVCQUF1QixvQkFBb0Isb0JBQW9CLEdBQUcsaUJBQWlCLHVDQUF1QyxpQkFBaUIsR0FBRyxtQkFBbUIsdUNBQXVDLGlCQUFpQixHQUFHLGVBQWUsc0JBQXNCLHFDQUFxQywwQkFBMEIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsdUJBQXVCLHNCQUFzQix5QkFBeUIsdUJBQXVCLG9CQUFvQixHQUFHLGlDQUFpQyxvQkFBb0IsbUJBQW1CLEdBQUcsb0JBQW9CLGlCQUFpQixtQkFBbUIsa0JBQWtCLDBCQUEwQix5Q0FBeUMsc0JBQXNCLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLGNBQWMsa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRyxxQkFBcUIsc0JBQXNCLGdCQUFnQixtQkFBbUIsc0NBQXNDLHVCQUF1QixHQUFHLHdCQUF3QixzQ0FBc0Msc0JBQXNCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLEdBQUcsc0JBQXNCLHNCQUFzQixrQkFBa0IsZ0JBQWdCLDRCQUE0QixHQUFHLGdCQUFnQix5Q0FBeUMsbUJBQW1CLDBCQUEwQixHQUFHLHNCQUFzQix5Q0FBeUMsbUJBQW1CLDBCQUEwQixHQUFHLHVCQUF1QixrQkFBa0IsdUJBQXVCLGFBQWEsWUFBWSxnQkFBZ0IsZ0JBQWdCLGtDQUFrQyxHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLHVCQUF1QixlQUFlLG1CQUFtQixrQkFBa0Isd0NBQXdDLHVCQUF1Qix3Q0FBd0MsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsOEVBQThFLDhCQUE4QixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLHFCQUFxQix5QkFBeUIsR0FBRyx5QkFBeUIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsR0FBRywrQkFBK0IsaUJBQWlCLGVBQWUsc0JBQXNCLEdBQUcsd0JBQXdCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLEdBQUcsK0JBQStCLGtCQUFrQixHQUFHLHlCQUF5QixrQkFBa0IsMkJBQTJCLHVCQUF1QixlQUFlLG1CQUFtQixrQkFBa0Isd0NBQXdDLHVCQUF1Qix3Q0FBd0Msc0JBQXNCLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLGVBQWUsa0JBQWtCLDRCQUE0QixvQkFBb0IsMEJBQTBCLHFCQUFxQix1QkFBdUIsR0FBRyxhQUFhLGtCQUFrQixHQUFHLHFCQUFxQjtBQUNod2I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNya0IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZ0Q7QUFDUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUyxnRUFBVTtBQUNuQjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDa0Q7QUFDTztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLDRCQUE0QixpRUFBVztBQUN2Qyw2QkFBNkIsaUVBQVc7QUFDeEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDc0Q7QUFDRztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUyxtRUFBYTtBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ3QztBQUNXO0FBQ007QUFDVztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsaUJBQWlCO0FBQ2xGO0FBQ0E7QUFDZTtBQUNmO0FBQ0EsRUFBRSxzRUFBWTtBQUNkLHVCQUF1QiwrRUFBaUI7QUFDeEMscUJBQXFCLG1FQUFTOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0N3RDtBQUNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkOztBQUVBO0FBQ0Esa0NBQWtDLDZFQUFPO0FBQ3pDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYnFCO0FBQzBCO0FBQ1c7QUFDMUQscURBQWM7QUFDZCwyREFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTzs7QUFFUTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGMEM7QUFDUzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRSx5REFBeUQ7QUFDekQscUJBQXFCLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTs7QUFFM0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQVk7QUFDbEI7QUFDQSwwQkFBMEIsK0JBQStCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBWTtBQUNoQixzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEIsc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBWTtBQUNwQiwwQkFBMEIsOEJBQThCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUixRQUFRLG1EQUFZO0FBQ3BCLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwwREFBMEQsbURBQVk7QUFDdEU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBWTtBQUNwQiwwQkFBMEIsOEJBQThCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMERBQTBELG1EQUFZO0FBQ3RFLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFZO0FBQ3BCLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwwREFBMEQsbURBQVk7QUFDdEU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLElBQUksbURBQVksU0FBUztBQUMvQyxZQUFZLG1EQUFZO0FBQ3hCLFVBQVUsbURBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsMERBQTBELG1EQUFZO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBWTtBQUNsQix3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMERBQTBELG1EQUFZO0FBQ3RFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVk7QUFDcEI7QUFDQTtBQUNBLGdFQUFnRSxtREFBWTtBQUM1RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsUUFBUSxtREFBWTtBQUNwQiwwQkFBMEIsOEJBQThCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxtREFBWTtBQUN4RTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsbURBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtREFBWTtBQUNkLG9CQUFvQiwrQkFBK0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaG9CZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZUlTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJDb250ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2xvZ28udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvaGFuZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9zaWRlQmFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2JvZHkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2NvcnJlY3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBsb2dvRm9udDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogaGFuZEZvbnQ7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHNpZGVCYXJGb250O1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbjpyb290IHtcbiAgLS1wcmltYXJ5OiAjZjhjZjVkO1xuICAtLXNlY29uZGFyeTogI2YxZmRjOTtcbiAgLS1hY2NlbnQ6ICNmMDQwMGE7XG4gIC0tYmFja2dyb3VuZDogI2U3ZWRmZTtcbiAgLS10ZXh0OiAjMDEwYTIyO1xuICAtLWJvcmRlcjogIzAwMDAwMDtcbn1cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDFlMDNhO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDQ1cmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dCk7XG59XG5cbi5sb2dvIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBmb250LWZhbWlseTogbG9nb0ZvbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjJyZW07XG59XG5cbi5sb2dvLXN2ZyA+IHN2ZyB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvID4gLmxvZ28tdHh0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgdmFyKC0tYWNjZW50KSwgdmFyKC0tcHJpbWFyeSkpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zaWRlYmFyLWJ0biA+IGJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogM3B4O1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQxZTAwMDtcbn1cblxuLnNpZGViYXItYnRuID4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDFlMDZjO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG5cbi5mb290ZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1mYW1pbHk6IGJvZHlGb250O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U5YmI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuOHJlbTtcbn1cblxuLmZvb3RlciBpbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb290ZXIgaW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDE5LjUlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC1mYW1pbHk6IGJvZHlGb250O1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xufVxuXG4uc2lkZWJhciA+IGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4uc2lkZWJhciAucHJvamVjdC1oMiB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG59XG5cbi5wcm9qZWN0ID4gLm1hdGVyaWFsLWljb25zIHtcbiAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XG59XG5cbi5zaWRlYmFyIGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEuOHJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAxLjJyZW07XG59XG5cbi5ob21lLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWUge1xuICBwYWRkaW5nOiAwLjMycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuMnJlbTtcbn1cblxuLnByb2plY3RzLXNlY3Rpb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDIwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZC1wcm9qZWN0IHtcbiAgcGFkZGluZzogMXJlbSAwcmVtIDByZW0gMS42cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXByb2plY3QgPiAubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogI2RhNDUxODtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjJyZW07XG59XG5cbi5zZWxlY3RlZCB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggdmFyKC0tYWNjZW50KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnByb2plY3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LWZhbWlseTogYm9keUZvbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIG1hcmdpbjogMnJlbSAzcmVtIDJyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdC10YXNrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuXG4udGFzayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBmb250LWZhbWlseTogYm9keUZvbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjlyZW07XG4gIG1hcmdpbjogMHJlbSAzcmVtIDByZW0gM3JlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2stbWlkZGxlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBnYXA6IDAuMnJlbTtcbn1cblxuLnRhc2staGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi50YXNrLWRldGFpbHMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRhc2stcmlnaHQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGFzay1yaWdodC1pbmZvIC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4udGFzay1yaWdodC1pbmZvIC5kYXRlLWluZm8ge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGFzay1yaWdodC1pbmZvIHN2ZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDJyZW07XG59XG5cbi50YXNrLWxlZnQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWxlZnQtaW5mbyAudW5jaGVja2VkIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGFzay1sZWZ0LWluZm8gLmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XG59XG5cbi5zdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnN0YXIgLmZpbGxlZC1zdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogI2Y1YjQwMDtcbiAgLyogICBkaXNwbGF5OiBub25lOyAqL1xufVxuXG4uc3RhciAuc3Rhci11bnNlbGVjdGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhvbWU6aG92ZXIsXG4ucHJvamVjdDpob3ZlciB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggI2E3YTdhOGQwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xufVxuXG4uc2VsZWN0ZWQ6aG92ZXIge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItbGVmdDogc29saWQgM3B4IHZhcigtLWFjY2VudCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbiNuZXdQcm9qZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjdyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC44cmVtO1xufVxuXG4ubmV3UHJvamVjdC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNyZW07XG59XG5cbi5uZXdQcm9qZWN0LWZvcm0gaW5wdXQge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA2NCU7XG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5uZXdQcm9qZWN0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAzLjdyZW07XG4gIGdhcDogMS41cmVtO1xufVxuXG4ubmV3UHJvamVjdC1idG4gYnV0dG9uLFxuLm5ldy10YXNrLWJ1dHRvbiBidXR0b24sXG4ucmVuYW1lUHJvamVjdC1idG4gYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNC4ycmVtO1xuICBmb250LWZhbWlseTogYm9keUZvbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjNyZW07XG59XG5cbmJ1dHRvbi5kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCAxNjcsIDEzKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24uY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTEsIDExKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWRkLXRhc2sge1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgcGFkZGluZzogMC41cmVtIDByZW0gMC41cmVtIDByZW07XG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10YXNrID4gLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2RhNDUxODtcbn1cblxuLnRhc2submV3LXRhc2sge1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5uZXctdGFzay5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbmV3VGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4ubmV3LXRhc2sgaW5wdXQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMS44cmVtO1xuICBib3JkZXI6IDAuMTNyZW0gc29saWQgdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm5ldy10YXNrIHRleHRhcmVhIHtcbiAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ubmV3LXRhc2stYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyMywgMjIyKTtcbiAgY29sb3I6ICM2ZDgxYjk7XG4gIGJvcmRlci1jb2xvcjogIzc2OGJjNTtcbn1cblxuLmNvbXBsZXRlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzMiwgMjMyKTtcbiAgY29sb3I6ICM2ZDgxYjk7XG4gIGJvcmRlci1jb2xvcjogIzc2OGJjNTtcbn1cblxuLmNvbXBsZXRlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4ub3B0aW9ucy1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgYm90dG9tOiAyLjdyZW07XG4gIHJpZ2h0OiAzLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCAjYjZiNGI0O1xufVxuXG4ucmVuYW1lLFxuLmRlbGV0ZS1wcm9qZWN0IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ucmVuYW1lOmhvdmVyLFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyLFxuLmVkaXQ6aG92ZXIsXG4uZGVsZXRlLXRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWU3O1xufVxuXG4jcmVuYW1lUHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC44cmVtO1xufVxuXG4ucmVuYW1lLXByb2plY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDEuNnJlbTtcbn1cblxuLnJlbmFtZVByb2plY3QtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zcmVtO1xufVxuXG4ucmVuYW1lUHJvamVjdC1mb3JtIGlucHV0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNjQlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnJlbmFtZVByb2plY3QtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIuOXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5yZW5hbWVQcm9qZWN0LWJ0biBidXR0b24ge1xuICB3aWR0aDogNC41cmVtO1xufVxuXG4udGFzay1vcHRpb25zLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBib3R0b206IDMuNXJlbTtcbiAgcmlnaHQ6IDMuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICNiNmI0YjQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uZWRpdCxcbi5kZWxldGUtdGFzayB7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbn1cblxuLm5vLXRhc2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IGJvZHlGb250O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFt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cUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGxvZ29Gb250O1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL2xvZ28udHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGhhbmRGb250O1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL2hhbmQudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHNpZGVCYXJGb250O1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL3NpZGVCYXIudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGJvZHlGb250O1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL2JvZHkudHRmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeTogI2Y4Y2Y1ZDtcXG4gIC0tc2Vjb25kYXJ5OiAjZjFmZGM5O1xcbiAgLS1hY2NlbnQ6ICNmMDQwMGE7XFxuICAtLWJhY2tncm91bmQ6ICNlN2VkZmU7XFxuICAtLXRleHQ6ICMwMTBhMjI7XFxuICAtLWJvcmRlcjogIzAwMDAwMDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQxZTAzYTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAwcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQ1cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRleHQpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IGxvZ29Gb250O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4ubG9nby1zdmcgPiBzdmcge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubG9nbyA+IC5sb2dvLXR4dCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCB2YXIoLS1hY2NlbnQpLCB2YXIoLS1wcmltYXJ5KSk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNpZGViYXItYnRuID4gYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQxZTAwMDtcXG59XFxuXFxuLnNpZGViYXItYnRuID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQxZTA2YztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6IGJvZHlGb250O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTNlOWJiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMS41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHdpZHRoOiAxOS41JTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IGJvZHlGb250O1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnNpZGViYXIgPiBoMiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dCk7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3QtaDIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxufVxcblxcbi5wcm9qZWN0ID4gLm1hdGVyaWFsLWljb25zIHtcXG4gIG1hcmdpbi1yaWdodDogMi41cmVtO1xcbn1cXG5cXG4uc2lkZWJhciBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEuOHJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvbWUge1xcbiAgcGFkZGluZzogMC4zMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDIwLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICBwYWRkaW5nOiAxcmVtIDByZW0gMHJlbSAxLjZyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QgPiAubWF0ZXJpYWwtaWNvbnMge1xcbiAgY29sb3I6ICNkYTQ1MTg7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggdmFyKC0tYWNjZW50KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IGJvZHlGb250O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBtYXJnaW46IDJyZW0gM3JlbSAycmVtIDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBmb250LWZhbWlseTogYm9keUZvbnQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjlyZW07XFxuICBtYXJnaW46IDByZW0gM3JlbSAwcmVtIDNyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stbWlkZGxlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogODAlO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnRhc2stZGV0YWlscyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stcmlnaHQtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YXNrLXJpZ2h0LWluZm8gLm1hdGVyaWFsLWljb25zIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4udGFzay1yaWdodC1pbmZvIC5kYXRlLWluZm8ge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2stcmlnaHQtaW5mbyBzdmcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi50YXNrLWxlZnQtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stbGVmdC1pbmZvIC51bmNoZWNrZWQge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tdGV4dCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi50YXNrLWxlZnQtaW5mbyAuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2NvcnJlY3QucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcXG59XFxuXFxuLnN0YXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zdGFyIC5maWxsZWQtc3RhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgY29sb3I6ICNmNWI0MDA7XFxuICAvKiAgIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbi5zdGFyIC5zdGFyLXVuc2VsZWN0ZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvbWU6aG92ZXIsXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCAjYTdhN2E4ZDAgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uc2VsZWN0ZWQ6aG92ZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCB2YXIoLS1hY2NlbnQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuI25ld1Byb2plY3Qge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjdyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4ubmV3UHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi5uZXdQcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDY0JTtcXG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubmV3UHJvamVjdC1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAzLjdyZW07XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLm5ld1Byb2plY3QtYnRuIGJ1dHRvbixcXG4ubmV3LXRhc2stYnV0dG9uIGJ1dHRvbixcXG4ucmVuYW1lUHJvamVjdC1idG4gYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA0LjJyZW07XFxuICBmb250LWZhbWlseTogYm9keUZvbnQ7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxufVxcblxcbmJ1dHRvbi5kb25lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgMTY3LCAxMyk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbi5jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTEsIDExKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDByZW0gMC41cmVtIDByZW07XFxuICBmb250LWZhbWlseTogYm9keUZvbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrID4gLm1hdGVyaWFsLWljb25zIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjZGE0NTE4O1xcbn1cXG5cXG4udGFzay5uZXctdGFzayB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5ldy10YXNrLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3VGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXRhc2sgaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLXRleHQpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubmV3LXRhc2sgdGV4dGFyZWEge1xcbiAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkIHZhcigtLXRleHQpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLm5ldy10YXNrLWJ1dHRvbiB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyMywgMjIyKTtcXG4gIGNvbG9yOiAjNmQ4MWI5O1xcbiAgYm9yZGVyLWNvbG9yOiAjNzY4YmM1O1xcbn1cXG5cXG4uY29tcGxldGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzMiwgMjMyKTtcXG4gIGNvbG9yOiAjNmQ4MWI5O1xcbiAgYm9yZGVyLWNvbG9yOiAjNzY4YmM1O1xcbn1cXG5cXG4uY29tcGxldGVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLm9wdGlvbnMtcG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgYm90dG9tOiAyLjdyZW07XFxuICByaWdodDogMy44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggI2I2YjRiNDtcXG59XFxuXFxuLnJlbmFtZSxcXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4ucmVuYW1lOmhvdmVyLFxcbi5kZWxldGUtcHJvamVjdDpob3ZlcixcXG4uZWRpdDpob3ZlcixcXG4uZGVsZXRlLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDVlNztcXG59XFxuXFxuI3JlbmFtZVByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuOHJlbTtcXG59XFxuXFxuLnJlbmFtZS1wcm9qZWN0IHtcXG4gIHBhZGRpbmctbGVmdDogMS42cmVtO1xcbn1cXG5cXG4ucmVuYW1lUHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi5yZW5hbWVQcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDY0JTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucmVuYW1lUHJvamVjdC1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAyLjlyZW07XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLnJlbmFtZVByb2plY3QtYnRuIGJ1dHRvbiB7XFxuICB3aWR0aDogNC41cmVtO1xcbn1cXG5cXG4udGFzay1vcHRpb25zLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIGJvdHRvbTogMy41cmVtO1xcbiAgcmlnaHQ6IDMuNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICNiNmI0YjQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmVkaXQsXFxuLmRlbGV0ZS10YXNrIHtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG59XFxuXFxuLm5vLXRhc2tzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBib2R5Rm9udDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBJU08gd2VlayAoYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBJU08gd2VlayAoYW5kIHllYXIpP1xuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIElTTyB3ZWVrIChhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgU2VwdGVtYmVyIDIwMTQgYW5kIDcgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgSVNPIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA3KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBTZXB0ZW1iZXIgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxNSBpbiB0aGUgc2FtZSBJU08gd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZUlTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTUsIDgsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVJU09XZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwge1xuICAgIHdlZWtTdGFydHNPbjogMVxuICB9KTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVJU09XZWVrIGZyb20gXCIuLi9pc1NhbWVJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RoaXNJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgSVNPIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBJU08gd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyBJU08gd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMiBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIElTTyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVJU09XZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgaGFuZGxlUmVuZGVyaW5nIGZyb20gXCIuL3JlbmRlckNvbnRlbnRzXCI7XG5pbXBvcnQgaGFuZGxlUHJvamVjdHMsIHsgcHJvamVjdExpc3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmhhbmRsZVByb2plY3RzKCk7XG5oYW5kbGVSZW5kZXJpbmcoKTtcbiIsImxldCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG5jb25zdCBob21lSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVcIik7XG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvbmVcIik7XG5jb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcbmNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRlbnRcIik7XG5jb25zdCBuZXdUYXNrSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1oZWFkZXJcIik7XG5jb25zdCBuZXdUYXNrRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZGV0YWlsc1wiKTtcbmNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kYXRlXCIpO1xuY29uc3QgdGFza0FkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGQtYnRuXCIpO1xuY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LW5hbWVcIik7XG5jb25zdCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGFza3NcIik7XG5cbmNvbnN0IGhvbWVBcnJheSA9IEFycmF5LmZyb20oaG9tZUl0ZW1zKTtcbmxldCBwcm9qZWN0QXJyYXkgPSBBcnJheS5mcm9tKHByb2plY3RJdGVtcyk7XG5cbmV4cG9ydCBsZXQgcHJvamVjdExpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0c1wiKSkgfHwgW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVByb2plY3RzKCkge1xuICBzdG9yZVByb2plY3QoKTtcbiAgc3RvcmVUYXNrcygpO1xufVxuXG5mdW5jdGlvbiB0YXNrKHRhc2tUaXRsZSwgZGV0YWlscywgZGF0ZSwgaW1wb3J0YW5jZSwgY29tcGxldGlvblN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIHRhc2tUaXRsZSxcbiAgICBkZXRhaWxzLFxuICAgIGRhdGUsXG4gICAgaW1wb3J0YW5jZSxcbiAgICBjb21wbGV0aW9uU3RhdHVzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0KHRpdGxlKSB7XG4gIGxldCB0YXNrTGlzdHMgPSBbXTtcbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrVGl0bGUsIGRldGFpbHMsIGRhdGUsIGltcG9ydGFuY2UsIGNvbXBsZXRpb25TdGF0dXMpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gdGFzayh0YXNrVGl0bGUsIGRldGFpbHMsIGRhdGUsIGltcG9ydGFuY2UsIGNvbXBsZXRpb25TdGF0dXMpO1xuICAgIHRhc2tMaXN0cy5wdXNoKG5ld1Rhc2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICB0YXNrTGlzdHMsXG4gICAgYWRkVGFzayxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhwcm9qZWN0LCB0YXNrVGl0bGUsIGRldGFpbHMsIGRhdGUsIGltcG9ydGFuY2UsIGNvbXBsZXRpb25TdGF0dXMpIHtcbiAgY29uc3QgbmV3VGFzayA9IHRhc2sodGFza1RpdGxlLCBkZXRhaWxzLCBkYXRlLCBpbXBvcnRhbmNlLCBjb21wbGV0aW9uU3RhdHVzKTtcbiAgcHJvamVjdC50YXNrTGlzdHMucHVzaChuZXdUYXNrKTtcbn1cblxucHJvamVjdExpc3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgaWYgKCFwcm9qZWN0LmFkZFRhc2spIHtcbiAgICBwcm9qZWN0LmFkZFRhc2sgPSBmdW5jdGlvbiAodGFza1RpdGxlLCBkZXRhaWxzLCBkYXRlLCBpbXBvcnRhbmNlLCBjb21wbGV0aW9uU3RhdHVzKSB7XG4gICAgICBhZGRUYXNrKHRoaXMsIHRhc2tUaXRsZSwgZGV0YWlscywgZGF0ZSwgaW1wb3J0YW5jZSwgY29tcGxldGlvblN0YXR1cyk7XG4gICAgfTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0b3JlUHJvamVjdCgpIHtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdE5hbWUudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gcHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdExpc3RzLnB1c2gocHJvamVjdExpc3RJdGVtKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdHMpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0b3JlVGFza3MoKSB7XG4gIHRhc2tBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdExpc3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IG5ld1Rhc2tIZWFkZXIudmFsdWU7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBuZXdUYXNrRGV0YWlscy52YWx1ZTtcbiAgICAgICAgbGV0IGRhdGU7XG4gICAgICAgIGlmIChuZXdUYXNrRGF0ZS52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIGRhdGUgPSBuZXdUYXNrRGF0ZS52YWx1ZTtcbiAgICAgICAgfSBlbHNlIGRhdGUgPSBcIk5vIER1ZSBEYXRlXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0LmFkZFRhc2sodGFza1RpdGxlLCBkZXRhaWxzLCBkYXRlLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdHMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TGlzdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IGlzVGhpc0lTT1dlZWsgZnJvbSBcImRhdGUtZm5zL2lzVGhpc0lTT1dlZWtcIjtcblxubGV0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1zZWN0aW9uXCIpO1xuY29uc3QgaG9tZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lXCIpO1xuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdFwiKTtcbmNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1uYW1lXCIpO1xuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb25lXCIpO1xuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5jb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcbmNvbnN0IHByb2plY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrc1wiKTtcbmNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbmNvbnN0IG5ld1Rhc2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFza1wiKTtcbmNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLWJ0blwiKTtcbmNvbnN0IHRhc2tDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2FuY2VsLWJ0blwiKTtcbmNvbnN0IG5ld1Rhc2tIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWhlYWRlclwiKTtcbmNvbnN0IG5ld1Rhc2tEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kZXRhaWxzXCIpO1xuY29uc3QgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWRhdGVcIik7XG5jb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXRhc2tzXCIpO1xuY29uc3QgdG9kYXlUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XG5jb25zdCB0aGlzV2Vla1Rhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGlzLXdlZWtcIik7XG5jb25zdCBpbXBvcnRhbnRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1wb3J0YW50XCIpO1xuY29uc3Qgbm9UYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm8tdGFza3NcIik7XG5cbmNvbnN0IGNsaWNrRXZlbnQgPSBuZXcgRXZlbnQoXCJjbGlja1wiKTtcbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbmNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuY29uc3QgbW9udGggPSAodG9kYXkuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpOyAvLyBBZGRpbmcgYSBsZWFkaW5nIHplcm8gaWYgbmVlZGVkXG5jb25zdCBkYXkgPSB0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vIEFkZGluZyBhIGxlYWRpbmcgemVybyBpZiBuZWVkZWRcbmNvbnN0IHRvZGF5RGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlbmRlcmluZygpIHtcbiAgcmVuZGVyTG9jYWxUYXNrcygpO1xuICByZW5kZXJTdG9yYWdlUHJvamVjdHMoKTtcbiAgcmVuZGVyU2VsZWN0aW9uQmFyKCk7XG4gIG1lbnVDb250cm9sbGVyKCk7XG4gIGFkZE5ld1Byb2plY3QoKTtcbiAgcmVuZGVyUHJvamVjdEhlYWRlcigpO1xuICBhZGROZXdUYXNrKCk7XG4gIGhhbmRsZVRhc2tBZGQoKTtcbiAgaGFuZGxlVGFza2NhbmNlbCgpO1xuICBoYW5kbGVUYXNrQ2hlY2soKTtcbiAgc3RvcmVDb21wbGV0aW9uU3RhdCgpO1xuICBzdG9yZUltcG9ydGFuY2VTdGF0KCk7XG4gIGhhbmRsZVRhc2tBZGRTZWMoKTtcbiAgcmVuZGVyUHJvamVjdFRhc2tzKCk7XG4gIHJlbmRlckFsbFRhc2tzKCk7XG4gIHJlbmRlclRvZGF5VGFza3MoKTtcbiAgcmVuZGVyVGhpc1dlZWsoKTtcbiAgcmVuZGVySW1wb3J0YW50KCk7XG4gIHByb2plY3RQb3BVcE9wdGlvbnMoKTtcbiAgdGFza1BvcFVwT3B0aW9ucygpO1xuICBkZWxldGVQcm9qZWN0KCk7XG4gIHJlbmFtZVByb2plY3QoKTtcbiAgZGVsZXRlVGFzaygpO1xuICBlZGl0VGFzaygpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb25CYXIoKSB7XG4gIGNvbnN0IGhvbWVBcnJheSA9IEFycmF5LmZyb20oaG9tZUl0ZW1zKTtcbiAgY29uc3QgcHJvamVjdEFycmF5ID0gQXJyYXkuZnJvbShwcm9qZWN0SXRlbXMpO1xuICBwcm9qZWN0QXJyYXkucHVzaCguLi5ob21lQXJyYXkpO1xuICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgoYXJyYXlJdGVtKSA9PiB7XG4gICAgICAgIGFycmF5SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICB9KTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVudUNvbnRyb2xsZXIoKSB7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0pO1xuICBoYW5kbGVQcm9qZWN0QWRkKCk7XG4gIGhhbmRsZVByb2plY3RDYW5jZWwoKTtcbiAgcmVuZGVyU2VsZWN0aW9uQmFyKCk7XG4gIHJlbmRlclByb2plY3RIZWFkZXIoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdEFkZCgpIHtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgY29uc3QgY2xvbmVOb2RlID0gcHJvamVjdFNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LmhpZGRlblwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY2xvbmVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgY2xvbmVOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gbmV3UHJvamVjdE5hbWUudmFsdWU7XG4gICAgcHJvamVjdFNlY3Rpb24uaW5zZXJ0QmVmb3JlKGNsb25lTm9kZSwgbmV3UHJvamVjdCk7XG4gICAgbmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICByZW5kZXJTZWxlY3Rpb25CYXIoKTtcbiAgICByZW5kZXJQcm9qZWN0SGVhZGVyKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2FuY2VsKCkge1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0SGVhZGVyKCkge1xuICBjb25zdCBob21lQXJyYXkgPSBBcnJheS5mcm9tKGhvbWVJdGVtcyk7XG4gIGNvbnN0IHByb2plY3RBcnJheSA9IEFycmF5LmZyb20ocHJvamVjdEl0ZW1zKTtcbiAgcHJvamVjdEFycmF5LnB1c2goLi4uaG9tZUFycmF5KTtcbiAgcHJvamVjdEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSAmJiBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XG4gIGFkZFRhc2tTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG5ld1Rhc2tTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2staGVhZGVyXCIpLnZhbHVlID0gXCJcIjtcbiAgICBuZXdUYXNrU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWRldGFpbHNcIikudmFsdWUgPSBcIlwiO1xuICAgIG5ld1Rhc2tTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgbmV3VGFza1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tDaGVjaygpIHtcbiAgcHJvamVjdFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkeW5hbWljLW1hcmtcIikpIHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2VkXCIpO1xuICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YXNrXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGFyLW91dGxpbmVcIikpIHtcbiAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLnN0YXJcIikucXVlcnlTZWxlY3RvcihcIi5maWxsZWQtc3RhclwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGFyLXVuc2VsZWN0ZWRcIikpIHtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi5zdGFyXCIpLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbGVkLXN0YXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInN0YXItdW5zZWxlY3RlZFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZpbGxlZC1zdGFyXCIpKSB7XG4gICAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoXCIuc3RhclwiKS5xdWVyeVNlbGVjdG9yKFwiLmZpbGxlZC1zdGFyXCIpLmNsYXNzTGlzdC5jb250YWlucyhcInN0YXItdW5zZWxlY3RlZFwiKSkge1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnN0YXJcIikucXVlcnlTZWxlY3RvcihcIi5maWxsZWQtc3RhclwiKS5jbGFzc0xpc3QuYWRkKFwic3Rhci11bnNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tBZGQoKSB7XG4gIHRhc2tBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5ld1Rhc2tTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgY29uc3QgY2xvbmVUYXNrTm9kZSA9IHByb2plY3RUYXNrcy5xdWVyeVNlbGVjdG9yKFwiLnRhc2suaGlkZGVuXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjbG9uZVRhc2tOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QuYWRkKFwicmVuZGVyZWQtdGFza1wiKTtcbiAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIikudGV4dENvbnRlbnQgPSBuZXdUYXNrSGVhZGVyLnZhbHVlO1xuICAgIGNsb25lVGFza05vZGUucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIikudGV4dENvbnRlbnQgPSBuZXdUYXNrRGV0YWlscy52YWx1ZTtcbiAgICBpZiAobmV3VGFza0RhdGUudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGNsb25lVGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5kYXRlLWluZm9cIikudGV4dENvbnRlbnQgPSBuZXdUYXNrRGF0ZS52YWx1ZTtcbiAgICB9IGVsc2UgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5mb1wiKS50ZXh0Q29udGVudCA9IFwiTm8gRHVlIERhdGVcIjtcbiAgICBwcm9qZWN0VGFza3MuaW5zZXJ0QmVmb3JlKGNsb25lVGFza05vZGUsIG5ld1Rhc2tTZWN0aW9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tjYW5jZWwoKSB7XG4gIHRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5ld1Rhc2tTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUYXNrQWRkU2VjKCkge1xuICBob21lSXRlbXMuZm9yRWFjaCgoaG9tZURpdikgPT4ge1xuICAgIGhvbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBhZGRUYXNrU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICB9KTtcblxuICBwcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidHJpZ2dlci10YXNrXCIpKSB7XG4gICAgICBhZGRUYXNrU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrcygpIHtcbiAgcHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRyaWdnZXItdGFza1wiKSkge1xuICAgICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgY2xlYXJQcm9qZWN0VGFza3MoKTtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdEhlYWRlci50ZXh0Q29udGVudDtcbiAgICAgIHByb2plY3RMaXN0cy5mb3JFYWNoKChsaXN0SXRlbSkgPT4ge1xuICAgICAgICBpZiAobGlzdEl0ZW0udGl0bGUgPT09IHByb2plY3ROYW1lICYmIGxpc3RJdGVtLnRhc2tMaXN0cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RJdGVtLnRhc2tMaXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVUYXNrTm9kZSA9IHByb2plY3RUYXNrcy5xdWVyeVNlbGVjdG9yKFwiLnRhc2suaGlkZGVuXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNsb25lVGFza05vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGNsb25lVGFza05vZGUuY2xhc3NMaXN0LmFkZChcInJlbmRlcmVkLXRhc2tcIik7XG4gICAgICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIikudGV4dENvbnRlbnQgPSBsaXN0SXRlbS50YXNrTGlzdHNbaV0udGFza1RpdGxlO1xuICAgICAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGV0YWlsc1wiKS50ZXh0Q29udGVudCA9IGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5kZXRhaWxzO1xuICAgICAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5mb1wiKS50ZXh0Q29udGVudCA9IGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5kYXRlO1xuICAgICAgICAgICAgaWYgKGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5jb21wbGV0aW9uU3RhdHVzKSB7XG4gICAgICAgICAgICAgIGNsb25lVGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5keW5hbWljLW1hcmtcIikuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICAgICAgICAgIGNsb25lVGFza05vZGUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaXN0SXRlbS50YXNrTGlzdHNbaV0uaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbGVkLXN0YXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInN0YXItdW5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3RUYXNrcy5pbnNlcnRCZWZvcmUoY2xvbmVUYXNrTm9kZSwgbmV3VGFza1NlY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0VGFza3MoKSB7XG4gIGNvbnN0IHJlZG5lcmVkVGFza05vZGUgPSBwcm9qZWN0VGFza3MucXVlcnlTZWxlY3RvckFsbChcIi5yZW5kZXJlZC10YXNrXCIpO1xuICByZWRuZXJlZFRhc2tOb2RlLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBwcm9qZWN0VGFza3MucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrcygpIHtcbiAgYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGxldCB0YXNrRmxhZyA9IDA7XG4gICAgY2xlYXJQcm9qZWN0VGFza3MoKTtcbiAgICBwcm9qZWN0TGlzdHMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW0udGFza0xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNsb25lVGFza05vZGUgPSBwcm9qZWN0VGFza3MucXVlcnlTZWxlY3RvcihcIi50YXNrLmhpZGRlblwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNsb25lVGFza05vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QuYWRkKFwicmVuZGVyZWQtdGFza1wiKTtcbiAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpLnRleHRDb250ZW50ID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLnRhc2tUaXRsZTtcbiAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGV0YWlsc1wiKS50ZXh0Q29udGVudCA9IGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5kZXRhaWxzO1xuICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbmZvXCIpLnRleHRDb250ZW50ID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLmRhdGU7XG4gICAgICAgIGlmIChsaXN0SXRlbS50YXNrTGlzdHNbaV0uY29tcGxldGlvblN0YXR1cykge1xuICAgICAgICAgIGNsb25lVGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5keW5hbWljLW1hcmtcIikuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICAgICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0SXRlbS50YXNrTGlzdHNbaV0uaW1wb3J0YW5jZSkge1xuICAgICAgICAgIGNsb25lVGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5maWxsZWQtc3RhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3Rhci11bnNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RUYXNrcy5pbnNlcnRCZWZvcmUoY2xvbmVUYXNrTm9kZSwgbmV3VGFza1NlY3Rpb24pO1xuICAgICAgICB0YXNrRmxhZysrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrRmxhZyA9PT0gMCkge1xuICAgICAgbm9UYXNrcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZGF5VGFza3MoKSB7XG4gIHRvZGF5VGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGxldCB0YXNrRmxhZyA9IDA7XG4gICAgY2xlYXJQcm9qZWN0VGFza3MoKTtcbiAgICBwcm9qZWN0TGlzdHMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW0udGFza0xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0SXRlbS50YXNrTGlzdHNbaV0uZGF0ZSA9PT0gdG9kYXlEYXRlKSB7XG4gICAgICAgICAgY29uc3QgY2xvbmVUYXNrTm9kZSA9IHByb2plY3RUYXNrcy5xdWVyeVNlbGVjdG9yKFwiLnRhc2suaGlkZGVuXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICBjbG9uZVRhc2tOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QuYWRkKFwicmVuZGVyZWQtdGFza1wiKTtcbiAgICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIikudGV4dENvbnRlbnQgPSBsaXN0SXRlbS50YXNrTGlzdHNbaV0udGFza1RpdGxlO1xuICAgICAgICAgIGNsb25lVGFza05vZGUucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIikudGV4dENvbnRlbnQgPSBsaXN0SXRlbS50YXNrTGlzdHNbaV0uZGV0YWlscztcbiAgICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbmZvXCIpLnRleHRDb250ZW50ID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLmRhdGU7XG4gICAgICAgICAgaWYgKGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5jb21wbGV0aW9uU3RhdHVzKSB7XG4gICAgICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZHluYW1pYy1tYXJrXCIpLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGlzdEl0ZW0udGFza0xpc3RzW2ldLmltcG9ydGFuY2UpIHtcbiAgICAgICAgICAgIGNsb25lVGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5maWxsZWQtc3RhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3Rhci11bnNlbGVjdGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcm9qZWN0VGFza3MuaW5zZXJ0QmVmb3JlKGNsb25lVGFza05vZGUsIG5ld1Rhc2tTZWN0aW9uKTtcbiAgICAgICAgICB0YXNrRmxhZysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tGbGFnID09PSAwKSB7XG4gICAgICBub1Rhc2tzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGhpc1dlZWsoKSB7XG4gIHRoaXNXZWVrVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGxldCB0YXNrRmxhZyA9IDA7XG4gICAgY2xlYXJQcm9qZWN0VGFza3MoKTtcbiAgICBwcm9qZWN0TGlzdHMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW0udGFza0xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1EYXRlID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLmRhdGU7XG4gICAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGl0ZW1EYXRlLnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgaXRlbUFyZ0RhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgICAgIGlmIChpc1RoaXNJU09XZWVrKGl0ZW1BcmdEYXRlKSkge1xuICAgICAgICAgIGNvbnN0IGNsb25lVGFza05vZGUgPSBwcm9qZWN0VGFza3MucXVlcnlTZWxlY3RvcihcIi50YXNrLmhpZGRlblwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgIGNsb25lVGFza05vZGUuY2xhc3NMaXN0LmFkZChcInJlbmRlcmVkLXRhc2tcIik7XG4gICAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpLnRleHRDb250ZW50ID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLnRhc2tUaXRsZTtcbiAgICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXRhaWxzXCIpLnRleHRDb250ZW50ID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLmRldGFpbHM7XG4gICAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5mb1wiKS50ZXh0Q29udGVudCA9IGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5kYXRlO1xuICAgICAgICAgIGlmIChsaXN0SXRlbS50YXNrTGlzdHNbaV0uY29tcGxldGlvblN0YXR1cykge1xuICAgICAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmR5bmFtaWMtbWFya1wiKS5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGNsb25lVGFza05vZGUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbGVkLXN0YXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInN0YXItdW5zZWxlY3RlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJvamVjdFRhc2tzLmluc2VydEJlZm9yZShjbG9uZVRhc2tOb2RlLCBuZXdUYXNrU2VjdGlvbik7XG4gICAgICAgICAgdGFza0ZsYWcrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrRmxhZyA9PT0gMCkge1xuICAgICAgbm9UYXNrcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckltcG9ydGFudCgpIHtcbiAgaW1wb3J0YW50VGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGxldCB0YXNrRmxhZyA9IDA7XG4gICAgY2xlYXJQcm9qZWN0VGFza3MoKTtcbiAgICBwcm9qZWN0TGlzdHMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW0udGFza0xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0SXRlbS50YXNrTGlzdHNbaV0uaW1wb3J0YW5jZSkge1xuICAgICAgICAgIGNvbnN0IGNsb25lVGFza05vZGUgPSBwcm9qZWN0VGFza3MucXVlcnlTZWxlY3RvcihcIi50YXNrLmhpZGRlblwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgIGNsb25lVGFza05vZGUuY2xhc3NMaXN0LmFkZChcInJlbmRlcmVkLXRhc2tcIik7XG4gICAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpLnRleHRDb250ZW50ID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLnRhc2tUaXRsZTtcbiAgICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXRhaWxzXCIpLnRleHRDb250ZW50ID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLmRldGFpbHM7XG4gICAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5mb1wiKS50ZXh0Q29udGVudCA9IGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5kYXRlO1xuICAgICAgICAgIGlmIChsaXN0SXRlbS50YXNrTGlzdHNbaV0uY29tcGxldGlvblN0YXR1cykge1xuICAgICAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmR5bmFtaWMtbWFya1wiKS5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGNsb25lVGFza05vZGUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbGVkLXN0YXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInN0YXItdW5zZWxlY3RlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJvamVjdFRhc2tzLmluc2VydEJlZm9yZShjbG9uZVRhc2tOb2RlLCBuZXdUYXNrU2VjdGlvbik7XG4gICAgICAgICAgdGFza0ZsYWcrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrRmxhZyA9PT0gMCkge1xuICAgICAgbm9UYXNrcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIHByb2plY3RUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmaWxsZWQtc3RhclwiKSkge1xuICAgICAgICBzaWRlQmFyLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0b3JlQ29tcGxldGlvblN0YXQoKSB7XG4gIHByb2plY3RUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHluYW1pYy1tYXJrXCIpKSB7XG4gICAgICBjb25zdCBjaGVja2VkSGVhZGVyID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrXCIpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIikudGV4dENvbnRlbnQ7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tlZFwiKSkge1xuICAgICAgICBwcm9qZWN0TGlzdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrTGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnRhc2tMaXN0c1tpXS50YXNrVGl0bGUgPT09IGNoZWNrZWRIZWFkZXIpIHtcbiAgICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdHNbaV0uY29tcGxldGlvblN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RMaXN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tMaXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3QudGFza0xpc3RzW2ldLnRhc2tUaXRsZSA9PT0gY2hlY2tlZEhlYWRlcikge1xuICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tMaXN0c1tpXS5jb21wbGV0aW9uU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0cykpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0b3JlSW1wb3J0YW5jZVN0YXQoKSB7XG4gIHByb2plY3RUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Rhci1vdXRsaW5lXCIpKSB7XG4gICAgICBsZXQgY2hlY2tlZEhlYWRlciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza1wiKS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpLnRleHRDb250ZW50O1xuICAgICAgbGV0IHRlc3ROb2RlID0gZS50YXJnZXQuY2xvc2VzdChcIi5zdGFyXCIpLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbGVkLXN0YXJcIik7XG4gICAgICBpZiAoIXRlc3ROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcInN0YXItdW5zZWxlY3RlZFwiKSkge1xuICAgICAgICBwcm9qZWN0TGlzdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrTGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnRhc2tMaXN0c1tpXS50YXNrVGl0bGUgPT09IGNoZWNrZWRIZWFkZXIpIHtcbiAgICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdHNbaV0uaW1wb3J0YW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0cykpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmlsbGVkLXN0YXJcIikpIHtcbiAgICAgIGxldCBjaGVja2VkSGVhZGVyID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrXCIpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIikudGV4dENvbnRlbnQ7XG4gICAgICBsZXQgdGVzdE5vZGUgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnN0YXJcIikucXVlcnlTZWxlY3RvcihcIi5maWxsZWQtc3RhclwiKTtcbiAgICAgIGlmICh0ZXN0Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGFyLXVuc2VsZWN0ZWRcIikpIHtcbiAgICAgICAgcHJvamVjdExpc3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza0xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC50YXNrTGlzdHNbaV0udGFza1RpdGxlID09PSBjaGVja2VkSGVhZGVyKSB7XG4gICAgICAgICAgICAgIHByb2plY3QudGFza0xpc3RzW2ldLmltcG9ydGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3RzKSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdFBvcFVwT3B0aW9ucygpIHtcbiAgcHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vcmUtb3B0aW9uc1wiKSkge1xuICAgICAgY29uc3Qgbm9kZVBvcFVwID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0XCIpLnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9ucy1wb3B1cFwiKTtcbiAgICAgIGlmICghbm9kZVBvcFVwLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3RcIikucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zLXBvcHVwXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhclBvcFVwcygpO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3RcIikucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zLXBvcHVwXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdGFza1BvcFVwT3B0aW9ucygpIHtcbiAgcHJvamVjdFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb3JlLW9wdGlvbnNcIikpIHtcbiAgICAgIGNvbnN0IG5vZGVQb3BVcCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza1wiKS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stb3B0aW9ucy1wb3B1cFwiKTtcbiAgICAgIGlmICghbm9kZVBvcFVwLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIikucXVlcnlTZWxlY3RvcihcIi50YXNrLW9wdGlvbnMtcG9wdXBcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFyUG9wVXBzKCk7XG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza1wiKS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stb3B0aW9ucy1wb3B1cFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUG9wVXBzKCkge1xuICBjb25zdCBvcHRpb25zUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvbnMtcG9wdXBcIik7XG4gIG9wdGlvbnNQb3BVcC5mb3JFYWNoKChwb3B1cCkgPT4ge1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICBwcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXByb2plY3RcIikpIHtcbiAgICAgIGNvbnN0IHByb2plY3ROb2RlID0gZS50YXJnZXQuY2xvc2VzdChcIi5vcHRpb25zLXBvcHVwXCIpLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0c1tpXS50aXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBwcm9qZWN0TGlzdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3RzKSk7XG4gICAgICBwcm9qZWN0U2VjdGlvbi5yZW1vdmVDaGlsZChwcm9qZWN0Tm9kZSk7XG4gICAgICBhbGxUYXNrcy5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soKSB7XG4gIHByb2plY3RUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXRhc2tcIikpIHtcbiAgICAgIGNvbnN0IHRhc2tOb2RlID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLW9wdGlvbnMtcG9wdXBcIikucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza05vZGUucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKS50ZXh0Q29udGVudDtcbiAgICAgIHByb2plY3RMaXN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrTGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocHJvamVjdC50YXNrTGlzdHNbaV0udGFza1RpdGxlID09PSB0YXNrTmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0cykpO1xuICAgICAgcHJvamVjdFRhc2tzLnJlbW92ZUNoaWxkKHRhc2tOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5hbWVQcm9qZWN0KCkge1xuICBwcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVuYW1lXCIpKSB7XG4gICAgICBjb25zdCBwcm9qZWN0Tm9kZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIub3B0aW9ucy1wb3B1cFwiKS5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHJlbmFtZU5vZGUgPSBwcm9qZWN0U2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLnJlbmFtZS1wcm9qZWN0XCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHByb2plY3ROb2RlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICByZW5hbWVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBwcm9qZWN0Tm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCByZW5hbWVOb2RlKTtcbiAgICAgIGNvbnN0IHJlbmFtZUJ0biA9IHJlbmFtZU5vZGUucXVlcnlTZWxlY3RvcihcIi5yZW5hbWUtZG9uZVwiKTtcbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IHJlbmFtZU5vZGUucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5cbiAgICAgIHJlbmFtZU5vZGUucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlID0gcHJvamVjdE5hbWU7XG5cbiAgICAgIHJlbmFtZU5vZGUucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgcmVuYW1lQnRuLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZW5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2xlYXJQb3BVcHMoKTtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IHJlbmFtZU5vZGUucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlO1xuICAgICAgICBwcm9qZWN0Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKS50ZXh0Q29udGVudCA9IG5ld05hbWU7XG4gICAgICAgIHByb2plY3RMaXN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0udGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBpdGVtLnRpdGxlID0gbmV3TmFtZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0cykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RTZWN0aW9uLnJlbW92ZUNoaWxkKHJlbmFtZU5vZGUpO1xuICAgICAgICBwcm9qZWN0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBwcm9qZWN0Tm9kZS5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjbGVhclBvcFVwcygpO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5yZW1vdmVDaGlsZChyZW5hbWVOb2RlKTtcbiAgICAgICAgcHJvamVjdE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgcHJvamVjdE5vZGUuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKCkge1xuICBwcm9qZWN0VGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXRcIikpIHtcbiAgICAgIGNvbnN0IHRhc2tOb2RlID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLW9wdGlvbnMtcG9wdXBcIikucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza05vZGUucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gdGFza05vZGUucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBkdWVEYXRlID0gdGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5kYXRlLWluZm9cIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBlZGl0VGFza05vZGUgPSBuZXdUYXNrU2VjdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBjb25zdCBlZGl0RG9uZUJ0biA9IGVkaXRUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmRvbmVcIik7XG4gICAgICBjb25zdCBlZGl0Q2FuY2VsQnRuID0gZWRpdFRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuXG4gICAgICBlZGl0VGFza05vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIHRhc2tOb2RlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgICAgIGVkaXRUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWhlYWRlclwiKS52YWx1ZSA9IHRhc2tOYW1lO1xuICAgICAgZWRpdFRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZGV0YWlsc1wiKS52YWx1ZSA9IHRhc2tEZXRhaWxzO1xuICAgICAgZWRpdFRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZGF0ZVwiKS52YWx1ZSA9IGR1ZURhdGU7XG5cbiAgICAgIHRhc2tOb2RlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGVkaXRUYXNrTm9kZSk7XG5cbiAgICAgIGVkaXREb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNsZWFyUG9wVXBzKCk7XG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSBlZGl0VGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1oZWFkZXJcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld0RldGFpbHMgPSBlZGl0VGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kZXRhaWxzXCIpLnZhbHVlO1xuICAgICAgICBsZXQgbmV3RGF0ZTtcbiAgICAgICAgaWYgKGVkaXRUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWRhdGVcIikudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICBuZXdEYXRlID0gXCJObyBEdWUgRGF0ZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0RhdGUgPSBlZGl0VGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kYXRlXCIpLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdExpc3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza0xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC50YXNrTGlzdHNbaV0udGFza1RpdGxlID09PSB0YXNrTmFtZSkge1xuICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tMaXN0c1tpXS50YXNrVGl0bGUgPSBuZXdOYW1lO1xuICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tMaXN0c1tpXS5kZXRhaWxzID0gbmV3RGV0YWlscztcbiAgICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdHNbaV0uZGF0ZSA9IG5ld0RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpLnRleHRDb250ZW50ID0gbmV3TmFtZTtcbiAgICAgICAgdGFza05vZGUucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIikudGV4dENvbnRlbnQgPSBuZXdEZXRhaWxzO1xuICAgICAgICB0YXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5mb1wiKS50ZXh0Q29udGVudCA9IG5ld0RhdGU7XG4gICAgICAgIHByb2plY3RUYXNrcy5yZW1vdmVDaGlsZChlZGl0VGFza05vZGUpO1xuICAgICAgICB0YXNrTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdHMpKTtcbiAgICAgICAgc2lkZUJhci5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG4gICAgICB9KTtcblxuICAgICAgZWRpdENhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjbGVhclBvcFVwcygpO1xuICAgICAgICB0YXNrTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBwcm9qZWN0VGFza3MucmVtb3ZlQ2hpbGQoZWRpdFRhc2tOb2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0b3JhZ2VQcm9qZWN0cygpIHtcbiAgcHJvamVjdExpc3RzLmZvckVhY2goKHByb2plY3RzKSA9PiB7XG4gICAgY29uc3QgY2xvbmVOb2RlID0gcHJvamVjdFNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LmhpZGRlblwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY2xvbmVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgY2xvbmVOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gcHJvamVjdHMudGl0bGU7XG4gICAgcHJvamVjdFNlY3Rpb24uaW5zZXJ0QmVmb3JlKGNsb25lTm9kZSwgbmV3UHJvamVjdCk7XG4gICAgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuICAgIHJlbmRlclNlbGVjdGlvbkJhcigpO1xuICAgIHJlbmRlclByb2plY3RIZWFkZXIoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2FsVGFza3MoKSB7XG4gIGxldCB0YXNrRmxhZyA9IDA7XG4gIHByb2plY3RMaXN0cy5mb3JFYWNoKChsaXN0SXRlbSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW0udGFza0xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjbG9uZVRhc2tOb2RlID0gcHJvamVjdFRhc2tzLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay5oaWRkZW5cIikuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QuYWRkKFwicmVuZGVyZWQtdGFza1wiKTtcbiAgICAgIGNsb25lVGFza05vZGUucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKS50ZXh0Q29udGVudCA9IGxpc3RJdGVtLnRhc2tMaXN0c1tpXS50YXNrVGl0bGU7XG4gICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXRhaWxzXCIpLnRleHRDb250ZW50ID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLmRldGFpbHM7XG4gICAgICBjbG9uZVRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbmZvXCIpLnRleHRDb250ZW50ID0gbGlzdEl0ZW0udGFza0xpc3RzW2ldLmRhdGU7XG4gICAgICBpZiAobGlzdEl0ZW0udGFza0xpc3RzW2ldLmNvbXBsZXRpb25TdGF0dXMpIHtcbiAgICAgICAgY2xvbmVUYXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmR5bmFtaWMtbWFya1wiKS5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgY2xvbmVUYXNrTm9kZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGxpc3RJdGVtLnRhc2tMaXN0c1tpXS5pbXBvcnRhbmNlKSB7XG4gICAgICAgIGNsb25lVGFza05vZGUucXVlcnlTZWxlY3RvcihcIi5maWxsZWQtc3RhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3Rhci11bnNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgICAgcHJvamVjdFRhc2tzLmluc2VydEJlZm9yZShjbG9uZVRhc2tOb2RlLCBuZXdUYXNrU2VjdGlvbik7XG4gICAgICB0YXNrRmxhZysrO1xuICAgIH1cbiAgfSk7XG4gIGlmICh0YXNrRmxhZyA9PT0gMCkge1xuICAgIG5vVGFza3MuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=