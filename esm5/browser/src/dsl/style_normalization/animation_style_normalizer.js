/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@publicApi
 * @abstract
 */
var /**
 * \@publicApi
 * @abstract
 */
AnimationStyleNormalizer = /** @class */ (function () {
    function AnimationStyleNormalizer() {
    }
    return AnimationStyleNormalizer;
}());
/**
 * \@publicApi
 * @abstract
 */
export { AnimationStyleNormalizer };
if (false) {
    /**
     * @abstract
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { };
    /**
     * @abstract
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) { };
}
/**
 * \@publicApi
 */
var /**
 * \@publicApi
 */
NoopAnimationStyleNormalizer = /** @class */ (function () {
    function NoopAnimationStyleNormalizer() {
    }
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    NoopAnimationStyleNormalizer.prototype.normalizePropertyName = /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    function (propertyName, errors) { return propertyName; };
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    NoopAnimationStyleNormalizer.prototype.normalizeStyleValue = /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    function (userProvidedProperty, normalizedProperty, value, errors) {
        return /** @type {?} */ (value);
    };
    return NoopAnimationStyleNormalizer;
}());
/**
 * \@publicApi
 */
export { NoopAnimationStyleNormalizer };
//# sourceMappingURL=animation_style_normalizer.js.map