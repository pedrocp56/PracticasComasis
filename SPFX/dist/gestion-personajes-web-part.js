define("0678f179-521d-4beb-95db-77adb8a6bd38_0.0.1", ["@microsoft/sp-property-pane","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","react-dom","GestionPersonajesWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_wPXp__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "A214");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+QQQ":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/profiles/types.js ***!
  \************************************************/
/*! exports provided: _Profiles, Profiles, UrlZone */
/*! exports used: Profiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Profiles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Profiles; });
/* unused harmony export UrlZone */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/core */ "JC1J");






class _Profiles extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    constructor(baseUrl, path = "_api/sp.userprofiles.peoplemanager") {
        super(baseUrl, path);
        this.clientPeoplePickerQuery = (new ClientPeoplePickerQuery(baseUrl)).using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_5__[/* AssignFrom */ "e"])(this));
        this.profileLoader = (new ProfileLoader(baseUrl)).using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_5__[/* AssignFrom */ "e"])(this));
    }
    /**
     * The url of the edit profile page for the current user
     */
    getEditProfileLink() {
        return Profiles(this, "EditProfileLink")();
    }
    /**
     * A boolean value that indicates whether the current user's "People I'm Following" list is public
     */
    getIsMyPeopleListPublic() {
        return Profiles(this, "IsMyPeopleListPublic")();
    }
    /**
     * A boolean value that indicates whether the current user is being followed by the specified user
     *
     * @param loginName The account name of the user
     */
    amIFollowedBy(loginName) {
        const q = Profiles(this, "amifollowedby(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * A boolean value that indicates whether the current user is following the specified user
     *
     * @param loginName The account name of the user
     */
    amIFollowing(loginName) {
        const q = Profiles(this, "amifollowing(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Gets tags that the current user is following
     *
     * @param maxCount The maximum number of tags to retrieve (default is 20)
     */
    getFollowedTags(maxCount = 20) {
        return Profiles(this, `getfollowedtags(${maxCount})`)();
    }
    /**
     * Gets the people who are following the specified user
     *
     * @param loginName The account name of the user
     */
    getFollowersFor(loginName) {
        const q = Profiles(this, "getfollowersfor(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Gets the people who are following the current user
     *
     */
    get myFollowers() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPCollection */ "e"])(this, "getmyfollowers");
    }
    /**
     * Gets user properties for the current user
     *
     */
    get myProperties() {
        return Profiles(this, "getmyproperties");
    }
    /**
     * Gets the people who the specified user is following
     *
     * @param loginName The account name of the user.
     */
    getPeopleFollowedBy(loginName) {
        const q = Profiles(this, "getpeoplefollowedby(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Gets user properties for the specified user.
     *
     * @param loginName The account name of the user.
     */
    getPropertiesFor(loginName) {
        const q = Profiles(this, "getpropertiesfor(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
     *
     */
    get trendingTags() {
        const q = Profiles(this, null);
        q.concat(".gettrendingtags");
        return q();
    }
    /**
     * Gets the specified user profile property for the specified user
     *
     * @param loginName The account name of the user
     * @param propertyName The case-sensitive name of the property to get
     */
    getUserProfilePropertyFor(loginName, propertyName) {
        const q = Profiles(this, `getuserprofilepropertyfor(accountname=@v, propertyname='${propertyName}')`);
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Removes the specified user from the user's list of suggested people to follow
     *
     * @param loginName The account name of the user
     */
    hideSuggestion(loginName) {
        const q = Profiles(this, "hidesuggestion(@v)");
        q.query.set("@v", `'${loginName}'`);
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(q);
    }
    /**
     * A boolean values that indicates whether the first user is following the second user
     *
     * @param follower The account name of the user who might be following the followee
     * @param followee The account name of the user who might be followed by the follower
     */
    isFollowing(follower, followee) {
        const q = Profiles(this, null);
        q.concat(".isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)");
        q.query.set("@v", `'${follower}'`);
        q.query.set("@y", `'${followee}'`);
        return q();
    }
    /**
     * Uploads and sets the user profile picture (Users can upload a picture to their own profile only). Not supported for batching.
     *
     * @param profilePicSource Blob data representing the user's picture in BMP, JPEG, or PNG format of up to 4.76MB
     */
    setMyProfilePic(profilePicSource) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const buffer = e.target.result;
                try {
                    await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Profiles(this, "setmyprofilepicture"), { body: buffer });
                    resolve();
                }
                catch (e) {
                    reject(e);
                }
            };
            reader.readAsArrayBuffer(profilePicSource);
        });
    }
    /**
     * Sets single value User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValue Property value
     */
    setSingleValueProfileProperty(accountName, propertyName, propertyValue) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Profiles(this, "SetSingleValueProfileProperty"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({
            accountName,
            propertyName,
            propertyValue,
        }));
    }
    /**
     * Sets multi valued User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValues Property values
     */
    setMultiValuedProfileProperty(accountName, propertyName, propertyValues) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Profiles(this, "SetMultiValuedProfileProperty"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({
            accountName,
            propertyName,
            propertyValues,
        }));
    }
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     *
     * @param emails The email addresses of the users to provision sites for
     */
    createPersonalSiteEnqueueBulk(...emails) {
        return this.profileLoader.createPersonalSiteEnqueueBulk(emails);
    }
    /**
     * Gets the user profile of the site owner
     *
     */
    get ownerUserProfile() {
        return this.profileLoader.ownerUserProfile;
    }
    /**
     * Gets the user profile for the current user
     */
    get userProfile() {
        return this.profileLoader.userProfile;
    }
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    createPersonalSite(interactiveRequest = false) {
        return this.profileLoader.createPersonalSite(interactiveRequest);
    }
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private
     */
    shareAllSocialData(share) {
        return this.profileLoader.shareAllSocialData(share);
    }
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    clientPeoplePickerResolveUser(queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerResolveUser(queryParams);
    }
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    clientPeoplePickerSearchUser(queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerSearchUser(queryParams);
    }
}
const Profiles = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Profiles);
let ProfileLoader = class ProfileLoader extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPQueryable */ "r"] {
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only) Doesn't support batching
     *
     * @param emails The email addresses of the users to provision sites for
     */
    createPersonalSiteEnqueueBulk(emails) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(ProfileLoaderFactory(this, "createpersonalsiteenqueuebulk"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({ "emailIDs": emails }));
    }
    /**
     * Gets the user profile of the site owner.
     *
     */
    get ownerUserProfile() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(this.getParent(ProfileLoaderFactory, "_api/sp.userprofiles.profileloader.getowneruserprofile"));
    }
    /**
     * Gets the user profile of the current user.
     *
     */
    get userProfile() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(ProfileLoaderFactory(this, "getuserprofile"));
    }
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    createPersonalSite(interactiveRequest = false) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(ProfileLoaderFactory(this, `getuserprofile/createpersonalsiteenque(${interactiveRequest})`));
    }
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private.
     */
    shareAllSocialData(share) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(ProfileLoaderFactory(this, `getuserprofile/shareallsocialdata(${share})`));
    }
};
ProfileLoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("_api/sp.userprofiles.profileloader.getprofileloader")
], ProfileLoader);
const ProfileLoaderFactory = (baseUrl, path) => {
    return new ProfileLoader(baseUrl, path);
};
let ClientPeoplePickerQuery = class ClientPeoplePickerQuery extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPQueryable */ "r"] {
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    async clientPeoplePickerResolveUser(queryParams) {
        const q = ClientPeoplePickerFactory(this, null);
        q.concat(".clientpeoplepickerresolveuser");
        const res = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(q, this.getBodyFrom(queryParams));
        return JSON.parse(typeof res === "object" ? res.ClientPeoplePickerResolveUser : res);
    }
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    async clientPeoplePickerSearchUser(queryParams) {
        const q = ClientPeoplePickerFactory(this, null);
        q.concat(".clientpeoplepickersearchuser");
        const res = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(q, this.getBodyFrom(queryParams));
        return JSON.parse(typeof res === "object" ? res.ClientPeoplePickerSearchUser : res);
    }
    /**
     * Creates ClientPeoplePickerQueryParameters request body
     *
     * @param queryParams The query parameters to create request body
     */
    getBodyFrom(queryParams) {
        return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({ queryParams });
    }
};
ClientPeoplePickerQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("_api/sp.ui.applicationpages.clientpeoplepickerwebserviceinterface")
], ClientPeoplePickerQuery);
const ClientPeoplePickerFactory = (baseUrl, path) => {
    return new ClientPeoplePickerQuery(baseUrl, path);
};
/**
 * Specifies the originating zone of a request received.
 */
var UrlZone;
(function (UrlZone) {
    /**
     * Specifies the default zone used for requests unless another zone is specified.
     */
    UrlZone[UrlZone["DefaultZone"] = 0] = "DefaultZone";
    /**
     * Specifies an intranet zone.
     */
    UrlZone[UrlZone["Intranet"] = 1] = "Intranet";
    /**
     * Specifies an Internet zone.
     */
    UrlZone[UrlZone["Internet"] = 2] = "Internet";
    /**
     * Specifies a custom zone.
     */
    UrlZone[UrlZone["Custom"] = 3] = "Custom";
    /**
     * Specifies an extranet zone.
     */
    UrlZone[UrlZone["Extranet"] = 4] = "Extranet";
})(UrlZone || (UrlZone = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "+y5s":
/*!*************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/cancelable.js ***!
  \*************************************************************/
/*! exports provided: asCancelableScope, cancelableScope, Cancelable, CancelAction */
/*! exports used: CancelAction, cancelableScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export asCancelableScope */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return cancelableScope; });
/* unused harmony export Cancelable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CancelAction; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * Cancelable is a fairly complex behavior as there is a lot to consider through multiple timelines. We have
 * two main cases:
 *
 * 1. basic method that is a single call and returns the result of an operation (return spPost(...))
 * 2. complex method that has multiple async calls within
 *
 * 1. For basic calls the cancel info is attached in init as it is only involved within a single request.
 *    This works because there is only one request and the cancel logic doesn't need to persist across
 *    inheriting instances. Also, many of these requests are so fast canceling is likely unnecessary
 *
 * 2. Complex method present a larger challenge because they are comprised of > 1 request and the promise
 *    that is actually returned to the user is not directly from one of our calls. This promise is the
 *    one "created" by the language when you await. For complex methods we have two things that solve these
 *    needs.
 *
 *    The first is the use of either the cancelableScope decorator or the asCancelableScope method
 *    wrapper. These create an upper level cancel info that is then shared across the child requests within
 *    the complex method. Meaning if I do a files.addChunked the same cancel info (and cancel method)
 *    are set on the current "this" which is user object on which the method was called. This info is then
 *    passed down to any child requests using the original "this" as a base using the construct moment.
 *
 *    The CancelAction behavior is used to apply additional actions to a request once it is canceled. For example
 *    in the case of uploading files chunked in sp we cancel the upload by id.
 */
// this is a special moment used to broadcast when a request is canceled
const MomentName = "__CancelMoment__";
// this value is used to track cancel state and the value is represetented by IScopeInfo
const ScopeId = Symbol.for("CancelScopeId");
// module map of all currently tracked cancel scopes
const cancelScopes = new Map();
/**
 * This method is bound to a scope id and used as the cancel method exposed to the user via cancelable promise
 *
 * @param this unused, the current promise
 * @param scopeId Id bound at creation time
 */
async function cancelPrimitive(scopeId) {
    const scope = cancelScopes.get(scopeId);
    scope.controller.abort();
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "m"])(scope === null || scope === void 0 ? void 0 : scope.actions)) {
        scope.actions.map(action => scope.currentSelf.on[MomentName](action));
    }
    try {
        await scope.currentSelf.emit[MomentName]();
    }
    catch (e) {
        scope.currentSelf.log(`Error in cancel: ${e}`, 3);
    }
}
/**
 * Creates a new scope id, sets it on the instance's ScopeId property, and adds the info to the map
 *
 * @returns the new scope id (GUID)
 */
function createScope(instance) {
    const id = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* getGUID */ "u"])();
    instance[ScopeId] = id;
    cancelScopes.set(id, {
        cancel: cancelPrimitive.bind({}, id),
        actions: [],
        controller: null,
        currentSelf: instance,
    });
    return id;
}
/**
 * Function wrapper that turns the supplied function into a cancellation scope
 *
 * @param func Func to wrap
 * @returns The same func signature, wrapped with our cancel scoping logic
 */
const asCancelableScope = (func) => {
    return function (...args) {
        // ensure we have setup "this" to cancel
        // 1. for single requests the value is set in the behavior's init observer
        // 2. for complex requests the value is set here
        if (!Reflect.has(this, ScopeId)) {
            createScope(this);
        }
        // execute the original function, but don't await it
        const result = func.apply(this, args).finally(() => {
            // remove any cancel scope values tied to this instance
            cancelScopes.delete(this[ScopeId]);
            delete this[ScopeId];
        });
        // ensure the synthetic promise from a complex method has a cancel method
        result.cancel = cancelScopes.get(this[ScopeId]).cancel;
        return result;
    };
};
/**
 * Decorator used to mark multi-step methods to ensure all subrequests are properly cancelled
 */
function cancelableScope(_target, _propertyKey, descriptor) {
    // wrapping the original method
    descriptor.value = asCancelableScope(descriptor.value);
}
/**
 * Allows requests to be canceled by the caller by adding a cancel method to the Promise returned by the library
 *
 * @returns Timeline pipe to setup canelability
 */
function Cancelable() {
    if (!AbortController) {
        throw Error("The current environment appears to not support AbortController, please include a suitable polyfill.");
    }
    return (instance) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        instance.on.construct(function (init, path) {
            if (typeof init !== "string") {
                const parent = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "m"])(init) ? init[0] : init;
                if (Reflect.has(parent, ScopeId)) {
                    // ensure we carry over the scope id to the new instance from the parent
                    this[ScopeId] = parent[ScopeId];
                }
                // define the moment's implementation
                this.moments[MomentName] = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* asyncBroadcast */ "i"])();
            }
        });
        // init our queryable to support cancellation
        instance.on.init(function () {
            if (!Reflect.has(this, ScopeId)) {
                // ensure we have setup "this" to cancel
                // 1. for single requests this will set the value
                // 2. for complex requests the value is set in asCancelableScope
                const id = createScope(this);
                // if we are creating the scope here, we have not created it within asCancelableScope
                // meaning the finally handler there will not delete the tracked scope reference
                this.on.dispose(() => {
                    cancelScopes.delete(id);
                });
            }
            this.on[this.InternalPromise]((promise) => {
                // when a new promise is created add a cancel method
                promise.cancel = cancelScopes.get(this[ScopeId]).cancel;
                return [promise];
            });
        });
        instance.on.pre(async function (url, init, result) {
            // grab the current scope, update the controller and currentSelf
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we are here without a scope we are likely running a CancelAction request so we just ignore canceling
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "y"])(existingScope)) {
                const controller = new AbortController();
                existingScope.controller = controller;
                existingScope.currentSelf = this;
                if (init.signal) {
                    // we do our best to hook our logic to the existing signal
                    init.signal.addEventListener("abort", () => {
                        existingScope.cancel();
                    });
                }
                else {
                    init.signal = controller.signal;
                }
            }
            return [url, init, result];
        });
        // clean up any cancel info from the object after the request lifecycle is complete
        instance.on.dispose(function () {
            delete this[ScopeId];
            delete this.moments[MomentName];
        });
        return instance;
    };
}
/**
 * Allows you to define an action that is run when a request is cancelled
 *
 * @param action The action to run
 * @returns A timeline pipe used in the request lifecycle
 */
function CancelAction(action) {
    return (instance) => {
        instance.on.pre(async function (...args) {
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we don't have a scope this request is not using Cancelable so we do nothing
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "y"])(existingScope)) {
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "m"])(existingScope.actions)) {
                    existingScope.actions = [];
                }
                if (existingScope.actions.indexOf(action) < 0) {
                    existingScope.actions.push(action);
                }
            }
            return args;
        });
        return instance;
    };
}
//# sourceMappingURL=cancelable.js.map

/***/ }),

/***/ "/o+z":
/*!**************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/localStorage.js ***!
  \**************************************************************/
/*! exports provided: getItem, setItem */
/*! exports used: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return setItem; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "pyJV");

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "e"])();
        result = win ? win.localStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "e"])();
        win && win.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=localStorage.js.map

/***/ }),

/***/ "/sQB":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/queryable/invokable.js ***!
  \**************************************************/
/*! exports provided: invokable */
/*! exports used: invokable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return invokable; });
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations.js */ "h6Ct");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");


/**
 * Allows a decorated object to be invoked as a function, optionally providing an implementation for that action
 *
 * @param invokeableAction Optional. The logic to execute upon invoking the object as a function.
 * @returns Decorator which applies the invokable logic to the tagged class
 */
function invokable(invokeableAction) {
    if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isFunc */ "_"])(invokeableAction)) {
        invokeableAction = function (init) {
            return Object(_operations_js__WEBPACK_IMPORTED_MODULE_0__[/* op */ "n"])(this, _operations_js__WEBPACK_IMPORTED_MODULE_0__[/* get */ "t"], init);
        };
    }
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                const invokableInstance = Object.assign(function (init) {
                    // the "this" for our invoked object will be set by extendable OR we use invokableInstance directly
                    const localThis = typeof this === "undefined" ? invokableInstance : this;
                    return Reflect.apply(invokeableAction, localThis, [init]);
                }, Reflect.construct(clz, args, newTarget));
                Reflect.setPrototypeOf(invokableInstance, newTarget.prototype);
                return invokableInstance;
            },
        });
    };
}
//# sourceMappingURL=invokable.js.map

/***/ }),

/***/ "0FKx":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/appcatalog/index.js ***!
  \**************************************************/
/*! exports provided: App, AppCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "ArVI");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web.js */ "amhO");





Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype, "tenantAppcatalog", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* AppCatalog */ "e"], "_api/web/tenantappcatalog/AvailableApps");
    },
});
_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype.getTenantAppCatalogWeb = async function () {
    const data = await Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Web */ "e"])(this._root, "_api/SP_TenantSettings_Current")();
    return Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Web */ "e"])([this._root, data.CorporateCatalogUrl]);
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0MvI":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/index.js ***!
  \***********************************************/
/*! exports provided: Folder, Folders, folderFromServerRelativePath, folderFromAbsolutePath, folderFromPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "LZ64");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "vttn");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ "ymW/");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "4tXH");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0YVK":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/files/index.js ***!
  \*********************************************/
/*! exports provided: File, Files, CheckinType, MoveOperations, TemplateFileType, Version, Versions, fileFromServerRelativePath, fileFromAbsolutePath, fileFromPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.js */ "JFDc");
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.js */ "pGs8");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ "SPHc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "qfcF");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0m3K":
/*!**************************************************************!*\
  !*** ./node_modules/@fluentui/set-version/lib/setVersion.js ***!
  \**************************************************************/
/*! exports provided: setVersion */
/*! exports used: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setVersion; });
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
// Cache access to window to avoid IE11 memory leak.
var _win = undefined;
try {
    _win = window;
}
catch (e) {
    /* no-op */
}
function setVersion(packageName, packageVersion) {
    if (typeof _win !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var packages = (_win.__packages__ = _win.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can
        // just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}
//# sourceMappingURL=setVersion.js.map

/***/ }),

/***/ "0qgB":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/queryable/request-builders.js ***!
  \*********************************************************/
/*! exports provided: body, headers */
/*! exports used: body, headers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return headers; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * takes the supplied object of type U, JSON.stringify's it, and sets it as the value of a "body" property
 */
function body(o, previous) {
    return Object.assign({ body: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* jsS */ "b"])(o) }, previous);
}
/**
 * Adds headers to an new/existing RequestInit
 *
 * @param o Headers to add
 * @param previous Any previous partial RequestInit
 * @returns RequestInit combining previous and specified headers
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({}, previous, { headers: { ...previous === null || previous === void 0 ? void 0 : previous.headers, ...o } });
}
//# sourceMappingURL=request-builders.js.map

/***/ }),

/***/ "0rHm":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/sp/site-groups/web.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "UuUm");
/* harmony import */ var _security_web_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/web.js */ "4G66");





Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__[/* _Web */ "t"], "siteGroups", _types_js__WEBPACK_IMPORTED_MODULE_3__[/* SiteGroups */ "t"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__[/* _Web */ "t"], "associatedOwnerGroup", _types_js__WEBPACK_IMPORTED_MODULE_3__[/* SiteGroup */ "e"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__[/* _Web */ "t"], "associatedMemberGroup", _types_js__WEBPACK_IMPORTED_MODULE_3__[/* SiteGroup */ "e"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__[/* _Web */ "t"], "associatedVisitorGroup", _types_js__WEBPACK_IMPORTED_MODULE_3__[/* SiteGroup */ "e"]);
_webs_types_js__WEBPACK_IMPORTED_MODULE_2__[/* _Web */ "t"].prototype.createDefaultAssociatedGroups = async function (groupNameSeed, siteOwner, copyRoleAssignments = false, clearSubscopes = true, siteOwner2) {
    await this.breakRoleInheritance(copyRoleAssignments, clearSubscopes);
    const q = Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__[/* Web */ "e"])(this, "createDefaultAssociatedGroups(userLogin=@u,userLogin2=@v,groupNameSeed=@s)");
    q.query.set("@u", `'${siteOwner || ""}'`);
    q.query.set("@v", `'${siteOwner2 || ""}'`);
    q.query.set("@s", `'${groupNameSeed || ""}'`);
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_1__[/* spPost */ "a"])(q);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "13Gv":
/*!*******************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/merge.js ***!
  \*******************************************************/
/*! exports provided: merge */
/*! exports used: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return merge; });
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            if (name_1 !== '__proto__' && name_1 !== 'constructor' && name_1 !== 'prototype') {
                var value = source[name_1];
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    var isCircularReference = circularReferences.indexOf(value) > -1;
                    target[name_1] = (isCircularReference ? value : _merge(target[name_1] || {}, value, circularReferences));
                }
                else {
                    target[name_1] = value;
                }
            }
        }
    }
    circularReferences.pop();
    return target;
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "1dmT":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/security/types.js ***!
  \************************************************/
/*! exports provided: _RoleAssignments, RoleAssignments, _RoleAssignment, RoleAssignment, _RoleDefinitions, RoleDefinitions, _RoleDefinition, RoleDefinition, PermissionKind */
/*! exports used: PermissionKind, RoleAssignments, RoleDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _RoleAssignments */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return RoleAssignments; });
/* unused harmony export _RoleAssignment */
/* unused harmony export RoleAssignment */
/* unused harmony export _RoleDefinitions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return RoleDefinitions; });
/* unused harmony export _RoleDefinition */
/* unused harmony export RoleDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PermissionKind; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _site_groups_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../site-groups/types.js */ "UuUm");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operations.js */ "UK2s");







/**
 * Describes a set of role assignments for the current scope
 *
 */
let _RoleAssignments = class _RoleAssignments extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPCollection */ "a"] {
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    getById(id) {
        return RoleAssignment(this).concat(`(${id})`);
    }
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    async add(principalId, roleDefId) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(RoleAssignments(this, `addroleassignment(principalid=${principalId}, roledefid=${roleDefId})`));
    }
    /**
     * Removes the role assignment with the specified principal and role definition from the collection
     *
     * @param principalId The id of the user or group in the role assignment
     * @param roleDefId The id of the role definition in the role assignment
     *
     */
    async remove(principalId, roleDefId) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(RoleAssignments(this, `removeroleassignment(principalid=${principalId}, roledefid=${roleDefId})`));
    }
};
_RoleAssignments = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_5__[/* defaultPath */ "e"])("roleassignments")
], _RoleAssignments);

const RoleAssignments = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_RoleAssignments);
/**
 * Describes a role assignment
 *
 */
class _RoleAssignment extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* deleteable */ "o"])();
    }
    /**
     * Gets the groups that directly belong to the access control list (ACL) for this securable object
     *
     */
    get groups() {
        return Object(_site_groups_types_js__WEBPACK_IMPORTED_MODULE_4__[/* SiteGroups */ "t"])(this, "groups");
    }
    /**
     * Gets the role definition bindings for this role assignment
     *
     */
    get bindings() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPCollection */ "e"])(this, "roledefinitionbindings");
    }
}
const RoleAssignment = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_RoleAssignment);
/**
 * Describes a collection of role definitions
 *
 */
let _RoleDefinitions = class _RoleDefinitions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPCollection */ "a"] {
    /**
     * Gets the role definition with the specified id from the collection
     *
     * @param id The id of the role definition
     *
     */
    getById(id) {
        return RoleDefinition(this, `getById(${id})`);
    }
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    getByName(name) {
        return RoleDefinition(this, `getbyname('${name}')`);
    }
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    getByType(roleTypeKind) {
        return RoleDefinition(this, `getbytype(${roleTypeKind})`);
    }
    /**
     * Creates a role definition
     *
     * @param name The new role definition's name
     * @param description The new role definition's description
     * @param order The order in which the role definition appears
     * @param basePermissions The permissions mask for this role definition, high and low values need to be converted to string
     *
     */
    async add(name, description, order, basePermissions) {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({
            BasePermissions: { "High": basePermissions.High.toString(), "Low": basePermissions.Low.toString() },
            Description: description,
            Name: name,
            Order: order,
        });
        // __metadata: { "type": "SP.RoleDefinition" },
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(this, postBody);
        return {
            data: data,
            definition: this.getById(data.Id),
        };
    }
};
_RoleDefinitions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_5__[/* defaultPath */ "e"])("roledefinitions")
], _RoleDefinitions);

const RoleDefinitions = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_RoleDefinitions);
/**
 * Describes a role definition
 *
 */
class _RoleDefinition extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* deleteable */ "o"])();
    }
    /**
     * Updates this role definition with the supplied properties
     *
     * @param properties A plain object hash of values to update for the role definition
     */
    async update(properties) {
        const s = ["BasePermissions"];
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(properties, s[0]) !== undefined) {
            const bpObj = properties[s[0]];
            bpObj.High = bpObj.High.toString();
            bpObj.Low = bpObj.Low.toString();
        }
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(properties));
        let definition = this;
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(properties, "Name")) {
            const parent = this.getParent(RoleDefinitions);
            definition = parent.getByName(properties.Name);
        }
        return {
            data,
            definition,
        };
    }
}
const RoleDefinition = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_RoleDefinition);
var PermissionKind;
(function (PermissionKind) {
    /**
     * Has no permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["EmptyMask"] = 0] = "EmptyMask";
    /**
     * View items in lists, documents in document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["ViewListItems"] = 1] = "ViewListItems";
    /**
     * Add items to lists, documents to document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["AddListItems"] = 2] = "AddListItems";
    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments
     * in documents, and customize Web Part Pages in document libraries.
     */
    PermissionKind[PermissionKind["EditListItems"] = 3] = "EditListItems";
    /**
     * Delete items from a list, documents from a document library, and Web discussion
     * comments in documents.
     */
    PermissionKind[PermissionKind["DeleteListItems"] = 4] = "DeleteListItems";
    /**
     * Approve a minor version of a list item or document.
     */
    PermissionKind[PermissionKind["ApproveItems"] = 5] = "ApproveItems";
    /**
     * View the source of documents with server-side file handlers.
     */
    PermissionKind[PermissionKind["OpenItems"] = 6] = "OpenItems";
    /**
     * View past versions of a list item or document.
     */
    PermissionKind[PermissionKind["ViewVersions"] = 7] = "ViewVersions";
    /**
     * Delete past versions of a list item or document.
     */
    PermissionKind[PermissionKind["DeleteVersions"] = 8] = "DeleteVersions";
    /**
     * Discard or check in a document which is checked out to another user.
     */
    PermissionKind[PermissionKind["CancelCheckout"] = 9] = "CancelCheckout";
    /**
     * Create, change, and delete personal views of lists.
     */
    PermissionKind[PermissionKind["ManagePersonalViews"] = 10] = "ManagePersonalViews";
    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    PermissionKind[PermissionKind["ManageLists"] = 12] = "ManageLists";
    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    PermissionKind[PermissionKind["ViewFormPages"] = 13] = "ViewFormPages";
    /**
     * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
     * The list permissions in the site do not change.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessList"] = 14] = "AnonymousSearchAccessList";
    /**
     * Allow users to open a Site, list, or folder to access items inside that container.
     */
    PermissionKind[PermissionKind["Open"] = 17] = "Open";
    /**
     * View pages in a Site.
     */
    PermissionKind[PermissionKind["ViewPages"] = 18] = "ViewPages";
    /**
     * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
     * a Windows SharePoint Services compatible editor.
     */
    PermissionKind[PermissionKind["AddAndCustomizePages"] = 19] = "AddAndCustomizePages";
    /**
     * Apply a theme or borders to the entire Site.
     */
    PermissionKind[PermissionKind["ApplyThemeAndBorder"] = 20] = "ApplyThemeAndBorder";
    /**
     * Apply a style sheet (.css file) to the Site.
     */
    PermissionKind[PermissionKind["ApplyStyleSheets"] = 21] = "ApplyStyleSheets";
    /**
     * View reports on Site usage.
     */
    PermissionKind[PermissionKind["ViewUsageData"] = 22] = "ViewUsageData";
    /**
     * Create a Site using Self-Service Site Creation.
     */
    PermissionKind[PermissionKind["CreateSSCSite"] = 23] = "CreateSSCSite";
    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    PermissionKind[PermissionKind["ManageSubwebs"] = 24] = "ManageSubwebs";
    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    PermissionKind[PermissionKind["CreateGroups"] = 25] = "CreateGroups";
    /**
     * Create and change permission levels on the Site and assign permissions to users
     * and groups.
     */
    PermissionKind[PermissionKind["ManagePermissions"] = 26] = "ManagePermissions";
    /**
     * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
     * and WebDAV interfaces.
     */
    PermissionKind[PermissionKind["BrowseDirectories"] = 27] = "BrowseDirectories";
    /**
     * View information about users of the Site.
     */
    PermissionKind[PermissionKind["BrowseUserInfo"] = 28] = "BrowseUserInfo";
    /**
     * Add or remove personal Web Parts on a Web Part Page.
     */
    PermissionKind[PermissionKind["AddDelPrivateWebParts"] = 29] = "AddDelPrivateWebParts";
    /**
     * Update Web Parts to display personalized information.
     */
    PermissionKind[PermissionKind["UpdatePersonalWebParts"] = 30] = "UpdatePersonalWebParts";
    /**
     * Grant the ability to perform all administration tasks for the Site as well as
     * manage content, activate, deactivate, or edit properties of Site scoped Features
     * through the object model or through the user interface (UI). When granted on the
     * root Site of a Site Collection, activate, deactivate, or edit properties of
     * site collection scoped Features through the object model. To browse to the Site
     * Collection Features page and activate or deactivate Site Collection scoped Features
     * through the UI, you must be a Site Collection administrator.
     */
    PermissionKind[PermissionKind["ManageWeb"] = 31] = "ManageWeb";
    /**
     * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
     * SharePoint search if the list or document library has AnonymousSearchAccessList set.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessWebLists"] = 32] = "AnonymousSearchAccessWebLists";
    /**
     * Use features that launch client applications. Otherwise, users must work on documents
     * locally and upload changes.
     */
    PermissionKind[PermissionKind["UseClientIntegration"] = 37] = "UseClientIntegration";
    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
     */
    PermissionKind[PermissionKind["UseRemoteAPIs"] = 38] = "UseRemoteAPIs";
    /**
     * Manage alerts for all users of the Site.
     */
    PermissionKind[PermissionKind["ManageAlerts"] = 39] = "ManageAlerts";
    /**
     * Create e-mail alerts.
     */
    PermissionKind[PermissionKind["CreateAlerts"] = 40] = "CreateAlerts";
    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    PermissionKind[PermissionKind["EditMyUserInfo"] = 41] = "EditMyUserInfo";
    /**
     * Enumerate permissions on Site, list, folder, document, or list item.
     */
    PermissionKind[PermissionKind["EnumeratePermissions"] = 63] = "EnumeratePermissions";
    /**
     * Has all permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["FullMask"] = 65] = "FullMask";
})(PermissionKind || (PermissionKind = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "1jZ6":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/sites/index.js ***!
  \*********************************************/
/*! exports provided: Site, SiteLogoAspect, SiteLogoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "ilAS");



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype, "site", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Site */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "1mTr":
/*!***********************************************************!*\
  !*** ./node_modules/@pnp/sp/user-custom-actions/types.js ***!
  \***********************************************************/
/*! exports provided: _UserCustomActions, UserCustomActions, _UserCustomAction, UserCustomAction, UserCustomActionRegistrationType, UserCustomActionScope */
/*! exports used: UserCustomActions, _UserCustomAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _UserCustomActions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UserCustomActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _UserCustomAction; });
/* unused harmony export UserCustomAction */
/* unused harmony export UserCustomActionRegistrationType */
/* unused harmony export UserCustomActionScope */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");





let _UserCustomActions = class _UserCustomActions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    /**
     * Returns the user custom action with the specified id
     *
     * @param id The GUID id of the user custom action to retrieve
     */
    getById(id) {
        return UserCustomAction(this).concat(`('${id}')`);
    }
    /**
     * Creates a user custom action
     *
     * @param properties The information object of property names and values which define the new user custom action
     */
    async add(properties) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(properties));
        return {
            action: this.getById(data.Id),
            data,
        };
    }
    /**
     * Deletes all user custom actions in the collection
     */
    clear() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(UserCustomActions(this, "clear"));
    }
};
_UserCustomActions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("usercustomactions")
], _UserCustomActions);

const UserCustomActions = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_UserCustomActions);
class _UserCustomAction extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* deleteable */ "o"])();
    }
    /**
    * Updates this user custom action with the supplied properties
    *
    * @param properties An information object of property names and values to update for this user custom action
    */
    async update(props) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props));
        return {
            data,
            action: this,
        };
    }
}
const UserCustomAction = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_UserCustomAction);
var UserCustomActionRegistrationType;
(function (UserCustomActionRegistrationType) {
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["None"] = 0] = "None";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["List"] = 1] = "List";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["ContentType"] = 2] = "ContentType";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["ProgId"] = 3] = "ProgId";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["FileType"] = 4] = "FileType";
})(UserCustomActionRegistrationType || (UserCustomActionRegistrationType = {}));
var UserCustomActionScope;
(function (UserCustomActionScope) {
    UserCustomActionScope[UserCustomActionScope["Unknown"] = 0] = "Unknown";
    UserCustomActionScope[UserCustomActionScope["Site"] = 2] = "Site";
    UserCustomActionScope[UserCustomActionScope["Web"] = 3] = "Web";
    UserCustomActionScope[UserCustomActionScope["List"] = 4] = "List";
})(UserCustomActionScope || (UserCustomActionScope = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: PropertyPaneTextField */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "2B8P":
/*!***********************************************************************!*\
  !*** ./node_modules/@pnp/sp/regional-settings/user-custom-actions.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_custom_actions_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-custom-actions/types.js */ "1mTr");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcs.js */ "T2j4");


_user_custom_actions_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _UserCustomAction */ "t"].prototype.titleResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_1__[/* getValueForUICultureBinder */ "e"])("titleResource");
_user_custom_actions_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _UserCustomAction */ "t"].prototype.descriptionResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_1__[/* getValueForUICultureBinder */ "e"])("descriptionResource");
//# sourceMappingURL=user-custom-actions.js.map

/***/ }),

/***/ "2GE3":
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/fonts/FluentFonts.js ***!
  \***************************************************************/
/*! exports provided: LocalizedFontNames, LocalizedFontFamilies, FontSizes, FontWeights, IconFontSizes */
/*! exports used: FontSizes, FontWeights, LocalizedFontFamilies, LocalizedFontNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizedFontNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LocalizedFontFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return FontWeights; });
/* unused harmony export IconFontSizes */
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
    LocalizedFontNames.Armenian = 'Segoe UI Web (Armenian)';
    LocalizedFontNames.Georgian = 'Segoe UI Web (Georgian)';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'".concat(LocalizedFontNames.Arabic, "'");
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'".concat(LocalizedFontNames.Cyrillic, "'");
    LocalizedFontFamilies.EastEuropean = "'".concat(LocalizedFontNames.EastEuropean, "'");
    LocalizedFontFamilies.Greek = "'".concat(LocalizedFontNames.Greek, "'");
    LocalizedFontFamilies.Hebrew = "'".concat(LocalizedFontNames.Hebrew, "'");
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'".concat(LocalizedFontNames.Selawik, "'");
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'".concat(LocalizedFontNames.Vietnamese, "'");
    LocalizedFontFamilies.WestEuropean = "'".concat(LocalizedFontNames.WestEuropean, "'");
    LocalizedFontFamilies.Armenian = "'".concat(LocalizedFontNames.Armenian, "'");
    LocalizedFontFamilies.Georgian = "'".concat(LocalizedFontNames.Georgian, "'");
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.size10 = '10px';
    FontSizes.size12 = '12px';
    FontSizes.size14 = '14px';
    FontSizes.size16 = '16px';
    FontSizes.size18 = '18px';
    FontSizes.size20 = '20px';
    FontSizes.size24 = '24px';
    FontSizes.size28 = '28px';
    FontSizes.size32 = '32px';
    FontSizes.size42 = '42px';
    FontSizes.size68 = '68px';
    FontSizes.mini = '10px';
    FontSizes.xSmall = '10px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '12px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '16px';
    FontSizes.icon = '16px';
    FontSizes.large = '18px';
    FontSizes.xLarge = '20px';
    FontSizes.xLargePlus = '24px';
    FontSizes.xxLarge = '28px';
    FontSizes.xxLargePlus = '32px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '68px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));
//# sourceMappingURL=FluentFonts.js.map

/***/ }),

/***/ "32VY":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/views/types.js ***!
  \*********************************************/
/*! exports provided: _Views, Views, _View, View, _ViewFields, ViewFields, ViewScope */
/*! exports used: View, Views */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Views */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Views; });
/* unused harmony export _View */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return View; });
/* unused harmony export _ViewFields */
/* unused harmony export ViewFields */
/* unused harmony export ViewScope */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");






let _Views = class _Views extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
     * Adds a new view to the collection
     *
     * @param title The new views's title
     * @param personalView True if this is a personal view, otherwise false, default = false
     * @param additionalSettings Will be passed as part of the view creation body
     */
    async add(Title, PersonalView = false, additionalSettings = {}) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({
            PersonalView,
            Title,
            ...additionalSettings,
        }));
        return {
            data,
            view: this.getById(data.Id),
        };
    }
    /**
     * Gets a view by guid id
     *
     * @param id The GUID id of the view
     */
    getById(id) {
        return View(this).concat(`('${id}')`);
    }
    /**
     * Gets a view by title (case-sensitive)
     *
     * @param title The case-sensitive title of the view
     */
    getByTitle(title) {
        return View(this, `getByTitle('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__[/* encodePath */ "e"])(title)}')`);
    }
};
_Views = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("views")
], _Views);

const Views = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Views);
class _View extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* deleteable */ "o"])();
    }
    get fields() {
        return ViewFields(this);
    }
    /**
     * Updates this view intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the view
     */
    async update(props) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])(props));
        return {
            data,
            view: this,
        };
    }
    // : any = this._update<IViewUpdateResult, ITypedHash<any>>("SP.View", data => ({ data, view: <any>this }));
    /**
     * Returns the list view as HTML.
     *
     */
    renderAsHtml() {
        return View(this, "renderashtml")();
    }
    /**
     * Sets the view schema
     *
     * @param viewXml The view XML to set
     */
    setViewXml(viewXml) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(View(this, "SetViewXml"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({ viewXml }));
    }
}
const View = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_View);
let _ViewFields = class _ViewFields extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
     * Gets a value that specifies the XML schema that represents the collection.
     */
    getSchemaXml() {
        return ViewFields(this, "schemaxml")();
    }
    /**
     * Adds the field with the specified field internal name or display name to the collection.
     *
     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
     */
    add(fieldTitleOrInternalName) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(ViewFields(this, `addviewfield('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__[/* encodePath */ "e"])(fieldTitleOrInternalName)}')`));
    }
    /**
     * Moves the field with the specified field internal name to the specified position in the collection.
     *
     * @param field The case-sensitive internal name of the field to move.
     * @param index The zero-based index of the new position for the field.
     */
    move(field, index) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(ViewFields(this, "moveviewfieldto"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({ field, index }));
    }
    /**
     * Removes all the fields from the collection.
     */
    removeAll() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(ViewFields(this, "removeallviewfields"));
    }
    /**
     * Removes the field with the specified field internal name from the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
     */
    remove(fieldInternalName) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(ViewFields(this, `removeviewfield('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__[/* encodePath */ "e"])(fieldInternalName)}')`));
    }
};
_ViewFields = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("viewfields")
], _ViewFields);

const ViewFields = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_ViewFields);
var ViewScope;
(function (ViewScope) {
    ViewScope[ViewScope["DefaultValue"] = 0] = "DefaultValue";
    ViewScope[ViewScope["Recursive"] = 1] = "Recursive";
    ViewScope[ViewScope["RecursiveAll"] = 2] = "RecursiveAll";
    ViewScope[ViewScope["FilesOnly"] = 3] = "FilesOnly";
})(ViewScope || (ViewScope = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "359w":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/queryable-factory.js ***!
  \**********************************************************/
/*! exports provided: queryableFactory */
/*! exports used: queryableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return queryableFactory; });
function queryableFactory(constructor) {
    return (init, path) => {
        // construct the concrete instance
        const instance = new constructor(init, path);
        // we emit the construct event from the factory because we need all of the decorators and constructors
        // to have fully finished before we emit, which is now true. We type the instance to any to get around
        // the protected nature of emit
        instance.emit.construct(init, path);
        return instance;
    };
}
//# sourceMappingURL=queryable-factory.js.map

/***/ }),

/***/ "36LU":
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/clientside-pages/index.js ***!
  \********************************************************/
/*! exports provided: ClientsidePageFromFile, CreateClientsidePage, CanvasColumn, CanvasSection, ClientsideText, ClientsideWebpart, ColumnControl, PromotedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "laIm");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "UPqE");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "37pO":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/hubsites/web.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.js */ "UK2s");


_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.hubSiteData = async function (forceRefresh = false) {
    const data = await Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* Web */ "e"])(this, `hubSiteData(${forceRefresh})`)();
    if (typeof data === "string") {
        return JSON.parse(data);
    }
    return data;
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.syncHubSiteTheme = function () {
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_1__[/* spPost */ "a"])(Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* Web */ "e"])(this, "syncHubSiteTheme"));
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "3DT9":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/types.js ***!
  \*********************************************/
/*! exports provided: _Items, Items, _Item, Item, _ItemVersions, ItemVersions, _ItemVersion, ItemVersion, PagedItemCollection */
/*! exports used: Item, Items, _Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Items */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Item; });
/* unused harmony export _ItemVersions */
/* unused harmony export ItemVersions */
/* unused harmony export _ItemVersion */
/* unused harmony export ItemVersion */
/* unused harmony export PagedItemCollection */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations.js */ "UK2s");








/**
 * Describes a collection of Item objects
 *
 */
let _Items = class _Items extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    getById(id) {
        return Item(this).concat(`(${id})`);
    }
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    getItemByStringId(stringId) {
        // creates an item with the parent list path and append out method call
        return Item([this, this.parentUrl], `getItemByStringId('${stringId}')`);
    }
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    skip(skip, reverse = false) {
        if (reverse) {
            this.query.set("$skiptoken", `Paged=TRUE&PagedPrev=TRUE&p_ID=${skip}`);
        }
        else {
            this.query.set("$skiptoken", `Paged=TRUE&p_ID=${skip}`);
        }
        return this;
    }
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    getPaged() {
        return this.using(PagedItemParser(this))();
    }
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    async add(properties = {}) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])(properties)).then((data) => ({
            data: data,
            item: this.getById(data.Id),
        }));
    }
};
_Items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_6__[/* defaultPath */ "e"])("items")
], _Items);

const Items = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Items);
/**
 * Descrines a single Item instance
 *
 */
class _Item extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* deleteableWithETag */ "s"])();
    }
    /**
     * Gets the effective base permissions for the item
     *
     */
    get effectiveBasePermissions() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPQueryable */ "n"])(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the effective base permissions for the item in a UI context
     *
     */
    get effectiveBasePermissionsForUI() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPQueryable */ "n"])(this, "EffectiveBasePermissionsForUI");
    }
    /**
     * Gets the field values for this list item in their HTML representation
     *
     */
    get fieldValuesAsHTML() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPInstance */ "t"])(this, "FieldValuesAsHTML");
    }
    /**
     * Gets the field values for this list item in their text representation
     *
     */
    get fieldValuesAsText() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPInstance */ "t"])(this, "FieldValuesAsText");
    }
    /**
     * Gets the field values for this list item for use in editing controls
     *
     */
    get fieldValuesForEdit() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPInstance */ "t"])(this, "FieldValuesForEdit");
    }
    /**
     * Gets the collection of versions associated with this item
     */
    get versions() {
        return ItemVersions(this);
    }
    /**
     * this item's list
     */
    get list() {
        return this.getParent(_lists_types_js__WEBPACK_IMPORTED_MODULE_4__[/* List */ "e"], "", this.parentUrl.substring(0, this.parentUrl.lastIndexOf("/")));
    }
    /**
     * Updates this list instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])(properties, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* headers */ "v"])({
            "IF-Match": eTag,
            "X-HTTP-Method": "MERGE",
        }));
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Item(this).using(ItemUpdatedParser()), postBody);
        return {
            data,
            item: this,
        };
    }
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Item(this, "recycle"));
    }
    /**
     * Deletes the item object with options.
     *
     * @param parameters Specifies the options to use when deleting a item.
     */
    async deleteWithParams(parameters) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Item(this, "DeleteWithParameters"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({ parameters }));
    }
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    async getWopiFrameUrl(action = 0) {
        const i = Item(this, "getWOPIFrameUrl(@action)");
        i.query.set("@action", action);
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(i);
    }
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    validateUpdateListItem(formValues, bNewDocumentUpdate = false) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Item(this, "validateupdatelistitem"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({ formValues, bNewDocumentUpdate }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "ParentList/Id", "ParentList/Title", "ParentList/RootFolder/UniqueId", "ParentList/RootFolder/ServerRelativeUrl", "ParentList/RootFolder/ServerRelativePath", "ParentList/ParentWeb/Id", "ParentList/ParentWeb/Url", "ParentList/ParentWeb/ServerRelativeUrl", "ParentList/ParentWeb/ServerRelativePath").expand("ParentList", "ParentList/RootFolder", "ParentList/ParentWeb")();
        return {
            Item: {
                Id: urlInfo.Id,
            },
            ParentList: {
                Id: urlInfo.ParentList.Id,
                Title: urlInfo.ParentList.Title,
                RootFolderServerRelativePath: urlInfo.ParentList.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.ParentList.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.ParentList.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentList.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentList.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentList.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentList.ParentWeb.Url,
            },
        };
    }
    async setImageField(fieldName, imageName, imageContent) {
        const contextInfo = await this.getParentInfos();
        const webUrl = Object(_pnp_sp__WEBPACK_IMPORTED_MODULE_3__[/* extractWebUrl */ "n"])(this.toUrl());
        const q = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPQueryable */ "n"])([this, webUrl], "/_api/web/UploadImage");
        q.concat("(listTitle=@a1,imageName=@a2,listId=@a3,itemId=@a4)");
        q.query.set("@a1", `'${contextInfo.ParentList.Title}'`);
        q.query.set("@a2", `'${imageName}'`);
        q.query.set("@a3", `'${contextInfo.ParentList.Id}'`);
        q.query.set("@a4", contextInfo.Item.Id);
        const result = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(q, { body: imageContent });
        const itemInfo = {
            "type": "thumbnail",
            "fileName": result.Name,
            "nativeFile": {},
            "fieldName": fieldName,
            "serverUrl": contextInfo.ParentWeb.Url.replace(contextInfo.ParentWeb.ServerRelativeUrl, ""),
            "serverRelativeUrl": result.ServerRelativeUrl,
            "id": result.UniqueId,
        };
        return this.validateUpdateListItem([{
                FieldName: fieldName,
                FieldValue: JSON.stringify(itemInfo),
            }]);
    }
}
const Item = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Item);
/**
 * Describes a collection of Version objects
 *
 */
let _ItemVersions = class _ItemVersions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId) {
        return ItemVersion(this).concat(`(${versionId})`);
    }
};
_ItemVersions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_6__[/* defaultPath */ "e"])("versions")
], _ItemVersions);

const ItemVersions = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
class _ItemVersion extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* deleteableWithETag */ "s"])();
    }
}
const ItemVersion = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_ItemVersion);
/**
 * Provides paging functionality for list items
 */
class PagedItemCollection {
    constructor(parent, nextUrl, results) {
        this.parent = parent;
        this.nextUrl = nextUrl;
        this.results = results;
    }
    /**
     * If true there are more results available in the set, otherwise there are not
     */
    get hasNext() {
        return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
    }
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    async getNext() {
        if (this.hasNext) {
            const items = Items([this.parent, this.nextUrl], "");
            return items.getPaged();
        }
        return null;
    }
}
function PagedItemParser(parent) {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* parseBinderWithErrorCheck */ "D"])(async (r) => {
        const json = await r.json();
        const nextUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* hOP */ "p"])(json, "d") && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* hOP */ "p"])(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
        return new PagedItemCollection(parent, nextUrl, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* parseODataJSON */ "I"])(json));
    });
}
function ItemUpdatedParser() {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* parseBinderWithErrorCheck */ "D"])(async (r) => ({
        etag: r.headers.get("etag"),
    }));
}
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "3fSn":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/forms/list.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "zYJ9");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "forms", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Forms */ "e"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "4Egx":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/content-types/item.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "S3gC");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"], "contentType", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* ContentType */ "e"]);
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "4G66":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/security/web.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "1dmT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcs.js */ "vXSC");





Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "roleDefinitions", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* RoleDefinitions */ "n"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "roleAssignments", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* RoleAssignments */ "t"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "firstUniqueAncestorSecurableObject", _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPInstance */ "t"]);
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* getUserEffectivePermissions */ "a"];
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getCurrentUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentUserEffectivePermissions */ "n"];
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.breakRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* breakRoleInheritance */ "e"];
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.resetRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* resetRoleInheritance */ "r"];
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.userHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* userHasPermissions */ "o"];
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.currentUserHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* currentUserHasPermissions */ "t"];
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.hasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* hasPermissions */ "i"];
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "4kGv":
/*!********************************************!*\
  !*** ./node_modules/@pnp/core/timeline.js ***!
  \********************************************/
/*! exports provided: noInherit, once, Timeline, cloneObserverCollection */
/*! exports used: Timeline, cloneObserverCollection, noInherit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return noInherit; });
/* unused harmony export once */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return cloneObserverCollection; });
/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moments.js */ "DZog");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "NuLX");


/**
 * Field name to hold any flags on observer functions used to modify their behavior
 */
const flags = Symbol.for("ObserverLifecycleFlags");
/**
 * Bitwise flags to indicate modified behavior
 */
var ObserverLifecycleFlags;
(function (ObserverLifecycleFlags) {
    // eslint-disable-next-line no-bitwise
    ObserverLifecycleFlags[ObserverLifecycleFlags["noInherit"] = 1] = "noInherit";
    // eslint-disable-next-line no-bitwise
    ObserverLifecycleFlags[ObserverLifecycleFlags["once"] = 2] = "once";
})(ObserverLifecycleFlags || (ObserverLifecycleFlags = {}));
/**
 * Creates a filter function for use in Array.filter that will filter OUT any observers with the specified [flag]
 *
 * @param flag The flag used to exclude observers
 * @returns An Array.filter function
 */
// eslint-disable-next-line no-bitwise
const byFlag = (flag) => ((observer) => !((observer[flags] || 0) & flag));
/**
 * Creates an observer lifecycle modification flag application function
 * @param flag The flag to the bound function should add
 * @returns A function that can be used to apply [flag] to any valid observer
 */
const addFlag = (flag) => ((observer) => {
    // eslint-disable-next-line no-bitwise
    observer[flags] = (observer[flags] || 0) | flag;
    return observer;
});
/**
 * Observer lifecycle modifier that indicates this observer should NOT be inherited by any child
 * timelines.
 */
const noInherit = addFlag(1 /* noInherit */);
/**
 * Observer lifecycle modifier that indicates this observer should only fire once per instance, it is then removed.
 *
 * Note: If you have a parent and child timeline "once" will affect both and the observer will fire once for a parent lifecycle
 * and once for a child lifecycle
 */
const once = addFlag(2 /* once */);
/**
 * Timeline represents a set of operations executed in order of definition,
 * with each moment's behavior controlled by the implementing function
 */
class Timeline {
    /**
     * Creates a new instance of Timeline with the supplied moments and optionally any observers to include
     *
     * @param moments The moment object defining this timeline
     * @param observers Any observers to include (optional)
     */
    constructor(moments, observers = {}) {
        this.moments = moments;
        this.observers = observers;
        this._onProxy = null;
        this._emitProxy = null;
        this._inheritingObservers = true;
    }
    /**
     * Apply the supplied behavior(s) to this timeline
     *
     * @param behaviors One or more behaviors
     * @returns `this` Timeline
     */
    using(...behaviors) {
        for (let i = 0; i < behaviors.length; i++) {
            behaviors[i](this);
        }
        return this;
    }
    /**
     * Property allowing access to manage observers on moments within this timeline
     */
    get on() {
        if (this._onProxy === null) {
            this._onProxy = new Proxy(this, {
                get: (target, p) => Object.assign((handler) => {
                    target.cloneObserversOnChange();
                    addObserver(target.observers, p, handler, "add");
                    return target;
                }, {
                    toArray: () => {
                        return Reflect.has(target.observers, p) ? [...Reflect.get(target.observers, p)] : [];
                    },
                    replace: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, "replace");
                        return target;
                    },
                    prepend: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, "prepend");
                        return target;
                    },
                    clear: () => {
                        if (Reflect.has(target.observers, p)) {
                            target.cloneObserversOnChange();
                            // we trust ourselves that this will be an array
                            target.observers[p].length = 0;
                            return true;
                        }
                        return false;
                    },
                }),
            });
        }
        return this._onProxy;
    }
    /**
     * Shorthand method to emit a logging event tied to this timeline
     *
     * @param message The message to log
     * @param level The level at which the message applies
     */
    log(message, level = 0) {
        this.emit.log(message, level);
    }
    /**
     * Shorthand method to emit an error event tied to this timeline
     *
     * @param e Optional. Any error object to emit. If none is provided no emit occurs
     */
    error(e) {
        if (Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "l"])(e)) {
            this.emit.error(e);
        }
    }
    /**
     * Property allowing access to invoke a moment from within this timeline
     */
    get emit() {
        if (this._emitProxy === null) {
            this._emitProxy = new Proxy(this, {
                get: (target, p) => (...args) => {
                    // handle the case where no observers registered for the target moment
                    const observers = Reflect.has(target.observers, p) ? Reflect.get(target.observers, p) : [];
                    if ((!Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "o"])(observers) || observers.length < 1) && p === "error") {
                        // if we are emitting an error, and no error observers are defined, we throw
                        throw Error(`Unhandled Exception: ${args[0]}`);
                    }
                    try {
                        // default to broadcasting any events without specific impl (will apply to log and error)
                        const moment = Reflect.has(target.moments, p) ? Reflect.get(target.moments, p) : p === "init" || p === "dispose" ? Object(_moments_js__WEBPACK_IMPORTED_MODULE_0__[/* lifecycle */ "a"])() : Object(_moments_js__WEBPACK_IMPORTED_MODULE_0__[/* broadcast */ "n"])();
                        // pass control to the individual moment's implementation
                        return Reflect.apply(moment, target, [observers, ...args]);
                    }
                    catch (e) {
                        if (p !== "error") {
                            this.error(e);
                        }
                        else {
                            // if all else fails, re-throw as we are getting errors from error observers meaning something is sideways
                            throw e;
                        }
                    }
                    finally {
                        // here we need to remove any "once" observers
                        if (observers && observers.length > 0) {
                            Reflect.set(target.observers, p, observers.filter(byFlag(2 /* once */)));
                        }
                    }
                },
            });
        }
        return this._emitProxy;
    }
    /**
     * Starts a timeline
     *
     * @description This method first emits "init" to allow for any needed initial conditions then calls execute with any supplied init
     *
     * @param init A value passed into the execute logic from the initiator of the timeline
     * @returns The result of this.execute
     */
    start(init) {
        // initialize our timeline
        this.emit.init();
        // get a ref to the promise returned by execute
        const p = this.execute(init);
        // attach our dispose logic
        p.finally(() => {
            try {
                // provide an opportunity for cleanup of the timeline
                this.emit.dispose();
            }
            catch (e) {
                // shouldn't happen, but possible dispose throws - which may be missed as the usercode await will have resolved.
                const e2 = Object.assign(Error("Error in dispose."), {
                    innerException: e,
                });
                this.error(e2);
            }
        }).catch(() => void (0));
        // give the promise back to the caller
        return p;
    }
    /**
     * By default a timeline references the same observer collection as a parent timeline,
     * if any changes are made to the observers this method first clones them ensuring we
     * maintain a local copy and de-ref the parent
     */
    cloneObserversOnChange() {
        if (this._inheritingObservers) {
            this._inheritingObservers = false;
            this.observers = cloneObserverCollection(this.observers);
        }
    }
}
/**
 * Adds an observer to a given target
 *
 * @param target The object to which events are registered
 * @param moment The name of the moment to which the observer is registered
 * @param addBehavior Determines how the observer is added to the collection
 *
 */
function addObserver(target, moment, observer, addBehavior) {
    if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunc */ "s"])(observer)) {
        throw Error("Observers must be functions.");
    }
    if (!Reflect.has(target, moment)) {
        // if we don't have a registration for this moment, then we just add a new prop
        target[moment] = [observer];
    }
    else {
        // if we have an existing property then we follow the specified behavior
        switch (addBehavior) {
            case "add":
                target[moment].push(observer);
                break;
            case "prepend":
                target[moment].unshift(observer);
                break;
            case "replace":
                target[moment].length = 0;
                target[moment].push(observer);
                break;
        }
    }
    return target[moment];
}
function cloneObserverCollection(source) {
    return Reflect.ownKeys(source).reduce((clone, key) => {
        // eslint-disable-next-line no-bitwise
        clone[key] = [...source[key].filter(byFlag(1 /* noInherit */))];
        return clone;
    }, {});
}
//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ "4tXH":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/types.js ***!
  \***********************************************/
/*! exports provided: _Folders, Folders, _Folder, Folder, folderFromServerRelativePath, folderFromAbsolutePath, folderFromPath */
/*! exports used: Folder, Folders, _Folder, folderFromServerRelativePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Folders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Folders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return folderFromServerRelativePath; });
/* unused harmony export folderFromAbsolutePath */
/* unused harmony export folderFromPath */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-resource-path.js */ "G6u6");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");
/* harmony import */ var _context_info_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context-info/index.js */ "Ji9F");
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../batching.js */ "pAcn");













let _Folders = class _Folders extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPCollection */ "a"] {
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    getByUrl(name) {
        return Folder(this).concat(`('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(name)}')`);
    }
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    async addUsingPath(serverRelativeUrl, overwrite = false) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Folders(this, `addUsingPath(DecodedUrl='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(serverRelativeUrl)}',overwrite=${overwrite})`));
        return {
            data,
            folder: folderFromServerRelativePath(this, data.ServerRelativeUrl),
        };
    }
};
_Folders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_6__[/* defaultPath */ "e"])("folders")
], _Folders);

const Folders = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_Folders);
class _Folder extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* deleteableWithETag */ "s"])();
    }
    /**
     * Gets this folder's sub folders
     *
     */
    get folders() {
        return Folders(this);
    }
    /**
     * Gets this folder's list item field values
     *
     */
    get listItemAllFields() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPInstance */ "t"])(this, "listItemAllFields");
    }
    /**
     * Gets the parent folder, if available
     *
     */
    get parentFolder() {
        return Folder(this, "parentFolder");
    }
    /**
     * Gets this folder's properties
     *
     */
    get properties() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPInstance */ "t"])(this, "properties");
    }
    /**
     * Gets this folder's storage metrics information
     *
     */
    get storageMetrics() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPInstance */ "t"])(this, "storagemetrics");
    }
    /**
     * Updates folder's properties
     * @param props Folder's properties to update
     */
    async update(props) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props));
        return {
            data,
            folder: this,
        };
    }
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Folder(this, "recycle"));
    }
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    async getItem(...selects) {
        const q = this.listItemAllFields;
        const d = await q.select(...selects)();
        if (d["odata.null"]) {
            throw Error("No associated item was found for this folder. It may be the root folder, which does not have an item.");
        }
        return Object.assign(Object(_items_types_js__WEBPACK_IMPORTED_MODULE_5__[/* Item */ "e"])([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__[/* odataUrlFrom */ "e"])(d)]), d);
    }
    async moveByPath(destUrl, ...rest) {
        let options = {
            KeepBoth: false,
            ShouldBypassSharedLocks: true,
            RetainEditorAndModifiedOnMove: false,
        };
        if (rest.length === 1) {
            if (typeof rest[0] === "boolean") {
                options.KeepBoth = rest[0];
            }
            else if (typeof rest[0] === "object") {
                options = { ...options, ...rest[0] };
            }
        }
        return this.moveCopyImpl(destUrl, options, "MoveFolderByPath");
    }
    async copyByPath(destUrl, ...rest) {
        let options = {
            ShouldBypassSharedLocks: true,
            ResetAuthorAndCreatedOnCopy: true,
            KeepBoth: false,
        };
        if (rest.length === 1) {
            if (typeof rest[0] === "boolean") {
                options.KeepBoth = rest[0];
            }
            else if (typeof rest[0] === "object") {
                options = { ...options, ...rest[0] };
            }
        }
        return this.moveCopyImpl(destUrl, options, "CopyFolderByPath");
    }
    /**
     * Deletes the folder object with options.
     *
     * @param parameters Specifies the options to use when deleting a folder.
     */
    async deleteWithParams(parameters) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Folder(this, "DeleteWithParameters"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({ parameters }));
    }
    /**
     * Create the subfolder inside the current folder, as specified by the leafPath
     *
     * @param leafPath leafName of the new folder
     */
    async addSubFolderUsingPath(leafPath) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Folder(this, "AddSubFolderUsingPath"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({ leafPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__[/* toResourcePath */ "e"])(leafPath) }));
        return this.folders.getByUrl(leafPath);
    }
    /**
     * Gets the parent information for this folder's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("ServerRelativeUrl", "ListItemAllFields/ParentList/Id", "ListItemAllFields/ParentList/RootFolder/UniqueId", "ListItemAllFields/ParentList/RootFolder/ServerRelativeUrl", "ListItemAllFields/ParentList/RootFolder/ServerRelativePath", "ListItemAllFields/ParentList/ParentWeb/Id", "ListItemAllFields/ParentList/ParentWeb/Url", "ListItemAllFields/ParentList/ParentWeb/ServerRelativeUrl", "ListItemAllFields/ParentList/ParentWeb/ServerRelativePath").expand("ListItemAllFields/ParentList", "ListItemAllFields/ParentList/RootFolder", "ListItemAllFields/ParentList/ParentWeb")();
        return {
            Folder: {
                ServerRelativeUrl: urlInfo.ServerRelativeUrl,
            },
            ParentList: {
                Id: urlInfo.ListItemAllFields.ParentList.Id,
                RootFolderServerRelativePath: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.ListItemAllFields.ParentList.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ListItemAllFields.ParentList.ParentWeb.Id,
                ServerRelativePath: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ListItemAllFields.ParentList.ParentWeb.Url,
            },
        };
    }
    /**
     * Implementation of folder move/copy
     *
     * @param destUrl The server relative path to which the folder will be copied/moved
     * @param options Any options
     * @param methodName The method to call
     * @returns An IFolder representing the moved or copied folder
     */
    moveCopyImpl(destUrl, options, methodName) {
        // create a timeline we will manipulate for this request
        const poster = Folder(this);
        // add our pre-request actions, this fixes issues with batching hanging #2668
        poster.on.pre(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* noInherit */ "v"])(async (url, init, result) => {
            const urlInfo = await Folder(this).using(Object(_batching_js__WEBPACK_IMPORTED_MODULE_12__[/* BatchNever */ "e"])()).getParentInfos();
            const uri = new URL(urlInfo.ParentWeb.Url);
            url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "s"])(urlInfo.ParentWeb.Url, `/_api/SP.MoveCopyUtil.${methodName}()`);
            init = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({
                destPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__[/* toResourcePath */ "e"])(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isUrlAbsolute */ "h"])(destUrl) ? destUrl : Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "s"])(uri.origin, destUrl)),
                options,
                srcPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__[/* toResourcePath */ "e"])(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "s"])(uri.origin, urlInfo.Folder.ServerRelativeUrl)),
            }, init);
            return [url, init, result];
        }));
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(poster).then(() => folderFromPath(this, destUrl));
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* cancelableScope */ "h"]
], _Folder.prototype, "moveByPath", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* cancelableScope */ "h"]
], _Folder.prototype, "copyByPath", null);
const Folder = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_Folder);
/**
 * Creates an IFolder instance given a base object and a server relative path
 *
 * @param base Valid SPQueryable from which the observers will be used and the web url extracted
 * @param serverRelativePath The server relative url to the folder (ex: '/sites/dev/documents/folder3')
 * @returns IFolder instance referencing the folder described by the supplied parameters
 */
function folderFromServerRelativePath(base, serverRelativePath) {
    return Folder([base, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__[/* extractWebUrl */ "e"])(base.toUrl())], `_api/web/getFolderByServerRelativePath(decodedUrl='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(serverRelativePath)}')`);
}
/**
 * Creates an IFolder instance given a base object and an absolute path
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath The absolute url to the folder (ex: 'https://tenant.sharepoint.com/sites/dev/documents/folder/')
 * @returns IFolder instance referencing the folder described by the supplied parameters
 */
async function folderFromAbsolutePath(base, absoluteFolderPath) {
    const { WebFullUrl } = await Folder(base).using(Object(_batching_js__WEBPACK_IMPORTED_MODULE_12__[/* BatchNever */ "e"])()).getContextInfo(absoluteFolderPath);
    const { pathname } = new URL(absoluteFolderPath);
    return folderFromServerRelativePath(Folder([base, Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "s"])(WebFullUrl, "_api/web")]), decodeURIComponent(pathname));
}
/**
 * Creates an IFolder intance given a base object and either an absolute or server relative path to a folder
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath server relative or absolute url to the file (ex: 'https://tenant.sharepoint.com/sites/dev/documents/folder' or '/sites/dev/documents/folder')
 * @returns IFile instance referencing the file described by the supplied parameters
 */
async function folderFromPath(base, path) {
    return (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isUrlAbsolute */ "h"])(path) ? folderFromAbsolutePath : folderFromServerRelativePath)(base, path);
}
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "50wY":
/*!******************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/effects/FluentDepths.js ***!
  \******************************************************************/
/*! exports provided: Depths */
/*! exports used: Depths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Depths; });
var Depths;
(function (Depths) {
    Depths.depth0 = '0 0 0 0 transparent';
    Depths.depth4 = '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth8 = '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth16 = '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth64 = '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)';
})(Depths || (Depths = {}));
//# sourceMappingURL=FluentDepths.js.map

/***/ }),

/***/ "5JhY":
/*!************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Spinner/Spinner.js ***!
  \************************************************************************/
/*! exports provided: Spinner */
/*! exports used: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Spinner; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "mUxj");
/* harmony import */ var _Spinner_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.base */ "VMH+");
/* harmony import */ var _Spinner_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner.styles */ "Zxkc");



var Spinner = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "e"])(_Spinner_base__WEBPACK_IMPORTED_MODULE_1__[/* SpinnerBase */ "e"], _Spinner_styles__WEBPACK_IMPORTED_MODULE_2__[/* getStyles */ "e"], undefined, { scope: 'Spinner' });
//# sourceMappingURL=Spinner.js.map

/***/ }),

/***/ "6a65":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/social/types.js ***!
  \**********************************************/
/*! exports provided: _Social, Social, _MySocial, MySocial, SocialActorType, SocialActorTypes, SocialFollowResult, SocialStatusCode */
/*! exports used: Social */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Social */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Social; });
/* unused harmony export _MySocial */
/* unused harmony export MySocial */
/* unused harmony export SocialActorType */
/* unused harmony export SocialActorTypes */
/* unused harmony export SocialFollowResult */
/* unused harmony export SocialStatusCode */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operations.js */ "UK2s");






let _Social = class _Social extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    get my() {
        return MySocial(this);
    }
    async getFollowedSitesUri() {
        const r = await SocialCloneFactory(this, "FollowedSitesUri")();
        return r.FollowedSitesUri || r;
    }
    async getFollowedDocumentsUri() {
        const r = await SocialCloneFactory(this, "FollowedDocumentsUri")();
        return r.FollowedDocumentsUri || r;
    }
    async follow(actorInfo) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(SocialCloneFactory(this, "follow"), this.createSocialActorInfoRequestBody(actorInfo));
    }
    async isFollowed(actorInfo) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(SocialCloneFactory(this, "isfollowed"), this.createSocialActorInfoRequestBody(actorInfo));
    }
    async stopFollowing(actorInfo) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(SocialCloneFactory(this, "stopfollowing"), this.createSocialActorInfoRequestBody(actorInfo));
    }
    createSocialActorInfoRequestBody(actorInfo) {
        return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__[/* body */ "_"])({
            "actor": {
                Id: null,
                ...actorInfo,
            },
        });
    }
};
_Social = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_2__[/* defaultPath */ "e"])("_api/social.following")
], _Social);

/**
 * Get a new Social instance for the particular Url
 */
const Social = (baseUrl) => new _Social(baseUrl);
const SocialCloneFactory = (baseUrl, paths) => new _Social(baseUrl, paths);
/**
 * Current user's Social instance
 */
let _MySocial = class _MySocial extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    async followed(types) {
        const r = await MySocialCloneFactory(this, `followed(types=${types})`)();
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* hOP */ "p"])(r, "Followed") ? r.Followed.results : r;
    }
    async followedCount(types) {
        const r = await MySocialCloneFactory(this, `followedcount(types=${types})`)();
        return r.FollowedCount || r;
    }
    async followers() {
        const r = await MySocialCloneFactory(this, "followers")();
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* hOP */ "p"])(r, "Followers") ? r.Followers.results : r;
    }
    async suggestions() {
        const r = await MySocialCloneFactory(this, "suggestions")();
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* hOP */ "p"])(r, "Suggestions") ? r.Suggestions.results : r;
    }
};
_MySocial = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_2__[/* defaultPath */ "e"])("my")
], _MySocial);

/**
 * Invokable factory for IMySocial instances
 */
const MySocial = (baseUrl, path) => new _MySocial(baseUrl, path);
const MySocialCloneFactory = (baseUrl, path) => new _MySocial(baseUrl, path);
/**
 * Social actor type
 *
 */
var SocialActorType;
(function (SocialActorType) {
    SocialActorType[SocialActorType["User"] = 0] = "User";
    SocialActorType[SocialActorType["Document"] = 1] = "Document";
    SocialActorType[SocialActorType["Site"] = 2] = "Site";
    SocialActorType[SocialActorType["Tag"] = 3] = "Tag";
})(SocialActorType || (SocialActorType = {}));
/**
 * Social actor type
 *
 */
/* eslint-disable no-bitwise */
var SocialActorTypes;
(function (SocialActorTypes) {
    SocialActorTypes[SocialActorTypes["None"] = 0] = "None";
    SocialActorTypes[SocialActorTypes["User"] = 1] = "User";
    SocialActorTypes[SocialActorTypes["Document"] = 2] = "Document";
    SocialActorTypes[SocialActorTypes["Site"] = 4] = "Site";
    SocialActorTypes[SocialActorTypes["Tag"] = 8] = "Tag";
    /**
   * The set excludes documents and sites that do not have feeds.
   */
    SocialActorTypes[SocialActorTypes["ExcludeContentWithoutFeeds"] = 268435456] = "ExcludeContentWithoutFeeds";
    /**
   * The set includes group sites
   */
    SocialActorTypes[SocialActorTypes["IncludeGroupsSites"] = 536870912] = "IncludeGroupsSites";
    /**
   * The set includes only items created within the last 24 hours
   */
    SocialActorTypes[SocialActorTypes["WithinLast24Hours"] = 1073741824] = "WithinLast24Hours";
})(SocialActorTypes || (SocialActorTypes = {}));
/* eslint-enable no-bitwise */
/**
 * Result from following
 *
 */
var SocialFollowResult;
(function (SocialFollowResult) {
    SocialFollowResult[SocialFollowResult["Ok"] = 0] = "Ok";
    SocialFollowResult[SocialFollowResult["AlreadyFollowing"] = 1] = "AlreadyFollowing";
    SocialFollowResult[SocialFollowResult["LimitReached"] = 2] = "LimitReached";
    SocialFollowResult[SocialFollowResult["InternalError"] = 3] = "InternalError";
})(SocialFollowResult || (SocialFollowResult = {}));
/**
 * Specifies an exception or status code.
 */
var SocialStatusCode;
(function (SocialStatusCode) {
    /**
   * The operation completed successfully
   */
    SocialStatusCode[SocialStatusCode["OK"] = 0] = "OK";
    /**
   * The request is invalid.
   */
    SocialStatusCode[SocialStatusCode["InvalidRequest"] = 1] = "InvalidRequest";
    /**
   *  The current user is not authorized to perform the operation.
   */
    SocialStatusCode[SocialStatusCode["AccessDenied"] = 2] = "AccessDenied";
    /**
   * The target of the operation was not found.
   */
    SocialStatusCode[SocialStatusCode["ItemNotFound"] = 3] = "ItemNotFound";
    /**
   * The operation is invalid for the target's current state.
   */
    SocialStatusCode[SocialStatusCode["InvalidOperation"] = 4] = "InvalidOperation";
    /**
   * The operation completed without modifying the target.
   */
    SocialStatusCode[SocialStatusCode["ItemNotModified"] = 5] = "ItemNotModified";
    /**
   * The operation failed because an internal error occurred.
   */
    SocialStatusCode[SocialStatusCode["InternalError"] = 6] = "InternalError";
    /**
   * The operation failed because the server could not access the distributed cache.
   */
    SocialStatusCode[SocialStatusCode["CacheReadError"] = 7] = "CacheReadError";
    /**
   * The operation succeeded but the server could not update the distributed cache.
   */
    SocialStatusCode[SocialStatusCode["CacheUpdateError"] = 8] = "CacheUpdateError";
    /**
   * No personal site exists for the current user, and no further information is available.
   */
    SocialStatusCode[SocialStatusCode["PersonalSiteNotFound"] = 9] = "PersonalSiteNotFound";
    /**
   * No personal site exists for the current user, and a previous attempt to create one failed.
   */
    SocialStatusCode[SocialStatusCode["FailedToCreatePersonalSite"] = 10] = "FailedToCreatePersonalSite";
    /**
   * No personal site exists for the current user, and a previous attempt to create one was not authorized.
   */
    SocialStatusCode[SocialStatusCode["NotAuthorizedToCreatePersonalSite"] = 11] = "NotAuthorizedToCreatePersonalSite";
    /**
   * No personal site exists for the current user, and no attempt should be made to create one.
   */
    SocialStatusCode[SocialStatusCode["CannotCreatePersonalSite"] = 12] = "CannotCreatePersonalSite";
    /**
   * The operation was rejected because an internal limit had been reached.
   */
    SocialStatusCode[SocialStatusCode["LimitReached"] = 13] = "LimitReached";
    /**
   * The operation failed because an error occurred during the processing of the specified attachment.
   */
    SocialStatusCode[SocialStatusCode["AttachmentError"] = 14] = "AttachmentError";
    /**
   * The operation succeeded with recoverable errors; the returned data is incomplete.
   */
    SocialStatusCode[SocialStatusCode["PartialData"] = 15] = "PartialData";
    /**
   * A required SharePoint feature is not enabled.
   */
    SocialStatusCode[SocialStatusCode["FeatureDisabled"] = 16] = "FeatureDisabled";
    /**
   * The site's storage quota has been exceeded.
   */
    SocialStatusCode[SocialStatusCode["StorageQuotaExceeded"] = 17] = "StorageQuotaExceeded";
    /**
   * The operation failed because the server could not access the database.
   */
    SocialStatusCode[SocialStatusCode["DatabaseError"] = 18] = "DatabaseError";
})(SocialStatusCode || (SocialStatusCode = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "6k7F":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/index.js ***!
  \********************************************/
/*! exports provided: Web, Webs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "dVsc");
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fi.js */ "v6VW");



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_1__[/* SPFI */ "e"].prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_0__[/* Web */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "6k8n":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/fields/list.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "KYlJ");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "fields", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Fields */ "e"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "6l60":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/site-groups/index.js ***!
  \***************************************************/
/*! exports provided: SiteGroup, SiteGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "0rHm");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "UuUm");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "6lVU":
/*!*********************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/createTheme.js ***!
  \*********************************************************/
/*! exports provided: createTheme */
/*! exports used: createTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createTheme; });
/* harmony import */ var _colors_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors/index */ "PcVi");
/* harmony import */ var _effects_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/index */ "NqRq");
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/index */ "T90h");
/* harmony import */ var _mergeThemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeThemes */ "UcWH");
/* harmony import */ var _spacing_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spacing/index */ "7HGX");
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/makeSemanticColors */ "NqVQ");






/**
 * Creates a custom theme definition.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (theme === void 0) { theme = {}; }
    if (depComments === void 0) { depComments = false; }
    var isInverted = !!theme.isInverted;
    var baseTheme = {
        palette: _colors_index__WEBPACK_IMPORTED_MODULE_0__[/* DefaultPalette */ "e"],
        effects: _effects_index__WEBPACK_IMPORTED_MODULE_1__[/* DefaultEffects */ "e"],
        fonts: _fonts_index__WEBPACK_IMPORTED_MODULE_2__[/* DefaultFontStyles */ "e"],
        spacing: _spacing_index__WEBPACK_IMPORTED_MODULE_4__[/* DefaultSpacing */ "e"],
        isInverted: isInverted,
        disableGlobalClassNames: false,
        semanticColors: Object(_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_5__[/* makeSemanticColors */ "t"])(_colors_index__WEBPACK_IMPORTED_MODULE_0__[/* DefaultPalette */ "e"], _effects_index__WEBPACK_IMPORTED_MODULE_1__[/* DefaultEffects */ "e"], undefined, isInverted, depComments),
        rtl: undefined,
    };
    return Object(_mergeThemes__WEBPACK_IMPORTED_MODULE_3__[/* mergeThemes */ "e"])(baseTheme, theme);
}
//# sourceMappingURL=createTheme.js.map

/***/ }),

/***/ "7HGX":
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/spacing/DefaultSpacing.js ***!
  \********************************************************************/
/*! exports provided: DefaultSpacing */
/*! exports used: DefaultSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DefaultSpacing; });
var DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px',
};
//# sourceMappingURL=DefaultSpacing.js.map

/***/ }),

/***/ "7pU6":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/sp/user-custom-actions/site.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _sites_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sites/types.js */ "ilAS");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "1mTr");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_sites_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Site */ "t"], "userCustomActions", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* UserCustomActions */ "e"]);
//# sourceMappingURL=site.js.map

/***/ }),

/***/ "8GdW":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/customizations/Customizations.js ***!
  \*******************************************************************************/
/*! exports provided: Customizations */
/*! exports used: Customizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Customizations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalSettings */ "dkd8");


var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__[/* GlobalSettings */ "e"].getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false,
});
var _events = [];
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    /** Apply global Customization settings.
     * @example Customizations.applySettings(\{ theme: \{...\} \});
     */
    Customizations.applySettings = function (settings) {
        _allSettings.settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({}, _allSettings.settings), settings);
        Customizations._raiseChange();
    };
    /** Apply Customizations to a particular named scope, like a component.
     * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
     */
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({}, _allSettings.scopedSettings[scopeName]), settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    /** Used to run some code that sets Customizations without triggering an update until the end.
     * Useful for applying Customizations that don't affect anything currently rendered, or for
     * applying many customizations at once.
     * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
     */
    Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
        Customizations._suppressUpdates = true;
        try {
            code();
        }
        catch (_a) {
            /* do nothing */
        }
        Customizations._suppressUpdates = false;
        if (!suppressUpdate) {
            Customizations._raiseChange();
        }
    };
    Customizations.observe = function (onChange) {
        _events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events = _events.filter(function (cb) { return cb !== onChange; });
    };
    Customizations._raiseChange = function () {
        if (!Customizations._suppressUpdates) {
            _events.forEach(function (cb) { return cb(); });
        }
    };
    return Customizations;
}());

//# sourceMappingURL=Customizations.js.map

/***/ }),

/***/ "8gyt":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/sharing/web.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "AvPO");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcs.js */ "At/s");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operations.js */ "UK2s");






/**
 * Shares this web with the supplied users (not supported for batching)
 * @param loginNames The resolved login names to share
 * @param role The role to share this web
 * @param emailData Optional email data
 */
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.shareWith = async function (loginNames, role = _types_js__WEBPACK_IMPORTED_MODULE_1__[/* SharingRole */ "t"].View, emailData) {
    const url = await this.select("Url")();
    return this.shareObject(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* combine */ "s"])(url.Url, "/_layouts/15/aclinv.aspx?forSharing=1&mbypass=1"), loginNames, role, emailData);
};
/**
 * Provides direct access to the static web.ShareObject method
 *
 * @param url The url to share
 * @param loginNames Resolved loginnames string[] of a single login name string
 * @param roleValue Role value
 * @param emailData Optional email data
 * @param groupId Optional group id
 * @param propagateAcl
 * @param includeAnonymousLinkInEmail
 * @param useSimplifiedRoles
 */
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.shareObject = function (url, loginNames, role, emailData, group, propagateAcl = false, includeAnonymousLinkInEmail = false, useSimplifiedRoles = true) {
    return Object(_funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* shareObject */ "r"])(this, {
        emailData: emailData,
        group: group,
        includeAnonymousLinkInEmail: includeAnonymousLinkInEmail,
        loginNames: loginNames,
        propagateAcl: propagateAcl,
        role: role,
        url: url,
        useSimplifiedRoles: useSimplifiedRoles,
    });
};
/**
 * Supplies a method to pass any set of arguments to ShareObject
 *
 * @param options The set of options to send to ShareObject
 */
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.shareObjectRaw = function (options) {
    return Object(_funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* shareObject */ "r"])(this, options, true);
};
/**
 * Supplies a method to pass any set of arguments to ShareObject
 *
 * @param options The set of options to send to ShareObject
 */
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.unshareObject = function (url) {
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* Web */ "e"])(this, "unshareObject"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__[/* body */ "_"])({ url }));
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "9Ar0":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/webparts/index.js ***!
  \************************************************/
/*! exports provided: WebPartsPersonalizationScope, WebPartDefinitions, WebPartDefinition, LimitedWebPartManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _file_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.js */ "yGnx");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "pXI8");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "9Ppb":
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/classNamesFunction.js ***!
  \********************************************************************/
/*! exports provided: classNamesFunction */
/*! exports used: classNamesFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return classNamesFunction; });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/merge-styles */ "psVN");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "O1zE");
/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rtl */ "Bo8X");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "pyJV");



var MAX_CACHE_COUNT = 50;
var DEFAULT_SPECIFICITY_MULTIPLIER = 5;
var _memoizedClassNames = 0;
var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__[/* Stylesheet */ "e"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () { return _memoizedClassNames++; });
}
// Note that because of the caching nature within the classNames memoization,
// I've disabled this rule to simply be able to work with any types.
/* eslint-disable @typescript-eslint/no-explicit-any */
// This represents a prop we attach to each Map to indicate the cached return value
// associated with the graph node.
var retVal = '__retval__';
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 *
 * Note that the props you pass in on every render should be in the same order and
 * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
 * these will cause extra recalcs to occur.
 */
function classNamesFunction(options) {
    // We build a trie where each node is a Map. The map entry key represents an argument
    // value, and the entry value is another node (Map). Each node has a `__retval__`
    // property which is used to hold the cached response.
    if (options === void 0) { options = {}; }
    // To derive the response, we can simply ensure the arguments are added or already
    // exist in the trie. At the last node, if there is a `__retval__` we return that. Otherwise
    // we call the `getStyles` api to evaluate, cache on the property, and return that.
    var map = new Map();
    var styleCalcCount = 0;
    var getClassNamesCount = 0;
    var currentMemoizedClassNames = _memoizedClassNames;
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        var _a;
        if (styleProps === void 0) { styleProps = {}; }
        // If useStaticStyles is true, styleFunctionOrObject returns slot to classname mappings.
        // If there is also no style overrides, we can skip merge styles completely and
        // simply return the result from the style funcion.
        if (options.useStaticStyles &&
            typeof styleFunctionOrObject === 'function' &&
            styleFunctionOrObject.__noStyleOverride__) {
            return styleFunctionOrObject(styleProps);
        }
        getClassNamesCount++;
        var current = map;
        var theme = styleProps.theme;
        var rtl = theme && theme.rtl !== undefined ? theme.rtl : Object(_rtl__WEBPACK_IMPORTED_MODULE_2__[/* getRTL */ "e"])();
        var disableCaching = options.disableCaching;
        // On reset of our stylesheet, reset memoized cache.
        if (currentMemoizedClassNames !== _memoizedClassNames) {
            currentMemoizedClassNames = _memoizedClassNames;
            map = new Map();
            styleCalcCount = 0;
        }
        if (!options.disableCaching) {
            current = _traverseMap(map, styleFunctionOrObject);
            current = _traverseMap(current, styleProps);
        }
        if (disableCaching || !current[retVal]) {
            if (styleFunctionOrObject === undefined) {
                current[retVal] = {};
            }
            else {
                current[retVal] = Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__[/* mergeCssSets */ "e"])([
                    (typeof styleFunctionOrObject === 'function'
                        ? styleFunctionOrObject(styleProps)
                        : styleFunctionOrObject),
                ], { rtl: !!rtl, specificityMultiplier: options.useStaticStyles ? DEFAULT_SPECIFICITY_MULTIPLIER : undefined });
            }
            if (!disableCaching) {
                styleCalcCount++;
            }
        }
        if (styleCalcCount > (options.cacheSize || MAX_CACHE_COUNT)) {
            var win = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[/* getWindow */ "e"])();
            if ((_a = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _a === void 0 ? void 0 : _a.enableClassNameCacheFullWarning) {
                // eslint-disable-next-line no-console
                console.warn("Styles are being recalculated too frequently. Cache miss rate is ".concat(styleCalcCount, "/").concat(getClassNamesCount, "."));
                // eslint-disable-next-line no-console
                console.trace();
            }
            map.clear();
            styleCalcCount = 0;
            // Mutate the options passed in, that's all we can do.
            options.disableCaching = true;
        }
        // Note: the retVal is an attached property on the Map; not a key in the Map. We use this attached property to
        // cache the return value for this branch of the graph.
        return current[retVal];
    };
    return getClassNames;
}
function _traverseEdge(current, value) {
    value = _normalizeValue(value);
    if (!current.has(value)) {
        current.set(value, new Map());
    }
    return current.get(value);
}
function _traverseMap(current, inputs) {
    if (typeof inputs === 'function') {
        var cachedInputsFromStyled = inputs.__cachedInputs__;
        if (cachedInputsFromStyled) {
            // The styled helper will generate the styles function and will attach the cached
            // inputs (consisting of the default styles, customzied styles, and user provided styles.)
            // These should be used as cache keys for deriving the memoized value.
            for (var _i = 0, _a = inputs.__cachedInputs__; _i < _a.length; _i++) {
                var input = _a[_i];
                current = _traverseEdge(current, input);
            }
        }
        else {
            current = _traverseEdge(current, inputs);
        }
    }
    else if (typeof inputs === 'object') {
        for (var propName in inputs) {
            if (inputs.hasOwnProperty(propName)) {
                current = _traverseEdge(current, inputs[propName]);
            }
        }
    }
    return current;
}
function _normalizeValue(value) {
    switch (value) {
        case undefined:
            return '__undefined__';
        case null:
            return '__null__';
        default:
            return value;
    }
}
//# sourceMappingURL=classNamesFunction.js.map

/***/ }),

/***/ "A214":
/*!********************************************************************!*\
  !*** ./lib/webparts/gestionPersonajes/GestionPersonajesWebPart.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var GestionPersonajesWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! GestionPersonajesWebPartStrings */ "wPXp");
/* harmony import */ var GestionPersonajesWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(GestionPersonajesWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _componentes_GestionPersonajesWebPart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/GestionPersonajesWebPart */ "e5OY");
/* harmony import */ var _pnp_sp_presets_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pnp/sp/presets/all */ "F/m7");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var GestorPersonajesWebPartWebPart = /** @class */ (function (_super) {
    __extends(GestorPersonajesWebPartWebPart, _super);
    function GestorPersonajesWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //private _isDarkTheme: boolean = false;
    //private _environmentMessage: string = '';
    GestorPersonajesWebPartWebPart.prototype.render = function () {
        var webpartProps = {
            SP: this.SP,
            WebPartContext: this.context,
        };
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_componentes_GestionPersonajesWebPart__WEBPACK_IMPORTED_MODULE_6__[/* default */ "e"], webpartProps);
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    GestorPersonajesWebPartWebPart.prototype.onInit = function () {
        this.SP = Object(_pnp_sp_presets_all__WEBPACK_IMPORTED_MODULE_7__[/* spfi */ "n"])().using(Object(_pnp_sp_presets_all__WEBPACK_IMPORTED_MODULE_7__[/* SPFx */ "t"])(this.context));
        return _super.prototype.onInit.call(this);
    };
    GestorPersonajesWebPartWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(GestorPersonajesWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    GestorPersonajesWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: GestionPersonajesWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: GestionPersonajesWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('description', {
                                    label: GestionPersonajesWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return GestorPersonajesWebPartWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (GestorPersonajesWebPartWebPart);


/***/ }),

/***/ "AfLD":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/sputilities/types.js ***!
  \***************************************************/
/*! exports provided: _Utilities, Utilities */
/*! exports used: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Utilities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Utilities; });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/core */ "JC1J");





class _Utilities extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPQueryable */ "r"] {
    constructor(base, methodName = "") {
        super(base);
        this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_4__[/* combine */ "s"])(Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__[/* extractWebUrl */ "e"])(this._url), `_api/SP.Utilities.Utility.${methodName}`);
    }
    excute(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_3__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])(props));
    }
    sendEmail(properties) {
        if (properties.AdditionalHeaders) {
            // we have to remap the additional headers into this format #2253
            properties.AdditionalHeaders = Reflect.ownKeys(properties.AdditionalHeaders).map(key => ({
                Key: key,
                Value: Reflect.get(properties.AdditionalHeaders, key),
                ValueType: "Edm.String",
            }));
        }
        return UtilitiesCloneFactory(this, "SendEmail").excute({ properties });
    }
    getCurrentUserEmailAddresses() {
        return UtilitiesCloneFactory(this, "GetCurrentUserEmailAddresses").excute({});
    }
    resolvePrincipal(input, scopes, sources, inputIsEmailOnly, addToUserInfoList, matchUserInfoList = false) {
        const params = {
            addToUserInfoList,
            input,
            inputIsEmailOnly,
            matchUserInfoList,
            scopes,
            sources,
        };
        return UtilitiesCloneFactory(this, "ResolvePrincipalInCurrentContext").excute(params);
    }
    searchPrincipals(input, scopes, sources, groupName, maxCount) {
        const params = {
            groupName: groupName,
            input: input,
            maxCount: maxCount,
            scopes: scopes,
            sources: sources,
        };
        return UtilitiesCloneFactory(this, "SearchPrincipalsUsingContextWeb").excute(params);
    }
    createEmailBodyForInvitation(pageAddress) {
        const params = {
            pageAddress: pageAddress,
        };
        return UtilitiesCloneFactory(this, "CreateEmailBodyForInvitation").excute(params);
    }
    expandGroupsToPrincipals(inputs, maxCount = 30) {
        const params = {
            inputs: inputs,
            maxCount: maxCount,
        };
        const clone = UtilitiesCloneFactory(this, "ExpandGroupsToPrincipals");
        return clone.excute(params);
    }
}
const Utilities = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Utilities);
const UtilitiesCloneFactory = (base, path) => Utilities(base, path);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "Al5K":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/subscriptions/index.js ***!
  \*****************************************************/
/*! exports provided: Subscription, Subscriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "dRNj");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "N3o1");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Ar68":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/attachments/types.js ***!
  \***************************************************/
/*! exports provided: _Attachments, Attachments, _Attachment, Attachment */
/*! exports used: Attachments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Attachments */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Attachments; });
/* unused harmony export _Attachment */
/* unused harmony export Attachment */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _files_readable_file_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../files/readable-file.js */ "fTfs");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");







let _Attachments = class _Attachments extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_6__[/* _SPCollection */ "a"] {
    /**
    * Gets a Attachment File by filename
    *
    * @param name The name of the file, including extension.
    */
    getByName(name) {
        const f = Attachment(this);
        f.concat(`('${name}')`);
        return f;
    }
    /**
     * Adds a new attachment to the collection. Not supported for batching.
     *
     * @param name The name of the file, including extension.
     * @param content The Base64 file content.
     */
    async add(name, content) {
        const response = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Attachments(this, `add(FileName='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__[/* encodePath */ "e"])(name)}')`), { body: content });
        return {
            data: response,
            file: this.getByName(name),
        };
    }
};
_Attachments = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_2__[/* defaultPath */ "e"])("AttachmentFiles")
], _Attachments);

const Attachments = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_6__[/* spInvokableFactory */ "c"])(_Attachments);
class _Attachment extends _files_readable_file_js__WEBPACK_IMPORTED_MODULE_3__[/* ReadableFile */ "e"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_6__[/* deleteableWithETag */ "s"])();
    }
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    async setContent(body) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Attachment(this, "$value"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* headers */ "v"])({ "X-HTTP-Method": "PUT" }, { body }));
        return this;
    }
    /**
     * Delete this attachment file and send it to recycle bin
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    recycle(eTag = "*") {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Attachment(this, "recycleObject"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* headers */ "v"])({
            "IF-Match": eTag,
            "X-HTTP-Method": "DELETE",
        }));
    }
}
const Attachment = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_6__[/* spInvokableFactory */ "c"])(_Attachment);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "ArVI":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/appcatalog/types.js ***!
  \**************************************************/
/*! exports provided: _AppCatalog, AppCatalog, _App, App */
/*! exports used: AppCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _AppCatalog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AppCatalog; });
/* unused harmony export _App */
/* unused harmony export App */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _files_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../files/types.js */ "qfcF");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../decorators.js */ "hMpi");








function getAppCatalogPath(base, path) {
    const paths = ["_api/web/tenantappcatalog/", "_api/web/sitecollectionappcatalog/"];
    for (let i = 0; i < paths.length; i++) {
        const index = base.indexOf(paths[i]);
        if (index > -1) {
            return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_6__[/* combine */ "s"])(base.substring(index, index + paths[i].length), path);
        }
    }
    return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_6__[/* combine */ "s"])(base, path);
}
let _AppCatalog = class _AppCatalog extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    constructor(base, path) {
        super(base, null);
        this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_6__[/* combine */ "s"])(Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_4__[/* extractWebUrl */ "e"])(this._url), path);
    }
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    getAppById(id) {
        return App(this, `getById('${id}')`);
    }
    /**
     * Synchronize a solution to the Microsoft Teams App Catalog
     * @param id - Specify the guid of the app
     * @param useSharePointItemId (optional) - By default this REST call requires the SP Item id of the app, not the app id.
     *                            PnPjs will try to fetch the item id, you can still use this parameter to pass your own item id in the first parameter
     */
    async syncSolutionToTeams(id, useSharePointItemId = false) {
        // This REST call requires that you refer the list item id of the solution in the app catalog site.
        let appId = null;
        const webUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_6__[/* combine */ "s"])(Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_4__[/* extractWebUrl */ "e"])(this.toUrl()), "_api/web");
        if (useSharePointItemId) {
            appId = id;
        }
        else {
            const listId = (await Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPCollection */ "e"])([this, webUrl], "lists").select("Id").filter("EntityTypeName eq 'AppCatalog'")())[0].Id;
            const listItems = await Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPCollection */ "e"])([this, webUrl], `lists/getById('${listId}')/items`).select("Id").filter(`AppProductID eq '${id}'`).top(1)();
            if (listItems && listItems.length > 0) {
                appId = listItems[0].Id;
            }
            else {
                throw Error(`Did not find the app with id ${id} in the appcatalog.`);
            }
        }
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(AppCatalog(this, getAppCatalogPath(this.toUrl(), `SyncSolutionToTeams(id=${appId})`)));
    }
    /**
     * Uploads an app package. Not supported for batching
     *
     * @param filename Filename to create.
     * @param content app package data (eg: the .app or .sppkg file).
     * @param shouldOverWrite Should an app with the same name in the same location be overwritten? (default: true)
     * @returns Promise<IAppAddResult>
     */
    async add(filename, content, shouldOverWrite = true) {
        // you don't add to the availableapps collection
        const adder = AppCatalog(this, getAppCatalogPath(this.toUrl(), `add(overwrite=${shouldOverWrite},url='${filename}')`));
        const r = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(adder, {
            body: content, headers: {
                "binaryStringRequestBody": "true",
            },
        });
        return {
            data: r,
            file: Object(_files_types_js__WEBPACK_IMPORTED_MODULE_5__[/* File */ "e"])([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__[/* odataUrlFrom */ "e"])(r)]),
        };
    }
};
_AppCatalog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_7__[/* defaultPath */ "e"])("_api/web/tenantappcatalog/AvailableApps")
], _AppCatalog);

const AppCatalog = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_AppCatalog);
class _App extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    /**
     * This method deploys an app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     *
     * @param skipFeatureDeployment Deploy the app to the entire tenant
     */
    deploy(skipFeatureDeployment = false) {
        return this.do(`Deploy(${skipFeatureDeployment})`);
    }
    /**
     * This method retracts a deployed app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    retract() {
        return this.do("Retract");
    }
    /**
     * This method allows an app which is already deployed to be installed on a web
     */
    install() {
        return this.do("Install");
    }
    /**
     * This method allows an app which is already installed to be uninstalled on a web
     * Note: when you use the REST API to uninstall a solution package from the site, it is not relocated to the recycle bin
     */
    uninstall() {
        return this.do("Uninstall");
    }
    /**
     * This method allows an app which is already installed to be upgraded on a web
     */
    upgrade() {
        return this.do("Upgrade");
    }
    /**
     * This method removes an app from the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    remove() {
        return this.do("Remove");
    }
    do(path) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(App(this, path));
    }
}
const App = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_App);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "At/s":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/sharing/funcs.js ***!
  \***********************************************/
/*! exports provided: shareObject, getShareLink, checkPermissions, getSharingInformation, getObjectSharingSettings, unshareObject, deleteLinkByKind, unshareLink, shareWith */
/*! exports used: checkPermissions, deleteLinkByKind, getObjectSharingSettings, getShareLink, getSharingInformation, shareObject, shareWith, unshareLink, unshareObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return shareObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getShareLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return checkPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSharingInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getObjectSharingSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unshareObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return deleteLinkByKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return unshareLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return shareWith; });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types.js */ "AvPO");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _security_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../security/types.js */ "1dmT");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types.js */ "tCQJ");









/**
 * Shares an object based on the supplied options
 *
 * @param options The set of options to send to the ShareObject method
 * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
 */
async function shareObject(o, options, bypass = false) {
    if (bypass) {
        // if the bypass flag is set send the supplied parameters directly to the service
        return sendShareObjectRequest(o, options);
    }
    // extend our options with some defaults
    options = {
        group: null,
        includeAnonymousLinkInEmail: false,
        propagateAcl: false,
        useSimplifiedRoles: true,
        ...options,
    };
    const roleValue = await getRoleValue.apply(o, [options.role, options.group]);
    // handle the multiple input types
    if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "m"])(options.loginNames)) {
        options.loginNames = [options.loginNames];
    }
    const userStr = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* jsS */ "b"])(options.loginNames.map(Key => ({ Key })));
    let postBody = {
        peoplePickerInput: userStr,
        roleValue: roleValue,
        url: options.url,
    };
    if (options.emailData !== undefined && options.emailData !== null) {
        postBody = {
            emailBody: options.emailData.body,
            emailSubject: options.emailData.subject !== undefined ? options.emailData.subject : "Shared with you.",
            sendEmail: true,
            ...postBody,
        };
    }
    return sendShareObjectRequest(o, postBody);
}
/**
 * Gets a sharing link for the supplied
 *
 * @param kind The kind of link to share
 * @param expiration The optional expiration for this link
 */
function getShareLink(kind, expiration = null) {
    // date needs to be an ISO string or null
    const expString = expiration !== null ? expiration.toISOString() : null;
    // clone using the factory and send the request
    const o = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])(this, "shareLink");
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(o, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({
        request: {
            createLink: true,
            emailData: null,
            settings: {
                expiration: expString,
                linkKind: kind,
            },
        },
    }));
}
/**
 * Checks Permissions on the list of Users and returns back role the users have on the Item.
 *
 * @param recipients The array of Entities for which Permissions need to be checked.
 */
function checkPermissions(recipients) {
    const o = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])(this, "checkPermissions");
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(o, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({ recipients }));
}
/**
 * Get Sharing Information.
 *
 * @param request The SharingInformationRequest Object.
 * @param expands Expand more fields.
 *
 */
function getSharingInformation(request = null, expands = [], selects = ["*"]) {
    const o = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])(this, "getSharingInformation");
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(o.select(...selects).expand(...expands), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({ request }));
}
/**
 * Gets the sharing settings of an item.
 *
 * @param useSimplifiedRoles Determines whether to use simplified roles.
 */
function getObjectSharingSettings(useSimplifiedRoles = true) {
    const o = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])(this, "getObjectSharingSettings");
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(o, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({ useSimplifiedRoles }));
}
/**
 * Unshares this object
 */
function unshareObject() {
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])(this, "unshareObject"));
}
/**
 * Deletes a link by type
 *
 * @param kind Deletes a sharing link by the kind of link
 */
function deleteLinkByKind(linkKind) {
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])(this, "deleteLinkByKind"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({ linkKind }));
}
/**
 * Removes the specified link to the item.
 *
 * @param kind The kind of link to be deleted.
 * @param shareId
 */
function unshareLink(linkKind, shareId = _types_js__WEBPACK_IMPORTED_MODULE_8__[/* emptyGuid */ "e"]) {
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])(this, "unshareLink"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({ linkKind, shareId }));
}
/**
 * Shares this instance with the supplied users
 *
 * @param loginNames Resolved login names to share
 * @param role The role
 * @param requireSignin True to require the user is authenticated, otherwise false
 * @param propagateAcl True to apply this share to all children
 * @param emailData If supplied an email will be sent with the indicated properties
 */
async function shareWith(o, loginNames, role, requireSignin = false, propagateAcl = false, emailData) {
    // handle the multiple input types
    if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "m"])(loginNames)) {
        loginNames = [loginNames];
    }
    const userStr = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* jsS */ "b"])(loginNames.map(login => {
        return { Key: login };
    }));
    const roleFilter = role === _types_js__WEBPACK_IMPORTED_MODULE_5__[/* SharingRole */ "t"].Edit ? _types_js__WEBPACK_IMPORTED_MODULE_5__[/* RoleType */ "e"].Contributor : _types_js__WEBPACK_IMPORTED_MODULE_5__[/* RoleType */ "e"].Reader;
    // start by looking up the role definition id we need to set the roleValue
    const def = await Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPCollection */ "e"])([o, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__[/* extractWebUrl */ "e"])(o.toUrl())], "_api/web/roledefinitions").select("Id").filter(`RoleTypeKind eq ${roleFilter}`)();
    if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "m"])(def) || def.length < 1) {
        throw Error(`Could not locate a role defintion with RoleTypeKind ${roleFilter}`);
    }
    let postBody = {
        includeAnonymousLinkInEmail: requireSignin,
        peoplePickerInput: userStr,
        propagateAcl: propagateAcl,
        roleValue: `role:${def[0].Id}`,
        useSimplifiedRoles: true,
    };
    if (emailData !== undefined) {
        postBody = {
            ...postBody,
            emailBody: emailData.body,
            emailSubject: emailData.subject !== undefined ? emailData.subject : "",
            sendEmail: true,
        };
    }
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])(o, "shareObject"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])(postBody));
}
async function sendShareObjectRequest(o, options) {
    const w = Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_4__[/* Web */ "e"])([o, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__[/* extractWebUrl */ "e"])(o.toUrl())], "/_api/SP.Web.ShareObject");
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(w.expand("UsersWithAccessRequests", "GroupsSharedWith"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])(options));
}
/**
 * Calculates the roleValue string used in the sharing query
 *
 * @param role The Sharing Role
 * @param group The Group type
 */
async function getRoleValue(role, group) {
    // we will give group precedence, because we had to make a choice
    if (group !== undefined && group !== null) {
        switch (group) {
            case _types_js__WEBPACK_IMPORTED_MODULE_5__[/* RoleType */ "e"].Contributor: {
                const g1 = await Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_4__[/* Web */ "e"])([this, "_api/web"], "associatedmembergroup").select("Id")();
                return `group: ${g1.Id}`;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_5__[/* RoleType */ "e"].Reader:
            case _types_js__WEBPACK_IMPORTED_MODULE_5__[/* RoleType */ "e"].Guest: {
                const g2 = await Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_4__[/* Web */ "e"])([this, "_api/web"], "associatedvisitorgroup").select("Id")();
                return `group: ${g2.Id}`;
            }
            default:
                throw Error("Could not determine role value for supplied value. Contributor, Reader, and Guest are supported");
        }
    }
    else {
        const roleFilter = role === _types_js__WEBPACK_IMPORTED_MODULE_5__[/* SharingRole */ "t"].Edit ? _types_js__WEBPACK_IMPORTED_MODULE_5__[/* RoleType */ "e"].Contributor : _types_js__WEBPACK_IMPORTED_MODULE_5__[/* RoleType */ "e"].Reader;
        const def = await Object(_security_types_js__WEBPACK_IMPORTED_MODULE_7__[/* RoleDefinitions */ "n"])([this, "_api/web"]).select("Id").top(1).filter(`RoleTypeKind eq ${roleFilter}`)();
        if (def === undefined || (def === null || def === void 0 ? void 0 : def.length) < 1) {
            throw Error("Could not locate associated role definition for supplied role. Edit and View are supported");
        }
        return `role: ${def[0].Id}`;
    }
}
//# sourceMappingURL=funcs.js.map

/***/ }),

/***/ "AvPO":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/sharing/types.js ***!
  \***********************************************/
/*! exports provided: SharingRole, SPSharedObjectType, SharingDomainRestrictionMode, SharingOperationStatusCode, SharingLinkKind, RoleType */
/*! exports used: RoleType, SharingRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SharingRole; });
/* unused harmony export SPSharedObjectType */
/* unused harmony export SharingDomainRestrictionMode */
/* unused harmony export SharingOperationStatusCode */
/* unused harmony export SharingLinkKind */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RoleType; });
/**
 * Indicates the role of the sharing link
 */
var SharingRole;
(function (SharingRole) {
    SharingRole[SharingRole["None"] = 0] = "None";
    SharingRole[SharingRole["View"] = 1] = "View";
    SharingRole[SharingRole["Edit"] = 2] = "Edit";
    SharingRole[SharingRole["Owner"] = 3] = "Owner";
})(SharingRole || (SharingRole = {}));
var SPSharedObjectType;
(function (SPSharedObjectType) {
    SPSharedObjectType[SPSharedObjectType["Unknown"] = 0] = "Unknown";
    SPSharedObjectType[SPSharedObjectType["File"] = 1] = "File";
    SPSharedObjectType[SPSharedObjectType["Folder"] = 2] = "Folder";
    SPSharedObjectType[SPSharedObjectType["Item"] = 3] = "Item";
    SPSharedObjectType[SPSharedObjectType["List"] = 4] = "List";
    SPSharedObjectType[SPSharedObjectType["Web"] = 5] = "Web";
    SPSharedObjectType[SPSharedObjectType["Max"] = 6] = "Max";
})(SPSharedObjectType || (SPSharedObjectType = {}));
var SharingDomainRestrictionMode;
(function (SharingDomainRestrictionMode) {
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["None"] = 0] = "None";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["AllowList"] = 1] = "AllowList";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["BlockList"] = 2] = "BlockList";
})(SharingDomainRestrictionMode || (SharingDomainRestrictionMode = {}));
var SharingOperationStatusCode;
(function (SharingOperationStatusCode) {
    /**
     * The share operation completed without errors.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CompletedSuccessfully"] = 0] = "CompletedSuccessfully";
    /**
     * The share operation completed and generated requests for access.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessRequestsQueued"] = 1] = "AccessRequestsQueued";
    /**
     * The share operation failed as there were no resolved users.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NoResolvedUsers"] = -1] = "NoResolvedUsers";
    /**
     * The share operation failed due to insufficient permissions.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessDenied"] = -2] = "AccessDenied";
    /**
     * The share operation failed when attempting a cross site share, which is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CrossSiteRequestNotSupported"] = -3] = "CrossSiteRequestNotSupported";
    /**
     * The sharing operation failed due to an unknown error.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["UnknowError"] = -4] = "UnknowError";
    /**
     * The text you typed is too long. Please shorten it.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["EmailBodyTooLong"] = -5] = "EmailBodyTooLong";
    /**
     * The maximum number of unique scopes in the list has been exceeded.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ListUniqueScopesExceeded"] = -6] = "ListUniqueScopesExceeded";
    /**
     * The share operation failed because a sharing capability is disabled in the site.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CapabilityDisabled"] = -7] = "CapabilityDisabled";
    /**
     * The specified object for the share operation is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ObjectNotSupported"] = -8] = "ObjectNotSupported";
    /**
     * A SharePoint group cannot contain another SharePoint group.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NestedGroupsNotSupported"] = -9] = "NestedGroupsNotSupported";
})(SharingOperationStatusCode || (SharingOperationStatusCode = {}));
var SharingLinkKind;
(function (SharingLinkKind) {
    /**
     * Uninitialized link
     */
    SharingLinkKind[SharingLinkKind["Uninitialized"] = 0] = "Uninitialized";
    /**
     * Direct link to the object being shared
     */
    SharingLinkKind[SharingLinkKind["Direct"] = 1] = "Direct";
    /**
     * Organization-shareable link to the object being shared with view permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationView"] = 2] = "OrganizationView";
    /**
     * Organization-shareable link to the object being shared with edit permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationEdit"] = 3] = "OrganizationEdit";
    /**
     * View only anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousView"] = 4] = "AnonymousView";
    /**
     * Read/Write anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousEdit"] = 5] = "AnonymousEdit";
    /**
     * Flexible sharing Link where properties can change without affecting link URL
     */
    SharingLinkKind[SharingLinkKind["Flexible"] = 6] = "Flexible";
})(SharingLinkKind || (SharingLinkKind = {}));
var RoleType;
(function (RoleType) {
    RoleType[RoleType["None"] = 0] = "None";
    RoleType[RoleType["Guest"] = 1] = "Guest";
    RoleType[RoleType["Reader"] = 2] = "Reader";
    RoleType[RoleType["Contributor"] = 3] = "Contributor";
    RoleType[RoleType["WebDesigner"] = 4] = "WebDesigner";
    RoleType[RoleType["Administrator"] = 5] = "Administrator";
})(RoleType || (RoleType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "BK4w":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/navigation/types.js ***!
  \**************************************************/
/*! exports provided: _NavigationNodes, NavigationNodes, _NavigationNode, NavigationNode, _Navigation, Navigation, _NavigationService, NavigationService */
/*! exports used: Navigation, NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _NavigationNodes */
/* unused harmony export NavigationNodes */
/* unused harmony export _NavigationNode */
/* unused harmony export NavigationNode */
/* unused harmony export _Navigation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Navigation; });
/* unused harmony export _NavigationService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index.js */ "UKGb");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pnp/core */ "JC1J");







/**
 * Represents a collection of navigation nodes
 *
 */
class _NavigationNodes extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    /**
     * Gets a navigation node by id
     *
     * @param id The id of the node
     */
    getById(id) {
        return NavigationNode(this).concat(`(${id})`);
    }
    /**
     * Adds a new node to the collection
     *
     * @param title Display name of the node
     * @param url The url of the node
     * @param visible If true the node is visible, otherwise it is hidden (default: true)
     */
    async add(title, url, visible = true) {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({
            IsVisible: visible,
            Title: title,
            Url: url,
        });
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(NavigationNodes(this, null), postBody);
        return {
            data,
            node: this.getById(data.Id),
        };
    }
    /**
     * Moves a node to be after another node in the navigation
     *
     * @param nodeId Id of the node to move
     * @param previousNodeId Id of the node after which we move the node specified by nodeId
     */
    moveAfter(nodeId, previousNodeId) {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({
            nodeId: nodeId,
            previousNodeId: previousNodeId,
        });
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(NavigationNodes(this, "MoveAfter"), postBody);
    }
}
const NavigationNodes = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_NavigationNodes);
/**
 * Represents an instance of a navigation node
 *
 */
class _NavigationNode extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* deleteable */ "o"])();
    }
    /**
     * Represents the child nodes of this node
     */
    get children() {
        return NavigationNodes(this, "children");
    }
    /**
     * Updates this node
     *
     * @param properties Properties used to update this node
     */
    async update(properties) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(properties));
        return {
            data,
            node: this,
        };
    }
}
const NavigationNode = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_NavigationNode);
/**
 * Exposes the navigation components
 *
 */
let _Navigation = class _Navigation extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPQueryable */ "r"] {
    /**
     * Gets the quicklaunch navigation nodes for the current context
     *
     */
    get quicklaunch() {
        return NavigationNodes(this, "quicklaunch");
    }
    /**
     * Gets the top bar navigation nodes for the current context
     *
     */
    get topNavigationBar() {
        return NavigationNodes(this, "topnavigationbar");
    }
};
_Navigation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("navigation")
], _Navigation);

const Navigation = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Navigation);
/**
 * Represents the top level navigation service
 */
class _NavigationService extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPQueryable */ "r"] {
    constructor(base = null, path) {
        super(base, path);
        this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_6__[/* combine */ "s"])(Object(_index_js__WEBPACK_IMPORTED_MODULE_5__[/* extractWebUrl */ "n"])(this._url), "_api/navigation", path);
    }
    /**
     * The MenuState service operation returns a Menu-State (dump) of a SiteMapProvider on a site.
     *
     * @param menuNodeKey MenuNode.Key of the start node within the SiteMapProvider If no key is provided the SiteMapProvider.RootNode will be the root of the menu state.
     * @param depth Depth of the dump. If no value is provided a dump with the depth of 10 is returned
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     * @param customProperties comma seperated list of custom properties to be returned.
     */
    getMenuState(menuNodeKey = null, depth = 10, mapProviderName = null, customProperties = null) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(NavigationService(this, "MenuState"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({
            customProperties,
            depth,
            mapProviderName,
            menuNodeKey,
        }));
    }
    /**
     * Tries to get a SiteMapNode.Key for a given URL within a site collection.
     *
     * @param currentUrl A url representing the SiteMapNode
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     */
    getMenuNodeKey(currentUrl, mapProviderName = null) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(NavigationService(this, "MenuNodeKey"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({
            currentUrl,
            mapProviderName,
        }));
    }
}
const NavigationService = (base, path) => new _NavigationService(base, path);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "Bo8X":
/*!*****************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/rtl.js ***!
  \*****************************************************/
/*! exports provided: getRTL, setRTL, getRTLSafeKeyCode */
/*! exports used: getRTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRTL; });
/* unused harmony export setRTL */
/* unused harmony export getRTLSafeKeyCode */
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyCodes */ "ePGq");
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/getDocument */ "Ekzi");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionStorage */ "mRvw");
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/merge-styles */ "Z+an");




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL(theme) {
    if (theme === void 0) { theme = {}; }
    if (theme.rtl !== undefined) {
        return theme.rtl;
    }
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__[/* getItem */ "e"])(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__[/* getDocument */ "e"])();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__[/* setRTL */ "t"])(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__[/* getDocument */ "e"])();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__[/* setItem */ "t"])(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__[/* setRTL */ "t"])(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key, theme) {
    if (theme === void 0) { theme = {}; }
    if (getRTL(theme)) {
        if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "e"].left) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "e"].right;
        }
        else if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "e"].right) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__[/* KeyCodes */ "e"].left;
        }
    }
    return key;
}
//# sourceMappingURL=rtl.js.map

/***/ }),

/***/ "Bwa7":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/lists/web.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "hy0S");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");






Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "lists", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Lists */ "t"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "siteUserInfoList", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* List */ "e"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "defaultDocumentLibrary", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* List */ "e"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "customListTemplates", _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__[/* SPCollection */ "e"], "getcustomlisttemplates");
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getList = function (listRelativeUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* List */ "e"])(this, `getList('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__[/* encodePath */ "e"])(listRelativeUrl)}')`);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getCatalog = async function (type) {
    const data = await Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Web */ "e"])(this, `getcatalog(${type})`).select("Id")();
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* List */ "e"])([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__[/* odataUrlFrom */ "e"])(data)]);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "CKSE":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/features/web.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "HHhI");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "features", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Features */ "e"]);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "CWBB":
/*!*************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/fontFace.js ***!
  \*************************************************************/
/*! exports provided: fontFace */
/*! exports used: fontFace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fontFace; });
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleOptionsState */ "Z+an");
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stylesheet */ "psVN");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleToClassName */ "qQFQ");



/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__[/* Stylesheet */ "e"].getInstance();
    var rule = Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__[/* serializeRuleEntries */ "t"])(Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__[/* getStyleOptions */ "e"])(), font);
    var className = stylesheet.classNameFromKey(rule);
    if (className) {
        return;
    }
    var name = stylesheet.getClassName();
    stylesheet.insertRule("@font-face{".concat(rule, "}"), true);
    stylesheet.cacheClassName(name, rule, [], ['font-face', rule]);
}
//# sourceMappingURL=fontFace.js.map

/***/ }),

/***/ "CZZX":
/*!****************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/tokenizeWithParentheses.js ***!
  \****************************************************************************/
/*! exports provided: tokenizeWithParentheses */
/*! exports used: tokenizeWithParentheses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tokenizeWithParentheses; });
/**
 * Split a string into tokens separated by whitespace, except all text within parentheses
 * is treated as a single token (whitespace is ignored within parentheses).
 *
 * Unlike String.split(' '), multiple consecutive space characters are collapsed and
 * removed from the returned array (including leading and trailing spaces).
 *
 * For example:
 * `tokenizeWithParentheses("3px calc(var(--x) / 2) 9px    0 ")`
 *   => `["3px", "calc(var(--x) / 2)", "9px", "0"]`
 *
 * @returns The array of tokens. Returns an empty array if the string was empty or contained only whitespace.
 */
function tokenizeWithParentheses(value) {
    var parts = [];
    var partStart = 0;
    var parens = 0;
    for (var i = 0; i < value.length; i++) {
        switch (value[i]) {
            case '(':
                parens++;
                break;
            case ')':
                if (parens) {
                    parens--;
                }
                break;
            case '\t':
            case ' ':
                if (!parens) {
                    // Add the new part if it's not an empty string
                    if (i > partStart) {
                        parts.push(value.substring(partStart, i));
                    }
                    partStart = i + 1;
                }
                break;
        }
    }
    // Add the last part
    if (partStart < value.length) {
        parts.push(value.substring(partStart));
    }
    return parts;
}
//# sourceMappingURL=tokenizeWithParentheses.js.map

/***/ }),

/***/ "CbhW":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/features/index.js ***!
  \************************************************/
/*! exports provided: Feature, Features */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site.js */ "Zlzk");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web.js */ "CKSE");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "HHhI");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Cx0t":
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/DelayedRender.js ***!
  \***************************************************************/
/*! exports provided: DelayedRender */
/*! exports used: DelayedRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DelayedRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getWindow */ "pyJV");



/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */
var DelayedRender = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "t"])(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__[/* getWindow */ "e"])() === undefined,
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        // eslint-disable-next-line no-restricted-globals
        this._timeoutId = window.setTimeout(function () {
            _this.setState({
                isRendered: true,
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0,
    };
    return DelayedRender;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DelayedRender.js.map

/***/ }),

/***/ "CxyI":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/sp/favorites/types.js ***!
  \*************************************************/
/*! exports provided: _Favorites, Favorites, _FollowedSites, FollowedSites, _FollowedListItems, FollowedListItems */
/*! exports used: Favorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Favorites */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Favorites; });
/* unused harmony export _FollowedSites */
/* unused harmony export FollowedSites */
/* unused harmony export _FollowedListItems */
/* unused harmony export FollowedListItems */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");






let _Favorites = class _Favorites extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
    get followedSites() {
        return FollowedSites(this);
    }
    get followedListItems() {
        return FollowedListItems(this);
    }
};
_Favorites = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_1__[/* defaultPath */ "e"])("_api/v2.1/favorites")
], _Favorites);

const Favorites = (baseUrl) => new _Favorites(baseUrl);
let _FollowedSites = class _FollowedSites extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
    * Adds a site to user's followed sites
    *
    * @param tenantUrl Name of a tenant (e.g. yourtenant.sharepoint.com).
    * @param siteId Id of a site collection.
    * @param webId Id of a site.
    * @param webUrl Absolute URL of a site.
    */
    async add(tenantUrl, siteId, webId, webUrl) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(FollowedListItems(this, "oneDrive.add"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            value: [
                {
                    id: [tenantUrl, webId, siteId].join(","),
                    webUrl: webUrl,
                },
            ],
        }));
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* hOP */ "p"])(data, "value") ? data.value : data;
    }
    /**
    * Removes a site from user's followed sites
    *
    * @param tenantUrl Name of a tenant (e.g. yourtenant.sharepoint.com).
    * @param siteId Id of a site collection.
    * @param webId Id of a site.
    * @param webUrl Absolute URL of a site.
    */
    async remove(tenantUrl, siteId, webId, webUrl) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(FollowedListItems(this, "oneDrive.remove"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            value: [
                {
                    id: [tenantUrl, webId, siteId].join(","),
                    webUrl: webUrl,
                },
            ],
        }));
    }
};
_FollowedSites = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_1__[/* defaultPath */ "e"])("followedSites")
], _FollowedSites);

const FollowedSites = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_FollowedSites);
let _FollowedListItems = class _FollowedListItems extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
    * Adds an item to user's _saved for later_ list
    *
    * @param siteId Id of a site collection of an item to add
    * @param webId Id of a site of an item to add
    * @param listId Id of a list of an item to add
    * @param listItemUniqueId Unique id of an item to add
    */
    async add(siteId, webId, listId, listItemUniqueId) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(FollowedListItems(this, "oneDrive.add"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            value: [
                {
                    siteId: siteId,
                    webId: webId,
                    listId: listId,
                    listItemUniqueId: listItemUniqueId,
                },
            ],
        }));
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* hOP */ "p"])(data, "value") ? data.value : data;
    }
    /**
    * Removes an item from user's _saved for later_ list
    *
    * @param siteId Id of a site collection of an item to remove
    * @param webId Id of a site of an item to remove
    * @param listId Id of a list of an item to remove
    * @param listItemUniqueId Unique id of an item to remove
    */
    async remove(siteId, webId, listId, listItemUniqueId) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(FollowedListItems(this, "oneDrive.remove"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            value: [
                {
                    siteId: siteId,
                    webId: webId,
                    listId: listId,
                    listItemUniqueId: listItemUniqueId,
                },
            ],
        }));
    }
};
_FollowedListItems = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_1__[/* defaultPath */ "e"])("followedListItems")
], _FollowedListItems);

const FollowedListItems = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_FollowedListItems);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "D2kI":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/search/index.js ***!
  \**********************************************/
/*! exports provided: SortDirection, ReorderingRuleMatchType, QueryPropertyValueType, SearchBuiltInSourceId, SearchQueryBuilder, SearchResults, Search, Suggest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query.js */ "MkPD");
/* harmony import */ var _suggest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suggest.js */ "fB9m");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "YpSs");
/* unused harmony reexport * */






_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype.search = function (query) {
    return (new _query_js__WEBPACK_IMPORTED_MODULE_1__[/* _Search */ "e"](this._root)).run(query);
};
_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype.searchSuggest = function (query) {
    return (new _suggest_js__WEBPACK_IMPORTED_MODULE_2__[/* _Suggest */ "e"](this._root)).run(typeof query === "string" ? { querytext: query } : query);
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "D9iZ":
/*!************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/properties.js ***!
  \************************************************************/
/*! exports provided: baseElementEvents, baseElementProperties, htmlElementProperties, labelProperties, audioProperties, videoProperties, olProperties, liProperties, anchorProperties, buttonProperties, inputProperties, textAreaProperties, selectProperties, optionProperties, tableProperties, trProperties, thProperties, tdProperties, colGroupProperties, colProperties, formProperties, iframeProperties, imgProperties, imageProperties, divProperties, getNativeProps */
/*! exports used: divProperties, getNativeProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export baseElementEvents */
/* unused harmony export baseElementProperties */
/* unused harmony export htmlElementProperties */
/* unused harmony export labelProperties */
/* unused harmony export audioProperties */
/* unused harmony export videoProperties */
/* unused harmony export olProperties */
/* unused harmony export liProperties */
/* unused harmony export anchorProperties */
/* unused harmony export buttonProperties */
/* unused harmony export inputProperties */
/* unused harmony export textAreaProperties */
/* unused harmony export selectProperties */
/* unused harmony export optionProperties */
/* unused harmony export tableProperties */
/* unused harmony export trProperties */
/* unused harmony export thProperties */
/* unused harmony export tdProperties */
/* unused harmony export colGroupProperties */
/* unused harmony export colProperties */
/* unused harmony export formProperties */
/* unused harmony export iframeProperties */
/* unused harmony export imgProperties */
/* unused harmony export imageProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return divProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getNativeProps; });
var toObjectMap = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var keys = Array.isArray(item) ? item : Object.keys(item);
        for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
            var key = keys_1[_b];
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = toObjectMap([
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture',
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name', // global
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
var labelProperties = toObjectMap(htmlElementProperties, [
    'form', // button, fieldset, input, label, meter, object, output, select, textarea
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */
var audioProperties = toObjectMap(htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
var videoProperties = toObjectMap(audioProperties, [
    'poster', // video
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */
var olProperties = toObjectMap(htmlElementProperties, [
    'start', // ol
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */
var liProperties = toObjectMap(htmlElementProperties, [
    'value', // button, input, li, option, meter, progress, param
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = toObjectMap(htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type', // a, button, input, link, menu, object, script, source, style
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = toObjectMap(htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value', // button, input, li, option, meter, progress, param,
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = toObjectMap(buttonProperties, [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'minLength',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = toObjectMap(buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'minLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap', // textarea
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
var selectProperties = toObjectMap(buttonProperties, [
    'form',
    'multiple',
    'required', // input, select, textarea
]);
var optionProperties = toObjectMap(htmlElementProperties, [
    'selected',
    'value', // button, input, li, option, meter, progress, param
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
var tableProperties = toObjectMap(htmlElementProperties, [
    'cellPadding',
    'cellSpacing', // table
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */
var trProperties = htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */
var thProperties = toObjectMap(htmlElementProperties, [
    'rowSpan',
    'scope', // th
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */
var tdProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope', // th
]);
var colGroupProperties = toObjectMap(htmlElementProperties, [
    'span', // col, colgroup
]);
var colProperties = toObjectMap(htmlElementProperties, [
    'span', // col, colgroup
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
var formProperties = toObjectMap(htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target', // form
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
var iframeProperties = toObjectMap(htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width', // canvas, embed, iframe, img, input, object, video,
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imgProperties = toObjectMap(htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * @deprecated Use imgProperties for img elements.
 */
var imageProperties = imgProperties;
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames - The array or record of allowed prop names.
 * @returns The filtered props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    var isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var keys = Object.keys(props);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var isNativeProp = (!isArray && allowedPropNames[key]) ||
            (isArray && allowedPropNames.indexOf(key) >= 0) ||
            key.indexOf('data-') === 0 ||
            key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}
//# sourceMappingURL=properties.js.map

/***/ }),

/***/ "DL6e":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/sp/regional-settings/field.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fields_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fields/types.js */ "KYlJ");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcs.js */ "T2j4");


_fields_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Field */ "t"].prototype.titleResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_1__[/* getValueForUICultureBinder */ "e"])("titleResource");
_fields_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Field */ "t"].prototype.descriptionResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_1__[/* getValueForUICultureBinder */ "e"])("descriptionResource");
//# sourceMappingURL=field.js.map

/***/ }),

/***/ "DZog":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/moments.js ***!
  \*******************************************/
/*! exports provided: broadcast, asyncBroadcast, reduce, asyncReduce, request, lifecycle */
/*! exports used: asyncBroadcast, asyncReduce, broadcast, lifecycle, reduce, request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return broadcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return asyncBroadcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return asyncReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lifecycle; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "NuLX");

/**
 * Emits to all registered observers the supplied arguments. Any values returned by the observers are ignored
 *
 * @returns void
 */
function broadcast() {
    return function (observers, ...args) {
        const obs = [...observers];
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
    };
}
/**
 * Defines a moment that executes each observer asynchronously in parallel awaiting all promises to resolve or reject before continuing
 *
 * @returns The final set of arguments
 */
function asyncBroadcast() {
    return async function (observers, ...args) {
        // get our initial values
        const r = args;
        const obs = [...observers];
        const promises = [];
        for (let i = 0; i < obs.length; i++) {
            promises.push(Reflect.apply(obs[i], this, r));
        }
        return Promise.all(promises);
    };
}
/**
 * Defines a moment that executes each observer synchronously, passing the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function reduce() {
    return function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((params, func) => Reflect.apply(func, this, params), args);
    };
}
/**
 * Defines a moment that executes each observer asynchronously, awaiting the result and passes the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function asyncReduce() {
    return async function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((prom, func) => prom.then((params) => Reflect.apply(func, this, params)), Promise.resolve(args));
    };
}
/**
 * Defines a moment where the first registered observer is used to asynchronously execute a request, returning a single result
 * If no result is returned (undefined) no further action is taken and the result will be undefined (i.e. additional observers are not used)
 *
 * @returns The result returned by the first registered observer
 */
function request() {
    return async function (observers, ...args) {
        if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "o"])(observers) || observers.length < 1) {
            return undefined;
        }
        const handler = observers[0];
        return Reflect.apply(handler, this, args);
    };
}
/**
 * Defines a special moment used to configure the timeline itself before starting. Each observer is executed in order,
 * possibly modifying the "this" instance, with the final product returned
 *
 */
function lifecycle() {
    return function (observers, ...args) {
        const obs = [...observers];
        // process each handler which updates our instance in order
        // very similar to asyncReduce but the state is the object itself
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
        return this;
    };
}
//# sourceMappingURL=moments.js.map

/***/ }),

/***/ "Dfs8":
/*!*************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/index.js ***!
  \*************************************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames, AnimationStyles, AnimationVariables, DefaultPalette, DefaultEffects, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, getFocusOutlineStyle, getInputFocusStyle, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, getThemedContext, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, EdgeChromiumHighContrastSelector, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, getHighContrastNoAdjustStyle, getEdgeChromiumNoHighContrastAdjustSelector, normalize, noWrap, getFadedOverflowStyle, getPlaceholderStyles, ZIndexes, buildClassMap, getIcon, registerIcons, registerIconAlias, unregisterIcons, setIconOptions, getIconClassName, InjectionMode, Stylesheet, concatStyleSets, concatStyleSetsWithProps, fontFace, keyframes, mergeStyleSets, mergeStyles, FLUENT_CDN_BASE_URL */
/*! exports used: HighContrastSelector, getGlobalClassNames, getHighContrastNoAdjustStyle, hiddenContentStyle, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index */ "tOv3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MergeStyles */ "jqzx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "YFv9");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/theme */ "L2Vj");







// Ensure theme is initialized when this package is referenced.

Object(_styles_theme__WEBPACK_IMPORTED_MODULE_3__[/* initializeThemeInCustomizations */ "e"])();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "E/FW":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/social/index.js ***!
  \**********************************************/
/*! exports provided: MySocial, Social, SocialActorType, SocialActorTypes, SocialFollowResult, SocialStatusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "6a65");
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fi.js */ "v6VW");



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_1__[/* SPFI */ "e"].prototype, "social", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_0__[/* Social */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "EjWy":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/site-users/web.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "y+KB");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");





Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "siteUsers", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* SiteUsers */ "t"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "currentUser", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* SiteUser */ "e"]);
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.ensureUser = async function (logonName) {
    const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Web */ "e"])(this, "ensureuser"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({ logonName }));
    return {
        data,
        user: Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SiteUser */ "e"])([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__[/* odataUrlFrom */ "e"])(data)]),
    };
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getUserById = function (id) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SiteUser */ "e"])(this, `getUserById(${id})`);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "Ekzi":
/*!*****************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/dom/getDocument.js ***!
  \*****************************************************************/
/*! exports provided: getDocument */
/*! exports used: getDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDocument; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "iXHV");

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth.
 *
 * @public
 */
function getDocument(rootElement) {
    // eslint-disable-next-line no-restricted-globals
    if (!Object(_canUseDOM__WEBPACK_IMPORTED_MODULE_0__[/* canUseDOM */ "e"])() || typeof document === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        // eslint-disable-next-line no-restricted-globals
        return el && el.ownerDocument ? el.ownerDocument : document;
    }
}
//# sourceMappingURL=getDocument.js.map

/***/ }),

/***/ "EyfK":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/hubsites/site.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sites_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sites/types.js */ "ilAS");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.js */ "UK2s");


_sites_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Site */ "t"].prototype.joinHubSite = async function (siteId) {
    await Object(_operations_js__WEBPACK_IMPORTED_MODULE_1__[/* spPost */ "a"])(Object(_sites_types_js__WEBPACK_IMPORTED_MODULE_0__[/* Site */ "e"])(this, `joinHubSite('${siteId}')`));
};
_sites_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Site */ "t"].prototype.registerHubSite = async function () {
    await Object(_operations_js__WEBPACK_IMPORTED_MODULE_1__[/* spPost */ "a"])(Object(_sites_types_js__WEBPACK_IMPORTED_MODULE_0__[/* Site */ "e"])(this, "registerHubSite"));
};
_sites_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Site */ "t"].prototype.unRegisterHubSite = async function () {
    await Object(_operations_js__WEBPACK_IMPORTED_MODULE_1__[/* spPost */ "a"])(Object(_sites_types_js__WEBPACK_IMPORTED_MODULE_0__[/* Site */ "e"])(this, "unRegisterHubSite"));
};
//# sourceMappingURL=site.js.map

/***/ }),

/***/ "F/m7":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/presets/all.js ***!
  \*********************************************/
/*! exports provided: App, AppCatalog, Attachment, Attachments, ClientsidePageFromFile, CreateClientsidePage, CanvasColumn, CanvasSection, ClientsideText, ClientsideWebpart, ColumnControl, PromotedState, Comment, Comments, Replies, ContentType, ContentTypes, FieldLink, FieldLinks, Favorites, Feature, Features, Fields, Field, AddFieldOptions, CalendarType, ChoiceFieldFormatType, DateTimeFieldFormatType, DateTimeFieldFriendlyFormatType, FieldTypes, FieldUserSelectionMode, UrlFieldFormatType, File, Files, CheckinType, MoveOperations, TemplateFileType, Version, Versions, fileFromServerRelativePath, fileFromAbsolutePath, fileFromPath, Folder, Folders, folderFromServerRelativePath, folderFromAbsolutePath, folderFromPath, Form, Forms, HubSite, HubSites, Item, Items, ItemVersion, ItemVersions, PagedItemCollection, List, Lists, ControlMode, RenderListDataOptions, Navigation, NavigationNode, NavigationNodes, NavigationService, odataUrlFrom, Profiles, UrlZone, SitePageService, RegionalSettings, TimeZone, TimeZones, RelatedItemManager, SortDirection, ReorderingRuleMatchType, QueryPropertyValueType, SearchBuiltInSourceId, SearchQueryBuilder, SearchResults, Search, Suggest, RoleAssignment, RoleAssignments, RoleDefinition, RoleDefinitions, PermissionKind, SPSharedObjectType, SharingDomainRestrictionMode, SharingLinkKind, SharingOperationStatusCode, SharingRole, RoleType, SiteDesigns, SiteGroup, SiteGroups, SiteScripts, SiteUser, SiteUsers, Site, SiteLogoAspect, SiteLogoType, MySocial, Social, SocialActorType, SocialActorTypes, SocialFollowResult, SocialStatusCode, Utilities, Subscription, Subscriptions, TermStore, TermGroup, TermGroups, TermSets, TermSet, Relations, Term, Children, Terms, UserCustomAction, UserCustomActions, UserCustomActionRegistrationType, UserCustomActionScope, View, ViewFields, Views, ViewScope, WebPartsPersonalizationScope, WebPartDefinitions, WebPartDefinition, LimitedWebPartManager, Web, Webs, spInvokableFactory, _SPQueryable, SPQueryable, _SPCollection, SPCollection, _SPInstance, SPInstance, deleteable, deleteableWithETag, defaultPath, spGet, spPost, spPostMerge, spPostDelete, spPostDeleteETag, spDelete, spPatch, SPFI, spfi, emptyGuid, PrincipalType, PrincipalSource, PageType, extractWebUrl, containsInvalidFileFolderChars, stripInvalidFileFolderChars, toResourcePath, encodePath, DefaultInit, DefaultHeaders, Telemetry, RequestDigest, SPBrowser, SPFxToken, SPFx */
/*! exports used: SPCollection, SPFx, spfi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _appcatalog_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appcatalog/index.js */ "0FKx");
/* harmony import */ var _attachments_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attachments/index.js */ "HLtT");
/* harmony import */ var _clientside_pages_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clientside-pages/index.js */ "36LU");
/* harmony import */ var _column_defaults_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../column-defaults/index.js */ "pGaT");
/* harmony import */ var _comments_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comments/index.js */ "KvhF");
/* harmony import */ var _content_types_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content-types/index.js */ "dGPD");
/* harmony import */ var _favorites_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../favorites/index.js */ "dDSX");
/* harmony import */ var _features_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../features/index.js */ "CbhW");
/* harmony import */ var _fields_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fields/index.js */ "wmuB");
/* harmony import */ var _files_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../files/index.js */ "0YVK");
/* harmony import */ var _folders_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../folders/index.js */ "0MvI");
/* harmony import */ var _forms_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../forms/index.js */ "GnYu");
/* harmony import */ var _hubsites_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hubsites/index.js */ "Sdn1");
/* harmony import */ var _items_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../items/index.js */ "lYrR");
/* harmony import */ var _lists_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lists/index.js */ "J7sA");
/* harmony import */ var _navigation_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../navigation/index.js */ "ZdGM");
/* harmony import */ var _profiles_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../profiles/index.js */ "eKJE");
/* harmony import */ var _publishing_sitepageservice_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../publishing-sitepageservice/index.js */ "Zee4");
/* harmony import */ var _regional_settings_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../regional-settings/index.js */ "pNrY");
/* harmony import */ var _related_items_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../related-items/index.js */ "TUji");
/* harmony import */ var _search_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../search/index.js */ "D2kI");
/* harmony import */ var _security_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../security/index.js */ "ah5w");
/* harmony import */ var _sharing_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../sharing/index.js */ "ikbv");
/* harmony import */ var _site_designs_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../site-designs/index.js */ "qoFj");
/* harmony import */ var _site_groups_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../site-groups/index.js */ "6l60");
/* harmony import */ var _site_scripts_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../site-scripts/index.js */ "UuEs");
/* harmony import */ var _site_users_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../site-users/index.js */ "vX5r");
/* harmony import */ var _sites_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../sites/index.js */ "1jZ6");
/* harmony import */ var _social_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../social/index.js */ "E/FW");
/* harmony import */ var _sputilities_index_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../sputilities/index.js */ "Ku5p");
/* harmony import */ var _subscriptions_index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../subscriptions/index.js */ "Al5K");
/* harmony import */ var _taxonomy_index_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../taxonomy/index.js */ "L6Fp");
/* harmony import */ var _user_custom_actions_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../user-custom-actions/index.js */ "HkJU");
/* harmony import */ var _views_index_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../views/index.js */ "dYBM");
/* harmony import */ var _webparts_index_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../webparts/index.js */ "9Ar0");
/* harmony import */ var _webs_index_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../webs/index.js */ "6k7F");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../index.js */ "UKGb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _index_js__WEBPACK_IMPORTED_MODULE_37__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _index_js__WEBPACK_IMPORTED_MODULE_37__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _index_js__WEBPACK_IMPORTED_MODULE_37__["a"]; });











































































//# sourceMappingURL=all.js.map

/***/ }),

/***/ "F2fp":
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/transforms/prefixRules.js ***!
  \***************************************************************************/
/*! exports provided: prefixRules */
/*! exports used: prefixRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return prefixRules; });
/* harmony import */ var _getVendorSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getVendorSettings */ "cBu+");

var autoPrefixNames = {
    'user-select': 1,
};
function prefixRules(rulePairs, index) {
    var vendorSettings = Object(_getVendorSettings__WEBPACK_IMPORTED_MODULE_0__[/* getVendorSettings */ "e"])();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
//# sourceMappingURL=prefixRules.js.map

/***/ }),

/***/ "F4qD":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/spqueryable.js ***!
  \*********************************************/
/*! exports provided: spInvokableFactory, _SPQueryable, SPQueryable, _SPCollection, SPCollection, _SPInstance, SPInstance, deleteable, deleteableWithETag */
/*! exports used: SPCollection, SPInstance, SPQueryable, _SPCollection, _SPInstance, _SPQueryable, deleteable, deleteableWithETag, spInvokableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return spInvokableFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _SPQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SPQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _SPCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SPCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _SPInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SPInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return deleteable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return deleteableWithETag; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "UK2s");



const spInvokableFactory = (f) => {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* queryableFactory */ "O"])(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
class _SPQueryable extends _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* Queryable */ "l"] {
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param base A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(base, path) {
        if (typeof base === "string") {
            let url = "";
            let parentUrl = "";
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "h"])(base) || base.lastIndexOf("/") < 0) {
                parentUrl = base;
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(base, path);
            }
            else if (base.lastIndexOf("/") > base.lastIndexOf("(")) {
                // .../items(19)/fields
                const index = base.lastIndexOf("/");
                parentUrl = base.slice(0, index);
                path = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(base.slice(index), path);
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(parentUrl, path);
            }
            else {
                // .../items(19)
                const index = base.lastIndexOf("(");
                parentUrl = base.slice(0, index);
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(base, path);
            }
            // init base with corrected string value
            super(url);
            this.parentUrl = parentUrl;
        }
        else {
            super(base, path);
            const q = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "m"])(base) ? base[0] : base;
            this.parentUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "m"])(base) ? base[1] : q.toUrl();
            const target = q.query.get("@target");
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "y"])(target)) {
                this.query.set("@target", target);
            }
        }
    }
    /**
     * Gets the full url with query information
     */
    toRequestUrl() {
        const aliasedParams = new URLSearchParams(this.query);
        // this regex is designed to locate aliased parameters within url paths. These may have the form:
        // /something(!@p1::value)
        // /something(!@p1::value, param=value)
        // /something(param=value,!@p1::value)
        // /something(param=value,!@p1::value,param=value)
        // /something(param=!@p1::value)
        // there could be spaces or not around the boundaries
        let url = this.toUrl().replace(/([( *| *, *| *= *])'!(@.*?)::(.*?)'([ *)| *, *])/ig, (match, frontBoundary, labelName, value, endBoundary) => {
            this.log(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${value}`, 0);
            aliasedParams.set(labelName, `'${value}'`);
            return `${frontBoundary}${labelName}${endBoundary}`;
        });
        const query = aliasedParams.toString();
        if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* stringIsNullOrEmpty */ "I"])(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects) {
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    }
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands) {
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, path, base = this.parentUrl) {
        const parent = factory([this, base], path);
        const t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        return parent;
    }
}
const SPQueryable = spInvokableFactory(_SPQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _SPCollection extends _SPQueryable {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        this.query.set("$filter", filter);
        return this;
    }
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy, ascending = true) {
        const o = "$orderby";
        const query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(`${orderBy} ${ascending ? "asc" : "desc"}`);
        this.query.set(o, query.join(","));
        return this;
    }
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip) {
        this.query.set("$skip", skip.toString());
        return this;
    }
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
}
const SPCollection = spInvokableFactory(_SPCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _SPInstance extends _SPQueryable {
}
const SPInstance = spInvokableFactory(_SPInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable() {
    return function () {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPostDelete */ "i"])(this);
    };
}
function deleteableWithETag() {
    return function (eTag = "*") {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPostDeleteETag */ "r"])(this, {}, eTag);
    };
}
//# sourceMappingURL=spqueryable.js.map

/***/ }),

/***/ "Fx3T":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/attachments/item.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "Ar68");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"], "attachmentFiles", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Attachments */ "e"]);
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "G6u6":
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/to-resource-path.js ***!
  \********************************************************/
/*! exports provided: toResourcePath */
/*! exports used: toResourcePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return toResourcePath; });
function toResourcePath(url) {
    return {
        DecodedUrl: url,
    };
}
//# sourceMappingURL=to-resource-path.js.map

/***/ }),

/***/ "GJV8":
/*!*********************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/memoize.js ***!
  \*********************************************************/
/*! exports provided: setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction, createMemoizer */
/*! exports used: memoizeFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setMemoizeWeakMap */
/* unused harmony export resetMemoizations */
/* unused harmony export memoize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return memoizeFunction; });
/* unused harmony export createMemoizer */
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/merge-styles */ "psVN");

var _initializedStylesheetResets = false;
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(_target, _key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        },
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
 * If the flag is set to true, the callback result is recomputed every time till the callback result is
 * not undefined/null for the first time, and then the non-undefined/null version gets cached.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    if (ignoreNullOrUndefinedResult === void 0) { ignoreNullOrUndefinedResult = false; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    if (!_initializedStylesheetResets) {
        var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__[/* Stylesheet */ "e"].getInstance();
        if (stylesheet && stylesheet.onReset) {
            _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__[/* Stylesheet */ "e"].getInstance().onReset(resetMemoizations);
        }
        _initializedStylesheetResets = true;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined ||
            localResetCounter !== _resetCounter ||
            (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
            currentNode.value = cb.apply(void 0, args);
        }
        return currentNode.value;
    };
}
/**
 * Creates a memoizer for a single-value function, backed by a WeakMap.
 * With a WeakMap, the memoized values are only kept as long as the source objects,
 * ensuring that there is no memory leak.
 *
 * This function assumes that the input values passed to the wrapped function will be
 * `function` or `object` types. To memoize functions which accept other inputs, use
 * `memoizeFunction`, which memoizes against arbitrary inputs using a lookup cache.
 *
 * @public
 */
function createMemoizer(getValue) {
    if (!_weakMap) {
        // Without a `WeakMap` implementation, memoization is not possible.
        return getValue;
    }
    var cache = new _weakMap();
    function memoizedGetValue(input) {
        if (!input || (typeof input !== 'function' && typeof input !== 'object')) {
            // A WeakMap can only be used to test against reference values, i.e. 'function' and 'object'.
            // All other inputs cannot be memoized against in this manner.
            return getValue(input);
        }
        if (cache.has(input)) {
            return cache.get(input);
        }
        var value = getValue(input);
        cache.set(input, value);
        return value;
    }
    return memoizedGetValue;
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null,
    };
}
//# sourceMappingURL=memoize.js.map

/***/ }),

/***/ "GfGO":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/request-digest.js ***!
  \**********************************************************/
/*! exports provided: RequestDigest */
/*! exports used: RequestDigest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RequestDigest; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../batching.js */ "pAcn");






function clearExpired(digest) {
    const now = new Date();
    return !Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "y"])(digest) || (now > digest.expiration) ? null : digest;
}
// allows for the caching of digests across all calls which each have their own IDigestInfo wrapper.
const digests = new Map();
function RequestDigest(hook) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            // add the request to the auth moment of the timeline
            this.on.auth(async (url, init) => {
                // eslint-disable-next-line max-len
                if (/get/i.test(init.method) || (init.headers && (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(init.headers, "X-RequestDigest") || Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(init.headers, "Authorization") || Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(init.headers, "X-PnPjs-NoDigest")))) {
                    return [url, init];
                }
                const urlAsString = url.toString();
                const webUrl = Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__[/* extractWebUrl */ "e"])(urlAsString);
                // do we have one in the cache that is still valid
                // from #2186 we need to always ensure the digest we get isn't expired
                let digest = clearExpired(digests.get(webUrl));
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "y"])(digest) && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "_"])(hook)) {
                    digest = clearExpired(hook(urlAsString, init));
                }
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "y"])(digest)) {
                    digest = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPQueryable */ "n"])([this, Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(webUrl, "_api/contextinfo")]).using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* JSONParse */ "d"])(), Object(_batching_js__WEBPACK_IMPORTED_MODULE_5__[/* BatchNever */ "e"])()), {
                        headers: {
                            "Accept": "application/json",
                            "X-PnPjs-NoDigest": "1",
                        },
                    }).then(p => ({
                        expiration: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* dateAdd */ "c"])(new Date(), "second", p.FormDigestTimeoutSeconds),
                        value: p.FormDigestValue,
                    }));
                }
                if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "y"])(digest)) {
                    // if we got a digest, set it in the headers
                    init.headers = {
                        "X-RequestDigest": digest.value,
                        ...init.headers,
                    };
                    // and cache it for future requests
                    digests.set(webUrl, digest);
                }
                return [url, init];
            });
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=request-digest.js.map

/***/ }),

/***/ "GnYu":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/forms/index.js ***!
  \*********************************************/
/*! exports provided: Form, Forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "3fSn");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "zYJ9");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "HHhI":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/features/types.js ***!
  \************************************************/
/*! exports provided: _Features, Features, _Feature, Feature */
/*! exports used: Features */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Features */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Features; });
/* unused harmony export _Feature */
/* unused harmony export Feature */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");





let _Features = class _Features extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
     * Adds (activates) the specified feature
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature activation will be forced
     */
    async add(featureId, force = false) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Features(this, "add"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({
            featdefScope: 0,
            featureId,
            force,
        }));
        return {
            data: data,
            feature: this.getById(featureId),
        };
    }
    /**
     * Gets a feature from the collection with the specified guid
     *
     * @param id The Id of the feature (GUID)
     */
    getById(id) {
        return Feature(this).concat(`('${id}')`);
    }
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature deactivation will be forced
     */
    remove(featureId, force = false) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Features(this, "remove"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({
            featureId,
            force,
        }));
    }
};
_Features = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("features")
], _Features);

const Features = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Features);
class _Feature extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
}
const Feature = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Feature);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "HLtT":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/attachments/index.js ***!
  \***************************************************/
/*! exports provided: Attachment, Attachments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "Fx3T");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "Ar68");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "HiRk":
/*!**********************************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/styles/getGlobalClassNames.js ***!
  \**********************************************************************************/
/*! exports provided: getGlobalClassNames */
/*! exports used: getGlobalClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getGlobalClassNames; });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/merge-styles */ "psVN");
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/utilities */ "GJV8");


/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */
var _getGlobalClassNames = Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__[/* memoizeFunction */ "e"])(function (classNames, disableGlobalClassNames) {
    var styleSheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__[/* Stylesheet */ "e"].getInstance();
    if (disableGlobalClassNames) {
        // disable global classnames
        return Object.keys(classNames).reduce(function (acc, className) {
            acc[className] = styleSheet.getClassName(classNames[className]);
            return acc;
        }, {});
    }
    // use global classnames
    return classNames;
});
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
function getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}
//# sourceMappingURL=getGlobalClassNames.js.map

/***/ }),

/***/ "HkJU":
/*!***********************************************************!*\
  !*** ./node_modules/@pnp/sp/user-custom-actions/index.js ***!
  \***********************************************************/
/*! exports provided: UserCustomAction, UserCustomActions, UserCustomActionRegistrationType, UserCustomActionScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "VnYa");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web.js */ "uMGh");
/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site.js */ "7pU6");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "1mTr");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Hkdm":
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/styles/CommonStyles.js ***!
  \***************************************************************************/
/*! exports provided: HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, EdgeChromiumHighContrastSelector, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, getHighContrastNoAdjustStyle, getEdgeChromiumNoHighContrastAdjustSelector */
/*! exports used: HighContrastSelector, getHighContrastNoAdjustStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HighContrastSelector; });
/* unused harmony export HighContrastSelectorWhite */
/* unused harmony export HighContrastSelectorBlack */
/* unused harmony export EdgeChromiumHighContrastSelector */
/* unused harmony export ScreenWidthMinSmall */
/* unused harmony export ScreenWidthMinMedium */
/* unused harmony export ScreenWidthMinLarge */
/* unused harmony export ScreenWidthMinXLarge */
/* unused harmony export ScreenWidthMinXXLarge */
/* unused harmony export ScreenWidthMinXXXLarge */
/* unused harmony export ScreenWidthMaxSmall */
/* unused harmony export ScreenWidthMaxMedium */
/* unused harmony export ScreenWidthMaxLarge */
/* unused harmony export ScreenWidthMaxXLarge */
/* unused harmony export ScreenWidthMaxXXLarge */
/* unused harmony export ScreenWidthMinUhfMobile */
/* unused harmony export getScreenSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getHighContrastNoAdjustStyle; });
/* unused harmony export getEdgeChromiumNoHighContrastAdjustSelector */
var HighContrastSelector = '@media screen and (-ms-high-contrast: active), screen and (forced-colors: active)';
var HighContrastSelectorWhite = 
// eslint-disable-next-line @fluentui/max-len
'@media screen and (-ms-high-contrast: black-on-white), screen and (forced-colors: active) and (prefers-color-scheme: light)';
var HighContrastSelectorBlack = 
// eslint-disable-next-line @fluentui/max-len
'@media screen and (-ms-high-contrast: white-on-black), screen and (forced-colors: active) and (prefers-color-scheme: dark)';
/**
 * @deprecated Use `HighContrastSelector`
 */
var EdgeChromiumHighContrastSelector = '@media screen and (-ms-high-contrast: active), screen and (forced-colors: active)';
var ScreenWidthMinSmall = 320;
var ScreenWidthMinMedium = 480;
var ScreenWidthMinLarge = 640;
var ScreenWidthMinXLarge = 1024;
var ScreenWidthMinXXLarge = 1366;
var ScreenWidthMinXXXLarge = 1920;
var ScreenWidthMaxSmall = ScreenWidthMinMedium - 1;
var ScreenWidthMaxMedium = ScreenWidthMinLarge - 1;
var ScreenWidthMaxLarge = ScreenWidthMinXLarge - 1;
var ScreenWidthMaxXLarge = ScreenWidthMinXXLarge - 1;
var ScreenWidthMaxXXLarge = ScreenWidthMinXXXLarge - 1;
var ScreenWidthMinUhfMobile = 768;
function getScreenSelector(min, max) {
    var minSelector = typeof min === 'number' ? " and (min-width: ".concat(min, "px)") : '';
    var maxSelector = typeof max === 'number' ? " and (max-width: ".concat(max, "px)") : '';
    return "@media only screen".concat(minSelector).concat(maxSelector);
}
/**
 * The style which turns off high contrast adjustment in browsers.
 */
function getHighContrastNoAdjustStyle() {
    return {
        forcedColorAdjust: 'none',
        MsHighContrastAdjust: 'none',
    };
}
/**
 * The style which turns off high contrast adjustment in (only) Edge Chromium browser.
 *  @deprecated Use `getHighContrastNoAdjustStyle`
 */
// eslint-disable-next-line deprecation/deprecation
function getEdgeChromiumNoHighContrastAdjustSelector() {
    var _a;
    return _a = {},
        // eslint-disable-next-line deprecation/deprecation
        _a[EdgeChromiumHighContrastSelector] = {
            forcedColorAdjust: 'none',
            MsHighContrastAdjust: 'none',
        },
        _a;
}
//# sourceMappingURL=CommonStyles.js.map

/***/ }),

/***/ "ISfK":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/timeout.js ***!
  \**********************************************************/
/*! exports provided: Timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Timeout */
/**
 * Behavior that will cause a timeout in the request after the specified milliseconds
 *
 * @param timeout Number of milliseconds to set the timeout
 */
function Timeout(timeout) {
    return (instance) => {
        instance.on.pre(async (url, init, result) => {
            const controller = new AbortController();
            init.signal = controller.signal;
            setTimeout(() => controller.abort(), timeout);
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "IwJs":
/*!*********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/*! exports used: __decorate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __decorate; });
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __spreadArray */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/* unused harmony export __classPrivateFieldIn */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "J7sA":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/index.js ***!
  \*********************************************/
/*! exports provided: List, Lists, ControlMode, RenderListDataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "Bwa7");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "hy0S");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "JC1J":
/*!*****************************************!*\
  !*** ./node_modules/@pnp/core/index.js ***!
  \*****************************************/
/*! exports provided: PnPClientStorageWrapper, PnPClientStorage, dateAdd, combine, getRandomString, getGUID, isFunc, isArray, isUrlAbsolute, stringIsNullOrEmpty, objectDefinedNotNull, jsS, hOP, parseToAtob, getHashCode, delay, broadcast, asyncBroadcast, reduce, asyncReduce, request, lifecycle, noInherit, once, Timeline, cloneObserverCollection, extendable, extend, extendFactory, disableExtensions, enableExtensions, AssignFrom, CopyFrom */
/*! exports used: AssignFrom, CopyFrom, PnPClientStorage, Timeline, asyncBroadcast, asyncReduce, broadcast, combine, dateAdd, delay, extendable, getGUID, getHashCode, hOP, isArray, isFunc, isUrlAbsolute, jsS, lifecycle, noInherit, objectDefinedNotNull, reduce, request, stringIsNullOrEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "L2F+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _storage_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "NuLX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "y", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["u"]; });

/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moments.js */ "DZog");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["r"]; });

/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "4kGv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _timeline_js__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v", function() { return _timeline_js__WEBPACK_IMPORTED_MODULE_3__["n"]; });

/* harmony import */ var _extendable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extendable.js */ "t9SU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _extendable_js__WEBPACK_IMPORTED_MODULE_4__["e"]; });

/* harmony import */ var _behaviors_assign_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./behaviors/assign-from.js */ "zhiF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _behaviors_assign_from_js__WEBPACK_IMPORTED_MODULE_5__["e"]; });

/* harmony import */ var _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/copy-from.js */ "qNel");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_6__["e"]; });






/**
 * Behavior exports
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "JFDc":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/files/folder.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _folders_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../folders/types.js */ "4tXH");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "qfcF");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_folders_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Folder */ "n"], "files", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Files */ "t"]);
//# sourceMappingURL=folder.js.map

/***/ }),

/***/ "JT9m":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/regional-settings/web.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "luMW");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcs.js */ "T2j4");




Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "regionalSettings", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* RegionalSettings */ "e"]);
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.titleResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_3__[/* getValueForUICultureBinder */ "e"])("titleResource");
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.descriptionResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_3__[/* getValueForUICultureBinder */ "e"])("descriptionResource");
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "Ji9F":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/context-info/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");




_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPQueryable */ "r"].prototype.getContextInfo = async function (path = this.parentUrl) {
    const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_1__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPQueryable */ "n"])([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__[/* extractWebUrl */ "e"])(path)], "_api/contextinfo"));
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(data, "GetContextWebInformation")) {
        const info = data.GetContextWebInformation;
        info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
        return info;
    }
    else {
        return data;
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "K1m8":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/sharing/item.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "AvPO");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcs.js */ "At/s");



_items_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Item */ "n"].prototype.shareWith = function (loginNames, role = _types_js__WEBPACK_IMPORTED_MODULE_1__[/* SharingRole */ "t"].View, requireSignin = false, emailData) {
    return Object(_funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* shareWith */ "o"])(this, loginNames, role, requireSignin, false, emailData);
};
_items_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Item */ "n"].prototype.getShareLink = _funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* getShareLink */ "a"];
_items_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Item */ "n"].prototype.checkSharingPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* checkPermissions */ "e"];
_items_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Item */ "n"].prototype.getSharingInformation = _funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* getSharingInformation */ "i"];
_items_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Item */ "n"].prototype.getObjectSharingSettings = _funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* getObjectSharingSettings */ "n"];
_items_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Item */ "n"].prototype.unshare = _funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* unshareObject */ "c"];
_items_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Item */ "n"].prototype.deleteSharingLinkByKind = _funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* deleteLinkByKind */ "t"];
_items_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Item */ "n"].prototype.unshareLink = _funcs_js__WEBPACK_IMPORTED_MODULE_2__[/* unshareLink */ "s"];
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "KJ7d":
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/regional-settings/list.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcs.js */ "T2j4");


_lists_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _List */ "n"].prototype.titleResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_1__[/* getValueForUICultureBinder */ "e"])("titleResource");
_lists_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _List */ "n"].prototype.descriptionResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_1__[/* getValueForUICultureBinder */ "e"])("descriptionResource");
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "KJUs":
/*!**************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/keyframes.js ***!
  \**************************************************************/
/*! exports provided: keyframes */
/*! exports used: keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return keyframes; });
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleOptionsState */ "Z+an");
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stylesheet */ "psVN");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleToClassName */ "qQFQ");



/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__[/* Stylesheet */ "e"].getInstance();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__[/* serializeRuleEntries */ "t"])(Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__[/* getStyleOptions */ "e"])(), timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    var className = stylesheet.classNameFromKey(rules);
    if (className) {
        return className;
    }
    var name = stylesheet.getClassName();
    stylesheet.insertRule("@keyframes ".concat(name, "{").concat(rules, "}"), true);
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}
//# sourceMappingURL=keyframes.js.map

/***/ }),

/***/ "KYlJ":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/fields/types.js ***!
  \**********************************************/
/*! exports provided: _Fields, Fields, _Field, Field, FieldTypes, DateTimeFieldFormatType, DateTimeFieldFriendlyFormatType, AddFieldOptions, CalendarType, UrlFieldFormatType, FieldUserSelectionMode, ChoiceFieldFormatType */
/*! exports used: Fields, _Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Fields */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _Field; });
/* unused harmony export Field */
/* unused harmony export FieldTypes */
/* unused harmony export DateTimeFieldFormatType */
/* unused harmony export DateTimeFieldFriendlyFormatType */
/* unused harmony export AddFieldOptions */
/* unused harmony export CalendarType */
/* unused harmony export UrlFieldFormatType */
/* unused harmony export FieldUserSelectionMode */
/* unused harmony export ChoiceFieldFormatType */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_metadata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/metadata.js */ "z067");






let _Fields = class _Fields extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
     * Creates a field based on the specified schema
     *
     * @param xml A string or XmlSchemaFieldCreationInformation instance descrbing the field to create
     */
    async createFieldAsXml(xml) {
        if (typeof xml === "string") {
            xml = { SchemaXml: xml };
        }
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Fields(this, "createfieldasxml"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({ parameters: xml }));
        return {
            data,
            field: this.getById(data.Id),
        };
    }
    /**
     * Gets a field from the collection by id
     *
     * @param id The Id of the list
     */
    getById(id) {
        return Field(this).concat(`('${id}')`);
    }
    /**
     * Gets a field from the collection by title
     *
     * @param title The case-sensitive title of the field
     */
    getByTitle(title) {
        return Field(this, `getByTitle('${title}')`);
    }
    /**
     * Gets a field from the collection by using internal name or title
     *
     * @param name The case-sensitive internal name or title of the field
     */
    getByInternalNameOrTitle(name) {
        return Field(this, `getByInternalNameOrTitle('${name}')`);
    }
    /**
     * Adds a new field to the collection
     *
     * @param title The new field's title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    async add(title, fieldTypeKind, properties) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Fields(this, null), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])(Object.assign(Object(_utils_metadata_js__WEBPACK_IMPORTED_MODULE_5__[/* metadata */ "e"])(mapFieldTypeEnumToString(fieldTypeKind)), {
            Title: title,
            FieldTypeKind: fieldTypeKind,
            ...properties,
        }), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* headers */ "v"])({
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose",
        })));
        return {
            data,
            field: this.getById(data.Id),
        };
    }
    /**
     * Adds a new field to the collection
     *
     * @param title The new field's title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    async addField(title, fieldTypeKind, properties) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Fields(this, "AddField"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({
            parameters: {
                Title: title,
                FieldTypeKind: fieldTypeKind,
                ...properties,
            },
        }));
        return {
            data,
            field: this.getById(data.Id),
        };
    }
    /**
     * Adds a new SP.FieldText to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addText(title, properties) {
        return this.add(title, 2, {
            MaxLength: 255,
            ...properties,
        });
    }
    /**
     * Adds a new SP.FieldCalculated to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addCalculated(title, properties) {
        return this.add(title, 17, {
            OutputType: 2 /* Text */,
            ...properties,
        });
    }
    /**
     * Adds a new SP.FieldDateTime to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addDateTime(title, properties) {
        return this.add(title, 4, {
            DateTimeCalendarType: 1 /* Gregorian */,
            DisplayFormat: DateTimeFieldFormatType.DateOnly,
            FriendlyDisplayFormat: DateTimeFieldFriendlyFormatType.Unspecified,
            ...properties,
        });
    }
    /**
     * Adds a new SP.FieldNumber to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addNumber(title, properties) {
        return this.add(title, 9, properties);
    }
    /**
     * Adds a new SP.FieldCurrency to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addCurrency(title, properties) {
        return this.add(title, 10, {
            CurrencyLocaleId: 1033,
            ...properties,
        });
    }
    /**
     * Adds a new SP.FieldMultiLineText to the collection
     *
     * @param title The field title
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     *
     */
    addMultilineText(title, properties) {
        return this.add(title, 3, {
            AllowHyperlink: true,
            AppendOnly: false,
            NumberOfLines: 6,
            RestrictedMode: false,
            RichText: true,
            ...properties,
        });
    }
    /**
     * Adds a new SP.FieldUrl to the collection
     *
     * @param title The field title
     */
    addUrl(title, properties) {
        return this.add(title, 11, {
            DisplayFormat: UrlFieldFormatType.Hyperlink,
            ...properties,
        });
    }
    /** Adds a user field to the colleciton
     *
     * @param title The new field's title
     * @param properties
     */
    addUser(title, properties) {
        return this.add(title, 20, {
            SelectionMode: FieldUserSelectionMode.PeopleAndGroups,
            ...properties,
        });
    }
    /**
     * Adds a SP.FieldLookup to the collection
     *
     * @param title The new field's title
     * @param properties Set of additional properties to set on the new field
     */
    async addLookup(title, properties) {
        return this.addField(title, 7, properties);
    }
    /**
     * Adds a new SP.FieldChoice to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addChoice(title, properties) {
        const props = {
            ...properties,
            Choices: {
                results: properties.Choices,
            },
        };
        return this.add(title, 6, props);
    }
    /**
     * Adds a new SP.FieldMultiChoice to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addMultiChoice(title, properties) {
        const props = {
            ...properties,
            Choices: {
                results: properties.Choices,
            },
        };
        return this.add(title, 15, props);
    }
    /**
   * Adds a new SP.FieldBoolean to the collection
   *
   * @param title The field title.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addBoolean(title, properties) {
        return this.add(title, 8, properties);
    }
    /**
  * Creates a secondary (dependent) lookup field, based on the Id of the primary lookup field.
  *
  * @param displayName The display name of the new field.
  * @param primaryLookupFieldId The guid of the primary Lookup Field.
  * @param showField Which field to show from the lookup list.
  */
    async addDependentLookupField(displayName, primaryLookupFieldId, showField) {
        const path = `adddependentlookupfield(displayName='${displayName}', primarylookupfieldid='${primaryLookupFieldId}', showfield='${showField}')`;
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Fields(this, path));
        return {
            data,
            field: this.getById(data.Id),
        };
    }
    /**
   * Adds a new SP.FieldLocation to the collection
   *
   * @param title The field title.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    addLocation(title, properties) {
        return this.add(title, 33, properties);
    }
    /**
     * Adds a new SP.FieldLocation to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addImageField(title, properties) {
        return this.add(title, 34, properties);
    }
};
_Fields = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("fields")
], _Fields);

const Fields = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Fields);
class _Field extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* deleteable */ "o"])();
    }
    /**
   * Updates this field instance with the supplied properties
   *
   * @param properties A plain object hash of values to update for the list
   * @param fieldType The type value such as SP.FieldLookup. Optional, looked up from the field if not provided
   */
    async update(properties, fieldType) {
        if (typeof fieldType === "undefined" || fieldType === null) {
            const info = await Field(this).select("FieldTypeKind")();
            fieldType = info["odata.type"];
        }
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])(properties));
        return {
            data,
            field: this,
        };
    }
    /**
   * Sets the value of the ShowInDisplayForm property for this field.
   */
    setShowInDisplayForm(show) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Field(this, `setshowindisplayform(${show})`));
    }
    /**
   * Sets the value of the ShowInEditForm property for this field.
   */
    setShowInEditForm(show) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Field(this, `setshowineditform(${show})`));
    }
    /**
   * Sets the value of the ShowInNewForm property for this field.
   */
    setShowInNewForm(show) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Field(this, `setshowinnewform(${show})`));
    }
}
const Field = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Field);
/**
 * Specifies the type of the field.
 */
var FieldTypes;
(function (FieldTypes) {
    FieldTypes[FieldTypes["Invalid"] = 0] = "Invalid";
    FieldTypes[FieldTypes["Integer"] = 1] = "Integer";
    FieldTypes[FieldTypes["Text"] = 2] = "Text";
    FieldTypes[FieldTypes["Note"] = 3] = "Note";
    FieldTypes[FieldTypes["DateTime"] = 4] = "DateTime";
    FieldTypes[FieldTypes["Counter"] = 5] = "Counter";
    FieldTypes[FieldTypes["Choice"] = 6] = "Choice";
    FieldTypes[FieldTypes["Lookup"] = 7] = "Lookup";
    FieldTypes[FieldTypes["Boolean"] = 8] = "Boolean";
    FieldTypes[FieldTypes["Number"] = 9] = "Number";
    FieldTypes[FieldTypes["Currency"] = 10] = "Currency";
    FieldTypes[FieldTypes["URL"] = 11] = "URL";
    FieldTypes[FieldTypes["Computed"] = 12] = "Computed";
    FieldTypes[FieldTypes["Threading"] = 13] = "Threading";
    FieldTypes[FieldTypes["Guid"] = 14] = "Guid";
    FieldTypes[FieldTypes["MultiChoice"] = 15] = "MultiChoice";
    FieldTypes[FieldTypes["GridChoice"] = 16] = "GridChoice";
    FieldTypes[FieldTypes["Calculated"] = 17] = "Calculated";
    FieldTypes[FieldTypes["File"] = 18] = "File";
    FieldTypes[FieldTypes["Attachments"] = 19] = "Attachments";
    FieldTypes[FieldTypes["User"] = 20] = "User";
    FieldTypes[FieldTypes["Recurrence"] = 21] = "Recurrence";
    FieldTypes[FieldTypes["CrossProjectLink"] = 22] = "CrossProjectLink";
    FieldTypes[FieldTypes["ModStat"] = 23] = "ModStat";
    FieldTypes[FieldTypes["Error"] = 24] = "Error";
    FieldTypes[FieldTypes["ContentTypeId"] = 25] = "ContentTypeId";
    FieldTypes[FieldTypes["PageSeparator"] = 26] = "PageSeparator";
    FieldTypes[FieldTypes["ThreadIndex"] = 27] = "ThreadIndex";
    FieldTypes[FieldTypes["WorkflowStatus"] = 28] = "WorkflowStatus";
    FieldTypes[FieldTypes["AllDayEvent"] = 29] = "AllDayEvent";
    FieldTypes[FieldTypes["WorkflowEventType"] = 30] = "WorkflowEventType";
    FieldTypes[FieldTypes["Location"] = 33] = "Location";
    FieldTypes[FieldTypes["Image"] = 34] = "Image";
})(FieldTypes || (FieldTypes = {}));
const FieldTypeClassMapping = {
    [17 /* Calculated */]: "SP.FieldCalculated",
    [6 /* Choice */]: "SP.FieldChoice",
    [12 /* Computed */]: "SP.FieldComputed",
    [10 /* Currency */]: "SP.FieldCurrency",
    [4 /* DateTime */]: "SP.FieldDateTime",
    [16 /* GridChoice */]: "SP.FieldRatingScale",
    [14 /* Guid */]: "SP.FieldGuid",
    [34 /* Image */]: "SP.FieldMultiLineText",
    [1 /* Integer */]: "SP.FieldNumber",
    [33 /* Location */]: "SP.FieldLocation",
    [7 /* Lookup */]: "SP.FieldLookup",
    [23 /* ModStat */]: "SP.FieldChoice",
    [15 /* MultiChoice */]: "SP.FieldMultiChoice",
    [3 /* Note */]: "SP.FieldMultiLineText",
    [9 /* Number */]: "SP.FieldNumber",
    [2 /* Text */]: "SP.FieldText",
    [11 /* URL */]: "SP.FieldUrl",
    [20 /* User */]: "SP.FieldUser",
    [28 /* WorkflowStatus */]: "SP.FieldChoice",
    [30 /* WorkflowEventType */]: "SP.FieldNumber",
};
function mapFieldTypeEnumToString(enumValue) {
    var _a;
    return (_a = FieldTypeClassMapping[enumValue]) !== null && _a !== void 0 ? _a : "SP.Field";
}
var DateTimeFieldFormatType;
(function (DateTimeFieldFormatType) {
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateOnly"] = 0] = "DateOnly";
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateTime"] = 1] = "DateTime";
})(DateTimeFieldFormatType || (DateTimeFieldFormatType = {}));
var DateTimeFieldFriendlyFormatType;
(function (DateTimeFieldFriendlyFormatType) {
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Unspecified"] = 0] = "Unspecified";
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Disabled"] = 1] = "Disabled";
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Relative"] = 2] = "Relative";
})(DateTimeFieldFriendlyFormatType || (DateTimeFieldFriendlyFormatType = {}));
/**
 * Specifies the control settings while adding a field.
 */
var AddFieldOptions;
(function (AddFieldOptions) {
    /**
   *  Specify that a new field added to the list must also be added to the default content type in the site collection
   */
    AddFieldOptions[AddFieldOptions["DefaultValue"] = 0] = "DefaultValue";
    /**
   * Specify that a new field added to the list must also be added to the default content type in the site collection.
   */
    AddFieldOptions[AddFieldOptions["AddToDefaultContentType"] = 1] = "AddToDefaultContentType";
    /**
   * Specify that a new field must not be added to any other content type
   */
    AddFieldOptions[AddFieldOptions["AddToNoContentType"] = 2] = "AddToNoContentType";
    /**
   *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
   */
    AddFieldOptions[AddFieldOptions["AddToAllContentTypes"] = 4] = "AddToAllContentTypes";
    /**
   * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
   */
    AddFieldOptions[AddFieldOptions["AddFieldInternalNameHint"] = 8] = "AddFieldInternalNameHint";
    /**
   * Specify that a new field that is added to the specified list must also be added to the default list view
   */
    AddFieldOptions[AddFieldOptions["AddFieldToDefaultView"] = 16] = "AddFieldToDefaultView";
    /**
   * Specify to confirm that no other field has the same display name
   */
    AddFieldOptions[AddFieldOptions["AddFieldCheckDisplayName"] = 32] = "AddFieldCheckDisplayName";
})(AddFieldOptions || (AddFieldOptions = {}));
var CalendarType;
(function (CalendarType) {
    CalendarType[CalendarType["Gregorian"] = 1] = "Gregorian";
    CalendarType[CalendarType["Japan"] = 3] = "Japan";
    CalendarType[CalendarType["Taiwan"] = 4] = "Taiwan";
    CalendarType[CalendarType["Korea"] = 5] = "Korea";
    CalendarType[CalendarType["Hijri"] = 6] = "Hijri";
    CalendarType[CalendarType["Thai"] = 7] = "Thai";
    CalendarType[CalendarType["Hebrew"] = 8] = "Hebrew";
    CalendarType[CalendarType["GregorianMEFrench"] = 9] = "GregorianMEFrench";
    CalendarType[CalendarType["GregorianArabic"] = 10] = "GregorianArabic";
    CalendarType[CalendarType["GregorianXLITEnglish"] = 11] = "GregorianXLITEnglish";
    CalendarType[CalendarType["GregorianXLITFrench"] = 12] = "GregorianXLITFrench";
    CalendarType[CalendarType["KoreaJapanLunar"] = 14] = "KoreaJapanLunar";
    CalendarType[CalendarType["ChineseLunar"] = 15] = "ChineseLunar";
    CalendarType[CalendarType["SakaEra"] = 16] = "SakaEra";
    CalendarType[CalendarType["UmAlQura"] = 23] = "UmAlQura";
})(CalendarType || (CalendarType = {}));
var UrlFieldFormatType;
(function (UrlFieldFormatType) {
    UrlFieldFormatType[UrlFieldFormatType["Hyperlink"] = 0] = "Hyperlink";
    UrlFieldFormatType[UrlFieldFormatType["Image"] = 1] = "Image";
})(UrlFieldFormatType || (UrlFieldFormatType = {}));
var FieldUserSelectionMode;
(function (FieldUserSelectionMode) {
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleAndGroups"] = 1] = "PeopleAndGroups";
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleOnly"] = 0] = "PeopleOnly";
})(FieldUserSelectionMode || (FieldUserSelectionMode = {}));
var ChoiceFieldFormatType;
(function (ChoiceFieldFormatType) {
    ChoiceFieldFormatType[ChoiceFieldFormatType["Dropdown"] = 0] = "Dropdown";
    ChoiceFieldFormatType[ChoiceFieldFormatType["RadioButtons"] = 1] = "RadioButtons";
})(ChoiceFieldFormatType || (ChoiceFieldFormatType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "Ka72":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/security/item.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "1dmT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcs.js */ "vXSC");





Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"], "roleAssignments", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* RoleAssignments */ "t"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"], "firstUniqueAncestorSecurableObject", _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPInstance */ "t"]);
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.getUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* getUserEffectivePermissions */ "a"];
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.getCurrentUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentUserEffectivePermissions */ "n"];
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.breakRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* breakRoleInheritance */ "e"];
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.resetRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* resetRoleInheritance */ "r"];
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.userHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* userHasPermissions */ "o"];
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.currentUserHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* currentUserHasPermissions */ "t"];
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.hasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* hasPermissions */ "i"];
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "Ku5p":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/sputilities/index.js ***!
  \***************************************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "AfLD");



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype, "utility", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Utilities */ "e"], "");
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "KvhF":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/comments/index.js ***!
  \************************************************/
/*! exports provided: Comment, Comments, Replies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "NxAp");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "wMck");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "L2F+":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/storage.js ***!
  \*******************************************/
/*! exports provided: PnPClientStorageWrapper, PnPClientStorage */
/*! exports used: PnPClientStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PnPClientStorageWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PnPClientStorage; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "NuLX");

let storageShim;
function getStorageShim() {
    if (typeof storageShim === "undefined") {
        storageShim = new MemoryStorage();
    }
    return storageShim;
}
/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
class PnPClientStorageWrapper {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    constructor(store) {
        this.store = store;
        this.enabled = this.test();
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get(key) {
        if (!this.enabled) {
            return null;
        }
        const o = this.store.getItem(key);
        if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "l"])(o)) {
            return null;
        }
        const persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    }
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    }
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    }
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    async getOrPut(key, getter, expire) {
        if (!this.enabled) {
            return getter();
        }
        let o = this.get(key);
        if (o === null) {
            o = await getter();
            this.put(key, o, expire);
        }
        return o;
    }
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    async deleteExpired() {
        if (!this.enabled) {
            return;
        }
        for (let i = 0; i < this.store.length; i++) {
            const key = this.store.key(i);
            if (key !== null) {
                // test the stored item to see if we stored it
                if (/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) {
                    // get those items as get will delete from cache if they are expired
                    await this.get(key);
                }
            }
        }
    }
    /**
     * Used to determine if the wrapped storage is available currently
     */
    test() {
        const str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Creates the persistable to store
     */
    createPersistable(o, expire) {
        if (expire === undefined) {
            expire = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* dateAdd */ "t"])(new Date(), "minute", 5);
        }
        return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* jsS */ "d"])({ pnp: 1, expiration: expire, value: o });
    }
}
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
class MemoryStorage {
    constructor(_store = new Map()) {
        this._store = _store;
    }
    get length() {
        return this._store.size;
    }
    clear() {
        this._store.clear();
    }
    getItem(key) {
        return this._store.get(key);
    }
    key(index) {
        return Array.from(this._store)[index][0];
    }
    removeItem(key) {
        this._store.delete(key);
    }
    setItem(key, data) {
        this._store.set(key, data);
    }
}
/**
 * A class that will establish wrappers for both local and session storage, substituting basic memory storage for nodejs
 */
class PnPClientStorage {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    constructor(_local = null, _session = null) {
        this._local = _local;
        this._session = _session;
    }
    /**
     * Provides access to the local storage of the browser
     */
    get local() {
        if (this._local === null) {
            this._local = new PnPClientStorageWrapper(typeof localStorage === "undefined" ? getStorageShim() : localStorage);
        }
        return this._local;
    }
    /**
     * Provides access to the session storage of the browser
     */
    get session() {
        if (this._session === null) {
            this._session = new PnPClientStorageWrapper(typeof sessionStorage === "undefined" ? getStorageShim() : sessionStorage);
        }
        return this._session;
    }
}
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "L2Vj":
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/styles/theme.js ***!
  \********************************************************************/
/*! exports provided: createTheme, ThemeSettingName, initializeThemeInCustomizations, getTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, loadTheme */
/*! exports used: initializeThemeInCustomizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ThemeSettingName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return initializeThemeInCustomizations; });
/* unused harmony export getTheme */
/* unused harmony export registerOnThemeChangeCallback */
/* unused harmony export removeOnThemeChangeCallback */
/* unused harmony export loadTheme */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/utilities */ "pyJV");
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/utilities */ "8GdW");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "Tw14");
/* harmony import */ var _fluentui_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/theme */ "6lVU");





var _theme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_4__[/* createTheme */ "e"])({});
var _onThemeChangeCallbacks = [];
var ThemeSettingName = 'theme';
function initializeThemeInCustomizations() {
    var _a;
    var _b, _c;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var win = Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__[/* getWindow */ "e"])();
    if ((_b = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _b === void 0 ? void 0 : _b.legacyTheme) {
        // does everything the `else` clause does and more, such as invoke legacy theming
        loadTheme(win.FabricConfig.legacyTheme);
    }
    else if (!_fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__[/* Customizations */ "e"].getSettings([ThemeSettingName]).theme) {
        if ((_c = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _c === void 0 ? void 0 : _c.theme) {
            _theme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_4__[/* createTheme */ "e"])(win.FabricConfig.theme);
        }
        // Set the default theme.
        _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__[/* Customizations */ "e"].applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    }
}
initializeThemeInCustomizations();
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_4__[/* createTheme */ "e"])({}, depComments);
    }
    return _theme;
}
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    var _a;
    if (depComments === void 0) { depComments = false; }
    _theme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_4__[/* createTheme */ "e"])(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_3__[/* loadTheme */ "e"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({}, _theme.palette), _theme.semanticColors), _theme.effects), _loadFonts(_theme)));
    _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__[/* Customizations */ "e"].applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
}
/**
 * Loads font variables into a JSON object.
 * @param theme - The theme object
 */
function _loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
        var fontName = _a[_i];
        var font = theme.fonts[fontName];
        for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
            var propName = _c[_b];
            var name_1 = fontName + propName.charAt(0).toUpperCase() + propName.slice(1);
            var value = font[propName];
            if (propName === 'fontSize' && typeof value === 'number') {
                // if it's a number, convert it to px by default like our theming system does
                value = value + 'px';
            }
            lines[name_1] = value;
        }
    }
    return lines;
}
//# sourceMappingURL=theme.js.map

/***/ }),

/***/ "L6Fp":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/taxonomy/index.js ***!
  \************************************************/
/*! exports provided: TermStore, TermGroup, TermGroups, TermSets, TermSet, Relations, Term, Children, Terms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "W5Fu");



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype, "termStore", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* TermStore */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "LVfT":
/*!**************************************************************!*\
  !*** ./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/*! exports used: __decorate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __decorate; });
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __spreadArray */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/* unused harmony export __classPrivateFieldIn */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "LZ64":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/item.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "4tXH");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"], "folder", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Folder */ "e"]);
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "Lmvq":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/related-items/web.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "PmFa");


Reflect.defineProperty(_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype, "relatedItems", {
    configurable: true,
    enumerable: true,
    get: function () {
        return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* RelatedItemManager */ "e"])(this);
    },
});
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "M9RU":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/content-types/web.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "S3gC");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "contentTypes", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* ContentTypes */ "t"]);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "MkPD":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/search/query.js ***!
  \**********************************************/
/*! exports provided: SearchQueryBuilder, _Search, Search, SearchResults */
/*! exports used: _Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchQueryBuilder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _Search; });
/* unused harmony export Search */
/* unused harmony export SearchResults */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
var _Search_1;






const funcs = new Map([
    ["text", "Querytext"],
    ["template", "QueryTemplate"],
    ["sourceId", "SourceId"],
    ["trimDuplicatesIncludeId", ""],
    ["startRow", ""],
    ["rowLimit", ""],
    ["rankingModelId", ""],
    ["rowsPerPage", ""],
    ["selectProperties", ""],
    ["culture", ""],
    ["timeZoneId", ""],
    ["refinementFilters", ""],
    ["refiners", ""],
    ["hiddenConstraints", ""],
    ["sortList", ""],
    ["timeout", ""],
    ["hithighlightedProperties", ""],
    ["clientType", ""],
    ["personalizationData", ""],
    ["resultsURL", ""],
    ["queryTag", ""],
    ["properties", ""],
    ["queryTemplatePropertiesUrl", ""],
    ["reorderingRules", ""],
    ["hitHighlightedMultivaluePropertyLimit", ""],
    ["collapseSpecification", ""],
    ["uiLanguage", ""],
    ["desiredSnippetLength", ""],
    ["maxSnippetLength", ""],
    ["summaryLength", ""],
]);
const props = new Map([]);
function toPropCase(str) {
    return str.replace(/^(.)/, ($1) => $1.toUpperCase());
}
/**
 * Creates a new instance of the SearchQueryBuilder
 *
 * @param queryText Initial query text
 * @param _query Any initial query configuration
 */
function SearchQueryBuilder(queryText = "", _query = {}) {
    return new Proxy({
        query: Object.assign({
            Querytext: queryText,
        }, _query),
    }, {
        get(self, propertyKey, proxy) {
            const pk = propertyKey.toString();
            if (pk === "toSearchQuery") {
                return () => self.query;
            }
            if (funcs.has(pk)) {
                return (...value) => {
                    const mappedPk = funcs.get(pk);
                    self.query[mappedPk.length > 0 ? mappedPk : toPropCase(pk)] = value.length > 1 ? value : value[0];
                    return proxy;
                };
            }
            const propKey = props.has(pk) ? props.get(pk) : toPropCase(pk);
            self.query[propKey] = true;
            return proxy;
        },
    });
}
/**
 * Describes the search API
 *
 */
let _Search = _Search_1 = class _Search extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    /**
     * @returns Promise
     */
    async run(queryInit) {
        const query = this.parseQuery(queryInit);
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__[/* body */ "_"])({
            request: {
                ...query,
                HitHighlightedProperties: this.fixArrProp(query.HitHighlightedProperties),
                Properties: this.fixArrProp(query.Properties),
                RefinementFilters: this.fixArrProp(query.RefinementFilters),
                ReorderingRules: this.fixArrProp(query.ReorderingRules),
                SelectProperties: this.fixArrProp(query.SelectProperties),
                SortList: this.fixArrProp(query.SortList),
            },
        });
        const poster = new _Search_1([this, this.parentUrl]);
        poster.using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__[/* CacheAlways */ "a"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__[/* CacheKey */ "i"])(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* getHashCode */ "f"])(JSON.stringify(postBody)).toString()));
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(poster, postBody);
        // Create search instance copy for SearchResult's getPage request.
        return new SearchResults(data, new _Search_1([this, this.parentUrl]), query);
    }
    /**
     * Fix array property
     *
     * @param prop property to fix for container struct
     */
    fixArrProp(prop) {
        return typeof prop === "undefined" ? [] : Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* isArray */ "m"])(prop) ? prop : [prop];
    }
    /**
     * Translates one of the query initializers into a SearchQuery instance
     *
     * @param query
     */
    parseQuery(query) {
        let finalQuery;
        if (typeof query === "string") {
            finalQuery = { Querytext: query };
        }
        else if (query.toSearchQuery) {
            finalQuery = query.toSearchQuery();
        }
        else {
            finalQuery = query;
        }
        return finalQuery;
    }
};
_Search = _Search_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_5__[/* defaultPath */ "e"])("_api/search/postquery"),
    Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__[/* invokable */ "y"])(function (init) {
        return this.run(init);
    })
], _Search);

const Search = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Search);
class SearchResults {
    constructor(rawResponse, _search, _query, _raw = null, _primary = null) {
        this._search = _search;
        this._query = _query;
        this._raw = _raw;
        this._primary = _primary;
        this._raw = rawResponse.postquery ? rawResponse.postquery : rawResponse;
    }
    get ElapsedTime() {
        var _a;
        return ((_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.ElapsedTime) || 0;
    }
    get RowCount() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.RowCount) || 0;
    }
    get TotalRows() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.TotalRows) || 0;
    }
    get TotalRowsIncludingDuplicates() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.TotalRowsIncludingDuplicates) || 0;
    }
    get RawSearchResults() {
        return this._raw;
    }
    get PrimarySearchResults() {
        var _a, _b, _c, _d;
        if (this._primary === null) {
            this._primary = this.formatSearchResults(((_d = (_c = (_b = (_a = this._raw) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.Table) === null || _d === void 0 ? void 0 : _d.Rows) || null);
        }
        return this._primary;
    }
    /**
     * Gets a page of results
     *
     * @param pageNumber Index of the page to return. Used to determine StartRow
     * @param pageSize Optional, items per page (default = 10)
     */
    getPage(pageNumber, pageSize) {
        // if we got all the available rows we don't have another page
        if (this.TotalRows < this.RowCount) {
            return Promise.resolve(null);
        }
        // if pageSize is supplied, then we use that regardless of any previous values
        // otherwise get the previous RowLimit or default to 10
        const rows = pageSize !== undefined ? pageSize : Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* hOP */ "p"])(this._query, "RowLimit") ? this._query.RowLimit : 10;
        const query = {
            ...this._query,
            RowLimit: rows,
            StartRow: rows * (pageNumber - 1),
        };
        // we have reached the end
        if (query.StartRow > this.TotalRows) {
            return Promise.resolve(null);
        }
        return this._search.run(query);
    }
    /**
     * Formats a search results array
     *
     * @param rawResults The array to process
     */
    formatSearchResults(rawResults) {
        const results = new Array();
        if (typeof (rawResults) === "undefined" || rawResults == null) {
            return [];
        }
        const tempResults = rawResults.results ? rawResults.results : rawResults;
        for (const tempResult of tempResults) {
            const cells = tempResult.Cells.results ? tempResult.Cells.results : tempResult.Cells;
            results.push(cells.reduce((res, cell) => {
                res[cell.Key] = cell.Value;
                return res;
            }, {}));
        }
        return results;
    }
}
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "N3o1":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/subscriptions/types.js ***!
  \*****************************************************/
/*! exports provided: _Subscriptions, Subscriptions, _Subscription, Subscription */
/*! exports used: Subscriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Subscriptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Subscriptions; });
/* unused harmony export _Subscription */
/* unused harmony export Subscription */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");





let _Subscriptions = class _Subscriptions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    /**
    * Returns all the webhook subscriptions or the specified webhook subscription
    *
    * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
    */
    getById(subscriptionId) {
        return Subscription(this).concat(`('${subscriptionId}')`);
    }
    /**
     * Creates a new webhook subscription
     *
     * @param notificationUrl The url to receive the notifications
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     * @param clientState A client specific string (optional)
     */
    async add(notificationUrl, expirationDate, clientState) {
        const postBody = {
            "expirationDateTime": expirationDate,
            "notificationUrl": notificationUrl,
            "resource": this.toUrl(),
        };
        if (clientState) {
            postBody.clientState = clientState;
        }
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(postBody));
        return { data, subscription: this.getById(data.id) };
    }
};
_Subscriptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("subscriptions")
], _Subscriptions);

const Subscriptions = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Subscriptions);
class _Subscription extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    /**
     * Renews this webhook subscription
     *
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months, optional)
     * @param notificationUrl The url to receive the notifications (optional)
     * @param clientState A client specific string (optional)
     */
    async update(expirationDate, notificationUrl, clientState) {
        const postBody = {};
        if (expirationDate) {
            postBody.expirationDateTime = expirationDate;
        }
        if (notificationUrl) {
            postBody.notificationUrl = notificationUrl;
        }
        if (clientState) {
            postBody.clientState = clientState;
        }
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPatch */ "n"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(postBody));
        return { data, subscription: this };
    }
    /**
     * Removes this webhook subscription
     *
     */
    delete() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spDelete */ "e"])(this);
    }
}
const Subscription = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Subscription);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "NCg5":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/site-scripts/web.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "b9JD");



_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getSiteScript = async function (extractInfo) {
    const info = await this.select("Url")();
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SiteScripts */ "e"])(this.toUrl(), "").using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* AssignFrom */ "e"])(this)).getSiteScriptFromWeb(info.Url, extractInfo);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "NTTg":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/items/list.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "3DT9");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "items", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Items */ "t"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "NqRq":
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/effects/DefaultEffects.js ***!
  \********************************************************************/
/*! exports provided: DefaultEffects */
/*! exports used: DefaultEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DefaultEffects; });
/* harmony import */ var _FluentDepths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentDepths */ "50wY");

var DefaultEffects = {
    elevation4: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__[/* Depths */ "e"].depth4,
    elevation8: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__[/* Depths */ "e"].depth8,
    elevation16: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__[/* Depths */ "e"].depth16,
    elevation64: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__[/* Depths */ "e"].depth64,
    roundedCorner2: '2px',
    roundedCorner4: '4px',
    roundedCorner6: '6px',
};
//# sourceMappingURL=DefaultEffects.js.map

/***/ }),

/***/ "NqVQ":
/*!**************************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/utilities/makeSemanticColors.js ***!
  \**************************************************************************/
/*! exports provided: makeSemanticColors, getSemanticColors */
/*! exports used: getSemanticColors, makeSemanticColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return makeSemanticColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSemanticColors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

/** Generates all the semantic slot colors based on the theme so far
 * We'll use these as fallbacks for semantic slots that the passed in theme did not define.
 * The caller must still mix in the customized semantic slots at the end.
 */
function makeSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var semanticColors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({ primaryButtonBorder: 'transparent', errorText: !isInverted ? '#a4262c' : '#F1707B', messageText: !isInverted ? '#323130' : '#F3F2F1', messageLink: !isInverted ? '#005A9E' : '#6CB8F6', messageLinkHovered: !isInverted ? '#004578' : '#82C7FF', infoIcon: !isInverted ? '#605e5c' : '#C8C6C4', errorIcon: !isInverted ? '#A80000' : '#F1707B', blockingIcon: !isInverted ? '#FDE7E9' : '#442726', warningIcon: !isInverted ? '#797775' : '#C8C6C4', severeWarningIcon: !isInverted ? '#D83B01' : '#FCE100', successIcon: !isInverted ? '#107C10' : '#92C353', infoBackground: !isInverted ? '#f3f2f1' : '#323130', errorBackground: !isInverted ? '#FDE7E9' : '#442726', blockingBackground: !isInverted ? '#FDE7E9' : '#442726', warningBackground: !isInverted ? '#FFF4CE' : '#433519', severeWarningBackground: !isInverted ? '#FED9CC' : '#4F2A0F', successBackground: !isInverted ? '#DFF6DD' : '#393D1B', 
        // deprecated
        warningHighlight: !isInverted ? '#ffb900' : '#fff100', successText: !isInverted ? '#107C10' : '#92c353' }, s);
    var fullSemanticColors = getSemanticColors(p, e, semanticColors, isInverted);
    return _fixDeprecatedSlots(fullSemanticColors, depComments);
}
/**
 * Map partial platte and effects to partial semantic colors.
 */
function getSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var result = {};
    // map palette
    var _a = p || {}, white = _a.white, black = _a.black, themePrimary = _a.themePrimary, themeDark = _a.themeDark, themeDarker = _a.themeDarker, themeDarkAlt = _a.themeDarkAlt, themeLighter = _a.themeLighter, neutralLight = _a.neutralLight, neutralLighter = _a.neutralLighter, neutralDark = _a.neutralDark, neutralQuaternary = _a.neutralQuaternary, neutralQuaternaryAlt = _a.neutralQuaternaryAlt, neutralPrimary = _a.neutralPrimary, neutralSecondary = _a.neutralSecondary, neutralSecondaryAlt = _a.neutralSecondaryAlt, neutralTertiary = _a.neutralTertiary, neutralTertiaryAlt = _a.neutralTertiaryAlt, neutralLighterAlt = _a.neutralLighterAlt, accent = _a.accent;
    if (white) {
        result.bodyBackground = white;
        result.bodyFrameBackground = white;
        result.accentButtonText = white;
        result.buttonBackground = white;
        result.primaryButtonText = white;
        result.primaryButtonTextHovered = white;
        result.primaryButtonTextPressed = white;
        result.inputBackground = white;
        result.inputForegroundChecked = white;
        result.listBackground = white;
        result.menuBackground = white;
        result.cardStandoutBackground = white;
    }
    if (black) {
        result.bodyTextChecked = black;
        result.buttonTextCheckedHovered = black;
    }
    if (themePrimary) {
        result.link = themePrimary;
        result.primaryButtonBackground = themePrimary;
        result.inputBackgroundChecked = themePrimary;
        result.inputIcon = themePrimary;
        result.inputFocusBorderAlt = themePrimary;
        result.menuIcon = themePrimary;
        result.menuHeader = themePrimary;
        result.accentButtonBackground = themePrimary;
    }
    if (themeDark) {
        result.primaryButtonBackgroundPressed = themeDark;
        result.inputBackgroundCheckedHovered = themeDark;
        result.inputIconHovered = themeDark;
    }
    if (themeDarker) {
        result.linkHovered = themeDarker;
    }
    if (themeDarkAlt) {
        result.primaryButtonBackgroundHovered = themeDarkAlt;
    }
    if (themeLighter) {
        result.inputPlaceholderBackgroundChecked = themeLighter;
    }
    if (neutralLight) {
        result.bodyBackgroundChecked = neutralLight;
        result.bodyFrameDivider = neutralLight;
        result.bodyDivider = neutralLight;
        result.variantBorder = neutralLight;
        result.buttonBackgroundCheckedHovered = neutralLight;
        result.buttonBackgroundPressed = neutralLight;
        result.listItemBackgroundChecked = neutralLight;
        result.listHeaderBackgroundPressed = neutralLight;
        result.menuItemBackgroundPressed = neutralLight;
        // eslint-disable-next-line deprecation/deprecation
        result.menuItemBackgroundChecked = neutralLight;
    }
    if (neutralLighter) {
        result.bodyBackgroundHovered = neutralLighter;
        result.buttonBackgroundHovered = neutralLighter;
        result.buttonBackgroundDisabled = neutralLighter;
        result.buttonBorderDisabled = neutralLighter;
        result.primaryButtonBackgroundDisabled = neutralLighter;
        result.disabledBackground = neutralLighter;
        result.listItemBackgroundHovered = neutralLighter;
        result.listHeaderBackgroundHovered = neutralLighter;
        result.menuItemBackgroundHovered = neutralLighter;
    }
    if (neutralQuaternary) {
        result.primaryButtonTextDisabled = neutralQuaternary;
        result.disabledSubtext = neutralQuaternary;
    }
    if (neutralQuaternaryAlt) {
        result.listItemBackgroundCheckedHovered = neutralQuaternaryAlt;
    }
    if (neutralTertiary) {
        result.disabledBodyText = neutralTertiary;
        result.variantBorderHovered = (s === null || s === void 0 ? void 0 : s.variantBorderHovered) || neutralTertiary;
        result.buttonTextDisabled = neutralTertiary;
        result.inputIconDisabled = neutralTertiary;
        result.disabledText = neutralTertiary;
    }
    if (neutralPrimary) {
        result.bodyText = neutralPrimary;
        result.actionLink = neutralPrimary;
        result.buttonText = neutralPrimary;
        result.inputBorderHovered = neutralPrimary;
        result.inputText = neutralPrimary;
        result.listText = neutralPrimary;
        result.menuItemText = neutralPrimary;
    }
    if (neutralLighterAlt) {
        result.bodyStandoutBackground = neutralLighterAlt;
        result.defaultStateBackground = neutralLighterAlt;
    }
    if (neutralDark) {
        result.actionLinkHovered = neutralDark;
        result.buttonTextHovered = neutralDark;
        result.buttonTextChecked = neutralDark;
        result.buttonTextPressed = neutralDark;
        result.inputTextHovered = neutralDark;
        result.menuItemTextHovered = neutralDark;
    }
    if (neutralSecondary) {
        result.bodySubtext = neutralSecondary;
        result.focusBorder = neutralSecondary;
        result.inputBorder = neutralSecondary;
        result.smallInputBorder = neutralSecondary;
        result.inputPlaceholderText = neutralSecondary;
    }
    if (neutralSecondaryAlt) {
        result.buttonBorder = neutralSecondaryAlt;
    }
    if (neutralTertiaryAlt) {
        result.disabledBodySubtext = neutralTertiaryAlt;
        result.disabledBorder = neutralTertiaryAlt;
        result.buttonBackgroundChecked = neutralTertiaryAlt;
        result.menuDivider = neutralTertiaryAlt;
    }
    if (accent) {
        result.accentButtonBackground = accent;
    }
    // map effects
    if (e === null || e === void 0 ? void 0 : e.elevation4) {
        result.cardShadow = e.elevation4;
    }
    if (!isInverted && (e === null || e === void 0 ? void 0 : e.elevation8)) {
        result.cardShadowHovered = e.elevation8;
    }
    else if (result.variantBorderHovered) {
        result.cardShadowHovered = '0 0 1px ' + result.variantBorderHovered;
    }
    result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({}, result), s);
    return result;
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    /* eslint-disable deprecation/deprecation */
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    s.warningHighlight += dep;
    s.warningText = s.messageText + dep;
    s.successText += dep;
    /* eslint-enable deprecation/deprecation */
    return s;
}
//# sourceMappingURL=makeSemanticColors.js.map

/***/ }),

/***/ "NuLX":
/*!****************************************!*\
  !*** ./node_modules/@pnp/core/util.js ***!
  \****************************************/
/*! exports provided: dateAdd, combine, getRandomString, getGUID, isFunc, isArray, isUrlAbsolute, stringIsNullOrEmpty, objectDefinedNotNull, jsS, hOP, parseToAtob, getHashCode, delay */
/*! exports used: combine, dateAdd, delay, getGUID, getHashCode, hOP, isArray, isFunc, isUrlAbsolute, jsS, objectDefinedNotNull, stringIsNullOrEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return dateAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return combine; });
/* unused harmony export getRandomString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isUrlAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return stringIsNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return objectDefinedNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return jsS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return hOP; });
/* unused harmony export parseToAtob */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getHashCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return delay; });
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    let ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine(...paths) {
    return paths
        .filter(path => !stringIsNullOrEmpty(path))
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    const text = new Array(chars);
    for (let i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* eslint-disable no-bitwise */
function getGUID() {
    let d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* eslint-enable no-bitwise */
/**
 * Determines if a given value is a function
 *
 * @param f The thing to test for functionness
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunc(f) {
    return typeof f === "function";
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray(array);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return typeof s === "undefined" || s === null || s.length < 1;
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * @returns validates and returns a valid atob conversion
*/
function parseToAtob(str) {
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
    try {
        // test if str has been JSON.stringified
        const parsed = JSON.parse(str);
        if (base64Regex.test(parsed)) {
            return atob(parsed);
        }
        return null;
    }
    catch (err) {
        // Not a valid JSON string, check if it's a standalone Base64 string
        return base64Regex.test(str) ? atob(str) : null;
    }
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
/* eslint-disable no-bitwise */
function getHashCode(s) {
    let hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (let i = 0; i < s.length; i++) {
        const chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/* eslint-enable no-bitwise */
/**
 * Waits a specified number of milliseconds before resolving
 *
 * @param ms Number of ms to wait
 */
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "NxAp":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/comments/item.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "wMck");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");







Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"], "comments", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Comments */ "e"]);
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.getLikedBy = function () {
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_3__[/* spPost */ "a"])(Object(_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Item */ "e"])(this, "likedBy"));
};
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.like = async function () {
    const itemInfo = await this.getParentInfos();
    const baseUrl = Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_4__[/* extractWebUrl */ "e"])(this.toUrl());
    const reputationUrl = "_api/Microsoft.Office.Server.ReputationModel.Reputation.SetLike(listID=@a1,itemID=@a2,like=@a3)";
    const likeUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_5__[/* combine */ "s"])(baseUrl, reputationUrl) + `?@a1='{${itemInfo.ParentList.Id}}'&@a2='${itemInfo.Item.Id}'&@a3=true`;
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_3__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_6__[/* SPQueryable */ "n"])([this, likeUrl]));
};
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.unlike = async function () {
    const itemInfo = await this.getParentInfos();
    const baseUrl = Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_4__[/* extractWebUrl */ "e"])(this.toUrl());
    const reputationUrl = "_api/Microsoft.Office.Server.ReputationModel.Reputation.SetLike(listID=@a1,itemID=@a2,like=@a3)";
    const likeUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_5__[/* combine */ "s"])(baseUrl, reputationUrl) + `?@a1='{${itemInfo.ParentList.Id}}'&@a2='${itemInfo.Item.Id}'&@a3=false`;
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_3__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_6__[/* SPQueryable */ "n"])([this, likeUrl]));
};
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.getLikedByInformation = function () {
    return Object(_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Item */ "e"])(this, "likedByInformation").expand("likedby")();
};
_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"].prototype.rate = async function (value) {
    const itemInfo = await this.getParentInfos();
    const baseUrl = Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_4__[/* extractWebUrl */ "e"])(this.toUrl());
    const reputationUrl = "_api/Microsoft.Office.Server.ReputationModel.Reputation.SetRating(listID=@a1,itemID=@a2,rating=@a3)";
    const rateUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_5__[/* combine */ "s"])(baseUrl, reputationUrl) + `?@a1='{${itemInfo.ParentList.Id}}'&@a2='${itemInfo.Item.Id}'&@a3=${value}`;
    return Object(_operations_js__WEBPACK_IMPORTED_MODULE_3__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_6__[/* SPQueryable */ "n"])([this, rateUrl]));
};
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "O1zE":
/*!*******************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js ***!
  \*******************************************************************/
/*! exports provided: mergeStyleSets, mergeCssSets */
/*! exports used: mergeCssSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeStyleSets */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mergeCssSets; });
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concatStyleSets */ "VD3q");
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractStyleParts */ "gN5f");
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleOptionsState */ "Z+an");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleToClassName */ "qQFQ");




/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
function mergeStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    return mergeCssSets(styleSets, Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__[/* getStyleOptions */ "e"])());
}
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
function mergeCssSets(styleSets, options) {
    var classNameSet = { subComponentStyles: {} };
    var styleSet = styleSets[0];
    if (!styleSet && styleSets.length <= 1) {
        return { subComponentStyles: {} };
    }
    var concatenatedStyleSet = _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__[/* concatStyleSets */ "e"].apply(void 0, styleSets);
    var registrations = [];
    for (var styleSetArea in concatenatedStyleSet) {
        if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
            if (styleSetArea === 'subComponentStyles') {
                classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || {};
                continue;
            }
            var styles = concatenatedStyleSet[styleSetArea];
            var _a = Object(_extractStyleParts__WEBPACK_IMPORTED_MODULE_1__[/* extractStyleParts */ "e"])(styles), classes = _a.classes, objects = _a.objects;
            if (objects === null || objects === void 0 ? void 0 : objects.length) {
                var registration = Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_3__[/* styleToRegistration */ "n"])(options || {}, { displayName: styleSetArea }, objects);
                if (registration) {
                    registrations.push(registration);
                    // FIXME: classNameSet invalid types - exposed in TS 4.5 - cast needed
                    classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
                }
            }
            else {
                // FIXME: classNameSet invalid types - exposed in TS 4.5 - cast needed
                classNameSet[styleSetArea] = classes.join(' ');
            }
        }
    }
    for (var _i = 0, registrations_1 = registrations; _i < registrations_1.length; _i++) {
        var registration = registrations_1[_i];
        if (registration) {
            Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_3__[/* applyRegistration */ "e"])(registration, options === null || options === void 0 ? void 0 : options.specificityMultiplier);
        }
    }
    return classNameSet;
}
//# sourceMappingURL=mergeStyleSets.js.map

/***/ }),

/***/ "OWTB":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spfx.js ***!
  \************************************************/
/*! exports provided: SPFxToken, SPFx */
/*! exports used: SPFx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SPFxToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SPFx; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ "qZw7");
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ "GfGO");




function SPFxToken(context) {
    return (instance) => {
        instance.on.auth.replace(async function (url, init) {
            const provider = await context.aadTokenProviderFactory.getTokenProvider();
            const token = await provider.getToken(`${url.protocol}//${url.hostname}`);
            // eslint-disable-next-line @typescript-eslint/dot-notation
            init.headers["Authorization"] = `Bearer ${token}`;
            return [url, init];
        });
        return instance;
    };
}
function SPFx(context) {
    return (instance) => {
        instance.using(Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__[/* DefaultHeaders */ "e"])(), Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__[/* DefaultInit */ "t"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* BrowserFetchWithRetry */ "t"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* DefaultParse */ "s"])(), 
        // remove SPFx Token in default due to issues #2570, #2571
        // SPFxToken(context),
        Object(_request_digest_js__WEBPACK_IMPORTED_MODULE_3__[/* RequestDigest */ "e"])((url) => {
            var _a, _b, _c;
            const sameWeb = (new RegExp(`^${Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(context.pageContext.web.absoluteUrl, "/_api")}`, "i")).test(url);
            if (sameWeb && ((_b = (_a = context === null || context === void 0 ? void 0 : context.pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b.formDigestValue)) {
                const creationDateFromDigest = new Date(context.pageContext.legacyPageContext.formDigestValue.split(",")[1]);
                // account for page lifetime in timeout #2304 & others
                // account for tab sleep #2550
                return {
                    value: context.pageContext.legacyPageContext.formDigestValue,
                    expiration: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* dateAdd */ "c"])(creationDateFromDigest, "second", ((_c = context.pageContext.legacyPageContext) === null || _c === void 0 ? void 0 : _c.formDigestTimeoutSeconds) - 15 || 1585),
                };
            }
        }));
        // we want to fix up the url first
        instance.on.pre.prepend(async (url, init, result) => {
            if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "h"])(url)) {
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(context.pageContext.web.absoluteUrl, url);
            }
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=spfx.js.map

/***/ }),

/***/ "OXUt":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/extract-web-url.js ***!
  \*******************************************************/
/*! exports provided: extractWebUrl */
/*! exports used: extractWebUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return extractWebUrl; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

function extractWebUrl(candidateUrl) {
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* stringIsNullOrEmpty */ "I"])(candidateUrl)) {
        return "";
    }
    let index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substring(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
//# sourceMappingURL=extract-web-url.js.map

/***/ }),

/***/ "OreJ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/customizations/useCustomizationSettings.js ***!
  \*****************************************************************************************/
/*! exports provided: useCustomizationSettings */
/*! exports used: useCustomizationSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useCustomizationSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customizations */ "8GdW");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomizerContext */ "g3rt");



/**
 * Hook to get Customizations settings from Customizations singleton or CustomizerContext.
 * It will trigger component state update on settings change observed.
 */
function useCustomizationSettings(properties, scopeName) {
    var forceUpdate = useForceUpdate();
    var customizations = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_2__[/* CustomizerContext */ "e"]).customizations;
    var inCustomizerContext = customizations.inCustomizerContext;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (!inCustomizerContext) {
            _Customizations__WEBPACK_IMPORTED_MODULE_1__[/* Customizations */ "e"].observe(forceUpdate);
        }
        return function () {
            if (!inCustomizerContext) {
                _Customizations__WEBPACK_IMPORTED_MODULE_1__[/* Customizations */ "e"].unobserve(forceUpdate);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- exclude forceUpdate
    }, [inCustomizerContext]);
    return _Customizations__WEBPACK_IMPORTED_MODULE_1__[/* Customizations */ "e"].getSettings(properties, scopeName, customizations);
}
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), setValue = _a[1];
    return function () { return setValue(function (value) { return ++value; }); };
}
//# sourceMappingURL=useCustomizationSettings.js.map

/***/ }),

/***/ "P6NM":
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/column-defaults/folder.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _lists_web_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lists/web.js */ "Bwa7");
/* harmony import */ var _folders_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../folders/types.js */ "4tXH");





_folders_types_js__WEBPACK_IMPORTED_MODULE_4__[/* _Folder */ "n"].prototype.getDefaultColumnValues = async function () {
    const folderProps = await Object(_folders_types_js__WEBPACK_IMPORTED_MODULE_4__[/* Folder */ "e"])(this, "Properties").select("vti_x005f_listname")();
    const { ServerRelativePath: serRelPath } = await this.select("ServerRelativePath")();
    const web = Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__[/* Web */ "e"])([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__[/* extractWebUrl */ "e"])(Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_0__[/* odataUrlFrom */ "e"])(folderProps))]);
    const docLib = web.lists.getById(folderProps.vti_x005f_listname);
    // and we return the defaults associated with this folder's server relative path only
    // if you want all the defaults use list.getDefaultColumnValues()
    return (await docLib.getDefaultColumnValues()).filter(v => v.path.toLowerCase() === serRelPath.DecodedUrl.toLowerCase());
};
_folders_types_js__WEBPACK_IMPORTED_MODULE_4__[/* _Folder */ "n"].prototype.setDefaultColumnValues = async function (fieldDefaults, merge = true) {
    // we start by figuring out where we are
    const folderProps = await Object(_folders_types_js__WEBPACK_IMPORTED_MODULE_4__[/* Folder */ "e"])(this, "Properties").select("vti_x005f_listname")();
    // now we create a web, list and batch to get some info we need
    const web = Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__[/* Web */ "e"])([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__[/* extractWebUrl */ "e"])(Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_0__[/* odataUrlFrom */ "e"])(folderProps))]);
    const docLib = web.lists.getById(folderProps.vti_x005f_listname);
    // we need the proper folder path
    const folderPath = (await this.select("ServerRelativePath")()).ServerRelativePath.DecodedUrl;
    // at this point we should have all the defaults to update
    // and we need to get all the defaults to update the entire doc
    const existingDefaults = await docLib.getDefaultColumnValues();
    // we filter all defaults to remove any associated with this folder if merge is false
    const filteredExistingDefaults = merge ? existingDefaults : existingDefaults.filter(f => f.path !== folderPath);
    // we update / add any new defaults from those passed to this method
    fieldDefaults.forEach(d => {
        const existing = filteredExistingDefaults.find(ed => ed.name === d.name && ed.path === folderPath);
        if (existing) {
            existing.value = d.value;
        }
        else {
            filteredExistingDefaults.push({
                name: d.name,
                path: folderPath,
                value: d.value,
            });
        }
    });
    // after this operation filteredExistingDefaults should contain all the value we want to write to the file
    await docLib.setDefaultColumnValues(filteredExistingDefaults);
};
_folders_types_js__WEBPACK_IMPORTED_MODULE_4__[/* _Folder */ "n"].prototype.clearDefaultColumnValues = async function () {
    await this.setDefaultColumnValues([], false);
};
//# sourceMappingURL=folder.js.map

/***/ }),

/***/ "PcVi":
/*!*******************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/colors/DefaultPalette.js ***!
  \*******************************************************************/
/*! exports provided: DefaultPalette */
/*! exports used: DefaultPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DefaultPalette; });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames
// by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#201f1e',
    neutralPrimary: '#323130',
    neutralPrimaryAlt: '#3b3a39',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralTertiary: '#a19f9d',
    neutralTertiaryAlt: '#c8c6c4',
    neutralQuaternary: '#d2d0ce',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralLight: '#edebe9',
    neutralLighter: '#f3f2f1',
    neutralLighterAlt: '#faf9f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a4262c',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};
//# sourceMappingURL=DefaultPalette.js.map

/***/ }),

/***/ "PmFa":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/related-items/types.js ***!
  \*****************************************************/
/*! exports provided: _RelatedItemManager, RelatedItemManager */
/*! exports used: RelatedItemManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _RelatedItemManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RelatedItemManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");






let _RelatedItemManager = class _RelatedItemManager extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPQueryable */ "r"] {
    getRelatedItems(sourceListName, sourceItemId) {
        const query = RelatedItemManager(this);
        query.concat(".GetRelatedItems");
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(query, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    }
    getPageOneRelatedItems(sourceListName, sourceItemId) {
        const query = RelatedItemManager(this);
        query.concat(".GetPageOneRelatedItems");
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(query, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    }
    addSingleLink(sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemID, targetWebUrl, tryAddReverseLink = false) {
        const query = RelatedItemManager(this);
        query.concat(".AddSingleLink");
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(query, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            SourceWebUrl: sourceWebUrl,
            TargetItemID: targetItemID,
            TargetListName: targetListName,
            TargetWebUrl: targetWebUrl,
            TryAddReverseLink: tryAddReverseLink,
        }));
    }
    addSingleLinkToUrl(sourceListName, sourceItemId, targetItemUrl, tryAddReverseLink = false) {
        const query = RelatedItemManager(this);
        query.concat(".AddSingleLinkToUrl");
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(query, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            TargetItemUrl: targetItemUrl,
            TryAddReverseLink: tryAddReverseLink,
        }));
    }
    addSingleLinkFromUrl(sourceItemUrl, targetListName, targetItemId, tryAddReverseLink = false) {
        const query = RelatedItemManager(this);
        query.concat(".AddSingleLinkFromUrl");
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(query, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            SourceItemUrl: sourceItemUrl,
            TargetItemID: targetItemId,
            TargetListName: targetListName,
            TryAddReverseLink: tryAddReverseLink,
        }));
    }
    deleteSingleLink(sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemId, targetWebUrl, tryDeleteReverseLink = false) {
        const query = RelatedItemManager(this);
        query.concat(".DeleteSingleLink");
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(query, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            SourceWebUrl: sourceWebUrl,
            TargetItemID: targetItemId,
            TargetListName: targetListName,
            TargetWebUrl: targetWebUrl,
            TryDeleteReverseLink: tryDeleteReverseLink,
        }));
    }
};
_RelatedItemManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("_api/SP.RelatedItemManager")
], _RelatedItemManager);

const RelatedItemManager = (base) => {
    if (typeof base === "string") {
        return new _RelatedItemManager(Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__[/* extractWebUrl */ "e"])(base));
    }
    return new _RelatedItemManager([base, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__[/* extractWebUrl */ "e"])(base.toUrl())]);
};
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "S3gC":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/content-types/types.js ***!
  \*****************************************************/
/*! exports provided: _ContentTypes, ContentTypes, _ContentType, ContentType, _FieldLinks, FieldLinks, _FieldLink, FieldLink */
/*! exports used: ContentType, ContentTypes, _ContentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _ContentTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ContentTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ContentType; });
/* unused harmony export _FieldLinks */
/* unused harmony export FieldLinks */
/* unused harmony export _FieldLink */
/* unused harmony export FieldLink */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");





let _ContentTypes = class _ContentTypes extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
     * Adds an existing contenttype to a content type collection
     *
     * @param contentTypeId in the following format, for example: 0x010102
     */
    async addAvailableContentType(contentTypeId) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(ContentTypes(this, "addAvailableContentType"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({ "contentTypeId": contentTypeId }));
        return {
            contentType: this.getById(data.id),
            data: data,
        };
    }
    /**
     * Gets a ContentType by content type id
     * @param id The id of the content type to get, in the following format, for example: 0x010102
     */
    getById(id) {
        return ContentType(this).concat(`('${id}')`);
    }
    /**
     * Adds a new content type to the collection
     *
     * @param id The desired content type id for the new content type (also determines the parent
     *   content type)
     * @param name The name of the content type
     * @param description The description of the content type
     * @param group The group in which to add the content type
     * @param additionalSettings Any additional settings to provide when creating the content type
     *
     */
    async add(id, name, description = "", group = "Custom Content Types", additionalSettings = {}) {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({
            Description: description,
            Group: group,
            Id: { StringValue: id },
            Name: name,
            ...additionalSettings,
        });
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(this, postBody);
        return { contentType: this.getById(data.id), data };
    }
};
_ContentTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("contenttypes")
], _ContentTypes);

const ContentTypes = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_ContentTypes);
class _ContentType extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* deleteable */ "o"])();
    }
    /**
     * Updates this list instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    async update(properties) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])(properties));
    }
    /**
     * Gets the column (also known as field) references in the content type.
     */
    get fieldLinks() {
        return FieldLinks(this);
    }
    /**
     * Gets a value that specifies the collection of fields for the content type.
     */
    get fields() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPCollection */ "e"])(this, "fields");
    }
    /**
     * Gets the parent content type of the content type.
     */
    get parent() {
        return ContentType(this, "parent");
    }
    /**
     * Gets a value that specifies the collection of workflow associations for the content type.
     */
    get workflowAssociations() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPCollection */ "e"])(this, "workflowAssociations");
    }
}
const ContentType = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_ContentType);
let _FieldLinks = class _FieldLinks extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
    *  Gets a FieldLink by GUID id
    *
    * @param id The GUID id of the field link
    */
    getById(id) {
        return FieldLink(this).concat(`(guid'${id}')`);
    }
};
_FieldLinks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("fieldlinks")
], _FieldLinks);

const FieldLinks = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_FieldLinks);
class _FieldLink extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
}
const FieldLink = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_FieldLink);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "SPHc":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/files/web.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "qfcF");



_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* fileFromServerRelativePath */ "a"])(this, fileRelativeUrl);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getFileById = function (uniqueId) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* File */ "e"])(this, `getFileById('${uniqueId}')`);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getFileByUrl = function (fileUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* File */ "e"])(this, `getFileByUrl('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_0__[/* encodePath */ "e"])("!@p1::" + fileUrl)}')`);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "Sdn1":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/hubsites/index.js ***!
  \************************************************/
/*! exports provided: HubSite, HubSites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "WqOe");
/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site.js */ "EyfK");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web.js */ "37pO");





Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype, "hubSites", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* HubSites */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "T2j4":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/sp/regional-settings/funcs.js ***!
  \*********************************************************/
/*! exports provided: getValueForUICultureBinder */
/*! exports used: getValueForUICultureBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getValueForUICultureBinder; });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");



function getValueForUICultureBinder(propName) {
    return function (cultureName) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_1__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* SPQueryable */ "n"])(this, `${propName}/getValueForUICulture`), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({ cultureName }));
    };
}
//# sourceMappingURL=funcs.js.map

/***/ }),

/***/ "T90h":
/*!*********************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/fonts/DefaultFontStyles.js ***!
  \*********************************************************************/
/*! exports provided: DefaultFontStyles, registerDefaultFontFaces */
/*! exports used: DefaultFontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DefaultFontStyles; });
/* unused harmony export registerDefaultFontFaces */
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/merge-styles */ "CWBB");
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FluentFonts */ "2GE3");
/* harmony import */ var _createFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFontStyles */ "idU1");
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/utilities */ "zlmH");
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/utilities */ "pyJV");




// Default urls.
var DefaultBaseUrl = 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets';
// Standard font styling.
var DefaultFontStyles = Object(_createFontStyles__WEBPACK_IMPORTED_MODULE_2__[/* createFontStyles */ "e"])(Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__[/* getLanguage */ "e"])());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'".concat(fontFamily, "'");
    var localFontSrc = localFontName !== undefined ? "local('".concat(localFontName, "'),") : '';
    Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__[/* fontFace */ "e"])({
        fontFamily: fontFamily,
        src: localFontSrc + "url('".concat(url, ".woff2') format('woff2'),") + "url('".concat(url, ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = "".concat(baseUrl, "/").concat(cdnFolder, "/").concat(cdnFontName);
    _registerFontFace(fontFamily, urlBase + '-light', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "t"].light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "t"].semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "t"].regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "t"].semibold, localFontName && localFontName + ' SemiBold');
    _registerFontFace(fontFamily, urlBase + '-bold', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "t"].bold, localFontName && localFontName + ' Bold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = "".concat(baseUrl, "/fonts");
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontFamilies */ "n"].Selawik, 'selawik', 'selawik');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].Armenian, 'segoeui-armenian');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* LocalizedFontNames */ "a"].Georgian, 'segoeui-georgian');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', "".concat(fontUrl, "/leelawadeeui-thai/leelawadeeui-semilight"), _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "t"].light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', "".concat(fontUrl, "/leelawadeeui-thai/leelawadeeui-bold"), _FluentFonts__WEBPACK_IMPORTED_MODULE_1__[/* FontWeights */ "t"].semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var _a, _b;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var fabricConfig = (_a = Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__[/* getWindow */ "e"])()) === null || _a === void 0 ? void 0 : _a.FabricConfig;
    return (_b = fabricConfig === null || fabricConfig === void 0 ? void 0 : fabricConfig.fontBaseUrl) !== null && _b !== void 0 ? _b : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());
//# sourceMappingURL=DefaultFontStyles.js.map

/***/ }),

/***/ "TUji":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/related-items/index.js ***!
  \*****************************************************/
/*! exports provided: RelatedItemManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "Lmvq");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "PmFa");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Tahi":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/styles/hiddenContentStyle.js ***!
  \*********************************************************************************/
/*! exports provided: hiddenContentStyle */
/*! exports used: hiddenContentStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hiddenContentStyle; });
var hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
};
//# sourceMappingURL=hiddenContentStyle.js.map

/***/ }),

/***/ "Tw14":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/node_modules/@microsoft/load-themed-styles/lib-es6/index.js ***!
  \************************************************************************************************************/
/*! exports provided: loadStyles, configureLoadStyles, configureRunMode, flush, loadTheme, clearStyles, detokenize, splitStyles */
/*! exports used: loadTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export loadStyles */
/* unused harmony export configureLoadStyles */
/* unused harmony export configureRunMode */
/* unused harmony export flush */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loadTheme; });
/* unused harmony export clearStyles */
/* unused harmony export detokenize */
/* unused harmony export splitStyles */
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* Mode.sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* Mode.async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* ClearStyleOptions.all */; }
    if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* ClearStyleOptions.onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "UK2s":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/operations.js ***!
  \********************************************/
/*! exports provided: spGet, spPost, spPostMerge, spPostDelete, spPostDeleteETag, spDelete, spPatch */
/*! exports used: spDelete, spGet, spPatch, spPost, spPostDelete, spPostDeleteETag, spPostMerge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return spGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return spPostMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return spPostDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return spPostDeleteETag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return spDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return spPatch; });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");

const spGet = (o, init) => {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* op */ "S"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* get */ "g"], init);
};
const spPost = (o, init) => Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* op */ "S"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* post */ "C"], init);
const spPostMerge = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers, "X-HTTP-Method": "MERGE" };
    return spPost(o, init);
};
const spPostDelete = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers || {}, "X-HTTP-Method": "DELETE" };
    return spPost(o, init);
};
const spPostDeleteETag = (o, init, eTag = "*") => {
    init = init || {};
    init.headers = { ...init.headers || {}, "IF-Match": eTag };
    return spPostDelete(o, init);
};
const spDelete = (o, init) => Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* op */ "S"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* del */ "b"], init);
const spPatch = (o, init) => Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* op */ "S"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* patch */ "x"], init);
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "UKGb":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/index.js ***!
  \***************************************/
/*! exports provided: spInvokableFactory, _SPQueryable, SPQueryable, _SPCollection, SPCollection, _SPInstance, SPInstance, deleteable, deleteableWithETag, defaultPath, spGet, spPost, spPostMerge, spPostDelete, spPostDeleteETag, spDelete, spPatch, SPFI, spfi, emptyGuid, PrincipalType, PrincipalSource, PageType, extractWebUrl, containsInvalidFileFolderChars, stripInvalidFileFolderChars, odataUrlFrom, toResourcePath, encodePath, DefaultInit, DefaultHeaders, Telemetry, RequestDigest, SPBrowser, SPFxToken, SPFx */
/*! exports used: SPCollection, SPFx, extractWebUrl, spfi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ "F4qD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "UK2s");
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fi.js */ "v6VW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _fi_js__WEBPACK_IMPORTED_MODULE_3__["t"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "tCQJ");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/extract-web-url.js */ "OXUt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__["e"]; });

/* harmony import */ var _utils_file_names_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/file-names.js */ "YFzv");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/to-resource-path.js */ "G6u6");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/encode-path-str.js */ "vbtm");
/* harmony import */ var _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/defaults.js */ "qZw7");
/* harmony import */ var _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./behaviors/telemetry.js */ "nikm");
/* harmony import */ var _behaviors_request_digest_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./behaviors/request-digest.js */ "GfGO");
/* harmony import */ var _behaviors_spbrowser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./behaviors/spbrowser.js */ "Wjh3");
/* harmony import */ var _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./behaviors/spfx.js */ "OWTB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_14__["e"]; });
















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "UKI9":
/*!******************************************************************!*\
  !*** ./node_modules/@pnp/sp/publishing-sitepageservice/types.js ***!
  \******************************************************************/
/*! exports provided: _SitePageService, SitePageService */
/*! exports used: SitePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _SitePageService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SitePageService; });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");

class _SitePageService extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* _SPInstance */ "i"] {
    constructor(baseUrl, path = "_api/SP.Publishing.SitePageService") {
        super(baseUrl, path);
    }
    /**
    * Gets current user unified group memberships
    */
    getCurrentUserMemberships() {
        const q = SitePageService(this, null);
        q.concat(".GetCurrentUserMemberships");
        return q();
    }
}
const SitePageService = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* spInvokableFactory */ "c"])(_SitePageService);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "UPqE":
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/clientside-pages/types.js ***!
  \********************************************************/
/*! exports provided: PromotedState, _ClientsidePage, ClientsidePageFromFile, CreateClientsidePage, CanvasSection, CanvasColumn, ColumnControl, ClientsideText, ClientsideWebpart */
/*! exports used: ClientsidePageFromFile, ClientsideWebpart, CreateClientsidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PromotedState */
/* unused harmony export _ClientsidePage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ClientsidePageFromFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return CreateClientsidePage; });
/* unused harmony export CanvasSection */
/* unused harmony export CanvasColumn */
/* unused harmony export ColumnControl */
/* unused harmony export ClientsideText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ClientsideWebpart; });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _sites_types_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sites/types.js */ "ilAS");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./funcs.js */ "ld+d");
/* harmony import */ var _files_web_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../files/web.js */ "SPHc");
/* harmony import */ var _comments_item_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../comments/item.js */ "NxAp");
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../batching.js */ "pAcn");














/**
 * Page promotion state
 */
var PromotedState;
(function (PromotedState) {
    /**
     * Regular client side page
     */
    PromotedState[PromotedState["NotPromoted"] = 0] = "NotPromoted";
    /**
     * Page that will be promoted as news article after publishing
     */
    PromotedState[PromotedState["PromoteOnPublish"] = 1] = "PromoteOnPublish";
    /**
     * Page that is promoted as news article
     */
    PromotedState[PromotedState["Promoted"] = 2] = "Promoted";
})(PromotedState || (PromotedState = {}));
/**
 * Represents the data and methods associated with client side "modern" pages
 */
class _ClientsidePage extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPQueryable */ "r"] {
    /**
     * PLEASE DON'T USE THIS CONSTRUCTOR DIRECTLY, thank you 🐇
     */
    constructor(base, path, json, noInit = false, sections = [], commentsDisabled = false) {
        super(base, path);
        this.json = json;
        this.sections = sections;
        this.commentsDisabled = commentsDisabled;
        this._bannerImageDirty = false;
        this._bannerImageThumbnailUrlDirty = false;
        this.parentUrl = "";
        // we need to rebase the url to always be the web url plus the path
        // Queryable handles the correct parsing of the SPInit, and we pull
        // the weburl and combine with the supplied path, which is unique
        // to how ClientsitePages works. This class is a special case.
        this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "s"])(Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_7__[/* extractWebUrl */ "e"])(this._url), path);
        // set a default page settings slice
        this._pageSettings = { controlType: 0, pageSettingsSlice: { isDefaultDescription: true, isDefaultThumbnail: true } };
        // set a default layout part
        this._layoutPart = _ClientsidePage.getDefaultLayoutPart();
        if (typeof json !== "undefined" && !noInit) {
            this.fromJSON(json);
        }
    }
    static getDefaultLayoutPart() {
        return {
            dataVersion: "1.4",
            description: "Title Region Description",
            id: "cbe7b0a9-3504-44dd-a3a3-0e5cacd07788",
            instanceId: "cbe7b0a9-3504-44dd-a3a3-0e5cacd07788",
            properties: {
                authorByline: [],
                authors: [],
                layoutType: "FullWidthImage",
                showPublishDate: false,
                showTopicHeader: false,
                textAlignment: "Left",
                title: "",
                topicHeader: "",
                enableGradientEffect: true,
            },
            reservedHeight: 280,
            serverProcessedContent: { htmlStrings: {}, searchablePlainTexts: {}, imageSources: {}, links: {} },
            title: "Title area",
        };
    }
    get pageLayout() {
        return this.json.PageLayoutType;
    }
    set pageLayout(value) {
        this.json.PageLayoutType = value;
    }
    get bannerImageUrl() {
        return this.json.BannerImageUrl;
    }
    set bannerImageUrl(value) {
        this.setBannerImage(value);
    }
    get thumbnailUrl() {
        return this._pageSettings.pageSettingsSlice.isDefaultThumbnail ? this.json.BannerImageUrl : this.json.BannerThumbnailUrl;
    }
    set thumbnailUrl(value) {
        this.json.BannerThumbnailUrl = value;
        this._bannerImageThumbnailUrlDirty = true;
        this._pageSettings.pageSettingsSlice.isDefaultThumbnail = false;
    }
    get topicHeader() {
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "y"])(this.json.TopicHeader) ? this.json.TopicHeader : "";
    }
    set topicHeader(value) {
        this.json.TopicHeader = value;
        this._layoutPart.properties.topicHeader = value;
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* stringIsNullOrEmpty */ "I"])(value)) {
            this.showTopicHeader = false;
        }
    }
    get title() {
        return this.json.Title;
    }
    set title(value) {
        this.json.Title = value;
        this._layoutPart.properties.title = value;
    }
    get reservedHeight() {
        return this._layoutPart.reservedHeight;
    }
    set reservedHeight(value) {
        this._layoutPart.reservedHeight = value;
    }
    get description() {
        return this.json.Description;
    }
    set description(value) {
        if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* stringIsNullOrEmpty */ "I"])(value) && value.length > 255) {
            throw Error("Modern Page description is limited to 255 chars.");
        }
        this.json.Description = value;
        if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._pageSettings, "htmlAttributes")) {
            this._pageSettings.htmlAttributes = [];
        }
        if (this._pageSettings.htmlAttributes.indexOf("modifiedDescription") < 0) {
            this._pageSettings.htmlAttributes.push("modifiedDescription");
        }
        this._pageSettings.pageSettingsSlice.isDefaultDescription = false;
    }
    get layoutType() {
        return this._layoutPart.properties.layoutType;
    }
    set layoutType(value) {
        this._layoutPart.properties.layoutType = value;
    }
    get headerTextAlignment() {
        return this._layoutPart.properties.textAlignment;
    }
    set headerTextAlignment(value) {
        this._layoutPart.properties.textAlignment = value;
    }
    get showTopicHeader() {
        return this._layoutPart.properties.showTopicHeader;
    }
    set showTopicHeader(value) {
        this._layoutPart.properties.showTopicHeader = value;
    }
    get showPublishDate() {
        return this._layoutPart.properties.showPublishDate;
    }
    set showPublishDate(value) {
        this._layoutPart.properties.showPublishDate = value;
    }
    get hasVerticalSection() {
        return this.sections.findIndex(s => s.layoutIndex === 2) > -1;
    }
    get authorByLine() {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "m"])(this._layoutPart.properties.authorByline) && this._layoutPart.properties.authorByline.length > 0) {
            return this._layoutPart.properties.authorByline[0];
        }
        return null;
    }
    get verticalSection() {
        if (this.hasVerticalSection) {
            return this.addVerticalSection();
        }
        return null;
    }
    /**
     * Add a section to this page
     */
    addSection() {
        const section = new CanvasSection(this, Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* getNextOrder */ "e"])(this.sections), 1);
        this.sections.push(section);
        return section;
    }
    /**
     * Add a section to this page
     */
    addVerticalSection() {
        // we can only have one vertical section so we find it if it exists
        const sectionIndex = this.sections.findIndex(s => s.layoutIndex === 2);
        if (sectionIndex > -1) {
            return this.sections[sectionIndex];
        }
        const section = new CanvasSection(this, Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* getNextOrder */ "e"])(this.sections), 2);
        this.sections.push(section);
        return section;
    }
    /**
     * Loads this instance from the appropriate JSON data
     *
     * @param pageData JSON data to load (replaces any existing data)
     */
    fromJSON(pageData) {
        this.json = pageData;
        const canvasControls = JSON.parse(pageData.CanvasContent1);
        const layouts = JSON.parse(pageData.LayoutWebpartsContent);
        if (layouts && layouts.length > 0) {
            this._layoutPart = layouts[0];
        }
        this.setControls(canvasControls);
        return this;
    }
    /**
     * Loads this page's content from the server
     */
    async load() {
        const item = await this.getItem("Id", "CommentsDisabled");
        const pageData = await Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPQueryable */ "n"])(this, `_api/sitepages/pages(${item.Id})`)();
        this.commentsDisabled = item.CommentsDisabled;
        return this.fromJSON(pageData);
    }
    /**
     * Persists the content changes (sections, columns, and controls) [does not work with batching]
     *
     * @param publish If true the page is published, if false the changes are persisted to SharePoint but not published [Default: true]
     */
    async save(publish = true) {
        if (this.json.Id === null) {
            throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
        }
        const previewPartialUrl = "_layouts/15/getpreview.ashx";
        // If new banner image, and banner image url is not in getpreview.ashx format
        if (this._bannerImageDirty && !this.bannerImageUrl.includes(previewPartialUrl)) {
            const serverRelativePath = this.bannerImageUrl;
            let imgInfo;
            let webUrl;
            const web = Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_6__[/* Web */ "e"])(this);
            const [batch, execute] = Object(_batching_js__WEBPACK_IMPORTED_MODULE_13__[/* createBatch */ "t"])(web);
            web.using(batch);
            web.getFileByServerRelativePath(serverRelativePath.replace(/%20/ig, " "))
                .select("ListId", "WebId", "UniqueId", "Name", "SiteId")().then(r1 => imgInfo = r1);
            web.select("Url")().then(r2 => webUrl = r2.Url);
            // we know the .then calls above will run before execute resolves, ensuring the vars are set
            await execute();
            const f = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPQueryable */ "n"])(webUrl, previewPartialUrl);
            f.query.set("guidSite", `${imgInfo.SiteId}`);
            f.query.set("guidWeb", `${imgInfo.WebId}`);
            f.query.set("guidFile", `${imgInfo.UniqueId}`);
            this.bannerImageUrl = f.toRequestUrl();
            if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "y"])(this._layoutPart.serverProcessedContent)) {
                this._layoutPart.serverProcessedContent = {};
            }
            this._layoutPart.serverProcessedContent.imageSources = { imageSource: serverRelativePath };
            if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "y"])(this._layoutPart.serverProcessedContent.customMetadata)) {
                this._layoutPart.serverProcessedContent.customMetadata = {};
            }
            this._layoutPart.serverProcessedContent.customMetadata.imageSource = {
                listId: imgInfo.ListId,
                siteId: imgInfo.SiteId,
                uniqueId: imgInfo.UniqueId,
                webId: imgInfo.WebId,
            };
            this._layoutPart.properties.webId = imgInfo.WebId;
            this._layoutPart.properties.siteId = imgInfo.SiteId;
            this._layoutPart.properties.listId = imgInfo.ListId;
            this._layoutPart.properties.uniqueId = imgInfo.UniqueId;
        }
        // we try and check out the page for the user
        if (!this.json.IsPageCheckedOutToCurrentUser) {
            await Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(ClientsidePage(this, `_api/sitepages/pages(${this.json.Id})/checkoutpage`));
        }
        // create the body for the save request
        let saveBody = {
            AuthorByline: this.json.AuthorByline || [],
            CanvasContent1: this.getCanvasContent1(),
            Description: this.description,
            LayoutWebpartsContent: this.getLayoutWebpartsContent(),
            Title: this.title,
            TopicHeader: this.topicHeader,
            BannerImageUrl: this.bannerImageUrl,
        };
        if (this._bannerImageDirty || this._bannerImageThumbnailUrlDirty) {
            const bannerImageUrlValue = this._bannerImageThumbnailUrlDirty ? this.thumbnailUrl : this.bannerImageUrl;
            saveBody = {
                BannerImageUrl: bannerImageUrlValue,
                ...saveBody,
            };
        }
        const updater = ClientsidePage(this, `_api/sitepages/pages(${this.json.Id})/savepage`);
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(updater, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* headers */ "v"])({ "if-match": "*" }, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])(saveBody)));
        let r = true;
        if (publish) {
            r = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(ClientsidePage(this, `_api/sitepages/pages(${this.json.Id})/publish`));
            if (r) {
                this.json.IsPageCheckedOutToCurrentUser = false;
            }
        }
        this._bannerImageDirty = false;
        this._bannerImageThumbnailUrlDirty = false;
        // we need to ensure we reload from the latest data to ensure all urls are updated and current in the object (expecially for new pages)
        await this.load();
        return r;
    }
    /**
     * Discards the checkout of this page
     */
    async discardPageCheckout() {
        if (this.json.Id === null) {
            throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
        }
        const d = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(ClientsidePage(this, `_api/sitepages/pages(${this.json.Id})/discardPage`));
        this.fromJSON(d);
    }
    /**
     * Promotes this page as a news item
     */
    async promoteToNews() {
        return this.promoteNewsImpl("promoteToNews");
    }
    // API is currently broken on server side
    // public async demoteFromNews(): Promise<boolean> {
    //     return this.promoteNewsImpl("demoteFromNews");
    // }
    /**
     * Finds a control by the specified instance id
     *
     * @param id Instance id of the control to find
     */
    findControlById(id) {
        return this.findControl((c) => c.id === id);
    }
    /**
     * Finds a control within this page's control tree using the supplied predicate
     *
     * @param predicate Takes a control and returns true or false, if true that control is returned by findControl
     */
    findControl(predicate) {
        // check all sections
        for (let i = 0; i < this.sections.length; i++) {
            // check all columns
            for (let j = 0; j < this.sections[i].columns.length; j++) {
                // check all controls
                for (let k = 0; k < this.sections[i].columns[j].controls.length; k++) {
                    // check to see if the predicate likes this control
                    if (predicate(this.sections[i].columns[j].controls[k])) {
                        return this.sections[i].columns[j].controls[k];
                    }
                }
            }
        }
        // we found nothing so give nothing back
        return null;
    }
    /**
     * Creates a new page with all of the content copied from this page
     *
     * @param web The web where we will create the copy
     * @param pageName The file name of the new page
     * @param title The title of the new page
     * @param publish If true the page will be published (Default: true)
     */
    async copy(web, pageName, title, publish = true, promotedState) {
        const page = await CreateClientsidePage(web, pageName, title, this.pageLayout, promotedState);
        return this.copyTo(page, publish);
    }
    /**
     * Copies the content from this page to the supplied page instance NOTE: fully overwriting any previous content!!
     *
     * @param page Page whose content we replace with this page's content
     * @param publish If true the page will be published after the copy, if false it will be saved but left unpublished (Default: true)
     */
    async copyTo(page, publish = true) {
        // we know the method is on the class - but it is protected so not part of the interface
        page.setControls(this.getControls());
        // copy page properties
        if (this._layoutPart.properties) {
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "topicHeader")) {
                page.topicHeader = this._layoutPart.properties.topicHeader;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "imageSourceType")) {
                page._layoutPart.properties.imageSourceType = this._layoutPart.properties.imageSourceType;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "layoutType")) {
                page._layoutPart.properties.layoutType = this._layoutPart.properties.layoutType;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "textAlignment")) {
                page._layoutPart.properties.textAlignment = this._layoutPart.properties.textAlignment;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "showTopicHeader")) {
                page._layoutPart.properties.showTopicHeader = this._layoutPart.properties.showTopicHeader;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "showPublishDate")) {
                page._layoutPart.properties.showPublishDate = this._layoutPart.properties.showPublishDate;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "enableGradientEffect")) {
                page._layoutPart.properties.enableGradientEffect = this._layoutPart.properties.enableGradientEffect;
            }
        }
        // we need to do some work to set the banner image url in the copied page
        if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* stringIsNullOrEmpty */ "I"])(this.json.BannerImageUrl)) {
            // use a URL to parse things for us
            const url = new URL(this.json.BannerImageUrl);
            // helper function to translate the guid strings into properly formatted guids with dashes
            const makeGuid = (s) => s.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/g, "$1-$2-$3-$4-$5");
            // protect against errors because the serverside impl has changed, we'll just skip
            if (url.searchParams.has("guidSite") && url.searchParams.has("guidWeb") && url.searchParams.has("guidFile")) {
                const guidSite = makeGuid(url.searchParams.get("guidSite"));
                const guidWeb = makeGuid(url.searchParams.get("guidWeb"));
                const guidFile = makeGuid(url.searchParams.get("guidFile"));
                const site = Object(_sites_types_js__WEBPACK_IMPORTED_MODULE_8__[/* Site */ "e"])(this);
                const id = await site.select("Id")();
                // the site guid must match the current site's guid or we are unable to set the image
                if (id.Id === guidSite) {
                    const openWeb = await site.openWebById(guidWeb);
                    const file = await openWeb.web.getFileById(guidFile).select("ServerRelativeUrl")();
                    const props = {};
                    if (this._layoutPart.properties) {
                        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "translateX")) {
                            props.translateX = this._layoutPart.properties.translateX;
                        }
                        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "translateY")) {
                            props.translateY = this._layoutPart.properties.translateY;
                        }
                        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "imageSourceType")) {
                            props.imageSourceType = this._layoutPart.properties.imageSourceType;
                        }
                        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(this._layoutPart.properties, "altText")) {
                            props.altText = this._layoutPart.properties.altText;
                        }
                    }
                    page.setBannerImage(file.ServerRelativeUrl, props);
                }
            }
        }
        await page.save(publish);
        return page;
    }
    /**
     * Sets the modern page banner image
     *
     * @param url Url of the image to display
     * @param altText Alt text to describe the image
     * @param bannerProps Additional properties to control display of the banner
     */
    setBannerImage(url, props) {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isUrlAbsolute */ "h"])(url)) {
            // do our best to make this a server relative url by removing the x.sharepoint.com part
            url = url.replace(/^https?:\/\/[a-z0-9.]*?\.[a-z]{2,3}\//i, "/");
        }
        this.json.BannerImageUrl = url;
        // update serverProcessedContent (page behavior change 2021-Oct-13)
        this._layoutPart.serverProcessedContent = { imageSources: { imageSource: url } };
        this._bannerImageDirty = true;
        /*
            setting the banner image resets the thumbnail image (matching UI functionality)
            but if the thumbnail is dirty they are likely trying to set them both to
            different values, so we allow that here.
            Also allows the banner image to be updated safely with the calculated one in save()
        */
        if (!this._bannerImageThumbnailUrlDirty) {
            this.thumbnailUrl = url;
            this._pageSettings.pageSettingsSlice.isDefaultThumbnail = true;
        }
        // this seems to always be true, so default
        this._layoutPart.properties.imageSourceType = 2;
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "y"])(props)) {
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(props, "translateX")) {
                this._layoutPart.properties.translateX = props.translateX;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(props, "translateY")) {
                this._layoutPart.properties.translateY = props.translateY;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(props, "imageSourceType")) {
                this._layoutPart.properties.imageSourceType = props.imageSourceType;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(props, "altText")) {
                this._layoutPart.properties.altText = props.altText;
            }
        }
    }
    /**
     * Sets the banner image url from an external source. You must call save to persist the changes
     *
     * @param url absolute url of the external file
     * @param props optional set of properties to control display of the banner image
     */
    async setBannerImageFromExternalUrl(url, props) {
        // validate and parse our input url
        const fileUrl = new URL(url);
        // get our page name without extension, used as a folder name when creating the file
        const pageName = this.json.FileName.replace(/\.[^/.]+$/, "");
        // get the filename we will use
        const filename = fileUrl.pathname.split(/[\\/]/i).pop();
        const request = ClientsidePage(this, "_api/sitepages/AddImageFromExternalUrl");
        request.query.set("imageFileName", `'${filename}'`);
        request.query.set("pageName", `'${pageName}'`);
        request.query.set("externalUrl", `'${url}'`);
        request.select("ServerRelativeUrl");
        const result = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(request);
        // set with the newly created relative url
        this.setBannerImage(result.ServerRelativeUrl, props);
    }
    /**
     * Sets the authors for this page from the supplied list of user integer ids
     *
     * @param authorId The integer id of the user to set as the author
     */
    async setAuthorById(authorId) {
        const userLoginData = await Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPCollection */ "e"])([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_7__[/* extractWebUrl */ "e"])(this.toUrl())], "/_api/web/siteusers")
            .filter(`Id eq ${authorId}`)
            .select("LoginName")();
        if (userLoginData.length < 1) {
            throw Error(`Could not find user with id ${authorId}.`);
        }
        return this.setAuthorByLoginName(userLoginData[0].LoginName);
    }
    /**
     * Sets the authors for this page from the supplied list of user integer ids
     *
     * @param authorLoginName The login name of the user (ex: i:0#.f|membership|name@tenant.com)
     */
    async setAuthorByLoginName(authorLoginName) {
        const userLoginData = await Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPCollection */ "e"])([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_7__[/* extractWebUrl */ "e"])(this.toUrl())], "/_api/web/siteusers")
            .filter(`LoginName eq '${authorLoginName}'`)
            .select("UserPrincipalName", "Title")();
        if (userLoginData.length < 1) {
            throw Error(`Could not find user with login name '${authorLoginName}'.`);
        }
        this.json.AuthorByline = [userLoginData[0].UserPrincipalName];
        this._layoutPart.properties.authorByline = [userLoginData[0].UserPrincipalName];
        this._layoutPart.properties.authors = [{
                id: authorLoginName,
                name: userLoginData[0].Title,
                role: "",
                upn: userLoginData[0].UserPrincipalName,
            }];
    }
    /**
     * Gets the list item associated with this clientside page
     *
     * @param selects Specific set of fields to include when getting the item
     */
    async getItem(...selects) {
        const initer = ClientsidePage(this, "/_api/lists/EnsureClientRenderedSitePagesLibrary").select("EnableModeration", "EnableMinorVersions", "Id");
        const listData = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(initer);
        const item = Object(_lists_types_js__WEBPACK_IMPORTED_MODULE_4__[/* List */ "e"])([this, listData["odata.id"]]).items.getById(this.json.Id);
        const itemData = await item.select(...selects)();
        return Object.assign(Object(_items_types_js__WEBPACK_IMPORTED_MODULE_2__[/* Item */ "e"])([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_5__[/* odataUrlFrom */ "e"])(itemData)]), itemData);
    }
    /**
         * Recycle this page
         */
    async recycle() {
        const item = await this.getItem();
        await item.recycle();
    }
    /**
     * Delete this page
     */
    async delete() {
        const item = await this.getItem();
        await item.delete();
    }
    /**
     * Schedules a page for publishing
     *
     * @param publishDate Date to publish the item
     * @returns Version which was scheduled to be published
     */
    async schedulePublish(publishDate) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(ClientsidePage(this, `_api/sitepages/pages(${this.json.Id})/SchedulePublish`), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({
            sitePage: { PublishStartDate: publishDate },
        }));
    }
    /**
     * Saves a copy of this page as a template in this library's Templates folder
     *
     * @param publish If true the template is published, false the template is not published (default: true)
     * @returns IClientsidePage instance representing the new template page
     */
    async saveAsTemplate(publish = true) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(ClientsidePage(this, `_api/sitepages/pages(${this.json.Id})/SavePageAsTemplate`));
        const page = ClientsidePage(this, null, data);
        page.title = this.title;
        await page.save(publish);
        return page;
    }
    /**
     * Share this Page's Preview content by Email
     *
     * @param emails Set of emails to which the preview is shared
     * @param message The message to include
     * @returns void
     */
    share(emails, message) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(ClientsidePage(this, "_api/SP.Publishing.RichSharing/SharePageByEmail"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({
            recipientEmails: emails,
            message,
            url: this.json.AbsoluteUrl,
        }));
    }
    getCanvasContent1() {
        return JSON.stringify(this.getControls());
    }
    getLayoutWebpartsContent() {
        if (this._layoutPart) {
            return JSON.stringify([this._layoutPart]);
        }
        else {
            return JSON.stringify(null);
        }
    }
    setControls(controls) {
        // reset the sections
        this.sections = [];
        if (controls && controls.length) {
            for (let i = 0; i < controls.length; i++) {
                // if no control type is present this is a column which we give type 0 to let us process it
                const controlType = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(controls[i], "controlType") ? controls[i].controlType : 0;
                switch (controlType) {
                    case 0:
                        // empty canvas column or page settings
                        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(controls[i], "pageSettingsSlice")) {
                            this._pageSettings = controls[i];
                        }
                        else {
                            // we have an empty column
                            this.mergeColumnToTree(new CanvasColumn(controls[i]));
                        }
                        break;
                    case 3: {
                        const part = new ClientsideWebpart(controls[i]);
                        this.mergePartToTree(part, part.data.position);
                        break;
                    }
                    case 4: {
                        const textData = controls[i];
                        const text = new ClientsideText(textData.innerHTML, textData);
                        this.mergePartToTree(text, text.data.position);
                        break;
                    }
                }
            }
            Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* reindex */ "t"])(this.sections);
        }
    }
    getControls() {
        // reindex things
        Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* reindex */ "t"])(this.sections);
        // rollup the control changes
        const canvasData = [];
        this.sections.forEach(section => {
            section.columns.forEach(column => {
                if (column.controls.length < 1) {
                    // empty column
                    canvasData.push({
                        displayMode: column.data.displayMode,
                        emphasis: this.getEmphasisObj(section.emphasis),
                        position: column.data.position,
                    });
                }
                else {
                    column.controls.forEach(control => {
                        control.data.emphasis = this.getEmphasisObj(section.emphasis);
                        canvasData.push(this.specialSaveHandling(control).data);
                    });
                }
            });
        });
        canvasData.push(this._pageSettings);
        return canvasData;
    }
    getEmphasisObj(value) {
        if (value < 1 || value > 3) {
            return {};
        }
        return { zoneEmphasis: value };
    }
    async promoteNewsImpl(method) {
        if (this.json.Id === null) {
            throw Error("The id for this page is null.");
        }
        // per bug #858 if we promote before we have ever published the last published date will
        // forever not be updated correctly in the modern news web part. Because this will affect very
        // few folks we just go ahead and publish for them here as that is likely what they intended.
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* stringIsNullOrEmpty */ "I"])(this.json.VersionInfo.LastVersionCreatedBy)) {
            const lastPubData = new Date(this.json.VersionInfo.LastVersionCreated);
            // no modern page should reasonable be published before the year 2000 :)
            if (lastPubData.getFullYear() < 2000) {
                await this.save(true);
            }
        }
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(ClientsidePage(this, `_api/sitepages/pages(${this.json.Id})/${method}`));
    }
    /**
     * Merges the control into the tree of sections and columns for this page
     *
     * @param control The control to merge
     */
    mergePartToTree(control, positionData) {
        var _a, _b, _c;
        let column = null;
        let sectionFactor = 12;
        let sectionIndex = 0;
        let zoneIndex = 0;
        let layoutIndex = 1;
        // handle case where we don't have position data (shouldn't happen?)
        if (positionData) {
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(positionData, "zoneIndex")) {
                zoneIndex = positionData.zoneIndex;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(positionData, "sectionIndex")) {
                sectionIndex = positionData.sectionIndex;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(positionData, "sectionFactor")) {
                sectionFactor = positionData.sectionFactor;
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(positionData, "layoutIndex")) {
                layoutIndex = positionData.layoutIndex;
            }
        }
        const zoneEmphasis = (_c = (_b = (_a = control.data) === null || _a === void 0 ? void 0 : _a.emphasis) === null || _b === void 0 ? void 0 : _b.zoneEmphasis) !== null && _c !== void 0 ? _c : 0;
        const section = this.getOrCreateSection(zoneIndex, layoutIndex, zoneEmphasis);
        const columns = section.columns.filter(c => c.order === sectionIndex);
        if (columns.length < 1) {
            column = section.addColumn(sectionFactor, layoutIndex);
        }
        else {
            column = columns[0];
        }
        control.column = column;
        column.addControl(control);
    }
    /**
     * Merges the supplied column into the tree
     *
     * @param column Column to merge
     * @param position The position data for the column
     */
    mergeColumnToTree(column) {
        var _a, _b;
        const order = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(column.data, "position") && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(column.data.position, "zoneIndex") ? column.data.position.zoneIndex : 0;
        const layoutIndex = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(column.data, "position") && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(column.data.position, "layoutIndex") ? column.data.position.layoutIndex : 1;
        const section = this.getOrCreateSection(order, layoutIndex, ((_b = (_a = column.data) === null || _a === void 0 ? void 0 : _a.emphasis) === null || _b === void 0 ? void 0 : _b.zoneEmphasis) || 0);
        column.section = section;
        section.columns.push(column);
    }
    /**
     * Handle the logic to get or create a section based on the supplied order and layoutIndex
     *
     * @param order Section order
     * @param layoutIndex Layout Index (1 === normal, 2 === vertical section)
     * @param emphasis The section emphasis
     */
    getOrCreateSection(order, layoutIndex, emphasis) {
        let section = null;
        const sections = this.sections.filter(s => s.order === order && s.layoutIndex === layoutIndex);
        if (sections.length < 1) {
            section = layoutIndex === 2 ? this.addVerticalSection() : this.addSection();
            section.order = order;
            section.emphasis = emphasis;
        }
        else {
            section = sections[0];
        }
        return section;
    }
    /**
     * Based on issue #1690 we need to take special case actions to ensure some things
     * can be saved properly without breaking existing pages.
     *
     * @param control The control we are ensuring is "ready" to be saved
     */
    specialSaveHandling(control) {
        var _a, _b, _c;
        // this is to handle the special case in issue #1690
        // must ensure that searchablePlainTexts values have < replaced with &lt; in links web part
        // For #2561 need to process for code snippet webpart and any control && (<any>control).data.webPartId === "c70391ea-0b10-4ee9-b2b4-006d3fcad0cd"
        if (control.data.controlType === 3) {
            const texts = ((_c = (_b = (_a = control.data) === null || _a === void 0 ? void 0 : _a.webPartData) === null || _b === void 0 ? void 0 : _b.serverProcessedContent) === null || _c === void 0 ? void 0 : _c.searchablePlainTexts) || null;
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "y"])(texts)) {
                const keys = Object.getOwnPropertyNames(texts);
                for (let i = 0; i < keys.length; i++) {
                    texts[keys[i]] = texts[keys[i]].replace(/</ig, "&lt;");
                    control.data.webPartData.serverProcessedContent.searchablePlainTexts = texts;
                }
            }
        }
        return control;
    }
}
/**
 * Invokable factory for IClientSidePage instances
 */
const ClientsidePage = (base, path, json, noInit = false, sections = [], commentsDisabled = false) => {
    return new _ClientsidePage(base, path, json, noInit, sections, commentsDisabled);
};
/**
 * Loads a client side page from the supplied IFile instance
 *
 * @param file Source IFile instance
 */
const ClientsidePageFromFile = async (file) => {
    const item = await file.getItem();
    const page = ClientsidePage([file, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_7__[/* extractWebUrl */ "e"])(file.toUrl())], "", { Id: item.Id }, true);
    return page.load();
};
/**
 * Creates a new client side page
 *
 * @param web The web or list
 * @param pageName The name of the page (filename)
 * @param title The page's title
 * @param PageLayoutType Layout to use when creating the page
 */
const CreateClientsidePage = async (web, pageName, title, PageLayoutType = "Article", promotedState = 0) => {
    // patched because previously we used the full page name with the .aspx at the end
    // this allows folk's existing code to work after the re-write to the new API
    pageName = pageName.replace(/\.aspx$/i, "");
    // initialize the page, at this point a checked-out page with a junk filename will be created.
    const pageInitData = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_9__[/* spPost */ "a"])(ClientsidePage(web, "_api/sitepages/pages"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({
        PageLayoutType,
        PromotedState: promotedState,
    }));
    // now we can init our page with the save data
    const newPage = ClientsidePage(web, "", pageInitData);
    newPage.title = pageName;
    await newPage.save(false);
    newPage.title = title;
    return newPage;
};
class CanvasSection {
    constructor(page, order, layoutIndex, columns = [], _emphasis = 0) {
        this.page = page;
        this.columns = columns;
        this._emphasis = _emphasis;
        this._memId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* getGUID */ "u"])();
        this._order = order;
        this._layoutIndex = layoutIndex;
    }
    get order() {
        return this._order;
    }
    set order(value) {
        this._order = value;
        for (let i = 0; i < this.columns.length; i++) {
            this.columns[i].data.position.zoneIndex = value;
        }
    }
    get layoutIndex() {
        return this._layoutIndex;
    }
    set layoutIndex(value) {
        this._layoutIndex = value;
        for (let i = 0; i < this.columns.length; i++) {
            this.columns[i].data.position.layoutIndex = value;
        }
    }
    /**
     * Default column (this.columns[0]) for this section
     */
    get defaultColumn() {
        if (this.columns.length < 1) {
            this.addColumn(12);
        }
        return this.columns[0];
    }
    /**
     * Adds a new column to this section
     */
    addColumn(factor, layoutIndex = this.layoutIndex) {
        const column = new CanvasColumn();
        column.section = this;
        column.data.position.zoneIndex = this.order;
        column.data.position.layoutIndex = layoutIndex;
        column.data.position.sectionFactor = factor;
        column.order = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* getNextOrder */ "e"])(this.columns);
        this.columns.push(column);
        return column;
    }
    /**
     * Adds a control to the default column for this section
     *
     * @param control Control to add to the default column
     */
    addControl(control) {
        this.defaultColumn.addControl(control);
        return this;
    }
    get emphasis() {
        return this._emphasis;
    }
    set emphasis(value) {
        this._emphasis = value;
    }
    /**
     * Removes this section and all contained columns and controls from the collection
     */
    remove() {
        this.page.sections = this.page.sections.filter(section => section._memId !== this._memId);
        Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* reindex */ "t"])(this.page.sections);
    }
}
class CanvasColumn {
    constructor(json = JSON.parse(JSON.stringify(CanvasColumn.Default)), controls = []) {
        this.json = json;
        this.controls = controls;
        this._section = null;
        this._memId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* getGUID */ "u"])();
    }
    get data() {
        return this.json;
    }
    get section() {
        return this._section;
    }
    set section(section) {
        this._section = section;
    }
    get order() {
        return this.data.position.sectionIndex;
    }
    set order(value) {
        this.data.position.sectionIndex = value;
        for (let i = 0; i < this.controls.length; i++) {
            this.controls[i].data.position.zoneIndex = this.data.position.zoneIndex;
            this.controls[i].data.position.layoutIndex = this.data.position.layoutIndex;
            this.controls[i].data.position.sectionIndex = value;
        }
    }
    get factor() {
        return this.data.position.sectionFactor;
    }
    set factor(value) {
        this.data.position.sectionFactor = value;
    }
    addControl(control) {
        control.column = this;
        this.controls.push(control);
        return this;
    }
    getControl(index) {
        return this.controls[index];
    }
    remove() {
        this.section.columns = this.section.columns.filter(column => column._memId !== this._memId);
        Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* reindex */ "t"])(this.section.columns);
    }
}
CanvasColumn.Default = {
    controlType: 0,
    displayMode: 2,
    emphasis: {},
    position: {
        layoutIndex: 1,
        sectionFactor: 12,
        sectionIndex: 1,
        zoneIndex: 1,
    },
};
class ColumnControl {
    constructor(json) {
        this.json = json;
    }
    get id() {
        return this.json.id;
    }
    get data() {
        return this.json;
    }
    get column() {
        return this._column;
    }
    set column(value) {
        this._column = value;
        this.onColumnChange(this._column);
    }
    remove() {
        this.column.controls = this.column.controls.filter(control => control.id !== this.id);
        Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* reindex */ "t"])(this.column.controls);
    }
    setData(data) {
        this.json = data;
    }
}
class ClientsideText extends ColumnControl {
    constructor(text, json = JSON.parse(JSON.stringify(ClientsideText.Default))) {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* stringIsNullOrEmpty */ "I"])(json.id)) {
            json.id = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* getGUID */ "u"])();
            json.anchorComponentId = json.id;
        }
        super(json);
        this.text = text;
    }
    get text() {
        return this.data.innerHTML;
    }
    set text(value) {
        this.data.innerHTML = value;
    }
    get order() {
        return this.data.position.controlIndex;
    }
    set order(value) {
        this.data.position.controlIndex = value;
    }
    onColumnChange(col) {
        this.data.position.sectionFactor = col.factor;
        this.data.position.controlIndex = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* getNextOrder */ "e"])(col.controls);
        this.data.position.zoneIndex = col.data.position.zoneIndex;
        this.data.position.sectionIndex = col.order;
        this.data.position.layoutIndex = col.data.position.layoutIndex;
    }
}
ClientsideText.Default = {
    addedFromPersistedData: false,
    anchorComponentId: "",
    controlType: 4,
    displayMode: 2,
    editorType: "CKEditor",
    emphasis: {},
    id: "",
    innerHTML: "",
    position: {
        controlIndex: 1,
        layoutIndex: 1,
        sectionFactor: 12,
        sectionIndex: 1,
        zoneIndex: 1,
    },
};
class ClientsideWebpart extends ColumnControl {
    constructor(json = JSON.parse(JSON.stringify(ClientsideWebpart.Default))) {
        super(json);
    }
    static fromComponentDef(definition) {
        const part = new ClientsideWebpart();
        part.import(definition);
        return part;
    }
    get title() {
        return this.data.webPartData.title;
    }
    set title(value) {
        this.data.webPartData.title = value;
    }
    get description() {
        return this.data.webPartData.description;
    }
    set description(value) {
        this.data.webPartData.description = value;
    }
    get order() {
        return this.data.position.controlIndex;
    }
    set order(value) {
        this.data.position.controlIndex = value;
    }
    get height() {
        return this.data.reservedHeight;
    }
    set height(value) {
        this.data.reservedHeight = value;
    }
    get width() {
        return this.data.reservedWidth;
    }
    set width(value) {
        this.data.reservedWidth = value;
    }
    get dataVersion() {
        return this.data.webPartData.dataVersion;
    }
    set dataVersion(value) {
        this.data.webPartData.dataVersion = value;
    }
    setProperties(properties) {
        this.data.webPartData.properties = {
            ...this.data.webPartData.properties,
            ...properties,
        };
        return this;
    }
    getProperties() {
        return this.data.webPartData.properties;
    }
    setServerProcessedContent(properties) {
        this.data.webPartData.serverProcessedContent = {
            ...this.data.webPartData.serverProcessedContent,
            ...properties,
        };
        return this;
    }
    getServerProcessedContent() {
        return this.data.webPartData.serverProcessedContent;
    }
    onColumnChange(col) {
        this.data.position.sectionFactor = col.factor;
        this.data.position.controlIndex = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_10__[/* getNextOrder */ "e"])(col.controls);
        this.data.position.zoneIndex = col.data.position.zoneIndex;
        this.data.position.sectionIndex = col.data.position.sectionIndex;
        this.data.position.layoutIndex = col.data.position.layoutIndex;
    }
    import(component) {
        const id = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* getGUID */ "u"])();
        const componendId = component.Id.replace(/^\{|\}$/g, "").toLowerCase();
        const manifest = JSON.parse(component.Manifest);
        const preconfiguredEntries = manifest.preconfiguredEntries[0];
        this.setData(Object.assign({}, this.data, {
            id,
            webPartData: {
                dataVersion: "1.0",
                description: preconfiguredEntries.description.default,
                id: componendId,
                instanceId: id,
                properties: preconfiguredEntries.properties,
                title: preconfiguredEntries.title.default,
            },
            webPartId: componendId,
        }));
    }
}
ClientsideWebpart.Default = {
    addedFromPersistedData: false,
    controlType: 3,
    displayMode: 2,
    emphasis: {},
    id: null,
    position: {
        controlIndex: 1,
        layoutIndex: 1,
        sectionFactor: 12,
        sectionIndex: 1,
        zoneIndex: 1,
    },
    reservedHeight: 500,
    reservedWidth: 500,
    webPartData: null,
    webPartId: null,
};
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: Version */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "UcWH":
/*!*********************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/mergeThemes.js ***!
  \*********************************************************/
/*! exports provided: mergeThemes */
/*! exports used: mergeThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mergeThemes; });
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/utilities */ "13Gv");
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/makeSemanticColors */ "NqVQ");


/**
 * Merge a partial/full theme into a full theme and returns a merged full theme.
 */
function mergeThemes(theme, partialTheme) {
    var _a, _b, _c;
    if (partialTheme === void 0) { partialTheme = {}; }
    var mergedTheme = Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__[/* merge */ "e"])({}, theme, partialTheme, {
        semanticColors: Object(_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__[/* getSemanticColors */ "e"])(partialTheme.palette, partialTheme.effects, partialTheme.semanticColors, partialTheme.isInverted === undefined ? theme.isInverted : partialTheme.isInverted),
    });
    if (((_a = partialTheme.palette) === null || _a === void 0 ? void 0 : _a.themePrimary) && !((_b = partialTheme.palette) === null || _b === void 0 ? void 0 : _b.accent)) {
        mergedTheme.palette.accent = partialTheme.palette.themePrimary;
    }
    if (partialTheme.defaultFontStyle) {
        for (var _i = 0, _d = Object.keys(mergedTheme.fonts); _i < _d.length; _i++) {
            var fontStyle = _d[_i];
            mergedTheme.fonts[fontStyle] = Object(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__[/* merge */ "e"])(mergedTheme.fonts[fontStyle], partialTheme.defaultFontStyle, (_c = partialTheme === null || partialTheme === void 0 ? void 0 : partialTheme.fonts) === null || _c === void 0 ? void 0 : _c[fontStyle]);
        }
    }
    return mergedTheme;
}
//# sourceMappingURL=mergeThemes.js.map

/***/ }),

/***/ "UuEs":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/site-scripts/index.js ***!
  \****************************************************/
/*! exports provided: SiteScripts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "NCg5");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "Vp/b");
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "b9JD");





Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_2__[/* SPFI */ "e"].prototype, "siteScripts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_3__[/* SiteScripts */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "UuUm":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/site-groups/types.js ***!
  \***************************************************/
/*! exports provided: _SiteGroups, SiteGroups, _SiteGroup, SiteGroup */
/*! exports used: SiteGroup, SiteGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _SiteGroups */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SiteGroups; });
/* unused harmony export _SiteGroup */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SiteGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _site_users_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-users/types.js */ "y+KB");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operations.js */ "UK2s");






let _SiteGroups = class _SiteGroups extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    getById(id) {
        return SiteGroup(this).concat(`(${id})`);
    }
    /**
     * Adds a new group to the site collection
     *
     * @param properties The group properties object of property names and values to be set for the group
     */
    async add(properties) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__[/* body */ "_"])(properties));
        return {
            data,
            group: this.getById(data.Id),
        };
    }
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    getByName(groupName) {
        return SiteGroup(this, `getByName('${groupName}')`);
    }
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    removeById(id) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(SiteGroups(this, `removeById('${id}')`));
    }
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    removeByLoginName(loginName) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(SiteGroups(this, `removeByLoginName('${loginName}')`));
    }
};
_SiteGroups = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_4__[/* defaultPath */ "e"])("sitegroups")
], _SiteGroups);

const SiteGroups = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_SiteGroups);
class _SiteGroup extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    /**
     * Gets the users for this group
     *
     */
    get users() {
        return Object(_site_users_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SiteUsers */ "t"])(this, "users");
    }
    /**
    * @param props Group properties to update
    */
    async update(props) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__[/* body */ "_"])(props));
        return {
            data,
            group: this,
        };
    }
    /**
     * Set the owner of a group using a user id
     * @param userId the id of the user that will be set as the owner of the current group
     */
    setUserAsOwner(userId) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(SiteGroup(this, `SetUserAsOwner(${userId})`));
    }
}
const SiteGroup = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_SiteGroup);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "V4GX":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/queryable/add-prop.js ***!
  \*************************************************/
/*! exports provided: addProp */
/*! exports used: addProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addProp; });
/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path || name);
        },
    });
}
//# sourceMappingURL=add-prop.js.map

/***/ }),

/***/ "VD3q":
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/concatStyleSets.js ***!
  \********************************************************************/
/*! exports provided: concatStyleSets */
/*! exports used: concatStyleSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return concatStyleSets; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */
function concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    if (styleSets && styleSets.length === 1 && styleSets[0] && !styleSets[0].subComponentStyles) {
        return styleSets[0];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
        var currentSet = styleSets_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
                        // subcomponent styles - style functions or objects
                        var currentComponentStyles = currentSet.subComponentStyles;
                        for (var subCompProp in currentComponentStyles) {
                            if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                                }
                                else {
                                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                                }
                            }
                        }
                        continue;
                    }
                    // the as any casts below is a workaround for ts 2.8.
                    // todo: remove cast to any in ts 2.9.
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "a"])([], (Array.isArray(mergedValue) ? mergedValue : [mergedValue]), true), (Array.isArray(currentValue) ? currentValue : [currentValue]), true);
                    }
                }
            }
        }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
        mergedSet.subComponentStyles = {};
        var mergedSubStyles = mergedSet.subComponentStyles;
        var _loop_1 = function (subCompProp) {
            if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                var workingSet_1 = workingSubcomponentStyles[subCompProp];
                mergedSubStyles[subCompProp] = function (styleProps) {
                    return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
                        return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
                    }));
                };
            }
        };
        // now we process the subcomponent styles if there are any
        for (var subCompProp in workingSubcomponentStyles) {
            _loop_1(subCompProp);
        }
    }
    return mergedSet;
}
//# sourceMappingURL=concatStyleSets.js.map

/***/ }),

/***/ "VMH+":
/*!*****************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Spinner/Spinner.base.js ***!
  \*****************************************************************************/
/*! exports provided: SpinnerBase */
/*! exports used: SpinnerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SpinnerBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Spinner_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner.types */ "oR7b");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "9Ppb");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "D9iZ");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ "Cx0t");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* classNamesFunction */ "e"])();
var SpinnerBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "t"])(SpinnerBase, _super);
    function SpinnerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerBase.prototype.render = function () {
        // eslint-disable-next-line deprecation/deprecation
        var _a = this.props, type = _a.type, size = _a.size, ariaLabel = _a.ariaLabel, ariaLive = _a.ariaLive, styles = _a.styles, label = _a.label, theme = _a.theme, className = _a.className, labelPosition = _a.labelPosition;
        var statusMessage = ariaLabel;
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__[/* getNativeProps */ "t"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_4__[/* divProperties */ "e"], ['size']);
        // SpinnerType is deprecated. If someone is still using this property, rather than putting the SpinnerType into the
        // ISpinnerStyleProps, we'll map SpinnerType to its equivalent SpinnerSize and pass that in. Once SpinnerType
        // finally goes away we should delete this.
        var styleSize = size;
        if (styleSize === undefined && type !== undefined) {
            // eslint-disable-next-line deprecation/deprecation
            styleSize = type === _Spinner_types__WEBPACK_IMPORTED_MODULE_2__[/* SpinnerType */ "t"].large ? _Spinner_types__WEBPACK_IMPORTED_MODULE_2__[/* SpinnerSize */ "e"].large : _Spinner_types__WEBPACK_IMPORTED_MODULE_2__[/* SpinnerSize */ "e"].medium;
        }
        var classNames = getClassNames(styles, {
            theme: theme,
            size: styleSize,
            className: className,
            labelPosition: labelPosition,
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({}, nativeProps, { className: classNames.root }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.circle }),
            label && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.label }, label),
            statusMessage && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "status", "aria-live": ariaLive },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_5__[/* DelayedRender */ "e"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.screenReaderText }, statusMessage))))));
    };
    SpinnerBase.defaultProps = {
        size: _Spinner_types__WEBPACK_IMPORTED_MODULE_2__[/* SpinnerSize */ "e"].medium,
        ariaLive: 'polite',
        labelPosition: 'bottom',
    };
    return SpinnerBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Spinner.base.js.map

/***/ }),

/***/ "VQtT":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/sharing/folder.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _folders_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../folders/types.js */ "4tXH");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "AvPO");


const field = "odata.id";
_folders_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Folder */ "n"].prototype.shareWith = async function (loginNames, role = _types_js__WEBPACK_IMPORTED_MODULE_1__[/* SharingRole */ "t"].View, requireSignin = false, emailData) {
    const shareable = await this.getItem(field);
    return shareable.shareWith(loginNames, role, requireSignin, emailData);
};
_folders_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Folder */ "n"].prototype.getShareLink = async function (kind, expiration = null) {
    const shareable = await this.getItem(field);
    return shareable.getShareLink(kind, expiration);
};
_folders_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Folder */ "n"].prototype.checkSharingPermissions = async function (recipients) {
    const shareable = await this.getItem(field);
    return shareable.checkSharingPermissions(recipients);
};
_folders_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Folder */ "n"].prototype.getSharingInformation = async function (request, expands, selects) {
    const shareable = await this.getItem(field);
    return shareable.getSharingInformation(request, expands, selects);
};
_folders_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Folder */ "n"].prototype.getObjectSharingSettings = async function (useSimplifiedRoles = true) {
    const shareable = await this.getItem(field);
    return shareable.getObjectSharingSettings(useSimplifiedRoles);
};
_folders_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Folder */ "n"].prototype.unshare = async function () {
    const shareable = await this.getItem(field);
    return shareable.unshare();
};
_folders_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Folder */ "n"].prototype.deleteSharingLinkByKind = async function (kind) {
    const shareable = await this.getItem(field);
    return shareable.deleteSharingLinkByKind(kind);
};
_folders_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Folder */ "n"].prototype.unshareLink = async function (kind, shareId) {
    const shareable = await this.getItem(field);
    return shareable.unshareLink(kind, shareId);
};
//# sourceMappingURL=folder.js.map

/***/ }),

/***/ "VnYa":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/sp/user-custom-actions/list.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "1mTr");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "userCustomActions", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* UserCustomActions */ "e"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "Vp/b":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/site-scripts/list.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "b9JD");
/* harmony import */ var _folders_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../folders/list.js */ "vttn");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");






_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.getSiteScript = async function () {
    const rootFolder = await Object(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* List */ "e"])(this).rootFolder();
    const web = await Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_4__[/* Web */ "e"])([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__[/* extractWebUrl */ "e"])(this.toUrl())]).select("Url")();
    const absoluteListUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(web.Url, "Lists", rootFolder.Name);
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SiteScripts */ "e"])(this, "").getSiteScriptFromList(absoluteListUrl);
};
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "VtbQ":
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/transforms/rtlifyRules.js ***!
  \***************************************************************************/
/*! exports provided: rtlifyRules */
/*! exports used: rtlifyRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return rtlifyRules; });
var _a;
var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize',
};
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(options, rulePairs, index) {
    if (options.rtl) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return "".concat(parts[0], " ").concat(parts[3], " ").concat(parts[2], " ").concat(parts[1]);
        }
    }
    return value;
}
//# sourceMappingURL=rtlifyRules.js.map

/***/ }),

/***/ "VxMn":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching.js ***!
  \**********************************************************/
/*! exports provided: CacheAlways, CacheNever, CacheKey, Caching, bindCachingCore */
/*! exports used: CacheAlways, CacheKey, CacheNever, bindCachingCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CacheAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return CacheNever; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return CacheKey; });
/* unused harmony export Caching */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindCachingCore; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * Behavior that forces caching for the request regardless of "method"
 *
 * @returns TimelinePipe
 */
function CacheAlways() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheAlways": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that blocks caching for the request regardless of "method"
 *
 * Note: If both Caching and CacheAlways are present AND CacheNever is present the request will not be cached
 * as we give priority to the CacheNever case
 *
 * @returns TimelinePipe
 */
function CacheNever() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheNever": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that allows you to specify a cache key for a request
 *
 * @param key The key to use for caching
  */
function CacheKey(key) {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheKey": key };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Adds caching to the requests based on the supplied props
 *
 * @param props Optional props that configure how caching will work
 * @returns TimelinePipe used to configure requests
 */
function Caching(props) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = bindCachingCore(url, init, props);
            // only cache get requested data or where the CacheAlways header is present (allows caching of POST requests)
            if (shouldCache) {
                const cached = getCachedValue();
                // we need to ensure that result stays "undefined" unless we mean to set null as the result
                if (cached === null) {
                    // if we don't have a cached result we need to get it after the request is sent. Get the raw value (un-parsed) to store into cache
                    this.on.post(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* noInherit */ "v"])(async function (url, result) {
                        setCachedValue(result);
                        return [url, result];
                    }));
                }
                else {
                    result = cached;
                }
            }
            return [url, init, result];
        });
        return instance;
    };
}
const storage = new _pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* PnPClientStorage */ "n"]();
/**
 * Based on the supplied properties, creates bound logic encapsulating common caching configuration
 * sharable across implementations to more easily provide consistent behavior across behaviors
 *
 * @param props Any caching props used to initialize the core functions
 */
function bindCachingCore(url, init, props) {
    var _a, _b;
    const { store, keyFactory, expireFunc } = {
        store: "local",
        keyFactory: (url) => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* getHashCode */ "f"])(url.toLowerCase()).toString(),
        expireFunc: () => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* dateAdd */ "c"])(new Date(), "minute", 5),
        ...props,
    };
    const s = store === "session" ? storage.session : storage.local;
    const key = (init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheKey"]) ? init.headers["X-PnP-CacheKey"] : keyFactory(url);
    return [
        // calculated value indicating if we should cache this request
        (/get/i.test(init.method) || ((_a = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheAlways"]) !== null && _a !== void 0 ? _a : false)) && !((_b = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheNever"]) !== null && _b !== void 0 ? _b : false),
        // gets the cached value
        () => s.get(key),
        // sets the cached value
        (value) => s.put(key, value, expireFunc(url)),
    ];
}
//# sourceMappingURL=caching.js.map

/***/ }),

/***/ "W5Fu":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/taxonomy/types.js ***!
  \************************************************/
/*! exports provided: _TermStore, TermStore, _TermGroups, TermGroups, _TermGroup, TermGroup, _TermSets, TermSets, _TermSet, TermSet, _Children, Children, _Terms, Terms, _Term, Term, _Relations, Relations */
/*! exports used: TermStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _TermStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TermStore; });
/* unused harmony export _TermGroups */
/* unused harmony export TermGroups */
/* unused harmony export _TermGroup */
/* unused harmony export TermGroup */
/* unused harmony export _TermSets */
/* unused harmony export TermSets */
/* unused harmony export _TermSet */
/* unused harmony export TermSet */
/* unused harmony export _Children */
/* unused harmony export Children */
/* unused harmony export _Terms */
/* unused harmony export Terms */
/* unused harmony export _Term */
/* unused harmony export Term */
/* unused harmony export _Relations */
/* unused harmony export Relations */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");







/**
 * Describes a collection of Form objects
 *
 */
let _TermStore = class _TermStore extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* _SPInstance */ "i"] {
    /**
     * Gets the term groups associated with this tenant
     */
    get groups() {
        return TermGroups(this);
    }
    /**
     * Gets the term sets associated with this tenant
     */
    get sets() {
        return TermSets(this);
    }
    /**
     * Allows you to locate terms within the termStore
     *
     * @param params Search parameters used to locate the terms, label is required
     * @returns Array of terms including set information for each term
     */
    async searchTerm(params) {
        const query = Reflect.ownKeys(params).reduce((c, prop) => {
            c.push(`${prop}='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__[/* encodePath */ "e"])(params[prop])}'`);
            return c;
        }, []).join(",");
        return TermStore(this, `searchTerm(${query})`).expand("set")();
    }
    /**
     * Update settings for TermStore
     *
     * @param props The set or properties to update
     * @returns The updated term store information
     */
    update(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPatch */ "n"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props));
    }
};
_TermStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("_api/v2.1/termstore")
], _TermStore);

const TermStore = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* spInvokableFactory */ "c"])(_TermStore);
let _TermGroups = class _TermGroups extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* _SPCollection */ "a"] {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id) {
        return TermGroup(this, id);
    }
    /**
     * Adds a new term group to this store
     * @param props The set of properties
     * @returns The information on the create group
     */
    add(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props));
    }
};
_TermGroups = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("groups")
], _TermGroups);

const TermGroups = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* spInvokableFactory */ "c"])(_TermGroups);
class _TermGroup extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* _SPInstance */ "i"] {
    /**
     * Gets the term sets associated with this tenant
     */
    get sets() {
        return TermSets(this, "sets");
    }
    /**
     * Deletes this group
     *
     * @returns void
     */
    delete() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spDelete */ "e"])(this);
    }
}
const TermGroup = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* spInvokableFactory */ "c"])(_TermGroup);
let _TermSets = class _TermSets extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* _SPCollection */ "a"] {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id) {
        return TermSet(this, id);
    }
    /**
     * Adds a new term set to this collection
     * @param props The set of properties
     * @returns The information on the created set
     */
    add(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props));
    }
};
_TermSets = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("sets")
], _TermSets);

const TermSets = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* spInvokableFactory */ "c"])(_TermSets);
class _TermSet extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* _SPInstance */ "i"] {
    /**
     * Gets all the terms in this set
     */
    get terms() {
        return Terms(this);
    }
    get parentGroup() {
        return TermGroup(this, "parentGroup");
    }
    get children() {
        return Children(this);
    }
    get relations() {
        return Relations(this);
    }
    getTermById(id) {
        return Term(this, `terms/${id}`);
    }
    /**
     * Update settings for TermSet
     *
     * @param props The set or properties to update
     * @returns The updated term set information
     */
    update(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPatch */ "n"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props));
    }
    /**
     * Deletes this group
     *
     * @returns void
     */
    delete() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spDelete */ "e"])(this);
    }
    /**
     * Gets all the terms in this termset in an ordered tree using the appropriate sort ordering
     * ** This is an expensive operation and you should strongly consider caching the results **
     *
     * @param props Optional set of properties controlling how the tree is retrieved.
     */
    async getAllChildrenAsOrderedTree(props = {}) {
        const selects = ["*", "customSortOrder"];
        if (props.retrieveProperties) {
            selects.push("properties", "localProperties");
        }
        const setInfo = await this.select(...selects)();
        const tree = [];
        const childIds = [];
        const ensureOrder = (terms, sorts, setSorts) => {
            // handle no custom sort information present
            if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "m"])(sorts) && !Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "m"])(setSorts)) {
                return terms;
            }
            let ordering = null;
            if (sorts === null && setSorts.length > 0) {
                ordering = [...setSorts];
            }
            else {
                const index = sorts.findIndex(v => v.setId === setInfo.id);
                if (index >= 0) {
                    ordering = [...sorts[index].order];
                }
            }
            if (ordering !== null) {
                const orderedChildren = [];
                ordering.forEach(o => {
                    const found = terms.find(ch => o === ch.id);
                    if (found) {
                        orderedChildren.push(found);
                    }
                });
                // we have a case where if a set is ordered and a term is added to that set
                // AND the ordering information hasn't been updated in the UI the new term will not have
                // any associated ordering information. See #1547 which reported this. So here we
                // append any terms remaining in "terms" not in "orderedChildren" to the end of "orderedChildren"
                orderedChildren.push(...terms.filter(info => ordering.indexOf(info.id) < 0));
                return orderedChildren;
            }
            return terms;
        };
        const visitor = async (source, parent) => {
            const children = await source();
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                childIds.push(child.id);
                const orderedTerm = {
                    children: [],
                    defaultLabel: child.labels.find(l => l.isDefault).name,
                    ...child,
                };
                if (child.childrenCount > 0) {
                    await visitor(this.getTermById(children[i].id).children.select(...selects), orderedTerm.children);
                    orderedTerm.children = ensureOrder(orderedTerm.children, child.customSortOrder);
                }
                parent.push(orderedTerm);
            }
        };
        // There is a series of issues where users expect that copied terms appear in the result of this method call. Copied terms are not "children" so we need
        // to get all the children + all the "/terms" and filter out the children. This is expensive but this method call is already indicated to be used with caching
        await visitor(this.children.select(...selects), tree);
        await visitor(async () => {
            const terms = await Terms(this).select(...selects)();
            return terms.filter((t) => childIds.indexOf(t.id) < 0);
        }, tree);
        return ensureOrder(tree, null, setInfo.customSortOrder);
    }
}
const TermSet = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* spInvokableFactory */ "c"])(_TermSet);
let _Children = class _Children extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* _SPCollection */ "a"] {
    /**
     * Adds a new term set to this collection
     * @param props The set of properties
     * @returns The information on the create group
     */
    add(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props));
    }
};
_Children = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("children")
], _Children);

const Children = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* spInvokableFactory */ "c"])(_Children);
let _Terms = class _Terms extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* _SPCollection */ "a"] {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id) {
        return Term(this, id);
    }
};
_Terms = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("terms")
], _Terms);

const Terms = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* spInvokableFactory */ "c"])(_Terms);
class _Term extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* _SPInstance */ "i"] {
    get children() {
        return Children(this);
    }
    get relations() {
        return Relations(this);
    }
    get set() {
        return TermSet(this, "set");
    }
    /**
     * Update settings for TermSet
     *
     * @param props The set or properties to update
     * @returns The updated term set information
     */
    update(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPatch */ "n"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props));
    }
    /**
     * Deletes this group
     *
     * @returns void
     */
    delete() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spDelete */ "e"])(this);
    }
}
const Term = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* spInvokableFactory */ "c"])(_Term);
let _Relations = class _Relations extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* _SPCollection */ "a"] {
    /**
     * Adds a new relation to this term
     * @param props The set of properties
     * @returns The information on the created relation
     */
    add(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props));
    }
};
_Relations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("relations")
], _Relations);

const Relations = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_5__[/* spInvokableFactory */ "c"])(_Relations);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "WE4i":
/*!***************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/bearer-token.js ***!
  \***************************************************************/
/*! exports provided: BearerToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BearerToken */
/* harmony import */ var _inject_headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inject-headers.js */ "XOGp");

function BearerToken(token) {
    return (instance) => {
        instance.using(Object(_inject_headers_js__WEBPACK_IMPORTED_MODULE_0__[/* InjectHeaders */ "e"])({
            "Authorization": `Bearer ${token}`,
        }));
        return instance;
    };
}
//# sourceMappingURL=bearer-token.js.map

/***/ }),

/***/ "Wjh3":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spbrowser.js ***!
  \*****************************************************/
/*! exports provided: SPBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SPBrowser */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ "qZw7");
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ "GfGO");




function SPBrowser(props) {
    if ((props === null || props === void 0 ? void 0 : props.baseUrl) && !Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "h"])(props.baseUrl)) {
        throw Error("SPBrowser props.baseUrl must be absolute when supplied.");
    }
    return (instance) => {
        instance.using(Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__[/* DefaultHeaders */ "e"])(), Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__[/* DefaultInit */ "t"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* BrowserFetchWithRetry */ "t"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* DefaultParse */ "s"])(), Object(_request_digest_js__WEBPACK_IMPORTED_MODULE_3__[/* RequestDigest */ "e"])());
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "h"])(props === null || props === void 0 ? void 0 : props.baseUrl)) {
            // we want to fix up the url first
            instance.on.pre.prepend(async (url, init, result) => {
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "h"])(url)) {
                    url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(props.baseUrl, url);
                }
                return [url, init, result];
            });
        }
        return instance;
    };
}
//# sourceMappingURL=spbrowser.js.map

/***/ }),

/***/ "WqOe":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/hubsites/types.js ***!
  \************************************************/
/*! exports provided: _HubSites, HubSites, _HubSite, HubSite */
/*! exports used: HubSites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _HubSites */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HubSites; });
/* unused harmony export _HubSite */
/* unused harmony export HubSite */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _sites_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sites/types.js */ "ilAS");




let _HubSites = class _HubSites extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    /**
     * Gets a Hub Site from the collection by id
     *
     * @param id The Id of the Hub Site
     */
    getById(id) {
        return HubSite(this, `GetById?hubSiteId='${id}'`);
    }
};
_HubSites = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_2__[/* defaultPath */ "e"])("_api/hubsites")
], _HubSites);

const HubSites = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_HubSites);
class _HubSite extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    /**
     * Gets the ISite instance associated with this hubsite
     */
    async getSite() {
        const d = await this.select("SiteUrl")();
        return Object(_sites_types_js__WEBPACK_IMPORTED_MODULE_3__[/* Site */ "e"])([this, d.SiteUrl]);
    }
}
const HubSite = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_HubSite);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "Ww49":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/queryable/queryable.js ***!
  \**************************************************/
/*! exports provided: Queryable */
/*! exports used: Queryable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Queryable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "IwJs");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _invokable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invokable.js */ "/sQB");



const DefaultMoments = {
    construct: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* lifecycle */ "g"])(),
    pre: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* asyncReduce */ "r"])(),
    auth: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* asyncReduce */ "r"])(),
    send: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* request */ "D"])(),
    parse: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* asyncReduce */ "r"])(),
    post: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* asyncReduce */ "r"])(),
    data: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* broadcast */ "o"])(),
};
let Queryable = class Queryable extends _pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* Timeline */ "a"] {
    constructor(init, path) {
        super(DefaultMoments);
        // these keys represent internal events for Queryable, users are not expected to
        // subscribe directly to these, rather they enable functionality within Queryable
        // they are Symbols such that there are NOT cloned between queryables as we only grab string keys (by design)
        this.InternalResolve = Symbol.for("Queryable_Resolve");
        this.InternalReject = Symbol.for("Queryable_Reject");
        this.InternalPromise = Symbol.for("Queryable_Promise");
        this._query = new URLSearchParams();
        // add an intneral moment with specific implementaion for promise creation
        this.moments[this.InternalPromise] = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* reduce */ "S"])();
        let parent;
        if (typeof init === "string") {
            this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "s"])(init, path);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "m"])(init)) {
            if (init.length !== 2) {
                throw Error("When using the tuple param exactly two arguments are expected.");
            }
            if (typeof init[1] !== "string") {
                throw Error("Expected second tuple param to be a string.");
            }
            parent = init[0];
            this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "s"])(init[1], path);
        }
        else {
            parent = init;
            this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "s"])(parent._url, path);
        }
        if (typeof parent !== "undefined") {
            this.observers = parent.observers;
            this._inheritingObservers = true;
        }
    }
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    concat(pathPart) {
        this._url += pathPart;
        return this;
    }
    /**
     * Gets the full url with query information
     *
     */
    toRequestUrl() {
        let url = this.toUrl();
        const query = this.query.toString();
        if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* stringIsNullOrEmpty */ "I"])(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Querystring key, value pairs which will be included in the request
     */
    get query() {
        return this._query;
    }
    /**
     * Gets the current url
     *
     */
    toUrl() {
        return this._url;
    }
    execute(userInit) {
        // if there are NO observers registered this is likely either a bug in the library or a user error, direct to docs
        if (Reflect.ownKeys(this.observers).length < 1) {
            throw Error("No observers registered for this request. (https://pnp.github.io/pnpjs/queryable/queryable#no-observers-registered-for-this-request)");
        }
        // schedule the execution after we return the promise below in the next event loop
        setTimeout(async () => {
            const requestId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* getGUID */ "u"])();
            let requestUrl;
            const log = (msg, level) => {
                // this allows us to easily and consistently format our messages
                this.log(`[${requestId}] ${msg}`, level);
            };
            try {
                log("Beginning request", 0);
                // include the request id in the headers to assist with debugging against logs
                const initSeed = {
                    ...userInit,
                    headers: { ...userInit.headers, "X-PnPjs-RequestId": requestId },
                };
                // eslint-disable-next-line prefer-const
                let [url, init, result] = await this.emit.pre(this.toRequestUrl(), initSeed, undefined);
                log(`Url: ${url}`, 1);
                if (typeof result !== "undefined") {
                    log("Result returned from pre, Emitting data");
                    this.emit.data(result);
                    log("Emitted data");
                    return;
                }
                log("Emitting auth");
                [requestUrl, init] = await this.emit.auth(new URL(url), init);
                log("Emitted auth");
                // we always resepect user supplied init over observer modified init
                init = { ...init, ...userInit, headers: { ...init.headers, ...userInit.headers } };
                log("Emitting send");
                let response = await this.emit.send(requestUrl, init);
                log("Emitted send");
                log("Emitting parse");
                [requestUrl, response, result] = await this.emit.parse(requestUrl, response, result);
                log("Emitted parse");
                log("Emitting post");
                [requestUrl, result] = await this.emit.post(requestUrl, result);
                log("Emitted post");
                log("Emitting data");
                this.emit.data(result);
                log("Emitted data");
            }
            catch (e) {
                log(`Emitting error: "${e.message || e}"`, 3);
                // anything that throws we emit and continue
                this.error(e);
                log("Emitted error", 3);
            }
            finally {
                log("Finished request", 0);
            }
        }, 0);
        // this is the promise that the calling code will recieve and await
        let promise = new Promise((resolve, reject) => {
            // we overwrite any pre-existing internal events as a
            // given queryable only processes a single request at a time
            this.on[this.InternalResolve].replace(resolve);
            this.on[this.InternalReject].replace(reject);
        });
        // this allows us to internally hook the promise creation and modify it. This was introduced to allow for
        // cancelable to work as envisioned, but may have other users. Meant for internal use in the library accessed via behaviors.
        [promise] = this.emit[this.InternalPromise](promise);
        return promise;
    }
};
Queryable = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* extendable */ "l"])(),
    Object(_invokable_js__WEBPACK_IMPORTED_MODULE_2__[/* invokable */ "e"])()
], Queryable);

//# sourceMappingURL=queryable.js.map

/***/ }),

/***/ "XLN9":
/*!***************************************************!*\
  !*** ./lib/Entidades/Personaje/PersonajeLista.js ***!
  \***************************************************/
/*! exports provided: PersonajeLista */
/*! exports used: PersonajeLista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PersonajeLista; });
/* harmony import */ var _PersonajeItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonajeItem */ "gu2o");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var PersonajeLista = /** @class */ (function () {
    function PersonajeLista(web, context) {
        this.NombreLista = "Personaje";
        this.SelectAllFields = [
            "*",
            "Personaje_Usuario/Title",
        ];
        this.ExpandAllFields = ["Personaje_Usuario"];
        this.web = web;
        this.Context = context;
        this.List = this.web.lists.getByTitle(this.NombreLista);
    }
    PersonajeLista.prototype.CargarTodos = function (BatchedWeb) {
        return __awaiter(this, void 0, void 0, function () {
            var Items;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Items = this.List.items
                            .expand(this.ExpandAllFields.join())
                            .orderBy("Title")
                            .select(this.SelectAllFields.join())()
                            .then(function (Data) {
                            return Data.map(function (I) {
                                return new _PersonajeItem__WEBPACK_IMPORTED_MODULE_0__[/* PersonajeItem */ "e"](I, _this);
                            });
                        })
                            .catch(function (E) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.error(E);
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, Items];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PersonajeLista;
}());



/***/ }),

/***/ "XOGp":
/*!*****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/inject-headers.js ***!
  \*****************************************************************/
/*! exports provided: InjectHeaders */
/*! exports used: InjectHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return InjectHeaders; });
function InjectHeaders(headers, prepend = false) {
    return (instance) => {
        const f = async function (url, init, result) {
            init.headers = { ...init.headers, ...headers };
            return [url, init, result];
        };
        if (prepend) {
            instance.on.pre.prepend(f);
        }
        else {
            instance.on.pre(f);
        }
        return instance;
    };
}
//# sourceMappingURL=inject-headers.js.map

/***/ }),

/***/ "XkIg":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/security/list.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "1dmT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcs.js */ "vXSC");





Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "roleAssignments", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* RoleAssignments */ "t"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "firstUniqueAncestorSecurableObject", _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPInstance */ "t"]);
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.getUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* getUserEffectivePermissions */ "a"];
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.getCurrentUserEffectivePermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentUserEffectivePermissions */ "n"];
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.breakRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* breakRoleInheritance */ "e"];
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.resetRoleInheritance = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* resetRoleInheritance */ "r"];
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.userHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* userHasPermissions */ "o"];
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.currentUserHasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* currentUserHasPermissions */ "t"];
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.hasPermissions = _funcs_js__WEBPACK_IMPORTED_MODULE_4__[/* hasPermissions */ "i"];
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "YFv9":
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/version.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fluentui_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/set-version */ "orH7");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_fluentui_set_version__WEBPACK_IMPORTED_MODULE_0__[/* setVersion */ "e"])('@fluentui/style-utilities', '8.10.7');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "YFzv":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/file-names.js ***!
  \**************************************************/
/*! exports provided: containsInvalidFileFolderChars, stripInvalidFileFolderChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export containsInvalidFileFolderChars */
/* unused harmony export stripInvalidFileFolderChars */
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnlineRegex = /["*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnPremiseRegex = /["#%*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
/**
 * Checks if file or folder name contains invalid characters
 *
 * @param input File or folder name to check
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns True if contains invalid chars, false otherwise
 */
function containsInvalidFileFolderChars(input, onPremise = false) {
    if (onPremise) {
        return InvalidFileFolderNameCharsOnPremiseRegex.test(input);
    }
    else {
        return InvalidFileFolderNameCharsOnlineRegex.test(input);
    }
}
/**
 * Removes invalid characters from file or folder name
 *
 * @param input File or folder name
 * @param replacer Value that will replace invalid characters
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns File or folder name with replaced invalid characters
 */
function stripInvalidFileFolderChars(input, replacer = "", onPremise = false) {
    if (onPremise) {
        return input.replace(InvalidFileFolderNameCharsOnPremiseRegex, replacer);
    }
    else {
        return input.replace(InvalidFileFolderNameCharsOnlineRegex, replacer);
    }
}
//# sourceMappingURL=file-names.js.map

/***/ }),

/***/ "Ymo3":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/queryable/index.js ***!
  \**********************************************/
/*! exports provided: addProp, invokable, get, post, put, patch, del, op, Queryable, queryableFactory, body, headers, BearerToken, BrowserFetch, BrowserFetchWithRetry, CacheAlways, CacheNever, CacheKey, Caching, bindCachingCore, CachingPessimisticRefresh, asCancelableScope, cancelableScope, Cancelable, CancelAction, InjectHeaders, DefaultParse, TextParse, BlobParse, JSONParse, BufferParse, HeaderParse, JSONHeaderParse, errorCheck, parseODataJSON, parseBinderWithErrorCheck, HttpRequestError, Timeout, ResolveOnData, RejectOnError */
/*! exports used: BlobParse, BrowserFetchWithRetry, BufferParse, CacheAlways, CacheKey, CacheNever, CancelAction, DefaultParse, InjectHeaders, JSONParse, Queryable, RejectOnError, ResolveOnData, TextParse, addProp, body, cancelableScope, del, get, headers, invokable, op, parseBinderWithErrorCheck, parseODataJSON, patch, post, queryableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _add_prop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-prop.js */ "V4GX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _add_prop_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var _invokable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invokable.js */ "/sQB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "y", function() { return _invokable_js__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "h6Ct");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "x", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "C", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["i"]; });

/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryable.js */ "Ww49");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _queryable_js__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony import */ var _queryable_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queryable-factory.js */ "359w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "O", function() { return _queryable_factory_js__WEBPACK_IMPORTED_MODULE_4__["e"]; });

/* harmony import */ var _request_builders_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-builders.js */ "0qgB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _request_builders_js__WEBPACK_IMPORTED_MODULE_5__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v", function() { return _request_builders_js__WEBPACK_IMPORTED_MODULE_5__["t"]; });

/* harmony import */ var _behaviors_bearer_token_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/bearer-token.js */ "WE4i");
/* harmony import */ var _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./behaviors/browser-fetch.js */ "do2w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_7__["e"]; });

/* harmony import */ var _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviors/caching.js */ "VxMn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__["n"]; });

/* harmony import */ var _behaviors_caching_pessimistic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviors/caching-pessimistic.js */ "qL0N");
/* harmony import */ var _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/cancelable.js */ "+y5s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_10__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_10__["t"]; });

/* harmony import */ var _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./behaviors/inject-headers.js */ "XOGp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_11__["e"]; });

/* harmony import */ var _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./behaviors/parsers.js */ "udT0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["s"]; });

/* harmony import */ var _behaviors_timeout_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./behaviors/timeout.js */ "ISfK");
/* harmony import */ var _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./behaviors/resolvers.js */ "tGZ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_14__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_14__["t"]; });







/**
 * Behavior exports
 */









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "YpSs":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/search/types.js ***!
  \**********************************************/
/*! exports provided: SortDirection, ReorderingRuleMatchType, QueryPropertyValueType, SearchBuiltInSourceId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SortDirection */
/* unused harmony export ReorderingRuleMatchType */
/* unused harmony export QueryPropertyValueType */
/* unused harmony export SearchBuiltInSourceId */
/**
 * defines the SortDirection enum
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
    SortDirection[SortDirection["Descending"] = 1] = "Descending";
    SortDirection[SortDirection["FQLFormula"] = 2] = "FQLFormula";
})(SortDirection || (SortDirection = {}));
/**
 * defines the ReorderingRuleMatchType  enum
 */
var ReorderingRuleMatchType;
(function (ReorderingRuleMatchType) {
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultContainsKeyword"] = 0] = "ResultContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleContainsKeyword"] = 1] = "TitleContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleMatchesKeyword"] = 2] = "TitleMatchesKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlStartsWith"] = 3] = "UrlStartsWith";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlExactlyMatches"] = 4] = "UrlExactlyMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ContentTypeIs"] = 5] = "ContentTypeIs";
    ReorderingRuleMatchType[ReorderingRuleMatchType["FileExtensionMatches"] = 6] = "FileExtensionMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultHasTag"] = 7] = "ResultHasTag";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ManualCondition"] = 8] = "ManualCondition";
})(ReorderingRuleMatchType || (ReorderingRuleMatchType = {}));
/**
 * Specifies the type value for the property
 */
var QueryPropertyValueType;
(function (QueryPropertyValueType) {
    QueryPropertyValueType[QueryPropertyValueType["None"] = 0] = "None";
    QueryPropertyValueType[QueryPropertyValueType["StringType"] = 1] = "StringType";
    QueryPropertyValueType[QueryPropertyValueType["Int32Type"] = 2] = "Int32Type";
    QueryPropertyValueType[QueryPropertyValueType["BooleanType"] = 3] = "BooleanType";
    QueryPropertyValueType[QueryPropertyValueType["StringArrayType"] = 4] = "StringArrayType";
    QueryPropertyValueType[QueryPropertyValueType["UnSupportedType"] = 5] = "UnSupportedType";
})(QueryPropertyValueType || (QueryPropertyValueType = {}));
class SearchBuiltInSourceId {
}
SearchBuiltInSourceId.Documents = "e7ec8cee-ded8-43c9-beb5-436b54b31e84";
SearchBuiltInSourceId.ItemsMatchingContentType = "5dc9f503-801e-4ced-8a2c-5d1237132419";
SearchBuiltInSourceId.ItemsMatchingTag = "e1327b9c-2b8c-4b23-99c9-3730cb29c3f7";
SearchBuiltInSourceId.ItemsRelatedToCurrentUser = "48fec42e-4a92-48ce-8363-c2703a40e67d";
SearchBuiltInSourceId.ItemsWithSameKeywordAsThisItem = "5c069288-1d17-454a-8ac6-9c642a065f48";
SearchBuiltInSourceId.LocalPeopleResults = "b09a7990-05ea-4af9-81ef-edfab16c4e31";
SearchBuiltInSourceId.LocalReportsAndDataResults = "203fba36-2763-4060-9931-911ac8c0583b";
SearchBuiltInSourceId.LocalSharePointResults = "8413cd39-2156-4e00-b54d-11efd9abdb89";
SearchBuiltInSourceId.LocalVideoResults = "78b793ce-7956-4669-aa3b-451fc5defebf";
SearchBuiltInSourceId.Pages = "5e34578e-4d08-4edc-8bf3-002acf3cdbcc";
SearchBuiltInSourceId.Pictures = "38403c8c-3975-41a8-826e-717f2d41568a";
SearchBuiltInSourceId.Popular = "97c71db1-58ce-4891-8b64-585bc2326c12";
SearchBuiltInSourceId.RecentlyChangedItems = "ba63bbae-fa9c-42c0-b027-9a878f16557c";
SearchBuiltInSourceId.RecommendedItems = "ec675252-14fa-4fbe-84dd-8d098ed74181";
SearchBuiltInSourceId.Wiki = "9479bf85-e257-4318-b5a8-81a180f5faa1";
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "Z+an":
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/StyleOptionsState.js ***!
  \**********************************************************************/
/*! exports provided: setRTL, getRTL, getStyleOptions */
/*! exports used: getStyleOptions, setRTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return setRTL; });
/* unused harmony export getRTL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getStyleOptions; });
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        _rtl = isRTL;
    }
}
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl =
            // eslint-disable-next-line no-restricted-globals
            typeof document !== 'undefined' &&
                // eslint-disable-next-line no-restricted-globals
                !!document.documentElement &&
                // eslint-disable-next-line no-restricted-globals
                document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
// This has been split into 2 lines because it was working in Fabric due to the code being transpiled to es5, so this
// was converted to var while not working in Fluent that uses babel to transpile the code to be es6-like. Splitting the
// logic into two lines, however, allows it to work in both scenarios.
var _rtl;
_rtl = getRTL();
function getStyleOptions() {
    return {
        rtl: getRTL(),
    };
}
//# sourceMappingURL=StyleOptionsState.js.map

/***/ }),

/***/ "ZdGM":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/navigation/index.js ***!
  \**************************************************/
/*! exports provided: Navigation, NavigationNode, NavigationNodes, NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "BK4w");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ "pTlN");




Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype, "navigation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* NavigationService */ "t"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Zee4":
/*!******************************************************************!*\
  !*** ./node_modules/@pnp/sp/publishing-sitepageservice/index.js ***!
  \******************************************************************/
/*! exports provided: SitePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "UKI9");



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype, "publishingSitePageService", {
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* SitePageService */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Zlzk":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/features/site.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _sites_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sites/types.js */ "ilAS");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "HHhI");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_sites_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Site */ "t"], "features", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Features */ "e"]);
//# sourceMappingURL=site.js.map

/***/ }),

/***/ "Zxkc":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Spinner/Spinner.styles.js ***!
  \*******************************************************************************/
/*! exports provided: getStyles */
/*! exports used: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Spinner_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.types */ "oR7b");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styling */ "Dfs8");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "GJV8");




var GlobalClassNames = {
    root: 'ms-Spinner',
    circle: 'ms-Spinner-circle',
    label: 'ms-Spinner-label',
};
var spinAnimation = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__[/* memoizeFunction */ "e"])(function () {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__[/* keyframes */ "i"])({
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        },
    });
});
var getStyles = function (props) {
    var _a;
    var theme = props.theme, size = props.size, className = props.className, labelPosition = props.labelPosition;
    var palette = theme.palette;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__[/* getGlobalClassNames */ "t"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            labelPosition === 'top' && {
                flexDirection: 'column-reverse',
            },
            labelPosition === 'right' && {
                flexDirection: 'row',
            },
            labelPosition === 'left' && {
                flexDirection: 'row-reverse',
            },
            className,
        ],
        circle: [
            classNames.circle,
            {
                boxSizing: 'border-box',
                borderRadius: '50%',
                border: '1.5px solid ' + palette.themeLight,
                borderTopColor: palette.themePrimary,
                animationName: spinAnimation(),
                animationDuration: '1.3s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'cubic-bezier(.53,.21,.29,.67)',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_2__[/* HighContrastSelector */ "e"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({ borderTopColor: 'Highlight' }, Object(_Styling__WEBPACK_IMPORTED_MODULE_2__[/* getHighContrastNoAdjustStyle */ "n"])()),
                    _a),
            },
            size === _Spinner_types__WEBPACK_IMPORTED_MODULE_1__[/* SpinnerSize */ "e"].xSmall && [
                'ms-Spinner--xSmall',
                {
                    width: 12,
                    height: 12,
                },
            ],
            size === _Spinner_types__WEBPACK_IMPORTED_MODULE_1__[/* SpinnerSize */ "e"].small && [
                'ms-Spinner--small',
                {
                    width: 16,
                    height: 16,
                },
            ],
            size === _Spinner_types__WEBPACK_IMPORTED_MODULE_1__[/* SpinnerSize */ "e"].medium && [
                'ms-Spinner--medium',
                {
                    width: 20,
                    height: 20,
                },
            ],
            size === _Spinner_types__WEBPACK_IMPORTED_MODULE_1__[/* SpinnerSize */ "e"].large && [
                'ms-Spinner--large',
                {
                    width: 28,
                    height: 28,
                },
            ],
        ],
        label: [
            classNames.label,
            theme.fonts.small,
            {
                color: palette.themePrimary,
                margin: '8px 0 0',
                textAlign: 'center',
            },
            labelPosition === 'top' && {
                margin: '0 0 8px',
            },
            labelPosition === 'right' && {
                margin: '0 0 0 8px',
            },
            labelPosition === 'left' && {
                margin: '0 8px 0 0',
            },
        ],
        screenReaderText: _Styling__WEBPACK_IMPORTED_MODULE_2__[/* hiddenContentStyle */ "a"],
    };
};
//# sourceMappingURL=Spinner.styles.js.map

/***/ }),

/***/ "ah5w":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/security/index.js ***!
  \************************************************/
/*! exports provided: RoleAssignment, RoleAssignments, RoleDefinition, RoleDefinitions, PermissionKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "Ka72");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "XkIg");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ "4G66");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "1dmT");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "amhO":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/appcatalog/web.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "ArVI");



// we use this function to wrap the AppCatalog as we want to ignore any path values addProp
// will pass and use the defaultPath defined for AppCatalog
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "appcatalog", (s) => Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* AppCatalog */ "e"])(s, "_api/web/sitecollectionappcatalog/AvailableApps"));
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "auja":
/*!****************************************************************!*\
  !*** ./node_modules/@pnp/sp/regional-settings/content-type.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _content_types_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content-types/types.js */ "S3gC");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcs.js */ "T2j4");


_content_types_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _ContentType */ "n"].prototype.titleResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_1__[/* getValueForUICultureBinder */ "e"])("nameResource");
_content_types_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _ContentType */ "n"].prototype.descriptionResource = Object(_funcs_js__WEBPACK_IMPORTED_MODULE_1__[/* getValueForUICultureBinder */ "e"])("descriptionResource");
//# sourceMappingURL=content-type.js.map

/***/ }),

/***/ "b/a5":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/content-types/list.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "S3gC");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "contentTypes", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* ContentTypes */ "t"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "b9JD":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/site-scripts/types.js ***!
  \****************************************************/
/*! exports provided: _SiteScripts, SiteScripts, SiteScriptActionOutcome */
/*! exports used: SiteScripts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _SiteScripts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SiteScripts; });
/* unused harmony export SiteScriptActionOutcome */
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");






class _SiteScripts extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPQueryable */ "r"] {
    constructor(base, methodName = "") {
        super(base);
        this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_4__[/* combine */ "s"])(Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__[/* extractWebUrl */ "e"])(this._url), `_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.${methodName}`);
    }
    run(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_1__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])(props));
    }
    /**
     * Gets a list of information on all existing site scripts.
     */
    getSiteScripts() {
        return SiteScriptsCloneFactory(this, "GetSiteScripts").run({});
    }
    /**
     * Creates a new site script.
     *
     * @param title The display name of the site script.
     * @param content JSON value that describes the script. For more information, see JSON reference.
     */
    createSiteScript(title, description, content) {
        return SiteScriptsCloneFactory(this, `CreateSiteScript(Title=@title,Description=@desc)?@title='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__[/* encodePath */ "e"])(title)}'&@desc='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__[/* encodePath */ "e"])(description)}'`)
            .run(content);
    }
    /**
     * Gets information about a specific site script. It also returns the JSON of the script.
     *
     * @param id The ID of the site script to get information about.
     */
    getSiteScriptMetadata(id) {
        return SiteScriptsCloneFactory(this, "GetSiteScriptMetadata").run({ id });
    }
    /**
     * Deletes a site script.
     *
     * @param id The ID of the site script to delete.
     */
    deleteSiteScript(id) {
        return SiteScriptsCloneFactory(this, "DeleteSiteScript").run({ id });
    }
    /**
     * Updates a site script with new values. In the REST call, all parameters are optional except the site script Id.
     *
     * @param siteScriptUpdateInfo Object that contains the information to update a site script.
     *                             Make sure you stringify the content object or pass it in the second 'content' parameter
     * @param content (Optional) A new JSON script defining the script actions. For more information, see Site design JSON schema.
     */
    updateSiteScript(updateInfo, content) {
        if (content) {
            updateInfo.Content = JSON.stringify(content);
        }
        return SiteScriptsCloneFactory(this, "UpdateSiteScript").run({ updateInfo });
    }
    /**
     * Gets the site script syntax (JSON) for a specific list
     * @param listUrl The absolute url of the list to retrieve site script
     */
    getSiteScriptFromList(listUrl) {
        return SiteScriptsCloneFactory(this, "GetSiteScriptFromList").run({ listUrl });
    }
    /**
     * Gets the site script syntax (JSON) for a specific web
     * @param webUrl The absolute url of the web to retrieve site script
     * @param extractInfo configuration object to specify what to extract
     */
    getSiteScriptFromWeb(webUrl, info) {
        return SiteScriptsCloneFactory(this, "getSiteScriptFromWeb").run({ webUrl, info });
    }
    /**
     * Executes the indicated site design action on the indicated web.
     *
     * @param webUrl The absolute url of the web to retrieve site script
     * @param extractInfo configuration object to specify what to extract
     */
    executeSiteScriptAction(actionDefinition) {
        return SiteScriptsCloneFactory(this, "executeSiteScriptAction").run({ actionDefinition });
    }
}
const SiteScripts = (baseUrl, methodName) => new _SiteScripts(baseUrl, methodName);
const SiteScriptsCloneFactory = (baseUrl, methodName = "") => SiteScripts(baseUrl, methodName);
var SiteScriptActionOutcome;
(function (SiteScriptActionOutcome) {
    /**
     * The stage was deemed to have completed successfully.
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["Success"] = 0] = "Success";
    /**
     * The stage was deemed to have failed to complete successfully (non-blocking, rest of recipe
     * execution should still be able to proceed).
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["Failure"] = 1] = "Failure";
    /**
     * No action was taken for this stage / this stage was skipped.
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["NoOp"] = 2] = "NoOp";
    /**
     * There was an exception but the operation succeeded. This is analagous to the operation completing
     * in a "yellow" state.
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["SucceededWithException"] = 3] = "SucceededWithException";
})(SiteScriptActionOutcome || (SiteScriptActionOutcome = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: BaseClientSideWebPart */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cBu+":
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/getVendorSettings.js ***!
  \**********************************************************************/
/*! exports provided: getVendorSettings, setVendorSettings */
/*! exports used: getVendorSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getVendorSettings; });
/* unused harmony export setVendorSettings */
var _vendorSettings;
function getVendorSettings() {
    var _a;
    if (!_vendorSettings) {
        // eslint-disable-next-line no-restricted-globals
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = (_a = nav === null || nav === void 0 ? void 0 : nav.userAgent) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true,
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent))),
            };
        }
    }
    return _vendorSettings;
}
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
//# sourceMappingURL=getVendorSettings.js.map

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! exports used: Children, Component, Fragment, createContext, createElement, forwardRef, memo, useContext, useEffect, useRef, useState */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "dDSX":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/sp/favorites/index.js ***!
  \*************************************************/
/*! exports provided: Favorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "CxyI");



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype, "favorites", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Favorites */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "dGPD":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/content-types/index.js ***!
  \*****************************************************/
/*! exports provided: ContentType, ContentTypes, FieldLink, FieldLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "M9RU");
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.js */ "4Egx");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "b/a5");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "S3gC");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "dRNj":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/subscriptions/list.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "N3o1");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "subscriptions", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Subscriptions */ "e"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "dVsc":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/types.js ***!
  \********************************************/
/*! exports provided: _Webs, Webs, _Web, Web */
/*! exports used: Web, _Web */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Webs */
/* unused harmony export Webs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _Web; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Web; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");









let _Webs = class _Webs extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    async add(Title, Url, Description = "", WebTemplate = "STS", Language = 1033, UseSamePermissionsAsParentSite = true) {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({
            "parameters": {
                Description,
                Language,
                Title,
                Url,
                UseSamePermissionsAsParentSite,
                WebTemplate,
            },
        });
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Webs(this, "add"), postBody);
        return {
            data,
            web: Web([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__[/* odataUrlFrom */ "e"])(data).replace(/_api\/web\/?/i, "")]),
        };
    }
};
_Webs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("webs")
], _Webs);

const Webs = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Webs);
/**
 * Ensures the url passed to the constructor is correctly rebased to a web url
 *
 * @param candidate The candidate web url
 * @param path The caller supplied path, which may contain _api, meaning we don't append _api/web
 */
function rebaseWebUrl(candidate, path) {
    let replace = "_api/web";
    // this allows us to both:
    // - test if `candidate` already has an api path
    // - ensure that we append the correct one as sometimes a web is not defined
    //   by _api/web, in the case of _api/site/rootweb for example
    const matches = /(_api[/|\\](site\/rootweb|site|web))/i.exec(candidate);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) > 0) {
        // we want just the base url part (before the _api)
        candidate = Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_6__[/* extractWebUrl */ "e"])(candidate);
        // we want to ensure we put back the correct string
        replace = matches[1];
    }
    // we only need to append the _api part IF `path` doesn't already include it.
    if ((path === null || path === void 0 ? void 0 : path.indexOf("_api")) < 0) {
        candidate = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_7__[/* combine */ "s"])(candidate, replace);
    }
    return candidate;
}
/**
 * Describes a web
 *
 */
let _Web = class _Web extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
    constructor(base, path) {
        if (typeof base === "string") {
            base = rebaseWebUrl(base, path);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_7__[/* isArray */ "m"])(base)) {
            base = [base[0], rebaseWebUrl(base[1], path)];
        }
        else {
            base = [base, rebaseWebUrl(base.toUrl(), path)];
        }
        super(base, path);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* deleteable */ "o"])();
    }
    /**
     * Gets this web's subwebs
     *
     */
    get webs() {
        return Webs(this);
    }
    /**
     * Allows access to the web's all properties collection
     */
    get allProperties() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])(this, "allproperties");
    }
    /**
     * Gets a collection of WebInfos for this web's subwebs
     *
     */
    get webinfos() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPCollection */ "e"])(this, "webinfos");
    }
    /**
     * Gets this web's parent web and data
     *
     */
    async getParentWeb() {
        const { Url, ParentWeb } = await this.select("Url", "ParentWeb/ServerRelativeUrl").expand("ParentWeb")();
        if (ParentWeb === null || ParentWeb === void 0 ? void 0 : ParentWeb.ServerRelativeUrl) {
            return Web([this, Object(_pnp_core__WEBPACK_IMPORTED_MODULE_7__[/* combine */ "s"])((new URL(Url)).origin, ParentWeb.ServerRelativeUrl)]);
        }
        return null;
    }
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    async update(properties) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])(properties));
    }
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({
            backgroundImageUrl,
            colorPaletteUrl,
            fontSchemeUrl,
            shareGenerated,
        });
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Web(this, "applytheme"), postBody);
    }
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    applyWebTemplate(template) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Web(this, `applywebtemplate(webTemplate='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__[/* encodePath */ "e"])(template)}')`));
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Web(this, "getchanges"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({ query }));
    }
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    mapToIcon(filename, size = 0, progId = "") {
        return Web(this, `maptoicon(filename='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__[/* encodePath */ "e"])(filename)}',progid='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__[/* encodePath */ "e"])(progId)}',size=${size})`)();
    }
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    getStorageEntity(key) {
        return Web(this, `getStorageEntity('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__[/* encodePath */ "e"])(key)}')`)();
    }
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    setStorageEntity(key, value, description = "", comments = "") {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Web(this, "setStorageEntity"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({
            comments,
            description,
            key,
            value,
        }));
    }
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    removeStorageEntity(key) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Web(this, `removeStorageEntity('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__[/* encodePath */ "e"])(key)}')`));
    }
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter = -1, nConfigurationFilter = -1) {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPCollection */ "e"])(this, `getSubwebsFilteredForCurrentUser(nWebTemplateFilter=${nWebTemplateFilter},nConfigurationFilter=${nConfigurationFilter})`);
    }
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    availableWebTemplates(language = 1033, includeCrossLanugage = true) {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPCollection */ "e"])(this, `getavailablewebtemplates(lcid=${language},doincludecrosslanguage=${includeCrossLanugage})`);
    }
};
_Web = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("_api/web")
], _Web);

const Web = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Web);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "dYBM":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/views/index.js ***!
  \*********************************************/
/*! exports provided: View, ViewFields, Views, ViewScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "iV2g");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "32VY");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "dkd8":
/*!****************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/GlobalSettings.js ***!
  \****************************************************************/
/*! exports provided: GlobalSettings */
/*! exports used: GlobalSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GlobalSettings; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "pyJV");

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        var globalSettings = _getGlobalSettings();
        if (globalSettings[key] === undefined) {
            globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var globalSettings = _getGlobalSettings();
        var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
        var oldValue = globalSettings[key];
        if (value !== oldValue) {
            globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key,
            };
            for (var id in callbacks) {
                if (callbacks.hasOwnProperty(id)) {
                    callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        var callbacks = _getCallbacks();
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        var callbacks = _getCallbacks();
        delete callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _getGlobalSettings() {
    var _a;
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "e"])();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var globalObj = win || {};
    if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
        globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {},
            _a[CALLBACK_STATE_PROP_NAME] = {},
            _a);
    }
    return globalObj[GLOBAL_SETTINGS_PROP_NAME];
}
function _getCallbacks() {
    var globalSettings = _getGlobalSettings();
    return globalSettings[CALLBACK_STATE_PROP_NAME];
}
//# sourceMappingURL=GlobalSettings.js.map

/***/ }),

/***/ "do2w":
/*!****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/browser-fetch.js ***!
  \****************************************************************/
/*! exports provided: BrowserFetch, BrowserFetchWithRetry */
/*! exports used: BrowserFetchWithRetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrowserFetch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BrowserFetchWithRetry; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers.js */ "udT0");


function BrowserFetch(props) {
    const { replace } = {
        replace: true,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            this.log(`Fetch: ${init.method} ${url.toString()}`, 0);
            return fetch(url.toString(), init);
        });
        return instance;
    };
}
function BrowserFetchWithRetry(props) {
    const { interval, replace, retries } = {
        replace: true,
        interval: 200,
        retries: 3,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            let response;
            let wait = interval;
            let count = 0;
            let lastErr;
            const retry = async () => {
                // if we've tried too many times, throw
                if (count >= retries) {
                    throw lastErr || new _parsers_js__WEBPACK_IMPORTED_MODULE_1__[/* HttpRequestError */ "a"](`Retry count exceeded (${retries}) for this request. ${response.status}: ${response.statusText};`, response);
                }
                count++;
                if (typeof response === "undefined" || (response === null || response === void 0 ? void 0 : response.status) === 429 || (response === null || response === void 0 ? void 0 : response.status) === 503 || (response === null || response === void 0 ? void 0 : response.status) === 504) {
                    // this is our first try and response isn't defined yet
                    // we have been throttled OR http status code 503 or 504, we can retry this
                    if (typeof response !== "undefined") {
                        // this isn't our first try so we need to calculate delay
                        if (response.headers.has("Retry-After")) {
                            // if we have gotten a header, use that value as the delay value in seconds
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            wait = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                        }
                        else {
                            // Increment our counters.
                            wait *= 2;
                        }
                        this.log(`Attempt #${count} to retry request which failed with ${response.status}: ${response.statusText}`, 0);
                        await Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* delay */ "d"])(wait);
                    }
                    try {
                        const u = url.toString();
                        this.log(`Fetch: ${init.method} ${u}`, 0);
                        response = await fetch(u, init);
                        // if we got a good response, return it, otherwise see if we can retry
                        return response.ok ? response : retry();
                    }
                    catch (err) {
                        if (/AbortError/.test(err.name)) {
                            // don't retry aborted requests
                            throw err;
                        }
                        // if there is no network the response is undefined and err is all we have
                        // so we grab the err and save it to throw if we exceed the number of retries
                        // #2226 first reported this
                        lastErr = err;
                        return retry();
                    }
                }
                else {
                    return response;
                }
            };
            // this the the first call to retry that starts the cycle
            // response is undefined and the other values have their defaults
            return retry();
        });
        return instance;
    };
}
//# sourceMappingURL=browser-fetch.js.map

/***/ }),

/***/ "e5OY":
/*!********************************************************************************!*\
  !*** ./lib/webparts/gestionPersonajes/componentes/GestionPersonajesWebPart.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GestorPersonajesWebPart; });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "5JhY");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Entidades_Personaje_PersonajeLista__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Entidades/Personaje/PersonajeLista */ "XLN9");



function GestorPersonajesWebPart(props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true), cargando = _a[0], setCargando = _a[1];
    var lista = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        lista.current = new _Entidades_Personaje_PersonajeLista__WEBPACK_IMPORTED_MODULE_2__[/* PersonajeLista */ "e"](props.SP.web, props.WebPartContext);
        lista.current.CargarTodos().then(function (Items) {
            console.log(Items);
        });
        setTimeout(function () {
            setCargando(false);
        }, 2000);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_fluentui_react__WEBPACK_IMPORTED_MODULE_0__[/* Spinner */ "e"], { hidden: !cargando })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { hidden: cargando },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Ejemplo Webpart"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Este es un ejemplo de webpart"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "Estamos en el sitio ",
                props.WebPartContext.pageContext.web.absoluteUrl))));
}


/***/ }),

/***/ "eDdy":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/site-designs/web.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "w4d6");


_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.getSiteDesignRuns = function (siteDesignId) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* SiteDesigns */ "e"])(this, "").getSiteDesignRun(undefined, siteDesignId);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.addSiteDesignTask = function (siteDesignId) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* SiteDesigns */ "e"])(this, "").addSiteDesignTaskToCurrentWeb(siteDesignId);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.getSiteDesignRunStatus = function (runId) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* SiteDesigns */ "e"])(this, "").getSiteDesignRunStatus(undefined, runId);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "eKJE":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/profiles/index.js ***!
  \************************************************/
/*! exports provided: Profiles, UrlZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "+QQQ");



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__[/* SPFI */ "e"].prototype, "profiles", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* Profiles */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "ePGq":
/*!**********************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/KeyCodes.js ***!
  \**********************************************************/
/*! exports provided: KeyCodes */
/*! exports used: KeyCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return KeyCodes; });
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    colon: 58,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    /* eslint-disable @typescript-eslint/naming-convention */
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    /* eslint-enable @typescript-eslint/naming-convention */
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222,
};
//# sourceMappingURL=KeyCodes.js.map

/***/ }),

/***/ "emH4":
/*!**************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/transforms/kebabRules.js ***!
  \**************************************************************************/
/*! exports provided: kebabRules */
/*! exports used: kebabRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return kebabRules; });
var rules = {};
function kebabRules(rulePairs, index) {
    var rule = rulePairs[index];
    if (rule.charAt(0) !== '-') {
        rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
}
//# sourceMappingURL=kebabRules.js.map

/***/ }),

/***/ "fB9m":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/search/suggest.js ***!
  \************************************************/
/*! exports provided: _Suggest, Suggest */
/*! exports used: _Suggest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _Suggest; });
/* unused harmony export Suggest */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");




let _Suggest = class _Suggest extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    async run(query) {
        this.mapQueryToQueryString(query);
        const response = await this();
        const mapper = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* hOP */ "p"])(response, "suggest") ? (s_1) => response.suggest[s_1].results : (s_2) => response[s_2];
        return {
            PeopleNames: mapper("PeopleNames"),
            PersonalResults: mapper("PersonalResults"),
            Queries: mapper("Queries"),
        };
    }
    mapQueryToQueryString(query) {
        const setProp = (q) => (checkProp) => (sp) => {
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* hOP */ "p"])(q, checkProp)) {
                this.query.set(sp, q[checkProp].toString());
            }
        };
        this.query.set("querytext", `'${query.querytext}'`);
        const querySetter = setProp(query);
        querySetter("count")("inumberofquerysuggestions");
        querySetter("personalCount")("inumberofresultsuggestions");
        querySetter("preQuery")("fprequerysuggestions");
        querySetter("hitHighlighting")("fhithighlighting");
        querySetter("capitalize")("fcapitalizefirstletters");
        querySetter("culture")("culture");
        querySetter("stemming")("enablestemming");
        querySetter("includePeople")("showpeoplenamesuggestions");
        querySetter("queryRules")("enablequeryrules");
        querySetter("prefixMatch")("fprefixmatchallterms");
    }
};
_Suggest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("_api/search/suggest")
], _Suggest);

const Suggest = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Suggest);
//# sourceMappingURL=suggest.js.map

/***/ }),

/***/ "fTfs":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/files/readable-file.js ***!
  \*****************************************************/
/*! exports provided: ReadableFile */
/*! exports used: ReadableFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ReadableFile; });
/* harmony import */ var _pnp_queryable_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable/index.js */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");


class ReadableFile extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    /**
     * Gets the contents of the file as text. Not supported in batching.
     *
     */
    getText() {
        return this.getParsed(Object(_pnp_queryable_index_js__WEBPACK_IMPORTED_MODULE_0__[/* TextParse */ "p"])());
    }
    /**
     * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
     *
     */
    getBlob() {
        return this.getParsed(Object(_pnp_queryable_index_js__WEBPACK_IMPORTED_MODULE_0__[/* BlobParse */ "e"])());
    }
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    getBuffer() {
        return this.getParsed(Object(_pnp_queryable_index_js__WEBPACK_IMPORTED_MODULE_0__[/* BufferParse */ "n"])());
    }
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    getJSON() {
        return this.getParsed(Object(_pnp_queryable_index_js__WEBPACK_IMPORTED_MODULE_0__[/* JSONParse */ "d"])());
    }
    getParsed(parser) {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPQueryable */ "n"])(this, "$value").using(parser, Object(_pnp_queryable_index_js__WEBPACK_IMPORTED_MODULE_0__[/* CacheNever */ "r"])())();
    }
}
//# sourceMappingURL=readable-file.js.map

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/*! exports used: render, unmountComponentAtNode */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "g3rt":
/*!**********************************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/customizations/CustomizerContext.js ***!
  \**********************************************************************************/
/*! exports provided: CustomizerContext */
/*! exports used: CustomizerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CustomizerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CustomizerContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {},
    },
});
//# sourceMappingURL=CustomizerContext.js.map

/***/ }),

/***/ "gN5f":
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/extractStyleParts.js ***!
  \**********************************************************************/
/*! exports provided: extractStyleParts */
/*! exports used: extractStyleParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return extractStyleParts; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "psVN");

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__[/* Stylesheet */ "e"].getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects,
    };
}
//# sourceMappingURL=extractStyleParts.js.map

/***/ }),

/***/ "gu2o":
/*!**************************************************!*\
  !*** ./lib/Entidades/Personaje/PersonajeItem.js ***!
  \**************************************************/
/*! exports provided: PersonajeItem */
/*! exports used: PersonajeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PersonajeItem; });
var PersonajeItem = /** @class */ (function () {
    function PersonajeItem(ListItem, Lista) {
        this.ListItem = ListItem;
        this.Lista = Lista;
    }
    PersonajeItem.prototype.MapearCampos = function () {
        this.Nombre = this.ListItem.Personaje_Nombre;
        this.Jugador = this.ListItem.Personaje_Usuario;
        this.Clase = this.ListItem.Personaje_Clase;
        this.Nivel = this.ListItem.Personaje_Nivel;
        this.Raza = this.ListItem.Personaje_Raza;
        this.Alinamiento = this.ListItem.Personaje_Alinamiento;
        this.Estado = this.ListItem.Personaje_Estado;
        this.Edad = this.ListItem.Personaje_Edad;
        this.Altura = this.ListItem.Personaje_Altura;
        this.Peso = this.ListItem.Personaje_Peso;
        this.Ojos = this.ListItem.Personaje_Ojos;
        this.Piel = this.ListItem.Personaje_Piel;
        this.Pelo = this.ListItem.Personaje_Pelo;
        this.Foto = this.ListItem.Personaje_Foto;
    };
    return PersonajeItem;
}());



/***/ }),

/***/ "h6Ct":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/queryable/operations.js ***!
  \***************************************************/
/*! exports provided: get, post, put, patch, del, op */
/*! exports used: del, get, op, patch, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return post; });
/* unused harmony export put */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return op; });
function ensureInit(method, init = { headers: {} }) {
    return { method, ...init, headers: { ...init.headers } };
}
function get(init) {
    return this.start(ensureInit("GET", init));
}
function post(init) {
    return this.start(ensureInit("POST", init));
}
function put(init) {
    return this.start(ensureInit("PUT", init));
}
function patch(init) {
    return this.start(ensureInit("PATCH", init));
}
function del(init) {
    return this.start(ensureInit("DELETE", init));
}
function op(q, operation, init) {
    return Reflect.apply(operation, q, [init]);
}
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "hMpi":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/decorators.js ***!
  \********************************************/
/*! exports provided: defaultPath */
/*! exports used: defaultPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultPath; });
/**
 * Decorator used to specify the default path for SPQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(args[0], args.length > 1 && args[1] !== undefined ? args[1] : path);
            }
        };
    };
}
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "hTrG":
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/odata-url-from.js ***!
  \******************************************************/
/*! exports provided: odataUrlFrom */
/*! exports used: odataUrlFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return odataUrlFrom; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extract-web-url.js */ "OXUt");


function odataUrlFrom(candidate) {
    const parts = [];
    const s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(candidate, s[3]) && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            const editLink = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "h"])(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push(Object(_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__[/* extractWebUrl */ "e"])(candidate[s[3]]), "_api", editLink);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        return "";
    }
    return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(...parts);
}
//# sourceMappingURL=odata-url-from.js.map

/***/ }),

/***/ "hy0S":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/types.js ***!
  \*********************************************/
/*! exports provided: _Lists, Lists, _List, List, RenderListDataOptions, ControlMode */
/*! exports used: List, Lists, _List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Lists */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return List; });
/* unused harmony export RenderListDataOptions */
/* unused harmony export ControlMode */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-resource-path.js */ "G6u6");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");









let _Lists = class _Lists extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPCollection */ "a"] {
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    getById(id) {
        return List(this).concat(`('${id}')`);
    }
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    getByTitle(title) {
        return List(this, `getByTitle('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__[/* encodePath */ "e"])(title)}')`);
    }
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    async add(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addSettings = {
            "AllowContentTypes": enableContentTypes,
            "BaseTemplate": template,
            "ContentTypesEnabled": enableContentTypes,
            "Description": desc,
            "Title": title,
            ...additionalSettings,
        };
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(addSettings));
        return { data, list: this.getByTitle(addSettings.Title) };
    }
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    async ensure(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addOrUpdateSettings = { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes, ...additionalSettings };
        const list = this.getByTitle(addOrUpdateSettings.Title);
        try {
            await list.select("Title")();
            const data = await list.update(addOrUpdateSettings).then(r => r.data);
            return { created: false, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
        catch (e) {
            const data = await this.add(title, desc, template, enableContentTypes, addOrUpdateSettings).then(r => r.data);
            return { created: true, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
    }
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    async ensureSiteAssetsLibrary() {
        const json = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(Lists(this, "ensuresiteassetslibrary"));
        return List([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__[/* odataUrlFrom */ "e"])(json)]);
    }
    /**
     * Gets a list that is the default location for wiki pages.
     */
    async ensureSitePagesLibrary() {
        const json = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(Lists(this, "ensuresitepageslibrary"));
        return List([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__[/* odataUrlFrom */ "e"])(json)]);
    }
};
_Lists = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_5__[/* defaultPath */ "e"])("lists")
], _Lists);

const Lists = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_Lists);
class _List extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* deleteableWithETag */ "s"])();
    }
    /**
     * Gets the effective base permissions of this list
     *
     */
    get effectiveBasePermissions() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPQueryable */ "n"])(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the event receivers attached to this list
     *
     */
    get eventReceivers() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPCollection */ "e"])(this, "EventReceivers");
    }
    /**
     * Gets the related fields of this list
     *
     */
    get relatedFields() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPQueryable */ "n"])(this, "getRelatedFields");
    }
    /**
     * Gets the IRM settings for this list
     *
     */
    get informationRightsManagementSettings() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPQueryable */ "n"])(this, "InformationRightsManagementSettings");
    }
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(properties, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* headers */ "v"])({ "IF-Match": eTag })));
        const list = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(properties, "Title") ? this.getParent(List, `getByTitle('${properties.Title}')`) : List(this);
        return {
            data,
            list,
        };
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    getChanges(query) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(List(this, "getchanges"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({ query }));
    }
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    getItemsByCAMLQuery(query, ...expands) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(List(this, "getitems").expand(...expands), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({ query }));
    }
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    getListItemChangesSinceToken(query) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(List(this, "getlistitemchangessincetoken").using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* TextParse */ "p"])()), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({ query }));
    }
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    async recycle() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(List(this, "recycle"));
    }
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    async renderListData(viewXml) {
        const q = List(this, "renderlistdata(@viewXml)");
        q.query.set("@viewXml", `'${viewXml}'`);
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(q);
        return JSON.parse(data);
    }
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParams The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param query Allows setting of query parameters
     */
    // eslint-disable-next-line max-len
    renderListDataAsStream(parameters, overrideParameters = null, query = new Map()) {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(parameters, "RenderOptions") && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "m"])(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce((v, c) => v + c);
        }
        const clone = List(this, "RenderListDataAsStream");
        if (query && query.size > 0) {
            query.forEach((v, k) => clone.query.set(k, v));
        }
        const params = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "y"])(overrideParameters) ? { parameters, overrideParameters } : { parameters };
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(clone, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(params));
    }
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    async renderListFormData(itemId, formId, mode) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(List(this, `renderlistformdata(itemid=${itemId}, formid='${formId}', mode='${mode}')`));
        // data will be a string, so we parse it again
        return JSON.parse(data);
    }
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    async reserveListItemId() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(List(this, "reservelistitemid"));
    }
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    async addValidateUpdateItemUsingPath(formValues, decodedUrl, bNewDocumentUpdate = false, checkInComment, additionalProps) {
        const addProps = {
            FolderPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__[/* toResourcePath */ "e"])(decodedUrl),
        };
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "y"])(additionalProps)) {
            if (additionalProps.leafName) {
                addProps.LeafName = Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__[/* toResourcePath */ "e"])(additionalProps.leafName);
            }
            if (additionalProps.objectType) {
                addProps.UnderlyingObjectType = additionalProps.objectType;
            }
        }
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__[/* spPost */ "a"])(List(this, "AddValidateUpdateItemUsingPath()"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])({
            bNewDocumentUpdate,
            checkInComment,
            formValues,
            listItemCreateInfo: addProps,
        }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "RootFolder/UniqueId", "RootFolder/ServerRelativeUrl", "RootFolder/ServerRelativePath", "ParentWeb/Id", "ParentWeb/Url", "ParentWeb/ServerRelativeUrl", "ParentWeb/ServerRelativePath").expand("RootFolder", "ParentWeb")();
        return {
            List: {
                Id: urlInfo.Id,
                RootFolderServerRelativePath: urlInfo.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentWeb.Url,
            },
        };
    }
}
const List = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    /**
     * The returned list will have a FileSystemItemId field on each item if possible.
     */
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    /**
     * Returns the client form schema to add and edit items.
     */
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    /**
     * Returns QuickLaunch navigation nodes.
     */
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    /**
     * Returns Spotlight rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    /**
     * Returns Visualization rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    /**
     * Returns view XML and other information about the current view.
     */
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    /**
     * Prevents AutoHyperlink from being run on text fields in this query.
     */
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    /**
     * Enables urls pointing to Media TA service, such as .thumbnailUrl, .videoManifestUrl, .pdfConversionUrls.
     */
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    /**
     * Return Parant folder information.
     */
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    /**
     * Return Page context info for the current list being rendered.
     */
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    /**
     * Return client-side component manifest information associated with the list.
     */
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
    /**
     * Return all content-types available on the list.
     */
    RenderListDataOptions[RenderListDataOptions["ListAvailableContentTypes"] = 65536] = "ListAvailableContentTypes";
    /**
      * Return the order of items in the new-item menu.
      */
    RenderListDataOptions[RenderListDataOptions["FolderContentTypeOrder"] = 131072] = "FolderContentTypeOrder";
    /**
     * Return information to initialize Grid for quick edit.
     */
    RenderListDataOptions[RenderListDataOptions["GridInitInfo"] = 262144] = "GridInitInfo";
    /**
     * Indicator if the vroom API of the SPItemUrl returned in MediaTAUrlGenerator should use site url as host.
     */
    RenderListDataOptions[RenderListDataOptions["SiteUrlAsMediaTASPItemHost"] = 524288] = "SiteUrlAsMediaTASPItemHost";
    /**
     * Return the files representing mount points in the list.
     */
    RenderListDataOptions[RenderListDataOptions["AddToOneDrive"] = 1048576] = "AddToOneDrive";
    /**
     * Return SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["SPFXCustomActions"] = 2097152] = "SPFXCustomActions";
    /**
     * Do not return non-SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["CustomActions"] = 4194304] = "CustomActions";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "iV2g":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/views/list.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "32VY");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "views", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Views */ "t"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "defaultView", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* View */ "e"]);
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.getView = function (viewId) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* View */ "e"])(this, `getView('${viewId}')`);
};
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "iXHV":
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/dom/canUseDOM.js ***!
  \***************************************************************/
/*! exports provided: canUseDOM */
/*! exports used: canUseDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return canUseDOM; });
/**
 * Verifies if an application can use DOM.
 */
function canUseDOM() {
    return (
    // eslint-disable-next-line no-restricted-globals
    typeof window !== 'undefined' &&
        !!(
        // eslint-disable-next-line no-restricted-globals, deprecation/deprecation
        (window.document && window.document.createElement)));
}
//# sourceMappingURL=canUseDOM.js.map

/***/ }),

/***/ "idU1":
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/fonts/createFontStyles.js ***!
  \********************************************************************/
/*! exports provided: createFontStyles */
/*! exports used: createFontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createFontStyles; });
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentFonts */ "2GE3");

// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '".concat(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontNames */ "a"].WestEuropean, "'");
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Arabic,
    bg: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Cyrillic,
    cs: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    el: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Greek,
    et: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    he: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Hebrew,
    hi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Hindi,
    hr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    hu: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    ja: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Japanese,
    kk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    ko: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Korean,
    lt: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    lv: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    pl: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    ru: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Cyrillic,
    sk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    'sr-latn': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    th: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Thai,
    tr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].EastEuropean,
    uk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Cyrillic,
    vi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Vietnamese,
    'zh-hans': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].ChineseSimplified,
    'zh-hant': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].ChineseTraditional,
    hy: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Armenian,
    ka: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* LocalizedFontFamilies */ "n"].Georgian,
};
function _fontFamilyWithFallbacks(fontFamily) {
    return "".concat(fontFamily, ", ").concat(FontFamilyFallbacks);
}
/**
 * If there is a localized font for this language, return that.
 * Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight,
    };
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var fontStyles = {
        tiny: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].mini, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].regular, fontFamilyWithFallback),
        xSmall: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].xSmall, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].regular, fontFamilyWithFallback),
        small: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].small, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].regular, fontFamilyWithFallback),
        smallPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].smallPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].regular, fontFamilyWithFallback),
        medium: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].medium, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].regular, fontFamilyWithFallback),
        mediumPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].mediumPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].regular, fontFamilyWithFallback),
        large: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].large, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].regular, fontFamilyWithFallback),
        xLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].xLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].semibold, fontFamilyWithFallback),
        xLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].xLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].semibold, fontFamilyWithFallback),
        xxLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].xxLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].semibold, fontFamilyWithFallback),
        xxLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].xxLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].semibold, fontFamilyWithFallback),
        superLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].superLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].semibold, fontFamilyWithFallback),
        mega: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontSizes */ "e"].mega, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "t"].semibold, fontFamilyWithFallback),
    };
    return fontStyles;
}
//# sourceMappingURL=createFontStyles.js.map

/***/ }),

/***/ "ikbv":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/sharing/index.js ***!
  \***********************************************/
/*! exports provided: SPSharedObjectType, SharingDomainRestrictionMode, SharingLinkKind, SharingOperationStatusCode, SharingRole, RoleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _file_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.js */ "qPin");
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.js */ "VQtT");
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.js */ "K1m8");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web.js */ "8gyt");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "AvPO");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "ilAS":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/sites/types.js ***!
  \*********************************************/
/*! exports provided: _Site, Site, SiteLogoType, SiteLogoAspect */
/*! exports used: Site, _Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _Site; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Site; });
/* unused harmony export SiteLogoType */
/* unused harmony export SiteLogoAspect */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types.js */ "tCQJ");










/**
 * Ensures that whatever url is passed to the constructor we can correctly rebase it to a site url
 *
 * @param candidate The candidate site url
 * @param path The caller supplied path, which may contain _api, meaning we don't append _api/site
 */
function rebaseSiteUrl(candidate, path) {
    let replace = "_api/site";
    // this allows us to both:
    // - test if `candidate` already has an api path
    // - ensure that we append the correct one as sometimes a web is not defined
    //   by _api/web, in the case of _api/site/rootweb for example
    const matches = /(_api[/|\\](site|web))/i.exec(candidate);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) > 0) {
        // we want just the base url part (before the _api)
        candidate = Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__[/* extractWebUrl */ "e"])(candidate);
        // we want to ensure we put back the correct string
        replace = matches[1];
    }
    // we only need to append the _api part IF `path` doesn't already include it.
    if ((path === null || path === void 0 ? void 0 : path.indexOf("_api")) < 0) {
        candidate = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_4__[/* combine */ "s"])(candidate, replace);
    }
    return candidate;
}
let _Site = class _Site extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    constructor(base, path) {
        if (typeof base === "string") {
            base = rebaseSiteUrl(base, path);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_4__[/* isArray */ "m"])(base)) {
            base = [base[0], rebaseSiteUrl(base[1], path)];
        }
        else {
            base = [base, rebaseSiteUrl(base.toUrl(), path)];
        }
        super(base, path);
    }
    /**
     * Gets the root web of the site collection
     *
     */
    get rootWeb() {
        return Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_3__[/* Web */ "e"])(this, "rootweb");
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query) {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({ query });
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_3__[/* Web */ "e"])(this, "getchanges"), postBody);
    }
    /**
     * Opens a web by id (using POST)
     *
     * @param webId The GUID id of the web to open
     */
    async openWebById(webId) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Site(this, `openWebById('${webId}')`));
        return {
            data,
            web: Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_3__[/* Web */ "e"])([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__[/* extractWebUrl */ "e"])(Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_6__[/* odataUrlFrom */ "e"])(data))]),
        };
    }
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    async getRootWeb() {
        const web = await this.rootWeb.select("Url")();
        return Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_3__[/* Web */ "e"])([this, web.Url]);
    }
    /**
     * Deletes the current site
     *
     */
    async delete() {
        const site = await Site(this, "").select("Id")();
        const q = Site([this, this.parentUrl], "_api/SPSiteManager/Delete");
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(q, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({ siteId: site.Id }));
    }
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    async getDocumentLibraries(absoluteWebUrl) {
        const q = Site([this, this.parentUrl], "_api/sp.web.getdocumentlibraries(@v)");
        q.query.set("@v", `'${absoluteWebUrl}'`);
        const data = await q();
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_4__[/* hOP */ "p"])(data, "GetDocumentLibraries") ? data.GetDocumentLibraries : data;
    }
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    async getWebUrlFromPageUrl(absolutePageUrl) {
        const q = Site([this, this.parentUrl], "_api/sp.web.getweburlfrompageurl(@v)");
        q.query.set("@v", `'${absolutePageUrl}'`);
        const data = await q();
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_4__[/* hOP */ "p"])(data, "GetWebUrlFromPageUrl") ? data.GetWebUrlFromPageUrl : data;
    }
    /**
     * Creates a Modern communication site.
     *
     * @param title The title of the site to create
     * @param lcid The language to use for the site. If not specified will default to 1033 (English).
     * @param shareByEmailEnabled If set to true, it will enable sharing files via Email. By default it is set to false
     * @param url The fully qualified URL (e.g. https://yourtenant.sharepoint.com/sites/mysitecollection) of the site.
     * @param description The description of the communication site.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param siteDesignId The Guid of the site design to be used.
     *                     You can use the below default OOTB GUIDs:
     *                     Topic: 00000000-0000-0000-0000-000000000000
     *                     Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767
     *                     Blank: f6cc5403-0d63-442e-96c0-285923709ffc
     * @param hubSiteId The id of the hub site to which the new site should be associated
     * @param owner Optional owner value, required if executing the method in app only mode
     */
    async createCommunicationSite(title, lcid = 1033, shareByEmailEnabled = false, url, description, classification, siteDesignId, hubSiteId, owner) {
        return this.createCommunicationSiteFromProps({
            Classification: classification,
            Description: description,
            HubSiteId: hubSiteId,
            Lcid: lcid,
            Owner: owner,
            ShareByEmailEnabled: shareByEmailEnabled,
            SiteDesignId: siteDesignId,
            Title: title,
            Url: url,
        });
    }
    async createCommunicationSiteFromProps(props) {
        // handle defaults
        const request = {
            Classification: "",
            Description: "",
            HubSiteId: _types_js__WEBPACK_IMPORTED_MODULE_9__[/* emptyGuid */ "e"],
            Lcid: 1033,
            ShareByEmailEnabled: false,
            SiteDesignId: _types_js__WEBPACK_IMPORTED_MODULE_9__[/* emptyGuid */ "e"],
            WebTemplate: "SITEPAGEPUBLISHING#0",
            WebTemplateExtensionId: _types_js__WEBPACK_IMPORTED_MODULE_9__[/* emptyGuid */ "e"],
            ...props,
        };
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Site([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__[/* extractWebUrl */ "e"])(this.toUrl())], "/_api/SPSiteManager/Create"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({ request }));
    }
    /**
     *
     * @param url Site Url that you want to check if exists
     */
    async exists(url) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Site([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__[/* extractWebUrl */ "e"])(this.toUrl())], "/_api/SP.Site.Exists"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])({ url }));
    }
    /**
     * Creates a Modern team site backed by Office 365 group. For use in SP Online only. This will not work with App-only tokens
     *
     * @param displayName The title or display name of the Modern team site to be created
     * @param alias Alias of the underlying Office 365 Group
     * @param isPublic Defines whether the Office 365 Group will be public (default), or private.
     * @param lcid The language to use for the site. If not specified will default to English (1033).
     * @param description The description of the site to be created.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param owners The Owners of the site to be created
     */
    async createModernTeamSite(displayName, alias, isPublic, lcid, description, classification, owners, hubSiteId, siteDesignId) {
        return this.createModernTeamSiteFromProps({
            alias,
            classification,
            description,
            displayName,
            hubSiteId,
            isPublic,
            lcid,
            owners,
            siteDesignId,
        });
    }
    async createModernTeamSiteFromProps(props) {
        // handle defaults
        const p = Object.assign({}, {
            classification: "",
            description: "",
            hubSiteId: _types_js__WEBPACK_IMPORTED_MODULE_9__[/* emptyGuid */ "e"],
            isPublic: true,
            lcid: 1033,
            owners: [],
        }, props);
        const postBody = {
            alias: p.alias,
            displayName: p.displayName,
            isPublic: p.isPublic,
            optionalParams: {
                Classification: p.classification,
                CreationOptions: [`SPSiteLanguage:${p.lcid}`, `HubSiteId:${p.hubSiteId}`],
                Description: p.description,
                Owners: p.owners,
            },
        };
        if (p.siteDesignId) {
            postBody.optionalParams.CreationOptions.push(`implicit_formula_292aa8a00786498a87a5ca52d9f4214a_${p.siteDesignId}`);
        }
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Site([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__[/* extractWebUrl */ "e"])(this.toUrl())], "/_api/GroupSiteManager/CreateGroupEx").using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* TextParse */ "p"])()), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])(postBody));
    }
    update(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPatch */ "n"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])(props));
    }
    /**
     * Set's the site's `Site Logo` property, vs the Site Icon property available on the web's properties
     *
     * @param logoProperties An instance of ISiteLogoProperties which sets the new site logo.
     */
    setSiteLogo(logoProperties) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPQueryable */ "n"])([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__[/* extractWebUrl */ "e"])(this.toUrl())], "_api/siteiconmanager/setsitelogo"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__[/* body */ "_"])(logoProperties));
    }
};
_Site = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_2__[/* defaultPath */ "e"])("_api/site")
], _Site);

const Site = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Site);
var SiteLogoType;
(function (SiteLogoType) {
    /**
     * Site header logo
     */
    SiteLogoType[SiteLogoType["WebLogo"] = 0] = "WebLogo";
    /**
     * Hub site logo
     */
    SiteLogoType[SiteLogoType["HubLogo"] = 1] = "HubLogo";
    /**
     * Header background image
     */
    SiteLogoType[SiteLogoType["HeaderBackground"] = 2] = "HeaderBackground";
    /**
     * Global navigation logo
     */
    SiteLogoType[SiteLogoType["GlobalNavLogo"] = 3] = "GlobalNavLogo";
})(SiteLogoType || (SiteLogoType = {}));
var SiteLogoAspect;
(function (SiteLogoAspect) {
    SiteLogoAspect[SiteLogoAspect["Square"] = 0] = "Square";
    SiteLogoAspect[SiteLogoAspect["Rectangular"] = 1] = "Rectangular";
})(SiteLogoAspect || (SiteLogoAspect = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "jM62":
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/column-defaults/list.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _folders_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../folders/types.js */ "4tXH");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _presets_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../presets/all.js */ "F/m7");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");







Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "rootFolder", _folders_types_js__WEBPACK_IMPORTED_MODULE_2__[/* Folder */ "e"]);
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.getDefaultColumnValues = async function () {
    const pathPart = await this.rootFolder.select("ServerRelativePath")();
    const webUrl = await this.select("ParentWeb/Url").expand("ParentWeb")();
    const path = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* combine */ "s"])("/", pathPart.ServerRelativePath.DecodedUrl, "Forms/client_LocationBasedDefaults.html");
    const baseFilePath = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* combine */ "s"])(webUrl.ParentWeb.Url, `_api/web/getFileByServerRelativePath(decodedUrl='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__[/* encodePath */ "e"])(path)}')`);
    let xml = "";
    try {
        // we are reading the contents of the file
        xml = await Object(_folders_types_js__WEBPACK_IMPORTED_MODULE_2__[/* Folder */ "e"])([this, baseFilePath], "$value").using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* TextParse */ "p"])())();
    }
    catch (e) {
        // if this call fails we assume it is because the file is 404
        if (e && e.status && e.status === 404) {
            // return an empty array
            return [];
        }
        throw e;
    }
    // get all the tags from the xml
    const matches = xml.match(/<a.*?<\/a>/ig);
    const tags = matches === null ? [] : matches.map(t => t.trim());
    // now we need to turn these tags of form into objects
    // <a href="/sites/dev/My%20Title"><DefaultValue FieldName="TextField">Test</DefaultValue></a>
    return tags.reduce((defVals, t) => {
        const m = /<a href="(.*?)">/ig.exec(t);
        // if things worked out captures are:
        // 0: whole string
        // 1: ENCODED server relative path
        if (m.length < 1) {
            // this indicates an error somewhere, but we have no way to meaningfully recover
            // perhaps the way the tags are stored has changed on the server? Check that first.
            this.log(`Could not parse default column value from '${t}'`, 2);
            return null;
        }
        // return the parsed out values
        const subMatches = t.match(/<DefaultValue.*?<\/DefaultValue>/ig);
        const subTags = subMatches === null ? [] : subMatches.map(st => st.trim());
        subTags.map(st => {
            const sm = /<DefaultValue FieldName="(.*?)">(.*?)<\/DefaultValue>/ig.exec(st);
            // if things worked out captures are:
            // 0: whole string
            // 1: Field internal name
            // 2: Default value as string
            if (sm.length < 1) {
                this.log(`Could not parse default column value from '${st}'`, 2);
            }
            else {
                defVals.push({
                    name: sm[1],
                    path: decodeURIComponent(m[1]),
                    value: sm[2],
                });
            }
        });
        return defVals;
    }, []).filter(v => v !== null);
};
_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"].prototype.setDefaultColumnValues = async function (defaults) {
    // we need the field types from the list to map the values
    // eslint-disable-next-line max-len
    const fieldDefs = await Object(_presets_all_js__WEBPACK_IMPORTED_MODULE_5__[/* SPCollection */ "e"])(this, "fields").select("InternalName", "TypeAsString").filter("Hidden ne true")();
    // group field defaults by path
    const defaultsByPath = {};
    for (let i = 0; i < defaults.length; i++) {
        if (defaultsByPath[defaults[i].path] == null) {
            defaultsByPath[defaults[i].path] = [defaults[i]];
        }
        else {
            defaultsByPath[defaults[i].path].push(defaults[i]);
        }
    }
    const paths = Object.getOwnPropertyNames(defaultsByPath);
    const pathDefaults = [];
    // For each path, group field defaults
    for (let j = 0; j < paths.length; j++) {
        // map the values into the right format and produce our xml elements
        const pathFields = defaultsByPath[paths[j]];
        const tags = pathFields.map(fieldDefault => {
            const index = fieldDefs.findIndex(fd => fd.InternalName === fieldDefault.name);
            if (index < 0) {
                throw Error(`Field '${fieldDefault.name}' does not exist in the list. Please check the internal field name. Failed to set defaults.`);
            }
            const fieldDef = fieldDefs[index];
            let value = "";
            switch (fieldDef.TypeAsString) {
                case "Boolean":
                case "Currency":
                case "Text":
                case "DateTime":
                case "Number":
                case "Choice":
                case "User":
                    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "m"])(fieldDefault.value)) {
                        throw Error(`The type '${fieldDef.TypeAsString}' does not support multiple values.`);
                    }
                    value = `${fieldDefault.value}`;
                    break;
                case "MultiChoice":
                    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "m"])(fieldDefault.value)) {
                        value = fieldDefault.value.map(v => `${v}`).join(";");
                    }
                    else {
                        value = `${fieldDefault.value}`;
                    }
                    break;
                case "UserMulti":
                    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "m"])(fieldDefault.value)) {
                        value = fieldDefault.value.map(v => `${v}`).join(";#");
                    }
                    else {
                        value = `${fieldDefault.value}`;
                    }
                    break;
                case "Taxonomy":
                case "TaxonomyFieldType":
                    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "m"])(fieldDefault.value)) {
                        throw Error(`The type '${fieldDef.TypeAsString}' does not support multiple values.`);
                    }
                    else {
                        value = `${fieldDefault.value.wssId};#${fieldDefault.value.termName}|${fieldDefault.value.termId}`;
                    }
                    break;
                case "TaxonomyMulti":
                case "TaxonomyFieldTypeMulti":
                    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "m"])(fieldDefault.value)) {
                        value = fieldDefault.value.map(v => `${v.wssId};#${v.termName}|${v.termId}`).join(";#");
                    }
                    else {
                        value = [fieldDefault.value].map(v => `${v.wssId};#${v.termName}|${v.termId}`).join(";#");
                    }
                    break;
            }
            return `<DefaultValue FieldName="${fieldDefault.name}">${value}</DefaultValue>`;
        });
        const href = pathFields[0].path.replace(/ /gi, "%20");
        const pathDefault = `<a href="${href}">${tags.join("")}</a>`;
        pathDefaults.push(pathDefault);
    }
    // builds update to defaults
    const xml = `<MetadataDefaults>${pathDefaults.join("")}</MetadataDefaults>`;
    const pathPart = await this.rootFolder.select("ServerRelativePath")();
    const webUrl = await this.select("ParentWeb/Url").expand("ParentWeb")();
    const path = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* combine */ "s"])("/", pathPart.ServerRelativePath.DecodedUrl, "Forms");
    const baseFilePath = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_3__[/* combine */ "s"])(webUrl.ParentWeb.Url, "_api/web", `getFolderByServerRelativePath(decodedUrl='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_6__[/* encodePath */ "e"])(path)}')`, "files");
    await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Object(_folders_types_js__WEBPACK_IMPORTED_MODULE_2__[/* Folder */ "e"])([this, baseFilePath], "add(overwrite=true,url='client_LocationBasedDefaults.html')"), { body: xml });
    // finally we need to ensure this list has the right event receiver added
    const existingReceivers = await this.eventReceivers.filter("ReceiverName eq 'LocationBasedMetadataDefaultsReceiver ItemAdded'").select("ReceiverId")();
    if (existingReceivers.length < 1) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(Object(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* List */ "e"])(this.eventReceivers, "add"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* body */ "_"])({
            eventReceiverCreationInformation: {
                EventType: 10001,
                ReceiverAssembly: "Microsoft.Office.DocumentManagement, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c",
                ReceiverClass: "Microsoft.Office.DocumentManagement.LocationBasedMetadataDefaultsReceiver",
                ReceiverName: "LocationBasedMetadataDefaultsReceiver ItemAdded",
                SequenceNumber: 1000,
                Synchronization: 1,
            },
        }));
    }
};
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "jqzx":
/*!*******************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/MergeStyles.js ***!
  \*******************************************************************/
/*! exports provided: InjectionMode, Stylesheet, concatStyleSets, concatStyleSetsWithProps, fontFace, keyframes, mergeStyleSets, mergeStyles */
/*! exports used: keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/merge-styles */ "KJUs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__["e"]; });


//# sourceMappingURL=MergeStyles.js.map

/***/ }),

/***/ "lYrR":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/index.js ***!
  \*********************************************/
/*! exports provided: Item, Items, ItemVersion, ItemVersions, PagedItemCollection */
/*! exports used: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "NTTg");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "3DT9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["e"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "laIm":
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/clientside-pages/web.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "UPqE");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp */ "UKGb");






_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.getClientsideWebParts = function () {
    return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPCollection */ "e"])(this, "GetClientSideWebParts")();
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.addClientsidePage =
    function (pageName, title = pageName.replace(/\.[^/.]+$/, ""), layout, promotedState) {
        return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* CreateClientsidePage */ "n"])(this, pageName, title, layout, promotedState);
    };
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.loadClientsidePage = function (path) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* ClientsidePageFromFile */ "e"])(this.getFileByServerRelativePath(path));
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.addRepostPage = async function (details) {
    const query = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPInstance */ "t"])([this, Object(_pnp_sp__WEBPACK_IMPORTED_MODULE_5__[/* extractWebUrl */ "n"])(this.toUrl())], "_api/sitepages/pages/reposts");
    const r = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_3__[/* spPost */ "a"])(query, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__[/* body */ "_"])(details));
    return r.AbsoluteUrl;
};
// eslint-disable-next-line max-len
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _Web */ "t"].prototype.addFullPageApp = async function (pageName, title = pageName.replace(/\.[^/.]+$/, ""), componentId, promotedState) {
    const parts = await this.getClientsideWebParts();
    const test = new RegExp(`{?${componentId}}?`, "i");
    const partDef = parts.find(p => test.test(p.Id));
    const part = _types_js__WEBPACK_IMPORTED_MODULE_1__[/* ClientsideWebpart */ "t"].fromComponentDef(partDef);
    const page = await this.addClientsidePage(pageName, title, "SingleWebPartAppPage", promotedState);
    page.addSection().addColumn(12).addControl(part);
    return page;
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "ld+d":
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/clientside-pages/funcs.js ***!
  \********************************************************/
/*! exports provided: getNextOrder, reindex */
/*! exports used: getNextOrder, reindex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getNextOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return reindex; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * Gets the next order value 1 based for the provided collection
 *
 * @param collection Collection of orderable things
 */
function getNextOrder(collection) {
    return collection.length < 1 ? 1 : (Math.max.apply(null, collection.map(i => i.order)) + 1);
}
/**
 * Normalizes the order value for all the sections, columns, and controls to be 1 based and stepped (1, 2, 3...)
 *
 * @param collection The collection to normalize
 */
function reindex(collection) {
    for (let i = 0; i < collection.length; i++) {
        collection[i].order = i + 1;
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(collection[i], "columns")) {
            reindex(collection[i].columns);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(collection[i], "controls")) {
            reindex(collection[i].controls);
        }
    }
}
//# sourceMappingURL=funcs.js.map

/***/ }),

/***/ "luMW":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/sp/regional-settings/types.js ***!
  \*********************************************************/
/*! exports provided: _RegionalSettings, RegionalSettings, _TimeZone, TimeZone, _TimeZones, TimeZones */
/*! exports used: RegionalSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _RegionalSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RegionalSettings; });
/* unused harmony export _TimeZone */
/* unused harmony export TimeZone */
/* unused harmony export _TimeZones */
/* unused harmony export TimeZones */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");





let _RegionalSettings = class _RegionalSettings extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
    /**
     * Gets time zone
     */
    get timeZone() {
        return TimeZone(this);
    }
    /**
     * Gets time zones
     */
    get timeZones() {
        return TimeZones(this);
    }
    /**
     * Gets the collection of languages used in a server farm.
     */
    async getInstalledLanguages() {
        const results = await Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* SPCollection */ "e"])(this, "installedlanguages")();
        return results.Items;
    }
};
_RegionalSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("regionalsettings")
], _RegionalSettings);

const RegionalSettings = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_RegionalSettings);
let _TimeZone = class _TimeZone extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
    /**
     * Gets an Local Time by UTC Time
     *
     * @param utcTime UTC Time as Date or ISO String
     */
    async utcToLocalTime(utcTime) {
        let dateIsoString;
        if (typeof utcTime === "string") {
            dateIsoString = utcTime;
        }
        else {
            dateIsoString = utcTime.toISOString();
        }
        const res = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(TimeZone(this, `utctolocaltime('${dateIsoString}')`));
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(res, "UTCToLocalTime") ? res.UTCToLocalTime : res;
    }
    /**
     * Gets an UTC Time by Local Time
     *
     * @param localTime Local Time as Date or ISO String
     */
    async localTimeToUTC(localTime) {
        let dateIsoString;
        if (typeof localTime === "string") {
            dateIsoString = localTime;
        }
        else {
            dateIsoString = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* dateAdd */ "c"])(localTime, "minute", localTime.getTimezoneOffset() * -1).toISOString();
        }
        const res = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(TimeZone(this, `localtimetoutc('${dateIsoString}')`));
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* hOP */ "p"])(res, "LocalTimeToUTC") ? res.LocalTimeToUTC : res;
    }
};
_TimeZone = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("timezone")
], _TimeZone);

const TimeZone = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_TimeZone);
let _TimeZones = class _TimeZones extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
     * Gets an TimeZone by id (see: https://msdn.microsoft.com/en-us/library/office/jj247008.aspx)
     *
     * @param id The integer id of the timezone to retrieve
     */
    getById(id) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__[/* spPost */ "a"])(TimeZones(this, `GetById(${id})`));
    }
};
_TimeZones = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__[/* defaultPath */ "e"])("timezones")
], _TimeZones);

const TimeZones = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_TimeZones);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "mRvw":
/*!****************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/sessionStorage.js ***!
  \****************************************************************/
/*! exports provided: getItem, setItem */
/*! exports used: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return setItem; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "pyJV");

/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "e"])();
        result = win ? win.sessionStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    var _a;
    try {
        (_a = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "e"])()) === null || _a === void 0 ? void 0 : _a.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=sessionStorage.js.map

/***/ }),

/***/ "mUxj":
/*!********************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/styled.js ***!
  \********************************************************/
/*! exports provided: styled */
/*! exports used: styled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return styled; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/merge-styles */ "qX3+");
/* harmony import */ var _customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customizations/useCustomizationSettings */ "OreJ");




var DefaultFields = ['theme', 'styles'];
function styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var Wrapped = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, forwardedRef) {
        var styles = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
        var settings = Object(_customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_3__[/* useCustomizationSettings */ "e"])(fields, scope);
        var customizedStyles = settings.styles, dir = settings.dir, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "n"])(settings, ["styles", "dir"]);
        var additionalProps = getProps ? getProps(props) : undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var cache = (styles.current && styles.current.__cachedInputs__) || [];
        var propStyles = props.styles;
        if (!styles.current || customizedStyles !== cache[1] || propStyles !== cache[2]) {
            // Using styled components as the Component arg will result in nested styling arrays.
            // The function can be cached and in order to prevent the props from being retained within it's closure
            // we pass in just the styles and not the entire props
            var concatenatedStyles = function (styleProps) {
                return Object(_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__[/* concatStyleSetsWithProps */ "e"])(styleProps, baseStyles, customizedStyles, propStyles);
            };
            // The __cachedInputs__ array is attached to the function and consumed by the
            // classNamesFunction as a list of keys to include for memoizing classnames.
            concatenatedStyles.__cachedInputs__ = [
                baseStyles,
                customizedStyles,
                propStyles,
            ];
            concatenatedStyles.__noStyleOverride__ =
                !customizedStyles && !propStyles;
            styles.current = concatenatedStyles;
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({ ref: forwardedRef }, rest, additionalProps, props, { styles: styles.current }));
    });
    // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
    // able to drop IE 11 support and compile with ES6 libs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Wrapped.displayName = "Styled".concat(Component.displayName || Component.name);
    // This preserves backwards compatibility.
    var pureComponent = pure ? react__WEBPACK_IMPORTED_MODULE_1__["memo"](Wrapped) : Wrapped;
    // Check if the wrapper has a displayName after it has been memoized. Then assign it to the pure component.
    if (Wrapped.displayName) {
        pureComponent.displayName = Wrapped.displayName;
    }
    return pureComponent;
}
//# sourceMappingURL=styled.js.map

/***/ }),

/***/ "mrSG":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/*! exports used: __assign, __extends, __rest, __spreadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __rest; });
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __spreadArray; });
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "nikm":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/telemetry.js ***!
  \*****************************************************/
/*! exports provided: Telemetry */
/*! exports used: Telemetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Telemetry; });
function Telemetry() {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            let clientTag = "PnPCoreJS:3.24.0:";
            // make our best guess based on url to the method called
            const { pathname } = new URL(url);
            // remove anything before the _api as that is potentially PII and we don't care, just want to get the called path to the REST API
            // and we want to modify any (*) calls at the end such as items(3) and items(344) so we just track "items()"
            clientTag += pathname
                .substring(pathname.indexOf("_api/") + 5)
                .split("/")
                .map((value, index, arr) => index === arr.length - 1 ? value.replace(/\(.*?$/i, "()") : value[0]).join(".");
            if (clientTag.length > 32) {
                clientTag = clientTag.substring(0, 32);
            }
            this.log(`Request Tag: ${clientTag}`, 0);
            init.headers = { ...init.headers, ["X-ClientService-ClientTag"]: clientTag };
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=telemetry.js.map

/***/ }),

/***/ "oR7b":
/*!******************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Spinner/Spinner.types.js ***!
  \******************************************************************************/
/*! exports provided: SpinnerSize, SpinnerType */
/*! exports used: SpinnerSize, SpinnerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SpinnerSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SpinnerType; });
/**
 * Possible variations of the spinner circle size.
 * {@docCategory Spinner}
 */
var SpinnerSize;
(function (SpinnerSize) {
    /**
     * 12px Spinner diameter
     */
    SpinnerSize[SpinnerSize["xSmall"] = 0] = "xSmall";
    /**
     * 16px Spinner diameter
     */
    SpinnerSize[SpinnerSize["small"] = 1] = "small";
    /**
     * 20px Spinner diameter
     */
    SpinnerSize[SpinnerSize["medium"] = 2] = "medium";
    /**
     * 28px Spinner diameter
     */
    SpinnerSize[SpinnerSize["large"] = 3] = "large";
})(SpinnerSize || (SpinnerSize = {}));
/**
 * @deprecated Use `SpinnerSize` instead. Will be removed at \>= 2.0.0.
 * {@docCategory Spinner}
 */
var SpinnerType;
(function (SpinnerType) {
    /**
     * @deprecated Use `SpinnerSize.medium` instead. Will be removed at \>= 2.0.0.
     */
    SpinnerType[SpinnerType["normal"] = 0] = "normal";
    /**
     * @deprecated Use `SpinnerSize.large` instead. Will be removed at \>= 2.0.0.
     */
    SpinnerType[SpinnerType["large"] = 1] = "large";
})(SpinnerType || (SpinnerType = {}));
//# sourceMappingURL=Spinner.types.js.map

/***/ }),

/***/ "orH7":
/*!*********************************************************!*\
  !*** ./node_modules/@fluentui/set-version/lib/index.js ***!
  \*********************************************************/
/*! exports provided: setVersion */
/*! exports used: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _setVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setVersion */ "0m3K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _setVersion__WEBPACK_IMPORTED_MODULE_0__["e"]; });



Object(_setVersion__WEBPACK_IMPORTED_MODULE_0__[/* setVersion */ "e"])('@fluentui/set-version', '6.0.0');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "pAcn":
/*!******************************************!*\
  !*** ./node_modules/@pnp/sp/batching.js ***!
  \******************************************/
/*! exports provided: createBatch, BatchNever */
/*! exports used: BatchNever, createBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return createBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BatchNever; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "UK2s");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spqueryable.js */ "F4qD");
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fi.js */ "v6VW");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webs/types.js */ "dVsc");






_fi_js__WEBPACK_IMPORTED_MODULE_4__[/* SPFI */ "e"].prototype.batched = function (props) {
    const batched = Object(_fi_js__WEBPACK_IMPORTED_MODULE_4__[/* spfi */ "t"])(this);
    const [behavior, execute] = createBatch(batched._root, props);
    batched.using(behavior);
    return [batched, execute];
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_5__[/* _Web */ "t"].prototype.batched = function (props) {
    const batched = Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_5__[/* Web */ "e"])(this);
    const [behavior, execute] = createBatch(batched, props);
    batched.using(behavior);
    return [batched, execute];
};
/**
 * Tracks on a batched instance that registration is complete (the child request has gotten to the send moment and the request is included in the batch)
 */
const RegistrationCompleteSym = Symbol.for("batch_registration");
/**
 * Tracks on a batched instance that the child request timeline lifecycle is complete (called in child.dispose)
 */
const RequestCompleteSym = Symbol.for("batch_request");
/**
 * Special batch parsing behavior used to convert the batch response text into a set of Response objects for each request
 * @returns A parser behavior
 */
function BatchParse() {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* parseBinderWithErrorCheck */ "D"])(async (response) => {
        const text = await response.text();
        return parseResponse(text);
    });
}
/**
 * Internal class used to execute the batch request through the timeline lifecycle
 */
class BatchQueryable extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPQueryable */ "r"] {
    constructor(base, requestBaseUrl = base.toUrl().replace(/_api[\\|/].*$/i, "")) {
        super(requestBaseUrl, "_api/$batch");
        this.requestBaseUrl = requestBaseUrl;
        // this will copy over the current observables from the base associated with this batch
        // this will replace any other parsing present
        this.using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* CopyFrom */ "t"])(base, "replace"), BatchParse());
        this.on.dispose(() => {
            // there is a code path where you may invoke a batch, say on items.add, whose return
            // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
            // is immediately usable to make additional queries. Without this step when that IItem instance is
            // created using "this.getById" within IITems.add all of the current observers of "this" are
            // linked to the IItem instance created (expected), BUT they will be the set of observers setup
            // to handle the batch, meaning invoking `item` will result in a half batched call that
            // doesn't really work. To deliver the expected functionality we "reset" the
            // observers using the original instance, mimicing the behavior had
            // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
            // that we maintain the references to the InternalResolve and InternalReject events through
            // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
            // which ignores symbol properties.
            base.using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* CopyFrom */ "t"])(this, "replace", (k) => /(auth|send|pre|init)/i.test(k)));
        });
    }
}
/**
 * Creates a batched version of the supplied base, meaning that all chained fluent operations from the new base are part of the batch
 *
 * @param base The base from which to initialize the batch
 * @param props Any properties used to initialize the batch functionality
 * @returns A tuple of [behavior used to assign objects to the batch, the execute function used to resolve the batch requests]
 */
function createBatch(base, props) {
    const registrationPromises = [];
    const completePromises = [];
    const requests = [];
    const batchId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* getGUID */ "u"])();
    const batchQuery = new BatchQueryable(base);
    // this query is used to copy back the behaviors after the batch executes
    // it should not manipulated or have behaviors added.
    const refQuery = new BatchQueryable(base);
    const { headersCopyPattern } = {
        headersCopyPattern: /Accept|Content-Type|IF-Match/i,
        ...props,
    };
    const execute = async () => {
        await Promise.all(registrationPromises);
        if (requests.length < 1) {
            // even if we have no requests we need to await the complete promises to ensure
            // that execute only resolves AFTER every child request disposes #2457
            // this likely means caching is being used, we returned values for all child requests from the cache
            return Promise.all(completePromises).then(() => void (0));
        }
        const batchBody = [];
        let currentChangeSetId = "";
        for (let i = 0; i < requests.length; i++) {
            const [, url, init] = requests[i];
            if (init.method === "GET") {
                if (currentChangeSetId.length > 0) {
                    // end an existing change set
                    batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                    currentChangeSetId = "";
                }
                batchBody.push(`--batch_${batchId}\n`);
            }
            else {
                if (currentChangeSetId.length < 1) {
                    // start new change set
                    currentChangeSetId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* getGUID */ "u"])();
                    batchBody.push(`--batch_${batchId}\n`);
                    batchBody.push(`Content-Type: multipart/mixed; boundary="changeset_${currentChangeSetId}"\n\n`);
                }
                batchBody.push(`--changeset_${currentChangeSetId}\n`);
            }
            // common batch part prefix
            batchBody.push("Content-Type: application/http\n");
            batchBody.push("Content-Transfer-Encoding: binary\n\n");
            // these are the per-request headers
            const headers = new Headers(init.headers);
            // this is the url of the individual request within the batch
            const reqUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "h"])(url) ? url : Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "s"])(batchQuery.requestBaseUrl, url);
            if (init.method !== "GET") {
                let method = init.method;
                if (headers.has("X-HTTP-Method")) {
                    method = headers.get("X-HTTP-Method");
                    headers.delete("X-HTTP-Method");
                }
                batchBody.push(`${method} ${reqUrl} HTTP/1.1\n`);
            }
            else {
                batchBody.push(`${init.method} ${reqUrl} HTTP/1.1\n`);
            }
            // lastly we apply any default headers we need that may not exist
            if (!headers.has("Accept")) {
                headers.append("Accept", "application/json");
            }
            if (!headers.has("Content-Type")) {
                headers.append("Content-Type", "application/json;charset=utf-8");
            }
            // write headers into batch body
            headers.forEach((value, name) => {
                if (headersCopyPattern.test(name)) {
                    batchBody.push(`${name}: ${value}\n`);
                }
            });
            batchBody.push("\n");
            if (init.body) {
                batchBody.push(`${init.body}\n\n`);
            }
        }
        if (currentChangeSetId.length > 0) {
            // Close the changeset
            batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
            currentChangeSetId = "";
        }
        batchBody.push(`--batch_${batchId}--\n`);
        const responses = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(batchQuery, {
            body: batchBody.join(""),
            headers: {
                "Content-Type": `multipart/mixed; boundary=batch_${batchId}`,
            },
        });
        if (responses.length !== requests.length) {
            throw Error("Could not properly parse responses to match requests in batch.");
        }
        return new Promise((res, rej) => {
            try {
                for (let index = 0; index < responses.length; index++) {
                    const [, , , resolve, reject] = requests[index];
                    try {
                        resolve(responses[index]);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
                // this small delay allows the promises to resolve correctly in order by dropping this resolve behind
                // the other work in the event loop. Feels hacky, but it works so 🤷
                setTimeout(res, 0);
            }
            catch (e) {
                setTimeout(() => rej(e), 0);
            }
        }).then(() => Promise.all(completePromises)).then(() => void (0));
    };
    const register = (instance) => {
        instance.on.init(function () {
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "_"])(this[RegistrationCompleteSym])) {
                throw Error("This instance is already part of a batch. Please review the docs at https://pnp.github.io/pnpjs/concepts/batching#reuse.");
            }
            // we need to ensure we wait to start execute until all our batch children hit the .send method to be fully registered
            registrationPromises.push(new Promise((resolve) => {
                this[RegistrationCompleteSym] = resolve;
            }));
            return this;
        });
        instance.on.pre(async function (url, init, result) {
            // Do not add to timeline if using BatchNever behavior
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(init.headers, "X-PnP-BatchNever")) {
                // clean up the init operations from the timeline
                // not strictly necessary as none of the logic that uses this should be in the request, but good to keep things tidy
                if (typeof (this[RequestCompleteSym]) === "function") {
                    this[RequestCompleteSym]();
                    delete this[RequestCompleteSym];
                }
                this.using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* CopyFrom */ "t"])(refQuery, "replace", (k) => /(init|pre)/i.test(k)));
                return [url, init, result];
            }
            // the entire request will be auth'd - we don't need to run this for each batch request
            this.on.auth.clear();
            // we replace the send function with our batching logic
            this.on.send.replace(async function (url, init) {
                // this is the promise that Queryable will see returned from .emit.send
                const promise = new Promise((resolve, reject) => {
                    // add the request information into the batch
                    requests.push([this, url.toString(), init, resolve, reject]);
                });
                this.log(`[batch:${batchId}] (${(new Date()).getTime()}) Adding request ${init.method} ${url.toString()} to batch.`, 0);
                // we need to ensure we wait to resolve execute until all our batch children have fully completed their request timelines
                completePromises.push(new Promise((resolve) => {
                    this[RequestCompleteSym] = resolve;
                }));
                // indicate that registration of this request is complete
                this[RegistrationCompleteSym]();
                return promise;
            });
            this.on.dispose(function () {
                if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "_"])(this[RegistrationCompleteSym])) {
                    // if this request is in a batch and caching is in play we need to resolve the registration promises to unblock processing of the batch
                    // because the request will never reach the "send" moment as the result is returned from "pre"
                    this[RegistrationCompleteSym]();
                    // remove the symbol props we added for good hygene
                    delete this[RegistrationCompleteSym];
                }
                if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "_"])(this[RequestCompleteSym])) {
                    // let things know we are done with this request
                    this[RequestCompleteSym]();
                    delete this[RequestCompleteSym];
                    // there is a code path where you may invoke a batch, say on items.add, whose return
                    // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
                    // is immediately usable to make additional queries. Without this step when that IItem instance is
                    // created using "this.getById" within IITems.add all of the current observers of "this" are
                    // linked to the IItem instance created (expected), BUT they will be the set of observers setup
                    // to handle the batch, meaning invoking `item` will result in a half batched call that
                    // doesn't really work. To deliver the expected functionality we "reset" the
                    // observers using the original instance, mimicing the behavior had
                    // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
                    // that we maintain the references to the InternalResolve and InternalReject events through
                    // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
                    // which ignores symbol properties.
                    this.using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* CopyFrom */ "t"])(refQuery, "replace", (k) => /(auth|pre|send|init|dispose)/i.test(k)));
                }
            });
            return [url, init, result];
        });
        return instance;
    };
    return [register, execute];
}
/**
 * Behavior that blocks batching for the request regardless of "method"
 *
 * This is used for requests to bypass batching methods. Example - Request Digest where we need to get a request-digest inside of a batch.
 * @returns TimelinePipe
 */
function BatchNever() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-BatchNever": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Parses the text body returned by the server from a batch request
 *
 * @param body String body from the server response
 * @returns Parsed response objects
 */
function parseResponse(body) {
    const responses = [];
    const header = "--batchresponse_";
    // Ex. "HTTP/1.1 500 Internal Server Error"
    const statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
    const lines = body.split("\n");
    let state = "batch";
    let status;
    let statusText;
    let headers = {};
    const bodyReader = [];
    for (let i = 0; i < lines.length; ++i) {
        let line = lines[i];
        switch (state) {
            case "batch":
                if (line.substring(0, header.length) === header) {
                    state = "batchHeaders";
                }
                else {
                    if (line.trim() !== "") {
                        throw Error(`Invalid response, line ${i}`);
                    }
                }
                break;
            case "batchHeaders":
                if (line.trim() === "") {
                    state = "status";
                }
                break;
            case "status": {
                const parts = statusRegExp.exec(line);
                if (parts.length !== 3) {
                    throw Error(`Invalid status, line ${i}`);
                }
                status = parseInt(parts[1], 10);
                statusText = parts[2];
                state = "statusHeaders";
                break;
            }
            case "statusHeaders":
                if (line.trim() === "") {
                    state = "body";
                }
                else {
                    const headerParts = line.split(":");
                    if ((headerParts === null || headerParts === void 0 ? void 0 : headerParts.length) === 2) {
                        headers[headerParts[0].trim()] = headerParts[1].trim();
                    }
                }
                break;
            case "body":
                // reset the body reader
                bodyReader.length = 0;
                // this allows us to capture batch bodies that are returned as multi-line (renderListDataAsStream, #2454)
                while (line.substring(0, header.length) !== header) {
                    bodyReader.push(line);
                    line = lines[++i];
                }
                // because we have read the closing --batchresponse_ line, we need to move the line pointer back one
                // so that the logic works as expected either to get the next result or end processing
                i--;
                responses.push(new Response(status === 204 ? null : bodyReader.join(""), { status, statusText, headers }));
                state = "batch";
                headers = {};
                break;
        }
    }
    if (state !== "status") {
        throw Error("Unexpected end of input");
    }
    return responses;
}
//# sourceMappingURL=batching.js.map

/***/ }),

/***/ "pGaT":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/column-defaults/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "jM62");
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.js */ "P6NM");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "pGs8":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/files/item.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "qfcF");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Item */ "n"], "file", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* File */ "e"], "file");
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "pNrY":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/sp/regional-settings/index.js ***!
  \*********************************************************/
/*! exports provided: RegionalSettings, TimeZone, TimeZones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "JT9m");
/* harmony import */ var _user_custom_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-custom-actions.js */ "2B8P");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "KJ7d");
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field.js */ "DL6e");
/* harmony import */ var _content_type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-type.js */ "auja");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types.js */ "luMW");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "pTlN":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/navigation/web.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "BK4w");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "navigation", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Navigation */ "e"]);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "pXI8":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/webparts/types.js ***!
  \************************************************/
/*! exports provided: _LimitedWebPartManager, LimitedWebPartManager, _WebPartDefinitions, WebPartDefinitions, _WebPartDefinition, WebPartDefinition, WebPartsPersonalizationScope */
/*! exports used: LimitedWebPartManager, WebPartsPersonalizationScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _LimitedWebPartManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LimitedWebPartManager; });
/* unused harmony export _WebPartDefinitions */
/* unused harmony export WebPartDefinitions */
/* unused harmony export _WebPartDefinition */
/* unused harmony export WebPartDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return WebPartsPersonalizationScope; });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operations.js */ "UK2s");



class _LimitedWebPartManager extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* _SPQueryable */ "r"] {
    get scope() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* SPQueryable */ "n"])(this, "Scope");
    }
    get webparts() {
        return WebPartDefinitions(this, "webparts");
    }
    export(id) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(LimitedWebPartManagerCloneFactory(this, "ExportWebPart"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({ webPartId: id }));
    }
    import(xml) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(LimitedWebPartManagerCloneFactory(this, "ImportWebPart"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({ webPartXml: xml }));
    }
}
const LimitedWebPartManager = (baseUrl, path) => new _LimitedWebPartManager(baseUrl, path);
const LimitedWebPartManagerCloneFactory = (baseUrl, path) => LimitedWebPartManager(baseUrl, path);
class _WebPartDefinitions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* _SPCollection */ "a"] {
    /**
     * Gets a web part definition from the collection by id
     *
     * @param id The storage ID of the SPWebPartDefinition to retrieve
     */
    getById(id) {
        return WebPartDefinition(this, `getbyid('${id}')`);
    }
    /**
     * Gets a web part definition from the collection by storage id
     *
     * @param id The WebPart.ID of the SPWebPartDefinition to retrieve
     */
    getByControlId(id) {
        return WebPartDefinition(this, `getByControlId('${id}')`);
    }
}
const WebPartDefinitions = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* spInvokableFactory */ "c"])(_WebPartDefinitions);
class _WebPartDefinition extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* _SPInstance */ "i"] {
    /**
    * Gets the webpart information associated with this definition
    */
    get webpart() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* SPInstance */ "t"])(this, "webpart");
    }
    /**
     * Saves changes to the Web Part made using other properties and methods on the SPWebPartDefinition object
     */
    saveChanges() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(WebPartDefinition(this, "SaveWebPartChanges"));
    }
    /**
     * Moves the Web Part to a different location on a Web Part Page
     *
     * @param zoneId The ID of the Web Part Zone to which to move the Web Part
     * @param zoneIndex A Web Part zone index that specifies the position at which the Web Part is to be moved within the destination Web Part zone
     */
    moveTo(zoneId, zoneIndex) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(WebPartDefinition(this, `MoveWebPartTo(zoneID='${zoneId}', zoneIndex=${zoneIndex})`));
    }
    /**
     * Closes the Web Part. If the Web Part is already closed, this method does nothing
     */
    close() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(WebPartDefinition(this, "CloseWebPart"));
    }
    /**
     * Opens the Web Part. If the Web Part is already closed, this method does nothing
     */
    open() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(WebPartDefinition(this, "OpenWebPart"));
    }
    /**
     * Removes a webpart from a page, all settings will be lost
     */
    delete() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(WebPartDefinition(this, "DeleteWebPart"));
    }
}
const WebPartDefinition = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* spInvokableFactory */ "c"])(_WebPartDefinition);
var WebPartsPersonalizationScope;
(function (WebPartsPersonalizationScope) {
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["User"] = 0] = "User";
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["Shared"] = 1] = "Shared";
})(WebPartsPersonalizationScope || (WebPartsPersonalizationScope = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "pZL3":
/*!****************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/transforms/provideUnits.js ***!
  \****************************************************************************/
/*! exports provided: provideUnits */
/*! exports used: provideUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return provideUnits; });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom',
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var isNonPixelProp = NON_PIXEL_NUMBER_PROPS.indexOf(name) > -1;
        var isVariableOrPrefixed = name.indexOf('--') > -1;
        var unit = isNonPixelProp || isVariableOrPrefixed ? '' : 'px';
        rulePairs[index + 1] = "".concat(value).concat(unit);
    }
}
//# sourceMappingURL=provideUnits.js.map

/***/ }),

/***/ "psVN":
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/Stylesheet.js ***!
  \***************************************************************/
/*! exports provided: InjectionMode, Stylesheet */
/*! exports used: Stylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InjectionMode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Stylesheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2,
};
var STYLESHEET_SETTING = '__stylesheet__';
/**
 * MSIE 11 doesn't cascade styles based on DOM ordering, but rather on the order that each style node
 * is created. As such, to maintain consistent priority, IE11 should reuse a single style node.
 */
var REUSE_STYLE_NODE = typeof navigator !== 'undefined' && /rv:11.0/.test(navigator.userAgent);
var _global = {};
// Grab window.
try {
    // Why the cast?
    // if compiled/type checked in same program with `@fluentui/font-icons-mdl2` which extends `Window` on global
    // ( check packages/font-icons-mdl2/src/index.ts ) the definitions don't match! Thus the need of this extra assertion
    _global = (window || {});
}
catch (_a) {
    /* leave as blank object */
}
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config, serializedStylesheet) {
        var _a, _b, _c, _d, _e, _f;
        this._rules = [];
        this._preservedRules = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onInsertRuleCallbacks = [];
        this._onResetCallbacks = [];
        this._classNameToArgs = {};
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({ 
            // If there is no document we won't have an element to inject into.
            injectionMode: typeof document === 'undefined' ? InjectionMode.none : InjectionMode.insertNode, defaultPrefix: 'css', namespace: undefined, cspSettings: undefined }, config);
        this._classNameToArgs = (_a = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.classNameToArgs) !== null && _a !== void 0 ? _a : this._classNameToArgs;
        this._counter = (_b = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.counter) !== null && _b !== void 0 ? _b : this._counter;
        this._keyToClassName = (_d = (_c = this._config.classNameCache) !== null && _c !== void 0 ? _c : serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.keyToClassName) !== null && _d !== void 0 ? _d : this._keyToClassName;
        this._preservedRules = (_e = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.preservedRules) !== null && _e !== void 0 ? _e : this._preservedRules;
        this._rules = (_f = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.rules) !== null && _f !== void 0 ? _f : this._rules;
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        _stylesheet = _global[STYLESHEET_SETTING];
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            var fabricConfig = (_global === null || _global === void 0 ? void 0 : _global.FabricConfig) || {};
            var stylesheet = new Stylesheet(fabricConfig.mergeStyles, fabricConfig.serializedStylesheet);
            _stylesheet = stylesheet;
            _global[STYLESHEET_SETTING] = stylesheet;
        }
        return _stylesheet;
    };
    /**
     * Serializes the Stylesheet instance into a format which allows rehydration on creation.
     * @returns string representation of `ISerializedStylesheet` interface.
     */
    Stylesheet.prototype.serialize = function () {
        return JSON.stringify({
            classNameToArgs: this._classNameToArgs,
            counter: this._counter,
            keyToClassName: this._keyToClassName,
            preservedRules: this._preservedRules,
            rules: this._rules,
        });
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "e"])({}, this._config), config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     * @returns function which when called un-registers provided callback.
     */
    Stylesheet.prototype.onReset = function (callback) {
        var _this = this;
        this._onResetCallbacks.push(callback);
        return function () {
            _this._onResetCallbacks = _this._onResetCallbacks.filter(function (cb) { return cb !== callback; });
        };
    };
    /**
     * Configures an insert rule callback.
     *
     * @param callback - A callback which will be called when a rule is inserted.
     * @returns function which when called un-registers provided callback.
     */
    Stylesheet.prototype.onInsertRule = function (callback) {
        var _this = this;
        this._onInsertRuleCallbacks.push(callback);
        return function () {
            _this._onInsertRuleCallbacks = _this._onInsertRuleCallbacks.filter(function (cb) { return cb !== callback; });
        };
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "".concat(namespace ? namespace + '-' : '').concat(prefix, "-").concat(this._counter++);
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules,
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets all classnames cache with the stylesheet.
     */
    Stylesheet.prototype.getClassNameCache = function () {
        return this._keyToClassName;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the rules associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== InjectionMode.none ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (injectionMode) {
                case InjectionMode.insertNode:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case InjectionMode.appendChild:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        // eslint-disable-next-line deprecation/deprecation
        if (this._config.onInsertRule) {
            // eslint-disable-next-line deprecation/deprecation
            this._config.onInsertRule(rule);
        }
        this._onInsertRuleCallbacks.forEach(function (callback) { return callback(); });
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return (includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            if (!REUSE_STYLE_NODE) {
                // Reset the style element on the next frame.
                window.requestAnimationFrame(function () {
                    _this._styleElement = undefined;
                });
            }
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var head = document.head;
        var styleElement = document.createElement('style');
        var nodeToInsertBefore = null;
        styleElement.setAttribute('data-merge-styles', 'true');
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
            if (cspSettings.nonce) {
                styleElement.setAttribute('nonce', cspSettings.nonce);
            }
        }
        if (this._lastStyleElement) {
            // If the `nextElementSibling` is null, then the insertBefore will act as a regular append.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Syntax
            nodeToInsertBefore = this._lastStyleElement.nextElementSibling;
        }
        else {
            var placeholderStyleTag = this._findPlaceholderStyleTag();
            if (placeholderStyleTag) {
                nodeToInsertBefore = placeholderStyleTag.nextElementSibling;
            }
            else {
                nodeToInsertBefore = head.childNodes[0];
            }
        }
        head.insertBefore(styleElement, head.contains(nodeToInsertBefore) ? nodeToInsertBefore : null);
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    Stylesheet.prototype._findPlaceholderStyleTag = function () {
        var head = document.head;
        if (head) {
            return head.querySelector('style[data-merge-styles]');
        }
        return null;
    };
    return Stylesheet;
}());

//# sourceMappingURL=Stylesheet.js.map

/***/ }),

/***/ "psVa":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/fields/web.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "KYlJ");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "fields", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Fields */ "e"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "availablefields", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Fields */ "e"]);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "pyJV":
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/dom/getWindow.js ***!
  \***************************************************************/
/*! exports provided: getWindow */
/*! exports used: getWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getWindow; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "iXHV");

var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    // eslint-disable-next-line no-restricted-globals
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
function getWindow(rootElement) {
    if (!Object(_canUseDOM__WEBPACK_IMPORTED_MODULE_0__[/* canUseDOM */ "e"])() || typeof _window === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
    }
}
//# sourceMappingURL=getWindow.js.map

/***/ }),

/***/ "qL0N":
/*!**********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching-pessimistic.js ***!
  \**********************************************************************/
/*! exports provided: CachingPessimisticRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CachingPessimisticRefresh */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queryable.js */ "Ww49");
/* harmony import */ var _caching_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching.js */ "VxMn");



/**
 * Pessimistic Caching Behavior
 * Always returns the cached value if one exists but asynchronously executes the call and updates the cache.
 * If a expireFunc is included then the cache update only happens if the cache has expired.
 *
 * @param store Use local or session storage
 * @param keyFactory: a function that returns the key for the cache value, if not provided a default hash of the url will be used
 * @param expireFunc: a function that returns a date of expiration for the cache value, if not provided the cache never expires but is always updated.
 */
function CachingPessimisticRefresh(props) {
    return (instance) => {
        const pre = async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = Object(_caching_js__WEBPACK_IMPORTED_MODULE_2__[/* bindCachingCore */ "a"])(url, init, props);
            if (!shouldCache) {
                return [url, init, result];
            }
            const cached = getCachedValue();
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "y"])(cached)) {
                // set our result
                result = cached;
                setTimeout(async () => {
                    const q = new _queryable_js__WEBPACK_IMPORTED_MODULE_1__[/* Queryable */ "e"](this);
                    const a = q.on.pre.toArray();
                    q.on.pre.clear();
                    // filter out this pre handler from the original queryable as we don't want to re-run it
                    a.filter(v => v !== pre).map(v => q.on.pre(v));
                    // in this case the init should contain the correct "method"
                    const value = await q(init);
                    setCachedValue(value);
                }, 0);
            }
            else {
                // register the post handler to cache the value as there is not one already in the cache
                // and we need to run this request as normal
                this.on.post(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* noInherit */ "v"])(async function (url, result) {
                    setCachedValue(result);
                    return [url, result];
                }));
            }
            return [url, init, result];
        };
        instance.on.pre(pre);
        return instance;
    };
}
//# sourceMappingURL=caching-pessimistic.js.map

/***/ }),

/***/ "qNel":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/copy-from.js ***!
  \*******************************************************/
/*! exports provided: CopyFrom */
/*! exports used: CopyFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CopyFrom; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "NuLX");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timeline.js */ "4kGv");


/**
 * Behavior that will copy all the observers in the source timeline and apply it to the incoming instance
 *
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @param filter If provided filters the moments from which the observers are copied. It should return true for each moment to include.
 * @returns The mutated this
 */
function CopyFrom(source, behavior = "append", filter) {
    return (instance) => {
        return Reflect.apply(copyObservers, instance, [source, behavior, filter]);
    };
}
/**
 * Function with implied this allows us to access protected members
 *
 * @param this The timeline whose observers we will copy
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @returns The mutated this
 */
function copyObservers(source, behavior, filter) {
    if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "l"])(source) || !Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "l"])(source.observers)) {
        return this;
    }
    if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "s"])(filter)) {
        filter = () => true;
    }
    const clonedSource = Object(_timeline_js__WEBPACK_IMPORTED_MODULE_1__[/* cloneObserverCollection */ "t"])(source.observers);
    const keys = Object.keys(clonedSource).filter(filter);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const on = this.on[key];
        if (behavior === "replace") {
            on.clear();
        }
        const momentObservers = clonedSource[key];
        momentObservers.forEach(v => on(v));
    }
    return this;
}
//# sourceMappingURL=copy-from.js.map

/***/ }),

/***/ "qPin":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/sharing/file.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _files_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../files/types.js */ "qfcF");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types.js */ "tCQJ");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "AvPO");



_files_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _File */ "n"].prototype.shareWith = async function (loginNames, role = _types_js__WEBPACK_IMPORTED_MODULE_2__[/* SharingRole */ "t"].View, requireSignin = false, emailData) {
    const item = await this.getItem();
    return item.shareWith(loginNames, role, requireSignin, emailData);
};
_files_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _File */ "n"].prototype.getShareLink = async function (kind, expiration = null) {
    const item = await this.getItem();
    return item.getShareLink(kind, expiration);
};
_files_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _File */ "n"].prototype.checkSharingPermissions = async function (recipients) {
    const item = await this.getItem();
    return item.checkSharingPermissions(recipients);
};
// TODO:: clean up this method signature for next major release
// eslint-disable-next-line max-len
_files_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _File */ "n"].prototype.getSharingInformation = async function (request = null, expands, selects) {
    const item = await this.getItem();
    return item.getSharingInformation(request, expands, selects);
};
_files_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _File */ "n"].prototype.getObjectSharingSettings = async function (useSimplifiedRoles = true) {
    const item = await this.getItem();
    return item.getObjectSharingSettings(useSimplifiedRoles);
};
_files_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _File */ "n"].prototype.unshare = async function () {
    const item = await this.getItem();
    return item.unshare();
};
_files_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _File */ "n"].prototype.deleteSharingLinkByKind = async function (linkKind) {
    const item = await this.getItem();
    return item.deleteSharingLinkByKind(linkKind);
};
_files_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _File */ "n"].prototype.unshareLink = async function unshareLink(linkKind, shareId = _types_js__WEBPACK_IMPORTED_MODULE_1__[/* emptyGuid */ "e"]) {
    const item = await this.getItem();
    return item.unshareLink(linkKind, shareId);
};
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "qQFQ":
/*!*********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/styleToClassName.js ***!
  \*********************************************************************/
/*! exports provided: serializeRuleEntries, styleToRegistration, applyRegistration, styleToClassName */
/*! exports used: applyRegistration, serializeRuleEntries, styleToRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return serializeRuleEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return styleToRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return applyRegistration; });
/* unused harmony export styleToClassName */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stylesheet */ "psVN");
/* harmony import */ var _transforms_kebabRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transforms/kebabRules */ "emH4");
/* harmony import */ var _transforms_prefixRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transforms/prefixRules */ "F2fp");
/* harmony import */ var _transforms_provideUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transforms/provideUnits */ "pZL3");
/* harmony import */ var _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transforms/rtlifyRules */ "VtbQ");
/* harmony import */ var _tokenizeWithParentheses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokenizeWithParentheses */ "CZZX");







var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */
function expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!globalSelectorRegExp.test(selectorWithGlobals)) {
        return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while ((match = findGlobal.exec(selectorWithGlobals))) {
        // Only if the found selector is a comma separated list we'll process it.
        if (match[1].indexOf(',') > -1) {
            replacementInfo.push([
                match.index,
                match.index + match[0].length,
                // Wrap each of the found selectors in :global()
                match[1]
                    .split(',')
                    .map(function (v) { return ":global(".concat(v.trim(), ")"); })
                    .join(', '),
            ]);
        }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo
        .reverse()
        .reduce(function (selector, _a) {
        var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
        var prefix = selector.slice(0, matchIndex);
        var suffix = selector.slice(matchEndIndex);
        return prefix + replacement + suffix;
    }, selectorWithGlobals);
}
function expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
        return newSelector.replace(globalSelectorRegExp, '$1');
    }
    else if (newSelector.indexOf(':') === 0) {
        return currentSelector + newSelector;
    }
    else if (newSelector.indexOf('&') < 0) {
        return currentSelector + ' ' + newSelector;
    }
    return newSelector;
}
function extractSelector(currentSelector, rules, selector, value) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (selector.indexOf('@') === 0) {
        selector = selector + '{' + currentSelector;
        extractRules([value], rules, selector);
    }
    else if (selector.indexOf(',') > -1) {
        expandCommaSeparatedGlobals(selector)
            .split(',')
            .map(function (s) { return s.trim(); })
            .forEach(function (separatedSelector) {
            return extractRules([value], rules, expandSelector(separatedSelector, currentSelector));
        });
    }
    else {
        extractRules([value], rules, expandSelector(selector, currentSelector));
    }
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__[/* Stylesheet */ "e"].getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            for (var prop in arg) {
                if (arg.hasOwnProperty(prop)) {
                    var propValue = arg[prop];
                    if (prop === 'selectors') {
                        // every child is a selector.
                        var selectors = arg.selectors;
                        for (var newSelector in selectors) {
                            if (selectors.hasOwnProperty(newSelector)) {
                                extractSelector(currentSelector, rules, newSelector, selectors[newSelector]);
                            }
                        }
                    }
                    else if (typeof propValue === 'object') {
                        // prop is a selector.
                        if (propValue !== null) {
                            extractSelector(currentSelector, rules, prop, propValue);
                        }
                    }
                    else {
                        if (propValue !== undefined) {
                            // Else, add the rule to the currentSelector.
                            if (prop === 'margin' || prop === 'padding') {
                                expandQuads(currentRules, prop, propValue);
                            }
                            else {
                                currentRules[prop] = propValue;
                            }
                        }
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? Object(_tokenizeWithParentheses__WEBPACK_IMPORTED_MODULE_6__[/* tokenizeWithParentheses */ "e"])(value) : [value];
    if (parts.length === 0) {
        parts.push(value);
    }
    if (parts[parts.length - 1] === '!important') {
        // Remove !important from parts, and append it to each part individually
        parts = parts.slice(0, -1).map(function (p) { return p + ' !important'; });
    }
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(options, rules) {
    var serialized = [options.rtl ? 'rtl' : 'ltr'];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function repeatString(target, count) {
    if (count <= 0) {
        return '';
    }
    if (count === 1) {
        return target;
    }
    return target + repeatString(target, count - 1);
}
function serializeRuleEntries(options, ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        Object(_transforms_kebabRules__WEBPACK_IMPORTED_MODULE_2__[/* kebabRules */ "e"])(allEntries, i);
        Object(_transforms_provideUnits__WEBPACK_IMPORTED_MODULE_4__[/* provideUnits */ "e"])(allEntries, i);
        Object(_transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_5__[/* rtlifyRules */ "e"])(options, allEntries, i);
        Object(_transforms_prefixRules__WEBPACK_IMPORTED_MODULE_3__[/* prefixRules */ "e"])(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
function styleToRegistration(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(options, rules);
    if (key) {
        var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__[/* Stylesheet */ "e"].getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args,
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(options, rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
    return undefined;
}
/**
 * Insert style to stylesheet.
 * @param registration Style registration.
 * @param specificityMultiplier Number of times classname selector is repeated in the css rule.
 * This is to increase css specificity in case it's needed. Default to 1.
 */
function applyRegistration(registration, specificityMultiplier) {
    if (specificityMultiplier === void 0) { specificityMultiplier = 1; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__[/* Stylesheet */ "e"].getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                selector = selector.replace(/&/g, repeatString(".".concat(registration.className), specificityMultiplier));
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = "".concat(selector, "{").concat(rules, "}").concat(selector.indexOf('@') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
function styleToClassName(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArray */ "a"])([options], args, false));
    if (registration) {
        applyRegistration(registration, options.specificityMultiplier);
        return registration.className;
    }
    return '';
}
//# sourceMappingURL=styleToClassName.js.map

/***/ }),

/***/ "qX3+":
/*!*****************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/concatStyleSetsWithProps.js ***!
  \*****************************************************************************/
/*! exports provided: concatStyleSetsWithProps */
/*! exports used: concatStyleSetsWithProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return concatStyleSetsWithProps; });
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concatStyleSets */ "VD3q");

/**
 * Concatenates style sets into one, but resolves functional sets using the given props.
 * @param styleProps - Props used to resolve functional sets.
 * @param allStyles - Style sets, which can be functions or objects.
 */
function concatStyleSetsWithProps(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length === 1) {
        return result[0];
    }
    else if (result.length) {
        // cliffkoh: I cannot figure out how to avoid the cast to any here.
        // It is something to do with the use of Omit in IStyleSet.
        // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
        // the official version).
        return _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__[/* concatStyleSets */ "e"].apply(void 0, result);
    }
    return {};
}
//# sourceMappingURL=concatStyleSetsWithProps.js.map

/***/ }),

/***/ "qZw7":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/defaults.js ***!
  \****************************************************/
/*! exports provided: DefaultInit, DefaultHeaders */
/*! exports used: DefaultHeaders, DefaultInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return DefaultInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DefaultHeaders; });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telemetry.js */ "nikm");


function DefaultInit() {
    return (instance) => {
        instance.on.pre(async (url, init, result) => {
            init.cache = "no-cache";
            init.credentials = "same-origin";
            return [url, init, result];
        });
        instance.using(Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_1__[/* Telemetry */ "e"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* RejectOnError */ "u"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* ResolveOnData */ "f"])());
        return instance;
    };
}
function DefaultHeaders() {
    return (instance) => {
        instance
            .using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* InjectHeaders */ "c"])({
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8",
        }));
        return instance;
    };
}
//# sourceMappingURL=defaults.js.map

/***/ }),

/***/ "qfcF":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/files/types.js ***!
  \*********************************************/
/*! exports provided: _Files, Files, _File, File, fileFromServerRelativePath, fileFromAbsolutePath, fileFromPath, _Versions, Versions, _Version, Version, CheckinType, MoveOperations, TemplateFileType */
/*! exports used: File, Files, _File, fileFromServerRelativePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Files */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fileFromServerRelativePath; });
/* unused harmony export fileFromAbsolutePath */
/* unused harmony export fileFromPath */
/* unused harmony export _Versions */
/* unused harmony export Versions */
/* unused harmony export _Version */
/* unused harmony export Version */
/* unused harmony export CheckinType */
/* unused harmony export MoveOperations */
/* unused harmony export TemplateFileType */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _items_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/index.js */ "lYrR");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-resource-path.js */ "G6u6");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");
/* harmony import */ var _readable_file_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./readable-file.js */ "fTfs");
/* harmony import */ var _context_info_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context-info/index.js */ "Ji9F");
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../batching.js */ "pAcn");














/**
 * Describes a collection of File objects
 *
 */
let _Files = class _Files extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPCollection */ "a"] {
    /**
     * Gets a File by filename
     *
     * @param name The name of the file, including extension.
     */
    getByUrl(name) {
        if (/%#/.test(name)) {
            throw Error("For file names containing % or # please use web.getFileByServerRelativePath");
        }
        return File(this).concat(`('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(name)}')`);
    }
    /**
     * Adds a file using the pound percent safe methods
     *
     * @param url Encoded url of the file
     * @param content The file content
     * @param parameters Additional parameters to control method behavior
     */
    async addUsingPath(url, content, parameters = { Overwrite: false }) {
        const path = [`AddUsingPath(decodedurl='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(url)}'`];
        if (parameters) {
            if (parameters.Overwrite) {
                path.push(",Overwrite=true");
            }
            if (parameters.EnsureUniqueFileName) {
                path.push(`,EnsureUniqueFileName=${parameters.EnsureUniqueFileName}`);
            }
            if (parameters.AutoCheckoutOnInvalidData) {
                path.push(",AutoCheckoutOnInvalidData=true");
            }
            if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* stringIsNullOrEmpty */ "I"])(parameters.XorHash)) {
                path.push(`,XorHash=${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(parameters.XorHash)}`);
            }
        }
        path.push(")");
        const resp = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Files(this, path.join("")), { body: content });
        return {
            data: resp,
            file: fileFromServerRelativePath(this, resp.ServerRelativeUrl),
        };
    }
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The Blob file content to add
     * @param progress A callback function which can be used to track the progress of the upload
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     * @returns The new File and the raw response.
     */
    async addChunked(url, content, progress, shouldOverWrite = true, chunkSize = 10485760) {
        const response = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Files(this, `add(overwrite=${shouldOverWrite},url='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(url)}')`));
        const file = fileFromServerRelativePath(this, response.ServerRelativeUrl);
        file.using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* CancelAction */ "o"])(() => {
            return File(file).delete();
        }));
        return file.setContentChunked(content, progress, chunkSize);
    }
    /**
     * Adds a ghosted file to an existing list or document library. Not supported for batching.
     *
     * @param fileUrl The server-relative url where you want to save the file.
     * @param templateFileType The type of use to create the file.
     * @returns The template file that was added and the raw response.
     */
    async addTemplateFile(fileUrl, templateFileType) {
        const response = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Files(this, `addTemplateFile(urloffile='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(fileUrl)}',templatefiletype=${templateFileType})`));
        return {
            data: response,
            file: fileFromServerRelativePath(this, response.ServerRelativeUrl),
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* cancelableScope */ "h"]
], _Files.prototype, "addUsingPath", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* cancelableScope */ "h"]
], _Files.prototype, "addChunked", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* cancelableScope */ "h"]
], _Files.prototype, "addTemplateFile", null);
_Files = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_6__[/* defaultPath */ "e"])("files")
], _Files);

const Files = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_Files);
/**
 * Describes a single File instance
 *
 */
class _File extends _readable_file_js__WEBPACK_IMPORTED_MODULE_11__[/* ReadableFile */ "e"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* deleteableWithETag */ "s"])();
    }
    /**
     * Gets a value that specifies the list item field values for the list item corresponding to the file.
     *
     */
    get listItemAllFields() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* SPInstance */ "t"])(this, "listItemAllFields");
    }
    /**
     * Gets a collection of versions
     *
     */
    get versions() {
        return Versions(this);
    }
    /**
     * Gets the current locked by user
     *
     */
    async getLockedByUser() {
        const u = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spGet */ "t"])(File(this, "lockedByUser"));
        if (u["odata.null"] === true) {
            return null;
        }
        else {
            return u;
        }
    }
    /**
     * Approves the file submitted for content approval with the specified comment.
     * Only documents in lists that are enabled for content approval can be approved.
     *
     * @param comment The comment for the approval.
     */
    approve(comment = "") {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `approve(comment='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(comment)}')`));
    }
    /**
     * Stops the chunk upload session without saving the uploaded data. Does not support batching.
     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     */
    cancelUpload(uploadId) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `cancelUpload(uploadId=guid'${uploadId}')`));
    }
    /**
     * Checks the file in to a document library based on the check-in type.
     *
     * @param comment A comment for the check-in. Its length must be <= 1023.
     * @param checkinType The check-in type for the file.
     */
    checkin(comment = "", checkinType = CheckinType.Major) {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `checkin(comment='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(comment)}',checkintype=${checkinType})`));
    }
    /**
     * Checks out the file from a document library.
     */
    checkout() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, "checkout"));
    }
    /**
     * Copies the file to the destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     */
    copyTo(url, shouldOverWrite = true) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `copyTo(strnewurl='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(url)}',boverwrite=${shouldOverWrite})`));
    }
    async copyByPath(destUrl, ...rest) {
        let options = {
            ShouldBypassSharedLocks: true,
            ResetAuthorAndCreatedOnCopy: true,
            KeepBoth: false,
        };
        if (rest.length === 2) {
            if (typeof rest[1] === "boolean") {
                options.KeepBoth = rest[1];
            }
            else if (typeof rest[1] === "object") {
                options = { ...options, ...rest[1] };
            }
        }
        return this.moveCopyImpl(destUrl, options, rest[0], "CopyFileByPath");
    }
    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     *
     * @param comment The comment for the denial.
     */
    deny(comment = "") {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `deny(comment='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(comment)}')`));
    }
    async moveByPath(destUrl, ...rest) {
        let options = {
            KeepBoth: false,
            ShouldBypassSharedLocks: true,
            RetainEditorAndModifiedOnMove: false,
        };
        if (rest.length === 2) {
            if (typeof rest[1] === "boolean") {
                options.KeepBoth = rest[1];
            }
            else if (typeof rest[1] === "object") {
                options = { ...options, ...rest[1] };
            }
        }
        return this.moveCopyImpl(destUrl, options, rest[0], "MoveFileByPath");
    }
    /**
     * Submits the file for content approval with the specified comment.
     *
     * @param comment The comment for the published file. Its length must be <= 1023.
     */
    publish(comment = "") {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `publish(comment='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(comment)}')`));
    }
    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     *
     * @returns The GUID of the recycled file.
     */
    recycle() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, "recycle"));
    }
    /**
     * Deletes the file object with options.
     *
     * @param parameters Specifies the options to use when deleting a file.
     */
    async deleteWithParams(parameters) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, "DeleteWithParameters"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({ parameters }));
    }
    /**
     * Reverts an existing checkout for the file.
     *
     */
    undoCheckout() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, "undoCheckout"));
    }
    /**
     * Removes the file from content approval or unpublish a major version.
     *
     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
     */
    unpublish(comment = "") {
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `unpublish(comment='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(comment)}')`));
    }
    /**
     * Checks to see if the file represented by this object exists
     *
     */
    async exists() {
        try {
            const r = await File(this).select("Exists")();
            return r.Exists;
        }
        catch (e) {
            // this treats any error here as the file not existing, which
            // might not be true, but is good enough.
            return false;
        }
    }
    /**
     * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
     *
     * @param content The file content
     *
     */
    async setContent(content) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, "$value"), {
            body: content,
            headers: {
                "X-HTTP-Method": "PUT",
            },
        });
        return File(this);
    }
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    async getItem(...selects) {
        const q = this.listItemAllFields;
        const d = await q.select(...selects)();
        return Object.assign(Object(_items_index_js__WEBPACK_IMPORTED_MODULE_4__[/* Item */ "e"])([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_5__[/* odataUrlFrom */ "e"])(d)]), d);
    }
    /**
     * Sets the contents of a file using a chunked upload approach. Not supported in batching.
     *
     * @param file The file to upload
     * @param progress A callback function which can be used to track the progress of the upload
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     */
    async setContentChunked(file, progress, chunkSize = 10485760) {
        if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* isFunc */ "_"])(progress)) {
            progress = () => null;
        }
        const fileSize = (file === null || file === void 0 ? void 0 : file.size) || file.length;
        const totalBlocks = parseInt((fileSize / chunkSize).toString(), 10) + ((fileSize % chunkSize === 0) ? 1 : 0);
        const uploadId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* getGUID */ "u"])();
        const fileRef = File(this).using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* CancelAction */ "o"])(() => {
            return File(fileRef).cancelUpload(uploadId);
        }));
        // report that we are starting
        progress({ uploadId, blockNumber: 1, chunkSize, currentPointer: 0, fileSize, stage: "starting", totalBlocks });
        let currentPointer = await fileRef.startUpload(uploadId, file.slice(0, chunkSize));
        // skip the first and last blocks
        for (let i = 2; i < totalBlocks; i++) {
            progress({ uploadId, blockNumber: i, chunkSize, currentPointer, fileSize, stage: "continue", totalBlocks });
            currentPointer = await fileRef.continueUpload(uploadId, currentPointer, file.slice(currentPointer, currentPointer + chunkSize));
        }
        progress({ uploadId, blockNumber: totalBlocks, chunkSize, currentPointer, fileSize, stage: "finishing", totalBlocks });
        return fileRef.finishUpload(uploadId, currentPointer, file.slice(currentPointer));
    }
    /**
     * Starts a new chunk upload session and uploads the first fragment.
     * The current file content is not changed when this method completes.
     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
     * The upload session ends either when you use the CancelUpload method or when you successfully
     * complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
     * The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
     * so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    async startUpload(uploadId, fragment) {
        let n = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `startUpload(uploadId=guid'${uploadId}')`), { body: fragment });
        if (typeof n === "object") {
            // When OData=verbose the payload has the following shape:
            // { StartUpload: "10485760" }
            n = n.StartUpload;
        }
        return parseFloat(n);
    }
    /**
     * Continues the chunk upload session with an additional fragment.
     * The current file content is not changed.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    async continueUpload(uploadId, fileOffset, fragment) {
        let n = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `continueUpload(uploadId=guid'${uploadId}',fileOffset=${fileOffset})`), { body: fragment });
        if (typeof n === "object") {
            // When OData=verbose the payload has the following shape:
            // { ContinueUpload: "20971520" }
            n = n.ContinueUpload;
        }
        return parseFloat(n);
    }
    /**
     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The newly uploaded file.
     */
    async finishUpload(uploadId, fileOffset, fragment) {
        const response = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(File(this, `finishUpload(uploadId=guid'${uploadId}',fileOffset=${fileOffset})`), { body: fragment });
        return {
            data: response,
            file: fileFromServerRelativePath(this, response.ServerRelativeUrl),
        };
    }
    moveCopyImpl(destUrl, options, overwrite, methodName) {
        // create a timeline we will manipulate for this request
        const poster = File(this);
        // add our pre-request actions, this fixes issues with batching hanging #2668
        poster.on.pre(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* noInherit */ "v"])(async (url, init, result) => {
            const { ServerRelativeUrl: srcUrl, ["odata.id"]: absoluteUrl } = await File(this).using(Object(_batching_js__WEBPACK_IMPORTED_MODULE_13__[/* BatchNever */ "e"])()).select("ServerRelativeUrl")();
            const webBaseUrl = new URL(Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__[/* extractWebUrl */ "e"])(absoluteUrl));
            url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* combine */ "s"])(webBaseUrl.toString(), `/_api/SP.MoveCopyUtil.${methodName}(overwrite=@a1)?@a1=${overwrite}`);
            init = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* body */ "_"])({
                destPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__[/* toResourcePath */ "e"])(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* isUrlAbsolute */ "h"])(destUrl) ? destUrl : `${webBaseUrl.protocol}//${webBaseUrl.host}${destUrl}`),
                options,
                srcPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__[/* toResourcePath */ "e"])(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* isUrlAbsolute */ "h"])(srcUrl) ? srcUrl : `${webBaseUrl.protocol}//${webBaseUrl.host}${srcUrl}`),
            }, init);
            return [url, init, result];
        }));
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(poster).then(() => fileFromPath(this, destUrl));
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* cancelableScope */ "h"]
], _File.prototype, "copyByPath", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* cancelableScope */ "h"]
], _File.prototype, "moveByPath", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* cancelableScope */ "h"]
], _File.prototype, "setContentChunked", null);
const File = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_File);
/**
 * Creates an IFile instance given a base object and a server relative path
 *
 * @param base Valid SPQueryable from which the observers will be used and the web url extracted
 * @param serverRelativePath The server relative url to the file (ex: '/sites/dev/documents/file.txt')
 * @returns IFile instance referencing the file described by the supplied parameters
 */
function fileFromServerRelativePath(base, serverRelativePath) {
    return File([base, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__[/* extractWebUrl */ "e"])(base.toUrl())], `_api/web/getFileByServerRelativePath(decodedUrl='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(serverRelativePath)}')`);
}
/**
 * Creates an IFile instance given a base object and an absolute path
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath The absolute url to the file (ex: 'https://tenant.sharepoint.com/sites/dev/documents/file.txt')
 * @returns IFile instance referencing the file described by the supplied parameters
 */
async function fileFromAbsolutePath(base, absoluteFilePath) {
    const { WebFullUrl } = await File(base).using(Object(_batching_js__WEBPACK_IMPORTED_MODULE_13__[/* BatchNever */ "e"])()).getContextInfo(absoluteFilePath);
    const { pathname } = new URL(absoluteFilePath);
    return fileFromServerRelativePath(File([base, Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* combine */ "s"])(WebFullUrl, "_api/web")]), decodeURIComponent(pathname));
}
/**
 * Creates an IFile intance given a base object and either an absolute or server relative path to a file
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath server relative or absolute url to the file (ex: 'https://tenant.sharepoint.com/sites/dev/documents/file.txt' or '/sites/dev/documents/file.txt')
 * @returns IFile instance referencing the file described by the supplied parameters
 */
async function fileFromPath(base, path) {
    return (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__[/* isUrlAbsolute */ "h"])(path) ? fileFromAbsolutePath : fileFromServerRelativePath)(base, path);
}
/**
 * Describes a collection of Version objects
 *
 */
let _Versions = class _Versions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* _SPCollection */ "a"] {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId) {
        return Version(this).concat(`(${versionId})`);
    }
    /**
     * Deletes all the file version objects in the collection.
     *
     */
    deleteAll() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Versions(this, "deleteAll"));
    }
    /**
     * Deletes the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    deleteById(versionId) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Versions(this, `deleteById(vid=${versionId})`));
    }
    /**
     * Recycles the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    recycleByID(versionId) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Versions(this, `recycleByID(vid=${versionId})`));
    }
    /**
     * Deletes the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    deleteByLabel(label) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Versions(this, `deleteByLabel(versionlabel='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(label)}')`));
    }
    /**
     * Recycles the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    recycleByLabel(label) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Versions(this, `recycleByLabel(versionlabel='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(label)}')`));
    }
    /**
     * Creates a new file version from the file specified by the version label.
     *
     * @param label The version label of the file version to restore, for example: 1.2
     */
    restoreByLabel(label) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__[/* spPost */ "a"])(Versions(this, `restoreByLabel(versionlabel='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__[/* encodePath */ "e"])(label)}')`));
    }
};
_Versions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_6__[/* defaultPath */ "e"])("versions")
], _Versions);

const Versions = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_Versions);
/**
 * Describes a single Version instance
 *
 */
class _Version extends _readable_file_js__WEBPACK_IMPORTED_MODULE_11__[/* ReadableFile */ "e"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* deleteable */ "o"])();
    }
}
const Version = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__[/* spInvokableFactory */ "c"])(_Version);
/**
 * Types for document check in.
 * Minor = 0
 * Major = 1
 * Overwrite = 2
 */
var CheckinType;
(function (CheckinType) {
    CheckinType[CheckinType["Minor"] = 0] = "Minor";
    CheckinType[CheckinType["Major"] = 1] = "Major";
    CheckinType[CheckinType["Overwrite"] = 2] = "Overwrite";
})(CheckinType || (CheckinType = {}));
/**
 * File move opertions
 */
var MoveOperations;
(function (MoveOperations) {
    /**
     * Produce an error if a file with the same name exists in the destination
     */
    MoveOperations[MoveOperations["None"] = 0] = "None";
    /**
     * Overwrite a file with the same name if it exists. Value is 1.
     */
    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
    /**
     * Complete the move operation even if supporting files are separated from the file. Value is 8.
     */
    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
    /**
     * Boolean specifying whether to retain the source of the move's editor and modified by datetime.
     */
    MoveOperations[MoveOperations["RetainEditorAndModifiedOnMove"] = 2048] = "RetainEditorAndModifiedOnMove";
})(MoveOperations || (MoveOperations = {}));
var TemplateFileType;
(function (TemplateFileType) {
    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
    TemplateFileType[TemplateFileType["ClientSidePage"] = 3] = "ClientSidePage";
})(TemplateFileType || (TemplateFileType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "qoFj":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/site-designs/index.js ***!
  \****************************************************/
/*! exports provided: SiteDesigns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "eDdy");
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "w4d6");




Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_1__[/* SPFI */ "e"].prototype, "siteDesigns", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SiteDesigns */ "e"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "t9SU":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/core/extendable.js ***!
  \**********************************************/
/*! exports provided: extendable, extend, extendFactory, disableExtensions, enableExtensions */
/*! exports used: extendable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return extendable; });
/* unused harmony export extend */
/* unused harmony export extendFactory */
/* unused harmony export disableExtensions */
/* unused harmony export enableExtensions */
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "NuLX");

let _enableExtensions = false;
const ObjExtensionsSym = Symbol.for("PnPExt");
const factoryExtensions = new Map();
/**
 * Decorator factory wrapping any tagged class in the extension proxy, enabling the use of object extensions
 *
 * @description MUST be applied last (i.e. be the first decorator in the list top to bottom applied to a class)
 *
 * @returns Decorator implementation
 */
function extendable() {
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                let r = Reflect.construct(clz, args, newTarget);
                // this block handles the factory function extensions by picking
                // them off the factory and applying them to the created object
                const proto = Reflect.getPrototypeOf(target);
                if (Reflect.has(proto, ObjExtensionsSym)) {
                    const extensions = factoryExtensions.get(Reflect.get(proto, ObjExtensionsSym));
                    if (extensions) {
                        r = extend(r, extensions);
                    }
                }
                const proxied = new Proxy(r, {
                    apply: (target, _thisArg, argArray) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("apply", (...a) => Reflect.apply(...a), target, proxied, argArray);
                    },
                    get: (target, p, receiver) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("get", (...a) => Reflect.get(...a), target, p, receiver);
                    },
                    has: (target, p) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("has", (...a) => Reflect.has(...a), target, p);
                    },
                    set: (target, p, value, receiver) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("set", (...a) => Reflect.set(...a), target, p, value, receiver);
                    },
                });
                return proxied;
            },
        });
    };
}
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
function extend(target, extensions) {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.defineProperty(target, ObjExtensionsSym, {
            writable: true,
            value: [],
        });
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
}
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
function extendFactory(factory, extensions) {
    _enableExtensions = true;
    // factoryExtensions
    const proto = Reflect.getPrototypeOf(factory);
    if (proto) {
        if (!Reflect.has(proto, ObjExtensionsSym)) {
            Reflect.defineProperty(proto, ObjExtensionsSym, {
                value: Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* getGUID */ "a"])(),
            });
        }
        const key = proto[ObjExtensionsSym];
        if (!factoryExtensions.has(key)) {
            factoryExtensions.set(key, []);
        }
        extendCol(factoryExtensions.get(key), extensions);
    }
}
function extendCol(a, e) {
    if (Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "o"])(e)) {
        a.push(...e);
    }
    else {
        a.push(e);
    }
}
/**
 * Disables all extensions
 */
const disableExtensions = () => {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
const enableExtensions = () => {
    _enableExtensions = true;
};
/**
 * Executes the extended functionality if present, or the default action
 *
 * @param op Current operation type
 * @param or The default non-extended functionality
 * @param target The current "this" to which the current call applies
 * @param rest Any arguments required for the called method
 * @returns Whatever the underlying extension or method returns
 */
function extensionOrDefault(op, or, target, ...rest) {
    if (_enableExtensions && Reflect.has(target, ObjExtensionsSym)) {
        const extensions = [...Reflect.get(target, ObjExtensionsSym)];
        let result = undefined;
        for (let i = 0; i < extensions.length; i++) {
            const extension = extensions[i];
            if (Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "s"])(extension)) {
                // this extension is a function which we call
                result = extension(op, target, ...rest);
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are adding/overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op)(target, ...rest);
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or(target, ...rest);
}
//# sourceMappingURL=extendable.js.map

/***/ }),

/***/ "tCQJ":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/types.js ***!
  \***************************************/
/*! exports provided: emptyGuid, PrincipalType, PrincipalSource, PageType */
/*! exports used: emptyGuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return emptyGuid; });
/* unused harmony export PrincipalType */
/* unused harmony export PrincipalSource */
/* unused harmony export PageType */
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
const emptyGuid = "00000000-0000-0000-0000-000000000000";
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/**
 * Specifies the source of a principal.
 */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "tGZ3":
/*!************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/resolvers.js ***!
  \************************************************************/
/*! exports provided: ResolveOnData, RejectOnError */
/*! exports used: RejectOnError, ResolveOnData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ResolveOnData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RejectOnError; });
function ResolveOnData() {
    return (instance) => {
        instance.on.data(function (data) {
            this.emit[this.InternalResolve](data);
        });
        return instance;
    };
}
function RejectOnError() {
    return (instance) => {
        instance.on.error(function (err) {
            this.emit[this.InternalReject](err);
        });
        return instance;
    };
}
//# sourceMappingURL=resolvers.js.map

/***/ }),

/***/ "tOv3":
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/styles/index.js ***!
  \********************************************************************/
/*! exports provided: AnimationStyles, AnimationVariables, DefaultPalette, DefaultEffects, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, getFocusOutlineStyle, getInputFocusStyle, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, getThemedContext, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, EdgeChromiumHighContrastSelector, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, getHighContrastNoAdjustStyle, getEdgeChromiumNoHighContrastAdjustSelector, normalize, noWrap, getFadedOverflowStyle, getPlaceholderStyles, ZIndexes */
/*! exports used: HighContrastSelector, getGlobalClassNames, getHighContrastNoAdjustStyle, hiddenContentStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hiddenContentStyle */ "Tahi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getGlobalClassNames */ "HiRk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommonStyles */ "Hkdm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_2__["t"]; });

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "uMGh":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/sp/user-custom-actions/web.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "1mTr");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "userCustomActions", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* UserCustomActions */ "e"]);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "udT0":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/parsers.js ***!
  \**********************************************************/
/*! exports provided: DefaultParse, TextParse, BlobParse, JSONParse, BufferParse, HeaderParse, JSONHeaderParse, errorCheck, parseODataJSON, parseBinderWithErrorCheck, HttpRequestError */
/*! exports used: BlobParse, BufferParse, DefaultParse, HttpRequestError, JSONParse, TextParse, parseBinderWithErrorCheck, parseODataJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return DefaultParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TextParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BlobParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return JSONParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return BufferParse; });
/* unused harmony export HeaderParse */
/* unused harmony export JSONHeaderParse */
/* unused harmony export errorCheck */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return parseODataJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return parseBinderWithErrorCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestError; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");


function DefaultParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return parseODataJSON(json);
    });
}
function TextParse() {
    return parseBinderWithErrorCheck(r => r.text());
}
function BlobParse() {
    return parseBinderWithErrorCheck(r => r.blob());
}
function JSONParse() {
    return parseBinderWithErrorCheck(r => r.json());
}
function BufferParse() {
    return parseBinderWithErrorCheck(r => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "_"])(r.arrayBuffer) ? r.arrayBuffer() : r.buffer());
}
function HeaderParse() {
    return parseBinderWithErrorCheck(async (r) => r.headers);
}
function JSONHeaderParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return { data: { ...parseODataJSON(json) }, headers: { ...response.headers } };
    });
}
async function errorCheck(url, response, result) {
    if (!response.ok) {
        throw await HttpRequestError.init(response);
    }
    return [url, response, result];
}
function parseODataJSON(json) {
    let result = json;
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(json, "d")) {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(json.d, "results")) {
            result = json.d.results;
        }
        else {
            result = json.d;
        }
    }
    else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "p"])(json, "value")) {
        result = json.value;
    }
    return result;
}
/**
 * Provides a clean way to create new parse bindings without having to duplicate a lot of boilerplate
 * Includes errorCheck ahead of the supplied impl
 *
 * @param impl Method used to parse the response
 * @returns Queryable behavior binding function
 */
function parseBinderWithErrorCheck(impl) {
    return (instance) => {
        // we clear anything else registered for parse
        // add error check
        // add the impl function we are supplied
        instance.on.parse.replace(errorCheck);
        instance.on.parse(async (url, response, result) => {
            if (response.ok && typeof result === "undefined") {
                result = await impl(response);
            }
            return [url, response, result];
        });
        return instance;
    };
}
class HttpRequestError extends Error {
    constructor(message, response, status = response.status, statusText = response.statusText) {
        super(message);
        this.response = response;
        this.status = status;
        this.statusText = statusText;
        this.isHttpRequestError = true;
    }
    static async init(r) {
        const t = await r.clone().text();
        return new HttpRequestError(`Error making HttpClient request in queryable [${r.status}] ${r.statusText} ::> ${t}`, r);
    }
}
//# sourceMappingURL=parsers.js.map

/***/ }),

/***/ "v6VW":
/*!************************************!*\
  !*** ./node_modules/@pnp/sp/fi.js ***!
  \************************************/
/*! exports provided: SPFI, spfi */
/*! exports used: SPFI, spfi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SPFI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return spfi; });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ "F4qD");

class SPFI {
    /**
     * Creates a new instance of the SPFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root = "") {
        this._root = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* SPQueryable */ "n"])(root);
    }
    /**
     * Applies one or more behaviors which will be inherited by all instances chained from this root
     *
     */
    using(...behaviors) {
        this._root.using(...behaviors);
        return this;
    }
    /**
     * Used by extending classes to create new objects directly from the root
     *
     * @param factory The factory for the type of object to create
     * @returns A configured instance of that object
     */
    create(factory, path) {
        return factory(this._root, path);
    }
}
function spfi(root = "") {
    if (typeof root === "object" && !Reflect.has(root, "length")) {
        root = root._root;
    }
    return new SPFI(root);
}
//# sourceMappingURL=fi.js.map

/***/ }),

/***/ "vX5r":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/site-users/index.js ***!
  \**************************************************/
/*! exports provided: SiteUser, SiteUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "EjWy");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "y+KB");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "vXSC":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/security/funcs.js ***!
  \************************************************/
/*! exports provided: getUserEffectivePermissions, getCurrentUserEffectivePermissions, breakRoleInheritance, resetRoleInheritance, userHasPermissions, currentUserHasPermissions, hasPermissions */
/*! exports used: breakRoleInheritance, currentUserHasPermissions, getCurrentUserEffectivePermissions, getUserEffectivePermissions, hasPermissions, resetRoleInheritance, userHasPermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserEffectivePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getCurrentUserEffectivePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return breakRoleInheritance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return resetRoleInheritance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return userHasPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return currentUserHasPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return hasPermissions; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "1dmT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operations.js */ "UK2s");



/**
* Gets the effective permissions for the user supplied
*
* @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
*/
async function getUserEffectivePermissions(loginName) {
    const q = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPInstance */ "t"])(this, "getUserEffectivePermissions(@user)");
    q.query.set("@user", `'${loginName}'`);
    return q();
}
/**
 * Gets the effective permissions for the current user
 */
async function getCurrentUserEffectivePermissions() {
    return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPQueryable */ "n"])(this, "EffectiveBasePermissions")();
}
/**
 * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
 *
 * @param copyRoleAssignments If true the permissions are copied from the current parent scope
 * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
 */
async function breakRoleInheritance(copyRoleAssignments = false, clearSubscopes = false) {
    await Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPQueryable */ "n"])(this, `breakroleinheritance(copyroleassignments=${copyRoleAssignments}, clearsubscopes=${clearSubscopes})`));
}
/**
 * Removes the local role assignments so that it re-inherit role assignments from the parent object.
 *
 */
async function resetRoleInheritance() {
    await Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPost */ "a"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* SPQueryable */ "n"])(this, "resetroleinheritance"));
}
/**
 * Determines if a given user has the appropriate permissions
 *
 * @param loginName The user to check
 * @param permission The permission being checked
 */
async function userHasPermissions(loginName, permission) {
    const perms = await getUserEffectivePermissions.call(this, loginName);
    return this.hasPermissions(perms, permission);
}
/**
 * Determines if the current user has the requested permissions
 *
 * @param permission The permission we wish to check
 */
async function currentUserHasPermissions(permission) {
    const perms = await getCurrentUserEffectivePermissions.call(this);
    return this.hasPermissions(perms, permission);
}
/**
 * Taken from sp.js, checks the supplied permissions against the mask
 *
 * @param value The security principal's permissions on the given object
 * @param perm The permission checked against the value
 */
/* eslint-disable no-bitwise */
function hasPermissions(value, perm) {
    if (!perm) {
        return true;
    }
    if (perm === _types_js__WEBPACK_IMPORTED_MODULE_0__[/* PermissionKind */ "e"].FullMask) {
        return (value.High & 32767) === 32767 && value.Low === 65535;
    }
    perm = perm - 1;
    let num = 1;
    if (perm >= 0 && perm < 32) {
        num = num << perm;
        return 0 !== (value.Low & num);
    }
    else if (perm >= 32 && perm < 64) {
        num = num << perm - 32;
        return 0 !== (value.High & num);
    }
    return false;
}
/* eslint-enable no-bitwise */
//# sourceMappingURL=funcs.js.map

/***/ }),

/***/ "vbtm":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/encode-path-str.js ***!
  \*******************************************************/
/*! exports provided: encodePath */
/*! exports used: encodePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return encodePath; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * Encodes path portions of SharePoint urls such as decodedUrl=`encodePath(pathStr)`
 *
 * @param value The string path to encode
 * @returns A path encoded for use in SP urls
 */
function encodePath(value) {
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* stringIsNullOrEmpty */ "I"])(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        return value.replace(/!(@.*?)::(.*)$/ig, (match, labelName, v) => {
            // we do not need to encodeURIComponent v as it will be encoded automatically when it is added as a query string param
            // we do need to double any ' chars
            return `!${labelName}::${v.replace(/'/ig, "''")}`;
        });
    }
    else {
        // because this is a literal path value we encodeURIComponent after doubling any ' chars
        return encodeURIComponent(value.replace(/'/ig, "''"));
    }
}
//# sourceMappingURL=encode-path-str.js.map

/***/ }),

/***/ "vttn":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/list.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "4tXH");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _List */ "n"], "rootFolder", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Folder */ "e"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "w4d6":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/site-designs/types.js ***!
  \****************************************************/
/*! exports provided: _SiteDesigns, SiteDesigns, TemplateDesignType, ListDesignColor, ListDesignIcon */
/*! exports used: SiteDesigns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _SiteDesigns */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SiteDesigns; });
/* unused harmony export TemplateDesignType */
/* unused harmony export ListDesignColor */
/* unused harmony export ListDesignIcon */
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/core */ "JC1J");





class _SiteDesigns extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* _SPQueryable */ "r"] {
    constructor(base, methodName = "") {
        super(base);
        this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_4__[/* combine */ "s"])(Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__[/* extractWebUrl */ "e"])(this._url), `_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.${methodName}`);
    }
    run(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_3__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* body */ "_"])(props, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__[/* headers */ "v"])({ "Content-Type": "application/json;charset=utf-8" })));
    }
    /**
     * Creates a new site design available to users when they create a new site from the SharePoint home page.
     *
     * @param creationInfo A sitedesign creation information object
     */
    createSiteDesign(creationInfo) {
        return SiteDesignsCloneFactory(this, "CreateSiteDesign").run({ info: creationInfo });
    }
    /**
     * Applies a site design to an existing site collection.
     *
     * @param siteDesignId The ID of the site design to apply.
     * @param webUrl The URL of the site collection where you want to apply the site design.
     */
    applySiteDesign(siteDesignId, webUrl) {
        return SiteDesignsCloneFactory(this, "ApplySiteDesign").run({ siteDesignId: siteDesignId, "webUrl": webUrl });
    }
    /**
     * Gets the list of available site designs
     */
    getSiteDesigns() {
        return SiteDesignsCloneFactory(this, "GetSiteDesigns").run({});
    }
    /**
     * Gets information about a specific site design.
     * @param id The ID of the site design to get information about.
     */
    getSiteDesignMetadata(id) {
        return SiteDesignsCloneFactory(this, "GetSiteDesignMetadata").run({ id: id });
    }
    /**
     * Updates a site design with new values. In the REST call, all parameters are optional except the site script Id.
     * If you had previously set the IsDefault parameter to TRUE and wish it to remain true, you must pass in this parameter again (otherwise it will be reset to FALSE).
     * @param updateInfo A sitedesign update information object
     */
    updateSiteDesign(updateInfo) {
        return SiteDesignsCloneFactory(this, "UpdateSiteDesign").run({ updateInfo: updateInfo });
    }
    /**
     * Deletes a site design.
     * @param id The ID of the site design to delete.
     */
    deleteSiteDesign(id) {
        return SiteDesignsCloneFactory(this, "DeleteSiteDesign").run({ id: id });
    }
    /**
     * Gets a list of principals that have access to a site design.
     * @param id The ID of the site design to get rights information from.
     */
    getSiteDesignRights(id) {
        return SiteDesignsCloneFactory(this, "GetSiteDesignRights").run({ id: id });
    }
    /**
     * Grants access to a site design for one or more principals.
     * @param id The ID of the site design to grant rights on.
     * @param principalNames An array of one or more principals to grant view rights.
     *                       Principals can be users or mail-enabled security groups in the form of "alias" or "alias@<domain name>.com"
     * @param grantedRights Always set to 1. This represents the View right.
     */
    grantSiteDesignRights(id, principalNames, grantedRights = 1) {
        return SiteDesignsCloneFactory(this, "GrantSiteDesignRights").run({
            "grantedRights": grantedRights.toString(),
            id,
            principalNames,
        });
    }
    /**
     * Revokes access from a site design for one or more principals.
     * @param id The ID of the site design to revoke rights from.
     * @param principalNames An array of one or more principals to revoke view rights from.
     *                       If all principals have rights revoked on the site design, the site design becomes viewable to everyone.
     */
    revokeSiteDesignRights(id, principalNames) {
        return SiteDesignsCloneFactory(this, "RevokeSiteDesignRights").run({
            id,
            principalNames,
        });
    }
    /**
     * Adds a site design task on the specified web url to be invoked asynchronously.
     * @param webUrl The absolute url of the web on where to create the task
     * @param siteDesignId The ID of the site design to create a task for
     */
    addSiteDesignTask(webUrl, siteDesignId) {
        return SiteDesignsCloneFactory(this, "AddSiteDesignTask").run({ webUrl, siteDesignId });
    }
    /**
     * Adds a site design task on the current web to be invoked asynchronously.
     * @param siteDesignId The ID of the site design to create a task for
     */
    addSiteDesignTaskToCurrentWeb(siteDesignId) {
        return SiteDesignsCloneFactory(this, "AddSiteDesignTaskToCurrentWeb").run({ siteDesignId });
    }
    /**
     * Retrieves the site design task, if the task has finished running null will be returned
     * @param id The ID of the site design task
     */
    async getSiteDesignTask(id) {
        const task = await SiteDesignsCloneFactory(this, "GetSiteDesignTask").run({ "taskId": id });
        return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_4__[/* hOP */ "p"])(task, "ID") ? task : null;
    }
    /**
     * Retrieves a list of site design that have run on a specific web
     * @param webUrl The url of the web where the site design was applied
     * @param siteDesignId (Optional) the site design ID, if not provided will return all site design runs
     */
    getSiteDesignRun(webUrl, siteDesignId) {
        return SiteDesignsCloneFactory(this, "GetSiteDesignRun").run({ webUrl, siteDesignId });
    }
    /**
     * Retrieves the status of a site design that has been run or is still running
     * @param webUrl The url of the web where the site design was applied
     * @param runId the run ID
     */
    getSiteDesignRunStatus(webUrl, runId) {
        return SiteDesignsCloneFactory(this, "GetSiteDesignRunStatus").run({ webUrl, runId });
    }
}
const SiteDesigns = (baseUrl, methodName) => new _SiteDesigns(baseUrl, methodName);
const SiteDesignsCloneFactory = (baseUrl, methodName = "") => SiteDesigns(baseUrl, methodName);
var TemplateDesignType;
(function (TemplateDesignType) {
    /// <summary>
    /// Represents the Site design type.
    /// </summary>
    TemplateDesignType[TemplateDesignType["Site"] = 0] = "Site";
    /// <summary>
    /// Represents the List design type.
    /// </summary>
    TemplateDesignType[TemplateDesignType["List"] = 1] = "List";
})(TemplateDesignType || (TemplateDesignType = {}));
var ListDesignColor;
(function (ListDesignColor) {
    ListDesignColor[ListDesignColor["DarkRed"] = 0] = "DarkRed";
    ListDesignColor[ListDesignColor["Red"] = 1] = "Red";
    ListDesignColor[ListDesignColor["Orange"] = 2] = "Orange";
    ListDesignColor[ListDesignColor["Green"] = 3] = "Green";
    ListDesignColor[ListDesignColor["DarkGreen"] = 4] = "DarkGreen";
    ListDesignColor[ListDesignColor["Teal"] = 5] = "Teal";
    ListDesignColor[ListDesignColor["Blue"] = 6] = "Blue";
    ListDesignColor[ListDesignColor["NavyBlue"] = 7] = "NavyBlue";
    ListDesignColor[ListDesignColor["BluePurple"] = 8] = "BluePurple";
    ListDesignColor[ListDesignColor["DarkBlue"] = 9] = "DarkBlue";
    ListDesignColor[ListDesignColor["Lavendar"] = 10] = "Lavendar";
    ListDesignColor[ListDesignColor["Pink"] = 11] = "Pink";
})(ListDesignColor || (ListDesignColor = {}));
var ListDesignIcon;
(function (ListDesignIcon) {
    ListDesignIcon[ListDesignIcon["Bug"] = 0] = "Bug";
    ListDesignIcon[ListDesignIcon["Calendar"] = 1] = "Calendar";
    ListDesignIcon[ListDesignIcon["BullseyeTarget"] = 2] = "BullseyeTarget";
    ListDesignIcon[ListDesignIcon["ClipboardList"] = 3] = "ClipboardList";
    ListDesignIcon[ListDesignIcon["Airplane"] = 4] = "Airplane";
    ListDesignIcon[ListDesignIcon["Rocket"] = 5] = "Rocket";
    ListDesignIcon[ListDesignIcon["Color"] = 6] = "Color";
    ListDesignIcon[ListDesignIcon["Insights"] = 7] = "Insights";
    ListDesignIcon[ListDesignIcon["CubeShape"] = 8] = "CubeShape";
    ListDesignIcon[ListDesignIcon["TestBeakerSolid"] = 9] = "TestBeakerSolid";
    ListDesignIcon[ListDesignIcon["Robot"] = 10] = "Robot";
    ListDesignIcon[ListDesignIcon["Savings"] = 11] = "Savings";
})(ListDesignIcon || (ListDesignIcon = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "wMck":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/comments/types.js ***!
  \************************************************/
/*! exports provided: _Comments, Comments, _Comment, Comment, _Replies, Replies */
/*! exports used: Comments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Comments */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Comments; });
/* unused harmony export _Comment */
/* unused harmony export Comment */
/* unused harmony export _Replies */
/* unused harmony export Replies */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operations.js */ "UK2s");






let _Comments = class _Comments extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
     * Adds a new comment to this collection
     *
     * @param info Comment information to add
     */
    async add(info) {
        if (typeof info === "string") {
            info = { text: info };
        }
        const d = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Comments(this, null), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__[/* body */ "_"])(info));
        return Object.assign(this.getById(d.id), d);
    }
    /**
     * Gets a comment by id
     *
     * @param id Id of the comment to load
     */
    getById(id) {
        return Comment(this).concat(`(${id})`);
    }
    /**
     * Deletes all the comments in this collection
     */
    clear() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Comments(this, "DeleteAll"));
    }
};
_Comments = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_1__[/* defaultPath */ "e"])("comments")
], _Comments);

const Comments = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Comments);
class _Comment extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPInstance */ "i"] {
    /**
     * A comment's replies
     */
    get replies() {
        return Replies(this);
    }
    /**
     * Likes the comment as the current user
     */
    like() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Comment(this, "Like"));
    }
    /**
     * Unlikes the comment as the current user
     */
    unlike() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Comment(this, "Unlike"));
    }
    /**
     * Deletes this comment
     */
    delete() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spDelete */ "e"])(this);
    }
}
const Comment = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Comment);
let _Replies = class _Replies extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* _SPCollection */ "a"] {
    /**
     * Adds a new reply to this collection
     *
     * @param info Comment information to add
     */
    async add(info) {
        if (typeof info === "string") {
            info = { text: info };
        }
        const d = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(Replies(this, null), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__[/* body */ "_"])(info));
        return Object.assign(Comment([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__[/* odataUrlFrom */ "e"])(d)]), d);
    }
};
_Replies = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_1__[/* defaultPath */ "e"])("replies")
], _Replies);

const Replies = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__[/* spInvokableFactory */ "c"])(_Replies);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "wPXp":
/*!**************************************************!*\
  !*** external "GestionPersonajesWebPartStrings" ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: BasicGroupName, DescriptionFieldLabel, PropertyPaneDescription */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wPXp__;

/***/ }),

/***/ "wmuB":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/fields/index.js ***!
  \**********************************************/
/*! exports provided: Fields, Field, AddFieldOptions, CalendarType, ChoiceFieldFormatType, DateTimeFieldFormatType, DateTimeFieldFriendlyFormatType, FieldTypes, FieldUserSelectionMode, UrlFieldFormatType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "psVa");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "6k8n");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "KYlJ");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "y+KB":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/site-users/types.js ***!
  \**************************************************/
/*! exports provided: _SiteUsers, SiteUsers, _SiteUser, SiteUser */
/*! exports used: SiteUser, SiteUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _SiteUsers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SiteUsers; });
/* unused harmony export _SiteUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SiteUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _site_groups_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-groups/types.js */ "UuUm");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operations.js */ "UK2s");






let _SiteUsers = class _SiteUsers extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    getById(id) {
        return SiteUser(this, `getById(${id})`);
    }
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    getByEmail(email) {
        return SiteUser(this, `getByEmail('${email}')`);
    }
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    getByLoginName(loginName) {
        return SiteUser(this).concat(`('!@v::${loginName}')`);
    }
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    removeById(id) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(SiteUsers(this, `removeById(${id})`));
    }
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    removeByLoginName(loginName) {
        const o = SiteUsers(this, "removeByLoginName(@v)");
        o.query.set("@v", `'${loginName}'`);
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(o);
    }
    /**
     * Adds a user to a site collection
     *
     * @param loginName The login name of the user to add  to a site collection
     *
     */
    async add(loginName) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPost */ "a"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__[/* body */ "_"])({ LoginName: loginName }));
        return this.getByLoginName(loginName);
    }
};
_SiteUsers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_4__[/* defaultPath */ "e"])("siteusers")
], _SiteUsers);

const SiteUsers = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_SiteUsers);
/**
 * Describes a single user
 *
 */
class _SiteUser extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* deleteable */ "o"])();
    }
    /**
     * Gets the groups for this user
     *
     */
    get groups() {
        return Object(_site_groups_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SiteGroups */ "t"])(this, "groups");
    }
    /**
     * Updates this user
     *
     * @param props Group properties to update
     */
    async update(props) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__[/* spPostMerge */ "o"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__[/* body */ "_"])(props));
        return {
            data,
            user: this,
        };
    }
}
const SiteUser = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_SiteUser);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "yGnx":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/webparts/file.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _files_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../files/types.js */ "qfcF");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "pXI8");


_files_types_js__WEBPACK_IMPORTED_MODULE_0__[/* _File */ "n"].prototype.getLimitedWebPartManager = function (scope = _types_js__WEBPACK_IMPORTED_MODULE_1__[/* WebPartsPersonalizationScope */ "t"].Shared) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__[/* LimitedWebPartManager */ "e"])(this, `getLimitedWebPartManager(scope=${scope})`);
};
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ymW/":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/web.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "4tXH");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "folders", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Folders */ "t"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* addProp */ "m"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"], "rootFolder", _types_js__WEBPACK_IMPORTED_MODULE_2__[/* Folder */ "e"]);
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* folderFromServerRelativePath */ "a"])(this, folderRelativeUrl);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__[/* _Web */ "t"].prototype.getFolderById = function (uniqueId) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__[/* Folder */ "e"])(this, `getFolderById('${uniqueId}')`);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "z067":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/metadata.js ***!
  \************************************************/
/*! exports provided: metadata */
/*! exports used: metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return metadata; });
function metadata(type) {
    return {
        "__metadata": { "type": type },
    };
}
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "zYJ9":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/forms/types.js ***!
  \*********************************************/
/*! exports provided: _Forms, Forms, _Form, Form */
/*! exports used: Forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Forms */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Forms; });
/* unused harmony export _Form */
/* unused harmony export Form */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators.js */ "hMpi");



/**
 * Describes a collection of Form objects
 *
 */
let _Forms = class _Forms extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPCollection */ "a"] {
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    getById(id) {
        return Form(this).concat(`('${id}')`);
    }
};
_Forms = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "e"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_2__[/* defaultPath */ "e"])("forms")
], _Forms);

const Forms = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Forms);
/**
 * Describes a single of Form instance
 *
 */
class _Form extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* _SPInstance */ "i"] {
}
const Form = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__[/* spInvokableFactory */ "c"])(_Form);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "zhiF":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/assign-from.js ***!
  \*********************************************************/
/*! exports provided: AssignFrom */
/*! exports used: AssignFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AssignFrom; });
/**
 * Behavior that will assign a ref to the source's observers and reset the instance's inheriting flag
 *
 * @param source The source instance from which we will assign the observers
 */
function AssignFrom(source) {
    return (instance) => {
        instance.observers = source.observers;
        instance._inheritingObservers = true;
        return instance;
    };
}
//# sourceMappingURL=assign-from.js.map

/***/ }),

/***/ "zlmH":
/*!**********************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/language.js ***!
  \**********************************************************/
/*! exports provided: getLanguage, setLanguage */
/*! exports used: getLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getLanguage; });
/* unused harmony export setLanguage */
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ "Ekzi");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "/o+z");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionStorage */ "mRvw");



// Default to undefined so that we initialize on first read.
var _language;
var STORAGE_KEY = 'language';
/**
 * Gets the language set for the page.
 * @param persistenceType - Where to persist the value. Default is `sessionStorage` if available.
 */
function getLanguage(persistenceType) {
    if (persistenceType === void 0) { persistenceType = 'sessionStorage'; }
    if (_language === undefined) {
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "e"])();
        var savedLanguage = persistenceType === 'localStorage'
            ? _localStorage__WEBPACK_IMPORTED_MODULE_1__[/* getItem */ "e"](STORAGE_KEY)
            : persistenceType === 'sessionStorage'
                ? _sessionStorage__WEBPACK_IMPORTED_MODULE_2__[/* getItem */ "e"](STORAGE_KEY)
                : undefined;
        if (savedLanguage) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
function setLanguage(language, persistenceParam) {
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "e"])();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    var persistenceType = persistenceParam === true ? 'none' : !persistenceParam ? 'sessionStorage' : persistenceParam;
    if (persistenceType === 'localStorage') {
        _localStorage__WEBPACK_IMPORTED_MODULE_1__[/* setItem */ "t"](STORAGE_KEY, language);
    }
    else if (persistenceType === 'sessionStorage') {
        _sessionStorage__WEBPACK_IMPORTED_MODULE_2__[/* setItem */ "t"](STORAGE_KEY, language);
    }
    _language = language;
}
//# sourceMappingURL=language.js.map

/***/ })

/******/ })});;
//# sourceMappingURL=gestion-personajes-web-part.js.map