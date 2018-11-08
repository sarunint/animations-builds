/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AnimationTransitionInstruction() { }
/** @type {?} */
AnimationTransitionInstruction.prototype.element;
/** @type {?} */
AnimationTransitionInstruction.prototype.triggerName;
/** @type {?} */
AnimationTransitionInstruction.prototype.isRemovalTransition;
/** @type {?} */
AnimationTransitionInstruction.prototype.fromState;
/** @type {?} */
AnimationTransitionInstruction.prototype.fromStyles;
/** @type {?} */
AnimationTransitionInstruction.prototype.toState;
/** @type {?} */
AnimationTransitionInstruction.prototype.toStyles;
/** @type {?} */
AnimationTransitionInstruction.prototype.timelines;
/** @type {?} */
AnimationTransitionInstruction.prototype.queriedElements;
/** @type {?} */
AnimationTransitionInstruction.prototype.preStyleProps;
/** @type {?} */
AnimationTransitionInstruction.prototype.postStyleProps;
/** @type {?} */
AnimationTransitionInstruction.prototype.totalTime;
/** @type {?|undefined} */
AnimationTransitionInstruction.prototype.errors;
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} isRemovalTransition
 * @param {?} fromStyles
 * @param {?} toStyles
 * @param {?} timelines
 * @param {?} queriedElements
 * @param {?} preStyleProps
 * @param {?} postStyleProps
 * @param {?} totalTime
 * @param {?=} errors
 * @return {?}
 */
export function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
    return {
        type: 0 /* TransitionAnimation */,
        element,
        triggerName,
        isRemovalTransition,
        fromState,
        fromStyles,
        toState,
        toStyles,
        timelines,
        queriedElements,
        preStyleProps,
        postStyleProps,
        totalTime,
        errors
    };
}
//# sourceMappingURL=animation_transition_instruction.js.map